'use client';

import { Flex } from '@mantine/core';
import { ReactNode } from 'react';

interface LandingContainerProps {
	children: ReactNode;
}

export function LandingContainer({ children }: LandingContainerProps) {
	return <Flex direction="column">{children}</Flex>;
}
