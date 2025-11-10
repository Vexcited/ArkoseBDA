import Code from "../../Code";
import Output from "../../Output";

const PrDemo = () => {
  return (
    <div>
      <Code
        snippet={`
window.devicePixelRatio || "";
        `.trim()}
      />

      <Output
        generator={() => {
          return window.devicePixelRatio || "";
        }}
      />
    </div>
  );
};

export default PrDemo;
