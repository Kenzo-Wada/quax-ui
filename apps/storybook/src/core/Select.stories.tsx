import type { Meta, StoryObj } from "storybook-framework-qwik";
import { Select } from "@quax-ui/core";
import { QuaxSelectProps } from "@quax-ui/core";

const meta: Meta<QuaxSelectProps> = {
  component: Select,
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

type Story = StoryObj<QuaxSelectProps>;

export default meta;

export const Primary: Story = {
  args: {
    size: "md",
    radius: "md",
    placeholder: "placeholder",
  },
  render: (props) => (
    <Select {...props}>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </Select>
  ),
};
