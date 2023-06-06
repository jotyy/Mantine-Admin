import { NavItem } from '@/types/nav-item';
import {
	IconChartArcs,
	IconDashboard,
	IconForms,
	IconSettings2,
	IconTable,
} from '@tabler/icons-react';

export const routes: NavItem[] = [
	{ label: 'Dashboard', icon: IconDashboard, link: '/dashboard' },
	{
		label: 'Forms',
		icon: IconForms,
		link: '/dashboard/form',
	},
	{
		label: 'Tables',
		icon: IconTable,
		link: '/dashboard/table',
	},
	{ label: 'Charts', icon: IconChartArcs, link: '/dashboard/chart' },
	{ label: 'Settings', icon: IconSettings2, link: '/dashboard/settings' },
];
