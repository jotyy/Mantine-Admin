'use client';

import { Box } from '@mantine/core';
import { ReactNode } from 'react';

interface LandingContainerProps {
	children: ReactNode;
}

export function LandingContainer({ children }: LandingContainerProps) {
	return (
		<Box
			sx={theme => ({
				display: 'flex',
				flexDirection: 'column',
				color: theme.colorScheme === 'light' ? theme.colors.dark : theme.white,
				background:
					theme.colorScheme === 'light' ? theme.colors.gray[1] : theme.colors.gray[9],
			})}
		>
			{children}
		</Box>
	);
}
