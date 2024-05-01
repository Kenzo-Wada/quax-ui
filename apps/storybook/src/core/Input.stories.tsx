import type { Meta, StoryObj } from "storybook-framework-qwik";
import { Input } from "@quax-ui/core";
import { QuaxInputProps } from "@quax-ui/core";

const meta: Meta<QuaxInputProps> = {
  component: Input,
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

type Story = StoryObj<QuaxInputProps>;

export default meta;

export const Primary: Story = {
  args: {
    size: "md",
    radius: "md",
    placeholder: "placeholder",
  },
  render: (props) => <Input {...props} />,
};
