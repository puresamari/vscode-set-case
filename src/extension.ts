import * as vscode from 'vscode';

import { apply, select } from './utils/case';

export function activate(context: vscode.ExtensionContext) {
  vscode.window.showInformationMessage('SetCase is now active! Just mark a text and run the command (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac and type Set Case).');

  let disposable = vscode.commands.registerCommand('setcase.setCase', async () => {

    const editor = vscode.window.activeTextEditor;

    const validSelections = (editor?.selections || []).filter(v => !v.isEmpty);

    if (validSelections.length === 0) {
      vscode.window.showWarningMessage('Please select a text and run the command again.');
      return;
    }
    
    const validSelection = validSelections[0]!;
    const selectedRange = new vscode.Range(validSelection.start, validSelection.end);
    const selectedText = editor?.document.getText(selectedRange)!;
    
    const selectedCase = await select(selectedText);
    
    if (!selectedCase) {
      vscode.window.showWarningMessage(`Selected case not found. Please select a different one.`);
      return;
    }
    
    
    await new Promise(resolve => editor?.edit(builder => {
      builder.replace(selectedRange, apply(selectedText, selectedCase));
      resolve(null);
    }));

    vscode.window.showInformationMessage('Case applied!');
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
