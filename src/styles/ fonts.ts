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
			weight: '700',
			style: 'normal',
		},
	],
});

export { quickSand };
