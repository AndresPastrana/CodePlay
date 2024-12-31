export function generateWebPage (htmlContent, cssContent, jsContent) {
  // Combine the HTML, CSS, and JavaScript into a complete web page string
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generated Web Page</title>
    <style>
      ${cssContent}
    </style>
  </head>
  <body>
    ${htmlContent}
    <script>
      ${jsContent}
    </script>
  </body>
  </html>`;
}
