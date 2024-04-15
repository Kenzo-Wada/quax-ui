import { Slot, component$, useStyles$ } from "@builder.io/qwik";
import styles from "./Flex.css?inline";
import { QuaxFlexProps } from "./Flex.types";
import { Box } from "../Box";

export const Flex = component$<QuaxFlexProps>((props) => {
  useStyles$(styles);

  const gapClass = props.gap ? `gap-${props.gap}` : undefined;
  const colGapClass = props.colGap ? `column-gap-${props.colGap}` : undefined;
  const rowGapClass = props.rowGap ? `row-gap-${props.rowGap}` : undefined;
  const directionClass = props.direction && `direction-${props.direction}`;
  const wrapClass = props.wrap && `wrap-${props.wrap}`;
  const alignClass = props.align && `align-${props.align}`;
  const justifyClass = props.justify && `justify-${props.justify}`;

  return (
    <Box
      {...props}
      class={[
        props.class,
        "flex",
        gapClass,
        colGapClass,
        rowGapClass,
        directionClass,
        wrapClass,
        alignClass,
        justifyClass,
      ]}
    >
      <Slot />
    </Box>
  );
});
