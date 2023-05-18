import { routes } from '@/lib/routes';
import type { Meta, StoryObj } from '@storybook/react';
import { AdminNavbar } from '.';

const meta: Meta<typeof AdminNavbar> = {
	title: 'Components/AdminNavbar',
	component: AdminNavbar,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
	tags: ['autodocs'],
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
		layout: 'fullscreen',
	},
};

export default meta;
type Story = StoryObj<typeof AdminNavbar>;

export const Default: Story = {
	render: () => <AdminNavbar data={routes} />,
};
