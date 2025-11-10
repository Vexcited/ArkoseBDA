import Code from "../../Code";
import Output from "../../Output";

const CpucDemo = () => {
  return (
    <div>
      <Code
        snippet={`
navigator.cpuClass ? navigator.cpuClass : "unknown";
        `.trim()}
      />

      <Output
        generator={() => {
          // @ts-expect-error
          return navigator.cpuClass ? navigator.cpuClass : "unknown";
        }}
      />
    </div>
  );
};

export default CpucDemo;
