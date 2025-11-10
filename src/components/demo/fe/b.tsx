import Code from "../../Code";
import Output from "../../Output";

const BDemo = () => {
  return (
    <div>
      <Code
        snippet={`
!(!document.body || !document.body.addBehavior);
        `.trim()}
      />

      <Output
        generator={() => {
          // @ts-expect-error
          return !(!document.body || !document.body.addBehavior);
        }}
      />
    </div>
  );
};

export default BDemo;
