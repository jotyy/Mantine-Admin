import type { Meta, StoryObj } from '@storybook/react';
import { StatsGroup } from '.';
import { mockData } from './mock';

const meta: Meta<typeof StatsGroup> = {
	title: 'Components/StatsGroup',
	component: StatsGroup,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
	tags: ['autodocs'],
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
		layout: 'centered',
	},
};

export default meta;
type Story = StoryObj<typeof StatsGroup>;

export const Default: Story = {
	render: () => <StatsGroup data={mockData} />,
};
