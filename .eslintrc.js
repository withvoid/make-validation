module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 6,
  },
  rules: {
    'linebreak-style': 'off', // Don't play nicely with Windows.
		'max-len': ['error', 80, 2, { 
			ignoreUrls: true,
			ignoreStrings: true,
			ignoreTemplateLiterals: true,
		}],
    'prettier/prettier': ['error'],
  },
  overrides: [
    {
      files: ['example/**/*.js'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
};