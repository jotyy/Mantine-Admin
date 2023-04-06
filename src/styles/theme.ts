// theme.ts file
import type { MantineThemeOverride } from '@mantine/core';

// export your theme object
export const theme: MantineThemeOverride = {
	colors: {
		brand: [
			'#D6E6FE',
			'#AECBFE',
			'#86ADFE',
			'#6894FE',
			'#366CFE',
			'#2752DA',
			'#1B3CB6',
			'#112993',
			'#0A1C79',
		],
	},
	primaryColor: 'brand',
	primaryShade: 5,
};
