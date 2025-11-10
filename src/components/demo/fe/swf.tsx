import Code from "../../Code";
import Output from "../../Output";

const SwfDemo = () => {
  return (
    <div>
      <Code
        snippet={`
typeof window.swfobject !== "undefined";
        `.trim()}
      />

      <Output
        generator={() => {
          // @ts-expect-error
          return typeof window.swfobject !== "undefined";
        }}
      />
    </div>
  );
};

export default SwfDemo;
