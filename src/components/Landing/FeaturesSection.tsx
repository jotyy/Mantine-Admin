'use client';

import {
	Container,
	SimpleGrid,
	Text,
	ThemeIcon,
	Title,
	createStyles,
	rem,
} from '@mantine/core';
import {
	IconBrandMantine,
	IconBrandNextjs,
	IconBrandOauth,
	IconBrandPlanetscale,
	IconBrandReact,
} from '@tabler/icons-react';

export const MOCKDATA = [
	{
		icon: IconBrandNextjs,
		title: 'Next.js',
		description: 'App dir, Routing, Layouts, Loading UI and API routes.',
	},
	{
		icon: IconBrandReact,
		title: 'React 18',
		description: 'Server and Client Components. Use hook.',
	},
	{
		icon: IconBrandPlanetscale,
		title: 'Database',
		description: 'ORM using Prisma and deployed on PlanetScale.',
	},
	{
		icon: IconBrandMantine,
		title: 'Components',
		description: 'UI components built using Mantine UI.',
	},
	{
		icon: IconBrandOauth,
		title: 'Authentication',
		description: 'Authentication using NextAuth.js and middlewares.',
	},
];

interface FeatureProps {
	icon: React.FC<any>;
	title: React.ReactNode;
	description: React.ReactNode;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
	return (
		<div>
			<ThemeIcon variant="light" size={60} radius={60}>
				<Icon size="2rem" stroke={1.5} />
			</ThemeIcon>
			<Text mt="sm" mb={7} fw="600">
				{title}
			</Text>
			<Text size="sm" color="dimmed" sx={{ lineHeight: 1.6 }}>
				{description}
			</Text>
		</div>
	);
}

const useStyles = createStyles(theme => ({
	wrapper: {
		paddingTop: `calc(${theme.spacing.xl} * 4)`,
		paddingBottom: `calc(${theme.spacing.xl} * 4)`,
	},

	title: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontWeight: 900,
		marginBottom: theme.spacing.md,
		textAlign: 'center',

		[theme.fn.smallerThan('sm')]: {
			fontSize: rem(28),
			textAlign: 'left',
		},
	},

	description: {
		textAlign: 'center',

		[theme.fn.smallerThan('sm')]: {
			textAlign: 'left',
		},
	},
}));

interface FeaturesGridProps {
	title: React.ReactNode;
	description: React.ReactNode;
	data?: FeatureProps[];
}

export function FeaturesSection({
	title,
	description,
	data = MOCKDATA,
}: FeaturesGridProps) {
	const { classes } = useStyles();
	const features = data.map((feature, index) => <Feature {...feature} key={index} />);

	return (
		<Container className={classes.wrapper}>
			<Title className={classes.title}>{title}</Title>

			<Container size={560} p={0}>
				<Text size="sm" className={classes.description}>
					{description}
				</Text>
			</Container>

			<SimpleGrid
				mt={60}
				cols={3}
				spacing={50}
				breakpoints={[
					{ maxWidth: 980, cols: 2, spacing: 'xl' },
					{ maxWidth: 755, cols: 1, spacing: 'xl' },
				]}
			>
				{features}
			</SimpleGrid>
		</Container>
	);
}
