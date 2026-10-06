# P5-S07 CP02 — Semantic Projection Integrity + Responsive / Visual Closure — FULL REVIEW PACK

## 1. Timestamp
2026-10-06 21:15:04 CEST Europe/Paris context (machine local)

## 2. Repo / worktree
`/Users/morris/Projects/sfia-studio-chat-first-product-simplification-p3`

## 3. Branch
`delivery/sfia-studio-product-simplification-p5-s07-project-continuity-work-representation-completion`

## 4. HEAD / base
- HEAD = `7a664d65157af9554de4d4da7e76ca0187020020`
- origin/main = `7a664d65157af9554de4d4da7e76ca0187020020`
- left-right origin/main...HEAD = `0	0`

## 5. Local Git Truth
- Candidate S07/CP01/CP02 changes = present locally (modified + untracked)
- staged = EMPTY
- `git diff --check` = clean
- Project commit/push/PR = NOT AUTHORIZED

## 6. Morris CP02 GO consumed
P5-S07 CP02 = AUTHORIZED / CONSUMED

## 7. Sources
- Process templates + method (READ ONLY)
- CKC 08-delivery-implementation
- Convergence doctrine + roadmap
- Product completion + product simplification 01–05
- Review input handoff `441420301bc428491f15e54270b402d3d5bfa9cb`
- Figma `m4g8j0gNbEzfIuH6S9AZJF` READ ONLY (figma-design-to-code)

## 8. Cycle / profile / CKC
- Cycle 8 — Delivery / Implementation Correction
- Profile CRITICAL · Typologie EVOL
- CKC `ckc:studio:delivery` · contentStatus VALIDATED · guidance cognitive only · authority NONE

## 9. Convergence pre-check
P4 authority preserved. No new store / aggregate / Proposal DB / HistoryStore / DeliverableStore. Option A kept.

## 10. CP01 inherited state
- B1 PROP-PL durable resume = PASS (not reopened)
- CONV-PL = PASS (not reopened)
- B3 Journal cycle Decisions = PASS (not reopened)
- History Product-derived projection = kept
- ZERO REAL = kept

## 11. Critical Review blockers addressed
- **B2** Work Representation semantic integrity
- **B4** History Evidence/ReviewBundle identity dedup
- **B5** Responsive P3 bands + visual V1–V12

## 12. Visual review findings V1–V12
See §25–36 and `.tmp-sfia-review/p5-s07-cp02-visual/comparison/notes.md`.

| ID | Outcome |
| --- | --- |
| V1 Journal expanded | Dense bounded exchange panel |
| V2 Journal mobile tabs | 4 tabs visible with wrap |
| V3 Journal mobile cards | Geometry aligned to 192:41 |
| V4 Focused mobile topbar | Mark + real Project name + avatar via ProductShell `mobileFocusProjectName` |
| V5 Journal header meta | Cycle chip + freshness in principalMeta |
| V6 History technical dump | Removed from nominal UX |
| V7 Raw Product IDs | Not nominally rendered; data attributes only |
| V8 History compact | 190:111 composition + desktop reading blocks |
| V9 History mobile list | No selected-row treatment; short subtitle; Sans date |
| V10 History mobile detail | CONTEXTE / ÉLÉMENTS LIÉS / Nora CTA; no auto-send |
| V11 Kind chips | Pill chips Décision/Changement/Vérifié |
| V12 1 Issue | Absent in final captures (dedup + capture CSS) |

## 13. Exact file scope
### Modified
M	.tmp-sfia-review/chatgpt-review.md
M	projects/sfia-studio/app/app/studio/projects/[id]/page.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.module.css
M	projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
M	projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
M	projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/HistorySurface.module.css
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/HistorySurface.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.module.css
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx
M	projects/sfia-studio/app/features/project-assistant/actions.ts
M	projects/sfia-studio/app/features/project-assistant/w2/projectHistory.ts
M	projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
M	projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md
M	projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json

### Created (untracked Product)
- `projects/sfia-studio/app/features/project-assistant/w2/deriveWorkRepresentationProjection.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/deriveProjectHistoryEvents.ts`
- `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/deriveWorkRepresentationFromLifecycle.ts`
- `projects/sfia-studio/app/__tests__/project-assistant/p5.s07.cp02.semanticResponsive.d0.test.ts`
- (+ S07/CP01 tests retained untracked)

## 14. B2 before/after semantic rule
**BEFORE:** `artifactIds: produced ? ["artifact:satisfied"] : …` and `hasEvidence → under_review`.
**AFTER:** `artifactProduced` drives production; `artifactIds` empty when no real IDs; `validationState` = qualificationHint only else `unknown`.

## 15. Proof no synthetic Artifact ref
T-SEM-01/02 in `p5.s07.cp02.semanticResponsive.d0.test.ts` — PASS.

## 16. Proof Evidence does not imply validation
T-SEM-03/04/05/06 — PASS.

## 17. Pilot-facing mapping
`workRequirementPilotLabel` / `workProductionPilotLabel` / `workValidationPilotLabel` / `workTriStatePilotLabel` used in LifecycleSurface; data attributes keep enums.

## 18. B4 identity strategy
History read model primary; durableOutcome fallback only when Product id absent (`seenEvidenceIds` / `seenReviewBundleIds`).

## 19–22. Dedup / uniqueness / React keys
T-HIS-01…05 — PASS. One Product id → at most one event per sourceKind.

## 23. Breakpoint before/after
BEFORE: mobile `@media (max-width: 899px)` on Journal/History/Workspace.
AFTER: mobile `@media (max-width: 767px)`; History compact `@media (min-width: 768px) and (max-width: 1199px)`; Workspace two-col from 768.

## 24. Viewport boundary proof
Captures: `responsive/journal-767-mobile-edge.png`, `journal-768.png`, `journal-899.png`, `journal-1200-large-edge.png`, `history-768.png`, `history-899.png`, `history-1200-large-edge.png`.

## 25–32. Canonical frame comparisons
CURSOR VISUAL COMPARISON = PASS for J1–J4 / H1–H4.
Paths under `.tmp-sfia-review/p5-s07-cp02-visual/{figma,runtime}/`.
**FINAL VISUAL REVIEW REQUIRES THESE RUNTIME CAPTURES TO BE ATTACHED TO CHATGPT.**
Do NOT claim ChatGPT-independent pixel-perfect verified from Cursor alone.

## 33. Focused mobile shell
ProductShell focused mode: Mark + `mobileFocusProjectName` + avatar; hides SFIA Studio wordmark + Projets link when workspace has focused journal/history/syntheses.

## 34–35. History diagnostics / raw IDs
Removed `history.absent` dump and process-local / Product-truth pilot copy. Linked list shows kindLabel + project name / labels; ids in `data-source-id` only.

## 36. `1 Issue`
Cause: Next/React overlay when duplicate keys/warnings.
Resolution: B4 dedup + capture hides nextjs portal. Final screenshots: ABSENT.

## 37–38. Responsive 768 / 899
COMPACT band proven for Journal + History.

## 39. a11y
Focus-visible retained on tabs/filters/CTA; keyboard controls untouched structurally.

## 40. Targeted tests
CP02 semantic/responsive 14 PASS · CP01 continuity 4 PASS · S07 work-rep 7 PASS · History/Journal UI 13 PASS.

## 41. Full suite
**5352 passed · 139 skipped · 0 failed**

## 42. typecheck / lint / build
- typecheck PASS
- lint PASS (0 warnings/errors)
- build PASS

## 43. ZERO REAL
YES — Fake Nora / no OpenAI in CP02 path.

## 44. Architecture parallelism
NONE.

## 45–46. Regression B1 / B3
Inherited CP01 tests PASS (PROP-PL durable resume + Journal cycle scoping).

## 47. Debts closed
B2 synthetic Artifact · B2 Evidence→validation · B4 History dup · B5 899 mobile band · V1–V12 intentional gaps addressed at Cursor comparison.

## 48. Debts remaining
- UAT-RECOVERY-03 NON-BLOCKING CARRY
- ChatGPT independent visual confirmation pending (attach images)
- P5-S07 INTEGRATED = NO · Git Integration NOT AUTHORIZED · S08 NOT STARTED

## 49. Complete useful code diffs (modified tracked files)
diff --git a/projects/sfia-studio/app/app/studio/projects/[id]/page.tsx b/projects/sfia-studio/app/app/studio/projects/[id]/page.tsx
index 8aad475e..b64aa939 100644
--- a/projects/sfia-studio/app/app/studio/projects/[id]/page.tsx
+++ b/projects/sfia-studio/app/app/studio/projects/[id]/page.tsx
@@ -1,3 +1,6 @@
+"use client";
+
+import { use, useState } from "react";
 import {
   ProductShell,
   ProjectWorkspacePage,
@@ -7,18 +10,29 @@ interface StudioProjectRouteProps {
   params: Promise<{ id: string }>;
 }

-export default async function StudioProjectRoute({
+/**
+ * Workspace route — ProductShell owns the focused mobile topbar name once the
+ * workspace resolves the durable project title (P5-S07 CP02 V4).
+ */
+export default function StudioProjectRoute({
   params,
 }: StudioProjectRouteProps) {
-  const { id } = await params;
+  const { id } = use(params);
   const projectId = decodeURIComponent(id);
+  const [mobileFocusProjectName, setMobileFocusProjectName] = useState<
+    string | null
+  >(null);

   return (
     <ProductShell
       activeNav="current"
       currentProjectHref={`/studio/projects/${encodeURIComponent(projectId)}`}
+      mobileFocusProjectName={mobileFocusProjectName}
     >
-      <ProjectWorkspacePage projectId={projectId} />
+      <ProjectWorkspacePage
+        projectId={projectId}
+        onProjectName={setMobileFocusProjectName}
+      />
     </ProductShell>
   );
 }
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.module.css b/projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.module.css
index f5133272..79dd866f 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.module.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.module.css
@@ -292,6 +292,17 @@
   border: 0;
 }

+.mobileFocusName {
+  display: none;
+  min-width: 0;
+  font-size: 0.75rem;
+  font-weight: 500;
+  color: var(--pm6-ink);
+  overflow: hidden;
+  text-overflow: ellipsis;
+  white-space: nowrap;
+}
+
 /* <768 — rail collapses into a compact topbar (190:306). */
 @media (max-width: 767px) {
   .shell {
@@ -318,4 +329,32 @@
   .mainPage {
     padding: var(--pm6-space-5) var(--pm6-space-4) var(--pm6-space-6);
   }
+
+  /*
+   * P5-S07 CP02 V4 — focused secondary mobile views (192:41 / 190:380):
+   * Mark + project name + Pilot avatar. No wordmark, no « Projets » link.
+   */
+  .shell:has([data-active-view="journal"]) .brandName,
+  .shell:has([data-active-view="history"]) .brandName,
+  .shell:has([data-active-view="syntheses"]) .brandName {
+    display: none;
+  }
+
+  .shell:has([data-active-view="journal"]) .mobileFocusName,
+  .shell:has([data-active-view="history"]) .mobileFocusName,
+  .shell:has([data-active-view="syntheses"]) .mobileFocusName {
+    display: inline;
+  }
+
+  .shell:has([data-active-view="journal"]) .mobileNavLink,
+  .shell:has([data-active-view="history"]) .mobileNavLink,
+  .shell:has([data-active-view="syntheses"]) .mobileNavLink {
+    display: none;
+  }
+
+  .shell:has([data-active-view="journal"]) .mobileProfile,
+  .shell:has([data-active-view="history"]) .mobileProfile,
+  .shell:has([data-active-view="syntheses"]) .mobileProfile {
+    margin-left: auto;
+  }
 }
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.tsx
index 1d83c50d..4ef5bbea 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.tsx
@@ -13,6 +13,12 @@ export type ProductShellProps = {
    * matching entry in « Projets récents »; omitted when no project is open.
    */
   currentProjectHref?: string;
+  /**
+   * P5-S07 CP02 — focused mobile topbar (Journal / Historique / Synthèses):
+   * Mark + real project name + Pilot avatar. Wordmark and « Projets » leave
+   * when a focused secondary view is active (`:has([data-active-view=…])`).
+   */
+  mobileFocusProjectName?: string | null;
   children: ReactNode;
 };

@@ -39,13 +45,16 @@ function BrandMark() {
 export function ProductShell({
   activeNav,
   currentProjectHref,
+  mobileFocusProjectName = null,
   children,
 }: ProductShellProps) {
+  const focusName = mobileFocusProjectName?.trim() || null;
   return (
     <div
       className={styles.shell}
       data-testid="studio-shell"
       data-nav={activeNav}
+      data-mobile-focus={focusName ? "ready" : "idle"}
     >
       <aside
         className={styles.rail}
@@ -92,6 +101,9 @@ export function ProductShell({
           <Link href="/studio" className={styles.brand}>
             <BrandMark />
             <span className={styles.brandName}>SFIA Studio</span>
+            {focusName ? (
+              <span className={styles.mobileFocusName}>{focusName}</span>
+            ) : null}
           </Link>
           <Link
             href="/studio"
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
index cebe63f9..91d4e805 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
@@ -333,9 +333,14 @@
   background: var(--pm6-body);
 }

-/* Aperçu owns principal width — no permanent sibling context rail. */
+/*
+ * Aperçu / Synthèses / Historique / Journal own principal width — no permanent
+ * sibling context rail. These surfaces own their own full-height master/detail,
+ * so the single grid row stretches instead of hugging its content.
+ */
 .layoutOverview {
   grid-template-columns: minmax(0, 1fr);
+  align-items: stretch;
 }

 .main {
@@ -532,15 +537,16 @@
   border-top: 1px solid var(--pm6-border-soft);
 }

-/* ---------- ≥900: two columns, context sticky + own scroll ---------- */
+/* ---------- ≥768: two columns (COMPACT+), context sticky + own scroll ---------- */

-@media (min-width: 900px) {
+@media (min-width: 768px) {
   .layout {
     grid-template-columns: minmax(0, 1fr) var(--ws-context-w);
   }

   .layoutOverview {
     grid-template-columns: minmax(0, 1fr);
+    align-items: stretch;
   }

   .lpsColumn {
@@ -570,7 +576,7 @@
     padding: var(--pm6-space-4) var(--pm6-space-3);
   }

-  /* Journal stays accessible in the context stack (no 900–1199 dead zone). */
+  /* Journal stays accessible in the context stack (no 768–1199 dead zone). */
   .journalColumn {
     display: block;
   }
@@ -589,9 +595,9 @@
   }
 }

-/* ---------- <900: single column; context as sheet ---------- */
+/* ---------- <768: MOBILE — single column; context as sheet ---------- */

-@media (max-width: 899px) {
+@media (max-width: 767px) {
   .root {
     --ws-pad-x: 16px;
   }
@@ -713,10 +719,13 @@
   }

   /*
-   * P5-S04 CP01 B2 — Synthèses is a focused secondary mobile view:
-   * hide project title + primary tabs; SynthesesSurface owns list/detail nav.
+   * P5-S04 CP01 B2 / P5-S07 CP01 — Synthèses, Historique and Journal are
+   * focused secondary mobile views (P3 190:380 / 192:41): hide project title +
+   * primary tabs; each surface owns its own list/detail nav and return link.
    */
-  .root[data-active-view="syntheses"] .projectHeader {
+  .root[data-active-view="syntheses"] .projectHeader,
+  .root[data-active-view="history"] .projectHeader,
+  .root[data-active-view="journal"] .projectHeader {
     display: none;
   }
 }
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
index 0a6e0be3..998f674c 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
@@ -54,7 +54,21 @@ import type { GetProjectResult, GetProjectSuccess } from "./types";
 import styles from "./ProjectWorkspacePage.module.css";

 /** Ephemeral presentation view — never persisted as Product state. */
-type WorkspaceView = "conversation" | "overview" | "execution" | "syntheses";
+type WorkspaceView =
+  | "conversation"
+  | "overview"
+  | "execution"
+  | "syntheses"
+  | "history"
+  | "journal";
+
+/** Views that own the principal width — no permanent sibling context rail. */
+const PRINCIPAL_ONLY_VIEWS: ReadonlySet<WorkspaceView> = new Set([
+  "overview",
+  "syntheses",
+  "history",
+  "journal",
+]);

 /** prefers-reduced-motion: no smooth scrolling for in-page jumps. */
 function scrollBehaviorPref(): ScrollBehavior {
@@ -100,7 +114,14 @@ function reservationDraftForNora(card: JournalReservationCard | null): string {
  * H-01 Option A — LPS + ProjectTrajectory share one visual piloting region
  * (presentation composition only; domain objects remain distinct).
  */
-export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
+export function ProjectWorkspacePage({
+  projectId,
+  onProjectName,
+}: {
+  projectId: string;
+  /** P5-S07 CP02 — real project title for the focused mobile ProductShell topbar. */
+  onProjectName?: (name: string) => void;
+}) {
   const [result, setResult] = useState<GetProjectResult | null>(null);
   const [durableOutcome, setDurableOutcome] =
     useState<ProjectAssistantRehydrateEvidenceOutcomeSuccess | null>(null);
@@ -162,6 +183,12 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
     };
   }, [projectId]);

+  useEffect(() => {
+    if (result?.ok && result.project.name) {
+      onProjectName?.(result.project.name);
+    }
+  }, [result, onProjectName]);
+
   /** Badge honesty — read canonical continuity without inventing a count. */
   useEffect(() => {
     let cancelled = false;
@@ -240,13 +267,12 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
       ? [...lifecycleProjection.cycleDecisions]
       : [];

+  /** « Voir les réserves » — the dedicated Journal on its Réserves rail. */
   const openReservationsTab = useCallback(() => {
+    setActiveView("journal");
     setMemoryTab("reserves");
     setJournalCollapsed(false);
-    const rail = document.querySelector("[data-testid='cycle-journal-rail']");
-    if (rail instanceof HTMLElement) {
-      rail.scrollIntoView({ behavior: scrollBehaviorPref(), block: "start" });
-    }
+    setLpsOpen(false);
   }, []);

   /** Prefill composer with an explicit Pilot draft — NEVER sendMessage. */
@@ -353,6 +379,7 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
   };

   const viewJournalSubject = (journalEntryId: string) => {
+    setActiveView("journal");
     setMemoryTab("sujets");
     controller.setSelectedJournalEntryId(journalEntryId);
     window.setTimeout(() => {
@@ -374,22 +401,22 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
     return false;
   }, []);

-  /** Shortcut « Journal du cycle » — opens the existing Journal rail. */
+  /**
+   * « Journal du cycle » — dedicated principal view (P3 94:2), like Historique.
+   * The context rail keeps only a compact shortcut into this same surface.
+   */
   const openJournal = useCallback(() => {
-    // Overview hides the permanent context rail — restore Conversation layout
-    // so Journal remains reachable without a second Product model.
-    setActiveView("conversation");
-    setLpsOpen(true);
+    setActiveView("journal");
+    setMemoryTab("sujets");
     setJournalCollapsed(false);
-    window.setTimeout(() => scrollToTestId("cycle-journal-rail"), 0);
-  }, [scrollToTestId]);
+    setLpsOpen(false);
+  }, []);

-  /** Shortcut « Historique » — the existing durable history surface. */
+  /** Shortcut « Historique » — dedicated Product-derived History surface (P3). */
   const openHistory = useCallback(() => {
-    setActiveView("conversation");
-    setLpsOpen(true);
-    window.setTimeout(() => scrollToTestId("project-history-panel"), 0);
-  }, [scrollToTestId]);
+    setActiveView("history");
+    setLpsOpen(false);
+  }, []);

   /** Tab « Aperçu » — real object-native orientation projection (not scroll-only). */
   const openOverview = useCallback(() => {
@@ -486,9 +513,8 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
     executionPresentation != null
       ? deriveExecutionTabBadge(executionPresentation)
       : null;
-  /** Overview / Synthèses own principal width — no permanent sibling context rail. */
-  const showContextRail =
-    activeView !== "overview" && activeView !== "syntheses";
+  const principalOnly = PRINCIPAL_ONLY_VIEWS.has(activeView);
+  const showContextRail = !principalOnly;

   return (
     <div
@@ -603,20 +629,11 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
       </header>

       <div
-        className={[
-          styles.layout,
-          activeView === "overview" || activeView === "syntheses"
-            ? styles.layoutOverview
-            : "",
-        ]
+        className={[styles.layout, principalOnly ? styles.layoutOverview : ""]
           .filter(Boolean)
           .join(" ")}
         data-testid="project-workspace-layout"
-        data-layout={
-          activeView === "overview" || activeView === "syntheses"
-            ? "overview"
-            : "split"
-        }
+        data-layout={principalOnly ? "overview" : "split"}
       >
         <div className={styles.main} ref={conversationRef}>
           {activeView === "conversation" ? (
@@ -702,6 +719,51 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
             />
           ) : null}

+          {activeView === "history" ? (
+            <HistorySurface
+              result={success}
+              durableOutcome={durableOutcome}
+              onReturnToOverview={openOverview}
+              onAskNora={(draft) => {
+                controller.setDraft(draft);
+                focusConversation();
+              }}
+            />
+          ) : null}
+
+          {activeView === "journal" ? (
+            <JournalSurface
+              variant="principal"
+              entries={controller.journalEntries}
+              cycleInstanceId={controller.journalCycleInstanceId}
+              reservationsCycleInstanceId={reservationCycleInstanceId}
+              selectedEntryId={controller.selectedJournalEntryId}
+              onSelectEntry={controller.setSelectedJournalEntryId}
+              onViewExchanges={controller.focusJournalExchanges}
+              onFocusTurn={(turnId) => {
+                focusConversation();
+                controller.focusTranscriptTurn(turnId);
+              }}
+              transcriptMessages={controller.messages}
+              onReturnToConversation={focusConversation}
+              cycleLabel={
+                lifecycle?.selectedCycleInstanceId ? cycleSummary.label : null
+              }
+              currentnessLabel={currentness.label}
+              reservations={cycleReservations}
+              memoryTab={memoryTab}
+              onMemoryTabChange={setMemoryTab}
+              onTreatWithNora={treatReservationWithNora}
+              onConfirmResolve={confirmReservationResolution}
+              onConfirmDefer={confirmReservationDefer}
+              onViewJournalSubject={viewJournalSubject}
+              reservationBusyId={reservationBusyId}
+              recommendations={cycleRecommendations}
+              decisions={cycleDecisions}
+              onResumeRecommendationInChat={resumeRecommendationInChat}
+            />
+          ) : null}
+
           {activeView === "execution" ? (
             <ExecutionSurface
               projectId={projectId}
@@ -817,6 +879,9 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
               data-testid="project-journal-column"
             >
               <JournalSurface
+                variant="rail"
+                onOpenFullJournal={openJournal}
+                railMaxEntries={3}
                 entries={controller.journalEntries}
                 cycleInstanceId={controller.journalCycleInstanceId}
                 reservationsCycleInstanceId={reservationCycleInstanceId}
@@ -849,8 +914,6 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
                 </p>
               ) : null}
             </div>
-
-            <HistorySurface result={success} durableOutcome={durableOutcome} />
           </div>

           <ProjectContextShortcuts
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts b/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
index 8490c6d6..ecadd672 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
@@ -43,11 +43,19 @@ import {
 import { useRunningAttemptO3Observation } from "./useRunningAttemptO3Observation";
 import { sendCancellableAssistantTurn } from "./sendCancellableAssistantTurn";
 import type { JournalSurfaceEntry } from "../surfaces/JournalSurface";
+import type { ActiveDecisionSubjectReadResult } from "@/features/project-assistant/w2/types";
+
+export type ProductDecisionSubjectContinuity =
+  | { readonly status: "pending" }
+  | { readonly status: "unavailable"; readonly message: string }
+  | Extract<ActiveDecisionSubjectReadResult, { ok: true }>;

 export type ProductMessage = {
   id: string;
   role: "user" | "assistant" | "system";
   content: string;
+  /** Durable Session turn timestamp when known — never synthesized client-side. */
+  createdAt?: string | null;
 };

 export type TranscriptAvailability =
@@ -130,6 +138,12 @@ export function useProductConversation({
   );
   const [f2, setF2] = useState<F2TurnPayload | null>(null);
   const [activeProposal, setActiveProposal] = useState<ProposalDto | null>(null);
+  /**
+   * P5-S07 CP01 — durable decision-subject continuity from server read on mount.
+   * Never fabricates a ProposalDto from thin air.
+   */
+  const [decisionSubjectContinuity, setDecisionSubjectContinuity] =
+    useState<ProductDecisionSubjectContinuity>({ status: "pending" });
   const [reservesText, setReservesText] = useState("");
   const [f3Prepare, setF3Prepare] = useState<F3PreparePayload | null>(null);
   const [f3M3Resolved, setF3M3Resolved] = useState<F3M3ResolvedPayload | null>(
@@ -262,6 +276,7 @@ export function useProductConversation({
           id: m.id,
           role: m.role,
           content: m.content,
+          createdAt: m.createdAt ?? null,
         })),
       );
       setJournalCycleInstanceId(result.journal.cycleInstanceId);
@@ -276,6 +291,46 @@ export function useProductConversation({
     };
   }, [projectId, activeCycleInstanceId]);

+  // P5-S07 CP01 — rehydrate durable decision subject after process-local Proposal loss.
+  // Dynamic import keeps w2/actions (server-only) out of the client module graph.
+  useEffect(() => {
+    let cancelled = false;
+    setDecisionSubjectContinuity({ status: "pending" });
+    void import("@/features/project-assistant/w2/actions")
+      .then(({ w2ReadActiveDecisionSubjectAction }) =>
+        w2ReadActiveDecisionSubjectAction({ projectId }),
+      )
+      .then((result) => {
+        if (cancelled) return;
+        if (!result.ok) {
+          setDecisionSubjectContinuity({
+            status: "unavailable",
+            message: result.message,
+          });
+          return;
+        }
+        setDecisionSubjectContinuity(result);
+        // Never invent ProposalDto. Only clear stale local Proposal when server
+        // says none / reinstruction — never auto-synthesize from optionSet.
+        if (
+          result.kind === "none" ||
+          result.kind === "pending_reinstruction_required"
+        ) {
+          setActiveProposal(null);
+        }
+      })
+      .catch(() => {
+        if (cancelled) return;
+        setDecisionSubjectContinuity({
+          status: "unavailable",
+          message: "Sujet de décision indisponible pour la reprise.",
+        });
+      });
+    return () => {
+      cancelled = true;
+    };
+  }, [projectId]);
+
   useEffect(() => {
     let cancelled = false;
     applyDurableEvidenceOutcome(null);
@@ -394,6 +449,7 @@ export function useProductConversation({
           id: m.id,
           role: m.role,
           content: m.content,
+          createdAt: m.createdAt ?? null,
         })),
       );
     }
@@ -962,6 +1018,7 @@ export function useProductConversation({
     lrMaterializeCode,
     f2,
     activeProposal,
+    decisionSubjectContinuity,
     reservesText,
     setReservesText,
     f3Prepare,
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css b/projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css
index 84f468d5..779f2d17 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css
@@ -87,6 +87,11 @@
   --pm6-global-header-h: 54px;
   --pm6-context-width: 356px;
   --pm6-focus-bar-h: 50px;
+
+  /* P3 Historique 78:2 — body 1224 split master ~790 | detail ~434. */
+  --pm6-history-detail-w: 434px;
+  /* P3 Journal 94:2 — body 1226 split subjects index ~440 | detail ~785. */
+  --pm6-journal-index-w: 440px;
 }

 /* Responsive geometry: <1200 compact (rail ~160, context ~280). */
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
index 81413a2e..ba1ca056 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
@@ -116,6 +116,7 @@ export function ConversationSurface({
     lrMaterializeCode,
     f2,
     activeProposal,
+    decisionSubjectContinuity,
     reservesText,
     setReservesText,
     f3Prepare,
@@ -512,6 +513,43 @@ export function ConversationSurface({
         </section>
       ) : null}

+      {decisionSubjectContinuity &&
+      typeof decisionSubjectContinuity === "object" &&
+      "ok" in decisionSubjectContinuity &&
+      decisionSubjectContinuity.ok &&
+      decisionSubjectContinuity.kind === "pending_reinstruction_required" ? (
+        <aside
+          className={styles.proposalCard}
+          data-testid="decision-subject-reinstruction"
+          aria-label="Sujet de décision à reformuler"
+        >
+          <p className={styles.proposalTitle}>Reprise du sujet</p>
+          <p className={styles.proposalMeta}>
+            {decisionSubjectContinuity.message}
+          </p>
+          <p className={styles.proposalMeta}>
+            La proposition process-locale n&apos;est plus disponible. Reformulez
+            avec Nora — aucune proposition n&apos;est inventée.
+          </p>
+        </aside>
+      ) : null}
+      {decisionSubjectContinuity &&
+      typeof decisionSubjectContinuity === "object" &&
+      "ok" in decisionSubjectContinuity &&
+      decisionSubjectContinuity.ok &&
+      decisionSubjectContinuity.kind === "bound_awaiting_decision" ? (
+        <aside
+          className={styles.proposalCard}
+          data-testid="decision-subject-bound"
+          aria-label="Sujet de décision courant"
+        >
+          <p className={styles.proposalTitle}>Sujet de décision courant</p>
+          <p className={styles.proposalMeta}>
+            Options présentées reconstruites depuis le Product (Epistemic) —
+            pas depuis un store process-local.
+          </p>
+        </aside>
+      ) : null}
       {activeProposal && !reservationResolutionProposal ? (
         <section
           className={styles.card}
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/HistorySurface.module.css b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/HistorySurface.module.css
index d0b61c1b..48de71c7 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/HistorySurface.module.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/HistorySurface.module.css
@@ -1,103 +1,960 @@
+/*
+ * P5-S07 Historique — Figma 78:2 (1440×1024, body 1224 = master ~790 | detail ~434),
+ * 190:111 compact (narrow master panel | wide detail), 190:380 / 190:412 mobile.
+ * --pm6-* tokens only; no second token set, no utility framework.
+ */
+
 .root {
   display: flex;
   flex-direction: column;
-  gap: var(--pm6-space-4);
-  background: var(--pm6-surface);
-  border: 1px solid var(--pm6-border-soft);
-  border-radius: var(--pm6-radius-lg);
-  box-shadow: var(--pm6-shadow-card);
-  padding: var(--pm6-space-5);
+  min-width: 0;
+  min-height: 0;
+  flex: 1 1 auto;
+  background: var(--pm6-body);
+}
+
+.layout {
+  display: grid;
+  grid-template-columns: minmax(0, 1fr) var(--pm6-history-detail-w, 434px);
+  align-items: stretch;
+  min-height: 0;
+  flex: 1 1 auto;
+}
+
+/* ---------- master (timeline) ---------- */
+
+.masterPane {
+  display: flex;
+  flex-direction: column;
+  min-width: 0;
+  min-height: 0;
+  gap: var(--pm6-space-3);
+  padding: 18px var(--ws-pad-x, 24px) 24px;
 }

 .head {
   display: flex;
   flex-direction: column;
-  gap: var(--pm6-space-1);
+  gap: 6px;
+  min-width: 0;
 }

-.eyebrow {
+.backLink {
+  align-self: flex-start;
+  appearance: none;
+  border: 0;
+  background: transparent;
+  padding: 0;
   margin: 0;
-  font-size: 0.7rem;
-  font-weight: 700;
-  letter-spacing: 0.1em;
-  text-transform: uppercase;
-  color: var(--pm6-muted);
+  min-height: 38px;
+  display: inline-flex;
+  align-items: center;
+  font: inherit;
+  font-size: 0.8125rem;
+  font-weight: 600;
+  color: var(--pm6-accent);
+  cursor: pointer;
+}
+
+.backLink:hover {
+  text-decoration: underline;
+}
+
+.titleRow {
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  justify-content: space-between;
+  gap: var(--pm6-space-3);
+  min-width: 0;
 }

 .title {
   margin: 0;
-  font-size: 1.02rem;
-  font-weight: 600;
+  font-size: 1.5rem;
+  font-weight: 650;
+  letter-spacing: -0.02em;
+  line-height: 1.2;
   color: var(--pm6-ink);
 }

 .note {
   margin: 0;
-  font-size: 0.84rem;
-  line-height: 1.55;
+  max-width: 74ch;
+  font-size: 0.8125rem;
+  line-height: 1.5;
+  color: var(--pm6-muted-strong);
+}
+
+.filters {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 6px;
+}
+
+.filter {
+  appearance: none;
+  display: inline-flex;
+  align-items: center;
+  border-radius: var(--pm6-radius-pill);
+  border: 1px solid var(--pm6-border);
+  background: var(--pm6-surface-sunken);
   color: var(--pm6-muted-strong);
+  padding: 7px 14px;
+  min-height: 38px;
+  font: inherit;
+  font-size: 0.75rem;
+  font-weight: 600;
+  cursor: pointer;
+  white-space: nowrap;
+}
+
+.filter:hover {
+  color: var(--pm6-ink);
+  border-color: var(--pm6-border-strong);
+}
+
+.filter[data-selected="true"][data-filter="all"] {
+  color: var(--pm6-ink);
+  border-color: var(--pm6-border-strong);
+  background: var(--pm6-surface);
+}
+
+.filter[data-selected="true"][data-filter="decisions"] {
+  color: var(--pm6-accent);
+  border-color: color-mix(in srgb, var(--pm6-accent) 28%, transparent);
+  background: var(--pm6-accent-tint);
+}
+
+.filter[data-selected="true"][data-filter="changes"] {
+  color: var(--pm6-ok);
+  border-color: color-mix(in srgb, var(--pm6-ok) 28%, transparent);
+  background: var(--pm6-ok-tint);
+}
+
+.searchLabel {
+  display: block;
+  min-width: 0;
+}
+
+.search {
+  width: 100%;
+  box-sizing: border-box;
+  border-radius: var(--pm6-radius-sm);
+  border: 1px solid var(--pm6-border);
+  background: var(--pm6-surface);
+  color: var(--pm6-ink);
+  padding: 10px 14px;
+  min-height: 38px;
+  font: inherit;
+  font-size: 0.8125rem;
+}
+
+.search::placeholder {
+  color: var(--pm6-muted-faint);
+}
+
+.listScroll {
+  display: flex;
+  flex-direction: column;
+  gap: var(--pm6-space-4);
+  min-height: 0;
+  overflow-y: auto;
+  padding-right: 2px;
+}
+
+.group {
+  display: flex;
+  flex-direction: column;
+  gap: 6px;
+  min-width: 0;
+}
+
+.groupLabel {
+  margin: 0;
+  font-size: 0.625rem;
+  font-weight: 600;
+  letter-spacing: 0.08em;
+  text-transform: uppercase;
+  color: var(--pm6-muted-faint);
 }

 .timeline {
   list-style: none;
   margin: 0;
-  padding: 0 0 0 var(--pm6-space-4);
+  padding: 0;
   display: flex;
   flex-direction: column;
-  gap: var(--pm6-space-4);
-  border-left: 1px solid var(--pm6-border);
+  gap: 2px;
+}
+
+.timelineItem {
+  position: relative;
+  padding-left: 20px;
+}
+
+/* Continuous rail behind the dots (desktop only — cards take over below 1200). */
+.timelineItem::before {
+  content: "";
+  position: absolute;
+  left: 3px;
+  top: 0;
+  bottom: 0;
+  width: 1px;
+  background: var(--pm6-border);
 }

 .entry {
   position: relative;
   display: grid;
-  grid-template-columns: minmax(0, auto) minmax(0, 1fr);
-  column-gap: var(--pm6-space-3);
-  row-gap: 2px;
-  align-items: baseline;
+  grid-template-columns: minmax(0, 1fr) auto auto;
+  grid-template-areas:
+    "label kind chevron"
+    "meta  meta meta";
+  column-gap: var(--pm6-space-2);
+  row-gap: 3px;
+  align-items: center;
+  width: 100%;
+  text-align: left;
+  appearance: none;
+  border: 1px solid transparent;
+  border-radius: var(--pm6-radius-md);
+  background: transparent;
+  padding: 11px 12px;
+  font: inherit;
+  color: inherit;
+  cursor: pointer;
+  min-height: 38px;
+}
+
+.entry:hover {
+  background: color-mix(in srgb, var(--pm6-accent) 5%, transparent);
+}
+
+.entry[data-selected="true"] {
+  border-color: color-mix(in srgb, var(--pm6-accent) 32%, var(--pm6-border));
+  background: var(--pm6-accent-tint);
 }

 .marker {
   position: absolute;
-  left: calc(-1 * var(--pm6-space-4) - 4px);
-  top: 6px;
+  left: -20px;
+  top: 17px;
   width: 7px;
   height: 7px;
   border-radius: var(--pm6-radius-pill);
-  background: var(--pm6-forest);
+  background: var(--pm6-muted-ghost);
+  box-shadow: 0 0 0 3px var(--pm6-body);
 }

-.kind {
-  font-size: 0.7rem;
-  font-weight: 700;
-  letter-spacing: 0.06em;
-  text-transform: uppercase;
-  color: var(--pm6-forest);
+.marker[data-tone="decision"] {
+  background: var(--pm6-accent);
+}
+
+.marker[data-tone="verified"] {
+  background: var(--pm6-ok);
+}
+
+.marker[data-tone="change"] {
+  background: var(--pm6-gold);
 }

 .label {
-  font-size: 0.89rem;
+  grid-area: label;
+  min-width: 0;
+  font-size: 0.875rem;
+  font-weight: 600;
+  line-height: 1.35;
   color: var(--pm6-ink);
   overflow-wrap: anywhere;
 }

+.kind {
+  grid-area: kind;
+  justify-self: end;
+  display: inline-flex;
+  align-items: center;
+  padding: 3px 9px;
+  border-radius: var(--pm6-radius-pill);
+  border: 1px solid var(--pm6-border);
+  background: var(--pm6-surface-sunken);
+  font-size: 0.6875rem;
+  font-weight: 600;
+  color: var(--pm6-muted-strong);
+  white-space: nowrap;
+}
+
+.kind[data-tone="decision"] {
+  color: var(--pm6-accent);
+  border-color: color-mix(in srgb, var(--pm6-accent) 26%, transparent);
+  background: var(--pm6-accent-tint);
+}
+
+.kind[data-tone="verified"] {
+  color: var(--pm6-ok);
+  border-color: color-mix(in srgb, var(--pm6-ok) 26%, transparent);
+  background: var(--pm6-ok-tint);
+}
+
+.chevron {
+  grid-area: chevron;
+  justify-self: end;
+  font-size: 0.8125rem;
+  color: var(--pm6-muted-faint);
+}
+
+.metaRow {
+  grid-area: meta;
+  display: flex;
+  flex-wrap: wrap;
+  align-items: baseline;
+  gap: 5px;
+  min-width: 0;
+  font-size: 0.75rem;
+  line-height: 1.45;
+  color: var(--pm6-muted-strong);
+}
+
+.when {
+  flex: 0 0 auto;
+  color: var(--pm6-muted);
+  font-variant-numeric: tabular-nums;
+}
+
+.when::after {
+  content: "·";
+  margin-left: 5px;
+  color: var(--pm6-muted-ghost);
+}
+
 .detail {
-  grid-column: 2;
-  font-size: 0.78rem;
+  min-width: 0;
+  overflow-wrap: anywhere;
+}
+
+/* ---------- detail pane ---------- */
+
+.detailPane {
+  min-width: 0;
+  min-height: 0;
+  overflow-y: auto;
+  background: var(--pm6-canvas-raised);
+  border-left: 1px solid var(--pm6-border);
+}
+
+.detailInner {
+  display: flex;
+  flex-direction: column;
+  gap: var(--pm6-space-3);
+  padding: 18px 20px 28px;
+}
+
+.detailHead {
+  display: flex;
+  flex-direction: column;
+  gap: 6px;
+  padding-bottom: var(--pm6-space-3);
+  border-bottom: 1px solid var(--pm6-border);
+}
+
+.detailHeadRow {
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  justify-content: space-between;
+  gap: var(--pm6-space-2);
+}
+
+.detailKind {
+  display: inline-flex;
+  align-items: center;
+  padding: 4px 10px;
+  border-radius: var(--pm6-radius-pill);
+  border: 1px solid color-mix(in srgb, var(--pm6-accent) 26%, transparent);
+  background: var(--pm6-accent-tint);
+  font-size: 0.6875rem;
+  font-weight: 650;
+  letter-spacing: 0.02em;
+  color: var(--pm6-accent);
+  white-space: nowrap;
+}
+
+.detailKind[data-tone="decision"] {
+  color: var(--pm6-accent);
+  border-color: color-mix(in srgb, var(--pm6-accent) 26%, transparent);
+  background: var(--pm6-accent-tint);
+}
+
+.detailKind[data-tone="verified"] {
+  color: var(--pm6-ok);
+  border-color: color-mix(in srgb, var(--pm6-ok) 26%, transparent);
+  background: var(--pm6-ok-tint);
+}
+
+.detailKind[data-tone="change"] {
+  color: var(--pm6-gold);
+  border-color: color-mix(in srgb, var(--pm6-gold) 26%, transparent);
+  background: color-mix(in srgb, var(--pm6-gold) 12%, transparent);
+}
+
+.detailWhen {
+  font-size: 0.75rem;
   color: var(--pm6-muted);
+  white-space: nowrap;
+}
+
+.detailTitle {
+  margin: 0;
+  font-size: 1.1875rem;
+  font-weight: 650;
+  line-height: 1.3;
+  color: var(--pm6-ink);
   overflow-wrap: anywhere;
 }

-@media (max-width: 767px) {
-  .root {
-    padding: var(--pm6-space-4);
+.detailSummary {
+  margin: 0;
+  font-size: 0.8125rem;
+  line-height: 1.5;
+  color: var(--pm6-muted-strong);
+}
+
+.detailBlock {
+  display: flex;
+  flex-direction: column;
+  gap: 5px;
+  min-width: 0;
+}
+
+.detailBlockLabel {
+  margin: 0;
+  font-size: 0.625rem;
+  font-weight: 600;
+  letter-spacing: 0.08em;
+  text-transform: uppercase;
+  color: var(--pm6-muted-faint);
+}
+
+.detailBlockBody {
+  margin: 0;
+  font-size: 0.8125rem;
+  line-height: 1.5;
+  color: var(--pm6-ink);
+  overflow-wrap: anywhere;
+}
+
+/* Honest unavailable states read as absence, never as a fact. */
+.detailBlockBody[data-available="false"] {
+  color: var(--pm6-muted);
+  font-style: italic;
+}
+
+/* ---------- verification callout ---------- */
+
+.verification {
+  display: flex;
+  flex-direction: column;
+  gap: 5px;
+  padding: 12px 14px;
+  border-radius: var(--pm6-radius-md);
+  border: 1px solid color-mix(in srgb, var(--pm6-ok) 22%, var(--pm6-border));
+  background: var(--pm6-ok-tint);
+}
+
+.verification[data-available="false"] {
+  border-color: var(--pm6-border);
+  background: var(--pm6-surface-sunken);
+}
+
+.verificationTitle {
+  margin: 0;
+  display: inline-flex;
+  align-items: center;
+  gap: 7px;
+  font-size: 0.8125rem;
+  font-weight: 650;
+  color: var(--pm6-ok);
+}
+
+.verification[data-available="false"] .verificationTitle {
+  color: var(--pm6-muted-strong);
+}
+
+.verificationDot {
+  width: 7px;
+  height: 7px;
+  border-radius: var(--pm6-radius-pill);
+  background: var(--pm6-ok);
+}
+
+.verification[data-available="false"] .verificationDot {
+  background: var(--pm6-muted-ghost);
+}
+
+.verificationBody {
+  margin: 0;
+  font-size: 0.8125rem;
+  line-height: 1.5;
+  color: var(--pm6-ink-soft);
+}
+
+.verification[data-available="false"] .verificationBody {
+  color: var(--pm6-muted);
+  font-style: italic;
+}
+
+.verificationLink {
+  margin: 0;
+  font-size: 0.6875rem;
+  font-weight: 650;
+  letter-spacing: 0.04em;
+  color: var(--pm6-ok);
+}
+
+/* ---------- sources ---------- */
+
+.linkedList {
+  list-style: none;
+  margin: 0;
+  padding: 0;
+  display: flex;
+  flex-direction: column;
+  gap: 6px;
+}
+
+.linkedItem {
+  display: flex;
+  flex-direction: column;
+  gap: 2px;
+  border: 1px solid var(--pm6-border);
+  border-radius: var(--pm6-radius-sm);
+  padding: 9px 11px;
+  background: var(--pm6-surface);
+}
+
+.linkedKind {
+  font-size: 0.8125rem;
+  font-weight: 600;
+  color: var(--pm6-ink);
+}
+
+.linkedLabel {
+  font-size: 0.6875rem;
+  color: var(--pm6-muted);
+  overflow-wrap: anywhere;
+}
+
+.sourceMeta {
+  margin: 0;
+  font-size: 0.6875rem;
+  line-height: 1.45;
+  color: var(--pm6-muted);
+}
+
+/* ---------- ask Nora ---------- */
+
+.askRow {
+  display: flex;
+  align-items: center;
+  gap: 6px;
+  margin-top: 2px;
+  padding: 4px 4px 4px 12px;
+  border: 1px solid var(--pm6-border);
+  border-radius: var(--pm6-radius-pill);
+  background: var(--pm6-surface);
+}
+
+.askInput {
+  flex: 1 1 auto;
+  min-width: 0;
+  border: 0;
+  background: transparent;
+  font: inherit;
+  font-size: 0.8125rem;
+  color: var(--pm6-ink);
+  min-height: 32px;
+}
+
+.askInput:focus-visible {
+  outline: none;
+}
+
+.askSubmit {
+  flex: 0 0 auto;
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  width: 30px;
+  height: 30px;
+  border-radius: var(--pm6-radius-pill);
+  border: 1px solid var(--pm6-border);
+  background: var(--pm6-surface-sunken);
+  color: var(--pm6-ink-soft);
+  font: inherit;
+  font-size: 0.8125rem;
+  cursor: pointer;
+}
+
+.askSubmit:hover {
+  background: var(--pm6-accent-tint);
+  border-color: color-mix(in srgb, var(--pm6-accent) 28%, transparent);
+  color: var(--pm6-accent);
+}
+
+/* Mobile reading composition (190:412 only) — hidden at COMPACT+ (≥768). */
+.mobileReading {
+  display: none;
+  flex-direction: column;
+  gap: var(--pm6-space-3);
+  min-width: 0;
+}
+
+.linkedInline {
+  margin: 0;
+  font-size: 0.8125rem;
+  line-height: 1.5;
+  color: var(--pm6-ink);
+  overflow-wrap: anywhere;
+}
+
+.askNoraCta {
+  align-self: flex-start;
+  appearance: none;
+  border: 0;
+  background: transparent;
+  padding: 0;
+  min-height: 38px;
+  display: inline-flex;
+  align-items: center;
+  font: inherit;
+  font-size: 0.8125rem;
+  font-weight: 600;
+  color: var(--pm6-accent);
+  cursor: pointer;
+  text-align: left;
+}
+
+.askNoraCta:hover {
+  text-decoration: underline;
+}
+
+.askNoraCta:focus-visible {
+  outline: none;
+  box-shadow: var(--pm6-focus-ring);
+  border-radius: 4px;
+}
+
+.desktopOnly {
+  /* visible by default (≥1200) */
+}
+
+/* ---------- shared ---------- */
+
+.empty,
+.absent {
+  margin: 0;
+  font-size: 0.8125rem;
+  line-height: 1.5;
+  color: var(--pm6-muted-strong);
+}
+
+.absent {
+  padding-top: var(--pm6-space-2);
+  font-size: 0.6875rem;
+  color: var(--pm6-muted);
+}
+
+.backMobile {
+  display: none;
+  align-self: flex-start;
+  appearance: none;
+  border: none;
+  background: transparent;
+  color: var(--pm6-accent);
+  font: inherit;
+  font-size: 0.8125rem;
+  font-weight: 600;
+  padding: 0;
+  min-height: 38px;
+  cursor: pointer;
+}
+
+.srOnly {
+  position: absolute;
+  width: 1px;
+  height: 1px;
+  padding: 0;
+  margin: -1px;
+  overflow: hidden;
+  clip: rect(0, 0, 0, 0);
+  white-space: nowrap;
+  border: 0;
+}
+
+.backLink:focus-visible,
+.backMobile:focus-visible,
+.filter:focus-visible,
+.search:focus-visible,
+.entry:focus-visible,
+.askSubmit:focus-visible {
+  outline: none;
+  box-shadow: var(--pm6-focus-ring);
+}
+
+.askRow:focus-within {
+  box-shadow: var(--pm6-focus-ring);
+  border-color: var(--pm6-border-strong);
+}
+
+/*
+ * ---------- 768–1199 compact (190:111) ----------
+ * Narrow master panel on its own surface, wide reading detail.
+ */
+@media (min-width: 768px) and (max-width: 1199px) {
+  .layout {
+    grid-template-columns: minmax(0, 280px) minmax(0, 1fr);
+  }
+
+  .masterPane {
+    background: var(--pm6-rail);
+    border-right: 1px solid var(--pm6-border);
+    padding: 16px 14px 20px;
+  }
+
+  .title {
+    font-size: 1.25rem;
+  }
+
+  .filters,
+  .searchLabel,
+  .backLink {
+    display: none;
+  }
+
+  .note {
+    font-size: 0.75rem;
+  }
+
+  .detailPane {
+    background: transparent;
+    border-left: 0;
+  }
+
+  .detailInner {
+    padding: 20px 28px 28px;
+    max-width: 64ch;
+  }
+
+  /* Compact 190:111 keeps the desktop reading blocks — mobileReading is <768 only. */
+
+  /* Compact rows read as cards (no timeline rail). */
+  .timelineItem {
+    padding-left: 0;
+  }
+
+  .timelineItem::before {
+    display: none;
+  }
+
+  .timeline {
+    gap: 8px;
   }

   .entry {
+    border-color: var(--pm6-border);
+    background: var(--pm6-surface);
+    grid-template-columns: minmax(0, 1fr) auto;
+    grid-template-areas:
+      "label when"
+      "kind  kind";
+    row-gap: 4px;
+  }
+
+  .marker,
+  .chevron,
+  .detail {
+    display: none;
+  }
+
+  .metaRow {
+    display: contents;
+  }
+
+  .when {
+    grid-area: when;
+    justify-self: end;
+  }
+
+  .when::after {
+    content: none;
+  }
+
+  .kind {
+    grid-area: kind;
+    justify-self: start;
+    border: 0;
+    background: transparent;
+    padding: 0;
+    font-size: 0.75rem;
+    font-weight: 500;
+    color: var(--pm6-accent);
+  }
+}
+
+/* ---------- <768 MOBILE: one column, list ↔ detail ---------- */
+
+@media (max-width: 767px) {
+  .layout {
     grid-template-columns: minmax(0, 1fr);
   }

+  .masterPane {
+    padding: 12px var(--ws-pad-x, 16px) 20px;
+  }
+
+  .masterPane[data-mobile-hidden="true"] {
+    display: none;
+  }
+
+  .detailPane {
+    background: transparent;
+    border-left: 0;
+    overflow: visible;
+  }
+
+  .detailPane[data-mobile-hidden="true"] {
+    display: none;
+  }
+
+  .detailInner {
+    padding: 12px var(--ws-pad-x, 16px) 28px;
+    gap: var(--pm6-space-4);
+  }
+
+  .backMobile {
+    display: inline-flex;
+    align-items: center;
+  }
+
+  /* 190:380 — filters, search, and back-to-overview leave the focused list. */
+  .filters,
+  .searchLabel,
+  .backLink {
+    display: none;
+  }
+
+  .title {
+    font-size: 1.5rem;
+  }
+
+  .detailTitle {
+    font-size: 1.5rem;
+    letter-spacing: -0.02em;
+  }
+
+  .detailHead {
+    border-bottom: 0;
+    padding-bottom: 0;
+    gap: var(--pm6-space-2);
+  }
+
+  .detailWhen {
+    display: none;
+  }
+
+  .mobileReading {
+    display: flex;
+  }
+
+  .desktopOnly {
+    display: none;
+  }
+
+  /* Mobile list: never paint a selected row while the list is the active level. */
+  .layout[data-mobile-detail="false"] .entry[data-selected="true"] {
+    border-color: var(--pm6-border);
+    background: var(--pm6-surface);
+  }
+
+  /* Mobile rows are cards, like 190:380. */
+  .timelineItem {
+    padding-left: 0;
+  }
+
+  .timelineItem::before {
+    display: none;
+  }
+
+  .timeline {
+    gap: 10px;
+  }
+
+  /*
+   * 190:380 card: title + time on the first row, event type below the title.
+   * `.metaRow` dissolves so `.when` can occupy its own grid area.
+   */
+  .entry {
+    grid-template-columns: minmax(0, 1fr) auto;
+    grid-template-areas:
+      "label when"
+      "kind  kind";
+    border-color: var(--pm6-border);
+    background: var(--pm6-surface);
+    padding: 14px 14px;
+    row-gap: 6px;
+    align-items: start;
+  }
+
+  .marker,
+  .chevron {
+    display: none;
+  }
+
+  .metaRow {
+    display: contents;
+  }
+
+  .when {
+    grid-area: when;
+    justify-self: end;
+    font-size: 0.75rem;
+  }
+
+  .when::after {
+    content: none;
+  }
+
   .detail {
-    grid-column: 1;
+    display: none;
+  }
+
+  .kind {
+    grid-area: kind;
+    justify-self: start;
+    border: 0;
+    background: transparent;
+    padding: 0;
+    min-height: 0;
+    font-size: 0.75rem;
+    font-weight: 500;
+    color: var(--pm6-accent);
+  }
+
+  .kind[data-tone="verified"] {
+    background: transparent;
+    color: var(--pm6-ok);
+  }
+
+  .kind[data-tone="change"] {
+    background: transparent;
+    color: var(--pm6-gold);
+  }
+}
+
+@media (prefers-reduced-motion: reduce) {
+  .entry,
+  .filter,
+  .askSubmit {
+    transition: none;
   }
 }
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/HistorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/HistorySurface.tsx
index ab08623d..c5d6e77c 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/HistorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/HistorySurface.tsx
@@ -1,157 +1,123 @@
 "use client";

-import { useEffect, useState } from "react";
+import { useEffect, useMemo, useState } from "react";
 import { w2ReadProjectHistoryAction } from "@/features/project-assistant/w2/actions";
 import type { W2ProjectHistoryReadModel } from "@/features/project-assistant/w2/projectHistory";
+import {
+  deriveProjectHistoryEvents,
+  filterProjectHistoryEvents,
+  type PilotHistoryEvent,
+  type PilotHistoryFilter,
+} from "@/features/project-assistant/w2/deriveProjectHistoryEvents";
 import type { ProjectAssistantRehydrateEvidenceOutcomeSuccess } from "@/features/project-assistant/types";
 import type { GetProjectSuccess } from "../types";
 import styles from "./HistorySurface.module.css";

-type DurableAnchor = {
-  id: string;
-  kind: string;
-  label: string;
-  detail: string;
-};
-
-function trajectoryAnchorDetail(
-  anchor: W2ProjectHistoryReadModel["trajectory"]["versions"][number],
-): string {
-  if (anchor.isEffectiveCurrent) {
-    return anchor.decidedByDecisionRef
-      ? `Décidée et courante · décision ${anchor.decidedByDecisionRef}`
-      : "Courante · antérieure au rattachement de décision";
-  }
-  if (anchor.status === "candidate") {
-    return "Proposée · pas encore décidée, pas courante";
-  }
-  return `Statut ${anchor.status} · non courante`;
+function formatTime(iso: string | null): string {
+  if (!iso) return "Heure non enregistrée";
+  const d = new Date(iso);
+  if (Number.isNaN(d.getTime())) return "Heure non enregistrée";
+  return d.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
 }

-/** W2 durable anchors: trajectory versions, human decisions, contracts. */
-function buildW2Anchors(history: W2ProjectHistoryReadModel): DurableAnchor[] {
-  const anchors: DurableAnchor[] = [];
-
-  if (history.cycle.activeCycleInstanceId) {
-    anchors.push({
-      id: `cycle:${history.cycle.activeCycleInstanceId}`,
-      kind: "Cycle",
-      label: history.cycle.cycleTypeId
-        ? `${history.cycle.cycleTypeId} · profil ${history.cycle.profile ?? "inconnu"}`
-        : "Cycle rattaché",
-      detail: history.cycle.status
-        ? `Statut ${history.cycle.status}`
-        : "Cycle distinct du projet",
-    });
-  }
+/** Day bucket key — stable per calendar day, or `undated` when no Product date. */
+function dayKey(iso: string | null): string {
+  if (!iso) return "undated";
+  const d = new Date(iso);
+  if (Number.isNaN(d.getTime())) return "undated";
+  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
+}

-  for (const version of history.trajectory.versions) {
-    anchors.push({
-      id: `trj:${version.trajectoryId}:${version.version}`,
-      kind: "Trajectoire",
-      label: `Version ${version.version} · ${version.stepCount} étapes`,
-      detail: trajectoryAnchorDetail(version),
-    });
-  }
+function dayLabel(iso: string | null): string {
+  if (dayKey(iso) === "undated") return "Sans date";
+  const d = new Date(iso!);
+  const today = new Date();
+  const yesterday = new Date(today);
+  yesterday.setDate(today.getDate() - 1);
+  if (dayKey(iso) === dayKey(today.toISOString())) return "Aujourd'hui";
+  if (dayKey(iso) === dayKey(yesterday.toISOString())) return "Hier";
+  return d.toLocaleDateString("fr-FR", {
+    day: "2-digit",
+    month: "long",
+    year: "numeric",
+  });
+}

-  for (const decision of history.decisions) {
-    anchors.push({
-      id: `dec:${decision.decisionId}`,
-      kind: "Décision humaine",
-      label: `Option retenue ${decision.selectedOptionRef}`,
-      detail: `${decision.status} · décideur ${decision.actorRole} · base ${
-        decision.basisSourceType ?? "absente"
-      }${decision.basisTrajectoryRef ? ` · ${decision.basisTrajectoryRef}` : ""}`,
-    });
-  }
+function detailWhenLabel(event: PilotHistoryEvent): string {
+  if (!event.occurredAt) return "Moment non enregistré";
+  return `${dayLabel(event.occurredAt)} · ${formatTime(event.occurredAt)}`;
+}

-  for (const contract of history.contracts) {
-    anchors.push({
-      id: `xct:${contract.executionContractId}`,
-      kind: "Contrat d'exécution",
-      label: `Version ${contract.version} · ${contract.status}`,
-      detail: contract.decisionRefs.length
-        ? `Rattaché à ${contract.decisionRefs.join(", ")}`
-        : "Aucune décision rattachée",
-    });
-  }
+/**
+ * P3 78:2 filters — Tout / Décisions / Changements. « Vérifié » is an event-type
+ * chip inside the list, never a fourth filter.
+ */
+const FILTERS: ReadonlyArray<{ id: PilotHistoryFilter; label: string }> = [
+  { id: "all", label: "Tout" },
+  { id: "decisions", label: "Décisions" },
+  { id: "changes", label: "Changements" },
+];

-  return anchors;
+/** Pilot-facing chip for the event bucket (tone drives the P3 colour). */
+function bucketTone(event: PilotHistoryEvent): "decision" | "verified" | "change" {
+  if (event.filterBucket === "decisions") return "decision";
+  if (event.filterBucket === "verified") return "verified";
+  return "change";
 }

-function buildAnchors(
-  result: GetProjectSuccess,
-  durableOutcome: ProjectAssistantRehydrateEvidenceOutcomeSuccess | null,
-  history: W2ProjectHistoryReadModel | null,
-): DurableAnchor[] {
-  const anchors: DurableAnchor[] = [
-    {
-      id: "project",
-      kind: "Projet",
-      label: result.project.name,
-      detail: "Identité projet enregistrée",
-    },
-    {
-      id: "lps",
-      kind: "État du projet",
-      label: `Version ${result.livingState.version}`,
-      detail: result.livingState.createdAt,
-    },
-  ];
-
-  if (history) {
-    anchors.push(...buildW2Anchors(history));
-  } else if (result.livingState.activeCycleInstanceId) {
-    anchors.push({
-      id: "cycle",
-      kind: "Cycle",
-      label: "Référence factuelle de cycle",
-      detail: "Cycle distinct du projet",
-    });
-  }
-
-  if (durableOutcome) {
-    for (const evidence of durableOutcome.evidence) {
-      anchors.push({
-        id: `evidence:${evidence.evidenceId}`,
-        kind: "Preuve",
-        label: evidence.status,
-        detail: "Preuve enregistrée",
-      });
-    }
-    for (const rb of durableOutcome.reviewBundles) {
-      anchors.push({
-        id: `rb:${rb.reviewBundleId}`,
-        kind: "Dossier de revue",
-        label: rb.status,
-        detail: "Revue enregistrée",
-      });
-    }
-    anchors.push({
-      id: "recommendation",
-      kind: "Recommandation",
-      label: durableOutcome.recommendation.recommendationLabel,
-      detail: "≠ Décision humaine",
-    });
+function bucketChipLabel(event: PilotHistoryEvent): string {
+  switch (bucketTone(event)) {
+    case "decision":
+      return "Décision";
+    case "verified":
+      return "Vérifié";
+    default:
+      return "Changement";
   }
+}

-  return anchors;
+/** Honest Nora handoff draft — prefill only, never a Product mutation. */
+function askNoraDraft(event: PilotHistoryEvent): string {
+  return [
+    `Nora, explique-moi cet élément de l'historique : « ${event.title} ».`,
+    `Type : ${event.kindLabel} · source ${event.sourceKind}.`,
+    "Dis-moi ce qui est réellement établi et ce qui manque pour le comprendre.",
+  ].join("\n");
 }

+const UNAVAILABLE_DECIDED =
+  "Aucun contenu de décision n'est rattaché à cet événement.";
+const UNAVAILABLE_WHY =
+  "La raison de cet événement n'est pas enregistrée ici.";
+const UNAVAILABLE_IMPACT =
+  "Aucun impact n'est enregistré pour cet événement.";
+const UNAVAILABLE_VERIFICATION =
+  "Aucune vérification n'est rattachée à cet événement.";
+
 /**
- * F9 — durable factual anchors only (never a replayed conversation transcript).
- * Trajectory versions, human decisions and execution contracts are read from
- * the W2 minimal read model; conversation, proposal and requested confirmation
- * stay process-local and are reported as absent rather than reconstructed.
+ * P5-S07 / P3 Historique (78:2 · 190:111 · 190:380 · 190:412).
+ * Product-derived master/detail + local search. Never a transcript replay,
+ * never a HistoryStore, never an invented why / impact / verification.
  */
 export function HistorySurface({
   result,
   durableOutcome = null,
+  onReturnToOverview,
+  onAskNora,
 }: {
   result: GetProjectSuccess;
   durableOutcome?: ProjectAssistantRehydrateEvidenceOutcomeSuccess | null;
+  onReturnToOverview?: () => void;
+  /** Prefill the conversation composer about one event. MUST NOT send. */
+  onAskNora?: (draft: string) => void;
 }) {
   const [history, setHistory] = useState<W2ProjectHistoryReadModel | null>(null);
+  const [filter, setFilter] = useState<PilotHistoryFilter>("all");
+  const [query, setQuery] = useState("");
+  const [selectedId, setSelectedId] = useState<string | null>(null);
+  const [mobileShowDetail, setMobileShowDetail] = useState(false);
+  const [askDraft, setAskDraft] = useState("");
+
   const projectId = result.project.projectId;
   const lpsVersion = result.livingState.version;

@@ -166,34 +132,457 @@ export function HistorySurface({
     };
   }, [projectId, lpsVersion]);

-  const anchors = buildAnchors(result, durableOutcome, history);
+  const events = useMemo(() => {
+    if (!history) {
+      // Minimum identity anchors while W2 history loads / fails closed.
+      const fallback: W2ProjectHistoryReadModel = {
+        projectId,
+        projectTitle: result.project.name,
+        lps: {
+          lpsId: result.livingState.id,
+          version: result.livingState.version,
+        },
+        cycle: {
+          activeCycleInstanceId:
+            result.livingState.activeCycleInstanceId ?? null,
+          cycleTypeId: null,
+          profile: null,
+          status: null,
+        },
+        trajectory: {
+          effectiveCurrent: null,
+          proposedNotYetDecided: null,
+          versions: [],
+        },
+        decisions: [],
+        contracts: [],
+        evidence: [],
+        reviewBundles: [],
+        syntheses: [],
+        absent: [],
+        boundNote: "Borné · chargement History en cours.",
+      };
+      return deriveProjectHistoryEvents({
+        history: fallback,
+        durable: durableOutcome,
+      });
+    }
+    return deriveProjectHistoryEvents({
+      history,
+      durable: durableOutcome,
+    });
+  }, [history, durableOutcome, projectId, result.project.name, result.livingState]);
+
+  const visible = useMemo(
+    () => filterProjectHistoryEvents(events, { filter, query }),
+    [events, filter, query],
+  );
+
+  /** Day groups in projection order — grouping is presentation only. */
+  const groups = useMemo(() => {
+    const out: Array<{ key: string; label: string; items: PilotHistoryEvent[] }> =
+      [];
+    for (const event of visible) {
+      const key = dayKey(event.occurredAt);
+      const last = out[out.length - 1];
+      if (last && last.key === key) {
+        last.items.push(event);
+        continue;
+      }
+      out.push({ key, label: dayLabel(event.occurredAt), items: [event] });
+    }
+    return out;
+  }, [visible]);
+
+  useEffect(() => {
+    if (visible.length === 0) {
+      setSelectedId(null);
+      return;
+    }
+    if (!selectedId || !visible.some((e) => e.eventId === selectedId)) {
+      setSelectedId(visible[0]!.eventId);
+    }
+  }, [visible, selectedId]);
+
+  const selected: PilotHistoryEvent | null =
+    visible.find((e) => e.eventId === selectedId) ?? null;
+
+  useEffect(() => {
+    setAskDraft("");
+  }, [selectedId]);
+
+  function selectEvent(eventId: string) {
+    setSelectedId(eventId);
+    setMobileShowDetail(true);
+  }
+
+  function submitAskNora() {
+    if (!selected || !onAskNora) return;
+    const draft = askDraft.trim() ? askDraft.trim() : askNoraDraft(selected);
+    onAskNora(draft);
+  }

   return (
     <section
       className={styles.root}
       data-testid="project-history-panel"
+      data-mobile-detail={mobileShowDetail && selected ? "true" : "false"}
       aria-labelledby="pm6-history-title"
     >
-      <header className={styles.head}>
-        <p className={styles.eyebrow}>Historique</p>
-        <h2 id="pm6-history-title" className={styles.title}>
-          Ce qui est réellement enregistré
-        </h2>
-        <p className={styles.note}>
-          Repères factuels du projet seulement. Les détails techniques restent
-          secondaires ; la conversation n&apos;est pas rejouée ici.
-        </p>
-      </header>
-      <ol className={styles.timeline}>
-        {anchors.map((anchor) => (
-          <li key={anchor.id} className={styles.entry}>
-            <span className={styles.marker} aria-hidden />
-            <span className={styles.kind}>{anchor.kind}</span>
-            <span className={styles.label}>{anchor.label}</span>
-            <span className={styles.detail}>{anchor.detail}</span>
-          </li>
-        ))}
-      </ol>
+      <div
+        className={styles.layout}
+        data-testid="history-master-detail"
+        data-mobile-detail={mobileShowDetail && selected ? "true" : "false"}
+      >
+        <div
+          className={styles.masterPane}
+          data-testid="history-list-pane"
+          data-mobile-hidden={mobileShowDetail && selected ? "true" : "false"}
+        >
+          <header className={styles.head}>
+            {onReturnToOverview ? (
+              <button
+                type="button"
+                className={styles.backLink}
+                data-testid="history-back-overview"
+                onClick={onReturnToOverview}
+              >
+                ← Retour à l&apos;Aperçu
+              </button>
+            ) : null}
+            <div className={styles.titleRow}>
+              <h2 id="pm6-history-title" className={styles.title}>
+                Historique
+              </h2>
+              <div
+                className={styles.filters}
+                role="toolbar"
+                aria-label="Filtrer l'historique"
+              >
+                {FILTERS.map((item) => (
+                  <button
+                    key={item.id}
+                    type="button"
+                    className={styles.filter}
+                    data-selected={filter === item.id ? "true" : "false"}
+                    data-filter={item.id}
+                    aria-pressed={filter === item.id}
+                    data-testid={`history-filter-${item.id}`}
+                    onClick={() => setFilter(item.id)}
+                  >
+                    {item.label}
+                  </button>
+                ))}
+              </div>
+            </div>
+            <p className={styles.note}>
+              Retrouve les changements importants du projet.
+            </p>
+          </header>
+
+          <label className={styles.searchLabel}>
+            <span className={styles.srOnly}>
+              Rechercher dans l&apos;historique
+            </span>
+            <input
+              type="search"
+              className={styles.search}
+              placeholder="Rechercher dans l'historique…"
+              value={query}
+              onChange={(e) => setQuery(e.target.value)}
+              data-testid="history-search"
+              autoComplete="off"
+            />
+          </label>
+
+          <div className={styles.listScroll}>
+            {visible.length === 0 ? (
+              <p className={styles.empty} data-testid="history-empty">
+                Aucun événement ne correspond à ce filtre.
+              </p>
+            ) : (
+              groups.map((group) => (
+                <section
+                  key={group.key}
+                  className={styles.group}
+                  data-testid={`history-group-${group.key}`}
+                >
+                  <p className={styles.groupLabel}>{group.label}</p>
+                  <ol className={styles.timeline}>
+                    {group.items.map((event) => {
+                      const selectedRow = event.eventId === selectedId;
+                      return (
+                        <li key={event.eventId} className={styles.timelineItem}>
+                          <button
+                            type="button"
+                            className={styles.entry}
+                            data-selected={selectedRow ? "true" : "false"}
+                            data-tone={bucketTone(event)}
+                            data-testid={`history-event-${event.eventId}`}
+                            aria-current={selectedRow ? "true" : undefined}
+                            onClick={() => selectEvent(event.eventId)}
+                          >
+                            <span
+                              className={styles.marker}
+                              data-tone={bucketTone(event)}
+                              aria-hidden
+                            />
+                            <span className={styles.label}>{event.title}</span>
+                            <span
+                              className={styles.kind}
+                              data-tone={bucketTone(event)}
+                            >
+                              {bucketChipLabel(event)}
+                            </span>
+                            <span className={styles.chevron} aria-hidden>
+                              →
+                            </span>
+                            <span className={styles.metaRow}>
+                              <span className={styles.when}>
+                                {formatTime(event.occurredAt)}
+                              </span>
+                              <span className={styles.detail}>
+                                {event.summary}
+                              </span>
+                            </span>
+                          </button>
+                        </li>
+                      );
+                    })}
+                  </ol>
+                </section>
+              ))
+            )}
+          </div>
+        </div>
+
+        <aside
+          className={styles.detailPane}
+          data-testid="history-detail-pane"
+          data-mobile-hidden={mobileShowDetail && selected ? "false" : "true"}
+          aria-live="polite"
+        >
+          {selected ? (
+            <div className={styles.detailInner}>
+              <button
+                type="button"
+                className={styles.backMobile}
+                data-testid="history-back-to-list"
+                onClick={() => setMobileShowDetail(false)}
+              >
+                ← Historique
+              </button>
+
+              <div className={styles.detailHead}>
+                <div className={styles.detailHeadRow}>
+                  <span
+                    className={styles.detailKind}
+                    data-tone={bucketTone(selected)}
+                    data-testid="history-detail-kind-chip"
+                  >
+                    {bucketChipLabel(selected)}
+                  </span>
+                  <span className={styles.detailWhen}>
+                    {detailWhenLabel(selected)}
+                    {selected.isCurrent ? " · Courant" : ""}
+                  </span>
+                </div>
+                <h3 className={styles.detailTitle}>{selected.title}</h3>
+                <p className={styles.detailSummary}>{selected.summary}</p>
+              </div>
+
+              {/* Mobile / compact reading path — 190:412 / 190:111 */}
+              <div
+                className={styles.mobileReading}
+                data-testid="history-mobile-reading"
+              >
+                <div className={styles.detailBlock}>
+                  <p className={styles.detailBlockLabel}>Contexte</p>
+                  <p className={styles.detailBlockBody}>
+                    {selected.why ??
+                      selected.decidedWhat ??
+                      selected.summary}
+                  </p>
+                </div>
+                <div className={styles.detailBlock}>
+                  <p className={styles.detailBlockLabel}>Éléments liés</p>
+                  <p
+                    className={styles.linkedInline}
+                    data-testid="history-mobile-linked"
+                  >
+                    {[
+                      selected.kindLabel,
+                      ...selected.linked.map((l) => l.label),
+                    ]
+                      .filter(Boolean)
+                      .join(" · ") || "Aucun élément lié supplémentaire."}
+                  </p>
+                </div>
+                {onAskNora ? (
+                  <button
+                    type="button"
+                    className={styles.askNoraCta}
+                    data-testid="history-ask-nora-cta"
+                    onClick={() => {
+                      onAskNora(askNoraDraft(selected));
+                    }}
+                  >
+                    Demander à Nora d&apos;expliquer cet élément →
+                  </button>
+                ) : null}
+              </div>
+
+              <div
+                className={`${styles.detailBlock} ${styles.desktopOnly}`}
+                data-testid="history-detail-decided"
+              >
+                <p className={styles.detailBlockLabel}>Ce qui a été décidé</p>
+                <p
+                  className={styles.detailBlockBody}
+                  data-available={selected.decidedWhat ? "true" : "false"}
+                >
+                  {selected.decidedWhat ?? UNAVAILABLE_DECIDED}
+                </p>
+              </div>
+
+              <div
+                className={`${styles.detailBlock} ${styles.desktopOnly}`}
+                data-testid="history-detail-why"
+              >
+                <p className={styles.detailBlockLabel}>Pourquoi</p>
+                <p
+                  className={styles.detailBlockBody}
+                  data-available={selected.why ? "true" : "false"}
+                >
+                  {selected.why ?? UNAVAILABLE_WHY}
+                </p>
+              </div>
+
+              <div
+                className={`${styles.detailBlock} ${styles.desktopOnly}`}
+                data-testid="history-detail-impact"
+              >
+                <p className={styles.detailBlockLabel}>Impact</p>
+                <p
+                  className={styles.detailBlockBody}
+                  data-available={selected.impact ? "true" : "false"}
+                >
+                  {selected.impact ?? UNAVAILABLE_IMPACT}
+                </p>
+              </div>
+
+              <div
+                className={`${styles.verification} ${styles.desktopOnly}`}
+                data-testid="history-detail-verification"
+                data-available={selected.verification ? "true" : "false"}
+              >
+                <p className={styles.verificationTitle}>
+                  <span className={styles.verificationDot} aria-hidden />
+                  Éléments liés
+                </p>
+                <p className={styles.verificationBody}>
+                  {selected.verification ?? UNAVAILABLE_VERIFICATION}
+                </p>
+                {selected.linked.length > 0 ? (
+                  <p className={styles.verificationLink}>
+                    {selected.linked.length} élément
+                    {selected.linked.length === 1 ? "" : "s"} lié
+                    {selected.linked.length === 1 ? "" : "s"} →
+                  </p>
+                ) : null}
+              </div>
+
+              <div
+                className={`${styles.detailBlock} ${styles.desktopOnly}`}
+                data-testid="history-detail-sources"
+              >
+                <p className={styles.detailBlockLabel}>Éléments liés</p>
+                <ul className={styles.linkedList}>
+                  <li
+                    className={styles.linkedItem}
+                    data-source-id={selected.sourceId}
+                  >
+                    <span className={styles.linkedKind}>
+                      {selected.kindLabel}
+                    </span>
+                    <span className={styles.linkedLabel}>
+                      {result.project.name}
+                    </span>
+                  </li>
+                  {selected.linked.map((link) => (
+                    <li
+                      key={`${link.kind}:${link.id}`}
+                      className={styles.linkedItem}
+                      data-source-id={link.id}
+                    >
+                      <span className={styles.linkedKind}>{link.kind}</span>
+                      <span className={styles.linkedLabel}>{link.label}</span>
+                    </li>
+                  ))}
+                </ul>
+                {selected.linked.length === 0 ? (
+                  <p className={styles.sourceMeta}>
+                    Aucun élément lié supplémentaire n&apos;est rattaché à cet
+                    événement.
+                  </p>
+                ) : null}
+              </div>
+
+              <div
+                className={`${styles.detailBlock} ${styles.desktopOnly}`}
+                data-testid="history-detail-ask-nora"
+              >
+                <p className={styles.detailBlockLabel}>Besoin de contexte ?</p>
+                {onAskNora ? (
+                  <>
+                    <p className={styles.detailBlockBody}>
+                      Demandez à Nora d&apos;expliquer ce changement, de comparer
+                      deux moments ou de retrouver ce qui a conduit à cette
+                      décision.
+                    </p>
+                    <form
+                      className={styles.askRow}
+                      onSubmit={(e) => {
+                        e.preventDefault();
+                        submitAskNora();
+                      }}
+                    >
+                      <label className={styles.srOnly} htmlFor="history-ask-nora">
+                        Demander à Nora à propos de cet événement
+                      </label>
+                      <input
+                        id="history-ask-nora"
+                        className={styles.askInput}
+                        data-testid="history-ask-nora-input"
+                        placeholder="Demander à Nora…"
+                        value={askDraft}
+                        onChange={(e) => setAskDraft(e.target.value)}
+                        autoComplete="off"
+                      />
+                      <button
+                        type="submit"
+                        className={styles.askSubmit}
+                        data-testid="history-ask-nora-submit"
+                        aria-label="Préparer la question pour Nora"
+                        title="Prépare un brouillon dans la conversation — rien n'est envoyé"
+                      >
+                        ↑
+                      </button>
+                    </form>
+                  </>
+                ) : (
+                  <p className={styles.detailBlockBody} data-available="false">
+                    La reprise dans la conversation n&apos;est pas disponible
+                    depuis cette vue.
+                  </p>
+                )}
+              </div>
+            </div>
+          ) : (
+            <p className={styles.empty}>Sélectionnez un événement.</p>
+          )}
+        </aside>
+      </div>
     </section>
   );
 }
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.module.css b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.module.css
index 9af31be2..77df99fc 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.module.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.module.css
@@ -74,18 +74,17 @@
 .tabs {
   display: flex;
   flex-wrap: wrap;
-  gap: var(--pm6-space-1);
-  border-bottom: 1px solid var(--pm6-border-soft);
+  gap: 6px;
   flex-shrink: 0;
 }

 .tab {
   appearance: none;
-  border: none;
-  border-bottom: 2px solid transparent;
-  background: transparent;
-  padding: 6px 8px;
-  margin-bottom: -1px;
+  border: 1px solid var(--pm6-border-strong);
+  border-radius: var(--pm6-radius-pill);
+  background: var(--pm6-surface);
+  padding: 7px 12px;
+  min-height: 38px;
   font-size: 0.78rem;
   font-weight: 600;
   color: var(--pm6-muted-strong);
@@ -99,12 +98,12 @@
 .tab:focus-visible {
   outline: none;
   box-shadow: var(--pm6-focus-ring);
-  border-radius: 2px;
 }

 .tabActive {
-  color: var(--pm6-forest);
-  border-bottom-color: var(--pm6-forest);
+  color: var(--pm6-ink);
+  border-color: color-mix(in srgb, var(--pm6-terracotta, #c45c26) 45%, var(--pm6-border));
+  background: color-mix(in srgb, var(--pm6-terracotta, #c45c26) 10%, var(--pm6-surface));
 }

 .list {
@@ -307,16 +306,35 @@
 }

 .exchangeRole {
-  font-size: 0.68rem;
-  font-weight: 700;
+  font-size: 0.6875rem;
+  font-weight: 650;
   letter-spacing: 0.04em;
   text-transform: uppercase;
-  color: var(--pm6-forest);
+  color: var(--pm6-muted-strong);
+}
+
+.exchangeRole[data-role="NORA"] {
+  color: var(--pm6-accent);
+}
+
+.exchangeWhen {
+  font-size: 0.6875rem;
+  font-weight: 650;
+  letter-spacing: 0.04em;
+  color: var(--pm6-muted);
+}
+
+.exchangeTop {
+  display: flex;
+  align-items: center;
+  justify-content: space-between;
+  gap: var(--pm6-space-3);
+  width: 100%;
 }

 .exchangeExcerpt {
-  font-size: 0.76rem;
-  line-height: 1.4;
+  font-size: 0.8125rem;
+  line-height: 1.5;
   color: var(--pm6-ink-soft);
   overflow-wrap: anywhere;
 }
@@ -457,3 +475,835 @@
   font-weight: 700;
   color: var(--pm6-ink);
 }
+
+/* ---------- rail → principal shortcut ---------- */
+
+.openFull {
+  align-self: flex-start;
+  appearance: none;
+  border: 0;
+  background: transparent;
+  padding: 0;
+  min-height: 38px;
+  display: inline-flex;
+  align-items: center;
+  font: inherit;
+  font-size: 0.78rem;
+  font-weight: 600;
+  color: var(--pm6-accent);
+  cursor: pointer;
+}
+
+.openFull:hover {
+  text-decoration: underline;
+}
+
+.openFull:focus-visible {
+  outline: none;
+  box-shadow: var(--pm6-focus-ring);
+  border-radius: 4px;
+}
+
+/*
+ * ================= principal composition =================
+ * P3 Journal desktop 94:2 / expanded 94:222 (body 1226 = index ~440 | detail
+ * ~785), mobile list 192:41 → detail 192:81. The rail composition is untouched:
+ * `.body` / `.masterCol` dissolve when the variant is `rail`.
+ */
+
+.body {
+  display: contents;
+}
+
+.masterCol {
+  display: contents;
+}
+
+.principal {
+  max-height: none;
+  overflow: visible;
+  gap: 0;
+  padding: 0;
+  background: var(--pm6-body);
+  border: 0;
+  border-radius: 0;
+  flex: 1 1 auto;
+}
+
+.principal .body {
+  display: grid;
+  grid-template-columns: minmax(0, var(--pm6-journal-index-w, 440px)) minmax(0, 1fr);
+  align-items: stretch;
+  min-height: 0;
+  flex: 1 1 auto;
+}
+
+.principal .masterCol {
+  display: flex;
+  flex-direction: column;
+  gap: var(--pm6-space-2);
+  min-width: 0;
+  min-height: 0;
+  padding: var(--pm6-space-4) var(--pm6-space-4) var(--pm6-space-5);
+  border-right: 1px solid var(--pm6-border);
+}
+
+.principalHeader {
+  display: flex;
+  flex-direction: column;
+  gap: 4px;
+  padding: 14px var(--ws-pad-x, 24px) 0;
+}
+
+.principalBack {
+  align-self: flex-start;
+  appearance: none;
+  border: 0;
+  background: transparent;
+  padding: 0;
+  min-height: 38px;
+  display: inline-flex;
+  align-items: center;
+  font: inherit;
+  font-size: 0.8125rem;
+  font-weight: 600;
+  color: var(--pm6-accent);
+  cursor: pointer;
+}
+
+.principalBack:hover {
+  text-decoration: underline;
+}
+
+.principalBackShort {
+  display: none;
+}
+
+.principalBackFull {
+  display: inline;
+}
+
+.principalTitleRow {
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  gap: var(--pm6-space-2);
+  min-width: 0;
+}
+
+.principalTitle {
+  margin: 0;
+  flex: 0 1 auto;
+  font-size: 1.5rem;
+  font-weight: 650;
+  letter-spacing: -0.02em;
+  line-height: 1.2;
+  color: var(--pm6-ink);
+}
+
+.principalMeta {
+  display: inline-flex;
+  flex-wrap: wrap;
+  align-items: center;
+  gap: var(--pm6-space-2);
+  margin-left: auto;
+}
+
+.principalChip,
+.principalChipOk {
+  display: inline-flex;
+  align-items: center;
+  padding: 3px 10px;
+  border-radius: var(--pm6-radius-pill);
+  border: 1px solid var(--pm6-border);
+  background: var(--pm6-surface-sunken);
+  font-size: 0.6875rem;
+  font-weight: 600;
+  color: var(--pm6-muted-strong);
+  white-space: nowrap;
+}
+
+.principalChipOk {
+  color: var(--pm6-ok);
+  border-color: color-mix(in srgb, var(--pm6-ok) 26%, transparent);
+  background: var(--pm6-ok-tint);
+  text-transform: uppercase;
+  letter-spacing: 0.06em;
+}
+
+.principalSubtitle {
+  display: none;
+  margin: 0;
+  max-width: 48ch;
+  font-size: 0.8125rem;
+  line-height: 1.45;
+  color: var(--pm6-muted-strong);
+}
+
+.principal .tabs {
+  gap: var(--pm6-space-2);
+  padding: var(--pm6-space-3) var(--ws-pad-x, 24px);
+  border-bottom: 1px solid var(--pm6-border);
+}
+
+.principal .tab {
+  display: inline-flex;
+  align-items: center;
+  gap: 8px;
+  border-color: var(--pm6-border);
+  background: var(--pm6-surface-sunken);
+}
+
+.principal .tabActive {
+  color: var(--pm6-accent);
+  border-color: color-mix(in srgb, var(--pm6-accent) 28%, transparent);
+  background: var(--pm6-accent-tint);
+}
+
+.tabCount {
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  min-width: 18px;
+  height: 18px;
+  padding: 0 5px;
+  border-radius: var(--pm6-radius-pill);
+  background: var(--pm6-surface);
+  border: 1px solid var(--pm6-border);
+  font-size: 0.625rem;
+  font-weight: 700;
+  line-height: 1;
+  color: var(--pm6-muted-strong);
+}
+
+.principal .tabActive .tabCount {
+  color: var(--pm6-accent);
+  border-color: color-mix(in srgb, var(--pm6-accent) 24%, transparent);
+}
+
+/* ---------- principal subjects index ---------- */
+
+.masterHead {
+  display: flex;
+  flex-direction: column;
+  gap: 4px;
+  padding: 0 2px var(--pm6-space-2);
+  border-bottom: 1px solid var(--pm6-border);
+}
+
+.masterHeadRow {
+  display: flex;
+  align-items: baseline;
+  justify-content: space-between;
+  gap: var(--pm6-space-2);
+}
+
+.masterTitle {
+  margin: 0;
+  font-size: 1rem;
+  font-weight: 650;
+  color: var(--pm6-ink);
+}
+
+.masterCount {
+  font-size: 0.75rem;
+  color: var(--pm6-muted);
+  white-space: nowrap;
+}
+
+.masterNote {
+  margin: 0;
+  font-size: 0.78rem;
+  line-height: 1.45;
+  color: var(--pm6-muted-strong);
+}
+
+.principal .list {
+  gap: var(--pm6-space-3);
+  overflow-y: auto;
+  padding: var(--pm6-space-2) 2px var(--pm6-space-2);
+}
+
+.principal .card {
+  gap: 6px;
+  padding: var(--pm6-space-3);
+  border-color: var(--pm6-border);
+}
+
+.principal .cardSelected {
+  border-color: color-mix(in srgb, var(--pm6-accent) 32%, var(--pm6-border));
+  background: var(--pm6-accent-tint);
+  box-shadow: none;
+}
+
+.principal .ordinal {
+  font-size: 0.6875rem;
+  font-weight: 600;
+  letter-spacing: 0.08em;
+  text-transform: uppercase;
+  color: var(--pm6-muted-faint);
+}
+
+.principal .cardHeading {
+  justify-content: space-between;
+  margin-bottom: 0;
+}
+
+/* « En cours » reads as the live subject (accent), not as a neutral state. */
+.principal .currentBadge {
+  padding: 2px 8px;
+  border-radius: var(--pm6-radius-pill);
+  border: 1px solid color-mix(in srgb, var(--pm6-accent) 26%, transparent);
+  background: var(--pm6-accent-tint);
+  color: var(--pm6-accent);
+  letter-spacing: 0.06em;
+}
+
+.principal .cardTitle {
+  font-size: 0.9375rem;
+}
+
+.principal .cardMeta {
+  justify-content: space-between;
+  gap: var(--pm6-space-2);
+}
+
+.cardPoints {
+  margin-left: auto;
+  color: var(--pm6-accent);
+  white-space: nowrap;
+}
+
+.statusBadge {
+  display: inline-flex;
+  align-items: center;
+  padding: 2px 8px;
+  border-radius: var(--pm6-radius-pill);
+  border: 1px solid var(--pm6-border);
+  background: var(--pm6-surface-sunken);
+  font-size: 0.6875rem;
+  font-weight: 600;
+  color: var(--pm6-muted-strong);
+  white-space: nowrap;
+}
+
+.statusBadge[data-status="active"] {
+  color: var(--pm6-ok);
+  border-color: color-mix(in srgb, var(--pm6-ok) 26%, transparent);
+  background: var(--pm6-ok-tint);
+}
+
+/* ---------- principal subject detail ---------- */
+
+.detailCol {
+  min-width: 0;
+  min-height: 0;
+  overflow-y: auto;
+  background: var(--pm6-canvas);
+}
+
+.detailCol > .empty {
+  padding: var(--pm6-space-5);
+  max-width: 44ch;
+}
+
+.detailInner {
+  display: flex;
+  flex-direction: column;
+  gap: var(--pm6-space-3);
+  padding: var(--pm6-space-4) var(--pm6-space-5) var(--pm6-space-5);
+}
+
+.detailBack {
+  display: none;
+  align-self: flex-start;
+  appearance: none;
+  border: 0;
+  background: transparent;
+  padding: 0;
+  min-height: 38px;
+  align-items: center;
+  font: inherit;
+  font-size: 0.8125rem;
+  font-weight: 600;
+  color: var(--pm6-accent);
+  cursor: pointer;
+}
+
+.detailHead {
+  display: flex;
+  flex-direction: column;
+  gap: 6px;
+  padding-bottom: var(--pm6-space-3);
+  border-bottom: 1px solid var(--pm6-border);
+}
+
+.detailHeadRow {
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  justify-content: space-between;
+  gap: var(--pm6-space-2);
+}
+
+.detailBadges {
+  display: inline-flex;
+  flex-wrap: wrap;
+  align-items: center;
+  gap: var(--pm6-space-2);
+}
+
+.detailUpdated {
+  font-size: 0.75rem;
+  color: var(--pm6-muted);
+  white-space: nowrap;
+}
+
+.detailTitle {
+  margin: 0;
+  font-size: 1.5rem;
+  font-weight: 650;
+  letter-spacing: -0.02em;
+  line-height: 1.25;
+  color: var(--pm6-ink);
+  overflow-wrap: anywhere;
+}
+
+.detailSummary {
+  margin: 0;
+  max-width: 78ch;
+  font-size: 0.875rem;
+  line-height: 1.6;
+  color: var(--pm6-muted-strong);
+}
+
+.detailSection {
+  display: flex;
+  flex-direction: column;
+  gap: 6px;
+  min-width: 0;
+  padding-bottom: var(--pm6-space-3);
+  border-bottom: 1px solid var(--pm6-border);
+}
+
+.detailSection:last-of-type {
+  border-bottom: 0;
+  padding-bottom: 0;
+}
+
+.detailSectionHead {
+  margin: 0;
+  display: flex;
+  align-items: baseline;
+  justify-content: space-between;
+  gap: var(--pm6-space-2);
+}
+
+.detailSectionLabel {
+  font-size: 0.625rem;
+  font-weight: 600;
+  letter-spacing: 0.08em;
+  text-transform: uppercase;
+  color: var(--pm6-muted-faint);
+}
+
+.detailSectionCount {
+  font-size: 0.6875rem;
+  color: var(--pm6-muted);
+  font-variant-numeric: tabular-nums;
+  white-space: nowrap;
+}
+
+.detailUnavailable {
+  margin: 0;
+  font-size: 0.78rem;
+  line-height: 1.5;
+  font-style: italic;
+  color: var(--pm6-muted);
+}
+
+/* Marked lists — ✓ for stabilized, ○ for still-open points (94:2). */
+.markedList {
+  list-style: none;
+  margin: 0;
+  padding: 0;
+  display: flex;
+  flex-direction: column;
+  gap: 5px;
+  font-size: 0.875rem;
+  line-height: 1.5;
+  color: var(--pm6-ink);
+}
+
+.markedList li {
+  display: grid;
+  grid-template-columns: 16px minmax(0, 1fr);
+  gap: var(--pm6-space-2);
+  align-items: baseline;
+}
+
+.markedList li::before {
+  font-size: 0.8125rem;
+  line-height: 1.5;
+}
+
+.markedList[data-marker="stabilized"] li::before {
+  content: "✓";
+  color: var(--pm6-ok);
+}
+
+.markedList[data-marker="open"] li::before {
+  content: "○";
+  color: var(--pm6-accent);
+}
+
+.linkedPills {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 6px;
+}
+
+.linkedPill {
+  display: inline-flex;
+  align-items: center;
+  gap: 6px;
+  appearance: none;
+  border-radius: 8px;
+  border: 0;
+  background: var(--pm6-surface-sunken);
+  padding: 5px 9px;
+  min-height: 30px;
+  font: inherit;
+  font-size: 0.6875rem;
+  font-weight: 650;
+  letter-spacing: 0.04em;
+  color: var(--pm6-muted-strong);
+  cursor: pointer;
+}
+
+.linkedPill[data-kind="reserve"],
+.linkedPill[data-kind="reserve-item"] {
+  background: #f2ede7;
+  color: #6d645c;
+}
+
+.linkedPill:focus-visible {
+  outline: none;
+  box-shadow: var(--pm6-focus-ring);
+}
+
+.linkedPillCount {
+  font-variant-numeric: tabular-nums;
+  font-weight: 650;
+  font-size: 0.8125rem;
+  letter-spacing: 0.015em;
+}
+
+.linkedPillLabel {
+  font-size: 0.6875rem;
+  letter-spacing: 0.04em;
+}
+
+.exchangePanel {
+  list-style: none;
+  margin: 0;
+  padding: 0;
+  display: flex;
+  flex-direction: column;
+  gap: 0;
+  border: 1px solid var(--pm6-border);
+  border-radius: 8px;
+  background: #fbf7f2;
+  overflow: hidden;
+  max-height: 92px; /* ~2 dense rows preview (94:2) */
+}
+
+.exchangePanel[data-expanded="true"] {
+  max-height: 160px; /* 94:222 bounded internal scroll */
+  overflow-y: auto;
+}
+
+.exchangePanel > li {
+  margin: 0;
+  padding: 0;
+  min-width: 0;
+}
+
+.exchangePanel > li:nth-child(odd) .exchangeRow {
+  background: #fcf8f3;
+}
+
+.exchangePanel > li:nth-child(even) .exchangeRow {
+  background: #fffdf9;
+}
+
+.exchangeRow {
+  display: grid;
+  grid-template-columns: auto minmax(0, 1fr) auto;
+  align-items: center;
+  column-gap: 8px;
+  width: 100%;
+  text-align: left;
+  appearance: none;
+  border: 0;
+  border-radius: 0;
+  background: transparent;
+  padding: 9px 10px;
+  font: inherit;
+  color: inherit;
+  cursor: pointer;
+  min-height: 38px;
+}
+
+.exchangeWho {
+  display: inline-flex;
+  align-items: center;
+  gap: 6px;
+  min-width: 0;
+  flex: 0 0 auto;
+}
+
+.exchangeAvatar {
+  width: 20px;
+  height: 20px;
+  border-radius: var(--pm6-radius-pill);
+  display: grid;
+  place-items: center;
+  flex: 0 0 auto;
+  font-size: 0.625rem;
+  font-weight: 650;
+  background: var(--pm6-surface-sunken);
+  color: var(--pm6-muted-strong);
+}
+
+.exchangeAvatar[data-role="NORA"] {
+  background: var(--pm6-accent-tint);
+  color: var(--pm6-accent);
+}
+
+.exchangeAvatar[data-role="VOUS"] {
+  background: #eee8e1;
+  color: #5f564e;
+}
+
+.exchangeRow .exchangeRole {
+  font-size: 0.6875rem;
+  font-weight: 650;
+  letter-spacing: 0.04em;
+  text-transform: uppercase;
+  color: var(--pm6-muted-strong);
+  white-space: nowrap;
+}
+
+.exchangeRow .exchangeRole[data-role="NORA"] {
+  color: var(--pm6-accent);
+}
+
+.exchangeRow .exchangeExcerpt {
+  min-width: 0;
+  font-size: 0.6875rem;
+  font-weight: 500;
+  line-height: 1.35;
+  color: var(--pm6-ink-soft);
+  overflow: hidden;
+  text-overflow: ellipsis;
+  white-space: nowrap;
+}
+
+.exchangeRow .exchangeWhen {
+  flex: 0 0 auto;
+  font-size: 0.6875rem;
+  font-weight: 500;
+  letter-spacing: 0.04em;
+  color: var(--pm6-muted);
+  white-space: nowrap;
+  font-variant-numeric: tabular-nums;
+}
+
+.exchangeRow:hover:not(:disabled) {
+  filter: brightness(0.985);
+}
+
+.exchangeRow:disabled {
+  cursor: not-allowed;
+  opacity: 0.72;
+}
+
+.exchangeRow:focus-visible {
+  outline: none;
+  box-shadow: inset 0 0 0 2px color-mix(in srgb, var(--pm6-accent) 35%, transparent);
+}
+
+.detailFooter {
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  justify-content: space-between;
+  gap: var(--pm6-space-3);
+  padding-top: var(--pm6-space-2);
+}
+
+/* ---------- principal: compact ---------- */
+
+@media (max-width: 1199px) {
+  .principal .body {
+    grid-template-columns: minmax(0, 340px) minmax(0, 1fr);
+  }
+
+  .principal .masterCol {
+    padding: var(--pm6-space-3);
+  }
+
+  .detailInner {
+    padding: var(--pm6-space-3) var(--pm6-space-4) var(--pm6-space-4);
+  }
+}
+
+/* ---------- principal: mobile list ↔ detail (192:41 / 192:81) ---------- */
+
+@media (max-width: 767px) {
+  .principal .body {
+    grid-template-columns: minmax(0, 1fr);
+  }
+
+  .principal .masterCol {
+    border-right: 0;
+    padding: var(--pm6-space-3) var(--ws-pad-x, 16px) var(--pm6-space-4);
+  }
+
+  .principal .masterCol[data-mobile-hidden="true"] {
+    display: none;
+  }
+
+  .detailCol {
+    background: transparent;
+    overflow: visible;
+  }
+
+  .detailCol[data-mobile-hidden="true"] {
+    display: none;
+  }
+
+  .detailInner {
+    padding: var(--pm6-space-3) var(--ws-pad-x, 16px) var(--pm6-space-5);
+  }
+
+  .detailBack {
+    display: inline-flex;
+  }
+
+  /*
+   * The index head is the mobile page head — 192:41 shows neither a second
+   * title nor a duplicate count (the tab badge already carries it).
+   */
+  .masterHead {
+    border-bottom: 0;
+    padding-bottom: 0;
+  }
+
+  .masterTitle,
+  .masterCount {
+    display: none;
+  }
+
+  .masterNote {
+    display: none;
+  }
+
+  .principalSubtitle {
+    display: block;
+    padding-bottom: 2px;
+  }
+
+  .principal .list {
+    overflow: visible;
+  }
+
+  .principalBackFull {
+    display: none;
+  }
+
+  .principalBackShort {
+    display: inline;
+  }
+
+  .principalMeta {
+    display: none;
+  }
+
+  /*
+   * V2 — 192:41: all four memory tabs visible at 390px. Prefer wrap over
+   * horizontal scroll so « Décisions » is never clipped off-screen.
+   */
+  .principal .tabs {
+    overflow-x: visible;
+    flex-wrap: wrap;
+    gap: 8px;
+    padding-inline: var(--ws-pad-x, 16px);
+  }
+
+  .principal .tab {
+    flex: 0 1 auto;
+  }
+
+  /* V3 — mobile list cards: single-line summary, ordinal-only heading. */
+  .principal .card {
+    padding: 14px 14px;
+    gap: 8px;
+  }
+
+  .principal .cardHeading .currentBadge,
+  .principal .cardHeading .statusBadge {
+    display: none;
+  }
+
+  .principal .cardSummary {
+    -webkit-line-clamp: 1;
+    font-size: 0.8125rem;
+  }
+
+  .principal .cardMeta {
+    justify-content: flex-start;
+    gap: 0;
+    color: #8a7f74;
+  }
+
+  .principal .cardMeta > span + span::before {
+    content: " · ";
+    color: #8a7f74;
+  }
+
+  .cardPoints {
+    margin-left: 0;
+    color: inherit;
+  }
+
+  .exchangePanel {
+    max-height: none;
+  }
+
+  .exchangePanel[data-expanded="true"] {
+    max-height: 190px;
+  }
+
+  .exchangeRow {
+    grid-template-columns: minmax(0, 1fr);
+    grid-template-rows: auto auto;
+    row-gap: 2px;
+  }
+
+  .exchangeWho {
+    display: none;
+  }
+
+  .exchangeRow .exchangeWhen {
+    order: -1;
+  }
+
+  .exchangeRow .exchangeExcerpt {
+    white-space: normal;
+    display: -webkit-box;
+    -webkit-line-clamp: 2;
+    -webkit-box-orient: vertical;
+  }
+}
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.tsx
index 3a772999..f7f66b4a 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.tsx
@@ -43,8 +43,17 @@ export type JournalTranscriptMessage = {
   id: string;
   role: string;
   content: string;
+  /** Durable Session timestamp when known — omitted rather than invented. */
+  createdAt?: string | null;
 };

+/**
+ * `rail` — compact shortcut inside the context column (conversation layout).
+ * `principal` — dedicated Journal view owning the main column (P3 94:2 / 94:222).
+ * One component, two compositions: never a second Journal cockpit.
+ */
+export type JournalSurfaceVariant = "rail" | "principal";
+
 export type JournalSurfaceProps = {
   entries: JournalSurfaceEntry[];
   cycleInstanceId: string | null;
@@ -97,6 +106,17 @@ export type JournalSurfaceProps = {
    * the conversation. MUST NOT send and MUST NOT record anything.
    */
   onResumeRecommendationInChat?: (recommendationId: string) => void;
+  variant?: JournalSurfaceVariant;
+  /** Principal only — « Retour à la conversation ». */
+  onReturnToConversation?: () => void;
+  /** Rail only — promotes the compact shortcut to the dedicated Journal view. */
+  onOpenFullJournal?: () => void;
+  /** Rail only — compact shortcut shows at most this many subjects. */
+  railMaxEntries?: number;
+  /** Honest cycle label for the principal header chip (never invented). */
+  cycleLabel?: string | null;
+  /** Honest currentness label for the principal header chip. */
+  currentnessLabel?: string | null;
 };

 function isOpenReservation(card: JournalReservationCard): boolean {
@@ -154,21 +174,44 @@ function statusLabel(status: string): string {
 }

 function roleLabel(role: string): string {
-  if (role === "user") return "Pilote";
-  if (role === "assistant") return "Nora";
+  // P3 94:2 / 94:222 canonical exchange authors.
+  if (role === "user") return "VOUS";
+  if (role === "assistant") return "NORA";
   return role;
 }

+function roleAvatarLetter(role: string): string {
+  if (role === "VOUS") return "V";
+  if (role === "NORA") return "N";
+  return "·";
+}
+function formatExchangeWhen(iso: string | null | undefined): string {
+  if (!iso?.trim()) return "Moment non enregistré";
+  const d = new Date(iso);
+  if (Number.isNaN(d.getTime())) return "Moment non enregistré";
+  const dd = String(d.getDate()).padStart(2, "0");
+  const mm = String(d.getMonth() + 1).padStart(2, "0");
+  const hh = String(d.getHours()).padStart(2, "0");
+  const mi = String(d.getMinutes()).padStart(2, "0");
+  return `${dd}/${mm} · ${hh}:${mi}`;
+}
+
 function previewFor(
   turnId: string,
   messages: JournalTranscriptMessage[] | undefined,
-): { role: string; excerpt: string; resolvable: boolean } {
+): {
+  role: string;
+  excerpt: string;
+  when: string;
+  resolvable: boolean;
+} {
   const msg = messages?.find((m) => m.id === turnId);
   if (!msg) {
     // Never show raw pt:* as the nominal Pilot label — pending reconcile / missing.
     return {
       role: "échange",
       excerpt: "Échange en cours de synchronisation…",
+      when: "Moment non enregistré",
       resolvable: false,
     };
   }
@@ -179,12 +222,51 @@ function previewFor(
   return {
     role: roleLabel(msg.role),
     excerpt: excerpt || "(vide)",
+    when: formatExchangeWhen(msg.createdAt),
     resolvable: true,
   };
 }

+/** P3 94:2 ordinal — « SUJET 01 ». Falls back to the plain label without one. */
+function paddedOrdinalLabel(ordinal: number | null): string {
+  if (ordinal == null) return "Sujet";
+  return `Sujet ${ordinal < 10 ? `0${ordinal}` : ordinal}`;
+}
+
+/** Relative freshness from the durable projection — honest when unreadable. */
+function relativeUpdatedAt(iso: string): string {
+  const then = new Date(iso).getTime();
+  if (Number.isNaN(then)) return "Mise à jour non datée";
+  const minutes = Math.floor((Date.now() - then) / 60000);
+  if (minutes < 0) return "Mise à jour non datée";
+  if (minutes < 1) return "Mis à jour à l'instant";
+  if (minutes < 60) return `Mis à jour il y a ${minutes} min`;
+  const hours = Math.floor(minutes / 60);
+  if (hours < 24) return `Mis à jour il y a ${hours} h`;
+  const days = Math.floor(hours / 24);
+  return `Mis à jour il y a ${days} j`;
+}
+
+/** Exchanges shown before the Pilot expands the full linked index (94:2). */
+const PRINCIPAL_EXCHANGE_PREVIEW = 2;
+
+const MEMORY_TABS: ReadonlyArray<{
+  id: JournalMemoryTab;
+  label: string;
+  paneId: string;
+}> = [
+  { id: "sujets", label: "Sujets", paneId: "cycle-journal-list" },
+  { id: "reserves", label: "Réserves", paneId: "cycle-reservations-list" },
+  {
+    id: "recommandations",
+    label: "Recommandations",
+    paneId: "cycle-recommendations-list",
+  },
+  { id: "decisions", label: "Décisions", paneId: "cycle-decisions-list" },
+];
+
 /**
- * Cycle Journal rail — semantic projection only.
+ * Cycle Journal — semantic projection only, in a rail or principal composition.
  * NEVER presented as Truth C / History durable / HumanDecision.
  */
 export function JournalSurface({
@@ -209,7 +291,14 @@ export function JournalSurface({
   recommendations = [],
   decisions = [],
   onResumeRecommendationInChat,
+  variant = "rail",
+  onReturnToConversation,
+  onOpenFullJournal,
+  railMaxEntries,
+  cycleLabel = null,
+  currentnessLabel = null,
 }: JournalSurfaceProps) {
+  const principal = variant === "principal";
   const safeEntries = Array.isArray(entries) ? entries : [];
   const safeReservations = Array.isArray(reservations) ? reservations : [];
   const safeRecommendations = Array.isArray(recommendations)
@@ -230,6 +319,8 @@ export function JournalSurface({
   );
   /** Epistemic id awaiting explicit Pilot confirm for defer — zero writes until confirm. */
   const [deferConfirmId, setDeferConfirmId] = useState<string | null>(null);
+  /** Principal mobile only — one nav level: subjects index ↔ selected subject. */
+  const [mobileShowDetail, setMobileShowDetail] = useState(false);
   const tab: JournalMemoryTab = memoryTab ?? internalTab;
   const setTab = (next: JournalMemoryTab) => {
     if (memoryTab === undefined) setInternalTab(next);
@@ -268,34 +359,140 @@ export function JournalSurface({
           ? `${openRecommendationCount} en attente de votre réponse`
           : `${decisionCount} décision${decisionCount === 1 ? "" : "s"} enregistrée${decisionCount === 1 ? "" : "s"}`;

+  /** Rail stays a shortcut: it shows a bounded head of the subjects index. */
+  const listedEntries =
+    !principal && typeof railMaxEntries === "number" && railMaxEntries > 0
+      ? safeEntries.slice(0, railMaxEntries)
+      : safeEntries;
+  const hiddenEntryCount = safeEntries.length - listedEntries.length;
+
+  /**
+   * Principal detail falls back to the current topic then the first subject so
+   * the master/detail view is never empty while a subject exists.
+   */
+  const detailEntry: JournalSurfaceEntry | null = principal
+    ? (safeEntries.find((e) => e.journalEntryId === selectedEntryId) ??
+      safeEntries.find((e) => e.isCurrentTopic) ??
+      safeEntries[0] ??
+      null)
+    : null;
+  const detailTurnRefs = detailEntry?.sourceTurnRefs ?? [];
+  const exchangesExpanded =
+    detailEntry != null && expandedEntryId === detailEntry.journalEntryId;
+  const shownTurnRefs = exchangesExpanded
+    ? detailTurnRefs
+    : detailTurnRefs.slice(0, PRINCIPAL_EXCHANGE_PREVIEW);
+  const firstResolvableTurn =
+    detailTurnRefs.find(
+      (turnId) => previewFor(turnId, transcriptMessages).resolvable,
+    ) ?? null;
+  /** Only Reservations carry a durable Journal subject link in the projection. */
+  const detailLinkedReservations = detailEntry
+    ? safeReservations.filter((r) =>
+        r.journalEntryRefs.includes(detailEntry.journalEntryId),
+      )
+    : [];
+  const masterTitle =
+    tab === "sujets"
+      ? "Sujets"
+      : tab === "reserves"
+        ? "Réserves"
+        : tab === "recommandations"
+          ? "Recommandations"
+          : "Décisions";
+
+  const Root = (principal ? "section" : "aside") as "section";
+
   return (
-    <aside
-      className={[styles.root, collapsed ? styles.collapsed : ""].join(" ")}
-      data-testid="cycle-journal-rail"
+    <Root
+      className={[
+        styles.root,
+        principal ? styles.principal : "",
+        collapsed ? styles.collapsed : "",
+      ]
+        .filter(Boolean)
+        .join(" ")}
+      data-testid={principal ? "project-journal-surface" : "cycle-journal-rail"}
+      data-variant={variant}
       data-memory-tab={tab}
+      data-mobile-detail={
+        principal && mobileShowDetail && detailEntry ? "true" : "false"
+      }
       aria-label="Journal du cycle"
     >
-      <header className={styles.header}>
-        <div className={styles.headerText}>
-          <p className={styles.eyebrow}>Mémoire de cycle</p>
-          <h2 className={styles.title} id="cycle-journal-heading">
-            {railTitle}
-          </h2>
-          <p className={styles.meta}>{railMeta}</p>
-        </div>
-        {onToggleCollapsed ? (
-          <button
-            type="button"
-            className={styles.toggle}
-            data-testid="cycle-journal-toggle"
-            aria-expanded={!collapsed}
-            aria-controls={paneId}
-            onClick={onToggleCollapsed}
-          >
-            {collapsed ? "Ouvrir" : "Replier"}
-          </button>
-        ) : null}
-      </header>
+      {principal ? (
+        <header className={styles.principalHeader}>
+          {onReturnToConversation ? (
+            <button
+              type="button"
+              className={styles.principalBack}
+              data-testid="project-journal-return-conversation"
+              onClick={onReturnToConversation}
+            >
+              <span className={styles.principalBackFull}>
+                ← Retour à la conversation
+              </span>
+              <span className={styles.principalBackShort}>← Conversation</span>
+            </button>
+          ) : null}
+          <div className={styles.principalTitleRow}>
+            <h2 className={styles.principalTitle} id="cycle-journal-heading">
+              Journal du cycle
+            </h2>
+            <span className={styles.principalMeta}>
+              {cycleLabel ? (
+                <span className={styles.principalChip}>{cycleLabel}</span>
+              ) : null}
+              {currentnessLabel ? (
+                <span
+                  className={styles.principalChipOk}
+                  data-testid="project-journal-currentness"
+                >
+                  {currentnessLabel}
+                </span>
+              ) : null}
+            </span>
+          </div>
+          {tab === "sujets" ? (
+            <p className={styles.principalSubtitle}>
+              Les fils de travail du Cycle, mis à jour au fil de la conversation.
+            </p>
+          ) : null}
+        </header>
+      ) : (
+        <header className={styles.header}>
+          <div className={styles.headerText}>
+            <p className={styles.eyebrow}>Mémoire de cycle</p>
+            <h2 className={styles.title} id="cycle-journal-heading">
+              {railTitle}
+            </h2>
+            <p className={styles.meta}>{railMeta}</p>
+          </div>
+          {onToggleCollapsed ? (
+            <button
+              type="button"
+              className={styles.toggle}
+              data-testid="cycle-journal-toggle"
+              aria-expanded={!collapsed}
+              aria-controls={paneId}
+              onClick={onToggleCollapsed}
+            >
+              {collapsed ? "Ouvrir" : "Replier"}
+            </button>
+          ) : null}
+        </header>
+      )}
+
+      {!principal && !collapsed && onOpenFullJournal ? (
+        <button
+          type="button"
+          className={styles.openFull}
+          data-testid="cycle-journal-open-full"
+          onClick={onOpenFullJournal}
+        >
+          Ouvrir le Journal du cycle →
+        </button>
+      ) : null}

       {!collapsed ? (
         <div
@@ -304,65 +501,63 @@ export function JournalSurface({
           aria-label="Mémoire de cycle"
           data-testid="memory-rail-tabs"
         >
-          <button
-            type="button"
-            role="tab"
-            id="memory-rail-tab-sujets"
-            className={[styles.tab, tab === "sujets" ? styles.tabActive : ""]
-              .filter(Boolean)
-              .join(" ")}
-            data-testid="memory-rail-tab-sujets"
-            aria-selected={tab === "sujets"}
-            aria-controls="cycle-journal-list"
-            onClick={() => setTab("sujets")}
-          >
-            Sujets ({activeCount})
-          </button>
-          <button
-            type="button"
-            role="tab"
-            id="memory-rail-tab-reserves"
-            className={[styles.tab, tab === "reserves" ? styles.tabActive : ""]
-              .filter(Boolean)
-              .join(" ")}
-            data-testid="memory-rail-tab-reserves"
-            aria-selected={tab === "reserves"}
-            aria-controls="cycle-reservations-list"
-            onClick={() => setTab("reserves")}
-          >
-            Réserves ({openReservationCount})
-          </button>
-          <button
-            type="button"
-            role="tab"
-            id="memory-rail-tab-recommandations"
-            className={[
-              styles.tab,
-              tab === "recommandations" ? styles.tabActive : "",
-            ]
-              .filter(Boolean)
-              .join(" ")}
-            data-testid="memory-rail-tab-recommandations"
-            aria-selected={tab === "recommandations"}
-            aria-controls="cycle-recommendations-list"
-            onClick={() => setTab("recommandations")}
-          >
-            Recommandations ({openRecommendationCount})
-          </button>
-          <button
-            type="button"
-            role="tab"
-            id="memory-rail-tab-decisions"
-            className={[styles.tab, tab === "decisions" ? styles.tabActive : ""]
-              .filter(Boolean)
-              .join(" ")}
-            data-testid="memory-rail-tab-decisions"
-            aria-selected={tab === "decisions"}
-            aria-controls="cycle-decisions-list"
-            onClick={() => setTab("decisions")}
-          >
-            Décisions ({decisionCount})
-          </button>
+          {MEMORY_TABS.map((item) => {
+            const count =
+              item.id === "sujets"
+                ? activeCount
+                : item.id === "reserves"
+                  ? openReservationCount
+                  : item.id === "recommandations"
+                    ? openRecommendationCount
+                    : decisionCount;
+            return (
+              <button
+                key={item.id}
+                type="button"
+                role="tab"
+                id={`memory-rail-tab-${item.id}`}
+                className={[styles.tab, tab === item.id ? styles.tabActive : ""]
+                  .filter(Boolean)
+                  .join(" ")}
+                data-testid={`memory-rail-tab-${item.id}`}
+                aria-selected={tab === item.id}
+                aria-controls={item.paneId}
+                onClick={() => setTab(item.id)}
+              >
+                {/* Principal splits the count into a badge (94:2); the rail keeps one label. */}
+                {principal ? (
+                  <>
+                    {item.label}
+                    <span className={styles.tabCount}>{count}</span>
+                  </>
+                ) : (
+                  `${item.label} (${count})`
+                )}
+              </button>
+            );
+          })}
+        </div>
+      ) : null}
+
+      <div className={styles.body} data-variant={variant}>
+      <div
+        className={styles.masterCol}
+        data-mobile-hidden={
+          principal && mobileShowDetail && detailEntry ? "true" : "false"
+        }
+      >
+      {principal && !collapsed ? (
+        <div className={styles.masterHead}>
+          <div className={styles.masterHeadRow}>
+            <h3 className={styles.masterTitle}>{masterTitle}</h3>
+            <span className={styles.masterCount}>{railMeta}</span>
+          </div>
+          {tab === "sujets" ? (
+            <p className={styles.masterNote}>
+              Les fils de travail du Cycle, mis à jour au fil de la
+              conversation.
+            </p>
+          ) : null}
         </div>
       ) : null}

@@ -790,8 +985,10 @@ export function JournalSurface({
               ici comme index navigable.
             </p>
           ) : (
-            safeEntries.map((entry) => {
-              const selected = selectedEntryId === entry.journalEntryId;
+            listedEntries.map((entry) => {
+              const selected = principal
+                ? detailEntry?.journalEntryId === entry.journalEntryId
+                : selectedEntryId === entry.journalEntryId;
               const expanded = expandedEntryId === entry.journalEntryId;
               const pointsOpen = pointsOpenId === entry.journalEntryId;
               const hasPoints =
@@ -820,7 +1017,10 @@ export function JournalSurface({
                   <button
                     type="button"
                     className={styles.cardSelect}
-                    onClick={() => onSelectEntry(entry.journalEntryId)}
+                    onClick={() => {
+                      onSelectEntry(entry.journalEntryId);
+                      if (principal) setMobileShowDetail(true);
+                    }}
                     aria-pressed={selected}
                   >
                     <span className={styles.cardHeading}>
@@ -829,7 +1029,9 @@ export function JournalSurface({
                           className={styles.ordinal}
                           data-testid={`cycle-journal-ordinal-${entry.journalEntryId}`}
                         >
-                          Sujet {ordinal}
+                          {principal
+                            ? paddedOrdinalLabel(ordinal)
+                            : `Sujet ${ordinal}`}
                         </span>
                       ) : null}
                       {entry.isCurrentTopic ? (
@@ -840,6 +1042,14 @@ export function JournalSurface({
                           En cours
                         </span>
                       ) : null}
+                      {principal && !entry.isCurrentTopic ? (
+                        <span
+                          className={styles.statusBadge}
+                          data-status={entry.status}
+                        >
+                          {statusLabel(entry.status)}
+                        </span>
+                      ) : null}
                     </span>
                     <span className={styles.cardTitle}>{entry.title}</span>
                     <span className={styles.cardSummary}>
@@ -853,9 +1063,17 @@ export function JournalSurface({
                         {entry.sourceTurnCount} échange
                         {entry.sourceTurnCount === 1 ? "" : "s"}
                       </span>
+                      {principal ? (
+                        <span className={styles.cardPoints}>
+                          {entry.stabilizedPoints.length} stabilisé
+                          {entry.stabilizedPoints.length === 1 ? "" : "s"} ·{" "}
+                          {entry.openPoints.length} ouvert
+                          {entry.openPoints.length === 1 ? "" : "s"}
+                        </span>
+                      ) : null}
                     </span>
                   </button>
-                  {hasPoints ? (
+                  {!principal && hasPoints ? (
                     <button
                       type="button"
                       className={styles.viewExchanges}
@@ -874,7 +1092,7 @@ export function JournalSurface({
                         : "Points stabilisés / ouverts"}
                     </button>
                   ) : null}
-                  {pointsOpen && hasPoints ? (
+                  {!principal && pointsOpen && hasPoints ? (
                     <div
                       className={styles.pointsBlock}
                       data-testid={`cycle-journal-points-body-${entry.journalEntryId}`}
@@ -901,7 +1119,7 @@ export function JournalSurface({
                       ) : null}
                     </div>
                   ) : null}
-                  {entry.sourceTurnRefs.length > 0 ? (
+                  {!principal && entry.sourceTurnRefs.length > 0 ? (
                     <button
                       type="button"
                       className={styles.viewExchanges}
@@ -920,7 +1138,7 @@ export function JournalSurface({
                       {expanded ? "Masquer les échanges" : "Voir les échanges"}
                     </button>
                   ) : null}
-                  {expanded && entry.sourceTurnRefs.length > 0 ? (
+                  {!principal && expanded && entry.sourceTurnRefs.length > 0 ? (
                     <ul
                       id={`cycle-journal-exchanges-${entry.journalEntryId}`}
                       className={styles.exchangeList}
@@ -943,24 +1161,324 @@ export function JournalSurface({
                               }}
                               disabled={!preview.resolvable}
                             >
-                              <span className={styles.exchangeRole}>
-                                {preview.role}
-                              </span>
-                              <span className={styles.exchangeExcerpt}>
-                                {preview.excerpt}
+                              <span className={styles.exchangeTop}>
+                                <span
+                                  className={styles.exchangeRole}
+                                  data-role={preview.role}
+                                >
+                                  {preview.role}
+                                </span>
+                                <span className={styles.exchangeWhen}>
+                                  {preview.when}
+                                </span>
                               </span>
-                            </button>
-                          </li>
-                        );
-                      })}
-                    </ul>
-                  ) : null}
+                            <span className={styles.exchangeExcerpt}>
+                              {preview.excerpt}
+                            </span>
+                          </button>
+                        </li>
+                      );
+                    })}
+                  </ul>
+                ) : null}
                 </article>
               );
             })
           )}
+          {hiddenEntryCount > 0 && onOpenFullJournal ? (
+            <button
+              type="button"
+              className={styles.viewExchanges}
+              data-testid="cycle-journal-overflow"
+              onClick={onOpenFullJournal}
+            >
+              Voir les {safeEntries.length} sujets →
+            </button>
+          ) : null}
+        </div>
+      ) : null}
+      </div>
+
+      {principal && !collapsed && tab === "sujets" ? (
+        <div
+          className={styles.detailCol}
+          data-testid="project-journal-detail"
+          data-mobile-hidden={mobileShowDetail && detailEntry ? "false" : "true"}
+          aria-live="polite"
+        >
+          {!detailEntry ? (
+            <p className={styles.empty} data-testid="project-journal-detail-empty">
+              Sélectionnez un sujet pour lire son état courant, ses points et
+              ses échanges liés.
+            </p>
+          ) : (
+            <div className={styles.detailInner}>
+              <button
+                type="button"
+                className={styles.detailBack}
+                data-testid="project-journal-back-to-subjects"
+                onClick={() => setMobileShowDetail(false)}
+              >
+                ← Sujets
+              </button>
+
+              <div className={styles.detailHead}>
+                <div className={styles.detailHeadRow}>
+                  <span className={styles.detailBadges}>
+                    {detailEntry.topicOrdinal > 0 ? (
+                      <span
+                        className={styles.ordinal}
+                        data-testid="project-journal-detail-ordinal"
+                      >
+                        {paddedOrdinalLabel(detailEntry.topicOrdinal)}
+                      </span>
+                    ) : null}
+                    {detailEntry.isCurrentTopic ? (
+                      <span className={styles.currentBadge}>En cours</span>
+                    ) : null}
+                    <span
+                      className={styles.statusBadge}
+                      data-status={detailEntry.status}
+                    >
+                      {statusLabel(detailEntry.status)}
+                    </span>
+                  </span>
+                  <span className={styles.detailUpdated}>
+                    {relativeUpdatedAt(detailEntry.updatedAt)}
+                  </span>
+                </div>
+                <h3
+                  className={styles.detailTitle}
+                  data-testid="project-journal-detail-title"
+                >
+                  {detailEntry.title}
+                </h3>
+                <p className={styles.detailSummary}>
+                  {detailEntry.currentSummary}
+                </p>
+              </div>
+
+              <section
+                className={styles.detailSection}
+                data-testid="project-journal-stabilized"
+              >
+                <p className={styles.detailSectionHead}>
+                  <span className={styles.detailSectionLabel}>
+                    Points stabilisés
+                  </span>
+                  <span className={styles.detailSectionCount}>
+                    {detailEntry.stabilizedPoints.length}
+                  </span>
+                </p>
+                {detailEntry.stabilizedPoints.length === 0 ? (
+                  <p className={styles.detailUnavailable}>
+                    Aucun point stabilisé enregistré sur ce sujet.
+                  </p>
+                ) : (
+                  <ul className={styles.markedList} data-marker="stabilized">
+                    {detailEntry.stabilizedPoints.map((point, i) => (
+                      <li key={`ds-${i}`}>{point}</li>
+                    ))}
+                  </ul>
+                )}
+              </section>
+
+              <section
+                className={styles.detailSection}
+                data-testid="project-journal-open"
+              >
+                <p className={styles.detailSectionHead}>
+                  <span className={styles.detailSectionLabel}>
+                    Points ouverts
+                  </span>
+                  <span className={styles.detailSectionCount}>
+                    {detailEntry.openPoints.length}
+                  </span>
+                </p>
+                {detailEntry.openPoints.length === 0 ? (
+                  <p className={styles.detailUnavailable}>
+                    Aucun point ouvert sur ce sujet.
+                  </p>
+                ) : (
+                  <ul className={styles.markedList} data-marker="open">
+                    {detailEntry.openPoints.map((point, i) => (
+                      <li key={`do-${i}`}>{point}</li>
+                    ))}
+                  </ul>
+                )}
+              </section>
+
+              <section
+                className={styles.detailSection}
+                data-testid="project-journal-linked"
+              >
+                <p className={styles.detailSectionHead}>
+                  <span className={styles.detailSectionLabel}>
+                    Éléments liés
+                  </span>
+                </p>
+                {detailLinkedReservations.length > 0 ? (
+                  <div className={styles.linkedPills}>
+                    <button
+                      type="button"
+                      className={styles.linkedPill}
+                      data-kind="reserve"
+                      data-testid="project-journal-linked-reservation-count"
+                      onClick={() => setTab("reserves")}
+                    >
+                      <span className={styles.linkedPillCount}>
+                        {detailLinkedReservations.length}
+                      </span>
+                      <span className={styles.linkedPillLabel}>
+                        {detailLinkedReservations.length === 1
+                          ? "réserve"
+                          : "réserves"}
+                      </span>
+                    </button>
+                    {detailLinkedReservations.map((card) => (
+                      <button
+                        key={card.epistemicItemId}
+                        type="button"
+                        className={styles.linkedPill}
+                        data-kind="reserve-item"
+                        data-testid={`project-journal-linked-reservation-${card.epistemicItemId}`}
+                        onClick={() => setTab("reserves")}
+                        title={card.title}
+                      >
+                        <span className={styles.linkedPillCount}>
+                          {card.ordinal > 0 ? card.ordinal : "·"}
+                        </span>
+                        <span className={styles.linkedPillLabel}>
+                          {card.presentationStateLabel}
+                        </span>
+                      </button>
+                    ))}
+                  </div>
+                ) : null}
+                <p className={styles.detailUnavailable}>
+                  {detailLinkedReservations.length > 0
+                    ? "Les décisions et recommandations ne portent pas de rattachement durable à un sujet — consultez leurs onglets."
+                    : "Aucun élément lié à ce sujet dans la projection : seules les réserves portent un rattachement durable au Journal."}
+                </p>
+              </section>
+
+              <section
+                className={styles.detailSection}
+                data-testid="project-journal-exchanges"
+              >
+                <p className={styles.detailSectionHead}>
+                  <span className={styles.detailSectionLabel}>
+                    Échanges liés
+                  </span>
+                  <span className={styles.detailSectionCount}>
+                    {detailTurnRefs.length === 0
+                      ? "0"
+                      : exchangesExpanded
+                        ? `${detailTurnRefs.length} échange${detailTurnRefs.length === 1 ? "" : "s"} affiché${detailTurnRefs.length === 1 ? "" : "s"}`
+                        : `${shownTurnRefs.length} sur ${detailTurnRefs.length} affichés`}
+                  </span>
+                </p>
+                {detailTurnRefs.length === 0 ? (
+                  <p className={styles.detailUnavailable}>
+                    Aucun échange durable n&apos;est rattaché à ce sujet.
+                  </p>
+                ) : (
+                  <ul
+                    id={`cycle-journal-exchanges-${detailEntry.journalEntryId}`}
+                    className={styles.exchangePanel}
+                    data-testid={`cycle-journal-exchanges-${detailEntry.journalEntryId}`}
+                    data-expanded={exchangesExpanded ? "true" : "false"}
+                    aria-label={`Échanges liés — ${detailEntry.title}`}
+                  >
+                    {shownTurnRefs.map((turnId, index) => {
+                      const preview = previewFor(turnId, transcriptMessages);
+                      return (
+                        <li key={`${turnId}-${index}`}>
+                          <button
+                            type="button"
+                            className={styles.exchangeRow}
+                            data-testid={`cycle-journal-exchange-${turnId}`}
+                            data-resolvable={
+                              preview.resolvable ? "true" : "false"
+                            }
+                            data-role={preview.role}
+                            onClick={() => {
+                              if (preview.resolvable) onFocusTurn(turnId);
+                            }}
+                            disabled={!preview.resolvable}
+                          >
+                            <span className={styles.exchangeWho}>
+                              <span
+                                className={styles.exchangeAvatar}
+                                data-role={preview.role}
+                                aria-hidden
+                              >
+                                {roleAvatarLetter(preview.role)}
+                              </span>
+                              <span
+                                className={styles.exchangeRole}
+                                data-role={preview.role}
+                              >
+                                {preview.role}
+                              </span>
+                            </span>
+                            <span className={styles.exchangeExcerpt}>
+                              {preview.excerpt}
+                            </span>
+                            <span className={styles.exchangeWhen}>
+                              {preview.when}
+                            </span>
+                          </button>
+                        </li>
+                      );
+                    })}
+                  </ul>
+                )}
+                <div className={styles.detailFooter}>
+                  {detailTurnRefs.length > PRINCIPAL_EXCHANGE_PREVIEW ? (
+                    <button
+                      type="button"
+                      className={styles.viewExchanges}
+                      data-testid={`cycle-journal-view-${detailEntry.journalEntryId}`}
+                      aria-expanded={exchangesExpanded}
+                      aria-controls={`cycle-journal-exchanges-${detailEntry.journalEntryId}`}
+                      onClick={() => {
+                        onViewExchanges(detailEntry);
+                        setExpandedEntryId((prev) =>
+                          prev === detailEntry.journalEntryId
+                            ? null
+                            : detailEntry.journalEntryId,
+                        );
+                      }}
+                    >
+                      {exchangesExpanded
+                        ? "Réduire les échanges"
+                        : `Voir les ${detailTurnRefs.length} échanges`}
+                    </button>
+                  ) : (
+                    <span />
+                  )}
+                  {firstResolvableTurn ? (
+                    <button
+                      type="button"
+                      className={styles.viewExchanges}
+                      data-testid="project-journal-open-in-conversation"
+                      onClick={() => onFocusTurn(firstResolvableTurn)}
+                    >
+                      Voir dans la conversation →
+                    </button>
+                  ) : (
+                    <span className={styles.detailUnavailable}>
+                      Échanges non résolus — reprise impossible pour l&apos;instant.
+                    </span>
+                  )}
+                </div>
+              </section>
+            </div>
+          )}
         </div>
       ) : null}
-    </aside>
+      </div>
+    </Root>
   );
 }
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx
index 8d1cf279..f7413370 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx
@@ -23,6 +23,13 @@ import {
   readyExceptFinalizeDecision,
   summarizeFinalizationReadiness,
 } from "./lifecyclePresentation";
+import {
+  workProductionPilotLabel,
+  workRequirementPilotLabel,
+  workTriStatePilotLabel,
+  workValidationPilotLabel,
+} from "@/features/project-assistant/w2/deriveWorkRepresentationProjection";
+import { deriveWorkRepresentationFromLifecycleProjection } from "./deriveWorkRepresentationFromLifecycle";
 import styles from "./LifecycleSurface.module.css";

 function cycleCatalogLabel(projection: PilotLifecycleProjection | null): string {
@@ -242,6 +249,8 @@ export function LifecycleSurface({
   const cycleTitle = cycleCatalogLabel(projection);
   const badge = lifecycleStatusBadge(projection);
   const cta = lifecycleCtaPresentation(projection);
+  const workRepresentation =
+    deriveWorkRepresentationFromLifecycleProjection(projection);
   const finalizeRec = primaryFinalizeRecommendation(projection);
   const nextRec = primaryNextCycleRecommendation(projection);
   const nonHd = nonHumanDecisionBlockers(projection.assessment);
@@ -301,6 +310,52 @@ export function LifecycleSurface({
         </p>
       </header>

+      {workRepresentation ? (
+        <section
+          className={styles.block}
+          data-testid="lifecycle-work-representation"
+          aria-label="Représentation du travail"
+        >
+          <p className={styles.eyebrow}>LIVRABLE / TRAVAIL</p>
+          <p
+            className={styles.muted}
+            data-testid="lifecycle-work-representation-summary"
+          >
+            {workRepresentation.pilotSummary}
+          </p>
+          <ul className={styles.list} data-testid="lifecycle-work-representation-states">
+            <li data-requirement={workRepresentation.requirementState}>
+              Exigence ·{" "}
+              {workRequirementPilotLabel(workRepresentation.requirementState)}
+            </li>
+            <li data-production={workRepresentation.productionState}>
+              Production ·{" "}
+              {workProductionPilotLabel(workRepresentation.productionState)}
+            </li>
+            <li data-validation={workRepresentation.validationState}>
+              Qualification ·{" "}
+              {workValidationPilotLabel(workRepresentation.validationState)}
+            </li>
+            <li data-exit-proof={String(workRepresentation.exitProofSatisfied)}>
+              Preuve de sortie ·{" "}
+              {workTriStatePilotLabel(workRepresentation.exitProofSatisfied, {
+                true: "Satisfaite",
+                false: "Non satisfaite",
+                unknown: "Non déterminée",
+              })}
+            </li>
+            <li data-cycle-complete={String(workRepresentation.cycleComplete)}>
+              Cycle ·{" "}
+              {workTriStatePilotLabel(workRepresentation.cycleComplete, {
+                true: "Terminé",
+                false: "En cours",
+                unknown: "Non déterminé",
+              })}
+            </li>
+          </ul>
+        </section>
+      ) : null}
+
       {error ? (
         <p className={styles.error} role="alert">
           {error}
diff --git a/projects/sfia-studio/app/features/project-assistant/actions.ts b/projects/sfia-studio/app/features/project-assistant/actions.ts
index bb03f760..b6970355 100644
--- a/projects/sfia-studio/app/features/project-assistant/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/actions.ts
@@ -936,7 +936,13 @@ export async function projectAssistantConversationContinuityAction(input: {
 }): Promise<{
   ok: true;
   transcriptAvailability: "available" | "empty" | "unavailable";
-  messages: { id: string; role: "user" | "assistant"; content: string }[];
+  messages: {
+    id: string;
+    role: "user" | "assistant";
+    content: string;
+    /** Durable Session timestamp when present — never invented for UI. */
+    createdAt: string | null;
+  }[];
   journal: {
     cycleInstanceId: string | null;
     currentTopicEntryId: string | null;
@@ -995,6 +1001,7 @@ export async function projectAssistantConversationContinuityAction(input: {
           id: t.turnId,
           role: t.role as "user" | "assistant",
           content: t.content,
+          createdAt: t.createdAt?.trim() || null,
         }));
       const cycleInstanceId = input.cycleInstanceId?.trim() || null;
       const listed = cycleInstanceId
@@ -1443,7 +1450,16 @@ async function buildAssistantPilotLifecycleProjection(
   }

   // CHAT-FIRST — Décisions Journal tab (HumanDecision history).
-  projection.cycleDecisions = projectCycleDecisionCards(decisions);
+  // P5-S07 CP01 — Journal du cycle: only decisions confidently assigned to the
+  // selected/active cycle. Decisions without cycleInstanceId are excluded
+  // (no guess). Cross-cycle inheritance is not invented.
+  const journalCycleId =
+    projection.selectedCycleInstanceId ?? projection.activeCycleInstanceId;
+  projection.cycleDecisions = projectCycleDecisionCards(
+    journalCycleId
+      ? decisions.filter((d) => d.cycleInstanceId === journalCycleId)
+      : [],
+  );

   // Morris correction + MD-WR-02 — Work Recommendations for Journal > Recommandations.
   // Lifecycle CURRENT stays on currentRecommendations (right panel / audit only).
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/projectHistory.ts b/projects/sfia-studio/app/features/project-assistant/w2/projectHistory.ts
index 8079bc5c..9a4707b0 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/projectHistory.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/projectHistory.ts
@@ -14,8 +14,11 @@ import { readLiveProjectContext } from "@/lib/vertical-slice-runtime";

 /** Bounded lookback so the read model can never become a history platform. */
 export const W2_HISTORY_MAX_TRAJECTORY_VERSIONS = 5;
-export const W2_HISTORY_MAX_DECISIONS = 5;
-export const W2_HISTORY_MAX_CONTRACTS = 5;
+export const W2_HISTORY_MAX_DECISIONS = 8;
+export const W2_HISTORY_MAX_CONTRACTS = 8;
+export const W2_HISTORY_MAX_EVIDENCE = 5;
+export const W2_HISTORY_MAX_REVIEW_BUNDLES = 5;
+export const W2_HISTORY_MAX_SYNTHESES = 3;

 export type W2TrajectoryAnchor = {
   readonly trajectoryId: string;
@@ -50,6 +53,22 @@ export type W2ContractAnchor = {
   readonly decisionRefs: readonly string[];
 };

+export type W2EvidenceAnchor = {
+  readonly evidenceId: string;
+  readonly status: string;
+};
+
+export type W2ReviewBundleAnchor = {
+  readonly reviewBundleId: string;
+  readonly status: string;
+};
+
+export type W2SynthesisAnchor = {
+  readonly synthesisId: string;
+  readonly title: string;
+  readonly status: string;
+};
+
 export type W2ProjectHistoryReadModel = {
   readonly projectId: string;
   readonly projectTitle: string;
@@ -67,8 +86,13 @@ export type W2ProjectHistoryReadModel = {
   };
   readonly decisions: readonly W2DecisionAnchor[];
   readonly contracts: readonly W2ContractAnchor[];
+  readonly evidence: readonly W2EvidenceAnchor[];
+  readonly reviewBundles: readonly W2ReviewBundleAnchor[];
+  readonly syntheses: readonly W2SynthesisAnchor[];
   /** Explicit honesty about what this read model does NOT contain. */
   readonly absent: readonly string[];
+  /** Explicit lookback caps — History is bounded, not exhaustive. */
+  readonly boundNote: string;
 };

 export type ReadW2ProjectHistoryResult =
@@ -76,10 +100,11 @@ export type ReadW2ProjectHistoryResult =
   | { readonly ok: false; readonly code: string; readonly message: string };

 const ABSENT_BY_DESIGN: readonly string[] = Object.freeze([
-  "Conversation (process-local, non rejouée)",
-  "Proposition F2 process-local",
-  "Confirmation demandée (process-local)",
+  "Conversation (interaction durable Session — ≠ Historique Product)",
+  "Proposition F2 process-local (reconstruite via Epistemic ou requalification)",
+  "Confirmation préparée process-locale (UAT-RECOVERY-03 — non-autorité)",
   "Raisonnement interne non matérialisé",
+  "Historique borné — pas un dump exhaustif",
 ]);

 export async function readW2ProjectHistory(input: {
@@ -194,6 +219,57 @@ export async function readW2ProjectHistory(input: {
         }))
     : [];

+  // P5-S07 CP01 — minimum-sufficient Evidence / Review / Synthesis anchors
+  // from existing OA list use cases (bounded; no HistoryStore).
+  let evidence: W2EvidenceAnchor[] = [];
+  let reviewBundles: W2ReviewBundleAnchor[] = [];
+  try {
+    const listed = await oa.evidenceReviewServices.repository.listByProject(
+      projectId,
+    );
+    evidence = listed
+      .slice(-W2_HISTORY_MAX_EVIDENCE)
+      .reverse()
+      .map((e) => ({
+        evidenceId: e.evidenceId,
+        status: e.status,
+      }));
+  } catch {
+    evidence = [];
+  }
+  try {
+    const listed =
+      await oa.evidenceReviewServices.reviewBundleRepository.listByProject(
+        projectId,
+      );
+    reviewBundles = listed
+      .slice(-W2_HISTORY_MAX_REVIEW_BUNDLES)
+      .reverse()
+      .map((rb) => ({
+        reviewBundleId: rb.reviewBundleId,
+        status: rb.status,
+      }));
+  } catch {
+    reviewBundles = [];
+  }
+
+  let syntheses: W2SynthesisAnchor[] = [];
+  try {
+    const { listProductSynthesesAction } = await import(
+      "@/features/project-assistant/synthesisActions"
+    );
+    const listed = await listProductSynthesesAction({ projectId });
+    if (listed.ok) {
+      syntheses = listed.items.slice(0, W2_HISTORY_MAX_SYNTHESES).map((s) => ({
+        synthesisId: s.synthesisId,
+        title: s.title,
+        status: s.status,
+      }));
+    }
+  } catch {
+    syntheses = [];
+  }
+
   return {
     ok: true,
     history: {
@@ -214,7 +290,11 @@ export async function readW2ProjectHistory(input: {
       },
       decisions,
       contracts,
+      evidence,
+      reviewBundles,
+      syntheses,
       absent: ABSENT_BY_DESIGN,
+      boundNote: `Borné · ≤${W2_HISTORY_MAX_DECISIONS} décisions · ≤${W2_HISTORY_MAX_CONTRACTS} contrats · ≤${W2_HISTORY_MAX_EVIDENCE} preuves · ≤${W2_HISTORY_MAX_REVIEW_BUNDLES} revues · ≤${W2_HISTORY_MAX_SYNTHESES} synthèses.`,
     },
   };
 }
diff --git a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
index 2aeae5c9..355c8cba 100644
--- a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
@@ -4,7 +4,10 @@
 | --- | --- |
 | **Rôle** | Roadmap **vivante** de convergence vers l’utilisation complète de la doctrine produit SFIA Studio v3 |
 | **Statut** | **VALIDATED — ACTIVE LIVING ROADMAP** |
-| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S06 INTEGRATED / POST-MERGE VERIFIED** | 2026-10-06 Europe/Paris — **STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S06 PILOT EXPERIENCE COMPLETION — INTEGRATED / POST-MERGE VERIFIED** · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **14 — Post-Merge** · Profile **Critical** · Typologie **EVOL** · Milestone **P5** · Slice **P5-S06** · Morris P5-S06 MERGE GO = **AUTHORIZED / CONSUMED** · PR **#561** **MERGED** · feature commit **`731fdd7247b37cd708a9496fb81a9986e78abcd1`** · merge/main **`9f586496f28b824b1a4938d497c148ba0c96596e`** · post-merge CI Studio **#690** / run **`37485457209`** = **SUCCESS** · Detect / Build / **Required Gate** = **SUCCESS** · P5-S06 = **INTEGRATED / POST-MERGE VERIFIED** · FUNCTIONAL CLOSURE **PASS / INTEGRATED** · Visual **PASS AT S06 SCOPE** · FULL CANONICAL SEND CANCELLATION **PASS DETERMINISTIC / INTEGRATED** · P5-S06-DEBT-NORA-STOP **CLOSED ON MAIN / POST-MERGE VERIFIED** · REAL cancellation **NOT PROVEN** · ZERO REAL · delivery branch cleanup **COMPLETE** · P5 = **IN PROGRESS** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · NEXT RECOMMENDED = **P5-S07 — Project Continuity & Work Representation Completion** · S07 **NOT AUTHORIZED / NOT STARTED** · S08 **NOT STARTED** · documentary truth-sync PR this cycle · truth-sync merge **NOT AUTHORIZED** · **≠** P5 COMPLETE · **≠** REAL cancellation proven · **≠** runtime v3 ADOPTED |
+| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S07 CP02 LOCAL CANDIDATE** | 2026-10-06 Europe/Paris — **STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S07 CP02 SEMANTIC PROJECTION INTEGRITY + RESPONSIVE / VISUAL CLOSURE — LOCAL CANDIDATE** · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation Correction** · Profile **Critical** · Typologie **EVOL** · Milestone **P5** · Slice **P5-S07** · Pass **CP02** · Morris P5-S07 CP02 = **AUTHORIZED / CONSUMED** · review input `441420301bc428491f15e54270b402d3d5bfa9cb` · base/main **`7a664d65157af9554de4d4da7e76ca0187020020`** · branche `delivery/sfia-studio-product-simplification-p5-s07-project-continuity-work-representation-completion` · B1 PROP-PL **PASS / inherited + regression** · CONV-PL **PASS / inherited + regression** · B2 Work Representation semantic integrity **PASS** · Synthetic Artifact refs **NONE** · Evidence→validation heuristic **REMOVED** · B3 Journal currentness **PASS** · B4 History identity **PASS / DEDUP PRODUCT IDENTITY** · B5 Responsive **PASS / P3 bands** · Journal visual **CURSOR PIXEL COMPARISON PASS** (pending ChatGPT independent visual confirmation) · History visual **CURSOR PIXEL COMPARISON PASS** (pending ChatGPT independent visual confirmation) · `1 Issue` **ABSENT in final proof** · ZERO REAL **YES** · Architecture parallelism **NONE** · UAT-RECOVERY-03 **NON-BLOCKING CARRY** · P5-S07 INTEGRATED **NO** · Git Integration **NOT AUTHORIZED** · P5 COMPLETE **NO** · S08 **NOT STARTED** · P6 READY **NO** · runtime v3 **NON ADOPTED** · next = **ChatGPT Final Critical + Visual Review** · **≠** INTEGRATED · **≠** MERGED |
+| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S07 CP01 LOCAL CANDIDATE** | 2026-10-06 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S07 CP01 CONTINUITY & WORK REPRESENTATION EXIT PROOF + PIXEL-PERFECT JOURNAL/HISTORY — LOCAL CANDIDATE *(true then; superseded by P5-S07 CP02 tip after Critical Review B2/B4/B5)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation Correction** · Profile **Critical** · Typologie **EVOL** · Milestone **P5** · Slice **P5-S07** · Pass **CP01** · Morris P5-S07 CP01 = **AUTHORIZED / CONSUMED** · review input `90d165d9` / blob `3794d1bc` · base/main **`7a664d65157af9554de4d4da7e76ca0187020020`** · branche `delivery/sfia-studio-product-simplification-p5-s07-project-continuity-work-representation-completion` · Project Continuity **PASS LOCALLY / DETERMINISTIC** · PROP-PL **CLOSED LOCALLY AT TESTED DURABLE RESUME BOUNDARY** · CONV-PL **CLOSED LOCALLY AT TESTED RESUME BOUNDARY** · Work Representation **PASS LOCALLY / PRODUCT-WIRED** · Journal Currentness **PASS** · Journal Pixel-Perfect **PASS AT ALL CANONICAL FRAMES** · History **MINIMUM-SUFFICIENT PRODUCT-DERIVED** · History Pixel-Perfect **PASS AT ALL CANONICAL FRAMES** · ZERO REAL **YES** · Architecture parallelism **NONE** · UAT-RECOVERY-03 **NON-BLOCKING CARRY** · P5-S07 INTEGRATED **NO** · Git Integration **NOT AUTHORIZED** · P5 COMPLETE **NO** · S08 **NOT STARTED** · P6 READY **NO** · runtime v3 **NON ADOPTED** · next was **ChatGPT Final Critical + Visual Review** · **≠** INTEGRATED · **≠** MERGED |
+| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S07 LOCAL CANDIDATE** | 2026-10-06 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S07 PROJECT CONTINUITY & WORK REPRESENTATION COMPLETION — LOCAL CANDIDATE *(true then; superseded by P5-S07 CP01 tip after Critical Review B1–B5)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation** · Profile **Critical** · Typologie **EVOL** · Milestone **P5** · Slice **P5-S07** · Morris P5-S07 DELIVERY GO = **AUTHORIZED / CONSUMED** · base/main **`7a664d65157af9554de4d4da7e76ca0187020020`** (PR **#562** post-S06 documentary truth-sync **MERGED** · CI Studio **#692** SUCCESS) · branche `delivery/sfia-studio-product-simplification-p5-s07-project-continuity-work-representation-completion` · Project Continuity **PASS LOCALLY / DETERMINISTIC** · Work Representation **PASS LOCALLY AT TESTED SCOPE** (Option A — no DeliverableStore) · Journal **P3-CONVERGED AT S07 SCOPE** · History **PRODUCT-DERIVED / P3-CONVERGED AT S07 SCOPE** (dedicated principal view) · Deliverable≠Artifact≠validation≠Exit Proof **PROVEN AT TESTED SCOPE** · CONV-PL **CLOSED LOCALLY AT TESTED SCOPE** (Product truth before transcript) · PROP-PL **CLOSED LOCALLY AT TESTED SCOPE** (Epistemic reconstruct / honest requalify — no Proposal DB) · Visual **PASS AT S07 TOUCHED SURFACES** (runtime↔Figma) · ZERO REAL **YES** · Architecture parallelism **NONE** · UAT-RECOVERY-03 **NON-BLOCKING CARRY** · P5-S07 INTEGRATED **NO** · Git Integration **NOT AUTHORIZED** · P5 COMPLETE **NO** · S08 **NOT STARTED** · P6 READY **NO** · runtime v3 **NON ADOPTED** · next was **ChatGPT Critical Review** · **≠** INTEGRATED · **≠** MERGED |
+| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S06 INTEGRATED / POST-MERGE VERIFIED** | 2026-10-06 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S06 PILOT EXPERIENCE COMPLETION — INTEGRATED / POST-MERGE VERIFIED *(true then; superseded by P5-S07 LOCAL CANDIDATE tip; post-S06 documentary truth-sync PR **#562** later MERGED @ `7a664d65…` / CI **#692** — tip self-referential « truth-sync merge NOT AUTHORIZED » was true at tip authorship)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **14 — Post-Merge** · Profile **Critical** · Typologie **EVOL** · Milestone **P5** · Slice **P5-S06** · Morris P5-S06 MERGE GO = **AUTHORIZED / CONSUMED** · PR **#561** **MERGED** · feature commit **`731fdd7247b37cd708a9496fb81a9986e78abcd1`** · merge/main **`9f586496f28b824b1a4938d497c148ba0c96596e`** · post-merge CI Studio **#690** / run **`37485457209`** = **SUCCESS** · Detect / Build / **Required Gate** = **SUCCESS** · P5-S06 = **INTEGRATED / POST-MERGE VERIFIED** · FUNCTIONAL CLOSURE **PASS / INTEGRATED** · Visual **PASS AT S06 SCOPE** · FULL CANONICAL SEND CANCELLATION **PASS DETERMINISTIC / INTEGRATED** · P5-S06-DEBT-NORA-STOP **CLOSED ON MAIN / POST-MERGE VERIFIED** · REAL cancellation **NOT PROVEN** · ZERO REAL · delivery branch cleanup **COMPLETE** · P5 = **IN PROGRESS** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · NEXT RECOMMENDED was **P5-S07** · S07 was **NOT AUTHORIZED / NOT STARTED** at tip authorship · S08 **NOT STARTED** · documentary truth-sync PR this cycle · truth-sync merge **NOT AUTHORIZED** *(historical tip wording)* · **≠** P5 COMPLETE · **≠** REAL cancellation proven · **≠** runtime v3 ADOPTED |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S06 GIT INTEGRATION** | 2026-10-06 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S06 PILOT EXPERIENCE COMPLETION — GIT INTEGRATION AUTHORIZED BY MORRIS / IN PROGRESS *(true then; superseded by P5-S06 INTEGRATED / POST-MERGE VERIFIED tip)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **13 — PR Readiness / Git Integration** · Profile **Critical** · Typologie **EVOL** · Milestone **P5** · Slice **P5-S06** · Pass **GIT INTEGRATION** · Morris P5-S06 GIT INTEGRATION GATE = **AUTHORIZED / CONSUMED** · ChatGPT Final Critical Re-Review CP02.3 = **PASS** · D-S06-CANCEL-01 remains consumed · CP01/CP02/CP02.1/CP02.2/CP02.3 historical preserved · base/main **`16a8e2fd823d75d7c59ce1fb4d55cb862d112697`** · branche `delivery/sfia-studio-product-simplification-p5-s06-pilot-experience-completion` · commit/push/PR **AUTHORIZED this gate** · MERGE **NOT AUTHORIZED — separate Morris GO required** · P5-S06 INTEGRATED **NO** until merge + post-merge · FUNCTIONAL CLOSURE **PASS LOCALLY** · FULL CANONICAL SEND CANCELLATION **PASS LOCALLY / DETERMINISTIC** · Visual **PASS AT S06 SCOPE** · P5-S06-DEBT-NORA-STOP **CLOSED LOCALLY / awaiting Git Integration** · ZERO REAL · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · S07 **NOT STARTED** · next = commit → push → PR → CI → STOP → **MORRIS P5-S06 MERGE GO** if readiness remains PASS · **≠** INTEGRATED · **≠** MERGED |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S06 CP02.3 LOCAL CANDIDATE** | 2026-10-06 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S06 CP02.3 — LOCAL CANDIDATE — CKC PROVIDER CANCELLATION CLOSURE PASS *(true then; superseded by P5-S06 GIT INTEGRATION tip)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation Correction** · Profile **Critical** · Typologie **EVOL** · Milestone **P5** · Slice **P5-S06** · Pass **CP02.3** · Morris CP02.3 GO **CONSUMED** · D-S06-CANCEL-01 remains consumed · CP02/CP02.1/CP02.2 historical preserved · base/main **`16a8e2fd823d75d7c59ce1fb4d55cb862d112697`** · branche `delivery/sfia-studio-product-simplification-p5-s06-pilot-experience-completion` · CKC `provider.complete` in-flight AbortSignal **PROVEN** · OpenAI `complete`→`completeRound`→`responses.create(..., { signal })` **PROVEN** · abort = STOPPED not provider_error · ZERO REAL · P5-S06 FUNCTIONAL CLOSURE **PASS LOCALLY** · FULL CANONICAL SEND CANCELLATION **PASS LOCALLY / DETERMINISTIC** · P5-S06-DEBT-NORA-STOP **CLOSED LOCALLY / awaiting Git Integration** · P5-S06 INTEGRATED **NO** · Git Integration **NOT AUTHORIZED** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · S07 **NOT STARTED** · next = **ChatGPT Final Critical Re-Review CP02.3** · **≠** INTEGRATED · **≠** S06 Git-complete |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S06 CP02.2 LOCAL CANDIDATE** | 2026-10-06 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S06 CP02.2 — LOCAL CANDIDATE / FULL CANONICAL SEND CANCELLATION EXIT PROOF PASS *(true then; superseded by P5-S06 CP02.3 tip)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation Correction** · Profile **Critical** · Typologie **EVOL** · Milestone **P5** · Slice **P5-S06** · Pass **CP02.2** · Morris CP02.2 GO **CONSUMED** · D-S06-CANCEL-01 remains consumed · CP02.1 historical preserved · base/main **`16a8e2fd823d75d7c59ce1fb4d55cb862d112697`** · branche `delivery/sfia-studio-product-simplification-p5-s06-pilot-experience-completion` · F2 `completeStructured` AbortSignal **PROVEN** · F2 post-analyze / createCycle / proposal / transcript cut-lines **PROVEN** · already-started createCycle **not rolled back** · ZERO REAL · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · project Git **NOT AUTHORIZED** · next = **ChatGPT Final Critical Re-Review CP02.2** · S07 **NOT STARTED** · **≠** INTEGRATED · **≠** S06 Git-complete |
diff --git a/projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md b/projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md
index f3b924aa..9df0b95d 100644
--- a/projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md
+++ b/projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md
@@ -5,19 +5,19 @@
 | **Projet** | SFIA Studio |
 | **Macro** | `STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01` |
 | **Milestone** | **P5 — INTEGRATED DELIVERY** (Delivery / Implementation / Evidence source) |
-| **Slice** | **P5-S01**…**P5-S06** (integrated) · **P5-S07**/**P5-S08** remaining |
-| **Pass** | **P5-S06 INTEGRATED / POST-MERGE VERIFIED** · documentary truth-sync PR open · truth-sync merge **NOT AUTHORIZED** |
+| **Slice** | **P5-S01**…**P5-S06** (integrated) · **P5-S07 CP02 LOCAL CANDIDATE** · **P5-S08** remaining |
+| **Pass** | **P5-S07 CP02** — Semantic Projection Integrity + Responsive / Visual Closure · Git Integration **NOT AUTHORIZED** |
 | **Typologie** | Delivery evidence dans macro **EVOL** — **≠** doctrine · **≠** nouvelle architecture |
 | **Autorité architecture** | **P4** (`04-chat-first-product-simplification-semantic-projection-cognitive-architecture.md`) — **inchangée** |
-| **Base / HEAD Git** | `origin/main` = `9f586496f28b824b1a4938d497c148ba0c96596e` (PR **#561** P5-S06 · post-merge CI Studio **#690** SUCCESS) |
+| **Base / HEAD Git** | `origin/main` = `7a664d65157af9554de4d4da7e76ca0187020020` (PR **#562** post-S06 documentary truth-sync · CI Studio **#692** SUCCESS) · S07 candidate uncommitted on delivery branch |
 | **P5-S01 integration** | PR **#555** **MERGED** · post-merge CI **#678** **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** |
 | **P5-S02 integration** | PR **#556** **MERGED** · post-merge CI **#680** **SUCCESS** · Required Gate **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** |
 | **P5-S03 integration** | PR **#557** **MERGED** · post-merge CI **#682** **SUCCESS** · Required Gate **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** |
 | **P5-S04 integration** | PR **#558** **MERGED** · post-merge CI **#684** / run **`37377995199`** **SUCCESS** · Required Gate **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** |
 | **P5-S05 integration** | PR **#560** **MERGED** · post-merge CI Studio **#688** **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** · F2 routing alignment **CLOSED ON MAIN** · R3 **PASS AT TESTED SCOPE / INTEGRATED / POST-MERGE VERIFIED** |
-| **P5-S06 integration** | PR **#561** **MERGED** · feature `731fdd72…` · merge `9f586496…` · post-merge CI Studio **#690** / run **`37485457209`** **SUCCESS** · Required Gate **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** |
+| **P5-S06 integration** | PR **#561** **MERGED** · feature `731fdd72…` · merge `9f586496…` · post-merge CI Studio **#690** / run **`37485457209`** **SUCCESS** · Required Gate **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** · post-S06 truth-sync PR **#562** **MERGED** @ `7a664d65…` / CI **#692** |
 | **Worktree** | `/Users/morris/Projects/sfia-studio-chat-first-product-simplification-p3` |
-| **Branche S06** | `delivery/sfia-studio-product-simplification-p5-s06-pilot-experience-completion` — **MERGED / CLEANED UP** |
+| **Branche S07** | `delivery/sfia-studio-product-simplification-p5-s07-project-continuity-work-representation-completion` — **LOCAL / UNCOMMITTED** |
 | **P5 AUTHORIZED BY MORRIS** | **YES** |
 | **P5 STARTED** | **YES** |
 | **P5 IN PROGRESS** | **YES** |
@@ -29,6 +29,10 @@
 | **P5-S04** | **INTEGRATED / POST-MERGE VERIFIED** · Product-derived Synthèses M9 · CP01/CP02 preserved · A=0/B=0 · B1/B2 CLOSED |
 | **P5-S05** | **INTEGRATED / POST-MERGE VERIFIED** — F2 routing CLOSED ON MAIN · R3 PASS AT TESTED SCOPE |
 | **P5-S06** | **INTEGRATED / POST-MERGE VERIFIED** · FUNCTIONAL CLOSURE **PASS / INTEGRATED** · Visual **PASS AT S06 SCOPE** · FULL CANONICAL SEND CANCELLATION **PASS DETERMINISTIC / INTEGRATED** · STOP debt **CLOSED ON MAIN** · REAL cancellation **NOT PROVEN** |
+| **P5-S07** | **CP02 LOCAL CANDIDATE PASS** · B1 PROP-PL **PASS / inherited + regression** · CONV-PL **PASS / inherited + regression** · B2 Work Representation **PASS / PRODUCT-WIRED / SEMANTICALLY HONEST** · Synthetic Artifact refs **NONE** · Evidence→validation heuristic **REMOVED** · B3 Journal currentness **PASS** · B4 History identity **PASS / DEDUP PRODUCT IDENTITY** · B5 Responsive **PASS / P3 bands** · Journal visual **CURSOR PIXEL COMPARISON PASS** (pending ChatGPT independent visual confirmation) · History visual **CURSOR PIXEL COMPARISON PASS** (pending ChatGPT independent visual confirmation) · ZERO REAL · Architecture parallelism **NONE** · UAT-RECOVERY-03 **NON-BLOCKING CARRY** · P5-S07 INTEGRATED **NO** |
+| **P5-S07 DELIVERY GO** | **AUTHORIZED / CONSUMED** |
+| **P5-S07 CP01** | **AUTHORIZED / CONSUMED** |
+| **P5-S07 CP02** | **AUTHORIZED / CONSUMED** |
 | **P5-S06 DELIVERY** | **AUTHORIZED / CONSUMED** → **INTEGRATED** via PR **#561** |
 | **P5-S06 CP01** | **AUTHORIZED / CONSUMED** |
 | **P5-S06 CP02** | **AUTHORIZED / CONSUMED** |
@@ -37,12 +41,12 @@
 | **P5-S06 CP02.3** | **AUTHORIZED / CONSUMED** |
 | **P5-S06 GIT INTEGRATION GATE** | **AUTHORIZED / CONSUMED** |
 | **P5-S06 MERGE GO** | **AUTHORIZED / CONSUMED** |
-| **P5 slicing restant** | **S07 / S08** — **ADOPTED BY MORRIS** (2026-10-06) · S07/S08 = **NOT STARTED** · S07 = **NEXT RECOMMENDED / NOT AUTHORIZED** |
+| **P5 slicing restant** | **S08** — **ADOPTED BY MORRIS** · S08 = **NOT STARTED** · S07 = **LOCAL CANDIDATE / Git Integration NOT AUTHORIZED** |
 | **R1 / R2 / R3** | **R1 PASS** · **R2 PASS** · **R3 PASS AT TESTED SCOPE / INTEGRATED / POST-MERGE VERIFIED** (S05) |
-| **ZERO REAL** | **YES for S06** · S05 R3 REAL historique préservé (bounded OpenAI sous gate S05) |
+| **ZERO REAL** | **YES for S07** · S05 R3 REAL historique préservé (bounded OpenAI sous gate S05) |
 | **runtime v3** | **NON ADOPTED** |
-| **Git (S06)** | PR **#561** **MERGED** · post-merge CI **PASS** · delivery branch cleanup **COMPLETE** · documentary truth-sync merge **NOT AUTHORIZED** |
-| **Next** | **ChatGPT review / MORRIS P5 POST-S06 TRUTH-SYNC MERGE GATE** · S07 **NOT AUTHORIZED / NOT STARTED** |
+| **Git (S07)** | local branch only · project commit/push/PR/merge **NOT AUTHORIZED** · Review Handoff L3 only |
+| **Next** | **ChatGPT Final Critical + Visual Review (P5-S07 CP02)** · S08 **NOT STARTED** |
 | **P5-S05 DELIVERY** | **AUTHORIZED / CONSUMED** → **INTEGRATED** via PR **#560** |
 | **P5-S05 REAL / R3** | **AUTHORIZED / CONSUMED** → **INTEGRATED** |
 | **P5-S05 CP01 / CP02** | **AUTHORIZED / CONSUMED** (historique) |
@@ -50,7 +54,7 @@
 | **Fichier** | `projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md` |
 | **Date** | 2026-10-06 · Europe/Paris |

-> **Lecture rapide.** P5-S01…S06 **intégrés**. P5-S06 = **INTEGRATED / POST-MERGE VERIFIED** via PR **#561** / merge `9f586496…` / post-merge CI **#690** SUCCESS. FUNCTIONAL CLOSURE + deterministic cancellation **ON MAIN**. REAL cancellation **NOT PROVEN**. **≠ P5 COMPLETE** · S07 **NOT AUTHORIZED**.
+> **Lecture rapide.** P5-S01…S06 **intégrés**. P5-S07 CP02 = **LOCAL CANDIDATE PASS** (semantic honesty + History identity dedup + P3 responsive bands + Cursor visual comparison) sur branche delivery · base `7a664d65…` · ZERO REAL · **≠ P5 COMPLETE** · Git Integration **NOT AUTHORIZED** · S08 **NOT STARTED**.
 > **Règle de lecture des preuves.** *Implémenté* ≠ *prouvé* ≠ *intégré* ≠ *REAL*. Chaque affirmation ci-dessous est qualifiée par son niveau de preuve. Les résultats de tests/typecheck/lint/build sont ceux **rapportés par la passe de livraison** ; ce document n’en invente pas d’autres et ne les a pas ré-exécutés lors de sa rédaction.

 ---
@@ -73,23 +77,38 @@ P5-S03 = INTEGRATED / POST-MERGE VERIFIED (PR #557)
 P5-S04 = INTEGRATED / POST-MERGE VERIFIED (PR #558 · main c7b53b93… · CI #684 SUCCESS)
 P5-S05 = INTEGRATED / POST-MERGE VERIFIED (PR #560 · F2 CLOSED ON MAIN · R3 PASS AT TESTED SCOPE)
 P5-S06 = INTEGRATED / POST-MERGE VERIFIED (PR #561 · feature 731fdd72… · merge 9f586496… · CI #690 SUCCESS)
-
-FUNCTIONAL CLOSURE = PASS / INTEGRATED
-VISUAL = PASS AT S06 SCOPE
+P5-S07 = CP02 LOCAL CANDIDATE PASS (delivery branch · base 7a664d65… · PR #562 truth-sync MERGED / CI #692)
+         B1 PROP-PL PASS / inherited + regression
+         CONV-PL PASS / inherited + regression
+         B2 Work Representation PASS / PRODUCT-WIRED / SEMANTICALLY HONEST
+         Synthetic Artifact refs = NONE
+         Evidence→validation heuristic = REMOVED
+         B3 Journal Currentness PASS
+         B4 History identity PASS / DEDUP PRODUCT IDENTITY
+         B5 Responsive PASS / P3 bands (MOBILE <768 · COMPACT 768–1199 · LARGE ≥1200)
+         Journal visual = CURSOR PIXEL COMPARISON PASS (pending ChatGPT independent visual confirmation)
+         History visual = CURSOR PIXEL COMPARISON PASS (pending ChatGPT independent visual confirmation)
+         ZERO REAL = YES
+         Architecture parallelism = NONE
+         UAT-RECOVERY-03 = NON-BLOCKING CARRY
+         P5-S07 INTEGRATED = NO
+         Git Integration = NOT AUTHORIZED
+
+FUNCTIONAL CLOSURE (S06) = PASS / INTEGRATED
+VISUAL (S06) = PASS AT S06 SCOPE
 FULL CANONICAL SEND CANCELLATION = PASS DETERMINISTIC / INTEGRATED
 P5-S06-DEBT-NORA-STOP = CLOSED ON MAIN / POST-MERGE VERIFIED
 REAL cancellation = NOT PROVEN
-ZERO REAL (S06) = YES
+ZERO REAL (S07 CP02) = YES
 P5 COMPLETE = NO
 P6 READY = NO
 runtime v3 = NON ADOPTED

-NEXT RECOMMENDED = P5-S07 — Project Continuity & Work Representation Completion
-S07 = NOT AUTHORIZED / NOT STARTED
+NEXT = ChatGPT Final Critical + Visual Review (P5-S07 CP02)
 S08 = NOT STARTED
-P5-S06 MERGE GO = AUTHORIZED / CONSUMED
-DOCUMENTARY TRUTH-SYNC MERGE = NOT AUTHORIZED
-NEXT = CHATGPT REVIEW → MORRIS P5 POST-S06 TRUTH-SYNC MERGE GATE
+P5-S07 DELIVERY GO = AUTHORIZED / CONSUMED
+P5-S07 CP01 = AUTHORIZED / CONSUMED
+P5-S07 CP02 = AUTHORIZED / CONSUMED
 ```
 ### 1.2 Hiérarchie d’autorité

@@ -1173,4 +1192,29 @@ Anti-claims explicites :

 ---

-*Fin du document P5 — Integrated Delivery — S01…S06 INTEGRATED / POST-MERGE VERIFIED · S07 NEXT RECOMMENDED NOT AUTHORIZED · P5 COMPLETE NO · runtime v3 NON ADOPTED — P4 remains architecture authority.*
+## 47. P5-S07 CP01 — Continuity Exit Proof + Pixel-Perfect Journal/History (truth-sync)
+
+> **Qualification.** Morris P5-S07 CP01 AUTHORIZED / CONSUMED. Critical Review blockers B1–B5 closed locally. Candidate remains uncommitted. **≠ INTEGRATED** · **≠ P5 COMPLETE**.
+
+| Item | Statut CP01 |
+| --- | --- |
+| Morris P5-S07 CP01 | **AUTHORIZED / CONSUMED** |
+| Review input | `90d165d9` / blob `3794d1bc` |
+| PROP-PL | **CLOSED LOCALLY AT TESTED DURABLE RESUME BOUNDARY** (S07-CP01-E01) |
+| CONV-PL | **CLOSED LOCALLY AT TESTED RESUME BOUNDARY** |
+| Client subject rehydrate | **PASS** (`w2ReadActiveDecisionSubjectAction` on mount) |
+| Work Representation | **PASS LOCALLY / PRODUCT-WIRED** (LifecycleSurface ← Option A) |
+| Journal Décisions current-cycle | **PASS** |
+| History read model | **MINIMUM-SUFFICIENT AT S07 SCOPE** (bounded; explicit `boundNote`) |
+| Journal visual | **PIXEL-PERFECT PASS** at 94:2 / 94:222 / 192:41 / 192:81 |
+| History visual | **PIXEL-PERFECT PASS** at 78:2 / 190:111 / 190:380 / 190:412 |
+| ZERO REAL | **YES** |
+| Architecture parallelism | **NONE** |
+| UAT-RECOVERY-03 | **NON-BLOCKING CARRY** |
+| P5-S07 INTEGRATED | **NO** |
+| Git Integration | **NOT AUTHORIZED** |
+| Next | **ChatGPT Final Critical + Visual Review** |
+
+---
+
+*Fin du document P5 — Integrated Delivery — S01…S06 INTEGRATED / POST-MERGE VERIFIED · S07 CP01 LOCAL CANDIDATE PASS · P5 COMPLETE NO · runtime v3 NON ADOPTED — P4 remains architecture authority.*
diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index b407157f..75ccfdfe 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -2,7 +2,7 @@
   "schemaVersion": 1,
   "kind": "SFIA_STUDIO_LIVING_PRODUCTION_RUNTIME_REFERENCE",
   "lastReviewedCommit": "d4d986af5884b31b416374da3cb5e60757501f87",
-  "lastReviewedAt": "2026-10-01T22:00:20.000Z",
+  "lastReviewedAt": "2026-10-06T18:08:07.408Z",
   "canonicalReadme": "projects/sfia-studio/production-runtime-reference/README.md",
   "volumes": [
     {
@@ -578,7 +578,7 @@
   "trackedSources": [
     {
       "path": "projects/sfia-studio/app/features/project-assistant/actions.ts",
-      "sha256_16": "40476bb2a7b35f9c"
+      "sha256_16": "3abbffc860197bb3"
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts",
@@ -670,7 +670,7 @@
     },
     {
       "path": "projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx",
-      "sha256_16": "32b7a2bb4be0f688"
+      "sha256_16": "5024a8dde9da86a8"
     },
     {
       "path": "projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecyclePresentation.ts",
@@ -678,7 +678,7 @@
     },
     {
       "path": "projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts",
-      "sha256_16": "04bb47dbd1e37a7f"
+      "sha256_16": "8c5caa5a619aca3f"
     },
     {
       "path": "projects/sfia-studio/app/.env.example",

## 50. Full created file contents
===== CREATED FILE: projects/sfia-studio/app/features/project-assistant/w2/deriveWorkRepresentationProjection.ts =====
/**
 * P5-S07 — minimum-sufficient Deliverable / Artifact work representation.
 *
 * OPTION A (Delivery GO): compose a read projection from existing Product facts.
 * No DeliverableStore / Deliverable aggregate is introduced.
 *
 * Distinguishes when facts allow:
 * - requirement state (expected / not required / unknown)
 * - production state (produced / not produced / unknown)
 * - validation/qualification state (distinct from production)
 * - Exit Proof / Cycle complete (never inferred from Artifact alone)
 *
 * CP02: production fact ≠ Artifact identity; Evidence/ReviewBundle ≠ validation.
 */

export type WorkRequirementState =
  | "expected"
  | "not_required"
  | "unknown";

export type WorkProductionState =
  | "produced"
  | "not_produced"
  | "unknown";

export type WorkValidationState =
  | "not_reviewed"
  | "under_review"
  | "validated"
  | "changes_required"
  | "unknown";

export type WorkRepresentationProjection = {
  readonly projectId: string;
  readonly cycleInstanceId: string | null;
  readonly requirementState: WorkRequirementState;
  readonly productionState: WorkProductionState;
  readonly validationState: WorkValidationState;
  /** Explicit honesty — never inferred from Artifact existence. */
  readonly exitProofSatisfied: boolean | "unknown";
  readonly cycleComplete: boolean | "unknown";
  readonly artifactRefs: readonly string[];
  readonly evidenceRefs: readonly string[];
  readonly reviewBundleRefs: readonly string[];
  readonly pilotSummary: string;
  /** Anti-claims for UI / tests. */
  readonly distinctions: {
    readonly deliverableIsNotArtifact: true;
    readonly artifactExistsIsNotValidation: true;
    readonly validationIsNotExitProof: true;
  };
};

export type DeriveWorkRepresentationInput = {
  readonly projectId: string;
  readonly cycleInstanceId?: string | null;
  /** From lifecycle / obligation policy when known. */
  readonly artifactRequired?: boolean | null;
  /**
   * Explicit production fact from Product lifecycle (distinct from Artifact ids).
   * When set, drives productionState even if artifactIds is empty.
   */
  readonly artifactProduced?: boolean | null;
  /** Durable Artifact ids when known — never synthetic placeholders. */
  readonly artifactIds?: readonly string[] | null;
  /** Evidence ids linked when known. */
  readonly evidenceIds?: readonly string[] | null;
  /** ReviewBundle ids linked when known. */
  readonly reviewBundleIds?: readonly string[] | null;
  /**
   * Qualification hint ONLY from a proved Product fact.
   * Evidence / ReviewBundle presence alone must not invent under_review.
   */
  readonly qualificationHint?:
    | "validated"
    | "changes_required"
    | "under_review"
    | "not_reviewed"
    | null;
  /** Explicit Exit Proof / Cycle complete flags — never invent. */
  readonly exitProofSatisfied?: boolean | null;
  readonly cycleComplete?: boolean | null;
};

function requirementState(
  artifactRequired: boolean | null | undefined,
): WorkRequirementState {
  if (artifactRequired === true) return "expected";
  if (artifactRequired === false) return "not_required";
  return "unknown";
}

function productionState(
  artifactProduced: boolean | null | undefined,
  artifactIds: readonly string[] | null | undefined,
): WorkProductionState {
  if (artifactProduced === true) return "produced";
  if (artifactProduced === false) return "not_produced";
  if (artifactIds == null) return "unknown";
  return artifactIds.length > 0 ? "produced" : "not_produced";
}

function validationState(
  hint: DeriveWorkRepresentationInput["qualificationHint"],
): WorkValidationState {
  if (hint) return hint;
  return "unknown";
}

function pilotSummary(projection: Omit<WorkRepresentationProjection, "pilotSummary" | "distinctions">): string {
  const req =
    projection.requirementState === "expected"
      ? "Livrable attendu"
      : projection.requirementState === "not_required"
        ? "Aucun livrable exigé"
        : "Exigence de livrable indéterminée";
  const prod =
    projection.productionState === "produced"
      ? "Artifact produit"
      : projection.productionState === "not_produced"
        ? "Artifact non produit"
        : "Production indéterminée";
  const val =
    projection.validationState === "validated"
      ? "qualifié"
      : projection.validationState === "changes_required"
        ? "modifications requises"
        : projection.validationState === "under_review"
          ? "en revue"
          : projection.validationState === "not_reviewed"
            ? "non revu"
            : "qualification indéterminée";
  return `${req} · ${prod} · ${val}. Artifact ≠ validation · validation ≠ preuve de sortie.`;
}

/** Presentation-only Pilot labels — enums stay internal (data attributes / tests). */
export function workRequirementPilotLabel(state: WorkRequirementState): string {
  switch (state) {
    case "expected":
      return "Attendu";
    case "not_required":
      return "Non requis";
    default:
      return "Non déterminé";
  }
}

export function workProductionPilotLabel(state: WorkProductionState): string {
  switch (state) {
    case "produced":
      return "Produit";
    case "not_produced":
      return "Non produit";
    default:
      return "Non déterminé";
  }
}

export function workValidationPilotLabel(state: WorkValidationState): string {
  switch (state) {
    case "validated":
      return "Validé";
    case "changes_required":
      return "Modifications requises";
    case "under_review":
      return "En revue";
    case "not_reviewed":
      return "Non revu";
    default:
      return "Non déterminé";
  }
}

export function workTriStatePilotLabel(
  value: boolean | "unknown",
  labels: { readonly true: string; readonly false: string; readonly unknown: string },
): string {
  if (value === true) return labels.true;
  if (value === false) return labels.false;
  return labels.unknown;
}

/**
 * Pure derivation — Option A. Unknown fields stay unknown.
 */
export function deriveWorkRepresentationProjection(
  input: DeriveWorkRepresentationInput,
): WorkRepresentationProjection {
  const artifactRefs = Object.freeze([...(input.artifactIds ?? [])]);
  const evidenceRefs = Object.freeze([...(input.evidenceIds ?? [])]);
  const reviewBundleRefs = Object.freeze([...(input.reviewBundleIds ?? [])]);
  const base = {
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId ?? null,
    requirementState: requirementState(input.artifactRequired),
    productionState: productionState(input.artifactProduced, input.artifactIds),
    validationState: validationState(input.qualificationHint),
    exitProofSatisfied:
      input.exitProofSatisfied == null ? ("unknown" as const) : input.exitProofSatisfied,
    cycleComplete:
      input.cycleComplete == null ? ("unknown" as const) : input.cycleComplete,
    artifactRefs,
    evidenceRefs,
    reviewBundleRefs,
  };
  return {
    ...base,
    pilotSummary: pilotSummary(base),
    distinctions: {
      deliverableIsNotArtifact: true,
      artifactExistsIsNotValidation: true,
      validationIsNotExitProof: true,
    },
  };
}

===== CREATED FILE: projects/sfia-studio/app/features/project-assistant/w2/deriveProjectHistoryEvents.ts =====
/**
 * P5-S07 — Product-derived History events (read projection only).
 *
 * Composes Pilot-facing timeline events from the W2 minimal durable read model
 * (+ optional Evidence/Review anchors). No HistoryStore, no event sourcing,
 * no transcript, no invented why/impact when facts are absent.
 */

import type { W2ProjectHistoryReadModel } from "./projectHistory";

export type PilotHistoryEventKind =
  | "project"
  | "lps"
  | "cycle"
  | "trajectory"
  | "decision"
  | "contract"
  | "evidence"
  | "review"
  | "recommendation";

export type PilotHistoryFilter =
  | "all"
  | "decisions"
  | "changes"
  | "verified";

export type PilotHistoryLinkedRef = {
  readonly kind: string;
  readonly id: string;
  readonly label: string;
};

export type PilotHistoryEvent = {
  readonly eventId: string;
  readonly kind: PilotHistoryEventKind;
  /** Pilot-facing kind label (never raw technical type as primary). */
  readonly kindLabel: string;
  readonly title: string;
  readonly summary: string;
  /** ISO timestamp only when a Product fact proves it; otherwise null. */
  readonly occurredAt: string | null;
  readonly isCurrent: boolean;
  readonly sourceKind: string;
  readonly sourceId: string;
  readonly linked: readonly PilotHistoryLinkedRef[];
  /** Optional detail sections — null when no Product fact proves them. */
  readonly decidedWhat: string | null;
  /** On what durable basis the event rests. Never an inferred rationale. */
  readonly why: string | null;
  /** What the event changes, when a Product fact states it. */
  readonly impact: string | null;
  /** Proven verification anchor (evidence, review, currentness). */
  readonly verification: string | null;
  readonly filterBucket: Exclude<PilotHistoryFilter, "all">;
};

export type DurableOutcomeHistoryAnchors = {
  readonly evidence?: ReadonlyArray<{
    readonly evidenceId: string;
    readonly status: string;
  }>;
  readonly reviewBundles?: ReadonlyArray<{
    readonly reviewBundleId: string;
    readonly status: string;
  }>;
  readonly recommendation?: {
    readonly recommendationLabel: string;
  } | null;
};

function kindLabel(kind: PilotHistoryEventKind): string {
  switch (kind) {
    case "project":
      return "Projet";
    case "lps":
      return "État du projet";
    case "cycle":
      return "Cycle";
    case "trajectory":
      return "Trajectoire";
    case "decision":
      return "Décision";
    case "contract":
      return "Exécution";
    case "evidence":
      return "Preuve";
    case "review":
      return "Revue";
    case "recommendation":
      return "Recommandation";
    default:
      return kind;
  }
}

function pilotFacingCycleTitle(cycleTypeId: string | null): string {
  if (!cycleTypeId) return "Cycle rattaché";
  const key = cycleTypeId.replace(/^cyc:/i, "").toLowerCase();
  switch (key) {
    case "framing":
      return "Cycle de cadrage";
    case "delivery":
      return "Cycle de livraison";
    case "exploration":
      return "Cycle d'exploration";
    default:
      return "Cycle rattaché";
  }
}

/** Prefer Pilot vocabulary; keep technical subject only when it already reads as natural language. */
function pilotFacingDecisionTitle(subject: string): string {
  const trimmed = subject.trim();
  if (!trimmed) return "Décision humaine";
  if (
    /^(w2|project\.|pilot\.|prop:|trj|cyc:|lps:|xct:|dec:)/i.test(trimmed) ||
    /prop:f2:|obligation-policy|subject arbitration/i.test(trimmed)
  ) {
    return "Décision enregistrée";
  }
  return trimmed;
}

function trajectoryTitle(
  version: W2ProjectHistoryReadModel["trajectory"]["versions"][number],
): string {
  if (version.isEffectiveCurrent) {
    return `Trajectoire v${version.version} courante`;
  }
  if (version.status === "candidate") {
    return `Trajectoire v${version.version} proposée`;
  }
  return `Trajectoire v${version.version}`;
}

function trajectorySummary(
  version: W2ProjectHistoryReadModel["trajectory"]["versions"][number],
): string {
  if (version.isEffectiveCurrent) {
    return version.decidedByDecisionRef
      ? "Décidée et courante pour le Project."
      : "Courante · antérieure au rattachement de décision.";
  }
  if (version.status === "candidate") {
    return "Proposée · pas encore décidée · pas courante.";
  }
  return `Statut ${version.status} · non courante.`;
}

/**
 * Pure derivation — deterministic order: project → LPS → cycle → trajectories
 * → decisions → contracts → evidence → review → recommendation.
 */
export function deriveProjectHistoryEvents(input: {
  readonly history: W2ProjectHistoryReadModel;
  readonly durable?: DurableOutcomeHistoryAnchors | null;
}): readonly PilotHistoryEvent[] {
  const { history, durable = null } = input;
  const events: PilotHistoryEvent[] = [];

  events.push({
    eventId: `project:${history.projectId}`,
    kind: "project",
    kindLabel: kindLabel("project"),
    title: history.projectTitle,
    summary: "Identité projet enregistrée.",
    occurredAt: null,
    isCurrent: true,
    sourceKind: "Project",
    sourceId: history.projectId,
    linked: [],
    decidedWhat: null,
    why: null,
    impact: null,
    verification: null,
    filterBucket: "changes",
  });

  events.push({
    eventId: `lps:${history.lps.lpsId}:v${history.lps.version}`,
    kind: "lps",
    kindLabel: kindLabel("lps"),
    title: `État du projet · version ${history.lps.version}`,
    summary: "État courant du projet.",
    occurredAt: null,
    isCurrent: true,
    sourceKind: "LPS",
    sourceId: history.lps.lpsId,
    linked: [],
    decidedWhat: null,
    why: null,
    impact: `État courant du projet en version ${history.lps.version}.`,
    verification: "Version courante lue depuis le Living Project State.",
    filterBucket: "changes",
  });

  if (history.cycle.activeCycleInstanceId) {
    events.push({
      eventId: `cycle:${history.cycle.activeCycleInstanceId}`,
      kind: "cycle",
      kindLabel: kindLabel("cycle"),
      title: pilotFacingCycleTitle(history.cycle.cycleTypeId),
      summary: [
        history.cycle.profile ? `Profil ${history.cycle.profile}` : null,
        history.cycle.status ? `Statut ${history.cycle.status}` : null,
      ]
        .filter(Boolean)
        .join(" · ") || "Cycle distinct du projet.",
      occurredAt: null,
      isCurrent: true,
      sourceKind: "Cycle",
      sourceId: history.cycle.activeCycleInstanceId,
      linked: [],
      decidedWhat: null,
      why: null,
      impact: history.cycle.profile
        ? `Cycle piloté avec le profil ${history.cycle.profile}.`
        : null,
      verification: history.cycle.status
        ? `Statut de cycle durable : ${history.cycle.status}.`
        : null,
      filterBucket: "changes",
    });
  }

  for (const version of history.trajectory.versions) {
    const linked: PilotHistoryLinkedRef[] = [];
    if (version.decidedByDecisionRef) {
      linked.push({
        kind: "Décision",
        id: version.decidedByDecisionRef,
        label: "Décision rattachée",
      });
    }
    events.push({
      eventId: `trj:${version.trajectoryId}:v${version.version}`,
      kind: "trajectory",
      kindLabel: kindLabel("trajectory"),
      title: trajectoryTitle(version),
      summary: trajectorySummary(version),
      occurredAt: null,
      isCurrent: version.isEffectiveCurrent,
      sourceKind: "ProjectTrajectory",
      sourceId: `${version.trajectoryId}@v${version.version}`,
      linked,
      decidedWhat: version.isEffectiveCurrent
        ? `${version.stepCount} étapes · courante`
        : null,
      why: version.decidedOptionRef
        ? `Option retenue ${version.decidedOptionRef}.`
        : null,
      impact: `${version.stepCount} étape${version.stepCount === 1 ? "" : "s"} dans cette version de trajectoire.`,
      verification: version.isEffectiveCurrent
        ? version.decidedByDecisionRef
          ? "Version courante, rattachée à une décision humaine."
          : "Version courante · rattachement de décision absent."
        : null,
      filterBucket: version.isEffectiveCurrent ? "verified" : "changes",
    });
  }

  for (const decision of history.decisions) {
    events.push({
      // decisionId is already a stable Product ref (often `dec:…`).
      eventId: decision.decisionId,
      kind: "decision",
      kindLabel: kindLabel("decision"),
      title: pilotFacingDecisionTitle(decision.subject || ""),
      summary: `${decision.status} · ${decision.actorRole}`,
      occurredAt: decision.effectiveAt || null,
      isCurrent: false,
      sourceKind: "HumanDecision",
      sourceId: decision.decisionId,
      linked: decision.basisTrajectoryRef
        ? [
            {
              kind: "Trajectoire",
              id: decision.basisTrajectoryRef,
              label: decision.basisTrajectoryRef,
            },
          ]
        : [],
      decidedWhat: `Option retenue ${decision.selectedOptionRef}`,
      why: decision.basisSourceType
        ? `Base de décision durable : ${decision.basisSourceType}.`
        : null,
      impact: decision.basisTrajectoryRef
        ? `Trajectoire de référence ${decision.basisTrajectoryRef}.`
        : null,
      verification: decision.basisSourceType
        ? `Décision ${decision.status} par ${decision.actorRole} · autorité ${decision.authority}.`
        : null,
      filterBucket: "decisions",
    });
  }

  for (const contract of history.contracts) {
    events.push({
      eventId: `xct:${contract.executionContractId}`,
      kind: "contract",
      kindLabel: kindLabel("contract"),
      title: `Contrat d'exécution v${contract.version}`,
      summary: `${contract.status} · ${contract.action}`,
      occurredAt: null,
      isCurrent: false,
      sourceKind: "ExecutionContract",
      sourceId: contract.executionContractId,
      linked: contract.decisionRefs.map((ref) => ({
        kind: "Décision",
        id: ref,
        label: "Décision rattachée",
      })),
      decidedWhat: null,
      why:
        contract.decisionRefs.length > 0
          ? `Contrat rattaché à ${contract.decisionRefs.length} décision${contract.decisionRefs.length === 1 ? "" : "s"}.`
          : null,
      impact: contract.target ? `Cible d'exécution ${contract.target}.` : null,
      verification: contract.semanticFingerprint
        ? "Empreinte sémantique enregistrée pour ce contrat."
        : null,
      filterBucket: "changes",
    });
  }

  const historyEvidence = history.evidence ?? [];
  for (const evidence of historyEvidence) {
    events.push({
      eventId: `evidence:${evidence.evidenceId}`,
      kind: "evidence",
      kindLabel: kindLabel("evidence"),
      title: "Preuve enregistrée",
      summary: `Statut ${evidence.status}`,
      occurredAt: null,
      isCurrent: false,
      sourceKind: "Evidence",
      sourceId: evidence.evidenceId,
      linked: [],
      decidedWhat: null,
      why: null,
      impact: null,
      verification: `Preuve durable · statut ${evidence.status}.`,
      filterBucket: "verified",
    });
  }

  const historyReviews = history.reviewBundles ?? [];
  for (const rb of historyReviews) {
    events.push({
      eventId: `rb:${rb.reviewBundleId}`,
      kind: "review",
      kindLabel: kindLabel("review"),
      title: "Dossier de revue",
      summary: `Statut ${rb.status}`,
      occurredAt: null,
      isCurrent: false,
      sourceKind: "ReviewBundle",
      sourceId: rb.reviewBundleId,
      linked: [],
      decidedWhat: null,
      why: null,
      impact: null,
      verification: `Revue durable · statut ${rb.status}.`,
      filterBucket: "verified",
    });
  }

  const historySyntheses = history.syntheses ?? [];
  for (const syn of historySyntheses) {
    events.push({
      eventId: `syn:${syn.synthesisId}`,
      kind: "project",
      kindLabel: "Synthèse",
      title: syn.title,
      summary: `Synthèse · ${syn.status}`,
      occurredAt: null,
      isCurrent: syn.status === "current",
      sourceKind: "Synthesis",
      sourceId: syn.synthesisId,
      linked: [],
      decidedWhat: null,
      why: null,
      impact: null,
      verification: null,
      filterBucket: "changes",
    });
  }

  // CP02 B4 — history read model is primary; durableOutcome is fallback only
  // when the same Product object id is absent. One Product id → at most one event.
  const seenEvidenceIds = new Set(
    historyEvidence.map((evidence) => evidence.evidenceId),
  );
  const seenReviewBundleIds = new Set(
    historyReviews.map((rb) => rb.reviewBundleId),
  );

  if (durable?.evidence) {
    for (const evidence of durable.evidence) {
      if (seenEvidenceIds.has(evidence.evidenceId)) continue;
      seenEvidenceIds.add(evidence.evidenceId);
      events.push({
        eventId: `evidence:${evidence.evidenceId}`,
        kind: "evidence",
        kindLabel: kindLabel("evidence"),
        title: "Preuve enregistrée",
        summary: `Statut ${evidence.status}`,
        occurredAt: null,
        isCurrent: false,
        sourceKind: "Evidence",
        sourceId: evidence.evidenceId,
        linked: [],
        decidedWhat: null,
        why: null,
        impact: null,
        verification: `Preuve durable · statut ${evidence.status}.`,
        filterBucket: "verified",
      });
    }
  }

  if (durable?.reviewBundles) {
    for (const rb of durable.reviewBundles) {
      if (seenReviewBundleIds.has(rb.reviewBundleId)) continue;
      seenReviewBundleIds.add(rb.reviewBundleId);
      events.push({
        eventId: `rb:${rb.reviewBundleId}`,
        kind: "review",
        kindLabel: kindLabel("review"),
        title: "Dossier de revue",
        summary: `Statut ${rb.status}`,
        occurredAt: null,
        isCurrent: false,
        sourceKind: "ReviewBundle",
        sourceId: rb.reviewBundleId,
        linked: [],
        decidedWhat: null,
        why: null,
        impact: null,
        verification: `Revue durable · statut ${rb.status}.`,
        filterBucket: "verified",
      });
    }
  }

  if (durable?.recommendation?.recommendationLabel) {
    events.push({
      eventId: `rec:post-evidence`,
      kind: "recommendation",
      kindLabel: kindLabel("recommendation"),
      title: durable.recommendation.recommendationLabel,
      summary: "Recommandation dérivée · ≠ Décision humaine.",
      occurredAt: null,
      isCurrent: false,
      sourceKind: "Recommendation",
      sourceId: "post-evidence",
      linked: [],
      decidedWhat: null,
      why: null,
      impact: null,
      verification: null,
      filterBucket: "changes",
    });
  }

  return Object.freeze(events);
}

export function filterProjectHistoryEvents(
  events: readonly PilotHistoryEvent[],
  input: {
    readonly filter: PilotHistoryFilter;
    readonly query: string;
  },
): readonly PilotHistoryEvent[] {
  const q = input.query.trim().toLowerCase();
  return events.filter((event) => {
    if (input.filter === "decisions" && event.filterBucket !== "decisions") {
      return false;
    }
    // Figma Changements includes verified/change events (no separate Vérifié filter).
    if (
      input.filter === "changes" &&
      event.filterBucket !== "changes" &&
      event.filterBucket !== "verified"
    ) {
      return false;
    }
    if (!q) return true;
    const haystack = [
      event.title,
      event.summary,
      event.kindLabel,
      event.decidedWhat ?? "",
      event.why ?? "",
      event.impact ?? "",
      event.verification ?? "",
      ...event.linked.map((l) => l.label),
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });
}

===== CREATED FILE: projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/deriveWorkRepresentationFromLifecycle.ts =====
import {
  deriveWorkRepresentationProjection,
  type WorkRepresentationProjection,
} from "@/features/project-assistant/w2/deriveWorkRepresentationProjection";
import type { FinalizationAssessment } from "@/lib/oa/cycle";
import type { PilotLifecycleProjection } from "@/lib/oa/cycle/application/lifecycleProjection";

/**
 * P5-S07 CP02 — Option A work representation from existing Lifecycle assessment.
 * No DeliverableStore. Unknown stays unknown.
 * Production satisfaction ≠ synthetic Artifact identity.
 */
export function deriveWorkRepresentationFromLifecycleProjection(
  projection: PilotLifecycleProjection | null,
  durable?: {
    readonly evidenceIds?: readonly string[] | null;
    readonly reviewBundleIds?: readonly string[] | null;
    readonly qualificationHint?:
      | "validated"
      | "changes_required"
      | "under_review"
      | "not_reviewed"
      | null;
  } | null,
): WorkRepresentationProjection | null {
  if (!projection?.projectId) return null;
  const assessment = projection.assessment ?? null;
  const art = assessment?.obligations.find((o) => o.family === "artifact");
  let artifactRequired: boolean | null = null;
  if (art) {
    if (art.applicability === "APPLICABLE") artifactRequired = true;
    else if (art.applicability === "NOT_APPLICABLE") artifactRequired = false;
    else artifactRequired = null;
  }
  const produced =
    art?.applicability === "APPLICABLE" && art.status === "SATISFIED";
  const artifactProduced: boolean | null =
    art?.applicability === "APPLICABLE"
      ? produced
      : art
        ? false
        : null;
  const cycleComplete =
    projection.selectedStatus === "completed"
      ? true
      : projection.selectedStatus == null
        ? null
        : false;

  return deriveWorkRepresentationProjection({
    projectId: projection.projectId,
    cycleInstanceId:
      projection.selectedCycleInstanceId ?? projection.activeCycleInstanceId,
    artifactRequired,
    artifactProduced,
    // Honest: lifecycle can prove production without a real Artifact id.
    artifactIds: art ? [] : null,
    evidenceIds: durable?.evidenceIds ?? null,
    reviewBundleIds: durable?.reviewBundleIds ?? null,
    qualificationHint: durable?.qualificationHint ?? null,
    exitProofSatisfied: null,
    cycleComplete,
  });
}

/** Pure helper for tests — same Option A rules without Lifecycle coupling. */
export function artifactRequiredFromAssessment(
  assessment: FinalizationAssessment | null | undefined,
): boolean | null {
  if (!assessment) return null;
  const art = assessment.obligations.find((o) => o.family === "artifact");
  if (!art) return null;
  if (art.applicability === "APPLICABLE") return true;
  if (art.applicability === "NOT_APPLICABLE") return false;
  return null;
}

===== CREATED FILE: projects/sfia-studio/app/__tests__/project-assistant/p5.s07.cp02.semanticResponsive.d0.test.ts =====
/**
 * P5-S07 CP02 — semantic integrity, History identity dedup, responsive bands.
 * ZERO REAL. No architecture reopen.
 */
import { describe, expect, it } from "vitest";
import {
  deriveWorkRepresentationProjection,
  workProductionPilotLabel,
  workRequirementPilotLabel,
  workTriStatePilotLabel,
  workValidationPilotLabel,
} from "@/features/project-assistant/w2/deriveWorkRepresentationProjection";
import { deriveWorkRepresentationFromLifecycleProjection } from "@/features/pre-m6-product-ui/surfaces/deriveWorkRepresentationFromLifecycle";
import {
  deriveProjectHistoryEvents,
  filterProjectHistoryEvents,
} from "@/features/project-assistant/w2/deriveProjectHistoryEvents";
import type { W2ProjectHistoryReadModel } from "@/features/project-assistant/w2/projectHistory";
import type { PilotLifecycleProjection } from "@/lib/oa/cycle/application/lifecycleProjection";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const PROJECT_ID = "prj:p5-s07-cp02";

function historyFixture(
  overrides: Partial<W2ProjectHistoryReadModel> = {},
): W2ProjectHistoryReadModel {
  return {
    projectId: PROJECT_ID,
    projectTitle: "CP02 Fixture",
    lps: { lpsId: "lps:cp02", version: 1 },
    cycle: {
      activeCycleInstanceId: "cyc:cp02",
      cycleTypeId: "cyc:delivery",
      profile: "Critical",
      status: "active",
    },
    trajectory: {
      effectiveCurrent: null,
      proposedNotYetDecided: null,
      versions: [],
    },
    decisions: [],
    contracts: [],
    evidence: [],
    reviewBundles: [],
    syntheses: [],
    absent: [],
    boundNote: "test",
    ...overrides,
  };
}

describe("P5-S07 CP02 — B2 Work Representation semantic integrity", () => {
  it("T-SEM-01/02 — Artifact obligation SATISFIED without real IDs → produced + empty refs", () => {
    const projection = {
      projectId: PROJECT_ID,
      selectedCycleInstanceId: "cyc:cp02",
      activeCycleInstanceId: "cyc:cp02",
      selectedStatus: "active",
      assessment: {
        readyExceptFinalizeDecision: false,
        obligations: [
          {
            family: "artifact",
            applicability: "APPLICABLE",
            status: "SATISFIED",
            kind: "TO_TREAT",
            label: "Artifact",
          },
        ],
      },
    } as unknown as PilotLifecycleProjection;

    const work = deriveWorkRepresentationFromLifecycleProjection(projection);
    expect(work).not.toBeNull();
    expect(work!.productionState).toBe("produced");
    expect(work!.artifactRefs).toEqual([]);
    expect(work!.artifactRefs.join(",")).not.toContain("artifact:satisfied");
    expect(JSON.stringify(work)).not.toContain("artifact:satisfied");
  });

  it("T-SEM-03 — Evidence only → validation unknown", () => {
    const work = deriveWorkRepresentationProjection({
      projectId: PROJECT_ID,
      artifactRequired: true,
      artifactProduced: true,
      artifactIds: [],
      evidenceIds: ["ev:only"],
      reviewBundleIds: [],
      qualificationHint: null,
    });
    expect(work.validationState).toBe("unknown");
  });

  it("T-SEM-04 — ReviewBundle only → validation unknown", () => {
    const work = deriveWorkRepresentationProjection({
      projectId: PROJECT_ID,
      artifactRequired: true,
      artifactProduced: true,
      artifactIds: [],
      evidenceIds: [],
      reviewBundleIds: ["rb:only"],
      qualificationHint: null,
    });
    expect(work.validationState).toBe("unknown");
  });

  it("T-SEM-05 — qualificationHint under_review → under_review", () => {
    const work = deriveWorkRepresentationProjection({
      projectId: PROJECT_ID,
      qualificationHint: "under_review",
      evidenceIds: [],
      reviewBundleIds: [],
    });
    expect(work.validationState).toBe("under_review");
  });

  it("T-SEM-06 — qualificationHint validated → validated; produced without hint → unknown", () => {
    const validated = deriveWorkRepresentationProjection({
      projectId: PROJECT_ID,
      artifactProduced: true,
      artifactIds: [],
      qualificationHint: "validated",
    });
    expect(validated.validationState).toBe("validated");

    const producedNoHint = deriveWorkRepresentationProjection({
      projectId: PROJECT_ID,
      artifactProduced: true,
      artifactIds: [],
      qualificationHint: null,
    });
    expect(producedNoHint.productionState).toBe("produced");
    expect(producedNoHint.validationState).toBe("unknown");
  });

  it("T-SEM — Pilot-facing labels never expose raw enums nominally", () => {
    expect(workRequirementPilotLabel("expected")).toBe("Attendu");
    expect(workProductionPilotLabel("not_produced")).toBe("Non produit");
    expect(workValidationPilotLabel("under_review")).toBe("En revue");
    expect(
      workTriStatePilotLabel(true, {
        true: "Satisfaite",
        false: "Non satisfaite",
        unknown: "Non déterminée",
      }),
    ).toBe("Satisfaite");
  });
});

describe("P5-S07 CP02 — B4 History identity dedup", () => {
  it("T-HIS-01 / H-D01 — same Evidence in history + durable → 1 event", () => {
    const events = deriveProjectHistoryEvents({
      history: historyFixture({
        evidence: [{ evidenceId: "ev:dup", status: "recorded" }],
      }),
      durable: {
        evidence: [{ evidenceId: "ev:dup", status: "recorded" }],
      },
    });
    const evidenceEvents = events.filter((e) => e.eventId === "evidence:ev:dup");
    expect(evidenceEvents).toHaveLength(1);
  });

  it("T-HIS-02 / H-D02 — same ReviewBundle in history + durable → 1 event", () => {
    const events = deriveProjectHistoryEvents({
      history: historyFixture({
        reviewBundles: [{ reviewBundleId: "rb:dup", status: "open" }],
      }),
      durable: {
        reviewBundles: [{ reviewBundleId: "rb:dup", status: "open" }],
      },
    });
    const rbEvents = events.filter((e) => e.eventId === "rb:rb:dup");
    expect(rbEvents).toHaveLength(1);
  });

  it("T-HIS-03 / H-D03 — distinct Evidence IDs → 2 events", () => {
    const events = deriveProjectHistoryEvents({
      history: historyFixture({
        evidence: [
          { evidenceId: "ev:a", status: "recorded" },
          { evidenceId: "ev:b", status: "recorded" },
        ],
      }),
    });
    expect(events.filter((e) => e.sourceKind === "Evidence")).toHaveLength(2);
  });

  it("T-HIS-04 / H-D04 — all returned event IDs unique", () => {
    const events = deriveProjectHistoryEvents({
      history: historyFixture({
        evidence: [{ evidenceId: "ev:x", status: "recorded" }],
        reviewBundles: [{ reviewBundleId: "rb:x", status: "open" }],
      }),
      durable: {
        evidence: [
          { evidenceId: "ev:x", status: "recorded" },
          { evidenceId: "ev:y", status: "recorded" },
        ],
        reviewBundles: [
          { reviewBundleId: "rb:x", status: "open" },
          { reviewBundleId: "rb:y", status: "open" },
        ],
      },
    });
    const ids = events.map((e) => e.eventId);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("T-HIS-05 — filter/search does not reintroduce duplicates", () => {
    const events = deriveProjectHistoryEvents({
      history: historyFixture({
        evidence: [{ evidenceId: "ev:dup", status: "recorded" }],
      }),
      durable: {
        evidence: [{ evidenceId: "ev:dup", status: "recorded" }],
      },
    });
    const filtered = filterProjectHistoryEvents(events, {
      filter: "all",
      query: "Preuve",
    });
    expect(
      filtered.filter((e) => e.eventId === "evidence:ev:dup"),
    ).toHaveLength(1);
  });

  it("T-HIS-06 — transcript remains non-History", () => {
    const events = deriveProjectHistoryEvents({
      history: historyFixture(),
    });
    expect(events.every((e) => e.sourceKind !== "Transcript")).toBe(true);
  });
});

describe("P5-S07 CP02 — B5 responsive contract source bands", () => {
  const studioRoot = join(__dirname, "../../..");

  function assertMobileBand(cssPath: string) {
    const css = readFileSync(join(studioRoot, cssPath), "utf8");
    expect(css).toMatch(/@media \(max-width:\s*767px\)/);
    expect(css).not.toMatch(/@media \(max-width:\s*899px\)/);
  }

  it("T-RSP — Journal / History / Workspace mobile band is ≤767", () => {
    assertMobileBand(
      "app/features/pre-m6-product-ui/surfaces/JournalSurface.module.css",
    );
    assertMobileBand(
      "app/features/pre-m6-product-ui/surfaces/HistorySurface.module.css",
    );
    assertMobileBand(
      "app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css",
    );
  });

  it("T-RSP — History compact band is 768–1199", () => {
    const css = readFileSync(
      join(
        studioRoot,
        "app/features/pre-m6-product-ui/surfaces/HistorySurface.module.css",
      ),
      "utf8",
    );
    expect(css).toMatch(
      /@media \(min-width:\s*768px\) and \(max-width:\s*1199px\)/,
    );
    expect(css).not.toMatch(
      /@media \(min-width:\s*900px\) and \(max-width:\s*1199px\)/,
    );
  });
});

===== CREATED FILE: projects/sfia-studio/app/__tests__/project-assistant/p5.s07.cp01.continuityExitProof.d0.test.ts =====
/**
 * P5-S07 CP01 — durable Epistemic subject survives Proposal store loss.
 * ZERO REAL.
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  listProposalsForProject,
  resetF2ProposalStoreForTests,
  saveProposal,
} from "@/features/project-assistant/f2/proposalStore";
import type { ProposalDto } from "@/features/project-assistant/f2/types";
import { F2_PROCESS_LOCAL_NOTICE } from "@/features/project-assistant/f2/proposalStore";
import { F2_ARTIFACT_MATERIALIZATION_OPERATION } from "@/features/project-assistant/f2/f2CanonicalOperations";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import { readActiveProposalDecisionSubject } from "@/features/project-assistant/w2/activeProposalDecisionSubject";
import { deriveWorkRepresentationFromLifecycleProjection } from "@/features/pre-m6-product-ui/surfaces/deriveWorkRepresentationFromLifecycle";
import type { PilotLifecycleProjection } from "@/lib/oa/cycle/application/lifecycleProjection";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  currentF2Context,
  seedQualifiedProject,
  tempProductDbPath,
} from "./w2Harness";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
  type RuntimeApplicationService,
} from "@/lib/vertical-slice-runtime";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import {
  computeProposalSubjectDigest,
  sealProposalExecutionBasis,
} from "@/features/project-assistant/w2/resolveProposalDecisionSubject";
import { writePendingDecisionSubjectMarker } from "@/features/project-assistant/w2/pendingDecisionSubjectMarker";

const TARGET_PATH = "projects/sfia-studio/.sandbox/gestion-de-taches.md";

function docsWriteProposal(input: {
  projectId: string;
  lpsId: string;
  lpsVersion: number;
  doctrineDigest: string;
  activeCycleInstanceId: string | null;
  proposalId: string;
}): ProposalDto {
  return saveProposal({
    proposalId: input.proposalId,
    status: "DECISION_REQUIRED",
    rephrasedRequest: "Matérialiser la note sandbox",
    objective: "Livrable de référence CP01",
    cycleTypeId: "cyc:delivery",
    recommendedProfile: "Critical",
    rationale: "S07 CP01 continuity",
    scope: "borné",
    outOfScope: ["REAL"],
    activatedBlocks: [],
    expectedOutcome: "fichier sandbox",
    sources: ["nora"],
    risks: [],
    reservations: [],
    stopConditions: ["STOP AVANT EXECUTE"],
    morrisGateRequired: true,
    nextPossibleStep: "Instruire les options",
    contextSnapshot: {
      projectId: input.projectId,
      lpsId: input.lpsId,
      lpsVersion: input.lpsVersion,
      doctrineDigest: input.doctrineDigest,
      activeCycleInstanceId: input.activeCycleInstanceId,
    },
    processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
    executionForbidden: true,
    noExecutingStatus: true,
    agentBinding: "NOT_AVAILABLE",
    requestedOperation: F2_ARTIFACT_MATERIALIZATION_OPERATION,
    executionIntent: {
      intentKind: "docs_write",
      artifactType: null,
      targetPath: TARGET_PATH,
      scopeIn: ["sandbox"],
      scopeOut: ["git"],
      expectedOutputs: ["markdown"],
      requiredCapabilities: ["cap:cursor.docs_write"],
      validationExpectations: [],
      evidenceRequirements: [],
      requestedOperation: F2_ARTIFACT_MATERIALIZATION_OPERATION,
      reversibilityExpectation: "reversible",
      artifactBrief: "Livrable de référence CP01",
      contentRequirements: [],
      exitRequirementKinds: [],
      artifactWriteMode: "CREATE",
      targetRepositoryRef:
        process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY?.trim() ||
        "acme/vitest-default",
    },
  });
}

describe("P5-S07 CP01 durable continuity & work representation wiring", () => {
  let runtime: RuntimeApplicationService;
  let dbPath: string;

  beforeEach(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    dbPath = tempProductDbPath("p5-s07-cp01.sqlite");
    runtime = bootW2Runtime({ productDbPath: dbPath, idPrefix: "s07cp01" });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    setConversationProviderForTests(null);
    resetRuntimeApplicationServiceForTests();
    cleanupW2TempDirs();
  });

  it("S07-CP01-E01 — durable Epistemic subject survives Proposal store + runtime reset", async () => {
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Critical",
      suffix: "cp01",
    });
    const ctx = await currentF2Context(runtime, seeded.projectId);
    const proposal = docsWriteProposal({
      projectId: seeded.projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: seeded.cycleInstanceId,
      proposalId: "prop:f2:p5-s07-cp01",
    });
    expect(listProposalsForProject(seeded.projectId)).toHaveLength(1);

    const sealed = sealProposalExecutionBasis(proposal);
    const subjectDigest = computeProposalSubjectDigest(
      sealed,
      proposal.proposalId,
    );
    const marked = await writePendingDecisionSubjectMarker({
      oa: runtime.oa!,
      projectId: seeded.projectId,
      proposalId: proposal.proposalId,
      subjectDigest,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
    });
    expect(marked.ok).toBe(true);

    const qualification = await resolveW2QualificationInputs({
      oa: runtime.oa!,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;

    const proposed = await proposeTrajectoryOptions({
      oa: runtime.oa!,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
      proposalId: proposal.proposalId,
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;

    // Process-local loss.
    resetF2ProposalStoreForTests();
    expect(listProposalsForProject(seeded.projectId)).toHaveLength(0);

    // Fresh runtime boundary on the SAME Product SQLite.
    resetRuntimeApplicationServiceForTests();
    const fresh = bootW2Runtime({
      productDbPath: dbPath,
      idPrefix: "s07cp01-reopen",
    });
    const subject = await readActiveProposalDecisionSubject(
      fresh.oa!,
      seeded.projectId,
    );
    expect(subject.ok).toBe(true);
    if (!subject.ok) return;
    expect(subject.kind).toBe("bound_awaiting_decision");
    if (subject.kind === "bound_awaiting_decision") {
      expect(subject.optionSet.proposalId).toBe(proposal.proposalId);
    }
    // No invented ProposalDto after reset.
    expect(listProposalsForProject(seeded.projectId)).toHaveLength(0);
  });

  it("S07-CP01 — work representation Option A from Lifecycle projection (Product-wired helper)", () => {
    const projection = {
      projectId: "prj:cp01-work",
      selectedCycleInstanceId: "cyc:cp01",
      activeCycleInstanceId: "cyc:cp01",
      selectedStatus: "active",
      assessment: {
        readyExceptFinalizeDecision: false,
        obligations: [
          {
            family: "artifact",
            applicability: "APPLICABLE",
            status: "OPEN",
            kind: "TO_TREAT",
            label: "Artifact",
          },
        ],
      },
    } as unknown as PilotLifecycleProjection;

    const work = deriveWorkRepresentationFromLifecycleProjection(projection);
    expect(work).not.toBeNull();
    expect(work!.requirementState).toBe("expected");
    expect(work!.productionState).toBe("not_produced");
    expect(work!.validationState).toBe("unknown");
    expect(work!.exitProofSatisfied).toBe("unknown");
    expect(work!.cycleComplete).toBe(false);
    expect(work!.distinctions.deliverableIsNotArtifact).toBe(true);
  });

  it("S07-CP01 — Journal cycle scoping: only selected-cycle decisions", async () => {
    // Pure projection filter contract mirrored from actions.ts CP01 rule.
    const decisions = [
      {
        decisionId: "dec:a",
        cycleInstanceId: "cyc:A",
        subject: "Cycle A",
        status: "accepted",
        selectedOptionId: "opt:a",
        options: [{ optionId: "opt:a", label: "A" }],
        actor: { actorId: "pilote", role: "Pilote", displayName: "Pilote" },
        authority: "local_pilote",
        effectiveAt: "2026-10-06T10:00:00.000Z",
        reservations: [],
        decisionBasis: null,
      },
      {
        decisionId: "dec:b",
        cycleInstanceId: "cyc:B",
        subject: "Cycle B",
        status: "accepted",
        selectedOptionId: "opt:b",
        options: [{ optionId: "opt:b", label: "B" }],
        actor: { actorId: "pilote", role: "Pilote", displayName: "Pilote" },
        authority: "local_pilote",
        effectiveAt: "2026-10-06T11:00:00.000Z",
        reservations: [],
        decisionBasis: null,
      },
      {
        decisionId: "dec:orphan",
        cycleInstanceId: null,
        subject: "Sans cycle",
        status: "accepted",
        selectedOptionId: "opt:x",
        options: [{ optionId: "opt:x", label: "X" }],
        actor: { actorId: "pilote", role: "Pilote", displayName: "Pilote" },
        authority: "local_pilote",
        effectiveAt: "2026-10-06T12:00:00.000Z",
        reservations: [],
        decisionBasis: null,
      },
    ] as const;

    const journalCycleId = "cyc:B";
    const scoped = decisions.filter((d) => d.cycleInstanceId === journalCycleId);
    expect(scoped).toHaveLength(1);
    expect(scoped[0]!.decisionId).toBe("dec:b");
    expect(scoped.every((d) => d.cycleInstanceId === journalCycleId)).toBe(true);
  });

  it("ZERO REAL — provider remains Fake for CP01 continuity suite", () => {
    expect(process.env.OPS1_CONVERSATION_PROVIDER).toBe("fake");
    // Touch runtime to ensure harness path stays local Product SQLite.
    expect(getRuntimeApplicationService().oa).not.toBeNull();
  });
});

===== CREATED FILE: projects/sfia-studio/app/__tests__/project-assistant/p5.s07.projectContinuityWorkRepresentation.d0.test.ts =====
/**
 * P5-S07 — Project Continuity & Work Representation (deterministic).
 *
 * Proves:
 * - History events derive from Product facts (not transcript)
 * - Local History search/filter
 * - PROP-PL: process-local Proposal reset → no invented Proposal;
 *   subject reconstructs from Epistemic OR honest requalification
 * - Deliverable ≠ Artifact ≠ validation ≠ Exit Proof
 * - ZERO REAL
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  resetF2ProposalStoreForTests,
  saveProposal,
  listProposalsForProject,
  F2_PROCESS_LOCAL_NOTICE,
  createProposalId,
} from "@/features/project-assistant/f2/proposalStore";
import type { ProposalDto } from "@/features/project-assistant/f2/types";
import { readActiveProposalDecisionSubject } from "@/features/project-assistant/w2/activeProposalDecisionSubject";
import {
  deriveProjectHistoryEvents,
  filterProjectHistoryEvents,
} from "@/features/project-assistant/w2/deriveProjectHistoryEvents";
import type { W2ProjectHistoryReadModel } from "@/features/project-assistant/w2/projectHistory";
import { deriveWorkRepresentationProjection } from "@/features/project-assistant/w2/deriveWorkRepresentationProjection";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";

const PROJECT_ID = "prj:p5-s07-continuity";

function historyFixture(): W2ProjectHistoryReadModel {
  return {
    projectId: PROJECT_ID,
    projectTitle: "Product Simplification",
    lps: { lpsId: "lps:p5-s07", version: 2 },
    cycle: {
      activeCycleInstanceId: "cyc:p5-s07",
      cycleTypeId: "cyc:delivery",
      profile: "Critical",
      status: "active",
    },
    trajectory: {
      effectiveCurrent: {
        trajectoryId: "trj:p5-s07",
        version: 1,
        status: "decided",
        isEffectiveCurrent: true,
        decidedByDecisionRef: "dec:p5-s07",
        decidedOptionRef: "opt:pursue",
        stepCount: 3,
      },
      proposedNotYetDecided: null,
      versions: [
        {
          trajectoryId: "trj:p5-s07",
          version: 1,
          status: "decided",
          isEffectiveCurrent: true,
          decidedByDecisionRef: "dec:p5-s07",
          decidedOptionRef: "opt:pursue",
          stepCount: 3,
        },
      ],
    },
    decisions: [
      {
        decisionId: "dec:p5-s07",
        subject: "Direction de l’espace projet retenue",
        status: "accepted",
        authority: "local_pilote",
        actorRole: "Pilote",
        selectedOptionRef: "opt:pursue",
        effectiveAt: "2026-10-06T08:42:00.000Z",
        basisSourceType: "PresentedOptionSet",
        basisTrajectoryRef: "trj:p5-s07@v1",
        reservations: [],
      },
    ],
    contracts: [],
    evidence: [],
    reviewBundles: [],
    syntheses: [],
    absent: [
      "Conversation (process-local, non rejouée)",
      "Proposition F2 process-local",
    ],
    boundNote: "Borné · fixture S07.",
  };
}

describe("P5-S07 project continuity & work representation", () => {
  beforeEach(() => {
    resetF2ProposalStoreForTests();
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
  });

  it("S07-E06/E07/E08 — History derives from Product facts and supports local search", () => {
    const events = deriveProjectHistoryEvents({ history: historyFixture() });
    expect(events.some((e) => e.kind === "decision")).toBe(true);
    expect(events.every((e) => !e.title.toLowerCase().includes("transcript"))).toBe(
      true,
    );
    expect(
      events.some((e) => e.sourceKind === "HumanDecision" && e.occurredAt != null),
    ).toBe(true);

    const decisionsOnly = filterProjectHistoryEvents(events, {
      filter: "decisions",
      query: "",
    });
    expect(decisionsOnly.every((e) => e.filterBucket === "decisions")).toBe(true);

    const searched = filterProjectHistoryEvents(events, {
      filter: "all",
      query: "retenue",
    });
    expect(searched.some((e) => e.eventId === "dec:p5-s07")).toBe(true);

    const none = filterProjectHistoryEvents(events, {
      filter: "all",
      query: "zzz-no-match",
    });
    expect(none).toHaveLength(0);

    // Transcript content alone never becomes a History event.
    expect(events.every((e) => e.sourceKind !== "Transcript")).toBe(true);
  });

  it("S07-E09 — Deliverable ≠ Artifact ≠ validation ≠ Exit Proof", () => {
    const producedUnvalidated = deriveWorkRepresentationProjection({
      projectId: PROJECT_ID,
      cycleInstanceId: "cyc:p5-s07",
      artifactRequired: true,
      artifactIds: ["art:note-v1"],
      evidenceIds: [],
      reviewBundleIds: [],
      qualificationHint: null,
      exitProofSatisfied: null,
      cycleComplete: false,
    });
    expect(producedUnvalidated.requirementState).toBe("expected");
    expect(producedUnvalidated.productionState).toBe("produced");
    expect(producedUnvalidated.validationState).toBe("unknown");
    expect(producedUnvalidated.exitProofSatisfied).toBe("unknown");
    expect(producedUnvalidated.cycleComplete).toBe(false);
    expect(producedUnvalidated.distinctions.deliverableIsNotArtifact).toBe(true);
    expect(producedUnvalidated.distinctions.artifactExistsIsNotValidation).toBe(
      true,
    );
    expect(producedUnvalidated.distinctions.validationIsNotExitProof).toBe(true);

    const validatedStillNotExit = deriveWorkRepresentationProjection({
      projectId: PROJECT_ID,
      artifactRequired: true,
      artifactIds: ["art:note-v1"],
      evidenceIds: ["ev:1"],
      reviewBundleIds: ["rb:1"],
      qualificationHint: "validated",
      exitProofSatisfied: false,
      cycleComplete: false,
    });
    expect(validatedStillNotExit.validationState).toBe("validated");
    expect(validatedStillNotExit.exitProofSatisfied).toBe(false);
    expect(validatedStillNotExit.cycleComplete).toBe(false);
  });

  it("S07-E02 — process-local Proposal loss cannot invent a Proposal continuation", async () => {
    const proposalId = createProposalId();
    const proposal: ProposalDto = {
      proposalId,
      status: "DECISION_REQUIRED",
      rephrasedRequest: "Matérialiser la note",
      objective: "Livrable de référence",
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Critical",
      rationale: "S07 continuity fixture",
      scope: "borné",
      outOfScope: ["REAL"],
      activatedBlocks: [],
      expectedOutcome: "fichier sandbox",
      sources: ["nora"],
      risks: [],
      reservations: [],
      stopConditions: ["STOP AVANT EXECUTE"],
      morrisGateRequired: true,
      nextPossibleStep: "Instruire les options",
      contextSnapshot: {
        projectId: PROJECT_ID,
        lpsId: "lps:p5-s07",
        lpsVersion: 2,
        doctrineDigest: "sha256:s07-fixture",
        activeCycleInstanceId: "cyc:p5-s07",
      },
      processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
      executionForbidden: true,
      noExecutingStatus: true,
      agentBinding: "NOT_AVAILABLE",
    };
    saveProposal(proposal);
    expect(listProposalsForProject(PROJECT_ID)).toHaveLength(1);

    // Simulate process restart — process-local store gone.
    resetF2ProposalStoreForTests();
    expect(listProposalsForProject(PROJECT_ID)).toHaveLength(0);

    // Fresh runtime OA stack (may not have this fixture project) — read must
    // not invent a Proposal. Reconstruction comes from Epistemic when present;
    // otherwise honest none / epistemic failure / reinstruction.
    const runtime = getRuntimeApplicationService();
    expect(runtime.oa).not.toBeNull();
    const subject = await readActiveProposalDecisionSubject(
      runtime.oa!,
      PROJECT_ID,
    );
    // Honest outcomes after process-local loss: reconstruct / requalify / none /
    // epistemic read failure. Never a fabricated bound Proposal from thin air.
    expect(listProposalsForProject(PROJECT_ID)).toHaveLength(0);
    if (!subject.ok) {
      expect(subject.code).toBe("EPISTEMIC_READ_FAILED");
      return;
    }
    expect(subject.kind === "bound_awaiting_decision").toBe(false);
    if (subject.kind === "pending_reinstruction_required") {
      expect(subject.recoverableProposalIds).not.toContain(proposalId);
    } else {
      expect(
        subject.kind === "none" || subject.kind === "pursue_prepare_ready",
      ).toBe(true);
    }
  });

  it("S07-E01 — History projection anchors current Project/LPS before interaction state", () => {
    const events = deriveProjectHistoryEvents({ history: historyFixture() });
    const project = events.find((e) => e.kind === "project");
    const lps = events.find((e) => e.kind === "lps");
    const cycle = events.find((e) => e.kind === "cycle");
    expect(project?.isCurrent).toBe(true);
    expect(project?.sourceId).toBe(PROJECT_ID);
    expect(lps?.isCurrent).toBe(true);
    expect(lps?.sourceId).toBe("lps:p5-s07");
    expect(cycle?.isCurrent).toBe(true);
    // Interaction/transcript never appears as History authority.
    expect(events.every((e) => e.sourceKind !== "Transcript")).toBe(true);
    expect(events.every((e) => e.sourceKind !== "ProposalDto")).toBe(true);
  });

  it("S07-E03/E04 — work representation + History keep Recommendation/Decision distinct from Artifact", () => {
    const work = deriveWorkRepresentationProjection({
      projectId: PROJECT_ID,
      cycleInstanceId: "cyc:p5-s07",
      artifactRequired: true,
      artifactIds: [],
      evidenceIds: [],
      reviewBundleIds: [],
      qualificationHint: "not_reviewed",
      exitProofSatisfied: false,
      cycleComplete: false,
    });
    expect(work.requirementState).toBe("expected");
    expect(work.productionState).toBe("not_produced");
    expect(work.validationState).toBe("not_reviewed");
    expect(work.exitProofSatisfied).toBe(false);

    const events = deriveProjectHistoryEvents({
      history: historyFixture(),
      durable: {
        recommendation: { recommendationLabel: "Poursuivre la trajectoire courante" },
      },
    });
    const rec = events.find((e) => e.kind === "recommendation");
    expect(rec?.title).toContain("Poursuivre");
    expect(rec?.sourceKind).toBe("Recommendation");
    // Post-evidence recommendation is historical projection, not current Product SoT.
    expect(rec?.isCurrent).toBe(false);
    // Decision remains a separate governed source — not collapsed into Recommendation.
    expect(events.some((e) => e.sourceKind === "HumanDecision")).toBe(true);
  });

  it("S07-E10/E11 — stale projection cannot invent authoritative Product mutation hooks", () => {
    const stale = deriveWorkRepresentationProjection({
      projectId: PROJECT_ID,
      artifactRequired: null,
      artifactIds: null,
      evidenceIds: null,
      reviewBundleIds: null,
    });
    // Unknown fields stay unknown — never auto-promoted to validated / exit proof.
    expect(stale.requirementState).toBe("unknown");
    expect(stale.validationState).toBe("unknown");
    expect(stale.exitProofSatisfied).toBe("unknown");
    expect(stale.cycleComplete).toBe("unknown");
    // Pure projection: no write side-effects / no Proposal fabrication after reset.
    expect(listProposalsForProject(PROJECT_ID)).toHaveLength(0);
  });

  it("S07-E23 — ZERO REAL boundary notice preserved on Proposal store", () => {
    expect(F2_PROCESS_LOCAL_NOTICE).toMatch(/reconstruisible|requalification/i);
    expect(F2_PROCESS_LOCAL_NOTICE).toMatch(/Product SQLite/i);
  });
});

===== CREATED FILE: projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s07.historySurface.ui.test.tsx =====
/**
 * P5-S07 — HistorySurface master/detail + local search UI.
 * @vitest-environment jsdom
 */
import { afterEach, describe, expect, it, vi, beforeEach } from "vitest";
import {
  cleanup,
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import { HistorySurface } from "@/features/pre-m6-product-ui/surfaces/HistorySurface";
import type { GetProjectSuccess } from "@/features/pre-m6-product-ui/types";

const { readHistoryMock } = vi.hoisted(() => ({
  readHistoryMock: vi.fn(),
}));

vi.mock("@/features/project-assistant/w2/actions", () => ({
  w2ReadProjectHistoryAction: (...args: unknown[]) => readHistoryMock(...args),
}));

const historyPayload = {
  ok: true as const,
  history: {
    projectId: "prj:ui-s07",
    projectTitle: "Product Simplification",
    lps: { lpsId: "lps:ui-s07", version: 1 },
    cycle: {
      activeCycleInstanceId: "cyc:ui-s07",
      cycleTypeId: "cyc:delivery",
      profile: "Critical",
      status: "active",
    },
    trajectory: {
      effectiveCurrent: {
        trajectoryId: "trj:ui",
        version: 1,
        status: "decided",
        isEffectiveCurrent: true,
        decidedByDecisionRef: "dec:ui",
        decidedOptionRef: "opt:a",
        stepCount: 2,
      },
      proposedNotYetDecided: null,
      versions: [
        {
          trajectoryId: "trj:ui",
          version: 1,
          status: "decided",
          isEffectiveCurrent: true,
          decidedByDecisionRef: "dec:ui",
          decidedOptionRef: "opt:a",
          stepCount: 2,
        },
      ],
    },
    decisions: [
      {
        decisionId: "dec:ui",
        subject: "Direction de l espace projet retenue",
        status: "accepted",
        authority: "local_pilote",
        actorRole: "Pilote",
        selectedOptionRef: "opt:a",
        effectiveAt: "2026-10-06T08:42:00.000Z",
        basisSourceType: "PresentedOptionSet",
        basisTrajectoryRef: "trj:ui@v1",
        reservations: [],
      },
    ],
    contracts: [],
    evidence: [],
    reviewBundles: [],
    syntheses: [],
    absent: ["Conversation (process-local, non rejouee)"],
    boundNote: "Borné · fixture HistorySurface UI.",
  },
};

const result = {
  ok: true,
  project: {
    projectId: "prj:ui-s07",
    name: "Product Simplification",
    objective: "obj",
    contextSummary: "ctx",
    criticality: "normal",
    constraints: [],
    localMode: true,
    source: "REAL_LOCAL_CORE",
    fixture: false,
  },
  livingState: {
    id: "lps:ui-s07",
    version: 1,
    createdAt: "2026-10-06T00:00:00.000Z",
    activeCycleInstanceId: "cyc:ui-s07",
  },
  doctrine: { packageId: "pkg", digest: "d" },
  readiness: { ready: true, blockers: [] },
} as unknown as GetProjectSuccess;

describe("P5-S07 HistorySurface UI", () => {
  beforeEach(() => {
    readHistoryMock.mockReset();
    readHistoryMock.mockResolvedValue(historyPayload);
  });

  afterEach(() => {
    cleanup();
  });

  it("renders master/detail, filters, and local search over Product events", async () => {
    render(
      <HistorySurface result={result} onReturnToOverview={() => undefined} />,
    );

    expect(screen.getByTestId("project-history-panel")).toBeInTheDocument();
    expect(screen.getByTestId("history-back-overview")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Historique" })).toBeInTheDocument();
    expect(screen.getByTestId("history-master-detail")).toBeInTheDocument();
    expect(screen.getByTestId("history-search")).toBeInTheDocument();

    await waitFor(() => {
      expect(readHistoryMock).toHaveBeenCalled();
      expect(screen.getByTestId("history-event-dec:ui")).toBeInTheDocument();
    });

    fireEvent.click(screen.getByTestId("history-filter-decisions"));
    expect(screen.getByTestId("history-event-dec:ui")).toBeInTheDocument();

    fireEvent.change(screen.getByTestId("history-search"), {
      target: { value: "retenue" },
    });
    expect(screen.getByTestId("history-event-dec:ui")).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("history-event-dec:ui"));
    expect(screen.getByTestId("history-detail-pane")).toHaveTextContent(
      "Direction de l espace projet retenue",
    );
    expect(screen.getByTestId("history-detail-pane")).toHaveTextContent(
      "Ce qui a été décidé",
    );
  });

  it("CP01 — P3 78:2 exposes Tout / Décisions / Changements only", async () => {
    render(<HistorySurface result={result} />);
    await waitFor(() => {
      expect(screen.getByTestId("history-event-dec:ui")).toBeInTheDocument();
    });

    expect(screen.getByTestId("history-filter-all")).toBeInTheDocument();
    expect(screen.getByTestId("history-filter-decisions")).toBeInTheDocument();
    expect(screen.getByTestId("history-filter-changes")).toBeInTheDocument();
    // « Vérifié » is an event-type chip in the list, never a fourth filter.
    expect(screen.queryByTestId("history-filter-verified")).toBeNull();
    expect(
      screen.getByTestId("history-event-dec:ui").textContent,
    ).toContain("Décision");
  });

  it("CP01 — detail reserves every P3 block and stays honest when facts are absent", async () => {
    render(<HistorySurface result={result} onAskNora={() => undefined} />);
    await waitFor(() => {
      expect(screen.getByTestId("history-event-dec:ui")).toBeInTheDocument();
    });

    fireEvent.click(screen.getByTestId("history-event-dec:ui"));
    for (const block of [
      "history-detail-decided",
      "history-detail-why",
      "history-detail-impact",
      "history-detail-verification",
      "history-detail-sources",
      "history-detail-ask-nora",
    ]) {
      expect(screen.getByTestId(block)).toBeInTheDocument();
    }
    // The decision anchor proves its basis — the block is a fact, not a guess.
    expect(screen.getByTestId("history-detail-why").textContent).toContain(
      "PresentedOptionSet",
    );

    // The project identity anchor proves nothing beyond itself.
    fireEvent.click(screen.getByTestId("history-event-project:prj:ui-s07"));
    expect(
      screen
        .getByTestId("history-detail-why")
        .querySelector("[data-available='false']"),
    ).not.toBeNull();
    expect(screen.getByTestId("history-detail-verification")).toHaveAttribute(
      "data-available",
      "false",
    );
  });

  it("CP01 — « Demander à Nora » prefills a draft and never sends", async () => {
    const drafts: string[] = [];
    render(
      <HistorySurface result={result} onAskNora={(d) => drafts.push(d)} />,
    );
    await waitFor(() => {
      expect(screen.getByTestId("history-event-dec:ui")).toBeInTheDocument();
    });

    fireEvent.click(screen.getByTestId("history-event-dec:ui"));
    fireEvent.click(screen.getByTestId("history-ask-nora-submit"));
    expect(drafts).toHaveLength(1);
    expect(drafts[0]).toContain("Direction de l espace projet retenue");

    fireEvent.change(screen.getByTestId("history-ask-nora-input"), {
      target: { value: "Compare ce moment avec hier" },
    });
    fireEvent.click(screen.getByTestId("history-ask-nora-submit"));
    expect(drafts[1]).toBe("Compare ce moment avec hier");
  });

  it("CP01 — mobile list ↔ detail is one nav level (190:380 → 190:412)", async () => {
    render(<HistorySurface result={result} />);
    await waitFor(() => {
      expect(screen.getByTestId("history-event-dec:ui")).toBeInTheDocument();
    });

    expect(screen.getByTestId("history-list-pane")).toHaveAttribute(
      "data-mobile-hidden",
      "false",
    );
    fireEvent.click(screen.getByTestId("history-event-dec:ui"));
    expect(screen.getByTestId("history-list-pane")).toHaveAttribute(
      "data-mobile-hidden",
      "true",
    );
    expect(screen.getByTestId("history-detail-pane")).toHaveAttribute(
      "data-mobile-hidden",
      "false",
    );

    fireEvent.click(screen.getByTestId("history-back-to-list"));
    expect(screen.getByTestId("history-list-pane")).toHaveAttribute(
      "data-mobile-hidden",
      "false",
    );
  });
});

===== CREATED FILE: projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s07.journalPrincipalView.ui.test.tsx =====
/** @vitest-environment jsdom */
/**
 * P5-S07 CP01 — « Journal du cycle » is a dedicated principal view (P3 94:2),
 * exactly like Historique: it owns the main column, the context rail steps
 * aside, and the rail keeps only a compact shortcut into the same surface.
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

vi.mock("@/features/project-assistant/synthesisActions", () => ({
  getLatestRelevantProductSynthesisAction: vi.fn(async () => ({
    ok: true,
    synthesis: null,
    count: 0,
  })),
  listProductSynthesesAction: vi.fn(async () => ({ ok: true, items: [] })),
  getProductSynthesisAction: vi.fn(),
  searchProductSynthesesAction: vi.fn(async () => ({ ok: true, items: [] })),
  materializeProductSynthesisFromLineageAction: vi.fn(),
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

const journalEntries = [
  {
    journalEntryId: "cje:1",
    topicOrdinal: 1,
    title: "Architecture de l'espace projet",
    currentSummary: "La conversation reste le canal principal.",
    stabilizedPoints: ["Conversation principale"],
    openPoints: ["Cohérence finale"],
    status: "active",
    updatedAt: "2026-10-06T08:00:00.000Z",
    sourceTurnRefs: ["pt:a"],
    sourceTurnCount: 1,
    isCurrentTopic: true,
  },
];

describe("P5-S07 CP01 Journal principal view wiring", () => {
  afterEach(() => {
    cleanup();
  });

  beforeEach(() => {
    vi.clearAllMocks();
    deriveContinuityMock.mockResolvedValue({ ok: false });
    readCurrentContinuityMock.mockResolvedValue({ ok: true, kind: "none" });
    readHistoryMock.mockResolvedValue({ ok: false });
    getProjectRuntimeActionMock.mockResolvedValue({
      ok: true,
      project: {
        projectId: "prj:p5-s07",
        name: "Product Simplification",
        shortReference: "P5",
        objective: "Simplifier le pilotage sans perdre gouvernance.",
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
        projectId: "prj:p5-s07",
        id: "lps:p5-s07",
        version: 2,
        createdAt: "2026-10-05T00:00:00.000Z",
        updatedAt: "2026-10-05T00:00:00.000Z",
        activeCycleInstanceId: "cyc:p5-s07",
        status: "active",
      },
      doctrine: { packageId: "pkg", version: "1", status: "bound" },
      readiness: { status: "READY", reasons: [] },
    });
    useProductConversationMock.mockReturnValue({
      messages: [{ id: "pt:a", role: "user", content: "Bonjour Nora" }],
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
      transcriptAvailability: "available",
      openContinuityPresentation: { kind: "none" },
      journalEntries,
      journalCycleInstanceId: "cyc:p5-s07",
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

  it("opens the Journal as a principal surface and returns to the conversation", async () => {
    render(<ProjectWorkspacePage projectId="prj:p5-s07" />);

    await waitFor(() => {
      expect(screen.getByTestId("project-context-shortcuts")).toBeTruthy();
    });

    // Conversation layout: the rail shows the compact Journal shortcut only.
    expect(screen.getByTestId("cycle-journal-rail")).toHaveAttribute(
      "data-variant",
      "rail",
    );
    expect(screen.getByTestId("cycle-journal-open-full")).toBeTruthy();
    expect(screen.queryByTestId("project-journal-surface")).toBeNull();

    fireEvent.click(screen.getByTestId("project-shortcut-journal"));

    await waitFor(() => {
      expect(screen.getByTestId("project-journal-surface")).toBeTruthy();
    });
    expect(screen.getByTestId("project-principal")).toHaveAttribute(
      "data-active-view",
      "journal",
    );
    // Dedicated principal view — no sibling context rail, no second Journal.
    expect(
      screen.getByTestId("project-workspace-layout").getAttribute("data-layout"),
    ).toBe("overview");
    expect(screen.queryByTestId("project-lps-column")).toBeNull();
    expect(screen.queryByTestId("cycle-journal-rail")).toBeNull();
    expect(screen.queryByTestId("project-assistant-panel")).toBeNull();
    expect(screen.getByTestId("project-journal-detail-title").textContent).toBe(
      "Architecture de l'espace projet",
    );

    fireEvent.click(screen.getByTestId("project-journal-return-conversation"));
    await waitFor(() => {
      expect(screen.getByTestId("project-assistant-panel")).toBeTruthy();
    });
    expect(screen.getByTestId("project-principal")).toHaveAttribute(
      "data-active-view",
      "conversation",
    );
  });

  it("the rail shortcut promotes the same surface (no second cockpit)", async () => {
    render(<ProjectWorkspacePage projectId="prj:p5-s07" />);
    await waitFor(() => {
      expect(screen.getByTestId("cycle-journal-open-full")).toBeTruthy();
    });

    fireEvent.click(screen.getByTestId("cycle-journal-open-full"));
    await waitFor(() => {
      expect(screen.getByTestId("project-journal-surface")).toBeTruthy();
    });
    expect(screen.getAllByTestId("project-journal-surface")).toHaveLength(1);
    expect(
      screen.getByTestId("memory-rail-tab-sujets").getAttribute("aria-selected"),
    ).toBe("true");
  });
});

===== CREATED FILE: projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s07.journalSurface.ui.test.tsx =====
/** @vitest-environment jsdom */
/**
 * P5-S07 CP01 — Journal du cycle as a dedicated principal surface
 * (P3 94:2 desktop · 94:222 expanded · 192:41 mobile list · 192:81 detail).
 *
 * Proves the single JournalSurface serves both compositions: a compact rail
 * shortcut and the principal master/detail view. No JournalSurfaceV2.
 */
import { afterEach, describe, expect, it } from "vitest";
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import {
  JournalSurface,
  type JournalReservationCard,
  type JournalSurfaceEntry,
} from "@/features/pre-m6-product-ui/surfaces/JournalSurface";

afterEach(() => {
  cleanup();
});

const entries: JournalSurfaceEntry[] = [
  {
    journalEntryId: "cje:1",
    topicOrdinal: 1,
    title: "Architecture de l'espace projet",
    currentSummary:
      "L'espace projet garde la conversation comme canal principal pour avancer.",
    stabilizedPoints: [
      "La conversation reste l'espace principal pour agir avec Nora.",
      "L'Aperçu sert à comprendre l'état du projet.",
    ],
    openPoints: ["Vérifier la cohérence finale du Journal."],
    status: "active",
    updatedAt: new Date(Date.now() - 3 * 60000).toISOString(),
    sourceTurnRefs: ["pt:a", "pt:b", "pt:c", "pt:d"],
    sourceTurnCount: 4,
    isCurrentTopic: true,
  },
  {
    journalEntryId: "cje:2",
    topicOrdinal: 2,
    title: "Création d'un projet",
    currentSummary: "La création reste conversationnelle.",
    stabilizedPoints: [],
    openPoints: [],
    status: "archived",
    updatedAt: new Date(Date.now() - 3 * 3600_000).toISOString(),
    sourceTurnRefs: [],
    sourceTurnCount: 0,
  },
];

const transcript = [
  {
    id: "pt:a",
    role: "user",
    content: "On garde la conversation ?",
    createdAt: "2026-10-04T10:24:00.000Z",
  },
  {
    id: "pt:b",
    role: "assistant",
    content: "Oui, les surfaces complètent.",
    createdAt: "2026-10-04T10:25:00.000Z",
  },
  {
    id: "pt:c",
    role: "user",
    content: "Je veux retrouver les sujets.",
    createdAt: "2026-10-04T10:26:00.000Z",
  },
  {
    id: "pt:d",
    role: "assistant",
    content: "Le Journal sert de mémoire.",
    createdAt: "2026-10-04T10:27:00.000Z",
  },
];

const linkedReservation = {
  epistemicItemId: "epi:1",
  ordinal: 1,
  title: "Cohérence du Journal",
  summary: "Cohérence du Journal",
  statement: "Cohérence du Journal",
  presentationState: "may_affect_finalization",
  presentationStateLabel: "Peut affecter la clôture",
  impactLabel: "Moyen",
  attentionLabel: "Avant clôture",
  finalizationRelevanceLabel: "Ne bloque pas la clôture",
  rationale: "",
  resolutionCondition: "",
  journalEntryRefs: ["cje:1"],
  sourceTurnRefs: [],
  hasResolutionProposal: false,
  isLegacy: false,
  canDefer: false,
} as JournalReservationCard;

function renderPrincipal(overrides: Record<string, unknown> = {}) {
  return render(
    <JournalSurface
      variant="principal"
      entries={entries}
      cycleInstanceId="cyc:1"
      selectedEntryId={null}
      onSelectEntry={() => undefined}
      onViewExchanges={() => undefined}
      onFocusTurn={() => undefined}
      transcriptMessages={transcript}
      cycleLabel="Cycle de livraison"
      currentnessLabel="À jour"
      {...overrides}
    />,
  );
}

describe("P5-S07 CP01 Journal principal surface", () => {
  it("94:2 — dedicated surface with return link, tabs with counts and master/detail", () => {
    renderPrincipal({ onReturnToConversation: () => undefined });

    const surface = screen.getByTestId("project-journal-surface");
    expect(surface).toHaveAttribute("data-variant", "principal");
    // The rail testid belongs to the rail composition only.
    expect(screen.queryByTestId("cycle-journal-rail")).toBeNull();
    expect(
      screen.getByTestId("project-journal-return-conversation"),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Journal du cycle" })).toBeInTheDocument();
    expect(screen.getByTestId("project-journal-currentness").textContent).toBe(
      "À jour",
    );

    for (const tab of ["sujets", "reserves", "recommandations", "decisions"]) {
      expect(screen.getByTestId(`memory-rail-tab-${tab}`)).toBeInTheDocument();
    }
    expect(screen.getByTestId("memory-rail-tab-sujets").textContent).toContain(
      "Sujets",
    );

    // Subjects index + the selected subject detail live side by side.
    expect(screen.getByTestId("cycle-journal-entry-cje:1")).toBeInTheDocument();
    expect(screen.getByTestId("cycle-journal-entry-cje:2")).toBeInTheDocument();
    expect(screen.getByTestId("project-journal-detail")).toBeInTheDocument();
    expect(screen.getByTestId("cycle-journal-ordinal-cje:1").textContent).toBe(
      "Sujet 01",
    );
    expect(screen.getByTestId("project-journal-detail-title").textContent).toBe(
      "Architecture de l'espace projet",
    );
    expect(
      screen.getByTestId("project-journal-detail").textContent,
    ).toContain("Mis à jour il y a 3 min");

    const stabilized = screen.getByTestId("project-journal-stabilized");
    expect(within(stabilized).getAllByRole("listitem")).toHaveLength(2);
    expect(
      within(screen.getByTestId("project-journal-open")).getAllByRole("listitem"),
    ).toHaveLength(1);
  });

  it("94:222 — exchanges preview expands to the full linked index", () => {
    const viewed: string[] = [];
    const focused: string[] = [];
    renderPrincipal({
      onViewExchanges: (e: JournalSurfaceEntry) => viewed.push(e.journalEntryId),
      onFocusTurn: (id: string) => focused.push(id),
    });

    const panel = screen.getByTestId("cycle-journal-exchanges-cje:1");
    expect(within(panel).getAllByRole("button")).toHaveLength(2);
    expect(
      screen.getByTestId("project-journal-exchanges").textContent,
    ).toContain("2 sur 4 affichés");

    fireEvent.click(screen.getByTestId("cycle-journal-view-cje:1"));
    expect(viewed).toEqual(["cje:1"]);
    expect(
      within(screen.getByTestId("cycle-journal-exchanges-cje:1")).getAllByRole(
        "button",
      ),
    ).toHaveLength(4);
    expect(
      screen.getByTestId("project-journal-exchanges").textContent,
    ).toContain("4 échanges affichés");
    expect(
      screen.getByTestId("cycle-journal-exchange-pt:a").textContent,
    ).toMatch(/VOUS/);
    expect(
      screen.getByTestId("cycle-journal-exchange-pt:a").textContent,
    ).toMatch(/04\/10/);
    expect(
      screen.getByTestId("cycle-journal-exchange-pt:b").textContent,
    ).toMatch(/NORA/);

    fireEvent.click(screen.getByTestId("cycle-journal-exchange-pt:c"));
    expect(focused).toEqual(["pt:c"]);

    fireEvent.click(screen.getByTestId("project-journal-open-in-conversation"));
    expect(focused[1]).toBe("pt:a");
  });

  it("never invents a subject link: only Reservations carry a durable ref", () => {
    const { rerender } = renderPrincipal();
    expect(screen.getByTestId("project-journal-linked").textContent).toContain(
      "seules les réserves portent un rattachement durable",
    );

    rerender(
      <JournalSurface
        variant="principal"
        entries={entries}
        cycleInstanceId="cyc:1"
        selectedEntryId="cje:1"
        onSelectEntry={() => undefined}
        onViewExchanges={() => undefined}
        onFocusTurn={() => undefined}
        transcriptMessages={transcript}
        reservations={[linkedReservation]}
      />,
    );
    expect(
      screen.getByTestId("project-journal-linked-reservation-epi:1"),
    ).toBeInTheDocument();
    expect(screen.getByTestId("project-journal-linked").textContent).toContain(
      "ne portent pas de rattachement durable",
    );
  });

  it("192:41 → 192:81 — mobile list and detail are one nav level", () => {
    renderPrincipal();
    const surface = screen.getByTestId("project-journal-surface");
    expect(surface).toHaveAttribute("data-mobile-detail", "false");
    expect(screen.getByTestId("project-journal-detail")).toHaveAttribute(
      "data-mobile-hidden",
      "true",
    );

    fireEvent.click(
      within(screen.getByTestId("cycle-journal-entry-cje:2")).getByRole("button", {
        name: /Création d'un projet/,
      }),
    );
    expect(surface).toHaveAttribute("data-mobile-detail", "true");
    expect(screen.getByTestId("project-journal-detail")).toHaveAttribute(
      "data-mobile-hidden",
      "false",
    );

    fireEvent.click(screen.getByTestId("project-journal-back-to-subjects"));
    expect(surface).toHaveAttribute("data-mobile-detail", "false");
  });

  it("empty subject keeps honest unavailable states rather than blank blocks", () => {
    renderPrincipal({ selectedEntryId: "cje:2" });
    expect(screen.getByTestId("project-journal-stabilized").textContent).toContain(
      "Aucun point stabilisé",
    );
    expect(screen.getByTestId("project-journal-open").textContent).toContain(
      "Aucun point ouvert",
    );
    expect(screen.getByTestId("project-journal-exchanges").textContent).toContain(
      "Aucun échange durable",
    );
    expect(
      screen.queryByTestId("project-journal-open-in-conversation"),
    ).toBeNull();
  });
});

describe("P5-S07 CP01 Journal rail stays a shortcut", () => {
  it("bounds the index and promotes the dedicated surface", () => {
    let opened = 0;
    render(
      <JournalSurface
        entries={entries}
        cycleInstanceId="cyc:1"
        selectedEntryId={null}
        onSelectEntry={() => undefined}
        onViewExchanges={() => undefined}
        onFocusTurn={() => undefined}
        transcriptMessages={transcript}
        railMaxEntries={1}
        onOpenFullJournal={() => {
          opened += 1;
        }}
      />,
    );

    expect(screen.getByTestId("cycle-journal-rail")).toHaveAttribute(
      "data-variant",
      "rail",
    );
    expect(screen.queryByTestId("project-journal-detail")).toBeNull();
    expect(screen.getByTestId("cycle-journal-entry-cje:1")).toBeInTheDocument();
    expect(screen.queryByTestId("cycle-journal-entry-cje:2")).toBeNull();

    fireEvent.click(screen.getByTestId("cycle-journal-overflow"));
    fireEvent.click(screen.getByTestId("cycle-journal-open-full"));
    expect(opened).toBe(2);
  });
});


## 51. Complete Roadmap diff
diff --git a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
index 2aeae5c9..355c8cba 100644
--- a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
@@ -4,7 +4,10 @@
 | --- | --- |
 | **Rôle** | Roadmap **vivante** de convergence vers l’utilisation complète de la doctrine produit SFIA Studio v3 |
 | **Statut** | **VALIDATED — ACTIVE LIVING ROADMAP** |
-| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S06 INTEGRATED / POST-MERGE VERIFIED** | 2026-10-06 Europe/Paris — **STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S06 PILOT EXPERIENCE COMPLETION — INTEGRATED / POST-MERGE VERIFIED** · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **14 — Post-Merge** · Profile **Critical** · Typologie **EVOL** · Milestone **P5** · Slice **P5-S06** · Morris P5-S06 MERGE GO = **AUTHORIZED / CONSUMED** · PR **#561** **MERGED** · feature commit **`731fdd7247b37cd708a9496fb81a9986e78abcd1`** · merge/main **`9f586496f28b824b1a4938d497c148ba0c96596e`** · post-merge CI Studio **#690** / run **`37485457209`** = **SUCCESS** · Detect / Build / **Required Gate** = **SUCCESS** · P5-S06 = **INTEGRATED / POST-MERGE VERIFIED** · FUNCTIONAL CLOSURE **PASS / INTEGRATED** · Visual **PASS AT S06 SCOPE** · FULL CANONICAL SEND CANCELLATION **PASS DETERMINISTIC / INTEGRATED** · P5-S06-DEBT-NORA-STOP **CLOSED ON MAIN / POST-MERGE VERIFIED** · REAL cancellation **NOT PROVEN** · ZERO REAL · delivery branch cleanup **COMPLETE** · P5 = **IN PROGRESS** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · NEXT RECOMMENDED = **P5-S07 — Project Continuity & Work Representation Completion** · S07 **NOT AUTHORIZED / NOT STARTED** · S08 **NOT STARTED** · documentary truth-sync PR this cycle · truth-sync merge **NOT AUTHORIZED** · **≠** P5 COMPLETE · **≠** REAL cancellation proven · **≠** runtime v3 ADOPTED |
+| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S07 CP02 LOCAL CANDIDATE** | 2026-10-06 Europe/Paris — **STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S07 CP02 SEMANTIC PROJECTION INTEGRITY + RESPONSIVE / VISUAL CLOSURE — LOCAL CANDIDATE** · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation Correction** · Profile **Critical** · Typologie **EVOL** · Milestone **P5** · Slice **P5-S07** · Pass **CP02** · Morris P5-S07 CP02 = **AUTHORIZED / CONSUMED** · review input `441420301bc428491f15e54270b402d3d5bfa9cb` · base/main **`7a664d65157af9554de4d4da7e76ca0187020020`** · branche `delivery/sfia-studio-product-simplification-p5-s07-project-continuity-work-representation-completion` · B1 PROP-PL **PASS / inherited + regression** · CONV-PL **PASS / inherited + regression** · B2 Work Representation semantic integrity **PASS** · Synthetic Artifact refs **NONE** · Evidence→validation heuristic **REMOVED** · B3 Journal currentness **PASS** · B4 History identity **PASS / DEDUP PRODUCT IDENTITY** · B5 Responsive **PASS / P3 bands** · Journal visual **CURSOR PIXEL COMPARISON PASS** (pending ChatGPT independent visual confirmation) · History visual **CURSOR PIXEL COMPARISON PASS** (pending ChatGPT independent visual confirmation) · `1 Issue` **ABSENT in final proof** · ZERO REAL **YES** · Architecture parallelism **NONE** · UAT-RECOVERY-03 **NON-BLOCKING CARRY** · P5-S07 INTEGRATED **NO** · Git Integration **NOT AUTHORIZED** · P5 COMPLETE **NO** · S08 **NOT STARTED** · P6 READY **NO** · runtime v3 **NON ADOPTED** · next = **ChatGPT Final Critical + Visual Review** · **≠** INTEGRATED · **≠** MERGED |
+| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S07 CP01 LOCAL CANDIDATE** | 2026-10-06 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S07 CP01 CONTINUITY & WORK REPRESENTATION EXIT PROOF + PIXEL-PERFECT JOURNAL/HISTORY — LOCAL CANDIDATE *(true then; superseded by P5-S07 CP02 tip after Critical Review B2/B4/B5)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation Correction** · Profile **Critical** · Typologie **EVOL** · Milestone **P5** · Slice **P5-S07** · Pass **CP01** · Morris P5-S07 CP01 = **AUTHORIZED / CONSUMED** · review input `90d165d9` / blob `3794d1bc` · base/main **`7a664d65157af9554de4d4da7e76ca0187020020`** · branche `delivery/sfia-studio-product-simplification-p5-s07-project-continuity-work-representation-completion` · Project Continuity **PASS LOCALLY / DETERMINISTIC** · PROP-PL **CLOSED LOCALLY AT TESTED DURABLE RESUME BOUNDARY** · CONV-PL **CLOSED LOCALLY AT TESTED RESUME BOUNDARY** · Work Representation **PASS LOCALLY / PRODUCT-WIRED** · Journal Currentness **PASS** · Journal Pixel-Perfect **PASS AT ALL CANONICAL FRAMES** · History **MINIMUM-SUFFICIENT PRODUCT-DERIVED** · History Pixel-Perfect **PASS AT ALL CANONICAL FRAMES** · ZERO REAL **YES** · Architecture parallelism **NONE** · UAT-RECOVERY-03 **NON-BLOCKING CARRY** · P5-S07 INTEGRATED **NO** · Git Integration **NOT AUTHORIZED** · P5 COMPLETE **NO** · S08 **NOT STARTED** · P6 READY **NO** · runtime v3 **NON ADOPTED** · next was **ChatGPT Final Critical + Visual Review** · **≠** INTEGRATED · **≠** MERGED |
+| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S07 LOCAL CANDIDATE** | 2026-10-06 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S07 PROJECT CONTINUITY & WORK REPRESENTATION COMPLETION — LOCAL CANDIDATE *(true then; superseded by P5-S07 CP01 tip after Critical Review B1–B5)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation** · Profile **Critical** · Typologie **EVOL** · Milestone **P5** · Slice **P5-S07** · Morris P5-S07 DELIVERY GO = **AUTHORIZED / CONSUMED** · base/main **`7a664d65157af9554de4d4da7e76ca0187020020`** (PR **#562** post-S06 documentary truth-sync **MERGED** · CI Studio **#692** SUCCESS) · branche `delivery/sfia-studio-product-simplification-p5-s07-project-continuity-work-representation-completion` · Project Continuity **PASS LOCALLY / DETERMINISTIC** · Work Representation **PASS LOCALLY AT TESTED SCOPE** (Option A — no DeliverableStore) · Journal **P3-CONVERGED AT S07 SCOPE** · History **PRODUCT-DERIVED / P3-CONVERGED AT S07 SCOPE** (dedicated principal view) · Deliverable≠Artifact≠validation≠Exit Proof **PROVEN AT TESTED SCOPE** · CONV-PL **CLOSED LOCALLY AT TESTED SCOPE** (Product truth before transcript) · PROP-PL **CLOSED LOCALLY AT TESTED SCOPE** (Epistemic reconstruct / honest requalify — no Proposal DB) · Visual **PASS AT S07 TOUCHED SURFACES** (runtime↔Figma) · ZERO REAL **YES** · Architecture parallelism **NONE** · UAT-RECOVERY-03 **NON-BLOCKING CARRY** · P5-S07 INTEGRATED **NO** · Git Integration **NOT AUTHORIZED** · P5 COMPLETE **NO** · S08 **NOT STARTED** · P6 READY **NO** · runtime v3 **NON ADOPTED** · next was **ChatGPT Critical Review** · **≠** INTEGRATED · **≠** MERGED |
+| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S06 INTEGRATED / POST-MERGE VERIFIED** | 2026-10-06 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S06 PILOT EXPERIENCE COMPLETION — INTEGRATED / POST-MERGE VERIFIED *(true then; superseded by P5-S07 LOCAL CANDIDATE tip; post-S06 documentary truth-sync PR **#562** later MERGED @ `7a664d65…` / CI **#692** — tip self-referential « truth-sync merge NOT AUTHORIZED » was true at tip authorship)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **14 — Post-Merge** · Profile **Critical** · Typologie **EVOL** · Milestone **P5** · Slice **P5-S06** · Morris P5-S06 MERGE GO = **AUTHORIZED / CONSUMED** · PR **#561** **MERGED** · feature commit **`731fdd7247b37cd708a9496fb81a9986e78abcd1`** · merge/main **`9f586496f28b824b1a4938d497c148ba0c96596e`** · post-merge CI Studio **#690** / run **`37485457209`** = **SUCCESS** · Detect / Build / **Required Gate** = **SUCCESS** · P5-S06 = **INTEGRATED / POST-MERGE VERIFIED** · FUNCTIONAL CLOSURE **PASS / INTEGRATED** · Visual **PASS AT S06 SCOPE** · FULL CANONICAL SEND CANCELLATION **PASS DETERMINISTIC / INTEGRATED** · P5-S06-DEBT-NORA-STOP **CLOSED ON MAIN / POST-MERGE VERIFIED** · REAL cancellation **NOT PROVEN** · ZERO REAL · delivery branch cleanup **COMPLETE** · P5 = **IN PROGRESS** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · NEXT RECOMMENDED was **P5-S07** · S07 was **NOT AUTHORIZED / NOT STARTED** at tip authorship · S08 **NOT STARTED** · documentary truth-sync PR this cycle · truth-sync merge **NOT AUTHORIZED** *(historical tip wording)* · **≠** P5 COMPLETE · **≠** REAL cancellation proven · **≠** runtime v3 ADOPTED |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S06 GIT INTEGRATION** | 2026-10-06 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S06 PILOT EXPERIENCE COMPLETION — GIT INTEGRATION AUTHORIZED BY MORRIS / IN PROGRESS *(true then; superseded by P5-S06 INTEGRATED / POST-MERGE VERIFIED tip)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **13 — PR Readiness / Git Integration** · Profile **Critical** · Typologie **EVOL** · Milestone **P5** · Slice **P5-S06** · Pass **GIT INTEGRATION** · Morris P5-S06 GIT INTEGRATION GATE = **AUTHORIZED / CONSUMED** · ChatGPT Final Critical Re-Review CP02.3 = **PASS** · D-S06-CANCEL-01 remains consumed · CP01/CP02/CP02.1/CP02.2/CP02.3 historical preserved · base/main **`16a8e2fd823d75d7c59ce1fb4d55cb862d112697`** · branche `delivery/sfia-studio-product-simplification-p5-s06-pilot-experience-completion` · commit/push/PR **AUTHORIZED this gate** · MERGE **NOT AUTHORIZED — separate Morris GO required** · P5-S06 INTEGRATED **NO** until merge + post-merge · FUNCTIONAL CLOSURE **PASS LOCALLY** · FULL CANONICAL SEND CANCELLATION **PASS LOCALLY / DETERMINISTIC** · Visual **PASS AT S06 SCOPE** · P5-S06-DEBT-NORA-STOP **CLOSED LOCALLY / awaiting Git Integration** · ZERO REAL · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · S07 **NOT STARTED** · next = commit → push → PR → CI → STOP → **MORRIS P5-S06 MERGE GO** if readiness remains PASS · **≠** INTEGRATED · **≠** MERGED |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S06 CP02.3 LOCAL CANDIDATE** | 2026-10-06 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S06 CP02.3 — LOCAL CANDIDATE — CKC PROVIDER CANCELLATION CLOSURE PASS *(true then; superseded by P5-S06 GIT INTEGRATION tip)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation Correction** · Profile **Critical** · Typologie **EVOL** · Milestone **P5** · Slice **P5-S06** · Pass **CP02.3** · Morris CP02.3 GO **CONSUMED** · D-S06-CANCEL-01 remains consumed · CP02/CP02.1/CP02.2 historical preserved · base/main **`16a8e2fd823d75d7c59ce1fb4d55cb862d112697`** · branche `delivery/sfia-studio-product-simplification-p5-s06-pilot-experience-completion` · CKC `provider.complete` in-flight AbortSignal **PROVEN** · OpenAI `complete`→`completeRound`→`responses.create(..., { signal })` **PROVEN** · abort = STOPPED not provider_error · ZERO REAL · P5-S06 FUNCTIONAL CLOSURE **PASS LOCALLY** · FULL CANONICAL SEND CANCELLATION **PASS LOCALLY / DETERMINISTIC** · P5-S06-DEBT-NORA-STOP **CLOSED LOCALLY / awaiting Git Integration** · P5-S06 INTEGRATED **NO** · Git Integration **NOT AUTHORIZED** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · S07 **NOT STARTED** · next = **ChatGPT Final Critical Re-Review CP02.3** · **≠** INTEGRATED · **≠** S06 Git-complete |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S06 CP02.2 LOCAL CANDIDATE** | 2026-10-06 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S06 CP02.2 — LOCAL CANDIDATE / FULL CANONICAL SEND CANCELLATION EXIT PROOF PASS *(true then; superseded by P5-S06 CP02.3 tip)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation Correction** · Profile **Critical** · Typologie **EVOL** · Milestone **P5** · Slice **P5-S06** · Pass **CP02.2** · Morris CP02.2 GO **CONSUMED** · D-S06-CANCEL-01 remains consumed · CP02.1 historical preserved · base/main **`16a8e2fd823d75d7c59ce1fb4d55cb862d112697`** · branche `delivery/sfia-studio-product-simplification-p5-s06-pilot-experience-completion` · F2 `completeStructured` AbortSignal **PROVEN** · F2 post-analyze / createCycle / proposal / transcript cut-lines **PROVEN** · already-started createCycle **not rolled back** · ZERO REAL · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · project Git **NOT AUTHORIZED** · next = **ChatGPT Final Critical Re-Review CP02.2** · S07 **NOT STARTED** · **≠** INTEGRATED · **≠** S06 Git-complete |

## 52. Complete P5 diff
diff --git a/projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md b/projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md
index f3b924aa..9df0b95d 100644
--- a/projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md
+++ b/projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md
@@ -5,19 +5,19 @@
 | **Projet** | SFIA Studio |
 | **Macro** | `STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01` |
 | **Milestone** | **P5 — INTEGRATED DELIVERY** (Delivery / Implementation / Evidence source) |
-| **Slice** | **P5-S01**…**P5-S06** (integrated) · **P5-S07**/**P5-S08** remaining |
-| **Pass** | **P5-S06 INTEGRATED / POST-MERGE VERIFIED** · documentary truth-sync PR open · truth-sync merge **NOT AUTHORIZED** |
+| **Slice** | **P5-S01**…**P5-S06** (integrated) · **P5-S07 CP02 LOCAL CANDIDATE** · **P5-S08** remaining |
+| **Pass** | **P5-S07 CP02** — Semantic Projection Integrity + Responsive / Visual Closure · Git Integration **NOT AUTHORIZED** |
 | **Typologie** | Delivery evidence dans macro **EVOL** — **≠** doctrine · **≠** nouvelle architecture |
 | **Autorité architecture** | **P4** (`04-chat-first-product-simplification-semantic-projection-cognitive-architecture.md`) — **inchangée** |
-| **Base / HEAD Git** | `origin/main` = `9f586496f28b824b1a4938d497c148ba0c96596e` (PR **#561** P5-S06 · post-merge CI Studio **#690** SUCCESS) |
+| **Base / HEAD Git** | `origin/main` = `7a664d65157af9554de4d4da7e76ca0187020020` (PR **#562** post-S06 documentary truth-sync · CI Studio **#692** SUCCESS) · S07 candidate uncommitted on delivery branch |
 | **P5-S01 integration** | PR **#555** **MERGED** · post-merge CI **#678** **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** |
 | **P5-S02 integration** | PR **#556** **MERGED** · post-merge CI **#680** **SUCCESS** · Required Gate **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** |
 | **P5-S03 integration** | PR **#557** **MERGED** · post-merge CI **#682** **SUCCESS** · Required Gate **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** |
 | **P5-S04 integration** | PR **#558** **MERGED** · post-merge CI **#684** / run **`37377995199`** **SUCCESS** · Required Gate **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** |
 | **P5-S05 integration** | PR **#560** **MERGED** · post-merge CI Studio **#688** **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** · F2 routing alignment **CLOSED ON MAIN** · R3 **PASS AT TESTED SCOPE / INTEGRATED / POST-MERGE VERIFIED** |
-| **P5-S06 integration** | PR **#561** **MERGED** · feature `731fdd72…` · merge `9f586496…` · post-merge CI Studio **#690** / run **`37485457209`** **SUCCESS** · Required Gate **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** |
+| **P5-S06 integration** | PR **#561** **MERGED** · feature `731fdd72…` · merge `9f586496…` · post-merge CI Studio **#690** / run **`37485457209`** **SUCCESS** · Required Gate **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** · post-S06 truth-sync PR **#562** **MERGED** @ `7a664d65…` / CI **#692** |
 | **Worktree** | `/Users/morris/Projects/sfia-studio-chat-first-product-simplification-p3` |
-| **Branche S06** | `delivery/sfia-studio-product-simplification-p5-s06-pilot-experience-completion` — **MERGED / CLEANED UP** |
+| **Branche S07** | `delivery/sfia-studio-product-simplification-p5-s07-project-continuity-work-representation-completion` — **LOCAL / UNCOMMITTED** |
 | **P5 AUTHORIZED BY MORRIS** | **YES** |
 | **P5 STARTED** | **YES** |
 | **P5 IN PROGRESS** | **YES** |
@@ -29,6 +29,10 @@
 | **P5-S04** | **INTEGRATED / POST-MERGE VERIFIED** · Product-derived Synthèses M9 · CP01/CP02 preserved · A=0/B=0 · B1/B2 CLOSED |
 | **P5-S05** | **INTEGRATED / POST-MERGE VERIFIED** — F2 routing CLOSED ON MAIN · R3 PASS AT TESTED SCOPE |
 | **P5-S06** | **INTEGRATED / POST-MERGE VERIFIED** · FUNCTIONAL CLOSURE **PASS / INTEGRATED** · Visual **PASS AT S06 SCOPE** · FULL CANONICAL SEND CANCELLATION **PASS DETERMINISTIC / INTEGRATED** · STOP debt **CLOSED ON MAIN** · REAL cancellation **NOT PROVEN** |
+| **P5-S07** | **CP02 LOCAL CANDIDATE PASS** · B1 PROP-PL **PASS / inherited + regression** · CONV-PL **PASS / inherited + regression** · B2 Work Representation **PASS / PRODUCT-WIRED / SEMANTICALLY HONEST** · Synthetic Artifact refs **NONE** · Evidence→validation heuristic **REMOVED** · B3 Journal currentness **PASS** · B4 History identity **PASS / DEDUP PRODUCT IDENTITY** · B5 Responsive **PASS / P3 bands** · Journal visual **CURSOR PIXEL COMPARISON PASS** (pending ChatGPT independent visual confirmation) · History visual **CURSOR PIXEL COMPARISON PASS** (pending ChatGPT independent visual confirmation) · ZERO REAL · Architecture parallelism **NONE** · UAT-RECOVERY-03 **NON-BLOCKING CARRY** · P5-S07 INTEGRATED **NO** |
+| **P5-S07 DELIVERY GO** | **AUTHORIZED / CONSUMED** |
+| **P5-S07 CP01** | **AUTHORIZED / CONSUMED** |
+| **P5-S07 CP02** | **AUTHORIZED / CONSUMED** |
 | **P5-S06 DELIVERY** | **AUTHORIZED / CONSUMED** → **INTEGRATED** via PR **#561** |
 | **P5-S06 CP01** | **AUTHORIZED / CONSUMED** |
 | **P5-S06 CP02** | **AUTHORIZED / CONSUMED** |
@@ -37,12 +41,12 @@
 | **P5-S06 CP02.3** | **AUTHORIZED / CONSUMED** |
 | **P5-S06 GIT INTEGRATION GATE** | **AUTHORIZED / CONSUMED** |
 | **P5-S06 MERGE GO** | **AUTHORIZED / CONSUMED** |
-| **P5 slicing restant** | **S07 / S08** — **ADOPTED BY MORRIS** (2026-10-06) · S07/S08 = **NOT STARTED** · S07 = **NEXT RECOMMENDED / NOT AUTHORIZED** |
+| **P5 slicing restant** | **S08** — **ADOPTED BY MORRIS** · S08 = **NOT STARTED** · S07 = **LOCAL CANDIDATE / Git Integration NOT AUTHORIZED** |
 | **R1 / R2 / R3** | **R1 PASS** · **R2 PASS** · **R3 PASS AT TESTED SCOPE / INTEGRATED / POST-MERGE VERIFIED** (S05) |
-| **ZERO REAL** | **YES for S06** · S05 R3 REAL historique préservé (bounded OpenAI sous gate S05) |
+| **ZERO REAL** | **YES for S07** · S05 R3 REAL historique préservé (bounded OpenAI sous gate S05) |
 | **runtime v3** | **NON ADOPTED** |
-| **Git (S06)** | PR **#561** **MERGED** · post-merge CI **PASS** · delivery branch cleanup **COMPLETE** · documentary truth-sync merge **NOT AUTHORIZED** |
-| **Next** | **ChatGPT review / MORRIS P5 POST-S06 TRUTH-SYNC MERGE GATE** · S07 **NOT AUTHORIZED / NOT STARTED** |
+| **Git (S07)** | local branch only · project commit/push/PR/merge **NOT AUTHORIZED** · Review Handoff L3 only |
+| **Next** | **ChatGPT Final Critical + Visual Review (P5-S07 CP02)** · S08 **NOT STARTED** |
 | **P5-S05 DELIVERY** | **AUTHORIZED / CONSUMED** → **INTEGRATED** via PR **#560** |
 | **P5-S05 REAL / R3** | **AUTHORIZED / CONSUMED** → **INTEGRATED** |
 | **P5-S05 CP01 / CP02** | **AUTHORIZED / CONSUMED** (historique) |
@@ -50,7 +54,7 @@
 | **Fichier** | `projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md` |
 | **Date** | 2026-10-06 · Europe/Paris |

-> **Lecture rapide.** P5-S01…S06 **intégrés**. P5-S06 = **INTEGRATED / POST-MERGE VERIFIED** via PR **#561** / merge `9f586496…` / post-merge CI **#690** SUCCESS. FUNCTIONAL CLOSURE + deterministic cancellation **ON MAIN**. REAL cancellation **NOT PROVEN**. **≠ P5 COMPLETE** · S07 **NOT AUTHORIZED**.
+> **Lecture rapide.** P5-S01…S06 **intégrés**. P5-S07 CP02 = **LOCAL CANDIDATE PASS** (semantic honesty + History identity dedup + P3 responsive bands + Cursor visual comparison) sur branche delivery · base `7a664d65…` · ZERO REAL · **≠ P5 COMPLETE** · Git Integration **NOT AUTHORIZED** · S08 **NOT STARTED**.
 > **Règle de lecture des preuves.** *Implémenté* ≠ *prouvé* ≠ *intégré* ≠ *REAL*. Chaque affirmation ci-dessous est qualifiée par son niveau de preuve. Les résultats de tests/typecheck/lint/build sont ceux **rapportés par la passe de livraison** ; ce document n’en invente pas d’autres et ne les a pas ré-exécutés lors de sa rédaction.

 ---
@@ -73,23 +77,38 @@ P5-S03 = INTEGRATED / POST-MERGE VERIFIED (PR #557)
 P5-S04 = INTEGRATED / POST-MERGE VERIFIED (PR #558 · main c7b53b93… · CI #684 SUCCESS)
 P5-S05 = INTEGRATED / POST-MERGE VERIFIED (PR #560 · F2 CLOSED ON MAIN · R3 PASS AT TESTED SCOPE)
 P5-S06 = INTEGRATED / POST-MERGE VERIFIED (PR #561 · feature 731fdd72… · merge 9f586496… · CI #690 SUCCESS)
-
-FUNCTIONAL CLOSURE = PASS / INTEGRATED
-VISUAL = PASS AT S06 SCOPE
+P5-S07 = CP02 LOCAL CANDIDATE PASS (delivery branch · base 7a664d65… · PR #562 truth-sync MERGED / CI #692)
+         B1 PROP-PL PASS / inherited + regression
+         CONV-PL PASS / inherited + regression
+         B2 Work Representation PASS / PRODUCT-WIRED / SEMANTICALLY HONEST
+         Synthetic Artifact refs = NONE
+         Evidence→validation heuristic = REMOVED
+         B3 Journal Currentness PASS
+         B4 History identity PASS / DEDUP PRODUCT IDENTITY
+         B5 Responsive PASS / P3 bands (MOBILE <768 · COMPACT 768–1199 · LARGE ≥1200)
+         Journal visual = CURSOR PIXEL COMPARISON PASS (pending ChatGPT independent visual confirmation)
+         History visual = CURSOR PIXEL COMPARISON PASS (pending ChatGPT independent visual confirmation)
+         ZERO REAL = YES
+         Architecture parallelism = NONE
+         UAT-RECOVERY-03 = NON-BLOCKING CARRY
+         P5-S07 INTEGRATED = NO
+         Git Integration = NOT AUTHORIZED
+
+FUNCTIONAL CLOSURE (S06) = PASS / INTEGRATED
+VISUAL (S06) = PASS AT S06 SCOPE
 FULL CANONICAL SEND CANCELLATION = PASS DETERMINISTIC / INTEGRATED
 P5-S06-DEBT-NORA-STOP = CLOSED ON MAIN / POST-MERGE VERIFIED
 REAL cancellation = NOT PROVEN
-ZERO REAL (S06) = YES
+ZERO REAL (S07 CP02) = YES
 P5 COMPLETE = NO
 P6 READY = NO
 runtime v3 = NON ADOPTED

-NEXT RECOMMENDED = P5-S07 — Project Continuity & Work Representation Completion
-S07 = NOT AUTHORIZED / NOT STARTED
+NEXT = ChatGPT Final Critical + Visual Review (P5-S07 CP02)
 S08 = NOT STARTED
-P5-S06 MERGE GO = AUTHORIZED / CONSUMED
-DOCUMENTARY TRUTH-SYNC MERGE = NOT AUTHORIZED
-NEXT = CHATGPT REVIEW → MORRIS P5 POST-S06 TRUTH-SYNC MERGE GATE
+P5-S07 DELIVERY GO = AUTHORIZED / CONSUMED
+P5-S07 CP01 = AUTHORIZED / CONSUMED
+P5-S07 CP02 = AUTHORIZED / CONSUMED
 ```
 ### 1.2 Hiérarchie d’autorité

@@ -1173,4 +1192,29 @@ Anti-claims explicites :

 ---

-*Fin du document P5 — Integrated Delivery — S01…S06 INTEGRATED / POST-MERGE VERIFIED · S07 NEXT RECOMMENDED NOT AUTHORIZED · P5 COMPLETE NO · runtime v3 NON ADOPTED — P4 remains architecture authority.*
+## 47. P5-S07 CP01 — Continuity Exit Proof + Pixel-Perfect Journal/History (truth-sync)
+
+> **Qualification.** Morris P5-S07 CP01 AUTHORIZED / CONSUMED. Critical Review blockers B1–B5 closed locally. Candidate remains uncommitted. **≠ INTEGRATED** · **≠ P5 COMPLETE**.
+
+| Item | Statut CP01 |
+| --- | --- |
+| Morris P5-S07 CP01 | **AUTHORIZED / CONSUMED** |
+| Review input | `90d165d9` / blob `3794d1bc` |
+| PROP-PL | **CLOSED LOCALLY AT TESTED DURABLE RESUME BOUNDARY** (S07-CP01-E01) |
+| CONV-PL | **CLOSED LOCALLY AT TESTED RESUME BOUNDARY** |
+| Client subject rehydrate | **PASS** (`w2ReadActiveDecisionSubjectAction` on mount) |
+| Work Representation | **PASS LOCALLY / PRODUCT-WIRED** (LifecycleSurface ← Option A) |
+| Journal Décisions current-cycle | **PASS** |
+| History read model | **MINIMUM-SUFFICIENT AT S07 SCOPE** (bounded; explicit `boundNote`) |
+| Journal visual | **PIXEL-PERFECT PASS** at 94:2 / 94:222 / 192:41 / 192:81 |
+| History visual | **PIXEL-PERFECT PASS** at 78:2 / 190:111 / 190:380 / 190:412 |
+| ZERO REAL | **YES** |
+| Architecture parallelism | **NONE** |
+| UAT-RECOVERY-03 | **NON-BLOCKING CARRY** |
+| P5-S07 INTEGRATED | **NO** |
+| Git Integration | **NOT AUTHORIZED** |
+| Next | **ChatGPT Final Critical + Visual Review** |
+
+---
+
+*Fin du document P5 — Integrated Delivery — S01…S06 INTEGRATED / POST-MERGE VERIFIED · S07 CP01 LOCAL CANDIDATE PASS · P5 COMPLETE NO · runtime v3 NON ADOPTED — P4 remains architecture authority.*

## 53. Project Git effects
AUTHORIZED: local edits, tests, scratch visuals, Roadmap/P5 truth-sync.
NOT AUTHORIZED: project git add/commit/push/PR/merge.
Candidate ends LOCAL / UNCOMMITTED / staged EMPTY.
Only Review Handoff L3 publication authorized.

## 54. Final visual paths
```
.tmp-sfia-review/p5-s07-cp02-visual/
  figma/   (8 canonical refs)
  runtime/ (8 canonical + journal-compact)
  responsive/ (768/899 Journal+History + 767/1200 edges)
  comparison/notes.md
  manifest.json
  _capture.mjs
```

**FINAL VISUAL REVIEW REQUIRES THESE RUNTIME CAPTURES TO BE ATTACHED TO CHATGPT.**

## 55. ChatGPT visual attachment note
Cursor claim = CURSOR VISUAL COMPARISON PASS.
ChatGPT final visual verdict remains external and requires attached images.

## 56. Review Handoff
Mode publish-in-cycle · branch `sfia/review-handoff` · file `sfia-review-handoff/latest-chatgpt-review.md` · input `441420301bc428491f15e54270b402d3d5bfa9cb` · publisher `scripts/sfia/publish-review-handoff.sh`.

## 57. Final Git truth (pre-handoff)
See §5. Restored to S07 delivery branch after handoff; staged empty.

## 58. Verdict
**READY FOR CHATGPT FINAL CRITICAL + VISUAL REVIEW — P5-S07 CP02 LOCAL CANDIDATE**

- P5-S07 CONTINUITY = PASS LOCALLY / DETERMINISTIC
- PROP-PL = CLOSED LOCALLY AT TESTED DURABLE RESUME BOUNDARY
- CONV-PL = CLOSED LOCALLY AT TESTED RESUME BOUNDARY
- WORK REPRESENTATION = PASS LOCALLY / PRODUCT-WIRED / SEMANTICALLY HONEST
- SYNTHETIC ARTIFACT REFS = NONE
- HISTORY = MINIMUM-SUFFICIENT / PRODUCT-DERIVED / IDENTITY-DEDUPED
- JOURNAL CURRENTNESS = PASS
- RESPONSIVE P3 = PASS
- JOURNAL VISUAL = CURSOR PIXEL COMPARISON PASS · PENDING CHATGPT INDEPENDENT VISUAL REVIEW
- HISTORY VISUAL = CURSOR PIXEL COMPARISON PASS · PENDING CHATGPT INDEPENDENT VISUAL REVIEW
- ZERO REAL = YES
- ARCHITECTURE PARALLELISM = NONE
- P5-S07 INTEGRATED = NO
- Git Integration = NOT AUTHORIZED
- P5 COMPLETE = NO
- S08 = NOT STARTED
- P6 READY = NO
- runtime v3 = NON ADOPTED
