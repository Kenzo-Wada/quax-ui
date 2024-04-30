import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { QuaxSwitchProps } from "./Switch.types";
import styles from "./Switch.css?inline";

export const Switch = component$<QuaxSwitchProps>((props) => {
  useStylesScoped$(styles);

  const sizeClass = `size-${props.size || "md"}`;
  const radiusClass = `radius-${props.radius || "xl"}`;

  return (
    <div class={[props.class, sizeClass, radiusClass]}>
      <input type="checkbox" id="checkbox" />
      <span />
      <label for="checkbox">{props.label}</label>
    </div>
  );
});
