import { Parameters } from "storybook-framework-qwik";

export const parameters: Parameters = {
  a11y: {
    config: {},
    options: {
      checks: { "color-contrast": { options: { noScroll: true } } },
      restoreScroll: true,
    },
  },
  options: {
    showRoots: true,
  },
  parameters: {
    docs: {
      toc: true,
    },
  },
  docs: {
    iframeHeight: "200px",
  },
};
