import fs from "node:fs/promises";

import { base64 } from "@scure/base";
import { cbc } from '@noble/ciphers/aes';
import { md5 } from "@noble/hashes/legacy";
import { hexToBytes, utf8ToBytes, concatBytes, bytesToUtf8 } from '@noble/ciphers/utils';

export interface EncryptedBDA {
  iv: string
  ct: string
  s: string
}

export interface BDAEntry {
  key: string
  value: string | Array<string> | Array<BDAEntry>
}

export type BDA = Array<BDAEntry>

export class ArkoseBDA {
  public timestamp = Math.floor(Date.now() / 1_000);
  public key: Uint8Array;

  public constructor (public readonly userAgent: string) {
    this.timestamp = Math.floor(this.timestamp - (this.timestamp % 21_600));
    this.key = utf8ToBytes(`${this.userAgent}${this.timestamp}`);
  }

  public decrypt ({ iv, ct: ciphertext, s: salt }: EncryptedBDA): BDA {
    // NOTE: we're preallocating the keychain to avoid resizing
    const keychain: Array<Uint8Array> = new Array(4);

    {
      const saltedKey = concatBytes(this.key, hexToBytes(salt));
      keychain[0] = md5(saltedKey);

      for (let i = 0; i < 3; i++) {
        keychain[i + 1] = md5(concatBytes(
          keychain[i],
          saltedKey
        ));
      }
    }

    const key = concatBytes(...keychain).slice(0, 32);
    const decrypted = cbc(key, hexToBytes(iv)).decrypt(base64.decode(ciphertext));

    return JSON.parse(bytesToUtf8(decrypted));
  }

  public decode (data: string): EncryptedBDA {
    return JSON.parse(bytesToUtf8(base64.decode(data.trim())))
  }
}

void async function main () {
  const http_response = await fs.readFile("http", "utf8");
  const body = http_response.split("\r\n\r\n").at(-1)!;
  const form = new URLSearchParams(body);

  const arkose = new ArkoseBDA(form.get("userbrowser")!);
  const encrypted_bda = arkose.decode(form.get("bda")!);
  const decrypted_bda = arkose.decrypt(encrypted_bda);

  console.log(JSON.stringify(decrypted_bda, null, 2));

  // const { value } = decrypted_bda.find(entry => entry.key === "enhanced_fp")!;
  // const fingerprint = (value as Array<BDAEntry>).reduce((acc, entry) => {
  //   acc[entry.key as string] = entry.value;
  //   return acc;
  // }, {} as Record<string, any>)
  // console.log(JSON.stringify(fingerprint, null, 2));
}();
