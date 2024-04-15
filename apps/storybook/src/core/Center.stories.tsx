import type { Meta, StoryObj } from "storybook-framework-qwik";
import { Center } from "@quax-ui/core";
import { QuaxCenterProps } from "@quax-ui/core";
import { QuaxProvider } from "@quax-ui/core";

const meta: Meta<QuaxCenterProps> = {
  component: Center,
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

type Story = StoryObj<QuaxCenterProps>;

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
    <QuaxProvider>
      <Center {...props}>
        <h1>Center Content</h1>
      </Center>
    </QuaxProvider>
  ),
};
