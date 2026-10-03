# FULL DELIVERY REVIEW PACK — CHAT-FIRST-WORK-RECOMMENDATION-CONTINUITY-01 PASS 02

## 1. Timestamp
`2026-10-03T08:40:26Z`

## 2. Local Git Truth
- worktree: `/Users/morris/Projects/sfia-studio-chat-first-work-recommendation-continuity-delivery-01`
- branch: `delivery/sfia-studio-chat-first-work-recommendation-continuity-01`
- HEAD / origin/main: `193b79d6732cca8fe49455fc4df866add301e56f` (MATCH)
- audit handoff entry: `16526f4f92cabc461e38cec2175bf7e8d7c9700f`
- project commit: **NO**
- project push/PR/merge: **NO**

### status (product)
```
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/chatFirstGovernedDecisionLoop.ui.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.corr01.d0.test.ts
 M projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
 M projects/sfia-studio/app/features/project-assistant/actions.ts
 M projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
 M projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts
 M projects/sfia-studio/app/features/project-assistant/trajectoryRecommendationCurrentness.ts
 M projects/sfia-studio/app/features/project-assistant/w2/assessChatFirstWorkEligibility.ts
 M projects/sfia-studio/app/features/project-assistant/w2/closeProposalDecisionSubject.ts
 M projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts
 M projects/sfia-studio/app/features/project-assistant/w2/deferWorkRecommendation.ts
 M projects/sfia-studio/app/features/project-assistant/w2/disposeWorkRecommendation.ts
 M projects/sfia-studio/app/features/project-assistant/w2/presentedOptionSet.ts
 M projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectOptions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/resolveChatFirstPilotDecision.ts
 M projects/sfia-studio/app/features/project-assistant/w2/resolveCurrentNoraTrajectoryRecommendation.ts
 M projects/sfia-studio/app/features/project-assistant/w2/resolveTrajectoryDecisionSupportProjection.ts
 M projects/sfia-studio/app/features/project-assistant/w2/types.ts
 M projects/sfia-studio/app/lib/oa/cycle/application/deriveWorkRecommendations.ts
 M projects/sfia-studio/app/lib/oa/cycle/index.ts
 M projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
?? projects/sfia-studio/app/__tests__/project-assistant/chatFirstWorkRecommendationContinuity.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/w2/activeWorkRecommendationDecisionSubject.ts

```

### name-status
```
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/chatFirstGovernedDecisionLoop.ui.test.tsx
M	projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.corr01.d0.test.ts
M	projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
M	projects/sfia-studio/app/features/project-assistant/actions.ts
M	projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
M	projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts
M	projects/sfia-studio/app/features/project-assistant/trajectoryRecommendationCurrentness.ts
M	projects/sfia-studio/app/features/project-assistant/w2/assessChatFirstWorkEligibility.ts
M	projects/sfia-studio/app/features/project-assistant/w2/closeProposalDecisionSubject.ts
M	projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts
M	projects/sfia-studio/app/features/project-assistant/w2/deferWorkRecommendation.ts
M	projects/sfia-studio/app/features/project-assistant/w2/disposeWorkRecommendation.ts
M	projects/sfia-studio/app/features/project-assistant/w2/presentedOptionSet.ts
M	projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectOptions.ts
M	projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts
M	projects/sfia-studio/app/features/project-assistant/w2/resolveChatFirstPilotDecision.ts
M	projects/sfia-studio/app/features/project-assistant/w2/resolveCurrentNoraTrajectoryRecommendation.ts
M	projects/sfia-studio/app/features/project-assistant/w2/resolveTrajectoryDecisionSupportProjection.ts
M	projects/sfia-studio/app/features/project-assistant/w2/types.ts
M	projects/sfia-studio/app/lib/oa/cycle/application/deriveWorkRecommendations.ts
M	projects/sfia-studio/app/lib/oa/cycle/index.ts
M	projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json

```

### diff --stat
```
 .../chatFirstGovernedDecisionLoop.ui.test.tsx      |   1 +
 ...tNoraStudioSemanticContinuity.corr01.d0.test.ts |   7 +-
 .../importBoundaries.test.ts                       |   1 +
 .../app/features/project-assistant/actions.ts      |  20 +-
 .../features/project-assistant/f2/orchestrateF2.ts |  16 +-
 .../project-assistant/f2/studioCognitiveContext.ts |   4 +
 .../trajectoryRecommendationCurrentness.ts         |  41 +++-
 .../w2/assessChatFirstWorkEligibility.ts           |  63 ++++-
 .../w2/closeProposalDecisionSubject.ts             |  53 +++++
 .../project-assistant/w2/decideTrajectory.ts       | 174 ++++++++++++--
 .../w2/deferWorkRecommendation.ts                  |  75 ++++--
 .../w2/disposeWorkRecommendation.ts                |  78 +++++--
 .../project-assistant/w2/presentedOptionSet.ts     |  47 +++-
 .../project-assistant/w2/proposalSubjectOptions.ts |  90 ++++++++
 .../w2/proposeTrajectoryOptions.ts                 | 255 ++++++++++++++++++++-
 .../w2/resolveChatFirstPilotDecision.ts            | 206 ++++++++++++++++-
 .../resolveCurrentNoraTrajectoryRecommendation.ts  |  19 +-
 .../resolveTrajectoryDecisionSupportProjection.ts  |  89 ++++++-
 .../app/features/project-assistant/w2/types.ts     |  10 +-
 .../cycle/application/deriveWorkRecommendations.ts | 133 +++++++++--
 projects/sfia-studio/app/lib/oa/cycle/index.ts     |   3 +
 .../production-runtime-reference.manifest.json     |   4 +-
 22 files changed, 1278 insertions(+), 111 deletions(-)

```

## 3. Sources read
- Audit handoff `16526f4f` FULL
- Convergence Build Doctrine / Roadmap / C1 (pre-check)
- Framing 30/32/33/37 (via audit + C1)
- PRR 03 / 09 chat-first overlay
- Process CKC synthetic map / routing (guidance only)
- Product code listed in AS-IMPLEMENTED

## 4. Morris decisions consumed
| ID | Decision | Consumed |
|---|---|---|
| MD-WR-01 | Work Recommendations chat-first only; Journal read-only | YES |
| MD-WR-02 | Active ACW Work Recommendations visible in Journal before seal | YES |
| MD-WR-03 | First-class `work_recommendation` DecisionSubjectMode | YES |
| MD-WR-04 | PT TDS conditional after decidedByDecisionRef; replan via existing typed signals | YES |
| MD-WR-05 | Lifecycle remains separate / right panel | YES (no doctrine change) |

## 5. Convergence Pre-check
- Capacités: V3-F04 / F05 / F06 / F09 (replan only)
- Milestone: post chat-first Work (#537) + ACW + semantic continuity — COMPLETE junction
- KEEP: Epistemic, ACW materializer, PresentedOptionSet infra, decideTrajectory, defer, Journal UX, LifecycleSurface, Structured Outputs
- ADAPT: Work classifier/projection, DecisionSubjectMode, eligibility/resolver, disposition, TDS gate, currentness, cognitive note
- COMPLETE: ACW Work → Journal → chat disposition E2E
- Gaps closed at tested scope; production rarely emits `recommendationKind:"replan"` (typed field exists — T9/MX-TDS fixture-proven)
- Trajectory link holds; runtime v3 NON ADOPTED
- Exit proof: deterministic E2E matrix below
- Debt: production replan writer still rare; Work vs PT ambiguity fail-closed may require Pilot clarification when both present
- Morris gates for this Delivery: consumed MD-WR-01…05; no further STOP hit
- Next: ChatGPT Critical Review → distinct Morris GO for commit/push/PR

## 6. Architecture AS-IMPLEMENTED

### Families
1. **Work** — ACW `active-cycle-work:nora` (+ sealed `optset:*` carrier) → Journal left + chat-first → `decisionSubjectMode=work_recommendation`
2. **ProjectTrajectory** — true PT/replan when TDS PRESENT → existing PT chat-first accept path
3. **Lifecycle** — `lifecycle-recommendation:nora` → right panel only

### Work identity
- ACW EpistemicItem remains the epistemic identity (`epi:acw:…`)
- Lazy seal on disposition: Observation PresentedOptionSet + Options + technical optset Recommendation linked via relatedObjects to ACW id
- Journal dedup: sealed optset card suppresses unbound ACW card
- dispose updates **both** carrier and ACW status
- HD id `dec:w2-wr:*`; DecisionRef relates optionSetRef + ACW id
- ZERO artificial Proposal; ZERO PT promotion

### MD-WR-04 TDS gate
`shouldExposeTrajectoryDecisionSupport`:
- no cycle → NONE
- unreadable recovery/trajectory read exception → UNAVAILABLE
- PT undecided (or no decidedByDecisionRef) → expose
- PT decided + (`recommendationKind==="replan"` OR `requiresHumanDecision`) → expose
- PT decided + ordinary → NONE
No Pilot/Nora text heuristics.

### Currentness
Cutoff includes:
- `trajectory_option` HD bound to cycle (prior)
- HD whose id equals `decidedByDecisionRef` (covers HabitFlow `candidate_trajectory`)
Does **not** cut off Work Recommendations.

### Finalization
- Unbound ACW alone: **not** an `undisposed_recommendations` blocker (not yet governed sealed subject)
- Sealed active optset Work: **blocks**
- Disposed: clears
- Lifecycle never enters Work blocker

## 7. Files modified
See name-status. New:
- `w2/activeWorkRecommendationDecisionSubject.ts`
- `__tests__/project-assistant/chatFirstWorkRecommendationContinuity.d0.test.ts`

Scope note (MD-WR-03 implied): `decideTrajectory.ts`, `disposeWorkRecommendation.ts`, `actions.ts`, `orchestrateF2.ts`, `closeProposalDecisionSubject.ts`, `proposalSubjectOptions.ts`, `types.ts`, importBoundaries allowlist, PRR **manifest digests only** (mechanical for tracked `actions.ts` / `orchestrateF2.ts` — volumes 01–09 untouched).

## 8. Core diffs / new file (exploitable)
### DIFF projects/sfia-studio/app/lib/oa/cycle/application/deriveWorkRecommendations.ts
```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/application/deriveWorkRecommendations.ts b/projects/sfia-studio/app/lib/oa/cycle/application/deriveWorkRecommendations.ts
index 7d8be6ab..2a79fca6 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/application/deriveWorkRecommendations.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/application/deriveWorkRecommendations.ts
@@ -1,25 +1,27 @@
 /**
- * CHAT-FIRST-GOVERNED-DECISION-LOOP-01 (Morris correction) —
+ * CHAT-FIRST-GOVERNED-DECISION-LOOP-01 + CHAT-FIRST-WORK-RECOMMENDATION-CONTINUITY-01
  * Work Recommendation vs Lifecycle Recommendation family separation.
  *
- * Work Recommendations: in-cycle governed work (OptionSet / Proposal subject).
- * Carrier: EpistemicItem.type = Recommendation WITHOUT lifecycleRecommendation
- * and source ≠ lifecycle-recommendation:nora (typically source = optset:…).
+ * Work Recommendations:
+ * - historical sealed carriers: source / relatedObjects optset:*
+ * - ACW Nora Recommendations (source = active-cycle-work:nora) that are not
+ *   Lifecycle and not classified as active ProjectTrajectory-replan Recommendations
  *
- * Lifecycle Recommendations: NEXT_CYCLE / FINALIZE_CURRENT_CYCLE transitions.
- * Carrier: typed lifecycleRecommendation + source lifecycle-recommendation:nora.
+ * Lifecycle Recommendations: typed lifecycleRecommendation + source
+ * lifecycle-recommendation:nora — never Journal Work.
  *
- * Journal > Recommandations projects WORK only.
- * Right-panel / lifecycle projection keeps Lifecycle CURRENT only.
- * No new store / table.
+ * Journal > Recommandations projects WORK only (MD-WR-02).
+ * Dedup: when a sealed optset WR links an ACW id, project the sealed card only.
  */

 const LIFECYCLE_RECOMMENDATION_SOURCE = "lifecycle-recommendation:nora";
+const ACTIVE_CYCLE_WORK_SOURCE = "active-cycle-work:nora";
 const OPTION_SET_REF_PREFIX = "optset:";
 const PROPOSAL_ID_PREFIX = "prop:";
 const CYCLE_ID_PREFIX = "cycinst:";
 /** Alternate cycle id prefix used by some durable writers. */
 const CYCLE_INSTANCE_PREFIXES = ["cycinst:", "cycle:", "cyc:"] as const;
+const TRAJECTORY_OPTION_PREFIX = "opt:trajectory:";

 export type WorkRecommendationItemLike = {
   readonly type: string;
@@ -44,6 +46,8 @@ export type WorkRecommendationProjectionCard = {
   readonly createdAt: string;
   /** HumanDecision id closing this work recommendation when reconstructible. */
   readonly dispositionDecisionId: string | null;
+  /** ACW identity when this card is (or is linked to) an ACW Recommendation. */
+  readonly workRecommendationEpistemicItemId: string | null;
 };

 export function isLifecycleRecommendationItem(
@@ -54,19 +58,59 @@ export function isLifecycleRecommendationItem(
   return (item.source ?? "") === LIFECYCLE_RECOMMENDATION_SOURCE;
 }

+export function isActiveCycleWorkRecommendationItem(
+  item: WorkRecommendationItemLike,
+): boolean {
+  if (item.type !== "Recommendation") return false;
+  if (isLifecycleRecommendationItem(item)) return false;
+  return (item.source ?? "") === ACTIVE_CYCLE_WORK_SOURCE;
+}
+
+/**
+ * ACW Recommendation currently treated as ProjectTrajectory / replan fuel.
+ * Pure: opt:trajectory:* present AND caller marks PT decision-support open.
+ */
+export function isAcwProjectTrajectoryRecommendationItem(
+  item: WorkRecommendationItemLike,
+  input: {
+    readonly trajectoryDecisionSupportOpen: boolean;
+  },
+): boolean {
+  if (!isActiveCycleWorkRecommendationItem(item)) return false;
+  if (!input.trajectoryDecisionSupportOpen) return false;
+  return (item.relatedObjects ?? []).some((r) =>
+    r.startsWith(TRAJECTORY_OPTION_PREFIX),
+  );
+}
+
 export function isWorkRecommendationItem(
   item: WorkRecommendationItemLike,
+  input?: {
+    /** When true, ACW+opt:trajectory:* are PT fuel — excluded from Work. */
+    readonly trajectoryDecisionSupportOpen?: boolean;
+  },
 ): boolean {
   if (item.type !== "Recommendation") return false;
   if (isLifecycleRecommendationItem(item)) return false;
   const source = item.source ?? "";
-  // Primary durable carrier for chat-first work: PresentedOptionSet Recommendation.
   if (source.startsWith(OPTION_SET_REF_PREFIX)) return true;
-  // Fail-closed: unknown Recommendation sources without lifecycle payload are
-  // treated as work only when they carry an optset-related object.
-  return (item.relatedObjects ?? []).some((r) =>
-    r.startsWith(OPTION_SET_REF_PREFIX),
-  );
+  if (
+    (item.relatedObjects ?? []).some((r) => r.startsWith(OPTION_SET_REF_PREFIX))
+  ) {
+    return true;
+  }
+  if (source === ACTIVE_CYCLE_WORK_SOURCE) {
+    if (
+      isAcwProjectTrajectoryRecommendationItem(item, {
+        trajectoryDecisionSupportOpen:
+          input?.trajectoryDecisionSupportOpen === true,
+      })
+    ) {
+      return false;
+    }
+    return true;
+  }
+  return false;
 }

 export function workRecommendationOptionSetRef(
@@ -81,6 +125,18 @@ export function workRecommendationOptionSetRef(
   );
 }

+export function workRecommendationAcwId(
+  item: WorkRecommendationItemLike,
+): string | null {
+  if (isActiveCycleWorkRecommendationItem(item)) {
+    return item.epistemicItemId ?? null;
+  }
+  const fromRelated = (item.relatedObjects ?? []).find(
+    (r) => typeof r === "string" && r.startsWith("epi:acw:"),
+  );
+  return fromRelated ?? null;
+}
+
 function relatedCycleInstanceId(
   item: WorkRecommendationItemLike,
 ): string | null {
@@ -90,8 +146,6 @@ function relatedCycleInstanceId(
       if (related.startsWith(prefix) && related !== prefix) return related;
     }
   }
-  // Many writers store raw cycleInstanceId strings (no prefix). Prefer explicit
-  // ids that look like durable cycle instance ids when present.
   for (const related of item.relatedObjects ?? []) {
     if (/^cycinst:/i.test(related)) return related;
     if (/^ci[_:]/i.test(related)) return related;
@@ -111,13 +165,16 @@ function dispositionDecisionIdFromItems(
   all: ReadonlyArray<WorkRecommendationItemLike>,
 ): string | null {
   const optionSetRef = workRecommendationOptionSetRef(item);
-  if (!optionSetRef) return null;
+  const acwId = workRecommendationAcwId(item);
   for (const candidate of all) {
     if (candidate.type !== "DecisionRef" || candidate.status !== "active") {
       continue;
     }
     const related = candidate.relatedObjects ?? [];
-    if (!related.includes(optionSetRef)) continue;
+    const closesOptionSet =
+      optionSetRef != null && related.includes(optionSetRef);
+    const closesAcw = acwId != null && related.includes(acwId);
+    if (!closesOptionSet && !closesAcw) continue;
     const fromSource =
       typeof candidate.source === "string" && candidate.source.startsWith("dec:")
         ? candidate.source
@@ -157,12 +214,30 @@ export function projectCycleWorkRecommendations(input: {
   readonly cycleInstanceId: string | null;
   /** When cycle binding is missing on legacy items, attribute to this cycle. */
   readonly fallbackCycleInstanceId?: string | null;
+  /**
+   * When true, ACW Recommendations carrying opt:trajectory:* are treated as
+   * ProjectTrajectory fuel and excluded from Journal Work (MD-WR-02/04).
+   */
+  readonly trajectoryDecisionSupportOpen?: boolean;
 }): readonly WorkRecommendationProjectionCard[] {
   const cycleId = input.cycleInstanceId;
   if (!cycleId) return [];
+  const tdsOpen = input.trajectoryDecisionSupportOpen === true;
+  const workItems = input.items.filter((item) =>
+    isWorkRecommendationItem(item, { trajectoryDecisionSupportOpen: tdsOpen }),
+  );
+
+  // Dedup: sealed optset WR that links an ACW id suppresses the unbound ACW card.
+  const sealedAcwIds = new Set<string>();
+  for (const item of workItems) {
+    const optset = workRecommendationOptionSetRef(item);
+    if (!optset) continue;
+    const acw = workRecommendationAcwId(item);
+    if (acw) sealedAcwIds.add(acw);
+  }
+
   const cards: WorkRecommendationProjectionCard[] = [];
-  for (const item of input.items) {
-    if (!isWorkRecommendationItem(item)) continue;
+  for (const item of workItems) {
     if (
       !workRecommendationBelongsToCycle(
         item,
@@ -172,16 +247,28 @@ export function projectCycleWorkRecommendations(input: {
     ) {
       continue;
     }
+    const acwId = workRecommendationAcwId(item);
+    const optset = workRecommendationOptionSetRef(item);
+    if (
+      !optset &&
+      acwId &&
+      sealedAcwIds.has(acwId) &&
+      isActiveCycleWorkRecommendationItem(item)
+    ) {
+      continue;
+    }
     cards.push({
-      epistemicItemId: item.epistemicItemId ?? workRecommendationOptionSetRef(item) ?? "",
+      epistemicItemId:
+        item.epistemicItemId ?? workRecommendationOptionSetRef(item) ?? "",
       statement: item.statement ?? "",
       status: item.status,
       source: item.source ?? null,
-      optionSetRef: workRecommendationOptionSetRef(item),
+      optionSetRef: optset,
       proposalId: relatedProposalId(item),
       cycleInstanceId: relatedCycleInstanceId(item) ?? cycleId,
       createdAt: item.createdAt ?? "",
       dispositionDecisionId: dispositionDecisionIdFromItems(item, input.items),
+      workRecommendationEpistemicItemId: acwId,
     });
   }
   return cards.sort((a, b) => {

```

### DIFF projects/sfia-studio/app/features/project-assistant/w2/resolveTrajectoryDecisionSupportProjection.ts
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/resolveTrajectoryDecisionSupportProjection.ts b/projects/sfia-studio/app/features/project-assistant/w2/resolveTrajectoryDecisionSupportProjection.ts
index c5e31347..bc448e61 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/resolveTrajectoryDecisionSupportProjection.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/resolveTrajectoryDecisionSupportProjection.ts
@@ -4,9 +4,11 @@
  * import boundaries (vertical-slice-runtime is server-only).
  *
  * CORR-01 C4 — Epistemic / ambiguous / invented current state → UNAVAILABLE.
- * KNOWN EMPTY (no eligible Nora Recommendation after successful read) may use
- * deterministic_fallback. Never convert UNKNOWN into fallback-normal.
+ * MD-WR-04 — after PT decided, expose opt:trajectory:* only under existing
+ * typed genuine replan signals (recommendationKind:"replan" |
+ * requiresHumanDecision). Ordinary in-cycle work → NONE.
  */
+
 import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
 import type { StudioTrajectoryDecisionSupportProjection } from "../f2/studioCognitiveContext";
 import { deriveTrajectoryOptions } from "./trajectoryOptions";
@@ -30,6 +32,47 @@ const NONE: StudioTrajectoryDecisionSupportProjection = Object.freeze({
   currentRecommendationSource: null,
 });

+/**
+ * MD-WR-04 — pure gate. Existing typed recovery fields only; no text heuristics.
+ */
+export function shouldExposeTrajectoryDecisionSupport(input: {
+  readonly cycleInstanceId: string | null | undefined;
+  readonly trajectoryReadOk: boolean;
+  readonly decidedByDecisionRef: string | null | undefined;
+  readonly recoveryReadOk: boolean;
+  readonly recommendationKind?: string | null;
+  readonly requiresHumanDecision?: boolean | null;
+}):
+  | { readonly expose: true; readonly reason: "pt_undecided" | "genuine_replan" }
+  | {
+      readonly expose: false;
+      readonly reason:
+        | "no_active_cycle"
+        | "pt_decided_no_replan"
+        | "trajectory_unreadable";
+    }
+  | { readonly expose: "unavailable"; readonly reason: "state_unreadable" } {
+  if (!input.cycleInstanceId?.trim()) {
+    return { expose: false, reason: "no_active_cycle" };
+  }
+  if (!input.trajectoryReadOk || !input.recoveryReadOk) {
+    return { expose: "unavailable", reason: "state_unreadable" };
+  }
+  const decided =
+    typeof input.decidedByDecisionRef === "string" &&
+    input.decidedByDecisionRef.trim().length > 0;
+  if (!decided) {
+    return { expose: true, reason: "pt_undecided" };
+  }
+  if (
+    input.recommendationKind === "replan" ||
+    input.requiresHumanDecision === true
+  ) {
+    return { expose: true, reason: "genuine_replan" };
+  }
+  return { expose: false, reason: "pt_decided_no_replan" };
+}
+
 export async function resolveTrajectoryDecisionSupportProjection(input: {
   readonly oa: RuntimeOaStack;
   readonly projectId: string;
@@ -39,15 +82,51 @@ export async function resolveTrajectoryDecisionSupportProjection(input: {
     return NONE;
   }
   try {
-    const qual = await resolveW2QualificationInputs({
+    const recovery = await resolvePostEvidenceRecoveryContext({
       oa: input.oa,
       projectId: input.projectId,
     });
-    const recovery = await resolvePostEvidenceRecoveryContext({
+    if (!recovery.ok) {
+      return UNAVAILABLE;
+    }
+
+    // Absence of a current trajectory = PT undecided (expose). Only a readable
+    // decidedByDecisionRef closes the permanent PT option menu (MD-WR-04).
+    let decidedByDecisionRef: string | null = null;
+    try {
+      const current = await input.oa.cycleServices.getCurrentTrajectory.execute({
+        projectId: input.projectId,
+      });
+      if (current.ok) {
+        decidedByDecisionRef =
+          typeof current.trajectory.decidedByDecisionRef === "string"
+            ? current.trajectory.decidedByDecisionRef.trim() || null
+            : null;
+      }
+    } catch {
+      return UNAVAILABLE;
+    }
+
+    const gate = shouldExposeTrajectoryDecisionSupport({
+      cycleInstanceId: input.cycleInstanceId,
+      trajectoryReadOk: true,
+      decidedByDecisionRef,
+      recoveryReadOk: true,
+      recommendationKind: recovery.context?.recommendationKind ?? null,
+      requiresHumanDecision: recovery.context?.requiresHumanDecision ?? false,
+    });
+    if (gate.expose === "unavailable") {
+      return UNAVAILABLE;
+    }
+    if (!gate.expose) {
+      return NONE;
+    }
+
+    const qual = await resolveW2QualificationInputs({
       oa: input.oa,
       projectId: input.projectId,
     });
-    if (!qual.ok || !recovery.ok) {
+    if (!qual.ok) {
       return UNAVAILABLE;
     }
     const optionInputs = {

```

### DIFF projects/sfia-studio/app/features/project-assistant/trajectoryRecommendationCurrentness.ts
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/trajectoryRecommendationCurrentness.ts b/projects/sfia-studio/app/features/project-assistant/trajectoryRecommendationCurrentness.ts
index 8809ed0a..d81bcbb7 100644
--- a/projects/sfia-studio/app/features/project-assistant/trajectoryRecommendationCurrentness.ts
+++ b/projects/sfia-studio/app/features/project-assistant/trajectoryRecommendationCurrentness.ts
@@ -1,9 +1,15 @@
 /**
- * CORR-01 — subject-aware HumanDecision cutoff for Nora trajectory Recommendation
+ * CORR-01 + MD-WR currentness —
+ * subject-aware HumanDecision cutoff for Nora trajectory Recommendation
  * currentness. Pure domain helpers — no RuntimeOaStack / node:crypto.
  *
- * Same subject = accepted|amended HD with DecisionBasis.sourceType
- * `trajectory_option` bound to the active cycle. Proposal subjects do not cut off.
+ * Cutoff sources (PT Recommendations only — never Work Recommendations):
+ * - accepted|amended HD with DecisionBasis.sourceType `trajectory_option`
+ *   bound to the active cycle
+ * - accepted|amended HD that is the current trajectory's decidedByDecisionRef
+ *   (covers HabitFlow `candidate_trajectory` approval path)
+ *
+ * Proposal subjects do not cut off.
  */
 import type { HumanDecision } from "@/lib/oa/decision";

@@ -27,14 +33,37 @@ export function isAcceptedTrajectoryOptionDecisionForCycle(
 }

 /**
- * Latest effectiveAt among accepted/amended trajectory_option HDs for this cycle.
+ * HD that actually decided the current ProjectTrajectory pointer.
+ * Includes candidate_trajectory greenfield approval (HabitFlow Replay 02).
+ */
+export function isDecidingProjectTrajectoryHumanDecision(
+  decision: HumanDecision,
+  decidedByDecisionRef: string | null | undefined,
+): boolean {
+  if (decision.status !== "accepted" && decision.status !== "amended") {
+    return false;
+  }
+  const ref = decidedByDecisionRef?.trim() || "";
+  if (!ref) return false;
+  return decision.decisionId === ref;
+}
+
+/**
+ * Latest effectiveAt among PT-deciding HDs that supersede prior Nora PT Recs.
  */
 export function resolveTrajectoryRecommendationCutoffFromDecisions(input: {
   readonly decisions: readonly HumanDecision[];
   readonly cycleInstanceId: string;
+  /** Current ProjectTrajectory.decidedByDecisionRef when known. */
+  readonly decidedByDecisionRef?: string | null;
 }): string | null {
-  const matching = input.decisions.filter((d) =>
-    isAcceptedTrajectoryOptionDecisionForCycle(d, input.cycleInstanceId),
+  const matching = input.decisions.filter(
+    (d) =>
+      isAcceptedTrajectoryOptionDecisionForCycle(d, input.cycleInstanceId) ||
+      isDecidingProjectTrajectoryHumanDecision(
+        d,
+        input.decidedByDecisionRef ?? null,
+      ),
   );
   if (matching.length === 0) return null;
   let latest = matching[0]!.effectiveAt;

```

### NEW FILE projects/sfia-studio/app/features/project-assistant/w2/activeWorkRecommendationDecisionSubject.ts
```ts
/**
 * MD-WR-03 — Read-only resolution of the unique Work Recommendation decision
 * subject (ACW identity) for chat-first disposition.
 *
 * ACW (`active-cycle-work:nora` Recommendation) stays the durable identity.
 * A sealed `work_recommendation` PresentedOptionSet is only a decision carrier
 * created lazily on accept / refuse / amend / defer (see
 * `sealWorkRecommendationPresentedOptionSet`). No new store, no Proposal, no
 * ProjectTrajectory mutation.
 *
 * Candidates = active ACW Work Recommendations of the ACTIVE cycle that are
 * NOT ProjectTrajectory fuel (opt:trajectory:* while TDS is open). Multiple
 * candidates → ambiguous (Studio never selects for the Pilot).
 */

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  isAcwProjectTrajectoryRecommendationItem,
  isActiveCycleWorkRecommendationItem,
  workRecommendationBelongsToCycle,
  type EpistemicItem,
} from "@/lib/oa/cycle";
import {
  decidedOptionSetRefsFromEpistemicItems,
  type EpistemicReadFailure,
} from "./activeProposalDecisionSubject";
import {
  isWorkRecommendationPresentedSet,
  parsePresentedOptionSetStatement,
  type PresentedOptionSetBinding,
  W2_PRESENTED_OPTION_SET_KIND,
} from "./presentedOptionSet";
import { sealWorkRecommendationPresentedOptionSet } from "./proposeTrajectoryOptions";

export type ActiveWorkRecommendationLookup =
  | { readonly ok: true; readonly kind: "none" }
  | {
      readonly ok: true;
      readonly kind: "ambiguous";
      readonly workRecommendationIds: readonly string[];
    }
  | {
      readonly ok: true;
      readonly kind: "unique";
      readonly workRecommendationEpistemicItemId: string;
      readonly statement: string;
      /** Sealed awaiting set when one already exists; null → seal lazily. */
      readonly presented: PresentedOptionSetBinding | null;
    }
  | EpistemicReadFailure
  | {
      readonly ok: false;
      readonly code: "WORK_SUBJECT_READ_FAILED";
      readonly message: string;
    };

async function resolveTrajectoryDecisionSupportOpen(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly cycleInstanceId: string;
}): Promise<boolean> {
  const { resolveTrajectoryDecisionSupportProjection } = await import(
    "./resolveTrajectoryDecisionSupportProjection"
  );
  const tds = await resolveTrajectoryDecisionSupportProjection({
    oa: input.oa,
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
  });
  // Fail-closed: UNAVAILABLE is treated as open so opt:trajectory:* ACW items
  // are never silently disposed as Work.
  return tds.state !== "NONE";
}

/**
 * Pure-ish candidate selection (exported for tests).
 */
export function selectActiveWorkRecommendationCandidates(input: {
  readonly items: ReadonlyArray<EpistemicItem>;
  readonly cycleInstanceId: string;
  readonly trajectoryDecisionSupportOpen: boolean;
}): {
  readonly awaitingSets: ReadonlyMap<string, PresentedOptionSetBinding>;
  readonly unbound: ReadonlyArray<EpistemicItem>;
  readonly acwIds: readonly string[];
} {
  const decidedRefs = decidedOptionSetRefsFromEpistemicItems(input.items);
  const activeAcw = new Map<string, EpistemicItem>();
  for (const item of input.items) {
    if (item.status !== "active") continue;
    if (!isActiveCycleWorkRecommendationItem(item)) continue;
    if (
      isAcwProjectTrajectoryRecommendationItem(item, {
        trajectoryDecisionSupportOpen: input.trajectoryDecisionSupportOpen,
      })
    ) {
      continue;
    }
    if (
      !workRecommendationBelongsToCycle(
        item,
        input.cycleInstanceId,
        input.cycleInstanceId,
      )
    ) {
      continue;
    }
    activeAcw.set(item.epistemicItemId, item);
  }

  const awaitingSets = new Map<string, PresentedOptionSetBinding>();
  for (const item of input.items) {
    if (item.type !== "Observation" || item.status !== "active") continue;
    const parsed = parsePresentedOptionSetStatement(item.statement);
    if (!parsed || parsed.kind !== W2_PRESENTED_OPTION_SET_KIND) continue;
    if (!isWorkRecommendationPresentedSet(parsed)) continue;
    if (decidedRefs.has(parsed.optionSetRef)) continue;
    const acwId = parsed.workRecommendationEpistemicItemId!;
    // A sealed set whose ACW is no longer active is stale carrier residue.
    if (!activeAcw.has(acwId)) continue;
    awaitingSets.set(acwId, parsed);
  }

  const unbound = [...activeAcw.values()].filter(
    (item) => !awaitingSets.has(item.epistemicItemId),
  );
  return {
    awaitingSets,
    unbound,
    acwIds: [...activeAcw.keys()],
  };
}

export async function findActiveWorkRecommendationSubject(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
}): Promise<ActiveWorkRecommendationLookup> {
  const epistemic = await input.oa.cycleServices.getEpistemicState.execute({
    projectId: input.projectId,
  });
  if (!epistemic.ok) {
    return {
      ok: false,
      code: "EPISTEMIC_READ_FAILED",
      message:
        "État épistémique illisible — impossible de déterminer une recommandation de travail active.",
    };
  }
  const items = epistemic.state.items;

  // Cheap pre-filter: no ACW Recommendation at all → no Work subject (and no
  // TDS resolution cost).
  if (!items.some((i) => i.status === "active" && isActiveCycleWorkRecommendationItem(i))) {
    return { ok: true, kind: "none" };
  }

  const live = await input.oa.projectServices.getCurrentLivingProjectState.execute(
    { projectId: input.projectId },
  );
  const cycleInstanceId = live.ok
    ? (live.livingProjectState.activeCycleInstanceId ?? null)
    : null;
  if (!cycleInstanceId) {
    return { ok: true, kind: "none" };
  }

  // TDS only matters when an ACW item carries opt:trajectory:* refs.
  const needsTds = items.some(
    (i) =>
      i.status === "active" &&
      isActiveCycleWorkRecommendationItem(i) &&
      isAcwProjectTrajectoryRecommendationItem(i, {
        trajectoryDecisionSupportOpen: true,
      }),
  );
  const tdsOpen = needsTds
    ? await resolveTrajectoryDecisionSupportOpen({
        oa: input.oa,
        projectId: input.projectId,
        cycleInstanceId,
      })
    : false;

  const candidates = selectActiveWorkRecommendationCandidates({
    items,
    cycleInstanceId,
    trajectoryDecisionSupportOpen: tdsOpen,
  });
  if (candidates.acwIds.length === 0) {
    return { ok: true, kind: "none" };
  }
  if (candidates.acwIds.length > 1) {
    return {
      ok: true,
      kind: "ambiguous",
      workRecommendationIds: candidates.acwIds,
    };
  }
  const acwId = candidates.acwIds[0]!;
  const acw = items.find((i) => i.epistemicItemId === acwId)!;
  return {
    ok: true,
    kind: "unique",
    workRecommendationEpistemicItemId: acwId,
    statement: acw.statement,
    presented: candidates.awaitingSets.get(acwId) ?? null,
  };
}

/**
 * ProjectTrajectory chat-first accept would be sealable right now (TDS PRESENT
 * with a CURRENT Nora ref and no trajectory HD). Used only to refuse a silent
 * pick between PT and Work.
 */
export async function isProjectTrajectoryChatFirstSealEligible(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
}): Promise<boolean> {
  const current = await input.oa.cycleServices.getCurrentTrajectory.execute({
    projectId: input.projectId,
  });
  if (
    current.ok &&
    typeof current.trajectory.decidedByDecisionRef === "string" &&
    current.trajectory.decidedByDecisionRef.trim().length > 0
  ) {
    return false;
  }
  const { resolveTrajectoryDecisionSupportProjection } = await import(
    "./resolveTrajectoryDecisionSupportProjection"
  );
  const live = await input.oa.projectServices.getCurrentLivingProjectState.execute(
    { projectId: input.projectId },
  );
  const cycleInstanceId = live.ok
    ? (live.livingProjectState.activeCycleInstanceId ?? null)
    : null;
  const tds = await resolveTrajectoryDecisionSupportProjection({
    oa: input.oa,
    projectId: input.projectId,
    cycleInstanceId,
  });
  return (
    tds.state === "PRESENT" &&
    typeof tds.currentNoraRecommendedOptionRef === "string" &&
    tds.currentNoraRecommendedOptionRef.trim().length > 0
  );
}

/**
 * Return the sealed set for the unique Work subject, sealing lazily when the
 * subject is still an unbound ACW. Idempotent.
 */
export async function ensureSealedWorkRecommendationPresentedOptionSet(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly workRecommendationEpistemicItemId: string;
  readonly presented: PresentedOptionSetBinding | null;
}): Promise<
  | { readonly ok: true; readonly presented: PresentedOptionSetBinding }
  | { readonly ok: false; readonly code: string; readonly message: string }
> {
  if (input.presented) return { ok: true, presented: input.presented };
  const sealed = await sealWorkRecommendationPresentedOptionSet({
    oa: input.oa,
    projectId: input.projectId,
    workRecommendationEpistemicItemId: input.workRecommendationEpistemicItemId,
  });
  if (!sealed.ok) return sealed;
  return { ok: true, presented: sealed.presented };
}

```


### Key excerpts
```
=== DecisionSubjectMode ===
20:export type DecisionSubjectMode =
23:  | "work_recommendation";
35:  readonly decisionSubjectMode?: DecisionSubjectMode;
36:  /** MD-WR-03 — ACW identity sealed into the digest (work_recommendation only). */
83:  readonly decisionSubjectMode: DecisionSubjectMode;
87:   * MD-WR-03 — durable ACW Recommendation identity for work_recommendation mode.
125:    // Only present for work_recommendation so legacy digests stay stable.
173:    v.decisionSubjectMode === "work_recommendation"
183:  // proposal / work_recommendation: trajectory fields must be null/absent
185:  if (mode === "work_recommendation") {
227:export function isWorkRecommendationPresentedSet(
231:    presented.decisionSubjectMode === "work_recommendation" &&
=== shouldExpose ===
38:export function shouldExposeTrajectoryDecisionSupport(input: {
46:  | { readonly expose: true; readonly reason: "pt_undecided" | "genuine_replan" }
51:        | "pt_decided_no_replan"
71:    return { expose: true, reason: "genuine_replan" };
73:  return { expose: false, reason: "pt_decided_no_replan" };
110:    const gate = shouldExposeTrajectoryDecisionSupport({
=== isWorkRecommendationItem ACW ===
18:const ACTIVE_CYCLE_WORK_SOURCE = "active-cycle-work:nora";
61:export function isActiveCycleWorkRecommendationItem(
66:  return (item.source ?? "") === ACTIVE_CYCLE_WORK_SOURCE;
76:    readonly trajectoryDecisionSupportOpen: boolean;
79:  if (!isActiveCycleWorkRecommendationItem(item)) return false;
80:  if (!input.trajectoryDecisionSupportOpen) return false;
90:    readonly trajectoryDecisionSupportOpen?: boolean;
102:  if (source === ACTIVE_CYCLE_WORK_SOURCE) {
105:        trajectoryDecisionSupportOpen:
106:          input?.trajectoryDecisionSupportOpen === true,
131:  if (isActiveCycleWorkRecommendationItem(item)) {
221:  readonly trajectoryDecisionSupportOpen?: boolean;
225:  const tdsOpen = input.trajectoryDecisionSupportOpen === true;
227:    isWorkRecommendationItem(item, { trajectoryDecisionSupportOpen: tdsOpen }),
256:      isActiveCycleWorkRecommendationItem(item)

```

Full remaining diffs available in worktree (`git diff` / untracked new files). Large files: `proposeTrajectoryOptions.ts`, `resolveChatFirstPilotDecision.ts`, `decideTrajectory.ts`, continuity test (~900+ lines).

## 9. DecisionSubjectMode semantics
`proposal | project_trajectory | work_recommendation`
- work_recommendation requires `workRecommendationEpistemicItemId` (`epi:acw:`), `promotesProjectTrajectory=false`, null trajectory fields
- Server reloads durable PresentedOptionSet Observation before decide

## 10. Work Recommendation identity/binding
Documented in §6.

## 11. Journal projection
`projectCycleWorkRecommendations` includes ACW Work when TDS not open for PT fuel; lifecycle excluded; dedup after seal; cards expose resume affordance only (existing JournalSurface — no new CTA).

## 12. Chat-first eligibility
`assessChatFirstWorkEligibility` / `resolveChatFirstPilotDecision`:
- Proposal wins if pending
- Fail-closed if Proposal+Work+PT ambiguity
- Unique ACW Work → sealRequired / lazy seal
- Multiple ACW Work → ambiguous, ZERO HD
- targetKind accept: `current_recommendation` or `presented_subject`

## 13. Disposition semantics
accept/refuse/amend → decideTrajectory work mode → HD + DecisionRef + dispose ACW+carrier
defer → deferWorkRecommendation without Proposal closure
none/ambiguous → ZERO HD

## 14. TDS / replan gating
§6 MD-WR-04. Production replan emission remains rare (typed fields ready).

## 15. Currentness
§6 + MX-CUR test.

## 16. Finalization
§6 + MX-F1 test.

## 17. Tests T1–T14 (file numbering) + matrix extras
File `chatFirstWorkRecommendationContinuity.d0.test.ts` (18 tests) PASS:
- T1 eligibility sealRequired
- T2 multi ACW ambiguous
- T3 no subject
- T4 seal shape
- T5 accept HD
- T6 refuse/amend
- T7 defer
- T8 bad targetKind
- T9 Journal dedup
- T10 PT-fuel exclusion while TDS open
- T11 decideTrajectory work guards
- T12 Proposal priority
- T13 front-door accept
- T14 unrelated chat
- MX-J1 Journal unbound visibility (prompt T1)
- MX-F1 finalization (prompt T13)
- MX-TDS gate (prompt T9/T10)
- MX-CUR candidate_trajectory cutoff (prompt T11)

Also adapted: CORR-01 post-HD expects TDS NONE (MD-WR-04).
Regression suites PASS: ACW 59, HabitFlow PT continuity 17, frontDoor chat-first 11, deriveWorkRecommendations, UI chat-first, importBoundaries.

## 18. Full validations
| Check | Result |
|---|---|
| Targeted continuity + related | PASS |
| Full Vitest | **5115 PASS / 137 skipped** (460 files) |
| typecheck | PASS |
| lint | PASS |
| build | PASS |
| git diff --check | PASS |

## 19. Fake / Real qualification
- Deterministic: YES
- OpenAI REAL: NO
- Cursor REAL: NO
- HabitFlow instance mutation: ZERO
- Claim ceiling: **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE**
- NOT REAL BOUNDARY / READY FOR REAL / runtime v3 ADOPTED / PRODUCT GLOBAL READY

## 20. Reserves
- Production rarely writes `recommendationKind:"replan"` — genuine replan TDS path is typed + fixture-proven; live emission remains downstream
- When unique ACW Work coexists with sealable PT, eligibility is ambiguous (fail-closed) — Pilot must clarify
- Unbound ACW is Journal-visible but not finalization blocker until sealed (governed subject explicit)
- DecisionBasis for Work HD reuses closed enum `sourceType:"proposal"` with `sourceRef=optionSetRef` (not a Proposal id) — documented tradeoff; no new enum invented

## 21. Debt / exit
Debt: rare production replan writer; Work `sourceType:"proposal"` naming overload.
Exit: emit replan signal from durable recovery when F09 true; optional future DecisionBasis sourceType if Morris opens enum.

## 22. HabitFlow REAL instance
ZERO writes / ZERO replay / ZERO HD/EC/Attempt/REAL.

## 23. Project Git effects
- local Product mods: YES (uncommitted)
- commit/push/PR/merge/delete: **NO**

## 24. Recommendation ChatGPT
Critical review of this Delivery candidate against MD-WR-01…05, T matrix, TDS gate, Work identity/dedup, Lifecycle separation, and validation green. If PASS → Morris GO commit/push/PR (distinct).

## 25. UNIQUE VERDICT
**DELIVERY CANDIDATE READY FOR CHATGPT CRITICAL REVIEW**
