module.exports = {
	extends: [
		'@namics/eslint-config/configurations/es6-react.js',
		'@namics/eslint-config/configurations/es6-react-disable-styles.js',
	],
	rules: {
		'react/jsx-sort-props': 0,
		'quote-props': 0,
	},
	globals: {
		__dirname: true,
		it: true,
		expect: true,
		describe: true,
		beforeEach: true,
	},
};
