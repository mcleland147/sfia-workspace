# SFIA Review Pack — FULL — REAL async completion product reachability (ZERO REAL)

## 1. Timestamp (Europe/Paris)

2026-08-17 12:55:10 CEST

## 2. Cycle / profil / typologie

- Cycle projet : **8 — Delivery / implémentation**
- Profil SFIA : **Critical**
- Typologie v2.4 : **INC — bounded Pre-M6 blocker fix**
- CKC : `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/03-architecture-technique.md` — candidate — experimental cognitive guidance — **aucune autorité d’exécution**
- Posture : evidence-based ; Observation / Réserve / Verdict séparés ; pas de claim supérieur à la preuve ; aucun GO implicite

## 3. GO Morris exact consommé

```
GO — TREAT REAL ASYNC COMPLETION PRODUCT REACHABILITY BLOCKER — ZERO REAL
```

Autorise : inspection locale ; modification minimale UI / thin server action si nécessaire ; tests déterministes ; Playwright/Vitest sans REAL ; typecheck/lint/build ; FULL review pack ; Review Handoff L3 publish-in-cycle.

N’autorise PAS : OpenAI LIVE ; Cursor REAL ; `SFIA_STUDIO_CURSOR_REAL=1` ; second REAL Attempt ; cleanup du worktree REAL précédent ; architecture nouvelle ; worker ; queue ; scheduler ; poller automatique ; nouveau store ; migration ; commit projet ; push projet ; PR ; merge ; M6 ; UAT ; runtime v3 ADOPTED.

## 4–6. Git Truth PRE/POST

| Contrôle | PRE | POST |
|---|---|---|
| branch | `delivery/sfia-studio-pre-m6-ui-option-a` | identique |
| HEAD | `0d33478566627a9bf507d5a06323962d349308ee` | identique |
| origin/main | `0d33478566627a9bf507d5a06323962d349308ee` | identique |
| origin/sfia/review-handoff (parent) | `5d55c393a65df5813735a75e5e579c2b0bd35896` | identique avant ce publish |
| staged | aucun | aucun |
| working tree | DIRTY — candidat Pre-M6 (~83 paths) | DIRTY préservé (~84 paths : +1 fichier test nouveau). Pas de reset/clean/stash/rebase/merge/stage/commit projet |

Git Truth Check d’entrée : **PASS** (refs attendues).

Baseline candidat Final C9 encore disponible :
- 979 fichiers
- manifest SHA256 `a396bf199111dac671f0cf6f7751a99449840330c14c76d57c00901d13c91873`
- PRE-cycle : match byte-for-byte (0 mismatch / 0 missing)
- POST-cycle unauthorized C9 drift : **0** (hors fichiers explicitement autorisés de ce micro-cycle)

## 7. Sources consultées

Convergence : `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md`, `sfia-studio-convergence-roadmap.md`

Doctrine v3 : `32-living-project-state-and-dynamic-trajectory.md`, `34-agent-capabilities-reversibility-and-execution-governance.md`, `35-artifact-evidence-debt-and-controlled-learning.md`

Process : `sfia-cycle-routing-guide.md`, `sfia-v2.5-project-cycles-method-candidate.md`, `02-fifteen-cycles-synthetic-map.md`, `sfia-chatgpt-cursor-operating-model.md`, `sfia-rules-and-guardrails.md`, `prompts/templates/sfia-cycle-execution-template.md`

Parent evidence : `git show origin/sfia/review-handoff:sfia-review-handoff/latest-chatgpt-review.md` @ `5d55c393…`

Candidat local inspecté :
- `ProjectAssistantPanel.tsx`
- `actions.ts` (relu, **non modifié**)
- `confirmAndExecuteResolvedM3.ts` / `executeConfirmedBoundedReadOnlyContract.ts` / `completeBoundedReadOnlyLaunch.ts` (relu, **non modifié**)
- `useProductConversation.ts` / `ConversationSurface.tsx` (Option A — chemin produit réel du FIRST REAL)
- `preM6.realProductWiringResidual.test.ts` (relu, **non modifié**, T-R3-ASYNC réexécuté)

## 8. Qualification de convergence

Le blocker est un **écart d’accessibilité produit** d’une continuation backend déjà prouvée (T-R3-ASYNC), pas un manque de primitive domaine. Correction UI / controller Option A + panneau legacy, réutilisant `projectAssistantConfirmAndExecuteResolvedM3Action` → `confirmAndExecuteResolvedM3` → réutilisation Attempt `running` **avant** Confirmation / Gate D / StartExecution.

Aucune architecture nouvelle. Aucun worker/poller. Refresh **manuel / user-driven**.

## 9. Gap exact

Après spawn-ACK REAL, Attempt durable = `running`. L’UI Option A masquait toute action dès que `f3Execute` existait :

```
canConfirmResolvedM3 = Boolean(f3M3Resolved) && !f3Execute && !busy && !blocked
```

Le bouton « Confirmer l’exécution » disparaissait. Aucun contrôle d’observation/actualisation. Morris ne pouvait pas déclencher la continuation canonique déjà existante.

## 10. Diagnostic local avant modification

Confirmé dans le candidat local :

1. **Condition masquante Option A** : `useProductConversation.ts` `canConfirmResolvedM3 = f3M3Resolved && !f3Execute && !busy && !blocked` ; `ConversationSurface.tsx` n’affiche le contrat+confirm que si `f3M3Resolved && !f3Execute`.
2. **Même gate legacy** : `ProjectAssistantPanel.tsx` lignes équivalentes.
3. **Première confirm/execute** : `projectAssistantConfirmAndExecuteResolvedM3Action` → `confirmAndExecuteResolvedM3`.
4. **Réutilisation Attempt running** : `executeConfirmedBoundedReadOnlyContract.ts` liste les Attempts, trouve `succeeded || running`, appelle `finishBoundedAttempt({ reusedExistingAttempt: true })` **avant** version check, `requestConfirmation`, Gate D, `startExecution`.
5. **Chemin terminal** : `finishBoundedAttempt` → `completeBoundedReadOnlyLaunch` → ingest Evidence/RB/Nora/LPS si `succeeded` + `resultRef`.

Backend continuation **présente**. Pas de STOP ASYNC CONTINUATION BACKEND CAPABILITY MISSING.

## 11. Liste fichiers PRE (micro-cycle)

Snapshots sous `.tmp-sfia-review/real-async-continuation-ui-fix/pre/` :

| Path | PRE SHA256 (12) | PRE bytes |
|---|---|---|
| `projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx` | `a422768cfa48747a…` | 47965 |\n| `projects/sfia-studio/app/features/project-assistant/actions.ts` | `b269556c0fd608e2…` | 24769 |\n| `projects/sfia-studio/app/features/project-assistant/presentationLabels.ts` | `03c9abc44ed34fd8…` | 4635 |\n| `projects/sfia-studio/app/features/project-assistant/project-assistant.module.css` | `9eaa27f0299d36a2…` | 5667 |\n| `projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts` | `282737b2cf17aac2…` | 17553 |\n| `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx` | `94c66e2c22d8fb91…` | 38139 |\n| `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.module.css` | `abd592cc84885007…` | 13807 |\n| `projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx` | `3a3579e46049f9c5…` | 19012 |\n| `projects/sfia-studio/app/__tests__/project-assistant/presentationLabels.test.ts` | `99a11709d3344a20…` | 5388 |\n| `projects/sfia-studio/app/__tests__/project-assistant/preM6.realProductWiringResidual.test.ts` | `be7c396c2fc6fc56…` | 31539 |\n
## 12. Fichiers modifiés (PRE→POST)

Modifiés :
- `projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts` — Option A controller (chemin FIRST REAL)
- `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx` — Option A UI
- `projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx` — fichier principal listé + panneau legacy
- `projects/sfia-studio/app/features/project-assistant/presentationLabels.ts` — helper/wording partagé (pas une primitive domaine)
- `projects/sfia-studio/app/__tests__/project-assistant/presentationLabels.test.ts`
- `projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx` — mocks M3 manquants
- `projects/sfia-studio/app/__tests__/pre-m6-product-ui/runningAttemptRefresh.ui.test.tsx` — **nouveau**

Non modifiés (byte-identical PRE/POST) parmi les fichiers surveillés :
- `actions.ts` — **pas d’alias** : l’UI appelle l’action canonique existante
- `project-assistant.module.css`
- `ConversationSurface.module.css`
- `preM6.realProductWiringResidual.test.ts` (assertions T-R3 non affaiblies)

Hors scope C9 : **0 drift**.

## 13. Diffs complets PRE→POST

### 13.1 presentationLabels.ts

```diff
--- /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/.tmp-sfia-review/real-async-continuation-ui-fix/pre/projects__sfia-studio__app__features__project-assistant__presentationLabels.ts	2026-08-17 12:44:08
+++ /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts	2026-08-17 12:46:28
@@ -147,3 +147,30 @@

 export const G_UX_08_AMEND_DEFERRED_MESSAGE =
   "Boucle AMEND complète non disponible (G-UX-08 ouvert / différé). Clarifiez dans la conversation, obtenez une nouvelle proposition, puis un nouveau GO — pas d’amendement in-place simulé.";
+
+/**
+ * Observation of an already-authorized bounded REAL Attempt.
+ * Not a second Confirmation, retry, or relaunch.
+ */
+export const BOUNDED_RUNNING_REFRESH_TITLE = "Exécution en cours";
+export const BOUNDED_RUNNING_REFRESH_ACTION = "Actualiser le résultat";
+export const BOUNDED_RUNNING_REFRESH_HELP =
+  "L’exécution est déjà autorisée. Cette action vérifie son résultat sans la relancer.";
+
+export function isBoundedRunningAttemptRefreshable(input: {
+  attemptStatus?: string | null;
+  realProcessInvoked?: boolean | null;
+  executionMode?: string | null;
+  payloadMode?: string | null;
+  contractStatus?: string | null;
+} | null | undefined): boolean {
+  if (!input) return false;
+  if ((input.attemptStatus ?? "").toLowerCase() !== "running") return false;
+  if (input.realProcessInvoked !== true) return false;
+  if ((input.contractStatus ?? "").toLowerCase() !== "executing") return false;
+  const payloadMode = (input.payloadMode ?? "").toLowerCase();
+  const executionMode = (input.executionMode ?? "").toLowerCase();
+  return (
+    payloadMode === "cursor_cli_real" || executionMode === "cursor_cli_real"
+  );
+}

```

### 13.2 useProductConversation.ts

```diff
--- /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/.tmp-sfia-review/real-async-continuation-ui-fix/pre/projects__sfia-studio__app__features__pre-m6-product-ui__hooks__useProductConversation.ts	2026-08-17 12:44:08
+++ /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts	2026-08-17 12:46:41
@@ -28,6 +28,7 @@
 import {
   G_UX_08_AMEND_DEFERRED_MESSAGE,
   deriveRecommendationFreshness,
+  isBoundedRunningAttemptRefreshable,
   type RecommendationFreshness,
 } from "@/features/project-assistant/presentationLabels";

@@ -116,6 +117,7 @@
   const [isPending, startTransition] = useTransition();

   const listRef = useRef<HTMLDivElement | null>(null);
+  const f3InFlightRef = useRef(false);
   const onDurableFactsChangedRef = useRef(onDurableFactsChanged);
   const onDurableEvidenceOutcomeChangeRef = useRef(
     onDurableEvidenceOutcomeChange,
@@ -385,6 +387,19 @@
   const canConfirmResolvedM3 =
     Boolean(f3M3Resolved) && !f3Execute && !busy && !blocked;

+  const canRefreshResolvedM3Running =
+    Boolean(f3M3Resolved) &&
+    Boolean(f3Execute) &&
+    isBoundedRunningAttemptRefreshable({
+      attemptStatus: f3Execute?.attempt.status,
+      realProcessInvoked: f3Execute?.attempt.realProcessInvoked,
+      executionMode: f3Execute?.attempt.executionMode,
+      payloadMode: f3Execute?.mode,
+      contractStatus: f3Execute?.contract.status,
+    }) &&
+    !busy &&
+    !blocked;
+
   function prepareLegacyFixture() {
     if (!canPrepareLegacyFixture || !activeProposal || !f2?.decision) return;
     if (f3Busy) return;
@@ -479,9 +494,10 @@
     });
   }

-  function confirmAndExecuteResolvedM3() {
-    if (!canConfirmResolvedM3 || !f3M3Resolved) return;
-    if (f3Busy) return;
+  function invokeCanonicalResolvedM3Path() {
+    if (!f3M3Resolved) return;
+    if (f3InFlightRef.current || f3Busy) return;
+    f3InFlightRef.current = true;
     setF3Busy(true);
     startTransition(async () => {
       setError(null);
@@ -491,6 +507,7 @@
         executionContractId: f3M3Resolved.successor.executionContractId,
         expectedContractVersion: f3M3Resolved.successor.version,
       });
+      f3InFlightRef.current = false;
       setF3Busy(false);
       if (!result.ok) {
         setUiState("ERROR_RECOVERABLE");
@@ -509,6 +526,16 @@
     });
   }

+  function confirmAndExecuteResolvedM3() {
+    if (!canConfirmResolvedM3) return;
+    invokeCanonicalResolvedM3Path();
+  }
+
+  function refreshResolvedM3RunningAttempt() {
+    if (!canRefreshResolvedM3Running) return;
+    invokeCanonicalResolvedM3Path();
+  }
+
   function retryLastUserMessage() {
     const lastUser = [...messages].reverse().find((m) => m.role === "user");
     if (!lastUser) return;
@@ -546,12 +573,14 @@
     canPrepareLegacyFixture,
     canConfirmResolvedM3,
     canConfirmLegacyFixture,
+    canRefreshResolvedM3Running,
     sendMessage,
     decide,
     prepareResolvedM3,
     prepareLegacyFixture,
     confirmAndExecuteResolvedM3,
     confirmAndExecuteLegacyFixture,
+    refreshResolvedM3RunningAttempt,
     retryLastUserMessage,
   };
 }

```

### 13.3 ConversationSurface.tsx

```diff
--- /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/.tmp-sfia-review/real-async-continuation-ui-fix/pre/projects__sfia-studio__app__features__pre-m6-product-ui__surfaces__ConversationSurface.tsx	2026-08-17 12:44:08
+++ /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx	2026-08-17 12:46:58
@@ -2,8 +2,12 @@

 import { useId } from "react";
 import {
+  BOUNDED_RUNNING_REFRESH_ACTION,
+  BOUNDED_RUNNING_REFRESH_HELP,
+  BOUNDED_RUNNING_REFRESH_TITLE,
   G_UX_08_AMEND_DEFERRED_MESSAGE,
   attemptStatusUserLabel,
+  isBoundedRunningAttemptRefreshable,
 } from "@/features/project-assistant/presentationLabels";
 import type { AssistantToolEventDto } from "@/features/project-assistant/types";
 import type { F2DecisionKind } from "@/features/project-assistant/f2/types";
@@ -78,18 +82,27 @@
     canPrepareLegacyFixture,
     canConfirmResolvedM3,
     canConfirmLegacyFixture,
+    canRefreshResolvedM3Running,
     sendMessage,
     decide,
     prepareResolvedM3,
     prepareLegacyFixture,
     confirmAndExecuteResolvedM3,
     confirmAndExecuteLegacyFixture,
+    refreshResolvedM3RunningAttempt,
     retryLastUserMessage,
   } = controller;

   const attemptLabel = f3Execute
     ? attemptStatusUserLabel(f3Execute.attempt.status)
     : null;
+  const runningRefreshVisible = isBoundedRunningAttemptRefreshable({
+    attemptStatus: f3Execute?.attempt.status,
+    realProcessInvoked: f3Execute?.attempt.realProcessInvoked,
+    executionMode: f3Execute?.attempt.executionMode,
+    payloadMode: f3Execute?.mode,
+    contractStatus: f3Execute?.contract.status,
+  });

   return (
     <section
@@ -644,21 +657,40 @@
           aria-live="polite"
         >
           <header className={styles.cardHead}>
-            <p className={styles.cardEyebrow}>Résultat</p>
-            <h3 className={styles.cardTitle}>Tentative et recommandation</h3>
-          </header>
-          <div className={styles.chipRow} data-testid="f3-execute-labels">
-            <span className={styles.chipQuiet}>Aucune exécution réelle</span>
-            <span className={styles.chip}>Recommandation — pas une décision</span>
-            <span
-              className={
-                recommendationFreshness.status === "stale"
-                  ? styles.chipWarn
-                  : styles.chipQuiet
+            <p className={styles.cardEyebrow}>
+              {runningRefreshVisible ? "Exécution" : "Résultat"}
+            </p>
+            <h3
+              className={styles.cardTitle}
+              data-testid={
+                runningRefreshVisible ? "f3-running-refresh-title" : undefined
               }
             >
-              {recommendationFreshness.label}
-            </span>
+              {runningRefreshVisible
+                ? BOUNDED_RUNNING_REFRESH_TITLE
+                : "Tentative et recommandation"}
+            </h3>
+          </header>
+          <div className={styles.chipRow} data-testid="f3-execute-labels">
+            {runningRefreshVisible ? (
+              <span className={styles.chip}>Exécution déjà autorisée</span>
+            ) : (
+              <span className={styles.chipQuiet}>Aucune exécution réelle</span>
+            )}
+            {runningRefreshVisible ? null : (
+              <span className={styles.chip}>Recommandation — pas une décision</span>
+            )}
+            {runningRefreshVisible ? null : (
+              <span
+                className={
+                  recommendationFreshness.status === "stale"
+                    ? styles.chipWarn
+                    : styles.chipQuiet
+                }
+              >
+                {recommendationFreshness.label}
+              </span>
+            )}
           </div>

           <div className={styles.subCard} data-testid="f3-attempt-card">
@@ -680,6 +712,26 @@
             </p>
           </div>

+          {runningRefreshVisible ? (
+            <>
+              <p
+                className={styles.cardNote}
+                data-testid="f3-running-refresh-help"
+              >
+                {BOUNDED_RUNNING_REFRESH_HELP}
+              </p>
+              <button
+                type="button"
+                className={styles.primaryButton}
+                data-testid="f3-refresh-running-button"
+                disabled={!canRefreshResolvedM3Running}
+                onClick={() => refreshResolvedM3RunningAttempt()}
+              >
+                {BOUNDED_RUNNING_REFRESH_ACTION}
+              </button>
+            </>
+          ) : (
+            <>
           <div className={styles.subCard} data-testid="f3-evidence-card">
             <h4 className={styles.subTitle}>Preuve</h4>
             <p className={styles.code} data-testid="f3-evidence-id">
@@ -734,6 +786,8 @@
               PAS DE CLAIM READY
             </p>
           </div>
+            </>
+          )}
         </section>
       ) : null}


```

### 13.4 ProjectAssistantPanel.tsx

```diff
--- /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/.tmp-sfia-review/real-async-continuation-ui-fix/pre/projects__sfia-studio__app__features__project-assistant__ProjectAssistantPanel.tsx	2026-08-17 12:44:08
+++ /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx	2026-08-17 12:47:28
@@ -21,9 +21,13 @@
 import type { F3ExecutePayload, F3PreparePayload } from "./f3/types";
 import type { F3M3ResolvedPayload } from "./f3/prepareAndResolveM3ProductPath";
 import {
+  BOUNDED_RUNNING_REFRESH_ACTION,
+  BOUNDED_RUNNING_REFRESH_HELP,
+  BOUNDED_RUNNING_REFRESH_TITLE,
   G_UX_08_AMEND_DEFERRED_MESSAGE,
   attemptStatusUserLabel,
   deriveRecommendationFreshness,
+  isBoundedRunningAttemptRefreshable,
 } from "./presentationLabels";
 import styles from "./project-assistant.module.css";

@@ -121,6 +125,7 @@
   const [f3Busy, setF3Busy] = useState(false);
   const [isPending, startTransition] = useTransition();
   const listRef = useRef<HTMLDivElement | null>(null);
+  const f3InFlightRef = useRef(false);
   const onDurableFactsChangedRef = useRef(onDurableFactsChanged);
   const onDurableEvidenceOutcomeChangeRef = useRef(
     onDurableEvidenceOutcomeChange,
@@ -379,6 +384,19 @@

   const canConfirmResolvedM3 =
     Boolean(f3M3Resolved) && !f3Execute && !busy && !blocked;
+
+  const canRefreshResolvedM3Running =
+    Boolean(f3M3Resolved) &&
+    Boolean(f3Execute) &&
+    isBoundedRunningAttemptRefreshable({
+      attemptStatus: f3Execute?.attempt.status,
+      realProcessInvoked: f3Execute?.attempt.realProcessInvoked,
+      executionMode: f3Execute?.attempt.executionMode,
+      payloadMode: f3Execute?.mode,
+      contractStatus: f3Execute?.contract.status,
+    }) &&
+    !busy &&
+    !blocked;

   function prepareLegacyFixture() {
     if (!canPrepareLegacyFixture || !activeProposal || !f2?.decision) return;
@@ -486,9 +504,10 @@
     });
   }

-  function confirmAndExecuteResolvedM3() {
-    if (!canConfirmResolvedM3 || !f3M3Resolved) return;
-    if (f3Busy) return;
+  function invokeCanonicalResolvedM3Path() {
+    if (!f3M3Resolved) return;
+    if (f3InFlightRef.current || f3Busy) return;
+    f3InFlightRef.current = true;
     setF3Busy(true);
     startTransition(async () => {
       setError(null);
@@ -498,6 +517,7 @@
         executionContractId: f3M3Resolved.successor.executionContractId,
         expectedContractVersion: f3M3Resolved.successor.version,
       });
+      f3InFlightRef.current = false;
       setF3Busy(false);
       if (!result.ok) {
         setUiState("ERROR_RECOVERABLE");
@@ -518,6 +538,16 @@
       notifyDurableFactsChanged();
       void refreshDurableEvidenceOutcome();
     });
+  }
+
+  function confirmAndExecuteResolvedM3() {
+    if (!canConfirmResolvedM3) return;
+    invokeCanonicalResolvedM3Path();
+  }
+
+  function refreshResolvedM3RunningAttempt() {
+    if (!canRefreshResolvedM3Running) return;
+    invokeCanonicalResolvedM3Path();
   }


@@ -1018,44 +1048,83 @@
           data-testid="project-assistant-f3-execute"
           aria-live="polite"
         >
-          <h3 className={styles.cardTitle}>Tentative et recommandation</h3>
+          {(() => {
+            const runningRefreshVisible = isBoundedRunningAttemptRefreshable({
+              attemptStatus: f3Execute.attempt.status,
+              realProcessInvoked: f3Execute.attempt.realProcessInvoked,
+              executionMode: f3Execute.attempt.executionMode,
+              payloadMode: f3Execute.mode,
+              contractStatus: f3Execute.contract.status,
+            });
+            const attemptLabel = attemptStatusUserLabel(
+              f3Execute.attempt.status,
+            );
+            return (
+              <>
+          <h3
+            className={styles.cardTitle}
+            data-testid={
+              runningRefreshVisible ? "f3-running-refresh-title" : undefined
+            }
+          >
+            {runningRefreshVisible
+              ? BOUNDED_RUNNING_REFRESH_TITLE
+              : "Tentative et recommandation"}
+          </h3>
           <div className={styles.f3Labels} data-testid="f3-execute-labels">
-            <StatusPill tone="muted">Aucune exécution réelle</StatusPill>
-            <StatusPill tone="blueFlush">
-              Recommandation — pas une décision
-            </StatusPill>
-            <StatusPill
-              tone={recommendationFreshness.status === "stale" ? "orange" : "muted"}
-            >
-              {recommendationFreshness.label}
-            </StatusPill>
+            {runningRefreshVisible ? (
+              <StatusPill tone="blueFlush">Exécution déjà autorisée</StatusPill>
+            ) : (
+              <StatusPill tone="muted">Aucune exécution réelle</StatusPill>
+            )}
+            {runningRefreshVisible ? null : (
+              <StatusPill tone="blueFlush">
+                Recommandation — pas une décision
+              </StatusPill>
+            )}
+            {runningRefreshVisible ? null : (
+              <StatusPill
+                tone={recommendationFreshness.status === "stale" ? "orange" : "muted"}
+              >
+                {recommendationFreshness.label}
+              </StatusPill>
+            )}
           </div>

           <div data-testid="f3-attempt-card" className={styles.f3Subcard}>
             <h4 className={styles.cardTitle}>Tentative</h4>
-            {(() => {
-              const attemptLabel = attemptStatusUserLabel(
-                f3Execute.attempt.status,
-              );
-              return (
-                <>
-                  <p data-testid="f3-attempt-status-label">
-                    {attemptLabel.label}
-                  </p>
-                  {!attemptLabel.blockedBeforeExecution ? (
-                    <p data-testid="f3-attempt-id">{f3Execute.attempt.attemptId}</p>
-                  ) : (
-                    <p data-testid="f3-attempt-id-omitted">
-                      Identifiant de tentative non affiché (bloqué avant
-                      exécution).
-                    </p>
-                  )}
-                  <p data-testid="f3-attempt-status">{f3Execute.attempt.status}</p>
-                </>
-              );
-            })()}
+            <p data-testid="f3-attempt-status-label">{attemptLabel.label}</p>
+            {!attemptLabel.blockedBeforeExecution ? (
+              <p data-testid="f3-attempt-id">{f3Execute.attempt.attemptId}</p>
+            ) : (
+              <p data-testid="f3-attempt-id-omitted">
+                Identifiant de tentative non affiché (bloqué avant
+                exécution).
+              </p>
+            )}
+            <p data-testid="f3-attempt-status">{f3Execute.attempt.status}</p>
           </div>

+          {runningRefreshVisible ? (
+            <>
+              <p
+                className={styles.processLocal}
+                data-testid="f3-running-refresh-help"
+              >
+                {BOUNDED_RUNNING_REFRESH_HELP}
+              </p>
+              <button
+                type="button"
+                className={styles.f3Button}
+                data-testid="f3-refresh-running-button"
+                disabled={!canRefreshResolvedM3Running}
+                onClick={() => refreshResolvedM3RunningAttempt()}
+              >
+                {BOUNDED_RUNNING_REFRESH_ACTION}
+              </button>
+            </>
+          ) : (
+            <>
           <div data-testid="f3-evidence-card" className={styles.f3Subcard}>
             <h4 className={styles.cardTitle}>Evidence</h4>
             <p data-testid="f3-evidence-id">{f3Execute.evidence.evidenceId}</p>
@@ -1099,6 +1168,11 @@
             </p>
             <p data-testid="f3-no-ready-claim">PAS DE CLAIM READY</p>
           </div>
+            </>
+          )}
+              </>
+            );
+          })()}
         </section>
       ) : null}


```

### 13.5 presentationLabels.test.ts

```diff
--- /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/.tmp-sfia-review/real-async-continuation-ui-fix/pre/projects__sfia-studio__app____tests____project-assistant__presentationLabels.test.ts	2026-08-17 12:44:08
+++ /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/app/__tests__/project-assistant/presentationLabels.test.ts	2026-08-17 12:48:01
@@ -2,6 +2,7 @@
 import {
   attemptStatusUserLabel,
   deriveRecommendationFreshness,
+  isBoundedRunningAttemptRefreshable,
   shouldShowProjectRecovery,
 } from "@/features/project-assistant/presentationLabels";

@@ -162,3 +163,49 @@
     expect(blocked.blockedBeforeExecution).toBe(true);
   });
 });
+
+describe("bounded running Attempt refreshability", () => {
+  const runningReal = {
+    attemptStatus: "running",
+    realProcessInvoked: true,
+    executionMode: "cursor_cli_real",
+    payloadMode: "CURSOR_CLI_REAL",
+    contractStatus: "executing",
+  };
+
+  it("allows refresh only for an already-authorized bounded REAL running Attempt", () => {
+    expect(isBoundedRunningAttemptRefreshable(runningReal)).toBe(true);
+  });
+
+  it("rejects fixture, pre-confirmation, and terminal payloads", () => {
+    expect(isBoundedRunningAttemptRefreshable(null)).toBe(false);
+    expect(
+      isBoundedRunningAttemptRefreshable({
+        ...runningReal,
+        payloadMode: "FIXTURE",
+        executionMode: "fixture",
+        realProcessInvoked: false,
+        attemptStatus: "succeeded",
+        contractStatus: "executed",
+      }),
+    ).toBe(false);
+    expect(
+      isBoundedRunningAttemptRefreshable({
+        ...runningReal,
+        attemptStatus: "succeeded",
+      }),
+    ).toBe(false);
+    expect(
+      isBoundedRunningAttemptRefreshable({
+        ...runningReal,
+        realProcessInvoked: false,
+      }),
+    ).toBe(false);
+    expect(
+      isBoundedRunningAttemptRefreshable({
+        ...runningReal,
+        contractStatus: "prepared",
+      }),
+    ).toBe(false);
+  });
+});

```

### 13.6 ProjectAssistantPanel.test.tsx

```diff
--- /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/.tmp-sfia-review/real-async-continuation-ui-fix/pre/projects__sfia-studio__app____tests____project-assistant__ProjectAssistantPanel.test.tsx	2026-08-17 12:44:08
+++ /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx	2026-08-17 12:48:14
@@ -17,12 +17,16 @@
   projectAssistantDecideActionMock,
   projectAssistantPrepareF3FixtureActionMock,
   projectAssistantConfirmAndExecuteF3FixtureActionMock,
+  projectAssistantPrepareResolvedM3ActionMock,
+  projectAssistantConfirmAndExecuteResolvedM3ActionMock,
   projectAssistantRehydrateEvidenceOutcomeActionMock,
 } = vi.hoisted(() => ({
   projectAssistantSendActionMock: vi.fn(),
   projectAssistantDecideActionMock: vi.fn(),
   projectAssistantPrepareF3FixtureActionMock: vi.fn(),
   projectAssistantConfirmAndExecuteF3FixtureActionMock: vi.fn(),
+  projectAssistantPrepareResolvedM3ActionMock: vi.fn(),
+  projectAssistantConfirmAndExecuteResolvedM3ActionMock: vi.fn(),
   projectAssistantRehydrateEvidenceOutcomeActionMock: vi.fn(),
 }));

@@ -35,6 +39,10 @@
     projectAssistantPrepareF3FixtureActionMock(...args),
   projectAssistantConfirmAndExecuteF3FixtureAction: (...args: unknown[]) =>
     projectAssistantConfirmAndExecuteF3FixtureActionMock(...args),
+  projectAssistantPrepareResolvedM3Action: (...args: unknown[]) =>
+    projectAssistantPrepareResolvedM3ActionMock(...args),
+  projectAssistantConfirmAndExecuteResolvedM3Action: (...args: unknown[]) =>
+    projectAssistantConfirmAndExecuteResolvedM3ActionMock(...args),
   projectAssistantRehydrateEvidenceOutcomeAction: (...args: unknown[]) =>
     projectAssistantRehydrateEvidenceOutcomeActionMock(...args),
 }));
@@ -189,6 +197,8 @@
     projectAssistantDecideActionMock.mockReset();
     projectAssistantPrepareF3FixtureActionMock.mockReset();
     projectAssistantConfirmAndExecuteF3FixtureActionMock.mockReset();
+    projectAssistantPrepareResolvedM3ActionMock.mockReset();
+    projectAssistantConfirmAndExecuteResolvedM3ActionMock.mockReset();
     projectAssistantRehydrateEvidenceOutcomeActionMock.mockReset();
     projectAssistantRehydrateEvidenceOutcomeActionMock.mockResolvedValue(
       NO_EVIDENCE_OUTCOME,
@@ -437,6 +447,8 @@
     projectAssistantDecideActionMock.mockReset();
     projectAssistantPrepareF3FixtureActionMock.mockReset();
     projectAssistantConfirmAndExecuteF3FixtureActionMock.mockReset();
+    projectAssistantPrepareResolvedM3ActionMock.mockReset();
+    projectAssistantConfirmAndExecuteResolvedM3ActionMock.mockReset();
     projectAssistantRehydrateEvidenceOutcomeActionMock.mockReset();
     projectAssistantRehydrateEvidenceOutcomeActionMock.mockResolvedValue(
       NO_EVIDENCE_OUTCOME,

```

### 13.7 runningAttemptRefresh.ui.test.tsx (nouveau)

```diff
--- /dev/null	2026-08-17 12:54:11
+++ /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/app/__tests__/pre-m6-product-ui/runningAttemptRefresh.ui.test.tsx	2026-08-17 12:53:00
@@ -0,0 +1,880 @@
+/**
+ * ZERO REAL — Option A UI reachability for an already-authorized running Attempt.
+ * @vitest-environment jsdom
+ */
+import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
+import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
+import { ConversationSurface } from "@/features/pre-m6-product-ui/surfaces/ConversationSurface";
+import {
+  useProductConversation,
+  type ProductConversationController,
+} from "@/features/pre-m6-product-ui/hooks/useProductConversation";
+import type { F3ExecutePayload } from "@/features/project-assistant/f3/types";
+import type { F3M3ResolvedPayload } from "@/features/project-assistant/f3/prepareAndResolveM3ProductPath";
+import {
+  BOUNDED_RUNNING_REFRESH_ACTION,
+  BOUNDED_RUNNING_REFRESH_HELP,
+  BOUNDED_RUNNING_REFRESH_TITLE,
+} from "@/features/project-assistant/presentationLabels";
+
+const {
+  projectAssistantSendActionMock,
+  projectAssistantDecideActionMock,
+  projectAssistantPrepareF3FixtureActionMock,
+  projectAssistantConfirmAndExecuteF3FixtureActionMock,
+  projectAssistantPrepareResolvedM3ActionMock,
+  projectAssistantConfirmAndExecuteResolvedM3ActionMock,
+  projectAssistantRehydrateEvidenceOutcomeActionMock,
+} = vi.hoisted(() => ({
+  projectAssistantSendActionMock: vi.fn(),
+  projectAssistantDecideActionMock: vi.fn(),
+  projectAssistantPrepareF3FixtureActionMock: vi.fn(),
+  projectAssistantConfirmAndExecuteF3FixtureActionMock: vi.fn(),
+  projectAssistantPrepareResolvedM3ActionMock: vi.fn(),
+  projectAssistantConfirmAndExecuteResolvedM3ActionMock: vi.fn(),
+  projectAssistantRehydrateEvidenceOutcomeActionMock: vi.fn(),
+}));
+
+vi.mock("@/features/project-assistant/actions", () => ({
+  projectAssistantSendAction: (...args: unknown[]) =>
+    projectAssistantSendActionMock(...args),
+  projectAssistantDecideAction: (...args: unknown[]) =>
+    projectAssistantDecideActionMock(...args),
+  projectAssistantPrepareF3FixtureAction: (...args: unknown[]) =>
+    projectAssistantPrepareF3FixtureActionMock(...args),
+  projectAssistantConfirmAndExecuteF3FixtureAction: (...args: unknown[]) =>
+    projectAssistantConfirmAndExecuteF3FixtureActionMock(...args),
+  projectAssistantPrepareResolvedM3Action: (...args: unknown[]) =>
+    projectAssistantPrepareResolvedM3ActionMock(...args),
+  projectAssistantConfirmAndExecuteResolvedM3Action: (...args: unknown[]) =>
+    projectAssistantConfirmAndExecuteResolvedM3ActionMock(...args),
+  projectAssistantRehydrateEvidenceOutcomeAction: (...args: unknown[]) =>
+    projectAssistantRehydrateEvidenceOutcomeActionMock(...args),
+}));
+
+const PROJECT_ID = "prj:async-refresh";
+const DECISION_ID = "dec:f2:453ff36a-ac4b-459c-9d75-6f366676db96";
+const CONTRACT_ID = "xct:m3-res:dec:f2:453ff36a-ac4b-459c-9d75-6f366676db96";
+const ATTEMPT_ID = "xat:m3:m3-res:dec:f2:453ff36a-ac4b-459c-9d75-6f366676db96";
+
+const NO_EVIDENCE_OUTCOME = {
+  ok: false as const,
+  status: "rehydrate_error" as const,
+  code: "NO_EVIDENCE_OUTCOME_REFS",
+  message: "Aucune référence Evidence/ReviewBundle sur le LPS courant.",
+  mode: "fixture" as const,
+  retryable: false,
+};
+
+const F3_LABELS = {
+  fixtureNoReal: "FIXTURE — AUCUNE EXÉCUTION RÉELLE",
+  noGitWrite: "AUCUN GIT WRITE PRODUIT",
+  recommendationNotDecision: "RECOMMANDATION — PAS UNE DÉCISION MORRIS",
+  cursorRealBlocked: "CURSOR REAL BLOQUÉ",
+  hardOpen: "HARD R-T-A3-1 / R-T-A3-2 OPEN",
+} as const;
+
+function baseController(
+  overrides: Partial<ProductConversationController>,
+): ProductConversationController {
+  return {
+    listRef: { current: null },
+    messages: [],
+    draft: "",
+    setDraft: () => undefined,
+    toolEvents: [],
+    uiState: "ANSWERED",
+    error: null,
+    modeLabel: "MODE À CONFIRMER",
+    ephemeralNotice: "",
+    f2: null,
+    activeProposal: null,
+    reservesText: "",
+    setReservesText: () => undefined,
+    f3Prepare: null,
+    f3M3Resolved: null,
+    f3Execute: null,
+    durableEvidenceOutcome: null,
+    durableRehydrateError: null,
+    busy: false,
+    blocked: false,
+    canSend: false,
+    gateOpen: false,
+    recommendationFreshness: {
+      status: "undetermined",
+      label: "Recommandation — actualité non déterminée",
+    },
+    qualificationFreshness: {
+      status: "undetermined",
+      label: "Recommandation — actualité non déterminée",
+    },
+    durableOutcomeFreshness: {
+      status: "undetermined",
+      label: "Recommandation — actualité non déterminée",
+    },
+    canPrepareResolvedM3: false,
+    canPrepareLegacyFixture: false,
+    canConfirmResolvedM3: false,
+    canConfirmLegacyFixture: false,
+    canRefreshResolvedM3Running: false,
+    sendMessage: () => undefined,
+    decide: () => undefined,
+    prepareResolvedM3: () => undefined,
+    prepareLegacyFixture: () => undefined,
+    confirmAndExecuteResolvedM3: () => undefined,
+    confirmAndExecuteLegacyFixture: () => undefined,
+    refreshResolvedM3RunningAttempt: () => undefined,
+    retryLastUserMessage: () => undefined,
+    ...overrides,
+  } as ProductConversationController;
+}
+
+function runningExecute(overrides: Partial<F3ExecutePayload> = {}): F3ExecutePayload {
+  return {
+    turnKind: "f3_execute",
+    mode: "CURSOR_CLI_REAL",
+    proposal: null,
+    decisionId: DECISION_ID,
+    contract: {
+      executionContractId: CONTRACT_ID,
+      version: 2,
+      status: "executing",
+      action: "cursor.read_only.inspect",
+      target: "workspace.isolated.read",
+      scope: "studio.m4.real_off",
+      requiredAuthority: "N2",
+      mode: "CURSOR_CLI_REAL",
+      constraints: [],
+    },
+    attempt: {
+      attemptId: ATTEMPT_ID,
+      status: "running",
+      selectedAgentRef: "agt:m4-cursor-cli-real",
+      adapterId: "adp:m4-cursor-cli-real",
+      adapterRef: "adp:m4-cursor-cli-real",
+      executionMode: "cursor_cli_real",
+      realProcessInvoked: true,
+      externalEffects: false,
+      resultRef: null,
+      launchCount: 1,
+      selectionStrategy: "capabilities_deterministic",
+      mode: "CURSOR_CLI_REAL",
+    },
+    evidence: {
+      evidenceId: "ev:pending-real",
+      status: "pending",
+      sourceKind: "execution_attempt",
+      technicalResultRef: null,
+      verified: false,
+      mode: "CURSOR_CLI_REAL",
+    },
+    reviewBundle: {
+      reviewBundleId: "rb:pending-real",
+      status: "pending",
+      version: 0,
+      evidenceRefs: [],
+      mode: "CURSOR_CLI_REAL",
+    },
+    recommendation: {
+      kind: "recommendation",
+      status: "pending",
+      executionAuthority: false,
+      gateConsumed: false,
+      decisionCreated: false,
+      attemptAutoLaunchNextCycle: false,
+      openHardReservationRefs: [],
+      hardBlockers: [],
+      nextGateCode: null,
+      nextActionCode: null,
+      recommendationLabel: F3_LABELS.recommendationNotDecision,
+      mode: "CURSOR_CLI_REAL",
+    },
+    reusedExistingAttempt: false,
+    executionPerformed: true,
+    realExecution: true,
+    gitWritePerformed: false,
+    labels: F3_LABELS,
+    processLocalNotice: "pending",
+    disclosures: [],
+    ...overrides,
+  };
+}
+
+function succeededExecute(): F3ExecutePayload {
+  return runningExecute({
+    reusedExistingAttempt: true,
+    contract: {
+      executionContractId: CONTRACT_ID,
+      version: 2,
+      status: "executed",
+      action: "cursor.read_only.inspect",
+      target: "workspace.isolated.read",
+      scope: "studio.m4.real_off",
+      requiredAuthority: "N2",
+      mode: "CURSOR_CLI_REAL",
+      constraints: [],
+    },
+    attempt: {
+      attemptId: ATTEMPT_ID,
+      status: "succeeded",
+      selectedAgentRef: "agt:m4-cursor-cli-real",
+      adapterId: "adp:m4-cursor-cli-real",
+      adapterRef: "adp:m4-cursor-cli-real",
+      executionMode: "cursor_cli_real",
+      realProcessInvoked: true,
+      externalEffects: false,
+      resultRef: "res:m4:done",
+      launchCount: 1,
+      selectionStrategy: "capabilities_deterministic",
+      mode: "CURSOR_CLI_REAL",
+    },
+    evidence: {
+      evidenceId: "ev:real-terminal",
+      status: "available",
+      sourceKind: "execution_attempt",
+      technicalResultRef: "res:m4:done",
+      verified: false,
+      mode: "CURSOR_CLI_REAL",
+    },
+    reviewBundle: {
+      reviewBundleId: "rb:real-terminal",
+      status: "composed",
+      version: 1,
+      evidenceRefs: ["ev:real-terminal"],
+      mode: "CURSOR_CLI_REAL",
+    },
+    recommendation: {
+      kind: "recommendation",
+      status: "available",
+      executionAuthority: false,
+      gateConsumed: false,
+      decisionCreated: false,
+      attemptAutoLaunchNextCycle: false,
+      openHardReservationRefs: [],
+      hardBlockers: [],
+      nextGateCode: null,
+      nextActionCode: null,
+      recommendationLabel: F3_LABELS.recommendationNotDecision,
+      mode: "CURSOR_CLI_REAL",
+    },
+  });
+}
+
+function fixtureExecute(): F3ExecutePayload {
+  return runningExecute({
+    mode: "FIXTURE",
+    contract: {
+      executionContractId: "xct:fixture",
+      version: 1,
+      status: "executed",
+      action: "fixture-docs-prepare",
+      target: "sfia-studio/f3-fixture-only",
+      scope: "f3-fixture:docs+metadata-only",
+      requiredAuthority: "N2",
+      mode: "FIXTURE",
+      constraints: [],
+    },
+    attempt: {
+      attemptId: "xat:fixture",
+      status: "succeeded",
+      selectedAgentRef: "agt:f3-fixture",
+      adapterId: "adp:f3-test-fixture",
+      adapterRef: "adp:f3-test-fixture",
+      executionMode: "fixture",
+      realProcessInvoked: false,
+      externalEffects: false,
+      resultRef: "res:fixture",
+      launchCount: 1,
+      selectionStrategy: "capabilities_deterministic",
+      mode: "FIXTURE",
+    },
+    evidence: {
+      evidenceId: "ev:fixture",
+      status: "available",
+      sourceKind: "execution_attempt",
+      technicalResultRef: "res:fixture",
+      verified: false,
+      mode: "FIXTURE",
+    },
+    reviewBundle: {
+      reviewBundleId: "rb:fixture",
+      status: "composed",
+      version: 1,
+      evidenceRefs: ["ev:fixture"],
+      mode: "FIXTURE",
+    },
+  });
+}
+
+const RESOLVED_M3 = {
+  turnKind: "f3_m3_resolved",
+  mode: "M3_RESOLVED_BOUNDED_READ_ONLY",
+  decisionId: DECISION_ID,
+  projectId: PROJECT_ID,
+  original: {
+    executionContractId: "xct:m3:dec:f2:453ff36a-ac4b-459c-9d75-6f366676db96",
+  },
+  successor: {
+    executionContractId: CONTRACT_ID,
+    version: 2,
+    status: "prepared",
+    action: "cursor.read_only.inspect",
+    target: "workspace.isolated.read",
+    scope: "studio.m4.real_off",
+    requiredAuthority: "N2",
+  },
+} as unknown as F3M3ResolvedPayload;
+
+function Harness() {
+  const controller = useProductConversation({ projectId: PROJECT_ID });
+  return <ConversationSurface controller={controller} />;
+}
+
+const PROJECT_CTX = {
+  projectId: PROJECT_ID,
+  name: "Refresh UI",
+  shortReference: "RUI",
+  objective: "Reachability",
+  contextSummary: "ZERO REAL",
+  criticality: "STANDARD",
+  constraints: [] as string[],
+  lpsId: "lps:refresh",
+  lpsVersion: 1,
+  lpsCreatedAt: "2026-08-17T10:00:00.000Z",
+  doctrineId: "pkg:studio-v3-oa",
+  doctrineVersion: "1.0.0",
+  doctrineDigest: "digest:refresh",
+  doctrineStatus: "RESOLVED",
+  runtimeMode: "LOCAL_PROCESS",
+  persistence: "PARTIAL_PROJECT_LPS_CYCLE_DECISION_CONTRACT_DURABLE",
+  readiness: "NOT_READY",
+};
+
+describe("Option A running Attempt refresh UI", () => {
+  afterEach(() => {
+    cleanup();
+  });
+
+  it("hides Confirmer and shows Actualiser le résultat for a running REAL Attempt", () => {
+    const onRefresh = vi.fn();
+    render(
+      <ConversationSurface
+        controller={baseController({
+          f3M3Resolved: RESOLVED_M3,
+          f3Execute: runningExecute(),
+          canRefreshResolvedM3Running: true,
+          refreshResolvedM3RunningAttempt: onRefresh,
+        })}
+      />,
+    );
+
+    expect(screen.queryByTestId("f3-confirm-execute-button")).toBeNull();
+    expect(screen.getByTestId("f3-running-refresh-title")).toHaveTextContent(
+      BOUNDED_RUNNING_REFRESH_TITLE,
+    );
+    expect(screen.getByTestId("f3-running-refresh-help")).toHaveTextContent(
+      BOUNDED_RUNNING_REFRESH_HELP,
+    );
+    const refresh = screen.getByTestId("f3-refresh-running-button");
+    expect(refresh).toHaveTextContent(BOUNDED_RUNNING_REFRESH_ACTION);
+    expect(refresh).toBeEnabled();
+    expect(screen.queryByTestId("f3-evidence-card")).toBeNull();
+    expect(screen.queryByRole("button", { name: /confirmer/i })).toBeNull();
+    expect(screen.queryByRole("button", { name: /relancer|réessayer/i })).toBeNull();
+    expect(refresh.textContent ?? "").not.toMatch(/confirmer|relancer|réessayer/i);
+
+    fireEvent.click(refresh);
+    expect(onRefresh).toHaveBeenCalledTimes(1);
+  });
+
+  it("keeps the refresh control when continuation stays running", () => {
+    render(
+      <ConversationSurface
+        controller={baseController({
+          f3M3Resolved: RESOLVED_M3,
+          f3Execute: runningExecute({ reusedExistingAttempt: true }),
+          canRefreshResolvedM3Running: true,
+        })}
+      />,
+    );
+    expect(screen.getByTestId("f3-refresh-running-button")).toBeEnabled();
+    expect(screen.getByTestId("f3-attempt-status")).toHaveTextContent("running");
+    expect(screen.getByTestId("f3-attempt-id")).toHaveTextContent(ATTEMPT_ID);
+  });
+
+  it("shows Evidence/ReviewBundle and hides refresh after a terminal payload", () => {
+    render(
+      <ConversationSurface
+        controller={baseController({
+          f3M3Resolved: RESOLVED_M3,
+          f3Execute: succeededExecute(),
+          canRefreshResolvedM3Running: false,
+        })}
+      />,
+    );
+    expect(screen.queryByTestId("f3-refresh-running-button")).toBeNull();
+    expect(screen.queryByTestId("f3-running-refresh-title")).toBeNull();
+    expect(screen.getByTestId("f3-evidence-id")).toHaveTextContent("ev:real-terminal");
+    expect(screen.getByTestId("f3-review-bundle-id")).toHaveTextContent(
+      "rb:real-terminal",
+    );
+    expect(screen.getByTestId("f3-recommendation-card")).toBeInTheDocument();
+  });
+
+  it("does not offer refresh on fixture terminal or before Confirmation", () => {
+    const { rerender } = render(
+      <ConversationSurface
+        controller={baseController({
+          f3Execute: fixtureExecute(),
+        })}
+      />,
+    );
+    expect(screen.queryByTestId("f3-refresh-running-button")).toBeNull();
+    expect(screen.getByTestId("f3-evidence-card")).toBeInTheDocument();
+
+    rerender(
+      <ConversationSurface
+        controller={baseController({
+          f3M3Resolved: RESOLVED_M3,
+          canConfirmResolvedM3: true,
+        })}
+      />,
+    );
+    expect(screen.getByTestId("f3-confirm-execute-button")).toBeEnabled();
+    expect(screen.queryByTestId("f3-refresh-running-button")).toBeNull();
+  });
+
+  it("disables refresh while busy to block concurrent clicks", () => {
+    const onRefresh = vi.fn();
+    render(
+      <ConversationSurface
+        controller={baseController({
+          f3M3Resolved: RESOLVED_M3,
+          f3Execute: runningExecute(),
+          busy: true,
+          canRefreshResolvedM3Running: false,
+          refreshResolvedM3RunningAttempt: onRefresh,
+        })}
+      />,
+    );
+    const refresh = screen.getByTestId("f3-refresh-running-button");
+    expect(refresh).toBeDisabled();
+    fireEvent.click(refresh);
+    expect(onRefresh).not.toHaveBeenCalled();
+  });
+});
+
+describe("Option A running Attempt refresh uses the canonical M3 action", () => {
+  beforeEach(() => {
+    projectAssistantSendActionMock.mockReset();
+    projectAssistantDecideActionMock.mockReset();
+    projectAssistantPrepareF3FixtureActionMock.mockReset();
+    projectAssistantConfirmAndExecuteF3FixtureActionMock.mockReset();
+    projectAssistantPrepareResolvedM3ActionMock.mockReset();
+    projectAssistantConfirmAndExecuteResolvedM3ActionMock.mockReset();
+    projectAssistantRehydrateEvidenceOutcomeActionMock.mockReset();
+    projectAssistantRehydrateEvidenceOutcomeActionMock.mockResolvedValue(
+      NO_EVIDENCE_OUTCOME,
+    );
+  });
+
+  afterEach(() => {
+    cleanup();
+  });
+
+  it("confirms once then refreshes the SAME ids; pending stays running; terminal shows Evidence", async () => {
+    const proposal = {
+      proposalId: "prp:refresh",
+      status: "DECISION_REQUIRED",
+      rephrasedRequest: "Inspect",
+      objective: "Inspect",
+      cycleTypeId: "cycle:inc",
+      recommendedProfile: "Standard",
+      rationale: "test",
+      scope: "read-only",
+      outOfScope: [],
+      activatedBlocks: [],
+      expectedOutcome: "ok",
+      sources: [],
+      risks: [],
+      reservations: [],
+      stopConditions: [],
+      morrisGateRequired: true,
+      nextPossibleStep: "Décision",
+      contextSnapshot: {
+        projectId: PROJECT_ID,
+        lpsId: "lps:refresh",
+        lpsVersion: 1,
+        doctrineDigest: "digest:refresh",
+      },
+      processLocalNotice: "process-local",
+      executionForbidden: true,
+      noExecutingStatus: true,
+      agentBinding: "NOT_AVAILABLE",
+    };
+
+    projectAssistantSendActionMock.mockResolvedValue({
+      ok: true,
+      status: "ok",
+      text: "Proposition",
+      mode: "fixture",
+      presentation: "test_provider",
+      toolRounds: 0,
+      toolCalls: 0,
+      sources: [],
+      toolEvents: [],
+      project: PROJECT_CTX,
+      ephemeralNotice: "ephemeral",
+      f2: {
+        turnKind: "f2_proposal",
+        intentClass: "actionable",
+        qualification: {
+          cycleTypeId: "cycle:inc",
+          cycleLabel: "INC",
+          recommendedProfile: "Standard",
+          rationale: "test",
+          criticalSignalsPresent: false,
+          requiresJustificationForCritical: false,
+          capitalizationViaCycleTypeId: false,
+          isMorrisDecision: false,
+          catalogVersion: "1",
+          catalogHash: "h",
+          detailedStatus: "ok",
+          disclosures: [],
+          signals: {
+            structuralChange: false,
+            securityImpact: false,
+            architectureImpact: false,
+            dataImpact: false,
+            irreversible: false,
+            lowRiskBounded: true,
+          },
+          recommendationLabel: "RECOMMANDATION — PAS UNE DÉCISION MORRIS",
+        },
+        proposal,
+        decision: null,
+        labels: {
+          recommendation: "RECOMMANDATION",
+          proposition: "PROPOSITION",
+          decisionRequired: "DÉCISION REQUISE",
+          decisionTaken: null,
+          noExecution: "AUCUNE EXÉCUTION",
+        },
+        executionBlocked: true,
+        processLocalNotice: "process-local",
+      },
+    });
+
+    projectAssistantDecideActionMock.mockResolvedValue({
+      ok: true,
+      status: "ok",
+      text: "GO enregistré",
+      mode: "fixture",
+      presentation: "test_provider",
+      project: PROJECT_CTX,
+      ephemeralNotice: "ephemeral",
+      f2: {
+        turnKind: "f2_decision",
+        intentClass: "actionable",
+        qualification: null,
+        proposal: { ...proposal, status: "APPROVED" },
+        decision: {
+          decisionId: DECISION_ID,
+          proposalId: "prp:refresh",
+          kind: "GO",
+          statusLabel: "DÉCISION PRISE",
+          humanDecisionStatus: "accepted",
+          scope: "read-only",
+          reservesText: null,
+          capturedAt: "2026-08-17T10:00:00.000Z",
+          readyForNextGatedStep: true,
+          executionPerformed: false,
+        },
+        labels: {
+          recommendation: "RECOMMANDATION",
+          proposition: "PROPOSITION",
+          decisionRequired: "DÉCISION REQUISE",
+          decisionTaken: null,
+          noExecution: "AUCUNE EXÉCUTION",
+        },
+        executionBlocked: true,
+        processLocalNotice: "process-local",
+      },
+    });
+
+    projectAssistantPrepareResolvedM3ActionMock.mockResolvedValue({
+      ok: true,
+      status: "ok",
+      text: "Contrat prêt",
+      mode: "fixture",
+      presentation: "unconfirmed",
+      project: PROJECT_CTX,
+      ephemeralNotice: "ephemeral",
+      f3: RESOLVED_M3,
+    });
+
+    projectAssistantConfirmAndExecuteResolvedM3ActionMock
+      .mockResolvedValueOnce({
+        ok: true,
+        status: "ok",
+        text: "Attempt running",
+        mode: "fixture",
+        presentation: "unconfirmed",
+        project: PROJECT_CTX,
+        ephemeralNotice: "ephemeral",
+        f3: runningExecute(),
+      })
+      .mockResolvedValueOnce({
+        ok: true,
+        status: "ok",
+        text: "Still running",
+        mode: "fixture",
+        presentation: "unconfirmed",
+        project: PROJECT_CTX,
+        ephemeralNotice: "ephemeral",
+        f3: runningExecute({ reusedExistingAttempt: true }),
+      })
+      .mockResolvedValueOnce({
+        ok: true,
+        status: "ok",
+        text: "Attempt succeeded",
+        mode: "fixture",
+        presentation: "unconfirmed",
+        project: PROJECT_CTX,
+        ephemeralNotice: "ephemeral",
+        f3: succeededExecute(),
+      });
+
+    render(<Harness />);
+
+    fireEvent.change(screen.getByTestId("project-assistant-input"), {
+      target: { value: "Inspecter le workspace" },
+    });
+    fireEvent.click(screen.getByTestId("project-assistant-send"));
+    expect(await screen.findByTestId("f2-decide-GO")).toBeEnabled();
+    fireEvent.click(screen.getByTestId("f2-decide-GO"));
+    expect(await screen.findByTestId("f3-prepare-button")).toBeEnabled();
+    fireEvent.click(screen.getByTestId("f3-prepare-button"));
+    expect(await screen.findByTestId("f3-confirm-execute-button")).toBeEnabled();
+    expect(screen.queryByTestId("f3-refresh-running-button")).toBeNull();
+    fireEvent.click(screen.getByTestId("f3-confirm-execute-button"));
+
+    expect(await screen.findByTestId("f3-refresh-running-button")).toBeEnabled();
+    expect(screen.queryByTestId("f3-confirm-execute-button")).toBeNull();
+    expect(screen.getByTestId("f3-running-refresh-title")).toHaveTextContent(
+      BOUNDED_RUNNING_REFRESH_TITLE,
+    );
+    expect(screen.getByTestId("f3-attempt-id")).toHaveTextContent(ATTEMPT_ID);
+    expect(projectAssistantConfirmAndExecuteResolvedM3ActionMock).toHaveBeenCalledTimes(
+      1,
+    );
+    expect(projectAssistantConfirmAndExecuteResolvedM3ActionMock).toHaveBeenLastCalledWith(
+      {
+        projectId: PROJECT_ID,
+        decisionId: DECISION_ID,
+        executionContractId: CONTRACT_ID,
+        expectedContractVersion: 2,
+      },
+    );
+
+    fireEvent.click(screen.getByTestId("f3-refresh-running-button"));
+    await waitFor(() => {
+      expect(
+        projectAssistantConfirmAndExecuteResolvedM3ActionMock,
+      ).toHaveBeenCalledTimes(2);
+    });
+    expect(projectAssistantConfirmAndExecuteResolvedM3ActionMock).toHaveBeenLastCalledWith(
+      {
+        projectId: PROJECT_ID,
+        decisionId: DECISION_ID,
+        executionContractId: CONTRACT_ID,
+        expectedContractVersion: 2,
+      },
+    );
+    expect(await screen.findByTestId("f3-refresh-running-button")).toBeEnabled();
+    expect(screen.getByTestId("f3-attempt-status")).toHaveTextContent("running");
+    expect(screen.queryByTestId("f3-evidence-card")).toBeNull();
+
+    fireEvent.click(screen.getByTestId("f3-refresh-running-button"));
+    await waitFor(() => {
+      expect(
+        projectAssistantConfirmAndExecuteResolvedM3ActionMock,
+      ).toHaveBeenCalledTimes(3);
+    });
+    expect(await screen.findByTestId("f3-evidence-id")).toHaveTextContent(
+      "ev:real-terminal",
+    );
+    expect(screen.getByTestId("f3-review-bundle-id")).toHaveTextContent(
+      "rb:real-terminal",
+    );
+    expect(screen.queryByTestId("f3-refresh-running-button")).toBeNull();
+    expect(screen.queryByText(/Confirmer l.exécution/i)).toBeNull();
+  });
+
+  it("blocks concurrent refresh double-click before the first call returns", async () => {
+    let release!: (value: unknown) => void;
+    const pending = new Promise((resolve) => {
+      release = resolve;
+    });
+    projectAssistantConfirmAndExecuteResolvedM3ActionMock.mockReturnValue(pending);
+
+    const proposal = {
+      proposalId: "prp:refresh",
+      status: "DECISION_REQUIRED",
+      rephrasedRequest: "Inspect",
+      objective: "Inspect",
+      cycleTypeId: "cycle:inc",
+      recommendedProfile: "Standard",
+      rationale: "test",
+      scope: "read-only",
+      outOfScope: [],
+      activatedBlocks: [],
+      expectedOutcome: "ok",
+      sources: [],
+      risks: [],
+      reservations: [],
+      stopConditions: [],
+      morrisGateRequired: true,
+      nextPossibleStep: "Décision",
+      contextSnapshot: {
+        projectId: PROJECT_ID,
+        lpsId: "lps:refresh",
+        lpsVersion: 1,
+        doctrineDigest: "digest:refresh",
+      },
+      processLocalNotice: "process-local",
+      executionForbidden: true,
+      noExecutingStatus: true,
+      agentBinding: "NOT_AVAILABLE",
+    };
+
+    projectAssistantSendActionMock.mockResolvedValue({
+      ok: true,
+      status: "ok",
+      text: "Proposition",
+      mode: "fixture",
+      presentation: "test_provider",
+      toolRounds: 0,
+      toolCalls: 0,
+      sources: [],
+      toolEvents: [],
+      project: PROJECT_CTX,
+      ephemeralNotice: "ephemeral",
+      f2: {
+        turnKind: "f2_proposal",
+        intentClass: "actionable",
+        qualification: {
+          cycleTypeId: "cycle:inc",
+          cycleLabel: "INC",
+          recommendedProfile: "Standard",
+          rationale: "test",
+          criticalSignalsPresent: false,
+          requiresJustificationForCritical: false,
+          capitalizationViaCycleTypeId: false,
+          isMorrisDecision: false,
+          catalogVersion: "1",
+          catalogHash: "h",
+          detailedStatus: "ok",
+          disclosures: [],
+          signals: {
+            structuralChange: false,
+            securityImpact: false,
+            architectureImpact: false,
+            dataImpact: false,
+            irreversible: false,
+            lowRiskBounded: true,
+          },
+          recommendationLabel: "RECOMMANDATION — PAS UNE DÉCISION MORRIS",
+        },
+        proposal,
+        decision: null,
+        labels: {
+          recommendation: "RECOMMANDATION",
+          proposition: "PROPOSITION",
+          decisionRequired: "DÉCISION REQUISE",
+          decisionTaken: null,
+          noExecution: "AUCUNE EXÉCUTION",
+        },
+        executionBlocked: true,
+        processLocalNotice: "process-local",
+      },
+    });
+    projectAssistantDecideActionMock.mockResolvedValue({
+      ok: true,
+      status: "ok",
+      text: "GO enregistré",
+      mode: "fixture",
+      presentation: "test_provider",
+      project: PROJECT_CTX,
+      ephemeralNotice: "ephemeral",
+      f2: {
+        turnKind: "f2_decision",
+        intentClass: "actionable",
+        qualification: null,
+        proposal: { ...proposal, status: "APPROVED" },
+        decision: {
+          decisionId: DECISION_ID,
+          proposalId: "prp:refresh",
+          kind: "GO",
+          statusLabel: "DÉCISION PRISE",
+          humanDecisionStatus: "accepted",
+          scope: "read-only",
+          reservesText: null,
+          capturedAt: "2026-08-17T10:00:00.000Z",
+          readyForNextGatedStep: true,
+          executionPerformed: false,
+        },
+        labels: {
+          recommendation: "RECOMMANDATION",
+          proposition: "PROPOSITION",
+          decisionRequired: "DÉCISION REQUISE",
+          decisionTaken: null,
+          noExecution: "AUCUNE EXÉCUTION",
+        },
+        executionBlocked: true,
+        processLocalNotice: "process-local",
+      },
+    });
+    projectAssistantPrepareResolvedM3ActionMock.mockResolvedValue({
+      ok: true,
+      status: "ok",
+      text: "Contrat prêt",
+      mode: "fixture",
+      presentation: "unconfirmed",
+      project: PROJECT_CTX,
+      ephemeralNotice: "ephemeral",
+      f3: RESOLVED_M3,
+    });
+
+    render(<Harness />);
+    fireEvent.change(screen.getByTestId("project-assistant-input"), {
+      target: { value: "Inspecter" },
+    });
+    fireEvent.click(screen.getByTestId("project-assistant-send"));
+    fireEvent.click(await screen.findByTestId("f2-decide-GO"));
+    fireEvent.click(await screen.findByTestId("f3-prepare-button"));
+    const confirm = await screen.findByTestId("f3-confirm-execute-button");
+    fireEvent.click(confirm);
+    fireEvent.click(confirm);
+    expect(projectAssistantConfirmAndExecuteResolvedM3ActionMock).toHaveBeenCalledTimes(
+      1,
+    );
+    release({
+      ok: true,
+      status: "ok",
+      text: "Attempt running",
+      mode: "fixture",
+      presentation: "unconfirmed",
+      project: PROJECT_CTX,
+      ephemeralNotice: "ephemeral",
+      f3: runningExecute(),
+    });
+    const refresh = await screen.findByTestId("f3-refresh-running-button");
+    await waitFor(() => {
+      expect(refresh).toBeEnabled();
+    });
+    expect(projectAssistantConfirmAndExecuteResolvedM3ActionMock).toHaveBeenCalledTimes(
+      1,
+    );
+  });
+});

```

## 14. Comportement UI PRE/POST

PRE :
- Attempt running → carte « Tentative et recommandation »
- « Confirmer l’exécution » absent (`!f3Execute`)
- aucun bouton d’actualisation
- placeholders Evidence/RB pending visibles

POST (payload bounded REAL + Attempt.status=`running` + `realProcessInvoked=true` + contract.status=`executing`) :
- titre **Exécution en cours** (`data-testid="f3-running-refresh-title"`)
- aide : *L’exécution est déjà autorisée. Cette action vérifie son résultat sans la relancer.*
- action **Actualiser le résultat** (`data-testid="f3-refresh-running-button"`)
- « Confirmer l’exécution » reste absent (Confirmation déjà donnée)
- pas de wording Relancer / Réessayer / Confirmer sur l’action
- Evidence/RB/Recommendation session masqués tant que running refreshable
- pending refresh : UI reste running, bouton reste disponible après busy
- terminal succeeded : Evidence/RB existants s’affichent, bouton disparaît
- fixture terminale / avant Confirmation : pas de bouton refresh
- busy / in-flight ref : double-click bloqué

## 15. Action backend réellement réutilisée

`refreshResolvedM3RunningAttempt` et `confirmAndExecuteResolvedM3` partagent `invokeCanonicalResolvedM3Path()` :

`projectAssistantConfirmAndExecuteResolvedM3Action` (existante)
→ `confirmAndExecuteResolvedM3`
→ détection SAME running Attempt
→ `finishBoundedAttempt({ reusedExistingAttempt: true })`
→ `completeBoundedReadOnlyLaunch`

Pas de nouvelle Confirmation. Pas de Gate D manuel. Pas de StartExecution manuel. Pas de duplication de `completeBoundedReadOnlyLaunch`. Pas d’accès runner / safety journal. Pas de nouveau service/domain port. `actions.ts` inchangé.

IDs transmis (première confirm et refresh) :
- same `projectId`
- same `decisionId` (`f3M3Resolved.decisionId`)
- same `executionContractId` (`f3M3Resolved.successor.executionContractId`)
- same `expectedContractVersion`

## 16. Preuves invariants (déterministes)

Domaine — `T-R3-ASYNC-CONTINUATION` (fichier **non modifié**, 12/12 PASS) :
- first call running
- same Attempt on continuation
- `reusedExistingAttempt=true`
- `launchCallCount=1`
- 1 CREATED / 1 LAUNCHED
- terminal Evidence/RB
- Nora once after terminal
- LPS rehydrate

UI — `runningAttemptRefresh.ui.test.tsx` (7/7 PASS) :
- Confirm absent après running
- Exécution en cours + Actualiser le résultat
- clic refresh → **même** `projectAssistantConfirmAndExecuteResolvedM3Action` avec same projectId/decisionId/executionContractId
- pending : running + bouton reste
- terminal : Evidence/RB, refresh disparaît
- fixture / pre-confirm : pas de refresh
- busy + in-flight : pas de second appel concurrent

Donc : same Decision / same Contract / same Attempt / Confirmation unchanged / Gate D unchanged / Attempt count = 1 / CREATED = 1 / LAUNCHED = 1 / launch = 1 — au niveau domaine déjà prouvé ; l’UI n’ajoute pas de nouveau launch path.

## 17. Tests

| Suite | Résultat |
|---|---|
| UI targeted (`runningAttemptRefresh.ui.test.tsx` + presentationLabels + ProjectAssistantPanel) | PASS 29 |
| `preM6.realProductWiringResidual.test.ts` (R3 async inclus) | PASS 12 |
| `preM6.realProductWiringAmend.test.ts` | PASS 11 |
| `qa-pre-m6-01.finalHardening.test.ts` | PASS 12 |
| `qa-pre-m6-01.postGoDurableM3Path.test.ts` | PASS 5 |
| ProjectAssistant related (`f3.fixtureVerticalSlice` + importBoundaries) | PASS 12 |
| full Vitest | **192 passed / 13 skipped / 1817 tests passed / 131 skipped** |
| typecheck | PASS |
| lint | PASS |
| build | PASS |

Browser E2E complet : **non exécuté** (critère du Cycle 9 déterministe suivant, pas de ce Delivery).

## 18. ZERO REAL env

```
SFIA_STUDIO_CURSOR_REAL unset
OPS1_CURSOR_REAL unset
SFIA_STUDIO_PRODUCT_DB_PATH unset (tests : mkdtemp NODE_ENV=test)
OPS1_CONVERSATION_PROVIDER=fake
```

- OpenAI live : 0
- Cursor REAL : 0
- NodeCursorProcessRunner live : 0
- nouveau worktree REAL : 0
- ancien worktree REAL : **intact**
  `projects/sfia-studio/.sfia-exec/m4-worktrees/wt-xat_m3_m3-res_dec_f2_453ff36a-ac4b-459c-9d75-6f3-7dda85f19447a529bfe21555`
  HEAD `0d334785…`, porcelain empty, non supprimé / non nettoyé / non réutilisé

## 19. Contrôle de scope

Micro-cycle snapshots : `.tmp-sfia-review/real-async-continuation-ui-fix/`

POST ne diffère du PRE que sur les fichiers listés §12. `actions.ts` / CSS / residual test / C9 remainder : byte-identical.

## 20. Réserves

- Ce cycle n’a **pas** observé un Attempt REAL live jusqu’au terminal. Il rend la continuation **atteignable** depuis l’UI Option A.
- L’Attempt REAL historique (`xat:m3:m3-res:dec:f2:453ff36a-…`) reste `running` dans sa DB isolée ; non touché.
- `awaitCompletion` du launch port reste synchrone côté backend (déjà existant). L’UI n’ajoute aucun poller. Si le process REAL est encore pending, un clic d’actualisation peut rester `running` jusqu’à observation terminale.
- `presentationLabels.ts` n’était pas dans la liste « fichier principal » du contrat ; il est un helper de présentation UI partagé, nécessaire pour wording + prédicat unique Option A / legacy, sans primitive domaine.
- Les surfaces Option A (`ConversationSurface` / `useProductConversation`) étaient le chemin réellement bloqué par le FIRST REAL ; les modifier était nécessaire pour fermer le blocker identifié. `ProjectAssistantPanel.tsx` (fichier principal listé) a reçu la même sémantique.

## 21. Anti-claims

- Pre-M6 **NON COMPLETE**
- G-UX-11 SATISFIED CANDIDATE, not CLOSED
- FULL REAL PRODUCT LOOP **NOT YET PROVEN**
- READY FOR REAL = **FALSE**
- M6 **NON AUTHORIZED**
- UAT **NOT READY**
- runtime v3 **NON ADOPTED**
- READY FOR REAL interdit comme verdict de ce cycle

## 22. Verdict

```
PASS —
REAL ASYNC COMPLETION PRODUCT REACHABILITY IMPLEMENTED CANDIDATE
RUNNING ATTEMPT CAN BE RESUMED FROM OPTION A UI WITHOUT RECONFIRMATION OR RELAUNCH
DETERMINISTIC SAME-ATTEMPT / ONE-LAUNCH INVARIANTS PASS
ZERO REAL EXECUTED
READY FOR CYCLE 9 DETERMINISTIC BROWSER QA
```

## 23. Next gate

Après revue ChatGPT obligatoire de `origin/sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md` :

**CYCLE 9 — DETERMINISTIC BROWSER QA — ZERO REAL**

Objectif futur : depuis l’UI, running → Actualiser le résultat → SAME Attempt → terminal → Evidence → ReviewBundle → Nora → LPS, launch count = 1.

Une nouvelle tentative FIRST REAL nécessitera un GO Morris distinct.

Ne pas relancer de REAL maintenant.
