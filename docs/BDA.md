# BDA

A cute documentation for properties contained in the BDA, with a focus
on how to reproduce them in your browser with JS.

## `enhanced_fp`

### `screen_orientation`

```javascript
const screen_orientation = screen && screen.orientation && screen.orientation.type
  ? screen.orientation.type
  : null
```

## `fe`

### `DNT` (do not track)

```javascript
const DNT = navigator.doNotTrack
  ? navigator.doNotTrack
  : navigator.msDoNotTrack
    ? navigator.msDoNotTrack
    : window.doNotTrack
      ? window.doNotTrack
      : "unknown"
```

Value can vary, depending on the browser specification and user settings.
Most of the time, this setting will be set to `unknown` if running inside a WebView.

### `L` (language)

```javascript
const L = navigator.language
  || navigator.userLanguage
  || navigator.browserLanguage
  || navigator.systemLanguage
  || "";
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
const S = screen.height > screen.width
  ? [screen.height, screen.width]
  : [screen.width, screen.height];
```

### `AS` (available screen)

```javascript
let AS;

if (screen.availWidth && screen.availHeight) {
  AS = screen.availHeight > screen.availWidth
    ? [screen.availHeight, screen.availWidth]
    : [screen.availWidth, screen.availHeight];
}
```

### `TO` (timezone offset)

```javascript
const TO = new Date().getTimezoneOffset();
```

### `SS` (session storage)

```javascript
let SS;

try {
  SS = !!window.sessionStorage;
}
catch {
  SS = true;
}
```

### `LS` (local storage)

```javascript
let LS;

try {
  LS = !!window.localStorage;
}
catch {
  LS = true;
}
```

### `IDB` (indexedDB)

```javascript
let IDB;

try {
  IDB = !!window.indexedDB;
}
catch {
  IDB = true;
}
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
function getCFP () {
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
          false === ctx.isPointInPath(5, 5, "evenodd")
            ? "yes"
            : "no"
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

    return values.join("~").split("").reduce((acc, curr) =>
      (acc = (acc << 5) - acc + curr.charCodeAt(0)) & acc, 0
    );
  }
  catch {
    return false;
  }
}

const CFP = getCFP();
```

### `FR`

```javascript
function getFR () {
  const maxScreen = Math.max(screen.width, screen.height);
  const minScreen = Math.min(screen.width, screen.height);

  const maxAvailScreen = Math.max(screen.availWidth, screen.availHeight);
  const minAvailScreen = Math.min(screen.availWidth, screen.availHeight);

  return maxScreen < maxAvailScreen || minScreen < minAvailScreen;
}

const FR = getFR();
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
const H = navigator.hardwareConcurrency
  ? navigator.hardwareConcurrency
  : "";
```

### `SWF`

```javascript
const SWF = typeof window.swfobject !== "undefined";
```
