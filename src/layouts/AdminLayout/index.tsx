import { AdminHeader } from '@/components/Headers/AdminHeader';
import { AdminNavbar } from '@/components/Navbars/AdminNavbar';
import { routes } from '@/lib/routes';
import { AppShell, Burger, Container, Footer, MediaQuery, Text } from '@mantine/core';
import { useState } from 'react';

interface Props {
	children: React.ReactNode;
}

export function AdminLayout({ children }: Props) {
	const [opened, setOpened] = useState(false);

	return (
		<AppShell
			layout="alt"
			navbar={<AdminNavbar data={routes} hidden={!opened} />}
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
						CopyRight © 2023 晶格实验室
					</Text>
				</Footer>
			}
		>
			<Container fluid>{children}</Container>
		</AppShell>
	);
}
