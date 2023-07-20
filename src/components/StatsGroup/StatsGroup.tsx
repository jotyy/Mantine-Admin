import { Card, Group, SimpleGrid, Text, useMantineTheme } from '@mantine/core';
import { IconArrowDownRight, IconArrowUpRight } from '@tabler/icons-react';

interface StatsGroupProps {
	data: { title: string; value: string; diff: number }[];
}

export function StatsGroup({ data }: StatsGroupProps) {
	const theme = useMantineTheme();
	const stats = data.map(stat => {
		const DiffIcon = stat.diff > 0 ? IconArrowUpRight : IconArrowDownRight;

		return (
			<Card key={stat.title} p="md" radius="md">
				<Group position="apart">
					<div>
						<Text c="dimmed" tt="uppercase" fw={700} fz="xs">
							{stat.title}
						</Text>
						<Text fw={700} fz="xl">
							{stat.value}
						</Text>
					</div>
				</Group>
				<Text c="dimmed" fz="sm" mt="sm">
					<Text component="span" c={stat.diff > 0 ? 'green.4' : 'red.4'} fw={700}>
						{stat.diff}%
					</Text>{' '}
					<DiffIcon
						size="1rem"
						color={stat.diff > 0 ? theme.colors.green[4] : theme.colors.red[4]}
					/>
				</Text>
			</Card>
		);
	});

	return (
		<SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
			{stats}
		</SimpleGrid>
	);
}
