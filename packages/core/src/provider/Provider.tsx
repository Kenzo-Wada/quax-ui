import {
  Slot,
  component$,
  useContextProvider,
  useSignal,
  useStyles$,
} from "@builder.io/qwik";
import globalStyles from "~/styles/global.css?inline";
import { QuaxProviderProps } from "./Provider.types";
import { QuaxThemeOptionsType } from "~/types";
import { QuaxThemeContext } from "~/context";

export const QuaxProvider = component$<QuaxProviderProps>(({ theme }) => {
  useStyles$(globalStyles);
  const themeSig = useSignal<QuaxThemeOptionsType>({
    primary: {
      color: theme?.primary?.color ?? "blue",
      radius: theme?.primary?.radius ?? "md",
    },
  });

  useContextProvider(QuaxThemeContext, themeSig);

  return (
    <div>
      <Slot />
    </div>
  );
});
