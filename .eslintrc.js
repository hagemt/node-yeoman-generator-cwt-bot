/* eslint-env es6, node */

const eslintMaxLen = {
	code: 128,
	tabWidth: 2,
}

/*
const prettier = {
	printWidth: eslintMaxLen.code,
	singleQuote: true,
}
*/

module.exports = {

	env: {
		es6: true,
		jest: true,
		node: true,
	},

	extends: [
		'eslint:recommended',
		'plugin:import/recommended',
		'plugin:node/recommended',
		//'prettier',
		//'xo',
	],

	parserOptions: {
		ecmaVersion: 2018,
	},

	plugins: [
		'import',
		'node',
		//'prettier',
	],

	root: true,

	rules: {
		'comma-dangle': ['warn', 'always-multiline'],
		'indent': ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		'max-len': ['warn', eslintMaxLen],
		//'prettier/prettier': ['error', prettier],
		'quote-props': ['warn', 'consistent-as-needed'],
		'quotes': ['error', 'single'],
		'semi': ['error', 'never'],
		'sort-keys': ['warn'],
	},

}
