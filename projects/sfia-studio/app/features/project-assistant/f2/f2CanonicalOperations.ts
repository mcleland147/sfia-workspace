/**
 * CORR-PROOF-09 — single source for Artifact materialization technical IDs.
 * TECHNICAL CAPABILITY ≠ EXECUTION AUTHORITY.
 *
 * CR-09-02 remediation: do NOT expose a global executionIntent.requestedOperation
 * enum (especially hostile-only IDs) to the OpenAI producer contract.
 * The dedicated IntentAnalysis field carries the Artifact-only discriminator.
 */

/** Server-owned action for Artifact materialization (TECHNICAL ≠ AUTHORITY). */
export const F2_ARTIFACT_MATERIALIZATION_OPERATION =
  "cursor.docs_write.apply" as const;

/** Server-owned capability set for Artifact materialization. */
export const F2_ARTIFACT_MATERIALIZATION_CAPABILITIES = [
  "cap:cursor.docs_write",
] as const;

/**
 * OpenAI Structured Outputs allowlist for the dedicated Artifact field only.
 * Hostile ops (e.g. github.pr.merge) are NOT producer choices — inject via DTO.
 */
export const F2_ARTIFACT_MATERIALIZATION_OPERATION_SCHEMA_ENUM = [
  F2_ARTIFACT_MATERIALIZATION_OPERATION,
] as const;

export type F2ArtifactMaterializationOperation =
  (typeof F2_ARTIFACT_MATERIALIZATION_OPERATION_SCHEMA_ENUM)[number];

export function isF2ArtifactMaterializationOperation(
  value: string,
): value is F2ArtifactMaterializationOperation {
  return (
    F2_ARTIFACT_MATERIALIZATION_OPERATION_SCHEMA_ENUM as readonly string[]
  ).includes(value);
}
