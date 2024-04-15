import { PropsOf } from "@builder.io/qwik";
import type { QuaxColorType, QuaxRadiusType, QuaxSizeType } from "~/types";

type QuaxButtonVariantType = "filled" | "outlined" | "ghost" | "light";

export type QuaxButtonProps = PropsOf<"button"> & {
  size: QuaxSizeType;
  color: QuaxColorType;
  variant: QuaxButtonVariantType;
  radius: QuaxRadiusType;
};
