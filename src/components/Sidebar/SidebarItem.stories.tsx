import type { Meta, StoryObj } from '@storybook/react';
import { SidebarItem } from './SidebarItem';
import { IconUser } from '@tabler/icons-react';

const meta: Meta<typeof SidebarItem> = {
	title: 'Components/SidebarItem',
	component: SidebarItem,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
	tags: ['autodocs'],
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
		layout: 'centered',
	},
};

export default meta;
type Story = StoryObj<typeof SidebarItem>;

export const Default: Story = {
	render: () => <SidebarItem icon={IconUser} label="用户中心" link="/user" />,
};

export const Active: Story = {
	render: () => <SidebarItem icon={IconUser} label="用户中心" link="/" />,
};
