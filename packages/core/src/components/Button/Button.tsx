import {
  component$,
  Slot,
  useContext,
  useStylesScoped$,
} from "@builder.io/qwik";
import styles from "./Button.css?inline";
import type { QuaxButtonProps } from "./Button.types";
import { QuaxThemeContext } from "~/context";
import { useComponentId } from "~/hooks/utils/useComponentId/useComponentId";

export const Button = component$<QuaxButtonProps>(
  ({ color, size = "md", variant = "filled", radius, ...rest }) => {
    useStylesScoped$(styles);
    const theme = useContext(QuaxThemeContext);
    const id = useComponentId("Button");

    const colorClass = `color-${color ?? theme.value.primary?.color}`;
    const sizeClass = `size-${size}`;
    const variantClass = `variant-${variant}`;
    const radiusClass = `radius-${radius ?? theme.value.primary?.radius}`;

    return (
      <button
        id={id}
        {...rest}
        class={[rest.class, colorClass, sizeClass, variantClass, radiusClass]}
      >
        <Slot />
      </button>
    );
  },
);
