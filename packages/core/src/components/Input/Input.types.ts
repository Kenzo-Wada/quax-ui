import { PropsOf } from "@builder.io/qwik";
import type { QuaxSizeType, QuaxRadiusType } from "~/types";

export type QuaxInputProps = {
  size: QuaxSizeType;
  radius: QuaxRadiusType;
} & Omit<
  PropsOf<"input">,
  "size" | "bind:checked" | "popovertarget" | "popovertargetaction"
>;
