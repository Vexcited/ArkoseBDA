import Code from "../../Code";
import Output from "../../Output";

// = do not track
const DntDemo = () => {
  return (
    <div>
      <Code
        snippet={`
navigator.doNotTrack
  ? navigator.doNotTrack
  : navigator.msDoNotTrack
  ? navigator.msDoNotTrack
  : window.doNotTrack
  ? window.doNotTrack
  : "unknown";
        `.trim()}
      />

      <Output
        generator={() => {
          return navigator.doNotTrack
            ? navigator.doNotTrack
            : // @ts-expect-error
            navigator.msDoNotTrack
            ? // @ts-expect-error
              navigator.msDoNotTrack
            : // @ts-expect-error
            window.doNotTrack
            ? // @ts-expect-error
              window.doNotTrack
            : "unknown";
        }}
      />
    </div>
  );
};

export default DntDemo;
