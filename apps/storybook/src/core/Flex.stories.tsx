import type { Meta, StoryObj } from "storybook-framework-qwik";
import { Center, Flex } from "@quax-ui/core";
import { QuaxFlexProps } from "@quax-ui/core";

const meta: Meta<QuaxFlexProps> = {
  component: Flex,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    align: {
      control: "radio",
      options: ["flex-start", "center", "flex-end"],
    },
    justify: {
      control: "radio",
      options: ["flex-start", "center", "flex-end"],
    },
    direction: {
      control: "radio",
      options: ["row", "column", "row-reverse", "column-reverse"],
    },
    wrap: {
      control: "radio",
      options: ["wrap", "nowrap", "wrap-reverse"],
    },
    gap: {
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

type Story = StoryObj<QuaxFlexProps>;

export default meta;

export const Primary: Story = {
  args: {
    color: "white",
    bg: "gray",
    gap: "md",
    w: "980px",
    h: "360px",
  },
  render: (props) => (
    <Flex {...props}>
      <Center bg={"red"} color={"white"} w={"120px"}>
        <h1>Box1</h1>
      </Center>
      <Center bg={"green"} color={"white"} w={"360px"}>
        <h1>Box2</h1>
      </Center>
      <Center bg={"blue"} color={"white"} w={"240px"}>
        <h1>Box3</h1>
      </Center>
    </Flex>
  ),
};
