'use client';

import { Flex, Grid } from '@mantine/core';
import { StatsGroup } from '../StatsGroup';
import { mockData } from '../StatsGroup/mock';
import { BalanceCard } from './BalanceCard';
import { OverviewCard } from './OverviewCard';
import { ProfileCard } from './ProfileCard';
import { WelcomeCard } from './WelcomeCard';
import { TransactionCard } from './TransactionCard';

export function DashboardContent() {
	return (
		<Grid>
			<Grid.Col sm={12} md={12} lg={4}>
				<ProfileCard />
			</Grid.Col>
			<Grid.Col sm={12} md={12} lg={8}>
				<Flex direction="column" h="100%" justify="space-between" gap="md">
					<WelcomeCard />
					<StatsGroup data={mockData} />
				</Flex>
			</Grid.Col>
			<Grid.Col sm={12} md={12} lg={8}>
				<BalanceCard />
			</Grid.Col>
			<Grid.Col sm={12} md={12} lg={4}>
				<OverviewCard />
			</Grid.Col>
			<Grid.Col sm={12}>
				<TransactionCard />
			</Grid.Col>
		</Grid>
	);
}
