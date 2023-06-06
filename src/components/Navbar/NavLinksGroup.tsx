'use client';

import {
	Box,
	Collapse,
	Group,
	Text,
	ThemeIcon,
	UnstyledButton,
	createStyles,
	rem,
} from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

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
	const router = useRouter();

	link && router.prefetch(link);

	const hasLinks = Array.isArray(links);
	const [opened, setOpened] = useState(initiallyOpened || false);
	const ChevronIcon = theme.dir === 'ltr' ? IconChevronRight : IconChevronLeft;
	const items = (hasLinks ? links : []).map(link => {
		router.prefetch(link.link);
		return (
			<Text<'a'>
				component="a"
				className={classes.link}
				href={link.link}
				key={link.label}
				onClick={event => event.preventDefault()}
			>
				{link.label}
			</Text>
		);
	});

	return (
		<>
			<UnstyledButton
				onClick={() => {
					if (hasLinks) {
						setOpened(o => !o);
						return;
					}
					router.push(link || '/');
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
			{hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
		</>
	);
}
