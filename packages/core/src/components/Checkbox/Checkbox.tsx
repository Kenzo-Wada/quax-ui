import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { QuaxCheckboxProps } from "./Checkbox.types";
import styles from "./Checkbox.css?inline";

export const Checkbox = component$<QuaxCheckboxProps>((props) => {
  useStylesScoped$(styles);

  const sizeClass = `size-${props.size || "md"}`;
  const radiusClass = `radius-${props.radius || "sm"}`;

  return (
    <label class={[props.class, sizeClass, radiusClass]}>
      <input type="checkbox" />
      <span>{props.label}</span>
    </label>
  );
});
