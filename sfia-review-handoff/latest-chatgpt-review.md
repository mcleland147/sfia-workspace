# P5-S03 — CORRECTION PASS 01 —
DURABLE EXECUTION ACTION CONTINUITY +
P3 STRUCTURAL VISUAL ALIGNMENT —
FULL REVIEW PACK

## 1. Timestamp
2026-10-05 16:40:48 +0200 · Europe/Paris (system)

## 2. Morris CP01 authorization
MORRIS P5-S03 CORRECTION PASS 01 AUTHORIZATION = **YES** (CONSUMED)
Authorized axes ONLY: Axis 1 Durable Execution Action Continuity · Axis 2 P3 Structural Visual Alignment
Also authorized: local tests · typecheck/lint/build/full npm test · Roadmap/P5 truth-sync · FULL Review Pack · bounded Review Handoff L3
NOT AUTHORIZED: project commit/push/PR/merge · OpenAI REAL · R3 · P6 · new Product persistence/object/state machine/authority model/agent architecture · F2 refactor · Synthèses/Auth/Activity · runtime v3

## 3. Git truth
- pwd: /Users/morris/Projects/sfia-studio-chat-first-product-simplification-p3
- branch: `delivery/sfia-studio-product-simplification-p5-s03-object-native-product-views`
- HEAD: `1a7e80b20949a041b1edc279ffed735b04bda997`
- origin/main: `1a7e80b20949a041b1edc279ffed735b04bda997`
- expected origin/main: `1a7e80b20949a041b1edc279ffed735b04bda997` → **MATCH**
- staged: EMPTY
- dirty: attributable to P5-S03 + `.tmp-sfia-review/**`
- project Git actions this pass: **NONE**

## 4. Source SHAs / read list
- Canonical Cursor template: `prompts/templates/sfia-cycle-execution-template.md` @ `948156a21309ef99c3aaed6410947dc6b9bc569a`
- Doctrine / Roadmap / Product Completion / P3 / P4 / P5 docs (Git versions) reread
- W2: actions.ts · readCurrentGovernedExecutionContinuity · deriveGovernedExecutionContinuityProjection · reconcileGovernedExecution · reconcileContinuePolicy
- TrajectorySurface (harvest pattern only — no second workflow)
- S03 surfaces: OverviewSurface · ExecutionSurface · pilotExecutionPresentation · ProjectWorkspacePage

## 5. Prior Critical Review findings (entry)
ChatGPT prior S03 Critical Review = **NOT READY** (defects limited to two axes):
- Axis 1: Execution READ durable but ACTIONABILITY gated by Conversation process-local `f3M3Resolved` / `canConfirmResolvedM3`; Confirmer fused confirm+execute
- Axis 2: B1 Aperçu desktop kept permanent Contexte rail (≠ 51:2); B2 mobile shell carried desktop chrome

## 6. Prior handoff
- `sfia/review-handoff` before: `aeb9e2c04118d087aa0bfc52686708ba05f28c3e`
- Handoff blob before (complete republish): `bd7d340e1a5f9737553eec0b36200b2f14240d24`

## 7. Axis 1 before architecture
durable ExecutionContract → canonical W2 READ shows PRE / confirmation_required / ready
BUT controller.canConfirmResolvedM3 depended on React `f3M3Resolved` → after reload false → durable EC visually known but not actionably continuous.
Confirmer → `confirmAndExecuteResolvedM3` (CONFIRM+EXECUTE fused).

## 8. Process-local dependency proof (before)
```
canConfirmExecution = controller.canConfirmResolvedM3 || controller.canConfirmLegacyFixture
canExecuteExecution = controller.canConfirmResolvedM3 || controller.canConfirmLegacyFixture
onConfirm/onExecute → confirmAndExecuteResolvedM3 / LegacyFixture
```
Removed from ProjectWorkspacePage Exécution wiring.

## 9. Durable W2 mechanism selected
- READ: `w2ReadCurrentGovernedExecutionContinuityAction` + `w2DeriveGovernedExecutionContinuityAction`
- CONFIRM: `w2ConfirmExecutionContractAction` (no Attempt)
- INSPECT: `w2InspectExecutionContractAction`
- AUTHORIZE: `w2AuthorizeExecutionContractAction` (server owner; hostile client claims ignored)
- EXECUTE: `w2ReconcileGovernedExecutionAction` intent=`execute`
- `refreshExecutionContinuity()` single refresh after mutations

## 10. Confirmation != Execute design
**CONFIRMATION IS NOT EXECUTION.**
À confirmer → Confirmer → confirm-only → canonical reread.
Prête à exécuter → Exécuter → authorize → only if AUTHORIZED && executionEligible → reconcile execute → reread.
No auto-confirm on Execute. Fail closed if confirmation_required.

## 11. Restart-safe flow
Fresh mount may have f3Prepare=f3M3Resolved=f3Execute=activeProposal=null.
Exécution loads durable continuity by projectId only and remains actionable.

## 12. Action sequence (Execute)
1 durable EC known → 2 inspection sufficient (refresh via inspect if needed) → 3 authorize → 4 require AUTHORIZED+eligible → 5 reconcile intent=execute → 6 refresh → 7 no manual Select→Start→Complete

## 13. Server authority boundaries
No client-created authority receipt. No client-selected authority level. No canActAsMorris widening. Server remains authority owner. Client eligibility = presentation only.

## 14. Files modified / created
### Created
- `surfaces/ExecutionSurface.tsx` + `.module.css`
- `surfaces/OverviewSurface.tsx` + `.module.css`
- `surfaces/pilotExecutionPresentation.ts`
- `__tests__/…/p5.s03.objectNativeViews.ui.test.tsx`
- `__tests__/…/p5.s03.pilotExecutionPresentation.d0.test.ts`
- `__tests__/…/p5.s03.durableExecutionActionContinuity.ui.test.tsx`
- `.tmp-sfia-review/p5-s03-visual/cp01/**`

### Modified
- `ProjectWorkspacePage.tsx` / `.module.css`
- adjacent pre-m6 mocks adapted
- Roadmap + P5 integrated-delivery truth-sync

### NOT modified (protected)
- lib/oa/** · nora-cognitive-runtime/** · provider adapter · Agents Runner · routing policy · DB schema/migrations


## 15. Full modified code

### 15a. ProjectWorkspacePage.tsx diff (complete)
```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
index 66af4db1..06648947 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
@@ -23,6 +23,13 @@ import {
   ProjectContextShortcuts,
   ProjectContextSummary,
 } from "./surfaces/ProjectContextSummary";
+import { OverviewSurface } from "./surfaces/OverviewSurface";
+import { ExecutionSurface } from "./surfaces/ExecutionSurface";
+import {
+  deriveExecutionTabBadge,
+  presentPilotExecution,
+  type PilotExecutionPresentation,
+} from "./surfaces/pilotExecutionPresentation";
 import {
   deriveAttentionItems,
   deriveCycleSummary,
@@ -34,11 +41,18 @@ import {
   projectAssistantConfirmReservationResolutionAction,
   projectAssistantDeferReservationAction,
 } from "@/features/project-assistant/actions";
+import {
+  w2DeriveGovernedExecutionContinuityAction,
+  w2ReadCurrentGovernedExecutionContinuityAction,
+} from "@/features/project-assistant/w2/actions";
 import type { PilotLifecycleProjection } from "@/lib/oa/cycle/application/lifecycleProjection";
 import { ProjectWorkspaceRoutingPanelLazy } from "./surfaces/ProjectWorkspaceRoutingPanel";
 import type { GetProjectResult, GetProjectSuccess } from "./types";
 import styles from "./ProjectWorkspacePage.module.css";

+/** Ephemeral presentation view — never persisted as Product state. */
+type WorkspaceView = "conversation" | "overview" | "execution";
+
 /** prefers-reduced-motion: no smooth scrolling for in-page jumps. */
 function scrollBehaviorPref(): ScrollBehavior {
   if (
@@ -88,6 +102,9 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
   const [durableOutcome, setDurableOutcome] =
     useState<ProjectAssistantRehydrateEvidenceOutcomeSuccess | null>(null);
   const [lpsOpen, setLpsOpen] = useState(false);
+  const [activeView, setActiveView] = useState<WorkspaceView>("conversation");
+  const [executionPresentation, setExecutionPresentation] =
+    useState<PilotExecutionPresentation | null>(null);
   const [journalCollapsed, setJournalCollapsed] = useState(false);
   const [trajectoryRefreshSignal, setTrajectoryRefreshSignal] = useState(0);
   /** B1 — bump so LifecycleSurface reloads after Trajectory (or other) durable mutations. */
@@ -139,15 +156,42 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
     };
   }, [projectId]);

+  /** Badge honesty — read canonical continuity without inventing a count. */
+  useEffect(() => {
+    let cancelled = false;
+    void (async () => {
+      const [derived, current] = await Promise.all([
+        w2DeriveGovernedExecutionContinuityAction({ projectId }),
+        w2ReadCurrentGovernedExecutionContinuityAction({ projectId }),
+      ]);
+      if (cancelled) return;
+      setExecutionPresentation(
+        presentPilotExecution({
+          continuityProjection: derived,
+          preExecutionContinuity: current.ok ? current : null,
+        }),
+      );
+    })();
+    return () => {
+      cancelled = true;
+    };
+  }, [projectId]);
+
   const focusConversation = useCallback(() => {
-    conversationRef.current?.scrollIntoView({
-      behavior: scrollBehaviorPref(),
-      block: "start",
-    });
-    const input = conversationRef.current?.querySelector(
-      "[data-testid='project-assistant-input']",
-    );
-    if (input instanceof HTMLTextAreaElement) input.focus();
+    setActiveView("conversation");
+    window.setTimeout(() => {
+      const node = conversationRef.current;
+      if (node && typeof node.scrollIntoView === "function") {
+        node.scrollIntoView({
+          behavior: scrollBehaviorPref(),
+          block: "start",
+        });
+      }
+      const input = node?.querySelector(
+        "[data-testid='project-assistant-input']",
+      );
+      if (input instanceof HTMLTextAreaElement) input.focus();
+    }, 0);
   }, []);

   const controller = useProductConversation({
@@ -312,6 +356,9 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {

   /** Shortcut « Journal du cycle » — opens the existing Journal rail. */
   const openJournal = useCallback(() => {
+    // Overview hides the permanent context rail — restore Conversation layout
+    // so Journal remains reachable without a second Product model.
+    setActiveView("conversation");
     setLpsOpen(true);
     setJournalCollapsed(false);
     window.setTimeout(() => scrollToTestId("cycle-journal-rail"), 0);
@@ -319,26 +366,31 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {

   /** Shortcut « Historique » — the existing durable history surface. */
   const openHistory = useCallback(() => {
+    setActiveView("conversation");
     setLpsOpen(true);
     window.setTimeout(() => scrollToTestId("project-history-panel"), 0);
   }, [scrollToTestId]);

-  /** Tab « Aperçu » — brings the project context panel into view. */
+  /** Tab « Aperçu » — real object-native orientation projection (not scroll-only). */
   const openOverview = useCallback(() => {
-    setLpsOpen(true);
-    window.setTimeout(() => scrollToTestId("project-lps-column"), 0);
-  }, [scrollToTestId]);
+    setActiveView("overview");
+    // Keep the optional context sheet closed by default so Aperçu remains the
+    // main projection (especially on mobile, where the sheet would cover it).
+    setLpsOpen(false);
+  }, []);

-  /** Tab « Exécution » — jumps to the governed execution cards already in the conversation. */
+  /** Tab « Exécution » — real governed-execution projection (not scroll-only). */
   const openExecution = useCallback(() => {
-    for (const id of [
-      "project-assistant-f3-contract",
-      "project-assistant-f3-prepare",
-      "project-assistant-panel",
-    ]) {
-      if (scrollToTestId(id)) return;
-    }
-  }, [scrollToTestId]);
+    setActiveView("execution");
+    setLpsOpen(false);
+  }, []);
+
+  const handleExecutionPresentationChange = useCallback(
+    (presentation: PilotExecutionPresentation) => {
+      setExecutionPresentation(presentation);
+    },
+    [],
+  );

   if (!result) {
     return (
@@ -397,15 +449,19 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
   const nextAction = lpsNextAction(success.readiness.status);
   const decisionCount = attention.some((a) => a.key === "decision") ? 1 : 0;
   const reserveCount = lifecycle?.reservationSummary?.activeCount ?? 0;
-  const executionAvailable = Boolean(
-    controller.f3Prepare ||
-      controller.f3M3Resolved ||
-      controller.f3Execute ||
-      controller.durableEvidenceOutcome,
-  );
+  const executionBadge =
+    executionPresentation != null
+      ? deriveExecutionTabBadge(executionPresentation)
+      : null;
+  /** Overview owns its composition — no permanent sibling context rail. */
+  const showContextRail = activeView !== "overview";

   return (
-    <div className={styles.root} data-testid="project-principal">
+    <div
+      className={styles.root}
+      data-testid="project-principal"
+      data-active-view={activeView}
+    >
       <div
         className={styles.globalHeader}
         data-testid="project-global-header"
@@ -450,29 +506,32 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
                 ) : null}
               </>
             ) : null}
-            <button
-              type="button"
-              className={styles.lpsToggle}
-              data-testid="lps-drawer-toggle"
-              aria-expanded={lpsOpen}
-              onClick={() => setLpsOpen((open) => !open)}
-            >
-              {lpsOpen
-                ? "Masquer l'état et la trajectoire"
-                : "État du projet / Trajectoire"}
-            </button>
+            {showContextRail ? (
+              <button
+                type="button"
+                className={styles.lpsToggle}
+                data-testid="lps-drawer-toggle"
+                aria-expanded={lpsOpen}
+                onClick={() => setLpsOpen((open) => !open)}
+              >
+                {lpsOpen
+                  ? "Masquer l'état et la trajectoire"
+                  : "État du projet / Trajectoire"}
+              </button>
+            ) : null}
           </div>
         </div>
         <nav
           className={styles.tabs}
           aria-label="Vues du projet"
           data-testid="project-tabs"
+          data-active-view={activeView}
         >
           <button
             type="button"
             className={styles.tab}
-            data-selected="true"
-            aria-current="true"
+            data-selected={activeView === "conversation" ? "true" : "false"}
+            aria-current={activeView === "conversation" ? "true" : undefined}
             data-testid="project-tab-conversation"
             onClick={focusConversation}
           >
@@ -481,7 +540,8 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
           <button
             type="button"
             className={styles.tab}
-            data-selected="false"
+            data-selected={activeView === "overview" ? "true" : "false"}
+            aria-current={activeView === "overview" ? "true" : undefined}
             data-testid="project-tab-overview"
             onClick={openOverview}
           >
@@ -490,76 +550,117 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
           <button
             type="button"
             className={styles.tab}
-            data-selected="false"
+            data-selected={activeView === "execution" ? "true" : "false"}
+            aria-current={activeView === "execution" ? "true" : undefined}
             data-testid="project-tab-execution"
-            disabled={!executionAvailable}
-            aria-disabled={!executionAvailable}
-            title={
-              executionAvailable
-                ? undefined
-                : "Aucune exécution à afficher pour l’instant"
-            }
             onClick={openExecution}
           >
             Exécution
+            {executionBadge != null ? (
+              <span
+                className={styles.tabBadge}
+                data-testid="project-tab-execution-badge"
+              >
+                {executionBadge}
+              </span>
+            ) : null}
           </button>
         </nav>
       </header>

-      <div className={styles.layout} data-testid="project-workspace-layout">
+      <div
+        className={[
+          styles.layout,
+          activeView === "overview" ? styles.layoutOverview : "",
+        ]
+          .filter(Boolean)
+          .join(" ")}
+        data-testid="project-workspace-layout"
+        data-layout={activeView === "overview" ? "overview" : "split"}
+      >
         <div className={styles.main} ref={conversationRef}>
-          <div className={styles.focusBar} data-testid="project-focus-bar">
-            <span className={styles.focusLabel}>
-              <span className={styles.focusDot} aria-hidden />
-              Focus actuel
-            </span>
-            <span className={styles.focusTitle}>
-              {focusTopic ??
-                (lifecycle?.selectedCycleInstanceId
-                  ? cycleSummary.label
-                  : "Conversation avec Nora")}
-            </span>
-            <span className={styles.focusCounts}>
-              {decisionCount > 0 ? (
-                <span className={styles.focusCount}>1 décision</span>
-              ) : null}
-              {reserveCount > 0 ? (
-                <span className={styles.focusCount}>
-                  {reserveCount} réserve{reserveCount > 1 ? "s" : ""}
+          {activeView === "conversation" ? (
+            <>
+              <div className={styles.focusBar} data-testid="project-focus-bar">
+                <span className={styles.focusLabel}>
+                  <span className={styles.focusDot} aria-hidden />
+                  Focus actuel
                 </span>
+                <span className={styles.focusTitle}>
+                  {focusTopic ??
+                    (lifecycle?.selectedCycleInstanceId
+                      ? cycleSummary.label
+                      : "Conversation avec Nora")}
+                </span>
+                <span className={styles.focusCounts}>
+                  {decisionCount > 0 ? (
+                    <span className={styles.focusCount}>1 décision</span>
+                  ) : null}
+                  {reserveCount > 0 ? (
+                    <span className={styles.focusCount}>
+                      {reserveCount} réserve{reserveCount > 1 ? "s" : ""}
+                    </span>
+                  ) : null}
+                </span>
+              </div>
+
+              {continuity.kind === "restored_hint" ? (
+                <p
+                  className={styles.durabilityHint}
+                  data-testid="project-auto-resume-hint"
+                >
+                  {continuity.message}
+                </p>
+              ) : null}
+              {continuity.kind === "transcript_unavailable" ? (
+                <RecoverySurface
+                  message={continuity.message}
+                  onRetryTranscript={() => {
+                    void controller.refreshConversationContinuity();
+                  }}
+                />
               ) : null}
-            </span>
-          </div>

-          {continuity.kind === "restored_hint" ? (
-            <p
-              className={styles.durabilityHint}
-              data-testid="project-auto-resume-hint"
-            >
-              {continuity.message}
-            </p>
+              <div
+                className={styles.conversation}
+                data-testid="project-conversation-main"
+              >
+                <ConversationSurface
+                  controller={controller}
+                  onConfirmReservationResolve={confirmReservationResolution}
+                  reservationConfirmBusyId={reservationBusyId}
+                />
+              </div>
+            </>
           ) : null}
-          {continuity.kind === "transcript_unavailable" ? (
-            <RecoverySurface
-              message={continuity.message}
-              onRetryTranscript={() => {
-                void controller.refreshConversationContinuity();
-              }}
+
+          {activeView === "overview" ? (
+            <OverviewSurface
+              projectId={projectId}
+              projectName={success.project.name}
+              cycle={cycleSummary}
+              focus={nextAction}
+              focusTopic={focusTopic}
+              currentness={currentness}
+              trajectory={trajectoryNodes}
+              attention={attention}
+              onOpenConversation={focusConversation}
+              onOpenJournal={openJournal}
+              onOpenHistory={openHistory}
             />
           ) : null}

-          <div
-            className={styles.conversation}
-            data-testid="project-conversation-main"
-          >
-            <ConversationSurface
-              controller={controller}
-              onConfirmReservationResolve={confirmReservationResolution}
-              reservationConfirmBusyId={reservationBusyId}
+          {activeView === "execution" ? (
+            <ExecutionSurface
+              projectId={projectId}
+              onReturnToConversation={focusConversation}
+              onPresentationChange={handleExecutionPresentationChange}
+              onDurableFactsChanged={notifyDurableFactsChanged}
             />
-          </div>
+          ) : null}
         </div>

+        {showContextRail ? (
         <aside
           className={[
             styles.lpsColumn,
@@ -704,6 +805,7 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
             onOpenHistory={openHistory}
           />
         </aside>
+        ) : null}
       </div>
     </div>
   );
```

### 15b. ProjectWorkspacePage.module.css diff (complete)
```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
index 98b89e32..29e5e55a 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
@@ -290,6 +290,22 @@
   background: var(--pm6-ink);
 }

+.tabBadge {
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  min-width: 16px;
+  height: 16px;
+  margin-left: 6px;
+  padding: 0 4px;
+  border-radius: var(--pm6-radius-pill);
+  background: var(--pm6-danger);
+  color: #fff;
+  font-size: 0.625rem;
+  font-weight: 700;
+  line-height: 1;
+}
+
 .tab:disabled,
 .tab[aria-disabled="true"] {
   color: var(--pm6-muted-ghost);
@@ -317,6 +333,11 @@
   background: var(--pm6-body);
 }

+/* Aperçu owns principal width — no permanent sibling context rail. */
+.layoutOverview {
+  grid-template-columns: minmax(0, 1fr);
+}
+
 .main {
   display: flex;
   flex-direction: column;
@@ -518,6 +539,10 @@
     grid-template-columns: minmax(0, 1fr) var(--ws-context-w);
   }

+  .layoutOverview {
+    grid-template-columns: minmax(0, 1fr);
+  }
+
   .lpsColumn {
     position: sticky;
     top: var(--ws-global-h);
@@ -526,7 +551,7 @@
     max-height: calc(100vh - var(--ws-global-h));
   }

-  /* Always visible alongside the conversation. */
+  /* Always visible alongside the conversation / exécution. */
   .lpsClosed,
   .lpsOpen {
     display: flex;
@@ -630,12 +655,61 @@
 }

 @media (max-width: 767px) {
-  .lpsToggle {
-    width: 100%;
+  /*
+   * B2 — shared mobile Project shell (P3 192:2 / 190:337):
+   * brand/user (ProductShell) → project title → subtitle → tabs → surface.
+   * Desktop chrome (breadcrumb, freshness badge, chip cluster, LPS pill)
+   * leaves the main vertical flow; facts remain reachable via Aperçu.
+   */
+  .globalHeader {
+    display: none;
+  }
+
+  .projectHeader {
+    min-height: 0;
+    padding-top: 12px;
+    gap: var(--pm6-space-2);
+  }
+
+  .projectHeaderRow {
+    flex-direction: column;
+    gap: 4px;
+  }
+
+  .projectHeaderText {
+    flex: 1 1 auto;
+  }
+
+  .projectTitle {
+    font-size: 1.25rem;
+    line-height: 1.2;
+  }
+
+  .projectObjective {
+    -webkit-line-clamp: 2;
+    font-size: 0.8125rem;
   }

   .projectChips {
-    width: 100%;
+    display: none;
+  }
+
+  .tabs {
+    gap: var(--pm6-space-4);
+  }
+
+  .tab {
+    min-height: 38px;
+    padding: 10px 0 12px;
+    font-size: 0.875rem;
+  }
+
+  .lpsToggle {
+    display: none;
+  }
+
+  .focusBar {
+    display: none;
   }
 }

```

### 15c. ExecutionSurface.tsx (complete file)
```tsx
"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  w2AuthorizeExecutionContractAction,
  w2ConfirmExecutionContractAction,
  w2DeriveGovernedExecutionContinuityAction,
  w2InspectExecutionContractAction,
  w2ReadCurrentGovernedExecutionContinuityAction,
  w2ReconcileGovernedExecutionAction,
} from "@/features/project-assistant/w2/actions";
import type { GovernedExecutionContinuityProjection } from "@/features/project-assistant/w2/deriveGovernedExecutionContinuityProjection";
import type { CurrentGovernedExecutionContinuityResult } from "@/features/project-assistant/w2/types";
import {
  presentPilotExecution,
  type PilotExecutionPresentation,
} from "./pilotExecutionPresentation";
import styles from "./ExecutionSurface.module.css";

export type ExecutionSurfaceProps = {
  projectId: string;
  onReturnToConversation: () => void;
  onPresentationChange?: (presentation: PilotExecutionPresentation) => void;
  onDurableFactsChanged?: () => void;
};

type ContinuityLoad =
  | { readonly ok: true; readonly projection: GovernedExecutionContinuityProjection }
  | { readonly ok: false; readonly code: string; readonly message: string }
  | null;

/**
 * P5-S03 Exécution — durable Product continuity + W2 governed actions.
 *
 * Authority path (restart-safe):
 *   w2ReadCurrent… / w2Derive…
 *   → Confirm via w2ConfirmExecutionContractAction (no Attempt)
 *   → Execute via authorize + reconciler intent=execute
 *
 * Conversation process-local F3 state is NEVER the authority oracle.
 */
export function ExecutionSurface({
  projectId,
  onReturnToConversation,
  onPresentationChange,
  onDurableFactsChanged,
}: ExecutionSurfaceProps) {
  const [continuity, setContinuity] = useState<ContinuityLoad>(null);
  const [preExec, setPreExec] =
    useState<CurrentGovernedExecutionContinuityResult | null>(null);
  const [expandedWork, setExpandedWork] = useState(false);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refreshExecutionContinuity = useCallback(async () => {
    const [derived, current] = await Promise.all([
      w2DeriveGovernedExecutionContinuityAction({ projectId }),
      w2ReadCurrentGovernedExecutionContinuityAction({ projectId }),
    ]);
    setContinuity(derived);
    setPreExec(current.ok ? current : null);
    return { derived, current };
  }, [projectId]);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    void refreshExecutionContinuity().finally(() => {
      if (!cancelled) setLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, [refreshExecutionContinuity]);

  const presentation = useMemo(
    () =>
      presentPilotExecution({
        continuityProjection: continuity,
        preExecutionContinuity: preExec,
        actionsBusy: busy,
      }),
    [continuity, preExec, busy],
  );

  const lastNotifiedKey = useRef<string | null>(null);
  useEffect(() => {
    const key = `${presentation.status}|${presentation.stage}|${presentation.cta.kind}|${presentation.cta.kind !== "none" && "enabled" in presentation.cta ? presentation.cta.enabled : ""}`;
    if (lastNotifiedKey.current === key) return;
    lastNotifiedKey.current = key;
    onPresentationChange?.(presentation);
  }, [presentation, onPresentationChange]);

  const resolveContractId = useCallback((): {
    executionContractId: string;
    expectedVersion?: number;
  } | null => {
    if (
      preExec &&
      preExec.ok &&
      preExec.kind === "active" &&
      preExec.contract.executionContractId
    ) {
      return {
        executionContractId: preExec.contract.executionContractId,
        expectedVersion: preExec.contract.version,
      };
    }
    const id =
      continuity && continuity.ok
        ? continuity.projection.executionContractId
        : null;
    if (!id) return null;
    const version =
      continuity && continuity.ok
        ? continuity.projection.executionContractVersion
        : null;
    return {
      executionContractId: id,
      expectedVersion: version ?? undefined,
    };
  }, [preExec, continuity]);

  const handleConfirm = useCallback(async () => {
    const target = resolveContractId();
    if (!target) {
      setError("Aucun contrat d’exécution durable à confirmer.");
      return;
    }
    setBusy(true);
    setError(null);
    try {
      // Ensure inspection is current before confirmation (fail closed).
      const inspected = await w2InspectExecutionContractAction({
        projectId,
        executionContractId: target.executionContractId,
        expectedVersion: target.expectedVersion,
      });
      if (!inspected.ok) {
        setError(inspected.message);
        await refreshExecutionContinuity();
        return;
      }
      if (!inspected.inspectionSufficient) {
        setError(
          "Inspection insuffisante — confirmation refusée jusqu’à actualisation.",
        );
        await refreshExecutionContinuity();
        return;
      }

      const confirmed = await w2ConfirmExecutionContractAction({
        projectId,
        executionContractId: target.executionContractId,
      });
      if (!confirmed.ok) {
        setError(confirmed.message);
        await refreshExecutionContinuity();
        return;
      }
      // CONFIRM != EXECUTE — never call authorize/reconcile here.
      await refreshExecutionContinuity();
      onDurableFactsChanged?.();
    } finally {
      setBusy(false);
    }
  }, [
    projectId,
    resolveContractId,
    refreshExecutionContinuity,
    onDurableFactsChanged,
  ]);

  const handleExecute = useCallback(async () => {
    const target = resolveContractId();
    if (!target) {
      setError("Aucun contrat d’exécution durable à exécuter.");
      return;
    }
    setBusy(true);
    setError(null);
    try {
      // Fresh durable reread before any mutation.
      const { current } = await refreshExecutionContinuity();
      const active =
        current.ok && current.kind === "active" ? current : null;
      if (!active) {
        setError("Contrat durable introuvable après relecture.");
        return;
      }
      if (active.contract.status === "confirmation_required") {
        setError(
          "Confirmation encore requise — Exécuter refuse d’agir.",
        );
        return;
      }

      if (!active.inspection.inspectionSufficient) {
        const inspected = await w2InspectExecutionContractAction({
          projectId,
          executionContractId: active.contract.executionContractId,
          expectedVersion: active.contract.version,
        });
        if (!inspected.ok || !inspected.inspectionSufficient) {
          setError(
            inspected.ok
              ? "Inspection insuffisante — exécution refusée."
              : inspected.message,
          );
          await refreshExecutionContinuity();
          return;
        }
      }

      const auth = await w2AuthorizeExecutionContractAction({
        projectId,
        executionContractId: active.contract.executionContractId,
      });
      if (!auth.ok) {
        setError(auth.message);
        await refreshExecutionContinuity();
        return;
      }
      if (auth.outcome !== "AUTHORIZED" || auth.executionEligible !== true) {
        setError(
          auth.executionEligibilityReasonCode ||
            "Autorisation insuffisante — exécution refusée.",
        );
        await refreshExecutionContinuity();
        return;
      }

      const reconciled = await w2ReconcileGovernedExecutionAction({
        projectId,
        executionContractId: active.contract.executionContractId,
        intent: "execute",
      });
      if (!reconciled.ok) {
        setError(reconciled.message);
      }
      await refreshExecutionContinuity();
      onDurableFactsChanged?.();
    } finally {
      setBusy(false);
    }
  }, [
    projectId,
    resolveContractId,
    refreshExecutionContinuity,
    onDurableFactsChanged,
  ]);

  const workItems = expandedWork
    ? presentation.workItems
    : presentation.workItems.slice(0, 4);

  if (loading) {
    return (
      <div className={styles.root} data-testid="project-execution-surface">
        <p className={styles.empty}>Lecture de l’exécution…</p>
      </div>
    );
  }

  if (presentation.empty) {
    return (
      <div className={styles.root} data-testid="project-execution-surface">
        <header className={styles.head}>
          <div>
            <p className={styles.eyebrow}>Exécution</p>
            <h2 className={styles.title}>{presentation.title}</h2>
            <p className={styles.subtitle}>{presentation.subtitle}</p>
          </div>
          <span className={styles.chip} data-tone={presentation.tone}>
            {presentation.statusLabel}
          </span>
        </header>
        <p className={styles.empty} data-testid="project-execution-empty">
          Aucun contrat d’exécution courant. L’onglet reste disponible sans
          inventer d’état.
        </p>
        <div className={styles.footer}>
          <button
            type="button"
            className={styles.primaryButton}
            data-testid="project-execution-return"
            onClick={onReturnToConversation}
          >
            Revenir à la conversation
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={styles.root}
      data-testid="project-execution-surface"
      data-status={presentation.status}
      data-stage={presentation.stage}
    >
      <header className={styles.head}>
        <div>
          <p className={styles.eyebrow}>Exécution</p>
          <h2 className={styles.title} data-testid="project-execution-title">
            {presentation.title}
          </h2>
          <p className={styles.subtitle}>{presentation.subtitle}</p>
        </div>
        <span
          className={styles.chip}
          data-tone={presentation.tone}
          data-testid="project-execution-status"
        >
          {presentation.statusLabel}
        </span>
      </header>

      <section className={styles.metrics} aria-label="Faits d’exécution">
        <div className={styles.metric}>
          <p className={styles.metricLabel}>État</p>
          <p className={styles.metricValue}>{presentation.statusLabel}</p>
          {presentation.stateDetail ? (
            <p className={styles.metricDetail}>{presentation.stateDetail}</p>
          ) : null}
          {presentation.failureCause === "timeout" ? (
            <p className={styles.metricDetail}>Cause : délai dépassé</p>
          ) : null}
        </div>
        <div className={styles.metric}>
          <p className={styles.metricLabel}>Portée</p>
          <p className={styles.metricValue}>
            {presentation.scopeDetail ?? "Selon le contrat"}
          </p>
        </div>
        <div className={styles.metric}>
          <p className={styles.metricLabel}>Impact prévu</p>
          <p className={styles.metricValue}>
            {presentation.impactDetail ?? "Borné au contrat"}
          </p>
        </div>
        <div className={styles.metric}>
          <p className={styles.metricLabel}>Réversibilité</p>
          <p className={styles.metricValue}>
            {presentation.reversibilityDetail ?? "Selon le contrat"}
          </p>
        </div>
      </section>

      {presentation.resultTitle ? (
        <section
          className={styles.result}
          data-testid="project-execution-result"
          aria-labelledby="execution-result-title"
        >
          <div className={styles.resultHead}>
            <h3 className={styles.sectionTitle} id="execution-result-title">
              Résultat
            </h3>
            {presentation.resultVerified ? (
              <span className={styles.chip} data-tone="ok">
                Vérifié
              </span>
            ) : null}
          </div>
          <p className={styles.resultTitle}>{presentation.resultTitle}</p>
          {presentation.resultBody ? (
            <p className={styles.resultBody}>{presentation.resultBody}</p>
          ) : null}
        </section>
      ) : null}

      <section
        className={styles.section}
        aria-labelledby="execution-work-title"
        data-testid="project-execution-work"
      >
        <h3 className={styles.sectionTitle} id="execution-work-title">
          {presentation.status === "terminee" ||
          presentation.status === "echouee" ||
          presentation.status === "arretee"
            ? "Ce qui a été fait"
            : "Ce qui va être fait"}
        </h3>
        {workItems.length === 0 ? (
          <p className={styles.empty}>Aucun détail d’éléments disponible.</p>
        ) : (
          <ul className={styles.workList}>
            {workItems.map((item) => (
              <li key={item.id} className={styles.workItem}>
                <span className={styles.workLabel}>{item.label}</span>
                <span className={styles.workState}>{item.stateLabel}</span>
              </li>
            ))}
          </ul>
        )}
        {presentation.workItemsCollapsed && !expandedWork ? (
          <button
            type="button"
            className={styles.moreLink}
            onClick={() => setExpandedWork(true)}
          >
            Voir les {presentation.workItemsTotal} éléments →
          </button>
        ) : null}
      </section>

      {presentation.evidenceAvailable ? (
        <section
          className={styles.section}
          aria-labelledby="execution-evidence-title"
          data-testid="project-execution-evidence"
        >
          <h3 className={styles.sectionTitle} id="execution-evidence-title">
            Preuves associées
          </h3>
          <p className={styles.empty}>
            Les preuves soutiennent le résultat — elles ne le remplacent pas.
          </p>
          <ul className={styles.evidenceList}>
            {presentation.evidenceItems.map((item) => (
              <li key={item.id} className={styles.evidenceItem}>
                <span className={styles.evidenceLabel}>{item.label}</span>
                <span className={styles.evidenceState}>{item.stateLabel}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {presentation.attentionNote ? (
        <p className={styles.attention} data-testid="project-execution-attention">
          {presentation.attentionNote}
        </p>
      ) : null}

      {error ? (
        <p className={styles.attention} role="alert" data-testid="project-execution-error">
          {error}
        </p>
      ) : null}

      <div className={styles.footer}>
        {presentation.cta.kind === "confirm" ? (
          <button
            type="button"
            className={styles.primaryButton}
            data-testid="project-execution-confirm"
            disabled={!presentation.cta.enabled}
            onClick={() => {
              void handleConfirm();
            }}
          >
            {busy ? "Confirmation…" : presentation.cta.label}
          </button>
        ) : null}
        {presentation.cta.kind === "execute" ? (
          <button
            type="button"
            className={styles.primaryButton}
            data-testid="project-execution-execute"
            disabled={!presentation.cta.enabled}
            onClick={() => {
              void handleExecute();
            }}
          >
            {busy ? "Exécution…" : presentation.cta.label}
          </button>
        ) : null}
        {presentation.cta.kind === "return_conversation" ||
        presentation.cta.kind === "none" ? (
          <button
            type="button"
            className={styles.primaryButton}
            data-testid="project-execution-return"
            onClick={onReturnToConversation}
          >
            Revenir à la conversation
          </button>
        ) : null}
      </div>
    </div>
  );
}
```

### 15d. pilotExecutionPresentation.ts (complete file)
```ts
/**
 * P5-S03 — presentation-only adapter:
 * GovernedExecutionContinuityProjection (+ optional pre-exec continuity)
 * → PilotExecutionPresentation.
 *
 * No persistence. No new Product enums. Unknown → fail-closed / unavailable.
 * Prefer this over UI-local phase inference.
 */
import type {
  GovernedExecutionContinuityProjection,
  GovernedExecutionContinuityStage,
} from "@/features/project-assistant/w2/deriveGovernedExecutionContinuityProjection";
import type { CurrentGovernedExecutionContinuityResult } from "@/features/project-assistant/w2/types";
import {
  presentPilotContract,
  type PilotContractPresentation,
} from "./pilotContractPresentation";

/** P3 Pilot-facing execution statuses — never expose internal stage codes. */
export type PilotExecutionStatus =
  | "a_confirmer"
  | "prete"
  | "en_cours"
  | "terminee"
  | "echouee"
  | "arretee"
  | "indisponible"
  | "vide";

export type PilotExecutionTone =
  | "neutral"
  | "ready"
  | "running"
  | "ok"
  | "danger"
  | "warn";

export type PilotExecutionCta =
  | { readonly kind: "none" }
  | { readonly kind: "confirm"; readonly label: string; readonly enabled: boolean }
  | { readonly kind: "execute"; readonly label: string; readonly enabled: boolean }
  | {
      readonly kind: "return_conversation";
      readonly label: string;
      readonly enabled: true;
    };

export type PilotExecutionWorkItem = {
  readonly id: string;
  readonly label: string;
  readonly stateLabel: string;
};

export type PilotExecutionEvidenceItem = {
  readonly id: string;
  readonly label: string;
  readonly stateLabel: string;
};

export type PilotExecutionPresentation = {
  readonly status: PilotExecutionStatus;
  readonly statusLabel: string;
  readonly tone: PilotExecutionTone;
  readonly title: string;
  readonly subtitle: string;
  readonly stateDetail: string | null;
  readonly scopeLabel: string | null;
  readonly scopeDetail: string | null;
  readonly impactLabel: string | null;
  readonly impactDetail: string | null;
  readonly reversibilityLabel: string | null;
  readonly reversibilityDetail: string | null;
  readonly attentionNote: string | null;
  readonly workItems: readonly PilotExecutionWorkItem[];
  readonly workItemsTotal: number;
  readonly workItemsCollapsed: boolean;
  readonly resultTitle: string | null;
  readonly resultBody: string | null;
  readonly resultVerified: boolean;
  readonly evidenceItems: readonly PilotExecutionEvidenceItem[];
  readonly evidenceAvailable: boolean;
  /** Distinct from Result — never promote Evidence as Result. */
  readonly evidenceIsNotResult: true;
  readonly cta: PilotExecutionCta;
  readonly contractPresentation: PilotContractPresentation | null;
  readonly stage: GovernedExecutionContinuityStage | "NONE" | "UNAVAILABLE";
  readonly attemptStatus: string | null;
  readonly failureCause: string | null;
  readonly empty: boolean;
};

const WORK_PREVIEW_LIMIT = 4;

function statusLabelFor(status: PilotExecutionStatus): string {
  switch (status) {
    case "a_confirmer":
      return "À confirmer";
    case "prete":
      return "Prête à exécuter";
    case "en_cours":
      return "En cours";
    case "terminee":
      return "Terminée";
    case "echouee":
      return "Échouée";
    case "arretee":
      return "Arrêtée";
    case "indisponible":
      return "Indisponible";
    case "vide":
      return "Aucune exécution";
  }
}

function toneFor(status: PilotExecutionStatus): PilotExecutionTone {
  switch (status) {
    case "prete":
      return "ready";
    case "en_cours":
      return "running";
    case "terminee":
      return "ok";
    case "echouee":
      return "danger";
    case "a_confirmer":
    case "arretee":
      return "warn";
    default:
      return "neutral";
  }
}

function mapTerminalAttempt(
  attemptStatus: string | null,
): Pick<
  PilotExecutionPresentation,
  "status" | "failureCause"
> {
  if (attemptStatus === "cancelled") {
    return { status: "arretee", failureCause: null };
  }
  if (attemptStatus === "timeout") {
    return { status: "echouee", failureCause: "timeout" };
  }
  if (attemptStatus === "failed") {
    return { status: "echouee", failureCause: "failed" };
  }
  if (attemptStatus === "succeeded") {
    return { status: "terminee", failureCause: null };
  }
  // Unknown terminal-ish → fail closed (not a fake success).
  return { status: "indisponible", failureCause: attemptStatus };
}

function contractTitle(
  continuity: CurrentGovernedExecutionContinuityResult | null,
  projection: GovernedExecutionContinuityProjection | null,
  contractPresentation: PilotContractPresentation | null,
): string {
  if (contractPresentation?.nowTitle) return contractPresentation.nowTitle;
  const action =
    continuity && continuity.ok && continuity.kind === "active"
      ? continuity.contract.action
      : projection?.context?.executionContract?.action;
  if (action?.includes("docs_write")) {
    return "Écriture documentaire préparée";
  }
  if (projection?.context?.executionContract?.objective?.trim()) {
    return projection.context.executionContract.objective.trim();
  }
  return "Action préparée";
}

function buildWorkItems(
  projection: GovernedExecutionContinuityProjection | null,
  terminal: boolean,
): {
  items: PilotExecutionWorkItem[];
  total: number;
  collapsed: boolean;
} {
  const summaries =
    projection?.context?.executionReview.reviewItemSummaries ?? [];
  const total = summaries.length;
  const sliced = summaries.slice(0, WORK_PREVIEW_LIMIT);
  const items = sliced.map((item) => ({
    id: item.itemId,
    label: item.label || item.kind,
    stateLabel: terminal ? "Terminé" : "Prévu",
  }));
  if (items.length === 0 && projection?.context?.executionContract) {
    return {
      items: [
        {
          id: "contract-action",
          label: terminal
            ? "Action exécutée dans la portée du contrat"
            : "Action prévue dans la portée du contrat",
          stateLabel: terminal ? "Terminé" : "Prévu",
        },
      ],
      total: 1,
      collapsed: false,
    };
  }
  return {
    items,
    total: total || items.length,
    collapsed: total > WORK_PREVIEW_LIMIT,
  };
}

function buildEvidenceItems(
  projection: GovernedExecutionContinuityProjection | null,
): PilotExecutionEvidenceItem[] {
  if (!projection) return [];
  const items: PilotExecutionEvidenceItem[] = [];
  if (projection.evidenceId) {
    const evidenceStatus = projection.context?.evidence
      ? projection.context.evidence.status
      : null;
    items.push({
      id: projection.evidenceId,
      label: "Preuve d’exécution associée",
      stateLabel: evidenceStatus === "verified" ? "Vérifiée" : "Disponible",
    });
  }
  // ReviewBundle is internal — never expose raw RB as Pilot Evidence card.
  return items;
}

export type PresentPilotExecutionInput = {
  readonly continuityProjection:
    | { readonly ok: true; readonly projection: GovernedExecutionContinuityProjection }
    | { readonly ok: false; readonly code: string; readonly message: string }
    | null;
  readonly preExecutionContinuity: CurrentGovernedExecutionContinuityResult | null;
  /**
   * Presentation-only busy/disable. Eligibility itself is derived from durable
   * continuity / inspection — never from Conversation process-local F3 state.
   */
  readonly actionsBusy?: boolean;
};

/**
 * Pure mapping — exhaustive on known continuity stages; unknown → indisponible.
 */
export function presentPilotExecution(
  input: PresentPilotExecutionInput,
): PilotExecutionPresentation {
  const emptyBase = {
    stateDetail: null,
    scopeLabel: null,
    scopeDetail: null,
    impactLabel: null,
    impactDetail: null,
    reversibilityLabel: null,
    reversibilityDetail: null,
    attentionNote: null,
    workItems: [] as PilotExecutionWorkItem[],
    workItemsTotal: 0,
    workItemsCollapsed: false,
    resultTitle: null,
    resultBody: null,
    resultVerified: false,
    evidenceItems: [] as PilotExecutionEvidenceItem[],
    evidenceAvailable: false,
    evidenceIsNotResult: true as const,
    contractPresentation: null,
    attemptStatus: null,
    failureCause: null,
  };

  if (!input.continuityProjection) {
    return {
      ...emptyBase,
      status: "vide",
      statusLabel: statusLabelFor("vide"),
      tone: "neutral",
      title: "Aucune exécution en cours",
      subtitle:
        "Lorsqu’un contrat d’exécution sera préparé, vous pourrez l’inspecter ici.",
      cta: { kind: "none" },
      stage: "NONE",
      empty: true,
    };
  }

  if (!input.continuityProjection.ok) {
    return {
      ...emptyBase,
      status: "indisponible",
      statusLabel: statusLabelFor("indisponible"),
      tone: "warn",
      title: "Exécution indisponible",
      subtitle: input.continuityProjection.message,
      attentionNote: input.continuityProjection.code,
      cta: { kind: "return_conversation", label: "Revenir à la conversation", enabled: true },
      stage: "UNAVAILABLE",
      empty: false,
    };
  }

  const projection = input.continuityProjection.projection;
  const pre =
    input.preExecutionContinuity &&
    input.preExecutionContinuity.ok &&
    input.preExecutionContinuity.kind === "active"
      ? input.preExecutionContinuity
      : null;

  const contractPresentation = pre
    ? presentPilotContract({
        action: pre.contract.action,
        target: pre.contract.target,
        scope: pre.contract.scope,
        requiredAuthority: pre.contract.requiredAuthority,
        reversibility: pre.contract.reversibility,
        targetPath: pre.contract.inspectionDisclosure?.targetPath ?? null,
        targetRepositoryRef:
          pre.contract.inspectionDisclosure?.targetRepositoryRef ?? null,
      })
    : null;

  const title = contractTitle(input.preExecutionContinuity, projection, contractPresentation);
  const scopeLabel = pre?.contract.scope ?? null;
  const reversibilityLabel =
    contractPresentation?.reversibilityLabel ??
    (pre?.contract.reversibility === "reversible"
      ? "Réversible"
      : pre?.contract.reversibility
        ? pre.contract.reversibility
        : null);

  const confirmationRequired =
    projection.executionContractStatus === "confirmation_required" ||
    pre?.contract.status === "confirmation_required" ||
    (pre?.contract.effectConfirmationRequired === true &&
      pre.contract.status !== "confirmed");

  const confirmationSatisfied =
    pre?.contract.status === "confirmed" ||
    projection.executionContractStatus === "confirmed" ||
    projection.executionContractStatus === "validated";

  /** Durable inspection — never Conversation F3 state. */
  const inspectionSufficient =
    pre?.inspection.inspectionSufficient === true ||
    // When only continuity projection is available post-confirm, allow CTA
    // presentation; final authority remains server-side on click.
    (pre == null && Boolean(projection.executionContractId));

  const busy = input.actionsBusy === true;
  const stage = projection.stage;

  // PRE / early stages
  if (
    stage === "PRE_EXECUTION" ||
    (stage === "ATTEMPT_ACCEPTED" && !projection.attemptStatus)
  ) {
    if (!projection.executionContractId && !pre) {
      return {
        ...emptyBase,
        status: "vide",
        statusLabel: statusLabelFor("vide"),
        tone: "neutral",
        title: "Aucune exécution en cours",
        subtitle:
          "Aucune action préparée pour ce projet. La conversation reste le point d’entrée.",
        cta: { kind: "none" },
        stage,
        empty: true,
      };
    }

    const work = buildWorkItems(projection, false);
    const needsConfirm = confirmationRequired && !confirmationSatisfied;
    const status: PilotExecutionStatus = needsConfirm ? "a_confirmer" : "prete";
    const durableActionable = Boolean(
      (pre?.contract.executionContractId || projection.executionContractId) &&
        inspectionSufficient,
    );
    const cta: PilotExecutionCta = needsConfirm
      ? {
          kind: "confirm",
          label: "Confirmer",
          enabled: durableActionable && !busy,
        }
      : {
          kind: "execute",
          label: "Exécuter",
          enabled: durableActionable && !needsConfirm && !busy,
        };

    return {
      ...emptyBase,
      status,
      statusLabel: statusLabelFor(status),
      tone: toneFor(status),
      title,
      subtitle: needsConfirm
        ? "Confirmation requise avant tout effet."
        : "Action préparée · prête à être lancée",
      stateDetail: needsConfirm ? "En attente de confirmation" : "Action préparée",
      scopeLabel: scopeLabel ? "Portée" : null,
      scopeDetail: scopeLabel,
      impactLabel: contractPresentation ? "Impact prévu" : null,
      impactDetail: contractPresentation?.effectSummary ?? null,
      reversibilityLabel: reversibilityLabel ? "Réversibilité" : null,
      reversibilityDetail: reversibilityLabel,
      attentionNote: !inspectionSufficient
        ? "Inspection insuffisante — actualisez le contrat avant d’agir."
        : needsConfirm
          ? "Aucun effet ne sera produit tant que la confirmation n’est pas donnée."
          : "L’action reste limitée à la portée du contrat. Aucun effet hors contrat n’est prévu.",
      workItems: work.items,
      workItemsTotal: work.total,
      workItemsCollapsed: work.collapsed,
      cta,
      contractPresentation,
      stage,
      attemptStatus: projection.attemptStatus,
      empty: false,
    };
  }

  if (stage === "ATTEMPT_ACCEPTED" || stage === "RUNNING") {
    const work = buildWorkItems(projection, false);
    return {
      ...emptyBase,
      status: "en_cours",
      statusLabel: statusLabelFor("en_cours"),
      tone: "running",
      title,
      subtitle: "Exécution en cours — aucun nouvel Exécuter.",
      stateDetail: "En cours",
      scopeLabel: scopeLabel ? "Portée" : null,
      scopeDetail: scopeLabel,
      impactLabel: contractPresentation ? "Impact prévu" : null,
      impactDetail: contractPresentation?.effectSummary ?? null,
      reversibilityLabel: reversibilityLabel ? "Réversibilité" : null,
      reversibilityDetail: reversibilityLabel,
      workItems: work.items,
      workItemsTotal: work.total,
      workItemsCollapsed: work.collapsed,
      // No STOP fabricated — existing runtime stop not wired as Product CTA here.
      cta: { kind: "none" },
      contractPresentation,
      stage,
      attemptStatus: projection.attemptStatus,
      empty: false,
    };
  }

  if (
    stage === "PRODUCT_MATERIALIZATION_PENDING" ||
    stage === "POST_EVIDENCE_PENDING" ||
    stage === "POST_EVIDENCE_COMPLETE"
  ) {
    const terminalMap = mapTerminalAttempt(projection.attemptStatus);
    const work = buildWorkItems(projection, terminalMap.status === "terminee");
    const evidenceItems = buildEvidenceItems(projection);
    const isSuccess = terminalMap.status === "terminee";
    const verdict = projection.productOutcome;

    return {
      ...emptyBase,
      status: terminalMap.status,
      statusLabel: statusLabelFor(terminalMap.status),
      tone: toneFor(terminalMap.status),
      title,
      subtitle: isSuccess
        ? "Dernière action exécutée · résultat disponible"
        : terminalMap.failureCause === "timeout"
          ? "Échouée · cause : délai dépassé"
          : "Résultat terminal disponible",
      stateDetail: statusLabelFor(terminalMap.status),
      scopeLabel: scopeLabel ? "Portée" : null,
      scopeDetail: scopeLabel,
      impactLabel: contractPresentation ? "Impact prévu" : null,
      impactDetail: contractPresentation?.effectSummary ?? null,
      reversibilityLabel: reversibilityLabel ? "Réversibilité" : null,
      reversibilityDetail: reversibilityLabel,
      workItems: work.items,
      workItemsTotal: work.total,
      workItemsCollapsed: work.collapsed,
      resultTitle: isSuccess
        ? "Mise à jour terminée dans la portée prévue"
        : "Résultat d’exécution",
      resultBody: isSuccess
        ? "Le résultat produit est distinct des preuves associées. Une exécution terminée n’implique pas la clôture du Cycle."
        : projection.reason ??
          (verdict ? `Verdict produit : ${verdict}` : "Résultat enregistré."),
      resultVerified: Boolean(projection.evidenceId) && isSuccess,
      evidenceItems,
      evidenceAvailable: evidenceItems.length > 0,
      cta: {
        kind: "return_conversation",
        label: "Revenir à la conversation",
        enabled: true,
      },
      contractPresentation,
      stage,
      attemptStatus: projection.attemptStatus,
      failureCause: terminalMap.failureCause,
      empty: false,
      attentionNote:
        stage === "PRODUCT_MATERIALIZATION_PENDING"
          ? "Résultat technique reçu — matérialisation produit encore en cours."
          : stage === "POST_EVIDENCE_PENDING"
            ? "Résultat disponible — preuves associées encore en cours de finalisation."
            : null,
    };
  }

  if (stage === "RECOVERY_REQUIRED") {
    return {
      ...emptyBase,
      status: "indisponible",
      statusLabel: "À reprendre",
      tone: "warn",
      title: "Reprise requise",
      subtitle:
        projection.reason ??
        "L’état d’exécution nécessite une reprise gouvernée dans la conversation.",
      attentionNote: projection.blockingCode,
      cta: {
        kind: "return_conversation",
        label: "Revenir à la conversation",
        enabled: true,
      },
      contractPresentation,
      stage,
      attemptStatus: projection.attemptStatus,
      empty: false,
    };
  }

  // Exhaustiveness fail-closed
  return {
    ...emptyBase,
    status: "indisponible",
    statusLabel: statusLabelFor("indisponible"),
    tone: "warn",
    title: "État d’exécution non projetable",
    subtitle: "La projection Product n’a pas pu être traduite honnêtement.",
    cta: {
      kind: "return_conversation",
      label: "Revenir à la conversation",
      enabled: true,
    },
    stage: "UNAVAILABLE",
    empty: false,
  };
}

/** Tab badge — only when Product truth honestly justifies attention. */
export function deriveExecutionTabBadge(
  presentation: PilotExecutionPresentation,
): number | null {
  if (
    presentation.status === "a_confirmer" ||
    presentation.status === "prete" ||
    presentation.stage === "RECOVERY_REQUIRED"
  ) {
    return 1;
  }
  return null;
}
```

### 15e. OverviewSurface.tsx (complete file)
```tsx
"use client";

import { useEffect, useState } from "react";
import { w2ReadProjectHistoryAction } from "@/features/project-assistant/w2/actions";
import type { W2ProjectHistoryReadModel } from "@/features/project-assistant/w2/projectHistory";
import type {
  AttentionItem,
  CurrentnessPresentation,
  CycleSummary,
  TrajectoryNode,
} from "../workspaceContextPresentation";
import styles from "./OverviewSurface.module.css";

export type OverviewRecentActivityItem = {
  readonly id: string;
  readonly headline: string;
  readonly detail: string;
  readonly kind: string;
};

function deriveRecentActivity(
  history: W2ProjectHistoryReadModel | null,
): OverviewRecentActivityItem[] {
  if (!history) return [];
  const items: OverviewRecentActivityItem[] = [];

  for (const decision of history.decisions.slice(0, 3)) {
    items.push({
      id: `dec:${decision.decisionId}`,
      kind: "Décision",
      headline: `Décision enregistrée · ${decision.selectedOptionRef}`,
      detail: `${decision.status} · ${decision.actorRole}`,
    });
  }
  for (const version of history.trajectory.versions.slice(0, 2)) {
    if (items.length >= 5) break;
    items.push({
      id: `trj:${version.trajectoryId}:${version.version}`,
      kind: "Trajectoire",
      headline: version.isEffectiveCurrent
        ? "Trajectoire courante actualisée"
        : version.status === "candidate"
          ? "Trajectoire proposée (pas encore décidée)"
          : `Trajectoire v${version.version}`,
      detail: `${version.stepCount} étape${version.stepCount > 1 ? "s" : ""}`,
    });
  }
  for (const contract of history.contracts.slice(0, 2)) {
    if (items.length >= 5) break;
    items.push({
      id: `xct:${contract.executionContractId}`,
      kind: "Exécution",
      headline: `Contrat d’exécution · ${contract.status}`,
      detail: `Version ${contract.version}`,
    });
  }
  return items;
}

export type OverviewSurfaceProps = {
  projectId: string;
  projectName: string;
  cycle: CycleSummary;
  focus: string;
  focusTopic: string | null;
  currentness: CurrentnessPresentation;
  trajectory: TrajectoryNode[];
  attention: AttentionItem[];
  onOpenConversation: () => void;
  onOpenJournal: () => void;
  onOpenHistory: () => void;
};

/**
 * P5-S03 Aperçu — object-native orientation projection (Figma 51:2 composition).
 * Owns its desktop layout: summary strip + main column + Détails du projet.
 * No persistence. No fake Synthesis. Recommendation ≠ Decision.
 */
export function OverviewSurface({
  projectId,
  projectName,
  cycle,
  focus,
  focusTopic,
  currentness,
  trajectory,
  attention,
  onOpenConversation,
  onOpenJournal,
  onOpenHistory,
}: OverviewSurfaceProps) {
  const [history, setHistory] = useState<W2ProjectHistoryReadModel | null>(null);

  useEffect(() => {
    let cancelled = false;
    void w2ReadProjectHistoryAction({ projectId }).then((result) => {
      if (cancelled) return;
      if (result.ok) setHistory(result.history);
      else setHistory(null);
    });
    return () => {
      cancelled = true;
    };
  }, [projectId]);

  const activity = deriveRecentActivity(history);
  const decisionAttention = attention.find((a) => a.key === "decision");
  const reserveAttention = attention.find((a) => a.key === "reserve");
  const reserveCount = reserveAttention
    ? reserveAttention.headline.match(/^\d+/)?.[0] ?? "—"
    : "—";

  return (
    <div className={styles.root} data-testid="project-overview-surface">
      <section
        className={styles.stats}
        aria-label="État du projet"
        data-testid="project-overview-stats"
      >
        <div className={styles.stat}>
          <p className={styles.statLabel}>État du projet</p>
          <p className={styles.statValue}>{cycle.label}</p>
          {cycle.statusLabel ? (
            <p className={styles.statSub}>{cycle.statusLabel}</p>
          ) : null}
        </div>
        <div className={styles.stat}>
          <p className={styles.statLabel}>Priorité</p>
          <p className={styles.statValue} data-testid="project-overview-focus">
            {focusTopic ?? focus}
          </p>
          {focusTopic ? <p className={styles.statSub}>{focus}</p> : null}
        </div>
        <div className={styles.stat}>
          <p className={styles.statLabel}>Décisions</p>
          <p
            className={styles.statValue}
            data-tone={decisionAttention ? "warn" : undefined}
            data-testid="project-overview-decisions"
          >
            {decisionAttention ? "1" : "—"}
          </p>
          <p className={styles.statSub}>
            {decisionAttention ? "à examiner" : "aucune en attente"}
          </p>
        </div>
        <div className={styles.stat}>
          <p className={styles.statLabel}>Réserves</p>
          <p
            className={styles.statValue}
            data-tone={reserveAttention ? "warn" : undefined}
            data-testid="project-overview-reserves"
          >
            {reserveCount}
          </p>
          <p className={styles.statSub}>
            {reserveAttention ? "ouvertes" : "aucune ouverte"}
          </p>
        </div>
        <div className={styles.stat}>
          <p className={styles.statLabel}>Mise à jour</p>
          <p
            className={styles.statValue}
            data-tone={currentness.tone === "ok" ? "ok" : "warn"}
            data-testid="project-overview-currentness"
          >
            {currentness.label}
          </p>
          <p className={styles.statSub}>{currentness.detail}</p>
        </div>
      </section>

      <div className={styles.body}>
        <div className={styles.mainCol}>
          <section
            className={styles.panel}
            aria-labelledby="overview-trajectory-title"
            data-testid="project-overview-trajectory"
          >
            <div className={styles.sectionHead}>
              <div>
                <h2
                  className={styles.sectionTitle}
                  id="overview-trajectory-title"
                >
                  Trajectoire
                </h2>
                <p className={styles.sectionLead}>
                  Passé et présent confirmés · futur recommandé par Nora
                </p>
              </div>
            </div>
            {trajectory.length === 0 ? (
              <p className={styles.empty}>
                Aucun cycle enregistré pour {projectName} pour l’instant.
              </p>
            ) : (
              <ol className={styles.track}>
                {trajectory.map((node) => (
                  <li
                    key={node.key}
                    className={styles.node}
                    data-state={node.state}
                  >
                    <span className={styles.nodeDot} aria-hidden />
                    <span className={styles.nodeName}>C{node.ordinal}</span>
                    <span className={styles.nodeState}>{node.label}</span>
                  </li>
                ))}
              </ol>
            )}
            <p className={styles.empty}>
              « Proposé » désigne une recommandation / candidature — pas un
              cycle décidé automatiquement.
            </p>
          </section>

          <section
            className={styles.panel}
            aria-labelledby="overview-attention-title"
            data-testid="project-overview-attention"
          >
            <div className={styles.sectionHead}>
              <div>
                <h2
                  className={styles.sectionTitle}
                  id="overview-attention-title"
                >
                  Attention
                </h2>
                <p className={styles.sectionLead}>
                  Éléments pouvant faire évoluer le projet
                </p>
              </div>
              <button
                type="button"
                className={styles.nextStepCta}
                onClick={onOpenJournal}
              >
                Journal →
              </button>
            </div>
            {attention.length === 0 ? (
              <p className={styles.empty}>Rien ne demande votre attention.</p>
            ) : (
              <ul className={styles.attentionList}>
                {attention.map((item) => (
                  <li
                    key={item.key}
                    className={styles.attentionItem}
                    data-testid={`project-overview-attention-${item.key}`}
                  >
                    <span className={styles.attentionHead}>{item.headline}</span>
                    <span className={styles.attentionDetail}>{item.detail}</span>
                    <span className={styles.activityMeta}>
                      {item.key === "decision" ? "Décision" : "Réserve"}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section
            className={styles.panel}
            aria-labelledby="overview-activity-title"
            data-testid="project-overview-activity"
          >
            <div className={styles.sectionHead}>
              <h2 className={styles.sectionTitle} id="overview-activity-title">
                Activité récente
              </h2>
              <button
                type="button"
                className={styles.nextStepCta}
                onClick={onOpenHistory}
              >
                Historique →
              </button>
            </div>
            {activity.length === 0 ? (
              <p className={styles.empty}>
                Aucune activité durable significative pour l’instant.
              </p>
            ) : (
              <ul className={styles.activityList}>
                {activity.map((item) => (
                  <li key={item.id} className={styles.activityItem}>
                    <span className={styles.activityHead}>{item.headline}</span>
                    <span className={styles.activityDetail}>{item.detail}</span>
                    <span className={styles.activityMeta}>{item.kind}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>

        <aside
          className={styles.details}
          aria-labelledby="overview-details-title"
          data-testid="project-overview-details"
        >
          <header className={styles.detailsHead}>
            <p className={styles.statLabel}>Détails du projet</p>
            <h2 className={styles.detailsTitle} id="overview-details-title">
              État actuel
            </h2>
          </header>

          <dl className={styles.detailsFacts}>
            <div className={styles.detailsFact}>
              <dt>État</dt>
              <dd>
                {cycle.statusLabel ?? "—"}
                <span className={styles.statSub}>{cycle.label}</span>
              </dd>
            </div>
            <div className={styles.detailsFact}>
              <dt>Cycle actuel</dt>
              <dd>
                {cycle.label}
                {cycle.statusLabel ? (
                  <span className={styles.statSub}>{cycle.statusLabel}</span>
                ) : null}
              </dd>
            </div>
            <div className={styles.detailsFact}>
              <dt>Autorité</dt>
              <dd>
                Pilote
                <span className={styles.statSub}>Décision humaine</span>
              </dd>
            </div>
            <div className={styles.detailsFact}>
              <dt>Mise à jour</dt>
              <dd data-tone={currentness.tone}>
                {currentness.detail}
                <span className={styles.statSub}>{currentness.label}</span>
              </dd>
            </div>
          </dl>

          <div className={styles.detailsKeys}>
            <p className={styles.statLabel}>Éléments clés</p>
            <ul className={styles.keyList}>
              <li>
                <span>Décisions</span>
                <span data-tone={decisionAttention ? "warn" : undefined}>
                  {decisionAttention ? "1" : "—"}
                </span>
              </li>
              <li>
                <span>Réserves</span>
                <span data-tone={reserveAttention ? "warn" : undefined}>
                  {reserveCount}
                </span>
              </li>
              <li>
                <span>Synthèses</span>
                <span>—</span>
              </li>
            </ul>
          </div>

          <section
            className={styles.nextStep}
            aria-labelledby="overview-next-title"
            data-testid="project-overview-next-step"
          >
            <p className={styles.statLabel} id="overview-next-title">
              Prochaine étape importante
            </p>
            <p className={styles.nextStepTitle}>{focusTopic ?? focus}</p>
            <p className={styles.nextStepBody}>
              {decisionAttention
                ? "Une décision structurante attend votre arbitrage dans la conversation."
                : reserveAttention
                  ? "Des réserves ouvertes restent à traiter avec Nora et le Journal."
                  : "Poursuivez le travail dans la conversation — Nora propose, vous décidez."}
            </p>
            <button
              type="button"
              className={styles.nextStepCta}
              data-testid="project-overview-open-work"
              onClick={onOpenConversation}
            >
              Ouvrir le travail en cours →
            </button>
          </section>

          <section
            className={styles.detailsSynth}
            data-testid="project-overview-synthesis"
            aria-labelledby="overview-synthesis-title"
          >
            <h3 className={styles.sectionTitle} id="overview-synthesis-title">
              Synthèses
            </h3>
            <p
              className={styles.empty}
              data-testid="project-overview-synthesis-empty"
            >
              Aucune synthèse produit n’est encore disponible. Elle n’est pas
              inventée depuis la conversation.
            </p>
          </section>
        </aside>
      </div>
    </div>
  );
}
```

### 15f. OverviewSurface.module.css (complete file)
```css
/*
 * P5-S03 Aperçu — Figma 51:2 / 192:2 geometry adapted to --pm6-* tokens.
 * Desktop: summary strip + main column + Overview-owned details (not global rail).
 */

.root {
  display: flex;
  flex-direction: column;
  gap: 18px;
  min-width: 0;
  padding: 18px var(--ws-pad-x, 24px) 28px;
}

.stats {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 10px;
  padding: 12px;
  border: 1px solid var(--pm6-border);
  border-radius: var(--pm6-radius-md);
  background: var(--pm6-canvas-raised);
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
  padding: 4px 6px;
}

.statLabel {
  margin: 0;
  font-size: 0.625rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--pm6-muted-faint);
}

.statValue {
  margin: 0;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--pm6-ink);
  line-height: 1.25;
}

.statValue[data-tone="warn"] {
  color: var(--pm6-danger);
}

.statValue[data-tone="ok"] {
  color: var(--pm6-ok);
}

.statSub {
  display: block;
  margin: 2px 0 0;
  font-size: 0.6875rem;
  color: var(--pm6-muted);
}

.body {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 18px;
  min-width: 0;
  align-items: start;
}

.mainCol {
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 0;
}

.panel {
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 0;
  padding: 16px 18px;
  border: 1px solid var(--pm6-border);
  border-radius: var(--pm6-radius-md);
  background: var(--pm6-canvas-raised);
}

.sectionHead {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}

.sectionTitle {
  margin: 0;
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--pm6-muted-faint);
}

.sectionLead {
  margin: 4px 0 0;
  font-size: 0.8125rem;
  color: var(--pm6-ink);
  line-height: 1.35;
}

.empty {
  margin: 0;
  font-size: 0.8125rem;
  color: var(--pm6-muted);
  line-height: 1.4;
}

.track {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 16px;
  margin: 0;
  padding: 12px 0 0;
  list-style: none;
}

.node {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}

.nodeDot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--pm6-ink);
  flex: 0 0 auto;
}

.node[data-state="current"] .nodeDot {
  background: var(--pm6-danger);
}

.node[data-state="proposed"] .nodeDot {
  background: transparent;
  border: 1.5px solid var(--pm6-danger);
}

.nodeName {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--pm6-ink);
}

.nodeState {
  font-size: 0.75rem;
  color: var(--pm6-muted);
}

.attentionList,
.activityList {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid var(--pm6-border-faint);
}

.attentionItem,
.activityItem {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr) minmax(0, 0.8fr);
  gap: 10px;
  align-items: start;
  padding: 12px 0;
  border-top: 1px solid var(--pm6-border-faint);
}

.attentionItem:first-child,
.activityItem:first-child {
  border-top: none;
}

.attentionHead,
.activityHead {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--pm6-ink);
}

.attentionDetail,
.activityDetail {
  font-size: 0.75rem;
  color: var(--pm6-muted);
  line-height: 1.35;
}

.activityMeta {
  font-size: 0.6875rem;
  color: var(--pm6-muted-faint);
}

.details {
  display: flex;
  flex-direction: column;
  gap: 0;
  min-width: 0;
  border: 1px solid var(--pm6-border);
  border-radius: var(--pm6-radius-md);
  background: var(--pm6-canvas-raised);
  overflow: hidden;
}

.detailsHead {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px 18px 14px;
  border-bottom: 1px solid var(--pm6-border);
}

.detailsTitle {
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--pm6-ink);
  line-height: 1.25;
}

.detailsFacts {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin: 0;
  padding: 14px 18px;
  border-bottom: 1px solid var(--pm6-border);
}

.detailsFact {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.detailsFact dt {
  margin: 0;
  font-size: 0.625rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--pm6-muted-faint);
}

.detailsFact dd {
  margin: 0;
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--pm6-ink);
  line-height: 1.35;
}

.detailsKeys {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 14px 18px;
  border-bottom: 1px solid var(--pm6-border);
}

.keyList {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.keyList li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  font-size: 0.8125rem;
  color: var(--pm6-muted-strong);
}

.keyList li span:last-child {
  font-weight: 600;
  color: var(--pm6-ink);
}

.keyList li span:last-child[data-tone="warn"] {
  color: var(--pm6-danger);
}

.nextStep {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 14px 18px;
  border-bottom: 1px solid var(--pm6-border);
}

.nextStepTitle {
  margin: 0;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--pm6-ink);
}

.nextStepBody {
  margin: 0;
  font-size: 0.8125rem;
  color: var(--pm6-muted-strong);
  line-height: 1.4;
}

.nextStepCta {
  align-self: flex-start;
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  color: var(--pm6-danger);
  font: inherit;
  font-size: 0.8125rem;
  font-weight: 600;
  cursor: pointer;
}

.nextStepCta:hover {
  text-decoration: underline;
}

.nextStepCta:focus-visible {
  outline: none;
  box-shadow: var(--pm6-focus-ring);
  border-radius: 4px;
}

.detailsSynth {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 14px 18px 18px;
}

/* Desktop Overview composition — main + details (≥1100 inside app column). */
@media (min-width: 1100px) {
  .body {
    grid-template-columns: minmax(0, 1fr) minmax(280px, 352px);
  }
}

@media (max-width: 1199px) {
  .stats {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 767px) {
  .root {
    padding-top: 10px;
  }

  .stats {
    grid-template-columns: 1fr 1fr;
  }

  .attentionItem,
  .activityItem {
    grid-template-columns: 1fr;
    gap: 4px;
  }

  .panel {
    padding: 14px;
  }
}
```

### 15g. ExecutionSurface.module.css (complete file)
```css
/*
 * P5-S03 Exécution — Figma 150:295 / 147:2 / 190:337 adapted to --pm6-*.
 */

.root {
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 0;
  padding: 18px var(--ws-pad-x, 24px) 28px;
}

.head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
}

.eyebrow {
  margin: 0 0 4px;
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--pm6-muted-faint);
}

.title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 650;
  color: var(--pm6-ink);
  line-height: 1.25;
}

.subtitle {
  margin: 6px 0 0;
  font-size: 0.8125rem;
  color: var(--pm6-muted);
}

.chip {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 28px;
  padding: 4px 10px;
  border-radius: 7px;
  border: 1px solid var(--pm6-border);
  background: var(--pm6-canvas-raised);
  font-size: 0.6875rem;
  font-weight: 600;
  color: var(--pm6-muted-strong);
}

.chip[data-tone="ready"],
.chip[data-tone="ok"] {
  background: var(--pm6-ok-tint);
  border-color: color-mix(in srgb, var(--pm6-ok) 28%, var(--pm6-border));
  color: var(--pm6-ok);
}

.chip[data-tone="running"],
.chip[data-tone="warn"] {
  background: var(--pm6-warn-tint);
  border-color: color-mix(in srgb, var(--pm6-warn) 28%, var(--pm6-border));
  color: var(--pm6-warn);
}

.chip[data-tone="danger"] {
  background: var(--pm6-danger-tint);
  border-color: color-mix(in srgb, var(--pm6-danger) 28%, var(--pm6-border));
  color: var(--pm6-danger);
}

.metrics {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
}

.metric {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
  padding: 12px;
  border-radius: 7px;
  background: var(--pm6-canvas-raised);
  border: 1px solid var(--pm6-border-faint);
}

.metricLabel {
  margin: 0;
  font-size: 0.625rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--pm6-muted-faint);
}

.metricValue {
  margin: 0;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--pm6-ink);
}

.metricDetail {
  margin: 0;
  font-size: 0.6875rem;
  color: var(--pm6-muted);
}

.section {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
}

.sectionTitle {
  margin: 0;
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--pm6-muted-faint);
}

.workList,
.evidenceList {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--pm6-border);
  border-radius: var(--pm6-radius-md);
  overflow: hidden;
  background: var(--pm6-surface);
}

.workItem,
.evidenceItem {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 11px 14px;
  border-top: 1px solid var(--pm6-border-faint);
  font-size: 0.8125rem;
}

.workItem:first-child,
.evidenceItem:first-child {
  border-top: none;
}

.workLabel,
.evidenceLabel {
  color: var(--pm6-ink);
  font-weight: 500;
}

.workState,
.evidenceState {
  color: var(--pm6-muted);
  font-size: 0.75rem;
}

.moreLink {
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  align-self: flex-start;
  color: var(--pm6-danger);
  font: inherit;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
}

.moreLink:focus-visible {
  outline: none;
  box-shadow: var(--pm6-focus-ring);
  border-radius: 4px;
}

.attention {
  padding: 12px 14px;
  border-radius: var(--pm6-radius-md);
  border: 1px solid var(--pm6-border);
  background: var(--pm6-warn-tint);
  font-size: 0.8125rem;
  color: var(--pm6-ink-soft);
  line-height: 1.4;
}

.result {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 14px;
  border: 1px solid var(--pm6-border);
  border-radius: var(--pm6-radius-md);
  background: var(--pm6-surface);
}

.resultHead {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.resultTitle {
  margin: 0;
  font-size: 0.9375rem;
  font-weight: 650;
  color: var(--pm6-ink);
}

.resultBody {
  margin: 0;
  font-size: 0.8125rem;
  color: var(--pm6-muted-strong);
  line-height: 1.45;
}

.footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding-top: 4px;
}

.primaryButton {
  min-height: 38px;
  padding: 0 18px;
  border: none;
  border-radius: 8px;
  background: var(--pm6-forest);
  color: var(--pm6-forest-ink);
  font: inherit;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
}

.primaryButton:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.primaryButton:focus-visible {
  outline: none;
  box-shadow: var(--pm6-focus-ring);
}

.empty {
  margin: 0;
  padding: 24px 8px;
  font-size: 0.875rem;
  color: var(--pm6-muted);
  line-height: 1.45;
}

@media (max-width: 767px) {
  .metrics {
    grid-template-columns: 1fr 1fr;
  }

  .head {
    flex-direction: column;
  }

  .footer {
    justify-content: stretch;
  }

  .primaryButton {
    width: 100%;
  }
}
```

## 16. Tests added
- p5.s03.durableExecutionActionContinuity.ui.test.tsx — E1–E6 fresh-mount
- p5.s03.pilotExecutionPresentation.d0.test.ts — updated (no canConfirm/canExecute)
- p5.s03.objectNativeViews.ui.test.tsx — B1 layout assertion (data-layout=overview, no LPS column)

## 17. Fresh-mount confirmation proof (E1)
PASS — confirmation_required → À confirmer → Confirmer → w2Confirm only · reconcile/authorize NOT called · reread occurs

## 18. Fresh-mount execute proof (E2)
PASS — confirmed → Prête → Exécuter → authorize then reconcile intent=execute · confirm NOT called · no Conversation F3 required

## 19. No Attempt on Confirm proof (E3)
PASS — reconcile never called on Confirmer

## 20. Authorization fail-closed proof (E4)
PASS — DENIED / executionEligible=false → no reconcile execute · error shown

## 21. Axis 2 B1 before evidence
`.tmp-sfia-review/p5-s03-visual/cp01/before/apercu-desktop-1440x1024.png`
Permanent right « Contexte du projet » rail constrained Overview to left column (≠ Figma 51:2).

## 22. B1 correction
When activeView==overview: hide permanent context rail; OverviewSurface owns principal width with summary strip + main column + « Détails du projet » panel (honest Product facts only).

## 23. B2 before evidence
`.tmp-sfia-review/p5-s03-visual/cp01/before/apercu-mobile-390x844.png`
Mobile hierarchy included breadcrumb, À jour badge, chips, large LPS toggle before tabs.

## 24. B2 correction
At <768: hide globalHeader, projectChips (incl. LPS toggle), focusBar; keep brand/user (ProductShell) → title → subtitle → tabs → surface. Applied shared across Conversation/Aperçu/Exécution.

## 25. Figma nodes reread
fileKey `m4g8j0gNbEzfIuH6S9AZJF`
- 51:2 Aperçu desktop (EXPLORATORY / canonical direction)
- 192:2 Aperçu mobile (VALIDATED)
- 150:295 Exécution desktop
- 190:337 Exécution mobile
- 46:2 Conversation desktop
Refs: `.tmp-sfia-review/p5-s03-visual/cp01/figma/`

## 26. Runtime captures BEFORE
`.tmp-sfia-review/p5-s03-visual/cp01/before/` (preserved)

## 27. Runtime captures AFTER
`.tmp-sfia-review/p5-s03-visual/cp01/after/`
- apercu-desktop-1440x1024.png (B1)
- apercu-compact-1024x768.png
- apercu-mobile-390x844.png (B2)
- execution-mobile-390x844.png (B2 shared)
- conversation-mobile-390x844.png (B2 shared)
- execution-desktop-1440x1024.png (control · honest empty EC)
- conversation-desktop-1440x1024.png (control)

## 28. Visual comparison matrix
| Capture | Figma | Before defect | After | Class |
|---|---|---|---|---|
| Aperçu 1440 | 51:2 | B1 permanent context rail | Overview-owned details; no sibling rail | B1 CLOSED |
| Aperçu 1024 | compact | — | no H-scroll / composition collapses | control OK |
| Aperçu 390 | 192:2 | B2 desktop chrome | title→tabs→surface | B2 CLOSED |
| Exécution 390 | 190:337 | B2 chrome | shared shell; honest empty | B2 CLOSED |
| Conversation 390 | responsive | B2 chrome | shared shell | B2 CLOSED |
| Exécution 1440 | 150:295 | — | empty honest (no fake EC) | control OK / C honesty |
| Conversation 1440 | 46:2 | — | context rail preserved | control OK |

## 29. A/B/C/D counts
- **A = 0**
- **B = 0** (B1 CLOSED · B2 CLOSED)
- **C reserves**: Figma illustrative Synthèses=4 / decision counts vs honest « — »; Figma READY EC vs honest empty Exécution for HABITFLOW-REPLAY-02; spacing/typography polish deltas
- **D future**: Synthèses surface · Auth · Nora Activity · R3 · pixel-perfect global · F2 routing debt OPEN

## 30. Targeted test results
- p5.s03.pilotExecutionPresentation.d0 — **9 PASS**
- p5.s03.durableExecutionActionContinuity.ui — **6 PASS** (E1–E6)
- p5.s03.objectNativeViews.ui — **2 PASS**

## 31. Adjacent suite
`__tests__/pre-m6-product-ui/` — **20 files / 165 PASS**

## 32. Deterministic no-LLM
S03 CP01 tests = mocked W2 / jsdom / ZERO provider · no OpenAI · P5_S02_RUN_REAL unset

## 33. typecheck
**PASS** (`tsc --noEmit`)

## 34. lint
**PASS** (No ESLint warnings or errors)

## 35. build
**PASS** (`next build` EXIT 0)

## 36. full npm test
**PASS** — Test Files **468 passed** | 18 skipped · Tests **5196 passed** | 138 skipped

## 37. REAL calls = 0
ZERO REAL mandatory · P5_S02_RUN_REAL never set · no OpenAI request

## 38–41. Architecture negatives
- no new Product objects: **YES**
- no new persistence: **YES**
- no new state machine: **YES**
- no parallel architecture: **YES** (W2 path reused; TrajectorySurface not duplicated)

## 42. PIB qualitative assessment
Pilot sees À confirmer → Confirmer once; then Prête → Exécuter once.
Technical authorize/reconcile mechanics stay behind Exécuter — not exposed as mandatory Pilot buttons (Inspecter / Statuer / Select / Start / Complete).

## 43. Roadmap / P5 docs changed
- Roadmap tip → P5-S03 CORRECTION PASS 01 IN PROGRESS / LOCAL CANDIDATE
- `05-…integrated-delivery.md` §32 / §32bis / verdict updated
- Do NOT claim INTEGRATED / P5 COMPLETE / R3 PASS / P6 READY / runtime v3 ADOPTED / pixel-perfect

## 44. Remaining debts
- F2 routing debt OPEN
- Synthèses NOT BUILT
- Auth / Nora Activity future
- C visual polish reserves
- R3 NOT STARTED

## 45. project Git actions = NONE
No project commit · No project push · No PR · No merge

## 46. Final verdict
PASS — P5-S03 CORRECTION PASS 01 COMPLETE —
DURABLE EXECUTION ACTION CONTINUITY PROVEN ON FRESH MOUNT —
CONFIRMATION SEPARATED FROM EXECUTION —
EXISTING W2 AUTHORITY / RECONCILER PATH REUSED —
P3 B1/B2 STRUCTURAL VISUAL DEFECTS CLOSED —
A=0 / B=0 —
ZERO REAL —
READY FOR CHATGPT CRITICAL RE-REVIEW

Explicitly NOT: P5-S03 INTEGRATED · P5 COMPLETE · R3 PASS · P6 READY · PIXEL-PERFECT GLOBAL · runtime v3 ADOPTED

### Explicit invariants proven
CONFIRMATION != EXECUTION
restart-safe durable actionability
B1 status = CLOSED
B2 status = CLOSED
A/B counts = 0/0
ZERO REAL
project Git = NONE


## 47. Durable execution continuity test file (complete)
```tsx
/** @vitest-environment jsdom */
/**
 * P5-S03 CP01 — restart-safe durable Exécution action continuity (ZERO REAL).
 *
 * Fresh mount + durable EC remains actionable without Conversation F3 state.
 * CONFIRMATION != EXECUTION.
 */
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ExecutionSurface } from "@/features/pre-m6-product-ui/surfaces/ExecutionSurface";

const {
  deriveContinuityMock,
  readCurrentContinuityMock,
  confirmMock,
  inspectMock,
  authorizeMock,
  reconcileMock,
} = vi.hoisted(() => ({
  deriveContinuityMock: vi.fn(),
  readCurrentContinuityMock: vi.fn(),
  confirmMock: vi.fn(),
  inspectMock: vi.fn(),
  authorizeMock: vi.fn(),
  reconcileMock: vi.fn(),
}));

vi.mock("@/features/project-assistant/w2/actions", () => ({
  w2DeriveGovernedExecutionContinuityAction: (...args: unknown[]) =>
    deriveContinuityMock(...args),
  w2ReadCurrentGovernedExecutionContinuityAction: (...args: unknown[]) =>
    readCurrentContinuityMock(...args),
  w2ConfirmExecutionContractAction: (...args: unknown[]) => confirmMock(...args),
  w2InspectExecutionContractAction: (...args: unknown[]) => inspectMock(...args),
  w2AuthorizeExecutionContractAction: (...args: unknown[]) =>
    authorizeMock(...args),
  w2ReconcileGovernedExecutionAction: (...args: unknown[]) =>
    reconcileMock(...args),
}));

function projection(overrides: Record<string, unknown> = {}) {
  return {
    projectId: "prj:cp01",
    activeCycleInstanceId: "cyc:1",
    executionContractId: "xct:cp01",
    executionContractVersion: 1,
    executionContractStatus: "confirmation_required",
    attemptId: null,
    attemptStatus: null,
    stage: "PRE_EXECUTION",
    productOutcome: null,
    evidenceId: null,
    reviewBundleId: null,
    claimEvaluationId: null,
    claimEvaluationStatus: null,
    postEvidencePresent: false,
    nextDeterministicAction: "NONE",
    humanDecisionRequired: false,
    recoveryRequired: false,
    reason: null,
    blockingCode: null,
    context: {
      executionContract: {
        action: "cursor.docs_write.apply",
        objective: "Écriture documentaire préparée",
      },
      executionReview: { reviewItemSummaries: [] },
    },
    ...overrides,
  };
}

function activeCurrent(args: {
  status: "confirmation_required" | "confirmed" | "validated";
  inspectionSufficient?: boolean;
}) {
  return {
    ok: true as const,
    kind: "active" as const,
    decisionRef: "dec:1",
    contract: {
      executionContractId: "xct:cp01",
      version: 1,
      status: args.status,
      action: "cursor.docs_write.apply",
      target: "workspace.isolated.docs_write",
      scope: "studio.gcec.docs_write",
      requiredAuthority: "N2",
      constraints: [],
      stopConditions: [],
      requiredCapabilities: [],
      reversibility: "reversible",
      semanticFingerprint: "fp",
      effectConfirmationRequired: args.status === "confirmation_required",
      inspectionDisclosure: {
        action: "cursor.docs_write.apply",
        technicalTarget: "workspace.isolated.docs_write",
        scope: "studio.gcec.docs_write",
        targetRepositoryRef: null,
        targetPath: "projects/demo/note.md",
        scopeIn: null,
        scopeOut: null,
        createOrModify: true,
        noDelete: true,
        objective: null,
        artifactType: null,
        artifactBrief: null,
        contentRequirements: null,
        validationExpectations: null,
        expectedOutputs: null,
        sourceGrounding: null,
        acceptanceCriteria: null,
        validationPlan: null,
        reportRequirements: null,
        evidenceRequirements: [],
        requiredAuthority: "N2",
        requiredCapabilities: [],
        constraints: [],
        stopConditions: [],
        reversibility: "reversible",
        contractVersion: 1,
        executionContractId: "xct:cp01",
        semanticFingerprint: "fp",
        disclosureComplete: true,
        incompletenessCode: null,
      },
    },
    inspection: {
      executionContractId: "xct:cp01",
      contractVersion: 1,
      semanticFingerprint: "fp",
      statusLabel: "INSPECTÉ",
      inspectionSufficient: args.inspectionSufficient !== false,
      attestationRef: "att:1",
      attestedVersion: 1,
      staleAttestationRef: null,
      reinspectionRequired: false,
      reason: "inspected",
      grantsAuthority: false,
    },
  };
}

describe("P5-S03 CP01 durable execution action continuity", () => {
  afterEach(() => {
    cleanup();
  });

  beforeEach(() => {
    vi.clearAllMocks();
    inspectMock.mockResolvedValue({
      ok: true,
      inspectionSufficient: true,
      executionContractId: "xct:cp01",
      contractVersion: 1,
    });
    confirmMock.mockResolvedValue({
      ok: true,
      executionContractId: "xct:cp01",
      status: "confirmed",
    });
    authorizeMock.mockResolvedValue({
      ok: true,
      outcome: "AUTHORIZED",
      executionEligible: true,
    });
    reconcileMock.mockResolvedValue({
      ok: true,
      intent: "execute",
      projection: projection({
        executionContractStatus: "confirmed",
        stage: "RUNNING",
        attemptId: "att:1",
        attemptStatus: "running",
      }),
    });
  });

  it("E1 — fresh mount confirmation_required → Confirmer invokes confirm only", async () => {
    deriveContinuityMock.mockResolvedValue({
      ok: true,
      projection: projection(),
    });
    readCurrentContinuityMock.mockResolvedValue(
      activeCurrent({ status: "confirmation_required" }),
    );

    render(
      <ExecutionSurface
        projectId="prj:cp01"
        onReturnToConversation={vi.fn()}
      />,
    );

    await waitFor(() => {
      expect(screen.getByTestId("project-execution-status").textContent).toBe(
        "À confirmer",
      );
    });
    const confirmBtn = screen.getByTestId("project-execution-confirm");
    expect(confirmBtn).toBeTruthy();
    expect((confirmBtn as HTMLButtonElement).disabled).toBe(false);
    expect(screen.queryByTestId("project-execution-execute")).toBeNull();

    fireEvent.click(confirmBtn);

    await waitFor(() => {
      expect(confirmMock).toHaveBeenCalledTimes(1);
    });
    expect(confirmMock).toHaveBeenCalledWith({
      projectId: "prj:cp01",
      executionContractId: "xct:cp01",
    });
    expect(reconcileMock).not.toHaveBeenCalled();
    expect(authorizeMock).not.toHaveBeenCalled();
    // Canonical reread after confirm (≥ initial load + post-confirm).
    expect(deriveContinuityMock.mock.calls.length).toBeGreaterThanOrEqual(2);
    expect(readCurrentContinuityMock.mock.calls.length).toBeGreaterThanOrEqual(2);
  });

  it("E2 — fresh mount confirmed → Exécuter authorizes then reconciles execute", async () => {
    deriveContinuityMock.mockResolvedValue({
      ok: true,
      projection: projection({ executionContractStatus: "confirmed" }),
    });
    readCurrentContinuityMock.mockResolvedValue(
      activeCurrent({ status: "confirmed" }),
    );

    render(
      <ExecutionSurface
        projectId="prj:cp01"
        onReturnToConversation={vi.fn()}
      />,
    );

    await waitFor(() => {
      expect(screen.getByTestId("project-execution-status").textContent).toBe(
        "Prête à exécuter",
      );
    });
    const executeBtn = screen.getByTestId("project-execution-execute");
    expect((executeBtn as HTMLButtonElement).disabled).toBe(false);

    fireEvent.click(executeBtn);

    await waitFor(() => {
      expect(authorizeMock).toHaveBeenCalledTimes(1);
      expect(reconcileMock).toHaveBeenCalledTimes(1);
    });
    expect(confirmMock).not.toHaveBeenCalled();
    expect(reconcileMock).toHaveBeenCalledWith(
      expect.objectContaining({
        projectId: "prj:cp01",
        executionContractId: "xct:cp01",
        intent: "execute",
      }),
    );
  });

  it("E3 — Confirmer never creates Attempt via reconcile execute", async () => {
    deriveContinuityMock.mockResolvedValue({
      ok: true,
      projection: projection(),
    });
    readCurrentContinuityMock.mockResolvedValue(
      activeCurrent({ status: "confirmation_required" }),
    );

    render(
      <ExecutionSurface
        projectId="prj:cp01"
        onReturnToConversation={vi.fn()}
      />,
    );
    await waitFor(() => {
      expect(screen.getByTestId("project-execution-confirm")).toBeTruthy();
    });
    fireEvent.click(screen.getByTestId("project-execution-confirm"));
    await waitFor(() => {
      expect(confirmMock).toHaveBeenCalled();
    });
    expect(reconcileMock).not.toHaveBeenCalledWith(
      expect.objectContaining({ intent: "execute" }),
    );
    expect(reconcileMock).not.toHaveBeenCalled();
  });

  it("E4 — authorization fail-closed: no reconcile execute", async () => {
    deriveContinuityMock.mockResolvedValue({
      ok: true,
      projection: projection({ executionContractStatus: "confirmed" }),
    });
    readCurrentContinuityMock.mockResolvedValue(
      activeCurrent({ status: "confirmed" }),
    );
    authorizeMock.mockResolvedValue({
      ok: true,
      outcome: "DENIED",
      executionEligible: false,
      executionEligibilityReasonCode: "AUTHORITY_INSUFFICIENT",
    });

    render(
      <ExecutionSurface
        projectId="prj:cp01"
        onReturnToConversation={vi.fn()}
      />,
    );
    await waitFor(() => {
      expect(screen.getByTestId("project-execution-execute")).toBeTruthy();
    });
    fireEvent.click(screen.getByTestId("project-execution-execute"));
    await waitFor(() => {
      expect(authorizeMock).toHaveBeenCalled();
      expect(screen.getByTestId("project-execution-error")).toBeTruthy();
    });
    expect(reconcileMock).not.toHaveBeenCalled();
  });

  it("E5 — insufficient inspection disables confirm CTA", async () => {
    deriveContinuityMock.mockResolvedValue({
      ok: true,
      projection: projection(),
    });
    readCurrentContinuityMock.mockResolvedValue(
      activeCurrent({
        status: "confirmation_required",
        inspectionSufficient: false,
      }),
    );

    render(
      <ExecutionSurface
        projectId="prj:cp01"
        onReturnToConversation={vi.fn()}
      />,
    );
    await waitFor(() => {
      expect(screen.getByTestId("project-execution-confirm")).toBeTruthy();
    });
    expect(
      (screen.getByTestId("project-execution-confirm") as HTMLButtonElement)
        .disabled,
    ).toBe(true);
    expect(screen.getByTestId("project-execution-attention").textContent).toMatch(
      /Inspection insuffisante/,
    );
  });

  it("E6 — RUNNING / terminal: no Exécuter", async () => {
    deriveContinuityMock.mockResolvedValue({
      ok: true,
      projection: projection({
        executionContractStatus: "confirmed",
        stage: "RUNNING",
        attemptId: "att:1",
        attemptStatus: "running",
        context: null,
      }),
    });
    readCurrentContinuityMock.mockResolvedValue({ ok: true, kind: "none" });

    const { unmount } = render(
      <ExecutionSurface
        projectId="prj:cp01"
        onReturnToConversation={vi.fn()}
      />,
    );
    await waitFor(() => {
      expect(screen.getByTestId("project-execution-status").textContent).toBe(
        "En cours",
      );
    });
    expect(screen.queryByTestId("project-execution-execute")).toBeNull();
    unmount();

    deriveContinuityMock.mockResolvedValue({
      ok: true,
      projection: projection({
        stage: "POST_EVIDENCE_COMPLETE",
        attemptId: "att:1",
        attemptStatus: "succeeded",
        evidenceId: "ev:1",
        postEvidencePresent: true,
        context: null,
      }),
    });
    render(
      <ExecutionSurface
        projectId="prj:cp01"
        onReturnToConversation={vi.fn()}
      />,
    );
    await waitFor(() => {
      expect(screen.getByTestId("project-execution-status").textContent).toBe(
        "Terminée",
      );
    });
    expect(screen.queryByTestId("project-execution-execute")).toBeNull();
    expect(screen.getByTestId("project-execution-result")).toBeTruthy();
  });
});
```

## 48. Correction design note
# P5-S03 CORRECTION PASS 01 — Design Note

## Defect Axis 1 — Durable Execution Action Continuity

**Exact current defect**
- Execution READ was durable (`w2ReadCurrent` / `w2Derive`).
- Execution ACTIONABILITY depended on Conversation process-local gates
  (`controller.canConfirmResolvedM3` / `f3M3Resolved`).
- Fresh mount lost actionability while durable EC remained visible.
- `Confirmer` called `confirmAndExecuteResolvedM3` (confirm+execute fused).

**Exact existing canonical mechanism**
- `w2ConfirmExecutionContractAction` — confirmation only, no Attempt.
- `w2AuthorizeExecutionContractAction` — server authority owner.
- `w2ReconcileGovernedExecutionAction` intent=`execute` / `continue`.
- `w2InspectExecutionContractAction` — inspection sufficiency.
- TrajectorySurface already demonstrates the pattern; Exécution harvests the
  minimum orchestration only.

**Intended minimum correction**
- ExecutionSurface owns refresh + confirm/execute via W2 actions.
- Presentation eligibility from durable inspection + status.
- No Conversation F3 oracle for Exécution CTAs.
- CONFIRMATION != EXECUTION; canonical reread after every mutation.

**No new SoT / no architecture parallelism**
- No new persistence, state machine, authority model, or Product object.

## Defect Axis 2 — P3 Structural Visual Alignment

**B1** — Aperçu desktop (Figma `51:2`): hide permanent context rail on Overview;
OverviewSurface owns summary + main + « Détails du projet ».

**B2** — Mobile shell (Figma `192:2` / `190:337`): hide breadcrumb, freshness
badge, chip cluster, LPS pill, focus bar from main vertical flow at `<768`;
brand/user (ProductShell) → title → subtitle → tabs → surface.

## 49. CP01 after manifest
{
  "pass": "P5-S03 CP01",
  "capturedAt": "2026-10-05T14:35:46.364Z",
  "project": "HABITFLOW-REPLAY-02 / prj:0ed5c4e1-3d23-45cd-b34b-530df1090197",
  "honesty": "No fabricated EC / Synthèses / trajectory counts",
  "captures": [
    {
      "viewport": "1440x1024",
      "view": "overview",
      "figma": "51:2",
      "purpose": "B1 close",
      "file": "apercu-desktop-1440x1024.png"
    },
    {
      "viewport": "1024x768",
      "view": "overview",
      "figma": "51:2 compact",
      "purpose": "compact no-regression",
      "file": "apercu-compact-1024x768.png"
    },
    {
      "viewport": "390x844",
      "view": "overview",
      "figma": "192:2",
      "purpose": "B2 close",
      "file": "apercu-mobile-390x844.png"
    },
    {
      "viewport": "1440x1024",
      "view": "execution",
      "state": "vide",
      "figma": "150:295",
      "purpose": "desktop execution control",
      "file": "execution-desktop-1440x1024.png"
    },
    {
      "viewport": "390x844",
      "view": "execution",
      "state": "vide",
      "figma": "190:337",
      "purpose": "B2 shared shell on execution",
      "file": "execution-mobile-390x844.png"
    },
    {
      "viewport": "390x844",
      "view": "conversation",
      "figma": "190:306 / responsive workspace",
      "purpose": "B2 shared shell on conversation",
      "file": "conversation-mobile-390x844.png"
    },
    {
      "viewport": "1440x1024",
      "view": "conversation",
      "figma": "46:2",
      "purpose": "desktop conversation control",
      "file": "conversation-desktop-1440x1024.png"
    }
  ]
}
## 50. Presentation + object-native tests (complete)
```ts
/**
 * P5-S03 — PilotExecutionPresentation mapping (deterministic, ZERO REAL).
 * CP01: eligibility derives from durable inspection — not Conversation F3 gates.
 */
import { describe, expect, it } from "vitest";
import type { GovernedExecutionContinuityProjection } from "@/features/project-assistant/w2/deriveGovernedExecutionContinuityProjection";
import {
  deriveExecutionTabBadge,
  presentPilotExecution,
} from "@/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation";

function baseProjection(
  overrides: Partial<GovernedExecutionContinuityProjection> = {},
): GovernedExecutionContinuityProjection {
  return {
    projectId: "prj:s03",
    activeCycleInstanceId: "cyc:1",
    executionContractId: "xct:1",
    executionContractVersion: 1,
    executionContractStatus: "confirmed",
    attemptId: null,
    attemptStatus: null,
    stage: "PRE_EXECUTION",
    productOutcome: null,
    evidenceId: null,
    reviewBundleId: null,
    claimEvaluationId: null,
    claimEvaluationStatus: null,
    postEvidencePresent: false,
    nextDeterministicAction: "NONE",
    humanDecisionRequired: false,
    recoveryRequired: false,
    reason: null,
    blockingCode: null,
    context: null,
    ...overrides,
  };
}

function activePreExec(args: {
  status: "confirmation_required" | "confirmed" | "validated";
  inspectionSufficient: boolean;
  effectConfirmationRequired?: boolean;
}) {
  return {
    ok: true as const,
    kind: "active" as const,
    decisionRef: "dec:1",
    contract: {
      executionContractId: "xct:1",
      version: 1,
      status: args.status,
      action: "cursor.docs_write.apply",
      target: "workspace.isolated.docs_write",
      scope: "studio.gcec.docs_write",
      requiredAuthority: "N2",
      constraints: [] as const,
      stopConditions: [] as const,
      requiredCapabilities: [] as const,
      reversibility: "reversible" as const,
      semanticFingerprint: "fp",
      effectConfirmationRequired: args.effectConfirmationRequired ?? false,
      inspectionDisclosure: {
        action: "cursor.docs_write.apply",
        technicalTarget: "workspace.isolated.docs_write",
        scope: "studio.gcec.docs_write",
        targetRepositoryRef: null,
        targetPath: "projects/demo/note.md",
        scopeIn: null,
        scopeOut: null,
        createOrModify: true,
        noDelete: true,
        objective: null,
        artifactType: null,
        artifactBrief: null,
        contentRequirements: null,
        validationExpectations: null,
        expectedOutputs: null,
        sourceGrounding: null,
        acceptanceCriteria: null,
        validationPlan: null,
        reportRequirements: null,
        evidenceRequirements: [] as const,
        requiredAuthority: "N2",
        requiredCapabilities: [] as const,
        constraints: [] as const,
        stopConditions: [] as const,
        reversibility: "reversible" as const,
        contractVersion: 1,
        executionContractId: "xct:1",
        semanticFingerprint: "fp",
        disclosureComplete: true,
        incompletenessCode: null,
      },
    },
    inspection: {
      executionContractId: "xct:1",
      contractVersion: 1,
      semanticFingerprint: "fp",
      statusLabel: "INSPECTÉ" as const,
      inspectionSufficient: args.inspectionSufficient,
      attestationRef: args.inspectionSufficient ? "att:1" : null,
      attestedVersion: args.inspectionSufficient ? 1 : null,
      staleAttestationRef: null,
      reinspectionRequired: !args.inspectionSufficient,
      reason: (args.inspectionSufficient
        ? "inspected"
        : "inspected_facts_incomplete") as
        | "inspected"
        | "inspected_facts_incomplete",
      grantsAuthority: false as const,
    },
  };
}

describe("P5-S03 pilotExecutionPresentation", () => {
  it("empty when no continuity load yet", () => {
    const view = presentPilotExecution({
      continuityProjection: null,
      preExecutionContinuity: null,
    });
    expect(view.empty).toBe(true);
    expect(view.status).toBe("vide");
    expect(deriveExecutionTabBadge(view)).toBeNull();
  });

  it("PRE_EXECUTION ready → Prête + Exécuter from durable inspection (no F3 gate)", () => {
    const view = presentPilotExecution({
      continuityProjection: { ok: true, projection: baseProjection() },
      preExecutionContinuity: activePreExec({
        status: "confirmed",
        inspectionSufficient: true,
      }),
    });
    expect(view.status).toBe("prete");
    expect(view.statusLabel).toBe("Prête à exécuter");
    expect(view.cta.kind).toBe("execute");
    expect(view.cta.kind === "execute" && view.cta.enabled).toBe(true);
    expect(deriveExecutionTabBadge(view)).toBe(1);
  });

  it("confirmation_required → À confirmer, no direct execute", () => {
    const view = presentPilotExecution({
      continuityProjection: {
        ok: true,
        projection: baseProjection({
          executionContractStatus: "confirmation_required",
        }),
      },
      preExecutionContinuity: activePreExec({
        status: "confirmation_required",
        inspectionSufficient: true,
        effectConfirmationRequired: true,
      }),
    });
    expect(view.status).toBe("a_confirmer");
    expect(view.cta.kind).toBe("confirm");
    expect(view.cta.kind === "confirm" && view.cta.enabled).toBe(true);
    expect(view.cta.kind === "execute").toBe(false);
  });

  it("insufficient inspection disables CTA (fail closed)", () => {
    const view = presentPilotExecution({
      continuityProjection: {
        ok: true,
        projection: baseProjection({
          executionContractStatus: "confirmation_required",
        }),
      },
      preExecutionContinuity: activePreExec({
        status: "confirmation_required",
        inspectionSufficient: false,
        effectConfirmationRequired: true,
      }),
    });
    expect(view.status).toBe("a_confirmer");
    expect(view.cta.kind === "confirm" && view.cta.enabled).toBe(false);
    expect(view.attentionNote).toMatch(/Inspection insuffisante/);
  });

  it("RUNNING → En cours, no Exécuter", () => {
    const view = presentPilotExecution({
      continuityProjection: {
        ok: true,
        projection: baseProjection({
          stage: "RUNNING",
          attemptId: "att:1",
          attemptStatus: "running",
        }),
      },
      preExecutionContinuity: { ok: true, kind: "none" },
    });
    expect(view.status).toBe("en_cours");
    expect(view.cta.kind).toBe("none");
  });

  it("timeout → Échouée with cause timeout (not Timeout status)", () => {
    const view = presentPilotExecution({
      continuityProjection: {
        ok: true,
        projection: baseProjection({
          stage: "POST_EVIDENCE_COMPLETE",
          attemptId: "att:1",
          attemptStatus: "timeout",
          evidenceId: "ev:1",
          reviewBundleId: "rb:1",
          claimEvaluationId: "ce:1",
          postEvidencePresent: true,
        }),
      },
      preExecutionContinuity: { ok: true, kind: "none" },
    });
    expect(view.status).toBe("echouee");
    expect(view.statusLabel).toBe("Échouée");
    expect(view.failureCause).toBe("timeout");
    expect(view.subtitle).toMatch(/délai dépassé/);
  });

  it("terminal success keeps Result distinct from Evidence", () => {
    const view = presentPilotExecution({
      continuityProjection: {
        ok: true,
        projection: baseProjection({
          stage: "POST_EVIDENCE_COMPLETE",
          attemptId: "att:1",
          attemptStatus: "succeeded",
          evidenceId: "ev:1",
          reviewBundleId: "rb:1",
          claimEvaluationId: "ce:1",
          postEvidencePresent: true,
          productOutcome: "PASS",
        }),
      },
      preExecutionContinuity: { ok: true, kind: "none" },
    });
    expect(view.status).toBe("terminee");
    expect(view.resultTitle).toBeTruthy();
    expect(view.evidenceIsNotResult).toBe(true);
    expect(view.evidenceAvailable).toBe(true);
    expect(view.cta.kind).toBe("return_conversation");
  });

  it("unknown continuity error → fail closed", () => {
    const view = presentPilotExecution({
      continuityProjection: {
        ok: false,
        code: "OA_STACK_UNAVAILABLE",
        message: "Services OA indisponibles.",
      },
      preExecutionContinuity: null,
    });
    expect(view.status).toBe("indisponible");
    expect(view.empty).toBe(false);
  });

  it("maps ATTEMPT_ACCEPTED / materialization / recovery stages", () => {
    expect(
      presentPilotExecution({
        continuityProjection: {
          ok: true,
          projection: baseProjection({
            stage: "ATTEMPT_ACCEPTED",
            attemptId: "a",
            attemptStatus: "accepted",
          }),
        },
        preExecutionContinuity: { ok: true, kind: "none" },
      }).status,
    ).toBe("en_cours");

    expect(
      presentPilotExecution({
        continuityProjection: {
          ok: true,
          projection: baseProjection({
            stage: "PRODUCT_MATERIALIZATION_PENDING",
            attemptId: "a",
            attemptStatus: "succeeded",
          }),
        },
        preExecutionContinuity: { ok: true, kind: "none" },
      }).status,
    ).toBe("terminee");

    expect(
      presentPilotExecution({
        continuityProjection: {
          ok: true,
          projection: baseProjection({
            stage: "RECOVERY_REQUIRED",
            recoveryRequired: true,
            humanDecisionRequired: true,
          }),
        },
        preExecutionContinuity: { ok: true, kind: "none" },
      }).stage,
    ).toBe("RECOVERY_REQUIRED");
  });
});
```
```tsx
/** @vitest-environment jsdom */
/**
 * P5-S03 — Conversation / Aperçu / Exécution real view navigation (UI).
 */
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ProjectWorkspacePage } from "@/features/pre-m6-product-ui/ProjectWorkspacePage";

const {
  getProjectRuntimeActionMock,
  useProductConversationMock,
  deriveContinuityMock,
  readCurrentContinuityMock,
  readHistoryMock,
} = vi.hoisted(() => ({
  getProjectRuntimeActionMock: vi.fn(),
  useProductConversationMock: vi.fn(),
  deriveContinuityMock: vi.fn(),
  readCurrentContinuityMock: vi.fn(),
  readHistoryMock: vi.fn(),
}));

vi.mock("@/lib/vertical-slice-runtime/actions", () => ({
  getProjectRuntimeAction: (...args: unknown[]) =>
    getProjectRuntimeActionMock(...args),
  setProjectRepositoryBindingAction: vi.fn(),
}));

vi.mock("@/features/pre-m6-product-ui/hooks/useProductConversation", () => ({
  useProductConversation: (...args: unknown[]) =>
    useProductConversationMock(...args),
}));

vi.mock("@/features/project-assistant/w2/actions", () => ({
  w2DeriveGovernedExecutionContinuityAction: (...args: unknown[]) =>
    deriveContinuityMock(...args),
  w2ReadCurrentGovernedExecutionContinuityAction: (...args: unknown[]) =>
    readCurrentContinuityMock(...args),
  w2ReadProjectHistoryAction: (...args: unknown[]) => readHistoryMock(...args),
  w2ConfirmExecutionContractAction: vi.fn(),
  w2InspectExecutionContractAction: vi.fn(),
  w2AuthorizeExecutionContractAction: vi.fn(),
  w2ReconcileGovernedExecutionAction: vi.fn(),
}));

vi.mock("@/features/project-assistant/actions", () => ({
  projectAssistantConversationContinuityAction: vi.fn(async () => ({
    ok: true,
    transcriptAvailability: "empty",
    messages: [],
    journal: { cycleInstanceId: null, entries: [] },
  })),
  projectAssistantActiveCycleWorkspaceAction: vi.fn().mockResolvedValue({
    ok: true,
    cycleTypeId: null,
    repositoryWorkspaceSegment: null,
  }),
  projectAssistantConfirmReservationResolutionAction: vi.fn(),
  projectAssistantDeferReservationAction: vi.fn(),
  projectAssistantPilotLifecycleProjection: vi.fn(),
  projectAssistantPilotLifecycleAction: vi.fn(),
  projectAssistantRecordObligationPolicyAction: vi.fn(),
  projectAssistantCompleteTrajectoryStepAction: vi.fn(),
  projectAssistantResolveBlockingReservationAction: vi.fn(),
  projectAssistantRehydrateEvidenceOutcomeAction: vi.fn().mockResolvedValue({
    ok: false,
  }),
}));

vi.mock("@/features/pre-m6-product-ui/surfaces/LifecycleSurface", () => ({
  LifecycleSurface: () => <div data-testid="lifecycle-stub" />,
}));

vi.mock("@/features/pre-m6-product-ui/surfaces/TrajectorySurface", () => ({
  TrajectorySurface: () => <div data-testid="trajectory-stub" />,
}));

vi.mock("@/features/pre-m6-product-ui/surfaces/HistorySurface", () => ({
  HistorySurface: () => <div data-testid="history-stub" />,
}));

vi.mock("@/features/pre-m6-product-ui/surfaces/JournalSurface", () => ({
  JournalSurface: () => <div data-testid="cycle-journal-rail" />,
}));

vi.mock("@/features/pre-m6-product-ui/surfaces/LpsSurface", () => ({
  LpsSurface: () => <div data-testid="lps-stub" />,
  lpsNextAction: () => "Poursuivre avec Nora",
}));

vi.mock("@/features/pre-m6-product-ui/surfaces/RecoverySurface", () => ({
  RecoverySurface: () => null,
}));

vi.mock(
  "@/features/pre-m6-product-ui/surfaces/ProjectWorkspaceRoutingPanel",
  () => ({
    ProjectWorkspaceRoutingPanelLazy: () => null,
  }),
);

vi.mock("@/features/pre-m6-product-ui/surfaces/ConversationSurface", () => ({
  ConversationSurface: () => (
    <div data-testid="project-assistant-panel">Conversation</div>
  ),
}));

describe("P5-S03 object-native views", () => {
  afterEach(() => {
    cleanup();
  });

  beforeEach(() => {
    vi.clearAllMocks();
    deriveContinuityMock.mockResolvedValue({
      ok: true,
      projection: {
        projectId: "prj:p5-s03",
        activeCycleInstanceId: null,
        executionContractId: null,
        executionContractVersion: null,
        executionContractStatus: null,
        attemptId: null,
        attemptStatus: null,
        stage: "PRE_EXECUTION",
        productOutcome: null,
        evidenceId: null,
        reviewBundleId: null,
        claimEvaluationId: null,
        claimEvaluationStatus: null,
        postEvidencePresent: false,
        nextDeterministicAction: "NONE",
        humanDecisionRequired: false,
        recoveryRequired: false,
        reason: "Aucun ExecutionContract résolu.",
        blockingCode: null,
        context: null,
      },
    });
    readCurrentContinuityMock.mockResolvedValue({ ok: true, kind: "none" });
    readHistoryMock.mockResolvedValue({
      ok: true,
      history: {
        projectId: "prj:p5-s03",
        cycle: {
          activeCycleInstanceId: null,
          cycleTypeId: null,
          profile: null,
          status: null,
        },
        trajectory: { versions: [] },
        decisions: [],
        contracts: [],
        absent: [],
      },
    });
    getProjectRuntimeActionMock.mockResolvedValue({
      ok: true,
      project: {
        projectId: "prj:p5-s03",
        name: "Product Simplification",
        shortReference: "P5",
        objective:
          "Simplifier le pilotage sans perdre gouvernance, preuve et maîtrise du Pilote.",
        contextSummary: "ctx",
        criticality: "STANDARD",
        constraints: [],
        localMode: true,
        source: "REAL_LOCAL_CORE",
        fixture: false,
        projectWorkspaceKey: null,
        repositoryBinding: null,
      },
      livingState: {
        projectId: "prj:p5-s03",
        version: 2,
        createdAt: "2026-10-05T00:00:00.000Z",
        updatedAt: "2026-10-05T00:00:00.000Z",
        activeCycleInstanceId: null,
        status: "active",
      },
      doctrine: { packageId: "pkg", version: "1", status: "bound" },
      readiness: { status: "READY", reasons: [] },
    });
    useProductConversationMock.mockReturnValue({
      messages: [],
      draft: "",
      setDraft: vi.fn(),
      ephemeralNotice: null,
      lrMaterializeNotice: null,
      lrMaterializeCode: null,
      f2: null,
      activeProposal: null,
      reservesText: "",
      setReservesText: vi.fn(),
      f3Prepare: null,
      f3M3Resolved: null,
      f3Execute: null,
      durableEvidenceOutcome: null,
      durableRehydrateError: null,
      transcriptAvailability: "empty",
      openContinuityPresentation: { kind: "none" },
      journalEntries: [],
      journalCycleInstanceId: null,
      selectedJournalEntryId: null,
      setSelectedJournalEntryId: vi.fn(),
      focusTurnId: null,
      focusJournalExchanges: vi.fn(),
      focusTranscriptTurn: vi.fn(),
      clearFocusTurn: vi.fn(),
      refreshConversationContinuity: vi.fn(),
      busy: false,
      blocked: false,
      canSend: true,
      gateOpen: true,
      recommendationFreshness: "fresh",
      qualificationFreshness: "fresh",
      durableOutcomeFreshness: "fresh",
      canPrepareResolvedM3: false,
      canPrepareLegacyFixture: false,
      canConfirmResolvedM3: false,
      canConfirmLegacyFixture: false,
      canRefreshResolvedM3Running: false,
      sendMessage: vi.fn(),
      armReinstructionOfProposalId: vi.fn(),
      armedReinstructionOfProposalId: null,
      armReservationInteractionContext: vi.fn(),
      armedReservationInteractionContext: null,
      reservationResolutionProposal: null,
      clearReservationResolutionProposal: vi.fn(),
      decide: vi.fn(),
      prepareResolvedM3: vi.fn(),
      prepareLegacyFixture: vi.fn(),
      confirmAndExecuteResolvedM3: vi.fn(),
      confirmAndExecuteLegacyFixture: vi.fn(),
      refreshResolvedM3RunningAttempt: vi.fn(),
      retryLastUserMessage: vi.fn(),
    });
  });

  it("defaults to Conversation and switches to real Aperçu / Exécution surfaces", async () => {
    render(<ProjectWorkspacePage projectId="prj:p5-s03" />);

    await waitFor(() => {
      expect(screen.getByTestId("project-tabs")).toBeTruthy();
    });

    expect(
      screen.getByTestId("project-tab-conversation").getAttribute("data-selected"),
    ).toBe("true");
    expect(screen.getByTestId("project-assistant-panel")).toBeTruthy();
    expect(screen.queryByTestId("project-overview-surface")).toBeNull();
    expect(screen.queryByTestId("project-execution-surface")).toBeNull();

    fireEvent.click(screen.getByTestId("project-tab-overview"));
    await waitFor(() => {
      expect(screen.getByTestId("project-overview-surface")).toBeTruthy();
    });
    expect(
      screen.getByTestId("project-tab-overview").getAttribute("data-selected"),
    ).toBe("true");
    expect(screen.queryByTestId("project-assistant-panel")).toBeNull();
    expect(screen.getByTestId("project-overview-synthesis-empty")).toBeTruthy();
    // B1 — Overview owns composition; permanent context rail is not a sibling.
    expect(
      screen.getByTestId("project-workspace-layout").getAttribute("data-layout"),
    ).toBe("overview");
    expect(screen.queryByTestId("project-lps-column")).toBeNull();
    expect(screen.getByTestId("project-overview-details")).toBeTruthy();

    fireEvent.click(screen.getByTestId("project-tab-execution"));
    await waitFor(() => {
      expect(screen.getByTestId("project-execution-surface")).toBeTruthy();
    });
    expect(
      screen.getByTestId("project-tab-execution").getAttribute("data-selected"),
    ).toBe("true");
    expect(screen.getByTestId("project-execution-empty")).toBeTruthy();
    expect(screen.queryByTestId("project-tab-execution-badge")).toBeNull();

    fireEvent.click(screen.getByTestId("project-tab-conversation"));
    await waitFor(() => {
      expect(screen.getByTestId("project-assistant-panel")).toBeTruthy();
    });
  });

  it("does not invent a fake Synthesis or persist activeView in Product truth", async () => {
    render(<ProjectWorkspacePage projectId="prj:p5-s03" />);
    await waitFor(() => {
      expect(screen.getByTestId("project-tab-overview")).toBeTruthy();
    });
    fireEvent.click(screen.getByTestId("project-tab-overview"));
    await waitFor(() => {
      expect(screen.getByTestId("project-overview-synthesis-empty").textContent).toMatch(
        /Aucune synthèse produit/,
      );
    });
    // Presentation-only: no Product write APIs invoked for view switch.
    expect(getProjectRuntimeActionMock).toHaveBeenCalled();
  });
});
```
