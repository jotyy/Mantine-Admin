'use client';

import { theme } from '@/styles/theme';
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
import { useLocalStorage } from '@mantine/hooks';
import { useState } from 'react';
import rtlPlugin from 'stylis-plugin-rtl';
import RootStyleRegistry from './emotion';

const queryClient = new QueryClient();

const THEME_KEY = 'mantine-admin-theme';
const rtlCache = createEmotionCache({
	key: 'mantine-rtl',
	prepend: true,
	stylisPlugins: [rtlPlugin],
});

export function AppProvider({ children }: { children: React.ReactNode }) {
	const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
		key: THEME_KEY,
		defaultValue: 'light',
		getInitialValueInEffect: true,
	});
	const [dir, setDir] = useState<'rtl' | 'ltr'>('ltr');

	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

	const toggleDir = () => {
		const nextDir = dir === 'ltr' ? 'rtl' : 'ltr';
		setDir(nextDir);
		document.querySelector('html')!.setAttribute('dir', nextDir);
	};

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
						emotionCache={dir === 'rtl' ? rtlCache : undefined}
						theme={{ ...theme, colorScheme, dir }}
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
