import { numberOrNull } from "../../../impl/utils";
import Code from "../../Code";
import Output from "../../Output";

const WindowOuterHeightDemo = () => {
  return (
    <div>
      <Code
        snippet={`
numberOrNull(window.outerHeight);
        `.trim()}
      />

      <Output
        generator={() => {
          return numberOrNull(window.outerHeight);
        }}
      />
    </div>
  );
};

export default WindowOuterHeightDemo;
