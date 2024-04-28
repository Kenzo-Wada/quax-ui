import { component$, useStyles$ } from "@builder.io/qwik";
import { QuaxCheckboxProps } from "./Checkbox.types";
import styles from "./Checkbox.css?inline";

export const Checkbox = component$<QuaxCheckboxProps>((props) => {
  useStyles$(styles);

  const sizeClass = `size-${props.size || "md"}`;
  const radiusClass = `radius-${props.radius || "md"}`;

  return (
    <label class={[props.class, sizeClass, radiusClass]}>
      <input type="checkbox" />
      <span>{props.label}</span>
    </label>
  );
});