import Code from "../../Code";
import Output from "../../Output";

// = localstorage
const LsDemo = () => {
  return (
    <div>
      <Code
        snippet={`
() => {
  try {
    return !!window.localStorage;
  } catch {
    return true;
  }
}
        `.trim()}
      />

      <Output
        generator={() => {
          try {
            return !!window.localStorage;
          } catch {
            return true;
          }
        }}
      />
    </div>
  );
};

export default LsDemo;
