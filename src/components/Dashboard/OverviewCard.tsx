import { Card, Title } from '@mantine/core';
import React from 'react';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title as ChartTitle,
	Tooltip,
	Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export const options = {
	responsive: true,
	smooth: true,
	plugins: {
		legend: {
			position: 'top' as const,
		},
	},
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
	labels,
	datasets: [
		{
			label: 'Dataset 1',
			data: labels.map(() => Math.random() * 1000),
			borderColor: 'rgb(255, 99, 132)',
			backgroundColor: 'rgba(255, 99, 132, 0.5)',
		},
		{
			label: 'Dataset 2',
			data: labels.map(() => Math.random() * 1000),
			borderColor: 'rgb(53, 162, 235)',
			backgroundColor: 'rgba(53, 162, 235, 0.5)',
		},
	],
};

export function OverviewCard() {
	return (
		<Card radius="md" w="100%" h="100%">
			<Title order={5}>Overview</Title>
			<Line options={options} data={data} />
		</Card>
	);
}
