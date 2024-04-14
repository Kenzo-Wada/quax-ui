import { Slot, component$, useStyles$ } from "@builder.io/qwik";
import globalStyles from "../../src/styles/global.css?inline";
import primaryStyles from "../../src/styles/primary.css?inline";
import { QuaxThemeOptionsType } from "../../src/types/utils/theme-options.type";

export type QuaxProviderProps = {
  theme?: QuaxThemeOptionsType;
};

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
