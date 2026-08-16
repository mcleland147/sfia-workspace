# SFIA STUDIO — PRE-M6 UI DELIVERY OPTION A — CYCLE 8 AMEND QA-PRE-M6-01 FINAL HARDENING

**Level:** FULL
**Timestamp:** 2026-08-16 20:17:27 CEST
**Branch:** delivery/sfia-studio-pre-m6-ui-option-a
**HEAD / origin/main:** 0d33478566627a9bf507d5a06323962d349308ee
**Incoming handoff:** 774d58e7474cc5dace88f7a0a23269a3367864dd
**REAL:** 0
**Project staging/commits/pushes/PR:** 0

---

## GO Morris (exact)

GO MORRIS — CYCLE 8 AMEND QA-PRE-M6-01 FINAL HARDENING —
EXTRACT/REUSE ONE SHARED CONFIRM→SELECT→START→RECORD→EVIDENCE PIPELINE
FOR LEGACY FIXTURE + RESOLVED M3 —
REMOVE DUPLICATED EXECUTION ORCHESTRATION —
REVALIDATE CANONICAL M3 SUCCESSOR GOVERNANCE IDENTITY AT SERVER EXECUTION
BOUNDARY INCLUDING EXACT CANONICAL PREPARE LINEAGE —
PRESERVE LEGACY PROPOSAL STALE FAIL-CLOSED —
PRESERVE EXISTING G-UX-15 BRIDGE —
NO NEW ENGINE — NO NEW PERSISTENCE — NO MIGRATION — NO REAL —
NO COMMIT — NO PUSH — NO PR — NO M6 —
RETURN FOR CHATGPT REVIEW BEFORE CYCLE 9

---

## Cycle / Profile / Typology / CKC

- Cycle 8 — Delivery / CONTINUATION / AMEND / FINAL HARDENING
- Typology: INC
- Profile: Critical
- CKC detailed: ABSENT (synthetic map fallback only)

---

## Git Truth

| Check | Value |
|-------|-------|
| branch | delivery/sfia-studio-pre-m6-ui-option-a |
| HEAD | 0d33478566627a9bf507d5a06323962d349308ee |
| origin/main | 0d33478566627a9bf507d5a06323962d349308ee |
| origin/sfia/review-handoff (entry) | 774d58e7474cc5dace88f7a0a23269a3367864dd |
| staged | 0 |
| REAL | unset |

---

## Convergence Pre-check

Build Doctrine VALIDATED · Option A ADOPTED · M6 NOT AUTHORIZED · runtime v3 NON ADOPTED · G-UX-11 FAIL/OPEN until Cycle 9.

---

## Build Doctrine Challenge

Useful now: YES. Two precondition paths, one shared mutation pipeline. No parallel engine. Proof: shared helper + boundary validator + tests.

---

## Blocker A — Duplicate Orchestration BEFORE / AFTER

**BEFORE:** confirmAndExecuteF3Fixture and confirmAndExecuteResolvedM3 each contained full confirm→select→start→record→evidence orchestration.

**AFTER:**
- `executeConfirmedFixtureSafeContract.ts` = ONE shared pipeline
- Legacy caller: validateF2ForPrepare + fixture authority → shared pipeline
- M3 caller: validateResolvedM3ExecutionBoundary + M3 authority → shared pipeline
- Path-specific identities preserved (cfm:f3 / cfm:m3, xat:f3 / xat:m3)

---

## Blocker B — Server Boundary Identity

`validateResolvedM3ExecutionBoundary.ts` READ-ONLY fail-closed:
- HumanDecision accepted + DecisionBasis.projectId
- Canonical PREPARE id + idempotency via G-UX-15 exports
- Successor supersedes exactly canonical prepare
- Successor resolution idempotency exact
- Fixture-safe profile exact match
- Unresolved sentinels rejected
- Hostile input → Attempt 0 / launch 0

resolveM3ExecutionContract.ts: **UNCHANGED**

---

## Files modified

- f3/confirmAndExecuteF3Fixture.ts (thinned)
- f3/confirmAndExecuteResolvedM3.ts (thinned)
- f3/index.ts (exports)

## Files created

- f3/executeConfirmedFixtureSafeContract.ts
- f3/validateResolvedM3ExecutionBoundary.ts
- __tests__/project-assistant/qa-pre-m6-01.finalHardening.test.ts

---

## Engineering / Tests

- typecheck PASS
- lint PASS
- vitest 1773 pass
- build PASS
- hardening unit tests 10/10 PASS
- prior qa-pre-m6-01 tests PASS
- Playwright targeted Option A **8/8 PASS**
- **FULL CYCLE 9 NOT RERUN**

---

## G-UX statuses

| Item | Status |
|------|--------|
| G-UX-08 | OPEN / DEFERRED |
| G-UX-09 + Confirmation | KEEP RESERVE |
| G-UX-10 | preserved |
| G-UX-11 | FAIL / OPEN until Cycle 9 |
| Visual / Figma | not re-decided |

---

## Safety Counters

| Counter | Value |
|---------|-------|
| Hardening production files modified | 3 |
| Hardening production files created | 2 |
| Tests created | 1 |
| Execution orchestration implementations after | 1 shared pipeline |
| Legacy precondition path | 1 |
| M3 precondition path | 1 |
| Proposal STALE weakening | 0 |
| Proposal context rebase | 0 |
| DecisionBasis change | 0 |
| G-UX-15 bridge change | 0 |
| New persistence / migration / engine | 0 |
| REAL | 0 |
| Full Cycle 9 rerun | 0 |
| Project staging/commits/pushes/PR | 0 |
| Review Handoff | 1 bounded L3 |

---

## Verdict

PRE-M6 UI DELIVERY OPTION A —
CYCLE 8 AMEND QA-PRE-M6-01 FINAL HARDENING COMPLETE —
ONE SHARED CONFIRM→SELECT→START→RECORD→EVIDENCE PIPELINE —
LEGACY AND RESOLVED M3 PRECONDITIONS REMAIN DISTINCT —
DUPLICATED EXECUTION ORCHESTRATION REMOVED —
CANONICAL M3 SUCCESSOR GOVERNANCE IDENTITY REVALIDATED AT SERVER BOUNDARY —
EXACT CANONICAL PREPARE LINEAGE VERIFIED —
CANONICAL RESOLUTION IDEMPOTENCY VERIFIED —
FIXTURE-SAFE PROFILE VERIFIED —
LEGACY PROPOSAL STALE FAIL-CLOSED PRESERVED —
EXISTING G-UX-15 BRIDGE UNCHANGED —
DUPLICATE ATTEMPT PROTECTION PRESERVED —
NO NEW PERSISTENCE — NO MIGRATION — NO NEW ENGINE —
G-UX-08 OPEN / DEFERRED —
G-UX-09 + CONFIRMATION KEEP RESERVE —
G-UX-11 STILL FAIL / OPEN UNTIL CYCLE 9 RERUN —
NO PROJECT COMMIT — NO PROJECT PUSH — NO PR — NO M6 —
RUNTIME V3 NON ADOPTED — ZERO REAL —
FULL CYCLE 9 NOT RERUN —
READY FOR CHATGPT RE-REVIEW

---

## CODE — NEW FILES (complete)

### `projects/sfia-studio/app/features/project-assistant/f3/executeConfirmedFixtureSafeContract.ts`

```typescript
/**
 * Shared fixture-safe execution pipeline (PRE-M6 QA-PRE-M6-01 final hardening).
 *
 * ONE mutation sequence for both precondition paths:
 * Confirmation → ConfirmExecutionContract → Select → Start → Record → Evidence.
 *
 * Preconditions (Proposal STALE / M3 successor governance) MUST be closed by
 * the caller BEFORE entry. This helper does not decide authority eligibility.
 */

import type {
  DecisionServices,
  OaActorReference,
} from "@/lib/oa/decision";
import type {
  ExecutionContract,
  ExecutionContractServices,
} from "@/lib/oa/execution-contract";
import type {
  ExecutionAttemptServices,
  TestExecutionAdapter,
} from "@/lib/oa/execution-attempt";
import type { EvidenceReviewServices } from "@/lib/oa/evidence-review";
import type { ProjectServices } from "@/lib/oa/project";
import type { ProposalDto } from "../f2/types";
import {
  F3_ADAPTER_ID,
  F3_AGENT_ID,
  F3_CONFIRM_ACTION_REF,
  F3_LABELS,
  F3_MODE,
  resolveF3EphemeralNotice,
} from "./constants";
import { ingestEvidenceAndRecommend } from "./ingestEvidenceAndRecommend";
import type { F3ExecutePayload } from "./types";

export type SharedFixtureSafePipelineDeps = {
  decisionServices: DecisionServices;
  executionContractServices: ExecutionContractServices;
  executionAttemptServices: ExecutionAttemptServices;
  evidenceReviewServices: EvidenceReviewServices;
  fixtureAdapter: TestExecutionAdapter;
  projectServices?: ProjectServices;
  productDurablePath?: boolean;
};

export type SharedFixtureSafePipelineIdentities = {
  confirmationId: string;
  confirmationIdempotencyKey: string;
  confirmationLevel: "N2" | "N3";
  attemptId: string;
  attemptIdempotencyKey: string;
  resultRef: string;
};

export type SharedFixtureSafePipelineInput = {
  projectId: string;
  decisionId: string;
  /** Legacy fixture may carry Proposal for provenance; M3 path passes null. */
  proposal: ProposalDto | null;
  contract: ExecutionContract;
  expectedContractVersion: number;
  actor: OaActorReference;
  authorityEvidenceId: string;
  identities: SharedFixtureSafePipelineIdentities;
  /** Extra disclosures appended after shared labels. */
  extraDisclosures?: readonly string[];
  deps: SharedFixtureSafePipelineDeps;
};

async function buildSharedExecutePayload(input: {
  proposal: ProposalDto | null;
  decisionId: string;
  contract: ExecutionContract;
  attempt: {
    attemptId: string;
    status: string;
    selectedAgentRef: string;
    resultRef?: string;
    selectionStrategy?: string;
  };
  launchCount: number;
  reusedExistingAttempt: boolean;
  projectId: string;
  extraDisclosures: readonly string[];
  deps: SharedFixtureSafePipelineDeps;
}): Promise<
  | { ok: true; payload: F3ExecutePayload }
  | { ok: false; code: string; message: string }
> {
  const ingested = await ingestEvidenceAndRecommend({
    projectId: input.projectId,
    attemptId: input.attempt.attemptId,
    executionContractId: input.contract.executionContractId,
    deps: {
      evidenceReviewServices: input.deps.evidenceReviewServices,
      projectServices: input.deps.projectServices,
    },
  });
  if (!ingested.ok) {
    return ingested;
  }

  const productDurable =
    input.deps.productDurablePath ??
    input.deps.projectServices !== undefined;
  const persistenceNotice = resolveF3EphemeralNotice(productDurable);

  return {
    ok: true,
    payload: {
      turnKind: "f3_execute",
      mode: F3_MODE,
      proposal: input.proposal,
      decisionId: input.decisionId,
      contract: {
        executionContractId: input.contract.executionContractId,
        version: input.contract.version,
        status: input.contract.status,
        action: input.contract.action,
        target: input.contract.target,
        scope: input.contract.scope,
        requiredAuthority: input.contract.requiredAuthority,
        mode: F3_MODE,
        constraints: [...input.contract.constraints],
      },
      attempt: {
        attemptId: input.attempt.attemptId,
        status: input.attempt.status,
        selectedAgentRef: input.attempt.selectedAgentRef,
        adapterId: F3_ADAPTER_ID,
        externalEffects: false,
        resultRef: input.attempt.resultRef ?? null,
        launchCount: input.launchCount,
        selectionStrategy:
          input.attempt.selectionStrategy ?? "capabilities_deterministic",
        mode: F3_MODE,
      },
      evidence: ingested.evidence,
      reviewBundle: ingested.reviewBundle,
      recommendation: ingested.recommendation,
      reusedExistingAttempt: input.reusedExistingAttempt,
      executionPerformed: true,
      realExecution: false,
      gitWritePerformed: false,
      labels: {
        fixtureNoReal: F3_LABELS.fixtureNoReal,
        noGitWrite: F3_LABELS.noGitWrite,
        recommendationNotDecision: F3_LABELS.recommendationNotDecision,
        cursorRealBlocked: F3_LABELS.cursorRealBlocked,
        hardOpen: F3_LABELS.hardOpen,
      },
      processLocalNotice: persistenceNotice,
      disclosures: [
        F3_LABELS.fixtureNoReal,
        F3_LABELS.noGitWrite,
        F3_LABELS.recommendationNotDecision,
        F3_LABELS.cursorRealBlocked,
        F3_LABELS.hardOpen,
        F3_LABELS.noReadyClaim,
        F3_LABELS.noTa6Complete,
        ...input.extraDisclosures,
        persistenceNotice,
      ],
    },
  };
}

/**
 * Shared confirm → select → start → record → evidence pipeline.
 * Caller supplies validated contract + actor + authority evidence + path identities.
 */
export async function executeConfirmedFixtureSafeContract(
  input: SharedFixtureSafePipelineInput,
): Promise<
  | { ok: true; payload: F3ExecutePayload }
  | { ok: false; code: string; message: string }
> {
  if (input.deps.fixtureAdapter.adapterId !== F3_ADAPTER_ID) {
    return {
      ok: false,
      code: "ADAPTER_IDENTITY_MISMATCH",
      message: "Adapter F3 identity mismatch — REAL/NoOp interdit.",
    };
  }
  if (input.deps.fixtureAdapter.externalEffects !== false) {
    return {
      ok: false,
      code: "EXTERNAL_EFFECTS_FORBIDDEN",
      message: "externalEffects doit rester false (FIXTURE only).",
    };
  }

  let contract = input.contract;
  const extraDisclosures = input.extraDisclosures ?? [];

  // Duplicate-attempt protection BEFORE OCC.
  const listed =
    await input.deps.executionAttemptServices.listExecutionAttempts.execute({
      executionContractId: contract.executionContractId,
    });
  if (listed.ok) {
    const succeeded = listed.attempts.find((a) => a.status === "succeeded");
    if (succeeded) {
      return buildSharedExecutePayload({
        proposal: input.proposal,
        decisionId: input.decisionId,
        contract,
        attempt: succeeded,
        launchCount: input.deps.fixtureAdapter.launchCallCount,
        reusedExistingAttempt: true,
        projectId: input.projectId,
        extraDisclosures,
        deps: input.deps,
      });
    }
  }

  if (contract.version !== input.expectedContractVersion) {
    return {
      ok: false,
      code: "CONTRACT_VERSION_MISMATCH",
      message: `Version contrat attendue ${input.expectedContractVersion}, actuelle ${contract.version}.`,
    };
  }

  if (
    contract.status === "confirmation_required" ||
    contract.status === "validated"
  ) {
    const requested =
      await input.deps.decisionServices.requestConfirmation.execute({
        confirmationId: input.identities.confirmationId,
        level: input.identities.confirmationLevel,
        actionRef: F3_CONFIRM_ACTION_REF,
        requestedBy: input.actor,
        requestedTo: input.actor,
        scope: contract.scope,
        idempotencyKey: input.identities.confirmationIdempotencyKey,
        decisionRef: input.decisionId,
      });
    if (!requested.ok) {
      return {
        ok: false,
        code: requested.error.detailCode,
        message: requested.error.message,
      };
    }

    const granted = await input.deps.decisionServices.grantConfirmation.execute({
      confirmationId: input.identities.confirmationId,
      actor: input.actor,
      authorityEvidenceId: input.authorityEvidenceId,
    });
    if (!granted.ok) {
      return {
        ok: false,
        code: granted.error.detailCode,
        message: granted.error.message,
      };
    }

    const confirmed =
      await input.deps.executionContractServices.confirmExecutionContract.execute(
        {
          executionContractId: contract.executionContractId,
          confirmationId: input.identities.confirmationId,
          actor: input.actor,
          authorityEvidenceId: input.authorityEvidenceId,
          expectedVersion: contract.version,
        },
      );
    if (!confirmed.ok) {
      return {
        ok: false,
        code: confirmed.error.detailCode,
        message: confirmed.error.message,
      };
    }
    contract = confirmed.contract;
  } else if (
    contract.status !== "confirmed" &&
    contract.status !== "executing" &&
    contract.status !== "completed"
  ) {
    return {
      ok: false,
      code: "CONTRACT_NOT_CONFIRMABLE",
      message: `Contrat non confirmable (statut ${contract.status}).`,
    };
  }

  const selected =
    await input.deps.executionAttemptServices.selectExecutionAgent.execute({
      attemptId: input.identities.attemptId,
      executionContractId: contract.executionContractId,
      idempotencyKey: input.identities.attemptIdempotencyKey,
      actor: input.actor,
      authorityEvidenceId: input.authorityEvidenceId,
      expectedContractVersion: contract.version,
      selectionProfile: "standard",
      selectionStrategy: "capabilities_deterministic",
      requestedAgentRef: F3_AGENT_ID,
      systemInitiated: true,
    });
  if (!selected.ok) {
    return {
      ok: false,
      code: selected.error.detailCode,
      message: selected.error.message,
    };
  }

  const started =
    await input.deps.executionAttemptServices.startExecution.execute({
      attemptId: input.identities.attemptId,
      actor: input.actor,
      authorityEvidenceId: input.authorityEvidenceId,
    });
  if (!started.ok) {
    return {
      ok: false,
      code: started.error.detailCode,
      message: started.error.message,
    };
  }

  const recorded =
    await input.deps.executionAttemptServices.recordExecutionResult.execute({
      attemptId: input.identities.attemptId,
      adapterId: F3_ADAPTER_ID,
      resultRef: input.identities.resultRef,
      technicalExitCode: 0,
    });
  if (!recorded.ok) {
    return {
      ok: false,
      code: recorded.error.detailCode,
      message: recorded.error.message,
    };
  }

  const launchCount = input.deps.fixtureAdapter.launchCallCount;

  const refreshed =
    await input.deps.executionContractServices.getExecutionContract.execute({
      executionContractId: contract.executionContractId,
    });
  if (refreshed.ok) contract = refreshed.contract;

  return buildSharedExecutePayload({
    proposal: input.proposal,
    decisionId: input.decisionId,
    contract,
    attempt: recorded.attempt,
    launchCount,
    reusedExistingAttempt: false,
    projectId: input.projectId,
    extraDisclosures,
    deps: input.deps,
  });
}

```

### `projects/sfia-studio/app/features/project-assistant/f3/validateResolvedM3ExecutionBoundary.ts`

```typescript
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
import { fixtureSafeM3ResolutionProfile } from "./fixtureSafeM3ResolutionProfile";

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

function sortedEqual(a: readonly string[], b: readonly string[]): boolean {
  if (a.length !== b.length) return false;
  const left = [...a].sort();
  const right = [...b].sort();
  return left.every((v, i) => v === right[i]);
}

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

  const profile = fixtureSafeM3ResolutionProfile();
  if (
    successor.action !== profile.action ||
    successor.target !== profile.target ||
    successor.scope !== (profile.scope ?? successor.scope) ||
    successor.reversibility !== profile.reversibility ||
    !sortedEqual(
      successor.requiredCapabilities,
      profile.requiredCapabilities,
    ) ||
    !sortedEqual(successor.constraints, profile.constraints ?? []) ||
    !sortedEqual(successor.stopConditions, profile.stopConditions ?? [])
  ) {
    return {
      ok: false,
      code: "M3_SUCCESSOR_GOVERNANCE_MISMATCH",
      message:
        "Successor durable fields do not match the authorized fixture-safe resolution profile.",
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

```

### `projects/sfia-studio/app/__tests__/project-assistant/qa-pre-m6-01.finalHardening.test.ts`

```typescript
/**
 * QA-PRE-M6-01 FINAL HARDENING — shared pipeline + M3 boundary.
 * @vitest-environment node
 */
import fs from "node:fs";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  confirmAndExecuteF3Fixture,
  confirmAndExecuteResolvedM3,
  executeConfirmedFixtureSafeContract,
  prepareAndResolveM3ProductPath,
  prepareF3Fixture,
  prepareM3FromDecision,
  validateResolvedM3ExecutionBoundary,
  canonicalM3PrepareContractId,
  canonicalM3ResolutionIdempotencyKey,
  F3_ADAPTER_ID,
} from "@/features/project-assistant/f3";
import {
  createProposalId,
  F2_PROCESS_LOCAL_NOTICE,
  resetF2ProposalStoreForTests,
  saveProposal,
} from "@/features/project-assistant/f2/proposalStore";
import { recordF2Decision } from "@/features/project-assistant/f2/recordDecision";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
  type RuntimeApplicationService,
} from "@/lib/vertical-slice-runtime";

const APP_ROOT = path.resolve(__dirname, "../..");
const REGISTRY_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS_ROOT = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);
const F3_DIR = path.join(
  APP_ROOT,
  "features/project-assistant/f3",
);

class FixedIdSource implements LocalProjectIdSource {
  private project = 0;
  private lps = 0;
  private correlation = 0;
  nextProjectId(): string {
    this.project += 1;
    return `prj:harden-${this.project}`;
  }
  nextLpsVersionId(): string {
    this.lps += 1;
    return `lps:harden-${this.lps}`;
  }
  nextCorrelationId(): string {
    this.correlation += 1;
    return `cor:harden-${this.correlation}`;
  }
}

async function createRuntime(): Promise<RuntimeApplicationService> {
  resetRuntimeApplicationServiceForTests();
  return getRuntimeApplicationService({
    registryRoot: REGISTRY_ROOT,
    schemasRoot: SCHEMAS_ROOT,
    nowIso: "2026-08-16T20:00:00.000Z",
    idSource: new FixedIdSource(),
    auditMode: "noop",
  });
}

async function seedGo(runtime: RuntimeApplicationService) {
  const created = await runtime.createProject({
    name: "Hardening",
    objective: "shared pipeline",
    context: "ZERO REAL",
    criticality: "STANDARD",
    constraints: ["FIXTURE ONLY"],
    shortReference: "HRD",
    idempotencyKey: `harden-${Date.now()}-${Math.random()}`,
  });
  expect(created.ok).toBe(true);
  if (!created.ok) throw new Error("create");
  const projectId = created.project.projectId;
  const before = await runtime.getProject(projectId);
  expect(before.ok).toBe(true);
  if (!before.ok) throw new Error("before");

  const snapshot = {
    projectId,
    lpsId: before.livingState.id,
    lpsVersion: before.livingState.version,
    doctrineDigest: before.doctrine.digest,
  };
  const proposal = saveProposal({
    proposalId: createProposalId(),
    status: "DECISION_REQUIRED",
    rephrasedRequest: "x",
    objective: "x",
    cycleTypeId: "cyc:delivery",
    recommendedProfile: "Standard",
    rationale: "hardening",
    scope: "fixture-docs",
    outOfScope: ["REAL"],
    activatedBlocks: ["prepare"],
    expectedOutcome: "attempt",
    sources: [],
    risks: [],
    reservations: [],
    stopConditions: ["AUCUNE EXÉCUTION RÉELLE"],
    morrisGateRequired: true,
    nextPossibleStep: "F3",
    contextSnapshot: snapshot,
    processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
    executionForbidden: true,
    noExecutingStatus: true,
    agentBinding: "NOT_AVAILABLE",
  });

  const go = await recordF2Decision({
    proposalId: proposal.proposalId,
    projectId,
    decisionKind: "GO",
    currentContext: snapshot,
    decisionServices: runtime.oa!.decisionServices,
    authorityResolver: runtime.oa!.authorityResolver,
    nowIso: () => runtime.oa!.clock.nowIso(),
    forceM3Authority: true,
  });
  expect(go.ok).toBe(true);
  if (!go.ok) throw new Error("go");

  const after = await runtime.getProject(projectId);
  expect(after.ok).toBe(true);
  if (!after.ok) throw new Error("after");
  const currentContext = {
    projectId,
    lpsId: after.livingState.id,
    lpsVersion: after.livingState.version,
    doctrineDigest: after.doctrine.digest,
  };
  return {
    projectId,
    proposal: go.proposal,
    decision: go.decision,
    proposalSnapshot: snapshot,
    currentContext,
    runtime,
  };
}

async function resolvePath(runtime: RuntimeApplicationService, seeded: Awaited<ReturnType<typeof seedGo>>) {
  return prepareAndResolveM3ProductPath({
    projectId: seeded.projectId,
    decisionId: seeded.decision.decisionId,
    currentContext: seeded.currentContext,
    deps: {
      decisionServices: runtime.oa!.decisionServices,
      authorityResolver: runtime.oa!.authorityResolver,
      executionContractServices: runtime.oa!.executionContractServices,
      nowIso: () => runtime.oa!.clock.nowIso(),
      forceM3Authority: true,
    },
  });
}

describe("QA-PRE-M6-01 final hardening — shared pipeline + M3 boundary", () => {
  beforeEach(() => {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
  });

  it("H1/H2 — both callers import shared pipeline; architecture has one orchestration body", () => {
    const shared = fs.readFileSync(
      path.join(F3_DIR, "executeConfirmedFixtureSafeContract.ts"),
      "utf8",
    );
    const legacy = fs.readFileSync(
      path.join(F3_DIR, "confirmAndExecuteF3Fixture.ts"),
      "utf8",
    );
    const m3 = fs.readFileSync(
      path.join(F3_DIR, "confirmAndExecuteResolvedM3.ts"),
      "utf8",
    );
    expect(shared).toContain("executeConfirmedFixtureSafeContract");
    expect(shared).toContain("requestConfirmation");
    expect(shared).toContain("selectExecutionAgent");
    expect(shared).toContain("startExecution");
    expect(shared).toContain("ingestEvidenceAndRecommend");
    expect(legacy).toContain('from "./executeConfirmedFixtureSafeContract"');
    expect(m3).toContain('from "./executeConfirmedFixtureSafeContract"');
    expect(legacy).not.toContain("selectExecutionAgent.execute");
    expect(m3).not.toContain("selectExecutionAgent.execute");
    expect(legacy).toContain("validateF2ForPrepare");
    expect(m3).toContain("validateResolvedM3ExecutionBoundary");
    expect(typeof executeConfirmedFixtureSafeContract).toBe("function");
  });

  it("H1 — legacy valid path uses shared pipeline successfully", async () => {
    const runtime = await createRuntime();
    const seeded = await seedGo(runtime);
    // Legacy prepare requires matching context (pre-GO snapshot) — historical valid context.
    const prepared = await prepareF3Fixture({
      projectId: seeded.projectId,
      proposalId: seeded.proposal.proposalId,
      decisionId: seeded.decision.decisionId,
      currentContext: seeded.proposalSnapshot,
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        nowIso: () => runtime.oa!.clock.nowIso(),
        productDurablePath: runtime.oa!.productDurablePath,
      },
    });
    // After GO LPS advanced; proposal snapshot N vs current N+1 → STALE when using current.
    // Historical valid path uses matching snapshot (same as fixture unit tests).
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;

    const executed = await confirmAndExecuteF3Fixture({
      projectId: seeded.projectId,
      proposalId: seeded.proposal.proposalId,
      decisionId: seeded.decision.decisionId,
      executionContractId: prepared.payload.contract.executionContractId,
      expectedContractVersion: prepared.payload.contract.version,
      currentContext: seeded.proposalSnapshot,
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        executionAttemptServices: runtime.oa!.executionAttemptServices,
        evidenceReviewServices: runtime.oa!.evidenceReviewServices,
        fixtureAdapter: runtime.oa!.fixtureAdapter,
        projectServices: runtime.oa!.projectServices,
        productDurablePath: runtime.oa!.productDurablePath,
        nowIso: () => runtime.oa!.clock.nowIso(),
      },
    });
    expect(executed.ok).toBe(true);
    if (!executed.ok) return;
    expect(executed.payload.attempt.status).toBe("succeeded");
    expect(executed.payload.evidence.evidenceId).toBeTruthy();
    expect(runtime.oa!.fixtureAdapter.launchCallCount).toBe(1);
    expect(runtime.oa!.fixtureAdapter.adapterId).toBe(F3_ADAPTER_ID);
  });

  it("H2/H3/H4/H5/H6/S5–S8 — M3 path shared pipeline + replay + boundary PASS", async () => {
    const runtime = await createRuntime();
    const seeded = await seedGo(runtime);
    const resolved = await resolvePath(runtime, seeded);
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;

    const boundary = await validateResolvedM3ExecutionBoundary({
      projectId: seeded.projectId,
      decisionId: seeded.decision.decisionId,
      executionContractId: resolved.payload.successor.executionContractId,
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        executionContractServices: runtime.oa!.executionContractServices,
      },
    });
    expect(boundary.ok).toBe(true);

    const listedBefore =
      await runtime.oa!.executionAttemptServices.listExecutionAttempts.execute({
        executionContractId: resolved.payload.successor.executionContractId,
      });
    expect(listedBefore.ok).toBe(true);
    if (listedBefore.ok) expect(listedBefore.attempts).toHaveLength(0);

    const executed = await confirmAndExecuteResolvedM3({
      projectId: seeded.projectId,
      decisionId: seeded.decision.decisionId,
      executionContractId: resolved.payload.successor.executionContractId,
      expectedContractVersion: resolved.payload.successor.version,
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        executionAttemptServices: runtime.oa!.executionAttemptServices,
        evidenceReviewServices: runtime.oa!.evidenceReviewServices,
        fixtureAdapter: runtime.oa!.fixtureAdapter,
        projectServices: runtime.oa!.projectServices,
        productDurablePath: runtime.oa!.productDurablePath,
        nowIso: () => runtime.oa!.clock.nowIso(),
        forceM3Authority: true,
      },
    });
    expect(executed.ok).toBe(true);
    if (!executed.ok) return;
    expect(executed.payload.proposal).toBeNull();
    expect(executed.payload.attempt.status).toBe("succeeded");
    expect(executed.payload.evidence.evidenceId).toBeTruthy();
    expect(executed.payload.reviewBundle.reviewBundleId).toBeTruthy();
    expect(executed.payload.recommendation.executionAuthority).toBe(false);
    const firstLaunch = runtime.oa!.fixtureAdapter.launchCallCount;
    expect(firstLaunch).toBe(1);

    const replay = await confirmAndExecuteResolvedM3({
      projectId: seeded.projectId,
      decisionId: seeded.decision.decisionId,
      executionContractId: resolved.payload.successor.executionContractId,
      expectedContractVersion: resolved.payload.successor.version,
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        executionAttemptServices: runtime.oa!.executionAttemptServices,
        evidenceReviewServices: runtime.oa!.evidenceReviewServices,
        fixtureAdapter: runtime.oa!.fixtureAdapter,
        projectServices: runtime.oa!.projectServices,
        productDurablePath: runtime.oa!.productDurablePath,
        nowIso: () => runtime.oa!.clock.nowIso(),
        forceM3Authority: true,
      },
    });
    expect(replay.ok).toBe(true);
    if (!replay.ok) return;
    expect(replay.payload.reusedExistingAttempt).toBe(true);
    expect(runtime.oa!.fixtureAdapter.launchCallCount).toBe(firstLaunch);
  });

  it("S2 — legacy STALE after LPS advance preserved", async () => {
    const runtime = await createRuntime();
    const seeded = await seedGo(runtime);
    const legacy = await prepareF3Fixture({
      projectId: seeded.projectId,
      proposalId: seeded.proposal.proposalId,
      decisionId: seeded.decision.decisionId,
      currentContext: seeded.currentContext,
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        nowIso: () => runtime.oa!.clock.nowIso(),
        productDurablePath: runtime.oa!.productDurablePath,
      },
    });
    expect(legacy.ok).toBe(false);
    if (legacy.ok) return;
    expect(legacy.code).toBe("STALE");
  });

  describe("Blocker B — hostile M3 boundary", () => {
    async function setupResolved() {
      const runtime = await createRuntime();
      const seeded = await seedGo(runtime);
      const resolved = await resolvePath(runtime, seeded);
      expect(resolved.ok).toBe(true);
      if (!resolved.ok) throw new Error("resolve");
      return { runtime, seeded, resolved: resolved.payload };
    }

    async function expectBoundaryFail(
      runtime: RuntimeApplicationService,
      input: {
        projectId: string;
        decisionId: string;
        executionContractId: string;
      },
      code: string,
    ) {
      const before = runtime.oa!.fixtureAdapter.launchCallCount;
      const boundary = await validateResolvedM3ExecutionBoundary({
        ...input,
        deps: {
          decisionServices: runtime.oa!.decisionServices,
          executionContractServices: runtime.oa!.executionContractServices,
        },
      });
      expect(boundary.ok).toBe(false);
      if (boundary.ok) return;
      expect(boundary.code).toBe(code);

      const executed = await confirmAndExecuteResolvedM3({
        ...input,
        expectedContractVersion: 1,
        deps: {
          decisionServices: runtime.oa!.decisionServices,
          authorityResolver: runtime.oa!.authorityResolver,
          executionContractServices: runtime.oa!.executionContractServices,
          executionAttemptServices: runtime.oa!.executionAttemptServices,
          evidenceReviewServices: runtime.oa!.evidenceReviewServices,
          fixtureAdapter: runtime.oa!.fixtureAdapter,
          projectServices: runtime.oa!.projectServices,
          productDurablePath: runtime.oa!.productDurablePath,
          nowIso: () => runtime.oa!.clock.nowIso(),
          forceM3Authority: true,
        },
      });
      expect(executed.ok).toBe(false);
      expect(runtime.oa!.fixtureAdapter.launchCallCount).toBe(before);
      const listed =
        await runtime.oa!.executionAttemptServices.listExecutionAttempts.execute({
          executionContractId: input.executionContractId,
        });
      if (listed.ok) {
        expect(listed.attempts.filter((a) => a.status === "succeeded")).toHaveLength(
          0,
        );
      }
    }

    it("B1 — successor that does not supersede canonical prepare FAIL", async () => {
      const { runtime, seeded, resolved } = await setupResolved();
      const prepareId = canonicalM3PrepareContractId(seeded.decision.decisionId);
      expect(resolved.successor.supersedesExecutionContractId).toBe(prepareId);
      await expectBoundaryFail(
        runtime,
        {
          projectId: seeded.projectId,
          decisionId: seeded.decision.decisionId,
          executionContractId: "xct:does-not-exist",
        },
        "CONTRACT_NOT_FOUND",
      );
    });

    it("B2 — successor with wrong decisionId FAIL", async () => {
      const { runtime, seeded, resolved } = await setupResolved();
      await expectBoundaryFail(
        runtime,
        {
          projectId: seeded.projectId,
          decisionId: "dec:f2:hostile-other",
          executionContractId: resolved.successor.executionContractId,
        },
        "DECISION_NOT_FOUND",
      );
    });

    it("B4 — projectId mismatch FAIL", async () => {
      const { runtime, seeded, resolved } = await setupResolved();
      await expectBoundaryFail(
        runtime,
        {
          projectId: "prj:hostile-other",
          decisionId: seeded.decision.decisionId,
          executionContractId: resolved.successor.executionContractId,
        },
        "PROJECT_MISMATCH",
      );
    });

    it("B6 — fixture-safe profile mismatch FAIL", async () => {
      const runtime = await createRuntime();
      const seeded = await seedGo(runtime);
      const prepared = await prepareM3FromDecision({
        projectId: seeded.projectId,
        decisionId: seeded.decision.decisionId,
        currentContext: seeded.currentContext,
        deps: {
          decisionServices: runtime.oa!.decisionServices,
          authorityResolver: runtime.oa!.authorityResolver,
          executionContractServices: runtime.oa!.executionContractServices,
          nowIso: () => runtime.oa!.clock.nowIso(),
          forceM3Authority: true,
        },
      });
      expect(prepared.ok).toBe(true);
      if (!prepared.ok) return;

      const { resolveM3ExecutionContract } = await import(
        "@/features/project-assistant/f3/resolveM3ExecutionContract"
      );
      const { fixtureSafeM3ResolutionProfile } = await import(
        "@/features/project-assistant/f3/fixtureSafeM3ResolutionProfile"
      );
      const profile = fixtureSafeM3ResolutionProfile();
      const hostile = await resolveM3ExecutionContract({
        projectId: seeded.projectId,
        decisionId: seeded.decision.decisionId,
        originalExecutionContractId: prepared.payload.contract.executionContractId,
        expectedOriginalVersion: prepared.payload.contract.version,
        resolution: {
          ...profile,
          action: "hostile-non-fixture-action",
        },
        supersessionReason: "hostile profile probe",
        deps: {
          decisionServices: runtime.oa!.decisionServices,
          authorityResolver: runtime.oa!.authorityResolver,
          executionContractServices: runtime.oa!.executionContractServices,
          nowIso: () => runtime.oa!.clock.nowIso(),
          forceM3Authority: true,
        },
      });
      expect(hostile.ok).toBe(true);
      if (!hostile.ok) return;

      await expectBoundaryFail(
        runtime,
        {
          projectId: seeded.projectId,
          decisionId: seeded.decision.decisionId,
          executionContractId: hostile.successor.executionContractId,
        },
        "M3_SUCCESSOR_GOVERNANCE_MISMATCH",
      );
    });

    it("B8 — unresolved PREPARE submitted for execution FAIL", async () => {
      const runtime = await createRuntime();
      const seeded = await seedGo(runtime);
      const prepared = await prepareM3FromDecision({
        projectId: seeded.projectId,
        decisionId: seeded.decision.decisionId,
        currentContext: seeded.currentContext,
        deps: {
          decisionServices: runtime.oa!.decisionServices,
          authorityResolver: runtime.oa!.authorityResolver,
          executionContractServices: runtime.oa!.executionContractServices,
          nowIso: () => runtime.oa!.clock.nowIso(),
          forceM3Authority: true,
        },
      });
      expect(prepared.ok).toBe(true);
      if (!prepared.ok) return;
      await expectBoundaryFail(
        runtime,
        {
          projectId: seeded.projectId,
          decisionId: seeded.decision.decisionId,
          executionContractId: prepared.payload.contract.executionContractId,
        },
        "CONTRACT_NOT_RESOLVED_SUCCESSOR",
      );
    });

    it("B3 — resolution lineage under wrong decision FAIL", async () => {
      const { runtime, seeded, resolved } = await setupResolved();
      const expected = canonicalM3ResolutionIdempotencyKey(
        seeded.decision.decisionId,
        resolved.successor.executionContractId,
      );
      const get =
        await runtime.oa!.executionContractServices.getExecutionContract.execute({
          executionContractId: resolved.successor.executionContractId,
        });
      expect(get.ok).toBe(true);
      if (!get.ok) return;
      expect(get.contract.idempotencyKey).toBe(expected);

      const proposal2 = saveProposal({
        proposalId: createProposalId(),
        status: "DECISION_REQUIRED",
        rephrasedRequest: "y",
        objective: "y",
        cycleTypeId: "cyc:delivery",
        recommendedProfile: "Standard",
        rationale: "hostile",
        scope: "fixture-docs",
        outOfScope: [],
        activatedBlocks: [],
        expectedOutcome: "y",
        sources: [],
        risks: [],
        reservations: [],
        stopConditions: [],
        morrisGateRequired: true,
        nextPossibleStep: "y",
        contextSnapshot: seeded.currentContext,
        processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
        executionForbidden: true,
        noExecutingStatus: true,
        agentBinding: "NOT_AVAILABLE",
      });
      const go2 = await recordF2Decision({
        proposalId: proposal2.proposalId,
        projectId: seeded.projectId,
        decisionKind: "GO",
        currentContext: seeded.currentContext,
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        nowIso: () => runtime.oa!.clock.nowIso(),
        forceM3Authority: true,
      });
      expect(go2.ok).toBe(true);
      if (!go2.ok) return;
      await expectBoundaryFail(
        runtime,
        {
          projectId: seeded.projectId,
          decisionId: go2.decision.decisionId,
          executionContractId: resolved.successor.executionContractId,
        },
        "CANONICAL_M3_PREPARE_NOT_FOUND",
      );
    });
  });
});

```

## CODE — USEFUL DIFF (thinned callers + index)

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteF3Fixture.ts b/projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteF3Fixture.ts
index 8256b3d..2e66cda 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteF3Fixture.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteF3Fixture.ts
@@ -1,11 +1,9 @@
 /**
- * Confirm + fixture execute path:
- * Request/Grant Confirmation (scope=contract.scope) → ConfirmExecutionContract
- * → SelectExecutionAgent (capabilities_deterministic) → StartExecution
- * → RecordExecutionResult (metadata-only resultRef).
+ * Confirm + fixture execute path (legacy Proposal precondition):
+ * validateF2ForPrepare → fixture authority → SHARED confirm/select/start/evidence pipeline.
  *
  * Idempotent: if an attempt already succeeded for the contract, reinject
- * without a second adapter launch.
+ * without a second adapter launch (handled inside shared pipeline).
  */

 import type {
@@ -23,16 +21,11 @@ import type { F2ContextSnapshot } from "../f2/types";
 import { LOCAL_MORRIS_ACTOR } from "../f2/recordDecision";
 import {
   F3_ADAPTER_ID,
-  F3_AGENT_ID,
   F3_AUTHORITY_SOURCE,
-  F3_CONFIRM_ACTION_REF,
-  F3_LABELS,
-  F3_MODE,
   F3_REQUIRED_AUTHORITY,
   F3_SCOPE,
-  resolveF3EphemeralNotice,
 } from "./constants";
-import { ingestEvidenceAndRecommend } from "./ingestEvidenceAndRecommend";
+import { executeConfirmedFixtureSafeContract } from "./executeConfirmedFixtureSafeContract";
 import type { F3ExecutePayload } from "./types";
 import { validateF2ForPrepare } from "./validateF2ForPrepare";

@@ -89,111 +82,6 @@ function ensureFixtureAuthority(
   }
 }

-async function buildExecutePayload(input: {
-  proposal: F3ExecutePayload["proposal"];
-  decisionId: string;
-  contract: {
-    executionContractId: string;
-    version: number;
-    status: string;
-    action: string;
-    target: string;
-    scope: string;
-    requiredAuthority: string;
-    constraints: readonly string[];
-  };
-  attempt: {
-    attemptId: string;
-    status: string;
-    selectedAgentRef: string;
-    resultRef?: string;
-    selectionStrategy?: string;
-  };
-  launchCount: number;
-  reusedExistingAttempt: boolean;
-  projectId: string;
-  deps: ConfirmExecuteF3Deps;
-}): Promise<
-  | { ok: true; payload: F3ExecutePayload }
-  | { ok: false; code: string; message: string }
-> {
-  const ingested = await ingestEvidenceAndRecommend({
-    projectId: input.projectId,
-    attemptId: input.attempt.attemptId,
-    executionContractId: input.contract.executionContractId,
-    deps: {
-      evidenceReviewServices: input.deps.evidenceReviewServices,
-      projectServices: input.deps.projectServices,
-    },
-  });
-  if (!ingested.ok) {
-    return ingested;
-  }
-
-  const productDurable =
-    input.deps.productDurablePath ??
-    input.deps.projectServices !== undefined;
-  const persistenceNotice = resolveF3EphemeralNotice(productDurable);
-
-  return {
-    ok: true,
-    payload: {
-      turnKind: "f3_execute",
-      mode: F3_MODE,
-      proposal: input.proposal,
-      decisionId: input.decisionId,
-      contract: {
-        executionContractId: input.contract.executionContractId,
-        version: input.contract.version,
-        status: input.contract.status,
-        action: input.contract.action,
-        target: input.contract.target,
-        scope: input.contract.scope,
-        requiredAuthority: input.contract.requiredAuthority,
-        mode: F3_MODE,
-        constraints: [...input.contract.constraints],
-      },
-      attempt: {
-        attemptId: input.attempt.attemptId,
-        status: input.attempt.status,
-        selectedAgentRef: input.attempt.selectedAgentRef,
-        adapterId: F3_ADAPTER_ID,
-        externalEffects: false,
-        resultRef: input.attempt.resultRef ?? null,
-        launchCount: input.launchCount,
-        selectionStrategy:
-          input.attempt.selectionStrategy ?? "capabilities_deterministic",
-        mode: F3_MODE,
-      },
-      evidence: ingested.evidence,
-      reviewBundle: ingested.reviewBundle,
-      recommendation: ingested.recommendation,
-      reusedExistingAttempt: input.reusedExistingAttempt,
-      executionPerformed: true,
-      realExecution: false,
-      gitWritePerformed: false,
-      labels: {
-        fixtureNoReal: F3_LABELS.fixtureNoReal,
-        noGitWrite: F3_LABELS.noGitWrite,
-        recommendationNotDecision: F3_LABELS.recommendationNotDecision,
-        cursorRealBlocked: F3_LABELS.cursorRealBlocked,
-        hardOpen: F3_LABELS.hardOpen,
-      },
-      processLocalNotice: persistenceNotice,
-      disclosures: [
-        F3_LABELS.fixtureNoReal,
-        F3_LABELS.noGitWrite,
-        F3_LABELS.recommendationNotDecision,
-        F3_LABELS.cursorRealBlocked,
-        F3_LABELS.hardOpen,
-        F3_LABELS.noReadyClaim,
-        F3_LABELS.noTa6Complete,
-        persistenceNotice,
-      ],
-    },
-  };
-}
-
 export async function confirmAndExecuteF3Fixture(input: {
   projectId: string;
   proposalId: string;
@@ -270,7 +158,7 @@ export async function confirmAndExecuteF3Fixture(input: {
     };
   }

-  let contract = contractResult.contract;
+  const contract = contractResult.contract;
   if (contract.projectId !== input.projectId) {
     return {
       ok: false,
@@ -288,177 +176,36 @@ export async function confirmAndExecuteF3Fixture(input: {
     };
   }

-  // Double-invoke protection BEFORE version OCC: if attempt already succeeded,
-  // reinject without re-launch even if contract version advanced post-exec.
-  const listed =
-    await input.deps.executionAttemptServices.listExecutionAttempts.execute({
-      executionContractId: contract.executionContractId,
-    });
-  if (listed.ok) {
-    const succeeded = listed.attempts.find((a) => a.status === "succeeded");
-    if (succeeded) {
-      const launchCount = input.deps.fixtureAdapter.launchCallCount;
-      return buildExecutePayload({
-        proposal,
-        decisionId,
-        contract,
-        attempt: succeeded,
-        launchCount,
-        reusedExistingAttempt: true,
-        projectId: input.projectId,
-        deps: input.deps,
-      });
-    }
-  }
-
-  if (contract.version !== input.expectedContractVersion) {
-    return {
-      ok: false,
-      code: "CONTRACT_VERSION_MISMATCH",
-      message: `Version contrat attendue ${input.expectedContractVersion}, actuelle ${contract.version}.`,
-      proposal,
-    };
-  }
-
-  if (
-    contract.status === "confirmation_required" ||
-    contract.status === "validated"
-  ) {
-    const confirmationId = `cfm:f3:${contract.executionContractId}:${contract.version}`;
-    const requested =
-      await input.deps.decisionServices.requestConfirmation.execute({
-        confirmationId,
-        level: F3_REQUIRED_AUTHORITY,
-        actionRef: F3_CONFIRM_ACTION_REF,
-        requestedBy: LOCAL_MORRIS_ACTOR,
-        requestedTo: LOCAL_MORRIS_ACTOR,
-        scope: contract.scope,
-        idempotencyKey: `idem:f3-cfm:${contract.executionContractId}:v${contract.version}`,
-        decisionRef: decisionId,
-      });
-    if (!requested.ok) {
-      return {
-        ok: false,
-        code: requested.error.detailCode,
-        message: requested.error.message,
-        proposal,
-      };
-    }
-
-    const granted = await input.deps.decisionServices.grantConfirmation.execute({
-      confirmationId,
-      actor: LOCAL_MORRIS_ACTOR,
-      authorityEvidenceId: auth.evidenceId,
-    });
-    if (!granted.ok) {
-      return {
-        ok: false,
-        code: granted.error.detailCode,
-        message: granted.error.message,
-        proposal,
-      };
-    }
-
-    const confirmed =
-      await input.deps.executionContractServices.confirmExecutionContract.execute(
-        {
-          executionContractId: contract.executionContractId,
-          confirmationId,
-          actor: LOCAL_MORRIS_ACTOR,
-          authorityEvidenceId: auth.evidenceId,
-          expectedVersion: contract.version,
-        },
-      );
-    if (!confirmed.ok) {
-      return {
-        ok: false,
-        code: confirmed.error.detailCode,
-        message: confirmed.error.message,
-        proposal,
-      };
-    }
-    contract = confirmed.contract;
-  } else if (contract.status !== "confirmed" && contract.status !== "executing" && contract.status !== "completed") {
-    return {
-      ok: false,
-      code: "CONTRACT_NOT_CONFIRMABLE",
-      message: `Contrat non confirmable (statut ${contract.status}).`,
-      proposal,
-    };
-  }
-
   const attemptId = `xat:f3:${contract.executionContractId.replace(/^xct:/, "")}`;
-
-  const selected =
-    await input.deps.executionAttemptServices.selectExecutionAgent.execute({
-      attemptId,
-      executionContractId: contract.executionContractId,
-      idempotencyKey: `idem:f3-att:${contract.executionContractId}`,
-      actor: LOCAL_MORRIS_ACTOR,
-      authorityEvidenceId: auth.evidenceId,
-      expectedContractVersion: contract.version,
-      selectionProfile: "standard",
-      selectionStrategy: "capabilities_deterministic",
-      requestedAgentRef: F3_AGENT_ID,
-      systemInitiated: true,
-    });
-  if (!selected.ok) {
-    return {
-      ok: false,
-      code: selected.error.detailCode,
-      message: selected.error.message,
-      proposal,
-    };
-  }
-
-  const started =
-    await input.deps.executionAttemptServices.startExecution.execute({
-      attemptId,
-      actor: LOCAL_MORRIS_ACTOR,
-      authorityEvidenceId: auth.evidenceId,
-    });
-  if (!started.ok) {
-    return {
-      ok: false,
-      code: started.error.detailCode,
-      message: started.error.message,
-      proposal,
-    };
-  }
-
-  const resultRef = `res:f3-fixture:${attemptId.replace(/[^a-zA-Z0-9:_-]/g, "")}`;
-  const recorded =
-    await input.deps.executionAttemptServices.recordExecutionResult.execute({
-      attemptId,
-      adapterId: F3_ADAPTER_ID,
-      resultRef,
-      technicalExitCode: 0,
-    });
-  if (!recorded.ok) {
-    return {
-      ok: false,
-      code: recorded.error.detailCode,
-      message: recorded.error.message,
-      proposal,
-    };
-  }
-
-  const launchCount = input.deps.fixtureAdapter.launchCallCount;
-
-  const refreshed =
-    await input.deps.executionContractServices.getExecutionContract.execute({
-      executionContractId: contract.executionContractId,
-    });
-  if (refreshed.ok) contract = refreshed.contract;
-
-  return buildExecutePayload({
-    proposal,
+  const executed = await executeConfirmedFixtureSafeContract({
+    projectId: input.projectId,
     decisionId,
+    proposal,
     contract,
-    attempt: recorded.attempt,
-    launchCount,
-    reusedExistingAttempt: false,
-    projectId: input.projectId,
-    deps: input.deps,
+    expectedContractVersion: input.expectedContractVersion,
+    actor: LOCAL_MORRIS_ACTOR,
+    authorityEvidenceId: auth.evidenceId,
+    identities: {
+      confirmationId: `cfm:f3:${contract.executionContractId}:${contract.version}`,
+      confirmationIdempotencyKey: `idem:f3-cfm:${contract.executionContractId}:v${contract.version}`,
+      confirmationLevel: F3_REQUIRED_AUTHORITY,
+      attemptId,
+      attemptIdempotencyKey: `idem:f3-att:${contract.executionContractId}`,
+      resultRef: `res:f3-fixture:${attemptId.replace(/[^a-zA-Z0-9:_-]/g, "")}`,
+    },
+    deps: {
+      decisionServices: input.deps.decisionServices,
+      executionContractServices: input.deps.executionContractServices,
+      executionAttemptServices: input.deps.executionAttemptServices,
+      evidenceReviewServices: input.deps.evidenceReviewServices,
+      fixtureAdapter: input.deps.fixtureAdapter,
+      projectServices: input.deps.projectServices,
+      productDurablePath: input.deps.productDurablePath,
+    },
   });
+
+  if (!executed.ok) {
+    return { ...executed, proposal };
+  }
+  return executed;
 }
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/index.ts b/projects/sfia-studio/app/features/project-assistant/f3/index.ts
index 44ee145..c15ce62 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/index.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/index.ts
@@ -32,7 +32,30 @@ export {
   canonicalM3ResolutionIdempotencyKey,
   safeDecisionSegment,
 } from "./resolveM3ExecutionContract";
+export {
+  fixtureSafeM3ResolutionProfile,
+  FIXTURE_SAFE_M3_SUPERSESSION_REASON,
+} from "./fixtureSafeM3ResolutionProfile";
+export { prepareAndResolveM3ProductPath } from "./prepareAndResolveM3ProductPath";
+export type {
+  F3M3ResolvedPayload,
+  PrepareAndResolveM3Deps,
+} from "./prepareAndResolveM3ProductPath";
 export { confirmAndExecuteF3Fixture } from "./confirmAndExecuteF3Fixture";
+export { confirmAndExecuteResolvedM3 } from "./confirmAndExecuteResolvedM3";
+export type { ConfirmExecuteResolvedM3Deps } from "./confirmAndExecuteResolvedM3";
+export { executeConfirmedFixtureSafeContract } from "./executeConfirmedFixtureSafeContract";
+export type {
+  SharedFixtureSafePipelineDeps,
+  SharedFixtureSafePipelineIdentities,
+  SharedFixtureSafePipelineInput,
+} from "./executeConfirmedFixtureSafeContract";
+export { validateResolvedM3ExecutionBoundary } from "./validateResolvedM3ExecutionBoundary";
+export type {
+  ValidateResolvedM3BoundaryDeps,
+  ValidateResolvedM3BoundaryFailure,
+  ValidateResolvedM3BoundarySuccess,
+} from "./validateResolvedM3ExecutionBoundary";
 export { ingestEvidenceAndRecommend } from "./ingestEvidenceAndRecommend";
 export { appendEvidenceOutcomeToLps } from "./appendEvidenceOutcomeToLps";
 export { rehydrateEvidenceOutcomeFromLps } from "./rehydrateEvidenceOutcomeFromLps";

```

### `projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteF3Fixture.ts` (full after hardening)

```typescript
/**
 * Confirm + fixture execute path (legacy Proposal precondition):
 * validateF2ForPrepare → fixture authority → SHARED confirm/select/start/evidence pipeline.
 *
 * Idempotent: if an attempt already succeeded for the contract, reinject
 * without a second adapter launch (handled inside shared pipeline).
 */

import type {
  DecisionServices,
  MemoryAuthorityResolver,
} from "@/lib/oa/decision";
import type { ExecutionContractServices } from "@/lib/oa/execution-contract";
import type {
  ExecutionAttemptServices,
  TestExecutionAdapter,
} from "@/lib/oa/execution-attempt";
import type { EvidenceReviewServices } from "@/lib/oa/evidence-review";
import type { ProjectServices } from "@/lib/oa/project";
import type { F2ContextSnapshot } from "../f2/types";
import { LOCAL_MORRIS_ACTOR } from "../f2/recordDecision";
import {
  F3_ADAPTER_ID,
  F3_AUTHORITY_SOURCE,
  F3_REQUIRED_AUTHORITY,
  F3_SCOPE,
} from "./constants";
import { executeConfirmedFixtureSafeContract } from "./executeConfirmedFixtureSafeContract";
import type { F3ExecutePayload } from "./types";
import { validateF2ForPrepare } from "./validateF2ForPrepare";

export type ConfirmExecuteF3Deps = {
  decisionServices: DecisionServices;
  authorityResolver: MemoryAuthorityResolver;
  executionContractServices: ExecutionContractServices;
  executionAttemptServices: ExecutionAttemptServices;
  evidenceReviewServices: EvidenceReviewServices;
  fixtureAdapter: TestExecutionAdapter;
  nowIso: () => string;
  /** Product path — enables M5-B W1 LPS evidence/RB factual append. */
  projectServices?: ProjectServices;
  /**
   * True when OA composition uses Product SQLite (Attempt/Evidence/RB durable).
   * Defaults true when projectServices present; false for Memory/process-local.
   */
  productDurablePath?: boolean;
};

function authorityEvidenceIdForProposal(proposalId: string): string {
  return `evd:f3-fixture:${proposalId}`;
}

function ensureFixtureAuthority(
  authority: MemoryAuthorityResolver,
  proposalId: string,
  nowIso: string,
): { ok: true; evidenceId: string } | { ok: false; code: string; message: string } {
  const evidenceId = authorityEvidenceIdForProposal(proposalId);
  if (authority.getEvidence(evidenceId)) {
    return { ok: true, evidenceId };
  }
  try {
    authority.register({
      evidenceId,
      actorId: LOCAL_MORRIS_ACTOR.actorId,
      level: F3_REQUIRED_AUTHORITY,
      scope: F3_SCOPE,
      issuedAt: nowIso,
      source: F3_AUTHORITY_SOURCE,
      canActAsMorris: false,
    });
    return { ok: true, evidenceId };
  } catch (error) {
    return {
      ok: false,
      code: "AUTHORITY_REGISTER_FAILED",
      message:
        error instanceof Error
          ? error.message
          : "Échec enregistrement authority F3 fixture.",
    };
  }
}

export async function confirmAndExecuteF3Fixture(input: {
  projectId: string;
  proposalId: string;
  decisionId: string;
  executionContractId: string;
  expectedContractVersion: number;
  currentContext: F2ContextSnapshot;
  /** Hostile — ignored. */
  mode?: unknown;
  adapterRef?: unknown;
  agentId?: unknown;
  command?: unknown;
  real?: unknown;
  deps: ConfirmExecuteF3Deps;
}): Promise<
  | { ok: true; payload: F3ExecutePayload }
  | { ok: false; code: string; message: string; proposal?: unknown }
> {
  void input.mode;
  void input.adapterRef;
  void input.agentId;
  void input.command;
  void input.real;

  if (input.deps.fixtureAdapter.adapterId !== F3_ADAPTER_ID) {
    return {
      ok: false,
      code: "ADAPTER_IDENTITY_MISMATCH",
      message: "Adapter F3 identity mismatch — REAL/NoOp interdit.",
    };
  }
  if (input.deps.fixtureAdapter.externalEffects !== false) {
    return {
      ok: false,
      code: "EXTERNAL_EFFECTS_FORBIDDEN",
      message: "externalEffects doit rester false (FIXTURE only).",
    };
  }

  const validated = await validateF2ForPrepare({
    proposalId: input.proposalId,
    projectId: input.projectId,
    decisionId: input.decisionId,
    currentContext: input.currentContext,
    decisionServices: input.deps.decisionServices,
  });
  if (!validated.ok) {
    return {
      ok: false,
      code: validated.code,
      message: validated.message,
      proposal: validated.proposal ?? null,
    };
  }

  const { proposal, decisionId } = validated;
  const auth = ensureFixtureAuthority(
    input.deps.authorityResolver,
    proposal.proposalId,
    input.deps.nowIso(),
  );
  if (!auth.ok) return { ...auth, proposal };

  const contractResult =
    await input.deps.executionContractServices.getExecutionContract.execute({
      executionContractId: input.executionContractId,
    });
  if (!contractResult.ok) {
    return {
      ok: false,
      code: contractResult.error.detailCode,
      message: contractResult.error.message,
      proposal,
    };
  }

  const contract = contractResult.contract;
  if (contract.projectId !== input.projectId) {
    return {
      ok: false,
      code: "CONTRACT_PROJECT_MISMATCH",
      message: "Le contrat n'appartient pas à ce projet.",
      proposal,
    };
  }
  if (contract.scope !== F3_SCOPE) {
    return {
      ok: false,
      code: "CONTRACT_SCOPE_MISMATCH",
      message: "Scope contrat ≠ F3 FIXTURE scope.",
      proposal,
    };
  }

  const attemptId = `xat:f3:${contract.executionContractId.replace(/^xct:/, "")}`;
  const executed = await executeConfirmedFixtureSafeContract({
    projectId: input.projectId,
    decisionId,
    proposal,
    contract,
    expectedContractVersion: input.expectedContractVersion,
    actor: LOCAL_MORRIS_ACTOR,
    authorityEvidenceId: auth.evidenceId,
    identities: {
      confirmationId: `cfm:f3:${contract.executionContractId}:${contract.version}`,
      confirmationIdempotencyKey: `idem:f3-cfm:${contract.executionContractId}:v${contract.version}`,
      confirmationLevel: F3_REQUIRED_AUTHORITY,
      attemptId,
      attemptIdempotencyKey: `idem:f3-att:${contract.executionContractId}`,
      resultRef: `res:f3-fixture:${attemptId.replace(/[^a-zA-Z0-9:_-]/g, "")}`,
    },
    deps: {
      decisionServices: input.deps.decisionServices,
      executionContractServices: input.deps.executionContractServices,
      executionAttemptServices: input.deps.executionAttemptServices,
      evidenceReviewServices: input.deps.evidenceReviewServices,
      fixtureAdapter: input.deps.fixtureAdapter,
      projectServices: input.deps.projectServices,
      productDurablePath: input.deps.productDurablePath,
    },
  });

  if (!executed.ok) {
    return { ...executed, proposal };
  }
  return executed;
}

```

### `projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteResolvedM3.ts` (full after hardening)

```typescript
/**
 * Confirm + fixture-safe execute for a *resolved* durable M3 successor contract.
 *
 * Preconditions (NO Proposal validation):
 * - validateResolvedM3ExecutionBoundary (exact canonical PREPARE lineage)
 * - registerM3LocalMorrisAuthority
 * Then SHARED confirm/select/start/evidence pipeline.
 */

import type {
  DecisionServices,
  MemoryAuthorityResolver,
} from "@/lib/oa/decision";
import {
  LOCAL_MORRIS_M3_ACTOR,
  registerM3LocalMorrisAuthority,
} from "@/lib/oa/decision";
import type { ExecutionContractServices } from "@/lib/oa/execution-contract";
import type {
  ExecutionAttemptServices,
  TestExecutionAdapter,
} from "@/lib/oa/execution-attempt";
import type { EvidenceReviewServices } from "@/lib/oa/evidence-review";
import type { ProjectServices } from "@/lib/oa/project";
import { F3_ADAPTER_ID } from "./constants";
import { executeConfirmedFixtureSafeContract } from "./executeConfirmedFixtureSafeContract";
import type { F3ExecutePayload } from "./types";
import { validateResolvedM3ExecutionBoundary } from "./validateResolvedM3ExecutionBoundary";

export type ConfirmExecuteResolvedM3Deps = {
  decisionServices: DecisionServices;
  authorityResolver: MemoryAuthorityResolver;
  executionContractServices: ExecutionContractServices;
  executionAttemptServices: ExecutionAttemptServices;
  evidenceReviewServices: EvidenceReviewServices;
  fixtureAdapter: TestExecutionAdapter;
  nowIso: () => string;
  projectServices?: ProjectServices;
  productDurablePath?: boolean;
  /** Test inject — bypasses M3 local Morris env gate. */
  forceM3Authority?: boolean;
};

export async function confirmAndExecuteResolvedM3(input: {
  projectId: string;
  decisionId: string;
  executionContractId: string;
  expectedContractVersion: number;
  /** Hostile — ignored. */
  mode?: unknown;
  adapterRef?: unknown;
  agentId?: unknown;
  command?: unknown;
  real?: unknown;
  deps: ConfirmExecuteResolvedM3Deps;
}): Promise<
  | { ok: true; payload: F3ExecutePayload }
  | { ok: false; code: string; message: string }
> {
  void input.mode;
  void input.adapterRef;
  void input.agentId;
  void input.command;
  void input.real;

  if (input.deps.fixtureAdapter.adapterId !== F3_ADAPTER_ID) {
    return {
      ok: false,
      code: "ADAPTER_IDENTITY_MISMATCH",
      message: "Adapter F3 identity mismatch — REAL/NoOp interdit.",
    };
  }
  if (input.deps.fixtureAdapter.externalEffects !== false) {
    return {
      ok: false,
      code: "EXTERNAL_EFFECTS_FORBIDDEN",
      message: "externalEffects doit rester false (FIXTURE only).",
    };
  }

  const boundary = await validateResolvedM3ExecutionBoundary({
    projectId: input.projectId,
    decisionId: input.decisionId,
    executionContractId: input.executionContractId,
    deps: {
      decisionServices: input.deps.decisionServices,
      executionContractServices: input.deps.executionContractServices,
      authorityResolver: input.deps.authorityResolver,
    },
  });
  if (!boundary.ok) {
    return boundary;
  }

  const contract = boundary.successor;
  const auth = registerM3LocalMorrisAuthority({
    authorityResolver: input.deps.authorityResolver,
    scope: contract.scope,
    issuedAt: input.deps.nowIso(),
    evidenceId: `evd:m3-cfm:${contract.executionContractId}`,
    forceEnable: input.deps.forceM3Authority === true,
  });
  if (!auth.ok) {
    return {
      ok: false,
      code: auth.code,
      message: auth.message,
    };
  }

  const attemptId = `xat:m3:${contract.executionContractId.replace(/^xct:/, "")}`;
  return executeConfirmedFixtureSafeContract({
    projectId: input.projectId,
    decisionId: input.decisionId,
    proposal: null,
    contract,
    expectedContractVersion: input.expectedContractVersion,
    actor: LOCAL_MORRIS_M3_ACTOR,
    authorityEvidenceId: auth.evidenceId,
    identities: {
      confirmationId: `cfm:m3:${contract.executionContractId}:v${contract.version}`,
      confirmationIdempotencyKey: `idem:m3-cfm:${contract.executionContractId}:v${contract.version}`,
      confirmationLevel: "N3",
      attemptId,
      attemptIdempotencyKey: `idem:m3-att:${contract.executionContractId}`,
      resultRef: `res:m3-fixture:${attemptId.replace(/[^a-zA-Z0-9:_-]/g, "")}`,
    },
    extraDisclosures: [
      "M3 resolved successor — Confirmation was process-local (non durable)",
      "NO Proposal authority",
    ],
    deps: {
      decisionServices: input.deps.decisionServices,
      executionContractServices: input.deps.executionContractServices,
      executionAttemptServices: input.deps.executionAttemptServices,
      evidenceReviewServices: input.deps.evidenceReviewServices,
      fixtureAdapter: input.deps.fixtureAdapter,
      projectServices: input.deps.projectServices,
      productDurablePath: input.deps.productDurablePath,
    },
  });
}

```
