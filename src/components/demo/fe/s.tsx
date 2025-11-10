import Code from "../../Code";
import Output from "../../Output";

// = screen
const SDemo = () => {
  return (
    <div>
      <Code
        snippet={`
screen.height > screen.width
    ? [screen.height, screen.width]
    : [screen.width, screen.height];
        `.trim()}
      />

      <Output
        generator={() => {
          return screen.height > screen.width
            ? [screen.height, screen.width]
            : [screen.width, screen.height];
        }}
      />
    </div>
  );
};

export default SDemo;
