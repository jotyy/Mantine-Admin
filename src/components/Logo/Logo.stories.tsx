import { rem } from "@mantine/core";
import type { Meta, StoryObj } from "@storybook/react";
import { Logo } from "./Logo";

const meta: Meta<typeof Logo> = {
  title: "Components/Logo",
  component: Logo,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  render: () => <Logo width={rem(50)} />,
};
