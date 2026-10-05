P5-S01 — CORRECTION PASS 01 —
CRITICAL REVIEW BLOCKERS CP1–CP5 —
D0 / ZERO REAL —
FULL REVIEW PACK

Timestamp: 2026-10-05 09:51:23 +0200
Cycle: 8 — Delivery / implementation correction
Profile: Critical
Typology: EVOL
Morris P5 AUTHORIZATION: CONSUMED (GO P5)
Morris Correction GO: P5-S01 CORRECTION PASS 01 = YES — CONSUMED

======================================================================
LOCAL GIT TRUTH
======================================================================
Repository: mcleland147/sfia-workspace (worktree)
Branch: delivery/sfia-studio-product-simplification-p5-s01-integrated-product-vertical-slice
HEAD / base: 04527bede4a3aad1853387b9eb39af3fe0615412
Expected origin/main: 04527bede4a3aad1853387b9eb39af3fe0615412
MATCH: YES
P4 final: PR #554 MERGED · CI #676 SUCCESS · Required Gate SUCCESS
Staged: EMPTY
Project commit/push/PR/merge this pass: NO

git status --short:
```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/automaticProjectResume.ui.test.tsx
 M projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.module.css
 M projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
 M projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.module.css
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LpsSurface.tsx
 M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/reasoningCapability.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
 M projects/sfia-studio/app/lib/nora-eval/capabilityBudget.ts
 M projects/sfia-studio/app/lib/platform/observability/types.ts
 M projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
 M projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
?? .tmp-sfia-review/p5-s01-cp01-diff-stat.txt
?? .tmp-sfia-review/p5-s01-cp01-routing-capability.diff
?? .tmp-sfia-review/p5-s01-diff-stat.txt
?? .tmp-sfia-review/p5-s01-frontend-diff.txt
?? .tmp-sfia-review/p5-s01-name-status.txt
?? .tmp-sfia-review/p5-s01-roadmap-diff.txt
?? .tmp-sfia-review/p5-s01-routing-diff.txt
?? .tmp-sfia-review/visual/
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p5.s01.cognitiveRouting.d0.test.ts
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p5.s01.deterministicBypass.d0.test.ts
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p5.s01.integratedProduct.d0.test.ts
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p5.s01.semanticInvariants.d0.test.ts
?? projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s01.workspaceLayout.ui.test.tsx
?? projects/sfia-studio/app/features/pre-m6-product-ui/ProductRailRecents.tsx
?? projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ProjectContextSummary.module.css
?? projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ProjectContextSummary.tsx
?? projects/sfia-studio/app/features/pre-m6-product-ui/workspaceContextPresentation.ts
?? projects/sfia-studio/app/lib/nora-cognitive-runtime/cognitiveRoutingPolicy.ts
?? projects/sfia-studio/app/public/branding/
?? projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md

```

git diff --name-status:
```
M	.tmp-sfia-review/chatgpt-review.md
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/automaticProjectResume.ui.test.tsx
M	projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
M	projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.module.css
M	projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
M	projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
M	projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.module.css
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LpsSurface.tsx
M	projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/reasoningCapability.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
M	projects/sfia-studio/app/lib/nora-eval/capabilityBudget.ts
M	projects/sfia-studio/app/lib/platform/observability/types.ts
M	projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
M	projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json

```

Untracked (relevant):
```
.tmp-sfia-review/p5-s01-cp01-diff-stat.txt
.tmp-sfia-review/p5-s01-cp01-routing-capability.diff
.tmp-sfia-review/p5-s01-diff-stat.txt
.tmp-sfia-review/p5-s01-frontend-diff.txt
.tmp-sfia-review/p5-s01-name-status.txt
.tmp-sfia-review/p5-s01-roadmap-diff.txt
.tmp-sfia-review/p5-s01-routing-diff.txt
.tmp-sfia-review/visual/
projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p5.s01.cognitiveRouting.d0.test.ts
projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p5.s01.deterministicBypass.d0.test.ts
projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p5.s01.integratedProduct.d0.test.ts
projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p5.s01.semanticInvariants.d0.test.ts
projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s01.workspaceLayout.ui.test.tsx
projects/sfia-studio/app/features/pre-m6-product-ui/ProductRailRecents.tsx
projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ProjectContextSummary.module.css
projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ProjectContextSummary.tsx
projects/sfia-studio/app/features/pre-m6-product-ui/workspaceContextPresentation.ts
projects/sfia-studio/app/lib/nora-cognitive-runtime/cognitiveRoutingPolicy.ts
projects/sfia-studio/app/public/branding/
projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md
```

git diff --cached --name-status:
```
(empty)
```

======================================================================
PREVIOUS HANDOFF
======================================================================
Previous handoff SHA: 50314dfc784544724902ac90865eef1331f808e7
Previous blob: 9e04239e1532f045ccee9ad9d5c20dbc04f898ad
Previous pack: P5-S01 FIRST INTEGRATED PRODUCT VERTICAL SLICE FULL REVIEW PACK

======================================================================
P5 / P5-S01 STATE
======================================================================
P5 AUTHORIZED / STARTED / IN PROGRESS = YES
P5-S01 before correction: LOCAL CANDIDATE (Critical Review NOT READY)
P5-S01 after correction: LOCAL CANDIDATE — D0 PASS WITH VISUAL RESERVES
R1/R2/R3 = NOT STARTED
ZERO REAL = YES
READY FOR REAL = NO
runtime v3 = NON ADOPTED

======================================================================
PREVIOUS CRITICAL REVIEW VERDICT
======================================================================
NOT READY — P5-S01 CRITICAL REVIEW INCOMPLETE
CORRECTION PASS REQUIRED BEFORE MORRIS P5-S01 GIT INTEGRATION GATE

CP1–CP5 matrix BEFORE correction:
| CP | Status before |
| CP1 FULL Vitest | NOT PROVEN |
| CP2 Product server-path D0 | NOT PROVEN (direct runNoraCognitiveTurn only) |
| CP3 Deterministic NO-LLM | NOT PROVEN (KEEP asserted only) |
| CP4 FinOps snapshot | INCORRECT / unqualified prices |
| CP5 Pipeline order | capability → quality (WRONG vs P4) |

======================================================================
SOURCES READ
======================================================================
Build Doctrine · Roadmap · C1 · P1–P5 · v3 30/32/33/34/35/37 · process guides · prior handoff · CURRENT code (routing/capability/actions/F2/tests)

======================================================================
FILES CHANGED BY CORRECTION PASS 01
======================================================================
Principal:
- cognitiveRoutingPolicy.ts (pipeline order + reason codes)
- capabilityBudget.ts buildP5TargetCapabilityManifest (Standard short-context prices)
- p5.s01.cognitiveRouting.d0.test.ts (order/prices/D0-10 harden)
- p5.s01.integratedProduct.d0.test.ts (CP2 server-path)
- p5.s01.deterministicBypass.d0.test.ts (CP3 NEW)
- importBoundaries.test.ts (ProductRailRecents allowlist — S01-caused)
- production-runtime-reference.manifest.json (digest refresh — S01-caused)
- 05-…integrated-delivery.md (Correction Pass 01 evidence)
- sfia-studio-convergence-roadmap.md (living tip)

======================================================================
CP1 — FULL VITEST
======================================================================
Command (from projects/sfia-studio/app):
  npm test
  (= vitest run per package.json)

Result after S01-caused fixups:
  Test Files  465 passed | 17 skipped (482)
  Tests       5178 passed | 137 skipped (5315)
  Duration    ~118s
  EXIT        0

FULL VITEST = PASS

First full-suite run exposed 2 failures (classification A — caused by P5-S01):
1. importBoundaries — ProductRailRecents.tsx new allowlisted entry
2. productionRuntimeReference digests for orchestrateTurn / runNoraCognitiveTurn / useProductConversation
Both fixed; full suite re-run PASS.

Tail of FULL npm test:
```
[d1.intake] {"event":"intake_existing_project_conflict","ts":"2026-10-05T07:48:53.627Z","status":"STALE","projectId":"proj-56adac10-7364-49c3-880c-06401c3b64d8","sessionLocalId":"s5","durationMs":0,"errorCode":"CONFLICT","proposalId":"rrp-5"}

 ✓ __tests__/project-assistant/orchestrateTurn.test.ts (8 tests) 331ms
stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > analyze-only and cancel produce no mutation
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-10-05T07:48:53.635Z","status":"ANALYZE_ONLY","sessionLocalId":"s6","proposalId":"rrp-6"}
[d1.intake] {"event":"intake_analyze_only_completed","ts":"2026-10-05T07:48:53.635Z","status":"NO_MUTATION","sessionLocalId":"s6","durationMs":0,"proposalId":"rrp-6"}
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-10-05T07:48:53.636Z","status":"CANCEL","sessionLocalId":"s6","proposalId":"rrp-6"}
[d1.intake] {"event":"intake_confirmation_cancelled","ts":"2026-10-05T07:48:53.636Z","status":"CANCELLED","sessionLocalId":"s6","durationMs":0,"proposalId":"rrp-6"}

stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > missing existing project returns CONFLICT
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-10-05T07:48:53.645Z","status":"CONFIRM_EXISTING_PROJECT_CONTEXT","sessionLocalId":"s7","proposalId":"rrp-7"}
[d1.intake] {"event":"intake_existing_project_conflict","ts":"2026-10-05T07:48:53.645Z","status":"NOT_FOUND","projectId":"proj-missing-does-not-exist","sessionLocalId":"s7","durationMs":0,"errorCode":"NOT_FOUND","proposalId":"rrp-7"}

 ✓ __tests__/d1/intake-c4.test.ts (10 tests) 88ms
 ✓ __tests__/pre-m6-product-ui/cycleReservationMemoryRail.ui.test.tsx (2 tests) 151ms
 ✓ __tests__/pre-m6-product-ui/useRunningAttemptO3Observation.test.tsx (4 tests) 57ms
 ✓ __tests__/auth/binding-s1-adversarial.test.ts (20 tests) 128ms
 ✓ __tests__/nora-cognitive-runtime/cycleReservationPiloting.d0.test.ts (9 tests) 19ms
 ✓ __tests__/oa/cycle/qualifyCycleWithCkc.test.ts (13 tests) 18ms
 ✓ __tests__/project-assistant/presentationLabels.test.ts (39 tests) 42ms
 ✓ __tests__/recommendation-vs-decision.test.tsx (2 tests) 115ms
 ✓ __tests__/auth/better-auth-foundation.test.ts (5 tests) 115ms
 ✓ __tests__/project-assistant/recommendationDecisionIntegrity.pjReproof.d0.test.ts (11 tests) 23ms
 ✓ __tests__/auth/allowlist-actor-s1.test.ts (13 tests) 9ms
 ✓ __tests__/pre-m6-product-ui/pilotContractPresentation.d0.test.ts (2 tests) 3ms
 ✓ __tests__/nora-cognitive-runtime/reservationContextPilotConfirmation.d0.test.ts (6 tests) 9ms
 ✓ __tests__/project-assistant/pilotNoraStudioSemanticContinuity.d0.test.ts (15 tests) 10ms
 ✓ __tests__/fixtures.test.ts (2 tests) 4ms
 ✓ __tests__/ops1/domain.test.ts (6 tests) 5ms
 ✓ __tests__/oa/cycle/ckcQualificationResult.test.ts (2 tests) 5ms
 ✓ __tests__/oa/execution-contract/checkpointE.docsWriteEvidenceCoherence.d0.test.ts (9 tests) 8ms
 ✓ __tests__/ops1/globalModeBadge.test.ts (6 tests) 4ms
 ✓ __tests__/project-assistant/pilotExecutionExperience.trustedLaunch.d0.test.ts (3 tests) 3ms
 ✓ __tests__/project-assistant/pilotExecutionExperience.recoveryOwnership.d0.test.ts (4 tests) 3ms

 Test Files  465 passed | 17 skipped (482)
      Tests  5178 passed | 137 skipped (5315)
   Start at  09:46:57
   Duration  118.14s (transform 21.15s, setup 42.22s, collect 435.24s, tests 389.40s, environment 38.48s, prepare 39.18s)

```

======================================================================
CP2 — TRUE PRODUCT SERVER-PATH D0
======================================================================
Seam selected: projectAssistantSendAction (existing test-only provider injection)

Exact call chain proven:
  createProject (real local Product SQLite)
  → projectAssistantSendAction
  → orchestrateAssistantSend
  → analyzeIntent (F2 / Fake structured)
  → composeStudioCognitiveContext
  → orchestrateProjectAssistantTurn
  → runNoraCognitiveTurn
  → CWP → Strategy → decideCognitiveRouting
  → FakeConversationProvider / SAME Agents Runner

Assertions:
  result.ok · real projectId/lpsId · cognitiveRuntime=agents
  decideCognitiveRouting called · selectedModel in Luna/Sol/Astra
  policyVersion = P5_COGNITIVE_ROUTING_POLICY_VERSION
  COGNITIVE_STRATEGY_SELECTED + COGNITIVE_ROUTING_SELECTED emitted
  client DTO does NOT expose routing internals
  fetch never called · no HD/authority manufactured · same Product SQLite

CP2 verdict: PASS

======================================================================
CP3 — DETERMINISTIC NO-LLM BYPASS
======================================================================
Operation: composeStudioCognitiveContext (existing deterministic Product projection)

Evidence:
  runNoraCognitiveTurn calls = 0
  decideCognitiveRouting calls = 0
  Fake complete/completeStructured/completeRound = 0
  live fetch = 0
  COGNITIVE_STRATEGY_SELECTED = 0
  COGNITIVE_ROUTING_SELECTED = 0
  Product Project/LPS identity preserved

CP3 verdict: PASS

======================================================================
CP4 — FINOPS SNAPSHOT
======================================================================
Previous incorrect illustrative values (e.g. Luna 0.2/1.2, Sol 4/20) replaced.

Official Standard SHORT CONTEXT (≤272K) revalidated 2026-10-05:
  gpt-6-luna:  input=0.10  output=0.50
  gpt-6.1-sol: input=2.00  output=10.00
  gpt-6-astra: input=10.00 output=50.00

sourceName / sourceNote / caveats document:
  Standard tier · short-context · dated · replaceable FinOps ordering · ≠ doctrine · entitlement unverified · revalidate before REAL

Historical MW0 GPT-5.6: UNCHANGED (FREEZE) — test P5-D0-03

CP4 tests: P5-D0-04b PASS
CP4 verdict: PASS
Claim: dated price-based ordering hint ONLY · REAL spend = 0

======================================================================
CP5 — PIPELINE ORDER
======================================================================
BEFORE (wrong):
  candidates → provider capability → Quality Floor → FinOps

AFTER (P4 contract):
  candidates → Quality Floor → provider capability → optional budget among sufficient → minimum-sufficient
  reason codes: candidates / qualitySufficient / qualityRejected / providerCompatible / providerRejected / budgetEligible / selected / pipeline:quality→provider→finops
  fail-closed: NO_SUFFICIENT_CONFIG · PROVIDER_INCOMPATIBLE_WITH_QUALITY_FLOOR · BUDGET_EXCLUDES_ALL_SUFFICIENT · BUDGET_MUST_NOT_DOWNGRADE_BELOW_FLOOR

Unknown-model harden (P5-D0-10):
  manifest with no target cohort models → decideCognitiveRouting ok:false with PROVIDER_INCOMPATIBLE_WITH_QUALITY_FLOOR

Order test P5-D0-05b:
  below-floor Luna eliminated at Quality stage
  Sol high/xhigh quality-sufficient but provider-rejected
  selection from remaining quality+provider set

CP5 verdict: PASS

======================================================================
TARGETED / ADJACENT / QUALITY GATES
======================================================================
Targeted P5 (26 tests):
```

 RUN  v3.2.7 /Users/morris/Projects/sfia-studio-chat-first-product-simplification-p3/projects/sfia-studio/app

 ✓ __tests__/pre-m6-product-ui/p5.s01.workspaceLayout.ui.test.tsx (1 test) 34ms
 ✓ __tests__/nora-cognitive-runtime/p5.s01.semanticInvariants.d0.test.ts (3 tests) 3ms
 ✓ __tests__/nora-cognitive-runtime/p5.s01.cognitiveRouting.d0.test.ts (19 tests) 31ms
 ✓ __tests__/nora-cognitive-runtime/p5.s01.deterministicBypass.d0.test.ts (1 test) 53ms
 ✓ __tests__/nora-cognitive-runtime/p5.s01.integratedProduct.d0.test.ts (2 tests) 98ms

 Test Files  5 passed (5)
      Tests  26 passed (26)
   Start at  09:43:16
   Duration  2.61s (transform 1.52s, setup 376ms, collect 5.35s, tests 219ms, environment 378ms, prepare 264ms)

```

Adjacent MW2+F2+Pre-M6 (197 tests):
```
 ✓ __tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx (3 tests) 439ms
 ✓ __tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx (2 tests) 483ms
   ✓ CR-PCONT-05 TrajectorySurface post-execution recovery > preserves Attempt/ProductOutcome/postEvidence after project_trajectory proposeOptions; no false Proposal conflict  455ms
 ✓ __tests__/pre-m6-product-ui/runningAttemptRefresh.ui.test.tsx (7 tests) 540ms
 ✓ __tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx (6 tests) 125ms
 ✓ __tests__/pre-m6-product-ui/projectWorkspaceRouting.ui.test.tsx (3 tests) 55ms
 ✓ __tests__/pre-m6-product-ui/preCycleTrajectoryCta.ui.test.tsx (3 tests) 67ms
 ✓ __tests__/pre-m6-product-ui/chatFirstGovernedDecisionLoop.ui.test.tsx (10 tests) 98ms
 ✓ __tests__/pre-m6-product-ui/reservationContextProposal.ui.test.tsx (3 tests) 44ms
 ✓ __tests__/pre-m6-product-ui/cycleReservationMemoryRail.ui.test.tsx (2 tests) 43ms
 ✓ __tests__/pre-m6-product-ui/p5.s01.workspaceLayout.ui.test.tsx (1 test) 105ms
 ✓ __tests__/pre-m6-product-ui/useRunningAttemptO3Observation.test.tsx (4 tests) 33ms
 ✓ __tests__/pre-m6-product-ui/pilotContractPresentation.d0.test.ts (2 tests) 3ms
 ✓ __tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx (55 tests) 1739ms
 ✓ __tests__/nora-cognitive-runtime/mw2.s01.cwpPolicy.d0.test.ts (25 tests) 8ms
 ✓ __tests__/nora-cognitive-runtime/mw2.corr02.nativeLiveBoundary.d0.test.ts (7 tests) 15ms
 ✓ __tests__/nora-cognitive-runtime/mw2.s01.f1ModelSettings.d0.test.ts (4 tests) 19ms
 ✓ __tests__/project-assistant/orchestrateTurn.test.ts (8 tests) 133ms
 ✓ __tests__/project-assistant/w1CkcSemanticSeam.test.ts (6 tests) 69ms

 Test Files  22 passed (22)
      Tests  197 passed (197)
   Start at  09:43:24
   Duration  4.50s (transform 4.13s, setup 1.23s, collect 10.91s, tests 4.63s, environment 5.89s, prepare 1.24s)

```

typecheck: PASS
lint: PASS
build: PASS
FULL npm test: PASS (see CP1)
git diff --check: (pack sanitized separately)
staged: EMPTY
ZERO REAL: YES (fetch spies fail-closed · Fake only · OPENAI_API_KEY deleted in tests)
F2 debt: P5-DEBT-F2-ROUTING-ALIGNMENT = OPEN
Visual reserve: Desktop/Compact/Mobile runtime screenshots NOT CAPTURED — CANDIDATE WITH RESERVES

======================================================================
ARCHITECTURE ANTI-PARALLEL
======================================================================
1 Existing Product model reused? YES
2 Existing Product SQLite reused? YES
3 Existing CWP reused? YES
4 Existing Nora reused? YES
5 Existing Agents Runner reused? YES
6 Existing provider boundary reused? YES
7 Studio Cognitive Context reused? YES
8 logical Product turn reused? YES
9 Product resolution reused? YES
10 Pre-M6 frontend audited? YES (not redesigned this pass)
11 tokens audited? YES
12 No third token family? YES
13 No router service? YES
14 No second Nora? YES
15 No second Product model? YES
16 No second persistence? YES
17 No separate eval runtime? YES
18 No fake Product path? YES
19 No mobile Product semantics fork? YES
20 No new cockpit? YES
21 No universal validator? YES
22 No metrics factory? YES

======================================================================
DEBT + EXITS
======================================================================
P5-DEBT-F2-ROUTING-ALIGNMENT — OPEN — Owner P5 — Exit before R3
OPENAI_MODEL / OPENAI_REASONING_EFFORT — TEMP WITH EXIT
dual --sfia-*/--pm6-* — TEMP WITH EXIT
runtime escalation execution — OPEN
visual runtime comparison — OPEN
Synthesis Product-derived — OPEN
object-native Aperçu/Exécution/Journal/Historique — OPEN

======================================================================
USEFUL COMPLETE ROUTING POLICY (CURRENT FILE)
======================================================================
```ts
/**
 * P5-S01 — Strategy-first bounded cognitive routing policy.
 *
 * Pure / non-persistent / non-authoritative. Not a RouterService.
 * Pipeline (P4 contract — Correction Pass 01):
 *   candidate generation
 *   → Quality Floor filter
 *   → provider capability filter
 *   → optional budget filter among sufficient/compatible
 *   → minimum-sufficient selection.
 *
 * Nominal target cohort: gpt-6-luna · gpt-6.1-sol · gpt-6-astra.
 * GPT-5.6 is excluded from nominal TARGET routing (historical evidence FREEZE).
 */
import { createHash, randomUUID } from "node:crypto";
import type { OpenAiReasoningEffort } from "@/lib/platform/ai";
import {
  buildP5TargetCapabilityManifest,
  estimateCostUsd,
  modelCapabilitySet,
  type CapabilityManifest,
} from "@/lib/nora-eval/capabilityBudget";
import type {
  CognitiveStrategyDecision,
  CognitiveWorkloadSignals,
} from "./cognitiveWorkloadPolicy";

export const P5_COGNITIVE_ROUTING_POLICY_VERSION = "p5-s01-routing-v1" as const;

export const P5_TARGET_MODEL_COHORT = [
  "gpt-6-luna",
  "gpt-6.1-sol",
  "gpt-6-astra",
] as const;

export type P5TargetModelId = (typeof P5_TARGET_MODEL_COHORT)[number];

export const P5_REASONING_MODE_NOMINAL = "standard" as const;

/** Max cognitive escalations per stable cognitive task (P4). */
export const P5_MAX_ESCALATIONS_PER_TASK = 1 as const;

const EFFORT_RANK: Record<OpenAiReasoningEffort, number> = {
  none: 0,
  minimal: 0,
  low: 1,
  medium: 2,
  high: 3,
  xhigh: 4,
  max: 5,
};

/** Relative model capability rank for quality-floor comparison (not authority). */
const MODEL_CAPABILITY_RANK: Record<P5TargetModelId, number> = {
  "gpt-6-luna": 1,
  "gpt-6.1-sol": 2,
  "gpt-6-astra": 3,
};

export type CognitiveQualityFloor = {
  /** Minimum model capability rank (1=Luna … 3=Astra). */
  minModelRank: number;
  /** Minimum reasoning effort rank. */
  minEffortRank: number;
  /** Categorical label for reconstructibility. */
  category:
    | "routine-sufficient"
    | "focused-sufficient"
    | "deep-sufficient"
    | "high-assurance-sufficient";
  reasonCodes: string[];
};

export type CognitiveRoutingConfig = {
  modelId: P5TargetModelId;
  reasoningEffort: OpenAiReasoningEffort;
};

export type CognitiveRoutingDecision = {
  ok: true;
  routingDecisionId: string;
  cognitiveTaskId: string;
  strategyClass: CognitiveStrategyDecision["strategyClass"];
  qualityFloor: CognitiveQualityFloor;
  eligibleConfigs: CognitiveRoutingConfig[];
  selectedModel: P5TargetModelId;
  selectedReasoningEffort: OpenAiReasoningEffort;
  reasoningMode: typeof P5_REASONING_MODE_NOMINAL;
  reasonCodes: string[];
  escalationEligible: boolean;
  maxEscalations: typeof P5_MAX_ESCALATIONS_PER_TASK;
  providerSnapshotIdentity: string;
  policyVersion: typeof P5_COGNITIVE_ROUTING_POLICY_VERSION;
  estimatedCostUsdHint: number | null;
};

export type CognitiveRoutingLimitation = {
  ok: false;
  routingDecisionId: string;
  cognitiveTaskId: string;
  strategyClass: CognitiveStrategyDecision["strategyClass"];
  qualityFloor: CognitiveQualityFloor;
  reasonCodes: string[];
  policyVersion: typeof P5_COGNITIVE_ROUTING_POLICY_VERSION;
  providerSnapshotIdentity: string;
};

export type DecideCognitiveRoutingInput = {
  strategy: CognitiveStrategyDecision;
  /** Stable cognitive task identity — prefer logicalTurnId / correlation. */
  cognitiveTaskId: string;
  /** Optional workload signals for quality-floor reasons (already in strategy). */
  signals?: CognitiveWorkloadSignals;
  /** Override manifest (tests). Default: P5 target cohort snapshot. */
  manifest?: CapabilityManifest;
  /** Optional budget ceiling — never silently downgrades below quality floor. */
  maxBudgetUsd?: number | null;
  /** Prior escalations already consumed for this task. */
  escalationsUsed?: number;
};

function signalRank(
  value: CognitiveWorkloadSignals[keyof CognitiveWorkloadSignals] | undefined,
): number {
  if (value === "high") return 3;
  if (value === "medium") return 2;
  if (value === "low") return 1;
  return 0; // unknown
}

/**
 * Derive categorical Quality Floor from strategy + signals.
 * Explainable / reconstructible — NOT a 0–100 score.
 */
export function deriveQualityFloor(
  strategy: CognitiveStrategyDecision,
  signals?: CognitiveWorkloadSignals,
): CognitiveQualityFloor {
  const s = signals ?? strategy.normalizedSignals;
  const reasonCodes: string[] = [
    `strategy:${strategy.strategyClass}`,
    `reasoningDemand:${strategy.reasoningDemand}`,
  ];

  let minModelRank = 1;
  let minEffortRank = EFFORT_RANK[strategy.reasoningDemand] ?? 1;
  let category: CognitiveQualityFloor["category"] = "routine-sufficient";

  switch (strategy.strategyClass) {
    case "Routine":
      category = "routine-sufficient";
      minModelRank = 1;
      minEffortRank = Math.max(minEffortRank, EFFORT_RANK.none);
      break;
    case "Focused":
      category = "focused-sufficient";
      minModelRank = 1;
      minEffortRank = Math.max(minEffortRank, EFFORT_RANK.low);
      if (signalRank(s.verificationNeed) >= 2 || signalRank(s.ambiguity) >= 2) {
        minEffortRank = Math.max(minEffortRank, EFFORT_RANK.medium);
        reasonCodes.push("focused:elevated-verification-or-ambiguity");
      }
      break;
    case "Deep":
      category = "deep-sufficient";
      // Deep may still use Luna at high effort; Sol is preferred floor when rigor high.
      minModelRank =
        signalRank(s.rigorCriticality) >= 3 ||
        signalRank(s.verificationNeed) >= 3 ||
        signalRank(s.contradictionRisk) >= 3
          ? 2
          : 1;
      minEffortRank = Math.max(minEffortRank, EFFORT_RANK.medium);
      reasonCodes.push(
        minModelRank >= 2
          ? "deep:sol-floor-for-high-rigor"
          : "deep:luna-eligible-at-sufficient-effort",
      );
      break;
    case "High-Assurance":
      category = "high-assurance-sufficient";
      minModelRank = 2; // Sol minimum — Astra optional among sufficient
      minEffortRank = Math.max(minEffortRank, EFFORT_RANK.high);
      reasonCodes.push("high-assurance:sol-or-stronger");
      break;
  }

  if (signalRank(s.contradictionRisk) >= 3) {
    minModelRank = Math.max(minModelRank, 2);
    reasonCodes.push("contradictionRisk:high→sol-floor");
  }
  if (strategy.criticalChallengeArmed) {
    minEffortRank = Math.max(minEffortRank, EFFORT_RANK.high);
    reasonCodes.push("criticalChallengeArmed→effort-floor-high");
  }

  return {
    minModelRank,
    minEffortRank,
    category,
    reasonCodes,
  };
}

function meetsQualityFloor(
  config: CognitiveRoutingConfig,
  floor: CognitiveQualityFloor,
): boolean {
  const modelRank = MODEL_CAPABILITY_RANK[config.modelId];
  const effortRank = EFFORT_RANK[config.reasoningEffort] ?? -1;
  return modelRank >= floor.minModelRank && effortRank >= floor.minEffortRank;
}

/**
 * Candidate generation: Strategy envelope × target cohort, NOT fixed Strategy→Model.
 * Model × effort remain independent. Quality Floor applies next (before provider).
 */
export function generateCandidateConfigs(
  strategy: CognitiveStrategyDecision,
): CognitiveRoutingConfig[] {
  const efforts = strategy.candidateEnvelope;
  const configs: CognitiveRoutingConfig[] = [];
  for (const modelId of P5_TARGET_MODEL_COHORT) {
    for (const reasoningEffort of efforts) {
      configs.push({ modelId, reasoningEffort });
    }
  }
  return configs;
}

function filterByQualityFloor(
  configs: CognitiveRoutingConfig[],
  floor: CognitiveQualityFloor,
): { sufficient: CognitiveRoutingConfig[]; rejected: string[] } {
  const sufficient: CognitiveRoutingConfig[] = [];
  const rejected: string[] = [];
  for (const c of configs) {
    if (meetsQualityFloor(c, floor)) {
      sufficient.push(c);
    } else {
      rejected.push(`below-quality-floor:${c.modelId}/${c.reasoningEffort}`);
    }
  }
  return { sufficient, rejected };
}

function filterByProviderCapability(
  configs: CognitiveRoutingConfig[],
  manifest: CapabilityManifest,
): { eligible: CognitiveRoutingConfig[]; rejected: string[] } {
  const eligible: CognitiveRoutingConfig[] = [];
  const rejected: string[] = [];
  for (const c of configs) {
    const supported = modelCapabilitySet(manifest, c.modelId);
    if (!supported) {
      rejected.push(`unknown-model:${c.modelId}`);
      continue;
    }
    if (c.reasoningEffort === "minimal") {
      rejected.push(`unsupported-effort:${c.modelId}/minimal`);
      continue;
    }
    if (!supported.includes(c.reasoningEffort)) {
      rejected.push(`unsupported-effort:${c.modelId}/${c.reasoningEffort}`);
      continue;
    }
    // Nominal cohort allowlist — GPT-5.6 never appears here.
    if (
      !(P5_TARGET_MODEL_COHORT as readonly string[]).includes(c.modelId)
    ) {
      rejected.push(`outside-target-cohort:${c.modelId}`);
      continue;
    }
    eligible.push(c);
  }
  return { eligible, rejected };
}

function sortMinimumSufficient(
  configs: CognitiveRoutingConfig[],
  manifest: CapabilityManifest,
): CognitiveRoutingConfig[] {
  return [...configs].sort((a, b) => {
    const costA = estimateCostUsd({
      manifest,
      modelId: a.modelId,
      inputTokens: 4000,
      outputTokens: 1200,
    });
    const costB = estimateCostUsd({
      manifest,
      modelId: b.modelId,
      inputTokens: 4000,
      outputTokens: 1200,
    });
    if (costA !== costB) return costA - costB;
    const modelDiff =
      MODEL_CAPABILITY_RANK[a.modelId] - MODEL_CAPABILITY_RANK[b.modelId];
    if (modelDiff !== 0) return modelDiff;
    return (
      (EFFORT_RANK[a.reasoningEffort] ?? 0) -
      (EFFORT_RANK[b.reasoningEffort] ?? 0)
    );
  });
}

function providerSnapshotIdentity(manifest: CapabilityManifest): string {
  // Identity is content-stable: exclude retrievedAt (call-time) so the same
  // cohort/capability set hashes identically across turns.
  const payload = JSON.stringify({
    sourceName: manifest.sourceName,
    models: manifest.models.map((m) => ({
      id: m.modelId,
      efforts: m.reasoningEfforts,
      inputUsdPerMTok: m.inputUsdPerMTok,
      outputUsdPerMTok: m.outputUsdPerMTok,
    })),
    allowlist: manifest.campaignAllowlist,
  });
  return createHash("sha256").update(payload).digest("hex").slice(0, 16);
}

/**
 * Decide nominal Product cognitive routing.
 * Fail-closed when no sufficient config remains — never silently downgrade.
 */
export function decideCognitiveRouting(
  input: DecideCognitiveRoutingInput,
): CognitiveRoutingDecision | CognitiveRoutingLimitation {
  const routingDecisionId = randomUUID();
  const cognitiveTaskId = input.cognitiveTaskId.trim();
  if (!cognitiveTaskId) {
    throw new Error("COGNITIVE_ROUTING_REQUIRES_STABLE_TASK_ID");
  }

  const manifest =
    input.manifest ??
    buildP5TargetCapabilityManifest(new Date().toISOString());
  const snapshotId = providerSnapshotIdentity(manifest);
  const qualityFloor = deriveQualityFloor(input.strategy, input.signals);

  // P4 order: candidates → Quality Floor → provider capability → FinOps.
  const candidates = generateCandidateConfigs(input.strategy);
  const {
    sufficient: qualitySufficient,
    rejected: qualityRejected,
  } = filterByQualityFloor(candidates, qualityFloor);

  const reasonCodes = [
    ...qualityFloor.reasonCodes,
    `candidates:${candidates.length}`,
    `qualitySufficient:${qualitySufficient.length}`,
    `qualityRejected:${qualityRejected.length}`,
    ...qualityRejected.slice(0, 8).map((r) => `qualityRejected:${r}`),
  ];

  if (qualitySufficient.length === 0) {
    return {
      ok: false,
      routingDecisionId,
      cognitiveTaskId,
      strategyClass: input.strategy.strategyClass,
      qualityFloor,
      reasonCodes: [
        ...reasonCodes,
        "NO_SUFFICIENT_CONFIG",
        "BUDGET_MUST_NOT_DOWNGRADE_BELOW_FLOOR",
      ],
      policyVersion: P5_COGNITIVE_ROUTING_POLICY_VERSION,
      providerSnapshotIdentity: snapshotId,
    };
  }

  const {
    eligible: providerCompatible,
    rejected: providerRejected,
  } = filterByProviderCapability(qualitySufficient, manifest);

  reasonCodes.push(
    `providerCompatible:${providerCompatible.length}`,
    `providerRejected:${providerRejected.length}`,
    ...providerRejected.slice(0, 8).map((r) => `providerRejected:${r}`),
  );

  if (providerCompatible.length === 0) {
    return {
      ok: false,
      routingDecisionId,
      cognitiveTaskId,
      strategyClass: input.strategy.strategyClass,
      qualityFloor,
      reasonCodes: [
        ...reasonCodes,
        "PROVIDER_INCOMPATIBLE_WITH_QUALITY_FLOOR",
        "NO_SUFFICIENT_CONFIG",
        "BUDGET_MUST_NOT_DOWNGRADE_BELOW_FLOOR",
      ],
      policyVersion: P5_COGNITIVE_ROUTING_POLICY_VERSION,
      providerSnapshotIdentity: snapshotId,
    };
  }

  const ordered = sortMinimumSufficient(providerCompatible, manifest);
  let selected = ordered[0]!;
  let budgetEligibleCount = ordered.length;

  // Budget may eliminate higher-cost options only among quality+provider-sufficient.
  if (input.maxBudgetUsd != null && Number.isFinite(input.maxBudgetUsd)) {
    const withinBudget = ordered.filter((c) => {
      const est = estimateCostUsd({
        manifest,
        modelId: c.modelId,
        inputTokens: 4000,
        outputTokens: 1200,
      });
      return est <= input.maxBudgetUsd!;
    });
    budgetEligibleCount = withinBudget.length;
    reasonCodes.push(`budgetEligible:${budgetEligibleCount}`);
    if (withinBudget.length === 0) {
      return {
        ok: false,
        routingDecisionId,
        cognitiveTaskId,
        strategyClass: input.strategy.strategyClass,
        qualityFloor,
        reasonCodes: [
          ...reasonCodes,
          "BUDGET_EXCLUDES_ALL_SUFFICIENT",
          "BUDGET_MUST_NOT_DOWNGRADE_BELOW_FLOOR",
        ],
        policyVersion: P5_COGNITIVE_ROUTING_POLICY_VERSION,
        providerSnapshotIdentity: snapshotId,
      };
    }
    selected = withinBudget[0]!;
    reasonCodes.push("budget:filtered-among-sufficient");
  }

  const escalationsUsed = input.escalationsUsed ?? 0;
  const escalationEligible = escalationsUsed < P5_MAX_ESCALATIONS_PER_TASK;

  const estimatedCostUsdHint = estimateCostUsd({
    manifest,
    modelId: selected.modelId,
    inputTokens: 4000,
    outputTokens: 1200,
  });

  reasonCodes.push(
    `selected:${selected.modelId}/${selected.reasoningEffort}`,
    "reasoningMode:standard",
    "finops:among-sufficient-only",
    "pipeline:quality→provider→finops",
  );

  return {
    ok: true,
    routingDecisionId,
    cognitiveTaskId,
    strategyClass: input.strategy.strategyClass,
    qualityFloor,
    eligibleConfigs: ordered,
    selectedModel: selected.modelId,
    selectedReasoningEffort: selected.reasoningEffort,
    reasoningMode: P5_REASONING_MODE_NOMINAL,
    reasonCodes,
    escalationEligible,
    maxEscalations: P5_MAX_ESCALATIONS_PER_TASK,
    providerSnapshotIdentity: snapshotId,
    policyVersion: P5_COGNITIVE_ROUTING_POLICY_VERSION,
    estimatedCostUsdHint,
  };
}

/** True when model id is outside the P5 nominal target cohort. */
export function isOutsideP5TargetCohort(modelId: string): boolean {
  return !(P5_TARGET_MODEL_COHORT as readonly string[]).includes(modelId);
}

```

======================================================================
CAPABILITY MANIFEST DIFF (capabilityBudget.ts)
======================================================================
```diff
diff --git a/projects/sfia-studio/app/lib/nora-eval/capabilityBudget.ts b/projects/sfia-studio/app/lib/nora-eval/capabilityBudget.ts
index 8ffe2b3a..146efed4 100644
--- a/projects/sfia-studio/app/lib/nora-eval/capabilityBudget.ts
+++ b/projects/sfia-studio/app/lib/nora-eval/capabilityBudget.ts
@@ -121,6 +121,73 @@ export function buildCurrentOpenAiCapabilityManifest(
   };
 }

+/**
+ * P5 nominal TARGET routing cohort capability snapshot (dated external input).
+ * Cohort EXACT: gpt-6-luna · gpt-6.1-sol · gpt-6-astra.
+ * Does NOT mutate {@link buildMw0CapabilityManifest} (GPT-5.6 historical FREEZE).
+ * Does NOT replace {@link buildCurrentOpenAiCapabilityManifest} provider universe.
+ * Snapshot ≠ permanent SFIA doctrine; account entitlement ≠ documented capability.
+ *
+ * Effort sets (external input revalidated for P5-S01 Delivery / Correction Pass 01, 2026-10-05):
+ * - gpt-6-luna: none · low · medium · high · xhigh · max
+ * - gpt-6.1-sol: low · medium · high · xhigh · max (none unsupported)
+ * - gpt-6-astra: low · medium · high · xhigh · max (none unsupported)
+ *
+ * Pricing (Correction Pass 01 — Official OpenAI STANDARD SHORT CONTEXT ≤272K):
+ * - Luna 0.10 / 0.50 · Sol 2.00 / 10.00 · Astra 10.00 / 50.00 (USD per 1M tokens)
+ * Cached/cache-write rates exist at provider but are not stored unless consumed by estimateCostUsd.
+ * Long-context / Batch / Flex / Fast / Ultrafast / regional tiers differ.
+ * Replaceable FinOps ordering hint only — NOT doctrine · NOT observed REAL cost.
+ */
+export function buildP5TargetCapabilityManifest(
+  retrievedAtIso: string,
+): CapabilityManifest {
+  return {
+    retrievedAt: retrievedAtIso,
+    provider: "openai",
+    sourceName:
+      "Official OpenAI API Models + Pricing — P5 TARGET cohort (GPT-6 Luna / GPT-6.1 Sol / GPT-6 Astra) — Standard short-context — revalidated 2026-10-05",
+    sourceNote:
+      "P5-S01 Correction Pass 01 TARGET routing cohort — Standard processing tier · short-context pricing band (≤272K input) · ≠ MW0 historical · ≠ full provider universe · ≠ permanent doctrine · ≠ entitlement proof · ZERO REAL in S01. Revalidate before REAL gates. Long-context and other tiers use different rates.",
+    sdkCodeCapabilitySet: OPENAI_REASONING_EFFORT_VALUES,
+    models: [
+      {
+        modelId: "gpt-6-luna",
+        inputUsdPerMTok: 0.1,
+        outputUsdPerMTok: 0.5,
+        reasoningEfforts: ["none", "low", "medium", "high", "xhigh", "max"],
+      },
+      {
+        modelId: "gpt-6.1-sol",
+        inputUsdPerMTok: 2.0,
+        outputUsdPerMTok: 10.0,
+        reasoningEfforts: ["low", "medium", "high", "xhigh", "max"],
+      },
+      {
+        modelId: "gpt-6-astra",
+        inputUsdPerMTok: 10.0,
+        outputUsdPerMTok: 50.0,
+        reasoningEfforts: ["low", "medium", "high", "xhigh", "max"],
+      },
+    ],
+    campaignAllowlist: {
+      modelIds: ["gpt-6-luna", "gpt-6.1-sol", "gpt-6-astra"],
+      reasoningEfforts: ["none", "low", "medium", "high", "xhigh", "max"],
+    },
+    caveats: [
+      "P5 TARGET cohort excludes GPT-5.6 from nominal Product routing.",
+      "Historical GPT-5.6 manifests/evidence remain IMMUTABLE (buildMw0CapabilityManifest).",
+      "Sol/Astra do not support reasoning.effort=none — do not silently coerce.",
+      "minimal remains non-admissible for target cohort.",
+      "Documented capability ≠ account/API entitlement — ZERO REAL in P5-S01.",
+      "Pricing = Official OpenAI Standard short-context (≤272K) dated 2026-10-05 — FinOps ordering hint only.",
+      "Long-context rates differ; Batch/Flex/Fast/Ultrafast/regional tiers differ — not stored here.",
+      "Cached input / cache write rates exist at provider; schema stores only fields consumed by estimateCostUsd.",
+      "NOT observed REAL cost · NOT production savings claim · revalidate before REAL.",
+    ],
+  };
+}
+
 /**
  * Distinct campaign capability policy for the Global Model × Reasoning Campaign.
  * EXIT: campaign evaluation contract only — ≠ production model routing / ≠ multi-model router.

```

======================================================================
IMPORT BOUNDARIES DIFF
======================================================================
```diff
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
index 90426557..52fcc432 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
@@ -145,6 +145,7 @@ describe("V2-A1 vertical-slice-runtime import boundaries", () => {
       "features/project-assistant/w2/resolveTrustedProductLaunchContext.ts:@/lib/vertical-slice-runtime/managedRepoRootBaseConfig",
       "features/project-assistant/w2/resolveTrustedProductLaunchContext.ts:@/lib/vertical-slice-runtime/resolveBoundedReadOnlyBaseHeadSha",
       "features/pre-m6-product-ui/NewProjectIntentionPage.tsx:@/lib/vertical-slice-runtime/actions",
+      "features/pre-m6-product-ui/ProductRailRecents.tsx:@/lib/vertical-slice-runtime/actions",
       "features/pre-m6-product-ui/ProjectWorkspacePage.tsx:@/lib/vertical-slice-runtime/actions",
       "features/pre-m6-product-ui/ProjectsPage.tsx:@/lib/vertical-slice-runtime/actions",
       "features/pre-m6-product-ui/surfaces/RepositoryBindingForm.tsx:@/lib/vertical-slice-runtime/actions",

```

======================================================================
PRODUCTION RUNTIME REFERENCE DIGEST DIFF
======================================================================
```diff
diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index e2656d8a..6033a8db 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -582,7 +582,7 @@
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts",
-      "sha256_16": "a7b846cb4ae83cc6"
+      "sha256_16": "28b6b3d32b754cec"
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts",
@@ -622,7 +622,7 @@
     },
     {
       "path": "projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts",
-      "sha256_16": "fc46c393f14d66ae"
+      "sha256_16": "b1d586c1784f8c75"
     },
     {
       "path": "projects/sfia-studio/app/lib/nora-cognitive-runtime/productSqliteSession.ts",
@@ -678,7 +678,7 @@
     },
     {
       "path": "projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts",
-      "sha256_16": "eccf91d5637a87c5"
+      "sha256_16": "02979a5b05a36ced"
     },
     {
       "path": "projects/sfia-studio/app/.env.example",

```

======================================================================
TESTS CREATED / CHANGED (FULL CONTENT)
======================================================================

### p5.s01.cognitiveRouting.d0.test.ts
```ts
/** @vitest-environment node */
/**
 * P5-S01 D0 — Cognitive routing policy + Product-path wiring (ZERO REAL).
 */
import { describe, expect, it, vi } from "vitest";
import {
  ScriptedModel,
  assistantMessage,
} from "@openai/agents/testing";
import {
  buildMw0CapabilityManifest,
  buildP5TargetCapabilityManifest,
  modelCapabilitySet,
  type CapabilityManifest,
} from "@/lib/nora-eval/capabilityBudget";
import type { OpenAiReasoningEffort } from "@/lib/platform/ai";
import {
  decideCognitiveRouting,
  deriveQualityFloor,
  generateCandidateConfigs,
  isOutsideP5TargetCohort,
  P5_COGNITIVE_ROUTING_POLICY_VERSION,
  P5_MAX_ESCALATIONS_PER_TASK,
  P5_TARGET_MODEL_COHORT,
  decideCognitiveStrategy,
  normalizeCognitiveWorkloadSignals,
  runNoraCognitiveTurn,
  sfiaBoundaryInstructions,
} from "@/lib/nora-cognitive-runtime";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import type { EventSink } from "@/lib/platform/observability/eventSink";
import type { TechnicalEvent } from "@/lib/platform/observability/types";

function strategyFor(
  partial: Parameters<typeof normalizeCognitiveWorkloadSignals>[0],
  profile = "trusted-profile",
) {
  return decideCognitiveStrategy({
    signals: normalizeCognitiveWorkloadSignals(partial),
    trustedSfiaProfile: profile,
  });
}

describe("P5-S01 — cognitive routing D0", () => {
  it("P5-D0-01 — nominal target cohort = Luna / Sol / Astra", () => {
    expect([...P5_TARGET_MODEL_COHORT]).toEqual([
      "gpt-6-luna",
      "gpt-6.1-sol",
      "gpt-6-astra",
    ]);
    const manifest = buildP5TargetCapabilityManifest("2026-10-05T00:00:00.000Z");
    expect(manifest.models.map((m) => m.modelId).sort()).toEqual([
      "gpt-6-astra",
      "gpt-6-luna",
      "gpt-6.1-sol",
    ]);
  });

  it("P5-D0-02 — nominal routing excludes GPT-5.6", () => {
    expect(isOutsideP5TargetCohort("gpt-5.6-luna")).toBe(true);
    expect(isOutsideP5TargetCohort("gpt-5.6-sol")).toBe(true);
    expect(isOutsideP5TargetCohort("gpt-6-luna")).toBe(false);
    const strategy = strategyFor({
      ambiguity: "low",
      reasoningDepth: "low",
      sourceBreadth: "low",
      verificationNeed: "low",
      contradictionRisk: "low",
    });
    const decision = decideCognitiveRouting({
      strategy,
      cognitiveTaskId: "p5-d0-02",
    });
    expect(decision.ok).toBe(true);
    if (!decision.ok) return;
    expect(decision.selectedModel.startsWith("gpt-5.6")).toBe(false);
    expect(
      decision.eligibleConfigs.every(
        (c) => !c.modelId.startsWith("gpt-5.6"),
      ),
    ).toBe(true);
  });

  it("P5-D0-03 — historical GPT-5.6 MW0 manifest unchanged", () => {
    const mw0 = buildMw0CapabilityManifest("2026-10-05T00:00:00.000Z");
    expect(mw0.models.map((m) => m.modelId)).toEqual([
      "gpt-5.6-sol",
      "gpt-5.6-terra",
      "gpt-5.6-luna",
    ]);
    expect(mw0.models.some((m) => m.modelId.startsWith("gpt-6"))).toBe(false);
  });

  it("P5-D0-04 — Strategy does not contain fixed model mapping", () => {
    const strategy = strategyFor({
      ambiguity: "medium",
      reasoningDepth: "medium",
      verificationNeed: "medium",
    });
    const candidates = generateCandidateConfigs(strategy);
    const models = new Set(candidates.map((c) => c.modelId));
    expect(models.has("gpt-6-luna")).toBe(true);
    expect(models.has("gpt-6.1-sol")).toBe(true);
    expect(models.has("gpt-6-astra")).toBe(true);
    // Same strategy class yields multi-model candidates (not Strategy→Model fixed).
    expect(models.size).toBe(3);
  });

  it("P5-D0-05 / P5-D0-06 — Quality Floor before FinOps; insufficient excluded", () => {
    const strategy = strategyFor({
      rigorCriticality: "high",
      verificationNeed: "high",
      contradictionRisk: "high",
      ambiguity: "high",
      reasoningDepth: "high",
    });
    expect(strategy.strategyClass).toBe("High-Assurance");
    const floor = deriveQualityFloor(strategy);
    expect(floor.minModelRank).toBeGreaterThanOrEqual(2);
    const decision = decideCognitiveRouting({
      strategy,
      cognitiveTaskId: "p5-d0-05",
    });
    expect(decision.ok).toBe(true);
    if (!decision.ok) return;
    expect(decision.selectedModel).not.toBe("gpt-6-luna");
    expect(
      decision.eligibleConfigs.every((c) => c.modelId !== "gpt-6-luna" || false),
    );
    // Luna configs must not remain eligible under High-Assurance floor.
    expect(
      decision.eligibleConfigs.every((c) => c.modelId !== "gpt-6-luna"),
    ).toBe(true);
    // Pipeline order markers (CP5).
    expect(decision.reasonCodes.some((c) => c.startsWith("qualitySufficient:"))).toBe(
      true,
    );
    expect(decision.reasonCodes.some((c) => c.startsWith("providerCompatible:"))).toBe(
      true,
    );
    expect(decision.reasonCodes).toContain("pipeline:quality→provider→finops");
  });

  it("P5-D0-05b — pipeline ORDER: Quality Floor then provider then FinOps", () => {
    const strategy = strategyFor({
      rigorCriticality: "high",
      verificationNeed: "high",
      contradictionRisk: "high",
      ambiguity: "high",
      reasoningDepth: "high",
    });
    expect(strategy.strategyClass).toBe("High-Assurance");
    // Manifest where Luna is provider-supported (but below HA floor),
    // Sol high/xhigh are quality-sufficient but provider-unsupported,
    // Sol max is quality+provider sufficient.
    const stagedManifest: CapabilityManifest = {
      ...buildP5TargetCapabilityManifest("2026-10-05T00:00:00.000Z"),
      models: [
        {
          modelId: "gpt-6-luna",
          inputUsdPerMTok: 0.1,
          outputUsdPerMTok: 0.5,
          reasoningEfforts: [
            "none",
            "low",
            "medium",
            "high",
            "xhigh",
            "max",
          ] as OpenAiReasoningEffort[],
        },
        {
          modelId: "gpt-6.1-sol",
          inputUsdPerMTok: 2.0,
          outputUsdPerMTok: 10.0,
          reasoningEfforts: ["max"] as OpenAiReasoningEffort[],
        },
        {
          modelId: "gpt-6-astra",
          inputUsdPerMTok: 10.0,
          outputUsdPerMTok: 50.0,
          reasoningEfforts: ["high", "xhigh", "max"] as OpenAiReasoningEffort[],
        },
      ],
    };
    const decision = decideCognitiveRouting({
      strategy,
      cognitiveTaskId: "p5-d0-05b-order",
      manifest: stagedManifest,
    });
    expect(decision.ok).toBe(true);
    if (!decision.ok) return;
    const qualityRejected = decision.reasonCodes.find((c) =>
      c.startsWith("qualityRejected:"),
    );
    const qualitySufficient = decision.reasonCodes.find((c) =>
      c.startsWith("qualitySufficient:"),
    );
    const providerRejected = decision.reasonCodes.find((c) =>
      c.startsWith("providerRejected:"),
    );
    expect(qualityRejected).toBeTruthy();
    expect(Number(qualityRejected!.split(":")[1])).toBeGreaterThan(0);
    expect(qualitySufficient).toBeTruthy();
    expect(Number(qualitySufficient!.split(":")[1])).toBeGreaterThan(0);
    // Sol high/xhigh must be rejected at provider stage AFTER quality.
    expect(
      decision.reasonCodes.some((c) =>
        c.includes("providerRejected:unsupported-effort:gpt-6.1-sol/high"),
      ),
    ).toBe(true);
    expect(providerRejected).toBeTruthy();
    expect(Number(providerRejected!.split(":")[1])).toBeGreaterThan(0);
    // Luna never survives quality floor into eligibleConfigs.
    expect(
      decision.eligibleConfigs.every((c) => c.modelId !== "gpt-6-luna"),
    ).toBe(true);
    expect(decision.reasonCodes).toContain("pipeline:quality→provider→finops");
    // Selection among remaining sufficient+compatible (FinOps last).
    expect(["gpt-6.1-sol", "gpt-6-astra"]).toContain(decision.selectedModel);
  });

  it("P5-D0-07 — Luna none accepted", () => {
    const manifest = buildP5TargetCapabilityManifest("2026-10-05T00:00:00.000Z");
    const efforts = modelCapabilitySet(manifest, "gpt-6-luna");
    expect(efforts).toContain("none");
  });

  it("P5-D0-08 / P5-D0-09 — Sol/Astra none rejected", () => {
    const manifest = buildP5TargetCapabilityManifest("2026-10-05T00:00:00.000Z");
    expect(modelCapabilitySet(manifest, "gpt-6.1-sol")).not.toContain("none");
    expect(modelCapabilitySet(manifest, "gpt-6-astra")).not.toContain("none");
  });

  it("P5-D0-04b — FinOps Standard short-context prices dated 2026-10-05", () => {
    const manifest = buildP5TargetCapabilityManifest("2026-10-05T00:00:00.000Z");
    const byId = Object.fromEntries(
      manifest.models.map((m) => [m.modelId, m]),
    );
    expect(byId["gpt-6-luna"]?.inputUsdPerMTok).toBe(0.1);
    expect(byId["gpt-6-luna"]?.outputUsdPerMTok).toBe(0.5);
    expect(byId["gpt-6.1-sol"]?.inputUsdPerMTok).toBe(2.0);
    expect(byId["gpt-6.1-sol"]?.outputUsdPerMTok).toBe(10.0);
    expect(byId["gpt-6-astra"]?.inputUsdPerMTok).toBe(10.0);
    expect(byId["gpt-6-astra"]?.outputUsdPerMTok).toBe(50.0);
    expect(manifest.sourceNote).toMatch(/Standard/i);
    expect(manifest.sourceNote).toMatch(/short-context/i);
    expect(manifest.sourceName).toMatch(/2026-10-05/);
  });

  it("P5-D0-10 — unknown / empty provider capability fail-closed", () => {
    const strategy = strategyFor({
      ambiguity: "low",
      reasoningDepth: "low",
      sourceBreadth: "low",
      verificationNeed: "low",
      contradictionRisk: "low",
    });
    // Manifest where every target cohort model is absent → router fail-closed.
    const emptyTargetManifest: CapabilityManifest = {
      ...buildP5TargetCapabilityManifest("2026-10-05T00:00:00.000Z"),
      models: [
        {
          modelId: "gpt-unknown-xyz",
          inputUsdPerMTok: 1,
          outputUsdPerMTok: 1,
          reasoningEfforts: ["low", "medium", "high"] as OpenAiReasoningEffort[],
        },
      ],
      campaignAllowlist: {
        modelIds: ["gpt-unknown-xyz"],
        reasoningEfforts: ["low", "medium", "high"] as OpenAiReasoningEffort[],
      },
    };
    expect(modelCapabilitySet(emptyTargetManifest, "gpt-6-luna")).toBeNull();
    expect(modelCapabilitySet(emptyTargetManifest, "gpt-6.1-sol")).toBeNull();
    expect(modelCapabilitySet(emptyTargetManifest, "gpt-6-astra")).toBeNull();
    const decision = decideCognitiveRouting({
      strategy,
      cognitiveTaskId: "p5-d0-10",
      manifest: emptyTargetManifest,
    });
    expect(decision.ok).toBe(false);
    if (decision.ok) return;
    expect(decision.reasonCodes).toContain(
      "PROVIDER_INCOMPATIBLE_WITH_QUALITY_FLOOR",
    );
    expect(decision.reasonCodes).toContain("NO_SUFFICIENT_CONFIG");
    expect(
      decision.reasonCodes.some((c) => c.includes("unknown-model:gpt-6-luna")),
    ).toBe(true);
  });

  it("P5-D0-11 — unsupported effort not silently coerced", () => {
    const manifest = buildP5TargetCapabilityManifest("2026-10-05T00:00:00.000Z");
    const sol = modelCapabilitySet(manifest, "gpt-6.1-sol")!;
    expect(sol.includes("none")).toBe(false);
    // Routine envelope includes none — Sol none must be filtered, not coerced to low.
    const strategy = strategyFor({
      ambiguity: "low",
      reasoningDepth: "low",
      sourceBreadth: "low",
      verificationNeed: "low",
      contradictionRisk: "low",
    });
    const decision = decideCognitiveRouting({
      strategy,
      cognitiveTaskId: "p5-d0-11",
      manifest,
    });
    expect(decision.ok).toBe(true);
    if (!decision.ok) return;
    expect(
      decision.eligibleConfigs.some(
        (c) => c.modelId === "gpt-6.1-sol" && c.reasoningEffort === "none",
      ),
    ).toBe(false);
  });

  it("P5-D0-12 — budget cannot downgrade below quality", () => {
    const strategy = strategyFor({
      rigorCriticality: "high",
      verificationNeed: "high",
      contradictionRisk: "high",
      ambiguity: "high",
      reasoningDepth: "high",
    });
    // Impossible budget among Sol/Astra → limitation, not Luna downgrade.
    const decision = decideCognitiveRouting({
      strategy,
      cognitiveTaskId: "p5-d0-12",
      maxBudgetUsd: 0.000001,
    });
    expect(decision.ok).toBe(false);
    if (decision.ok) return;
    expect(decision.reasonCodes).toContain(
      "BUDGET_MUST_NOT_DOWNGRADE_BELOW_FLOOR",
    );
  });

  it("P5-D0-13 / P5-D0-14 / P5-D0-15 — reconstructible + policy version + reason codes", () => {
    const strategy = strategyFor({ ambiguity: "medium" });
    const decision = decideCognitiveRouting({
      strategy,
      cognitiveTaskId: "p5-d0-13-task",
    });
    expect(decision.ok).toBe(true);
    if (!decision.ok) return;
    expect(decision.routingDecisionId.length).toBeGreaterThan(8);
    expect(decision.cognitiveTaskId).toBe("p5-d0-13-task");
    expect(decision.policyVersion).toBe(P5_COGNITIVE_ROUTING_POLICY_VERSION);
    expect(decision.reasonCodes.length).toBeGreaterThan(0);
    expect(decision.providerSnapshotIdentity.length).toBeGreaterThan(0);
  });

  it("P5-D0-16 — max escalation = 1", () => {
    expect(P5_MAX_ESCALATIONS_PER_TASK).toBe(1);
    const strategy = strategyFor({});
    const decision = decideCognitiveRouting({
      strategy,
      cognitiveTaskId: "p5-d0-16",
      escalationsUsed: 0,
    });
    expect(decision.ok).toBe(true);
    if (!decision.ok) return;
    expect(decision.maxEscalations).toBe(1);
    expect(decision.escalationEligible).toBe(true);
    const after = decideCognitiveRouting({
      strategy,
      cognitiveTaskId: "p5-d0-16",
      escalationsUsed: 1,
    });
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.escalationEligible).toBe(false);
  });

  it("P5-D0-17 — stable cognitive task identity required", () => {
    const strategy = strategyFor({});
    expect(() =>
      decideCognitiveRouting({ strategy, cognitiveTaskId: "   " }),
    ).toThrow(/COGNITIVE_ROUTING_REQUIRES_STABLE_TASK_ID/);
  });

  it("P5-D0-18 / P5-D0-19 — client cannot select model/effort via Product path", async () => {
    const provider = new FakeConversationProvider({
      toolScript: [{ kind: "message", text: "[TEST/FAKE] P5 routing." }],
    });
    const result = await runNoraCognitiveTurn({
      correlationId: "p5-d0-18",
      projectId: "prj:p5",
      messages: [
        { role: "system", content: sfiaBoundaryInstructions() },
        { role: "user", content: "probe routing" },
      ],
      provider,
      enableTools: false,
      cognitiveWorkloadSignals: {
        ambiguity: "low",
        reasoningDepth: "low",
        sourceBreadth: "low",
        verificationNeed: "low",
        contradictionRisk: "low",
      },
      trustedSfiaProfile: "trusted-profile",
      // Intentionally no client model/effort fields exist on the input type.
    });
    expect(result.selectedModelId).toBeTruthy();
    expect(P5_TARGET_MODEL_COHORT).toContain(
      result.selectedModelId as (typeof P5_TARGET_MODEL_COHORT)[number],
    );
    expect(result.selectedReasoningEffort).toBeTruthy();
    expect(result.cognitiveRoutingPolicyVersion).toBe(
      P5_COGNITIVE_ROUTING_POLICY_VERSION,
    );
  });

  it("P5-D0-20 — stronger model does not widen authority fields", async () => {
    const provider = new FakeConversationProvider({
      toolScript: [{ kind: "message", text: "[TEST/FAKE] HA." }],
    });
    const result = await runNoraCognitiveTurn({
      correlationId: "p5-d0-20",
      projectId: "prj:p5",
      messages: [
        { role: "system", content: sfiaBoundaryInstructions() },
        { role: "user", content: "high assurance probe" },
      ],
      provider,
      enableTools: false,
      cognitiveWorkloadSignals: {
        rigorCriticality: "high",
        verificationNeed: "high",
        contradictionRisk: "high",
        ambiguity: "high",
        reasoningDepth: "high",
      },
      trustedSfiaProfile: "trusted-profile",
    });
    expect(result.selectedModelId).not.toBe("gpt-6-luna");
    // No authority envelope / confirmation / HD fields introduced by routing.
    expect(
      Object.keys(result).some((k) =>
        /authority|humanDecision|confirmation/i.test(k),
      ),
    ).toBe(false);
  });

  it("P5-D0-21 — routing telemetry contains no CoT", async () => {
    const events: TechnicalEvent[] = [];
    const sink: EventSink = {
      emit(event) {
        events.push(event);
      },
    };
    const provider = new FakeConversationProvider({
      toolScript: [{ kind: "message", text: "[TEST/FAKE] telemetry." }],
    });
    await runNoraCognitiveTurn({
      correlationId: "p5-d0-21",
      projectId: "prj:p5",
      messages: [
        { role: "system", content: sfiaBoundaryInstructions() },
        { role: "user", content: "telemetry probe" },
      ],
      provider,
      enableTools: false,
      sink,
      cognitiveWorkloadSignals: {
        ambiguity: "low",
        reasoningDepth: "low",
        sourceBreadth: "low",
        verificationNeed: "low",
        contradictionRisk: "low",
      },
      trustedSfiaProfile: "trusted-profile",
    });
    const routing = events.find((e) => e.type === "COGNITIVE_ROUTING_SELECTED");
    expect(routing).toBeTruthy();
    const blob = JSON.stringify(routing?.detail ?? {});
    expect(blob).not.toMatch(/chain of thought|private reasoning|confidencePercent|qualityScore/i);
    expect(routing?.detail).toMatchObject({
      routingPolicyVersion: P5_COGNITIVE_ROUTING_POLICY_VERSION,
      selectedModel: expect.any(String),
      selectedEffort: expect.any(String),
    });
  });

  it("P5-D0-22 / P5-D0-23 / P5-D0-24 — Fake boundary + same Runner + zero live", async () => {
    const model = new ScriptedModel([[assistantMessage("ok")]]);
    const provider = new FakeConversationProvider({
      toolScript: [{ kind: "message", text: "[TEST/FAKE] boundary." }],
    });
    const spy = vi.spyOn(globalThis, "fetch").mockImplementation(() => {
      throw new Error("UNEXPECTED_LIVE_FETCH");
    });
    try {
      const result = await runNoraCognitiveTurn({
        correlationId: "p5-d0-22",
        projectId: "prj:p5",
        messages: [
          { role: "system", content: sfiaBoundaryInstructions() },
          { role: "user", content: "fake boundary" },
        ],
        provider,
        enableTools: false,
        cognitiveWorkloadSignals: {
          ambiguity: "low",
          reasoningDepth: "low",
          sourceBreadth: "low",
          verificationNeed: "low",
          contradictionRisk: "low",
        },
        trustedSfiaProfile: "trusted-profile",
        // Eval pin with ScriptedModel proves same Agents Runner path remains usable.
        evalModelReasoningControl: {
          modelId: "gpt-6-luna",
          reasoningEffort: "low",
          agentsModel: model,
        },
      });
      expect(result.cognitiveRuntime).toBe("agents");
      expect(result.evalPinnedModelId).toBe("gpt-6-luna");
      expect(spy).not.toHaveBeenCalled();
    } finally {
      spy.mockRestore();
    }
  });
});

```

### p5.s01.integratedProduct.d0.test.ts
```ts
/** @vitest-environment node */
/**
 * P5-S01 — Integrated Product vertical slice D0 (ZERO REAL).
 *
 * Correction Pass 01 CP2: TRUE Product server path
 *   projectAssistantSendAction
 *   → orchestrateAssistantSend
 *   → analyzeIntent (F2)
 *   → composeStudioCognitiveContext
 *   → orchestrateProjectAssistantTurn (F1)
 *   → runNoraCognitiveTurn
 *   → CWP → Strategy → CognitiveRoutingPolicy
 *   → Fake external LLM → SAME Agents Runner
 *
 * Prior direct runNoraCognitiveTurn proof retained as seam unit evidence.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  P5_COGNITIVE_ROUTING_POLICY_VERSION,
  P5_TARGET_MODEL_COHORT,
  runNoraCognitiveTurn,
  sfiaBoundaryInstructions,
} from "@/lib/nora-cognitive-runtime";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import { composeStudioCognitiveContext } from "@/features/project-assistant/f2/studioCognitiveContext";
import { resolveProductDoctrineRegistryRoot } from "@/lib/vertical-slice-runtime/paths";
import { DEFAULT_PRODUCT_DOCTRINE_PIN } from "@/lib/oa/doctrine/product/constants";
import type { ProjectAssistantContextDto } from "@/features/project-assistant/types";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
import { projectAssistantSendAction } from "@/features/project-assistant/actions";
import { ProjectAssistantMemoryEventSink } from "@/features/project-assistant/memoryEventSink";
import type { TechnicalEvent } from "@/lib/platform/observability/types";
import * as routingPolicy from "@/lib/nora-cognitive-runtime/cognitiveRoutingPolicy";
import * as cognitiveRuntime from "@/lib/nora-cognitive-runtime/runNoraCognitiveTurn";

function analysisStub(): IntentAnalysisDto {
  return {
    intentClass: "informative",
    parseOk: true,
    candidateCycleTypeId: null,
    signals: null,
    cognitiveWorkload: {
      ambiguity: "low",
      reasoningDepth: "low",
      sourceBreadth: "low",
      toolDependency: "low",
      contradictionRisk: "low",
      verificationNeed: "low",
    },
    contradictionCandidate: null,
    challengeResponseAssessment: null,
    objective: null,
    scope: null,
    rephrasedRequest: null,
    outOfScope: [],
    risks: [],
    reservations: [],
    stopConditions: [],
    activatedBlocks: [],
    expectedOutcome: null,
    criticalJustification: null,
    requestedOperation: null,
    executionIntent: null,
  };
}

describe("P5-S01 — integrated Product path D0", () => {
  const tempDirs: string[] = [];
  let projectId = "";
  let lpsId = "";
  let productDbPath = "";
  const prevFake = process.env.OPS1_CONVERSATION_PROVIDER;
  const prevKey = process.env.OPENAI_API_KEY;
  const prevModel = process.env.OPENAI_MODEL;

  beforeEach(async () => {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    delete process.env.OPENAI_API_KEY;
    delete process.env.OPENAI_MODEL;
    setConversationProviderForTests(null);
    resetRuntimeApplicationServiceForTests();
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-p5-s01-"));
    tempDirs.push(dir);
    productDbPath = path.join(dir, "oa-product.sqlite");
    const runtime = getRuntimeApplicationService({
      productDbPath,
      auditMode: "noop",
      nowIso: "2026-10-05T08:00:00.000Z",
    });
    const created = await runtime.createProject({
      name: "Product Simplification P5-S01",
      objective:
        "Premier slice intégré Conversation + contexte sémantique + routing",
      context: "P5-S01 vertical slice D0",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: "P5S01",
      idempotencyKey: `idem:p5-s01-${Date.now()}-${Math.random()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("createProject failed");
    projectId = created.projectId;
    const project = await runtime.getProject(projectId);
    expect(project.ok).toBe(true);
    if (!project.ok) throw new Error("getProject failed");
    lpsId = project.livingState.id;
    expect(lpsId).toBeTruthy();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    setConversationProviderForTests(null);
    resetRuntimeApplicationServiceForTests();
    if (prevFake === undefined) delete process.env.OPS1_CONVERSATION_PROVIDER;
    else process.env.OPS1_CONVERSATION_PROVIDER = prevFake;
    if (prevKey === undefined) delete process.env.OPENAI_API_KEY;
    else process.env.OPENAI_API_KEY = prevKey;
    if (prevModel === undefined) delete process.env.OPENAI_MODEL;
    else process.env.OPENAI_MODEL = prevModel;
    while (tempDirs.length) {
      const dir = tempDirs.pop();
      if (dir) fs.rmSync(dir, { recursive: true, force: true });
    }
  });

  it("seam — real Product Project/LPS + routing + Fake boundary + same Runner", async () => {
    const fetchSpy = vi.spyOn(globalThis, "fetch").mockImplementation(() => {
      throw new Error("UNEXPECTED_LIVE_FETCH_P5_S01");
    });

    try {
      const projectDto: ProjectAssistantContextDto = {
        projectId,
        name: "Product Simplification P5-S01",
        shortReference: "P5S01",
        objective:
          "Premier slice intégré Conversation + contexte sémantique + routing",
        contextSummary: "P5-S01 vertical slice D0",
        criticality: "STANDARD",
        constraints: ["ZERO REAL"],
        lpsId,
        lpsVersion: 1,
        lpsCreatedAt: "2026-10-05T08:00:00.000Z",
        doctrineId: DEFAULT_PRODUCT_DOCTRINE_PIN.doctrinePackageId,
        doctrineVersion: DEFAULT_PRODUCT_DOCTRINE_PIN.version,
        doctrineDigest: DEFAULT_PRODUCT_DOCTRINE_PIN.digest,
        doctrineStatus: "product-studio-native",
        runtimeMode: "local",
        persistence: "product-sqlite",
        readiness: "ready",
      };

      const runtime = getRuntimeApplicationService();
      const composed = await composeStudioCognitiveContext({
        analysis: analysisStub(),
        project: projectDto,
        registryRoot: resolveProductDoctrineRegistryRoot(),
        truthCContext: "P5-S01 vertical slice D0",
        oa: runtime.oa!,
      });
      expect(composed.ok).toBe(true);
      if (!composed.ok) throw new Error("composeStudioCognitiveContext failed");
      expect(composed.context.projectTruth.projectId).toBe(projectId);
      expect(composed.context.projectTruth.lpsId).toBe(lpsId);
      expect(composed.context.limits.truthOutranksConversation).toBe(true);
      expect(fs.existsSync(productDbPath)).toBe(true);

      const provider = new FakeConversationProvider({
        toolScript: [
          {
            kind: "message",
            text: "[TEST/FAKE] P5-S01 integrated Product path — zero durable mutation.",
          },
        ],
      });

      const result = await runNoraCognitiveTurn({
        correlationId: `logical:${projectId}:p5-s01-turn-1`,
        projectId,
        messages: [
          {
            role: "system",
            content: [
              sfiaBoundaryInstructions(),
              "",
              `ProjectId=${projectId}`,
              `LpsId=${lpsId}`,
              `Objective=${projectDto.objective}`,
            ].join("\n"),
          },
          {
            role: "user",
            content:
              "Peux-tu me rappeler le contexte courant de ce projet sans rien modifier ?",
          },
        ],
        provider,
        enableTools: false,
        turnWorkloadContext: {
          userContentLength: 64,
          historyMessageCount: 0,
          projectCriticality: "STANDARD",
        },
        semanticCognitiveWorkload: analysisStub().cognitiveWorkload,
        trustedSfiaProfile: "trusted-profile",
      });

      expect(result.cognitiveRuntime).toBe("agents");
      expect(result.selectedModelId).toBeTruthy();
      expect(P5_TARGET_MODEL_COHORT).toContain(
        result.selectedModelId as (typeof P5_TARGET_MODEL_COHORT)[number],
      );
      expect(result.cognitiveRoutingPolicyVersion).toBe(
        P5_COGNITIVE_ROUTING_POLICY_VERSION,
      );
      expect(result.cognitiveStrategyClass).toBeTruthy();
      expect(result.selectedReasoningEffort).toBeTruthy();
      expect(result.text).toMatch(/P5-S01|FAKE|contexte|projet/i);
      expect((result as { humanDecisionId?: string }).humanDecisionId).toBeUndefined();
      expect(fetchSpy).not.toHaveBeenCalled();
      expect(fs.existsSync(productDbPath)).toBe(true);
    } finally {
      fetchSpy.mockRestore();
    }
  });

  it("CP2 — TRUE Product server path: SendAction → F2 → Semantic Context → F1 → routing → Fake Runner", async () => {
    const fetchSpy = vi.spyOn(globalThis, "fetch").mockImplementation(() => {
      throw new Error("UNEXPECTED_LIVE_FETCH_P5_S01_CP2");
    });

    const emitted: TechnicalEvent[] = [];
    const originalEmit = ProjectAssistantMemoryEventSink.prototype.emit;
    const emitSpy = vi
      .spyOn(ProjectAssistantMemoryEventSink.prototype, "emit")
      .mockImplementation(function (
        this: ProjectAssistantMemoryEventSink,
        event: TechnicalEvent,
      ) {
        emitted.push(event);
        return originalEmit.call(this, event);
      });

    const routingSpy = vi.spyOn(routingPolicy, "decideCognitiveRouting");
    const turnSpy = vi.spyOn(cognitiveRuntime, "runNoraCognitiveTurn");

    const sessionDbPath = path.join(
      path.dirname(productDbPath),
      "nora-session.sqlite",
    );

    const provider = new FakeConversationProvider({
      toolScript: [
        {
          kind: "message",
          text: "[TEST/FAKE] P5-S01 server-path Conversation — aucune mutation durable.",
        },
      ],
    });

    try {
      const result = await projectAssistantSendAction({
        projectId,
        content:
          "Peux-tu me rappeler le contexte courant de ce projet sans rien modifier ?",
        provider,
        sessionDbPath,
      });

      expect(result.ok).toBe(true);
      if (!result.ok) throw new Error(`send failed: ${JSON.stringify(result)}`);

      expect(result.project.projectId).toBe(projectId);
      expect(result.project.lpsId).toBe(lpsId);
      expect(result.cognitiveRuntime).toBe("agents");
      expect(result.text.length).toBeGreaterThan(0);
      // Client DTO must not expose routing internals (MW2 invariant preserved).
      expect(result).not.toHaveProperty("cognitiveStrategyClass");
      expect(result).not.toHaveProperty("selectedReasoningEffort");
      expect(result).not.toHaveProperty("cognitiveRoutingPolicyVersion");

      // F1 + routing actually traversed.
      expect(turnSpy).toHaveBeenCalled();
      expect(routingSpy).toHaveBeenCalled();
      const routingDecision = routingSpy.mock.results.find(
        (r) => r.type === "return" && r.value && (r.value as { ok?: boolean }).ok,
      )?.value as
        | {
            ok: true;
            selectedModel: string;
            selectedReasoningEffort: string;
            policyVersion: string;
            strategyClass: string;
            cognitiveTaskId: string;
          }
        | undefined;
      expect(routingDecision).toBeTruthy();
      expect(P5_TARGET_MODEL_COHORT).toContain(
        routingDecision!.selectedModel as (typeof P5_TARGET_MODEL_COHORT)[number],
      );
      expect(routingDecision!.selectedReasoningEffort).toBeTruthy();
      expect(routingDecision!.policyVersion).toBe(
        P5_COGNITIVE_ROUTING_POLICY_VERSION,
      );
      expect(routingDecision!.strategyClass).toBeTruthy();
      expect(routingDecision!.cognitiveTaskId.length).toBeGreaterThan(0);

      const strategyEvents = emitted.filter(
        (e) => e.type === "COGNITIVE_STRATEGY_SELECTED",
      );
      const routingEvents = emitted.filter(
        (e) => e.type === "COGNITIVE_ROUTING_SELECTED",
      );
      expect(strategyEvents.length).toBeGreaterThanOrEqual(1);
      expect(routingEvents.length).toBeGreaterThanOrEqual(1);
      expect(routingEvents[0]!.detail?.routingPolicyVersion).toBe(
        P5_COGNITIVE_ROUTING_POLICY_VERSION,
      );
      expect(P5_TARGET_MODEL_COHORT).toContain(
        routingEvents[0]!.detail?.selectedModel as string,
      );

      // No HD/Confirmation manufactured by routing.
      expect(
        JSON.stringify(result).match(/humanDecisionId|authorityEnvelope/i),
      ).toBeNull();
      expect(fetchSpy).not.toHaveBeenCalled();
      expect(fs.existsSync(productDbPath)).toBe(true);
      // Same Product SQLite — no second Product store.
      const siblingDbs = fs
        .readdirSync(path.dirname(productDbPath))
        .filter((f) => f.endsWith(".sqlite"));
      expect(siblingDbs).toContain("oa-product.sqlite");
    } finally {
      emitSpy.mockRestore();
      fetchSpy.mockRestore();
    }
  });
});

```

### p5.s01.deterministicBypass.d0.test.ts
```ts
/** @vitest-environment node */
/**
 * P5-S01 Correction Pass 01 — CP3 Deterministic NO-LLM bypass proof.
 *
 * Representative EXISTING Product operation:
 *   composeStudioCognitiveContext
 * (Studio Hybrid Context Envelope — deterministic Product projection;
 *  NO LLM · NO cognitive router · trusted operation identity).
 *
 * ZERO REAL. No keyword classification. No DeterministicRouter.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import { composeStudioCognitiveContext } from "@/features/project-assistant/f2/studioCognitiveContext";
import { resolveProductDoctrineRegistryRoot } from "@/lib/vertical-slice-runtime/paths";
import { DEFAULT_PRODUCT_DOCTRINE_PIN } from "@/lib/oa/doctrine/product/constants";
import type { ProjectAssistantContextDto } from "@/features/project-assistant/types";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
import * as routingPolicy from "@/lib/nora-cognitive-runtime/cognitiveRoutingPolicy";
import * as cognitiveRuntime from "@/lib/nora-cognitive-runtime/runNoraCognitiveTurn";
import * as fakeProviderModule from "@/lib/platform/ai/fakeProvider";
import { ProjectAssistantMemoryEventSink } from "@/features/project-assistant/memoryEventSink";
import type { TechnicalEvent } from "@/lib/platform/observability/types";

function analysisStub(): IntentAnalysisDto {
  return {
    intentClass: "informative",
    parseOk: true,
    candidateCycleTypeId: null,
    signals: null,
    cognitiveWorkload: {
      ambiguity: "low",
      reasoningDepth: "low",
      sourceBreadth: "low",
      toolDependency: "low",
      contradictionRisk: "low",
      verificationNeed: "low",
    },
    contradictionCandidate: null,
    challengeResponseAssessment: null,
    objective: null,
    scope: null,
    rephrasedRequest: null,
    outOfScope: [],
    risks: [],
    reservations: [],
    stopConditions: [],
    activatedBlocks: [],
    expectedOutcome: null,
    criticalJustification: null,
    requestedOperation: null,
    executionIntent: null,
  };
}

describe("P5-S01 — deterministic NO-LLM bypass D0 (CP3)", () => {
  const tempDirs: string[] = [];
  let projectId = "";
  let lpsId = "";

  beforeEach(async () => {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    resetRuntimeApplicationServiceForTests();
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-p5-s01-det-"));
    tempDirs.push(dir);
    const productDbPath = path.join(dir, "oa-product.sqlite");
    const runtime = getRuntimeApplicationService({
      productDbPath,
      auditMode: "noop",
      nowIso: "2026-10-05T08:00:00.000Z",
    });
    const created = await runtime.createProject({
      name: "P5-S01 Deterministic Bypass",
      objective: "Prove composeStudioCognitiveContext never enters cognition",
      context: "CP3 deterministic Product mechanic",
      criticality: "STANDARD",
      constraints: ["ZERO REAL", "NO LLM"],
      shortReference: "P5DET",
      idempotencyKey: `idem:p5-det-${Date.now()}-${Math.random()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("createProject failed");
    projectId = created.projectId;
    const project = await runtime.getProject(projectId);
    expect(project.ok).toBe(true);
    if (!project.ok) throw new Error("getProject failed");
    lpsId = project.livingState.id;
  });

  afterEach(() => {
    vi.restoreAllMocks();
    resetRuntimeApplicationServiceForTests();
    delete process.env.OPS1_CONVERSATION_PROVIDER;
    while (tempDirs.length) {
      const dir = tempDirs.pop();
      if (dir) fs.rmSync(dir, { recursive: true, force: true });
    }
  });

  it("CP3 — composeStudioCognitiveContext: 0 provider / 0 router / 0 Nora turn", async () => {
    const fetchSpy = vi.spyOn(globalThis, "fetch").mockImplementation(() => {
      throw new Error("UNEXPECTED_LIVE_FETCH_P5_S01_CP3");
    });
    const routingSpy = vi.spyOn(routingPolicy, "decideCognitiveRouting");
    const turnSpy = vi.spyOn(cognitiveRuntime, "runNoraCognitiveTurn");
    const completeSpy = vi.spyOn(
      fakeProviderModule.FakeConversationProvider.prototype,
      "complete",
    );
    const structuredSpy = vi.spyOn(
      fakeProviderModule.FakeConversationProvider.prototype,
      "completeStructured",
    );
    const roundSpy = vi.spyOn(
      fakeProviderModule.FakeConversationProvider.prototype,
      "completeRound",
    );

    const emitted: TechnicalEvent[] = [];
    const originalEmit = ProjectAssistantMemoryEventSink.prototype.emit;
    const emitSpy = vi
      .spyOn(ProjectAssistantMemoryEventSink.prototype, "emit")
      .mockImplementation(function (
        this: ProjectAssistantMemoryEventSink,
        event: TechnicalEvent,
      ) {
        emitted.push(event);
        return originalEmit.call(this, event);
      });

    try {
      const projectDto: ProjectAssistantContextDto = {
        projectId,
        name: "P5-S01 Deterministic Bypass",
        shortReference: "P5DET",
        objective: "Prove composeStudioCognitiveContext never enters cognition",
        contextSummary: "CP3 deterministic Product mechanic",
        criticality: "STANDARD",
        constraints: ["ZERO REAL", "NO LLM"],
        lpsId,
        lpsVersion: 1,
        lpsCreatedAt: "2026-10-05T08:00:00.000Z",
        doctrineId: DEFAULT_PRODUCT_DOCTRINE_PIN.doctrinePackageId,
        doctrineVersion: DEFAULT_PRODUCT_DOCTRINE_PIN.version,
        doctrineDigest: DEFAULT_PRODUCT_DOCTRINE_PIN.digest,
        doctrineStatus: "product-studio-native",
        runtimeMode: "local",
        persistence: "product-sqlite",
        readiness: "ready",
      };

      const runtime = getRuntimeApplicationService();
      const composed = await composeStudioCognitiveContext({
        analysis: analysisStub(),
        project: projectDto,
        registryRoot: resolveProductDoctrineRegistryRoot(),
        truthCContext: "CP3 deterministic Product mechanic",
        oa: runtime.oa!,
      });

      expect(composed.ok).toBe(true);
      if (!composed.ok) throw new Error("compose failed");
      // Product semantics preserved — real Project/LPS identity.
      expect(composed.context.projectTruth.projectId).toBe(projectId);
      expect(composed.context.projectTruth.lpsId).toBe(lpsId);
      expect(composed.context.limits.truthOutranksConversation).toBe(true);

      // Zero cognition / provider / router.
      expect(turnSpy).not.toHaveBeenCalled();
      expect(routingSpy).not.toHaveBeenCalled();
      expect(completeSpy).not.toHaveBeenCalled();
      expect(structuredSpy).not.toHaveBeenCalled();
      expect(roundSpy).not.toHaveBeenCalled();
      expect(fetchSpy).not.toHaveBeenCalled();

      const strategyEvents = emitted.filter(
        (e) => e.type === "COGNITIVE_STRATEGY_SELECTED",
      );
      const routingEvents = emitted.filter(
        (e) => e.type === "COGNITIVE_ROUTING_SELECTED",
      );
      expect(strategyEvents).toHaveLength(0);
      expect(routingEvents).toHaveLength(0);
    } finally {
      emitSpy.mockRestore();
      fetchSpy.mockRestore();
    }
  });
});

```


======================================================================
COMPLETE UPDATED P5 DELIVERY DOCUMENT
======================================================================
```md
# SFIA Studio — Chat-First Product Simplification — P5 Integrated Delivery (P5-S01 — First Integrated Product Vertical Slice)

| Métadonnée | Valeur |
| --- | --- |
| **Projet** | SFIA Studio |
| **Macro** | `STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01` |
| **Milestone** | **P5 — INTEGRATED DELIVERY** (Delivery / Implementation / Evidence source) |
| **Slice** | **P5-S01 — First Integrated Product Vertical Slice** |
| **Pass** | **P5-S01 CORRECTION PASS 01** (CP1–CP5 Critical Review blockers) |
| **Typologie** | Delivery evidence dans macro **EVOL** — **≠** doctrine · **≠** nouvelle architecture |
| **Autorité architecture** | **P4** (`04-chat-first-product-simplification-semantic-projection-cognitive-architecture.md`) — **inchangée** |
| **Branche** | `delivery/sfia-studio-product-simplification-p5-s01-integrated-product-vertical-slice` |
| **Base / HEAD Git** | `04527bede4a3aad1853387b9eb39af3fe0615412` (changements P5-S01 = **working tree local non commité**) |
| **Base d’intégration** | PR **#554** **MERGED** · CI **#676** **SUCCESS** · Required Gate **SUCCESS** |
| **Worktree** | `/Users/morris/Projects/sfia-studio-chat-first-product-simplification-p3` |
| **P5 AUTHORIZED BY MORRIS** | **YES** (GO P5 consommé dans cette conversation) |
| **P5 STARTED** | **YES** |
| **P5 IN PROGRESS** | **YES** |
| **P5-S01** | **LOCAL CANDIDATE** — D0 **PASS WITH VISUAL RESERVES** (CP1–CP5 Correction Pass 01) |
| **R1 / R2 / R3** | **NOT STARTED** |
| **ZERO REAL** | **YES** — aucun appel OpenAI réel dans P5-S01 |
| **READY FOR REAL** | **NO** |
| **runtime v3** | **NON ADOPTED** |
| **Git (ce pass)** | **NO** project commit · **NO** push · **NO** PR · **NO** merge |
| **Langue** | Français (identifiants canoniques anglais préservés) |
| **Fichier** | `projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md` |
| **Date** | 2026-10-05 · Europe/Paris |

> **Lecture rapide.** Ce document est la **source de livraison / implémentation / preuve** de P5-S01. Il **décrit ce qui a été construit et ce qui est prouvé**, avec ses limites. Il **ne redéfinit rien** : P4 reste l’autorité d’architecture, P3 l’autorité d’expérience/Figma, P2 l’autorité fonctionnelle, P1 l’autorité de simplification. **P5-S01 = LOCAL CANDIDATE avec réserves** : routage cognitif D0 + convergence Workspace/Conversation P3 implémentés et testés localement ; **fidélité visuelle runtime vs Figma NON prouvée** ; **ZERO REAL** ; **R1/R2/R3 NOT STARTED** ; **READY FOR REAL = NO**.

> **Règle de lecture des preuves.** *Implémenté* ≠ *prouvé* ≠ *intégré* ≠ *REAL*. Chaque affirmation ci-dessous est qualifiée par son niveau de preuve. Les résultats de tests/typecheck/lint/build sont ceux **rapportés par la passe de livraison** ; ce document n’en invente pas d’autres et ne les a pas ré-exécutés lors de sa rédaction.

---

## 1. Metadata / authority

### 1.1 Trajectoire CURRENT

```text
P1 = VALIDATED / INTEGRATED / CLOSED
P2 = VALIDATED / INTEGRATED / CLOSED          (PR #549)
P3 = VALIDATED / INTEGRATED / POST-MERGE VERIFIED / CLOSED   (PR #550 + #551)
P4 = GLOBAL VALIDATED / INTEGRATED / POST-MERGE VERIFIED / CLOSED BY MORRIS
     (PR #552 · closure patch PR #553 · truth-sync PR #554 MERGED)
main @ 04527bede4a3aad1853387b9eb39af3fe0615412
CI #676 = SUCCESS · Required Gate = SUCCESS
Morris P5 AUTHORIZATION = CONSUMED (GO P5)
P5 = AUTHORIZED / STARTED / IN PROGRESS
P5-S01 = LOCAL CANDIDATE (visual reserves) — working tree, NOT committed
```

### 1.2 Hiérarchie d’autorité

| Domaine | Autorité | Rôle de ce document |
| --- | --- | --- |
| Simplification (PIB, MATERIAL/PROTECTIVE/ACCIDENTAL) | P1 | Hérite |
| Fonctionnel (FOM, Deliverable ≠ Artifact, HD) | P2 | Hérite |
| Workspace / IA / Figma | P3 | Hérite · implémente un sous-ensemble |
| Sémantique / Projection / Cognition / Routing / Entry Contract | **P4** | Hérite · **implémente un sous-ensemble D0** |
| Delivery / implémentation / preuve | **P5 (ce document)** | **Source de preuve uniquement** |

### 1.3 Ce que ce document n’est pas

- **≠** nouvelle doctrine Product ni architecture ;
- **≠** décision d’architecture (toute divergence P4 exige un gate Morris) ;
- **≠** preuve REAL, R1/R2/R3, ou pixel-perfect ;
- **≠** intégration Git (aucun commit/push/PR/merge dans ce pass) ;
- **≠** modification de la Build Doctrine ou de Figma (Figma = **READ ONLY**).

---

## 2. Morris P5 authorization

| Élément | Statut |
| --- | --- |
| Requalification ChatGPT P5 (P4 §51) | **COMPLETED** (recommandation, ≠ autorisation) |
| **Morris P5 AUTHORIZATION (GO P5)** | **YES — CONSUMED dans cette conversation** |
| P5 AUTHORIZED BY MORRIS | **YES** |
| P5 STARTED | **YES** |
| P5 IN PROGRESS | **YES** |

### 2.1 Ce que le GO P5 autorise / n’autorise pas

| Autorisé | **Non** autorisé (gate distinct requis) |
| --- | --- |
| Implémentation locale P5 (code, tests, CSS, assets Product) | Commit / push / PR du projet |
| Slice P5-S01 en working tree | Merge sur main |
| Tests D0 / UI locaux | **REAL** (appel OpenAI réel) · R1/R2/R3 |
| | Adoption runtime v3 |
| | Mutation Figma |
| | Revendication « READY FOR REAL » |

**Le GO P5 est consommé ; il n’est pas un GO REAL ni un GO Git.**

---

## 3. P5 mission

P5 = **livrer** progressivement, **sur le même chemin Product**, ce que P4 a rendu implémentable : un monde Product unique, des projections role-aware, la cognition Nora routée par Strategy-first bounded router, et l’expérience P3 — **sans** second Nora, **sans** SharedKnowledgeStore, **sans** router service, **sans** second modèle Product, **sans** nouvelle plateforme d’orchestration.

**Règle cœur (P4 §52) :** *COGNITION AND PRODUCT EXPERIENCE CONVERGE EARLY.* Pas de programme « UI fixtures » + « laboratoire router » qui ne convergent qu’à la fin.

**Mission de P5-S01 :** premier **vertical slice intégré** — politique de routage cognitif minimale branchée dans le runtime Nora existant **et** convergence du Workspace/Conversation Pre-M6 vers la structure P3, sur le **même** chemin (Project → Conversation → contexte sémantique → CWP → Strategy → Routing → Agents Runner).

**Non-mission de P5-S01 :** REAL, R1/R2/R3, Aperçu/Exécution/Journal/Historique/Synthèses object-native complets, Auth visual, Activity/STOP, Deliverable/Artifact exercé, P6.

---

## 4. P1→P4 inheritance contract

| Source | Contrat hérité (résumé) | Traitement P5-S01 |
| --- | --- | --- |
| **P1** | Simplification : PIB heuristique ; MATERIAL préservé · PROTECTIVE protégé · ACCIDENTAL réduit ; admin burden ≈ 0 nominal ; Net Complexity Reduction à l’échelle intégrée ; pas de metrics factory | Évaluation **qualitative** (§23) ; **NCR NOT PROVEN** |
| **P2** | Même sémantique d’autorité ; Deliverable ≠ Artifact ; Execution optionnelle ; recovery Product-truth-first ; pas de Universal Validator Engine | Aucune sémantique d’autorité élargie (tests P5-SEM, P5-D0-20) |
| **P3** | Workspace/IA/Figma ; pas de déviation visuelle intentionnelle ; reduced-motion ; a11y ; pas de SoT UI-locale ; pas de redesign par convenance | Structure P3 implémentée par **convergence** de `ProductShell` / `ProjectWorkspacePage` ; **fidélité runtime NON prouvée** |
| **P4** | Un monde Product ; projections bornées ; deterministic NO-LLM bypass avant routing ; Strategy-first bounded router ; cohort Luna/Sol/Astra ; quality floor avant FinOps ; escalation ≤ 1 ; same Nora/same Agents path ; REAL-FIRST dès que la frontière OpenAI est accessible ; OPENAI_MODEL/EFFORT TEMP WITH EXIT | Politique de routage implémentée (D0) ; **REAL-FIRST : frontière non exercée → ZERO REAL, déclaré** |

**Aucun contrat hérité n’a été réinterprété silencieusement.** Les écarts et réserves sont listés en §24–§25.

---

## 5. P5 Entry Contract — six dimensions (statut P5-S01)

P4 §51 : satisfaire cinq dimensions sur six **≠** Product Simplification complète. P5-S01 ne revendique **aucune** dimension « complète » ; statut honnête par dimension :

| # | Dimension | Contenu P5-S01 | Statut P5-S01 |
| --- | --- | --- | --- |
| 1 | **FUNCTIONAL** (P2) | Chemin Project → Conversation existant préservé ; aucun nouvel objet Product ; pas de nouvelle sémantique d’autorité | **PARTIEL — préservé, non étendu** |
| 2 | **EXPERIENCE** (P3) | Rail 192px + Meridian ; Workspace : header global, onglets Conversation/Aperçu/Exécution, focus bar, Conversation + Contexte du projet 356px ; reduced-motion sur scroll conversation | **CANDIDATE AVEC RÉSERVES** — screenshots runtime vs Figma **non capturés** ; Compact/Mobile **non prouvés** |
| 3 | **SEMANTIC INTEGRITY** (P4) | Contexte projet présenté depuis projections **déjà chargées** (présentation-only) ; routing ≠ HumanDecision ≠ Recommendation disposition ; modèle ne peut encoder de champ d’autorité | **D0 PASS (tests invariants)** — Journal/Historique/Synthèses/Aperçu object-native **non livrés** |
| 4 | **COGNITION** (P4) | `cognitiveRoutingPolicy.ts` ; Quality Floor ; cohort ; escalation max = 1 (politique) ; télémetrie `COGNITIVE_ROUTING_SELECTED` ; câblage après Strategy | **D0 PASS** — **ZERO REAL** ; boucle d’escalade runtime **non exercée** ; F2 `analyzeIntent` **non aligné** |
| 5 | **SIMPLIFICATION** (P1) | Pilote ne choisit ni modèle ni effort ; panneau contexte lecture seule ; pas de nouveau cockpit | **Évaluation qualitative uniquement** — **Net Complexity Reduction NOT PROVEN** |
| 6 | **PROOF** | D0 sur chemin intégré (Fake, même Runner) ; UI test layout ; régressions | **D0 seulement** — R1/R2/R3 **NOT STARTED** ; visual fidelity **NON prouvée** |

**Verdict dimensionnel :** 0/6 dimensions « complètes » ; 6/6 touchées à périmètre S01 avec réserves explicites.

---

## 6. Current repository baseline

| Élément | Valeur |
| --- | --- |
| Base / HEAD | `04527bede4a3aad1853387b9eb39af3fe0615412` |
| PR d’entrée | **#554 — MERGED** (P4 final repository truth-sync) |
| CI | **#676 — SUCCESS** |
| Required Gate | **SUCCESS** |
| Branche P5-S01 | `delivery/sfia-studio-product-simplification-p5-s01-integrated-product-vertical-slice` |
| État du working tree | Modifications P5-S01 **non commitées** (voir §9.4) |
| Scratch non suivi | `.tmp-sfia-review/**` (exports Figma de référence, revue ChatGPT) — **hors livrable** |

**Rappel :** la preuve CI #676 qualifie la **base**, pas les modifications P5-S01 locales. Aucune CI n’a été exécutée sur P5-S01 (pas de push).

---

## 7. Critical path

Trajectoire P4 §52, avec statut P5-S01 :

| # | Étape P4 §52 | Statut |
| --- | --- | --- |
| 1 | Revalider la frontière de capacité du provider cible | **FAIT (snapshot daté, D0)** — `buildP5TargetCapabilityManifest` ; revalidation à refaire avant REAL |
| 2 | Politique de routage minimale + deterministic NO-LLM bypass, câblée dans le runtime Nora existant | **FAIT (D0)** — bypass : aucune logique nouvelle (§19) |
| 3 | Premier vertical slice Product object-native via le chemin frontend P3-capable | **PARTIEL** — Workspace/Conversation + contexte ; pas d’objet Product matérialisé nouveau |
| 4 | R1 + R2 par ce même chemin | **NOT STARTED** |
| 5 | Inspection PIB / charge accidentelle | **Qualitative seulement** (§23) |
| 6 | Expansion projections (Aperçu, Exécution, Journal, Historique, Synthèses, Auth, Activity) | **NOT STARTED** (onglets présents, projections object-native non livrées) |
| 7 | Deliverable / Artifact exercés | **NOT STARTED** |
| 8 | R3 chemin Product intégré représentatif | **NOT STARTED** |
| 9 | Comparaison visuelle runtime/Figma | **NON capturée** (réserve) |
| 10 | P6 QA globale + NCR | **Hors périmètre** |

---

## 8. Delivery slicing strategy

- **Slice = chemin vertical bout-en-bout minimal**, pas un sous-système isolé complet.
- **Convergence précoce** : cognition (routing) + expérience (Workspace P3) dans la **même** slice.
- **Réutilisation d’abord** : adapter `ProductShell`, `ProjectWorkspacePage`, `runNoraCognitiveTurn`, `capabilityBudget`, tokens `--pm6-*` existants ; **aucun** nouveau design system, **aucun** nouveau service.
- **Honnêteté de statut** : une slice reste *LOCAL CANDIDATE* tant que les preuves listées ne sont pas complètes et que le gate Git Morris n’est pas passé.

### 8.1 Découpage indicatif

| Slice | Contenu | Statut |
| --- | --- | --- |
| **P5-S01** | Routing policy D0 + Workspace/Conversation P3 + contexte projet | **LOCAL CANDIDATE (réserves visuelles)** |
| P5-S02+ | À décomposer après gate S01 (cf. §26) — **non engagé** | **NOT STARTED** |

Le découpage S02+ est une **liste de travaux restants**, pas un engagement ni une doctrine.

---

## 9. P5-S01 scope

### 9.1 Inclus (implémenté localement)

1. **Cognitive routing policy** (pure, non persistante, non autoritative).
2. **Capability manifest** P5 TARGET (cohort), sans toucher au MW0 historique.
3. **Câblage** du routing dans `runNoraCognitiveTurn` après Strategy.
4. **Identité de tâche cognitive** : `correlationId` d’`orchestrateTurn` préfère `logicalTurnId`.
5. **Télémétrie** `COGNITIVE_ROUTING_SELECTED` (sans CoT).
6. **Shell Pre-M6** : rail P3 192px, emblème Meridian, « Projets récents » réels.
7. **ProjectWorkspacePage** : structure P3 (header global, onglets, focus bar, Conversation + Contexte du projet 356px).
8. **Tokens** `--pm6-*` convergés vers les couleurs P3.
9. **Reduced-motion** pour l’auto-scroll de conversation.
10. **Tests D0 + UI** (§21).

### 9.2 Exclu

REAL · R1/R2/R3 · Aperçu/Exécution/Journal/Historique/Synthèses object-native · Auth GitHub visual · Nora Activity/STOP · Deliverable/Artifact · Synthesis Product-derived · alignement F2 `analyzeIntent` · retrait OPENAI_MODEL/EFFORT · fusion des familles de tokens · preuve Compact/Mobile · P6.

### 9.3 Non-changements explicites

Pas de nouvelle table/store · pas de router service · pas de second Nora · pas de nouvelle plateforme · pas de modification Figma · pas de modification de la Build Doctrine.

### 9.4 Fichiers touchés (working tree, non commités)

| Zone | Fichiers |
| --- | --- |
| Cognition | `lib/nora-cognitive-runtime/cognitiveRoutingPolicy.ts` (**nouveau**) · `runNoraCognitiveTurn.ts` · `reasoningCapability.ts` · `types.ts` · `index.ts` |
| Capability / observabilité | `lib/nora-eval/capabilityBudget.ts` · `lib/platform/observability/types.ts` |
| Orchestration | `features/project-assistant/orchestrateTurn.ts` |
| Shell / Workspace | `ProductShell.tsx` / `.module.css` · `ProductRailRecents.tsx` (**nouveau**) · `ProjectWorkspacePage.tsx` / `.module.css` · `surfaces/ProjectContextSummary.tsx` / `.module.css` (**nouveaux**) · `workspaceContextPresentation.ts` (**nouveau**) |
| Surfaces / hooks / tokens | `surfaces/ConversationSurface.module.css` · `surfaces/LpsSurface.tsx` · `hooks/useProductConversation.ts` · `product-tokens.css` |
| Asset | `public/branding/meridian-emblem-product.png` (**nouveau**) |
| Tests | `p5.s01.cognitiveRouting.d0.test.ts` · `p5.s01.integratedProduct.d0.test.ts` · `p5.s01.semanticInvariants.d0.test.ts` · `p5.s01.workspaceLayout.ui.test.tsx` (**nouveaux**) · `automaticProjectResume.ui.test.tsx` (**ajusté**) |

---

## 10. Product representative journey

Journey cible P4 §52.1, tel que **couvert** par P5-S01 :

```text
REAL Project → P3 Conversation → real Project semantic context
→ (deterministic path OR Nora Semantic Context → CWP → Strategy → Product router)
→ real OpenAI when cognition required/authorized
→ Nora governed cognitive outcome / deterministic Product result
→ Studio materializes/updates real Product object when applicable
→ same object in Conversation / Aperçu / Journal / …
```

| Maillon | P5-S01 |
| --- | --- |
| Project (local Product, vrai LPS) | **D0 — exercé** (test intégré) |
| Conversation P3 (Workspace) | **Implémenté** — layout testé (UI) ; fidélité Figma non prouvée |
| Contexte sémantique projet | **D0 — exercé** (`composeStudioCognitiveContext`) ; panneau « Contexte du projet » en lecture seule |
| CWP → Strategy | **Existant, exercé** |
| Product router | **Implémenté, exercé D0** |
| OpenAI réel | **ZERO REAL** — Fake provider uniquement |
| Matérialisation / mise à jour d’objet Product nouveau | **NON couvert** |
| Même objet visible dans Aperçu/Journal/… | **NON couvert** (onglets = navigation/focus, pas projection object-native) |
| Evidence / Result / Deliverable·Artifact / Synthesis | **NON couvert** |
| PIB / charge accidentelle | **Qualitatif** (§23) |

**La journey est donc couverte en D0 sur son tronçon cognition + contexte + conversation, pas end-to-end Product.**

---

## 11. Current→Target reuse matrix

| Asset | CURRENT | P5-S01 disposition | Delta réalisé | Dette / sortie |
| --- | --- | --- | --- | --- |
| `ProductShell` (Pre-M6) | Shell produit existant | **ADAPT** | Rail P3 192px · Meridian · Projets récents | Famille tokens double (§24) |
| `ProjectWorkspacePage` | Page workspace Pre-M6 | **ADAPT** | Header global · onglets · focus bar · Conversation + Contexte 356px | Fidélité Figma non prouvée ; Aperçu/Exécution = focus/jump, pas projections |
| `ConversationSurface` | Surface conversation | **REUSE + CSS adapt** | Ajustements CSS (`ConversationSurface.module.css`) | — |
| `useProductConversation` | Hook conversation | **REUSE** | Reduced-motion sur auto-scroll | — |
| `LpsSurface` | « État du projet » | **REUSE** | `lpsNextAction` exporté (source unique de formulation) | — |
| `runNoraCognitiveTurn` | Runtime cognitif Nora | **ADAPT** | Routing après Strategy ; Fake garde adapter ; live utilise la chaîne modèle sélectionnée | Boucle escalade non exercée |
| `cognitiveWorkloadPolicy` | CWP / Strategy | **REUSE (inchangé)** | Consommé par la politique de routage | — |
| `capabilityBudget` | Manifests MW0 / courant | **ADAPT** | `buildP5TargetCapabilityManifest` ajouté ; **MW0 historique inchangé (FREEZE)** | Snapshot daté à revalider avant REAL |
| `reasoningCapability` | Validation capability fail-closed | **ADAPT** | Manifest optionnel ; fallback manifest P5 TARGET | — |
| `product-tokens.css` | `--pm6-*` | **ADAPT / converge** | Couleurs vers P3 ; **pas de `--p5-*`** | Dual `--sfia-*`/`--pm6-*` TEMP WITH EXIT |
| Meridian | Emblème Figma | **RECOVER** | `/branding/meridian-emblem-product.png` (§24.4) | Provenance à garder |
| `logicalProductTurn` | Identité de tour logique | **REUSE** | Fournit `logicalTurnId` | — |
| `studioCognitiveContext` | Contexte cognitif Studio | **REUSE** | Exercé dans le test intégré D0 | — |
| F2 `analyzeIntent` | Analyse d’intention F2 | **NON alignée** | Aucun | **P5-DEBT-F2-ROUTING-ALIGNMENT** (provider modèle statique) |

---

## 12. Frontend convergence plan

Principe P4 §27A / §51.2 : **un** layer de présentation P3-capable minimum-suffisant par réutilisation/convergence ; pas de nouveau programme UI de fixtures.

| Élément | Réalisé | Reste |
| --- | --- | --- |
| Famille de tokens canonique de convergence | `--pm6-*` (aucune famille `--p5-*` créée) | Retrait/fusion de `--sfia-*` |
| Palette | Convergée vers couleurs P3 (canvas, ink, bordures, rail) | Vérification contre Figma runtime |
| Shell | Rail 192px | Variantes Compact/Mobile à prouver |
| Workspace | Structure P3 | Surfaces object-native |
| Layouts `--pm6-*` | Largeurs LPS/Journal/contenu maintenues dans le même set | — |

**Contrainte respectée :** pas de nouvelle stack design-system, pas de seconde architecture responsive.

---

## 13. Figma contract

| Élément | Valeur |
| --- | --- |
| Fichier Figma | `m4g8j0gNbEzfIuH6S9AZJF` |
| Workspace Desktop | node **`46:2`** |
| Workspace Compact | node **`190:44`** |
| Workspace Mobile | node **`190:306`** |
| Mode d’accès | **READ ONLY** — aucune mutation Figma |
| Contrat | P3 préservé (aucune déviation visuelle intentionnelle) |

### 13.1 Statut de preuve

- Des **exports Figma** (références) existent en scratch non suivi : `.tmp-sfia-review/visual/figma/*.png` (dont `workspace-desktop-46-2.png`, fichiers `meridian-*.png`). Ce sont des **références Figma**, **pas** des captures runtime.
- **Aucune capture runtime comparative** n’a été produite (Playwright derrière auth). → **PAS de claim de fidélité** (§22).

---

## 14. Workspace implementation status

| Zone P3 | Implémentation | Preuve |
| --- | --- | --- |
| Rail latéral 192px | ✔ | Test UI layout (rendu) |
| Emblème Meridian | ✔ (`/branding/meridian-emblem-product.png`) | Asset présent ; fidélité visuelle non comparée |
| Projets récents (max 5, projets réels) | ✔ (`ProductRailRecents`, via `listProjectsRuntimeAction`) | Pas d’entrée inventée ; état loading/unavailable/ready |
| Header global | ✔ | UI test |
| Onglets Conversation / Aperçu / Exécution | ✔ (navigation/focus) | UI test |
| Focus bar | ✔ | UI test |
| Conversation | ✔ (`ConversationSurface`) | Régression Pre-M6 PASS |
| Contexte du projet 356px | ✔ (`ProjectContextSummary`, lecture seule) | UI test |
| Reduced-motion (auto-scroll) | ✔ | Code ; pas de test dédié rapporté |
| Compact / Mobile | **Non prouvé** | — |
| Aperçu / Exécution object-native | **Non livré** | — |
| Journal / Historique / Synthèses / Auth / Activity / STOP | **Non livré** | — |

Précisions :

- Tab **Aperçu** amène le panneau de contexte dans le champ de vision ; tab **Exécution** saute aux cartes d’exécution déjà présentes dans la conversation — **ce ne sont pas** de nouvelles surfaces/projections.
- Le panneau de contexte **n’héberge aucune action** : décisions et détails restent dans la conversation/Journal/lifecycle existants.

---

## 15. Semantic integration

- **Présentation uniquement** (`workspaceContextPresentation.ts`) : toutes les valeurs sont lues depuis des **projections déjà chargées** (état durable, projection lifecycle, journal de conversation, proposition active). Rien n’est persisté, rien n’est inféré au-delà.
- **Currentness honnête** : « À jour » seulement si état durable **et** transcript lisibles ; sinon « À vérifier » / « Lecture en cours » (`presentCurrentness`).
- **Trajectoire cycles** : bande « Terminé / En cours / Proposé » dérivée des instances de cycle (max 5 nœuds ; superseded/cancelled omis).
- **Formulation unique** du prochain pas : `lpsNextAction` partagé entre « État du projet » et le panneau de contexte.
- **Invariants D0** (`semanticInvariants`) : P5-SEM-05 (le choix de modèle n’encode aucun champ d’autorité) · P5-SEM-02/03 (routing ≠ HumanDecision ≠ Recommendation disposition) · P5-SEM-08 (sémantique Strategy Proposed hors router).

**Non couvert :** Synthesis Product-derived (le raccourci synthèse reste **désactivé** — aucune surface de synthèse Product), Journal/History read models P3, Deliverable representation.

---

## 16. Nora Semantic Context integration

- Le test intégré D0 exerce le **chemin réel local** : Project/LPS Product réels → `composeStudioCognitiveContext` (faits de contexte) → `runNoraCognitiveTurn` → CWP → Strategy → Routing → Fake provider → **même Agents Runner** → résultat Product-safe.
- **Même Nora, même Runner** : aucun second chemin ni second runtime.
- Le routing **ne lit pas** le contexte pour décider une autorité ; il consomme la **décision Strategy** (classe + signaux normalisés + `candidateEnvelope`).
- **Non couvert :** projection sémantique Nora object-native élargie (P4 §23) au-delà de ce que le contexte Studio expose déjà.

---

## 17. Cognitive routing implementation

### 17.1 `cognitiveRoutingPolicy.ts` (nouveau, pur)

| Propriété | Implémentation |
| --- | --- |
| Nature | Fonction pure, non persistante, **non autoritative**, **≠ RouterService** |
| Version de politique | `p5-s01-routing-v1` |
| Pipeline (P4 / CP5) | candidates → **Quality Floor** → **provider capability** → **FinOps parmi les suffisants/compatibles** → minimum-suffisant (`pipeline:quality→provider→finops`) |
| Cohort nominal | `gpt-6-luna` · `gpt-6.1-sol` · `gpt-6-astra` (GPT-5.6 **exclu** du routing nominal) |
| Candidats | Enveloppe d’efforts de la Strategy × cohort — **pas** de mapping fixe Strategy→Modèle ; model × effort indépendants |
| Reasoning mode nominal | `standard` |
| Escalade | `P5_MAX_ESCALATIONS_PER_TASK = 1` (champ `escalationEligible` selon `escalationsUsed`) |
| Identité de tâche | `cognitiveTaskId` stable obligatoire (sinon erreur `COGNITIVE_ROUTING_REQUIRES_STABLE_TASK_ID`) |
| Reconstructibilité | `routingDecisionId`, `reasonCodes`, `policyVersion`, `providerSnapshotIdentity` (hash stable du contenu, hors `retrievedAt`) |
| Échec | **Fail-closed** : `ok:false` avec `NO_SUFFICIENT_CONFIG` ou `BUDGET_EXCLUDES_ALL_SUFFICIENT` ; `BUDGET_MUST_NOT_DOWNGRADE_BELOW_FLOOR` |

### 17.2 Quality Floor (catégoriel, explicable, **pas** un score 0–100)

| Strategy | Catégorie | Plancher modèle | Plancher effort |
| --- | --- | --- | --- |
| Routine | `routine-sufficient` | Luna | ≥ none |
| Focused | `focused-sufficient` | Luna | ≥ low (≥ medium si vérification/ambiguïté élevée) |
| Deep | `deep-sufficient` | Luna (Sol si rigueur/vérification/contradiction élevée) | ≥ medium |
| High-Assurance | `high-assurance-sufficient` | Sol minimum | ≥ high |

Surcharges : `contradictionRisk` élevé → plancher Sol ; `criticalChallengeArmed` → plancher d’effort `high`. **Le budget ne peut jamais abaisser sous le plancher** ; il ne filtre qu’**au sein** de l’ensemble suffisant.

### 17.3 `buildP5TargetCapabilityManifest` (`capabilityBudget.ts`)

| Modèle | Efforts supportés (snapshot) |
| --- | --- |
| `gpt-6-luna` | none · low · medium · high · xhigh · max |
| `gpt-6.1-sol` | low · medium · high · xhigh · max (**none non supporté**) |
| `gpt-6-astra` | low · medium · high · xhigh · max (**none non supporté**) |

- `minimal` reste **non admissible** pour le cohort cible.
- Prix Standard short-context (Correction Pass 01, 2026-10-05) : Luna **0.10/0.50** · Sol **2/10** · Astra **10/50** (USD/1M) — **indices d’ordonnancement FinOps datés**, remplaçables — **pas de doctrine**.
- **`buildMw0CapabilityManifest` (GPT-5.6) non modifié — FREEZE historique** ; `buildCurrentOpenAiCapabilityManifest` non remplacé.
- « Documented capability ≠ account/API entitlement » : **non vérifié** (ZERO REAL).

### 17.4 Câblage `runNoraCognitiveTurn`

1. Routing décidé **après Strategy** (`resolveProductCognitiveRouting`).
2. **Pas de routing** si : pin d’éval (`evalModelReasoningControl`) ou Strategy non exécutée.
3. **Limitation de routing** (`ok:false`) → `TechnicalError("CONFIG", …)` **fail-closed**, jamais de downgrade silencieux.
4. **Fake** (provider adapter) : **garde l’adapter** (le modèle sélectionné reste identité/télémétrie) ; **live** : la **chaîne modèle sélectionnée** est passée à l’Agents Runner.
5. Capability de l’effort sélectionné validée contre le manifest P5 TARGET (`validateRuntimeReasoningCapability` avec manifest).
6. Résultat enrichi : `selectedModelId`, `cognitiveRoutingDecisionId`, `cognitiveRoutingPolicyVersion` ; `selectedReasoningEffort` effectif : pin d’éval > routing > CWP.
7. Fallback legacy documenté : si Strategy a tourné mais routing absent, chemin historique (`OPENAI_MODEL` **TEMP WITH EXIT**).

### 17.5 `orchestrateTurn`

`correlationId` préfère **`logicalTurnId`** (identité cognitive stable sur tool rounds / retry / escalade unique), repli sur `f1:${projectId}`.

### 17.6 Télémétrie

Événement **`COGNITIVE_ROUTING_SELECTED`** (type ajouté à `TechnicalEventType`). Détails : `routingDecisionId`, `cognitiveTaskId`, `strategyClass`, modèle/effort sélectionnés, `reasoningMode`, `qualityFloor`, `reasonCodes`, résumé d’éligibles (≤ 12), `escalationEligible`, `maxEscalations`, `providerCapabilitySnapshot`, `routingPolicyVersion`, `estimatedCostUsdHint`. **Aucune Chain of Thought, aucune fausse confiance** (test P5-D0-21).

---

## 18. Provider snapshot

| Élément | Valeur |
| --- | --- |
| Type | Snapshot **daté** d’entrée externe (Correction Pass 01, 2026-10-05) |
| Processing tier | **STANDARD** |
| Context band | **SHORT CONTEXT** (≤272K input tokens under current provider pricing) |
| Luna input/output USD/1M | **0.10 / 0.50** |
| Sol input/output USD/1M | **2.00 / 10.00** |
| Astra input/output USD/1M | **10.00 / 50.00** |
| Provenance | Official OpenAI GPT-6 Luna / GPT-6.1 Sol / GPT-6 Astra model docs + API Pricing page (ChatGPT-revalidated 2026-10-05) |
| Claim boundary | Dated FinOps **ordering hint** among sufficient configs · **≠** observed REAL cost · **≠** savings proven · cached/cache-write/long-context/other tiers **not** stored unless consumed by `estimateCostUsd` |
| Cohort | Luna / Sol / Astra |
| Efforts | Voir §17.3 |
| Statut | **Non confirmé par appel réel** — **ZERO REAL** |
| Valeur permanente ? | **Non** — snapshot ≠ doctrine ; **à revalider avant tout gate REAL** |
| Entitlement compte/API | **Non vérifié** |

**Aucun appel OpenAI réel n’a été effectué.** Les capacités ci-dessus sont des **données de manifest**, pas une preuve de disponibilité.

---

## 19. Deterministic bypass

- P4 : **deterministic NO-LLM bypass avant routing**.
- P5-S01 : **aucune logique de bypass nouvelle** ; les chemins déterministes Product existants sont **conservés**. **Pas de routeur par mots-clés.**
- Le routing n’est invoqué que lorsque la Strategy a produit une décision (cognition requise) ; sans décision Strategy, `resolveProductCognitiveRouting` retourne `null`.
- **Correction Pass 01 CP3 — PREUVE D0 :** opération Product représentative `composeStudioCognitiveContext` (projection sémantique déterministe Studio) → **0** `runNoraCognitiveTurn` · **0** `decideCognitiveRouting` · **0** appels Fake provider (`complete` / `completeStructured` / `completeRound`) · **0** live `fetch` · **0** `COGNITIVE_STRATEGY_SELECTED` · **0** `COGNITIVE_ROUTING_SELECTED` · identité Project/LPS préservée (`p5.s01.deterministicBypass.d0.test.ts`).
- **Réserve :** inventaire exhaustif de tous les chemins déterministes ≠ re-audité ; une opération représentative existante est prouvée.

---

## 20. Fake/Real qualification D0

| Aspect | Qualification |
| --- | --- |
| Niveau de preuve | **D0** (déterministe/local) |
| Provider | **Fake** (`FakeConversationProvider`) |
| Appels live OpenAI | **0** (P5-D0-24) |
| Même Agents Runner | Oui (P5-D0-23) |
| Fake garde l’adapter | Oui (P5-D0-22) |
| REAL-FIRST (P4 §48) | **Frontière OpenAI non exercée dans S01** — décision d’autorisation REAL **non consommée** ; la slice **ne peut pas** être déclarée close sur cognition/routing |
| R1 / R2 / R3 | **NOT STARTED** |

**D0 PASS ≠ REAL PASS.** Une slice cognition/routing ne se ferme pas par Fake/D0 seul lorsque la frontière OpenAI réelle est accessible : **S01 reste donc LOCAL CANDIDATE**.

---

## 21. Test/evidence matrix

### 21.1 Tests P5-S01 (Correction Pass 01 — 26 cas ciblés)

| Fichier | Cas | Couvre |
| --- | --- | --- |
| `p5.s01.cognitiveRouting.d0.test.ts` | **19** | P5-D0-01 … P5-D0-24 + CP4 prices + CP5 order + hardened D0-10 |
| `p5.s01.integratedProduct.d0.test.ts` | **2** | Seam direct + **CP2 TRUE server-path** (`projectAssistantSendAction` → F2 → F1 → routing) |
| `p5.s01.deterministicBypass.d0.test.ts` | **1** | **CP3** `composeStudioCognitiveContext` NO-LLM / NO-router |
| `p5.s01.semanticInvariants.d0.test.ts` | **3** | P5-SEM-05 · P5-SEM-02/03 · P5-SEM-08 |
| `p5.s01.workspaceLayout.ui.test.tsx` | **1** | Rail P3 + Workspace Conversation sans internals |

### 21.2 Mapping P5-D0

| ID(s) | Assertion |
| --- | --- |
| P5-D0-01 | Cohort nominal = Luna / Sol / Astra |
| P5-D0-02 | Routing nominal exclut GPT-5.6 |
| P5-D0-03 | Manifest historique MW0 GPT-5.6 inchangé |
| P5-D0-04 | Strategy ne contient aucun mapping modèle fixe |
| P5-D0-04b | FinOps Standard short-context prices 0.10/0.50 · 2/10 · 10/50 |
| P5-D0-05 / 06 | Quality Floor avant FinOps ; configs insuffisantes exclues |
| P5-D0-05b | **ORDER** Quality → provider → FinOps (reason codes stage-distinct) |
| P5-D0-07 | Luna `none` accepté |
| P5-D0-08 / 09 | Sol / Astra `none` rejeté |
| P5-D0-10 | Manifest cible vide/inconnu → router **fail-closed** (`PROVIDER_INCOMPATIBLE_WITH_QUALITY_FLOOR`) |
| P5-D0-11 | Effort non supporté non coercé silencieusement |
| P5-D0-12 | Le budget ne peut pas abaisser sous le plancher |
| P5-D0-13 / 14 / 15 | Décision reconstructible · version de politique · reason codes |
| P5-D0-16 | Escalade max = 1 |
| P5-D0-17 | Identité de tâche cognitive stable requise |
| P5-D0-18 / 19 | Le client ne peut sélectionner modèle/effort via le chemin Product |
| P5-D0-20 | Un modèle plus fort n’élargit pas les champs d’autorité |
| P5-D0-21 | Télémétrie sans CoT |
| P5-D0-22 / 23 / 24 | Frontière Fake (adapter) · même Runner · zéro live |

### 21.3 Régressions et portes qualité (Correction Pass 01)

| Vérification | Résultat |
| --- | --- |
| Targeted P5 (26) | **PASS** |
| Adjacent MW2 + F2 + Pre-M6 (197) | **PASS** |
| **`npm test` FULL** | **PASS** — 465 files / 5178 tests passed · 17 files / 137 skipped |
| `typecheck` | **PASS** |
| `lint` | **PASS** |
| `build` | **PASS** |
| CI distante sur P5-S01 | **N/A** — aucun push |

### 21.4 Ce que la matrice ne prouve pas

Fidélité visuelle · REAL · R1/R2/R3 · exécution de la boucle d’escalade · alignement F2 production routing · comportement Compact/Mobile · accessibilité mesurée (axe/clavier) · NCR.

---

## 22. Visual fidelity evidence

**Verdict : CANDIDATE WITH RESERVES — NOT pixel-perfect PROVEN.**

| Preuve | Statut |
| --- | --- |
| Structure P3 implémentée (rail, header, onglets, focus bar, Conversation + Contexte 356px) | **Oui** (code + test UI de layout) |
| Palette `--pm6-*` convergée vers P3 | **Oui** (valeurs ; pas de comparaison pixel) |
| Emblème Meridian | **Asset récupéré** (§24.4) — comparaison visuelle runtime **non faite** |
| Captures **runtime** vs Figma Desktop `46:2` | **NON capturées** (Playwright derrière auth) |
| Compact `190:44` / Mobile `190:306` | **NON prouvés** |
| Motion / reduced-motion | Auto-scroll respecte `prefers-reduced-motion` (code) ; motion P3 complète **non prouvée** |
| Accessibilité | Éléments sémantiques/`aria-label` présents ; **audit a11y non réalisé** |

**Réserves (obligatoires dans toute citation de ce document) :** aucune formulation « conforme Figma », « pixel-perfect » ou « visual PASS » n’est autorisée tant que des captures runtime comparatives n’existent pas. Gate visuel P4 §51.2 / §51.6 : **non satisfait**.

---

## 23. PIB/Simplification assessment qualitative

> Évaluation **heuristique et qualitative** (PIB reste heuristique ; pas de metrics factory ; pas de seuils numériques). **Net Complexity Reduction = NOT PROVEN.**

| Critère P4 §51.5 | Observation P5-S01 |
| --- | --- |
| Journey représentative | Ouvrir un projet → converser avec Nora (tronçon couvert) |
| Charge d’interaction accidentelle | **Non augmentée par conception** : aucune nouvelle action dans le panneau de contexte ; onglets = aides de navigation |
| Admin burden méthode/runtime | **≈ 0 nominal côté Pilote** : modèle/effort choisis par la politique (client non habilité — P5-D0-18/19) |
| MATERIAL préservé | Décisions/confirmations existantes inchangées (aucun changement de sémantique d’autorité) |
| PROTECTIVE protégé | Fail-closed routing ; pas de downgrade silencieux |
| ACCIDENTAL | Réduction **non mesurée** ; formulation du prochain pas dédupliquée (`lpsNextAction`) |
| Pas de nouveau cockpit/workflow parallèle | Aucun ajouté |
| Charge Nora/contexte | Digest lecture seule ; **non évalué en usage réel** |
| Duplication architecturale | Dual tokens `--sfia-*`/`--pm6-*` **persiste** (TEMP WITH EXIT) |
| NCR à l’échelle intégrée | **NOT PROVEN** (échelle S01 insuffisante) → P5 ultérieur / P6 |

**FinOps cognitif ≠ preuve de simplification** : `estimatedCostUsdHint` est un indice d’ordonnancement, pas une preuve.

---

## 24. Debt + exits

| ID / Actif | Dette | Exit | Statut |
| --- | --- | --- | --- |
| **P5-DEBT-F2-ROUTING-ALIGNMENT** | F2 `analyzeIntent` utilise encore le **modèle statique du provider** (hors politique Product de routage) → risque de double chemin LLM | Aligner F2 sous la même politique / provenance (P4 §30/§50 « dual LLM surfaces ») | **OPEN** |
| `OPENAI_MODEL` | Sélection nominale encore référencée (chemin de repli / bootstrap) | **RETIRE LATER** du chemin nominal (router-selected) | **TEMP WITH EXIT** |
| `OPENAI_REASONING_EFFORT` | Idem (aussi F2 statique) | **RETIRE LATER** du chemin nominal | **TEMP WITH EXIT** |
| Familles de tokens `--sfia-*` / `--pm6-*` | Double famille | Convergence/retrait de `--sfia-*` quand les surfaces migrent | **TEMP WITH EXIT** |
| Snapshot capability P5 TARGET | Daté, non confirmé REAL | Revalidation avant tout gate REAL | **OPEN** |
| Escalade runtime | Politique `max = 1` uniquement, boucle non exercée | Exercer via R1/R2 sur le chemin intégré | **OPEN** |
| Synthesis | Raccourci **désactivé** (pas de surface Product) | Synthesis Product-derived (P4 §18–§20) | **OPEN** |
| Fallback legacy routing absent | Chemin historique encore présent si Strategy sans routing | Retirer quand tous les chemins Product sont routés | **OPEN** |

### 24.4 Provenance de l’asset Meridian

- `app/public/branding/meridian-emblem-product.png` (31 169 octets).
- **Récupéré depuis le remplissage image brut Figma (raw fill)**, décodé avec `LOAD_TRUNCATED_IMAGES` (le fichier source étant tronqué).
- Référence de provenance : exports scratch `.tmp-sfia-review/visual/figma/meridian-*.png` (non suivis, hors livrable).
- **Réserve :** asset récupéré, fidélité de rendu runtime **non comparée** ; la chaîne de récupération (fill tronqué) doit rester documentée si l’asset est ré-exporté proprement depuis Figma.

---

## 25. Open gaps

| # | Gap | Impact |
| --- | --- | --- |
| G1 | Captures runtime comparatives vs Figma **absentes** (auth-gated) | Visual = CANDIDATE WITH RESERVES |
| G2 | Compact / Mobile **non prouvés par screenshot** | Fidélité responsive inconnue |
| G3 | Boucle d’escalade **non exercée** (politique max = 1 seulement) | Comportement runtime inconnu |
| G4 | **P5-DEBT-F2-ROUTING-ALIGNMENT** ouverte | Double surface LLM |
| G5 | **ZERO REAL** ; R1/R2/R3 non démarrés | REAL-FIRST non satisfait |
| G6 | Synthesis Product-derived non livrée ; raccourci désactivé | Pas de surface Synthèse |
| G7 | Aperçu / Exécution / Journal / Historique : onglets de navigation sans projections object-native | Journey Product non bouclée |
| G8 | Nora Activity / STOP / Auth visual / Deliverable-Artifact non livrés | Hors S01 |
| G9 | Dual tokens `--sfia-*` / `--pm6-*` | Duplication temporaire |
| G10 | `OPENAI_MODEL` / `OPENAI_REASONING_EFFORT` encore présents hors chemin nominal | Exit non exécuté |
| G11 | Snapshot capability non confirmé par provider réel | Risque d’écart doc/entitlement |
| G12 | NCR non prouvée ; PIB qualitatif seulement | Simplification non démontrée |
| G13 | Audit a11y non réalisé | Qualité non mesurée |
| G14 | Aucune CI distante sur P5-S01 | Intégration non vérifiée |

---

## 26. Remaining P5 slices

Liste de **travaux restants** (non engagés ; décomposition formelle après gate S01) :

1. **Preuve visuelle** : captures runtime Desktop/Compact/Mobile vs Figma, correction des écarts.
2. **R1 / R2** sur le chemin intégré (nécessite gate REAL distinct) ; revalidation du snapshot provider.
3. **Aperçu / Exécution** object-native depuis projections Product.
4. **Journal / Historique / Synthèses** (dont Synthesis Product-derived dans Product SQLite).
5. **Nora Activity / STOP**, **Auth GitHub visual**.
6. **Deliverable / Artifact** (représentation minimum-suffisante, pas de nouveau store).
7. **Alignement F2** (`P5-DEBT-F2-ROUTING-ALIGNMENT`) ; retrait nominal `OPENAI_MODEL`/`OPENAI_REASONING_EFFORT`.
8. **Exercice de l’escalade** (≤ 1).
9. **Convergence tokens** (`--sfia-*` → `--pm6-*`).
10. **R3** sur chemin Product intégré représentatif.

---

## 27. P6 handoff conditions

P6 (QA comparatif/global, NCR) **ne démarre pas** sur la base de S01. Conditions minimales de handoff (rappel, non exhaustif) :

- P5 slices nécessaires livrées et **intégrées** (gates Git Morris passés) ;
- **R1/R2/R3** exécutés sur le chemin Product intégré (si REAL autorisé) ;
- **Preuves visuelles runtime vs Figma** pour les surfaces implémentées ;
- Preuve de continuité sémantique et d’absence d’architecture parallèle ;
- Évidence PIB/NCR à l’échelle intégrée (P6) ;
- Dettes P5 classées avec exit ou acceptées explicitement.

**Statut actuel : conditions NON remplies.**

---

## 28. Gates

| Gate | Statut |
| --- | --- |
| Morris P5 AUTHORIZATION | **CONSUMED** |
| Revue ChatGPT de la livraison P5-S01 | À faire (si requise par le process) |
| **Prochain gate : MORRIS P5-S01 GIT INTEGRATION** (commit / push / PR) | **NON consommé — NEXT** |
| Merge P5-S01 | **NON consommé** (gate distinct après revue PR) |
| **REAL / R1 / R2 / R3** | **NON consommé / NOT STARTED** |
| Adoption runtime v3 | **NON** |
| Mutation Figma | **NON** |

**Ce pass n’a produit aucun commit, push, PR ou merge.**

---

## 29. Claims / anti-claims

### 29.1 Claims autorisés

| Claim | Niveau |
| --- | --- |
| P5 AUTHORIZED BY MORRIS / STARTED / IN PROGRESS | **YES** |
| Politique de routage cognitif implémentée (pure, D0) | **Implémenté + testé D0** |
| `COGNITIVE_ROUTING_SELECTED` émis sans CoT | **Testé D0** |
| Routing câblé après Strategy dans le runtime Nora existant, même Runner | **Testé D0** |
| Structure Workspace/Shell P3 implémentée localement | **Implémenté + test layout UI** |
| typecheck / lint / build / régressions ciblées PASS | **Rapporté par la passe de livraison** |
| P5-S01 = LOCAL CANDIDATE (réserves visuelles) | **YES** |

### 29.2 Anti-claims (interdits)

| Anti-claim | Statut |
| --- | --- |
| P5-S01 COMPLETE / VALIDATED / INTEGRATED | **NON** |
| P5 COMPLETE | **NON** |
| Fidélité Figma / pixel-perfect / Visual PASS | **NON prouvé** |
| Compact / Mobile conformes | **NON prouvé** |
| REAL / R1 / R2 / R3 PASS | **NON** — ZERO REAL, NOT STARTED |
| READY FOR REAL | **NO** |
| Escalade validée à l’exécution | **NON** (politique seulement) |
| Router de production / RouterService | **NON** (fonction pure intégrée au runtime) |
| F2 aligné sous la politique de routage | **NON** (dette ouverte) |
| `OPENAI_MODEL`/`OPENAI_REASONING_EFFORT` retirés | **NON** (RETIRE LATER) |
| Famille de tokens unique | **NON** (dual TEMP WITH EXIT) |
| Synthesis Product-derived livrée | **NON** |
| Net Complexity Reduction prouvée | **NON** |
| Runtime v3 adopté | **NON** (NON ADOPTED) |
| Intégré sur main / CI verte pour P5-S01 | **NON** (aucun push) |
| Nouvelle doctrine / architecture P5 | **NON** (P4 reste autorité) |

---

## 30. Correction Pass 01 — Critical Review blockers CP1–CP5

Previous ChatGPT Critical Review verdict: **NOT READY — P5-S01 CRITICAL REVIEW INCOMPLETE**.

Morris GO: **P5-S01 CORRECTION PASS 01 = YES** (local edits + tests + docs + Review Pack + handoff L3 only).

| CP | Gap previous | Correction | Verdict |
| --- | --- | --- | --- |
| **CP1** | Full Vitest not proven | `npm test` (= `vitest run`) FULL | **PASS** — 465 files / 5178 tests · 17 files / 137 skipped |
| **CP2** | Integrated test bypassed Conversation server seam | `projectAssistantSendAction` → `orchestrateAssistantSend` → `analyzeIntent` → `composeStudioCognitiveContext` → `orchestrateProjectAssistantTurn` → `runNoraCognitiveTurn` → routing → Fake Runner | **PASS** |
| **CP3** | Deterministic bypass only asserted KEEP | Representative op `composeStudioCognitiveContext` — 0 provider / 0 router / 0 Nora turn | **PASS** |
| **CP4** | Incorrect/unqualified prices | Standard short-context 2026-10-05: Luna 0.10/0.50 · Sol 2/10 · Astra 10/50 + provenance | **PASS** |
| **CP5** | Pipeline capability→quality (wrong order) | Code+tests: quality → provider → FinOps; stage reason codes; hardened unknown-manifest fail-closed | **PASS** |

Also fixed full-suite regressions caused by S01 (classification A):
- `importBoundaries` allowlist + `ProductRailRecents`
- Living Production Runtime Reference digests for modified tracked sources

Visual reserve **PRESERVED** (runtime screenshots still NOT CAPTURED — auth-gated). F2 debt **OPEN**. ZERO REAL. R1/R2/R3 NOT STARTED.

---

## 31. Current verdict

```text
P5 AUTHORIZED BY MORRIS = YES
P5 STARTED              = YES
P5 IN PROGRESS          = YES

P5-S01 = LOCAL CANDIDATE — D0 PASS WITH VISUAL RESERVES
         (Correction Pass 01 CP1–CP5 CLOSED locally)
         — NOT COMPLETE · NOT VALIDATED · NOT INTEGRATED

R1 / R2 / R3            = NOT STARTED
ZERO REAL               = YES
READY FOR REAL          = NO
runtime v3              = NON ADOPTED

Visual fidelity         = CANDIDATE WITH RESERVES (≠ pixel-perfect PROVEN)
Cognitive routing       = D0 PROVEN (server-path + policy order + FinOps snapshot)
Net Complexity Reduction = NOT PROVEN

Git this pass           = NO commit · NO push · NO PR · NO merge
Base                    = 04527bede4a3aad1853387b9eb39af3fe0615412
                          (PR #554 MERGED · CI #676 SUCCESS · Required Gate SUCCESS)

NEXT                   = CHATGPT P5-S01 CRITICAL RE-REVIEW
NEXT MORRIS GATE       = P5-S01 GIT INTEGRATION (not consumed; ChatGPT PASS first)
REAL / merge            = NOT consumed
```

**Synthèse honnête.** Correction Pass 01 ferme localement les cinq bloqueurs Critical Review (FULL Vitest, server-path D0, deterministic bypass, FinOps snapshot, pipeline order). P5-S01 reste **LOCAL CANDIDATE** avec **réserves visuelles**. **P4 reste l’autorité d’architecture**.

---

*Fin du document P5 — Integrated Delivery (P5-S01) — Correction Pass 01 — P5 AUTHORIZED BY MORRIS = YES — P5 STARTED = YES — P5 IN PROGRESS = YES — P5-S01 = LOCAL CANDIDATE (D0 PASS WITH VISUAL RESERVES) — R1/R2/R3 NOT STARTED — ZERO REAL — READY FOR REAL = NO — runtime v3 NON ADOPTED — no project commit/push/PR/merge this pass — P4 remains architecture authority.*

```

======================================================================
ROADMAP USEFUL DIFF
======================================================================
```diff
diff --git a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
index 4d7997d4..17d9fc9b 100644
--- a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
@@ -4,6 +4,8 @@
 | --- | --- |
 | **Rôle** | Roadmap **vivante** de convergence vers l’utilisation complète de la doctrine produit SFIA Studio v3 |
 | **Statut** | **VALIDATED — ACTIVE LIVING ROADMAP** |
+| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S01 CORRECTION PASS 01** | 2026-10-05 Europe/Paris — **STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S01 D0 CORRECTION PASS 01 COMPLETE — READY FOR CHATGPT CRITICAL RE-REVIEW** · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / implementation correction** · Milestone **P5 — Integrated Delivery** · Slice **P5-S01** · Pass **CORRECTION PASS 01 (CP1–CP5)** · CRITICAL · EVOL · Morris P5 AUTHORIZATION = **CONSUMED** · Morris Correction GO = **YES** · P5 = **AUTHORIZED / STARTED / IN PROGRESS** · P5-S01 = **LOCAL CANDIDATE — D0 PASS WITH VISUAL RESERVES** · CP1 FULL `npm test` = **PASS** (465 files / 5178 tests) · CP2 Product server-path D0 = **PASS** · CP3 deterministic NO-LLM = **PASS** · CP4 FinOps Standard short-context 2026-10-05 = **PASS** · CP5 Quality→provider→FinOps order = **PASS** · ZERO REAL · Visual = **CANDIDATE WITH RESERVES** · F2 debt **OPEN** · branche `delivery/sfia-studio-product-simplification-p5-s01-integrated-product-vertical-slice` · base `04527bede4a3aad1853387b9eb39af3fe0615412` · document `05-…integrated-delivery.md` · project commit/push/PR/merge = **NOT AUTHORIZED** · next = **ChatGPT P5-S01 Critical Re-review** → if PASS then **MORRIS P5-S01 GIT INTEGRATION GATE** · **≠** P5 COMPLETE · **≠** READY FOR PR/MERGE · **≠** READY FOR REAL |
+| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S01 INTEGRATED DELIVERY** | 2026-10-05 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5 AUTHORIZED BY MORRIS / STARTED / IN PROGRESS — P5-S01 FIRST INTEGRATED PRODUCT VERTICAL SLICE LOCAL CANDIDATE *(true then; superseded by Correction Pass 01 tip)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / implémentation** · Milestone **P5 — Integrated Delivery** · Slice **P5-S01** · CRITICAL · EVOL · Morris P5 AUTHORIZATION = **CONSUMED** · P4 = **CLOSED / FINAL REPOSITORY VERIFIED / FINAL TRUTH-SYNC INTEGRATED ON MAIN** (PR **#554** MERGED · main `04527bede4a3aad1853387b9eb39af3fe0615412` · CI **#676** / `37269800594` SUCCESS · Required Gate SUCCESS) · branche locale `delivery/sfia-studio-product-simplification-p5-s01-integrated-product-vertical-slice` · base `origin/main` @ `04527bede4a3aad1853387b9eb39af3fe0615412` · document = `projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md` · CURRENT CAPABILITY = **P5-S01 Workspace/Conversation + Product Semantic Context + Cognitive Routing D0 + P3 Visual Fidelity foundation** · REAL = **NOT AUTHORIZED** · R1/R2/R3 = **NOT STARTED** · READY FOR REAL = **NO** · runtime v3 = **NON ADOPTED** · project commit/push/PR/merge = **NOT AUTHORIZED this pass** · next after ChatGPT PASS = **MORRIS P5-S01 GIT INTEGRATION GATE** · **≠** P5 COMPLETE · **≠** P5 CLOSED · **≠** READY FOR MERGE |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P4 FINAL REPOSITORY TRUTH-SYNC** | 2026-10-05 03:32:06 +0200 — **STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P4 FINAL REPOSITORY TRUTH-SYNC COMPLETE AS LOCAL CANDIDATE — READY FOR MORRIS P4 FINAL TRUTH-SYNC GIT INTEGRATION GATE** · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **14 — Post-merge / repository truth-sync** · Milestone **P4** · Pass **P4 FINAL REPOSITORY TRUTH-SYNC** · CRITICAL · EVOL/DOC · PR **#552 MERGED** · architecture merge `d0b4836046911731605883364d9cc3bef4ac3e7f` · post-merge CI **#672** SUCCESS · PR **#553 MERGED** · closure patch merge `17434de03585eb30d13d59d7ba5c249563f0b33c` · parents `d0b48360…` + `332ee04d…` · post-merge SFIA Studio CI run **#674** / `37250512824` = **SUCCESS** · Detect / Build / Unit tests / **Required Gate** = **SUCCESS** · P4 GLOBAL VALIDATED / INTEGRATED / POST-MERGE VERIFIED / CLOSED BY MORRIS = **YES** · P4 closure patch INTEGRATED ON MAIN = **YES** · P4 FINAL REPOSITORY VERIFICATION = **PASS** · P5 REQUALIFIED BY CHATGPT = **YES** · P5 Entry Contract = **DEFINED** · **P5 AUTHORIZED = NO** · **P5 STARTED = NO** · READY FOR REAL = **NO** · runtime v3 = **NON ADOPTED** · production router IMPLEMENTED = **NO** · REAL routing PROVEN = **NO** · document = `projects/sfia-studio/product-simplification/04-chat-first-product-simplification-semantic-projection-cognitive-architecture.md` · branche `docs/sfia-studio-p4-final-repository-truth-sync` · base `origin/main` @ `17434de03585eb30d13d59d7ba5c249563f0b33c` · prior handoff `5533a05cbfe334aee7c799ed74f7669ef1a08004` / blob `988967391fd9437355d90611c14aba1b3d74887a` · next = **ChatGPT P4 final truth-sync review** → **DISTINCT Morris truth-sync Git integration gate** (commit/push/PR) → DISTINCT merge → post-merge verify → **CURRENT MORRIS GATE = P5 AUTHORIZATION** (NOT CONSUMED) · **≠** P5 AUTHORIZED · **≠** P5 STARTED · **≠** READY FOR REAL · **≠** runtime v3 ADOPTED · **≠** project commit/push/PR/merge this pass · **CURRENT REPOSITORY TRUTH = RESOLVE FROM GIT / `origin/main` / PR evidence** |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P4 POST-MERGE VERIFICATION & CLOSURE** | 2026-10-05 02:49:04 +0200 — **STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P4 POST-MERGE VERIFICATION & CLOSURE COMPLETE AS LOCAL CANDIDATE — READY FOR MORRIS P4 CLOSURE PATCH GIT INTEGRATION GATE** · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **14 — Post-merge** · Milestone **P4 — SEMANTIC / PROJECTION / COGNITIVE ARCHITECTURE / TECHNICAL DELTA** · Pass **POST-MERGE VERIFICATION & CLOSURE** · CRITICAL · EVOL/DOC · PR **#552 MERGED** · merge `d0b4836046911731605883364d9cc3bef4ac3e7f` · parents `e19f8940…` + `e24747e1…` · post-merge SFIA Studio CI run **#672** / `37248128868` = **SUCCESS** · Detect / Build / Unit tests / **Required Gate** = **SUCCESS** · P4 GLOBAL VALIDATED BY MORRIS = **YES** · P4 INTEGRATED ON MAIN = **YES** · P4 POST-MERGE VERIFIED = **YES** · P4 CLOSED BY MORRIS = **YES** · P4 Exit Proof = **SATISFIED** · closure materialization = **LOCAL CANDIDATE** · closure patch INTEGRATED ON MAIN = **NO** · **P5 = NOT AUTHORIZED / NOT STARTED** (Entry Contract DEFINED by CLOSED P4 · DEFINED ≠ AUTHORIZED) · READY FOR REAL = **NO** · runtime v3 = **NON ADOPTED** · TARGET routing architecture = **VALIDATED / ADOPTED AS P4 TARGET CONTRACT** · production router IMPLEMENTED = **NO** · REAL routing PROVEN = **NO** · Cognitive Completion PROVEN = **NO** · document = `projects/sfia-studio/product-simplification/04-chat-first-product-simplification-semantic-projection-cognitive-architecture.md` · branche de clôture `docs/sfia-studio-chat-first-product-simplification-p4-post-merge-closure` · base `origin/main` @ `d0b4836046911731605883364d9cc3bef4ac3e7f` · prior handoff `59dbf0c2f5cfb804e3c21f83e94e56f688d91792` / blob `2f2b45206e71df859b6850b56c7ec8030c514dd2` · next = **ChatGPT P4 post-merge closure review** → **DISTINCT Morris closure-patch Git integration gate** (commit/push/PR) → DISTINCT merge → repository truth → **P5 REQUALIFICATION** → DISTINCT GO P5 if recommended · **≠** P5 AUTHORIZED · **≠** P5 STARTED · **≠** READY FOR REAL · **≠** runtime v3 ADOPTED · **≠** production router implemented · **≠** project commit/push/PR/merge this pass · **CURRENT REPOSITORY TRUTH = RESOLVE FROM GIT / `origin/main` / PR evidence** |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P4 GIT INTEGRATION AUTHORIZED / IN PROGRESS** | 2026-10-05 02:23:24 +0200 — **STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P4 GLOBAL VALIDATED BY MORRIS — GIT INTEGRATION AUTHORIZED / IN PROGRESS (COMMIT / PUSH / PR)** · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **15 — Capitalisation / REX** · Milestone **P4** · Pass **GIT INTEGRATION — COMMIT / PUSH / PR** · CRITICAL · EVOL/DOC · Morris Git Integration GO = **YES** (commit/push/PR) · MERGE = **NOT AUTHORIZED** · ChatGPT materialization/truth-sync review = **PASS** · prior handoff `db3b7b93723847629b9e46eef2ac6b343737a8a1` / blob `63829146f51b609fba31d0436a3e9a400b1a1869` · document P4 = VALIDATED DOCUMENTARY CANDIDATE · Roadmap truth-sync included · **P4 INTEGRATED = NO** · **P4 CLOSED = NO** · **P5 = NOT AUTHORIZED / NOT STARTED** · READY FOR REAL = **NO** · runtime v3 = **NON ADOPTED** · branche `docs/sfia-studio-chat-first-product-simplification-p4-semantic-projection-cognitive-architecture` · base `origin/main` @ `e19f89409a5eb717838b9d7bffdc8c3d2ee02b18` · next after PR = **ChatGPT PR review** → **DISTINCT MORRIS MERGE GATE** · **≠** P4 MERGED · **≠** P4 CLOSED · **≠** P5 AUTHORIZED · **CURRENT REPOSITORY TRUTH = RESOLVE FROM GIT / `origin/main` / PR evidence** |
@@ -969,23 +971,23 @@ CRITICAL PATH:
   → P2 — **VALIDATED BY MORRIS + INTEGRATED ON MAIN + POST-MERGE VERIFIED + CLOSED** (PR **#549** / merge `e99d9ad5…`)
   → P3 — **VALIDATED BY MORRIS + INTEGRATED ON MAIN + POST-MERGE VERIFIED + CLOSED** (PR **#550** + closure **#551** / main `e19f8940…`)
   → P4 — **GLOBAL VALIDATED BY MORRIS + INTEGRATED ON MAIN + POST-MERGE VERIFIED + CLOSED BY MORRIS** (PR **#552** / `d0b48360…` · CI **#672** SUCCESS) + **CLOSURE PATCH INTEGRATED** (PR **#553** / `17434de0…` · CI **#674** SUCCESS) · FINAL REPOSITORY VERIFICATION = **PASS**
-  → CURRENT NEXT CAPABILITY — **MORRIS P5 AUTHORIZATION GATE** · P5 REQUALIFIED BY CHATGPT · Entry Contract DEFINED · P5 **NOT AUTHORIZED / NOT STARTED**
-  → CURRENT STRUCTURAL STEP — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P4 CLOSED + FINAL REPOSITORY VERIFIED → P5 REQUALIFIED BY CHATGPT → AWAITING DISTINCT MORRIS P5 AUTHORIZATION GATE · P1/P2/P3/P4 CLOSED · P5 Entry Contract DEFINED · P5 **≠** authorized · TARGET routing architecture validated/adopted as P4 target contract · production router **NOT IMPLEMENTED/PROVEN** · REAL **≠** authorized · runtime v3 **NON ADOPTED** · final truth-sync materialization LOCAL CANDIDATE · truth-sync patch **≠** on main yet
+  → CURRENT NEXT CAPABILITY — **P5-S01 D0 CORRECTION PASS 01 COMPLETE — READY FOR CHATGPT CRITICAL RE-REVIEW** · P5-S01 remains LOCAL CANDIDATE (visual reserves) · next Morris gate after ChatGPT PASS = **P5-S01 GIT INTEGRATION**
+  → CURRENT STRUCTURAL STEP — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — **P5 AUTHORIZED / STARTED / IN PROGRESS** · P5-S01 Correction Pass 01 CP1–CP5 closed locally · Workspace/Conversation + Semantic Context + Cognitive Routing D0 + P3 Visual Fidelity foundation · P1/P2/P3/P4 **CLOSED** · P4 FINAL TRUTH-SYNC **ON MAIN** (PR **#554** / `04527bed…` · CI **#676** SUCCESS) · REAL **≠** authorized · R1/R2/R3 **NOT STARTED** · runtime v3 **NON ADOPTED** · project commit/push/PR/merge **≠** this pass
   → DYNAMIC PRODUCT TRAJECTORY — requalify after each capability *(method invariant)*

-CURRENT SIMPLIFICATION TRAJECTORY (living — P4 CLOSED / FINAL REPOSITORY VERIFIED · P5 REQUALIFIED · P5 NOT AUTHORIZED):
+CURRENT SIMPLIFICATION TRAJECTORY (living — P5 AUTHORIZED / IN PROGRESS · P5-S01 LOCAL CANDIDATE — Correction Pass 01):
   Axes: (1) Product Interaction Simplification · (2) HumanDecision Materiality · (3) Cognitive Reliability / Adaptive Model & Reasoning Strategy · (4) Chat-first Operating / Workspace / Semantic Architecture trajectory
   P1 Cadrage — VALIDATED / INTEGRATED / POST-MERGE VERIFIED / CLOSED (PR #548 / merge `642a10c8…`)
   → P2 Functional Operating Model — VALIDATED / INTEGRATED / POST-MERGE VERIFIED / CLOSED (PR #549 / merge `e99d9ad5…`)
   → P3 Workspace / Interaction Architecture — VALIDATED / INTEGRATED / POST-MERGE VERIFIED / CLOSED (PR #550 + closure #551 / main `e19f8940…`)
-  → P4 Semantic / Projection / Cognitive Architecture — GLOBAL VALIDATED / INTEGRATED / POST-MERGE VERIFIED / CLOSED BY MORRIS (PR #552 / `d0b48360…` · CI #672 SUCCESS) · closure patch INTEGRATED (PR #553 / `17434de0…` · CI #674 SUCCESS) · FINAL REPOSITORY VERIFICATION = PASS · final truth-sync materialization LOCAL CANDIDATE · truth-sync patch ≠ on main yet
-  → P5 Integrated Delivery — REQUALIFIED BY CHATGPT · Entry Contract DEFINED by CLOSED P4 · **NOT AUTHORIZED** · **NOT STARTED**
+  → P4 Semantic / Projection / Cognitive Architecture — GLOBAL VALIDATED / INTEGRATED / POST-MERGE VERIFIED / CLOSED BY MORRIS (PR #552 / `d0b48360…` · CI #672 SUCCESS) · closure patch INTEGRATED (PR #553 / `17434de0…` · CI #674 SUCCESS) · FINAL TRUTH-SYNC INTEGRATED (PR #554 / `04527bed…` · CI #676 SUCCESS) · FINAL REPOSITORY VERIFICATION = PASS
+  → P5 Integrated Delivery — **AUTHORIZED BY MORRIS / STARTED / IN PROGRESS** · P5-S01 = **LOCAL CANDIDATE — D0 PASS WITH VISUAL RESERVES** (Correction Pass 01 CP1–CP5) · document `05-chat-first-product-simplification-integrated-delivery.md` · **≠** P5 COMPLETE / CLOSED
   → P6 Global Integrated Product QA — NOT AUTHORIZED
   → P7 Fresh Project End-to-End Product Replay — NOT AUTHORIZED · Project NOT SELECTED
   → P8 Requalification — NOT AUTHORIZED
-  TARGET routing architecture — VALIDATED / ADOPTED AS P4 TARGET CONTRACT (Strategy-first bounded · GPT-6 Luna / GPT-6.1 Sol / GPT-6 Astra · GPT-5.6 exits nominal TARGET) · exact production workload→model/effort mapping = implementation/evidence subject
-  Production router IMPLEMENTED / REAL routing PROVEN / Cognitive Completion PROVEN — **NO**
-  Trajectory-significant P4 conclusions (detail owned by P4 doc): one Product world · P3-capable frontend convergence · no new DS stack by default · deterministic NO-LLM path · object-native projections · Synthesis derived projection target · Deliverable ≠ Artifact · REAL-FIRST begins in P5 when separately authorized · PIB / Net Complexity part of Product Simplification success · no parallel architecture
+  TARGET routing architecture — VALIDATED / ADOPTED AS P4 TARGET CONTRACT · P5-S01 implements Strategy-first bounded routing D0 (GPT-6 Luna / GPT-6.1 Sol / GPT-6 Astra) · ZERO REAL · GPT-5.6 historical FREEZE
+  Production router REAL PROVEN / Cognitive Completion PROVEN / READY FOR REAL — **NO**
+  Trajectory-significant P4 conclusions remain authority; P5 materializes them on the Product path without parallel architecture
   → OPTIONAL CKC lessons → v2.6 capitalization — DISTINCT METHOD GATE — NOT DECIDED

 M4 ARCHITECTURE GATE: CLOSED (D-M4-01→05)
@@ -1027,8 +1029,8 @@ HISTORICAL / CONSUMED (W2-era tip): NEXT CONVERGENCE CAPABILITY was W2 TRACK D /
 HISTORICAL / SUPERSEDED (P2 CP01 living tip): CURRENT STRUCTURAL STEP was P2 CHECKPOINT 01 CORRECTION PASS 01 COMPLETE — P2 AUTHORIZED/IN PROGRESS — P2 NOT VALIDATED — P3→P8 NOT AUTHORIZED — production model routing NOT SELECTED — Pilot–Nora–Studio semantic TARGET FOR P4 *(true then)*
 HISTORICAL / CONSUMED / SUPERSEDED: NEXT MORRIS GATE AFTER REQUALIFICATION was "selection / authorization of a future Studio capability — NOT STARTED" — SUPERSEDED by D-SIMP-01 (capability selected = Product Simplification C1)
 HISTORICAL / SUPERSEDED (P2 CP01 living tip): CURRENT MORRIS GATE was CHATGPT CLOSURE REVIEW CHECKPOINT 01 *(true then)*
-CURRENT STRUCTURAL STEP: STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P4 CLOSED + FINAL REPOSITORY VERIFIED → P5 REQUALIFIED BY CHATGPT → AWAITING DISTINCT MORRIS P5 AUTHORIZATION GATE — P1/P2/P3/P4 CLOSED — P5 Entry Contract DEFINED — P5 NOT AUTHORIZED / NOT STARTED — TARGET routing architecture VALIDATED / ADOPTED AS P4 TARGET CONTRACT — production router NOT IMPLEMENTED/PROVEN — REAL NOT AUTHORIZED — runtime v3 NON ADOPTED — READY FOR REAL NO — P4 closure patch INTEGRATED ON MAIN (PR #553) — final truth-sync materialization LOCAL CANDIDATE — truth-sync patch NOT INTEGRATED ON MAIN
-CURRENT MORRIS GATE: P5 AUTHORIZATION — PENDING / NOT CONSUMED · prior P4 gates (validation / git integration / merge #552 / closure / closure-patch merge #553) CONSUMED · ChatGPT P5 requalification COMPLETED · ≠ P5 AUTHORIZED · ≠ P5 STARTED · ≠ READY FOR REAL · ≠ runtime v3 ADOPTED · ≠ truth-sync commit/push/PR this pass
+CURRENT STRUCTURAL STEP: STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — **P5 AUTHORIZED / STARTED / IN PROGRESS** — P5-S01 CORRECTION PASS 01 CP1–CP5 CLOSED LOCALLY — LOCAL CANDIDATE D0 PASS WITH VISUAL RESERVES — READY FOR CHATGPT CRITICAL RE-REVIEW — P1/P2/P3/P4 CLOSED — P4 FINAL TRUTH-SYNC ON MAIN (PR #554 / `04527bed…` / CI #676 SUCCESS) — REAL NOT AUTHORIZED — R1/R2/R3 NOT STARTED — runtime v3 NON ADOPTED — READY FOR REAL NO — project commit/push/PR/merge NOT AUTHORIZED this pass
+CURRENT MORRIS GATE (after ChatGPT P5-S01 Critical Re-review PASS): **P5-S01 GIT INTEGRATION** (commit + project branch push + PR only) · MORRIS P5 AUTHORIZATION = **CONSUMED** · Correction GO = **CONSUMED** · REAL gate = **NOT CONSUMED** · MERGE gate = **NOT CONSUMED** · ≠ P5 COMPLETE · ≠ READY FOR REAL · ≠ runtime v3 ADOPTED
 M6 / M7: HISTORICAL MILESTONES — SUPERSEDED / ABSORBED BY PRODUCT COMPLETION — traces conservées
 CKC COVERAGE: corpus Studio-native INTEGRATED · Phase A package-bound INTEGRATED via W1 · Phase B ≠ complete · `15` non structurel
 CKC→V2.6 CAPITALIZATION: FUTURE OPTION — DISTINCT METHOD GATE — NOT DECIDED — Studio doctrine remains v3-exclusive
@@ -1045,7 +1047,7 @@ MAJOR GAP TREATMENT: ADOPTED AS OPTION A SCOPE (F1 entry · nav · workspace ·
 W1 ROADMAP REPOSITORY TRUTH: SATISFIED — PR #396 MERGED — PUSH/MAIN CI 32591909031 SUCCESS
 HISTORICAL / CONSUMED (duplicate W2-era tip block): NEXT REPO GATE / NEXT PRODUCT GATE / NEXT CONVERGENCE CAPABILITY Track D Phase B — CONSUMED by PR #403 + W2 CLOSED + subsequent W3/W4/PC trajectory
 HISTORICAL / SUPERSEDED (repeat tip): CURRENT STRUCTURAL STEP was P2 CHECKPOINT 01 CORRECTION PASS 01 COMPLETE — P2 NOT VALIDATED — P3→P8 NOT AUTHORIZED — production routing NOT SELECTED *(true then)*
-CURRENT STRUCTURAL STEP (repeat for local block coherence): STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P4 CLOSED + FINAL REPOSITORY VERIFIED → P5 REQUALIFIED BY CHATGPT → AWAITING MORRIS P5 AUTHORIZATION GATE — P1/P2/P3/P4 CLOSED — P5 NOT AUTHORIZED / NOT STARTED — TARGET routing VALIDATED / ADOPTED AS P4 TARGET CONTRACT — production router NOT PROVEN — runtime v3 NON ADOPTED — closure patch ON MAIN via PR #553 — truth-sync patch NOT ON MAIN
+CURRENT STRUCTURAL STEP (repeat for local block coherence): STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5 AUTHORIZED / STARTED / IN PROGRESS — P5-S01 CORRECTION PASS 01 COMPLETE LOCALLY — LOCAL CANDIDATE D0 PASS WITH VISUAL RESERVES — P1/P2/P3/P4 CLOSED — PR #554 ON MAIN (`04527bed…`) — REAL NOT AUTHORIZED — runtime v3 NON ADOPTED — next = ChatGPT Critical Re-review → MORRIS P5-S01 GIT INTEGRATION
 M6 / M7: HISTORICAL / SUPERSEDED / ABSORBED — not forward milestones
 CKC COVERAGE: catalogue applicable evolvable — Phase A integrated · Phase B downstream — current 15-type baseline is a measure, not a structural invariant
 CKC→V2.6 CAPITALIZATION: FUTURE OPTION — DISTINCT METHOD GATE — NOT DECIDED — Studio doctrine remains v3-exclusive
@@ -1202,7 +1204,7 @@ Ne pas mettre à jour pour chaque micro-commit sans impact de trajectoire.
 - HISTORICAL / CONSUMED (post-C1 tip): NEXT PRODUCT GATE was **POST-MERGE REPO COHERENCE → MORRIS GATE FOR C2 EXECUTION** *(later CONSUMED by C2 PR #369)*
 - HISTORICAL / CONSUMED (post-C1 tip): NEXT CAPABILITY was **Cycle 2 — Conception fonctionnelle — RECOMMENDED / NOT AUTHORIZED** *(later VALIDATED / INTEGRATED)*
 - HISTORICAL / SUPERSEDED (living tip): CURRENT STRUCTURAL STEP was P2 CHECKPOINT 01 CORRECTION PASS 01 COMPLETE · P2 AUTHORIZED/IN PROGRESS · P2 NOT VALIDATED · P3→P8 NOT AUTHORIZED · production model routing NOT SELECTED · Pilot–Nora–Studio technical architecture NOT ADOPTED *(true then)*
-- CURRENT STRUCTURAL STEP (living tip): **STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P4 GLOBAL VALIDATED BY MORRIS — GIT INTEGRATION AUTHORIZED / IN PROGRESS (COMMIT / PUSH / PR)** · P1/P2/P3 **CLOSED** · P4 **GLOBAL VALIDATED** · P4 **NOT INTEGRATED** · P4 **NOT CLOSED** · MERGE **NOT AUTHORIZED** · P5 Entry Contract **DEFINED** · P5 **NOT AUTHORIZED / NOT STARTED** · TARGET routing architecture **VALIDATED IN P4** · production router **NOT IMPLEMENTED/PROVEN** · REAL **NOT AUTHORIZED** · runtime v3 **NON ADOPTED** · READY FOR REAL **NO** · document `product-simplification/04-chat-first-product-simplification-semantic-projection-cognitive-architecture.md` · next after PR = **ChatGPT PR review** → **DISTINCT Morris merge gate**
+- CURRENT STRUCTURAL STEP (living tip): **STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5 AUTHORIZED BY MORRIS / STARTED / IN PROGRESS — P5-S01 LOCAL CANDIDATE** · P1/P2/P3/P4 **CLOSED** · P4 FINAL TRUTH-SYNC **ON MAIN** (PR **#554** / `04527bed…` / CI **#676** SUCCESS) · CURRENT CAPABILITY = **P5-S01** Workspace/Conversation + Semantic Context + Cognitive Routing D0 + P3 Visual Fidelity foundation · document `product-simplification/05-chat-first-product-simplification-integrated-delivery.md` · REAL **NOT AUTHORIZED** · R1/R2/R3 **NOT STARTED** · runtime v3 **NON ADOPTED** · READY FOR REAL **NO** · next after ChatGPT PASS = **MORRIS P5-S01 GIT INTEGRATION GATE** · **≠** P5 COMPLETE · **≠** READY FOR MERGE
 - D-PRE-M6-UX-05 : Freeze `uUdLBElF2B4dOefaAYt4QY` · handoff `69106c82024158889f77e9d31508a222ea5f3a0f` / blob `3593ddbdc286cd244790f0ca1d2c421128202c5c` · **ADOPTED AS PRE-M6 VISUAL REFERENCE ON MAIN**
 - CKC coverage : current **4/15** detailed pilots + **11/15** synthetic fallback · target = 100 % du catalogue applicable · `15` non structurel · optional later v2.6 capitalization under distinct method gate
 - Audit handoff historique : `sfia/review-handoff` @ `c5b417dc13fa3700787d28571e5b5abe0599ae98` / `31a5db07fba2555a59ee8c65ad76b537bbd8a73d`

```

======================================================================
REMAINING RESERVATIONS
======================================================================
Blocking for Correction Pass 01 Critical Re-review: NONE of CP1–CP5 remain open.
Non-blocking (preserved):
- Visual runtime vs Figma not captured (auth)
- Compact/Mobile fidelity unproven
- F2 routing alignment debt
- Escalation loop not exercised
- REAL / R1/R2/R3 not started

Next capability: ChatGPT Critical Re-review → if PASS → Morris P5-S01 Git Integration
Gates remaining: ChatGPT re-review · Morris Git Integration · Merge · REAL

======================================================================
FINAL VERDICT (Cursor self)
======================================================================
READY FOR CHATGPT P5-S01 CRITICAL RE-REVIEW —
CP1–CP5 CORRECTED /
P5-S01 D0 LOCAL CANDIDATE /
ZERO REAL /
VISUAL RESERVES PRESERVED

≠ READY FOR PR · ≠ READY FOR MERGE · ≠ P5-S01 COMPLETE · ≠ P5 COMPLETE
≠ R1/R2/R3 PASS · ≠ READY FOR REAL · ≠ PIXEL-PERFECT PASS · ≠ runtime v3 ADOPTED
