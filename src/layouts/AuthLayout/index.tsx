import { Center, Container } from '@mantine/core';

interface Props {
	children: React.ReactNode;
}

export const AuthLayout: React.FC<Props> = ({ children }) => {
	return (
		<Center
			sx={theme => ({
				minHeight: '100vh',
				backgroundImage: 'linear-gradient(to top, #dfe9f3 0%, white 100%)',
			})}
		>
			<Container size="xs" sx={{ width: 480, paddingBottom: 16 }}>
				{children}
			</Container>
		</Center>
	);
};
