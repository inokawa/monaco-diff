module.exports = {
  clearMocks: true,
  testEnvironment: "node",
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  transformIgnorePatterns: ["/node_modules/(?!(monaco-editor-core)).+\\.(js)$"],
};
