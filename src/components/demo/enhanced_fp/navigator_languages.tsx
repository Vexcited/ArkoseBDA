import Code from "../../Code";
import Output from "../../Output";

const NavigatorLanguagesDemo = () => {
  return (
    <div>
      <Code
        snippet={`
navigator.languages && typeof navigator.languages.join == "function"
    ? navigator.languages.join(",")
    : null;
        `.trim()}
      />

      <Output
        generator={() => {
          return navigator.languages &&
            typeof navigator.languages.join == "function"
            ? navigator.languages.join(",")
            : null;
        }}
      />
    </div>
  );
};

export default NavigatorLanguagesDemo;
