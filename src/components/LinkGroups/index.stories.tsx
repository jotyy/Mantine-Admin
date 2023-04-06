import type { Meta, StoryObj } from '@storybook/react';
import { IconUser } from '@tabler/icons-react';
import { LinksGroup } from '.';

const meta: Meta<typeof LinksGroup> = {
	title: 'Components/LinksGroup',
	component: LinksGroup,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
	tags: ['autodocs'],
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
		layout: 'centered',
	},
};

export default meta;
type Story = StoryObj<typeof LinksGroup>;

export const Primary: Story = {
	render: () => <LinksGroup icon={IconUser} label="用户中心" />,
};
