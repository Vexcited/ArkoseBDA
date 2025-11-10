import Code from "../../Code";
import Output from "../../Output";

const UserAgentDataBrandsDemo = () => {
  return (
    <div>
      <Code
        snippet={`
navigator.userAgentData && navigator.userAgentData.brands
  ? navigator.userAgentData.brands.map((el) => el.brand).join(",")
  : null;
        `.trim()}
      />

      <Output
        generator={() => {
          return navigator.userAgentData && navigator.userAgentData.brands
            ? navigator.userAgentData.brands.map((el) => el.brand).join(",")
            : null;
        }}
      />
    </div>
  );
};

export default UserAgentDataBrandsDemo;
