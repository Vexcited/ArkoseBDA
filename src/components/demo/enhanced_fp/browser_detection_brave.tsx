import Code from "../../Code";
import Output from "../../Output";

const BrowserDetectionBraveDemo = () => {
  return (
    <div>
      <Code
        snippet={`
!!navigator.brave;
        `.trim()}
      />

      <Output
        generator={() => {
          // @ts-expect-error
          return !!navigator.brave;
        }}
      />
    </div>
  );
};

export default BrowserDetectionBraveDemo;
