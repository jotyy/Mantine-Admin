import { Metadata } from 'next';
import RootStyleRegistry from './emotion';

export const metadata: Metadata = {
	title: 'Mantine Admin',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en-US">
			<head />
			<body>
				<RootStyleRegistry>{children}</RootStyleRegistry>
			</body>
		</html>
	);
}
