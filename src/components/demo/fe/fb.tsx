import Code from "../../Code";
import Output from "../../Output";

const FbDemo = () => {
  return (
    <div>
      <Code
        snippet={`
TODO
        `.trim()}
      />

      <Output
        generator={() => {
          return void 0; // TODO
        }}
      />
    </div>
  );
};

export default FbDemo;
