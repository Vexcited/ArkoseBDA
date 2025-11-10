import Code from "../../Code";
import Output from "../../Output";

const NetworkInfoRttDemo = () => {
  return (
    <div>
      <Code
        snippet={`
(navigator.connection && navigator.connection.rtt) || null;
        `.trim()}
      />

      <Output
        generator={() => {
          // @ts-expect-error
          return (navigator.connection && navigator.connection.rtt) || null;
        }}
      />
    </div>
  );
};

export default NetworkInfoRttDemo;
