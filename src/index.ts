import type { editor } from "monaco-editor-core";
import {
  DiffComputer,
  SmartLinesDiffComputer,
  // @ts-expect-error no type definition
} from "monaco-editor-core/esm/vs/editor/common/diff/smartLinesDiffComputer.js";
// @ts-expect-error no type definition
import { StandardLinesDiffComputer } from "monaco-editor-core/esm/vs/editor/common/diff/standardLinesDiffComputer.js";

export type ILineChange = editor.ILineChange;
export type ICharChange = editor.ICharChange;
export type LineRangeMapping = editor.LineRangeMapping;

export interface DiffOpts {
  shouldComputeCharChanges?: boolean;
  shouldPostProcessCharChanges?: boolean;
  shouldIgnoreTrimWhitespace?: boolean;
  shouldMakePrettyDiff?: boolean;
  maxComputationTime?: number;
}

export const diff = (
  originalLines: string[],
  modifiedLines: string[],
  opts: DiffOpts = {}
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

interface LinesDiffOpts {
  ignoreTrimWhitespace?: boolean;
  maxComputationTimeMs?: number;
}

export const legacyLinesDiff = (
  originalLines: string[],
  modifiedLines: string[],
  opts: LinesDiffOpts = {}
): LineRangeMapping[] => {
  return new SmartLinesDiffComputer().computeDiff(
    originalLines,
    modifiedLines,
    {
      ignoreTrimWhitespace: false,
      maxComputationTimeMs: 1000,
      ...opts,
    }
  ).changes;
};

export const linesDiff = (
  originalLines: string[],
  modifiedLines: string[],
  opts: LinesDiffOpts = {}
): LineRangeMapping[] => {
  return new StandardLinesDiffComputer().computeDiff(
    originalLines,
    modifiedLines,
    {
      ignoreTrimWhitespace: false,
      maxComputationTimeMs: 1000,
      ...opts,
    }
  ).changes;
};
