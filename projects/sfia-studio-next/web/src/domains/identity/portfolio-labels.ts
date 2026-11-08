export type PreparationLabelInput = {
  id: string;
  previewName?: string;
  previewSummary?: string;
};

/** Neutral label when preview fields are empty — never fabricate "recently modified". */
export function preparationDisplayLabel(p: PreparationLabelInput): string {
  const name = p.previewName?.trim();
  if (name) return name;
  const summary = p.previewSummary?.trim();
  if (summary) return summary.slice(0, 80);
  return `Préparation ${p.id.slice(0, 8)}`;
}
