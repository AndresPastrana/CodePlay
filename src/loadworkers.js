import HTMLWorker from "monaco-editor/esm/vs/language/html/html.worker?worker";
import CSSWorker from "monaco-editor/esm/vs/language/css/css.worker?worker";
import JSWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";

window.MonacoEnvironment = {
  getWorker: function (_, label) {
    switch (label) {
      case "html":
      case "handlebars":
      case "razor":
        return new HTMLWorker();
      case "css":
      case "scss":
      case "less":
        return new CSSWorker();
      case "typescript":
      case "javascript":
        return new JSWorker();
      default:
        return new Worker(
          new URL(
            "monaco-editor/esm/vs/editor/editor.worker.js",
            import.meta.url
          ),
          { type: "module" }
        );
    }
  },
};
