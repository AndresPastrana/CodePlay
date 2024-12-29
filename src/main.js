import { welcomeStringHtml, welcomeStyles, welcomJs } from "./template/welcome.template";
import { cssEditor, htmlEditor, jsEditor } from "./editors";
import { updatePreview } from "./features";

function init () {
  // Ge the current values of each editor
  const [html, css, js] = window.location.pathname.split("%7C");

  try {
    const decodedHtml = window.atob(html.slice(1))
    const decodedCss = window.atob(css)
    const decodedJs = window.atob(js)

    htmlEditor.setValue(decodedHtml);
    cssEditor.setValue(decodedCss);
    jsEditor.setValue();

    updatePreview(decodedJs);
  } catch (error) {
    console.log("If it was an error decoding the url values load the default template");
    htmlEditor.setValue(welcomeStringHtml);
    cssEditor.setValue(welcomeStyles);
    jsEditor.setValue(welcomJs);
  }
  // Set the values for each editors
}

htmlEditor.onDidChangeModelContent(updatePreview);
cssEditor.onDidChangeModelContent(updatePreview);
jsEditor.onDidChangeModelContent(updatePreview);
document.addEventListener("DOMContentLoaded", init);
