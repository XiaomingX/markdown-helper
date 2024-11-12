import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    // 注册命令
    let disposable = vscode.commands.registerCommand('markdown-helper.formatText', () => {
        const editor = vscode.window.activeTextEditor;
        
        if (!editor) {
            return;
        }

        const selection = editor.selection;
        const text = editor.document.getText(selection);

        // 格式化选中的文本
        const formattedText = formatMarkdown(text);

        // 替换选中文本
        editor.edit(editBuilder => {
            editBuilder.replace(selection, formattedText);
        });
    });

    context.subscriptions.push(disposable);
}

function formatMarkdown(text: string): string {
    // 添加 Markdown 格式化逻辑
    return `**${text}**`; 
}

export function deactivate() {}