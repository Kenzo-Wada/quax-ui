import { Signal, createContextId } from "@builder.io/qwik";
import { QuaxThemeOptionsType } from "~/types";

export const QuaxThemeContext =
  createContextId<Signal<QuaxThemeOptionsType>>("quax-theme-context");
