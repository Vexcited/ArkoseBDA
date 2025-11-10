import Code from "../../Code";
import Output from "../../Output";

// = timezone offset
const ToDemo = () => {
  return (
    <div>
      <Code
        snippet={`
new Date().getTimezoneOffset();
        `.trim()}
      />

      <Output
        generator={() => {
          return new Date().getTimezoneOffset();
        }}
      />
    </div>
  );
};

export default ToDemo;
