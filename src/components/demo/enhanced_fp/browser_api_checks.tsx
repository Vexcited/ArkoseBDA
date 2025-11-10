import Code from "../../Code";
import Output from "../../Output";

const BrowserApiChecksDemo = () => {
  return (
    <div>
      <Code
        snippet={`
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
        `.trim()}
      />

      <Output
        generator={() => {
          try {
            return [
              "permission_status: ".concat(
                // @ts-expect-error
                !!window.PermissionStatus &&
                  Object.prototype.hasOwnProperty.call(
                    window.PermissionStatus.prototype,
                    "name"
                  )
              ),
              // @ts-expect-error
              "eye_dropper: ".concat(!!window.EyeDropper),
              // @ts-expect-error
              "audio_data: ".concat(!!window.AudioData),
              "writable_stream: ".concat(
                // @ts-expect-error
                !!window.WritableStreamDefaultController
              ),
              // @ts-expect-error
              "css_style_rule: ".concat(!!window.CSSCounterStyleRule),
              // @ts-expect-error
              "navigator_ua: ".concat(!!window.NavigatorUAData),
              // @ts-expect-error
              "barcode_detector: ".concat(!!window.BarcodeDetector),
              "display_names: ".concat(
                // @ts-expect-error
                !(!window.Intl || !window.Intl.DisplayNames)
              ),
              "contacts_manager: ".concat(
                // @ts-expect-error
                !!(navigator && navigator.contacts && navigator.ContactsManager)
              ),
              // @ts-expect-error
              "svg_discard_element: ".concat(!!window.SVGDiscardElement),
              // @ts-expect-error
              "usb: ".concat(navigator.usb ? "defined" : "NA"),
              "media_device: ".concat(
                navigator.mediaDevices ? "defined" : "NA"
              ),
              "playback_quality: ".concat(
                // @ts-expect-error
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
        }}
      />
    </div>
  );
};

export default BrowserApiChecksDemo;
