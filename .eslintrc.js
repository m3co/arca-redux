module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'key-spacing': 'off',
    'max-len': ['error', 140, 2, { 'ignoreTrailingComments': true, 'ignoreUrls': true }],
    'object-curly-spacing': ['error', 'always'],
    'semi': ['error', 'always'],
    'semi-spacing': ['error', {'before': false, 'after': true}],
    'no-extra-semi': 'error',
    'no-multiple-empty-lines': ['error', { 'max': 2, 'maxEOF': 1 }],
    'no-unexpected-multiline': 'error',
    'no-empty': 'error',
    'import/prefer-default-export': 0,
    'no-underscore-dangle': 0,
    'no-shadow': 0,
    'quotes': [2, 'single', 'avoid-escape'],
  },
  parser: '@typescript-eslint/parser',
};
