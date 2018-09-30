module.exports = {
	env: {
		browser: true,
		es6: true,
		jest: true,
	},
	extends: 'airbnb',
	parserOptions: {
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true,
		},
		sourceType: 'module',
	},
	plugins: ['react', 'flowtype', 'jsx-a11y', 'import'],
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'react/jsx-filename-extension': [
			1,
			{
				extensions: ['.js', '.jsx'],
			},
		],
		'react/prefer-stateless-function': [
			2,
			{
				ignorePureComponents: true,
			},
		],
		'import/extensions': [
			1,
			'never',
			{
				svg: 'always',
			},
		],
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: true,
				optionalDependencies: false,
				peerDependencies: false,
			},
		],
	},
};
