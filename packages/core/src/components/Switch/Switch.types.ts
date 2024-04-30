import { PropsOf } from "@builder.io/qwik";
import { QuaxRadiusType, QuaxSizeType } from "~/types";

export type QuaxSwitchProps = Omit<PropsOf<"input">, "size"> & {
  size?: QuaxSizeType;
  radius?: QuaxRadiusType;
  label?: string;
};
