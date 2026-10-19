# REVIEW PACK FULL — CRITICAL
# D-P6-SHE-01 — SINGLE HUMAN EXECUTE — TARGETED CRITICAL CORRECTION
# EC / HD / AUTHORITY BINDING

**Timestamp (UTC):** 2026-10-19T10:12:00Z
**Repository:** mcleland147/sfia-workspace
**Worktree:** `/Users/morris/Projects/sfia-workspace-p6-she-delivery-476b1c20`
**Branch:** `delivery/sfia-studio-p6-single-human-execute`
**HEAD (Delivery, uncommitted candidate):** `476b1c2065991e05cca298f6669d85b62a07ced3`
**origin/main:** `476b1c2065991e05cca298f6669d85b62a07ced3` (identical baseline)
**Prior handoff (Delivery candidate v1):** commit `00a064c4b16dca05f8d8a34eb5cb801c6d1a3cbc` / blob `f04c095621275bbc94740e4e66277c3a98e3d242`
**Product Git status:** Delivery candidate **NON COMMITTÉ** (intentional — no Product commit/push/PR this cycle)
**GO Morris:** Explicit GO for Critical corrections identified in ChatGPT review of D-P6-SHE-01 Delivery (2026-10-19)
**Cycle:** 8 — Delivery / implémentation
**Profil SFIA:** CRITICAL
**Justification:** Corrects human consent ↔ durable contract ↔ HumanDecision ↔ effective authority before ExecutionAttempt
**Macro:** STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
**Chantier:** P6-SINGLE-HUMAN-EXECUTE-INTEGRATED-DELIVERY
**Milestone:** P6 — GLOBAL INTEGRATED PRODUCT QA
**Capability:** V3-F05 (connexes V3-F11 / V3-F12 / V3-F14)
**Typologie:** EVOL / CORRECTION PRODUCT

---

## 1. Convergence Pre-check

| Item | State |
|------|-------|
| V3-F05 | Conversation → décision → exécution |
| Option B | KEEP — integrated on main |
| Architecture SHE | KEEP — no second engine |
| OA Backbone / EC / HD / Confirm / Inspect / Authorize / Attempt / Cursor Gateway / Product currentness | KEEP |
| Runtime v3 | NON ADOPTED |
| Product Git Integration | NOT READY (pending Critical re-review GO) |
| P6 GLOBAL PASS | NON acquis |
| Debt TOOL-FIRST-REAL-NOWRITE-ENFORCEMENT | OPEN (conserved) |

**KEEP:** SHE Delivery candidat + Option B coordinators.
**ADAPT:** EC/HD binding semantics, supersession effect equivalence, inspection admission order, currentness on structural path, retry/idempotence, targeted tests.
**REPLACE:** none.

**Exit target:** inspected contract effects ≡ decided effects ≡ authorized effects (deterministic tested scope).

---

## 2. GO Morris consommé

GO Critical Correction D-P6-SHE-01 (2026-10-19):
- Correct existing Delivery candidate — do not rebuild
- Address C1 (EC inspecté ≡ HD ≡ successor) and C2 (HD ≠ ACCEPT_PREPARE)
- Address R1–R5 (retry, structural currentness, concurrency, conversational prep, materiality domain)
- Publish Review Pack FULL + L3 handoff
- NO Product commit/push/PR/merge; NO Cursor REAL; NO OpenAI LIVE; NO HQA mutation; NO doctrine edits; NO PRR digest refresh

---

## 3. Root causes C1 / C2 (prior candidate)

### C1 — Effect equivalence not proven
Prior sequence: verify initial → build GenericMissionSubject → record HD → create `xct:she-hd:…` → inspect successor → confirm/authorize.
Gap: successor effects were not compared to the inspected predecessor projection with a reusable OA comparator. Fingerprint change alone was treated as lifecycle noise, not as proof of effect identity. Material fields could theoretically diverge during supersede without a hard STOP before Cursor eligibility.

### C2 — HD option not faithful to Exécuter
Prior code recorded `GENERIC_MISSION_OPTION_ACCEPT_PREPARE` ("Accepter — autoriser la préparation") after PREPARE was already complete. The Pilote click authorizes an *inspected contract and its presented effects*, not a fictional PREPARE accept. Risk: non-representative HumanDecision, silent semantic drift, retrospective option never presented.

---

## 4. Corrections applied

### C2 — HumanDecision faithful to Exécuter
- New option (additive, historical HDs unchanged):
  - `GENERIC_MISSION_OPTION_AUTHORIZE_INSPECTED_EXECUTE` = `opt:generic-mission:authorize-inspected-execute`
  - Label: "Exécuter — autoriser le contrat inspecté et ses effets présentés"
- `GENERIC_MISSION_SHE_EXECUTE_PRESENTED_OPTIONS` seals presentation with AUTHORIZE / REFUSE / REQUEST_AMEND (not ACCEPT_PREPARE).
- `isGenericMissionAcceptedAuthorityOption` accepts both ACCEPT_PREPARE (legacy PREPARE path) and AUTHORIZE_INSPECTED_EXECUTE (SHE Execute).
- `verifyGenericMissionHumanDecisionForPrepare`: PREPARE still requires ACCEPT_PREPARE; accepted-authority helper recognizes both.
- SHE path records **only** AUTHORIZE_INSPECTED_EXECUTE; asserts option match post-record (`SHE_HD_OPTION_MISMATCH`).
- Record CR-02 preserved: ACCEPT_PREPARE path never trusts subject field overrides; SHE authorize path may re-apply inspected-EC effectsOverride only when selected option + optionRefs include AUTHORIZE_INSPECTED_EXECUTE.

### C1 — EC / HD / successor binding
Order (critical):
1. Bind click identity: projectId + executionContractId + expectedVersion + expectedSemanticFingerprint
2. Project inspected material effects from OA contract (**before** HD)
3. Attest disclosure on **initial** contract (`inspectExecutionContract`) — empty facts fail closed
4. `assertSheProductCurrentness` (STRUCTURAL + NON_STRUCTURAL) — never skip solely because decisionRefs will be populated
5. STRUCTURAL empty refs → seal SHE options → record AUTHORIZE_INSPECTED_EXECUTE → effect-preserving supersede (omit material fields so OA copies predecessor) → compareSuccessorToInspected → validate → re-inspect successor with same facts
6. Confirm (if confirmation_required) with `skipMaterialityRevalidation=true` **only after** assertSheProductCurrentness proved CURRENT
7. Authorize; **no Attempt** in SHE action (caller governed Select/Start separately)

Equivalence comparator: `compareContractMaterialEffectsForSheBinding` — projectId, cycle, objective, expectedOutcome, scope narrative/in/out, intentKind, artifactType, requestedOperation, expectedOutputs, requiredCapabilities, stopConditions, reversibilityExpectation, OA reversibility, risks, reservations, materiality, repositoryBindingIdentity, pathRoot.
Allowed successor deltas: decisionRefs, binding metadata (`sheBound*`, missionSubjectId, presentationDigest, sheAuthorizeOptionId), status/version/fingerprint, refreshed `productCurrentness` stamp post-HD LPS bump.
On material divergence: `SHE_SUCCESSOR_EFFECTS_DIVERGED` — no authorize / no Cursor.

### Currentness (R2)
- NON_STRUCTURAL: full `revalidateMaterialityAgainstCurrentProduct`
- STRUCTURAL: live LPS version + doctrineDigest + activeCycle + projectId + repository identity/pathRoot vs stamped PREPARE anchors
- After HD, successor refreshes `productCurrentness` from live Product (Record may bump LPS) so resume does not false-stale

### Retry / concurrency (R1/R3)
- Successor id deterministic from predecessor + decisionId; load-existing + effect compare = resume
- Supersede idempotencyKey `idem:she-bind-hd:{newId}`; CONTRACT_ALREADY_EXISTS race → reload + compare
- Double Exécuter / concurrent Exécuter tests: one effective authority chain
- SHE itself creates **no** Attempt; Attempt remains governed path

### Continuity F2 / UX (R4)
- No mandatory Accept PREPARE before PREPARE
- ExecutionSurface: single Exécuter after inspect; Consulter non-authorizing; no extra Confirm CTA after Exécuter
- STRUCTURAL and NON_STRUCTURAL share Exécuter UX

### Materiality domain (R5)
- Bounded `executionMateriality.ts` adaptation only as required for SHE path compatibility — no semantic rewrite of shared domain

---

## 5. Transition diagram (before → after)

### BEFORE (deficient)
```
PREPARE (STRUCTURAL, empty refs)
  → Pilote Consulter / inspect UI
  → Exécuter
      → (optional attest?)
      → seal ACCEPT_PREPARE options
      → HD ACCEPT_PREPARE  ❌ non-representative
      → supersede xct:she-hd:…
      → inspect successor
      → confirm / authorize
      → (effects equivalence not asserted)
```

### AFTER (corrected)
```
Nora PREPARE (no HD)
  → Pilote INSPECT (disclosure)
  → Pilote EXECUTE (one click)
      → bind id/version/fingerprint (server OA truth)
      → project inspected effects
      → attest initial contract (presentedFactIds required)
      → assertSheProductCurrentness (always)
      → [STRUCTURAL empty refs]
            seal SHE options (AUTHORIZE_INSPECTED_EXECUTE)
            HD AUTHORIZE_INSPECTED_EXECUTE  ✅
            supersede effect-preserving + binding metadata
            compareContractMaterialEffectsForSheBinding
            validate + re-inspect successor
      → Confirm if required (currentness already proven)
      → Authorize
      → STOP (executionAttemptCreated: false)
  → Caller: governed Select / Start (Fake in tests)
```

---

## 6. Files created / modified

### CREATED
1. `projects/sfia-studio/app/features/project-assistant/w2/singleHumanExecutePreparedContract.ts` (958 lines) — FULL below
2. `projects/sfia-studio/app/__tests__/project-assistant/p6.she.singleHumanExecute.d0.test.ts` (558 lines) — FULL below

### MODIFIED (Product)
- `w2/genericMissionSubject.ts` — option + SHE options + comparator
- `w2/recordGenericMissionHumanDecision.ts` — SHE-only effectsOverride on fresh re-seal; optionRefs validation
- `w2/verifyGenericMissionHumanDecisionForPrepare.ts` — accepted options both; PREPARE still ACCEPT_PREPARE
- `w2/actions.ts` — w2SingleHumanExecuteAction
- `w2/prepareGenericExecutionContractDraft.ts` — STRUCTURAL empty decisionRefs / deferred authority
- `f2/orchestrateF2.ts` — conversational prep continuity (no artificial HD-before-PREPARE)
- `lib/oa/execution-contract/domain/executionMateriality.ts` — bounded compatibility
- `pre-m6-product-ui/surfaces/ExecutionSurface.tsx` — Exécuter wiring
- `pre-m6-product-ui/surfaces/pilotExecutionPresentation.ts` — presentation

### MODIFIED (tests requalified)

- `__tests__/**/p5.s03.durableExecutionActionContinuity.ui.test.tsx`
- `__tests__/**/p5.s03.executionReconcileContinuity.ui.test.tsx`
- `__tests__/**/p5.s03.pilotExecutionPresentation.d0.test.ts`
- `__tests__/**/p6.r02.actionAvailability.d0.test.ts`
- `__tests__/**/p6.uic.unifiedInspectionContract.ui.test.tsx`
- `__tests__/**/p6.authorityChatFirstContinuity.d0.test.ts`
- `__tests__/**/p6.closureRegularization.repositoryCurrentness.d0.test.ts`
- `__tests__/**/p6.der16.genericNoraToolInvocation.d0.test.ts`
- `__tests__/**/p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts`
- `__tests__/**/p6.mHd01.authorityContinuityCorrection.d0.test.ts`
- `__tests__/**/p6.mHd01.genericMissionHumanDecision.d0.test.ts`
- `__tests__/**/p6.mHd02.pilotPresentationRecordBinding.d0.test.ts`
- `__tests__/**/p6.projectScopedCursorSelection.d0.test.ts`
- `__tests__/**/p6.toolFirst.safetyClosureR1R2.d0.test.ts`

### PROTECTED — unchanged (verified by scope)
Build Doctrine, Roadmap, C1 docs, Doctrine v3 30–37, Template SFIA, Prompt catalog, `.sfia/`, Automations, publication scripts, structuring persistence schema, HQA datasets/DBs, Cursor REAL adapters, PRR digests (not refreshed).

---

## 7. Mapping HD → contract

| Field | Source |
|-------|--------|
| selectedOptionId | `opt:generic-mission:authorize-inspected-execute` |
| presentationDigest | Sealed from SHE optionRefs + inspected EC projection effects |
| missionSubjectId | From contract inputs or newly sealed |
| rationale | Includes inspected EC id, version, fingerprint |
| decisionRefs on successor | `[decisionId]` |
| sheBoundFromExecutionContractId/Version/SemanticFingerprint | Predecessor identity at click |
| sheAuthorizeOptionId | AUTHORIZE_INSPECTED_EXECUTE |
| effects on successor | Copied from predecessor by OA supersede (material fields omitted in command) |
| equivalence gate | `compareContractMaterialEffectsForSheBinding(inspected, successor)` |

---

## 8. Currentness / Confirm / Authorize

- Currentness asserted **before** HD bind and before authorize path continues.
- `skipMaterialityRevalidation=true` on Confirm only after `assertSheProductCurrentness` succeeded in the same Exécuter action.
- UNKNOWN: inspectable, Execute refused (`SHE_UNKNOWN_BLOCKS_EXECUTE`).
- No Attempt after pre-launch refuse.
- N3 / local authority registration does not replace Morris protected-path gates (conserved debt on REAL no-write).

---

## 9. Retry / restart / concurrency

| Phase | Durable truth | Resume |
|-------|---------------|--------|
| P0 before inspect | draft EC | re-inspect required |
| P1 inspected, no HD | attestation on initial | Exécuter continues |
| P2 HD persisted, no successor | HD in OA | supersede create or race reload |
| P3–P4 successor | xct:she-hd + validated | load existing + effect compare |
| P5–P6 confirm/auth | confirmationRef / auth | resume without second HD |
| P7–P8 Attempt | outside SHE | governed reconcile idempotence |

Tests: double Exécuter idempotent; concurrent Exécuter one chain; absent Pilote refuse; fingerprint mismatch refuse; empty facts refuse.

---

## 10. Adversarial tests (SHE suite + related)

SHE file cases:
- A/D readiness structural does not block PREPARE
- B/D/E STRUCTURAL PREPARE without HD, empty refs, no Attempt
- A/I/K/L/V/W NON_STRUCTURAL + STRUCTURAL share Exécuter; HD option AUTHORIZE_INSPECTED_EXECUTE; effect equivalence; Fake Select
- J fingerprint mismatch → refuse
- H empty presented facts → refuse silent attest
- P double Exécuter idempotent
- T14 absent authenticatedPilote → refuse
- T07 incomplete disclosure → no HD/Confirm/Attempt
- T23 concurrent Exécuter → one authority chain

Plus requalified Option B / mHd01 (CR-02) / der16 / UI / currentness suites.

### Validation commands & exact counts (2026-10-19)

Working directory: `projects/sfia-studio/app`

1. Targeted Product suite (15 files): **184 passed / 0 failed / 0 skipped**
2. SHE alone: **9 passed**
3. SHE + UIC: **19 passed**
4. `npm run typecheck`: PASS (`tsc --noEmit`)
5. `npm run lint`: PASS (0 warnings/errors)
6. `npm run build`: PASS
7. `git diff --check`: PASS
8. Cursor REAL / OpenAI LIVE / HQA DB mutation: **not invoked**
9. Full vitest monorepo: not required for this Critical correction gate; targeted Product boundary proven

Env: `SFIA_STUDIO_CURSOR_REAL=0`; Product/HQA DB path env unset (harness temps).

---

## 11. Fake / Real qualification

| Boundary | Mode |
|----------|------|
| OA Product / HD / EC / Confirm / Auth / Attempt transitions | Deterministic Product path |
| Cursor Gateway | Fake Select adapters |
| Nora/OpenAI | Fake / not LIVE |
| Git mutation under Studio contract | Not exercised REAL |
| HQA AtelierNova | Not mutated |

**Entry level prior:** DETERMINISTIC DELIVERY CANDIDATE (209 targeted PASS reported earlier; Critical review NON ACCEPTED)
**Exit level this cycle:** CORRECTED DETERMINISTIC PRODUCT BOUNDARY PROVEN AT TESTED SCOPE
**Out of scope:** REAL BOUNDARY PROVEN; E2E REAL; SHE LIVE PASS; Cursor REAL no-write proven; HQA PASS; Runtime v3 ADOPTED; P6 GLOBAL PASS

**Allowed claims:** Correction candidate; deterministic tests verified; invariants tested.
**Forbidden claims:** SHE LIVE PASS; Cursor REAL no-write proven; HQA PASS; Runtime v3 ADOPTED.

---

## 12. PRR semantic impact (no digest refresh)

| Concern | Impact |
|---------|--------|
| HumanDecision option vocabulary | Additive option; historical ACCEPT_PREPARE unchanged |
| ExecutionContract supersede | Effect-preserving binding path; new supersessionReason `she_bind_authorize_inspected_execute_before_confirm` |
| Confirmation / Authorization | Same services; Confirm skip revalidation only after SHE currentness proof |
| Attempt / Cursor | Unchanged entry — SHE stops before Attempt |
| Currentness | Structural Execute now explicitly revalidates LPS/repo anchors |

PRR digests **not** refreshed this cycle (per GO).

---

## 13. Réserves / dettes / Morris gates remaining

**Reserves mitigated at deterministic scope:** C1, C2, R1–R5 (tested).
**Open debt:** TOOL-FIRST-REAL-NOWRITE-ENFORCEMENT OPEN.
**Morris gates remaining (distinct GOs):**
1. ChatGPT Critical re-review ACCEPT
2. Product Git Integration GO (commit/push/PR) — NOT this cycle
3. HQA / LIVE validation GO
4. P6 Exit GO
5. REAL Cursor / no-write proof GO

---

## 14. Exit proofs

1. STRUCTURAL PREPARE without HD → inspectable EC, empty decisionRefs
2. Exécuter records AUTHORIZE_INSPECTED_EXECUTE (not ACCEPT_PREPARE)
3. Successor material effects ≡ inspected predecessor (comparator)
4. Currentness on structural path before authorize
5. Incomplete disclosure / fingerprint mismatch / absent Pilote → no authority chain
6. Concurrent / double Exécuter → one chain; SHE creates no Attempt
7. Option B / mHd01 CR-02 still refuse forged subject overrides on ACCEPT_PREPARE path
8. Protected docs/scripts/adapters untouched

---

## 15. Verdict (Delivery candidate, deterministic)

**SINGLE HUMAN EXECUTE — TARGETED CRITICAL CORRECTION COMPLETE — EC / HD / AUTHORITY BINDING PROVEN AT DETERMINISTIC TESTED SCOPE — READY FOR CHATGPT CRITICAL RE-REVIEW.**

Product Git Integration: **NOT READY** until Critical re-review ACCEPT + distinct Morris GO.

---

## INSTRUCTION CHATGPT

Lire: `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`

Vérifier: nouveau commit/blob; Git Truth; C1/C2; HD fidèle au clic Exécuter; équivalence initial/successeur; currentness; reprise; idempotence; tests négatifs; absence d'architecture parallèle; contenu diff exploitable; Fake/Real; dette ouverte; gates Morris.

NE PAS générer de prompt Git Integration avant nouveau verdict Critical conforme.

---

# APPENDIX A — CREATED FILE: singleHumanExecutePreparedContract.ts (FULL)

```typescript

/**
 * D-P6-SHE-01 — Single Human Execute orchestration (Product path).
 *
 * Critical correction (C1/C2):
 *   - Inspect/attest the *initial* presented contract before HD.
 *   - HD option = AUTHORIZE_INSPECTED_EXECUTE (not ACCEPT_PREPARE).
 *   - Successor copies predecessor material effects; only decisionRefs /
 *     binding metadata may change. Equivalence is asserted.
 *   - Product currentness revalidated on every Execute (structural included).
 *
 * One explicit Pilote "Exécuter" gesture after inspectable PREPARE:
 *   1. Bind click to inspected contract identity (id + version + fingerprint)
 *   2. Attest presented facts on the initial contract
 *   3. STRUCTURAL empty refs → record HD (authorize-inspected-execute) +
 *      supersede with decisionRefs (effect-preserving), re-inspect successor
 *   4. Confirm (when required) → Authorize
 *   5. STOP before Attempt — caller runs governed reconcile/execute separately
 *
 * Does NOT: invent paths, elevate capability, bypass REAL no-write gate,
 * create Attempt, or launch Cursor.
 * UNKNOWN materiality remains fail-closed at Execute (INV-SHE-UNKNOWN-BLOCKS).
 */

import { createHash, randomBytes } from "node:crypto";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalAuthorityForExecutionClass,
} from "@/lib/oa/decision";
import {
  materialityFromContractConstraints,
  type ExecutionContract,
} from "@/lib/oa/execution-contract";
import { inspectExecutionContract } from "./inspectExecutionContract";
import { confirmExecutionContractForAuthorization } from "./confirmForAuthorization";
import { evaluateExecutionAuthorization } from "./authorizeExecutionContract";
import {
  analysisStubFromMaterialityFacts,
  parseStampedProductCurrentness,
  resolveAuthoritativeProductMateriality,
  revalidateMaterialityAgainstCurrentProduct,
} from "./resolveAuthoritativeProductMateriality";
import type { IntentAnalysisDto } from "../f2/types";
import {
  recordGenericMissionHumanDecision,
  sealGenericMissionForPresentation,
  type AuthenticatedPiloteForMissionDecision,
} from "./recordGenericMissionHumanDecision";
import {
  GENERIC_MISSION_OPTION_AUTHORIZE_INSPECTED_EXECUTE,
  GENERIC_MISSION_SHE_EXECUTE_PRESENTED_OPTIONS,
  assertExecutionContractInternalConsistency,
  compareContractMaterialEffectsForSheBinding,
  projectExecutionContractEffects,
} from "./genericMissionSubject";
import type { EvaluateExecutionAuthorizationResult } from "./types";

const SHE_BIND_HD_SUPERSESSION_REASON =
  "she_bind_authorize_inspected_execute_before_confirm" as const;

const SHE_BINDING_INPUT_KEYS = new Set([
  "sheDeferredStructuralAuthority",
  "verifiedGenericMissionHumanDecisionId",
  "missionSubjectId",
  "presentationDigest",
  "sheBoundAtExecute",
  "sheBoundFromExecutionContractId",
  "sheBoundFromVersion",
  "sheBoundFromSemanticFingerprint",
  "sheAuthorizeOptionId",
]);

export type SingleHumanExecutePreparedContractInput = {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly executionContractId: string;
  /** Exact version the Pilote saw when clicking Exécuter. */
  readonly expectedVersion: number;
  /** Exact semantic fingerprint of the presented contract version. */
  readonly expectedSemanticFingerprint: string;
  /**
   * Facts disclosed in the inspection exam UI. Execute carries attestation —
   * empty array fails closed (no silent attest).
   */
  readonly presentedFactIds: readonly string[];
  readonly forceLocalAuthority?: boolean;
  readonly authenticatedPilote?: AuthenticatedPiloteForMissionDecision;
};

export type SingleHumanExecutePreparedContractResult =
  | {
      readonly ok: true;
      readonly executionContractId: string;
      readonly contractVersion: number;
      readonly semanticFingerprint: string;
      readonly status: string;
      readonly humanDecisionCreated: boolean;
      readonly humanDecisionId: string | null;
      readonly humanDecisionOptionId: string | null;
      readonly confirmationRef: string | null;
      readonly authorization: EvaluateExecutionAuthorizationResult & {
        readonly ok: true;
      };
      readonly executionAttemptCreated: false;
      readonly supersededFromExecutionContractId: string | null;
      readonly code: "SHE_EXECUTE_AUTHORIZED";
    }
  | {
      readonly ok: false;
      readonly code: string;
      readonly message: string;
      readonly executionAttemptCreated: false;
      readonly humanDecisionCreated: boolean;
    };

function fail(
  code: string,
  message: string,
  humanDecisionCreated = false,
): SingleHumanExecutePreparedContractResult {
  return {
    ok: false,
    code,
    message,
    executionAttemptCreated: false,
    humanDecisionCreated,
  };
}

function successorIdFor(priorId: string, decisionId: string): string {
  const digest = createHash("sha256")
    .update(`she-bind-hd:${priorId}:${decisionId}`)
    .digest("hex")
    .slice(0, 16);
  return `xct:she-hd:${digest}`;
}

async function loadContract(
  oa: RuntimeOaStack,
  executionContractId: string,
): Promise<
  | { readonly ok: true; readonly contract: ExecutionContract }
  | { readonly ok: false; readonly code: string; readonly message: string }
> {
  const loaded =
    await oa.executionContractServices.getExecutionContract.execute({
      executionContractId,
    });
  if (!loaded.ok) {
    return {
      ok: false,
      code: loaded.error.detailCode,
      message: "Contrat d'exécution introuvable.",
    };
  }
  return { ok: true, contract: loaded.contract };
}

function projectContractOrThrow(contract: ExecutionContract):
  | { readonly ok: true; readonly projection: ReturnType<typeof projectExecutionContractEffects> }
  | { readonly ok: false; readonly code: string; readonly message: string } {
  const inputs = (contract.inputs ?? {}) as Record<string, unknown>;
  const internal = assertExecutionContractInternalConsistency({
    constraints: contract.constraints,
    inputs,
  });
  if (!internal.ok) {
    return {
      ok: false,
      code: "SHE_EC_INTERNAL_INCONSISTENT",
      message: `Représentation EC incohérente (${internal.reason}).`,
    };
  }
  return {
    ok: true,
    projection: projectExecutionContractEffects({
      projectId: contract.projectId,
      cycleInstanceId: contract.cycleInstanceId,
      decisionRefs: contract.decisionRefs,
      status: contract.status,
      version: contract.version,
      semanticFingerprint: contract.semanticFingerprint,
      expectedOutputs: contract.expectedOutputs,
      requiredCapabilities: contract.requiredCapabilities,
      stopConditions: contract.stopConditions,
      reversibility: contract.reversibility as
        | "reversible"
        | "partially_reversible"
        | "irreversible",
      constraints: contract.constraints,
      inputs,
    }),
  };
}

/**
 * Record AUTHORIZE_INSPECTED_EXECUTE HD and supersede with effect-preserving
 * successor. Idempotent on successor id.
 */
async function bindStructuralHdViaSupersede(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly contract: ExecutionContract;
  readonly inspectedProjection: ReturnType<
    typeof projectExecutionContractEffects
  >;
  readonly forceLocalAuthority?: boolean;
  readonly authenticatedPilote?: SingleHumanExecutePreparedContractInput["authenticatedPilote"];
}): Promise<
  | {
      readonly ok: true;
      readonly contract: ExecutionContract;
      readonly humanDecisionId: string;
      readonly humanDecisionCreated: boolean;
      readonly humanDecisionOptionId: string;
      readonly supersededFromExecutionContractId: string;
    }
  | {
      readonly ok: false;
      readonly code: string;
      readonly message: string;
      readonly humanDecisionCreated: boolean;
    }
> {
  const contractInputs = (input.contract.inputs ?? {}) as Record<
    string,
    unknown
  >;
  const factsRaw =
    contractInputs.materialityFacts &&
    typeof contractInputs.materialityFacts === "object"
      ? (contractInputs.materialityFacts as Record<string, unknown>)
      : null;
  const stub = analysisStubFromMaterialityFacts(factsRaw, contractInputs);
  const stampedIntentKind =
    typeof contractInputs.intentKind === "string"
      ? contractInputs.intentKind
      : stub.executionIntent?.intentKind ?? null;
  const scopeIn = Array.isArray(contractInputs.scopeIn)
    ? (contractInputs.scopeIn as string[])
    : stub.executionIntent?.scopeIn ?? [];
  const analysis = {
    ...stub,
    objective:
      typeof contractInputs.objective === "string"
        ? contractInputs.objective
        : stub.objective,
    expectedOutcome:
      typeof contractInputs.expectedOutcome === "string"
        ? contractInputs.expectedOutcome
        : stub.expectedOutcome,
    scope:
      typeof contractInputs.missionScopeNarrative === "string"
        ? contractInputs.missionScopeNarrative
        : stub.scope,
    risks: [...input.inspectedProjection.risks],
    reservations: [...input.inspectedProjection.reservations],
    stopConditions: [...input.inspectedProjection.stopConditions],
    executionIntent: {
      intentKind: stampedIntentKind ?? "other",
      scopeIn,
      requiredCapabilities: Array.isArray(
        contractInputs.proposedRequiredCapabilities,
      )
        ? (contractInputs.proposedRequiredCapabilities as string[])
        : stub.executionIntent?.requiredCapabilities ?? [],
    },
  };

  const proj = input.inspectedProjection;
  if (
    !proj.materiality ||
    (proj.materiality !== "structural" &&
      proj.materiality !== "non_structural" &&
      proj.materiality !== "unknown")
  ) {
    return {
      ok: false,
      code: "SHE_MATERIALITY_UNPROJECTABLE",
      message: "Matérialité contractuelle non projetable pour HD Execute.",
      humanDecisionCreated: false,
    };
  }

  const sheOptionRefs = GENERIC_MISSION_SHE_EXECUTE_PRESENTED_OPTIONS.map(
    (o) => o.optionId,
  );

  // Seal from Product+analysis with SHE optionRefs. Effects must align with the
  // inspected EC (compare after supersede). Do not pass subject field overrides
  // into Record's fresh re-seal (CR-02).
  // Seal effects from the inspected EC projection (C1) — Record re-applies them
  // only for authorize-inspected-execute (CR-02 ACCEPT_PREPARE path stays strict).
  const sheAnalysis = {
    ...analysis,
    objective: proj.objective || analysis.objective,
    expectedOutcome: proj.expectedOutcome || analysis.expectedOutcome,
    scope: proj.scopeNarrative || analysis.scope,
    outOfScope: [...proj.scopeOut],
    risks: [...proj.risks],
    reservations: [...proj.reservations],
    stopConditions: proj.stopConditions.filter(
      (s) => s !== "NO_EXECUTE_WITHOUT_EXPLICIT_AUTHORIZE",
    ),
    executionIntent: {
      intentKind: proj.intentKind ?? "other",
      scopeIn: [...proj.scopeIn],
      artifactType: proj.artifactType ?? undefined,
      requestedOperation: proj.requestedOperation ?? undefined,
      requiredCapabilities: [...proj.requiredCapabilities],
      expectedOutputs: [...proj.expectedOutputs],
      reversibilityExpectation: proj.reversibilityExpectation,
    },
  };
  const sealed = await sealGenericMissionForPresentation({
    oa: input.oa,
    projectId: input.projectId,
    cycleInstanceId: input.contract.cycleInstanceId ?? null,
    analysis: sheAnalysis,
    missionSubjectId:
      typeof contractInputs.missionSubjectId === "string" &&
      contractInputs.missionSubjectId.trim()
        ? contractInputs.missionSubjectId.trim()
        : undefined,
    optionRefs: sheOptionRefs,
    effectsOverride: {
      intentKind: proj.intentKind,
      artifactType: proj.artifactType,
      requestedOperation: proj.requestedOperation,
      requiredCapabilities: [...proj.requiredCapabilities],
      expectedOutputs: [...proj.expectedOutputs],
      reversibilityExpectation: proj.reversibilityExpectation,
      stopConditions: [...proj.stopConditions],
      risks: [...proj.risks],
      reservations: [...proj.reservations],
    },
    objectiveOverride: proj.objective,
    expectedOutcomeOverride: proj.expectedOutcome,
    scopeNarrativeOverride: proj.scopeNarrative,
    scopeInOverride: proj.scopeIn,
    scopeOutOverride: proj.scopeOut,
  });
  if (!sealed.ok) {
    return {
      ok: false,
      code: sealed.code,
      message: sealed.message,
      humanDecisionCreated: false,
    };
  }

  const recorded = await recordGenericMissionHumanDecision({
    oa: input.oa,
    subject: sealed.subject,
    selectedOptionId: GENERIC_MISSION_OPTION_AUTHORIZE_INSPECTED_EXECUTE,
    analysis: sheAnalysis,
    forceLocalAuthority: input.forceLocalAuthority === true,
    authenticatedPilote: input.authenticatedPilote,
    rationale: `SHE Execute — autorisation explicite du contrat inspecté ${input.contract.executionContractId} v${input.contract.version} fp=${input.contract.semanticFingerprint}.`,
    presentedPresentationDigest: sealed.subject.presentationDigest,
  });
  if (!recorded.ok) {
    return {
      ok: false,
      code: recorded.code,
      message: recorded.message,
      humanDecisionCreated: false,
    };
  }

  const decisionId = recorded.decision.decisionId;
  if (
    recorded.decision.selectedOptionId !==
    GENERIC_MISSION_OPTION_AUTHORIZE_INSPECTED_EXECUTE
  ) {
    return {
      ok: false,
      code: "SHE_HD_OPTION_MISMATCH",
      message:
        "HumanDecision ne correspond pas à authorize-inspected-execute — Exécuter refusé.",
      humanDecisionCreated: recorded.humanDecisionCreated,
    };
  }

  const newId = successorIdFor(input.contract.executionContractId, decisionId);

  const existingSuccessor = await loadContract(input.oa, newId);
  if (existingSuccessor.ok) {
    const eq = compareSuccessorToInspected(
      input.inspectedProjection,
      existingSuccessor.contract,
    );
    if (!eq.ok) {
      return {
        ok: false,
        code: eq.code,
        message: eq.message,
        humanDecisionCreated: recorded.humanDecisionCreated,
      };
    }
    return {
      ok: true,
      contract: existingSuccessor.contract,
      humanDecisionId: decisionId,
      humanDecisionCreated: recorded.humanDecisionCreated,
      humanDecisionOptionId: GENERIC_MISSION_OPTION_AUTHORIZE_INSPECTED_EXECUTE,
      supersededFromExecutionContractId: input.contract.executionContractId,
    };
  }

  const issuedAt = input.oa.clock.nowIso();
  const authority = registerLocalAuthorityForExecutionClass({
    authorityResolver: input.oa.authorityResolver,
    scope: input.contract.scope,
    issuedAt,
    requiredAuthority: input.contract.requiredAuthority,
    evidenceId: `evd:she-bind:${decisionId}`,
    forceEnable: input.forceLocalAuthority === true,
  });
  if (!authority.ok) {
    return {
      ok: false,
      code: authority.code,
      message: authority.message,
      humanDecisionCreated: recorded.humanDecisionCreated,
    };
  }

  // Effect-preserving supersede: copy predecessor fields; only decisionRefs +
  // binding metadata change. Do NOT rewrite effects from sealed HD.
  // Refresh productCurrentness after HD — Record may bump LPS; successor must
  // stamp the post-HD CURRENT anchors (R1/R2 resume).
  const liveAfterHd = await resolveAuthoritativeProductMateriality({
    oa: input.oa,
    projectId: input.projectId,
    analysis,
    cycleInstanceId: input.contract.cycleInstanceId ?? null,
  });
  const refreshedFacts =
    factsRaw && typeof factsRaw === "object"
      ? {
          ...factsRaw,
          ...(liveAfterHd.facts.productCurrentness
            ? { productCurrentness: liveAfterHd.facts.productCurrentness }
            : {}),
        }
      : factsRaw;
  const bindingInputs: Record<string, unknown> = {
    ...contractInputs,
    ...(refreshedFacts ? { materialityFacts: refreshedFacts } : {}),
    sheDeferredStructuralAuthority: false,
    verifiedGenericMissionHumanDecisionId: decisionId,
    missionSubjectId: sealed.subject.missionSubjectId,
    presentationDigest: sealed.subject.presentationDigest,
    sheBoundAtExecute: true,
    sheBoundFromExecutionContractId: input.contract.executionContractId,
    sheBoundFromVersion: input.contract.version,
    sheBoundFromSemanticFingerprint: input.contract.semanticFingerprint,
    sheAuthorizeOptionId: GENERIC_MISSION_OPTION_AUTHORIZE_INSPECTED_EXECUTE,
  };

  const superseded =
    await input.oa.executionContractServices.supersedeExecutionContract.execute({
      newExecutionContractId: newId,
      supersedesExecutionContractId: input.contract.executionContractId,
      supersessionReason: SHE_BIND_HD_SUPERSESSION_REASON,
      actor: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: authority.evidenceId,
      expectedVersion: input.contract.version,
      decisionRefs: [decisionId],
      inputs: bindingInputs,
      // Explicitly omit action/target/scope/capabilities/outputs/stops/reversibility
      // so OA copies predecessor material fields.
      idempotencyKey: `idem:she-bind-hd:${newId}`,
      correlationId: `cor:she-bind-hd:${randomBytes(6).toString("hex")}`,
      status: "draft",
    });

  if (!superseded.ok) {
    if (superseded.error.detailCode === "CONTRACT_ALREADY_EXISTS") {
      const raced = await loadContract(input.oa, newId);
      if (raced.ok) {
        const eq = compareSuccessorToInspected(
          input.inspectedProjection,
          raced.contract,
        );
        if (!eq.ok) {
          return {
            ok: false,
            code: eq.code,
            message: eq.message,
            humanDecisionCreated: recorded.humanDecisionCreated,
          };
        }
        return {
          ok: true,
          contract: raced.contract,
          humanDecisionId: decisionId,
          humanDecisionCreated: recorded.humanDecisionCreated,
          humanDecisionOptionId:
            GENERIC_MISSION_OPTION_AUTHORIZE_INSPECTED_EXECUTE,
          supersededFromExecutionContractId: input.contract.executionContractId,
        };
      }
    }
    return {
      ok: false,
      code: superseded.error.detailCode,
      message: superseded.error.message,
      humanDecisionCreated: recorded.humanDecisionCreated,
    };
  }

  const eq = compareSuccessorToInspected(
    input.inspectedProjection,
    superseded.contract,
  );
  if (!eq.ok) {
    return {
      ok: false,
      code: eq.code,
      message: eq.message,
      humanDecisionCreated: recorded.humanDecisionCreated,
    };
  }

  const validated =
    await input.oa.executionContractServices.validateExecutionContract.execute({
      executionContractId: superseded.contract.executionContractId,
      actor: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: authority.evidenceId,
    });
  if (!validated.ok) {
    return {
      ok: false,
      code: validated.error.detailCode,
      message: validated.error.message,
      humanDecisionCreated: recorded.humanDecisionCreated,
    };
  }

  const eqAfterValidate = compareSuccessorToInspected(
    input.inspectedProjection,
    validated.contract,
  );
  if (!eqAfterValidate.ok) {
    return {
      ok: false,
      code: eqAfterValidate.code,
      message: eqAfterValidate.message,
      humanDecisionCreated: recorded.humanDecisionCreated,
    };
  }

  return {
    ok: true,
    contract: validated.contract,
    humanDecisionId: decisionId,
    humanDecisionCreated: recorded.humanDecisionCreated,
    humanDecisionOptionId: GENERIC_MISSION_OPTION_AUTHORIZE_INSPECTED_EXECUTE,
    supersededFromExecutionContractId: input.contract.executionContractId,
  };
}

function compareSuccessorToInspected(
  inspected: ReturnType<typeof projectExecutionContractEffects>,
  successor: ExecutionContract,
):
  | { readonly ok: true }
  | { readonly ok: false; readonly code: string; readonly message: string } {
  const projected = projectContractOrThrow(successor);
  if (!projected.ok) return projected;
  const eq = compareContractMaterialEffectsForSheBinding({
    inspected,
    successor: projected.projection,
  });
  if (!eq.ok) {
    return {
      ok: false,
      code: "SHE_SUCCESSOR_EFFECTS_DIVERGED",
      message: `Effets du successeur ≠ contrat inspecté (${eq.reason}) — aucune autorisation.`,
    };
  }
  void SHE_BINDING_INPUT_KEYS;
  return { ok: true };
}

/**
 * R2 / C currentness — always before authorize.
 * NON_STRUCTURAL: full revalidateMaterialityAgainstCurrentProduct.
 * STRUCTURAL: LPS / repo / doctrine currentness (HD verify covers EC↔HD after bind).
 * Never skip via decisionRefs length alone.
 */
async function assertSheProductCurrentness(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly analysis: IntentAnalysisDto;
  readonly cycleInstanceId: string | null;
  readonly stampedMateriality: string | null;
  readonly stampedCurrentness: ReturnType<
    typeof parseStampedProductCurrentness
  >;
}): Promise<
  | { readonly ok: true }
  | { readonly ok: false; readonly code: string; readonly message: string }
> {
  if (input.stampedMateriality === "non_structural") {
    const revalidated = await revalidateMaterialityAgainstCurrentProduct({
      oa: input.oa,
      projectId: input.projectId,
      analysis: input.analysis,
      cycleInstanceId: input.cycleInstanceId,
      stampedMateriality: input.stampedMateriality,
      stampedCurrentness: input.stampedCurrentness,
    });
    if (!revalidated.ok) {
      return {
        ok: false,
        code: revalidated.code,
        message: revalidated.message,
      };
    }
    return { ok: true };
  }

  // STRUCTURAL / other — live Product currentness without requiring NON_STRUCTURAL
  // requalification (that would refuse structural stamps by design).
  const current = await resolveAuthoritativeProductMateriality({
    oa: input.oa,
    projectId: input.projectId,
    analysis: input.analysis,
    cycleInstanceId: input.cycleInstanceId,
  });
  if (!current.liveReadOk || !current.facts.productCurrentness) {
    return {
      ok: false,
      code: "MATERIALITY_PRODUCT_CONTEXT_UNAVAILABLE",
      message:
        "Contexte Product courant indisponible — matérialité non requalifiable (fail-closed).",
    };
  }
  const stamped = input.stampedCurrentness;
  if (!stamped) {
    return {
      ok: false,
      code: "MATERIALITY_CURRENTNESS_STALE",
      message:
        "Currentness PREPARE absente du contrat — réinspection requise.",
    };
  }
  const c = current.facts.productCurrentness;
  if (
    stamped.lpsVersion !== c.lpsVersion ||
    stamped.doctrineDigest !== c.doctrineDigest ||
    stamped.activeCycleInstanceId !== c.activeCycleInstanceId ||
    stamped.projectId !== c.projectId
  ) {
    return {
      ok: false,
      code: "MATERIALITY_CURRENTNESS_STALE",
      message:
        "LPS / doctrine / cycle actifs ont changé depuis PREPARE — réinspection requise.",
    };
  }
  const stampedIdentity = stamped.repositoryIdentity?.trim() || null;
  const currentIdentity = c.repositoryIdentity?.trim() || null;
  const stampedRoot = stamped.pathRoot?.trim() || null;
  const currentRoot = c.pathRoot?.trim() || null;
  if (stampedIdentity !== null || stampedRoot !== null) {
    if (stampedIdentity !== null && currentIdentity === null) {
      return {
        ok: false,
        code: "REPOSITORY_BINDING_UNAVAILABLE",
        message:
          "Repository binding Product courant indisponible — autorisation fail-closed.",
      };
    }
    if (stampedIdentity !== currentIdentity) {
      return {
        ok: false,
        code: "REPOSITORY_BINDING_STALE",
        message:
          "Repository identity Product a changé depuis PREPARE — réinspection requise.",
      };
    }
    if (stampedRoot !== currentRoot) {
      return {
        ok: false,
        code: "REPOSITORY_BINDING_STALE",
        message:
          "pathRoot Product a changé depuis PREPARE — réinspection requise.",
      };
    }
  }
  return { ok: true };
}

export async function singleHumanExecutePreparedContract(
  input: SingleHumanExecutePreparedContractInput,
): Promise<SingleHumanExecutePreparedContractResult> {
  const presented = input.presentedFactIds.map((f) => f.trim()).filter(Boolean);
  if (presented.length === 0) {
    return fail(
      "SHE_PRESENTATION_FACTS_REQUIRED",
      "Exécuter exige les faits contractuels effectivement présentés — aucune attestation silencieuse.",
    );
  }

  // T14 — no silent consent without authenticated Pilote (tests may forceLocal).
  if (
    !input.authenticatedPilote?.actor?.actorId &&
    input.forceLocalAuthority !== true
  ) {
    return fail(
      "AUTHENTICATED_PILOTE_REQUIRED",
      "Session Pilote vérifiée requise pour Exécuter — aucun consentement silencieux.",
    );
  }

  let loaded = await loadContract(input.oa, input.executionContractId);
  if (!loaded.ok) {
    return fail(loaded.code, loaded.message);
  }
  if (loaded.contract.projectId !== input.projectId) {
    return fail(
      "PROJECT_MISMATCH",
      "Contrat hors projet — Exécuter refusé.",
    );
  }
  if (loaded.contract.version !== input.expectedVersion) {
    return fail(
      "VERSION_MISMATCH",
      "Version contractuelle différente de celle présentée — réinspection requise.",
    );
  }
  const fp = loaded.contract.semanticFingerprint ?? "";
  if (!fp || fp !== input.expectedSemanticFingerprint) {
    return fail(
      "FINGERPRINT_MISMATCH",
      "Empreinte sémantique différente du contrat présenté — réinspection requise.",
    );
  }

  const stamped = materialityFromContractConstraints(
    loaded.contract.constraints,
  );

  // INV-SHE-UNKNOWN-BLOCKS — UNKNOWN may be prepared/inspected, never launched.
  if (stamped === "unknown") {
    return fail(
      "SHE_UNKNOWN_BLOCKS_EXECUTE",
      "Matérialité UNKNOWN — proposition inspectable uniquement ; exécution refusée (fail-closed).",
    );
  }

  // C1 — project inspected contract BEFORE any HD / supersede.
  const inspectedProj = projectContractOrThrow(loaded.contract);
  if (!inspectedProj.ok) {
    return fail(inspectedProj.code, inspectedProj.message);
  }

  // Attest on the *initial* presented contract (before HD). No silent attest.
  const initialInspected = await inspectExecutionContract({
    oa: input.oa,
    projectId: input.projectId,
    executionContractId: loaded.contract.executionContractId,
    expectedVersion: loaded.contract.version,
    inspectedFacts: presented,
  });
  if (!initialInspected.ok) {
    return fail(initialInspected.code, initialInspected.message);
  }
  if (!initialInspected.inspectionSufficient) {
    return fail(
      initialInspected.reinspectionRequired
        ? "REINSPECTION_REQUIRED"
        : "INSPECTION_INSUFFICIENT",
      "Disclosure d'inspection insuffisante pour Exécuter — aucune HD créée.",
    );
  }

  // CURRENT Product currentness ALWAYS (structural included — R2).
  // Never skip solely because decisionRefs will be / were populated.
  const contractInputs = (loaded.contract.inputs ?? {}) as Record<
    string,
    unknown
  >;
  const factsRaw =
    contractInputs.materialityFacts &&
    typeof contractInputs.materialityFacts === "object"
      ? (contractInputs.materialityFacts as Record<string, unknown>)
      : null;
  const currentness = await assertSheProductCurrentness({
    oa: input.oa,
    projectId: input.projectId,
    analysis: analysisStubFromMaterialityFacts(factsRaw, contractInputs),
    cycleInstanceId: loaded.contract.cycleInstanceId ?? null,
    stampedMateriality: stamped,
    stampedCurrentness: parseStampedProductCurrentness(factsRaw),
  });
  if (!currentness.ok) {
    return fail(currentness.code, currentness.message);
  }

  let humanDecisionCreated = false;
  let humanDecisionId: string | null =
    (loaded.contract.decisionRefs ?? [])[0] ?? null;
  let humanDecisionOptionId: string | null = null;
  let supersededFrom: string | null = null;
  let active = loaded.contract;

  const refs = active.decisionRefs ?? [];
  const needsStructuralHdBind =
    (stamped === "structural" ||
      active.inputs?.sheDeferredStructuralAuthority === true) &&
    refs.length === 0;

  if (needsStructuralHdBind) {
    const bound = await bindStructuralHdViaSupersede({
      oa: input.oa,
      projectId: input.projectId,
      contract: active,
      inspectedProjection: inspectedProj.projection,
      forceLocalAuthority: input.forceLocalAuthority,
      authenticatedPilote: input.authenticatedPilote,
    });
    if (!bound.ok) {
      return fail(bound.code, bound.message, bound.humanDecisionCreated);
    }
    humanDecisionCreated = bound.humanDecisionCreated;
    humanDecisionId = bound.humanDecisionId;
    humanDecisionOptionId = bound.humanDecisionOptionId;
    supersededFrom = bound.supersededFromExecutionContractId;
    active = bound.contract;

    // Re-attest successor with the same presented facts (disclosure continuity).
    const successorInspected = await inspectExecutionContract({
      oa: input.oa,
      projectId: input.projectId,
      executionContractId: active.executionContractId,
      expectedVersion: active.version,
      inspectedFacts: presented,
    });
    if (!successorInspected.ok) {
      return fail(
        successorInspected.code,
        successorInspected.message,
        humanDecisionCreated,
      );
    }
    if (!successorInspected.inspectionSufficient) {
      return fail(
        "SHE_SUCCESSOR_INSPECTION_INSUFFICIENT",
        "Disclosure insuffisante sur le successeur — autorisation refusée.",
        humanDecisionCreated,
      );
    }
  } else if (refs.length > 0) {
    // Resume path: already-bound successor — still require effect equivalence
    // vs the click-bound identity when sheBoundFrom* metadata is present.
    const fromId =
      typeof active.inputs?.sheBoundFromExecutionContractId === "string"
        ? active.inputs.sheBoundFromExecutionContractId
        : null;
    if (
      fromId &&
      fromId === input.executionContractId &&
      Number(active.inputs?.sheBoundFromVersion) === input.expectedVersion &&
      String(active.inputs?.sheBoundFromSemanticFingerprint ?? "") ===
        input.expectedSemanticFingerprint
    ) {
      const eq = compareSuccessorToInspected(
        inspectedProj.projection,
        active,
      );
      if (!eq.ok) {
        return fail(eq.code, eq.message, humanDecisionCreated);
      }
    }
    if (
      typeof active.inputs?.sheAuthorizeOptionId === "string" &&
      active.inputs.sheAuthorizeOptionId ===
        GENERIC_MISSION_OPTION_AUTHORIZE_INSPECTED_EXECUTE
    ) {
      humanDecisionOptionId = GENERIC_MISSION_OPTION_AUTHORIZE_INSPECTED_EXECUTE;
    }
  }

  let confirmationRef: string | null = active.confirmationRef ?? null;
  const mid = await loadContract(input.oa, active.executionContractId);
  if (!mid.ok) {
    return fail(mid.code, mid.message, humanDecisionCreated);
  }
  active = mid.contract;

  if (active.status === "confirmation_required") {
    // Currentness already revalidated above — skip only after that proof.
    const confirmed = await confirmExecutionContractForAuthorization({
      oa: input.oa,
      projectId: input.projectId,
      executionContractId: active.executionContractId,
      forceLocalAuthority: input.forceLocalAuthority,
      skipMaterialityRevalidation: true,
    });
    if (!confirmed.ok) {
      return fail(confirmed.code, confirmed.message, humanDecisionCreated);
    }
    confirmationRef = confirmed.confirmationRef;
  }

  const afterConfirm = await loadContract(
    input.oa,
    active.executionContractId,
  );
  if (!afterConfirm.ok) {
    return fail(afterConfirm.code, afterConfirm.message, humanDecisionCreated);
  }
  active = afterConfirm.contract;

  const authorization = await evaluateExecutionAuthorization({
    oa: input.oa,
    projectId: input.projectId,
    executionContractId: active.executionContractId,
    expectedVersion: active.version,
    expectedSemanticFingerprint: active.semanticFingerprint,
    forceLocalAuthority: input.forceLocalAuthority,
  });
  if (!authorization.ok) {
    return fail(authorization.code, authorization.message, humanDecisionCreated);
  }
  if (
    authorization.outcome !== "AUTHORIZED" ||
    authorization.executionEligible !== true
  ) {
    return fail(
      authorization.executionEligibilityReasonCode ||
        "AUTHORIZATION_NOT_ELIGIBLE",
      "Autorisation insuffisante — aucun Attempt créé.",
      humanDecisionCreated,
    );
  }

  return {
    ok: true,
    executionContractId: active.executionContractId,
    contractVersion: active.version,
    semanticFingerprint: active.semanticFingerprint ?? "",
    status: active.status,
    humanDecisionCreated,
    humanDecisionId,
    humanDecisionOptionId,
    confirmationRef,
    authorization,
    executionAttemptCreated: false,
    supersededFromExecutionContractId: supersededFrom,
    code: "SHE_EXECUTE_AUTHORIZED",
  };
}


```

# APPENDIX B — CREATED FILE: p6.she.singleHumanExecute.d0.test.ts (FULL)

```typescript

/**
 * D-P6-SHE-01 — Single Human Execute deterministic Product proofs.
 *
 * PREPARE (incl. STRUCTURAL, empty decisionRefs) → inspectable EC →
 * one Exécuter gesture (attest + HD bind + Confirm + Authorize) →
 * Select Fake Cursor. ZERO Cursor REAL / OpenAI LIVE.
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  buildIntentAnalysisFromSolicitedMission,
  prepareGenericExecutionContractDraft,
  solicitGenericExecutionPrepare,
  assessGenericMissionPrepareReadiness,
} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import { singleHumanExecutePreparedContract } from "@/features/project-assistant/w2/singleHumanExecutePreparedContract";
import {
  GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
  GENERIC_MISSION_OPTION_AUTHORIZE_INSPECTED_EXECUTE,
  compareContractMaterialEffectsForSheBinding,
  projectExecutionContractEffects,
  assertExecutionContractInternalConsistency,
} from "@/features/project-assistant/w2/genericMissionSubject";
import { requiredInspectedFactsForContract } from "@/lib/oa/execution-contract";
import {
  governedExecuteSelectAgent,
  governedExecuteStart,
} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
import { STUDIO_CURSOR_GENERALIST_AGENT_ID } from "@/lib/oa/execution-attempt";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import { settleDeterministicProductCursorSuccess } from "./w2Harness";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";

function restoreEnvVar(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

function requiredFactsOrThrow(
  contract: Parameters<typeof requiredInspectedFactsForContract>[0],
): readonly string[] {
  const facts = requiredInspectedFactsForContract(contract);
  if (Array.isArray(facts)) return facts;
  const incomplete = facts as { incomplete: true; code: string };
  throw new Error(`inspection disclosure incomplete: ${incomplete.code}`);
}

function structuralAnalysis(): IntentAnalysisDto {
  const base = buildIntentAnalysisFromSolicitedMission({
    objective: "Refactorer le binding d'autorité générique SHE",
    expectedOutcome: "Contrat inspectable puis Exécuter unique",
    scope: "projects/demo/src/authority",
    impactSignals: {
      structuralChange: true,
      architectureImpact: true,
    },
  });
  return {
    ...base,
    executionIntent: {
      intentKind: "code_change",
      scopeIn: ["projects/demo/src/authority"],
      requiredCapabilities: [],
    },
  };
}

function nonStructuralAnalysis(): IntentAnalysisDto {
  const base = buildIntentAnalysisFromSolicitedMission({
    objective: "Analyser le graphe de dépendances sans mutation",
    expectedOutcome: "Synthèse lecture seule",
    scope: "analyse bornée sans chemin concret",
    repositoryMutation: "none",
  });
  return {
    ...base,
    executionIntent: {
      intentKind: "read_only",
      scopeIn: [],
      requiredCapabilities: [],
    },
  };
}

describe("P6 SHE — Single Human Execute D-P6-SHE-01", () => {
  let runtime: RuntimeApplicationService;
  let previousMorris: string | undefined;
  let previousDetPin: string | undefined;
  let previousPilot: string | undefined;

  beforeEach(() => {
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousDetPin = process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
    previousPilot = process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = "1";
    process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = W2_TEST_PINNED_BASE_HEAD_SHA;
    process.env.SFIA_STUDIO_CURSOR_REAL = "0";
    runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("p6-she.sqlite"),
      idPrefix: "she01",
    });
  });

  afterEach(() => {
    cleanupW2TempDirs();
    restoreEnvVar("SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY", previousMorris);
    restoreEnvVar("SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA", previousDetPin);
    restoreEnvVar("SFIA_STUDIO_LOCAL_PILOT_AUTHORITY", previousPilot);
  });

  async function seedProject(suffix: string) {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: `SHE ${suffix}`,
      objective: "SHE Delivery",
      context: "det she",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `SH${suffix.toUpperCase().slice(0, 6)}`,
      idempotencyKey: `idem:she-${suffix}`,
    });
    if (!created.ok) throw new Error("createProject");
    const projectId = created.project.projectId;
    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps0.ok) throw new Error("lps0");
    await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: [{ stepId: "stp:a", order: 1, label: "A", state: "done" }],
      status: "active",
      expectedLpsVersion: lps0.livingProjectState.version,
      createdBy: {
        actorId: "actor:morris",
        role: "project_owner",
        displayName: "Morris",
        authorityLevel: "N3",
      },
    });
    const identity = `acme/she-${suffix}`;
    await oa.projectServices.setProjectRepositoryBinding!.execute({
      projectId,
      actor: LOCAL_PILOTE_ACTOR,
      binding: {
        provider: "github",
        identity,
        remoteUrl: `https://github.com/${identity}.git`,
        defaultBranch: "main",
        pathRoot: "projects/demo",
      },
    });
    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
      identity,
    });
    return { projectId, oa };
  }

  it("A/D — readiness: structural signals do not block PREPARE; missing fields still do", () => {
    const structural = assessGenericMissionPrepareReadiness(structuralAnalysis());
    expect(structural.structuralBlocked).toBe(true);
    expect(structural.ready).toBe(true);
    const incomplete = assessGenericMissionPrepareReadiness(
      buildIntentAnalysisFromSolicitedMission({
        objective: "",
        expectedOutcome: "",
        scope: "",
      }),
    );
    expect(incomplete.ready).toBe(false);
    expect(incomplete.missingFields.length).toBeGreaterThan(0);
  });

  it("B/D/E — STRUCTURAL PREPARE without HD → durable inspectable EC, empty refs, no Attempt", async () => {
    const { projectId, oa } = await seedProject("struct-prep");
    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: structuralAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    expect(prep.humanDecisionCreated).toBe(false);
    expect(prep.executionAttemptCreated).toBe(false);
    expect(prep.contract.decisionRefs ?? []).toEqual([]);
    expect(prep.contract.constraints).toContain("MATERIALITY:STRUCTURAL");
    expect(prep.contract.inputs?.sheDeferredStructuralAuthority).toBe(true);
    expect(
      ["draft", "validated", "confirmation_required"].includes(
        prep.contract.status,
      ),
    ).toBe(true);
  });

  it("A/I/K/L/V/W — NON_STRUCTURAL and STRUCTURAL share Exécuter path (Fake Select)", async () => {
    for (const kind of ["non_structural", "structural"] as const) {
      const { projectId, oa } = await seedProject(`ux-${kind}`);
      const analysis =
        kind === "structural" ? structuralAnalysis() : nonStructuralAnalysis();
      const prep = await solicitGenericExecutionPrepare({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      expect(prep.ok).toBe(true);
      if (!prep.ok) throw new Error(`${kind}: ${prep.message}`);

      const live = await oa.executionContractServices.getExecutionContract.execute({
        executionContractId: prep.executionContractId,
      });
      expect(live.ok).toBe(true);
      if (!live.ok) throw new Error("get");

      const facts = requiredFactsOrThrow(live.contract);
      expect(facts.length).toBeGreaterThan(0);

      const she = await singleHumanExecutePreparedContract({
        oa,
        projectId,
        executionContractId: live.contract.executionContractId,
        expectedVersion: live.contract.version,
        expectedSemanticFingerprint: live.contract.semanticFingerprint!,
        presentedFactIds: facts,
        forceLocalAuthority: true,
      });
      if (!she.ok) {
        throw new Error(`${kind} she: ${she.code} ${she.message}`);
      }
      expect(she.ok).toBe(true);
      expect(she.executionAttemptCreated).toBe(false);
      expect(she.authorization.outcome).toBe("AUTHORIZED");
      expect(she.authorization.executionEligible).toBe(true);

      if (kind === "structural") {
        expect(she.humanDecisionId).toBeTruthy();
        // T04/T05 — HD is authorize-inspected-execute, not ACCEPT_PREPARE.
        expect(she.humanDecisionOptionId).toBe(
          GENERIC_MISSION_OPTION_AUTHORIZE_INSPECTED_EXECUTE,
        );
        expect(she.humanDecisionOptionId).not.toBe(
          GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
        );
        expect(she.supersededFromExecutionContractId).toBe(
          live.contract.executionContractId,
        );
        const bound =
          await oa.executionContractServices.getExecutionContract.execute({
            executionContractId: she.executionContractId,
          });
        expect(bound.ok).toBe(true);
        if (!bound.ok) throw new Error("bound");
        expect(bound.contract.decisionRefs).toEqual([she.humanDecisionId]);
        // T09–T12 — successor material effects ≡ inspected predecessor.
        const priorInternal = assertExecutionContractInternalConsistency({
          constraints: live.contract.constraints,
          inputs: live.contract.inputs as Record<string, unknown>,
        });
        expect(priorInternal.ok).toBe(true);
        const priorProj = projectExecutionContractEffects({
          projectId: live.contract.projectId,
          cycleInstanceId: live.contract.cycleInstanceId,
          decisionRefs: live.contract.decisionRefs,
          status: live.contract.status,
          version: live.contract.version,
          semanticFingerprint: live.contract.semanticFingerprint,
          expectedOutputs: live.contract.expectedOutputs,
          requiredCapabilities: live.contract.requiredCapabilities,
          stopConditions: live.contract.stopConditions,
          reversibility: live.contract.reversibility as
            | "reversible"
            | "partially_reversible"
            | "irreversible",
          constraints: live.contract.constraints,
          inputs: live.contract.inputs as Record<string, unknown>,
        });
        const succProj = projectExecutionContractEffects({
          projectId: bound.contract.projectId,
          cycleInstanceId: bound.contract.cycleInstanceId,
          decisionRefs: bound.contract.decisionRefs,
          status: bound.contract.status,
          version: bound.contract.version,
          semanticFingerprint: bound.contract.semanticFingerprint,
          expectedOutputs: bound.contract.expectedOutputs,
          requiredCapabilities: bound.contract.requiredCapabilities,
          stopConditions: bound.contract.stopConditions,
          reversibility: bound.contract.reversibility as
            | "reversible"
            | "partially_reversible"
            | "irreversible",
          constraints: bound.contract.constraints,
          inputs: bound.contract.inputs as Record<string, unknown>,
        });
        const eq = compareContractMaterialEffectsForSheBinding({
          inspected: priorProj,
          successor: succProj,
        });
        expect(eq).toEqual({ ok: true });
        const hd = await oa.decisionServices.getHumanDecision.execute({
          decisionId: she.humanDecisionId!,
        });
        expect(hd.ok).toBe(true);
        if (!hd.ok) throw new Error("hd");
        expect(hd.decision.selectedOptionId).toBe(
          GENERIC_MISSION_OPTION_AUTHORIZE_INSPECTED_EXECUTE,
        );
      }

      const selected = await governedExecuteSelectAgent({
        oa,
        projectId,
        executionContractId: she.executionContractId,
        forceLocalAuthority: true,
      });
      expect(selected.ok).toBe(true);
      if (!selected.ok) throw new Error(`${kind} select: ${selected.message}`);
      expect(selected.attempt).toBeTruthy();

      await settleDeterministicProductCursorSuccess({
        oa,
        attemptId: selected.attempt!.attemptId,
      });
      const started = await governedExecuteStart({
        oa,
        projectId,
        executionContractId: she.executionContractId,
        attemptId: selected.attempt!.attemptId,
        forceLocalAuthority: true,
      });
      expect(started.ok).toBe(true);
      void STUDIO_CURSOR_GENERALIST_AGENT_ID;
    }
  });

  it("J — fingerprint mismatch on Exécuter → refuse (no Attempt)", async () => {
    const { projectId, oa } = await seedProject("stale-fp");
    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: nonStructuralAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    const facts = requiredFactsOrThrow(prep.contract);
    const she = await singleHumanExecutePreparedContract({
      oa,
      projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
      expectedSemanticFingerprint: "sha256:forged-not-real",
      presentedFactIds: facts,
      forceLocalAuthority: true,
    });
    expect(she.ok).toBe(false);
    if (she.ok) throw new Error("expected refuse");
    expect(she.code).toBe("FINGERPRINT_MISMATCH");
    expect(she.executionAttemptCreated).toBe(false);
  });

  it("H — empty presented facts → refuse silent attest", async () => {
    const { projectId, oa } = await seedProject("no-facts");
    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: nonStructuralAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    const she = await singleHumanExecutePreparedContract({
      oa,
      projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
      expectedSemanticFingerprint: prep.contract.semanticFingerprint!,
      presentedFactIds: [],
      forceLocalAuthority: true,
    });
    expect(she.ok).toBe(false);
    if (she.ok) throw new Error("expected refuse");
    expect(she.code).toBe("SHE_PRESENTATION_FACTS_REQUIRED");
  });

  it("P — double Exécuter is idempotent (no second Cursor launch invent)", async () => {
    const { projectId, oa } = await seedProject("idem");
    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: structuralAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    const facts = requiredFactsOrThrow(prep.contract);
    const first = await singleHumanExecutePreparedContract({
      oa,
      projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
      expectedSemanticFingerprint: prep.contract.semanticFingerprint!,
      presentedFactIds: facts,
      forceLocalAuthority: true,
    });
    if (!first.ok) throw new Error(`first: ${first.code} ${first.message}`);
    expect(first.ok).toBe(true);

    // Second call on superseded prior id must fail closed (stale identity).
    const staleRetry = await singleHumanExecutePreparedContract({
      oa,
      projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
      expectedSemanticFingerprint: prep.contract.semanticFingerprint!,
      presentedFactIds: facts,
      forceLocalAuthority: true,
    });
    expect(staleRetry.ok).toBe(false);

    // Retry on successor with current version/fp succeeds idempotently.
    const live = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: first.executionContractId,
    });
    expect(live.ok).toBe(true);
    if (!live.ok) throw new Error("get");
    const facts2 = requiredFactsOrThrow(live.contract);
    const second = await singleHumanExecutePreparedContract({
      oa,
      projectId,
      executionContractId: live.contract.executionContractId,
      expectedVersion: live.contract.version,
      expectedSemanticFingerprint: live.contract.semanticFingerprint!,
      presentedFactIds: facts2,
      forceLocalAuthority: true,
    });
    if (!second.ok) throw new Error(`second: ${second.code} ${second.message}`);
    expect(second.ok).toBe(true);
    expect(second.executionContractId).toBe(first.executionContractId);
  });

  it("T14 — absent authenticatedPilote without forceLocal → refuse silent consent", async () => {
    const { projectId, oa } = await seedProject("t14");
    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: structuralAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    const facts = requiredFactsOrThrow(prep.contract);
    const she = await singleHumanExecutePreparedContract({
      oa,
      projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
      expectedSemanticFingerprint: prep.contract.semanticFingerprint!,
      presentedFactIds: facts,
    });
    expect(she.ok).toBe(false);
    if (she.ok) throw new Error("expected refuse");
    expect(she.code).toBe("AUTHENTICATED_PILOTE_REQUIRED");
    expect(she.humanDecisionCreated).toBe(false);
  });

  it("T07 — incomplete disclosure → no HD / Confirm / Attempt", async () => {
    const { projectId, oa } = await seedProject("t07");
    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: structuralAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    const facts = requiredFactsOrThrow(prep.contract);
    const she = await singleHumanExecutePreparedContract({
      oa,
      projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
      expectedSemanticFingerprint: prep.contract.semanticFingerprint!,
      presentedFactIds: facts.slice(0, Math.max(1, Math.floor(facts.length / 3))),
      forceLocalAuthority: true,
    });
    expect(she.ok).toBe(false);
    if (she.ok) throw new Error("expected refuse");
    expect(she.humanDecisionCreated).toBe(false);
    expect(she.executionAttemptCreated).toBe(false);
    expect(
      ["INSPECTION_INSUFFICIENT", "REINSPECTION_REQUIRED"].includes(she.code) ||
        she.code.includes("INSPECT"),
    ).toBe(true);
  });

  it("T23 — concurrent Exécuter yields one effective authority chain", async () => {
    const { projectId, oa } = await seedProject("t23");
    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: structuralAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    const facts = requiredFactsOrThrow(prep.contract);
    const args = {
      oa,
      projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
      expectedSemanticFingerprint: prep.contract.semanticFingerprint!,
      presentedFactIds: facts,
      forceLocalAuthority: true as const,
    };
    const [a, b] = await Promise.all([
      singleHumanExecutePreparedContract(args),
      singleHumanExecutePreparedContract(args),
    ]);
    const oks = [a, b].filter((r) => r.ok);
    expect(oks.length).toBeGreaterThanOrEqual(1);
    const created = [a, b].filter((r) => r.ok && r.humanDecisionCreated);
    expect(created.length).toBeLessThanOrEqual(1);
    if (oks.length === 2 && oks[0]!.ok && oks[1]!.ok) {
      expect(oks[0].executionContractId).toBe(oks[1].executionContractId);
      expect(oks[0].humanDecisionId).toBe(oks[1].humanDecisionId);
    }
  });
});


```

# APPENDIX C — DIFF: genericMissionSubject.ts

```diff

diff --git a/projects/sfia-studio/app/features/project-assistant/w2/genericMissionSubject.ts b/projects/sfia-studio/app/features/project-assistant/w2/genericMissionSubject.ts
index c16f9e54..16e63e51 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/genericMissionSubject.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/genericMissionSubject.ts
@@ -18,6 +18,12 @@ export const GENERIC_MISSION_SUBJECT_SCHEMA_VERSION = "0.1.0-gms" as const;

 export const GENERIC_MISSION_OPTION_ACCEPT_PREPARE =
   "opt:generic-mission:accept-prepare" as const;
+/**
+ * D-P6-SHE-01 Critical correction — Pilote Exécuter on an inspected contract.
+ * Distinct from ACCEPT_PREPARE (authorize preparation). Historical HDs unchanged.
+ */
+export const GENERIC_MISSION_OPTION_AUTHORIZE_INSPECTED_EXECUTE =
+  "opt:generic-mission:authorize-inspected-execute" as const;
 export const GENERIC_MISSION_OPTION_REFUSE =
   "opt:generic-mission:refuse" as const;
 export const GENERIC_MISSION_OPTION_REQUEST_AMEND =
@@ -38,6 +44,57 @@ export const GENERIC_MISSION_PRESENTED_OPTIONS = [
   },
 ] as const;

+/** Options presented for Single Human Execute (not a PREPARE accept). */
+export const GENERIC_MISSION_SHE_EXECUTE_PRESENTED_OPTIONS = [
+  {
+    optionId: GENERIC_MISSION_OPTION_AUTHORIZE_INSPECTED_EXECUTE,
+    label:
+      "Exécuter — autoriser le contrat inspecté et ses effets présentés",
+  },
+  {
+    optionId: GENERIC_MISSION_OPTION_REFUSE,
+    label: "Refuser cette mission structurante",
+  },
+  {
+    optionId: GENERIC_MISSION_OPTION_REQUEST_AMEND,
+    label: "Demander un amendement — nouvelle présentation requise",
+  },
+] as const;
+
+const GENERIC_MISSION_OPTION_LABELS: ReadonlyMap<string, string> = new Map([
+  ...GENERIC_MISSION_PRESENTED_OPTIONS.map(
+    (o) => [o.optionId, o.label] as const,
+  ),
+  ...GENERIC_MISSION_SHE_EXECUTE_PRESENTED_OPTIONS.map(
+    (o) => [o.optionId, o.label] as const,
+  ),
+]);
+
+export function isGenericMissionAcceptedAuthorityOption(
+  optionId: string,
+): boolean {
+  return (
+    optionId === GENERIC_MISSION_OPTION_ACCEPT_PREPARE ||
+    optionId === GENERIC_MISSION_OPTION_AUTHORIZE_INSPECTED_EXECUTE
+  );
+}
+
+export function labelForGenericMissionOption(optionId: string): string | null {
+  return GENERIC_MISSION_OPTION_LABELS.get(optionId) ?? null;
+}
+
+export function resolveGenericMissionPresentedOptions(
+  optionRefs: readonly string[],
+): ReadonlyArray<{ readonly optionId: string; readonly label: string }> {
+  const out: Array<{ optionId: string; label: string }> = [];
+  for (const id of optionRefs) {
+    const label = GENERIC_MISSION_OPTION_LABELS.get(id);
+    if (!label) continue;
+    out.push({ optionId: id, label });
+  }
+  return out;
+}
+
 export type GenericMissionImpactSignals = {
   readonly structuralChange: boolean;
   readonly securityImpact: boolean;
@@ -854,6 +911,82 @@ export function compareExecutionContractToSealedHumanDecision(input: {
   return { ok: true };
 }

+/**
+ * D-P6-SHE-01 C1 — material effect equivalence between inspected predecessor
+ * and SHE successor. Status / version / fingerprint / decisionRefs may change;
+ * scope, outputs, capabilities, risks, reversibility, materiality must not.
+ */
+export function compareContractMaterialEffectsForSheBinding(input: {
+  readonly inspected: ExecutionContractEffectProjection;
+  readonly successor: ExecutionContractEffectProjection;
+}): { readonly ok: true } | { readonly ok: false; readonly reason: string } {
+  const a = input.inspected;
+  const b = input.successor;
+  if (a.projectId !== b.projectId) {
+    return { ok: false, reason: "project_mismatch" };
+  }
+  if ((a.cycleInstanceId ?? null) !== (b.cycleInstanceId ?? null)) {
+    return { ok: false, reason: "cycle_mismatch" };
+  }
+  if (a.objective.trim() !== b.objective.trim()) {
+    return { ok: false, reason: "objective_mismatch" };
+  }
+  if (a.expectedOutcome.trim() !== b.expectedOutcome.trim()) {
+    return { ok: false, reason: "expected_outcome_mismatch" };
+  }
+  if (a.scopeNarrative.trim() !== b.scopeNarrative.trim()) {
+    return { ok: false, reason: "scope_narrative_mismatch" };
+  }
+  if (
+    !sameStringArr(a.scopeIn, b.scopeIn) ||
+    !sameStringArr(a.scopeOut, b.scopeOut)
+  ) {
+    return { ok: false, reason: "scope_arrays_mismatch" };
+  }
+  if (normNullStr(a.intentKind) !== normNullStr(b.intentKind)) {
+    return { ok: false, reason: "intent_kind_mismatch" };
+  }
+  if (normNullStr(a.artifactType) !== normNullStr(b.artifactType)) {
+    return { ok: false, reason: "artifact_type_mismatch" };
+  }
+  if (
+    normNullStr(a.requestedOperation) !== normNullStr(b.requestedOperation)
+  ) {
+    return { ok: false, reason: "requested_operation_mismatch" };
+  }
+  if (!sameStringArr(a.expectedOutputs, b.expectedOutputs)) {
+    return { ok: false, reason: "expected_outputs_mismatch" };
+  }
+  if (!sameStringArr(a.requiredCapabilities, b.requiredCapabilities)) {
+    return { ok: false, reason: "capabilities_mismatch" };
+  }
+  if (!sameSortedStringArr(a.stopConditions, b.stopConditions)) {
+    return { ok: false, reason: "stop_conditions_mismatch" };
+  }
+  if (a.reversibilityExpectation !== b.reversibilityExpectation) {
+    return { ok: false, reason: "reversibility_expectation_mismatch" };
+  }
+  if (a.reversibility !== b.reversibility) {
+    return { ok: false, reason: "oa_reversibility_mismatch" };
+  }
+  if (!sameSortedStringArr(a.risks, b.risks)) {
+    return { ok: false, reason: "risks_mismatch" };
+  }
+  if (!sameSortedStringArr(a.reservations, b.reservations)) {
+    return { ok: false, reason: "reservations_mismatch" };
+  }
+  if (a.materiality !== b.materiality) {
+    return { ok: false, reason: "materiality_mismatch" };
+  }
+  if (a.repositoryBindingIdentity !== b.repositoryBindingIdentity) {
+    return { ok: false, reason: "repository_binding_mismatch" };
+  }
+  if (a.pathRoot !== b.pathRoot) {
+    return { ok: false, reason: "path_root_mismatch" };
+  }
+  return { ok: true };
+}
+
 export type LpsMaterialSnapshot = {
   readonly version: number;
   readonly objective: string;


```

# APPENDIX D — DIFF: recordGenericMissionHumanDecision.ts

```diff

diff --git a/projects/sfia-studio/app/features/project-assistant/w2/recordGenericMissionHumanDecision.ts b/projects/sfia-studio/app/features/project-assistant/w2/recordGenericMissionHumanDecision.ts
index 0c371973..ac551a40 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/recordGenericMissionHumanDecision.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/recordGenericMissionHumanDecision.ts
@@ -18,11 +18,16 @@ import { resolveGenericPrepareCapabilityEnvelope } from "./genericPrepareCapabil
 import type { IntentAnalysisDto } from "../f2/types";
 import {
   GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
+  GENERIC_MISSION_OPTION_AUTHORIZE_INSPECTED_EXECUTE,
   GENERIC_MISSION_OPTION_REFUSE,
   GENERIC_MISSION_OPTION_REQUEST_AMEND,
-  GENERIC_MISSION_PRESENTED_OPTIONS,
   buildGenericMissionSubject,
   decisionBasisFromGenericMissionSubject,
+  isGenericMissionAcceptedAuthorityOption,
+  labelForGenericMissionOption,
+  resolveGenericMissionPresentedOptions,
+  type GenericMissionEffectsSeal,
+  type GenericMissionImpactSignals,
   type GenericMissionSubject,
 } from "./genericMissionSubject";
 import {
@@ -47,6 +52,19 @@ export type SealGenericMissionForPresentationInput = {
   readonly analysis: IntentAnalysisDto;
   /** Reuse existing occurrence id on amend re-presentation only when material unchanged. */
   readonly missionSubjectId?: string;
+  /**
+   * D-P6-SHE-01 — when set, seals these optionRefs (e.g. authorize-inspected-execute)
+   * instead of the default ACCEPT_PREPARE presentation set.
+   */
+  readonly optionRefs?: readonly string[];
+  /** Optional effect / impact overrides so EC↔HD binding stays exact (SHE). */
+  readonly effectsOverride?: GenericMissionEffectsSeal;
+  readonly impactSignalsOverride?: GenericMissionImpactSignals;
+  readonly objectiveOverride?: string;
+  readonly expectedOutcomeOverride?: string;
+  readonly scopeNarrativeOverride?: string;
+  readonly scopeInOverride?: readonly string[];
+  readonly scopeOutOverride?: readonly string[];
 };

 export type SealGenericMissionForPresentationResult =
@@ -115,12 +133,21 @@ export async function sealGenericMissionForPresentation(
   }

   const objective = (
+    input.objectiveOverride ??
     input.analysis.objective ??
     input.analysis.rephrasedRequest ??
     ""
   ).trim();
-  const expectedOutcome = (input.analysis.expectedOutcome ?? objective).trim();
-  const scopeNarrative = (input.analysis.scope ?? expectedOutcome).trim();
+  const expectedOutcome = (
+    input.expectedOutcomeOverride ??
+    input.analysis.expectedOutcome ??
+    objective
+  ).trim();
+  const scopeNarrative = (
+    input.scopeNarrativeOverride ??
+    input.analysis.scope ??
+    expectedOutcome
+  ).trim();
   if (!objective || (!expectedOutcome && !scopeNarrative)) {
     return fail(
       "MISSION_INSUFFICIENTLY_QUALIFIED",
@@ -145,6 +172,43 @@ export async function sealGenericMissionForPresentation(
       ei.reversibilityExpectation === "unknown")
       ? ei.reversibilityExpectation
       : null;
+  const defaultEffects: GenericMissionEffectsSeal = {
+    intentKind: ei?.intentKind?.trim() || null,
+    artifactType: ei?.artifactType?.trim() || null,
+    requestedOperation,
+    requiredCapabilities: [...capabilityResolution.contractCapabilities],
+    expectedOutputs: authoritativeExpectedOutputs,
+    reversibilityExpectation:
+      revFromEi ??
+      (signals?.irreversible === true
+        ? "irreversible"
+        : signals?.irreversible === false
+          ? "reversible"
+          : "unknown"),
+    stopConditions: [
+      ...(input.analysis.stopConditions ?? []).filter((s) => s.trim()),
+      "NO_EXECUTE_WITHOUT_EXPLICIT_AUTHORIZE",
+    ],
+    risks: [...(input.analysis.risks ?? [])],
+    reservations: [...(input.analysis.reservations ?? [])],
+  };
+  const defaultImpact: GenericMissionImpactSignals = {
+    structuralChange: Boolean(signals?.structuralChange),
+    securityImpact: Boolean(signals?.securityImpact),
+    architectureImpact: Boolean(signals?.architectureImpact),
+    dataImpact: Boolean(signals?.dataImpact),
+    irreversible: Boolean(signals?.irreversible),
+  };
+  if (input.optionRefs) {
+    for (const ref of input.optionRefs) {
+      if (!labelForGenericMissionOption(ref)) {
+        return fail(
+          "HD_OPTION_UNKNOWN",
+          `Option de présentation inconnue: ${ref}`,
+        );
+      }
+    }
+  }
   const subject = buildGenericMissionSubject({
     missionSubjectId: input.missionSubjectId,
     projectId,
@@ -152,42 +216,24 @@ export async function sealGenericMissionForPresentation(
     objective,
     expectedOutcome,
     scopeNarrative,
-    scopeIn: ei?.scopeIn ?? [],
-    scopeOut: input.analysis.outOfScope ?? [],
+    scopeIn: input.scopeInOverride
+      ? [...input.scopeInOverride]
+      : (ei?.scopeIn ?? []),
+    scopeOut: input.scopeOutOverride
+      ? [...input.scopeOutOverride]
+      : (input.analysis.outOfScope ?? []),
     materiality: materialityResolution.assessment.materiality,
     materialityReasonCodes: materialityResolution.assessment.reasonCodes,
     repositoryBindingIdentity: currentness.repositoryIdentity,
     pathRoot: currentness.pathRoot,
-    effects: {
-      intentKind: ei?.intentKind?.trim() || null,
-      artifactType: ei?.artifactType?.trim() || null,
-      requestedOperation,
-      requiredCapabilities: [...capabilityResolution.contractCapabilities],
-      expectedOutputs: authoritativeExpectedOutputs,
-      reversibilityExpectation:
-        revFromEi ??
-        (signals?.irreversible === true
-          ? "irreversible"
-          : signals?.irreversible === false
-            ? "reversible"
-            : "unknown"),
-      stopConditions: [
-        ...(input.analysis.stopConditions ?? []).filter((s) => s.trim()),
-        "NO_EXECUTE_WITHOUT_EXPLICIT_AUTHORIZE",
-      ],
-      risks: [...(input.analysis.risks ?? [])],
-      reservations: [...(input.analysis.reservations ?? [])],
-    },
-    impactSignals: {
-      structuralChange: Boolean(signals?.structuralChange),
-      securityImpact: Boolean(signals?.securityImpact),
-      architectureImpact: Boolean(signals?.architectureImpact),
-      dataImpact: Boolean(signals?.dataImpact),
-      irreversible: Boolean(signals?.irreversible),
-    },
+    effects: input.effectsOverride ?? defaultEffects,
+    impactSignals: input.impactSignalsOverride ?? defaultImpact,
     lpsId: currentness.lpsId,
     lpsVersion: currentness.lpsVersion,
     doctrineDigest: currentness.doctrineDigest,
+    ...(input.optionRefs && input.optionRefs.length > 0
+      ? { optionRefs: [...input.optionRefs] }
+      : {}),
     presentedAtIso: input.oa.clock.nowIso(),
   });

@@ -260,10 +306,10 @@ export async function recordGenericMissionHumanDecision(
   });

   const selected = input.selectedOptionId.trim();
-  const presentedIds = new Set(
-    GENERIC_MISSION_PRESENTED_OPTIONS.map((o) => o.optionId),
-  );
-  if (!presentedIds.has(selected as (typeof GENERIC_MISSION_PRESENTED_OPTIONS)[number]["optionId"])) {
+  // Presented options are those sealed on the subject (SHE may present
+  // authorize-inspected-execute instead of accept-prepare).
+  const presentedIds = new Set(input.subject.optionRefs);
+  if (!presentedIds.has(selected) || !labelForGenericMissionOption(selected)) {
     return fail(
       "HD_OPTION_NOT_PRESENTED",
       "Option Pilote hors ensemble présenté — décision refusée.",
@@ -306,12 +352,35 @@ export async function recordGenericMissionHumanDecision(
   if (!projectOk.ok) {
     return fail("PRODUCT_PROJECT_REQUIRED", "Project introuvable pour Record.");
   }
+  // CR-02 — Product-qualified re-seal from analysis + CURRENT Product.
+  // Default ACCEPT_PREPARE presentations: never trust subject field overrides
+  // (forged objective + recomputed digest must diverge → HD_SUBJECT_STALE).
+  // SHE authorize-inspected-execute: effects were sealed from the inspected EC
+  // projection; re-apply the same presentation fields so Record stays coherent
+  // with that inspected contract (still re-reads CURRENT LPS/repo anchors).
+  const sheAuthorizePresentation =
+    selected === GENERIC_MISSION_OPTION_AUTHORIZE_INSPECTED_EXECUTE &&
+    input.subject.optionRefs.includes(
+      GENERIC_MISSION_OPTION_AUTHORIZE_INSPECTED_EXECUTE,
+    );
   const fresh = await sealGenericMissionForPresentation({
     oa: input.oa,
     projectId: input.subject.projectId,
     cycleInstanceId: input.subject.cycleInstanceId,
     analysis: input.analysis,
     missionSubjectId: input.subject.missionSubjectId,
+    optionRefs: input.subject.optionRefs,
+    ...(sheAuthorizePresentation
+      ? {
+          effectsOverride: input.subject.effects,
+          impactSignalsOverride: input.subject.impactSignals,
+          objectiveOverride: input.subject.objective,
+          expectedOutcomeOverride: input.subject.expectedOutcome,
+          scopeNarrativeOverride: input.subject.scopeNarrative,
+          scopeInOverride: input.subject.scopeIn,
+          scopeOutOverride: input.subject.scopeOut,
+        }
+      : {}),
   });
   if (!fresh.ok) {
     return fail(fresh.code, fresh.message);
@@ -319,12 +388,11 @@ export async function recordGenericMissionHumanDecision(
   const presentedDigest = (
     input.presentedPresentationDigest ?? input.subject.presentationDigest
   ).trim();
-  const status =
-    selected === GENERIC_MISSION_OPTION_ACCEPT_PREPARE
-      ? ("accepted" as const)
-      : selected === GENERIC_MISSION_OPTION_REFUSE
-        ? ("refused" as const)
-        : ("amended" as const);
+  const status = isGenericMissionAcceptedAuthorityOption(selected)
+    ? ("accepted" as const)
+    : selected === GENERIC_MISSION_OPTION_REFUSE
+      ? ("refused" as const)
+      : ("amended" as const);

   // M-HD-02 — identical replay (incl. after legitimate LPS link bump) returns durable state.
   const history = await input.oa.decisionServices.listDecisionHistory.execute({
@@ -452,10 +520,12 @@ export async function recordGenericMissionHumanDecision(
       ? { cycleInstanceId: input.subject.cycleInstanceId }
       : {}),
     subject: input.subject.missionSubjectId,
-    options: GENERIC_MISSION_PRESENTED_OPTIONS.map((o) => ({
-      optionId: o.optionId,
-      label: o.label,
-    })),
+    options: resolveGenericMissionPresentedOptions(input.subject.optionRefs).map(
+      (o) => ({
+        optionId: o.optionId,
+        label: o.label,
+      }),
+    ),
     selectedOptionId: selected,
     actor: decisionActor,
     authority: "pilot",
@@ -519,6 +589,7 @@ export async function recordGenericMissionHumanDecision(

 export {
   GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
+  GENERIC_MISSION_OPTION_AUTHORIZE_INSPECTED_EXECUTE,
   GENERIC_MISSION_OPTION_REFUSE,
   GENERIC_MISSION_OPTION_REQUEST_AMEND,
 };


```

# APPENDIX E — DIFF: verifyGenericMissionHumanDecisionForPrepare.ts

```diff

diff --git a/projects/sfia-studio/app/features/project-assistant/w2/verifyGenericMissionHumanDecisionForPrepare.ts b/projects/sfia-studio/app/features/project-assistant/w2/verifyGenericMissionHumanDecisionForPrepare.ts
index 4d26b84d..dc981c1e 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/verifyGenericMissionHumanDecisionForPrepare.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/verifyGenericMissionHumanDecisionForPrepare.ts
@@ -18,6 +18,7 @@ import { resolveAuthoritativeProductMateriality } from "./resolveAuthoritativePr
 import { resolveGenericPrepareCapabilityEnvelope } from "./genericPrepareCapabilityEnvelope";
 import {
   GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
+  isGenericMissionAcceptedAuthorityOption,
   assertExecutionContractInternalConsistency,
   compareExecutionContractToSealedHumanDecision,
   evaluateLpsTransitionAfterHumanDecision,
@@ -258,14 +259,19 @@ async function loadAndValidateAcceptedGenericMissionHd(input: {
       message: "Sujet HumanDecision ≠ missionSubjectId scellé.",
     };
   }
+  // Accepted authority options: ACCEPT_PREPARE (historical PREPARE-gate) or
+  // AUTHORIZE_INSPECTED_EXECUTE (D-P6-SHE-01 Exécuter). Callers that require
+  // PREPARE specifically re-assert ACCEPT_PREPARE after this load.
   if (
-    decision.selectedOptionId !== GENERIC_MISSION_OPTION_ACCEPT_PREPARE ||
-    ctx.selectedOptionRef !== GENERIC_MISSION_OPTION_ACCEPT_PREPARE
+    !isGenericMissionAcceptedAuthorityOption(decision.selectedOptionId) ||
+    !isGenericMissionAcceptedAuthorityOption(ctx.selectedOptionRef) ||
+    decision.selectedOptionId !== ctx.selectedOptionRef
   ) {
     return {
       ok: false,
       code: "HD_REFUSED",
-      message: "Option accept-prepare absente — PREPARE non débloqué.",
+      message:
+        "Option d'autorité acceptée absente ou incohérente — reprise refusée.",
     };
   }

@@ -434,6 +440,19 @@ export async function verifyGenericMissionHumanDecisionForPrepare(input: {
   const basis = decision.decisionBasis!;
   const ctx = basis.genericMissionContext!;

+  // PREPARE path — only ACCEPT_PREPARE unblocks. SHE authorize-execute is not
+  // a substitute for the historical PREPARE-gate option.
+  if (
+    decision.selectedOptionId !== GENERIC_MISSION_OPTION_ACCEPT_PREPARE ||
+    ctx.selectedOptionRef !== GENERIC_MISSION_OPTION_ACCEPT_PREPARE
+  ) {
+    return {
+      ok: false,
+      code: "HD_REFUSED",
+      message: "Option accept-prepare absente — PREPARE non débloqué.",
+    };
+  }
+
   const expectedCycle = input.cycleInstanceId?.trim() || null;
   const sealedCycle = ctx.cycleInstanceId ?? null;
   if (expectedCycle !== sealedCycle) {


```

# APPENDIX F — DIFF: executionMateriality.ts

```diff

diff --git a/projects/sfia-studio/app/lib/oa/execution-contract/domain/executionMateriality.ts b/projects/sfia-studio/app/lib/oa/execution-contract/domain/executionMateriality.ts
index caca1326..d9826696 100644
--- a/projects/sfia-studio/app/lib/oa/execution-contract/domain/executionMateriality.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-contract/domain/executionMateriality.ts
@@ -123,20 +123,28 @@ export function assessExecutionMateriality(
 /**
  * When Product context required for a safe non-structural claim is missing,
  * force UNKNOWN (fail-closed — no empty decisionRefs confirm).
+ *
+ * D-P6-SHE-01 / Option A: positive structural facts still stamp STRUCTURAL
+ * even when non-structural sufficiency is absent — UNKNOWN is only for the
+ * residual case (no structural facts ∧ insufficient context for NON_STRUCTURAL).
  */
 export function assessExecutionMaterialityOrUnknown(input: {
   readonly facts: ExecutionMaterialityFacts;
   readonly productContextSufficient: boolean;
 }): ExecutionMaterialityAssessment {
+  const assessed = assessExecutionMateriality(input.facts);
+  if (assessed.materiality === "structural") {
+    return assessed;
+  }
   if (!input.productContextSufficient) {
     return {
       materiality: "unknown",
-      reasonCodes: ["product_context_insufficient"],
+      reasonCodes: ["product_context_insufficient", ...assessed.reasonCodes],
       humanDecisionRequired: true,
       constraintToken: constraintTokenFor("unknown"),
     };
   }
-  return assessExecutionMateriality(input.facts);
+  return assessed;
 }

 export function materialityFromContractConstraints(


```

# APPENDIX G — DIFF: w2/actions.ts

```diff

diff --git a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
index 83c21bcc..b0a2ecbc 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
@@ -36,6 +36,10 @@ import {
   rehydrateW3bProductTerminal,
 } from "./materializeW3bProductTerminal";
 import { inspectExecutionContract } from "./inspectExecutionContract";
+import {
+  singleHumanExecutePreparedContract,
+  type SingleHumanExecutePreparedContractResult,
+} from "./singleHumanExecutePreparedContract";
 import { loadPresentedOptionSet } from "./presentedOptionSet";
 import { readActiveProposalDecisionSubject } from "./activeProposalDecisionSubject";
 import { readCurrentGovernedExecutionContinuity } from "./readCurrentGovernedExecutionContinuity";
@@ -348,6 +352,56 @@ export async function w2AuthorizeExecutionContractAction(input: {
   });
 }

+/**
+ * D-P6-SHE-01 — single Pilote "Exécuter" gesture after inspectable PREPARE.
+ * Carries presentation attestation, records structural HD when deferred,
+ * Confirm + Authorize. Does not create Attempt (reconcile/governed execute follows).
+ */
+export async function w2SingleHumanExecuteAction(input: {
+  projectId: string;
+  executionContractId: string;
+  expectedVersion: number;
+  expectedSemanticFingerprint: string;
+  presentedFactIds: readonly string[];
+}): Promise<SingleHumanExecutePreparedContractResult> {
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) {
+    return {
+      ok: false,
+      code: "OA_UNAVAILABLE",
+      message: "OA runtime indisponible.",
+      executionAttemptCreated: false,
+      humanDecisionCreated: false,
+    };
+  }
+
+  const headerList = await headers();
+  const pilote = await resolveCurrentAuthenticatedPilote({
+    headers: headerList,
+  });
+  const forceLocalAuthority =
+    process.env.VITEST === "true" ||
+    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY === "1";
+
+  return singleHumanExecutePreparedContract({
+    oa: runtime.oa,
+    projectId: input.projectId,
+    executionContractId: input.executionContractId,
+    expectedVersion: input.expectedVersion,
+    expectedSemanticFingerprint: input.expectedSemanticFingerprint,
+    presentedFactIds: input.presentedFactIds,
+    forceLocalAuthority,
+    ...(pilote.ok
+      ? {
+          authenticatedPilote: {
+            actor: pilote.actor,
+            githubUserId: pilote.githubUserId,
+          },
+        }
+      : {}),
+  });
+}
+
 /**
  * Pilote material amendment — append one tightening execution constraint via
  * OA supersession. Client cannot choose actor/authority; no Execute.


```

# APPENDIX H — DIFF: f2/orchestrateF2.ts

```diff

diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 9b783ae6..9ca5fa01 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -2305,29 +2305,16 @@ export async function orchestrateAssistantSend(input: {
           });
       const readiness = assessGenericMissionPrepareReadiness(readinessAnalysis);

-      if (readiness.structuralBlocked || !readiness.ready) {
-        // M-HD-02 — when structural fields are sufficient, remember CURRENT
-        // offer so ConversationSurface can seal + present Accept/Refuse/Amend.
-        // No PREPARE. No HumanDecision. No PresentedMission store.
-        if (
-          readiness.structuralBlocked &&
-          readiness.missingFields.length === 0
-        ) {
-          rememberGenericPrepareRecommendation({
-            projectId: project.projectId,
-            cycleInstanceId: activeId,
-            analysis: readinessAnalysis,
-            offeredAtIso: oa.clock.nowIso(),
-            sessionDbPath: input.sessionDbPath,
-          });
-        }
+      // D-P6-SHE-01 — missing descriptive fields still block PREPARE.
+      // structuralBlocked alone no longer refuses PREPARE (HD deferred to Execute).
+      if (!readiness.ready) {
         return await completeF2Turn({
           userText: content,
           sessionDbPath: input.sessionDbPath,
           text: genericMissionClarificationText({
             presentation,
             missingFields: readiness.missingFields,
-            structuralBlocked: readiness.structuralBlocked,
+            structuralBlocked: false,
             hasActiveCycle: Boolean(activeId),
           }),
           mode: modeResolution.mode as "fixture" | "live",


```

# APPENDIX I — DIFF: prepareGenericExecutionContractDraft.ts

```diff

diff --git a/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts b/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
index 40c4cb77..0bfe988b 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
@@ -223,8 +223,11 @@ export function assessGenericMissionPrepareReadiness(
     missingFields.push("résultat attendu ou périmètre");
   }

+  // D-P6-SHE-01 — structural signals no longer block PREPARE readiness.
+  // HD / authority remain required before launch (Execute), not before an
+  // inspectable proposal. Missing descriptive fields still block PREPARE.
   return {
-    ready: !structuralBlocked && missingFields.length === 0,
+    ready: missingFields.length === 0,
     structuralBlocked,
     missingFields,
   };
@@ -654,21 +657,15 @@ export async function prepareGenericExecutionContractDraft(
   const materiality = materialityResolution.assessment;
   const hdRequired =
     readiness.structuralBlocked || materiality.humanDecisionRequired;
+  /**
+   * D-P6-SHE-01 — STRUCTURAL / UNKNOWN may PREPARE an inspectable contract with
+   * empty decisionRefs. HumanDecision is deferred to the explicit Execute
+   * gesture (INV-SHE-PREPARE-NO-AUTHORITY / INV-SHE-STRUCTURAL-INSPECTABLE).
+   * Optional pre-bound decisionId remains supported for resume paths.
+   */
+  let sheDeferredStructuralAuthority = false;

-  if (hdRequired) {
-    if (!decisionId) {
-      return {
-        ok: false,
-        code:
-          materiality.materiality === "unknown" && !readiness.structuralBlocked
-            ? "MATERIALITY_UNKNOWN"
-            : "STRUCTURAL_HUMAN_DECISION_REQUIRED",
-        message:
-          materiality.materiality === "unknown" && !readiness.structuralBlocked
-            ? "Matérialité indéterminée — contexte Product insuffisant ou contradiction ; HumanDecision / clarification requise."
-            : "Cette mission engage une vérité structurelle — une HumanDecision Pilote reste requise avant préparation.",
-      };
-    }
+  if (hdRequired && decisionId) {
     const verified = await verifyGenericMissionHumanDecisionForPrepare({
       oa: input.oa,
       projectId: input.projectId,
@@ -709,8 +706,11 @@ export async function prepareGenericExecutionContractDraft(
       pathRoot: sealedCtx.pathRoot,
       impactSignals: { ...sealedCtx.impactSignals },
     };
+  } else if (hdRequired) {
+    sheDeferredStructuralAuthority = true;
+    // decisionRefs stay []; honest MATERIALITY stamp remains on constraints.
   }
-  // Non-structural: decisionRefs remain empty (no systematic HD).
+  // Non-structural / SHE-deferred: decisionRefs remain empty (no systematic HD at PREPARE).

   const services = input.oa.executionContractServices;
   if (!services?.buildExecutionContract) {
@@ -977,6 +977,7 @@ export async function prepareGenericExecutionContractDraft(
       cursorDeterminesHow: true,
       prepareWithoutSystematicHumanDecision: verifiedDecisionRefs.length === 0,
       verifiedGenericMissionHumanDecisionId: verifiedDecisionRefs[0] ?? null,
+      sheDeferredStructuralAuthority,
       missionSubjectId: verifiedMissionSubjectId,
       presentationDigest: verifiedPresentationDigest,
       humanDecisionCreated: false,
@@ -1202,11 +1203,13 @@ export function genericMissionClarificationText(input: {
       ? "Contexte projet conservé — aucun cycle artificiel créé."
       : "Le cycle actif est conservé.";
   if (input.structuralBlocked) {
+    // D-P6-SHE-01 — structural boundary is disclosed; PREPARE of an inspectable
+    // proposal remains admissible. Authority is consumed at Execute, not here.
     return [
       head,
       contextKept,
-      "Cette demande touche une frontière structurelle — une décision Pilote explicite reste nécessaire avant de préparer un contrat d'exécution.",
-      "Rien n'a encore été exécuté.",
+      "Cette demande touche une frontière structurelle — le contrat d'exécution pourra être préparé pour inspection ; l'autorité Pilote sera consommée au clic Exécuter, pas à la préparation.",
+      "Préparer ≠ autoriser ≠ exécuter. Rien n'a encore été exécuté.",
     ].join(" ");
   }
   if (input.recommendPrepare) {


```

# APPENDIX J — DIFF: ExecutionSurface.tsx

```diff

diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ExecutionSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ExecutionSurface.tsx
index 34ef0684..6ee45ec1 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ExecutionSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ExecutionSurface.tsx
@@ -2,12 +2,12 @@

 import { useCallback, useEffect, useMemo, useRef, useState } from "react";
 import {
-  w2AuthorizeExecutionContractAction,
   w2ConfirmExecutionContractAction,
   w2DeriveGovernedExecutionContinuityAction,
   w2InspectExecutionContractAction,
   w2ReadCurrentGovernedExecutionContinuityAction,
   w2ReconcileGovernedExecutionAction,
+  w2SingleHumanExecuteAction,
 } from "@/features/project-assistant/w2/actions";
 import type { GovernedExecutionContinuityProjection } from "@/features/project-assistant/w2/deriveGovernedExecutionContinuityProjection";
 import {
@@ -502,91 +502,95 @@ export function ExecutionSurface({
       );
       return;
     }
+    // D-P6-SHE-01 — Exécuter may carry attestation of presented facts.
+    // Require an open exam (or prior sufficient inspection) so disclosure is
+    // actually presented; no separate Attester CTA is mandatory.
+    if (!inspectionView || inspectionView.disclosureIncomplete) {
+      setError(
+        "Disclosure d’inspection incomplète — Exécuter refusé.",
+      );
+      return;
+    }
+    const alreadyInspected =
+      preExec != null &&
+      preExec.ok &&
+      preExec.kind === "active" &&
+      preExec.inspection.inspectionSufficient === true;
+    if (!alreadyInspected && !inspectionPanelOpen) {
+      // Soft gate: open the exam so the Pilote can consult before retry.
+      handleOpenInspection();
+      setError(
+        "Consultez les informations contractuelles affichées, puis Exécuter.",
+      );
+      return;
+    }
+    if (inspectionView.presentedFactIds.length === 0) {
+      setError("Aucun fait contractuel présenté — Exécuter refusé.");
+      return;
+    }
+    if (
+      inspectionPanelOpen &&
+      inspectionExamSnapshot &&
+      !sameInspectionExamSnapshot(inspectionExamSnapshot, {
+        projectId,
+        executionContractId: target.executionContractId,
+        version: target.expectedVersion,
+        semanticFingerprint: target.semanticFingerprint,
+      })
+    ) {
+      setInspectionPanelOpen(false);
+      setInspectionExamSnapshot(null);
+      setError(
+        "Identité contractuelle modifiée — nouvel examen requis.",
+      );
+      return;
+    }
+
     setBusy(true);
     setError(null);
     try {
       const { current } = await refreshExecutionContinuity();
-      const active =
+      const activeAfter =
         current.ok && current.kind === "active" ? current : null;
-      if (!active) {
+      if (!activeAfter) {
         setError("Contrat durable introuvable après relecture.");
         return;
       }
       if (
-        active.contract.executionContractId !== target.executionContractId ||
-        active.contract.version !== target.expectedVersion
+        activeAfter.contract.executionContractId !==
+          target.executionContractId ||
+        activeAfter.contract.version !== target.expectedVersion
       ) {
         setError(
           "Identité ou version contractuelle incohérente — exécution refusée.",
         );
         return;
       }
-      // Execute never records inspection as a side effect.
-      if (!active.inspection.inspectionSufficient) {
-        setError(
-          "Inspection suffisante requise avant exécution — utilisez Inspecter.",
-        );
-        return;
-      }

-      // Tool-first / CR-P6-02 — one Pilot "Exécuter" gesture: Confirm (when
-      // required) then Authorize with exact binding to the inspected attestation.
-      // Inspect ≠ Confirm ≠ Authorize ≠ Execute remain distinct server acts.
-      let expectedVersion =
-        active.inspection.attestedVersion ?? active.contract.version;
-      let expectedSemanticFingerprint =
-        active.inspection.attestedSemanticFingerprint ||
-        active.inspection.semanticFingerprint ||
-        active.contract.semanticFingerprint ||
-        undefined;
-
-      if (active.contract.status === "confirmation_required") {
-        const confirmed = await w2ConfirmExecutionContractAction({
-          projectId,
-          executionContractId: active.contract.executionContractId,
-        });
-        if (!confirmed.ok) {
-          setError(confirmed.message);
-          await refreshExecutionContinuity();
-          return;
-        }
-        // Prefer attested binding; fall back to Confirm version bump when present.
-        expectedVersion =
-          active.inspection.attestedVersion ??
-          confirmed.contractVersion ??
-          expectedVersion;
-        expectedSemanticFingerprint =
-          active.inspection.attestedSemanticFingerprint ||
-          active.inspection.semanticFingerprint ||
-          expectedSemanticFingerprint;
-      }
-
-      const auth = await w2AuthorizeExecutionContractAction({
+      // One server gesture: attest + HD (if deferred) + Confirm + Authorize.
+      // OA transitions remain distinct; no Attempt until reconcile below.
+      const she = await w2SingleHumanExecuteAction({
         projectId,
-        executionContractId: active.contract.executionContractId,
-        expectedVersion,
-        expectedSemanticFingerprint,
+        executionContractId: activeAfter.contract.executionContractId,
+        expectedVersion: activeAfter.contract.version,
+        expectedSemanticFingerprint:
+          activeAfter.contract.semanticFingerprint ||
+          target.semanticFingerprint,
+        presentedFactIds: inspectionView.presentedFactIds,
       });
-      if (!auth.ok) {
-        setError(auth.message);
-        await refreshExecutionContinuity();
-        return;
-      }
-      if (auth.outcome !== "AUTHORIZED" || auth.executionEligible !== true) {
-        setError(
-          auth.executionEligibilityReasonCode ||
-            "Autorisation insuffisante — exécution refusée.",
-        );
+      if (!she.ok) {
+        setError(she.message);
         await refreshExecutionContinuity();
         return;
       }

-      // Execute once; continuation uses intent="continue" only.
-      await runServerReconcile(
-        "execute",
-        active.contract.executionContractId,
-        0,
-      );
+      setInspectionPanelOpen(false);
+      setInspectionExamSnapshot(null);
+      await refreshExecutionContinuity();
+      onDurableFactsChanged?.();
+
+      // Execute once on the authorized contract (may be SHE HD successor).
+      await runServerReconcile("execute", she.executionContractId, 0);
     } finally {
       setBusy(false);
     }
@@ -595,6 +599,12 @@ export function ExecutionSurface({
     resolveActivePreContract,
     refreshExecutionContinuity,
     runServerReconcile,
+    inspectionView,
+    inspectionPanelOpen,
+    inspectionExamSnapshot,
+    handleOpenInspection,
+    onDurableFactsChanged,
+    preExec,
   ]);

   const workItems = expandedWork
@@ -854,24 +864,43 @@ export function ExecutionSurface({
           </button>
         ) : null}
         {presentation.cta.kind === "execute" ? (
-          <button
-            type="button"
-            className={styles.primaryButton}
-            data-testid="project-execution-execute"
-            disabled={!presentation.cta.enabled}
-            aria-label={presentation.cta.label}
-            title={
-              presentation.cta.enabled
-                ? presentation.attentionNote ?? presentation.cta.label
-                : presentation.attentionNote ??
-                  "Exécution indisponible — conditions non satisfaites."
-            }
-            onClick={() => {
-              void handleExecute();
-            }}
-          >
-            {busy ? "Exécution…" : presentation.cta.label}
-          </button>
+          <>
+            {/*
+              D-P6-SHE-01 — Consulter is consult-only (no attestation write).
+              Exécuter remains the sole authority gesture; Attester is not required.
+            */}
+            <button
+              type="button"
+              className={styles.moreLink}
+              data-testid="project-execution-inspect"
+              disabled={busy}
+              aria-label="Consulter le contrat"
+              title="Ouvre le détail inspectable — n’enregistre aucune attestation."
+              onClick={() => {
+                handleOpenInspection();
+              }}
+            >
+              Consulter le contrat
+            </button>
+            <button
+              type="button"
+              className={styles.primaryButton}
+              data-testid="project-execution-execute"
+              disabled={!presentation.cta.enabled}
+              aria-label={presentation.cta.label}
+              title={
+                presentation.cta.enabled
+                  ? presentation.attentionNote ?? presentation.cta.label
+                  : presentation.attentionNote ??
+                    "Exécution indisponible — conditions non satisfaites."
+              }
+              onClick={() => {
+                void handleExecute();
+              }}
+            >
+              {busy ? "Exécution…" : presentation.cta.label}
+            </button>
+          </>
         ) : null}
         {presentation.cta.kind === "return_conversation" ||
         presentation.cta.kind === "none" ? (


```

# APPENDIX K — DIFF: pilotExecutionPresentation.ts

```diff

diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation.ts b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation.ts
index efc39460..93fade27 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation.ts
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation.ts
@@ -615,10 +615,12 @@ export function presentPilotExecution(
     const status: PilotExecutionStatus = needsConfirm ? "a_confirmer" : "prete";

     const preActiveVerified = pre != null && identityAligned;
-    const durableActionable =
-      preActiveVerified &&
-      inspectionSufficient &&
-      inspectionAlignedWithContract;
+    // D-P6-SHE-01 — same UX STRUCTURAL/NON_STRUCTURAL: Exécuter is the primary
+    // gesture. Attestation may be carried by Exécuter (no separate Attester CTA
+    // required). Stale attestation after material change still forces re-examine.
+    const sheExecuteAdmissible =
+      preActiveVerified && inspectionAlignedWithContract;
+    const durableActionable = sheExecuteAdmissible;

     let cta: PilotExecutionCta;
     let attentionNote: string | null;
@@ -635,49 +637,23 @@ export function presentPilotExecution(
             : !identityAligned
               ? "Identité contractuelle incohérente entre projection et continuité — actions refusées."
               : "Continuité pré-exécution indisponible — un identifiant de contrat seul n’autorise aucune action.";
-    } else if (needsConfirm && !inspectionSufficient) {
-      cta = {
-        kind: "inspect",
-        label: "Examiner le contrat",
-        enabled: !busy,
-      };
-      attentionNote =
-        "Examen des faits contractuels requis avant confirmation. Ouvrir le détail n’enregistre aucune attestation.";
-    } else if (needsConfirm && inspectionSufficient && !inspectionAlignedWithContract) {
+    } else if (inspectionSufficient && !inspectionAlignedWithContract) {
       cta = {
         kind: "inspect",
         label: "Réexaminer le contrat",
         enabled: !busy,
       };
       attentionNote =
-        "Version ou empreinte modifiée — réexamen requis avant confirmation.";
-    } else if (needsConfirm) {
-      // Tool-first ordinary path — one Pilot "Exécuter" gesture folds Confirm
-      // after inspection attestation (Trajectory CR-P6-02 pattern). Inspect ≠ Execute.
-      cta = {
-        kind: "execute",
-        label: "Exécuter",
-        enabled: durableActionable && !busy,
-      };
-      attentionNote =
-        "Après inspection, Exécuter porte la confirmation de la version affichée puis l’autorisation — aucun effet avant ce clic.";
-    } else if (!inspectionSufficient || !inspectionAlignedWithContract) {
-      cta = {
-        kind: "inspect",
-        label: "Examiner le contrat",
-        enabled: !busy,
-      };
-      attentionNote = !inspectionAlignedWithContract
-        ? "Version ou empreinte modifiée — réinspection requise avant exécution."
-        : "Inspection insuffisante — exécution refusée jusqu’à inspection explicite.";
+        "Version ou empreinte modifiée — réexamen requis avant Exécuter.";
     } else {
       cta = {
         kind: "execute",
         label: "Exécuter",
-        enabled: durableActionable && !busy,
+        enabled: sheExecuteAdmissible && !busy,
       };
-      attentionNote =
-        "L’action reste limitée à la portée du contrat. Aucun effet hors contrat n’est prévu.";
+      attentionNote = inspectionSufficient
+        ? "Exécuter consomme l'autorité applicable pour ce contrat inspecté (HD/Confirm internes si requis) — aucun clic humain additionnel."
+        : "Consultez le détail contractuel, puis Exécuter atteste les faits présentés et consomme l'autorité — aucun bouton Attester séparé obligatoire. Préparer ≠ autoriser ≠ exécuter.";
     }

     return {


```

# APPENDIX L — DIFF: p6.mHd01.authorityContinuityCorrection.d0.test.ts

```diff

diff --git a/projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.authorityContinuityCorrection.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.authorityContinuityCorrection.d0.test.ts
index 810a1a2c..3e45f4d1 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.authorityContinuityCorrection.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.authorityContinuityCorrection.d0.test.ts
@@ -447,7 +447,7 @@ describe("P6 M-HD-01 Authority Continuity Correction", () => {
       expect(recorded.code).toBe("AUTHORITY_NOT_CONFIGURED");
     });

-    it("PR04 — Confirmation alone is not HumanDecision", async () => {
+    it("PR04 — D-P6-SHE-01: Confirmation alone is not HumanDecision; structural PREPARE empty refs", async () => {
       const { projectId, oa } = await seedProject("pr04");
       const prep = await solicitGenericExecutionPrepare({
         oa,
@@ -480,6 +480,8 @@ describe("P6 M-HD-01 Authority Continuity Correction", () => {
           forceLocalAuthority: true,
         });
       }
+      // D-P6-SHE-01 — Confirmation alone is not HumanDecision; structural PREPARE
+      // succeeds with empty decisionRefs (HD deferred to Execute).
       const structural = await solicitGenericExecutionPrepare({
         oa,
         projectId,
@@ -489,9 +491,20 @@ describe("P6 M-HD-01 Authority Continuity Correction", () => {
         forceLocalAuthority: true,
         pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
       });
-      expect(structural.ok).toBe(false);
-      if (structural.ok) throw new Error("expected refuse");
-      expect(structural.code).toBe("STRUCTURAL_HUMAN_DECISION_REQUIRED");
+      expect(structural.ok).toBe(true);
+      if (!structural.ok) throw new Error(structural.message);
+      expect(structural.humanDecisionCreated).toBe(false);
+      expect(structural.executionAttemptCreated).toBe(false);
+      const structuralLive =
+        await oa.executionContractServices.getExecutionContract.execute({
+          executionContractId: structural.executionContractId,
+        });
+      expect(structuralLive.ok).toBe(true);
+      if (!structuralLive.ok) throw new Error("structural get");
+      expect(structuralLive.contract.decisionRefs ?? []).toEqual([]);
+      expect(structuralLive.contract.constraints).toContain(
+        "MATERIALITY:STRUCTURAL",
+      );
     });

     it("PR05/PR06/PR07 — refuse/amend/no Attempt", async () => {
@@ -713,7 +726,7 @@ describe("P6 M-HD-01 Authority Continuity Correction", () => {
       expect(live.contract.decisionRefs ?? []).toEqual([]);
     });

-    it("AU10 — structural without HD fail-closed", async () => {
+    it("AU10 — D-P6-SHE-01: structural without HD → PREPARE OK empty refs STRUCTURAL", async () => {
       const { projectId, oa } = await seedProject("au10");
       const prep = await solicitGenericExecutionPrepare({
         oa,
@@ -724,9 +737,17 @@ describe("P6 M-HD-01 Authority Continuity Correction", () => {
         forceLocalAuthority: true,
         pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
       });
-      expect(prep.ok).toBe(false);
-      if (prep.ok) throw new Error("expected refuse");
-      expect(prep.code).toBe("STRUCTURAL_HUMAN_DECISION_REQUIRED");
+      expect(prep.ok).toBe(true);
+      if (!prep.ok) throw new Error(prep.message);
+      expect(prep.humanDecisionCreated).toBe(false);
+      expect(prep.executionAttemptCreated).toBe(false);
+      const live = await oa.executionContractServices.getExecutionContract.execute({
+        executionContractId: prep.executionContractId,
+      });
+      expect(live.ok).toBe(true);
+      if (!live.ok) throw new Error("get");
+      expect(live.contract.decisionRefs ?? []).toEqual([]);
+      expect(live.contract.constraints).toContain("MATERIALITY:STRUCTURAL");
     });
   });



```

# APPENDIX M — DIFF: p6.mHd01.genericMissionHumanDecision.d0.test.ts

```diff

diff --git a/projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.genericMissionHumanDecision.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.genericMissionHumanDecision.d0.test.ts
index 6259e3b1..4338baf3 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.genericMissionHumanDecision.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.genericMissionHumanDecision.d0.test.ts
@@ -221,7 +221,7 @@ describe("P6 M-HD-01 Generic Mission HumanDecision", () => {
     expect(live.contract.decisionRefs ?? []).toEqual([]);
   });

-  it("HD02 — structural without HD → STRUCTURAL_HUMAN_DECISION_REQUIRED", async () => {
+  it("HD02 — SHE: structural without HD → inspectable PREPARE (empty decisionRefs; HD deferred)", async () => {
     const { projectId, oa } = await seedProject("hd02");
     const prep = await solicitGenericExecutionPrepare({
       oa,
@@ -232,9 +232,17 @@ describe("P6 M-HD-01 Generic Mission HumanDecision", () => {
       forceLocalAuthority: true,
       pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
     });
-    expect(prep.ok).toBe(false);
-    if (prep.ok) throw new Error("expected refuse");
-    expect(prep.code).toBe("STRUCTURAL_HUMAN_DECISION_REQUIRED");
+    // D-P6-SHE-01 — PREPARE no longer consumes structural HD.
+    expect(prep.ok).toBe(true);
+    if (!prep.ok) throw new Error(prep.message);
+    const live = await oa.executionContractServices.getExecutionContract.execute({
+      executionContractId: prep.executionContractId,
+    });
+    expect(live.ok).toBe(true);
+    if (!live.ok) throw new Error("get");
+    expect(live.contract.decisionRefs ?? []).toEqual([]);
+    expect(live.contract.constraints).toContain("MATERIALITY:STRUCTURAL");
+    expect(live.contract.inputs?.sheDeferredStructuralAuthority).toBe(true);
   });

   it("HD03 — structural with accepted HD → same mission resume + decisionRefs", async () => {
@@ -615,7 +623,8 @@ describe("P6 M-HD-01 Generic Mission HumanDecision", () => {
       });
       expect(confirmed.ok).toBe(true);
     }
-    // Structural still requires HD — Confirmation on another contract ≠ HD.
+    // D-P6-SHE-01 — Confirmation on another contract ≠ structural HD, but
+    // STRUCTURAL PREPARE is now allowed without HD (authority at Exécuter).
     const structural = await solicitGenericExecutionPrepare({
       oa,
       projectId,
@@ -625,9 +634,18 @@ describe("P6 M-HD-01 Generic Mission HumanDecision", () => {
       forceLocalAuthority: true,
       pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
     });
-    expect(structural.ok).toBe(false);
-    if (structural.ok) throw new Error("expected refuse");
-    expect(structural.code).toBe("STRUCTURAL_HUMAN_DECISION_REQUIRED");
+    expect(structural.ok).toBe(true);
+    if (!structural.ok) throw new Error(structural.message);
+    const structuralLive =
+      await oa.executionContractServices.getExecutionContract.execute({
+        executionContractId: structural.executionContractId,
+      });
+    expect(structuralLive.ok).toBe(true);
+    if (!structuralLive.ok) throw new Error("get structural");
+    expect(structuralLive.contract.decisionRefs ?? []).toEqual([]);
+    expect(structuralLive.contract.constraints).toContain(
+      "MATERIALITY:STRUCTURAL",
+    );
   });

   it("HD14 — Record HumanDecision creates no Attempt", async () => {


```

# APPENDIX N — Other test requalifications (name-status)

Remaining modified tests (full diffs available in Delivery worktree; assertions requalified for SHE Exécuter / AUTHORIZE_INSPECTED_EXECUTE / empty decisionRefs STRUCTURAL PREPARE / UI action wiring — no security rule weakened):


- `p5.s03.durableExecutionActionContinuity.ui.test.tsx`
- `p5.s03.executionReconcileContinuity.ui.test.tsx`
- `p5.s03.pilotExecutionPresentation.d0.test.ts`
- `p6.r02.actionAvailability.d0.test.ts`
- `p6.uic.unifiedInspectionContract.ui.test.tsx`
- `p6.authorityChatFirstContinuity.d0.test.ts`
- `p6.closureRegularization.repositoryCurrentness.d0.test.ts`
- `p6.der16.genericNoraToolInvocation.d0.test.ts`
- `p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts`
- `p6.mHd02.pilotPresentationRecordBinding.d0.test.ts`
- `p6.projectScopedCursorSelection.d0.test.ts`
- `p6.toolFirst.safetyClosureR1R2.d0.test.ts`


# APPENDIX O — Git Truth (Delivery worktree at pack time)

```
pwd: /Users/morris/Projects/sfia-workspace-p6-she-delivery-476b1c20
remote: origin https://github.com/mcleland147/sfia-workspace.git
branch: delivery/sfia-studio-p6-single-human-execute
HEAD: 476b1c2065991e05cca298f6669d85b62a07ced3
origin/main: 476b1c2065991e05cca298f6669d85b62a07ced3
status: dirty — Delivery candidate uncommitted (expected)
created untracked:
  projects/sfia-studio/app/features/project-assistant/w2/singleHumanExecutePreparedContract.ts
  projects/sfia-studio/app/__tests__/project-assistant/p6.she.singleHumanExecute.d0.test.ts
```

# END REVIEW PACK FULL — CRITICAL
