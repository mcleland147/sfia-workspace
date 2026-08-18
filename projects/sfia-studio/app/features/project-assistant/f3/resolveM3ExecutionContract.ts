/**
 * G-UX-15 Slice A — application bridge:
 * durable M3 PREPARE ExecutionContract → resolved successor via existing supersession
 * → eligible for existing Confirmation / Select / StartExecution.
 *
 * Does NOT execute. Does NOT mutate the original contract in place.
 * Does NOT depend on Proposal / Conversation.
 * Resolution fields are explicit application command input (not durable authority).
 *
 * Amend (exit-proof):
 * - reject all known unresolved successor stop-condition sentinels;
 * - idempotent validation replay when supersession succeeded but validation did not;
 * - accept only the exact canonical M3 PREPARE contract identity for the decision.
 *
 * Final amend:
 * - enforce successor governance identity on replay (MORRIS + decisionRefs + resolution idempotency);
 * - treat failed as a legitimate already-progressed T-A5 state;
 * - refuse validated-only MORRIS as completed resolution for this path.
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
  ExecutionContract,
  ExecutionContractServices,
  ExecutionWindowClass,
  Reversibility,
} from "@/lib/oa/execution-contract";

const UNRESOLVED_ACTION = "UNRESOLVED_ACTION";
const UNRESOLVED_TARGET = "UNRESOLVED_TARGET";
const UNRESOLVED_CAP = "cap:unresolved";

const FORBIDDEN_EXECUTABLE_CONSTRAINTS = new Set([
  "PREPARE_ONLY",
  "NO_ATTEMPT",
]);

/** Exact known unresolved stop-condition sentinels (C1). */
export const UNRESOLVED_STOP_SENTINELS = Object.freeze([
  "ACTION_UNRESOLVED",
  "TARGET_UNRESOLVED",
  "CAPABILITY_UNRESOLVED",
  "REVERSIBILITY_UNRESOLVED",
] as const);

const UNRESOLVED_STOP = new Set<string>(UNRESOLVED_STOP_SENTINELS);

/**
 * Already-progressed legitimate states for MORRIS M3/G-UX-15 replay.
 * Note: "validated" alone is NOT acceptable for MORRIS (confirmation required).
 */
const POST_VALIDATION_OK = new Set([
  "confirmation_required",
  "confirmed",
  "executing",
  "completed",
  "failed",
]);

const PRE_VALIDATION = new Set(["draft", "proposed"]);

const CANONICAL_M3_AUTHORITY = "MORRIS";

export type ResolveM3Deps = {
  decisionServices: DecisionServices;
  authorityResolver: MemoryAuthorityResolver;
  executionContractServices: ExecutionContractServices;
  nowIso: () => string;
  /** Test inject — bypasses M3 local Morris env gate. */
  forceM3Authority?: boolean;
};

/**
 * Explicit application-layer resolution input — not a durable domain authority.
 */
export type M3ResolvedExecutionFields = {
  action: string;
  target: string;
  requiredCapabilities: string[];
  reversibility: Reversibility;
  /** When omitted, inherits original scope (typically decision-scoped). */
  scope?: string;
  /**
   * When omitted, inherits non-forbidden constraints from the original and
   * drops PREPARE_ONLY / NO_ATTEMPT. Caller may supply a full replace list.
   */
  constraints?: string[];
  /**
   * When omitted, inherits stopConditions without unresolved sentinels.
   * Explicit arrays MUST NOT contain known unresolved stop sentinels (C1).
   */
  stopConditions?: string[];
  /**
   * Optional inputs merged onto the successor (server-side only).
   * Used by the bounded read-only profile to carry contract-bound baseHeadSha.
   */
  inputs?: Record<string, unknown>;
  executionWindowClass?: ExecutionWindowClass;
};

export type ResolveM3ExecutionContractInput = {
  projectId: string;
  decisionId: string;
  originalExecutionContractId: string;
  expectedOriginalVersion: number;
  resolution: M3ResolvedExecutionFields;
  supersessionReason: string;
  /**
   * Optional deterministic successor id. Default: `xct:m3-res:{safeDecisionId}`.
   * Replay with the same id returns the existing successor when fields match.
   */
  successorExecutionContractId?: string;
  deps: ResolveM3Deps;
};

export type ResolveM3Success = {
  ok: true;
  projectId: string;
  decisionId: string;
  original: {
    executionContractId: string;
    version: number;
    status: string;
    action: string;
    target: string;
    requiredCapabilities: string[];
  };
  successor: {
    executionContractId: string;
    version: number;
    status: string;
    action: string;
    target: string;
    scope: string;
    requiredAuthority: string;
    requiredCapabilities: string[];
    reversibility: Reversibility;
    constraints: string[];
    stopConditions: string[];
    supersedesExecutionContractId: string;
    supersessionReason: string;
  };
  reusedFromIdempotency: boolean;
  disclosures: string[];
};

export type ResolveM3Failure = {
  ok: false;
  code: string;
  message: string;
};

function fail(code: string, message: string): ResolveM3Failure {
  return { ok: false, code, message };
}

/** Same safe segment algorithm as prepareM3FromDecision. */
export function safeDecisionSegment(decisionId: string): string {
  return decisionId.replace(/[^a-zA-Z0-9:_-]/g, "").slice(0, 48);
}

/** Canonical M3 PREPARE ExecutionContract id for a decision (C3). */
export function canonicalM3PrepareContractId(decisionId: string): string {
  return `xct:m3:${safeDecisionSegment(decisionId)}`;
}

/** Canonical M3 PREPARE idempotency key (C3). */
export function canonicalM3PrepareIdempotencyKey(decisionId: string): string {
  return `idem:m3-prep:${decisionId}`;
}

/** Canonical G-UX-15 resolution successor idempotency (F1). */
export function canonicalM3ResolutionIdempotencyKey(
  decisionId: string,
  successorExecutionContractId: string,
): string {
  return `idem:m3-res:${decisionId}:${successorExecutionContractId}`;
}

function defaultSuccessorId(decisionId: string): string {
  return `xct:m3-res:${safeDecisionSegment(decisionId)}`;
}

function decisionRefsEqualExact(
  refs: readonly string[] | undefined,
  expectedDecisionId: string,
): boolean {
  return (
    Array.isArray(refs) &&
    refs.length === 1 &&
    refs[0] === expectedDecisionId
  );
}

function isUnresolvedPrepareContract(contract: ExecutionContract): boolean {
  const caps = contract.requiredCapabilities ?? [];
  const constraints = contract.constraints ?? [];
  const stops = contract.stopConditions ?? [];
  return (
    contract.target === UNRESOLVED_TARGET ||
    caps.includes(UNRESOLVED_CAP) ||
    constraints.includes("PREPARE_ONLY") ||
    stops.includes("TARGET_UNRESOLVED") ||
    stops.includes("CAPABILITY_UNRESOLVED")
  );
}

function findUnresolvedStopSentinel(stops: readonly string[]): string | null {
  for (const s of stops) {
    if (UNRESOLVED_STOP.has(s)) return s;
  }
  return null;
}

function assertResolvedFields(
  resolution: M3ResolvedExecutionFields,
): ResolveM3Failure | null {
  const action = resolution.action?.trim() ?? "";
  const target = resolution.target?.trim() ?? "";
  const caps = resolution.requiredCapabilities ?? [];
  if (!action || action === UNRESOLVED_ACTION) {
    return fail(
      "RESOLUTION_ACTION_UNRESOLVED",
      "Resolved action is required and must not be UNRESOLVED_ACTION.",
    );
  }
  if (!target || target === UNRESOLVED_TARGET) {
    return fail(
      "RESOLUTION_TARGET_UNRESOLVED",
      "Resolved target is required and must not be UNRESOLVED_TARGET.",
    );
  }
  if (caps.length === 0 || caps.includes(UNRESOLVED_CAP)) {
    return fail(
      "RESOLUTION_CAPABILITY_UNRESOLVED",
      "Resolved capabilities are required and must not include cap:unresolved.",
    );
  }
  if (
    resolution.reversibility !== "reversible" &&
    resolution.reversibility !== "partially_reversible" &&
    resolution.reversibility !== "irreversible"
  ) {
    return fail(
      "RESOLUTION_REVERSIBILITY_INVALID",
      "Resolved reversibility must be an existing Reversibility value.",
    );
  }
  if (resolution.constraints) {
    for (const c of resolution.constraints) {
      if (FORBIDDEN_EXECUTABLE_CONSTRAINTS.has(c)) {
        return fail(
          "RESOLUTION_CONSTRAINT_FORBIDDEN",
          `Executable successor must not include constraint ${c}.`,
        );
      }
    }
  }
  // C1 — explicit stopConditions must fail closed before supersession.
  if (resolution.stopConditions) {
    const hit = findUnresolvedStopSentinel(resolution.stopConditions);
    if (hit) {
      return fail(
        "RESOLUTION_STOP_UNRESOLVED",
        `Resolved stopConditions must not include unresolved sentinel ${hit}.`,
      );
    }
  }
  return null;
}

function assertSuccessorHasNoUnresolvedSentinels(
  successor: ExecutionContract,
): ResolveM3Failure | null {
  if (successor.action === UNRESOLVED_ACTION) {
    return fail(
      "SUCCESSOR_STILL_UNRESOLVED",
      "Successor action is UNRESOLVED_ACTION.",
    );
  }
  if (successor.target === UNRESOLVED_TARGET) {
    return fail(
      "SUCCESSOR_STILL_UNRESOLVED",
      "Successor target is UNRESOLVED_TARGET.",
    );
  }
  if ((successor.requiredCapabilities ?? []).includes(UNRESOLVED_CAP)) {
    return fail(
      "SUCCESSOR_STILL_UNRESOLVED",
      "Successor requiredCapabilities still contain cap:unresolved.",
    );
  }
  const stopHit = findUnresolvedStopSentinel(successor.stopConditions ?? []);
  if (stopHit) {
    return fail(
      "SUCCESSOR_STILL_UNRESOLVED",
      `Successor stopConditions still contain unresolved sentinel ${stopHit}.`,
    );
  }
  for (const c of successor.constraints ?? []) {
    if (FORBIDDEN_EXECUTABLE_CONSTRAINTS.has(c)) {
      return fail(
        "SUCCESSOR_CONSTRAINT_FORBIDDEN",
        `Successor retained forbidden constraint ${c}.`,
      );
    }
  }
  return null;
}

function buildSuccessorConstraints(
  prior: ExecutionContract,
  resolution: M3ResolvedExecutionFields,
): string[] {
  if (resolution.constraints) {
    return [...resolution.constraints];
  }
  return (prior.constraints ?? []).filter(
    (c) => !FORBIDDEN_EXECUTABLE_CONSTRAINTS.has(c),
  );
}

function buildSuccessorStopConditions(
  prior: ExecutionContract,
  resolution: M3ResolvedExecutionFields,
): string[] {
  if (resolution.stopConditions) {
    // Explicit list already validated by assertResolvedFields (C1).
    return [...resolution.stopConditions];
  }
  return (prior.stopConditions ?? []).filter((s) => !UNRESOLVED_STOP.has(s));
}

function successorMatchesResolution(
  contract: ExecutionContract,
  resolution: M3ResolvedExecutionFields,
  scope: string,
  constraints: string[],
  stopConditions: string[],
): boolean {
  const caps = [...(contract.requiredCapabilities ?? [])].sort().join("\0");
  const wantCaps = [...resolution.requiredCapabilities].sort().join("\0");
  return (
    contract.action === resolution.action.trim() &&
    contract.target === resolution.target.trim() &&
    contract.scope === scope &&
    contract.reversibility === resolution.reversibility &&
    caps === wantCaps &&
    [...contract.constraints].join("\0") === constraints.join("\0") &&
    [...contract.stopConditions].join("\0") === stopConditions.join("\0") &&
    (resolution.executionWindowClass === undefined ||
      contract.executionWindowClass === resolution.executionWindowClass)
  );
}

function toOriginalView(contract: ExecutionContract) {
  return {
    executionContractId: contract.executionContractId,
    version: contract.version,
    status: contract.status,
    action: contract.action,
    target: contract.target,
    requiredCapabilities: [...contract.requiredCapabilities],
  };
}

function toSuccessorView(contract: ExecutionContract) {
  return {
    executionContractId: contract.executionContractId,
    version: contract.version,
    status: contract.status,
    action: contract.action,
    target: contract.target,
    scope: contract.scope,
    requiredAuthority: contract.requiredAuthority,
    requiredCapabilities: [...contract.requiredCapabilities],
    reversibility: contract.reversibility,
    constraints: [...contract.constraints],
    stopConditions: [...contract.stopConditions],
    supersedesExecutionContractId: contract.supersedesExecutionContractId ?? "",
    supersessionReason: contract.supersessionReason ?? "",
  };
}

function assertCanonicalOriginalIdentity(input: {
  decisionId: string;
  requestedOriginalId: string;
  loaded: ExecutionContract;
}): ResolveM3Failure | null {
  const canonicalId = canonicalM3PrepareContractId(input.decisionId);
  if (input.requestedOriginalId !== canonicalId) {
    return fail(
      "CANONICAL_M3_CONTRACT_MISMATCH",
      `originalExecutionContractId must be the canonical M3 PREPARE id ${canonicalId}.`,
    );
  }
  if (input.loaded.executionContractId !== canonicalId) {
    return fail(
      "CANONICAL_M3_CONTRACT_MISMATCH",
      "Loaded contract id is not the canonical M3 PREPARE contract for this decision.",
    );
  }
  if (input.loaded.idempotencyKey !== canonicalM3PrepareIdempotencyKey(input.decisionId)) {
    return fail(
      "CANONICAL_M3_CONTRACT_MISMATCH",
      "Loaded contract idempotencyKey is not the canonical M3 PREPARE identity.",
    );
  }
  if (input.loaded.requiredAuthority !== CANONICAL_M3_AUTHORITY) {
    return fail(
      "CANONICAL_M3_CONTRACT_MISMATCH",
      "Canonical M3 PREPARE contract must require MORRIS authority.",
    );
  }
  return null;
}

/**
 * F1 — successor governance identity for idempotent replay / success return.
 * Fail closed before validation when any governance dimension mismatches.
 */
function assertSuccessorGovernanceIdentity(input: {
  original: ExecutionContract;
  successor: ExecutionContract;
  decisionId: string;
  projectId: string;
}): ResolveM3Failure | null {
  const { original, successor, decisionId, projectId } = input;

  if (successor.supersedesExecutionContractId !== original.executionContractId) {
    return fail(
      "SUCCESSOR_GOVERNANCE_MISMATCH",
      "Successor lineage does not supersede the original M3 contract.",
    );
  }
  if (original.requiredAuthority !== CANONICAL_M3_AUTHORITY) {
    return fail(
      "SUCCESSOR_GOVERNANCE_MISMATCH",
      "Original M3 contract requiredAuthority is not MORRIS.",
    );
  }
  if (successor.requiredAuthority !== original.requiredAuthority) {
    return fail(
      "SUCCESSOR_GOVERNANCE_MISMATCH",
      "Successor requiredAuthority does not match original MORRIS authority.",
    );
  }
  if (!decisionRefsEqualExact(successor.decisionRefs, decisionId)) {
    return fail(
      "SUCCESSOR_GOVERNANCE_MISMATCH",
      "Successor decisionRefs must bind exactly the resolved HumanDecision.",
    );
  }
  const expectedIdem = canonicalM3ResolutionIdempotencyKey(
    decisionId,
    successor.executionContractId,
  );
  if (successor.idempotencyKey !== expectedIdem) {
    return fail(
      "SUCCESSOR_GOVERNANCE_MISMATCH",
      "Successor idempotencyKey is not the canonical M3 resolution identity.",
    );
  }
  if (successor.projectId !== projectId) {
    return fail(
      "SUCCESSOR_GOVERNANCE_MISMATCH",
      "Successor projectId does not match the resolution project.",
    );
  }
  return null;
}

async function validateExistingSuccessor(input: {
  decisionId: string;
  scope: string;
  successorId: string;
  deps: ResolveM3Deps;
}): Promise<
  | { ok: true; contract: ExecutionContract }
  | ResolveM3Failure
> {
  const authority = registerM3LocalMorrisAuthority({
    authorityResolver: input.deps.authorityResolver,
    scope: input.scope,
    issuedAt: input.deps.nowIso(),
    evidenceId: `evd:m3-resolve:${input.decisionId}`,
    forceEnable: input.deps.forceM3Authority === true,
  });
  if (!authority.ok) {
    return fail(authority.code, authority.message);
  }
  const validated =
    await input.deps.executionContractServices.validateExecutionContract.execute(
      {
        executionContractId: input.successorId,
        actor: LOCAL_MORRIS_M3_ACTOR,
        authorityEvidenceId: authority.evidenceId,
      },
    );
  if (!validated.ok) {
    return fail(validated.error.detailCode, validated.error.message);
  }
  return { ok: true, contract: validated.contract };
}

export async function resolveM3ExecutionContract(
  input: ResolveM3ExecutionContractInput,
): Promise<ResolveM3Success | ResolveM3Failure> {
  const fieldErr = assertResolvedFields(input.resolution);
  if (fieldErr) return fieldErr;

  const reason = input.supersessionReason?.trim() ?? "";
  if (!reason) {
    return fail(
      "SUPERSESSION_REASON_INVALID",
      "supersessionReason is required.",
    );
  }

  const loaded = await input.deps.decisionServices.getHumanDecision.execute({
    decisionId: input.decisionId,
  });
  if (!loaded.ok) {
    return fail(loaded.error.detailCode, loaded.error.message);
  }

  const decision = loaded.decision;
  if (decision.projectId !== input.projectId) {
    return fail("PROJECT_MISMATCH", "Decision does not belong to this project.");
  }
  if (decision.status !== "accepted") {
    return fail(
      "DECISION_NOT_CURRENT",
      `Decision status ${decision.status} is not accepted for M3 resolution.`,
    );
  }
  if (!decision.decisionBasis) {
    return fail(
      "DECISION_BASIS_REQUIRED",
      "HumanDecision lacks DecisionBasis — cannot resolve M3 contract.",
    );
  }
  const basis: DecisionBasis = decision.decisionBasis;
  if (basis.projectId !== input.projectId) {
    return fail(
      "DECISION_BASIS_PROJECT_MISMATCH",
      "DecisionBasis projectId does not match.",
    );
  }

  // C3 — requested id must be canonical before load side-effects matter.
  const canonicalId = canonicalM3PrepareContractId(input.decisionId);
  if (input.originalExecutionContractId !== canonicalId) {
    return fail(
      "CANONICAL_M3_CONTRACT_MISMATCH",
      `originalExecutionContractId must be the canonical M3 PREPARE id ${canonicalId}.`,
    );
  }

  const originalResult =
    await input.deps.executionContractServices.getExecutionContract.execute({
      executionContractId: input.originalExecutionContractId,
    });
  if (!originalResult.ok) {
    return fail(originalResult.error.detailCode, originalResult.error.message);
  }

  let original = originalResult.contract;
  if (original.projectId !== input.projectId) {
    return fail(
      "CONTRACT_PROJECT_MISMATCH",
      "Original ExecutionContract does not belong to this project.",
    );
  }
  if (
    !original.decisionRefs ||
    original.decisionRefs.length === 0 ||
    !original.decisionRefs.includes(input.decisionId)
  ) {
    return fail(
      "DECISION_CONTRACT_MISMATCH",
      "Original contract is not linked to this HumanDecision.",
    );
  }

  const identityErr = assertCanonicalOriginalIdentity({
    decisionId: input.decisionId,
    requestedOriginalId: input.originalExecutionContractId,
    loaded: original,
  });
  if (identityErr) return identityErr;

  const successorId =
    input.successorExecutionContractId?.trim() ||
    defaultSuccessorId(input.decisionId);
  if (!successorId.startsWith("xct:")) {
    return fail(
      "CONTRACT_INVALID",
      "successorExecutionContractId must use xct: prefix.",
    );
  }
  if (successorId === input.originalExecutionContractId) {
    return fail("SELF_SUPERSESSION", "Successor id must differ from original.");
  }

  const scope =
    (input.resolution.scope?.trim() || original.scope).trim() ||
    `decision:${input.decisionId}`;
  const constraints = buildSuccessorConstraints(original, input.resolution);
  const stopConditions = buildSuccessorStopConditions(
    original,
    input.resolution,
  );

  // C2 — original already superseded: recover/validate existing successor.
  if (original.status === "superseded") {
    const existing =
      await input.deps.executionContractServices.getExecutionContract.execute({
        executionContractId: successorId,
      });
    if (!existing.ok) {
      return fail(
        "STATE_CONFLICT",
        "Original contract is superseded but expected successor was not found.",
      );
    }
    let successor = existing.contract;

    // F1 — governance identity before validation / success.
    const govErr = assertSuccessorGovernanceIdentity({
      original,
      successor,
      decisionId: input.decisionId,
      projectId: input.projectId,
    });
    if (govErr) return govErr;

    if (
      !successorMatchesResolution(
        successor,
        input.resolution,
        scope,
        constraints,
        stopConditions,
      )
    ) {
      return fail(
        "RESOLUTION_IDEMPOTENCY_CONFLICT",
        "Existing successor fields do not match this resolution input.",
      );
    }

    if (successor.status === "cancelled" || successor.status === "superseded") {
      return fail(
        "STATE_CONFLICT",
        `Expected successor is no longer current (status ${successor.status}).`,
      );
    }

    if (PRE_VALIDATION.has(successor.status)) {
      // Incomplete prior attempt — validate SAME successor; do not supersede again.
      const validated = await validateExistingSuccessor({
        decisionId: input.decisionId,
        scope,
        successorId,
        deps: input.deps,
      });
      if (!validated.ok) return validated;
      successor = validated.contract;
      // Re-assert governance after validation (identity must not drift).
      const govAfter = assertSuccessorGovernanceIdentity({
        original,
        successor,
        decisionId: input.decisionId,
        projectId: input.projectId,
      });
      if (govAfter) return govAfter;
    } else if (successor.status === "validated") {
      // MORRIS path: validated alone is not a completed pre-confirmation result.
      return fail(
        "STATE_CONFLICT",
        "MORRIS successor in validated status is not a legitimate completed resolution; confirmation_required is required.",
      );
    } else if (!POST_VALIDATION_OK.has(successor.status)) {
      return fail(
        "STATE_CONFLICT",
        `Expected successor status ${successor.status} is not a legitimate resolution candidate.`,
      );
    }

    const cleanErr = assertSuccessorHasNoUnresolvedSentinels(successor);
    if (cleanErr) return cleanErr;

    return {
      ok: true,
      projectId: input.projectId,
      decisionId: input.decisionId,
      original: toOriginalView(original),
      successor: toSuccessorView(successor),
      reusedFromIdempotency: true,
      disclosures: [
        "G-UX-15 resolve — idempotent reuse / validation replay of existing successor",
        "ORIGINAL PRESERVED SUPERSEDED",
        "NO SECOND SUPERSESSION",
        "NO CURSOR REAL",
        "NO ATTEMPT IN RESOLVER",
      ],
    };
  }

  if (original.status === "cancelled") {
    return fail(
      "STATE_CONFLICT",
      "Cannot resolve a cancelled ExecutionContract.",
    );
  }
  if (
    original.status === "executing" ||
    original.status === "completed" ||
    original.status === "failed"
  ) {
    return fail(
      "TA5_STATUS_REFUSED",
      `Cannot resolve contract in T-A5 status ${original.status}.`,
    );
  }

  if (!isUnresolvedPrepareContract(original)) {
    return fail(
      "CONTRACT_NOT_M3_PREPARE_UNRESOLVED",
      "Original contract is not an unresolved M3 PREPARE contract.",
    );
  }

  if (original.version !== input.expectedOriginalVersion) {
    return fail(
      "VERSION_CONFLICT",
      `Expected original version ${input.expectedOriginalVersion}, found ${original.version}.`,
    );
  }

  const authority = registerM3LocalMorrisAuthority({
    authorityResolver: input.deps.authorityResolver,
    scope,
    issuedAt: input.deps.nowIso(),
    evidenceId: `evd:m3-resolve:${input.decisionId}`,
    forceEnable: input.deps.forceM3Authority === true,
  });
  if (!authority.ok) {
    return fail(authority.code, authority.message);
  }

  const superseded =
    await input.deps.executionContractServices.supersedeExecutionContract.execute(
      {
        newExecutionContractId: successorId,
        supersedesExecutionContractId: original.executionContractId,
        supersessionReason: reason,
        actor: LOCAL_MORRIS_M3_ACTOR,
        authorityEvidenceId: authority.evidenceId,
        expectedVersion: input.expectedOriginalVersion,
        action: input.resolution.action.trim(),
        target: input.resolution.target.trim(),
        scope,
        requiredCapabilities: [...input.resolution.requiredCapabilities],
        reversibility: input.resolution.reversibility,
        constraints,
        stopConditions,
        decisionRefs: [input.decisionId],
        requiredAuthority: original.requiredAuthority,
        status: "draft",
        idempotencyKey: canonicalM3ResolutionIdempotencyKey(
          input.decisionId,
          successorId,
        ),
        correlationId: `cor:m3-res:${input.decisionId}`,
        executionWindowClass: input.resolution.executionWindowClass,
        inputs: {
          ...(original.inputs ?? {}),
          ...(input.resolution.inputs ?? {}),
          gux15Resolution: {
            kind: "application_command_input",
            notDurableAuthority: true,
            basisSourceRef: basis.sourceRef,
            basisSourceDigest: basis.sourceDigest,
          },
        },
      },
    );

  if (!superseded.ok) {
    return fail(superseded.error.detailCode, superseded.error.message);
  }

  const validated =
    await input.deps.executionContractServices.validateExecutionContract.execute(
      {
        executionContractId: successorId,
        actor: LOCAL_MORRIS_M3_ACTOR,
        authorityEvidenceId: authority.evidenceId,
      },
    );
  if (!validated.ok) {
    // C2 — supersession already persisted; caller must replay to validate same successor.
    return fail(validated.error.detailCode, validated.error.message);
  }

  const refreshedOriginal =
    await input.deps.executionContractServices.getExecutionContract.execute({
      executionContractId: input.originalExecutionContractId,
    });
  if (refreshedOriginal.ok) {
    original = refreshedOriginal.contract;
  }

  const successor = validated.contract;
  const govErr = assertSuccessorGovernanceIdentity({
    original,
    successor,
    decisionId: input.decisionId,
    projectId: input.projectId,
  });
  if (govErr) return govErr;
  const cleanErr = assertSuccessorHasNoUnresolvedSentinels(successor);
  if (cleanErr) return cleanErr;

  return {
    ok: true,
    projectId: input.projectId,
    decisionId: input.decisionId,
    original: toOriginalView(original),
    successor: toSuccessorView(successor),
    reusedFromIdempotency: false,
    disclosures: [
      "G-UX-15 resolve — existing supersession only",
      "ORIGINAL PRESERVED FOR AUDIT",
      "NO IN-PLACE MUTATION OF UNRESOLVED FIELDS",
      "NO CURSOR REAL",
      "NO ATTEMPT IN RESOLVER",
      "CONFIRMATION / SELECT / STARTEXECUTION ARE CALLER COMPOSITION",
    ],
  };
}
