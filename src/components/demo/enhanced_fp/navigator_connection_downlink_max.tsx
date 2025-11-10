import Code from "../../Code";
import Output from "../../Output";

const NavigatorConnectionDownlinkMaxDemo = () => {
  return (
    <div>
      <Code
        snippet={`
navigator.connection && navigator.connection.downlinkMax
  ? typeof navigator.connection.downlinkMax === "number" && navigator.connection.downlinkMax !== Infinity
    ? navigator.connection.downlinkMax
    : -1
  : null;
        `.trim()}
      />

      <Output
        generator={() => {
          // @ts-expect-error
          return navigator.connection && navigator.connection.downlinkMax
            ? // @ts-expect-error
              typeof navigator.connection.downlinkMax === "number" &&
              // @ts-expect-error
              navigator.connection.downlinkMax !== Infinity
              ? // @ts-expect-error
                navigator.connection.downlinkMax
              : -1
            : null;
        }}
      />
    </div>
  );
};

export default NavigatorConnectionDownlinkMaxDemo;
