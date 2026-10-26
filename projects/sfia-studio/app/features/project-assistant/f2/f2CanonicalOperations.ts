/**
 * CORR-PROOF-09 — Artifact materialization technical IDs.
 * TECHNICAL CAPABILITY ≠ EXECUTION AUTHORITY.
 *
 * The specialized document-write operation is not a Product admission.
 * Producer schema admits null only. Documentary work routes through generic
 * PREPARE and the studio cursor generalist surface.
 */

import {
  STUDIO_CURSOR_GENERALIST_ACTION,
  STUDIO_CURSOR_GENERALIST_CAPABILITY,
} from "@/lib/oa/execution-contract/domain/generalistExecutionSurface";

/**
 * Not a Product operation admission. Retained so callers can name the
 * generalist action without a specialized document-write token.
 */
export const F2_ARTIFACT_MATERIALIZATION_OPERATION =
  STUDIO_CURSOR_GENERALIST_ACTION;

/** Generalist capability only — not a specialized document-write capability. */
export const F2_ARTIFACT_MATERIALIZATION_CAPABILITIES = [
  STUDIO_CURSOR_GENERALIST_CAPABILITY,
] as const;

/**
 * OpenAI Structured Outputs allowlist for the dedicated Artifact field.
 * Empty: any non-null operation fail-closes. No specialized operation is offered.
 */
export const F2_ARTIFACT_MATERIALIZATION_OPERATION_SCHEMA_ENUM = [] as const;

export type F2ArtifactMaterializationOperation =
  (typeof F2_ARTIFACT_MATERIALIZATION_OPERATION_SCHEMA_ENUM)[number];

export function isF2ArtifactMaterializationOperation(
  value: string,
): value is F2ArtifactMaterializationOperation {
  return (
    F2_ARTIFACT_MATERIALIZATION_OPERATION_SCHEMA_ENUM as readonly string[]
  ).includes(value);
}
