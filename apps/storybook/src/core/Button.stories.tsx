import type { Meta, StoryObj } from "storybook-framework-qwik";
import { Button } from "@quax-ui/core";
import { QuaxButtonProps } from "@quax-ui/core";
import { QuaxProvider } from "@quax-ui/core";

const meta: Meta<QuaxButtonProps> = {
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "radio",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    variant: {
      control: "radio",
      options: ["filled", "outlined", "ghost", "light"],
    },
    radius: {
      control: "radio",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    color: {
      control: "radio",
      options: [
        "blue",
        "green",
        "red",
        "yellow",
        "purple",
        "gray",
        "teal",
        "cyan",
        "pink",
        "orange",
        "indigo",
        "lime",
      ],
    },
  },
};

type Story = StoryObj<QuaxButtonProps>;

export default meta;

export const Primary: Story = {
  args: {
    size: "md",
    variant: "filled",
    radius: "md",
    children: "Button",
    color: "blue",
  },
  render: (props) => (
    <QuaxProvider>
      <Button {...props} />
    </QuaxProvider>
  ),
};
