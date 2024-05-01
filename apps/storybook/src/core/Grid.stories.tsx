import type { Meta, StoryObj } from "storybook-framework-qwik";
import { Grid, GridItem } from "@quax-ui/core";
import { QuaxGridProps } from "@quax-ui/core";

const meta: Meta<QuaxGridProps> = {
  component: Grid,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    gap: {
      control: "radio",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
  },
};

type Story = StoryObj<QuaxGridProps>;

export default meta;

export const Primary: Story = {
  args: {
    color: "white",
    bg: "gray",
    templateColumns: "repeat(5, 1fr)",
    templateRows: "repeat(2, 1fr)",
    gap: "md",
    w: "980px",
    h: "360px",
  },
  render: (props) => (
    <Grid {...props}>
      <GridItem colSpan={1} rowSpan={2} bg="blue" />
      <GridItem colSpan={2} bg="green" />
      <GridItem colSpan={2} bg="red" />
      <GridItem colSpan={4} bg="yellow" />
    </Grid>
  ),
};
