// https://eslint.org/docs/user-guide/configuring

module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    'plugin:vue/recommended'
  ],
  rules: {
    "comma-dangle": ["error", "only-multiline"],
    "object-curly-spacing": ["error", "always"],
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.node_env === 'production' ? 'error' : 'off'
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
}
