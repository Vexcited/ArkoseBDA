import { createEffect, createSignal, Show, type Component } from "solid-js";
import { ArkoseBDA, ExpiredBDAError } from "../core/bda";

const objectToString = (obj: object): string => {
  return JSON.stringify(obj, null, 2);
};

const sortObjectKeys = <T extends unknown>(obj: T): T => {
  if (Array.isArray(obj)) {
    return obj.map(sortObjectKeys) as T;
  } else if (typeof obj === "object" && obj !== null) {
    const sortedEntries = Object.entries(obj).sort(([keyA], [keyB]) =>
      keyA.localeCompare(keyB)
    );
    return Object.fromEntries(
      sortedEntries.map(([key, value]) => [key, sortObjectKeys(value)])
    ) as T;
  }

  return obj;
};

const MainView: Component = () => {
  const [code, setCode] = createSignal("");
  const [output, setOutput] = createSignal("");
  const [onlyShowEnhancedFingerprint, setOnlyShowEnhancedFingerprint] =
    createSignal(false);
  const [showAsKeyValuePairs, setShowAsKeyValuePairs] = createSignal(true);
  const [sortKeyValuePairs, setSortKeyValuePairs] = createSignal(true);

  createEffect(() => {
    try {
      const form = ArkoseBDA.retrieve(code());
      const arkose = new ArkoseBDA(form.get("userbrowser")!);

      const bda = ArkoseBDA.decode(form.get("bda")!);
      let entries = arkose.decrypt(bda);

      if (onlyShowEnhancedFingerprint()) {
        entries = ArkoseBDA.getEnhancedFingerprint(entries);
      }

      if (showAsKeyValuePairs()) {
        let properties = ArkoseBDA.toObjectProperties(entries);

        if (sortKeyValuePairs()) {
          properties = sortObjectKeys(properties);
        }

        setOutput(objectToString(properties));
      } else {
        setOutput(objectToString(entries));
      }
    } catch (error) {
      if (error instanceof ExpiredBDAError) {
        setOutput(error.message);
      } else {
        setOutput(
          "Invalid input, please input a raw HTTP message of only the form containing the bda and userbrowser fields."
        );
      }
    }
  });

  return (
    <div>
      <h1>Arkose BDA</h1>
      <p>A simplified reader for Arkose's BDA.</p>
      <label>
        <input
          type="checkbox"
          checked={onlyShowEnhancedFingerprint()}
          onChange={(e) =>
            setOnlyShowEnhancedFingerprint(e.currentTarget.checked)
          }
        />
        Only show enhanced fingerprint
      </label>
      <label>
        <input
          type="checkbox"
          checked={showAsKeyValuePairs()}
          onChange={(e) => setShowAsKeyValuePairs(e.currentTarget.checked)}
        />
        Show as key-value pairs
      </label>
      <Show when={showAsKeyValuePairs()}>
        <label>
          <input
            type="checkbox"
            checked={sortKeyValuePairs()}
            onChange={(e) => setSortKeyValuePairs(e.currentTarget.checked)}
          />
          Sort key-value pairs
        </label>
      </Show>

      <textarea
        class="w-full h-1/2"
        placeholder="Enter your code here..."
        onInput={(e) => setCode(e.currentTarget.value)}
        value={code()}
      ></textarea>
      <textarea
        class="w-full h-1/2"
        placeholder="Enter your code here..."
        value={output()}
      ></textarea>
    </div>
  );
};

export default MainView;
