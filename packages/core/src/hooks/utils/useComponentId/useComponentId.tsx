import { useId, useSignal } from "@builder.io/qwik";

export const useComponentId = (componentName: string): string => {
  const componentId = useSignal<string>("");
  const id = useId();

  componentId.value = `Quax-${componentName}-${id}`;

  return componentId.value;
};
