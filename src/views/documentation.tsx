import { Component } from "solid-js";
import { numberOrNull, removeQueryParams } from "../impl/utils";
import Code from "../components/Code";
import Md5HexDemo from "../components/demo/utils/md5hex";
import UserAgentDataBrandsDemo from "../components/demo/enhanced_fp/user_agent_data_brands";
import UserAgentDataMobileDemo from "../components/demo/enhanced_fp/user_agent_data_mobile";
import NavigatorConnectionDownlinkDemo from "../components/demo/enhanced_fp/navigator_connection_downlink";
import NavigatorConnectionDownlinkMaxDemo from "../components/demo/enhanced_fp/navigator_connection_downlink_max";
import NetworkInfoRttDemo from "../components/demo/enhanced_fp/network_info_rtt";
import NetworkInfoSaveDataDemo from "../components/demo/enhanced_fp/network_info_save_data";
import ScreenPixelDepthDemo from "../components/demo/enhanced_fp/screen_pixel_depth";
import NavigatorDeviceMemoryDemo from "../components/demo/enhanced_fp/navigator_device_memory";
import NavigatorPdfViewerEnabledDemo from "../components/demo/enhanced_fp/navigator_pdf_viewer_enabled";
import NavigatorLanguagesDemo from "../components/demo/enhanced_fp/navigator_languages";
import WindowInnerWidthDemo from "../components/demo/enhanced_fp/window_inner_width";
import WindowInnerHeightDemo from "../components/demo/enhanced_fp/window_inner_height";
import WindowOuterHeightDemo from "../components/demo/enhanced_fp/window_outer_height";
import WindowOuterWidthDemo from "../components/demo/enhanced_fp/window_outer_width";
import BrowserDectectionFirefoxDemo from "../components/demo/enhanced_fp/browser_detection_firefox";
import BrowserDetectionBraveDemo from "../components/demo/enhanced_fp/browser_detection_brave";
import BrowserApiChecksDemo from "../components/demo/enhanced_fp/browser_api_checks";
import BrowserObjectChecksDemo from "../components/demo/enhanced_fp/browser_object_checks";
import AudioCodecsDemo from "../components/demo/enhanced_fp/audio_codecs";
import AudioCodecsExtendedHashDemo from "../components/demo/enhanced_fp/audio_codecs_extended_hash";
import WindowTreeStructureDemo from "../components/demo/enhanced_fp/window__tree_structure";
import WindowLocationHrefDemo from "../components/demo/enhanced_fp/window__location_href";
import MathFingerprintDemo from "../components/demo/enhanced_fp/math_fingerprint";
import SupportedMathFunctionsDemo from "../components/demo/enhanced_fp/supported_math_functions";
import ScreenOrientationDemo from "../components/demo/enhanced_fp/screen_orientation";
import WebglAliasedLineWidthRangeDemo from "../components/demo/enhanced_fp/webgl_aliased_line_width_range";
import WebglAliasedPointSizeRangeDemo from "../components/demo/enhanced_fp/webgl_aliased_point_size_range";
import WebglAntialiasingDemo from "../components/demo/enhanced_fp/webgl_antialiasing";
import WebglBitsDemo from "../components/demo/enhanced_fp/webgl_bits";
import WebglExtensionsDemo from "../components/demo/enhanced_fp/webgl_extensions";
import WebglExtensionsHashDemo from "../components/demo/enhanced_fp/webgl_extensions_hash";
import WebglFsfParamsDemo from "../components/demo/enhanced_fp/webgl_fsf_params";
import WebglFsiParamsDemo from "../components/demo/enhanced_fp/webgl_fsi_params";
import WebglHashWebglDemo from "../components/demo/enhanced_fp/webgl_hash_webgl";
import WebglMaxParamsDemo from "../components/demo/enhanced_fp/webgl_max_params";
import WebglMaxViewportDimsDemo from "../components/demo/enhanced_fp/webgl_max_viewport_dims";
import WebglRendererDemo from "../components/demo/enhanced_fp/webgl_renderer";
import WebglShadingLanguageVersionDemo from "../components/demo/enhanced_fp/webgl_shading_language_version";
import WebglUnmaskedRendererDemo from "../components/demo/enhanced_fp/webgl_unmasked_renderer";
import WebglUnmaskedVendorDemo from "../components/demo/enhanced_fp/webgl_unmasked_vendor";
import WebglVendorDemo from "../components/demo/enhanced_fp/webgl_vendor";
import WebglVersionDemo from "../components/demo/enhanced_fp/webgl_version";
import WebglVsfParamsDemo from "../components/demo/enhanced_fp/webgl_vsf_params";
import WebglVsiParamsDemo from "../components/demo/enhanced_fp/webgl_vsi_params";

const DocumentationView: Component = () => {
  return (
    <div>
      This documentation concerns v2.17.2 of their enforcement.js file.
      <section>
        <h2>Utilities</h2>
        <p>
          In this documentation, we'll be using a lot these functions. They're
          either reimplementation of Arkose's code or a direct adaptation.
        </p>

        <p>md5hex</p>
        <Md5HexDemo />

        <p>numberOrNull</p>
        <Code
          snippet={`
const numberOrNull = ${numberOrNull.toString()};
        `.trim()}
        />

        <p>removeQueryParams</p>
        <Code
          snippet={`
const removeQueryParams = ${removeQueryParams.toString()};
        `.trim()}
        />
      </section>
      <section>
        <h2 class="text-2xl font-bold">enhanced_fp</h2>

        <p>user_agent_data_brands</p>
        <UserAgentDataBrandsDemo />
        <p>user_agent_data_mobile</p>
        <UserAgentDataMobileDemo />
        <p>navigator_connection_downlink</p>
        <NavigatorConnectionDownlinkDemo />
        <p>navigator_connection_downlink_max</p>
        <NavigatorConnectionDownlinkMaxDemo />
        <p>network_info_rtt</p>
        <NetworkInfoRttDemo />
        <p>network_info_save_data</p>
        <NetworkInfoSaveDataDemo />
        <p>screen_pixel_depth</p>
        <ScreenPixelDepthDemo />
        <p>navigator_device_memory</p>
        <NavigatorDeviceMemoryDemo />
        <p>navigator_pdf_viewer_enabled</p>
        <NavigatorPdfViewerEnabledDemo />
        <p>navigator_languages</p>
        <NavigatorLanguagesDemo />
        <p>window_inner_width</p>
        <WindowInnerWidthDemo />
        <p>window_inner_height</p>
        <WindowInnerHeightDemo />
        <p>window_outer_width</p>
        <WindowOuterWidthDemo />
        <p>window_outer_height</p>
        <WindowOuterHeightDemo />
        <p>browser_detection_firefox</p>
        <BrowserDectectionFirefoxDemo />
        <p>browser_detection_brave</p>
        <BrowserDetectionBraveDemo />
        <p>browser_api_checks</p>
        <BrowserApiChecksDemo />
        <p>browser_object_checks</p>
        <BrowserObjectChecksDemo />
        <p>audio_codecs</p>
        <AudioCodecsDemo />
        <p>audio_codecs_extended_hash</p>
        <AudioCodecsExtendedHashDemo />
        <p>window__tree_structure</p>
        <WindowTreeStructureDemo />
        <p>window__location_href</p>
        <WindowLocationHrefDemo />
        <p>math_fingerprint</p>
        <MathFingerprintDemo />
        <p>supported_math_functions</p>
        <SupportedMathFunctionsDemo />
        <p>screen_orientation</p>
        <ScreenOrientationDemo />
        <p>webgl_aliased_line_width_range</p>
        <WebglAliasedLineWidthRangeDemo />
        <p>webgl_aliased_point_size_range</p>
        <WebglAliasedPointSizeRangeDemo />
        <p>webgl_antialiasing</p>
        <WebglAntialiasingDemo />
        <p>webgl_bits</p>
        <WebglBitsDemo />
        <p>webgl_extensions</p>
        <WebglExtensionsDemo />
        <p>webgl_extensions_hash</p>
        <WebglExtensionsHashDemo />
        <p>webgl_fsf_params</p>
        <WebglFsfParamsDemo />
        <p>webgl_fsi_params</p>
        <WebglFsiParamsDemo />
        <p>webgl_hash_webgl</p>
        <WebglHashWebglDemo />
        <p>webgl_max_params</p>
        <WebglMaxParamsDemo />
        <p>webgl_max_viewport_dims</p>
        <WebglMaxViewportDimsDemo />
        <p>webgl_renderer</p>
        <WebglRendererDemo />
        <p>webgl_shading_language_version</p>
        <WebglShadingLanguageVersionDemo />
        <p>webgl_unmasked_renderer</p>
        <WebglUnmaskedRendererDemo />
        <p>webgl_unmasked_vendor</p>
        <WebglUnmaskedVendorDemo />
        <p>webgl_vendor</p>
        <WebglVendorDemo />
        <p>webgl_version</p>
        <WebglVersionDemo />
        <p>webgl_vsf_params</p>
        <WebglVsfParamsDemo />
        <p>webgl_vsi_params</p>
        <WebglVsiParamsDemo />
      </section>
    </div>
  );
};

export default DocumentationView;
