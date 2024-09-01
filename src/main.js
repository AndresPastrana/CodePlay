import * as monaco from "monaco-editor";
import { $ } from "./utils/selector";
import { createDocHTML } from "./utils/createHTMLDoc";
import { configEditor } from "./utils/configEditor";
import { welcomeStringHtml } from "./template/welcome";
import { welcomeStyles } from "./template/styles";

// Set theme....
configEditor(monaco.editor);

//Editors DOM elements
const htlmEl = $("#html");
const cssEl = $("#css");
const jsEl = $("#js");

// Object to interact with each editor
const htmlEditor = monaco.editor.create(htlmEl, {
  language: "html",
  value: "",
  autoClosingDelete: true,
});

const cssEditor = monaco.editor.create(cssEl, {
  language: "css",
  value: "",
  "semanticHighlighting.enabled": true,

  fontFamily: "monospace",
});

const jsEditor = monaco.editor.create(jsEl, {
  language: "typescript",
  value: "",
});

// Ge the current values of each editor
const getEditorValues = () => {
  return {
    html: htmlEditor.getValue(),
    css: cssEditor.getValue(),
    js: jsEditor.getValue(),
  };
};

// Update the ifarme
const updatePreview = () => {
  const { html, css, js } = getEditorValues();
  const htmlDoc = createDocHTML(html, css, js);
  const iframePreview = $("#preview");
  iframePreview.setAttribute("srcdoc", htmlDoc);
  updateUrl();
};

// Update the browser url passing the generated doc as an encoded string
const updateUrl = () => {
  const { html, css, js } = getEditorValues();
  const encodedPage = `${window.btoa(html)}|${window.btoa(css)}|${window.btoa(
    js
  )}`;
  window.history.replaceState(null, null, encodedPage);
};
function init() {
  const [html, css, js] = window.location.pathname.split("%7C");

  htmlEditor.setValue(window.atob(html.slice(1)) || welcomeStringHtml);
  cssEditor.setValue(window.atob(css) || welcomeStyles);
  jsEditor.setValue(window.atob(js));
  updatePreview();
}

htmlEditor.onDidChangeModelContent(updatePreview);
cssEditor.onDidChangeModelContent(updatePreview);
jsEditor.onDidChangeModelContent(updatePreview);
document.addEventListener("DOMContentLoaded", init);
