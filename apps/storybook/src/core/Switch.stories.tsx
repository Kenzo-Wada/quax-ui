import type { Meta, StoryObj } from "storybook-framework-qwik";
import { Switch } from "@quax-ui/core";
import { QuaxSwitchProps } from "@quax-ui/core";

const meta: Meta<QuaxSwitchProps> = {
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "radio",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    radius: {
      control: "radio",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
  },
};

type Story = StoryObj<QuaxSwitchProps>;

export default meta;

export const Primary: Story = {
  render: (props) => <Switch {...props} label="Switch" />,
};
