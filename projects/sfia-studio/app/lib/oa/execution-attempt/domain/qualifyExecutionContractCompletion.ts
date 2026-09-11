/**
 * D-GCEC-15 — qualify whether an ExecutionContract is complete.
 * Attempt success ≠ contract completion. Completion requires all effective
 * required execution effects to be independently VERIFIED/SATISFIED.
 *
 * CR-GCEC-20: Evidence must bind projectId + cycleInstanceId + executionContractId.
 * CR-GCEC-21: Artifact proof ≠ validation proof; validation only when materialized.
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

/**
 * Durable lineage expected for Evidence used to complete this EC.
 * Prefer contract.projectId / contract.cycleInstanceId; optional caller
 * cycleInstanceId only fills when the durable contract omits it.
 */
export function expectedEvidenceIdentity(input: {
  contract: Pick<
    ExecutionContract,
    "executionContractId" | "projectId" | "cycleInstanceId"
  >;
  cycleInstanceId?: string;
}): {
  projectId: string;
  cycleInstanceId: string | undefined;
  executionContractId: string;
} {
  return {
    projectId: input.contract.projectId,
    cycleInstanceId:
      input.contract.cycleInstanceId ?? input.cycleInstanceId,
    executionContractId: input.contract.executionContractId,
  };
}

/**
 * CR-GCEC-20 — strict durable bindings. ABSENT or MISMATCH ⇒ not matching.
 */
export function evidenceMatchesContractLineage(
  evidence: Evidence,
  expected: {
    projectId: string;
    cycleInstanceId?: string;
    executionContractId: string;
  },
): boolean {
  const b = evidence.bindings;
  if (!b) return false;
  if (!b.projectId || b.projectId !== expected.projectId) return false;
  if (
    !b.executionContractId ||
    b.executionContractId !== expected.executionContractId
  ) {
    return false;
  }
  if (expected.cycleInstanceId) {
    if (
      !b.cycleInstanceId ||
      b.cycleInstanceId !== expected.cycleInstanceId
    ) {
      return false;
    }
  }
  return true;
}

function sourceMatches(
  source: unknown,
  needles: readonly string[],
): boolean {
  if (typeof source !== "string") return false;
  return needles.some((n) => source === n || source.includes(n));
}

function evidenceVerifiedForEffect(
  evidence: readonly Evidence[],
  effect: CursorAuthorizedEffectId,
  expected: {
    projectId: string;
    cycleInstanceId?: string;
    executionContractId: string;
  },
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
    if (!evidenceMatchesContractLineage(e, expected)) return false;

    // CR-GCEC-21 — artifact / workspace prove filesystem; never validation.
    if (effect === "filesystem.create" || effect === "filesystem.modify") {
      if (e.type === "artifact") return true;
      return sourceMatches(e.source, sources);
    }
    if (effect === "validation.run") {
      // Artifact must not satisfy validation; require validation/tests family.
      if (e.type === "artifact") return false;
      return sourceMatches(e.source, sources);
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
    | "projectId"
    | "cycleInstanceId"
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
  const expected = expectedEvidenceIdentity({
    contract: input.contract,
    cycleInstanceId: input.cycleInstanceId,
  });
  const reqs = [
    ...(input.contract.evidenceRequirements ?? []),
    ...(input.contract.expectedOutputs ?? []).map((o) =>
      /artifact/i.test(o) ? "artifact" : o,
    ),
  ];
  const reasons: string[] = [];

  const wantsArtifact =
    reqs.some((r) => /artifact|docs_write|filesystem/i.test(r)) ||
    (input.contract.expectedOutputs ?? []).some((o) => /artifact/i.test(o)) ||
    (input.contract.requiredCapabilities ?? []).some((c) =>
      /docs_write/i.test(c),
    );

  // CR-GCEC-21 — validation only when effectively materialized on the EC.
  const wantsValidation = reqImpliesEffect(reqs, "validation.run");

  const requiredEffects: CursorAuthorizedEffectId[] = [];
  // CR-GCEC-21 — filesystem create OR modify (not both mandatory); never
  // auto-manufacture validation from artifact presence.
  if (wantsArtifact) {
    requiredEffects.push("filesystem.create");
  }
  if (wantsValidation) {
    requiredEffects.push("validation.run");
  }
  for (const effect of GIT_EFFECTS) {
    if (reqImpliesEffect(reqs, effect)) {
      requiredEffects.push(effect);
    }
  }
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
    // Filesystem create OR modify satisfies the artifact/output requirement.
    if (effect === "filesystem.create") {
      const createOk = evidenceVerifiedForEffect(
        evidence,
        "filesystem.create",
        expected,
      );
      const modifyOk = evidenceVerifiedForEffect(
        evidence,
        "filesystem.modify",
        expected,
      );
      if (createOk || modifyOk) {
        if (createOk) verifiedEffects.push("filesystem.create");
        if (modifyOk) verifiedEffects.push("filesystem.modify");
        continue;
      }
      remainingRequiredEffects.push("filesystem.create");
      if (
        (input.reportedExecutedEffects ?? []).some((e) =>
          e.startsWith("filesystem"),
        ) ||
        evidence.some(
          (e) =>
            e.type === "artifact" &&
            (e.status === "available" || e.status === "verified") &&
            evidenceMatchesContractLineage(e, expected),
        )
      ) {
        waitingVerification.push("filesystem.create");
        reasons.push("waiting_verification:filesystem.create");
      } else {
        reasons.push("pending_execution:filesystem.create");
      }
      continue;
    }

    if (evidenceVerifiedForEffect(evidence, effect, expected)) {
      verifiedEffects.push(effect);
      continue;
    }
    remainingRequiredEffects.push(effect);
    if (slice.blockedEffects.includes(effect)) {
      blockedByConfirmation.push(effect);
      reasons.push(`blocked_confirmation:${effect}`);
    } else if ((input.reportedExecutedEffects ?? []).includes(effect)) {
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
