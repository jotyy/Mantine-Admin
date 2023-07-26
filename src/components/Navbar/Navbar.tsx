import {
	Group,
	Navbar as MantineNavbar,
	ScrollArea,
	createStyles,
	rem,
} from '@mantine/core';

import { UserButton } from '@/components/UserButton/UserButton';
import { NavItem } from '@/types/nav-item';
import { NavLinksGroup } from './NavLinksGroup';

const useStyles = createStyles(theme => ({
	links: {
		marginLeft: `calc(${theme.spacing.md} * -1)`,
		marginRight: `calc(${theme.spacing.md} * -1)`,
	},

	linksInner: {
		paddingBottom: theme.spacing.xl,
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

export function Navbar({ data, hidden }: Props) {
	const { classes } = useStyles();
	const links = data.map(item => <NavLinksGroup key={item.label} {...item} />);

	return (
		<MantineNavbar
			hidden={hidden}
			hiddenBreakpoint="md"
			height="100vh"
			width={{ base: '100%', sm: 260, md: 260, lg: 300, xl: 320 }}
			p="md"
			fixed
			withBorder={false}
		>
			<MantineNavbar.Section grow className={classes.links} component={ScrollArea}>
				<div className={classes.linksInner}>{links}</div>
			</MantineNavbar.Section>

			<MantineNavbar.Section className={classes.footer}>
				<UserButton
					image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
					name="Harriette"
					email="hspoon@outlook.com"
				/>
			</MantineNavbar.Section>
		</MantineNavbar>
	);
}
