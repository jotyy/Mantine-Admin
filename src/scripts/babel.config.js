module.exports = function (api) {
	const isServer = api.caller(caller => caller?.isServer);
	const isCallerDevelopment = api.caller(caller => caller?.isDev);

	const importSource =
		!isServer && isCallerDevelopment ? '@welldone-software/why-did-you-render' : 'react';

	const presets = [
		[
			'next/babel',
			{
				'preset-react': importSource,
			},
		],
	];

	return { presets };
};
