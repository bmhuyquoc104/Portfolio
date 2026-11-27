import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

export default [
  { ignores: ["dist", "node_modules", "graphify-out"] },
  js.configs.recommended,
  reactHooks.configs.flat.recommended,
  {
    files: ["src/**/*.{js,jsx}"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: {
      // JSX usage isn't tracked without eslint-plugin-react; unused-var check stays for non-components.
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
    },
  },
];
