import type { QuaxBoxProps } from "~/components";

export type QuaxGridItemProps = QuaxBoxProps & {
  area?: string;
  colEnd?: number;
  colStart?: number;
  rowEnd?: number;
  rowStart?: number;
  colSpan?: number;
  rowSpan?: number;
};
