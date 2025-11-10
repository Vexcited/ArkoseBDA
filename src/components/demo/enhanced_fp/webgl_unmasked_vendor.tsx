import Code from "../../Code";
import Output from "../../Output";

const WebglUnmaskedVendorDemo = () => {
  return (
    <div>
      <Code
        snippet={`
() => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  const ext = ctx.getExtension("WEBGL_debug_renderer_info");
  return ctx.getParameter(ext["UNMASKED_VENDOR_WEBGL"]);
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
          const ext = ctx.getExtension("WEBGL_debug_renderer_info");
          // @ts-expect-error
          return ctx.getParameter(ext["UNMASKED_VENDOR_WEBGL"]);
        }}
      />
    </div>
  );
};

export default WebglUnmaskedVendorDemo;
