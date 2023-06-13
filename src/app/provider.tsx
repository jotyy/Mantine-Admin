'use client';

import { theme } from '@/styles/theme';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import RootStyleRegistry from './emotion';

const queryClient = new QueryClient();

export function AppProvider({ children }: { children: React.ReactNode }) {
	return (
		<QueryClientProvider client={queryClient}>
			<RootStyleRegistry>
				<MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
					<ModalsProvider>{children}</ModalsProvider>
					<Notifications />
				</MantineProvider>
			</RootStyleRegistry>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}
