import { Component, createEffect, createSignal, on } from "solid-js";

const Output: Component<{ generator: () => any }> = (props) => {
  const [value, setValue] = createSignal();

  createEffect(on(() => props.generator(), setValue));
  const refresh = () => setValue(props.generator());

  return (
    <div>
      <p class="font-mono">{JSON.stringify(value())}</p>
      <button type="button" onClick={refresh}>
        refresh
      </button>
    </div>
  );
};

export default Output;
