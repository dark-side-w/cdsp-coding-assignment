// https://eslint.org/docs/user-guide/configuring

module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    'plugin:vue/recommended'
  ],
  rules: {
    'no-debugger': process.env.node_env === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "comma-dangle": ["error", "only-multiline"],
    "object-curly-spacing": ["error", "always"],
    // allow async-await
    'generator-star-spacing': 'off',
    "indent": ["warn", 2, { "SwitchCase": 1 }],
    "camelcase": 0,
  },
}
