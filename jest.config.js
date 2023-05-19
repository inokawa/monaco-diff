module.exports = {
  clearMocks: true,
  testEnvironment: "node",
  transform: {
    "^.+\\.[t|j]sx?$": "ts-jest",
  },
  transformIgnorePatterns: ["/node_modules/(?!(monaco-editor-core)).+\\.(js)$"],
};
