import type { Meta, StoryObj } from '@storybook/react';
import { AdminLayout } from '.';
import { rem } from '@mantine/core';

const meta: Meta<typeof AdminLayout> = {
	title: 'Layout/admin',
	component: AdminLayout,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
	tags: ['autodocs'],
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
		layout: 'fullscreen',
	},
};

export default meta;
type Story = StoryObj<typeof AdminLayout>;

export const Default: Story = {
	render: () => <AdminLayout>Hello</AdminLayout>,
};
