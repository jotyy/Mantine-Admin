import { quickSand } from '@/styles/fonts';
import { AppProvider } from './provider';
import '@mantine/core/styles.css';
import { ColorSchemeScript, DirectionProvider, MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';

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
		<html lang="en-US" className={quickSand.className}>
			<head>
				<ColorSchemeScript />
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
				/>
			</head>
			<body>
				<DirectionProvider>
					<MantineProvider>
						<ModalsProvider>
							<AppProvider>{children}</AppProvider>
						</ModalsProvider>
						<Notifications />
					</MantineProvider>
				</DirectionProvider>
			</body>
		</html>
	);
}
