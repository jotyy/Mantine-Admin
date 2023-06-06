import type { Meta, StoryObj } from '@storybook/react';
import { AdminHeader } from './AdminHeader';

const meta: Meta<typeof AdminHeader> = {
	title: 'Components/AdminHeader',
	component: AdminHeader,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
	tags: ['autodocs'],
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
		layout: 'fullscreen',
	},
};

export default meta;
type Story = StoryObj<typeof AdminHeader>;

export const Default: Story = {
	render: () => <AdminHeader />,
};
