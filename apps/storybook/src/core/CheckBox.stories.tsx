import type { Meta, StoryObj } from "storybook-framework-qwik";
import { Checkbox } from "@quax-ui/core";
import { QuaxCheckboxProps } from "@quax-ui/core";
import { QuaxProvider } from "@quax-ui/core";

const meta: Meta<QuaxCheckboxProps> = {
  component: Checkbox,
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

type Story = StoryObj<QuaxCheckboxProps>;

export default meta;

export const Primary: Story = {
  render: (props) => (
    <QuaxProvider theme={{ primary: { color: "red" } }}>
      <Checkbox {...props} label="Checkbox" />
    </QuaxProvider>
  ),
};
