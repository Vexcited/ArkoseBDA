import Code from "../../Code";
import Output from "../../Output";

// = session storage
const SsDemo = () => {
  return (
    <div>
      <Code
        snippet={`
() => {
  try {
    return !!window.sessionStorage;
  } catch {
    return true;
  }
}
        `.trim()}
      />

      <Output
        generator={() => {
          try {
            return !!window.sessionStorage;
          } catch {
            return true;
          }
        }}
      />
    </div>
  );
};

export default SsDemo;
