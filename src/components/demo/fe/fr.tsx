import Code from "../../Code";
import Output from "../../Output";

// fr = ?
const FrDemo = () => {
  return (
    <div>
      <Code
        snippet={`
() => {
  const maxScreen = Math.max(screen.width, screen.height);
  const minScreen = Math.min(screen.width, screen.height);

  const maxAvailScreen = Math.max(screen.availWidth, screen.availHeight);
  const minAvailScreen = Math.min(screen.availWidth, screen.availHeight);

  return maxScreen < maxAvailScreen || minScreen < minAvailScreen;
}
        `.trim()}
      />

      <Output
        generator={() => {
          const maxScreen = Math.max(screen.width, screen.height);
          const minScreen = Math.min(screen.width, screen.height);

          const maxAvailScreen = Math.max(
            screen.availWidth,
            screen.availHeight
          );
          const minAvailScreen = Math.min(
            screen.availWidth,
            screen.availHeight
          );

          return maxScreen < maxAvailScreen || minScreen < minAvailScreen;
        }}
      />
    </div>
  );
};

export default FrDemo;
