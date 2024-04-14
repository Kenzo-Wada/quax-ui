import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./Button.css?inline";
import type { QuaxButtonProps } from "./Button.types";

export const Button = component$<QuaxButtonProps>(
  ({
    color = "primary",
    size = "md",
    variant = "filled",
    radius = "primary",
    ...rest
  }) => {
    useStylesScoped$(styles);
    const colorClass = `color-${color}`;
    const sizeClass = `size-${size}`;
    const variantClass = `variant-${variant}`;
    const radiusClass = `radius-${radius}`;

    return (
      <button
        {...rest}
        class={[rest.class, colorClass, sizeClass, variantClass, radiusClass]}
      >
        <Slot />
      </button>
    );
  },
);
