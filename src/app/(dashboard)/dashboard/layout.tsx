'use client';

import { AdminHeader } from '@/components/Headers/AdminHeader';
import { Navbar } from '@/components/Navbar/Navbar';
import { navLinks } from '@/config';
import { AppShell, Burger, Container, Footer, MediaQuery, Text } from '@mantine/core';
import { useState } from 'react';

interface Props {
	children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
	const [opened, setOpened] = useState(false);

	return (
		<AppShell
			layout="alt"
			sx={theme => ({
				main: {
					backgroundColor:
						theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[1],
				},
			})}
			navbar={<Navbar data={navLinks} hidden={!opened} />}
			navbarOffsetBreakpoint="sm"
			header={
				<AdminHeader
					burger={
						<MediaQuery largerThan="sm" styles={{ display: 'none' }}>
							<Burger
								opened={opened}
								onClick={() => setOpened(o => !o)}
								size="sm"
								mr="xl"
							/>
						</MediaQuery>
					}
				/>
			}
			footer={
				<Footer height={50} p="md">
					<Text w="full" size="sm" align="center" color="gray">
						CopyRight © 2023 Jotyy
					</Text>
				</Footer>
			}
		>
			<Container fluid>{children}</Container>
		</AppShell>
	);
}
