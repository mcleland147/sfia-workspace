/**
 * GCEC D-GCEC-06 / CR-GCEC-04 — functional-design artifact completeness.
 * No new Artifact table; type===artifact + digest + location + bindings + status.
 */
import type { Evidence } from "../domain/types";

export type ArtifactCompletenessGap =
  | "not_artifact_type"
  | "digest_missing"
  | "location_missing"
  | "bindings_missing"
  | "status_not_proof"
  | "project_id_missing"
  | "cycle_instance_id_missing"
  | "execution_contract_id_missing"
  | "execution_attempt_id_missing";

export type ArtifactCompletenessResult = {
  ok: boolean;
  gaps: ArtifactCompletenessGap[];
};

function hasLooseStructuralBinding(evidence: Evidence): boolean {
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
 * GCEC strict policy — require ALL of:
 * projectId, cycleInstanceId, executionContractId, executionAttemptId
 * + type artifact + digest + location + status available|verified.
 */
export function evaluateGcecArtifactEvidence(
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
  const b = evidence.bindings;
  if (!b?.projectId?.trim()) gaps.push("project_id_missing");
  if (!b?.cycleInstanceId?.trim()) gaps.push("cycle_instance_id_missing");
  if (!b?.executionContractId?.trim()) gaps.push("execution_contract_id_missing");
  if (!b?.executionAttemptId?.trim()) gaps.push("execution_attempt_id_missing");
  if (
    !b?.projectId?.trim() ||
    !b?.cycleInstanceId?.trim() ||
    !b?.executionContractId?.trim() ||
    !b?.executionAttemptId?.trim()
  ) {
    gaps.push("bindings_missing");
  }
  if (evidence.status !== "available" && evidence.status !== "verified") {
    gaps.push("status_not_proof");
  }

  return { ok: gaps.length === 0, gaps };
}

/**
 * Evaluate whether Evidence represents a complete functional-design artifact.
 * CR-GCEC-04: defaults to GCEC strict bindings.
 */
export function evaluateFunctionalDesignArtifactCompleteness(
  evidence: Evidence,
  mode: "gcec_strict" | "legacy_loose" = "gcec_strict",
): ArtifactCompletenessResult {
  if (mode === "gcec_strict") {
    return evaluateGcecArtifactEvidence(evidence);
  }
  const gaps: ArtifactCompletenessGap[] = [];
  if (evidence.type !== "artifact") gaps.push("not_artifact_type");
  if (!evidence.digest) gaps.push("digest_missing");
  if (!(evidence.location?.trim() ?? "")) gaps.push("location_missing");
  if (!hasLooseStructuralBinding(evidence)) gaps.push("bindings_missing");
  if (evidence.status !== "available" && evidence.status !== "verified") {
    gaps.push("status_not_proof");
  }
  return { ok: gaps.length === 0, gaps };
}
