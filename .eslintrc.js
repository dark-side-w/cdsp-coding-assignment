// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  rules: {
    "comma-dangle": ["error", "only-multiline"],
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    "indent": ["warn", 2, { "SwitchCase": 1 }],
    "no-prototype-builtins": 'off',
    'vue/attribute-hyphenation': ['error', 'never'],
  },
  overrides: [
    {
      files: ["*.vue"],
      rules: {
        "indent": "off",
        "vue/script-indent": ["warn", 2],
      }
    }
  ]
};
