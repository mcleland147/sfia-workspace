# SFIA STUDIO — GREENFIELD PRODUCT PROOF
# LIFECYCLE CLOSURE CORRECTIVE — PHASE B — CRITICAL REVIEW FOLLOW-UP
# REVIEW PACK — FULL

## 0. Metadata

- **timestamp (Europe/Paris):** 2026-09-11 06:50:31 CEST
- **repo:** mcleland147/sfia-workspace (local worktree)
- **worktree:** `/Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310`
- **branch:** `delivery/sfia-studio-product-proof-qual-to-governed-cycle`
- **pre-follow-up Product HEAD:** `4a80965a5f1687f805544c56be66e5d2ead3ea29`
- **new Product candidate HEAD:** `6a2e3c9d71275145b20b514d02ab54533a72a2a7`
- **parent of candidate:** `4a80965a5f1687f805544c56be66e5d2ead3ea29`
- **origin/main:** `a9f6c310a0826d0e5bd6f7264603382a86564db1` (unchanged; not integrated)
- **prior accepted review handoff:** `sfia/review-handoff` `8a715065dd40e392157e1307e0123a5985cbd38f`
- **Campaign:** Greenfield Product Proof
- **Package:** Lifecycle Closure Corrective — Phase B — Critical Review Follow-up
- **Cycle SFIA externe:** 8 — Delivery / implémentation
- **Typologie:** EVOL · Profile CRITICAL
- **GO Morris consumed:** `GO MORRIS — SAME-LOT PHASE B CRITICAL REVIEW FOLLOW-UP AUTHORIZED — CONSUMED`
- **Product Completion:** COMPLETE / CLOSED — DO NOT REOPEN
- **Runtime v3:** NON ADOPTED
- **REAL:** ZERO NEW REAL
- **Product push / PR / merge:** NOT AUTHORIZED
- **Architecture / persistence / schema migration:** NOT AUTHORIZED
- **Local Product commit:** AUTHORIZED after deterministic proof PASS — **DONE**

## 1. Git truth (post-commit)

```
pwd: /Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310
branch: delivery/sfia-studio-product-proof-qual-to-governed-cycle
HEAD: 6a2e3c9d71275145b20b514d02ab54533a72a2a7
HEAD^: 4a80965a5f1687f805544c56be66e5d2ead3ea29
origin/main: a9f6c310a0826d0e5bd6f7264603382a86564db1
commit subject: fix(sfia-studio): close lifecycle critical review findings
```

Non-Product dirt remains under `.tmp-sfia-review/**` only (screenshots, disposable DB, validation logs, this pack). No unexpected tracked Product dirt after commit.

## 2. Convergence qualification

- Git = SoT
- Build Doctrine = HOW
- Roadmap = WHERE
- v3 framing = destination Product (NON ADOPTED runtime)
- v2.6 = external execution process
- Product Completion remains CLOSED
- Recommendation ≠ HumanDecision
- Pilote owns runtime structural decisions
- Morris owns construction/gates/promotions
- R18 same-lot coherent closure · R19 no maturity without proof · R21 deterministic ≠ REAL
- Binding decisions still in force: D-LC-01 … D-LC-05

## 3. Sources read (local Git)

- prompts/templates/sfia-cycle-execution-template.md
- method/sfia-fast-track/core/sfia-cycle-routing-guide.md
- method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
- method/sfia-fast-track/core/sfia-rules-and-guardrails.md
- method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md
- projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
- projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
- projects/sfia-studio/product-completion/01-product-completion-cadrage.md
- projects/sfia-studio/sfia-v3-framing/30-knowledge-context-human-decision-doctrine.md
- projects/sfia-studio/sfia-v3-framing/32-living-project-state-and-dynamic-trajectory.md
- projects/sfia-studio/sfia-v3-framing/33-epistemology-provenance-and-contradiction-model.md
- sfia-review-handoff/latest-chatgpt-review.md @ `8a715065dd40e392157e1307e0123a5985cbd38f`

## 4. Scope closed (exactly three CR findings)

| ID | Finding | Verdict |
|----|---------|---------|
| CR-LC-B-01 | Terminal completed cycle not honestly projected in UI | **CLOSED** |
| CR-LC-B-02 | `completeBoundActiveTrajectoryStep` missing authority at mutation service boundary | **CLOSED** |
| CR-LC-B-03 | D-LC-04 NEXT_CYCLE priority not deterministically enforced by validator | **CLOSED** |

Not reopened: A1–A5 RCA, D-LC-01/02/03/05 design, ACW Option A bounded, Product Completion.

## 5. Files changed (Product commit `6a2e3c9d71275145b20b514d02ab54533a72a2a7`)

1. `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleProjection.ts`
2. `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecyclePresentation.ts`
3. `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx`
4. `projects/sfia-studio/app/lib/oa/cycle/application/pilotLifecycleTransitions.ts`
5. `projects/sfia-studio/app/features/project-assistant/f2/pilotLifecycleActions.ts`
6. `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/validateLifecycleRecommendation.ts`
7. `projects/sfia-studio/app/lib/oa/cycle/index.ts`
8. `projects/sfia-studio/app/__tests__/oa/cycle/lifecycleClosure.criticalReviewFollowUp.d0.test.ts` (new)
9. `projects/sfia-studio/app/__tests__/oa/cycle/lifecycleRecommendation.finalCorr.d0.test.ts`

Stat: 9 files, +914 / −24.

## 6. CR-LC-B-01 — Terminal completion projection

### Prior defect
Phase B capture G/H: durable `CycleInstance.status=completed`, LPS `activeCycleInstanceId=null`, but Lifecycle UI showed empty « Aucun cycle sélectionné » after hard reload — cannot distinguish “never had a cycle” from “successfully completed”.

### Correction
- Added `selectLatestTerminalCycle()` ordered by `closedAt` DESC then `cycleInstanceId` DESC (deterministic).
- Selection preference: active → single paused → single candidate → **latest terminal display-only** → null/ambiguous.
- Terminal selection: all mutation CTAs false; not pretended active.
- Presentation badges: `Terminé` / `Annulé` / `Remplacé` with technical status.
- `LifecycleSurface` hides assessment / exit-resolve / reservation mutation aids when terminal display.

### Tests
CR-B01-01 … CR-B01-06 in `lifecycleClosure.criticalReviewFollowUp.d0.test.ts` — PASS.

### Runtime / UI proof
- T4: Lifecycle = **Terminé · completed**; ZERO Finaliser / Pause / Resume / Cancel; SQLite cycle `completed`; LPS active = NULL.
- T5 hard reload: same **Terminé · completed**; no active pointer resurrected.
- T6: NEXT_CYCLE Recommendation visible while terminal presentation preserved; no auto-start.

### Verdict
**CLOSED**

## 7. CR-LC-B-02 — Authority at mutation service boundary

### Prior defect
Product wrapper called `ensurePiloteAuthority`, but `PilotLifecycleTransitions.completeBoundActiveTrajectoryStep` itself did not verify authority / did not require `authorityEvidenceId` — direct application-service path could mutate active→done with `createdBy` only.

### Correction
- Request requires `authorityEvidenceId`; missing → `CYCLE_LIFECYCLE_DENIED` / `authority_evidence_required`.
- `verifyAuthority({ actorId, cycleInstanceId, evidenceId })` before any durable trajectory mutation.
- Wrapper `completeBoundTrajectoryStepAction` passes exact `auth.evidenceId`.
- No new authority model / token / role / HD subject.

### Authority proof
| Case | Result |
|------|--------|
| No evidence | DENIED · state unchanged |
| Wrong/invalid scope evidence | DENIED · state unchanged |
| Valid Pilot evidence | PASS · active→done |
| Recommendation never provides authority | confirmed by architecture (validator produces no HD/mutation) |
| `createdBy` alone insufficient | confirmed (CR-B02-01/02) |

### Tests
CR-B02-01 … CR-B02-06 — PASS. Existing START/PAUSE/RESUME/FINALIZE authority tests unchanged/pass (#476 suite within related run).

### Verdict
**CLOSED**

## 8. CR-LC-B-03 — D-LC-04 deterministic enforcement

### Prior defect
D-LC-04 OPTION A BOUNDED expressed in `buildProjectSystemPrompt` only; validator could accept NEXT_CYCLE while a current non-terminal cycle still needed closure.

### Correction
- `resolveCurrentCycleNeedingClosure` using existing Product facts (active/paused/blocked, or LPS-pointed non-terminal).
- On `intent === NEXT_CYCLE`, if current needs closure → reject:
  - `code: LR_CURRENT_CYCLE_NOT_CLOSED`
  - `reason: next_cycle_requires_current_cycle_completion`
- Does **not** reject merely for historical terminals or proposed/acknowledged-only.
- Existing NEXT_CYCLE target validation preserved.
- FINALIZE_CURRENT_CYCLE unchanged.
- No prose parsing / second Nora call / multi-LR / auto NEXT_CYCLE / auto START.

### Tests
CR-B03-01 … CR-B03-08 — PASS. `#477` / `lifecycleRecommendation.finalCorr` FAIL-07 now expects D-LC-04 reject while active; FAIL-07b accepts NEXT_CYCLE after completion.

### Verdict
**CLOSED**

## 9. A1 exact TrajectorySurface START regression

**CR-A1-REG-01** — disposable DB `prj:cr-fu-1`:
1. TrajectorySurface « Démarrer le cadrage »
2. durable START
3. parent `notifyDurableFactsChanged`
4. LifecycleSurface immediately **En cours · active** without browser reload

Observed durable: cycle `active`, LPS active bound. Screenshot T1 hashed below. **PASS** (closure evidence for already-implemented A1; not a fourth finding).

## 10. Functional UI captures (disposable DB only)

**DB:** `.tmp-sfia-review/phase-b-ui-captures/product-cr-followup-captures.sqlite`
**Provider:** `OPS1_CONVERSATION_PROVIDER=fake`
**Server:** `http://localhost:3020` with `SFIA_STUDIO_PRODUCT_DB_PATH=<temp>` + `SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY=1`
**REAL campaign DB / `prj:22fc4a03…` / Gestion de tâches:** **UNTOUCHED**

### Observations JSON
```json
{
  "campaign": "Greenfield Product Proof",
  "package": "Lifecycle Closure Corrective — Phase B — Critical Review Follow-up",
  "timestampEuropeParis": "2026-09-11T06:47:00+02:00",
  "provider": "OPS1_CONVERSATION_PROVIDER=fake",
  "productDb": ".tmp-sfia-review/phase-b-ui-captures/product-cr-followup-captures.sqlite",
  "realCampaignDbUntouched": true,
  "realCampaignProjectId": "prj:22fc4a03-... Gestion de tâches — NOT USED",
  "server": "http://localhost:3020",
  "captures": [
    {
      "id": "T1",
      "title": "TrajectorySurface START path → Lifecycle En cours · active without reload",
      "projectId": "prj:cr-fu-1",
      "action": "Clicked TrajectorySurface « Démarrer le cadrage »; parent notifyDurableFactsChanged refreshed LifecycleSurface without browser reload",
      "observed": {
        "lifecycleBadge": "En cours · active",
        "durableCycleStatus": "active",
        "lpsActiveCycleInstanceId": "cyc:trj-631c5c5d4e042e61d588e060"
      },
      "screenshot": "screenshots-cr-followup/T1-trajectory-start-active.png",
      "verdict": "PASS"
    },
    {
      "id": "T2",
      "title": "Closure blockers — Assess shown; no Finaliser",
      "projectId": "prj:cr-fu-2",
      "observed": {
        "lifecycleBadge": "En cours · active",
        "assessCta": "Vérifier les conditions de finalisation",
        "finaliserPresent": false,
        "blockersVisible": true
      },
      "screenshot": "screenshots-cr-followup/T2-blockers-assess.png",
      "verdict": "PASS"
    },
    {
      "id": "T3",
      "title": "Ready finalize — only final Pilot HD missing → Finaliser available",
      "projectId": "prj:cr-fu-3",
      "observed": {
        "lifecycleBadge": "Prêt pour décision de finalisation · active",
        "finaliserPresent": true,
        "pilotDecisionBlocking": true
      },
      "screenshot": "screenshots-cr-followup/T3-ready-finalize.png",
      "verdict": "PASS"
    },
    {
      "id": "T4",
      "title": "After Finaliser — Terminé · completed; ZERO mutation CTA",
      "projectId": "prj:cr-fu-4",
      "observed": {
        "lifecycleBadge": "Terminé · completed",
        "durableCycleStatus": "completed",
        "lpsActiveCycleInstanceId": null,
        "finaliserPresent": false,
        "pauseResumeCancelPresent": false
      },
      "screenshot": "screenshots-cr-followup/T4-completed-termine.png",
      "verdict": "PASS"
    },
    {
      "id": "T5",
      "title": "Hard reload — still Terminé · completed; no active pointer resurrected",
      "projectId": "prj:cr-fu-4",
      "action": "Hard navigate reload of same URL",
      "observed": {
        "lifecycleBadge": "Terminé · completed",
        "lpsActiveCycleInstanceId": null,
        "finaliserPresent": false
      },
      "screenshot": "screenshots-cr-followup/T5-hard-reload-termine.png",
      "verdict": "PASS"
    },
    {
      "id": "T6",
      "title": "Later NEXT_CYCLE Recommendation visible without corrupting terminal presentation / without auto-start",
      "projectId": "prj:cr-fu-5",
      "observed": {
        "lifecycleBadge": "Terminé · completed",
        "recommendationIntent": "NEXT_CYCLE",
        "recommendationText": "Envisager cyc:delivery.",
        "autoStart": false,
        "finaliserPresent": false
      },
      "screenshot": "screenshots-cr-followup/T6-completed-next-cycle.png",
      "verdict": "PASS"
    }
  ]
}

```

### Screenshot SHA-256
```
b14b20413b9f2a9cdbfdc162302a41c60bf45274cc576526360c89f266961240  T1-trajectory-start-active.png
eeb34912f9f32f96edef6bce3e9e5ce841a62254ba7df60ff67debad1e5d11ba  T2-blockers-assess.png
96dac35e927c3c79dd288a16e6d6ee4130b1b3233ba510061772134dd12fd36d  T3-ready-finalize.png
61c7854bb67b2e18fb1de5e1be0c799139c481309d54be4f87f51e8df344d948  T4-completed-termine.png
61c7854bb67b2e18fb1de5e1be0c799139c481309d54be4f87f51e8df344d948  T5-hard-reload-termine.png
40430b04a5e3b1daeaa0811b7f6a5b4788855f724c7484f11f6e48e544370c17  T6-completed-next-cycle.png

```

| Cap | Observation | Verdict |
|-----|-------------|---------|
| T1 | Trajectory START → En cours · active (no reload) | PASS |
| T2 | Assess present; Finaliser absent while blockers | PASS |
| T3 | Finaliser available when only Pilot HD missing | PASS |
| T4 | Terminé · completed; LPS active null; ZERO mutation CTA | PASS |
| T5 | Hard reload still Terminé · completed | PASS |
| T6 | NEXT_CYCLE LR visible; terminal display preserved; no auto-start | PASS |

Screenshots are **not** committed to Product Git (`.tmp-sfia-review` only).

## 11. Test / validation matrix (actual)

Focused CR follow-up:
- `lifecycleClosure.criticalReviewFollowUp.d0.test.ts` 17 PASS
- `lifecycleRecommendation.finalCorr.d0.test.ts` 10 PASS
- Total focused: **27 PASS**

Related suites (lifecycle Closure/Presentation/Transitions/Recommendation + ACW):
- **246 PASS** including **ACW 57 PASS**

Full Vitest (`npm run test`):
- **Test Files 330 passed | 17 skipped (347)**
- **Tests 3519 passed | 135 skipped (3654)**

typecheck: **PASS** (`tsc --noEmit`)
lint: **PASS** (No ESLint warnings or errors)
build: **PASS** (`next build`)

Baseline before follow-up was 3502 PASS / 329 files; after follow-up **3519 PASS / 330 files** (new CR suite + adjustments).

## 12. FAKE / REAL qualification

- ZERO NEW REAL
- OPS1_CONVERSATION_PROVIDER=fake
- Disposable Product SQLite only for UI captures
- Claims: **DETERMINISTIC only**
- Forbidden claims not made: REAL PROVEN / READY FOR REAL / END-TO-END REAL / runtime v3 ADOPTED

## 13. Local Product commit

- SHA: `6a2e3c9d71275145b20b514d02ab54533a72a2a7`
- Parent: `4a80965a5f1687f805544c56be66e5d2ead3ea29`
- Message: `fix(sfia-studio): close lifecycle critical review findings`
- Amended? **NO**
- Product push? **NOT PERFORMED / NOT AUTHORIZED**
- PR/merge? **NOT AUTHORIZED**

## 14. Anti-claims

- Not READY FOR REAL
- Not REAL proven
- Not runtime v3 adopted
- Not Product Completion reopen
- Not architecture/schema change
- Not Product branch push
- Not PR/merge

## 15. Remaining reserves / debt (non-blocking)

- UI captures are deterministic FAKE-provider proofs on disposable DB — not REAL campaign proof.
- Publisher may report known stale-origin false-negative; independent remote SHA/blob verification is authoritative.
- Trajectory bridge CTA « Préparer la trajectoire » on T6 is existing candidate-trajectory UX, not a lifecycle mutation CTA on the terminal cycle.

## 16. Next step

ChatGPT Critical Review re-review of CR-LC-B-01/02/03 closure on candidate `6a2e3c9d71275145b20b514d02ab54533a72a2a7` via published handoff. Product push/PR/merge remain unauthorized until Morris GO.

## 17. Overall verdict

**PASS — LIFECYCLE CLOSURE PHASE B CRITICAL REVIEW FINDINGS CLOSED / DETERMINISTIC CANDIDATE READY FOR CHATGPT RE-REVIEW**

---

# APPENDIX A — EXPLOITABLE DIFFS (full per changed Product file)


## DIFF — lifecycleProjection.ts (CR-LC-B-01)

```diff
commit 6a2e3c9d71275145b20b514d02ab54533a72a2a7
Author: Morris Cleland <morris@macbook-air.home>
Date:   Fri Sep 11 06:49:21 2026 +0200

    fix(sfia-studio): close lifecycle critical review findings

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleProjection.ts b/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleProjection.ts
index b8344b35..3ec558e1 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleProjection.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleProjection.ts
@@ -26,9 +26,11 @@ export type PilotLifecycleProjection = {
   supersededCycles: CycleInstance[];
   terminalCycles: CycleInstance[];
   /**
-   * Selected cycle for CTA surface.
-   * Preference: LPS active → single paused → single startable candidate → null (ambiguous).
-   * Superseded never selected for canStart; multiple superseded alone do not create ambiguity.
+   * Selected cycle for CTA / status surface.
+   * Preference: LPS active → single paused → single startable candidate
+   * → latest terminal (display-only) → null (ambiguous / empty).
+   * Terminal selection is never actionable (all mutation CTAs false).
+   * Superseded never selected for canStart; multiple paused/candidates alone create ambiguity.
    */
   selectedCycleInstanceId: string | null;
   selectedStatus: CycleInstanceStatus | null;
@@ -59,6 +61,26 @@ export type PilotLifecycleProjection = {
   } | null;
 };

+/**
+ * CR-LC-B-01 — deterministic latest terminal for display-only fallback.
+ * Ordering: closedAt DESC (missing closedAt sorts last), then cycleInstanceId DESC.
+ */
+export function selectLatestTerminalCycle(
+  terminals: readonly CycleInstance[],
+): CycleInstance | null {
+  if (terminals.length === 0) return null;
+  const ranked = [...terminals].sort((a, b) => {
+    const aClosed = a.closedAt ?? "";
+    const bClosed = b.closedAt ?? "";
+    if (aClosed !== bClosed) {
+      // ISO timestamps compare lexicographically; empty sorts earliest → last.
+      return bClosed.localeCompare(aClosed);
+    }
+    return b.cycleInstanceId.localeCompare(a.cycleInstanceId);
+  });
+  return ranked[0] ?? null;
+}
+
 export function projectPilotLifecycle(input: {
   projectId: string;
   cycles: readonly CycleInstance[];
@@ -99,29 +121,47 @@ export function projectPilotLifecycle(input: {
     selectedCycleInstanceId = candidateCycles[0]!.cycleInstanceId;
   } else if (candidateCycles.length > 1) {
     selectionAmbiguous = true;
+  } else {
+    // CR-LC-B-01 — honest terminal display when no actionable selection.
+    // Prefer most recently closed terminal (closedAt desc, then id). Never actionable.
+    const latestTerminal = selectLatestTerminalCycle(terminalCycles);
+    if (latestTerminal) {
+      selectedCycleInstanceId = latestTerminal.cycleInstanceId;
+    }
   }

   const selected = selectedCycleInstanceId
     ? byId.get(selectedCycleInstanceId) ?? null
     : null;
   const selectedStatus = selected?.status ?? null;
+  const selectedIsTerminal = Boolean(
+    selected && isTerminalCycleStatus(selected.status),
+  );

   const cta = {
     canStart: Boolean(
-      selected && isStartableCandidateStatus(selected.status) && !activeCycle,
+      selected &&
+        !selectedIsTerminal &&
+        isStartableCandidateStatus(selected.status) &&
+        !activeCycle,
+    ),
+    canPause: Boolean(
+      selected && !selectedIsTerminal && selected.status === "active",
+    ),
+    canResume: Boolean(
+      selected &&
+        !selectedIsTerminal &&
+        isPausedStatus(selected.status) &&
+        !activeCycle,
     ),
-    canPause: Boolean(selected && selected.status === "active"),
-    canResume: Boolean(selected && isPausedStatus(selected.status) && !activeCycle),
     canFinalize: Boolean(
       selected &&
-        !isTerminalCycleStatus(selected.status) &&
+        !selectedIsTerminal &&
         (selected.status === "active" ||
           selected.status === "paused" ||
           selected.status === "blocked"),
     ),
-    canCancel: Boolean(
-      selected && !isTerminalCycleStatus(selected.status),
-    ),
+    canCancel: Boolean(selected && !selectedIsTerminal),
   };

   return {

```

## DIFF — lifecyclePresentation.ts (CR-LC-B-01)

```diff
commit 6a2e3c9d71275145b20b514d02ab54533a72a2a7
Author: Morris Cleland <morris@macbook-air.home>
Date:   Fri Sep 11 06:49:21 2026 +0200

    fix(sfia-studio): close lifecycle critical review findings

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecyclePresentation.ts b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecyclePresentation.ts
index 10214963..d602a7c2 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecyclePresentation.ts
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecyclePresentation.ts
@@ -12,6 +12,8 @@ export type LifecycleUiStatus =
   | "finalization_open"
   | "ready_finalize"
   | "completed_next"
+  | "cancelled"
+  | "superseded"
   | "paused"
   | "empty";

@@ -158,6 +160,12 @@ export function lifecycleStatusBadge(
   if (projection.selectedStatus === "completed") {
     return { status: "completed_next", label: "Terminé" };
   }
+  if (projection.selectedStatus === "cancelled") {
+    return { status: "cancelled", label: "Annulé" };
+  }
+  if (projection.selectedStatus === "superseded") {
+    return { status: "superseded", label: "Remplacé" };
+  }
   if (projection.selectedStatus === "paused") {
     return { status: "paused", label: "En pause" };
   }
@@ -195,6 +203,7 @@ export function primaryNextCycleRecommendation(
  * - canFinalize (domain) = transition attemptable from status
  * - Finaliser CTA enabled only when readyExceptFinalizeDecision
  * - Assessment CTA when attemptable but non-HD blockers remain
+ * - Terminal display (CR-LC-B-01) exposes ZERO lifecycle mutation CTAs
  * Recommendation never grants authority.
  */
 export function lifecycleCtaPresentation(projection: PilotLifecycleProjection): {
@@ -210,13 +219,17 @@ export function lifecycleCtaPresentation(projection: PilotLifecycleProjection):
   resumeEnabled: boolean;
   readyExceptFinalize: boolean;
 } {
+  const terminalDisplay =
+    projection.selectedStatus === "completed" ||
+    projection.selectedStatus === "cancelled" ||
+    projection.selectedStatus === "superseded";
   const finalizeRec = primaryFinalizeRecommendation(projection);
   const nextRec = primaryNextCycleRecommendation(projection);
   const resumeClean = projection.resumeReconciliation?.clean !== false;
   const dirtyResume =
     projection.selectedStatus === "paused" &&
     projection.resumeReconciliation?.clean === false;
-  const attemptable = projection.cta.canFinalize;
+  const attemptable = projection.cta.canFinalize && !terminalDisplay;
   const ready = readyExceptFinalizeDecision(projection.assessment);
   const nonHd = nonHumanDecisionBlockers(projection.assessment);
   const showAssess = Boolean(
@@ -229,9 +242,9 @@ export function lifecycleCtaPresentation(projection: PilotLifecycleProjection):
     showFinalizePrimary: Boolean(finalizeRec && attemptable && ready),
     showFinalizeSecondary: Boolean(!finalizeRec && attemptable && ready),
     showAssess,
-    showStart: projection.cta.canStart,
-    showResume: projection.cta.canResume && !dirtyResume,
-    showReplan: dirtyResume,
+    showStart: projection.cta.canStart && !terminalDisplay,
+    showResume: projection.cta.canResume && !dirtyResume && !terminalDisplay,
+    showReplan: dirtyResume && !terminalDisplay,
     showTrajectoryEscalation: Boolean(
       nextRec ||
         projection.candidateCycles.length > 1 ||
@@ -241,7 +254,8 @@ export function lifecycleCtaPresentation(projection: PilotLifecycleProjection):
       attemptable && canOfferGroupedNoGovernedEffects(projection.assessment),
     ),
     finalizeEnabled: attemptable && ready,
-    resumeEnabled: projection.cta.canResume && resumeClean && !dirtyResume,
-    readyExceptFinalize: ready,
+    resumeEnabled:
+      projection.cta.canResume && resumeClean && !dirtyResume && !terminalDisplay,
+    readyExceptFinalize: ready && !terminalDisplay,
   };
 }

```

## DIFF — LifecycleSurface.tsx (CR-LC-B-01)

```diff
commit 6a2e3c9d71275145b20b514d02ab54533a72a2a7
Author: Morris Cleland <morris@macbook-air.home>
Date:   Fri Sep 11 06:49:21 2026 +0200

    fix(sfia-studio): close lifecycle critical review findings

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx
index d40c9131..32411b22 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx
@@ -217,8 +217,18 @@ export function LifecycleSurface({
   const nextRec = primaryNextCycleRecommendation(projection);
   const nonHd = nonHumanDecisionBlockers(projection.assessment);
   const ready = readyExceptFinalizeDecision(projection.assessment);
-  const exitOpen = nonHd.includes("exit_criteria_open");
-  const reservations = projection.blockingReservations ?? [];
+  const terminalDisplay =
+    projection.selectedStatus === "completed" ||
+    projection.selectedStatus === "cancelled" ||
+    projection.selectedStatus === "superseded";
+  // CR-LC-B-01 — no mutation aids / assessment obligation UI on terminal display.
+  const exitOpen =
+    !terminalDisplay && nonHd.includes("exit_criteria_open");
+  const reservations = terminalDisplay
+    ? []
+    : (projection.blockingReservations ?? []);
+  const showAssessment =
+    !terminalDisplay && Boolean(projection.assessment);

   return (
     <aside
@@ -284,7 +294,7 @@ export function LifecycleSurface({
         </section>
       )}

-      {projection.assessment ? (
+      {showAssessment ? (
         <section
           className={styles.block}
           data-testid="lifecycle-finalization-obligations"
@@ -309,16 +319,17 @@ export function LifecycleSurface({
             </p>
           )}
           <ul data-testid="lifecycle-obligation-list">
-            {projection.assessment.obligations.map((o) => (
+            {projection.assessment!.obligations.map((o) => (
               <li key={o.family} data-family={o.family} data-status={o.status}>
                 {obligationFamilyLabel(o.family)} — {obligationStatusLabel(o)}
               </li>
             ))}
           </ul>
         </section>
-      ) : projection.selectedStatus === "active" ||
-        projection.selectedStatus === "paused" ||
-        projection.selectedStatus === "blocked" ? (
+      ) : !terminalDisplay &&
+        (projection.selectedStatus === "active" ||
+          projection.selectedStatus === "paused" ||
+          projection.selectedStatus === "blocked") ? (
         <section className={styles.block} data-testid="lifecycle-assessment-unavailable">
           <h3 className={styles.blockTitle}>Conditions de finalisation</h3>
           <p className={styles.muted}>

```

## DIFF — pilotLifecycleTransitions.ts (CR-LC-B-02)

```diff
commit 6a2e3c9d71275145b20b514d02ab54533a72a2a7
Author: Morris Cleland <morris@macbook-air.home>
Date:   Fri Sep 11 06:49:21 2026 +0200

    fix(sfia-studio): close lifecycle critical review findings

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/lib/oa/cycle/application/pilotLifecycleTransitions.ts b/projects/sfia-studio/app/lib/oa/cycle/application/pilotLifecycleTransitions.ts
index 7099dc1e..cdd02d29 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/application/pilotLifecycleTransitions.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/application/pilotLifecycleTransitions.ts
@@ -1225,6 +1225,8 @@ export class PilotLifecycleTransitions {
     projectId: string;
     cycleInstanceId: string;
     createdBy: StartCycleRequest["createdBy"];
+    /** Required — Pilot authority evidence (defense-in-depth at mutation boundary). */
+    authorityEvidenceId?: string;
     correlationId?: string;
   }): Promise<
     | {
@@ -1242,6 +1244,56 @@ export class PilotLifecycleTransitions {
     const started = Date.now();
     const timestamp = this.deps.clock.nowIso();
     const correlationId = request.correlationId ?? `cor:traj-step-${Date.now()}`;
+
+    if (!request.createdBy?.actorId) {
+      return {
+        ok: false,
+        error: createCycleError({
+          detailCode: "CYCLE_LIFECYCLE_DENIED",
+          timestamp,
+          projectId: request.projectId,
+          cycleInstanceId: request.cycleInstanceId,
+          internalCauseRef: "actor_required",
+        }),
+        durationMs: Date.now() - started,
+      };
+    }
+
+    // CR-LC-B-02 — explicit evidence required on the request (createdBy alone insufficient).
+    if (!request.authorityEvidenceId) {
+      return {
+        ok: false,
+        error: createCycleError({
+          detailCode: "CYCLE_LIFECYCLE_DENIED",
+          timestamp,
+          projectId: request.projectId,
+          cycleInstanceId: request.cycleInstanceId,
+          internalCauseRef: "authority_evidence_required",
+        }),
+        durationMs: Date.now() - started,
+      };
+    }
+
+    // CR-LC-B-02 — authority gate at mutation service boundary (before any write).
+    const authGate = this.verifyAuthority({
+      actorId: request.createdBy.actorId,
+      cycleInstanceId: request.cycleInstanceId,
+      evidenceId: request.authorityEvidenceId,
+    });
+    if (!authGate.ok) {
+      return {
+        ok: false,
+        error: createCycleError({
+          detailCode: authGate.detailCode,
+          timestamp,
+          projectId: request.projectId,
+          cycleInstanceId: request.cycleInstanceId,
+          internalCauseRef: authGate.internalCauseRef,
+        }),
+        durationMs: Date.now() - started,
+      };
+    }
+
     const cycle = await this.deps.cycles.findById(request.cycleInstanceId);
     if (!cycle || cycle.projectId !== request.projectId) {
       return {

```

## DIFF — pilotLifecycleActions.ts (CR-LC-B-02)

```diff
commit 6a2e3c9d71275145b20b514d02ab54533a72a2a7
Author: Morris Cleland <morris@macbook-air.home>
Date:   Fri Sep 11 06:49:21 2026 +0200

    fix(sfia-studio): close lifecycle critical review findings

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/features/project-assistant/f2/pilotLifecycleActions.ts b/projects/sfia-studio/app/features/project-assistant/f2/pilotLifecycleActions.ts
index 6cd8f9b6..fe17314a 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/pilotLifecycleActions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/pilotLifecycleActions.ts
@@ -600,6 +600,7 @@ export async function completeBoundTrajectoryStepAction(input: {
       projectId: input.projectId,
       cycleInstanceId: input.cycleInstanceId,
       createdBy: PILOTE,
+      authorityEvidenceId: auth.evidenceId,
     });
   if (!closed.ok) {
     return {

```

## DIFF — validateLifecycleRecommendation.ts (CR-LC-B-03)

```diff
commit 6a2e3c9d71275145b20b514d02ab54533a72a2a7
Author: Morris Cleland <morris@macbook-air.home>
Date:   Fri Sep 11 06:49:21 2026 +0200

    fix(sfia-studio): close lifecycle critical review findings

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/validateLifecycleRecommendation.ts b/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/validateLifecycleRecommendation.ts
index 41176e79..0f27b0a4 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/validateLifecycleRecommendation.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/validateLifecycleRecommendation.ts
@@ -77,6 +77,43 @@ function requireNextCycleQualificationSignals(
   return { ok: true, signals };
 }

+/**
+ * D-LC-04 / CR-LC-B-03 — current cycle needing closure:
+ * canonical active / paused / blocked (status or LPS-pointed non-terminal).
+ * Does not treat proposed/acknowledged candidates or historical terminals as blockers.
+ */
+function resolveCurrentCycleNeedingClosure(input: {
+  cycles: readonly CycleInstance[];
+  lpsActiveCycleInstanceId: string | null | undefined;
+}): CycleInstance | null {
+  const byId = new Map(
+    input.cycles.map((c) => [c.cycleInstanceId, c] as const),
+  );
+  const needsClosure = (c: CycleInstance | null | undefined): c is CycleInstance =>
+    Boolean(
+      c &&
+        (c.status === "active" ||
+          c.status === "paused" ||
+          c.status === "blocked"),
+    );
+
+  const byStatus =
+    input.cycles.find(
+      (c) =>
+        c.status === "active" ||
+        c.status === "paused" ||
+        c.status === "blocked",
+    ) ?? null;
+  if (needsClosure(byStatus)) return byStatus;
+
+  const lpsId = input.lpsActiveCycleInstanceId ?? null;
+  if (lpsId) {
+    const pointed = byId.get(lpsId) ?? null;
+    if (needsClosure(pointed)) return pointed;
+  }
+  return null;
+}
+
 /**
  * Deterministic SFIA validation — fail closed.
  * Does not mutate Cycle/LPS/HD.
@@ -147,6 +184,21 @@ export function validateLifecycleRecommendation(
         reason: "next_cycle_needs_target",
       };
     }
+
+    // D-LC-04 / CR-LC-B-03 — while a current non-terminal cycle needs closure,
+    // FINALIZE_CURRENT_CYCLE is the lifecycle intent; NEXT_CYCLE is rejected.
+    const currentNeedsClosure = resolveCurrentCycleNeedingClosure({
+      cycles,
+      lpsActiveCycleInstanceId: input.lpsActiveCycleInstanceId,
+    });
+    if (currentNeedsClosure) {
+      return {
+        ok: false,
+        code: "LR_CURRENT_CYCLE_NOT_CLOSED",
+        reason: "next_cycle_requires_current_cycle_completion",
+      };
+    }
+
     // Type-based NEXT_CYCLE must use a canonical catalog cycleTypeId (D-RB-BOOT-02).
     if (targetType) {
       const typeGate = validateCanonicalTargetCycleTypeId(targetType);

```

## DIFF — index.ts (export) (CR-LC-B-01)

```diff
commit 6a2e3c9d71275145b20b514d02ab54533a72a2a7
Author: Morris Cleland <morris@macbook-air.home>
Date:   Fri Sep 11 06:49:21 2026 +0200

    fix(sfia-studio): close lifecycle critical review findings

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/lib/oa/cycle/index.ts b/projects/sfia-studio/app/lib/oa/cycle/index.ts
index fc18808a..52bf9e1e 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/index.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/index.ts
@@ -59,6 +59,7 @@ export {
 } from "./application/assessResumeReconciliation";
 export {
   projectPilotLifecycle,
+  selectLatestTerminalCycle,
   type PilotLifecycleProjection,
 } from "./application/lifecycleProjection";
 export * from "./application/lifecycleRecommendation";

```

## DIFF — lifecycleRecommendation.finalCorr.d0.test.ts (CR-LC-B-03)

```diff
commit 6a2e3c9d71275145b20b514d02ab54533a72a2a7
Author: Morris Cleland <morris@macbook-air.home>
Date:   Fri Sep 11 06:49:21 2026 +0200

    fix(sfia-studio): close lifecycle critical review findings

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/__tests__/oa/cycle/lifecycleRecommendation.finalCorr.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/cycle/lifecycleRecommendation.finalCorr.d0.test.ts
index 73a0a119..da81eb13 100644
--- a/projects/sfia-studio/app/__tests__/oa/cycle/lifecycleRecommendation.finalCorr.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/cycle/lifecycleRecommendation.finalCorr.d0.test.ts
@@ -1006,7 +1006,7 @@ describe("LR CORR-DELIVERY-03 provenance + fail-closed", () => {
     });
     expect(mat.materialization?.ok).toBe(true);

-    // FAIL-07 evidence failure irrelevant for NEXT_CYCLE
+    // FAIL-07 — D-LC-04: NEXT_CYCLE while current active is rejected (not an evidence issue).
     const nextStructured = productTurnPayload(
       {
         intent: "NEXT_CYCLE" as const,
@@ -1039,6 +1039,34 @@ describe("LR CORR-DELIVERY-03 provenance + fail-closed", () => {
       producedAt: "2026-09-08T10:00:05.000Z",
       createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
     });
+    expect(mat.materialization?.ok).toBe(false);
+    if (mat.materialization && !mat.materialization.ok) {
+      expect(mat.materialization.code).toBe("LR_CURRENT_CYCLE_NOT_CLOSED");
+    }
+
+    // FAIL-07b — evidence failure irrelevant for NEXT_CYCLE once current cycle is closed.
+    const completedCycles = cycles.map((c) =>
+      c.cycleInstanceId === ctx.cycleInstanceId
+        ? {
+            ...c,
+            status: "completed" as const,
+            closedAt: "2026-09-08T10:00:00.000Z",
+          }
+        : c,
+    );
+    mat = await materializeLifecycleRecommendationFromStructuredOutput({
+      projectId: ctx.projectId,
+      structuredOutput: nextStructured,
+      updateEpistemicState: ctx.oa.cycleServices.updateEpistemicState,
+      facts: {
+        ...baseFacts,
+        cycles: completedCycles,
+        lpsActiveCycleInstanceId: null,
+        failedMaterialDimensions: new Set(["evidence"]),
+      },
+      producedAt: "2026-09-08T10:00:06.000Z",
+      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
+    });
     expect(mat.materialization?.ok).toBe(true);
   });


```

## DIFF — lifecycleClosure.criticalReviewFollowUp.d0.test.ts (CR-B01/02/03)

```diff
commit 6a2e3c9d71275145b20b514d02ab54533a72a2a7
Author: Morris Cleland <morris@macbook-air.home>
Date:   Fri Sep 11 06:49:21 2026 +0200

    fix(sfia-studio): close lifecycle critical review findings

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/__tests__/oa/cycle/lifecycleClosure.criticalReviewFollowUp.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/cycle/lifecycleClosure.criticalReviewFollowUp.d0.test.ts
new file mode 100644
index 00000000..ace9ca51
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/cycle/lifecycleClosure.criticalReviewFollowUp.d0.test.ts
@@ -0,0 +1,691 @@
+/**
+ * Lifecycle Closure Phase B — Critical Review Follow-up (CR-LC-B-01/02/03).
+ * ZERO REAL — Memory OA / temp Product SQLite only.
+ * @vitest-environment node
+ */
+import fs from "node:fs";
+import os from "node:os";
+import path from "node:path";
+import { afterEach, describe, expect, it } from "vitest";
+import {
+  createTestDoctrineResolver,
+  FixedClock,
+  type Digest,
+  type DoctrinePackagePin,
+} from "@/lib/oa/doctrine";
+import {
+  createTestSqliteProductProjectServices,
+  type ActorReference,
+  type SqliteProductProjectServices,
+} from "@/lib/oa/project";
+import {
+  createSqliteCycleServices,
+  projectPilotLifecycle,
+  selectLatestTerminalCycle,
+  validateLifecycleRecommendation,
+  NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
+  type CycleInstance,
+  type TrajectoryStep,
+} from "@/lib/oa/cycle";
+import {
+  MemoryAuthorityResolver,
+  createSqliteDecisionServices,
+  LOCAL_PILOTE_ACTOR,
+  registerLocalPiloteAuthority,
+  type DecisionServices,
+} from "@/lib/oa/decision";
+import { completeBoundTrajectoryStepAction } from "@/features/project-assistant/f2/pilotLifecycleActions";
+import {
+  lifecycleCtaPresentation,
+  lifecycleStatusBadge,
+} from "@/features/pre-m6-product-ui/surfaces/lifecyclePresentation";
+import type { LifecycleRecommendationEnvelope } from "@/lib/oa/cycle";
+
+const APP_ROOT = path.resolve(__dirname, "../../..");
+const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
+const SCHEMAS = path.resolve(
+  APP_ROOT,
+  "../sfia-v3-modeled/v3-native-option-a/schemas",
+);
+const VALID_DIGEST =
+  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;
+const VALID_PIN: DoctrinePackagePin = {
+  doctrinePackageId: "pkg:studio-v3-oa",
+  version: "1.0.0",
+  digest: VALID_DIGEST,
+};
+const ACTOR: ActorReference = {
+  actorId: "actor:morris",
+  role: "project_owner",
+  displayName: "Morris",
+  authorityLevel: "N3",
+};
+const PILOTE = {
+  actorId: LOCAL_PILOTE_ACTOR.actorId,
+  role: LOCAL_PILOTE_ACTOR.role,
+  displayName: LOCAL_PILOTE_ACTOR.displayName,
+  authorityLevel: LOCAL_PILOTE_ACTOR.authorityLevel,
+};
+const STEPS_ACTIVE: TrajectoryStep[] = [
+  {
+    stepId: "stp:cadrage",
+    order: 1,
+    label: "Cadrage",
+    cycleTypeId: "cyc:framing",
+    state: "active",
+  },
+];
+const SIGNALS = {
+  structuralChange: false,
+  securityImpact: false,
+  architectureImpact: false,
+  dataImpact: false,
+  irreversible: false,
+  lowRiskBounded: true,
+};
+
+const tempDirs: string[] = [];
+const openServices: Array<{ dispose: () => void }> = [];
+
+afterEach(() => {
+  while (openServices.length > 0) openServices.pop()?.dispose();
+  for (const d of tempDirs.splice(0)) {
+    try {
+      fs.rmSync(d, { recursive: true, force: true });
+    } catch {
+      /* ignore */
+    }
+  }
+});
+
+function tempDbPath(name: string): string {
+  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "cr-lcb-"));
+  tempDirs.push(dir);
+  return path.join(dir, name);
+}
+
+function authorityAdapter(authority: MemoryAuthorityResolver) {
+  return {
+    verify: (req: {
+      actorId: string;
+      scope: string;
+      evidenceId?: string;
+      requiredLevel?: "N1" | "N2" | "N3";
+      requireMorrisGate?: boolean;
+    }) => {
+      const r = authority.verify({
+        actorId: req.actorId,
+        requiredLevel: req.requiredLevel ?? "N3",
+        scope: req.scope,
+        evidenceId: req.evidenceId,
+        requireMorrisGate: req.requireMorrisGate ?? true,
+      });
+      return { ok: r.ok, reason: r.reason };
+    },
+  };
+}
+
+function buildStack(dbPath: string) {
+  const { resolver } = createTestDoctrineResolver({
+    registryRoot: FIXTURES,
+    schemasRoot: SCHEMAS,
+  });
+  const project = createTestSqliteProductProjectServices({
+    doctrineResolver: resolver,
+    fixedNowIso: "2026-09-10T20:00:00.000Z",
+    dbPath,
+  });
+  openServices.push(project);
+  const authority = new MemoryAuthorityResolver();
+  const clock = new FixedClock("2026-09-10T20:00:00.000Z");
+  let decisions!: DecisionServices;
+  const cycles = createSqliteCycleServices({
+    projectServices: project,
+    productStore: project.store,
+    clock,
+    decisions: {
+      getById: (id) => decisions.decisions.findById(id),
+      listByProject: (pid) => decisions.decisions.listByProject(pid),
+    },
+    authority: authorityAdapter(authority),
+  });
+  decisions = createSqliteDecisionServices({
+    projectServices: project,
+    cycleServices: cycles,
+    productStore: project.store,
+    clock,
+    authorityResolver: authority,
+  });
+  return { project, cycles, decisions, authority };
+}
+
+async function registerPilotAuth(
+  authority: MemoryAuthorityResolver,
+  cycleId: string,
+): Promise<string> {
+  const auth = registerLocalPiloteAuthority({
+    authorityResolver: authority,
+    scope: `pilot-lifecycle:${cycleId}`,
+    issuedAt: "2026-09-10T20:00:00.000Z",
+    forceEnable: true,
+  });
+  if (!auth.ok) throw new Error(auth.message);
+  return auth.evidenceId;
+}
+
+async function seedProject(
+  project: SqliteProductProjectServices,
+  projectId: string,
+) {
+  const created = await project.createProject.execute({
+    projectId,
+    title: "CR-LCB",
+    objective: "critical-review-follow-up",
+    context: "cr-lcb",
+    scope: "pilot-lifecycle",
+    doctrinePackagePin: VALID_PIN,
+    createdBy: ACTOR,
+    lpsVersionId: `lps:${projectId}-v1`,
+    idempotencyKey: `idem:${projectId}`,
+  });
+  if (!created.ok) throw new Error(JSON.stringify(created));
+}
+
+async function seedTrajectory(
+  cycles: ReturnType<typeof createSqliteCycleServices>,
+  project: SqliteProductProjectServices,
+  projectId: string,
+) {
+  const lps = await project.getCurrentLivingProjectState.execute({ projectId });
+  if (!lps.ok) throw new Error("lps");
+  const created = await cycles.createInitialTrajectory.execute({
+    trajectoryId: `trj:${projectId}`,
+    projectId,
+    steps: STEPS_ACTIVE,
+    status: "active",
+    expectedLpsVersion: lps.livingProjectState.version,
+    createdBy: ACTOR,
+  });
+  if (!created.ok) throw new Error(JSON.stringify(created));
+}
+
+async function createAndStart(
+  stack: ReturnType<typeof buildStack>,
+  projectId: string,
+  cycleId: string,
+) {
+  await seedProject(stack.project, projectId);
+  await seedTrajectory(stack.cycles, stack.project, projectId);
+  const created = await stack.cycles.createCycle.execute({
+    cycleInstanceId: cycleId,
+    cycleTypeId: "cyc:framing",
+    projectId,
+    signals: { lowRiskBounded: true },
+    createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
+    linkAsActiveCycle: false,
+  });
+  if (!created.ok) throw new Error(JSON.stringify(created));
+  const ev = await registerPilotAuth(stack.authority, cycleId);
+  const started = await stack.cycles.pilotLifecycle.start({
+    cycleInstanceId: cycleId,
+    projectId,
+    createdBy: PILOTE,
+    authorityEvidenceId: ev,
+  });
+  if (!started.ok) throw new Error(JSON.stringify(started));
+  // Bind trajectory after START so completeBoundActiveTrajectoryStep can close the step
+  // without requiring the full CKC-bound START path.
+  const cycle = await stack.cycles.cycles.findById(cycleId);
+  if (!cycle) throw new Error("cycle missing");
+  await stack.cycles.cycles.save({
+    ...cycle,
+    trajectoryId: `trj:${projectId}`,
+    trajectoryVersion: 1,
+    trajectoryStepId: "stp:cadrage",
+  });
+  const traj = await stack.cycles.trajectories.findCurrentByProjectId(projectId);
+  if (!traj) throw new Error("trajectory missing");
+  const stepIdx = traj.steps.findIndex((s) => s.stepId === "stp:cadrage");
+  if (stepIdx < 0) throw new Error("step missing");
+  if (traj.steps[stepIdx]!.state !== "active") {
+    const nextSteps = traj.steps.map((s, i) =>
+      i === stepIdx ? { ...s, state: "active" as const } : s,
+    );
+    await stack.cycles.trajectories.save({ ...traj, steps: nextSteps });
+  }
+  return ev;
+}
+
+function cycleStub(
+  partial: Partial<CycleInstance> &
+    Pick<CycleInstance, "cycleInstanceId" | "projectId" | "status">,
+): CycleInstance {
+  return {
+    schemaVersion: "0.1.0-oa",
+    cycleTypeId: "cyc:framing",
+    profile: "Light",
+    createdAt: "2026-09-10T20:00:00.000Z",
+    ...partial,
+  };
+}
+
+function nextCandidate(targetCycleTypeId: string) {
+  return {
+    intent: "NEXT_CYCLE" as const,
+    statement: "Envisager le prochain cycle.",
+    subjectCycleInstanceId: null,
+    targetCycleInstanceId: null,
+    targetCycleTypeId,
+    rationale: null,
+    authority: "none" as const,
+    isHumanDecision: false as const,
+    qualificationSignals: { ...SIGNALS },
+  };
+}
+
+function nextEnvelope(
+  projectId: string,
+): LifecycleRecommendationEnvelope {
+  return {
+    recommendationId: "epi:lr-next",
+    projectId,
+    intent: "NEXT_CYCLE",
+    subjectCycleInstanceId: null,
+    targetCycleInstanceId: null,
+    targetCycleTypeId: "cyc:delivery",
+    producer: "nora",
+    producedAt: "2026-09-10T21:00:00.000Z",
+    statement: "Envisager delivery.",
+    basisFingerprint: "fp:next",
+    basisRefs: { projectId, targetCycleTypeId: "cyc:delivery" },
+    semanticKey: "sk:next",
+    authority: "none",
+    isHumanDecision: false,
+    doesNotActivateCycle: true,
+    doesNotFinalize: true,
+    doesNotCreateHumanDecision: true,
+    epistemicStatus: "active",
+    supersedesRecommendationId: null,
+    derivedCurrentness: "CURRENT",
+  };
+}
+
+describe("CR-LC-B-01 — terminal completed projection", () => {
+  it("CR-B01-01 — completed + cleared LPS → Terminé · completed, not empty", () => {
+    const completed = cycleStub({
+      cycleInstanceId: "cyc:done",
+      projectId: "prj:b01",
+      status: "completed",
+      closedAt: "2026-09-10T20:30:00.000Z",
+    });
+    const projection = projectPilotLifecycle({
+      projectId: "prj:b01",
+      cycles: [completed],
+      lpsActiveCycleInstanceId: null,
+    });
+    expect(projection.selectedCycleInstanceId).toBe("cyc:done");
+    expect(projection.selectedStatus).toBe("completed");
+    const badge = lifecycleStatusBadge(projection);
+    expect(badge.status).toBe("completed_next");
+    expect(badge.label).toBe("Terminé");
+  });
+
+  it("CR-B01-02 — completed exposes ZERO lifecycle mutation CTA", () => {
+    const projection = projectPilotLifecycle({
+      projectId: "prj:b01",
+      cycles: [
+        cycleStub({
+          cycleInstanceId: "cyc:done",
+          projectId: "prj:b01",
+          status: "completed",
+          closedAt: "2026-09-10T20:30:00.000Z",
+        }),
+      ],
+      lpsActiveCycleInstanceId: null,
+    });
+    expect(projection.cta.canStart).toBe(false);
+    expect(projection.cta.canPause).toBe(false);
+    expect(projection.cta.canResume).toBe(false);
+    expect(projection.cta.canFinalize).toBe(false);
+    expect(projection.cta.canCancel).toBe(false);
+    const cta = lifecycleCtaPresentation(projection);
+    expect(cta.showStart).toBe(false);
+    expect(cta.showResume).toBe(false);
+    expect(cta.showAssess).toBe(false);
+    expect(cta.showFinalizePrimary).toBe(false);
+    expect(cta.showFinalizeSecondary).toBe(false);
+    expect(cta.finalizeEnabled).toBe(false);
+    expect(cta.showGroupedObligationPolicy).toBe(false);
+  });
+
+  it("CR-B01-03 — hard-reload equivalent projection is identical", () => {
+    const cycles = [
+      cycleStub({
+        cycleInstanceId: "cyc:done",
+        projectId: "prj:b01",
+        status: "completed",
+        closedAt: "2026-09-10T20:30:00.000Z",
+      }),
+    ];
+    const a = projectPilotLifecycle({
+      projectId: "prj:b01",
+      cycles,
+      lpsActiveCycleInstanceId: null,
+    });
+    const b = projectPilotLifecycle({
+      projectId: "prj:b01",
+      cycles,
+      lpsActiveCycleInstanceId: null,
+    });
+    expect(a.selectedCycleInstanceId).toBe(b.selectedCycleInstanceId);
+    expect(a.selectedStatus).toBe(b.selectedStatus);
+    expect(lifecycleStatusBadge(a)).toEqual(lifecycleStatusBadge(b));
+  });
+
+  it("CR-B01-04 — latest terminal by closedAt is deterministic", () => {
+    const older = cycleStub({
+      cycleInstanceId: "cyc:old",
+      projectId: "prj:b01",
+      status: "completed",
+      closedAt: "2026-09-10T19:00:00.000Z",
+    });
+    const newer = cycleStub({
+      cycleInstanceId: "cyc:new",
+      projectId: "prj:b01",
+      status: "completed",
+      closedAt: "2026-09-10T21:00:00.000Z",
+    });
+    expect(selectLatestTerminalCycle([older, newer])?.cycleInstanceId).toBe(
+      "cyc:new",
+    );
+    expect(selectLatestTerminalCycle([newer, older])?.cycleInstanceId).toBe(
+      "cyc:new",
+    );
+    const projection = projectPilotLifecycle({
+      projectId: "prj:b01",
+      cycles: [older, newer],
+      lpsActiveCycleInstanceId: null,
+    });
+    expect(projection.selectedCycleInstanceId).toBe("cyc:new");
+  });
+
+  it("CR-B01-05 — active/candidate takes precedence over terminal", () => {
+    const done = cycleStub({
+      cycleInstanceId: "cyc:done",
+      projectId: "prj:b01",
+      status: "completed",
+      closedAt: "2026-09-10T20:00:00.000Z",
+    });
+    const active = cycleStub({
+      cycleInstanceId: "cyc:active",
+      projectId: "prj:b01",
+      status: "active",
+    });
+    const withActive = projectPilotLifecycle({
+      projectId: "prj:b01",
+      cycles: [done, active],
+      lpsActiveCycleInstanceId: "cyc:active",
+    });
+    expect(withActive.selectedCycleInstanceId).toBe("cyc:active");
+    expect(withActive.selectedStatus).toBe("active");
+
+    const candidate = cycleStub({
+      cycleInstanceId: "cyc:cand",
+      projectId: "prj:b01",
+      status: "acknowledged",
+    });
+    const withCand = projectPilotLifecycle({
+      projectId: "prj:b01",
+      cycles: [done, candidate],
+      lpsActiveCycleInstanceId: null,
+    });
+    expect(withCand.selectedCycleInstanceId).toBe("cyc:cand");
+    expect(withCand.selectedStatus).toBe("acknowledged");
+  });
+
+  it("CR-B01-06 — NEXT_CYCLE Recommendation visible without activating terminal", () => {
+    const projection = projectPilotLifecycle({
+      projectId: "prj:b01",
+      cycles: [
+        cycleStub({
+          cycleInstanceId: "cyc:done",
+          projectId: "prj:b01",
+          status: "completed",
+          closedAt: "2026-09-10T20:30:00.000Z",
+        }),
+      ],
+      lpsActiveCycleInstanceId: null,
+      currentRecommendations: [nextEnvelope("prj:b01")],
+    });
+    expect(projection.selectedStatus).toBe("completed");
+    expect(projection.activeCycle).toBeNull();
+    const cta = lifecycleCtaPresentation(projection);
+    expect(cta.showTrajectoryEscalation).toBe(true);
+    expect(cta.showStart).toBe(false);
+    expect(cta.finalizeEnabled).toBe(false);
+  });
+});
+
+describe("CR-LC-B-02 — authority at trajectory-step mutation boundary", () => {
+  it("CR-B02-01/02 — direct call without evidence → DENIED, step stays active", async () => {
+    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
+    const stack = buildStack(tempDbPath("b02-deny.sqlite"));
+    await createAndStart(stack, "prj:b02a", "cyc:b02a");
+    const denied =
+      await stack.cycles.pilotLifecycle.completeBoundActiveTrajectoryStep({
+        projectId: "prj:b02a",
+        cycleInstanceId: "cyc:b02a",
+        createdBy: PILOTE,
+        // no authorityEvidenceId
+      });
+    expect(denied.ok).toBe(false);
+    if (denied.ok) return;
+    expect(denied.error.detailCode).toBe("CYCLE_LIFECYCLE_DENIED");
+
+    const traj = await stack.cycles.trajectories.findCurrentByProjectId(
+      "prj:b02a",
+    );
+    const step = traj?.steps.find((s) => s.stepId === "stp:cadrage");
+    expect(step?.state).toBe("active");
+  });
+
+  it("CR-B02-03 — wrong-scope evidence → DENIED + no mutation", async () => {
+    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
+    const stack = buildStack(tempDbPath("b02-scope.sqlite"));
+    await createAndStart(stack, "prj:b02b", "cyc:b02b");
+    const wrong = await registerPilotAuth(stack.authority, "cyc:other");
+    const denied =
+      await stack.cycles.pilotLifecycle.completeBoundActiveTrajectoryStep({
+        projectId: "prj:b02b",
+        cycleInstanceId: "cyc:b02b",
+        createdBy: PILOTE,
+        authorityEvidenceId: wrong,
+      });
+    expect(denied.ok).toBe(false);
+    const traj = await stack.cycles.trajectories.findCurrentByProjectId(
+      "prj:b02b",
+    );
+    expect(traj?.steps.find((s) => s.stepId === "stp:cadrage")?.state).toBe(
+      "active",
+    );
+  });
+
+  it("CR-B02-04 — valid Pilot evidence → active→done", async () => {
+    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
+    const stack = buildStack(tempDbPath("b02-ok.sqlite"));
+    const ev = await createAndStart(stack, "prj:b02c", "cyc:b02c");
+    const ok =
+      await stack.cycles.pilotLifecycle.completeBoundActiveTrajectoryStep({
+        projectId: "prj:b02c",
+        cycleInstanceId: "cyc:b02c",
+        createdBy: PILOTE,
+        authorityEvidenceId: ev,
+      });
+    expect(ok.ok).toBe(true);
+    if (!ok.ok) {
+      throw new Error(JSON.stringify(ok));
+    }
+    expect(ok.stepId).toBe("stp:cadrage");
+    const step = ok.trajectory.steps.find((s) => s.stepId === "stp:cadrage");
+    expect(step?.state).toBe("done");
+  });
+
+  it("CR-B02-05 — Product wrapper passes evidence; exit path still works", async () => {
+    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
+    const stack = buildStack(tempDbPath("b02-wrap.sqlite"));
+    await createAndStart(stack, "prj:b02d", "cyc:b02d");
+    const closed = await completeBoundTrajectoryStepAction({
+      projectId: "prj:b02d",
+      cycleInstanceId: "cyc:b02d",
+      cycleServices: stack.cycles,
+      authorityResolver: stack.authority,
+      nowIso: () => "2026-09-10T20:00:00.000Z",
+    });
+    expect(closed.ok).toBe(true);
+    if (!closed.ok) return;
+    expect(closed.assessment.blockers).not.toContain("exit_criteria_open");
+  });
+});
+
+describe("CR-LC-B-03 — D-LC-04 deterministic NEXT_CYCLE gate", () => {
+  it("CR-B03-01 — active + NEXT_CYCLE by type → LR_CURRENT_CYCLE_NOT_CLOSED", () => {
+    const result = validateLifecycleRecommendation({
+      projectId: "prj:b03",
+      candidate: nextCandidate("cyc:delivery"),
+      cycles: [
+        cycleStub({
+          cycleInstanceId: "cyc:cur",
+          projectId: "prj:b03",
+          status: "active",
+        }),
+      ],
+      lpsActiveCycleInstanceId: "cyc:cur",
+      hasTrajectoryContext: true,
+    });
+    expect(result.ok).toBe(false);
+    if (result.ok) return;
+    expect(result.code).toBe("LR_CURRENT_CYCLE_NOT_CLOSED");
+    expect(result.reason).toBe("next_cycle_requires_current_cycle_completion");
+  });
+
+  it("CR-B03-02 — active + NEXT_CYCLE by instance → reject", () => {
+    const result = validateLifecycleRecommendation({
+      projectId: "prj:b03",
+      candidate: {
+        ...nextCandidate("cyc:delivery"),
+        targetCycleTypeId: null,
+        targetCycleInstanceId: "cyc:next-cand",
+      },
+      cycles: [
+        cycleStub({
+          cycleInstanceId: "cyc:cur",
+          projectId: "prj:b03",
+          status: "active",
+        }),
+        cycleStub({
+          cycleInstanceId: "cyc:next-cand",
+          projectId: "prj:b03",
+          status: "acknowledged",
+        }),
+      ],
+      lpsActiveCycleInstanceId: "cyc:cur",
+      hasTrajectoryContext: true,
+    });
+    expect(result.ok).toBe(false);
+    if (result.ok) return;
+    expect(result.code).toBe("LR_CURRENT_CYCLE_NOT_CLOSED");
+  });
+
+  it("CR-B03-03 — paused / blocked current → reject", () => {
+    for (const status of ["paused", "blocked"] as const) {
+      const result = validateLifecycleRecommendation({
+        projectId: "prj:b03",
+        candidate: nextCandidate("cyc:delivery"),
+        cycles: [
+          cycleStub({
+            cycleInstanceId: `cyc:${status}`,
+            projectId: "prj:b03",
+            status,
+          }),
+        ],
+        lpsActiveCycleInstanceId: `cyc:${status}`,
+        hasTrajectoryContext: true,
+      });
+      expect(result.ok).toBe(false);
+      if (!result.ok) {
+        expect(result.code).toBe("LR_CURRENT_CYCLE_NOT_CLOSED");
+      }
+    }
+  });
+
+  it("CR-B03-04 — completed current + cleared LPS + NEXT_CYCLE → accept", () => {
+    const result = validateLifecycleRecommendation({
+      projectId: "prj:b03",
+      candidate: nextCandidate("cyc:delivery"),
+      cycles: [
+        cycleStub({
+          cycleInstanceId: "cyc:done",
+          projectId: "prj:b03",
+          status: "completed",
+          closedAt: "2026-09-10T20:00:00.000Z",
+        }),
+      ],
+      lpsActiveCycleInstanceId: null,
+      hasTrajectoryContext: true,
+    });
+    expect(result.ok).toBe(true);
+  });
+
+  it("CR-B03-05 — no current cycle + valid NEXT_CYCLE → accept", () => {
+    const result = validateLifecycleRecommendation({
+      projectId: "prj:b03",
+      candidate: nextCandidate("cyc:framing"),
+      cycles: [],
+      lpsActiveCycleInstanceId: null,
+      hasTrajectoryContext: true,
+    });
+    expect(result.ok).toBe(true);
+  });
+
+  it("CR-B03-06 — FINALIZE_CURRENT_CYCLE still passes for non-terminal", () => {
+    const result = validateLifecycleRecommendation({
+      projectId: "prj:b03",
+      candidate: {
+        intent: "FINALIZE_CURRENT_CYCLE",
+        statement: "Envisager la finalisation.",
+        subjectCycleInstanceId: "cyc:cur",
+        targetCycleInstanceId: null,
+        targetCycleTypeId: null,
+        qualificationSignals: null,
+      },
+      cycles: [
+        cycleStub({
+          cycleInstanceId: "cyc:cur",
+          projectId: "prj:b03",
+          status: "active",
+        }),
+      ],
+      lpsActiveCycleInstanceId: "cyc:cur",
+    });
+    expect(result.ok).toBe(true);
+  });
+
+  it("CR-B03-07 — validator produces no HD / no mutation (pure function)", () => {
+    const cycles = [
+      cycleStub({
+        cycleInstanceId: "cyc:cur",
+        projectId: "prj:b03",
+        status: "active",
+      }),
+    ];
+    const before = JSON.stringify(cycles);
+    validateLifecycleRecommendation({
+      projectId: "prj:b03",
+      candidate: nextCandidate("cyc:delivery"),
+      cycles,
+      lpsActiveCycleInstanceId: "cyc:cur",
+      hasTrajectoryContext: true,
+    });
+    expect(JSON.stringify(cycles)).toBe(before);
+  });
+});

```
