import { QuaxColorType } from "./color.types";
import { QuaxSizeType } from "./size.types";

export type QuaxThemeOptionsType = {
  primary?: {
    color?: QuaxColorType;
    size?: QuaxSizeType;
    radius?: QuaxSizeType;
  };
};
