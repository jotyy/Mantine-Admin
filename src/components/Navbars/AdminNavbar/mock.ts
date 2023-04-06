import { NavItem } from '@/types/nav-item';
import {
	IconChartArcs,
	IconDashboard,
	IconForms,
	IconIcons,
	IconLock,
	IconSettings2,
	IconTable,
} from '@tabler/icons-react';

export const mockNested: NavItem[] = [
	{ label: 'Dashboard', icon: IconDashboard, link: '/admin/dashboard' },
	{
		label: 'Forms',
		icon: IconForms,
		initiallyOpened: true,
		links: [
			{ label: 'Common', link: '/admin/form/common' },
			{ label: 'Upload', link: '/admin/form/upload' },
		],
	},
	{
		label: 'Tables',
		icon: IconTable,
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

export const mockSimple: NavItem[] = [
	{ label: 'Dashboard', icon: IconDashboard },
	{ label: 'Charts', icon: IconChartArcs },
	{ label: 'Icons', icon: IconIcons },
	{ label: 'Settings', icon: IconSettings2 },
];
