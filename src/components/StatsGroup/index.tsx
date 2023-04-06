import { RingProgress, Text, SimpleGrid, Paper, Center, Group } from '@mantine/core';
import {
	IconArrowUpRight,
	IconArrowDownRight,
	TablerIconsProps,
} from '@tabler/icons-react';

interface StatsRingProps {
	data: {
		label: string;
		stats: string;
		progress: number;
		color: string;
		icon: (props: TablerIconsProps) => JSX.Element;
	}[];
}

export function StatsGroup({ data }: StatsRingProps) {
	const stats = data.map(stat => {
		const Icon = stat.icon;
		return (
			<Paper withBorder radius="md" p="xs" key={stat.label}>
				<Group>
					<RingProgress
						size={80}
						roundCaps
						thickness={8}
						sections={[{ value: stat.progress, color: stat.color }]}
						label={
							<Center>
								<Icon size="1.4rem" stroke={1.5} />
							</Center>
						}
					/>

					<div>
						<Text color="dimmed" size="xs" transform="uppercase" weight={700}>
							{stat.label}
						</Text>
						<Text weight={700} size="xl">
							{stat.stats}
						</Text>
					</div>
				</Group>
			</Paper>
		);
	});

	return (
		<SimpleGrid cols={4} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
			{stats}
		</SimpleGrid>
	);
}
