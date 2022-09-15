/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        semi: false,
        singleAttributePerLine: true,
        endOfLine: "lf",
      },
    ],
    semi: 0,
  },
}
