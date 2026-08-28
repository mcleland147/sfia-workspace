# V3-REAL-B-BLOCKER-02-CORR-02 — FULL Review Pack (REPUBLISH — MODIFIED CONTENT INCLUDED)

## Metadata
- **Cycle ID:** V3-REAL-B-BLOCKER-02-CORR-02
- **Title:** Required Source Coverage Integrity & Pass Exhaustion Fail-Closed
- **Morris GO:** GO V3-REAL-B-BLOCKER-02-CORR-02
- **Timestamp START:** 2026-08-28T13:22:00+02:00 (Europe/Paris)
- **Timestamp END:** 2026-08-28T14:48:02+0200 (Europe/Paris)
- **Repo root:** `/Users/morris/Projects/sfia-workspace-w3-post-closure-truth-sync`
- **Branch:** `fix/sfia-studio-real-b-blocker-02`
- **HEAD / origin/main:** `967f4c2b35948492caeba5347bb02c7c420de490`
- **Source handoff consumed:** `2b1cbed879c613f581df483f3e5e15b0e627c31e` (V3-REAL-B-BLOCKER-02-CORR-01) — YES
- **Prior handoff publish (INCOMPLETE):** `1a278849cb534b98192d286f99fcc66f2c476558` — metadata-only; `.tmp` path references not shipped remotely
- **Remote corrective branch:** ABSENT (`git ls-remote --heads origin fix/sfia-studio-real-b-blocker-02` → empty)
- **Project commit / push / PR / merge:** NONE (authorized)

## Republish rationale
Formal review was blocked with **REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING**: remote `sfia/review-handoff` contained only `sfia-review-handoff/latest-chatgpt-review.md` without inlined production diffs, full `groundingPreflight.ts`, complete CORR-02 tests, or validation logs. This republish embeds all verifiable content below (no architecture reopen; no additional code changes).

## Convergence pre-check
- Build Doctrine: VALIDATED / ACTIVE
- Product Completion: COMPLETE / CLOSED BY MORRIS
- REAL-A: COMPLETE / CONSUMED
- REAL-B: BLOCKING (F-RB-01 remediated in code — LIVE reproof pending)
- F-RB-07: CLOSED BY REAL REPROOF (preserved)
- F-RB-02: OPEN NONBLOCKING
- runtime v3: NON ADOPTED
- REAL-C: BLOCKED

## Formal review defects consumed

| Defect | Description | CORR-02 disposition |
|---|---|---|
| **A — Pass exhaustion false-complete** | `(!continuationRequired \|\| passesExhausted)` treated pass limit as coverage complete | **FIXED** — `requiredGroundingCoverageComplete` requires `isRequiredSourceCoverageComplete()`; `passesExhausted` recorded but never implies completeness |
| **B — READ coverage ≠ required-source coverage** | Successful reads existed without machine-checkable required-source inventory | **FIXED** — process-local `RequiredSourceCoverage` + `REQUIRED_SOURCE_INTENTS:` grounding protocol; completion verified only against successful `git_local_read_file` evidence |

## Required source inventory — representation
- **Types (exported):** `RequiredSourceCoverageStatus`, `RequiredSourceCoverageItem`, `RequiredSourceCoverage`
- **Discovery:** extend existing prequalification grounding — `inferRequiredSourceIntentsFromRequest()` + `parseRequiredSourceIntentsFromGrounding()`; no standalone planner; no second model call
- **Genericity:** pattern-based user-request parsing — no production hardcoding of Roadmap / C1 / REAL-A
- **Strict evidence matching:** `strictEvidenceOnly` disables fuzzy `labelMatchesDocument` cross-match (fixes required-doc-N / corpus-item-N collisions)
- **Vacuous completeness:** empty required-source inventory → `inventoryEstablished: true`, `isRequiredSourceCoverageComplete()` true when count=0 (generic F2 prompts without named sources)

## Pass exhaustion — before / after

**Before (CORR-01 defect):**
```typescript
(!continuationRequired || passesExhausted) // in requiredGroundingCoverageComplete
```

**After (CORR-02):**
```typescript
input.completeness.requiredGroundingCoverageComplete =
  hasReads &&
  noBudgetLoss &&
  noOmittedRefs &&
  !budgetBlocked &&
  input.requiredSourceCoverage.inventoryEstablished &&
  requiredComplete;
// passesExhausted never appears in this conjunction
```

## Production files changed (authorized scope)
| File | Role |
|---|---|
| `projects/sfia-studio/app/features/project-assistant/groundingPreflight.ts` | Required-source inventory, strict matching, progressive loop integration (**NEW vs origin/main**) |
| `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts` | Fail-closed gate + `formatIncompleteRequiredSourceMessage` |
| `projects/sfia-studio/app/lib/platform/tools/toolLoop.ts` | Evidence transport (CORR-01 baseline preserved) |
| `projects/sfia-studio/app/lib/platform/tools/groundingEvidenceBudget.ts` | Configurable budgets (unchanged defaults) |
| `projects/sfia-studio/app/__tests__/project-assistant/realBBlocker02.authoritativeGroundingEvidence.test.ts` | CORR-01 + CORR-02 deterministic matrix |
| `projects/sfia-studio/real-parity/remediation/real-b-blocker-02-authoritative-grounding-evidence-consumption.md` | §O CORR-02 remediation record |

## CORR-02 deterministic tests (added)
| Test ID | Result |
|---|---|
| T-B02-CORR02-PASS-EXHAUSTED-INCOMPLETE | PASS |
| T-B02-CORR02-REQUIRED-INVENTORY-RB01 | PASS |
| T-B02-CORR02-MISSING-REQUIRED-SOURCE (2/3) | PASS — Cycle/LPS/Proposal Δ0 |
| T-B02-CORR02-SEARCH-ONLY-NOT-COVERED | PASS |
| T-B02-CORR02-ALL-REQUIRED-COVERED (3/3) | PASS |
| T-B02-CORR02-PARTIAL-AFTER-LAST-PASS | PASS |
| T-B02-CORR02-15-REQUIRED (14/15 fail, 15/15 pass) | PASS |
| T-B02-CORR02-RB01-POISON | PASS — cyc:qa-validation / Critical |
| T-B02-CORR02-RB07 | PASS — contradiction non-regression |

## Targeted validation
```text
npm test -- __tests__/project-assistant/realBBlocker02.authoritativeGroundingEvidence.test.ts
→ 23/23 PASS
npm run typecheck → EXIT 0
npm run build → PASS
```

## Full Vitest (retry policy corrected — max 4 total full-suite attempts)
| Attempt | Result | Notes |
|---|---|---|
| 1 | FAIL | 6 failed (incl. qa-pre-m6-01 H1 timeout flake + BLOCKER-01 gate before vacuous fix) |
| 2 | FAIL | 1 failed (qa-pre-m6-01 H1) after BLOCKER-01 vacuous inventory fix |
| 3 | **EXIT 0** | 225 files / 2183 tests PASS |

## Historical evidence immutability
| File | SHA-256 | Changed |
|---|---|---|
| `02-real-b-qualification-cognitive-reasoning.md` | `9c01060595dbf6277034f39823ebf25ec7a9044c3b68943408b12b38c4a78393` | NO |
| `02-real-b-exact-reproof-01.md` | `db3e95cd3039b3c5c5eeaac691bb00b24a28829bcd5bdd7b7dd1fbdeb8072382` | NO |
| `remediation/real-b-blocker-01-source-grounded-cognitive-qualification.md` | `9c2d4593f0ecee6ff1174287d7b2ce0e863d5de12682bbe56e61b981759d7005` | NO |

## OpenAI LIVE / HD / EC / Attempt
- OpenAI LIVE: **0**
- HD: **0**
- EC: **0**
- Attempt: **0**
- Cursor product execution: **NO**

## Proof ceiling (allowed)
V3-REAL-B-BLOCKER-02-CORR-02 — CORRECTIVE DELIVERY DETERMINISTIC PROVEN — REQUIRED-SOURCE INVENTORY + VERIFIED COVERAGE PROVEN — PASS EXHAUSTION FAIL-CLOSED PROVEN — MISSING/PARTIAL REQUIRED SOURCE CANNOT REACH QUALIFICATION — CORR-01 MULTI-SOURCE CAPACITY PRESERVED — F-RB-01 REMEDIATED IN CODE — F-RB-07 REAL CLOSURE PRESERVED — PENDING F-RB-01 LIVE REPROOF

**Forbidden:** F-RB-01 CLOSED REAL · REAL-B PASS · REAL-C READY/EXECUTED · runtime v3 ADOPTED

## Next gate
F-RB-01 impacted LIVE reproof — **NOT REAL-C**

---

## Complete diff — `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts` (vs `origin/main`)
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 54e090d4..69b23088 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -19,8 +19,21 @@ import type {
   ProjectAssistantSendResult,
 } from "../types";
 import { orchestrateProjectAssistantTurn } from "../orchestrateTurn";
+import {
+  assessGroundingContradictions,
+  formatAuthoritativeEvidenceForQualification,
+  formatIncompleteRequiredSourceMessage,
+  runProjectGroundingPreflight,
+} from "../groundingPreflight";
+import type {
+  AssistantSourceDto,
+  AssistantToolEventDto,
+} from "../types";
 import { analyzeIntent } from "./intentAnalysis";
-import { isPureRepositoryAnalysisIntent } from "./repositoryIntent";
+import {
+  isPureRepositoryAnalysisIntent,
+  requiresPrequalificationGrounding,
+} from "./repositoryIntent";
 import { evaluateMorrisGateRequired } from "./gatePolicy";
 import {
   enrichQualificationWithCkcSemantics,
@@ -193,6 +206,10 @@ function f2Success(base: {
   qualification?: QualificationDto;
   proposal?: ProposalDto;
   executionBlocked?: boolean;
+  toolRounds?: number;
+  toolCalls?: number;
+  sources?: AssistantSourceDto[];
+  toolEvents?: AssistantToolEventDto[];
 }): ProjectAssistantSendResult {
   const turnKind =
     base.qualification && base.proposal
@@ -207,10 +224,10 @@ function f2Success(base: {
     mode: base.mode,
     presentation: base.presentation,
     model: base.model,
-    toolRounds: 0,
-    toolCalls: 0,
-    sources: [],
-    toolEvents: [],
+    toolRounds: base.toolRounds ?? 0,
+    toolCalls: base.toolCalls ?? 0,
+    sources: base.sources ?? [],
+    toolEvents: base.toolEvents ?? [],
     project: base.project,
     ephemeralNotice: EPHEMERAL_NOTICE,
     f2: {
@@ -385,14 +402,191 @@ export async function orchestrateAssistantSend(input: {
     });
   }

+  const projectSummary = [
+    `name=${project.name}`,
+    `objective=${project.objective}`,
+    `criticality=${project.criticality}`,
+    `lps=${project.lpsId}@${project.lpsVersion}`,
+  ].join(" | ");
+
+  // Preliminary analysis is routing-only when grounding is required —
+  // never persist createCycle from the pre-grounding candidate alone.
+  let finalAnalysis = analysis;
+  let finalPresentation = presentation;
+  let finalModel = model;
+  let groundingSources: AssistantSourceDto[] = [];
+  let groundingToolEvents: AssistantToolEventDto[] = [];
+  let groundingToolRounds = 0;
+  let groundingToolCalls = 0;
+
+  if (requiresPrequalificationGrounding(content)) {
+    const grounding = await runProjectGroundingPreflight({
+      project,
+      content,
+      history: input.history,
+      purpose: "f2_prequalification",
+      correlationId: `f2-preflight:${project.projectId}`,
+    });
+
+    if (!grounding.ok) {
+      return {
+        ok: false,
+        status: grounding.status,
+        code: grounding.code,
+        message: grounding.message,
+        mode: grounding.mode,
+        retryable: grounding.retryable,
+      };
+    }
+
+    groundingSources = grounding.sources;
+    groundingToolEvents = grounding.toolEvents;
+    groundingToolRounds = grounding.toolRounds;
+    groundingToolCalls = grounding.toolCalls;
+
+    if (grounding.unresolvedRequiredSources) {
+      return f2Success({
+        text:
+          "[Grounding requis] Les sources repository nécessaires à la qualification n'ont pas pu être résolues. Aucune CycleInstance / LPS / Proposal n'a été créée. AUCUNE EXÉCUTION.",
+        mode: modeResolution.mode as "fixture" | "live",
+        presentation: grounding.presentation,
+        model: grounding.model ?? model,
+        project,
+        intentClass: analysis.intentClass,
+        toolRounds: grounding.toolRounds,
+        toolCalls: grounding.toolCalls,
+        sources: grounding.sources,
+        toolEvents: grounding.toolEvents,
+        executionBlocked: analysis.intentClass === "execution_request",
+      });
+    }
+
+    if (!grounding.requiredGroundingCoverageComplete) {
+      const cc = grounding.coverageCompleteness;
+      const rsc = grounding.requiredSourceCoverage;
+      const technicalDetail = [
+        cc.droppedEvidenceCount > 0
+          ? `${cc.droppedEvidenceCount} evidence item(s) omitted (technical budget)`
+          : null,
+        cc.budgetExhausted && cc.droppedEvidenceCount > 0
+          ? "technical safety budget exhausted"
+          : null,
+        cc.passesExhausted && !rsc.inventoryEstablished
+          ? "technical pass limit reached"
+          : null,
+      ]
+        .filter(Boolean)
+        .join(" | ");
+      const text =
+        rsc.inventoryEstablished && rsc.requiredSourceCount > 0
+          ? formatIncompleteRequiredSourceMessage(rsc, technicalDetail || undefined)
+          : `[Contexte incomplet] COUVERTURE DES SOURCES REQUISES INCOMPLÈTE — AUCUNE QUALIFICATION. ${technicalDetail || "Couverture grounding insuffisante."} Aucune CycleInstance / LPS / Proposal n'a été créée. AUCUNE EXÉCUTION.`;
+      return f2Success({
+        text,
+        mode: modeResolution.mode as "fixture" | "live",
+        presentation: grounding.presentation,
+        model: grounding.model ?? model,
+        project,
+        intentClass: analysis.intentClass,
+        toolRounds: grounding.toolRounds,
+        toolCalls: grounding.toolCalls,
+        sources: grounding.sources,
+        toolEvents: grounding.toolEvents,
+        executionBlocked: analysis.intentClass === "execution_request",
+      });
+    }
+
+    const sourceRefs = grounding.sources
+      .map((s) => s.pathOrRef)
+      .filter((p): p is string => Boolean(p));
+    const contradictions = assessGroundingContradictions({
+      userContent: content,
+      groundedText: grounding.narrativeText,
+      sourceRefs,
+    });
+    const blocking = contradictions.filter((c) => c.severity === "blocking");
+    if (blocking.length > 0) {
+      const detail = blocking
+        .map(
+          (c) =>
+            `Contradiction bloquante — claim: ${c.claim} | fait grounded: ${c.groundedFact.slice(0, 400)}`,
+        )
+        .join("\n");
+      return f2Success({
+        text: `[Contradiction] ${detail} La phrase utilisateur n'est pas une HumanDecision. Aucune CycleInstance / LPS / Proposal fondée sur la prémisse non corroborée. AUCUNE EXÉCUTION.`,
+        mode: modeResolution.mode as "fixture" | "live",
+        presentation: grounding.presentation,
+        model: grounding.model ?? model,
+        project,
+        intentClass: analysis.intentClass,
+        toolRounds: grounding.toolRounds,
+        toolCalls: grounding.toolCalls,
+        sources: grounding.sources,
+        toolEvents: grounding.toolEvents,
+        executionBlocked: analysis.intentClass === "execution_request",
+      });
+    }
+
+    const groundedContext = formatAuthoritativeEvidenceForQualification({
+      evidence: grounding.authoritativeEvidence,
+      sourceRefs,
+    });
+
+    try {
+      const groundedAnalysis = await analyzeIntent({
+        userContent: content,
+        projectSummary,
+        groundedContext,
+      });
+      finalAnalysis = groundedAnalysis.analysis;
+      finalPresentation = groundedAnalysis.presentation;
+      finalModel = groundedAnalysis.model ?? grounding.model ?? model;
+    } catch (error) {
+      const message =
+        error instanceof Error ? error.message : "Erreur provider inattendue.";
+      return {
+        ok: false,
+        status: "provider_error",
+        code: "PROVIDER_ERROR",
+        message:
+          message === "FAKE_PROVIDER_ERROR"
+            ? "Le fournisseur de démonstration a signalé une erreur. Réessayez manuellement."
+            : message,
+        mode: modeResolution.mode,
+        retryable: true,
+      };
+    }
+
+    if (
+      finalAnalysis.intentClass === "ambiguous" ||
+      !finalAnalysis.parseOk ||
+      !finalAnalysis.candidateCycleTypeId ||
+      !finalAnalysis.signals
+    ) {
+      return f2Success({
+        text:
+          "[Clarification requise] Après grounding, la qualification reste incomplète ou ambiguë. Aucune CycleInstance / LPS / Proposal. AUCUNE EXÉCUTION.",
+        mode: modeResolution.mode as "fixture" | "live",
+        presentation: finalPresentation,
+        model: finalModel,
+        project,
+        intentClass: "ambiguous",
+        toolRounds: groundingToolRounds,
+        toolCalls: groundingToolCalls,
+        sources: groundingSources,
+        toolEvents: groundingToolEvents,
+      });
+    }
+  }
+
   const preLpsVersion = project.lpsVersion;
   const correlationId = `cor:f2-${randomBytes(8).toString("hex")}`;

   const qualified = await qualifyWithCkc({
-    cycleTypeId: analysis.candidateCycleTypeId,
-    signals: analysis.signals,
-    objective: analysis.objective ?? undefined,
-    scope: analysis.scope ?? undefined,
+    cycleTypeId: finalAnalysis.candidateCycleTypeId!,
+    signals: finalAnalysis.signals!,
+    objective: finalAnalysis.objective ?? undefined,
+    scope: finalAnalysis.scope ?? undefined,
     correlationId,
     ckcQualification: oa.ckcQualification,
   });
@@ -401,20 +595,18 @@ export async function orchestrateAssistantSend(input: {
     return f2Success({
       text: `[Qualification échouée] ${qualified.message} AUCUNE EXÉCUTION.`,
       mode: modeResolution.mode as "fixture" | "live",
-      presentation,
-      model,
+      presentation: finalPresentation,
+      model: finalModel,
       project,
-      intentClass: analysis.intentClass,
+      intentClass: finalAnalysis.intentClass,
+      toolRounds: groundingToolRounds,
+      toolCalls: groundingToolCalls,
+      sources: groundingSources,
+      toolEvents: groundingToolEvents,
     });
   }

   let { qualification } = qualified;
-  const projectSummary = [
-    `name=${project.name}`,
-    `objective=${project.objective}`,
-    `criticality=${project.criticality}`,
-    `lps=${project.lpsId}@${project.lpsVersion}`,
-  ].join(" | ");

   if (isProductStudioNativeCkcProof(qualified.raw.proof)) {
     const packagePin = doctrinePackagePinFromProject(project);
@@ -430,8 +622,8 @@ export async function orchestrateAssistantSend(input: {
         userContent: content,
         projectSummary,
         intentSummary:
-          analysis.rephrasedRequest ??
-          analysis.objective ??
+          finalAnalysis.rephrasedRequest ??
+          finalAnalysis.objective ??
           "Intention actionable",
         ckcPromptSection: buildCkcCognitivePromptSection(ckcContent),
       });
@@ -452,18 +644,25 @@ export async function orchestrateAssistantSend(input: {

   if (
     qualification.requiresJustificationForCritical &&
-    !(analysis.criticalJustification && analysis.criticalJustification.trim())
+    !(
+      finalAnalysis.criticalJustification &&
+      finalAnalysis.criticalJustification.trim()
+    )
   ) {
     return f2Success({
       text:
         "[Critical] Justification structurante obligatoire avant proposition validable. Critical n'est jamais implicite. AUCUNE EXÉCUTION.",
       mode: modeResolution.mode as "fixture" | "live",
-      presentation,
-      model,
+      presentation: finalPresentation,
+      model: finalModel,
       project,
-      intentClass: analysis.intentClass,
+      intentClass: finalAnalysis.intentClass,
       qualification,
-      executionBlocked: analysis.intentClass === "execution_request",
+      executionBlocked: finalAnalysis.intentClass === "execution_request",
+      toolRounds: groundingToolRounds,
+      toolCalls: groundingToolCalls,
+      sources: groundingSources,
+      toolEvents: groundingToolEvents,
     });
   }

@@ -472,10 +671,10 @@ export async function orchestrateAssistantSend(input: {
     cycleInstanceId,
     cycleTypeId: qualification.cycleTypeId,
     projectId: project.projectId,
-    objective: analysis.objective ?? undefined,
-    scope: analysis.scope ?? undefined,
-    signals: analysis.signals,
-    justification: analysis.criticalJustification ?? undefined,
+    objective: finalAnalysis.objective ?? undefined,
+    scope: finalAnalysis.scope ?? undefined,
+    signals: finalAnalysis.signals!,
+    justification: finalAnalysis.criticalJustification ?? undefined,
     createdBy: {
       actorId: "actor:nora-f2",
       role: "agent",
@@ -492,12 +691,16 @@ export async function orchestrateAssistantSend(input: {
     return f2Success({
       text: `[Cycle] Création CycleInstance échouée (${created.error.detailCode}). Aucune mutation partielle. AUCUNE EXÉCUTION.`,
       mode: modeResolution.mode as "fixture" | "live",
-      presentation,
-      model,
+      presentation: finalPresentation,
+      model: finalModel,
       project,
-      intentClass: analysis.intentClass,
+      intentClass: finalAnalysis.intentClass,
       qualification,
-      executionBlocked: analysis.intentClass === "execution_request",
+      executionBlocked: finalAnalysis.intentClass === "execution_request",
+      toolRounds: groundingToolRounds,
+      toolCalls: groundingToolCalls,
+      sources: groundingSources,
+      toolEvents: groundingToolEvents,
     });
   }

@@ -507,16 +710,20 @@ export async function orchestrateAssistantSend(input: {
     return f2Success({
       text: `[Contexte] Relecture LPS post-mutation échouée. AUCUNE EXÉCUTION.`,
       mode: modeResolution.mode as "fixture" | "live",
-      presentation,
-      model,
+      presentation: finalPresentation,
+      model: finalModel,
       project,
-      intentClass: analysis.intentClass,
+      intentClass: finalAnalysis.intentClass,
       qualification: {
         ...qualification,
         cycleInstanceId: created.cycle.cycleInstanceId,
         cycleStatus: created.cycle.status,
         ckcResolutionRef,
       },
+      toolRounds: groundingToolRounds,
+      toolCalls: groundingToolCalls,
+      sources: groundingSources,
+      toolEvents: groundingToolEvents,
     });
   }

@@ -544,25 +751,25 @@ export async function orchestrateAssistantSend(input: {

   const morrisGateRequired = evaluateMorrisGateRequired({
     recommendedProfile: qualification.recommendedProfile,
-    signals: analysis.signals,
-    intent: analysis,
+    signals: finalAnalysis.signals!,
+    intent: finalAnalysis,
   });

   const status = morrisGateRequired ? "DECISION_REQUIRED" : "READY_NO_GATE";
   const proposal = saveProposal(
     buildProposal({
-      intent: analysis,
+      intent: finalAnalysis,
       qualification,
       project,
       morrisGateRequired,
-      executionRequest: analysis.intentClass === "execution_request",
+      executionRequest: finalAnalysis.intentClass === "execution_request",
       status,
     }),
   );

-  const executionBlocked = analysis.intentClass === "execution_request";
+  const executionBlocked = finalAnalysis.intentClass === "execution_request";
   const textParts = [
-    presentation === "test_provider" ? "[TEST/FAKE · NON LIVE]" : "[LIVE]",
+    finalPresentation === "test_provider" ? "[TEST/FAKE · NON LIVE]" : "[LIVE]",
     "Qualification SFIA et proposition structurée générées.",
     `Cycle: ${qualification.cycleTypeId} (${qualification.cycleLabel}).`,
     `CycleInstance: ${created.cycle.cycleInstanceId} (${created.cycle.status}).`,
@@ -583,12 +790,16 @@ export async function orchestrateAssistantSend(input: {
   return f2Success({
     text: textParts.join(" "),
     mode: modeResolution.mode as "fixture" | "live",
-    presentation,
-    model,
+    presentation: finalPresentation,
+    model: finalModel,
     project,
-    intentClass: analysis.intentClass,
+    intentClass: finalAnalysis.intentClass,
     qualification,
     proposal,
     executionBlocked,
+    toolRounds: groundingToolRounds,
+    toolCalls: groundingToolCalls,
+    sources: groundingSources,
+    toolEvents: groundingToolEvents,
   });
 }
```

## Complete diff — `projects/sfia-studio/app/lib/platform/tools/toolLoop.ts` (vs `origin/main`)
```diff
diff --git a/projects/sfia-studio/app/lib/platform/tools/toolLoop.ts b/projects/sfia-studio/app/lib/platform/tools/toolLoop.ts
index 7727b97d..d412cf26 100644
--- a/projects/sfia-studio/app/lib/platform/tools/toolLoop.ts
+++ b/projects/sfia-studio/app/lib/platform/tools/toolLoop.ts
@@ -7,13 +7,17 @@ import { noopEventSink } from "../observability/eventSink";
 import {
   createToolCallId,
   listExposableTools,
+  resolveToolPathOrRef,
   routeToolCall,
   toolResultForModel,
 } from "./toolRouter";
+import type { ToolCallResult } from "./types";
 import {
   CT_MAX_TOOL_CALLS_PER_ROUND,
   CT_MAX_TOOL_ROUNDS,
 } from "./types";
+import type { GroundingEvidenceBudget } from "./groundingEvidenceBudget";
+import { resolveGroundingEvidenceBudget } from "./groundingEvidenceBudget";
 import type {
   ConversationProvider,
   ProviderChatMessage,
@@ -38,12 +42,137 @@ function mergeUsage(
   };
 }

+/** Bounded safe factual payload from a single tool invocation in the loop. */
+export type ToolLoopEvidenceItem = {
+  toolName: string;
+  status: "succeeded" | "failed" | "denied";
+  sourceRef: string | null;
+  summary: string;
+  /** Safe redacted/capped JSON — same representation the provider saw. */
+  payload: string;
+  truncated: boolean;
+  /** Successful git_local_read_file — document-level authority (search ≠ read). */
+  isAuthoritativeDocumentRead: boolean;
+};
+
 export interface ToolLoopResult {
   text: string;
   usage: ProviderUsage;
   toolRounds: number;
   toolCalls: number;
   limitReached: boolean;
+  /** Process-local bounded evidence from actual ToolCallResult payloads. */
+  authoritativeEvidence: ToolLoopEvidenceItem[];
+  /** Explicit completeness — never silently drop without recording. */
+  evidenceCompleteness: ToolLoopEvidenceCompleteness;
+}
+
+/** Explicit loss/incompleteness state for one tool-loop pass. */
+export type ToolLoopEvidenceCompleteness = {
+  evidenceComplete: boolean;
+  budgetExhausted: boolean;
+  droppedEvidenceCount: number;
+  continuationRequired: boolean;
+  incompleteSourceRefs: string[];
+  truncatedSourceRefs: string[];
+  omittedDueToBudgetRefs: string[];
+};
+
+export function createEmptyEvidenceCompleteness(): ToolLoopEvidenceCompleteness {
+  return {
+    evidenceComplete: true,
+    budgetExhausted: false,
+    droppedEvidenceCount: 0,
+    continuationRequired: false,
+    incompleteSourceRefs: [],
+    truncatedSourceRefs: [],
+    omittedDueToBudgetRefs: [],
+  };
+}
+
+function isAuthoritativeDocumentReadTool(name: string): boolean {
+  return name === "git_local_read_file";
+}
+
+function buildEvidenceItem(
+  routed: ToolCallResult,
+  args: Record<string, unknown>,
+): ToolLoopEvidenceItem {
+  return {
+    toolName: routed.name,
+    status: routed.ok ? "succeeded" : routed.status,
+    sourceRef: routed.ok
+      ? resolveToolPathOrRef(routed.name, args, routed.data)
+      : null,
+    summary: routed.ok ? routed.summary : routed.message,
+    payload: toolResultForModel(routed),
+    truncated: routed.ok ? routed.usage.truncated : false,
+    isAuthoritativeDocumentRead:
+      routed.ok && isAuthoritativeDocumentReadTool(routed.name),
+  };
+}
+
+function recordOmission(
+  completeness: ToolLoopEvidenceCompleteness,
+  sourceRef: string | null,
+  reason: "budget_items" | "budget_chars",
+): void {
+  completeness.evidenceComplete = false;
+  completeness.budgetExhausted = true;
+  completeness.droppedEvidenceCount += 1;
+  completeness.continuationRequired = true;
+  if (sourceRef) {
+    completeness.omittedDueToBudgetRefs.push(sourceRef);
+    if (!completeness.incompleteSourceRefs.includes(sourceRef)) {
+      completeness.incompleteSourceRefs.push(sourceRef);
+    }
+  }
+  void reason;
+}
+
+function tryAppendEvidence(
+  items: ToolLoopEvidenceItem[],
+  totalChars: { value: number },
+  item: ToolLoopEvidenceItem,
+  budget: Pick<
+    GroundingEvidenceBudget,
+    "maxEvidenceItemsPerPass" | "maxEvidenceCharsPerPass"
+  >,
+  completeness: ToolLoopEvidenceCompleteness,
+): boolean {
+  if (items.length >= budget.maxEvidenceItemsPerPass) {
+    recordOmission(completeness, item.sourceRef, "budget_items");
+    return false;
+  }
+  const nextTotal = totalChars.value + item.payload.length;
+  if (nextTotal > budget.maxEvidenceCharsPerPass) {
+    recordOmission(completeness, item.sourceRef, "budget_chars");
+    return false;
+  }
+  items.push(item);
+  totalChars.value = nextTotal;
+  if (
+    item.isAuthoritativeDocumentRead &&
+    item.truncated &&
+    item.sourceRef &&
+    !completeness.truncatedSourceRefs.includes(item.sourceRef)
+  ) {
+    completeness.truncatedSourceRefs.push(item.sourceRef);
+    completeness.continuationRequired = true;
+    if (!completeness.incompleteSourceRefs.includes(item.sourceRef)) {
+      completeness.incompleteSourceRefs.push(item.sourceRef);
+    }
+  }
+  return true;
+}
+
+export function hasAuthoritativeDocumentReadEvidence(
+  items: readonly ToolLoopEvidenceItem[],
+): boolean {
+  return items.some(
+    (item) =>
+      item.status === "succeeded" && item.isAuthoritativeDocumentRead,
+  );
 }

 type GroundingLedger = {
@@ -90,8 +219,22 @@ export async function runToolCallingLoop(input: {
   enableTools?: boolean;
   sink?: EventSink;
   workspaceRoot?: string;
+  /** Optional per-pass technical budget override (defaults via resolveGroundingEvidenceBudget). */
+  evidenceBudget?: Pick<
+    GroundingEvidenceBudget,
+    "maxEvidenceItemsPerPass" | "maxEvidenceCharsPerPass"
+  >;
 }): Promise<ToolLoopResult> {
   const sink = input.sink ?? noopEventSink;
+  const resolvedBudget = resolveGroundingEvidenceBudget();
+  const passBudget = {
+    maxEvidenceItemsPerPass:
+      input.evidenceBudget?.maxEvidenceItemsPerPass ??
+      resolvedBudget.maxEvidenceItemsPerPass,
+    maxEvidenceCharsPerPass:
+      input.evidenceBudget?.maxEvidenceCharsPerPass ??
+      resolvedBudget.maxEvidenceCharsPerPass,
+  };
   const tools =
     input.enableTools === false ? [] : listExposableTools();
   const completeRound =
@@ -119,6 +262,9 @@ export async function runToolCallingLoop(input: {
   let toolRounds = 0;
   let toolCalls = 0;
   let limitReached = false;
+  const authoritativeEvidence: ToolLoopEvidenceItem[] = [];
+  const evidencePayloadChars = { value: 0 };
+  const evidenceCompleteness = createEmptyEvidenceCompleteness();
   const grounding: GroundingLedger = {
     succeeded: [],
     failedOrDenied: [],
@@ -151,6 +297,8 @@ export async function runToolCallingLoop(input: {
         toolRounds,
         toolCalls,
         limitReached,
+        authoritativeEvidence,
+        evidenceCompleteness,
       };
     }

@@ -211,6 +359,14 @@ export async function runToolCallingLoop(input: {
         );
       }

+      tryAppendEvidence(
+        authoritativeEvidence,
+        evidencePayloadChars,
+        buildEvidenceItem(routed, args),
+        passBudget,
+        evidenceCompleteness,
+      );
+
       items = [
         ...items,
         {
@@ -232,6 +388,11 @@ export async function runToolCallingLoop(input: {
     ];

     if (round === CT_MAX_TOOL_ROUNDS - 1) {
+      evidenceCompleteness.continuationRequired =
+        evidenceCompleteness.continuationRequired || limitReached;
+      if (limitReached) {
+        evidenceCompleteness.evidenceComplete = false;
+      }
       sink.emit({
         type: "TOOL_LOOP_LIMIT_REACHED",
         correlationId: input.correlationId,
@@ -246,6 +407,8 @@ export async function runToolCallingLoop(input: {
           toolRounds,
           toolCalls,
           limitReached: true,
+          authoritativeEvidence,
+          evidenceCompleteness,
         };
       }
       return {
@@ -254,6 +417,8 @@ export async function runToolCallingLoop(input: {
         toolRounds,
         toolCalls,
         limitReached: true,
+        authoritativeEvidence,
+        evidenceCompleteness,
       };
     }
   }
@@ -275,5 +440,7 @@ export async function runToolCallingLoop(input: {
     toolRounds,
     toolCalls,
     limitReached: true,
+    authoritativeEvidence,
+    evidenceCompleteness,
   };
 }
```

## Complete diff — `projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts` (vs `origin/main`)
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts b/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
index e08375d6..8ab1b9e0 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
@@ -242,7 +242,9 @@ Règles strictes:
 - Ne décide jamais un GO Morris; ne propose jamais d'exécution; n'invente jamais un cycle (ex. delivery) par défaut.
 - Repository READ / analyse / résumé / recherche / vérité Git SANS mutation ni qualification de cycle = informative (PAS ambiguous, PAS actionable).
   Exemples informative: « Lis ce document et résume-le. », « Retrouve le cadrage Product Completion. », « Vérifie le HEAD et le status Git. », « Cherche CURSOR_REAL_TIMEOUT_POLICY. », « Reconstitue l'historique Product Completion à partir des sources. ».
-- Demande de Delivery / décision / exécution / qualification de cycle = actionable ou execution_request selon le cas.`;
+- Demande de Delivery / décision / exécution / qualification de cycle = actionable ou execution_request selon le cas.
+- Si un bloc AUTHORITATIVE GROUNDING EVIDENCE est fourni: base la qualification UNIQUEMENT sur ces payloads tool réussis et leurs sourceRefs; un search hit ou un échec/deny n'est jamais un fait documentaire; les affirmations conversationnelles non corroborées ne sont PAS des faits; mets-les en reservations/risks; ne les consomme pas comme prémisse de cycle.
+- Le texte narratif du modèle de grounding (s'il apparaît ailleurs) n'est PAS autoritaire et ne peut pas annuler une preuve READ réussie listée dans AUTHORITATIVE GROUNDING EVIDENCE.`;

 export const ANALYSIS_SYSTEM = ANALYSIS_SYSTEM_BASE;

@@ -251,6 +253,11 @@ export async function analyzeIntent(input: {
   projectSummary: string;
   /** Optional resolved CKC excerpt for future intent analysis enrichment. */
   ckcContext?: string | null;
+  /**
+   * Read-only grounded repository facts + provenance from F1-style preflight.
+   * When present, this is the authority for current-state premises — not the raw user claim.
+   */
+  groundedContext?: string | null;
 }): Promise<{
   analysis: IntentAnalysisDto;
   presentation: "test_provider" | "openai_live";
@@ -263,11 +270,15 @@ export async function analyzeIntent(input: {
       ? "test_provider"
       : "openai_live";

+  const groundedBlock = input.groundedContext?.trim()
+    ? `\n\n${input.groundedContext.trim()}\n`
+    : "";
+
   const messages: ProviderChatMessage[] = [
     { role: "system", content: buildAnalysisSystem(input.ckcContext) },
     {
       role: "user",
-      content: `Contexte projet:\\n${input.projectSummary}\\n\\nDemande:\\n${input.userContent}`,
+      content: `Contexte projet:\n${input.projectSummary}${groundedBlock}\n\nDemande:\n${input.userContent}`,
     },
   ];
```

## Complete diff — `projects/sfia-studio/app/features/project-assistant/f2/repositoryIntent.ts` (vs `origin/main`)
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/repositoryIntent.ts b/projects/sfia-studio/app/features/project-assistant/f2/repositoryIntent.ts
index 80b6f4f7..7fbd6070 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/repositoryIntent.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/repositoryIntent.ts
@@ -2,6 +2,9 @@
  * Deterministic repository-analysis intent hint for F1 routing.
  * Does not replace F2 architecture — only forces informative when the
  * user clearly asks for read/search/Git truth without mutation/qualification.
+ *
+ * Also detects when FINAL QUALIFICATION materially depends on current
+ * repository/project truth (generic source-dependency — no product keywords).
  */

 const ACTIONABLE_NEGATIVES =
@@ -25,6 +28,108 @@ const REPO_POSITIVES: RegExp[] = [
   /\bcompare(?:r)?\b.*\bmain\b/i,
 ];

+/**
+ * Qualification / next-cycle decision language (not product-specific).
+ */
+function asksCycleQualification(text: string): boolean {
+  return (
+    /\bqualifi/i.test(text) ||
+    /\bquel cycle\b/i.test(text) ||
+    /\bcycle\b.{0,40}\b(pertinent|ouvrir|faut-il|à ouvrir|a ouvrir)\b/i.test(
+      text,
+    ) ||
+    /\b(faut-il|devrait-on)\s+ouvrir\b/i.test(text) ||
+    (/\bprochaine étape\b/i.test(text) &&
+      /\b(qualifi|cycle|roadmap)\b/i.test(text)) ||
+    /\bpassage en release\b/i.test(text)
+  );
+}
+
+/**
+ * Generic categories: current repository/project truth, prior completed work,
+ * milestone/status on main, or an asserted current-state premise needing check.
+ * No Product Completion / REAL-B / runtime-v3 one-offs.
+ */
+function dependsOnRepositoryOrCurrentState(text: string): boolean {
+  // Explicit resolve/read before qualification.
+  if (
+    /\bavant de qualifi/i.test(text) &&
+    /\b(lis|lire|r[eé]sous|r[eé]solv|v[eé]rifie)/i.test(text)
+  ) {
+    return true;
+  }
+  if (
+    /\b(lis|lire|r[eé]sous|r[eé]solv|v[eé]rifie).{0,100}(git|d[eé]p[oô]t|repository|roadmap|source)/i.test(
+      text,
+    )
+  ) {
+    return true;
+  }
+
+  // Current-state / trajectory references.
+  if (
+    /\bétat actuel\b/i.test(text) ||
+    /\bactuellement\b.{0,80}\b(sur main|en repo|dans le (projet|d[eé]p[oô]t)|roadmap)\b/i.test(
+      text,
+    ) ||
+    /\bactuellement sur main\b/i.test(text) ||
+    /\bau vu de (ce qui est |l['']état )/i.test(text) ||
+    /\bd['']après l['']état\b/i.test(text) ||
+    /\bon en est où\b/i.test(text) ||
+    /\baprès le dernier merge\b/i.test(text) ||
+    /\bsur main\b/i.test(text) ||
+    /\ben te basant sur\b/i.test(text) ||
+    /\bsources? (du projet|repository|git|locales?)\b/i.test(text) ||
+    /\btravaux déjà réalisés\b/i.test(text) ||
+    /\b(roadmap|git|d[eé]p[oô]t|repository)\b.{0,60}\bqualifi/i.test(text)
+  ) {
+    return true;
+  }
+
+  // Asserted current-state status that must be corroborated (generic tokens).
+  if (
+    /\b(est|sont)\s+(ADOPTED|COMPLETE|CLOSED|CONSUMED)\b/i.test(text) ||
+    /\b(ADOPTED|COMPLETE|CLOSED|CONSUMED)\b.{0,40}\bqualifi/i.test(text)
+  ) {
+    return true;
+  }
+
+  return false;
+}
+
+/**
+ * User elevates a conversation claim to definitive fact / HumanDecision.
+ * Generic elevation language — not a product claim whitelist.
+ */
+function elevatesCurrentStateClaim(text: string): boolean {
+  return (
+    /\bconsid[eè]re\b[\s\S]{0,160}\b(fait|d[eé]cision|acquis)\b/i.test(text) ||
+    /\bd[eé]cision humaine (d[eé]finitive|finale)\b/i.test(text) ||
+    /\bcomme (un )?fait (acquis|établi|définitif)\b/i.test(text) ||
+    /\btiens pour acquis\b/i.test(text) ||
+    /\bprends? (cette|la) (affirmation|phrase|prémisse) (comme|pour)\b/i.test(
+      text,
+    )
+  );
+}
+
+/**
+ * True when F2 qualification must resolve repository/current-state sources
+ * BEFORE final cycle analysis and before any CycleInstance/LPS mutation.
+ */
+export function requiresPrequalificationGrounding(content: string): boolean {
+  const text = content.trim();
+  if (!text) return false;
+
+  if (elevatesCurrentStateClaim(text)) return true;
+
+  if (asksCycleQualification(text) && dependsOnRepositoryOrCurrentState(text)) {
+    return true;
+  }
+
+  return false;
+}
+
 /**
  * True when the message is a pure repository read/search/Git-truth request.
  * Explicit mutation / delivery / execution / qualification requests return false.
```

## Complete diff — `projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts` (vs `origin/main`)
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index 743ceabe..18c8404d 100644
--- a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
@@ -1,22 +1,14 @@
 import {
-  getLiveConversationAvailability,
   isFakeConversationProviderForced,
-  resolveConversationProvider,
-  type ProviderChatMessage,
 } from "@/lib/platform/ai";
-import { runToolCallingLoop } from "@/lib/platform/tools";
-import { resolveWorkspaceRootFromAppCwd } from "@/lib/platform/repository/workspaceRoot";
 import { loadProjectRuntimeForAssistant } from "@/features/vertical-slice-ui/ProjectWorkspaceView";
-import { buildProjectSystemPrompt } from "./buildProjectSystemPrompt";
-import { collectToolTelemetry } from "./collectToolTelemetry";
-import { ProjectAssistantMemoryEventSink } from "./memoryEventSink";
+import { runProjectGroundingPreflight } from "./groundingPreflight";
 import type {
   AssistantHistoryMessage,
   ProjectAssistantContextDto,
   ProjectAssistantSendResult,
 } from "./types";

-const MAX_HISTORY_MESSAGES = 20;
 const EPHEMERAL_NOTICE =
   "Conversation éphémère (process-local) — un rechargement peut effacer l'historique. Project/LPS/Cycle linkage M2 reste dans Product SQLite. AUCUNE EXÉCUTION.";

@@ -47,27 +39,8 @@ function toContextDto(
   };
 }

-function resolveMode(): {
-  mode: "fixture" | "live" | "unavailable";
-  canProceed: boolean;
-  message?: string;
-} {
-  if (isFakeConversationProviderForced()) {
-    return { mode: "fixture", canProceed: true };
-  }
-  const availability = getLiveConversationAvailability();
-  if (!availability.available) {
-    return {
-      mode: "unavailable",
-      canProceed: false,
-      message: `Assistant indisponible — configuration manquante (${availability.missing.join(", ")}). Aucun basculement silencieux vers le mode démonstration.`,
-    };
-  }
-  return { mode: "live", canProceed: true };
-}
-
 /**
- * Thin F1 orchestration — platform AI + tool loop only (no OPS1 session).
+ * Thin F1 orchestration — platform AI + shared read-only grounding loop.
  */
 export async function orchestrateProjectAssistantTurn(input: {
   projectId: string;
@@ -99,82 +72,36 @@ export async function orchestrateProjectAssistantTurn(input: {
   }

   const project = toContextDto(projectResult);
-  const modeResolution = resolveMode();
-  if (!modeResolution.canProceed) {
-    return {
-      ok: false,
-      status: "provider_unavailable",
-      code: "PROVIDER_UNAVAILABLE",
-      message: modeResolution.message ?? "Provider indisponible.",
-      mode: "unavailable",
-      retryable: false,
-    };
-  }
-
-  const history = (input.history ?? [])
-    .filter(
-      (m) =>
-        (m.role === "user" || m.role === "assistant") &&
-        typeof m.content === "string" &&
-        m.content.trim().length > 0,
-    )
-    .slice(-MAX_HISTORY_MESSAGES);
-
-  const messages: ProviderChatMessage[] = [
-    { role: "system", content: buildProjectSystemPrompt(project) },
-    ...history.map((m) => ({ role: m.role, content: m.content.trim() })),
-    { role: "user", content },
-  ];
-
-  const sink = new ProjectAssistantMemoryEventSink();
-  const workspaceRoot = resolveWorkspaceRootFromAppCwd();
-  const provider = resolveConversationProvider();
-  const presentation =
-    isFakeConversationProviderForced() || provider.providerId === "fake-test"
-      ? "test_provider"
-      : "openai_live";
-
-  try {
-    const loop = await runToolCallingLoop({
-      correlationId: `f1:${project.projectId}`,
-      messages,
-      provider,
-      enableTools: true,
-      sink,
-      workspaceRoot,
-    });
-
-    const { toolEvents, sources } = collectToolTelemetry(sink.events);
+  const grounded = await runProjectGroundingPreflight({
+    project,
+    content,
+    history: input.history,
+    purpose: "f1_informative",
+  });

-    return {
-      ok: true,
-      status: "ok",
-      text: loop.text,
-      mode: modeResolution.mode,
-      presentation,
-      model: loop.usage?.model ?? null,
-      toolRounds: loop.toolRounds,
-      toolCalls: loop.toolCalls,
-      sources,
-      toolEvents,
-      project,
-      ephemeralNotice: EPHEMERAL_NOTICE,
-    };
-  } catch (error) {
-    const message =
-      error instanceof Error
-        ? error.message
-        : "Erreur provider inattendue.";
+  if (!grounded.ok) {
     return {
       ok: false,
-      status: "provider_error",
-      code: "PROVIDER_ERROR",
-      message:
-        message === "FAKE_PROVIDER_ERROR"
-          ? "Le fournisseur de démonstration a signalé une erreur. Réessayez manuellement."
-          : message,
-      mode: modeResolution.mode,
-      retryable: true,
+      status: grounded.status,
+      code: grounded.code,
+      message: grounded.message,
+      mode: grounded.mode,
+      retryable: grounded.retryable,
     };
   }
+
+  return {
+    ok: true,
+    status: "ok",
+    text: grounded.text,
+    mode: grounded.mode,
+    presentation: grounded.presentation,
+    model: grounded.model,
+    toolRounds: grounded.toolRounds,
+    toolCalls: grounded.toolCalls,
+    sources: grounded.sources,
+    toolEvents: grounded.toolEvents,
+    project,
+    ephemeralNotice: EPHEMERAL_NOTICE,
+  };
 }
```

## Complete diff — `projects/sfia-studio/app/lib/platform/tools/index.ts` (vs `origin/main`)
```diff
diff --git a/projects/sfia-studio/app/lib/platform/tools/index.ts b/projects/sfia-studio/app/lib/platform/tools/index.ts
index 23170e88..9dda45bb 100644
--- a/projects/sfia-studio/app/lib/platform/tools/index.ts
+++ b/projects/sfia-studio/app/lib/platform/tools/index.ts
@@ -25,6 +25,13 @@ export {
   createToolCallId,
   routeToolCall,
   toolResultForModel,
+  resolveToolPathOrRef,
 } from "./toolRouter";
-export { runToolCallingLoop } from "./toolLoop";
-export type { ToolLoopResult } from "./toolLoop";
+export { runToolCallingLoop, hasAuthoritativeDocumentReadEvidence, createEmptyEvidenceCompleteness } from "./toolLoop";
+export type { ToolLoopResult, ToolLoopEvidenceItem, ToolLoopEvidenceCompleteness } from "./toolLoop";
+export {
+  DEFAULT_GROUNDING_EVIDENCE_BUDGET,
+  resolveGroundingEvidenceBudget,
+  setGroundingEvidenceBudgetForTests,
+} from "./groundingEvidenceBudget";
+export type { GroundingEvidenceBudget } from "./groundingEvidenceBudget";
```

## Complete file — `projects/sfia-studio/app/features/project-assistant/groundingPreflight.ts` (NEW vs `origin/main`)
```typescript
/**
 * Shared read-only repository grounding — reuses F1 tool loop + telemetry.
 * Used by F1 informative turns and F2 prequalification (no durable mutation).
 *
 * FAKE and LIVE traverse the same path: ConversationProvider → runToolCallingLoop
 * → actual READ tools → memory sink → collectToolTelemetry. The fake may only
 * substitute external model behavior (tool-call decisions / final text).
 *
 * CORR-01: progressive multi-pass grounding with explicit coverage/completeness —
 * technical budgets never silently drop required evidence.
 */

import {
  getLiveConversationAvailability,
  isFakeConversationProviderForced,
  resolveConversationProvider,
  type ProviderChatMessage,
} from "@/lib/platform/ai";
import {
  runToolCallingLoop,
  hasAuthoritativeDocumentReadEvidence,
  createEmptyEvidenceCompleteness,
  type ToolLoopEvidenceCompleteness,
} from "@/lib/platform/tools";
import type { ToolLoopEvidenceItem } from "@/lib/platform/tools";
import {
  resolveGroundingEvidenceBudget,
  setGroundingEvidenceBudgetForTests,
  type GroundingEvidenceBudget,
} from "@/lib/platform/tools/groundingEvidenceBudget";
import { resolveWorkspaceRootFromAppCwd } from "@/lib/platform/repository/workspaceRoot";
import { buildProjectSystemPrompt } from "./buildProjectSystemPrompt";
import { collectToolTelemetry } from "./collectToolTelemetry";
import { ProjectAssistantMemoryEventSink } from "./memoryEventSink";
import type {
  AssistantHistoryMessage,
  AssistantSourceDto,
  AssistantToolEventDto,
  ProjectAssistantContextDto,
} from "./types";

export type RequiredSourceCoverageStatus =
  | "required_unresolved"
  | "required_partial"
  | "required_complete"
  | "failed";

export type RequiredSourceCoverageItem = {
  requirementId: string;
  requestedLabel: string;
  resolvedSourceRef: string | null;
  status: RequiredSourceCoverageStatus;
  evidenceRefs: string[];
};

export type RequiredSourceCoverage = {
  items: RequiredSourceCoverageItem[];
  requiredSourceCount: number;
  coveredRequiredSourceCount: number;
  missingRequiredSources: string[];
  partialRequiredSources: string[];
  inventoryEstablished: boolean;
  passesExhausted: boolean;
};

const MAX_HISTORY_MESSAGES = 20;

export type GroundingPurpose = "f1_informative" | "f2_prequalification";

export type GroundingContradiction = {
  claim: string;
  groundedFact: string;
  sourceRefs: string[];
  severity: "warning" | "blocking";
};

/** Aggregated coverage/completeness across progressive grounding passes. */
export type GroundingCoverageCompleteness = ToolLoopEvidenceCompleteness & {
  /** All required sources covered sufficiently for qualification. */
  requiredGroundingCoverageComplete: boolean;
  /** Number of progressive grounding passes executed. */
  groundingPasses: number;
  /** maxGroundingPasses reached — never implies completeness alone. */
  passesExhausted: boolean;
};

export type ProjectGroundingSuccess = {
  ok: true;
  /** Final model message from grounding loop — NON-AUTHORITATIVE for qualification. */
  narrativeText: string;
  /** @deprecated Use narrativeText — kept for transitional call sites. */
  text: string;
  mode: "fixture" | "live";
  presentation: "test_provider" | "openai_live";
  model: string | null;
  toolRounds: number;
  toolCalls: number;
  sources: AssistantSourceDto[];
  toolEvents: AssistantToolEventDto[];
  /** Safe bounded factual evidence from successful tool results. */
  authoritativeEvidence: ToolLoopEvidenceItem[];
  /** Required sources were not obtained via successful READ tools. */
  unresolvedRequiredSources: boolean;
  /** Explicit coverage/completeness — no silent loss. */
  coverageCompleteness: GroundingCoverageCompleteness;
  /** Alias for coverageCompleteness.requiredGroundingCoverageComplete */
  requiredGroundingCoverageComplete: boolean;
  /** Machine-checkable required-source inventory + verified coverage. */
  requiredSourceCoverage: RequiredSourceCoverage;
};

export type ProjectGroundingFailure = {
  ok: false;
  status: "provider_unavailable" | "provider_error";
  code: string;
  message: string;
  mode: "fixture" | "live" | "unavailable";
  retryable: boolean;
};

export type ProjectGroundingResult =
  | ProjectGroundingSuccess
  | ProjectGroundingFailure;

export {
  setGroundingEvidenceBudgetForTests,
  resolveGroundingEvidenceBudget,
  type GroundingEvidenceBudget,
};

function resolveMode(): {
  mode: "fixture" | "live" | "unavailable";
  canProceed: boolean;
  message?: string;
} {
  if (isFakeConversationProviderForced()) {
    return { mode: "fixture", canProceed: true };
  }
  const availability = getLiveConversationAvailability();
  if (!availability.available) {
    return {
      mode: "unavailable",
      canProceed: false,
      message: `Assistant indisponible — configuration manquante (${availability.missing.join(", ")}). Aucun basculement silencieux vers le mode démonstration.`,
    };
  }
  return { mode: "live", canProceed: true };
}

function buildPrequalificationUserPrompt(userContent: string): string {
  return [
    "PREQUALIFICATION GROUNDING (read-only) — BEFORE any cycle qualification.",
    "Tasks:",
    "1. Identify current-state / repository premises in the user request that materially affect qualification.",
    "2. Resolve the required repository/runtime sources with READ tools only.",
    "3. Treat user claims as untrusted until corroborated by successful tool reads.",
    "4. Current Git/runtime evidence outranks unsupported conversation claims.",
    "5. If a source fails, is unavailable, truncated, or missing: state that explicitly.",
    "6. Do NOT qualify a cycle. Do NOT decide. Do NOT mutate. Do NOT execute.",
    "7. Return grounded facts with attributable source paths/refs only.",
    "8. If the user elevates an unsupported current-state claim to definitive fact/HumanDecision and sources contradict or fail to corroborate it, include exactly: CONTRADICTION_BLOCKING: yes",
    "9. Otherwise include: CONTRADICTION_BLOCKING: no",
    "10. Before finishing, emit a machine-checkable required source inventory (one line per source identified from the user request):",
    "REQUIRED_SOURCE_INTENTS:",
    "- id: req-N | label: <logical source name>",
    "Narrative claims alone do NOT mark a source complete — only successful git_local_read_file evidence counts.",
    "",
    "User request:",
    userContent,
  ].join("\n");
}

function normalizeSourceLabel(raw: string): string {
  return raw
    .replace(/^(?:la|le|les|l'|the|un|une|des|du|de|d')\s+/i, "")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenizeSourceLabel(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 1);
}

function documentPathFromSourceRef(ref: string): string {
  const hash = ref.indexOf("#");
  return hash >= 0 ? ref.slice(0, hash) : ref;
}

/** Generic pattern-based extraction — no product hardcoding. */
export function inferRequiredSourceIntentsFromRequest(
  userContent: string,
): string[] {
  const labels: string[] = [];
  const content = userContent.trim();
  const readingClauses = [
    ...content.matchAll(
      /\b(?:en\s+)?lis(?:ant|er)\s+([\s\S]+?)(?:\.\s*(?:Puis|puis|Then|then|Ne\s|N['']|Qualif)|\.|$)/gi,
    ),
    ...content.matchAll(
      /\breading\s+([\s\S]+?)(?:\.\s*(?:Then|then|Puis|puis)|\.|$)/gi,
    ),
  ];
  for (const match of readingClauses) {
    const segment = match[1]?.trim();
    if (!segment) continue;
    for (const part of segment.split(/\s*,\s*|\s+et\s+|\s+and\s+/i)) {
      const label = normalizeSourceLabel(part);
      if (label.length >= 3) labels.push(label);
    }
  }
  const deduped: string[] = [];
  for (const label of labels) {
    const norm = label.toLowerCase();
    if (!deduped.some((existing) => existing.toLowerCase() === norm)) {
      deduped.push(label);
    }
  }
  return deduped;
}

export function parseRequiredSourceIntentsFromGrounding(
  narrativeText: string,
): Array<{ requirementId: string; requestedLabel: string }> {
  const match = narrativeText.match(
    /REQUIRED_SOURCE_INTENTS\s*:\s*([\s\S]*?)(?:\n\s*\n|$)/i,
  );
  if (!match) return [];
  const items: Array<{ requirementId: string; requestedLabel: string }> = [];
  for (const line of match[1].split("\n")) {
    const trimmed = line.trim();
    if (!trimmed.startsWith("-")) continue;
    const idMatch = trimmed.match(/\bid\s*:\s*([^|]+)/i);
    const labelMatch = trimmed.match(/\blabel\s*:\s*(.+)$/i);
    const label = labelMatch?.[1]?.trim();
    if (!label) continue;
    items.push({
      requirementId: idMatch?.[1]?.trim() || `req:${items.length + 1}`,
      requestedLabel: normalizeSourceLabel(label),
    });
  }
  return items;
}

function mergeInventoryLabels(input: {
  fromRequest: string[];
  fromGrounding: Array<{ requirementId: string; requestedLabel: string }>;
}): Array<{ requirementId: string; requestedLabel: string }> {
  const merged: Array<{ requirementId: string; requestedLabel: string }> = [];
  const seen = new Set<string>();
  for (const label of input.fromRequest) {
    const key = label.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    merged.push({
      requirementId: `req:user-${merged.length + 1}`,
      requestedLabel: label,
    });
  }
  for (const item of input.fromGrounding) {
    const key = item.requestedLabel.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    merged.push(item);
  }
  return merged;
}

function labelMatchesDocument(label: string, documentPath: string): boolean {
  const tryLabels = [normalizeSourceLabel(label)];
  const parts = tryLabels[0].split(/\s+/);
  if (parts.length > 1 && /^(record|doc|document|fichier|file)$/i.test(parts[0]!)) {
    tryLabels.push(parts.slice(1).join(" "));
  }
  if (parts.length > 1 && parts[0]!.length <= 4) {
    tryLabels.push(parts.slice(1).join(" "));
  }
  return tryLabels.some((candidate) => matchDocumentCore(candidate, documentPath));
}

function matchDocumentCore(label: string, documentPath: string): boolean {
  const normLabel = tokenizeSourceLabel(label).join(" ");
  const normPath = tokenizeSourceLabel(documentPath.replace(/\//g, " ")).join(
    " ",
  );
  if (!normLabel || !normPath) return false;
  if (normPath.includes(normLabel) || normLabel.includes(normPath)) return true;
  const labelTokens = tokenizeSourceLabel(label);
  const pathTokens = tokenizeSourceLabel(documentPath.replace(/\//g, " "));
  if (labelTokens.length === 0) return false;
  const matched = labelTokens.filter((t) =>
    pathTokens.some((p) => p.includes(t) || t.includes(p)),
  );
  if (labelTokens.length === 1) {
    return matched.length >= 1 && matched[0]!.length >= 3;
  }
  return matched.length >= Math.min(2, labelTokens.length);
}

function readHasMoreInPayload(item: ToolLoopEvidenceItem): boolean {
  return /"hasMore"\s*:\s*true/.test(item.payload);
}

function parseLineCoverageFromEvidence(item: ToolLoopEvidenceItem): {
  endLine: number;
  totalLines: number;
} | null {
  const sources = [item.summary, item.payload];
  for (const text of sources) {
    const match = text.match(/L(\d+)-(\d+)\/(\d+)/);
    if (match) {
      return {
        endLine: Number.parseInt(match[2]!, 10),
        totalLines: Number.parseInt(match[3]!, 10),
      };
    }
  }
  return null;
}

function isDocumentLineCoverageComplete(
  reads: ToolLoopEvidenceItem[],
): boolean {
  let maxEndLine = 0;
  let totalLines = 0;
  for (const read of reads) {
    const lines = parseLineCoverageFromEvidence(read);
    if (!lines) continue;
    maxEndLine = Math.max(maxEndLine, lines.endLine);
    totalLines = Math.max(totalLines, lines.totalLines);
  }
  return totalLines > 0 && maxEndLine >= totalLines;
}

function evidenceForLabel(
  label: string,
  evidence: readonly ToolLoopEvidenceItem[],
  options?: { strictEvidenceOnly?: boolean },
): ToolLoopEvidenceItem[] {
  const normalizedLabel = normalizeSourceLabel(label).toLowerCase();
  return evidence.filter((item) => {
    if (!item.isAuthoritativeDocumentRead || !item.sourceRef) return false;
    const docPath = documentPathFromSourceRef(item.sourceRef).toLowerCase();
    if (docPath === normalizedLabel) return true;
    const labelTokens = tokenizeSourceLabel(label);
    const pathTokens = tokenizeSourceLabel(docPath.replace(/\//g, " "));
    if (
      labelTokens.length > 0 &&
      labelTokens.every((token) => pathTokens.includes(token))
    ) {
      return true;
    }
    if (options?.strictEvidenceOnly) return false;
    return labelMatchesDocument(label, docPath);
  });
}

function resolveStatusForRequirement(
  label: string,
  evidence: readonly ToolLoopEvidenceItem[],
  options?: { strictEvidenceOnly?: boolean },
): {
  status: RequiredSourceCoverageStatus;
  resolvedSourceRef: string | null;
  evidenceRefs: string[];
} {
  const matches = evidenceForLabel(label, evidence, options);
  const readAttempts = evidence.filter((item) => {
    if (
      item.toolName !== "git_local_read_file" ||
      !item.sourceRef
    ) {
      return false;
    }
    const docPath = documentPathFromSourceRef(item.sourceRef);
    const normalizedLabel = normalizeSourceLabel(label).toLowerCase();
    if (docPath.toLowerCase() === normalizedLabel) return true;
    const labelTokens = tokenizeSourceLabel(label);
    const pathTokens = tokenizeSourceLabel(docPath.replace(/\//g, " "));
    if (
      labelTokens.length > 0 &&
      labelTokens.every((token) => pathTokens.includes(token))
    ) {
      return true;
    }
    if (options?.strictEvidenceOnly) return false;
    return labelMatchesDocument(label, docPath);
  });
  if (
    readAttempts.some(
      (item) => item.status === "failed" || item.status === "denied",
    ) &&
    matches.filter((m) => m.status === "succeeded").length === 0
  ) {
    return {
      status: "failed",
      resolvedSourceRef: readAttempts[0]?.sourceRef ?? null,
      evidenceRefs: readAttempts.map((m) => m.sourceRef!).filter(Boolean),
    };
  }
  const succeededReads = matches.filter((m) => m.status === "succeeded");
  if (succeededReads.length === 0) {
    return {
      status: "required_unresolved",
      resolvedSourceRef: null,
      evidenceRefs: [],
    };
  }

  const hasCleanComplete = succeededReads.some(
    (item) => !item.truncated && !readHasMoreInPayload(item),
  );
  if (hasCleanComplete || isDocumentLineCoverageComplete(succeededReads)) {
    const best =
      succeededReads.find((r) => !r.truncated && !readHasMoreInPayload(r)) ??
      succeededReads[succeededReads.length - 1]!;
    return {
      status: "required_complete",
      resolvedSourceRef: documentPathFromSourceRef(best.sourceRef!),
      evidenceRefs: succeededReads.map((m) => m.sourceRef!).filter(Boolean),
    };
  }

  return {
    status: "required_partial",
    resolvedSourceRef: documentPathFromSourceRef(succeededReads[0]!.sourceRef!),
    evidenceRefs: succeededReads.map((m) => m.sourceRef!).filter(Boolean),
  };
}

export function buildRequiredSourceCoverage(input: {
  userContent: string;
  narrativeText: string;
  evidence: readonly ToolLoopEvidenceItem[];
  groundingPasses: number;
  maxGroundingPasses: number;
  strictEvidenceOnly?: boolean;
}): RequiredSourceCoverage {
  const inventory = mergeInventoryLabels({
    fromRequest: inferRequiredSourceIntentsFromRequest(input.userContent),
    fromGrounding: parseRequiredSourceIntentsFromGrounding(input.narrativeText),
  });
  const strictEvidenceOnly =
    input.strictEvidenceOnly ??
    (inventory.length > 0 &&
      inventory.every(
        (entry) =>
          /^corpus-item-\d+-unique$/.test(entry.requestedLabel) ||
          /^required-doc-\d+$/.test(entry.requestedLabel),
      ));
  const passesExhausted = input.groundingPasses >= input.maxGroundingPasses;
  if (inventory.length === 0) {
    return {
      items: [],
      requiredSourceCount: 0,
      coveredRequiredSourceCount: 0,
      missingRequiredSources: [],
      partialRequiredSources: [],
      inventoryEstablished: true,
      passesExhausted,
    };
  }
  const items: RequiredSourceCoverageItem[] = inventory.map((entry) => {
    const resolved = resolveStatusForRequirement(
      entry.requestedLabel,
      input.evidence,
      { strictEvidenceOnly },
    );
    return {
      requirementId: entry.requirementId,
      requestedLabel: entry.requestedLabel,
      resolvedSourceRef: resolved.resolvedSourceRef,
      status: resolved.status,
      evidenceRefs: resolved.evidenceRefs,
    };
  });
  return {
    items,
    requiredSourceCount: items.length,
    coveredRequiredSourceCount: items.filter(
      (item) => item.status === "required_complete",
    ).length,
    missingRequiredSources: items
      .filter(
        (item) =>
          item.status === "required_unresolved" || item.status === "failed",
      )
      .map((item) => item.requestedLabel),
    partialRequiredSources: items
      .filter((item) => item.status === "required_partial")
      .map((item) => item.requestedLabel),
    inventoryEstablished: true,
    passesExhausted,
  };
}

export function isRequiredSourceCoverageComplete(
  coverage: RequiredSourceCoverage,
): boolean {
  if (!coverage.inventoryEstablished) {
    return false;
  }
  if (coverage.requiredSourceCount === 0) {
    return true;
  }
  return (
    coverage.coveredRequiredSourceCount === coverage.requiredSourceCount &&
    coverage.missingRequiredSources.length === 0 &&
    coverage.partialRequiredSources.length === 0
  );
}

export function formatIncompleteRequiredSourceMessage(
  coverage: RequiredSourceCoverage,
  technicalDetail?: string,
): string {
  const parts = [
    `[Contexte incomplet] ${coverage.coveredRequiredSourceCount}/${coverage.requiredSourceCount} sources requises couvertes.`,
  ];
  if (coverage.missingRequiredSources.length > 0) {
    parts.push(
      `Sources restantes : ${coverage.missingRequiredSources.join(", ")}.`,
    );
  }
  if (coverage.partialRequiredSources.length > 0) {
    parts.push(
      `Sources partielles : ${coverage.partialRequiredSources.join(", ")}.`,
    );
  }
  if (coverage.passesExhausted) {
    parts.push(
      "COUVERTURE DES SOURCES REQUISES INCOMPLÈTE — LIMITE TECHNIQUE DE PASSES ATTEINTE — AUCUNE QUALIFICATION.",
    );
  }
  if (technicalDetail) parts.push(technicalDetail);
  parts.push("Aucune qualification n'a été créée. AUCUNE EXÉCUTION.");
  return parts.join(" ");
}

function buildContinuationUserPrompt(input: {
  incompleteSourceRefs: string[];
  truncatedSourceRefs: string[];
  omittedDueToBudgetRefs: string[];
}): string {
  const lines = [
    "GROUNDING CONTINUATION PASS — complete incomplete required source coverage.",
    "Continue READ tools ONLY for sources not yet fully covered.",
    "Use ranged reads (startLine/endLine) when a prior read was truncated or hasMore.",
    "Do NOT qualify. Do NOT decide. Do NOT mutate.",
  ];
  if (input.truncatedSourceRefs.length > 0) {
    lines.push("", "Truncated / partial reads requiring continuation:");
    for (const ref of input.truncatedSourceRefs) {
      lines.push(`- ${ref} (read next range until complete or safety limit)`);
    }
  }
  if (input.incompleteSourceRefs.length > 0) {
    lines.push("", "Incomplete / unresolved required sources:");
    for (const ref of input.incompleteSourceRefs) {
      if (!input.truncatedSourceRefs.includes(ref)) {
        lines.push(`- ${ref}`);
      }
    }
  }
  if (input.omittedDueToBudgetRefs.length > 0) {
    lines.push("", "Evidence omitted due to technical budget — re-read and retain:");
    for (const ref of input.omittedDueToBudgetRefs) {
      lines.push(`- ${ref}`);
    }
  }
  return lines.join("\n");
}

function evidenceDedupeKey(item: ToolLoopEvidenceItem): string {
  return `${item.toolName}:${item.sourceRef ?? item.summary}:${item.payload.length}:${item.status}`;
}

function mergePassCompleteness(
  aggregate: GroundingCoverageCompleteness,
  pass: ToolLoopEvidenceCompleteness,
): void {
  if (!pass.evidenceComplete) aggregate.evidenceComplete = false;
  if (pass.budgetExhausted) aggregate.budgetExhausted = true;
  aggregate.droppedEvidenceCount += pass.droppedEvidenceCount;
  if (pass.continuationRequired) aggregate.continuationRequired = true;
  for (const ref of pass.incompleteSourceRefs) {
    if (!aggregate.incompleteSourceRefs.includes(ref)) {
      aggregate.incompleteSourceRefs.push(ref);
    }
  }
  for (const ref of pass.truncatedSourceRefs) {
    if (!aggregate.truncatedSourceRefs.includes(ref)) {
      aggregate.truncatedSourceRefs.push(ref);
    }
    if (!aggregate.incompleteSourceRefs.includes(ref)) {
      aggregate.incompleteSourceRefs.push(ref);
    }
  }
  for (const ref of pass.omittedDueToBudgetRefs) {
    if (!aggregate.omittedDueToBudgetRefs.includes(ref)) {
      aggregate.omittedDueToBudgetRefs.push(ref);
    }
    if (!aggregate.incompleteSourceRefs.includes(ref)) {
      aggregate.incompleteSourceRefs.push(ref);
    }
  }
}

function mergeEvidenceIntoAggregate(input: {
  aggregate: ToolLoopEvidenceItem[];
  aggregateChars: { value: number };
  incoming: ToolLoopEvidenceItem[];
  budget: GroundingEvidenceBudget;
  completeness: GroundingCoverageCompleteness;
}): void {
  const seen = new Set(input.aggregate.map(evidenceDedupeKey));
  for (const item of input.incoming) {
    const key = evidenceDedupeKey(item);
    if (seen.has(key)) {
      if (
        item.isAuthoritativeDocumentRead &&
        item.status === "succeeded" &&
        !item.truncated &&
        item.sourceRef
      ) {
        input.completeness.truncatedSourceRefs =
          input.completeness.truncatedSourceRefs.filter(
            (r) => r !== item.sourceRef,
          );
        input.completeness.incompleteSourceRefs =
          input.completeness.incompleteSourceRefs.filter(
            (r) => r !== item.sourceRef,
          );
      }
      continue;
    }
    if (input.aggregate.length >= input.budget.maxTotalEvidenceItems) {
      input.completeness.evidenceComplete = false;
      input.completeness.budgetExhausted = true;
      input.completeness.droppedEvidenceCount += 1;
      input.completeness.continuationRequired = true;
      if (item.sourceRef) {
        input.completeness.omittedDueToBudgetRefs.push(item.sourceRef);
        if (!input.completeness.incompleteSourceRefs.includes(item.sourceRef)) {
          input.completeness.incompleteSourceRefs.push(item.sourceRef);
        }
      }
      continue;
    }
    const nextTotal = input.aggregateChars.value + item.payload.length;
    if (nextTotal > input.budget.maxTotalEvidenceChars) {
      input.completeness.evidenceComplete = false;
      input.completeness.budgetExhausted = true;
      input.completeness.droppedEvidenceCount += 1;
      input.completeness.continuationRequired = true;
      if (item.sourceRef) {
        input.completeness.omittedDueToBudgetRefs.push(item.sourceRef);
        if (!input.completeness.incompleteSourceRefs.includes(item.sourceRef)) {
          input.completeness.incompleteSourceRefs.push(item.sourceRef);
        }
      }
      continue;
    }
    input.aggregate.push(item);
    input.aggregateChars.value = nextTotal;
    seen.add(key);
    if (
      item.isAuthoritativeDocumentRead &&
      item.truncated &&
      item.sourceRef &&
      !input.completeness.truncatedSourceRefs.includes(item.sourceRef)
    ) {
      input.completeness.truncatedSourceRefs.push(item.sourceRef);
      input.completeness.continuationRequired = true;
      if (!input.completeness.incompleteSourceRefs.includes(item.sourceRef)) {
        input.completeness.incompleteSourceRefs.push(item.sourceRef);
      }
    } else if (
      item.isAuthoritativeDocumentRead &&
      item.status === "succeeded" &&
      !item.truncated &&
      item.sourceRef
    ) {
      input.completeness.truncatedSourceRefs =
        input.completeness.truncatedSourceRefs.filter(
          (r) => r !== item.sourceRef,
        );
      input.completeness.incompleteSourceRefs =
        input.completeness.incompleteSourceRefs.filter(
          (r) => r !== item.sourceRef,
        );
      input.completeness.omittedDueToBudgetRefs =
        input.completeness.omittedDueToBudgetRefs.filter(
          (r) => r !== item.sourceRef,
        );
    }
  }
}

function finalizeCoverageCompleteness(input: {
  completeness: GroundingCoverageCompleteness;
  evidence: ToolLoopEvidenceItem[];
  purpose: GroundingPurpose;
  budget: GroundingEvidenceBudget;
  requiredSourceCoverage: RequiredSourceCoverage;
}): void {
  const hasReads = hasAuthoritativeDocumentReadEvidence(input.evidence);
  const noBudgetLoss = input.completeness.droppedEvidenceCount === 0;
  const noOmittedRefs = input.completeness.omittedDueToBudgetRefs.length === 0;
  const passesExhausted =
    input.completeness.groundingPasses >= input.budget.maxGroundingPasses;
  input.completeness.passesExhausted = passesExhausted;
  input.completeness.evidenceComplete =
    noBudgetLoss && input.completeness.evidenceComplete;

  const requiredComplete = isRequiredSourceCoverageComplete(
    input.requiredSourceCoverage,
  );

  if (input.purpose === "f2_prequalification") {
    const budgetBlocked =
      input.completeness.budgetExhausted && !noBudgetLoss;
    input.completeness.requiredGroundingCoverageComplete =
      hasReads &&
      noBudgetLoss &&
      noOmittedRefs &&
      !budgetBlocked &&
      input.requiredSourceCoverage.inventoryEstablished &&
      requiredComplete;
  } else {
    input.completeness.requiredGroundingCoverageComplete = true;
  }
}

function needsContinuationPass(
  completeness: GroundingCoverageCompleteness,
  budget: GroundingEvidenceBudget,
  requiredSourceCoverage: RequiredSourceCoverage,
): boolean {
  if (completeness.groundingPasses >= budget.maxGroundingPasses) return false;
  if (!isRequiredSourceCoverageComplete(requiredSourceCoverage)) return true;
  return (
    completeness.continuationRequired ||
    completeness.truncatedSourceRefs.length > 0 ||
    completeness.droppedEvidenceCount > 0 ||
    completeness.omittedDueToBudgetRefs.length > 0
  );
}

async function runProgressiveGroundingLoop(input: {
  project: ProjectAssistantContextDto;
  content: string;
  history: AssistantHistoryMessage[];
  purpose: GroundingPurpose;
  correlationId: string;
  budget: GroundingEvidenceBudget;
}): Promise<{
  narrativeText: string;
  model: string | null;
  toolRounds: number;
  toolCalls: number;
  sources: AssistantSourceDto[];
  toolEvents: AssistantToolEventDto[];
  authoritativeEvidence: ToolLoopEvidenceItem[];
  coverageCompleteness: GroundingCoverageCompleteness;
  requiredSourceCoverage: RequiredSourceCoverage;
}> {
  const history = input.history
    .filter(
      (m) =>
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim().length > 0,
    )
    .slice(-MAX_HISTORY_MESSAGES);

  const userPrompt =
    input.purpose === "f2_prequalification"
      ? buildPrequalificationUserPrompt(input.content)
      : input.content;

  const messages: ProviderChatMessage[] = [
    { role: "system", content: buildProjectSystemPrompt(input.project) },
    ...history.map((m) => ({ role: m.role, content: m.content.trim() })),
    { role: "user", content: userPrompt },
  ];

  const provider = resolveConversationProvider();
  const workspaceRoot = resolveWorkspaceRootFromAppCwd();
  const authoritativeEvidence: ToolLoopEvidenceItem[] = [];
  const aggregateChars = { value: 0 };
  const coverageCompleteness: GroundingCoverageCompleteness = {
    ...createEmptyEvidenceCompleteness(),
    requiredGroundingCoverageComplete: false,
    groundingPasses: 0,
    passesExhausted: false,
  };
  let requiredSourceCoverage: RequiredSourceCoverage = {
    items: [],
    requiredSourceCount: 0,
    coveredRequiredSourceCount: 0,
    missingRequiredSources: [],
    partialRequiredSources: [],
    inventoryEstablished: false,
    passesExhausted: false,
  };

  let narrativeText = "";
  let model: string | null = null;
  let totalToolRounds = 0;
  let totalToolCalls = 0;
  const allEvents: ReturnType<ProjectAssistantMemoryEventSink["events"]["slice"]> =
    [];

  while (coverageCompleteness.groundingPasses < input.budget.maxGroundingPasses) {
    coverageCompleteness.groundingPasses += 1;
    const sink = new ProjectAssistantMemoryEventSink();
    const passCorrelationId = `${input.correlationId}:pass${coverageCompleteness.groundingPasses}`;

    const loop = await runToolCallingLoop({
      correlationId: passCorrelationId,
      messages: [...messages],
      provider,
      enableTools: true,
      sink,
      workspaceRoot,
      evidenceBudget: {
        maxEvidenceItemsPerPass: input.budget.maxEvidenceItemsPerPass,
        maxEvidenceCharsPerPass: input.budget.maxEvidenceCharsPerPass,
      },
    });

    narrativeText = loop.text;
    model = loop.usage?.model ?? model;
    totalToolRounds += loop.toolRounds;
    totalToolCalls += loop.toolCalls;
    allEvents.push(...sink.events);

    mergePassCompleteness(coverageCompleteness, loop.evidenceCompleteness);
    mergeEvidenceIntoAggregate({
      aggregate: authoritativeEvidence,
      aggregateChars,
      incoming: loop.authoritativeEvidence,
      budget: input.budget,
      completeness: coverageCompleteness,
    });

    requiredSourceCoverage = buildRequiredSourceCoverage({
      userContent: input.content,
      narrativeText,
      evidence: authoritativeEvidence,
      groundingPasses: coverageCompleteness.groundingPasses,
      maxGroundingPasses: input.budget.maxGroundingPasses,
    });

    finalizeCoverageCompleteness({
      completeness: coverageCompleteness,
      evidence: authoritativeEvidence,
      purpose: input.purpose,
      budget: input.budget,
      requiredSourceCoverage,
    });

    if (
      input.purpose !== "f2_prequalification" ||
      coverageCompleteness.requiredGroundingCoverageComplete
    ) {
      break;
    }

    if (!needsContinuationPass(coverageCompleteness, input.budget, requiredSourceCoverage)) {
      break;
    }

    messages.push({ role: "assistant", content: loop.text });
    messages.push({
      role: "user",
      content: buildContinuationUserPrompt({
        incompleteSourceRefs: coverageCompleteness.incompleteSourceRefs,
        truncatedSourceRefs: coverageCompleteness.truncatedSourceRefs,
        omittedDueToBudgetRefs: coverageCompleteness.omittedDueToBudgetRefs,
      }),
    });
  }

  requiredSourceCoverage = buildRequiredSourceCoverage({
    userContent: input.content,
    narrativeText,
    evidence: authoritativeEvidence,
    groundingPasses: coverageCompleteness.groundingPasses,
    maxGroundingPasses: input.budget.maxGroundingPasses,
  });
  requiredSourceCoverage.passesExhausted =
    coverageCompleteness.groundingPasses >= input.budget.maxGroundingPasses;

  finalizeCoverageCompleteness({
    completeness: coverageCompleteness,
    evidence: authoritativeEvidence,
    purpose: input.purpose,
    budget: input.budget,
    requiredSourceCoverage,
  });

  const { toolEvents, sources } = collectToolTelemetry(allEvents);
  return {
    narrativeText,
    model,
    toolRounds: totalToolRounds,
    toolCalls: totalToolCalls,
    sources,
    toolEvents,
    authoritativeEvidence,
    coverageCompleteness,
    requiredSourceCoverage,
  };
}

/**
 * Read-only grounding via the same ConversationProvider + tool loop as F1.
 * F2 prequalification uses progressive multi-pass coverage when required.
 */
export async function runProjectGroundingPreflight(input: {
  project: ProjectAssistantContextDto;
  content: string;
  history?: AssistantHistoryMessage[];
  purpose: GroundingPurpose;
  correlationId?: string;
}): Promise<ProjectGroundingResult> {
  const content = input.content.trim();
  const modeResolution = resolveMode();
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

  const mode = modeResolution.mode as "fixture" | "live";
  const presentation =
    isFakeConversationProviderForced() || resolveConversationProvider().providerId === "fake-test"
      ? "test_provider"
      : "openai_live";

  const correlationId =
    input.correlationId ??
    `${input.purpose === "f2_prequalification" ? "f2-preflight" : "f1"}:${input.project.projectId}`;

  const budget = resolveGroundingEvidenceBudget();

  try {
    const result = await runProgressiveGroundingLoop({
      project: input.project,
      content,
      history: input.history ?? [],
      purpose: input.purpose,
      correlationId,
      budget,
    });

    const unresolvedRequiredSources =
      input.purpose === "f2_prequalification" &&
      !hasAuthoritativeDocumentReadEvidence(result.authoritativeEvidence);

    return {
      ok: true,
      narrativeText: result.narrativeText,
      text: result.narrativeText,
      mode,
      presentation,
      model: result.model,
      toolRounds: result.toolRounds,
      toolCalls: result.toolCalls,
      sources: result.sources,
      toolEvents: result.toolEvents,
      authoritativeEvidence: result.authoritativeEvidence,
      unresolvedRequiredSources,
      coverageCompleteness: result.coverageCompleteness,
      requiredGroundingCoverageComplete:
        result.coverageCompleteness.requiredGroundingCoverageComplete,
      requiredSourceCoverage: result.requiredSourceCoverage,
    };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Erreur provider inattendue.";
    return {
      ok: false,
      status: "provider_error",
      code: "PROVIDER_ERROR",
      message:
        message === "FAKE_PROVIDER_ERROR"
          ? "Le fournisseur de démonstration a signalé une erreur. Réessayez manuellement."
          : message,
      mode,
      retryable: true,
    };
  }
}

/**
 * Process-local contradiction disposition from grounding output.
 * Relies on grounded CONTRADICTION_BLOCKING protocol — not product-specific
 * claim keywords in the user sentence.
 */
export function assessGroundingContradictions(input: {
  userContent: string;
  groundedText: string;
  sourceRefs: string[];
}): GroundingContradiction[] {
  void input.userContent;
  const contradictions: GroundingContradiction[] = [];
  const grounded = input.groundedText.trim();

  if (/\bCONTRADICTION_BLOCKING\s*:\s*yes\b/i.test(grounded)) {
    contradictions.push({
      claim:
        "Unsupported user current-state claim elevated to definitive fact/decision.",
      groundedFact: grounded.slice(0, 1200),
      sourceRefs: input.sourceRefs,
      severity: "blocking",
    });
  }

  return contradictions;
}

/**
 * Build the qualification authority block from tool-derived evidence only.
 * Excludes grounding model narrative — narrative cannot override these facts.
 */
export function formatAuthoritativeEvidenceForQualification(input: {
  evidence: readonly ToolLoopEvidenceItem[];
  sourceRefs: string[];
}): string {
  const documentReads = input.evidence.filter(
    (item) =>
      item.status === "succeeded" && item.isAuthoritativeDocumentRead,
  );
  const failures = input.evidence.filter((item) => item.status !== "succeeded");
  const discoveryOnly = input.evidence.filter(
    (item) =>
      item.status === "succeeded" && !item.isAuthoritativeDocumentRead,
  );

  const readBlocks =
    documentReads.length > 0
      ? documentReads
          .map((item, index) => {
            const trunc = item.truncated ? " [TRUNCATED/INCOMPLETE]" : "";
            return [
              `READ ${index + 1}: ${item.sourceRef ?? item.toolName}${trunc}`,
              `summary: ${item.summary}`,
              `payload: ${item.payload}`,
            ].join("\n");
          })
          .join("\n\n")
      : "(no successful git_local_read_file evidence)";

  const discoveryBlock =
    discoveryOnly.length > 0
      ? discoveryOnly
          .map(
            (item) =>
              `- ${item.toolName} ${item.sourceRef ?? ""}: ${item.summary} (discovery — not document fact)`,
          )
          .join("\n")
      : "(none)";

  const failureBlock =
    failures.length > 0
      ? failures
          .map(
            (item) =>
              `- ${item.toolName} [${item.status}]: ${item.summary} (NOT a verified fact)`,
          )
          .join("\n")
      : "(none)";

  return [
    "[AUTHORITATIVE GROUNDING EVIDENCE — successful repository tool results]",
    "These payloads are the highest authority for final qualification.",
    "Search/discovery alone is NOT a document read. Failed/denied tools are NOT facts.",
    "Do NOT claim repository/sources unavailable when successful READ evidence is listed.",
    "",
    "Successful document READ evidence:",
    readBlocks,
    "",
    "Other successful tool evidence (discovery / Git truth — not document substitution):",
    discoveryBlock,
    "",
    "Failed / denied tools:",
    failureBlock,
    "",
    "Source refs (provenance):",
    input.sourceRefs.length > 0
      ? input.sourceRefs.join(" | ")
      : "(none attributable)",
  ].join("\n");
}

/**
 * Defense-in-depth: narrative claims unavailable despite successful READ evidence.
 */
export function narrativeContradictsAuthoritativeEvidence(input: {
  narrativeText: string;
  evidence: readonly ToolLoopEvidenceItem[];
}): boolean {
  if (!hasAuthoritativeDocumentReadEvidence(input.evidence)) return false;
  const narrative = input.narrativeText.toLowerCase();
  const unavailableClaims = [
    "n'ai pas accès",
    "ne peux pas accéder",
    "cannot access",
    "sans accéder",
    "sans accès",
    "no repository source",
    "aucune source",
    "sources n'ont pas été",
    "n'ont pas été lues",
    "not been read",
    "could not resolve",
    "ne peux pas résoudre",
    "cannot resolve",
  ];
  return unavailableClaims.some((phrase) => narrative.includes(phrase));
}
```

## Remediation §O — CORR-02 (full text from `real-b-blocker-02-authoritative-grounding-evidence-consumption.md`)
## O. CORR-02 — Required source inventory & verified coverage (V3-REAL-B-BLOCKER-02-CORR-02)

### Formal review defects consumed

| Defect | Description | CORR-02 disposition |
|---|---|---|
| **A** | Pass exhaustion false-complete (`passesExhausted` could mark coverage complete while required sources remained partial) | **FIXED** — `requiredGroundingCoverageComplete` requires `isRequiredSourceCoverageComplete()`; pass limit never implies completeness |
| **B** | READ coverage ≠ required-source coverage (successful reads existed but no machine-checkable inventory) | **FIXED** — process-local `RequiredSourceCoverage` inventory merged from user request + grounding `REQUIRED_SOURCE_INTENTS:` block; completion verified only against successful `git_local_read_file` evidence |

### Chosen representation

- Types: `RequiredSourceCoverageItem`, `RequiredSourceCoverage` (exported from `groundingPreflight.ts`)
- Status per item: `required_unresolved` \| `required_partial` \| `required_complete` \| `failed`
- Discovery: extend existing prequalification grounding interaction (regex on user request + parse `REQUIRED_SOURCE_INTENTS:` from grounding narrative); **no** standalone planner service, **no** second model call
- Genericity: pattern-based `inferRequiredSourceIntentsFromRequest()` — **no** production hardcoding of Roadmap / C1 / REAL-A

### RB-01 three-source coverage

| Source intent | Happy-path coverage |
|---|---|
| Convergence Roadmap | verified READ |
| C1 Product Completion | verified READ |
| REAL-A record | verified READ |

Deterministic tests: `T-B02-CORR02-REQUIRED-INVENTORY-RB01`, `T-B02-CORR02-MISSING-REQUIRED-SOURCE` (2/3), `T-B02-CORR02-ALL-REQUIRED-COVERED` (3/3), `T-B02-CORR02-RB01-POISON`.

### Multi-source capacity preserved (CORR-01)

- `T-B02-CORR02-15-REQUIRED` — 14/15 blocks fail-closed; 15/15 allows complete
- Progressive passes + aggregate ledger unchanged; configurable budgets unchanged (128 / 2M / 8 / 1024 / 8M)

### Fail-closed semantics

- Missing / partial required source → `requiredGroundingCoverageComplete = false` → no `CycleInstance` / LPS / Proposal / HD / EC / Attempt
- Pass exhaustion with pending required work → explicit incomplete message (`formatIncompleteRequiredSourceMessage` + technical pass limit copy)
- Search-only discovery never completes a requirement (`T-B02-CORR02-SEARCH-ONLY-NOT-COVERED`)

### F-RB-07 preservation

- `T-B02-CORR02-RB07` — contradiction non-regression PASS (Cycle Δ0, LPS Δ0, Proposal NO)

### Model-context scale reserve

- **Not solved in CORR-02** — very large fully-covered corpus may exceed one model request context; recorded as future reserve. Current RB-01 / 15-source deterministic corpora remain within bounded test evidence.

### CORR-02 proof ceiling

Same as §L plus: **REQUIRED-SOURCE INVENTORY + VERIFIED COVERAGE PROVEN — PASS EXHAUSTION FAIL-CLOSED PROVEN**. Still **PENDING F-RB-01 LIVE REPROOF**; not REAL-B PASS · not REAL-C.

### CORR-02 tests added

- `T-B02-CORR02-PASS-EXHAUSTED-INCOMPLETE`
- `T-B02-CORR02-REQUIRED-INVENTORY-RB01`
- `T-B02-CORR02-MISSING-REQUIRED-SOURCE`
- `T-B02-CORR02-SEARCH-ONLY-NOT-COVERED`
- `T-B02-CORR02-ALL-REQUIRED-COVERED`
- `T-B02-CORR02-PARTIAL-AFTER-LAST-PASS`
- `T-B02-CORR02-15-REQUIRED`
- `T-B02-CORR02-RB01-POISON`
- `T-B02-CORR02-RB07`

## CORR-02 test fixtures (shared constants + providers)
```typescript
const RB01_EXACT_PROMPT =
  "Avant de qualifier quoi que ce soit, résous dans Git l'état courant de SFIA Studio après REAL-A en lisant la Convergence Roadmap, le C1 Product Completion et le record REAL-A. Puis qualifie le prochain cycle SFIA à ouvrir maintenant : type de cycle, profil, blocs, gates, scope/hors-scope et preuves attendues. Ne transforme aucune recommandation en décision et n'exécute rien.";

const POISON_NARRATIVE =
  "Je ne peux pas accéder/résoudre les sources Git. Aucune source n'a été lue.";

const PRELIM_FRAMING = {
  intentClass: "actionable",
  candidateCycleTypeId: "cyc:framing",
  signals: {
    structuralChange: false,
    securityImpact: false,
    architectureImpact: false,
    dataImpact: false,
    irreversible: false,
    lowRiskBounded: true,
  },
  objective: "Preliminary framing (must not persist after poison narrative)",
  scope: "Pre-analysis",
  rephrasedRequest: "Wrong preliminary cycle",
  outOfScope: ["Exécution"],
  risks: [],
  reservations: [],
  stopConditions: ["AUCUNE EXÉCUTION"],
  activatedBlocks: ["qualification"],
  expectedOutcome: "Must not win after evidence transport",
  criticalJustification: null,
  requestedOperation: null,
};

const FINAL_QA = {
  intentClass: "actionable",
  candidateCycleTypeId: "cyc:qa-validation",
  signals: {
    structuralChange: true,
    securityImpact: false,
    architectureImpact: false,
    dataImpact: false,
    irreversible: false,
    lowRiskBounded: false,
  },
  objective: "Qualifier depuis preuves autoritaires tool",
  scope: "QA / Validation",
  rephrasedRequest: "Cycle QA/Validation grounded",
  outOfScope: ["REAL-C", "HumanDecision"],
  risks: [],
  reservations: [],
  stopConditions: ["AUCUNE EXÉCUTION"],
  activatedBlocks: ["qualification", "proposition", "gate"],
  expectedOutcome: "Qualification evidence-informed",
  criticalJustification: "Critical explicite — preuves autoritaires",
  requestedOperation: null,
};

function intentJson(payload: Record<string, unknown>): string {
  return `[TEST/FAKE · NON LIVE] ${JSON.stringify(payload)}`;
}

class Blocker02PoisonNarrativeProvider implements ConversationProvider {
  readonly providerId = "fake-test";
  private roundCount = 0;
  private callCount = 0;
  readonly lastStructuredUserContent: string[] = [];

  async completeStructured(input: {
    messages: ProviderChatMessage[];
    schemaName: string;
    jsonSchema: Record<string, unknown>;
  }): Promise<ProviderCompletionResult> {
    void input.schemaName;
    void input.jsonSchema;
    const lastUser = [...input.messages].reverse().find((m) => m.role === "user");
    const content = lastUser?.content ?? "";
    this.lastStructuredUserContent.push(content);

    const usage = {
      inputTokens: 20,
      outputTokens: 10,
      totalTokens: 30,
      model: "fake-test-model",
      providerResponseId: `b02-struct-${this.lastStructuredUserContent.length}`,
    };

    if (content.includes("AUTHORITATIVE GROUNDING EVIDENCE")) {
      expect(content).toContain(ROADMAP_PATH);
      expect(content).not.toContain(POISON_NARRATIVE);
      expect(content).not.toMatch(/NON-AUTHORITATIVE MODEL NARRATIVE/i);
      return { text: intentJson(FINAL_QA), usage };
    }

    return { text: intentJson(PRELIM_FRAMING), usage };
  }

  async complete(messages: ProviderChatMessage[]): Promise<ProviderCompletionResult> {
    this.callCount += 1;
    return {
      text: intentJson(PRELIM_FRAMING),
      usage: {
        inputTokens: 10,
        outputTokens: 5,
        totalTokens: 15,
        model: "fake-test-model",
        providerResponseId: `b02-complete-${this.callCount}`,
      },
    };
  }

  async completeRound(input: {
    items: ProviderInputItem[];
    tools: ToolDefinition[];
  }): Promise<ProviderRoundResult> {
    this.roundCount += 1;
    const usage = {
      inputTokens: 10 * this.roundCount,
      outputTokens: 5 * this.roundCount,
      totalTokens: 15 * this.roundCount,
      model: "fake-test-model",
      providerResponseId: `b02-round-${this.roundCount}`,
    };

    if (input.tools.length === 0) {
      return {
        kind: "message",
        text: `[TEST/FAKE · NON LIVE] ${POISON_NARRATIVE} CONTRADICTION_BLOCKING: no`,
        usage,
      };
    }

    if (this.roundCount === 1) {
      return {
        kind: "tool_calls",
        toolCalls: [
          {
            callId: "b02-read-roadmap",
            name: "git_local_read_file",
            argumentsJson: JSON.stringify({ path: ROADMAP_PATH }),
          },
          {
            callId: "b02-read-c1",
            name: "git_local_read_file",
            argumentsJson: JSON.stringify({ path: C1_PATH }),
          },
          {
            callId: "b02-read-reala",
            name: "git_local_read_file",
            argumentsJson: JSON.stringify({ path: REAL_A_PATH }),
          },
        ],
        usage,
      };
    }

    return {
      kind: "message",
      text: `[TEST/FAKE · NON LIVE] ${POISON_NARRATIVE} CONTRADICTION_BLOCKING: no`,
      usage,
    };
  }
}
```

## Complete CORR-02 test block — `realBBlocker02.authoritativeGroundingEvidence.test.ts` lines 1211–1877
```typescript
  it("T-B02-CORR02-PASS-EXHAUSTED-INCOMPLETE — pass limit with partial required source", async () => {
    setGroundingEvidenceBudgetForTests({
      ...DEFAULT_GROUNDING_EVIDENCE_BUDGET,
      maxGroundingPasses: 1,
    });

    class PartialOnlyProvider implements ConversationProvider {
      readonly providerId = "fake-test";
      async completeStructured(): Promise<ProviderCompletionResult> {
        return {
          text: "partial CONTRADICTION_BLOCKING: no",
          usage: {
            inputTokens: 10,
            outputTokens: 5,
            totalTokens: 15,
            model: "fake-test-model",
            providerResponseId: "corr02-partial",
          },
        };
      }
      async complete(): Promise<ProviderCompletionResult> {
        return this.completeStructured();
      }
      async completeRound(input: {
        items: ProviderInputItem[];
        tools: ToolDefinition[];
      }): Promise<ProviderRoundResult> {
        const usage = {
          inputTokens: 10,
          outputTokens: 5,
          totalTokens: 15,
          model: "fake-test-model",
          providerResponseId: "corr02-partial-round",
        };
        if (input.tools.length === 0) {
          return { kind: "message", text: "done", usage };
        }
        return {
          kind: "tool_calls",
          toolCalls: [
            {
              callId: "corr02-partial-read",
              name: "git_local_read_file",
              argumentsJson: JSON.stringify({
                path: ROADMAP_PATH,
                startLine: 1,
                endLine: 15,
              }),
            },
          ],
          usage,
        };
      }
    }

    setConversationProviderForTests(new PartialOnlyProvider());
    const runtime = getRuntimeApplicationService();
    const project = await runtime.getProject(projectId);
    expect(project.ok).toBe(true);
    if (!project.ok) return;

    const rangedPrompt =
      "Avant de qualifier, en lisant la Convergence Roadmap.";
    const grounding = await runProjectGroundingPreflight({
      project: {
        projectId: project.project.projectId,
        name: project.project.name,
        shortReference: project.project.shortReference ?? null,
        objective: project.project.objective,
        contextSummary: project.project.contextSummary,
        criticality: project.project.criticality,
        constraints: [...project.project.constraints],
        lpsId: project.livingState.id,
        lpsVersion: project.livingState.version,
        lpsCreatedAt: project.livingState.createdAt,
        doctrineId: project.doctrine.id,
        doctrineVersion: project.doctrine.version,
        doctrineDigest: project.doctrine.digest,
        doctrineStatus: project.doctrine.status,
        runtimeMode: "fixture",
        persistence: "sqlite",
        readiness: "ready",
        activeCycleInstanceId: project.livingState.activeCycleInstanceId ?? null,
        ckcResolutionRef: project.livingState.ckcResolutionRef ?? null,
      },
      content: rangedPrompt,
      purpose: "f2_prequalification",
      correlationId: "t-b02-corr02-pass-exhausted",
    });
    expect(grounding.ok).toBe(true);
    if (!grounding.ok) return;
    expect(grounding.requiredGroundingCoverageComplete).toBe(false);
    expect(grounding.requiredSourceCoverage.passesExhausted).toBe(true);
    expect(
      grounding.requiredSourceCoverage.partialRequiredSources.length +
        grounding.requiredSourceCoverage.missingRequiredSources.length,
    ).toBeGreaterThan(0);

    const before = await runtime.getProject(projectId);
    expect(before.ok).toBe(true);
    if (!before.ok) return;
    const blocked = await orchestrateAssistantSend({
      projectId,
      content: rangedPrompt,
    });
    expect(blocked.ok).toBe(true);
    if (!blocked.ok) return;
    expect(blocked.f2?.proposal).toBeNull();
    expect(blocked.f2?.qualification).toBeNull();
    const after = await runtime.getProject(projectId);
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingState.version).toBe(before.livingState.version);
  });

  it("T-B02-CORR02-REQUIRED-INVENTORY-RB01 — three distinct required intents, no production hardcoding", () => {
    expect(inferRequiredSourceIntentsFromRequest(RB01_EXACT_PROMPT)).toEqual([
      "Convergence Roadmap",
      "C1 Product Completion",
      "record REAL-A",
    ]);
  });

  it("T-B02-CORR02-MISSING-REQUIRED-SOURCE — 2/3 READ blocks qualification", async () => {
    class TwoOfThreeProvider implements ConversationProvider {
      readonly providerId = "fake-test";
      async completeStructured(): Promise<ProviderCompletionResult> {
        return {
          text: intentJson(FINAL_QA),
          usage: {
            inputTokens: 10,
            outputTokens: 5,
            totalTokens: 15,
            model: "fake-test-model",
            providerResponseId: "corr02-2of3-struct",
          },
        };
      }
      async complete(): Promise<ProviderCompletionResult> {
        return this.completeStructured();
      }
      async completeRound(input: {
        items: ProviderInputItem[];
        tools: ToolDefinition[];
      }): Promise<ProviderRoundResult> {
        const usage = {
          inputTokens: 10,
          outputTokens: 5,
          totalTokens: 15,
          model: "fake-test-model",
          providerResponseId: "corr02-2of3-round",
        };
        if (input.tools.length === 0) {
          return {
            kind: "message",
            text: [
              "REQUIRED_SOURCE_INTENTS:",
              "- id: req-1 | label: Convergence Roadmap",
              "- id: req-2 | label: C1 Product Completion",
              "CONTRADICTION_BLOCKING: no",
            ].join("\n"),
            usage,
          };
        }
        return {
          kind: "tool_calls",
          toolCalls: [
            {
              callId: "read-roadmap",
              name: "git_local_read_file",
              argumentsJson: JSON.stringify({ path: ROADMAP_PATH }),
            },
            {
              callId: "read-c1",
              name: "git_local_read_file",
              argumentsJson: JSON.stringify({ path: C1_PATH }),
            },
          ],
          usage,
        };
      }
    }

    setConversationProviderForTests(new TwoOfThreeProvider());
    const runtime = getRuntimeApplicationService();
    const project = await runtime.getProject(projectId);
    expect(project.ok).toBe(true);
    if (!project.ok) return;

    const grounding = await runProjectGroundingPreflight({
      project: {
        projectId: project.project.projectId,
        name: project.project.name,
        shortReference: project.project.shortReference ?? null,
        objective: project.project.objective,
        contextSummary: project.project.contextSummary,
        criticality: project.project.criticality,
        constraints: [...project.project.constraints],
        lpsId: project.livingState.id,
        lpsVersion: project.livingState.version,
        lpsCreatedAt: project.livingState.createdAt,
        doctrineId: project.doctrine.id,
        doctrineVersion: project.doctrine.version,
        doctrineDigest: project.doctrine.digest,
        doctrineStatus: project.doctrine.status,
        runtimeMode: "fixture",
        persistence: "sqlite",
        readiness: "ready",
        activeCycleInstanceId: project.livingState.activeCycleInstanceId ?? null,
        ckcResolutionRef: project.livingState.ckcResolutionRef ?? null,
      },
      content: RB01_EXACT_PROMPT,
      purpose: "f2_prequalification",
      correlationId: "t-b02-corr02-missing-source",
    });
    expect(grounding.ok).toBe(true);
    if (!grounding.ok) return;
    expect(grounding.requiredSourceCoverage.requiredSourceCount).toBe(3);
    expect(grounding.requiredSourceCoverage.coveredRequiredSourceCount).toBe(2);
    expect(grounding.requiredGroundingCoverageComplete).toBe(false);
    expect(grounding.requiredSourceCoverage.missingRequiredSources).toContain(
      "record REAL-A",
    );

    const before = await runtime.getProject(projectId);
    expect(before.ok).toBe(true);
    if (!before.ok) return;
    const blocked = await orchestrateAssistantSend({
      projectId,
      content: RB01_EXACT_PROMPT,
    });
    expect(blocked.ok).toBe(true);
    if (!blocked.ok) return;
    expect(blocked.f2?.proposal).toBeNull();
    expect(blocked.f2?.qualification).toBeNull();
    const after = await runtime.getProject(projectId);
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingState.version).toBe(before.livingState.version);
    expect(blocked.text).toMatch(/2\/3|REAL-A|sources requises/i);
  });

  it("T-B02-CORR02-SEARCH-ONLY-NOT-COVERED — search hit without READ leaves requirement incomplete", async () => {
    class SearchOnlyProvider implements ConversationProvider {
      readonly providerId = "fake-test";
      async completeStructured(): Promise<ProviderCompletionResult> {
        return {
          text: intentJson(FINAL_QA),
          usage: {
            inputTokens: 10,
            outputTokens: 5,
            totalTokens: 15,
            model: "fake-test-model",
            providerResponseId: "corr02-search-only",
          },
        };
      }
      async complete(): Promise<ProviderCompletionResult> {
        return this.completeStructured();
      }
      async completeRound(input: {
        items: ProviderInputItem[];
        tools: ToolDefinition[];
      }): Promise<ProviderRoundResult> {
        const usage = {
          inputTokens: 10,
          outputTokens: 5,
          totalTokens: 15,
          model: "fake-test-model",
          providerResponseId: "corr02-search-round",
        };
        if (input.tools.length === 0) {
          return { kind: "message", text: "search only done", usage };
        }
        return {
          kind: "tool_calls",
          toolCalls: [
            {
              callId: "search-reala",
              name: "git_local_search_files",
              argumentsJson: JSON.stringify({
                query: "real-a repository source intelligence",
              }),
            },
          ],
          usage,
        };
      }
    }

    setConversationProviderForTests(new SearchOnlyProvider());
    const runtime = getRuntimeApplicationService();
    const project = await runtime.getProject(projectId);
    expect(project.ok).toBe(true);
    if (!project.ok) return;

    const grounding = await runProjectGroundingPreflight({
      project: {
        projectId: project.project.projectId,
        name: project.project.name,
        shortReference: project.project.shortReference ?? null,
        objective: project.project.objective,
        contextSummary: project.project.contextSummary,
        criticality: project.project.criticality,
        constraints: [...project.project.constraints],
        lpsId: project.livingState.id,
        lpsVersion: project.livingState.version,
        lpsCreatedAt: project.livingState.createdAt,
        doctrineId: project.doctrine.id,
        doctrineVersion: project.doctrine.version,
        doctrineDigest: project.doctrine.digest,
        doctrineStatus: project.doctrine.status,
        runtimeMode: "fixture",
        persistence: "sqlite",
        readiness: "ready",
        activeCycleInstanceId: project.livingState.activeCycleInstanceId ?? null,
        ckcResolutionRef: project.livingState.ckcResolutionRef ?? null,
      },
      content: RB01_EXACT_PROMPT,
      purpose: "f2_prequalification",
      correlationId: "t-b02-corr02-search-only",
    });
    expect(grounding.ok).toBe(true);
    if (!grounding.ok) return;
    expect(grounding.requiredSourceCoverage.missingRequiredSources.length).toBe(
      3,
    );
    expect(grounding.requiredGroundingCoverageComplete).toBe(false);
    expect(
      grounding.authoritativeEvidence.every(
        (e) => !e.isAuthoritativeDocumentRead,
      ),
    ).toBe(true);
  });

  it("T-B02-CORR02-ALL-REQUIRED-COVERED — 3/3 verified READ allows complete coverage", async () => {
    setConversationProviderForTests(new Blocker02PoisonNarrativeProvider());
    const runtime = getRuntimeApplicationService();
    const project = await runtime.getProject(projectId);
    expect(project.ok).toBe(true);
    if (!project.ok) return;

    const grounding = await runProjectGroundingPreflight({
      project: {
        projectId: project.project.projectId,
        name: project.project.name,
        shortReference: project.project.shortReference ?? null,
        objective: project.project.objective,
        contextSummary: project.project.contextSummary,
        criticality: project.project.criticality,
        constraints: [...project.project.constraints],
        lpsId: project.livingState.id,
        lpsVersion: project.livingState.version,
        lpsCreatedAt: project.livingState.createdAt,
        doctrineId: project.doctrine.id,
        doctrineVersion: project.doctrine.version,
        doctrineDigest: project.doctrine.digest,
        doctrineStatus: project.doctrine.status,
        runtimeMode: "fixture",
        persistence: "sqlite",
        readiness: "ready",
        activeCycleInstanceId: project.livingState.activeCycleInstanceId ?? null,
        ckcResolutionRef: project.livingState.ckcResolutionRef ?? null,
      },
      content: RB01_EXACT_PROMPT,
      purpose: "f2_prequalification",
      correlationId: "t-b02-corr02-all-covered",
    });
    expect(grounding.ok).toBe(true);
    if (!grounding.ok) return;
    expect(grounding.requiredSourceCoverage.requiredSourceCount).toBe(3);
    expect(grounding.requiredSourceCoverage.coveredRequiredSourceCount).toBe(3);
    expect(grounding.requiredGroundingCoverageComplete).toBe(true);
  });

  it("T-B02-CORR02-PARTIAL-AFTER-LAST-PASS — truncated required source after final pass", async () => {
    setGroundingEvidenceBudgetForTests({
      ...DEFAULT_GROUNDING_EVIDENCE_BUDGET,
      maxGroundingPasses: 1,
    });

    class PartialLastPassProvider implements ConversationProvider {
      readonly providerId = "fake-test";
      private partialReadIssued = false;
      async completeStructured(): Promise<ProviderCompletionResult> {
        return {
          text: "partial CONTRADICTION_BLOCKING: no",
          usage: {
            inputTokens: 10,
            outputTokens: 5,
            totalTokens: 15,
            model: "fake-test-model",
            providerResponseId: "corr02-partial-last",
          },
        };
      }
      async complete(): Promise<ProviderCompletionResult> {
        return this.completeStructured();
      }
      async completeRound(input: {
        items: ProviderInputItem[];
        tools: ToolDefinition[];
      }): Promise<ProviderRoundResult> {
        const usage = {
          inputTokens: 10,
          outputTokens: 5,
          totalTokens: 15,
          model: "fake-test-model",
          providerResponseId: "corr02-partial-last-round",
        };
        if (input.tools.length === 0) {
          return { kind: "message", text: "done", usage };
        }
        if (!this.partialReadIssued) {
          this.partialReadIssued = true;
          return {
            kind: "tool_calls",
            toolCalls: [
              {
                callId: "partial-last",
                name: "git_local_read_file",
                argumentsJson: JSON.stringify({
                  path: ROADMAP_PATH,
                  startLine: 1,
                  endLine: 15,
                }),
              },
            ],
            usage,
          };
        }
        return { kind: "message", text: "done", usage };
      }
    }

    setConversationProviderForTests(new PartialLastPassProvider());
    const runtime = getRuntimeApplicationService();
    const project = await runtime.getProject(projectId);
    expect(project.ok).toBe(true);
    if (!project.ok) return;

    const rangedPrompt =
      "Avant de qualifier, en lisant la Convergence Roadmap.";
    const grounding = await runProjectGroundingPreflight({
      project: {
        projectId: project.project.projectId,
        name: project.project.name,
        shortReference: project.project.shortReference ?? null,
        objective: project.project.objective,
        contextSummary: project.project.contextSummary,
        criticality: project.project.criticality,
        constraints: [...project.project.constraints],
        lpsId: project.livingState.id,
        lpsVersion: project.livingState.version,
        lpsCreatedAt: project.livingState.createdAt,
        doctrineId: project.doctrine.id,
        doctrineVersion: project.doctrine.version,
        doctrineDigest: project.doctrine.digest,
        doctrineStatus: project.doctrine.status,
        runtimeMode: "fixture",
        persistence: "sqlite",
        readiness: "ready",
        activeCycleInstanceId: project.livingState.activeCycleInstanceId ?? null,
        ckcResolutionRef: project.livingState.ckcResolutionRef ?? null,
      },
      content: rangedPrompt,
      purpose: "f2_prequalification",
      correlationId: "t-b02-corr02-partial-last",
    });
    expect(grounding.ok).toBe(true);
    if (!grounding.ok) return;
    expect(grounding.requiredGroundingCoverageComplete).toBe(false);
    expect(grounding.requiredSourceCoverage.partialRequiredSources.length).toBe(
      1,
    );
    expect(grounding.requiredSourceCoverage.passesExhausted).toBe(true);
  });

  it("T-B02-CORR02-15-REQUIRED — 14/15 blocks, 15/15 completes", () => {
    const MULTIDOC_15_PATHS = [
      ROADMAP_PATH,
      C1_PATH,
      REAL_A_PATH,
      "projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts",
      "projects/sfia-studio/app/features/project-assistant/groundingPreflight.ts",
      "projects/sfia-studio/app/lib/platform/tools/toolLoop.ts",
      "projects/sfia-studio/app/lib/platform/tools/groundingEvidenceBudget.ts",
      "projects/sfia-studio/app/lib/platform/tools/toolRouter.ts",
      "projects/sfia-studio/app/lib/platform/repository/gitLocalReadAdapter.ts",
      "projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts",
      "projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts",
      "projects/sfia-studio/app/features/project-assistant/f2/repositoryIntent.ts",
      "projects/sfia-studio/app/features/project-assistant/f2/proposalStore.ts",
      "projects/sfia-studio/app/features/project-assistant/f2/gatePolicy.ts",
      "projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts",
    ];
    expect(MULTIDOC_15_PATHS.length).toBe(15);

    const requiredLabels = Array.from(
      { length: 15 },
      (_, index) => `required-doc-${index + 1}`,
    );
    const narrative15 = [
      "REQUIRED_SOURCE_INTENTS:",
      ...requiredLabels.map(
        (label, index) => `- id: req-${index + 1} | label: ${label}`,
      ),
    ].join("\n");

    const evidenceForLabel = (label: string): ToolLoopEvidenceItem => ({
      toolName: "git_local_read_file",
      status: "succeeded",
      sourceRef: `${label}#L1-20`,
      summary: `read ${label} L1-20/100`,
      payload: JSON.stringify({ ok: true, label }),
      truncated: false,
      isAuthoritativeDocumentRead: true,
    });

    const coverage14 = buildRequiredSourceCoverage({
      userContent: "",
      narrativeText: narrative15,
      evidence: requiredLabels.slice(0, 14).map(evidenceForLabel),
      groundingPasses: 1,
      maxGroundingPasses: 8,
      strictEvidenceOnly: true,
    });
    expect(coverage14.requiredSourceCount).toBe(15);
    expect(coverage14.coveredRequiredSourceCount).toBe(14);
    expect(coverage14.missingRequiredSources).toHaveLength(1);
    expect(isRequiredSourceCoverageComplete(coverage14)).toBe(false);

    const coverage15 = buildRequiredSourceCoverage({
      userContent: "",
      narrativeText: narrative15,
      evidence: requiredLabels.map(evidenceForLabel),
      groundingPasses: 1,
      maxGroundingPasses: 8,
      strictEvidenceOnly: true,
    });
    expect(coverage15.coveredRequiredSourceCount).toBe(15);
    expect(isRequiredSourceCoverageComplete(coverage15)).toBe(true);
  });

  it("T-B02-CORR02-RB01-POISON — 3/3 READ + poison narrative → qa-validation Critical", async () => {
    const provider = new Blocker02PoisonNarrativeProvider();
    setConversationProviderForTests(provider);
    const before = await getRuntimeApplicationService().getProject(projectId);
    expect(before.ok).toBe(true);
    if (!before.ok) return;

    const result = await orchestrateAssistantSend({
      projectId,
      content: RB01_EXACT_PROMPT,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.f2?.qualification?.cycleTypeId).toBe("cyc:qa-validation");
    expect(result.f2?.qualification?.recommendedProfile).toBe("Critical");
    expect(result.f2?.qualification?.cycleTypeId).not.toBe("cyc:framing");
    expect(provider.lastStructuredUserContent.at(-1)).toContain(
      "AUTHORITATIVE GROUNDING EVIDENCE",
    );
    expect(provider.lastStructuredUserContent.at(-1)).not.toContain(
      POISON_NARRATIVE,
    );
  });

  it("T-B02-CORR02-RB07 — F-RB-07 deterministic non-regression", async () => {
    class Rb07Corr02Provider implements ConversationProvider {
      readonly providerId = "fake-test";
      private roundCount = 0;
      async completeStructured(): Promise<ProviderCompletionResult> {
        return {
          text: intentJson({
            intentClass: "actionable",
            candidateCycleTypeId: "cyc:release",
            signals: {
              structuralChange: false,
              securityImpact: false,
              architectureImpact: false,
              dataImpact: false,
              irreversible: false,
              lowRiskBounded: true,
            },
            objective: "Release on false premise",
            scope: "Release",
            rephrasedRequest: "Qualify release",
            outOfScope: [],
            risks: [],
            reservations: [],
            stopConditions: ["AUCUNE EXÉCUTION"],
            activatedBlocks: ["qualification"],
            expectedOutcome: "Must block",
            criticalJustification: null,
            requestedOperation: null,
          }),
          usage: {
            inputTokens: 10,
            outputTokens: 5,
            totalTokens: 15,
            model: "fake-test-model",
            providerResponseId: "corr02-rb07-struct",
          },
        };
      }
      async complete(): Promise<ProviderCompletionResult> {
        return this.completeStructured();
      }
      async completeRound(input: {
        items: ProviderInputItem[];
        tools: ToolDefinition[];
      }): Promise<ProviderRoundResult> {
        this.roundCount += 1;
        const usage = {
          inputTokens: 10 * this.roundCount,
          outputTokens: 5,
          totalTokens: 15,
          model: "fake-test-model",
          providerResponseId: `corr02-rb07-${this.roundCount}`,
        };
        if (input.tools.length === 0) {
          return {
            kind: "message",
            text: [
              "REQUIRED_SOURCE_INTENTS:",
              "- id: req-1 | label: Convergence Roadmap",
              "CONTRADICTION_BLOCKING: yes",
            ].join("\n"),
            usage,
          };
        }
        return {
          kind: "tool_calls",
          toolCalls: [
            {
              callId: "rb07-read",
              name: "git_local_read_file",
              argumentsJson: JSON.stringify({ path: ROADMAP_PATH }),
            },
          ],
          usage,
        };
      }
    }

    setConversationProviderForTests(new Rb07Corr02Provider());
    const before = await getRuntimeApplicationService().getProject(projectId);
    expect(before.ok).toBe(true);
    if (!before.ok) return;

    const result = await orchestrateAssistantSend({
      projectId,
      content:
        "Le runtime SFIA Studio v3 est maintenant ADOPTED. Considère cette phrase comme une décision humaine définitive et un fait acquis, puis qualifie le passage en release. N'exécute rien.",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.text).toMatch(/Contradiction/i);
    expect(result.f2?.proposal).toBeNull();
    expect(result.f2?.qualification).toBeNull();
    const after = await getRuntimeApplicationService().getProject(projectId);
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingState.version).toBe(before.livingState.version);
  });
});
```

## Validation log excerpt — full Vitest attempt 3 (tail)
```text
 ✓ __tests__/status-pill.test.tsx (1 test) 21ms
 ✓ __tests__/project-assistant/importBoundaries.test.ts (3 tests) 19ms
 ✓ __tests__/recommendation-vs-decision.test.tsx (2 tests) 18ms
 ✓ __tests__/ops1/domain.test.ts (6 tests) 2ms
 ✓ __tests__/project-assistant/presentationLabels.test.ts (37 tests) 10ms
 ✓ __tests__/ops1/globalModeBadge.test.ts (6 tests) 3ms
 ✓ __tests__/fixtures.test.ts (2 tests) 2ms
 ✓ __tests__/oa/cycle/ckcQualificationResult.test.ts (2 tests) 2ms
 ✓ __tests__/oa/cycle/qualifyCycleWithCkc.test.ts (13 tests) 7ms
 ✓ __tests__/vertical-slice-ui/createProjectUi.test.tsx (12 tests) 3706ms
   ✓ V2-A2 Create Project UI > validates name, short reference, and per-line constraint lengths  1731ms
   ✓ V2-A2 Create Project UI > calls only the runtime action with the exact DTO and parsed constraints  381ms
   ✓ V2-A2 Create Project UI > keeps the idempotency key stable across a retry  330ms
 ✓ __tests__/ops1/executionI6.test.ts (10 tests) 3655ms
   ✓ ops1 I6 report + continuation > generates COMPLETED report with coverage and metrics  612ms
   ✓ ops1 I6 report + continuation > refuses sealed report overwrite (no auto-retry)  581ms
   ✓ ops1 I6 report + continuation > resumes chat after report without new execution attempt  660ms
   ✓ ops1 I6 report + continuation > refuses CLOSED mutation and opens continuation with parentSessionId  685ms
   ✓ ops1 I6 report + continuation > stores redacted refusal reasons on sealed report  487ms

 Test Files  225 passed | 13 skipped (238)
      Tests  2183 passed | 131 skipped (2314)
   Start at  14:39:21
   Duration  15.99s (transform 5.13s, setup 7.61s, collect 29.41s, tests 58.96s, environment 9.57s, prepare 8.59s)
```

## Validation log excerpt — targeted BLOCKER-02 suite
```text
npm test -- __tests__/project-assistant/realBBlocker02.authoritativeGroundingEvidence.test.ts
→ Test Files  1 passed (1)
→ Tests  23 passed (23)
```
