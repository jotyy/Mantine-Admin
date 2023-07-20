'use client';

import {
	Box,
	Collapse,
	Group,
	ThemeIcon,
	UnstyledButton,
	createStyles,
	rem,
} from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const useStyles = createStyles(theme => ({
	control: {
		fontWeight: 500,
		display: 'block',
		width: '100%',
		padding: `${theme.spacing.xs} ${theme.spacing.md}`,
		color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
		fontSize: theme.fontSizes.sm,
		textDecoration: 'none',

		'&:hover': {
			backgroundColor:
				theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
			color: theme.colorScheme === 'dark' ? theme.white : theme.black,
		},
	},

	activeControl: {
		fontWeight: 700,
	},

	link: {
		fontWeight: 500,
		display: 'block',
		textDecoration: 'none',
		padding: `${theme.spacing.xs} ${theme.spacing.md}`,
		paddingLeft: rem(31),
		marginLeft: rem(30),
		fontSize: theme.fontSizes.sm,
		color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
		borderLeft: `${rem(1)} solid ${
			theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
		}`,

		'&:hover': {
			backgroundColor:
				theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
			color: theme.colorScheme === 'dark' ? theme.white : theme.black,
		},
	},

	activeLink: {
		backgroundColor:
			theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
		color: theme.colorScheme === 'dark' ? theme.colors.white : theme.colors.dark,
	},

	chevron: {
		transition: 'transform 200ms ease',
	},
}));

interface LinksGroupProps {
	icon: React.FC<any>;
	label: string;
	link?: string;
	initiallyOpened?: boolean;
	links?: { label: string; link: string }[];
}

export function NavLinksGroup({
	icon: Icon,
	label,
	link,
	initiallyOpened,
	links,
}: LinksGroupProps) {
	const { classes, theme } = useStyles();
	const pathname = usePathname();

	const hasLinks = Array.isArray(links);
	const [opened, setOpened] = useState(initiallyOpened || false);
	const ChevronIcon = theme.dir === 'ltr' ? IconChevronRight : IconChevronLeft;
	const items = (hasLinks ? links : []).map(link => {
		return (
			<Link
				href={link.link}
				key={link.label}
				className={`${classes.link} ${link.link === pathname && classes.activeLink}`}
			>
				{link.label}
			</Link>
		);
	});

	return (
		<>
			{link ? (
				<Link
					href={link}
					className={`${classes.control} ${link === pathname && classes.activeControl}`}
				>
					<Group position="apart" spacing={0}>
						<Box sx={{ display: 'flex', alignItems: 'center' }}>
							<ThemeIcon variant="light" size={30}>
								<Icon size="1.1rem" />
							</ThemeIcon>
							<Box ml="md">{label}</Box>
						</Box>
					</Group>
				</Link>
			) : (
				<UnstyledButton
					onClick={() => {
						if (hasLinks) {
							setOpened(o => !o);
							return;
						}
					}}
					className={classes.control}
				>
					<Group position="apart" spacing={0}>
						<Box sx={{ display: 'flex', alignItems: 'center' }}>
							<ThemeIcon variant="light" size={30}>
								<Icon size="1.1rem" />
							</ThemeIcon>
							<Box ml="md">{label}</Box>
						</Box>
						{hasLinks && (
							<ChevronIcon
								className={classes.chevron}
								size="1rem"
								stroke={1.5}
								style={{
									transform: opened
										? `rotate(${theme.dir === 'rtl' ? -90 : 90}deg)`
										: 'none',
								}}
							/>
						)}
					</Group>
				</UnstyledButton>
			)}
			{hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
		</>
	);
}
