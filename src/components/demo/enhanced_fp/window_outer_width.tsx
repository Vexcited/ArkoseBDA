import { numberOrNull } from "../../../impl/utils";
import Code from "../../Code";
import Output from "../../Output";

const WindowOuterWidthDemo = () => {
  return (
    <div>
      <Code
        snippet={`
numberOrNull(window.outerWidth);
        `.trim()}
      />

      <Output
        generator={() => {
          return numberOrNull(window.outerWidth);
        }}
      />
    </div>
  );
};

export default WindowOuterWidthDemo;
