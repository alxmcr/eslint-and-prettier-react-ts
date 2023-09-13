module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "sonarjs", "filenames"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    indent: [
      "error",
      2,
      {
        VariableDeclarator: 2,
      },
    ],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "single"],
    semi: ["error", "always"],
    "no-shadow": "error",
    "no-nested-ternary": "error",
    "no-unused-expressions": "error",
    "no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "all",
        ignoreRestSiblings: false,
        argsIgnorePattern: "[_]",
      },
    ],
    // Extra rules
    "filenames/match-exported": "error",
    "sonarjs/cognitive-complexity": "error",
    "sonarjs/prefer-immediate-return": "error",
    "sonarjs/no-duplicate-string": "error",
    "sonarjs/no-gratuitous-expressions": "error",
    "sonarjs/no-identical-expressions": "error",
  },
};
