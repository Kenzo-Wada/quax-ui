import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./Input.css?inline";
import type { QuaxInputProps } from "./Input.types";
import { useComponentId } from "~/hooks/utils/useComponentId/useComponentId";

export const Input = component$<QuaxInputProps>(
  ({ size = "md", radius = "md", ...props }) => {
    useStylesScoped$(styles);
    const id = useComponentId("Input");

    const sizeClass = `size-${size}`;
    const radiusClass = `radius-${radius}`;

    return (
      <input id={id} {...props} class={[props.class, sizeClass, radiusClass]} />
    );
  },
);
