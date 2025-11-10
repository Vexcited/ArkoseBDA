import Code from "../../Code";
import Output from "../../Output";

const NetworkInfoSaveDataDemo = () => {
  return (
    <div>
      <Code
        snippet={`
navigator.connection
  ? navigator.connection.saveData === undefined
    ? null
    : navigator.connection.saveData
  : null;
        `.trim()}
      />

      <Output
        generator={() => {
          // @ts-expect-error
          return navigator.connection
            ? // @ts-expect-error
              navigator.connection.saveData === undefined
              ? null
              : // @ts-expect-error
                navigator.connection.saveData
            : null;
        }}
      />
    </div>
  );
};

export default NetworkInfoSaveDataDemo;
