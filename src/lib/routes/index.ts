import { NavItem } from '@/types/nav-item';
import {
	IconDashboard,
	IconForms,
	IconTable,
	IconChartArcs,
	IconLock,
	IconSettings2,
} from '@tabler/icons-react';

export const routes: NavItem[] = [
	{ label: 'Dashboard', icon: IconDashboard, link: '/dashboard' },
	{
		label: 'Forms',
		icon: IconForms,
		link: '/form',
	},
	{
		label: 'Tables',
		icon: IconTable,
		link: '/table',
	},
	{ label: 'Charts', icon: IconChartArcs, link: '/chart' },
	{
		label: 'Authenication',
		icon: IconLock,
	},
	{ label: 'Settings', icon: IconSettings2, link: '/settings' },
];
