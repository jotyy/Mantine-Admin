import { AppProvider } from './provider';

export const metadata = {
	metadataBase: new URL('https://mantine-admin.vercel.app/'),
	title: { default: 'Mantine Admin', template: '%s | Mantine Admin' },
	description: 'A Modern Admin template build with Next.js 13/MantineUI',
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
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://mantine-admin.vercel.app',
		site_name: 'Mantine Admin',
		description: 'A Modern Admin template build with Next.js 13/MantineUI',
		siteName: 'Mantine Admin',
		images: '/static/images/banner.png',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Mantine Admin',
		description: 'A Modern Admin template build with Next.js 13/MantineUI',
		images: ['https://mantine-admin.vercel.app/static/images/banner.png'],
		creator: '@jotyy3',
	},
	manifest: 'https://mantine-admin.vercel.app/site.webmanifest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en-US">
			<head />
			<body>
				<AppProvider>{children}</AppProvider>
			</body>
		</html>
	);
}
