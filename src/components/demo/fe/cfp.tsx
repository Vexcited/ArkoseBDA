import Code from "../../Code";
import Output from "../../Output";

// = canvas fingerprinting
const CfpDemo = () => {
  return (
    <div>
      <Code
        snippet={`
() => {
  const canvas = document.createElement("canvas");

  if (!canvas.getContext) {
    return false;
  }

  try {
    const values = [];

    canvas.width = 2000;
    canvas.height = 200;
    canvas.style.display = "inline";

    const ctx = canvas.getContext("2d");

    if (ctx) {
      ctx.rect(0, 0, 10, 10);
      ctx.rect(2, 2, 6, 6);

      values.push(
        "canvas winding:".concat(
          false === ctx.isPointInPath(5, 5, "evenodd") ? "yes" : "no"
        )
      );

      ctx.textBaseline = "alphabetic";

      ctx.fillStyle = "#f60";
      ctx.fillRect(125, 1, 62, 20);

      ctx.fillStyle = "#069";
      ctx.font = "11pt no-real-font-123";
      ctx.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15);

      ctx.fillStyle = "rgba(102, 204, 0, 0.2)";
      ctx.font = "18pt Arial";
      ctx.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45);

      ctx.globalCompositeOperation = "multiply";

      ctx.fillStyle = "rgb(255,0,255)";
      ctx.beginPath();
      ctx.arc(50, 50, 50, 0, 2 * Math.PI, true);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = "rgb(0,255,255)";
      ctx.beginPath();
      ctx.arc(100, 50, 50, 0, 2 * Math.PI, true);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = "rgb(255,255,0)";
      ctx.beginPath();
      ctx.arc(75, 100, 50, 0, 2 * Math.PI, true);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = "rgb(255,0,255)";
      ctx.arc(75, 75, 75, 0, 2 * Math.PI, true);
      ctx.arc(75, 75, 25, 0, 2 * Math.PI, true);
      ctx.fill("evenodd");

      values.push("canvas fp:".concat(canvas.toDataURL()));
    }

    return values
      .join("~")
      .split("")
      .reduce(
        (acc, curr) => (acc = (acc << 5) - acc + curr.charCodeAt(0)) & acc,
        0
      );
  } catch {
    return false;
  }
}
        `.trim()}
      />

      <Output
        generator={() => {
          const canvas = document.createElement("canvas");

          if (!canvas.getContext) {
            return false;
          }

          try {
            const values = [];

            canvas.width = 2000;
            canvas.height = 200;
            canvas.style.display = "inline";

            const ctx = canvas.getContext("2d");

            if (ctx) {
              ctx.rect(0, 0, 10, 10);
              ctx.rect(2, 2, 6, 6);

              values.push(
                "canvas winding:".concat(
                  false === ctx.isPointInPath(5, 5, "evenodd") ? "yes" : "no"
                )
              );

              ctx.textBaseline = "alphabetic";

              ctx.fillStyle = "#f60";
              ctx.fillRect(125, 1, 62, 20);

              ctx.fillStyle = "#069";
              ctx.font = "11pt no-real-font-123";
              ctx.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15);

              ctx.fillStyle = "rgba(102, 204, 0, 0.2)";
              ctx.font = "18pt Arial";
              ctx.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45);

              ctx.globalCompositeOperation = "multiply";

              ctx.fillStyle = "rgb(255,0,255)";
              ctx.beginPath();
              ctx.arc(50, 50, 50, 0, 2 * Math.PI, true);
              ctx.closePath();
              ctx.fill();

              ctx.fillStyle = "rgb(0,255,255)";
              ctx.beginPath();
              ctx.arc(100, 50, 50, 0, 2 * Math.PI, true);
              ctx.closePath();
              ctx.fill();

              ctx.fillStyle = "rgb(255,255,0)";
              ctx.beginPath();
              ctx.arc(75, 100, 50, 0, 2 * Math.PI, true);
              ctx.closePath();
              ctx.fill();

              ctx.fillStyle = "rgb(255,0,255)";
              ctx.arc(75, 75, 75, 0, 2 * Math.PI, true);
              ctx.arc(75, 75, 25, 0, 2 * Math.PI, true);
              ctx.fill("evenodd");

              values.push("canvas fp:".concat(canvas.toDataURL()));
            }

            return values
              .join("~")
              .split("")
              .reduce(
                (acc, curr) =>
                  (acc = (acc << 5) - acc + curr.charCodeAt(0)) & acc,
                0
              );
          } catch {
            return false;
          }
        }}
      />
    </div>
  );
};

export default CfpDemo;
