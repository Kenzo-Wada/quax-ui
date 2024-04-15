import { QuaxSize } from "~/const";

export type QuaxSizeType = (typeof QuaxSize)[keyof typeof QuaxSize];
