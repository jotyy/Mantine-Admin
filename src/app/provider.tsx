'use client';

import { theme } from '@/styles/theme';
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import RootStyleRegistry from './emotion';
import { useLocalStorage } from '@mantine/hooks';

const queryClient = new QueryClient();

const THEME_KEY = 'mantine-admin-theme';

export function AppProvider({ children }: { children: React.ReactNode }) {
	const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
		key: THEME_KEY,
		defaultValue: 'light',
		getInitialValueInEffect: true,
	});

	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

	return (
		<QueryClientProvider client={queryClient}>
			<RootStyleRegistry>
				<ColorSchemeProvider
					colorScheme={colorScheme}
					toggleColorScheme={toggleColorScheme}
				>
					<MantineProvider
						withGlobalStyles
						withNormalizeCSS
						theme={{ ...theme, colorScheme }}
					>
						<ModalsProvider>{children}</ModalsProvider>
						<Notifications />
					</MantineProvider>
				</ColorSchemeProvider>
			</RootStyleRegistry>
			{/* <ReactQueryDevtools initialIsOpen={false} /> */}
		</QueryClientProvider>
	);
}
