import { StorybookConfig } from "storybook-framework-qwik";

const config: StorybookConfig = {
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-storysource",
  ],
  framework: {
    name: "storybook-framework-qwik",
  },
  core: {
    renderer: "storybook-framework-qwik",
  },
  stories: [
    // ...rootMain.stories,
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  docs: {
    autodocs: "tag",
    defaultName: "Overview",
  },

  viteFinal: async (config: any) => {
    return config;
  },
};

export default config;
