import { removeQueryParams } from "../../../impl/utils";
import Code from "../../Code";
import Output from "../../Output";

const WindowLocationHrefDemo = () => {
  return (
    <div>
      <Code
        snippet={`
window.location && window.location.href
    ? removeQueryParams(window.location.href).split("#")[0]
    : null;
        `.trim()}
      />

      <Output
        generator={() => {
          return window.location && window.location.href
            ? removeQueryParams(window.location.href)!.split("#")[0]
            : null;
        }}
      />
    </div>
  );
};

export default WindowLocationHrefDemo;
