# SFIA Studio — Review Pack FULL — V3-REAL-B-BLOCKER-02

## Metadata
- **Cycle:** V3-REAL-B-BLOCKER-02
- **Morris GO:** GO V3-REAL-B-BLOCKER-02 EXECUTION — LOCAL DELIVERY ONLY — CLOSE F-RB-01 AUTHORITATIVE GROUNDING EVIDENCE CONSUMPTION — NO OPENAI LIVE — NO COMMIT/PUSH/PR/MERGE — NO REAL-C
- **Timestamps:** 2026-08-28 13:22:00 CEST → 2026-08-28 13:29:09 CEST
- **Branch/HEAD/main:** fix/sfia-studio-real-b-blocker-02 @ 967f4c2b35948492caeba5347bb02c7c420de490
- **Source handoff consumed:** fc3e4325c18d925f0fc9cff11ee15b6088e7e263 YES

## Convergence pre-check
- Build Doctrine VALIDATED · Product Completion CLOSED · REAL-A CONSUMED · REAL-B BLOCKING · F-RB-07 CLOSED BY REAL REPROOF · F-RB-01 blocking at reproof · RB-04 PASS REAL · REAL-C blocked · runtime v3 NON ADOPTED

## Root cause
ToolLoopResult discarded safe tool payloads downstream; F2 consumed grounding model narrative as authority.

## ToolLoopResult contract
**Before:** text, usage, toolRounds, toolCalls, limitReached
**After:** + authoritativeEvidence[] (ToolLoopEvidenceItem from toolResultForModel / actual ToolCallResult)

## Key implementation
- Successful git_local_read_file → isAuthoritativeDocumentRead=true
- Search/discovery ≠ document fact; failed/denied ≠ fact
- GroundingPreflight: narrativeText vs authoritativeEvidence
- F2 analyzeIntent: formatAuthoritativeEvidenceForQualification() only (no narrative authority)

## Deterministic proof highlights
- T-B02-RB01 exact prompt + poison narrative → cyc:qa-validation / Critical, not framing/Light
- T-B02-FAIL-CLOSED, T-B02-RB07 non-regression, T-B02-LOOP-01/02/03

## Validation
| Step | Result |
|---|---|
| Targeted BLOCKER-01/02 + f2.orchestrate | PASS |
| npm run typecheck | EXIT 0 |
| npm run build | PASS |
| npm test (full Vitest) | EXIT 0 (2168 passed; authorized retry after unrelated timeout flake) |

## Historical evidence hashes (unchanged)
- 02-real-b-qualification: 9c01060595dbf6277034f39823ebf25ec7a9044c3b68943408b12b38c4a78393
- 02-real-b-exact-reproof-01: db3e95cd3039b3c5c5eeaac691bb00b24a28829bcd5bdd7b7dd1fbdeb8072382
- blocker-01 remediation: 9c2d4593f0ecee6ff1174287d7b2ce0e863d5de12682bbe56e61b981759d7005

## Git diff (product changes)
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

diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 54e090d4..4a8bc001 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -19,8 +19,20 @@ import type {
   ProjectAssistantSendResult,
 } from "../types";
 import { orchestrateProjectAssistantTurn } from "../orchestrateTurn";
+import {
+  assessGroundingContradictions,
+  formatAuthoritativeEvidenceForQualification,
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
@@ -193,6 +205,10 @@ function f2Success(base: {
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
@@ -207,10 +223,10 @@ function f2Success(base: {
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
@@ -385,14 +401,156 @@ export async function orchestrateAssistantSend(input: {
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
@@ -401,20 +559,18 @@ export async function orchestrateAssistantSend(input: {
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
@@ -430,8 +586,8 @@ export async function orchestrateAssistantSend(input: {
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
@@ -452,18 +608,25 @@ export async function orchestrateAssistantSend(input: {

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

@@ -472,10 +635,10 @@ export async function orchestrateAssistantSend(input: {
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
@@ -492,12 +655,16 @@ export async function orchestrateAssistantSend(input: {
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

@@ -507,16 +674,20 @@ export async function orchestrateAssistantSend(input: {
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

@@ -544,25 +715,25 @@ export async function orchestrateAssistantSend(input: {

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
@@ -583,12 +754,16 @@ export async function orchestrateAssistantSend(input: {
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
diff --git a/projects/sfia-studio/app/lib/platform/tools/index.ts b/projects/sfia-studio/app/lib/platform/tools/index.ts
index 23170e88..923b5aec 100644
--- a/projects/sfia-studio/app/lib/platform/tools/index.ts
+++ b/projects/sfia-studio/app/lib/platform/tools/index.ts
@@ -25,6 +25,7 @@ export {
   createToolCallId,
   routeToolCall,
   toolResultForModel,
+  resolveToolPathOrRef,
 } from "./toolRouter";
-export { runToolCallingLoop } from "./toolLoop";
-export type { ToolLoopResult } from "./toolLoop";
+export { runToolCallingLoop, hasAuthoritativeDocumentReadEvidence } from "./toolLoop";
+export type { ToolLoopResult, ToolLoopEvidenceItem } from "./toolLoop";
diff --git a/projects/sfia-studio/app/lib/platform/tools/toolLoop.ts b/projects/sfia-studio/app/lib/platform/tools/toolLoop.ts
index 7727b97d..89093702 100644
--- a/projects/sfia-studio/app/lib/platform/tools/toolLoop.ts
+++ b/projects/sfia-studio/app/lib/platform/tools/toolLoop.ts
@@ -7,9 +7,11 @@ import { noopEventSink } from "../observability/eventSink";
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
@@ -38,12 +40,73 @@ function mergeUsage(
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
+}
+
+const MAX_EVIDENCE_ITEMS = 16;
+const MAX_EVIDENCE_TOTAL_PAYLOAD_CHARS = 24_000;
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
+function appendEvidence(
+  items: ToolLoopEvidenceItem[],
+  totalChars: { value: number },
+  item: ToolLoopEvidenceItem,
+): void {
+  if (items.length >= MAX_EVIDENCE_ITEMS) return;
+  const nextTotal = totalChars.value + item.payload.length;
+  if (nextTotal > MAX_EVIDENCE_TOTAL_PAYLOAD_CHARS) return;
+  items.push(item);
+  totalChars.value = nextTotal;
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
@@ -119,6 +182,8 @@ export async function runToolCallingLoop(input: {
   let toolRounds = 0;
   let toolCalls = 0;
   let limitReached = false;
+  const authoritativeEvidence: ToolLoopEvidenceItem[] = [];
+  const evidencePayloadChars = { value: 0 };
   const grounding: GroundingLedger = {
     succeeded: [],
     failedOrDenied: [],
@@ -151,6 +216,7 @@ export async function runToolCallingLoop(input: {
         toolRounds,
         toolCalls,
         limitReached,
+        authoritativeEvidence,
       };
     }

@@ -211,6 +277,12 @@ export async function runToolCallingLoop(input: {
         );
       }

+      appendEvidence(
+        authoritativeEvidence,
+        evidencePayloadChars,
+        buildEvidenceItem(routed, args),
+      );
+
       items = [
         ...items,
         {
@@ -246,6 +318,7 @@ export async function runToolCallingLoop(input: {
           toolRounds,
           toolCalls,
           limitReached: true,
+          authoritativeEvidence,
         };
       }
       return {
@@ -254,6 +327,7 @@ export async function runToolCallingLoop(input: {
         toolRounds,
         toolCalls,
         limitReached: true,
+        authoritativeEvidence,
       };
     }
   }
@@ -275,5 +349,6 @@ export async function runToolCallingLoop(input: {
     toolRounds,
     toolCalls,
     limitReached: true,
+    authoritativeEvidence,
   };
 }

```

## FULL REMEDIATION RECORD
# REAL-B Blocker 02 — Authoritative Grounding Evidence Consumption

## A. Metadata

| Field | Value |
|---|---|
| **Cycle** | V3-REAL-B-BLOCKER-02 |
| **Parent** | V3-REAL-B-QUALIFICATION-COGNITIVE-REASONING-01 |
| **Morris GO** | GO V3-REAL-B-BLOCKER-02 EXECUTION — LOCAL DELIVERY ONLY — CLOSE F-RB-01 AUTHORITATIVE GROUNDING EVIDENCE CONSUMPTION |
| **Branch** | `fix/sfia-studio-real-b-blocker-02` (local, unpushed) |
| **Base HEAD** | `967f4c2b35948492caeba5347bb02c7c420de490` |
| **Source handoff consumed** | `fc3e4325c18d925f0fc9cff11ee15b6088e7e263` |
| **Profile / Type** | Critical · EVOL / Delivery |
| **Primary capability** | V3-F05 |

## B. LIVE finding consumed (F-RB-01)

EXACT REPROOF-01 proved:

- Roadmap / C1 / REAL-A **READ succeeded**
- Real tool loop executed with attributable telemetry
- Yet final persisted cycle = **`cyc:framing` / Light**
- Grounding narrative claimed Git/sources unavailable **contradicting tool telemetry**

F-RB-07 closed by real reproof; F-RB-01 remained blocking.

## C. Root cause

`runToolCallingLoop` produced real `ToolCallResult` objects and safe `toolResultForModel()` payloads inside the loop, but `ToolLoopResult` exposed only narrative text + counters. `GroundingPreflight` forwarded narrative + source refs. `orchestrateF2` passed **grounding narrative** as `groundedContext` to `analyzeIntent`. The poison narrative could therefore override successful READ evidence.

## D. Asset classification

| Asset | Disposition |
|---|---|
| `toolLoop.ts` | **ADAPT** — output contract |
| `toolRouter.ts` | **KEEP** |
| `groundingPreflight.ts` | **ADAPT** |
| `orchestrateF2.ts` | **ADAPT** |
| `intentAnalysis.ts` | **ADAPT minimal** |
| Repository resolver / second loop | **NOT created** |

## E. Chosen remediation

1. **`ToolLoopEvidenceItem`** on `ToolLoopResult` — bounded safe payloads from actual `ToolCallResult` via `toolResultForModel()`.
2. **`isAuthoritativeDocumentRead`** only for successful `git_local_read_file` (search ≠ document fact).
3. **`GroundingPreflight`** separates `narrativeText` (non-authoritative) from `authoritativeEvidence`.
4. **`formatAuthoritativeEvidenceForQualification()`** builds F2 authority block without narrative.
5. **`analyzeIntent`** consumes authoritative evidence block only; system rules state narrative cannot override READ payloads.

## F. Security / bounds

- No raw unredacted channel — payloads reuse `toolResultForModel()`.
- Max 16 evidence items; max 24 000 aggregate payload chars.
- Truncation flags preserved; failed/denied never promoted to facts.
- Required grounding fails closed when no successful document READ evidence.

## G. Files changed

- `projects/sfia-studio/app/lib/platform/tools/toolLoop.ts`
- `projects/sfia-studio/app/lib/platform/tools/index.ts`
- `projects/sfia-studio/app/features/project-assistant/groundingPreflight.ts`
- `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts`
- `projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts`
- `projects/sfia-studio/app/__tests__/project-assistant/realBBlocker02.authoritativeGroundingEvidence.test.ts`
- `projects/sfia-studio/app/__tests__/project-assistant/realBBlocker01.sourceGroundedQualification.test.ts` (provider marker update)

## H. Tests

- `T-B02-LOOP-01/02/03` — evidence transport semantics
- `T-B02-RB01-01/02/03` — exact RB-01 prompt + poison narrative → `cyc:qa-validation` / Critical
- `T-B02-FAIL-CLOSED` — no READ → no Cycle/LPS
- `T-B02-RB07` — contradiction non-regression
- `T-B02-NO-GROUND-FRAMING` — no gratuitous grounding
- CORR-01 suite remains green

## I. Full-suite evidence

- Targeted BLOCKER-01/02 + `f2.orchestrate` — PASS
- `npm run typecheck` — EXIT 0
- `npm run build` — PASS
- `npm test` (full Vitest) — EXIT 0 (after authorized retry; unrelated timeout flake isolated PASS)

## J. F-RB-07 non-regression

Deterministic RB-07 contradiction path preserved: `CONTRADICTION_BLOCKING: yes` → no Cycle/LPS/Proposal.

## K. F-RB-02 disposition

**OPEN** — same-turn evidence transport improved; no cross-session memory built; dedicated proof still required.

## L. Proof ceiling

**F-RB-01 REMEDIATED IN CODE — DETERMINISTIC PROVEN — PENDING F-RB-01 REAL REPROOF**

Not claimed: REAL-B PASS · REAL-C · runtime v3 ADOPTED.

## M. Next gate candidate

Morris-authorized **impacted REAL-B LIVE reproof** for F-RB-01 closure — **NOT REAL-C**.


## F-RB dispositions
| ID | Disposition |
|---|---|
| F-RB-01 | REMEDIATED IN CODE — deterministic proven — PENDING REAL REPROOF |
| F-RB-07 | CLOSED BY REAL REPROOF — non-regression PASS |
| F-RB-02 | OPEN NONBLOCKING |

## Governance
- OpenAI LIVE: 0 · Commit/Push/PR/Merge: NONE · REAL-C: NOT EXECUTED · Remote handoff: NOT UPDATED

## FINAL VERDICT
V3-REAL-B-BLOCKER-02 — CORRECTIVE DELIVERY IMPLEMENTED — DETERMINISTIC PROVEN — AUTHORITATIVE TOOL EVIDENCE TRANSPORT/CONSUMPTION PROVEN — MODEL GROUNDING NARRATIVE CANNOT OVERRIDE SUCCESSFUL REPOSITORY EVIDENCE — F-RB-01 REMEDIATED IN CODE — F-RB-07 REAL CLOSURE PRESERVED — FULL VITEST EXIT 0 — PENDING F-RB-01 REAL REPROOF — NO OPENAI LIVE — NO COMMIT/PUSH/PR/MERGE — NO REAL-C — REVIEW HANDOFF PUBLICATION PENDING — MORRIS PUSH GATE REQUIRED
