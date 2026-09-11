/**
 * D-GCEC-CONT-01 — resolve unique prior Attempt for pre-commit workspace continuation.
 *
 * Pure Product-truth resolver: Attempt history + VERIFIED Evidence bindings.
 * No free workspace path. No heuristic latest/first selection under ambiguity.
 * Safety journal is never consulted.
 */
import type { Evidence } from "@/lib/oa/evidence-review";
import type { CursorAuthorizedEffectId } from "./cursorExecutionReport";
import type { ExecutionAttempt } from "./types";
import type { ResumeVerifiedFileFact } from "../ports/realExecutionWorkspacePort";

const FS_EFFECTS = new Set<CursorAuthorizedEffectId>([
  "filesystem.create",
  "filesystem.modify",
]);

const PROTECTED_GIT_EFFECTS = new Set<CursorAuthorizedEffectId>([
  "git.commit",
  "git.push",
  "github.pr.create",
  "github.pr.update",
  "github.pr.merge",
]);

export type WorkspaceContinuationDescriptor = {
  readonly priorAttemptId: string;
  readonly expectedHeadSha: string;
  readonly expectedVerifiedFiles: readonly ResumeVerifiedFileFact[];
  readonly evidenceId: string;
};

export type ResolvePreCommitWorkspaceContinuationInput = {
  readonly currentAttemptId: string;
  readonly executionContractId: string;
  readonly projectId: string;
  readonly cycleInstanceId: string;
  /** Contract-bound base HEAD — pre-commit dirty worktree remains at this SHA. */
  readonly expectedHeadSha: string;
  readonly attempts: readonly ExecutionAttempt[];
  readonly evidence: readonly Evidence[];
  readonly authorizedEffects: readonly CursorAuthorizedEffectId[];
  readonly verifiedEffects?: readonly CursorAuthorizedEffectId[];
};

export type ResolvePreCommitWorkspaceContinuationResult =
  | { readonly required: false; readonly descriptor: null }
  | {
      readonly required: true;
      readonly ok: true;
      readonly descriptor: WorkspaceContinuationDescriptor;
    }
  | {
      readonly required: true;
      readonly ok: false;
      readonly reason:
        | "continuation_candidate_none"
        | "continuation_candidate_ambiguous"
        | "continuation_evidence_incomplete";
      readonly candidateAttemptIds?: readonly string[];
    };

export function preCommitWorkspaceContinuationRequired(input: {
  readonly authorizedEffects: readonly CursorAuthorizedEffectId[];
  readonly verifiedEffects?: readonly CursorAuthorizedEffectId[];
}): boolean {
  const verified = new Set(input.verifiedEffects ?? []);
  const hasVerifiedFs = [...FS_EFFECTS].some((e) => verified.has(e));
  const hasAuthorizedGit = input.authorizedEffects.some((e) =>
    PROTECTED_GIT_EFFECTS.has(e),
  );
  return hasVerifiedFs && hasAuthorizedGit;
}

function isDocsWriteArtifactEvidence(ev: Evidence): boolean {
  return (
    ev.type === "artifact" &&
    ev.status === "verified" &&
    typeof ev.location === "string" &&
    ev.location.trim().length > 0 &&
    typeof ev.digest === "string" &&
    ev.digest.trim().toLowerCase().startsWith("sha256:") &&
    (ev.source === "execution_attempt:docs_write" ||
      ev.source.startsWith("execution_attempt:docs_write"))
  );
}

/**
 * Resolve unique prior succeeded Attempt whose VERIFIED docs-write Evidence
 * matches Project / Cycle / EC / Attempt bindings.
 *
 * Continuation is required only when the authorized slice still needs protected
 * Git AND verified FS effects are claimed AND at least one prior same-EC
 * succeeded Attempt exists (pre-commit workspace lineage). With no prior
 * Attempt, verifiedEffects alone do not invent a continuation obligation
 * (CR23 / progressive-slice harnesses may assert FS verified without Attempt A).
 */
export function resolvePreCommitWorkspaceContinuation(
  input: ResolvePreCommitWorkspaceContinuationInput,
): ResolvePreCommitWorkspaceContinuationResult {
  if (
    !preCommitWorkspaceContinuationRequired({
      authorizedEffects: input.authorizedEffects,
      verifiedEffects: input.verifiedEffects,
    })
  ) {
    return { required: false, descriptor: null };
  }

  const succeededSameEc = input.attempts.filter(
    (a) =>
      a.attemptId !== input.currentAttemptId &&
      a.executionContractId === input.executionContractId &&
      a.status === "succeeded",
  );

  if (succeededSameEc.length === 0) {
    return { required: false, descriptor: null };
  }

  type Candidate = {
    attemptId: string;
    evidenceId: string;
    path: string;
    digest: string;
  };
  const candidates: Candidate[] = [];

  for (const attempt of succeededSameEc) {
    const matching = input.evidence.filter(
      (ev) =>
        isDocsWriteArtifactEvidence(ev) &&
        ev.bindings.projectId === input.projectId &&
        ev.bindings.cycleInstanceId === input.cycleInstanceId &&
        ev.bindings.executionContractId === input.executionContractId &&
        ev.bindings.executionAttemptId === attempt.attemptId,
    );
    if (matching.length === 0) continue;
    if (matching.length > 1) {
      return {
        required: true,
        ok: false,
        reason: "continuation_candidate_ambiguous",
        candidateAttemptIds: [attempt.attemptId],
      };
    }
    const ev = matching[0]!;
    candidates.push({
      attemptId: attempt.attemptId,
      evidenceId: ev.evidenceId,
      path: String(ev.location).trim(),
      digest: String(ev.digest).trim().toLowerCase(),
    });
  }

  if (candidates.length === 0) {
    return {
      required: true,
      ok: false,
      reason: "continuation_candidate_none",
    };
  }
  if (candidates.length > 1) {
    return {
      required: true,
      ok: false,
      reason: "continuation_candidate_ambiguous",
      candidateAttemptIds: candidates.map((c) => c.attemptId),
    };
  }

  const only = candidates[0]!;
  if (!only.path || !only.digest.startsWith("sha256:")) {
    return {
      required: true,
      ok: false,
      reason: "continuation_evidence_incomplete",
    };
  }

  return {
    required: true,
    ok: true,
    descriptor: {
      priorAttemptId: only.attemptId,
      expectedHeadSha: input.expectedHeadSha.toLowerCase(),
      expectedVerifiedFiles: [
        { path: only.path, digest: only.digest },
      ],
      evidenceId: only.evidenceId,
    },
  };
}
