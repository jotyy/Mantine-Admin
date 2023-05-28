'use client';

import { theme } from '@/styles/theme';
import { CacheProvider } from '@emotion/react';
import { MantineProvider, useEmotionCache } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useServerInsertedHTML } from 'next/navigation';

const queryClient = new QueryClient();

export default function RootStyleRegistry({ children }: { children: React.ReactNode }) {
	const cache = useEmotionCache();
	cache.compat = true;

	useServerInsertedHTML(() => (
		<style
			data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
			dangerouslySetInnerHTML={{
				__html: Object.values(cache.inserted).join(' '),
			}}
		/>
	));

	return (
		<QueryClientProvider client={queryClient}>
			<CacheProvider value={cache}>
				<MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
					<ModalsProvider>{children}</ModalsProvider>
					<Notifications />
				</MantineProvider>
			</CacheProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}
