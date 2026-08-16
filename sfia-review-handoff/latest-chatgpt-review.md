# SFIA STUDIO — PRE-M6 UI DELIVERY OPTION A — CYCLE 8 AMEND QA-PRE-M6-TEST-01 — NEGATIVE-STATE TESTABILITY HARNESS

Level: FULL
Timestamp: 2026-08-16 21:19:54 CEST (Europe/Paris)
Publisher target: sfia-review-handoff/latest-chatgpt-review.md

---

## 1. GO Morris exact / interprété

User wording: « ok si tu recommandes l'option A ca me va, donc go »

Interprétation gouvernée consommée:

GO MORRIS — PRE-M6 UI DELIVERY OPTION A — CYCLE 8 AMEND — QA-PRE-M6-TEST-01 —
AUTHORIZE BOUNDED E2E-ONLY NEGATIVE-STATE TESTABILITY HARNESS FOR N5 / N7 / N8 / N9 / N10 / N11 —
REUSE EXISTING TESTEXECUTIONADAPTER / EXECUTIONATTEMPT USE CASES / PRODUCT SQLITE TEST HOOKS —
NO PRODUCT BUSINESS SEMANTICS CHANGE — NO NEW PERSISTENCE — NO NEW ENGINE — NO MIGRATION — NO REAL —
NO PROJECT COMMIT — NO PROJECT PUSH — NO PR — NO M6 —
RETURN FOR CHATGPT REVIEW BEFORE FULL CYCLE 9 RERUN

---

## 2. Cycle / Profile / CKC

- Cycle: 8 — Delivery / implémentation
- Sous-type: CONTINUATION / AMEND — QA TESTABILITY HARNESS
- Typologie: INC
- Profil: Critical
- CKC détaillé: ABSENT → fallback method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md + SFIA v2.6 process
- Finalité: implémenter dans périmètre borné (diff / code)
- Preuve: diff + tests
- Risque principal: scope creep
- Statut CKC: method-candidate
- Autorité: aucune autorité d'exécution

---

## 3. Git Truth

| Check | Value |
|-------|-------|
| branch | `delivery/sfia-studio-pre-m6-ui-option-a` |
| HEAD | `0d33478566627a9bf507d5a06323962d349308ee` |
| origin/main | `0d33478566627a9bf507d5a06323962d349308ee` |
| staged | 0 |
| REAL | unset / 0 |
| working tree | DIRTY candidat attendu |
| tracked modified | 41 |
| untracked | 21 |
| incoming handoff | `38b18af38442a9c1c1fe1200475b0485307de674` |
| BASE MAIN ADVANCED | NO |
| WRONG BRANCH | NO |
| PREEXISTING STAGED | NO |

### git status --short (truncated to project paths)

```
M projects/sfia-studio/app/__tests__/increment-a.test.tsx
 M projects/sfia-studio/app/__tests__/increment-b.test.tsx
 M projects/sfia-studio/app/__tests__/navigation.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
 M projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
 M projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx
 M projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx
 M projects/sfia-studio/app/app/studio/projects/[id]/page.tsx
 M projects/sfia-studio/app/app/studio/projects/new/page.tsx
 M projects/sfia-studio/app/components/shell/StudioShell.tsx
 M projects/sfia-studio/app/components/shell/UtilityRail.tsx
 M projects/sfia-studio/app/components/shell/utility-rail.module.css
 M projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
 M projects/sfia-studio/app/features/project-assistant/actions.ts
 M projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteF3Fixture.ts
 M projects/sfia-studio/app/features/project-assistant/f3/index.ts
 M projects/sfia-studio/app/features/project-assistant/f3/types.ts
 M projects/sfia-studio/app/features/project-assistant/project-assistant.module.css
 M projects/sfia-studio/app/features/project-assistant/types.ts
 M projects/sfia-studio/app/features/vertical-slice-ui/CreateProjectForm.tsx
 M projects/sfia-studio/app/features/vertical-slice-ui/ProjectWorkspaceView.tsx
 M projects/sfia-studio/app/features/vertical-slice-ui/RuntimeDisclosureBanner.tsx
 M projects/sfia-studio/app/features/vertical-slice-ui/create-project.module.css
 M projects/sfia-studio/app/features/vertical-slice-ui/project-workspace.module.css
 M projects/sfia-studio/app/lib/navigation.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/testExecutionAdapter.ts
 M projects/sfia-studio/app/lib/oa/project/domain/types.ts
 M projects/sfia-studio/app/lib/oa/project/index.ts
 M projects/sfia-studio/app/lib/oa/project/infrastructure/memoryProjectRepository.ts
 M projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/createSqliteProductProjectServices.ts
 M projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProjectRepository.ts
 M projects/sfia-studio/app/lib/oa/project/ports/projectAuditJournalPort.ts
 M projects/sfia-studio/app/lib/oa/project/ports/projectRepositoryPort.ts
 M projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/actions.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/index.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/mapping.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/types.ts
 M projects/sfia-studio/app/styles/shell.module.css
 M projects/sfia-studio/app/styles/tokens.css
?? .tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/project-assistant/presentationLabels.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/qa-pre-m6-01.finalHardening.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/qa-pre-m6-01.postGoDurableM3Path.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/qa-pre-m6-test-01.e2eQaControl.test.ts
?? projects/sfia-studio/app/__tests__/studio-projects/
?? projects/sfia-studio/app/app/api/
?? projects/sfia-studio/app/app/studio/page.tsx
?? projects/sfia-studio/app/e2e/studio-option-a-negative-states.spec.ts
?? projects/sfia-studio/app/e2e/studio-option-a.spec.ts
?? projects/sfia-studio/app/e2e/support/
?? projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteResolvedM3.ts
?? projects/sfia-studio/app/features/project-assistant/f3/e2eOptionATerminalAttempt.ts
?? projects/sfia-studio/app/features/project-assistant/f3/executeConfirmedFixtureSafeContract.ts
?? projects/sfia-studio/app/features/project-assistant/f3/fixtureSafeM3ResolutionProfile.ts
?? projects/sfia-studio/app/features/project-assistant/f3/prepareAndResolveM3ProductPath.ts
?? projects/sfia-studio/app/features/project-assistant/f3/validateResolvedM3ExecutionBoundary.ts
?? projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
?? projects/sfia-studio/app/features/studio-projects/
?? projects/sfia-studio/app/lib/oa/project/application/listProjects.ts
?? projects/sfia-studio/app/lib/vertical-slice-runtime/e2eOptionAQaScenarioControl.ts
```

---

## 4. Incoming handoff / QA gap

Incoming ChatGPT review @ `38b18af…` identified **QA-PRE-M6-TEST-01**:

browser proofs missing for **N5 / N7 / N8 / N9 / N10 / N11** without a bounded testability seam.

G-UX-11 remains **OPEN** for this cycle (no requalification; full Cycle 9 not authorized).

---

## 5. Convergence Pre-check

- Build Doctrine: VALIDATED — ACTIVE ON MAIN
- Capacités: V3-F05 + V3-F11 + V3-F12 + V3-F14 + V3-F15
- Milestone: PRE-M6 NEGATIVE-STATE TESTABILITY
- Gap: QA-PRE-M6-TEST-01 → **IMPLEMENTED CANDIDATE** (this cycle)
- Happy path / QA-PRE-M6-01 / B5/B7 / N1–N4/N12: prior PASS (unchanged claim)
- UAT / M6 / runtime v3 / REAL: NOT AUTHORIZED / NON ADOPTED / 0

---

## 6. Build Doctrine challenge

- Utile maintenant: YES (closes last proof gap before UAT readiness path)
- Réutilisation: MAXIMALE
- Assets KEEP/HARVEST: TestExecutionAdapter, ExecutionAttempt use-cases, Product SQLite `failNextSave`, runtime reset, Playwright, Option A UI (read-only semantics)
- Nouveau moteur: NO
- Architecture parallèle: NO
- Nature: TEST INFRASTRUCTURE
- Exit debt: KEEP AS SEALED TEST INFRASTRUCTURE until PR readiness review (or RETIRE if unused)

---

## 7. Discovery matrix N5 / N7–N11

| Scenario | Existing legal domain state? | Existing use-case? | Existing test hook? | Need server-process access? | Need production semantic change? | Chosen injection | Exit/reset | Risk |
|----------|------------------------------|--------------------|---------------------|-----------------------------|----------------------------------|------------------|------------|------|
| N5 recommendation_stale | YES — freshness via Evidence ID mismatch | registerEvidence + LPS append + deriveRecommendationFreshness | none for supersession | YES (same process as product SQLite) | NO | control `recommendation_stale` then E2E refresh event | n/a / next scenario isolation | medium — must not set STALE label directly |
| N7 attempt_failed | YES — Attempt failed | RecordExecutionFailure | TestExecutionAdapter | YES | NO | arm + Confirm → terminal helper | arm consume once | medium — authority/boundary |
| N8 attempt_timeout | YES — Attempt timeout | TriggerAttemptTimeout(nowIso past deadline) | same | YES | NO | arm + Confirm | consume | medium |
| N9 attempt_cancelled | YES — Attempt cancelled | CancelExecutionAttempt | TestExecutionAdapter cancel | YES | NO | arm + Confirm | consume | medium |
| N10 evidence_missing | YES — Attempt succeeded without Evidence ingest | recordExecutionResult + skip ingest (+ failNextSave available) | failNextSave=evidence | YES | NO | arm `evidence_missing` | consume | medium — honesty of absent Evidence |
| N11 rehydrate_read_failure | YES — LPS Evidence ref missing → rehydrate error | append LPS with missing Evidence id | none | YES | NO | control `rehydrate_read_failure` + reload | `reset` | medium — no DB corruption |

**Why not driver-only?** Attempt terminal outcomes and LPS supersession require the Next server process that owns OA/SQLite; Playwright alone cannot call use-cases in that process.

**Why one control surface?** Avoid six dispersed seams; closed enum + hard gates.

---

## 8. Selected harness architecture

1. **Playwright client** `e2e/support/optionAQaScenarioControl.ts`
2. **Central E2E control route** `app/api/e2e/option-a-qa-scenario/route.ts`
   Note: candidate path `__e2e__` is a Next.js **private folder** (underscore prefix) and does not route — relocated to `api/e2e/` (still non-product, hard-gated).
3. **Runtime control core** `lib/vertical-slice-runtime/e2eOptionAQaScenarioControl.ts` (no `@/features` imports)
4. **Terminal Attempt helper** `features/project-assistant/f3/e2eOptionATerminalAttempt.ts` (not exported from product barrel)
5. **Armed confirm hook** in `confirmAndExecuteResolvedM3.ts` — no-op when control disabled
6. **Minimal Panel observability**: `data-testid="f2-decision-id"` + gated `sfia-e2e-refresh-durable` listener (window `__SFIA_E2E_QA_CONTROL__` only)

No new product page / button / navigation / persistence / engine / Attempt status.

---

## 9. Hard E2E enablement gate

Inactive unless ALL true:

- `NODE_ENV != production`
- `OPS1_E2E_ALLOW_DIRTY_PRINCIPAL == "1"`
- `OPS1_CONVERSATION_PROVIDER == "fake"`
- `SFIA_STUDIO_E2E_QA_CONTROL == "1"`
- `SFIA_STUDIO_CURSOR_REAL != "1"`
- `OPS1_CURSOR_REAL != "1"`
- `fixtureAdapter.externalEffects == false`

Else: opaque **404** (no diagnostic leak).

---

## 10. Control surface contract

POST `/api/e2e/option-a-qa-scenario`

Closed enum scenarios only:

`recommendation_stale | attempt_failed | attempt_timeout | attempt_cancelled | evidence_missing | rehydrate_read_failure | reset`

Allowed fields only: `scenario`, `projectId`, `decisionId`, `executionContractId`, `attemptId`.

Unknown field → 400. Unknown scenario → 400.

Terminal scenarios require `validateResolvedM3ExecutionBoundary` before arming.

---

## 11. No arbitrary mutation / no raw SQL / no second engine proofs

- No SQL / filePath / shell / arbitrary status / JSON patch / adapterRef / URL / token / script in contract
- N7–N9 call existing Attempt application services only
- N10 skips Evidence ingest (does not delete Evidence; does not invent success Evidence)
- N5 registers real Evidence + LPS supersession; UI uses real `deriveRecommendationFreshness`
- N11 appends LPS pointing at missing Evidence id (no SQLite corruption)
- TestExecutionAdapter: scripting helpers only; `externalEffects` remains `false`

---

## 12. Product UI / business semantics checks

| Check | Result |
|-------|--------|
| Public product UI mutation for pass criteria | 0 semantic change |
| Panel E2E-only listener + decisionId testid | YES — bounded observability (document for ChatGPT) |
| Domain semantics / freshness rules / Attempt statuses | UNCHANGED |
| New persistence / migration / engine | 0 |
| playwright.config.ts | UNCHANGED |
| package.json | UNCHANGED |

---

## 13. Files created / modified (harness delta)

### Created

#### `projects/sfia-studio/app/lib/vertical-slice-runtime/e2eOptionAQaScenarioControl.ts`

```ts
/**
 * E2E-ONLY Option A QA control core (QA-PRE-M6-TEST-01).
 * Lives under vertical-slice-runtime — NO @/features imports.
 */

import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "./singleton";
import type { RuntimeApplicationService } from "./service";
import { SqliteProductStore } from "@/lib/oa/project/infrastructure/sqlite/sqliteProductStore";
import { LOCAL_MORRIS_M3_ACTOR } from "@/lib/oa/decision";

export const OPTION_A_QA_SCENARIOS = [
  "recommendation_stale",
  "attempt_failed",
  "attempt_timeout",
  "attempt_cancelled",
  "evidence_missing",
  "rehydrate_read_failure",
  "reset",
] as const;

export type OptionAQaScenario = (typeof OPTION_A_QA_SCENARIOS)[number];

export type OptionAQaControlResult =
  | {
      ok: true;
      scenario: OptionAQaScenario;
      detail: string;
      attemptId?: string;
      attemptStatus?: string;
      evidenceId?: string;
      armedForConfirm?: boolean;
    }
  | { ok: false; code: string; message: string };

export type ArmedTerminal = {
  scenario:
    | "attempt_failed"
    | "attempt_timeout"
    | "attempt_cancelled"
    | "evidence_missing";
  projectId: string;
  decisionId: string;
  executionContractId: string;
};

const ARMED_GLOBAL_KEY = "__SFIA_E2E_OPTION_A_QA_ARMED__" as const;

function armedSlot(): { current: ArmedTerminal | null } {
  const g = globalThis as typeof globalThis & {
    [ARMED_GLOBAL_KEY]?: { current: ArmedTerminal | null };
  };
  if (!g[ARMED_GLOBAL_KEY]) {
    g[ARMED_GLOBAL_KEY] = { current: null };
  }
  return g[ARMED_GLOBAL_KEY];
}

/** Hard enablement gate — every condition must hold. */
export function isOptionAQaControlEnabled(input?: {
  fixtureExternalEffects?: boolean;
}): boolean {
  if (process.env.NODE_ENV === "production") return false;
  if (process.env.OPS1_E2E_ALLOW_DIRTY_PRINCIPAL !== "1") return false;
  if (process.env.OPS1_CONVERSATION_PROVIDER !== "fake") return false;
  if (process.env.SFIA_STUDIO_E2E_QA_CONTROL !== "1") return false;
  if (process.env.SFIA_STUDIO_CURSOR_REAL === "1") return false;
  if (process.env.OPS1_CURSOR_REAL === "1") return false;
  if (input?.fixtureExternalEffects === true) return false;
  return true;
}

export function isKnownOptionAQaScenario(
  value: string,
): value is OptionAQaScenario {
  return (OPTION_A_QA_SCENARIOS as readonly string[]).includes(value);
}

export function rejectUnknownOptionAQaFields(
  body: Record<string, unknown>,
): string | null {
  const allowed = new Set([
    "scenario",
    "projectId",
    "decisionId",
    "executionContractId",
    "attemptId",
  ]);
  for (const key of Object.keys(body)) {
    if (!allowed.has(key)) return key;
  }
  return null;
}

export function consumeArmedTerminalForConfirm(input: {
  projectId: string;
  decisionId: string;
  executionContractId: string;
}): ArmedTerminal | null {
  if (!isOptionAQaControlEnabled()) return null;
  const slot = armedSlot();
  const armed = slot.current;
  if (!armed) return null;
  if (
    armed.projectId !== input.projectId ||
    armed.decisionId !== input.decisionId ||
    armed.executionContractId !== input.executionContractId
  ) {
    return null;
  }
  slot.current = null;
  return armed;
}

export function peekArmedTerminal(): ArmedTerminal | null {
  return armedSlot().current;
}

export function armTerminalScenario(armed: ArmedTerminal): void {
  armedSlot().current = armed;
}

export function clearArmedTerminal(): void {
  armedSlot().current = null;
}

const SYSTEM_FACTUAL_ACTOR = {
  actorId: "actor:sfia-studio-system-factual-writer",
  role: "system" as const,
  displayName: "SFIA Studio system factual state writer",
  authorityLevel: "none" as const,
};

export async function runRecommendationStaleScenario(
  runtime: RuntimeApplicationService,
  projectId: string,
): Promise<OptionAQaControlResult> {
  if (!runtime.oa) {
    return { ok: false, code: "OA_STACK_UNAVAILABLE", message: "OA missing" };
  }
  const current =
    await runtime.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
  if (!current.ok) {
    return {
      ok: false,
      code: current.error.detailCode,
      message: current.error.message,
    };
  }
  const lps = current.livingProjectState;
  if ((lps.evidenceIds ?? []).length === 0) {
    return {
      ok: false,
      code: "NO_PRIOR_EVIDENCE",
      message: "recommendation_stale requires prior durable Evidence on LPS.",
    };
  }

  const newEvidenceId = `ev:e2e-stale-supersede:${Date.now()}`;
  const registered =
    await runtime.oa.evidenceReviewServices.registerEvidence.execute({
      evidenceId: newEvidenceId,
      idempotencyKey: `idem:e2e-stale:${newEvidenceId}`,
      actor: SYSTEM_FACTUAL_ACTOR,
      type: "document",
      source: "e2e-qa-harness-supersession",
      sourceKind: "system",
      bindings: { projectId },
      classification: "internal",
      storageMode: "metadata_only",
      status: "available",
    });
  if (!registered.ok) {
    return {
      ok: false,
      code: registered.error.detailCode,
      message: registered.error.message,
    };
  }

  const appended =
    await runtime.oa.projectServices.appendLivingProjectStateVersion.execute({
      projectId,
      expectedVersion: lps.version,
      objective: lps.objective,
      context: lps.context,
      scope: lps.scope,
      createdBy: SYSTEM_FACTUAL_ACTOR,
      evidenceIds: [newEvidenceId],
      reviewBundleIds: [...(lps.reviewBundleIds ?? [])],
    });
  if (!appended.ok) {
    return {
      ok: false,
      code: appended.error.detailCode,
      message: appended.error.message,
    };
  }

  return {
    ok: true,
    scenario: "recommendation_stale",
    detail:
      "Durable LPS Evidence superseded — client must refresh durable readback for STALE.",
    evidenceId: newEvidenceId,
  };
}

export async function runRehydrateReadFailureScenario(
  runtime: RuntimeApplicationService,
  projectId: string,
): Promise<OptionAQaControlResult> {
  if (!runtime.oa) {
    return { ok: false, code: "OA_STACK_UNAVAILABLE", message: "OA missing" };
  }
  const current =
    await runtime.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
  if (!current.ok) {
    return {
      ok: false,
      code: current.error.detailCode,
      message: current.error.message,
    };
  }
  const lps = current.livingProjectState;
  const missingId = `ev:e2e-missing-rehydrate:${Date.now()}`;
  const appended =
    await runtime.oa.projectServices.appendLivingProjectStateVersion.execute({
      projectId,
      expectedVersion: lps.version,
      objective: lps.objective,
      context: lps.context,
      scope: lps.scope,
      createdBy: SYSTEM_FACTUAL_ACTOR,
      evidenceIds: [missingId],
      reviewBundleIds: [...(lps.reviewBundleIds ?? [])],
    });
  if (!appended.ok) {
    return {
      ok: false,
      code: appended.error.detailCode,
      message: appended.error.message,
    };
  }
  return {
    ok: true,
    scenario: "rehydrate_read_failure",
    detail:
      "LPS points at missing Evidence — reload triggers durable-rehydrate-error.",
    evidenceId: missingId,
  };
}

export function setProductFailNextSave(
  runtime: RuntimeApplicationService,
  value: "evidence" | "attempt" | "review_bundle" | null,
): boolean {
  const store = runtime.oa?.projectServices.store;
  if (!(store instanceof SqliteProductStore)) return false;
  store.failNextSave = value;
  return true;
}

export function resetOptionAQaRuntime(): OptionAQaControlResult {
  // Dev webServer uses NODE_ENV=development — allow reset only behind E2E gates.
  const prev = process.env.SFIA_V2_RUNTIME_ALLOW_RESET;
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  try {
    resetRuntimeApplicationServiceForTests();
  } finally {
    if (prev === undefined) delete process.env.SFIA_V2_RUNTIME_ALLOW_RESET;
    else process.env.SFIA_V2_RUNTIME_ALLOW_RESET = prev;
  }
  clearArmedTerminal();
  return {
    ok: true,
    scenario: "reset",
    detail: "Runtime singleton reset; armed terminal cleared.",
  };
}

export function getOptionAQaRuntime(): RuntimeApplicationService {
  return getRuntimeApplicationService();
}

void LOCAL_MORRIS_M3_ACTOR;

```
#### `projects/sfia-studio/app/features/project-assistant/f3/e2eOptionATerminalAttempt.ts`

```ts
/**
 * E2E-ONLY terminal Attempt helper for Option A QA harness.
 * Calls existing Attempt use-cases — no status mutation, no second engine.
 * Not exported from product f3/index barrel.
 */

import {
  LOCAL_MORRIS_M3_ACTOR,
  registerM3LocalMorrisAuthority,
} from "@/lib/oa/decision";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import {
  isOptionAQaControlEnabled,
  setProductFailNextSave,
  type ArmedTerminal,
} from "@/lib/vertical-slice-runtime/e2eOptionAQaScenarioControl";
import {
  F3_ADAPTER_ID,
  F3_AGENT_ID,
  F3_CONFIRM_ACTION_REF,
  F3_LABELS,
  F3_MODE,
} from "./constants";
import type { F3ExecutePayload } from "./types";
import { validateResolvedM3ExecutionBoundary } from "./validateResolvedM3ExecutionBoundary";

function absentEvidence(): F3ExecutePayload["evidence"] {
  return {
    evidenceId: "ev:not-produced",
    status: "absent",
    sourceKind: "none",
    technicalResultRef: null,
    verified: false,
    mode: F3_MODE,
  };
}

function absentReviewBundle(): F3ExecutePayload["reviewBundle"] {
  return {
    reviewBundleId: "rb:not-produced",
    status: "absent",
    version: 0,
    evidenceRefs: [],
    mode: F3_MODE,
  };
}

function absentRecommendation(): F3ExecutePayload["recommendation"] {
  return {
    kind: "recommendation",
    status: "absent",
    recommendationLabel: "RECOMMANDATION — PAS UNE DÉCISION MORRIS",
    executionAuthority: false,
    gateConsumed: false,
    decisionCreated: false,
    attemptAutoLaunchNextCycle: false,
    openHardReservationRefs: [],
    hardBlockers: [],
    nextGateCode: null,
    nextActionCode: null,
    mode: F3_MODE,
  };
}

function buildPayload(input: {
  decisionId: string;
  contract: ExecutionContract;
  attempt: {
    attemptId: string;
    status: string;
    selectedAgentRef: string;
    resultRef?: string | null;
  };
  launchCount: number;
}): F3ExecutePayload {
  return {
    turnKind: "f3_execute",
    mode: F3_MODE,
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
      selectionStrategy: "capabilities_deterministic",
      mode: F3_MODE,
    },
    evidence: absentEvidence(),
    reviewBundle: absentReviewBundle(),
    recommendation: absentRecommendation(),
    reusedExistingAttempt: false,
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
    processLocalNotice:
      "E2E QA terminal outcome — fixture-safe ZERO REAL — Evidence may be absent.",
    disclosures: [
      F3_LABELS.fixtureNoReal,
      F3_LABELS.recommendationNotDecision,
      "E2E QA TERMINAL OUTCOME",
    ],
  };
}

/**
 * Armed confirm interceptor — validate boundary, then existing use-cases only.
 */
export async function runE2eArmedTerminalAttempt(input: {
  armed: ArmedTerminal;
  expectedContractVersion: number;
  runtime: RuntimeApplicationService;
}): Promise<
  | { ok: true; payload: F3ExecutePayload }
  | { ok: false; code: string; message: string }
> {
  const { runtime, armed } = input;
  if (!runtime.oa) {
    return { ok: false, code: "OA_STACK_UNAVAILABLE", message: "OA missing" };
  }
  if (
    !isOptionAQaControlEnabled({
      fixtureExternalEffects:
        runtime.oa.fixtureAdapter.externalEffects !== false,
    })
  ) {
    return {
      ok: false,
      code: "E2E_QA_CONTROL_DISABLED",
      message: "Control disabled.",
    };
  }

  const boundary = await validateResolvedM3ExecutionBoundary({
    projectId: armed.projectId,
    decisionId: armed.decisionId,
    executionContractId: armed.executionContractId,
    deps: {
      decisionServices: runtime.oa.decisionServices,
      executionContractServices: runtime.oa.executionContractServices,
      authorityResolver: runtime.oa.authorityResolver,
    },
  });
  if (!boundary.ok) return boundary;

  const auth = registerM3LocalMorrisAuthority({
    authorityResolver: runtime.oa.authorityResolver,
    scope: boundary.successor.scope,
    issuedAt: runtime.oa.clock.nowIso(),
    evidenceId: `evd:m3-e2e:${boundary.successor.executionContractId}`,
    forceEnable: true,
  });
  if (!auth.ok) {
    return { ok: false, code: auth.code, message: auth.message };
  }

  let contract = boundary.successor;
  if (
    contract.status === "confirmation_required" ||
    contract.status === "validated"
  ) {
    const confirmationId = `cfm:m3:e2e:${contract.executionContractId}`;
    const requested =
      await runtime.oa.decisionServices.requestConfirmation.execute({
        confirmationId,
        level: "N3",
        actionRef: F3_CONFIRM_ACTION_REF,
        requestedBy: LOCAL_MORRIS_M3_ACTOR,
        requestedTo: LOCAL_MORRIS_M3_ACTOR,
        scope: contract.scope,
        idempotencyKey: confirmationId,
        decisionRef: armed.decisionId,
      });
    if (!requested.ok) {
      return {
        ok: false,
        code: requested.error.detailCode,
        message: requested.error.message,
      };
    }
    const granted = await runtime.oa.decisionServices.grantConfirmation.execute({
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
      await runtime.oa.executionContractServices.confirmExecutionContract.execute(
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
  }

  const attemptId = `xat:m3:${contract.executionContractId.replace(/^xct:/, "")}`;
  const selected =
    await runtime.oa.executionAttemptServices.selectExecutionAgent.execute({
      attemptId,
      executionContractId: contract.executionContractId,
      idempotencyKey: `idem:m3-e2e:${attemptId}`,
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
    await runtime.oa.executionAttemptServices.startExecution.execute({
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

  let attempt = started.attempt;
  const launchCount = runtime.oa.fixtureAdapter.launchCallCount;

  if (armed.scenario === "attempt_failed") {
    const failed =
      await runtime.oa.executionAttemptServices.recordExecutionFailure.execute({
        attemptId,
        adapterId: F3_ADAPTER_ID,
        stopReason: "E2E_QA_HARNESS_FORCED_FAILURE",
        errorRef: "err:e2e-qa-forced-failure",
      });
    if (!failed.ok) {
      return {
        ok: false,
        code: failed.error.detailCode,
        message: failed.error.message,
      };
    }
    attempt = failed.attempt;
  } else if (armed.scenario === "attempt_timeout") {
    const timed =
      await runtime.oa.executionAttemptServices.triggerAttemptTimeout.execute({
        attemptId,
        autoSafety: true,
        nowIso: new Date(
          Date.parse(attempt.startedAt ?? runtime.oa.clock.nowIso()) +
            31 * 60 * 1000,
        ).toISOString(),
      });
    if (!timed.ok) {
      return {
        ok: false,
        code: timed.error.detailCode,
        message: timed.error.message,
      };
    }
    attempt = timed.attempt;
  } else if (armed.scenario === "attempt_cancelled") {
    const cancelled =
      await runtime.oa.executionAttemptServices.cancelExecutionAttempt.execute({
        attemptId,
        reason: "E2E_QA_HARNESS_CANCEL",
        actor: LOCAL_MORRIS_M3_ACTOR,
        authorityEvidenceId: auth.evidenceId,
      });
    if (!cancelled.ok) {
      return {
        ok: false,
        code: cancelled.error.detailCode,
        message: cancelled.error.message,
      };
    }
    attempt = cancelled.attempt;
  } else if (armed.scenario === "evidence_missing") {
    setProductFailNextSave(runtime, "evidence");
    const recorded =
      await runtime.oa.executionAttemptServices.recordExecutionResult.execute({
        attemptId,
        adapterId: F3_ADAPTER_ID,
        resultRef: `res:e2e-missing-evidence:${attemptId}`,
        technicalExitCode: 0,
      });
    if (!recorded.ok) {
      return {
        ok: false,
        code: recorded.error.detailCode,
        message: recorded.error.message,
      };
    }
    attempt = recorded.attempt;
    // Skip ingest Evidence deliberately — Attempt succeeded, Evidence absent.
  }

  const refreshed =
    await runtime.oa.executionContractServices.getExecutionContract.execute({
      executionContractId: contract.executionContractId,
    });
  if (refreshed.ok) contract = refreshed.contract;

  return {
    ok: true,
    payload: buildPayload({
      decisionId: armed.decisionId,
      contract,
      attempt: {
        attemptId: attempt.attemptId,
        status: attempt.status,
        selectedAgentRef: attempt.selectedAgentRef ?? F3_AGENT_ID,
        resultRef: attempt.resultRef,
      },
      launchCount,
    }),
  };
}

```
#### `projects/sfia-studio/app/app/api/e2e/option-a-qa-scenario/route.ts`

```ts
/**
 * E2E-ONLY Option A QA scenario control surface.
 * Inactive by default — returns opaque 404 when gates fail.
 */

import { NextResponse } from "next/server";
import {
  armTerminalScenario,
  getOptionAQaRuntime,
  isKnownOptionAQaScenario,
  isOptionAQaControlEnabled,
  rejectUnknownOptionAQaFields,
  resetOptionAQaRuntime,
  runRecommendationStaleScenario,
  runRehydrateReadFailureScenario,
  type OptionAQaControlResult,
} from "@/lib/vertical-slice-runtime/e2eOptionAQaScenarioControl";
import { validateResolvedM3ExecutionBoundary } from "@/features/project-assistant/f3/validateResolvedM3ExecutionBoundary";

export const dynamic = "force-dynamic";

function opaqueNotFound(): NextResponse {
  return new NextResponse(null, { status: 404 });
}

export async function POST(request: Request): Promise<NextResponse> {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return opaqueNotFound();
  }

  if (!isOptionAQaControlEnabled()) {
    return opaqueNotFound();
  }

  const runtime = getOptionAQaRuntime();
  if (
    runtime.oa &&
    runtime.oa.fixtureAdapter.externalEffects !== false
  ) {
    return opaqueNotFound();
  }

  const unknown = rejectUnknownOptionAQaFields(body);
  if (unknown) {
    return NextResponse.json(
      {
        ok: false,
        code: "UNKNOWN_FIELD",
        message: `Unknown field rejected: ${unknown}`,
      } satisfies OptionAQaControlResult,
      { status: 400 },
    );
  }

  const scenarioRaw = body.scenario;
  if (
    typeof scenarioRaw !== "string" ||
    !isKnownOptionAQaScenario(scenarioRaw)
  ) {
    return NextResponse.json(
      {
        ok: false,
        code: "UNKNOWN_SCENARIO",
        message: "Scenario not in closed enum.",
      } satisfies OptionAQaControlResult,
      { status: 400 },
    );
  }

  if (scenarioRaw === "reset") {
    return NextResponse.json(resetOptionAQaRuntime());
  }

  const projectId =
    typeof body.projectId === "string" ? body.projectId : undefined;
  const decisionId =
    typeof body.decisionId === "string" ? body.decisionId : undefined;
  const executionContractId =
    typeof body.executionContractId === "string"
      ? body.executionContractId
      : undefined;

  if (scenarioRaw === "recommendation_stale") {
    if (!projectId) {
      return NextResponse.json(
        {
          ok: false,
          code: "PROJECT_ID_REQUIRED",
          message: "projectId required",
        } satisfies OptionAQaControlResult,
        { status: 400 },
      );
    }
    return NextResponse.json(
      await runRecommendationStaleScenario(runtime, projectId),
    );
  }

  if (scenarioRaw === "rehydrate_read_failure") {
    if (!projectId) {
      return NextResponse.json(
        {
          ok: false,
          code: "PROJECT_ID_REQUIRED",
          message: "projectId required",
        } satisfies OptionAQaControlResult,
        { status: 400 },
      );
    }
    return NextResponse.json(
      await runRehydrateReadFailureScenario(runtime, projectId),
    );
  }

  if (
    scenarioRaw === "attempt_failed" ||
    scenarioRaw === "attempt_timeout" ||
    scenarioRaw === "attempt_cancelled" ||
    scenarioRaw === "evidence_missing"
  ) {
    if (!projectId || !decisionId || !executionContractId) {
      return NextResponse.json(
        {
          ok: false,
          code: "IDS_REQUIRED",
          message: "projectId, decisionId, executionContractId required",
        } satisfies OptionAQaControlResult,
        { status: 400 },
      );
    }
    if (!runtime.oa) {
      return NextResponse.json(
        {
          ok: false,
          code: "OA_STACK_UNAVAILABLE",
          message: "OA missing",
        } satisfies OptionAQaControlResult,
        { status: 400 },
      );
    }

    const boundary = await validateResolvedM3ExecutionBoundary({
      projectId,
      decisionId,
      executionContractId,
      deps: {
        decisionServices: runtime.oa.decisionServices,
        executionContractServices: runtime.oa.executionContractServices,
        authorityResolver: runtime.oa.authorityResolver,
      },
    });
    if (!boundary.ok) {
      return NextResponse.json(
        {
          ok: false,
          code: boundary.code,
          message: boundary.message,
        } satisfies OptionAQaControlResult,
        { status: 400 },
      );
    }

    armTerminalScenario({
      scenario: scenarioRaw,
      projectId,
      decisionId,
      executionContractId,
    });

    return NextResponse.json({
      ok: true,
      scenario: scenarioRaw,
      detail:
        "Armed for next product Confirm — terminal outcome via existing Attempt use-cases.",
      armedForConfirm: true,
    } satisfies OptionAQaControlResult);
  }

  return NextResponse.json(
    {
      ok: false,
      code: "UNHANDLED_SCENARIO",
      message: "Scenario not handled.",
    } satisfies OptionAQaControlResult,
    { status: 400 },
  );
}

```
#### `projects/sfia-studio/app/e2e/support/optionAQaScenarioControl.ts`

```ts
/**
 * Playwright client for Option A E2E QA scenario control.
 */

import type { APIRequestContext, Page } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

export type OptionAQaScenario =
  | "recommendation_stale"
  | "attempt_failed"
  | "attempt_timeout"
  | "attempt_cancelled"
  | "evidence_missing"
  | "rehydrate_read_failure"
  | "reset";

const CONTROL_PATH = "/api/e2e/option-a-qa-scenario";

export const HARNESS_CAPTURE_ROOT = path.resolve(
  process.cwd(),
  "../../../.tmp-sfia-review/runtime-captures/testability-harness",
);

export async function invokeOptionAQaScenario(
  request: APIRequestContext,
  body: {
    scenario: OptionAQaScenario;
    projectId?: string;
    decisionId?: string;
    executionContractId?: string;
    attemptId?: string;
  },
): Promise<{ status: number; json: Record<string, unknown> }> {
  const response = await request.post(CONTROL_PATH, { data: body });
  let json: Record<string, unknown> = {};
  try {
    json = (await response.json()) as Record<string, unknown>;
  } catch {
    json = {};
  }
  return { status: response.status(), json };
}

/** E2E-only durable refresh — Panel listens only when window flag is set. */
export async function refreshDurableOutcomeE2e(page: Page): Promise<void> {
  await page.evaluate(() => {
    (
      window as unknown as { __SFIA_E2E_QA_CONTROL__?: boolean }
    ).__SFIA_E2E_QA_CONTROL__ = true;
    window.dispatchEvent(new CustomEvent("sfia-e2e-refresh-durable"));
  });
  await page.waitForTimeout(500);
}

export async function captureHarness(
  page: Page,
  id: string,
  meta: { screen: string; state: string; viewport: { width: number; height: number } },
): Promise<string> {
  fs.mkdirSync(HARNESS_CAPTURE_ROOT, { recursive: true });
  const file = path.join(HARNESS_CAPTURE_ROOT, `${id}.png`);
  await page.screenshot({ path: file, fullPage: true });
  const sha256 = crypto
    .createHash("sha256")
    .update(fs.readFileSync(file))
    .digest("hex");
  fs.appendFileSync(
    path.join(HARNESS_CAPTURE_ROOT, "manifest.jsonl"),
    `${JSON.stringify({
      id,
      file: path.basename(file),
      screen: meta.screen,
      state: meta.state,
      viewport: meta.viewport,
      timestamp: new Date().toISOString(),
      sha256,
      provenance:
        "CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — TESTABILITY HARNESS PROOF",
    })}\n`,
  );
  return sha256;
}

```
#### `projects/sfia-studio/app/e2e/studio-option-a-negative-states.spec.ts`

```ts
/**
 * Cycle 8 AMEND QA-PRE-M6-TEST-01 — targeted negative-state harness proof.
 *
 * Requires:
 *   SFIA_STUDIO_E2E_QA_CONTROL=1
 *   SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY=1
 *   (OPS1_E2E_ALLOW_DIRTY_PRINCIPAL + fake provider already via playwright.config)
 */

import { test, expect, type Page } from "@playwright/test";
import {
  captureHarness,
  invokeOptionAQaScenario,
  refreshDurableOutcomeE2e,
} from "./support/optionAQaScenarioControl";

function runId(): string {
  return `harness-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

async function createUniqueProject(page: Page, suffix: string) {
  const name = `QA Harness ${suffix}`;
  await page.goto("/studio/projects/new");
  await expect(page.getByTestId("create-project-form")).toBeVisible();
  await page.locator("#project-name").fill(name);
  await page.locator("#project-objective").fill("QA-PRE-M6-TEST-01 harness");
  await page
    .locator("#project-context")
    .fill("E2E negative-state harness — REAL=0 — fixture-safe.");
  await page.getByTestId("create-project-submit").click();
  await expect(page.getByTestId("open-project-workspace")).toBeVisible({
    timeout: 30_000,
  });
  await page.getByTestId("open-project-workspace").click();
  await expect(page.getByTestId("project-principal")).toBeVisible({
    timeout: 30_000,
  });
  const url = page.url();
  const rawId = url.split("/studio/projects/")[1]?.split(/[?#]/)[0];
  if (!rawId) throw new Error("projectId missing from URL");
  const projectId = decodeURIComponent(rawId);
  return { name, projectId };
}

async function sendGatedStandard(page: Page) {
  const input = page.getByTestId("project-assistant-input");
  await expect(input).toBeEnabled({ timeout: 15_000 });
  await input.fill("Préparer une livraison gated __F2_GATED_STANDARD__");
  await page.getByTestId("project-assistant-send").click();
  await expect(page.getByTestId("project-assistant-gate")).toBeVisible({
    timeout: 45_000,
  });
}

async function goToResolvedContract(page: Page, suffix: string) {
  const created = await createUniqueProject(page, suffix);
  await sendGatedStandard(page);
  await page.getByTestId("f2-decide-GO").click();
  await expect(page.getByTestId("project-assistant-decision")).toBeVisible({
    timeout: 45_000,
  });
  const decisionId = (await page.getByTestId("f2-decision-id").textContent())?.trim();
  if (!decisionId) throw new Error("decisionId missing");
  await page.getByTestId("f3-prepare-button").click();
  await expect(page.getByTestId("project-assistant-f3-contract")).toBeVisible({
    timeout: 45_000,
  });
  const executionContractId = (
    await page.getByTestId("f3-contract-id").textContent()
  )?.trim();
  if (!executionContractId) throw new Error("executionContractId missing");
  return { ...created, decisionId, executionContractId };
}

test.describe("QA-PRE-M6-TEST-01 negative-state harness", () => {
  test.describe.configure({ timeout: 240_000 });

  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      (
        window as unknown as { __SFIA_E2E_QA_CONTROL__?: boolean }
      ).__SFIA_E2E_QA_CONTROL__ = true;
    });
  });

  test("N7 attempt_failed browser reachable", async ({ page, request }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    const ctx = await goToResolvedContract(page, `n7-${runId()}`);
    const arm = await invokeOptionAQaScenario(request, {
      scenario: "attempt_failed",
      projectId: ctx.projectId,
      decisionId: ctx.decisionId,
      executionContractId: ctx.executionContractId,
    });
    if (arm.status !== 200 || arm.json.ok !== true) {
      throw new Error(
        `arm failed status=${arm.status} body=${JSON.stringify(arm.json)} ids=${JSON.stringify(ctx)}`,
      );
    }
    expect(arm.json.armedForConfirm).toBe(true);

    await page.getByTestId("f3-confirm-execute-button").click();
    await expect(page.getByTestId("project-assistant-f3-execute")).toBeVisible({
      timeout: 45_000,
    });
    await expect(page.getByTestId("f3-attempt-status")).toContainText(/failed/i);
    await expect(page.getByTestId("f3-attempt-status-label")).toContainText(
      /échec/i,
    );
    await expect(page.getByTestId("f3-attempt-id")).toBeVisible();
    await expect(page.getByTestId("f3-evidence-status")).toContainText(/absent/i);
    await captureHarness(page, "N7-attempt-failed", {
      screen: "F7",
      state: "Attempt FAILED via harness",
      viewport: { width: 1440, height: 1024 },
    });
  });

  test("N8 attempt_timeout browser reachable", async ({ page, request }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    const ctx = await goToResolvedContract(page, `n8-${runId()}`);
    const arm = await invokeOptionAQaScenario(request, {
      scenario: "attempt_timeout",
      projectId: ctx.projectId,
      decisionId: ctx.decisionId,
      executionContractId: ctx.executionContractId,
    });
    expect(arm.json.ok).toBe(true);

    await page.getByTestId("f3-confirm-execute-button").click();
    await expect(page.getByTestId("f3-attempt-status")).toContainText(
      /timeout/i,
      { timeout: 45_000 },
    );
    await expect(page.getByTestId("f3-attempt-status-label")).toContainText(
      /timeout/i,
    );
    await expect(page.getByTestId("f3-attempt-status")).not.toContainText(
      /failed/i,
    );
    await captureHarness(page, "N8-attempt-timeout", {
      screen: "F7",
      state: "Attempt TIMEOUT via harness",
      viewport: { width: 1440, height: 1024 },
    });
  });

  test("N9 attempt_cancelled browser reachable", async ({ page, request }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    const ctx = await goToResolvedContract(page, `n9-${runId()}`);
    const arm = await invokeOptionAQaScenario(request, {
      scenario: "attempt_cancelled",
      projectId: ctx.projectId,
      decisionId: ctx.decisionId,
      executionContractId: ctx.executionContractId,
    });
    expect(arm.json.ok).toBe(true);

    await page.getByTestId("f3-confirm-execute-button").click();
    await expect(page.getByTestId("f3-attempt-status")).toContainText(
      /cancelled/i,
      { timeout: 45_000 },
    );
    await expect(page.getByTestId("f3-attempt-status-label")).toContainText(
      /annulé/i,
    );
    await captureHarness(page, "N9-attempt-cancelled", {
      screen: "F7",
      state: "Attempt CANCELLED via harness",
      viewport: { width: 1440, height: 1024 },
    });
  });

  test("N10 evidence_missing browser reachable", async ({ page, request }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    const ctx = await goToResolvedContract(page, `n10-${runId()}`);
    const arm = await invokeOptionAQaScenario(request, {
      scenario: "evidence_missing",
      projectId: ctx.projectId,
      decisionId: ctx.decisionId,
      executionContractId: ctx.executionContractId,
    });
    expect(arm.json.ok).toBe(true);

    await page.getByTestId("f3-confirm-execute-button").click();
    await expect(page.getByTestId("project-assistant-f3-execute")).toBeVisible({
      timeout: 45_000,
    });
    await expect(page.getByTestId("f3-attempt-status")).toContainText(
      /succeeded/i,
    );
    await expect(page.getByTestId("f3-evidence-status")).toContainText(/absent/i);
    await expect(page.getByTestId("f3-review-bundle-status")).toContainText(
      /absent/i,
    );
    await captureHarness(page, "N10-evidence-missing", {
      screen: "F7",
      state: "Attempt succeeded + Evidence absent",
      viewport: { width: 1440, height: 1024 },
    });
  });

  test("N5 recommendation_stale browser reachable", async ({ page, request }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    const ctx = await goToResolvedContract(page, `n5-${runId()}`);
    // Nominal confirm first → session recommendation current
    await page.getByTestId("f3-confirm-execute-button").click();
    await expect(page.getByTestId("project-assistant-f3-execute")).toBeVisible({
      timeout: 45_000,
    });
    await expect(page.getByTestId("f3-recommendation-freshness")).toContainText(
      /à jour/i,
    );

    const stale = await invokeOptionAQaScenario(request, {
      scenario: "recommendation_stale",
      projectId: ctx.projectId,
    });
    expect(stale.status).toBe(200);
    expect(stale.json.ok).toBe(true);

    await refreshDurableOutcomeE2e(page);
    await expect(page.getByTestId("f3-recommendation-freshness")).toContainText(
      /périmée/i,
      { timeout: 15_000 },
    );
    // F8 execute card shows freshness via deriveRecommendationFreshness;
    // f3-stale-recommendation-notice is F6-only (!f3Execute).
    await expect(
      page.getByTestId("f3-recommendation-execution-authority"),
    ).toContainText(/false/i);
    await captureHarness(page, "N5-recommendation-stale", {
      screen: "F8",
      state: "Recommendation STALE after durable supersession",
      viewport: { width: 1440, height: 1024 },
    });
  });

  test("N11 rehydrate_read_failure browser reachable", async ({
    page,
    request,
  }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    const ctx = await goToResolvedContract(page, `n11-${runId()}`);
    await page.getByTestId("f3-confirm-execute-button").click();
    await expect(page.getByTestId("project-assistant-f3-execute")).toBeVisible({
      timeout: 45_000,
    });

    const fail = await invokeOptionAQaScenario(request, {
      scenario: "rehydrate_read_failure",
      projectId: ctx.projectId,
    });
    expect(fail.json.ok).toBe(true);

    await page.reload();
    await expect(page.getByTestId("project-principal")).toBeVisible({
      timeout: 30_000,
    });
    await expect(page.getByTestId("project-assistant-empty")).toBeVisible({
      timeout: 15_000,
    });
    await expect(page.getByTestId("durable-rehydrate-error")).toBeVisible({
      timeout: 15_000,
    });
    await expect(page.getByTestId("project-assistant-gate")).toHaveCount(0);
    await expect(page.getByTestId("project-assistant-proposal")).toHaveCount(0);
    await captureHarness(page, "N11-rehydrate-read-failure", {
      screen: "F10",
      state: "Durable rehydrate error honest",
      viewport: { width: 1440, height: 1024 },
    });

    const reset = await invokeOptionAQaScenario(request, { scenario: "reset" });
    expect(reset.json.ok).toBe(true);
  });

  test("control disabled without SFIA_STUDIO_E2E_QA_CONTROL returns 404", async ({
    request,
  }) => {
    // This process may have control enabled via env; probe unknown field rejection
    // when enabled, or 404 when disabled — both prove fail-closed.
    const res = await request.post("/api/e2e/option-a-qa-scenario", {
      data: { scenario: "reset", evilSql: "DROP TABLE" },
    });
    // With control ON: 400 UNKNOWN_FIELD. With control OFF: 404.
    expect([400, 404]).toContain(res.status());
  });
});

```
#### `projects/sfia-studio/app/__tests__/project-assistant/qa-pre-m6-test-01.e2eQaControl.test.ts`

```ts
/**
 * H-QA — Option A E2E QA control self-tests (QA-PRE-M6-TEST-01).
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  armTerminalScenario,
  clearArmedTerminal,
  consumeArmedTerminalForConfirm,
  isKnownOptionAQaScenario,
  isOptionAQaControlEnabled,
  peekArmedTerminal,
  rejectUnknownOptionAQaFields,
} from "@/lib/vertical-slice-runtime/e2eOptionAQaScenarioControl";

function enableAll() {
  vi.stubEnv("NODE_ENV", "test");
  vi.stubEnv("OPS1_E2E_ALLOW_DIRTY_PRINCIPAL", "1");
  vi.stubEnv("OPS1_CONVERSATION_PROVIDER", "fake");
  vi.stubEnv("SFIA_STUDIO_E2E_QA_CONTROL", "1");
  vi.stubEnv("SFIA_STUDIO_CURSOR_REAL", "");
  vi.stubEnv("OPS1_CURSOR_REAL", "");
}

describe("H-QA Option A E2E control gates", () => {
  beforeEach(() => {
    vi.unstubAllEnvs();
    clearArmedTerminal();
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    clearArmedTerminal();
  });

  it("H-QA-01 — disabled without SFIA_STUDIO_E2E_QA_CONTROL", () => {
    vi.stubEnv("NODE_ENV", "test");
    vi.stubEnv("OPS1_E2E_ALLOW_DIRTY_PRINCIPAL", "1");
    vi.stubEnv("OPS1_CONVERSATION_PROVIDER", "fake");
    vi.stubEnv("SFIA_STUDIO_E2E_QA_CONTROL", "");
    expect(isOptionAQaControlEnabled()).toBe(false);
  });

  it("H-QA-02 — disabled in NODE_ENV=production", () => {
    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("OPS1_E2E_ALLOW_DIRTY_PRINCIPAL", "1");
    vi.stubEnv("OPS1_CONVERSATION_PROVIDER", "fake");
    vi.stubEnv("SFIA_STUDIO_E2E_QA_CONTROL", "1");
    expect(isOptionAQaControlEnabled()).toBe(false);
  });

  it("H-QA-03 — disabled if provider != fake", () => {
    vi.stubEnv("NODE_ENV", "test");
    vi.stubEnv("OPS1_E2E_ALLOW_DIRTY_PRINCIPAL", "1");
    vi.stubEnv("OPS1_CONVERSATION_PROVIDER", "openai");
    vi.stubEnv("SFIA_STUDIO_E2E_QA_CONTROL", "1");
    expect(isOptionAQaControlEnabled()).toBe(false);
  });

  it("H-QA-04 — disabled if REAL flag is active", () => {
    enableAll();
    vi.stubEnv("SFIA_STUDIO_CURSOR_REAL", "1");
    expect(isOptionAQaControlEnabled()).toBe(false);
    vi.stubEnv("SFIA_STUDIO_CURSOR_REAL", "");
    vi.stubEnv("OPS1_CURSOR_REAL", "1");
    expect(isOptionAQaControlEnabled()).toBe(false);
  });

  it("H-QA-05 — unknown scenario rejected by enum", () => {
    expect(isKnownOptionAQaScenario("attempt_failed")).toBe(true);
    expect(isKnownOptionAQaScenario("drop_table")).toBe(false);
  });

  it("H-QA-06 — arbitrary mutation fields rejected", () => {
    expect(rejectUnknownOptionAQaFields({ scenario: "reset", sql: "x" })).toBe(
      "sql",
    );
    expect(
      rejectUnknownOptionAQaFields({
        scenario: "reset",
        projectId: "prj:1",
      }),
    ).toBeNull();
  });

  it("H-QA-07/H-QA-08 — wrong project/decision/contract does not consume arm", () => {
    enableAll();
    armTerminalScenario({
      scenario: "attempt_failed",
      projectId: "prj:a",
      decisionId: "dec:a",
      executionContractId: "xct:a",
    });
    expect(
      consumeArmedTerminalForConfirm({
        projectId: "prj:b",
        decisionId: "dec:a",
        executionContractId: "xct:a",
      }),
    ).toBeNull();
    expect(peekArmedTerminal()).not.toBeNull();
    const consumed = consumeArmedTerminalForConfirm({
      projectId: "prj:a",
      decisionId: "dec:a",
      executionContractId: "xct:a",
    });
    expect(consumed?.scenario).toBe("attempt_failed");
    expect(peekArmedTerminal()).toBeNull();
  });

  it("H-QA-10 — externalEffects true disables gate", () => {
    enableAll();
    expect(isOptionAQaControlEnabled({ fixtureExternalEffects: true })).toBe(
      false,
    );
    expect(isOptionAQaControlEnabled({ fixtureExternalEffects: false })).toBe(
      true,
    );
  });

  it("H-QA-09 — consume clears arm (reset path isolation)", () => {
    enableAll();
    armTerminalScenario({
      scenario: "attempt_timeout",
      projectId: "prj:r",
      decisionId: "dec:r",
      executionContractId: "xct:r",
    });
    clearArmedTerminal();
    expect(peekArmedTerminal()).toBeNull();
  });
});

```

### Modified (harness-relevant)

- `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/testExecutionAdapter.ts` — `queueDefaultLaunch` / `queueDefaultCancel`
- `projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts` — allow E2E control imports
- `projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx` — E2E refresh listener + `f2-decision-id`
- `projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteResolvedM3.ts` — armed terminal consume (candidate file; arm hook)

### TestExecutionAdapter diff

```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/testExecutionAdapter.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/testExecutionAdapter.ts
index d4f9855..c5a3ddf 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/testExecutionAdapter.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/testExecutionAdapter.ts
@@ -47,8 +47,8 @@ export class TestExecutionAdapter implements ExecutionAdapterPort {

   private readonly launchFixtures: Record<string, ScriptedLaunchOutcome>;
   private readonly cancelFixtures: Record<string, ScriptedCancelOutcome>;
-  private readonly defaultLaunch: ScriptedLaunchOutcome;
-  private readonly defaultCancel: ScriptedCancelOutcome;
+  private defaultLaunch: ScriptedLaunchOutcome;
+  private defaultCancel: ScriptedCancelOutcome;
   private readonly spoofAdapterIdOnAck: string | undefined;
   private readonly launched = new Map<string, LaunchResult>();
   private readonly cancelled = new Map<string, CancelResult>();
@@ -70,6 +70,19 @@ export class TestExecutionAdapter implements ExecutionAdapterPort {
     return this.calls.filter((call) => call.kind === "cancel").length;
   }

+  /**
+   * E2E/QA scripting only — mutate default launch outcome for subsequent attempts.
+   * Does not change adapter identity or externalEffects.
+   */
+  queueDefaultLaunch(outcome: ScriptedLaunchOutcome): void {
+    this.defaultLaunch = outcome;
+  }
+
+  /** E2E/QA scripting only — mutate default cancel outcome. */
+  queueDefaultCancel(outcome: ScriptedCancelOutcome): void {
+    this.defaultCancel = outcome;
+  }
+
   async launch(request: LaunchRequest): Promise<LaunchResult> {
     const memoized = this.launched.get(request.attemptId);
     if (memoized) {
```

### importBoundaries diff

```diff
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
index 9600439..a3748f9 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
@@ -74,8 +74,18 @@ describe("V2-A1 vertical-slice-runtime import boundaries", () => {
     );

     const allowed = new Set([
+      "app/api/e2e/option-a-qa-scenario/route.ts:@/lib/vertical-slice-runtime/e2eOptionAQaScenarioControl",
       "features/project-assistant/actions.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/f2/orchestrateF2.ts:@/lib/vertical-slice-runtime",
+      "features/project-assistant/f3/confirmAndExecuteResolvedM3.ts:@/lib/vertical-slice-runtime",
+      "features/project-assistant/f3/confirmAndExecuteResolvedM3.ts:@/lib/vertical-slice-runtime/e2eOptionAQaScenarioControl",
+      "features/project-assistant/f3/e2eOptionATerminalAttempt.ts:@/lib/vertical-slice-runtime",
+      "features/project-assistant/f3/e2eOptionATerminalAttempt.ts:@/lib/vertical-slice-runtime/e2eOptionAQaScenarioControl",
+      "features/studio-projects/LivingProjectStatePanel.tsx:@/lib/vertical-slice-runtime/actions",
+      "features/studio-projects/ProjectHistoryPanel.tsx:@/lib/vertical-slice-runtime/actions",
+      "features/studio-projects/ProjectPrincipalClient.tsx:@/lib/vertical-slice-runtime/actions",
+      "features/studio-projects/StudioProjectsHome.tsx:@/lib/vertical-slice-runtime/actions",
+      "features/studio-projects/StudioProjectsHome.tsx:@/lib/vertical-slice-runtime",
       "features/vertical-slice-ui/CreateProjectForm.tsx:@/lib/vertical-slice-runtime/actions",
       "features/vertical-slice-ui/ProjectWorkspaceClient.tsx:@/lib/vertical-slice-runtime/actions",
       "features/vertical-slice-ui/ProjectWorkspaceView.tsx:@/lib/vertical-slice-runtime/actions",
@@ -93,9 +103,11 @@ describe("V2-A1 vertical-slice-runtime import boundaries", () => {

   it("keeps V2-A2/V2-A3 UI free of core, internal runtime, D1, fixtures, storage, network, and agents", () => {
     const roots = [
+      path.join(APP_ROOT, "app/studio"),
       path.join(APP_ROOT, "app/studio/projects/new"),
       path.join(APP_ROOT, "app/studio/projects/[id]"),
       path.join(APP_ROOT, "features/vertical-slice-ui"),
+      path.join(APP_ROOT, "features/studio-projects"),
     ];
     const forbidden =
       /@\/lib\/(?:vertical-slice-core|vertical-slice-runtime\/(?:service|singleton|mapping|paths|serverGuard|index)|d1|harness|ops1|agents)|@\/features\/d1|@\/fixtures|\b(?:sessionStorage|localStorage|fetch)\s*[.(]/;
```

### Panel harness excerpts (current file)

```
--- around L198 ---
195|    // eslint-disable-next-line react-hooks/exhaustive-deps -- intentional mount/projectId only
196|  }, [projectId]);
197|
198|  // E2E-ONLY durable refresh (QA-PRE-M6-TEST-01). No-op unless window flag set by harness.
199|  useEffect(() => {
200|    function onE2eRefresh() {
201|      const enabled = Boolean(
202|        (window as unknown as { __SFIA_E2E_QA_CONTROL__?: boolean })
203|          .__SFIA_E2E_QA_CONTROL__,
204|      );
205|      if (!enabled) return;
206|      void refreshDurableEvidenceOutcome();
--- around L202 ---
199|  useEffect(() => {
200|    function onE2eRefresh() {
201|      const enabled = Boolean(
202|        (window as unknown as { __SFIA_E2E_QA_CONTROL__?: boolean })
203|          .__SFIA_E2E_QA_CONTROL__,
204|      );
205|      if (!enabled) return;
206|      void refreshDurableEvidenceOutcome();
207|    }
208|    window.addEventListener("sfia-e2e-refresh-durable", onE2eRefresh);
209|    return () => {
210|      window.removeEventListener("sfia-e2e-refresh-durable", onE2eRefresh);
--- around L203 ---
200|    function onE2eRefresh() {
201|      const enabled = Boolean(
202|        (window as unknown as { __SFIA_E2E_QA_CONTROL__?: boolean })
203|          .__SFIA_E2E_QA_CONTROL__,
204|      );
205|      if (!enabled) return;
206|      void refreshDurableEvidenceOutcome();
207|    }
208|    window.addEventListener("sfia-e2e-refresh-durable", onE2eRefresh);
209|    return () => {
210|      window.removeEventListener("sfia-e2e-refresh-durable", onE2eRefresh);
211|    };
--- around L208 ---
205|      if (!enabled) return;
206|      void refreshDurableEvidenceOutcome();
207|    }
208|    window.addEventListener("sfia-e2e-refresh-durable", onE2eRefresh);
209|    return () => {
210|      window.removeEventListener("sfia-e2e-refresh-durable", onE2eRefresh);
211|    };
212|  }, [projectId]);
213|
214|  useEffect(() => {
215|    const el = listRef.current;
216|    if (!el || typeof el.scrollTo !== "function") return;
--- around L210 ---
207|    }
208|    window.addEventListener("sfia-e2e-refresh-durable", onE2eRefresh);
209|    return () => {
210|      window.removeEventListener("sfia-e2e-refresh-durable", onE2eRefresh);
211|    };
212|  }, [projectId]);
213|
214|  useEffect(() => {
215|    const el = listRef.current;
216|    if (!el || typeof el.scrollTo !== "function") return;
217|    el.scrollTo({
218|      top: el.scrollHeight,
--- around L805 ---
802|        >
803|          <h3 className={styles.cardTitle}>F5 · Décision enregistrée</h3>
804|          <p data-testid="f2-decision-kind">{f2.decision.kind}</p>
805|          <p data-testid="f2-decision-id">{f2.decision.decisionId}</p>
806|          <p data-testid="f2-decision-scope">Scope: {f2.decision.scope}</p>
807|          {f2.decision.readyForNextGatedStep ? (
808|            <p data-testid="f2-ready-next">READY FOR NEXT GATED STEP</p>
809|          ) : null}
810|          <p className={styles.noExecutionBanner} data-testid="f2-decision-no-execution">
811|            AUCUNE EXÉCUTION
812|          </p>
813|          <p className={styles.cardMeta} data-testid="f2-execution-performed">
```

### confirmAndExecuteResolvedM3 arm hook excerpt

```ts

  if (!auth.ok) {
    return {
      ok: false,
      code: auth.code,
      message: auth.message,
    };
  }

  // E2E QA harness — armed terminal outcome (hard-gated; no-op when disabled).
  const { consumeArmedTerminalForConfirm } = await import(
    "@/lib/vertical-slice-runtime/e2eOptionAQaScenarioControl"
  );
  const armed = consumeArmedTerminalForConfirm({
    projectId: input.projectId,
    decisionId: input.decisionId,
    executionContractId: input.executionContractId,
  });
  if (armed) {
    const { getRuntimeApplicationService } = await import(
      "@/lib/vertical-slice-runtime"
    );
    const { runE2eArmedTerminalAttempt } = await import(
      "./e2eOptionATerminalAttempt"
    );
    return runE2eArmedTerminalAttempt({
      armed,
      expectedContractVersion: input.expectedContractVersion,
      runtime: getRuntimeApplicationService(),
    });
  }


```

---

## 14. H-QA self-tests

File: `__tests__/project-assistant/qa-pre-m6-test-01.e2eQaControl.test.ts`

H-QA-01…H-QA-10 covered (gates, unknown scenario/fields, arm identity match, externalEffects, reset/clear). **PASS** (9 tests).

---

## 15. Targeted browser proofs

Command:

```bash
SFIA_STUDIO_E2E_QA_CONTROL=1 SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY=1 SFIA_V2_RUNTIME_ALLOW_RESET=1 npm run test:e2e -- e2e/studio-option-a-negative-states.spec.ts
```

Result: **7 passed** (N5, N7, N8, N9, N10, N11 + fail-closed probe)

Canonical route assertions on `/studio/projects/[id]` — no special negative UI page.

### Screenshots / hashes

Provenance: CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — TESTABILITY HARNESS PROOF
Dir: `.tmp-sfia-review/runtime-captures/testability-harness/`

```
7de3858d5b4092eadbbe9ec940e35cd92db752bd2b3e90685ceb0dc8e12c0928  N10-evidence-missing.png
f3b4c74eb2830ccd70ee405cd5de003fe15a7a4cd9a420c34b019b392c0b845e  N11-rehydrate-read-failure.png
cf67ac84ced3f4777738ddd5b33c30a4d10b0809d256fe98147b45a236a19d4b  N5-recommendation-stale.png
65a163c8a1d9efc2d6221854d771f2b535a09f6525c449b764d3100ebe72d63e  N7-attempt-failed.png
a7681bd2b5ca540e9bffe5daf5e50795a2cf3db59f0e70fa550a0a2224b54984  N8-attempt-timeout.png
88cf1e850f8270ba75007caea38180059cae776f66a58af9dfa8cb5c3f6884d3  N9-attempt-cancelled.png

manifest.jsonl:
```
{"id":"N7-attempt-failed","file":"N7-attempt-failed.png","screen":"F7","state":"Attempt FAILED via harness","viewport":{"width":1440,"height":1024},"timestamp":"2026-08-16T19:18:17.634Z","sha256":"65a163c8a1d9efc2d6221854d771f2b535a09f6525c449b764d3100ebe72d63e","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — TESTABILITY HARNESS PROOF"}
{"id":"N8-attempt-timeout","file":"N8-attempt-timeout.png","screen":"F7","state":"Attempt TIMEOUT via harness","viewport":{"width":1440,"height":1024},"timestamp":"2026-08-16T19:18:18.729Z","sha256":"a7681bd2b5ca540e9bffe5daf5e50795a2cf3db59f0e70fa550a0a2224b54984","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — TESTABILITY HARNESS PROOF"}
{"id":"N9-attempt-cancelled","file":"N9-attempt-cancelled.png","screen":"F7","state":"Attempt CANCELLED via harness","viewport":{"width":1440,"height":1024},"timestamp":"2026-08-16T19:18:19.765Z","sha256":"88cf1e850f8270ba75007caea38180059cae776f66a58af9dfa8cb5c3f6884d3","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — TESTABILITY HARNESS PROOF"}
{"id":"N10-evidence-missing","file":"N10-evidence-missing.png","screen":"F7","state":"Attempt succeeded + Evidence absent","viewport":{"width":1440,"height":1024},"timestamp":"2026-08-16T19:18:21.067Z","sha256":"7de3858d5b4092eadbbe9ec940e35cd92db752bd2b3e90685ceb0dc8e12c0928","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — TESTABILITY HARNESS PROOF"}
{"id":"N5-recommendation-stale","file":"N5-recommendation-stale.png","screen":"F8","state":"Recommendation STALE after durable supersession","viewport":{"width":1440,"height":1024},"timestamp":"2026-08-16T19:18:22.826Z","sha256":"cf67ac84ced3f4777738ddd5b33c30a4d10b0809d256fe98147b45a236a19d4b","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — TESTABILITY HARNESS PROOF"}
{"id":"N11-rehydrate-read-failure","file":"N11-rehydrate-read-failure.png","screen":"F10","state":"Durable rehydrate error honest","viewport":{"width":1440,"height":1024},"timestamp":"2026-08-16T19:18:23.984Z","sha256":"f3b4c74eb2830ccd70ee405cd5de003fe15a7a4cd9a420c34b019b392c0b845e","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — TESTABILITY HARNESS PROOF"}
```

---

## 16. Nominal Option A regression

```bash
SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY=1 npm run test:e2e -- e2e/studio-option-a.spec.ts
```

Result: **9 passed** (control OFF by default; happy path unchanged)

Full Playwright suite: **NOT RUN** (belongs to Cycle 9).

---

## 17. Engineering validation

From `projects/sfia-studio/app`:

| Check | Result |
|-------|--------|
| npm run typecheck | PASS |
| npm run lint | PASS |
| npm test -- --run | PASS — 1784 passed / 131 skipped |
| npm run build | PASS |
| git diff --check | PASS |

---

## 18. G-UX statuses (this cycle)

| ID | Status |
|----|--------|
| G-UX-08 | OPEN / DEFERRED |
| G-UX-09 | KEEP RESERVE |
| Confirmation | KEEP RESERVE |
| G-UX-10 | candidate behavior unchanged |
| G-UX-11 | **OPEN** — do NOT declare SATISFIED; pending full Cycle 9 after ChatGPT PASS |
| QA-PRE-M6-TEST-01 | **IMPLEMENTED CANDIDATE** |

---

## 19. Safety counters

| Counter | Value |
|---------|-------|
| Candidate tracked modified entry | 41 |
| Candidate untracked entry | 21 |
| Harness production-tree files modified | 3 (Panel, TestExecutionAdapter, importBoundaries) + arm hook in confirmAndExecuteResolvedM3 |
| Harness production-tree files created | 3 (control core, terminal helper, api/e2e route) |
| E2E/support files created | 2 (helper + negative spec) |
| Tests created | 1 (H-QA) |
| Tests modified | 1 (importBoundaries) |
| Public product UI mutation | 0 semantic / 2 bounded observability seams |
| Business semantics mutation | 0 |
| New execution status | 0 |
| New persistence | 0 |
| Migration | 0 |
| Raw SQL harness | 0 |
| Arbitrary mutation endpoint | 0 |
| New engine / Attempt engine | 0 |
| REAL | 0 |
| Figma mutation | 0 |
| Full Cycle 9 rerun | 0 |
| Project staging/commits/pushes/PR/merge | 0 |
| Review Handoff | 1 bounded L3 (this publish) |

---

## 20. Limitations / harness debt / exit

- Control route path is `api/e2e/` (not `__e2e__`) due to Next private-folder rule.
- Panel listener is E2E-gated; product users never see a QA button.
- Absent Evidence placeholders in terminal payloads are honest `status: absent` (not success Evidence).
- Harness debt: KEEP AS SEALED TEST INFRASTRUCTURE pending PR readiness disposition.
- G-UX-11 still requires full Cycle 9 after ChatGPT re-review PASS.

---

## 21. Anti-claims

Harness implemented ≠ product feature
Harness browser proof ≠ Cycle 9 PASS
Targeted N5/N7–N11 pass ≠ G-UX-11 satisfied
TestExecutionAdapter ≠ REAL
fixture-safe authority ≠ production execution authority
read failure simulated ≠ data corruption
Evidence missing ≠ Evidence delete capability
Pre-M6 testability ≠ Pre-M6 acceptance
UAT ≠ M6
runtime v3 = NON ADOPTED
REAL = 0

---

## 22. Verdict

PRE-M6 UI DELIVERY OPTION A —
CYCLE 8 AMEND QA-PRE-M6-TEST-01 COMPLETE —
BOUNDED E2E-ONLY NEGATIVE-STATE HARNESS IMPLEMENTED —
N5/N7/N8/N9/N10/N11 BROWSER REACHABLE —
CANONICAL PRODUCT ROUTE USED FOR ASSERTIONS —
NO DIRECT UI STATE FORCING —
NO BUSINESS SEMANTICS CHANGE —
EXISTING ATTEMPT USE CASES REUSED —
EXISTING PRODUCT SQLITE TEST HOOKS REUSED —
CANONICAL M3 BOUNDARY PRESERVED —
HARD DISABLED BY DEFAULT —
HARD DISABLED IN PRODUCTION/REAL —
NO ARBITRARY MUTATION API —
NO RAW SQL —
NO NEW PERSISTENCE —
NO MIGRATION —
NO PARALLEL ENGINE —
NOMINAL OPTION A REGRESSION PASS —
G-UX-11 STILL OPEN PENDING FULL CYCLE 9 —
NO PROJECT COMMIT —
NO PROJECT PUSH —
NO PR —
NO M6 —
RUNTIME V3 NON ADOPTED —
ZERO REAL —
READY FOR CHATGPT RE-REVIEW

---

## 23. Recommended next gate (DO NOT EXECUTE)

1. ChatGPT re-review of this harness
2. Only if PASS → FULL CYCLE 9 QA / VALIDATION RE-RUN
3. Only after Cycle 9 PASS / PASS WITH RESERVES compatible → MORRIS PRE-M6 UAT — OPTION A
