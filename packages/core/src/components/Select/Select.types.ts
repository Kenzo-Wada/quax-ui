import { PropsOf } from "@builder.io/qwik";
import { QuaxRadiusType, QuaxSizeType } from "~/types";

export type QuaxSelectProps = PropsOf<"select"> & {
  size?: QuaxSizeType;
  radius?: QuaxRadiusType;
  placeholder?: string;
};
