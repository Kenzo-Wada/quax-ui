import { Slot, component$, useStyles$ } from "@builder.io/qwik";
import globalStyles from "~/styles/global.css?inline";
import primaryStyles from "~/styles/primary.css?inline";
import { QuaxProviderProps } from "./Provider.types";

export const QuaxProvider = component$<QuaxProviderProps>(({ theme }) => {
  useStyles$(globalStyles);
  useStyles$(primaryStyles);

  const primaryColorClass = `primary-color-${theme?.primary?.color ?? "blue"}`;
  const primaryRadiusClass = `primary-radius-${theme?.primary?.radius ?? "md"}`;

  return (
    <div class={[primaryColorClass, primaryRadiusClass]}>
      <Slot />
    </div>
  );
});
