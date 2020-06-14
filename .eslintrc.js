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
		'max-len': ['error', 80, 2, { ignoreUrls: true, }], // airbnb is allowing some edge cases
		'prettier/prettier': ['error'],
	},
};