const defaultConfig = require.resolve(
	'@platform/config-ui-standards/configs/eslint',
);

module.exports = {
	extends: defaultConfig,
	rules: { 'react-hooks/exhaustive-deps': 'warn' },
};
