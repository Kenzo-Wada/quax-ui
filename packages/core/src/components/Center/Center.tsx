import { Slot, component$, useStyles$ } from "@builder.io/qwik";
import styles from "./Center.css?inline";
import { Box } from "~/components/Box";
import { QuaxCenterProps } from "./Center.types";

export const Center = component$<QuaxCenterProps>((props) => {
  useStyles$(styles);
  return (
    <Box {...props} class={[props.class, "center"]}>
      <Slot />
    </Box>
  );
});
