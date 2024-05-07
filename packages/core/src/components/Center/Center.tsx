import { Slot, component$, useStyles$ } from "@builder.io/qwik";
import styles from "./Center.css?inline";
import { Box } from "~/components/Box";
import { QuaxCenterProps } from "./Center.types";
import { useComponentId } from "~/hooks/utils/useComponentId/useComponentId";

export const Center = component$<QuaxCenterProps>((props) => {
  useStyles$(styles);
  const id = useComponentId("Center");

  return (
    <Box id={id} {...props} class={[props.class, "center"]}>
      <Slot />
    </Box>
  );
});
