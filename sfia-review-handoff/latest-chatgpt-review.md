# PILOT-NORA-STUDIO-SEMANTIC-CONTINUITY-01
## Cycle 8 — Delivery / implémentation
## FULL Review Pack — Cursor → ChatGPT

Generated: 2026-09-26T02:45:43Z
Macro: PILOT-NORA-STUDIO-SEMANTIC-CONTINUITY-01
Cycle: 8 — Delivery / implémentation
Profile: CRITICAL
Morris GO consumed: **GO — PILOT-NORA-STUDIO-SEMANTIC-CONTINUITY-01 NEXT CONVERGENCE CONSTRUCTION MACRO**
Cursor REAL: NOT RUN
OpenAI LIVE proof: NOT RUN
StudyFlow Product mutation: NONE
Project commit/push/PR: NONE

---

## 1. GO MORRIS CONSUMED

Authorized and performed: Local Git Truth Check · feature branch · code/tests in scope · typecheck/lint/build/full Vitest · Review Pack FULL · L3 handoff publish.

Not performed: project commit/push/PR/merge · Build Doctrine / Roadmap / C1 / doctrine v3 edits · OpenAI LIVE · Cursor REAL · StudyFlow retry/mutation · automatic HumanDecision · new store/event bus/planner.

---

## 2. GIT TRUTH

| Field | Value |
|-------|-------|
| Branch | `feat/sfia-studio-pilot-nora-studio-semantic-continuity-01` |
| HEAD / base | `49249101bab1bd1e3a1d91b469fe7b41341c5a01` (= `origin/main`, PR #522 merge) |
| Created from | `origin/main` (clean aside from `.tmp-sfia-review/**`) |
| Project commit | **NOT COMMITTED** |
| Project push | **NOT PUSHED** |

---

## 3. STUDYFLOW EVIDENCE ANCHOR

| Field | Value |
|-------|-------|
| Phase B handoff commit | `36785ff99cb227f19f9a1fdfbc978be1be6d54c6` |
| Canonical blob | `cbcf2afc171944fc50304baf994a4aaf888ef72f` |
| Note | Global `sfia/review-handoff` has advanced for other work — StudyFlow proof read by historical commit, not latest global |

Observation reproduced (semantic): Nora conversational recovery recommendation (governed retry) ≠ Studio CURRENT badge (clarify-first) because `deriveTrajectoryRecommendation` always forced clarify-first under RecoveryContext, while Nora ACW Recommendations carried only free-form `statement` (no structured option identity) and W2 never consumed ACW for WHAT.

---

## 4. ROOT CAUSE (CONFIRMED)

1. **Nora ACW Recommendation** had no machine `recommendedOptionRef` — narrative only.
2. **W2** `deriveTrajectoryRecommendation(recovery)` always returned `opt:trajectory:clarify-first`.
3. Provider cognition in `proposeTrajectoryOptions` enriches WHY only — never rewrites WHAT.
4. Studio UI badge reads `optionSet.recommendation.recommendedOptionRef` → contradictory CURRENT guidance vs Nora chat.

Class: **NEW SEMANTIC GAP — PILOT / NORA / STUDIO CONTEXT & RECOMMENDATION CONTINUITY**

---

## 5. OPENAI-NATIVE-FIRST DISPOSITION

**USE / KEEP** existing `ConversationProvider.completeStructured` + OpenAI Responses `json_schema` strict.

**ADAPT** existing `NoraActiveCycleWorkItem` schema (add nullable structured `recommendedOptionRef`).

**COMBINE** structured cognition + server validation + Epistemic relatedObjects + PresentedOptionSet + HumanDecision gate.

**DO NOT BUILD** another provider adapter / structured-output engine / Recommendation table.

---

## 6. SEMANTIC CONTRACT INTRODUCED

### Structured ACW Recommendation
- Field: `recommendedOptionRef: string | null` on `NoraActiveCycleWorkItem` (strict schema required; null allowed).
- Never parsed from `statement`.
- Only valid on `type=Recommendation`; shape `opt:…`.
- Materialized into EpistemicItem `relatedObjects` (same pattern as W2 Recommendations).
- Included in ACW epistemic id hash + materialParity.

### Current Recommendation resolution
New helper: `resolveCurrentNoraTrajectoryRecommendation` / `selectCurrentNoraTrajectoryRecommendationItems`

Precedence:
1. If eligible current Nora ACW Recommendation with ref ∈ server OptionSet → use it (`recommendationSource=nora_active_cycle`).
2. Else deterministic `deriveTrajectoryRecommendation` as **explicit** fallback (`deterministic_fallback`).
3. Invented ref / ambiguous concurrent Nora refs → **fail-closed** (no silent pick).

### PresentedOptionSet freshness
Sealed fields added (optional for legacy):
- `recommendationBasisDigest`
- `recommendationSource`
- `noraRecommendationEpistemicItemId`

At `decideTrajectory`: if sealed basis present and live re-resolve digest differs → `OPTION_SET_STALE`.

### Studio → Nora
- `trajectoryDecisionSupport` projection (server-computed in `orchestrateF2` via `resolveTrajectoryDecisionSupportProjection`) lists server optionRefs/labels + current Nora ref.
- Prompt instructs Nora to emit structured `recommendedOptionRef` among server refs only.
- ACW projection surfaces `recommendedOptionRef` in cognitive context.

### Chat coherence
`composePilotFacingAssistantText` appends deterministic:
`Recommandation structurée (pas une décision) : « <same pilotTrajectoryOptionLabel> ».`

### Authority invariants preserved
- Recommendation `isHumanDecision: false`, `promotesTrajectory: false`
- HumanDecision remains sole promotion gate (`decideTrajectory`)
- No auto PREPARE / Execute
- Non-recommended presented Option still choosable (Recommendation ≠ Decision)

---

## 7. FILES MODIFIED

### Product / runtime
- `lib/nora-cognitive-runtime/noraProductTurnOutputType.ts`
- `features/project-assistant/materializeActiveCycleWork.ts`
- `features/project-assistant/w2/resolveCurrentNoraTrajectoryRecommendation.ts` **(new)**
- `features/project-assistant/w2/resolveTrajectoryDecisionSupportProjection.ts` **(new)**
- `features/project-assistant/w2/proposeTrajectoryOptions.ts`
- `features/project-assistant/w2/presentedOptionSet.ts`
- `features/project-assistant/w2/decideTrajectory.ts`
- `features/project-assistant/f2/studioCognitiveContext.ts`
- `features/project-assistant/f2/orchestrateF2.ts`
- `features/project-assistant/buildProjectSystemPrompt.ts`
- `features/project-assistant/orchestrateTurn.ts`

### Tests
- `.__tests__/project-assistant/pilotNoraStudioSemanticContinuity.d0.test.ts` **(new)**
- fixture updates: `studioCognitiveContext.test.ts`, `corrProof06…`, `importBoundaries.test.ts`

### NOT modified
`convergence/**`, `product-completion/**`, `sfia-v3-framing/**`, `nora-cognitive-completion/**`, `method/**`, `prompts/**`, `.github/**`, `scripts/sfia/**`, Product/Session SQLite campaign DBs, managed clone, `.env.local`, OpenAI provider architecture, TrajectorySurface visual redesign (badge already binds to recommendedOptionRef — semantic fix feeds it).

Exploitable diffs/new sources also copied under:
`.tmp-sfia-review/pilot-nora-studio-semantic-continuity/`

---

## 8. KEY IMPLEMENTATION EXCERPTS

### Schema adaptation (required nullable field)
`recommendedOptionRef` added to `NORA_ACTIVE_CYCLE_WORK_ITEM_SCHEMA` with `anyOf: [string, null]`, required for OpenAI strict; validator accepts legacy absence and rejects invalid non-null strings.

### W2 consume (proposeTrajectoryOptions)
After `deriveTrajectoryOptions`, calls `resolveCurrentNoraTrajectoryRecommendation` and uses resolved recommendation (Nora or explicit fallback) before cognition enrichment. Seals `recommendationBasisDigest` on PresentedOptionSet.

### Decide freshness
When `presented.recommendationBasisDigest` is sealed (non-proposal), re-resolves live Nora/fallback basis; mismatch → `OPTION_SET_STALE`.

### UI
No visual redesign. `TrajectorySurface` already badges `optionSet.recommendation.recommendedOptionRef` — fixing the bound ref fixes the contradictory CURRENT badge.

---

## 9. TESTS

New file: `pilotNoraStudioSemanticContinuity.d0.test.ts` (12 tests) covering:
- structured ref accept/reject
- fallback clarify-first when no Nora
- Nora governed-gated becomes CURRENT (clarify remains Option)
- invented ref fail-closed
- ambiguous Nora fail-closed
- HD may choose non-recommended presented Option
- unknown option integrity fail
- HD cutoff ignores older Nora rec
- basis digests differ Nora vs fallback
- Recommendation never promotes

Targeted suites passed before full gate: semantic continuity, recommendation integrity, recovery options, ACW, W2 EABC, studioCognitiveContext, orchestrateTurn, importBoundaries.

---

## 10. FULL VALIDATION

| Check | Result |
|-------|--------|
| typecheck | PASS |
| lint | PASS (0 warnings/errors) |
| build | PASS |
| vitest full | **424 passed files / 17 skipped · 4697 passed / 137 skipped · 0 failed** |
| importBoundaries | PASS (allowlist +2 entries) |

---

## 11. VISUAL PROOF

**VISUAL RUNTIME PROOF DEFERRED** — authenticated harness not used to manufacture lifecycle state / reopen GAP-15. Deterministic Product tests cover semantic continuity. Natural StudyFlow campaign provides later real Product reproof.

---

## 12. FAKE / REAL

| Item | Status |
|------|--------|
| This cycle proof | **DETERMINISTIC PRODUCT SEMANTIC CONTINUITY PROVEN** at implemented scope |
| OpenAI LIVE fix | NOT PROVEN |
| StudyFlow E2E / Cursor REAL / docs_write REAL | NOT PROVEN |
| Gate Morris REAL | NOT GRANTED |

Hard rule: DETERMINISTIC PROVEN ≠ REAL BOUNDARY PROVEN.

---

## 13. RESERVES

- GAP-15 OPEN RESERVE NON-BLOCKING OUT OF MACRO
- Roadmap MealFlow DOCUMENTARY DRIFT NON-BLOCKING
- StudyFlow managed clone freshness (separate operational)
- StudyFlow natural/OpenAI-live reproof pending after Morris gates

---

## 14. DEBT / EXIT

No intentional structural debt on critical semantic path.

Exit path: ChatGPT review → Morris commit/PR gates → integrate if authorized → resume **same** StudyFlow Project → natural reproof → only then recovery/REAL trajectory.

Next capability: **NOT PRESELECTED**.

---

## 15. ANTI-CLAIMS

Not claimed: runtime v3 ADOPTED · Product globally READY · Product Completion newly COMPLETE · Nora Cognitive Completion COMPLETE · OpenAI LIVE correction proven · StudyFlow E2E REAL proven · Cursor docs_write REAL proven · GO REAL · GAP-15 closed · Roadmap synced · managed clone freshness solved · next macro selected · PR ready · merge ready.

---

## 16. FINAL VERDICT

**PILOT-NORA-STUDIO SEMANTIC CONTINUITY — DETERMINISTICALLY PROVEN / READY FOR CHATGPT REVIEW**

Project Git: **LOCAL / NOT COMMITTED / NOT PUSHED**

Instruction: Ne pas commit/push/PR automatiques. Ne pas lancer REAL. Ne pas reprendre StudyFlow automatiquement. ChatGPT/Morris arbitre la suite.


---

## 17. EXPLOITABLE DIFFS / NEW SOURCES

> Complete modified sections for ChatGPT review. Also mirrored under `.tmp-sfia-review/pilot-nora-studio-semantic-continuity/`.


### noraProductTurnOutputType.diff

```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
index 5e30e9d7..d90c1424 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
@@ -90,7 +90,13 @@ export const PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT: PreCycleRoutingAssessme
 export const NORA_ACTIVE_CYCLE_WORK_ITEM_SCHEMA = {
   type: "object" as const,
   additionalProperties: false as const,
-  required: ["type", "statement", "confidence", "blocking"],
+  required: [
+    "type",
+    "statement",
+    "confidence",
+    "blocking",
+    "recommendedOptionRef",
+  ],
   properties: {
     type: {
       type: "string" as const,
@@ -114,6 +120,15 @@ export const NORA_ACTIVE_CYCLE_WORK_ITEM_SCHEMA = {
       ],
     },
     blocking: { anyOf: [{ type: "boolean" as const }, { type: "null" as const }] },
+    /**
+     * PILOT-NORA-STUDIO-SEMANTIC-CONTINUITY-01 — canonical Option identity when
+     * type=Recommendation targets a server-derived trajectory/proposal Option.
+     * Structured field only (never parsed from statement). Null for non-option
+     * recommendations. Recommendation ≠ HumanDecision; never promotes trajectory.
+     */
+    recommendedOptionRef: {
+      anyOf: [{ type: "string" as const }, { type: "null" as const }],
+    },
   },
 } as const;

@@ -140,6 +155,11 @@ export type NoraActiveCycleWorkItem = {
   statement: string;
   confidence: "high" | "medium" | "low" | "none" | null;
   blocking: boolean | null;
+  /**
+   * Canonical Option ref when this Recommendation targets a server-derived Option.
+   * Null / omitted for non-trajectory Recommendations. Never authority Alone.
+   */
+  recommendedOptionRef?: string | null;
 };

 export type NoraActiveCycleWorkOutput = {
@@ -431,6 +451,19 @@ const ACTIVE_CYCLE_WORK_CONFIDENCES = new Set([
   "none",
 ]);

+/** Normalize structured recommendedOptionRef (never from statement prose). */
+export function normalizeActiveCycleRecommendedOptionRef(
+  value: unknown,
+): string | null {
+  if (value === null || value === undefined) return null;
+  if (typeof value !== "string") return null;
+  const trimmed = value.trim();
+  if (!trimmed) return null;
+  // Fail-closed shape: SFIA option refs only (no free-form labels).
+  if (!/^opt:[a-z0-9][a-z0-9:_-]*$/i.test(trimmed)) return null;
+  return trimmed;
+}
+
 export function isNoraActiveCycleWorkItem(
   value: unknown,
 ): value is NoraActiveCycleWorkItem {
@@ -448,6 +481,17 @@ export function isNoraActiveCycleWorkItem(
     return false;
   }
   if (o.blocking !== null && typeof o.blocking !== "boolean") return false;
+  // recommendedOptionRef: absent (legacy) OR null OR valid opt: ref.
+  // Invalid non-null strings fail closed (reject item).
+  if (
+    "recommendedOptionRef" in o &&
+    o.recommendedOptionRef !== null &&
+    o.recommendedOptionRef !== undefined
+  ) {
+    if (normalizeActiveCycleRecommendedOptionRef(o.recommendedOptionRef) === null) {
+      return false;
+    }
+  }
   return true;
 }

@@ -764,14 +808,28 @@ export function applyConversationGuidanceCoherence(input: {
 export function composePilotFacingAssistantText(
   narrative: string,
   guidance: ConversationGuidance | null | undefined,
+  structuredRecommendation?: {
+    readonly optionLabel: string;
+    readonly recommendedOptionRef: string;
+  } | null,
 ): string {
   const n = narrative.trim();
-  if (!guidance) return n;
-  const statement = guidance.statement.trim();
-  if (!statement) return n;
-  if (n.includes(statement)) return n;
-  if (!n) return statement;
-  return `${n}\n\n${statement}`;
+  let out = n;
+  if (guidance) {
+    const statement = guidance.statement.trim();
+    if (statement) {
+      if (!out) out = statement;
+      else if (!out.includes(statement)) out = `${out}\n\n${statement}`;
+    }
+  }
+  if (structuredRecommendation?.optionLabel?.trim()) {
+    const label = structuredRecommendation.optionLabel.trim();
+    const block = `Recommandation structurée (pas une décision) : « ${label} ».`;
+    if (!out.includes(label) && !out.includes(block)) {
+      out = out ? `${out}\n\n${block}` : block;
+    }
+  }
+  return out;
 }

 /**

```

### materializeActiveCycleWork.diff

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/materializeActiveCycleWork.ts b/projects/sfia-studio/app/features/project-assistant/materializeActiveCycleWork.ts
index 40522534..a23b5fe2 100644
--- a/projects/sfia-studio/app/features/project-assistant/materializeActiveCycleWork.ts
+++ b/projects/sfia-studio/app/features/project-assistant/materializeActiveCycleWork.ts
@@ -19,12 +19,26 @@ import type { GetCurrentLivingProjectState } from "@/lib/oa/project/application/
 import type { CyclePersistenceUnitOfWorkPort } from "@/lib/oa/cycle/ports/cyclePersistenceUnitOfWorkPort";
 import type { GetCycle } from "@/lib/oa/cycle/application/getCycle";
 import type { NoraActiveCycleWorkItem } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
+import { normalizeActiveCycleRecommendedOptionRef } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
 import { NORA_LIFECYCLE_RECOMMENDATION_ACTOR } from "@/lib/oa/cycle/application/lifecycleRecommendation/noraActor";
 import type { ActiveCycleWorkContextSeal } from "./f2/activeCycleCognitiveContext";

 /** Stable Product source for Nora active-cycle cognitive work. */
 export const ACTIVE_CYCLE_WORK_SOURCE = "active-cycle-work:nora" as const;

+/**
+ * Extract canonical recommendedOptionRef from ACW EpistemicItem.relatedObjects.
+ * Prefers opt:trajectory:* then any opt:* (W2-compatible relatedObjects pattern).
+ */
+export function extractAcwRecommendedOptionRef(
+  relatedObjects: readonly string[] | null | undefined,
+): string | null {
+  if (!relatedObjects || relatedObjects.length === 0) return null;
+  const optionRefs = relatedObjects.filter((r) => r.startsWith("opt:"));
+  const trajectory = optionRefs.find((r) => r.startsWith("opt:trajectory:"));
+  return trajectory ?? optionRefs[0] ?? null;
+}
+
 /** Same Nora agent actor as LR — authority remains none on items. */
 export const NORA_ACTIVE_CYCLE_WORK_ACTOR: ActorReference =
   NORA_LIFECYCLE_RECOMMENDATION_ACTOR;
@@ -91,6 +105,8 @@ export function activeCycleWorkEpistemicItemId(input: {
   index: number;
   type: string;
   statement: string;
+  /** Semantic continuity — part of identity when Recommendation binds an Option. */
+  recommendedOptionRef?: string | null;
 }): string {
   const raw = [
     input.projectId,
@@ -99,6 +115,7 @@ export function activeCycleWorkEpistemicItemId(input: {
     String(input.index),
     input.type,
     statementDigest(input.statement),
+    input.recommendedOptionRef?.trim() || "",
   ].join("|");
   const digest = createHash("sha256")
     .update(raw, "utf8")
@@ -139,6 +156,7 @@ function materialParity(
     statement: string;
     confidence?: EpistemicConfidence;
     blocking?: boolean;
+    recommendedOptionRef?: string | null;
   },
 ): boolean {
   if (existing.type !== next.type) return false;
@@ -150,6 +168,9 @@ function materialParity(
     return false;
   }
   if (existing.source !== ACTIVE_CYCLE_WORK_SOURCE) return false;
+  const existingRef = extractAcwRecommendedOptionRef(existing.relatedObjects);
+  const nextRef = next.recommendedOptionRef?.trim() || null;
+  if ((existingRef ?? null) !== (nextRef ?? null)) return false;
   return true;
 }

@@ -300,6 +321,30 @@ export async function materializeActiveCycleWork(input: {
         reason: `forbidden_epistemic_type:${item.type}`,
       };
     }
+    // Recommendation may carry structured option identity; other types must not.
+    if (
+      item.type !== "Recommendation" &&
+      item.recommendedOptionRef != null &&
+      String(item.recommendedOptionRef).trim() !== ""
+    ) {
+      return {
+        ok: false,
+        code: "ACTIVE_CYCLE_WORK_INVALID",
+        reason: "recommended_option_ref_only_on_recommendation",
+      };
+    }
+    if (
+      item.type === "Recommendation" &&
+      item.recommendedOptionRef != null &&
+      normalizeActiveCycleRecommendedOptionRef(item.recommendedOptionRef) ===
+        null
+    ) {
+      return {
+        ok: false,
+        code: "ACTIVE_CYCLE_WORK_INVALID",
+        reason: "recommended_option_ref_invalid",
+      };
+    }
   }

   const createdBy = input.createdBy ?? NORA_ACTIVE_CYCLE_WORK_ACTOR;
@@ -401,6 +446,12 @@ export async function materializeActiveCycleWork(input: {
             "empty_statement",
           );
         }
+        const recommendedOptionRef =
+          type === "Recommendation"
+            ? normalizeActiveCycleRecommendedOptionRef(
+                raw.recommendedOptionRef,
+              )
+            : null;
         const epistemicItemId = activeCycleWorkEpistemicItemId({
           projectId: facts.projectId,
           cycleInstanceId: facts.activeCycleInstanceId,
@@ -408,6 +459,7 @@ export async function materializeActiveCycleWork(input: {
           index,
           type,
           statement,
+          recommendedOptionRef,
         });
         const existing = existingById.get(epistemicItemId);
         const confidence =
@@ -423,6 +475,7 @@ export async function materializeActiveCycleWork(input: {
               statement,
               confidence,
               blocking,
+              recommendedOptionRef,
             })
           ) {
             throw new ActiveCycleWorkAtomicFailure(
@@ -458,6 +511,7 @@ export async function materializeActiveCycleWork(input: {
           facts.activeCycleInstanceId,
           ...(cycle.trajectoryId ? [cycle.trajectoryId] : []),
           ...(cycle.trajectoryStepId ? [cycle.trajectoryStepId] : []),
+          ...(recommendedOptionRef ? [recommendedOptionRef] : []),
         ];

         planned.push({

```

### proposeTrajectoryOptions.diff

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts b/projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts
index cc53b277..db589d16 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts
@@ -60,9 +60,9 @@ import {
 } from "./resolveProposalDecisionSubject";
 import {
   deriveTrajectoryOptions,
-  deriveTrajectoryRecommendation,
   type TrajectoryOptionInputs,
 } from "./trajectoryOptions";
+import { resolveCurrentNoraTrajectoryRecommendation } from "./resolveCurrentNoraTrajectoryRecommendation";
 import {
   assertRecommendedOptionInPresentedSet,
   buildConstrainedRecommendationCognitionAsk,
@@ -639,7 +639,26 @@ export async function proposeTrajectoryOptions(
   };

   const options = deriveTrajectoryOptions(inputs);
-  const baseRecommendation = deriveTrajectoryRecommendation(inputs);
+  const noraResolution = await resolveCurrentNoraTrajectoryRecommendation({
+    oa,
+    projectId: input.projectId,
+    cycleInstanceId: live.context.activeCycleInstanceId ?? null,
+    optionRefs: options.map((o) => o.optionRef),
+    optionInputs: inputs,
+  });
+  if (!noraResolution.ok) {
+    return {
+      ok: false,
+      code: noraResolution.code,
+      message: noraResolution.message,
+    };
+  }
+  const baseRecommendation = noraResolution.resolved.recommendation;
+  const recommendationBasisDigest =
+    noraResolution.resolved.recommendationBasisDigest;
+  const recommendationSource = noraResolution.resolved.recommendationSource;
+  const noraRecommendationEpistemicItemId =
+    noraResolution.resolved.noraRecommendationEpistemicItemId;
   const integrity = assertRecommendedOptionInPresentedSet({
     options,
     recommendedOptionRef: baseRecommendation.recommendedOptionRef,
@@ -657,8 +676,8 @@ export async function proposeTrajectoryOptions(
         recoveryContext.attemptStatus === "succeeded"
           ? "succès technique / résultat produit non prouvé"
           : `${recoveryContext.productOutcome} durable`
-      } (${recoveryContext.attemptId}, attempt=${recoveryContext.attemptStatus}) — sujet courant = recovery du même cycle, PAS un nouveau cadrage fonctionnel.`
-    : `Expliquer la recommandation canonique pour le cycle ${input.cycleTypeId}.`;
+      } (${recoveryContext.attemptId}, attempt=${recoveryContext.attemptStatus}) — sujet courant = recovery du même cycle, PAS un nouveau cadrage fonctionnel. Source Recommendation: ${recommendationSource}.`
+    : `Expliquer la recommandation canonique pour le cycle ${input.cycleTypeId}. Source Recommendation: ${recommendationSource}.`;
   const cognition = await reasonCanonicalRecommendationCognition({
     ckcPromptSection,
     recoveryCognitionSection,
@@ -865,6 +884,9 @@ export async function proposeTrajectoryOptions(
     optionSetRef,
     optionSetDigest,
     qualificationDigest,
+    recommendationBasisDigest,
+    recommendationSource,
+    noraRecommendationEpistemicItemId,
     trajectoryId: proposedTrajectoryId,
     candidateVersion: proposedVersion,
     optionRefs: options.map((o) => o.optionRef),

```

### decideTrajectory.diff

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts b/projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts
index 7d2ef607..1d47ed97 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts
@@ -46,6 +46,8 @@ import {
   PROPOSAL_SUBJECT_REFUSE_REF,
 } from "./proposalSubjectOptions";
 import { resolveW2QualificationInputs } from "./qualificationInputs";
+import { resolvePostEvidenceRecoveryContext } from "./resolvePostEvidenceRecoveryContext";
+import { resolveCurrentNoraTrajectoryRecommendation } from "./resolveCurrentNoraTrajectoryRecommendation";
 import type { DecideTrajectoryResult, TrajectoryOptionDto } from "./types";
 import type { F2ProposalStatus } from "../f2/types";
 import {
@@ -356,6 +358,70 @@ export async function decideTrajectory(
     };
   }

+  // PILOT-NORA-STUDIO-SEMANTIC-CONTINUITY-01 — Recommendation semantic basis seal.
+  // Legacy bindings without recommendationBasisDigest skip this check.
+  if (
+    typeof presented.recommendationBasisDigest === "string" &&
+    presented.recommendationBasisDigest.trim().length > 0 &&
+    presented.decisionSubjectMode !== "proposal"
+  ) {
+    const liveForBasis = await readLiveProjectContext(oa, input.projectId);
+    if (!liveForBasis.ok) {
+      return {
+        ok: false,
+        code: "OPTION_SET_STALE",
+        message:
+          "Contexte Project illisible pour re-résoudre la Recommendation — réinstruction requise.",
+      };
+    }
+    const recoveryLive = await resolvePostEvidenceRecoveryContext({
+      oa,
+      projectId: input.projectId,
+    });
+    if (!recoveryLive.ok) {
+      return {
+        ok: false,
+        code: "OPTION_SET_STALE",
+        message:
+          "Contexte recovery illisible pour re-résoudre la Recommendation — réinstruction requise.",
+      };
+    }
+    const liveRecommendation = await resolveCurrentNoraTrajectoryRecommendation({
+      oa,
+      projectId: input.projectId,
+      cycleInstanceId: liveForBasis.context.activeCycleInstanceId ?? null,
+      optionRefs: presented.optionRefs,
+      optionInputs: {
+        cycleTypeId: currentQual.inputs.cycleTypeId,
+        recommendedProfile: currentQual.inputs.recommendedProfile,
+        criticalSignalsPresent: currentQual.inputs.criticalSignalsPresent,
+        irreversible: currentQual.inputs.irreversible,
+        reservations: currentQual.inputs.reservations,
+        ckcAttribution: currentQual.inputs.ckcAttribution,
+        recoveryContext: recoveryLive.context,
+      },
+    });
+    if (!liveRecommendation.ok) {
+      return {
+        ok: false,
+        code: "OPTION_SET_STALE",
+        message:
+          "Impossible de re-résoudre la Recommendation courante — réinstruction requise. Aucune décision enregistrée.",
+      };
+    }
+    if (
+      liveRecommendation.resolved.recommendationBasisDigest !==
+      presented.recommendationBasisDigest
+    ) {
+      return {
+        ok: false,
+        code: "OPTION_SET_STALE",
+        message:
+          "La Recommendation sémantique a changé depuis la présentation — réinstruction requise. Aucune décision enregistrée.",
+      };
+    }
+  }
+
   const options = presented.options;
   const recommendedOptionRef = presented.recommendedOptionRef;
   const epistemicRefs = presented.epistemicRefs;

```

### presentedOptionSet.ts.diff

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/presentedOptionSet.ts b/projects/sfia-studio/app/features/project-assistant/w2/presentedOptionSet.ts
index b72b3da3..7724f68a 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/presentedOptionSet.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/presentedOptionSet.ts
@@ -47,6 +47,18 @@ export type PresentedOptionSetBinding = {
   readonly optionSetRef: string;
   readonly optionSetDigest: string;
   readonly qualificationDigest: string;
+  /**
+   * PILOT-NORA-STUDIO-SEMANTIC-CONTINUITY-01 — seals the Recommendation semantic
+   * basis (Nora ACW identity or deterministic fallback digest). At decide time,
+   * a material change of this basis → OPTION_SET_STALE.
+   * Optional for legacy bindings loaded before this macro.
+   */
+  readonly recommendationBasisDigest?: string | null;
+  readonly recommendationSource?:
+    | "nora_active_cycle"
+    | "deterministic_fallback"
+    | null;
+  readonly noraRecommendationEpistemicItemId?: string | null;
   /** Required for project_trajectory mode; null for proposal subject mode. */
   readonly trajectoryId: string | null;
   /** Required for project_trajectory mode; null for proposal subject mode. */

```

### studioCognitiveContext.ts.diff

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts b/projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts
index ea7a12fd..52f92741 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts
@@ -42,7 +42,8 @@ import {
   resolveActiveCycleCognitiveContext,
   type ActiveCycleCognitiveProjection,
 } from "./activeCycleCognitiveContext";
-import { ACTIVE_CYCLE_WORK_SOURCE } from "../materializeActiveCycleWork";
+import { ACTIVE_CYCLE_WORK_SOURCE, extractAcwRecommendedOptionRef } from "../materializeActiveCycleWork";
+import { pilotTrajectoryOptionLabel } from "../presentationLabels";
 import {
   buildReservationCompactForPrompt,
   formatReservationCompactForPrompt,
@@ -218,6 +219,23 @@ export type StudioActiveCycleWorkProjection = {
   readonly confidence?: string;
   readonly blocking?: boolean;
   readonly status: EpistemicItemStatus;
+  /** Structured Option identity when Recommendation binds a server Option. */
+  readonly recommendedOptionRef?: string | null;
+};
+
+/**
+ * Server-derived trajectory decision-support OptionRefs for Nora (read-only).
+ * Never authority; Nora may recommend only among these refs when present.
+ */
+export type StudioTrajectoryDecisionSupportProjection = {
+  readonly state: "PRESENT" | "NONE" | "UNAVAILABLE";
+  readonly optionRefs: readonly string[];
+  readonly optionLabels: readonly string[];
+  readonly currentNoraRecommendedOptionRef: string | null;
+  readonly currentRecommendationSource:
+    | "nora_active_cycle"
+    | "deterministic_fallback"
+    | null;
 };

 /**
@@ -242,6 +260,7 @@ export type StudioCognitiveContext = {
     readonly state: PresenceState;
     readonly items: readonly StudioActiveCycleWorkProjection[];
   };
+  readonly trajectoryDecisionSupport: StudioTrajectoryDecisionSupportProjection;
   readonly decisions: {
     readonly state: PresenceState;
     readonly items: readonly StudioDecisionProjection[];
@@ -379,6 +398,10 @@ function projectTrajectory(t: ProjectTrajectory): StudioTrajectoryProjection {
 function projectActiveCycleWorkItem(
   item: EpistemicItem,
 ): StudioActiveCycleWorkProjection {
+  const recommendedOptionRef =
+    item.type === "Recommendation"
+      ? extractAcwRecommendedOptionRef(item.relatedObjects)
+      : null;
   return Object.freeze({
     type: item.type,
     statement: clip(
@@ -388,6 +411,7 @@ function projectActiveCycleWorkItem(
     ...(item.confidence !== undefined ? { confidence: item.confidence } : {}),
     ...(item.blocking !== undefined ? { blocking: item.blocking } : {}),
     status: item.status,
+    recommendedOptionRef,
   });
 }

@@ -414,6 +438,12 @@ export async function composeStudioCognitiveContext(input: {
    * RESERVATION-CONTEXT-PILOT-CONFIRMATION-01 — server-validated focus only.
    */
   reservationFocus?: ValidatedReservationInteractionContext | null;
+  /**
+   * Optional server-precomputed decision-support (from
+   * resolveTrajectoryDecisionSupportProjection). Avoids pulling W2/server-only
+   * imports into this composer module.
+   */
+  trajectoryDecisionSupport?: StudioTrajectoryDecisionSupportProjection | null;
 }): Promise<ComposeStudioCognitiveContextResult> {
   const activeCycleInstanceId =
     input.activeCycleInstanceId ??
@@ -490,6 +520,13 @@ export async function composeStudioCognitiveContext(input: {
           state: "UNAVAILABLE" as const,
           items: Object.freeze([]),
         }),
+        trajectoryDecisionSupport: Object.freeze({
+          state: "UNAVAILABLE" as const,
+          optionRefs: Object.freeze([]),
+          optionLabels: Object.freeze([]),
+          currentNoraRecommendedOptionRef: null,
+          currentRecommendationSource: null,
+        }),
         decisions: Object.freeze({
           state: "UNAVAILABLE" as const,
           items: Object.freeze([]),
@@ -775,6 +812,16 @@ export async function composeStudioCognitiveContext(input: {
     }
   }

+  let trajectoryDecisionSupport: StudioTrajectoryDecisionSupportProjection =
+    input.trajectoryDecisionSupport ??
+    Object.freeze({
+      state: "NONE" as const,
+      optionRefs: Object.freeze([] as string[]),
+      optionLabels: Object.freeze([] as string[]),
+      currentNoraRecommendedOptionRef: null,
+      currentRecommendationSource: null,
+    });
+
   return {
     ok: true,
     context: Object.freeze({
@@ -785,6 +832,7 @@ export async function composeStudioCognitiveContext(input: {
         state: acwState,
         items: Object.freeze(acwItems),
       }),
+      trajectoryDecisionSupport,
       decisions: Object.freeze({
         state: decisionsState,
         items: Object.freeze(decisionItems),
@@ -898,6 +946,9 @@ export function buildStudioCognitivePromptSections(
           `• [${w.type}${w.status !== "active" ? `/${w.status}` : ""}]` +
             (w.confidence ? ` conf=${w.confidence}` : "") +
             (w.blocking === true ? " blocking" : "") +
+            (w.recommendedOptionRef
+              ? ` recommendedOptionRef=${w.recommendedOptionRef}`
+              : "") +
             ` — ${w.statement}`,
         );
       }
@@ -908,6 +959,32 @@ export function buildStudioCognitivePromptSections(
     } else {
       lines.push("Travail cognitif cycle ACTIVE : aucun item matérialisé encore.");
     }
+    const tds = ctx.trajectoryDecisionSupport;
+    if (tds.state === "PRESENT" && tds.optionRefs.length > 0) {
+      lines.push("");
+      lines.push(
+        "Options trajectoire serveur (decision-support — Nora ne peut recommander QUE parmi ces refs) :",
+      );
+      for (let i = 0; i < tds.optionRefs.length; i += 1) {
+        const ref = tds.optionRefs[i]!;
+        const label =
+          tds.optionLabels[i] ?? pilotTrajectoryOptionLabel(ref);
+        lines.push(`• ${ref} — ${label}`);
+      }
+      if (tds.currentNoraRecommendedOptionRef) {
+        lines.push(
+          `Recommendation Nora courante (structurée) : ${tds.currentNoraRecommendedOptionRef} (${pilotTrajectoryOptionLabel(tds.currentNoraRecommendedOptionRef)}) — PAS une HumanDecision.`,
+        );
+      } else {
+        lines.push(
+          "Aucune Recommendation Nora structurée courante pour ces Options — le fallback déterministe Studio s'applique jusqu'à émission Nora.",
+        );
+      }
+    } else if (tds.state === "UNAVAILABLE") {
+      lines.push(
+        "Decision-support trajectoire : UNAVAILABLE — ne pas inventer d'optionRefs.",
+      );
+    }
     if (ctx.reservationFocusSection) {
       lines.push("");
       lines.push(ctx.reservationFocusSection);

```

### orchestrateF2.ts.diff

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 54b9213f..9e8829b7 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -71,6 +71,7 @@ import {
   reasonWithResolvedCkcContext,
 } from "./ckcCognitiveContext";
 import { composeStudioCognitiveContext } from "./studioCognitiveContext";
+import { resolveTrajectoryDecisionSupportProjection } from "../w2/resolveTrajectoryDecisionSupportProjection";
 import {
   parseReservationInteractionContextInput,
   validateReservationInteractionContext,
@@ -1081,17 +1082,25 @@ export async function orchestrateAssistantSend(input: {
     // Pure read-only composition; NO reasonWithResolvedCkcContext; NO third model call.
     const registryRoot = resolveProductDoctrineRegistryRoot();
     const oa = getRuntimeApplicationService().oa;
+    const cycleForSupport =
+      reservationFocus?.cycleInstanceId ??
+      project.activeCycleInstanceId ??
+      null;
+    const trajectoryDecisionSupport =
+      await resolveTrajectoryDecisionSupportProjection({
+        oa,
+        projectId: project.projectId,
+        cycleInstanceId: cycleForSupport,
+      });
     const studioComposed = await composeStudioCognitiveContext({
       analysis,
       project,
       registryRoot,
       truthCContext: truthCContextForF1,
       oa,
-      activeCycleInstanceId:
-        reservationFocus?.cycleInstanceId ??
-        project.activeCycleInstanceId ??
-        null,
+      activeCycleInstanceId: cycleForSupport,
       reservationFocus,
+      trajectoryDecisionSupport,
     });
     if (!studioComposed.ok) {
       return {

```

### buildProjectSystemPrompt.ts.diff

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts b/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
index cd676229..f00ddf8e 100644
--- a/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
+++ b/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
@@ -312,6 +312,15 @@ function buildActiveCycleWorkOutputSection(
       "INTERDIT dans activeCycleWork : DecisionRef, EvidenceRef, HumanDecision, Fact,",
       "ExecutionContract ; jamais d'ids, d'authority, ni de provenance (le serveur les mints).",
     );
+    lines.push(
+      "=== Recommendation structurée (continuité Pilote/Nora/Studio) ===",
+      "Quand tu recommandes une Option trajectoire serveur (voir decision-support dans le contexte) :",
+      "émets type=Recommendation avec recommendedOptionRef = EXACTEMENT une des refs serveur",
+      "(ex. opt:trajectory:governed-gated | opt:trajectory:bounded-direct | opt:trajectory:clarify-first).",
+      "recommendedOptionRef est un champ structuré — JAMAIS déduit du texte statement.",
+      "Pour Recommendation hors Option trajectoire : recommendedOptionRef = null.",
+      "Recommendation ≠ HumanDecision ; n'exécute rien ; ne promeut pas de trajectoire.",
+    );
     lines.push(
       "=== INTÉGRITÉ ÉPISTÉMIQUE — Reservation ===",
       "Voie nominale : reservationDelta (pas activeCycleWork.Reservation).",

```

### orchestrateTurn.ts.diff

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index 695b9f6c..3ea69aaa 100644
--- a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
@@ -48,6 +48,7 @@ import {
   LIFECYCLE_RECOMMENDATION_MATERIALIZE_FAILURE_PILOTE_NOTICE,
   lifecycleRecommendationMaterializeFailurePiloteNotice,
 } from "./lifecycleRecommendationPiloteNotice";
+import { pilotTrajectoryOptionLabel } from "./presentationLabels";
 import { materializeActiveCycleWork } from "./materializeActiveCycleWork";
 import {
   materializeReservationDelta,
@@ -1134,10 +1135,25 @@ export async function orchestrateProjectAssistantTurn(input: {
     );
     // NORA-CONVERSATIONAL-INITIATIVE-01 / CR-NCI-03 — compose from the same
     // coherent guidance already normalized with Cognitive Stop (no second pass).
-    if (coherentEarly?.conversationGuidance) {
+    if (coherentEarly?.conversationGuidance || coherentEarly?.activeCycleWork) {
+      const structuredRecItem = coherentEarly.activeCycleWork?.items?.find(
+        (i) =>
+          i.type === "Recommendation" &&
+          typeof i.recommendedOptionRef === "string" &&
+          i.recommendedOptionRef.trim().length > 0,
+      );
+      const structuredRecommendation = structuredRecItem?.recommendedOptionRef
+        ? {
+            recommendedOptionRef: structuredRecItem.recommendedOptionRef.trim(),
+            optionLabel: pilotTrajectoryOptionLabel(
+              structuredRecItem.recommendedOptionRef,
+            ),
+          }
+        : null;
       assistantText = composePilotFacingAssistantText(
         assistantText,
-        coherentEarly.conversationGuidance,
+        coherentEarly.conversationGuidance ?? null,
+        structuredRecommendation,
       );
     }


```

### importBoundaries.test.ts.diff

```diff
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
index 9d5b46ee..c6ec3c07 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
@@ -123,10 +123,12 @@ describe("V2-A1 vertical-slice-runtime import boundaries", () => {
       "features/project-assistant/w2/proposeTrajectoryOptions.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/qualificationInputs.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/readCurrentGovernedExecutionContinuity.ts:@/lib/vertical-slice-runtime",
+      "features/project-assistant/w2/resolveCurrentNoraTrajectoryRecommendation.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/resolveDocsWriteArtifactAbsolutePath.ts:@/lib/vertical-slice-runtime/managedRepoRootBaseConfig",
       "features/project-assistant/w2/resolvePostEvidenceRecoveryContext.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/resolveProposalDecisionSubject.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/resolveRecoveryExecutionBinding.ts:@/lib/vertical-slice-runtime",
+      "features/project-assistant/w2/resolveTrajectoryDecisionSupportProjection.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/resolveTrustedProductLaunchContext.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/resolveTrustedProductLaunchContext.ts:@/lib/vertical-slice-runtime/managedRepoRootBaseConfig",
       "features/project-assistant/w2/resolveTrustedProductLaunchContext.ts:@/lib/vertical-slice-runtime/resolveBoundedReadOnlyBaseHeadSha",

```

### studioCognitiveContext.test.ts.diff

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/studioCognitiveContext.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/studioCognitiveContext.test.ts
index 3e5dcccf..2d52e150 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/studioCognitiveContext.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/studioCognitiveContext.test.ts
@@ -457,6 +457,13 @@ describe("CORR-PROOF-04 studioCognitiveContext composer", () => {
         state: "NONE" as const,
         items: [],
       },
+      trajectoryDecisionSupport: {
+        state: "NONE" as const,
+        optionRefs: [],
+        optionLabels: [],
+        currentNoraRecommendedOptionRef: null,
+        currentRecommendationSource: null,
+      },
       decisions: {
         state: "PRESENT" as const,
         items: [

```

### corrProof06.artifactObligation.d0.test.ts.diff

```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/cycle/corrProof06.artifactObligation.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/cycle/corrProof06.artifactObligation.d0.test.ts
index dd6aecbf..c26a0dd1 100644
--- a/projects/sfia-studio/app/__tests__/oa/cycle/corrProof06.artifactObligation.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/cycle/corrProof06.artifactObligation.d0.test.ts
@@ -709,6 +709,13 @@ describe("CORR-PROOF-06 — Artifact obligation selection & recovery", () => {
           }
         : null,
       activeCycleWorkItems: { state: "NONE" as const, items: [] },
+      trajectoryDecisionSupport: {
+        state: "NONE" as const,
+        optionRefs: [],
+        optionLabels: [],
+        currentNoraRecommendedOptionRef: null,
+        currentRecommendationSource: null,
+      },
       decisions: {
         state: "PRESENT" as const,
         items: input.decisions,

```

### resolveCurrentNoraTrajectoryRecommendation.ts (new)

```ts
/**
 * PILOT-NORA-STUDIO-SEMANTIC-CONTINUITY-01 — resolve the current Nora ACW
 * trajectory Recommendation for a decision-support OptionSet.
 *
 * Prefer a fresh validated Nora recommendedOptionRef when it belongs to the
 * server-derived OptionSet. Otherwise expose deterministic fallback explicitly.
 * Never silently pick among ambiguous Nora Recommendations.
 * Recommendation ≠ HumanDecision; never promotes trajectory.
 */

import { createHash } from "node:crypto";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import type { EpistemicItem } from "@/lib/oa/cycle";
import {
  ACTIVE_CYCLE_WORK_SOURCE,
  extractAcwRecommendedOptionRef,
} from "../materializeActiveCycleWork";
import type { TrajectoryRecommendationDto } from "./types";
import { computeDecisionBasisSourceDigest } from "@/lib/oa/decision";
import type { TrajectoryOptionInputs } from "./trajectoryOptions";
import { deriveTrajectoryRecommendation } from "./trajectoryOptions";

export type RecommendationSourceKind =
  | "nora_active_cycle"
  | "deterministic_fallback";

export type ResolvedTrajectoryRecommendation = {
  readonly recommendation: TrajectoryRecommendationDto;
  readonly recommendationSource: RecommendationSourceKind;
  readonly recommendationBasisDigest: string;
  readonly noraRecommendationEpistemicItemId: string | null;
  readonly noraRecommendationCreatedAt: string | null;
};

export type ResolveCurrentNoraTrajectoryRecommendationResult =
  | { readonly ok: true; readonly resolved: ResolvedTrajectoryRecommendation }
  | {
      readonly ok: false;
      readonly code:
        | "AMBIGUOUS_NORA_RECOMMENDATION"
        | "NORA_RECOMMENDATION_NOT_IN_OPTION_SET"
        | "EPISTEMIC_UNAVAILABLE";
      readonly message: string;
    };

function relatedToCycle(
  item: EpistemicItem,
  cycleInstanceId: string,
): boolean {
  return (item.relatedObjects ?? []).includes(cycleInstanceId);
}

function computeNoraBasisDigest(input: {
  readonly epistemicItemId: string;
  readonly recommendedOptionRef: string;
  readonly createdAt: string;
}): string {
  return computeDecisionBasisSourceDigest({
    kind: "nora_active_cycle_recommendation",
    epistemicItemId: input.epistemicItemId,
    recommendedOptionRef: input.recommendedOptionRef,
    createdAt: input.createdAt,
  });
}

function computeFallbackBasisDigest(input: {
  readonly recommendedOptionRef: string;
  readonly optionInputs: TrajectoryOptionInputs;
}): string {
  const recovery = input.optionInputs.recoveryContext;
  return computeDecisionBasisSourceDigest({
    kind: "deterministic_fallback_recommendation",
    recommendedOptionRef: input.recommendedOptionRef,
    cycleTypeId: input.optionInputs.cycleTypeId,
    recommendedProfile: input.optionInputs.recommendedProfile,
    criticalSignalsPresent: input.optionInputs.criticalSignalsPresent,
    irreversible: input.optionInputs.irreversible,
    reservations: [...input.optionInputs.reservations],
    recoveryAttemptId: recovery?.attemptId ?? null,
    recoveryProductOutcome: recovery?.productOutcome ?? null,
  });
}

/**
 * Pure selection among ACW Recommendation items (exported for tests).
 */
export function selectCurrentNoraTrajectoryRecommendationItems(input: {
  readonly items: readonly EpistemicItem[];
  readonly cycleInstanceId: string;
  readonly optionRefs: readonly string[];
  /** When set, ignore Nora Recommendations created at/before this HD timestamp. */
  readonly ignoreCreatedAtOnOrBefore?: string | null;
}):
  | { readonly ok: true; readonly item: EpistemicItem; readonly recommendedOptionRef: string }
  | { readonly ok: true; readonly item: null }
  | {
      readonly ok: false;
      readonly code: "AMBIGUOUS_NORA_RECOMMENDATION" | "NORA_RECOMMENDATION_NOT_IN_OPTION_SET";
      readonly message: string;
    } {
  const optionSet = new Set(input.optionRefs);
  const cutoff = input.ignoreCreatedAtOnOrBefore?.trim() || null;
  const candidates = input.items.filter((item) => {
    if (item.source !== ACTIVE_CYCLE_WORK_SOURCE) return false;
    if (item.type !== "Recommendation") return false;
    if (item.status !== "active") return false;
    if (!relatedToCycle(item, input.cycleInstanceId)) return false;
    if (cutoff && item.createdAt <= cutoff) return false;
    return extractAcwRecommendedOptionRef(item.relatedObjects) != null;
  });

  if (candidates.length === 0) {
    return { ok: true, item: null };
  }

  const withRefs = candidates.map((item) => ({
    item,
    ref: extractAcwRecommendedOptionRef(item.relatedObjects)!,
  }));

  const notInSet = withRefs.filter((c) => !optionSet.has(c.ref));
  const inSet = withRefs.filter((c) => optionSet.has(c.ref));

  // Any current Nora Recommendation that invents an option ref → fail-closed.
  if (notInSet.length > 0 && inSet.length === 0) {
    return {
      ok: false,
      code: "NORA_RECOMMENDATION_NOT_IN_OPTION_SET",
      message: `Recommendation Nora « ${notInSet[0]!.ref} » absente des Options serveur — aucune présentation inventée.`,
    };
  }

  if (inSet.length === 0) {
    return { ok: true, item: null };
  }

  const distinctRefs = new Set(inSet.map((c) => c.ref));
  if (distinctRefs.size > 1) {
    return {
      ok: false,
      code: "AMBIGUOUS_NORA_RECOMMENDATION",
      message:
        "Plusieurs Recommendations Nora courantes concurrentes — aucune sélection silencieuse.",
    };
  }

  // Newest by createdAt, then epistemicItemId for stability.
  const sorted = [...inSet].sort((a, b) => {
    const byCreated = b.item.createdAt.localeCompare(a.item.createdAt);
    if (byCreated !== 0) return byCreated;
    return b.item.epistemicItemId.localeCompare(a.item.epistemicItemId);
  });
  const winner = sorted[0]!;
  return {
    ok: true,
    item: winner.item,
    recommendedOptionRef: winner.ref,
  };
}

/**
 * Resolve recommendation for W2 present: Nora ACW when eligible, else
 * deterministic deriveTrajectoryRecommendation as explicit fallback.
 */
export async function resolveCurrentNoraTrajectoryRecommendation(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly cycleInstanceId: string | null;
  readonly optionRefs: readonly string[];
  readonly optionInputs: TrajectoryOptionInputs;
  readonly ignoreCreatedAtOnOrBefore?: string | null;
}): Promise<ResolveCurrentNoraTrajectoryRecommendationResult> {
  const fallback = deriveTrajectoryRecommendation(input.optionInputs);
  const fallbackDigest = computeFallbackBasisDigest({
    recommendedOptionRef: fallback.recommendedOptionRef,
    optionInputs: input.optionInputs,
  });

  if (!input.cycleInstanceId?.trim()) {
    return {
      ok: true,
      resolved: {
        recommendation: fallback,
        recommendationSource: "deterministic_fallback",
        recommendationBasisDigest: fallbackDigest,
        noraRecommendationEpistemicItemId: null,
        noraRecommendationCreatedAt: null,
      },
    };
  }

  let items: EpistemicItem[] = [];
  try {
    items = await input.oa.cycleServices.epistemic.listByProject(
      input.projectId,
    );
  } catch {
    return {
      ok: false,
      code: "EPISTEMIC_UNAVAILABLE",
      message:
        "État épistémique illisible — impossible de résoudre la Recommendation Nora courante.",
    };
  }

  const selected = selectCurrentNoraTrajectoryRecommendationItems({
    items,
    cycleInstanceId: input.cycleInstanceId,
    optionRefs: input.optionRefs,
    ignoreCreatedAtOnOrBefore: input.ignoreCreatedAtOnOrBefore,
  });

  if (!selected.ok) {
    return {
      ok: false,
      code: selected.code,
      message: selected.message,
    };
  }

  if (!selected.item) {
    return {
      ok: true,
      resolved: {
        recommendation: fallback,
        recommendationSource: "deterministic_fallback",
        recommendationBasisDigest: fallbackDigest,
        noraRecommendationEpistemicItemId: null,
        noraRecommendationCreatedAt: null,
      },
    };
  }

  const noraRecommendation: TrajectoryRecommendationDto = {
    label: "RECOMMANDATION — PAS UNE DÉCISION",
    recommendedOptionRef: selected.recommendedOptionRef,
    rationale:
      selected.item.statement.trim() ||
      `Nora recommande l'option ${selected.recommendedOptionRef} — pas une décision.`,
    isHumanDecision: false,
    promotesTrajectory: false,
    ckcAttribution: input.optionInputs.ckcAttribution,
    ckcProvenance: null,
  };

  return {
    ok: true,
    resolved: {
      recommendation: noraRecommendation,
      recommendationSource: "nora_active_cycle",
      recommendationBasisDigest: computeNoraBasisDigest({
        epistemicItemId: selected.item.epistemicItemId,
        recommendedOptionRef: selected.recommendedOptionRef,
        createdAt: selected.item.createdAt,
      }),
      noraRecommendationEpistemicItemId: selected.item.epistemicItemId,
      noraRecommendationCreatedAt: selected.item.createdAt,
    },
  };
}

/** Stable digest helper for tests / decide stale checks without re-listing. */
export function hashRecommendationBasisToken(token: string): string {
  return createHash("sha256").update(token, "utf8").digest("hex").slice(0, 32);
}

```

### resolveTrajectoryDecisionSupportProjection.ts (new)

```ts
/**
 * Server-only trajectory decision-support projection for Nora prompt.
 * Kept out of studioCognitiveContext static imports to preserve browser/test
 * import boundaries (vertical-slice-runtime is server-only).
 */
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import type { StudioTrajectoryDecisionSupportProjection } from "../f2/studioCognitiveContext";
import { deriveTrajectoryOptions } from "./trajectoryOptions";
import { resolvePostEvidenceRecoveryContext } from "./resolvePostEvidenceRecoveryContext";
import { selectCurrentNoraTrajectoryRecommendationItems } from "./resolveCurrentNoraTrajectoryRecommendation";
import { resolveW2QualificationInputs } from "./qualificationInputs";

export async function resolveTrajectoryDecisionSupportProjection(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly cycleInstanceId: string | null;
}): Promise<StudioTrajectoryDecisionSupportProjection> {
  if (!input.cycleInstanceId?.trim()) {
    return Object.freeze({
      state: "NONE",
      optionRefs: Object.freeze([]),
      optionLabels: Object.freeze([]),
      currentNoraRecommendedOptionRef: null,
      currentRecommendationSource: null,
    });
  }
  try {
    const qual = await resolveW2QualificationInputs({
      oa: input.oa,
      projectId: input.projectId,
    });
    const recovery = await resolvePostEvidenceRecoveryContext({
      oa: input.oa,
      projectId: input.projectId,
    });
    if (!qual.ok || !recovery.ok) {
      return Object.freeze({
        state: "UNAVAILABLE",
        optionRefs: Object.freeze([]),
        optionLabels: Object.freeze([]),
        currentNoraRecommendedOptionRef: null,
        currentRecommendationSource: null,
      });
    }
    const options = deriveTrajectoryOptions({
      ...qual.qualification.inputs,
      recoveryContext: recovery.context,
    });
    const optionRefs = options.map((o) => o.optionRef);
    const optionLabels = options.map((o) => o.label);
    let epistemic: Awaited<
      ReturnType<typeof input.oa.cycleServices.epistemic.listByProject>
    > = [];
    try {
      epistemic = await input.oa.cycleServices.epistemic.listByProject(
        input.projectId,
      );
    } catch {
      epistemic = [];
    }
    const noraSel = selectCurrentNoraTrajectoryRecommendationItems({
      items: epistemic,
      cycleInstanceId: input.cycleInstanceId,
      optionRefs,
    });
    const noraRef =
      noraSel.ok && noraSel.item ? noraSel.recommendedOptionRef : null;
    return Object.freeze({
      state: "PRESENT",
      optionRefs: Object.freeze(optionRefs),
      optionLabels: Object.freeze(optionLabels),
      currentNoraRecommendedOptionRef: noraRef,
      currentRecommendationSource: noraRef
        ? ("nora_active_cycle" as const)
        : ("deterministic_fallback" as const),
    });
  } catch {
    return Object.freeze({
      state: "UNAVAILABLE",
      optionRefs: Object.freeze([]),
      optionLabels: Object.freeze([]),
      currentNoraRecommendedOptionRef: null,
      currentRecommendationSource: null,
    });
  }
}

```

### pilotNoraStudioSemanticContinuity.d0.test.ts (new)

```ts
/**
 * PILOT-NORA-STUDIO-SEMANTIC-CONTINUITY-01 — deterministic Product regression.
 * Isolated Product/Session seams only — does NOT mutate real StudyFlow.
 */
import { describe, expect, it } from "vitest";
import {
  CLARIFY_OPTION_REF,
  GOVERNED_OPTION_REF,
  BOUNDED_OPTION_REF,
  deriveTrajectoryOptions,
  deriveTrajectoryRecommendation,
} from "@/features/project-assistant/w2/trajectoryOptions";
import {
  selectCurrentNoraTrajectoryRecommendationItems,
  resolveCurrentNoraTrajectoryRecommendation,
} from "@/features/project-assistant/w2/resolveCurrentNoraTrajectoryRecommendation";
import {
  ACTIVE_CYCLE_WORK_SOURCE,
  extractAcwRecommendedOptionRef,
} from "@/features/project-assistant/materializeActiveCycleWork";
import {
  isNoraActiveCycleWorkItem,
  normalizeActiveCycleRecommendedOptionRef,
  composePilotFacingAssistantText,
  type NoraActiveCycleWorkItem,
} from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import { assertRecommendedOptionInPresentedSet } from "@/features/project-assistant/w2/recommendationDecisionIntegrity";
import { computeOptionSetDigest } from "@/features/project-assistant/w2/presentedOptionSet";
import { pilotTrajectoryOptionLabel } from "@/features/project-assistant/presentationLabels";
import type { EpistemicItem } from "@/lib/oa/cycle";
import type { PostEvidenceRecoveryContext } from "@/features/project-assistant/w2/resolvePostEvidenceRecoveryContext";

const PROJECT_ID = "prj:semantic-continuity-test";
const CYCLE_ID = "cyc:semantic-continuity-test";

function recoveryContext(): PostEvidenceRecoveryContext {
  return {
    kind: "post_evidence_recovery",
    attemptId: "xat:test:fail",
    attemptStatus: "failed",
    stopReason: "REAL_WORKSPACE_INVALID:base_head_sha_missing",
    executionContractId: "xct:test",
    evidenceId: "ev:test",
    reviewBundleId: "rb:test",
    productOutcome: "FAIL",
    recommendationKind: "recover",
    requiresHumanDecision: true,
    headline: "Diagnostiquer ou replanifier après échec",
    rationale: "Échec technique durable",
    nextStep: "recovery_diagnose_or_replan",
    realProcessInvoked: true,
    businessEffectProven: false,
    w3cEpistemicItemId: "epi:w3c-rec:test",
  };
}

function optionInputs() {
  return {
    cycleTypeId: "cyc:framing",
    recommendedProfile: "Light",
    criticalSignalsPresent: false,
    irreversible: false,
    reservations: [] as string[],
    ckcAttribution: null,
    recoveryContext: recoveryContext(),
  };
}

function acwRecommendationItem(input: {
  id: string;
  ref: string;
  statement: string;
  createdAt: string;
}): EpistemicItem {
  return {
    schemaVersion: "0.1.0-oa",
    epistemicItemId: input.id,
    type: "Recommendation",
    statement: input.statement,
    status: "active",
    source: ACTIVE_CYCLE_WORK_SOURCE,
    createdBy: {
      actorId: "actor:nora",
      role: "agent",
      displayName: "Nora",
      authorityLevel: "N1",
    },
    createdAt: input.createdAt,
    relatedObjects: [PROJECT_ID, CYCLE_ID, input.ref],
  };
}

describe("PILOT-NORA-STUDIO-SEMANTIC-CONTINUITY-01", () => {
  it("schema accepts Recommendation with structured recommendedOptionRef", () => {
    const item: NoraActiveCycleWorkItem = {
      type: "Recommendation",
      statement: "Nouvelle tentative gouvernée après diagnostic clarifié.",
      confidence: "high",
      blocking: null,
      recommendedOptionRef: GOVERNED_OPTION_REF,
    };
    expect(isNoraActiveCycleWorkItem(item)).toBe(true);
    expect(normalizeActiveCycleRecommendedOptionRef(item.recommendedOptionRef)).toBe(
      GOVERNED_OPTION_REF,
    );
  });

  it("rejects invented recommendedOptionRef shape", () => {
    expect(
      isNoraActiveCycleWorkItem({
        type: "Recommendation",
        statement: "x",
        confidence: null,
        blocking: null,
        recommendedOptionRef: "not-an-option",
      }),
    ).toBe(false);
    expect(normalizeActiveCycleRecommendedOptionRef("Préparer…")).toBe(null);
  });

  it("deterministic fallback remains clarify-first when no Nora Recommendation", () => {
    const inputs = optionInputs();
    const options = deriveTrajectoryOptions(inputs);
    expect(options.map((o) => o.optionRef)).toEqual([
      GOVERNED_OPTION_REF,
      BOUNDED_OPTION_REF,
      CLARIFY_OPTION_REF,
    ]);
    const fallback = deriveTrajectoryRecommendation(inputs);
    expect(fallback.recommendedOptionRef).toBe(CLARIFY_OPTION_REF);

    const selected = selectCurrentNoraTrajectoryRecommendationItems({
      items: [],
      cycleInstanceId: CYCLE_ID,
      optionRefs: options.map((o) => o.optionRef),
    });
    expect(selected.ok).toBe(true);
    if (selected.ok) expect(selected.item).toBeNull();
  });

  it("STATE1 → Nora governed-gated becomes CURRENT recommendedOptionRef (not clarify-first)", () => {
    const inputs = optionInputs();
    const options = deriveTrajectoryOptions(inputs);
    const noraItem = acwRecommendationItem({
      id: "epi:acw:gov1",
      ref: GOVERNED_OPTION_REF,
      statement: "Diagnostic clarifié — tenter une nouvelle exécution gouvernée.",
      createdAt: "2026-09-26T01:00:00.000Z",
    });
    const selected = selectCurrentNoraTrajectoryRecommendationItems({
      items: [noraItem],
      cycleInstanceId: CYCLE_ID,
      optionRefs: options.map((o) => o.optionRef),
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok || !selected.item) throw new Error("expected nora item");
    expect(selected.recommendedOptionRef).toBe(GOVERNED_OPTION_REF);

    const integrity = assertRecommendedOptionInPresentedSet({
      options,
      recommendedOptionRef: selected.recommendedOptionRef,
    });
    expect(integrity.ok).toBe(true);

    // Clarify still exists as Option, not CURRENT recommendation.
    expect(options.some((o) => o.optionRef === CLARIFY_OPTION_REF)).toBe(true);
    expect(selected.recommendedOptionRef).not.toBe(CLARIFY_OPTION_REF);

    const chat = composePilotFacingAssistantText(
      "Le FAIL reste FAIL. Deux voies de recovery.",
      null,
      {
        recommendedOptionRef: GOVERNED_OPTION_REF,
        optionLabel: pilotTrajectoryOptionLabel(GOVERNED_OPTION_REF),
      },
    );
    expect(chat).toContain(pilotTrajectoryOptionLabel(GOVERNED_OPTION_REF));
    expect(chat).toContain("pas une décision");
  });

  it("A — Nora option ref not in OptionSet → fail-closed", () => {
    const options = deriveTrajectoryOptions(optionInputs());
    const selected = selectCurrentNoraTrajectoryRecommendationItems({
      items: [
        acwRecommendationItem({
          id: "epi:acw:invented",
          ref: "opt:trajectory:invented-not-presented",
          statement: "Invented",
          createdAt: "2026-09-26T01:00:00.000Z",
        }),
      ],
      cycleInstanceId: CYCLE_ID,
      optionRefs: options.map((o) => o.optionRef),
    });
    expect(selected.ok).toBe(false);
    if (!selected.ok) {
      expect(selected.code).toBe("NORA_RECOMMENDATION_NOT_IN_OPTION_SET");
    }
  });

  it("B — ambiguous Nora Recommendations → no silent selection", () => {
    const options = deriveTrajectoryOptions(optionInputs());
    const selected = selectCurrentNoraTrajectoryRecommendationItems({
      items: [
        acwRecommendationItem({
          id: "epi:acw:a",
          ref: GOVERNED_OPTION_REF,
          statement: "A",
          createdAt: "2026-09-26T01:00:00.000Z",
        }),
        acwRecommendationItem({
          id: "epi:acw:b",
          ref: CLARIFY_OPTION_REF,
          statement: "B",
          createdAt: "2026-09-26T01:01:00.000Z",
        }),
      ],
      cycleInstanceId: CYCLE_ID,
      optionRefs: options.map((o) => o.optionRef),
    });
    expect(selected.ok).toBe(false);
    if (!selected.ok) {
      expect(selected.code).toBe("AMBIGUOUS_NORA_RECOMMENDATION");
    }
  });

  it("E — HumanDecision may choose non-recommended presented Option", () => {
    const options = deriveTrajectoryOptions(optionInputs());
    const integrity = assertRecommendedOptionInPresentedSet({
      options,
      recommendedOptionRef: GOVERNED_OPTION_REF,
    });
    expect(integrity.ok).toBe(true);
    // Selecting clarify while governed is recommended remains valid presentation membership.
    expect(options.some((o) => o.optionRef === CLARIFY_OPTION_REF)).toBe(true);
  });

  it("F — option not presented fails integrity", () => {
    const options = deriveTrajectoryOptions(optionInputs());
    const integrity = assertRecommendedOptionInPresentedSet({
      options,
      recommendedOptionRef: "opt:trajectory:not-presented",
    });
    expect(integrity.ok).toBe(false);
  });

  it("I — Nora Recommendation older than accepted HD cutoff is ignored", () => {
    const options = deriveTrajectoryOptions(optionInputs());
    const selected = selectCurrentNoraTrajectoryRecommendationItems({
      items: [
        acwRecommendationItem({
          id: "epi:acw:old",
          ref: CLARIFY_OPTION_REF,
          statement: "Old clarify",
          createdAt: "2026-09-26T01:00:00.000Z",
        }),
      ],
      cycleInstanceId: CYCLE_ID,
      optionRefs: options.map((o) => o.optionRef),
      ignoreCreatedAtOnOrBefore: "2026-09-26T02:00:00.000Z",
    });
    expect(selected.ok).toBe(true);
    if (selected.ok) expect(selected.item).toBeNull();
  });

  it("recommendation basis digests differ between Nora and fallback", async () => {
    const oa = {
      cycleServices: {
        epistemic: {
          listByProject: async () => [
            acwRecommendationItem({
              id: "epi:acw:gov",
              ref: GOVERNED_OPTION_REF,
              statement: "Governed",
              createdAt: "2026-09-26T03:00:00.000Z",
            }),
          ],
        },
      },
    } as never;

    const inputs = optionInputs();
    const options = deriveTrajectoryOptions(inputs);
    const withNora = await resolveCurrentNoraTrajectoryRecommendation({
      oa,
      projectId: PROJECT_ID,
      cycleInstanceId: CYCLE_ID,
      optionRefs: options.map((o) => o.optionRef),
      optionInputs: inputs,
    });
    expect(withNora.ok).toBe(true);
    if (!withNora.ok) throw new Error("expected ok");
    expect(withNora.resolved.recommendationSource).toBe("nora_active_cycle");
    expect(withNora.resolved.recommendation.recommendedOptionRef).toBe(
      GOVERNED_OPTION_REF,
    );

    const withoutNora = await resolveCurrentNoraTrajectoryRecommendation({
      oa: {
        cycleServices: {
          epistemic: { listByProject: async () => [] },
        },
      } as never,
      projectId: PROJECT_ID,
      cycleInstanceId: CYCLE_ID,
      optionRefs: options.map((o) => o.optionRef),
      optionInputs: inputs,
    });
    expect(withoutNora.ok).toBe(true);
    if (!withoutNora.ok) throw new Error("expected ok");
    expect(withoutNora.resolved.recommendationSource).toBe(
      "deterministic_fallback",
    );
    expect(withoutNora.resolved.recommendation.recommendedOptionRef).toBe(
      CLARIFY_OPTION_REF,
    );
    expect(withNora.resolved.recommendationBasisDigest).not.toBe(
      withoutNora.resolved.recommendationBasisDigest,
    );

    // PresentedOptionSet digests differ when recommendedOptionRef differs.
    const digestNora = computeOptionSetDigest({
      cycleTypeId: inputs.cycleTypeId,
      recommendedProfile: inputs.recommendedProfile,
      criticalSignalsPresent: inputs.criticalSignalsPresent,
      irreversible: inputs.irreversible,
      reservations: inputs.reservations,
      options,
      recommendedOptionRef: GOVERNED_OPTION_REF,
    });
    const digestFallback = computeOptionSetDigest({
      cycleTypeId: inputs.cycleTypeId,
      recommendedProfile: inputs.recommendedProfile,
      criticalSignalsPresent: inputs.criticalSignalsPresent,
      irreversible: inputs.irreversible,
      reservations: inputs.reservations,
      options,
      recommendedOptionRef: CLARIFY_OPTION_REF,
    });
    expect(digestNora).not.toBe(digestFallback);
  });

  it("extractAcwRecommendedOptionRef prefers trajectory option refs", () => {
    expect(
      extractAcwRecommendedOptionRef([
        PROJECT_ID,
        CYCLE_ID,
        GOVERNED_OPTION_REF,
      ]),
    ).toBe(GOVERNED_OPTION_REF);
  });

  it("G — Recommendation alone never promotes (structural denials)", () => {
    const rec = deriveTrajectoryRecommendation(optionInputs());
    expect(rec.isHumanDecision).toBe(false);
    expect(rec.promotesTrajectory).toBe(false);
  });
});

```
