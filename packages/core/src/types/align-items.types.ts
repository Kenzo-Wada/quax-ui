import { QuaxAlignItems } from "~/const";

export type QuaxAlignItemsType =
  (typeof QuaxAlignItems)[keyof typeof QuaxAlignItems];
