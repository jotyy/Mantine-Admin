'use client';

import { Button, Container, Group, Text, Title, createStyles, rem } from '@mantine/core';
import { IconArrowRight, IconStar } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

const useStyles = createStyles(theme => ({
	root: {
		paddingTop: `calc(${theme.spacing.xl} * 3)`,
		paddingBottom: `calc(${theme.spacing.xl} * 3)`,
	},

	inner: {
		display: 'flex',
		justifyContent: 'space-between',

		[theme.fn.smallerThan('md')]: {
			flexDirection: 'column',
		},
	},

	image: {
		[theme.fn.smallerThan('md')]: {
			display: 'none',
		},
	},

	content: {
		paddingTop: `calc(${theme.spacing.xl} * 2)`,
		paddingBottom: `calc(${theme.spacing.xl} * 2)`,
		marginRight: `calc(${theme.spacing.xl} * 3)`,

		[theme.fn.smallerThan('md')]: {
			marginRight: 0,
		},
	},

	title: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontWeight: 900,
		lineHeight: 1.05,
		fontSize: rem(64),

		[theme.fn.smallerThan('md')]: {
			maxWidth: '100%',
			fontSize: rem(34),
			lineHeight: 1.15,
		},
	},

	description: {
		opacity: 0.75,
		maxWidth: rem(500),

		[theme.fn.smallerThan('md')]: {
			maxWidth: '100%',
		},
	},

	control: {
		paddingLeft: rem(40),
		paddingRight: rem(40),
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontSize: rem(22),

		[theme.fn.smallerThan('md')]: {
			width: '100%',
		},
	},
}));

export function HeroSection() {
	const { classes } = useStyles();
	const router = useRouter();

	return (
		<div className={classes.root}>
			<Container pt="sm" size="lg">
				<div className={classes.inner}>
					<div className={classes.content}>
						<Title className={classes.title}>
							A{' '}
							<Text
								component="span"
								inherit
								variant="gradient"
								gradient={{ from: 'brand', to: 'cyan' }}
							>
								Next.js 13
							</Text>{' '}
							Admin template build with{' '}
							<Text
								component="span"
								inherit
								variant="gradient"
								gradient={{ from: 'brand', to: 'cyan' }}
							>
								Mantine UI
							</Text>
						</Title>

						<Text className={classes.description} mt={30}>
							Build fully functional dashboard web applications with ease – Mantine-Admin
							includes all components and hooks to cover you in any situation
						</Text>

						<Group mt={40}>
							<Button
								variant="gradient"
								gradient={{ from: 'brand', to: 'cyan' }}
								size="lg"
								className={classes.control}
								onClick={() => {
									router.push('/auth/login');
								}}
								rightIcon={<IconArrowRight />}
							>
								Get started
							</Button>
							<Button
								variant="outline"
								size="lg"
								className={classes.control}
								onClick={() => {
									// open github
									window.open('https://github.com/jotyy/mantine-admin');
								}}
								rightIcon={<IconStar />}
							>
								Give a Star
							</Button>
						</Group>
					</div>
				</div>
			</Container>
		</div>
	);
}
