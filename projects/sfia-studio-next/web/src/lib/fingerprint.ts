import { createHash } from "crypto";

export type CreationApproval = {
  preparationId: string;
  projectName: string;
  previewSummary: string;
  expectedCreationRevision: number;
};

/** Canonical fingerprint of approved creation fields (not full Nora transcript). */
export function creationFingerprint(approval: CreationApproval): string {
  const canonical = JSON.stringify({
    preparationId: approval.preparationId,
    projectName: approval.projectName.trim(),
    previewSummary: approval.previewSummary.trim(),
    expectedCreationRevision: approval.expectedCreationRevision,
  });
  return createHash("sha256").update(canonical).digest("hex");
}
