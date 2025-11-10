import Code from "../../Code";
import Output from "../../Output";

const WebglVendorDemo = () => {
  return (
    <div>
      <Code
        snippet={`
() => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  return ctx.getParameter(ctx.VENDOR);
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
          return ctx.getParameter(ctx.VENDOR);
        }}
      />
    </div>
  );
};

export default WebglVendorDemo;
