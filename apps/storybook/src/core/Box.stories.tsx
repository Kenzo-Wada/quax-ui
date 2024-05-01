import type { Meta, StoryObj } from "storybook-framework-qwik";
import { Box } from "@quax-ui/core";
import { QuaxBoxProps } from "@quax-ui/core";

const meta: Meta<QuaxBoxProps> = {
  component: Box,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
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
    bg: {
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

type Story = StoryObj<QuaxBoxProps>;

export default meta;

export const Primary: Story = {
  args: {
    color: "white",
    bg: "blue",
    m: "lg",
    p: "md",
    w: "980px",
    h: "980px",
  },
  render: (props) => (
    <Box {...props}>
      <h1>Box Content</h1>
    </Box>
  ),
};
