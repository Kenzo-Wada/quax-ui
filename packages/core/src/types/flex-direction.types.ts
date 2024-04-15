import { QuaxFlexDirection } from "~/const";

export type QuaxFlexDirectionType =
  (typeof QuaxFlexDirection)[keyof typeof QuaxFlexDirection];
