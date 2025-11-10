import { numberOrNull } from "../../../impl/utils";
import Code from "../../Code";
import Output from "../../Output";

const WindowInnerHeightDemo = () => {
  return (
    <div>
      <Code
        snippet={`
numberOrNull(window.innerHeight);
        `.trim()}
      />

      <Output
        generator={() => {
          return numberOrNull(window.innerHeight);
        }}
      />
    </div>
  );
};

export default WindowInnerHeightDemo;
