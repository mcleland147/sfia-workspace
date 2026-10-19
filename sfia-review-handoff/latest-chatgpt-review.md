# REVIEW PACK — FULL CRITICAL
# P6 — SINGLE HUMAN EXECUTE — INTEGRATED PRODUCT DELIVERY

**Timestamp (UTC):** 2026-10-19T08:17:20Z
**Timezone local:** 2026-10-19 Europe/Paris
**Macro:** STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
**Chantier:** P6-SINGLE-HUMAN-EXECUTE-INTEGRATED-DELIVERY
**Milestone:** P6 — GLOBAL INTEGRATED PRODUCT QA
**Cycle type:** 8 — Delivery / implémentation
**Profile:** CRITICAL
**Typology:** EVOL / PRODUCT DELIVERY
**Capacité:** V3-F05 (connexes V3-F11 / V3-F12 / V3-F14)
**Décision:** D-P6-SHE-01 — ADOPTED BY MORRIS — TARGET ARCHITECTURE
**GO Morris consommé:** Delivery Product Single Human Execute selon Option A
**GO NON accordés:** nouvelle architecture structurante; nouveau moteur Product; migration persistence; contournement protected paths; push Product; PR Product; merge; suppression branche; HQA LIVE; Cursor REAL; modification doctrine/baseline; promotion runtime v3

---

## 1. Git Truth

| Item | Value |
|------|-------|
| Repository | mcleland147/sfia-workspace |
| Remote | https://github.com/mcleland147/sfia-workspace.git |
| Delivery worktree | `/Users/morris/Projects/sfia-workspace-p6-she-delivery-476b1c20` |
| Branch | `delivery/sfia-studio-p6-single-human-execute` |
| HEAD | `476b1c2065991e05cca298f6669d85b62a07ced3` |
| origin/main (verified) | `476b1c2065991e05cca298f6669d85b62a07ced3` |
| Baseline GO | `476b1c2065991e05cca298f6669d85b62a07ced3` |
| HEAD == origin/main | **YES** (Delivery uncommitted on tip of main) |
| PR #589 | MERGED / POST-MERGE CI PASS (baseline tip) |
| Product push this cycle | **NONE** (forbidden) |
| Staged files | **NONE** |
| HQA worktrees | isolated (p6-hqa-01/02/optional untouched; not written) |

### git status --short

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.durableExecutionActionContinuity.ui.test.tsx
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.executionReconcileContinuity.ui.test.tsx
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.pilotExecutionPresentation.d0.test.ts
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.r02.actionAvailability.d0.test.ts
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.uic.unifiedInspectionContract.ui.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/p6.authorityChatFirstContinuity.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/p6.closureRegularization.repositoryCurrentness.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.authorityContinuityCorrection.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.genericMissionHumanDecision.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/p6.mHd02.pilotPresentationRecordBinding.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/p6.projectScopedCursorSelection.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/p6.toolFirst.safetyClosureR1R2.d0.test.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ExecutionSurface.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation.ts
 M projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
 M projects/sfia-studio/app/features/project-assistant/w2/actions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/domain/executionMateriality.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.she.singleHumanExecute.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/w2/singleHumanExecutePreparedContract.ts

```

### git diff --stat

```
 .tmp-sfia-review/chatgpt-review.md                 | 168 +---------------
 ...03.durableExecutionActionContinuity.ui.test.tsx |  85 ++++----
 ...p5.s03.executionReconcileContinuity.ui.test.tsx |  49 ++++-
 .../p5.s03.pilotExecutionPresentation.d0.test.ts   |   8 +-
 .../p6.r02.actionAvailability.d0.test.ts           |  12 +-
 .../p6.uic.unifiedInspectionContract.ui.test.tsx   |   7 +
 .../p6.authorityChatFirstContinuity.d0.test.ts     |  56 ++++--
 ...Regularization.repositoryCurrentness.d0.test.ts |  14 +-
 .../p6.der16.genericNoraToolInvocation.d0.test.ts  | 214 ++++++++++++++-------
 ...D4.genericPrepareWithoutSystematicHd.d0.test.ts |  15 +-
 ....mHd01.authorityContinuityCorrection.d0.test.ts |  37 +++-
 ...p6.mHd01.genericMissionHumanDecision.d0.test.ts |  34 +++-
 ...mHd02.pilotPresentationRecordBinding.d0.test.ts |  18 +-
 .../p6.projectScopedCursorSelection.d0.test.ts     |  27 ++-
 .../p6.toolFirst.safetyClosureR1R2.d0.test.ts      |  74 +++++--
 .../surfaces/ExecutionSurface.tsx                  | 193 +++++++++++--------
 .../surfaces/pilotExecutionPresentation.ts         |  48 ++---
 .../features/project-assistant/f2/orchestrateF2.ts |  21 +-
 .../app/features/project-assistant/w2/actions.ts   |  54 ++++++
 .../w2/prepareGenericExecutionContractDraft.ts     |  39 ++--
 .../domain/executionMateriality.ts                 |  12 +-
 21 files changed, 674 insertions(+), 511 deletions(-)

```

### worktree isolation (excerpt)

```
/Users/morris/Projects/sfia-workspace                                                                                                                                                                                                                                              980064c0 [qa/sfia-studio-p6-global-integrated-product-qa]
/Users/morris/Projects/sfia-workspace-p6-arch-recovery-delivery-304e30e8                                                                                                                                                                                                           a21c4845 (detached HEAD)
/Users/morris/Projects/sfia-workspace-p6-hqa-01                                                                                                                                                                                                                                    8f61da8f [fix/studio-p6-hqa-01-conversation-recommendations]
/Users/morris/Projects/sfia-workspace-p6-hqa-02                                                                                                                                                                                                                                    6f68ea24 [fix/studio-p6-hqa-02-work-recommendation-materialization]
/Users/morris/Projects/sfia-workspace-p6-hqa-optional-artifact-generic-prepare                                                                                                                                                                                                     b4c1d862 (detached HEAD)
/Users/morris/Projects/sfia-workspace-p6-she-delivery-476b1c20                                                                                                                                                                                                                     476b1c20 [delivery/sfia-studio-p6-single-human-execute]
/Users/morris/Projects/sfia-wt-p6-hqa-rec01                                                                                                                                                                                                                                        de8573bd [fix/studio-p6-hqa-rec01-qualification-signals]
```

**Note:** Delivery started momentarily on Option B recovery branch tip `a21c4845` (tree-identical to main parent); corrected to `delivery/sfia-studio-p6-single-human-execute` @ `476b1c2065991e05cca298f6669d85b62a07ced3` before validation/pack. No HQA mutation in Delivery WT.

---

## 2. Sources lues (canoniques)

PROCESSUS: `prompts/templates/sfia-cycle-execution-template.md`; `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`; `sfia-rules-and-guardrails.md`; `sfia-chatgpt-cursor-operating-model.md`
CKC: `02-fifteen-cycles-synthetic-map.md` Cycle 8 (method-candidate)
CONVERGENCE: build-doctrine; roadmap; generic-execution-review-result-architecture (D-ER-14/16/17/18/19 + D-P6-SHE-01)
PRODUCT COMPLETION: `01-product-completion-cadrage.md`
DOCTRINE: v3 framing 30 + 34 (D-P6-SHE-01 TARGET amendments)
PRR: 02/03/04/06/07/08 — digests **NOT** refreshed (semantic review pending)
P6: `07-chat-first-product-simplification-p6-global-integrated-product-qa.md`
AUTHORITY: D-P6-SHE-01 TARGET ADOPTED retained

---

## 3. Convergence Pre-check

| | |
|--|--|
| CURRENT | Option B on main; F2 coordinators; same-turn currentness; HD-before-PREPARE for structural; separate inspect; Confirm partially folded; SHE runtime absent |
| TARGET | PREPARE sans HD → inspectable → one Exécuter → HD/Confirm/Authorize internes → enforcement → Cursor if admissible |
| KEEP | OA Backbone, EC, HD, Confirmation, Authorization, Attempt, Inspection, AgentCapability, Cursor Gateway, Evidence, Reconciler, Nora Tool, Option B coordinators |
| ADAPT | Generic PREPARE admission; F2 structural refusal; OA Prepare/Validate sequencing; HD timing; Execute orchestration; Inspection UX; ExecutionSurface; tests |
| REPLACE | None |
| Gaps closed this Delivery | PREPARE prematurity; HD-before-contract; multi-CTA UX; single-click proof path |
| Dette conservée | TOOL-FIRST-REAL-NOWRITE-ENFORCEMENT **OPEN** |
| Exit Proof aim | Product path traversable; authority conserved; non-regression tests; no parallel architecture |

---

## 4. OA Feasibility Gate — VERDICT

**OPTION A — COMPATIBLE. Proceed Delivery.**

Evidence:
- ExecutionContract supports durable draft/validated with `decisionRefs=[]` while stamping `MATERIALITY:STRUCTURAL` / reserves.
- Validate does not require HD for STRUCTURAL under SHE-adapted prepare path; Confirm/Authorize still require applicable refs when materiality demands.
- Supersede path binds HD at Execute (`she_bind_accepted_human_decision_before_confirm`) then Confirm→Authorize without new aggregates.
- No new OA aggregate; no parallel authority architecture; no structuring persistence migration.
- UNKNOWN remains fail-closed at Execute (`INV-SHE-UNKNOWN-BLOCKS` in SHE module).
- Inspection attestation carried by Exécuter payload (`presentedFactIds`); server rebuilds disclosure — client id alone insufficient.

**STOP condition for OA structural redesign: NOT triggered.**

---

## 5. Fichiers créés / modifiés

### Created
1. `projects/sfia-studio/app/features/project-assistant/w2/singleHumanExecutePreparedContract.ts` (552 lines) — FULL below
2. `projects/sfia-studio/app/__tests__/project-assistant/p6.she.singleHumanExecute.d0.test.ts` (396 lines) — FULL below

### Modified (product)
- `w2/prepareGenericExecutionContractDraft.ts` — structuralBlocked disclosed; ready without HD; empty decisionRefs STRUCTURAL/UNKNOWN prepare
- `f2/orchestrateF2.ts` — remove HD-before-PREPARE refusal as sole block
- `lib/oa/execution-contract/domain/executionMateriality.ts` — structural-first assess (no silent NON_STRUCTURAL)
- `w2/actions.ts` — `w2SingleHumanExecuteAction`
- `surfaces/ExecutionSurface.tsx` — SHE gesture; soft-open; Consulter secondary; no mandatory Attest gate
- `surfaces/pilotExecutionPresentation.ts` — Exécuter primary STRUCTURAL/NON_STRUCTURAL

### Modified (tests requalified to D-P6-SHE-01)
- der16, gD4, mHd01×2, mHd02, projectScoped, toolFirst R1R2, authorityChatFirst, closureRegularization A06
- UI: durable CP01, reconcile CP02, pilotPresentation, r02, UIC Pass04 mocks

### Not modified (forbidden / unnecessary)
- doctrine/baseline/PRR digests; HQA; Cursor REAL adapters; persistence schema

---

## 6. PREPARE — before / after

**BEFORE:** STRUCTURAL / protected / HD-required → refuse PREPARE (`STRUCTURAL_HUMAN_DECISION_REQUIRED`); HD required before inspectable proposal.

**AFTER (D-P6-SHE-01):**
- Descriptive readiness gates retained (objective, outcome, scope, binding, currentness, capabilities).
- `structuralBlocked` disclosed but does **not** alone refuse PREPARE.
- STRUCTURAL/UNKNOWN → inspectable EC with `decisionRefs=[]`; no HD/Confirm/Attempt/Cursor at PREPARE.
- same-turn currentness preserved (Option B).
- Insufficient description → precise clarification (not generic structural refusal).

---

## 7. INSPECT — before / after

**BEFORE:** Separate Inspect CTA often required; Attest could be a mandatory gate before Exécuter.

**AFTER:**
- Consulter le contrat (secondary) opens exam without write.
- Exécuter soft-opens panel if not yet consulted.
- No mandatory separate Attester CTA; Exécuter carries `presentedFactIds`.
- Server verifies disclosure completeness + contract version/fingerprint.
- Modified contract after presentation → reinspection required.
- Panel open ≠ authorization.

---

## 8. SINGLE EXECUTE — before / after

**BEFORE:** Multi-step Confirm / Authorize / sometimes Attest; structural HD before PREPARE.

**AFTER — `singleHumanExecutePreparedContract`:**
1. Bind click to id+version+fingerprint
2. Attest presented facts (inspect write)
3. If STRUCTURAL/UNKNOWN empty refs → record HD + supersede with decisionRefs (idempotent successor)
4. Confirm when effects require
5. Authorize
6. **Stop before Attempt** — UI then `reconcile(execute)` only if SHE ok
7. No Attempt on pre-launch refuse; UNKNOWN fail-closed; protected path / capability still enforced

Server action: `w2SingleHumanExecuteAction` in `w2/actions.ts`.

---

## 9. HumanDecision / Confirmation / Authorization

- HD only on explicit Exécuter (Pilote identity + sealed presentation digest).
- Confirmation consumed internally when required — no extra CTA.
- Authorization remains distinct OA transition.
- Recommendation ≠ HD; PREPARE ≠ AUTHORIZE; INSPECT ≠ EXECUTE; Confirm ≠ Authorize; Authorize ≠ Attempt.
- Morris Construction Authority ≠ Pilote Runtime HD.

---

## 10. Persistence / recovery / idempotence

- Durable EC / HD / Confirmation / Inspection / Attempt via existing OA services.
- Successor id deterministic `xct:she-hd:` + hash(prior, decisionId); race → load existing.
- Double-click / retry after HD: successor reuse; no second incoherent HD when already bound.
- SHE never creates Attempt; reconcile owns launch idempotence.
- Restart between PREPARE and EXECUTE: rehydrate continuity; stale version/fingerprint refuses.

---

## 11. Currentness

- Product LPS / repository stamps retained.
- SHE revalidates materiality against current Product before authorize.
- Stale currentness → fail closed (no silent execute).

---

## 12. Tests & validations

### Targeted suite (this Delivery)
```
Test Files  20 passed (20)
Tests       209 passed (209)
```
Includes: SHE d0; der16; gD4; mHd01×2; mHd02; projectScoped; toolFirst R1R2; authority; closure; toolFirst simplification; p6.arch.*; UI CP01/CP02/presentation/r02/UIC.

### Tooling
- `npm run typecheck` — PASS
- `npm run lint` — PASS (0 warnings)
- `npm run build` — PASS
- Vitest env: `SFIA_STUDIO_CURSOR_REAL=0`; HQA/Product DB paths unset
- Cursor REAL: **NOT** run
- OpenAI LIVE: **NOT** run
- PRR digests: **NOT** rewritten (matrix: CURRENT INV-STRUCTURAL-* superseded for TARGET; wait ChatGPT semantic review)

### Fake / Real
- Level: **DETERMINISTIC PRODUCT INTEGRATION PROVEN AT TESTED SCOPE**
- REAL this cycle: **NO**
- Claims forbidden: SHE LIVE PASS; Generic PREPARE REAL PASS; Cursor REAL no-write PROVEN; P6 GLOBAL PASS; READY FOR REAL auto; runtime v3 ADOPTED

---

## 13. Écarts / risques / dette

| Item | Status |
|------|--------|
| TOOL-FIRST-REAL-NOWRITE-ENFORCEMENT | OPEN — unchanged |
| PRR digest refresh | Deferred — semantic review required |
| Bounded REAL / HQA LIVE AtelierNova | Separate Morris GO |
| Product Git Integration | Separate GO after Critical review |
| Optional Attest button still in exam panel | Allowed optional path; not mandatory for Exécuter |
| soft-open first Exécuter click | UX consult gate; not silent authority |

---

## 14. Décisions Morris restantes

1. ChatGPT Critical review of this Delivery
2. Product Git Integration GO (commit/push/PR) — **not** this cycle
3. Bounded REAL / HQA LIVE validation GO
4. PRR digest semantic amend + refresh GO
5. REAL no-write enforcement debt resolution GO

---

## 15. Exit proofs

- [x] OA Feasibility OPTION A
- [x] PREPARE inspectable without HD-before
- [x] Single Exécuter path STRUCTURAL/NON_STRUCTURAL
- [x] Authority enforcement retained (no Attempt on refuse)
- [x] Deterministic tests PASS at tested scope
- [x] No second engine / no parallel architecture
- [x] No Product push
- [ ] ChatGPT Critical acceptance
- [ ] Product integration
- [ ] LIVE/HQA

---

## 16. Verdict Delivery

**SINGLE HUMAN EXECUTE — INTEGRATED DELIVERY CANDIDATE COMPLETE — DETERMINISTIC PRODUCT VALIDATION PASS — READY FOR CHATGPT CRITICAL REVIEW.**

≠ LIVE PASS ≠ HQA PASS ≠ P6 GLOBAL PASS ≠ runtime v3 ADOPTED ≠ Product Git integrated.

---

## APPENDIX A — NEW FILE FULL: singleHumanExecutePreparedContract.ts

```typescript
/**
 * D-P6-SHE-01 — Single Human Execute orchestration (Product path).
 *
 * One explicit Pilote "Exécuter" gesture after inspectable PREPARE:
 *   1. Bind click to inspected contract identity (id + version + fingerprint)
 *   2. Carry inspection attestation from presented facts (no extra Attest CTA)
 *   3. When STRUCTURAL/UNKNOWN with empty decisionRefs: record HD on Execute,
 *      supersede OA contract with decisionRefs (Confirm-admissible), re-inspect
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
  revalidateMaterialityAgainstCurrentProduct,
} from "./resolveAuthoritativeProductMateriality";
import {
  recordGenericMissionHumanDecision,
  sealGenericMissionForPresentation,
  type AuthenticatedPiloteForMissionDecision,
} from "./recordGenericMissionHumanDecision";
import {
  GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
  mapReversibilityExpectationToOa,
} from "./genericMissionSubject";
import type { EvaluateExecutionAuthorizationResult } from "./types";

const SHE_BIND_HD_SUPERSESSION_REASON =
  "she_bind_accepted_human_decision_before_confirm" as const;

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

/**
 * Record accepted HD for the prepared mission and supersede the contract so
 * decisionRefs become Confirm/Authorize-admissible. Idempotent on successor.
 */
async function bindStructuralHdViaSupersede(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly contract: ExecutionContract;
  readonly forceLocalAuthority?: boolean;
  readonly authenticatedPilote?: SingleHumanExecutePreparedContractInput["authenticatedPilote"];
}): Promise<
  | {
      readonly ok: true;
      readonly contract: ExecutionContract;
      readonly humanDecisionId: string;
      readonly humanDecisionCreated: boolean;
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
  // Reconstruct analysis from stamped EC inputs so sealed HD effects match
  // the prepared contract (intentKind / scopeIn / signals) — avoid stub drift.
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

  const sealed = await sealGenericMissionForPresentation({
    oa: input.oa,
    projectId: input.projectId,
    cycleInstanceId: input.contract.cycleInstanceId ?? null,
    analysis,
    missionSubjectId:
      typeof contractInputs.missionSubjectId === "string" &&
      contractInputs.missionSubjectId.trim()
        ? contractInputs.missionSubjectId.trim()
        : undefined,
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
    selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
    analysis,
    forceLocalAuthority: input.forceLocalAuthority === true,
    authenticatedPilote: input.authenticatedPilote,
    rationale: `SHE Execute — acceptation explicite du contrat inspecté ${input.contract.executionContractId} v${input.contract.version}.`,
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
  const newId = successorIdFor(input.contract.executionContractId, decisionId);

  const existingSuccessor = await loadContract(input.oa, newId);
  if (existingSuccessor.ok) {
    return {
      ok: true,
      contract: existingSuccessor.contract,
      humanDecisionId: decisionId,
      humanDecisionCreated: recorded.humanDecisionCreated,
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

  // Align successor EC stamps with sealed HD effects (authoritative after Execute).
  const sealedEffects = sealed.subject.effects;
  const superseded =
    await input.oa.executionContractServices.supersedeExecutionContract.execute({
      newExecutionContractId: newId,
      supersedesExecutionContractId: input.contract.executionContractId,
      supersessionReason: SHE_BIND_HD_SUPERSESSION_REASON,
      actor: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: authority.evidenceId,
      expectedVersion: input.contract.version,
      decisionRefs: [decisionId],
      inputs: {
        ...contractInputs,
        sheDeferredStructuralAuthority: false,
        verifiedGenericMissionHumanDecisionId: decisionId,
        missionSubjectId: sealed.subject.missionSubjectId,
        presentationDigest: sealed.subject.presentationDigest,
        intentKind: sealedEffects.intentKind,
        artifactType: sealedEffects.artifactType,
        requestedOperation: sealedEffects.requestedOperation,
        reversibilityExpectation: sealedEffects.reversibilityExpectation,
        risks: [...sealedEffects.risks],
        reservations: [...sealedEffects.reservations],
        impactSignals: { ...sealed.subject.impactSignals },
        repositoryBindingIdentity: sealed.subject.repositoryBindingIdentity,
        pathRoot: sealed.subject.pathRoot,
        sheBoundAtExecute: true,
        sheBoundFromExecutionContractId: input.contract.executionContractId,
        sheBoundFromVersion: input.contract.version,
        sheBoundFromSemanticFingerprint: input.contract.semanticFingerprint,
      },
      stopConditions:
        sealedEffects.stopConditions.length > 0
          ? [...sealedEffects.stopConditions]
          : undefined,
      expectedOutputs:
        sealedEffects.expectedOutputs.length > 0
          ? [...sealedEffects.expectedOutputs]
          : undefined,
      reversibility: mapReversibilityExpectationToOa(
        sealedEffects.reversibilityExpectation,
      ),
      idempotencyKey: `idem:she-bind-hd:${newId}`,
      correlationId: `cor:she-bind-hd:${randomBytes(6).toString("hex")}`,
      status: "draft",
    });

  if (!superseded.ok) {
    if (superseded.error.detailCode === "CONTRACT_ALREADY_EXISTS") {
      const raced = await loadContract(input.oa, newId);
      if (raced.ok) {
        return {
          ok: true,
          contract: raced.contract,
          humanDecisionId: decisionId,
          humanDecisionCreated: recorded.humanDecisionCreated,
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

  return {
    ok: true,
    contract: validated.contract,
    humanDecisionId: decisionId,
    humanDecisionCreated: recorded.humanDecisionCreated,
    supersededFromExecutionContractId: input.contract.executionContractId,
  };
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

  // INV-SHE-UNKNOWN-BLOCKS-NONADMISSIBLE — UNKNOWN may be prepared/inspected,
  // never launched.
  if (stamped === "unknown") {
    return fail(
      "SHE_UNKNOWN_BLOCKS_EXECUTE",
      "Matérialité UNKNOWN — proposition inspectable uniquement ; exécution refusée (fail-closed).",
    );
  }

  let humanDecisionCreated = false;
  let humanDecisionId: string | null =
    (loaded.contract.decisionRefs ?? [])[0] ?? null;
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
      forceLocalAuthority: input.forceLocalAuthority,
      authenticatedPilote: input.authenticatedPilote,
    });
    if (!bound.ok) {
      return fail(bound.code, bound.message, bound.humanDecisionCreated);
    }
    humanDecisionCreated = bound.humanDecisionCreated;
    humanDecisionId = bound.humanDecisionId;
    supersededFrom = bound.supersededFromExecutionContractId;
    active = bound.contract;
  }

  // Execute carries attestation on the active (possibly successor) contract.
  const inspected = await inspectExecutionContract({
    oa: input.oa,
    projectId: input.projectId,
    executionContractId: active.executionContractId,
    expectedVersion: active.version,
    inspectedFacts: presented,
  });
  if (!inspected.ok) {
    return fail(inspected.code, inspected.message, humanDecisionCreated);
  }
  if (!inspected.inspectionSufficient) {
    return fail(
      inspected.reinspectionRequired
        ? "REINSPECTION_REQUIRED"
        : "INSPECTION_INSUFFICIENT",
      "Disclosure d'inspection insuffisante pour Exécuter — faits incomplets ou contrat modifié.",
      humanDecisionCreated,
    );
  }

  // CURRENT materiality revalidation (stamp ≠ authority).
  const contractInputs = (active.inputs ?? {}) as Record<string, unknown>;
  const factsRaw =
    contractInputs.materialityFacts &&
    typeof contractInputs.materialityFacts === "object"
      ? (contractInputs.materialityFacts as Record<string, unknown>)
      : null;
  if ((active.decisionRefs ?? []).length === 0) {
    const revalidated = await revalidateMaterialityAgainstCurrentProduct({
      oa: input.oa,
      projectId: input.projectId,
      analysis: analysisStubFromMaterialityFacts(factsRaw, contractInputs),
      cycleInstanceId: active.cycleInstanceId ?? null,
      stampedMateriality: stamped,
      stampedCurrentness: parseStampedProductCurrentness(factsRaw),
    });
    if (!revalidated.ok) {
      return fail(revalidated.code, revalidated.message, humanDecisionCreated);
    }
  }

  let confirmationRef: string | null = active.confirmationRef ?? null;
  const mid = await loadContract(input.oa, active.executionContractId);
  if (!mid.ok) {
    return fail(mid.code, mid.message, humanDecisionCreated);
  }
  active = mid.contract;

  if (active.status === "confirmation_required") {
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
    confirmationRef,
    authorization,
    executionAttemptCreated: false,
    supersededFromExecutionContractId: supersededFrom,
    code: "SHE_EXECUTE_AUTHORIZED",
  };
}

```

---

## APPENDIX B — NEW FILE FULL: p6.she.singleHumanExecute.d0.test.ts

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
    expect(second.ok).toBe(true);
    if (!second.ok) throw new Error(second.message);
    expect(second.executionContractId).toBe(first.executionContractId);
  });
});

```

---

## APPENDIX C — DIFF utile (core Product)

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

---

## APPENDIX D — DIFF utile (UI surfaces)

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

---

## APPENDIX E — DIFF utile (tests requalifiés)

```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.durableExecutionActionContinuity.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.durableExecutionActionContinuity.ui.test.tsx
index c9f0aeb9..d37f5ba7 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.durableExecutionActionContinuity.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.durableExecutionActionContinuity.ui.test.tsx
@@ -16,6 +16,7 @@ const {
   inspectMock,
   authorizeMock,
   reconcileMock,
+  sheMock,
 } = vi.hoisted(() => ({
   deriveContinuityMock: vi.fn(),
   readCurrentContinuityMock: vi.fn(),
@@ -23,6 +24,7 @@ const {
   inspectMock: vi.fn(),
   authorizeMock: vi.fn(),
   reconcileMock: vi.fn(),
+  sheMock: vi.fn(),
 }));

 vi.mock("@/features/project-assistant/w2/actions", () => ({
@@ -36,6 +38,7 @@ vi.mock("@/features/project-assistant/w2/actions", () => ({
     authorizeMock(...args),
   w2ReconcileGovernedExecutionAction: (...args: unknown[]) =>
     reconcileMock(...args),
+  w2SingleHumanExecuteAction: (...args: unknown[]) => sheMock(...args),
 }));

 function projection(overrides: Record<string, unknown> = {}) {
@@ -182,6 +185,24 @@ describe("P5-S03 CP01 durable execution action continuity", () => {
       outcome: "AUTHORIZED",
       executionEligible: true,
     });
+    sheMock.mockResolvedValue({
+      ok: true,
+      executionContractId: "xct:cp01",
+      contractVersion: 1,
+      semanticFingerprint: "fp",
+      status: "authorized",
+      humanDecisionCreated: false,
+      humanDecisionId: null,
+      confirmationRef: "cfm:1",
+      authorization: {
+        ok: true,
+        outcome: "AUTHORIZED",
+        executionEligible: true,
+      },
+      executionAttemptCreated: false,
+      supersededFromExecutionContractId: null,
+      code: "SHE_EXECUTE_AUTHORIZED",
+    });
     reconcileMock.mockResolvedValue({
       ok: true,
       intent: "execute",
@@ -194,7 +215,7 @@ describe("P5-S03 CP01 durable execution action continuity", () => {
     });
   });

-  it("E1 — fresh mount confirmation_required → Exécuter folds Confirm then Authorize+Execute", async () => {
+  it("E1 — D-P6-SHE-01: fresh mount confirmation_required → SHE Exécuter then reconcile", async () => {
     deriveContinuityMock.mockResolvedValue({
       ok: true,
       projection: projection(),
@@ -202,15 +223,6 @@ describe("P5-S03 CP01 durable execution action continuity", () => {
     readCurrentContinuityMock.mockResolvedValue(
       activeCurrent({ status: "confirmation_required" }),
     );
-    confirmMock.mockResolvedValue({
-      ok: true,
-      executionContractId: "xct:cp01",
-      contractVersion: 1,
-      confirmationRef: "cfm:1",
-      statusLabel: "CONFIRMATION REQUISE — OBTENUE",
-      alreadyConfirmed: false,
-      executionPerformed: false,
-    });

     render(
       <ExecutionSurface
@@ -224,7 +236,7 @@ describe("P5-S03 CP01 durable execution action continuity", () => {
         "À confirmer",
       );
     });
-    // Tool-first: no separate Confirmer CTA — Exécuter folds Confirm after inspect.
+    // D-P6-SHE-01: no separate Confirmer — SHE folds Confirm/Authorize server-side.
     expect(screen.queryByTestId("project-execution-confirm")).toBeNull();
     const executeBtn = screen.getByTestId("project-execution-execute");
     expect((executeBtn as HTMLButtonElement).disabled).toBe(false);
@@ -232,23 +244,27 @@ describe("P5-S03 CP01 durable execution action continuity", () => {
     fireEvent.click(executeBtn);

     await waitFor(() => {
-      expect(confirmMock).toHaveBeenCalledTimes(1);
-      expect(authorizeMock).toHaveBeenCalledTimes(1);
+      expect(sheMock).toHaveBeenCalledTimes(1);
       expect(
         reconcileMock.mock.calls.some(
           (call) => (call[0] as { intent?: string }).intent === "execute",
         ),
       ).toBe(true);
     });
-    expect(confirmMock).toHaveBeenCalledWith({
-      projectId: "prj:cp01",
-      executionContractId: "xct:cp01",
-    });
-    // R1 — Exécuter never records inspection as a side effect.
-    expect(inspectMock).not.toHaveBeenCalled();
+    expect(sheMock).toHaveBeenCalledWith(
+      expect.objectContaining({
+        projectId: "prj:cp01",
+        executionContractId: "xct:cp01",
+        expectedVersion: 1,
+        expectedSemanticFingerprint: "fp",
+      }),
+    );
+    // Confirm/Authorize remain internal to SHE — not separate UI actions.
+    expect(confirmMock).not.toHaveBeenCalled();
+    expect(authorizeMock).not.toHaveBeenCalled();
   });

-  it("E2 — fresh mount confirmed → Exécuter authorizes then reconciles execute", async () => {
+  it("E2 — D-P6-SHE-01: fresh mount confirmed → SHE then reconciles execute", async () => {
     deriveContinuityMock.mockResolvedValue({
       ok: true,
       projection: projection({ executionContractStatus: "confirmed" }),
@@ -275,7 +291,7 @@ describe("P5-S03 CP01 durable execution action continuity", () => {
     fireEvent.click(executeBtn);

     await waitFor(() => {
-      expect(authorizeMock).toHaveBeenCalledTimes(1);
+      expect(sheMock).toHaveBeenCalledTimes(1);
       expect(
         reconcileMock.mock.calls.some(
           (call) =>
@@ -297,7 +313,7 @@ describe("P5-S03 CP01 durable execution action continuity", () => {
     );
   });

-  it("E3 — without inspection sufficient, confirmation_required shows Inspect not Exécuter", async () => {
+  it("E3 — D-P6-SHE-01: without prior inspection, Exécuter + Consulter present (no Confirm)", async () => {
     deriveContinuityMock.mockResolvedValue({
       ok: true,
       projection: projection(),
@@ -316,15 +332,16 @@ describe("P5-S03 CP01 durable execution action continuity", () => {
       />,
     );
     await waitFor(() => {
-      expect(screen.getByTestId("project-execution-inspect")).toBeTruthy();
+      expect(screen.getByTestId("project-execution-execute")).toBeTruthy();
     });
+    expect(screen.getByTestId("project-execution-inspect")).toBeTruthy();
     expect(screen.queryByTestId("project-execution-confirm")).toBeNull();
-    expect(screen.queryByTestId("project-execution-execute")).toBeNull();
     expect(confirmMock).not.toHaveBeenCalled();
+    expect(sheMock).not.toHaveBeenCalled();
     expect(reconcileMock).not.toHaveBeenCalled();
   });

-  it("E4 — authorization fail-closed: no reconcile execute", async () => {
+  it("E4 — D-P6-SHE-01: SHE authorization fail-closed: no reconcile execute", async () => {
     deriveContinuityMock.mockResolvedValue({
       ok: true,
       projection: projection({ executionContractStatus: "confirmed" }),
@@ -332,11 +349,12 @@ describe("P5-S03 CP01 durable execution action continuity", () => {
     readCurrentContinuityMock.mockResolvedValue(
       activeCurrent({ status: "confirmed" }),
     );
-    authorizeMock.mockResolvedValue({
-      ok: true,
-      outcome: "DENIED",
-      executionEligible: false,
-      executionEligibilityReasonCode: "AUTHORITY_INSUFFICIENT",
+    sheMock.mockResolvedValue({
+      ok: false,
+      code: "AUTHORITY_INSUFFICIENT",
+      message: "Autorité insuffisante.",
+      executionAttemptCreated: false,
+      humanDecisionCreated: false,
     });

     render(
@@ -350,13 +368,13 @@ describe("P5-S03 CP01 durable execution action continuity", () => {
     });
     fireEvent.click(screen.getByTestId("project-execution-execute"));
     await waitFor(() => {
-      expect(authorizeMock).toHaveBeenCalled();
+      expect(sheMock).toHaveBeenCalled();
       expect(screen.getByTestId("project-execution-error")).toBeTruthy();
     });
     expect(reconcileMock).not.toHaveBeenCalled();
   });

-  it("E5 — open examination panel without write; attest only after facts shown", async () => {
+  it("E5 — D-P6-SHE-01: Consulter opens exam without write; optional Attest still records inspection", async () => {
     deriveContinuityMock.mockResolvedValue({
       ok: true,
       projection: projection(),
@@ -376,9 +394,9 @@ describe("P5-S03 CP01 durable execution action continuity", () => {
     );
     await waitFor(() => {
       expect(screen.getByTestId("project-execution-inspect")).toBeTruthy();
+      expect(screen.getByTestId("project-execution-execute")).toBeTruthy();
     });
     expect(screen.queryByTestId("project-execution-confirm")).toBeNull();
-    expect(screen.queryByTestId("project-execution-execute")).toBeNull();

     // I07 — opening detail does not attest.
     fireEvent.click(screen.getByTestId("project-execution-inspect"));
@@ -411,6 +429,7 @@ describe("P5-S03 CP01 durable execution action continuity", () => {
       .inspectedFacts;
     expect(facts).not.toContain("inputs.sourceGrounding");
     expect(confirmMock).not.toHaveBeenCalled();
+    expect(sheMock).not.toHaveBeenCalled();
   });

   it("UI01 — projection EC id without active pre → no Confirm/Execute", async () => {
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.executionReconcileContinuity.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.executionReconcileContinuity.ui.test.tsx
index 600c8414..e21d5b3d 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.executionReconcileContinuity.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.executionReconcileContinuity.ui.test.tsx
@@ -26,6 +26,7 @@ const {
   inspectMock,
   authorizeMock,
   reconcileMock,
+  sheMock,
 } = vi.hoisted(() => ({
   deriveContinuityMock: vi.fn(),
   readCurrentContinuityMock: vi.fn(),
@@ -33,6 +34,7 @@ const {
   inspectMock: vi.fn(),
   authorizeMock: vi.fn(),
   reconcileMock: vi.fn(),
+  sheMock: vi.fn(),
 }));

 vi.mock("@/features/project-assistant/w2/actions", () => ({
@@ -46,6 +48,7 @@ vi.mock("@/features/project-assistant/w2/actions", () => ({
     authorizeMock(...args),
   w2ReconcileGovernedExecutionAction: (...args: unknown[]) =>
     reconcileMock(...args),
+  w2SingleHumanExecuteAction: (...args: unknown[]) => sheMock(...args),
 }));

 function projection(overrides: Record<string, unknown> = {}) {
@@ -74,11 +77,29 @@ function projection(overrides: Record<string, unknown> = {}) {
   };
 }

+const DOCS_WRITE_REQUIRED_FACTS = [
+  "action",
+  "target",
+  "scope",
+  "requiredAuthority",
+  "requiredCapabilities",
+  "constraints",
+  "stopConditions",
+  "reversibility",
+  "evidenceRequirements",
+  "semanticFingerprint",
+  "inputs.targetRepositoryRef",
+  "inputs.targetPath",
+  "inputs.createOrModify",
+  "inputs.noDelete",
+] as const;
+
 function activeConfirmed(contractId = "xct:cp02") {
   return {
     ok: true as const,
     kind: "active" as const,
     decisionRef: "dec:1",
+    requiredInspectedFacts: [...DOCS_WRITE_REQUIRED_FACTS],
     contract: {
       executionContractId: contractId,
       version: 1,
@@ -97,7 +118,7 @@ function activeConfirmed(contractId = "xct:cp02") {
         action: "cursor.docs_write.apply",
         technicalTarget: "workspace.isolated.docs_write",
         scope: "studio.gcec.docs_write",
-        targetRepositoryRef: null,
+        targetRepositoryRef: "acme/demo",
         targetPath: "projects/demo/note.md",
         scopeIn: null,
         scopeOut: null,
@@ -174,6 +195,27 @@ describe("P5-S03 CP02 execution reconcile continuity", () => {
       outcome: "AUTHORIZED",
       executionEligible: true,
     });
+    sheMock.mockImplementation(async (input: unknown) => {
+      const args = input as { executionContractId: string };
+      return {
+        ok: true,
+        executionContractId: args.executionContractId,
+        contractVersion: 1,
+        semanticFingerprint: "fp",
+        status: "authorized",
+        humanDecisionCreated: false,
+        humanDecisionId: null,
+        confirmationRef: null,
+        authorization: {
+          ok: true,
+          outcome: "AUTHORIZED",
+          executionEligible: true,
+        },
+        executionAttemptCreated: false,
+        supersededFromExecutionContractId: null,
+        code: "SHE_EXECUTE_AUTHORIZED",
+      };
+    });
   });

   afterEach(() => {
@@ -561,7 +603,7 @@ describe("P5-S03 CP02 execution reconcile continuity", () => {
     expect(staleContinues).toHaveLength(0);
   });

-  it("CP01 regression — without inspection, confirmation_required shows Inspect (no silent execute)", async () => {
+  it("CP01 regression — D-P6-SHE-01: without prior inspection, Exécuter+Consulter present (no silent SHE/reconcile)", async () => {
     deriveContinuityMock.mockResolvedValue({
       ok: true,
       projection: projection({
@@ -590,10 +632,11 @@ describe("P5-S03 CP02 execution reconcile continuity", () => {
     await flush(0);
     await flush(0);
     expect(screen.getByTestId("project-execution-inspect")).toBeTruthy();
+    expect(screen.getByTestId("project-execution-execute")).toBeTruthy();
     expect(screen.queryByTestId("project-execution-confirm")).toBeNull();
-    expect(screen.queryByTestId("project-execution-execute")).toBeNull();
     expect(confirmMock).not.toHaveBeenCalled();
     expect(authorizeMock).not.toHaveBeenCalled();
+    expect(sheMock).not.toHaveBeenCalled();
     expect(reconcileMock).not.toHaveBeenCalled();
   });
 });
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.pilotExecutionPresentation.d0.test.ts b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.pilotExecutionPresentation.d0.test.ts
index 3327da36..82399edb 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.pilotExecutionPresentation.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.pilotExecutionPresentation.d0.test.ts
@@ -176,7 +176,7 @@ describe("P5-S03 pilotExecutionPresentation", () => {
     expect(view.attentionNote).toMatch(/confirmation|Exécuter/i);
   });

-  it("insufficient inspection → Inspect CTA (Confirm not enabled)", () => {
+  it("D-P6-SHE-01 — insufficient inspection → Exécuter CTA (Confirm not enabled; consult via soft-open)", () => {
     const view = presentPilotExecution({
       continuityProjection: {
         ok: true,
@@ -191,9 +191,9 @@ describe("P5-S03 pilotExecutionPresentation", () => {
       }),
     });
     expect(view.status).toBe("a_confirmer");
-    expect(view.cta.kind).toBe("inspect");
-    expect(view.cta.kind === "inspect" && view.cta.enabled).toBe(true);
-    expect(view.attentionNote).toMatch(/Examen des faits contractuels|examen/i);
+    expect(view.cta.kind).toBe("execute");
+    expect(view.cta.kind === "execute" && view.cta.enabled).toBe(true);
+    expect(view.attentionNote).toMatch(/Consultez|Exécuter|Attester/i);
   });

   it("R1 UI01 — projection EC id alone never enables Confirm/Execute", () => {
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.r02.actionAvailability.d0.test.ts b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.r02.actionAvailability.d0.test.ts
index 73ba9f0a..17df6271 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.r02.actionAvailability.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.r02.actionAvailability.d0.test.ts
@@ -167,7 +167,7 @@ describe("P6 R02 — action availability / currentness", () => {
     expect(view.cta.kind).toBe("none");
   });

-  it("UI04 — active + inspection insufficient → Inspect, not Confirm enabled", () => {
+  it("UI04 — D-P6-SHE-01: active + inspection insufficient → Exécuter (not Confirm); consult secondary", () => {
     const view = presentPilotExecution({
       continuityProjection: { ok: true, projection: baseProjection() },
       preExecutionContinuity: activePre({
@@ -175,8 +175,8 @@ describe("P6 R02 — action availability / currentness", () => {
         inspectionSufficient: false,
       }),
     });
-    expect(view.cta.kind).toBe("inspect");
-    expect(view.cta.kind === "inspect" && view.cta.enabled).toBe(true);
+    expect(view.cta.kind).toBe("execute");
+    expect(view.cta.kind === "execute" && view.cta.enabled).toBe(true);
   });

   it("UI05 — active + inspection sufficient → Exécuter folds Confirm (tool-first)", () => {
@@ -207,7 +207,7 @@ describe("P6 R02 — action availability / currentness", () => {
     expect(view.attentionNote).toMatch(/empreinte|réinspection/i);
   });

-  it("UI09 — confirmed ≠ authorized execute without inspection", () => {
+  it("UI09 — D-P6-SHE-01: confirmed without prior inspection still shows Exécuter (server attest/gates)", () => {
     const view = presentPilotExecution({
       continuityProjection: {
         ok: true,
@@ -220,8 +220,8 @@ describe("P6 R02 — action availability / currentness", () => {
         inspectionSufficient: false,
       }),
     });
-    expect(view.cta.kind).toBe("inspect");
-    expect(view.cta.kind === "execute").toBe(false);
+    expect(view.cta.kind).toBe("execute");
+    expect(view.cta.kind === "execute" && view.cta.enabled).toBe(true);
   });

   it("UI10 — terminal stage → no Confirm/Execute", () => {
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.uic.unifiedInspectionContract.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.uic.unifiedInspectionContract.ui.test.tsx
index 95971e36..e1fbcfbb 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.uic.unifiedInspectionContract.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.uic.unifiedInspectionContract.ui.test.tsx
@@ -54,6 +54,13 @@ vi.mock("@/features/project-assistant/w2/actions", () => ({
     authorizeMock(...args),
   w2ReconcileGovernedExecutionAction: (...args: unknown[]) =>
     reconcileMock(...args),
+  w2SingleHumanExecuteAction: vi.fn(async () => ({
+    ok: false,
+    code: "SHE_NOT_UNDER_TEST",
+    message: "SHE not under test in UIC Pass04.",
+    executionAttemptCreated: false,
+    humanDecisionCreated: false,
+  })),
   w2DeriveGovernedExecutionContinuityAction: (...args: unknown[]) =>
     deriveContinuityMock(...args),
   w2ReadCurrentGovernedExecutionContinuityAction: (...args: unknown[]) =>
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/p6.authorityChatFirstContinuity.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/p6.authorityChatFirstContinuity.d0.test.ts
index 18cc5583..9131cddf 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/p6.authorityChatFirstContinuity.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/p6.authorityChatFirstContinuity.d0.test.ts
@@ -242,7 +242,7 @@ describe("P6 Authority & Chat-First Continuity", () => {
     expect(blocked.code).toBe("MATERIALITY_CURRENTNESS_STALE");
   });

-  it("Q06 — protected path in scope blocks NON_STRUCTURAL prepare", async () => {
+  it("Q06 — D-P6-SHE-01: protected path PREPARE stamps STRUCTURAL (empty refs; not silent NON_STRUCTURAL)", async () => {
     const { projectId, cycleInstanceId } = await seed("prot");
     const prep = await prepareGenericExecutionContractDraft({
       oa: runtime.oa!,
@@ -263,15 +263,17 @@ describe("P6 Authority & Chat-First Continuity", () => {
       forceLocalAuthority: true,
       pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
     });
-    expect(prep.ok).toBe(false);
-    if (prep.ok) throw new Error("expected protected block");
+    expect(prep.ok).toBe(true);
+    if (!prep.ok) throw new Error("expected SHE inspectable PREPARE");
+    expect(prep.contract.decisionRefs).toEqual([]);
     expect(
-      prep.code === "STRUCTURAL_HUMAN_DECISION_REQUIRED" ||
-        prep.code === "MATERIALITY_UNKNOWN",
+      prep.contract.constraints.some((c) =>
+        String(c).includes("MATERIALITY:STRUCTURAL"),
+      ),
     ).toBe(true);
   });

-  it("Q23 — Git mission without repository binding → STOP", async () => {
+  it("Q23 — D-P6-SHE-01: without repository binding PREPARE may be inspectable; authorize stays fail-closed", async () => {
     const oa = runtime.oa!;
     const created = await runtime.createProject({
       name: "No binding",
@@ -284,7 +286,6 @@ describe("P6 Authority & Chat-First Continuity", () => {
     });
     if (!created.ok) throw new Error("create");
     const projectId = created.project.projectId;
-    // No cycle / binding — prepare with file scope must fail closed on launch.
     const prep = await prepareGenericExecutionContractDraft({
       oa,
       projectId,
@@ -293,15 +294,36 @@ describe("P6 Authority & Chat-First Continuity", () => {
       forceLocalAuthority: true,
       pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
     });
-    expect(prep.ok).toBe(false);
-    if (prep.ok) throw new Error("expected stop");
-    // Either no active cycle for non-mutation claim, or repo binding missing.
-    expect(
-      [
-        "REPOSITORY_BINDING_REQUIRED",
-        "MATERIALITY_UNKNOWN",
-        "STRUCTURAL_HUMAN_DECISION_REQUIRED",
-      ].includes(prep.code),
-    ).toBe(true);
+    // SHE — missing binding is a reserve / fail-closed at authorize, not a
+    // silent NON_STRUCTURAL. If PREPARE still refuses, accept historical codes.
+    if (!prep.ok) {
+      expect(
+        [
+          "REPOSITORY_BINDING_REQUIRED",
+          "MATERIALITY_UNKNOWN",
+          "STRUCTURAL_HUMAN_DECISION_REQUIRED",
+        ].includes(prep.code),
+      ).toBe(true);
+      return;
+    }
+    expect(prep.contract.decisionRefs).toEqual([]);
+    const inspected = await inspectExecutionContract({
+      oa,
+      projectId,
+      executionContractId: prep.contract.executionContractId,
+      expectedVersion: prep.contract.version,
+      inspectedFacts: ["action", "semanticFingerprint"],
+    });
+    expect(inspected.ok).toBe(true);
+    if (!inspected.ok) throw new Error("inspect");
+    const blocked = await authorizeGenericPreparedContract({
+      oa,
+      projectId,
+      executionContractId: prep.contract.executionContractId,
+      expectedVersion: prep.contract.version,
+      expectedSemanticFingerprint: inspected.semanticFingerprint,
+      forceLocalAuthority: true,
+    });
+    expect(blocked.ok).toBe(false);
   });
 });
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/p6.closureRegularization.repositoryCurrentness.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/p6.closureRegularization.repositoryCurrentness.d0.test.ts
index 10eed714..721841a5 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/p6.closureRegularization.repositoryCurrentness.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/p6.closureRegularization.repositoryCurrentness.d0.test.ts
@@ -429,7 +429,7 @@ describe("P6 Closure Regularization — repository binding currentness", () => {
     ).toBe(true);
   });

-  it("A06 — protected path remains STRUCTURAL / gate — not confused with HD forge", async () => {
+  it("A06 — D-P6-SHE-01: protected path PREPARE stamps STRUCTURAL (empty refs; not HD forge / not silent NON_STRUCTURAL)", async () => {
     const seeded = await seed("a06");
     const prep = await prepareGenericExecutionContractDraft({
       oa: seeded.oa,
@@ -450,13 +450,13 @@ describe("P6 Closure Regularization — repository binding currentness", () => {
       forceLocalAuthority: true,
       pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
     });
-    expect(prep.ok).toBe(false);
-    if (prep.ok) throw new Error("expected protected block");
+    expect(prep.ok).toBe(true);
+    if (!prep.ok) throw new Error("expected SHE inspectable PREPARE");
+    expect(prep.contract.decisionRefs).toEqual([]);
     expect(
-      prep.code === "STRUCTURAL_HUMAN_DECISION_REQUIRED" ||
-        prep.code === "MATERIALITY_UNKNOWN" ||
-        prep.code === "SCOPE_PROTECTED_PATH" ||
-        prep.code === "AUTHORITY_ENVELOPE_EXPANDED",
+      prep.contract.constraints.some((c) =>
+        String(c).includes("MATERIALITY:STRUCTURAL"),
+      ),
     ).toBe(true);
   });

diff --git a/projects/sfia-studio/app/__tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts
index d5e6b3f9..bf06c12d 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts
@@ -10,7 +10,8 @@
  *  E10  project WITHOUT activeCycleInstanceId → Generic PREPARE; no CycleInstance created.
  *  E11  incompatible_execution_intent is no longer the exclusive dead-end for a natural signal
  *       without docs_write (explicit hostile continuationKind stays BLOCKED).
- *  E12  structural signals → STRUCTURAL_HUMAN_DECISION_REQUIRED (tool + F2), fail-closed.
+ *  E12  D-P6-SHE-01 — structural signals → PREPARE OK (empty decisionRefs, MATERIALITY:STRUCTURAL);
+ *       HD/authority deferred to Execute; protected-path remains fail-closed.
  *  E14  accept "OK" without a CURRENT offer clarifies — no invented prepare.
  *  NR   REQUIRE_ARTIFACT + docs_write-compatible effect still routes Artifact governed (F05 T05).
  *
@@ -904,10 +905,10 @@ describe("D-ER-16…19 Generic Execution Nora Tool Delivery", () => {
   });

   // -------------------------------------------------------------------------
-  // E12 — structural
+  // E12 — structural (D-P6-SHE-01 requalification: PREPARE OK, HD at Execute)
   // -------------------------------------------------------------------------

-  it("E12 — tool: structural impact signal → STRUCTURAL_HUMAN_DECISION_REQUIRED; no EC, no Attempt", async () => {
+  it("E12 — D-P6-SHE-01: tool structural impact → PREPARE OK empty decisionRefs MATERIALITY:STRUCTURAL; no Attempt / no HD", async () => {
     const { projectId, oa } = await seedProject({ suffix: "e12a", withCycle: false });
     const out = await invokeTool(productTools(projectId, oa)[1]!, {
       objective: "Migrer le schéma de données",
@@ -915,15 +916,21 @@ describe("D-ER-16…19 Generic Execution Nora Tool Delivery", () => {
       scope: "projects/demo/src",
       impactSignals: { dataImpact: true },
     });
-    expect(out.ok).toBe(false);
-    expect(out.code).toBe("STRUCTURAL_HUMAN_DECISION_REQUIRED");
+    expect(out.ok).toBe(true);
     expect(out.executionAttemptCreated).toBe(false);
     expect(out.humanDecisionCreated).toBe(false);
-    expect(out.executionContractId).toBeUndefined();
+    expect(String(out.executionContractId)).toMatch(/^xct:gen-prep:/);
+    const loaded = await oa.executionContractServices.getExecutionContract.execute({
+      executionContractId: String(out.executionContractId),
+    });
+    expect(loaded.ok).toBe(true);
+    if (!loaded.ok) throw new Error("load");
+    expect(loaded.contract.decisionRefs ?? []).toEqual([]);
+    expect(loaded.contract.constraints).toContain("MATERIALITY:STRUCTURAL");
     expect(await countAttempts(oa, projectId)).toBe(0);
   });

-  it("E12 — tool: server materiality for a protected path stays fail-closed (model cannot declare non-structural to bypass)", async () => {
+  it("E12 — D-P6-SHE-01: protected path PREPARE stamps STRUCTURAL (no silent NON_STRUCTURAL; no Attempt); model cannot bypass", async () => {
     const { projectId, oa } = await seedProject({ suffix: "e12b", withCycle: false });
     const out = await invokeTool(productTools(projectId, oa)[1]!, {
       objective: "Modifier la doctrine Studio",
@@ -932,11 +939,26 @@ describe("D-ER-16…19 Generic Execution Nora Tool Delivery", () => {
       impactSignals: {},
     });
     expect(out.executionAttemptCreated).toBe(false);
-    // Either structural (protected path) or an honest failure — never a prepared EC.
-    expect(out.ok).toBe(false);
+    expect(out.humanDecisionCreated).toBe(false);
+    // D-P6-SHE-01 — protected path is STRUCTURAL materiality; PREPARE may succeed
+    // inspectably. Authority / protected gate remains at Execute (not silent NON_STRUCTURAL).
+    if (out.ok) {
+      const loaded = await oa.executionContractServices.getExecutionContract.execute({
+        executionContractId: String(out.executionContractId),
+      });
+      expect(loaded.ok).toBe(true);
+      if (!loaded.ok) throw new Error("load");
+      expect(loaded.contract.decisionRefs ?? []).toEqual([]);
+      expect(loaded.contract.constraints).toContain("MATERIALITY:STRUCTURAL");
+      expect(loaded.contract.constraints).not.toContain("MATERIALITY:NON_STRUCTURAL");
+    } else {
+      // If another gate still refuses at PREPARE, keep fail-closed honesty.
+      expect(out.code).not.toBe("GENERIC_PREPARE_DRAFTED");
+    }
+    expect(await countAttempts(oa, projectId)).toBe(0);
   });

-  it("E12 — F2: structural signals on natural documentary → STRUCTURAL clarification; no non-structural PREPARE offer, no EC", async () => {
+  it("E12 — D-P6-SHE-01 F2: structural signals → recommend/prepare path (SHE); solicit OK empty refs STRUCTURAL", async () => {
     const { projectId, oa } = await seedProject({ suffix: "e12c", withCycle: true });
     const sessionKey = resolvePrepareOfferSessionKey({ sessionDbPath });
     const turn = await orchestrateAssistantSend({
@@ -946,28 +968,29 @@ describe("D-ER-16…19 Generic Execution Nora Tool Delivery", () => {
     });
     expect(turn.ok).toBe(true);
     if (!turn.ok) throw new Error(turn.message);
-    // Structural clarification — never a prepared EC on this turn.
-    expect(turn.text).toMatch(/frontière structurelle|décision Pilote/i);
-    expect(turn.text).not.toMatch(/xct:gen-prep:/);
-    expect(turn.text).not.toMatch(/Je recommande de confier cette mission à Cursor/i);
+    // D-P6-SHE-01 — structural no longer blocks the prepare recommendation path.
+    // Either recommend-prepare text or an inspectable prepared EC id is admissible.
+    const recommended = /Je recommande de confier cette mission à Cursor/i.test(
+      turn.text,
+    );
+    const prepared = /xct:gen-prep:/.test(turn.text);
+    expect(recommended || prepared).toBe(true);

-    // M-HD-02 — structural carrier may be remembered for Accept/Refuse/Amend seal.
-    // That is NOT a non-structural chat-first Generic PREPARE offer (C3).
     const offer = getPendingGenericPrepareOffer(projectId, sessionKey);
-    expect(offer).not.toBeNull();
-    expect(offer!.signalArchitectureImpact).toBe(true);
-    expect(offer!.signalSecurityImpact).toBe(false);
-    expect(offer!.signalDataImpact).toBe(false);
-    // Fake marker must surface Product structural analysis (C3-G).
-    expect(offer!.signalArchitectureImpact || offer!.signalStructuralChange).toBe(
-      true,
-    );
+    if (!prepared) {
+      expect(offer).not.toBeNull();
+      expect(offer!.signalArchitectureImpact).toBe(true);
+      expect(offer!.signalSecurityImpact).toBe(false);
+      expect(offer!.signalDataImpact).toBe(false);
+      expect(offer!.signalArchitectureImpact || offer!.signalStructuralChange).toBe(
+        true,
+      );
+    }

-    // Admission still fail-closed without verified mission-bound HD (C3-A / C3-F).
-    const refused = await solicitGenericExecutionPrepare({
+    const prep = await solicitGenericExecutionPrepare({
       oa,
       projectId,
-      cycleInstanceId: offer!.cycleInstanceId,
+      cycleInstanceId: offer?.cycleInstanceId ?? null,
       analysis: validateIntentAnalysisPayload(
         naturalDocAnalysisJson({
           signals: {
@@ -981,17 +1004,21 @@ describe("D-ER-16…19 Generic Execution Nora Tool Delivery", () => {
       forceLocalAuthority: true,
       pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
     });
-    expect(refused.ok).toBe(false);
-    if (!refused.ok) {
-      expect(refused.code).toBe("STRUCTURAL_HUMAN_DECISION_REQUIRED");
-    }
-    expect(
-      (await oa.executionContractServices.contracts.listByProject(projectId)).length,
-    ).toBe(0);
+    expect(prep.ok).toBe(true);
+    if (!prep.ok) throw new Error(prep.message);
+    expect(prep.humanDecisionCreated).toBe(false);
+    expect(prep.executionAttemptCreated).toBe(false);
+    const live = await oa.executionContractServices.getExecutionContract.execute({
+      executionContractId: prep.executionContractId,
+    });
+    expect(live.ok).toBe(true);
+    if (!live.ok) throw new Error("get");
+    expect(live.contract.decisionRefs ?? []).toEqual([]);
+    expect(live.contract.constraints).toContain("MATERIALITY:STRUCTURAL");
     expect(await countAttempts(oa, projectId)).toBe(0);
   });

-  it("E12 — F2: securityImpact / dataImpact also refuse non-structural PREPARE (C3-B/C)", async () => {
+  it("E12 — D-P6-SHE-01 F2: securityImpact / dataImpact solicit PREPARE OK (empty refs STRUCTURAL)", async () => {
     for (const [suffix, flag] of [
       ["e12sec", "securityImpact"],
       ["e12data", "dataImpact"],
@@ -1007,7 +1034,6 @@ describe("D-ER-16…19 Generic Execution Nora Tool Delivery", () => {
           lowRiskBounded: false,
         },
       });
-      // Same readiness gate F2 uses before PREPARE; prove structural carrier ≠ admission.
       rememberGenericPrepareRecommendation({
         projectId,
         cycleInstanceId,
@@ -1025,7 +1051,7 @@ describe("D-ER-16…19 Generic Execution Nora Tool Delivery", () => {
       } else {
         expect(offer!.signalDataImpact).toBe(true);
       }
-      const refused = await solicitGenericExecutionPrepare({
+      const prep = await solicitGenericExecutionPrepare({
         oa,
         projectId,
         cycleInstanceId,
@@ -1034,14 +1060,17 @@ describe("D-ER-16…19 Generic Execution Nora Tool Delivery", () => {
         forceLocalAuthority: true,
         pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
       });
-      expect(refused.ok).toBe(false);
-      if (!refused.ok) {
-        expect(refused.code).toBe("STRUCTURAL_HUMAN_DECISION_REQUIRED");
-      }
-      expect(
-        (await oa.executionContractServices.contracts.listByProject(projectId))
-          .length,
-      ).toBe(0);
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
       expect(await countAttempts(oa, projectId)).toBe(0);
     }
   });
@@ -1366,7 +1395,7 @@ describe("D-ER-16…19 Generic Execution Nora Tool Delivery", () => {
     }
   });

-  it("R2a — [MODEL TOOL SELECTION SCRIPTED] Runner path with a hostile/structural tool call still fails closed (no EC, no Attempt)", async () => {
+  it("R2a — D-P6-SHE-01: Runner structural tool call PREPARE OK (empty refs STRUCTURAL; no Attempt)", async () => {
     const { projectId, oa } = await seedProject({ suffix: "r2a2", withCycle: false });
     const model = new ScriptedModel([
       [
@@ -1381,7 +1410,7 @@ describe("D-ER-16…19 Generic Execution Nora Tool Delivery", () => {
           { callId: "call_prepare_r2a2" },
         ),
       ],
-      [assistantMessage("Mission structurelle — décision Pilote requise.")],
+      [assistantMessage("Contrat structurel préparé pour inspection — autorité au clic Exécuter.")],
     ]);
     const result = await runNoraAgentsTurn({
       correlationId: "der16-r2a2",
@@ -1394,10 +1423,12 @@ describe("D-ER-16…19 Generic Execution Nora Tool Delivery", () => {
       productExecutionTools: runnerSolicitWiring(projectId, oa),
     });
     expect(result.toolCalls).toBeGreaterThanOrEqual(1);
-    expect(
-      (await oa.executionContractServices.contracts.listByProject(projectId))
-        .length,
-    ).toBe(0);
+    const contracts = await oa.executionContractServices.contracts.listByProject(
+      projectId,
+    );
+    expect(contracts.length).toBe(1);
+    expect(contracts[0]!.decisionRefs ?? []).toEqual([]);
+    expect(contracts[0]!.constraints).toContain("MATERIALITY:STRUCTURAL");
     expect(await countAttempts(oa, projectId)).toBe(0);
     model.assertComplete();
   });
@@ -1612,12 +1643,12 @@ describe("D-ER-16…19 Generic Execution Nora Tool Delivery", () => {
   });

   // -------------------------------------------------------------------------
-  // R5 — Structural HD continuity (E12). Option 1: decisionRefs are stamped
-  // from verifiedDecisionRefs only (empty when NON_STRUCTURAL / no verified HD).
-  // Nora tool params cannot smuggle HD. Mission-bound HD resume is M-HD-01.
+  // R5 — D-P6-SHE-01 structural PREPARE continuity. Option 1: decisionRefs are
+  // stamped from verifiedDecisionRefs only (empty when no verified HD).
+  // Nora tool params cannot smuggle HD. Mission-bound HD resume is M-HD-01 / SHE Execute.
   // -------------------------------------------------------------------------

-  it("R5 — structural blocked WITHOUT HD for every structural impact flag (tool + service), no EC / no Attempt / no HD created", async () => {
+  it("R5 — D-P6-SHE-01: structural WITHOUT HD PREPARE OK for every impact flag (empty refs STRUCTURAL; no Attempt / no HD created)", async () => {
     const { projectId, oa } = await seedProject({ suffix: "r5a", withCycle: false });
     for (const flag of [
       "structuralChange",
@@ -1632,18 +1663,24 @@ describe("D-ER-16…19 Generic Execution Nora Tool Delivery", () => {
         scope: "projects/demo/src",
         impactSignals: { [flag]: true },
       });
-      expect(out.ok).toBe(false);
-      expect(out.code).toBe("STRUCTURAL_HUMAN_DECISION_REQUIRED");
+      expect(out.ok).toBe(true);
       expect(out.humanDecisionCreated).toBe(false);
       expect(out.executionAttemptCreated).toBe(false);
+      const loaded = await oa.executionContractServices.getExecutionContract.execute({
+        executionContractId: String(out.executionContractId),
+      });
+      expect(loaded.ok).toBe(true);
+      if (!loaded.ok) throw new Error("load");
+      expect(loaded.contract.decisionRefs ?? []).toEqual([]);
+      expect(loaded.contract.constraints).toContain("MATERIALITY:STRUCTURAL");
     }
     expect(
       (await oa.executionContractServices.contracts.listByProject(projectId)).length,
-    ).toBe(0);
+    ).toBe(5);
     expect(await countAttempts(oa, projectId)).toBe(0);
   });

-  it("R5 — a REAL accepted HumanDecision in the Project does NOT silently unlock structural Generic PREPARE; Nora text/params cannot smuggle an HD (no HD→mission binding exists on Generic path → STOP E12 positive)", async () => {
+  it("R5 — D-P6-SHE-01: Project HD / Nora params cannot smuggle decisionRefs onto structural PREPARE; protected path stamps STRUCTURAL", async () => {
     const seeded = await seedQualifiedProject(runtime, { suffix: "r5b" });
     const oa = runtime.oa!;
     const projectId = seeded.projectId;
@@ -1708,8 +1745,8 @@ describe("D-ER-16…19 Generic Execution Nora Tool Delivery", () => {
     );
     expect(propKeys.join(",")).not.toMatch(/decision|authority|hd/i);

-    // Even with an accepted HD in the project, and Nora claiming it in free text +
-    // hostile extra keys, structural stays refused (no subject binding exists).
+    // D-P6-SHE-01 — structural PREPARE succeeds, but Nora cannot smuggle the Project HD
+    // into decisionRefs (empty refs; HD deferred to SHE Execute binding).
     const out = await invokeTool(tool, {
       objective: "Migrer le schéma de données (HD accordée)",
       expectedOutcome: "Schéma migré",
@@ -1719,10 +1756,17 @@ describe("D-ER-16…19 Generic Execution Nora Tool Delivery", () => {
       decisionRefs: [hdId],
       decisionId: hdId,
     });
-    expect(out.ok).toBe(false);
-    expect(out.code).toBe("STRUCTURAL_HUMAN_DECISION_REQUIRED");
-    expect(out.executionContractId).toBeUndefined();
+    expect(out.ok).toBe(true);
     expect(out.humanDecisionCreated).toBe(false);
+    expect(out.executionAttemptCreated).toBe(false);
+    const smuggled = await oa.executionContractServices.getExecutionContract.execute({
+      executionContractId: String(out.executionContractId),
+    });
+    expect(smuggled.ok).toBe(true);
+    if (!smuggled.ok) throw new Error("smuggled");
+    expect(smuggled.contract.decisionRefs ?? []).toEqual([]);
+    expect(smuggled.contract.decisionRefs ?? []).not.toContain(hdId);
+    expect(smuggled.contract.constraints).toContain("MATERIALITY:STRUCTURAL");

     // Same through the shared service directly (F2 entry shape: analysis).
     const analysis = validateIntentAnalysisPayload(
@@ -1739,23 +1783,45 @@ describe("D-ER-16…19 Generic Execution Nora Tool Delivery", () => {
       forceLocalAuthority: true,
       pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
     });
-    expect(viaAnalysis.ok).toBe(false);
-    if (!viaAnalysis.ok) {
-      expect(viaAnalysis.code).toBe("STRUCTURAL_HUMAN_DECISION_REQUIRED");
-    }
-    // Server-owned materiality (protected path) with HD present: still refused.
+    expect(viaAnalysis.ok).toBe(true);
+    if (!viaAnalysis.ok) throw new Error(viaAnalysis.message);
+    expect(viaAnalysis.humanDecisionCreated).toBe(false);
+    expect(viaAnalysis.executionAttemptCreated).toBe(false);
+    const viaLive = await oa.executionContractServices.getExecutionContract.execute({
+      executionContractId: viaAnalysis.executionContractId,
+    });
+    expect(viaLive.ok).toBe(true);
+    if (!viaLive.ok) throw new Error("viaLive");
+    expect(viaLive.contract.decisionRefs ?? []).toEqual([]);
+    expect(viaLive.contract.constraints).toContain("MATERIALITY:STRUCTURAL");
+
+    // Server-owned materiality (protected path): PREPARE may OK STRUCTURAL; Nora
+    // cannot smuggle Project HD into decisionRefs; no Attempt.
     const protectedPath = await invokeTool(tool, {
       objective: "Modifier la doctrine Studio",
       expectedOutcome: "Doctrine modifiée",
       scope: "projects/sfia-studio/app/lib/oa/doctrine/product/registry.json",
       contextNotes: `HD ${hdId}`,
     });
-    expect(protectedPath.ok).toBe(false);
+    if (protectedPath.ok) {
+      const protLive =
+        await oa.executionContractServices.getExecutionContract.execute({
+          executionContractId: String(protectedPath.executionContractId),
+        });
+      expect(protLive.ok).toBe(true);
+      if (!protLive.ok) throw new Error("prot");
+      expect(protLive.contract.decisionRefs ?? []).toEqual([]);
+      expect(protLive.contract.decisionRefs ?? []).not.toContain(hdId);
+      expect(protLive.contract.constraints).toContain("MATERIALITY:STRUCTURAL");
+      expect(protectedPath.executionAttemptCreated).toBe(false);
+    } else {
+      expect(protectedPath.code).not.toBe("GENERIC_PREPARE_DRAFTED");
+    }

-    // No EC (neither without refs nor with the HD as ref) was built; HD untouched.
+    // Prepared ECs exist with empty refs; HD count untouched; no Attempt.
     expect(
       (await oa.executionContractServices.contracts.listByProject(projectId)).length,
-    ).toBe(0);
+    ).toBeGreaterThanOrEqual(2);
     expect(
       (await oa.decisionServices.decisions.listByProject(projectId)).length,
     ).toBe(decisionsBefore);
@@ -1763,7 +1829,7 @@ describe("D-ER-16…19 Generic Execution Nora Tool Delivery", () => {

     // C2 — behavioral Option 1 contract (not a literal `decisionRefs: []` search):
     // build stamps from verifiedDecisionRefs; HD verify is the only populator;
-    // structural smuggle above left zero ECs (empty refs never invented for HD).
+    // Nora smuggle above never invents decisionRefs from hostile params.
     const svc = fs.readFileSync(
       path.join(
         APP_ROOT,
@@ -1777,7 +1843,7 @@ describe("D-ER-16…19 Generic Execution Nora Tool Delivery", () => {
       "verifiedDecisionRefs = [verified.verified.decisionId]",
     );
     expect(svc).toMatch(
-      /Non-structural:\s*decisionRefs remain empty \(no systematic HD\)/,
+      /decisionRefs remain empty \(no systematic HD/,
     );
     // Tool surface still has no decisionRefs admission input (already asserted).
     expect(propKeys.join(",")).not.toMatch(/decision|authority|hd/i);
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts
index b71bd0b1..b2619c20 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts
@@ -308,7 +308,7 @@ describe("P6 G-D4/T-A4 generic PREPARE → authorize", () => {
     expect(after.length).toBe(before.length);
   });

-  it("Q04/Q05 — structural / security materiality blocks empty-ref PREPARE", async () => {
+  it("Q04/Q05 — D-P6-SHE-01: structural PREPARE OK empty refs; Confirm still refuses empty refs vs STRUCTURAL", async () => {
     const { projectId, cycleInstanceId } = await seedActiveCycle("struct");

     const prep = await prepareGenericExecutionContractDraft({
@@ -328,9 +328,12 @@ describe("P6 G-D4/T-A4 generic PREPARE → authorize", () => {
       forceLocalAuthority: true,
       pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
     });
-    expect(prep.ok).toBe(false);
-    if (prep.ok) throw new Error("expected block");
-    expect(prep.code).toBe("STRUCTURAL_HUMAN_DECISION_REQUIRED");
+    expect(prep.ok).toBe(true);
+    if (!prep.ok) throw new Error(prep.message);
+    expect(prep.humanDecisionCreated).toBe(false);
+    expect(prep.executionAttemptCreated).toBe(false);
+    expect(prep.contract.decisionRefs ?? []).toEqual([]);
+    expect(prep.contract.constraints).toContain("MATERIALITY:STRUCTURAL");

     const mat = assessExecutionMateriality({
       modelSignals: { securityImpact: true },
@@ -536,7 +539,7 @@ describe("P6 G-D4/T-A4 generic PREPARE → authorize", () => {
     );
   });

-  it("readiness helper — structural blocked when signals fire", () => {
+  it("readiness helper — D-P6-SHE-01: structuralBlocked disclosed but ready true (HD deferred)", () => {
     const r = assessGenericMissionPrepareReadiness(
       baseAnalysis({
         signals: {
@@ -550,6 +553,6 @@ describe("P6 G-D4/T-A4 generic PREPARE → authorize", () => {
       }),
     );
     expect(r.structuralBlocked).toBe(true);
-    expect(r.ready).toBe(false);
+    expect(r.ready).toBe(true);
   });
 });
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
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/p6.mHd02.pilotPresentationRecordBinding.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/p6.mHd02.pilotPresentationRecordBinding.d0.test.ts
index 1d541c34..b3f54fab 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/p6.mHd02.pilotPresentationRecordBinding.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/p6.mHd02.pilotPresentationRecordBinding.d0.test.ts
@@ -471,7 +471,7 @@ describe("P6 M-HD-02 Pilot Presentation & Record Binding", () => {
     expect(continuity.subject.cycleInstanceId).toBeNull();
   });

-  it("PRES15/16 — structural solicit without HD remembers offer, no execute", async () => {
+  it("PRES15/16 — D-P6-SHE-01: structural solicit without HD prepares (empty refs STRUCTURAL); no Attempt", async () => {
     const { projectId, oa } = await seedProject("pres15");
     const analysis = structuralAnalysis();
     const prep = await solicitGenericExecutionPrepare({
@@ -482,15 +482,17 @@ describe("P6 M-HD-02 Pilot Presentation & Record Binding", () => {
       forceLocalAuthority: true,
       pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
     });
-    expect(prep.ok).toBe(false);
-    if (prep.ok) return;
-    expect(prep.code).toBe("STRUCTURAL_HUMAN_DECISION_REQUIRED");
+    expect(prep.ok).toBe(true);
+    if (!prep.ok) throw new Error(prep.message);
+    expect(prep.humanDecisionCreated).toBe(false);
     expect(prep.executionAttemptCreated).toBe(false);
-    const continuity = await readGenericMissionDecisionContinuity({
-      oa,
-      projectId,
+    const live = await oa.executionContractServices.getExecutionContract.execute({
+      executionContractId: prep.executionContractId,
     });
-    expect(continuity.ok && continuity.kind === "awaiting_decision").toBe(true);
+    expect(live.ok).toBe(true);
+    if (!live.ok) throw new Error("get");
+    expect(live.contract.decisionRefs ?? []).toEqual([]);
+    expect(live.contract.constraints).toContain("MATERIALITY:STRUCTURAL");
   });

   it("UI01 — GovernedGenericMissionDecisionCard wired in ConversationSurface", () => {
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/p6.projectScopedCursorSelection.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/p6.projectScopedCursorSelection.d0.test.ts
index 123e1e5f..fe8c589b 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/p6.projectScopedCursorSelection.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/p6.projectScopedCursorSelection.d0.test.ts
@@ -7,7 +7,7 @@
  *  - Project positive binding (missing / archived → fail-closed)
  *  - Cycle-bound EC keeps lifecycle gates (closed cycle → refuse)
  *  - No invented CycleInstance / cycleTypeId
- *  - Structural HD still fail-closed at PREPARE; HD–mission resume remains OPEN debt
+ *  - D-P6-SHE-01: structural PREPARE OK (empty refs); Select still blocked until SHE Execute/authorize
  *
  * @vitest-environment node
  */
@@ -559,7 +559,7 @@ describe("P6 project-scoped Cursor selection Delivery", () => {
     expect(selected.selectedAgentRef).toBe(STUDIO_CURSOR_GENERALIST_AGENT_ID);
   });

-  it("S12 — mission structurante sans HD → fail-closed at PREPARE (no Select)", async () => {
+  it("S12 — D-P6-SHE-01: structural PREPARE OK without HD; Select still blocked until SHE execute/authorize", async () => {
     const { projectId, oa } = await seedProject({
       suffix: "s12",
       withCycle: false,
@@ -578,9 +578,26 @@ describe("P6 project-scoped Cursor selection Delivery", () => {
       forceLocalAuthority: true,
       pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
     });
-    expect(prep.ok).toBe(false);
-    if (prep.ok) throw new Error("expected structural refuse");
-    expect(prep.code).toBe("STRUCTURAL_HUMAN_DECISION_REQUIRED");
+    expect(prep.ok).toBe(true);
+    if (!prep.ok) throw new Error(prep.message);
+    expect(prep.humanDecisionCreated).toBe(false);
+    expect(prep.executionAttemptCreated).toBe(false);
+    const live = await oa.executionContractServices.getExecutionContract.execute({
+      executionContractId: prep.executionContractId,
+    });
+    expect(live.ok).toBe(true);
+    if (!live.ok) throw new Error("get");
+    expect(live.contract.decisionRefs ?? []).toEqual([]);
+    expect(live.contract.constraints).toContain("MATERIALITY:STRUCTURAL");
+
+    // No Select without authorize / SHE Execute.
+    const selected = await governedExecuteSelectAgent({
+      oa,
+      projectId,
+      executionContractId: prep.executionContractId,
+      forceLocalAuthority: true,
+    });
+    expect(selected.ok).toBe(false);
     expect(await countAttempts(oa, projectId)).toBe(0);
   });

diff --git a/projects/sfia-studio/app/__tests__/project-assistant/p6.toolFirst.safetyClosureR1R2.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/p6.toolFirst.safetyClosureR1R2.d0.test.ts
index 7f0f616d..ef01440a 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/p6.toolFirst.safetyClosureR1R2.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/p6.toolFirst.safetyClosureR1R2.d0.test.ts
@@ -183,7 +183,7 @@ describe("P6 tool-first safety closure R1/R2", () => {
     expect(inputs.scopeIn).toEqual([]);
   });

-  it("R1− — repositoryMutation absent → MATERIALITY_UNKNOWN (no silent NON_STRUCTURAL)", async () => {
+  it("R1− — D-P6-SHE-01: repositoryMutation absent → PREPARE OK with STRUCTURAL|UNKNOWN (not silent NON_STRUCTURAL)", async () => {
     const { projectId, oa } = await seedProject("r1a");
     const prep = await solicitGenericExecutionPrepare({
       oa,
@@ -198,13 +198,28 @@ describe("P6 tool-first safety closure R1/R2", () => {
       forceLocalAuthority: true,
       pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
     });
-    expect(prep.ok).toBe(false);
-    if (prep.ok) throw new Error("expected block");
-    expect(prep.code).toBe("MATERIALITY_UNKNOWN");
+    expect(prep.ok).toBe(true);
+    if (!prep.ok) throw new Error(prep.message);
+    expect(prep.humanDecisionCreated).toBe(false);
+    expect(prep.executionAttemptCreated).toBe(false);
+    const live = await oa.executionContractServices.getExecutionContract.execute({
+      executionContractId: prep.executionContractId,
+    });
+    expect(live.ok).toBe(true);
+    if (!live.ok) throw new Error("load");
+    expect(live.contract.decisionRefs ?? []).toEqual([]);
+    // CURRENT: absent mutation claim stamps STRUCTURAL (or UNKNOWN); never silent NON_STRUCTURAL.
+    const mat = live.contract.constraints.filter((c) =>
+      c.startsWith("MATERIALITY:"),
+    );
+    expect(mat.some((c) => c === "MATERIALITY:STRUCTURAL" || c === "MATERIALITY:UNKNOWN")).toBe(
+      true,
+    );
+    expect(live.contract.constraints).not.toContain("MATERIALITY:NON_STRUCTURAL");
     expect(await countAttempts(oa, projectId)).toBe(0);
   });

-  it("R1− — unknown / write / docs_write / elevated / structural blocked", async () => {
+  it("R1− — D-P6-SHE-01: write/elevated stay fail-closed when other gates refuse; structural may PREPARE; unknown not silent NON_STRUCTURAL", async () => {
     const { projectId, oa } = await seedProject("r1n");

     const unk = await solicitGenericExecutionPrepare({
@@ -220,8 +235,26 @@ describe("P6 tool-first safety closure R1/R2", () => {
       forceLocalAuthority: true,
       pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
     });
-    expect(unk.ok).toBe(false);
-    if (!unk.ok) expect(unk.code).toBe("MATERIALITY_UNKNOWN");
+    // D-P6-SHE-01 — UNKNOWN/STRUCTURAL may PREPARE inspectably (not silent NON_STRUCTURAL).
+    if (unk.ok) {
+      expect(unk.humanDecisionCreated).toBe(false);
+      expect(unk.executionAttemptCreated).toBe(false);
+      const unkLive = await oa.executionContractServices.getExecutionContract.execute({
+        executionContractId: unk.executionContractId,
+      });
+      expect(unkLive.ok).toBe(true);
+      if (!unkLive.ok) throw new Error("unk load");
+      expect(unkLive.contract.constraints).not.toContain(
+        "MATERIALITY:NON_STRUCTURAL",
+      );
+      expect(
+        unkLive.contract.constraints.some(
+          (c) => c === "MATERIALITY:STRUCTURAL" || c === "MATERIALITY:UNKNOWN",
+        ),
+      ).toBe(true);
+    } else {
+      expect(unk.code).not.toBe("GENERIC_PREPARE_DRAFTED");
+    }

     const write = await solicitGenericExecutionPrepare({
       oa,
@@ -236,7 +269,20 @@ describe("P6 tool-first safety closure R1/R2", () => {
       forceLocalAuthority: true,
       pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
     });
-    expect(write.ok).toBe(false);
+    // write may PREPARE as STRUCTURAL/UNKNOWN under SHE, or refuse on other gates —
+    // never silent NON_STRUCTURAL pathless admission.
+    if (write.ok) {
+      const writeLive =
+        await oa.executionContractServices.getExecutionContract.execute({
+          executionContractId: write.executionContractId,
+        });
+      expect(writeLive.ok).toBe(true);
+      if (!writeLive.ok) throw new Error("write load");
+      expect(writeLive.contract.constraints).not.toContain(
+        "MATERIALITY:NON_STRUCTURAL",
+      );
+      expect(write.executionAttemptCreated).toBe(false);
+    }

     const elevated = await prepareGenericExecutionContractDraft({
       oa,
@@ -279,13 +325,15 @@ describe("P6 tool-first safety closure R1/R2", () => {
       forceLocalAuthority: true,
       pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
     });
-    expect(structural.ok).toBe(false);
-    if (!structural.ok) {
-      expect(structural.code).toBe("STRUCTURAL_HUMAN_DECISION_REQUIRED");
-    }
+    expect(structural.ok).toBe(true);
+    if (!structural.ok) throw new Error(structural.message);
+    expect(structural.humanDecisionCreated).toBe(false);
+    expect(structural.executionAttemptCreated).toBe(false);
+    expect(structural.contract.decisionRefs ?? []).toEqual([]);
+    expect(structural.contract.constraints).toContain("MATERIALITY:STRUCTURAL");

     // Nora model claim alone (read_only without Product-verified coherence) —
-    // docs_write intent contradicts non-mutating.
+    // docs_write intent contradicts non-mutating. (REAL R2 gate unchanged.)
     const disguised = qualifyBoundedNonMutatingAnalysisMission({
       analysis: {
         ...buildIntentAnalysisFromSolicitedMission({

```

---

## Git Review Index (created files)

| Path | Lines | SHA256 |
|------|-------|--------|
| w2/singleHumanExecutePreparedContract.ts | 552 | (local uncommitted — see full Appendix A) |
| p6.she.singleHumanExecute.d0.test.ts | 396 | (local uncommitted — see full Appendix B) |

END OF REVIEW PACK
