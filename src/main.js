import { welcomeStringHtml, welcomeStyles, welcomJs } from "./template/welcome.template";
import { cssEditor, htmlEditor, jsEditor } from "./editors";
import { updatePreview } from "./features";

function init () {
  // Ge the current values of each editor
  const [html, css, js] = window.location.pathname.split("%7C");

  try {
    // Decode the values that comes in the url
    const decodedHtml = window.atob(html.slice(1))
    const decodedCss = window.atob(css)
    const decodedJs = window.atob(js)

    // Passe them to the editors
    htmlEditor.setValue(decodedHtml);
    cssEditor.setValue(decodedCss);
    jsEditor.setValue();

    // Update the Iframe
    updatePreview(decodedJs);
  } catch (error) {
    console.error("If it was an error decoding the url values --> load the default template");
    htmlEditor.setValue(welcomeStringHtml);
    cssEditor.setValue(welcomeStyles);
    jsEditor.setValue(welcomJs);
  }
}

htmlEditor.onDidChangeModelContent(updatePreview);
cssEditor.onDidChangeModelContent(updatePreview);
jsEditor.onDidChangeModelContent(updatePreview);
document.addEventListener("DOMContentLoaded", init);
