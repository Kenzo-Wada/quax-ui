import {
  CSSProperties,
  Slot,
  component$,
  useStylesScoped$,
} from "@builder.io/qwik";
import styles from "./Box.css?inline";
import type { QuaxBoxProps } from "./Box.types";

export const Box = component$<QuaxBoxProps>(
  ({
    m,
    p,
    mt,
    mb,
    ml,
    mr,
    pt,
    pb,
    pl,
    pr,
    mx,
    my,
    px,
    py,
    w,
    h,
    minW,
    minH,
    maxW,
    maxH,
    color,
    bg,
    ...props
  }) => {
    useStylesScoped$(styles);

    const marginClass = m && `margin-${m}`;
    const paddingClass = p && `padding-${p}`;
    const marginTopClass = mt && `margin-top-${mt}`;
    const marginBottomClass = mb && `margin-bottom-${mb}`;
    const marginLeftClass = ml && `margin-left-${ml}`;
    const marginRightClass = mr && `margin-right-${mr}`;
    const paddingTopClass = pt && `padding-top-${pt}`;
    const paddingBottomClass = pb && `padding-bottom-${pb}`;
    const paddingLeftClass = pl && `padding-left-${pl}`;
    const paddingRightClass = pr && `padding-right-${pr}`;
    const marginXClass = mx && `margin-x-${mx}`;
    const marginYClass = my && `margin-y-${my}`;
    const paddingXClass = px && `padding-x-${px}`;
    const paddingYClass = py && `padding-y-${py}`;
    const colorClass = color && `color-${color}`;
    const bgClass = bg && `background-color-${bg}`;

    const customStyle = {
      width: w && w,
      height: h && h,
      minWidth: minW && minW,
      minHeight: minH && minH,
      maxWidth: maxW && maxW,
      maxHeight: maxH && maxH,
    };
    const combinedStyle = { ...customStyle, ...(props.style as CSSProperties) };

    return (
      <div
        {...props}
        style={combinedStyle}
        class={[
          props.class,
          marginClass,
          paddingClass,
          marginTopClass,
          marginBottomClass,
          marginLeftClass,
          marginRightClass,
          paddingTopClass,
          paddingBottomClass,
          paddingLeftClass,
          paddingRightClass,
          marginXClass,
          marginYClass,
          paddingXClass,
          paddingYClass,
          colorClass,
          bgClass,
        ]}
      >
        <Slot />
      </div>
    );
  },
);
