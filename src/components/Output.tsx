import { Component, createEffect, createSignal, on, Show } from "solid-js";

const Output: Component<{ generator: () => any; noRefresh?: boolean }> = (
  props
) => {
  const [value, setValue] = createSignal();

  createEffect(on(() => props.generator(), setValue));
  const refresh = () => setValue(props.generator());

  return (
    <div class="flex gap-4">
      <textarea
        class="font-mono bg-#24273a text-white rounded px-4 py-2 field-sizing-content outline-none resize-none"
        readonly
      >
        {JSON.stringify(value())}
      </textarea>
      <Show when={!props.noRefresh}>
        <button type="button" onClick={refresh}>
          refresh
        </button>
      </Show>
    </div>
  );
};

export default Output;
