import { PropsOf } from "@builder.io/qwik";
import { QuaxRadiusType, QuaxSizeType } from "~/types";

export type QuaxCheckboxProps = Omit<PropsOf<"input">, "size"> & {
  size?: QuaxSizeType;
  radius?: QuaxRadiusType;
  label?: string;
};
