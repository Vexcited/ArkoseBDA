import { type Component, createEffect, on, onCleanup } from "solid-js";
import { createHighlighter } from "shiki";

const highlighter = await createHighlighter({
  themes: ["catppuccin-macchiato"],
  langs: ["javascript"],
});

const Code: Component<{
  snippet: string;
}> = (props) => {
  let ref: HTMLDivElement | undefined;

  createEffect(
    on(
      () => props.snippet,
      (snip) => {
        if (!ref) return;

        const html = highlighter.codeToHtml(snip, {
          theme: "catppuccin-macchiato",
          lang: "javascript",
        });

        ref.innerHTML = html;

        onCleanup(() => {
          ref.innerHTML = "";
        });
      }
    )
  );

  return <div ref={ref} />;
};

export default Code;
