import * as vscode from 'vscode';

import { AvailableCases, CASES } from './../data/cases';
import { Case } from './../models/case';

function getTitle(c: Case, selectedText: string) { return `${CASES[c].title} -> ${CASES[c].convert(selectedText)}`; }

export async function select(selectedText: string) {
  const selection = await vscode.window.showQuickPick(AvailableCases.map(v => getTitle(v, selectedText)));
  if (!selection) { return undefined; }
  return AvailableCases.find(c => getTitle(c, selectedText) === selection);
}

export function apply(text: string, c: Case) {
  return CASES[c].convert(text);
}
