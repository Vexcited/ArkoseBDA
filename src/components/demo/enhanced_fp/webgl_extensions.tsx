import Code from "../../Code";
import Output from "../../Output";

const WebglExtensionsDemo = () => {
  return (
    <div>
      <Code
        snippet={`
() => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  return ctx.getSupportedExtensions().join(";");
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
          return ctx.getSupportedExtensions().join(";");
        }}
      />
    </div>
  );
};

export default WebglExtensionsDemo;
