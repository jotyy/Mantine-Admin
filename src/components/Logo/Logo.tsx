import { Flex, Text } from '@mantine/core';
interface Props {
	width?: string;
	height?: string;
}

export const Logo: React.FC<Props> = ({ width, height }) => (
	<Flex direction="row" align="center" gap={4}>
		<Text fw="bolder" size="xl">
			Mantine
			<Text component="span" fw="normal" c="indigo">
				Admin
			</Text>
		</Text>
	</Flex>
);
