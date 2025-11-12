//! This will take an Arkose `enforcement.js` file and unscramble
//! all the strings so it gets finally a bit readable.

import {
  BinaryExpression,
  ForStatement,
  FunctionExpression,
  Node,
  SimpleCallExpression,
} from "estree";

import {
  traverse,
  is,
  BindingPathT,
  BindingKind,
  Binding,
  NodePath,
} from "estree-toolkit";

import { parseScript } from "meriyah";
import { generate } from "astring";

const original = process.argv[2];
const destination = process.argv[3];

if (!original || !destination) {
  console.log(`Usage: bun unscramble.ts original.js destination.js`);
  process.exit(1);
}

const script = await Bun.file(original).text();
const ast = parseScript(script);

traverse(ast, {
  $: { scope: true },

  CallExpression($) {
    const ret = { call: $ } as {
      constants_fn: Binding<BindingKind>;
      constants: Array<string>;
      constants_scrambled: Array<string>;
      scrambler_fn: FunctionExpression;
      scrambler: ForStatement;
      call: NodePath<SimpleCallExpression, Node>;
      offset_fn: BindingPathT<BindingKind>;
      offset: number;
      index: number;
    };

    read_index: {
      /*
        We're looking for function calls that looks like the following.

        O(100);

        and of course,

        var S = 50;
        O(50);

        The number from the first argument will be our index for the
        constants giver.
      */

      const path = ret.call;
      if (!path.node || !path.scope) return;

      const args = path.node.arguments;
      if (args.length !== 1) return;

      const arg = args[0];

      if (is.identifier(arg)) {
        const decl = path.scope.getBinding(arg.name);
        if (!decl || !is.variableDeclarator(decl.path.node)) return;

        const init = decl.path.node.init;
        if (!is.literal(init) || typeof init.value !== "number") return;

        ret.index = init.value;
      } else if (is.literal(arg) && typeof arg.value === "number") {
        ret.index = arg.value;
      } else return;
    }

    get_offset_fn: {
      /*
        This is what we're looking for here.

        function j(t, e) {
          var r = N();
          return (
            (j = function (t, e) {
              return r[(t -= 477)];
            }),
            j(t, e)
          );
        }

        `j` is the function name we'll grab from binding.
        Sometimes it is wrapped behind an identifier,

        rE = j;
        rE(200);

        and even wrapped into multiple identifiers!
        This should be recursive.
      */

      const path = ret.call;
      if (!path.node || !path.scope) return;

      if (!is.identifier(path.node.callee)) return;

      const fn = path.scope.getBinding(path.node.callee.name);
      if (!fn) return;

      if (is.functionDeclaration(fn.path.node)) {
        if (fn.path.node.params.length !== 2) return;
        ret.offset_fn = fn.path;
      } else if (is.variableDeclarator(fn.path.node)) {
        const recursive = (bind: Binding<BindingKind>) => {
          const node = bind.path.node;

          if (
            !is.variableDeclarator(node) ||
            !is.identifier(node.id) ||
            !is.identifier(node.init)
          )
            return;

          const ref = bind.scope.getBinding(node.init.name);
          if (!ref) return;

          if (is.functionDeclaration(ref.path.node)) {
            if (ref.path.node.params.length !== 2) return;
            return ref.path;
          } else if (is.variableDeclarator(ref.path)) {
            return recursive(ref);
          } else return;
        };

        const offset_fn = recursive(fn);
        if (!offset_fn) return;
        ret.offset_fn = offset_fn;
      } else return;
    }

    read_constants: {
      /*
        We're looking at the function declaration
        of the following function call.

        var r = N();

        This contains every constants needed to retrieve the
        constant with the index we got earlier.
      */

      const path = ret.offset_fn;
      if (!is.functionDeclaration(path.node) || !path.scope) return;
      const decls = path.node.body.body[0];

      if (
        !is.variableDeclaration(decls) ||
        decls.kind !== "var" ||
        decls.declarations.length !== 1
      )
        return;

      const decl = decls.declarations[0];
      if (
        !is.variableDeclarator(decl) ||
        !is.callExpression(decl.init) ||
        !is.identifier(decl.init.callee)
      )
        return;

      const fn = path.scope.getBinding(decl.init.callee.name);
      if (!fn || !is.functionDeclaration(fn.path.node)) return;
      ret.constants_fn = fn;

      /*
        This is what we have right now.
        Let's look for the first variable in the function body.

        function N() {
          var t = [
            "...",
            "...",
            "..."
          ];
          return (N = function () {
            return t;
          })();
        }

        It should contain all the constants.
      */

      const inner = fn.path.node.body.body[0];
      if (
        !is.variableDeclaration(inner) ||
        !is.variableDeclarator(inner.declarations[0])
      )
        return;

      const init = inner.declarations[0].init;
      if (!is.arrayExpression(init)) return;

      ret.constants = init.elements.map((el) => {
        if (!is.literal(el)) throw new Error("not literal in constants array");
        return el.value;
      }) as Array<string>;
    }

    read_offset: {
      /*
        We're extracting the offset from this return function
        in the offset function.

        return (
          (j = function (t, e) {
            return r[(t -= 477)];
          }),
          j(t, e)
        );
      */

      const path = ret.offset_fn;
      if (!is.functionDeclaration(path.node) || !path.scope) return;

      let rtn = path.node.body.body[1];
      if (!is.returnStatement(rtn) || !is.sequenceExpression(rtn.argument))
        return;

      const assign_expression = rtn.argument.expressions[0];
      if (!is.assignmentExpression(assign_expression)) return;

      const fn_expression = assign_expression.right;
      if (!is.functionExpression(fn_expression)) return;

      rtn = fn_expression.body.body[0];
      if (!is.returnStatement(rtn) || !is.memberExpression(rtn.argument))
        return;

      const t_assign_expression = rtn.argument.property;
      if (!is.assignmentExpression(t_assign_expression)) return;

      const right = t_assign_expression.right;
      if (!is.literal(right) || typeof right.value !== "number") return;

      ret.offset = right.value;
    }

    find_scrambler: {
      /*
        For security purposes - I guess - they scramble the array of constants
        before using it. It is defined in a function that calls itself.
        It looks like this.

        !(function (t, e) {
          for ( ... )
          ^^^ we're extracting this for loop,
              we'll interpret it later!
        })(Be)

        Where `Be` is the function containing the constants array.
        They only take the first item and push it to the end if the
        condition is truthy.
      */

      const found = ret.constants_fn.references.find((ref) => {
        if (!is.callExpression(ref.parentPath)) return false; // used as first argument!
        if (!is.unaryExpression(ref.parentPath.parentPath)) return false;
        if (ref.parentPath.parentPath.node?.operator !== "!") return false;
        return true;
      });

      if (!found) return;
      const call_expression = found.parentPath;

      // NOTE: we recheck for types...
      if (!is.callExpression(call_expression) || !call_expression.node) return;

      const function_expression = call_expression.node.callee;
      if (!is.functionExpression(function_expression)) return;

      const for_statement = function_expression.body.body[0];
      if (!is.forStatement(for_statement)) return;

      ret.scrambler_fn = function_expression;
      ret.scrambler = for_statement;
    }

    scramble_constants: {
      /*
        for (
          var r = 469,
            n = 457,
            o = 464,
            i = 481,
            a = 471,
            c = 462,
            u = 460,
            s = 461,
            f = 478,
            l = 470,
            p = 483,
            v = 472,
            h = Fr,  -> (i) => ret.constants[i - ret.offset]
            d = t(); -> ret.constants
          ;

        )
          try {
            if (
              274856 ===
              (parseInt(h(r)) / 1) * (parseInt(h(n)) / 2) +
                parseInt(h(o)) / 3 +
                (-parseInt(h(i)) / 4) * (-parseInt(h(a)) / 5) +
                (parseInt(h(c)) / 6) * (-parseInt(h(u)) / 7) +
                -parseInt(h(s)) / 8 +
                (parseInt(h(f)) / 9) * (-parseInt(h(l)) / 10) +
                (parseInt(h(p)) / 11) * (parseInt(h(v)) / 12)
            )
              break;
            d.push(d.shift());
          } catch (t) {
            d.push(d.shift());
          }

        Since we're lazy, we'll evaluate this code!
        Eventually, we'll to find the variables not initialized with numbers
        to find which one is the offset function and the which one is the constants.
      */

      const decls = ret.scrambler.init;
      if (!is.variableDeclaration(decls)) return;

      let constants_name: string | undefined;
      let offset_fn_name: string | undefined;

      for (const decl of decls.declarations) {
        if (is.callExpression(decl.init) && is.identifier(decl.init.callee)) {
          constants_name = decl.init.callee.name;
        } else if (is.identifier(decl.init)) {
          offset_fn_name = decl.init.name;
        }
      }

      if (!constants_name || !offset_fn_name) return;

      ret.constants_scrambled = eval(`
        const __constants = ${JSON.stringify(ret.constants)};

        (function() {
          const ${constants_name} = () => __constants;
          const ${offset_fn_name} = (i) => __constants[i - ${ret.offset}];
          ${generate(ret.scrambler)}
        })();

        __constants;
      `);
    }

    assert_not_in_protected_fn: {
      /*
        Simply because if we start replacing indexes from the scrambler
        or anything else that this algorithm uses, it'll work for the
        first iteration but will break on the next ones.
      */

      const parent = ret.call.getFunctionParent();
      if (parent && parent.node === ret.scrambler_fn) return;
    }

    replace_index: {
      ret.call.replaceWith({
        type: "Literal",
        value: ret.constants_scrambled[ret.index - ret.offset],
      });
    }
  },
});

join_strings: {
  /*
    After everything got replaced, we have code that could look like this.

    > Object["getOwnProper" + "tyDesc" + "riptor"];

    For the sake of readability, it would be better if it was...

    > Object["getOwnPropertyDescriptor"];

    So let's make it happen.
  */

  traverse(ast, {
    $: { scope: true },
    BinaryExpression(path) {
      if (!path.node || !path.scope) return;

      const recursive = ({
        right,
        left,
      }: BinaryExpression): string | undefined => {
        if (!is.literal(right) || typeof right.value !== "string") return;

        if (is.literal(left) && typeof left.value === "string") {
          return left.value + right.value;
        } else if (is.binaryExpression(left)) {
          return recursive(left) + right.value;
        } else return;
      };

      const value = recursive(path.node);
      if (value === void 0) return;

      path.replaceWith({
        type: "Literal",
        value,
      });
    },
  });
}

await Bun.write(destination, generate(ast));
