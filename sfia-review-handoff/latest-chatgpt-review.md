# CHAT-FIRST-WORK-RECOMMENDATION-CONTINUITY-01 — CORRECTION PASS 01

## 1. Timestamp
- Local: `2026-10-03 11:20:02 +0200`
- UTC: `2026-10-03T09:20:02Z`
- Macro: CHAT-FIRST-WORK-RECOMMENDATION-CONTINUITY-01
- Pass: Correction Pass 01 (CRITICAL / EVOL / Cycle 8 Delivery)
- Entry handoff: `7e853a9a24ea8b7692ca6be46171f74abdf8fed7`
- Claim ceiling: **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE**
- Verdict target: CORRECTION PASS 01 COMPLETE — READY FOR CHATGPT CRITICAL REVIEW

## 2. Local Git Truth
- Worktree: `/Users/morris/Projects/sfia-studio-chat-first-work-recommendation-continuity-delivery-01`
- Branch: `delivery/sfia-studio-chat-first-work-recommendation-continuity-01`
- HEAD: `193b79d6732cca8fe49455fc4df866add301e56f`
- origin/main: `193b79d6732cca8fe49455fc4df866add301e56f`
- HEAD == origin/main: **YES** (base unchanged `193b79d6732cca8fe49455fc4df866add301e56f`)
- Staged: none unexpected
- Project commit: **NO** (candidate remains uncommitted)
- Delivery candidate drift: **NO** — Pass 02 candidate preserved; CP01 corrections layered on top

### git status --short
```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/oa/cycle/deriveWorkRecommendations.d0.test.ts
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/chatFirstGovernedDecisionLoop.ui.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.corr01.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.d0.test.ts
 M projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
 M projects/sfia-studio/app/features/project-assistant/actions.ts
 M projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
 M projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts
 M projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
 M projects/sfia-studio/app/features/project-assistant/trajectoryRecommendationCurrentness.ts
 M projects/sfia-studio/app/features/project-assistant/w2/assessChatFirstWorkEligibility.ts
 M projects/sfia-studio/app/features/project-assistant/w2/closeProposalDecisionSubject.ts
 M projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts
 M projects/sfia-studio/app/features/project-assistant/w2/deferWorkRecommendation.ts
 M projects/sfia-studio/app/features/project-assistant/w2/disposeWorkRecommendation.ts
 M projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts
 M projects/sfia-studio/app/features/project-assistant/w2/presentedOptionSet.ts
 M projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectOptions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/resolveChatFirstPilotDecision.ts
 M projects/sfia-studio/app/features/project-assistant/w2/resolveCurrentNoraTrajectoryRecommendation.ts
 M projects/sfia-studio/app/features/project-assistant/w2/resolveTrajectoryDecisionSupportProjection.ts
 M projects/sfia-studio/app/features/project-assistant/w2/types.ts
 M projects/sfia-studio/app/lib/oa/cycle/application/deriveUndisposedRecommendations.ts
 M projects/sfia-studio/app/lib/oa/cycle/application/deriveWorkRecommendations.ts
 M projects/sfia-studio/app/lib/oa/cycle/application/pilotLifecycleTransitions.ts
 M projects/sfia-studio/app/lib/oa/cycle/index.ts
 M projects/sfia-studio/app/lib/oa/decision/domain/invariants.ts
 M projects/sfia-studio/app/lib/oa/decision/domain/types.ts
 M projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
?? .tmp-sfia-review/pack-assets/
?? projects/sfia-studio/app/__tests__/project-assistant/chatFirstWorkRecommendationContinuity.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/w2/activeWorkRecommendationDecisionSubject.ts
```

### git diff --name-status
```
M	.tmp-sfia-review/chatgpt-review.md
M	projects/sfia-studio/app/__tests__/oa/cycle/deriveWorkRecommendations.d0.test.ts
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/chatFirstGovernedDecisionLoop.ui.test.tsx
M	projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.corr01.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.d0.test.ts
M	projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
M	projects/sfia-studio/app/features/project-assistant/actions.ts
M	projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
M	projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts
M	projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
M	projects/sfia-studio/app/features/project-assistant/trajectoryRecommendationCurrentness.ts
M	projects/sfia-studio/app/features/project-assistant/w2/assessChatFirstWorkEligibility.ts
M	projects/sfia-studio/app/features/project-assistant/w2/closeProposalDecisionSubject.ts
M	projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts
M	projects/sfia-studio/app/features/project-assistant/w2/deferWorkRecommendation.ts
M	projects/sfia-studio/app/features/project-assistant/w2/disposeWorkRecommendation.ts
M	projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts
M	projects/sfia-studio/app/features/project-assistant/w2/presentedOptionSet.ts
M	projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectOptions.ts
M	projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts
M	projects/sfia-studio/app/features/project-assistant/w2/resolveChatFirstPilotDecision.ts
M	projects/sfia-studio/app/features/project-assistant/w2/resolveCurrentNoraTrajectoryRecommendation.ts
M	projects/sfia-studio/app/features/project-assistant/w2/resolveTrajectoryDecisionSupportProjection.ts
M	projects/sfia-studio/app/features/project-assistant/w2/types.ts
M	projects/sfia-studio/app/lib/oa/cycle/application/deriveUndisposedRecommendations.ts
M	projects/sfia-studio/app/lib/oa/cycle/application/deriveWorkRecommendations.ts
M	projects/sfia-studio/app/lib/oa/cycle/application/pilotLifecycleTransitions.ts
M	projects/sfia-studio/app/lib/oa/cycle/index.ts
M	projects/sfia-studio/app/lib/oa/decision/domain/invariants.ts
M	projects/sfia-studio/app/lib/oa/decision/domain/types.ts
M	projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
```

### git diff --stat
```
 .tmp-sfia-review/chatgpt-review.md                 | 7680 +++++++++-----------
 .../oa/cycle/deriveWorkRecommendations.d0.test.ts  |    2 +
 .../chatFirstGovernedDecisionLoop.ui.test.tsx      |    1 +
 ...tNoraStudioSemanticContinuity.corr01.d0.test.ts |    7 +-
 .../pilotNoraStudioSemanticContinuity.d0.test.ts   |   11 +
 .../importBoundaries.test.ts                       |    1 +
 .../app/features/project-assistant/actions.ts      |   39 +-
 .../features/project-assistant/f2/orchestrateF2.ts |   16 +-
 .../project-assistant/f2/studioCognitiveContext.ts |   28 +-
 .../project-assistant/f3/prepareM3FromDecision.ts  |   10 +
 .../trajectoryRecommendationCurrentness.ts         |  144 +-
 .../w2/assessChatFirstWorkEligibility.ts           |   63 +-
 .../w2/closeProposalDecisionSubject.ts             |   53 +
 .../project-assistant/w2/decideTrajectory.ts       |  183 +-
 .../w2/deferWorkRecommendation.ts                  |   75 +-
 .../w2/disposeWorkRecommendation.ts                |   78 +-
 .../w2/prepareExecutionContractFromW2Decision.ts   |   10 +
 .../project-assistant/w2/presentedOptionSet.ts     |   47 +-
 .../project-assistant/w2/proposalSubjectOptions.ts |   90 +
 .../w2/proposeTrajectoryOptions.ts                 |  255 +-
 .../w2/resolveChatFirstPilotDecision.ts            |  206 +-
 .../resolveCurrentNoraTrajectoryRecommendation.ts  |   27 +-
 .../resolveTrajectoryDecisionSupportProjection.ts  |  105 +-
 .../app/features/project-assistant/w2/types.ts     |   10 +-
 .../application/deriveUndisposedRecommendations.ts |  101 +-
 .../cycle/application/deriveWorkRecommendations.ts |  171 +-
 .../cycle/application/pilotLifecycleTransitions.ts |   66 +-
 projects/sfia-studio/app/lib/oa/cycle/index.ts     |    6 +
 .../app/lib/oa/decision/domain/invariants.ts       |   86 +-
 .../app/lib/oa/decision/domain/types.ts            |   28 +-
 .../production-runtime-reference.manifest.json     |    4 +-
 31 files changed, 5308 insertions(+), 4295 deletions(-)
```

## 3. Sources (re-read / normative)
1. `prompts/templates/sfia-cycle-execution-template.md`
2. `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md`
3. `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`
4. `projects/sfia-studio/product-completion/01-product-completion-cadrage.md`
5. `projects/sfia-studio/sfia-v3-framing/30-knowledge-context-human-decision-doctrine.md`
6. `projects/sfia-studio/sfia-v3-framing/32-living-project-state-and-dynamic-trajectory.md`
7. `projects/sfia-studio/sfia-v3-framing/33-epistemology-provenance-and-contradiction-model.md`
8. `projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md`
9. `projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md`
10. Handoff entry `7e853a9a24ea8b7692ca6be46171f74abdf8fed7` — Critical Review ChatGPT (normative for CP01 blockers)

## 4. Morris Decisions MD-WR-01…08 consumed
| ID | Status |
|----|--------|
| MD-WR-01 chat-first Work only; Journal RO | PRESERVED |
| MD-WR-02 ACW visible Journal before seal | PRESERVED |
| MD-WR-03 decisionSubjectMode work_recommendation; reuse POS/HD/epistemic | PRESERVED |
| MD-WR-04 PT decision-support conditional after PT decided | PRESERVED |
| MD-WR-05 Lifecycle separate; never START/FINALIZE via Work chat | PRESERVED |
| MD-WR-06 DecisionBasis sourceType work_recommendation + WorkRecommendationContext | **IMPLEMENTED** |
| MD-WR-07 Active unbound ACW Work blocks FINALIZE; seal dedupes | **IMPLEMENTED** |
| MD-WR-08 Delivery scope extension for required Product files | **CONSUMED** |

## 5. Convergence Pre-check
- Architecture already qualified (Pass 02 / audit handoff)
- HabitFlow RO instance corroboration unchanged (ZERO real mutation this pass)
- Runtime v3: **NON ADOPTED**
- Framing / Build Doctrine / Roadmap / C1 / method / prompts: **NOT MODIFIED**
- Modeled schema HumanDecision: **NOT MODIFIED** (STOP not triggered)
- New persistence / parallel decision engine: **NOT REQUIRED**

## 6. Prior Critical Review blockers — status after CP01
| Blocker | Status |
|---------|--------|
| B1 DecisionBasis false Proposal (sourceType=proposal + optset sourceRef) | **CLOSED** — sourceType=`work_recommendation` + typed context |
| B2 TDS fail-open (read failure → silent undecided) | **CLOSED** — NOT_FOUND vs other failure discriminated |
| B3 Journal NONE/UNAVAILABLE collapse | **CLOSED** — PRESENT\|NONE\|UNAVAILABLE tri-state |
| B4 currentness divergence (decidedByDecisionRef not everywhere) | **CLOSED** — shared `resolveProjectTrajectoryRecommendationCutoff` |
| B5 unbound ACW does not block finalization | **CLOSED** — logical Work identity + seal dedupe |
| Scope authority | **CLOSED** — MD-WR-08; no framing/PRR volume edits |

## 7. DecisionBasis diff (semantic)
- `DecisionBasisSourceType` extended with `"work_recommendation"`
- New `DecisionBasisWorkRecommendationContext`:
  - workRecommendationEpistemicItemId
  - optionSetRef
  - optionRefs
  - selectedOptionRef
  - recommendedOptionRef?
  - optionSetDigest
- `DecisionBasis.workRecommendationContext?` added
- Invariants: work forbids trajectory/candidate contexts; forbids `prop:` sourceRef; requires context; other sourceTypes forbid work context
- `decideTrajectory` work branch writes honest basis
- `prepareExecutionContractFromW2Decision` / `prepareM3FromDecision` refuse work HD (`PREPARE_NOT_APPLICABLE`)
- `deferWorkRecommendation`: still records HD **without** DecisionBasis (honest absence — never fake Proposal basis); CP01-T3-defer oracle locks this

## 8. WorkRecommendationContext
Materialized at accept/refuse/amend via `decideTrajectory` work_recommendation branch. sourceRef = optionSetRef (server-owned). ACW id bound in context. Digest payload includes decisionSubjectMode + ACW id + option refs.

## 9. TDS fail-closed
Shared helper `readCurrentTrajectoryDecidedByRef`:
- `ok` + trajectory → decidedByDecisionRef (trimmed or null)
- `ok:false` + `detailCode === TRAJECTORY_NOT_FOUND` → no current PT (undecided; may expose)
- any other failure / throw → `unavailable`
`resolveTrajectoryDecisionSupportProjection` maps unavailable → state `UNAVAILABLE` (ZERO opt:trajectory menu).

## 10. Journal tri-state
`projectCycleWorkRecommendations` / `isWorkRecommendationItem` / chat-first selection take `trajectoryDecisionSupportState: PRESENT|NONE|UNAVAILABLE`.
- PRESENT: ACW+opt:trajectory = PT fuel → excluded Work
- NONE: non-Lifecycle ACW → Work possible
- UNAVAILABLE: ACW+opt:trajectory → fail-closed excluded (never silent Work)
Plain ACW without opt:trajectory remains Work in all three states.
No `catch { open = false }` collapse.

## 11. Currentness cross-consumer
`resolveProjectTrajectoryRecommendationCutoff` always feeds `decidedByDecisionRef` into `resolveTrajectoryRecommendationCutoffFromDecisions`.
Consumers: `studioCognitiveContext`, `resolveCurrentNoraTrajectoryRecommendation` (via shared helper). Unreadable PT → fail closed (never claim CURRENT).

## 12. Finalization before/after seal
`deriveUndisposedRecommendations` classifies logical Work Recommendations (ACW identity):
- unbound active ACW Work → 1 blocker
- sealed carrier for same ACW → still 1 (deduped)
- disposed (DecisionRef / resolved|rejected|superseded) → 0
- Lifecycle never; PT fuel never under PRESENT; UNAVAILABLE fail-closed for opt:trajectory ACW
TDS resolver late-bound into `pilotLifecycle` (lib cannot import features); bound from TDS projection / actions / active Work subject lookup. Default when unbound: UNAVAILABLE.

## 13. Files modified final

- `.tmp-sfia-review/chatgpt-review.md` (MOD)
- `projects/sfia-studio/app/__tests__/oa/cycle/deriveWorkRecommendations.d0.test.ts` (MOD)
- `projects/sfia-studio/app/__tests__/pre-m6-product-ui/chatFirstGovernedDecisionLoop.ui.test.tsx` (MOD)
- `projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.corr01.d0.test.ts` (MOD)
- `projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.d0.test.ts` (MOD)
- `projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts` (MOD)
- `projects/sfia-studio/app/features/project-assistant/actions.ts` (MOD)
- `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts` (MOD)
- `projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts` (MOD)
- `projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts` (MOD)
- `projects/sfia-studio/app/features/project-assistant/trajectoryRecommendationCurrentness.ts` (MOD)
- `projects/sfia-studio/app/features/project-assistant/w2/assessChatFirstWorkEligibility.ts` (MOD)
- `projects/sfia-studio/app/features/project-assistant/w2/closeProposalDecisionSubject.ts` (MOD)
- `projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts` (MOD)
- `projects/sfia-studio/app/features/project-assistant/w2/deferWorkRecommendation.ts` (MOD)
- `projects/sfia-studio/app/features/project-assistant/w2/disposeWorkRecommendation.ts` (MOD)
- `projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts` (MOD)
- `projects/sfia-studio/app/features/project-assistant/w2/presentedOptionSet.ts` (MOD)
- `projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectOptions.ts` (MOD)
- `projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts` (MOD)
- `projects/sfia-studio/app/features/project-assistant/w2/resolveChatFirstPilotDecision.ts` (MOD)
- `projects/sfia-studio/app/features/project-assistant/w2/resolveCurrentNoraTrajectoryRecommendation.ts` (MOD)
- `projects/sfia-studio/app/features/project-assistant/w2/resolveTrajectoryDecisionSupportProjection.ts` (MOD)
- `projects/sfia-studio/app/features/project-assistant/w2/types.ts` (MOD)
- `projects/sfia-studio/app/lib/oa/cycle/application/deriveUndisposedRecommendations.ts` (MOD)
- `projects/sfia-studio/app/lib/oa/cycle/application/deriveWorkRecommendations.ts` (MOD)
- `projects/sfia-studio/app/lib/oa/cycle/application/pilotLifecycleTransitions.ts` (MOD)
- `projects/sfia-studio/app/lib/oa/cycle/index.ts` (MOD)
- `projects/sfia-studio/app/lib/oa/decision/domain/invariants.ts` (MOD)
- `projects/sfia-studio/app/lib/oa/decision/domain/types.ts` (MOD)
- `projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json` (MOD)
- `projects/sfia-studio/app/__tests__/project-assistant/chatFirstWorkRecommendationContinuity.d0.test.ts` (NEW)
- `projects/sfia-studio/app/features/project-assistant/w2/activeWorkRecommendationDecisionSubject.ts` (NEW)

## 14. Complete modified content (all Product files)

Each subsection embeds the full unified diff (or full new-file content). No external worktree dependency.

### `projects/sfia-studio/app/__tests__/oa/cycle/deriveWorkRecommendations.d0.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/cycle/deriveWorkRecommendations.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/cycle/deriveWorkRecommendations.d0.test.ts
index dbc3adb2..3e99e561 100644
--- a/projects/sfia-studio/app/__tests__/oa/cycle/deriveWorkRecommendations.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/cycle/deriveWorkRecommendations.d0.test.ts
@@ -135,6 +135,7 @@ describe("deriveWorkRecommendations — §10-A family separation", () => {
     const journalCards = projectCycleWorkRecommendations({
       items: [work, next, fin],
       cycleInstanceId: CYCLE_ID,
+      trajectoryDecisionSupportState: "NONE",
     });
     expect(journalCards).toHaveLength(1);
     expect(journalCards[0]!.epistemicItemId).toBe("epi:work-1");
@@ -256,6 +257,7 @@ describe("deriveWorkRecommendations — §10-A family separation", () => {
       items: [workRecommendation(), ...durableItems],
       cycleInstanceId: CYCLE_ID,
       fallbackCycleInstanceId: CYCLE_ID,
+      trajectoryDecisionSupportState: "NONE",
     });
     expect(workCards).toHaveLength(1);
     expect(workCards[0]!.optionSetRef).toBe(OPTION_SET);

```

### `projects/sfia-studio/app/__tests__/pre-m6-product-ui/chatFirstGovernedDecisionLoop.ui.test.tsx`

```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/chatFirstGovernedDecisionLoop.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/chatFirstGovernedDecisionLoop.ui.test.tsx
index 347f7342..119a0d2a 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/chatFirstGovernedDecisionLoop.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/chatFirstGovernedDecisionLoop.ui.test.tsx
@@ -267,6 +267,7 @@ const RECOMMENDATION: JournalRecommendationCard = {
   cycleInstanceId: "cycinst:a",
   createdAt: "2026-09-27T10:00:00.000Z",
   dispositionDecisionId: null,
+  workRecommendationEpistemicItemId: null,
 };

 const DECISION: JournalDecisionCard = {

```

### `projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.corr01.d0.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.corr01.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.corr01.d0.test.ts
index d6072e6f..e4d34fed 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.corr01.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.corr01.d0.test.ts
@@ -345,14 +345,17 @@ describe("CORR-01 product-path semantic continuity", () => {
     );
     expect(resolved.resolved.noraRecommendationEpistemicItemId).toBeNull();

+    // MD-WR-04 — after PT HumanDecision, trajectory option menu is closed
+    // (no permanent opt:trajectory:* exposure). Currentness cutoff above still
+    // proves prior Nora PT Recommendation is not CURRENT via resolver.
     const tds = await resolveTrajectoryDecisionSupportProjection({
       oa,
       projectId: seeded.projectId,
       cycleInstanceId: seeded.cycleInstanceId,
     });
-    expect(tds.state).toBe("PRESENT");
+    expect(tds.state).toBe("NONE");
     expect(tds.currentNoraRecommendedOptionRef).toBeNull();
-    expect(tds.currentRecommendationSource).toBe("deterministic_fallback");
+    expect(tds.optionRefs).toEqual([]);

     // Reload durable Product truth (new runtime on same sqlite).
     const runtime2 = bootW2Runtime({ productDbPath: db, idPrefix: "c01h2" });

```

### `projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.d0.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.d0.test.ts
index daf2bec8..f3614c5e 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.d0.test.ts
@@ -324,8 +324,18 @@ describe("PILOT-NORA-STUDIO-SEMANTIC-CONTINUITY-01", () => {
         decisions: { listByProject: async () => [] },
       },
     };
+    // Blocker 4 — PT read is fail-closed; TRAJECTORY_NOT_FOUND = no current PT.
+    const noTrajectory = {
+      getCurrentTrajectory: {
+        execute: async () => ({
+          ok: false,
+          error: { detailCode: "TRAJECTORY_NOT_FOUND" },
+        }),
+      },
+    };
     const oa = {
       cycleServices: {
+        ...noTrajectory,
         epistemic: {
           listByProject: async () => [
             acwRecommendationItem({
@@ -359,6 +369,7 @@ describe("PILOT-NORA-STUDIO-SEMANTIC-CONTINUITY-01", () => {
     const withoutNora = await resolveCurrentNoraTrajectoryRecommendation({
       oa: {
         cycleServices: {
+          ...noTrajectory,
           epistemic: { listByProject: async () => [] },
         },
         ...emptyDecisions,

```

### `projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
index 44852ad2..90426557 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
@@ -102,6 +102,7 @@ describe("V2-A1 vertical-slice-runtime import boundaries", () => {
       "features/project-assistant/w2/actions.ts:@/lib/vertical-slice-runtime/liveProjectContext",
       "features/project-assistant/w2/activeProjectTrajectoryDecisionSubject.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/activeProposalDecisionSubject.ts:@/lib/vertical-slice-runtime",
+      "features/project-assistant/w2/activeWorkRecommendationDecisionSubject.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/advanceProductExecutionContractAfterEvidence.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/amendExecutionContract.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/authorizeExecutionContract.ts:@/lib/vertical-slice-runtime",

```

### `projects/sfia-studio/app/features/project-assistant/actions.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/actions.ts b/projects/sfia-studio/app/features/project-assistant/actions.ts
index eb665f2d..4af97dc1 100644
--- a/projects/sfia-studio/app/features/project-assistant/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/actions.ts
@@ -32,6 +32,7 @@ import {
   type CycleReservationProjectionCard,
   type CycleReservationSummary,
   projectCycleWorkRecommendations,
+  type TrajectoryDecisionSupportState,
 } from "@/lib/oa/cycle";
 import type { HumanDecision } from "@/lib/oa/decision";
 import type {
@@ -1539,14 +1540,41 @@ async function buildAssistantPilotLifecycleProjection(
   // CHAT-FIRST — Décisions Journal tab (HumanDecision history).
   projection.cycleDecisions = projectCycleDecisionCards(decisions);

-  // Morris correction — Work Recommendations for Journal > Recommandations.
+  // Morris correction + MD-WR-02 — Work Recommendations for Journal > Recommandations.
   // Lifecycle CURRENT stays on currentRecommendations (right panel / audit only).
+  // When PT decision-support is open, ACW+opt:trajectory:* stay PT fuel (excluded).
   const workCycleId =
     projection.selectedCycleInstanceId ?? projection.activeCycleInstanceId;
+  // Blocker 3 — explicit TDS tri-state (never collapse NONE and UNAVAILABLE).
+  // No active/selected cycle → NONE (projection is empty anyway). Missing OA
+  // stack or any resolver failure → UNAVAILABLE (fail-closed).
+  let trajectoryDecisionSupportState: TrajectoryDecisionSupportState = "NONE";
+  if (workCycleId) {
+    if (!runtime.oa) {
+      trajectoryDecisionSupportState = "UNAVAILABLE";
+    } else {
+      try {
+        const {
+          resolveTrajectoryDecisionSupportProjection,
+          bindPilotLifecycleTrajectoryDecisionSupport,
+        } = await import("./w2/resolveTrajectoryDecisionSupportProjection");
+        bindPilotLifecycleTrajectoryDecisionSupport(runtime.oa);
+        const tds = await resolveTrajectoryDecisionSupportProjection({
+          oa: runtime.oa,
+          projectId,
+          cycleInstanceId: workCycleId,
+        });
+        trajectoryDecisionSupportState = tds.state;
+      } catch {
+        trajectoryDecisionSupportState = "UNAVAILABLE";
+      }
+    }
+  }
   projection.cycleWorkRecommendations = projectCycleWorkRecommendations({
     items: epistemicItems,
     cycleInstanceId: workCycleId,
     fallbackCycleInstanceId: workCycleId,
+    trajectoryDecisionSupportState,
   });

   if (
@@ -1794,6 +1822,15 @@ export async function projectAssistantPilotLifecycleAction(input: {
     };
   }
   const project = toContextDto(projectResult);
+  // MD-WR-07 — finalization blockers use the explicit TDS tri-state.
+  try {
+    const { bindPilotLifecycleTrajectoryDecisionSupport } = await import(
+      "./w2/resolveTrajectoryDecisionSupportProjection"
+    );
+    bindPilotLifecycleTrajectoryDecisionSupport(runtime.oa);
+  } catch {
+    /* unbound finalization stays fail-closed (UNAVAILABLE) */
+  }
   const executed = await executePilotLifecycleAction({
     action: input.action,
     projectId: input.projectId,

```

### `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 9c84e644..b6ac5d37 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -722,11 +722,25 @@ const CHAT_FIRST_HUMAN_STATUS: Record<
 function chatFirstDecisionText(input: {
   readonly presentation: "test_provider" | "openai_live";
   readonly disposition: ChatFirstEffectiveDisposition;
-  readonly subjectFamily?: "proposal" | "project_trajectory";
+  readonly subjectFamily?:
+    | "proposal"
+    | "project_trajectory"
+    | "work_recommendation";
   readonly prepareOutcome?: ChatFirstPrepareOutcome;
 }): string {
   const head =
     input.presentation === "test_provider" ? "[Mode test]" : "[Mode réel]";
+  if (
+    input.subjectFamily === "work_recommendation" &&
+    input.disposition === "accept"
+  ) {
+    return [
+      head,
+      "Votre décision est enregistrée : vous retenez la recommandation de travail.",
+      "La recommandation est clôturée ; aucune exécution n'a été lancée et aucune trajectoire projet n'est promue.",
+      "Nora recommande ; le Pilote décide. AUCUNE EXÉCUTION.",
+    ].join(" ");
+  }
   if (input.disposition === "accept") {
     if (input.subjectFamily === "project_trajectory") {
       const prep = input.prepareOutcome;

```

### `projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts b/projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts
index a5d1af96..f3b01c17 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts
@@ -45,7 +45,7 @@ import {
 import { ACTIVE_CYCLE_WORK_SOURCE, extractAcwRecommendedOptionRef } from "../materializeActiveCycleWork";
 import {
   classifyAcwRecommendationCurrentness,
-  resolveTrajectoryRecommendationCutoffFromDecisions,
+  resolveProjectTrajectoryRecommendationCutoff,
 } from "../trajectoryRecommendationCurrentness";
 import {
   pilotPresentedOptionLabel,
@@ -659,18 +659,16 @@ export async function composeStudioCognitiveContext(input: {
   if (activeCycle) {
     try {
       const epistemic = await oa.cycleServices.epistemic.listByProject(projectId);
-      let hdCutoff: string | null = null;
-      try {
-        const decisionsForCutoff =
-          await oa.decisionServices.decisions.listByProject(projectId);
-        hdCutoff = resolveTrajectoryRecommendationCutoffFromDecisions({
-          decisions: decisionsForCutoff,
-          cycleInstanceId: activeCycle.cycleInstanceId,
-        });
-      } catch {
-        // Decision unreadability → do not claim ACW Recommendation as CURRENT.
-        hdCutoff = "9999-12-31T23:59:59.999Z";
-      }
+      // Blocker 4 — shared PT currentness cutoff, always with the current
+      // trajectory's decidedByDecisionRef. Unreadable → never claim CURRENT.
+      const cutoffResolved = await resolveProjectTrajectoryRecommendationCutoff({
+        oa,
+        projectId,
+        cycleInstanceId: activeCycle.cycleInstanceId,
+      });
+      const hdCutoff: string | null = cutoffResolved.ok
+        ? cutoffResolved.cutoff
+        : "9999-12-31T23:59:59.999Z";
       const filtered = epistemic.filter(
         (item) =>
           item.source === ACTIVE_CYCLE_WORK_SOURCE &&
@@ -1042,6 +1040,10 @@ export function buildStudioCognitivePromptSections(
       lines.push(
         "Decision-support trajectoire : UNAVAILABLE — ne pas inventer d'optionRefs.",
       );
+    } else if (tds.state === "NONE") {
+      lines.push(
+        "Options trajectoire (ProjectTrajectory) : non ouvertes pour ce travail — les Work Recommendations se disposent en chat (accepter / amender / refuser / reporter) ; ne pas proposer d'optionRefs trajectoire.",
+      );
     }
     if (ctx.reservationFocusSection) {
       lines.push("");

```

### `projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts b/projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
index dee70b86..7dd7c5cf 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
@@ -459,6 +459,16 @@ export async function prepareM3FromDecision(input: {
   }
   const basis = basisOrFail as DecisionBasis;

+  // MD-WR-06 — Work Recommendation HD never opens PREPARE.
+  if (basis.sourceType === "work_recommendation") {
+    return {
+      ok: false,
+      code: "PREPARE_NOT_APPLICABLE",
+      message:
+        "Une décision sur recommandation de travail n'ouvre aucune préparation M3 — fail-closed.",
+    };
+  }
+
   /**
    * JOURNEY-INTEGRITY — amend / refuse on a Proposal decision subject close the
    * subject; they never open an execution path. The surface already hides the

```

### `projects/sfia-studio/app/features/project-assistant/trajectoryRecommendationCurrentness.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/trajectoryRecommendationCurrentness.ts b/projects/sfia-studio/app/features/project-assistant/trajectoryRecommendationCurrentness.ts
index 8809ed0a..06071e98 100644
--- a/projects/sfia-studio/app/features/project-assistant/trajectoryRecommendationCurrentness.ts
+++ b/projects/sfia-studio/app/features/project-assistant/trajectoryRecommendationCurrentness.ts
@@ -1,11 +1,81 @@
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
+ *
+ * Blocker 4 — every PT currentness computation MUST pass the current
+ * trajectory's decidedByDecisionRef. `resolveProjectTrajectoryRecommendationCutoff`
+ * is the single shared entry point (studioCognitiveContext, Nora resolution).
  */
 import type { HumanDecision } from "@/lib/oa/decision";
+import type { GetTrajectoryResult } from "@/lib/oa/cycle/domain/types";
+
+/** Structural ports only — no RuntimeOaStack import (browser-safe module). */
+export type TrajectoryCurrentnessPorts = {
+  readonly cycleServices: {
+    readonly getCurrentTrajectory: {
+      execute(input: { projectId: string }): Promise<GetTrajectoryResult>;
+    };
+  };
+  readonly decisionServices: {
+    readonly decisions: {
+      listByProject(projectId: string): Promise<HumanDecision[]>;
+    };
+  };
+};
+
+export type CurrentTrajectoryDecidedByRead =
+  | {
+      readonly kind: "ok";
+      /** null = current PT exists but undecided, OR no current PT at all. */
+      readonly decidedByDecisionRef: string | null;
+      readonly hasCurrentTrajectory: boolean;
+    }
+  | { readonly kind: "unavailable" };
+
+/**
+ * Fail-closed read of the current PT's decidedByDecisionRef.
+ * - ok:true → ref (trimmed) or null
+ * - ok:false + detailCode TRAJECTORY_NOT_FOUND → no current PT (undecided)
+ * - any other failure or thrown error → unavailable (never a silent null)
+ */
+export async function readCurrentTrajectoryDecidedByRef(input: {
+  readonly oa: Pick<TrajectoryCurrentnessPorts, "cycleServices">;
+  readonly projectId: string;
+}): Promise<CurrentTrajectoryDecidedByRead> {
+  try {
+    const current = await input.oa.cycleServices.getCurrentTrajectory.execute({
+      projectId: input.projectId,
+    });
+    if (current.ok) {
+      const ref = current.trajectory.decidedByDecisionRef;
+      return {
+        kind: "ok",
+        hasCurrentTrajectory: true,
+        decidedByDecisionRef:
+          typeof ref === "string" ? ref.trim() || null : null,
+      };
+    }
+    if (current.error?.detailCode === "TRAJECTORY_NOT_FOUND") {
+      return {
+        kind: "ok",
+        hasCurrentTrajectory: false,
+        decidedByDecisionRef: null,
+      };
+    }
+    return { kind: "unavailable" };
+  } catch {
+    return { kind: "unavailable" };
+  }
+}

 export function isAcceptedTrajectoryOptionDecisionForCycle(
   decision: HumanDecision,
@@ -27,14 +97,37 @@ export function isAcceptedTrajectoryOptionDecisionForCycle(
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
@@ -53,3 +146,42 @@ export function classifyAcwRecommendationCurrentness(input: {
   if (cutoff && input.createdAt <= cutoff) return "HISTORICAL";
   return "CURRENT";
 }
+
+/**
+ * Blocker 4 — shared PT currentness cutoff for a project/cycle. Always feeds
+ * the current trajectory's decidedByDecisionRef into the cutoff resolver.
+ * `ok:false` when decisions or the current trajectory cannot be read
+ * (callers must fail closed — never claim CURRENT).
+ */
+export async function resolveProjectTrajectoryRecommendationCutoff(input: {
+  readonly oa: TrajectoryCurrentnessPorts;
+  readonly projectId: string;
+  readonly cycleInstanceId: string;
+}): Promise<
+  | { readonly ok: true; readonly cutoff: string | null }
+  | { readonly ok: false; readonly reason: "decisions_unreadable" | "trajectory_unreadable" }
+> {
+  let decisions: HumanDecision[];
+  try {
+    decisions = await input.oa.decisionServices.decisions.listByProject(
+      input.projectId,
+    );
+  } catch {
+    return { ok: false, reason: "decisions_unreadable" };
+  }
+  const current = await readCurrentTrajectoryDecidedByRef({
+    oa: input.oa,
+    projectId: input.projectId,
+  });
+  if (current.kind === "unavailable") {
+    return { ok: false, reason: "trajectory_unreadable" };
+  }
+  return {
+    ok: true,
+    cutoff: resolveTrajectoryRecommendationCutoffFromDecisions({
+      decisions,
+      cycleInstanceId: input.cycleInstanceId,
+      decidedByDecisionRef: current.decidedByDecisionRef,
+    }),
+  };
+}

```

### `projects/sfia-studio/app/features/project-assistant/w2/assessChatFirstWorkEligibility.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/assessChatFirstWorkEligibility.ts b/projects/sfia-studio/app/features/project-assistant/w2/assessChatFirstWorkEligibility.ts
index fb8af29d..f48de68c 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/assessChatFirstWorkEligibility.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/assessChatFirstWorkEligibility.ts
@@ -5,6 +5,10 @@
  * HABITFLOW-CHAT-FIRST-PROJECTTRAJECTORY-HD-EC-CONTINUITY-01 —
  * Proposal subjects KEEP; unique ProjectTrajectory PresentedOptionSet ADDED;
  * Proposal+PT / multi-PT → ambiguous (D4).
+ *
+ * MD-WR-03 — work_recommendation family (ACW identity): Proposal keeps
+ * priority (unchanged); Work + sealed PT, Work + PT-sealable, multi-Work →
+ * ambiguous. Never a silent pick.
  */

 import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
@@ -13,6 +17,10 @@ import {
   readActiveProposalDecisionSubject,
 } from "./activeProposalDecisionSubject";
 import { findActiveAwaitingProjectTrajectoryPresentedOptionSet } from "./activeProjectTrajectoryDecisionSubject";
+import {
+  findActiveWorkRecommendationSubject,
+  isProjectTrajectoryChatFirstSealEligible,
+} from "./activeWorkRecommendationDecisionSubject";
 import {
   isProposalSubjectPresentedSet,
   type PresentedOptionSetBinding,
@@ -25,12 +33,15 @@ export type ChatFirstWorkEligibility =
   | {
       readonly eligible: true;
       readonly presented: PresentedOptionSetBinding;
-      readonly subjectFamily: "proposal" | "project_trajectory";
+      readonly subjectFamily:
+        | "proposal"
+        | "project_trajectory"
+        | "work_recommendation";
     }
   | {
       readonly eligible: true;
       readonly presented: null;
-      readonly subjectFamily: "project_trajectory";
+      readonly subjectFamily: "project_trajectory" | "work_recommendation";
       /** Sealed OptionSet will be materialised on accept inside the resolver. */
       readonly sealRequired: true;
     }
@@ -264,6 +275,54 @@ export async function assessChatFirstWorkEligibility(input: {
     };
   }

+  // ——— MD-WR-03 work_recommendation family (after Proposal/PT ambiguity) ———
+  const work = await findActiveWorkRecommendationSubject(input);
+  if (!work.ok) {
+    return {
+      eligible: false,
+      kind: "subject_read_failed",
+      code: work.code,
+      message: work.message,
+    };
+  }
+  if (work.kind === "ambiguous") {
+    return {
+      eligible: false,
+      kind: "ambiguous_subjects",
+      message: pilotAmbiguousPendingMessage(),
+      code: "AMBIGUOUS_WORK_RECOMMENDATION_SUBJECTS",
+      optionSetRefs: work.workRecommendationIds,
+    };
+  }
+  if (work.kind === "unique") {
+    // Never silent-pick between Work and ProjectTrajectory.
+    if (hasPtUnique || (await isProjectTrajectoryChatFirstSealEligible(input))) {
+      return {
+        eligible: false,
+        kind: "ambiguous_subjects",
+        message: pilotAmbiguousPendingMessage(),
+        code: "WORK_RECOMMENDATION_AND_PROJECT_TRAJECTORY_SUBJECTS",
+        optionSetRefs: [
+          work.workRecommendationEpistemicItemId,
+          ...(pt.kind === "unique" ? [pt.presented.optionSetRef] : []),
+        ],
+      };
+    }
+    if (work.presented) {
+      return {
+        eligible: true,
+        presented: work.presented,
+        subjectFamily: "work_recommendation",
+      };
+    }
+    return {
+      eligible: true,
+      presented: null,
+      subjectFamily: "work_recommendation",
+      sealRequired: true,
+    };
+  }
+
   if (hasPtUnique) {
     return {
       eligible: true,

```

### `projects/sfia-studio/app/features/project-assistant/w2/closeProposalDecisionSubject.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/closeProposalDecisionSubject.ts b/projects/sfia-studio/app/features/project-assistant/w2/closeProposalDecisionSubject.ts
index f869f723..03ded82c 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/closeProposalDecisionSubject.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/closeProposalDecisionSubject.ts
@@ -89,6 +89,59 @@ export async function writeProposalDecisionRef(
   return { ok: true, epistemicItemId };
 }

+/**
+ * MD-WR-03 — durable DecisionRef for a Work Recommendation subject.
+ * relatedObjects carry BOTH optionSetRef (optset:) and the ACW id (epi:acw:)
+ * so decidedOptionSetRefs / Journal disposition reconstruct without any
+ * Proposal id. No ProposalStore interaction.
+ */
+export async function writeWorkRecommendationDecisionRef(input: {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+  readonly decisionId: string;
+  readonly workRecommendationEpistemicItemId: string;
+  readonly selectedOptionRef: string;
+  readonly optionSetRef: string;
+  readonly epistemicRefs?: readonly string[];
+  readonly statement?: string;
+  readonly correlationId?: string;
+}): Promise<CloseProposalDecisionSubjectResult> {
+  const epistemicItemId = decisionRefEpistemicItemId(input.optionSetRef);
+  const closure = await input.oa.cycleServices.updateEpistemicState.execute({
+    projectId: input.projectId,
+    items: [
+      {
+        epistemicItemId,
+        type: "DecisionRef",
+        statement:
+          input.statement ??
+          `Décision humaine ${input.decisionId} — option retenue ${input.selectedOptionRef} — recommandation de travail ${input.workRecommendationEpistemicItemId} (ProjectTrajectory non promue).`,
+        status: "active",
+        source: input.decisionId,
+        relatedObjects: [
+          input.projectId,
+          input.decisionId,
+          input.selectedOptionRef,
+          input.optionSetRef,
+          input.workRecommendationEpistemicItemId,
+          ...(input.epistemicRefs ?? []),
+        ],
+      },
+    ],
+    createdBy: LOCAL_PILOTE_ACTOR,
+    correlationId:
+      input.correlationId ?? `w2-decref-work:${input.optionSetRef}`,
+  });
+  if (!closure.ok) {
+    return {
+      ok: false,
+      code: closure.error.detailCode,
+      message: `Closure DecisionRef recommandation de travail échouée (${closure.error.detailCode}) — HumanDecision non autoritaire.`,
+    };
+  }
+  return { ok: true, epistemicItemId };
+}
+
 /**
  * Process-local ProposalStore status + pending marker resolve.
  * Call ONLY after durable DecisionRef (and HD) succeeded.

```

### `projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts b/projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts
index c316401b..d8e5d1dc 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts
@@ -14,6 +14,13 @@
  *
  * CORR-PROOF-10 — Proposal subject OptionSets record HD only (ZERO promotion).
  * Client trajectoryId/candidateVersion are hostile and ignored in that mode.
+ *
+ * MD-WR-03 — Work Recommendation OptionSets (decisionSubjectMode
+ * work_recommendation) behave like Proposal subjects for promotion: HD +
+ * DecisionRef + dispose carrier AND ACW, ZERO ProjectTrajectory / Proposal
+ * store mutation. MD-WR-06: DecisionBasis.sourceType is `work_recommendation`
+ * with sourceRef=optionSetRef (never a prop: id) and a typed
+ * workRecommendationContext (ACW id, option refs, digest).
  */

 import { randomBytes, randomUUID } from "node:crypto";
@@ -38,6 +45,7 @@ import {
   computeOptionSetDigest,
   computeQualificationDigest,
   isProposalSubjectPresentedSet,
+  isWorkRecommendationPresentedSet,
   loadPresentedOptionSet,
 } from "./presentedOptionSet";
 import {
@@ -58,6 +66,7 @@ import type { F2ProposalStatus } from "../f2/types";
 import {
   finalizeProposalSubjectAfterDurableClosure,
   writeProposalDecisionRef,
+  writeWorkRecommendationDecisionRef,
 } from "./closeProposalDecisionSubject";
 import { disposeWorkRecommendationAfterDecision } from "./disposeWorkRecommendation";

@@ -198,6 +207,12 @@ type AtomicDecideOutcome =
       readonly markerReason: "decided" | "amended" | "refused";
       readonly nextProposalStatus: F2ProposalStatus;
     }
+  | {
+      readonly mode: "work_recommendation";
+      readonly decisionId: string;
+      readonly livingProjectStateVersion: number;
+      readonly workRecommendationEpistemicItemId: string;
+    }
   | {
       readonly mode: "project_trajectory";
       readonly decisionId: string;
@@ -242,9 +257,12 @@ export async function decideTrajectory(
   }
   const presented = loaded.presented;
   const proposalSubjectMode = isProposalSubjectPresentedSet(presented);
+  const workSubjectMode = isWorkRecommendationPresentedSet(presented);
+  /** Non-promoting subject (Proposal or Work Recommendation). */
+  const nonPromotingSubject = proposalSubjectMode || workSubjectMode;

   // Durable closure: a DecisionRef for this OptionSet means subject already decided.
-  if (proposalSubjectMode) {
+  if (nonPromotingSubject) {
     const epistemic = await oa.cycleServices.getEpistemicState.execute({
       projectId: input.projectId,
     });
@@ -267,12 +285,12 @@ export async function decideTrajectory(
         ok: false,
         code: "SUBJECT_ALREADY_DECIDED",
         message:
-          "Ce PresentedOptionSet Proposal a déjà reçu une HumanDecision — aucune seconde décision.",
+          "Ce PresentedOptionSet a déjà reçu une HumanDecision — aucune seconde décision.",
       };
     }
   }

-  if (!proposalSubjectMode) {
+  if (!nonPromotingSubject) {
     if (
       presented.trajectoryId !== input.trajectoryId ||
       presented.candidateVersion !== input.candidateVersion
@@ -298,6 +316,8 @@ export async function decideTrajectory(
     proposalId: presented.proposalId ?? null,
     proposalSubjectDigest: presented.proposalSubjectDigest ?? null,
     decisionSubjectMode: presented.decisionSubjectMode,
+    workRecommendationEpistemicItemId:
+      presented.workRecommendationEpistemicItemId ?? null,
   });
   if (recomputedDigest !== presented.optionSetDigest) {
     return {
@@ -321,11 +341,28 @@ export async function decideTrajectory(
           "OptionSet Proposal sans executionBasis/digest scellés — fail-closed.",
       };
     }
+  } else if (workSubjectMode) {
+    if (
+      presented.proposalId ||
+      presented.proposalSubjectDigest ||
+      presented.sealedExecutionBasis ||
+      presented.trajectoryId != null ||
+      presented.candidateVersion != null ||
+      presented.promotesProjectTrajectory !== false
+    ) {
+      return {
+        ok: false,
+        code: "SUBJECT_OPTION_SET_MISMATCH",
+        message:
+          "Liaison recommandation de travail incohérente (Proposal/trajectoire présentes) — fail-closed.",
+      };
+    }
   } else if (
     presented.proposalId ||
     presented.sealedExecutionBasis ||
     presented.promotesProjectTrajectory === false ||
-    presented.decisionSubjectMode === "proposal"
+    presented.decisionSubjectMode === "proposal" ||
+    presented.decisionSubjectMode === "work_recommendation"
   ) {
     return {
       ok: false,
@@ -382,7 +419,8 @@ export async function decideTrajectory(
   if (
     typeof presented.recommendationBasisDigest === "string" &&
     presented.recommendationBasisDigest.trim().length > 0 &&
-    presented.decisionSubjectMode !== "proposal"
+    presented.decisionSubjectMode !== "proposal" &&
+    presented.decisionSubjectMode !== "work_recommendation"
   ) {
     const liveForBasis = await readLiveProjectContext(oa, input.projectId);
     if (!liveForBasis.ok) {
@@ -459,7 +497,7 @@ export async function decideTrajectory(
   }

   // Trajectory candidate load — project_trajectory mode only.
-  if (!proposalSubjectMode) {
+  if (!nonPromotingSubject) {
     if (
       typeof input.trajectoryId !== "string" ||
       !input.trajectoryId.trim() ||
@@ -518,7 +556,52 @@ export async function decideTrajectory(

   const optionRefs = options.map((o) => o.optionRef);
   const sealed = presented.sealedExecutionBasis;
-  const decisionBasis: DecisionBasis = proposalSubjectMode
+  const workAcwId = presented.workRecommendationEpistemicItemId ?? null;
+  const decisionBasis: DecisionBasis = workSubjectMode
+    ? {
+        // MD-WR-06 — honest source type; NEVER "proposal".
+        sourceType: "work_recommendation",
+        sourceRef: input.optionSetRef,
+        workRecommendationContext: {
+          workRecommendationEpistemicItemId: workAcwId!,
+          optionSetRef: input.optionSetRef,
+          optionRefs: [...optionRefs],
+          selectedOptionRef: input.selectedOptionRef,
+          ...(recommendedOptionRef ? { recommendedOptionRef } : {}),
+          optionSetDigest,
+        },
+        sourceDigest: computeDecisionBasisSourceDigest({
+          decisionSubjectMode: "work_recommendation",
+          optionSetRef: input.optionSetRef,
+          optionSetDigest,
+          optionRefs,
+          selectedOptionRef: input.selectedOptionRef,
+          recommendedOptionRef,
+          workRecommendationEpistemicItemId: workAcwId,
+        }),
+        projectId: input.projectId,
+        cycleInstanceId: live.context.activeCycleInstanceId ?? undefined,
+        proposalContext: {
+          lpsId: live.context.lpsId,
+          lpsVersion: live.context.lpsVersion,
+          doctrineDigest: live.context.doctrineDigest,
+          activeCycleInstanceId: live.context.activeCycleInstanceId ?? undefined,
+          ckcResolutionRef: live.context.ckcResolutionRef ?? undefined,
+        },
+        // NO trajectoryContext — Work Recommendation never binds ProjectTrajectory.
+        // NO targetPath / intentKind — never an execution-qualifying basis.
+        executionBasis: {
+          objective: live.context.objective,
+          scope: selected.intent,
+          expectedOutcome: `Recommandation de travail ${workAcwId}: ${selected.label}`,
+          reservations: input.reservesText?.trim()
+            ? [input.reservesText.trim()]
+            : [...selected.reservations],
+          stopConditions: ["AUCUNE EXÉCUTION", "STOP AVANT EXECUTE"],
+          requestedOperation: `w2:work-recommendation:${input.selectedOptionRef}`,
+        },
+      }
+    : proposalSubjectMode
     ? {
         sourceType: "proposal",
         sourceRef: presented.proposalId!,
@@ -658,13 +741,17 @@ export async function decideTrajectory(
         },
       };

-  const decisionId = proposalSubjectMode
-    ? `dec:w2-prop:${randomUUID()}`
-    : `dec:w2-trj:${randomUUID()}`;
+  const decisionId = workSubjectMode
+    ? `dec:w2-wr:${randomUUID()}`
+    : proposalSubjectMode
+      ? `dec:w2-prop:${randomUUID()}`
+      : `dec:w2-trj:${randomUUID()}`;
   const reserves = input.reservesText?.trim();
-  const decisionSubject = proposalSubjectMode
-    ? `W2 Proposal subject arbitration for ${presented.proposalId}`
-    : `W2 trajectory arbitration for ${input.optionSetRef}`;
+  const decisionSubject = workSubjectMode
+    ? `W2 work recommendation arbitration for ${workAcwId}`
+    : proposalSubjectMode
+      ? `W2 Proposal subject arbitration for ${presented.proposalId}`
+      : `W2 trajectory arbitration for ${input.optionSetRef}`;

   let atomic: AtomicDecideOutcome;
   try {
@@ -701,9 +788,11 @@ export async function decideTrajectory(
         decisionBasis,
         linkToLivingProjectState: true,
         expectedLpsVersion: live.context.lpsVersion,
-        correlationId: proposalSubjectMode
-          ? `w2-dec-prop:${presented.proposalId}`
-          : `w2-dec:${input.optionSetRef}`,
+        correlationId: workSubjectMode
+          ? `w2-dec-wr:${input.optionSetRef}`
+          : proposalSubjectMode
+            ? `w2-dec-prop:${presented.proposalId}`
+            : `w2-dec:${input.optionSetRef}`,
       });

       if (!recorded.ok) {
@@ -716,6 +805,46 @@ export async function decideTrajectory(
       const lpsAfterDecision =
         recorded.livingProjectStateVersion ?? live.context.lpsVersion;

+      if (workSubjectMode) {
+        // Work Recommendation subject — HD + DecisionRef + dispose carrier AND ACW
+        // in ONE UoW. ZERO ProjectTrajectory, ZERO ProposalStore.
+        const workDisposition =
+          input.selectedOptionRef === PROPOSAL_SUBJECT_REFUSE_REF
+            ? ("refuse" as const)
+            : input.selectedOptionRef === PROPOSAL_SUBJECT_AMEND_REF
+              ? ("amend" as const)
+              : ("accept" as const);
+        const closure = await writeWorkRecommendationDecisionRef({
+          oa,
+          projectId: input.projectId,
+          decisionId,
+          workRecommendationEpistemicItemId: workAcwId!,
+          selectedOptionRef: input.selectedOptionRef,
+          optionSetRef: input.optionSetRef,
+          epistemicRefs,
+        });
+        if (!closure.ok) {
+          throw new DecideAtomicFailure(closure.code, closure.message);
+        }
+        const workDisposed = await disposeWorkRecommendationAfterDecision({
+          oa,
+          projectId: input.projectId,
+          optionSetRef: input.optionSetRef,
+          decisionId,
+          disposition: workDisposition,
+          workRecommendationEpistemicItemId: workAcwId,
+        });
+        if (!workDisposed.ok) {
+          throw new DecideAtomicFailure(workDisposed.code, workDisposed.message);
+        }
+        return {
+          mode: "work_recommendation" as const,
+          decisionId,
+          livingProjectStateVersion: lpsAfterDecision,
+          workRecommendationEpistemicItemId: workAcwId!,
+        };
+      }
+
       if (proposalSubjectMode) {
         // Non-trajectory Proposal subject — HD + DecisionRef closure in ONE UoW.
         // ZERO ProjectTrajectory. ProposalStore is updated only AFTER durable success.
@@ -843,6 +972,28 @@ export async function decideTrajectory(
     };
   }

+  if (atomic.mode === "work_recommendation") {
+    return {
+      ok: true,
+      decision: {
+        decisionId: atomic.decisionId,
+        selectedOptionRef: input.selectedOptionRef,
+        actorRole: "Pilote",
+        authorityClass: "morris",
+        statusLabel: "DÉCISION HUMAINE PRISE",
+        capturedAt: issuedAt,
+        decisionBasisLinked: true,
+        reservesText: reserves ?? null,
+        proposalId: null,
+      },
+      trajectory: null,
+      livingProjectStateVersion: atomic.livingProjectStateVersion,
+      executionPerformed: false,
+      promotesProjectTrajectory: false,
+      decisionSubjectMode: "work_recommendation",
+    };
+  }
+
   if (atomic.mode === "proposal") {
     // Process-local ProposalStore is NOT transactional — update only after durable success.
     await finalizeProposalSubjectAfterDurableClosure({

```

### `projects/sfia-studio/app/features/project-assistant/w2/deferWorkRecommendation.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/deferWorkRecommendation.ts b/projects/sfia-studio/app/features/project-assistant/w2/deferWorkRecommendation.ts
index 9cfdb242..032f32a2 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/deferWorkRecommendation.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/deferWorkRecommendation.ts
@@ -24,10 +24,14 @@ import {
   resolveHonestReservationDeferTarget,
   type EpistemicReservationMetadata,
 } from "@/lib/oa/cycle/domain/reservationSemantics";
-import type { PresentedOptionSetBinding } from "./presentedOptionSet";
+import {
+  isWorkRecommendationPresentedSet,
+  type PresentedOptionSetBinding,
+} from "./presentedOptionSet";
 import {
   finalizeProposalSubjectAfterDurableClosure,
   writeProposalDecisionRef,
+  writeWorkRecommendationDecisionRef,
 } from "./closeProposalDecisionSubject";
 import { disposeWorkRecommendationAfterDecision } from "./disposeWorkRecommendation";

@@ -172,8 +176,14 @@ export async function deferWorkRecommendation(input: {
   | { readonly ok: false; readonly code: string; readonly message: string }
 > {
   const optionSetRef = input.presented.optionSetRef;
-  const proposalId = input.presented.proposalId;
-  if (!proposalId) {
+  // MD-WR-03 — work_recommendation mode has no Proposal: skip proposal
+  // closure; still HD + Reservation + dispose WR carrier AND ACW.
+  const workMode = isWorkRecommendationPresentedSet(input.presented);
+  const workAcwId = workMode
+    ? (input.presented.workRecommendationEpistemicItemId ?? null)
+    : null;
+  const proposalId = input.presented.proposalId ?? null;
+  if (!workMode && !proposalId) {
     return {
       ok: false,
       code: "PROPOSAL_ID_MISSING",
@@ -286,6 +296,7 @@ export async function deferWorkRecommendation(input: {
           rationale,
           evidenceRefs: [
             workRec.epistemicItemId!,
+            ...(workAcwId ? [workAcwId] : []),
             optionSetRef,
             target.targetCycleTypeId,
           ],
@@ -333,6 +344,7 @@ export async function deferWorkRecommendation(input: {
                 input.projectId,
                 activeCycleInstanceId,
                 workRec.epistemicItemId!,
+                ...(workAcwId ? [workAcwId] : []),
                 optionSetRef,
                 decisionId,
               ],
@@ -353,6 +365,7 @@ export async function deferWorkRecommendation(input: {
         decisionId,
         disposition: "defer",
         deferTargetCycleTypeId: target.targetCycleTypeId,
+        workRecommendationEpistemicItemId: workAcwId,
       });
       if (!disposed.ok) {
         throw Object.assign(new Error(disposed.message), {
@@ -360,19 +373,31 @@ export async function deferWorkRecommendation(input: {
         });
       }

-      const closure = await writeProposalDecisionRef({
-        oa: input.oa,
-        projectId: input.projectId,
-        decisionId,
-        proposalId,
-        selectedOptionRef: WORK_RECOMMENDATION_DEFER_OPTION_ID,
-        optionSetRef,
-        epistemicRefs: input.presented.epistemicRefs,
-        markerReason: "decided",
-        nextProposalStatus: "APPROVED_WITH_RESERVES",
-        statement: `Décision reportée (defer) — ${decisionId} — sujet ${proposalId}.`,
-        correlationId: `w2-decref-defer:${optionSetRef}`,
-      });
+      const closure = workMode
+        ? await writeWorkRecommendationDecisionRef({
+            oa: input.oa,
+            projectId: input.projectId,
+            decisionId,
+            workRecommendationEpistemicItemId: workAcwId!,
+            selectedOptionRef: WORK_RECOMMENDATION_DEFER_OPTION_ID,
+            optionSetRef,
+            epistemicRefs: input.presented.epistemicRefs,
+            statement: `Décision reportée (defer) — ${decisionId} — recommandation de travail ${workAcwId}.`,
+            correlationId: `w2-decref-defer:${optionSetRef}`,
+          })
+        : await writeProposalDecisionRef({
+            oa: input.oa,
+            projectId: input.projectId,
+            decisionId,
+            proposalId: proposalId!,
+            selectedOptionRef: WORK_RECOMMENDATION_DEFER_OPTION_ID,
+            optionSetRef,
+            epistemicRefs: input.presented.epistemicRefs,
+            markerReason: "decided",
+            nextProposalStatus: "APPROVED_WITH_RESERVES",
+            statement: `Décision reportée (defer) — ${decisionId} — sujet ${proposalId}.`,
+            correlationId: `w2-decref-defer:${optionSetRef}`,
+          });
       if (!closure.ok) {
         throw Object.assign(new Error(closure.message), {
           detailCode: closure.code,
@@ -397,14 +422,16 @@ export async function deferWorkRecommendation(input: {
     };
   }

-  await finalizeProposalSubjectAfterDurableClosure({
-    oa: input.oa,
-    projectId: input.projectId,
-    proposalId,
-    markerReason: "decided",
-    nextProposalStatus: "APPROVED_WITH_RESERVES",
-    correlationId: `cor:pending-defer:${proposalId}`,
-  });
+  if (!workMode && proposalId) {
+    await finalizeProposalSubjectAfterDurableClosure({
+      oa: input.oa,
+      projectId: input.projectId,
+      proposalId,
+      markerReason: "decided",
+      nextProposalStatus: "APPROVED_WITH_RESERVES",
+      correlationId: `cor:pending-defer:${proposalId}`,
+    });
+  }

   return {
     ok: true,

```

### `projects/sfia-studio/app/features/project-assistant/w2/disposeWorkRecommendation.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/disposeWorkRecommendation.ts b/projects/sfia-studio/app/features/project-assistant/w2/disposeWorkRecommendation.ts
index 641576aa..7d056e66 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/disposeWorkRecommendation.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/disposeWorkRecommendation.ts
@@ -5,10 +5,12 @@

 import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
 import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
+import type { EpistemicItem } from "@/lib/oa/cycle";
 import {
+  isActiveCycleWorkRecommendationItem,
   isWorkRecommendationItem,
+  workRecommendationAcwId,
   workRecommendationOptionSetRef,
-  type WorkRecommendationItemLike,
 } from "@/lib/oa/cycle/application/deriveWorkRecommendations";
 import type { ChatFirstEffectiveDisposition } from "./resolveChatFirstPilotDecision";

@@ -27,11 +29,16 @@ export async function disposeWorkRecommendationAfterDecision(input: {
   readonly decisionId: string;
   readonly disposition: ChatFirstEffectiveDisposition | "defer";
   readonly deferTargetCycleTypeId?: string | null;
+  /**
+   * MD-WR-03 — ACW identity of a sealed work_recommendation set. When absent
+   * it is derived from the optset Recommendation's relatedObjects (epi:acw:*).
+   */
+  readonly workRecommendationEpistemicItemId?: string | null;
 }): Promise<
   | { readonly ok: true; readonly epistemicItemId: string | null }
   | { readonly ok: false; readonly code: string; readonly message: string }
 > {
-  let items: WorkRecommendationItemLike[] = [];
+  let items: EpistemicItem[] = [];
   try {
     items = await input.oa.cycleServices.epistemic.listByProject(input.projectId);
   } catch {
@@ -48,31 +55,60 @@ export async function disposeWorkRecommendationAfterDecision(input: {
       workRecommendationOptionSetRef(item) === input.optionSetRef &&
       item.status === "active",
   );
-  if (!match?.epistemicItemId) {
+
+  const acwId =
+    input.workRecommendationEpistemicItemId?.trim() ||
+    (match ? workRecommendationAcwId(match) : null);
+  const acwItem = acwId
+    ? items.find(
+        (item) =>
+          item.epistemicItemId === acwId &&
+          item.status === "active" &&
+          isActiveCycleWorkRecommendationItem(item),
+      )
+    : undefined;
+
+  if (!match?.epistemicItemId && !acwItem?.epistemicItemId) {
     return { ok: true, epistemicItemId: null };
   }

   const nextStatus = statusAfterDisposition(input.disposition);
-  const related = new Set(match.relatedObjects ?? []);
-  related.add(input.decisionId);
-  if (input.deferTargetCycleTypeId?.trim()) {
-    related.add(`defer-target:${input.deferTargetCycleTypeId.trim()}`);
+  const disposeItems: Array<{
+    readonly item: EpistemicItem;
+    readonly fallbackSource: string;
+  }> = [];
+  if (match?.epistemicItemId) {
+    disposeItems.push({ item: match, fallbackSource: input.optionSetRef });
   }
+  if (acwItem?.epistemicItemId) {
+    // ACW stays the identity — dispose it to the SAME status as the carrier.
+    disposeItems.push({ item: acwItem, fallbackSource: "active-cycle-work:nora" });
+  }
+
+  const updates = disposeItems.map(({ item, fallbackSource }) => {
+    const related = new Set(item.relatedObjects ?? []);
+    related.add(input.decisionId);
+    if (input.deferTargetCycleTypeId?.trim()) {
+      related.add(`defer-target:${input.deferTargetCycleTypeId.trim()}`);
+    }
+    return {
+      epistemicItemId: item.epistemicItemId!,
+      type: "Recommendation" as const,
+      statement: item.statement ?? "",
+      source: item.source ?? fallbackSource,
+      status: nextStatus,
+      confidence: item.confidence,
+      blocking: item.blocking,
+      relatedObjects: [...related],
+      provenance: item.provenance,
+      supersedes: item.supersedes ?? undefined,
+    };
+  });

   const updated = await input.oa.cycleServices.updateEpistemicState.execute({
     projectId: input.projectId,
     createdBy: LOCAL_PILOTE_ACTOR,
-    items: [
-      {
-        epistemicItemId: match.epistemicItemId,
-        type: "Recommendation",
-        statement: match.statement ?? "",
-        source: match.source ?? input.optionSetRef,
-        status: nextStatus,
-        relatedObjects: [...related],
-        supersedes: match.supersedes ?? undefined,
-      },
-    ],
+    items: updates,
     correlationId: `w2-work-rec-dispose:${input.optionSetRef}`,
   });
   if (!updated.ok) {
@@ -82,5 +118,9 @@ export async function disposeWorkRecommendationAfterDecision(input: {
       message: updated.error.message,
     };
   }
-  return { ok: true, epistemicItemId: match.epistemicItemId };
+  return {
+    ok: true,
+    epistemicItemId:
+      match?.epistemicItemId ?? acwItem?.epistemicItemId ?? null,
+  };
 }

```

### `projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts b/projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts
index 4f470f66..4066e5c5 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts
@@ -245,6 +245,16 @@ export async function prepareExecutionContractFromW2Decision(input: {
     };
   }

+  // MD-WR-06 — Work Recommendation HD never opens an ExecutionContract path.
+  if (basis.sourceType === "work_recommendation") {
+    return {
+      ok: false,
+      code: "PREPARE_NOT_APPLICABLE",
+      message:
+        "Une décision sur recommandation de travail n'ouvre aucune préparation d'exécution — fail-closed.",
+    };
+  }
+
   const traj = basis.trajectoryContext;

   // trajectory_option always requires trajectoryContext; proposal does not.

```

### `projects/sfia-studio/app/features/project-assistant/w2/presentedOptionSet.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/presentedOptionSet.ts b/projects/sfia-studio/app/features/project-assistant/w2/presentedOptionSet.ts
index 7724f68a..1a5bdf37 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/presentedOptionSet.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/presentedOptionSet.ts
@@ -17,7 +17,10 @@ import type { TrajectoryOptionDto, TrajectoryRecommendationDto } from "./types";

 export const W2_PRESENTED_OPTION_SET_KIND = "w2_presented_option_set" as const;

-export type DecisionSubjectMode = "proposal" | "project_trajectory";
+export type DecisionSubjectMode =
+  | "proposal"
+  | "project_trajectory"
+  | "work_recommendation";

 export type OptionSetDigestInputs = {
   readonly cycleTypeId: string;
@@ -30,6 +33,8 @@ export type OptionSetDigestInputs = {
   readonly proposalId?: string | null;
   readonly proposalSubjectDigest?: string | null;
   readonly decisionSubjectMode?: DecisionSubjectMode;
+  /** MD-WR-03 — ACW identity sealed into the digest (work_recommendation only). */
+  readonly workRecommendationEpistemicItemId?: string | null;
 };

 export type QualificationDigestInputs = {
@@ -78,6 +83,11 @@ export type PresentedOptionSetBinding = {
   readonly decisionSubjectMode: DecisionSubjectMode;
   readonly proposalId?: string | null;
   readonly proposalSubjectDigest?: string | null;
+  /**
+   * MD-WR-03 — durable ACW Recommendation identity for work_recommendation mode.
+   * Server-owned; never accepted from model/client as authority at decide time.
+   */
+  readonly workRecommendationEpistemicItemId?: string | null;
   readonly promotesProjectTrajectory: boolean;
   readonly sealedExecutionBasis?: SealedProposalExecutionBasis | null;
 };
@@ -112,6 +122,13 @@ export function computeOptionSetDigest(inputs: OptionSetDigestInputs): string {
     proposalId: inputs.proposalId ?? null,
     proposalSubjectDigest: inputs.proposalSubjectDigest ?? null,
     decisionSubjectMode: inputs.decisionSubjectMode ?? "project_trajectory",
+    // Only present for work_recommendation so legacy digests stay stable.
+    ...(inputs.workRecommendationEpistemicItemId
+      ? {
+          workRecommendationEpistemicItemId:
+            inputs.workRecommendationEpistemicItemId,
+        }
+      : {}),
   });
 }

@@ -152,7 +169,8 @@ function isPresentedBinding(value: unknown): value is PresentedOptionSetBinding
   }
   const mode =
     v.decisionSubjectMode === "proposal" ||
-    v.decisionSubjectMode === "project_trajectory"
+    v.decisionSubjectMode === "project_trajectory" ||
+    v.decisionSubjectMode === "work_recommendation"
       ? v.decisionSubjectMode
       : // Legacy bindings without mode are trajectory OptionSets.
         "project_trajectory";
@@ -162,8 +180,16 @@ function isPresentedBinding(value: unknown): value is PresentedOptionSetBinding
       typeof v.candidateVersion === "number"
     );
   }
-  // proposal mode: trajectory fields must be null/absent
-  return v.trajectoryId == null && v.candidateVersion == null;
+  // proposal / work_recommendation: trajectory fields must be null/absent
+  if (v.trajectoryId != null || v.candidateVersion != null) return false;
+  if (mode === "work_recommendation") {
+    return (
+      typeof v.workRecommendationEpistemicItemId === "string" &&
+      v.workRecommendationEpistemicItemId.startsWith("epi:acw:") &&
+      v.promotesProjectTrajectory === false
+    );
+  }
+  return true;
 }

 export function parsePresentedOptionSetStatement(
@@ -198,6 +224,19 @@ export function isProposalSubjectPresentedSet(
   );
 }

+export function isWorkRecommendationPresentedSet(
+  presented: PresentedOptionSetBinding,
+): boolean {
+  return (
+    presented.decisionSubjectMode === "work_recommendation" &&
+    typeof presented.workRecommendationEpistemicItemId === "string" &&
+    presented.workRecommendationEpistemicItemId.startsWith("epi:acw:") &&
+    presented.promotesProjectTrajectory === false &&
+    presented.trajectoryId == null &&
+    presented.candidateVersion == null
+  );
+}
+
 export type LoadPresentedOptionSetResult =
   | { readonly ok: true; readonly presented: PresentedOptionSetBinding }
   | { readonly ok: false; readonly code: string; readonly message: string };

```

### `projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectOptions.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectOptions.ts b/projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectOptions.ts
index 007f8d90..9d86c474 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectOptions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectOptions.ts
@@ -254,3 +254,93 @@ export function deriveProposalSubjectRecommendation(
 export function isProposalSubjectOptionRef(optionRef: string): boolean {
   return (PROPOSAL_SUBJECT_OPTION_REFS as readonly string[]).includes(optionRef);
 }
+
+/* -------------------------------------------------------------------------- */
+/* MD-WR-03 — Work Recommendation subject (no Proposal, no ProjectTrajectory)  */
+/* -------------------------------------------------------------------------- */
+
+function workStatementExcerpt(statement: string): string {
+  const flat = statement.replace(/\s+/g, " ").trim();
+  return flat.length > 280 ? `${flat.slice(0, 277)}...` : flat;
+}
+
+/**
+ * Server-owned three-way for a Work Recommendation (ACW identity).
+ * Reuses PROPOSAL_SUBJECT_* option refs (same sealed refs the chat-first
+ * disposition already maps) with WORK labels — never a fake Proposal.
+ */
+export function deriveWorkRecommendationOptions(inputs: {
+  readonly workRecommendationEpistemicItemId: string;
+  readonly statement: string;
+}): TrajectoryOptionDto[] {
+  const excerpt = workStatementExcerpt(inputs.statement);
+  const acwId = inputs.workRecommendationEpistemicItemId;
+  return [
+    {
+      kind: "OPTION",
+      optionRef: PROPOSAL_SUBJECT_PURSUE_REF,
+      label: "Poursuivre cette recommandation de travail",
+      intent: `Retenir la recommandation de travail ${acwId} — « ${excerpt} ». Décision Pilote explicite ; aucune exécution, aucune promotion ProjectTrajectory.`,
+      impacts: [
+        "HumanDecision liée à cette recommandation de travail",
+        "Recommandation de travail clôturée (acceptée)",
+        "Pas de promotion ProjectTrajectory",
+        "Aucune exécution lancée",
+      ],
+      reservations: [],
+      steps: [
+        step(1, "w2-wr-review", `Revoir la recommandation de travail — ${excerpt}`),
+        step(2, "w2-wr-decide", "Décision humaine explicite sur cette recommandation", {
+          dependencies: ["stp:w2-wr-review"],
+          gate: "human_decision",
+          exitCriteria: ["HumanDecision acceptée et reliée à la recommandation"],
+        }),
+      ],
+    },
+    {
+      kind: "OPTION",
+      optionRef: PROPOSAL_SUBJECT_AMEND_REF,
+      label: "Amender cette recommandation de travail",
+      intent:
+        "Demander une modification de la recommandation de travail avant de l'engager — sans exécution.",
+      impacts: [
+        "Recommandation de travail close (amendement demandé)",
+        "Réinstruction requise après amendement",
+      ],
+      reservations: [],
+      steps: [
+        step(1, "w2-wr-amend", "Amender la recommandation de travail"),
+      ],
+    },
+    {
+      kind: "OPTION",
+      optionRef: PROPOSAL_SUBJECT_REFUSE_REF,
+      label: "Ne pas retenir cette recommandation de travail",
+      intent:
+        "Refuser la recommandation de travail. Aucune exécution. Aucune promotion de trajectoire Project.",
+      impacts: [
+        "Recommandation de travail refusée",
+        "ProjectTrajectory inchangée",
+      ],
+      reservations: [],
+      steps: [
+        step(1, "w2-wr-refuse", "Refuser la recommandation de travail"),
+      ],
+    },
+  ];
+}
+
+export function deriveWorkRecommendationRecommendation(inputs: {
+  readonly workRecommendationEpistemicItemId: string;
+  readonly statement: string;
+}): TrajectoryRecommendationDto {
+  return {
+    label: "RECOMMANDATION — PAS UNE DÉCISION",
+    recommendedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
+    rationale: `Recommandation de travail ${inputs.workRecommendationEpistemicItemId} prête pour arbitrage Pilote — « ${workStatementExcerpt(inputs.statement)} » (≠ HumanDecision).`,
+    isHumanDecision: false,
+    promotesTrajectory: false,
+    ckcAttribution: null,
+    ckcProvenance: null,
+  };
+}

```

### `projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts b/projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts
index 5c197aa7..2f1883c3 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts
@@ -26,7 +26,11 @@ import {
   resolveProductDoctrineRegistryRoot,
 } from "@/lib/vertical-slice-runtime";
 import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
-import type { ProjectTrajectory, TrajectoryStep } from "@/lib/oa/cycle";
+import {
+  isActiveCycleWorkRecommendationItem,
+  type ProjectTrajectory,
+  type TrajectoryStep,
+} from "@/lib/oa/cycle";
 import type { DoctrinePackagePin } from "@/lib/oa/doctrine";
 import {
   buildCkcCognitivePromptSection,
@@ -44,15 +48,23 @@ import {
   optionSetObservationId,
   optionSetOptionId,
   optionSetRecommendationId,
+  parsePresentedOptionSetStatement,
+  isWorkRecommendationPresentedSet,
   serializePresentedOptionSet,
   type PresentedOptionSetBinding,
 } from "./presentedOptionSet";
 import {
   deriveProposalSubjectOptions,
   deriveProposalSubjectRecommendation,
+  deriveWorkRecommendationOptions,
+  deriveWorkRecommendationRecommendation,
 } from "./proposalSubjectOptions";
+import { resolveW2QualificationInputs } from "./qualificationInputs";
 import { resolvePendingDecisionSubjectMarker } from "./pendingDecisionSubjectMarker";
-import { readActiveProposalDecisionSubject } from "./activeProposalDecisionSubject";
+import {
+  decidedOptionSetRefsFromEpistemicItems,
+  readActiveProposalDecisionSubject,
+} from "./activeProposalDecisionSubject";
 import {
   assertProposalSubjectGateOrFail,
   resolveProposalDecisionSubject,
@@ -970,3 +982,242 @@ export async function proposeTrajectoryOptions(

 /** Exposed for the read model / tests: the Pilote is the decision-maker. */
 export const W2_DECISION_ACTOR = LOCAL_PILOTE_ACTOR;
+
+/* -------------------------------------------------------------------------- */
+/* MD-WR-03 — seal a Work Recommendation PresentedOptionSet (no Proposal)      */
+/* -------------------------------------------------------------------------- */
+
+export type SealWorkRecommendationResult =
+  | {
+      readonly ok: true;
+      readonly presented: PresentedOptionSetBinding;
+      /** False when an awaiting sealed set for this ACW already existed. */
+      readonly created: boolean;
+    }
+  | { readonly ok: false; readonly code: string; readonly message: string };
+
+/**
+ * Seal server-owned Options (PROPOSAL_SUBJECT_* refs, Work labels) for ONE
+ * active ACW Work Recommendation.
+ *
+ * Durable writes (single updateEpistemicState call):
+ *   - Option items (relatedObjects carry the ACW id)
+ *   - Recommendation (source=optset:…, relatedObjects ⊇ ACW id + cycle) — the
+ *     dispose carrier; Journal dedup suppresses the bare ACW card
+ *   - Observation PresentedOptionSet (decisionSubjectMode=work_recommendation,
+ *     promotesProjectTrajectory=false, trajectoryId=null)
+ *
+ * No Proposal, no ProjectTrajectory mutation, no provider cognition, no new
+ * store. ACW stays the identity; decide/defer also dispose the ACW item.
+ * Idempotent: an awaiting sealed set for the same ACW is returned unchanged.
+ */
+export async function sealWorkRecommendationPresentedOptionSet(input: {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+  readonly workRecommendationEpistemicItemId: string;
+  readonly correlationId?: string;
+}): Promise<SealWorkRecommendationResult> {
+  const { oa } = input;
+  const acwId = input.workRecommendationEpistemicItemId.trim();
+  if (!acwId.startsWith("epi:acw:")) {
+    return {
+      ok: false,
+      code: "WORK_RECOMMENDATION_ID_INVALID",
+      message: "Identité de recommandation de travail invalide — scellage refusé.",
+    };
+  }
+
+  const epistemic = await oa.cycleServices.getEpistemicState.execute({
+    projectId: input.projectId,
+  });
+  if (!epistemic.ok) {
+    return {
+      ok: false,
+      code: "EPISTEMIC_READ_FAILED",
+      message: "État épistémique illisible — scellage refusé.",
+    };
+  }
+  const acw = epistemic.state.items.find(
+    (i) =>
+      i.epistemicItemId === acwId &&
+      i.status === "active" &&
+      isActiveCycleWorkRecommendationItem(i),
+  );
+  if (!acw) {
+    return {
+      ok: false,
+      code: "WORK_RECOMMENDATION_MISSING",
+      message:
+        "Recommandation de travail active introuvable — aucun jeu d'options scellé.",
+    };
+  }
+
+  // Idempotency — reuse an awaiting sealed set for this ACW.
+  const decidedRefs = decidedOptionSetRefsFromEpistemicItems(
+    epistemic.state.items,
+  );
+  for (const item of [...epistemic.state.items].reverse()) {
+    if (item.type !== "Observation" || item.status !== "active") continue;
+    const parsed = parsePresentedOptionSetStatement(item.statement);
+    if (!parsed || !isWorkRecommendationPresentedSet(parsed)) continue;
+    if (parsed.workRecommendationEpistemicItemId !== acwId) continue;
+    if (decidedRefs.has(parsed.optionSetRef)) continue;
+    return { ok: true, presented: parsed, created: false };
+  }
+
+  const live = await readLiveProjectContext(oa, input.projectId);
+  if (!live.ok) {
+    return { ok: false, code: live.code, message: live.message };
+  }
+  const cycleInstanceId = live.context.activeCycleInstanceId ?? null;
+  if (!cycleInstanceId) {
+    return {
+      ok: false,
+      code: "ACTIVE_CYCLE_MISSING",
+      message: "Cycle actif requis pour sceller une recommandation de travail.",
+    };
+  }
+
+  const qualification = await resolveW2QualificationInputs({
+    oa,
+    projectId: input.projectId,
+  });
+  if (!qualification.ok) {
+    return {
+      ok: false,
+      code: qualification.code,
+      message: qualification.message,
+    };
+  }
+  const q = qualification.qualification;
+
+  // Same qualification seal as decideTrajectory re-checks (CKC optional).
+  const ckcContent = loadProductCkcCognitiveContent({
+    registryRoot: resolveProductDoctrineRegistryRoot(),
+    cycleTypeId: q.inputs.cycleTypeId,
+    packagePin: q.packagePin,
+  });
+  const semanticFingerprint = ckcContent
+    ? computeCkcSemanticFingerprint(ckcContent.provenance)
+    : null;
+  const qualificationDigest = computeQualificationDigest({
+    cycleTypeId: q.inputs.cycleTypeId,
+    recommendedProfile: q.inputs.recommendedProfile,
+    criticalSignalsPresent: q.inputs.criticalSignalsPresent,
+    irreversible: q.inputs.irreversible,
+    reservations: q.inputs.reservations,
+    ckcAttribution: q.inputs.ckcAttribution,
+    ckcSemanticFingerprint: semanticFingerprint,
+  });
+
+  const options = deriveWorkRecommendationOptions({
+    workRecommendationEpistemicItemId: acwId,
+    statement: acw.statement,
+  });
+  const recommendation = deriveWorkRecommendationRecommendation({
+    workRecommendationEpistemicItemId: acwId,
+    statement: acw.statement,
+  });
+  const integrity = assertRecommendedOptionInPresentedSet({
+    options,
+    recommendedOptionRef: recommendation.recommendedOptionRef,
+  });
+  if (!integrity.ok) {
+    return { ok: false, code: integrity.code, message: integrity.message };
+  }
+
+  const optionSetRef = `optset:w2-wr-${shortId()}`;
+  const correlationId = input.correlationId ?? `cor:w2-wr-${shortId()}`;
+  const optionSetDigest = computeOptionSetDigest({
+    cycleTypeId: q.inputs.cycleTypeId,
+    recommendedProfile: q.inputs.recommendedProfile,
+    criticalSignalsPresent: q.inputs.criticalSignalsPresent,
+    irreversible: q.inputs.irreversible,
+    reservations: q.inputs.reservations,
+    options,
+    recommendedOptionRef: recommendation.recommendedOptionRef,
+    proposalId: null,
+    proposalSubjectDigest: null,
+    decisionSubjectMode: "work_recommendation",
+    workRecommendationEpistemicItemId: acwId,
+  });
+
+  const optionItems = options.map((option) => ({
+    epistemicItemId: optionSetOptionId(optionSetRef, option.optionRef),
+    type: "Option" as const,
+    statement: optionStatement(option),
+    status: "active" as const,
+    source: optionSetRef,
+    relatedObjects: [input.projectId, option.optionRef, optionSetRef, acwId],
+  }));
+  const recommendationItem = {
+    epistemicItemId: optionSetRecommendationId(optionSetRef),
+    type: "Recommendation" as const,
+    // Journal shows this sealed card instead of the bare ACW (dedup by acw id).
+    statement: acw.statement,
+    status: "active" as const,
+    source: optionSetRef,
+    relatedObjects: [
+      input.projectId,
+      recommendation.recommendedOptionRef,
+      optionSetRef,
+      acwId,
+      cycleInstanceId,
+    ],
+  };
+  const epistemicRefs = [
+    ...optionItems.map((i) => i.epistemicItemId),
+    recommendationItem.epistemicItemId,
+    optionSetObservationId(optionSetRef),
+  ];
+
+  const presented: PresentedOptionSetBinding = {
+    kind: "w2_presented_option_set",
+    optionSetRef,
+    optionSetDigest,
+    qualificationDigest,
+    trajectoryId: null,
+    candidateVersion: null,
+    optionRefs: options.map((o) => o.optionRef),
+    recommendedOptionRef: recommendation.recommendedOptionRef,
+    options,
+    recommendation,
+    epistemicRefs,
+    cycleTypeId: q.inputs.cycleTypeId,
+    recommendedProfile: q.inputs.recommendedProfile,
+    criticalSignalsPresent: q.inputs.criticalSignalsPresent,
+    irreversible: q.inputs.irreversible,
+    reservations: [...q.inputs.reservations],
+    ckcAttribution: q.inputs.ckcAttribution,
+    ckcSemanticFingerprint: semanticFingerprint,
+    decisionSubjectMode: "work_recommendation",
+    proposalId: null,
+    proposalSubjectDigest: null,
+    workRecommendationEpistemicItemId: acwId,
+    promotesProjectTrajectory: false,
+    sealedExecutionBasis: null,
+  };
+  const observationItem = {
+    epistemicItemId: optionSetObservationId(optionSetRef),
+    type: "Observation" as const,
+    statement: serializePresentedOptionSet(presented),
+    status: "active" as const,
+    source: optionSetRef,
+    relatedObjects: [input.projectId, optionSetRef, acwId, cycleInstanceId],
+  };
+
+  const materialized = await oa.cycleServices.updateEpistemicState.execute({
+    projectId: input.projectId,
+    items: [...optionItems, recommendationItem, observationItem],
+    createdBy: NORA_OPTION_AUTHOR,
+    correlationId,
+  });
+  if (!materialized.ok) {
+    return {
+      ok: false,
+      code: materialized.error.detailCode,
+      message: `Scellage des options de travail échoué (${materialized.error.detailCode}).`,
+    };
+  }
+  return { ok: true, presented, created: true };
+}

```

### `projects/sfia-studio/app/features/project-assistant/w2/resolveChatFirstPilotDecision.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/resolveChatFirstPilotDecision.ts b/projects/sfia-studio/app/features/project-assistant/w2/resolveChatFirstPilotDecision.ts
index 5d13a517..b8f70589 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/resolveChatFirstPilotDecision.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/resolveChatFirstPilotDecision.ts
@@ -33,6 +33,11 @@ import {
   ensureSealedProjectTrajectoryPresentedOptionSet,
   findActiveAwaitingProjectTrajectoryPresentedOptionSet,
 } from "./activeProjectTrajectoryDecisionSubject";
+import {
+  ensureSealedWorkRecommendationPresentedOptionSet,
+  findActiveWorkRecommendationSubject,
+  isProjectTrajectoryChatFirstSealEligible,
+} from "./activeWorkRecommendationDecisionSubject";
 import { decideTrajectory, trajectoryDecisionScope } from "./decideTrajectory";
 import { classifyProtectedRepositoryPath } from "./deriveActualExecutionWorkFromProductContext";
 import {
@@ -122,7 +127,10 @@ export type ChatFirstPilotDecisionResult =
       readonly capturedAt: string;
       readonly decisionBasisLinked: boolean;
       readonly readyForNextGatedStep: boolean;
-      readonly subjectFamily: "proposal" | "project_trajectory";
+      readonly subjectFamily:
+        | "proposal"
+        | "project_trajectory"
+        | "work_recommendation";
       readonly prepareOutcome: ChatFirstPrepareOutcome;
       readonly executionContractId: string | null;
       readonly executionContractPrepared: boolean;
@@ -151,6 +159,9 @@ const PT_TARGET_NOT_CURRENT_MESSAGE =
 const PROPOSAL_TARGET_REQUIRED_MESSAGE =
   "Pour un sujet Proposal, la cible sémantique doit être le sujet présenté (presented_subject) — aucune HumanDecision enregistrée.";

+const WORK_TARGET_REQUIRED_MESSAGE =
+  "Pour une recommandation de travail, la cible sémantique doit être la recommandation courante ou le sujet présenté — une cible alternative ou ambiguë ne produit aucune HumanDecision.";
+
 function proposalPrepareNotApplicable(): ChatFirstPrepareOutcome {
   return {
     kind: "not_applicable",
@@ -582,6 +593,133 @@ async function recordProjectTrajectoryAccept(input: {
   };
 }

+/**
+ * MD-WR-03 — accept / refuse / amend / defer of ONE Work Recommendation (ACW).
+ * Seals the PresentedOptionSet lazily, then reuses decideTrajectory (HD +
+ * DecisionRef + dispose WR+ACW) or deferWorkRecommendation. No auto-PREPARE,
+ * no Proposal, no ProjectTrajectory.
+ */
+async function recordWorkRecommendationDisposition(input: {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+  readonly effective: ChatFirstEffectiveDisposition;
+  readonly workRecommendationEpistemicItemId: string;
+  readonly presented: PresentedOptionSetBinding | null;
+  readonly rationale?: string | null;
+  readonly forceLocalAuthority?: boolean;
+}): Promise<ChatFirstPilotDecisionResult> {
+  const sealed = await ensureSealedWorkRecommendationPresentedOptionSet({
+    oa: input.oa,
+    projectId: input.projectId,
+    workRecommendationEpistemicItemId: input.workRecommendationEpistemicItemId,
+    presented: input.presented,
+  });
+  if (!sealed.ok) {
+    return {
+      kind: "no_eligible_subject",
+      message: sealed.message,
+      code: sealed.code,
+    };
+  }
+  const presented = sealed.presented;
+  const notApplicable: ChatFirstPrepareOutcome = {
+    kind: "not_applicable",
+    reason: "Recommandation de travail chat-first n'auto-prépare pas d'ExecutionContract.",
+  };
+
+  if (input.effective === "defer") {
+    const deferred = await deferWorkRecommendation({
+      oa: input.oa,
+      projectId: input.projectId,
+      presented,
+      rationale: input.rationale,
+      forceLocalAuthority: input.forceLocalAuthority,
+    });
+    if (!deferred.ok) {
+      if (deferred.code === "DEFER_TARGET_UNRESOLVED") {
+        return {
+          kind: "defer_target_unresolved",
+          code: deferred.code,
+          message: deferred.message,
+        };
+      }
+      return {
+        kind: "decision_refused",
+        code: deferred.code,
+        message: deferred.message,
+      };
+    }
+    return {
+      kind: "decision_recorded",
+      disposition: "defer",
+      decisionId: deferred.decisionId,
+      proposalId: null,
+      optionSetRef: presented.optionSetRef,
+      selectedOptionRef: "opt:defer-work-recommendation",
+      scope: trajectoryDecisionScope(presented.optionSetRef),
+      capturedAt: deferred.capturedAt,
+      decisionBasisLinked: false,
+      readyForNextGatedStep: false,
+      subjectFamily: "work_recommendation",
+      prepareOutcome: notApplicable,
+      executionContractId: null,
+      executionContractPrepared: false,
+      attemptCreated: false,
+      executionPerformed: false,
+    };
+  }
+
+  const selectedOptionRef =
+    SELECTED_OPTION_BY_DISPOSITION[input.effective];
+  if (!presented.optionRefs.includes(selectedOptionRef)) {
+    return {
+      kind: "no_eligible_subject",
+      message:
+        "L'option correspondante n'appartient pas au jeu d'options scellé — aucune décision enregistrée.",
+      code: "OPTION_NOT_PRESENTED",
+    };
+  }
+  const decided = await decideTrajectory({
+    oa: input.oa,
+    projectId: input.projectId,
+    optionSetRef: presented.optionSetRef,
+    options: presented.options,
+    recommendedOptionRef: presented.recommendedOptionRef,
+    selectedOptionRef,
+    trajectoryId: null,
+    candidateVersion: null,
+    epistemicRefs: presented.epistemicRefs,
+    reservesText: null,
+    forceLocalAuthority: input.forceLocalAuthority,
+  });
+  if (!decided.ok) {
+    return {
+      kind: "decision_refused",
+      code: decided.code,
+      message: decided.message,
+    };
+  }
+  return {
+    kind: "decision_recorded",
+    disposition: input.effective,
+    decisionId: decided.decision.decisionId,
+    proposalId: null,
+    optionSetRef: presented.optionSetRef,
+    selectedOptionRef,
+    scope: trajectoryDecisionScope(presented.optionSetRef),
+    capturedAt: decided.decision.capturedAt,
+    decisionBasisLinked: decided.decision.decisionBasisLinked,
+    // Accept closes the Work Recommendation; nothing is prepared or executed.
+    readyForNextGatedStep: false,
+    subjectFamily: "work_recommendation",
+    prepareOutcome: notApplicable,
+    executionContractId: null,
+    executionContractPrepared: false,
+    attemptCreated: false,
+    executionPerformed: false,
+  };
+}
+
 export async function resolveChatFirstPilotDecision(input: {
   readonly oa: RuntimeOaStack;
   readonly projectId: string;
@@ -652,6 +790,72 @@ export async function resolveChatFirstPilotDecision(input: {
     };
   }

+  // ——— MD-WR-03 Work Recommendation path (Proposal keeps priority) ———
+  // After the Proposal/PT ambiguity checks, before the PT path. Never a silent
+  // pick between Work and ProjectTrajectory.
+  if (!hasProposal) {
+    const work = await findActiveWorkRecommendationSubject({
+      oa: input.oa,
+      projectId: input.projectId,
+    });
+    if (!work.ok) {
+      return {
+        kind: "subject_read_failed",
+        code: work.code,
+        message: work.message,
+      };
+    }
+    if (work.kind === "ambiguous") {
+      return {
+        kind: "ambiguous_subjects",
+        message: pilotAmbiguousPendingMessage(),
+        proposalIds: [],
+        optionSetRefs: work.workRecommendationIds,
+      };
+    }
+    if (work.kind === "unique") {
+      if (
+        ptLookup.kind === "unique" ||
+        (await isProjectTrajectoryChatFirstSealEligible({
+          oa: input.oa,
+          projectId: input.projectId,
+        }))
+      ) {
+        return {
+          kind: "ambiguous_subjects",
+          message: pilotAmbiguousPendingMessage(),
+          proposalIds: [],
+          optionSetRefs: [
+            work.workRecommendationEpistemicItemId,
+            ...(ptLookup.kind === "unique"
+              ? [ptLookup.presented.optionSetRef]
+              : []),
+          ],
+        };
+      }
+      if (
+        targetKind !== "current_recommendation" &&
+        targetKind !== "presented_subject"
+      ) {
+        return {
+          kind: "no_eligible_subject",
+          message: WORK_TARGET_REQUIRED_MESSAGE,
+          code: "WORK_RECOMMENDATION_TARGET_KIND_REQUIRED",
+        };
+      }
+      return recordWorkRecommendationDisposition({
+        oa: input.oa,
+        projectId: input.projectId,
+        effective,
+        workRecommendationEpistemicItemId:
+          work.workRecommendationEpistemicItemId,
+        presented: work.presented,
+        rationale: input.rationale,
+        forceLocalAuthority: input.forceLocalAuthority,
+      });
+    }
+  }
+
   // ——— Proposal path (KEEP semantics; D3-EXT targetKind gate) ———
   if (hasProposal && proposal.presented) {
     if (targetKind !== "presented_subject") {

```

### `projects/sfia-studio/app/features/project-assistant/w2/resolveCurrentNoraTrajectoryRecommendation.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/resolveCurrentNoraTrajectoryRecommendation.ts b/projects/sfia-studio/app/features/project-assistant/w2/resolveCurrentNoraTrajectoryRecommendation.ts
index 4e62d67c..25e7ec5c 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/resolveCurrentNoraTrajectoryRecommendation.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/resolveCurrentNoraTrajectoryRecommendation.ts
@@ -19,7 +19,7 @@ import {
   extractAcwRecommendedOptionRef,
 } from "../materializeActiveCycleWork";
 import {
-  resolveTrajectoryRecommendationCutoffFromDecisions,
+  resolveProjectTrajectoryRecommendationCutoff,
 } from "../trajectoryRecommendationCurrentness";
 import type { TrajectoryRecommendationDto } from "./types";
 import { computeDecisionBasisSourceDigest } from "@/lib/oa/decision";
@@ -216,25 +216,28 @@ export async function resolveCurrentNoraTrajectoryRecommendation(input: {
     };
   }

-  // CORR-01 C3 — subject-aware HD cutoff from durable HumanDecision truth.
+  // CORR-01 C3 + MD-WR — subject-aware HD cutoff from durable HumanDecision truth.
+  // Includes candidate_trajectory HD referenced by decidedByDecisionRef.
   let cutoff = input.ignoreCreatedAtOnOrBefore?.trim() || null;
   if (cutoff === null && input.ignoreCreatedAtOnOrBefore === undefined) {
-    try {
-      const decisions = await input.oa.decisionServices.decisions.listByProject(
-        input.projectId,
-      );
-      cutoff = resolveTrajectoryRecommendationCutoffFromDecisions({
-        decisions,
-        cycleInstanceId: input.cycleInstanceId,
-      });
-    } catch {
+    // Blocker 4 — shared PT currentness cutoff (decidedByDecisionRef included;
+    // unreadable decisions OR trajectory fail closed, never a silent null ref).
+    const resolvedCutoff = await resolveProjectTrajectoryRecommendationCutoff({
+      oa: input.oa,
+      projectId: input.projectId,
+      cycleInstanceId: input.cycleInstanceId,
+    });
+    if (!resolvedCutoff.ok) {
       return {
         ok: false,
         code: "EPISTEMIC_UNAVAILABLE",
         message:
-          "HumanDecisions illisibles — impossible de déterminer la currentness Recommendation.",
+          resolvedCutoff.reason === "decisions_unreadable"
+            ? "HumanDecisions illisibles — impossible de déterminer la currentness Recommendation."
+            : "Trajectoire courante illisible — impossible de déterminer la currentness Recommendation.",
       };
     }
+    cutoff = resolvedCutoff.cutoff;
   }

   const selected = selectCurrentNoraTrajectoryRecommendationItems({

```

### `projects/sfia-studio/app/features/project-assistant/w2/resolveTrajectoryDecisionSupportProjection.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/resolveTrajectoryDecisionSupportProjection.ts b/projects/sfia-studio/app/features/project-assistant/w2/resolveTrajectoryDecisionSupportProjection.ts
index c5e31347..b1a1b040 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/resolveTrajectoryDecisionSupportProjection.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/resolveTrajectoryDecisionSupportProjection.ts
@@ -4,15 +4,18 @@
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
 import { resolvePostEvidenceRecoveryContext } from "./resolvePostEvidenceRecoveryContext";
 import { resolveCurrentNoraTrajectoryRecommendation } from "./resolveCurrentNoraTrajectoryRecommendation";
 import { resolveW2QualificationInputs } from "./qualificationInputs";
+import { readCurrentTrajectoryDecidedByRef } from "../trajectoryRecommendationCurrentness";

 const UNAVAILABLE: StudioTrajectoryDecisionSupportProjection = Object.freeze({
   state: "UNAVAILABLE",
@@ -30,6 +33,66 @@ const NONE: StudioTrajectoryDecisionSupportProjection = Object.freeze({
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
+/**
+ * MD-WR-07 — bind the explicit TDS tri-state into Pilot lifecycle finalization
+ * (lib layer cannot import this feature module). Idempotent.
+ */
+export function bindPilotLifecycleTrajectoryDecisionSupport(
+  oa: RuntimeOaStack,
+): void {
+  oa.cycleServices.pilotLifecycle.bindTrajectoryDecisionSupportStateResolver?.(
+    async ({ projectId, cycleInstanceId }) => {
+      const tds = await resolveTrajectoryDecisionSupportProjection({
+        oa,
+        projectId,
+        cycleInstanceId,
+      });
+      return tds.state;
+    },
+  );
+}
+
 export async function resolveTrajectoryDecisionSupportProjection(input: {
   readonly oa: RuntimeOaStack;
   readonly projectId: string;
@@ -39,15 +102,47 @@ export async function resolveTrajectoryDecisionSupportProjection(input: {
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
+    // Only a typed TRAJECTORY_NOT_FOUND (no current PT) = PT undecided (expose).
+    // Any other failure / thrown error → UNAVAILABLE (fail-closed, never a
+    // silent decidedByDecisionRef=null). A readable decidedByDecisionRef closes
+    // the permanent PT option menu (MD-WR-04).
+    const current = await readCurrentTrajectoryDecidedByRef({
+      oa: input.oa,
+      projectId: input.projectId,
+    });
+    if (current.kind === "unavailable") {
+      return UNAVAILABLE;
+    }
+    const decidedByDecisionRef = current.decidedByDecisionRef;
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

### `projects/sfia-studio/app/features/project-assistant/w2/types.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/types.ts b/projects/sfia-studio/app/features/project-assistant/w2/types.ts
index 86848dc1..ea9b5a69 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/types.ts
@@ -114,7 +114,10 @@ export type TrajectoryOptionSetDto = {
   readonly autoDecisionPerformed: false;
   readonly executionPerformed: false;
   readonly ckcCognitionCompletedBeforeMutation: true;
-  readonly decisionSubjectMode: "proposal" | "project_trajectory";
+  readonly decisionSubjectMode:
+    | "proposal"
+    | "project_trajectory"
+    | "work_recommendation";
   readonly proposalId?: string | null;
   readonly promotesProjectTrajectory: boolean;
 };
@@ -297,7 +300,10 @@ export type DecideTrajectoryResult =
       readonly livingProjectStateVersion: number;
       readonly executionPerformed: false;
       readonly promotesProjectTrajectory: boolean;
-      readonly decisionSubjectMode: "proposal" | "project_trajectory";
+      readonly decisionSubjectMode:
+    | "proposal"
+    | "project_trajectory"
+    | "work_recommendation";
     }
   | W2Failure;


```

### `projects/sfia-studio/app/lib/oa/cycle/application/deriveUndisposedRecommendations.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/application/deriveUndisposedRecommendations.ts b/projects/sfia-studio/app/lib/oa/cycle/application/deriveUndisposedRecommendations.ts
index 0e4026fb..0bf54b99 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/application/deriveUndisposedRecommendations.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/application/deriveUndisposedRecommendations.ts
@@ -1,13 +1,27 @@
 /**
- * CHAT-FIRST-GOVERNED-DECISION-LOOP-01 — derive Work Recommendations that still
- * require an explicit Pilot disposition before a cycle can be finalized.
+ * CHAT-FIRST-GOVERNED-DECISION-LOOP-01 + MD-WR-07 — derive Work Recommendations
+ * that still require an explicit Pilot disposition before a cycle can be
+ * finalized.
  *
  * Scope (Morris correction):
- * - WORK Recommendations only (OptionSet / Proposal subject carriers)
+ * - WORK Recommendations only:
+ *     · sealed OptionSet carriers (source / relatedObjects optset:*)
+ *     · MD-WR-07: active ACW (active-cycle-work:nora) Work still UNBOUND (no
+ *       sealed carrier yet) — an unbound ACW IS a pending Work decision subject
  * - belonging to the cycle being finalized
  * - still active / applicable
  * - without durable disposition (active DecisionRef closing the OptionSet OR
- *   Recommendation status already resolved/rejected/superseded)
+ *   the ACW id; Recommendation status already resolved/rejected/superseded)
+ *
+ * ACW identity dedupe: an ACW with an ACTIVE sealed carrier linking its id is
+ * represented by that carrier only → exactly ONE logical blocker per ACW
+ * before and after seal.
+ *
+ * TDS tri-state (Blocker 3), same classification as Journal Work:
+ * - PRESENT: ACW+opt:trajectory:* = PT fuel → never a blocker
+ * - NONE: non-lifecycle ACW (incl. opt:trajectory:*) is Work
+ * - UNAVAILABLE: ACW+opt:trajectory:* NEVER becomes Work (fail-closed);
+ *   plain ACW without opt:trajectory:* may remain Work
  *
  * Explicitly OUT of scope (never blockers):
  * - Lifecycle Recommendation NEXT_CYCLE / FINALIZE_CURRENT_CYCLE
@@ -19,10 +33,13 @@
  */

 import {
+  isActiveCycleWorkRecommendationItem,
   isLifecycleRecommendationItem,
   isWorkRecommendationItem,
+  workRecommendationAcwId,
   workRecommendationBelongsToCycle,
   workRecommendationOptionSetRef,
+  type TrajectoryDecisionSupportState,
   type WorkRecommendationItemLike,
 } from "./deriveWorkRecommendations";

@@ -30,12 +47,15 @@ const OPTION_SET_REF_PREFIX = "optset:";

 export type UndisposedRecommendation = {
   readonly epistemicItemId: string;
-  readonly optionSetRef: string;
+  /** Sealed OptionSet ref; null while the ACW is still unbound (MD-WR-07). */
+  readonly optionSetRef: string | null;
+  /** ACW identity when known (unbound ACW or sealed carrier linking an ACW). */
+  readonly workRecommendationEpistemicItemId: string | null;
   readonly statement: string;
   readonly cycleInstanceId: string;
 };

-function disposedOptionSetRefs(
+function disposedRefs(
   items: ReadonlyArray<WorkRecommendationItemLike>,
 ): ReadonlySet<string> {
   const refs = new Set<string>();
@@ -43,6 +63,7 @@ function disposedOptionSetRefs(
     if (item.type !== "DecisionRef" || item.status !== "active") continue;
     for (const related of item.relatedObjects ?? []) {
       if (related.startsWith(OPTION_SET_REF_PREFIX)) refs.add(related);
+      if (related.startsWith("epi:acw:")) refs.add(related);
     }
   }
   return refs;
@@ -51,28 +72,78 @@ function disposedOptionSetRefs(
 export function deriveUndisposedRecommendations(
   items: ReadonlyArray<WorkRecommendationItemLike>,
   cycleInstanceId?: string | null,
+  options?: {
+    /**
+     * Omitted → "UNAVAILABLE" (fail-closed: ACW+opt:trajectory:* is never
+     * promoted to a Work blocker without an explicit NONE).
+     */
+    readonly trajectoryDecisionSupportState?: TrajectoryDecisionSupportState;
+  },
 ): readonly UndisposedRecommendation[] {
   // Back-compat: callers that omit cycle still get project-scoped work-only
   // filtering (never lifecycle). Prefer passing cycleInstanceId.
-  const disposed = disposedOptionSetRefs(items);
+  const tdsState: TrajectoryDecisionSupportState =
+    options?.trajectoryDecisionSupportState ?? "UNAVAILABLE";
+  const disposed = disposedRefs(items);
   const out: UndisposedRecommendation[] = [];
+  const logicalKeys = new Set<string>();
+
+  const belongs = (item: WorkRecommendationItemLike): boolean =>
+    !cycleInstanceId ||
+    workRecommendationBelongsToCycle(item, cycleInstanceId, cycleInstanceId);
+
+  // Pass 1 — sealed OptionSet carriers.
+  const sealedAcwIds = new Set<string>();
   for (const item of items) {
-    if (!isWorkRecommendationItem(item)) continue;
+    if (!isWorkRecommendationItem(item, { trajectoryDecisionSupportState: tdsState })) {
+      continue;
+    }
     if (isLifecycleRecommendationItem(item)) continue;
     if (item.status !== "active") continue;
     const optionSetRef = workRecommendationOptionSetRef(item);
     if (!optionSetRef) continue;
-    if (disposed.has(optionSetRef)) continue;
-    if (cycleInstanceId) {
-      if (
-        !workRecommendationBelongsToCycle(item, cycleInstanceId, cycleInstanceId)
-      ) {
-        continue;
-      }
+    const acwId = workRecommendationAcwId(item);
+    if (acwId && !isActiveCycleWorkRecommendationItem(item)) {
+      // Active sealed carrier represents its ACW (dedupe by ACW identity).
+      sealedAcwIds.add(acwId);
     }
+    if (disposed.has(optionSetRef)) continue;
+    if (acwId && disposed.has(acwId)) continue;
+    if (!belongs(item)) continue;
+    const key = acwId ?? optionSetRef;
+    if (logicalKeys.has(key)) continue;
+    logicalKeys.add(key);
     out.push({
       epistemicItemId: item.epistemicItemId ?? optionSetRef,
       optionSetRef,
+      workRecommendationEpistemicItemId: acwId,
+      statement: item.statement ?? "",
+      cycleInstanceId: cycleInstanceId ?? "",
+    });
+  }
+
+  // Pass 2 — MD-WR-07: active unbound ACW Work (no active sealed carrier).
+  for (const item of items) {
+    if (item.status !== "active") continue;
+    if (!isActiveCycleWorkRecommendationItem(item)) continue;
+    if (
+      !isWorkRecommendationItem(item, { trajectoryDecisionSupportState: tdsState })
+    ) {
+      continue;
+    }
+    const acwId = item.epistemicItemId;
+    if (!acwId) continue;
+    if (sealedAcwIds.has(acwId)) continue;
+    // A carrier-linked optset on the ACW itself is handled in pass 1.
+    if (workRecommendationOptionSetRef(item)) continue;
+    if (disposed.has(acwId)) continue;
+    if (!belongs(item)) continue;
+    if (logicalKeys.has(acwId)) continue;
+    logicalKeys.add(acwId);
+    out.push({
+      epistemicItemId: acwId,
+      optionSetRef: null,
+      workRecommendationEpistemicItemId: acwId,
       statement: item.statement ?? "",
       cycleInstanceId: cycleInstanceId ?? "",
     });

```

### `projects/sfia-studio/app/lib/oa/cycle/application/deriveWorkRecommendations.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/application/deriveWorkRecommendations.ts b/projects/sfia-studio/app/lib/oa/cycle/application/deriveWorkRecommendations.ts
index 7d8be6ab..9a7c8341 100644
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
@@ -54,19 +58,96 @@ export function isLifecycleRecommendationItem(
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
+ * Blocker 3 — explicit tri-state of the ProjectTrajectory decision-support
+ * (TDS) projection. NONE and UNAVAILABLE MUST NOT be collapsed:
+ * - PRESENT: ACW+opt:trajectory:* is PT fuel — excluded from Work.
+ * - NONE: non-lifecycle ACW (incl. opt:trajectory:*) can be Work.
+ * - UNAVAILABLE: fail-closed — ACW+opt:trajectory:* must NOT become Work;
+ *   plain ACW without opt:trajectory:* may remain Work if coherent.
+ */
+export type TrajectoryDecisionSupportState = "PRESENT" | "NONE" | "UNAVAILABLE";
+
+/** ACW Recommendation carrying a typed opt:trajectory:* option ref. */
+export function hasTrajectoryOptionRef(
+  item: WorkRecommendationItemLike,
+): boolean {
+  return (item.relatedObjects ?? []).some((r) =>
+    r.startsWith(TRAJECTORY_OPTION_PREFIX),
+  );
+}
+
+/**
+ * ACW Recommendation currently treated as ProjectTrajectory / replan fuel.
+ * Pure: opt:trajectory:* present AND TDS state is PRESENT.
+ */
+export function isAcwProjectTrajectoryRecommendationItem(
+  item: WorkRecommendationItemLike,
+  input: {
+    readonly trajectoryDecisionSupportState: TrajectoryDecisionSupportState;
+  },
+): boolean {
+  if (!isActiveCycleWorkRecommendationItem(item)) return false;
+  if (input.trajectoryDecisionSupportState !== "PRESENT") return false;
+  return hasTrajectoryOptionRef(item);
+}
+
+/**
+ * ACW Recommendation that must NOT be treated as Work under the given TDS
+ * state: PT fuel (PRESENT) or uncertain / fail-closed (UNAVAILABLE).
+ * NONE never excludes.
+ */
+export function isAcwExcludedFromWorkByTrajectoryState(
+  item: WorkRecommendationItemLike,
+  input: {
+    readonly trajectoryDecisionSupportState: TrajectoryDecisionSupportState;
+  },
+): boolean {
+  if (!isActiveCycleWorkRecommendationItem(item)) return false;
+  if (input.trajectoryDecisionSupportState === "NONE") return false;
+  return hasTrajectoryOptionRef(item);
+}
+
 export function isWorkRecommendationItem(
   item: WorkRecommendationItemLike,
+  input?: {
+    /**
+     * PRESENT → ACW+opt:trajectory:* is PT fuel; UNAVAILABLE → fail-closed
+     * (also excluded); NONE → Work. Omitted → "NONE" (callers that already
+     * hold a sealed optset / ACW identity and do not classify PT fuel).
+     */
+    readonly trajectoryDecisionSupportState?: TrajectoryDecisionSupportState;
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
+      isAcwExcludedFromWorkByTrajectoryState(item, {
+        trajectoryDecisionSupportState:
+          input?.trajectoryDecisionSupportState ?? "NONE",
+      })
+    ) {
+      return false;
+    }
+    return true;
+  }
+  return false;
 }

 export function workRecommendationOptionSetRef(
@@ -81,6 +162,18 @@ export function workRecommendationOptionSetRef(
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
@@ -90,8 +183,6 @@ function relatedCycleInstanceId(
       if (related.startsWith(prefix) && related !== prefix) return related;
     }
   }
-  // Many writers store raw cycleInstanceId strings (no prefix). Prefer explicit
-  // ids that look like durable cycle instance ids when present.
   for (const related of item.relatedObjects ?? []) {
     if (/^cycinst:/i.test(related)) return related;
     if (/^ci[_:]/i.test(related)) return related;
@@ -111,13 +202,16 @@ function dispositionDecisionIdFromItems(
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
@@ -157,12 +251,31 @@ export function projectCycleWorkRecommendations(input: {
   readonly cycleInstanceId: string | null;
   /** When cycle binding is missing on legacy items, attribute to this cycle. */
   readonly fallbackCycleInstanceId?: string | null;
+  /**
+   * Blocker 3 — explicit TDS tri-state. PRESENT: ACW+opt:trajectory:* is PT
+   * fuel (excluded, MD-WR-02/04). UNAVAILABLE: same exclusion, fail-closed.
+   * NONE: ACW can be Work. REQUIRED — no boolean collapse.
+   */
+  readonly trajectoryDecisionSupportState: TrajectoryDecisionSupportState;
 }): readonly WorkRecommendationProjectionCard[] {
   const cycleId = input.cycleInstanceId;
   if (!cycleId) return [];
+  const tdsState = input.trajectoryDecisionSupportState;
+  const workItems = input.items.filter((item) =>
+    isWorkRecommendationItem(item, { trajectoryDecisionSupportState: tdsState }),
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
@@ -172,16 +285,28 @@ export function projectCycleWorkRecommendations(input: {
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

### `projects/sfia-studio/app/lib/oa/cycle/application/pilotLifecycleTransitions.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/application/pilotLifecycleTransitions.ts b/projects/sfia-studio/app/lib/oa/cycle/application/pilotLifecycleTransitions.ts
index 524f038b..66648fed 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/application/pilotLifecycleTransitions.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/application/pilotLifecycleTransitions.ts
@@ -41,6 +41,11 @@ import {
   type AssessFinalizationInput,
 } from "./assessFinalization";
 import { deriveUndisposedRecommendations } from "./deriveUndisposedRecommendations";
+import {
+  hasTrajectoryOptionRef,
+  isActiveCycleWorkRecommendationItem,
+  type TrajectoryDecisionSupportState,
+} from "./deriveWorkRecommendations";
 import {
   assessResumeReconciliation,
   buildPauseReconciliationSnapshot,
@@ -108,6 +113,15 @@ export type PilotLifecycleAuthorityPort = {
   }): { ok: boolean; reason?: string };
 };

+/**
+ * Resolves the explicit PRESENT | NONE | UNAVAILABLE trajectory
+ * decision-support state for a cycle (feature-layer projection, injected).
+ */
+export type TrajectoryDecisionSupportStateResolver = (input: {
+  readonly projectId: string;
+  readonly cycleInstanceId: string;
+}) => Promise<TrajectoryDecisionSupportState>;
+
 export type PilotLifecycleDeps = {
   cycles: CycleRepositoryPort;
   trajectories: TrajectoryRepositoryPort;
@@ -126,6 +140,11 @@ export type PilotLifecycleDeps = {
    * Wired once from vertical-slice-runtime via create*CycleServices.
    */
   qualifyCycleWithCkc?: QualifyCycleWithCkcPort;
+  /**
+   * MD-WR-07 — optional TDS tri-state resolver for finalization blockers.
+   * Absent → ACW+opt:trajectory:* is treated UNAVAILABLE (never Work).
+   */
+  resolveTrajectoryDecisionSupportState?: TrajectoryDecisionSupportStateResolver;
   /**
    * Optional static applicability override — test-only / low-level.
    * Product `buildAssessment` always derives from durable facts and ignores this.
@@ -192,7 +211,24 @@ async function appendLpsActiveLink(input: {
 }

 export class PilotLifecycleTransitions {
-  constructor(private readonly deps: PilotLifecycleDeps) {}
+  private trajectoryDecisionSupportResolver:
+    | TrajectoryDecisionSupportStateResolver
+    | undefined;
+
+  constructor(private readonly deps: PilotLifecycleDeps) {
+    this.trajectoryDecisionSupportResolver =
+      deps.resolveTrajectoryDecisionSupportState;
+  }
+
+  /**
+   * Blocker 3 / MD-WR-07 — late-bind the feature-layer TDS tri-state resolver
+   * (lib never imports @/features). Idempotent; last binding wins.
+   */
+  bindTrajectoryDecisionSupportStateResolver(
+    resolver: TrajectoryDecisionSupportStateResolver | undefined,
+  ): void {
+    this.trajectoryDecisionSupportResolver = resolver;
+  }

   async start(request: StartCycleRequest): Promise<PilotLifecycleResult> {
     const started = Date.now();
@@ -1596,9 +1632,33 @@ export class PilotLifecycleTransitions {
     if (!this.deps.epistemic) return ["recommendation_source_unreadable"];
     try {
       const items = await this.deps.epistemic.listByProject(projectId);
-      return deriveUndisposedRecommendations(items, cycleInstanceId).map(
-        (r) => r.epistemicItemId,
+      // Blocker 3 / MD-WR-07 — explicit TDS tri-state. Only resolve it when an
+      // active ACW actually carries opt:trajectory:* (otherwise irrelevant).
+      // No resolver wired → UNAVAILABLE (fail-closed, never a silent NONE).
+      let trajectoryDecisionSupportState: TrajectoryDecisionSupportState =
+        "UNAVAILABLE";
+      const needsTds = items.some(
+        (i) =>
+          i.status === "active" &&
+          isActiveCycleWorkRecommendationItem(i) &&
+          hasTrajectoryOptionRef(i),
       );
+      if (!needsTds) {
+        trajectoryDecisionSupportState = "NONE";
+      } else if (this.trajectoryDecisionSupportResolver) {
+        try {
+          trajectoryDecisionSupportState =
+            await this.trajectoryDecisionSupportResolver({
+              projectId,
+              cycleInstanceId,
+            });
+        } catch {
+          trajectoryDecisionSupportState = "UNAVAILABLE";
+        }
+      }
+      return deriveUndisposedRecommendations(items, cycleInstanceId, {
+        trajectoryDecisionSupportState,
+      }).map((r) => r.epistemicItemId);
     } catch {
       return ["recommendation_source_unreadable"];
     }

```

### `projects/sfia-studio/app/lib/oa/cycle/index.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/index.ts b/projects/sfia-studio/app/lib/oa/cycle/index.ts
index 61957e10..d95314d8 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/index.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/index.ts
@@ -78,11 +78,17 @@ export {
   type UndisposedRecommendation,
 } from "./application/deriveUndisposedRecommendations";
 export {
+  hasTrajectoryOptionRef,
+  isAcwExcludedFromWorkByTrajectoryState,
+  isAcwProjectTrajectoryRecommendationItem,
+  isActiveCycleWorkRecommendationItem,
   isLifecycleRecommendationItem,
   isWorkRecommendationItem,
   projectCycleWorkRecommendations,
+  workRecommendationAcwId,
   workRecommendationBelongsToCycle,
   workRecommendationOptionSetRef,
+  type TrajectoryDecisionSupportState,
   type WorkRecommendationProjectionCard,
 } from "./application/deriveWorkRecommendations";
 export {

```

### `projects/sfia-studio/app/lib/oa/decision/domain/invariants.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/decision/domain/invariants.ts b/projects/sfia-studio/app/lib/oa/decision/domain/invariants.ts
index 20755e9b..9cf62e8f 100644
--- a/projects/sfia-studio/app/lib/oa/decision/domain/invariants.ts
+++ b/projects/sfia-studio/app/lib/oa/decision/domain/invariants.ts
@@ -207,7 +207,8 @@ export function validateDecisionBasis(
   if (
     basis.sourceType !== "proposal" &&
     basis.sourceType !== "trajectory_option" &&
-    basis.sourceType !== "candidate_trajectory"
+    basis.sourceType !== "candidate_trajectory" &&
+    basis.sourceType !== "work_recommendation"
   ) {
     return { detailCode: "DECISION_INVALID", reason: "decision_basis_source_type" };
   }
@@ -240,6 +241,89 @@ export function validateDecisionBasis(
     };
   }

+  if (basis.sourceType === "work_recommendation") {
+    // MD-WR-06 — Work Recommendation is neither a Proposal nor a trajectory.
+    if (basis.trajectoryContext !== undefined) {
+      return {
+        detailCode: "DECISION_INVALID",
+        reason: "work_recommendation_forbids_trajectory_context",
+      };
+    }
+    if (basis.candidateTrajectoryContext !== undefined) {
+      return {
+        detailCode: "DECISION_INVALID",
+        reason: "work_recommendation_forbids_candidate_trajectory_context",
+      };
+    }
+    const ctx = basis.workRecommendationContext;
+    if (!ctx) {
+      return {
+        detailCode: "DECISION_INVALID",
+        reason: "work_recommendation_context_required",
+      };
+    }
+    for (const [key, value] of [
+      ["workRecommendationEpistemicItemId", ctx.workRecommendationEpistemicItemId],
+      ["optionSetRef", ctx.optionSetRef],
+      ["selectedOptionRef", ctx.selectedOptionRef],
+      ["optionSetDigest", ctx.optionSetDigest],
+    ] as Array<[string, unknown]>) {
+      if (typeof value !== "string" || value.trim().length < 1) {
+        return {
+          detailCode: "DECISION_INVALID",
+          reason: `work_recommendation_context_${key}`,
+        };
+      }
+    }
+    if (
+      !Array.isArray(ctx.optionRefs) ||
+      ctx.optionRefs.length < 1 ||
+      !ctx.optionRefs.every((r) => typeof r === "string" && r.trim().length > 0)
+    ) {
+      return {
+        detailCode: "DECISION_INVALID",
+        reason: "work_recommendation_context_optionRefs",
+      };
+    }
+    if (!ctx.optionRefs.includes(ctx.selectedOptionRef)) {
+      return {
+        detailCode: "DECISION_INVALID",
+        reason: "work_recommendation_selected_option_not_presented",
+      };
+    }
+    if (
+      ctx.recommendedOptionRef !== undefined &&
+      !ctx.optionRefs.includes(ctx.recommendedOptionRef)
+    ) {
+      return {
+        detailCode: "DECISION_INVALID",
+        reason: "work_recommendation_recommended_option_not_presented",
+      };
+    }
+    if (basis.sourceRef !== ctx.optionSetRef) {
+      return {
+        detailCode: "DECISION_INVALID",
+        reason: "work_recommendation_source_ref_mismatch",
+      };
+    }
+    // A Work Recommendation basis must never masquerade as a Proposal id.
+    if (basis.sourceRef.startsWith("prop:")) {
+      return {
+        detailCode: "DECISION_INVALID",
+        reason: "work_recommendation_source_ref_is_proposal_id",
+      };
+    }
+    return null;
+  }
+
+  if (basis.workRecommendationContext !== undefined) {
+    // proposal / trajectory_option / candidate_trajectory never carry Work context.
+    return {
+      detailCode: "DECISION_INVALID",
+      reason: `${basis.sourceType}_forbids_work_recommendation_context`,
+    };
+  }
+
   if (basis.sourceType === "candidate_trajectory") {
     if (basis.trajectoryContext !== undefined) {
       return {

```

### `projects/sfia-studio/app/lib/oa/decision/domain/types.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/decision/domain/types.ts b/projects/sfia-studio/app/lib/oa/decision/domain/types.ts
index 14399414..f3beddf0 100644
--- a/projects/sfia-studio/app/lib/oa/decision/domain/types.ts
+++ b/projects/sfia-studio/app/lib/oa/decision/domain/types.ts
@@ -127,10 +127,31 @@ export type DecisionBasisCandidateTrajectoryContext = {
   };
 };

+/**
+ * MD-WR-06 — durable linkage from a HumanDecision to a chat-first Work
+ * Recommendation OptionSet (ACW). NEVER a Proposal, NEVER a ProjectTrajectory.
+ * A Recommendation recorded here is never itself a decision.
+ */
+export type DecisionBasisWorkRecommendationContext = {
+  /** Active Work Recommendation (ACW) epistemic item the decision arbitrates. */
+  workRecommendationEpistemicItemId: string;
+  /** Sealed OptionSet ref (also DecisionBasis.sourceRef). */
+  optionSetRef: string;
+  /** Option refs presented to the Pilote, in presentation order. */
+  optionRefs: string[];
+  /** Option the Pilote selected — must belong to optionRefs. */
+  selectedOptionRef: string;
+  /** Option that Nora recommended, when any. Never a decision. */
+  recommendedOptionRef?: string;
+  /** Digest of the exact presented OptionSet sealed at propose. */
+  optionSetDigest: string;
+};
+
 export type DecisionBasisSourceType =
   | "proposal"
   | "trajectory_option"
-  | "candidate_trajectory";
+  | "candidate_trajectory"
+  | "work_recommendation";

 export type DecisionBasis = {
   sourceType: DecisionBasisSourceType;
@@ -138,7 +159,8 @@ export type DecisionBasis = {
    * Opaque source id:
    * - proposal id, or
    * - trajectory option-set ref, or
-   * - candidate trajectoryId (D-GF-HD-01).
+   * - candidate trajectoryId (D-GF-HD-01), or
+   * - Work Recommendation optionSetRef (MD-WR-06).
    */
   sourceRef: string;
   /** SHA-256 hex of canonical JSON over stable source fields. */
@@ -150,6 +172,8 @@ export type DecisionBasis = {
   trajectoryContext?: DecisionBasisTrajectoryContext;
   /** Present when sourceType is `candidate_trajectory` (greenfield only). */
   candidateTrajectoryContext?: DecisionBasisCandidateTrajectoryContext;
+  /** Present when sourceType is `work_recommendation` (chat-first Work only). */
+  workRecommendationContext?: DecisionBasisWorkRecommendationContext;
   executionBasis: {
     objective?: string;
     scope?: string;

```

### `projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json`

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index 05b1cdfb..e2656d8a 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -578,7 +578,7 @@
   "trackedSources": [
     {
       "path": "projects/sfia-studio/app/features/project-assistant/actions.ts",
-      "sha256_16": "9da1c52195e39dc1"
+      "sha256_16": "8839aac183e38265"
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts",
@@ -586,7 +586,7 @@
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts",
-      "sha256_16": "a398bf461383386f"
+      "sha256_16": "d834bbcdebf549c8"
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts",

```

### `projects/sfia-studio/app/__tests__/project-assistant/chatFirstWorkRecommendationContinuity.d0.test.ts`

```typescript
/**
 * MD-WR-03 — chat-first Work Recommendation (ACW identity) disposition oracle.
 *
 * ACW Recommendation → lazy seal (Observation + Options + optset
 * Recommendation) → HumanDecision (dec:w2-wr:) → DecisionRef → dispose
 * carrier AND ACW. ZERO Proposal, ZERO ProjectTrajectory mutation.
 *
 * ZERO REAL / ZERO LIVE / ZERO Cursor REAL.
 *
 * @vitest-environment node
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { projectAssistantSendAction } from "@/features/project-assistant/actions";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import { recordObligationPolicyRequireArtifact } from "@/features/project-assistant/f2/pilotLifecycleActions";
import {
  LOCAL_PILOTE_ACTOR,
  computeDecisionBasisSourceDigest,
  registerLocalPiloteAuthority,
  validateDecisionBasis,
  type DecisionBasis,
} from "@/lib/oa/decision";
import {
  deriveUndisposedRecommendations,
  projectCycleWorkRecommendations,
} from "@/lib/oa/cycle";
import { assessChatFirstWorkEligibility } from "@/features/project-assistant/w2/assessChatFirstWorkEligibility";
import { resolveChatFirstPilotDecision } from "@/features/project-assistant/w2/resolveChatFirstPilotDecision";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import { sealWorkRecommendationPresentedOptionSet } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import {
  selectActiveWorkRecommendationCandidates,
} from "@/features/project-assistant/w2/activeWorkRecommendationDecisionSubject";
import {
  isWorkRecommendationPresentedSet,
  parsePresentedOptionSetStatement,
} from "@/features/project-assistant/w2/presentedOptionSet";
import {
  PROPOSAL_SUBJECT_AMEND_REF,
  PROPOSAL_SUBJECT_PURSUE_REF,
  PROPOSAL_SUBJECT_REFUSE_REF,
} from "@/features/project-assistant/w2/proposalSubjectOptions";
import {
  resolveTrajectoryDecisionSupportProjection,
  shouldExposeTrajectoryDecisionSupport,
} from "@/features/project-assistant/w2/resolveTrajectoryDecisionSupportProjection";
import {
  classifyAcwRecommendationCurrentness,
  readCurrentTrajectoryDecidedByRef,
  resolveProjectTrajectoryRecommendationCutoff,
  resolveTrajectoryRecommendationCutoffFromDecisions,
} from "@/features/project-assistant/trajectoryRecommendationCurrentness";
import { listProposalsForProject } from "@/features/project-assistant/f2/proposalStore";
import {
  FakeCursorGitExternalState,
  FakeDocsWriteLaunchPort,
  MemoryLaunchSafetyJournal,
  isStudioCursorRealEnabled,
} from "@/lib/oa/execution-attempt";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project";
import {
  SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV,
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import { W2_FIXED_NOW, W2_REGISTRY_ROOT, W2_SCHEMAS_ROOT } from "./w2Harness";

const STABILIZED_WHAT = [
  "statuts A / B / C",
  "attribut optionnel P avec valeurs basse / moyenne / haute",
  "filtres par statut et P",
  "persistance locale requise",
].join("; ");

const MATERIALIZATION_REQUEST = `Matérialise cette spécification fonctionnelle comme livrable de référence du cycle, sans élargir le périmètre.
La spécification consolidée inclut : ${STABILIZED_WHAT}.
N'exécute rien : prépare la proposition pour ma décision.`;

const CHAT_ACCEPT = "Oui, poursuis cette proposition. __F2_DECIDE_ACCEPT__";

const EXPECTED_PROJECT_ROOT = "projects/mini-cadrage-suivi-de-taches";
const EXPECTED_CYCLE_ROOT = `${EXPECTED_PROJECT_ROOT}/02-conception-fonctionnelle`;
const IDENTITY = "acme/widget";
const BRANCH = "main";

function restoreEnvVar(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

function assertRealOff(): void {
  process.env.SFIA_STUDIO_CURSOR_REAL = "0";
  process.env.OPS1_CURSOR_REAL = "0";
  expect(isStudioCursorRealEnabled()).toBe(false);
}

function initManagedGitRepo(managedBase: string, identity: string) {
  fs.mkdirSync(managedBase, { recursive: true });
  const repoRoot = path.join(managedBase, identity.replace("/", "__"));
  fs.mkdirSync(repoRoot, { recursive: true });
  fs.writeFileSync(path.join(repoRoot, ".keep"), "");
  execFileSync("git", ["init"], { cwd: repoRoot });
  execFileSync("git", ["config", "user.email", "test@example.com"], {
    cwd: repoRoot,
  });
  execFileSync("git", ["config", "user.name", "Test"], { cwd: repoRoot });
  execFileSync("git", ["add", "."], { cwd: repoRoot });
  execFileSync("git", ["commit", "-m", "init"], { cwd: repoRoot });
  const baseHeadSha = execFileSync("git", ["rev-parse", "HEAD"], {
    cwd: repoRoot,
    encoding: "utf8",
  }).trim();
  return { repoRoot, baseHeadSha };
}

class SeededIdSource implements LocalProjectIdSource {
  private project = 0;
  private lps = 0;
  private correlation = 0;
  constructor(private readonly prefix: string) {}
  nextProjectId(): string {
    this.project += 1;
    return `prj:${this.prefix}-${this.project}`;
  }
  nextLpsVersionId(): string {
    this.lps += 1;
    return `lps:${this.prefix}-${this.lps}`;
  }
  nextCorrelationId(): string {
    this.correlation += 1;
    return `cor:${this.prefix}-${this.correlation}`;
  }
}

const ACW_STATEMENT_A =
  "Recommandation de travail : consolider la liste des statuts avant la conception détaillée.";
const ACW_STATEMENT_B =
  "Recommandation de travail : documenter les filtres par statut et P.";

describe("MD-WR-03 chat-first Work Recommendation continuity", () => {
  let managedBase: string;
  let runtime: RuntimeApplicationService;
  let previousProvider: string | undefined;
  let previousMorrisAuthority: string | undefined;
  let previousIdentity: string | undefined;
  let previousRemote: string | undefined;
  let previousBranch: string | undefined;
  let previousManaged: string | undefined;
  const tempRoots: string[] = [];

  beforeEach(() => {
    assertRealOff();
    previousProvider = process.env.OPS1_CONVERSATION_PROVIDER;
    previousMorrisAuthority = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousIdentity = process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY;
    previousRemote = process.env.SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL;
    previousBranch = process.env.SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH;
    previousManaged = process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV];
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY = IDENTITY;
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL =
      "https://github.com/acme/widget.git";
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH = BRANCH;

    const root = fs.mkdtempSync(path.join(os.tmpdir(), "cfgdl-"));
    tempRoots.push(root);
    managedBase = path.join(root, "managed");
    process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV] = managedBase;
    const initialized = initManagedGitRepo(managedBase, IDENTITY);

    const gitState = new FakeCursorGitExternalState({
      worktreeRoot: initialized.repoRoot,
      initialBranch: BRANCH,
      initialSha: initialized.baseHeadSha,
    });
    const fakeLaunch = new FakeDocsWriteLaunchPort({
      worktreeRoot: initialized.repoRoot,
      pathAllowlist: [EXPECTED_CYCLE_ROOT],
      defaultBranch: BRANCH,
      repositoryRef: IDENTITY,
      gitState,
      content: `# Spécification fonctionnelle\n\n${STABILIZED_WHAT}\n`,
    });

    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
    runtime = getRuntimeApplicationService({
      registryRoot: W2_REGISTRY_ROOT,
      schemasRoot: W2_SCHEMAS_ROOT,
      nowIso: W2_FIXED_NOW,
      idSource: new SeededIdSource("cfgdl"),
      auditMode: "noop",
      productDbPath: path.join(root, "oa.sqlite"),
      realBoundary: {
        launchPort: fakeLaunch,
        safetyJournal: new MemoryLaunchSafetyJournal(),
        managedRepoRootBase: managedBase,
      },
    });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    setConversationProviderForTests(null);
    resetRuntimeApplicationServiceForTests();
    while (tempRoots.length) {
      const d = tempRoots.pop();
      if (d) {
        try {
          fs.rmSync(d, { recursive: true, force: true });
        } catch {
          /* ignore */
        }
      }
    }
    restoreEnvVar("OPS1_CONVERSATION_PROVIDER", previousProvider);
    restoreEnvVar(
      "SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY",
      previousMorrisAuthority,
    );
    restoreEnvVar("SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY", previousIdentity);
    restoreEnvVar("SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL", previousRemote);
    restoreEnvVar(
      "SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH",
      previousBranch,
    );
    restoreEnvVar(SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV, previousManaged);
    assertRealOff();
  });

  async function seedCycle(
    suffix: string,
    opts: { requireArtifact?: boolean } = {},
  ): Promise<{ projectId: string; cycleInstanceId: string }> {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: "Mini cadrage — Suivi de tâches",
      objective: "Cadrer le suivi de tâches",
      context: `CHAT-FIRST-GOVERNED-DECISION-LOOP-01 ${suffix}`,
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `CFGDL${suffix.toUpperCase()}`,
      idempotencyKey: `idem:cfgdl-${suffix}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("createProject failed");
    const projectId = created.project.projectId;

    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: managedBase,
      identity: IDENTITY,
    });

    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps0.ok) throw new Error("LPS unavailable");

    const traj = await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: [
        {
          stepId: "stp:fd",
          order: 1,
          label: "Conception fonctionnelle",
          state: "active",
          cycleTypeId: "cyc:functional-design",
        },
        {
          stepId: "stp:deliver",
          order: 2,
          label: "Livraison",
          state: "pending",
          cycleTypeId: "cyc:delivery",
        },
      ],
      status: "active",
      expectedLpsVersion: lps0.livingProjectState.version,
      createdBy: {
        actorId: "actor:morris",
        role: "project_owner",
        displayName: "Morris",
        authorityLevel: "N3",
      },
    });
    expect(traj.ok).toBe(true);

    const cycleInstanceId = `cyc:cfgdl-${suffix}-${projectId.slice(-6)}`;
    const candidate = await oa.cycleServices.createCycle.execute({
      cycleInstanceId,
      cycleTypeId: "cyc:functional-design",
      projectId,
      signals: { lowRiskBounded: true },
      createdBy: {
        actorId: "actor:nora-f2",
        role: "agent",
        displayName: "Nora F2",
        authorityLevel: "N1",
      },
      linkAsActiveCycle: false,
    });
    expect(candidate.ok).toBe(true);

    const auth = registerLocalPiloteAuthority({
      authorityResolver: oa.authorityResolver,
      scope: `pilot-lifecycle:${cycleInstanceId}`,
      issuedAt: "2026-09-27T12:00:00.000Z",
      forceEnable: true,
    });
    if (!auth.ok) throw new Error("authority failed");

    const lps1 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps1.ok) throw new Error("LPS1 unavailable");

    const started = await oa.cycleServices.pilotLifecycle.start({
      cycleInstanceId,
      projectId,
      createdBy: {
        actorId: LOCAL_PILOTE_ACTOR.actorId,
        role: LOCAL_PILOTE_ACTOR.role,
        displayName: LOCAL_PILOTE_ACTOR.displayName,
        authorityLevel: LOCAL_PILOTE_ACTOR.authorityLevel,
      },
      authorityEvidenceId: auth.evidenceId,
      expectedLpsVersion: lps1.livingProjectState.version,
    });
    expect(started.ok).toBe(true);

    if (!opts.requireArtifact) return { projectId, cycleInstanceId };
    const obligation = await recordObligationPolicyRequireArtifact({
      projectId,
      cycleInstanceId,
      cycleServices: oa.cycleServices,
      decisionServices: oa.decisionServices,
      authorityResolver: oa.authorityResolver,
      nowIso: () => "2026-09-27T12:01:00.000Z",
    });
    expect(obligation.ok).toBe(true);

    return { projectId, cycleInstanceId };
  }


  /** Seed a Nora ACW Recommendation (identity) for the active cycle. */
  async function seedAcwRecommendation(input: {
    projectId: string;
    cycleInstanceId: string;
    id: string;
    statement: string;
    extraRelated?: string[];
  }): Promise<string> {
    const oa = runtime.oa!;
    const written = await oa.cycleServices.updateEpistemicState.execute({
      projectId: input.projectId,
      createdBy: {
        actorId: "actor:nora-active-cycle-work",
        role: "agent",
        displayName: "Nora",
        authorityLevel: "N1",
      },
      items: [
        {
          epistemicItemId: input.id,
          type: "Recommendation",
          statement: input.statement,
          status: "active",
          source: "active-cycle-work:nora",
          relatedObjects: [
            input.projectId,
            input.cycleInstanceId,
            ...(input.extraRelated ?? []),
          ],
        },
      ],
    });
    expect(written.ok).toBe(true);
    return input.id;
  }

  async function epistemicItems(projectId: string) {
    const r = await runtime.oa!.cycleServices.getEpistemicState.execute({
      projectId,
    });
    if (!r.ok) throw new Error("epistemic read failed");
    return r.state.items;
  }

  async function hdCount(projectId: string): Promise<number> {
    return (
      await runtime.oa!.decisionServices.decisions.listByProject(projectId)
    ).length;
  }

  async function trajectorySnapshot(projectId: string) {
    const t = await runtime.oa!.cycleServices.getCurrentTrajectory.execute({
      projectId,
    });
    if (!t.ok) throw new Error("trajectory read failed");
    return {
      version: t.trajectory.version,
      status: t.trajectory.status,
      decidedByDecisionRef: t.trajectory.decidedByDecisionRef ?? null,
    };
  }

  async function dispose(
    projectId: string,
    disposition: "accept" | "refuse" | "amend" | "defer",
    targetKind: "current_recommendation" | "presented_subject" | "ambiguous" =
      "current_recommendation",
  ) {
    return resolveChatFirstPilotDecision({
      oa: runtime.oa!,
      projectId,
      disposition,
      targetKind,
      forceLocalAuthority: true,
    });
  }

  it("T1 — unique active ACW Work → eligible work_recommendation (seal required, nothing written)", async () => {
    const { projectId, cycleInstanceId } = await seedCycle("t1");
    const acw = await seedAcwRecommendation({
      projectId,
      cycleInstanceId,
      id: "epi:acw:t1aaaaaaaaaaaaaaaaaa",
      statement: ACW_STATEMENT_A,
    });
    const before = (await epistemicItems(projectId)).length;
    const gate = await assessChatFirstWorkEligibility({
      oa: runtime.oa!,
      projectId,
    });
    expect(gate.eligible).toBe(true);
    if (!gate.eligible) throw new Error("expected eligible");
    expect(gate.subjectFamily).toBe("work_recommendation");
    expect(gate.presented).toBeNull();
    expect("sealRequired" in gate && gate.sealRequired).toBe(true);
    expect((await epistemicItems(projectId)).length).toBe(before);
    expect(acw).toMatch(/^epi:acw:/);
  });

  it("T2 — multiple active ACW Work → ambiguous, zero HD", async () => {
    const { projectId, cycleInstanceId } = await seedCycle("t2");
    await seedAcwRecommendation({
      projectId,
      cycleInstanceId,
      id: "epi:acw:t2aaaaaaaaaaaaaaaaaa",
      statement: ACW_STATEMENT_A,
    });
    await seedAcwRecommendation({
      projectId,
      cycleInstanceId,
      id: "epi:acw:t2bbbbbbbbbbbbbbbbbb",
      statement: ACW_STATEMENT_B,
    });
    const gate = await assessChatFirstWorkEligibility({
      oa: runtime.oa!,
      projectId,
    });
    expect(gate.eligible).toBe(false);
    if (gate.eligible) throw new Error("expected ineligible");
    expect(gate.kind).toBe("ambiguous_subjects");

    const hdBefore = await hdCount(projectId);
    const resolved = await dispose(projectId, "accept");
    expect(resolved.kind).toBe("ambiguous_subjects");
    expect(await hdCount(projectId)).toBe(hdBefore);
  });

  it("T3 — no ACW Work → no eligible subject, no_eligible_subject on resolve", async () => {
    const { projectId } = await seedCycle("t3");
    const gate = await assessChatFirstWorkEligibility({
      oa: runtime.oa!,
      projectId,
    });
    expect(gate.eligible).toBe(false);
    if (gate.eligible) throw new Error("expected ineligible");
    expect(gate.kind).toBe("no_eligible_subject");
    const resolved = await dispose(projectId, "accept");
    expect(resolved.kind).toBe("no_eligible_subject");
  });

  it("T4 — seal creates Observation+Options+optset Recommendation linked to ACW; no Proposal, no PT", async () => {
    const { projectId, cycleInstanceId } = await seedCycle("t4");
    const acwId = await seedAcwRecommendation({
      projectId,
      cycleInstanceId,
      id: "epi:acw:t4aaaaaaaaaaaaaaaaaa",
      statement: ACW_STATEMENT_A,
    });
    const trajBefore = await trajectorySnapshot(projectId);

    const sealed = await sealWorkRecommendationPresentedOptionSet({
      oa: runtime.oa!,
      projectId,
      workRecommendationEpistemicItemId: acwId,
    });
    expect(sealed.ok).toBe(true);
    if (!sealed.ok) throw new Error(sealed.message);
    expect(sealed.created).toBe(true);
    const p = sealed.presented;
    expect(isWorkRecommendationPresentedSet(p)).toBe(true);
    expect(p.decisionSubjectMode).toBe("work_recommendation");
    expect(p.workRecommendationEpistemicItemId).toBe(acwId);
    expect(p.promotesProjectTrajectory).toBe(false);
    expect(p.trajectoryId).toBeNull();
    expect(p.candidateVersion).toBeNull();
    expect(p.proposalId ?? null).toBeNull();
    expect(p.optionRefs).toEqual([
      PROPOSAL_SUBJECT_PURSUE_REF,
      PROPOSAL_SUBJECT_AMEND_REF,
      PROPOSAL_SUBJECT_REFUSE_REF,
    ]);
    expect(p.options.map((o) => o.label).join(" ")).toMatch(
      /recommandation de travail/i,
    );

    const items = await epistemicItems(projectId);
    const obs = items.find(
      (i) =>
        i.type === "Observation" &&
        parsePresentedOptionSetStatement(i.statement)?.optionSetRef ===
          p.optionSetRef,
    );
    expect(obs).toBeTruthy();
    expect(obs!.relatedObjects).toContain(acwId);
    const rec = items.find(
      (i) => i.type === "Recommendation" && i.source === p.optionSetRef,
    );
    expect(rec).toBeTruthy();
    expect(rec!.relatedObjects).toEqual(
      expect.arrayContaining([acwId, cycleInstanceId, p.optionSetRef]),
    );
    expect(rec!.relatedObjects!.some((r) => r.startsWith("prop:"))).toBe(false);
    expect(
      items.filter((i) => i.type === "Option" && i.source === p.optionSetRef),
    ).toHaveLength(3);

    // Idempotent re-seal.
    const again = await sealWorkRecommendationPresentedOptionSet({
      oa: runtime.oa!,
      projectId,
      workRecommendationEpistemicItemId: acwId,
    });
    expect(again.ok && again.created).toBe(false);
    expect(again.ok && again.presented.optionSetRef).toBe(p.optionSetRef);

    expect(listProposalsForProject(projectId)).toHaveLength(0);
    expect(await trajectorySnapshot(projectId)).toEqual(trajBefore);
    expect(await hdCount(projectId)).toBe(0);
  });

  it("T5 — accept: one HD (dec:w2-wr:), DecisionRef with optset+ACW, ACW and carrier resolved, zero PT/Proposal mutation", async () => {
    const { projectId, cycleInstanceId } = await seedCycle("t5");
    const acwId = await seedAcwRecommendation({
      projectId,
      cycleInstanceId,
      id: "epi:acw:t5aaaaaaaaaaaaaaaaaa",
      statement: ACW_STATEMENT_A,
    });
    const trajBefore = await trajectorySnapshot(projectId);

    const resolved = await dispose(projectId, "accept");
    expect(resolved.kind).toBe("decision_recorded");
    if (resolved.kind !== "decision_recorded") throw new Error(JSON.stringify(resolved));
    expect(resolved.subjectFamily).toBe("work_recommendation");
    expect(resolved.proposalId).toBeNull();
    expect(resolved.decisionId).toMatch(/^dec:w2-wr:/);
    expect(resolved.selectedOptionRef).toBe(PROPOSAL_SUBJECT_PURSUE_REF);
    expect(resolved.executionPerformed).toBe(false);
    expect(resolved.executionContractPrepared).toBe(false);
    expect(await hdCount(projectId)).toBe(1);

    const hd = await runtime.oa!.decisionServices.getHumanDecision.execute({
      decisionId: resolved.decisionId,
    });
    expect(hd.ok).toBe(true);
    if (!hd.ok) throw new Error("hd read failed");
    expect(hd.decision.status).toBe("accepted");
    expect(hd.decision.selectedOptionId).toBe(PROPOSAL_SUBJECT_PURSUE_REF);
    const basis = hd.decision.decisionBasis!;
    expect(basis.sourceType).toBe("work_recommendation");
    expect(basis.sourceRef).toBe(resolved.optionSetRef);
    expect(basis.sourceRef.startsWith("prop:")).toBe(false);
    expect(basis.trajectoryContext).toBeUndefined();
    expect(basis.candidateTrajectoryContext).toBeUndefined();
    expect(basis.workRecommendationContext).toMatchObject({
      workRecommendationEpistemicItemId: acwId,
      optionSetRef: resolved.optionSetRef,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
    });
    expect(basis.workRecommendationContext!.optionRefs).toEqual([
      PROPOSAL_SUBJECT_PURSUE_REF,
      PROPOSAL_SUBJECT_AMEND_REF,
      PROPOSAL_SUBJECT_REFUSE_REF,
    ]);
    expect(basis.workRecommendationContext!.optionSetDigest).toMatch(/^[0-9a-f]{64}$/);
    expect(basis.executionBasis.targetPath).toBeUndefined();

    const items = await epistemicItems(projectId);
    const decRef = items.find(
      (i) => i.type === "DecisionRef" && i.source === resolved.decisionId,
    );
    expect(decRef).toBeTruthy();
    expect(decRef!.relatedObjects).toEqual(
      expect.arrayContaining([resolved.optionSetRef, acwId, resolved.decisionId]),
    );
    const acw = items.find((i) => i.epistemicItemId === acwId)!;
    expect(acw.status).toBe("resolved");
    expect(acw.relatedObjects).toContain(resolved.decisionId);
    const carrier = items.find(
      (i) => i.type === "Recommendation" && i.source === resolved.optionSetRef,
    )!;
    expect(carrier.status).toBe("resolved");

    expect(listProposalsForProject(projectId)).toHaveLength(0);
    expect(await trajectorySnapshot(projectId)).toEqual(trajBefore);

    // Idempotent: second accept finds no subject, no second HD.
    const second = await dispose(projectId, "accept");
    expect(second.kind).toBe("no_eligible_subject");
    expect(await hdCount(projectId)).toBe(1);
  });

  it("T6 — refuse → rejected; amend → superseded (ACW + carrier same status)", async () => {
    for (const [suffix, disposition, status, option] of [
      ["t6r", "refuse", "rejected", PROPOSAL_SUBJECT_REFUSE_REF],
      ["t6a", "amend", "superseded", PROPOSAL_SUBJECT_AMEND_REF],
    ] as const) {
      const { projectId, cycleInstanceId } = await seedCycle(suffix);
      const acwId = await seedAcwRecommendation({
        projectId,
        cycleInstanceId,
        id: `epi:acw:${suffix}aaaaaaaaaaaaaaaa`,
        statement: ACW_STATEMENT_A,
      });
      const resolved = await dispose(projectId, disposition, "presented_subject");
      expect(resolved.kind).toBe("decision_recorded");
      if (resolved.kind !== "decision_recorded") throw new Error(JSON.stringify(resolved));
      expect(resolved.selectedOptionRef).toBe(option);
      const items = await epistemicItems(projectId);
      expect(items.find((i) => i.epistemicItemId === acwId)!.status).toBe(status);
      expect(
        items.find(
          (i) => i.type === "Recommendation" && i.source === resolved.optionSetRef,
        )!.status,
      ).toBe(status);
    }
  });

  it("T7 — defer: HD + Reservation + ACW/carrier resolved, no Proposal closure", async () => {
    const { projectId, cycleInstanceId } = await seedCycle("t7");
    const acwId = await seedAcwRecommendation({
      projectId,
      cycleInstanceId,
      id: "epi:acw:t7aaaaaaaaaaaaaaaaaa",
      statement: ACW_STATEMENT_A,
    });
    const resolved = await dispose(projectId, "defer");
    expect(resolved.kind).toBe("decision_recorded");
    if (resolved.kind !== "decision_recorded") throw new Error(JSON.stringify(resolved));
    expect(resolved.disposition).toBe("defer");
    expect(resolved.subjectFamily).toBe("work_recommendation");
    expect(resolved.proposalId).toBeNull();
    const items = await epistemicItems(projectId);
    const reservation = items.find(
      (i) => i.type === "Reservation" && i.source === "work-recommendation-defer",
    );
    expect(reservation).toBeTruthy();
    expect(reservation!.relatedObjects).toContain(acwId);
    expect(items.find((i) => i.epistemicItemId === acwId)!.status).toBe("resolved");
    expect(
      items.find(
        (i) => i.type === "Recommendation" && i.source === resolved.optionSetRef,
      )!.status,
    ).toBe("resolved");
    expect(
      items.some(
        (i) =>
          i.type === "DecisionRef" &&
          i.relatedObjects?.includes(acwId) &&
          i.relatedObjects?.includes(resolved.optionSetRef),
      ),
    ).toBe(true);
    expect(listProposalsForProject(projectId)).toHaveLength(0);
  });

  it("T8 — specific_alternative / ambiguous targetKind records nothing", async () => {
    const { projectId, cycleInstanceId } = await seedCycle("t8");
    await seedAcwRecommendation({
      projectId,
      cycleInstanceId,
      id: "epi:acw:t8aaaaaaaaaaaaaaaaaa",
      statement: ACW_STATEMENT_A,
    });
    const before = (await epistemicItems(projectId)).length;
    const resolved = await resolveChatFirstPilotDecision({
      oa: runtime.oa!,
      projectId,
      disposition: "accept",
      targetKind: "specific_alternative",
      forceLocalAuthority: true,
    });
    expect(resolved.kind).toBe("no_eligible_subject");
    expect(await hdCount(projectId)).toBe(0);
    expect((await epistemicItems(projectId)).length).toBe(before);
  });

  it("T9 — Journal dedup: sealed carrier suppresses the bare ACW card; disposition id reconstructed", async () => {
    const { projectId, cycleInstanceId } = await seedCycle("t9");
    const acwId = await seedAcwRecommendation({
      projectId,
      cycleInstanceId,
      id: "epi:acw:t9aaaaaaaaaaaaaaaaaa",
      statement: ACW_STATEMENT_A,
    });
    const cards0 = projectCycleWorkRecommendations({
      items: await epistemicItems(projectId),
      cycleInstanceId,
      fallbackCycleInstanceId: cycleInstanceId,
      trajectoryDecisionSupportState: "NONE",
    });
    expect(cards0).toHaveLength(1);
    expect(cards0[0]!.optionSetRef).toBeNull();

    const sealed = await sealWorkRecommendationPresentedOptionSet({
      oa: runtime.oa!,
      projectId,
      workRecommendationEpistemicItemId: acwId,
    });
    expect(sealed.ok).toBe(true);
    const cards1 = projectCycleWorkRecommendations({
      items: await epistemicItems(projectId),
      cycleInstanceId,
      fallbackCycleInstanceId: cycleInstanceId,
      trajectoryDecisionSupportState: "NONE",
    });
    expect(cards1).toHaveLength(1);
    expect(cards1[0]!.optionSetRef).toBe(
      sealed.ok ? sealed.presented.optionSetRef : null,
    );
    expect(cards1[0]!.workRecommendationEpistemicItemId).toBe(acwId);

    const resolved = await dispose(projectId, "accept");
    if (resolved.kind !== "decision_recorded") throw new Error(JSON.stringify(resolved));
    const cards2 = projectCycleWorkRecommendations({
      items: await epistemicItems(projectId),
      cycleInstanceId,
      fallbackCycleInstanceId: cycleInstanceId,
      trajectoryDecisionSupportState: "NONE",
    });
    expect(cards2).toHaveLength(1);
    expect(cards2[0]!.status).toBe("resolved");
    expect(cards2[0]!.dispositionDecisionId).toBe(resolved.decisionId);
  });

  it("T10 — PT-fuel ACW (opt:trajectory:*) excluded under PRESENT/UNAVAILABLE, Work only under NONE", async () => {
    const { projectId, cycleInstanceId } = await seedCycle("t10");
    await seedAcwRecommendation({
      projectId,
      cycleInstanceId,
      id: "epi:acw:t10aaaaaaaaaaaaaaaaa",
      statement: ACW_STATEMENT_A,
      extraRelated: ["opt:trajectory:governed"],
    });
    const items = await epistemicItems(projectId);
    const present = selectActiveWorkRecommendationCandidates({
      items,
      cycleInstanceId,
      trajectoryDecisionSupportState: "PRESENT",
    });
    expect(present.acwIds).toHaveLength(0);
    const unavailable = selectActiveWorkRecommendationCandidates({
      items,
      cycleInstanceId,
      trajectoryDecisionSupportState: "UNAVAILABLE",
    });
    expect(unavailable.acwIds).toHaveLength(0);
    const none = selectActiveWorkRecommendationCandidates({
      items,
      cycleInstanceId,
      trajectoryDecisionSupportState: "NONE",
    });
    expect(none.acwIds).toEqual(["epi:acw:t10aaaaaaaaaaaaaaaaa"]);
  });

  it("T11 — decideTrajectory on a work set: hostile trajectory fields ignored, unknown option refused, second decision refused", async () => {
    const { projectId, cycleInstanceId } = await seedCycle("t11");
    const acwId = await seedAcwRecommendation({
      projectId,
      cycleInstanceId,
      id: "epi:acw:t11aaaaaaaaaaaaaaaaa",
      statement: ACW_STATEMENT_A,
    });
    const sealed = await sealWorkRecommendationPresentedOptionSet({
      oa: runtime.oa!,
      projectId,
      workRecommendationEpistemicItemId: acwId,
    });
    if (!sealed.ok) throw new Error(sealed.message);
    const trajBefore = await trajectorySnapshot(projectId);

    const unknown = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: sealed.presented.optionSetRef,
      selectedOptionRef: "opt:not-presented",
      forceLocalAuthority: true,
    });
    expect(unknown.ok).toBe(false);
    expect(await hdCount(projectId)).toBe(0);

    const decided = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: sealed.presented.optionSetRef,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      trajectoryId: "trj:hostile",
      candidateVersion: 99,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) throw new Error(decided.message);
    expect(decided.decisionSubjectMode).toBe("work_recommendation");
    expect(decided.promotesProjectTrajectory).toBe(false);
    expect(decided.trajectory).toBeNull();
    expect(decided.decision.decisionId).toMatch(/^dec:w2-wr:/);
    expect(await trajectorySnapshot(projectId)).toEqual(trajBefore);

    const again = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: sealed.presented.optionSetRef,
      selectedOptionRef: PROPOSAL_SUBJECT_REFUSE_REF,
      forceLocalAuthority: true,
    });
    expect(again.ok).toBe(false);
    if (again.ok) throw new Error("expected refusal");
    expect(again.code).toBe("SUBJECT_ALREADY_DECIDED");
    expect(await hdCount(projectId)).toBe(1);
  });

  it("T12 — Proposal keeps priority: pending Proposal + ACW Work → Proposal path, ACW untouched", async () => {
    const { projectId, cycleInstanceId } =
      await seedCycle("t12", { requireArtifact: true });
    const acwId = await seedAcwRecommendation({
      projectId,
      cycleInstanceId,
      id: "epi:acw:t12aaaaaaaaaaaaaaaaa",
      statement: ACW_STATEMENT_A,
    });
    const send = await projectAssistantSendAction({
      projectId,
      content: MATERIALIZATION_REQUEST,
    });
    expect(send.ok).toBe(true);
    if (!send.ok) throw new Error(JSON.stringify(send));

    const accepted = await projectAssistantSendAction({
      projectId,
      content: CHAT_ACCEPT,
    });
    expect(accepted.ok).toBe(true);
    if (!accepted.ok) throw new Error(JSON.stringify(accepted));
    expect(accepted.f2?.turnKind).toBe("f2_decision");
    const hd = await runtime.oa!.decisionServices.getHumanDecision.execute({
      decisionId: accepted.f2!.decision!.decisionId,
    });
    expect(hd.ok).toBe(true);
    if (!hd.ok) throw new Error("hd");
    // Proposal HD — NOT a work-recommendation HD.
    expect(hd.decision.decisionId).not.toMatch(/^dec:w2-wr:/);
    expect(hd.decision.decisionBasis?.sourceRef.startsWith("prop:")).toBe(true);
    const acw = (await epistemicItems(projectId)).find(
      (i) => i.epistemicItemId === acwId,
    )!;
    expect(acw.status).toBe("active");
  });

  it("T13 — chat front door: unique ACW Work accepted from the conversation", async () => {
    const { projectId, cycleInstanceId } = await seedCycle("t13");
    const acwId = await seedAcwRecommendation({
      projectId,
      cycleInstanceId,
      id: "epi:acw:t13aaaaaaaaaaaaaaaaa",
      statement: ACW_STATEMENT_A,
    });
    const accepted = await projectAssistantSendAction({
      projectId,
      content: "Oui, je retiens cette recommandation de travail. __F2_DECIDE_ACCEPT__",
    });
    expect(accepted.ok).toBe(true);
    if (!accepted.ok) throw new Error(JSON.stringify(accepted));
    expect(accepted.f2?.turnKind).toBe("f2_decision");
    expect(accepted.f2?.decision?.decisionId).toMatch(/^dec:w2-wr:/);
    expect(accepted.f2?.proposal ?? null).toBeNull();
    const acw = (await epistemicItems(projectId)).find(
      (i) => i.epistemicItemId === acwId,
    )!;
    expect(acw.status).toBe("resolved");
    expect(listProposalsForProject(projectId)).toHaveLength(0);
  });

  it("T14 — unrelated chat turn leaves the ACW Work untouched (no HD)", async () => {
    const { projectId, cycleInstanceId } = await seedCycle("t14");
    const acwId = await seedAcwRecommendation({
      projectId,
      cycleInstanceId,
      id: "epi:acw:t14aaaaaaaaaaaaaaaaa",
      statement: ACW_STATEMENT_A,
    });
    const unrelated = await projectAssistantSendAction({
      projectId,
      content:
        "Par curiosité, quelles réserves méthodologiques vois-tu sur la lisibilité du projet en général ? __F2_INFORMATIVE__",
    });
    expect(unrelated.ok).toBe(true);
    expect(await hdCount(projectId)).toBe(0);
    const acw = (await epistemicItems(projectId)).find(
      (i) => i.epistemicItemId === acwId,
    )!;
    expect(acw.status).toBe("active");
  });

  it("MX-J1 — unbound ACW Work is visible in Journal Recommandations (MD-WR-02)", async () => {
    const { projectId, cycleInstanceId } = await seedCycle("mxj1");
    const acwId = await seedAcwRecommendation({
      projectId,
      cycleInstanceId,
      id: "epi:acw:mxj1aaaaaaaaaaaaaaaa",
      statement: ACW_STATEMENT_A,
    });
    const cards = projectCycleWorkRecommendations({
      items: await epistemicItems(projectId),
      cycleInstanceId,
      fallbackCycleInstanceId: cycleInstanceId,
      trajectoryDecisionSupportState: "NONE",
    });
    expect(cards).toHaveLength(1);
    expect(cards[0]!.epistemicItemId).toBe(acwId);
    expect(cards[0]!.optionSetRef).toBeNull();
    expect(cards[0]!.status).toBe("active");
    expect(cards[0]!.workRecommendationEpistemicItemId).toBe(acwId);
  });

  it("MX-F1 — unbound ACW Work blocks finalization (MD-WR-07); seal dedupes to ONE; disposed clears", async () => {
    const { projectId, cycleInstanceId } = await seedCycle("mxf1");
    const acwId = await seedAcwRecommendation({
      projectId,
      cycleInstanceId,
      id: "epi:acw:mxf1aaaaaaaaaaaaaaaa",
      statement: ACW_STATEMENT_A,
    });
    const unbound = deriveUndisposedRecommendations(
      await epistemicItems(projectId),
      cycleInstanceId,
    );
    expect(unbound).toHaveLength(1);
    expect(unbound[0]!.workRecommendationEpistemicItemId).toBe(acwId);
    expect(unbound[0]!.optionSetRef).toBeNull();

    const sealed = await sealWorkRecommendationPresentedOptionSet({
      oa: runtime.oa!,
      projectId,
      workRecommendationEpistemicItemId: acwId,
    });
    expect(sealed.ok).toBe(true);
    if (!sealed.ok) throw new Error(sealed.message);
    const pending = deriveUndisposedRecommendations(
      await epistemicItems(projectId),
      cycleInstanceId,
    );
    expect(pending).toHaveLength(1);
    expect(pending[0]!.optionSetRef).toBe(sealed.presented.optionSetRef);

    const resolved = await dispose(projectId, "accept");
    expect(resolved.kind).toBe("decision_recorded");
    const after = deriveUndisposedRecommendations(
      await epistemicItems(projectId),
      cycleInstanceId,
    );
    expect(after).toHaveLength(0);
  });

  // ───────────────────────── Correction Pass 01 ─────────────────────────

  it("CP01-T1 — MD-WR-06: accept writes DecisionBasis sourceType work_recommendation + typed context (never proposal)", async () => {
    const { projectId, cycleInstanceId } = await seedCycle("cp1");
    const acwId = await seedAcwRecommendation({
      projectId,
      cycleInstanceId,
      id: "epi:acw:cp1aaaaaaaaaaaaaaaaaa",
      statement: ACW_STATEMENT_A,
    });
    const resolved = await dispose(projectId, "accept");
    if (resolved.kind !== "decision_recorded") throw new Error(JSON.stringify(resolved));
    const hd = await runtime.oa!.decisionServices.getHumanDecision.execute({
      decisionId: resolved.decisionId,
    });
    if (!hd.ok) throw new Error("hd read failed");
    const basis = hd.decision.decisionBasis!;
    expect(basis.sourceType).toBe("work_recommendation");
    expect(basis.sourceType).not.toBe("proposal");
    expect(basis.sourceRef).toBe(resolved.optionSetRef);
    expect(basis.workRecommendationContext!.workRecommendationEpistemicItemId).toBe(acwId);
    expect(basis.workRecommendationContext!.optionSetRef).toBe(resolved.optionSetRef);
    expect(basis.trajectoryContext).toBeUndefined();
    expect(basis.candidateTrajectoryContext).toBeUndefined();
    expect(validateDecisionBasis(basis)).toBeNull();
  });

  it("CP01-T2 — MD-WR-06: refuse and amend also carry honest work_recommendation basis with selected option", async () => {
    for (const [suffix, disposition, option] of [
      ["cp2r", "refuse", PROPOSAL_SUBJECT_REFUSE_REF],
      ["cp2a", "amend", PROPOSAL_SUBJECT_AMEND_REF],
    ] as const) {
      const { projectId, cycleInstanceId } = await seedCycle(suffix);
      await seedAcwRecommendation({
        projectId,
        cycleInstanceId,
        id: `epi:acw:${suffix}aaaaaaaaaaaaaaaa`,
        statement: ACW_STATEMENT_A,
      });
      const resolved = await dispose(projectId, disposition, "presented_subject");
      if (resolved.kind !== "decision_recorded") throw new Error(JSON.stringify(resolved));
      const hd = await runtime.oa!.decisionServices.getHumanDecision.execute({
        decisionId: resolved.decisionId,
      });
      if (!hd.ok) throw new Error("hd read failed");
      const basis = hd.decision.decisionBasis!;
      expect(basis.sourceType).toBe("work_recommendation");
      expect(basis.workRecommendationContext!.selectedOptionRef).toBe(option);
      expect(basis.workRecommendationContext!.optionRefs).toContain(option);
      expect(validateDecisionBasis(basis)).toBeNull();
    }
  });

  it("CP01-T3-defer — MD-WR-06: defer Work HD never carries Proposal DecisionBasis; Reservation + ZERO Proposal", async () => {
    const { projectId, cycleInstanceId } = await seedCycle("cp3d");
    const acwId = await seedAcwRecommendation({
      projectId,
      cycleInstanceId,
      id: "epi:acw:cp3daaaaaaaaaaaaaaaa",
      statement: ACW_STATEMENT_A,
    });
    const resolved = await dispose(projectId, "defer");
    if (resolved.kind !== "decision_recorded") throw new Error(JSON.stringify(resolved));
    expect(resolved.disposition).toBe("defer");
    expect(resolved.subjectFamily).toBe("work_recommendation");
    expect(resolved.proposalId).toBeNull();
    const hd = await runtime.oa!.decisionServices.getHumanDecision.execute({
      decisionId: resolved.decisionId,
    });
    if (!hd.ok) throw new Error("hd read failed");
    // Defer today records HD without DecisionBasis; if a basis appears later it
    // MUST be work_recommendation — never a false Proposal provenance.
    const basis = hd.decision.decisionBasis;
    if (basis) {
      expect(basis.sourceType).toBe("work_recommendation");
      expect(basis.sourceType).not.toBe("proposal");
      expect(basis.workRecommendationContext?.workRecommendationEpistemicItemId).toBe(
        acwId,
      );
      expect(basis.trajectoryContext).toBeUndefined();
    } else {
      expect(basis).toBeUndefined();
    }
    const items = await epistemicItems(projectId);
    expect(
      items.some(
        (i) => i.type === "Reservation" && i.source === "work-recommendation-defer",
      ),
    ).toBe(true);
    expect(listProposalsForProject(projectId)).toHaveLength(0);
  });

  it("CP01-T10 — Blocker 2: unreadable current trajectory → TDS UNAVAILABLE (never silent undecided)", async () => {
    const { projectId, cycleInstanceId } = await seedCycle("cp10");
    const spy = vi
      .spyOn(runtime.oa!.cycleServices.getCurrentTrajectory, "execute")
      .mockResolvedValue({
        ok: false,
        error: { detailCode: "PERSISTENCE_FAILURE" },
      } as never);
    try {
      const tds = await resolveTrajectoryDecisionSupportProjection({
        oa: runtime.oa!,
        projectId,
        cycleInstanceId,
      });
      expect(tds.state).toBe("UNAVAILABLE");
      spy.mockRejectedValue(new Error("boom"));
      const thrown = await resolveTrajectoryDecisionSupportProjection({
        oa: runtime.oa!,
        projectId,
        cycleInstanceId,
      });
      expect(thrown.state).toBe("UNAVAILABLE");
    } finally {
      spy.mockRestore();
    }
  });

  it("CP01-T14 — MD-WR-07: unbound active ACW blocks finalization via pilotLifecycle.assess; disposed clears", async () => {
    const { projectId, cycleInstanceId } = await seedCycle("cp14");
    await seedAcwRecommendation({
      projectId,
      cycleInstanceId,
      id: "epi:acw:cp14aaaaaaaaaaaaaaaaa",
      statement: ACW_STATEMENT_A,
    });
    const before = await runtime.oa!.cycleServices.pilotLifecycle.assess({
      cycleInstanceId,
      projectId,
    });
    if (!before.ok) throw new Error("assess failed");
    expect(before.assessment.blockers).toContain("undisposed_recommendations");

    const resolved = await dispose(projectId, "accept");
    expect(resolved.kind).toBe("decision_recorded");
    const after = await runtime.oa!.cycleServices.pilotLifecycle.assess({
      cycleInstanceId,
      projectId,
    });
    if (!after.ok) throw new Error("assess failed");
    expect(after.assessment.blockers).not.toContain("undisposed_recommendations");
  });
});

describe("MD-WR-04 / currentness pure gates", () => {
  it("MX-TDS — PT decided without replan → no exposure; replan/requiresHD → expose", () => {
    expect(
      shouldExposeTrajectoryDecisionSupport({
        cycleInstanceId: "cyc:1",
        trajectoryReadOk: true,
        decidedByDecisionRef: "dec:pt",
        recoveryReadOk: true,
        recommendationKind: "recover",
        requiresHumanDecision: false,
      }),
    ).toEqual({ expose: false, reason: "pt_decided_no_replan" });

    expect(
      shouldExposeTrajectoryDecisionSupport({
        cycleInstanceId: "cyc:1",
        trajectoryReadOk: true,
        decidedByDecisionRef: "dec:pt",
        recoveryReadOk: true,
        recommendationKind: "replan",
        requiresHumanDecision: false,
      }).expose,
    ).toBe(true);

    expect(
      shouldExposeTrajectoryDecisionSupport({
        cycleInstanceId: "cyc:1",
        trajectoryReadOk: true,
        decidedByDecisionRef: null,
        recoveryReadOk: true,
      }).expose,
    ).toBe(true);
  });

  it("MX-CUR — candidate_trajectory decidedByDecisionRef cuts off prior PT Recs; Work dates unaffected conceptually", () => {
    const cutoff = resolveTrajectoryRecommendationCutoffFromDecisions({
      decisions: [
        {
          decisionId: "dec:gf-trj:1",
          status: "accepted",
          effectiveAt: "2026-10-02T20:25:44.944Z",
          decisionBasis: {
            sourceType: "candidate_trajectory",
            sourceRef: "trj:x",
            sourceDigest: "d",
            projectId: "prj:x",
          },
        } as never,
      ],
      cycleInstanceId: "cyc:trj-1",
      decidedByDecisionRef: "dec:gf-trj:1",
    });
    expect(cutoff).toBe("2026-10-02T20:25:44.944Z");
    expect(
      classifyAcwRecommendationCurrentness({
        createdAt: "2026-10-02T19:00:00.000Z",
        ignoreCreatedAtOnOrBefore: cutoff,
      }),
    ).toBe("HISTORICAL");
    expect(
      classifyAcwRecommendationCurrentness({
        createdAt: "2026-10-03T07:00:00.000Z",
        ignoreCreatedAtOnOrBefore: cutoff,
      }),
    ).toBe("CURRENT");
  });
});


// ───────────────────────── Correction Pass 01 (pure) ─────────────────────────

const CP_PROJECT = "prj:cp01";
const CP_CYCLE = "cyc:cp01";
const CP_OPTSET = "optset:w2-wr-cp01";
const CP_ACW = "epi:acw:cp01aaaaaaaaaaaaaaaaaa";
const CP_OPTIONS = [
  PROPOSAL_SUBJECT_PURSUE_REF,
  PROPOSAL_SUBJECT_AMEND_REF,
  PROPOSAL_SUBJECT_REFUSE_REF,
];

function workBasis(overrides: Partial<DecisionBasis> = {}): DecisionBasis {
  return {
    sourceType: "work_recommendation",
    sourceRef: CP_OPTSET,
    sourceDigest: computeDecisionBasisSourceDigest({ a: 1 }),
    projectId: CP_PROJECT,
    proposalContext: { lpsId: "lps:1", lpsVersion: 1 },
    workRecommendationContext: {
      workRecommendationEpistemicItemId: CP_ACW,
      optionSetRef: CP_OPTSET,
      optionRefs: [...CP_OPTIONS],
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      recommendedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      optionSetDigest: "d".repeat(64),
    },
    executionBasis: {},
    ...overrides,
  };
}

function acwItem(
  id: string,
  related: string[] = [],
  overrides: Record<string, unknown> = {},
) {
  return {
    epistemicItemId: id,
    type: "Recommendation",
    status: "active",
    source: "active-cycle-work:nora",
    statement: "Travail ACW",
    createdAt: "2026-10-03T08:00:00.000Z",
    relatedObjects: [CP_PROJECT, CP_CYCLE, ...related],
    ...overrides,
  };
}

function carrierItem(acwId = CP_ACW) {
  return {
    epistemicItemId: "epi:optset-rec-cp01",
    type: "Recommendation",
    status: "active",
    source: CP_OPTSET,
    statement: "Travail ACW",
    createdAt: "2026-10-03T08:01:00.000Z",
    relatedObjects: [CP_PROJECT, CP_OPTSET, acwId, CP_CYCLE],
  };
}

function decisionRefFor(...related: string[]) {
  return {
    epistemicItemId: "epi:decref-cp01",
    type: "DecisionRef",
    status: "active",
    source: "dec:w2-wr:cp01",
    statement: "Décision",
    relatedObjects: [CP_PROJECT, "dec:w2-wr:cp01", ...related],
  };
}

describe("Correction Pass 01 — DecisionBasis / TDS tri-state / finalization / currentness", () => {
  it("CP01-T3 — validateDecisionBasis accepts a coherent work basis and refuses sourceRef/selection drift", () => {
    expect(validateDecisionBasis(workBasis())).toBeNull();
    expect(
      validateDecisionBasis(workBasis({ sourceRef: "optset:other" }))?.reason,
    ).toBe("work_recommendation_source_ref_mismatch");
    const ctx = workBasis().workRecommendationContext!;
    expect(
      validateDecisionBasis(
        workBasis({
          sourceRef: "prop:f2:1",
          workRecommendationContext: { ...ctx, optionSetRef: "prop:f2:1" },
        }),
      )?.reason,
    ).toBe("work_recommendation_source_ref_is_proposal_id");
    expect(
      validateDecisionBasis(
        workBasis({
          workRecommendationContext: { ...ctx, selectedOptionRef: "opt:nope" },
        }),
      )?.reason,
    ).toBe("work_recommendation_selected_option_not_presented");
  });

  it("CP01-T4 — work basis requires context and forbids trajectoryContext / candidateTrajectoryContext", () => {
    expect(
      validateDecisionBasis(workBasis({ workRecommendationContext: undefined }))
        ?.reason,
    ).toBe("work_recommendation_context_required");
    expect(
      validateDecisionBasis(
        workBasis({
          trajectoryContext: {
            trajectoryId: "trj:x",
            candidateVersion: 1,
            optionRefs: ["a"],
            selectedOptionRef: "a",
          },
        }),
      )?.reason,
    ).toBe("work_recommendation_forbids_trajectory_context");
    expect(
      validateDecisionBasis(
        workBasis({
          candidateTrajectoryContext: {} as never,
        }),
      )?.reason,
    ).toBe("work_recommendation_forbids_candidate_trajectory_context");
  });

  it("CP01-T5 — proposal / trajectory_option / candidate_trajectory forbid workRecommendationContext", () => {
    const ctx = workBasis().workRecommendationContext!;
    for (const sourceType of [
      "proposal",
      "trajectory_option",
      "candidate_trajectory",
    ] as const) {
      const violation = validateDecisionBasis({
        ...workBasis(),
        sourceType,
        workRecommendationContext: ctx,
      });
      expect(violation?.reason).toBe(`${sourceType}_forbids_work_recommendation_context`);
    }
    // A plain proposal basis is still valid.
    expect(
      validateDecisionBasis({
        ...workBasis(),
        sourceType: "proposal",
        sourceRef: "prop:f2:1",
        workRecommendationContext: undefined,
      }),
    ).toBeNull();
  });

  it("CP01-T6 — sourceDigest is deterministic and bound to the ACW identity", () => {
    const a = computeDecisionBasisSourceDigest({
      decisionSubjectMode: "work_recommendation",
      optionSetRef: CP_OPTSET,
      workRecommendationEpistemicItemId: CP_ACW,
    });
    expect(a).toBe(
      computeDecisionBasisSourceDigest({
        workRecommendationEpistemicItemId: CP_ACW,
        optionSetRef: CP_OPTSET,
        decisionSubjectMode: "work_recommendation",
      }),
    );
    expect(a).not.toBe(
      computeDecisionBasisSourceDigest({
        decisionSubjectMode: "work_recommendation",
        optionSetRef: CP_OPTSET,
        workRecommendationEpistemicItemId: "epi:acw:other",
      }),
    );
  });

  it("CP01-T7 — a work HD never cuts off PT Recommendation currentness", () => {
    const workHd = {
      decisionId: "dec:w2-wr:cp01",
      status: "accepted",
      effectiveAt: "2026-10-03T09:00:00.000Z",
      cycleInstanceId: CP_CYCLE,
      decisionBasis: workBasis(),
    } as never;
    expect(
      resolveTrajectoryRecommendationCutoffFromDecisions({
        decisions: [workHd],
        cycleInstanceId: CP_CYCLE,
        decidedByDecisionRef: null,
      }),
    ).toBeNull();
  });

  it("CP01-T8 — Blocker 2: TRAJECTORY_NOT_FOUND = no current PT (undecided, may expose)", async () => {
    const oa = {
      cycleServices: {
        getCurrentTrajectory: {
          execute: async () => ({
            ok: false,
            error: { detailCode: "TRAJECTORY_NOT_FOUND" },
          }),
        },
      },
    } as never;
    expect(
      await readCurrentTrajectoryDecidedByRef({ oa, projectId: CP_PROJECT }),
    ).toEqual({
      kind: "ok",
      hasCurrentTrajectory: false,
      decidedByDecisionRef: null,
    });
  });

  it("CP01-T9 — Blocker 2: other failure / thrown error → unavailable; decided ref is surfaced", async () => {
    const mk = (execute: () => Promise<unknown>) =>
      ({ cycleServices: { getCurrentTrajectory: { execute } } }) as never;
    expect(
      await readCurrentTrajectoryDecidedByRef({
        oa: mk(async () => ({ ok: false, error: { detailCode: "PERSISTENCE_FAILURE" } })),
        projectId: CP_PROJECT,
      }),
    ).toEqual({ kind: "unavailable" });
    expect(
      await readCurrentTrajectoryDecidedByRef({
        oa: mk(async () => {
          throw new Error("boom");
        }),
        projectId: CP_PROJECT,
      }),
    ).toEqual({ kind: "unavailable" });
    expect(
      await readCurrentTrajectoryDecidedByRef({
        oa: mk(async () => ({
          ok: true,
          trajectory: { decidedByDecisionRef: " dec:pt:1 " },
        })),
        projectId: CP_PROJECT,
      }),
    ).toEqual({
      kind: "ok",
      hasCurrentTrajectory: true,
      decidedByDecisionRef: "dec:pt:1",
    });
  });

  it("CP01-T11 — Journal tri-state: ACW+opt:trajectory is PT fuel (PRESENT) / fail-closed (UNAVAILABLE) / Work (NONE)", () => {
    const items = [acwItem("epi:acw:ptfuel", ["opt:trajectory:governed"])];
    const run = (state: "PRESENT" | "NONE" | "UNAVAILABLE") =>
      projectCycleWorkRecommendations({
        items,
        cycleInstanceId: CP_CYCLE,
        fallbackCycleInstanceId: CP_CYCLE,
        trajectoryDecisionSupportState: state,
      });
    expect(run("PRESENT")).toHaveLength(0);
    expect(run("UNAVAILABLE")).toHaveLength(0);
    expect(run("NONE")).toHaveLength(1);
  });

  it("CP01-T12 — Journal tri-state: plain ACW without opt:trajectory stays Work in every state", () => {
    for (const state of ["PRESENT", "NONE", "UNAVAILABLE"] as const) {
      expect(
        projectCycleWorkRecommendations({
          items: [acwItem("epi:acw:plain")],
          cycleInstanceId: CP_CYCLE,
          fallbackCycleInstanceId: CP_CYCLE,
          trajectoryDecisionSupportState: state,
        }),
      ).toHaveLength(1);
    }
  });

  it("CP01-T13 — chat-first candidate selection: UNAVAILABLE keeps plain ACW, drops opt:trajectory ACW", () => {
    const items = [
      acwItem("epi:acw:plain"),
      acwItem("epi:acw:ptfuel", ["opt:trajectory:bounded"]),
    ] as never;
    expect(
      selectActiveWorkRecommendationCandidates({
        items,
        cycleInstanceId: CP_CYCLE,
        trajectoryDecisionSupportState: "UNAVAILABLE",
      }).acwIds,
    ).toEqual(["epi:acw:plain"]);
    expect(
      selectActiveWorkRecommendationCandidates({
        items,
        cycleInstanceId: CP_CYCLE,
        trajectoryDecisionSupportState: "NONE",
      }).acwIds.slice().sort(),
    ).toEqual(["epi:acw:plain", "epi:acw:ptfuel"]);
  });

  it("CP01-T15 — finalization: unbound ACW = 1 blocker; seal dedupes to 1 (ACW identity); disposed = 0", () => {
    const unbound = deriveUndisposedRecommendations([acwItem(CP_ACW)], CP_CYCLE, {
      trajectoryDecisionSupportState: "NONE",
    });
    expect(unbound).toHaveLength(1);
    expect(unbound[0]!.workRecommendationEpistemicItemId).toBe(CP_ACW);

    const sealed = deriveUndisposedRecommendations(
      [acwItem(CP_ACW), carrierItem()],
      CP_CYCLE,
      { trajectoryDecisionSupportState: "NONE" },
    );
    expect(sealed).toHaveLength(1);
    expect(sealed[0]!.workRecommendationEpistemicItemId).toBe(CP_ACW);
    expect(sealed[0]!.optionSetRef).toBe(CP_OPTSET);

    // Disposed by optset ref, by ACW id alone, and by status.
    for (const decisionRef of [
      decisionRefFor(CP_OPTSET, CP_ACW),
      decisionRefFor(CP_ACW),
    ]) {
      expect(
        deriveUndisposedRecommendations(
          [acwItem(CP_ACW), carrierItem(), decisionRef],
          CP_CYCLE,
          { trajectoryDecisionSupportState: "NONE" },
        ),
      ).toHaveLength(0);
    }
    expect(
      deriveUndisposedRecommendations(
        [
          acwItem(CP_ACW, [], { status: "resolved" }),
          { ...carrierItem(), status: "resolved" },
        ],
        CP_CYCLE,
        { trajectoryDecisionSupportState: "NONE" },
      ),
    ).toHaveLength(0);
  });

  it("CP01-T16 — finalization tri-state: Lifecycle never; PT fuel never when PRESENT; UNAVAILABLE fail-closed; NONE blocks", () => {
    const lifecycle = {
      epistemicItemId: "epi:lr-next",
      type: "Recommendation",
      status: "active",
      source: "lifecycle-recommendation:nora",
      statement: "NEXT_CYCLE",
      lifecycleRecommendation: { intent: "NEXT_CYCLE", basisFingerprint: "fp" },
      relatedObjects: [CP_PROJECT, CP_CYCLE],
    };
    const ptFuel = acwItem("epi:acw:ptfuel", ["opt:trajectory:governed"]);
    const plain = acwItem("epi:acw:plain");
    const count = (
      items: unknown[],
      state: "PRESENT" | "NONE" | "UNAVAILABLE",
    ) =>
      deriveUndisposedRecommendations(items as never, CP_CYCLE, {
        trajectoryDecisionSupportState: state,
      }).length;

    for (const state of ["PRESENT", "NONE", "UNAVAILABLE"] as const) {
      expect(count([lifecycle], state)).toBe(0);
      expect(count([plain], state)).toBe(1);
    }
    expect(count([ptFuel], "PRESENT")).toBe(0);
    expect(count([ptFuel], "UNAVAILABLE")).toBe(0);
    expect(count([ptFuel], "NONE")).toBe(1);
    // Omitted state = UNAVAILABLE (fail-closed default).
    expect(
      deriveUndisposedRecommendations([ptFuel] as never, CP_CYCLE),
    ).toHaveLength(0);
  });

  it("CP01-T17 — Blocker 4: shared PT cutoff feeds decidedByDecisionRef; unreadable trajectory fails closed", async () => {
    const candidateHd = {
      decisionId: "dec:gf-trj:cp01",
      status: "accepted",
      effectiveAt: "2026-10-02T20:25:44.944Z",
      decisionBasis: {
        sourceType: "candidate_trajectory",
        sourceRef: "trj:x",
        sourceDigest: "d",
        projectId: CP_PROJECT,
      },
    };
    const ports = (traj: () => Promise<unknown>) =>
      ({
        decisionServices: { decisions: { listByProject: async () => [candidateHd] } },
        cycleServices: { getCurrentTrajectory: { execute: traj } },
      }) as never;

    const ok = await resolveProjectTrajectoryRecommendationCutoff({
      oa: ports(async () => ({
        ok: true,
        trajectory: { decidedByDecisionRef: "dec:gf-trj:cp01" },
      })),
      projectId: CP_PROJECT,
      cycleInstanceId: CP_CYCLE,
    });
    expect(ok).toEqual({ ok: true, cutoff: "2026-10-02T20:25:44.944Z" });

    const bad = await resolveProjectTrajectoryRecommendationCutoff({
      oa: ports(async () => ({ ok: false, error: { detailCode: "PERSISTENCE_FAILURE" } })),
      projectId: CP_PROJECT,
      cycleInstanceId: CP_CYCLE,
    });
    expect(bad).toEqual({ ok: false, reason: "trajectory_unreadable" });

    const none = await resolveProjectTrajectoryRecommendationCutoff({
      oa: ports(async () => ({ ok: false, error: { detailCode: "TRAJECTORY_NOT_FOUND" } })),
      projectId: CP_PROJECT,
      cycleInstanceId: CP_CYCLE,
    });
    expect(none).toEqual({ ok: true, cutoff: null });
  });

  it("CP01-T18 — source guards: no silent TDS catch in actions.ts; cutoff only computed via shared helper", () => {
    const root = path.resolve(__dirname, "../../features/project-assistant");
    const actions = fs.readFileSync(path.join(root, "actions.ts"), "utf8");
    expect(actions).not.toMatch(/trajectoryDecisionSupportOpen/);
    expect(actions).not.toMatch(/catch\s*\{\s*trajectoryDecisionSupport\w*\s*=\s*false/);

    const callers = [
      "f2/studioCognitiveContext.ts",
      "w2/resolveCurrentNoraTrajectoryRecommendation.ts",
    ];
    for (const rel of callers) {
      const src = fs.readFileSync(path.join(root, rel), "utf8");
      expect(src).toMatch(/resolveProjectTrajectoryRecommendationCutoff\(/);
      expect(src).not.toMatch(/resolveTrajectoryRecommendationCutoffFromDecisions\(\{/);
    }
  });
});

```

### `projects/sfia-studio/app/features/project-assistant/w2/activeWorkRecommendationDecisionSubject.ts`

```typescript
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
  hasTrajectoryOptionRef,
  isAcwExcludedFromWorkByTrajectoryState,
  isActiveCycleWorkRecommendationItem,
  workRecommendationBelongsToCycle,
  type EpistemicItem,
  type TrajectoryDecisionSupportState,
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

async function resolveTrajectoryDecisionSupportState(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly cycleInstanceId: string;
}): Promise<TrajectoryDecisionSupportState> {
  const { resolveTrajectoryDecisionSupportProjection } = await import(
    "./resolveTrajectoryDecisionSupportProjection"
  );
  try {
    const tds = await resolveTrajectoryDecisionSupportProjection({
      oa: input.oa,
      projectId: input.projectId,
      cycleInstanceId: input.cycleInstanceId,
    });
    return tds.state;
  } catch {
    return "UNAVAILABLE";
  }
}

/**
 * Pure-ish candidate selection (exported for tests).
 */
export function selectActiveWorkRecommendationCandidates(input: {
  readonly items: ReadonlyArray<EpistemicItem>;
  readonly cycleInstanceId: string;
  /** Explicit tri-state — NONE and UNAVAILABLE are never collapsed. */
  readonly trajectoryDecisionSupportState: TrajectoryDecisionSupportState;
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
    // PRESENT → PT fuel; UNAVAILABLE → fail-closed; both excluded from Work.
    if (
      isAcwExcludedFromWorkByTrajectoryState(item, {
        trajectoryDecisionSupportState: input.trajectoryDecisionSupportState,
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

  // MD-WR-07 — make finalization blockers use the same TDS tri-state.
  try {
    const { bindPilotLifecycleTrajectoryDecisionSupport } = await import(
      "./resolveTrajectoryDecisionSupportProjection"
    );
    bindPilotLifecycleTrajectoryDecisionSupport(input.oa);
  } catch {
    /* binding is best-effort; unbound finalization stays fail-closed */
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
      hasTrajectoryOptionRef(i),
  );
  const tdsState: TrajectoryDecisionSupportState = needsTds
    ? await resolveTrajectoryDecisionSupportState({
        oa: input.oa,
        projectId: input.projectId,
        cycleInstanceId,
      })
    : "NONE";

  const candidates = selectActiveWorkRecommendationCandidates({
    items,
    cycleInstanceId,
    trajectoryDecisionSupportState: tdsState,
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


## 15. Test matrix CP01-T1…T18

| ID | Intent | Result |
|----|--------|--------|
| CP01-T1 | Work accept → sourceType work_recommendation + context | PASS |
| CP01-T2 | refuse/amend honest work basis | PASS |
| CP01-T3-defer | defer HD never Proposal basis; Reservation; ZERO Proposal | PASS |
| CP01-T3 (validate) | validateDecisionBasis coherent / drift refuse | PASS |
| CP01-T4 | work basis requires context; forbids traj contexts | PASS |
| CP01-T5 | proposal/trajectory_option/candidate forbid work context | PASS |
| CP01-T6 | sourceDigest deterministic + ACW-bound | PASS |
| CP01-T7 | work HD never cuts PT currentness | PASS |
| CP01-T8 | TRAJECTORY_NOT_FOUND = undecided (may expose) | PASS |
| CP01-T9 | other failure/throw → unavailable | PASS |
| CP01-T10 | TDS projection UNAVAILABLE on read failure | PASS |
| CP01-T11 | Journal tri-state PT-fuel vs Work | PASS |
| CP01-T12 | plain ACW Work in every TDS state | PASS |
| CP01-T13 | chat-first selection UNAVAILABLE fail-closed | PASS |
| CP01-T14 | unbound blocks assess; disposed clears | PASS |
| CP01-T15 | seal dedupe 1; disposed 0 | PASS |
| CP01-T16 | Lifecycle/PT PRESENT/UNAVAILABLE/NONE finalization | PASS |
| CP01-T17 | shared cutoff + decidedByDecisionRef; unreadable fail-closed | PASS |
| CP01-T18 | source guards (no silent catch; shared helper only) | PASS |
| Continuity T1–T18 suite (prior Pass 02) | regression | PASS (37 tests in continuity file) |

User-matrix mapping notes:
- User T4 Proposal regression / T5 PT regression covered by CP01-T5 + existing candidateTrajectory / proposal suites
- User T6/T7 trajectory read failure vs absent → CP01-T8/T9/T10
- User T8/T9 Journal UNAVAILABLE/NONE → CP01-T11/T12
- User T10 currentness consistency → CP01-T17
- User T11–T15 finalization / Lifecycle / PT replan → CP01-T14/T15/T16
- User T16 UNKNOWN fail-closed → CP01-T11/T13/T16
- User T17 duplicate authority → CP01-T15
- User T18 full chat-first E2E → continuity T1–T18 + CP01-T1

## 16. Regressions
- ACW / HabitFlow continuity: PASS (17)
- chat-first frontDoor: PASS (11)
- Journal/UI chatFirstGovernedDecisionLoop: PASS (10)
- semantic continuity + CORR-01: PASS
- candidate trajectory HD: PASS (24)
- undisposedRecommendations: PASS (8)
- deriveWorkRecommendations: PASS (2)
- importBoundaries: PASS (5)
- PRR conformance: PASS (5) after mechanical digest sync

## 17. Full validations
| Gate | Result |
|------|--------|
| Targeted CP01 + continuity + related | PASS 98 + 41 |
| Full Vitest | **PASS** 5134 passed / 137 skipped / 460 files / 17 skipped files |
| typecheck (`tsc --noEmit`) | PASS |
| lint (`next lint`) | PASS (0 warnings/errors) |
| build (`next build`) | PASS |
| `git diff --check` | PASS |

## 18. PRR manifest mechanical-only proof
- Script: `node scripts/check-production-runtime-reference.mjs --write-digests`
- Only `sha256_16` of trackedSources that are tracked AND modified:
  - `actions.ts`: `9da1c52195e39dc1` → `8839aac183e38265`
  - `f2/orchestrateF2.ts`: `a398bf461383386f` → `d834bbcdebf549c8`
- No trackedSources added/removed
- No PRR volume content changes
- No status/runtime claim changes
- Conformance check: **OK**

## 19. Fake / Real
- All proofs: **FAKE / deterministic fixtures & harness**
- ZERO REAL Nora / OpenAI / DB write / HD / EC / Attempt / execution
- HabitFlow Replay 02: READ-ONLY historical only

## 20. Reserves
- Defer HD intentionally omits DecisionBasis (honest absence). If future policy requires a basis on defer, it must be `work_recommendation` (oracle locked).
- `pilotLifecycle` TDS resolver is late-bound (import boundary). Finalization entry points that never bind the resolver default to UNAVAILABLE (fail-closed for opt:trajectory ACW; plain ACW still blocks).
- Runtime v3 still NON ADOPTED.
- REAL boundary / HabitFlow live disposition not claimed.

## 21. Debt / exit
- No modeled schema HumanDecision change (domain types only).
- No new persistence table.
- Integration / commit / push / PR: **blocked pending ChatGPT Critical Review + Morris GO**.

## 22. HabitFlow REAL effects
**ZERO** — no instance writes this pass.

## 23. Project Git effects
- Local Product modifications: YES
- Commit / Push / PR / Merge / Branch delete / Force push: **NO**
- Staging final: NO
- Candidate left uncommitted after validations

## 24. Claim ceiling
**DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE**

FORBIDDEN claims not asserted:
- REAL BOUNDARY PROVEN
- READY FOR REAL
- PRODUCT GLOBAL READY
- runtime v3 ADOPTED

## 25. Verdict
**CORRECTION PASS 01 COMPLETE — READY FOR CHATGPT CRITICAL REVIEW**

Not READY FOR COMMIT / PUSH / PR.

ChatGPT must re-read the remote canonical handoff before any integration GO.
No project commit/push/PR without a new Morris GO.
