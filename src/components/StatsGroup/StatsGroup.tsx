import {
	createStyles,
	Group,
	Paper,
	Text,
	ThemeIcon,
	SimpleGrid,
	useMantineTheme,
} from '@mantine/core';
import {
	IconArrowUpRight,
	IconArrowDownRight,
	IconBellDown,
	IconArrowDown,
	IconArrowUp,
} from '@tabler/icons-react';

const useStyles = createStyles(theme => ({
	label: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
	},
}));

interface StatsGroupProps {
	data: { title: string; value: string; diff: number }[];
}

export function StatsGroup({ data }: StatsGroupProps) {
	const { classes } = useStyles();
	const theme = useMantineTheme();
	const stats = data.map(stat => {
		const DiffIcon = stat.diff > 0 ? IconArrowUpRight : IconArrowDownRight;

		return (
			<Paper key={stat.title} p="md" radius="md">
				<Group position="apart">
					<div>
						<Text c="dimmed" tt="uppercase" fw={700} fz="xs" className={classes.label}>
							{stat.title}
						</Text>
						<Text fw={700} fz="xl">
							{stat.value}
						</Text>
					</div>
				</Group>
				<Text c="dimmed" fz="sm" mt="sm">
					<Text component="span" c={stat.diff > 0 ? 'teal' : 'red'} fw={700}>
						{stat.diff}%
					</Text>{' '}
					<DiffIcon
						size="1rem"
						color={stat.diff > 0 ? theme.colors.teal[6] : theme.colors.red[6]}
					/>
				</Text>
			</Paper>
		);
	});

	return (
		<SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
			{stats}
		</SimpleGrid>
	);
}
