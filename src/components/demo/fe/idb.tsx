import Code from "../../Code";
import Output from "../../Output";

// = indexeddb
const IdbDemo = () => {
  return (
    <div>
      <Code
        snippet={`
() => {
  try {
    return !!window.indexedDB;
  } catch {
    return true;
  }
}
        `.trim()}
      />

      <Output
        generator={() => {
          try {
            return !!window.indexedDB;
          } catch {
            return true;
          }
        }}
      />
    </div>
  );
};

export default IdbDemo;
