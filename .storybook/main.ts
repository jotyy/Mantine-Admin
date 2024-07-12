import type { StorybookConfig } from "@storybook/nextjs";
const config: StorybookConfig = {
  stories: ["../src/**/*.(stories|story).@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "storybook-dark-mode",
    "@storybook/addon-styling",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
};
export default config;
