'use client';

import {
	Card,
	Flex,
	Grid,
	List,
	Space,
	Stack,
	Text,
	ThemeIcon,
	Title,
} from '@mantine/core';
import { IconCircleCheck } from '@tabler/icons-react';
import { ProfileCard } from './ProfileCard';
import { StatsGroup } from '../StatsGroup';
import { mockData } from '../StatsGroup/mock';
import { WelcomeCard } from './WelcomeCard';
import { BalanceCard } from './BalanceCard';
import { OverviewCard } from './OverviewCard';

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
