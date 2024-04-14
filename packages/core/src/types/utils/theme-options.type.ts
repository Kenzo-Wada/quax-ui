import { QuaxColorType } from "./color.type";
import { QuaxSizeType } from "./size.type";

export type QuaxThemeOptionsType = {
  primary?: {
    color?: QuaxColorType;
    size?: QuaxSizeType;
    radius?: QuaxSizeType;
  };
};
