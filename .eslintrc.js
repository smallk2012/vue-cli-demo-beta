// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  //0或’off’：关闭规则。 
  //1或’warn’：打开规则，并且作为一个警告（并不会导致检查不通过）。 
  //2或’error’：打开规则，并且作为一个错误 (退出码为1，检查不通过)。
  rules: {
    "indent": [2, 4, {"SwitchCase": 1}],
    "eqeqeq": 0,//不使用全等
    // allow async-await
    'generator-star-spacing': 'off',
    "no-console": 2,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
