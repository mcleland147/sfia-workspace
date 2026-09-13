/**
 * CORR-D-GCEC-GIT-LIFECYCLE — exact Attempt lineage for verified local commit.
 * Pure Product-truth: Attempt history + VERIFIED git:local_commit Evidence.
 * Zero / multiple eligible candidates → fail closed.
 * AC-03: when repositoryRef expected, Evidence location MUST include matching repo=.
 */
import type { Evidence } from "@/lib/oa/evidence-review";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import type { ExecutionAttempt } from "./types";
import {
  evidenceMatchesContractLineage,
  expectedEvidenceIdentity,
} from "./qualifyExecutionContractCompletion";
import { M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID } from "./realLaunchSafety";

export type VerifiedLocalCommitPriorAttempt = {
  readonly priorAttemptId: string;
  readonly evidenceId: string;
  readonly commitSha: string;
  readonly repositoryRef: string;
};

export type ResolveVerifiedLocalCommitPriorAttemptInput = {
  readonly contract: Pick<
    ExecutionContract,
    | "executionContractId"
    | "projectId"
    | "cycleInstanceId"
    | "expectedOutputs"
    | "inputs"
  >;
  readonly attempts: readonly ExecutionAttempt[];
  readonly evidence: readonly Evidence[];
  readonly excludeAttemptId?: string;
  /** Optional repository identity to bind Evidence location. */
  readonly repositoryRef?: string;
};

export type ResolveVerifiedLocalCommitPriorAttemptResult =
  | { readonly ok: true; readonly prior: VerifiedLocalCommitPriorAttempt }
  | {
      readonly ok: false;
      readonly reason:
        | "local_commit_prior_none"
        | "local_commit_prior_ambiguous"
        | "local_commit_prior_incomplete";
      readonly candidateAttemptIds?: readonly string[];
    };

const FULL_SHA_RE = /^[0-9a-f]{40}$/i;

export function parseLocalCommitShaFromEvidenceLocation(
  location: string,
): { commitSha: string; repositoryRef?: string } | null {
  const loc = String(location ?? "").trim();
  if (!loc.startsWith("git:local_commit")) return null;
  const shaMatch = loc.match(/[?&]commitSha=([^&]+)/);
  if (!shaMatch) return null;
  const commitSha = decodeURIComponent(shaMatch[1]!).trim().toLowerCase();
  if (!FULL_SHA_RE.test(commitSha)) return null;
  const repoMatch = loc.match(/[?&]repo=([^&]+)/);
  const repositoryRef = repoMatch
    ? decodeURIComponent(repoMatch[1]!).trim()
    : undefined;
  return { commitSha, repositoryRef };
}

function isEligibleLocalCommit(
  ev: Evidence,
  expected: {
    projectId: string;
    cycleInstanceId?: string;
    executionContractId: string;
  },
  attemptId: string,
  repositoryRef?: string,
): boolean {
  if (ev.status !== "verified") return false;
  if (ev.source !== "git:local_commit") return false;
  if (!evidenceMatchesContractLineage(ev, expected)) return false;
  if (ev.bindings.executionAttemptId !== attemptId) return false;
  const parsed = parseLocalCommitShaFromEvidenceLocation(String(ev.location ?? ""));
  if (!parsed) return false;
  if (repositoryRef?.trim()) {
    // AC-03: when repositoryRef expected, Evidence MUST include matching repo=.
    if (!parsed.repositoryRef?.trim()) return false;
    if (parsed.repositoryRef !== repositoryRef.trim()) return false;
  }
  return true;
}

/**
 * Resolve the unique prior succeeded local-commit Attempt with matching
 * VERIFIED git:local_commit Evidence for the current EC.
 */
export function resolveVerifiedLocalCommitPriorAttempt(
  input: ResolveVerifiedLocalCommitPriorAttemptInput,
): ResolveVerifiedLocalCommitPriorAttemptResult {
  const expected = expectedEvidenceIdentity({ contract: input.contract });
  const candidates: VerifiedLocalCommitPriorAttempt[] = [];

  for (const attempt of input.attempts) {
    if (
      input.excludeAttemptId &&
      attempt.attemptId === input.excludeAttemptId
    ) {
      continue;
    }
    if (attempt.executionContractId !== input.contract.executionContractId) {
      continue;
    }
    if (attempt.status !== "succeeded") continue;
    if (attempt.selectedAgentRef !== M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID) {
      continue;
    }

    const matching = input.evidence.filter((ev) =>
      isEligibleLocalCommit(
        ev,
        expected,
        attempt.attemptId,
        input.repositoryRef,
      ),
    );
    if (matching.length === 0) continue;
    if (matching.length > 1) {
      return {
        ok: false,
        reason: "local_commit_prior_ambiguous",
        candidateAttemptIds: [attempt.attemptId],
      };
    }
    const ev = matching[0]!;
    const parsed = parseLocalCommitShaFromEvidenceLocation(
      String(ev.location ?? ""),
    );
    if (!parsed) {
      return { ok: false, reason: "local_commit_prior_incomplete" };
    }
    if (input.repositoryRef?.trim() && !parsed.repositoryRef?.trim()) {
      return { ok: false, reason: "local_commit_prior_incomplete" };
    }
    candidates.push({
      priorAttemptId: attempt.attemptId,
      evidenceId: ev.evidenceId,
      commitSha: parsed.commitSha,
      // Never substitute input.repositoryRef for missing Evidence repo.
      repositoryRef: parsed.repositoryRef?.trim() ?? "",
    });
  }

  if (candidates.length === 0) {
    return { ok: false, reason: "local_commit_prior_none" };
  }
  if (candidates.length > 1) {
    return {
      ok: false,
      reason: "local_commit_prior_ambiguous",
      candidateAttemptIds: candidates.map((c) => c.priorAttemptId),
    };
  }

  const only = candidates[0]!;
  if (!FULL_SHA_RE.test(only.commitSha)) {
    return { ok: false, reason: "local_commit_prior_incomplete" };
  }
  if (input.repositoryRef?.trim() && !only.repositoryRef.trim()) {
    return { ok: false, reason: "local_commit_prior_incomplete" };
  }
  return { ok: true, prior: only };
}
