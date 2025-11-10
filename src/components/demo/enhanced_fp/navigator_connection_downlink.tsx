import Code from "../../Code";
import Output from "../../Output";

const NavigatorConnectionDownlinkDemo = () => {
  return (
    <div>
      <Code
        snippet={`
navigator.connection && navigator.connection.downlink;
        `.trim()}
      />

      <Output
        generator={() => {
          // @ts-expect-error
          return navigator.connection && navigator.connection.downlink;
        }}
      />
    </div>
  );
};

export default NavigatorConnectionDownlinkDemo;
