const TITLE_MAX_CODE_POINTS = 80;

/** Owner spelling of a preparation title. Null means the suggestion is unusable. */
export function normalizePreparationTitle(value: string): string | null {
  const single = value.normalize("NFC").replace(/[\t\f\v]+/g, " ").replace(/ {2,}/g, " ").trim();
  if (!single || /[\r\n]/.test(single)) return null;
  if ([...single].length > TITLE_MAX_CODE_POINTS) return null;
  if (/[<>]/.test(single)) return null;
  return single;
}

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
