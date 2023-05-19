# monaco-diff

![npm](https://img.shields.io/npm/v/monaco-diff) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/monaco-diff)
![check](https://github.com/inokawa/monaco-diff/workflows/check/badge.svg)

Text diff library exported from [monaco-editor-core](https://www.npmjs.com/package/monaco-editor-core), which is core of [VS Code](https://github.com/Microsoft/vscode).

## Install

```sh
npm install monaco-diff
```

## Usage

```ts
import { diff, linesDiff } from "monaco-diff";

console.log(
  diff(
    "just some text\n\nHello World\n\nSome more text".split("\n"),
    "just some Text\n\nHello World\n\nSome more changes".split("\n")
  )
);

console.log(
  linesDiff(
    "just some text\n\nHello World\n\nSome more text".split("\n"),
    "just some Text\n\nHello World\n\nSome more changes".split("\n")
  )
);
```
