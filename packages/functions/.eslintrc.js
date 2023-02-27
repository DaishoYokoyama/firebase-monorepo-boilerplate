module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json"],
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  ignorePatterns: ["/lib/**/*", "jest.config.js"],
  env: { es6: true, node: true, jest: true },
};
