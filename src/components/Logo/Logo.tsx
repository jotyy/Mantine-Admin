'use client';

import { Flex, Text, useMantineColorScheme } from '@mantine/core';
import Link from 'next/link';
interface Props {
	width?: string;
	height?: string;
}

export const Logo: React.FC<Props> = () => {
	const { colorScheme } = useMantineColorScheme();

	return (
		<Flex direction="row" align="center" gap={4}>
			<Link href="/" style={{ textDecoration: 'none' }}>
				<Text c={colorScheme === 'light' ? 'dark' : 'white'} fw="bolder" size="xl">
					Mantine
					<Text component="span" fw="normal" c="gray">
						Admin
					</Text>
				</Text>
			</Link>
		</Flex>
	);
};
