// @ts-expect-error no type definition
import { DiffComputer } from "monaco-editor-core/esm/vs/editor/common/diff/diffComputer";

export type Opts = {
  shouldComputeCharChanges?: boolean;
  shouldPostProcessCharChanges?: boolean;
  shouldIgnoreTrimWhitespace?: boolean;
  shouldMakePrettyDiff?: boolean;
  maxComputationTime?: number;
};

// https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.ILineChange.html
export type ILineChange = {
  readonly charChanges: ICharChange[];
  readonly modifiedEndLineNumber: number;
  readonly modifiedStartLineNumber: number;
  readonly originalEndLineNumber: number;
  readonly originalStartLineNumber: number;
};

// https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.ICharChange.html
export type ICharChange = {
  readonly modifiedEndColumn: number;
  readonly modifiedEndLineNumber: number;
  readonly modifiedStartColumn: number;
  readonly modifiedStartLineNumber: number;
  readonly originalEndColumn: number;
  readonly originalEndLineNumber: number;
  readonly originalStartColumn: number;
  readonly originalStartLineNumber: number;
};

export default (
  originalLines: string[],
  modifiedLines: string[],
  opts: Opts = {}
): ILineChange[] => {
  return new DiffComputer(originalLines, modifiedLines, {
    shouldComputeCharChanges: true,
    shouldPostProcessCharChanges: true,
    shouldIgnoreTrimWhitespace: true,
    maxComputationTime: 5000,
    ...opts,
  }).computeDiff().changes;
};
