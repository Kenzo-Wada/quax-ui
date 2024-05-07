import { component$, CSSProperties, Slot, useStyles$ } from "@builder.io/qwik";
import { Box } from "~/components";
import styles from "./Grid.css?inline";
import type { QuaxGridProps } from "./Grid.types";
import { useComponentId } from "~/hooks/utils/useComponentId/useComponentId";

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
    const id = useComponentId("Grid");

    const gapClass = `gap-${gap ?? "md"}`;
    const colGapClass =
      gap === undefined ? `column-gap-${colGap ?? "md"}` : undefined;
    const rowGapClass =
      gap === undefined ? `row-gap-${rowGap ?? "md"}` : undefined;

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
        id={id}
        style={combinedStyles}
        class={["grid", props.class, gapClass, colGapClass, rowGapClass]}
        {...props}
      >
        <Slot />
      </Box>
    );
  },
);
