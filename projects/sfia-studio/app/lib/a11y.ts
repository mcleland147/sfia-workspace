export const SIMULATION_TITLE = "Simulation — aucune action Git réelle";

export function simulatedActionProps(title: string = SIMULATION_TITLE) {
  return {
    disabled: true,
    title,
    "aria-disabled": true as const,
  };
}

export function focusableLandmarkProps(label: string) {
  return {
    "aria-label": label,
    tabIndex: -1,
  };
}
