module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  extends: [
    "airbnb-typescript-prettier",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  rules: {
    "no-console": [0],
    "import/prefer-default-export": [0],
    "max-classes-per-file": [1],
    "@typescript-eslint/no-explicit-any": [0],
    // "class-methods-use-this": [0],
    "@typescript-eslint/no-unused-vars": [0],
    // "@typescript-eslint/explicit-module-boundary-types": [0],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
