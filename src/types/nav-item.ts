export interface NavItem {
	label: string;
	icon: any;
	link?: string;
	initiallyOpened?: boolean;
	links?: { label: string; link: string }[];
}
