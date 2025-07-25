# BDA

> Will be moved to GitHub wiki pages in the future.

A documentation for properties contained in the BDA, with a focus
on how to reproduce them in your browser with JS. Knowing these
make easier for anyone to potentially reproduce the BDA
or tweaking global properties to get an expected BDA.

First, here's the utility functions we'll use throughout the documentation.

```javascript
import { md5 } from "@noble/hashes/legacy";
import { bytesToHex } from "@noble/hashes/utils";

/**
 * Converts a UTF-8 string into an MD5 HEX.
 *
 * @example
 * utf8ToMd5Hex("helloworld"); // "fc5e038d38a57032085441e7fe7010b0"
 */
const utf8ToMd5Hex = (input) => bytesToHex(md5(input));

/**
 * Removes query parameters from a string, typically a URL.
 *
 * @example
 * removeQueryParams("https://example.com/path?query=param"); // "https://example.com/path"
 */
const removeQueryParams = (input) => {
  return input || typeof input === "string" ? input.split("?")[0] : null;
};

/**
 * Returns a number if the input is a number, otherwise returns null.
 *
 * @example
 * numberOrNull(42); // 42
 * numberOrNull("not a number"); // null
 */
const numberOrNull = (num) => {
  return typeof num === "number" ? num : null;
};
```

## `enhanced_fp` (enhanced fingerprint)

### `user_agent_data_brands`

```javascript
const user_agent_data_brands =
  navigator.userAgentData && navigator.userAgentData.brands
    ? navigator.userAgentData.brands.map((ua) => ua.brand).join(",")
    : null;
```

### `user_agent_data_mobile`

```javascript
const user_agent_data_mobile = navigator.userAgentData
  ? navigator.userAgentData.mobile === undefined
    ? null
    : navigator.userAgentData.mobile
  : null;
```

### `navigator_connection_downlink`

```javascript
const navigator_connection_downlink =
  navigator.connection && navigator.connection.downlink;
```

### `navigator_connection_downlink_max`

```javascript
const navigator_connection_downlink_max =
  navigator.connection && navigator.connection.downlinkMax
    ? typeof navigator.connection.downlinkMax === "number" &&
      navigator.connection.downlinkMax !== Infinity
      ? navigator.connection.downlinkMax
      : -1
    : null;
```

### `network_info_rtt`

```javascript
const network_info_rtt =
  (navigator.connection && navigator.connection.rtt) || null;
```

### `network_info_save_data`

```javascript
const network_info_save_data = navigator.connection
  ? navigator.connection.saveData === undefined
    ? null
    : navigator.connection.saveData
  : null;
```

### `screen_pixel_depth`

```javascript
const screen_pixel_depth = numberOrNull(screen.pixelDepth);
```

### `navigator_device_memory`

```javascript
const navigator_device_memory = numberOrNull(navigator.deviceMemory);
```

### `navigator_pdf_viewer_enabled`

```javascript
const navigator_pdf_viewer_enabled =
  navigator.pdfViewerEnabled === undefined ? null : navigator.pdfViewerEnabled;
```

### `navigator_languages`

```javascript
const navigator_languages =
  navigator.languages && typeof navigator.languages.join == "function"
    ? navigator.languages.join(",")
    : null;
```

### `window_inner_width`

```javascript
const window_inner_width = numberOrNull(window.innerWidth);
```

### `window_inner_height`

```javascript
const window_inner_height = numberOrNull(window.innerHeight);
```

### `window_outer_width`

```javascript
const window_outer_width = numberOrNull(window.outerWidth);
```

### `window_outer_height`

```javascript
const window_outer_height = numberOrNull(window.outerHeight);
```

### `browser_detection_firefox`

```javascript
const browser_detection_firefox = navigator.userAgent
  ? navigator.userAgent.indexOf("Firefox") > 0
  : null;
```

### `browser_detection_brave`

```javascript
const browser_detection_brave = !!navigator.brave;
```

### `browser_api_checks`

```javascript
const browser_api_checks = (() => {
  try {
    return [
      "permission_status: ".concat(
        !!window.PermissionStatus &&
          Object.prototype.hasOwnProperty.call(
            window.PermissionStatus.prototype,
            "name"
          )
      ),
      "eye_dropper: ".concat(!!window.EyeDropper),
      "audio_data: ".concat(!!window.AudioData),
      "writable_stream: ".concat(!!window.WritableStreamDefaultController),
      "css_style_rule: ".concat(!!window.CSSCounterStyleRule),
      "navigator_ua: ".concat(!!window.NavigatorUAData),
      "barcode_detector: ".concat(!!window.BarcodeDetector),
      "display_names: ".concat(!(!window.Intl || !window.Intl.DisplayNames)),
      "contacts_manager: ".concat(
        !!(navigator && navigator.contacts && navigator.ContactsManager)
      ),
      "svg_discard_element: ".concat(!!window.SVGDiscardElement),
      "usb: ".concat(navigator.usb ? "defined" : "NA"),
      "media_device: ".concat(navigator.mediaDevices ? "defined" : "NA"),
      "playback_quality: ".concat(
        !!(
          window.HTMLVideoElement &&
          window.HTMLVideoElement.prototype &&
          window.HTMLVideoElement.prototype.getVideoPlaybackQuality
        )
      ),
    ];
  } catch {
    return null;
  }
})();
```

### `browser_object_checks`

```javascript
// TODO
```

### `29s83ih9` (not sure if constant)

```javascript
const 29s83ih9 = (() => {
  // TODO
})();
```

### `audio_codecs`

```javascript
const audio_codecs = (() => {
  const audio = document.createElement("audio");
  let codecs = null;

  if (audio.canPlayType) {
    codecs = JSON.stringify({
      ogg: audio.canPlayType('audio/ogg; codecs="vorbis"'),
      mp3: audio.canPlayType("audio/mpeg;"),
      wav: audio.canPlayType('audio/wav; codecs="1"'),
      m4a: audio.canPlayType("audio/x-m4a;"),
      aac: audio.canPlayType("audio/aac;"),
    });
  }

  return codecs;
})();
```

### `audio_codecs_extended_hash`

```javascript
const audio_codecs_extended_hash = (() => {
  const AUDIO_EXTRA_CODECS = [
    'audio/mp4; codecs="mp4a.40"',
    'audio/mp4; codecs="mp4a.40.1"',
    'audio/mp4; codecs="mp4a.40.2"',
    'audio/mp4; codecs="mp4a.40.3"',
    'audio/mp4; codecs="mp4a.40.4"',
    'audio/mp4; codecs="mp4a.40.5"',
    'audio/mp4; codecs="mp4a.40.6"',
    'audio/mp4; codecs="mp4a.40.7"',
    'audio/mp4; codecs="mp4a.40.8"',
    'audio/mp4; codecs="mp4a.40.9"',
    'audio/mp4; codecs="mp4a.40.12"',
    'audio/mp4; codecs="mp4a.40.13"',
    'audio/mp4; codecs="mp4a.40.14"',
    'audio/mp4; codecs="mp4a.40.15"',
    'audio/mp4; codecs="mp4a.40.16"',
    'audio/mp4; codecs="mp4a.40.17"',
    'audio/mp4; codecs="mp4a.40.19"',
    'audio/mp4; codecs="mp4a.40.20"',
    'audio/mp4; codecs="mp4a.40.21"',
    'audio/mp4; codecs="mp4a.40.22"',
    'audio/mp4; codecs="mp4a.40.23"',
    'audio/mp4; codecs="mp4a.40.24"',
    'audio/mp4; codecs="mp4a.40.25"',
    'audio/mp4; codecs="mp4a.40.26"',
    'audio/mp4; codecs="mp4a.40.27"',
    'audio/mp4; codecs="mp4a.40.28"',
    'audio/mp4; codecs="mp4a.40.29"',
    'audio/mp4; codecs="mp4a.40.32"',
    'audio/mp4; codecs="mp4a.40.33"',
    'audio/mp4; codecs="mp4a.40.34"',
    'audio/mp4; codecs="mp4a.40.35"',
    'audio/mp4; codecs="mp4a.40.36"',
    'audio/mp4; codecs="mp4a.66"',
    'audio/mp4; codecs="mp4a.67"',
    'audio/mp4; codecs="mp4a.68"',
    'audio/mp4; codecs="mp4a.69"',
    'audio/mp4; codecs="mp4a.6B"',
    'audio/mp4; codecs="mp3"',
    'audio/mp4; codecs="flac"',
    'audio/mp4; codecs="bogus"',
    'audio/mp4; codecs="aac"',
    'audio/mp4; codecs="ac3"',
    'audio/mp4; codecs="A52"',
    'audio/mpeg; codecs="mp3"',
    'audio/wav; codecs="0"',
    'audio/wav; codecs="2"',
    'audio/wave; codecs="0"',
    'audio/wave; codecs="1"',
    'audio/wave; codecs="2"',
    'audio/x-wav; codecs="0"',
    'audio/x-wav; codecs="1"',
    'audio/x-wav; codecs="2"',
    'audio/x-pn-wav; codecs="0"',
    'audio/x-pn-wav; codecs="1"',
    'audio/x-pn-wav; codecs="2"',
  ];

  const audio = document.createElement("audio");
  const codecs = {};

  AUDIO_EXTRA_CODECS.forEach((codec) => {
    let canPlay = null;
    let mediaSource = null;

    if (audio.canPlayType) canPlay = audio.canPlayType(codec);

    if (window.MediaSource && window.MediaSource.isTypeSupported)
      mediaSource = window.MediaSource.isTypeSupported(codec);

    codecs[codec] = {
      canPlay: canPlay,
      mediaSource: mediaSource,
    };
  });

  return utf8ToMd5Hex(JSON.stringify(codecs));
})();
```

### `window__tree_structure`

```javascript
const window__tree_structure = (() => {
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
})();
```

### `window__location_href`

```javascript
const window__location_href =
  window.location && window.location.href
    ? removeQueryParams(window.location.href).split("#")[0]
    : null;
```

### `math_fingerprint`

```javascript
const math_fingerprint = (() => {
  const callOrNaN = (fn, ...args) => {
    if (typeof fn === "function") {
      return fn(...args);
    }
    return NaN;
  };

  const values = [
    callOrNaN(Math.acos, 0.123),
    callOrNaN(Math.acosh, Math.SQRT2),
    callOrNaN(Math.atan, 2),
    callOrNaN(Math.atanh, 0.5),
    callOrNaN(Math.cbrt, Math.PI),
    callOrNaN(Math.cos, 21 * Math.LN2),
    callOrNaN(Math.cos, 21 * Math.SQRT1_2),
    callOrNaN(Math.cosh, 492 * Math.LOG2E),
    callOrNaN(Math.expm1, 1),
    callOrNaN(Math.hypot, Math.LOG2E, -100),
    callOrNaN(Math.log10, 7 * Math.LOG10E),
    callOrNaN(Math.pow, Math.PI, -100),
    callOrNaN(Math.pow, 0.002, -100),
    callOrNaN(Math.sin, Math.PI),
    callOrNaN(Math.sin, 39 * Math.E),
    callOrNaN(Math.sinh, Math.PI),
    callOrNaN(Math.sinh, 492 * Math.LOG2E),
    callOrNaN(Math.tan, 10 * Math.LOG2E),
    callOrNaN(Math.tanh, 0.123),
  ].map((t) => t.toString());

  return utf8ToMd5Hex(values.join(","));
})();
```

### `supported_math_functions`

```javascript
const supported_math_functions = (() => {
  const functions = Object.getOwnPropertyNames(Math).filter(
    (property) => typeof Math[property] === "function"
  );

  return utf8ToMd5Hex(functions.join(","));
})();
```

### `screen_orientation`

```javascript
const screen_orientation =
  screen && screen.orientation && screen.orientation.type
    ? screen.orientation.type
    : null;
```

### `webgl_aliased_line_width_range`

> - Android WebView: `"[1, 1]"`
> - Edge2 WebView: `"[1, 1]"`
> - iOS WebView: `"[1, 1]"`

### `webgl_aliased_point_size_range`

> - Android WebView: `"[1, 64]"`
> - Edge2 WebView: `"[1, 1024]"`
> - iOS WebView: `"[1, 511]"`

### `webgl_antialiasing`

```javascript
const canvas = document.createElement("canvas");
const ctx =
  canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
ctx.getContextAttributes().antialias ? "yes" : "no";
```

### `webgl_bits`

> - Android WebView: `"8,8,24,8,8,0"`
> - Edge2 WebView: `"8,8,24,8,8,0"`
> - iOS WebView: `"8,8,24,8,8,0"`

### `webgl_extensions`

```javascript
const canvas = document.createElement("canvas");
const ctx =
  canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
ctx.getSupportedExtensions().join(";");
```

### `webgl_extensions_hash`

> - Android WebView: `"7a00d2ce8edf5aea43edf062919369ca"`
> - Edge2 WebView: `"7300c23f4e6fa34e534fc99c1b628588"`
> - iOS WebView: `"a3d2f4b4d6542e64817d83b2ff58556a"`

### `webgl_fsf_params`

> - Android WebView: `"23,127,127,23,127,127,23,127,127"`
> - Edge2 WebView: `"23,127,127,23,127,127,23,127,127"`
> - iOS WebView: `"23,127,127,23,127,127,23,127,127"`

### `webgl_fsi_params`

> - Android WebView: `"0,31,30,0,31,30,0,31,30"`
> - Edge2 WebView: `"0,31,30,0,31,30,0,31,30"`
> - iOS WebView: `"0,31,30,0,31,30,0,31,30"`

### `webgl_hash_webgl`

> - Android WebView: `"a5d931936e4476c18fe01034cd340f52"`
> - Edge2 WebView: `"e94d2c1266e6a9486d9e9b5c35356892"`
> - iOS WebView: `"a65119d480ae8971bc1c0e9f2739a6a5"`

### `webgl_max_params`

> - Android WebView: `",80,4096,1024,16384,16,4096,31,16,16,1024"`
> - Edge2 WebView: `"16,32,16384,1024,16384,16,16384,30,16,16,4095"`
> - iOS WebView: `"16,32,16384,1024,16384,16,16384,31,16,16,1024"`

### `webgl_max_viewport_dims`

> - Android WebView: `"[16384, 16384]"`
> - Edge2 WebView: `"[32767, 32767]"`
> - iOS WebView: `"[16384, 16384]"`

### `webgl_renderer`

```javascript
const canvas = document.createElement("canvas");
const ctx =
  canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
ctx.getParameter(ctx.RENDERER);
```

### `webgl_shading_language_version`

```javascript
const canvas = document.createElement("canvas");
const ctx =
  canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
ctx.getParameter(ctx.SHADING_LANGUAGE_VERSION);
```

### `webgl_unmasked_renderer`

```javascript
const canvas = document.createElement("canvas");
const ctx =
  canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
const ext = ctx.getExtension("WEBGL_debug_renderer_info");
ctx.getParameter(ext["UNMASKED_RENDERER_WEBGL"]);
```

### `webgl_unmasked_vendor`

```javascript
const canvas = document.createElement("canvas");
const ctx =
  canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
const ext = ctx.getExtension("WEBGL_debug_renderer_info");
ctx.getParameter(ext["UNMASKED_VENDOR_WEBGL"]);
```

### `webgl_vendor`

```javascript
const canvas = document.createElement("canvas");
const ctx =
  canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
ctx.getParameter(ctx.VENDOR);
```

### `webgl_version`

```javascript
const canvas = document.createElement("canvas");
const ctx =
  canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
ctx.getParameter(ctx.VERSION);
```

### `webgl_vsf_params`

> - Android WebView: `"23,127,127,23,127,127,23,127,127"`
> - Edge2 WebView: `"23,127,127,23,127,127,23,127,127"`
> - iOS WebView: `"23,127,127,23,127,127,23,127,127"`

### `webgl_vsi_params`

> - Android WebView: `"0,31,30,0,31,30,0,31,30"`
> - Edge2 WebView: `"0,31,30,0,31,30,0,31,30"`
> - iOS WebView: `"0,31,30,0,31,30,0,31,30"`

## `fe`

### `DNT` (do not track)

```javascript
const DNT = navigator.doNotTrack
  ? navigator.doNotTrack
  : navigator.msDoNotTrack
  ? navigator.msDoNotTrack
  : window.doNotTrack
  ? window.doNotTrack
  : "unknown";
```

Value can vary, depending on the browser specification and user settings.
Most of the time, this setting will be set to `unknown` if running inside a WebView.

### `L` (language)

```javascript
const L =
  navigator.language ||
  navigator.userLanguage ||
  navigator.browserLanguage ||
  navigator.systemLanguage ||
  "";
```

### `D` (depth)

```javascript
const D = screen.colorDepth || -1;
```

### `PR` (pixel ratio)

```javascript
const PR = window.devicePixelRatio || "";
```

### `S` (screen)

```javascript
const S =
  screen.height > screen.width
    ? [screen.height, screen.width]
    : [screen.width, screen.height];
```

### `AS` (available screen)

```javascript
const AS = (() => {
  if (screen.availWidth && screen.availHeight) {
    return screen.availHeight > screen.availWidth
      ? [screen.availHeight, screen.availWidth]
      : [screen.availWidth, screen.availHeight];
  }
})();
```

### `TO` (timezone offset)

```javascript
const TO = new Date().getTimezoneOffset();
```

### `SS` (session storage)

```javascript
const SS = (() => {
  try {
    return !!window.sessionStorage;
  } catch {
    return true;
  }
})();
```

### `LS` (local storage)

```javascript
const LS = (() => {
  try {
    return !!window.localStorage;
  } catch {
    return true;
  }
})();
```

### `IDB` (indexedDB)

```javascript
const IDB = (() => {
  try {
    return !!window.indexedDB;
  } catch {
    return true;
  }
})();
```

### `B` (behavior)

```javascript
const B = !(!document.body || !document.body.addBehavior);
```

### `ODB` (open database)

```javascript
const ODB = !!window.openDatabase;
```

### `CPUC` (cpu class)

```javascript
const CPUC = navigator.cpuClass ? navigator.cpuClass : "unknown";
```

### `PK` (platform)

```javascript
const PK = navigator.platform ? navigator.platform : "unknown";
```

### `CFP` (canvas fingerprint)

```javascript
const CFP = (() => {
  const canvas = document.createElement("canvas");

  if (!canvas.getContext) {
    return false;
  }

  try {
    const values = [];

    canvas.width = 2000;
    canvas.height = 200;
    canvas.style.display = "inline";

    const ctx = canvas.getContext("2d");

    if (ctx) {
      ctx.rect(0, 0, 10, 10);
      ctx.rect(2, 2, 6, 6);

      values.push(
        "canvas winding:".concat(
          false === ctx.isPointInPath(5, 5, "evenodd") ? "yes" : "no"
        )
      );

      ctx.textBaseline = "alphabetic";

      ctx.fillStyle = "#f60";
      ctx.fillRect(125, 1, 62, 20);

      ctx.fillStyle = "#069";
      ctx.font = "11pt no-real-font-123";
      ctx.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15);

      ctx.fillStyle = "rgba(102, 204, 0, 0.2)";
      ctx.font = "18pt Arial";
      ctx.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45);

      ctx.globalCompositeOperation = "multiply";

      ctx.fillStyle = "rgb(255,0,255)";
      ctx.beginPath();
      ctx.arc(50, 50, 50, 0, 2 * Math.PI, true);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = "rgb(0,255,255)";
      ctx.beginPath();
      ctx.arc(100, 50, 50, 0, 2 * Math.PI, true);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = "rgb(255,255,0)";
      ctx.beginPath();
      ctx.arc(75, 100, 50, 0, 2 * Math.PI, true);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = "rgb(255,0,255)";
      ctx.arc(75, 75, 75, 0, 2 * Math.PI, true);
      ctx.arc(75, 75, 25, 0, 2 * Math.PI, true);
      ctx.fill("evenodd");

      values.push("canvas fp:".concat(canvas.toDataURL()));
    }

    return values
      .join("~")
      .split("")
      .reduce(
        (acc, curr) => (acc = (acc << 5) - acc + curr.charCodeAt(0)) & acc,
        0
      );
  } catch {
    return false;
  }
})();
```

### `FR`

```javascript
const FR = (() => {
  const maxScreen = Math.max(screen.width, screen.height);
  const minScreen = Math.min(screen.width, screen.height);

  const maxAvailScreen = Math.max(screen.availWidth, screen.availHeight);
  const minAvailScreen = Math.min(screen.availWidth, screen.availHeight);

  return maxScreen < maxAvailScreen || minScreen < minAvailScreen;
})();
```

### `FOS`

```javascript
// TODO
```

### `FB`

```javascript
// TODO
```

### `JSF`

```javascript
// TODO
```

### `P`

```javascript
// TODO
```

### `T`

```javascript
// TODO
```

### `H`

```javascript
const H = navigator.hardwareConcurrency ? navigator.hardwareConcurrency : "";
```

### `SWF`

```javascript
const SWF = typeof window.swfobject !== "undefined";
```
