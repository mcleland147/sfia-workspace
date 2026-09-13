/**
 * D-GCEC-CONT-01 — resolve unique prior Attempt for pre-commit workspace continuation.
 * CORR-D-GCEC-AGENT-02 / CR-GCEC-AGENT-08: NO exact Attempt A ⇒ NO FS→SHA supersession.
 *
 * Pure Product-truth resolver: Attempt history + VERIFIED Evidence bindings.
 * No free workspace path. No heuristic latest/first selection under ambiguity.
 * Safety journal is never consulted.
 */
import type { Evidence } from "@/lib/oa/evidence-review";
import type { CursorAuthorizedEffectId } from "./cursorExecutionReport";
import type { ExecutionAttempt } from "./types";
import type { ResumeVerifiedFileFact } from "../ports/realExecutionWorkspacePort";
import { resolveVerifiedDocsWritePriorAttempt } from "./resolveVerifiedDocsWritePriorAttempt";
import {
  M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
  M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
} from "./realLaunchSafety";

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
  /** Server-owned Project.repositoryBinding.identity — never client string. */
  readonly repositoryRef?: string;
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

function isVerifiedLocalCommitEvidence(ev: Evidence): boolean {
  return ev.status === "verified" && ev.source === "git:local_commit";
}

function parseChangedPathsFromLocation(location: string): string[] {
  try {
    const q = location.includes("?") ? location.slice(location.indexOf("?") + 1) : "";
    const params = new URLSearchParams(q);
    const multi = params.getAll("path");
    if (multi.length > 0) return multi.map((p) => decodeURIComponent(p));
    const joined = params.get("paths");
    if (joined) {
      return joined
        .split(",")
        .map((p) => decodeURIComponent(p.trim()))
        .filter(Boolean);
    }
  } catch {
    /* ignore */
  }
  return [];
}

export type FsAnchorSupersessionInput = {
  readonly projectId: string;
  readonly cycleInstanceId: string;
  readonly executionContractId: string;
  readonly evidence: readonly Evidence[];
  readonly attempts: readonly ExecutionAttempt[];
  /** Prior Attempt A that produced the mutable FS artifacts — REQUIRED. */
  readonly priorAttemptId: string;
  /** Expected parent SHA (H0) of the encapsulating commit — REQUIRED. */
  readonly expectedParentSha: string;
  /** Repository identity that must appear in Evidence location — REQUIRED. */
  readonly repositoryRef: string;
  /** Paths that must be encapsulated (Attempt-A artifact paths) — REQUIRED. */
  readonly requiredPaths: readonly string[];
};

/**
 * FS→verified-commit-SHA supersession (CR-GCEC-GC-06 / CR-GCEC-AGENT-08).
 *
 * NO EXACT ATTEMPT A = NO SUPERSESSION.
 * verifiedEffects alone MUST NOT supersede.
 * All lineage fields are required — no weak/same-EC-only fallback.
 *
 * Requires: succeeded docs-write Attempt A + VERIFIED Artifact Evidence on A
 * + succeeded local-commit Attempt B + VERIFIED git:local_commit Evidence on B
 * with exact H0 / repo / paths.
 */
export function isFsAnchorSupersededByVerifiedLocalCommit(
  input: FsAnchorSupersessionInput,
): boolean {
  const priorAttemptId = input.priorAttemptId?.trim();
  const expectedParentSha = input.expectedParentSha?.trim();
  const repositoryRef = input.repositoryRef?.trim();
  const requiredPaths = input.requiredPaths ?? [];
  if (
    !priorAttemptId ||
    !expectedParentSha ||
    !repositoryRef ||
    requiredPaths.length === 0 ||
    !Array.isArray(input.attempts)
  ) {
    return false;
  }

  const priorAttempt = input.attempts.find((a) => a.attemptId === priorAttemptId);
  if (
    !priorAttempt ||
    priorAttempt.status !== "succeeded" ||
    priorAttempt.executionContractId !== input.executionContractId ||
    priorAttempt.selectedAgentRef !== M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID
  ) {
    return false;
  }

  const priorArtifactEvidence = input.evidence.filter((ev) => {
    if (ev.status !== "verified") return false;
    if (ev.type !== "artifact") return false;
    if (ev.bindings.projectId !== input.projectId) return false;
    if (ev.bindings.cycleInstanceId !== input.cycleInstanceId) return false;
    if (ev.bindings.executionContractId !== input.executionContractId) {
      return false;
    }
    if (ev.bindings.executionAttemptId !== priorAttemptId) return false;
    const source = String(ev.source ?? "");
    if (
      source !== "execution_attempt:docs_write" &&
      !/^execution_attempt:docs_write(\.|$)/.test(source)
    ) {
      return false;
    }
    const loc = String(ev.location ?? "").trim();
    if (!loc || !requiredPaths.includes(loc)) return false;
    const digest = String(ev.digest ?? "").trim().toLowerCase();
    if (!digest.startsWith("sha256:") || digest.length < "sha256:".length + 64) {
      return false;
    }
    return true;
  });
  if (priorArtifactEvidence.length !== 1) {
    return false;
  }

  const matching = input.evidence.filter((ev) => {
    if (!isVerifiedLocalCommitEvidence(ev)) return false;
    if (ev.bindings.projectId !== input.projectId) return false;
    if (ev.bindings.cycleInstanceId !== input.cycleInstanceId) return false;
    if (ev.bindings.executionContractId !== input.executionContractId) {
      return false;
    }
    const commitAttemptId = ev.bindings.executionAttemptId?.trim();
    if (!commitAttemptId) return false;

    // Commit Evidence must bind Attempt B, not Attempt A.
    if (commitAttemptId === priorAttemptId) {
      return false;
    }

    const loc = String(ev.location ?? "");
    if (
      !loc.includes(encodeURIComponent(repositoryRef)) &&
      !loc.includes(repositoryRef)
    ) {
      return false;
    }

    const parentHint = `parentSha=${encodeURIComponent(expectedParentSha)}`;
    const parentHintRaw = `parentSha=${expectedParentSha}`;
    if (
      !loc.includes(parentHint) &&
      !loc.includes(parentHintRaw) &&
      !loc.toLowerCase().includes(expectedParentSha.toLowerCase())
    ) {
      return false;
    }

    const fromLoc = parseChangedPathsFromLocation(loc);
    const pathsOk =
      requiredPaths.every((p) => fromLoc.includes(p)) ||
      requiredPaths.every((p) => loc.includes(p));
    if (!pathsOk) return false;

    const attempt = input.attempts.find((a) => a.attemptId === commitAttemptId);
    if (!attempt || attempt.status !== "succeeded") return false;
    if (attempt.executionContractId !== input.executionContractId) {
      return false;
    }
    if (attempt.selectedAgentRef !== M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID) {
      return false;
    }
    return true;
  });
  return matching.length === 1;
}

/**
 * Resolve unique prior succeeded Attempt whose VERIFIED docs-write Evidence
 * matches Project / Cycle / EC / Attempt bindings (shared with Attempt profile).
 *
 * CR-08: supersession ONLY when priorA.ok with exact lineage fields.
 * Ambiguous / incomplete prior A → fail closed (no weak commit Evidence fallback).
 * No prior A → never claim FS→SHA superseded; continue via continuation semantics.
 */
export function resolvePreCommitWorkspaceContinuation(
  input: ResolvePreCommitWorkspaceContinuationInput,
): ResolvePreCommitWorkspaceContinuationResult {
  const priorA = resolveVerifiedDocsWritePriorAttempt({
    contract: {
      executionContractId: input.executionContractId,
      projectId: input.projectId,
      cycleInstanceId: input.cycleInstanceId,
      expectedOutputs: undefined,
      inputs: undefined,
    },
    attempts: input.attempts,
    evidence: input.evidence,
    excludeAttemptId: input.currentAttemptId,
  });

  if (priorA.ok) {
    if (
      input.repositoryRef?.trim() &&
      input.expectedHeadSha?.trim() &&
      isFsAnchorSupersededByVerifiedLocalCommit({
        projectId: input.projectId,
        cycleInstanceId: input.cycleInstanceId,
        executionContractId: input.executionContractId,
        evidence: input.evidence,
        attempts: input.attempts,
        priorAttemptId: priorA.prior.priorAttemptId,
        expectedParentSha: input.expectedHeadSha,
        repositoryRef: input.repositoryRef,
        requiredPaths: [priorA.prior.artifactPath],
      })
    ) {
      return { required: false, descriptor: null };
    }
  } else if (priorA.reason === "docs_write_prior_ambiguous") {
    // CR-08: ambiguous A → fail closed; do NOT evaluate generic commit Evidence.
    if (
      preCommitWorkspaceContinuationRequired({
        authorizedEffects: input.authorizedEffects,
        verifiedEffects: input.verifiedEffects,
      })
    ) {
      return {
        required: true,
        ok: false,
        reason: "continuation_candidate_ambiguous",
        candidateAttemptIds: priorA.candidateAttemptIds,
      };
    }
    return { required: false, descriptor: null };
  } else if (priorA.reason === "docs_write_prior_incomplete") {
    if (
      preCommitWorkspaceContinuationRequired({
        authorizedEffects: input.authorizedEffects,
        verifiedEffects: input.verifiedEffects,
      })
    ) {
      return {
        required: true,
        ok: false,
        reason: "continuation_evidence_incomplete",
      };
    }
    return { required: false, descriptor: null };
  }
  // priorA none: NO FS→SHA supersession. Fall through to continuation semantics.

  if (
    !preCommitWorkspaceContinuationRequired({
      authorizedEffects: input.authorizedEffects,
      verifiedEffects: input.verifiedEffects,
    })
  ) {
    return { required: false, descriptor: null };
  }

  if (!priorA.ok) {
    if (priorA.reason === "docs_write_prior_none") {
      const succeededSameEc = input.attempts.filter(
        (a) =>
          a.attemptId !== input.currentAttemptId &&
          a.executionContractId === input.executionContractId &&
          a.status === "succeeded",
      );
      if (succeededSameEc.length === 0) {
        return { required: false, descriptor: null };
      }
      return {
        required: true,
        ok: false,
        reason: "continuation_candidate_none",
      };
    }
    return {
      required: true,
      ok: false,
      reason: "continuation_evidence_incomplete",
    };
  }

  const only = priorA.prior;
  if (!input.expectedHeadSha || !/^[0-9a-f]{40}$/i.test(input.expectedHeadSha)) {
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
      priorAttemptId: only.priorAttemptId,
      expectedHeadSha: input.expectedHeadSha.toLowerCase(),
      expectedVerifiedFiles: [
        { path: only.artifactPath, digest: only.artifactDigest },
      ],
      evidenceId: only.evidenceId,
    },
  };
}
