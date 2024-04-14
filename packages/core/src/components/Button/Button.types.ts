import { PropsOf } from "@builder.io/qwik";
import type { QuaxColorType } from "~/types/utils/color.type";
import type { QuaxSizeType } from "~/types/utils/size.type";

type QuaxButtonVariantType = "filled" | "outlined" | "ghost" | "light";

export type QuaxButtonProps = PropsOf<"button"> & {
  size: QuaxSizeType;
  color: QuaxColorType;
  variant: QuaxButtonVariantType;
  radius: QuaxSizeType;
};
