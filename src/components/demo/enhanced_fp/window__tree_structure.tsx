import Code from "../../Code";
import Output from "../../Output";

const WindowTreeStructureDemo = () => {
  return (
    <div>
      <Code
        snippet={`
() => {
  let structure = "";

  try {
    const recursiveWindow = (win = top) => {
      const windows = [];

      for (let i = 0; i < win.length; i++)
        windows.push(recursiveWindow(win[i]));

      return windows;
    };

    structure = JSON.stringify(recursiveWindow());
  } catch {}

  return structure;
}
        `.trim()}
      />

      <Output
        generator={() => {
          let structure = "";

          try {
            // @ts-expect-error
            const recursiveWindow = (win = top) => {
              const windows = [];

              // @ts-expect-error
              for (let i = 0; i < win.length; i++)
                // @ts-expect-error
                windows.push(recursiveWindow(win[i]));

              return windows;
            };

            structure = JSON.stringify(recursiveWindow());
          } catch {}

          return structure;
        }}
      />
    </div>
  );
};

export default WindowTreeStructureDemo;
