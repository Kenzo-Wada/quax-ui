import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./Input.css?inline";
import type { QuaxInputProps } from "./Input.types";

export const Input = component$<QuaxInputProps>(
  ({ size = "md", radius, ...props }) => {
    useStylesScoped$(styles);

    const sizeClass = `size-${size}`;
    const radiusClass = `radius-${radius}`;

    return <input {...props} class={[props.class, sizeClass, radiusClass]} />;
  },
);
