import type { QuaxBoxProps } from "~/components/Box";
import type {
  QuaxAlignItemsType,
  QuaxFlexDirectionType,
  QuaxFlexWrapType,
  QuaxJustifyContentType,
  QuaxSpacingType,
} from "~/types";

export type QuaxFlexProps = QuaxBoxProps & {
  gap?: QuaxSpacingType;
  colGap?: QuaxSpacingType;
  rowGap?: QuaxSpacingType;
  direction?: QuaxFlexDirectionType;
  align?: QuaxAlignItemsType;
  justify?: QuaxJustifyContentType;
  wrap?: QuaxFlexWrapType;
};
