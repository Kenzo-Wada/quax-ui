import { PropsOf } from "@builder.io/qwik";
import { QuaxColorType } from "~/types/utils/color.type";
import { QuaxSizeType } from "~/types/utils/size.type";

export type QuaxBoxProps = PropsOf<"div"> & {
  bg?: QuaxColorType | "white" | "black";
  color?: QuaxColorType | "white" | "black";
  m?: QuaxSizeType;
  mt?: QuaxSizeType;
  mr?: QuaxSizeType;
  mb?: QuaxSizeType;
  ml?: QuaxSizeType;
  mx?: QuaxSizeType;
  my?: QuaxSizeType;
  p?: QuaxSizeType;
  pt?: QuaxSizeType;
  pr?: QuaxSizeType;
  pb?: QuaxSizeType;
  pl?: QuaxSizeType;
  px?: QuaxSizeType;
  py?: QuaxSizeType;
  w?: string | number;
  h?: string | number;
  minW?: string | number;
  minH?: string | number;
  maxW?: string | number;
  maxH?: string | number;
};
