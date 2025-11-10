import { md5 } from "@noble/hashes/legacy";
import { bytesToHex } from "@noble/hashes/utils";

/**
 * Converts a UTF-8 string into an MD5 HEX.
 *
 * @example
 * md5hex("helloworld"); // "fc5e038d38a57032085441e7fe7010b0"
 */
export const md5hex = (input: string) => bytesToHex(md5(input));

/**
 * Removes query parameters from a string, typically a URL.
 *
 * @example
 * removeQueryParams("https://example.com/path?query=param"); // "https://example.com/path"
 */
export const removeQueryParams = (input: string) => {
  return input || typeof input === "string" ? input.split("?")[0] : null;
};

/**
 * Returns a number if the input is a number, otherwise returns null.
 *
 * @example
 * numberOrNull(42); // 42
 * numberOrNull("not a number"); // null
 */
export const numberOrNull = (num: unknown): number | null => {
  return typeof num === "number" ? num : null;
};
