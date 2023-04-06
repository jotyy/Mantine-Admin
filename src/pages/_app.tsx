import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Notifications } from '@mantine/notifications';
import { theme } from '@/styles/theme';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

const queryClient = new QueryClient();

export default function _app({
	Component,
	pageProps,
	router: { route },
}: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? ((page: ReactElement) => page);

	return (
		<>
			<QueryClientProvider client={queryClient}>
				<MantineProvider withCSSVariables withGlobalStyles withNormalizeCSS theme={theme}>
					<ModalsProvider>
						{getLayout(<Component {...pageProps} key={route} />)}
					</ModalsProvider>
					<Notifications />
				</MantineProvider>
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</>
	);
}
