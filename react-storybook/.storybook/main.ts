import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  core: { builder: "@storybook/builder-vite" },
  framework: { name: "@storybook/nextjs", options: {} },
  stories: ["../**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: ["@storybook/addon-essentials"],
  viteFinal: async (config) => {
    config.define = { ...(config.define ?? {}), "process.env": {} };
    return config;
  },
};

export default config;
