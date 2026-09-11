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
 * Extract a single trustworthy PR number from VERIFIED git:pull_request Evidence
 * bound to the same project / cycle / EC / repository.
 * Fail closed when zero or ambiguous.
 * CR-GCEC-23H-C — repository identity MUST be present and exact (no repo → reject).
 */
export function resolveVerifiedPullRequestNumber(input: {
  evidence: readonly Evidence[];
  projectId: string;
  cycleInstanceId?: string;
  executionContractId: string;
  repositoryRef: string;
}): { ok: true; prNumber: number } | { ok: false; reason: string } {
  const matches: number[] = [];
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
    // CR-GCEC-23H-C — repository identity is mandatory; absent ⇒ ineligible.
    if (!repoMatch) continue;
    const repo = decodeURIComponent(repoMatch[1]!);
    if (!repo.trim() || repo !== input.repositoryRef) continue;
    const prMatch = loc.match(/[?&]prNumber=([^&]+)/);
    if (!prMatch) continue;
    const n = Number(decodeURIComponent(prMatch[1]!));
    if (!Number.isInteger(n) || n < 1) continue;
    matches.push(n);
  }
  const unique = [...new Set(matches)];
  if (unique.length === 0) {
    return { ok: false, reason: "verified_pull_request_identity_missing" };
  }
  if (unique.length > 1) {
    return { ok: false, reason: "verified_pull_request_identity_ambiguous" };
  }
  return { ok: true, prNumber: unique[0]! };
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
