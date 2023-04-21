module.exports = {
  extends: ["next", "turbo", "prettier", "airbnb"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }],
    "react/function-component-definition": [
      2,
      { namedComponents: "arrow-function" },
    ],
    "linebreak-style": "off",
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
};
