import Code from "../../Code";
import Output from "../../Output";

// = open database
const OdbDemo = () => {
  return (
    <div>
      <Code
        snippet={`
!!window.openDatabase;
        `.trim()}
      />

      <Output
        generator={() => {
          // @ts-expect-error
          return !!window.openDatabase;
        }}
      />
    </div>
  );
};

export default OdbDemo;
