import { createSignal } from "solid-js";
import Code from "../../Code";
import { md5hex } from "../../../impl/utils";
import Output from "../../Output";

const Md5HexDemo = () => {
  const [input, setInput] = createSignal("Hello, World~!");

  return (
    <div>
      <Code
        snippet={`
import { md5 } from "@noble/hashes/legacy";
import { bytesToHex } from "@noble/hashes/utils";

/**
 * Converts a UTF-8 string into an MD5 HEX.
 *
 * @example
 * md5hex("Hello, World~!"); // "0c9c5d5ad3485050dd733e5c50521f89"
 */
export const md5hex = (input: string) => bytesToHex(md5(input));
      `.trim()}
      />

      <input
        type="text"
        value={input()}
        onInput={(event) => setInput(event.currentTarget.value)}
      />

      <Output generator={() => md5hex(input())} />
    </div>
  );
};

export default Md5HexDemo;
