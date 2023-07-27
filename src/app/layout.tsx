/* eslint-disable @next/next/no-page-custom-font */
import { AppProvider } from './provider';

export const metadata = {
	metadataBase: new URL('https://mantine-admin.vercel.app/'),
	title: { default: 'Mantine Admin', template: '%s | Mantine Admin' },
	description: 'A Modern Dashboard with Next.js.',
	keywords: [
		'Next.js',
		'Mantine',
		'Admin',
		'Template',
		'Admin Template',
		'Admin Dashboard',
		'Admin Panel',
		'Admin UI',
	],
	authors: [
		{
			name: 'jotyy',
			url: 'https://jotyy.vercel.app',
		},
	],
	creator: 'jotyy',
	manifest: 'https://mantine-admin.vercel.app/site.webmanifest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en-US">
			<head>
				<link
					href="https://fonts.googleapis.com/css2?family=Quicksand:wght@200;300;400;500;600;700;800&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body>
				<AppProvider>{children}</AppProvider>
			</body>
		</html>
	);
}
