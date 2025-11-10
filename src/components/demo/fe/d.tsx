import Code from "../../Code";
import Output from "../../Output";

// = depth
const DDemo = () => {
  return (
    <div>
      <Code
        snippet={`
screen.colorDepth || -1;
        `.trim()}
      />

      <Output
        generator={() => {
          return screen.colorDepth || -1;
        }}
      />
    </div>
  );
};

export default DDemo;
