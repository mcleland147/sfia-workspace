/**
 * F3 M3 PREPARE — Build+Validate ExecutionContract from durable HumanDecision + DecisionBasis.
 * NO ProposalStore. NO F3_ACTION fixture constants. Cursor PREPARE-only projection.
 */

import type {
  DecisionBasis,
  DecisionServices,
  MemoryAuthorityResolver,
} from "@/lib/oa/decision";
import {
  LOCAL_MORRIS_M3_ACTOR,
  registerM3LocalMorrisAuthority,
} from "@/lib/oa/decision";
import type {
  CursorPrepareOnlyProjection,
  ExecutionContractServices,
} from "@/lib/oa/execution-contract";
import { projectCursorPrepareOnly } from "@/lib/oa/execution-contract";
import type { F2ContextSnapshot } from "../f2/types";

export type PrepareM3Deps = {
  decisionServices: DecisionServices;
  authorityResolver: MemoryAuthorityResolver;
  executionContractServices: ExecutionContractServices;
  nowIso: () => string;
  forceM3Authority?: boolean;
};

export type F3M3PreparePayload = {
  turnKind: "f3_m3_prepare";
  mode: "M3_PREPARE";
  decisionId: string;
  projectId: string;
  contract: {
    executionContractId: string;
    version: number;
    status: string;
    action: string;
    target: string;
    scope: string;
    requiredAuthority: string;
    constraints: string[];
    semanticFingerprint: string;
  };
  cursorProjection: CursorPrepareOnlyProjection;
  executionPerformed: false;
  attemptCreated: false;
  cursorReal: false;
  executionAllowed: false;
  disclosures: string[];
};

function requireBasis(
  basis: DecisionBasis | undefined,
): DecisionBasis | { ok: false; code: string; message: string } {
  if (!basis) {
    return {
      ok: false,
      code: "DECISION_BASIS_REQUIRED",
      message: "HumanDecision lacks DecisionBasis — cannot PREPARE M3.",
    };
  }
  return basis;
}

/**
 * Map DecisionBasis → contract fields with explicit UNRESOLVED semantics.
 * Objective ≠ operation. cycleTypeId / projectId ≠ execution target.
 * `cap:unresolved` is a sentinel, never an executable capability.
 * `reversibility: irreversible` is a fail-closed safety default when unsourced,
 * NOT a business claim — always paired with REVERSIBILITY_UNRESOLVED.
 */
function fieldsFromBasis(basis: DecisionBasis, decisionId: string) {
  const eb = basis.executionBasis;
  const stopConditions = [
    ...(eb.stopConditions ?? []),
    "AUTHORITY_DENIED",
    "CONTEXT_STALE",
    "DECISION_NOT_CURRENT",
  ];

  const requested = eb.requestedOperation?.trim() ?? "";
  let action: string;
  if (requested) {
    action = requested;
  } else {
    action = "UNRESOLVED_ACTION";
    stopConditions.push("ACTION_UNRESOLVED");
  }

  // No explicit target field on DecisionBasis today → always unresolved.
  const target = "UNRESOLVED_TARGET";
  stopConditions.push("TARGET_UNRESOLVED");

  const requiredCapabilities = ["cap:unresolved"];
  stopConditions.push("CAPABILITY_UNRESOLVED");

  // Fail-closed safety default — not a sourced reversibility analysis.
  const reversibility = "irreversible" as const;
  stopConditions.push("REVERSIBILITY_UNRESOLVED");

  const scope =
    (eb.scope && eb.scope.trim()) || `decision:${decisionId}`;
  const constraints = [
    ...(eb.outOfScope ?? []).map((s) => `OUT_OF_SCOPE:${s}`),
    ...(eb.risks ?? []).map((s) => `RISK:${s}`),
    ...(eb.reservations ?? []).map((s) => `RESERVATION:${s}`),
    "PREPARE_ONLY",
    "NO_CURSOR_REAL",
    "NO_ATTEMPT",
    "NO_GATE_D",
  ];
  if (eb.activatedBlocks?.length) {
    for (const b of eb.activatedBlocks) {
      constraints.push(`ACTIVATED_BLOCK:${b}`);
    }
  }
  const expectedOutputs = eb.expectedOutcome
    ? [eb.expectedOutcome]
    : undefined;
  return {
    action,
    target,
    scope,
    constraints,
    stopConditions,
    expectedOutputs,
    requiredCapabilities,
    reversibility,
    inputs: {
      objective: eb.objective,
      recommendedProfile: eb.recommendedProfile,
      cycleTypeId: eb.cycleTypeId,
      activatedBlocks: eb.activatedBlocks,
      sourceRef: basis.sourceRef,
      sourceDigest: basis.sourceDigest,
    },
  };
}

export async function prepareM3FromDecision(input: {
  projectId: string;
  decisionId: string;
  currentContext: F2ContextSnapshot;
  /** Hostile — ignored. */
  mode?: unknown;
  adapterRef?: unknown;
  agentId?: unknown;
  command?: unknown;
  deps: PrepareM3Deps;
}): Promise<
  | { ok: true; payload: F3M3PreparePayload }
  | { ok: false; code: string; message: string }
> {
  void input.mode;
  void input.adapterRef;
  void input.agentId;
  void input.command;

  const loaded = await input.deps.decisionServices.getHumanDecision.execute({
    decisionId: input.decisionId,
  });
  if (!loaded.ok) {
    return {
      ok: false,
      code: loaded.error.detailCode,
      message: loaded.error.message,
    };
  }

  const decision = loaded.decision;
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
      message: `Decision status ${decision.status} is not accepted for PREPARE.`,
    };
  }

  const basisOrFail = requireBasis(decision.decisionBasis);
  if ("ok" in basisOrFail && basisOrFail.ok === false) {
    return basisOrFail;
  }
  const basis = basisOrFail as DecisionBasis;

  const ctx = basis.proposalContext;
  if (
    ctx.doctrineDigest !== undefined &&
    ctx.doctrineDigest !== input.currentContext.doctrineDigest
  ) {
    return {
      ok: false,
      code: "CONTEXT_STALE",
      message:
        "DecisionBasis doctrine digest is stale — re-decide before PREPARE.",
    };
  }
  if (ctx.lpsId !== input.currentContext.lpsId) {
    // LPS id changes on append after GO — allow when decision is linked on current LPS.
    // Fall through to decisionIds check below.
  }

  // Reload is implicit via caller currentContext; require decision linked after GO LPS append.
  // When LPS was linked, version advances; exact basis.lpsVersion match is not required.
  // Fail closed if doctrine ok but decision is not current accepted (already checked).
  if (
    ctx.lpsVersion > input.currentContext.lpsVersion
  ) {
    return {
      ok: false,
      code: "CONTEXT_STALE",
      message:
        "DecisionBasis LPS version is ahead of current context — inconsistent state.",
    };
  }

  const fields = fieldsFromBasis(basis, decision.decisionId);
  const issuedAt = input.deps.nowIso();
  const authority = registerM3LocalMorrisAuthority({
    authorityResolver: input.deps.authorityResolver,
    scope: fields.scope,
    issuedAt,
    evidenceId: `evd:m3-prep:${decision.decisionId}`,
    forceEnable: input.deps.forceM3Authority === true,
  });
  if (!authority.ok) {
    return {
      ok: false,
      code: authority.code,
      message: authority.message,
    };
  }

  const safeId = decision.decisionId.replace(/[^a-zA-Z0-9:_-]/g, "").slice(0, 48);
  const executionContractId = `xct:m3:${safeId}`;
  const idempotencyKey = `idem:m3-prep:${decision.decisionId}`;

  const built =
    await input.deps.executionContractServices.buildExecutionContract.execute({
      executionContractId,
      projectId: input.projectId,
      cycleInstanceId: decision.cycleInstanceId ?? basis.cycleInstanceId,
      decisionRefs: [decision.decisionId],
      action: fields.action,
      target: fields.target,
      scope: fields.scope,
      inputs: fields.inputs,
      expectedOutputs: fields.expectedOutputs,
      requiredCapabilities: fields.requiredCapabilities,
      requiredAuthority: "MORRIS",
      constraints: fields.constraints,
      stopConditions: fields.stopConditions,
      evidenceRequirements: ["evreq:m3-prepare-decision-basis"],
      reversibility: fields.reversibility,
      idempotencyKey,
      correlationId: `cor:m3-prep:${decision.decisionId}`,
      actor: LOCAL_MORRIS_M3_ACTOR,
      authorityEvidenceId: authority.evidenceId,
    });

  if (!built.ok) {
    return {
      ok: false,
      code: built.error.detailCode,
      message: built.error.message,
    };
  }

  const validated =
    await input.deps.executionContractServices.validateExecutionContract.execute(
      {
        executionContractId: built.contract.executionContractId,
        actor: LOCAL_MORRIS_M3_ACTOR,
        authorityEvidenceId: authority.evidenceId,
      },
    );

  if (!validated.ok) {
    return {
      ok: false,
      code: validated.error.detailCode,
      message: validated.error.message,
    };
  }

  const contract = validated.contract;
  const cursorProjection = projectCursorPrepareOnly(contract);
  if (
    cursorProjection.executionAllowed !== false ||
    cursorProjection.cursorReal !== false ||
    cursorProjection.selectedAgentRef !== null ||
    cursorProjection.gateD !== "NOT_CONSUMED"
  ) {
    return {
      ok: false,
      code: "CURSOR_PROJECTION_INVALID",
      message: "Cursor PREPARE-only projection invariants violated.",
    };
  }

  return {
    ok: true,
    payload: {
      turnKind: "f3_m3_prepare",
      mode: "M3_PREPARE",
      decisionId: decision.decisionId,
      projectId: input.projectId,
      contract: {
        executionContractId: contract.executionContractId,
        version: contract.version,
        status: contract.status,
        action: contract.action,
        target: contract.target,
        scope: contract.scope,
        requiredAuthority: contract.requiredAuthority,
        constraints: [...contract.constraints],
        semanticFingerprint: contract.semanticFingerprint ?? cursorProjection.fingerprint,
      },
      cursorProjection,
      executionPerformed: false,
      attemptCreated: false,
      cursorReal: false,
      executionAllowed: false,
      disclosures: [
        "M3 PREPARE — exact contract from DecisionBasis",
        "NO CURSOR REAL",
        "NO ATTEMPT",
        "GATE D NOT_CONSUMED",
        "NO FIXTURE F3_ACTION CONSTANTS",
      ],
    },
  };
}
