import Code from "../../Code";
import Output from "../../Output";

const U_3ea7194Demo = () => {
  return (
    <div>
      <Code
        snippet={`
() => {
  const video = document.createElement("video");

  const HDR10 = {
    name: "HDR10",
    format: 'codecs="hev1.2.4.L153.B0"; eotf="smpte2084"',
  };

  const HLG = {
    name: "HLG",
    format: 'codecs="hev1.2.4.L153.B0"; eotf="arib-std-b67"',
  };

  const DolbyVision = {
    name: "DolbyVision",
    format: 'codecs="dvh1.1"',
  };

  const formats = [HDR10, HLG, DolbyVision].reduce(
    (acc, curr) =>
      video.canPlayType("video/mp4; ".concat(curr.format))
        ? (acc.push(curr.name), acc)
        : acc,
    [] as Array<string>
  );

  const isHDR = [
    () => window.matchMedia?.("(dynamic-range: high)")?.matches,
    () => "HDR" in window.screen,
    () => {
      const space = window.screen?.colorSpace;
      return space === "rec2020" || space === "p3";
    },
  ].some((fn) => fn());

  return {
    supported: formats.length > 0,
    formats,
    isHDR: isHDR,
  };
}
        `.trim()}
      />

      <Output
        generator={() => {
          const video = document.createElement("video");

          const HDR10 = {
            name: "HDR10",
            format: 'codecs="hev1.2.4.L153.B0"; eotf="smpte2084"',
          };

          const HLG = {
            name: "HLG",
            format: 'codecs="hev1.2.4.L153.B0"; eotf="arib-std-b67"',
          };

          const DolbyVision = {
            name: "DolbyVision",
            format: 'codecs="dvh1.1"',
          };

          const formats = [HDR10, HLG, DolbyVision].reduce(
            (acc, curr) =>
              video.canPlayType("video/mp4; ".concat(curr.format))
                ? (acc.push(curr.name), acc)
                : acc,
            [] as Array<string>
          );

          const isHDR = [
            () => window.matchMedia?.("(dynamic-range: high)")?.matches,
            () => "HDR" in window.screen,
            () => {
              // @ts-expect-error
              const space = window.screen?.colorSpace;
              return space === "rec2020" || space === "p3";
            },
          ].some((fn) => fn());

          return {
            supported: formats.length > 0,
            formats,
            isHDR: isHDR,
          };
        }}
      />
    </div>
  );
};

export default U_3ea7194Demo;
