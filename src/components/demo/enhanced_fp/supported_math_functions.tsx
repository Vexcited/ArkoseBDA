import { md5hex } from "../../../impl/utils";
import Code from "../../Code";
import Output from "../../Output";

const SupportedMathFunctionsDemo = () => {
  return (
    <div>
      <Code
        snippet={`
() => {
  const functions = Object.getOwnPropertyNames(Math).filter(
    (property) => typeof Math[property] === "function"
  );

  return md5hex(functions.join(","));
}
        `.trim()}
      />

      <Output
        generator={() => {
          const functions = Object.getOwnPropertyNames(Math).filter(
            // @ts-expect-error
            (property) => typeof Math[property] === "function"
          );

          return md5hex(functions.join(","));
        }}
      />
    </div>
  );
};

export default SupportedMathFunctionsDemo;
