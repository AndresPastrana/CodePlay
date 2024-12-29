import { welcomeStringHtml } from "./template/welcome";
import { welcomeStyles } from "./template/styles";
import { cssEditor, htmlEditor, jsEditor } from "./editors";
import { updatePreview } from "./features";

function init () {
  // Ge the current values of each editor
  const [html, css, js] = window.location.pathname.split("%7C");

  // Set the values for each editors
  htmlEditor.setValue(window.atob(html.slice(1)) || welcomeStringHtml);
  cssEditor.setValue(window.atob(css) || welcomeStyles);
  jsEditor.setValue(window.atob(js));
  updatePreview();
}

htmlEditor.onDidChangeModelContent(updatePreview);
cssEditor.onDidChangeModelContent(updatePreview);
jsEditor.onDidChangeModelContent(updatePreview);
document.addEventListener("DOMContentLoaded", init);
