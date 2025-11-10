import { numberOrNull } from "../../../impl/utils";
import Code from "../../Code";
import Output from "../../Output";

const WindowInnerWidthDemo = () => {
  return (
    <div>
      <Code
        snippet={`
numberOrNull(window.innerWidth);
        `.trim()}
      />

      <Output
        generator={() => {
          return numberOrNull(window.innerWidth);
        }}
      />
    </div>
  );
};

export default WindowInnerWidthDemo;
