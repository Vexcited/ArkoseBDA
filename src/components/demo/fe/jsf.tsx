import Code from "../../Code";
import Output from "../../Output";

const JsfDemo = () => {
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

export default JsfDemo;
