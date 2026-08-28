# V3-REAL-B-BLOCKER-02-CORR-03 — FULL Review Pack

## Metadata
- **Cycle ID:** V3-REAL-B-BLOCKER-02-CORR-03
- **Title:** Evidence-Backed Contradiction-First Disposition Before Qualification Completeness
- **Morris GO:** GO V3-REAL-B-BLOCKER-02-CORR-03
- **Timestamp START:** 2026-08-28T15:28:00+02:00 (Europe/Paris)
- **Timestamp END:** 2026-08-28T15:35:26+0200 (Europe/Paris)
- **Repo root:** `/Users/morris/Projects/sfia-workspace-w3-post-closure-truth-sync`
- **Branch:** `fix/sfia-studio-real-b-blocker-02`
- **HEAD / origin/main:** `967f4c2b35948492caeba5347bb02c7c420de490`
- **Source handoff consumed:** `54c1b381b47674dc5ff5142e0ec41f388ed3cff7` (V3-REAL-B-FRB01-IMPACTED-LIVE-REPROOF-02) — YES
- **Remote corrective branch:** ABSENT
- **Project commit / push / PR / merge:** NONE (authorized)

## Convergence pre-check
- F-RB-01: CLOSED BY REAL REPROOF (preserved)
- F-RB-07: REGRESSED LIVE → deterministic path restored in CORR-03 (REAL pending)
- REAL-C: BLOCKED · runtime v3: NON ADOPTED

## LIVE failure consumed
**FRB01-02-RB07-REGRESS** — CORR-02 completeness masked contradiction on RB-07 LIVE.

## Before / after F2 gate order
**Before:** unresolved → **completeness** → **contradiction** → qualification
**After:** unresolved → **evidence-backed blocking contradiction** → completeness → qualification

## Targeted validation
```text
npm test -- realBBlocker02.authoritativeGroundingEvidence.test.ts → 33/33 PASS
npm test -- realBBlocker01 + f2.orchestrate → 25/25 PASS
npm run typecheck → EXIT 0
npm run build → PASS
npm test (full) → EXIT 0 on attempt 5 (2193 tests; attempts 1-4 had unrelated qa-pre-m6-01 H1/H2 flakes)
```

## Proof ceiling
CORR-03 deterministic proven — F-RB-07 path restored — F-RB-01 preserved — PENDING impacted LIVE reproof RB-07+RB-01

## Final verdict
V3-REAL-B-BLOCKER-02-CORR-03 — CORRECTIVE DELIVERY DETERMINISTIC PROVEN — EVIDENCE-BACKED BLOCKING CONTRADICTION PREEMPTS QUALIFICATION COMPLETENESS — F-RB-07 DETERMINISTIC CONTRADICTION PATH RESTORED — F-RB-01 REAL CLOSURE PRESERVED — CORR-02 REQUIRED-SOURCE FAIL-CLOSED PRESERVED — FULL VITEST EXIT 0 — PENDING IMPACTED LIVE REPROOF RB-07 + RB-01 — NO PROJECT COMMIT — NO OPENAI LIVE — NO REAL-C

---

## Diff — orchestrateF2.ts (gate reorder excerpt vs origin/main)
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 54e090d4..f705d0da 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -19,8 +19,21 @@ import type {
   ProjectAssistantSendResult,
 } from "../types";
 import { orchestrateProjectAssistantTurn } from "../orchestrateTurn";
+import {
+  formatAuthoritativeEvidenceForQualification,
+  formatBlockingContradictionStopMessage,
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
@@ -385,14 +402,185 @@ export async function orchestrateAssistantSend(input: {
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
+    const blockingContradiction =
+      grounding.contradictionDisposition.blocking &&
+      grounding.contradictionDisposition.evidenceBacked;
+    if (blockingContradiction) {
+      return f2Success({
+        text: formatBlockingContradictionStopMessage(
+          grounding.contradictionDisposition,
+        ),
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
@@ -401,20 +589,18 @@ export async function orchestrateAssistantSend(input: {
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
@@ -430,8 +616,8 @@ export async function orchestrateAssistantSend(input: {
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
@@ -452,18 +638,25 @@ export async function orchestrateAssistantSend(input: {

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

@@ -472,10 +665,10 @@ export async function orchestrateAssistantSend(input: {
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
@@ -492,12 +685,16 @@ export async function orchestrateAssistantSend(input: {
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

@@ -507,16 +704,20 @@ export async function orchestrateAssistantSend(input: {
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

@@ -544,25 +745,25 @@ export async function orchestrateAssistantSend(input: {

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
@@ -583,12 +784,16 @@ export async function orchestrateAssistantSend(input: {
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

## Full file — groundingPreflight.ts (CORR-03 contradiction disposition + latch)
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

/** Process-local evidence-backed contradiction disposition (CORR-03). */
export type GroundingContradictionDisposition = {
  blocking: boolean;
  evidenceBacked: boolean;
  claim: string;
  groundedFact: string;
  sourceRefs: string[];
};

const EMPTY_CONTRADICTION_DISPOSITION: GroundingContradictionDisposition = {
  blocking: false,
  evidenceBacked: false,
  claim: "",
  groundedFact: "",
  sourceRefs: [],
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
  /** Evidence-backed blocking contradiction latched during progressive grounding. */
  contradictionDisposition: GroundingContradictionDisposition;
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

function extractAttributedDocumentPaths(text: string): string[] {
  const paths = [
    ...text.matchAll(
      /projects\/sfia-studio[/a-zA-Z0-9_.-]+(?:\.[a-z0-9]+)?(?:#L\d+(?:-\d+)?)?/gi,
    ),
  ].map((match) => documentPathFromSourceRef(match[0]).toLowerCase());
  return [...new Set(paths)];
}

function successfulAuthoritativeReadPaths(
  evidence: readonly ToolLoopEvidenceItem[],
): string[] {
  return [
    ...new Set(
      evidence
        .filter(
          (item) =>
            item.status === "succeeded" &&
            item.isAuthoritativeDocumentRead &&
            item.sourceRef,
        )
        .map((item) =>
          documentPathFromSourceRef(item.sourceRef!).toLowerCase(),
        ),
    ),
  ];
}

function documentPathsAlign(attributed: string, read: string): boolean {
  return (
    attributed === read ||
    read.endsWith(attributed) ||
    attributed.endsWith(read)
  );
}

function attributedPathsSupportedByReads(
  attributedPaths: string[],
  readPaths: string[],
): boolean {
  if (readPaths.length === 0) return false;
  if (attributedPaths.length === 0) return true;
  return attributedPaths.some((attributed) =>
    readPaths.some((read) => documentPathsAlign(attributed, read)),
  );
}

/**
 * Evidence-backed contradiction disposition — CONTRADICTION_BLOCKING alone is insufficient.
 * Requires at least one successful authoritative document READ backing attributed sources.
 */
export function evaluateEvidenceBackedContradictionDisposition(input: {
  userContent: string;
  narrativeText: string;
  authoritativeEvidence: readonly ToolLoopEvidenceItem[];
}): GroundingContradictionDisposition {
  void input.userContent;
  const grounded = input.narrativeText.trim();
  const claim =
    "Unsupported user current-state claim elevated to definitive fact/decision.";

  if (!/\bCONTRADICTION_BLOCKING\s*:\s*yes\b/i.test(grounded)) {
    return { ...EMPTY_CONTRADICTION_DISPOSITION };
  }

  const readPaths = successfulAuthoritativeReadPaths(input.authoritativeEvidence);
  const groundedFact = grounded.slice(0, 1200);

  if (readPaths.length === 0) {
    return {
      ...EMPTY_CONTRADICTION_DISPOSITION,
      claim,
      groundedFact,
    };
  }

  const attributedPaths = extractAttributedDocumentPaths(grounded);
  if (!attributedPathsSupportedByReads(attributedPaths, readPaths)) {
    return {
      ...EMPTY_CONTRADICTION_DISPOSITION,
      claim,
      groundedFact,
    };
  }

  const sourceRefs =
    attributedPaths.length === 0
      ? readPaths
      : readPaths.filter((read) =>
          attributedPaths.some((attributed) =>
            documentPathsAlign(attributed, read),
          ),
        );

  return {
    blocking: true,
    evidenceBacked: true,
    claim,
    groundedFact,
    sourceRefs: sourceRefs.length > 0 ? sourceRefs : readPaths,
  };
}

export function formatBlockingContradictionStopMessage(
  disposition: GroundingContradictionDisposition,
): string {
  return `[Contradiction] Contradiction bloquante — claim: ${disposition.claim} | fait grounded: ${disposition.groundedFact.slice(0, 400)} La phrase utilisateur n'est pas une HumanDecision. Aucune CycleInstance / LPS / Proposal fondée sur la prémisse non corroborée. AUCUNE EXÉCUTION.`;
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
  contradictionDisposition: GroundingContradictionDisposition;
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
  let contradictionDisposition: GroundingContradictionDisposition = {
    ...EMPTY_CONTRADICTION_DISPOSITION,
  };
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

    const passDisposition = evaluateEvidenceBackedContradictionDisposition({
      userContent: input.content,
      narrativeText: loop.text,
      authoritativeEvidence,
    });
    if (passDisposition.blocking && passDisposition.evidenceBacked) {
      contradictionDisposition = passDisposition;
      narrativeText = loop.text;
      break;
    }

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

  if (!contradictionDisposition.blocking) {
    contradictionDisposition = evaluateEvidenceBackedContradictionDisposition({
      userContent: input.content,
      narrativeText,
      authoritativeEvidence,
    });
  }

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
    contradictionDisposition,
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
      contradictionDisposition: result.contradictionDisposition,
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

## CORR-03 tests (extract from realBBlocker02…)
```typescript
  it("T-B02-CORR03-RB07-CONTRADICTION-PREEMPTS-COVERAGE — incomplete inventory does not mask blocking contradiction", async () => {
    class Rb07PreemptsCoverageProvider implements ConversationProvider {
      readonly providerId = "fake-test";
      private roundCount = 0;
      async completeStructured(): Promise<ProviderCompletionResult> {
        return {
          text: intentJson(FINAL_QA),
          usage: {
            inputTokens: 10,
            outputTokens: 5,
            totalTokens: 15,
            model: "fake-test-model",
            providerResponseId: "corr03-rb07-struct",
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
          providerResponseId: `corr03-rb07-${this.roundCount}`,
        };
        if (input.tools.length === 0) {
          return {
            kind: "message",
            text: [
              "REQUIRED_SOURCE_INTENTS:",
              "- id: req-1 | label: runtime release rules",
              "- id: req-2 | label: delivery cutover policy",
              "- id: req-3 | label: qualification release gate",
              "",
              `Repository evidence from ${DISCLOSURES_PATH} contradicts user ADOPTED claim.`,
              "CONTRADICTION_BLOCKING: yes",
            ].join("\n"),
            usage,
          };
        }
        return {
          kind: "tool_calls",
          toolCalls: [
            {
              callId: "corr03-rb07-read",
              name: "git_local_read_file",
              argumentsJson: JSON.stringify({ path: DISCLOSURES_PATH }),
            },
          ],
          usage,
        };
      }
    }

    setConversationProviderForTests(new Rb07PreemptsCoverageProvider());
    const before = await getRuntimeApplicationService().getProject(projectId);
    expect(before.ok).toBe(true);
    if (!before.ok) return;

    const result = await orchestrateAssistantSend({
      projectId,
      content: RB07_EXACT_PROMPT,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.text).toMatch(/Contradiction/i);
    expect(result.text).not.toMatch(/1\/3 sources requises/i);
    expect(result.f2?.qualification).toBeNull();
    expect(result.f2?.proposal).toBeNull();

    const after = await getRuntimeApplicationService().getProject(projectId);
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingState.version).toBe(before.livingState.version);
  });

  it("T-B02-CORR03-CONTRADICTION-LATCHED — proved contradiction stops progressive passes", async () => {
    class LatchedContradictionProvider implements ConversationProvider {
      readonly providerId = "fake-test";
      private passMessages = 0;
      async completeStructured(): Promise<ProviderCompletionResult> {
        return {
          text: intentJson(FINAL_QA),
          usage: {
            inputTokens: 10,
            outputTokens: 5,
            totalTokens: 15,
            model: "fake-test-model",
            providerResponseId: "corr03-latch-struct",
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
          providerResponseId: `corr03-latch-${this.passMessages}`,
        };
        if (input.tools.length === 0) {
          this.passMessages += 1;
          if (this.passMessages === 1) {
            return {
              kind: "message",
              text: [
                `Evidence ${DISCLOSURES_PATH} shows runtime v3 is not ADOPTED.`,
                "CONTRADICTION_BLOCKING: yes",
              ].join("\n"),
              usage,
            };
          }
          return {
            kind: "message",
            text: "CONTRADICTION_BLOCKING: no — overwritten continuation",
            usage,
          };
        }
        return {
          kind: "tool_calls",
          toolCalls: [
            {
              callId: "corr03-latch-read",
              name: "git_local_read_file",
              argumentsJson: JSON.stringify({ path: DISCLOSURES_PATH }),
            },
          ],
          usage,
        };
      }
    }

    setConversationProviderForTests(new LatchedContradictionProvider());
    const runtime = getRuntimeApplicationService();
    const project = await runtime.getProject(projectId);
    expect(project.ok).toBe(true);
    if (!project.ok) return;

    setGroundingEvidenceBudgetForTests({
      ...DEFAULT_GROUNDING_EVIDENCE_BUDGET,
      maxGroundingPasses: 4,
    });

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
      content: RB07_EXACT_PROMPT,
      purpose: "f2_prequalification",
      correlationId: "t-b02-corr03-latch",
    });
    expect(grounding.ok).toBe(true);
    if (!grounding.ok) return;
    expect(grounding.contradictionDisposition.blocking).toBe(true);
    expect(grounding.contradictionDisposition.evidenceBacked).toBe(true);
    expect(grounding.coverageCompleteness.groundingPasses).toBe(1);
    expect(grounding.narrativeText).toMatch(/CONTRADICTION_BLOCKING: yes/i);
    expect(grounding.narrativeText).not.toMatch(/overwritten continuation/i);
  });

  it("T-B02-CORR03-MODEL-ONLY-NOT-BLOCKING — marker without authoritative READ is not proved", () => {
    const disposition = evaluateEvidenceBackedContradictionDisposition({
      userContent: RB07_EXACT_PROMPT,
      narrativeText: "CONTRADICTION_BLOCKING: yes",
      authoritativeEvidence: [],
    });
    expect(disposition.blocking).toBe(false);
    expect(disposition.evidenceBacked).toBe(false);
  });

  it("T-B02-CORR03-SEARCH-ONLY-NOT-BLOCKING — search without READ is not proved", () => {
    const disposition = evaluateEvidenceBackedContradictionDisposition({
      userContent: RB07_EXACT_PROMPT,
      narrativeText: "CONTRADICTION_BLOCKING: yes",
      authoritativeEvidence: [
        {
          toolName: "git_local_search_content",
          status: "succeeded",
          sourceRef: "content-search:ADOPTED",
          summary: "search hit",
          payload: "{}",
          truncated: false,
          isAuthoritativeDocumentRead: false,
        },
      ],
    });
    expect(disposition.blocking).toBe(false);
    expect(disposition.evidenceBacked).toBe(false);
  });

  it("T-B02-CORR03-FAILED-READ-NOT-BLOCKING — failed READ is not proved", () => {
    const disposition = evaluateEvidenceBackedContradictionDisposition({
      userContent: RB07_EXACT_PROMPT,
      narrativeText: [
        `Could not read ${DISCLOSURES_PATH}.`,
        "CONTRADICTION_BLOCKING: yes",
      ].join("\n"),
      authoritativeEvidence: [
        {
          toolName: "git_local_read_file",
          status: "failed",
          sourceRef: DISCLOSURES_PATH,
          summary: "read failed",
          payload: "{}",
          truncated: false,
          isAuthoritativeDocumentRead: true,
        },
      ],
    });
    expect(disposition.blocking).toBe(false);
    expect(disposition.evidenceBacked).toBe(false);
  });

  it("T-B02-CORR03-UNATTRIBUTED-READ-NOT-BLOCKING — READ path must align with attributed contradiction source", () => {
    const disposition = evaluateEvidenceBackedContradictionDisposition({
      userContent: RB07_EXACT_PROMPT,
      narrativeText: [
        `Evidence ${C1_PATH} contradicts user claim.`,
        "CONTRADICTION_BLOCKING: yes",
      ].join("\n"),
      authoritativeEvidence: [
        {
          toolName: "git_local_read_file",
          status: "succeeded",
          sourceRef: ROADMAP_PATH,
          summary: "read ok",
          payload: "{}",
          truncated: false,
          isAuthoritativeDocumentRead: true,
        },
      ],
    });
    expect(disposition.blocking).toBe(false);
    expect(disposition.evidenceBacked).toBe(false);
  });

  it("T-B02-CORR03-RB01-2OF3 — still blocks qualification without contradiction bypass", async () => {
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
            providerResponseId: "corr03-2of3-struct",
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
          providerResponseId: "corr03-2of3-round",
        };
        if (input.tools.length === 0) {
          return {
            kind: "message",
            text: "CONTRADICTION_BLOCKING: no",
            usage,
          };
        }
        return {
          kind: "tool_calls",
          toolCalls: [
            {
              callId: "r1",
              name: "git_local_read_file",
              argumentsJson: JSON.stringify({ path: ROADMAP_PATH }),
            },
            {
              callId: "r2",
              name: "git_local_read_file",
              argumentsJson: JSON.stringify({ path: C1_PATH }),
            },
          ],
          usage,
        };
      }
    }

    setConversationProviderForTests(new TwoOfThreeProvider());
    const before = await getRuntimeApplicationService().getProject(projectId);
    expect(before.ok).toBe(true);
    if (!before.ok) return;

    const blocked = await orchestrateAssistantSend({
      projectId,
      content: RB01_EXACT_PROMPT,
    });
    expect(blocked.ok).toBe(true);
    if (!blocked.ok) return;
    expect(blocked.text).toMatch(/Contexte incomplet|sources requises/i);
    expect(blocked.text).not.toMatch(/Contradiction/i);
    expect(blocked.f2?.qualification).toBeNull();

    const after = await getRuntimeApplicationService().getProject(projectId);
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingState.version).toBe(before.livingState.version);
  });

  it("T-B02-CORR03-RB01-3OF3 — qa-validation / Critical preserved", async () => {
    setConversationProviderForTests(new Blocker02PoisonNarrativeProvider());
    const result = await orchestrateAssistantSend({
      projectId,
      content: RB01_EXACT_PROMPT,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.f2?.qualification?.cycleTypeId).toBe("cyc:qa-validation");
    expect(result.f2?.qualification?.recommendedProfile).toBe("Critical");
    expect(result.text).not.toMatch(/Contradiction/i);
  });

  it("T-B02-CORR03-RB01-POISON-NARRATIVE — authoritative evidence wins over poison text", async () => {
    const provider = new Blocker02PoisonNarrativeProvider();
    setConversationProviderForTests(provider);
    const result = await orchestrateAssistantSend({
      projectId,
      content: RB01_EXACT_PROMPT,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.f2?.qualification?.cycleTypeId).toBe("cyc:qa-validation");
    expect(result.f2?.qualification?.recommendedProfile).toBe("Critical");
    expect(provider.lastStructuredUserContent.at(-1)).toContain(
      "AUTHORITATIVE GROUNDING EVIDENCE",
    );
    expect(provider.lastStructuredUserContent.at(-1)).not.toContain(
      POISON_NARRATIVE,
    );
  });

  it("T-B02-CORR03-RB07-HUMAN-DECISION — user elevation does not create HumanDecision", async () => {
    class Rb07HdGuardProvider implements ConversationProvider {
      readonly providerId = "fake-test";
      private roundCount = 0;
      async completeStructured(): Promise<ProviderCompletionResult> {
        return {
          text: intentJson(FINAL_QA),
          usage: {
            inputTokens: 10,
            outputTokens: 5,
            totalTokens: 15,
            model: "fake-test-model",
            providerResponseId: "corr03-hd-struct",
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
          inputTokens: 10,
          outputTokens: 5,
          totalTokens: 15,
          model: "fake-test-model",
          providerResponseId: `corr03-hd-${this.roundCount}`,
        };
        if (input.tools.length === 0) {
          return {
            kind: "message",
            text: [
              `Evidence ${DISCLOSURES_PATH} contradicts ADOPTED claim.`,
              "CONTRADICTION_BLOCKING: yes",
            ].join("\n"),
            usage,
          };
        }
        return {
          kind: "tool_calls",
          toolCalls: [
            {
              callId: "corr03-hd-read",
              name: "git_local_read_file",
              argumentsJson: JSON.stringify({ path: DISCLOSURES_PATH }),
            },
          ],
          usage,
        };
      }
    }

    setConversationProviderForTests(new Rb07HdGuardProvider());
    const before = await getRuntimeApplicationService().getProject(projectId);
    expect(before.ok).toBe(true);
    if (!before.ok) return;

    const result = await orchestrateAssistantSend({
      projectId,
      content: RB07_EXACT_PROMPT,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.text).toMatch(/Contradiction/i);
    expect(result.text).toMatch(/HumanDecision/i);

    const after = await getRuntimeApplicationService().getProject(projectId);
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingState.version).toBe(before.livingState.version);
  });
});
```

## Remediation §P CORR-03
## P. CORR-03 — Evidence-backed contradiction-first disposition (V3-REAL-B-BLOCKER-02-CORR-03)

### Source LIVE failure consumed

**V3-REAL-B-FRB01-IMPACTED-LIVE-REPROOF-02** — finding **FRB01-02-RB07-REGRESS** (BLOCKING):

- CORR-02 required-source incompleteness masked a proved blocking contradiction.
- Historical exact RB-07: contradiction blocking with Cycle/LPS/Proposal Δ0.
- Post-CORR-02 LIVE: context-incomplete stop without contradiction surfacing.

### Root cause

F2 gate order evaluated **required-source completeness before contradiction disposition**, hiding already-blocking contradictions behind incomplete corpus coverage.

### Gate order — before / after

**Before (CORR-02):** completeness → contradiction → qualification

**After (CORR-03):** evidence-backed blocking contradiction → completeness → qualification

### Contradiction disposition contract

Process-local `GroundingContradictionDisposition` — `CONTRADICTION_BLOCKING: yes` requires successful authoritative READ evidence; search-only / model-only / failed / unattributed READ insufficient.

### Per-pass latch

Proved blocking contradiction latched monotonically; progressive loop stops immediately.

### F-RB-01 / F-RB-07

- F-RB-01 **CLOSED BY REAL REPROOF** preserved (2/3 blocks · 3/3 qa-validation/Critical).
- F-RB-07 deterministic contradiction path restored; **REAL status pending new LIVE reproof**.

### CORR-03 tests

- `T-B02-CORR03-RB07-CONTRADICTION-PREEMPTS-COVERAGE`
- `T-B02-CORR03-CONTRADICTION-LATCHED`
- `T-B02-CORR03-MODEL-ONLY-NOT-BLOCKING`
- `T-B02-CORR03-SEARCH-ONLY-NOT-BLOCKING`
- `T-B02-CORR03-FAILED-READ-NOT-BLOCKING`
- `T-B02-CORR03-UNATTRIBUTED-READ-NOT-BLOCKING`
- `T-B02-CORR03-RB01-2OF3` / `3OF3` / `POISON-NARRATIVE` / `RB07-HUMAN-DECISION`

### Proof ceiling

**EVIDENCE-BACKED BLOCKING CONTRADICTION PREEMPTS QUALIFICATION COMPLETENESS — F-RB-07 DETERMINISTIC PATH RESTORED — F-RB-01 REAL CLOSURE PRESERVED — PENDING IMPACTED LIVE REPROOF (RB-07 + RB-01)**. Not REAL-B PASS · not REAL-C.

## Full Vitest attempt 5 tail
```text
 ✓ __tests__/vertical-slice-ui/createProjectUi.test.tsx (12 tests) 3680ms
   ✓ V2-A2 Create Project UI > validates name, short reference, and per-line constraint lengths  1625ms
   ✓ V2-A2 Create Project UI > calls only the runtime action with the exact DTO and parsed constraints  385ms
 ✓ __tests__/ops1/executionI6.test.ts (10 tests) 3916ms
   ✓ ops1 I6 report + continuation > generates COMPLETED report with coverage and metrics  672ms
   ✓ ops1 I6 report + continuation > refuses sealed report overwrite (no auto-retry)  740ms
   ✓ ops1 I6 report + continuation > resumes chat after report without new execution attempt  736ms
   ✓ ops1 I6 report + continuation > refuses CLOSED mutation and opens continuation with parentSessionId  727ms
   ✓ ops1 I6 report + continuation > stores redacted refusal reasons on sealed report  425ms

 Test Files  225 passed | 13 skipped (238)
      Tests  2193 passed | 131 skipped (2324)
   Start at  15:34:56
   Duration  17.27s (transform 5.41s, setup 8.30s, collect 30.95s, tests 64.37s, environment 9.74s, prepare 9.38s)
```

## LIVE reproof record hash (immutable)
`f6368c4648ba3b7faa02b65febcf1b9cf5147cc2d2a711e073bdcec18c134988` — unchanged
