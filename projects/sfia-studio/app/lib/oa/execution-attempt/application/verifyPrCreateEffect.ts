/**
 * Thin application verify wrapper for PR create (Studio READ-ONLY).
 * Calls verifyPullRequestClaim with bindings completeness checks.
 * AC-02/AC-04 — expectedHeadBranch + expectedBaseBranch + expectedHeadSha REQUIRED.
 */
import type { EvidenceReviewServices } from "@/lib/oa/evidence-review";
import type {
  GitVerifyActor,
  GitVerifyBindings,
  RepositoryReadPort,
} from "@/lib/oa/git-ports";
import { verifyPullRequestClaim } from "@/lib/oa/git-ports";

const FORGED_FACT_KEYS = [
  "observed",
  "observedHeadSha",
  "claimedPrNumberOverride",
  "allowTestOnlySyntheticObservation",
] as const;

const FULL_SHA_RE = /^[0-9a-f]{40}$/i;

function bindingsComplete(b: GitVerifyBindings): boolean {
  return (
    Boolean(b.projectId?.trim()) &&
    Boolean(b.cycleInstanceId?.trim()) &&
    Boolean(b.executionContractId?.trim()) &&
    Boolean(b.executionAttemptId?.trim())
  );
}

export type VerifyPrCreateEffectInput = {
  readonly repositoryRead: RepositoryReadPort;
  readonly evidenceServices: EvidenceReviewServices;
  readonly repositoryRef: string;
  readonly claimedPrNumber: number;
  readonly claimedHeadSha: string;
  readonly expectedHeadBranch: string;
  readonly expectedBaseBranch: string;
  readonly expectedHeadSha: string;
  readonly expectedBindings: GitVerifyBindings;
  readonly actor: GitVerifyActor;
  readonly nowIso?: string;
};

export type VerifyPrCreateEffectResult =
  | {
      readonly ok: true;
      readonly evidenceId: string;
      readonly status: "verified";
      readonly prNumber: number;
      readonly headSha: string;
      readonly headBranch: string;
      readonly baseBranch: string;
    }
  | { readonly ok: false; readonly reason: string; readonly status: "reported" | "failed" };

export async function verifyPrCreateEffect(
  input: VerifyPrCreateEffectInput,
): Promise<VerifyPrCreateEffectResult> {
  const raw = input as Record<string, unknown>;
  for (const key of FORGED_FACT_KEYS) {
    if (key in raw && raw[key] !== undefined) {
      return {
        ok: false,
        reason: "pr_create_forged_observation_rejected",
        status: "failed",
      };
    }
  }
  if (!input.expectedBindings || !bindingsComplete(input.expectedBindings)) {
    return {
      ok: false,
      reason: "git_evidence_bindings_incomplete",
      status: "failed",
    };
  }
  if (
    typeof input.expectedHeadBranch !== "string" ||
    !input.expectedHeadBranch.trim()
  ) {
    return {
      ok: false,
      reason: "pr_create_expected_head_branch_missing",
      status: "failed",
    };
  }
  if (
    typeof input.expectedBaseBranch !== "string" ||
    !input.expectedBaseBranch.trim()
  ) {
    return {
      ok: false,
      reason: "pr_create_expected_base_branch_missing",
      status: "failed",
    };
  }
  if (
    typeof input.expectedHeadSha !== "string" ||
    !FULL_SHA_RE.test(input.expectedHeadSha.trim())
  ) {
    return {
      ok: false,
      reason: "pr_create_expected_head_sha_invalid",
      status: "failed",
    };
  }
  const expectedHeadSha = input.expectedHeadSha.trim().toLowerCase();
  if (input.claimedHeadSha.trim().toLowerCase() !== expectedHeadSha) {
    return {
      ok: false,
      reason: "pr_create_claimed_head_sha_mismatch",
      status: "failed",
    };
  }
  return verifyPullRequestClaim({
    repositoryRead: input.repositoryRead,
    evidenceServices: input.evidenceServices,
    repositoryRef: input.repositoryRef,
    claimedPrNumber: input.claimedPrNumber,
    claimedHeadSha: input.claimedHeadSha,
    expectedHeadBranch: input.expectedHeadBranch.trim(),
    expectedBaseBranch: input.expectedBaseBranch.trim(),
    expectedHeadSha,
    bindings: input.expectedBindings,
    actor: input.actor,
    nowIso: input.nowIso,
  });
}
