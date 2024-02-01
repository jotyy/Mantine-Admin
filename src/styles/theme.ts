'use client';

import { createTheme } from '@mantine/core';

export const theme = createTheme({
	fontFamily: 'Work Sans',
	headings: {
		fontFamily: 'Work Sans, sans-serif',
	},
	colors: {
		emerald: [
			'#f0fdf5',
			'#dcfce8',
			'#bbf7d1',
			'#86efad',
			'#4ade80',
			'#22c55e',
			'#16a34a',
			'#15803c',
			'#166533',
			'#14532b',
			'#052e14',
		],
	},
	primaryColor: 'emerald',
	defaultRadius: 'md',
});
