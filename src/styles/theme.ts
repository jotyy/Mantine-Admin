// theme.ts file
import type { MantineThemeOverride } from '@mantine/core';

// export your theme object
export const theme: MantineThemeOverride = {
	colors: {
		brand: [
			'#DDE5FD',
			'#BCCBFC',
			'#99ADF7',
			'#7E94F0',
			'#556EE6',
			'#3E53C5',
			'#2A3BA5',
			'#1B2785',
			'#10196E',
		],
	},
	primaryColor: 'brand',
	primaryShade: 5,
};
