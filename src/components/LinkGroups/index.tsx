import { NavLink, ThemeIcon, UnstyledButton, createStyles } from '@mantine/core';
import { useRouter } from 'next/router';

const useStyles = createStyles(theme => ({
	control: {
		fontWeight: 500,
		display: 'block',
		width: '100%',
		padding: `${theme.spacing.xs} ${theme.spacing.md}`,
		color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
		fontSize: theme.fontSizes.sm,

		'&:hover': {
			backgroundColor:
				theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
			color: theme.colorScheme === 'dark' ? theme.white : theme.black,
		},
	},

	link: {
		'&[data-active]': {
			backgroundColor: 'transparent !important',
		},
	},

	chevron: {
		transition: 'transform 200ms ease',
	},
}));

interface LinksGroupProps {
	icon: React.FC<any>;
	label: string;
	link?: string;
	links?: { label: string; link: string }[];
}

export function LinksGroup({ icon: Icon, label, link, links }: LinksGroupProps) {
	const router = useRouter();
	const { classes } = useStyles();
	const hasLinks = Array.isArray(links);
	const items = (hasLinks ? links : []).map(item => (
		<NavLink
			component="a"
			h={40}
			my={4}
			href={item.link}
			key={item.label}
			label={item.label}
			active={router.pathname === item.link}
			className={classes.link}
		/>
	));

	return (
		<>
			<UnstyledButton className={classes.control}>
				<NavLink
					component="a"
					label={label}
					href={link}
					icon={
						<ThemeIcon variant="light" size={30}>
							<Icon size="1.1rem" />
						</ThemeIcon>
					}
					childrenOffset={40}
					active={router.pathname === link}
					defaultOpened={router.pathname.includes(link)}
				>
					{hasLinks && items}
				</NavLink>
			</UnstyledButton>
		</>
	);
}
