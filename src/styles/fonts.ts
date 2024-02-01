import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

const quickSand = localFont({
	src: [
		{
			path: './quicksand/Quicksand-Light.ttf',
			weight: '300',
			style: 'normal',
		},
		{
			path: './quicksand/Quicksand-Regular.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: './quicksand/Quicksand-Medium.ttf',
			weight: '500',
			style: 'normal',
		},
		{
			path: './quicksand/Quicksand-Bold.ttf',
			weight: '600',
			style: 'normal',
		},
		{
			path: './quicksand/Quicksand-Bold.ttf',
			weight: '800',
			style: 'normal',
		},
	],
});

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

export { quickSand, inter };
