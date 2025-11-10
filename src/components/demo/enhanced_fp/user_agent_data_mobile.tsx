import Code from "../../Code";
import Output from "../../Output";

const UserAgentDataMobileDemo = () => {
  return (
    <div>
      <Code
        snippet={`
navigator.userAgentData
  ? navigator.userAgentData.mobile === undefined
    ? null
    : navigator.userAgentData.mobile
  : null;
        `.trim()}
      />

      <Output
        generator={() => {
          return navigator.userAgentData
            ? navigator.userAgentData.mobile === undefined
              ? null
              : navigator.userAgentData.mobile
            : null;
        }}
      />
    </div>
  );
};

export default UserAgentDataMobileDemo;
