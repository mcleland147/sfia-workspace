/**
 * CR-GCEC-23 — server-derived Confirmation target for protected Git effects.
 * Caller/request confirmationMatch MUST NOT define canonical resource identity.
 * Pure application/domain projection — no persistence.
 */
import type { Evidence } from "@/lib/oa/evidence-review";
import type { ProjectRepositoryBinding } from "@/lib/oa/project";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import type { CursorAuthorizedEffectId } from "./cursorExecutionReport";
import type { GitEffectConfirmationMatch } from "./authorizedExecutionSlice";

export type ResolvedGitEffectTarget = {
  executionContractId: string;
  projectId: string;
  cycleInstanceId?: string;
  repositoryRef: string;
  branchOrRef?: string;
  prNumber?: number;
  actorId: string;
  effect: Extract<
    CursorAuthorizedEffectId,
    "git.commit" | "git.push" | "github.pr.create" | "github.pr.merge"
  >;
};

export type ResolveGitEffectTargetInput = {
  effect: ResolvedGitEffectTarget["effect"];
  contract: Pick<
    ExecutionContract,
    "executionContractId" | "projectId" | "cycleInstanceId" | "inputs"
  >;
  /** Canonical Project.repositoryBinding — required for protected Git. */
  projectRepositoryBinding: ProjectRepositoryBinding;
  /**
   * Projected docs-write / EC repositoryRef when present.
   * MUST match Project.repositoryBinding.identity or resolution fails.
   */
  projectedRepositoryRef?: string;
  actorId: string;
  /** VERIFIED Evidence for this project (PR identity source). */
  verifiedEvidence?: readonly Evidence[];
};

export type ResolveGitEffectTargetResult =
  | { ok: true; target: ResolvedGitEffectTarget }
  | { ok: false; reason: string };

function asNonEmptyString(value: unknown): string | undefined {
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

function branchFromContractInputs(
  inputs: Record<string, unknown> | undefined,
): string | undefined {
  if (!inputs) return undefined;
  return (
    asNonEmptyString(inputs.workingBranch) ??
    asNonEmptyString(inputs.branchName) ??
    asNonEmptyString(inputs.headRef)
  );
}

/**
 * Extract a single trustworthy PR identity from VERIFIED git:pull_request Evidence
 * bound to the same project / cycle / EC / repository.
 * Fail closed when zero or ambiguous.
 * AC-04 — complete identity required for eligibility:
 * repo + prNumber + state + headBranch + headSha + baseBranch (baseSha optional).
 * Same prNumber with differing identity fields → ambiguous.
 */
export function resolveVerifiedPullRequestNumber(input: {
  evidence: readonly Evidence[];
  projectId: string;
  cycleInstanceId?: string;
  executionContractId: string;
  repositoryRef: string;
}):
  | {
      ok: true;
      prNumber: number;
      repositoryRef: string;
      headSha: string;
      headBranch: string;
      baseBranch: string;
      state: string;
      baseSha?: string;
    }
  | { ok: false; reason: string } {
  type CompleteIdentity = {
    repositoryRef: string;
    prNumber: number;
    state: string;
    headBranch: string;
    headSha: string;
    baseBranch: string;
    baseSha?: string;
  };
  const FULL_SHA_RE = /^[0-9a-f]{40}$/i;
  const matches: CompleteIdentity[] = [];
  for (const e of input.evidence) {
    if (e.status !== "verified") continue;
    if (e.source !== "git:pull_request") continue;
    const b = e.bindings;
    if (!b?.projectId || b.projectId !== input.projectId) continue;
    if (
      !b.executionContractId ||
      b.executionContractId !== input.executionContractId
    ) {
      continue;
    }
    if (
      input.cycleInstanceId &&
      (!b.cycleInstanceId || b.cycleInstanceId !== input.cycleInstanceId)
    ) {
      continue;
    }
    const loc = typeof e.location === "string" ? e.location : "";
    const repoMatch = loc.match(/[?&]repo=([^&]+)/);
    if (!repoMatch) continue;
    const repo = decodeURIComponent(repoMatch[1]!).trim();
    if (!repo || repo !== input.repositoryRef) continue;
    const prMatch = loc.match(/[?&]prNumber=([^&]+)/);
    if (!prMatch) continue;
    const n = Number(decodeURIComponent(prMatch[1]!));
    if (!Number.isInteger(n) || n < 1) continue;
    const headShaMatch = loc.match(/[?&]headSha=([^&]+)/);
    const headBranchMatch = loc.match(/[?&]headBranch=([^&]+)/);
    const baseBranchMatch = loc.match(/[?&]baseBranch=([^&]+)/);
    const stateMatch = loc.match(/[?&]state=([^&]+)/);
    if (!headShaMatch || !headBranchMatch || !baseBranchMatch || !stateMatch) {
      continue;
    }
    const headSha = decodeURIComponent(headShaMatch[1]!).trim().toLowerCase();
    const headBranch = decodeURIComponent(headBranchMatch[1]!).trim();
    const baseBranch = decodeURIComponent(baseBranchMatch[1]!).trim();
    const state = decodeURIComponent(stateMatch[1]!).trim();
    if (!FULL_SHA_RE.test(headSha) || !headBranch || !baseBranch || !state) {
      continue;
    }
    const baseShaMatch = loc.match(/[?&]baseSha=([^&]+)/);
    const baseSha = baseShaMatch
      ? decodeURIComponent(baseShaMatch[1]!).trim().toLowerCase()
      : undefined;
    if (baseSha != null && baseSha !== "" && !FULL_SHA_RE.test(baseSha)) {
      continue;
    }
    matches.push({
      repositoryRef: repo,
      prNumber: n,
      state,
      headBranch,
      headSha,
      baseBranch,
      ...(baseSha ? { baseSha } : {}),
    });
  }

  // Deduplicate exact identical complete identities.
  const identityKey = (m: CompleteIdentity) =>
    [
      m.repositoryRef,
      m.prNumber,
      m.state,
      m.headBranch,
      m.headSha,
      m.baseBranch,
      m.baseSha ?? "",
    ].join("\0");
  const uniqueByKey = new Map<string, CompleteIdentity>();
  for (const m of matches) {
    uniqueByKey.set(identityKey(m), m);
  }
  const unique = [...uniqueByKey.values()];
  if (unique.length === 0) {
    return { ok: false, reason: "verified_pull_request_identity_missing" };
  }
  const uniqueNumbers = [...new Set(unique.map((m) => m.prNumber))];
  if (uniqueNumbers.length > 1) {
    return { ok: false, reason: "verified_pull_request_identity_ambiguous" };
  }
  if (unique.length > 1) {
    // Same prNumber with differing headSha / headBranch / baseBranch / state / repo.
    return { ok: false, reason: "verified_pull_request_identity_ambiguous" };
  }
  const chosen = unique[0]!;
  return {
    ok: true,
    prNumber: chosen.prNumber,
    repositoryRef: chosen.repositoryRef,
    headSha: chosen.headSha,
    headBranch: chosen.headBranch,
    baseBranch: chosen.baseBranch,
    state: chosen.state,
    ...(chosen.baseSha ? { baseSha: chosen.baseSha } : {}),
  };
}

/**
 * Resolve canonical Git Confirmation target from durable Product truth only.
 */
export function resolveGitEffectTarget(
  input: ResolveGitEffectTargetInput,
): ResolveGitEffectTargetResult {
  const bindingIdentity = input.projectRepositoryBinding.identity?.trim();
  if (!bindingIdentity) {
    return { ok: false, reason: "project_repository_binding_missing" };
  }

  if (
    input.projectedRepositoryRef &&
    input.projectedRepositoryRef.trim() &&
    input.projectedRepositoryRef.trim() !== bindingIdentity
  ) {
    return {
      ok: false,
      reason: "projected_repository_ref_mismatch_project_binding",
    };
  }

  const inputs =
    input.contract.inputs && typeof input.contract.inputs === "object"
      ? (input.contract.inputs as Record<string, unknown>)
      : undefined;

  const workingBranch = branchFromContractInputs(inputs);
  const defaultBranch =
    input.projectRepositoryBinding.defaultBranch?.trim() || "main";

  let branchOrRef: string | undefined;
  let prNumber: number | undefined;

  switch (input.effect) {
    case "git.commit":
    case "git.push":
    case "github.pr.create":
      branchOrRef = workingBranch;
      break;
    case "github.pr.merge": {
      branchOrRef = defaultBranch;
      const pr = resolveVerifiedPullRequestNumber({
        evidence: input.verifiedEvidence ?? [],
        projectId: input.contract.projectId,
        cycleInstanceId: input.contract.cycleInstanceId,
        executionContractId: input.contract.executionContractId,
        repositoryRef: bindingIdentity,
      });
      if (!pr.ok) {
        return { ok: false, reason: pr.reason };
      }
      prNumber = pr.prNumber;
      break;
    }
  }

  return {
    ok: true,
    target: {
      executionContractId: input.contract.executionContractId,
      projectId: input.contract.projectId,
      cycleInstanceId: input.contract.cycleInstanceId,
      repositoryRef: bindingIdentity,
      branchOrRef,
      prNumber,
      actorId: input.actorId,
      effect: input.effect,
    },
  };
}

export function resolvedTargetToConfirmationMatch(
  target: ResolvedGitEffectTarget,
): GitEffectConfirmationMatch {
  return {
    executionContractId: target.executionContractId,
    repositoryRef: target.repositoryRef,
    branchOrRef: target.branchOrRef,
    prNumber: target.prNumber,
    actorId: target.actorId,
  };
}

/**
 * Hostile request assertion — compare to server truth. Never builds the target.
 * Missing fields on assertion are ignored; present mismatches refuse.
 */
export function assertConfirmationMatchAgreesWithServerTarget(input: {
  assertion?: {
    repositoryRef?: string;
    branchOrRef?: string;
    prNumber?: number;
    actorId?: string;
  };
  server: ResolvedGitEffectTarget;
}): { ok: true } | { ok: false; reason: string } {
  const a = input.assertion;
  if (!a) return { ok: true };
  if (
    a.repositoryRef != null &&
    a.repositoryRef.trim() &&
    a.repositoryRef.trim() !== input.server.repositoryRef
  ) {
    return { ok: false, reason: "hostile_confirmation_match_repository_mismatch" };
  }
  if (
    a.branchOrRef != null &&
    a.branchOrRef.trim() &&
    a.branchOrRef.trim() !== (input.server.branchOrRef ?? "")
  ) {
    return { ok: false, reason: "hostile_confirmation_match_branch_mismatch" };
  }
  if (
    a.prNumber != null &&
    a.prNumber !== input.server.prNumber
  ) {
    return { ok: false, reason: "hostile_confirmation_match_pr_mismatch" };
  }
  if (
    a.actorId != null &&
    a.actorId.trim() &&
    a.actorId.trim() !== input.server.actorId
  ) {
    return { ok: false, reason: "hostile_confirmation_match_actor_mismatch" };
  }
  return { ok: true };
}
