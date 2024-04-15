import { QuaxColor } from "~/const";

export type QuaxColorType = (typeof QuaxColor)[keyof typeof QuaxColor];
