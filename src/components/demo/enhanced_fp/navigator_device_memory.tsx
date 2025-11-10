import { numberOrNull } from "../../../impl/utils";
import Code from "../../Code";
import Output from "../../Output";

const NavigatorDeviceMemoryDemo = () => {
  return (
    <div>
      <Code
        snippet={`
numberOrNull(navigator.deviceMemory)
        `.trim()}
      />

      <Output
        generator={() => {
          // @ts-expect-error
          return numberOrNull(navigator.deviceMemory);
        }}
      />
    </div>
  );
};

export default NavigatorDeviceMemoryDemo;
