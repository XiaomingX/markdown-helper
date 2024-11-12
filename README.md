# Markdown Helper - VS Code Extension

欢迎使用 **Markdown Helper** 扩展，这是专为提升您在 Visual Studio Code 中的 Markdown 编辑体验而设计的工具！该扩展提供多种便捷功能，让 Markdown 编辑更快捷、直观。

[下载 Markdown Helper 插件](https://marketplace.visualstudio.com/items?itemName=xiaomingx.markdown-helper-xiaomingx)

## 功能特色

Markdown Helper 提供以下核心功能：

- **目录生成器**：一键生成 Markdown 文档的目录，提升文档结构清晰度。
- **链接校验器**：自动检查 Markdown 文件中的失效或无效链接，避免链接错误。
- **预览增强**：实时预览嵌入的图片、链接和自定义 Markdown 组件，使文档可视化更便捷。
- **快速代码片段**：提供常用的 Markdown 片段（如标题、列表、表格、代码块）以加速编辑。

### 功能展示示例

以下是部分功能的截图展示：

![目录生成器](images/toc-generator.png)  
![链接校验器](images/link-validator.png)

> 提示：通过短动画展示各个功能有助于直观了解插件的用途。

## 使用要求

确保您已满足以下要求以获得最佳体验：

- **Visual Studio Code** 版本 1.60 或更高版本
- 推荐的补充扩展：[Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) 提供更丰富的 Markdown 支持

## 扩展设置

安装后，您可以配置以下设置来自定义 Markdown Helper：

* `markdownHelper.enable`：启用或禁用 Markdown Helper。
* `markdownHelper.validateLinksOnSave`：在保存文件时自动进行链接验证，确保文件内的链接有效。
* `markdownHelper.toc.depth`：设置目录生成的层级深度，满足不同文档结构需求。

这些设置可在 VS Code 的 `settings.json` 文件或设置 UI 中进行调整。

## 已知问题

我们正致力于不断改进 Markdown Helper，当前已知问题包括：

- **链接校验性能**：对于较大文件，链接校验功能可能会稍显缓慢。
- **图片预览缩放**：在高分辨率屏幕上，图片可能无法按预期缩放显示。

如果您遇到问题或有改进建议，欢迎前往 [GitHub 问题区](https://github.com/XiaomingX/markdown-helper/issues) 提交反馈。

## 更新记录

关注最新的功能和修复：

### 1.0.0

- Markdown Helper 初始发布版本，包含目录生成器、链接校验器和快速代码片段功能。

### 1.1.0

- 新增目录深度自定义及自动链接验证功能。

---

## 扩展开发指南

我们严格遵循 [VS Code 扩展开发指南](https://code.visualstudio.com/api/references/extension-guidelines)，以确保一致性和高质量的用户体验。

## 在 VS Code 中使用 Markdown

VS Code 为 Markdown 提供了丰富的支持，包括实时预览和语法高亮。以下快捷键可进一步提升您的 Markdown 编辑效率：

* **分屏编辑**： (`Cmd+\` 在 macOS 上，`Ctrl+\` 在 Windows/Linux 上)
* **切换预览**： (`Shift+Cmd+V` 在 macOS 上，`Shift+Ctrl+V` 在 Windows/Linux 上)
* **代码片段建议**：按 `Ctrl+Space` 访问 Markdown 片段

如需更多信息：

- [Visual Studio Code 的 Markdown 支持](http://code.visualstudio.com/docs/languages/markdown)
- [Markdown 语法参考](https://help.github.com/articles/markdown-basics/)

**享受 Markdown Helper 提供的高效编辑体验吧！**