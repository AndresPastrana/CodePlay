export const welcomeStyles = `
.editor-wrapper {
    width: 90%;
    max-width: 1200px;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 15px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    transition: background-color 0.3s ease;
}

.editor-header {
    background-color: #ff6b6b;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 3px solid #f94d6f;
    text-transform: uppercase;
}

.editor-header h1 {
    font-size: 22px;
    font-weight: bold;
    letter-spacing: 1px;
}

.theme-toggle {
    display: flex;
    align-items: center;
}

.theme-btn {
    background: none;
    border: none;
    font-size: 20px;
    color: #ffffff;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.theme-btn:hover {
    transform: scale(1.1);
}

.editor-container {
    display: flex;
    height: calc(100vh - 90px);
}

.editor-area, .preview-area {
    width: 50%;
    padding: 20px;
    overflow-y: auto;
}

.editor {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    color: #ffffff;
    border: none;
    font-size: 16px;
    outline: none;
    resize: none;
    font-family: 'Courier New', Courier, monospace;
    padding: 15px;
    border-radius: 10px;
    box-shadow: inset 0 4px 10px rgba(0, 0, 0, 0.3);
}

.preview {
    width: 100%;
    height: 100%;
    border: none;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

body.light-theme {
    background: linear-gradient(45deg, #85d8ce, #08aeea);
    color: #333;
}

body.light-theme .editor-wrapper {
    background-color: rgba(255, 255, 255, 0.9);
}

body.light-theme .editor-header {
    background-color: #08aeea;
    border-bottom: 3px solid #85d8ce;
}

body.light-theme .editor {
    background: rgba(0, 0, 0, 0.05);
    color: #333;
}

body.light-theme .theme-btn {
    color: #333;
}
`;

export const welcomeStringHtml = ` <div class="editor-wrapper">
<header class="editor-header">
    <h1> Live Code Editor</h1>
    <div class="theme-toggle">
        <button id="toggleTheme" class="theme-btn">Toogle</button>
    </div>
</header>
<div class="editor-container">
    <div class="editor-area">
        <textarea id="editor" class="editor" placeholder="Write your code here..."></textarea>
    </div>
    <div class="preview-area">
        <iframe id="preview" class="preview" title="Live Preview"></iframe>
    </div>
</div>`;

export const welcomJs = ``
