import { JSXNode } from "@builder.io/qwik";
import { Decorator, Parameters } from "storybook-framework-qwik";
import { QuaxProvider } from "@quax-ui/core";

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

export const decorators: Decorator[] = [
  (Story) => (<QuaxProvider>{Story()}</QuaxProvider>) as JSXNode,
];
