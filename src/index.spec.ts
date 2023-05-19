import { describe, it, expect } from "@jest/globals";
import { diff, legacyLinesDiff, linesDiff } from "../lib";

describe("computeDiff", () => {
  it("singleline-1", () => {
    expect(diff(["heLLo world!"], ["hello orlando!"])).toMatchSnapshot();
  });
  it("multiline-1", () => {
    expect(
      diff(
        "just some text\n\nHello World\n\nSome more text".split("\n"),
        "just some Text\n\nHello World\n\nSome more changes".split("\n")
      )
    ).toMatchSnapshot();
  });
  it("multiline-2", () => {
    expect(
      diff(
        "This line is removed on the right.\njust some text\nabcd\nefgh\nSome more text".split(
          "\n"
        ),
        "just some text\nabcz\nzzzzefgh\nSome more text.\nThis line is removed on the left.".split(
          "\n"
        )
      )
    ).toMatchSnapshot();
  });
});

describe("compute legacy line diff", () => {
  it("singleline-1", () => {
    expect(
      legacyLinesDiff(["heLLo world!"], ["hello orlando!"])
    ).toMatchSnapshot();
  });
  it("multiline-1", () => {
    expect(
      legacyLinesDiff(
        "just some text\n\nHello World\n\nSome more text".split("\n"),
        "just some Text\n\nHello World\n\nSome more changes".split("\n")
      )
    ).toMatchSnapshot();
  });
  it("multiline-2", () => {
    expect(
      legacyLinesDiff(
        "This line is removed on the right.\njust some text\nabcd\nefgh\nSome more text".split(
          "\n"
        ),
        "just some text\nabcz\nzzzzefgh\nSome more text.\nThis line is removed on the left.".split(
          "\n"
        )
      )
    ).toMatchSnapshot();
  });
});

describe("compute line diff", () => {
  it("singleline-1", () => {
    expect(linesDiff(["heLLo world!"], ["hello orlando!"])).toMatchSnapshot();
  });
  it("multiline-1", () => {
    expect(
      linesDiff(
        "just some text\n\nHello World\n\nSome more text".split("\n"),
        "just some Text\n\nHello World\n\nSome more changes".split("\n")
      )
    ).toMatchSnapshot();
  });
  it("multiline-2", () => {
    expect(
      linesDiff(
        "This line is removed on the right.\njust some text\nabcd\nefgh\nSome more text".split(
          "\n"
        ),
        "just some text\nabcz\nzzzzefgh\nSome more text.\nThis line is removed on the left.".split(
          "\n"
        )
      )
    ).toMatchSnapshot();
  });
});
