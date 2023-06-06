'use client';

import dynamic from 'next/dynamic';
import { Props } from 'react-apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const series = [70, 60, 50];
const options: Props['options'] = {
	chart: {
		height: 350,
		type: 'radialBar',
	},

	plotOptions: {
		radialBar: {
			dataLabels: {
				name: {
					fontSize: '22px',
				},
				value: {
					fontSize: '16px',
				},
				total: {
					show: true,
					label: 'Total',
				},
			},
		},
	},

	stroke: {
		lineCap: 'round',
	},

	labels: ['Etherum', 'BTC', 'DOGE'],
};

export function BalanceChart() {
	return <Chart options={options} series={series} type="radialBar" height={300} />;
}
