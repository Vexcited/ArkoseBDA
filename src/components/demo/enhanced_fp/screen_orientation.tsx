import Code from "../../Code";
import Output from "../../Output";

const ScreenOrientationDemo = () => {
  return (
    <div>
      <Code
        snippet={`
screen && screen.orientation && screen.orientation.type
  ? screen.orientation.type
  : null
        `.trim()}
      />

      <Output
        generator={() => {
          return screen && screen.orientation && screen.orientation.type
            ? screen.orientation.type
            : null;
        }}
      />
    </div>
  );
};

export default ScreenOrientationDemo;
