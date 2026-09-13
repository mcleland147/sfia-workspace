/**
 * Thin application verify wrapper for remote push (Studio READ-ONLY).
 * Calls verifyPushClaim with bindings completeness checks.
 * Mirrors verifyLocalCommitEffect hostility rejection lightly.
 */
import type { EvidenceReviewServices } from "@/lib/oa/evidence-review";
import type {
  GitVerifyActor,
  GitVerifyBindings,
  RepositoryReadPort,
} from "@/lib/oa/git-ports";
import { verifyPushClaim } from "@/lib/oa/git-ports";

const FORGED_FACT_KEYS = [
  "observed",
  "observedHeadSha",
  "claimedCommitShaOverride",
  "allowTestOnlySyntheticObservation",
] as const;

function bindingsComplete(b: GitVerifyBindings): boolean {
  return (
    Boolean(b.projectId?.trim()) &&
    Boolean(b.cycleInstanceId?.trim()) &&
    Boolean(b.executionContractId?.trim()) &&
    Boolean(b.executionAttemptId?.trim())
  );
}

export type VerifyRemotePushEffectInput = {
  readonly repositoryRead: RepositoryReadPort;
  readonly evidenceServices: EvidenceReviewServices;
  readonly repositoryRef: string;
  readonly branch: string;
  readonly claimedCommitSha: string;
  readonly remote?: string;
  readonly expectedBindings: GitVerifyBindings;
  readonly actor: GitVerifyActor;
  readonly nowIso?: string;
};

export type VerifyRemotePushEffectResult =
  | { readonly ok: true; readonly evidenceId: string; readonly status: "verified" }
  | { readonly ok: false; readonly reason: string; readonly status: "reported" | "failed" };

export async function verifyRemotePushEffect(
  input: VerifyRemotePushEffectInput,
): Promise<VerifyRemotePushEffectResult> {
  const raw = input as Record<string, unknown>;
  for (const key of FORGED_FACT_KEYS) {
    if (key in raw && raw[key] !== undefined) {
      return {
        ok: false,
        reason: "remote_push_forged_observation_rejected",
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
  return verifyPushClaim({
    repositoryRead: input.repositoryRead,
    evidenceServices: input.evidenceServices,
    repositoryRef: input.repositoryRef,
    branch: input.branch,
    claimedCommitSha: input.claimedCommitSha,
    remote: input.remote,
    bindings: input.expectedBindings,
    actor: input.actor,
    nowIso: input.nowIso,
  });
}
