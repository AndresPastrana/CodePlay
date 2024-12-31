
# Code Play

**CodePlay** is a live code editor for HTML, CSS, and JavaScript. Built with **Monaco Editor** (the same editor used in Visual Studio Code), it allows you to write code in real time and see the results instantly. It's perfect for testing, experimenting, and learning web development.

## Features

- **Live Preview**: See the results of your HTML, CSS, and JavaScript code instantly.
- **Monaco Editor**: Powered by the Monaco Editor, which is used by Visual Studio Code, providing an advanced code editor experience.
- **Multi-Language Support**: Currently supports HTML, CSS, and JavaScript with more languages to be added in the future.
- **Lightweight**: Quick setup and minimal resource usage, ideal for small coding experiments.

## Getting Started

Follow these steps to set up the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/AndresPastrana/CodePlay.git
```

### 2. Navigate to the project directory

```bash
cd CodePlay
```

### 3. Install dependencies

Choose a package manager:

- **pnpm**:  

    ```bash
    pnpm install
    ```

- **npm**:  

    ```bash
    npm install
    ```

- **yarn**:  

    ```bash
    yarn install
    ```

- **bun**:  

    ```bash
    bun install
    ```

### 4. Run the development server

Once the dependencies are installed, start the development server:

- **pnpm**:  

    ```bash
    pnpm run dev
    ```

- **npm**:  

    ```bash
    npm run dev
    ```

- **yarn**:  

    ```bash
    yarn run dev
    ```

- **bun**:  

    ```bash
    bun run dev
    ```

Your live code editor should now be running locally.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Powered by Monaco Editor

LiveCode uses the [Monaco Editor](https://microsoft.github.io/monaco-editor/), the same editor used by **Visual Studio Code**, for a rich and smooth editing experience. You can find more information about Monaco Editor [here](https://microsoft.github.io/monaco-editor/).

## Troubleshooting

- **Error: "Module not found"**: Make sure all dependencies are installed correctly. Try deleting `node_modules` and reinstalling the dependencies.
- **Error: "Port already in use"**: The default port might already be occupied. You can change the port by modifying the configuration in the `package.json` or the development server settings.
