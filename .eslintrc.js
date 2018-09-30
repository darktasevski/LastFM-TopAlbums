module.exports = {
	env: {
		browser: true,
		es6: true,
		jest: true,
	},
	extends: 'airbnb',
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true,
		},
		sourceType: 'module',
	},
	plugins: ['react', 'flowtype', 'jsx-a11y', 'import'],
	rules: {
		'no-tabs': 0,
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		'no-use-before-define': ['error', { functions: false, variables: false }],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		'react/prefer-stateless-function': [1, { ignorePureComponents: true }],
		'import/extensions': [1, 'never', { svg: 'always' }],
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
