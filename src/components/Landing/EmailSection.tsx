'use client';

import { Button, Image, Text, TextInput, Title, createStyles } from '@mantine/core';

const useStyles = createStyles(theme => ({
	wrapper: {
		maxWidth: 1200,
		margin: 'auto',
		marginTop: `calc(${theme.spacing.xl} * 4)`,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around',
		padding: `calc(${theme.spacing.xl} * 2) 0`,
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,

		[theme.fn.smallerThan('sm')]: {
			flexDirection: 'column-reverse',
			padding: theme.spacing.xl,
		},
	},

	image: {
		maxWidth: '30%',

		[theme.fn.smallerThan('sm')]: {
			maxWidth: '100%',
		},
	},

	body: {
		maxWidth: '50%',
		paddingRight: `calc(${theme.spacing.xl} * 4)`,

		[theme.fn.smallerThan('sm')]: {
			maxWidth: '90%',
			paddingRight: 0,
			marginTop: theme.spacing.xl,
		},
	},

	title: {
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		lineHeight: 1,
		marginBottom: theme.spacing.md,
	},

	controls: {
		display: 'flex',
		marginTop: theme.spacing.xl,
	},

	inputWrapper: {
		width: '100%',
		flex: '1',
	},

	input: {
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0,
		borderRight: 0,
	},

	control: {
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0,
	},
}));

export function EmailSection() {
	const { classes } = useStyles();
	return (
		<div className={classes.wrapper}>
			<div className={classes.body}>
				<Title order={4} className={classes.title}>
					Wait a minute...
				</Title>
				<Text fw={500} fz="lg" mb={5}>
					Subscribe to our newsletter!
				</Text>
				<Text fz="sm" c="dimmed">
					You will never miss important product updates, latest news and community QA
					sessions. Our newsletter is once a week, every Sunday.
				</Text>

				<div className={classes.controls}>
					<TextInput
						placeholder="Your email"
						classNames={{ input: classes.input, root: classes.inputWrapper }}
					/>
					<Button className={classes.control}>Subscribe</Button>
				</div>
			</div>
			<Image src="/static/images/img-email.svg" className={classes.image} alt="email" />
		</div>
	);
}
