import Code from "../../Code";
import Output from "../../Output";

// = platform
const PkDemo = () => {
  return (
    <div>
      <Code
        snippet={`
navigator.platform ? navigator.platform : "unknown";
        `.trim()}
      />

      <Output
        generator={() => {
          return navigator.platform ? navigator.platform : "unknown";
        }}
      />
    </div>
  );
};

export default PkDemo;
