import { NavItem } from '@/types/nav-item';
import { Stack } from '@mantine/core';
import { SidebarItem } from './SidebarItem';

interface Props {
	links: NavItem[];
}

export function Sidebar({ links }: Props) {
	return (
		<Stack w="100%" spacing="lg">
			{links.map(link => (
				<SidebarItem key={link.label} {...link} />
			))}
		</Stack>
	);
}
