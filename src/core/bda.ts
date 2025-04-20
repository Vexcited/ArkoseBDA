import { base64 } from "@scure/base";
import { cbc } from '@noble/ciphers/aes';
import { md5 } from "@noble/hashes/legacy";
import { hexToBytes, utf8ToBytes, concatBytes, bytesToUtf8 } from '@noble/ciphers/utils';

export interface EncryptedBDA {
  iv: string
  ct: string
  s: string
}

type BDAEntryValue = string | number | number[] | string[]

export interface BDAEntry {
  key: string
  value: BDAEntryValue | Array<BDAEntry>
}

export class ExpiredBDAError extends Error {
  public constructor () {
    super("The BDA is expired, please try with a new one.");
    this.name = "ExpiredBDAError";
  }
}

export class ArkoseBDA {
  public timestamp = Math.floor(Date.now() / 1_000);
  public key: Uint8Array;

  public constructor (public readonly userAgent: string) {
    this.timestamp = Math.floor(this.timestamp - (this.timestamp % 21_600));
    this.key = utf8ToBytes(`${this.userAgent}${this.timestamp}`);
  }

  public decrypt ({ iv, ct: ciphertext, s: salt }: EncryptedBDA): Array<BDAEntry> {
    try {
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
    catch {
      throw new ExpiredBDAError();
    }
  }

  public static decode (data: string): EncryptedBDA {
    return JSON.parse(bytesToUtf8(base64.decode(data.trim())))
  }

  public static retrieve (payload: string): URLSearchParams {
    // we're reading the raw message of an http request.
    if (payload.startsWith("POST /fc/gt2/public_key/")) {
      // body of the request
      payload = payload.split("\n\n")[1];
    }

    return new URLSearchParams(payload);
  }

  public static getEnhancedFingerprint (bda: Array<BDAEntry>) {
    const { value } = bda.find(entry => entry.key === "enhanced_fp")!;
    return value as Array<BDAEntry>;
  }


  public static toObjectProperties (value: Array<BDAEntry>) {
    type EntryValueProperty = BDAEntryValue | Record<string, BDAEntryValue>;

    return value.reduce((acc, entry) => {

      if (Array.isArray(entry.value)
        // we should check if the value is an array of BDAEntry
        && entry.value.every(item => typeof item === "object" && "key" in item && "value" in item)
      ) {
        acc[entry.key] = this.toObjectProperties(entry.value as Array<BDAEntry>) as Record<string, BDAEntryValue>;
      }
      else {
        acc[entry.key] = entry.value as BDAEntryValue;
      }

      return acc;
    }, {} as Record<string, EntryValueProperty>)
  }
}
