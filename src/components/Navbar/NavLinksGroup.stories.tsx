import type { Meta, StoryObj } from "@storybook/react";
import { IconCalendarStats } from "@tabler/icons-react";
import { NavLinksGroup } from "./NavLinksGroup";

const meta: Meta<typeof NavLinksGroup> = {
  title: "Components/NavLinksGroup",
  component: NavLinksGroup,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof NavLinksGroup>;

const hasLinks = {
  label: "Releases",
  icon: IconCalendarStats,
  links: [
    { label: "Upcoming releases", link: "/" },
    { label: "Previous releases", link: "/" },
    { label: "Releases schedule", link: "/" },
  ],
};

export const HasLinks: Story = {
  render: () => <NavLinksGroup {...hasLinks} />,
};

const noLinks = {
  label: "Releases",
  icon: IconCalendarStats,
  link: "/",
};

export const NoLinks: Story = {
  render: () => <NavLinksGroup {...noLinks} />,
};
