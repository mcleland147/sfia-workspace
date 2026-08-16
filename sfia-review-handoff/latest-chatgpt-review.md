# SFIA STUDIO — PRE-M6 UI DELIVERY OPTION A — CYCLE 8 AMEND QA-PRE-M6-01

**Level:** FULL
**Timestamp:** 2026-08-16 20:03:16 CEST
**Branch:** delivery/sfia-studio-pre-m6-ui-option-a
**HEAD / origin/main:** 0d33478566627a9bf507d5a06323962d349308ee
**Incoming handoff:** 118186d38393fd2870f5f375a83068bc9d129ae8
**REAL:** 0
**Project staging/commits/pushes/PR:** 0

---

## GO Morris (exact title consumed)

GO MORRIS — PRE-M6 UI DELIVERY OPTION A — CYCLE 8 AMEND — QA-PRE-M6-01 —
WIRE THE POST-GO PRODUCT PATH TO THE EXISTING DURABLE M3 HUMANDECISION + DECISIONBASIS FLOW —
REUSE projectAssistantPrepareM3Action + EXISTING G-UX-15 resolveM3ExecutionContract BRIDGE —
DO NOT WEAKEN PROPOSAL STALE FAIL-CLOSED SEMANTICS —
DO NOT MUTATE/REBASE PROPOSAL CONTEXT TO BYPASS STALE —
PRESERVE PROCESS-LOCAL PROPOSAL AS NEGATIVE AUTHORITY PATH —
NO NEW PERSISTENCE — NO NEW ENGINE — NO MIGRATION — NO REAL —
NO COMMIT — NO PUSH — NO PR — NO M6 —
RETURN FOR CHATGPT REVIEW BEFORE RE-RUNNING CYCLE 9

---

## Cycle / Profile / Typology / CKC

- Cycle: **8 — Delivery / implémentation**
- Sous-type: **CONTINUATION / AMEND**
- Typologie: **INC**
- Profil SFIA: **Critical**
- CKC détaillé: ABSENT → fallback `02-fifteen-cycles-synthetic-map.md` + méthode v2.6 (guidance only, no execution authority)

---

## Git Truth

| Check | Value |
|-------|-------|
| branch | delivery/sfia-studio-pre-m6-ui-option-a |
| HEAD | 0d33478566627a9bf507d5a06323962d349308ee |
| origin/main | 0d33478566627a9bf507d5a06323962d349308ee |
| origin/sfia/review-handoff (entry) | 118186d38393fd2870f5f375a83068bc9d129ae8 |
| staged | 0 |
| REAL | unset |
| Candidate at entry | ~34 tracked modified + ~19 created |

---

## QA-PRE-M6-01 evidence entrant (Cycle 9)

- After HumanDecision GO, LPS advances N→N+1
- Canonical CTA called `projectAssistantPrepareF3FixtureAction` → `validateF2ForPrepare` → **STALE**
- Fail-closed STALE is correct for process-local Proposal
- Bug: post-GO product path still used Proposal as execution authority

---

## Convergence Pre-check

- Build Doctrine: VALIDATED — ACTIVE ON MAIN
- Milestone: PRE-M6 UI DELIVERY OPTION A — CYCLE 8 AMEND QA-PRE-M6-01
- Option A scope: ADOPTED
- M6: NOT AUTHORIZED
- runtime v3: NON ADOPTED
- REAL: 0
- G-UX-11: FAIL / OPEN (unchanged — full Cycle 9 not rerun)

---

## Build Doctrine Challenge

No new engine, persistence, migration, or parallel Attempt lifecycle.
Wiring only: durable HumanDecision/DecisionBasis → prepareM3 → resolveM3 (G-UX-15) → explicit Confirmation → existing Select/Start/Evidence.

---

## POST-GO WIRING MAP (before code)

| Step | Function | Durable? | Authority | Persistence | Reuse? | Change? |
|------|----------|----------|-----------|-------------|--------|---------|
| HumanDecision | recordF2Decision / DecideAction | Durable | M3 Morris local | Product | Yes | No |
| DecisionBasis | buildDecisionBasis on GO | Durable | Proposal at decide-time only | On HD | Yes | No |
| M3 prepare | prepareM3FromDecision / PrepareM3Action | Durable unresolved EC | Decision+Basis | Product | Yes | Wire as canonical |
| Resolve | resolveM3ExecutionContract | Durable successor | App fixture-safe profile ZERO REAL | Product | Yes KEEP | No bridge edit |
| Confirmation | confirmAndExecuteResolvedM3 | Process-local Confirmation | MORRIS N3 | Not persisted as authority | Harvest services | New thin composition |
| Select/Start/Attempt | existing Attempt services | Durable | Same | Product | Yes | Reuse |
| Evidence/RB/Reco | ingestEvidenceAndRecommend | Durable | Same | Product | Yes | Reuse |
| LPS readback | notifyDurableFactsChanged + rehydrate | Durable read | — | — | Yes | Callbacks after prepare/resolve/execute |

**Why CTA used fixture:** Primary button hard-wired to prepareF3Fixture + Proposal validation; M3 was secondary and stopped at unresolved EC.

**G-UX-15 without Proposal:** prepareM3 → resolve(fixtureResolution) → confirmSelectStart (request/grant/confirm/select/start/record) — no validateF2ForPrepare.

**Reusable from confirmAndExecuteF3Fixture without Proposal validation:** adapter checks, OCC, confirm→select→start→record→ingestEvidence — NOT validateF2ForPrepare / Proposal authority.

---

## Asset classification

- HumanDecision / DecisionBasis / prepareM3 / resolveM3 / Confirmation reserve / Select/Start/Evidence: **KEEP**
- Proposal process-local + STALE fail-closed: **KEEP** (negative path)
- Legacy prepareF3Fixture: **FREEZE** for canonical product; diagnostic only
- ProjectAssistantPanel: **ADAPT** post-GO orchestration

---

## Root cause

Canonical post-GO path incorrectly revalidated process-local Proposal via prepareF3Fixture after LPS bump from GO.

---

## Implementation summary

1. Primary CTA `f3-prepare-button` → `projectAssistantPrepareResolvedM3Action` = prepareM3FromDecision + resolveM3ExecutionContract(fixtureSafeM3ResolutionProfile)
2. Present resolved successor; Confirmation → `projectAssistantConfirmAndExecuteResolvedM3Action` (no Proposal validation)
3. Legacy fixture demoted under diagnostics (`f3-legacy-fixture-prepare-button`) — STALE preserved
4. Resolution profile: exact G-UX-15 harvest (F3_ACTION/TARGET/CAPABILITY/SCOPE + fixtureResolution constraints/stops) — ZERO REAL only
5. `__F2_GATED_STANDARD__` fake marker: Light gated path so Confirmation is browser-reachable; Critical STRUCTURING remains R-T-A3-1 fail-closed (G-UX-11 debt)

### Parallel engine check

Thin M3 confirm composition reuses the **same domain services** as fixture path; no second Attempt engine. Full extract of shared helper deferred to keep risk low; documented in code.

### Persistence / migration

0 new persistence, 0 migration, Proposal not promoted, Confirmation not durable authority.

---

## Files modified (this AMEND production)

- ProjectAssistantPanel.tsx
- actions.ts
- types.ts
- f3/index.ts
- f3/types.ts (proposal nullable on execute payload)
- fakeProvider.ts (__F2_GATED_STANDARD__ TEST/FAKE only)

## Files created

- f3/fixtureSafeM3ResolutionProfile.ts
- f3/prepareAndResolveM3ProductPath.ts
- f3/confirmAndExecuteResolvedM3.ts
- __tests__/project-assistant/qa-pre-m6-01.postGoDurableM3Path.test.ts
- e2e/studio-option-a.spec.ts (updated; was Cycle 9 untracked)

## Tests

- Unit: qa-pre-m6-01.postGoDurableM3Path.test.ts — T1–T10 PASS (5 tests)
- Engineering: typecheck PASS, lint PASS, vitest 1763 pass, build PASS, git diff --check clean on AMEND
- Playwright targeted: `SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY=1 npm run test:e2e -- e2e/studio-option-a.spec.ts` → **8/8 PASS**
- **FULL CYCLE 9 NOT RERUN**

---

## G-UX statuses

| Item | Status |
|------|--------|
| G-UX-08 | OPEN / DEFERRED |
| G-UX-09 + Confirmation | KEEP RESERVE (process-local) |
| G-UX-10 | preserved prior fix |
| G-UX-11 | FAIL / OPEN until Cycle 9 re-run |
| Visual / Figma | not re-decided |

---

## Safety Counters

| Counter | Value |
|---------|-------|
| Candidate files at entry | ~53 (34+19) |
| AMEND production files changed | 6 tracked (+ fakeProvider) |
| AMEND production files created | 3 (f3 helpers) |
| Tests changed | 1 (e2e) |
| Tests created | 1 (unit) |
| Proposal context mutation/rebase | 0 |
| Proposal stale weakening | 0 |
| New persistence | 0 |
| Migration | 0 |
| New execution engine | 0 |
| New Attempt engine | 0 |
| Confirmation persistence | 0 |
| Figma mutation | 0 |
| REAL | 0 |
| Full Cycle 9 rerun | 0 |
| Project staging/commits/pushes/PR/merge | 0 |
| Review Handoff | 1 bounded L3 |

---

## Verdict

PRE-M6 UI DELIVERY OPTION A — CYCLE 8 AMEND QA-PRE-M6-01 COMPLETE —
POST-GO CANONICAL PRODUCT PATH NOW USES DURABLE HUMANDECISION + DECISIONBASIS —
projectAssistantPrepareM3Action REUSED (via prepareAndResolve composition) —
EXISTING G-UX-15 resolveM3ExecutionContract BRIDGE REUSED —
EXISTING FIXTURE-SAFE RESOLUTION PROFILE HARVESTED FOR ZERO REAL ONLY —
PROPOSAL STALE FAIL-CLOSED PRESERVED —
NO PROPOSAL CONTEXT REBASE —
RESOLVED SUCCESSOR REQUIRES EXPLICIT CONFIRMATION —
EXISTING SELECT / START / EVIDENCE PIPELINE REUSED —
DUPLICATE ATTEMPT PROTECTION PRESERVED —
NO NEW PERSISTENCE — NO MIGRATION — NO PARALLEL ENGINE —
G-UX-08 OPEN / DEFERRED —
G-UX-09 + CONFIRMATION KEEP RESERVE —
G-UX-11 STILL FAIL / OPEN UNTIL CYCLE 9 RE-RUN —
FIGMA/RUNTIME VERDICT NOT RE-DECIDED —
NO PROJECT COMMIT — NO PROJECT PUSH — NO PR — NO M6 —
RUNTIME V3 NON ADOPTED — ZERO REAL —
FULL CYCLE 9 NOT RERUN —
READY FOR CHATGPT RE-REVIEW

---

## CODE — NEW FILES (complete)

### `projects/sfia-studio/app/features/project-assistant/f3/fixtureSafeM3ResolutionProfile.ts`

```typescript
/**
 * HARVEST — exact fixture-safe G-UX-15 resolution profile (ZERO REAL only).
 *
 * Provenance: `__tests__/project-assistant/gux15.resolveM3ExecutionContract.test.ts`
 * `fixtureResolution()` + `F3_ACTION` / `F3_TARGET` / `F3_CAPABILITY` / `F3_SCOPE`.
 *
 * NOT a new business provenance model.
 * NOT authorized for Cursor REAL.
 * NOT a generic production action-selection mapping.
 */

import type { M3ResolvedExecutionFields } from "./resolveM3ExecutionContract";
import {
  F3_ACTION,
  F3_CAPABILITY,
  F3_SCOPE,
  F3_TARGET,
} from "./constants";

/**
 * Exact values harvested from the accepted G-UX-15 fixtureResolution().
 * Constraints intentionally omit "PROCESS LOCAL" (same as gux15 test).
 * stopConditions use CONTEXT_STALE / DECISION_NOT_CURRENT (not raw F3_STOP_CONDITIONS).
 */
export function fixtureSafeM3ResolutionProfile(): M3ResolvedExecutionFields {
  return {
    action: F3_ACTION,
    target: F3_TARGET,
    requiredCapabilities: [F3_CAPABILITY],
    reversibility: "reversible",
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

export const FIXTURE_SAFE_M3_SUPERSESSION_REASON =
  "PRE-M6 Option A — resolve durable M3 PREPARE via existing G-UX-15 supersession (fixture-safe ZERO REAL)" as const;

```

### `projects/sfia-studio/app/features/project-assistant/f3/prepareAndResolveM3ProductPath.ts`

```typescript
/**
 * Canonical post-GO product path (PRE-M6 Option A / QA-PRE-M6-01):
 * accepted HumanDecision + DecisionBasis
 * → prepareM3FromDecision
 * → resolveM3ExecutionContract (fixture-safe G-UX-15 profile, ZERO REAL)
 * → present resolved successor for explicit Confirmation.
 *
 * Does NOT confirm. Does NOT start. Does NOT validate Proposal.
 */

import type { F2ContextSnapshot } from "../f2/types";
import {
  prepareM3FromDecision,
  type F3M3PreparePayload,
  type PrepareM3Deps,
} from "./prepareM3FromDecision";
import {
  resolveM3ExecutionContract,
  type ResolveM3Deps,
  type ResolveM3Success,
} from "./resolveM3ExecutionContract";
import {
  FIXTURE_SAFE_M3_SUPERSESSION_REASON,
  fixtureSafeM3ResolutionProfile,
} from "./fixtureSafeM3ResolutionProfile";

export type PrepareAndResolveM3Deps = PrepareM3Deps & ResolveM3Deps;

export type F3M3ResolvedPayload = {
  turnKind: "f3_m3_resolved";
  mode: "M3_RESOLVED_FIXTURE";
  decisionId: string;
  projectId: string;
  prepare: F3M3PreparePayload;
  original: ResolveM3Success["original"];
  successor: ResolveM3Success["successor"];
  reusedFromIdempotency: boolean;
  executionPerformed: false;
  attemptCreated: false;
  confirmationRequired: true;
  realExecution: false;
  disclosures: string[];
};

export async function prepareAndResolveM3ProductPath(input: {
  projectId: string;
  decisionId: string;
  currentContext: F2ContextSnapshot;
  /** Hostile — ignored. */
  mode?: unknown;
  adapterRef?: unknown;
  agentId?: unknown;
  command?: unknown;
  real?: unknown;
  deps: PrepareAndResolveM3Deps;
}): Promise<
  | { ok: true; payload: F3M3ResolvedPayload }
  | { ok: false; code: string; message: string }
> {
  void input.mode;
  void input.adapterRef;
  void input.agentId;
  void input.command;
  void input.real;

  const prepared = await prepareM3FromDecision({
    projectId: input.projectId,
    decisionId: input.decisionId,
    currentContext: input.currentContext,
    deps: input.deps,
  });
  if (!prepared.ok) {
    return prepared;
  }

  const resolved = await resolveM3ExecutionContract({
    projectId: input.projectId,
    decisionId: input.decisionId,
    originalExecutionContractId: prepared.payload.contract.executionContractId,
    expectedOriginalVersion: prepared.payload.contract.version,
    resolution: fixtureSafeM3ResolutionProfile(),
    supersessionReason: FIXTURE_SAFE_M3_SUPERSESSION_REASON,
    deps: input.deps,
  });
  if (!resolved.ok) {
    return resolved;
  }

  return {
    ok: true,
    payload: {
      turnKind: "f3_m3_resolved",
      mode: "M3_RESOLVED_FIXTURE",
      decisionId: input.decisionId,
      projectId: input.projectId,
      prepare: prepared.payload,
      original: resolved.original,
      successor: resolved.successor,
      reusedFromIdempotency: resolved.reusedFromIdempotency,
      executionPerformed: false,
      attemptCreated: false,
      confirmationRequired: true,
      realExecution: false,
      disclosures: [
        "M3 durable PREPARE from HumanDecision + DecisionBasis",
        "G-UX-15 resolveM3ExecutionContract — fixture-safe ZERO REAL profile",
        "NO Proposal authority",
        "Confirmation required before StartExecution",
        "NO CURSOR REAL",
        ...resolved.disclosures,
      ],
    },
  };
}

```

### `projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteResolvedM3.ts`

```typescript
/**
 * Confirm + fixture-safe execute for a *resolved* durable M3 successor contract.
 *
 * Authority preconditions (distinct from legacy prepareF3Fixture):
 * - accepted HumanDecision + DecisionBasis (already enforced upstream)
 * - canonical M3 PREPARE superseded by this successor (enforced by resolve bridge)
 * - NO Proposal validation / NO validateF2ForPrepare
 *
 * Shares the same domain services as confirmAndExecuteF3Fixture
 * (Confirmation → ConfirmExecutionContract → Select → Start → Record → Evidence).
 * Does NOT fork a second Attempt engine.
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
import {
  F3_ADAPTER_ID,
  F3_AGENT_ID,
  F3_CONFIRM_ACTION_REF,
  F3_LABELS,
  F3_MODE,
  F3_SCOPE,
  resolveF3EphemeralNotice,
} from "./constants";
import { ingestEvidenceAndRecommend } from "./ingestEvidenceAndRecommend";
import type { F3ExecutePayload } from "./types";

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

async function buildM3ExecutePayload(input: {
  decisionId: string;
  contract: {
    executionContractId: string;
    version: number;
    status: string;
    action: string;
    target: string;
    scope: string;
    requiredAuthority: string;
    constraints: readonly string[];
  };
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
  deps: ConfirmExecuteResolvedM3Deps;
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
      // Canonical M3 path: Proposal is cognitive only — not execution authority.
      proposal: null,
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
        "M3 resolved successor — Confirmation was process-local (non durable)",
        "NO Proposal authority",
        persistenceNotice,
      ],
    },
  };
}

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

  const contractResult =
    await input.deps.executionContractServices.getExecutionContract.execute({
      executionContractId: input.executionContractId,
    });
  if (!contractResult.ok) {
    return {
      ok: false,
      code: contractResult.error.detailCode,
      message: contractResult.error.message,
    };
  }

  let contract = contractResult.contract;
  if (contract.projectId !== input.projectId) {
    return {
      ok: false,
      code: "CONTRACT_PROJECT_MISMATCH",
      message: "Le contrat n'appartient pas à ce projet.",
    };
  }
  if (contract.requiredAuthority !== "MORRIS") {
    return {
      ok: false,
      code: "CONTRACT_AUTHORITY_MISMATCH",
      message: "Resolved M3 successor must require MORRIS authority.",
    };
  }
  if (
    !Array.isArray(contract.decisionRefs) ||
    contract.decisionRefs.length !== 1 ||
    contract.decisionRefs[0] !== input.decisionId
  ) {
    return {
      ok: false,
      code: "CONTRACT_DECISION_REF_MISMATCH",
      message: "Successor decisionRefs must bind exactly the HumanDecision.",
    };
  }
  if (!contract.supersedesExecutionContractId) {
    return {
      ok: false,
      code: "CONTRACT_NOT_RESOLVED_SUCCESSOR",
      message:
        "Unresolved M3 PREPARE cannot execute — resolve successor first.",
    };
  }
  if (contract.scope !== F3_SCOPE) {
    return {
      ok: false,
      code: "CONTRACT_SCOPE_MISMATCH",
      message: "Scope contrat ≠ fixture-safe M3 resolution scope.",
    };
  }
  if (
    contract.action.includes("UNRESOLVED") ||
    contract.target.includes("UNRESOLVED") ||
    contract.requiredCapabilities.includes("cap:unresolved") ||
    contract.constraints.includes("PREPARE_ONLY") ||
    contract.constraints.includes("NO_ATTEMPT")
  ) {
    return {
      ok: false,
      code: "CONTRACT_STILL_UNRESOLVED",
      message: "Successor still carries unresolved / PREPARE_ONLY sentinels.",
    };
  }

  // Double-invoke protection BEFORE version OCC.
  const listed =
    await input.deps.executionAttemptServices.listExecutionAttempts.execute({
      executionContractId: contract.executionContractId,
    });
  if (listed.ok) {
    const succeeded = listed.attempts.find((a) => a.status === "succeeded");
    if (succeeded) {
      return buildM3ExecutePayload({
        decisionId: input.decisionId,
        contract,
        attempt: succeeded,
        launchCount: input.deps.fixtureAdapter.launchCallCount,
        reusedExistingAttempt: true,
        projectId: input.projectId,
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

  if (
    contract.status === "confirmation_required" ||
    contract.status === "validated"
  ) {
    const confirmationId = `cfm:m3:${contract.executionContractId}:v${contract.version}`;
    const requested =
      await input.deps.decisionServices.requestConfirmation.execute({
        confirmationId,
        level: "N3",
        actionRef: F3_CONFIRM_ACTION_REF,
        requestedBy: LOCAL_MORRIS_M3_ACTOR,
        requestedTo: LOCAL_MORRIS_M3_ACTOR,
        scope: contract.scope,
        idempotencyKey: `idem:m3-cfm:${contract.executionContractId}:v${contract.version}`,
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
      confirmationId,
      actor: LOCAL_MORRIS_M3_ACTOR,
      authorityEvidenceId: auth.evidenceId,
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
          confirmationId,
          actor: LOCAL_MORRIS_M3_ACTOR,
          authorityEvidenceId: auth.evidenceId,
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

  const attemptId = `xat:m3:${contract.executionContractId.replace(/^xct:/, "")}`;

  const selected =
    await input.deps.executionAttemptServices.selectExecutionAgent.execute({
      attemptId,
      executionContractId: contract.executionContractId,
      idempotencyKey: `idem:m3-att:${contract.executionContractId}`,
      actor: LOCAL_MORRIS_M3_ACTOR,
      authorityEvidenceId: auth.evidenceId,
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
      attemptId,
      actor: LOCAL_MORRIS_M3_ACTOR,
      authorityEvidenceId: auth.evidenceId,
    });
  if (!started.ok) {
    return {
      ok: false,
      code: started.error.detailCode,
      message: started.error.message,
    };
  }

  const resultRef = `res:m3-fixture:${attemptId.replace(/[^a-zA-Z0-9:_-]/g, "")}`;
  const recorded =
    await input.deps.executionAttemptServices.recordExecutionResult.execute({
      attemptId,
      adapterId: F3_ADAPTER_ID,
      resultRef,
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

  return buildM3ExecutePayload({
    decisionId: input.decisionId,
    contract,
    attempt: recorded.attempt,
    launchCount,
    reusedExistingAttempt: false,
    projectId: input.projectId,
    deps: input.deps,
  });
}

```

### `projects/sfia-studio/app/__tests__/project-assistant/qa-pre-m6-01.postGoDurableM3Path.test.ts`

```typescript
/**
 * QA-PRE-M6-01 — post-GO canonical path uses durable M3 + DecisionBasis.
 * Legacy Proposal prepare remains STALE fail-closed after LPS advance.
 * @vitest-environment node
 */
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  confirmAndExecuteResolvedM3,
  prepareAndResolveM3ProductPath,
  prepareF3Fixture,
  prepareM3FromDecision,
  F3_ADAPTER_ID,
  fixtureSafeM3ResolutionProfile,
} from "@/features/project-assistant/f3";
import {
  F3_ACTION,
  F3_SCOPE,
  F3_TARGET,
} from "@/features/project-assistant/f3/constants";
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

class FixedIdSource implements LocalProjectIdSource {
  private project = 0;
  private lps = 0;
  private correlation = 0;
  nextProjectId(): string {
    this.project += 1;
    return `prj:qa-pre-m6-01-${this.project}`;
  }
  nextLpsVersionId(): string {
    this.lps += 1;
    return `lps:qa-pre-m6-01-${this.lps}`;
  }
  nextCorrelationId(): string {
    this.correlation += 1;
    return `cor:qa-pre-m6-01-${this.correlation}`;
  }
}

async function createRuntime(): Promise<RuntimeApplicationService> {
  resetRuntimeApplicationServiceForTests();
  return getRuntimeApplicationService({
    registryRoot: REGISTRY_ROOT,
    schemasRoot: SCHEMAS_ROOT,
    nowIso: "2026-08-16T18:00:00.000Z",
    idSource: new FixedIdSource(),
    auditMode: "noop",
  });
}

async function seedGoWithLpsAdvance(runtime: RuntimeApplicationService) {
  const created = await runtime.createProject({
    name: "QA-PRE-M6-01",
    objective: "Durable post-GO path",
    context: "ZERO REAL fixture-safe",
    criticality: "STANDARD",
    constraints: ["FIXTURE ONLY"],
    shortReference: "QAPM601",
    idempotencyKey: `qa-pre-m6-01-${Date.now()}-${Math.random()}`,
  });
  expect(created.ok).toBe(true);
  if (!created.ok) throw new Error("create failed");
  const projectId = created.project.projectId;
  const overviewBefore = await runtime.getProject(projectId);
  expect(overviewBefore.ok).toBe(true);
  if (!overviewBefore.ok) throw new Error("overview failed");

  const proposalSnapshot = {
    projectId,
    lpsId: overviewBefore.livingState.id,
    lpsVersion: overviewBefore.livingState.version,
    doctrineDigest: overviewBefore.doctrine.digest,
  };

  const proposal = saveProposal({
    proposalId: createProposalId(),
    status: "DECISION_REQUIRED",
    rephrasedRequest: "Préparer architecture",
    objective: "Wire durable M3 after GO",
    cycleTypeId: "cyc:delivery",
    recommendedProfile: "Standard",
    rationale: "QA-PRE-M6-01",
    scope: "fixture-docs",
    outOfScope: ["REAL", "git write"],
    activatedBlocks: ["prepare"],
    expectedOutcome: "resolved M3 + attempt",
    sources: [],
    risks: [],
    reservations: [],
    stopConditions: ["AUCUNE EXÉCUTION RÉELLE"],
    morrisGateRequired: true,
    nextPossibleStep: "F3 PREPARE",
    contextSnapshot: proposalSnapshot,
    processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
    executionForbidden: true,
    noExecutingStatus: true,
    agentBinding: "NOT_AVAILABLE",
  });

  const go = await recordF2Decision({
    proposalId: proposal.proposalId,
    projectId,
    decisionKind: "GO",
    currentContext: proposalSnapshot,
    decisionServices: runtime.oa!.decisionServices,
    authorityResolver: runtime.oa!.authorityResolver,
    nowIso: () => runtime.oa!.clock.nowIso(),
    forceM3Authority: true,
  });
  expect(go.ok).toBe(true);
  if (!go.ok) throw new Error("GO failed");

  const overviewAfter = await runtime.getProject(projectId);
  expect(overviewAfter.ok).toBe(true);
  if (!overviewAfter.ok) throw new Error("overview after failed");

  const currentContext = {
    projectId,
    lpsId: overviewAfter.livingState.id,
    lpsVersion: overviewAfter.livingState.version,
    doctrineDigest: overviewAfter.doctrine.digest,
  };

  return {
    projectId,
    proposal: go.proposal,
    decision: go.decision,
    proposalSnapshot,
    currentContext,
    lpsBefore: overviewBefore.livingState.version,
    lpsAfter: overviewAfter.livingState.version,
    runtime,
  };
}

describe("QA-PRE-M6-01 — durable post-GO path vs Proposal STALE", () => {
  beforeEach(() => {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
  });

  it("T1 — GO advances LPS and persists Decision + DecisionBasis", async () => {
    const runtime = await createRuntime();
    const seeded = await seedGoWithLpsAdvance(runtime);
    expect(seeded.lpsAfter).toBeGreaterThan(seeded.lpsBefore);
    expect(seeded.decision.humanDecisionStatus).toBe("accepted");
    expect(seeded.decision.readyForNextGatedStep).toBe(true);
    const durable =
      await runtime.oa!.decisionServices.getHumanDecision.execute({
        decisionId: seeded.decision.decisionId,
      });
    expect(durable.ok).toBe(true);
    if (!durable.ok) return;
    expect(durable.decision.status).toBe("accepted");
    expect(durable.decision.decisionBasis).toBeTruthy();
    expect(seeded.proposalSnapshot.lpsVersion).toBe(seeded.lpsBefore);
    expect(seeded.currentContext.lpsVersion).toBe(seeded.lpsAfter);
  });

  it("T2 — legacy prepareF3Fixture remains STALE after LPS advance", async () => {
    const runtime = await createRuntime();
    const seeded = await seedGoWithLpsAdvance(runtime);
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
    expect(runtime.oa!.fixtureAdapter.launchCallCount).toBe(0);
  });

  it("T3 — prepareM3FromDecision succeeds after GO at LPS N+1", async () => {
    const runtime = await createRuntime();
    const seeded = await seedGoWithLpsAdvance(runtime);
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
    expect(prepared.payload.executionAllowed).toBe(false);
    expect(prepared.payload.attemptCreated).toBe(false);
    expect(prepared.payload.contract.target).toBe("UNRESOLVED_TARGET");
    expect(prepared.payload.contract.constraints).toContain("PREPARE_ONLY");
  });

  it("T4/T5/T6/T7/T8/T10 — resolve successor, confirmation required, execute once, replay safe, no Proposal persistence", async () => {
    const runtime = await createRuntime();
    const seeded = await seedGoWithLpsAdvance(runtime);
    const profile = fixtureSafeM3ResolutionProfile();
    expect(profile.action).toBe(F3_ACTION);
    expect(profile.target).toBe(F3_TARGET);
    expect(profile.scope).toBe(F3_SCOPE);

    const resolvedPath = await prepareAndResolveM3ProductPath({
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
    expect(resolvedPath.ok).toBe(true);
    if (!resolvedPath.ok) return;

    expect(resolvedPath.payload.confirmationRequired).toBe(true);
    expect(resolvedPath.payload.executionPerformed).toBe(false);
    expect(resolvedPath.payload.attemptCreated).toBe(false);
    expect(resolvedPath.payload.successor.action).toBe(F3_ACTION);
    expect(resolvedPath.payload.successor.target).toBe(F3_TARGET);
    expect(resolvedPath.payload.successor.scope).toBe(F3_SCOPE);
    expect(resolvedPath.payload.successor.requiredAuthority).toBe("MORRIS");
    expect(resolvedPath.payload.successor.supersedesExecutionContractId).toBe(
      resolvedPath.payload.original.executionContractId,
    );
    expect(resolvedPath.payload.successor.constraints).not.toContain(
      "PREPARE_ONLY",
    );
    expect(resolvedPath.payload.successor.requiredCapabilities).not.toContain(
      "cap:unresolved",
    );

    // T5/T6 — resolve alone: zero Attempts
    const listedBefore =
      await runtime.oa!.executionAttemptServices.listExecutionAttempts.execute({
        executionContractId:
          resolvedPath.payload.successor.executionContractId,
      });
    expect(listedBefore.ok).toBe(true);
    if (listedBefore.ok) expect(listedBefore.attempts).toHaveLength(0);
    expect(runtime.oa!.fixtureAdapter.launchCallCount).toBe(0);

    // T7 — explicit Confirmation + fixture-safe execute
    const executed = await confirmAndExecuteResolvedM3({
      projectId: seeded.projectId,
      decisionId: seeded.decision.decisionId,
      executionContractId: resolvedPath.payload.successor.executionContractId,
      expectedContractVersion: resolvedPath.payload.successor.version,
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
    expect(executed.payload.realExecution).toBe(false);
    expect(executed.payload.attempt.status).toBe("succeeded");
    expect(executed.payload.evidence.evidenceId).toBeTruthy();
    expect(executed.payload.reviewBundle.reviewBundleId).toBeTruthy();
    expect(executed.payload.recommendation.kind).toBe("recommendation");
    expect(executed.payload.recommendation.executionAuthority).toBe(false);
    expect(executed.payload.reusedExistingAttempt).toBe(false);
    const firstLaunch = executed.payload.attempt.launchCount;
    expect(firstLaunch).toBe(1);

    // T8 — duplicate start / replay reinjects without second launch
    const replay = await confirmAndExecuteResolvedM3({
      projectId: seeded.projectId,
      decisionId: seeded.decision.decisionId,
      executionContractId: resolvedPath.payload.successor.executionContractId,
      expectedContractVersion: resolvedPath.payload.successor.version,
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
    expect(runtime.oa!.fixtureAdapter.adapterId).toBe(F3_ADAPTER_ID);

    const listedAfter =
      await runtime.oa!.executionAttemptServices.listExecutionAttempts.execute({
        executionContractId:
          resolvedPath.payload.successor.executionContractId,
      });
    expect(listedAfter.ok).toBe(true);
    if (listedAfter.ok) {
      const succeeded = listedAfter.attempts.filter(
        (a) => a.status === "succeeded",
      );
      expect(succeeded).toHaveLength(1);
    }
  });

  it("T9 — rejected HumanDecision NO_GO blocks M3 product path", async () => {
    const runtime = await createRuntime();
    const created = await runtime.createProject({
      name: "QA-PRE-M6-01 NO_GO",
      objective: "Reject path",
      context: "negative",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "QANOG",
      idempotencyKey: `qa-nogo-${Date.now()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const projectId = created.project.projectId;
    const overview = await runtime.getProject(projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) return;

    const proposal = saveProposal({
      proposalId: createProposalId(),
      status: "DECISION_REQUIRED",
      rephrasedRequest: "x",
      objective: "x",
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Standard",
      rationale: "x",
      scope: "fixture",
      outOfScope: [],
      activatedBlocks: [],
      expectedOutcome: "x",
      sources: [],
      risks: [],
      reservations: [],
      stopConditions: [],
      morrisGateRequired: true,
      nextPossibleStep: "x",
      contextSnapshot: {
        projectId,
        lpsId: overview.livingState.id,
        lpsVersion: overview.livingState.version,
        doctrineDigest: overview.doctrine.digest,
      },
      processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
      executionForbidden: true,
      noExecutingStatus: true,
      agentBinding: "NOT_AVAILABLE",
    });

    const noGo = await recordF2Decision({
      proposalId: proposal.proposalId,
      projectId,
      decisionKind: "NO_GO",
      currentContext: proposal.contextSnapshot,
      decisionServices: runtime.oa!.decisionServices,
      authorityResolver: runtime.oa!.authorityResolver,
      nowIso: () => runtime.oa!.clock.nowIso(),
      forceM3Authority: true,
    });
    expect(noGo.ok).toBe(true);
    if (!noGo.ok) return;
    expect(noGo.decision.readyForNextGatedStep).toBe(false);

    const prepared = await prepareAndResolveM3ProductPath({
      projectId,
      decisionId: noGo.decision.decisionId,
      currentContext: {
        projectId,
        lpsId: overview.livingState.id,
        lpsVersion: overview.livingState.version,
        doctrineDigest: overview.doctrine.digest,
      },
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        nowIso: () => runtime.oa!.clock.nowIso(),
        forceM3Authority: true,
      },
    });
    expect(prepared.ok).toBe(false);
    if (prepared.ok) return;
    expect(prepared.code).toBe("DECISION_NOT_CURRENT");
  });
});

```

### `projects/sfia-studio/app/e2e/studio-option-a.spec.ts` (full)

```typescript
import { test, expect, type Page } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

/**
 * Cycle 8 AMEND QA-PRE-M6-01 — targeted browser regression (Option A).
 *
 * Env required (via process.env → playwright webServer spread):
 *   SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY=1
 *
 * Canonical post-GO path:
 *   HumanDecision GO → durable M3 prepare+resolve → Confirmation → Attempt
 *
 * Legacy Proposal STALE after LPS advance remains fail-closed (negative).
 */

const CAPTURE_ROOT = path.resolve(
  process.cwd(),
  "../../../.tmp-sfia-review/runtime-captures",
);
const MANIFEST = path.join(CAPTURE_ROOT, "manifest.jsonl");

function runId(): string {
  return `c8a-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

async function capture(
  page: Page,
  id: string,
  meta: {
    screen: string;
    state: string;
    viewport: { width: number; height: number };
  },
): Promise<string> {
  fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
  const file = path.join(CAPTURE_ROOT, `${id}.png`);
  await page.screenshot({ path: file, fullPage: true });
  const sha256 = crypto
    .createHash("sha256")
    .update(fs.readFileSync(file))
    .digest("hex");
  fs.appendFileSync(
    MANIFEST,
    `${JSON.stringify({
      id,
      file: path.basename(file),
      screen: meta.screen,
      state: meta.state,
      viewport: meta.viewport,
      timestamp: new Date().toISOString(),
      sha256,
      provenance: "CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT",
    })}\n`,
  );
  return sha256;
}

async function createUniqueProject(page: Page, suffix: string) {
  const name = `QA Option A ${suffix}`;
  await page.goto("/studio/projects/new");
  await expect(page.getByTestId("create-project-form")).toBeVisible();
  await page.locator("#project-name").fill(name);
  await page.locator("#project-objective").fill("Cycle 8 AMEND QA-PRE-M6-01");
  await page
    .locator("#project-context")
    .fill("Contexte E2E local fake provider — REAL=0 — post-GO durable M3.");
  await page.getByTestId("create-project-submit").click();
  await expect(page.getByTestId("open-project-workspace")).toBeVisible({
    timeout: 30_000,
  });
  await page.getByTestId("open-project-workspace").click();
  await expect(page.getByTestId("project-principal")).toBeVisible({
    timeout: 30_000,
  });
  await expect(page.getByTestId("project-assistant-panel")).toBeVisible();
  return name;
}

async function sendStructuring(page: Page) {
  const input = page.getByTestId("project-assistant-input");
  await expect(input).toBeEnabled({ timeout: 15_000 });
  await input.fill(
    "Préparer une proposition d'architecture __F2_STRUCTURING__",
  );
  await page.getByTestId("project-assistant-send").click();
  await expect(page.getByTestId("project-assistant-gate")).toBeVisible({
    timeout: 45_000,
  });
  await expect(page.getByTestId("project-assistant-proposal")).toBeVisible();
}

/** Standard/Light gated path — Confirmation reachable (Critical remains R-T-A3-1 fail-closed). */
async function sendGatedStandard(page: Page) {
  const input = page.getByTestId("project-assistant-input");
  await expect(input).toBeEnabled({ timeout: 15_000 });
  await input.fill(
    "Préparer une livraison gated __F2_GATED_STANDARD__",
  );
  await page.getByTestId("project-assistant-send").click();
  await expect(page.getByTestId("project-assistant-gate")).toBeVisible({
    timeout: 45_000,
  });
  await expect(page.getByTestId("project-assistant-proposal")).toBeVisible();
}

test.describe("QA-PRE-M6-01 AMEND — durable post-GO happy path", () => {
  test.describe.configure({ timeout: 180_000 });

  test("F4→F8 durable M3 path after GO; legacy Proposal STALE preserved", async ({
    page,
  }) => {
    test.setTimeout(180_000);
    const suffix = runId();
    await page.setViewportSize({ width: 1440, height: 1024 });

    await page.goto("/studio");
    await expect(page.getByTestId("studio-shell")).toBeVisible();
    await expect(page.getByTestId("studio-projects-home")).toBeVisible();
    await capture(page, "R01-F1-Projects", {
      screen: "F1",
      state: "Projects entry",
      viewport: { width: 1440, height: 1024 },
    });

    await createUniqueProject(page, suffix);
    await expect(page.getByTestId("project-recovery-banner")).toHaveCount(0);

    await sendGatedStandard(page);
    await expect(page.getByTestId("project-assistant-qualification")).toBeVisible();
    await expect(page.getByTestId("project-assistant-decision")).toHaveCount(0);
    await capture(page, "R04-F4-Qualification", {
      screen: "F4",
      state: "Qualification + Proposal ≠ HumanDecision (gated Standard/Light)",
      viewport: { width: 1440, height: 1024 },
    });

    await page.getByTestId("f2-decide-GO").click();
    await expect(page.getByTestId("project-assistant-decision")).toBeVisible({
      timeout: 45_000,
    });
    await expect(page.getByTestId("f2-decision-kind")).toContainText(/GO/i);
    await capture(page, "R05-F5-HumanDecision", {
      screen: "F5",
      state: "HumanDecision GO recorded",
      viewport: { width: 1440, height: 1024 },
    });

    // Canonical CTA → durable prepare + resolve (not Proposal fixture)
    await expect(page.getByTestId("f3-prepare-button")).toBeEnabled({
      timeout: 15_000,
    });
    await page.getByTestId("f3-prepare-button").click();
    await expect(page.getByTestId("project-assistant-f3-contract")).toBeVisible({
      timeout: 45_000,
    });
    await expect(page.getByTestId("f3-contract-id")).toContainText(/xct:m3-res:/);
    await expect(page.getByTestId("f3-prepare-no-attempt")).toBeVisible();
    await expect(page.getByTestId("project-assistant-f3-execute")).toHaveCount(0);
    await capture(page, "R06-F6-Resolved-Contract", {
      screen: "F6",
      state: "Durable resolved successor awaiting Confirmation",
      viewport: { width: 1440, height: 1024 },
    });

    await page.getByTestId("f3-confirm-execute-button").click();
    await expect(page.getByTestId("project-assistant-f3-execute")).toBeVisible({
      timeout: 45_000,
    });
    await expect(page.getByTestId("f3-attempt-status")).toContainText(/succeeded/i);
    await expect(page.getByTestId("f3-evidence-id")).toBeVisible();
    await expect(page.getByTestId("f3-review-bundle-id")).toBeVisible();
    await expect(page.getByTestId("f3-recommendation-card")).toBeVisible();
    await expect(page.getByText(/PAS UNE DÉCISION/i).first()).toBeVisible();
    await capture(page, "R07-F7-F8-Attempt-Recommendation", {
      screen: "F7/F8",
      state: "Fixture-safe Attempt + Evidence + Recommendation",
      viewport: { width: 1440, height: 1024 },
    });

    await expect(page.getByTestId("project-history-panel")).toBeVisible();
  });

  test("Legacy fixture prepare after GO remains STALE (negative authority)", async ({
    page,
  }) => {
    test.setTimeout(120_000);
    const suffix = runId();
    await page.setViewportSize({ width: 1440, height: 1024 });
    await createUniqueProject(page, `legacy-${suffix}`);
    await sendGatedStandard(page);
    await page.getByTestId("f2-decide-GO").click();
    await expect(page.getByTestId("project-assistant-decision")).toBeVisible({
      timeout: 45_000,
    });

    await expect(page.getByTestId("f3-legacy-fixture-prepare-button")).toBeEnabled({
      timeout: 15_000,
    });
    // Button lives under closed <details> — open diagnostics first.
    await page
      .getByTestId("project-assistant-f3-prepare")
      .locator("summary")
      .click();
    await page.getByTestId("f3-legacy-fixture-prepare-button").click();
    await expect(page.getByTestId("project-assistant-error")).toBeVisible({
      timeout: 30_000,
    });
    await expect(page.getByTestId("project-assistant-error")).toContainText(
      /STALE/i,
    );
    await expect(page.getByTestId("project-assistant-f3-contract")).toHaveCount(0);
    await expect(page.getByTestId("project-assistant-f3-execute")).toHaveCount(0);
    await capture(page, "R06b-Legacy-STALE-Preserved", {
      screen: "F6-neg",
      state: "Legacy Proposal prepare STALE after GO LPS advance",
      viewport: { width: 1440, height: 1024 },
    });
  });
});

test.describe("Option A — Negative authority reachable", () => {
  test.describe.configure({ timeout: 120_000 });

  test("N2 rejected HumanDecision NO_GO blocks prepare", async ({ page }) => {
    const suffix = runId();
    await page.setViewportSize({ width: 1440, height: 1024 });
    await createUniqueProject(page, `n2-${suffix}`);
    await sendStructuring(page);
    await page.getByTestId("f2-decide-NO_GO").click();
    await expect(page.getByTestId("project-assistant-decision")).toBeVisible({
      timeout: 45_000,
    });
    await expect(page.getByTestId("f2-decision-kind")).toContainText(/NO_GO|NO-GO/i);
    await expect(page.getByTestId("f3-prepare-button")).toHaveCount(0);
  });

  test("N1 Recommendation remains distinct from HumanDecision at Proposal stage", async ({
    page,
  }) => {
    const suffix = runId();
    await page.setViewportSize({ width: 1440, height: 1024 });
    await createUniqueProject(page, `n1-${suffix}`);
    await sendStructuring(page);
    await expect(page.getByTestId("project-assistant-proposal")).toBeVisible();
    await expect(page.getByText(/PAS UNE DÉCISION/i).first()).toBeVisible();
    await expect(page.getByTestId("project-assistant-decision")).toHaveCount(0);
  });

  test("N3 resolve alone leaves Attempt count 0 until Confirmation", async ({
    page,
  }) => {
    const suffix = runId();
    await page.setViewportSize({ width: 1440, height: 1024 });
    await createUniqueProject(page, `n3-${suffix}`);
    await sendGatedStandard(page);
    await page.getByTestId("f2-decide-GO").click();
    await expect(page.getByTestId("project-assistant-decision")).toBeVisible({
      timeout: 45_000,
    });
    await page.getByTestId("f3-prepare-button").click();
    await expect(page.getByTestId("project-assistant-f3-contract")).toBeVisible({
      timeout: 45_000,
    });
    await expect(page.getByTestId("f3-prepare-no-attempt")).toBeVisible();
    await expect(page.getByTestId("project-assistant-f3-execute")).toHaveCount(0);
  });

  test("N12 Recovery honesty — reload does not rebuild conversation", async ({
    page,
  }) => {
    const suffix = runId();
    await page.setViewportSize({ width: 1440, height: 1024 });
    await createUniqueProject(page, `n12-${suffix}`);
    await sendStructuring(page);
    await expect(page.getByTestId("project-assistant-gate")).toBeVisible();
    await page.reload();
    await expect(page.getByTestId("project-principal")).toBeVisible({
      timeout: 30_000,
    });
    await expect(page.getByTestId("project-assistant-empty")).toBeVisible({
      timeout: 15_000,
    });
    await expect(page.getByTestId("project-assistant-gate")).toHaveCount(0);
    await expect(page.getByTestId("project-assistant-proposal")).toHaveCount(0);
  });

  test("G-UX-08 AMEND deferred message only", async ({ page }) => {
    const suffix = runId();
    await page.setViewportSize({ width: 1440, height: 1024 });
    await createUniqueProject(page, `amend-${suffix}`);
    await sendStructuring(page);
    await page.getByTestId("f2-decide-AMEND").click();
    await expect(
      page.getByText(/G-UX-08|différé|AMEND complète/i).first(),
    ).toBeVisible({ timeout: 45_000 });
  });
});

test.describe("Option A — accessibility bounded smoke", () => {
  test("F1 and Project principal expose structure", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    await page.goto("/studio");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    const suffix = runId();
    await createUniqueProject(page, `a11y-${suffix}`);
    await page.getByTestId("project-assistant-input").focus();
    await expect(page.getByTestId("project-assistant-input")).toBeFocused();
  });
});

```

## CODE — USEFUL DIFF (tracked AMEND)

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx b/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
index 58871d7..c6b15bd 100644
--- a/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
+++ b/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
@@ -4,9 +4,10 @@ import { useEffect, useId, useRef, useState, useTransition } from "react";
 import { StatusPill } from "@/components/ui/StatusPill";
 import {
   projectAssistantConfirmAndExecuteF3FixtureAction,
+  projectAssistantConfirmAndExecuteResolvedM3Action,
   projectAssistantDecideAction,
   projectAssistantPrepareF3FixtureAction,
-  projectAssistantPrepareM3Action,
+  projectAssistantPrepareResolvedM3Action,
   projectAssistantRehydrateEvidenceOutcomeAction,
   projectAssistantSendAction,
 } from "./actions";
@@ -18,7 +19,12 @@ import type {
 } from "./types";
 import type { F2DecisionKind, ProposalDto } from "./f2/types";
 import type { F3ExecutePayload, F3PreparePayload } from "./f3/types";
-import type { F3M3PreparePayload } from "./f3/prepareM3FromDecision";
+import type { F3M3ResolvedPayload } from "./f3/prepareAndResolveM3ProductPath";
+import {
+  G_UX_08_AMEND_DEFERRED_MESSAGE,
+  attemptStatusUserLabel,
+  deriveRecommendationFreshness,
+} from "./presentationLabels";
 import styles from "./project-assistant.module.css";

 type UiMessage = {
@@ -73,7 +79,21 @@ function modeFromResult(result: {
   return "MODE À CONFIRMER";
 }

-export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
+export type ProjectAssistantPanelProps = {
+  projectId: string;
+  /** Fired after a successful durable Product mutation (not process-local). */
+  onDurableFactsChanged?: () => void;
+  /** Mirrors the latest durable Evidence/ReviewBundle rehydrate for parent History. */
+  onDurableEvidenceOutcomeChange?: (
+    outcome: ProjectAssistantRehydrateEvidenceOutcomeSuccess | null,
+  ) => void;
+};
+
+export function ProjectAssistantPanel({
+  projectId,
+  onDurableFactsChanged,
+  onDurableEvidenceOutcomeChange,
+}: ProjectAssistantPanelProps) {
   const inputId = useId();
   const liveRegionId = useId();
   const [messages, setMessages] = useState<UiMessage[]>([]);
@@ -83,13 +103,13 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
   const [error, setError] = useState<string | null>(null);
   const [modeLabel, setModeLabel] = useState("MODE À CONFIRMER");
   const [ephemeralNotice, setEphemeralNotice] = useState(
-    "Conversation et Proposal F2 restent process-local ; Project/LPS/Cycle linkage M2 est persisté dans Product SQLite.",
+    "Conversation, proposition et confirmation restent process-local (non durables). L’état projet enregistré peut être relu ; rien n’est inventé.",
   );
   const [f2, setF2] = useState<F2TurnPayload | null>(null);
   const [activeProposal, setActiveProposal] = useState<ProposalDto | null>(null);
   const [reservesText, setReservesText] = useState("");
   const [f3Prepare, setF3Prepare] = useState<F3PreparePayload | null>(null);
-  const [f3M3Prepare, setF3M3Prepare] = useState<F3M3PreparePayload | null>(
+  const [f3M3Resolved, setF3M3Resolved] = useState<F3M3ResolvedPayload | null>(
     null,
   );
   const [f3Execute, setF3Execute] = useState<F3ExecutePayload | null>(null);
@@ -101,6 +121,43 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
   const [f3Busy, setF3Busy] = useState(false);
   const [isPending, startTransition] = useTransition();
   const listRef = useRef<HTMLDivElement | null>(null);
+  const onDurableFactsChangedRef = useRef(onDurableFactsChanged);
+  const onDurableEvidenceOutcomeChangeRef = useRef(
+    onDurableEvidenceOutcomeChange,
+  );
+  onDurableFactsChangedRef.current = onDurableFactsChanged;
+  onDurableEvidenceOutcomeChangeRef.current = onDurableEvidenceOutcomeChange;
+
+  function notifyDurableFactsChanged() {
+    onDurableFactsChangedRef.current?.();
+  }
+
+  function applyDurableEvidenceOutcome(
+    outcome: ProjectAssistantRehydrateEvidenceOutcomeSuccess | null,
+  ) {
+    setDurableEvidenceOutcome(outcome);
+    onDurableEvidenceOutcomeChangeRef.current?.(outcome);
+  }
+
+  async function refreshDurableEvidenceOutcome() {
+    const result = await projectAssistantRehydrateEvidenceOutcomeAction({
+      projectId,
+    });
+    if (result.ok) {
+      applyDurableEvidenceOutcome(result);
+      setDurableRehydrateError(null);
+      return;
+    }
+    if (result.code === "NO_EVIDENCE_OUTCOME_REFS") {
+      applyDurableEvidenceOutcome(null);
+      setDurableRehydrateError(null);
+      return;
+    }
+    applyDurableEvidenceOutcome(null);
+    setDurableRehydrateError(
+      "Impossible de relire le dernier outcome durable.",
+    );
+  }

   useEffect(() => {
     setUiState((prev) => (prev === "INITIAL" ? "READY" : prev));
@@ -108,23 +165,23 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {

   useEffect(() => {
     let cancelled = false;
-    setDurableEvidenceOutcome(null);
+    applyDurableEvidenceOutcome(null);
     setDurableRehydrateError(null);

     void projectAssistantRehydrateEvidenceOutcomeAction({ projectId }).then(
       (result) => {
         if (cancelled) return;
         if (result.ok) {
-          setDurableEvidenceOutcome(result);
+          applyDurableEvidenceOutcome(result);
           setDurableRehydrateError(null);
           return;
         }
         if (result.code === "NO_EVIDENCE_OUTCOME_REFS") {
-          setDurableEvidenceOutcome(null);
+          applyDurableEvidenceOutcome(null);
           setDurableRehydrateError(null);
           return;
         }
-        setDurableEvidenceOutcome(null);
+        applyDurableEvidenceOutcome(null);
         setDurableRehydrateError(
           "Impossible de relire le dernier outcome durable.",
         );
@@ -134,6 +191,8 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
     return () => {
       cancelled = true;
     };
+    // Parent callbacks are mirrored via refs; projectId is the durable read key.
+    // eslint-disable-next-line react-hooks/exhaustive-deps -- intentional mount/projectId only
   }, [projectId]);

   useEffect(() => {
@@ -258,39 +317,55 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
         {
           id: nextId("assistant"),
           role: "assistant",
-          content: result.text,
+          content:
+            kind === "AMEND"
+              ? `${result.text}\n\n${G_UX_08_AMEND_DEFERRED_MESSAGE}`
+              : result.text,
         },
       ]);
       setUiState("ANSWERED");
+      // HumanDecision is durable Product write — refresh LPS / History projection.
+      notifyDurableFactsChanged();
     });
   }

-  const canPrepareF3 =
+  // Canonical post-GO CTA: durable M3 prepare + resolve (no Proposal authority).
+  const canPrepareResolvedM3 =
     Boolean(f2?.decision?.readyForNextGatedStep) &&
     Boolean(f2?.decision?.decisionId) &&
-    Boolean(activeProposal) &&
     !f3Prepare &&
-    !f3M3Prepare &&
+    !f3M3Resolved &&
     !f3Execute &&
     !busy &&
     !blocked;

-  const canPrepareM3 =
+  // Legacy fixture path — diagnostic / negative STALE proof only.
+  const canPrepareLegacyFixture =
     Boolean(f2?.decision?.readyForNextGatedStep) &&
     Boolean(f2?.decision?.decisionId) &&
-    !f3M3Prepare &&
+    Boolean(activeProposal) &&
+    !f3Prepare &&
+    !f3M3Resolved &&
     !f3Execute &&
     !busy &&
     !blocked;

-  const canConfirmF3 =
-    Boolean(f3Prepare) &&
-    !f3Execute &&
-    !busy &&
-    !blocked;
+  const recommendationFreshness = deriveRecommendationFreshness({
+    hasSessionRecommendation: Boolean(f3Execute?.recommendation),
+    hasDurableEvidenceOutcome: Boolean(durableEvidenceOutcome),
+    sessionEvidenceId: f3Execute?.evidence.evidenceId ?? null,
+    durableEvidenceIds: durableEvidenceOutcome?.evidenceIds ?? [],
+  });
+
+  // Freshness is presentation-only. Do not invent authority via canConfirm.
+  const canConfirmLegacyFixture =
+    Boolean(f3Prepare) && !f3Execute && !busy && !blocked;

-  function prepareF3() {
-    if (!canPrepareF3 || !activeProposal || !f2?.decision) return;
+  const canConfirmResolvedM3 =
+    Boolean(f3M3Resolved) && !f3Execute && !busy && !blocked;
+
+  function prepareLegacyFixture() {
+    if (!canPrepareLegacyFixture || !activeProposal || !f2?.decision) return;
     if (f3Busy) return;
     setF3Busy(true);
     startTransition(async () => {
@@ -308,7 +383,7 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
         return;
       }
       setF3Prepare(result.f3);
-      setF3M3Prepare(null);
+      setF3M3Resolved(null);
       setF3Execute(null);
       setEphemeralNotice(result.ephemeralNotice);
       setMessages((prev) => [
@@ -320,16 +395,18 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
         },
       ]);
       setUiState("ANSWERED");
+      // ExecutionContract prepare is durable Product write.
+      notifyDurableFactsChanged();
     });
   }

-  function prepareM3() {
-    if (!canPrepareM3 || !f2?.decision) return;
+  function prepareResolvedM3() {
+    if (!canPrepareResolvedM3 || !f2?.decision) return;
     if (f3Busy) return;
     setF3Busy(true);
     startTransition(async () => {
       setError(null);
-      const result = await projectAssistantPrepareM3Action({
+      const result = await projectAssistantPrepareResolvedM3Action({
         projectId,
         decisionId: f2.decision!.decisionId,
       });
@@ -339,7 +416,7 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
         setError(result.message);
         return;
       }
-      setF3M3Prepare(result.f3);
+      setF3M3Resolved(result.f3);
       setF3Prepare(null);
       setF3Execute(null);
       setEphemeralNotice(result.ephemeralNotice);
@@ -352,10 +429,13 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
         },
       ]);
       setUiState("ANSWERED");
+      // M3 PREPARE + resolved successor are durable Product writes.
+      notifyDurableFactsChanged();
     });
   }
-  function confirmAndExecuteF3() {
-    if (!canConfirmF3 || !f3Prepare || !activeProposal) return;
+
+  function confirmAndExecuteLegacyFixture() {
+    if (!canConfirmLegacyFixture || !f3Prepare || !activeProposal) return;
     if (f3Busy) return;
     setF3Busy(true);
     startTransition(async () => {
@@ -385,6 +465,42 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
         },
       ]);
       setUiState("ANSWERED");
+      notifyDurableFactsChanged();
+      void refreshDurableEvidenceOutcome();
+    });
+  }
+
+  function confirmAndExecuteResolvedM3() {
+    if (!canConfirmResolvedM3 || !f3M3Resolved) return;
+    if (f3Busy) return;
+    setF3Busy(true);
+    startTransition(async () => {
+      setError(null);
+      const result = await projectAssistantConfirmAndExecuteResolvedM3Action({
+        projectId,
+        decisionId: f3M3Resolved.decisionId,
+        executionContractId: f3M3Resolved.successor.executionContractId,
+        expectedContractVersion: f3M3Resolved.successor.version,
+      });
+      setF3Busy(false);
+      if (!result.ok) {
+        setUiState("ERROR_RECOVERABLE");
+        setError(result.message);
+        return;
+      }
+      setF3Execute(result.f3);
+      setEphemeralNotice(result.ephemeralNotice);
+      setMessages((prev) => [
+        ...prev,
+        {
+          id: nextId("assistant"),
+          role: "assistant",
+          content: result.text,
+        },
+      ]);
+      setUiState("ANSWERED");
+      notifyDurableFactsChanged();
+      void refreshDurableEvidenceOutcome();
     });
   }

@@ -398,15 +514,15 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
       <div className={styles.metaRow} data-testid="project-assistant-mode-pill">
         <StatusPill tone="blueFlush">{modeLabel}</StatusPill>
         <StatusPill tone="muted">Lecture seule</StatusPill>
-        <StatusPill tone="muted">AUCUNE EXÉCUTION</StatusPill>
+        <StatusPill tone="muted">Aucune exécution réelle</StatusPill>
       </div>
       <p className={styles.ephemeral} data-testid="project-assistant-ephemeral">
         {ephemeralNotice}
       </p>
       <p className={styles.scope} data-testid="project-assistant-scope">
-        Périmètre F1+F2+F3 fixture : analyse · conversation · lecture · qualification ·
-        proposition · gate humain · prepare/confirm fixture. Pas d&apos;exécution Cursor REAL,
-        pas d&apos;écriture Git produit, pas de destination OPS1.
+        Parcours produit : qualification · proposition · décision humaine ·
+        contrat / confirmation · tentative · recommandation. Aucune exécution
+        réelle automatique.
       </p>

       <div
@@ -474,10 +590,17 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
           aria-labelledby="f2-qualification-title"
         >
           <h3 id="f2-qualification-title" className={styles.cardTitle}>
-            RECOMMANDATION
+            F4 · Qualification / Proposition
           </h3>
+          <p className={styles.cardMeta} data-testid="f2-recommendation-freshness">
+            {f2.qualification.recommendationLabel} ·{" "}
+            {deriveRecommendationFreshness({
+              hasSessionRecommendation: true,
+              hasDurableEvidenceOutcome: Boolean(durableEvidenceOutcome),
+            }).label}
+          </p>
           <p className={styles.cardMeta}>
-            {f2.qualification.recommendationLabel}
+            Une recommandation n&apos;est pas une décision humaine.
           </p>
           <dl className={styles.cardDl}>
             <div>
@@ -492,7 +615,7 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
             </div>
             {f2.qualification.cycleInstanceId ? (
               <div>
-                <dt>CycleInstance</dt>
+                <dt>Cycle lié</dt>
                 <dd data-testid="f2-cycle-instance">
                   {f2.qualification.cycleInstanceId}
                   {f2.qualification.cycleStatus
@@ -501,29 +624,34 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
                 </dd>
               </div>
             ) : null}
-            {f2.qualification.ckcResolutionRef ? (
-              <div>
-                <dt>CKC ref</dt>
-                <dd data-testid="f2-ckc-ref">
-                  {f2.qualification.ckcResolutionRef}
-                </dd>
-              </div>
-            ) : null}
             <div>
-              <dt>Rationale</dt>
+              <dt>Justification</dt>
               <dd data-testid="f2-rationale">{f2.qualification.rationale}</dd>
             </div>
-            <div>
-              <dt>Provenance</dt>
-              <dd data-testid="f2-qualification-provenance">
-                catalogue {f2.qualification.catalogVersion} ·{" "}
-                {f2.qualification.detailedStatus}
-                {f2.qualification.capitalizationViaCycleTypeId
-                  ? " · capitalisation via cycleType"
-                  : ""}
-              </dd>
-            </div>
           </dl>
+          <details className={styles.diagnosticsDetails}>
+            <summary>Diagnostics techniques</summary>
+            <dl className={styles.cardDl}>
+              {f2.qualification.ckcResolutionRef ? (
+                <div>
+                  <dt>Réf. résolution</dt>
+                  <dd data-testid="f2-ckc-ref">
+                    {f2.qualification.ckcResolutionRef}
+                  </dd>
+                </div>
+              ) : null}
+              <div>
+                <dt>Provenance</dt>
+                <dd data-testid="f2-qualification-provenance">
+                  catalogue {f2.qualification.catalogVersion} ·{" "}
+                  {f2.qualification.detailedStatus}
+                  {f2.qualification.capitalizationViaCycleTypeId
+                    ? " · capitalisation via cycleType"
+                    : ""}
+                </dd>
+              </div>
+            </dl>
+          </details>
         </section>
       ) : null}

@@ -534,11 +662,19 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
           aria-labelledby="f2-proposal-title"
         >
           <h3 id="f2-proposal-title" className={styles.cardTitle}>
-            PROPOSITION
+            Proposition
           </h3>
           <p className={styles.cardMeta} data-testid="f2-proposal-id">
-            {activeProposal.proposalId} · statut {activeProposal.status}
+            Statut {activeProposal.status}
           </p>
+          {activeProposal.status === "AMENDMENT_REQUIRED" ? (
+            <p
+              className={styles.processLocal}
+              data-testid="f2-amend-deferred-notice"
+            >
+              {G_UX_08_AMEND_DEFERRED_MESSAGE}
+            </p>
+          ) : null}
           <dl className={styles.cardDl}>
             <div>
               <dt>Demande reformulée</dt>
@@ -601,10 +737,10 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
           aria-labelledby="f2-gate-title"
         >
           <h3 id="f2-gate-title" className={styles.cardTitle}>
-            DÉCISION REQUISE
+            F5 · Décision humaine
           </h3>
           <p className={styles.cardMeta}>
-            Décision humaine explicite liée à {activeProposal?.proposalId}
+            Décision humaine explicite — distincte de la recommandation.
           </p>
           <label className={styles.reservesLabel} htmlFor={`${inputId}-reserves`}>
             Réserves (obligatoires pour GO WITH RESERVES)
@@ -648,7 +784,7 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
           data-testid="project-assistant-decision"
           aria-live="polite"
         >
-          <h3 className={styles.cardTitle}>DÉCISION PRISE</h3>
+          <h3 className={styles.cardTitle}>F5 · Décision enregistrée</h3>
           <p data-testid="f2-decision-kind">{f2.decision.kind}</p>
           <p data-testid="f2-decision-scope">Scope: {f2.decision.scope}</p>
           {f2.decision.readyForNextGatedStep ? (
@@ -663,116 +799,192 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
         </section>
       ) : null}

-      {canPrepareF3 || canPrepareM3 ? (
+      {canPrepareResolvedM3 || canPrepareLegacyFixture ? (
         <section
           className={styles.f3Card}
           data-testid="project-assistant-f3-prepare"
         >
-          <h3 className={styles.cardTitle}>F3 FIXTURE — PREPARE</h3>
+          <h3 className={styles.cardTitle}>F6 · Préparer le contrat</h3>
           <p className={styles.cardMeta}>
-            Le GO F2 autorise uniquement la préparation d&apos;un contrat fixture.
+            Le GO autorise uniquement la préparation d&apos;un contrat. Confirmation
+            process-local — non durable.
           </p>
           <div className={styles.f3Labels} data-testid="f3-prepare-labels">
-            <StatusPill tone="muted">FIXTURE — AUCUNE EXÉCUTION RÉELLE</StatusPill>
-            <StatusPill tone="muted">CURSOR REAL BLOQUÉ</StatusPill>
-            <StatusPill tone="muted">AUCUN GIT WRITE PRODUIT</StatusPill>
+            <StatusPill tone="muted">Aucune exécution réelle</StatusPill>
+            <StatusPill tone="muted">Confirmation non durable</StatusPill>
           </div>
           <button
             type="button"
             className={styles.f3Button}
             data-testid="f3-prepare-button"
-            disabled={!canPrepareF3}
-            onClick={() => prepareF3()}
+            disabled={!canPrepareResolvedM3}
+            onClick={() => prepareResolvedM3()}
           >
-            Préparer l&apos;exécution fixture
-          </button>
-          <button
-            type="button"
-            className={styles.f3Button}
-            data-testid="f3-m3-prepare-button"
-            disabled={!canPrepareM3}
-            onClick={() => prepareM3()}
-          >
-            M3 PREPARE (decision durable)
+            Préparer le contrat d&apos;exécution
           </button>
+          <details className={styles.diagnosticsDetails}>
+            <summary>Détails techniques / chemin legacy</summary>
+            <p className={styles.cardMeta}>
+              Chemin produit canonique après GO : HumanDecision durable → M3
+              PREPARE → résolution fixture-safe. Le chemin Proposal/fixture reste
+              fail-closed (STALE) après avancement LPS — preuve négative
+              uniquement.
+            </p>
+            <button
+              type="button"
+              className={styles.f3Button}
+              data-testid="f3-legacy-fixture-prepare-button"
+              disabled={!canPrepareLegacyFixture}
+              onClick={() => prepareLegacyFixture()}
+            >
+              Chemin legacy fixture (Proposal)
+            </button>
+          </details>
         </section>
       ) : null}

-      {f3M3Prepare && !f3Execute ? (
+      {f3M3Resolved && !f3Execute ? (
         <section
           className={styles.f3Card}
-          data-testid="project-assistant-f3-m3-prepare"
+          data-testid="project-assistant-f3-contract"
         >
-          <h3 className={styles.cardTitle}>M3 PREPARE — CURSOR PREPARE-ONLY</h3>
-          <div className={styles.f3Labels}>
-            <StatusPill tone="muted">NO CURSOR REAL</StatusPill>
-            <StatusPill tone="muted">NO ATTEMPT</StatusPill>
-            <StatusPill tone="muted">GATE D NOT_CONSUMED</StatusPill>
+          <h3 className={styles.cardTitle}>F6 · Contrat prêt à confirmer</h3>
+          <div className={styles.f3Labels} data-testid="f3-contract-labels">
+            <StatusPill tone="blueFlush">Contrat résolu</StatusPill>
+            <StatusPill tone="muted">Confirmation process-local</StatusPill>
+            <StatusPill tone="orange">Exécution réelle bloquée</StatusPill>
           </div>
           <dl className={styles.cardDl}>
             <div>
-              <dt>Contract id</dt>
-              <dd data-testid="f3-m3-contract-id">
-                {f3M3Prepare.contract.executionContractId}
+              <dt>Identifiant contrat</dt>
+              <dd data-testid="f3-contract-id">
+                {f3M3Resolved.successor.executionContractId}
               </dd>
             </div>
             <div>
-              <dt>Fingerprint</dt>
-              <dd data-testid="f3-m3-fingerprint">
-                {f3M3Prepare.contract.semanticFingerprint}
+              <dt>Version</dt>
+              <dd data-testid="f3-contract-version">
+                {f3M3Resolved.successor.version}
               </dd>
             </div>
             <div>
-              <dt>Action</dt>
-              <dd>{f3M3Prepare.contract.action}</dd>
-            </div>
-          </dl>
-        </section>
-      ) : null}
-
-      {f3Prepare && !f3Execute ? (
-        <section
-          className={styles.f3Card}
-          data-testid="project-assistant-f3-contract"
-        >
-          <h3 className={styles.cardTitle}>CONTRAT FIXTURE PRÉPARÉ</h3>
-          <div className={styles.f3Labels} data-testid="f3-contract-labels">
-            <StatusPill tone="blueFlush">FIXTURE</StatusPill>
-            <StatusPill tone="muted">FIXTURE — AUCUNE EXÉCUTION RÉELLE</StatusPill>
-            <StatusPill tone="muted">AUCUN GIT WRITE PRODUIT</StatusPill>
-            <StatusPill tone="orange">CURSOR REAL BLOQUÉ</StatusPill>
-          </div>
-          <dl className={styles.cardDl}>
-            <div>
-              <dt>Contract id</dt>
-              <dd data-testid="f3-contract-id">
-                {f3Prepare.contract.executionContractId}
+              <dt>Statut</dt>
+              <dd data-testid="f3-contract-status">
+                {f3M3Resolved.successor.status}
               </dd>
             </div>
             <div>
-              <dt>Version</dt>
-              <dd data-testid="f3-contract-version">{f3Prepare.contract.version}</dd>
+              <dt>Action</dt>
+              <dd data-testid="f3-contract-action">
+                {f3M3Resolved.successor.action}
+              </dd>
             </div>
             <div>
-              <dt>Status</dt>
-              <dd data-testid="f3-contract-status">{f3Prepare.contract.status}</dd>
+              <dt>Cible</dt>
+              <dd data-testid="f3-contract-target">
+                {f3M3Resolved.successor.target}
+              </dd>
             </div>
             <div>
-              <dt>Mode</dt>
-              <dd data-testid="f3-contract-mode">{f3Prepare.contract.mode}</dd>
+              <dt>Périmètre</dt>
+              <dd data-testid="f3-contract-scope">
+                {f3M3Resolved.successor.scope}
+              </dd>
             </div>
           </dl>
+          <details className={styles.diagnosticsDetails}>
+            <summary>Détails techniques</summary>
+            <dl className={styles.cardDl}>
+              <div>
+                <dt>PREPARE d&apos;origine</dt>
+                <dd data-testid="f3-m3-original-contract-id">
+                  {f3M3Resolved.original.executionContractId}
+                </dd>
+              </div>
+              <div>
+                <dt>Autorité requise</dt>
+                <dd data-testid="f3-contract-authority">
+                  {f3M3Resolved.successor.requiredAuthority}
+                </dd>
+              </div>
+            </dl>
+          </details>
           <p className={styles.noExecutionBanner} data-testid="f3-prepare-no-attempt">
-            attemptCreated: false — AUCUNE ATTEMPT
+            Tentative non créée — confirmation process-local (non durable).
           </p>
+          {recommendationFreshness.status === "stale" ? (
+            <p
+              className={styles.processLocal}
+              data-testid="f3-stale-recommendation-notice"
+            >
+              Recommandation périmée — ce n&apos;est pas une décision humaine et
+              ce n&apos;est pas un nouveau GO d&apos;exécution. La confirmation
+              reste gouvernée par le contrat et la décision déjà enregistrés.
+            </p>
+          ) : null}
           <button
             type="button"
             className={styles.f3Button}
             data-testid="f3-confirm-execute-button"
-            disabled={!canConfirmF3}
-            onClick={() => confirmAndExecuteF3()}
+            disabled={!canConfirmResolvedM3}
+            onClick={() => confirmAndExecuteResolvedM3()}
+          >
+            Confirmer et exécuter (process-local)
+          </button>
+        </section>
+      ) : null}
+
+      {f3Prepare && !f3Execute ? (
+        <section
+          className={styles.f3Card}
+          data-testid="project-assistant-f3-legacy-contract"
+        >
+          <h3 className={styles.cardTitle}>F6 · Contrat legacy (fixture Proposal)</h3>
+          <div className={styles.f3Labels} data-testid="f3-legacy-contract-labels">
+            <StatusPill tone="blueFlush">Contrat</StatusPill>
+            <StatusPill tone="muted">Confirmation process-local</StatusPill>
+            <StatusPill tone="orange">Exécution réelle bloquée</StatusPill>
+          </div>
+          <details className={styles.diagnosticsDetails} open>
+            <summary>Détails techniques</summary>
+            <dl className={styles.cardDl}>
+              <div>
+                <dt>Identifiant contrat</dt>
+                <dd data-testid="f3-legacy-contract-id">
+                  {f3Prepare.contract.executionContractId}
+                </dd>
+              </div>
+              <div>
+                <dt>Version</dt>
+                <dd data-testid="f3-legacy-contract-version">
+                  {f3Prepare.contract.version}
+                </dd>
+              </div>
+              <div>
+                <dt>Statut</dt>
+                <dd data-testid="f3-legacy-contract-status">
+                  {f3Prepare.contract.status}
+                </dd>
+              </div>
+              <div>
+                <dt>Mode</dt>
+                <dd data-testid="f3-legacy-contract-mode">
+                  {f3Prepare.contract.mode}
+                </dd>
+              </div>
+            </dl>
+          </details>
+          <p className={styles.noExecutionBanner} data-testid="f3-legacy-prepare-no-attempt">
+            Tentative non créée — confirmation process-local (non durable).
+          </p>
+          <button
+            type="button"
+            className={styles.f3Button}
+            data-testid="f3-legacy-confirm-execute-button"
+            disabled={!canConfirmLegacyFixture}
+            onClick={() => confirmAndExecuteLegacyFixture()}
           >
-            Confirmer et exécuter la fixture
+            Confirmer et exécuter (legacy fixture)
           </button>
         </section>
       ) : null}
@@ -783,31 +995,42 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
           data-testid="project-assistant-f3-execute"
           aria-live="polite"
         >
-          <h3 className={styles.cardTitle}>F3 FIXTURE — RÉSULTATS</h3>
+          <h3 className={styles.cardTitle}>F7 · Tentative / F8 · Recommandation</h3>
           <div className={styles.f3Labels} data-testid="f3-execute-labels">
-            <StatusPill tone="muted">FIXTURE — AUCUNE EXÉCUTION RÉELLE</StatusPill>
-            <StatusPill tone="muted">AUCUN GIT WRITE PRODUIT</StatusPill>
+            <StatusPill tone="muted">Aucune exécution réelle</StatusPill>
             <StatusPill tone="blueFlush">
-              RECOMMANDATION — PAS UNE DÉCISION MORRIS
+              Recommandation — pas une décision
+            </StatusPill>
+            <StatusPill
+              tone={recommendationFreshness.status === "stale" ? "orange" : "muted"}
+            >
+              {recommendationFreshness.label}
             </StatusPill>
-            <StatusPill tone="orange">CURSOR REAL BLOQUÉ</StatusPill>
-            <StatusPill tone="orange">HARD R-T-A3-1 / R-T-A3-2 OPEN</StatusPill>
           </div>

           <div data-testid="f3-attempt-card" className={styles.f3Subcard}>
-            <h4 className={styles.cardTitle}>Attempt</h4>
-            <p data-testid="f3-attempt-id">{f3Execute.attempt.attemptId}</p>
-            <p data-testid="f3-attempt-status">{f3Execute.attempt.status}</p>
-            <p data-testid="f3-attempt-adapter">{f3Execute.attempt.adapterId}</p>
-            <p data-testid="f3-attempt-external-effects">
-              externalEffects: {String(f3Execute.attempt.externalEffects)}
-            </p>
-            <p data-testid="f3-attempt-launch-count">
-              launchCount: {f3Execute.attempt.launchCount}
-            </p>
-            <p data-testid="f3-attempt-reused">
-              reusedExistingAttempt: {String(f3Execute.reusedExistingAttempt)}
-            </p>
+            <h4 className={styles.cardTitle}>Tentative</h4>
+            {(() => {
+              const attemptLabel = attemptStatusUserLabel(
+                f3Execute.attempt.status,
+              );
+              return (
+                <>
+                  <p data-testid="f3-attempt-status-label">
+                    {attemptLabel.label}
+                  </p>
+                  {!attemptLabel.blockedBeforeExecution ? (
+                    <p data-testid="f3-attempt-id">{f3Execute.attempt.attemptId}</p>
+                  ) : (
+                    <p data-testid="f3-attempt-id-omitted">
+                      Identifiant de tentative non affiché (bloqué avant
+                      exécution).
+                    </p>
+                  )}
+                  <p data-testid="f3-attempt-status">{f3Execute.attempt.status}</p>
+                </>
+              );
+            })()}
           </div>

           <div data-testid="f3-evidence-card" className={styles.f3Subcard}>
@@ -830,26 +1053,28 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
           </div>

           <div data-testid="f3-recommendation-card" className={styles.f3Subcard}>
-            <h4 className={styles.cardTitle}>Recommendation</h4>
+            <h4 className={styles.cardTitle}>F8 · Recommendation</h4>
+            <p
+              className={styles.cardMeta}
+              data-testid="f3-recommendation-freshness"
+            >
+              {recommendationFreshness.label}
+            </p>
             <p data-testid="f3-recommendation-label">
               {f3Execute.recommendation.recommendationLabel}
             </p>
             <p data-testid="f3-recommendation-execution-authority">
-              executionAuthority:{" "}
+              Autorité d&apos;exécution:{" "}
               {String(f3Execute.recommendation.executionAuthority)}
             </p>
             <p data-testid="f3-recommendation-gate-consumed">
-              gateConsumed: {String(f3Execute.recommendation.gateConsumed)}
+              Gate consommé: {String(f3Execute.recommendation.gateConsumed)}
             </p>
             <p data-testid="f3-recommendation-decision-created">
-              decisionCreated:{" "}
+              Décision créée:{" "}
               {String(f3Execute.recommendation.decisionCreated)}
             </p>
-            <p data-testid="f3-recommendation-hard-refs">
-              {f3Execute.recommendation.openHardReservationRefs.join(" · ")}
-            </p>
             <p data-testid="f3-no-ready-claim">PAS DE CLAIM READY</p>
-            <p data-testid="f3-no-ta6-complete">T-A6 COMPLETE NON DÉCLARÉ</p>
           </div>
         </section>
       ) : null}
@@ -871,12 +1096,18 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
           data-testid="durable-evidence-outcome"
           aria-live="polite"
         >
-          <h3 className={styles.cardTitle}>OUTCOME DURABLE — RELECTURE LPS</h3>
+          <h3 className={styles.cardTitle}>F8 · Outcome durable (relecture)</h3>
           <div className={styles.f3Labels} data-testid="durable-outcome-labels">
             <StatusPill tone="blueFlush">
-              RECOMMANDATION — PAS UNE DÉCISION MORRIS
+              RECOMMANDATION — PAS UNE DÉCISION
+            </StatusPill>
+            <StatusPill tone="muted">
+              {deriveRecommendationFreshness({
+                hasSessionRecommendation: false,
+                hasDurableEvidenceOutcome: true,
+              }).label}
             </StatusPill>
-            <StatusPill tone="muted">LECTURE SEULE — AUCUNE EXÉCUTION</StatusPill>
+            <StatusPill tone="muted">LECTURE SEULE</StatusPill>
           </div>
           <p className={styles.cardMeta} data-testid="durable-lps-version">
             LPS v{durableEvidenceOutcome.lpsVersion}
diff --git a/projects/sfia-studio/app/features/project-assistant/actions.ts b/projects/sfia-studio/app/features/project-assistant/actions.ts
index 762461f..94acfc6 100644
--- a/projects/sfia-studio/app/features/project-assistant/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/actions.ts
@@ -7,8 +7,10 @@ import { recordF2Decision } from "./f2/recordDecision";
 import { F2_PROCESS_LOCAL_NOTICE } from "./f2/proposalStore";
 import type { F2DecisionKind } from "./f2/types";
 import { confirmAndExecuteF3Fixture } from "./f3/confirmAndExecuteF3Fixture";
+import { confirmAndExecuteResolvedM3 } from "./f3/confirmAndExecuteResolvedM3";
 import { prepareF3Fixture } from "./f3/prepareF3Fixture";
 import { prepareM3FromDecision } from "./f3/prepareM3FromDecision";
+import { prepareAndResolveM3ProductPath } from "./f3/prepareAndResolveM3ProductPath";
 import { rehydrateEvidenceOutcomeFromLps } from "./f3/rehydrateEvidenceOutcomeFromLps";
 import { resolveF3EphemeralNotice } from "./f3/constants";
 import type {
@@ -18,6 +20,7 @@ import type {
   ProjectAssistantExecuteF3Result,
   ProjectAssistantPrepareF3Result,
   ProjectAssistantPrepareM3Result,
+  ProjectAssistantPrepareResolvedM3Result,
   ProjectAssistantRehydrateEvidenceOutcomeResult,
   ProjectAssistantSendResult,
 } from "./types";
@@ -387,6 +390,108 @@ export async function projectAssistantPrepareM3Action(input: {
   };
 }

+/**
+ * Canonical post-GO product path:
+ * prepareM3FromDecision → resolveM3ExecutionContract (fixture-safe ZERO REAL).
+ * Returns the resolved successor for explicit Confirmation. No StartExecution.
+ */
+export async function projectAssistantPrepareResolvedM3Action(input: {
+  projectId: string;
+  decisionId: string;
+  /** Hostile — ignored. */
+  mode?: unknown;
+  adapterRef?: unknown;
+  agentId?: unknown;
+  command?: unknown;
+  real?: unknown;
+  selectedAgentRef?: unknown;
+  canActAsMorris?: unknown;
+  claimedAuthorityLevel?: unknown;
+}): Promise<ProjectAssistantPrepareResolvedM3Result> {
+  void input.mode;
+  void input.adapterRef;
+  void input.agentId;
+  void input.command;
+  void input.real;
+  void input.selectedAgentRef;
+  void input.canActAsMorris;
+  void input.claimedAuthorityLevel;
+
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) {
+    return {
+      ok: false,
+      status: "prepare_error",
+      code: "OA_STACK_UNAVAILABLE",
+      message: "Services OA indisponibles pour M3 PREPARE+RESOLVE.",
+      mode: "unavailable",
+      retryable: false,
+    };
+  }
+
+  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
+  if (!projectResult.ok) {
+    return {
+      ok: false,
+      status: "project_not_found",
+      code: projectResult.error.code,
+      message: projectResult.error.message,
+      mode: "unavailable",
+      retryable: false,
+    };
+  }
+  const project = toContextDto(projectResult);
+
+  const prepared = await prepareAndResolveM3ProductPath({
+    projectId: input.projectId,
+    decisionId: input.decisionId,
+    currentContext: {
+      projectId: project.projectId,
+      lpsId: project.lpsId,
+      lpsVersion: project.lpsVersion,
+      doctrineDigest: project.doctrineDigest,
+      activeCycleInstanceId: project.activeCycleInstanceId,
+      ckcResolutionRef: project.ckcResolutionRef,
+    },
+    deps: {
+      decisionServices: runtime.oa.decisionServices,
+      authorityResolver: runtime.oa.authorityResolver,
+      executionContractServices: runtime.oa.executionContractServices,
+      nowIso: () => runtime.oa!.clock.nowIso(),
+    },
+  });
+
+  if (!prepared.ok) {
+    return {
+      ok: false,
+      status: prepared.code === "CONTEXT_STALE" ? "stale" : "prepare_error",
+      code: prepared.code,
+      message: prepared.message,
+      mode: "fixture",
+      retryable: prepared.code === "CONTEXT_STALE",
+    };
+  }
+
+  const f3 = prepared.payload;
+  return {
+    ok: true,
+    status: "ok",
+    mode: "m3_resolved_fixture",
+    presentation: "unconfirmed",
+    text: [
+      "Contrat d'exécution prêt à confirmer",
+      `Successeur ${f3.successor.executionContractId} v${f3.successor.version} (${f3.successor.status})`,
+      `Action ${f3.successor.action} · cible ${f3.successor.target}`,
+      "Confirmation process-local requise — aucune tentative démarrée",
+      "AUCUNE EXÉCUTION RÉELLE",
+    ].join(" — "),
+    project,
+    ephemeralNotice:
+      "Contrat durable résolu (HumanDecision + DecisionBasis). Confirmation process-local. Cursor REAL bloqué.",
+    f3,
+  };
+}
+
 type ProjectAssistantPrepareF3FailureProposal =
   import("./f2/types").ProposalDto | null;

@@ -519,6 +624,126 @@ export async function projectAssistantConfirmAndExecuteF3FixtureAction(input: {
   };
 }

+/**
+ * Canonical post-GO confirm + fixture-safe execute on resolved M3 successor.
+ * No Proposal validation. Confirmation is process-local (not persisted as authority).
+ */
+export async function projectAssistantConfirmAndExecuteResolvedM3Action(input: {
+  projectId: string;
+  decisionId: string;
+  executionContractId: string;
+  expectedContractVersion: number;
+  /** Hostile — ignored. */
+  mode?: unknown;
+  adapterRef?: unknown;
+  agentId?: unknown;
+  command?: unknown;
+  real?: unknown;
+  selectedAgentRef?: unknown;
+  executionMode?: unknown;
+  trustLevel?: unknown;
+  authorityEvidenceId?: unknown;
+  canActAsMorris?: unknown;
+  claimedAuthorityLevel?: unknown;
+}): Promise<ProjectAssistantExecuteF3Result> {
+  void input.mode;
+  void input.adapterRef;
+  void input.agentId;
+  void input.command;
+  void input.real;
+  void input.selectedAgentRef;
+  void input.executionMode;
+  void input.trustLevel;
+  void input.authorityEvidenceId;
+  void input.canActAsMorris;
+  void input.claimedAuthorityLevel;
+
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) {
+    return {
+      ok: false,
+      status: "execute_error",
+      code: "OA_STACK_UNAVAILABLE",
+      message: "Services OA indisponibles pour M3 EXECUTE.",
+      mode: "unavailable",
+      retryable: false,
+    };
+  }
+
+  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
+  if (!projectResult.ok) {
+    return {
+      ok: false,
+      status: "project_not_found",
+      code: projectResult.error.code,
+      message: projectResult.error.message,
+      mode: "unavailable",
+      retryable: false,
+    };
+  }
+  const project = toContextDto(projectResult);
+
+  const executed = await confirmAndExecuteResolvedM3({
+    projectId: input.projectId,
+    decisionId: input.decisionId,
+    executionContractId: input.executionContractId,
+    expectedContractVersion: input.expectedContractVersion,
+    mode: input.mode,
+    adapterRef: input.adapterRef,
+    agentId: input.agentId,
+    command: input.command,
+    real: input.real,
+    deps: {
+      decisionServices: runtime.oa.decisionServices,
+      authorityResolver: runtime.oa.authorityResolver,
+      executionContractServices: runtime.oa.executionContractServices,
+      executionAttemptServices: runtime.oa.executionAttemptServices,
+      evidenceReviewServices: runtime.oa.evidenceReviewServices,
+      fixtureAdapter: runtime.oa.fixtureAdapter,
+      projectServices: runtime.oa.projectServices,
+      productDurablePath: runtime.oa.productDurablePath,
+      nowIso: () => runtime.oa!.clock.nowIso(),
+    },
+  });
+
+  if (!executed.ok) {
+    return {
+      ok: false,
+      status: "execute_error",
+      code: executed.code,
+      message: executed.message,
+      mode: "fixture",
+      retryable: false,
+    };
+  }
+
+  const f3 = executed.payload;
+  const persistenceNotice = resolveF3EphemeralNotice(
+    runtime.oa.productDurablePath,
+  );
+  return {
+    ok: true,
+    status: "ok",
+    mode: "fixture",
+    presentation: "unconfirmed",
+    text: [
+      f3.reusedExistingAttempt
+        ? "M3 FIXTURE DÉJÀ EXÉCUTÉE (idempotent)"
+        : "M3 FIXTURE EXÉCUTÉE",
+      `Attempt ${f3.attempt.attemptId} · ${f3.attempt.status}`,
+      `Evidence ${f3.evidence.evidenceId} · non verified`,
+      `ReviewBundle ${f3.reviewBundle.reviewBundleId}`,
+      "RECOMMANDATION — PAS UNE DÉCISION MORRIS",
+      "FIXTURE — AUCUNE EXÉCUTION RÉELLE",
+      "CURSOR REAL BLOQUÉ",
+      persistenceNotice,
+    ].join(" — "),
+    project,
+    ephemeralNotice: persistenceNotice,
+    f3,
+  };
+}
+
 /**
  * M5 durable Nora/F3 readback — LPS evidence/RB refs → RecommendNextGate.
  * Strictly read-only: no Decision, no gate consume, no Attempt launch.
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/index.ts b/projects/sfia-studio/app/features/project-assistant/f3/index.ts
index 44ee145..68cef3e 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/index.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/index.ts
@@ -32,7 +32,18 @@ export {
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
 export { ingestEvidenceAndRecommend } from "./ingestEvidenceAndRecommend";
 export { appendEvidenceOutcomeToLps } from "./appendEvidenceOutcomeToLps";
 export { rehydrateEvidenceOutcomeFromLps } from "./rehydrateEvidenceOutcomeFromLps";
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/types.ts b/projects/sfia-studio/app/features/project-assistant/f3/types.ts
index 8b70b62..bc47389 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/types.ts
@@ -88,7 +88,11 @@ export type F3PreparePayload = {
 export type F3ExecutePayload = {
   turnKind: "f3_execute";
   mode: F3Mode;
-  proposal: ProposalDto;
+  /**
+   * Legacy fixture path may carry the process-local Proposal for provenance.
+   * Canonical post-GO M3 path sets null — Proposal is not execution authority.
+   */
+  proposal: ProposalDto | null;
   decisionId: string;
   contract: F3ContractDto;
   attempt: F3AttemptDto;
diff --git a/projects/sfia-studio/app/features/project-assistant/types.ts b/projects/sfia-studio/app/features/project-assistant/types.ts
index d9fdf55..5991bf0 100644
--- a/projects/sfia-studio/app/features/project-assistant/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/types.ts
@@ -193,6 +193,30 @@ export type ProjectAssistantPrepareM3Result =
   | ProjectAssistantPrepareM3Success
   | ProjectAssistantPrepareM3Failure;

+export type ProjectAssistantPrepareResolvedM3Success = {
+  ok: true;
+  status: "ok";
+  mode: "m3_resolved_fixture";
+  presentation: "unconfirmed";
+  text: string;
+  project: ProjectAssistantContextDto;
+  ephemeralNotice: string;
+  f3: import("./f3/prepareAndResolveM3ProductPath").F3M3ResolvedPayload;
+};
+
+export type ProjectAssistantPrepareResolvedM3Failure = {
+  ok: false;
+  status: "prepare_error" | "stale" | "project_not_found" | "validation_error";
+  code: string;
+  message: string;
+  mode: AssistantUiMode;
+  retryable: boolean;
+};
+
+export type ProjectAssistantPrepareResolvedM3Result =
+  | ProjectAssistantPrepareResolvedM3Success
+  | ProjectAssistantPrepareResolvedM3Failure;
+
 export type ProjectAssistantExecuteF3Success = {
   ok: true;
   status: "ok";
diff --git a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
index 1031f79..1f17afd 100644
--- a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
+++ b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
@@ -121,6 +121,45 @@ export class FakeConversationProvider implements ConversationProvider {
         },
       };
     }
+    /**
+     * Light/Standard gated path: Morris gate via structural op token ("create pr")
+     * without Critical profile — ZERO REAL Confirmation reachable.
+     * Critical architecture (__F2_STRUCTURING__) remains R-T-A3-1 fail-closed.
+     */
+    if (lastUser?.content.includes("__F2_GATED_STANDARD__")) {
+      return {
+        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
+          intentClass: "actionable",
+          candidateCycleTypeId: "cyc:delivery",
+          signals: {
+            structuralChange: false,
+            securityImpact: false,
+            architectureImpact: false,
+            dataImpact: false,
+            irreversible: false,
+            lowRiskBounded: true,
+          },
+          objective: "Préparer une livraison bornée avec gate Morris",
+          scope: "Proposition Standard gateable sans Critical",
+          rephrasedRequest: "Préparer une proposition de livraison gated",
+          outOfScope: ["Cursor REAL"],
+          risks: ["Confusion reco/décision"],
+          reservations: [],
+          stopConditions: ["AUCUNE EXÉCUTION"],
+          activatedBlocks: ["qualification", "proposition", "gate"],
+          expectedOutcome: "Gate Morris requis — profil Standard",
+          criticalJustification: null,
+          requestedOperation: "create pr",
+        })}`,
+        usage: {
+          inputTokens: 10 * this.callCount,
+          outputTokens: 5 * this.callCount,
+          totalTokens: 15 * this.callCount,
+          model: "fake-test-model",
+          providerResponseId: `fake-resp-${this.callCount}`,
+        },
+      };
+    }
     if (lastUser?.content.includes("__F2_STRUCTURING__")) {
       return {
         text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({

```
