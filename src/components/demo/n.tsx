import Code from "../Code";
import Output from "../Output";

const NDemo = () => {
  return (
    <div>
      <Code
        snippet={`
Math.floor(Date.now() / 1000).toString();
        `.trim()}
      />

      <Output
        generator={() => {
          return Math.floor(Date.now() / 1000).toString();
        }}
      />
    </div>
  );
};

export default NDemo;
