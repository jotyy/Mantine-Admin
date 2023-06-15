import { Flex, Text, useMantineTheme } from '@mantine/core';
interface Props {
	width?: string;
	height?: string;
}

export const Logo: React.FC<Props> = ({ width, height }) => {
	const theme = useMantineTheme();
	return (
		<Flex direction="row" align="center" gap={4}>
			<Text
				color={theme.colorScheme === 'light' ? 'dark' : 'white'}
				fw="bolder"
				size="xl"
			>
				Mantine
				<Text component="span" fw="normal" c="indigo">
					Admin
				</Text>
			</Text>
		</Flex>
	);
};
