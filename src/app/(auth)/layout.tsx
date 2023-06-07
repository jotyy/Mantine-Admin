'use client';

import { Anchor, Center, Container, Text, Title } from '@mantine/core';

interface Props {
	children: React.ReactNode;
}

export default function AuthLayout({ children }: Props) {
	return (
		<Center
			sx={() => ({
				minHeight: '100vh',
				backgroundImage: 'linear-gradient(to top, #dfe9f3 0%, white 100%)',
			})}
		>
			<Container size="xs" sx={{ width: 480, paddingBottom: 16 }}>
				<Title
					align="center"
					sx={theme => ({
						fontFamily: `Greycliff CF, ${theme.fontFamily}`,
						fontWeight: 900,
					})}
				>
					Mantine Admin
				</Title>
				<Text color="dimmed" size="sm" align="center" mt={5}>
					Don&apos;t have an account?{' '}
					<Anchor size="sm" href="/register">
						Sign Up
					</Anchor>
				</Text>
				{children}
			</Container>
		</Center>
	);
}
