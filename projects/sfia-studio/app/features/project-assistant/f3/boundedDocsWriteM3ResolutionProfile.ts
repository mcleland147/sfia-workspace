/**
 * Sibling M3 resolution profile for the governed REAL bounded docs-write path
 * (D-GCEC-03 / GAP-1 sibling).
 *
 * Values are harvested from `createM4BoundedDocsWriteCursorAgentDescriptor`
 * — not invented here.
 *
 * NOT a new engine. NOT client-injectable. NOT authorized live REAL in this cycle.
 */

import {
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
  M4_BOUNDED_DOCS_WRITE_SCOPE,
  M4_BOUNDED_DOCS_WRITE_TARGET,
} from "@/lib/oa/execution-attempt";
import { DEFAULT_BOUNDED_READ_ONLY_M3_EXECUTION_WINDOW_CLASS } from "@/lib/oa/execution-contract";
import type { M3ResolvedExecutionFields } from "./resolveM3ExecutionContract";

/**
 * Local filesystem evidence obligations for the bounded docs-write profile
 * (NO_COMMIT / NO_PUSH / NO_PR / NO_MERGE).
 *
 * Keywords `docs_write` + `artifact` are already recognized by
 * contractEffectClassification / qualifyExecutionContractCompletion;
 * ingestDocsWriteArtifactEvidence emits type=artifact +
 * source=execution_attempt:docs_write. OA `evreq:` prefix satisfies
 * isOaIdentifier — no new Evidence registry / schema.
 */
export const BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS = [
  "evreq:docs_write_artifact",
] as const;

/**
 * GCEC progressive Git lifecycle proof set (CR-GCEC-05).
 * Use ONLY when the contract authorizes the corresponding Git effects.
 * Must NOT be the default for the bounded NO_* docs-write profile.
 */
export const BOUNDED_DOCS_WRITE_GIT_EVIDENCE_REQUIREMENTS = [
  "git:local_commit",
  "git:remote_push",
  "git:pull_request",
  "git:ci_status",
  "git:review_status",
  "git:merge",
  "git:post_merge_verification",
] as const;

const GIT_LIFECYCLE_EVIDENCE = new Set<string>([
  ...BOUNDED_DOCS_WRITE_GIT_EVIDENCE_REQUIREMENTS,
  "git:commit",
  "git:push",
]);

const GIT_FORBIDDING_CONSTRAINTS = new Set([
  "NO_COMMIT",
  "NO_GIT_REMOTE",
  "NO_PUSH",
  "NO_PR",
  "NO_MERGE",
]);

export function isGitLifecycleEvidenceRequirement(id: string): boolean {
  return GIT_LIFECYCLE_EVIDENCE.has(id);
}

export function docsWriteConstraintsForbidGitLifecycle(
  constraints: readonly string[],
): boolean {
  return constraints.some((c) => GIT_FORBIDDING_CONSTRAINTS.has(c));
}

/**
 * Select evidenceRequirements coherent with bounded docs-write constraints.
 * Strips Git lifecycle obligations when NO_* forbids those effects.
 * Preserves applicable non-Git OA identifiers from PREPARE when present.
 */
export function resolveDocsWriteEvidenceRequirementsForBoundedProfile(input: {
  fromPrepare: readonly string[];
  constraints: readonly string[];
}): string[] {
  const fromPrepare = [...input.fromPrepare];
  if (!docsWriteConstraintsForbidGitLifecycle(input.constraints)) {
    return fromPrepare.length > 0
      ? fromPrepare
      : [...BOUNDED_DOCS_WRITE_GIT_EVIDENCE_REQUIREMENTS];
  }
  const kept = fromPrepare.filter((r) => !isGitLifecycleEvidenceRequirement(r));
  if (kept.length > 0) return kept;
  return [...BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS];
}

export function docsWriteEvidenceContradictsConstraints(input: {
  evidenceRequirements: readonly string[];
  constraints: readonly string[];
}): boolean {
  if (!docsWriteConstraintsForbidGitLifecycle(input.constraints)) return false;
  return input.evidenceRequirements.some(isGitLifecycleEvidenceRequirement);
}

export function boundedDocsWriteM3ResolutionProfile(): M3ResolvedExecutionFields {
  return {
    action: M4_BOUNDED_DOCS_WRITE_ACTION,
    target: M4_BOUNDED_DOCS_WRITE_TARGET,
    requiredCapabilities: [M4_BOUNDED_DOCS_WRITE_CAPABILITY],
    reversibility: "reversible",
    scope: M4_BOUNDED_DOCS_WRITE_SCOPE,
    constraints: [
      "BOUNDED DOCS-WRITE",
      "PATH_ALLOWLIST_ONLY",
      "TEXT_DOCS_ONLY",
      "NO_DELETE",
      "NO_COMMIT",
      "NO_GIT_REMOTE",
      "NO_PUSH",
      "NO_PR",
      "NO_MERGE",
      "GATE D REQUIRED",
      "NO WILDCARD",
    ],
    stopConditions: [
      "AUTHORITY_DENIED",
      "CONTEXT_STALE",
      "DECISION_NOT_CURRENT",
      "GATE_D_REQUIRED",
      "REAL_BOUNDARY_DISABLED",
      "BASE_SHA_DRIFT",
      "PATH_ESCAPE",
      "OUT_OF_SCOPE_WRITE",
    ],
    executionWindowClass: DEFAULT_BOUNDED_READ_ONLY_M3_EXECUTION_WINDOW_CLASS,
    evidenceRequirements: [...BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS],
  };
}

export const BOUNDED_DOCS_WRITE_M3_SUPERSESSION_REASON =
  "PRE-M6 Option A — resolve durable M3 PREPARE via existing G-UX-15 supersession (bounded docs-write Cursor REAL profile; ZERO LIVE in this cycle)" as const;

export const DOCS_WRITE_EVIDENCE_REMATERIALIZE_REASON =
  "docs_write_evidence_requirements_coherence — strip Git lifecycle proofs forbidden by bounded NO_* constraints" as const;
