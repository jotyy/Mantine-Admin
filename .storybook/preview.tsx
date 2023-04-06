import { ColorSchemeProvider, MantineProvider } from '@mantine/core';
import React from 'react';
import { theme } from '../src/styles/theme';
import { useDarkMode } from 'storybook-dark-mode';

function ThemeWrapper(props: { children: React.ReactNode }) {
	const colorScheme = useDarkMode() ? 'dark' : 'light';
	return (
		<ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={() => {}}>
			<MantineProvider
				theme={{ ...theme, colorScheme }}
				withGlobalStyles
				withNormalizeCSS
			>
				{props.children}
			</MantineProvider>
		</ColorSchemeProvider>
	);
}

export const decorators = [
	(renderStory: Function) => <ThemeWrapper>{renderStory()}</ThemeWrapper>,
];
