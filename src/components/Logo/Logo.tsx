import { Flex, Text, useMantineTheme } from '@mantine/core';
import Link from 'next/link';
interface Props {
	width?: string;
	height?: string;
}

export const Logo: React.FC<Props> = () => {
	const theme = useMantineTheme();
	return (
		<Flex direction="row" align="center" gap={4}>
			<Link href="/" style={{ textDecoration: 'none' }}>
				<Text
					color={theme.colorScheme === 'light' ? 'dark' : 'white'}
					fw="bolder"
					size="xl"
				>
					Mantine
					<Text component="span" fw="normal" c="gray">
						Admin
					</Text>
				</Text>
			</Link>
		</Flex>
	);
};
