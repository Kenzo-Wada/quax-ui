import { CSSProperties, Slot, component$ } from "@builder.io/qwik";
import { QuaxGridItemProps } from "./GridItem.types";
import { Box } from "~/components";
import { useComponentId } from "~/hooks/utils/useComponentId/useComponentId";

export const GridItem = component$<QuaxGridItemProps>(
  ({
    area,
    colEnd,
    colSpan,
    colStart,
    rowEnd,
    rowSpan,
    rowStart,
    ...props
  }) => {
    const id = useComponentId("GridItem");
    const customStyles = {
      gridArea: area,
      gridColumnEnd: colSpan ? `span ${colSpan}` : colEnd,
      gridColumnStart: colSpan ? `span ${colSpan}` : colStart,
      gridRowEnd: rowSpan ? `span ${rowSpan}` : rowEnd,
      gridRowStart: rowSpan ? `span ${rowSpan}` : rowStart,
    };
    const combinedStyles = {
      ...(props.style as CSSProperties),
      ...customStyles,
    };

    return (
      <Box id={id} style={combinedStyles} {...props}>
        <Slot />
      </Box>
    );
  },
);
