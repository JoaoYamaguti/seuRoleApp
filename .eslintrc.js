module.exports = {
  env: {
    es2021: true
  },
  extends: ['standard', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'space-before-function-paren': 'off'
  }
}
