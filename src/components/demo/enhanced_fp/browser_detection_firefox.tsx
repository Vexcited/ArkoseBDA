import Code from "../../Code";
import Output from "../../Output";

const BrowserDectectionFirefoxDemo = () => {
  return (
    <div>
      <Code
        snippet={`
navigator.userAgent
  ? navigator.userAgent.indexOf("Firefox") > 0
  : null;
        `.trim()}
      />

      <Output
        generator={() => {
          return navigator.userAgent
            ? navigator.userAgent.indexOf("Firefox") > 0
            : null;
        }}
      />
    </div>
  );
};

export default BrowserDectectionFirefoxDemo;
