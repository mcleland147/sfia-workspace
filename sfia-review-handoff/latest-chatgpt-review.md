# ChatGPT Review Pack — FULL

## PRE-M6 G-UX-15 SLICE A — FINAL AMEND / EXIT-PROOF HARDENING

**Timestamp (Europe/Paris):** 2026-08-15 15:59:05 CEST

**Mode:** FULL
**Cycle:** Cycle 8 — Delivery / CONTINUATION / FINAL CORRECTION
**Profile:** Critical
**Typology:** INC — bounded corrective increment

---

### 1. Timestamp
2026-08-15 15:59:05 CEST

### 2. Exact FINAL AMEND GO Morris
```
GO MORRIS — FINAL AMEND G-UX-15 SLICE A — ENFORCE SUCCESSOR GOVERNANCE IDENTITY ON REPLAY (MORRIS AUTHORITY + DECISION REFS + CANONICAL RESOLUTION IDEMPOTENCY) — ACCEPT FAILED AS LEGITIMATE PROGRESSED T-A5 STATE — COMPLETE PRE-M6 ARTIFACT CURRENT-STATE SYNC — KEEP EXISTING ARCHITECTURE — ZERO REAL — NO FIGMA — NO UI DELIVERY — NO M6
```

### 3. Cycle 8 / Critical / INC continuation
Final corrective only — does not reopen Slice A architecture.

### 4. Initial Git Truth
- Branch: `feat/sfia-studio-pre-m6-gux15-slice-a`
- HEAD / origin/main: `2f0d7236e4e1b7c7ca8e987b9d4e6e3ece3c37a7`
- Remote feat branch: ABSENT
- Incoming handoff: `4d5c185e…` / blob `1272c3cb…`
- Local Slice A files MATCHED reviewed handoff before edit
- Staged: empty; REAL unset

### 5. Incoming handoff
Commit `4d5c185e507f4dbfdef61a502f9b4a0c746fb093` · blob `1272c3cb85b47cc5786762ac1074b5dced9236f3`

### 6. Mandatory sources read
Process + Build Doctrine + Roadmap (RO) + v3 30/34/35/37 + Pre-M6 baseline + resolve/prepare/supersede/validate + types + tests as needed.

### 7. Final findings corrected
F1 — successor governance identity incomplete on replay.
F2 — `failed` missing from progressed T-A5 replay set; `validated`-only MORRIS incorrectly acceptable.
F3 — Pre-M6 artifact still presented REQUALIFY / no-implementation / pending A/B/C as current in places.

### 8–9. Governance identity rules + resolution idempotency
On replay / success:
- lineage: successor.supersedesExecutionContractId === original.executionContractId
- original.requiredAuthority === MORRIS
- successor.requiredAuthority === original.requiredAuthority
- decisionRefs exact `[decisionId]`
- idempotencyKey === `idem:m3-res:{decisionId}:{successorId}` via `canonicalM3ResolutionIdempotencyKey`
- projectId match
- retain field match + unresolved sentinel checks
Mismatch → `SUCCESSOR_GOVERNANCE_MISMATCH` before validation (zero mutation / Attempt / launch).

MORRIS status semantics:
- draft/proposed → validate SAME successor
- validated → STATE_CONFLICT (confirmation_required expected)
- confirmation_required / confirmed / executing / completed / failed → idempotent success if governance holds
- cancelled / superseded → STATE_CONFLICT

### 10. Complete resolver after final amend
```typescript
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
    [...contract.stopConditions].join("\0") === stopConditions.join("\0")
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
        inputs: {
          ...(original.inputs ?? {}),
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

```

### 11. Complete test file after final amend
```typescript
/**
 * G-UX-15 Slice A — resolveM3ExecutionContract application wiring proof.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  createTestDoctrineResolver,
  type Digest,
  type DoctrinePackagePin,
} from "@/lib/oa/doctrine";
import { createTestSqliteProductProjectServices } from "@/lib/oa/project";
import { createSqliteCycleServices } from "@/lib/oa/cycle";
import {
  LOCAL_MORRIS_M3_ACTOR,
  MemoryAuthorityResolver,
  computeDecisionBasisSourceDigest,
  createTestSqliteDecisionServices,
  registerM3LocalMorrisAuthority,
  type DecisionBasis,
} from "@/lib/oa/decision";
import { createTestSqliteExecutionContractServices } from "@/lib/oa/execution-contract";
import {
  createTestSqliteExecutionAttemptServices,
  type ExecutionAttemptServices,
} from "@/lib/oa/execution-attempt";
import { prepareM3FromDecision } from "@/features/project-assistant/f3/prepareM3FromDecision";
import { resolveM3ExecutionContract } from "@/features/project-assistant/f3/resolveM3ExecutionContract";
import {
  UNRESOLVED_STOP_SENTINELS,
  canonicalM3PrepareContractId,
  canonicalM3ResolutionIdempotencyKey,
} from "@/features/project-assistant/f3/resolveM3ExecutionContract";
import type { ExecutionContract } from "@/lib/oa/execution-contract";import {
  createF3FixtureAgentDescriptor,
  createF3TestExecutionAdapter,
} from "@/features/project-assistant/f3/fixtureAgent";
import {
  F3_ACTION,
  F3_ADAPTER_ID,
  F3_AGENT_ID,
  F3_CAPABILITY,
  F3_CONFIRM_ACTION_REF,
  F3_SCOPE,
  F3_TARGET,
} from "@/features/project-assistant/f3/constants";

const APP_ROOT = path.resolve(__dirname, "../..");
const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const VALID_DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;

const VALID_PIN: DoctrinePackagePin = {
  doctrinePackageId: "pkg:studio-v3-oa",
  version: "1.0.0",
  digest: VALID_DIGEST,
};

const PROJECT_ID = "prj:gux15";
const NOW = "2026-08-15T14:00:00.000Z";

const tempDirs: string[] = [];
const openServices: Array<{ dispose: () => void }> = [];

afterEach(() => {
  while (openServices.length) {
    try {
      openServices.pop()?.dispose();
    } catch {
      /* ignore */
    }
  }
  while (tempDirs.length) {
    const dir = tempDirs.pop();
    if (dir) fs.rmSync(dir, { recursive: true, force: true });
  }
});

type Stack = Awaited<ReturnType<typeof bootAt>>;

async function bootAt(dbPath: string) {
  const { resolver } = createTestDoctrineResolver({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
  });
  const projects = createTestSqliteProductProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: NOW,
    dbPath,
  });
  openServices.push(projects);
  const cycles = createSqliteCycleServices({
    projectServices: projects,
    productStore: projects.store,
  });
  const authority = new MemoryAuthorityResolver();
  const decisions = createTestSqliteDecisionServices({
    projectServices: projects,
    cycleServices: cycles,
    productStore: projects.store,
    authorityResolver: authority,
  });
  const contracts = createTestSqliteExecutionContractServices({
    projectServices: projects,
    decisionServices: decisions,
    cycleServices: cycles,
    productStore: projects.store,
    authorityResolver: authority,
  });
  const fixtureAdapter = createF3TestExecutionAdapter();
  const attempts = createTestSqliteExecutionAttemptServices({
    decisionServices: decisions,
    executionContractServices: contracts,
    productStore: projects.store,
    agents: [createF3FixtureAgentDescriptor(NOW)],
    adapter: fixtureAdapter,
    authorityResolver: authority,
    fixedNowIso: NOW,
  });
  return {
    projects,
    decisions,
    contracts,
    authority,
    attempts,
    fixtureAdapter,
    dbPath,
  };
}

async function createProject(stack: Stack) {
  const created = await stack.projects.createProject.execute({
    projectId: PROJECT_ID,
    title: "G-UX-15",
    objective: "resolve m3",
    context: "slice-a",
    scope: "gux15",
    doctrinePackagePin: VALID_PIN,
    createdBy: {
      actorId: "actor:morris",
      role: "project_owner",
      displayName: "Morris",
      authorityLevel: "N3",
    },
    lpsVersionId: "lps:gux15-v1",
    idempotencyKey: "idem:gux15",
  });
  expect(created.ok).toBe(true);
}

async function recordAcceptedGo(stack: Stack, decisionId: string) {
  const lps = await stack.projects.getCurrentLivingProjectState.execute({
    projectId: PROJECT_ID,
  });
  expect(lps.ok).toBe(true);
  if (!lps.ok) throw new Error("lps");

  const scope = `decision:${decisionId}`;
  const reg = registerM3LocalMorrisAuthority({
    authorityResolver: stack.authority,
    scope,
    issuedAt: NOW,
    forceEnable: true,
    evidenceId: `evd:m3:${decisionId}`,
  });
  expect(reg.ok).toBe(true);
  if (!reg.ok) throw new Error("authority");

  const basis: DecisionBasis = {
    sourceType: "proposal",
    sourceRef: "prop:gux15",
    sourceDigest: computeDecisionBasisSourceDigest({
      objective: "gux15-obj",
      op: "m3-gux15-requested-operation",
    }),
    projectId: PROJECT_ID,
    cycleInstanceId: undefined,
    proposalContext: {
      lpsId: lps.livingProjectState.lpsVersionId,
      lpsVersion: lps.livingProjectState.version,
      doctrineDigest: VALID_DIGEST,
    },
    executionBasis: {
      objective: "gux15-obj",
      scope,
      cycleTypeId: "cyc:delivery",
      requestedOperation: "m3-gux15-requested-operation",
    },
  };

  const recorded = await stack.decisions.recordHumanDecision.execute({
    decisionId,
    projectId: PROJECT_ID,
    subject: decisionId,
    options: [{ optionId: "opt:go", label: "GO" }],
    selectedOptionId: "opt:go",
    actor: LOCAL_MORRIS_M3_ACTOR,
    authority: "morris",
    reversible: true,
    scope,
    authorityEvidenceId: reg.evidenceId,
    decisionBasis: basis,
    linkToLivingProjectState: true,
    expectedLpsVersion: lps.livingProjectState.version,
  });
  expect(recorded.ok).toBe(true);
  if (!recorded.ok) {
    throw new Error(JSON.stringify(recorded.error));
  }
  return scope;
}

async function prepareM3(stack: Stack, decisionId: string) {
  const lps = await stack.projects.getCurrentLivingProjectState.execute({
    projectId: PROJECT_ID,
  });
  expect(lps.ok).toBe(true);
  if (!lps.ok) throw new Error("lps");

  const prepared = await prepareM3FromDecision({
    projectId: PROJECT_ID,
    decisionId,
    currentContext: {
      projectId: PROJECT_ID,
      lpsId: lps.livingProjectState.lpsVersionId,
      lpsVersion: lps.livingProjectState.version,
      doctrineDigest: VALID_DIGEST,
    },
    deps: {
      decisionServices: stack.decisions,
      authorityResolver: stack.authority,
      executionContractServices: stack.contracts,
      nowIso: () => NOW,
      forceM3Authority: true,
    },
  });
  expect(prepared.ok).toBe(true);
  if (!prepared.ok) throw new Error("prepare");
  return prepared.payload;
}

function fixtureResolution() {
  return {
    action: F3_ACTION,
    target: F3_TARGET,
    requiredCapabilities: [F3_CAPABILITY],
    reversibility: "reversible" as const,
    scope: F3_SCOPE,
    constraints: [
      "FIXTURE ONLY",
      "TEST ADAPTER ONLY",
      "NO REAL",
      "NO SHELL",
      "NO NETWORK EXECUTION",
      "NO GIT WRITE",
      "NO GITHUB WRITE",
      "NO AUTO RETRY",
    ],
    stopConditions: [
      "AUTHORITY_DENIED",
      "CONTEXT_STALE",
      "DECISION_NOT_CURRENT",
    ],
  };
}

async function resolveFixture(
  stack: Stack,
  decisionId: string,
  originalId: string,
  expectedVersion: number,
) {
  return resolveM3ExecutionContract({
    projectId: PROJECT_ID,
    decisionId,
    originalExecutionContractId: originalId,
    expectedOriginalVersion: expectedVersion,
    resolution: fixtureResolution(),
    supersessionReason: "G-UX-15 resolve durable M3 PREPARE via supersession",
    deps: {
      decisionServices: stack.decisions,
      authorityResolver: stack.authority,
      executionContractServices: stack.contracts,
      nowIso: () => NOW,
      forceM3Authority: true,
    },
  });
}

async function confirmSelectStart(
  stack: Stack,
  decisionId: string,
  successorId: string,
  expectedVersion: number,
) {
  const get =
    await stack.contracts.getExecutionContract.execute({
      executionContractId: successorId,
    });
  expect(get.ok).toBe(true);
  if (!get.ok) throw new Error("get successor");
  let contract = get.contract;

  const auth = registerM3LocalMorrisAuthority({
    authorityResolver: stack.authority,
    scope: contract.scope,
    issuedAt: NOW,
    forceEnable: true,
    evidenceId: `evd:m3-cfm:${successorId}`,
  });
  expect(auth.ok).toBe(true);
  if (!auth.ok) throw new Error("cfm auth");

  const confirmationId = `cfm:gux15:${successorId}:v${contract.version}`;
  const requested = await stack.decisions.requestConfirmation.execute({
    confirmationId,
    level: "N3",
    actionRef: F3_CONFIRM_ACTION_REF,
    requestedBy: LOCAL_MORRIS_M3_ACTOR,
    requestedTo: LOCAL_MORRIS_M3_ACTOR,
    scope: contract.scope,
    idempotencyKey: `idem:gux15-cfm:${successorId}:v${contract.version}`,
    decisionRef: decisionId,
  });
  expect(requested.ok).toBe(true);

  const granted = await stack.decisions.grantConfirmation.execute({
    confirmationId,
    actor: LOCAL_MORRIS_M3_ACTOR,
    authorityEvidenceId: auth.evidenceId,
  });
  expect(granted.ok).toBe(true);

  const confirmed = await stack.contracts.confirmExecutionContract.execute({
    executionContractId: successorId,
    confirmationId,
    actor: LOCAL_MORRIS_M3_ACTOR,
    authorityEvidenceId: auth.evidenceId,
    expectedVersion,
  });
  expect(confirmed.ok).toBe(true);
  if (!confirmed.ok) throw new Error("confirm");
  contract = confirmed.contract;

  const attemptId = `xat:gux15:${successorId.replace(/^xct:/, "")}`;
  const selected = await stack.attempts.selectExecutionAgent.execute({
    attemptId,
    executionContractId: successorId,
    idempotencyKey: `idem:gux15-att:${successorId}`,
    actor: LOCAL_MORRIS_M3_ACTOR,
    authorityEvidenceId: auth.evidenceId,
    expectedContractVersion: contract.version,
    selectionProfile: "standard",
    selectionStrategy: "capabilities_deterministic",
    requestedAgentRef: F3_AGENT_ID,
    systemInitiated: true,
  });
  expect(selected.ok).toBe(true);
  if (!selected.ok) throw new Error(selected.error.message);

  const started = await stack.attempts.startExecution.execute({
    attemptId,
    actor: LOCAL_MORRIS_M3_ACTOR,
    authorityEvidenceId: auth.evidenceId,
  });
  expect(started.ok).toBe(true);
  if (!started.ok) throw new Error(started.error.message);

  const resultRef = `res:gux15-fixture:${attemptId}`;
  const recorded = await stack.attempts.recordExecutionResult.execute({
    attemptId,
    adapterId: F3_ADAPTER_ID,
    resultRef,
    technicalExitCode: 0,
  });
  expect(recorded.ok).toBe(true);
  if (!recorded.ok) throw new Error(recorded.error.message);

  return {
    attempt: recorded.attempt,
    launchCount: stack.fixtureAdapter.launchCallCount,
    contract,
  };
}

describe("G-UX-15 Slice A — resolveM3ExecutionContract", () => {
  it("AC — preserves unresolved original, supersedes to resolved successor, fixture-safe StartExecution", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-gux15-"));
    tempDirs.push(dir);
    const dbPath = path.join(dir, "oa.sqlite");
    const decisionId = "dec:gux15-happy";

    const stackA = await bootAt(dbPath);
    await createProject(stackA);
    await recordAcceptedGo(stackA, decisionId);
    const prepared = await prepareM3(stackA, decisionId);
    expect(prepared.executionAllowed).toBe(false);
    expect(prepared.contract.target).toBe("UNRESOLVED_TARGET");
    expect(prepared.contract.constraints).toContain("PREPARE_ONLY");
    const originalId = prepared.contract.executionContractId;
    const originalVersion = prepared.contract.version;

    // Dispose process-scoped services (PROCESS A end).
    stackA.projects.dispose();
    openServices.pop();

    // PROCESS B — reload durable state; no Proposal / Conversation.
    const stackB = await bootAt(dbPath);
    const resolved = await resolveFixture(
      stackB,
      decisionId,
      originalId,
      originalVersion,
    );
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;

    expect(resolved.reusedFromIdempotency).toBe(false);
    expect(resolved.original.status).toBe("superseded");
    expect(resolved.original.target).toBe("UNRESOLVED_TARGET");
    expect(resolved.original.requiredCapabilities).toContain("cap:unresolved");
    expect(resolved.successor.supersedesExecutionContractId).toBe(originalId);
    expect(resolved.successor.action).toBe(F3_ACTION);
    expect(resolved.successor.target).toBe(F3_TARGET);
    expect(resolved.successor.requiredCapabilities).toEqual([F3_CAPABILITY]);
    expect(resolved.successor.constraints).not.toContain("PREPARE_ONLY");
    expect(resolved.successor.constraints).not.toContain("NO_ATTEMPT");
    expect(resolved.successor.status).toBe("confirmation_required");

    const originalReload =
      await stackB.contracts.getExecutionContract.execute({
        executionContractId: originalId,
      });
    expect(originalReload.ok).toBe(true);
    if (!originalReload.ok) return;
    expect(originalReload.contract.status).toBe("superseded");
    expect(originalReload.contract.target).toBe("UNRESOLVED_TARGET");
    expect(originalReload.contract.constraints).toContain("PREPARE_ONLY");

    const exec = await confirmSelectStart(
      stackB,
      decisionId,
      resolved.successor.executionContractId,
      resolved.successor.version,
    );
    expect(exec.attempt.status).toBe("succeeded");
    expect(exec.attempt.selectedAgentRef).toBe(F3_AGENT_ID);
    expect(exec.launchCount).toBe(1);
    expect(stackB.fixtureAdapter.externalEffects).toBe(false);
    expect(stackB.fixtureAdapter.adapterId).toBe(F3_ADAPTER_ID);

    // Original never executed — no attempts on original id.
    const onOriginal = await stackB.attempts.listExecutionAttempts.execute({
      executionContractId: originalId,
    });
    expect(onOriginal.ok).toBe(true);
    if (onOriginal.ok) expect(onOriginal.attempts).toHaveLength(0);

    const onSuccessor = await stackB.attempts.listExecutionAttempts.execute({
      executionContractId: resolved.successor.executionContractId,
    });
    expect(onSuccessor.ok).toBe(true);
    if (onSuccessor.ok) expect(onSuccessor.attempts).toHaveLength(1);

    // Duplicate StartExecution does not produce a second Attempt/launch.
    const dupStart = await stackB.attempts.startExecution.execute({
      attemptId: exec.attempt.attemptId,
      actor: LOCAL_MORRIS_M3_ACTOR,
      authorityEvidenceId: `evd:m3-cfm:${resolved.successor.executionContractId}`,
    });
    expect(dupStart.ok).toBe(false);
    expect(stackB.fixtureAdapter.launchCallCount).toBe(1);

    const listedAfter = await stackB.attempts.listExecutionAttempts.execute({
      executionContractId: resolved.successor.executionContractId,
    });
    expect(listedAfter.ok).toBe(true);
    if (listedAfter.ok) expect(listedAfter.attempts).toHaveLength(1);
  });

  it("idempotent resolve replay returns same successor without second current executable", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-gux15-idem-"));
    tempDirs.push(dir);
    const dbPath = path.join(dir, "oa.sqlite");
    const decisionId = "dec:gux15-idem";
    const stack = await bootAt(dbPath);
    await createProject(stack);
    await recordAcceptedGo(stack, decisionId);
    const prepared = await prepareM3(stack, decisionId);

    const first = await resolveFixture(
      stack,
      decisionId,
      prepared.contract.executionContractId,
      prepared.contract.version,
    );
    expect(first.ok).toBe(true);
    if (!first.ok) return;

    const second = await resolveFixture(
      stack,
      decisionId,
      prepared.contract.executionContractId,
      prepared.contract.version,
    );
    expect(second.ok).toBe(true);
    if (!second.ok) return;
    expect(second.reusedFromIdempotency).toBe(true);
    expect(second.successor.executionContractId).toBe(
      first.successor.executionContractId,
    );

    const history = await stack.contracts.listExecutionContractHistory.execute({
      projectId: PROJECT_ID,
    });
    expect(history.ok).toBe(true);
    if (!history.ok) return;
    const currentish = history.contracts.filter(
      (c) =>
        c.status !== "superseded" &&
        c.status !== "cancelled" &&
        c.supersedesExecutionContractId ===
          prepared.contract.executionContractId,
    );
    expect(currentish).toHaveLength(1);
  });

  it("negative — unresolved resolution fields and non-accepted decisions", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-gux15-neg-"));
    tempDirs.push(dir);
    const dbPath = path.join(dir, "oa.sqlite");
    const decisionId = "dec:gux15-neg";
    const stack = await bootAt(dbPath);
    await createProject(stack);
    await recordAcceptedGo(stack, decisionId);
    const prepared = await prepareM3(stack, decisionId);
    const base = {
      projectId: PROJECT_ID,
      decisionId,
      originalExecutionContractId: prepared.contract.executionContractId,
      expectedOriginalVersion: prepared.contract.version,
      supersessionReason: "neg",
      deps: {
        decisionServices: stack.decisions,
        authorityResolver: stack.authority,
        executionContractServices: stack.contracts,
        nowIso: () => NOW,
        forceM3Authority: true,
      },
    };

    const unresolvedTarget = await resolveM3ExecutionContract({
      ...base,
      resolution: {
        ...fixtureResolution(),
        target: "UNRESOLVED_TARGET",
      },
    });
    expect(unresolvedTarget.ok).toBe(false);
    if (!unresolvedTarget.ok) {
      expect(unresolvedTarget.code).toBe("RESOLUTION_TARGET_UNRESOLVED");
    }

    const unresolvedCap = await resolveM3ExecutionContract({
      ...base,
      resolution: {
        ...fixtureResolution(),
        requiredCapabilities: ["cap:unresolved"],
      },
    });
    expect(unresolvedCap.ok).toBe(false);
    if (!unresolvedCap.ok) {
      expect(unresolvedCap.code).toBe("RESOLUTION_CAPABILITY_UNRESOLVED");
    }

    const unresolvedAction = await resolveM3ExecutionContract({
      ...base,
      resolution: {
        ...fixtureResolution(),
        action: "UNRESOLVED_ACTION",
      },
    });
    expect(unresolvedAction.ok).toBe(false);
    if (!unresolvedAction.ok) {
      expect(unresolvedAction.code).toBe("RESOLUTION_ACTION_UNRESOLVED");
    }

    const prepareOnlyConstraint = await resolveM3ExecutionContract({
      ...base,
      resolution: {
        ...fixtureResolution(),
        constraints: ["PREPARE_ONLY", "NO REAL"],
      },
    });
    expect(prepareOnlyConstraint.ok).toBe(false);
    if (!prepareOnlyConstraint.ok) {
      expect(prepareOnlyConstraint.code).toBe("RESOLUTION_CONSTRAINT_FORBIDDEN");
    }

    const staleVersion = await resolveM3ExecutionContract({
      ...base,
      expectedOriginalVersion: prepared.contract.version + 99,
      resolution: fixtureResolution(),
    });
    expect(staleVersion.ok).toBe(false);
    if (!staleVersion.ok) {
      expect(staleVersion.code).toBe("VERSION_CONFLICT");
    }

    // Amended decision — no DecisionBasis path.
    const amendId = "dec:gux15-amend";
    const amendAuth = registerM3LocalMorrisAuthority({
      authorityResolver: stack.authority,
      scope: `decision:${amendId}`,
      issuedAt: NOW,
      forceEnable: true,
      evidenceId: `evd:m3:${amendId}`,
    });
    expect(amendAuth.ok).toBe(true);
    if (!amendAuth.ok) return;
    const amended = await stack.decisions.recordHumanDecision.execute({
      decisionId: amendId,
      projectId: PROJECT_ID,
      subject: amendId,
      options: [{ optionId: "opt:amend", label: "AMEND" }],
      selectedOptionId: "opt:amend",
      actor: LOCAL_MORRIS_M3_ACTOR,
      authority: "morris",
      reversible: true,
      scope: `decision:${amendId}`,
      authorityEvidenceId: amendAuth.evidenceId,
      status: "amended",
    });
    expect(amended.ok).toBe(true);

    const amendResolve = await resolveM3ExecutionContract({
      ...base,
      decisionId: amendId,
      resolution: fixtureResolution(),
    });
    expect(amendResolve.ok).toBe(false);
    if (!amendResolve.ok) {
      expect(["DECISION_NOT_CURRENT", "DECISION_BASIS_REQUIRED"]).toContain(
        amendResolve.code,
      );
    }
  });

  it("negative — refuse confirm/start of original unresolved M3 contract", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-gux15-orig-"));
    tempDirs.push(dir);
    const dbPath = path.join(dir, "oa.sqlite");
    const decisionId = "dec:gux15-orig";
    const stack = await bootAt(dbPath);
    await createProject(stack);
    await recordAcceptedGo(stack, decisionId);
    const prepared = await prepareM3(stack, decisionId);

    const auth = registerM3LocalMorrisAuthority({
      authorityResolver: stack.authority,
      scope: prepared.contract.scope,
      issuedAt: NOW,
      forceEnable: true,
      evidenceId: `evd:m3-badcfm:${decisionId}`,
    });
    expect(auth.ok).toBe(true);
    if (!auth.ok) return;

    const confirmationId = `cfm:bad:${prepared.contract.executionContractId}`;
    const requested = await stack.decisions.requestConfirmation.execute({
      confirmationId,
      level: "N3",
      actionRef: F3_CONFIRM_ACTION_REF,
      requestedBy: LOCAL_MORRIS_M3_ACTOR,
      requestedTo: LOCAL_MORRIS_M3_ACTOR,
      scope: prepared.contract.scope,
      idempotencyKey: `idem:badcfm:${decisionId}`,
      decisionRef: decisionId,
    });
    expect(requested.ok).toBe(true);
    const granted = await stack.decisions.grantConfirmation.execute({
      confirmationId,
      actor: LOCAL_MORRIS_M3_ACTOR,
      authorityEvidenceId: auth.evidenceId,
    });
    expect(granted.ok).toBe(true);

    // Confirm may succeed on confirmation_required status — but agent match must fail
    // because cap:unresolved / UNRESOLVED_TARGET cannot match fixture agent.
    const confirmed = await stack.contracts.confirmExecutionContract.execute({
      executionContractId: prepared.contract.executionContractId,
      confirmationId,
      actor: LOCAL_MORRIS_M3_ACTOR,
      authorityEvidenceId: auth.evidenceId,
      expectedVersion: prepared.contract.version,
    });
    // Whether confirm is allowed, selection must fail closed on unresolved fields.
    if (confirmed.ok) {
      const selected = await stack.attempts.selectExecutionAgent.execute({
        attemptId: `xat:bad:${decisionId}`,
        executionContractId: prepared.contract.executionContractId,
        idempotencyKey: `idem:bad-att:${decisionId}`,
        actor: LOCAL_MORRIS_M3_ACTOR,
        authorityEvidenceId: auth.evidenceId,
        expectedContractVersion: confirmed.contract.version,
        selectionProfile: "standard",
        selectionStrategy: "capabilities_deterministic",
        requestedAgentRef: F3_AGENT_ID,
        systemInitiated: true,
      });
      expect(selected.ok).toBe(false);
    } else {
      expect(confirmed.ok).toBe(false);
    }
    expect(stack.fixtureAdapter.launchCallCount).toBe(0);
  });

  it("negative — invalid agent capability / project mismatch", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-gux15-agent-"));
    tempDirs.push(dir);
    const dbPath = path.join(dir, "oa.sqlite");
    const decisionId = "dec:gux15-agent";
    const stack = await bootAt(dbPath);
    await createProject(stack);
    await recordAcceptedGo(stack, decisionId);
    const prepared = await prepareM3(stack, decisionId);

    const resolved = await resolveM3ExecutionContract({
      projectId: PROJECT_ID,
      decisionId,
      originalExecutionContractId: prepared.contract.executionContractId,
      expectedOriginalVersion: prepared.contract.version,
      supersessionReason: "agent mismatch setup",
      resolution: {
        ...fixtureResolution(),
        requiredCapabilities: ["cap:does-not-exist-for-fixture"],
        // Keep F3 action/target/scope so contract validates; match fails at select.
      },
      deps: {
        decisionServices: stack.decisions,
        authorityResolver: stack.authority,
        executionContractServices: stack.contracts,
        nowIso: () => NOW,
        forceM3Authority: true,
      },
    });
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;

    const auth = registerM3LocalMorrisAuthority({
      authorityResolver: stack.authority,
      scope: resolved.successor.scope,
      issuedAt: NOW,
      forceEnable: true,
      evidenceId: `evd:m3-agent:${decisionId}`,
    });
    expect(auth.ok).toBe(true);
    if (!auth.ok) return;
    const confirmationId = `cfm:agent:${resolved.successor.executionContractId}`;
    await stack.decisions.requestConfirmation.execute({
      confirmationId,
      level: "N3",
      actionRef: F3_CONFIRM_ACTION_REF,
      requestedBy: LOCAL_MORRIS_M3_ACTOR,
      requestedTo: LOCAL_MORRIS_M3_ACTOR,
      scope: resolved.successor.scope,
      idempotencyKey: `idem:agentcfm:${decisionId}`,
      decisionRef: decisionId,
    });
    await stack.decisions.grantConfirmation.execute({
      confirmationId,
      actor: LOCAL_MORRIS_M3_ACTOR,
      authorityEvidenceId: auth.evidenceId,
    });
    const confirmed = await stack.contracts.confirmExecutionContract.execute({
      executionContractId: resolved.successor.executionContractId,
      confirmationId,
      actor: LOCAL_MORRIS_M3_ACTOR,
      authorityEvidenceId: auth.evidenceId,
      expectedVersion: resolved.successor.version,
    });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) return;

    const selected = await stack.attempts.selectExecutionAgent.execute({
      attemptId: `xat:agent:${decisionId}`,
      executionContractId: resolved.successor.executionContractId,
      idempotencyKey: `idem:agent-att:${decisionId}`,
      actor: LOCAL_MORRIS_M3_ACTOR,
      authorityEvidenceId: auth.evidenceId,
      expectedContractVersion: confirmed.contract.version,
      selectionProfile: "standard",
      selectionStrategy: "capabilities_deterministic",
      requestedAgentRef: F3_AGENT_ID,
      systemInitiated: true,
    });
    expect(selected.ok).toBe(false);

    const projectMismatch = await resolveM3ExecutionContract({
      projectId: "prj:other",
      decisionId,
      originalExecutionContractId: prepared.contract.executionContractId,
      expectedOriginalVersion: prepared.contract.version,
      supersessionReason: "mismatch",
      resolution: fixtureResolution(),
      deps: {
        decisionServices: stack.decisions,
        authorityResolver: stack.authority,
        executionContractServices: stack.contracts,
        nowIso: () => NOW,
        forceM3Authority: true,
      },
    });
    expect(projectMismatch.ok).toBe(false);
    if (!projectMismatch.ok) {
      expect(projectMismatch.code).toBe("PROJECT_MISMATCH");
    }
  });

  it("C1 — explicit unresolved stopConditions reject before supersession", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-gux15-c1-"));
    tempDirs.push(dir);
    const dbPath = path.join(dir, "oa.sqlite");
    const decisionId = "dec:gux15-c1";
    const stack = await bootAt(dbPath);
    await createProject(stack);
    await recordAcceptedGo(stack, decisionId);
    const prepared = await prepareM3(stack, decisionId);
    expect(prepared.contract.executionContractId).toBe(
      canonicalM3PrepareContractId(decisionId),
    );

    for (const sentinel of UNRESOLVED_STOP_SENTINELS) {
      const rejected = await resolveM3ExecutionContract({
        projectId: PROJECT_ID,
        decisionId,
        originalExecutionContractId: prepared.contract.executionContractId,
        expectedOriginalVersion: prepared.contract.version,
        supersessionReason: `c1 ${sentinel}`,
        resolution: {
          ...fixtureResolution(),
          stopConditions: [sentinel, "AUTHORITY_DENIED"],
        },
        deps: {
          decisionServices: stack.decisions,
          authorityResolver: stack.authority,
          executionContractServices: stack.contracts,
          nowIso: () => NOW,
          forceM3Authority: true,
        },
      });
      expect(rejected.ok).toBe(false);
      if (!rejected.ok) {
        expect(rejected.code).toBe("RESOLUTION_STOP_UNRESOLVED");
      }
    }

    const original = await stack.contracts.getExecutionContract.execute({
      executionContractId: prepared.contract.executionContractId,
    });
    expect(original.ok).toBe(true);
    if (!original.ok) return;
    expect(original.contract.status).not.toBe("superseded");

    const history = await stack.contracts.listExecutionContractHistory.execute({
      projectId: PROJECT_ID,
    });
    expect(history.ok).toBe(true);
    if (!history.ok) return;
    expect(
      history.contracts.filter((c) =>
        c.executionContractId.startsWith("xct:m3-res:"),
      ),
    ).toHaveLength(0);
    expect(stack.fixtureAdapter.launchCallCount).toBe(0);
  });

  it("C1 — successful successor contains none of the known unresolved stop sentinels", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-gux15-c1ok-"));
    tempDirs.push(dir);
    const dbPath = path.join(dir, "oa.sqlite");
    const decisionId = "dec:gux15-c1ok";
    const stack = await bootAt(dbPath);
    await createProject(stack);
    await recordAcceptedGo(stack, decisionId);
    const prepared = await prepareM3(stack, decisionId);
    const resolved = await resolveFixture(
      stack,
      decisionId,
      prepared.contract.executionContractId,
      prepared.contract.version,
    );
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;
    for (const sentinel of UNRESOLVED_STOP_SENTINELS) {
      expect(resolved.successor.stopConditions).not.toContain(sentinel);
    }
    expect(resolved.successor.action).not.toBe("UNRESOLVED_ACTION");
    expect(resolved.successor.target).not.toBe("UNRESOLVED_TARGET");
    expect(resolved.successor.requiredCapabilities).not.toContain(
      "cap:unresolved",
    );
  });

  it("C3 — noncanonical originalExecutionContractId rejects before mutation", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-gux15-c3-"));
    tempDirs.push(dir);
    const dbPath = path.join(dir, "oa.sqlite");
    const decisionId = "dec:gux15-c3";
    const stack = await bootAt(dbPath);
    await createProject(stack);
    await recordAcceptedGo(stack, decisionId);
    const prepared = await prepareM3(stack, decisionId);

    const rejected = await resolveM3ExecutionContract({
      projectId: PROJECT_ID,
      decisionId,
      originalExecutionContractId: "xct:m3:not-this-decision",
      expectedOriginalVersion: prepared.contract.version,
      supersessionReason: "c3 identity",
      resolution: fixtureResolution(),
      deps: {
        decisionServices: stack.decisions,
        authorityResolver: stack.authority,
        executionContractServices: stack.contracts,
        nowIso: () => NOW,
        forceM3Authority: true,
      },
    });
    expect(rejected.ok).toBe(false);
    if (!rejected.ok) {
      expect(rejected.code).toBe("CANONICAL_M3_CONTRACT_MISMATCH");
    }

    const original = await stack.contracts.getExecutionContract.execute({
      executionContractId: prepared.contract.executionContractId,
    });
    expect(original.ok).toBe(true);
    if (!original.ok) return;
    expect(original.contract.status).not.toBe("superseded");
    expect(stack.fixtureAdapter.launchCallCount).toBe(0);
  });

  it("C2 — supersession success + validation failure recovers by validating SAME successor", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-gux15-c2-"));
    tempDirs.push(dir);
    const dbPath = path.join(dir, "oa.sqlite");
    const decisionId = "dec:gux15-c2";
    const stack = await bootAt(dbPath);
    await createProject(stack);
    await recordAcceptedGo(stack, decisionId);
    const prepared = await prepareM3(stack, decisionId);

    let validateCalls = 0;
    const realValidate = stack.contracts.validateExecutionContract;
    const wrappedServices = {
      ...stack.contracts,
      validateExecutionContract: {
        execute: async (req: {
          executionContractId: string;
          actor: typeof LOCAL_MORRIS_M3_ACTOR;
          authorityEvidenceId?: string;
        }) => {
          validateCalls += 1;
          if (validateCalls === 1) {
            return {
              ok: false as const,
              error: {
                detailCode: "AUTHORITY_DENIED",
                message: "injected validation failure",
              },
              durationMs: 0,
            };
          }
          return realValidate.execute(req);
        },
      },
    };

    const first = await resolveM3ExecutionContract({
      projectId: PROJECT_ID,
      decisionId,
      originalExecutionContractId: prepared.contract.executionContractId,
      expectedOriginalVersion: prepared.contract.version,
      supersessionReason: "c2 interrupted validation",
      resolution: fixtureResolution(),
      deps: {
        decisionServices: stack.decisions,
        authorityResolver: stack.authority,
        executionContractServices: wrappedServices as typeof stack.contracts,
        nowIso: () => NOW,
        forceM3Authority: true,
      },
    });
    expect(first.ok).toBe(false);
    expect(validateCalls).toBe(1);

    const originalAfter = await stack.contracts.getExecutionContract.execute({
      executionContractId: prepared.contract.executionContractId,
    });
    expect(originalAfter.ok).toBe(true);
    if (!originalAfter.ok) return;
    expect(originalAfter.contract.status).toBe("superseded");

    const successorId = `xct:m3-res:${decisionId.replace(/[^a-zA-Z0-9:_-]/g, "").slice(0, 48)}`;
    const successorAfter = await stack.contracts.getExecutionContract.execute({
      executionContractId: successorId,
    });
    expect(successorAfter.ok).toBe(true);
    if (!successorAfter.ok) return;
    expect(["draft", "proposed"]).toContain(successorAfter.contract.status);
    expect(successorAfter.contract.supersedesExecutionContractId).toBe(
      prepared.contract.executionContractId,
    );

    const attemptsAfter = await stack.attempts.listExecutionAttempts.execute({
      executionContractId: successorId,
    });
    expect(attemptsAfter.ok).toBe(true);
    if (attemptsAfter.ok) expect(attemptsAfter.attempts).toHaveLength(0);

    const historyAfter = await stack.contracts.listExecutionContractHistory.execute({
      projectId: PROJECT_ID,
    });
    expect(historyAfter.ok).toBe(true);
    if (!historyAfter.ok) return;
    expect(
      historyAfter.contracts.filter(
        (c) =>
          c.supersedesExecutionContractId ===
          prepared.contract.executionContractId,
      ),
    ).toHaveLength(1);

    // Replay with normal validation — validates EXISTING successor.
    const second = await resolveFixture(
      stack,
      decisionId,
      prepared.contract.executionContractId,
      prepared.contract.version,
    );
    expect(second.ok).toBe(true);
    if (!second.ok) return;
    expect(second.reusedFromIdempotency).toBe(true);
    expect(second.successor.executionContractId).toBe(successorId);
    expect(second.successor.status).toBe("confirmation_required");

    const third = await resolveFixture(
      stack,
      decisionId,
      prepared.contract.executionContractId,
      prepared.contract.version,
    );
    expect(third.ok).toBe(true);
    if (!third.ok) return;
    expect(third.reusedFromIdempotency).toBe(true);
    expect(third.successor.executionContractId).toBe(successorId);

    const historyFinal = await stack.contracts.listExecutionContractHistory.execute({
      projectId: PROJECT_ID,
    });
    expect(historyFinal.ok).toBe(true);
    if (!historyFinal.ok) return;
    expect(
      historyFinal.contracts.filter(
        (c) =>
          c.supersedesExecutionContractId ===
          prepared.contract.executionContractId,
      ),
    ).toHaveLength(1);
    expect(stack.fixtureAdapter.launchCallCount).toBe(0);

    // Fixture-safe composition still works after recovery.
    const exec = await confirmSelectStart(
      stack,
      decisionId,
      second.successor.executionContractId,
      second.successor.version,
    );
    expect(exec.attempt.status).toBe("succeeded");
    expect(exec.launchCount).toBe(1);
  });

  it("C2 — cancelled expected successor fails closed", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-gux15-c2can-"));
    tempDirs.push(dir);
    const dbPath = path.join(dir, "oa.sqlite");
    const decisionId = "dec:gux15-c2can";
    const stack = await bootAt(dbPath);
    await createProject(stack);
    await recordAcceptedGo(stack, decisionId);
    const prepared = await prepareM3(stack, decisionId);
    const resolved = await resolveFixture(
      stack,
      decisionId,
      prepared.contract.executionContractId,
      prepared.contract.version,
    );
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;

    const auth = registerM3LocalMorrisAuthority({
      authorityResolver: stack.authority,
      scope: resolved.successor.scope,
      issuedAt: NOW,
      forceEnable: true,
      evidenceId: `evd:m3-cancel:${decisionId}`,
    });
    expect(auth.ok).toBe(true);
    if (!auth.ok) return;

    const cancelled = await stack.contracts.cancelExecutionContract.execute({
      executionContractId: resolved.successor.executionContractId,
      reason: "abort resolution candidate",
      actor: LOCAL_MORRIS_M3_ACTOR,
      authorityEvidenceId: auth.evidenceId,
    });
    expect(cancelled.ok).toBe(true);

    const replay = await resolveFixture(
      stack,
      decisionId,
      prepared.contract.executionContractId,
      prepared.contract.version,
    );
    expect(replay.ok).toBe(false);
    if (!replay.ok) {
      expect(replay.code).toBe("STATE_CONFLICT");
    }
  });

  it("F1 — wrong successor requiredAuthority fails closed before validation", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-gux15-f1-auth-"));
    tempDirs.push(dir);
    const dbPath = path.join(dir, "oa.sqlite");
    const decisionId = "dec:gux15-f1-auth";
    const stack = await bootAt(dbPath);
    await createProject(stack);
    await recordAcceptedGo(stack, decisionId);
    const prepared = await prepareM3(stack, decisionId);
    const resolved = await resolveFixture(
      stack,
      decisionId,
      prepared.contract.executionContractId,
      prepared.contract.version,
    );
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;

    const successorId = resolved.successor.executionContractId;
    let validateCalls = 0;
    const realGet = stack.contracts.getExecutionContract;
    const realValidate = stack.contracts.validateExecutionContract;
    const wrapped = {
      ...stack.contracts,
      getExecutionContract: {
        execute: async (req: { executionContractId: string }) => {
          const got = await realGet.execute(req);
          if (!got.ok || req.executionContractId !== successorId) return got;
          return {
            ok: true as const,
            contract: {
              ...got.contract,
              requiredAuthority: "N3" as const,
            },
            durationMs: 0,
          };
        },
      },
      validateExecutionContract: {
        execute: async (req: {
          executionContractId: string;
          actor: typeof LOCAL_MORRIS_M3_ACTOR;
          authorityEvidenceId?: string;
        }) => {
          validateCalls += 1;
          return realValidate.execute(req);
        },
      },
    };

    const replay = await resolveM3ExecutionContract({
      projectId: PROJECT_ID,
      decisionId,
      originalExecutionContractId: prepared.contract.executionContractId,
      expectedOriginalVersion: prepared.contract.version,
      supersessionReason: "f1 auth",
      resolution: fixtureResolution(),
      deps: {
        decisionServices: stack.decisions,
        authorityResolver: stack.authority,
        executionContractServices: wrapped as typeof stack.contracts,
        nowIso: () => NOW,
        forceM3Authority: true,
      },
    });
    expect(replay.ok).toBe(false);
    if (!replay.ok) {
      expect(replay.code).toBe("SUCCESSOR_GOVERNANCE_MISMATCH");
    }
    expect(validateCalls).toBe(0);
    expect(stack.fixtureAdapter.launchCallCount).toBe(0);
    const history = await stack.contracts.listExecutionContractHistory.execute({
      projectId: PROJECT_ID,
    });
    expect(history.ok).toBe(true);
    if (history.ok) {
      expect(
        history.contracts.filter(
          (c) =>
            c.supersedesExecutionContractId ===
            prepared.contract.executionContractId,
        ),
      ).toHaveLength(1);
    }
  });

  it("F1 — wrong / missing / extra decisionRefs fail closed before validation", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-gux15-f1-refs-"));
    tempDirs.push(dir);
    const dbPath = path.join(dir, "oa.sqlite");
    const decisionId = "dec:gux15-f1-refs";
    const stack = await bootAt(dbPath);
    await createProject(stack);
    await recordAcceptedGo(stack, decisionId);
    const prepared = await prepareM3(stack, decisionId);
    const resolved = await resolveFixture(
      stack,
      decisionId,
      prepared.contract.executionContractId,
      prepared.contract.version,
    );
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;
    const successorId = resolved.successor.executionContractId;
    const realGet = stack.contracts.getExecutionContract;

    for (const badRefs of [
      undefined,
      [],
      ["dec:other"],
      [decisionId, "dec:extra"],
    ] as Array<string[] | undefined>) {
      let validateCalls = 0;
      const wrapped = {
        ...stack.contracts,
        getExecutionContract: {
          execute: async (req: { executionContractId: string }) => {
            const got = await realGet.execute(req);
            if (!got.ok || req.executionContractId !== successorId) return got;
            const mutated: ExecutionContract = {
              ...got.contract,
              decisionRefs: badRefs,
            };
            return { ok: true as const, contract: mutated, durationMs: 0 };
          },
        },
        validateExecutionContract: {
          execute: async (req: {
            executionContractId: string;
            actor: typeof LOCAL_MORRIS_M3_ACTOR;
            authorityEvidenceId?: string;
          }) => {
            validateCalls += 1;
            return stack.contracts.validateExecutionContract.execute(req);
          },
        },
      };
      const replay = await resolveM3ExecutionContract({
        projectId: PROJECT_ID,
        decisionId,
        originalExecutionContractId: prepared.contract.executionContractId,
        expectedOriginalVersion: prepared.contract.version,
        supersessionReason: "f1 refs",
        resolution: fixtureResolution(),
        deps: {
          decisionServices: stack.decisions,
          authorityResolver: stack.authority,
          executionContractServices: wrapped as typeof stack.contracts,
          nowIso: () => NOW,
          forceM3Authority: true,
        },
      });
      expect(replay.ok).toBe(false);
      if (!replay.ok) {
        expect(replay.code).toBe("SUCCESSOR_GOVERNANCE_MISMATCH");
      }
      expect(validateCalls).toBe(0);
    }
    expect(stack.fixtureAdapter.launchCallCount).toBe(0);
  });

  it("F1 — wrong canonical resolution idempotency fails closed", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-gux15-f1-idem-"));
    tempDirs.push(dir);
    const dbPath = path.join(dir, "oa.sqlite");
    const decisionId = "dec:gux15-f1-idem";
    const stack = await bootAt(dbPath);
    await createProject(stack);
    await recordAcceptedGo(stack, decisionId);
    const prepared = await prepareM3(stack, decisionId);
    const resolved = await resolveFixture(
      stack,
      decisionId,
      prepared.contract.executionContractId,
      prepared.contract.version,
    );
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;
    const successorId = resolved.successor.executionContractId;
    expect(resolved.successor).toBeTruthy();
    const expectedKey = canonicalM3ResolutionIdempotencyKey(
      decisionId,
      successorId,
    );
    const realGet = stack.contracts.getExecutionContract;
    let validateCalls = 0;
    const wrapped = {
      ...stack.contracts,
      getExecutionContract: {
        execute: async (req: { executionContractId: string }) => {
          const got = await realGet.execute(req);
          if (!got.ok || req.executionContractId !== successorId) return got;
          expect(got.contract.idempotencyKey).toBe(expectedKey);
          return {
            ok: true as const,
            contract: {
              ...got.contract,
              idempotencyKey: "idem:m3-res:forged",
            },
            durationMs: 0,
          };
        },
      },
      validateExecutionContract: {
        execute: async (req: {
          executionContractId: string;
          actor: typeof LOCAL_MORRIS_M3_ACTOR;
          authorityEvidenceId?: string;
        }) => {
          validateCalls += 1;
          return stack.contracts.validateExecutionContract.execute(req);
        },
      },
    };
    const replay = await resolveM3ExecutionContract({
      projectId: PROJECT_ID,
      decisionId,
      originalExecutionContractId: prepared.contract.executionContractId,
      expectedOriginalVersion: prepared.contract.version,
      supersessionReason: "f1 idem",
      resolution: fixtureResolution(),
      deps: {
        decisionServices: stack.decisions,
        authorityResolver: stack.authority,
        executionContractServices: wrapped as typeof stack.contracts,
        nowIso: () => NOW,
        forceM3Authority: true,
      },
    });
    expect(replay.ok).toBe(false);
    if (!replay.ok) {
      expect(replay.code).toBe("SUCCESSOR_GOVERNANCE_MISMATCH");
    }
    expect(validateCalls).toBe(0);
  });

  it("F1 — validated-only MORRIS successor fails closed (not completed resolution)", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-gux15-f1-val-"));
    tempDirs.push(dir);
    const dbPath = path.join(dir, "oa.sqlite");
    const decisionId = "dec:gux15-f1-val";
    const stack = await bootAt(dbPath);
    await createProject(stack);
    await recordAcceptedGo(stack, decisionId);
    const prepared = await prepareM3(stack, decisionId);
    const resolved = await resolveFixture(
      stack,
      decisionId,
      prepared.contract.executionContractId,
      prepared.contract.version,
    );
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;
    // Lifecycle proof: MORRIS validate yields confirmation_required, not validated.
    expect(resolved.successor.status).toBe("confirmation_required");
    expect(resolved.successor.requiredAuthority).toBe("MORRIS");

    const successorId = resolved.successor.executionContractId;
    const realGet = stack.contracts.getExecutionContract;
    const wrapped = {
      ...stack.contracts,
      getExecutionContract: {
        execute: async (req: { executionContractId: string }) => {
          const got = await realGet.execute(req);
          if (!got.ok || req.executionContractId !== successorId) return got;
          return {
            ok: true as const,
            contract: {
              ...got.contract,
              status: "validated" as const,
              requiredAuthority: "MORRIS" as const,
            },
            durationMs: 0,
          };
        },
      },
    };
    const replay = await resolveM3ExecutionContract({
      projectId: PROJECT_ID,
      decisionId,
      originalExecutionContractId: prepared.contract.executionContractId,
      expectedOriginalVersion: prepared.contract.version,
      supersessionReason: "f1 validated",
      resolution: fixtureResolution(),
      deps: {
        decisionServices: stack.decisions,
        authorityResolver: stack.authority,
        executionContractServices: wrapped as typeof stack.contracts,
        nowIso: () => NOW,
        forceM3Authority: true,
      },
    });
    expect(replay.ok).toBe(false);
    if (!replay.ok) {
      expect(replay.code).toBe("STATE_CONFLICT");
    }
  });

  it("F2 — failed T-A5 successor replays idempotently without new attempt/launch", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-gux15-f2-fail-"));
    tempDirs.push(dir);
    const dbPath = path.join(dir, "oa.sqlite");
    const decisionId = "dec:gux15-f2-fail";
    const stack = await bootAt(dbPath);
    await createProject(stack);
    await recordAcceptedGo(stack, decisionId);
    const prepared = await prepareM3(stack, decisionId);
    const resolved = await resolveFixture(
      stack,
      decisionId,
      prepared.contract.executionContractId,
      prepared.contract.version,
    );
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;

    const successorId = resolved.successor.executionContractId;
    const auth = registerM3LocalMorrisAuthority({
      authorityResolver: stack.authority,
      scope: resolved.successor.scope,
      issuedAt: NOW,
      forceEnable: true,
      evidenceId: `evd:m3-fail:${successorId}`,
    });
    expect(auth.ok).toBe(true);
    if (!auth.ok) return;

    const confirmationId = `cfm:gux15-fail:${successorId}`;
    await stack.decisions.requestConfirmation.execute({
      confirmationId,
      level: "N3",
      actionRef: F3_CONFIRM_ACTION_REF,
      requestedBy: LOCAL_MORRIS_M3_ACTOR,
      requestedTo: LOCAL_MORRIS_M3_ACTOR,
      scope: resolved.successor.scope,
      idempotencyKey: `idem:gux15-fail-cfm:${successorId}`,
      decisionRef: decisionId,
    });
    await stack.decisions.grantConfirmation.execute({
      confirmationId,
      actor: LOCAL_MORRIS_M3_ACTOR,
      authorityEvidenceId: auth.evidenceId,
    });
    const confirmed = await stack.contracts.confirmExecutionContract.execute({
      executionContractId: successorId,
      confirmationId,
      actor: LOCAL_MORRIS_M3_ACTOR,
      authorityEvidenceId: auth.evidenceId,
      expectedVersion: resolved.successor.version,
    });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) return;

    const attemptId = `xat:gux15-fail:${successorId.replace(/^xct:/, "")}`;
    const selected = await stack.attempts.selectExecutionAgent.execute({
      attemptId,
      executionContractId: successorId,
      idempotencyKey: `idem:gux15-fail-att:${successorId}`,
      actor: LOCAL_MORRIS_M3_ACTOR,
      authorityEvidenceId: auth.evidenceId,
      expectedContractVersion: confirmed.contract.version,
      selectionProfile: "standard",
      selectionStrategy: "capabilities_deterministic",
      requestedAgentRef: F3_AGENT_ID,
      systemInitiated: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) return;

    const started = await stack.attempts.startExecution.execute({
      attemptId,
      actor: LOCAL_MORRIS_M3_ACTOR,
      authorityEvidenceId: auth.evidenceId,
    });
    expect(started.ok).toBe(true);
    if (!started.ok) return;
    expect(stack.fixtureAdapter.launchCallCount).toBe(1);

    // Existing T-A5 failure API — fixture-safe, externalEffects remain false.
    const failed = await stack.attempts.recordExecutionFailure.execute({
      attemptId,
      adapterId: F3_ADAPTER_ID,
      errorRef: "err:gux15-fixture-fail",
      stopReason: "fixture-controlled technical failure",
      technicalExitCode: 1,
    });
    expect(failed.ok).toBe(true);
    if (!failed.ok) return;
    expect(failed.contractStatus).toBe("failed");

    const contractFailed = await stack.contracts.getExecutionContract.execute({
      executionContractId: successorId,
    });
    expect(contractFailed.ok).toBe(true);
    if (!contractFailed.ok) return;
    expect(contractFailed.contract.status).toBe("failed");

    let validateCalls = 0;
    let supersedeCalls = 0;
    const wrapped = {
      ...stack.contracts,
      validateExecutionContract: {
        execute: async (req: {
          executionContractId: string;
          actor: typeof LOCAL_MORRIS_M3_ACTOR;
          authorityEvidenceId?: string;
        }) => {
          validateCalls += 1;
          return stack.contracts.validateExecutionContract.execute(req);
        },
      },
      supersedeExecutionContract: {
        execute: async (req: Parameters<
          typeof stack.contracts.supersedeExecutionContract.execute
        >[0]) => {
          supersedeCalls += 1;
          return stack.contracts.supersedeExecutionContract.execute(req);
        },
      },
    };

    const replay = await resolveM3ExecutionContract({
      projectId: PROJECT_ID,
      decisionId,
      originalExecutionContractId: prepared.contract.executionContractId,
      expectedOriginalVersion: prepared.contract.version,
      supersessionReason: "f2 failed replay",
      resolution: fixtureResolution(),
      deps: {
        decisionServices: stack.decisions,
        authorityResolver: stack.authority,
        executionContractServices: wrapped as typeof stack.contracts,
        nowIso: () => NOW,
        forceM3Authority: true,
      },
    });
    expect(replay.ok).toBe(true);
    if (!replay.ok) return;
    expect(replay.reusedFromIdempotency).toBe(true);
    expect(replay.successor.executionContractId).toBe(successorId);
    expect(replay.successor.status).toBe("failed");
    expect(validateCalls).toBe(0);
    expect(supersedeCalls).toBe(0);
    expect(stack.fixtureAdapter.launchCallCount).toBe(1);
    expect(stack.fixtureAdapter.externalEffects).toBe(false);

    const attempts = await stack.attempts.listExecutionAttempts.execute({
      executionContractId: successorId,
    });
    expect(attempts.ok).toBe(true);
    if (attempts.ok) expect(attempts.attempts).toHaveLength(1);

    const history = await stack.contracts.listExecutionContractHistory.execute({
      projectId: PROJECT_ID,
    });
    expect(history.ok).toBe(true);
    if (history.ok) {
      expect(
        history.contracts.filter(
          (c) =>
            c.supersedesExecutionContractId ===
            prepared.contract.executionContractId,
        ),
      ).toHaveLength(1);
    }
  });

  it("F2 — completed T-A5 successor remains idempotent replay PASS", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-gux15-f2-done-"));
    tempDirs.push(dir);
    const dbPath = path.join(dir, "oa.sqlite");
    const decisionId = "dec:gux15-f2-done";
    const stack = await bootAt(dbPath);
    await createProject(stack);
    await recordAcceptedGo(stack, decisionId);
    const prepared = await prepareM3(stack, decisionId);
    const resolved = await resolveFixture(
      stack,
      decisionId,
      prepared.contract.executionContractId,
      prepared.contract.version,
    );
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;

    const exec = await confirmSelectStart(
      stack,
      decisionId,
      resolved.successor.executionContractId,
      resolved.successor.version,
    );
    expect(exec.attempt.status).toBe("succeeded");

    const contractDone = await stack.contracts.getExecutionContract.execute({
      executionContractId: resolved.successor.executionContractId,
    });
    expect(contractDone.ok).toBe(true);
    if (!contractDone.ok) return;
    expect(contractDone.contract.status).toBe("completed");

    const replay = await resolveFixture(
      stack,
      decisionId,
      prepared.contract.executionContractId,
      prepared.contract.version,
    );
    expect(replay.ok).toBe(true);
    if (!replay.ok) return;
    expect(replay.reusedFromIdempotency).toBe(true);
    expect(replay.successor.status).toBe("completed");
    expect(replay.successor.executionContractId).toBe(
      resolved.successor.executionContractId,
    );
    expect(stack.fixtureAdapter.launchCallCount).toBe(1);
  });
});

// Keep unused import type referenced for clarity in tooling.
void (null as unknown as ExecutionAttemptServices);

```

### 12–16. Evidence summary
- F1 wrong authority / decisionRefs / idempotency → SUCCESSOR_GOVERNANCE_MISMATCH, validateCalls=0
- validated-only MORRIS → STATE_CONFLICT (lifecycle also yields confirmation_required on validate)
- F2 failed via recordExecutionFailure → replay ok, reusedFromIdempotency, same successor, no validate/supersede, 1 Attempt, 1 launch
- completed replay PASS; cancelled fail-closed retained
- interrupted validation replay still PASS

### 17–18. Regression / typecheck / eslint
```
5 files / 50 tests PASS
(gux15 16 + m3 prepare + m3 restart + supersede/cancel + f3 fixture)
npm run typecheck → PASS
eslint affected → clean
```

### 19. COMPLETE updated Pre-M6 artifact
```markdown
# SFIA Studio — Qualification pré-M6 du parcours utilisateur / référentiel UX

| Champ | Valeur |
|---|---|
| Statut | **BASELINE FONCTIONNELLE PRÉ-M6 ADOPTÉE PAR MORRIS — READINESS FIGMA / DELIVERY NON ACQUISE — GAPS OUVERTS** |
| Rôle | Artefact de baseline fonctionnelle pré-M6 + readiness consolidée des écarts G-UX-01→15 |
| Cycle | Cycle 2 — Conception fonctionnelle · CONTINUATION / DÉCISION + GAP READINESS |
| Profil / typologie | Critique · DESIGN / DOC / AUDIT / DECISION READINESS |
| Capacité principale | V3-F05 — conversation → décision → exécution |
| Capacités complémentaires | V3-F02 · V3-F14 · V3-F15 |
| Base Git | `origin/main@2f0d7236e4e1b7c7ca8e987b9d4e6e3ece3c37a7` |
| Jalon | RÉFÉRENTIEL PRÉ-M6 DU PARCOURS UTILISATEUR / UX |
| Acteur produit | Morris / pilote du projet |
| Autorité de livraison | **AUCUNE** — aucune UI Delivery, aucun Figma, M6, Cursor REAL ni changement d’exécution |
| Décision Morris consommée | Timeline : D-PRE-M6-UX-01/02/03 ADOPT ; **historique** D-PRE-M6-UX-04 = REQUALIFY (supersédé) → SELECT SLICE A → AMEND → **FINAL AMEND** G-UX-15 Slice A ; D-PRE-M6-UX-05 NO DECISION YET ; exit proof **ACCEPTANCE PENDING** |

## 1. Périmètre et conclusion de la qualification

Ce document est la **baseline fonctionnelle pré-M6 adoptée par Morris** pour le parcours utilisateur M1→M5, l’architecture fonctionnelle de l’information et le principe de réutilisation UI. Il conserve l’audit complet antérieur et y ajoute la readiness consolidée pré-Figma des écarts G-UX-01→15.

L’exécution actuelle démontre les capacités requises sur M1→M5. Le chemin durable M3 PREPARE demeure l’audit anchor ; **Slice A** fournit le bridge applicatif `resolveM3ExecutionContract` (successeur résolu via supersession existante) avec preuve fixture-safe. **G-UX-15 = IMPLEMENTED CANDIDATE — FINAL AMEND APPLIED — FIXTURE-SAFE APPLICATION WIRING PROOF PASS — CHATGPT RE-REVIEW / MORRIS EXIT-PROOF ACCEPTANCE PENDING** : Figma / UI Delivery / M6 restent non autorisés ; la fixture n’est pas une preuve produit du chemin critique.

La Conversation et la Proposal restent locales au processus. Morris a **accepté** cette limite pour le **premier test utilisateur fonctionnel borné uniquement**. La future UX doit être honnête sur le redémarrage/la reprise, récupérer depuis l’état durable du projet, requalifier si nécessaire, et ne jamais fabriquer un contexte de travail perdu. Ceci n’autorise aucune nouvelle persistance.

L’interface utilisateur existante ne forme pas un produit cohérent unique. Elle comprend :

1. une tranche verticale `/studio/projects/[id]` adossée à OA, disposant du câblage M1→M5 le plus utile, mais utilisant un vocabulaire d’implémentation et une projection technique dense ;
2. des surfaces D1 d’intention, d’espace de travail et de cockpit, offrant des comportements utiles centrés sur la conversation et des modèles d’orientation, mais reposant sur un modèle d’état distinct et une intégration OA incomplète ;
3. des écrans de fixture P0 `/synthese`, `/cycle-actif`, `/decision`, dont les composants visuels peuvent être récupérés sélectivement, mais dont le flux et les données ne constituent pas l’exécution canonique ;
4. une surface historique OPS1 présentant un comportement historique d’exécution et de rapport, qui doit rester isolée du chemin produit.

Le référentiel **adopté** est une **expérience projet dominée par la conversation**, avec un résumé vivant du projet toujours accessible et des surfaces contextuelles, orientées tâche, pour la décision, l’exécution et les preuves. Il s’appuie sur l’OA Native Backbone et Product SQLite existants. Il ne nécessite ni moteur métier propre à l’interface, ni état de projet dupliqué, ni modèle de décision dupliqué, ni persistance parallèle.

**Résultat :** BASELINE FONCTIONNELLE PRÉ-M6 ADOPTÉE PAR MORRIS — readiness Figma / UI Delivery **non acquises** — gaps G-UX-01→15 classifiés — **G-UX-15 = IMPLEMENTED CANDIDATE — FINAL AMEND APPLIED — FIXTURE-SAFE APPLICATION WIRING PROOF PASS — CHATGPT RE-REVIEW / MORRIS EXIT-PROOF ACCEPTANCE PENDING** (BLOCKER PENDING MORRIS ACCEPTANCE) — **aucun** Figma, UI Delivery, M6 ni REAL autorisé.

**Anti-revendications :** baseline fonctionnelle adoptée ≠ référentiel UX visuel approuvé ≠ Figma autorisé ≠ gaps implémentés ≠ UI Delivery autorisée ≠ Pre-M6 terminée ≠ M6 Entry Qualification ≠ runtime v3 ADOPTED. Les dispositions individuelles KEEP / ADAPT / HARVEST / REPLACE / FREEZE / RETIRE LATER restent des **recommandations** jusqu’aux gates de readiness / Delivery pertinentes.

## 2. Autorité et hiérarchie des sources

### 2.1 Ordre de priorité appliqué

1. Implémentation Git et tests à la base indiquée.
2. Décisions explicites de Morris consignées dans l’autorité de convergence actuelle.
3. Sources actuelles validées de convergence et v3.
4. Sources historiques produit/UX.
5. Inférences clairement signalées.

Le cadrage validé `30` et le dossier de décisions `37` prévalent sur les formulations candidates contradictoires des cadrages historiques `11` et `16`. Le contenu historique n’est récupéré que lorsqu’il est compatible avec l’exécution et la doctrine actuelles.

Conversation et Recommendation sont des entrées contextuelles/cognitives, et non une autorité de décision ni des substituts aux preuves Git/d’exécution et à la HumanDecision de Morris.

### 2.2 Sources consultées

Processus et routage :

- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `method/sfia-fast-track/core/sfia-knowledge-layer.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md`
- `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md`
- `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/02-conception-fonctionnelle.md`

Le CKC détaillé du Cycle 2 **est présent**, contrairement à l’hypothèse de repli du contrat de cycle. Son statut est `candidate` ; il n’a servi que de guide cognitif et n’a ni élargi le périmètre ni autorisé de décisions.

Convergence et autorité produit actuelle :

- `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md`
- `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`
- `projects/sfia-studio/sfia-v3-framing/30-knowledge-context-human-decision-doctrine.md`
- `projects/sfia-studio/sfia-v3-framing/31-doctrine-package-and-source-resolution.md`
- `projects/sfia-studio/sfia-v3-framing/32-living-project-state-and-dynamic-trajectory.md`
- `projects/sfia-studio/sfia-v3-framing/33-epistemology-provenance-and-contradiction-model.md`
- `projects/sfia-studio/sfia-v3-framing/34-agent-capabilities-reversibility-and-execution-governance.md`
- `projects/sfia-studio/sfia-v3-framing/35-artifact-evidence-debt-and-controlled-learning.md`
- `projects/sfia-studio/sfia-v3-framing/37-studio-v3-foundations-and-consolidation-decision-pack.md`

Sources historiques/complémentaires :

- `projects/sfia-studio/sfia-v3-framing/11-sfia-v3-ux-information-architecture.md`
- `projects/sfia-studio/sfia-v3-framing/16-sfia-v3-user-journey-and-doctrine-enforcement.md`
- `projects/sfia-studio/08-functional-design.md`

Les sources d’exécution, d’interface et de tests ont été examinées sous :

- `projects/sfia-studio/app/app/**`
- `projects/sfia-studio/app/features/**`
- `projects/sfia-studio/app/lib/oa/**`
- `projects/sfia-studio/app/lib/vertical-slice-runtime/**`
- `projects/sfia-studio/app/lib/d1/**`
- `projects/sfia-studio/app/__tests__/**`
- `projects/sfia-studio/app/e2e/**`

### 2.3 État de convergence gouverné

- M5 : **CLOSED**.
- M5-C : **KEEP TEMPORARY WITH EXIT** ; propriétaire **non explicitement consigné** (dette de gouvernance post-M5) ; le journal technique de lancement reste distinct du stockage Product Attempt et n’a pas été retiré.
- Trajectoire pré-M6 : **DECIDED**.
- Qualification pré-M6 : **COMPLETE + CHATGPT REVIEW PASS** (artefact français) ; **adoption Morris** consommée dans ce cycle de continuation.
- Parcours utilisateur canonique : **ADOPTED BY MORRIS** (D-PRE-M6-UX-01).
- Architecture fonctionnelle de l’information : **ADOPTED BY MORRIS** (D-PRE-M6-UX-02).
- Principe de réutilisation UI : **ADOPTED BY MORRIS AT PRINCIPLE LEVEL** (D-PRE-M6-UX-03) — dispositions individuelles de composants **non consommées automatiquement**.
- Limitation process-local premier test : **ACCEPTED BY MORRIS**.
- G-UX-15 : **IMPLEMENTED CANDIDATE — FINAL AMEND APPLIED — FIXTURE-SAFE APPLICATION WIRING PROOF PASS — CHATGPT RE-REVIEW / MORRIS EXIT-PROOF ACCEPTANCE PENDING** (Slice A sélectionnée, implémentée, amendée + final amend ; Figma / UI Delivery / M6 toujours non autorisés).
- Readiness consolidée G-UX-01→15 : **AUTHORIZED / COMPLETED** (classification historique) ; **G-UX-15 Slice A** a depuis reçu une implémentation candidat locale (+ amends) — hors commit projet.
- Figma Visual Contract : **NOT AUTHORIZED** (D-PRE-M6-UX-05 = NO DECISION YET).
- Pre-M6 UI Delivery : **NOT AUTHORIZED**.
- M6 : **NOT STARTED / NOT AUTHORIZED**.
- runtime v3 : **NON ADOPTED**.
- Consommation de Cursor REAL / Gate D dans ce cycle : **0**.
- Sync Roadmap : **REQUISE APRÈS** acceptation Morris de l’exit proof G-UX-15 / intégration — **non autorisée** dans ce cycle.

## 3. Acteur et tâches à accomplir

### 3.1 Acteur principal

Morris, agissant comme pilote du projet et autorité humaine. L’administration multi-utilisateur, les permissions et l’architecture des personas sont hors du périmètre de ce candidat, sauf si une qualification distincte les exige ultérieurement.

### 3.2 Tâche principale

Piloter un projet avec Nora au travers de la boucle gouvernée M1→M5 sans devoir comprendre les modules OA, les identifiants du dépôt, les mécanismes CKC, Product SQLite, les indicateurs d’implémentation ou les détails de lancement Cursor.

### 3.3 Compréhension requise

À tout moment significatif, Morris doit pouvoir répondre aux questions suivantes :

- Dans quel projet suis-je et quel est son état actuel ?
- Que sait Nora et qu’est-ce qui demeure incertain ?
- L’énoncé affiché est-il une observation, une hypothèse, une option, une Recommendation, une HumanDecision, un fait d’exécution, une Evidence ou une conclusion de revue ?
- Qu’est-ce qui requiert mon autorité maintenant ?
- Qu’est-ce qui serait exactement exécuté et sous quel contrat ?
- L’exécution est-elle non démarrée, en préparation, en cours, réussie, échouée, arrivée à expiration ou bloquée ?
- Quelles Evidence et quel ReviewBundle existent ?
- Que recommande Nora après examen des preuves ?
- Quelle est la prochaine action utile ou validation humaine ?
- Qu’est-ce qui survivra à un rechargement/une reprise, et quel contexte de travail peut être perdu ?

## 4. Contraintes de doctrine UX

1. **CC-D01 :** la Conversation est le modèle d’interaction dominant.
2. **CC-D03 :** LivingProjectState utilise un panneau persistant sur ordinateur et un modèle de feuille/tiroir adaptatif sur les écrans plus petits ; il soutient la conversation plutôt que de la remplacer par un tableau de bord. Les dimensions définitives relèvent d’une future décision de contrat visuel.
3. **CC-D05 / CC-D06 :** HumanDecision et l’autorité d’exécution sont des confirmations explicites et structurées, proportionnées à l’effet : N1 léger/réversible, N2 persistant ou significatif, N3 structurel/irréversible.
4. **CC-D05 :** Recommendation n’est jamais présentée comme une HumanDecision déjà consommée.
5. **CC-D13 :** Project n’est pas Cycle. Un projet peut avoir un cycle actuel et un historique de cycles.
6. **CC-D12 :** les mécanismes internes CKC, les identifiants du dépôt et les empreintes ne sont pas du contenu produit de premier niveau ; le repli reste silencieux dans les sources v3 autorisées.
7. **CC-D01 :** un indicateur principal d’étapes n’est pas le modèle du produit.
8. **CC-D01 :** un espace de travail permanent à plusieurs panneaux n’est pas l’architecture MVP par défaut.
9. La divulgation progressive expose à la demande les détails, la provenance et les diagnostics techniques.
10. Evidence et ReviewBundle restent accessibles, lisibles et liés au résultat pertinent.
11. Product SQLite, `REAL_LOCAL_CORE`, les identifiants internes, les empreintes de contrat, la branche/HEAD, les indicateurs `REAL_*` et les modes d’adaptateur sont des détails de diagnostic, non une navigation principale.
12. La continuité de la Conversation coexiste avec l’état structuré, les décisions, les contrats, l’exécution et les preuves ; le produit n’est pas un clone générique de messagerie.
13. Nora ne dispose que d’une autorité de recommandation et d’analyse. Morris conserve l’autorité de décision et d’exécution.

## 5. Cartographie des capacités d’exécution M1→M5 actuelles

| Étape | Capacité utilisateur/produit | Objets et cas d’utilisation | Adaptateur / persistance | Interface et preuve actuelles | Limite | Traitement pré-M6 |
|---|---|---|---|---|---|---|
| M1 | Créer, ouvrir et recharger un projet avec son état vivant | `Project`, `LivingProjectState` ; cas d’utilisation de création/lecture du projet et du LPS actuel | Unité de travail projet OA Product SQLite | `/studio/projects/new` → `/studio/projects/[id]` ; tests de redémarrage du projet | `/studio` et `/projects` ne disposent pas de page d’accueil de collection ; plusieurs commentaires/divulgations indiquent encore une portée uniquement locale | Présentation + câblage de la liste/navigation des projets |
| M2 | Démarrer/qualifier un cycle selon le contexte actuel et la doctrine résolue | `CycleInstance`, résolution CKC, F2 `ContextSnapshot` ; qualification du cycle / contexte cognitif | Liaison Project/LPS/Cycle durable dans Product SQLite ; contenu conversationnel F2 actif local au processus | Orchestration F2 de l’assistant du projet et tests de pilotage cognitif | Les identifiants CKC et les détails d’exécution débordent dans l’espace de travail ; aucun résumé utilisateur cohérent de l’état de qualification | Présentation ; réutiliser l’orchestration |
| M3 | Examiner une proposition, consigner la décision de Morris, préparer un contrat d’exécution résistant au redémarrage | `Proposal` locale au processus ; `HumanDecision`, `DecisionBasis`, `ExecutionContract` durables ; cas d’utilisation de décision et de préparation/validation/remplacement | Services SQLite de décision/contrat ; Proposal et mémoire de conversation | `ProjectAssistantPanel` ; tests F2/F3/M3 + `resolveM3ExecutionContract` (Slice A) | **Historique :** PREPARE-only non exécutable. **Actuel :** bridge Slice A prouve fixture-safe le successeur résolu via supersession ; UI assistant sans bouton M3 confirm (hors scope) ; AMEND retour clarification incomplet (G-UX-08) | Bridge technique Slice A présent ; UI/E2E produit + acceptation Morris encore ouverts |
| M4 | Examiner le contrat, confirmer l’autorité, démarrer une exécution contrôlée et observer le cycle de vie de l’Attempt | Domaine/ports Attempt, `ExecutionContract`, confirmation, octroi Gate D, `AgentCapability` RO limitée ; `StartExecution` est l’unique séquenceur | Journal technique M5-C CREATED/LAUNCHED dans un SQLite distinct, pas dans Product Store ; adaptateur de fixture sans effet ; REAL désactivé par défaut | Fixture assistant + composition G-UX-15 tests (Confirm/Select/Start) ; tests gouvernance M4 ; Attempts REAL historiques hors ce cycle | **Historique :** seul chemin UI fixture atteignait l’exécution. **Actuel :** composition applicative fixture-safe via Slice A prouvée en tests ; UI produit / REAL toujours non autorisés | Preuve technique fixture-safe ; pas de REAL ; UI Delivery non autorisée |
| M5 | Lire Attempt, Evidence et ReviewBundle durables ; voir les références LPS factuelles et la Recommendation de Nora après rechargement | `ExecutionAttempt`, `Evidence`, `ReviewBundle`, LPS `evidenceIds`/`reviewBundleIds` ; collecter/examiner/recommander/réhydrater | OA Product SQLite pour Attempt/Evidence/ReviewBundle lorsque `productDurablePath` est actif ; rédacteur système factuel W1, autorité `none` | Action/effet de réhydratation de l’assistant ; tests M5 de redémarrage, durabilité, ajout W1 et remontage de l’interface | La présentation des preuves/revues est intégrée et ne permet pas de naviguer dans l’historique du projet ; l’actualité de la Recommendation n’est pas expliquée | Présentation + câblage de l’historique du projet |

### 5.1 Limite de durabilité

Durables actuellement :

- Project et LivingProjectState ;
- liaison CycleInstance et référence actuelle de résolution CKC ;
- HumanDecision et DecisionBasis ;
- ExecutionContract ;
- ExecutionAttempt ;
- Evidence et ReviewBundle ;
- références factuelles LPS de preuve/revue ;
- relecture actuelle des preuves/revues durables après remontage/rechargement.

Locaux au processus ou partiellement locaux au processus actuellement :

- historique de la conversation ;
- Proposal et résultat de qualification de travail ;
- Confirmation en Memory même lorsque HumanDecision/ExecutionContract utilisent Product SQLite ;
- `MemoryAuthorityResolver` local / preuve de validation Morris (temporaire avec sortie) ;
- sous-ensembles de trajectoire/épistémiques, d’affirmations et de maturité non promus à la durabilité produit.

Local au processus ne signifie pas non fonctionnel. Cela signifie que l’UX ne doit pas laisser entendre des garanties de reprise que l’exécution ne fournit pas.

### 5.2 Réalité des actions de l’assistant du projet

Les noms d’action indiqués dans le contrat d’exécution (`projectAssistantStartF1Action`, `ContinueF1`, `AcceptF1`, `QualifyF2`, `DecideF2`, `ReprepareF3AfterRestart`, `ConfirmF3`, `ConfirmAndExecuteF3`) n’existent **pas** à cette base Git.

La surface d’actions actuellement implémentée dans `features/project-assistant/actions.ts` est :

- `projectAssistantSendAction` — orchestration de la conversation/F1 et du tour F2 ;
- `projectAssistantDecideAction` — décision explicite sur la proposition ;
- `projectAssistantPrepareF3FixtureAction` — préparation du contrat de fixture ;
- `projectAssistantPrepareM3Action` — préparation du contrat M3 durable à partir de la décision ;
- `projectAssistantConfirmAndExecuteF3FixtureAction` — confirmation et exécution contrôlée de la fixture via le chemin applicatif gouverné ;
- `projectAssistantRehydrateEvidenceOutcomeAction` — relecture durable de Evidence/ReviewBundle/Recommendation.

Le candidat UX associe ces faits à des tâches utilisateur ; il n’expose pas les noms d’action comme des étapes.

## 6. Audit de l’interface existante

### 6.1 Inventaire des routes

| Route | Responsabilité actuelle | Réalité de l’exécution | Statut candidat |
|---|---|---|---|
| `/` | Redirection vers la synthèse P0 | Entrée de fixture, pas la réalité du portefeuille | REPLACE ultérieurement la destination de la route |
| `/synthese` | Résumé de tranche verticale P0 avec sélecteur d’état de démonstration | État de fixture/harness ; aucune collection de projets canonique | FREEZE ; HARVEST uniquement les primitives visuelles |
| `/nouvelle-demande` | Entrée actuelle principale D1-C1 centrée sur l’intention et appariement déterministe, rendue dans `D1AppShell` | Modèle/SQLite D1 isolé ; aucune chaîne OA M1→M5 | HARVEST BEHAVIOR ; ADAPT dans l’entrée projet/conversation |
| `/workspace` | Liste/orientation actuelle des projets D1 | Commandes/stockage SQLite D1 distincts | HARVEST du comportement d’orientation ; REPLACE le câblage |
| `/projects/new` | Formulaire manuel de projet D1 | Chemin D1, distinct de la tranche verticale OA | FREEZE ; consolider ultérieurement |
| `/projects/[id]` | Cockpit et audit du projet D1 | Modèle de projet D1 distinct | HARVEST du regroupement de l’information ; REPLACE le câblage |
| `/studio` | Aucune route ; page introuvable P0 | Entrée canonique manquante | COMPLETE avec une entrée/liste des projets dans une future Delivery |
| `/studio/projects/new` | Création de projet dans la tranche verticale OA | Chemin actuel Project/LPS Product SQLite | KEEP le câblage ; ADAPT la présentation |
| `/studio/projects/[id]` | Projection du projet OA + assistant Nora + flux M2→M5 | Câblage le plus robuste de l’exécution canonique | KEEP le câblage/comportement ; REPLACE la mise en page et la présentation technique |
| `/cycle-actif` | Écran de cycle P0 | État de tranche verticale de fixture | FREEZE ; HARVEST les composants sélectionnés d’état/preuve |
| `/decision` | Écran de décision Morris P0 | Décision de fixture, pas la décision OA actuelle consignée | FREEZE ; HARVEST le langage d’autorité/comportement des composants |
| `/ops1/nouvelle-demande` | Cockpit d’exécution actif et maintenu I1–I6 sur l’ossature historique OPS1 | Cycle de vie/SQLite OPS1 parallèle avec couverture E2E | FREEZE comme chemin canonique ; HARVEST le comportement limité ; RETIRE LATER uniquement après décision explicite de Morris et preuve de remplacement |

`/projects` n’a pas de page d’index et renvoie l’expérience de page introuvable P0. La route dynamique `/projects/[id]` existe, ce qui crée une ambiguïté de navigation.

### 6.2 Audit des surfaces/composants significatifs et classifications candidates

| Surface / actif | Capacité utile | Dette / conflit | Disposition candidate et granularité de réutilisation | Confiance / validation Morris |
|---|---|---|---|---|
| `app/studio/projects/[id]/page.tsx` | Compose la projection du projet OA et l’assistant Nora | Shell/copilote droit fixe ; affirmations obsolètes `LOCAL_PROCESS`, `NOT_READY`, « lecture seule » malgré les actions M3–M5 | **ADAPT** la route ; KEEP la composition et les limites de données, remplacer les libellés/la mise en page | Élevée ; adoption soumise à D-PRE-M6-UX-03 |
| `ProjectAssistantPanel.tsx` | Conversation, Proposal F2, décision explicite, préparation/confirmation/exécution de fixture F3, réhydratation durable | Composant unique très volumineux ; les modes d’implémentation, le flux d’événements et les cartes d’étape concurrencent la conversation ; la notice locale au processus est toujours technique | **HARVEST BEHAVIOR + WIRING**, pas la conception visuelle ; scinder par états fonctionnels lors d’une future Delivery | Élevée ; validation de disposition significative |
| `ProjectWorkspaceView.tsx` | Lit Project/LPS/Cycle/doctrine/état de préparation depuis l’exécution actuelle | Expose identifiants, référence/empreinte CKC, `REAL_LOCAL_CORE`, indicateurs de persistance et Product SQLite ; grilles de définition centrées sur les objets ; échappatoire OPS1 | **REPLACE PRESENTATION**, KEEP le chargeur et les projections ; récupérer objectif/contraintes/contenu de l’état actuel | Élevée ; validation de disposition significative |
| `ProjectWorkspaceClient.tsx` | Chargement et pont d’action vers l’exécution OA | Commentaires obsolètes affirmant un singleton global en mémoire ; chargement uniquement client dupliquant le comportement possible côté serveur de la page | **ADAPT** le câblage après nettoyage de la source de vérité ; aucune revendication de réutilisation visuelle | Moyenne |
| `CreateProjectForm` (`/studio/projects/new`) | Crée Project/LPS via l’exécution actuelle de tranche verticale | La divulgation technique domine ; le formulaire manuel précède la conversation ; texte obsolète sur la portée locale | **KEEP WIRING / ADAPT BEHAVIOR**, remplacer la hiérarchie visuelle/de contenu | Élevée |
| D1 `IntakeView` / `/nouvelle-demande` | Langage clair centré sur l’intention, exemples, posture de clarification/appariement | Modèle D1 distinct, formulaires dupliqués, aucun enchaînement OA actuel | **HARVEST BEHAVIOR**, pas le composant ni le stockage ; adapter dans la conversation canonique | Élevée |
| D1 `WorkspaceHomeView` | Concepts d’orientation/liste des projets | Persistance/commandes distinctes ; aucun modèle OA de résultat durable | **HARVEST INFORMATION MODEL**, remplacer le câblage et le référentiel visuel | Moyenne |
| D1 `ProjectCockpitView` | Regroupement objectif/contexte/audit | Le « cockpit » risque une doctrine centrée sur le tableau de bord ; modèle distinct | **HARVEST CONTENT GROUPING**, pas l’architecture de cockpit | Moyenne |
| `StudioShell` / navigation | Shell accessible existant, liens de routes, primitives d’état | Mélange les routes P0, D1, Studio et OPS1 comme des pairs ; la correspondance exacte de `/studio/projects/[id]` dynamique ne laisse aucun élément actif dans le rail ; la page OPS1 met en évidence la route d’entrée D1 ; preuves désactivées ; le rail droit impose une tendance multi-panneaux | **KEEP le shell / ADAPT la navigation** ; remplacer la taxonomie des routes et la correspondance des routes actives | Élevée |
| P0 `SyntheseScreen`, `CycleActifScreen`, `DecisionScreen` et `Vs*` | Cartes, pastilles, vocabulaire de décision/preuve, états déterministes | Sélecteurs de fixture/harness, modèle « cycle actuel » dupliqué, preuves et décisions simulées | **FREEZE** les flux ; **HARVEST COMPONENTS** sélectivement après liaison à l’exécution ; ne pas récupérer le comportement de fixture | Élevée |
| Primitives d’interface (`Card`, `StatusPill`, `CtaButton`, primitives de preuve/validation) | Blocs de composants accessibles testés | Le langage visuel est propre à P0 et certaines sémantiques sont surchargées | **KEEP/ADAPT COMPONENTS** en attente du futur contrat visuel ; aucune revendication de référentiel visuel | Moyenne |
| Interface de session OPS1 | Comportement actif I1–I6 de session/validation/liste d’autorisation/contrat/Attempt/rapport sur une ossature historique | Cycle de vie parallèle, statut historique explicite, langage technique de Delivery | **FREEZE** la route ; **HARVEST BEHAVIOR**, par exemple les indices de liste d’autorisation/autorité bornés, pas le modèle d’exécution ; **RETIRE LATER** uniquement après preuve de remplacement et GO de Morris | Élevée ; décision finale de retrait requise |

### 6.3 Dette observée

- La navigation expose trois démarrages produit concurrents : synthèse P0, entrée/espace de travail D1 et routes de projet OA Studio.
- L’état du shell/de la navigation est divisé : D1 utilise `D1AppShell` ; Studio/P0/OPS1 utilisent `StudioShell`, avec une sélection de rail incorrecte/absente sur OPS1 et les projets Studio dynamiques.
- La route canonique d’exécution actuelle ne dispose d’aucune liste/entrée de projet à `/studio`.
- Les objets d’exécution sont affichés comme des sections techniques distinctes plutôt que comme un récit orienté utilisateur de « l’état du projet ».
- « Local », « fixture », « Product SQLite », les références CKC, identifiants internes, indicateurs de préparation, branche/HEAD et modes d’adaptateur apparaissent au premier niveau.
- Le texte actuel est incohérent : `RuntimeDisclosureBanner` affiche correctement la durabilité partielle de Project/LPS/Cycle/Decision/Contract et Product SQLite, alors que le texte voisin avertit encore que le redémarrage perd toutes les données ou qu’il n’existe aucune persistance produit ; les libellés « read-only » et « no writing » coexistent avec les actions M3–M5.
- Les responsabilités de décision/preuve sont dupliquées entre la fixture P0 et l’assistant OA.
- Evidence est accessible dans la sortie de l’assistant mais ne dispose pas d’une destination stable dans l’historique du projet.
- Les messages d’erreur expliquent souvent les limites de processus/d’exécution plutôt que la récupération en termes produit.

### 6.4 Audit visuel de l’état actuel

La commande documentée existante `npm run dev` a démarré correctement sur le port 3020. L’examen du navigateur en lecture seule a couvert `/synthese`, `/studio` (introuvable), `/studio/projects/new`, `/projects` (introuvable), `/ops1/nouvelle-demande` et `/nouvelle-demande`.

Observations :

- `/synthese` est visuellement cohérent, mais dominé par un sélecteur d’état de fixture, les métadonnées du harness et les affirmations « vertical slice POC ».
- `/studio/projects/new` présente un formulaire utilisable, mais met en avant les divulgations locales/d’exécution et les indicateurs internes de préparation.
- `/nouvelle-demande` exprime le mieux le langage souhaité centré sur l’intention, mais est câblé à D1 plutôt qu’à la chaîne OA M1→M5.
- `/studio` et `/projects` ne fournissent pas l’entrée produit attendue.

Les captures d’écran ont servi uniquement de preuves d’audit transitoires ; aucune capture suivie ni action Figma n’a été produite.

## 7. Candidat de parcours utilisateur canonique M1→M5

### 7.1 Forme du parcours

L’expérience principale est une conversation de projet unique, avec des moments structurés apparaissant dans leur contexte. Un résumé compact du projet vivant reste accessible. Les détails de décision, d’exécution et de preuve s’ouvrent contextuellement et restent disponibles dans l’historique du projet. Ils ne constituent pas des produits CRUD distincts ni un indicateur d’étapes obligatoire.

### 7.2 Parcours détaillé

| N° / moment | Intention et action de l’utilisateur | Responsabilité de Nora | Système/objet et informations visibles | Autorité / persistance | Réussite, vide/chargement/erreur/récupération | Suite |
|---|---|---|---|---|---|---|
| 0 Entrer/sélectionner/créer | Trouver un projet existant ou décrire une nouvelle intention | Proposer une orientation concise, ne pas exiger d’abord des champs d’implémentation | Liste des projets/projet récent ou intention de création ; `Project`, LPS | La création de Project est une action utilisateur ; Project/LPS durables | Vide : créer le premier projet. Échec de chargement/lecture : réessayer, proposer une option de diagnostic non technique. Introuvable : revenir aux projets | Orientation du projet |
| 1 S’orienter | Comprendre l’identité, l’objectif, l’état/le cycle actuel et l’action suivante | Résumer l’état connu et l’incertitude | Titre/objectif du projet ; résumé LPS ; état du Cycle actuel ; dernier résultat ; prochaine action recommandée | Lecture seule ; faits durables signalés | L’absence de cycle actuel est légitime. Une erreur de péremption/lecture distingue « inconnu » de « aucun » | Converser |
| 2 Exprimer l’intention | Énoncer le résultat souhaité en langage naturel | Écouter, préserver le contexte du projet, ne poser que des questions utiles | Conversation et résumé accessible du projet | Conversation locale au processus ; divulguer la limite de reprise à la demande | Invite vide ; état de traitement ; fournisseur indisponible → conserver le brouillon/réessayer ou chemin de qualification manuelle | Clarifier |
| 3 Clarifier/qualifier | Répondre aux questions et examiner ce que Nora a compris | Distinguer faits, observations, hypothèses et écarts ; résoudre CKC en interne | État de qualification et informations manquantes ; CycleInstance / ContextSnapshot actif | Résultat de travail local au processus ; liaison Cycle durable | Un écart incomplet/bloquant identifie la question exacte et permet une reprise dans la session | Résultat structuré |
| 4 Résultat de qualification | Examiner observations, options, Recommendation et réserves | Présenter preuve/provenance de manière proportionnée ; ne jamais laisser entendre une décision | Vue Proposal : compréhension, options, Recommendation, écarts/réserves | Recommendation uniquement ; Proposal locale au processus | Incomplète/périmée → clarifier/requalifier ; aucune option → expliquer l’écart bloquant | Validation Morris |
| 5 Validation de décision explicite | Approuver, rejeter, approuver avec réserves ou demander un amendement | Expliquer les conséquences de façon neutre | Résumé de décision, option choisie, réserves, périmètre et suite | Validation HumanDecision explicite, normalement N2 et N3 si structurelle/irréversible ; AMEND est durable ; aucune autorité d’exécution encore | Une Proposal périmée bloque la décision. AMEND est enregistré, mais le chemin ultérieur de clarification/requalification doit être câblé plutôt que simulé | Consigner la décision ou clarifier |
| 6 Décision consignée | Vérifier ce qui a été décidé | Accuser réception sans agir au-delà de l’autorité | HumanDecision durable, DecisionBasis, acteur/heure/périmètre ; « décision enregistrée » visible | Durable ; Recommendation reste étiquetée séparément | Conflit/échec d’écriture → aucun état de réussite ; réessayer/recharger et afficher si la décision existe | Préparer le contrat |
| 7 Préparer/examiner le contrat | Comprendre exactement ce qui s’exécuterait | Traduire le contrat en objectif, périmètre, contraintes, effets et réserves | Résumé ExecutionContract avec détails techniques/de provenance dépliables | La préparation suit une décision valide ; contrat durable | Préparation ; non résolu/fermé par défaut ; périmé/nouvelle préparation requise ; l’échec permet le retour à la décision/au contexte | Confirmer l’exécution |
| 8 Validation de l’autorité d’exécution | Confirmer ou annuler l’exécution contrôlée | Réénoncer les effets significatifs et la limite de sécurité | Contrat lisible, capacité, sortie attendue, non-effets | Confirmation N2/N3 distincte selon persistance/réversibilité ; aucune confirmation implicite | Un contrat périmé/remplacé bloque ; l’annulation revient sans danger ; l’échec de confirmation est explicite | Démarrer |
| 9 Démarrage contrôlé | Démarrer l’exécution confirmée | Ne revendiquer aucune réussite avant l’existence d’une Attempt | StartExecution crée/démarre l’Attempt via l’unique séquenceur | Gate D/REAL non autorisés ici ; le futur chemin utilise la limite gouvernée actuelle | En préparation/bloqué ; démarrage dupliqué empêché ; la récupération lit l’Attempt existante plutôt que de réessayer aveuglément | État de l’Attempt |
| 10 Retour sur l’Attempt | Savoir si le travail est en attente/en cours/réussi/échoué/expiré | Expliquer l’état et la prochaine action sûre | État ExecutionAttempt, heures de début/fin, progression concise | Attempt durable ; journal technique maintenu comme diagnostic interne | Actualiser si en cours ; en cas d’échec/expiration, afficher les preuves éventuelles et aucun nouvel essai automatique ; si bloqué, expliquer l’autorité requise | Preuve |
| 11 Preuve/revue | Examiner ce qui s’est réellement produit | Séparer preuve brute, complétude et conclusion de revue | Liste Evidence + résumé ReviewBundle, complétude/intégrité et provenance dépliable | Durable | Absence légitime pendant l’exécution ; échec d’incomplétude/réhydratation distinct ; réessayer la lecture, pas l’exécution | Analyse de Nora |
| 12 Analyse après preuve | Comprendre le résultat | Analyser les preuves, contradictions, dettes et maturité dans les limites de l’autorité | Conclusion de revue, observations, écarts non résolus | L’analyse peut être dérivée ; les Evidence/RB sous-jacents sont durables | En attente de preuve ; analyse indisponible ; périmée si le résultat lié a été remplacé | Recommendation |
| 13 Recommendation/prochaine validation | Décider de la suite | Recommander, indiquer la confiance et l’autorité humaine requise | Recommendation explicitement étiquetée ; prochaine validation/action | Jamais une HumanDecision ni une validation consommée | Une Recommendation périmée pointe vers une preuve plus récente ; l’absence de Recommendation est légitime | Décision ou clôture de boucle |
| 14 Répercussion LPS | Voir la réalité du projet mise à jour | Expliquer mise à jour factuelle et choix structurel | Cycle/résultat actuel du LPS et références Evidence/RB factuelles | Autorité `none` du rédacteur système factuel W1 ; durable | Un échec d’écriture/lecture ne réécrit pas l’historique ; réessayer la réconciliation factuelle | Continuer le projet |
| 15 Rechargement/reprise | Reprendre avec une continuité honnête | Reconstruire depuis l’état durable et signaler le contexte de travail perdu | Project/LPS, HumanDecision, contrat, Attempt, Evidence/RB et résultat reviennent ; conversation/Proposal peuvent ne pas revenir | Distinction durable/local au processus visible à la reprise | Si le contexte de travail est perdu, proposer « reprendre depuis le dernier résultat durable » et requalifier, sans jamais fabriquer la conversation | Nouvelle conversation/validation actuelle |

### 7.3 Règles au niveau du parcours

- Un rejet termine ou redirige la proposition actuelle ; il n’en crée pas silencieusement une nouvelle.
- AMEND est une HumanDecision durable ; il renvoie à la clarification et exige une Proposal nouvellement qualifiée plutôt que la mutation de la Proposal décidée.
- La confirmation d’une décision et la confirmation d’une exécution sont distinctes.
- L’état est dérivé des faits d’exécution faisant autorité ; l’état de l’interface ne peut pas les faire progresser.
- Le rechargement restaure le dernier résultat durable, pas la transcription exacte locale au processus.
- Aucun nouvel essai automatique ne suit une exécution échouée/arrivée à expiration.

## 8. Candidat d’architecture fonctionnelle de l’information

### 8.1 Destinations de premier niveau

1. **Projets** — sélectionner, créer, rouvrir ; état récent et action suivante.
2. **Projet actuel** — destination principale du produit.
3. **Historique du projet** — chronologie contextuelle des décisions, résultats d’exécution, preuves/revues et transitions de cycle ; accessible depuis le projet actuel.
4. **Diagnostics** — détails d’assistance facultatifs, divulgués progressivement ; pas une navigation principale ni un explorateur d’objets de domaine M1→M5.

Aucune page globale distincte n’est requise pour Proposal, HumanDecision, ExecutionContract, ExecutionAttempt, Evidence, ReviewBundle ou Recommendation.

### 8.2 Hiérarchie du projet actuel

Par défaut :

- identité, objectif et résumé concis de l’état actuel du projet ;
- cycle/état actuel et dernier résultat durable ;
- prochaine action utile / validation humaine ;
- conversation dominante avec Nora ;
- résultat structuré contextuel lorsqu’il est actif.

À la demande :

- détail complet du LPS et trajectoire/historique ;
- fondement de décision et provenance ;
- contrat complet et contraintes techniques ;
- détails d’horodatage/d’état de l’Attempt ;
- détails/intégrité de Evidence et ReviewBundle ;
- diagnostics d’exécution et identifiants internes.

### 8.3 Conversation et état structuré

La Conversation est la surface continue. Les cartes structurées ne sont pas des messages de conversation se faisant passer pour de la prose : ce sont des vues typées liées à la conversation au moment pertinent et conservées dans l’historique une fois ce moment passé.

Le résumé de l’état vivant ne reproduit pas chaque objet de domaine. Il répond à :

- l’objectif et l’état actuels ;
- le cycle actuel et la préoccupation active ;
- la dernière décision et le résultat d’exécution ;
- la disponibilité des preuves/revues ;
- les écarts/dettes ouverts ;
- la prochaine validation recommandée.

### 8.4 Project et Cycle

Project est le conteneur durable et la destination utilisateur. CycleInstance est un épisode circonscrit en son sein. Le cycle actuel est affiché comme contexte du projet ; l’historique des cycles est accessible via l’historique du projet. Créer un projet n’implique pas de démarrer un cycle d’exécution, et fermer un cycle ne ferme pas le projet.

### 8.5 Transitions fonctionnelles

- Projets → projet actuel.
- Conversation du projet actuel → résultat de qualification.
- Résultat de qualification → validation HumanDecision.
- Décision → examen du contrat.
- Examen du contrat → validation de l’autorité d’exécution.
- Validation de l’autorité → état de l’Attempt.
- Attempt → Evidence/ReviewBundle.
- Revue des preuves → Recommendation de Nora.
- Recommendation → nouvelle décision explicite ou poursuite de la conversation.
- Tout événement durable → historique du projet et projection LPS factuelle.

## 9. Modèle d’état fonctionnel

Légende : **NOW** = directement pris en charge ; **DERIVED** = dérivation propre à l’interface à partir des faits actuels ; **GAP** = travail d’exécution/applicatif requis ; **FUTURE** = hors pré-M6.

| Domaine | État | Prise en charge | Représentation / contrainte UX |
|---|---|---|---|
| Project | aucun projet | DERIVED | État vide Projets avec action créer/décrire l’intention |
| Project | chargement / disponible / introuvable / échec de lecture | NOW | Squelette distinct, vue projet, récupération vers Projets, nouvel essai |
| Conversation | inactive / saisie / traitement par Nora | NOW | Préserver le brouillon ; un envoi actif |
| Conversation | clarification requise | NOW/DERIVED | Question de Nora et élément non résolu visible |
| Conversation | perte après redémarrage du processus | Limite NOW | Notice de reprise + reprise depuis le résultat durable |
| Qualification | non démarrée / en cours / terminée | NOW/DERIVED | État déduit du résultat assistant/F2 |
| Qualification | écart incomplet/bloquant | NOW/DERIVED | Écart et donnée requise ; aucune fausse complétude |
| Qualification | périmée/requalification requise | DERIVED ; certaines validations NOW | Bloquer décision/préparation lorsque le fondement n’est plus actuel |
| Décision | Recommendation uniquement / décision requise | NOW | Libellés et actions explicites |
| Décision | acceptée / rejetée / avec réserves | NOW | Résultat durable, distinct de Recommendation |
| Décision | amendement demandé | NOW comme décision durable `amended` ; GAP pour le câblage ultérieur de clarification/requalification | Afficher l’amendement enregistré, puis diriger vers une Proposal nouvellement qualifiée |
| Décision | indisponible/périmée | NOW/DERIVED | Fermé par défaut ; requalifier/recharger |
| Contrat | en préparation / prêt pour examen | NOW | Progression puis contrat lisible |
| Contrat | non résolu/fermé par défaut | NOW | Écart requis et aucune action de confirmation |
| Contrat | confirmé | NOW | Fait de confirmation distinct de l’Attempt |
| Contrat | périmé/nouvelle préparation requise | NOW | Repréparer depuis la décision durable actuelle |
| Attempt | acceptée / en cours / résultat en attente / réussie / échouée / timeout / annulée | NOW | Cycle de vie durable faisant autorité ; aucune réussite optimiste ni nouvel essai automatique |
| Attempt | non démarrée / en préparation / bloquée | États UX DERIVED pré-Attempt | Ne doit pas être stockée ni présentée comme une Attempt existante |
| Evidence/RB | légitimement absent / chargement / disponible | NOW/DERIVED | Distinguer l’absence avant achèvement de l’échec de lecture |
| Evidence/RB | incomplet | NOW | Explication de complétude/préparation |
| Evidence/RB | échec de réhydratation | NOW | Réessayer la lecture ; détails de diagnostic à la demande |
| Résultat Nora | attente de preuve / analyse disponible / Recommendation disponible | NOW/DERIVED | Recommendation clairement typée |
| Résultat Nora | Recommendation périmée | DERIVED ; la règle d’actualité nécessite un câblage explicite | Lier au résultat qui la remplace |
| Résultat Nora | décision humaine requise | NOW/DERIVED | Validation explicite, jamais consommée automatiquement |
| Permissions/administration multi-utilisateur | tous | FUTURE | Hors de ce candidat |

## 10. Cartographie du contrat exécution ↔ UX

| Étape du parcours | Interface actuelle | Action/cas d’utilisation | Objet de domaine | Persistance | Preuve actuelle | Exigence UX | Écart |
|---|---|---|---|---|---|---|---|
| Créer/ouvrir | `/studio/projects/new`, `/studio/projects/[id]` | actions de création/lecture du projet de tranche verticale ; cas d’utilisation projet | Project, LPS | Product SQLite | tests de redémarrage/interface du projet | Entrée Projets et orientation non technique | IA + câblage |
| Converser/qualifier | `ProjectAssistantPanel` | `projectAssistantSendAction` ; orchestration F1/F2 ; qualifier le cycle | Conversation, ContextSnapshot, Proposal, CycleInstance | Conversation/Proposal locales ; liaison du cycle durable | tests assistant/F2 | conversation dominante ; clarifier les écarts | Présentation |
| Décider | carte de proposition de l’assistant | `projectAssistantDecideAction` ; cas d’utilisation de décision | HumanDecision, DecisionBasis | durable | tests F2/décision | conséquences explicites, rejet/réserves | Présentation ; GAP d’amendement |
| Préparer le contrat | cartes F3 de l’assistant | `projectAssistantPrepareM3Action`, préparation de fixture ; valider/préparer/remplacer ; **+** `resolveM3ExecutionContract` (Slice A, hors UI) | ExecutionContract | chemin M3 durable | tests préparation/redémarrage + G-UX-15 | examen lisible, périmé/fermé par défaut | **Historique gap :** PREPARE ne pouvait pas continuer jusqu’au démarrage. **Actuel :** bridge Slice A ferme le gap technique fixture-safe ; UI/product E2E encore ouverts |
| Confirmer/démarrer | carte d’exécution de l’assistant | `projectAssistantConfirmAndExecuteF3FixtureAction` ; confirmation + StartExecution (inchangés ; composés après Slice A) | contrat de fixture ou successeur résolu, confirmation, AgentCapability, Attempt | entrée Proposal/fixture locale ou composition G-UX-15 ; Attempt durable | fixture + tests G-UX-15 composition | validation d’autorité et cycle de vie distincts | Composition fixture-safe prouvée ; fixture ≠ preuve produit critique ; UI Delivery non autorisée |
| Observer l’Attempt | sortie de l’assistant | cas d’utilisation de lecture/démarrage d’Attempt | ExecutionAttempt | Product SQLite | tests M5 de durabilité/redémarrage de l’Attempt | état et récupération sûre | IA/présentation |
| Preuve/revue | résultat durable de l’assistant | collecte/revue de preuves et `projectAssistantRehydrateEvidenceOutcomeAction` | Evidence, ReviewBundle | Product SQLite | durabilité des preuves/revues M5 + remontage | historique stable et complétude lisible | IA/câblage |
| Résultat Nora | résultat durable de l’assistant | RecommendNextGate/relecture | Recommendation sur ReviewBundle | RB sous-jacent durable ; présentation de la Recommendation dérivée/relue | tests de réhydratation M5 | actualité/autorité explicite de Recommendation | Présentation/câblage |
| Répercussion LPS | projection de l’espace de travail | rédacteur d’ajout factuel W1 | Références LPS | Product SQLite | preuve d’ajout W1 et de redémarrage | dernier résultat compréhensible par l’utilisateur, pas des identifiants | Présentation |

## 11. Local au processus ou durable — conséquence UX

| Objet de travail | Observation | Conséquence pour le premier test | Recommendation | Décision requise |
|---|---|---|---|---|
| Conversation | L’historique local au processus alimente la requête actuelle de l’assistant | L’UAT en session continue fonctionne ; le redémarrage du serveur perd la transcription | Accepter pour la première preuve ; préserver le brouillon côté client uniquement si déjà disponible ; reprendre depuis le résultat durable | Morris confirme la limite acceptée |
| Proposal | Résultat de qualification structuré local au processus | Perdre une proposition non consommée est gênant, mais ne rompt pas l’autorité | Requalifier après redémarrage ; ne jamais reconstruire et consommer une proposition supposée | Morris confirme la limite acceptée |
| Confirmation | La confirmation de travail peut être locale au processus avant l’Attempt durable en aval | La perte avant démarrage est sûre ; l’ambiguïté après démarrage romprait l’autorité | À la reprise, résoudre depuis le contrat/l’Attempt durable et fermer par défaut | Aucune nouvelle décision de persistance maintenant ; écart d’exécution uniquement si l’ambiguïté est prouvée |
| Sous-ensembles de trajectoire/épistémiques | Les observations/hypothèses/affirmations/maturité ne sont pas toutes durables dans le produit | Le raisonnement détaillé peut ne pas reprendre demain | N’afficher comme durables que les faits durables ; étiqueter l’analyse de travail ; reporter l’extension | Qualification Morris future |
| HumanDecision/contrat | Durable | L’autorité peut survivre au redémarrage | Les traiter comme points d’ancrage de récupération | Non |
| Attempt/Evidence/RB/références LPS | Durables et éprouvés au redémarrage | Le résultat reste visible après rechargement | Les utiliser comme point d’ancrage canonique de reprise | Non |

**Décision Morris consommée :** FIRST-TEST PROCESS-LOCAL LIMITATION = **ACCEPTED BY MORRIS**.

Périmètre exact :

- **Accepté pour le premier test utilisateur fonctionnel borné uniquement :** Conversation / Proposal process-local.
- **Comportement UX requis :** continuité honnête ; aucune restauration factice ; reprise depuis l’état durable ; requalification offerte si nécessaire.
- **Non accepté :** perte d’autorité masquée ; état d’exécution déduit de la Conversation locale ; reconstruction d’une Proposal consommée depuis la mémoire ; nouvelle persistance ad hoc sans décision.
- **Aucune nouvelle persistance sélectionnée.**
- **Déclencheur de sortie pour reconsidérer la durabilité :** uniquement si l’UAT / l’usage démontre que la perte de Conversation / Proposal de travail empêche matériellement la continuité attendue ou une autorité sûre.

Les dispositions détaillées de readiness multi-dimensionnelle figurent au §21. Le registre §12 conserve l’audit factuel d’origine.

## 12. Registre des écarts

> Les dispositions de readiness actualisées (sévérité, pré-Figma, Figma, Delivery, preuve/UAT) sont au **§21**. Ce registre conserve la preuve d’audit et l’impact utilisateur.

| ID / classe | Preuve et impact utilisateur | Bloque la preuve fonctionnelle / Figma | Traitement candidat le plus simple | Risque d’exécution/architecture | Responsable / échéance |
|---|---|---|---|---|---|
| G-UX-01 UX INFORMATION ARCHITECTURE GAP | Aucune entrée projet `/studio` ; trois démarrages concurrents | Oui / Oui | Ajouter une destination Projets canonique et une politique de redirection dans une future Delivery | Faible si les requêtes OA sont réutilisées | Morris adopte l’IA ; Delivery |
| G-UX-02 HISTORICAL UI DEBT | P0, D1, OA et OPS1 apparaissent comme navigation de même niveau | Oui / Oui | Masquer les chemins historiques de la navigation canonique ; ne pas supprimer | Faible | Disposition Morris ; Delivery |
| G-UX-03 UX PRESENTATION GAP | L’espace de travail OA expose références CKC, identifiants, Product SQLite et indicateurs d’exécution | Oui / Oui | Diagnostics progressifs ; résumé en langage utilisateur par défaut | Faible | UX/Figma |
| G-UX-04 UX PRESENTATION GAP | Conversation, Proposal, contrat, Attempt et preuve se concurrencent dans un long panneau unique | Oui / Oui | Surfaces structurées contextuelles liées à la conversation dominante | Faible | UX/Figma |
| G-UX-05 APPLICATION WIRING GAP | Le comportement D1 centré sur l’intention n’est pas câblé à OA M1→M5 | Oui / Non | Recréer le comportement sur les actions OA existantes ; ne pas relier les stockages | **Risque parallèle si l’état D1 est réutilisé** | Qualification Delivery |
| G-UX-06 APPLICATION WIRING GAP | Aucune destination stable d’historique du projet pour décisions/résultats/preuves | Oui / Oui | Lire les objets durables existants via les ports actuels et les références du projet | Moyen ; éviter un stockage de chronologie dupliqué | Qualification Delivery |
| G-UX-07 UX PRESENTATION GAP | Les divulgations obsolètes « local/read-only/not ready » contredisent la capacité actuelle | Oui / Oui | Remplacer par un langage concis de capacité/autorité et des diagnostics | Faible | Delivery |
| G-UX-08 APPLICATION WIRING GAP | AMEND est consigné durablement, mais aucun flux ultérieur complet de clarification/requalification n’est établi | Non pour un premier chemin uniquement GO / Oui pour le scénario d’amendement | Revenir de l’amendement durable à la conversation et produire une nouvelle Proposal qualifiée avec la sémantique de décision existante | Moyen si l’interface modifie l’ancienne Proposal ou invente une autorité | Avant la preuve fonctionnelle complète |
| G-UX-09 DURABILITY GAP | Conversation/Proposal non reprenables après redémarrage du serveur | Non pour une preuve circonscrite en session continue / Non | Reprise honnête + requalification depuis le point d’ancrage durable | Élevé si une persistance ad hoc est ajoutée | Morris accepte/reporte |
| G-UX-10 APPLICATION WIRING GAP | L’actualité/le remplacement de Recommendation n’est pas toujours visible par l’utilisateur | Non / Oui | Dériver l’état périmé du dernier résultat durable lié ; qualifier le câblage | Moyen | Avant la preuve UI Delivery |
| G-UX-11 EVIDENCE GAP | L’E2E actuel prouve les tranches P0, D1 et OPS1 ; aucun chemin Playwright ne couvre `/studio/projects/*` ni un parcours navigateur canonique unique | Oui après Delivery / Non | Futur contrat de preuve au §16 | Faible | Sortie de Delivery |
| G-UX-12 GOVERNANCE GAP | Dispositions significatives de l’interface et retrait historique non consommés | Non / Non | Dossier de décision ; retrait maintenu à plus tard | Faible | Morris |
| G-UX-13 UX PRESENTATION GAP | Chargement/vide/erreur/récupération canoniques manquants sur le parcours agrégé | Oui / Oui | Utiliser le modèle d’état §9 comme entrée Figma/Delivery | Faible | Figma/Delivery |
| G-UX-14 NON-BLOCKING FUTURE ENHANCEMENT | Architecture multi-utilisateur/IAM/administration absente | Non / Non | Maintenir hors pré-M6 | Élevé si anticipé | M6/ultérieur |
| G-UX-15 APPLICATION WIRING GAP — BLOCKING | **Historique audit :** PREPARE-only non exécutable ; seul le chemin fixture UI atteignait l’exécution. **Traitement actuel :** Slice A `resolveM3ExecutionContract` (candidat + final amend) — supersession + validation + gouvernance replay ; Confirmation/Select/StartExecution existants | **Oui / Oui** (acceptation Morris encore requise) | Slice A **IMPLEMENTED CANDIDATE** — input applicatif explicite ; pas de mutation in-place ; pas de séquenceur parallèle ; ZERO REAL | **Résiduel** jusqu’à ACCEPT exit proof + UI/E2E ; doctrine anti-bypass inchangée | Morris ACCEPT exit proof / avant UI Delivery |

**ÉCART PRÉ-M6 ENTRE L’EXÉCUTION ET L’APPLICATION — HISTORIQUEMENT QUALIFIÉ ; TECHNIQUEMENT BRIDGÉ PAR SLICE A ; ACCEPTATION MORRIS / UI DELIVERY ENCORE REQUISES.** G-UX-15 reste un BLOCKER produit tant que l’exit proof n’est pas accepté et que UI/E2E ne sont pas autorisés. Classification : APPLICATION WIRING GAP (pas de nouveau moteur). Preuve technique fixture-safe : original PREPARE préservé ; successeur via supersession ; Confirmation + StartExecution existants ; ZERO REAL / Gate D 0.

## 13. Résumé de la disposition des actifs existants

**Principe de réutilisation :** **ADOPTED BY MORRIS** (D-PRE-M6-UX-03 au niveau principe).

**Dispositions individuelles de composants :** restent des **recommandations** jusqu’aux gates de readiness / Delivery pertinentes. Ce GO n’adopte **pas** silencieusement chaque KEEP / ADAPT / HARVEST / REPLACE / FREEZE / RETIRE LATER.

Recommandations conservées (non consommées comme décisions de retrait/remplacement) :

- **KEEP :** OA Native Backbone ; Product SQLite ; ports/cas d’utilisation de domaine actuels ; modèles Project, LPS, CycleInstance, HumanDecision, ExecutionContract, ExecutionAttempt, Evidence et ReviewBundle ; rédacteur LPS factuel ; relecture durable de Nora ; limite d’autorité StartExecution ; primitives d’interface testées sous réserve de revue visuelle.
- **ADAPT :** `/studio/projects/new` ; `/studio/projects/[id]` ; `StudioShell` ; chargeurs/actions d’exécution ; primitives accessibles d’état/décision/preuve.
- **COMPLETE :** entrée projet `/studio`, navigation canonique, historique du projet, chargement/erreur/récupération agrégés et reprise.
- **HARVEST :** comportement de conversation D1 centré sur l’intention et regroupement d’orientation ; langage d’autorité P0 et comportement de composants sélectionnés. Cela ne récupère ni les stockages D1, ni le cycle de vie de fixture P0, ni la conception visuelle actuelle comme référentiel.
- **REPLACE :** présentation technique/centrée sur les objets de l’espace de travail OA ; taxonomie de navigation mixte actuelle ; destination `/`. Le remplacement n’est pas autorisé par ce document.
- **FREEZE :** écrans de fixture P0 et chemin historique OPS1 ; aucune nouvelle capacité canonique.
- **RETIRE LATER :** routes D1/P0/OPS1 dupliquées uniquement après preuve de remplacement canonique et décision explicite de Morris. Aucun retrait n’est consommé maintenant.

Les actifs d’exécution/de domaine/applicatifs restent KEEP par défaut. Aucune preuve trouvée n’exige une architecture parallèle ni une réécriture de l’exécution.

## 14. Vérification d’absence d’architecture parallèle

**PASS — le candidat peut s’appuyer sur l’ossature existante.**

Principe d’implémentation requis :

- L’interface lit/écrit via les actions et ports applicatifs OA existants.
- L’état du projet reste LPS/Product SQLite, pas un état React/D1/local dupliqué.
- HumanDecision reste l’unique modèle de décision durable.
- StartExecution reste l’unique séquenceur d’autorité d’exécution.
- Attempt/Evidence/ReviewBundle restent les objets de cycle de vie existants.
- L’historique du projet est une projection/requête, pas un nouveau stockage d’événements indépendant.
- L’interface de Conversation peut contenir un état de vue éphémère, mais ne peut devenir une autorité métier.
- Le comportement D1 et P0 peut être recréé sur OA ; leurs stockages/cycles de vie ne sont pas reliés dans un nouveau « moteur UX ».

Si une future conception exige un moteur métier propre à l’interface, un LPS dupliqué, une persistance parallèle, un cycle de vie de décision/Attempt dupliqué ou un modèle Evidence/Review dupliqué, la recommandation s’arrête avec :

**PARALLEL ARCHITECTURE RISK — MORRIS GATE REQUIRED.**

## 15. Futur contrat d’entrée Figma

Statut : **FIGMA INPUT DEFINED FOR DESIGN READINESS** — **FIGMA NOT AUTHORIZED** (D-PRE-M6-UX-05 = NO DECISION YET). Voir verdict §26.

| Scénario futur | Objectif utilisateur / informations requises | Actions et autorité | État de l’exécution | Critère d’acceptation |
|---|---|---|---|---|
| Entrée/orientation du projet | Sélectionner/créer un projet ; voir objectif, état actuel et action suivante | Ouvrir/créer ; aucune autorité d’exécution | Project/LPS en chargement/disponible/vide/erreur | L’utilisateur identifie le projet et l’action suivante sans termes internes |
| Conversation normale | Exprimer l’intention avec le contexte du projet | Envoyer/annuler/réessayer | inactif/saisie/traitement | La Conversation domine ; l’état du projet reste accessible |
| Résultat de qualification | Comprendre observations/options/Recommendation/écarts | Clarifier ou passer à la décision | terminé/incomplet/périmé | Recommendation et incertitude sont sans ambiguïté |
| Décision requise | Exercer l’autorité de Morris | approuver/rejeter/réserves/clarifier | Recommendation uniquement / décision requise | Aucune action ne semble déjà consommée |
| Décision consommée | Vérifier la décision durable | examiner le fondement ; continuer | acceptée/rejetée/réserves | La décision se distingue visiblement de Recommendation |
| Examen du contrat | Comprendre ce qui sera exécuté | confirmer/annuler/revenir | préparation/prêt | Périmètre/effets/réserves compréhensibles avant l’autorité |
| Contrat fermé par défaut | Résoudre un fondement manquant/périmé | revenir/repréparer | non résolu/périmé | Confirmation indisponible ; récupération explicite |
| Exécution en préparation/en cours | Connaître le cycle de vie actuel | observer/annuler uniquement si pris en charge ; aucun nouvel essai | préparation/en cours | Aucune réussite optimiste ni démarrage dupliqué |
| Exécution réussie | Trouver le résultat | ouvrir preuve/revue | réussie | Relation entre Attempt et preuve claire |
| Exécution échouée/arrivée à expiration | Comprendre l’échec et l’action suivante sûre | examiner les preuves ; revenir à la décision | échouée/timeout/bloquée | Aucun nouvel essai automatique implicite |
| Evidence/ReviewBundle | Examiner faits, complétude et conclusion | déplier la provenance/télécharger uniquement si pris en charge | absent/chargement/disponible/incomplet/erreur de lecture | Preuve brute et conclusion de revue distinguables |
| Recommendation après preuve | Comprendre la prochaine suggestion de Nora | revenir à une décision explicite | analyse/Recommendation/périmée | Recommendation reste sans autorité |
| Vide/chargement/erreur | Récupérer sans connaissance de l’implémentation | réessayer/revenir/créer | états agrégés | « Aucun », « inconnu » et « échec de lecture » sont distincts |
| Rechargement/reprise | Reprendre honnêtement | reprendre depuis le résultat durable/requalifier | résultat durable + perte du contexte local | Le contexte conservé et perdu est explicite |

Le futur Figma doit représenter la hiérarchie sémantique, l’autorité et la récupération. Il ne doit pas figer par défaut les pixels, colonnes ou composants des écrans P0 actuels.

## 16. Futur contrat de preuve fonctionnelle

Après **ACCEPT** Morris de l’exit proof G-UX-15 Slice A, puis après autorisations séparées de Figma et UI Delivery, un E2E navigateur doit prouver substantiellement :

créer/ouvrir un projet
→ s’orienter dans l’état du projet
→ converser avec Nora
→ qualifier la demande
→ examiner Proposal/Recommendation structurées
→ consommer la HumanDecision explicite de Morris
→ examiner ExecutionContract
→ confirmer l’exécution contrôlée
→ observer le cycle de vie de l’Attempt
→ recevoir Evidence
→ recevoir ReviewBundle
→ Nora analyse les preuves
→ Recommendation affichée comme Recommendation
→ LPS mis à jour factuellement
→ recharger/reprendre
→ le résultat durable pertinent reste visible.

Couches de preuve requises :

1. **E2E navigateur :** flux fonctionnel observable et chemins négatifs d’autorité.
2. **Capture visuelle d’exécution :** tous les états principaux, vides, de chargement, d’erreur et de récupération.
3. **Comparaison Figma/exécution :** conformité sémantique/d’interaction, pas seulement similarité de capture d’écran.
4. **UAT Morris :** compréhension de l’état, de l’autorité, de l’exécution et des preuves, y compris perte/reprise locale au processus.

La preuve négative doit inclure : Proposal périmée, décision rejetée, contrat non résolu, prévention du démarrage dupliqué, Attempt échouée/arrivée à expiration, preuve absente/incomplète, échec de réhydratation et Recommendation ne devenant pas HumanDecision.

Cette preuve est uniquement définie ; aucune partie n’est exécutée dans ce cycle.

## 17. Anti-objectifs et dépendances

Anti-objectifs :

- une page par objet de domaine ;
- un indicateur d’étapes global comme navigation principale ;
- un cockpit/tableau de bord permanent multi-panneaux ;
- un clone générique de messagerie ;
- un moteur d’état propre à l’interface ;
- masquer les validations d’autorité dans la prose conversationnelle ;
- rendre durable tout l’état local au processus avant la première preuve ;
- réutiliser une conception visuelle historique uniquement parce qu’elle existe ;
- supprimer les routes historiques avant la preuve de remplacement ;
- exposer la terminologie CKC/OA/SQLite/REAL comme contenu produit normal ;
- périmètre M6, exécution Figma, UI Delivery ou Cursor REAL.

Dépendances avant progression autorisée :

- **Satisfaites (timeline) :** D-PRE-M6-UX-01/02/03 adoptés ; process-local premier test accepté ; readiness G-UX-01→15 classifiée ; SELECT SLICE A ; implémentation + amend + **final amend** Slice A (locale).
- **Historique supersédé :** D-PRE-M6-UX-04 = REQUALIFY (ne plus présenter comme statut courant).
- **Ouvertes :** Morris **ACCEPT G-UX-15 SLICE A EXIT PROOF** ; D-PRE-M6-UX-05 (Figma GO) ; UI Delivery après Figma validé ; sync Roadmap après intégration ; G-UX-08 / G-UX-10 hors Slice A.
- GO distinct pour Figma Visual Contract uniquement lorsque les prérequis pré-Figma du §21/§26 sont stables.
- Validation Figma avant UI Delivery.
- fixture ≠ preuve produit du chemin critique ; OA/limites applicatives préservées.

## 18. Dossier de décisions Morris — STATUTS CONSOMMÉS

Décision Morris exacte consommée : `ok ta recommandation est tres bien, go`.

### D-PRE-M6-UX-01 — Parcours utilisateur canonique M1→M5

**Statut : ADOPTED BY MORRIS.**

Signification : adopter le parcours M1→M5 canonique défini dans cet artefact, avec la limitation process-local explicite du premier test.

### D-PRE-M6-UX-02 — Architecture fonctionnelle de l’information

**Statut : ADOPTED BY MORRIS.**

Signification : Projets → Projet actuel → historique contextuel → Diagnostics optionnels ; Conversation dominante ; living project state accessible ; décisions / exécution / preuves contextualisées ; pas de navigation une-page-par-objet ; Project ≠ Cycle.

### D-PRE-M6-UX-03 — Principe de réutilisation UI

**Statut : ADOPTED BY MORRIS AT PRINCIPLE LEVEL.**

Signification :

- KEEP l’ossature runtime/domaine/application M1→M5 utile ;
- réutiliser l’UI existante sélectivement par comportement / câblage / modèle d’information ;
- ne pas traiter le design visuel historique comme référentiel cible ;
- ne pas créer de Frankenstein UX ;
- ne pas réutiliser les moteurs d’état / cycles de vie D1/P0/OPS1 comme moteurs produit parallèles ;
- ne pas supprimer l’UI historique encore.

**Important :** ce GO n’adopte **pas** automatiquement chaque disposition individuelle KEEP / ADAPT / HARVEST / REPLACE / FREEZE / RETIRE LATER. Celles-ci restent soumises aux gates de readiness / Delivery.

### FIRST-TEST PROCESS-LOCAL LIMITATION

**Statut : ACCEPTED BY MORRIS.**

Conversation / Proposal peuvent rester process-local pour le premier test utilisateur fonctionnel borné. Pas de nouvelle persistance. Voir §11.

### D-PRE-M6-UX-04 — Écarts d’exécution bloquants / G-UX-15

**Statut historique : REQUALIFY G-UX-15** (décision Morris initiale de qualification).

**Timeline supersédante :**
1. SELECT SLICE A — G-UX-15 ONLY ;
2. AMEND G-UX-15 SLICE A (sentinels / replay / identité canonique) ;
3. **FINAL AMEND** G-UX-15 SLICE A (gouvernance replay + failed T-A5 + sync artefact).

**Statut courant :** IMPLEMENTED CANDIDATE — FINAL AMEND APPLIED — FIXTURE-SAFE APPLICATION WIRING PROOF PASS — CHATGPT RE-REVIEW / MORRIS EXIT-PROOF ACCEPTANCE PENDING

Chemin durable (préservé / câblé en Slice A) :

HumanDecision / DecisionBasis → ExecutionContract M3 durable non résolu → ExecutionContract exécutable résolu / successeur valide → Confirmation existante → StartExecution existant → ExecutionAttempt existante

sans : modifier le contrat non résolu en place ; contourner le fail-closed ; traiter la fixture comme preuve produit du chemin critique ; créer un séquenceur parallèle ; consommer REAL.

Implémentation candidat **présente** localement (non commitée). Voir §22.

### D-PRE-M6-UX-05 — Futur cycle Figma Visual Contract

**Statut : NO DECISION YET / FIGMA NOT AUTHORIZED.**

Ce GO n’autorise pas le Figma Visual Contract.

## 19. Recommendation, réserves et prochaine validation

### Recommendation (post-adoption)

La baseline fonctionnelle est adoptée. Slice A G-UX-15 est **implémentée (candidat + amend + final amend)**. La prochaine décision structurale de Morris est **ACCEPT G-UX-15 SLICE A EXIT PROOF** (ou AMEND), pas une nouvelle sélection A/B/C.

### Réserves ouvertes

1. G-UX-15 IMPLEMENTED CANDIDATE — FINAL AMEND APPLIED — FIXTURE-SAFE APPLICATION WIRING PROOF PASS — CHATGPT RE-REVIEW / MORRIS EXIT-PROOF ACCEPTANCE PENDING ; doit rester visible dans tout futur Figma jusqu’à acceptation.
2. G-UX-08 — boucle AMEND incomplete ; requise pour parcours complet, pas pour premier happy-path GO-only.
3. G-UX-10 — actualité Recommendation à définir/câbler sans nouveau modèle de décision.
4. G-UX-09 — process-local accepté temporairement pour le premier test uniquement.
5. Dispositions individuelles de composants / RETIRE — non consommées.
6. M5-C owner / exit — dette de gouvernance distincte.
7. Roadmap sync — après revue / décision d’intégration ; non autorisée ici.

### Prochaine validation

1. ChatGPT re-lit le Review Handoff amend et vérifie C1/C2/C3 + artefact.
2. Morris **ACCEPT G-UX-15 SLICE A EXIT PROOF** (ou AMEND / CORRECT).
3. Seulement ensuite : intégration/capitalisation ; puis, séparément, D-PRE-M6-UX-05 pour Figma.

M6 reste **NOT STARTED / NOT AUTHORIZED**.

## 20. Sécurité et anti-revendications finales

- Artefacts projet créés dans ce cycle : **0**.
- Artefact pré-M6 local existant modifié : **1**.
- Resolver G-UX-15 + tests Slice A (locaux, non commités) : **présents**.
- Autres docs projet / Roadmap / Build Doctrine / v3 framing : **0**.
- UI routes/composants : **0**.
- Actions Figma : **0**.
- UI Delivery : **0**.
- G-UX-08 / G-UX-10 implementation : **0**.
- Travail M6 : **0**.
- Cursor REAL / Gate D : **0**.
- OA domain/infrastructure : **0**.
- Retrait M5-C / adoption runtime v3 : **0**.
- Commit / push / PR projet : **0**.
- Review Handoff push : autorisé L3 borné (hors artefact projet).

**Anti-revendications :**

- baseline fonctionnelle ADOPTÉE ≠ UX visuelle approuvée
- baseline fonctionnelle ADOPTÉE ≠ Figma autorisé
- gap readiness complète ≠ gap implementation complète
- G-UX-15 IMPLEMENTED CANDIDATE ≠ EXIT PROOF ACCEPTED ≠ G-UX-15 CLOSED ≠ PRODUCT E2E PROVEN
- Figma readiness READY WITH FUNCTIONAL RESERVES ≠ Figma GO
- UI Delivery readiness ≠ autorisation UI Delivery
- progrès pré-M6 ≠ autorisation M6
- ADOPT principe de réutilisation ≠ dispositions individuelles consommées

## 21. PRE-FIGMA GAP READINESS — G-UX-01 → G-UX-15

Taxonomie normalisée (dimensions co-existantes ; « comprendre avant Figma » ≠ « implémenter avant Figma ») :

- **FUNCTIONAL SEVERITY :** BLOCKER | REQUIRED | NON-BLOCKING | TEMPORARY ACCEPTED | DEFERRED
- **PRE-FIGMA STATUS :** MUST RESOLVE BEFORE FIGMA | MUST QUALIFY / DEFINE BEFORE FIGMA | FIGMA INPUT ONLY | NO PRE-FIGMA ACTION
- **FIGMA STATUS :** MUST REPRESENT IN VISUAL CONTRACT | OPTIONAL / DIAGNOSTIC | OUT OF FIGMA SCOPE
- **DELIVERY STATUS :** IMPLEMENT IN PRE-M6 UI DELIVERY | IMPLEMENT IN DISTINCT PRE-DELIVERY TECHNICAL SLICE | NO IMPLEMENTATION REQUIRED | DEFERRED
- **PROOF STATUS :** MUST PROVE IN BROWSER E2E | MUST PROVE IN VISUAL COMPARISON | MUST PROVE IN MORRIS UAT | NOT REQUIRED FOR FIRST PROOF

Vérification factuelle : base Git `2f0d7236…` ; sources ciblées `prepareM3FromDecision.ts`, `confirmAndExecuteF3Fixture.ts` / `ProjectAssistantPanel.tsx`, `recordDecision.ts`, `supersedeExecutionContract.ts`, `recommendNextGate.ts`, `rehydrateEvidenceOutcomeFromLps.ts`. Aucune preuve trouvée pour rétrograder G-UX-15 hors BLOCKER.

### G-UX-01 — Entrée canonique `/studio` manquante

| Champ | Valeur |
|---|---|
| Classe source | UX INFORMATION ARCHITECTURE GAP |
| Condition factuelle actuelle | Toujours valide : pas d’entrée projet canonique `/studio` ; démarrages concurrents |
| Étapes du parcours | Orientation / créer-ouvrir projet |
| Impact utilisateur | Confusion d’entrée ; parcours produit non unique |
| Risque actuel | Moyen (orientation) |
| Dimension bloquante | IA / navigation |
| Sévérité fonctionnelle | REQUIRED |
| Pré-Figma | FIGMA INPUT ONLY (IA déjà adoptée) |
| Figma | MUST REPRESENT IN VISUAL CONTRACT |
| Delivery | IMPLEMENT IN PRE-M6 UI DELIVERY |
| Preuve / UAT | MUST PROVE IN BROWSER E2E ; MUST PROVE IN MORRIS UAT |
| Acceptation temporaire | Non pour le produit cible |
| Report possible | Non pour la sortie pré-M6 |
| Dépendance | D-PRE-M6-UX-02 adopté |
| Tranche proposée | UI Delivery navigation |
| Traitement le plus simple | Destination Projets + redirections ; réutiliser lectures OA |
| Risque architecture parallèle | Faible |
| Preuve de clôture | Route d’entrée unique + E2E orientation |
| Gate Morris | Confirmation visuelle puis Delivery (pas de nouveau modèle de domaine) |
| Owner | Owner missing |
| Disposition readiness | DEFINE VIA ADOPTED IA → REPRESENT IN FIGMA → IMPLEMENT IN DELIVERY |

### G-UX-02 — Routes historiques présentées comme pairs

| Champ | Valeur |
|---|---|
| Classe source | HISTORICAL UI DEBT |
| Condition factuelle actuelle | Toujours valide : P0 / D1 / OA / OPS1 co-visibles |
| Étapes | Orientation / navigation |
| Impact | Fausse équivalence de chemins |
| Risque | Moyen |
| Dimension bloquante | Navigation / visibilité |
| Sévérité | REQUIRED |
| Pré-Figma | MUST QUALIFY / DEFINE BEFORE FIGMA (politique de navigation) |
| Figma | MUST REPRESENT IN VISUAL CONTRACT (nav canonique seulement) |
| Delivery | IMPLEMENT IN PRE-M6 UI DELIVERY (masquer/geler ; ne pas supprimer) |
| Preuve | MUST PROVE IN BROWSER E2E ; MUST PROVE IN MORRIS UAT |
| Temporaire / report | RETIRE LATER = futur gate ; FREEZE maintenant |
| Dépendance | D-PRE-M6-UX-03 principe |
| Tranche | UI Delivery navigation |
| Traitement simple | Masquer chemins historiques de la nav canonique |
| Risque parallèle | Faible si pas de fusion de moteurs |
| Preuve de clôture | Nav canonique seule ; routes historiques non liées |
| Gate Morris | Disposition de masquage ; RETIRE ultérieur séparé |
| Owner | Owner missing |
| Disposition | DEFINE NAV POLICY BEFORE FIGMA → REPRESENT → HIDE IN DELIVERY → RETIRE LATER |

### G-UX-03 — Concepts d’implémentation exposés

| Champ | Valeur |
|---|---|
| Classe | UX PRESENTATION GAP |
| Condition | Toujours valide : CKC / IDs / SQLite / indicateurs techniques exposés |
| Étapes | Orientation / lecture d’état |
| Impact | Charge cognitive / vocabulaire non produit |
| Risque | Moyen |
| Dimension | Présentation |
| Sévérité | REQUIRED |
| Pré-Figma | FIGMA INPUT ONLY |
| Figma | MUST REPRESENT (résumé utilisateur ; diagnostics progressifs) |
| Delivery | IMPLEMENT IN PRE-M6 UI DELIVERY |
| Preuve | MUST PROVE IN VISUAL COMPARISON ; MUST PROVE IN MORRIS UAT |
| Temporaire / report | Non pour surface canonique |
| Dépendance | §9 états |
| Tranche | UI Delivery présentation |
| Traitement | Progressive disclosure ; diagnostics optionnels |
| Risque parallèle | Faible |
| Preuve clôture | Capture + UAT sans jargon obligatoire |
| Gate Morris | Validation visuelle |
| Owner | Owner missing |
| Disposition | FIGMA INPUT → DELIVERY COPY/PRESENTATION |

### G-UX-04 — Assistant monolithique / objets structurés concurrents

| Champ | Valeur |
|---|---|
| Classe | UX PRESENTATION GAP |
| Condition | Toujours valide : long panneau unique concurrent |
| Étapes | Conversation → décision → exécution → preuve |
| Impact | Objets d’autorité perdus dans le flux |
| Risque | Élevé UX |
| Dimension | Composition / états |
| Sévérité | REQUIRED |
| Pré-Figma | MUST QUALIFY / DEFINE BEFORE FIGMA (états §9 déjà définis) |
| Figma | MUST REPRESENT IN VISUAL CONTRACT |
| Delivery | IMPLEMENT IN PRE-M6 UI DELIVERY |
| Preuve | E2E + visual + UAT |
| Temporaire | Non |
| Dépendance | D-PRE-M6-UX-01/02 |
| Tranche | UI Delivery composition |
| Traitement | Surfaces contextuelles liées à conversation dominante ; pas de nouveau moteur |
| Risque parallèle | Faible si ports OA réutilisés |
| Preuve clôture | États structurés distincts observables |
| Gate Morris | Validation Figma puis Delivery |
| Owner | Owner missing |
| Disposition | DEFINE STATES → REPRESENT → IMPLEMENT IN DELIVERY |

### G-UX-05 — Comportement D1 intent-first non câblé à OA

| Champ | Valeur |
|---|---|
| Classe | APPLICATION WIRING GAP |
| Condition | Toujours valide : D1 non branché sur M1→M5 OA |
| Étapes | Conversation / intention |
| Impact | Comportement utile absent du chemin canonique |
| Risque | Élevé si moteur D1 réutilisé |
| Dimension | Comportement / câblage |
| Sévérité | REQUIRED (parcours cible) |
| Pré-Figma | MUST QUALIFY / DEFINE BEFORE FIGMA (contrat de comportement) |
| Figma | MUST REPRESENT (comportement cible, pas écrans D1) |
| Delivery | IMPLEMENT IN PRE-M6 UI DELIVERY sauf prérequis applicatif découvert |
| Preuve | E2E + UAT |
| Temporaire | Non pour parcours cible |
| Dépendance | HARVEST comportement ; jamais stockage D1 |
| Tranche | UI Delivery behavior harvest |
| Traitement | Recréer sur actions OA ; ne pas relier stockages/lifecycles D1 |
| Risque parallèle | **Élevé** si état D1 réutilisé |
| Preuve clôture | Intention → qualification OA sans store D1 |
| Gate Morris | Revue anti-parallèle Delivery |
| Owner | Owner missing |
| Disposition | DEFINE BEHAVIOR → REPRESENT → IMPLEMENT ON OA ONLY |

### G-UX-06 — Destination / projection historique projet absente

| Champ | Valeur |
|---|---|
| Classe | APPLICATION WIRING GAP |
| Condition | Toujours valide : pas de destination stable d’historique |
| Étapes | Reprise / preuve / décision passée |
| Impact | Continuité et auditabilité utilisateur faibles |
| Risque | Moyen |
| Dimension | Modèle d’information / projection |
| Sévérité | REQUIRED |
| Pré-Figma | MUST QUALIFY / DEFINE BEFORE FIGMA |
| Figma | MUST REPRESENT |
| Delivery | IMPLEMENT IN PRE-M6 UI DELIVERY (ports durables existants) |
| Preuve | E2E + UAT |
| Temporaire | Non pour sortie pré-M6 |
| Dépendance | LPS / Decision / Attempt / Evidence / RB |
| Tranche | UI Delivery history projection |
| Traitement | Projection/requête ; pas de timeline store parallèle |
| Risque parallèle | Moyen si nouveau store |
| Preuve clôture | Historique lisible depuis faits durables |
| Gate Morris | Revue modèle d’information |
| Owner | Owner missing |
| Disposition | DEFINE INFO MODEL → REPRESENT → IMPLEMENT AS PROJECTION |

### G-UX-07 — Libellés runtime obsolètes / inexacts

| Champ | Valeur |
|---|---|
| Classe | UX PRESENTATION GAP |
| Condition | Toujours valide : wording « local/read-only/not ready » trompeur |
| Étapes | Orientation / autorité |
| Impact | Fausse lecture de capacité |
| Risque | Moyen |
| Dimension | Copy / sémantique d’autorité |
| Sévérité | REQUIRED |
| Pré-Figma | FIGMA INPUT ONLY |
| Figma | MUST REPRESENT (labels d’autorité) |
| Delivery | IMPLEMENT IN PRE-M6 UI DELIVERY |
| Preuve | Visual comparison + UAT |
| Temporaire | Non |
| Dépendance | Faible |
| Tranche | UI Delivery copy |
| Traitement | Remplacer par labels de capacité/autorité |
| Risque parallèle | Faible |
| Preuve clôture | Copy alignée capacité réelle |
| Gate Morris | Validation visuelle |
| Owner | Owner missing |
| Disposition | FIGMA INPUT → DELIVERY COPY |

### G-UX-08 — AMEND durable sans boucle clarification/requalification complète

| Champ | Valeur |
|---|---|
| Classe | APPLICATION WIRING GAP |
| Condition | Toujours valide : `recordDecision` mappe AMEND → `AMENDMENT_REQUIRED` / HumanDecision `amended` ; **pas** de `DecisionBasis` ni de lien LPS `decisionIds` sur AMEND (réservés aux GO acceptés) ; pas de boucle câblée clarification → nouvelle Proposal → nouvelle décision |
| Étapes | Décision → clarification → requalification |
| Impact | Amendement enregistré sans reprise gouvernée |
| Risque | Moyen |
| Dimension | Câblage post-décision |
| Sévérité | REQUIRED (parcours complet) ; **NON blocker** du premier happy-path GO-only |
| Pré-Figma | MUST QUALIFY / DEFINE BEFORE FIGMA |
| Figma | MUST REPRESENT (état amended + récupération) |
| Delivery | IMPLEMENT IN PRE-M6 UI DELIVERY **ou** tranche applicative distincte avant E2E/UAT complet |
| Preuve | MUST PROVE IN BROWSER E2E ; MUST PROVE IN MORRIS UAT (scénario amend) ; **NOT REQUIRED FOR FIRST PROOF** GO-only |
| Temporaire | Possible pour premier test GO-only seulement |
| Report | Non pour sortie fonctionnelle complète |
| Dépendance | F1/F2 orchestration ; Proposal process-local ; HumanDecision `amended` (sans DecisionBasis AMEND) |
| Tranche | Candidate B avec G-UX-15 **non forcée** ; tranche Delivery séparée recommandée |
| Traitement | Depuis HumanDecision amended → conversation → nouvelle Proposal → nouvelle décision (DecisionBasis seulement au prochain GO) ; Proposal stale refusée ; réutiliser F1/F2 |
| Risque parallèle | Moyen si ancienne Proposal mutée / autorité inventée |
| Preuve clôture | Scénario AMEND → nouvelle Proposal → GO |
| Gate Morris | Autorisation de traitement ; voir §23 |
| Owner | Owner missing |
| Disposition | MUST DEFINE BEFORE FIGMA → IMPLEMENT BEFORE FULL E2E/UAT → NOT SAME MUST-SLICE AS G-UX-15 |

### G-UX-09 — Conversation / Proposal process-local

| Champ | Valeur |
|---|---|
| Classe | DURABILITY GAP |
| Condition | Toujours valide : non reprenables après restart serveur |
| Étapes | Conversation / qualification / reprise |
| Impact | Perte de contexte de travail ; autorité durable intacte |
| Risque | Moyen UX ; élevé si persistance ad hoc |
| Dimension | Continuité |
| Sévérité | **TEMPORARY ACCEPTED** (Morris) pour premier test borné |
| Pré-Figma | MUST QUALIFY / DEFINE BEFORE FIGMA (sémantique honnête) |
| Figma | MUST REPRESENT (reload/re-entry honnête) |
| Delivery | NO IMPLEMENTATION REQUIRED (persistance) pour premier test ; honest UX in Delivery |
| Preuve | MUST PROVE IN MORRIS UAT (reprise) ; E2E reprise |
| Temporaire | **Oui — ACCEPTED BY MORRIS** premier test only |
| Report | Future durability seulement si UAT prouve nécessité |
| Dépendance | §11 ; points d’ancrage durables |
| Tranche | Aucune tranche de persistance maintenant |
| Traitement | Notices + reprise durable + requalification ; **pas** de nouveau store |
| Risque parallèle | Élevé si persistance ad hoc |
| Preuve clôture | Scénario restart honnête |
| Gate Morris | Déjà consommé ; exit = preuve UAT de nécessité |
| Owner | Morris (acceptation) |
| Disposition | TEMPORARY ACCEPTED — HONEST UX REQUIRED — NO NEW PERSISTENCE |

### G-UX-10 — Actualité / supersession Recommendation non explicite

| Champ | Valeur |
|---|---|
| Classe | APPLICATION WIRING GAP |
| Condition | Toujours valide : `RecommendNextGate` read-only avec snapshots/versions ; réhydratation LPS → evidenceIds/reviewBundleIds ; UI ne rend pas toujours la Recommendation périmée vs courante |
| Étapes | Post-preuve / Recommendation → décision |
| Impact | Suggestion Nora potentiellement stale |
| Risque | Moyen (autorité cognitive) |
| Dimension | Dérivation / présentation |
| Sévérité | REQUIRED |
| Pré-Figma | MUST QUALIFY / DEFINE BEFORE FIGMA |
| Figma | MUST REPRESENT (périmée vs courante) |
| Delivery | IMPLEMENT IN PRE-M6 UI DELIVERY (dérivation préférée) |
| Preuve | E2E + UAT ; Recommendation ≠ Decision |
| Temporaire | Non pour sortie complète |
| Report | Non |
| Dépendance | Evidence / RB / LPS ; pas G-UX-15 must-group |
| Tranche | Delivery wiring ; option C non forcée |
| Traitement | Dériver stale depuis faits durables versionnés ; **pas** de nouveau modèle Recommendation durable sauf preuve de nécessité |
| Risque parallèle | Moyen si Recommendation devient Decision |
| Preuve clôture | Stale visible après nouvel Attempt/Evidence/RB |
| Gate Morris | Revue modèle de fraîcheur ; voir §24 |
| Owner | Owner missing |
| Disposition | DEFINE FRESHNESS FROM DURABLE FACTS → REPRESENT → IMPLEMENT WITHOUT NEW PERSISTENCE DEFAULT |

### G-UX-11 — Pas d’E2E navigateur canonique

| Champ | Valeur |
|---|---|
| Classe | EVIDENCE GAP |
| Condition | Toujours valide : E2E couvre P0/D1/OPS1 ; pas `/studio/projects/*` canonique |
| Étapes | Preuve de sortie pré-M6 |
| Impact | Pas de preuve produit navigateur unique |
| Risque | Preuve |
| Dimension | Proof |
| Sévérité | REQUIRED (exit pré-M6) ; NON-BLOCKING pour démarrer Figma |
| Pré-Figma | NO PRE-FIGMA ACTION |
| Figma | OUT OF FIGMA SCOPE |
| Delivery | NO IMPLEMENTATION REQUIRED pendant Figma ; E2E **après** UI Delivery |
| Preuve | MUST PROVE IN BROWSER E2E (exit) |
| Temporaire | N/A |
| Report | Non pour exit |
| Dépendance | Post Delivery + post G-UX-15 |
| Tranche | Proof contract §16 |
| Traitement | Playwright parcours §16 |
| Risque parallèle | Faible |
| Preuve clôture | E2E vert sur parcours canonique |
| Gate Morris | Exit proof gate |
| Owner | Owner missing |
| Disposition | PROOF AFTER DELIVERY — MANDATORY FOR PRE-M6 EXIT |

### G-UX-12 — Dispositions UI / retirement non consommées

| Champ | Valeur |
|---|---|
| Classe | GOVERNANCE GAP |
| Condition | Toujours valide ; principe réutilisation adopté ; dispositions individuelles ouvertes |
| Étapes | Gouvernance |
| Impact | Dette de retirement |
| Risque | Faible court terme |
| Dimension | Governance |
| Sévérité | NON-BLOCKING |
| Pré-Figma | NO PRE-FIGMA ACTION (visibilité canonique peut être designée) |
| Figma | OPTIONAL / DIAGNOSTIC (nav canonique seulement) |
| Delivery | NO IMPLEMENTATION REQUIRED pour RETIRE ; masquage ≠ retire |
| Preuve | NOT REQUIRED FOR FIRST PROOF |
| Temporaire | Oui — FREEZE |
| Report | RETIRE LATER |
| Dépendance | D-PRE-M6-UX-03 |
| Tranche | Future retirement gate |
| Traitement | Concevoir nav canonique ; RETIRE après remplacement prouvé |
| Risque parallèle | Faible |
| Preuve clôture | Décision Morris RETIRE + preuve remplacement |
| Gate Morris | Future RETIRE |
| Owner | Owner missing |
| Disposition | PRINCIPLE ADOPTED — INDIVIDUAL RETIRE OPEN — NOT FIGMA BLOCKER |

### G-UX-13 — États loading / empty / error / recovery canoniques manquants

| Champ | Valeur |
|---|---|
| Classe | UX PRESENTATION GAP |
| Condition | Toujours valide sur parcours agrégé |
| Étapes | Tous |
| Impact | Récupération opaque |
| Risque | Moyen |
| Dimension | États UX |
| Sévérité | REQUIRED |
| Pré-Figma | MUST QUALIFY / DEFINE BEFORE FIGMA (§9) |
| Figma | MUST REPRESENT |
| Delivery | IMPLEMENT IN PRE-M6 UI DELIVERY |
| Preuve | Visual + E2E + UAT |
| Temporaire | Non |
| Report | Non |
| Dépendance | §9 |
| Tranche | UI Delivery states |
| Traitement | Implémenter modèle §9 |
| Risque parallèle | Faible |
| Preuve clôture | États couverts dans captures/E2E |
| Gate Morris | Validation visuelle |
| Owner | Owner missing |
| Disposition | DEFINE (§9) → REPRESENT → IMPLEMENT → PROVE |

### G-UX-14 — Multi-user / IAM / administration absents

| Champ | Valeur |
|---|---|
| Classe | NON-BLOCKING FUTURE ENHANCEMENT |
| Condition | Toujours valide ; hors pré-M6 |
| Étapes | N/A pré-M6 |
| Impact | Aucun sur pilote Morris mono-acteur |
| Risque | Élevé si anticipé maintenant |
| Dimension | Future |
| Sévérité | **DEFERRED** |
| Pré-Figma | NO PRE-FIGMA ACTION |
| Figma | OUT OF FIGMA SCOPE |
| Delivery | DEFERRED |
| Preuve | NOT REQUIRED FOR FIRST PROOF |
| Temporaire | N/A |
| Report | **Oui — FUTURE / M6+** |
| Dépendance | Aucune pré-M6 |
| Tranche | Aucune |
| Traitement | Ne pas anticiper l’architecture |
| Risque parallèle | Élevé si conçu maintenant |
| Preuve clôture | Qualification future distincte |
| Gate Morris | Future scope |
| Owner | Owner missing |
| Disposition | DEFERRED — NOT PRE-M6 BLOCKER |

### G-UX-15 — Contrat M3 durable ne peut pas entrer dans l’exécution gouvernée canonique

| Champ | Valeur |
|---|---|
| Classe | APPLICATION WIRING GAP — **BLOCKING** |
| Condition | **Gap historique M3 PREPARE-only inchangé.** Slice A ajoute `resolveM3ExecutionContract` : supersession vers successeur résolu via input applicatif explicite ; Confirmation/Select/StartExecution existants. UI assistant toujours sans bouton M3 confirm (hors scope). Fixture path séparée inchangée. |
| Étapes | Décision → contrat → confirmation → Attempt |
| Impact | Chemin applicatif durable M3→exécution désormais prouvable fixture-safe ; preuve produit navigateur / REAL toujours future |
| Risque | Résiduel jusqu’à acceptation Morris + UI/E2E |
| Dimension | Câblage applicatif / cycle de vie contrat |
| Sévérité | **BLOCKER (en attente acceptation Morris)** — preuve technique fixture-safe PASS |
| Pré-Figma | Définition + implémentation Slice A **disponibles** ; Figma peut représenter états unresolved/successeur sans masquer la réserve d’acceptation |
| Figma | MUST REPRESENT — **FIGMA NOT AUTHORIZED** |
| Delivery | Slice A technique **candidat** ; UI Delivery **NOT READY / NOT AUTHORIZED** jusqu’à acceptation + Figma |
| Preuve | Fixture-safe PASS (`gux15.resolveM3ExecutionContract.test.ts`) ; REAL=0 ; browser E2E future |
| Temporaire | **Non** pour claim produit |
| Report | **Non** jusqu’à acceptation Morris |
| Dépendance | HumanDecision, DecisionBasis, ExecutionContract lifecycle, Confirmation, StartExecution, ExecutionAttempt, AgentCapability |
| Tranche | **SLICE A SELECTED + IMPLEMENTED CANDIDATE** |
| Traitement | `resolveM3ExecutionContract` — supersession existante ; ZERO REAL |
| Risque parallèle | Mitigé dans Slice A (pas de second séquenceur / pas de mutation in-place) |
| Preuve clôture | Voir §22.4 + tests |
| Gate Morris | **ACCEPT G-UX-15 SLICE A EXIT PROOF** (ou AMEND) — requis avant retrait blocker produit |
| Owner | Owner missing |
| Disposition | **IMPLEMENTED CANDIDATE — FINAL AMEND APPLIED — FIXTURE-SAFE APPLICATION WIRING PROOF PASS — CHATGPT RE-REVIEW / MORRIS EXIT-PROOF ACCEPTANCE PENDING** |

#### Mise à jour Slice A — fichiers

- `projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts`
- export `f3/index.ts`
- `__tests__/project-assistant/gux15.resolveM3ExecutionContract.test.ts`
- Original PREPARE préservé ; successor via supersession ; input explicite ; pas de changement DecisionBasis/Confirmation persistence ; pas d’UI.

---

## 22. Qualification ciblée G-UX-15 — contrat fonctionnel / applicatif

> Historique de qualification conservé. Statut d’implémentation Slice A : §22.4.

### 22.1 Faits runtime confirmés

1. **Création M3 durable :** `prepareM3FromDecision` construit un ExecutionContract PREPARE-only depuis HumanDecision / DecisionBasis.
2. **Champs non résolus :** action peut être `UNRESOLVED_ACTION` ; **target toujours** `UNRESOLVED_TARGET` (pas de champ target explicite sur DecisionBasis) ; `requiredCapabilities = ["cap:unresolved"]` ; `reversibility = irreversible` fail-closed ; stopConditions ACTION/TARGET/CAPABILITY/REVERSIBILITY_UNRESOLVED ; contraintes PREPARE_ONLY, NO_CURSOR_REAL, NO_ATTEMPT, NO_GATE_D.
3. **Validation :** contrat M3 non exécutable (`executionAllowed: false`) ; confirmation UI absente pour ce chemin.
4. **Supersession :** `SupersedeExecutionContract` existe — prior non superseded/cancelled ; OCC version ; crée successeur validé ; prior devient superseded ; pas de mutation silencieuse des champs critiques sans overrides.
5. **Confirmation :** chemin fixture orchestre request→grant→confirm ; Confirmations restent **Memory process-local** (`createSqliteDecisionServices`) alors que HumanDecision/EC sont SQLite — limite de reprise distincte.
6. **StartExecution :** unique séquenceur d’autorité ; utilisé par `confirmAndExecuteF3Fixture` après Select.
7. **ExecutionAttempt :** cycle de vie Product SQLite ; Select crée Attempt `accepted` ; StartExecution lance.
8. **AgentCapability :** match exact capabilities/action/target/scope ; fixture utilise `cap:f3-fixture-docs` ; M3 laisse `cap:unresolved` → aucun agent ne matche ; projection `selectedAgentRef:null`.
9. **Divergence fixture :** UI `canConfirmF3` = fixture prepare seulement ; M3 prepare est lecture seule (pas de bouton confirm/execute M3) ; aucune action serveur M3 execute.
10. **Restart durable :** HumanDecision / EC M3 / Attempt / Evidence / RB / LPS refs survivent ; Conversation/Proposal/Confirmation Memory non.

### 22.2 Contrat cible pour résolution — HISTORICAL QUALIFICATION — SUPERSEDED WHERE DECIDED BELOW

> Historique de qualification. L’implémentation applicative correspondante est `resolveM3ExecutionContract` (§22.4).

| Question | Statut |
|---|---|
| Input autoritatif pour action / target / capability / réversibilité (Slice A technique) | **DECIDED / IMPLEMENTED** — input applicatif explicite (`M3ResolvedExecutionFields`) ; acquisition UX future = Figma/UI, pas architecture Slice A |
| Successeur ExecutionContract via supersession existante | **DECIDED / IMPLEMENTED** |
| Contrat original PREPARE conservé (audit) | **DECIDED / IMPLEMENTED** |
| Confirmation existante réutilisée | **DECIDED** (Memory/process-local — limitation résiduelle explicite, non changée par Slice A) |
| StartExecution seul séquenceur | **DECIDED / IMPLEMENTED** (composition appelant) |
| Preuve fixture-safe ZERO REAL | **DECIDED** (tests) |
| Confirmation durability | **RÉSIDUEL** — Memory/process-local ; non prouvé blocker actuel de l’exit proof technique |
| Preuve REAL / Gate D | **HORS CYCLE** — GO Morris séparé uniquement |
| UI / Figma présentation des champs résolus | **FUTUR** — distinct de Slice A architecture |

### 22.3 Anti-revendications G-UX-15

Implementation candidate ≠ acceptance / product E2E / REAL. Fixture ≠ critical-path product proof. ZERO REAL. Aucun nouveau modèle de contrat. Aucun nouveau moteur de séquencement. G-UX-15 CLOSED / ACCEPTED uniquement après gate Morris.

### 22.4 Statut post Slice A + final amend exit-proof

**G-UX-15 = IMPLEMENTED CANDIDATE — FINAL AMEND APPLIED — FIXTURE-SAFE APPLICATION WIRING PROOF PASS — CHATGPT RE-REVIEW / MORRIS EXIT-PROOF ACCEPTANCE PENDING**

Amendements appliqués (cumul) :

- rejet de tous les stop-condition sentinels unresolved connus sur input explicite / successeur ;
- identité exacte du contrat M3 PREPARE canonique (`xct:m3:{safeDecisionId}` + idempotency) ;
- replay idempotent : supersession réussie + validation échouée → revalider le **même** successeur draft/proposed (pas de second supersede) ;
- **final :** gouvernance successor (MORRIS + decisionRefs exacts + `idem:m3-res:{decisionId}:{successorId}`) sur replay ;
- **final :** `failed` reconnu comme état T-A5 progressé légitime (pas de régression) ;
- **final :** `validated`-only MORRIS refuse ok:true (confirmation_required attendu).

Acceptation Morris requise avant de retirer le blocker produit / avant Figma GO / UI Delivery.

---

## 23. Qualification ciblée G-UX-08 — AMEND

### Faits (vérifiés base `2f0d7236`)

- `recordDecision` : AMEND → Proposal `AMENDMENT_REQUIRED`, HumanDecision durable `amended`, `selectedOptionId: "opt:amend"`, `readyForNextGatedStep: false`.
- Asymétrie vs GO : AMEND **n’attache pas** de `DecisionBasis` ; **ne lien pas** LPS `decisionIds` (`linkToLivingProjectState: false`) ; `cycleInstanceId` typiquement absent sur la décision AMEND.
- UI : gate se ferme après AMEND ; carte « décision prise » ; **pas** de CTA « retour clarification / requalification » ; `canPrepareF3` / `canPrepareM3` restent faux.
- `NEEDS_CLARIFICATION` est déclaré dans les types F2 mais **jamais assigné** dans le code produit.
- Réutilisation incidente : un nouvel envoi utilisateur peut créer une **nouvelle** Proposal via F1/F2 ; ce n’est **pas** une boucle AMEND-aware.
- Proposal reste process-local ; Proposal terminale `AMENDMENT_REQUIRED` refuse une re-décision (`PROPOSAL_NOT_DECIDABLE`) ; stale = drift de contexte / statut terminal, pas une machine d’état post-AMEND.
- AMEND ne peut pas entrer M3 PREPARE (`status !== "accepted"` / absence de DecisionBasis).

### Comportement fonctionnel minimum requis

HumanDecision amended → conversation/clarification → nouvelle qualification → **nouvelle** Proposal → nouvelle décision (DecisionBasis + lien LPS uniquement si GO accepté).

Ne pas muter la Proposal amendée ; ne pas inventer un DecisionBasis pour AMEND.

### Relation à G-UX-15

Partage doctrine / HumanDecision / F2 / Proposal process-local, **pas** le cycle ExecutionContract → StartExecution. Corriger la boucle AMEND **ne** résout **pas** G-UX-15. Groupage possible mais **non nécessaire**. Voir §25.

Aucune implémentation **G-UX-08** dans ce cycle (hors Slice A).

---

## 24. Qualification ciblée G-UX-10 — fraîcheur Recommendation

### Faits

- `RecommendNextGate` : coordination **read-only** ; `kind: recommendation` ; `executionAuthority: false` ; snapshots versionnés ; détecte claim/bundle superseded / version mismatch.
- Réhydratation : LPS courant → `evidenceIds` / `reviewBundleIds` → readers → RecommendNextGate.
- Pas de modèle Recommendation durable distinct comme autorité.

### Modèle de fraîcheur candidat

Dériver « courante / périmée » depuis les faits durables versionnés (Attempt/Evidence/RB/LPS refs) et les snapshots de coordination. Afficher explicitement l’état périmé et le résultat remplaçant.

Point UI actuel : carte session `f3Execute.recommendation` vs réhydratation durable au remount — sans libellé « Recommendation périmée » si le LPS a avancé pendant que la carte session reste affichée.

**Défaut :** pas de nouvelle persistence Recommendation. N’ajouter un store que si preuve de nécessité (exit trigger futur).

Ne jamais transformer Recommendation en HumanDecision / autorité d’exécution.

Aucune implémentation **G-UX-10** dans ce cycle (hors Slice A).

---

## 25. Analyse des tranches de traitement cohérentes

### OBSERVATION

- G-UX-15 touche ExecutionContract supersession → Confirmation → StartExecution → Attempt.
- G-UX-08 touche post-AMEND F1/F2 / Proposal / Decision.
- G-UX-10 touche dérivation Evidence/RB/LPS / présentation Recommendation.
- Frontières d’application largement distinctes ; preuves indépendantes possibles.
- R18 autorise le groupage cohérent ; n’autorise pas l’inflation de scope.

### OPTIONS

| Option | Contenu | Avantage | Coût / risque |
|---|---|---|---|
| **SLICE A** | G-UX-15 seul | Plus petite capacité E2E critique ; PR reviewable ; prouvable isolément | AMEND/fraîcheur restent ouverts pour UAT complet |
| **SLICE B** | G-UX-15 + G-UX-08 | Couvre amend + exécution | Scope ↑ ; dépendances partagées limitées ; revue plus lourde |
| **SLICE C** | G-UX-15 + G-UX-08 + G-UX-10 | Max couverture applicative | Inflation ; G-UX-10 surtout présentation/dérivation Delivery |

### RECOMMENDATION

**SLICE A — G-UX-15 only** — **sélectionnée et implémentée (candidat + final amend)**.

Traiter G-UX-08 et G-UX-10 comme tranches Delivery / wiring séparées. Ne pas forcer C.

Prochaine décision Morris : **ACCEPT G-UX-15 SLICE A EXIT PROOF** (ou AMEND / CORRECT).

### MORRIS DECISION REQUIRED

**ACCEPT G-UX-15 SLICE A EXIT PROOF** (ou AMEND / CORRECT).

La sélection A/B/C est déjà consommée (SLICE A).

---

## 26. Verdicts de readiness

### FIGMA READINESS = **READY WITH FUNCTIONAL RESERVES**

**≠ Figma autorisé. D-PRE-M6-UX-05 = NO DECISION YET.**

Sens : le parcours, l’IA, les états §9/§15 et les définitions G-UX-08/10/15 sont assez stables pour qu’un futur Visual Contract représente fidèlement les états **sans masquer G-UX-15**.

Réserves fonctionnelles (peuvent rester ouvertes pendant un futur Figma, mais doivent être définies/représentées) :

- G-UX-15 IMPLEMENTED CANDIDATE — FINAL AMEND APPLIED — FIXTURE-SAFE APPLICATION WIRING PROOF PASS — CHATGPT RE-REVIEW / MORRIS EXIT-PROOF ACCEPTANCE PENDING (ne pas masquer) ;
- G-UX-08/10 définis pour représentation ;
- G-UX-01–07/13 inputs de design ;
- G-UX-09 sémantique de reprise honnête ;
- G-UX-11/12/14 hors ou non-bloquants Figma.

Prérequis avant un futur Figma GO : ChatGPT re-review + Morris ACCEPT de l’exit proof G-UX-15 ; stabilité des définitions pré-Figma restantes.

### UI DELIVERY READINESS = **NOT READY**

Parce que :

- l’exit proof G-UX-15 Slice A est encore en attente d’acceptation Morris ;
- le Figma Visual Contract n’est pas autorisé / validé ;
- UI Delivery reste un gate distinct ultérieur.

Figma readiness ≠ Delivery readiness. Ce n’est **pas** parce que G-UX-15 serait « non implémenté ».

Prérequis Delivery : ACCEPT Morris de Slice A → Figma GO + validation visuelle → GO Delivery séparé.

### ROADMAP

Read-only dans ce cycle. **ROADMAP SYNC REQUIRED AFTER GAP READINESS DECISION / INTEGRATION.**

---

## 27. Séquence de gates futurs (candidate)

1. ChatGPT **final** re-review de ce handoff final amend — **prochaine**.
2. Morris **ACCEPT G-UX-15 SLICE A EXIT PROOF** (ou AMEND).
3. Intégration / capitalisation baseline + sync Roadmap (GO séparé) — **après** acceptation seulement.
4. Morris Figma GO (D-PRE-M6-UX-05) — séparé.
5. Figma Visual Contract.
6. Validation visuelle Morris.
7. UI Delivery sur runtime existant.
8. Browser E2E + preuves visuelles runtime.
9. Comparaison Figma/runtime.
10. Morris UAT (incl. process-local honesty).
11. Revue dettes/gaps restants (G-UX-08/10/12, M5-C owner).
12. M6 Entry Qualification **uniquement** sous GO séparé.

Aucun step « qualify/implement Slice A » restant — Slice A est implémentée candidat ; seul l’exit proof Morris reste.

---

## 28. Build Doctrine check (ce cycle)

| Règle | Vérification |
|---|---|
| R1 | Traitements proposés servent V3-F05/F02/F14/F15 et parcours pré-M6 |
| R2 | Capacité utilisateur complète prioritaire sur hardening non bloquant |
| R3 | Réutilisation runtime/application existante |
| R5/R20 | Process-local : exit = preuve UAT de nécessité |
| R6 | Pas d’architecture parallèle proposée |
| R7 | Fixture ≠ critical-path product proof |
| R8 | Tranches futures doivent produire capacité E2E |
| R11 | Pas de nouvelle dette volontaire sans owner+exit (M5-C owner déjà dette connue) |
| R18 | Groupage évalué ; recommandation anti-inflation (SLICE A) |
| R19 | Aucune claim READY/ADOPTED runtime v3 |

---

## 29. Compteurs de cycle (Slice A + final amend)

Project artifacts created = 0 · Existing Pre-M6 artifact modified = 1 · Resolver final amend = 1 · G-UX-15 tests final amend = 1 · Roadmap/Build Doctrine/v3 = 0 · UI/Figma/Delivery/M6/REAL/Gate D = 0 · OA domain change = 0 · project commit/push/PR = 0 · Review Handoff push = 1 bounded L3

Application code (Slice A) : resolveM3ExecutionContract + exports + tests — **présents** (non commités). G-UX-08/10 implementation = 0.

```

### 20. Stale-language search results
REQUALIFY occurrences: historical-only (timeline / §18 historical status).
Aucune implémentation: G-UX-08 and G-UX-10 only (explicitly labelled hors Slice A).
No current REQUALIFY / no-implementation / DECISION REQUIRED — MORRIS for Slice A architecture.
No AMEND CORRECTIONS APPLIED remnant — replaced by FINAL AMEND APPLIED.
No G-UX-15 CLOSED / FIGMA AUTHORIZED / READY FOR UI DELIVERY claims as current.

### 21. Files changed
- resolveM3ExecutionContract.ts (untracked amend)
- gux15.resolveM3ExecutionContract.test.ts (untracked amend)
- f3/index.ts (tracked — export canonicalM3ResolutionIdempotencyKey)
- Pre-M6 baseline artifact (untracked sync)
- Review pack `.tmp-sfia-review/chatgpt-review.md`

### 22. Forbidden-files verification
OA/domain, UI, Roadmap, Build Doctrine, v3, method, prompts, schema, Confirmation persistence, DecisionBasis, StartExecution — NOT MODIFIED.

### 23–26. Staged empty · REAL unset · Gate D 0 · project commit/push/PR 0

### 27. Remaining reservations
- Confirmation still process-local
- No UI wiring
- Fixture-safe ≠ product E2E/REAL
- G-UX-08/10 unchanged
- Morris exit-proof acceptance still required — not CLOSED

### 28. Morris decisions still required
ACCEPT G-UX-15 SLICE A EXIT PROOF (or AMEND)

### 29. Next gate
ChatGPT final re-review of this handoff → Morris ACCEPT

### 30. Final verdict
PRE-M6 G-UX-15 SLICE A FINAL AMEND COMPLETE — SUCCESSOR REPLAY GOVERNANCE IDENTITY ENFORCED WITH MORRIS AUTHORITY + EXACT DECISION BINDING + CANONICAL RESOLUTION IDEMPOTENCY — VALIDATED-ONLY MORRIS STATE FAILS CLOSED — FAILED RECOGNIZED AS LEGITIMATE PROGRESSED T-A5 STATE WITHOUT LIFECYCLE REGRESSION — IDEMPOTENT REPLAY PRESERVES SAME SUCCESSOR WITH NO DUPLICATE ATTEMPT OR LAUNCH — ORIGINAL M3 AUDIT CONTRACT PRESERVED — EXISTING SUPERSESSION / CONFIRMATION / AGENT SELECTION / STARTEXECUTION / EXECUTIONATTEMPT ARCHITECTURE KEPT — PRE-M6 ARTIFACT CURRENT-STATE SYNC COMPLETE — FIXTURE-SAFE APPLICATION WIRING PROOF PASS — ZERO REAL — NO GATE D — NO FIGMA — NO UI DELIVERY — NO M6 — READY FOR CHATGPT FINAL RE-REVIEW / MORRIS ACCEPT G-UX-15 SLICE A EXIT PROOF

### Tracked index.ts diff
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/index.ts b/projects/sfia-studio/app/features/project-assistant/f3/index.ts
index 388de83..44ee145 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/index.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/index.ts
@@ -17,6 +17,21 @@ export { validateF2ForPrepare } from "./validateF2ForPrepare";
 export { prepareF3Fixture } from "./prepareF3Fixture";
 export { prepareM3FromDecision } from "./prepareM3FromDecision";
 export type { F3M3PreparePayload, PrepareM3Deps } from "./prepareM3FromDecision";
+export { resolveM3ExecutionContract } from "./resolveM3ExecutionContract";
+export type {
+  M3ResolvedExecutionFields,
+  ResolveM3Deps,
+  ResolveM3ExecutionContractInput,
+  ResolveM3Failure,
+  ResolveM3Success,
+} from "./resolveM3ExecutionContract";
+export {
+  UNRESOLVED_STOP_SENTINELS,
+  canonicalM3PrepareContractId,
+  canonicalM3PrepareIdempotencyKey,
+  canonicalM3ResolutionIdempotencyKey,
+  safeDecisionSegment,
+} from "./resolveM3ExecutionContract";
 export { confirmAndExecuteF3Fixture } from "./confirmAndExecuteF3Fixture";
 export { ingestEvidenceAndRecommend } from "./ingestEvidenceAndRecommend";
 export { appendEvidenceOutcomeToLps } from "./appendEvidenceOutcomeToLps";

```
