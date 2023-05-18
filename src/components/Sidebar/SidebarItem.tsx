import {
	Flex,
	NavLink,
	Text,
	ThemeIcon,
	UnstyledButton,
	createStyles,
} from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';

const useStyles = createStyles(theme => ({
	control: {
		fontWeight: 500,
		width: '100%',
		padding: `${theme.spacing.xs} ${theme.spacing.md}`,
		fontSize: theme.fontSizes.sm,
		borderRadius: theme.radius.md,
	},
	chevron: {
		transition: 'transform 200ms ease',
	},
}));

interface SidebarItemProps {
	icon: React.FC<any>;
	label: string;
	link?: string;
	links?: { label: string; link: string }[];
}

export function SidebarItem({ icon: Icon, label, link = '/' }: SidebarItemProps) {
	const router = useRouter();
	const { classes } = useStyles();
	const isActive = router.pathname === link;

	return (
		<>
			<NavLink
				component="a"
				href={link}
				active={isActive}
				label={label}
				childrenOffset={40}
				variant="light"
				icon={<Icon size="1.2rem" stroke={2} />}
				className={classes.control}
			/>
		</>
	);
}
