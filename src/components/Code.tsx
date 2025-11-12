import {
  type Component,
  createEffect,
  createSignal,
  on,
  onCleanup,
} from "solid-js";
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

  const [copied, setCopied] = createSignal(false);
  const onCopy = async () => {
    await navigator.clipboard.writeText(props.snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 750);
  };

  return (
    <div class="relative">
      <button
        type="button"
        class="absolute top-2 right-3 text-white"
        onClick={onCopy}
      >
        {copied() ? "copied" : "copy"}
      </button>
      <div class="py-3 px-4 rounded bg-#24273a overflow-x-auto" ref={ref} />
    </div>
  );
};

export default Code;
