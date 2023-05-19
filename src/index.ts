import type { editor } from "monaco-editor-core";
// @ts-expect-error no type definition
import { DiffComputer } from "monaco-editor-core/esm/vs/editor/common/diff/smartLinesDiffComputer";

export type ILineChange = editor.ILineChange;
export type ICharChange = editor.ICharChange;

export type Opts = {
  shouldComputeCharChanges?: boolean;
  shouldPostProcessCharChanges?: boolean;
  shouldIgnoreTrimWhitespace?: boolean;
  shouldMakePrettyDiff?: boolean;
  maxComputationTime?: number;
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
    shouldMakePrettyDiff: true,
    maxComputationTime: 5000,
    ...opts,
  }).computeDiff().changes;
};
