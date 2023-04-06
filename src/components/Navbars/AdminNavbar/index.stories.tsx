import type { Meta, StoryObj } from '@storybook/react';
import { AdminNavbar } from '.';
import { mockNested, mockSimple } from './mock';

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

export const Simple: Story = {
	render: () => <AdminNavbar data={mockSimple} />,
};

export const Nested: Story = {
	render: () => <AdminNavbar data={mockNested} />,
};
