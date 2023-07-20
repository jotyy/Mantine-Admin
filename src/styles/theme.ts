import { MantineThemeOverride } from '@mantine/core';

export const useGlobalTheme = ({ colorScheme }) => {
	const isDark = colorScheme === 'dark';

	const globalTheme: MantineThemeOverride = {
		colorScheme,
		fontFamily: 'Manrope',
		fontFamilyMonospace: 'Disket Mono, Manrope, monospace',
		headings: {
			fontFamily: 'Manrope',
			fontWeight: 600,
			sizes: {
				h1: { fontSize: '64' },
				h2: { fontSize: '48' },
				h3: { fontSize: '32' },
				h4: { fontSize: '24' },
				h5: { fontSize: '20' },
				h6: { fontSize: '18' },
			},
		},
		breakpoints: {
			xs: '576',
			sm: '768',
			md: '992',
			lg: '1200',
			xl: '1400',
		},
		colors: {
			'more-dark': [
				'#E9ECEF', // light boja
				'#CED4DA', // light hover boja
				'#909296',
				'#5C5F66',
				'#373A40',
				'#2C2E33',
				'#25262B', // primary boja // boja teksta filled b
				'#1A1B1E', // primary hover boja
				'#141517',
				'#101113',
			],
			'baseweb-black': [
				'#FFFFFF',
				'#F6F6F6',
				'#EEEEEE',
				'#E2E2E2',
				'#CBCBCB',
				'#AFAFAF',
				'#757575',
				'#545454',
				'#333333',
				'#000000',
			],
		},
		primaryColor: isDark ? 'gray' : 'more-dark',
		defaultRadius: 'sm',
		loader: 'dots',
	};

	return globalTheme;
};
