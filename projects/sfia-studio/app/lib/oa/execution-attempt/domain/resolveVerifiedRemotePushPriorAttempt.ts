/**
 * CORR-D-GCEC-GIT-LIFECYCLE — exact Attempt lineage for verified remote push.
 * Pure Product-truth: Attempt history + VERIFIED git:remote_push Evidence.
 * Zero / multiple eligible candidates → fail closed.
 * AC-03: Evidence MUST carry explicit repo + refName + commitSha — no substitute.
 */
import type { Evidence } from "@/lib/oa/evidence-review";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import type { ExecutionAttempt } from "./types";
import {
  evidenceMatchesContractLineage,
  expectedEvidenceIdentity,
} from "./qualifyExecutionContractCompletion";
import { M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID } from "./realLaunchSafety";

export type VerifiedRemotePushPriorAttempt = {
  readonly priorAttemptId: string;
  readonly evidenceId: string;
  readonly commitSha: string;
  readonly repositoryRef: string;
  /** Required — Evidence refName / branch for C→D binding. */
  readonly branchName: string;
};

export type ResolveVerifiedRemotePushPriorAttemptInput = {
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
  readonly repositoryRef?: string;
};

export type ResolveVerifiedRemotePushPriorAttemptResult =
  | { readonly ok: true; readonly prior: VerifiedRemotePushPriorAttempt }
  | {
      readonly ok: false;
      readonly reason:
        | "remote_push_prior_none"
        | "remote_push_prior_ambiguous"
        | "remote_push_prior_incomplete";
      readonly candidateAttemptIds?: readonly string[];
    };

const FULL_SHA_RE = /^[0-9a-f]{40}$/i;

export function parseRemotePushFromEvidenceLocation(
  location: string,
): {
  commitSha: string;
  repositoryRef?: string;
  branchName?: string;
} | null {
  const loc = String(location ?? "").trim();
  if (!loc.startsWith("git:remote_push")) return null;
  const shaMatch = loc.match(/[?&]commitSha=([^&]+)/);
  if (!shaMatch) return null;
  const commitSha = decodeURIComponent(shaMatch[1]!).trim().toLowerCase();
  if (!FULL_SHA_RE.test(commitSha)) return null;
  const repoMatch = loc.match(/[?&]repo=([^&]+)/);
  const repositoryRef = repoMatch
    ? decodeURIComponent(repoMatch[1]!).trim()
    : undefined;
  const refMatch = loc.match(/[?&]refName=([^&]+)/);
  let branchName: string | undefined;
  if (refMatch) {
    const refName = decodeURIComponent(refMatch[1]!).trim();
    branchName = refName.startsWith("refs/heads/")
      ? refName.slice("refs/heads/".length)
      : refName;
  }
  return { commitSha, repositoryRef, branchName };
}

function isEligibleRemotePush(
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
  if (ev.source !== "git:remote_push") return false;
  if (!evidenceMatchesContractLineage(ev, expected)) return false;
  if (ev.bindings.executionAttemptId !== attemptId) return false;
  const parsed = parseRemotePushFromEvidenceLocation(String(ev.location ?? ""));
  if (!parsed) return false;
  // AC-03: repo + branchName + commitSha are mandatory for eligibility.
  if (!parsed.repositoryRef?.trim()) return false;
  if (!parsed.branchName?.trim()) return false;
  if (!FULL_SHA_RE.test(parsed.commitSha)) return false;
  if (repositoryRef?.trim()) {
    // When repositoryRef expected: Evidence repo MUST equal — missing already failed above.
    if (parsed.repositoryRef !== repositoryRef.trim()) return false;
  }
  return true;
}

/**
 * Resolve the unique prior succeeded remote-push Attempt with matching
 * VERIFIED git:remote_push Evidence for the current EC.
 */
export function resolveVerifiedRemotePushPriorAttempt(
  input: ResolveVerifiedRemotePushPriorAttemptInput,
): ResolveVerifiedRemotePushPriorAttemptResult {
  const expected = expectedEvidenceIdentity({ contract: input.contract });
  const candidates: VerifiedRemotePushPriorAttempt[] = [];

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
    if (attempt.selectedAgentRef !== M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID) {
      continue;
    }

    const matching = input.evidence.filter((ev) =>
      isEligibleRemotePush(
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
        reason: "remote_push_prior_ambiguous",
        candidateAttemptIds: [attempt.attemptId],
      };
    }
    const ev = matching[0]!;
    const parsed = parseRemotePushFromEvidenceLocation(String(ev.location ?? ""));
    if (
      !parsed ||
      !parsed.repositoryRef?.trim() ||
      !parsed.branchName?.trim() ||
      !FULL_SHA_RE.test(parsed.commitSha)
    ) {
      return { ok: false, reason: "remote_push_prior_incomplete" };
    }
    // Never substitute input.repositoryRef for missing Evidence repo.
    candidates.push({
      priorAttemptId: attempt.attemptId,
      evidenceId: ev.evidenceId,
      commitSha: parsed.commitSha,
      repositoryRef: parsed.repositoryRef.trim(),
      branchName: parsed.branchName.trim(),
    });
  }

  if (candidates.length === 0) {
    return { ok: false, reason: "remote_push_prior_none" };
  }
  if (candidates.length > 1) {
    return {
      ok: false,
      reason: "remote_push_prior_ambiguous",
      candidateAttemptIds: candidates.map((c) => c.priorAttemptId),
    };
  }

  const only = candidates[0]!;
  if (!FULL_SHA_RE.test(only.commitSha) || !only.branchName.trim()) {
    return { ok: false, reason: "remote_push_prior_incomplete" };
  }
  return { ok: true, prior: only };
}
