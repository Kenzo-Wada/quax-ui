import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { QuaxCheckboxProps } from "./Checkbox.types";
import styles from "./Checkbox.css?inline";
import { useComponentId } from "~/hooks/utils/useComponentId/useComponentId";

export const Checkbox = component$<QuaxCheckboxProps>((props) => {
  useStylesScoped$(styles);
  const id = useComponentId("Checkbox");

  const sizeClass = `size-${props.size || "md"}`;
  const radiusClass = `radius-${props.radius || "sm"}`;

  return (
    <label id={id} class={[props.class, sizeClass, radiusClass]}>
      <input type="checkbox" />
      <span>{props.label}</span>
    </label>
  );
});
