import { Slot, component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./Select.css?inline";
import type { QuaxSelectProps } from "./Select.types";
import { LuChevronsUpDown } from "@qwikest/icons/lucide";

export const Select = component$<QuaxSelectProps>(
  ({ size = "md", radius = "md", placeholder, ...props }) => {
    useStylesScoped$(styles);

    const sizeClass = `size-${size}`;
    const radiusClass = `radius-${radius}`;

    return (
      <div class={["select-wrapper"]}>
        <select {...props} class={[props.class, sizeClass, radiusClass]}>
          {placeholder && (
            <option value="" disabled selected aria-hidden class="placeholder">
              {placeholder}
            </option>
          )}
          <Slot />
        </select>
        <div class={["icon", `icon-${size}`]}>
          <LuChevronsUpDown />
        </div>
      </div>
    );
  },
);
