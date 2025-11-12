import Code from "../../Code";
import Output from "../../Output";

const U_f9bf2dbDemo = () => {
  return (
    <div>
      <Code
        snippet={`
() => {
  try {
    const pc = {
      values: [
        "high",
        "more",
        "low",
        "less",
        "forced",
        "no-preference",
      ],
      name: "pc",
    };
    const ah = {
      values: ["hover", "none"],
      name: "ah",
    };
    const ap = {
      values: ["none", "coarse", "fine"],
      name: "ap",
    };
    const p = {
      values: ["none", "coarse", "fine"],
      name: "p",
    };
    const h = {
      values: ["hover", "none"],
      name: "h",
    };
    const u = {
      values: ["fast", "slow"],
      name: "u",
    };
    const ic = {
      values: ["inverted", "none"],
      name: "ic",
    };
    const prm = {
      values: ["reduce", "no-preference"],
      name: "prm",
    };
    const prt = {
      values: ["reduce", "no-preference"],
      name: "prt",
    };
    const s = {
      values: ["none", "initial-only", "enabled"],
      name: "s",
    };
    const fc = {
      values: ["active", "none"],
      name: "fc",
    };

    const a11y = {
      "prefers-contrast": pc,
      "any-hover": ah,
      "any-pointer": ap,
      pointer: p,
      hover: h,
      update: u,
      "inverted-colors": ic,
      "prefers-reduced-motion": prm,
      "prefers-reduced-transparency": prt,
      scripting: s,
      "forced-colors": fc,
    };

    const ret = {};
    Object.keys(a11y).forEach((prop) => {
      for (
        let values = a11y[prop].values, i = 0;
        i < values.length;
        i += 1
      ) {
        const value = values[i];

        if (
          matchMedia(
            "(".concat(prop, ": ").concat(value, ")")
          ).matches
        ) {
          ret[a11y[prop].name] = value;
          break;
        }
      }
    });

    return JSON.stringify(ret);
  } catch {
    return null;
  }
}
        `.trim()}
      />

      <Output
        generator={() => {
          try {
            const pc = {
              values: [
                "high",
                "more",
                "low",
                "less",
                "forced",
                "no-preference",
              ],
              name: "pc",
            };
            const ah = {
              values: ["hover", "none"],
              name: "ah",
            };
            const ap = {
              values: ["none", "coarse", "fine"],
              name: "ap",
            };
            const p = {
              values: ["none", "coarse", "fine"],
              name: "p",
            };
            const h = {
              values: ["hover", "none"],
              name: "h",
            };
            const u = {
              values: ["fast", "slow"],
              name: "u",
            };
            const ic = {
              values: ["inverted", "none"],
              name: "ic",
            };
            const prm = {
              values: ["reduce", "no-preference"],
              name: "prm",
            };
            const prt = {
              values: ["reduce", "no-preference"],
              name: "prt",
            };
            const s = {
              values: ["none", "initial-only", "enabled"],
              name: "s",
            };
            const fc = {
              values: ["active", "none"],
              name: "fc",
            };

            const a11y = {
              "prefers-contrast": pc,
              "any-hover": ah,
              "any-pointer": ap,
              pointer: p,
              hover: h,
              update: u,
              "inverted-colors": ic,
              "prefers-reduced-motion": prm,
              "prefers-reduced-transparency": prt,
              scripting: s,
              "forced-colors": fc,
            };

            const ret = {};
            Object.keys(a11y).forEach((prop) => {
              for (
                // @ts-expect-error
                let values = a11y[prop].values, i = 0;
                i < values.length;
                i += 1
              ) {
                const value = values[i];

                if (
                  matchMedia("(".concat(prop, ": ").concat(value, ")")).matches
                ) {
                  // @ts-expect-error
                  ret[a11y[prop].name] = value;
                  break;
                }
              }
            });

            return JSON.stringify(ret);
          } catch {
            return null;
          }
        }}
      />
    </div>
  );
};

export default U_f9bf2dbDemo;
