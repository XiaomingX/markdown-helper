# Markdown Helper - VS Code Extension

Welcome to the **Markdown Helper** VS Code extension! This tool is designed to enhance your markdown editing experience in Visual Studio Code with various utilities and helper functions, making markdown creation faster and more intuitive.

## Features

The Markdown Helper extension provides the following features:

- **Table of Contents Generator**: Automatically generate a table of contents for your markdown documents.
- **Link Validator**: Check for broken or invalid links within your markdown files.
- **Preview Enhancements**: See live previews for embedded images, links, and custom markdown components.
- **Quick Snippets**: Access frequently used markdown snippets for headers, lists, tables, and code blocks.

### Example of Features in Action

Below are screenshots showcasing some key features:

\!\[Table of Contents Generator\]\(images/toc-generator.png\)  
\!\[Link Validator\]\(images/link-validator.png\)

> Tip: Animations can be a great way to show off your extension. Consider creating short animations to highlight each feature.

## Requirements

To get the most out of Markdown Helper, please ensure that you have:

- **Visual Studio Code** version 1.60 or higher
- Any additional dependencies or extensions listed below:
    - [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) for complementary markdown support.

## Extension Settings

This extension adds the following settings to VS Code:

* `markdownHelper.enable`: Enable or disable Markdown Helper.
* `markdownHelper.validateLinksOnSave`: Enable link validation automatically on file save.
* `markdownHelper.toc.depth`: Set the depth level for table of contents generation.

These settings can be configured in your VS Code `settings.json` file or directly in the Settings UI.

## Known Issues

We are actively working to improve Markdown Helper. Current known issues include:

- **Link Validator Performance**: Large files may slow down the link validation process.
- **Image Preview Scaling**: Images may not render correctly on very high-resolution screens.

If you encounter any issues, please report them in the [GitHub issues section](https://github.com/your-repo/markdown-helper/issues) for this extension.

## Release Notes

Stay updated with the latest features and fixes:

### 1.0.0

- Initial release of Markdown Helper with core features: TOC Generator, Link Validator, and Quick Snippets.

### 1.1.0

- Added customizable TOC depth and automatic link validation on save.

---

## Extension Guidelines

We follow the [VS Code Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines) to ensure a high-quality experience for our users.

## Working with Markdown in VS Code

VS Code provides excellent support for markdown files, including live previews and syntax highlighting. Use these shortcuts to enhance your workflow:

* **Split the Editor**: (`Cmd+\` on macOS or `Ctrl+\` on Windows/Linux).
* **Toggle Preview**: (`Shift+Cmd+V` on macOS or `Shift+Ctrl+V` on Windows/Linux).
* **Snippet Suggestions**: Press `Ctrl+Space` to access markdown snippets.

For more information:

- [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
- [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy your enhanced markdown editing experience!**