# SFIA Review Pack — Lifecycle Recommendation Integrity Correction

## Header
- timestamp_utc: 2026-09-08T12:19:02Z
- cycle: SFIA-STUDIO-PRODUCT-PROOF-LIFECYCLE-RECOMMENDATION-CORR-DELIVERY-03
- type: 8 — Delivery / implémentation
- typology: EVOL
- profile: CRITICAL
- capability: Lifecycle Recommendation & Pilot Decision Continuity
- milestone: Product Proof / Pilot-Governed Project Lifecycle completion
- runtime_v3: NON ADOPTED
- fake_real: DETERMINISTIC ONLY / ZERO REAL
- product_git: NO PRODUCT COMMIT / PUSH / PR / MERGE
- review_handoff: REQUIRED PUBLISH-IN-CYCLE

## Local Git Truth
```
/Users/morris/Projects/sfia-lr-delivery-isolated-e6d7c649
origin	https://github.com/mcleland147/sfia-workspace.git (fetch)
origin	https://github.com/mcleland147/sfia-workspace.git (push)
delivery/sfia-studio-lifecycle-recommendation-product
e6d7c649e9d0522b60401f11fb8dd1fd4b122637
e6d7c649e9d0522b60401f11fb8dd1fd4b122637
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
 M projects/sfia-studio/app/features/project-assistant/actions.ts
 M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
 M projects/sfia-studio/app/features/project-assistant/types.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
 M projects/sfia-studio/app/lib/oa/cycle/application/lifecycleProjection.ts
 M projects/sfia-studio/app/lib/oa/cycle/application/updateEpistemicState.ts
 M projects/sfia-studio/app/lib/oa/cycle/domain/types.ts
 M projects/sfia-studio/app/lib/oa/cycle/index.ts
 M projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/epistemic/epistemic-item.schema.json
?? .tmp-sfia-review/discovery-matrix.md
?? .tmp-sfia-review/product-tracked.diff
?? projects/sfia-studio/app/__tests__/oa/cycle/lifecycleRecommendation.delivery.d0.test.ts
?? projects/sfia-studio/app/__tests__/oa/cycle/lifecycleRecommendation.finalCorr.d0.test.ts
?? projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.module.css
?? projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx
?? projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecyclePresentation.ts
?? projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecycleVisualContract.ts
?? projects/sfia-studio/app/lib/nora-cognitive-runtime/noraLifecycleRecommendationOutputType.ts
?? projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
?? projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/
?? projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/epistemic/lifecycle-recommendation.schema.json
 .tmp-sfia-review/chatgpt-review.md                 | 8051 +++++++++++++++++++-
 .../pre-m6-product-ui/ProjectWorkspacePage.tsx     |   15 +
 .../app/features/project-assistant/actions.ts      |  208 +-
 .../features/project-assistant/orchestrateTurn.ts  |  150 +-
 .../app/features/project-assistant/types.ts        |    7 +
 .../nora-cognitive-runtime/providerAgentsModel.ts  |   28 +
 .../nora-cognitive-runtime/runNoraAgentsTurn.ts    |   49 +-
 .../nora-cognitive-runtime/runNoraCognitiveTurn.ts |    7 +
 .../app/lib/nora-cognitive-runtime/types.ts        |    5 +
 .../oa/cycle/application/lifecycleProjection.ts    |   16 +
 .../oa/cycle/application/updateEpistemicState.ts   |    3 +
 .../sfia-studio/app/lib/oa/cycle/domain/types.ts   |   42 +
 projects/sfia-studio/app/lib/oa/cycle/index.ts     |    1 +
 .../schemas/epistemic/epistemic-item.schema.json   |    3 +
 14 files changed, 8372 insertions(+), 213 deletions(-)
M	.tmp-sfia-review/chatgpt-review.md
M	projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
M	projects/sfia-studio/app/features/project-assistant/actions.ts
M	projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
M	projects/sfia-studio/app/features/project-assistant/types.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
M	projects/sfia-studio/app/lib/oa/cycle/application/lifecycleProjection.ts
M	projects/sfia-studio/app/lib/oa/cycle/application/updateEpistemicState.ts
M	projects/sfia-studio/app/lib/oa/cycle/domain/types.ts
M	projects/sfia-studio/app/lib/oa/cycle/index.ts
M	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/epistemic/epistemic-item.schema.json
.tmp-sfia-review/discovery-matrix.md
.tmp-sfia-review/product-tracked.diff
projects/sfia-studio/app/__tests__/oa/cycle/lifecycleRecommendation.delivery.d0.test.ts
projects/sfia-studio/app/__tests__/oa/cycle/lifecycleRecommendation.finalCorr.d0.test.ts
projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.module.css
projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx
projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecyclePresentation.ts
projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecycleVisualContract.ts
projects/sfia-studio/app/lib/nora-cognitive-runtime/noraLifecycleRecommendationOutputType.ts
projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/basisFingerprint.ts
projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/currentness.ts
projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/index.ts
projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/materialReaderContract.ts
projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/materializeFromProductTurn.ts
projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/materializeLifecycleRecommendation.ts
projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/noraActor.ts
projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/produceLifecycleRecommendation.ts
projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/resolveCanonicalBasis.ts
projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/types.ts
projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/validateLifecycleRecommendation.ts
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/epistemic/lifecycle-recommendation.schema.json
e6d7c649 (HEAD -> delivery/sfia-studio-lifecycle-recommendation-product, origin/main, origin/delivery/sfia-studio-lifecycle-recommendation-product, delivery/sfia-studio-proof-corr-04-hybrid-envelope-d) Merge pull request #476 from mcleland147/delivery/sfia-studio-proof-corr-05-pilot-lifecycle
105f6473 feat(sfia-studio): enforce pilot-governed cycle lifecycle
12d837fd Merge pull request #475 from mcleland147/recovery/sfia-studio-proof-corr-04-option-d-ac7376d9
7f7184ca test(sfia-studio): register cognitive context runtime boundary
95b268c3 feat(sfia-studio): ground Nora reasoning in Studio context
1f48dd81 Merge pull request #474 from mcleland147/delivery/sfia-studio-proof-corr-03-e1-method-grounded-advisory
8c6715fe fix(sfia-studio): ground Nora advisory in Studio method
1b93fca8 Merge pull request #473 from mcleland147/delivery/sfia-studio-proof-corr-02-b1-advisory-default
```

## Incoming handoff
- SHA: 55eafaa29522ede54a37b3031e9495327346e5ee
- branch: origin/sfia/review-handoff (fetched + verified tip match)

## Morris GO consumed
GO MORRIS — AUTHORIZE BOUNDED LIFECYCLE RECOMMENDATION INTEGRITY CORRECTION FOR NORA PROVENANCE + MATERIAL BASIS FAIL-CLOSED / WRITE-READ PARITY + TRUE BASIS-08 NON-MATERIAL MUTATION PROOF — PUBLISH REVIEW HANDOFF — ZERO REAL — NO PRODUCT COMMIT/PUSH/PR/MERGE.

## Exact prior ChatGPT blockers addressed
- INT-01 NORA PROVENANCE — createdBy was LOCAL_PILOTE_ACTOR while source/producer identify Nora
- INT-02 BASIS WRITE/READ PARITY — write-time finalizeAccepted/resumeClean vs read-time reconstruction
- INT-03 MATERIAL BASIS FAIL-CLOSED — reader failures coerced to null/[] then treated as known empty
- INT-04 BASIS-08 PROOF — prior test only proved identical facts ⇒ CURRENT; no durable non-material mutation

## Convergence classification
### KEEP
Nora→Product bridge; product-turn outputType; one Agents call; typed Epistemic carrier; canonical basis resolver; fingerprinting; SQLite payload_json; currentness/supersession; authoritative RESUME assessor; LifecycleSurface; TrajectorySurface; Recommendation authority none.

### ADAPT
Recommendation actor/provenance; Product material-fact reader contract; basis write/read parity; read-side fail-closed; Product bridge fail-closed; BASIS-08 test; negative reader-failure tests.

### COMPLETE
Epistemic provenance honesty; material basis availability semantics; exact currentness parity; true non-material mutation proof.

### DO NOT (honored)
No second resolver/carrier/state machine; no Nora outputType redesign; no LifecycleSurface redesign; no persistence architecture change; no LR-D03/R10 reopen.

## Provenance before/after
### Before
Nora structured LR → source=lifecycle-recommendation:nora / producer=nora BUT createdBy=LOCAL_PILOTE_ACTOR (orchestrateTurn).

### After
createdBy = NORA_LIFECYCLE_RECOMMENDATION_ACTOR = { actorId: "actor:nora", role: "agent", displayName: "Nora", authorityLevel: "N1" }
- source remains lifecycle-recommendation:nora
- authority remains none
- isHumanDecision false
- no HumanDecision synthesized
- Pilote actor remains for Pilot-governed HD/lifecycle actions only

## Durable Recommendation actor/provenance proof
PROV-01..06 in lifecycleRecommendation.finalCorr.d0.test.ts — inspects durable reloaded Epistemic item after orchestrateProjectAssistantTurn.
E2E also asserts createdBy.actorId === actor:nora and ≠ LOCAL_PILOTE_ACTOR.

## Final materiality classification (LifecycleRecommendationBasisRefs)
| Field | Class | Disposition |
|---|---|---|
| projectId | A MATERIAL | fingerprinted |
| subjectCycleInstanceId | A MATERIAL | fingerprinted |
| subjectCycleStatus | A MATERIAL | fingerprinted |
| targetCycleInstanceId | A MATERIAL | fingerprinted |
| targetCycleTypeId | A MATERIAL | fingerprinted |
| lpsActiveCycleInstanceId | A MATERIAL | fingerprinted |
| lpsVersion | A MATERIAL | fingerprinted |
| doctrinePackageId/Version/Digest | A MATERIAL | fingerprinted |
| trajectoryId/Version/Status | A MATERIAL | fingerprinted |
| decisionFingerprint | A MATERIAL | fingerprinted |
| evidenceFingerprint | A MATERIAL (FINALIZE only; null for NEXT) | fingerprinted when present |
| blockerFingerprint | A MATERIAL | fingerprinted |
| reservationBlockingCount | A MATERIAL | fingerprinted |
| finalizeAccepted | B ELIGIBILITY | always null in canonical resolver; EXCLUDED from fingerprint |
| resumeClean | B ELIGIBILITY | always null in canonical resolver; EXCLUDED from fingerprint |

### finalizeAccepted disposition + justification
B ELIGIBILITY / ACTIONABILITY — Recommendation ≠ eligibility. A Recommendation may exist while FINALIZE is not eligible. Removed from material fingerprint; schema fields retained for backward compatibility/audit but resolver forces null on write+read. Finalization assessment remains on lifecycle eligibility path (assessFinalizationObligations) — not duplicated into Recommendation currentness. No fake completeness via empty reviewBundles.

### resumeClean disposition + justification
B ELIGIBILITY — R10 resume eligibility remains independently governed by assessResumeReconciliation in pilot lifecycle projection. Excluded from Recommendation material fingerprint; resolver forces null. R10 proofs still PASS (136 CORR-PROOF-05 + R10 suite in delivery.d0).

## Intent → required-reader matrix
| Intent | Material dimensions | Required readers | Reader-failure result |
|---|---|---|---|
| FINALIZE_CURRENT_CYCLE | cycles,lps,doctrine,trajectory,decisions,evidence,epistemic_blockers | same | write: narrative preserved, LR not persisted, code LR_BASIS_*_UNAVAILABLE; read: omit from currentRecommendations |
| NEXT_CYCLE | cycles,lps,doctrine,trajectory,decisions,epistemic_blockers (evidence NOT required) | same | evidence failure does NOT invalidate NEXT_CYCLE |

## Write / read basis parity
- write: durable Product truth → resolveCanonicalLifecycleRecommendationBasis → fingerprint/persist
- read: durable Product truth → SAME resolveCanonicalLifecycleRecommendationBasis via rebuildBasisRefsForRecommendation → fingerprint/compare
- Proof: materialBasisRefsEqual(writeBasis, readBasis) === true AND computeBasisFingerprint equality under unchanged truth (finalCorr BASIS suite + BASIS-08)

## Fail-closed architecture
- UNKNOWN (reader catch/failure) tracked in failedMaterialDimensions Set
- KNOWN EMPTY (successful reader returning []) allowed into canonical basis
- Write: firstFailedRequiredMaterialDimension(intent, failed) → produce ok:false with specific code; narrative preserved
- Read: selectCurrentLifecycleRecommendations skips items when required material reader failed (omit CURRENT)

## UNKNOWN vs EMPTY
orchestrateTurn + actions: catch paths now add dimension to failedMaterialDimensions instead of silently treating as empty for LR purposes. Empty arrays only used when reader succeeded.

## True BASIS-08 durable mutation
- Persist FINALIZE Recommendation
- Mutate durable non-blocking Epistemic Observation (type Observation, source test:noise)
- Justification: Observations are outside blocker fingerprint (only active blocking Reservations), outside decision/evidence/subject/LPS/trajectory/doctrine fingerprints
- Reload + rebuild → remains CURRENT; selectCurrent includes it

## Reader-failure test matrix
- FAIL-01 trajectory UNKNOWN → narrative preserved, no persist, LR_BASIS_TRAJECTORY_UNAVAILABLE
- FAIL-02 decisions UNKNOWN → LR_BASIS_DECISIONS_UNAVAILABLE
- FAIL-03 evidence UNKNOWN (FINALIZE) → LR_BASIS_EVIDENCE_UNAVAILABLE
- FAIL-04 epistemic UNKNOWN → LR_BASIS_EPISTEMIC_UNAVAILABLE
- FAIL-05 known EMPTY → may materialize
- FAIL-06 read-side trajectory unavailable → not projected CURRENT
- FAIL-07 evidence UNKNOWN for NEXT_CYCLE → may still materialize

## R5 / R13 / R15 / R10
- R5 PASS — material mutations stale; write/read parity exact; missing material facts fail closed; true non-material durable mutation remains CURRENT
- R13 PASS — stale/superseded do not resurrect; reader failure cannot make CURRENT; reliable matching facts restore currentness
- R15 PASS — one-call Product E2E + basis-reader failure preserves narrative without LR persist
- R10 PASS — delivery R10 suite + corrProof05 136 tests

## Complete R1–R15
| R | Result | Notes |
|---|---|---|
| R1 | PASS | FINALIZE via same Nora Runner / product-turn |
| R2 | PASS | NEXT_CYCLE same path |
| R3 | PASS | invalid binding fail-closed |
| R4 | PASS | typed Epistemic durability |
| R5 | PASS | materiality + parity + true BASIS-08 |
| R6 | PASS | no lr:* protocol |
| R7 | PASS | authority none / no HD |
| R8 | PASS | NEXT_CYCLE does not create Cycle |
| R9 | PASS | Recommendation ≠ eligibility |
| R10 | PASS | authoritative RESUME assessor |
| R11 | PASS | TrajectorySurface reused |
| R12 | PASS | shared Runner outputType |
| R13 | PASS | reload + fail-closed currentness |
| R14 | FUNCTIONAL PASS / VISUAL RESERVED | LifecycleSurface present; strong visual reserved |
| R15 | PASS | E2E Product bridge + fail-closed reader path |

## Tests / counts
- lifecycleRecommendation.finalCorr.d0: 10 passed
- lifecycleRecommendation.delivery.d0: 14 passed
- corrProof05.pilotLifecycle.d0: 136 passed
- orchestrateTurn.test: 8 passed
- nora mw1.final.deterministic.e2e: 2 passed
- TOTAL targeted recorded: 170
- typecheck: included in next build (PASS)
- build: next build PASS
- lint: next lint PASS (0 warnings/errors)
- git diff --check: PASS
- Fake/Real: ScriptedModel / FakeConversationProvider — ZERO REAL
- model invocation count (E2E): 1 Agents call (spy)

## Modeled / schema
- MODELED DELTA THIS CYCLE = NONE (no schema edits in CORR-DELIVERY-03)
- schemaVersion remains 0.1.0-oa
- prior Option A additive epistemic-item optional field + lifecycle-recommendation.schema.json remain from accepted candidate (unchanged this cycle)
- No DDL / no new table / no lr:* protocol

## Product Git status
- HEAD remains e6d7c649e9d0522b60401f11fb8dd1fd4b122637
- Product candidate remains uncommitted
- staged empty
- Product commit/push/PR/merge: NO

## Reservations / debt
- R14 strong visual still RESERVED
- finalizeAccepted/resumeClean remain optional in JSON schema for backward compat but are non-material (always null in canonical resolver)
- REAL boundary not exercised (authorized ZERO REAL)

## Next gate
ChatGPT Product Git gate review from NEW handoff SHA after publication.

## Final verdict
READY FOR CHATGPT PRODUCT GIT GATE REVIEW — NORA PROVENANCE HONEST — MATERIAL BASIS WRITE/READ PARITY PROVEN — MATERIAL READERS FAIL CLOSED — TRUE BASIS-08 PROVEN — R1–R15 PASS WITH R14 VISUAL RESERVED — DETERMINISTIC PRODUCT CANDIDATE — ZERO REAL — HANDOFF REMOTE VERIFIED — PRODUCT COMMIT/PUSH/PR NOT AUTHORIZED

---
# CONTENT COVERAGE — FULL PRODUCT ARTIFACTS

## CORR-DELIVERY-03 integrity focus files (FULL CONTENT)

### FULL FILE: `projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts`
- sha256: 0695987bf420609232a69027112aeac7357bb4563c99e3604143d072ccb14110
- bytes: 19763

```typescript
import {
  isFakeConversationProviderForced,
  resolveConversationProvider,
  type ConversationProvider,
  type ProviderChatMessage,
} from "@/lib/platform/ai";
import {
  memoryBPiloteNotice,
  memoryBCompactionPiloteNotice,
  runNoraCognitiveTurn,
  formatCognitiveStopPiloteNotice,
  aggregateReadCoverage,
  rememberReadCoverage,
  ProductSqliteSession,
  resolveNoraSessionSqlitePath,
  type SemanticCognitiveWorkloadAssessment,
  type Mw3ContradictionAssessmentInput,
  type NoraEvalModelReasoningControl,
  type NoraAgentsUsdAccounting,
  type NoraCampaignBudget,
} from "@/lib/nora-cognitive-runtime";
import { NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import { materializeLifecycleRecommendationFromStructuredOutput } from "@/lib/oa/cycle/application/lifecycleRecommendation/materializeFromProductTurn";
import { NORA_LIFECYCLE_RECOMMENDATION_ACTOR } from "@/lib/oa/cycle/application/lifecycleRecommendation/noraActor";
import type { LifecycleRecommendationMaterialDimension } from "@/lib/oa/cycle/application/lifecycleRecommendation/materialReaderContract";
import { resolveWorkspaceRootFromAppCwd } from "@/lib/platform/repository/workspaceRoot";
import { loadProjectRuntimeForAssistant } from "@/features/vertical-slice-ui/ProjectWorkspaceView";
import { buildProjectSystemPrompt } from "./buildProjectSystemPrompt";
import { collectToolTelemetry } from "./collectToolTelemetry";
import { ProjectAssistantMemoryEventSink } from "./memoryEventSink";
import { resolveAssistantMode } from "./resolveAssistantMode";
import { resolveRememberedEvidence } from "./mw3AvailableEvidence";
import type { AdvisoryMethodContext } from "./f2/methodOrientation";
import type { StudioCognitiveContext } from "./f2/studioCognitiveContext";
import type {
  AssistantHistoryMessage,
  Mw3CognitiveSurfaceDto,
  Mw4GroundingSurfaceDto,
  ProjectAssistantContextDto,
  ProjectAssistantSendResult,
} from "./types";

const MAX_HISTORY_MESSAGES = 20;

function buildEphemeralNotice(
  memoryBAvailability:
    | "available_with_history"
    | "available_empty"
    | "unavailable",
  memoryBCompactionState:
    | "none"
    | "compacted_no_loss"
    | "compacted_with_loss"
    | "stale_invalidated",
  stalePriorInvalidated?: boolean,
  cognitiveStopNotice?: string | null,
): string {
  const base = memoryBPiloteNotice(memoryBAvailability);
  const compaction = memoryBCompactionPiloteNotice(memoryBCompactionState, {
    stalePriorInvalidated,
  });
  const parts = [cognitiveStopNotice, compaction, base].filter(
    (p): p is string => typeof p === "string" && p.trim().length > 0,
  );
  return parts.join(" ");
}

function toMw3Surface(
  turn: Awaited<ReturnType<typeof runNoraCognitiveTurn>>,
): Mw3CognitiveSurfaceDto | null {
  const disposition = turn.contradictionDisposition;
  const stop = turn.cognitiveStopDecision;
  if (!disposition || !stop) return null;
  return {
    disposition: disposition.disposition,
    progression: stop.outcome,
    cognitiveStop: stop.cognitiveStop,
    reason: stop.anatomy?.reason ?? disposition.disclosure,
    evidenceIds: stop.anatomy?.contradictionEvidenceIds ?? [
      ...disposition.acceptedEvidenceIds,
    ],
    sourceIds: stop.anatomy?.sourceIds ?? [...disposition.acceptedSourceIds],
    governingPremise: stop.anatomy?.governingPremise || null,
    nextAction: stop.anatomy?.nextAction ?? null,
    insufficiencyReasons: [...disposition.insufficiencyReasons],
    allowsSilentSuccess: false,
    blockedImpact: stop.cognitiveStop
      ? `Progression bloquée — prémisse gouvernante invalidée${
          stop.anatomy?.governingPremise
            ? ` (${stop.anatomy.governingPremise})`
            : ""
        }.`
      : null,
    mayContinue:
      stop.cognitiveStop !== true && stop.progression === "continue",
    notTechnicalFailure: stop.progression !== "technical_failure",
  };
}

function toMw4Surface(
  turn: Awaited<ReturnType<typeof runNoraCognitiveTurn>>,
): Mw4GroundingSurfaceDto | null {
  const g = turn.mw4Grounding;
  if (!g) return null;
  return {
    rememberedIds: [...g.rememberedIds],
    validIds: [...g.validIds],
    downgradedIds: [...g.downgradedIds],
    missingIds: [...g.missingIds],
    disclosure: g.disclosure,
    readCoverageOverall: g.readCoverageOverall,
    readCoverageDisclosure: g.readCoverageDisclosure ?? null,
  };
}

function toContextDto(
  result: Extract<
    Awaited<ReturnType<typeof loadProjectRuntimeForAssistant>>,
    { ok: true }
  >,
): ProjectAssistantContextDto {
  return {
    projectId: result.project.projectId,
    name: result.project.name,
    shortReference: result.project.shortReference ?? null,
    objective: result.project.objective,
    contextSummary: result.project.contextSummary,
    criticality: result.project.criticality,
    constraints: [...result.project.constraints],
    lpsId: result.livingState.id,
    lpsVersion: result.livingState.version,
    lpsCreatedAt: result.livingState.createdAt,
    doctrineId: result.doctrine.id,
    doctrineVersion: result.doctrine.version,
    doctrineDigest: result.doctrine.digest,
    doctrineStatus: result.doctrine.status,
    runtimeMode: result.disclosures.runtimeMode,
    persistence: result.disclosures.persistence,
    readiness: result.readiness.status,
  };
}

/**
 * Thin F1 orchestration — Option C single Agents Runner path (Fake + target).
 * SFIA routeToolCall remains the tool authorization boundary.
 */
export async function orchestrateProjectAssistantTurn(input: {
  projectId: string;
  content: string;
  history?: AssistantHistoryMessage[];
  /**
   * Optional server-side provider injection (eval / tests).
   * Prefer per-instance OpenAIConversationProvider over process.env mutation.
   */
  provider?: ConversationProvider;
  /** Test override for Product SQLite Session path. */
  sessionDbPath?: string;
  /**
   * Test injection — forces Memory B UNAVAILABLE (MW1-S01).
   * Same product path; no second runtime.
   */
  simulateMemoryBUnavailable?: boolean;
  /**
   * CORR-MW2-REAL-01 — INTERNAL semantic CWP from analyzeIntent.
   * Server-side only; never part of ProjectAssistantSendResult.
   */
  semanticCognitiveWorkload?: SemanticCognitiveWorkloadAssessment | null;
  /**
   * CORR-MW2-REAL-04 — INTERNAL full Truth C / LPS context for F1 system prompt.
   * Server-side only; does not expand ProjectAssistantContextDto / client DTO.
   */
  truthCContext?: string | null;
  /**
   * CORR-PROOF-03 E1 — INTERNAL non-mutating method orientation + optional CKC lens.
   * Server-side only; never client-authoritative.
   */
  methodContext?: AdvisoryMethodContext | null;
  /**
   * CORR-PROOF-04 — INTERNAL Studio Cognitive Context envelope.
   * Server-side only; never client-authoritative. Supersedes methodContext when set.
   */
  studioCognitiveContext?: StudioCognitiveContext | null;
  /**
   * MW3 — optional contradiction assessment (tests/eval/product when facts exist).
   * Server-side; surfaces mw3 DTO without inventing Evidence.
   */
  contradictionAssessment?: Mw3ContradictionAssessmentInput | null;
  /** MW4-S02 — attach post-Evidence / recovery narrative policy disclosure. */
  postEvidenceNarrativePolicy?: boolean;
  /**
   * INTERNAL / EVAL-ONLY — Stage A cell model×effort pin.
   * Never part of ProjectAssistant client DTO. Absent → production default.
   */
  evalModelReasoningControl?: NoraEvalModelReasoningControl;
  /** INTERNAL / EVAL-ONLY — Agents USD authorization envelope bridge. */
  usdAccounting?: NoraAgentsUsdAccounting;
  /** INTERNAL / EVAL-ONLY — shared canonical campaign budget lease. */
  campaignBudget?: NoraCampaignBudget;
}): Promise<ProjectAssistantSendResult> {
  const content = input.content.trim();
  if (!content) {
    return {
      ok: false,
      status: "validation_error",
      code: "EMPTY_MESSAGE",
      message: "Saisissez un message avant d'envoyer.",
      mode: isFakeConversationProviderForced() ? "fixture" : "unavailable",
      retryable: true,
    };
  }

  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
  if (!projectResult.ok) {
    return {
      ok: false,
      status: "project_not_found",
      code: projectResult.error.code,
      message: projectResult.error.message,
      mode: isFakeConversationProviderForced() ? "fixture" : "unavailable",
      retryable: false,
    };
  }

  const project = toContextDto(projectResult);
  const modeResolution = resolveAssistantMode(input.provider);
  if (!modeResolution.canProceed) {
    return {
      ok: false,
      status: "provider_unavailable",
      code: "PROVIDER_UNAVAILABLE",
      message: modeResolution.message ?? "Provider indisponible.",
      mode: "unavailable",
      retryable: false,
    };
  }

  const history = (input.history ?? [])
    .filter(
      (m) =>
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim().length > 0,
    )
    .slice(-MAX_HISTORY_MESSAGES);

  const messages: ProviderChatMessage[] = [
    {
      role: "system",
      content: buildProjectSystemPrompt(project, {
        truthCContext: input.truthCContext,
        methodContext: input.methodContext ?? null,
        studioCognitiveContext: input.studioCognitiveContext ?? null,
      }),
    },
    ...history.map((m) => ({ role: m.role, content: m.content.trim() })),
    { role: "user", content },
  ];

  const sink = new ProjectAssistantMemoryEventSink();
  const workspaceRoot = resolveWorkspaceRootFromAppCwd();
  const provider = input.provider ?? resolveConversationProvider();
  const presentation = modeResolution.presentation;

  try {
    const turn = await runNoraCognitiveTurn({
      correlationId: `f1:${project.projectId}`,
      projectId: project.projectId,
      messages,
      provider,
      enableTools: true,
      sink,
      workspaceRoot,
      sessionDbPath: input.sessionDbPath,
      simulateMemoryBUnavailable: input.simulateMemoryBUnavailable,
      truthCRevision: {
        lpsId: project.lpsId,
        lpsVersion: project.lpsVersion,
      },
      turnWorkloadContext: {
        projectCriticality: project.criticality,
        userContentLength: content.length,
        historyMessageCount: history.length,
        historyTotalChars: history.reduce((sum, m) => sum + m.content.length, 0),
        enableTools: true,
      },
      trustedSfiaProfile: null,
      semanticCognitiveWorkload: input.semanticCognitiveWorkload ?? null,
      contradictionAssessment: input.contradictionAssessment ?? null,
      resolveRememberedEvidence,
      postEvidenceNarrativePolicy: input.postEvidenceNarrativePolicy === true,
      evalModelReasoningControl: input.evalModelReasoningControl,
      usdAccounting: input.usdAccounting,
      campaignBudget: input.campaignBudget,
      outputType: NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE,
    });

    let assistantText = turn.text;
    let lifecycleRecommendationMaterialized: boolean | null = null;
    let lifecycleRecommendationCode: string | null = null;

    // Same Product turn — optional LR materialization (no second model call).
    if (turn.structuredOutput !== undefined) {
      const { extractLifecycleCandidateFromStructuredOutput } = await import(
        "@/lib/oa/cycle/application/lifecycleRecommendation/materializeFromProductTurn"
      );
      const extracted = extractLifecycleCandidateFromStructuredOutput(
        turn.structuredOutput,
      );
      if (extracted.narrative) {
        assistantText = extracted.narrative;
      }
      if (!extracted.candidate) {
        lifecycleRecommendationMaterialized = false;
      } else {
        const { getRuntimeApplicationService } = await import(
          "@/lib/vertical-slice-runtime"
        );
        const runtime = getRuntimeApplicationService();
        if (runtime.oa) {
          const oa = runtime.oa;
          const cycles = await oa.cycleServices.cycles.listByProject(
            project.projectId,
          );
          const lps =
            await oa.projectServices.getCurrentLivingProjectState.execute({
              projectId: project.projectId,
            });
          const projectRow = await oa.projectServices.getProject.execute({
            projectId: project.projectId,
          });
          const failedMaterialDimensions =
            new Set<LifecycleRecommendationMaterialDimension>();
          if (!lps.ok) {
            failedMaterialDimensions.add("lps");
          }
          if (!projectRow.ok) {
            failedMaterialDimensions.add("doctrine");
          }

          let trajectory = null;
          try {
            const traj = await oa.cycleServices.getCurrentTrajectory.execute({
              projectId: project.projectId,
            });
            trajectory = traj.ok ? traj.trajectory : null;
          } catch {
            failedMaterialDimensions.add("trajectory");
            trajectory = null;
          }

          let decisions: Awaited<
            ReturnType<typeof oa.decisionServices.decisions.listByProject>
          > = [];
          try {
            decisions = await oa.decisionServices.decisions.listByProject(
              project.projectId,
            );
          } catch {
            failedMaterialDimensions.add("decisions");
            decisions = [];
          }

          let evidence: Awaited<
            ReturnType<
              typeof oa.evidenceReviewServices.repository.listByProject
            >
          > = [];
          try {
            evidence =
              await oa.evidenceReviewServices.repository.listByProject(
                project.projectId,
              );
          } catch {
            failedMaterialDimensions.add("evidence");
            evidence = [];
          }

          let epistemicItems: Awaited<
            ReturnType<typeof oa.cycleServices.epistemic.listByProject>
          > = [];
          try {
            epistemicItems = await oa.cycleServices.epistemic.listByProject(
              project.projectId,
            );
          } catch {
            failedMaterialDimensions.add("epistemic_blockers");
            epistemicItems = [];
          }

          const doctrinePin = projectRow.ok
            ? (projectRow.project.doctrinePackageRef ??
              (lps.ok ? lps.livingProjectState.doctrinePackageRef : undefined))
            : undefined;
          const producedAt = new Date().toISOString();
          const mat =
            await materializeLifecycleRecommendationFromStructuredOutput({
              projectId: project.projectId,
              structuredOutput: turn.structuredOutput,
              updateEpistemicState: oa.cycleServices.updateEpistemicState,
              facts: {
                cycles,
                lpsActiveCycleInstanceId: lps.ok
                  ? lps.livingProjectState.activeCycleInstanceId
                  : null,
                lpsVersion: lps.ok ? lps.livingProjectState.version : null,
                doctrinePackageId: doctrinePin?.doctrinePackageId ?? null,
                doctrinePackageVersion: doctrinePin?.version ?? null,
                doctrinePackageDigest: doctrinePin?.digest ?? null,
                trajectory,
                decisions,
                evidence,
                epistemicItems,
                failedMaterialDimensions,
              },
              producedAt,
              createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
              correlationId: `f1:${project.projectId}`,
            });
          if (mat.narrative) {
            assistantText = mat.narrative;
          }
          if (mat.recommendationAttempted) {
            lifecycleRecommendationMaterialized =
              mat.materialization?.ok === true;
            lifecycleRecommendationCode =
              mat.materialization && !mat.materialization.ok
                ? mat.materialization.code
                : mat.materialization?.ok
                  ? null
                  : "LR_MATERIALIZE_UNKNOWN";
          } else {
            lifecycleRecommendationMaterialized = false;
          }
        }
      }
    }

    const { toolEvents, sources, readCoverage } = collectToolTelemetry(
      sink.events,
    );
    // Persist read coverage for cross-turn honesty (existing session_items).
    if (readCoverage.facts.length > 0 && !input.simulateMemoryBUnavailable) {
      try {
        const dbPath = resolveNoraSessionSqlitePath(input.sessionDbPath);
        const session = new ProductSqliteSession({
          projectId: project.projectId,
          dbPath,
          sessionKey: "f1-default",
        });
        try {
          await rememberReadCoverage(
            session,
            project.projectId,
            readCoverage.facts.map((f) => ({
              pathOrRef: f.pathOrRef,
              coverage: f.coverage,
            })),
          );
        } finally {
          session.close();
        }
      } catch {
        /* Session path may be unavailable — coverage still on DTO via mw4. */
      }
    }

    const coverageAggregate = aggregateReadCoverage(readCoverage.facts);
    const mw3 = toMw3Surface(turn);
    let mw4 = toMw4Surface(turn);
    if (coverageAggregate.facts.length > 0) {
      mw4 = {
        rememberedIds: mw4?.rememberedIds ?? [],
        validIds: mw4?.validIds ?? [],
        downgradedIds: mw4?.downgradedIds ?? [],
        missingIds: mw4?.missingIds ?? [],
        disclosure: mw4?.disclosure ?? "",
        readCoverageOverall:
          coverageAggregate.overall === "mixed_partial"
            ? "partial"
            : coverageAggregate.overall === "none"
              ? "none"
              : coverageAggregate.overall,
        readCoverageDisclosure:
          turn.mw4Grounding?.readCoverageDisclosure ??
          (coverageAggregate.facts.length > 0
            ? `Overall coverage: ${coverageAggregate.overall}`
            : null),
      };
    }
    const stopNotice = formatCognitiveStopPiloteNotice(
      turn.cognitiveStopDecision ?? {
        progression: "continue",
        outcome: "PROGRESS_OK",
        cognitiveStop: false,
        anatomy: null,
        surfacedDisposition: "none",
        allowsSilentSuccess: false,
      },
    );
    const status =
      turn.cognitiveStopDecision?.cognitiveStop === true
        ? ("cognitive_stop" as const)
        : ("ok" as const);

    return {
      ok: true,
      status,
      text: assistantText,
      mode: modeResolution.mode,
      presentation,
      model: turn.usage?.model ?? null,
      toolRounds: turn.toolRounds,
      toolCalls: turn.toolCalls,
      sources,
      toolEvents,
      project,
      ephemeralNotice: buildEphemeralNotice(
        turn.memoryBAvailability,
        turn.memoryBCompactionState,
        turn.memoryBCompactionDetails?.stalePriorInvalidated === true,
        stopNotice,
      ),
      cognitiveRuntime: turn.cognitiveRuntime,
      sessionId: turn.sessionId,
      memoryBAvailability: turn.memoryBAvailability,
      memoryBCompactionState: turn.memoryBCompactionState,
      stalePriorInvalidated:
        turn.memoryBCompactionDetails?.stalePriorInvalidated === true,
      mw3,
      mw4,
      lifecycleRecommendationMaterialized,
      lifecycleRecommendationCode,
    };
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Erreur provider inattendue.";
    return {
      ok: false,
      status: "provider_error",
      code: "PROVIDER_ERROR",
      message:
        message === "FAKE_PROVIDER_ERROR"
          ? "Le fournisseur de démonstration a signalé une erreur. Réessayez manuellement."
          : message,
      mode: modeResolution.mode,
      retryable: true,
    };
  }
}

```

### FULL FILE: `projects/sfia-studio/app/features/project-assistant/actions.ts`
- sha256: 4a5cfcff2437341c3549376368e5a2579ff8770bb1cc9fc89cf9e80f612da9fa
- bytes: 40917

```typescript
"use server";

import { getRuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import { loadProjectRuntimeForAssistant } from "@/features/vertical-slice-ui/ProjectWorkspaceView";
import { orchestrateAssistantSend } from "./f2/orchestrateF2";
import { recordF2Decision } from "./f2/recordDecision";
import {
  executePilotLifecycleAction,
  type PilotLifecycleActionKind,
} from "./f2/pilotLifecycleActions";
import {
  projectPilotLifecycle,
  type PilotLifecycleProjection,
  selectCurrentLifecycleRecommendations,
  isPausedStatus,
  assessResumeReconciliation,
  deriveLifecycleBlockersFromEpistemicItems,
} from "@/lib/oa/cycle";
import type { LifecycleRecommendationMaterialDimension } from "@/lib/oa/cycle/application/lifecycleRecommendation/materialReaderContract";
import { F2_PROCESS_LOCAL_NOTICE } from "./f2/proposalStore";
import type { F2DecisionKind } from "./f2/types";
import { confirmAndExecuteF3Fixture } from "./f3/confirmAndExecuteF3Fixture";
import { confirmAndExecuteResolvedM3 } from "./f3/confirmAndExecuteResolvedM3";
import { prepareF3Fixture } from "./f3/prepareF3Fixture";
import { prepareM3FromDecision } from "./f3/prepareM3FromDecision";
import { prepareAndResolveM3ProductPath } from "./f3/prepareAndResolveM3ProductPath";
import { rehydrateEvidenceOutcomeFromLps } from "./f3/rehydrateEvidenceOutcomeFromLps";
import { resolveF3EphemeralNotice } from "./f3/constants";
import {
  executionSemanticUserLabel,
  resolvePersistenceNotice,
} from "./presentationLabels";
import {
  runMw6GovernedNoraProductTurn,
  type RunMw6GovernedNoraProductTurnInput,
} from "./mw6GovernedNoraTurn";
import type {
  AssistantHistoryMessage,
  ProjectAssistantContextDto,
  ProjectAssistantDecideResult,
  ProjectAssistantExecuteF3Result,
  ProjectAssistantPrepareF3Result,
  ProjectAssistantPrepareM3Result,
  ProjectAssistantPrepareResolvedM3Result,
  ProjectAssistantRehydrateEvidenceOutcomeResult,
  ProjectAssistantSendResult,
} from "./types";

/**
 * Thin server action — Project Workspace Assistant (F1 + F2 + F3 fixture).
 * No OPS1 session. No Cursor REAL. No Git write.
 * Persistence durability follows RuntimeOaStack.productDurablePath (Product SQLite vs Memory).
 */
export async function projectAssistantSendAction(input: {
  projectId: string;
  content: string;
  history?: AssistantHistoryMessage[];
  /**
   * Untrusted ExecutionContract id reference for MW6 governed external discovery.
   * When present, server composes governedAuthority from Auth + OA and invokes
   * the real Nora product path. CONTENT/AUTHORITY of the contract are never
   * trusted from the client — only the id reference.
   */
  executionContractId?: string;
  /**
   * Optional untrusted evidence hint — verified only by server composition.
   */
  authorityEvidenceId?: unknown;
  /** Hostile — ignored (server builds governedAuthority). */
  governedAuthority?: unknown;
  /** Hostile — ignored (Auth resolver owns actor). */
  actorId?: unknown;
  getExecutionContract?: unknown;
  checkExecutionAuthorization?: unknown;
  authorityResolver?: unknown;
  authorizedContract?: unknown;
  currentExternalDiscoveryIntent?: unknown;
  canActAsMorris?: unknown;
  claimedAuthorityLevel?: unknown;
  /**
   * TEST-ONLY Auth session → Pilote seam. Production omits this and uses
   * resolveCurrentAuthenticatedPilote. AUTH REAL boundary carried forward.
   */
  resolveAuthenticatedPilote?: RunMw6GovernedNoraProductTurnInput["resolveAuthenticatedPilote"];
  provider?: import("@/lib/platform/ai").ConversationProvider;
  sessionDbPath?: string;
}): Promise<ProjectAssistantSendResult> {
  const executionContractId =
    typeof input.executionContractId === "string"
      ? input.executionContractId.trim()
      : "";
  if (executionContractId.length > 0) {
    return runMw6GovernedNoraProductTurn({
      projectId: input.projectId,
      content: input.content,
      history: input.history,
      executionContractId,
      claimedAuthorityEvidenceId: input.authorityEvidenceId,
      resolveAuthenticatedPilote: input.resolveAuthenticatedPilote,
      provider: input.provider,
      sessionDbPath: input.sessionDbPath,
      governedAuthority: input.governedAuthority,
      actorId: input.actorId,
      authorityEvidenceId: input.authorityEvidenceId,
      getExecutionContract: input.getExecutionContract,
      checkExecutionAuthorization: input.checkExecutionAuthorization,
      authorityResolver: input.authorityResolver,
      authorizedContract: input.authorizedContract,
      currentExternalDiscoveryIntent: input.currentExternalDiscoveryIntent,
      canActAsMorris: input.canActAsMorris,
      claimedAuthorityLevel: input.claimedAuthorityLevel,
    });
  }
  return orchestrateAssistantSend({
    projectId: input.projectId,
    content: input.content,
    history: input.history,
    provider: input.provider,
    sessionDbPath: input.sessionDbPath,
  });
}

function toContextDto(
  result: Extract<
    Awaited<ReturnType<typeof loadProjectRuntimeForAssistant>>,
    { ok: true }
  >,
): ProjectAssistantContextDto {
  return {
    projectId: result.project.projectId,
    name: result.project.name,
    shortReference: result.project.shortReference ?? null,
    objective: result.project.objective,
    contextSummary: result.project.contextSummary,
    criticality: result.project.criticality,
    constraints: [...result.project.constraints],
    lpsId: result.livingState.id,
    lpsVersion: result.livingState.version,
    lpsCreatedAt: result.livingState.createdAt,
    doctrineId: result.doctrine.id,
    doctrineVersion: result.doctrine.version,
    doctrineDigest: result.doctrine.digest,
    doctrineStatus: result.doctrine.status,
    runtimeMode: result.disclosures.runtimeMode,
    persistence: result.disclosures.persistence,
    readiness: result.readiness.status,
  };
}

/**
 * Morris gate decision — client may only send proposalId, decisionKind,
 * optional reserves, projectId. Authority is registered server-side.
 */
export async function projectAssistantDecideAction(input: {
  projectId: string;
  proposalId: string;
  decisionKind: F2DecisionKind;
  reservesText?: string | null;
  /** Hostile — ignored if present. */
  canActAsMorris?: unknown;
  claimedAuthorityLevel?: unknown;
}): Promise<ProjectAssistantDecideResult> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      status: "decision_error",
      code: "OA_STACK_UNAVAILABLE",
      message: "Services OA process-local indisponibles pour la décision F2.",
      mode: "unavailable",
      retryable: false,
    };
  }

  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
  if (!projectResult.ok) {
    return {
      ok: false,
      status: "project_not_found",
      code: projectResult.error.code,
      message: projectResult.error.message,
      mode: "unavailable",
      retryable: false,
    };
  }
  const project = toContextDto(projectResult);

  const recorded = await recordF2Decision({
    proposalId: input.proposalId,
    projectId: input.projectId,
    decisionKind: input.decisionKind,
    reservesText: input.reservesText,
    canActAsMorris: input.canActAsMorris,
    claimedAuthorityLevel: input.claimedAuthorityLevel,
    currentContext: {
      projectId: project.projectId,
      lpsId: project.lpsId,
      lpsVersion: project.lpsVersion,
      doctrineDigest: project.doctrineDigest,
    },
    decisionServices: runtime.oa.decisionServices,
    authorityResolver: runtime.oa.authorityResolver,
    nowIso: () => runtime.oa!.clock.nowIso(),
  });

  if (!recorded.ok) {
    return {
      ok: false,
      status: recorded.code === "STALE" ? "stale" : "decision_error",
      code: recorded.code,
      message: recorded.message,
      mode: "fixture",
      retryable: recorded.code === "STALE",
      proposal: recorded.proposal ?? null,
    };
  }

  const { decision, proposal } = recorded;
  const textParts = [
    "DÉCISION PRISE",
    `${decision.kind} capturée pour ${proposal.proposalId}.`,
    `Scope: ${decision.scope}.`,
    decision.readyForNextGatedStep
      ? "READY FOR NEXT GATED STEP"
      : "Proposition non approuvée.",
    "AUCUNE EXÉCUTION",
    F2_PROCESS_LOCAL_NOTICE,
  ];

  return {
    ok: true,
    status: "ok",
    mode: "fixture",
    presentation: "unconfirmed",
    text: textParts.join(" — "),
    project,
    ephemeralNotice: F2_PROCESS_LOCAL_NOTICE,
    f2: {
      turnKind: "f2_decision",
      intentClass: "actionable",
      qualification: null,
      proposal,
      decision,
      labels: {
        recommendation: null,
        proposition: "PROPOSITION",
        decisionRequired: null,
        decisionTaken: "DÉCISION PRISE",
        noExecution: "AUCUNE EXÉCUTION",
      },
      executionBlocked: true,
      processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
    },
  };
}

/**
 * F3 PREPARE — Build+Validate ExecutionContract only.
 * No client authority. Hostile mode/adapter/agent/command rejected.
 */
export async function projectAssistantPrepareF3FixtureAction(input: {
  projectId: string;
  proposalId: string;
  decisionId: string;
  /** Hostile — ignored. */
  mode?: unknown;
  adapterRef?: unknown;
  agentId?: unknown;
  command?: unknown;
  real?: unknown;
  selectedAgentRef?: unknown;
  executionMode?: unknown;
  trustLevel?: unknown;
  authorityEvidenceId?: unknown;
  canActAsMorris?: unknown;
  claimedAuthorityLevel?: unknown;
}): Promise<ProjectAssistantPrepareF3Result> {
  void input.mode;
  void input.adapterRef;
  void input.agentId;
  void input.command;
  void input.real;
  void input.selectedAgentRef;
  void input.executionMode;
  void input.trustLevel;
  void input.authorityEvidenceId;
  void input.canActAsMorris;
  void input.claimedAuthorityLevel;

  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      status: "prepare_error",
      code: "OA_STACK_UNAVAILABLE",
      message: "Services OA process-local indisponibles pour F3 PREPARE.",
      mode: "unavailable",
      retryable: false,
    };
  }

  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
  if (!projectResult.ok) {
    return {
      ok: false,
      status: "project_not_found",
      code: projectResult.error.code,
      message: projectResult.error.message,
      mode: "unavailable",
      retryable: false,
    };
  }
  const project = toContextDto(projectResult);

  const prepared = await prepareF3Fixture({
    projectId: input.projectId,
    proposalId: input.proposalId,
    decisionId: input.decisionId,
    mode: input.mode,
    adapterRef: input.adapterRef,
    agentId: input.agentId,
    command: input.command,
    currentContext: {
      projectId: project.projectId,
      lpsId: project.lpsId,
      lpsVersion: project.lpsVersion,
      doctrineDigest: project.doctrineDigest,
    },
    deps: {
      decisionServices: runtime.oa.decisionServices,
      authorityResolver: runtime.oa.authorityResolver,
      executionContractServices: runtime.oa.executionContractServices,
      nowIso: () => runtime.oa!.clock.nowIso(),
      productDurablePath: runtime.oa.productDurablePath,
    },
  });

  if (!prepared.ok) {
    return {
      ok: false,
      status: prepared.code === "STALE" ? "stale" : "prepare_error",
      code: prepared.code,
      message: prepared.message,
      mode: "fixture",
      retryable: prepared.code === "STALE",
      proposal: (prepared.proposal as ProjectAssistantPrepareF3FailureProposal) ?? null,
    };
  }

  const f3 = prepared.payload;
  const persistenceNotice = resolveF3EphemeralNotice(
    runtime.oa.productDurablePath,
  );
  return {
    ok: true,
    status: "ok",
    mode: "fixture",
    presentation: "unconfirmed",
    text: [
      "F3 PREPARE",
      `Contrat ${f3.contract.executionContractId} v${f3.contract.version} (${f3.contract.status})`,
      "AUCUNE EXÉCUTION",
      "FIXTURE — AUCUNE EXÉCUTION RÉELLE",
      persistenceNotice,
    ].join(" — "),
    project,
    ephemeralNotice: persistenceNotice,
    f2: null,
    f3,
  };
}

/**
 * F3 M3 PREPARE — from durable decisionId (no ProposalStore).
 * Exact contract from DecisionBasis. Cursor PREPARE-only. No Attempt.
 */
export async function projectAssistantPrepareM3Action(input: {
  projectId: string;
  decisionId: string;
  /** Hostile — ignored. */
  mode?: unknown;
  adapterRef?: unknown;
  agentId?: unknown;
  command?: unknown;
  real?: unknown;
  selectedAgentRef?: unknown;
  canActAsMorris?: unknown;
  claimedAuthorityLevel?: unknown;
}): Promise<ProjectAssistantPrepareM3Result> {
  void input.mode;
  void input.adapterRef;
  void input.agentId;
  void input.command;
  void input.real;
  void input.selectedAgentRef;
  void input.canActAsMorris;
  void input.claimedAuthorityLevel;

  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      status: "prepare_error",
      code: "OA_STACK_UNAVAILABLE",
      message: "Services OA indisponibles pour M3 PREPARE.",
      mode: "unavailable",
      retryable: false,
    };
  }

  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
  if (!projectResult.ok) {
    return {
      ok: false,
      status: "project_not_found",
      code: projectResult.error.code,
      message: projectResult.error.message,
      mode: "unavailable",
      retryable: false,
    };
  }
  const project = toContextDto(projectResult);

  const prepared = await prepareM3FromDecision({
    projectId: input.projectId,
    decisionId: input.decisionId,
    currentContext: {
      projectId: project.projectId,
      lpsId: project.lpsId,
      lpsVersion: project.lpsVersion,
      doctrineDigest: project.doctrineDigest,
      activeCycleInstanceId: project.activeCycleInstanceId,
      ckcResolutionRef: project.ckcResolutionRef,
    },
    deps: {
      decisionServices: runtime.oa.decisionServices,
      authorityResolver: runtime.oa.authorityResolver,
      executionContractServices: runtime.oa.executionContractServices,
      nowIso: () => runtime.oa!.clock.nowIso(),
    },
  });

  if (!prepared.ok) {
    return {
      ok: false,
      status: prepared.code === "CONTEXT_STALE" ? "stale" : "prepare_error",
      code: prepared.code,
      message: prepared.message,
      mode: "fixture",
      retryable: prepared.code === "CONTEXT_STALE",
    };
  }

  const f3 = prepared.payload;
  return {
    ok: true,
    status: "ok",
    mode: "m3_prepare",
    presentation: "unconfirmed",
    text: [
      "M3 PREPARE",
      `Contrat ${f3.contract.executionContractId} v${f3.contract.version} (${f3.contract.status})`,
      `Fingerprint ${f3.contract.semanticFingerprint.slice(0, 12)}…`,
      "AUCUNE EXÉCUTION",
      "CURSOR PREPARE-ONLY",
      "NO GATE D",
    ].join(" — "),
    project,
    ephemeralNotice:
      "M3 PREPARE durable — Decision + ExecutionContract Product SQLite. Cursor REAL bloqué.",
    f3,
  };
}

/**
 * Canonical post-GO product path:
 * prepareM3FromDecision → resolveM3ExecutionContract (fixture-safe ZERO REAL).
 * Returns the resolved successor for explicit Confirmation. No StartExecution.
 */
export async function projectAssistantPrepareResolvedM3Action(input: {
  projectId: string;
  decisionId: string;
  /** Hostile — ignored. */
  mode?: unknown;
  adapterRef?: unknown;
  agentId?: unknown;
  command?: unknown;
  real?: unknown;
  selectedAgentRef?: unknown;
  canActAsMorris?: unknown;
  claimedAuthorityLevel?: unknown;
}): Promise<ProjectAssistantPrepareResolvedM3Result> {
  void input.mode;
  void input.adapterRef;
  void input.agentId;
  void input.command;
  void input.real;
  void input.selectedAgentRef;
  void input.canActAsMorris;
  void input.claimedAuthorityLevel;

  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      status: "prepare_error",
      code: "OA_STACK_UNAVAILABLE",
      message: "Services OA indisponibles pour M3 PREPARE+RESOLVE.",
      mode: "unavailable",
      retryable: false,
    };
  }

  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
  if (!projectResult.ok) {
    return {
      ok: false,
      status: "project_not_found",
      code: projectResult.error.code,
      message: projectResult.error.message,
      mode: "unavailable",
      retryable: false,
    };
  }
  const project = toContextDto(projectResult);

  const prepared = await prepareAndResolveM3ProductPath({
    projectId: input.projectId,
    decisionId: input.decisionId,
    currentContext: {
      projectId: project.projectId,
      lpsId: project.lpsId,
      lpsVersion: project.lpsVersion,
      doctrineDigest: project.doctrineDigest,
      activeCycleInstanceId: project.activeCycleInstanceId,
      ckcResolutionRef: project.ckcResolutionRef,
    },
    deps: {
      decisionServices: runtime.oa.decisionServices,
      authorityResolver: runtime.oa.authorityResolver,
      executionContractServices: runtime.oa.executionContractServices,
      nowIso: () => runtime.oa!.clock.nowIso(),
    },
  });

  if (!prepared.ok) {
    return {
      ok: false,
      status: prepared.code === "CONTEXT_STALE" ? "stale" : "prepare_error",
      code: prepared.code,
      message: prepared.message,
      mode: "fixture",
      retryable: prepared.code === "CONTEXT_STALE",
    };
  }

  const f3 = prepared.payload;
  return {
    ok: true,
    status: "ok",
    mode: "m3_resolved_fixture",
    presentation: "unconfirmed",
    text: [
      "Contrat d'exécution prêt à confirmer",
      `Successeur ${f3.successor.executionContractId} v${f3.successor.version} (${f3.successor.status})`,
      `Action ${f3.successor.action} · cible ${f3.successor.target}`,
      "Confirmation process-local requise — aucune tentative démarrée",
      "AUCUNE EXÉCUTION RÉELLE",
    ].join(" — "),
    project,
    ephemeralNotice:
      "Contrat durable résolu (HumanDecision + DecisionBasis). Confirmation process-local. Cursor REAL bloqué.",
    f3,
  };
}

type ProjectAssistantPrepareF3FailureProposal =
  import("./f2/types").ProposalDto | null;

/**
 * F3 confirm + fixture execute + evidence reinjection.
 * No client authority. Hostile REAL/adapter/agent/command rejected.
 */
export async function projectAssistantConfirmAndExecuteF3FixtureAction(input: {
  projectId: string;
  proposalId: string;
  decisionId: string;
  executionContractId: string;
  expectedContractVersion: number;
  /** Hostile — ignored. */
  mode?: unknown;
  adapterRef?: unknown;
  agentId?: unknown;
  command?: unknown;
  real?: unknown;
  selectedAgentRef?: unknown;
  executionMode?: unknown;
  trustLevel?: unknown;
  authorityEvidenceId?: unknown;
  canActAsMorris?: unknown;
  claimedAuthorityLevel?: unknown;
}): Promise<ProjectAssistantExecuteF3Result> {
  void input.mode;
  void input.adapterRef;
  void input.agentId;
  void input.command;
  void input.real;
  void input.selectedAgentRef;
  void input.executionMode;
  void input.trustLevel;
  void input.authorityEvidenceId;
  void input.canActAsMorris;
  void input.claimedAuthorityLevel;

  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      status: "execute_error",
      code: "OA_STACK_UNAVAILABLE",
      message: "Services OA process-local indisponibles pour F3 EXECUTE.",
      mode: "unavailable",
      retryable: false,
    };
  }

  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
  if (!projectResult.ok) {
    return {
      ok: false,
      status: "project_not_found",
      code: projectResult.error.code,
      message: projectResult.error.message,
      mode: "unavailable",
      retryable: false,
    };
  }
  const project = toContextDto(projectResult);

  const executed = await confirmAndExecuteF3Fixture({
    projectId: input.projectId,
    proposalId: input.proposalId,
    decisionId: input.decisionId,
    executionContractId: input.executionContractId,
    expectedContractVersion: input.expectedContractVersion,
    mode: input.mode,
    adapterRef: input.adapterRef,
    agentId: input.agentId,
    command: input.command,
    real: input.real,
    currentContext: {
      projectId: project.projectId,
      lpsId: project.lpsId,
      lpsVersion: project.lpsVersion,
      doctrineDigest: project.doctrineDigest,
    },
    deps: {
      decisionServices: runtime.oa.decisionServices,
      authorityResolver: runtime.oa.authorityResolver,
      executionContractServices: runtime.oa.executionContractServices,
      executionAttemptServices: runtime.oa.executionAttemptServices,
      evidenceReviewServices: runtime.oa.evidenceReviewServices,
      fixtureAdapter: runtime.oa.fixtureAdapter,
      projectServices: runtime.oa.projectServices,
      productDurablePath: runtime.oa.productDurablePath,
      nowIso: () => runtime.oa!.clock.nowIso(),
    },
  });

  if (!executed.ok) {
    return {
      ok: false,
      status: executed.code === "STALE" ? "stale" : "execute_error",
      code: executed.code,
      message: executed.message,
      mode: "fixture",
      retryable: executed.code === "STALE",
      proposal: (executed.proposal as ProjectAssistantPrepareF3FailureProposal) ?? null,
    };
  }

  const f3 = executed.payload;
  const persistenceNotice = resolveF3EphemeralNotice(
    runtime.oa.productDurablePath,
  );
  return {
    ok: true,
    status: "ok",
    mode: "fixture",
    presentation: "unconfirmed",
    text: [
      f3.reusedExistingAttempt
        ? "F3 FIXTURE DÉJÀ EXÉCUTÉE (idempotent)"
        : "F3 FIXTURE EXÉCUTÉE",
      `Attempt ${f3.attempt.attemptId} · ${f3.attempt.status}`,
      `Evidence ${f3.evidence.evidenceId} · non verified`,
      `ReviewBundle ${f3.reviewBundle.reviewBundleId}`,
      "RECOMMANDATION — PAS UNE DÉCISION HUMAINE",
      "FIXTURE — AUCUNE EXÉCUTION RÉELLE",
      "CURSOR REAL BLOQUÉ",
      persistenceNotice,
    ].join(" — "),
    project,
    ephemeralNotice: persistenceNotice,
    f3,
  };
}

/**
 * Canonical post-GO confirm + fixture-safe execute on resolved M3 successor.
 * No Proposal validation. Confirmation is process-local (not persisted as authority).
 */
export async function projectAssistantConfirmAndExecuteResolvedM3Action(input: {
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
  selectedAgentRef?: unknown;
  executionMode?: unknown;
  trustLevel?: unknown;
  authorityEvidenceId?: unknown;
  canActAsMorris?: unknown;
  claimedAuthorityLevel?: unknown;
}): Promise<ProjectAssistantExecuteF3Result> {
  void input.mode;
  void input.adapterRef;
  void input.agentId;
  void input.command;
  void input.real;
  void input.selectedAgentRef;
  void input.executionMode;
  void input.trustLevel;
  void input.authorityEvidenceId;
  void input.canActAsMorris;
  void input.claimedAuthorityLevel;

  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      status: "execute_error",
      code: "OA_STACK_UNAVAILABLE",
      message: "Services OA indisponibles pour M3 EXECUTE.",
      mode: "unavailable",
      retryable: false,
    };
  }

  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
  if (!projectResult.ok) {
    return {
      ok: false,
      status: "project_not_found",
      code: projectResult.error.code,
      message: projectResult.error.message,
      mode: "unavailable",
      retryable: false,
    };
  }
  const project = toContextDto(projectResult);

  const executed = await confirmAndExecuteResolvedM3({
    projectId: input.projectId,
    decisionId: input.decisionId,
    executionContractId: input.executionContractId,
    expectedContractVersion: input.expectedContractVersion,
    mode: input.mode,
    adapterRef: input.adapterRef,
    agentId: input.agentId,
    command: input.command,
    real: input.real,
    deps: {
      decisionServices: runtime.oa.decisionServices,
      authorityResolver: runtime.oa.authorityResolver,
      executionContractServices: runtime.oa.executionContractServices,
      executionAttemptServices: runtime.oa.executionAttemptServices,
      evidenceReviewServices: runtime.oa.evidenceReviewServices,
      fixtureAdapter: runtime.oa.fixtureAdapter,
      projectServices: runtime.oa.projectServices,
      productDurablePath: runtime.oa.productDurablePath,
      nowIso: () => runtime.oa!.clock.nowIso(),
    },
  });

  if (!executed.ok) {
    return {
      ok: false,
      status: "execute_error",
      code: executed.code,
      message: executed.message,
      mode: "fixture",
      retryable: false,
    };
  }

  const f3 = executed.payload;
  const persistenceNotice = resolvePersistenceNotice({
    productDurablePath: runtime.oa.productDurablePath,
    mode: f3.mode,
    kind: "execute",
  });
  const semantic = executionSemanticUserLabel({
    mode: f3.mode,
    payloadMode: f3.mode,
    executionMode: f3.attempt.executionMode,
    adapterId: f3.attempt.adapterId,
    adapterRef: f3.attempt.adapterRef,
    realProcessInvoked: f3.attempt.realProcessInvoked,
    realExecution: f3.realExecution,
    processRef: f3.attempt.processRef,
    evidenceId: f3.evidence.evidenceId,
  });
  const isCursorReal = f3.mode === "CURSOR_CLI_REAL";
  return {
    ok: true,
    status: "ok",
    mode: "fixture",
    presentation: "unconfirmed",
    text: [
      isCursorReal
        ? f3.reusedExistingAttempt
          ? "M3 EXÉCUTION CURSOR — MÊME TENTATIVE"
          : "M3 EXÉCUTION CURSOR ENREGISTRÉE"
        : f3.reusedExistingAttempt
          ? "M3 FIXTURE DÉJÀ EXÉCUTÉE (idempotent)"
          : "M3 FIXTURE EXÉCUTÉE",
      `Attempt ${f3.attempt.attemptId} · ${f3.attempt.status}`,
      `Evidence ${f3.evidence.evidenceId} · non verified`,
      `ReviewBundle ${f3.reviewBundle.reviewBundleId}`,
      "RECOMMANDATION — PAS UNE DÉCISION HUMAINE",
      semantic,
      isCursorReal ? null : "FIXTURE — AUCUNE EXÉCUTION RÉELLE",
      isCursorReal ? null : "CURSOR REAL BLOQUÉ",
      persistenceNotice,
    ]
      .filter((part): part is string => Boolean(part))
      .join(" — "),
    project,
    ephemeralNotice: persistenceNotice,
    f3,
  };
}

/**
 * M5 durable Nora/F3 readback — LPS evidence/RB refs → RecommendNextGate.
 * Strictly read-only: no Decision, no gate consume, no Attempt launch.
 */
export async function projectAssistantRehydrateEvidenceOutcomeAction(input: {
  projectId: string;
}): Promise<ProjectAssistantRehydrateEvidenceOutcomeResult> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      status: "rehydrate_error",
      code: "OA_STACK_UNAVAILABLE",
      message: "Services OA process-local indisponibles pour rehydrate F3.",
      mode: "unavailable",
      retryable: false,
    };
  }

  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
  if (!projectResult.ok) {
    return {
      ok: false,
      status: "project_not_found",
      code: projectResult.error.code,
      message: projectResult.error.message,
      mode: "unavailable",
      retryable: false,
    };
  }
  const project = toContextDto(projectResult);

  const rehydrated = await rehydrateEvidenceOutcomeFromLps({
    projectId: input.projectId,
    deps: {
      projectServices: runtime.oa.projectServices,
      evidenceReviewServices: runtime.oa.evidenceReviewServices,
    },
  });

  if (!rehydrated.ok) {
    return {
      ok: false,
      status: "rehydrate_error",
      code: rehydrated.code,
      message: rehydrated.message,
      mode: "fixture",
      retryable: false,
      project,
    };
  }

  const persistenceNotice = resolvePersistenceNotice({
    productDurablePath: runtime.oa.productDurablePath,
    mode: rehydrated.recommendation.mode,
    kind: "rehydrate",
  });
  return {
    ok: true,
    status: "ok",
    mode: "fixture",
    presentation: "unconfirmed",
    text: [
      "REHYDRATE EVIDENCE OUTCOME",
      `LPS v${rehydrated.lpsVersion}`,
      `Evidence ${rehydrated.evidenceIds.join(", ") || "—"}`,
      `ReviewBundle ${rehydrated.reviewBundleIds.join(", ") || "—"}`,
      "RECOMMANDATION — PAS UNE DÉCISION HUMAINE",
      persistenceNotice,
    ].join(" — "),
    project,
    ephemeralNotice: persistenceNotice,
    evidence: rehydrated.evidence,
    reviewBundles: rehydrated.reviewBundles,
    recommendation: rehydrated.recommendation,
    lpsVersion: rehydrated.lpsVersion,
    evidenceIds: rehydrated.evidenceIds,
    reviewBundleIds: rehydrated.reviewBundleIds,
  };
}


async function buildAssistantPilotLifecycleProjection(
  projectId: string,
): Promise<PilotLifecycleProjection | null> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) return null;
  const cycles = await runtime.oa.cycleServices.cycles.listByProject(projectId);
  const lps =
    await runtime.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
  const lpsActive = lps.ok
    ? lps.livingProjectState.activeCycleInstanceId
    : null;
  let epistemicItems: Awaited<
    ReturnType<typeof runtime.oa.cycleServices.epistemic.listByProject>
  > = [];
  let epistemicReaderFailed = false;
  try {
    epistemicItems = await runtime.oa.cycleServices.epistemic.listByProject(
      projectId,
    );
  } catch {
    epistemicReaderFailed = true;
    epistemicItems = [];
  }

  let trajectory = null;
  let trajectoryReaderFailed = false;
  try {
    const traj = await runtime.oa.cycleServices.getCurrentTrajectory.execute({
      projectId,
    });
    trajectory = traj.ok ? traj.trajectory : null;
  } catch {
    trajectoryReaderFailed = true;
    trajectory = null;
  }

  let decisions: Awaited<
    ReturnType<typeof runtime.oa.decisionServices.decisions.listByProject>
  > = [];
  let decisionReaderFailed = false;
  try {
    decisions =
      await runtime.oa.decisionServices.decisions.listByProject(projectId);
  } catch {
    decisionReaderFailed = true;
    decisions = [];
  }

  let evidence: Awaited<
    ReturnType<
      typeof runtime.oa.evidenceReviewServices.repository.listByProject
    >
  > = [];
  let evidenceReaderFailed = false;
  try {
    evidence =
      await runtime.oa.evidenceReviewServices.repository.listByProject(
        projectId,
      );
  } catch {
    evidenceReaderFailed = true;
    evidence = [];
  }

  const projectResult = await runtime.oa.projectServices.getProject.execute({
    projectId,
  });
  const doctrinePin = projectResult.ok
    ? (projectResult.project.doctrinePackageRef ??
      (lps.ok ? lps.livingProjectState.doctrinePackageRef : undefined))
    : lps.ok
      ? lps.livingProjectState.doctrinePackageRef
      : undefined;
  const blockersSnap = deriveLifecycleBlockersFromEpistemicItems(epistemicItems);

  const failedMaterialDimensions =
    new Set<LifecycleRecommendationMaterialDimension>();
  if (!lps.ok) failedMaterialDimensions.add("lps");
  if (trajectoryReaderFailed) failedMaterialDimensions.add("trajectory");
  if (decisionReaderFailed) failedMaterialDimensions.add("decisions");
  if (evidenceReaderFailed) failedMaterialDimensions.add("evidence");
  if (epistemicReaderFailed) failedMaterialDimensions.add("epistemic_blockers");

  const currentRecommendations = selectCurrentLifecycleRecommendations({
    items: epistemicItems,
    cycles,
    lpsActiveCycleInstanceId: lpsActive,
    lpsVersion: lps.ok ? lps.livingProjectState.version : null,
    doctrinePackageId: doctrinePin?.doctrinePackageId ?? null,
    doctrinePackageVersion: doctrinePin?.version ?? null,
    doctrinePackageDigest: doctrinePin?.digest ?? null,
    trajectory,
    decisions,
    evidence,
    blockingReservationStatements: blockersSnap.statements,
    failedMaterialDimensions,
  });

  const projection = projectPilotLifecycle({
    projectId,
    cycles,
    lpsActiveCycleInstanceId: lpsActive,
    currentRecommendations,
  });

  if (
    projection.selectedStatus &&
    isPausedStatus(projection.selectedStatus) &&
    projection.selectedCycleInstanceId
  ) {
    const selected = cycles.find(
      (c) => c.cycleInstanceId === projection.selectedCycleInstanceId,
    );
    if (!selected) {
      projection.resumeReconciliation = {
        clean: false,
        detailCode: "CYCLE_RESUME_DRIFT",
        reason: "selected_cycle_missing",
      };
      projection.cta = { ...projection.cta, canResume: false };
      return projection;
    }

    if (!projectResult.ok) {
      projection.resumeReconciliation = {
        clean: false,
        detailCode: "CYCLE_RESUME_DRIFT",
        reason: "project_unreadable",
      };
      projection.cta = { ...projection.cta, canResume: false };
      return projection;
    }

    if (trajectoryReaderFailed) {
      projection.resumeReconciliation = {
        clean: false,
        detailCode: "CYCLE_RESUME_DRIFT",
        reason: "trajectory_reader_unavailable",
      };
      projection.cta = { ...projection.cta, canResume: false };
      return projection;
    }
    if (decisionReaderFailed) {
      projection.resumeReconciliation = {
        clean: false,
        detailCode: "CYCLE_RESUME_DRIFT",
        reason: "decision_reader_unavailable",
      };
      projection.cta = { ...projection.cta, canResume: false };
      return projection;
    }
    if (evidenceReaderFailed) {
      projection.resumeReconciliation = {
        clean: false,
        detailCode: "CYCLE_RESUME_DRIFT",
        reason: "evidence_reader_unavailable",
      };
      projection.cta = { ...projection.cta, canResume: false };
      return projection;
    }

    try {
      const siblingActiveExists = cycles.some(
        (c) =>
          c.status === "active" &&
          c.cycleInstanceId !== selected.cycleInstanceId,
      );

      const reconciliation = assessResumeReconciliation({
        cycle: selected,
        projectId,
        lpsReadable: lps.ok,
        lpsVersion: lps.ok ? lps.livingProjectState.version : 0,
        lpsActiveCycleInstanceId: lpsActive,
        objective: lps.ok ? lps.livingProjectState.objective : "",
        context: lps.ok ? (lps.livingProjectState.context ?? "") : "",
        scope: lps.ok ? (lps.livingProjectState.scope ?? "") : "",
        doctrinePackageId: doctrinePin?.doctrinePackageId,
        doctrinePackageVersion: doctrinePin?.version,
        doctrinePackageDigest: doctrinePin?.digest,
        trajectory,
        decisions,
        evidence,
        blockingReservationStatements: blockersSnap.statements,
        blockerSourceUnreadable: epistemicReaderFailed,
        siblingActiveExists,
      });

      projection.resumeReconciliation = {
        clean: reconciliation.clean,
        detailCode: reconciliation.clean ? null : "CYCLE_RESUME_DRIFT",
        reason: reconciliation.clean
          ? "assess_resume_reconciliation_clean"
          : reconciliation.driftReasons.join(",") || "dirty",
      };
      projection.cta = {
        ...projection.cta,
        canResume: projection.cta.canResume && reconciliation.clean,
      };
    } catch {
      projection.resumeReconciliation = {
        clean: false,
        detailCode: "CYCLE_RESUME_DRIFT",
        reason: "reconciliation_facts_unavailable",
      };
      projection.cta = { ...projection.cta, canResume: false };
    }
  }

  return projection;
}

/**
 * CORR-PROOF-05 — durable Pilot lifecycle projection (reload without F2).
 */
export async function projectAssistantPilotLifecycleProjection(input: {
  projectId: string;
}): Promise<{
  ok: boolean;
  status: string;
  code?: string;
  message?: string;
  projection?: PilotLifecycleProjection;
  selectedCycleInstanceId?: string | null;
  selectedStatus?: string | null;
  activeCycleInstanceId?: string | null;
  selectionAmbiguous?: boolean;
  cta?: PilotLifecycleProjection["cta"];
}> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      status: "oa_unavailable",
      code: "OA_STACK_UNAVAILABLE",
      message: "Services OA indisponibles pour Pilot lifecycle projection.",
    };
  }
  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
  if (!projectResult.ok) {
    return {
      ok: false,
      status: "project_not_found",
      code: projectResult.error.code,
      message: projectResult.error.message,
    };
  }
  const projection = await buildAssistantPilotLifecycleProjection(
    input.projectId,
  );
  if (!projection) {
    return {
      ok: false,
      status: "projection_unavailable",
      code: "OA_STACK_UNAVAILABLE",
      message: "Pilot lifecycle projection unavailable.",
    };
  }
  return {
    ok: true,
    status: "ok",
    projection,
    selectedCycleInstanceId: projection.selectedCycleInstanceId,
    selectedStatus: projection.selectedStatus,
    activeCycleInstanceId: projection.activeCycleInstanceId,
    selectionAmbiguous: projection.selectionAmbiguous,
    cta: projection.cta,
  };
}

/**
 * CORR-PROOF-05 — Pilot lifecycle transitions (START/PAUSE/RESUME/FINALIZE/CANCEL).
 * Never uses morrisGateRequired as Pilot lifecycle authority.
 */
export async function projectAssistantPilotLifecycleAction(input: {
  projectId: string;
  cycleInstanceId: string;
  action: PilotLifecycleActionKind;
  materialDriftDetected?: boolean;
  requiresTrajectoryHumanDecision?: boolean;
  requiresReplanHumanDecision?: boolean;
}): Promise<{
  ok: boolean;
  status: string;
  code?: string;
  message?: string;
  action?: PilotLifecycleActionKind;
  cycleStatus?: string;
  activeCycleInstanceId?: string | null;
  assessment?: unknown;
  decisionId?: string;
  project?: ProjectAssistantContextDto;
  projection?: PilotLifecycleProjection;
  selectedCycleInstanceId?: string | null;
  selectedStatus?: string | null;
  selectionAmbiguous?: boolean;
  cta?: PilotLifecycleProjection["cta"];
}> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      status: "oa_unavailable",
      code: "OA_STACK_UNAVAILABLE",
      message: "Services OA indisponibles pour Pilot lifecycle.",
    };
  }
  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
  if (!projectResult.ok) {
    return {
      ok: false,
      status: "project_not_found",
      code: projectResult.error.code,
      message: projectResult.error.message,
    };
  }
  const project = toContextDto(projectResult);
  const executed = await executePilotLifecycleAction({
    action: input.action,
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
    cycleServices: runtime.oa.cycleServices,
    projectServices: runtime.oa.projectServices,
    decisionServices: runtime.oa.decisionServices,
    authorityResolver: runtime.oa.authorityResolver,
    nowIso: () => runtime.oa!.clock.nowIso(),
    materialDriftDetected: input.materialDriftDetected,
    requiresTrajectoryHumanDecision: input.requiresTrajectoryHumanDecision,
    requiresReplanHumanDecision: input.requiresReplanHumanDecision,
  });
  if (!executed.ok) {
    const projection = await buildAssistantPilotLifecycleProjection(
      input.projectId,
    );
    return {
      ok: false,
      status: "lifecycle_error",
      code: executed.code,
      message: executed.message,
      assessment: executed.assessment,
      project,
      projection: projection ?? undefined,
      selectedCycleInstanceId: projection?.selectedCycleInstanceId,
      selectedStatus: projection?.selectedStatus,
      selectionAmbiguous: projection?.selectionAmbiguous,
      cta: projection?.cta,
    };
  }
  const reloaded = await loadProjectRuntimeForAssistant(input.projectId);
  const nextProject = reloaded.ok ? toContextDto(reloaded) : project;
  const projection = await buildAssistantPilotLifecycleProjection(
    input.projectId,
  );
  return {
    ok: true,
    status: "ok",
    action: executed.action,
    cycleStatus: executed.result?.ok ? executed.result.cycle.status : undefined,
    activeCycleInstanceId: executed.result?.ok
      ? (executed.result.activeCycleInstanceId ??
        projection?.activeCycleInstanceId ??
        nextProject.activeCycleInstanceId ??
        null)
      : projection?.activeCycleInstanceId ??
        nextProject.activeCycleInstanceId ??
        null,
    assessment: executed.assessment,
    decisionId: executed.decisionId,
    project: nextProject,
    projection: projection ?? undefined,
    selectedCycleInstanceId: projection?.selectedCycleInstanceId,
    selectedStatus: projection?.selectedStatus,
    selectionAmbiguous: projection?.selectionAmbiguous,
    cta: projection?.cta,
    message: `Pilot lifecycle ${executed.action} applied.`,
  };
}

```

### FULL FILE: `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/noraActor.ts`
- sha256: bb0dbd36123c8b806cd45cf84f83ef9ec74a83b5495d04cbf75d5be4b0c78cf4
- bytes: 557

```typescript
/**
 * Nora actor for Lifecycle Recommendation durable provenance.
 * Recommendation cognitive origin = Nora/agent; authority remains none.
 * Never LOCAL_PILOTE_ACTOR — Pilote authors HumanDecisions, not Nora Recommendations.
 */
import type { ActorReference } from "@/lib/oa/doctrine";

/** Repository-consistent Nora agent actor (matches Cycle create / LR delivery tests). */
export const NORA_LIFECYCLE_RECOMMENDATION_ACTOR: ActorReference = Object.freeze({
  actorId: "actor:nora",
  role: "agent",
  displayName: "Nora",
  authorityLevel: "N1",
});

```

### FULL FILE: `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/materialReaderContract.ts`
- sha256: c3bf4386e53214191ed98c2c7109fd6c1e66fe70288a451ef0c58347c4a68c34
- bytes: 2298

```typescript
/**
 * Intent-scoped material reader contract for Lifecycle Recommendation.
 * UNKNOWN (reader failed) ≠ KNOWN EMPTY (reader succeeded with zero rows).
 */
import type { LifecycleRecommendationIntent } from "./types";

export type LifecycleRecommendationMaterialDimension =
  | "cycles"
  | "lps"
  | "doctrine"
  | "trajectory"
  | "decisions"
  | "evidence"
  | "epistemic_blockers";

export type MaterialReaderOk<T> = { ok: true; value: T };
export type MaterialReaderFail = {
  ok: false;
  code: string;
  reason: string;
  dimension: LifecycleRecommendationMaterialDimension;
};
export type MaterialReaderResult<T> = MaterialReaderOk<T> | MaterialReaderFail;

/**
 * intent → material dimensions → required readers.
 * Evidence is FINALIZE-only. Eligibility assessors are not material readers.
 */
export function requiredMaterialDimensionsForIntent(
  intent: LifecycleRecommendationIntent,
): readonly LifecycleRecommendationMaterialDimension[] {
  if (intent === "FINALIZE_CURRENT_CYCLE") {
    return [
      "cycles",
      "lps",
      "doctrine",
      "trajectory",
      "decisions",
      "evidence",
      "epistemic_blockers",
    ] as const;
  }
  return [
    "cycles",
    "lps",
    "doctrine",
    "trajectory",
    "decisions",
    "epistemic_blockers",
  ] as const;
}

export function materialBasisUnavailableCode(
  dimension: LifecycleRecommendationMaterialDimension,
): string {
  switch (dimension) {
    case "trajectory":
      return "LR_BASIS_TRAJECTORY_UNAVAILABLE";
    case "decisions":
      return "LR_BASIS_DECISIONS_UNAVAILABLE";
    case "evidence":
      return "LR_BASIS_EVIDENCE_UNAVAILABLE";
    case "epistemic_blockers":
      return "LR_BASIS_EPISTEMIC_UNAVAILABLE";
    case "cycles":
      return "LR_BASIS_CYCLES_UNAVAILABLE";
    case "lps":
      return "LR_BASIS_LPS_UNAVAILABLE";
    case "doctrine":
      return "LR_BASIS_DOCTRINE_UNAVAILABLE";
    default:
      return "LR_BASIS_UNAVAILABLE";
  }
}

export function firstFailedRequiredMaterialDimension(
  intent: LifecycleRecommendationIntent,
  failed: ReadonlySet<LifecycleRecommendationMaterialDimension>,
): LifecycleRecommendationMaterialDimension | null {
  for (const d of requiredMaterialDimensionsForIntent(intent)) {
    if (failed.has(d)) return d;
  }
  return null;
}

```

### FULL FILE: `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/basisFingerprint.ts`
- sha256: b105c2a39f8d17aa732d6c99592c27caaeb24c2330708b2c00973ef91e5a051d
- bytes: 3218

```typescript
import { createHash } from "node:crypto";
import type {
  LifecycleRecommendationBasisRefs,
  LifecycleRecommendationCandidate,
  LifecycleRecommendationIntent,
} from "./types";
import { LIFECYCLE_RECOMMENDATION_INTENTS } from "./types";

export function isLifecycleRecommendationIntent(
  value: unknown,
): value is LifecycleRecommendationIntent {
  return (
    typeof value === "string" &&
    (LIFECYCLE_RECOMMENDATION_INTENTS as readonly string[]).includes(value)
  );
}

/**
 * Deterministic fingerprint over MATERIAL Recommendation basis only.
 * Excludes eligibility fields finalizeAccepted / resumeClean (Recommendation ≠ eligibility).
 */
export function computeBasisFingerprint(
  refs: LifecycleRecommendationBasisRefs,
): string {
  const canonical = JSON.stringify({
    projectId: refs.projectId,
    subjectCycleInstanceId: refs.subjectCycleInstanceId ?? null,
    subjectCycleStatus: refs.subjectCycleStatus ?? null,
    targetCycleInstanceId: refs.targetCycleInstanceId ?? null,
    targetCycleTypeId: refs.targetCycleTypeId ?? null,
    lpsActiveCycleInstanceId: refs.lpsActiveCycleInstanceId ?? null,
    lpsVersion: refs.lpsVersion ?? null,
    trajectoryId: refs.trajectoryId ?? null,
    trajectoryVersion: refs.trajectoryVersion ?? null,
    trajectoryStatus: refs.trajectoryStatus ?? null,
    reservationBlockingCount: refs.reservationBlockingCount ?? null,
    doctrinePackageId: refs.doctrinePackageId ?? null,
    doctrinePackageVersion: refs.doctrinePackageVersion ?? null,
    doctrinePackageDigest: refs.doctrinePackageDigest ?? null,
    decisionFingerprint: refs.decisionFingerprint ?? null,
    evidenceFingerprint: refs.evidenceFingerprint ?? null,
    blockerFingerprint: refs.blockerFingerprint ?? null,
  });
  return createHash("sha256").update(canonical).digest("hex");
}

export function computeSemanticKey(input: {
  projectId: string;
  intent: LifecycleRecommendationIntent;
  subjectCycleInstanceId?: string | null;
  targetCycleInstanceId?: string | null;
  targetCycleTypeId?: string | null;
}): string {
  const raw = [
    input.projectId,
    input.intent,
    input.subjectCycleInstanceId ?? "",
    input.targetCycleInstanceId ?? "",
    input.targetCycleTypeId ?? "",
  ].join("|");
  return createHash("sha256").update(raw).digest("hex").slice(0, 32);
}

/** Genuine domain-object references only — never machine-state prefixes. */
export function buildGenuineRelatedObjects(input: {
  projectId: string;
  subjectCycleInstanceId?: string | null;
  targetCycleInstanceId?: string | null;
}): string[] {
  const out: string[] = [input.projectId];
  if (input.subjectCycleInstanceId) out.push(input.subjectCycleInstanceId);
  if (input.targetCycleInstanceId) out.push(input.targetCycleInstanceId);
  return out;
}

export function candidateFromStructuredOutput(
  output: LifecycleRecommendationCandidate,
): LifecycleRecommendationCandidate {
  return {
    intent: output.intent,
    statement: output.statement.trim(),
    subjectCycleInstanceId: output.subjectCycleInstanceId ?? null,
    targetCycleInstanceId: output.targetCycleInstanceId ?? null,
    targetCycleTypeId: output.targetCycleTypeId ?? null,
    rationale: output.rationale ?? null,
  };
}

```

### FULL FILE: `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/resolveCanonicalBasis.ts`
- sha256: 8839fa2a41e1760cbf6ba29c634ac97d33bad09ade2878958bd609a3ca480a40
- bytes: 5488

```typescript
/**
 * Materiality classification for LifecycleRecommendationBasisRefs.
 *
 * A MATERIAL — fingerprinted; write/read must reconstruct identically.
 * B ELIGIBILITY — NOT Recommendation material (Recommendation ≠ eligibility).
 * C AUDIT-ONLY — schema may retain; excluded from material fingerprint.
 * D REMOVE/UNUSED — not used.
 *
 * Classification (CORR-DELIVERY-03):
 * | Field | Class | Notes |
 * | projectId | A | binding |
 * | subjectCycleInstanceId/Status | A | FINALIZE; optional subject on NEXT |
 * | targetCycleInstanceId/TypeId | A | NEXT_CYCLE |
 * | lpsActiveCycleInstanceId/lpsVersion | A | LPS binding |
 * | doctrinePackageId/Version/Digest | A | doctrine-sensitive basis |
 * | trajectoryId/Version/Status | A | trajectory identity |
 * | decisionFingerprint | A | relevant accepted HD |
 * | evidenceFingerprint | A | FINALIZE only |
 * | blockerFingerprint | A | blocking reservations |
 * | reservationBlockingCount | A | derived from blockers (parity aid) |
 * | finalizeAccepted | B | eligibility assessor — excluded from fingerprint |
 * | resumeClean | B | R10 resume eligibility — excluded from fingerprint |
 */
import type { HumanDecision } from "@/lib/oa/decision";
import type { Evidence } from "@/lib/oa/evidence-review";
import type { CycleInstance, ProjectTrajectory } from "../../domain/types";
import { isCurrentHumanDecisionStatus } from "../assessFinalization";
import type {
  LifecycleRecommendationBasisRefs,
  LifecycleRecommendationIntent,
} from "./types";

export type ResolveCanonicalLifecycleRecommendationBasisInput = {
  intent: LifecycleRecommendationIntent;
  projectId: string;
  subjectCycleInstanceId: string | null;
  targetCycleInstanceId: string | null;
  targetCycleTypeId: string | null;
  cycles: readonly CycleInstance[];
  lpsActiveCycleInstanceId: string | null | undefined;
  lpsVersion: number | null | undefined;
  doctrinePackageId?: string | null;
  doctrinePackageVersion?: string | null;
  doctrinePackageDigest?: string | null;
  trajectory: ProjectTrajectory | null;
  decisions: readonly HumanDecision[];
  evidence: readonly Evidence[];
  blockingReservationStatements: readonly string[];
};

export function lifecycleDecisionFingerprint(
  decisions: readonly HumanDecision[],
  projectId: string,
  cycleInstanceId: string | null,
): string {
  const relevant = decisions
    .filter(
      (d) =>
        d.projectId === projectId &&
        (!cycleInstanceId ||
          !d.cycleInstanceId ||
          d.cycleInstanceId === cycleInstanceId) &&
        isCurrentHumanDecisionStatus(d.status),
    )
    .map((d) => `${d.decisionId}:${d.status}:${d.subject}`)
    .sort();
  return relevant.join("|") || "none";
}

export function lifecycleEvidenceFingerprint(
  evidence: readonly Evidence[],
  cycleInstanceId: string | null,
): string {
  const relevant = evidence
    .filter(
      (e) =>
        !cycleInstanceId ||
        !e.bindings?.cycleInstanceId ||
        e.bindings.cycleInstanceId === cycleInstanceId,
    )
    .map(
      (e) =>
        `${e.evidenceId}:${e.status}:${e.availability ?? ""}:${e.freshness ?? ""}`,
    )
    .sort();
  return relevant.join("|") || "none";
}

export function lifecycleBlockerFingerprint(
  statements: readonly string[],
): string {
  return statements.slice().sort().join("|") || "none";
}

/**
 * Canonical intent-scoped MATERIAL basis only.
 * finalizeAccepted / resumeClean always null (eligibility, not Recommendation material).
 */
export function resolveCanonicalLifecycleRecommendationBasis(
  input: ResolveCanonicalLifecycleRecommendationBasisInput,
): LifecycleRecommendationBasisRefs {
  const subject = input.subjectCycleInstanceId
    ? input.cycles.find((c) => c.cycleInstanceId === input.subjectCycleInstanceId)
    : undefined;

  const scopeCycleId =
    input.intent === "FINALIZE_CURRENT_CYCLE"
      ? input.subjectCycleInstanceId
      : input.subjectCycleInstanceId ?? input.targetCycleInstanceId;

  const decisionFingerprint = lifecycleDecisionFingerprint(
    input.decisions,
    input.projectId,
    scopeCycleId,
  );
  const blockerFingerprint = lifecycleBlockerFingerprint(
    input.blockingReservationStatements,
  );

  const base: LifecycleRecommendationBasisRefs = {
    projectId: input.projectId,
    subjectCycleInstanceId: input.subjectCycleInstanceId,
    subjectCycleStatus: subject?.status ?? null,
    targetCycleInstanceId: input.targetCycleInstanceId,
    targetCycleTypeId: input.targetCycleTypeId,
    lpsActiveCycleInstanceId: input.lpsActiveCycleInstanceId ?? null,
    lpsVersion: input.lpsVersion ?? null,
    doctrinePackageId: input.doctrinePackageId ?? null,
    doctrinePackageVersion: input.doctrinePackageVersion ?? null,
    doctrinePackageDigest: input.doctrinePackageDigest ?? null,
    trajectoryId: input.trajectory?.trajectoryId ?? null,
    trajectoryVersion: input.trajectory?.version ?? null,
    trajectoryStatus: input.trajectory?.status ?? null,
    decisionFingerprint,
    blockerFingerprint,
    reservationBlockingCount: input.blockingReservationStatements.length,
    // B — eligibility; never material Recommendation currentness
    finalizeAccepted: null,
    resumeClean: null,
  };

  if (input.intent === "FINALIZE_CURRENT_CYCLE") {
    return {
      ...base,
      evidenceFingerprint: lifecycleEvidenceFingerprint(
        input.evidence,
        input.subjectCycleInstanceId,
      ),
    };
  }

  return {
    ...base,
    evidenceFingerprint: null,
  };
}

```

### FULL FILE: `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/currentness.ts`
- sha256: a007cd91e476d7b6191c4a67d9ba68e9f061c72fc6d67604a47e727a82b15ddf
- bytes: 7306

```typescript
import type { HumanDecision } from "@/lib/oa/decision";
import type { Evidence } from "@/lib/oa/evidence-review";
import type {
  CycleInstance,
  EpistemicItem,
  ProjectTrajectory,
} from "../../domain/types";
import { computeBasisFingerprint } from "./basisFingerprint";
import { resolveCanonicalLifecycleRecommendationBasis } from "./resolveCanonicalBasis";
import type {
  LifecycleRecommendationBasisRefs,
  LifecycleRecommendationDerivedCurrentness,
  LifecycleRecommendationEnvelope,
  LifecycleRecommendationIntent,
} from "./types";
import { tryDecodeLifecycleRecommendationItem } from "./materializeLifecycleRecommendation";
import {
  firstFailedRequiredMaterialDimension,
  type LifecycleRecommendationMaterialDimension,
} from "./materialReaderContract";

export function deriveLifecycleRecommendationCurrentness(input: {
  item: EpistemicItem;
  currentBasisRefs: LifecycleRecommendationBasisRefs;
}): LifecycleRecommendationDerivedCurrentness {
  if (input.item.status === "superseded") return "SUPERSEDED";
  if (input.item.status === "rejected" || input.item.status === "resolved") {
    return "STALE";
  }
  const persisted = input.item.lifecycleRecommendation;
  if (!persisted?.basisFingerprint) return "STALE";
  const now = computeBasisFingerprint(input.currentBasisRefs);
  return now === persisted.basisFingerprint ? "CURRENT" : "STALE";
}

export type RebuildLifecycleRecommendationBasisFacts = {
  cycles: readonly CycleInstance[];
  lpsActiveCycleInstanceId: string | null | undefined;
  lpsVersion?: number | null;
  doctrinePackageId?: string | null;
  doctrinePackageVersion?: string | null;
  doctrinePackageDigest?: string | null;
  trajectory?: ProjectTrajectory | null;
  decisions?: readonly HumanDecision[];
  evidence?: readonly Evidence[];
  blockingReservationStatements?: readonly string[];
};

/** Exact object equality of material basis (eligibility fields both null). */
export function materialBasisRefsEqual(
  a: LifecycleRecommendationBasisRefs,
  b: LifecycleRecommendationBasisRefs,
): boolean {
  return (
    a.projectId === b.projectId &&
    (a.subjectCycleInstanceId ?? null) === (b.subjectCycleInstanceId ?? null) &&
    (a.subjectCycleStatus ?? null) === (b.subjectCycleStatus ?? null) &&
    (a.targetCycleInstanceId ?? null) === (b.targetCycleInstanceId ?? null) &&
    (a.targetCycleTypeId ?? null) === (b.targetCycleTypeId ?? null) &&
    (a.lpsActiveCycleInstanceId ?? null) ===
      (b.lpsActiveCycleInstanceId ?? null) &&
    (a.lpsVersion ?? null) === (b.lpsVersion ?? null) &&
    (a.doctrinePackageId ?? null) === (b.doctrinePackageId ?? null) &&
    (a.doctrinePackageVersion ?? null) === (b.doctrinePackageVersion ?? null) &&
    (a.doctrinePackageDigest ?? null) === (b.doctrinePackageDigest ?? null) &&
    (a.trajectoryId ?? null) === (b.trajectoryId ?? null) &&
    (a.trajectoryVersion ?? null) === (b.trajectoryVersion ?? null) &&
    (a.trajectoryStatus ?? null) === (b.trajectoryStatus ?? null) &&
    (a.decisionFingerprint ?? null) === (b.decisionFingerprint ?? null) &&
    (a.evidenceFingerprint ?? null) === (b.evidenceFingerprint ?? null) &&
    (a.blockerFingerprint ?? null) === (b.blockerFingerprint ?? null) &&
    (a.reservationBlockingCount ?? null) ===
      (b.reservationBlockingCount ?? null) &&
    (a.finalizeAccepted ?? null) === (b.finalizeAccepted ?? null) &&
    (a.resumeClean ?? null) === (b.resumeClean ?? null)
  );
}

/** Rebuild the same canonical MATERIAL basis from current durable Product facts. */
export function rebuildBasisRefsForRecommendation(input: {
  item: EpistemicItem;
  facts: RebuildLifecycleRecommendationBasisFacts;
}): LifecycleRecommendationBasisRefs | null {
  const persisted = input.item.lifecycleRecommendation;
  if (!persisted) return null;
  const intent = persisted.intent as LifecycleRecommendationIntent;
  return resolveCanonicalLifecycleRecommendationBasis({
    intent,
    projectId: persisted.basisRefs.projectId,
    subjectCycleInstanceId: persisted.subjectCycleInstanceId,
    targetCycleInstanceId: persisted.targetCycleInstanceId,
    targetCycleTypeId: persisted.targetCycleTypeId,
    cycles: input.facts.cycles,
    lpsActiveCycleInstanceId: input.facts.lpsActiveCycleInstanceId,
    lpsVersion: input.facts.lpsVersion ?? null,
    doctrinePackageId: input.facts.doctrinePackageId ?? null,
    doctrinePackageVersion: input.facts.doctrinePackageVersion ?? null,
    doctrinePackageDigest: input.facts.doctrinePackageDigest ?? null,
    trajectory: input.facts.trajectory ?? null,
    decisions: input.facts.decisions ?? [],
    evidence: input.facts.evidence ?? [],
    blockingReservationStatements:
      input.facts.blockingReservationStatements ?? [],
  });
}

export function selectCurrentLifecycleRecommendations(input: {
  items: readonly EpistemicItem[];
  cycles: readonly CycleInstance[];
  lpsActiveCycleInstanceId: string | null | undefined;
  lpsVersion?: number | null;
  doctrinePackageId?: string | null;
  doctrinePackageVersion?: string | null;
  doctrinePackageDigest?: string | null;
  trajectory?: ProjectTrajectory | null;
  decisions?: readonly HumanDecision[];
  evidence?: readonly Evidence[];
  blockingReservationStatements?: readonly string[];
  /**
   * Read-side fail-closed: UNKNOWN material readers → omit from CURRENT.
   * Do not substitute []/null as known truth for failed dimensions.
   */
  failedMaterialDimensions?: ReadonlySet<LifecycleRecommendationMaterialDimension>;
}): LifecycleRecommendationEnvelope[] {
  const failed = input.failedMaterialDimensions ?? new Set();
  const decoded: LifecycleRecommendationEnvelope[] = [];
  for (const item of input.items) {
    if (item.type !== "Recommendation") continue;
    if (item.source !== "lifecycle-recommendation:nora") continue;
    if (!item.lifecycleRecommendation) continue;

    const intent = item.lifecycleRecommendation
      .intent as LifecycleRecommendationIntent;
    if (firstFailedRequiredMaterialDimension(intent, failed)) {
      // Fail closed — do not claim CURRENT when material basis cannot be rebuilt.
      continue;
    }

    const basis = rebuildBasisRefsForRecommendation({
      item,
      facts: {
        cycles: input.cycles,
        lpsActiveCycleInstanceId: input.lpsActiveCycleInstanceId,
        lpsVersion: input.lpsVersion,
        doctrinePackageId: input.doctrinePackageId,
        doctrinePackageVersion: input.doctrinePackageVersion,
        doctrinePackageDigest: input.doctrinePackageDigest,
        trajectory: input.trajectory,
        decisions: input.decisions,
        evidence: input.evidence,
        blockingReservationStatements: input.blockingReservationStatements,
      },
    });
    if (!basis) continue;
    const currentness = deriveLifecycleRecommendationCurrentness({
      item,
      currentBasisRefs: basis,
    });
    const env = tryDecodeLifecycleRecommendationItem(item, currentness);
    if (env) decoded.push({ ...env, basisRefs: basis });
  }

  const current = decoded.filter((d) => d.derivedCurrentness === "CURRENT");
  const byKey = new Map<string, LifecycleRecommendationEnvelope>();
  for (const env of current.sort((a, b) =>
    a.producedAt < b.producedAt ? 1 : -1,
  )) {
    if (!byKey.has(env.semanticKey)) byKey.set(env.semanticKey, env);
  }
  return [...byKey.values()];
}

```

### FULL FILE: `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/materializeFromProductTurn.ts`
- sha256: 6b7e7c2c5e5e82409eb05434be91ad0c811ad0fff326e59c8264f708db0a7326
- bytes: 6051

```typescript
/**
 * Server-owned Product materialization after Nora structured Product turn.
 * Does not call the model. Does not invent HD / Cycle mutations.
 * Material readers fail closed: UNKNOWN ≠ KNOWN EMPTY.
 */
import type { ActorReference } from "@/lib/oa/doctrine";
import type { HumanDecision } from "@/lib/oa/decision";
import type { Evidence } from "@/lib/oa/evidence-review";
import type {
  CycleInstance,
  EpistemicItem,
  ProjectTrajectory,
} from "@/lib/oa/cycle/domain/types";
import type { UpdateEpistemicState } from "@/lib/oa/cycle/application/updateEpistemicState";
import { deriveLifecycleBlockersFromEpistemicItems } from "@/lib/oa/cycle/application/deriveLifecycleBlockers";
import {
  produceLifecycleRecommendation,
  type ProduceLifecycleRecommendationResult,
} from "@/lib/oa/cycle/application/lifecycleRecommendation/produceLifecycleRecommendation";
import { resolveCanonicalLifecycleRecommendationBasis } from "@/lib/oa/cycle/application/lifecycleRecommendation/resolveCanonicalBasis";
import { isNoraLifecycleRecommendationStructuredOutput } from "@/lib/nora-cognitive-runtime/noraLifecycleRecommendationOutputType";
import { isNoraProductTurnWithOptionalLr } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import type { NoraLifecycleRecommendationStructuredOutput } from "@/lib/oa/cycle/application/lifecycleRecommendation/types";
import {
  firstFailedRequiredMaterialDimension,
  materialBasisUnavailableCode,
  type LifecycleRecommendationMaterialDimension,
} from "./materialReaderContract";

export type LifecycleRecommendationMaterialFacts = {
  cycles: readonly CycleInstance[];
  lpsActiveCycleInstanceId: string | null | undefined;
  lpsVersion: number | null | undefined;
  doctrinePackageId?: string | null;
  doctrinePackageVersion?: string | null;
  doctrinePackageDigest?: string | null;
  trajectory: ProjectTrajectory | null;
  decisions: readonly HumanDecision[];
  evidence: readonly Evidence[];
  epistemicItems: readonly EpistemicItem[];
  /**
   * Dimensions whose readers failed (UNKNOWN). Must not be treated as empty.
   * Intent-scoped: only required dimensions block materialization.
   */
  failedMaterialDimensions?: ReadonlySet<LifecycleRecommendationMaterialDimension>;
};

export type MaterializeFromProductTurnResult = {
  narrative: string | null;
  recommendationAttempted: boolean;
  materialization: ProduceLifecycleRecommendationResult | null;
};

export function extractLifecycleCandidateFromStructuredOutput(
  structuredOutput: unknown,
): {
  narrative: string | null;
  candidate: NoraLifecycleRecommendationStructuredOutput | null;
  kind: "product_turn" | "lr_only" | "none";
} {
  if (isNoraProductTurnWithOptionalLr(structuredOutput)) {
    return {
      narrative: structuredOutput.narrative,
      candidate: structuredOutput.lifecycleRecommendation,
      kind: "product_turn",
    };
  }
  if (isNoraLifecycleRecommendationStructuredOutput(structuredOutput)) {
    return {
      narrative: structuredOutput.statement,
      candidate: structuredOutput,
      kind: "lr_only",
    };
  }
  return { narrative: null, candidate: null, kind: "none" };
}

export async function materializeLifecycleRecommendationFromStructuredOutput(input: {
  projectId: string;
  structuredOutput: unknown;
  updateEpistemicState: UpdateEpistemicState;
  facts: LifecycleRecommendationMaterialFacts;
  producedAt: string;
  createdBy: ActorReference;
  correlationId?: string;
}): Promise<MaterializeFromProductTurnResult> {
  const extracted = extractLifecycleCandidateFromStructuredOutput(
    input.structuredOutput,
  );
  if (extracted.kind === "product_turn" && extracted.candidate === null) {
    return {
      narrative: extracted.narrative,
      recommendationAttempted: false,
      materialization: null,
    };
  }
  if (!extracted.candidate) {
    return {
      narrative: extracted.narrative,
      recommendationAttempted: false,
      materialization: null,
    };
  }

  const candidate = extracted.candidate;
  const failed = input.facts.failedMaterialDimensions ?? new Set();
  const failedRequired = firstFailedRequiredMaterialDimension(
    candidate.intent,
    failed,
  );
  if (failedRequired) {
    return {
      narrative: extracted.narrative,
      recommendationAttempted: true,
      materialization: {
        ok: false,
        code: materialBasisUnavailableCode(failedRequired),
        reason: `material_reader_unavailable:${failedRequired}`,
      },
    };
  }

  const blockers = deriveLifecycleBlockersFromEpistemicItems(
    input.facts.epistemicItems,
  );
  const subjectId = candidate.subjectCycleInstanceId ?? null;

  const basisRefs = resolveCanonicalLifecycleRecommendationBasis({
    intent: candidate.intent,
    projectId: input.projectId,
    subjectCycleInstanceId: subjectId,
    targetCycleInstanceId: candidate.targetCycleInstanceId ?? null,
    targetCycleTypeId: candidate.targetCycleTypeId ?? null,
    cycles: input.facts.cycles,
    lpsActiveCycleInstanceId: input.facts.lpsActiveCycleInstanceId,
    lpsVersion: input.facts.lpsVersion,
    doctrinePackageId: input.facts.doctrinePackageId,
    doctrinePackageVersion: input.facts.doctrinePackageVersion,
    doctrinePackageDigest: input.facts.doctrinePackageDigest,
    trajectory: input.facts.trajectory,
    decisions: input.facts.decisions,
    evidence: input.facts.evidence,
    blockingReservationStatements: blockers.statements,
  });

  const materialization = await produceLifecycleRecommendation({
    updateEpistemicState: input.updateEpistemicState,
    projectId: input.projectId,
    structured: candidate,
    cycles: input.facts.cycles,
    lpsActiveCycleInstanceId: input.facts.lpsActiveCycleInstanceId,
    basisRefs,
    producedAt: input.producedAt,
    createdBy: input.createdBy,
    existingItems: input.facts.epistemicItems,
    hasTrajectoryContext: Boolean(input.facts.trajectory),
    correlationId: input.correlationId,
  });

  return {
    narrative: extracted.narrative,
    recommendationAttempted: true,
    materialization,
  };
}

```

### FULL FILE: `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/index.ts`
- sha256: 20894b81dfe0d5972f34ed8c960bfa3cea5cb31d90e285b1f5fe87567d53f379
- bytes: 405

```typescript
export * from "./types";
export * from "./basisFingerprint";
export * from "./resolveCanonicalBasis";
export * from "./validateLifecycleRecommendation";
export * from "./materializeLifecycleRecommendation";
export * from "./currentness";
export * from "./produceLifecycleRecommendation";
export * from "./materializeFromProductTurn";
export * from "./materialReaderContract";
export * from "./noraActor";

```

### FULL FILE: `projects/sfia-studio/app/__tests__/oa/cycle/lifecycleRecommendation.finalCorr.d0.test.ts`
- sha256: 060179df73d992efec81465b0bbab4920c4ef2b29ac3d7d0bc778feba6d5aaf0
- bytes: 38696

```typescript
/**
 * LR CORR-DELIVERY-02 — material basis/currentness + Product Nora→Epistemic bridge.
 * ZERO REAL — ScriptedModel through orchestrateAssistantSend / orchestrateProjectAssistantTurn.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ScriptedModel, assistantMessage } from "@openai/agents/testing";
import { FakeConversationProvider } from "@/lib/platform/ai";
import {
  createTestDoctrineResolver,
  FixedClock,
  type Digest,
  type DoctrinePackagePin,
} from "@/lib/oa/doctrine";
import {
  createTestSqliteProductProjectServices,
  type ActorReference,
} from "@/lib/oa/project";
import {
  deriveLifecycleBlockersFromEpistemicItems,
  deriveLifecycleRecommendationCurrentness,
  computeBasisFingerprint,
  materialBasisRefsEqual,
  produceLifecycleRecommendation,
  rebuildBasisRefsForRecommendation,
  resolveCanonicalLifecycleRecommendationBasis,
  selectCurrentLifecycleRecommendations,
  materializeLifecycleRecommendationFromStructuredOutput,
  NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
} from "@/lib/oa/cycle";
import {
  createSqliteDecisionServices,
  MemoryAuthorityResolver,
  registerLocalPiloteAuthority,
  LOCAL_PILOTE_ACTOR,
} from "@/lib/oa/decision";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import { orchestrateProjectAssistantTurn } from "@/features/project-assistant/orchestrateTurn";
import * as runNoraAgentsTurnMod from "@/lib/nora-cognitive-runtime/runNoraAgentsTurn";

const APP_ROOT = path.resolve(__dirname, "../../..");
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

const ACTOR: ActorReference = {
  actorId: "actor:morris",
  role: "project_owner",
  displayName: "Morris",
  authorityLevel: "N3",
};

const NORA_BY = {
  actorId: "actor:nora",
  role: "agent" as const,
  displayName: "Nora",
  authorityLevel: "N1" as const,
};

const STEPS = [
  { stepId: "stp:clarify", order: 1, label: "Clarify", state: "pending" as const },
  {
    stepId: "stp:decide",
    order: 2,
    label: "Decide",
    state: "pending" as const,
    dependencies: ["stp:clarify"],
  },
];

const tempDirs: string[] = [];

afterEach(() => {
  resetRuntimeApplicationServiceForTests();
  vi.restoreAllMocks();
  while (tempDirs.length) {
    const d = tempDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

function tempDbPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-lr-final-"));
  tempDirs.push(dir);
  return path.join(dir, name);
}

class FixedIdSource implements LocalProjectIdSource {
  private n = 0;
  constructor(private readonly prefix: string) {}
  nextProjectId(): string {
    this.n += 1;
    return `prj:${this.prefix}-${this.n}`;
  }
  nextLpsVersionId(): string {
    return `lps:${this.prefix}-${this.n}`;
  }
  nextCorrelationId(): string {
    return `cor:${this.prefix}-${this.n}`;
  }
}

function productTurnPayload(lr: object | null, narrative: string) {
  return {
    narrative,
    lifecycleRecommendation: lr,
  };
}

function finalizeCandidate(subjectCycleInstanceId: string) {
  return {
    intent: "FINALIZE_CURRENT_CYCLE" as const,
    statement: "Envisager la finalisation du cycle actif.",
    subjectCycleInstanceId,
    targetCycleInstanceId: null,
    targetCycleTypeId: null,
    rationale: null,
    authority: "none" as const,
    isHumanDecision: false as const,
  };
}

async function bootProductProject(suffix: string) {
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  resetRuntimeApplicationServiceForTests();
  const runtime = getRuntimeApplicationService({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
    nowIso: "2026-09-08T09:00:00.000Z",
    idSource: new FixedIdSource(`lr-fin-${suffix}`),
    auditMode: "noop",
    productDbPath: tempDbPath(`${suffix}.sqlite`),
  });
  if (!runtime.oa) throw new Error("oa missing");
  const created = await runtime.createProject({
    name: `LR Final ${suffix}`,
    objective: "lifecycle",
    context: "lr-final",
    criticality: "STANDARD",
    constraints: [],
    shortReference: `LRF${suffix}`,
    idempotencyKey: `idem:lr-fin-${suffix}`,
  });
  if (!created.ok) throw new Error("create failed");
  const projectId = created.projectId;
  const oa = runtime.oa;
  const traj = await oa.cycleServices.createInitialTrajectory.execute({
    trajectoryId: `trj:${projectId}`,
    projectId,
    steps: STEPS,
    status: "active",
    expectedLpsVersion: created.livingState.version,
    createdBy: ACTOR,
  });
  expect(traj.ok).toBe(true);
  const cycleInstanceId = `cyc:lr-fin-${suffix}`;
  const cycle = await oa.cycleServices.createCycle.execute({
    cycleInstanceId,
    cycleTypeId: "cyc:delivery",
    projectId,
    signals: { lowRiskBounded: true },
    createdBy: NORA_BY,
    linkAsActiveCycle: false,
  });
  expect(cycle.ok).toBe(true);
  const auth = registerLocalPiloteAuthority({
    authorityResolver: oa.authorityResolver,
    scope: `pilot-lifecycle:${cycleInstanceId}`,
    issuedAt: "2026-09-08T09:00:00.000Z",
    forceEnable: true,
  });
  expect(auth.ok).toBe(true);
  if (!auth.ok) throw new Error(auth.message);
  const start = await oa.cycleServices.pilotLifecycle.start({
    cycleInstanceId,
    projectId,
    createdBy: LOCAL_PILOTE_ACTOR,
    authorityEvidenceId: auth.evidenceId,
  });
  expect(start.ok).toBe(true);
  return { runtime, oa, projectId, cycleInstanceId, sessionDbPath: tempDbPath(`sess-${suffix}.sqlite`) };
}

describe("LR CORR-DELIVERY-02 material basis", () => {
  it("BASIS-01..08 — intent-scoped material mutations stale; unrelated stays current", async () => {
    const ctx = await bootProductProject("basis");
    const cycles = await ctx.oa.cycleServices.cycles.listByProject(ctx.projectId);
    const traj = await ctx.oa.cycleServices.getCurrentTrajectory.execute({
      projectId: ctx.projectId,
    });
    expect(traj.ok).toBe(true);
    if (!traj.ok) return;
    const lps = await ctx.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: ctx.projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;

    const basis = resolveCanonicalLifecycleRecommendationBasis({
      intent: "FINALIZE_CURRENT_CYCLE",
      projectId: ctx.projectId,
      subjectCycleInstanceId: ctx.cycleInstanceId,
      targetCycleInstanceId: null,
      targetCycleTypeId: null,
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: traj.trajectory,
      decisions: [],
      evidence: [],
      blockingReservationStatements: [],
    });
    expect(basis.finalizeAccepted).toBeNull();
    expect(basis.resumeClean).toBeNull();

    const produced = await produceLifecycleRecommendation({
      updateEpistemicState: ctx.oa.cycleServices.updateEpistemicState,
      projectId: ctx.projectId,
      structured: finalizeCandidate(ctx.cycleInstanceId),
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      basisRefs: basis,
      producedAt: "2026-09-08T09:00:01.000Z",
      createdBy: NORA_BY,
      existingItems: [],
    });
    expect(produced.ok).toBe(true);
    if (!produced.ok) return;

    const item = produced.item;

    // BASIS-01 subject status
    const paused = { ...cycles[0]!, status: "paused" as const };
    let rebuilt = rebuildBasisRefsForRecommendation({
      item,
      facts: {
        cycles: [paused],
        lpsActiveCycleInstanceId: null,
        lpsVersion: lps.livingProjectState.version,
        doctrinePackageId: VALID_PIN.doctrinePackageId,
        doctrinePackageVersion: VALID_PIN.version,
        doctrinePackageDigest: VALID_PIN.digest,
        trajectory: traj.trajectory,
        decisions: [],
        evidence: [],
        blockingReservationStatements: [],
      },
    })!;
    expect(deriveLifecycleRecommendationCurrentness({ item, currentBasisRefs: rebuilt })).toBe(
      "STALE",
    );

    // BASIS-02 LPS version
    rebuilt = rebuildBasisRefsForRecommendation({
      item,
      facts: {
        cycles,
        lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
        lpsVersion: lps.livingProjectState.version + 1,
        doctrinePackageId: VALID_PIN.doctrinePackageId,
        doctrinePackageVersion: VALID_PIN.version,
        doctrinePackageDigest: VALID_PIN.digest,
        trajectory: traj.trajectory,
        decisions: [],
        evidence: [],
        blockingReservationStatements: [],
      },
    })!;
    expect(deriveLifecycleRecommendationCurrentness({ item, currentBasisRefs: rebuilt })).toBe(
      "STALE",
    );

    // BASIS-03 trajectory version
    rebuilt = rebuildBasisRefsForRecommendation({
      item,
      facts: {
        cycles,
        lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
        lpsVersion: lps.livingProjectState.version,
        doctrinePackageId: VALID_PIN.doctrinePackageId,
        doctrinePackageVersion: VALID_PIN.version,
        doctrinePackageDigest: VALID_PIN.digest,
        trajectory: { ...traj.trajectory, version: traj.trajectory.version + 1 },
        decisions: [],
        evidence: [],
        blockingReservationStatements: [],
      },
    })!;
    expect(deriveLifecycleRecommendationCurrentness({ item, currentBasisRefs: rebuilt })).toBe(
      "STALE",
    );

    // BASIS-04 HD fingerprint
    rebuilt = rebuildBasisRefsForRecommendation({
      item,
      facts: {
        cycles,
        lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
        lpsVersion: lps.livingProjectState.version,
        doctrinePackageId: VALID_PIN.doctrinePackageId,
        doctrinePackageVersion: VALID_PIN.version,
        doctrinePackageDigest: VALID_PIN.digest,
        trajectory: traj.trajectory,
        decisions: [
          {
            schemaVersion: "0.1.0-oa",
            decisionId: "dec:basis-hd",
            projectId: ctx.projectId,
            cycleInstanceId: ctx.cycleInstanceId,
            subject: "finalize-cycle",
            status: "accepted",
            options: [{ optionId: "opt:a", label: "A" }],
            selectedOptionId: "opt:a",
            effectiveAt: "2026-09-08T09:01:00.000Z",
            reversible: true,
            actor: LOCAL_PILOTE_ACTOR,
            authority: "morris",
          },
        ],
        evidence: [],
        blockingReservationStatements: [],
      },
    })!;
    expect(deriveLifecycleRecommendationCurrentness({ item, currentBasisRefs: rebuilt })).toBe(
      "STALE",
    );

    // BASIS-05 evidence
    rebuilt = rebuildBasisRefsForRecommendation({
      item,
      facts: {
        cycles,
        lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
        lpsVersion: lps.livingProjectState.version,
        doctrinePackageId: VALID_PIN.doctrinePackageId,
        doctrinePackageVersion: VALID_PIN.version,
        doctrinePackageDigest: VALID_PIN.digest,
        trajectory: traj.trajectory,
        decisions: [],
        evidence: [
          {
            schemaVersion: "0.1.0-oa",
            evidenceId: "ev:basis",
            projectId: ctx.projectId,
            kind: "artifact",
            status: "available",
            createdAt: "2026-09-08T09:00:00.000Z",
            createdBy: ACTOR,
            bindings: { cycleInstanceId: ctx.cycleInstanceId },
          } as never,
        ],
        blockingReservationStatements: [],
      },
    })!;
    expect(deriveLifecycleRecommendationCurrentness({ item, currentBasisRefs: rebuilt })).toBe(
      "STALE",
    );

    // BASIS-06 blockers
    rebuilt = rebuildBasisRefsForRecommendation({
      item,
      facts: {
        cycles,
        lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
        lpsVersion: lps.livingProjectState.version,
        doctrinePackageId: VALID_PIN.doctrinePackageId,
        doctrinePackageVersion: VALID_PIN.version,
        doctrinePackageDigest: VALID_PIN.digest,
        trajectory: traj.trajectory,
        decisions: [],
        evidence: [],
        blockingReservationStatements: ["blocking reservation"],
      },
    })!;
    expect(deriveLifecycleRecommendationCurrentness({ item, currentBasisRefs: rebuilt })).toBe(
      "STALE",
    );

    // BASIS-07 doctrine digest
    rebuilt = rebuildBasisRefsForRecommendation({
      item,
      facts: {
        cycles,
        lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
        lpsVersion: lps.livingProjectState.version,
        doctrinePackageId: VALID_PIN.doctrinePackageId,
        doctrinePackageVersion: VALID_PIN.version,
        doctrinePackageDigest: "sha256:" + "b".repeat(64),
        trajectory: traj.trajectory,
        decisions: [],
        evidence: [],
        blockingReservationStatements: [],
      },
    })!;
    expect(deriveLifecycleRecommendationCurrentness({ item, currentBasisRefs: rebuilt })).toBe(
      "STALE",
    );

    // Write/read parity under unchanged durable truth
    const writeBasis = basis;
    const readBasis = rebuildBasisRefsForRecommendation({
      item,
      facts: {
        cycles,
        lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
        lpsVersion: lps.livingProjectState.version,
        doctrinePackageId: VALID_PIN.doctrinePackageId,
        doctrinePackageVersion: VALID_PIN.version,
        doctrinePackageDigest: VALID_PIN.digest,
        trajectory: traj.trajectory,
        decisions: [],
        evidence: [],
        blockingReservationStatements: [],
      },
    })!;
    expect(materialBasisRefsEqual(writeBasis, readBasis)).toBe(true);
    expect(computeBasisFingerprint(writeBasis)).toBe(
      computeBasisFingerprint(readBasis),
    );
    expect(
      deriveLifecycleRecommendationCurrentness({
        item,
        currentBasisRefs: readBasis,
      }),
    ).toBe("CURRENT");
  });

  it("BASIS-08 — durable non-material Epistemic Observation mutation remains CURRENT", async () => {
    const ctx = await bootProductProject("basis08");
    const cycles = await ctx.oa.cycleServices.cycles.listByProject(ctx.projectId);
    const traj = await ctx.oa.cycleServices.getCurrentTrajectory.execute({
      projectId: ctx.projectId,
    });
    expect(traj.ok).toBe(true);
    if (!traj.ok) return;
    const lps = await ctx.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: ctx.projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;

    const writeBasis = resolveCanonicalLifecycleRecommendationBasis({
      intent: "FINALIZE_CURRENT_CYCLE",
      projectId: ctx.projectId,
      subjectCycleInstanceId: ctx.cycleInstanceId,
      targetCycleInstanceId: null,
      targetCycleTypeId: null,
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: traj.trajectory,
      decisions: [],
      evidence: [],
      blockingReservationStatements: [],
    });

    const produced = await produceLifecycleRecommendation({
      updateEpistemicState: ctx.oa.cycleServices.updateEpistemicState,
      projectId: ctx.projectId,
      structured: finalizeCandidate(ctx.cycleInstanceId),
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      basisRefs: writeBasis,
      producedAt: "2026-09-08T09:00:01.000Z",
      createdBy: NORA_BY,
      existingItems: [],
    });
    expect(produced.ok).toBe(true);
    if (!produced.ok) return;

    // Non-material durable mutation: non-blocking Observation (not Reservation,
    // not Recommendation, does not enter blocker/decision/evidence fingerprints).
    const noise = await ctx.oa.cycleServices.updateEpistemicState.execute({
      projectId: ctx.projectId,
      createdBy: ACTOR,
      items: [
        {
          epistemicItemId: `epi:noise-basis08-${ctx.projectId}`,
          type: "Observation",
          statement: "Unrelated durable observation outside LR material scope.",
          source: "test:noise",
          relatedObjects: [ctx.projectId],
        },
      ],
    });
    expect(noise.ok).toBe(true);

    const itemsAfter = await ctx.oa.cycleServices.epistemic.listByProject(
      ctx.projectId,
    );
    expect(
      itemsAfter.some((i) => i.epistemicItemId.includes("noise-basis08")),
    ).toBe(true);
    const lrItem = itemsAfter.find(
      (i) => i.epistemicItemId === produced.item.epistemicItemId,
    )!;
    expect(lrItem).toBeTruthy();

    const cyclesAfter = await ctx.oa.cycleServices.cycles.listByProject(
      ctx.projectId,
    );
    const decisionsAfter =
      await ctx.oa.decisionServices.decisions.listByProject(ctx.projectId);
    const evidenceAfter =
      await ctx.oa.evidenceReviewServices.repository.listByProject(
        ctx.projectId,
      );
    const blockers = deriveLifecycleBlockersFromEpistemicItems(itemsAfter);
    const readBasis = rebuildBasisRefsForRecommendation({
      item: lrItem,
      facts: {
        cycles: cyclesAfter,
        lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
        lpsVersion: lps.livingProjectState.version,
        doctrinePackageId: VALID_PIN.doctrinePackageId,
        doctrinePackageVersion: VALID_PIN.version,
        doctrinePackageDigest: VALID_PIN.digest,
        trajectory: traj.trajectory,
        decisions: decisionsAfter,
        evidence: evidenceAfter,
        blockingReservationStatements: blockers.statements,
      },
    })!;
    expect(materialBasisRefsEqual(writeBasis, readBasis)).toBe(true);
    expect(
      deriveLifecycleRecommendationCurrentness({
        item: lrItem,
        currentBasisRefs: readBasis,
      }),
    ).toBe("CURRENT");

    const current = selectCurrentLifecycleRecommendations({
      items: itemsAfter,
      cycles: cyclesAfter,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: traj.trajectory,
      decisions: decisionsAfter,
      evidence: evidenceAfter,
      blockingReservationStatements: blockers.statements,
    });
    expect(current.some((c) => c.recommendationId === lrItem.epistemicItemId)).toBe(
      true,
    );
  });
});

describe("LR CORR-DELIVERY-02 Product Nora bridge E2E", () => {
  it("E2E — orchestrateProjectAssistantTurn materializes Recommendation (one Agents call)", async () => {
    const ctx = await bootProductProject("e2e");
    const spy = vi.spyOn(runNoraAgentsTurnMod, "runNoraAgentsTurn");
    const payload = productTurnPayload(
      finalizeCandidate(ctx.cycleInstanceId),
      "Je recommande d'envisager la finalisation.",
    );
    const scripted = new ScriptedModel([
      [assistantMessage(JSON.stringify(payload))],
    ]);
    const beforeCycles = await ctx.oa.cycleServices.cycles.listByProject(
      ctx.projectId,
    );
    const beforeHd = await ctx.oa.decisionServices.decisions.listByProject(
      ctx.projectId,
    );

    const result = await orchestrateProjectAssistantTurn({
      projectId: ctx.projectId,
      content: "Dois-je finaliser?",
      sessionDbPath: ctx.sessionDbPath,
      simulateMemoryBUnavailable: true,
      provider: new FakeConversationProvider({ scripted: ["unused"] }),
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: scripted,
      },
    });

    if (!result.ok) {
      // eslint-disable-next-line no-console
      console.error("E2E FAIL", result);
    }
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.text).toBe("Je recommande d'envisager la finalisation.");
    expect(result.text.includes("{")).toBe(false);
    expect(result.lifecycleRecommendationMaterialized).toBe(true);
    expect(spy).toHaveBeenCalledTimes(1);

    const items = await ctx.oa.cycleServices.epistemic.listByProject(
      ctx.projectId,
    );
    const lr = items.filter(
      (i) => i.source === "lifecycle-recommendation:nora" && i.status === "active",
    );
    expect(lr).toHaveLength(1);
    expect(lr[0]!.createdBy.actorId).toBe(
      NORA_LIFECYCLE_RECOMMENDATION_ACTOR.actorId,
    );
    expect(lr[0]!.createdBy.role).toBe("agent");
    expect(lr[0]!.createdBy.actorId).not.toBe(LOCAL_PILOTE_ACTOR.actorId);
    expect(lr[0]!.source).toBe("lifecycle-recommendation:nora");
    expect(lr[0]!.lifecycleRecommendation?.authority).toBe("none");
    expect(lr[0]!.lifecycleRecommendation?.basisRefs.finalizeAccepted).toBeNull();
    expect(lr[0]!.lifecycleRecommendation?.basisRefs.resumeClean).toBeNull();
    expect(lr[0]!.lifecycleRecommendation?.basisRefs.trajectoryId).toBeTruthy();
    expect(lr[0]!.lifecycleRecommendation?.basisRefs.decisionFingerprint).toBe(
      "none",
    );

    const afterCycles = await ctx.oa.cycleServices.cycles.listByProject(
      ctx.projectId,
    );
    expect(afterCycles.map((c) => c.status)).toEqual(
      beforeCycles.map((c) => c.status),
    );
    const afterHd = await ctx.oa.decisionServices.decisions.listByProject(
      ctx.projectId,
    );
    expect(afterHd.length).toBe(beforeHd.length);

    const lpsNow = await ctx.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: ctx.projectId,
    });
    expect(lpsNow.ok).toBe(true);
    if (!lpsNow.ok) return;
    const trajNow = await ctx.oa.cycleServices.getCurrentTrajectory.execute({
      projectId: ctx.projectId,
    });
    const pin =
      lpsNow.livingProjectState.doctrinePackageRef ?? VALID_PIN;
    const current = selectCurrentLifecycleRecommendations({
      items,
      cycles: afterCycles,
      lpsActiveCycleInstanceId: lpsNow.livingProjectState.activeCycleInstanceId,
      lpsVersion: lpsNow.livingProjectState.version,
      doctrinePackageId: pin.doctrinePackageId,
      doctrinePackageVersion: pin.version,
      doctrinePackageDigest: pin.digest,
      trajectory: trajNow.ok ? trajNow.trajectory : null,
      decisions: afterHd,
      evidence: [],
      blockingReservationStatements: [],
    });
    expect(current).toHaveLength(1);
    expect(current[0]!.derivedCurrentness).toBe("CURRENT");
  });

  it("E2E-NONE — null Recommendation keeps narrative and persists nothing", async () => {
    const ctx = await bootProductProject("none");
    const payload = productTurnPayload(null, "Simple conseil conversationnel.");
    const result = await orchestrateProjectAssistantTurn({
      projectId: ctx.projectId,
      content: "Un conseil?",
      sessionDbPath: ctx.sessionDbPath,
      simulateMemoryBUnavailable: true,
      provider: new FakeConversationProvider({ scripted: ["unused"] }),
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: new ScriptedModel([
          [assistantMessage(JSON.stringify(payload))],
        ]),
      },
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.text).toBe("Simple conseil conversationnel.");
    expect(result.lifecycleRecommendationMaterialized).toBe(false);
    const items = await ctx.oa.cycleServices.epistemic.listByProject(
      ctx.projectId,
    );
    expect(
      items.filter((i) => i.source === "lifecycle-recommendation:nora"),
    ).toHaveLength(0);
  });

  it("E2E-INVALID — bad subject fails closed without HD/cycle mutation", async () => {
    const ctx = await bootProductProject("inv");
    const bad = finalizeCandidate("cyc:does-not-exist");
    const payload = productTurnPayload(bad, "Texte visible malgré candidat invalide.");
    const beforeHd = await ctx.oa.decisionServices.decisions.listByProject(
      ctx.projectId,
    );
    const beforeCycles = await ctx.oa.cycleServices.cycles.listByProject(
      ctx.projectId,
    );
    const result = await orchestrateProjectAssistantTurn({
      projectId: ctx.projectId,
      content: "Finaliser?",
      sessionDbPath: ctx.sessionDbPath,
      simulateMemoryBUnavailable: true,
      provider: new FakeConversationProvider({ scripted: ["unused"] }),
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: new ScriptedModel([
          [assistantMessage(JSON.stringify(payload))],
        ]),
      },
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.text).toBe("Texte visible malgré candidat invalide.");
    expect(result.lifecycleRecommendationMaterialized).toBe(false);
    expect(result.lifecycleRecommendationCode).toBeTruthy();
    const items = await ctx.oa.cycleServices.epistemic.listByProject(
      ctx.projectId,
    );
    expect(
      items.filter((i) => i.source === "lifecycle-recommendation:nora"),
    ).toHaveLength(0);
    expect(
      (await ctx.oa.decisionServices.decisions.listByProject(ctx.projectId))
        .length,
    ).toBe(beforeHd.length);
    expect(
      (await ctx.oa.cycleServices.cycles.listByProject(ctx.projectId)).map(
        (c) => c.status,
      ),
    ).toEqual(beforeCycles.map((c) => c.status));
  });

  it("E2E-AUTHORITY — authority != none rejected", async () => {
    const ctx = await bootProductProject("auth");
    const payload = productTurnPayload(
      {
        ...finalizeCandidate(ctx.cycleInstanceId),
        authority: "pilot",
      },
      "Narratif visible.",
    );
    const result = await orchestrateProjectAssistantTurn({
      projectId: ctx.projectId,
      content: "?",
      sessionDbPath: ctx.sessionDbPath,
      simulateMemoryBUnavailable: true,
      provider: new FakeConversationProvider({ scripted: ["unused"] }),
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: new ScriptedModel([
          [assistantMessage(JSON.stringify(payload))],
        ]),
      },
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    // Structured product-turn validation may drop invalid LR → null coerce OR fail materialize
    expect(result.lifecycleRecommendationMaterialized).not.toBe(true);
    const items = await ctx.oa.cycleServices.epistemic.listByProject(
      ctx.projectId,
    );
    expect(
      items.filter((i) => i.source === "lifecycle-recommendation:nora"),
    ).toHaveLength(0);
  });

  it("E2E via orchestrateAssistantSend — same Product path", async () => {
    const ctx = await bootProductProject("f2");
    const payload = productTurnPayload(
      finalizeCandidate(ctx.cycleInstanceId),
      "Conseil F2→F1 avec recommandation.",
    );
    const result = await orchestrateAssistantSend({
      projectId: ctx.projectId,
      content: "Résume l'objectif __F2_INFORMATIVE__",
      sessionDbPath: ctx.sessionDbPath,
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: new ScriptedModel([
          [assistantMessage(JSON.stringify(payload))],
        ]),
      },
      evalCellProviderFactory: () => new FakeConversationProvider(),
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.text).toContain("Conseil F2→F1");
    expect(result.lifecycleRecommendationMaterialized).toBe(true);
    const items = await ctx.oa.cycleServices.epistemic.listByProject(
      ctx.projectId,
    );
    expect(
      items.some(
        (i) =>
          i.source === "lifecycle-recommendation:nora" && i.status === "active",
      ),
    ).toBe(true);
  });
});

describe("LR CORR-DELIVERY-03 provenance + fail-closed", () => {
  it("PROV-01..06 — durable reloaded createdBy is Nora agent, never Pilote; no HD", async () => {
    const ctx = await bootProductProject("prov");
    const beforeHd = await ctx.oa.decisionServices.decisions.listByProject(
      ctx.projectId,
    );
    const payload = productTurnPayload(
      finalizeCandidate(ctx.cycleInstanceId),
      "Narratif avec recommandation Nora.",
    );
    const result = await orchestrateProjectAssistantTurn({
      projectId: ctx.projectId,
      content: "Finaliser?",
      sessionDbPath: ctx.sessionDbPath,
      simulateMemoryBUnavailable: true,
      provider: new FakeConversationProvider({ scripted: ["unused"] }),
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: new ScriptedModel([
          [assistantMessage(JSON.stringify(payload))],
        ]),
      },
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.lifecycleRecommendationMaterialized).toBe(true);

    const reloaded = await ctx.oa.cycleServices.epistemic.listByProject(
      ctx.projectId,
    );
    const lr = reloaded.find(
      (i) => i.source === "lifecycle-recommendation:nora" && i.status === "active",
    );
    expect(lr).toBeTruthy();
    if (!lr) return;
    expect(lr.createdBy.actorId).toBe("actor:nora");
    expect(lr.createdBy.role).toBe("agent");
    expect(lr.createdBy.actorId).not.toBe(LOCAL_PILOTE_ACTOR.actorId);
    expect(lr.source).toBe("lifecycle-recommendation:nora");
    expect(lr.lifecycleRecommendation?.authority).toBe("none");
    expect(
      (await ctx.oa.decisionServices.decisions.listByProject(ctx.projectId))
        .length,
    ).toBe(beforeHd.length);
  });

  it("FAIL-01..05 — material reader UNKNOWN blocks persist; EMPTY may materialize", async () => {
    const ctx = await bootProductProject("fail");
    const cycles = await ctx.oa.cycleServices.cycles.listByProject(ctx.projectId);
    const lps = await ctx.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: ctx.projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    const traj = await ctx.oa.cycleServices.getCurrentTrajectory.execute({
      projectId: ctx.projectId,
    });
    expect(traj.ok).toBe(true);
    if (!traj.ok) return;
    const baseFacts = {
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: traj.trajectory,
      decisions: [] as const,
      evidence: [] as const,
      epistemicItems: [] as const,
    };
    const structured = productTurnPayload(
      finalizeCandidate(ctx.cycleInstanceId),
      "Narratif conserve même si LR refuse.",
    );

    // FAIL-01 trajectory
    let mat = await materializeLifecycleRecommendationFromStructuredOutput({
      projectId: ctx.projectId,
      structuredOutput: structured,
      updateEpistemicState: ctx.oa.cycleServices.updateEpistemicState,
      facts: {
        ...baseFacts,
        failedMaterialDimensions: new Set(["trajectory"]),
      },
      producedAt: "2026-09-08T10:00:00.000Z",
      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
    });
    expect(mat.narrative).toBe("Narratif conserve même si LR refuse.");
    expect(mat.materialization?.ok).toBe(false);
    if (mat.materialization && !mat.materialization.ok) {
      expect(mat.materialization.code).toBe("LR_BASIS_TRAJECTORY_UNAVAILABLE");
    }

    // FAIL-02 decisions
    mat = await materializeLifecycleRecommendationFromStructuredOutput({
      projectId: ctx.projectId,
      structuredOutput: structured,
      updateEpistemicState: ctx.oa.cycleServices.updateEpistemicState,
      facts: {
        ...baseFacts,
        failedMaterialDimensions: new Set(["decisions"]),
      },
      producedAt: "2026-09-08T10:00:01.000Z",
      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
    });
    expect(mat.materialization?.ok).toBe(false);
    if (mat.materialization && !mat.materialization.ok) {
      expect(mat.materialization.code).toBe("LR_BASIS_DECISIONS_UNAVAILABLE");
    }

    // FAIL-03 evidence (FINALIZE)
    mat = await materializeLifecycleRecommendationFromStructuredOutput({
      projectId: ctx.projectId,
      structuredOutput: structured,
      updateEpistemicState: ctx.oa.cycleServices.updateEpistemicState,
      facts: {
        ...baseFacts,
        failedMaterialDimensions: new Set(["evidence"]),
      },
      producedAt: "2026-09-08T10:00:02.000Z",
      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
    });
    expect(mat.materialization?.ok).toBe(false);
    if (mat.materialization && !mat.materialization.ok) {
      expect(mat.materialization.code).toBe("LR_BASIS_EVIDENCE_UNAVAILABLE");
    }

    // FAIL-04 epistemic/blockers
    mat = await materializeLifecycleRecommendationFromStructuredOutput({
      projectId: ctx.projectId,
      structuredOutput: structured,
      updateEpistemicState: ctx.oa.cycleServices.updateEpistemicState,
      facts: {
        ...baseFacts,
        failedMaterialDimensions: new Set(["epistemic_blockers"]),
      },
      producedAt: "2026-09-08T10:00:03.000Z",
      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
    });
    expect(mat.materialization?.ok).toBe(false);
    if (mat.materialization && !mat.materialization.ok) {
      expect(mat.materialization.code).toBe("LR_BASIS_EPISTEMIC_UNAVAILABLE");
    }

    // FAIL-05 known empty succeeds
    mat = await materializeLifecycleRecommendationFromStructuredOutput({
      projectId: ctx.projectId,
      structuredOutput: structured,
      updateEpistemicState: ctx.oa.cycleServices.updateEpistemicState,
      facts: {
        ...baseFacts,
        failedMaterialDimensions: new Set(),
      },
      producedAt: "2026-09-08T10:00:04.000Z",
      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
    });
    expect(mat.materialization?.ok).toBe(true);

    // FAIL-07 evidence failure irrelevant for NEXT_CYCLE
    const nextStructured = productTurnPayload(
      {
        intent: "NEXT_CYCLE" as const,
        statement: "Envisager un prochain cycle.",
        subjectCycleInstanceId: ctx.cycleInstanceId,
        targetCycleInstanceId: null,
        targetCycleTypeId: "cyc:delivery",
        rationale: null,
        authority: "none" as const,
        isHumanDecision: false as const,
      },
      "Narratif next.",
    );
    mat = await materializeLifecycleRecommendationFromStructuredOutput({
      projectId: ctx.projectId,
      structuredOutput: nextStructured,
      updateEpistemicState: ctx.oa.cycleServices.updateEpistemicState,
      facts: {
        ...baseFacts,
        failedMaterialDimensions: new Set(["evidence"]),
      },
      producedAt: "2026-09-08T10:00:05.000Z",
      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
    });
    expect(mat.materialization?.ok).toBe(true);
  });

  it("FAIL-06 — read-side material reader unavailable omits CURRENT", async () => {
    const ctx = await bootProductProject("fail06");
    const cycles = await ctx.oa.cycleServices.cycles.listByProject(ctx.projectId);
    const lps = await ctx.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: ctx.projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    const traj = await ctx.oa.cycleServices.getCurrentTrajectory.execute({
      projectId: ctx.projectId,
    });
    expect(traj.ok).toBe(true);
    if (!traj.ok) return;
    const basis = resolveCanonicalLifecycleRecommendationBasis({
      intent: "FINALIZE_CURRENT_CYCLE",
      projectId: ctx.projectId,
      subjectCycleInstanceId: ctx.cycleInstanceId,
      targetCycleInstanceId: null,
      targetCycleTypeId: null,
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: traj.trajectory,
      decisions: [],
      evidence: [],
      blockingReservationStatements: [],
    });
    const produced = await produceLifecycleRecommendation({
      updateEpistemicState: ctx.oa.cycleServices.updateEpistemicState,
      projectId: ctx.projectId,
      structured: finalizeCandidate(ctx.cycleInstanceId),
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      basisRefs: basis,
      producedAt: "2026-09-08T10:10:00.000Z",
      createdBy: NORA_BY,
      existingItems: [],
    });
    expect(produced.ok).toBe(true);
    if (!produced.ok) return;
    const items = await ctx.oa.cycleServices.epistemic.listByProject(
      ctx.projectId,
    );
    const okCurrent = selectCurrentLifecycleRecommendations({
      items,
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: traj.trajectory,
      decisions: [],
      evidence: [],
      blockingReservationStatements: [],
    });
    expect(okCurrent).toHaveLength(1);

    const omitted = selectCurrentLifecycleRecommendations({
      items,
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: null,
      decisions: [],
      evidence: [],
      blockingReservationStatements: [],
      failedMaterialDimensions: new Set(["trajectory"]),
    });
    expect(omitted).toHaveLength(0);
  });
});

```

### FULL FILE: `projects/sfia-studio/app/__tests__/oa/cycle/lifecycleRecommendation.delivery.d0.test.ts`
- sha256: 41706a8e7184cce22afcb6aab06123515b9d95456894ff6c3b40a30d857b3d9c
- bytes: 31123

```typescript
/**
 * Lifecycle Recommendation Correction Delivery — R1–R15 + R10-A..H.
 * ZERO REAL — ScriptedModel / typed Epistemic Option A / authoritative resume.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import Ajv from "ajv";
import { afterEach, describe, expect, it } from "vitest";
import { ScriptedModel, assistantMessage } from "@openai/agents/testing";
import {
  createTestDoctrineResolver,
  FixedClock,
  type Digest,
  type DoctrinePackagePin,
} from "@/lib/oa/doctrine";
import {
  createTestSqliteProductProjectServices,
  type ActorReference,
  type SqliteProductProjectServices,
} from "@/lib/oa/project";
import {
  assessResumeReconciliation,
  buildPauseReconciliationSnapshot,
  createSqliteCycleServices,
  produceLifecycleRecommendation,
  projectPilotLifecycle,
  resolveCanonicalLifecycleRecommendationBasis,
  resumeReplanSubjectFor,
  selectCurrentLifecycleRecommendations,
  trajectoryFingerprint,
  validateLifecycleRecommendation,
} from "@/lib/oa/cycle";
import {
  createSqliteDecisionServices,
  MemoryAuthorityResolver,
  registerLocalPiloteAuthority,
  LOCAL_PILOTE_ACTOR,
  type DecisionServices,
} from "@/lib/oa/decision";
import { runNoraAgentsTurn } from "@/lib/nora-cognitive-runtime/runNoraAgentsTurn";
import {
  NORA_LIFECYCLE_RECOMMENDATION_OUTPUT_TYPE,
  isNoraLifecycleRecommendationStructuredOutput,
} from "@/lib/nora-cognitive-runtime/noraLifecycleRecommendationOutputType";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import { projectAssistantPilotLifecycleProjection } from "@/features/project-assistant/actions";

const APP_ROOT = path.resolve(__dirname, "../../..");
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

const ACTOR: ActorReference = {
  actorId: "actor:morris",
  role: "project_owner",
  displayName: "Morris",
  authorityLevel: "N3",
};

const NORA_BY = {
  actorId: "actor:nora",
  role: "agent" as const,
  displayName: "Nora",
  authorityLevel: "N1" as const,
};

const STEPS_PENDING = [
  { stepId: "stp:clarify", order: 1, label: "Clarify", state: "pending" as const },
  {
    stepId: "stp:decide",
    order: 2,
    label: "Decide",
    state: "pending" as const,
    dependencies: ["stp:clarify"],
  },
];

const tempDirs: string[] = [];
const openServices: Array<{ dispose: () => void }> = [];

afterEach(() => {
  resetRuntimeApplicationServiceForTests();
  while (openServices.length) {
    openServices.pop()?.dispose();
  }
  while (tempDirs.length) {
    const d = tempDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

function tempDbPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-lr-corr-"));
  tempDirs.push(dir);
  return path.join(dir, name);
}

function loadJson(rel: string): object {
  return JSON.parse(fs.readFileSync(path.join(SCHEMAS, rel), "utf8")) as object;
}

function createEpistemicAjv(): Ajv.Ajv {
  const ajv = new Ajv({
    allErrors: true,
    schemaId: "auto",
    meta: true,
    validateSchema: true,
    format: "full",
    unknownFormats: "ignore",
  });
  for (const f of [
    "common/digest.schema.json",
    "common/identifier.schema.json",
    "common/timestamp.schema.json",
    "common/actor-reference.schema.json",
    "common/provenance-record.schema.json",
  ]) {
    ajv.addSchema(loadJson(f));
  }
  ajv.addSchema(loadJson("epistemic/lifecycle-recommendation.schema.json"));
  ajv.addSchema(loadJson("epistemic/epistemic-item.schema.json"));
  return ajv;
}

function authorityAdapter(authority: MemoryAuthorityResolver) {
  return {
    verify: (req: {
      actorId: string;
      scope: string;
      evidenceId?: string;
      requiredLevel?: "N1" | "N2" | "N3";
      requireMorrisGate?: boolean;
    }) => {
      const r = authority.verify({
        actorId: req.actorId,
        requiredLevel: req.requiredLevel ?? "N3",
        scope: req.scope,
        evidenceId: req.evidenceId,
        requireMorrisGate: req.requireMorrisGate ?? true,
      });
      return { ok: r.ok, reason: r.reason };
    },
  };
}

function buildStack(dbPath: string) {
  const { resolver } = createTestDoctrineResolver({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
  });
  const project = createTestSqliteProductProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: "2026-09-08T08:00:00.000Z",
    dbPath,
  });
  openServices.push(project);
  const authority = new MemoryAuthorityResolver();
  const clock = new FixedClock("2026-09-08T08:00:00.000Z");
  let decisions!: DecisionServices;
  const cycles = createSqliteCycleServices({
    projectServices: project,
    productStore: project.store,
    clock,
    decisions: {
      getById: (id) => decisions.decisions.findById(id),
      listByProject: (pid) => decisions.decisions.listByProject(pid),
    },
    authority: authorityAdapter(authority),
  });
  decisions = createSqliteDecisionServices({
    projectServices: project,
    cycleServices: cycles,
    productStore: project.store,
    clock,
    authorityResolver: authority,
  });
  return { project, cycles, decisions, authority };
}

async function seedProject(
  project: SqliteProductProjectServices,
  projectId: string,
) {
  const created = await project.createProject.execute({
    projectId,
    title: "LR Correction",
    objective: "lifecycle recommendation",
    context: "lr-corr",
    scope: "pilot-lifecycle",
    doctrinePackagePin: VALID_PIN,
    createdBy: ACTOR,
    lpsVersionId: `lps:${projectId}-v1`,
    idempotencyKey: `idem:${projectId}`,
  });
  expect(created.ok).toBe(true);
}

async function createCandidate(
  cycles: ReturnType<typeof createSqliteCycleServices>,
  projectId: string,
  cycleInstanceId: string,
  linkAsActive = false,
) {
  return cycles.createCycle.execute({
    cycleInstanceId,
    cycleTypeId: "cyc:delivery",
    projectId,
    signals: { lowRiskBounded: true },
    createdBy: NORA_BY,
    linkAsActiveCycle: linkAsActive,
  });
}

function canonicalBasis(input: {
  intent: "FINALIZE_CURRENT_CYCLE" | "NEXT_CYCLE";
  projectId: string;
  subjectCycleInstanceId: string | null;
  targetCycleInstanceId?: string | null;
  targetCycleTypeId?: string | null;
  cycles: Awaited<
    ReturnType<ReturnType<typeof createSqliteCycleServices>["cycles"]["listByProject"]>
  >;
  lpsActiveCycleInstanceId: string | null;
  lpsVersion?: number;
  trajectory?: Parameters<
    typeof resolveCanonicalLifecycleRecommendationBasis
  >[0]["trajectory"];
  decisions?: Parameters<
    typeof resolveCanonicalLifecycleRecommendationBasis
  >[0]["decisions"];
  evidence?: Parameters<
    typeof resolveCanonicalLifecycleRecommendationBasis
  >[0]["evidence"];
  blockers?: string[];
}) {
  return resolveCanonicalLifecycleRecommendationBasis({
    intent: input.intent,
    projectId: input.projectId,
    subjectCycleInstanceId: input.subjectCycleInstanceId,
    targetCycleInstanceId: input.targetCycleInstanceId ?? null,
    targetCycleTypeId: input.targetCycleTypeId ?? null,
    cycles: input.cycles,
    lpsActiveCycleInstanceId: input.lpsActiveCycleInstanceId,
    lpsVersion: input.lpsVersion ?? 1,
    doctrinePackageId: VALID_PIN.doctrinePackageId,
    doctrinePackageVersion: VALID_PIN.version,
    doctrinePackageDigest: VALID_PIN.digest,
    trajectory: input.trajectory ?? null,
    decisions: input.decisions ?? [],
    evidence: input.evidence ?? [],
    blockingReservationStatements: input.blockers ?? [],
  });
}

describe("Lifecycle Recommendation Correction Delivery", () => {
  it("schema Option A — additive optional field; schemaVersion 0.1.0-oa; backward compatible", () => {
    const ajv = createEpistemicAjv();
    const validate = ajv.getSchema(
      "https://sfia.local/schemas/v3-modeled/v3-native-option-a/epistemic/epistemic-item.schema.json",
    );
    expect(validate).toBeTruthy();
    if (!validate) return;

    const baseItem = {
      schemaVersion: "0.1.0-oa",
      epistemicItemId: "epi:hist-1",
      type: "Recommendation",
      statement: "Historical non-lifecycle recommendation.",
      status: "active",
      createdBy: {
        actorId: "actor:morris",
        role: "project_owner",
        displayName: "Morris",
        authorityLevel: "N3",
      },
      createdAt: "2026-09-08T08:00:00.000Z",
      relatedObjects: ["prj:hist"],
    };
    expect(validate(baseItem)).toBe(true);

    const withLr = {
      ...baseItem,
      epistemicItemId: "epi:lr-1",
      lifecycleRecommendation: {
        intent: "FINALIZE_CURRENT_CYCLE",
        basisFingerprint: "a".repeat(64),
        basisRefs: { projectId: "prj:hist" },
        semanticKey: "b".repeat(32),
        subjectCycleInstanceId: "cyc:hist",
        targetCycleInstanceId: null,
        targetCycleTypeId: null,
        authority: "none",
      },
    };
    expect(validate(withLr)).toBe(true);

    const unknownExtra = { ...baseItem, unexpectedField: true };
    expect(validate(unknownExtra)).toBe(false);

    const schema = loadJson("epistemic/epistemic-item.schema.json") as {
      properties: { schemaVersion: { const: string } };
    };
    expect(schema.properties.schemaVersion.const).toBe("0.1.0-oa");
  });

  it("R1+R2+R12 — FINALIZE and NEXT_CYCLE via same Nora Runner outputType", async () => {
    const finalizePayload = {
      intent: "FINALIZE_CURRENT_CYCLE",
      statement: "Envisager la finalisation du cycle actif.",
      subjectCycleInstanceId: "cyc:lr-r1",
      targetCycleInstanceId: null,
      targetCycleTypeId: null,
      rationale: null,
      authority: "none",
      isHumanDecision: false,
    };
    const r1 = await runNoraAgentsTurn({
      correlationId: "cor:lr-r1",
      projectId: "prj:lr-r1",
      systemInstructions: "Emit lifecycle recommendation JSON only.",
      userContent: "Recommend finalize",
      enableTools: false,
      model: new ScriptedModel([
        [assistantMessage(JSON.stringify(finalizePayload))],
      ]),
      outputType: NORA_LIFECYCLE_RECOMMENDATION_OUTPUT_TYPE,
    });
    expect(r1.cognitiveRuntime).toBe("agents");
    const structured1 = isNoraLifecycleRecommendationStructuredOutput(
      r1.structuredOutput,
    )
      ? r1.structuredOutput
      : JSON.parse(r1.text || "{}");
    expect(structured1.intent).toBe("FINALIZE_CURRENT_CYCLE");

    const nextPayload = {
      ...finalizePayload,
      intent: "NEXT_CYCLE",
      statement: "Envisager un prochain cycle UX.",
      subjectCycleInstanceId: null,
      targetCycleTypeId: "cyc:ux-ui",
    };
    const r2 = await runNoraAgentsTurn({
      correlationId: "cor:lr-r2",
      projectId: "prj:lr-r2",
      systemInstructions: "Emit lifecycle recommendation JSON only.",
      userContent: "Recommend next",
      enableTools: false,
      model: new ScriptedModel([
        [assistantMessage(JSON.stringify(nextPayload))],
      ]),
      outputType: NORA_LIFECYCLE_RECOMMENDATION_OUTPUT_TYPE,
    });
    const structured2 = isNoraLifecycleRecommendationStructuredOutput(
      r2.structuredOutput,
    )
      ? r2.structuredOutput
      : JSON.parse(r2.text || "{}");
    expect(structured2.intent).toBe("NEXT_CYCLE");
    expect(r1.cognitiveRuntime).toBe(r2.cognitiveRuntime);
  });

  it("R3 — invalid binding fail-closed", async () => {
    const dbPath = tempDbPath("r3.sqlite");
    const stack = buildStack(dbPath);
    await seedProject(stack.project, "prj:lr-r3");
    await createCandidate(stack.cycles, "prj:lr-r3", "cyc:lr-r3", true);
    const cycles = await stack.cycles.cycles.listByProject("prj:lr-r3");
    expect(
      validateLifecycleRecommendation({
        projectId: "bad",
        candidate: {
          intent: "FINALIZE_CURRENT_CYCLE",
          statement: "x",
          subjectCycleInstanceId: "cyc:lr-r3",
        },
        cycles,
        lpsActiveCycleInstanceId: "cyc:lr-r3",
      }).ok,
    ).toBe(false);
  });

  it("R4+R5+R6+R7+R13+R15 — typed Epistemic durability, no lr:* protocol", async () => {
    const dbPath = tempDbPath("r4.sqlite");
    const stack = buildStack(dbPath);
    await seedProject(stack.project, "prj:lr-r4");
    await createCandidate(stack.cycles, "prj:lr-r4", "cyc:lr-r4", true);
    let cycles = await stack.cycles.cycles.listByProject("prj:lr-r4");
    const before = cycles[0]!;

    const produced = await produceLifecycleRecommendation({
      updateEpistemicState: stack.cycles.updateEpistemicState,
      projectId: "prj:lr-r4",
      structured: {
        intent: "FINALIZE_CURRENT_CYCLE",
        statement: "Finaliser ce cycle.",
        subjectCycleInstanceId: "cyc:lr-r4",
        targetCycleInstanceId: null,
        targetCycleTypeId: null,
        rationale: null,
        authority: "none",
        isHumanDecision: false,
      },
      cycles,
      lpsActiveCycleInstanceId: "cyc:lr-r4",
      basisRefs: canonicalBasis({
        intent: "FINALIZE_CURRENT_CYCLE",
        projectId: "prj:lr-r4",
        subjectCycleInstanceId: "cyc:lr-r4",
        cycles,
        lpsActiveCycleInstanceId: "cyc:lr-r4",
      }),
      producedAt: "2026-09-08T08:00:01.000Z",
      createdBy: NORA_BY,
      existingItems: [],
    });
    expect(produced.ok).toBe(true);
    if (!produced.ok) return;
    expect(produced.item.lifecycleRecommendation).toBeTruthy();
    expect(produced.item.statement.includes("{")).toBe(false);
    expect(JSON.stringify(produced.item.relatedObjects ?? [])).not.toMatch(
      /lr:(intent|basis|semkey|subject|target|targettype):/,
    );
    expect(produced.envelope.derivedCurrentness).toBe("CURRENT");

    cycles = await stack.cycles.cycles.listByProject("prj:lr-r4");
    expect(cycles[0]!.status).toBe(before.status);

    const items = await stack.cycles.epistemic.listByProject("prj:lr-r4");
    expect(items[0]?.lifecycleRecommendation?.intent).toBe(
      "FINALIZE_CURRENT_CYCLE",
    );
    const reloaded = selectCurrentLifecycleRecommendations({
      items,
      cycles,
      lpsActiveCycleInstanceId: "cyc:lr-r4",
      lpsVersion: 1,
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: null,
      decisions: [],
      evidence: [],
      blockingReservationStatements: [],
    });
    expect(reloaded).toHaveLength(1);

    const second = await produceLifecycleRecommendation({
      updateEpistemicState: stack.cycles.updateEpistemicState,
      projectId: "prj:lr-r4",
      structured: {
        intent: "FINALIZE_CURRENT_CYCLE",
        statement: "Nouvelle recommandation.",
        subjectCycleInstanceId: "cyc:lr-r4",
        targetCycleInstanceId: null,
        targetCycleTypeId: null,
        rationale: null,
        authority: "none",
        isHumanDecision: false,
      },
      cycles,
      lpsActiveCycleInstanceId: "cyc:lr-r4",
      basisRefs: canonicalBasis({
        intent: "FINALIZE_CURRENT_CYCLE",
        projectId: "prj:lr-r4",
        subjectCycleInstanceId: "cyc:lr-r4",
        cycles,
        lpsActiveCycleInstanceId: "cyc:lr-r4",
      }),
      producedAt: "2026-09-08T08:00:02.000Z",
      createdBy: NORA_BY,
      existingItems: await stack.cycles.epistemic.listByProject("prj:lr-r4"),
    });
    expect(second.ok).toBe(true);
    if (!second.ok) return;
    const afterSuper = await stack.cycles.epistemic.listByProject("prj:lr-r4");
    const current = selectCurrentLifecycleRecommendations({
      items: afterSuper,
      cycles,
      lpsActiveCycleInstanceId: "cyc:lr-r4",
      lpsVersion: 1,
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: null,
      decisions: [],
      evidence: [],
      blockingReservationStatements: [],
    });
    expect(current).toHaveLength(1);
    expect(current[0]!.recommendationId).toBe(
      second.envelope.recommendationId,
    );
    expect(
      afterSuper.find((i) => i.epistemicItemId === produced.envelope.recommendationId)
        ?.status,
    ).toBe("superseded");

    const mutated = { ...cycles[0]!, status: "paused" as const };
    await stack.cycles.cycles.save(mutated);
    const stale = selectCurrentLifecycleRecommendations({
      items: afterSuper,
      cycles: [mutated],
      lpsActiveCycleInstanceId: null,
    });
    expect(stale.every((s) => s.derivedCurrentness !== "CURRENT")).toBe(true);
  });

  it("R8 — NEXT_CYCLE does not create Cycle", async () => {
    const dbPath = tempDbPath("r8.sqlite");
    const stack = buildStack(dbPath);
    await seedProject(stack.project, "prj:lr-r8");
    const before = await stack.cycles.cycles.listByProject("prj:lr-r8");
    const produced = await produceLifecycleRecommendation({
      updateEpistemicState: stack.cycles.updateEpistemicState,
      projectId: "prj:lr-r8",
      structured: {
        intent: "NEXT_CYCLE",
        statement: "Envisager un cycle UX suivant.",
        subjectCycleInstanceId: null,
        targetCycleInstanceId: null,
        targetCycleTypeId: "cyc:ux-ui",
        rationale: null,
        authority: "none",
        isHumanDecision: false,
      },
      cycles: [],
      lpsActiveCycleInstanceId: null,
      basisRefs: canonicalBasis({
        intent: "NEXT_CYCLE",
        projectId: "prj:lr-r8",
        subjectCycleInstanceId: null,
        targetCycleTypeId: "cyc:ux-ui",
        cycles: [],
        lpsActiveCycleInstanceId: null,
      }),
      producedAt: "2026-09-08T08:00:03.000Z",
      createdBy: NORA_BY,
      existingItems: [],
      hasTrajectoryContext: true,
    });
    expect(produced.ok).toBe(true);
    const after = await stack.cycles.cycles.listByProject("prj:lr-r8");
    expect(after.length).toBe(before.length);
  });

  it("R9+R14 — Recommendation ≠ eligibility; surface has no model calls", () => {
    const projection = projectPilotLifecycle({
      projectId: "prj:lr-r9",
      cycles: [
        {
          schemaVersion: "0.1.0-oa",
          cycleInstanceId: "cyc:lr-r9",
          projectId: "prj:lr-r9",
          cycleTypeId: "cyc:delivery",
          profile: "Standard",
          status: "active",
          createdAt: "2026-09-08T08:00:00.000Z",
        },
      ],
      lpsActiveCycleInstanceId: "cyc:lr-r9",
      currentRecommendations: [],
    });
    expect(projection.cta.canFinalize).toBe(true);
    expect(projection.currentRecommendations ?? []).toHaveLength(0);
    const src = fs.readFileSync(
      path.join(
        APP_ROOT,
        "features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx",
      ),
      "utf8",
    );
    expect(src).not.toMatch(/runNoraAgentsTurn|openai|completeRound/);
    expect(src).not.toMatch(/pause_snapshot_present/);
  });

  it("R10-F — replan HD subject never claims drift clearance", () => {
    expect(resumeReplanSubjectFor("cyc:x")).toContain("cyc:x");
    expect(resumeReplanSubjectFor("cyc:x")).not.toMatch(/CLEAR|bypass/i);
  });

  it("R11 — TrajectorySurface reused", () => {
    const ws = fs.readFileSync(
      path.join(APP_ROOT, "features/pre-m6-product-ui/ProjectWorkspacePage.tsx"),
      "utf8",
    );
    expect(ws).toContain("LifecycleSurface");
    expect(ws).toContain("TrajectorySurface");
  });

  it("lr:* protocol retired from Product implementation", () => {
    const root = path.join(APP_ROOT, "lib/oa/cycle/application/lifecycleRecommendation");
    const files = fs.readdirSync(root).map((f) => path.join(root, f));
    files.push(
      path.join(APP_ROOT, "features/project-assistant/actions.ts"),
      path.join(APP_ROOT, "lib/oa/cycle/domain/types.ts"),
    );
    for (const f of files) {
      if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) continue;
      const text = fs.readFileSync(f, "utf8");
      expect(text).not.toMatch(/lr:intent:/);
      expect(text).not.toMatch(/lr:basis:/);
      expect(text).not.toMatch(/lr:semkey:/);
      expect(text).not.toMatch(/lr:subject:/);
      expect(text).not.toMatch(/lr:target:/);
      expect(text).not.toMatch(/lr:targettype:/);
    }
    expect(
      fs.existsSync(path.join(root, "relatedObjectsCodec.ts")),
    ).toBe(false);
  });
});

describe("R10 authoritative RESUME projection", () => {
  class FixedIdSource implements LocalProjectIdSource {
    private n = 0;
    nextProjectId(): string {
      this.n += 1;
      return `prj:lr-r10-${this.n}`;
    }
    nextLpsVersionId(): string {
      return `lps:lr-r10-${this.n}`;
    }
    nextCorrelationId(): string {
      return `cor:lr-r10-${this.n}`;
    }
  }

  async function bootPausedProject(suffix: string) {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    resetRuntimeApplicationServiceForTests();
    // Must use process singleton — PA projection reads getRuntimeApplicationService().
    const runtime = getRuntimeApplicationService({
      registryRoot: FIXTURES,
      schemasRoot: SCHEMAS,
      nowIso: "2026-09-08T08:00:00.000Z",
      idSource: new FixedIdSource(),
      auditMode: "noop",
      productDbPath: tempDbPath(`r10-${suffix}.sqlite`),
    });
    expect(runtime.oa).toBeTruthy();
    if (!runtime.oa) throw new Error("oa missing");
    const created = await runtime.createProject({
      name: `LR R10 ${suffix}`,
      objective: "lifecycle",
      context: "lr-r10",
      criticality: "STANDARD",
      constraints: [],
      shortReference: `R10${suffix}`,
      idempotencyKey: `idem:lr-r10-${suffix}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("create failed");
    const projectId = created.projectId;
    const oa = runtime.oa;
    const traj = await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: STEPS_PENDING,
      status: "active",
      expectedLpsVersion: created.livingState.version,
      createdBy: ACTOR,
    });
    expect(traj.ok).toBe(true);
    const cycleInstanceId = `cyc:lr-r10-${suffix}`;
    const cycle = await oa.cycleServices.createCycle.execute({
      cycleInstanceId,
      cycleTypeId: "cyc:delivery",
      projectId,
      signals: { lowRiskBounded: true },
      createdBy: NORA_BY,
      linkAsActiveCycle: false,
    });
    expect(cycle.ok).toBe(true);
    const auth = registerLocalPiloteAuthority({
      authorityResolver: oa.authorityResolver,
      scope: `pilot-lifecycle:${cycleInstanceId}`,
      issuedAt: "2026-09-08T08:00:00.000Z",
      forceEnable: true,
    });
    expect(auth.ok).toBe(true);
    if (!auth.ok) throw new Error(auth.message);
    const start = await oa.cycleServices.pilotLifecycle.start({
      cycleInstanceId,
      projectId,
      createdBy: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: auth.evidenceId,
    });
    expect(start.ok).toBe(true);
    const pause = await oa.cycleServices.pilotLifecycle.pause({
      cycleInstanceId,
      projectId,
      createdBy: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: auth.evidenceId,
    });
    expect(pause.ok).toBe(true);
    return { runtime, oa, projectId, cycleInstanceId, authEvidenceId: auth.evidenceId };
  }

  it("R10-A — snapshot present + trajectory changed => projection canResume false", async () => {
    const ctx = await bootPausedProject("a");
    // Candidate propose alone does not move getCurrentTrajectory; mutate the
    // durable current trajectory so the authoritative assessor sees material drift.
    const current = await ctx.oa.cycleServices.getCurrentTrajectory.execute({
      projectId: ctx.projectId,
    });
    expect(current.ok).toBe(true);
    if (!current.ok) return;
    await ctx.oa.cycleServices.trajectories.save({
      ...current.trajectory,
      steps: [
        ...current.trajectory.steps,
        { stepId: "stp:extra", order: 3, label: "Extra", state: "pending" },
      ],
    });

    const proj = await projectAssistantPilotLifecycleProjection({
      projectId: ctx.projectId,
    });
    expect(proj.ok).toBe(true);
    expect(proj.projection?.resumeReconciliation?.clean).toBe(false);
    expect(proj.projection?.cta.canResume).toBe(false);
    expect(proj.projection?.resumeReconciliation?.reason).not.toBe(
      "pause_snapshot_present",
    );
  });

  it("R10-E — clean matching facts => canResume true", async () => {
    const ctx = await bootPausedProject("e");
    const proj = await projectAssistantPilotLifecycleProjection({
      projectId: ctx.projectId,
    });
    expect(proj.ok).toBe(true);
    expect(proj.projection?.resumeReconciliation?.clean).toBe(true);
    expect(proj.projection?.cta.canResume).toBe(true);
  });

  it("R10-G — only clean fresh reconciliation restores Resume eligibility", async () => {
    const ctx = await bootPausedProject("g");
    const current = await ctx.oa.cycleServices.getCurrentTrajectory.execute({
      projectId: ctx.projectId,
    });
    expect(current.ok).toBe(true);
    if (!current.ok) return;
    const originalSteps = current.trajectory.steps;
    await ctx.oa.cycleServices.trajectories.save({
      ...current.trajectory,
      steps: [
        ...originalSteps,
        { stepId: "stp:drift", order: 9, label: "Drift", state: "pending" },
      ],
    });
    const dirty = await projectAssistantPilotLifecycleProjection({
      projectId: ctx.projectId,
    });
    expect(dirty.projection?.resumeReconciliation?.clean).toBe(false);
    expect(dirty.projection?.cta.canResume).toBe(false);

    // Replan HD subject alone never claims clearance (R10-F / R10-G).
    expect(resumeReplanSubjectFor(ctx.cycleInstanceId)).not.toMatch(
      /CLEAR|bypass/i,
    );

    await ctx.oa.cycleServices.trajectories.save({
      ...current.trajectory,
      steps: originalSteps,
    });
    const restored = await projectAssistantPilotLifecycleProjection({
      projectId: ctx.projectId,
    });
    expect(restored.projection?.resumeReconciliation?.clean).toBe(true);
    expect(restored.projection?.cta.canResume).toBe(true);
  });

  it("R10-B/C/D — assessor detects HD/evidence/blocker drift (unit authoritative)", () => {
    const cycle = {
      schemaVersion: "0.1.0-oa" as const,
      cycleInstanceId: "cyc:r10u",
      projectId: "prj:r10u",
      cycleTypeId: "cyc:delivery",
      profile: "Standard" as const,
      status: "paused" as const,
      createdAt: "2026-09-08T08:00:00.000Z",
      pauseReconciliation: buildPauseReconciliationSnapshot({
        pausedAt: "2026-09-08T08:00:00.000Z",
        lpsVersion: 2,
        lpsActiveCycleInstanceId: null,
        objective: "o",
        context: "c",
        scope: "s",
        doctrinePackageId: VALID_PIN.doctrinePackageId,
        doctrinePackageVersion: VALID_PIN.version,
        doctrinePackageDigest: VALID_PIN.digest,
        trajectory: {
          schemaVersion: "0.1.0-oa",
          trajectoryId: "trj:r10u",
          projectId: "prj:r10u",
          version: 1,
          status: "active",
          steps: STEPS_PENDING,
        },
        decisions: [],
        evidence: [],
        blockingReservationStatements: [],
        blockerSnapshotState: "KNOWN",
        projectId: "prj:r10u",
        cycleInstanceId: "cyc:r10u",
      }),
    };
    const traj = {
      schemaVersion: "0.1.0-oa" as const,
      trajectoryId: "trj:r10u",
      projectId: "prj:r10u",
      version: 1,
      status: "active" as const,
      steps: STEPS_PENDING,
    };
    const dirtyHd = assessResumeReconciliation({
      cycle,
      projectId: "prj:r10u",
      lpsReadable: true,
      lpsVersion: 2,
      lpsActiveCycleInstanceId: null,
      objective: "o",
      context: "c",
      scope: "s",
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: traj,
      decisions: [
        {
          schemaVersion: "0.1.0-oa",
          decisionId: "dec:r10u",
          projectId: "prj:r10u",
          cycleInstanceId: "cyc:r10u",
          subject: resumeReplanSubjectFor("cyc:r10u"),
          status: "accepted",
          options: [{ optionId: "opt:accept", label: "Accept" }],
          selectedOptionId: "opt:accept",
          effectiveAt: "2026-09-08T08:01:00.000Z",
          reversible: true,
          actor: LOCAL_PILOTE_ACTOR,
          authority: "morris",
        },
      ],
      evidence: [],
      blockingReservationStatements: [],
      siblingActiveExists: false,
    });
    expect(dirtyHd.clean).toBe(false);
    expect(dirtyHd.driftReasons).toContain("human_decision_material_drift");

    const dirtyEv = assessResumeReconciliation({
      cycle,
      projectId: "prj:r10u",
      lpsReadable: true,
      lpsVersion: 2,
      lpsActiveCycleInstanceId: null,
      objective: "o",
      context: "c",
      scope: "s",
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: traj,
      decisions: [],
      evidence: [
        {
          schemaVersion: "0.1.0-oa",
          evidenceId: "ev:r10u",
          projectId: "prj:r10u",
          kind: "artifact",
          status: "stale",
          createdAt: "2026-09-08T08:00:00.000Z",
          createdBy: ACTOR,
          bindings: { cycleInstanceId: "cyc:r10u" },
        } as never,
      ],
      blockingReservationStatements: [],
      siblingActiveExists: false,
    });
    expect(dirtyEv.clean).toBe(false);

    const dirtyBlock = assessResumeReconciliation({
      cycle,
      projectId: "prj:r10u",
      lpsReadable: true,
      lpsVersion: 2,
      lpsActiveCycleInstanceId: null,
      objective: "o",
      context: "c",
      scope: "s",
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: traj,
      decisions: [],
      evidence: [],
      blockingReservationStatements: ["new blocker"],
      siblingActiveExists: false,
    });
    expect(dirtyBlock.clean).toBe(false);

    void trajectoryFingerprint;
  });

  it("R10-H — missing pause snapshot => fail closed at assessor/projection", async () => {
    const ctx = await bootPausedProject("h");
    const cyc = await ctx.oa.cycleServices.cycles.findById(ctx.cycleInstanceId);
    expect(cyc).toBeTruthy();
    if (!cyc) return;
    const stripped = { ...cyc, pauseReconciliation: null };
    await ctx.oa.cycleServices.cycles.save(stripped);
    const proj = await projectAssistantPilotLifecycleProjection({
      projectId: ctx.projectId,
    });
    expect(proj.projection?.resumeReconciliation?.clean).toBe(false);
    expect(proj.projection?.cta.canResume).toBe(false);
  });
});

```

## All created Product candidate files (FULL CONTENT)

### `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/noraActor.ts` — see CORR-DELIVERY-03 focus section above (FULL)

### `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/materialReaderContract.ts` — see CORR-DELIVERY-03 focus section above (FULL)

### `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/basisFingerprint.ts` — see CORR-DELIVERY-03 focus section above (FULL)

### `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/resolveCanonicalBasis.ts` — see CORR-DELIVERY-03 focus section above (FULL)

### `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/currentness.ts` — see CORR-DELIVERY-03 focus section above (FULL)

### `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/materializeFromProductTurn.ts` — see CORR-DELIVERY-03 focus section above (FULL)

### FULL FILE: `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/materializeLifecycleRecommendation.ts`
- sha256: 008f8d98bd2d7c7dfd62205cac3ff9fb84bc2b2a1b5a092d8ea4b6efac6ac385
- bytes: 7057

```typescript
import type {
  EpistemicItem,
  EpistemicLifecycleRecommendation,
  ProvenanceRecord,
} from "../../domain/types";
import type { UpdateEpistemicState } from "../updateEpistemicState";
import {
  buildGenuineRelatedObjects,
  computeBasisFingerprint,
  computeSemanticKey,
} from "./basisFingerprint";
import type {
  LifecycleRecommendationBasisRefs,
  LifecycleRecommendationEnvelope,
} from "./types";
import type { ValidateLifecycleRecommendationResult } from "./validateLifecycleRecommendation";

export function lifecycleRecommendationEpistemicId(input: {
  projectId: string;
  semanticKey: string;
  producedAt: string;
}): string {
  const slug = input.semanticKey.slice(0, 16);
  const ts = input.producedAt.replace(/[^0-9A-Za-z]/g, "").slice(0, 20);
  return `epi:lr:${slug}:${ts}`;
}

export function buildPersistedLifecycleRecommendation(input: {
  intent: EpistemicLifecycleRecommendation["intent"];
  basisRefs: LifecycleRecommendationBasisRefs;
  subjectCycleInstanceId: string | null;
  targetCycleInstanceId: string | null;
  targetCycleTypeId: string | null;
  projectId: string;
}): EpistemicLifecycleRecommendation {
  const basisFingerprint = computeBasisFingerprint(input.basisRefs);
  const semanticKey = computeSemanticKey({
    projectId: input.projectId,
    intent: input.intent,
    subjectCycleInstanceId: input.subjectCycleInstanceId,
    targetCycleInstanceId: input.targetCycleInstanceId,
    targetCycleTypeId: input.targetCycleTypeId,
  });
  return {
    intent: input.intent,
    basisFingerprint,
    basisRefs: { ...input.basisRefs, projectId: input.projectId },
    semanticKey,
    subjectCycleInstanceId: input.subjectCycleInstanceId,
    targetCycleInstanceId: input.targetCycleInstanceId,
    targetCycleTypeId: input.targetCycleTypeId,
    authority: "none",
  };
}

export function encodeLifecycleRecommendationItem(input: {
  recommendationId: string;
  projectId: string;
  validated: Extract<ValidateLifecycleRecommendationResult, { ok: true }>;
  basisRefs: LifecycleRecommendationBasisRefs;
  producedAt: string;
  createdBy: EpistemicItem["createdBy"];
  supersedesRecommendationId?: string | null;
  provenance?: ProvenanceRecord;
}): EpistemicItem {
  const persisted = buildPersistedLifecycleRecommendation({
    intent: input.validated.intent,
    basisRefs: input.basisRefs,
    subjectCycleInstanceId: input.validated.subjectCycleInstanceId,
    targetCycleInstanceId: input.validated.targetCycleInstanceId,
    targetCycleTypeId: input.validated.targetCycleTypeId,
    projectId: input.projectId,
  });
  return {
    schemaVersion: "0.1.0-oa",
    epistemicItemId: input.recommendationId,
    type: "Recommendation",
    statement: input.validated.statement,
    status: "active",
    source: "lifecycle-recommendation:nora",
    createdBy: structuredClone(input.createdBy),
    createdAt: input.producedAt,
    supersedes: input.supersedesRecommendationId ?? undefined,
    relatedObjects: buildGenuineRelatedObjects({
      projectId: input.projectId,
      subjectCycleInstanceId: input.validated.subjectCycleInstanceId,
      targetCycleInstanceId: input.validated.targetCycleInstanceId,
    }),
    provenance: input.provenance
      ? structuredClone(input.provenance)
      : undefined,
    lifecycleRecommendation: persisted,
  };
}

export function tryDecodeLifecycleRecommendationItem(
  item: EpistemicItem,
  derivedCurrentness: LifecycleRecommendationEnvelope["derivedCurrentness"],
): LifecycleRecommendationEnvelope | null {
  if (item.type !== "Recommendation") return null;
  if (item.source !== "lifecycle-recommendation:nora") return null;
  const persisted = item.lifecycleRecommendation;
  if (!persisted || persisted.authority !== "none") return null;
  if (!persisted.basisFingerprint || !persisted.semanticKey) return null;

  return {
    recommendationId: item.epistemicItemId,
    projectId: persisted.basisRefs.projectId,
    intent: persisted.intent,
    subjectCycleInstanceId: persisted.subjectCycleInstanceId,
    targetCycleInstanceId: persisted.targetCycleInstanceId,
    targetCycleTypeId: persisted.targetCycleTypeId,
    producer: "nora",
    producedAt: item.createdAt,
    statement: item.statement,
    basisFingerprint: persisted.basisFingerprint,
    basisRefs: persisted.basisRefs,
    semanticKey: persisted.semanticKey,
    authority: "none",
    isHumanDecision: false,
    doesNotActivateCycle: true,
    doesNotFinalize: true,
    doesNotCreateHumanDecision: true,
    epistemicStatus: item.status,
    supersedesRecommendationId: item.supersedes ?? null,
    derivedCurrentness,
  };
}

export async function materializeLifecycleRecommendation(input: {
  updateEpistemicState: UpdateEpistemicState;
  projectId: string;
  validated: Extract<ValidateLifecycleRecommendationResult, { ok: true }>;
  basisRefs: LifecycleRecommendationBasisRefs;
  producedAt: string;
  createdBy: EpistemicItem["createdBy"];
  existingItems: readonly EpistemicItem[];
  provenance?: ProvenanceRecord;
  correlationId?: string;
}): Promise<
  | { ok: true; item: EpistemicItem; supersededId: string | null }
  | { ok: false; code: string; reason: string }
> {
  const semanticKey = computeSemanticKey({
    projectId: input.projectId,
    intent: input.validated.intent,
    subjectCycleInstanceId: input.validated.subjectCycleInstanceId,
    targetCycleInstanceId: input.validated.targetCycleInstanceId,
    targetCycleTypeId: input.validated.targetCycleTypeId,
  });

  const priorActive = input.existingItems.find((e) => {
    if (e.type !== "Recommendation" || e.status !== "active") return false;
    if (e.source !== "lifecycle-recommendation:nora") return false;
    return e.lifecycleRecommendation?.semanticKey === semanticKey;
  });

  const recommendationId = lifecycleRecommendationEpistemicId({
    projectId: input.projectId,
    semanticKey,
    producedAt: input.producedAt,
  });

  const item = encodeLifecycleRecommendationItem({
    recommendationId,
    projectId: input.projectId,
    validated: input.validated,
    basisRefs: input.basisRefs,
    producedAt: input.producedAt,
    createdBy: input.createdBy,
    supersedesRecommendationId: priorActive?.epistemicItemId ?? null,
    provenance: input.provenance,
  });

  const result = await input.updateEpistemicState.execute({
    projectId: input.projectId,
    createdBy: input.createdBy,
    correlationId: input.correlationId,
    items: [
      {
        epistemicItemId: item.epistemicItemId,
        type: "Recommendation",
        statement: item.statement,
        status: "active",
        source: item.source,
        supersedes: item.supersedes,
        relatedObjects: item.relatedObjects,
        provenance: item.provenance,
        lifecycleRecommendation: item.lifecycleRecommendation,
      },
    ],
  });

  if (!result.ok) {
    return {
      ok: false,
      code: result.error.detailCode,
      reason: result.error.internalCauseRef ?? "materialize_failed",
    };
  }

  return {
    ok: true,
    item,
    supersededId: priorActive?.epistemicItemId ?? null,
  };
}

```

### FULL FILE: `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/produceLifecycleRecommendation.ts`
- sha256: a639e41440f58e01a3c5a380cd6842f1e3f359950c5308cb2f2e96e76f2c2453
- bytes: 5075

```typescript
import type { EpistemicItem, ProvenanceRecord } from "../../domain/types";
import type { CycleInstance } from "../../domain/types";
import type { UpdateEpistemicState } from "../updateEpistemicState";
import {
  computeBasisFingerprint,
  candidateFromStructuredOutput,
} from "./basisFingerprint";
import { materializeLifecycleRecommendation } from "./materializeLifecycleRecommendation";
import { validateLifecycleRecommendation } from "./validateLifecycleRecommendation";
import type {
  LifecycleRecommendationBasisRefs,
  LifecycleRecommendationCandidate,
  LifecycleRecommendationEnvelope,
  NoraLifecycleRecommendationStructuredOutput,
} from "./types";
import { tryDecodeLifecycleRecommendationItem } from "./materializeLifecycleRecommendation";
import { deriveLifecycleRecommendationCurrentness } from "./currentness";

export type ProduceLifecycleRecommendationInput = {
  updateEpistemicState: UpdateEpistemicState;
  projectId: string;
  structured:
    | NoraLifecycleRecommendationStructuredOutput
    | LifecycleRecommendationCandidate;
  cycles: readonly CycleInstance[];
  lpsActiveCycleInstanceId: string | null | undefined;
  /**
   * Server-resolved canonical material basis (intent-scoped).
   * Must already include all material fields — not reconstructed from basisSeed alone.
   */
  basisRefs: LifecycleRecommendationBasisRefs;
  producedAt: string;
  createdBy: EpistemicItem["createdBy"];
  existingItems: readonly EpistemicItem[];
  hasTrajectoryContext?: boolean;
  provenance?: ProvenanceRecord;
  correlationId?: string;
};

export type ProduceLifecycleRecommendationResult =
  | {
      ok: true;
      envelope: LifecycleRecommendationEnvelope;
      item: EpistemicItem;
      supersededId: string | null;
    }
  | { ok: false; code: string; reason: string };

/**
 * Product path post-model: validate → persist canonical basis → decode envelope.
 * Used by Fake/deterministic and future REAL boundary alike (R15).
 */
export async function produceLifecycleRecommendation(
  input: ProduceLifecycleRecommendationInput,
): Promise<ProduceLifecycleRecommendationResult> {
  if (
    "authority" in input.structured &&
    input.structured.authority !== undefined &&
    input.structured.authority !== "none"
  ) {
    return {
      ok: false,
      code: "LR_AUTHORITY_FORBIDDEN",
      reason: "authority_bearing_forbidden",
    };
  }
  if (
    "isHumanDecision" in input.structured &&
    input.structured.isHumanDecision !== undefined &&
    input.structured.isHumanDecision !== false
  ) {
    return {
      ok: false,
      code: "LR_HD_FORBIDDEN",
      reason: "recommendation_is_not_human_decision",
    };
  }

  const candidate = candidateFromStructuredOutput({
    intent: input.structured.intent,
    statement: input.structured.statement,
    subjectCycleInstanceId: input.structured.subjectCycleInstanceId ?? null,
    targetCycleInstanceId: input.structured.targetCycleInstanceId ?? null,
    targetCycleTypeId: input.structured.targetCycleTypeId ?? null,
    rationale:
      "rationale" in input.structured
        ? (input.structured.rationale ?? null)
        : null,
  });

  const validated = validateLifecycleRecommendation({
    projectId: input.projectId,
    candidate,
    cycles: input.cycles,
    lpsActiveCycleInstanceId: input.lpsActiveCycleInstanceId,
    hasTrajectoryContext: input.hasTrajectoryContext,
  });
  if (!validated.ok) {
    return { ok: false, code: validated.code, reason: validated.reason };
  }

  // Persist the server-owned canonical basis (not the thin validation seed alone).
  const basisRefs: LifecycleRecommendationBasisRefs = {
    ...input.basisRefs,
    projectId: input.projectId,
    subjectCycleInstanceId: validated.subjectCycleInstanceId,
    targetCycleInstanceId: validated.targetCycleInstanceId,
    targetCycleTypeId: validated.targetCycleTypeId,
  };

  const materialized = await materializeLifecycleRecommendation({
    updateEpistemicState: input.updateEpistemicState,
    projectId: input.projectId,
    validated,
    basisRefs,
    producedAt: input.producedAt,
    createdBy: input.createdBy,
    existingItems: input.existingItems,
    provenance: input.provenance,
    correlationId: input.correlationId,
  });
  if (!materialized.ok) {
    return {
      ok: false,
      code: materialized.code,
      reason: materialized.reason,
    };
  }

  const currentness = deriveLifecycleRecommendationCurrentness({
    item: materialized.item,
    currentBasisRefs: basisRefs,
  });
  const envelope = tryDecodeLifecycleRecommendationItem(
    materialized.item,
    currentness,
  );
  if (!envelope) {
    return {
      ok: false,
      code: "LR_DECODE_FAILED",
      reason: "envelope_decode_failed",
    };
  }

  if (envelope.basisFingerprint !== computeBasisFingerprint(basisRefs)) {
    return {
      ok: false,
      code: "LR_BASIS_MISMATCH",
      reason: "basis_fingerprint_mismatch",
    };
  }

  return {
    ok: true,
    envelope: { ...envelope, basisRefs },
    item: materialized.item,
    supersededId: materialized.supersededId,
  };
}

```

### FULL FILE: `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/validateLifecycleRecommendation.ts`
- sha256: 3fca36a9ad6418dcb79aa3d2fa11ec364cb2de8c1dbe763cdc011405dd85f368
- bytes: 5111

```typescript
import type { CycleInstance } from "../../domain/types";
import { isTerminalCycleStatus } from "../../domain/lifecycleInvariants";
import type {
  LifecycleRecommendationBasisRefs,
  LifecycleRecommendationCandidate,
  LifecycleRecommendationIntent,
} from "./types";

export type ValidateLifecycleRecommendationInput = {
  projectId: string;
  candidate: LifecycleRecommendationCandidate;
  cycles: readonly CycleInstance[];
  lpsActiveCycleInstanceId: string | null | undefined;
  /** When known — trajectory must be trajectory-aware for NEXT_CYCLE. */
  hasTrajectoryContext?: boolean;
};

export type ValidateLifecycleRecommendationResult =
  | {
      ok: true;
      intent: LifecycleRecommendationIntent;
      subjectCycleInstanceId: string | null;
      targetCycleInstanceId: string | null;
      targetCycleTypeId: string | null;
      statement: string;
      basisSeed: LifecycleRecommendationBasisRefs;
    }
  | {
      ok: false;
      code: string;
      reason: string;
    };

/**
 * Deterministic SFIA validation — fail closed.
 * Does not mutate Cycle/LPS/HD.
 */
export function validateLifecycleRecommendation(
  input: ValidateLifecycleRecommendationInput,
): ValidateLifecycleRecommendationResult {
  const { candidate, projectId, cycles } = input;
  if (!projectId.startsWith("prj:")) {
    return { ok: false, code: "LR_PROJECT_INVALID", reason: "project_binding" };
  }
  const statement = (candidate.statement ?? "").trim();
  if (statement.length < 1) {
    return { ok: false, code: "LR_STATEMENT_INVALID", reason: "statement_empty" };
  }

  const byId = new Map(cycles.map((c) => [c.cycleInstanceId, c] as const));

  if (candidate.intent === "FINALIZE_CURRENT_CYCLE") {
    const subjectId = candidate.subjectCycleInstanceId ?? null;
    if (!subjectId || !byId.has(subjectId)) {
      return {
        ok: false,
        code: "LR_SUBJECT_INVALID",
        reason: "finalize_subject_missing",
      };
    }
    const subject = byId.get(subjectId)!;
    if (subject.projectId !== projectId) {
      return {
        ok: false,
        code: "LR_PROJECT_MISMATCH",
        reason: "subject_wrong_project",
      };
    }
    if (isTerminalCycleStatus(subject.status)) {
      return {
        ok: false,
        code: "LR_SUBJECT_TERMINAL",
        reason: "finalize_subject_terminal",
      };
    }
    // Eligibility is NOT required — Recommendation ≠ canFinalize.
    return {
      ok: true,
      intent: candidate.intent,
      subjectCycleInstanceId: subjectId,
      targetCycleInstanceId: null,
      targetCycleTypeId: null,
      statement,
      basisSeed: {
        projectId,
        subjectCycleInstanceId: subjectId,
        subjectCycleStatus: subject.status,
        lpsActiveCycleInstanceId: input.lpsActiveCycleInstanceId ?? null,
      },
    };
  }

  if (candidate.intent === "NEXT_CYCLE") {
    const targetId = candidate.targetCycleInstanceId ?? null;
    const targetType = candidate.targetCycleTypeId ?? null;
    if (!targetId && !targetType) {
      return {
        ok: false,
        code: "LR_TARGET_MISSING",
        reason: "next_cycle_needs_target",
      };
    }
    if (targetId) {
      const target = byId.get(targetId);
      if (!target) {
        return {
          ok: false,
          code: "LR_TARGET_INVALID",
          reason: "target_cycle_missing",
        };
      }
      if (target.projectId !== projectId) {
        return {
          ok: false,
          code: "LR_PROJECT_MISMATCH",
          reason: "target_wrong_project",
        };
      }
      if (
        target.status === "active" ||
        target.status === "completed" ||
        target.status === "cancelled" ||
        target.status === "superseded"
      ) {
        return {
          ok: false,
          code: "LR_TARGET_STATUS",
          reason: "target_not_startable_state",
        };
      }
      // Single ACTIVE invariant: Recommendation must not imply a second active.
      const active =
        cycles.find((c) => c.status === "active") ??
        (input.lpsActiveCycleInstanceId
          ? byId.get(input.lpsActiveCycleInstanceId)
          : null);
      if (active && active.cycleInstanceId === targetId) {
        return {
          ok: false,
          code: "LR_TARGET_ACTIVE",
          reason: "target_already_active",
        };
      }
    }
    if (input.hasTrajectoryContext === false) {
      return {
        ok: false,
        code: "LR_TRAJECTORY_REQUIRED",
        reason: "next_cycle_requires_trajectory",
      };
    }
    return {
      ok: true,
      intent: candidate.intent,
      subjectCycleInstanceId: candidate.subjectCycleInstanceId ?? null,
      targetCycleInstanceId: targetId,
      targetCycleTypeId: targetType,
      statement,
      basisSeed: {
        projectId,
        subjectCycleInstanceId: candidate.subjectCycleInstanceId ?? null,
        targetCycleInstanceId: targetId,
        targetCycleTypeId: targetType,
        lpsActiveCycleInstanceId: input.lpsActiveCycleInstanceId ?? null,
      },
    };
  }

  return { ok: false, code: "LR_INTENT_INVALID", reason: "unknown_intent" };
}

```

### FULL FILE: `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/types.ts`
- sha256: 475c8d47201c7534de65b516cb26561acbf4824b9857c720d9033ecadacaa4f9
- bytes: 2446

```typescript
/**
 * Lifecycle Recommendation — Product-side envelope (not Epistemic schema extension alone).
 * Durable carrier = EpistemicItem type Recommendation + optional typed lifecycleRecommendation.
 * LR-D01 / LR-D03 Option A — no new table; no JSON-in-statement; no relatedObjects machine protocol.
 */
import type { EpistemicLifecycleRecommendation } from "../../domain/types";

export const LIFECYCLE_RECOMMENDATION_INTENTS = [
  "FINALIZE_CURRENT_CYCLE",
  "NEXT_CYCLE",
] as const;

export type LifecycleRecommendationIntent =
  (typeof LIFECYCLE_RECOMMENDATION_INTENTS)[number];

export type LifecycleRecommendationDerivedCurrentness =
  | "CURRENT"
  | "STALE"
  | "SUPERSEDED";

/** Model/cognition candidate — never Product truth until SFIA validation + materialization. */
export type LifecycleRecommendationCandidate = {
  intent: LifecycleRecommendationIntent;
  statement: string;
  subjectCycleInstanceId?: string | null;
  targetCycleInstanceId?: string | null;
  targetCycleTypeId?: string | null;
  rationale?: string | null;
};

export type LifecycleRecommendationBasisRefs =
  EpistemicLifecycleRecommendation["basisRefs"];

/** Persisted typed payload — aligns with modeled lifecycle-recommendation.schema.json. */
export type PersistedLifecycleRecommendation = EpistemicLifecycleRecommendation;

export type LifecycleRecommendationEnvelope = {
  recommendationId: string;
  projectId: string;
  intent: LifecycleRecommendationIntent;
  subjectCycleInstanceId: string | null;
  targetCycleInstanceId: string | null;
  targetCycleTypeId: string | null;
  producer: "nora";
  producedAt: string;
  statement: string;
  basisFingerprint: string;
  basisRefs: LifecycleRecommendationBasisRefs;
  semanticKey: string;
  authority: "none";
  isHumanDecision: false;
  doesNotActivateCycle: true;
  doesNotFinalize: true;
  doesNotCreateHumanDecision: true;
  epistemicStatus: "active" | "superseded" | "rejected" | "resolved";
  supersedesRecommendationId: string | null;
  /** Derived at read time — never persisted as Epistemic status. */
  derivedCurrentness: LifecycleRecommendationDerivedCurrentness;
};

export type NoraLifecycleRecommendationStructuredOutput = {
  intent: LifecycleRecommendationIntent;
  statement: string;
  subjectCycleInstanceId: string | null;
  targetCycleInstanceId: string | null;
  targetCycleTypeId: string | null;
  rationale: string | null;
  authority: "none";
  isHumanDecision: false;
};

```

### `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/index.ts` — see CORR-DELIVERY-03 focus section above (FULL)

### FULL FILE: `projects/sfia-studio/app/lib/nora-cognitive-runtime/noraLifecycleRecommendationOutputType.ts`
- sha256: f6821cb3e774e5713243a744cc13119343247f9a3b18e90a241e8e958762f7b0
- bytes: 1792

```typescript
import type { NoraLifecycleRecommendationStructuredOutput } from "@/lib/oa/cycle/application/lifecycleRecommendation/types";

/**
 * Agents SDK outputType for Lifecycle Recommendation candidates.
 * Same Nora Runner path — no second model call / prose parser.
 */
export const NORA_LIFECYCLE_RECOMMENDATION_OUTPUT_TYPE = {
  type: "json_schema" as const,
  name: "nora_lifecycle_recommendation",
  strict: true,
  schema: {
    type: "object" as const,
    additionalProperties: false as const,
    required: [
      "intent",
      "statement",
      "subjectCycleInstanceId",
      "targetCycleInstanceId",
      "targetCycleTypeId",
      "rationale",
      "authority",
      "isHumanDecision",
    ],
    properties: {
      intent: {
        type: "string" as const,
        enum: ["FINALIZE_CURRENT_CYCLE", "NEXT_CYCLE"],
      },
      statement: { type: "string" as const },
      subjectCycleInstanceId: { type: ["string", "null"] as const },
      targetCycleInstanceId: { type: ["string", "null"] as const },
      targetCycleTypeId: { type: ["string", "null"] as const },
      rationale: { type: ["string", "null"] as const },
      authority: { type: "string" as const, enum: ["none"] },
      isHumanDecision: { type: "boolean" as const, enum: [false] },
    },
  },
};

export function isNoraLifecycleRecommendationStructuredOutput(
  value: unknown,
): value is NoraLifecycleRecommendationStructuredOutput {
  if (!value || typeof value !== "object") return false;
  const o = value as Record<string, unknown>;
  if (o.intent !== "FINALIZE_CURRENT_CYCLE" && o.intent !== "NEXT_CYCLE") {
    return false;
  }
  if (typeof o.statement !== "string") return false;
  if (o.authority !== "none") return false;
  if (o.isHumanDecision !== false) return false;
  return true;
}

```

### FULL FILE: `projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts`
- sha256: 69665352af608ec9ce58b30b5bc103545e9a80eac935df91c53e5a4b3bc90c8f
- bytes: 1748

```typescript
import type { NoraLifecycleRecommendationStructuredOutput } from "@/lib/oa/cycle/application/lifecycleRecommendation/types";
import {
  NORA_LIFECYCLE_RECOMMENDATION_OUTPUT_TYPE,
  isNoraLifecycleRecommendationStructuredOutput,
} from "./noraLifecycleRecommendationOutputType";

/**
 * Product Assistant Nora turn contract:
 * - user-visible narrative (required)
 * - optional Lifecycle Recommendation candidate (nullable)
 * Same Agents Runner — one model call — no prose parsing.
 */
export const NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE = {
  type: "json_schema" as const,
  name: "nora_product_turn_with_optional_lr",
  strict: true,
  schema: {
    type: "object" as const,
    additionalProperties: false as const,
    required: ["narrative", "lifecycleRecommendation"],
    properties: {
      narrative: { type: "string" as const },
      lifecycleRecommendation: {
        anyOf: [
          { type: "null" as const },
          NORA_LIFECYCLE_RECOMMENDATION_OUTPUT_TYPE.schema,
        ],
      },
    },
  },
};

export type NoraProductTurnWithOptionalLr = {
  narrative: string;
  lifecycleRecommendation: NoraLifecycleRecommendationStructuredOutput | null;
};

export function isNoraProductTurnWithOptionalLr(
  value: unknown,
): value is NoraProductTurnWithOptionalLr {
  if (!value || typeof value !== "object") return false;
  const o = value as Record<string, unknown>;
  if (typeof o.narrative !== "string") return false;
  if (o.lifecycleRecommendation === null) return true;
  return isNoraLifecycleRecommendationStructuredOutput(
    o.lifecycleRecommendation,
  );
}

export function isNoraProductTurnOutputTypeName(name: unknown): boolean {
  return name === NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE.name;
}

```

### FULL FILE: `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx`
- sha256: 9c8a2e695434ecd3d620aa2ee70596dd6d64650c8819f3cff3c042aa98e49af2
- bytes: 8054

```typescript
"use client";

import { useCallback, useEffect, useState } from "react";
import {
  projectAssistantPilotLifecycleAction,
  projectAssistantPilotLifecycleProjection,
} from "@/features/project-assistant/actions";
import type { PilotLifecycleProjection } from "@/lib/oa/cycle";
import {
  lifecycleCtaPresentation,
  lifecycleStatusBadge,
  primaryFinalizeRecommendation,
  primaryNextCycleRecommendation,
} from "./lifecyclePresentation";
import styles from "./LifecycleSurface.module.css";

/**
 * LifecycleSurface — Recommend→Decide presentation only.
 * Never owns lifecycle / Recommendation / HD / trajectory truth; no model calls.
 */
export function LifecycleSurface({
  projectId,
  onDurableFactsChanged,
  onEscalateTrajectory,
}: {
  projectId: string;
  onDurableFactsChanged?: () => void;
  onEscalateTrajectory?: () => void;
}) {
  const [projection, setProjection] = useState<PilotLifecycleProjection | null>(
    null,
  );
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    const result = await projectAssistantPilotLifecycleProjection({ projectId });
    if (!result.ok || !result.projection) {
      setError(result.message ?? "Projection lifecycle indisponible.");
      setProjection(null);
      return;
    }
    setError(null);
    setProjection(result.projection);
  }, [projectId]);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  async function runAction(
    action: "START" | "PAUSE" | "RESUME" | "FINALIZE" | "CANCEL" | "REEVALUATE",
    opts?: { requiresReplanHumanDecision?: boolean },
  ) {
    if (!projection?.selectedCycleInstanceId) return;
    setBusy(action);
    try {
      const result = await projectAssistantPilotLifecycleAction({
        projectId,
        cycleInstanceId: projection.selectedCycleInstanceId,
        action,
        requiresReplanHumanDecision: opts?.requiresReplanHumanDecision,
      });
      if (!result.ok) {
        setError(result.message ?? result.code ?? "Action refusée.");
      } else {
        setError(null);
        await refresh();
        onDurableFactsChanged?.();
      }
    } finally {
      setBusy(null);
    }
  }

  if (!projection) {
    return (
      <aside
        className={styles.panel}
        data-testid="lifecycle-surface"
        aria-label="Cycle"
      >
        <header className={styles.head}>
          <p className={styles.eyebrow}>CYCLE</p>
          <h2 className={styles.title}>Cycle</h2>
        </header>
        <p className={styles.muted}>
          {error ?? "Chargement de l’état du cycle…"}
        </p>
      </aside>
    );
  }

  const badge = lifecycleStatusBadge(projection);
  const cta = lifecycleCtaPresentation(projection);
  const finalizeRec = primaryFinalizeRecommendation(projection);
  const nextRec = primaryNextCycleRecommendation(projection);

  return (
    <aside
      className={styles.panel}
      data-testid="lifecycle-surface"
      aria-label="Cycle"
    >
      <header className={styles.head}>
        <p className={styles.eyebrow}>CYCLE</p>
        <h2 className={styles.title}>Cycle</h2>
        <p
          className={styles.badge}
          data-testid="lifecycle-status-badge"
          data-status={badge.status}
        >
          <span className={styles.badgeLabel}>{badge.label}</span>
          {projection.selectedStatus ? (
            <span className={styles.badgeMeta}> · {projection.selectedStatus}</span>
          ) : null}
        </p>
      </header>

      {error ? (
        <p className={styles.error} role="alert">
          {error}
        </p>
      ) : null}

      {finalizeRec || nextRec ? (
        <section
          className={styles.recBlock}
          data-testid="lifecycle-recommendation"
          aria-label="Recommandation Nora"
        >
          <h3 className={styles.blockTitle}>Recommandation Nora</h3>
          <p className={styles.recStatement}>
            {(finalizeRec ?? nextRec)!.statement}
          </p>
          <p className={styles.recMeta}>
            {(finalizeRec ?? nextRec)!.intent.replace(/_/g, " ")} ·{" "}
            {(finalizeRec ?? nextRec)!.derivedCurrentness}
          </p>
          <p className={styles.distinction}>
            Recommandation ≠ décision Pilote · n’active pas le cycle
          </p>
        </section>
      ) : (
        <section className={styles.recBlock} data-testid="lifecycle-recommendation-empty">
          <h3 className={styles.blockTitle}>Recommandation Nora</h3>
          <p className={styles.muted}>
            Aucune recommandation lifecycle courante.
          </p>
        </section>
      )}

      {projection.assessment && !projection.assessment.canComplete ? (
        <section className={styles.block} data-testid="lifecycle-finalization-obligations">
          <h3 className={styles.blockTitle}>Obligations de finalisation</h3>
          <p className={styles.muted}>
            Des obligations restent ouvertes — la recommandation FINALIZE n’est
            pas une éligibilité.
          </p>
        </section>
      ) : null}

      {cta.showReplan ? (
        <section className={styles.block} data-testid="lifecycle-resume-drift">
          <h3 className={styles.blockTitle}>Dérive à la reprise</h3>
          <p className={styles.muted}>
            CYCLE_RESUME_DRIFT — replanifier via décision Pilote, puis
            réévaluer. La décision seule ne lève pas la dérive.
          </p>
          <button
            type="button"
            className={styles.btnSecondary}
            disabled={busy !== null}
            data-testid="lifecycle-replan-cta"
            onClick={() =>
              void runAction("RESUME", { requiresReplanHumanDecision: true })
            }
          >
            Enregistrer replan (décision Pilote)
          </button>
          <button
            type="button"
            className={styles.btnSecondary}
            disabled={busy !== null}
            data-testid="lifecycle-reevaluate-cta"
            onClick={() => void runAction("REEVALUATE")}
          >
            Réévaluer la reconciliation
          </button>
        </section>
      ) : null}

      <div className={styles.ctaRow} data-testid="lifecycle-cta-row">
        {cta.showStart ? (
          <button
            type="button"
            className={styles.btnPrimary}
            disabled={busy !== null}
            data-testid="lifecycle-start-cta"
            onClick={() => void runAction("START")}
          >
            Démarrer
          </button>
        ) : null}
        {cta.showFinalizePrimary ? (
          <button
            type="button"
            className={styles.btnPrimary}
            disabled={busy !== null || !cta.finalizeEnabled}
            data-testid="lifecycle-finalize-cta-primary"
            onClick={() => void runAction("FINALIZE")}
          >
            Finaliser
          </button>
        ) : null}
        {cta.showFinalizeSecondary ? (
          <button
            type="button"
            className={styles.btnSecondary}
            disabled={busy !== null || !cta.finalizeEnabled}
            data-testid="lifecycle-finalize-cta-secondary"
            onClick={() => void runAction("FINALIZE")}
          >
            Finaliser
          </button>
        ) : null}
        {cta.showResume ? (
          <button
            type="button"
            className={styles.btnPrimary}
            disabled={busy !== null || !cta.resumeEnabled}
            data-testid="lifecycle-resume-cta"
            onClick={() => void runAction("RESUME")}
          >
            Reprendre
          </button>
        ) : null}
        {cta.showTrajectoryEscalation ? (
          <button
            type="button"
            className={styles.btnSecondary}
            data-testid="lifecycle-trajectory-escalate"
            onClick={() => onEscalateTrajectory?.()}
          >
            Trajectoire
          </button>
        ) : null}
      </div>
    </aside>
  );
}

```

### FULL FILE: `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.module.css`
- sha256: 31ff090bceb494e4c9d8e5cedbd9c299426e37ba6e7bcd834650674d0c5015d1
- bytes: 2046

```css
.panel {
  display: flex;
  flex-direction: column;
  gap: var(--pm6-space-4);
  background: var(--pm6-surface);
  border: 1px solid var(--pm6-border-soft);
  border-radius: var(--pm6-radius-lg);
  box-shadow: var(--pm6-shadow-card);
  padding: var(--pm6-space-5);
}

.head {
  display: flex;
  flex-direction: column;
  gap: var(--pm6-space-1);
  padding-bottom: var(--pm6-space-3);
  border-bottom: 1px solid var(--pm6-border-soft);
}

.eyebrow {
  margin: 0;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--pm6-forest);
}

.title {
  margin: 0;
  font-size: 1.02rem;
  font-weight: 600;
  color: var(--pm6-ink);
}

.badge {
  margin: 0;
  font-size: 0.82rem;
  color: var(--pm6-ink-soft);
}

.badgeLabel {
  font-weight: 600;
}

.badgeMeta {
  color: var(--pm6-muted);
}

.block,
.recBlock {
  display: flex;
  flex-direction: column;
  gap: var(--pm6-space-1);
}

.blockTitle {
  margin: 0;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--pm6-muted);
}

.recStatement {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--pm6-ink);
}

.recMeta,
.distinction,
.muted {
  margin: 0;
  font-size: 0.8rem;
  color: var(--pm6-muted);
  line-height: 1.45;
}

.error {
  margin: 0;
  font-size: 0.86rem;
  color: var(--pm6-danger, #8b2e2e);
}

.ctaRow {
  display: flex;
  flex-wrap: wrap;
  gap: var(--pm6-space-2);
}

.btnPrimary,
.btnSecondary {
  appearance: none;
  border-radius: var(--pm6-radius-md, 8px);
  padding: 0.55rem 0.9rem;
  font-size: 0.86rem;
  font-weight: 600;
  cursor: pointer;
}

.btnPrimary {
  border: 1px solid var(--pm6-forest);
  background: var(--pm6-forest);
  color: #fff;
}

.btnSecondary {
  border: 1px solid var(--pm6-border-soft);
  background: transparent;
  color: var(--pm6-ink);
}

.btnPrimary:disabled,
.btnSecondary:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.btnPrimary:focus-visible,
.btnSecondary:focus-visible {
  outline: 2px solid var(--pm6-forest);
  outline-offset: 2px;
}

```

### FULL FILE: `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecyclePresentation.ts`
- sha256: a3e525f25613fc66248b11f8ce3acf1d79b0e7884fdcccbb1aa90f17c319854b
- bytes: 3672

```typescript
import type { PilotLifecycleProjection } from "@/lib/oa/cycle";
import type { LifecycleRecommendationEnvelope } from "@/lib/oa/cycle";

export type LifecycleUiStatus =
  | "active"
  | "candidate"
  | "blocked_drift"
  | "finalization_open"
  | "completed_next"
  | "paused"
  | "empty";

export function lifecycleStatusBadge(
  projection: PilotLifecycleProjection,
): { status: LifecycleUiStatus; label: string } {
  const resume = projection.resumeReconciliation;
  if (
    projection.selectedStatus === "paused" &&
    resume &&
    resume.clean === false
  ) {
    return { status: "blocked_drift", label: "Bloqué / dérive" };
  }
  if (projection.selectedStatus === "active") {
    const finalizeRec = (projection.currentRecommendations ?? []).find(
      (r) =>
        r.intent === "FINALIZE_CURRENT_CYCLE" &&
        r.derivedCurrentness === "CURRENT",
    );
    if (projection.assessment && !projection.assessment.canComplete) {
      return { status: "finalization_open", label: "Finalisation en cours" };
    }
    return {
      status: "active",
      label: finalizeRec ? "En cours" : "En cours",
    };
  }
  if (
    projection.selectedStatus === "proposed" ||
    projection.selectedStatus === "acknowledged"
  ) {
    return { status: "candidate", label: "Cycle proposé" };
  }
  if (projection.selectedStatus === "completed") {
    return { status: "completed_next", label: "Terminé" };
  }
  if (projection.selectedStatus === "paused") {
    return { status: "paused", label: "En pause" };
  }
  if (projection.selectedStatus === "blocked") {
    return { status: "blocked_drift", label: "Bloqué" };
  }
  return { status: "empty", label: "Aucun cycle sélectionné" };
}

export function primaryFinalizeRecommendation(
  projection: PilotLifecycleProjection,
): LifecycleRecommendationEnvelope | null {
  return (
    (projection.currentRecommendations ?? []).find(
      (r) =>
        r.intent === "FINALIZE_CURRENT_CYCLE" &&
        r.derivedCurrentness === "CURRENT",
    ) ?? null
  );
}

export function primaryNextCycleRecommendation(
  projection: PilotLifecycleProjection,
): LifecycleRecommendationEnvelope | null {
  return (
    (projection.currentRecommendations ?? []).find(
      (r) =>
        r.intent === "NEXT_CYCLE" && r.derivedCurrentness === "CURRENT",
    ) ?? null
  );
}

/**
 * CTA honesty: Recommendation never grants authority.
 * Dirty resume never exposes clean RESUME.
 */
export function lifecycleCtaPresentation(projection: PilotLifecycleProjection): {
  showFinalizePrimary: boolean;
  showFinalizeSecondary: boolean;
  showStart: boolean;
  showResume: boolean;
  showReplan: boolean;
  showTrajectoryEscalation: boolean;
  finalizeEnabled: boolean;
  resumeEnabled: boolean;
} {
  const finalizeRec = primaryFinalizeRecommendation(projection);
  const nextRec = primaryNextCycleRecommendation(projection);
  const resumeClean = projection.resumeReconciliation?.clean !== false;
  const dirtyResume =
    projection.selectedStatus === "paused" &&
    projection.resumeReconciliation?.clean === false;

  return {
    showFinalizePrimary: Boolean(
      finalizeRec && projection.cta.canFinalize,
    ),
    showFinalizeSecondary: Boolean(
      !finalizeRec && projection.cta.canFinalize,
    ),
    showStart: projection.cta.canStart,
    showResume: projection.cta.canResume && !dirtyResume,
    showReplan: dirtyResume,
    showTrajectoryEscalation: Boolean(
      nextRec ||
        (projection.candidateCycles.length > 1) ||
        projection.selectionAmbiguous,
    ),
    finalizeEnabled: projection.cta.canFinalize,
    resumeEnabled: projection.cta.canResume && resumeClean && !dirtyResume,
  };
}

```

### FULL FILE: `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecycleVisualContract.ts`
- sha256: d7b6c7e1fbef646022053043ff85a49b7a03f59e7f65b635cb00eff8e57596cb
- bytes: 1542

```typescript
/**
 * Visual contract — LifecycleSurface (pre-UI code).
 * Sources: review-v5 Penpot evidence (NOT Product SoT).
 * Desktop 1440x900 · Responsive drawer ≤1024 (evidence 1100x908).
 *
 * Layout (contextual stack in LPS drawer, above LPS/Trajectory):
 * - Eyebrow: CYCLE (neutral)
 * - Status badge (text + tone, not color-only): En cours | Proposé | Bloqué | Finalisation | Terminé
 * - Recommendation block (optional): label "Recommandation Nora" + statement + currentness
 * - Distinction line: Recommendation ≠ décision Pilote
 * - Primary CTA hierarchy:
 *   - ACTIVE without FINALIZE rec → Finaliser secondary
 *   - ACTIVE with CURRENT FINALIZE rec → Finaliser primary
 *   - CANDIDATE → Démarrer primary (eligibility)
 *   - BLOCKED/DRIFT → Replanifier (HD visible) ; RESUME disabled until clean
 *   - FINALIZATION OPEN → Traiter / Voir détails / Annuler
 *   - COMPLETED → next-cycle recommendation + escalate to TrajectorySurface if arbitration
 * - Trajectory escalation: link/focus TrajectorySurface (no duplicate arbitration)
 * - Empty: no recommendation → honest copy, eligibility CTAs only
 * - Loading/error: reuse workspace patterns; disabled CTAs honest
 */
export const LIFECYCLE_SURFACE_VISUAL_CONTRACT = {
  source: "review-v5",
  desktop: "1440x900",
  responsive: "drawer/sheet ≤1024 (evidence 1100x908)",
  heading: "Cycle",
  recommendationLabel: "Recommandation Nora",
  decisionLabel: "Décision Pilote requise",
  antiClaim: "PNG = visual evidence only; not Product SoT",
} as const;

```

### `projects/sfia-studio/app/__tests__/oa/cycle/lifecycleRecommendation.delivery.d0.test.ts` — see CORR-DELIVERY-03 focus section above (FULL)

### `projects/sfia-studio/app/__tests__/oa/cycle/lifecycleRecommendation.finalCorr.d0.test.ts` — see CORR-DELIVERY-03 focus section above (FULL)

### FULL FILE: `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/epistemic/lifecycle-recommendation.schema.json`
- sha256: 06d646cfce49b84de17604a0a4af58e33df8e0f3bf4b9b56573faeacce2fd2b4
- bytes: 2898

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://sfia.local/schemas/v3-modeled/v3-native-option-a/epistemic/lifecycle-recommendation.schema.json",
  "title": "LifecycleRecommendation",
  "description": "Optional typed Lifecycle Recommendation payload on EpistemicItem. Authority remains none; CURRENT/STALE are never persisted here.",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "intent",
    "basisFingerprint",
    "basisRefs",
    "semanticKey",
    "subjectCycleInstanceId",
    "targetCycleInstanceId",
    "targetCycleTypeId",
    "authority"
  ],
  "properties": {
    "intent": {
      "type": "string",
      "enum": ["FINALIZE_CURRENT_CYCLE", "NEXT_CYCLE"]
    },
    "basisFingerprint": {
      "type": "string",
      "minLength": 16,
      "maxLength": 128
    },
    "basisRefs": {
      "type": "object",
      "additionalProperties": false,
      "required": ["projectId"],
      "properties": {
        "projectId": {
          "$ref": "../common/identifier.schema.json"
        },
        "subjectCycleInstanceId": {
          "type": ["string", "null"]
        },
        "subjectCycleStatus": {
          "type": ["string", "null"]
        },
        "targetCycleInstanceId": {
          "type": ["string", "null"]
        },
        "targetCycleTypeId": {
          "type": ["string", "null"]
        },
        "lpsActiveCycleInstanceId": {
          "type": ["string", "null"]
        },
        "lpsVersion": {
          "type": ["integer", "null"]
        },
        "trajectoryId": {
          "type": ["string", "null"]
        },
        "trajectoryVersion": {
          "type": ["integer", "null"]
        },
        "trajectoryStatus": {
          "type": ["string", "null"]
        },
        "finalizeAccepted": {
          "type": ["boolean", "null"]
        },
        "resumeClean": {
          "type": ["boolean", "null"]
        },
        "reservationBlockingCount": {
          "type": ["integer", "null"]
        },
        "doctrinePackageId": {
          "type": ["string", "null"]
        },
        "doctrinePackageVersion": {
          "type": ["string", "null"]
        },
        "doctrinePackageDigest": {
          "type": ["string", "null"]
        },
        "decisionFingerprint": {
          "type": ["string", "null"]
        },
        "evidenceFingerprint": {
          "type": ["string", "null"]
        },
        "blockerFingerprint": {
          "type": ["string", "null"]
        }
      }
    },
    "semanticKey": {
      "type": "string",
      "minLength": 8,
      "maxLength": 128
    },
    "subjectCycleInstanceId": {
      "type": ["string", "null"]
    },
    "targetCycleInstanceId": {
      "type": ["string", "null"]
    },
    "targetCycleTypeId": {
      "type": ["string", "null"]
    },
    "authority": {
      "type": "string",
      "const": "none"
    }
  }
}

```

## Modified Product files (complete useful diff vs HEAD)

### DIFF: `projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx`

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
index 4836a276..fba20c82 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
@@ -10,6 +10,7 @@ import { ConversationSurface } from "./surfaces/ConversationSurface";
 import { HistorySurface } from "./surfaces/HistorySurface";
 import { LpsSurface } from "./surfaces/LpsSurface";
 import { RecoverySurface } from "./surfaces/RecoverySurface";
+import { LifecycleSurface } from "./surfaces/LifecycleSurface";
 import { TrajectorySurface } from "./surfaces/TrajectorySurface";
 import type { GetProjectResult, GetProjectSuccess } from "./types";
 import styles from "./ProjectWorkspacePage.module.css";
@@ -192,6 +193,20 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
                 className={styles.stateTrajectoryStack}
                 data-testid="h01-lps-trajectory-composition"
               >
+                <LifecycleSurface
+                  projectId={projectId}
+                  onDurableFactsChanged={() => {
+                    void loadProject();
+                  }}
+                  onEscalateTrajectory={() => {
+                    const el = document.querySelector(
+                      "[data-testid='trajectory-surface']",
+                    );
+                    if (el instanceof HTMLElement) {
+                      el.scrollIntoView({ behavior: "smooth", block: "start" });
+                    }
+                  }}
+                />
                 <LpsSurface result={success} />
                 <TrajectorySurface
                   projectId={projectId}

```

### DIFF: `projects/sfia-studio/app/features/project-assistant/actions.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/actions.ts b/projects/sfia-studio/app/features/project-assistant/actions.ts
index ed66148b..2d07d3bc 100644
--- a/projects/sfia-studio/app/features/project-assistant/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/actions.ts
@@ -11,7 +11,12 @@ import {
 import {
   projectPilotLifecycle,
   type PilotLifecycleProjection,
+  selectCurrentLifecycleRecommendations,
+  isPausedStatus,
+  assessResumeReconciliation,
+  deriveLifecycleBlockersFromEpistemicItems,
 } from "@/lib/oa/cycle";
+import type { LifecycleRecommendationMaterialDimension } from "@/lib/oa/cycle/application/lifecycleRecommendation/materialReaderContract";
 import { F2_PROCESS_LOCAL_NOTICE } from "./f2/proposalStore";
 import type { F2DecisionKind } from "./f2/types";
 import { confirmAndExecuteF3Fixture } from "./f3/confirmAndExecuteF3Fixture";
@@ -934,13 +939,208 @@ async function buildAssistantPilotLifecycleProjection(
     await runtime.oa.projectServices.getCurrentLivingProjectState.execute({
       projectId,
     });
-  return projectPilotLifecycle({
+  const lpsActive = lps.ok
+    ? lps.livingProjectState.activeCycleInstanceId
+    : null;
+  let epistemicItems: Awaited<
+    ReturnType<typeof runtime.oa.cycleServices.epistemic.listByProject>
+  > = [];
+  let epistemicReaderFailed = false;
+  try {
+    epistemicItems = await runtime.oa.cycleServices.epistemic.listByProject(
+      projectId,
+    );
+  } catch {
+    epistemicReaderFailed = true;
+    epistemicItems = [];
+  }
+
+  let trajectory = null;
+  let trajectoryReaderFailed = false;
+  try {
+    const traj = await runtime.oa.cycleServices.getCurrentTrajectory.execute({
+      projectId,
+    });
+    trajectory = traj.ok ? traj.trajectory : null;
+  } catch {
+    trajectoryReaderFailed = true;
+    trajectory = null;
+  }
+
+  let decisions: Awaited<
+    ReturnType<typeof runtime.oa.decisionServices.decisions.listByProject>
+  > = [];
+  let decisionReaderFailed = false;
+  try {
+    decisions =
+      await runtime.oa.decisionServices.decisions.listByProject(projectId);
+  } catch {
+    decisionReaderFailed = true;
+    decisions = [];
+  }
+
+  let evidence: Awaited<
+    ReturnType<
+      typeof runtime.oa.evidenceReviewServices.repository.listByProject
+    >
+  > = [];
+  let evidenceReaderFailed = false;
+  try {
+    evidence =
+      await runtime.oa.evidenceReviewServices.repository.listByProject(
+        projectId,
+      );
+  } catch {
+    evidenceReaderFailed = true;
+    evidence = [];
+  }
+
+  const projectResult = await runtime.oa.projectServices.getProject.execute({
+    projectId,
+  });
+  const doctrinePin = projectResult.ok
+    ? (projectResult.project.doctrinePackageRef ??
+      (lps.ok ? lps.livingProjectState.doctrinePackageRef : undefined))
+    : lps.ok
+      ? lps.livingProjectState.doctrinePackageRef
+      : undefined;
+  const blockersSnap = deriveLifecycleBlockersFromEpistemicItems(epistemicItems);
+
+  const failedMaterialDimensions =
+    new Set<LifecycleRecommendationMaterialDimension>();
+  if (!lps.ok) failedMaterialDimensions.add("lps");
+  if (trajectoryReaderFailed) failedMaterialDimensions.add("trajectory");
+  if (decisionReaderFailed) failedMaterialDimensions.add("decisions");
+  if (evidenceReaderFailed) failedMaterialDimensions.add("evidence");
+  if (epistemicReaderFailed) failedMaterialDimensions.add("epistemic_blockers");
+
+  const currentRecommendations = selectCurrentLifecycleRecommendations({
+    items: epistemicItems,
+    cycles,
+    lpsActiveCycleInstanceId: lpsActive,
+    lpsVersion: lps.ok ? lps.livingProjectState.version : null,
+    doctrinePackageId: doctrinePin?.doctrinePackageId ?? null,
+    doctrinePackageVersion: doctrinePin?.version ?? null,
+    doctrinePackageDigest: doctrinePin?.digest ?? null,
+    trajectory,
+    decisions,
+    evidence,
+    blockingReservationStatements: blockersSnap.statements,
+    failedMaterialDimensions,
+  });
+
+  const projection = projectPilotLifecycle({
     projectId,
     cycles,
-    lpsActiveCycleInstanceId: lps.ok
-      ? lps.livingProjectState.activeCycleInstanceId
-      : null,
+    lpsActiveCycleInstanceId: lpsActive,
+    currentRecommendations,
   });
+
+  if (
+    projection.selectedStatus &&
+    isPausedStatus(projection.selectedStatus) &&
+    projection.selectedCycleInstanceId
+  ) {
+    const selected = cycles.find(
+      (c) => c.cycleInstanceId === projection.selectedCycleInstanceId,
+    );
+    if (!selected) {
+      projection.resumeReconciliation = {
+        clean: false,
+        detailCode: "CYCLE_RESUME_DRIFT",
+        reason: "selected_cycle_missing",
+      };
+      projection.cta = { ...projection.cta, canResume: false };
+      return projection;
+    }
+
+    if (!projectResult.ok) {
+      projection.resumeReconciliation = {
+        clean: false,
+        detailCode: "CYCLE_RESUME_DRIFT",
+        reason: "project_unreadable",
+      };
+      projection.cta = { ...projection.cta, canResume: false };
+      return projection;
+    }
+
+    if (trajectoryReaderFailed) {
+      projection.resumeReconciliation = {
+        clean: false,
+        detailCode: "CYCLE_RESUME_DRIFT",
+        reason: "trajectory_reader_unavailable",
+      };
+      projection.cta = { ...projection.cta, canResume: false };
+      return projection;
+    }
+    if (decisionReaderFailed) {
+      projection.resumeReconciliation = {
+        clean: false,
+        detailCode: "CYCLE_RESUME_DRIFT",
+        reason: "decision_reader_unavailable",
+      };
+      projection.cta = { ...projection.cta, canResume: false };
+      return projection;
+    }
+    if (evidenceReaderFailed) {
+      projection.resumeReconciliation = {
+        clean: false,
+        detailCode: "CYCLE_RESUME_DRIFT",
+        reason: "evidence_reader_unavailable",
+      };
+      projection.cta = { ...projection.cta, canResume: false };
+      return projection;
+    }
+
+    try {
+      const siblingActiveExists = cycles.some(
+        (c) =>
+          c.status === "active" &&
+          c.cycleInstanceId !== selected.cycleInstanceId,
+      );
+
+      const reconciliation = assessResumeReconciliation({
+        cycle: selected,
+        projectId,
+        lpsReadable: lps.ok,
+        lpsVersion: lps.ok ? lps.livingProjectState.version : 0,
+        lpsActiveCycleInstanceId: lpsActive,
+        objective: lps.ok ? lps.livingProjectState.objective : "",
+        context: lps.ok ? (lps.livingProjectState.context ?? "") : "",
+        scope: lps.ok ? (lps.livingProjectState.scope ?? "") : "",
+        doctrinePackageId: doctrinePin?.doctrinePackageId,
+        doctrinePackageVersion: doctrinePin?.version,
+        doctrinePackageDigest: doctrinePin?.digest,
+        trajectory,
+        decisions,
+        evidence,
+        blockingReservationStatements: blockersSnap.statements,
+        blockerSourceUnreadable: epistemicReaderFailed,
+        siblingActiveExists,
+      });
+
+      projection.resumeReconciliation = {
+        clean: reconciliation.clean,
+        detailCode: reconciliation.clean ? null : "CYCLE_RESUME_DRIFT",
+        reason: reconciliation.clean
+          ? "assess_resume_reconciliation_clean"
+          : reconciliation.driftReasons.join(",") || "dirty",
+      };
+      projection.cta = {
+        ...projection.cta,
+        canResume: projection.cta.canResume && reconciliation.clean,
+      };
+    } catch {
+      projection.resumeReconciliation = {
+        clean: false,
+        detailCode: "CYCLE_RESUME_DRIFT",
+        reason: "reconciliation_facts_unavailable",
+      };
+      projection.cta = { ...projection.cta, canResume: false };
+    }
+  }
+
+  return projection;
 }

 /**

```

### DIFF: `projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index 7763c1ae..e24ad5eb 100644
--- a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
@@ -19,6 +19,10 @@ import {
   type NoraAgentsUsdAccounting,
   type NoraCampaignBudget,
 } from "@/lib/nora-cognitive-runtime";
+import { NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
+import { materializeLifecycleRecommendationFromStructuredOutput } from "@/lib/oa/cycle/application/lifecycleRecommendation/materializeFromProductTurn";
+import { NORA_LIFECYCLE_RECOMMENDATION_ACTOR } from "@/lib/oa/cycle/application/lifecycleRecommendation/noraActor";
+import type { LifecycleRecommendationMaterialDimension } from "@/lib/oa/cycle/application/lifecycleRecommendation/materialReaderContract";
 import { resolveWorkspaceRootFromAppCwd } from "@/lib/platform/repository/workspaceRoot";
 import { loadProjectRuntimeForAssistant } from "@/features/vertical-slice-ui/ProjectWorkspaceView";
 import { buildProjectSystemPrompt } from "./buildProjectSystemPrompt";
@@ -287,8 +291,150 @@ export async function orchestrateProjectAssistantTurn(input: {
       evalModelReasoningControl: input.evalModelReasoningControl,
       usdAccounting: input.usdAccounting,
       campaignBudget: input.campaignBudget,
+      outputType: NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE,
     });

+    let assistantText = turn.text;
+    let lifecycleRecommendationMaterialized: boolean | null = null;
+    let lifecycleRecommendationCode: string | null = null;
+
+    // Same Product turn — optional LR materialization (no second model call).
+    if (turn.structuredOutput !== undefined) {
+      const { extractLifecycleCandidateFromStructuredOutput } = await import(
+        "@/lib/oa/cycle/application/lifecycleRecommendation/materializeFromProductTurn"
+      );
+      const extracted = extractLifecycleCandidateFromStructuredOutput(
+        turn.structuredOutput,
+      );
+      if (extracted.narrative) {
+        assistantText = extracted.narrative;
+      }
+      if (!extracted.candidate) {
+        lifecycleRecommendationMaterialized = false;
+      } else {
+        const { getRuntimeApplicationService } = await import(
+          "@/lib/vertical-slice-runtime"
+        );
+        const runtime = getRuntimeApplicationService();
+        if (runtime.oa) {
+          const oa = runtime.oa;
+          const cycles = await oa.cycleServices.cycles.listByProject(
+            project.projectId,
+          );
+          const lps =
+            await oa.projectServices.getCurrentLivingProjectState.execute({
+              projectId: project.projectId,
+            });
+          const projectRow = await oa.projectServices.getProject.execute({
+            projectId: project.projectId,
+          });
+          const failedMaterialDimensions =
+            new Set<LifecycleRecommendationMaterialDimension>();
+          if (!lps.ok) {
+            failedMaterialDimensions.add("lps");
+          }
+          if (!projectRow.ok) {
+            failedMaterialDimensions.add("doctrine");
+          }
+
+          let trajectory = null;
+          try {
+            const traj = await oa.cycleServices.getCurrentTrajectory.execute({
+              projectId: project.projectId,
+            });
+            trajectory = traj.ok ? traj.trajectory : null;
+          } catch {
+            failedMaterialDimensions.add("trajectory");
+            trajectory = null;
+          }
+
+          let decisions: Awaited<
+            ReturnType<typeof oa.decisionServices.decisions.listByProject>
+          > = [];
+          try {
+            decisions = await oa.decisionServices.decisions.listByProject(
+              project.projectId,
+            );
+          } catch {
+            failedMaterialDimensions.add("decisions");
+            decisions = [];
+          }
+
+          let evidence: Awaited<
+            ReturnType<
+              typeof oa.evidenceReviewServices.repository.listByProject
+            >
+          > = [];
+          try {
+            evidence =
+              await oa.evidenceReviewServices.repository.listByProject(
+                project.projectId,
+              );
+          } catch {
+            failedMaterialDimensions.add("evidence");
+            evidence = [];
+          }
+
+          let epistemicItems: Awaited<
+            ReturnType<typeof oa.cycleServices.epistemic.listByProject>
+          > = [];
+          try {
+            epistemicItems = await oa.cycleServices.epistemic.listByProject(
+              project.projectId,
+            );
+          } catch {
+            failedMaterialDimensions.add("epistemic_blockers");
+            epistemicItems = [];
+          }
+
+          const doctrinePin = projectRow.ok
+            ? (projectRow.project.doctrinePackageRef ??
+              (lps.ok ? lps.livingProjectState.doctrinePackageRef : undefined))
+            : undefined;
+          const producedAt = new Date().toISOString();
+          const mat =
+            await materializeLifecycleRecommendationFromStructuredOutput({
+              projectId: project.projectId,
+              structuredOutput: turn.structuredOutput,
+              updateEpistemicState: oa.cycleServices.updateEpistemicState,
+              facts: {
+                cycles,
+                lpsActiveCycleInstanceId: lps.ok
+                  ? lps.livingProjectState.activeCycleInstanceId
+                  : null,
+                lpsVersion: lps.ok ? lps.livingProjectState.version : null,
+                doctrinePackageId: doctrinePin?.doctrinePackageId ?? null,
+                doctrinePackageVersion: doctrinePin?.version ?? null,
+                doctrinePackageDigest: doctrinePin?.digest ?? null,
+                trajectory,
+                decisions,
+                evidence,
+                epistemicItems,
+                failedMaterialDimensions,
+              },
+              producedAt,
+              createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
+              correlationId: `f1:${project.projectId}`,
+            });
+          if (mat.narrative) {
+            assistantText = mat.narrative;
+          }
+          if (mat.recommendationAttempted) {
+            lifecycleRecommendationMaterialized =
+              mat.materialization?.ok === true;
+            lifecycleRecommendationCode =
+              mat.materialization && !mat.materialization.ok
+                ? mat.materialization.code
+                : mat.materialization?.ok
+                  ? null
+                  : "LR_MATERIALIZE_UNKNOWN";
+          } else {
+            lifecycleRecommendationMaterialized = false;
+          }
+        }
+      }
+    }
+
     const { toolEvents, sources, readCoverage } = collectToolTelemetry(
       sink.events,
     );
@@ -359,7 +505,7 @@ export async function orchestrateProjectAssistantTurn(input: {
     return {
       ok: true,
       status,
-      text: turn.text,
+      text: assistantText,
       mode: modeResolution.mode,
       presentation,
       model: turn.usage?.model ?? null,
@@ -382,6 +528,8 @@ export async function orchestrateProjectAssistantTurn(input: {
         turn.memoryBCompactionDetails?.stalePriorInvalidated === true,
       mw3,
       mw4,
+      lifecycleRecommendationMaterialized,
+      lifecycleRecommendationCode,
     };
   } catch (error) {
     const message =

```

### DIFF: `projects/sfia-studio/app/features/project-assistant/types.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/types.ts b/projects/sfia-studio/app/features/project-assistant/types.ts
index ed914e60..1f5d8d5c 100644
--- a/projects/sfia-studio/app/features/project-assistant/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/types.ts
@@ -211,6 +211,13 @@ export type ProjectAssistantSendSuccess = {
   /** MW5 — challenge / clarification / Critical ordering / escalation (when assessed). */
   mw5?: Mw5CognitiveSurfaceDto | null;
   f2?: F2TurnPayload;
+  /**
+   * LR CORR-DELIVERY-02 — optional Product-turn Recommendation materialization.
+   * null = not attempted / no structured turn; false = none or fail-closed; true = persisted.
+   */
+  lifecycleRecommendationMaterialized?: boolean | null;
+  /** Fail-closed detail code when materialization was attempted and refused. */
+  lifecycleRecommendationCode?: string | null;
   /**
    * MW6↔Auth — present when send used executionContractId governed composition.
    * Server-built; never a client-supplied authority object.

```

### DIFF: `projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
index 34bedf33..8681e19d 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
@@ -217,6 +217,34 @@ export function createProviderAgentsModel(
       }
       const tools = toolDefinitionsFromModelRequest(request);
       const round = await completeRound({ items, tools });
+      if (round.kind === "message") {
+        const name =
+          request.outputType &&
+          typeof request.outputType === "object" &&
+          "name" in request.outputType
+            ? String((request.outputType as { name?: unknown }).name ?? "")
+            : "";
+        if (name === "nora_product_turn_with_optional_lr") {
+          let text = round.text;
+          let alreadyStructured = false;
+          try {
+            const parsed = JSON.parse(text) as unknown;
+            alreadyStructured =
+              !!parsed &&
+              typeof parsed === "object" &&
+              typeof (parsed as { narrative?: unknown }).narrative === "string";
+          } catch {
+            alreadyStructured = false;
+          }
+          if (!alreadyStructured) {
+            text = JSON.stringify({
+              narrative: round.text,
+              lifecycleRecommendation: null,
+            });
+          }
+          return roundResultToModelResponse({ ...round, text });
+        }
+      }
       return roundResultToModelResponse(round);
     },
     async *getStreamedResponse(): AsyncIterable<never> {

```

### DIFF: `projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
index d941406b..98652274 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
@@ -14,6 +14,7 @@ import {
   Runner,
   type Model,
   type Session,
+  type AgentOutputType,
 } from "@openai/agents";
 import type { ConversationProvider } from "@/lib/platform/ai";
 import type { EventSink } from "@/lib/platform/observability/eventSink";
@@ -136,6 +137,11 @@ export type RunNoraAgentsTurnInput = {
    * Runtime-generic hook — nora-eval injects BudgetTracker bridge. Not authority.
    */
   usdAccounting?: NoraAgentsUsdAccounting;
+  /**
+   * LR-D02 — optional Agents SDK structured outputType on the same Runner.
+   * When set, finalOutput may be a structured object (candidate data only).
+   */
+  outputType?: AgentOutputType;
 };

 export type RunNoraAgentsTurnHostedSearchObserve = {
@@ -469,6 +475,7 @@ export async function runNoraAgentsTurn(
     instructions: input.systemInstructions,
     model: model as never,
     tools,
+    ...(input.outputType ? { outputType: input.outputType } : {}),
   });

   const runner = createNoraAgentsRunner(
@@ -485,6 +492,7 @@ export async function runNoraAgentsTurn(
     (session ? "available_with_history" : "unavailable");

   let text = "";
+  let structuredOutput: unknown = undefined;
   let lastResponseId: string | null = null;
   let usageAgg: {
     inputTokens?: number;
@@ -551,7 +559,45 @@ export async function runNoraAgentsTurn(
           ? result.finalOutput
           : result.finalOutput == null
             ? ""
-            : String(result.finalOutput);
+            : typeof result.finalOutput === "object"
+              ? JSON.stringify(result.finalOutput)
+              : String(result.finalOutput);
+      if (input.outputType && result.finalOutput != null) {
+        structuredOutput =
+          typeof result.finalOutput === "string"
+            ? (() => {
+                try {
+                  return JSON.parse(result.finalOutput) as unknown;
+                } catch {
+                  return result.finalOutput;
+                }
+              })()
+            : result.finalOutput;
+        // Plain-string Fake/Scripted responses under product-turn outputType →
+        // coerce to narrative + null Recommendation (preserve conversational text).
+        if (
+          typeof structuredOutput === "string" &&
+          input.outputType &&
+          typeof input.outputType === "object" &&
+          "name" in input.outputType &&
+          (input.outputType as { name?: string }).name ===
+            "nora_product_turn_with_optional_lr"
+        ) {
+          structuredOutput = {
+            narrative: structuredOutput,
+            lifecycleRecommendation: null,
+          };
+        }
+        if (
+          structuredOutput &&
+          typeof structuredOutput === "object" &&
+          "narrative" in structuredOutput &&
+          typeof (structuredOutput as { narrative?: unknown }).narrative ===
+            "string"
+        ) {
+          text = (structuredOutput as { narrative: string }).narrative;
+        }
+      }
       lastResponseId = result.lastResponseId ?? null;
       usageAgg = result.state?.usage ?? null;
       runNewItems = Array.isArray(result.newItems) ? [...result.newItems] : [];
@@ -677,6 +723,7 @@ export async function runNoraAgentsTurn(
     memoryBAvailability,
     memoryBCompactionState: "none",
     memoryBCompactionDetails: null,
+    ...(structuredOutput !== undefined ? { structuredOutput } : {}),
     ...(hostedSearchObserve ? { hostedSearchObserve } : {}),
     ...(budgetObserve ? { budgetObserve } : {}),
     ...(usdObserve ? { usdObserve } : {}),

```

### DIFF: `projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
index 463db0da..ac09a67f 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
@@ -207,6 +207,11 @@ export type RunNoraCognitiveTurnInput = {
    * Passed through to runNoraAgentsTurn — not authority.
    */
   usdAccounting?: NoraAgentsUsdAccounting;
+  /**
+   * LR CORR-DELIVERY-02 — optional Agents structured outputType on the same Runner.
+   * Threaded identically on Memory-B available and unavailable paths.
+   */
+  outputType?: import("@openai/agents").AgentOutputType;
 };

 /**
@@ -745,6 +750,7 @@ export async function runNoraCognitiveTurn(
               campaignId: input.campaignBudget.campaignId,
             }
           : undefined,
+      outputType: input.outputType,
     });
     const observations = [
       ...(input.sourceObservationFacts ?? []),
@@ -910,6 +916,7 @@ export async function runNoraCognitiveTurn(
               campaignId: input.campaignBudget.campaignId,
             }
           : undefined,
+      outputType: input.outputType,
     });
     const observations = [
       ...(input.sourceObservationFacts ?? []),

```

### DIFF: `projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
index 95448a25..dec56300 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
@@ -63,6 +63,11 @@ export type NoraCognitiveTurnResult = {
   mw4Grounding?: Mw4GroundingTurnSurface;
   /** MW6 — source strategy + normalized external observations (non-authoritative). */
   mw6SourceIntelligence?: Mw6SourceIntelligenceSurface;
+  /**
+   * LR-D02 — structured Agents finalOutput when outputType was requested.
+   * Candidate data only — never Product truth until SFIA validation.
+   */
+  structuredOutput?: unknown;
   /**
    * MW6↔Auth — authority binding axes from preflight (composition proof).
    * Present when campaign + governedAuthority composition evaluated.

```

### DIFF: `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleProjection.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleProjection.ts b/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleProjection.ts
index 29375d8c..45ff1334 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleProjection.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleProjection.ts
@@ -13,6 +13,7 @@ import {
   isStartableCandidateStatus,
   isTerminalCycleStatus,
 } from "../domain/lifecycleInvariants";
+import type { LifecycleRecommendationEnvelope } from "./lifecycleRecommendation/types";

 export type PilotLifecycleProjection = {
   projectId: string;
@@ -40,6 +41,17 @@ export type PilotLifecycleProjection = {
     canFinalize: boolean;
     canCancel: boolean;
   };
+  /**
+   * Companion — CURRENT Nora lifecycle Recommendations (never eligibility).
+   * Recommendation ≠ canFinalize / canStart / HumanDecision.
+   */
+  currentRecommendations?: LifecycleRecommendationEnvelope[];
+  /** Resume reconciliation when selected cycle is paused — never cleared by HD alone. */
+  resumeReconciliation?: {
+    clean: boolean;
+    detailCode?: string | null;
+    reason?: string | null;
+  } | null;
 };

 export function projectPilotLifecycle(input: {
@@ -47,6 +59,8 @@ export function projectPilotLifecycle(input: {
   cycles: readonly CycleInstance[];
   lpsActiveCycleInstanceId: string | null | undefined;
   assessment?: FinalizationAssessment | null;
+  currentRecommendations?: LifecycleRecommendationEnvelope[];
+  resumeReconciliation?: PilotLifecycleProjection["resumeReconciliation"];
 }): PilotLifecycleProjection {
   const byId = new Map(
     input.cycles.map((c) => [c.cycleInstanceId, c] as const),
@@ -118,5 +132,7 @@ export function projectPilotLifecycle(input: {
     selectionAmbiguous,
     assessment: input.assessment ?? null,
     cta,
+    currentRecommendations: input.currentRecommendations ?? [],
+    resumeReconciliation: input.resumeReconciliation ?? null,
   };
 }

```

### DIFF: `projects/sfia-studio/app/lib/oa/cycle/application/updateEpistemicState.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/application/updateEpistemicState.ts b/projects/sfia-studio/app/lib/oa/cycle/application/updateEpistemicState.ts
index 8f7e2378..335e282d 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/application/updateEpistemicState.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/application/updateEpistemicState.ts
@@ -133,6 +133,9 @@ export class UpdateEpistemicState {
             provenance: raw.provenance
               ? structuredClone(raw.provenance)
               : undefined,
+            lifecycleRecommendation: raw.lifecycleRecommendation
+              ? structuredClone(raw.lifecycleRecommendation)
+              : undefined,
           };

           if (this.epistemic.saveForProject) {

```

### DIFF: `projects/sfia-studio/app/lib/oa/cycle/domain/types.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/domain/types.ts b/projects/sfia-studio/app/lib/oa/cycle/domain/types.ts
index 0a98ae95..7b7ebd2a 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/domain/types.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/domain/types.ts
@@ -251,6 +251,45 @@ export type ProjectTrajectory = {
   decidedOptionRef?: string;
 };

+/**
+ * Optional typed Lifecycle Recommendation payload (Option A).
+ * Persisted on EpistemicItem; CURRENT/STALE never stored here.
+ */
+export type EpistemicLifecycleRecommendation = {
+  intent: "FINALIZE_CURRENT_CYCLE" | "NEXT_CYCLE";
+  basisFingerprint: string;
+  basisRefs: {
+    projectId: string;
+    subjectCycleInstanceId?: string | null;
+    subjectCycleStatus?: string | null;
+    targetCycleInstanceId?: string | null;
+    targetCycleTypeId?: string | null;
+    lpsActiveCycleInstanceId?: string | null;
+    lpsVersion?: number | null;
+    trajectoryId?: string | null;
+    trajectoryVersion?: number | null;
+    trajectoryStatus?: string | null;
+    finalizeAccepted?: boolean | null;
+    resumeClean?: boolean | null;
+    reservationBlockingCount?: number | null;
+    /** Optional — doctrine pin when recommendation basis is doctrine-sensitive. */
+    doctrinePackageId?: string | null;
+    doctrinePackageVersion?: string | null;
+    doctrinePackageDigest?: string | null;
+    /** Optional — intent-scoped accepted HD fingerprint. */
+    decisionFingerprint?: string | null;
+    /** Optional — FINALIZE-relevant Evidence fingerprint. */
+    evidenceFingerprint?: string | null;
+    /** Optional — blocking Reservation fingerprint. */
+    blockerFingerprint?: string | null;
+  };
+  semanticKey: string;
+  subjectCycleInstanceId: string | null;
+  targetCycleInstanceId: string | null;
+  targetCycleTypeId: string | null;
+  authority: "none";
+};
+
 export type EpistemicItem = {
   schemaVersion: "0.1.0-oa";
   epistemicItemId: string;
@@ -265,6 +304,8 @@ export type EpistemicItem = {
   relatedObjects?: string[];
   blocking?: boolean;
   provenance?: ProvenanceRecord;
+  /** Optional — absent on historical / non-lifecycle Recommendations. */
+  lifecycleRecommendation?: EpistemicLifecycleRecommendation;
 };

 export type CkcResolution = {
@@ -385,6 +426,7 @@ export type UpdateEpistemicStateRequest = {
     relatedObjects?: string[];
     blocking?: boolean;
     provenance?: ProvenanceRecord;
+    lifecycleRecommendation?: EpistemicLifecycleRecommendation;
     /**
      * Forbidden auto-promotion signal — if true and type is DecisionRef
      * while superseding a Hypothesis, refused.

```

### DIFF: `projects/sfia-studio/app/lib/oa/cycle/index.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/index.ts b/projects/sfia-studio/app/lib/oa/cycle/index.ts
index 09d58153..9a779465 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/index.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/index.ts
@@ -61,6 +61,7 @@ export {
   projectPilotLifecycle,
   type PilotLifecycleProjection,
 } from "./application/lifecycleProjection";
+export * from "./application/lifecycleRecommendation";
 export {
   deriveLifecycleBlockersFromEpistemicItems,
   lifecycleBlockersFromReaderFailure,

```

### DIFF: `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/epistemic/epistemic-item.schema.json`

```diff
diff --git a/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/epistemic/epistemic-item.schema.json b/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/epistemic/epistemic-item.schema.json
index e4b4ea82..5a8dd10e 100644
--- a/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/epistemic/epistemic-item.schema.json
+++ b/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/epistemic/epistemic-item.schema.json
@@ -79,6 +79,9 @@
     },
     "provenance": {
       "$ref": "../common/provenance-record.schema.json"
+    },
+    "lifecycleRecommendation": {
+      "$ref": "lifecycle-recommendation.schema.json"
     }
   }
 }

```

## Untracked lifecycleRecommendation tree listing + shas
- projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/basisFingerprint.ts sha256=b105c2a39f8d17aa732d6c99592c27caaeb24c2330708b2c00973ef91e5a051d bytes=3218
- projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/currentness.ts sha256=a007cd91e476d7b6191c4a67d9ba68e9f061c72fc6d67604a47e727a82b15ddf bytes=7306
- projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/index.ts sha256=20894b81dfe0d5972f34ed8c960bfa3cea5cb31d90e285b1f5fe87567d53f379 bytes=405
- projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/materialReaderContract.ts sha256=c3bf4386e53214191ed98c2c7109fd6c1e66fe70288a451ef0c58347c4a68c34 bytes=2298
- projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/materializeFromProductTurn.ts sha256=6b7e7c2c5e5e82409eb05434be91ad0c811ad0fff326e59c8264f708db0a7326 bytes=6051
- projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/materializeLifecycleRecommendation.ts sha256=008f8d98bd2d7c7dfd62205cac3ff9fb84bc2b2a1b5a092d8ea4b6efac6ac385 bytes=7057
- projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/noraActor.ts sha256=bb0dbd36123c8b806cd45cf84f83ef9ec74a83b5495d04cbf75d5be4b0c78cf4 bytes=557
- projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/produceLifecycleRecommendation.ts sha256=a639e41440f58e01a3c5a380cd6842f1e3f359950c5308cb2f2e96e76f2c2453 bytes=5075
- projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/resolveCanonicalBasis.ts sha256=8839fa2a41e1760cbf6ba29c634ac97d33bad09ade2878958bd609a3ca480a40 bytes=5488
- projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/types.ts sha256=475c8d47201c7534de65b516cb26561acbf4824b9857c720d9033ecadacaa4f9 bytes=2446
- projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/validateLifecycleRecommendation.ts sha256=3fca36a9ad6418dcb79aa3d2fa11ec364cb2de8c1dbe763cdc011405dd85f368 bytes=5111

## Content Coverage checklist
- created files full content: YES
- modified files useful complete diff: YES
- modeled schema delta: NONE (this cycle)
- provenance proof complete: YES
- basis classification complete: YES
- write/read parity evidence complete: YES
- reader fail-closed evidence complete: YES
- true BASIS-08 evidence complete: YES
- R1–R15 evidence complete: YES
- synthesis only: NO
- artificial truncation present: NO
- all Product files represented: YES
- review pack verdict: COMPLETE


ANTI-TRUNCATION LOCAL = ZERO
FULL REVIEW PACK SIZE THRESHOLD: recorded below
