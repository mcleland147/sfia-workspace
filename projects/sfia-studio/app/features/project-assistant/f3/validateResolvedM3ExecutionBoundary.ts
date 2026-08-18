/**
 * READ-ONLY / FAIL-CLOSED M3 server execution boundary validator.
 *
 * Treats executionContractId as hostile input: revalidates exact canonical
 * M3 PREPARE lineage + resolution idempotency + fixture-safe profile before
 * Confirmation / Select / Start.
 *
 * Does NOT mutate Decision / Contract / Attempt / Evidence.
 */

import type {
  DecisionServices,
  HumanDecision,
  MemoryAuthorityResolver,
} from "@/lib/oa/decision";
import type {
  ExecutionContract,
  ExecutionContractServices,
} from "@/lib/oa/execution-contract";
import {
  UNRESOLVED_STOP_SENTINELS,
  canonicalM3PrepareContractId,
  canonicalM3PrepareIdempotencyKey,
  canonicalM3ResolutionIdempotencyKey,
} from "./resolveM3ExecutionContract";
import { authorizedM3ResolutionKind } from "./selectProductM3ResolutionProfile";

export type ValidateResolvedM3BoundaryDeps = {
  decisionServices: DecisionServices;
  executionContractServices: ExecutionContractServices;
  /** Present for caller convenience — not used for mutation here. */
  authorityResolver?: MemoryAuthorityResolver;
};

export type ValidateResolvedM3BoundarySuccess = {
  ok: true;
  decision: HumanDecision;
  original: ExecutionContract;
  successor: ExecutionContract;
};

export type ValidateResolvedM3BoundaryFailure = {
  ok: false;
  code: string;
  message: string;
};

function decisionRefsExact(
  refs: readonly string[] | undefined,
  decisionId: string,
): boolean {
  return (
    Array.isArray(refs) && refs.length === 1 && refs[0] === decisionId
  );
}

export async function validateResolvedM3ExecutionBoundary(input: {
  projectId: string;
  decisionId: string;
  executionContractId: string;
  deps: ValidateResolvedM3BoundaryDeps;
}): Promise<
  ValidateResolvedM3BoundarySuccess | ValidateResolvedM3BoundaryFailure
> {
  const decisionLoaded =
    await input.deps.decisionServices.getHumanDecision.execute({
      decisionId: input.decisionId,
    });
  if (!decisionLoaded.ok) {
    return {
      ok: false,
      code: decisionLoaded.error.detailCode,
      message: decisionLoaded.error.message,
    };
  }
  const decision = decisionLoaded.decision;
  if (decision.projectId !== input.projectId) {
    return {
      ok: false,
      code: "PROJECT_MISMATCH",
      message: "Decision does not belong to this project.",
    };
  }
  if (decision.status !== "accepted") {
    return {
      ok: false,
      code: "DECISION_NOT_CURRENT",
      message: `Decision status ${decision.status} is not accepted for execute.`,
    };
  }
  if (!decision.decisionBasis) {
    return {
      ok: false,
      code: "DECISION_BASIS_REQUIRED",
      message: "HumanDecision lacks DecisionBasis — cannot execute M3 path.",
    };
  }
  if (decision.decisionBasis.projectId !== input.projectId) {
    return {
      ok: false,
      code: "DECISION_BASIS_PROJECT_MISMATCH",
      message: "DecisionBasis.projectId does not match project.",
    };
  }

  const canonicalPrepareId = canonicalM3PrepareContractId(input.decisionId);
  const canonicalPrepareIdem =
    canonicalM3PrepareIdempotencyKey(input.decisionId);

  const originalLoaded =
    await input.deps.executionContractServices.getExecutionContract.execute({
      executionContractId: canonicalPrepareId,
    });
  if (!originalLoaded.ok) {
    return {
      ok: false,
      code: "CANONICAL_M3_PREPARE_NOT_FOUND",
      message:
        "Canonical M3 PREPARE contract missing for this HumanDecision.",
    };
  }
  const original = originalLoaded.contract;
  if (original.executionContractId !== canonicalPrepareId) {
    return {
      ok: false,
      code: "CANONICAL_M3_PREPARE_ID_MISMATCH",
      message: "Loaded PREPARE id is not the canonical M3 PREPARE identity.",
    };
  }
  if (original.idempotencyKey !== canonicalPrepareIdem) {
    return {
      ok: false,
      code: "CANONICAL_M3_PREPARE_IDEMPOTENCY_MISMATCH",
      message:
        "Canonical PREPARE idempotencyKey is not the canonical M3 PREPARE identity.",
    };
  }
  if (original.projectId !== input.projectId) {
    return {
      ok: false,
      code: "CANONICAL_M3_PREPARE_PROJECT_MISMATCH",
      message: "Canonical PREPARE does not belong to this project.",
    };
  }
  if (original.requiredAuthority !== "MORRIS") {
    return {
      ok: false,
      code: "CANONICAL_M3_PREPARE_AUTHORITY_MISMATCH",
      message: "Canonical PREPARE must require MORRIS authority.",
    };
  }
  if (!decisionRefsExact(original.decisionRefs, input.decisionId)) {
    return {
      ok: false,
      code: "CANONICAL_M3_PREPARE_DECISION_REF_MISMATCH",
      message:
        "Canonical PREPARE decisionRefs must bind exactly the HumanDecision.",
    };
  }

  const successorLoaded =
    await input.deps.executionContractServices.getExecutionContract.execute({
      executionContractId: input.executionContractId,
    });
  if (!successorLoaded.ok) {
    return {
      ok: false,
      code: successorLoaded.error.detailCode,
      message: successorLoaded.error.message,
    };
  }
  const successor = successorLoaded.contract;

  if (successor.executionContractId !== input.executionContractId) {
    return {
      ok: false,
      code: "SUCCESSOR_ID_MISMATCH",
      message: "Loaded successor id does not match requested contract.",
    };
  }
  if (successor.projectId !== input.projectId) {
    return {
      ok: false,
      code: "CONTRACT_PROJECT_MISMATCH",
      message: "Le contrat n'appartient pas à ce projet.",
    };
  }
  if (successor.requiredAuthority !== "MORRIS") {
    return {
      ok: false,
      code: "CONTRACT_AUTHORITY_MISMATCH",
      message: "Resolved M3 successor must require MORRIS authority.",
    };
  }
  if (!decisionRefsExact(successor.decisionRefs, input.decisionId)) {
    return {
      ok: false,
      code: "CONTRACT_DECISION_REF_MISMATCH",
      message: "Successor decisionRefs must bind exactly the HumanDecision.",
    };
  }
  if (!successor.supersedesExecutionContractId) {
    return {
      ok: false,
      code: "CONTRACT_NOT_RESOLVED_SUCCESSOR",
      message:
        "Unresolved M3 PREPARE cannot execute — resolve successor first.",
    };
  }
  if (successor.executionContractId === canonicalPrepareId) {
    return {
      ok: false,
      code: "CONTRACT_NOT_RESOLVED_SUCCESSOR",
      message:
        "Unresolved M3 PREPARE cannot execute — resolve successor first.",
    };
  }
  if (successor.supersedesExecutionContractId !== canonicalPrepareId) {
    return {
      ok: false,
      code: "M3_SUCCESSOR_LINEAGE_MISMATCH",
      message:
        "Successor must supersede exactly the canonical M3 PREPARE for this HumanDecision.",
    };
  }

  const expectedResolutionIdem = canonicalM3ResolutionIdempotencyKey(
    input.decisionId,
    successor.executionContractId,
  );
  if (successor.idempotencyKey !== expectedResolutionIdem) {
    return {
      ok: false,
      code: "M3_RESOLUTION_IDEMPOTENCY_MISMATCH",
      message:
        "Successor idempotencyKey is not the canonical M3 resolution identity.",
    };
  }

  if (authorizedM3ResolutionKind(successor) === null) {
    return {
      ok: false,
      code: "M3_SUCCESSOR_GOVERNANCE_MISMATCH",
      message:
        "Successor durable fields do not match an authorized M3 resolution profile (fixture-safe or bounded read-only).",
    };
  }

  if (
    successor.action === "UNRESOLVED_ACTION" ||
    successor.target === "UNRESOLVED_TARGET" ||
    successor.requiredCapabilities.includes("cap:unresolved") ||
    successor.constraints.includes("PREPARE_ONLY") ||
    successor.constraints.includes("NO_ATTEMPT") ||
    successor.stopConditions.some((s) =>
      (UNRESOLVED_STOP_SENTINELS as readonly string[]).includes(s),
    )
  ) {
    return {
      ok: false,
      code: "CONTRACT_STILL_UNRESOLVED",
      message: "Successor still carries unresolved / PREPARE_ONLY sentinels.",
    };
  }

  return { ok: true, decision, original, successor };
}
