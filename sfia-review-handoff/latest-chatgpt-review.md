# ChatGPT Critical Delivery Review — CORR-PROOF-01 D1 — EVIDENCE COMPLETED

## 1. UTC timestamp

2026-09-06T13:22:27Z

## 2. Cycle / typology / profile

- Cycle ID: `SFIA-STUDIO-PRODUCT-PROOF-CORR-01-D1-REVIEW-PACK-COMPLETENESS-01`
- Parent Delivery cycle: `SFIA-STUDIO-PRODUCT-PROOF-CORR-01-D1-DELIVERY-01`
- Cycle 9 — QA / validation
- Typologie: DOC
- Profil: CRITICAL

## 3. Purpose

Previous handoff tip `21f0effd…` / blob `709d32d9…` was remotely verified but incomplete for ChatGPT Critical Delivery Review (summary-only modified content).

This cycle rebuilds the FULL Review Pack with auditable diffs and complete new-file contents.
**ZERO product mutation.**

## 4. Parent Product Proof state

OPEN → BLOCKED AT CORR-PROOF-01 → D1 Delivery candidate (deterministic) awaiting Critical Delivery Review.

## 5. Exact D1 Morris decision (carry forward)

CORR-PROOF-01 OPTION D1 SHARED-SESSION HYBRID ADOPTED —
ProductSqliteSession remains the single durable conversational SoT —
natural multi-turn semantics precede blocking SFIA policy —
F2/MW5 adapted as contextual formalization/governance —
exactly one canonical assistant turn per Pilote turn —
no second Runner / memory / conversation SoT —
corrective Delivery authorized —
T1–T9 + SAME Product Proof REAL retest required.

## 6. Git truth

| Field | Value |
|---|---|
| Repository | `mcleland147/sfia-workspace` |
| Worktree | `/Users/morris/Projects/sfia-workspace-proof-corr-01-delivery` |
| Branch | `delivery/sfia-studio-proof-corr-01-d1-conversation` |
| HEAD | `586480af178df5dd2f7177cae8f6b1ac18fe4acc` |
| origin/main | `586480af178df5dd2f7177cae8f6b1ac18fe4acc` |
| Prior incomplete handoff tip | `21f0effddb302d7263cde328f2e3c2aeadc57443` |
| Prior incomplete handoff blob | `709d32d920352fae11089b5e3282014884a80b26` |

## 7. Candidate file set (verified — no drift)

### Modified (tracked)

- `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts`
- `projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts`
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/criticalChallengeClarification.ts`

### New (untracked)

- `projects/sfia-studio/app/features/project-assistant/f2/canonicalConversationSession.ts`
- `projects/sfia-studio/app/__tests__/project-assistant/corrProof01.d1.conversation.d0.test.ts`

Candidate file set matches expected. **NO STOP — REVIEW PACK CANDIDATE FILE SET DRIFT.**

## 8. git status --short

```
 M projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
 M projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/criticalChallengeClarification.ts
?? projects/sfia-studio/app/.tmp-sfia-proof/
?? projects/sfia-studio/app/__tests__/project-assistant/corrProof01.d1.conversation.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/f2/canonicalConversationSession.ts
?? projects/sfia-studio/app/node_modules
```

## 9. git diff --stat

```
 .../project-assistant/f2/intentAnalysis.ts         |  19 ++-
 .../features/project-assistant/f2/orchestrateF2.ts | 137 +++++++++++++++++++--
 .../criticalChallengeClarification.ts              |  11 +-
 3 files changed, 155 insertions(+), 12 deletions(-)
```

## 10. git diff --name-status

```
M	projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
M	projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/criticalChallengeClarification.ts
```

## 11. Explicit product Git safety

- **STAGED = EMPTY**
- **PRODUCT COMMIT = NONE**
- **PRODUCT PUSH = NONE**
- **PRODUCT PR = NONE**
- Product candidate diff unchanged from D1 Delivery entry (evidence-only cycle).

## 12. Implementation strategy (unchanged from Delivery)

D1 Shared-Session Hybrid:

1. Server reads ProductSqliteSession (`f1-default`) before `analyzeIntent`.
2. Passes bounded canonical conversation into Structured Outputs formalization.
3. MW5 receives `sessionContextResolvesUncertainty` when latest Session assistant was `[MW5 CLARIFY]` and Pilote follows up.
4. On MW5 CONTINUE: route to existing F1 Agents Runner + Session (one visible turn).
5. On F2 CLARIFY/CHALLENGE/ESCALATE surfaces that skip F1: append exactly one user+assistant pair into ProductSqliteSession.

## 13. One-turn persistence lifecycle (unchanged)

1. User input → `orchestrateAssistantSend`
2. Non-durable: Session read + `analyzeIntent` + MW5 derive/disposition
3. Exactly ONE user-visible assistant response (F1 Runner OR F2 surface)
4. That ONE response becomes canonical Session history
5. No invisible assistant draft persisted

## 14. FULL modified content — orchestrateF2.ts

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 3e137822..3820ad3f 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -50,6 +50,12 @@ import {
   getMw5ChallengeSession,
   rememberMw5IssuedChallenge,
 } from "./mw5ChallengeSessionStore";
+import {
+  appendCanonicalConversationTurn,
+  formatCanonicalConversationForAnalysis,
+  openCanonicalConversationSession,
+  sessionPriorClarifyPresent,
+} from "./canonicalConversationSession";
 import { isPureRepositoryAnalysisIntent } from "./repositoryIntent";
 import { evaluateMorrisGateRequired } from "./gatePolicy";
 import {
@@ -304,6 +310,11 @@ async function evaluateF2Mw5(input: {
   projectCriticality: string;
   projectId: string;
   oa: RuntimeOaStack | null | undefined;
+  /**
+   * CORR-PROOF-01 D1 — latest canonical Session assistant was MW5 CLARIFY and
+   * the current Pilote turn is a follow-up. Server Session fact only.
+   */
+  sessionContextResolvesUncertainty?: boolean;
 }): Promise<{ armed: boolean; surface: Mw5TurnSurface; text: string }> {
   const armed = resolveF2CriticalChallengeArmed({
     analysis: input.analysis,
@@ -341,6 +352,8 @@ async function evaluateF2Mw5(input: {
         input.analysis.challengeResponseAssessment ?? null,
       openChallengePresent: session.latest != null,
       priorStructuralChallengeCount: session.priorStructuralChallengeCount,
+      sessionContextResolvesUncertainty:
+        input.sessionContextResolvesUncertainty === true,
     }),
   );
   const text = formatMw5AssistantText(decision);
@@ -370,6 +383,31 @@ function mw5TurnKind(
   return surface.disposition === "CLARIFY" ? "f2_clarification" : "f2_blocked";
 }

+/**
+ * CORR-PROOF-01 D1 — when F2 emits the user-visible response (no F1 Runner),
+ * persist exactly one user+assistant pair into ProductSqliteSession.
+ */
+async function persistCanonicalF2AssistantTurn(input: {
+  projectId: string;
+  sessionDbPath?: string;
+  userText: string;
+  assistantText: string;
+}): Promise<void> {
+  const session = openCanonicalConversationSession({
+    projectId: input.projectId,
+    sessionDbPath: input.sessionDbPath,
+  });
+  try {
+    await appendCanonicalConversationTurn({
+      session,
+      userText: input.userText,
+      assistantText: input.assistantText,
+    });
+  } finally {
+    session.close();
+  }
+}
+
 function resolveMode(explicitProvider?: ConversationProvider): {
   mode: "fixture" | "live" | "unavailable";
   canProceed: boolean;
@@ -614,6 +652,8 @@ export async function orchestrateAssistantSend(input: {

   let analysisResult: Awaited<ReturnType<typeof analyzeIntent>>;
   let truthCContextForF1: string | undefined;
+  let canonicalConversationContext = "";
+  let latestSessionWasClarify = false;
   try {
     const cognitive = await resolveCognitiveIntentProjectSummary(project);
     if (!cognitive.ok) {
@@ -630,6 +670,27 @@ export async function orchestrateAssistantSend(input: {
       cognitive.contextSource === "TRUTH_C_LPS"
         ? cognitive.truthCContext
         : undefined;
+
+    // CORR-PROOF-01 D1 — read ProductSqliteSession SoT (never client history).
+    try {
+      const canonSession = openCanonicalConversationSession({
+        projectId: project.projectId,
+        sessionDbPath: input.sessionDbPath,
+      });
+      try {
+        const items = await canonSession.getItems();
+        canonicalConversationContext =
+          formatCanonicalConversationForAnalysis(items);
+        latestSessionWasClarify = sessionPriorClarifyPresent(items);
+      } finally {
+        canonSession.close();
+      }
+    } catch {
+      // FR-11 — fail honest: empty continuity, do not invent context.
+      canonicalConversationContext = "";
+      latestSessionWasClarify = false;
+    }
+
     const challengeSession = getMw5ChallengeSession(project.projectId);
     const challengeContext =
       challengeSession.latest != null
@@ -647,6 +708,7 @@ export async function orchestrateAssistantSend(input: {
     analysisResult = await analyzeIntent({
       userContent: content,
       projectSummary: cognitive.projectSummary,
+      canonicalConversationContext,
       challengeContext,
       provider: effectiveProvider,
       evalModelReasoningControl: input.evalModelReasoningControl,
@@ -731,6 +793,8 @@ export async function orchestrateAssistantSend(input: {
   // C — ambiguous / fail-closed (no Cycle/LPS mutation)
   if (analysis.intentClass === "ambiguous" || !analysis.parseOk) {
     const oaEarly = getRuntimeApplicationService().oa;
+    const sessionContextResolvesUncertainty =
+      latestSessionWasClarify && content.trim().length > 0;
     const mw5 = await evaluateF2Mw5({
       content,
       history: input.history,
@@ -740,19 +804,68 @@ export async function orchestrateAssistantSend(input: {
       projectCriticality: project.criticality,
       projectId: project.projectId,
       oa: oaEarly,
+      sessionContextResolvesUncertainty,
     });
+    // D1 — prior Session CLARIFY resolved by natural follow-up → F1 Session path
+    // (one canonical assistant via Runner), not a second canned CLARIFY.
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
+    await persistCanonicalF2AssistantTurn({
+      projectId: project.projectId,
+      sessionDbPath: input.sessionDbPath,
+      userText: content,
+      assistantText: mw5.text,
+    });
     return f2Success({
       text: mw5.text,
       mode: modeResolution.mode as "fixture" | "live",
@@ -894,6 +1007,12 @@ export async function orchestrateAssistantSend(input: {
     oa,
   });
   if (!mw5.surface.recommendationAllowed) {
+    await persistCanonicalF2AssistantTurn({
+      projectId: project.projectId,
+      sessionDbPath: input.sessionDbPath,
+      userText: content,
+      assistantText: mw5.text,
+    });
     return f2Success({
       text: mw5.text,
       mode: modeResolution.mode as "fixture" | "live",
```

## 15. FULL modified content — intentAnalysis.ts

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
```

## 16. FULL modified content — criticalChallengeClarification.ts

```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/criticalChallengeClarification.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/criticalChallengeClarification.ts
index 5bc3838d..fac25fa4 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/criticalChallengeClarification.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/criticalChallengeClarification.ts
@@ -547,13 +547,22 @@ export type DeriveMw5FactsInput = {
   openChallengePresent?: boolean;
   /** Server-tracked prior structural challenge count (process-local). */
   priorStructuralChallengeCount?: number;
+  /**
+   * CORR-PROOF-01 D1 — server ProductSqliteSession shows a prior MW5 CLARIFY
+   * and the current Pilote turn is a non-empty follow-up. Never derived from
+   * client history alone. Test marker `__MW5_CONTEXT_RESOLVED__` remains for
+   * deterministic MW5 unit fixtures.
+   */
+  sessionContextResolvesUncertainty?: boolean;
 };

 export function deriveMw5FactsFromF2Turn(input: DeriveMw5FactsInput): Mw5PolicyInput {
   const content = input.userContent;
   const cosmetic =
     content.includes(MW5_TEST_MARKERS.cosmetic) || COSMETIC_RE.test(content);
-  const contextResolves = content.includes(MW5_TEST_MARKERS.contextResolved);
+  const contextResolves =
+    content.includes(MW5_TEST_MARKERS.contextResolved) ||
+    input.sessionContextResolvesUncertainty === true;
   const authority =
     content.includes(MW5_TEST_MARKERS.authority) ||
     (input.intentClass === "execution_request" &&
```

## 17. COMPLETE new file — canonicalConversationSession.ts

```typescript
/**
 * CORR-PROOF-01 D1 — canonical ProductSqliteSession conversational SoT helpers.
 *
 * D1 one-turn persistence lifecycle (authoritative for this Delivery):
 * 1. Read ProductSqliteSession (`f1-default`) for bounded canonical context.
 * 2. Non-durable: analyzeIntent Structured Outputs (+ MW5 fact derive) — never
 *    written to Session as draft/assistant.
 * 3. MW5 policy evaluated on derived facts (incl. session-resolved clarify).
 * 4. Exactly ONE user-visible assistant response is chosen (F1 Session path OR
 *    F2/MW5 surface text).
 * 5. That ONE response is persisted with the user turn into ProductSqliteSession
 *    — either by Agents Runner (F1) or by appendCanonicalConversationTurn (F2
 *    clarify/challenge/escalate surfaces that skip F1).
 *
 * Invariants: no second SoT; no client-history blind import; no invisible draft.
 */

import type { AgentInputItem } from "@openai/agents";
import {
  ProductSqliteSession,
  assistantTextItem,
  userTextItem,
} from "@/lib/nora-cognitive-runtime/productSqliteSession";
import { resolveNoraSessionSqlitePath } from "@/lib/nora-cognitive-runtime/sessionPaths";
import { MW5_CLARIFY_MARKER } from "@/lib/nora-cognitive-runtime/criticalChallengeClarification";

/** Must match F1 / runNoraCognitiveTurn default sessionKey — single SoT. */
export const CANONICAL_CONVERSATION_SESSION_KEY = "f1-default";

const MAX_CONTEXT_MESSAGES = 12;
const MAX_CONTEXT_CHARS = 8000;

export type CanonicalConversationTurn = {
  role: "user" | "assistant";
  content: string;
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

export function sessionPriorClarifyPresent(
  items: readonly AgentInputItem[],
): boolean {
  for (let i = items.length - 1; i >= 0; i -= 1) {
    const turn = extractCanonicalTextFromItem(items[i]!);
    if (!turn) continue;
    if (turn.role === "assistant") {
      return turn.content.includes(MW5_CLARIFY_MARKER);
    }
  }
  return false;
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

## 18. COMPLETE new file — corrProof01.d1.conversation.d0.test.ts

```typescript
/** @vitest-environment node */
/**
 * CORR-PROOF-01 D1 — Shared-Session Hybrid deterministic acceptance (T1–T9).
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
  openCanonicalConversationSession,
} from "@/features/project-assistant/f2/canonicalConversationSession";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import {
  MW5_CLARIFY_MARKER,
  containsSynthesizedHumanAct,
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
 * Fixture tokens (__F2_*, __MW5_*) remain available for T4/T6/T9 regression only.
 */
class D1ConversationProvider implements ConversationProvider {
  readonly providerId = "fake-test";
  private n = 0;

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
    const current = demandeCourante(blob);
    const usage = {
      inputTokens: 10 * this.n,
      outputTokens: 5 * this.n,
      totalTokens: 15 * this.n,
      model: "fake-test-model",
      providerResponseId: `d1-resp-${this.n}`,
    };

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
    // No client-history blind import: only server sends create Session rows.
    expect(end.texts.every((t) => typeof t === "string" && t.length > 0)).toBe(
      true,
    );
  });
});
```

## 19. Asset dispositions (carry forward)

| Asset | Disposition |
|---|---|
| ProductSqliteSession | KEEP — single durable conversational SoT |
| Memory B / compaction | KEEP |
| Agents Runner | KEEP — single Runner |
| F2 orchestrator | ADAPT |
| analyzeIntent | ADAPT |
| MW5 policy | KEEP invariants / ADAPT placement |
| Structured Outputs | KEEP for formalization |
| OpenAIConversationsSession | unused / not primary SoT |

## 20. Authority / Truth C / no-second-SoT (carry forward)

- Authority anti-synthesis preserved (T6 + MW5 regression).
- Conversation/session ≠ Truth C.
- No second Runner / memory / conversation SoT.
- Client history not blindly imported into Session.

## 21–29. T1–T9 + regressions (carried)

**TEST RESULT CARRIED FROM UNCHANGED DELIVERY CANDIDATE — NOT RE-EXECUTED IN REVIEW-PACK COMPLETENESS CYCLE**

| Gate | Status |
|---|---|
| T1–T9 (`corrProof01.d1.conversation.d0.test.ts`) | **9/9 PASS** |
| Targeted regression (D1 + F2 + MW5 + Memory B) | **109 PASS / 0 FAIL** |
| `npm run typecheck` | **PASS** |

## 30. Fake / Real qualification

DETERMINISTIC ONLY. ZERO live OpenAI. ZERO hosted search. ZERO Stage A/B campaign.

## 31. Proof ceiling

**DETERMINISTIC PROVEN** corrective candidate.

≠ CORR-PROOF-01 REAL CLOSED
≠ Product Proof COMPLETE
≠ runtime v3 ADOPTED
≠ production-ready
≠ Stage B justified
≠ production model routing selected

## 32. Debt

None introduced. No temporary dual-path.

## 33. Reservations

- REAL Product Proof retest on Suivi de contrat still required after Morris Git disposition + merge.
- Live OpenAI classification quality not proven in Delivery.
- Restart continuity not claimed proven here.

## 34. FULL modified content included

**YES** — complete `git diff` for all three modified tracked files + complete contents of both new untracked files.

## 35. Delivery verdict (unchanged)

**PASS WITH RESERVES** (REAL retest still required).

## 36. Next Morris gate

ChatGPT Critical Delivery Review → Morris product Git disposition → if accepted: commit/push/PR/CI/merge through distinct gates → post-merge verification → SAME Product Proof REAL retest.

DO NOT start PR automatically.
DO NOT start REAL retest automatically.

## 37. Review Handoff publication proof

| Field | Value |
|---|---|
| Parent tip | `21f0effddb302d7263cde328f2e3c2aeadc57443` |
| Suggested commit | `docs(review-handoff): complete CORR-PROOF-01 D1 delivery evidence` |
| Published content commit | _(publisher)_ |
| Actual remote tip | _(publisher)_ |
| Canonical blob | _(publisher)_ |
| Publisher verdict | _(publisher)_ |

No self-referential second publication.
