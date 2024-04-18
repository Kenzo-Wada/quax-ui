import { QuaxSpacingType, QuaxGridAutoFlowType } from "~/types";
import type { QuaxBoxProps } from "~/components";

export type QuaxGridProps = QuaxBoxProps & {
  gap?: QuaxSpacingType;
  colGap?: QuaxSpacingType;
  column?: number;
  row?: number;
  rowGap?: QuaxSpacingType;
  autoColumns?: string;
  autoRows?: string;
  autoFlow?: QuaxGridAutoFlowType;
  templateColumns?: string;
  templateRows?: string;
  templateAreas?: string;
};
