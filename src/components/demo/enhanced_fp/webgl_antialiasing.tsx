import Code from "../../Code";
import Output from "../../Output";

const WebglAntialiasingDemo = () => {
  return (
    <div>
      <Code
        snippet={`
() => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  return ctx.getContextAttributes().antialias ? "yes" : "no";
}
        `.trim()}
      />

      <Output
        generator={() => {
          const canvas = document.createElement("canvas");
          const ctx =
            canvas.getContext("webgl") ||
            canvas.getContext("experimental-webgl");
          // @ts-expect-error
          return ctx.getContextAttributes().antialias ? "yes" : "no";
        }}
      />
    </div>
  );
};

export default WebglAntialiasingDemo;
