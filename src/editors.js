import * as monaco from "monaco-editor";
import { $ } from "./utils/selector";
import { configEditor } from "./utils/config.editor";

// Editors DOM elements
const htlmEl = $("#html");
const cssEl = $("#css");
const jsEl = $("#js");

// Object to interact with each editor
export const htmlEditor = monaco.editor.create(htlmEl, {
  language: "html",
  value: "",
  wordWrap: 'off', // Disable word wrapping
  autoIndent: 'full', // Enable automatic indentation
  insertSpaces: true, // Use spaces for indentation
  tabSize: 2, // Set number of spaces per tab
  cursorStyle: 'line', // Line cursor for better visibility
  lineNumbers: 'on' // Show line numbers for reference
});

export const cssEditor = monaco.editor.create(cssEl, {
  language: "css",
  value: "",
  formatOnPaste: true,
  "semanticHighlighting.enabled": true,
  wordWrap: 'off', // Disable word wrapping
  autoIndent: 'advanced', // Enable automatic indentation
  insertSpaces: true, // Use spaces for indentation
  tabSize: 2, // Set number of spaces per tab
  cursorStyle: 'line', // Line cursor for better visibility
  lineNumbers: 'on', // Show line numbers for reference

  fontFamily: "monospace"
});

export const jsEditor = monaco.editor.create(jsEl, {
  language: "javascript",
  value: "",
  wordWrap: 'off', // Disable word wrapping
  autoIndent: 'full', // Enable automatic indentation
  insertSpaces: true, // Use spaces for indentation
  tabSize: 2, // Set number of spaces per tab
  cursorStyle: 'line', // Line cursor for better visibility
  lineNumbers: 'on' // Show line numbers for reference
});

// Set theme....
configEditor(monaco.editor);
