import Code from "../Code";
import Output from "../Output";

const JsbdDemo = () => {
  return (
    <div>
      <Code
        snippet={`
() => {
  let webdriver = JSON.stringify(navigator.webdriver);

  if (navigator.webdriver === void 0) {
    webdriver = "undefined";
    if (Object.getOwnPropertyDescriptor(navigator, "webdriver")) {
      webdriver = "faked";
    }
  }

  return JSON.stringify({
    HL: window.history.length,
    NCE: navigator.cookieEnabled,
    DT: document.title,
    NWD: webdriver,
    DMTO: 1,
    DOTO: 1,
  });
}
        `.trim()}
      />

      <Output
        generator={() => {
          let webdriver = JSON.stringify(navigator.webdriver);

          if (navigator.webdriver === void 0) {
            webdriver = "undefined";
            if (Object.getOwnPropertyDescriptor(navigator, "webdriver")) {
              webdriver = "faked";
            }
          }

          return JSON.stringify({
            HL: window.history.length,
            NCE: navigator.cookieEnabled,
            DT: document.title,
            NWD: webdriver,
            DMTO: 1,
            DOTO: 1,
          });
        }}
      />
    </div>
  );
};

export default JsbdDemo;
