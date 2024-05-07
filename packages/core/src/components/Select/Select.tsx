import { Slot, component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./Select.css?inline";
import type { QuaxSelectProps } from "./Select.types";
import { LuChevronsUpDown } from "@qwikest/icons/lucide";
import { useComponentId } from "~/hooks/utils/useComponentId/useComponentId";

export const Select = component$<QuaxSelectProps>(
  ({ size = "md", radius = "md", placeholder, ...props }) => {
    useStylesScoped$(styles);
    const id = useComponentId("Select");

    const sizeClass = `size-${size}`;
    const radiusClass = `radius-${radius}`;

    return (
      <div id={id} class={["select-wrapper"]}>
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
