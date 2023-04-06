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
	{ label: 'Dashboard', icon: IconDashboard, link: '/admin/dashboard' },
	{
		label: 'Forms',
		icon: IconForms,
		link: '/admin/form',
		links: [
			{ label: 'Common', link: '/admin/form/common' },
			{ label: 'Upload', link: '/admin/form/upload' },
		],
	},
	{
		label: 'Tables',
		icon: IconTable,
		link: '/admin/table',
		links: [
			{ label: 'Simple', link: '/admin/table/simple' },
			{ label: 'Pagination', link: '/admin/table/pagination' },
		],
	},
	{ label: 'Charts', icon: IconChartArcs, link: '/admin/chart' },
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
