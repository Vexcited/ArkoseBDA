import Code from "../../Code";
import Output from "../../Output";

const AsDemo = () => {
  return (
    <div>
      <Code
        snippet={`
() => {
  if (screen.availWidth && screen.availHeight) {
    return screen.availHeight > screen.availWidth
      ? [screen.availHeight, screen.availWidth]
      : [screen.availWidth, screen.availHeight];
  }
}
        `.trim()}
      />

      <Output
        generator={() => {
          if (screen.availWidth && screen.availHeight) {
            return screen.availHeight > screen.availWidth
              ? [screen.availHeight, screen.availWidth]
              : [screen.availWidth, screen.availHeight];
          }
        }}
      />
    </div>
  );
};

export default AsDemo;
