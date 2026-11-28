export type PreparationLabelInput = {
  id: string;
  previewName?: string;
  previewSummary?: string;
};

/** Canonical title, otherwise the neutral label. Preview text is not a title. */
export function preparationDisplayLabel(p: PreparationLabelInput & { title?: string | null }): string {
  const title = p.title?.trim();
  if (title) return title;
  return "Nouvelle préparation";
}
