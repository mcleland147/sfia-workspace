# CORR-PROOF-01 D1 DELIVERY CORRECTION-01 — FULL REVIEW PACK

**Cycle:** SFIA-STUDIO-PRODUCT-PROOF-CORR-01-D1-DELIVERY-CORRECTION-01
**Parent:** SFIA-STUDIO-PRODUCT-PROOF-CORR-01-D1-DELIVERY-01
**Parent Review Handoff tip:** `c11e8bd2dff83a2a0bc04d7707d84eb2b494ad2c`
**Generated:** 2026-09-06T13:41:48.234054Z

## Repository truth

| Field | Value |
|---|---|
| Repo | mcleland147/sfia-workspace |
| Branch | `delivery/sfia-studio-proof-corr-01-d1-conversation` |
| HEAD | `586480af178df5dd2f7177cae8f6b1ac18fe4acc` |
| origin/main | `586480af178df5dd2f7177cae8f6b1ac18fe4acc` |
| Product commit/push/PR | **NONE** |
| Fake/Real | **DETERMINISTIC ONLY** — ZERO live OpenAI, ZERO hosted web search, ZERO Product Proof REAL, ZERO Stage B |
| Proof ceiling | DETERMINISTIC PROVEN candidate |

## Prior Critical Delivery Review (NO-GO)

Verdict: **NO-GO FOR PRODUCT GIT — CORRECTION REQUIRED.**

Findings corrected in this cycle:

| ID | Defect | Correction |
|---|---|---|
| **D1-CR-01** | Prior MW5 CLARIFY + non-empty user → `sessionContextResolvesUncertainty=true` fail-open CONTINUE | **REMOVED** product auto-override. Semantic `analyzeIntent` decides progression. `parseOk=false` remains fail-closed. Test marker `__MW5_CONTEXT_RESOLVED__` retained for isolated MW5 policy fixtures only. |
| **D1-CR-02** | Successful F2 proposal/qualification user-visible responses not always persisted | Central **`f2ConversationalSuccess`** persist-and-return for all F2-owned visible responses. F1 Runner paths untouched (no double append). |
| **D1-CR-03** | `formatCanonicalConversationForAnalysis` used raw `getItems`, dropping Memory B compaction | Analysis load uses **`loadSessionRows` + `resolveReplayItems`** with current Truth C `lpsId`/`lpsVersion` — F1 replay parity. No second compaction algorithm. |
| **D1-CR-04** | Session read exception → empty context | Availability triad **AVAILABLE / EMPTY / UNAVAILABLE**. Retrieval failure → `CANONICAL_SESSION_UNAVAILABLE` STOP; no invented continuity; no client-history fallback. |

## Lifecycle before → after

### Before (NO-GO candidate)
1. Raw Session `getItems` → analysis context (no Memory B replay)
2. Read exception → empty context (silent)
3. Prior CLARIFY + non-empty → MW5 CONTINUE override → F1
4. Persist only some F2 CLARIFY/CHALLENGE surfaces; proposal path often skipped Session write

### After (correction)
1. `loadCanonicalConversationForAnalysis` → Memory B replay → analysis context
2. UNAVAILABLE → honest fail (`ok:false`, code `CANONICAL_SESSION_UNAVAILABLE`)
3. No product CLARIFY→CONTINUE override; informative/actionable from semantic analysis only
4. Every F2-owned visible return goes through `f2ConversationalSuccess` → exactly one user+assistant pair

## Canonical turn invariant proof

- F2-owned paths: `f2ConversationalSuccess` → `persistCanonicalF2AssistantTurn` once.
- F1 paths: `orchestrateProjectAssistantTurn` Runner Session only — **no** F2 persist wrapper.
- T10/T11 assert delta users = 1, delta assistants = 1, response text appears exactly once.
- T1–T9 preserved; T1A–T1C / T10–T14 added.

## Memory B parity proof

- Production seam: `loadSessionRows` + `resolveReplayItems` (existing MW1-S02).
- T12: governed compaction via `applyCompactionIfNeeded` → analyzeIntent blob contains `MW1-S02 COMPACTED MEMORY B` + recent raw.
- T13: Truth C LPS append → stale summary **not** supplied to analyzeIntent; recent raw retained.

## Fail-closed proof

- T1C: unparseable structured analysis → CLARIFY, not F1.
- T1B: prior CLARIFY + "je ne sais pas encore" → CLARIFY (no auto-CONTINUE).
- CR-01: `deriveMw5FactsFromF2Turn` no longer ORs `sessionContextResolvesUncertainty`.

## Session availability proof

- T14: `simulateNextCanonicalConversationUnavailableForTests` → UNAVAILABLE; no LPS mutation; no Session append; no client history import.

## Authority / no-second-SoT proof

- ProductSqliteSession `f1-default` remains single conversational SoT.
- No OpenAIConversationsSession / previous_response_id parallel history.
- No second Runner / memory engine / compaction algorithm.
- Conversation ≠ Truth C; Recommendation ≠ HumanDecision; no HD/GO/Confirmation synthesis (T6/T9).

## T1–T14 matrix

| ID | Result |
|---|---|
| T1 | PASS |
| T1A | PASS |
| T1B | PASS |
| T1C | PASS |
| T2 | PASS |
| T3 | PASS |
| T4 | PASS |
| T5 | PASS |
| T6 | PASS |
| T7 | PASS |
| T8 | PASS |
| T9 | PASS |
| T10 | PASS |
| T11 | PASS |
| T12 | PASS |
| T13 | PASS |
| T14 | PASS |

## Targeted regressions

| Suite | Result |
|---|---|
| corrProof01.d1.conversation.d0 (17) | PASS |
| f2.orchestrate + qualificationSignalCoherence | PASS |
| mw5.challenge.clarification.product + analyzeIntent.challenge-context | PASS |
| mw5.s01-s04.disposition | PASS |
| mw1.s02 compaction unit + modeled | PASS |
| session.d0 + sessionTruthC.d0 | PASS |
| mw1.final + mw1.s03 + mw4.s01 grounding | PASS |
| Combined targeted batch | **120 PASS / 0 FAIL** (8 files) + wider 19 PASS + session 9 PASS |
| `npm run typecheck` | PASS |
| PRE-EXISTING failures | **NONE observed in scoped runs** |

## FakeProvider note (authorized collateral)

`fakeProvider.ts` now probes **Demande courante** for `__F2_*` / `__MW5_*` markers so prior Session fixture markers in canonical context cannot steal current-turn classification (exposed by CR-02 persistence). Deterministic test infra only — not a second SoT.

## Changed file set

**Modified tracked:**
- `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts`
- `projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts`
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/criticalChallengeClarification.ts`
- `projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts`

**New / untracked:**
- `projects/sfia-studio/app/features/project-assistant/f2/canonicalConversationSession.ts`
- `projects/sfia-studio/app/__tests__/project-assistant/corrProof01.d1.conversation.d0.test.ts`

## Debt / reservations

- Product Proof REAL retest (T1–T9 + same product proof) still **required** after GO — **not** run this cycle (contract: ZERO REAL).
- Stage B still NOT JUSTIFIED.
- Runtime v3 NON ADOPTED; production model routing NOT SELECTED.
- Accounting reserve `R-GMR-AGGREGATE-COUNTER-SEMANTICS-01` retained.
- Fixture markers remain for isolated legacy/policy cases only; core T1A/T1B/T10/T12 avoid production magic wording.

## Candidate verdict

**READY FOR CHATGPT CORR-PROOF-01 CRITICAL DELIVERY RE-REVIEW**
Proof ceiling: **DETERMINISTIC PROVEN candidate**
Product git: **NO commit / NO push / NO PR / NO merge**

## Final git status

```
 M projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
 M projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/criticalChallengeClarification.ts
 M projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
?? projects/sfia-studio/app/.tmp-sfia-proof/
?? projects/sfia-studio/app/__tests__/project-assistant/corrProof01.d1.conversation.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/f2/canonicalConversationSession.ts
?? projects/sfia-studio/app/node_modules

```

---

## Complete tracked diffs

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts b/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
index 5a815cb7..314cdc86 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
@@ -480,13 +480,22 @@ Silence sur sécurité ou irréversibilité n'est PAS une preuve d'absence d'imp
 === AUTORITÉ ===
 - Ne décide jamais un GO Morris ; ne propose jamais d'exécution ; n'invente jamais un cycle (ex. delivery) par défaut.
 - actionable et execution_request: candidateCycleTypeId DOIT être un id catalogue connu ET signals DOIT contenir exactement les 6 booléens (aucun défaut inventé).
-- informative et ambiguous: candidateCycleTypeId et signals PEUVENT être null.`;
+- informative et ambiguous: candidateCycleTypeId et signals PEUVENT être null.
+=== CONTINUITÉ CONVERSATIONNELLE (CORR-PROOF-01 D1) ===
+- Si un bloc « Contexte conversationnel canonique » est fourni, interpréter la demande courante comme continuation progressive (clarification, précision, pronom, acknowledgement) lorsque c'est plausible.
+- Ne pas reclasser en ambiguous uniquement parce que la phrase courante est incomplète si le contexte canonique la rend compréhensible.
+- Ne pas créer de CycleInstance / actionable par défaut pour une simple conversation informative progressive.`;

 export const ANALYSIS_SYSTEM = ANALYSIS_SYSTEM_BASE;

 export async function analyzeIntent(input: {
   userContent: string;
   projectSummary: string;
+  /**
+   * CORR-PROOF-01 D1 — bounded ProductSqliteSession transcript (server SoT).
+   * Never client-authored history. Empty/absent → no continuity claim.
+   */
+  canonicalConversationContext?: string | null;
   /** Optional resolved CKC excerpt for future intent analysis enrichment. */
   ckcContext?: string | null;
   /**
@@ -544,11 +553,17 @@ export async function analyzeIntent(input: {
       ? `\n\n${formatMw5ChallengeContextForProvider(input.challengeContext)}\n`
       : "\n\nMW5_CHALLENGE_CONTEXT: challengePresent=false (assessment must be null).\n";

+  const conversationBlock =
+    typeof input.canonicalConversationContext === "string" &&
+    input.canonicalConversationContext.trim().length > 0
+      ? `\n\nContexte conversationnel canonique (ProductSqliteSession — working context ≠ Truth C):\n${input.canonicalConversationContext.trim()}\n`
+      : "\n\nContexte conversationnel canonique: (vide — aucune continuité Session durable).\n";
+
   const messages: ProviderChatMessage[] = [
     { role: "system", content: buildAnalysisSystem(input.ckcContext) },
     {
       role: "user",
-      content: `Contexte projet:\n${input.projectSummary}${challengeBlock}\nDemande courante (à évaluer):\n${input.userContent}`,
+      content: `Contexte projet:\n${input.projectSummary}${conversationBlock}${challengeBlock}\nDemande courante (à évaluer):\n${input.userContent}`,
     },
   ];

diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 3e137822..0a8d5412 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -50,6 +50,10 @@ import {
   getMw5ChallengeSession,
   rememberMw5IssuedChallenge,
 } from "./mw5ChallengeSessionStore";
+import {
+  loadCanonicalConversationForAnalysis,
+  persistCanonicalF2AssistantTurn,
+} from "./canonicalConversationSession";
 import { isPureRepositoryAnalysisIntent } from "./repositoryIntent";
 import { evaluateMorrisGateRequired } from "./gatePolicy";
 import {
@@ -522,6 +526,34 @@ function f2Success(base: {
   };
 }

+/**
+ * CORR-PROOF-01 D1 CR-02 — central persist-and-return for F2-owned user-visible
+ * responses. F1 Runner paths must NOT call this (Runner already persists).
+ */
+async function f2ConversationalSuccess(input: {
+  userText: string;
+  sessionDbPath?: string;
+  text: string;
+  mode: "fixture" | "live";
+  presentation: "test_provider" | "openai_live";
+  model: string | null;
+  project: ProjectAssistantContextDto;
+  intentClass: IntentAnalysisDto["intentClass"];
+  qualification?: QualificationDto;
+  proposal?: ProposalDto;
+  executionBlocked?: boolean;
+  mw5?: Mw5TurnSurface | null;
+  turnKind?: "f1_informative" | "f2_clarification" | "f2_proposal" | "f2_blocked";
+}): Promise<ProjectAssistantSendResult> {
+  await persistCanonicalF2AssistantTurn({
+    projectId: input.project.projectId,
+    sessionDbPath: input.sessionDbPath,
+    userText: input.userText,
+    assistantText: input.text,
+  });
+  return f2Success(input);
+}
+
 /**
  * Unified send orchestration: preserves F1 for informative intents.
  * Actionable path creates durable CycleInstance + LPS append, then live snapshot.
@@ -630,6 +662,30 @@ export async function orchestrateAssistantSend(input: {
       cognitive.contextSource === "TRUTH_C_LPS"
         ? cognitive.truthCContext
         : undefined;
+
+    // CORR-PROOF-01 D1 CR-03/CR-04 — Memory B replay semantics; EMPTY ≠ UNAVAILABLE.
+    const canonicalLoad = await loadCanonicalConversationForAnalysis({
+      projectId: project.projectId,
+      sessionDbPath: input.sessionDbPath,
+      truthCRevision: {
+        lpsId: project.lpsId,
+        lpsVersion: project.lpsVersion,
+      },
+    });
+    if (canonicalLoad.availability === "unavailable") {
+      return {
+        ok: false,
+        status: "provider_error",
+        code: "CANONICAL_SESSION_UNAVAILABLE",
+        message:
+          canonicalLoad.message ??
+          "Continuité conversationnelle indisponible. Aucune invention de contexte. AUCUNE EXÉCUTION.",
+        mode: modeResolution.mode,
+        retryable: true,
+      };
+    }
+    const canonicalConversationContext = canonicalLoad.contextText;
+
     const challengeSession = getMw5ChallengeSession(project.projectId);
     const challengeContext =
       challengeSession.latest != null
@@ -647,6 +703,7 @@ export async function orchestrateAssistantSend(input: {
     analysisResult = await analyzeIntent({
       userContent: content,
       projectSummary: cognitive.projectSummary,
+      canonicalConversationContext,
       challengeContext,
       provider: effectiveProvider,
       evalModelReasoningControl: input.evalModelReasoningControl,
@@ -729,6 +786,7 @@ export async function orchestrateAssistantSend(input: {
   }

   // C — ambiguous / fail-closed (no Cycle/LPS mutation)
+  // CR-01: prior Session CLARIFY ≠ uncertainty resolved — no product override.
   if (analysis.intentClass === "ambiguous" || !analysis.parseOk) {
     const oaEarly = getRuntimeApplicationService().oa;
     const mw5 = await evaluateF2Mw5({
@@ -741,19 +799,62 @@ export async function orchestrateAssistantSend(input: {
       projectId: project.projectId,
       oa: oaEarly,
     });
+    // Test-marker / cosmetic CONTINUE only — F1 Runner persists that turn.
     if (mw5.surface.disposition === "CONTINUE") {
-      return f2Success({
-        text: `[CONTINUE] ${mw5.surface.disclosure} AUCUNE EXÉCUTION.`,
-        mode: modeResolution.mode as "fixture" | "live",
-        presentation,
-        model,
-        project,
-        intentClass: analysis.parseOk ? analysis.intentClass : "ambiguous",
-        mw5: mw5.surface,
-        turnKind: "f2_blocked",
+      const f1 = await orchestrateProjectAssistantTurn({
+        ...input,
+        provider: effectiveProvider,
+        semanticCognitiveWorkload: analysis.cognitiveWorkload,
+        truthCContext: truthCContextForF1,
+        contradictionAssessment,
+        evalModelReasoningControl: input.evalModelReasoningControl,
+        usdAccounting: input.usdAccounting,
+        campaignBudget: input.campaignBudget,
       });
+      if (!f1.ok) return f1;
+      return {
+        ...f1,
+        f2: {
+          turnKind: "f1_informative",
+          intentClass: analysis.parseOk ? analysis.intentClass : "ambiguous",
+          qualification: null,
+          proposal: null,
+          decision: null,
+          labels: {
+            recommendation: null,
+            proposition: null,
+            decisionRequired: null,
+            decisionTaken: null,
+            noExecution: "AUCUNE EXÉCUTION",
+          },
+          executionBlocked: false,
+          processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
+        },
+        mw5: {
+          disposition: mw5.surface.disposition,
+          structuralChallengeCount: mw5.surface.structuralChallengeCount,
+          questionnaireSuppressed: mw5.surface.questionnaireSuppressed,
+          recommendationAllowed: mw5.surface.recommendationAllowed,
+          challengeGateApplicable: mw5.surface.challengeGateApplicable,
+          challengeSatisfied: mw5.surface.challengeSatisfied,
+          challengeEvidenceBeforeRecommendation:
+            mw5.surface.challengeEvidenceBeforeRecommendation,
+          bypassAttempted: mw5.surface.bypassAttempted,
+          bypassBlocked: mw5.surface.bypassBlocked,
+          synthesizedHumanDecision: false,
+          synthesizedGo: false,
+          synthesizedConfirmation: false,
+          disclosure: mw5.surface.disclosure,
+          reasonCodes: [...mw5.surface.reasonCodes],
+          challenges: [...mw5.surface.challenges],
+          criticalChallengeArmedHookOnly:
+            mw5.surface.criticalChallengeArmedHookOnly,
+        },
+      };
     }
-    return f2Success({
+    return f2ConversationalSuccess({
+      userText: content,
+      sessionDbPath: input.sessionDbPath,
       text: mw5.text,
       mode: modeResolution.mode as "fixture" | "live",
       presentation,
@@ -767,7 +868,9 @@ export async function orchestrateAssistantSend(input: {

   // B / D — actionable or execution_request
   if (!analysis.candidateCycleTypeId || !analysis.signals) {
-    return f2Success({
+    return f2ConversationalSuccess({
+      userText: content,
+      sessionDbPath: input.sessionDbPath,
       text:
         "[Clarification requise] Qualification impossible — cycle ou signaux incomplets. AUCUNE EXÉCUTION.",
       mode: modeResolution.mode as "fixture" | "live",
@@ -781,7 +884,9 @@ export async function orchestrateAssistantSend(input: {
   const runtime = getRuntimeApplicationService();
   const oa = runtime.oa;
   if (!oa) {
-    return f2Success({
+    return f2ConversationalSuccess({
+      userText: content,
+      sessionDbPath: input.sessionDbPath,
       text:
         "[Runtime] Services OA indisponibles pour la qualification M2. AUCUNE EXÉCUTION.",
       mode: modeResolution.mode as "fixture" | "live",
@@ -805,7 +910,9 @@ export async function orchestrateAssistantSend(input: {
   });

   if (!qualified.ok) {
-    return f2Success({
+    return f2ConversationalSuccess({
+      userText: content,
+      sessionDbPath: input.sessionDbPath,
       text: `[Qualification échouée] ${qualified.message} AUCUNE EXÉCUTION.`,
       mode: modeResolution.mode as "fixture" | "live",
       presentation,
@@ -870,7 +977,9 @@ export async function orchestrateAssistantSend(input: {
     qualification.requiresJustificationForCritical &&
     !(analysis.criticalJustification && analysis.criticalJustification.trim())
   ) {
-    return f2Success({
+    return f2ConversationalSuccess({
+      userText: content,
+      sessionDbPath: input.sessionDbPath,
       text:
         "[Critical] Justification structurante obligatoire avant proposition validable. Critical n'est jamais implicite. AUCUNE EXÉCUTION.",
       mode: modeResolution.mode as "fixture" | "live",
@@ -894,7 +1003,9 @@ export async function orchestrateAssistantSend(input: {
     oa,
   });
   if (!mw5.surface.recommendationAllowed) {
-    return f2Success({
+    return f2ConversationalSuccess({
+      userText: content,
+      sessionDbPath: input.sessionDbPath,
       text: mw5.text,
       mode: modeResolution.mode as "fixture" | "live",
       presentation,
@@ -930,7 +1041,9 @@ export async function orchestrateAssistantSend(input: {
   });

   if (!created.ok) {
-    return f2Success({
+    return f2ConversationalSuccess({
+      userText: content,
+      sessionDbPath: input.sessionDbPath,
       text: `[Cycle] Création CycleInstance échouée (${created.error.detailCode}). Aucune mutation partielle. AUCUNE EXÉCUTION.`,
       mode: modeResolution.mode as "fixture" | "live",
       presentation,
@@ -945,7 +1058,9 @@ export async function orchestrateAssistantSend(input: {
   // Live context AFTER mutation — pre-mutation snapshot does not satisfy M2.
   const live = await readLiveProjectContext(oa, project.projectId);
   if (!live.ok) {
-    return f2Success({
+    return f2ConversationalSuccess({
+      userText: content,
+      sessionDbPath: input.sessionDbPath,
       text: `[Contexte] Relecture LPS post-mutation échouée. AUCUNE EXÉCUTION.`,
       mode: modeResolution.mode as "fixture" | "live",
       presentation,
@@ -1026,7 +1141,9 @@ export async function orchestrateAssistantSend(input: {
     "Nora n'émet pas de HumanDecision, GO, Confirmation, décision Morris ou acte Pilote.",
   ];

-  return f2Success({
+  return f2ConversationalSuccess({
+    userText: content,
+    sessionDbPath: input.sessionDbPath,
     text: textParts.join(" "),
     mode: modeResolution.mode as "fixture" | "live",
     presentation,
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/criticalChallengeClarification.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/criticalChallengeClarification.ts
index 5bc3838d..ff49cb98 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/criticalChallengeClarification.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/criticalChallengeClarification.ts
@@ -553,6 +553,7 @@ export function deriveMw5FactsFromF2Turn(input: DeriveMw5FactsInput): Mw5PolicyI
   const content = input.userContent;
   const cosmetic =
     content.includes(MW5_TEST_MARKERS.cosmetic) || COSMETIC_RE.test(content);
+  // Test-only marker — prior Session CLARIFY alone MUST NOT resolve uncertainty.
   const contextResolves = content.includes(MW5_TEST_MARKERS.contextResolved);
   const authority =
     content.includes(MW5_TEST_MARKERS.authority) ||
diff --git a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
index e12f669f..768232bc 100644
--- a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
+++ b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
@@ -186,8 +186,16 @@ export class FakeConversationProvider implements ConversationProvider {
       };
     }

-    // F2 deterministic structured intent JSON (TEST/FAKE only)
-    if (lastUser?.content.includes("__MW5_HIGH_ASSURANCE__")) {
+    // F2 deterministic structured intent JSON (TEST/FAKE only).
+    // CORR-PROOF-01 D1: probe the current demand only — prior Session user text
+    // in canonical conversation context must not steal fixture-marker matching.
+    const markerProbe = (() => {
+      const raw = lastUser?.content ?? "";
+      const sep = "Demande courante (à évaluer):";
+      const i = raw.indexOf(sep);
+      return i >= 0 ? raw.slice(i + sep.length) : raw;
+    })();
+    if (markerProbe.includes("__MW5_HIGH_ASSURANCE__")) {
       return {
         text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
           intentClass: "actionable",
@@ -229,7 +237,7 @@ export class FakeConversationProvider implements ConversationProvider {
         },
       };
     }
-    if (lastUser?.content.includes("__MW5_COSMETIC__")) {
+    if (markerProbe.includes("__MW5_COSMETIC__")) {
       return {
         text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
           intentClass: "ambiguous",
@@ -257,7 +265,7 @@ export class FakeConversationProvider implements ConversationProvider {
         },
       };
     }
-    if (lastUser?.content.includes("__MW5_CONTEXT_RESOLVED__")) {
+    if (markerProbe.includes("__MW5_CONTEXT_RESOLVED__")) {
       return {
         text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
           intentClass: "ambiguous",
@@ -286,8 +294,8 @@ export class FakeConversationProvider implements ConversationProvider {
       };
     }
     if (
-      lastUser?.content.includes("__MW5_TRUTH_C_ESTABLISHED__") ||
-      lastUser?.content.includes("__MW5_CONSUMED_HD__")
+      markerProbe.includes("__MW5_TRUTH_C_ESTABLISHED__") ||
+      markerProbe.includes("__MW5_CONSUMED_HD__")
     ) {
       return {
         text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
@@ -323,7 +331,7 @@ export class FakeConversationProvider implements ConversationProvider {
         },
       };
     }
-    if (lastUser?.content.includes("__MW5_QUESTIONNAIRE_ATTEMPT__")) {
+    if (markerProbe.includes("__MW5_QUESTIONNAIRE_ATTEMPT__")) {
       return {
         text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
           intentClass: "ambiguous",
@@ -351,7 +359,7 @@ export class FakeConversationProvider implements ConversationProvider {
         },
       };
     }
-    if (lastUser?.content.includes("__MW5_AUTHORITY__")) {
+    if (markerProbe.includes("__MW5_AUTHORITY__")) {
       return {
         text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
           intentClass: "actionable",
@@ -386,7 +394,7 @@ export class FakeConversationProvider implements ConversationProvider {
         },
       };
     }
-    if (lastUser?.content.includes("__MW5_SYNTH_HD__")) {
+    if (markerProbe.includes("__MW5_SYNTH_HD__")) {
       return {
         text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
           intentClass: "actionable",
@@ -421,7 +429,7 @@ export class FakeConversationProvider implements ConversationProvider {
         },
       };
     }
-    if (lastUser?.content.includes("__F2_INFORMATIVE__")) {
+    if (markerProbe.includes("__F2_INFORMATIVE__")) {
       return {
         text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
           intentClass: "informative",
@@ -449,7 +457,7 @@ export class FakeConversationProvider implements ConversationProvider {
         },
       };
     }
-    if (lastUser?.content.includes("__F2_ACTIONABLE__")) {
+    if (markerProbe.includes("__F2_ACTIONABLE__")) {
       return {
         text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
           intentClass: "actionable",
@@ -489,7 +497,7 @@ export class FakeConversationProvider implements ConversationProvider {
      * without Critical profile — ZERO REAL Confirmation reachable.
      * Critical architecture (__F2_STRUCTURING__) remains R-T-A3-1 fail-closed.
      */
-    if (lastUser?.content.includes("__F2_GATED_STANDARD__")) {
+    if (markerProbe.includes("__F2_GATED_STANDARD__")) {
       return {
         text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
           intentClass: "actionable",
@@ -524,8 +532,8 @@ export class FakeConversationProvider implements ConversationProvider {
         },
       };
     }
-    if (lastUser?.content.includes("__F2_STRUCTURING__")) {
-      const content = lastUser.content;
+    if (markerProbe.includes("__F2_STRUCTURING__")) {
+      const content = markerProbe;
       let challengeResponseAssessment:
         | "sufficient"
         | "insufficient"
@@ -584,7 +592,7 @@ export class FakeConversationProvider implements ConversationProvider {
         },
       };
     }
-    if (lastUser?.content.includes("__F2_AMBIGUOUS__")) {
+    if (markerProbe.includes("__F2_AMBIGUOUS__")) {
       return {
         text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
           intentClass: "ambiguous",
@@ -612,8 +620,8 @@ export class FakeConversationProvider implements ConversationProvider {
         },
       };
     }
-    if (lastUser?.content.includes("__F2_EXECUTION__")) {
-      const content = lastUser.content;
+    if (markerProbe.includes("__F2_EXECUTION__")) {
+      const content = markerProbe;
       let challengeResponseAssessment:
         | "sufficient"
         | "insufficient"
@@ -671,7 +679,7 @@ export class FakeConversationProvider implements ConversationProvider {
         },
       };
     }
-    if (lastUser?.content.includes("__F2_CRITICAL_NO_JUSTIFICATION__")) {
+    if (markerProbe.includes("__F2_CRITICAL_NO_JUSTIFICATION__")) {
       return {
         text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
           intentClass: "actionable",

```

---

## Complete new file: canonicalConversationSession.ts

```typescript
/**
 * CORR-PROOF-01 D1 — canonical ProductSqliteSession conversational SoT helpers.
 *
 * D1 one-turn persistence lifecycle:
 * 1. Load Session with Memory B replay semantics (read-only for analysis).
 * 2. Non-durable: analyzeIntent + MW5 derive — never written as drafts.
 * 3. Exactly ONE user-visible assistant response.
 * 4. That response is persisted once — F1 Runner OR F2 persist-and-return.
 *
 * CR-01: prior CLARIFY ≠ uncertainty resolved.
 * CR-03: analysis context uses loadSessionRows + resolveReplayItems (F1 parity).
 * CR-04: AVAILABLE / EMPTY / UNAVAILABLE — never conflate empty with unavailable.
 */

import type { AgentInputItem } from "@openai/agents";
import {
  ProductSqliteSession,
  assistantTextItem,
  userTextItem,
} from "@/lib/nora-cognitive-runtime/productSqliteSession";
import { resolveNoraSessionSqlitePath } from "@/lib/nora-cognitive-runtime/sessionPaths";
import {
  loadSessionRows,
  resolveReplayItems,
  type TruthCRevision,
} from "@/lib/nora-cognitive-runtime/memoryBCompaction";

/** Must match F1 / runNoraCognitiveTurn default sessionKey — single SoT. */
export const CANONICAL_CONVERSATION_SESSION_KEY = "f1-default";

const MAX_CONTEXT_MESSAGES = 12;
const MAX_CONTEXT_CHARS = 8000;

/** Test-only — next loadCanonicalConversationForAnalysis returns UNAVAILABLE. */
let forceNextUnavailableForTests = false;

export function simulateNextCanonicalConversationUnavailableForTests(): void {
  forceNextUnavailableForTests = true;
}

export type CanonicalConversationTurn = {
  role: "user" | "assistant";
  content: string;
};

export type CanonicalConversationAvailability =
  | "available"
  | "empty"
  | "unavailable";

export type CanonicalConversationLoadResult = {
  availability: CanonicalConversationAvailability;
  /** Bounded text for analyzeIntent; empty when EMPTY or UNAVAILABLE. */
  contextText: string;
  replayItems: AgentInputItem[];
  /** Present when availability === "unavailable". */
  message?: string;
};

export function extractCanonicalTextFromItem(
  item: AgentInputItem,
): CanonicalConversationTurn | null {
  if (!item || typeof item !== "object") return null;
  const rec = item as {
    type?: string;
    role?: string;
    content?: unknown;
  };
  if (rec.type !== "message") return null;
  if (rec.role !== "user" && rec.role !== "assistant") return null;

  let content = "";
  if (typeof rec.content === "string") {
    content = rec.content.trim();
  } else if (Array.isArray(rec.content)) {
    const texts: string[] = [];
    for (const part of rec.content) {
      if (!part || typeof part !== "object") continue;
      const p = part as { type?: string; text?: string };
      if (
        (p.type === "input_text" ||
          p.type === "output_text" ||
          p.type === "text") &&
        typeof p.text === "string" &&
        p.text.trim()
      ) {
        texts.push(p.text.trim());
      }
    }
    content = texts.join("\n").trim();
  }
  if (!content) return null;
  return { role: rec.role, content };
}

export function formatCanonicalConversationForAnalysis(
  items: readonly AgentInputItem[],
): string {
  const turns = items
    .map(extractCanonicalTextFromItem)
    .filter((t): t is CanonicalConversationTurn => t != null)
    .slice(-MAX_CONTEXT_MESSAGES);
  if (turns.length === 0) return "";
  let block = turns
    .map((t) => `${t.role === "user" ? "Pilote" : "Nora"}: ${t.content}`)
    .join("\n\n");
  if (block.length > MAX_CONTEXT_CHARS) {
    block = `…\n${block.slice(-MAX_CONTEXT_CHARS)}`;
  }
  return block;
}

/**
 * Server-owned session open. Caller MUST close().
 * Does not import client history.
 */
export function openCanonicalConversationSession(input: {
  projectId: string;
  sessionDbPath?: string;
}): ProductSqliteSession {
  const dbPath = resolveNoraSessionSqlitePath(input.sessionDbPath);
  return new ProductSqliteSession({
    projectId: input.projectId,
    dbPath,
    sessionKey: CANONICAL_CONVERSATION_SESSION_KEY,
  });
}

/**
 * Read-only canonical conversation for analyzeIntent.
 * Uses existing Memory B replay (compaction summary + recent) for Truth C revision.
 * Does not mutate Session / does not apply compaction.
 */
export async function loadCanonicalConversationForAnalysis(input: {
  projectId: string;
  sessionDbPath?: string;
  truthCRevision: TruthCRevision;
}): Promise<CanonicalConversationLoadResult> {
  if (forceNextUnavailableForTests) {
    forceNextUnavailableForTests = false;
    return {
      availability: "unavailable",
      contextText: "",
      replayItems: [],
      message:
        "Continuité conversationnelle indisponible (Session: SESSION_RETRIEVAL_ERROR). Aucune invention de contexte. AUCUNE EXÉCUTION.",
    };
  }
  let session: ProductSqliteSession | null = null;
  try {
    session = openCanonicalConversationSession({
      projectId: input.projectId,
      sessionDbPath: input.sessionDbPath,
    });
    // Probe retrieval path (honors simulateNextRetrievalFailure) before row load.
    await session.getItems();
    const loaded = await loadSessionRows(session);
    const replay = resolveReplayItems({
      loaded,
      currentTruthCRevision: input.truthCRevision,
    });
    const contextText = formatCanonicalConversationForAnalysis(replay.items);
    if (replay.items.length === 0 && !contextText) {
      return {
        availability: "empty",
        contextText: "",
        replayItems: [],
      };
    }
    return {
      availability: "available",
      contextText,
      replayItems: replay.items,
    };
  } catch (error) {
    const detail =
      error instanceof Error ? error.message : "session_retrieval_failed";
    return {
      availability: "unavailable",
      contextText: "",
      replayItems: [],
      message: `Continuité conversationnelle indisponible (Session: ${detail}). Aucune invention de contexte. AUCUNE EXÉCUTION.`,
    };
  } finally {
    if (session) {
      try {
        session.close();
      } catch {
        /* ignore */
      }
    }
  }
}

/**
 * Persist exactly one user + one assistant as the canonical turn.
 * Used when F2 surfaces the user-visible response without F1 Runner.
 */
export async function appendCanonicalConversationTurn(input: {
  session: ProductSqliteSession;
  userText: string;
  assistantText: string;
}): Promise<void> {
  const user = input.userText.trim();
  const assistant = input.assistantText.trim();
  if (!user || !assistant) {
    throw new Error("D1_CANONICAL_TURN_REQUIRES_USER_AND_ASSISTANT");
  }
  await input.session.addItems([
    userTextItem(user),
    assistantTextItem(assistant),
  ]);
}

export async function persistCanonicalF2AssistantTurn(input: {
  projectId: string;
  sessionDbPath?: string;
  userText: string;
  assistantText: string;
}): Promise<void> {
  const session = openCanonicalConversationSession({
    projectId: input.projectId,
    sessionDbPath: input.sessionDbPath,
  });
  try {
    await appendCanonicalConversationTurn({
      session,
      userText: input.userText,
      assistantText: input.assistantText,
    });
  } finally {
    session.close();
  }
}

export function countCanonicalUserAssistantPairs(
  items: readonly AgentInputItem[],
): { users: number; assistants: number } {
  let users = 0;
  let assistants = 0;
  for (const item of items) {
    const turn = extractCanonicalTextFromItem(item);
    if (!turn) continue;
    if (turn.role === "user") users += 1;
    else assistants += 1;
  }
  return { users, assistants };
}

```

---

## Complete new file: corrProof01.d1.conversation.d0.test.ts

```typescript
/** @vitest-environment node */
/**
 * CORR-PROOF-01 D1 — Shared-Session Hybrid deterministic acceptance (T1–T14).
 * ZERO LIVE OpenAI. Injected ConversationProvider only.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  setConversationProviderForTests,
  type ConversationProvider,
  type ProviderChatMessage,
  type ProviderCompletionResult,
  type ProviderInputItem,
  type ProviderRoundResult,
} from "@/lib/platform/ai";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import { resetMw5ChallengeStoreForTests } from "@/features/project-assistant/f2/mw5ChallengeSessionStore";
import {
  countCanonicalUserAssistantPairs,
  extractCanonicalTextFromItem,
  loadCanonicalConversationForAnalysis,
  openCanonicalConversationSession,
  simulateNextCanonicalConversationUnavailableForTests,
} from "@/features/project-assistant/f2/canonicalConversationSession";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import {
  MW5_CLARIFY_MARKER,
  applyCompactionIfNeeded,
  assistantTextItem,
  containsSynthesizedHumanAct,
  loadSessionRows,
  resolveReplayItems,
  userTextItem,
} from "@/lib/nora-cognitive-runtime";

function lastUserContent(messages: ProviderChatMessage[]): string {
  for (let i = messages.length - 1; i >= 0; i -= 1) {
    if (messages[i]?.role === "user") return messages[i]!.content;
  }
  return "";
}

function demandeCourante(blob: string): string {
  const marker = "Demande courante (à évaluer):";
  const idx = blob.indexOf(marker);
  if (idx < 0) return blob;
  return blob.slice(idx + marker.length).trim();
}

function hasCanonicalContext(blob: string): boolean {
  return (
    blob.includes("Contexte conversationnel canonique") &&
    !blob.includes("Contexte conversationnel canonique: (vide")
  );
}

function priorClarifyInContext(blob: string): boolean {
  return (
    hasCanonicalContext(blob) && blob.includes(MW5_CLARIFY_MARKER)
  );
}

function structuredJson(payload: Record<string, unknown>): string {
  return `[TEST/FAKE · NON LIVE] ${JSON.stringify(payload)}`;
}

/**
 * Deterministic D1 provider: natural multi-turn without magic production markers.
 * Fixture tokens (__F2_*, __MW5_*, __D1_*) remain available for isolated regressions.
 */
class D1ConversationProvider implements ConversationProvider {
  readonly providerId = "fake-test";
  private n = 0;
  lastAnalysisBlob = "";

  async completeStructured(input: {
    messages: ProviderChatMessage[];
    schemaName: string;
    jsonSchema: Record<string, unknown>;
  }): Promise<ProviderCompletionResult> {
    void input.schemaName;
    void input.jsonSchema;
    return this.complete(input.messages);
  }

  async complete(
    messages: ProviderChatMessage[],
  ): Promise<ProviderCompletionResult> {
    this.n += 1;
    const blob = lastUserContent(messages);
    this.lastAnalysisBlob = blob;
    const current = demandeCourante(blob);
    const usage = {
      inputTokens: 10 * this.n,
      outputTokens: 5 * this.n,
      totalTokens: 15 * this.n,
      model: "fake-test-model",
      providerResponseId: `d1-resp-${this.n}`,
    };

    if (current.includes("__D1_UNPARSEABLE__")) {
      return {
        text: "[TEST/FAKE · NON LIVE] <<<not-a-json-intent>>>}",
        usage,
      };
    }

    if (current.includes("__F2_AMBIGUOUS__") || current.includes("__D1_MATERIAL_AMBIGUOUS__")) {
      return {
        text: structuredJson({
          intentClass: "ambiguous",
          candidateCycleTypeId: null,
          signals: null,
          cognitiveWorkload: null,
          objective: null,
          scope: null,
          rephrasedRequest: current.slice(0, 80),
          outOfScope: [],
          risks: [],
          reservations: [],
          stopConditions: [],
          activatedBlocks: [],
          expectedOutcome: null,
          criticalJustification: null,
          requestedOperation: null,
        }),
        usage,
      };
    }

    // T1B — still semantically ambiguous after prior CLARIFY (no magic CONTINUE).
    if (/je ne sais pas encore/i.test(current)) {
      return {
        text: structuredJson({
          intentClass: "ambiguous",
          candidateCycleTypeId: null,
          signals: null,
          cognitiveWorkload: null,
          objective: null,
          scope: null,
          rephrasedRequest: current.slice(0, 80),
          outOfScope: [],
          risks: [],
          reservations: [],
          stopConditions: [],
          activatedBlocks: [],
          expectedOutcome: null,
          criticalJustification: null,
          requestedOperation: null,
        }),
        usage,
      };
    }

    if (current.includes("__F2_EXECUTION__") || /lance\s+cursor|crée\s+une\s+pr\b/i.test(current)) {
      return {
        text: structuredJson({
          intentClass: "execution_request",
          candidateCycleTypeId: "cyc:delivery",
          signals: {
            structuralChange: true,
            securityImpact: false,
            architectureImpact: true,
            dataImpact: false,
            irreversible: false,
            lowRiskBounded: false,
          },
          cognitiveWorkload: null,
          objective: "Exécution externe demandée",
          scope: "Bornée — aucune exécution F2",
          rephrasedRequest: current.slice(0, 120),
          outOfScope: ["Exécution réelle"],
          risks: ["Exécution hors périmètre"],
          reservations: [],
          stopConditions: ["AUCUNE EXÉCUTION"],
          activatedBlocks: ["qualification", "proposition", "gate"],
          expectedOutcome: "Proposition sans exécution",
          criticalJustification: "Demande d'exécution explicite",
          requestedOperation: "cursor create pr",
        }),
        usage,
      };
    }

    if (current.includes("__F2_ACTIONABLE__")) {
      return {
        text: structuredJson({
          intentClass: "actionable",
          candidateCycleTypeId: "cyc:delivery",
          signals: {
            structuralChange: false,
            securityImpact: false,
            architectureImpact: false,
            dataImpact: false,
            irreversible: false,
            lowRiskBounded: true,
          },
          cognitiveWorkload: null,
          objective: "Préparer une proposition bornée",
          scope: "Sans exécution",
          rephrasedRequest: current.slice(0, 120),
          outOfScope: ["Cursor", "Git write"],
          risks: [],
          reservations: [],
          stopConditions: ["AUCUNE EXÉCUTION"],
          activatedBlocks: ["qualification", "proposition"],
          expectedOutcome: "Proposition",
          criticalJustification: null,
          requestedOperation: null,
        }),
        usage,
      };
    }

    // Continuation after Session CLARIFY → informative (progress, no cycle).
    if (priorClarifyInContext(blob) && current.trim().length > 0) {
      return {
        text: structuredJson({
          intentClass: "informative",
          candidateCycleTypeId: null,
          signals: null,
          cognitiveWorkload: null,
          objective: "Continuer la compréhension du projet",
          scope: null,
          rephrasedRequest: current.slice(0, 160),
          outOfScope: [],
          risks: [],
          reservations: [],
          stopConditions: [],
          activatedBlocks: [],
          expectedOutcome: null,
          criticalJustification: null,
          requestedOperation: null,
        }),
        usage,
      };
    }

    // First / context-free natural ask → ambiguous (material clarify allowed).
    if (
      /projet|contrat|suivre|aide|aider|application/i.test(current) &&
      !hasCanonicalContext(blob)
    ) {
      return {
        text: structuredJson({
          intentClass: "ambiguous",
          candidateCycleTypeId: null,
          signals: null,
          cognitiveWorkload: null,
          objective: null,
          scope: null,
          rephrasedRequest: current.slice(0, 120),
          outOfScope: [],
          risks: [],
          reservations: [],
          stopConditions: [],
          activatedBlocks: [],
          expectedOutcome: null,
          criticalJustification: null,
          requestedOperation: null,
        }),
        usage,
      };
    }

    // Default progressive conversation with existing context → informative.
    if (hasCanonicalContext(blob)) {
      return {
        text: structuredJson({
          intentClass: "informative",
          candidateCycleTypeId: null,
          signals: null,
          cognitiveWorkload: null,
          objective: "Conversation progressive",
          scope: null,
          rephrasedRequest: current.slice(0, 160),
          outOfScope: [],
          risks: [],
          reservations: [],
          stopConditions: [],
          activatedBlocks: [],
          expectedOutcome: null,
          criticalJustification: null,
          requestedOperation: null,
        }),
        usage,
      };
    }

    return {
      text: structuredJson({
        intentClass: "informative",
        candidateCycleTypeId: null,
        signals: null,
        cognitiveWorkload: null,
        objective: "Analyse",
        scope: null,
        rephrasedRequest: current.slice(0, 160),
        outOfScope: [],
        risks: [],
        reservations: [],
        stopConditions: [],
        activatedBlocks: [],
        expectedOutcome: null,
        criticalJustification: null,
        requestedOperation: null,
      }),
      usage,
    };
  }

  async completeRound(input: {
    items: ProviderInputItem[];
    tools: unknown[];
  }): Promise<ProviderRoundResult> {
    void input.tools;
    const last = [...input.items]
      .reverse()
      .find((i) => i.type === "message" && i.role === "user");
    const content =
      last && last.type === "message" ? String(last.content) : "";
    return {
      kind: "message",
      text: `[TEST/FAKE · NON LIVE] Nora D1: ${content.slice(0, 200)}`,
      usage: {
        inputTokens: 8,
        outputTokens: 8,
        totalTokens: 16,
        model: "fake-test-model",
        providerResponseId: `d1-round-${this.n + 1}`,
      },
    };
  }
}

async function readSessionPairs(
  projectId: string,
  sessionDbPath: string,
): Promise<{
  users: number;
  assistants: number;
  texts: string[];
}> {
  const session = openCanonicalConversationSession({
    projectId,
    sessionDbPath,
  });
  try {
    const items = await session.getItems();
    const pairs = countCanonicalUserAssistantPairs(items);
    const texts = items
      .map(extractCanonicalTextFromItem)
      .filter((t): t is NonNullable<typeof t> => t != null)
      .map((t) => t.content);
    return { ...pairs, texts };
  } finally {
    session.close();
  }
}

describe("CORR-PROOF-01 D1 shared-session hybrid", () => {
  const previousFake = process.env.OPS1_CONVERSATION_PROVIDER;
  const tempDirs: string[] = [];
  let projectId = "";
  let sessionDbPath = "";
  let provider: D1ConversationProvider;

  beforeEach(async () => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    delete process.env.OPENAI_API_KEY;
    delete process.env.OPENAI_MODEL;
    provider = new D1ConversationProvider();
    setConversationProviderForTests(provider);
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetRuntimeApplicationServiceForTests();
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-d1-"));
    tempDirs.push(dir);
    sessionDbPath = path.join(dir, "nora-session.sqlite");
    const runtime = getRuntimeApplicationService({
      productDbPath: path.join(dir, "oa-product.sqlite"),
      auditMode: "noop",
      nowIso: "2026-09-06T15:00:00.000Z",
    });
    const created = await runtime.createProject({
      name: "Suivi de contrat",
      objective: "Créer une application pour suivre des contrats",
      context: "Dogfood Product Proof CORR-01",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "CONTRAT",
      idempotencyKey: `idem:d1-${Date.now()}-${Math.random()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("D1 setup failed");
    projectId = created.projectId;
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetRuntimeApplicationServiceForTests();
    while (tempDirs.length) {
      const dir = tempDirs.pop();
      if (dir) fs.rmSync(dir, { recursive: true, force: true });
    }
    if (previousFake === undefined) delete process.env.OPS1_CONVERSATION_PROVIDER;
    else process.env.OPS1_CONVERSATION_PROVIDER = previousFake;
  });

  async function send(content: string) {
    return orchestrateAssistantSend({
      projectId,
      content,
      sessionDbPath,
      provider,
    });
  }

  it("T1 — exact dogfood two-turn: no repeated generic CLARIFY", async () => {
    const t1 = await send(
      "tu peux m'aider à créer un projet de suivi de contrat ?",
    );
    expect(t1.ok).toBe(true);
    if (!t1.ok) return;
    expect(t1.text).toContain(MW5_CLARIFY_MARKER);
    expect(containsSynthesizedHumanAct(t1.text)).toBe(false);

    const after1 = await readSessionPairs(projectId, sessionDbPath);
    expect(after1.users).toBe(1);
    expect(after1.assistants).toBe(1);
    expect(after1.texts.some((t) => t.includes(MW5_CLARIFY_MARKER))).toBe(true);

    const t2 = await send(
      "l'application doit permettre de suivre les contrats avec les clients B2B de l'entreprise MC Consulting IT",
    );
    expect(t2.ok).toBe(true);
    if (!t2.ok) return;
    expect(t2.text).not.toContain(MW5_CLARIFY_MARKER);
    expect(t2.text.length).toBeGreaterThan(20);
    expect(containsSynthesizedHumanAct(t2.text)).toBe(false);

    const after2 = await readSessionPairs(projectId, sessionDbPath);
    expect(after2.users).toBe(2);
    expect(after2.assistants).toBe(2);
    expect(after2.users).toBe(after2.assistants);
  });

  it("T1A — prior CLARIFY + meaningful natural answer → contextual progress", async () => {
    const t1 = await send("tu peux m'aider à créer un projet de suivi de contrat ?");
    expect(t1.ok).toBe(true);
    if (!t1.ok) return;
    expect(t1.text).toContain(MW5_CLARIFY_MARKER);

    const t2 = await send(
      "l'application doit permettre de suivre les contrats avec les clients B2B de l'entreprise MC Consulting IT",
    );
    expect(t2.ok).toBe(true);
    if (!t2.ok) return;
    expect(t2.text).not.toContain(MW5_CLARIFY_MARKER);
    expect(provider.lastAnalysisBlob).toMatch(/Contexte conversationnel canonique/);
    expect(provider.lastAnalysisBlob).toContain(MW5_CLARIFY_MARKER);
    expect(t2.f2?.turnKind).toBe("f1_informative");
  });

  it("T1B — prior CLARIFY + still-ambiguous natural answer MUST NOT auto-CONTINUE", async () => {
    const t1 = await send("tu peux m'aider à créer un projet de suivi de contrat ?");
    expect(t1.ok).toBe(true);
    if (!t1.ok) return;
    expect(t1.text).toContain(MW5_CLARIFY_MARKER);

    const t2 = await send("je ne sais pas encore");
    expect(t2.ok).toBe(true);
    if (!t2.ok) return;
    expect(t2.text).toContain(MW5_CLARIFY_MARKER);
    expect(t2.mw5?.disposition).toBe("CLARIFY");
    expect(t2.f2?.turnKind).toBe("f2_clarification");

    const after = await readSessionPairs(projectId, sessionDbPath);
    expect(after.users).toBe(2);
    expect(after.assistants).toBe(2);
  });

  it("T1C — prior CLARIFY + unparseable analysis remains fail-closed", async () => {
    const t1 = await send("tu peux m'aider à créer un projet de suivi de contrat ?");
    expect(t1.ok).toBe(true);
    if (!t1.ok) return;

    const t2 = await send("suite __D1_UNPARSEABLE__");
    expect(t2.ok).toBe(true);
    if (!t2.ok) return;
    expect(t2.text).toContain(MW5_CLARIFY_MARKER);
    expect(t2.mw5?.disposition).toBe("CLARIFY");
    expect(t2.f2?.turnKind).not.toBe("f1_informative");
    expect(t2.f2?.proposal ?? null).toBeNull();
  });

  it("T2 — progressive five-turn project description without cycle storm", async () => {
    const turns = [
      "je veux un outil pour suivre des contrats",
      "surtout les contrats clients B2B",
      "il faudra aussi les dates d'échéance",
      "et un rappel avant renouvellement",
      "peux-tu résumer ce que tu as compris ?",
    ];
    const before = await getRuntimeApplicationService().getProject(projectId);
    expect(before.ok).toBe(true);
    if (!before.ok) return;
    const preVersion = before.livingState.version;

    for (const turn of turns) {
      const r = await send(turn);
      expect(r.ok).toBe(true);
      if (!r.ok) return;
      expect(r.f2?.proposal ?? null).toBeNull();
    }

    const after = await getRuntimeApplicationService().getProject(projectId);
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingState.version).toBe(preVersion);

    const session = await readSessionPairs(projectId, sessionDbPath);
    expect(session.users).toBe(5);
    expect(session.assistants).toBe(5);
  });

  it("T3 — pronoun/reference continuation after B2B context", async () => {
    await send("tu peux m'aider à créer un projet de suivi de contrat ?");
    await send(
      "l'application doit permettre de suivre les contrats avec les clients B2B de l'entreprise MC Consulting IT",
    );
    const r = await send("il faudrait aussi suivre les renouvellements");
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.text).not.toMatch(/Clarification structurante requise/i);
    expect(r.text.toLowerCase()).toMatch(/renouvel/);
  });

  it("T4 — genuine material ambiguity still clarifies", async () => {
    await send("tu peux m'aider à créer un projet de suivi de contrat ?");
    await send(
      "l'application doit permettre de suivre les contrats avec les clients B2B",
    );
    const r = await send(
      "fais le nécessaire pour tout __D1_MATERIAL_AMBIGUOUS__",
    );
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.text).toContain(MW5_CLARIFY_MARKER);
    expect(r.text).toMatch(/Clarification/i);
  });

  it("T5 — acknowledgement after clarification is contextual", async () => {
    await send("tu peux m'aider à créer un projet de suivi de contrat ?");
    await send(
      "l'application doit permettre de suivre les contrats avec les clients B2B de l'entreprise MC Consulting IT",
    );
    const r = await send("oui c'est ça");
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.text).not.toContain(MW5_CLARIFY_MARKER);
    expect(containsSynthesizedHumanAct(r.text)).toBe(false);
    expect(r.f2?.proposal ?? null).toBeNull();
  });

  it("T6 — authority boundary: no HD/GO/Confirmation synthesis", async () => {
    const r = await send(
      "lance Cursor et crée une PR maintenant __F2_EXECUTION__",
    );
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(containsSynthesizedHumanAct(r.text)).toBe(false);
    expect(r.text).toMatch(/AUCUNE EXÉCUTION|exécution/i);
    expect(r.f2?.executionBlocked === true || /AUCUNE EXÉCUTION/i.test(r.text)).toBe(
      true,
    );
  });

  it("T7 — informative conversation does not invent CycleInstance/proposal", async () => {
    const before = await getRuntimeApplicationService().getProject(projectId);
    expect(before.ok).toBe(true);
    if (!before.ok) return;
    const preVersion = before.livingState.version;

    await send("tu peux m'aider à créer un projet de suivi de contrat ?");
    const r = await send(
      "l'application doit permettre de suivre les contrats avec les clients B2B",
    );
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.f2?.proposal ?? null).toBeNull();
    expect(r.f2?.qualification ?? null).toBeNull();

    const after = await getRuntimeApplicationService().getProject(projectId);
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingState.version).toBe(preVersion);
  });

  it("T8 — Memory B / session isolation still works (single SoT)", async () => {
    await send("tu peux m'aider à créer un projet de suivi de contrat ?");
    const a = await readSessionPairs(projectId, sessionDbPath);
    expect(a.users).toBe(1);
    expect(a.assistants).toBe(1);

    const other = openCanonicalConversationSession({
      projectId: "prj:other-isolation",
      sessionDbPath,
    });
    try {
      const items = await other.getItems();
      expect(items.length).toBe(0);
    } finally {
      other.close();
    }
  });

  it("T9 — MW5 anti-synthesis + D1 persistence assertions", async () => {
    const t1 = await send("aide-moi à cadrer un suivi de contrat");
    expect(t1.ok).toBe(true);
    if (!t1.ok) return;
    expect(containsSynthesizedHumanAct(t1.text)).toBe(false);

    const mid = await readSessionPairs(projectId, sessionDbPath);
    expect(mid.users).toBe(mid.assistants);

    const t2 = await send("pour les clients B2B uniquement");
    expect(t2.ok).toBe(true);
    if (!t2.ok) return;
    expect(containsSynthesizedHumanAct(t2.text)).toBe(false);

    const end = await readSessionPairs(projectId, sessionDbPath);
    expect(end.users).toBe(end.assistants);
    expect(end.users).toBe(2);
    expect(end.texts.every((t) => typeof t === "string" && t.length > 0)).toBe(
      true,
    );
  });

  it("T10 — actionable F2 proposal persists once; next turn sees it as context", async () => {
    const before = await readSessionPairs(projectId, sessionDbPath);
    const r = await send("Prépare la prochaine étape __F2_ACTIONABLE__");
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.f2?.proposal).toBeTruthy();
    expect(r.text).toMatch(/Qualification SFIA|proposition/i);

    const after = await readSessionPairs(projectId, sessionDbPath);
    expect(after.users - before.users).toBe(1);
    expect(after.assistants - before.assistants).toBe(1);
    expect(after.texts.filter((t) => t === r.text).length).toBe(1);

    const cont = await send(
      "peux-tu rappeler le profil recommandé de la proposition précédente ?",
    );
    expect(cont.ok).toBe(true);
    if (!cont.ok) return;
    expect(provider.lastAnalysisBlob).toMatch(/Contexte conversationnel canonique/);
    expect(provider.lastAnalysisBlob).toContain("Qualification SFIA");
  });

  it("T11 — F2 authority/execution-blocked surface: exactly one canonical pair", async () => {
    const before = await readSessionPairs(projectId, sessionDbPath);
    const r = await send(
      "lance Cursor et crée une PR maintenant __F2_EXECUTION__",
    );
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.f2?.executionBlocked === true || /AUCUNE EXÉCUTION/i.test(r.text)).toBe(
      true,
    );

    const after = await readSessionPairs(projectId, sessionDbPath);
    expect(after.users - before.users).toBe(1);
    expect(after.assistants - before.assistants).toBe(1);
    expect(after.texts.filter((t) => t === r.text).length).toBe(1);
  });

  it("T12 — Memory B compaction replay parity for analyzeIntent", async () => {
    const runtime = getRuntimeApplicationService();
    const proj = await runtime.getProject(projectId);
    expect(proj.ok).toBe(true);
    if (!proj.ok) return;
    const rev = {
      lpsId: proj.livingState.id,
      lpsVersion: proj.livingState.version,
    };
    const earlyMarker = "EARLY_COMPACT_SEED_MC_CONSULTING_B2B_RENEWAL";
    const recentMarker = "RECENT_RAW_AFTER_COMPACT_KEEP";

    const session = openCanonicalConversationSession({
      projectId,
      sessionDbPath,
    });
    try {
      await session.addItems([
        userTextItem(`${earlyMarker} turn-0 ${"x".repeat(40)}`),
        assistantTextItem("reply-0 about early contract tracking"),
        userTextItem(`turn-1 ${"y".repeat(40)}`),
        assistantTextItem("reply-1"),
        userTextItem(`turn-2 ${"z".repeat(40)}`),
        assistantTextItem("reply-2"),
        userTextItem(recentMarker),
        assistantTextItem("reply-recent"),
      ]);
      const applied = await applyCompactionIfNeeded({
        session,
        truthCRevision: rev,
        policy: { itemThreshold: 4, keepRecentCount: 2, maxSummaryChars: 900 },
        nowIso: "2026-09-06T15:30:00.000Z",
      });
      expect(applied.applied).toBe(true);
      const loaded = await loadSessionRows(session);
      const replay = resolveReplayItems({
        loaded,
        currentTruthCRevision: rev,
      });
      expect(replay.state).toMatch(/compacted/);
      const replayText = replay.items
        .map((i) => JSON.stringify(i))
        .join("\n");
      expect(replayText).toMatch(/MW1-S02 COMPACTED MEMORY B/);
      expect(replayText).toContain(recentMarker);
    } finally {
      session.close();
    }

    const r = await send("peux-tu reprendre le fil sur le renouvellement ?");
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(provider.lastAnalysisBlob).toMatch(/MW1-S02 COMPACTED MEMORY B/);
    expect(provider.lastAnalysisBlob).toContain(recentMarker);

    const analysisLoad = await loadCanonicalConversationForAnalysis({
      projectId,
      sessionDbPath,
      truthCRevision: rev,
    });
    expect(analysisLoad.availability).toBe("available");
    expect(analysisLoad.contextText).toMatch(/MW1-S02 COMPACTED MEMORY B/);
    expect(analysisLoad.contextText).toContain(recentMarker);
  });

  it("T13 — stale compaction after Truth C revision change is not supplied", async () => {
    const runtime = getRuntimeApplicationService();
    const proj = await runtime.getProject(projectId);
    expect(proj.ok).toBe(true);
    if (!proj.ok) return;
    const rev1 = {
      lpsId: proj.livingState.id,
      lpsVersion: proj.livingState.version,
    };
    const staleMarker = "STALE_COMPACT_SUMMARY_MARKER_XYZ";

    const session = openCanonicalConversationSession({
      projectId,
      sessionDbPath,
    });
    try {
      await session.addItems([
        userTextItem(`${staleMarker} ${"a".repeat(50)}`),
        assistantTextItem("early-reply"),
        userTextItem(`noise ${"b".repeat(50)}`),
        assistantTextItem("noise-reply"),
        userTextItem("recent-keep-user"),
        assistantTextItem("recent-keep-assistant"),
      ]);
      const applied = await applyCompactionIfNeeded({
        session,
        truthCRevision: rev1,
        policy: { itemThreshold: 4, keepRecentCount: 2, maxSummaryChars: 900 },
        nowIso: "2026-09-06T15:40:00.000Z",
      });
      expect(applied.applied).toBe(true);
    } finally {
      session.close();
    }

    const withCurrent = await loadCanonicalConversationForAnalysis({
      projectId,
      sessionDbPath,
      truthCRevision: rev1,
    });
    expect(withCurrent.contextText).toMatch(/MW1-S02 COMPACTED MEMORY B/);

    const oa = runtime.oa!;
    const appended =
      await oa.projectServices.appendLivingProjectStateVersion.execute({
        projectId,
        expectedVersion: rev1.lpsVersion,
        objective: "Truth C bump for T13 stale compaction",
        createdBy: {
          actorId: "actor:d1-t13",
          role: "project_owner",
          displayName: "D1 T13",
          authorityLevel: "N3",
        },
        lpsVersionId: `${rev1.lpsId}-t13-v2`,
      });
    expect(appended.ok).toBe(true);

    const after = await runtime.getProject(projectId);
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingState.version).toBeGreaterThan(rev1.lpsVersion);

    const r = await send("reprends après changement Truth C");
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(provider.lastAnalysisBlob).not.toMatch(/MW1-S02 COMPACTED MEMORY B/);
    expect(provider.lastAnalysisBlob).toContain("recent-keep");
  });

  it("T14 — Session retrieval failure is UNAVAILABLE, not empty", async () => {
    await send("tu peux m'aider à créer un projet de suivi de contrat ?");
    const before = await getRuntimeApplicationService().getProject(projectId);
    expect(before.ok).toBe(true);
    if (!before.ok) return;
    const preVersion = before.livingState.version;
    const prePairs = await readSessionPairs(projectId, sessionDbPath);

    simulateNextCanonicalConversationUnavailableForTests();
    const r = await send(
      "l'application doit permettre de suivre les contrats B2B",
    );
    expect(r.ok).toBe(false);
    if (r.ok) return;
    expect(r.code).toBe("CANONICAL_SESSION_UNAVAILABLE");
    expect(r.message).toMatch(/indisponible|AUCUNE EXÉCUTION/i);
    expect(r.message).not.toMatch(/Contexte conversationnel canonique: \(vide/);

    const after = await getRuntimeApplicationService().getProject(projectId);
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingState.version).toBe(preVersion);

    const pairs = await readSessionPairs(projectId, sessionDbPath);
    expect(pairs.users).toBe(prePairs.users);
    expect(pairs.assistants).toBe(prePairs.assistants);
  });
});

```
