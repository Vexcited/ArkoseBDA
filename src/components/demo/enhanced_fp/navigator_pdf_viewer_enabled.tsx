import Code from "../../Code";
import Output from "../../Output";

const NavigatorPdfViewerEnabledDemo = () => {
  return (
    <div>
      <Code
        snippet={`
navigator.pdfViewerEnabled === undefined ? null : navigator.pdfViewerEnabled;
        `.trim()}
      />

      <Output
        generator={() => {
          return navigator.pdfViewerEnabled === undefined
            ? null
            : navigator.pdfViewerEnabled;
        }}
      />
    </div>
  );
};

export default NavigatorPdfViewerEnabledDemo;
