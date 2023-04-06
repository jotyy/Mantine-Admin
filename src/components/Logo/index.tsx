import { Flex, Image, Title } from '@mantine/core';
interface Props {
	width?: string;
	height?: string;
}

export const Logo: React.FC<Props> = ({ width, height }) => (
	<Flex direction="row" align="center" gap={4}>
		<Image src="/logo.png" alt="logo" width={width} height={height} />
		<Title order={4}>Mantine Admin</Title>
	</Flex>
);
