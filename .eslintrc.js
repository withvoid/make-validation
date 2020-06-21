module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'], // eslint-config-prettier
  plugins: ['prettier'], // eslint-plugin-prettier
  parserOptions: {
    ecmaVersion: 8,
  },
  rules: {
    'linebreak-style': 'off', // Don't play nicely with Windows.
    'max-len': [
      'error',
      80,
      2,
      {
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'prettier/prettier': ['error'],
  },
};
