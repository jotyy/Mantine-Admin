'use client';

import { useGlobalTheme } from '@/styles/theme';
import {
	ColorScheme,
	ColorSchemeProvider,
	MantineProvider,
	createEmotionCache,
} from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useConfigStore } from '@/stores/config';
import rtlPlugin from 'stylis-plugin-rtl';
import RootStyleRegistry from './emotion';
import { Analytics } from '@/components/Analytics/Analytics';

const queryClient = new QueryClient();

const rtlCache = createEmotionCache({
	key: 'mantine-rtl',
	prepend: true,
	stylisPlugins: [rtlPlugin],
});

export function AppProvider({ children }: { children: React.ReactNode }) {
	const { colorScheme, direction, setColorScheme } = useConfigStore();
	const theme = useGlobalTheme({ colorScheme });

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
						emotionCache={direction === 'rtl' ? rtlCache : undefined}
						theme={{ ...theme, dir: direction }}
					>
						<ModalsProvider>{children}</ModalsProvider>
						<Notifications />
						<Analytics />
					</MantineProvider>
				</ColorSchemeProvider>
			</RootStyleRegistry>
			{/* <ReactQueryDevtools initialIsOpen={false} /> */}
		</QueryClientProvider>
	);
}
