import Code from "../../Code";
import Output from "../../Output";

// = language
const LDemo = () => {
  return (
    <div>
      <Code
        snippet={`
navigator.language ||
  navigator.userLanguage ||
  navigator.browserLanguage ||
  navigator.systemLanguage ||
  "";
        `.trim()}
      />

      <Output
        generator={() => {
          return (
            navigator.language ||
            // @ts-expect-error
            navigator.userLanguage ||
            // @ts-expect-error
            navigator.browserLanguage ||
            // @ts-expect-error
            navigator.systemLanguage ||
            ""
          );
        }}
      />
    </div>
  );
};

export default LDemo;
