/**
 * Durable project Evidence read for AttemptExecutionProfile (CR-GCEC-AGENT-02).
 * Distinguishes unavailable infrastructure from a real empty query result.
 */
import type { Evidence } from "@/lib/oa/evidence-review";

export type ProjectEvidenceListResult =
  | { readonly ok: true; readonly evidence: readonly Evidence[] }
  | {
      readonly ok: false;
      readonly reason: "evidence_reader_unavailable";
    };

export type ListProjectEvidenceFn = (
  projectId: string,
) => Promise<ProjectEvidenceListResult>;

/** Test/default: real empty query (reader present). */
export function availableProjectEvidence(
  evidence: readonly Evidence[] = [],
): ProjectEvidenceListResult {
  return { ok: true, evidence };
}

export function unavailableProjectEvidence(): ProjectEvidenceListResult {
  return { ok: false, reason: "evidence_reader_unavailable" };
}
