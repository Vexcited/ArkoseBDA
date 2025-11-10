import { numberOrNull } from "../../../impl/utils";
import Code from "../../Code";
import Output from "../../Output";

const ScreenPixelDepthDemo = () => {
  return (
    <div>
      <Code
        snippet={`
numberOrNull(screen.pixelDepth);
        `.trim()}
      />

      <Output
        generator={() => {
          return numberOrNull(screen.pixelDepth);
        }}
      />
    </div>
  );
};

export default ScreenPixelDepthDemo;
