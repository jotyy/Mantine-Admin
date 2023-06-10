'use client';

import { Flex, Grid } from '@mantine/core';
import { StatsGroup } from '../StatsGroup';
import { mockData } from '../StatsGroup/mock';
import { BalanceCard } from './BalanceCard';
import { OverviewCard } from './OverviewCard';
import { ProfileCard } from './ProfileCard';
import { WelcomeCard } from './WelcomeCard';

export function DashboardContent() {
	return (
		<Grid>
			<Grid.Col span={4}>
				<ProfileCard />
			</Grid.Col>
			<Grid.Col span={8}>
				<Flex direction="column" h="100%" justify="space-between">
					<WelcomeCard />
					<StatsGroup data={mockData} />
				</Flex>
			</Grid.Col>
			<Grid.Col span={8}>
				<BalanceCard />
			</Grid.Col>
			<Grid.Col span={4}>
				<OverviewCard />
			</Grid.Col>
		</Grid>
	);
}
