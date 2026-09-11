/**
 * GCEC D-GCEC-06 — functional-design artifact completeness over Evidence rows.
 * No new Artifact table; type===artifact + digest + location + bindings + status.
 */
import type { Evidence } from "../domain/types";

export type ArtifactCompletenessGap =
  | "not_artifact_type"
  | "digest_missing"
  | "location_missing"
  | "bindings_missing"
  | "status_not_proof";

export type ArtifactCompletenessResult = {
  ok: boolean;
  gaps: ArtifactCompletenessGap[];
};

function hasStructuralBinding(evidence: Evidence): boolean {
  const b = evidence.bindings;
  if (!b) return false;
  return Boolean(
    b.executionAttemptId ||
      b.executionContractId ||
      b.decisionId ||
      b.cycleInstanceId ||
      b.projectId ||
      b.reviewBundleId,
  );
}

/**
 * Evaluate whether Evidence represents a complete functional-design artifact.
 */
export function evaluateFunctionalDesignArtifactCompleteness(
  evidence: Evidence,
): ArtifactCompletenessResult {
  const gaps: ArtifactCompletenessGap[] = [];

  if (evidence.type !== "artifact") {
    gaps.push("not_artifact_type");
  }
  if (!evidence.digest) {
    gaps.push("digest_missing");
  }
  const location = evidence.location?.trim() ?? "";
  if (!location) {
    gaps.push("location_missing");
  }
  if (!hasStructuralBinding(evidence)) {
    gaps.push("bindings_missing");
  }
  if (evidence.status !== "available" && evidence.status !== "verified") {
    gaps.push("status_not_proof");
  }

  return { ok: gaps.length === 0, gaps };
}
