# GI-ORION-NORA-COHERENCE-CORR-01 — Review Pack FULL

Timestamp: 2026-11-01T09:35:00Z (authoring)
Cycle: GI-ORION-NORA-COHERENCE-CORR-01
Mode: FULL mono-campaign
Original corrective: ORION-NORA-COHERENCE-CORR-01
Product QA campaign: AKG-M5-L3S2-FRESH-LIVE-QA-01

## GO Morris (exact)

COMMIT PROJECT : AUTHORIZED
PUSH PROJECT BRANCH : AUTHORIZED
OPEN PRODUCT + R24 PR : AUTHORIZED
SCOPED PRR R24 MODIFICATIONS : AUTHORIZED
L3 REVIEW HANDOFF : AUTHORIZED
MERGE : NOT AUTHORIZED
BRANCH DELETION : NOT AUTHORIZED
CURSOR REAL ACTIVATION : NOT AUTHORIZED
G-REAL / V3 PROMOTION : NOT AUTHORIZED

## 1–2. Initial / Final Git Truth

| Item | Value |
|---|---|
| Baseline main (start+final) | `cd2020c82ecdcdaa073debd6985ee9c113bfba3e` |
| Branch | `feat/akg-m5-l3s2-orion-nora-coherence-corr-01` |
| Product commit (COMMIT 1) | `9bd22f875d01404989a03de5db2c96e396e6d89c` |
| R24 commit (COMMIT 2) | `9b51a51c107fc44f6c473e0e2e372f645ea212ca` |
| Final HEAD / remote tip | `9b51a51c107fc44f6c473e0e2e372f645ea212ca` |
| Worktree | `/Users/morris/Projects/sfia-workspace-feat-akg-m5-l3s2-orion-nora-coherence-corr-01` |
| Prior handoff tip (consumed) | `c4218edb` / blob `cdfcc8a3` |
| Remote branch before push | absent → created FF |
| Existing PR for branch | none → opened #635 |

Verified: corrective commit exists locally; main unchanged; not already integrated; only `.tmp-sfia-review` dirty (not in PR).

## 3. Convergence pre-check / V3-F05 / L3-S2

Sources read: cycle execution template; routing guide; chatgpt-cursor operating model (PR readiness, Fake/Real, FULL pack, handoff); convergence doctrine/roadmap; product-completion cadrage; M5 trajectory requalification; PRR README/03/06/07/08/09 + manifest; doctrine 33/34/35; prior ORION handoff.

Trajectory: V3-F05; L3-S2 OPEN; supports QA-02 / R-LIVE-EMIT / EP-S2-08 / R-STOP-BROWSER / R-SRV-RESTART without closing them.

## 4. R23 architecture

Pilot → Nora structuredOutput → Product coherence → LifecycleRecommendation CURRENT → Memory B → FramingContinuity snapshot → ConversationSurface / FramingContinuityCard.

Coverage classification:
- CURRENT identity / catalog label: **BEHAVIOR PROVEN AT TESTED SCOPE** (DET + LIVE seam)
- candidate vs CURRENT: **COVERAGE VERIFIED**
- narrative vs presentation / disposition footer: **BEHAVIOR PROVEN AT TESTED SCOPE**
- typed Studio notices: **BEHAVIOR PROVEN AT TESTED SCOPE**
- durable rehydrate: **COVERAGE VERIFIED** (DET); browser reload screenshot **KNOWN GAP**
- CTA currentness: **COVERAGE VERIFIED**
- INV-REC-NE-HD / no silent HD / no auto-START: **COVERAGE VERIFIED**
- Cursor REAL OFF: **DOCUMENTED + OBSERVED**

## 5. Original ORION incident

Project ORION `prj:b0883ca8-2411-493d-94ff-e386d176956a`. CURRENT Rec `epi:lr:6b133252883a1013:20261101T073443162Z` → `cyc:functional-design`. Pilot asked Cadrage vs Conception; card showed Cadrage exploratoire; response dual+notice+`CONTRADICTION CANDIDATE`. HD=0. Historical seq 3 preserved after correction.

## 6. Root causes A/B (code-level)

**A — Framing card:** `projectAssistantReadFramingContinuityAction` catalogLabel chain omitted CURRENT Rec; UI defaulted to Cadrage + exploratoire.

**B — NAP:** empty narrative left contaminated `turn.text` with disposition footer; `buildDurableAssistantContentForTurn` false-divergent.

## 7. Product implementation

See complete patches below. Mechanisms reused: selectCurrentLifecycleRecommendations, CORR-A1B, NAP-SINGLE, FramingContinuity — no second recommendation store.

## 8. Invariants preserved

INV-REC-NE-HD; CURRENT from Product; prose ≠ CURRENT replace; disposition ≠ narrative; true divergence fail-closed; false divergence not manufactured; A1 full when admissible; no invent Cadrage; exploratoire Framing-only; no START from recommendation alone; Cursor REAL OFF.

## 9–10. Complete Product modified patches + new files

### name-status `origin/main...HEAD`

A	projects/sfia-studio/app/__tests__/nora-cognitive-runtime/orionNoraCoherenceCorr01.d0.test.ts
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/framingContinuityCard.ui.test.tsx
A	projects/sfia-studio/app/__tests__/project-assistant/orionNoraCoherenceCorr01.live.test.ts
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/FramingContinuityCard.tsx
M	projects/sfia-studio/app/features/project-assistant/f2/chatFirstFramingContinuity.ts
M	projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
M	projects/sfia-studio/app/features/project-assistant/preCycleCandidateTrajectoryActions.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
A	projects/sfia-studio/app/scripts/orion-coherence-corr-01-live-proof.ts
M	projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
M	projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
M	projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
M	projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
M	projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
M	projects/sfia-studio/production-runtime-reference/README.md
M	projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
### Diffstat
 .../orionNoraCoherenceCorr01.d0.test.ts            | 314 +++++++++++++++++++++
 .../framingContinuityCard.ui.test.tsx              |  26 ++
 .../orionNoraCoherenceCorr01.live.test.ts          | 182 ++++++++++++
 .../surfaces/FramingContinuityCard.tsx             |  32 ++-
 .../f2/chatFirstFramingContinuity.ts               |  72 ++++-
 .../features/project-assistant/orchestrateTurn.ts  |  21 +-
 .../preCycleCandidateTrajectoryActions.ts          |  54 +++-
 .../noraAdaptivePresentation.ts                    |  56 +++-
 .../noraProductTurnOutputType.ts                   |   3 +
 .../scripts/orion-coherence-corr-01-live-proof.ts  | 186 ++++++++++++
 .../03-end-to-end-flow-catalog.md                  |  14 +
 .../06-persistence-restart-and-recovery.md         |  10 +
 .../07-authority-invariants-and-failure-modes.md   |  10 +
 .../08-test-proof-and-conformance-map.md           |  12 +
 ...9-known-gaps-reserves-and-current-boundaries.md |  14 +
 .../production-runtime-reference/README.md         |  12 +
 .../production-runtime-reference.manifest.json     |  18 +-
 17 files changed, 1001 insertions(+), 35 deletions(-)
### Complete useful Product MODIFIED patch (commit 9bd22f87)

```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/framingContinuityCard.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/framingContinuityCard.ui.test.tsx
index e93b4f93..02650761 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/framingContinuityCard.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/framingContinuityCard.ui.test.tsx
@@ -55,6 +55,9 @@ describe("FramingContinuityCard", () => {
     expect(screen.getByTestId("framing-continuity-authority").textContent).toMatch(
       /Vous décidez/,
     );
+    expect(screen.getByTestId("framing-continuity-title").textContent).toBe(
+      "Commencer par un « Cadrage » exploratoire",
+    );
     expect(
       screen.getByTestId("framing-continuity-card").textContent,
     ).not.toMatch(/HumanDecision|gate F01|Recommendation ≠/i);
@@ -62,6 +65,29 @@ describe("FramingContinuityCard", () => {
     expect(onPrepare).toHaveBeenCalledTimes(1);
   });

+  it("ORION — recommendation_ready for Conception does not invent Cadrage exploratoire", () => {
+    render(
+      <FramingContinuityCard
+        continuity={snap({
+          phase: "recommendation_ready",
+          catalogLabel: "Conception fonctionnelle",
+          targetCycleTypeId: "cyc:functional-design",
+          message:
+            "Je recommande de commencer par un « Conception fonctionnelle ». Vous pouvez préparer cette direction, puis la valider avant tout démarrage.",
+        })}
+        busy={false}
+        error={null}
+        onPrepareCandidate={vi.fn()}
+        onApproveCandidate={vi.fn()}
+        onPrepareCycle={vi.fn()}
+        onStartPrepared={vi.fn()}
+      />,
+    );
+    const title = screen.getByTestId("framing-continuity-title").textContent ?? "";
+    expect(title).toBe("Commencer par un « Conception fonctionnelle »");
+    expect(title).not.toMatch(/Cadrage|exploratoire/);
+  });
+
   it("awaiting_trajectory_decision requires digest + examination; keep exploring is non-mutating", () => {
     const onApprove = vi.fn();
     const onKeep = vi.fn();
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/FramingContinuityCard.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/FramingContinuityCard.tsx
index 93b8b3a1..f017a5d2 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/FramingContinuityCard.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/FramingContinuityCard.tsx
@@ -7,7 +7,10 @@
  * Pilot-facing copy only — no internal governance jargon.
  */

-import type { FramingContinuitySnapshot } from "@/features/project-assistant/f2/chatFirstFramingContinuity";
+import {
+  framingContinuityRecommendationReadyTitle,
+  type FramingContinuitySnapshot,
+} from "@/features/project-assistant/f2/chatFirstFramingContinuity";
 import styles from "./GovernedDecisionCard.module.css";

 export type FramingContinuityCardProps = {
@@ -31,7 +34,8 @@ export function FramingContinuityCard({
   onStartPrepared,
   onKeepExploring,
 }: FramingContinuityCardProps) {
-  const cycle = (continuity.catalogLabel ?? "").trim() || "Cadrage";
+  const cycle = (continuity.catalogLabel ?? "").trim();
+  const cyclePhrase = cycle ? `« ${cycle} »` : "ce cycle";
   const phase = continuity.phase;
   const examination = continuity.examination;

@@ -46,19 +50,27 @@ export function FramingContinuityCard({

   const title =
     phase === "recommendation_ready"
-      ? `Commencer par un « ${cycle} » exploratoire`
+      ? framingContinuityRecommendationReadyTitle({
+          catalogLabel: continuity.catalogLabel,
+          targetCycleTypeId: continuity.targetCycleTypeId,
+        })
       : phase === "awaiting_trajectory_decision"
-        ? `Examiner la trajectoire pour « ${cycle} »`
+        ? `Examiner la trajectoire pour ${cyclePhrase}`
         : phase === "trajectory_decided_prepare_cycle"
-          ? `Préparer le cycle « ${cycle} »`
+          ? cycle
+            ? `Préparer le cycle « ${cycle} »`
+            : "Préparer le cycle"
           : phase === "ready_to_start"
-            ? `Démarrer « ${cycle} »`
-            : continuity.message || `Continuer vers « ${cycle} »`;
+            ? cycle
+              ? `Démarrer « ${cycle} »`
+              : "Démarrer le cycle"
+            : continuity.message ||
+              (cycle ? `Continuer vers « ${cycle} »` : "Continuer");

   const optionBody =
     phase === "awaiting_trajectory_decision"
       ? continuity.approvalOptionLabel?.trim() ||
-        `Valider cette direction pour « ${cycle} ».`
+        `Valider cette direction pour ${cyclePhrase}.`
       : continuity.message;

   const primaryLabel =
@@ -77,7 +89,9 @@ export function FramingContinuityCard({
           : phase === "ready_to_start"
             ? busy
               ? "Démarrage…"
-              : `Démarrer le ${cycle}`
+              : cycle
+                ? `Démarrer le ${cycle}`
+                : "Démarrer le cycle"
             : null;

   const primaryDisabled =
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/chatFirstFramingContinuity.ts b/projects/sfia-studio/app/features/project-assistant/f2/chatFirstFramingContinuity.ts
index f05a57dc..a3fb1100 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/chatFirstFramingContinuity.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/chatFirstFramingContinuity.ts
@@ -58,7 +58,10 @@ export type FramingContinuitySnapshot = {
 export function framingTrajectoryValidationImplications(
   catalogLabel: string | null,
 ): string {
-  const cycle = (catalogLabel ?? "").trim() || "Cadrage";
+  const cycle = (catalogLabel ?? "").trim();
+  if (!cycle) {
+    return `Valider enregistre votre décision sur cette trajectoire et permet de préparer le cycle. Cela ne démarre pas le cycle et n'exécute rien.`;
+  }
   return `Valider enregistre votre décision sur cette trajectoire pour « ${cycle} » et permet de préparer le cycle. Cela ne démarre pas le cycle et n'exécute rien.`;
 }

@@ -144,24 +147,77 @@ export function buildFramingTrajectoryExamination(input: {
   };
 }

+/**
+ * ORION-NORA-COHERENCE-CORR-01 — « exploratoire » only for Framing/Cadrage.
+ * Never append it to Conception fonctionnelle or other catalog cycles.
+ */
+export function isFramingExploratoryCycleLabel(input: {
+  readonly catalogLabel: string | null | undefined;
+  readonly targetCycleTypeId?: string | null | undefined;
+}): boolean {
+  const typeId = (input.targetCycleTypeId ?? "").trim();
+  if (typeId === "cyc:framing") return true;
+  const label = normalizeCompare(input.catalogLabel ?? "");
+  return label === "cadrage";
+}
+
+/**
+ * Pilot-facing recommendation_ready title — Product catalog label only.
+ * Defaults to a neutral title when label is unknown (never invent « Cadrage »).
+ */
+export function framingContinuityRecommendationReadyTitle(input: {
+  readonly catalogLabel: string | null | undefined;
+  readonly targetCycleTypeId?: string | null | undefined;
+}): string {
+  const cycle = (input.catalogLabel ?? "").trim();
+  if (!cycle) {
+    return "Recommandation de prochain cycle disponible";
+  }
+  if (
+    isFramingExploratoryCycleLabel({
+      catalogLabel: cycle,
+      targetCycleTypeId: input.targetCycleTypeId,
+    })
+  ) {
+    return `Commencer par un « ${cycle} » exploratoire`;
+  }
+  return `Commencer par un « ${cycle} »`;
+}
+
 /** Pilot-facing copy — no internal governance jargon. */
 export function framingContinuityPilotMessage(
   phase: FramingContinuityPhase,
   catalogLabel: string | null,
+  targetCycleTypeId?: string | null,
 ): string {
-  const cycle = (catalogLabel ?? "").trim() || "Cadrage";
+  const cycle = (catalogLabel ?? "").trim();
+  const cyclePhrase = cycle ? `« ${cycle} »` : "ce cycle";
   switch (phase) {
-    case "recommendation_ready":
-      return `Je recommande de commencer par un « ${cycle} » exploratoire. Vous pouvez préparer cette direction, puis la valider avant tout démarrage.`;
+    case "recommendation_ready": {
+      if (!cycle) {
+        return `Une recommandation Product de prochain cycle est disponible. Vous pouvez préparer cette direction, puis la valider avant tout démarrage.`;
+      }
+      const exploratory = isFramingExploratoryCycleLabel({
+        catalogLabel: cycle,
+        targetCycleTypeId,
+      })
+        ? " exploratoire"
+        : "";
+      return `Je recommande de commencer par un « ${cycle} »${exploratory}. Vous pouvez préparer cette direction, puis la valider avant tout démarrage.`;
+    }
     case "awaiting_trajectory_decision":
-      return `La trajectoire proposée pour « ${cycle} » est prête à examiner. Validez cette direction pour continuer — un simple « ok » ne suffit pas.`;
+      return `La trajectoire proposée pour ${cyclePhrase} est prête à examiner. Validez cette direction pour continuer — un simple « ok » ne suffit pas.`;
     case "trajectory_decided_prepare_cycle":
-      return `La direction pour « ${cycle} » est validée. Préparez le cycle, puis démarrez-le quand vous serez prêt.`;
+      return `La direction pour ${cyclePhrase} est validée. Préparez le cycle, puis démarrez-le quand vous serez prêt.`;
     case "ready_to_start":
-      return `Le cycle « ${cycle} » est prêt. Vous pouvez le démarrer dans la conversation.`;
+      return cycle
+        ? `Le cycle « ${cycle} » est prêt. Vous pouvez le démarrer dans la conversation.`
+        : `Le cycle est prêt. Vous pouvez le démarrer dans la conversation.`;
     case "active":
       // UX-04 — pilot-facing; no technical cycle instance ids.
-      return `Le ${cycle} est maintenant actif.`;
+      return cycle
+        ? `Le ${cycle} est maintenant actif.`
+        : `Le cycle est maintenant actif.`;
     case "blocked_no_recommendation":
       return `Aucune recommandation courante n'est disponible pour préparer le premier cycle. Reformulez avec Nora.`;
     case "blocked_stale_or_incomplete":
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index 028fd8de..ddfd8ec9 100644
--- a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
@@ -49,6 +49,7 @@ import {
   buildDurableAssistantContentForTurn,
   normalizeStudioControlNotices,
   serializeStudioControlNotices,
+  NORA_CONTRADICTION_CANDIDATE_PILOTE_NOTICE,
 } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
 import { materializeLifecycleRecommendationFromStructuredOutput } from "@/lib/oa/cycle/application/lifecycleRecommendation/materializeFromProductTurn";
 import { NORA_LIFECYCLE_RECOMMENDATION_ACTOR } from "@/lib/oa/cycle/application/lifecycleRecommendation/noraActor";
@@ -860,9 +861,11 @@ export async function orchestrateProjectAssistantTurn(input: {
         lifecycleRecommendationContinuity =
           coherentEarly.lifecycleRecommendationContinuity;
       }
-      if (coherentEarly?.narrative) {
+      // ORION-NORA-COHERENCE-CORR-01 — prefer structured narrative even when empty
+      // so turn.text contradiction footers do not contaminate NAP classification.
+      if (coherentEarly && typeof coherentEarly.narrative === "string") {
         assistantText = coherentEarly.narrative;
-      } else if (extracted.narrative) {
+      } else if (typeof extracted.narrative === "string") {
         assistantText = extracted.narrative;
       }
       // Positive enforcement: EMIT without LR, or EMIT+LR with incompatible
@@ -1573,6 +1576,16 @@ export async function orchestrateProjectAssistantTurn(input: {
     });
     assistantText = durableBuilt.contentCore;

+    // ORION-NORA-COHERENCE-CORR-01 — contradiction candidate stays observable as
+    // typed Studio notice (Pilot-intelligible), never raw marker in métier body.
+    const contradictionCandidateNotice =
+      turn.contradictionDisposition?.disposition === "candidate" ||
+      durableBuilt.strippedDispositionMarkers.some((m) =>
+        /contradiction candidate/i.test(m),
+      )
+        ? NORA_CONTRADICTION_CANDIDATE_PILOTE_NOTICE
+        : null;
+
     // CORR-NAP-02 — typed Studio control notices (server provenance only).
     // Mirrored into durable content for plain fallback; appendix trust uses
     // the typed array, never forged "[Studio]" prose from Nora.
@@ -1582,6 +1595,7 @@ export async function orchestrateProjectAssistantTurn(input: {
         : null,
       executionLimitReached ? EXECUTION_LIMIT_INCOMPLETE_PILOTE_NOTICE : null,
       stopNotice,
+      contradictionCandidateNotice,
     ]);
     assistantText = appendStudioControlNotices(
       assistantText,
@@ -1612,8 +1626,9 @@ export async function orchestrateProjectAssistantTurn(input: {
             logicalTurnId,
             cycleInstanceId: activeCycleIdForJournal,
           });
+          // Prefer durable A1 presentation (possibly folded continuation).
           const adaptivePresentation =
-            coherentEarly?.presentation ?? null;
+            durableBuilt.presentation ?? coherentEarly?.presentation ?? null;
           const assistantTurn = appendPilotTranscriptTurn(session, {
             role: "assistant",
             content: assistantText,
diff --git a/projects/sfia-studio/app/features/project-assistant/preCycleCandidateTrajectoryActions.ts b/projects/sfia-studio/app/features/project-assistant/preCycleCandidateTrajectoryActions.ts
index bfe8860d..1f34e264 100644
--- a/projects/sfia-studio/app/features/project-assistant/preCycleCandidateTrajectoryActions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/preCycleCandidateTrajectoryActions.ts
@@ -13,6 +13,7 @@ import {
   readPreCycleCandidateTrajectory,
   selectCurrentLifecycleRecommendations,
 } from "@/lib/oa/cycle";
+import { getCycleTypeById } from "@/lib/oa/cycle/domain/cycleTypeCatalog";
 import type { LifecycleRecommendationMaterialDimension } from "@/lib/oa/cycle/application/lifecycleRecommendation/materialReaderContract";
 import type { CandidateTrajectoryProvenanceStatus } from "@/lib/oa/cycle/application/lifecycleRecommendation/candidateTrajectoryProvenance";
 import {
@@ -141,6 +142,17 @@ export async function projectAssistantReadPreCycleCandidateTrajectoryAction(inpu
   activeCycleInstanceId?: string | null;
   /** Server-derived via selectCurrentLifecycleRecommendations (canonical basis). */
   hasCurrentNextCycleRecommendation?: boolean;
+  /**
+   * ORION-NORA-COHERENCE-CORR-01 — Product CURRENT NEXT_CYCLE facts for
+   * FramingContinuity when no candidate/approval presentation exists yet.
+   * Never invents catalog labels; null when CURRENT is absent.
+   */
+  currentNextCycleRecommendation?: {
+    readonly recommendationId: string;
+    readonly targetCycleTypeId: string | null;
+    readonly catalogLabel: string | null;
+    readonly statement: string | null;
+  } | null;
 }> {
   const runtime = getRuntimeApplicationService();
   if (!runtime.oa) {
@@ -179,6 +191,12 @@ export async function projectAssistantReadPreCycleCandidateTrajectoryAction(inpu
   }

   let hasCurrentNextCycleRecommendation = false;
+  let currentNextCycleRecommendation: {
+    readonly recommendationId: string;
+    readonly targetCycleTypeId: string | null;
+    readonly catalogLabel: string | null;
+    readonly statement: string | null;
+  } | null = null;
   try {
     const epistemicItems = await oa.cycleServices.epistemic.listByProject(
       input.projectId,
@@ -234,13 +252,27 @@ export async function projectAssistantReadPreCycleCandidateTrajectoryAction(inpu
       blockingReservationStatements: blockersSnap.statements,
       failedMaterialDimensions: failed,
     });
-    hasCurrentNextCycleRecommendation = current.some(
+    const nextCurrent = current.find(
       (r) =>
         r.intent === "NEXT_CYCLE" && r.derivedCurrentness === "CURRENT",
     );
+    hasCurrentNextCycleRecommendation = nextCurrent != null;
+    if (nextCurrent) {
+      const targetCycleTypeId =
+        (nextCurrent.targetCycleTypeId ?? "").trim() || null;
+      currentNextCycleRecommendation = {
+        recommendationId: nextCurrent.recommendationId,
+        targetCycleTypeId,
+        catalogLabel: targetCycleTypeId
+          ? (getCycleTypeById(targetCycleTypeId)?.label?.trim() || null)
+          : null,
+        statement: (nextCurrent.statement ?? "").trim() || null,
+      };
+    }
   } catch {
     // Fail closed for the flag — do not invent CURRENT.
     hasCurrentNextCycleRecommendation = false;
+    currentNextCycleRecommendation = null;
   }

   return {
@@ -248,6 +280,7 @@ export async function projectAssistantReadPreCycleCandidateTrajectoryAction(inpu
     candidate: result.candidate,
     activeCycleInstanceId,
     hasCurrentNextCycleRecommendation,
+    currentNextCycleRecommendation,
   };
 }

@@ -570,17 +603,20 @@ export async function projectAssistantReadFramingContinuityAction(input: {
     preparedCompletePresent: preparedCycle != null,
   });

+  const currentRec = pre.currentNextCycleRecommendation ?? null;
   const catalogLabel =
     presentation?.catalogLabel ??
     alreadyDecided?.catalogLabel ??
     preparedCycle?.catalogLabel ??
     candidate?.catalogLabel ??
+    currentRec?.catalogLabel ??
     null;
   const targetCycleTypeId =
     presentation?.targetCycleTypeId ??
     alreadyDecided?.targetCycleTypeId ??
     preparedCycle?.cycleTypeId ??
     candidate?.targetCycleTypeId ??
+    currentRec?.targetCycleTypeId ??
     null;

   // FIX-01 — LPS project objective is context only; load Recommendation statement
@@ -589,7 +625,10 @@ export async function projectAssistantReadFramingContinuityAction(input: {
   let recommendationStatement: string | null = null;
   const runtime = getRuntimeApplicationService();
   const recommendationIdForExam =
-    presentation?.recommendationId ?? candidate?.recommendationId ?? null;
+    presentation?.recommendationId ??
+    candidate?.recommendationId ??
+    currentRec?.recommendationId ??
+    null;
   if (runtime.oa) {
     const lps = await runtime.oa.projectServices.getCurrentLivingProjectState.execute(
       { projectId: input.projectId },
@@ -631,7 +670,10 @@ export async function projectAssistantReadFramingContinuityAction(input: {
       catalogLabel,
       targetCycleTypeId,
       recommendationId:
-        presentation?.recommendationId ?? candidate?.recommendationId ?? null,
+        presentation?.recommendationId ??
+        candidate?.recommendationId ??
+        currentRec?.recommendationId ??
+        null,
       semanticKey: presentation?.semanticKey ?? candidate?.semanticKey ?? null,
       trajectoryId:
         presentation?.trajectoryId ??
@@ -650,7 +692,11 @@ export async function projectAssistantReadFramingContinuityAction(input: {
       preparedCycleInstanceId: preparedCycle?.cycleInstanceId ?? null,
       activeCycleInstanceId: pre.activeCycleInstanceId ?? null,
       hasCurrentNextCycleRecommendation: hasCurrent,
-      message: framingContinuityPilotMessage(phase, catalogLabel),
+      message: framingContinuityPilotMessage(
+        phase,
+        catalogLabel,
+        targetCycleTypeId,
+      ),
       examination,
     },
   };
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts
index 63dab823..01159e42 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts
@@ -988,6 +988,43 @@ export function canonicalTextsEquivalent(a: string, b: string): boolean {
 export const NORA_ADAPTIVE_DIVERGENCE_NOTICE =
   "[Studio] Les versions structurée et narrative de cette réponse divergent. Les deux sont conservées ci-dessous — aucune n'est promue comme vérité Product / HumanDecision." as const;

+/**
+ * ORION-NORA-COHERENCE-CORR-01 — cognitive disposition footers appended to
+ * turn.text BEFORE NAP durable composition. They must not poison
+ * narrative↔presentation relation classification (false divergent).
+ * Keep observable via Studio control notices — never as ordinary métier jargon.
+ */
+export const COGNITIVE_DISPOSITION_FOOTER_MARKERS = [
+  "CONTRADICTION CANDIDATE",
+  "COGNITIVE STOP",
+  "EVIDENCE-BACKED CONTRADICTION",
+] as const;
+
+const COGNITIVE_DISPOSITION_FOOTER_RE =
+  /\n*\s*\[(CONTRADICTION CANDIDATE|COGNITIVE STOP|EVIDENCE-BACKED CONTRADICTION)\][^\n]*(?:\n(?!\s*\[(?:CONTRADICTION CANDIDATE|COGNITIVE STOP|EVIDENCE-BACKED CONTRADICTION|Studio)\])[^\n]*)*/giu;
+
+export function stripCognitiveDispositionFooters(text: string): {
+  readonly core: string;
+  readonly strippedMarkers: readonly string[];
+} {
+  const source = text ?? "";
+  const strippedMarkers: string[] = [];
+  const core = source
+    .replace(COGNITIVE_DISPOSITION_FOOTER_RE, (match) => {
+      const marker = match.match(
+        /\[(CONTRADICTION CANDIDATE|COGNITIVE STOP|EVIDENCE-BACKED CONTRADICTION)\]/i,
+      )?.[1];
+      if (marker) strippedMarkers.push(marker.toUpperCase());
+      return "";
+    })
+    .trim();
+  return { core, strippedMarkers };
+}
+
+/** Pilot-intelligible Studio notice — not raw CONTRADICTION CANDIDATE jargon. */
+export const NORA_CONTRADICTION_CANDIDATE_PILOTE_NOTICE =
+  "Signal de cohérence : une tension plausible a été repérée, sans preuve Product suffisante pour la trancher. Ce n'est ni une HumanDecision ni un changement de Recommendation Product." as const;
+
 /** Deterministic relation between pilot-facing narrative and structured presentation. */
 export type NarrativePresentationRelation =
   | { readonly kind: "empty" }
@@ -1316,8 +1353,12 @@ export function buildDurableAssistantContentForTurn(input: {
   readonly usedA1: boolean;
   readonly presentation: NoraAdaptivePresentation | null;
   readonly relation: NarrativePresentationRelation["kind"];
+  /** Markers stripped before classification — for Studio notice mapping. */
+  readonly strippedDispositionMarkers: readonly string[];
 } {
-  const core = (input.pilotFacingCore ?? "").trim();
+  // ORION-NORA-COHERENCE-CORR-01 — classify on clean core only.
+  const stripped = stripCognitiveDispositionFooters(input.pilotFacingCore ?? "");
+  const core = stripped.core;
   const presentation = input.presentation ?? null;
   const relation = classifyNarrativePresentationRelation({
     pilotFacingCore: core,
@@ -1325,6 +1366,8 @@ export function buildDurableAssistantContentForTurn(input: {
     conversationGuidanceStatement: input.conversationGuidanceStatement,
   });

+  const markers = stripped.strippedMarkers;
+
   if (relation.kind === "equivalent" || relation.kind === "presentation_only") {
     const composed = composeCanonicalFromPresentation(presentation!);
     return {
@@ -1332,6 +1375,7 @@ export function buildDurableAssistantContentForTurn(input: {
       usedA1: true,
       presentation,
       relation: relation.kind,
+      strippedDispositionMarkers: markers,
     };
   }

@@ -1347,6 +1391,7 @@ export function buildDurableAssistantContentForTurn(input: {
         usedA1: true,
         presentation: folded,
         relation: "complementary",
+        strippedDispositionMarkers: markers,
       };
     }
     // Cannot fold safely → fail-closed preserve both (no silent drop).
@@ -1359,6 +1404,7 @@ export function buildDurableAssistantContentForTurn(input: {
       usedA1: false,
       presentation: null,
       relation: "divergent",
+      strippedDispositionMarkers: markers,
     };
   }

@@ -1371,6 +1417,7 @@ export function buildDurableAssistantContentForTurn(input: {
       usedA1: false,
       presentation: null,
       relation: "divergent",
+      strippedDispositionMarkers: markers,
     };
   }

@@ -1380,6 +1427,7 @@ export function buildDurableAssistantContentForTurn(input: {
       usedA1: false,
       presentation: null,
       relation: "narrative_only",
+      strippedDispositionMarkers: markers,
     };
   }

@@ -1388,6 +1436,7 @@ export function buildDurableAssistantContentForTurn(input: {
     usedA1: false,
     presentation: null,
     relation: "empty",
+    strippedDispositionMarkers: markers,
   };
 }

@@ -1585,10 +1634,13 @@ export function resolveAdaptiveAssistantRender(input: {
   const authenticated = normalizeStudioControlNotices(
     input.studioControlNotices,
   );
-  const body = contentWithoutAuthenticatedStudioNotices(
+  const bodyRaw = contentWithoutAuthenticatedStudioNotices(
     content,
     authenticated,
   );
+  // ORION-NORA-COHERENCE-CORR-01 — disposition footers are Studio-controlled,
+  // not part of narrative↔presentation substance.
+  const { core: body } = stripCognitiveDispositionFooters(bodyRaw);
   const studioAppendix =
     authenticated.length > 0
       ? authenticated
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
index 872cd67a..7ba2683b 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
@@ -39,10 +39,13 @@ export {
   contentFullyCoveredByPresentation,
   composeCanonicalFromPresentation,
   buildDurableAssistantContentForTurn,
+  stripCognitiveDispositionFooters,
   isPresentationStructurallyAdmissibleForA1,
   isA1TransitionAdmissible,
   shouldDisplayPresentationLead,
   NORA_UNUSABLE_TURN_FALLBACK_TEXT,
+  NORA_CONTRADICTION_CANDIDATE_PILOTE_NOTICE,
+  NORA_ADAPTIVE_DIVERGENCE_NOTICE,
   honestEpistemicLabel,
   honestBlockTitle,
   looksLikeAuthorityClaim,
```

### NEW FILE COMPLETE — orionNoraCoherenceCorr01.d0.test.ts

```typescript
/**
 * ORION-NORA-COHERENCE-CORR-01 — DET T01–T12 + ORION clarification case.
 * DETERMINISTIC only — ZERO OpenAI LIVE — ZERO campaign DB writes.
 *
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  NORA_ADAPTIVE_DIVERGENCE_NOTICE,
  NORA_CONTRADICTION_CANDIDATE_PILOTE_NOTICE,
  buildDurableAssistantContentForTurn,
  classifyNarrativePresentationRelation,
  composeCanonicalFromPresentation,
  parseNoraAdaptivePresentation,
  resolveAdaptiveAssistantRender,
  stripCognitiveDispositionFooters,
} from "@/lib/nora-cognitive-runtime/noraAdaptivePresentation";
import {
  framingContinuityPilotMessage,
  framingContinuityRecommendationReadyTitle,
  isFramingExploratoryCycleLabel,
} from "@/features/project-assistant/f2/chatFirstFramingContinuity";

function orionComparisonPresentation() {
  return parseNoraAdaptivePresentation({
    version: 1,
    eyebrow: null,
    title: "Cadrage exploratoire ou Conception fonctionnelle ?",
    lead: null,
    blocks: [
      {
        kind: "plain",
        text: "Je clarifie d’abord l’écart : dans le contexte projet, la recommandation en vigueur est la Conception fonctionnelle.",
      },
      {
        kind: "comparison_table",
        title: "La différence pour ORION",
        columns: ["Étape", "Question principale", "Produit"],
        rows: [
          [
            "Cadrage exploratoire",
            "Quel problème traiter ?",
            "Compréhension partagée du besoin.",
          ],
          [
            "Conception fonctionnelle",
            "Comment le service doit-il se comporter ?",
            "Parcours et règles cohérents.",
          ],
        ],
      },
      {
        kind: "recommendation",
        title: "Ma recommandation pour ORION",
        statement:
          "Commencer par la Conception fonctionnelle, en prenant les demandes de matériel, les incidents informatiques et les demandes d’accès comme périmètre proposé.",
        disclaimer:
          "Proposition uniquement — aucune décision du Pilote enregistrée.",
      },
      {
        kind: "section",
        title: "Pourquoi ce choix",
        body: "Les trois catégories de demandes sont déjà assez explicités pour examiner les parcours. Aucune préparation ni aucun démarrage de cycle n’est engagé.",
      },
    ],
    provenanceNote: null,
    noGovernedActionNote: "Pas d'action gouvernée issue de ces blocs de présentation.",
  })!;
}

function simplePresentation(statement: string) {
  return parseNoraAdaptivePresentation({
    version: 1,
    eyebrow: null,
    title: "Orientation",
    lead: null,
    blocks: [
      {
        kind: "recommendation",
        title: "Recommandation",
        statement,
        disclaimer: "Proposition uniquement.",
      },
    ],
    provenanceNote: null,
    noGovernedActionNote: null,
  })!;
}

describe("ORION-NORA-COHERENCE-CORR-01 — NAP T01–T04 / T09 / T12", () => {
  it("T01 — structured ≡ narrative → A1 unique", () => {
    const p = simplePresentation("Commencer par la Conception fonctionnelle.");
    const composed = composeCanonicalFromPresentation(p);
    const built = buildDurableAssistantContentForTurn({
      pilotFacingCore: composed,
      presentation: p,
    });
    expect(built.relation).toBe("equivalent");
    expect(built.usedA1).toBe(true);
    expect(built.contentCore).not.toContain(NORA_ADAPTIVE_DIVERGENCE_NOTICE);
    expect(built.contentCore).toBe(composed);
  });

  it("T02 — structured complete, narrative empty → presentation_only A1", () => {
    const p = orionComparisonPresentation();
    const built = buildDurableAssistantContentForTurn({
      pilotFacingCore: "",
      presentation: p,
    });
    expect(built.relation).toBe("presentation_only");
    expect(built.usedA1).toBe(true);
    expect(built.contentCore).toContain("Conception fonctionnelle");
    expect(built.contentCore).not.toContain(NORA_ADAPTIVE_DIVERGENCE_NOTICE);
  });

  it("T03 — narrative complementary with guidance provenance → A1 complete", () => {
    const p = orionComparisonPresentation();
    const guidance =
      "La direction que je recommande est donc la Conception fonctionnelle ; tu peux l’examiner avant toute décision de préparation ou de démarrage.";
    const built = buildDurableAssistantContentForTurn({
      pilotFacingCore: guidance,
      presentation: p,
      conversationGuidanceStatement: guidance,
    });
    expect(built.relation).toBe("complementary");
    expect(built.usedA1).toBe(true);
    expect(built.contentCore).toContain("La différence pour ORION");
    expect(built.contentCore).toContain("Conception fonctionnelle");
    expect(built.contentCore).not.toContain(NORA_ADAPTIVE_DIVERGENCE_NOTICE);
    expect(built.contentCore).not.toContain("CONTRADICTION CANDIDATE");
  });

  it("T04 — real divergence → no arbitrary promotion", () => {
    const p = simplePresentation("Commencer par la Conception fonctionnelle.");
    const opposing =
      "Au contraire, je retiens uniquement le Cadrage exploratoire et j'abandonne la Conception fonctionnelle.";
    const built = buildDurableAssistantContentForTurn({
      pilotFacingCore: opposing,
      presentation: p,
      conversationGuidanceStatement: opposing,
    });
    expect(built.relation).toBe("divergent");
    expect(built.usedA1).toBe(false);
    expect(built.contentCore).toContain(NORA_ADAPTIVE_DIVERGENCE_NOTICE);
    expect(built.contentCore).toContain("— Version structurée —");
    expect(built.contentCore).toContain("— Version narrative —");
    expect(built.presentation).toBeNull();
  });

  it("T09 — long comparative response preserved without truncation", () => {
    const p = orionComparisonPresentation();
    const guidance =
      "La direction que je recommande est donc la Conception fonctionnelle ; tu peux l’examiner avant toute décision de préparation ou de démarrage.";
    const built = buildDurableAssistantContentForTurn({
      pilotFacingCore: guidance,
      presentation: p,
      conversationGuidanceStatement: guidance,
    });
    expect(built.contentCore.length).toBeGreaterThan(400);
    expect(built.contentCore).toContain("demandes de matériel");
    expect(built.contentCore).toContain("incidents informatiques");
  });

  it("T12 — contradiction diagnosed: proof kept, UX non-technical", () => {
    const p = orionComparisonPresentation();
    const guidance =
      "La direction que je recommande est donc la Conception fonctionnelle ; tu peux l’examiner avant toute décision de préparation ou de démarrage.";
    const contaminated = `${guidance}\n\n[CONTRADICTION CANDIDATE] Plausible conflict retained as contradiction candidate — insufficient Evidence pointers.`;
    const stripped = stripCognitiveDispositionFooters(contaminated);
    expect(stripped.strippedMarkers).toContain("CONTRADICTION CANDIDATE");
    expect(stripped.core).toBe(guidance);

    const built = buildDurableAssistantContentForTurn({
      pilotFacingCore: contaminated,
      presentation: p,
      conversationGuidanceStatement: guidance,
    });
    expect(built.relation).toBe("complementary");
    expect(built.usedA1).toBe(true);
    expect(built.contentCore).not.toContain("CONTRADICTION CANDIDATE");
    expect(built.strippedDispositionMarkers).toContain("CONTRADICTION CANDIDATE");
    expect(NORA_CONTRADICTION_CANDIDATE_PILOTE_NOTICE).toMatch(/Signal de cohérence/);
    expect(NORA_CONTRADICTION_CANDIDATE_PILOTE_NOTICE).not.toMatch(
      /CONTRADICTION CANDIDATE/,
    );
  });
});

describe("ORION-NORA-COHERENCE-CORR-01 — Framing card / CURRENT T05–T08 / T10–T11", () => {
  it("T05/T07 — CURRENT Conception label; never invent Cadrage exploratoire", () => {
    expect(
      framingContinuityRecommendationReadyTitle({
        catalogLabel: "Conception fonctionnelle",
        targetCycleTypeId: "cyc:functional-design",
      }),
    ).toBe("Commencer par un « Conception fonctionnelle »");
    expect(
      framingContinuityRecommendationReadyTitle({
        catalogLabel: null,
        targetCycleTypeId: null,
      }),
    ).not.toMatch(/Cadrage/);
    expect(
      isFramingExploratoryCycleLabel({
        catalogLabel: "Conception fonctionnelle",
        targetCycleTypeId: "cyc:functional-design",
      }),
    ).toBe(false);
    expect(
      framingContinuityPilotMessage(
        "recommendation_ready",
        "Conception fonctionnelle",
        "cyc:functional-design",
      ),
    ).not.toMatch(/exploratoire/);
  });

  it("T06 — Framing/Cadrage still may use exploratoire qualifier", () => {
    expect(
      framingContinuityRecommendationReadyTitle({
        catalogLabel: "Cadrage",
        targetCycleTypeId: "cyc:framing",
      }),
    ).toBe("Commencer par un « Cadrage » exploratoire");
    expect(
      framingContinuityPilotMessage(
        "recommendation_ready",
        "Cadrage",
        "cyc:framing",
      ),
    ).toMatch(/exploratoire/);
  });

  it("T08 — reload render: divergence notice keeps plain; no invented HD", () => {
    const p = orionComparisonPresentation();
    const plain = [
      NORA_ADAPTIVE_DIVERGENCE_NOTICE,
      "",
      "— Version structurée —",
      composeCanonicalFromPresentation(p),
      "",
      "— Version narrative —",
      "Autre orientation.",
    ].join("\n");
    const decision = resolveAdaptiveAssistantRender({
      content: plain,
      presentation: p,
      studioControlNotices: [],
    });
    expect(decision.mode).toBe("plain");
    expect(decision.usedA1).toBe(false);
    expect(decision.plainText).toContain(NORA_ADAPTIVE_DIVERGENCE_NOTICE);
  });

  it("T10 — HumanDecision/START never implied by recommendation_ready copy", () => {
    const msg = framingContinuityPilotMessage(
      "recommendation_ready",
      "Conception fonctionnelle",
      "cyc:functional-design",
    );
    expect(msg).not.toMatch(/HumanDecision|START|démarré automatiquement/i);
    expect(msg).toMatch(/préparer cette direction/i);
  });

  it("T11 — NAP R1/R2/R3: complementary guidance still A1; conflict still divergent", () => {
    const p = orionComparisonPresentation();
    const guidance =
      "La direction que je recommande est donc la Conception fonctionnelle ; tu peux l’examiner avant toute décision de préparation ou de démarrage.";
    expect(
      classifyNarrativePresentationRelation({
        pilotFacingCore: guidance,
        presentation: p,
        conversationGuidanceStatement: guidance,
      }).kind,
    ).toBe("complementary");
    expect(
      classifyNarrativePresentationRelation({
        pilotFacingCore:
          "Au contraire, je choisis uniquement le Cadrage exploratoire.",
        presentation: p,
        conversationGuidanceStatement:
          "Au contraire, je choisis uniquement le Cadrage exploratoire.",
      }).kind,
    ).toBe("divergent");
  });
});

describe("ORION-NORA-COHERENCE-CORR-01 — ORION clarification incident", () => {
  it("CURRENT=Conception, candidate guidance=Conception, contaminated footer → A1 aligned", () => {
    const p = orionComparisonPresentation();
    const guidance =
      "La direction que je recommande est donc la Conception fonctionnelle ; tu peux l’examiner avant toute décision de préparation ou de démarrage.";
    const core = `${guidance}\n\n[CONTRADICTION CANDIDATE] Plausible conflict retained as contradiction candidate — insufficient Evidence pointers.`;
    const built = buildDurableAssistantContentForTurn({
      pilotFacingCore: core,
      presentation: p,
      conversationGuidanceStatement: guidance,
    });
    expect(built.usedA1).toBe(true);
    expect(built.relation).toBe("complementary");
    expect(built.contentCore).toContain("Conception fonctionnelle");
    expect(built.contentCore).not.toContain(NORA_ADAPTIVE_DIVERGENCE_NOTICE);
    expect(built.contentCore).not.toContain("CONTRADICTION CANDIDATE");

    const cardTitle = framingContinuityRecommendationReadyTitle({
      catalogLabel: "Conception fonctionnelle",
      targetCycleTypeId: "cyc:functional-design",
    });
    expect(cardTitle).toContain("Conception fonctionnelle");
    expect(cardTitle).not.toContain("Cadrage");
    // Card and restitution both point at Conception — no unexplained Cadrage.
    expect(built.contentCore).toContain("Conception fonctionnelle");
  });
});
```

### NEW FILE COMPLETE — orionNoraCoherenceCorr01.live.test.ts

```typescript
/**
 * ORION-NORA-COHERENCE-CORR-01 — bounded LIVE counter-proof (gated).
 * Requires ORION_COHERENCE_LIVE=1 + campaign DBs + OPENAI_API_KEY.
 * Does not rewrite historical turns; emits one new turn.
 *
 * @vitest-environment node
 */
import fs from "node:fs";
import path from "node:path";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { framingContinuityRecommendationReadyTitle } from "@/features/project-assistant/f2/chatFirstFramingContinuity";
import { projectAssistantReadFramingContinuityAction } from "@/features/project-assistant/preCycleCandidateTrajectoryActions";
import { sendProjectAssistantTurn } from "@/features/project-assistant/sendProjectAssistantTurn";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";

const LIVE = process.env.ORION_COHERENCE_LIVE === "1";
const ORION_PROJECT_ID = "prj:b0883ca8-2411-493d-94ff-e386d176956a";
const PROOF_DIR =
  "/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/akg-m5-l3s2-fresh-live-qa-01/proofs/orion-nora-coherence-corr-01";
const APP_ROOT = path.resolve(__dirname, "../..");
const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

function loadDotEnvLocal(forceKeys: readonly string[] = []): void {
  const envPath = path.join(APP_ROOT, ".env.local");
  if (!fs.existsSync(envPath)) return;
  const force = new Set(forceKeys);
  for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    const i = t.indexOf("=");
    if (i <= 0) continue;
    const k = t.slice(0, i).trim();
    let v = t.slice(i + 1).trim();
    if (
      (v.startsWith('"') && v.endsWith('"')) ||
      (v.startsWith("'") && v.endsWith("'"))
    ) {
      v = v.slice(1, -1);
    }
    if (force.has(k) || process.env[k] == null || process.env[k] === "") {
      process.env[k] = v;
    }
  }
}

(LIVE ? describe : describe.skip)(
  "ORION-NORA-COHERENCE-CORR-01 LIVE counter-proof",
  () => {
    beforeAll(() => {
      // Vitest setup.ts assigns a temp Nora session DB — force campaign pair.
      loadDotEnvLocal([
        "SFIA_STUDIO_PRODUCT_DB_PATH",
        "SFIA_STUDIO_NORA_SESSION_DB_PATH",
        "OPENAI_API_KEY",
        "OPENAI_MODEL",
      ]);
      delete process.env.SFIA_STUDIO_FAKE_CONVERSATION_PROVIDER;
      delete process.env.SFIA_STUDIO_FORCE_FAKE_PROVIDER;
      process.env.SFIA_STUDIO_CURSOR_REAL = "0";
      process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
      process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = "1";
      process.env.SFIA_STUDIO_LOCAL_MORRIS_GATE_AUTHORITY = "1";
      fs.mkdirSync(PROOF_DIR, { recursive: true });
      resetRuntimeApplicationServiceForTests();
      const productDb = process.env.SFIA_STUDIO_PRODUCT_DB_PATH;
      if (!productDb) throw new Error("SFIA_STUDIO_PRODUCT_DB_PATH missing");
      if (!process.env.OPENAI_API_KEY?.trim()) {
        throw new Error("OPENAI_API_KEY missing");
      }
      getRuntimeApplicationService({
        registryRoot: FIXTURES,
        schemasRoot: SCHEMAS,
        productDbPath: productDb,
        auditMode: "noop",
      });
    });

    afterAll(() => {
      resetRuntimeApplicationServiceForTests();
    });

    it(
      "FramingContinuity shows Conception; new LIVE turn is A1 without jargon",
      async () => {
        const sessionDb = process.env.SFIA_STUDIO_NORA_SESSION_DB_PATH;
        expect(sessionDb).toBeTruthy();

        const before = await projectAssistantReadFramingContinuityAction({
          projectId: ORION_PROJECT_ID,
        });
        expect(before.ok).toBe(true);
        expect(before.continuity?.catalogLabel).toBe("Conception fonctionnelle");
        expect(before.continuity?.targetCycleTypeId).toBe(
          "cyc:functional-design",
        );
        const beforeTitle = framingContinuityRecommendationReadyTitle({
          catalogLabel: before.continuity?.catalogLabel ?? null,
          targetCycleTypeId: before.continuity?.targetCycleTypeId ?? null,
        });
        expect(beforeTitle).toBe(
          "Commencer par un « Conception fonctionnelle »",
        );
        expect(beforeTitle).not.toMatch(/Cadrage/);

        const prompt =
          "Contre-épreuve cohérence ORION (CORR-01) : confirme en une restitution " +
          "unique et structurée la différence entre Cadrage exploratoire et Conception " +
          "fonctionnelle pour ORION, et indique clairement quelle est la recommandation " +
          "Product courante versus toute nouvelle proposition. Ne démarre aucun cycle.";

        const turn = await sendProjectAssistantTurn({
          projectId: ORION_PROJECT_ID,
          content: prompt,
          sessionDbPath: sessionDb!,
        });

        expect(turn.ok).toBe(true);
        if (!turn.ok) return;
        expect(turn.presentation).toBe("openai_live");
        expect(turn.text).not.toMatch(/Les versions structurée et narrative/);
        expect(turn.text).not.toMatch(/CONTRADICTION CANDIDATE/);
        expect(turn.text).toMatch(/Conception fonctionnelle/i);
        expect(turn.text.length).toBeGreaterThan(200);

        const after = await projectAssistantReadFramingContinuityAction({
          projectId: ORION_PROJECT_ID,
        });
        expect(after.ok).toBe(true);
        expect(after.continuity?.catalogLabel).toBe("Conception fonctionnelle");
        const afterTitle = framingContinuityRecommendationReadyTitle({
          catalogLabel: after.continuity?.catalogLabel ?? null,
          targetCycleTypeId: after.continuity?.targetCycleTypeId ?? null,
        });
        expect(afterTitle).not.toMatch(/Cadrage/);

        const proof = {
          at: new Date().toISOString(),
          framingBefore: {
            catalogLabel: before.continuity?.catalogLabel,
            targetCycleTypeId: before.continuity?.targetCycleTypeId,
            recommendationId: before.continuity?.recommendationId,
            phase: before.continuity?.phase,
            title: beforeTitle,
          },
          turn: {
            ok: turn.ok,
            status: turn.status,
            presentation: turn.presentation,
            model: turn.model ?? null,
            contentLen: turn.text.length,
            contentHead: turn.text.slice(0, 600),
            usedAdaptive: Boolean(turn.adaptivePresentation),
            studioControlNotices: turn.studioControlNotices ?? [],
          },
          framingAfter: {
            catalogLabel: after.continuity?.catalogLabel,
            targetCycleTypeId: after.continuity?.targetCycleTypeId,
            recommendationId: after.continuity?.recommendationId,
            phase: after.continuity?.phase,
            title: afterTitle,
          },
        };
        fs.writeFileSync(
          path.join(PROOF_DIR, "live-counterproof.json"),
          JSON.stringify(proof, null, 2),
        );
        fs.writeFileSync(
          path.join(PROOF_DIR, "live-assistant-content.txt"),
          turn.text,
        );
      },
      180_000,
    );
  },
);
```

### NEW FILE COMPLETE — orion-coherence-corr-01-live-proof.ts

```typescript
/**
 * ORION-NORA-COHERENCE-CORR-01 — bounded LIVE counter-proof.
 * - Reads FramingContinuity against campaign Product DB.
 * - Emits ONE new Nora turn (does not rewrite historical turns).
 * - Cursor REAL remains OFF.
 *
 * Usage (from app/): npx tsx scripts/orion-coherence-corr-01-live-proof.ts
 */
import fs from "node:fs";
import path from "node:path";
import { framingContinuityRecommendationReadyTitle } from "../features/project-assistant/f2/chatFirstFramingContinuity";
import { projectAssistantReadFramingContinuityAction } from "../features/project-assistant/preCycleCandidateTrajectoryActions";
import { sendProjectAssistantTurn } from "../features/project-assistant/sendProjectAssistantTurn";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "../lib/vertical-slice-runtime";

const ORION_PROJECT_ID = "prj:b0883ca8-2411-493d-94ff-e386d176956a";
const PROOF_DIR =
  "/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/akg-m5-l3s2-fresh-live-qa-01/proofs/orion-nora-coherence-corr-01";

function loadDotEnvLocal(): void {
  const envPath = path.join(process.cwd(), ".env.local");
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    const i = t.indexOf("=");
    if (i <= 0) continue;
    const k = t.slice(0, i).trim();
    let v = t.slice(i + 1).trim();
    if (
      (v.startsWith('"') && v.endsWith('"')) ||
      (v.startsWith("'") && v.endsWith("'"))
    ) {
      v = v.slice(1, -1);
    }
    if (process.env[k] == null || process.env[k] === "") {
      process.env[k] = v;
    }
  }
}

async function main(): Promise<void> {
  loadDotEnvLocal();
  delete process.env.SFIA_STUDIO_FAKE_CONVERSATION_PROVIDER;
  delete process.env.SFIA_STUDIO_FORCE_FAKE_PROVIDER;
  process.env.SFIA_STUDIO_CURSOR_REAL = "0";
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";

  const productDb = process.env.SFIA_STUDIO_PRODUCT_DB_PATH;
  const sessionDb = process.env.SFIA_STUDIO_NORA_SESSION_DB_PATH;
  if (!productDb || !sessionDb) {
    throw new Error("Campaign DB paths missing");
  }
  if (!process.env.OPENAI_API_KEY?.trim()) {
    throw new Error("OPENAI_API_KEY missing — LIVE Nora required");
  }

  fs.mkdirSync(PROOF_DIR, { recursive: true });

  const appRoot = process.cwd();
  const fixtures = path.join(appRoot, "lib/oa/doctrine/fixtures");
  const schemas = path.resolve(
    appRoot,
    "../sfia-v3-modeled/v3-native-option-a/schemas",
  );

  resetRuntimeApplicationServiceForTests();
  const runtime = getRuntimeApplicationService({
    registryRoot: fixtures,
    schemasRoot: schemas,
    productDbPath: productDb,
    auditMode: "noop",
  });
  if (!runtime.oa) throw new Error("OA unavailable");

  const before = await projectAssistantReadFramingContinuityAction({
    projectId: ORION_PROJECT_ID,
  });
  const beforeTitle = before.ok
    ? framingContinuityRecommendationReadyTitle({
        catalogLabel: before.continuity?.catalogLabel ?? null,
        targetCycleTypeId: before.continuity?.targetCycleTypeId ?? null,
      })
    : null;

  const prompt =
    "Contre-épreuve cohérence ORION (CORR-01) : confirme en une restitution " +
    "unique et structurée la différence entre Cadrage exploratoire et Conception " +
    "fonctionnelle pour ORION, et indique clairement quelle est la recommandation " +
    "Product courante versus toute nouvelle proposition. Ne démarre aucun cycle.";

  const turn = await sendProjectAssistantTurn({
    projectId: ORION_PROJECT_ID,
    content: prompt,
    sessionDbPath: sessionDb,
  });

  const after = await projectAssistantReadFramingContinuityAction({
    projectId: ORION_PROJECT_ID,
  });
  const afterTitle = after.ok
    ? framingContinuityRecommendationReadyTitle({
        catalogLabel: after.continuity?.catalogLabel ?? null,
        targetCycleTypeId: after.continuity?.targetCycleTypeId ?? null,
      })
    : null;

  const assistantText = turn.ok ? turn.text : "";

  const proof = {
    cycle: "ORION-NORA-COHERENCE-CORR-01",
    at: new Date().toISOString(),
    cursorReal: process.env.SFIA_STUDIO_CURSOR_REAL,
    projectId: ORION_PROJECT_ID,
    framingBefore: {
      ok: before.ok,
      phase: before.continuity?.phase ?? null,
      catalogLabel: before.continuity?.catalogLabel ?? null,
      targetCycleTypeId: before.continuity?.targetCycleTypeId ?? null,
      recommendationId: before.continuity?.recommendationId ?? null,
      title: beforeTitle,
      message: before.continuity?.message ?? null,
    },
    turn: {
      ok: turn.ok,
      status: (turn as { status?: string }).status ?? null,
      code: (turn as { code?: string }).code ?? null,
      contentHead: assistantText.slice(0, 500),
      contentLen: assistantText.length,
      hasDivergenceNotice: assistantText.includes(
        "Les versions structurée et narrative",
      ),
      hasContradictionJargon: /CONTRADICTION CANDIDATE/i.test(assistantText),
      hasConception: /Conception fonctionnelle/i.test(assistantText),
      hasCadrageExploratoireTitleOnlyAsComparison:
        /Cadrage exploratoire/i.test(assistantText),
    },
    framingAfter: {
      ok: after.ok,
      phase: after.continuity?.phase ?? null,
      catalogLabel: after.continuity?.catalogLabel ?? null,
      targetCycleTypeId: after.continuity?.targetCycleTypeId ?? null,
      recommendationId: after.continuity?.recommendationId ?? null,
      title: afterTitle,
      message: after.continuity?.message ?? null,
    },
    checks: {
      cardNotFakeCadrage:
        beforeTitle != null &&
        !/Cadrage/i.test(beforeTitle) &&
        /Conception fonctionnelle/i.test(beforeTitle ?? ""),
      cardAlignedAfter:
        afterTitle != null &&
        !/Cadrage/i.test(afterTitle) &&
        /Conception fonctionnelle/i.test(afterTitle ?? ""),
      turnOk: turn.ok === true,
      noDivergenceNotice: !assistantText.includes(
        "Les versions structurée et narrative",
      ),
      noContradictionJargon: !/CONTRADICTION CANDIDATE/i.test(assistantText),
    },
  };

  const out = path.join(PROOF_DIR, "live-counterproof.json");
  fs.writeFileSync(out, JSON.stringify(proof, null, 2));
  fs.writeFileSync(
    path.join(PROOF_DIR, "live-assistant-content.txt"),
    assistantText,
  );
  console.log(JSON.stringify(proof, null, 2));
  console.log("PROOF_DIR", PROOF_DIR);

  const failed = Object.entries(proof.checks).filter(([, v]) => v !== true);
  if (failed.length > 0) {
    console.error("LIVE CHECKS FAILED", failed.map(([k]) => k));
    process.exitCode = 2;
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
```

## 11. QA commands / results

| Command | Result |
|---|---|
| Targeted DET (ORION T01–12 + NAP/Framing/LR) | **232 PASS / 10 files** |
| LIVE default (no `ORION_COHERENCE_LIVE`) | **1 skipped** (explicit gate) |
| `tsc --noEmit` / `npm run typecheck` | PASS |
| eslint touched + `npm run lint` | PASS (pre-existing unrelated warnings) |
| `npm run build` | PASS |
| Modeled governance node --test | **75 PASS** |
| Secret pattern scan | PASS |
| `git diff --check origin/main...HEAD` | PASS |
| PRR checker after digests | **CONFORMANCE OK** |
| `CI=true npm test` (clean env) | **569 files / 6360 tests PASS / 143 skipped** |
| Prior polluted-env full run | FAIL noise (local authority leakage) — not Product delta |
| One parallel flake JPI under first CI=true | PASS alone on corrective+main; cleared on second CI=true full |

## 12. LIVE proof scope

Bounded OpenAI LIVE Product seam (`sendProjectAssistantTurn`, `ORION_COHERENCE_LIVE=1`): Framing title Conception; A1; no false divergence; no CONTRADICTION jargon; HD=0; historical seq 3 untouched; Cursor REAL OFF. Browser authenticated screenshot **NOT PROVEN**. No new LIVE calls in GI (prior evidence retained).

## 13. Browser limitations

IDE browser auth + Computer Use Screen Recording blocked visual capture. Disclosed as merge-review reserve — not silent PASS/FAIL.

## 14–15. R24 matrix + documentary diffs

| Volume | Change | Epistemic |
|---|---|---|
| README | Candidate overlay GI-ORION | AS-IMPLEMENTED ON PRODUCT PR CANDIDATE |
| 03 | F03/F04 CURRENT hydration + NAP footer | same |
| 06 | Memory B write/preserve | same |
| 07 | INV table candidate | same |
| 08 | proof index + LIVE opt-in | same |
| 09 | gaps: browser/Cursor/L3-S2 OPEN | same |
| manifest | lastReviewedCommit=`9bd22f87` + digests | candidate code ref |

### Complete R24 patch (commit 9b51a51c)

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
index 585d036b..3c2a228b 100644
--- a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
+++ b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
@@ -4,6 +4,20 @@

 Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK

+## Overlay — GI-ORION-NORA-COHERENCE-CORR-01 (AS-IMPLEMENTED ON PRODUCT PR CANDIDATE — ≠ CURRENT ON MAIN — 2026-11-01)
+
+> **Product code ref:** `9bd22f875d01404989a03de5db2c96e396e6d89c` · **≠ CURRENT ON MAIN** until merge.
+>
+> **F03 / Framing Continuity Card:** phase `recommendation_ready` hydrates `catalogLabel` / `targetCycleTypeId` / `recommendationId` from Product CURRENT NEXT_CYCLE Recommendation when candidate/approval presentation is absent. Pilot title uses catalog label; suffix « exploratoire » only for Framing/`cyc:framing`. Unknown label → neutral title (never invent « Cadrage »).
+>
+> **F04 / NAP durable write:** `buildDurableAssistantContentForTurn` classifies on core **after** stripping cognitive disposition footers (`CONTRADICTION CANDIDATE` / `COGNITIVE STOP` / `EVIDENCE-BACKED CONTRADICTION`). Empty structured narrative prefers coherent narrative string (including empty) over contaminated `turn.text`. True divergence remains fail-closed dual+notice. Candidate contradiction surfaces as typed Studio notice (Pilot-intelligible), not métier jargon in body.
+>
+> **Memory B:** new turns may persist A1 compose; historical divergent rows are **not** rewritten.
+>
+> **Proof:** `orionNoraCoherenceCorr01.d0.test.ts` · framing/NAP suites · LIVE opt-in `ORION_COHERENCE_LIVE=1` · browser UI capture **NOT PROVEN**.
+>
+> **Anti-claims:** ≠ MERGED · ≠ auto-START · ≠ HD invent · ≠ Cursor REAL.
+
 **Epistemic split (post-merge 2026-10-26) — RepositoryBinding + docs_write Product specialization:** **CURRENT ON MAIN** (`fec4e65d` / PR #618 MERGED): **RepositoryBinding RETIRED**; **docs_write Product admission RETIRED**. `projectWorkspaceKey` / `projects/<key>` routing **PRESERVED**. Sentences below that still describe Binding or docs_write Product admission as live Product behaviour are **HISTORICAL SNAPSHOTS** (true on `7db8afd7` before merge). **H4 / G-REAL / G-ACTIVATION NOT GRANTED**. **AKG-M5 OPEN**. Runtime v3 **NON ADOPTED**.

 ## Overlay — CORR-02 Git target fidelity (CURRENT ON MAIN — PR #618 MERGED — 2026-10-26)
diff --git a/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md b/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
index 1792ea23..3ec3b78a 100644
--- a/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
+++ b/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
@@ -2,6 +2,16 @@

 **As-implemented @ `b4aa09bdef29a635e624bb5c396711e75057df4d`**

+## Overlay — GI-ORION-NORA-COHERENCE-CORR-01 (AS-IMPLEMENTED ON PRODUCT PR CANDIDATE — ≠ CURRENT ON MAIN — 2026-11-01)
+
+> **NO schema change.** Memory B columns (`content` / `presentation_json` / `studio_control_json`) unchanged.
+>
+> **Write behaviour (candidate @ `9bd22f87`):** durable `content` built after stripping disposition footers; when A1 admissible, prefer folded/durable presentation for `presentation_json`; contradiction candidate may append typed notice into `studio_control_json` (not raw marker in narrative body).
+>
+> **Historical preservation:** existing divergent transcript rows (e.g. ORION seq 3) remain as stored; correction applies to **new** turns. Reload rehydrates from durable fields; server process restart **NOT PROVEN** by this cycle.
+>
+> **Anti-claims:** ≠ CURRENT ON MAIN · ≠ R-SRV-RESTART closed · ≠ transcript rewrite migration.
+
 ## Overlay — CORR-01 (CURRENT ON MAIN — PR #618 MERGED — 2026-10-26)

 **CORR-01 NO SEMANTIC IMPACT** on persistence / restart / recovery. Generic continuity wording is **DETERMINISTIC AT TESTED SCOPE** only (`postExecutionProductContinuity.generic.d0.test.ts`); restart continuity remains covered by existing suites. **≠** REAL. Pre-merge NOT MERGED claim = **HISTORICAL**.
diff --git a/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md b/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
index 59d60b6f..4f69efb7 100644
--- a/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
+++ b/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
@@ -4,6 +4,16 @@

 **Amendement documentaire D-P6-SHE-01 (requalifié AKG-M3 G6 — 2026-10-21) :** SINGLE HUMAN EXECUTE / Option A est **CURRENT ON MAIN** — Product integrated via **PR #590** merge `c9abdbc3` (ancestor of main tip `c2b3d00c…`). DETERMINISTIC at tested scope. Les invariants SHE ci-dessous restent CURRENT. Les invariants « STRUCTURAL PREPARE requires HD » restent **HISTORICAL / disposition-before-PREPARE** (chemin encore disponible) — ils ne bloquent plus l’inspectable PREPARE sous SHE. Prior wording « CURRENT on Delivery / PR DRAFT pending merge / NOT INTEGRATED ON MAIN » is **HISTORICAL**. ≠ REAL/HQA PROVEN · ≠ P6 GLOBAL PASS · runtime v3 NON ADOPTED.

+## Overlay — GI-ORION-NORA-COHERENCE-CORR-01 (AS-IMPLEMENTED ON PRODUCT PR CANDIDATE — ≠ CURRENT ON MAIN — 2026-11-01)
+
+| ID / theme | Statement (candidate) | Status |
+|---|---|---|
+| INV-REC-NE-HD | Framing Continuity Card projects Product Recommendation CURRENT; never invents HumanDecision / START | **CANDIDATE** · DET + LIVE seam · ≠ MERGED |
+| INV-CURRENT-FROM-PRODUCT | Card `catalogLabel` / `targetCycleTypeId` come from Product CURRENT (or later candidate/approval), never from Nora prose alone | **CANDIDATE** |
+| INV-NAP-DISPOSITION-NE-NARRATIVE | Cognitive disposition footers are not narrative substance for A1/B classify; typed Studio notice may disclose candidate contradiction without authority | **CANDIDATE** |
+| INV-TRUE-DIVERGENCE-FAIL-CLOSED | Material narrative↔presentation conflict still dual+notice; no silent pick | **PRESERVED** (CORR-A1B) |
+| Anti-claims | ≠ CURRENT ON MAIN · ≠ G-REAL · ≠ Cursor REAL · ≠ auto-START | — |
+
 ## Overlay — PR #618 effect-based confinement + write-mode without Product Binding (CURRENT ON MAIN — PR #618 MERGED — DET scope — 2026-10-26)

 | ID | Statement | Status |
diff --git a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
index 2ba5d93a..e3e61695 100644
--- a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
+++ b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
@@ -9,6 +9,18 @@
 - E2E: Playwright `app/e2e/**` (often harness/boundary routes)
 - Conformance (this macro): `app/__tests__/architecture/productionRuntimeReference.conformance.d0.test.ts`

+## Overlay — GI-ORION-NORA-COHERENCE-CORR-01 proof index (AS-IMPLEMENTED ON PRODUCT PR CANDIDATE — ≠ CURRENT ON MAIN — 2026-11-01)
+
+> Product code **`9bd22f87…`**. CI default skips LIVE (`ORION_COHERENCE_LIVE` unset → `describe.skip`).
+
+| Suite / artifact | What it proves | Class |
+|---|---|---|
+| `orionNoraCoherenceCorr01.d0.test.ts` | T01–T12 + ORION: A1 equivalence/complementary · true divergent preserved · footer strip · Conception card title · no invent Cadrage | **DETERMINISTIC VERIFIED** · CANDIDATE |
+| `framingContinuityCard.ui.test.tsx` (+ ORION case) | Cadrage keeps exploratoire; Conception does not | **DETERMINISTIC VERIFIED** · jsdom · CANDIDATE |
+| `corrA1b01.secured.d0` / `noraAdaptivePresentation.*` / Framing continuity / LR suites | Non-regression NAP + lifecycle | **DETERMINISTIC VERIFIED** · re-run on candidate |
+| `orionNoraCoherenceCorr01.live.test.ts` | Bounded OpenAI LIVE Product seam on campaign ORION | **OPT-IN LIVE** · requires `ORION_COHERENCE_LIVE=1` · ≠ CI default · ≠ browser screenshot |
+| Browser authenticated UI capture | — | **NOT PROVEN** |
+
 ## Overlay — Nora UX consolidated proof index (GI-NAP-UX-CONSOLIDATED-01 — CURRENT ON MAIN — PR #630 — 2026-10-31)

 > **CURRENT ON MAIN** via [PR #630](https://github.com/mcleland147/sfia-workspace/pull/630) merge **`14fb0c33…`** · Pre CI [#41199824723](https://github.com/mcleland147/sfia-workspace/actions/runs/41199824723) · Post CI [#41200321769](https://github.com/mcleland147/sfia-workspace/actions/runs/41200321769) **SUCCESS**. Extends #628 index.
diff --git a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
index a5b87ac9..846fa89a 100644
--- a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
@@ -5,6 +5,20 @@
 - Runtime v3 **NON ADOPTED**
 - This corpus does not change product behavior by itself (Living Reference is descriptive)

+## Overlay — GI-ORION-NORA-COHERENCE-CORR-01 (AS-IMPLEMENTED ON PRODUCT PR CANDIDATE — ≠ CURRENT ON MAIN — 2026-11-01)
+
+| Élément | Statut | Limite |
+|---|---|---|
+| Framing CURRENT catalog hydration | **CANDIDATE** DET + LIVE seam | ≠ MERGED / ≠ CURRENT ON MAIN |
+| NAP disposition footer isolation | **CANDIDATE** DET + LIVE seam | historical divergent rows preserved |
+| Bounded OpenAI LIVE Product seam (ORION) | **OBSERVED** under campaign auth | ≠ R-LIVE-EMIT GLOBAL PASS |
+| Authenticated browser screenshot ORION | **NOT PROVEN** | auth / Screen Recording gap |
+| Cursor REAL | **OFF** | G-REAL NOT GRANTED |
+| L3-S2 | **OPEN** | supports QA-02 / R-LIVE-EMIT trajectory; does not close |
+| R-STOP-BROWSER / R-SRV-RESTART / EP-S2-08 | **OPEN** | unchanged by this correction |
+
+Anti-claims: ≠ L3-S2 COMPLETE · ≠ runtime v3 ADOPTED · ≠ G-REAL · digest MATCH ≠ semantic exhaustiveness.
+
 ## Overlay — Nora UX consolidated / GI-NAP-UX-CONSOLIDATED-01 (CURRENT ON MAIN — PR #630 — 2026-10-31)

 | Field | Value |
diff --git a/projects/sfia-studio/production-runtime-reference/README.md b/projects/sfia-studio/production-runtime-reference/README.md
index a7c6e28d..5569fdca 100644
--- a/projects/sfia-studio/production-runtime-reference/README.md
+++ b/projects/sfia-studio/production-runtime-reference/README.md
@@ -66,6 +66,18 @@ Cycle 14 documentary truth-sync [PR #615](https://github.com/mcleland147/sfia-wo
 Canonical detail for lifecycle, known gaps, and main-vs-branch split: **[09 — Known Gaps](./09-known-gaps-reserves-and-current-boundaries.md)**. Volumes 03/07/08 dated 2026-10-25 overlays that still say pre-push **LOCAL DELIVERY** / **PENDING GIT INTEGRATION** are **HISTORICAL AS OF `a75d0ed5`** for lifecycle status (superseded by vol 09 + this README block). Behaviour marked **CURRENT ON MAIN** in those volumes remains main truth until merge.


+**GI-ORION-NORA-COHERENCE-CORR-01 — Framing CURRENT label + NAP disposition isolation (AS-IMPLEMENTED ON PRODUCT PR CANDIDATE — 2026-11-01):**
+
+| Epistemic class | Element |
+|---|---|
+| **AS-IMPLEMENTED ON PRODUCT PR CANDIDATE** | Branch `feat/akg-m5-l3s2-orion-nora-coherence-corr-01` · Product code **`9bd22f875d01404989a03de5db2c96e396e6d89c`** · **≠ CURRENT ON MAIN** until Morris merge |
+| **Incident (ORION / FRESH-LIVE-QA-01)** | Pilot clarification Cadrage vs Conception · Nora prose Conception · Product CURRENT `cyc:functional-design` · Framing card showed « Cadrage exploratoire » · dual structured/narrative + technical `CONTRADICTION CANDIDATE` footer |
+| **Root cause A** | `recommendation_ready` without candidate/approval left `catalogLabel` null → UI default « Cadrage » + universal « exploratoire » |
+| **Root cause B** | Empty structured `narrative` retained contaminated `turn.text` (disposition footer) → false CORR-A1B divergent |
+| **Candidate Product facts** | CURRENT Rec hydrates Framing snapshot · « exploratoire » only for Framing/`cyc:framing` · disposition footers stripped before NAP classify · typed Studio coherence notice · A1 when complementary/admissible · historical Memory B turns not rewritten |
+| **Proof ceiling** | DET T01–T12 + NAP/Framing/lifecycle suites · bounded OpenAI LIVE Product seam (`ORION_COHERENCE_LIVE=1`) · browser authenticated screenshot **NOT PROVEN** · Cursor REAL **OFF** |
+| **Anti-claims** | ≠ MERGED · ≠ CURRENT ON MAIN · ≠ L3-S2 COMPLETE · ≠ R-LIVE-EMIT GLOBAL PASS · ≠ G-REAL · ≠ runtime v3 ADOPTED |
+
 **Nora Adaptive Presentation UX consolidated / AKG-M5 L3-S2 — GI-NAP-UX-CONSOLIDATED-01 (CURRENT PRODUCT ON MAIN — PR #630 MERGED — 2026-10-31):**

 | Epistemic class | Element |
diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index 10b79c16..e3acef7d 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -1,13 +1,13 @@
 {
   "schemaVersion": 1,
   "kind": "SFIA_STUDIO_LIVING_PRODUCTION_RUNTIME_REFERENCE",
-  "lastReviewedCommit": "32207a38313cdfc49b437027ed183b2302e613c1",
-  "lastReviewedAt": "2026-11-01T00:45:00Z",
+  "lastReviewedCommit": "9bd22f875d01404989a03de5db2c96e396e6d89c",
+  "lastReviewedAt": "2026-11-01T09:30:00Z",
   "canonicalReadme": "projects/sfia-studio/production-runtime-reference/README.md",
   "volumes": [
     {
       "path": "projects/sfia-studio/production-runtime-reference/README.md",
-      "sha256_16": "8044d656b4adcf2f"
+      "sha256_16": "4f9aec3513102660"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/01-system-runtime-overview.md",
@@ -19,7 +19,7 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md",
-      "sha256_16": "e3db62b5815c19d7"
+      "sha256_16": "e7f057088f1609eb"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md",
@@ -31,19 +31,19 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md",
-      "sha256_16": "b07f13a99d5480bf"
+      "sha256_16": "7c919f5ef3d05389"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md",
-      "sha256_16": "f7fa45008c468b24"
+      "sha256_16": "73a7c5037da358b7"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md",
-      "sha256_16": "69248811a06a518c"
+      "sha256_16": "d85a16b32269a1ed"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md",
-      "sha256_16": "da34da09424f283a"
+      "sha256_16": "48be473a592c2e6a"
     }
   ],
   "components": [
@@ -620,7 +620,7 @@
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts",
-      "sha256_16": "21a836cb98ed444d"
+      "sha256_16": "cc83308bc00e63da"
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts",
```

## 16. Manifest / digests

- `node scripts/check-production-runtime-reference.mjs --write-digests` then check → **CONFORMANCE OK**
- `lastReviewedCommit` = Product code `9bd22f87…` (explicit candidate reference, not future merge SHA)
- Digest MATCH ≠ semantic exhaustiveness

## 17–20. Staged / commits / push / PR

| Field | Value |
|---|---|
| Product commit | `9bd22f875d01404989a03de5db2c96e396e6d89c` |
| R24 commit | `9b51a51c107fc44f6c473e0e2e372f645ea212ca` |
| Push | FF new remote branch; local HEAD = `origin/feat/akg-m5-l3s2-orion-nora-coherence-corr-01` |
| PR | **#635** https://github.com/mcleland147/sfia-workspace/pull/635 |
| Base / head | `main` ← `feat/akg-m5-l3s2-orion-nora-coherence-corr-01` @ `9b51a51c` |
| CI run | https://github.com/mcleland147/sfia-workspace/actions/runs/41293512880 |
| CI status | see section 21 (filled at publish time) |

## 21. GitHub CI actual state

**PASS** — Detect PASS · Build and validate PASS (9m33s) · Required Gate PASS · run [41293512880](https://github.com/mcleland147/sfia-workspace/actions/runs/41293512880) · HEAD `9b51a51c`

## 22. Fake/Real Qualification

| Layer | Class |
|---|---|
| DET suites | REAL deterministic |
| LIVE Product seam | REAL OpenAI bounded |
| Browser UI | NOT PROVEN |
| Cursor REAL | OFF |
| R24 | documentary candidate |

## 23. Debts / exclusions

- Browser screenshot ORION
- R-LIVE-EMIT / R-STOP-BROWSER / R-SRV-RESTART / EP-S2-08 remain OPEN
- L3-S2 OPEN
- Parallel JPI flake under unclean env — not Product delta
- `.tmp-sfia-review` not in PR
- No DB/snapshots/secrets in PR

## 24. Git Review Index

| File | Change | Root cause | Test | R24 | Commit |
|---|---|---|---|---|---|
| chatFirstFramingContinuity.ts | exploratoire Framing-only; neutral unknown | A | framing UI/d0 + ORION | 03/07 | 9bd22f87 |
| preCycleCandidateTrajectoryActions.ts | CURRENT Rec hydrate | A | framing continuity | 03/07 | 9bd22f87 |
| FramingContinuityCard.tsx | title from helper | A | framingContinuityCard.ui | 03 | 9bd22f87 |
| noraAdaptivePresentation.ts | strip footers; markers | B | ORION d0 + corrA1b | 03/06/07/08 | 9bd22f87 |
| noraProductTurnOutputType.ts | re-exports | B | — | 08 | 9bd22f87 |
| orchestrateTurn.ts | empty narrative prefer; Studio notice; durable presentation | B | ORION d0/LIVE | 06/07 | 9bd22f87 |
| orionNoraCoherenceCorr01.d0.test.ts | T01–12 | A+B | self | 08 | 9bd22f87 |
| orionNoraCoherenceCorr01.live.test.ts | opt-in LIVE | A+B | gated | 08/09 | 9bd22f87 |
| orion-coherence-corr-01-live-proof.ts | helper | — | manual | 08 | 9bd22f87 |
| framingContinuityCard.ui.test.tsx | Conception case | A | self | 08 | 9bd22f87 |
| PRR volumes+manifest | candidate sync | A+B docs | checker | R24 | 9b51a51c |

## 25. Verdict / gates

**GI-ORION-NORA-COHERENCE-CORR-01 PRODUCT + R24 PR OPEN · CI REQUIRED GATE PASS · READY FOR CHATGPT MERGE REVIEW · MORRIS MERGE GATE PENDING**

Gates: MERGE NOT AUTHORIZED; no branch deletion; no G-REAL; no v3 ADOPTED; L3-S2 OPEN.

## 26. Next L3-S2

ChatGPT reviews PR #635 → Morris merge decision → continue FRESH ORION QA after integration. No automatic merge/LIVE campaign from this cycle.

FIN PACK FULL — GI-ORION-NORA-COHERENCE-CORR-01
