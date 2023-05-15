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
	{ label: 'Dashboard', icon: IconDashboard, link: '/dashboard' },
	{
		label: 'Forms',
		icon: IconForms,
		initiallyOpened: true,
		links: [
			{ label: 'Common', link: '/form/common' },
			{ label: 'Upload', link: '/form/upload' },
		],
	},
	{
		label: 'Tables',
		icon: IconTable,
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

export const mockSimple: NavItem[] = [
	{ label: 'Dashboard', icon: IconDashboard },
	{ label: 'Charts', icon: IconChartArcs },
	{ label: 'Icons', icon: IconIcons },
	{ label: 'Settings', icon: IconSettings2 },
];
