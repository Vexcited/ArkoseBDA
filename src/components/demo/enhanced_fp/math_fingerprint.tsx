import { md5hex } from "../../../impl/utils";
import Code from "../../Code";
import Output from "../../Output";

const MathFingerprintDemo = () => {
  return (
    <div>
      <Code
        snippet={`
() => {
  const callOrNaN = (fn, ...args) => {
    if (typeof fn === "function") {
      return fn(...args);
    }
    return NaN;
  };

  const values = [
    callOrNaN(Math.acos, 0.123),
    callOrNaN(Math.acosh, Math.SQRT2),
    callOrNaN(Math.atan, 2),
    callOrNaN(Math.atanh, 0.5),
    callOrNaN(Math.cbrt, Math.PI),
    callOrNaN(Math.cos, 21 * Math.LN2),
    callOrNaN(Math.cos, 21 * Math.SQRT1_2),
    callOrNaN(Math.cosh, 492 * Math.LOG2E),
    callOrNaN(Math.expm1, 1),
    callOrNaN(Math.hypot, Math.LOG2E, -100),
    callOrNaN(Math.log10, 7 * Math.LOG10E),
    callOrNaN(Math.pow, Math.PI, -100),
    callOrNaN(Math.pow, 0.002, -100),
    callOrNaN(Math.sin, Math.PI),
    callOrNaN(Math.sin, 39 * Math.E),
    callOrNaN(Math.sinh, Math.PI),
    callOrNaN(Math.sinh, 492 * Math.LOG2E),
    callOrNaN(Math.tan, 10 * Math.LOG2E),
    callOrNaN(Math.tanh, 0.123),
  ].map((t) => t.toString());

  return md5hex(values.join(","));
}
        `.trim()}
      />

      <Output
        generator={() => {
          // @ts-expect-error
          const callOrNaN = (fn, ...args) => {
            if (typeof fn === "function") {
              return fn(...args);
            }
            return NaN;
          };

          const values = [
            callOrNaN(Math.acos, 0.123),
            callOrNaN(Math.acosh, Math.SQRT2),
            callOrNaN(Math.atan, 2),
            callOrNaN(Math.atanh, 0.5),
            callOrNaN(Math.cbrt, Math.PI),
            callOrNaN(Math.cos, 21 * Math.LN2),
            callOrNaN(Math.cos, 21 * Math.SQRT1_2),
            callOrNaN(Math.cosh, 492 * Math.LOG2E),
            callOrNaN(Math.expm1, 1),
            callOrNaN(Math.hypot, Math.LOG2E, -100),
            callOrNaN(Math.log10, 7 * Math.LOG10E),
            callOrNaN(Math.pow, Math.PI, -100),
            callOrNaN(Math.pow, 0.002, -100),
            callOrNaN(Math.sin, Math.PI),
            callOrNaN(Math.sin, 39 * Math.E),
            callOrNaN(Math.sinh, Math.PI),
            callOrNaN(Math.sinh, 492 * Math.LOG2E),
            callOrNaN(Math.tan, 10 * Math.LOG2E),
            callOrNaN(Math.tanh, 0.123),
          ].map((t) => t.toString());

          return md5hex(values.join(","));
        }}
      />
    </div>
  );
};

export default MathFingerprintDemo;
