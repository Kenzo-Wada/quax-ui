import { PropsOf } from "@builder.io/qwik";
import { QuaxSizeType } from "~/types/utils/size.type";

export type QuaxInputProps = {
  size: QuaxSizeType;
  radius: QuaxSizeType;
} & Omit<
  PropsOf<"input">,
  "size" | "bind:checked" | "popovertarget" | "popovertargetaction"
>;
