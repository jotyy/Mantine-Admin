import {
	Code,
	Group,
	Navbar,
	ScrollArea,
	createStyles,
	getStylesRef,
	rem,
} from '@mantine/core';
import { IconLogout, IconSwitchHorizontal } from '@tabler/icons-react';

import { LinksGroup } from '../../LinkGroups';
import { Logo } from '../../Logo';
import { NavItem } from '@/types/nav-item';

const useStyles = createStyles(theme => ({
	navbar: {
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
		paddingBottom: 0,
	},

	header: {
		padding: theme.spacing.md,
		paddingTop: 0,
		marginLeft: `calc(${theme.spacing.md} * -1)`,
		marginRight: `calc(${theme.spacing.md} * -1)`,
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
		borderBottom: `${rem(1)} solid ${
			theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
		}`,
	},

	links: {
		marginLeft: `calc(${theme.spacing.md} * -1)`,
		marginRight: `calc(${theme.spacing.md} * -1)`,
	},

	linksInner: {
		paddingTop: theme.spacing.xl,
		paddingBottom: theme.spacing.xl,
	},

	link: {
		...theme.fn.focusStyles(),
		display: 'flex',
		alignItems: 'center',
		textDecoration: 'none',
		fontSize: theme.fontSizes.sm,
		color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
		padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
		borderRadius: theme.radius.sm,
		fontWeight: 500,

		'&:hover': {
			backgroundColor:
				theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
			color: theme.colorScheme === 'dark' ? theme.white : theme.black,

			[`& .${getStylesRef('icon')}`]: {
				color: theme.colorScheme === 'dark' ? theme.white : theme.black,
			},
		},
	},

	linkIcon: {
		ref: getStylesRef('icon'),
		color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
		marginRight: theme.spacing.sm,
	},

	linkActive: {
		'&, &:hover': {
			backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
				.background,
			color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
			[`& .${getStylesRef('icon')}`]: {
				color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
			},
		},
	},

	footer: {
		borderTop: `${rem(1)} solid ${
			theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
		}`,
		paddingTop: theme.spacing.md,
	},
}));

interface Props {
	data: NavItem[];
	hidden?: boolean;
}

export function AdminNavbar({ data, hidden }: Props) {
	const { classes } = useStyles();
	const links = data.map(item => <LinksGroup {...item} key={item.label} />);

	return (
		<Navbar
			hidden={hidden}
			hiddenBreakpoint="sm"
			height="100vh"
			width={{ sm: 300 }}
			p="md"
			className={classes.navbar}
		>
			<Navbar.Section className={classes.header}>
				<Group position="apart" h={rem(40)}>
					<Logo width={rem(30)} />
					<Code sx={{ fontWeight: 700 }}>v1.0.0</Code>
				</Group>
			</Navbar.Section>

			<Navbar.Section grow className={classes.links} component={ScrollArea}>
				<div className={classes.linksInner}>{links}</div>
			</Navbar.Section>

			<Navbar.Section className={classes.footer}>
				<a href="#" className={classes.link} onClick={event => event.preventDefault()}>
					<IconLogout className={classes.linkIcon} />
					<span>Logout</span>
				</a>
			</Navbar.Section>
		</Navbar>
	);
}
