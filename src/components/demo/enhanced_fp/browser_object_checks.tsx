import { md5hex } from "../../../impl/utils";
import Code from "../../Code";
import Output from "../../Output";

const BrowserObjectChecksDemo = () => {
  return (
    <div>
      <Code
        snippet={`
() => {
  const properties = [
    "chrome",
    "safari",
    "__crWeb",
    "__gCrWeb",
    "yandex",
    "__yb",
    "__ybro",
    "__firefox__",
    "firefox",
    "__edgeTrackingPreventionStatistics",
    "webkit",
    "oprt",
    "samsungAr",
    "ucweb",
    "UCShellJava",
    "puffinDevice",
    "opr",
  ].reduce(
    (acc, curr) =>
      window[curr] && typeof window[curr] === "object"
        ? [].concat(acc, [curr])
        : acc,
    []
  );

  return properties.length > 0
    ? md5hex(properties.sort().join(","))
    : null;
}
        `.trim()}
      />

      <Output
        generator={() => {
          const properties = [
            "chrome",
            "safari",
            "__crWeb",
            "__gCrWeb",
            "yandex",
            "__yb",
            "__ybro",
            "__firefox__",
            "firefox",
            "__edgeTrackingPreventionStatistics",
            "webkit",
            "oprt",
            "samsungAr",
            "ucweb",
            "UCShellJava",
            "puffinDevice",
            "opr",
          ].reduce(
            (acc, curr) =>
              // @ts-expect-error
              window[curr] && typeof window[curr] === "object"
                ? // @ts-expect-error
                  [].concat(acc, [curr])
                : acc,
            []
          );

          return properties.length > 0
            ? md5hex(properties.sort().join(","))
            : null;
        }}
      />
    </div>
  );
};

export default BrowserObjectChecksDemo;
