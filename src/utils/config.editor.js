export function configEditor (editor) {
  editor.defineTheme("default", {
    base: "vs-dark",
    inherit: true,

    rules: [
      {
        token: "identifier",
        foreground: "9CDCFE"
      },
      {
        token: "identifier.function",
        foreground: "DCDCAA"
      },
      {
        token: "type",
        foreground: "1AAFB0"
      }
    ],

    colors: {}
  });
  editor.setTheme("default");
}
