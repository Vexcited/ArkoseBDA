import Code from "../../Code";
import Output from "../../Output";

const HDemo = () => {
  return (
    <div>
      <Code
        snippet={`
navigator.hardwareConcurrency ? navigator.hardwareConcurrency : "";
        `.trim()}
      />

      <Output
        generator={() => {
          return navigator.hardwareConcurrency
            ? navigator.hardwareConcurrency
            : "";
        }}
      />
    </div>
  );
};

export default HDemo;
