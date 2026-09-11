/**
 * D-GCEC-15 — qualify whether an ExecutionContract is complete.
 * Attempt success ≠ contract completion. Completion requires all effective
 * required execution effects to be independently VERIFIED/SATISFIED.
 */
import type { Confirmation } from "@/lib/oa/decision";
import type { Evidence } from "@/lib/oa/evidence-review";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import {
  deriveAuthorizedExecutionSlice,
  type AuthorizedExecutionSlice,
} from "./authorizedExecutionSlice";
import type { CursorAuthorizedEffectId } from "./cursorExecutionReport";

export type ExecutionContractCompletionQualification = {
  complete: boolean;
  /** Next EC status after a successful Attempt while executing. */
  nextStatusAfterSuccessfulAttempt: "confirmed" | "completed";
  remainingRequiredEffects: CursorAuthorizedEffectId[];
  verifiedEffects: CursorAuthorizedEffectId[];
  blockedByConfirmation: CursorAuthorizedEffectId[];
  waitingVerification: CursorAuthorizedEffectId[];
  reasons: string[];
};

const GIT_EFFECTS: CursorAuthorizedEffectId[] = [
  "git.commit",
  "git.push",
  "github.pr.create",
  "github.pr.merge",
];

const FILE_EFFECTS: CursorAuthorizedEffectId[] = [
  "filesystem.create",
  "filesystem.modify",
  "validation.run",
];

function evidenceVerifiedForEffect(
  evidence: readonly Evidence[],
  effect: CursorAuthorizedEffectId,
  cycleInstanceId?: string,
): boolean {
  const sourceByEffect: Partial<Record<CursorAuthorizedEffectId, string[]>> = {
    "filesystem.create": ["artifact", "docs_write", "workspace"],
    "filesystem.modify": ["artifact", "docs_write", "workspace"],
    "validation.run": ["validation", "tests"],
    "git.commit": ["git:local_commit", "git:commit"],
    "git.push": ["git:remote_push", "git:push"],
    "github.pr.create": ["git:pull_request"],
    "github.pr.merge": ["git:merge", "git:post_merge_verification"],
  };
  const sources = sourceByEffect[effect] ?? [];
  return evidence.some((e) => {
    if (e.status !== "verified") return false;
    if (
      cycleInstanceId &&
      e.bindings?.cycleInstanceId &&
      e.bindings.cycleInstanceId !== cycleInstanceId
    ) {
      return false;
    }
    if (effect.startsWith("filesystem") || effect === "validation.run") {
      return (
        e.type === "artifact" ||
        sources.some((s) => typeof e.source === "string" && e.source.includes(s))
      );
    }
    return sources.includes(String(e.source));
  });
}

function reqImpliesEffect(
  reqs: readonly string[],
  effect: CursorAuthorizedEffectId,
): boolean {
  return reqs.some((r) => {
    if (effect === "git.commit")
      return r === "git:local_commit" || r === "git:commit";
    if (effect === "git.push")
      return r === "git:remote_push" || r === "git:push";
    if (effect === "github.pr.create") return r === "git:pull_request";
    if (effect === "github.pr.merge")
      return r === "git:merge" || r === "git:post_merge_verification";
    if (effect === "filesystem.create" || effect === "filesystem.modify") {
      return (
        /artifact|docs_write|filesystem/i.test(r) ||
        r === "artifact" ||
        reqs.length === 0
      );
    }
    if (effect === "validation.run") return /validation|tests?/i.test(r);
    return false;
  });
}

/**
 * Qualify contract completion from durable facts (EC + Evidence + Confirmations).
 * Does not mutate state.
 */
export function qualifyExecutionContractCompletion(input: {
  contract: Pick<
    ExecutionContract,
    | "executionContractId"
    | "evidenceRequirements"
    | "expectedOutputs"
    | "requiredCapabilities"
  >;
  evidence?: readonly Evidence[];
  confirmations?: readonly Confirmation[];
  cycleInstanceId?: string;
  nowIso?: string;
  /** Prior executed effects claimed by terminal Attempts (optional). */
  reportedExecutedEffects?: readonly CursorAuthorizedEffectId[];
}): ExecutionContractCompletionQualification {
  const evidence = input.evidence ?? [];
  const reqs = [
    ...(input.contract.evidenceRequirements ?? []),
    ...(input.contract.expectedOutputs ?? []).map((o) =>
      /artifact/i.test(o) ? "artifact" : o,
    ),
  ];
  const reasons: string[] = [];

  // Baseline filesystem+validation for docs-write / artifact contracts
  const wantsArtifact =
    reqs.some((r) => /artifact|docs_write|filesystem/i.test(r)) ||
    (input.contract.expectedOutputs ?? []).some((o) => /artifact/i.test(o)) ||
    (input.contract.requiredCapabilities ?? []).some((c) =>
      /docs_write/i.test(c),
    );

  const requiredEffects: CursorAuthorizedEffectId[] = [];
  if (wantsArtifact) {
    requiredEffects.push(...FILE_EFFECTS);
  }
  for (const effect of GIT_EFFECTS) {
    if (reqImpliesEffect(reqs, effect)) {
      requiredEffects.push(effect);
    }
  }
  // post_merge is verified via merge/post_merge evidence; treat as part of merge family
  if (reqs.includes("git:post_merge_verification")) {
    if (!requiredEffects.includes("github.pr.merge")) {
      requiredEffects.push("github.pr.merge");
    }
  }

  const slice: AuthorizedExecutionSlice = deriveAuthorizedExecutionSlice({
    executionContractId: input.contract.executionContractId,
    evidenceRequirements: input.contract.evidenceRequirements ?? [],
    requiredCapabilities: input.contract.requiredCapabilities ?? [],
    confirmations: input.confirmations ?? [],
    nowIso: input.nowIso,
  });

  const verifiedEffects: CursorAuthorizedEffectId[] = [];
  const waitingVerification: CursorAuthorizedEffectId[] = [];
  const remainingRequiredEffects: CursorAuthorizedEffectId[] = [];
  const blockedByConfirmation: CursorAuthorizedEffectId[] = [];

  for (const effect of requiredEffects) {
    if (evidenceVerifiedForEffect(evidence, effect, input.cycleInstanceId)) {
      verifiedEffects.push(effect);
      continue;
    }
    remainingRequiredEffects.push(effect);
    if (slice.blockedEffects.includes(effect)) {
      blockedByConfirmation.push(effect);
      reasons.push(`blocked_confirmation:${effect}`);
    } else if (
      (input.reportedExecutedEffects ?? []).includes(effect) ||
      // artifact often reported as available before verify
      (effect.startsWith("filesystem") &&
        evidence.some(
          (e) =>
            e.type === "artifact" &&
            (e.status === "available" || e.status === "verified"),
        ))
    ) {
      waitingVerification.push(effect);
      reasons.push(`waiting_verification:${effect}`);
    } else {
      reasons.push(`pending_execution:${effect}`);
    }
  }

  const complete = remainingRequiredEffects.length === 0;
  if (!complete && remainingRequiredEffects.length > 0) {
    reasons.push("effective_requirements_remain");
  }

  return {
    complete,
    nextStatusAfterSuccessfulAttempt: complete ? "completed" : "confirmed",
    remainingRequiredEffects,
    verifiedEffects,
    blockedByConfirmation,
    waitingVerification,
    reasons,
  };
}
