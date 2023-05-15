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
		links: [
			{ label: 'Common', link: '/form/common' },
			{ label: 'Upload', link: '/form/upload' },
		],
	},
	{
		label: 'Tables',
		icon: IconTable,
		link: '/table',
		links: [
			{ label: 'Simple', link: '/table/simple' },
			{ label: 'Pagination', link: '/table/pagination' },
		],
	},
	{ label: 'Charts', icon: IconChartArcs, link: '/chart' },
	{
		label: 'Authenication',
		icon: IconLock,
		links: [
			{ label: 'Sign In', link: '/sign-in' },
			{ label: 'Sign Up', link: '/sign-up' },
		],
	},
	{ label: 'Settings', icon: IconSettings2, link: '/settings' },
];
