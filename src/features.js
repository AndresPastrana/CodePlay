import { cssEditor, htmlEditor, jsEditor } from "./editors";
import { createDocHTML } from "./utils/createHTMLDoc"
import { $ } from "./utils/selector";
const getEditorValues = () => {
  return {
    html: htmlEditor.getValue(),
    css: cssEditor.getValue(),
    js: jsEditor.getValue()
  };
};

// Update the iframe
export const updatePreview = () => {
  const { html, css, js } = getEditorValues();
  const htmlDoc = createDocHTML(html, css, js);
  const iframePreview = $("#preview");
  iframePreview.setAttribute("srcdoc", htmlDoc);
  updateUrl();
};

// Update the browser url passing the generated doc as an encoded string
export const updateUrl = () => {
  const { html, css, js } = getEditorValues();

  const encodedPage = `${window.btoa(html)}|${window.btoa(css)}|${window.btoa(
      js
    )}`;
  window.history.replaceState(null, null, encodedPage);
};
