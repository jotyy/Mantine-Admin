import { MantineThemeOverride } from '@mantine/core';

export const useGlobalTheme = ({ colorScheme }) => {
	const isDark = colorScheme === 'dark';

	const globalTheme: MantineThemeOverride = {
		colorScheme,
		fontFamily: 'Quicksand',
		fontFamilyMonospace: 'Disket Mono, Quicksand, monospace',
		headings: {
			fontFamily: 'Quicksand',
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
				'#F8FAFC', // light boja
				'#D8E5F7', // light hover boja
				'#B4CBEF',
				'#829FD0',
				'#5670A2',
				'#263964',
				'#1B2B56', // primary boja // boja teksta filled b
				'#132048', // primary hover boja
				'#0C153A',
				'#070E30',
			],
			'little-light': [
				'#F3F6FE',
				'#EFF3FC',
				'#DFE8F9',
				'#C9D3EC',
				'#B1BCDB',
				'#929EC3',
				'#6A78A7',
				'#49568C', // primary boja // boja teksta filled b
				'#2E3971', // primary hover boja
				'#1C255D',
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
		primaryColor: isDark ? 'little-light' : 'more-dark',
		defaultRadius: 'sm',
		loader: 'dots',
	};

	return globalTheme;
};
