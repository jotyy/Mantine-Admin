import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';
import { IconUser } from '@tabler/icons-react';
import { routes } from '@/lib/routes';

const meta: Meta<typeof Sidebar> = {
	title: 'Components/Sidebar',
	component: Sidebar,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
	tags: ['autodocs'],
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
		layout: 'centered',
	},
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
	render: () => <Sidebar links={routes} />,
};
