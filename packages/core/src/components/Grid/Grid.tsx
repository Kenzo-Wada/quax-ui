import { component$, CSSProperties, Slot, useStyles$ } from "@builder.io/qwik";
import { Box } from "~/components";
import styles from "./Grid.css?inline";
import type { QuaxGridProps } from "./Grid.types";

export const Grid = component$<QuaxGridProps>(
  ({
    gap,
    colGap,
    rowGap,
    column,
    row,
    templateAreas,
    templateRows,
    templateColumns,
    autoFlow,
    autoRows,
    ...props
  }) => {
    useStyles$(styles);

    const gapClass = `gap-${gap ?? "md"}`;
    const colGapClass = `column-gap-${colGap ?? "md"}`;
    const rowGapClass = `row-gap-${rowGap ?? "md"}`;

    const customStyles = {
      gridTemplateColumns: templateColumns,
      gridTemplateRows: templateRows,
      gridTemplateAreas: templateAreas,
      gridAutoFlow: autoFlow,
      gridAutoRows: autoRows,
      gridColumn: column,
      gridRow: row,
    };

    const combinedStyles = {
      ...(props.style as CSSProperties),
      ...customStyles,
    };

    return (
      <Box
        style={combinedStyles}
        class={[props.class, gapClass, colGapClass, rowGapClass]}
        {...props}
      >
        <Slot />
      </Box>
    );
  },
);
