# SFIA STUDIO — P6 INTEGRATED PRODUCT ARCHITECTURE RECOVERY
## OPTION B — FIRST-CYCLE LIVE PROGRESSION CORRECTION
### Review Pack FULL — CRITICAL

**Horodatage (UTC):** 2026-10-18T16:13:10Z


---

## 1. GO Morris

- **GO:** Continuation corrective autorisée du même Delivery Option B (D-ARCH-REC-03 consommé).
- **Macro:** STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
- **Chantier:** P6-INTEGRATED-PRODUCT-ARCHITECTURE-RECOVERY
- **Étape:** Option B — FIRST-CYCLE LIVE PROGRESSION CORRECTION
- **Cycle projet:** 8 — Delivery / implémentation
- **Profil:** CRITICAL
- **Typologie:** INC / EVOL — CONTINUATION
- **Capacité principale:** V3-F05 (connexes V3-F06 / F07 / F11 / F12 / F14)
- **Décisions:** D-ARCH-REC-01 OPTION B ADOPTED · D-ARCH-REC-02 Cycle Lifecycle ≠ Generic PREPARE · D-ARCH-REC-03 GO Delivery · D-ARCH-REC-04 documentary sync NON AUTORISÉE
- **Aucun** nouveau macro-cycle / micro-cycle / GO Git Integration / architecture structurante
- **Aucun** push Product / PR Product / merge

---

## 2. Git Truth

| Champ | Valeur |
|---|---|
| Repository | `mcleland147/sfia-workspace` (remote `origin` → github.com/mcleland147/sfia-workspace.git) |
| Worktree | `/Users/morris/Projects/sfia-workspace-p6-arch-recovery-delivery-304e30e8` |
| Branche | `delivery/sfia-studio-p6-integrated-architecture-recovery` |
| HEAD | `304e30e8f9d19fad753a76c7a7b89b5b7e34c3f8` |
| origin/main | `304e30e8f9d19fad753a76c7a7b89b5b7e34c3f8` |
| Base attendue | `304e30e8…` — **COHÉRENT** |
| Working tree | Option B candidate **non commitée** (intentionnelle) |
| Staged | aucun |
| Concurrent worktrees | nombreux hors scope ; Handoff WT: `/Users/morris/Projects/sfia-workspace/sfia-review-handoff` @ `sfia/review-handoff` |

### git status --short (candidat Delivery)

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.arch.cycleLifecycleVsGenericPrepare.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.arch.firstCycleLiveProgression.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.arch.virginFirstCycleJourney.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/f2/conversationWorkflowDiscrimination.ts
?? projects/sfia-studio/app/features/project-assistant/f2/cycleLifecycleConversationCoordinator.ts
?? projects/sfia-studio/app/features/project-assistant/f2/genericExecutionConversationCoordinator.ts
```

### Handoffs antérieurs (référence)

- Delivery Option B continuation: `5c4c551453053a48a83d160d7793378651f63892`
- REAL-FIRST HQA profile: `175e1ab86ed471e9ecd22bfa6788e9a5bad4965d`

**STOP Git:** non déclenché — identité candidat cohérente.

---

## 3. Sources canoniques consultées

PROCESSUS / CONVERGENCE / PRODUCT COMPLETION / P6 / ARCHITECTURE / PRODUCTION RUNTIME REFERENCE / DOCTRINE V3 / REVIEW HANDOFF — listés dans le brief.
Preuve supérieure: **code Git CURRENT** + tests déterministes Product. Snapshots documentaires historiques non autoritaires.

---

## 4. Convergence Pre-check

| Item | État |
|---|---|
| Capacité | V3-F05 Conversation → décision → exécution |
| Milestone | P6 |
| Candidate | Option B locale + correction first-cycle progression |
| Prior Exit | Journey virgin avec Rec **seedée** harness = PASS partiel |
| HQA Nora LIVE | **FAIL** (AtelierNova — preconditions sans Rec) |
| P6 GLOBAL / Runtime v3 | NON ACQUIS / NON ADOPTED |
| KEEP | OA, LPS, ProjectTrajectory, LR, HD, Cycle Lifecycle, Generic Execution, EC, Cursor Gateway, Evidence, ReviewBundle |
| ADAPT | F2 early-return greenfield only (cause démontrée) |
| COMPLETE | Frontière Pilot utterance → Nora Product turn → Rec CURRENT |
| Dette nouvelle | Aucune dette structurante ; Fake Nora borné aux tests DET |

---

## 5. Observation Human QA (AtelierNova)

- **Campagne:** `p6-optionb-fresh-hqa-20261018T153758Z`
- **Runtime:** `http://localhost:3020` — process PID 80617 **encore en écoute** (préservé, non redémarré)
- **Profil:** Nora LIVE · Cursor REAL ON · DET OFF
- **État avant tour:** 1 Project · 0 CycleInstance · 0 Trajectory · 0 HD · 0 EC · 0 Attempt
- **Demande:** (verbatim AtelierNova — premier cycle Cadrage, mission Cursor future, pas d'exécution)
- **Réponse observée:** `cycleLifecyclePreconditionsMessage` — « Studio a besoin d'une recommandation… » sans carte / sans Rec
- **Verdict HQA:** FIRST-CYCLE PROGRESSION **FAIL**
- **Préservation:** DBs sous `projects/sfia-studio/.sfia-exec/p6-optionb-fresh-hqa-20261018T153758Z/` (`product/oa-product.sqlite`, `nora/nora-session.sqlite`) — **lecture seule**, non mutées

---

## 6. Root Cause Analysis (démontrée)

### Flux du tour échoué

A. Pilot request → B. F2 intent (attempt_start / actionable Cadrage) → C. stance accept_start → D. discrimination `cycle_lifecycle` + `preemptsGenericPrepareProjectContext` → E. framing phase `blocked_no_recommendation` → F/G. **early-return** `cycleLifecyclePreconditionsMessage` → H. **Nora Product turn NEVER RUN** → I–M N/A.

### Hypothèses

| Hypothèse | Verdict |
|---|---|
| F2 early-return précède `orchestrateProjectAssistantTurn` | **PROVEN** — même texte UI = `cycleLifecyclePreconditionsMessage` ; test reproduit sans Rec seedée |
| Classé `attempt_start` bloque qualification | **PROVEN** — verbe « démarrer » + phase `blocked_no_recommendation` déclenchait return |
| Discrimination cycle_lifecycle empêche Nora | **PLAUSIBLE partiel** — discrimination correcte mais path early-return l'utilisait pour return au lieu de Nora |
| formalizationReady autre chemin | **UNKNOWN** / non causal ici |
| Cognitive STOP / cohérence bloque matérialisation | **UNKNOWN** sur LIVE ; sur DET Fake, mismatch guidance PROJECT vs LIFECYCLE_TRANSITION → `CONVERSATION_GUIDANCE_LIFECYCLE_MISMATCH` si Fake mal formé (corrigé dans Fake test) |
| Rec produite puis refusée Product | **UNKNOWN** HQA (Nora jamais atteinte) |
| Rec enregistrée absente projections | **UNKNOWN** HQA |
| Inventory catch→0 | **PROVEN conservé fail-closed** — `unavailable` ≠ empty ; test négatif PASS |

### Cause racine

Sur Project vierge (`cycleInventory.count === 0` + `blocked_no_recommendation` + Cycle Lifecycle intent), F2 retournait les **préconditions** sans laisser Nora produire / matérialiser une Lifecycle Recommendation via le Product path normal.

---

## 7. Correction architecturale finale

**Option B inchangée.** Pas de nouveau moteur de recommandations.

Dans `orchestrateF2.ts`, pour `attempt_start` + `blocked_no_recommendation` + inventory empty + discrimination Cycle Lifecycle:

1. **Ne plus** `return cycleLifecyclePreconditionsMessage`
2. Poser `forceGreenfieldLifecycleRecommendationCognitive = true`
3. Propager via `forceRepoInformative` → F1 Nora Product turn
4. Materialization reste `materializeFromProductTurn` / OA existants
5. `blocked_stale_or_incomplete` conserve orientation preconditions
6. Inventory unavailable conserve fail-closed
7. Generic PREPARE toujours preempté par discrimination (D-ARCH-REC-02 / D-ER-17)

### Parcours avant / après

**Avant (HQA FAIL):**
PILOT → F2 cycle_lifecycle → early-return preconditions → STOP (0 Rec)

**Après (DET PROVEN):**
PILOT → F2 cycle_lifecycle → Nora Product turn → LR structured → Product materialize → Rec CURRENT → (actions Product) traj → HD → prepare → START gate → LPS ACTIVE · 0 EC inventé

---

## 8. Fichiers créés / modifiés

### Modifié

- `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts`

### Créés (Option B + Exit Proof continuation)

- `…/f2/conversationWorkflowDiscrimination.ts`
- `…/f2/cycleLifecycleConversationCoordinator.ts`
- `…/f2/genericExecutionConversationCoordinator.ts`
- `…/__tests__/project-assistant/p6.arch.cycleLifecycleVsGenericPrepare.d0.test.ts`
- `…/__tests__/project-assistant/p6.arch.virginFirstCycleJourney.d0.test.ts`
- `…/__tests__/project-assistant/p6.arch.firstCycleLiveProgression.d0.test.ts` ← **Exit Proof sans Rec seedée**

### Interdits (non touchés)

Build Doctrine, Roadmap, C1, doctrine v3, D-ER protégées, template Cursor, secrets, DBs HQA, gouvernance.

---

## 9. Contenu exploitable — orchestrateF2 (extrait causal)

Le bloc greenfield (commentaire + flag + branche) :

```typescript
  // Greenfield (no CURRENT Recommendation): an attempt_start utterance must NOT
  // short-circuit with preconditions-only copy — Nora Product turn must run so
  // Lifecycle Recommendation can materialize via the normal Product path.
  // Force F1 advisory readiness (not F2 createCycle/START) for that case only.
  let forceGreenfieldLifecycleRecommendationCognitive = false;
  // ...
          // Empty inventory + Cycle Lifecycle intent + no CURRENT Recommendation:
          // do NOT return cycleLifecyclePreconditionsMessage (that stranded HQA
          // AtelierNova — "need a recommendation" without allowing Nora to emit one).
          if (
            cycleInventory.count === 0 &&
            framingDiscrimination.preemptsGenericPrepareProjectContext &&
            phase === "blocked_no_recommendation"
          ) {
            forceGreenfieldLifecycleRecommendationCognitive = true;
          } else if (
            cycleInventory.count === 0 &&
            framingDiscrimination.preemptsGenericPrepareProjectContext &&
            phase === "blocked_stale_or_incomplete"
          ) {
            return await completeF2Turn({ /* cycleLifecyclePreconditionsMessage */ });
          }
  // ...
    forceRepoInformative:
      forceRepoInformative ||
      forceReservationResolutionAdvisory ||
      forceGreenfieldLifecycleRecommendationCognitive,
```

Diff unifié (fichier modifié vs HEAD) joint en annexe A.

---

## 10. Contenu exploitable — nouveaux modules Option B

Voir annexes B–D (fichiers complets).

---

## 11. Contenu exploitable — Exit Proof test

Voir annexe E — `p6.arch.firstCycleLiveProgression.d0.test.ts` **complet**.

Preuves obligatoires couvertes:

1. Entrée `projectAssistantSendAction` ✓
2. Workflow Cycle Lifecycle (pas Generic PREPARE) ✓
3. Tour cognitif (`productTurnCalls >= 1`) ✓
4. Rec matérialisée Product (pas seed, pas appel direct materialize*) ✓
5. CURRENT / `recommendation_ready` ✓
6. 0 EC ✓
7. 0 CycleInstance artificiel au premier tour ✓
8. Continuity `recommendation_ready` ✓
9. Trajectoire via Product actions ✓
10. HD via `approve_candidate` Product ✓
11. Prepare + START gate ✓
12. LPS ACTIVE ✓
13. START indépendant EC ✓

**RECOMMENDATION MATERIALIZED FROM PRODUCT TURN** — Exit Proof satisfait.

---

## 12. Tests et validations

| # | Suite / gate | Résultat |
|---|---|---|
| 1 | `p6.arch.firstCycleLiveProgression.d0.test.ts` (3) | PASS |
| 2 | `p6.arch.virginFirstCycleJourney.d0.test.ts` (4) | PASS |
| 3 | `p6.arch.cycleLifecycleVsGenericPrepare.d0.test.ts` (6) | PASS |
| 4 | `chatFirstFramingContinuity.frontDoor.d0.test.ts` (3) | PASS |
| 5 | `p6.hqa.f01.chatFirstCycleStartGate.d0.test.ts` (13) | PASS |
| 6 | `p6.der16.genericNoraToolInvocation.d0.test.ts` (28) | PASS |
| 7 | `p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts` | PASS (dans batch) |
| 8 | `p6.toolFirst.executionContractSimplification.d0.test.ts` (11) | PASS |
| 9 | `p6.toolFirst.safetyClosureR1R2.d0.test.ts` | PASS (dans batch 58) |
| 10 | `productCycleE2eStabilization.frontDoor.d0.test.ts` (4) | PASS |
| 11 | typecheck | PASS |
| 12 | lint | PASS (0 warn) |
| 13 | build | PASS |
| 14 | `git diff --check` | PASS |

Batch Option B+framing+F01: **29/29**. Batch der16/gD4/toolFirst/e2e: **58/58**.

### Matrice d'oracles (synthèse)

| Oracle | Verdict |
|---|---|
| A Rec valide → materialize | PASS (main it) |
| B null LR → pas de Rec artificielle | PASS (neg it) |
| E inventory unavailable fail-closed | PASS |
| G prepared + START | PASS |
| H Generic PREPARE sans cycle D-ER-17 | PASS (der16 / cycleLifecycleVsGeneric) |
| K mission Cursor future ≠ Generic PREPARE | PASS (cycleLifecycleVsGeneric + main utterance) |
| Tool-First R2 no-write | PASS |

---

## 13. Fake / Real Qualification

| Frontière | Mode Delivery | Mode HQA (inchangé) |
|---|---|---|
| Nora OpenAI | Fake (tests DET uniquement) | LIVE |
| Product OA / SQLite | REAL Product path | REAL campagne préservée |
| Cursor Gateway | DET OFF tests (`CURSOR_REAL=0` test env) | REAL ON runtime :3020 |
| Preuve Delivery | PILOT → Nora structured → Product Rec → journey | — |
| Preuve hors scope | Nora LIVE PASS · browser HQA · Cursor Execute · P6 GLOBAL · v3 ADOPTED | NON CLAIMÉS |

**REAL ON ≠ EXECUTE AUTHORIZED.** Aucun appel LIVE depuis Cursor Delivery.

---

## 14. Dettes / réserves / gates

- **Dette:** aucune nouvelle dette structurante ; TOOL-FIRST-REAL-NOWRITE OPEN inchangé.
- **Réserves:** Replay Morris LIVE requis sur :3020 (candidat code pas encore servi — runtime HQA tourne encore sur build pré-correction). Requalification runtime après revue.
- **Gates:** pas de push Product ; pas de PR ; pas de merge ; pas de doctrine promotion ; DBs HQA non mutées.

---

## 15. Verdict

**OPTION B FIRST-CYCLE PROGRESSION — DETERMINISTIC PRODUCT TURN PROVEN — READY FOR MORRIS LIVE REPLAY.**

**Statut:** READY WITH RESERVES (replay Nora LIVE Morris après revue ChatGPT ; runtime :3020 non requalifié dans ce Delivery).

### Interdictions de claim respectées

- Nora LIVE PASS — **NON**
- Cursor REAL Execution PASS — **NON**
- P6 GLOBAL PASS — **NON**
- Runtime v3 ADOPTED — **NON**

### Instruction ChatGPT

Lire ce Review Handoff. Vérifier matérialisation Product depuis tour Nora et tests de progression **sans** Recommendation pré-seedée (`p6.arch.firstCycleLiveProgression.d0.test.ts`). Ne pas déclarer READY Human QA si le test commence avec Rec déjà matérialisée.

---


## ANNEXE A — git diff orchestrateF2.ts (vs HEAD 304e30e8)

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 7a75a37f..9b783ae6 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -74,6 +74,14 @@ import {
   isOptionalDocumentaryWithoutClosureArtifactBlock,
   hasExplicitNewCycleFormalizationSignal,
 } from "./activeCycleGovernedContinuation";
+import {
+  cycleInventoryUnavailableMessage,
+  cycleLifecyclePreconditionsMessage,
+  mixedCycleExecutionClarificationMessage,
+  type CycleInventoryReadResult,
+} from "./cycleLifecycleConversationCoordinator";
+import { assessGenericPrepareConversationAdmission } from "./genericExecutionConversationCoordinator";
+import { discriminateConversationWorkflow } from "./conversationWorkflowDiscrimination";
 import {
   enrichQualificationWithCkcSemantics,
   isProductStudioNativeCkcProof,
@@ -1613,6 +1621,12 @@ export async function orchestrateAssistantSend(input: {
   // CP-01: when a unique COMPLETE prepared cycle is ready, accept_start must
   // reach resolveChatFirstCycleStartGate HERE — transitionReadiness may still
   // be false (missing candidateCycleTypeId / signals) and must not strand START.
+  //
+  // Greenfield (no CURRENT Recommendation): an attempt_start utterance must NOT
+  // short-circuit with preconditions-only copy — Nora Product turn must run so
+  // Lifecycle Recommendation can materialize via the normal Product path.
+  // Force F1 advisory readiness (not F2 createCycle/START) for that case only.
+  let forceGreenfieldLifecycleRecommendationCognitive = false;
   {
     const oaForFraming = getRuntimeApplicationService().oa;
     if (oaForFraming) {
@@ -1623,6 +1637,44 @@ export async function orchestrateAssistantSend(input: {
       const snap = await projectAssistantReadFramingContinuityAction({
         projectId: project.projectId,
       });
+      // Fail-closed before phase branching: continuity readers call
+      // cycles.listByProject — if that inventory is unavailable, snap.ok is
+      // false and the in-block inventory check would never run. An explicit
+      // START must not fall through to Nora / Generic PREPARE on that failure.
+      if (
+        !snap.ok &&
+        snap.code === "TRJ_BRIDGE_CYCLES_UNAVAILABLE"
+      ) {
+        const labelForProbe =
+          (analysis.candidateCycleTypeId
+            ? getCycleTypeById(analysis.candidateCycleTypeId)?.label
+            : null) ??
+          analysis.candidateCycleTypeId ??
+          null;
+        const startWhenInventoryUnread = resolveChatFirstStartRouting({
+          userContent: content,
+          cycleLabel: labelForProbe,
+          pilotDecisionCandidate: analysis.pilotDecisionCandidate,
+        });
+        if (startWhenInventoryUnread.kind === "attempt_start") {
+          return await completeF2Turn({
+            userText: content,
+            sessionDbPath: input.sessionDbPath,
+            text: cycleInventoryUnavailableMessage({
+              presentation,
+              cycleLabel: labelForProbe,
+            }),
+            mode: modeResolution.mode as "fixture" | "live",
+            presentation,
+            model,
+            project,
+            intentClass: analysis.intentClass,
+            reinstructionOfProposalId,
+            executionBlocked: true,
+            turnKind: "f2_blocked",
+          });
+        }
+      }
       if (snap.ok && snap.continuity) {
         const phase = snap.continuity.phase;
         const productCycleLabel =
@@ -1751,6 +1803,92 @@ export async function orchestrateAssistantSend(input: {
         const wantsFramingProgress =
           framingStance.kind === "accept_start" ||
           framingStance.kind === "accept_recommendation";
+        // Option B — when START is explicit but framing preconditions are absent
+        // AND no CycleInstance inventory exists yet, orient Cycle Lifecycle here
+        // so the turn cannot be captured later by Generic PREPARE project-context.
+        // Do NOT intercept when cycles already exist (F01 legacy / START gate owns it)
+        // or when the turn is a non-cycle prepare-accept ("OK" without offer).
+        if (
+          startRoutingEarly.kind === "attempt_start" &&
+          (phase === "blocked_no_recommendation" ||
+            phase === "blocked_stale_or_incomplete")
+        ) {
+          const framingDiscrimination = discriminateConversationWorkflow({
+            userContent: content,
+            analysis,
+            cycleLabel: productCycleLabel,
+            pilotDecisionCandidate: analysis.pilotDecisionCandidate,
+          });
+          // Fail-closed: inventory service error ≠ proven empty inventory.
+          let cycleInventory: CycleInventoryReadResult;
+          try {
+            const listed = await oaForFraming.cycleServices.cycles.listByProject(
+              project.projectId,
+            );
+            cycleInventory = { kind: "available", count: listed.length };
+          } catch (err) {
+            cycleInventory = {
+              kind: "unavailable",
+              reason:
+                err instanceof Error
+                  ? err.message.slice(0, 160)
+                  : "cycle_inventory_read_failed",
+            };
+          }
+          if (cycleInventory.kind === "unavailable") {
+            return await completeF2Turn({
+              userText: content,
+              sessionDbPath: input.sessionDbPath,
+              text: cycleInventoryUnavailableMessage({
+                presentation,
+                cycleLabel: productCycleLabel,
+              }),
+              mode: modeResolution.mode as "fixture" | "live",
+              presentation,
+              model,
+              project,
+              intentClass: analysis.intentClass,
+              reinstructionOfProposalId,
+              executionBlocked: true,
+              turnKind: "f2_blocked",
+            });
+          }
+          // Empty inventory + Cycle Lifecycle intent + no CURRENT Recommendation:
+          // do NOT return cycleLifecyclePreconditionsMessage (that stranded HQA
+          // AtelierNova — "need a recommendation" without allowing Nora to emit one).
+          // Keep Generic PREPARE preempt via discrimination later; route to F1 Nora.
+          if (
+            cycleInventory.count === 0 &&
+            framingDiscrimination.preemptsGenericPrepareProjectContext &&
+            phase === "blocked_no_recommendation"
+          ) {
+            forceGreenfieldLifecycleRecommendationCognitive = true;
+          } else if (
+            cycleInventory.count === 0 &&
+            framingDiscrimination.preemptsGenericPrepareProjectContext &&
+            phase === "blocked_stale_or_incomplete"
+          ) {
+            // Stale/incomplete candidate — orient without inventing Rec/HD/START.
+            return await completeF2Turn({
+              userText: content,
+              sessionDbPath: input.sessionDbPath,
+              text: cycleLifecyclePreconditionsMessage({
+                presentation,
+                phase,
+                cycleLabel: productCycleLabel,
+                discrimination: framingDiscrimination,
+              }),
+              mode: modeResolution.mode as "fixture" | "live",
+              presentation,
+              model,
+              project,
+              intentClass: analysis.intentClass,
+              reinstructionOfProposalId,
+              executionBlocked: true,
+              turnKind: "f2_clarification",
+            });
+          }
+        }
         if (wantsFramingProgress) {
           if (phase === "recommendation_ready") {
             const advanced = await projectAssistantAdvanceFramingContinuityAction(
@@ -1846,7 +1984,9 @@ export async function orchestrateAssistantSend(input: {
   const transition = resolveTransitionReadiness({
     analysis,
     forceRepoInformative:
-      forceRepoInformative || forceReservationResolutionAdvisory,
+      forceRepoInformative ||
+      forceReservationResolutionAdvisory ||
+      forceGreenfieldLifecycleRecommendationCognitive,
   });

   // CR-P6-04 — "OK, vas-y" (often informative) bound to a CURRENT prepare offer
@@ -2047,22 +2187,12 @@ export async function orchestrateAssistantSend(input: {
   // is already active must not fall through to NEW_CYCLE START. PREPARE only
   // on explicit prepare intent OR chat-first accept of a CURRENT prepare offer
   // (Q16/Q17/Q18); otherwise clarify gaps or recommend prepare. Never canned.
+  //
+  // Option B / D-ARCH-REC-02 — Cycle Lifecycle intent must not be captured by
+  // Generic PREPARE project-context. Admission is coordinated (not duplicated)
+  // via assessGenericPrepareConversationAdmission.
   {
     const activeIdForPrepare = project.activeCycleInstanceId?.trim() || null;
-    const prepareGoPreview = resolveChatFirstGenericPrepareGo({
-      projectId: project.projectId,
-      cycleInstanceId: activeIdForPrepare,
-      text: content,
-      pilotDecisionCandidate: analysis.pilotDecisionCandidate,
-      sessionDbPath: input.sessionDbPath,
-    });
-    const chatFirstPrepareAccept =
-      prepareGoPreview.kind === "prepare" ||
-      prepareGoPreview.kind === "explicit_lexical_prepare";
-    const actionableForGenericPrepare =
-      analysis.intentClass === "actionable" ||
-      analysis.intentClass === "execution_request" ||
-      chatFirstPrepareAccept;

     // P6-HQA-F05-GD4-01 — ordinary documentary materialization without a
     // closure Artifact obligation must not dead-end on no_require_artifact.
@@ -2072,27 +2202,68 @@ export async function orchestrateAssistantSend(input: {
       continuation.mode === "NEW_CYCLE_FORMALIZATION" ||
       isOptionalDocumentaryWithoutClosureArtifactBlock(continuation);

-    // D-ER-17 / S8 — NO active cycle is not a blocker for Generic PREPARE.
-    // Admitted on PROJECT CONTEXT (cycleInstanceId = null) when Project is bound
-    // and the turn is (a) a Pilote prepare GO / explicit prepare intent, or
-    // (b) a natural documentary signal that ACGC no longer dead-ends
-    // (no_compatible_artifact_effect). Explicit NEW_CYCLE formalization
-    // (« prépare un cycle … ») stays on the historical createCycle path.
-    // Other actionable no-cycle missions keep the legacy NEW_CYCLE START path
-    // until the D-ER-19 legacy-admission exit (OPEN — see delivery report).
-    // No CycleInstance is ever invented here.
-    const projectContextAdmission =
+    const prepareAdmission = assessGenericPrepareConversationAdmission({
+      projectId: project.projectId,
+      userContent: content,
+      analysis,
+      activeCycleInstanceId: activeIdForPrepare,
+      cycleLabel:
+        (analysis.candidateCycleTypeId
+          ? getCycleTypeById(analysis.candidateCycleTypeId)?.label
+          : null) ?? analysis.candidateCycleTypeId ?? null,
+      pilotDecisionCandidate: analysis.pilotDecisionCandidate,
+      sessionDbPath: input.sessionDbPath,
+      eligibleForGenericPrepareRouting,
+      actionableForIntent:
+        analysis.intentClass === "actionable" ||
+        analysis.intentClass === "execution_request",
+      projectContextLegacyEligible:
+        continuation.mode === "NEW_CYCLE_FORMALIZATION" &&
+        continuation.reason === "no_compatible_artifact_effect",
+    });
+
+    // Mixed cycle+execution without START path → distinguish operations; no silent PREPARE.
+    if (
       !activeIdForPrepare &&
+      !prepareAdmission.allowGenericPrepareRouting &&
+      prepareAdmission.discrimination.kind === "ambiguous_mixed" &&
+      prepareAdmission.discrimination.hasCycleLifecycleLanguage &&
+      prepareAdmission.discrimination.hasExecutionMissionLanguage &&
+      prepareAdmission.discrimination.startRoutingKind === "not_start_path"
+    ) {
+      return await completeF2Turn({
+        userText: content,
+        sessionDbPath: input.sessionDbPath,
+        text: mixedCycleExecutionClarificationMessage({
+          presentation,
+          cycleLabel:
+            (analysis.candidateCycleTypeId
+              ? getCycleTypeById(analysis.candidateCycleTypeId)?.label
+              : null) ?? analysis.candidateCycleTypeId ?? null,
+        }),
+        mode: modeResolution.mode as "fixture" | "live",
+        presentation,
+        model,
+        project,
+        intentClass: analysis.intentClass,
+        reinstructionOfProposalId,
+        executionBlocked: true,
+        turnKind: "f2_clarification",
+      });
+    }
+
+    // D-ER-17 / S8 — NO active cycle is not a blocker for Generic PREPARE when
+    // the turn is a true execution mission. Cycle Lifecycle / mixed cycle-first
+    // turns are excluded by the coordinator (no artificial CycleInstance).
+    // Legacy analysis formalization signal retained as defense-in-depth.
+    const projectContextAdmission =
+      prepareAdmission.allowProjectContextPrepare &&
       Boolean(project.projectId?.trim()) &&
-      !hasExplicitNewCycleFormalizationSignal(analysis) &&
-      (chatFirstPrepareAccept ||
-        (continuation.mode === "NEW_CYCLE_FORMALIZATION" &&
-          continuation.reason === "no_compatible_artifact_effect"));
+      !hasExplicitNewCycleFormalizationSignal(analysis);

     if (
-      eligibleForGenericPrepareRouting &&
-      (Boolean(activeIdForPrepare) || projectContextAdmission) &&
-      actionableForGenericPrepare
+      prepareAdmission.allowGenericPrepareRouting &&
+      (Boolean(activeIdForPrepare) || projectContextAdmission)
     ) {
     const activeId: string | null = activeIdForPrepare;
     const cycleLoad = activeId
@@ -2107,7 +2278,7 @@ export async function orchestrateAssistantSend(input: {
       const contextKept = activeId
         ? "Le cycle actif est conservé."
         : "Contexte projet conservé — aucun cycle artificiel créé.";
-      const prepareGo = prepareGoPreview;
+      const prepareGo = prepareAdmission.prepareGo;
       const mayPrepare =
         prepareGo.kind === "prepare" ||
         prepareGo.kind === "explicit_lexical_prepare";
```

## ANNEXE B — conversationWorkflowDiscrimination.ts (fichier complet)

```typescript
/**
 * P6 Architecture Recovery (Option B) — conversation workflow discrimination.
 *
 * Pure classification of Pilote turns into Cycle Lifecycle vs Execution Mission
 * vs ambiguous/mixed. Does NOT mutate Product. Does NOT invent HumanDecision.
 * Does NOT authorize START or PREPARE.
 *
 * D-ARCH-REC-02: Cycle Lifecycle intent must not be diverted to Generic PREPARE.
 */

import type { IntentAnalysisDto, PilotDecisionCandidate } from "./types";
import {
  interpretPilotNarrativeStance,
  type PilotNarrativeStance,
} from "./composeF2PilotFacingNarrative";
import { hasExplicitNewCycleFormalizationSignal } from "./activeCycleGovernedContinuation";
import { resolveChatFirstStartRouting } from "./resolveChatFirstCycleStartGate";

export type ConversationWorkflowKind =
  | "cycle_lifecycle"
  | "execution_mission"
  | "ambiguous_mixed";

export type ConversationWorkflowDiscrimination = {
  readonly kind: ConversationWorkflowKind;
  readonly stance: PilotNarrativeStance;
  readonly startRoutingKind: ReturnType<
    typeof resolveChatFirstStartRouting
  >["kind"];
  readonly hasCycleLifecycleLanguage: boolean;
  readonly hasExecutionMissionLanguage: boolean;
  readonly analysisSignalsCycleFormalization: boolean;
  /**
   * When true, Generic PREPARE on project-context (no active cycle) must not
   * capture this turn — Cycle Lifecycle / mixed cycle-first paths.
   */
  readonly preemptsGenericPrepareProjectContext: boolean;
  readonly reason: string;
};

const CYCLE_LIFECYCLE_RE =
  /\b(?:d[eé]marr\w*|lanc\w*|activ(?:er|ation)|pr[eé]par\w*|qualif\w*|propos\w*).{0,48}\bcycle\b|\bcycle\b.{0,48}\b(?:d[eé]marr\w*|lanc\w*|activ(?:er|ation)|cadrage)\b|\b(?:nouveau|premier)\s+cycle\b|\bcycle\s+(?:de\s+)?cadrage\b|\bd[eé]marrage\s+effectif\b/i;

const EXECUTION_MISSION_RE =
  /\b(?:execution\s*contract|contrat\s+d['’]?\s*ex[eé]cution|pr[eé]pare(?:r)?\s+(?:le\s+|un\s+|ce\s+)?contrat|pr[eé]paration\s+(?:du\s+|d['’]un\s+)?contrat|mission\s+(?:technique\s+)?(?:pour\s+)?cursor|confier\w*\s+[^\n.!?]{0,40}\bcursor\b)\b/i;

const EXPLICIT_PREPARE_CONTRACT_ONLY_RE =
  /\b(?:pr[eé]pare(?:r)?|pr[eé]paration)\s+(?:le\s+|un\s+|ce\s+)?(?:contrat\s+d['’]?\s*ex[eé]cution|execution\s*contract)\b/i;

export function hasCycleLifecycleLanguage(userContent: string): boolean {
  return CYCLE_LIFECYCLE_RE.test((userContent ?? "").trim());
}

export function hasExecutionMissionLanguage(userContent: string): boolean {
  return EXECUTION_MISSION_RE.test((userContent ?? "").trim());
}

export function discriminateConversationWorkflow(input: {
  readonly userContent: string;
  readonly analysis: IntentAnalysisDto;
  readonly cycleLabel?: string | null;
  readonly pilotDecisionCandidate?: PilotDecisionCandidate | null;
  /** True when a CURRENT Generic PREPARE offer exists for this project/cycle binding. */
  readonly hasCurrentGenericPrepareOffer?: boolean;
  /** True when resolveChatFirstGenericPrepareGo already accepted prepare/lexical. */
  readonly chatFirstPrepareAccept?: boolean;
}): ConversationWorkflowDiscrimination {
  const text = (input.userContent ?? "").trim();
  const stance = interpretPilotNarrativeStance({
    userContent: text,
    cycleLabel: input.cycleLabel,
    pilotDecisionCandidate:
      input.pilotDecisionCandidate ?? input.analysis.pilotDecisionCandidate,
  });
  const startRouting = resolveChatFirstStartRouting({
    userContent: text,
    cycleLabel: input.cycleLabel,
    pilotDecisionCandidate:
      input.pilotDecisionCandidate ?? input.analysis.pilotDecisionCandidate,
  });
  const cycleLang = hasCycleLifecycleLanguage(text);
  const execLang = hasExecutionMissionLanguage(text);
  const analysisCycle = hasExplicitNewCycleFormalizationSignal(input.analysis);
  const explicitContractOnly = EXPLICIT_PREPARE_CONTRACT_ONLY_RE.test(text);
  const prepareAccept = Boolean(input.chatFirstPrepareAccept);
  const hasOffer = Boolean(input.hasCurrentGenericPrepareOffer);

  // Explicit START / suppress-mint start-adjacent → Cycle Lifecycle owns the turn.
  if (
    startRouting.kind === "attempt_start" ||
    startRouting.kind === "suppress_mint" ||
    stance.kind === "accept_start"
  ) {
    const mixed = execLang && !explicitContractOnly;
    return {
      kind: mixed ? "ambiguous_mixed" : "cycle_lifecycle",
      stance,
      startRoutingKind: startRouting.kind,
      hasCycleLifecycleLanguage: cycleLang || analysisCycle,
      hasExecutionMissionLanguage: execLang,
      analysisSignalsCycleFormalization: analysisCycle,
      preemptsGenericPrepareProjectContext: true,
      reason: mixed
        ? "start_stance_with_execution_mention"
        : "start_or_start_adjacent_stance",
    };
  }

  // Raw / analysis cycle formalization without START stance.
  if (cycleLang || analysisCycle) {
    if (execLang && !explicitContractOnly) {
      return {
        kind: "ambiguous_mixed",
        stance,
        startRoutingKind: startRouting.kind,
        hasCycleLifecycleLanguage: true,
        hasExecutionMissionLanguage: true,
        analysisSignalsCycleFormalization: analysisCycle,
        preemptsGenericPrepareProjectContext: true,
        reason: "mixed_cycle_and_execution_language",
      };
    }
    return {
      kind: "cycle_lifecycle",
      stance,
      startRoutingKind: startRouting.kind,
      hasCycleLifecycleLanguage: true,
      hasExecutionMissionLanguage: execLang,
      analysisSignalsCycleFormalization: analysisCycle,
      preemptsGenericPrepareProjectContext: true,
      reason: cycleLang
        ? "raw_cycle_lifecycle_language"
        : "analysis_cycle_formalization",
    };
  }

  // Execution mission: prepare accept on CURRENT offer, lexical prepare contract,
  // or execution-mission language without cycle lifecycle language.
  if (prepareAccept || explicitContractOnly || (execLang && hasOffer)) {
    return {
      kind: "execution_mission",
      stance,
      startRoutingKind: startRouting.kind,
      hasCycleLifecycleLanguage: false,
      hasExecutionMissionLanguage: true,
      analysisSignalsCycleFormalization: false,
      preemptsGenericPrepareProjectContext: false,
      reason: prepareAccept
        ? "chat_first_prepare_accept"
        : explicitContractOnly
          ? "explicit_prepare_contract"
          : "execution_language_with_current_offer",
    };
  }

  if (execLang) {
    return {
      kind: "execution_mission",
      stance,
      startRoutingKind: startRouting.kind,
      hasCycleLifecycleLanguage: false,
      hasExecutionMissionLanguage: true,
      analysisSignalsCycleFormalization: false,
      preemptsGenericPrepareProjectContext: false,
      reason: "execution_mission_language",
    };
  }

  // D-ER-17 — natural documentary / non-cycle actionable turns remain eligible
  // for Generic PREPARE project-context when ACGC eligibility admits them.
  // Absence of cycle-lifecycle language must NOT preempt that path (E10).
  return {
    kind: "execution_mission",
    stance,
    startRoutingKind: startRouting.kind,
    hasCycleLifecycleLanguage: false,
    hasExecutionMissionLanguage: false,
    analysisSignalsCycleFormalization: false,
    preemptsGenericPrepareProjectContext: false,
    reason: "non_cycle_default_allows_execution_admission",
  };
}
```

## ANNEXE C — cycleLifecycleConversationCoordinator.ts (fichier complet)

```typescript
/**
 * P6 Architecture Recovery (Option B) — Cycle Lifecycle conversation coordinator.
 *
 * Owns Cycle Lifecycle conversational orientation (framing / trajectory / START
 * preconditions). Does NOT invent HumanDecision, CycleInstance, or START.
 * Does NOT call Generic PREPARE.
 *
 * Product mutations remain in OA facades / preCycleCandidateTrajectoryActions /
 * resolveChatFirstCycleStartGate — this module coordinates messaging + admission
 * boundaries only.
 */

import type { FramingContinuityPhase } from "./chatFirstFramingContinuity";
import type { ConversationWorkflowDiscrimination } from "./conversationWorkflowDiscrimination";

export function shouldExcludeGenericPrepareProjectContext(
  discrimination: ConversationWorkflowDiscrimination,
): boolean {
  return discrimination.preemptsGenericPrepareProjectContext;
}

/** Result of reading CycleInstance inventory for Cycle Lifecycle early orientation. */
export type CycleInventoryReadResult =
  | { readonly kind: "available"; readonly count: number }
  | { readonly kind: "unavailable"; readonly reason: string };

/**
 * Fail-closed messaging when CycleInstance inventory cannot be proven empty.
 * Must not claim "0 cycle" or progress as if inventory were empty.
 */
export function cycleInventoryUnavailableMessage(input: {
  readonly presentation: "test_provider" | "openai_live";
  readonly cycleLabel?: string | null;
}): string {
  const head =
    input.presentation === "test_provider" ? "[Mode test]" : "[Mode réel]";
  const cycle = (input.cycleLabel ?? "").trim()
    ? `« ${(input.cycleLabel ?? "").trim()} »`
    : "ce cycle";
  return [
    head,
    `L'inventaire des cycles du projet est temporairement indisponible — Studio ne peut pas traiter le démarrage de ${cycle} sur une absence non prouvée.`,
    "Aucun cycle n'a été créé, démarré ni préparé. Aucun contrat d'exécution n'a été préparé. Réessayez lorsque l'état Product est de nouveau lisible.",
  ].join(" ");
}

/**
 * Pilot-facing orientation when Cycle Lifecycle is requested but START
 * preconditions are not met. Never claims PREPARE/EC/HD mission semantics.
 */
export function cycleLifecyclePreconditionsMessage(input: {
  readonly presentation: "test_provider" | "openai_live";
  readonly phase: FramingContinuityPhase | null | undefined;
  readonly cycleLabel?: string | null;
  readonly discrimination: ConversationWorkflowDiscrimination;
}): string {
  const head =
    input.presentation === "test_provider" ? "[Mode test]" : "[Mode réel]";
  const cycle = (input.cycleLabel ?? "").trim()
    ? `« ${(input.cycleLabel ?? "").trim()} »`
    : "ce cycle";
  const mixedNote =
    input.discrimination.kind === "ambiguous_mixed" &&
    input.discrimination.hasExecutionMissionLanguage
      ? " La préparation d'un contrat d'exécution Cursor reste une étape distincte — après démarrage du cycle, pas à sa place."
      : "";

  switch (input.phase) {
    case "ready_to_start":
      return [
        head,
        `Le cycle ${cycle} est préparé. Indiquez explicitement que vous souhaitez le démarrer — aucun ExecutionContract n'est requis pour START.`,
        mixedNote.trim(),
      ]
        .filter(Boolean)
        .join(" ");
    case "trajectory_decided_prepare_cycle":
      return [
        head,
        `La trajectoire est décidée — il reste à préparer le cycle ${cycle} avant tout démarrage. Aucun contrat d'exécution n'a été préparé.`,
        mixedNote.trim(),
      ]
        .filter(Boolean)
        .join(" ");
    case "awaiting_trajectory_decision":
      return [
        head,
        `Une direction de trajectoire est proposée pour ${cycle}. Validez-la dans la carte de décision — un accord conversationnel ne démarre pas le cycle et ne prépare pas de contrat d'exécution.`,
        mixedNote.trim(),
      ]
        .filter(Boolean)
        .join(" ");
    case "recommendation_ready":
      return [
        head,
        `Une recommandation de cycle est disponible. Je peux préparer la trajectoire candidate pour ${cycle} — validez ensuite la décision structurante si applicable. Aucun démarrage ni contrat d'exécution n'a été engagé.`,
        mixedNote.trim(),
      ]
        .filter(Boolean)
        .join(" ");
    case "active":
      return [
        head,
        `Un cycle est déjà actif. Aucun second démarrage n'a été engagé.${mixedNote}`,
      ].join(" ");
    case "blocked_stale_or_incomplete":
      return [
        head,
        `La trajectoire candidate n'est pas encore exploitable pour ${cycle}. Aucune HumanDecision inventée, aucun démarrage, aucun contrat d'exécution.`,
      ].join(" ");
    case "blocked_no_recommendation":
    default:
      return [
        head,
        `Pour démarrer ${cycle}, Studio a besoin d'une recommandation de cycle puis d'une trajectoire préparée et liée — votre confirmation conversationnelle n'active rien à elle seule.`,
        "Aucun cycle artificiel n'a été créé. Aucun contrat d'exécution n'a été préparé.",
        mixedNote.trim(),
        "Utilisez la carte de trajectoire / préparation dans la conversation lorsqu'elle est disponible, ou demandez une recommandation de premier cycle.",
      ]
        .filter(Boolean)
        .join(" ");
  }
}

export function mixedCycleExecutionClarificationMessage(input: {
  readonly presentation: "test_provider" | "openai_live";
  readonly cycleLabel?: string | null;
}): string {
  const head =
    input.presentation === "test_provider" ? "[Mode test]" : "[Mode réel]";
  const cycle = (input.cycleLabel ?? "").trim()
    ? `« ${(input.cycleLabel ?? "").trim()} »`
    : "le cycle de travail";
  return [
    head,
    `Votre demande mélange démarrage de ${cycle} et préparation d'exécution.`,
    "Ce sont deux opérations distinctes : d'abord Cycle Lifecycle (trajectoire → préparation → START), ensuite Generic PREPARE du contrat — préparer ≠ autoriser ≠ exécuter.",
    "Aucune des deux n'a été engagée silencieusement. Précisez laquelle vous voulez en premier, ou validez la trajectoire du cycle puis redemandez le contrat.",
  ].join(" ");
}
```

## ANNEXE D — genericExecutionConversationCoordinator.ts (fichier complet)

```typescript
/**
 * P6 Architecture Recovery (Option B) — Generic Execution conversation coordinator.
 *
 * Thin admission boundary for Generic PREPARE conversational routing.
 * Reuses existing W2 prepare helpers — does NOT duplicate readiness/materiality
 * rules and does NOT authorize EXECUTE.
 *
 * D-ER-17: project-context PREPARE remains available for true execution missions.
 * D-ARCH-REC-02: Cycle Lifecycle discrimination preempts project-context capture.
 */

import type { IntentAnalysisDto, PilotDecisionCandidate } from "./types";
import {
  getCurrentGenericPrepareOffer,
  resolveChatFirstGenericPrepareGo,
} from "../w2/prepareGenericExecutionContractDraft";
import {
  discriminateConversationWorkflow,
  type ConversationWorkflowDiscrimination,
} from "./conversationWorkflowDiscrimination";
import { shouldExcludeGenericPrepareProjectContext } from "./cycleLifecycleConversationCoordinator";

export type GenericPrepareConversationAdmission = {
  readonly discrimination: ConversationWorkflowDiscrimination;
  readonly prepareGo: ReturnType<typeof resolveChatFirstGenericPrepareGo>;
  readonly chatFirstPrepareAccept: boolean;
  /** Active-cycle or project-context path may enter Generic PREPARE block. */
  readonly allowGenericPrepareRouting: boolean;
  /** Project-context (no active cycle) admission specifically. */
  readonly allowProjectContextPrepare: boolean;
  readonly blockReason: string | null;
};

export function assessGenericPrepareConversationAdmission(input: {
  readonly projectId: string;
  readonly userContent: string;
  readonly analysis: IntentAnalysisDto;
  readonly activeCycleInstanceId: string | null;
  readonly cycleLabel?: string | null;
  readonly pilotDecisionCandidate?: PilotDecisionCandidate | null;
  readonly sessionDbPath?: string | null;
  /** From ACGC / optional documentary eligibility (caller). */
  readonly eligibleForGenericPrepareRouting: boolean;
  readonly actionableForIntent: boolean;
  /**
   * Historical S8 project-context gate: prepare-accept OR
   * NEW_CYCLE_FORMALIZATION + no_compatible_artifact_effect.
   * Cycle-lifecycle discrimination may still preempt.
   */
  readonly projectContextLegacyEligible: boolean;
}): GenericPrepareConversationAdmission {
  const activeId = input.activeCycleInstanceId?.trim() || null;
  const prepareGo = resolveChatFirstGenericPrepareGo({
    projectId: input.projectId,
    cycleInstanceId: activeId,
    text: input.userContent,
    pilotDecisionCandidate:
      input.pilotDecisionCandidate ?? input.analysis.pilotDecisionCandidate,
    sessionDbPath: input.sessionDbPath,
  });
  const chatFirstPrepareAccept =
    prepareGo.kind === "prepare" ||
    prepareGo.kind === "explicit_lexical_prepare";
  const currentOffer = getCurrentGenericPrepareOffer(input.projectId, {
    sessionDbPath: input.sessionDbPath,
  });
  const discrimination = discriminateConversationWorkflow({
    userContent: input.userContent,
    analysis: input.analysis,
    cycleLabel: input.cycleLabel,
    pilotDecisionCandidate:
      input.pilotDecisionCandidate ?? input.analysis.pilotDecisionCandidate,
    hasCurrentGenericPrepareOffer: currentOffer != null,
    chatFirstPrepareAccept,
  });

  const excludeProjectContext =
    shouldExcludeGenericPrepareProjectContext(discrimination);

  const actionable =
    input.actionableForIntent || chatFirstPrepareAccept;

  if (!input.eligibleForGenericPrepareRouting || !actionable) {
    return {
      discrimination,
      prepareGo,
      chatFirstPrepareAccept,
      allowGenericPrepareRouting: false,
      allowProjectContextPrepare: false,
      blockReason: !input.eligibleForGenericPrepareRouting
        ? "not_eligible_for_generic_prepare_routing"
        : "not_actionable_for_prepare",
    };
  }

  if (activeId) {
    return {
      discrimination,
      prepareGo,
      chatFirstPrepareAccept,
      allowGenericPrepareRouting: true,
      allowProjectContextPrepare: false,
      blockReason: null,
    };
  }

  // D-ER-17 project-context — only for true execution missions.
  if (excludeProjectContext) {
    return {
      discrimination,
      prepareGo,
      chatFirstPrepareAccept,
      allowGenericPrepareRouting: false,
      allowProjectContextPrepare: false,
      blockReason: `cycle_lifecycle_preempts_project_context_prepare:${discrimination.reason}`,
    };
  }

  if (discrimination.kind !== "execution_mission" && !chatFirstPrepareAccept) {
    return {
      discrimination,
      prepareGo,
      chatFirstPrepareAccept,
      allowGenericPrepareRouting: false,
      allowProjectContextPrepare: false,
      blockReason: `workflow_not_execution_mission:${discrimination.kind}`,
    };
  }

  if (!input.projectContextLegacyEligible && !chatFirstPrepareAccept) {
    return {
      discrimination,
      prepareGo,
      chatFirstPrepareAccept,
      allowGenericPrepareRouting: false,
      allowProjectContextPrepare: false,
      blockReason: "project_context_legacy_gate_not_met",
    };
  }

  return {
    discrimination,
    prepareGo,
    chatFirstPrepareAccept,
    allowGenericPrepareRouting: true,
    allowProjectContextPrepare: true,
    blockReason: null,
  };
}
```

## ANNEXE E — p6.arch.firstCycleLiveProgression.d0.test.ts (fichier complet)

```typescript
/** @vitest-environment node */
/**
 * P6 Option B — FIRST-CYCLE LIVE PROGRESSION
 *
 * Exit proof: Pilot utterance on virgin Project (0 CURRENT Rec) reaches Nora
 * Product turn and materializes Lifecycle Recommendation via Product path —
 * WITHOUT seeding Rec / traj / HD / cycle, and WITHOUT calling
 * materializeLifecycleRecommendationFromStructuredOutput in the test.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  setConversationProviderForTests,
  type ConversationProvider,
  type ProviderChatMessage,
  type ProviderCompletionResult,
  type ProviderInputItem,
  type ProviderRoundResult,
} from "@/lib/platform/ai";
import { projectAssistantSendAction } from "@/features/project-assistant/actions";
import {
  projectAssistantAdvanceFramingContinuityAction,
  projectAssistantReadFramingContinuityAction,
} from "@/features/project-assistant/preCycleCandidateTrajectoryActions";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import { resetMw5ChallengeStoreForTests } from "@/features/project-assistant/f2/mw5ChallengeSessionStore";
import { resetPendingGenericPrepareOfferStoreForTests } from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
import { classifyTrajectoryBinding } from "@/lib/oa/cycle";
import { PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import { W2_REGISTRY_ROOT, W2_SCHEMAS_ROOT } from "./w2Harness";

const ATELIER_NOVA_FIRST_CYCLE = `Nora, maintenant qu'AtelierNova est créé, je souhaite démarrer notre premier cycle de travail.

Je propose un cycle Cadrage, avec un objectif simple : qualifier le périmètre fonctionnel de notre première version, puis préparer une première mission Cursor pour construire l'application.

Je veux privilégier rapidement un résultat fonctionnel, sans documentation excessive.

Si le cycle Cadrage est adapté, accompagne-moi dans sa préparation et son démarrage effectif dans Studio, en me présentant les décisions que je dois prendre.

Pour le moment, ne lance aucune exécution Cursor.`;

const tempDirs: string[] = [];
let previousPilot: string | undefined;
let previousMorris: string | undefined;
let previousCursorReal: string | undefined;
let previousAllowReset: string | undefined;
let previousProvider: string | undefined;

function restoreEnv(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

class FixedIdSource implements LocalProjectIdSource {
  private n = 0;
  constructor(private readonly prefix: string) {}
  nextProjectId(): string {
    this.n += 1;
    return `prj:${this.prefix}-${this.n}`;
  }
  nextLpsVersionId(): string {
    return `lps:${this.prefix}-${this.n}`;
  }
  nextCorrelationId(): string {
    return `cor:${this.prefix}-${this.n}`;
  }
}

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

const SIGNALS_OK = {
  structuralChange: false,
  securityImpact: false,
  architectureImpact: false,
  dataImpact: false,
  irreversible: false,
  lowRiskBounded: true,
};

/**
 * Fake Nora — substitutes OpenAI only.
 * - F2 intent analysis → actionable Cadrage
 * - nora_product_turn_with_optional_lr → NEXT_CYCLE Recommendation (structured)
 * Never writes OA; never calls materialize* directly.
 */
class FirstCycleProgressionFakeProvider implements ConversationProvider {
  readonly providerId = "fake-test";
  private n = 0;
  productTurnCalls = 0;
  intentAnalysisCalls = 0;
  seenSchemas: string[] = [];

  private productTurnPayload(): string {
    return JSON.stringify({
      narrative:
        "Je recommande un cycle Cadrage pour qualifier le périmètre d'AtelierNova avant toute mission Cursor.",
      preCycleRoutingAssessment: {
        ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
      },
      lifecycleRecommendation: {
        intent: "NEXT_CYCLE",
        statement:
          "Envisager un Cadrage pour qualifier le périmètre fonctionnel de la première version.",
        subjectCycleInstanceId: null,
        targetCycleInstanceId: null,
        targetCycleTypeId: "cyc:framing",
        rationale:
          "Project vierge — premier travail gouverné supportable avant exécution.",
        authority: "none",
        isHumanDecision: false,
        qualificationSignals: { ...SIGNALS_OK },
      },
      activeCycleWork: null,
      conversationGuidance: {
        kind: "RECOMMEND_NEXT_STEP",
        scope: "LIFECYCLE_TRANSITION",
        statement:
          "Validez la direction proposée pour préparer la trajectoire du Cadrage.",
        rationale: "first-cycle-progression-fake",
      },
      journalDelta: null,
      reservationDelta: null,
    });
  }

  async completeStructured(input: {
    messages: ProviderChatMessage[];
    schemaName: string;
    jsonSchema: Record<string, unknown>;
  }): Promise<ProviderCompletionResult> {
    void input.jsonSchema;
    this.seenSchemas.push(input.schemaName);
    if (input.schemaName === "nora_product_turn_with_optional_lr") {
      this.productTurnCalls += 1;
      this.n += 1;
      return {
        text: this.productTurnPayload(),
        usage: {
          inputTokens: 20,
          outputTokens: 40,
          totalTokens: 60,
          model: "fake-test-model",
          providerResponseId: `fc-prod-${this.n}`,
        },
      };
    }
    return this.complete(input.messages);
  }

  async complete(messages: ProviderChatMessage[]): Promise<ProviderCompletionResult> {
    this.n += 1;
    const isF2 = messages.some(
      (m) => m.role === "system" && m.content.includes("SFIA Studio F2"),
    );
    if (isF2) this.intentAnalysisCalls += 1;
    const current = demandeCourante(lastUserContent(messages));
    const usage = {
      inputTokens: 10,
      outputTokens: 5,
      totalTokens: 15,
      model: "fake-test-model",
      providerResponseId: `fc-intent-${this.n}`,
    };
    const isStart =
      /\b(je\s+(veux|souhaite)\s+(d[eé]marrer|lancer)|d[eé]marrage\s+effectif|d[eé]marre[- ]?le|démarrer\s+notre\s+premier)\b/i.test(
        current,
      );
    if (isStart && !/poursuivons la recommandation/i.test(current)) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "actionable",
          candidateCycleTypeId: "cyc:framing",
          signals: SIGNALS_OK,
          cognitiveWorkload: null,
          contradictionCandidate: null,
          challengeResponseAssessment: null,
          objective: "Qualifier le premier cycle Cadrage",
          scope: "Sans exécution Cursor",
          rephrasedRequest: current.slice(0, 200),
          outOfScope: ["Cursor execute"],
          risks: [],
          reservations: [],
          stopConditions: ["AUCUNE EXÉCUTION"],
          activatedBlocks: ["qualification"],
          expectedOutcome: "Cycle Cadrage actif",
          criticalJustification: null,
          requestedOperation: null,
          executionIntent: null,
          continuationKind: null,
          artifactMaterializationOperation: null,
          pilotDecisionCandidate: null,
        })}`,
        usage,
      };
    }
    return {
      text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
        intentClass: "actionable",
        candidateCycleTypeId: "cyc:framing",
        signals: SIGNALS_OK,
        cognitiveWorkload: null,
        contradictionCandidate: null,
        challengeResponseAssessment: null,
        objective: "Qualifier le premier cycle Cadrage",
        scope: "Sans exécution Cursor",
        rephrasedRequest: current.slice(0, 200),
        outOfScope: ["Cursor execute"],
        risks: [],
        reservations: [],
        stopConditions: ["AUCUNE EXÉCUTION"],
        activatedBlocks: ["qualification"],
        expectedOutcome: "Cycle Cadrage actif",
        criticalJustification: null,
        requestedOperation: null,
        executionIntent: null,
        continuationKind: null,
        artifactMaterializationOperation: null,
        pilotDecisionCandidate: {
          disposition: "accept",
          targetKind: "current_recommendation",
          rationale: "ok",
        },
      })}`,
      usage,
    };
  }

  async completeRound(input: {
    items: ProviderInputItem[];
    tools: unknown[];
  }): Promise<ProviderRoundResult> {
    void input.tools;
    void input.items;
    // Fake F1 Agents path uses completeRound + product-turn outputType coercion.
    this.productTurnCalls += 1;
    this.n += 1;
    return {
      kind: "message",
      text: this.productTurnPayload(),
      usage: {
        inputTokens: 20,
        outputTokens: 40,
        totalTokens: 60,
        model: "fake-test-model",
        providerResponseId: `fc-round-${this.n}`,
      },
    };
  }
}

async function bootVirginNoRec(suffix: string) {
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = "1";
  resetRuntimeApplicationServiceForTests();
  resetF2ProposalStoreForTests();
  resetMw5ChallengeStoreForTests();
  resetPendingGenericPrepareOfferStoreForTests();
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "fc-prog-"));
  tempDirs.push(dir);
  const productDbPath = path.join(dir, `${suffix}.sqlite`);
  const runtime = getRuntimeApplicationService({
    registryRoot: W2_REGISTRY_ROOT,
    schemasRoot: W2_SCHEMAS_ROOT,
    nowIso: "2026-09-09T20:00:00.000Z",
    idSource: new FixedIdSource(`fcp-${suffix}`),
    auditMode: "noop",
    productDbPath,
  });
  if (!runtime.oa) throw new Error("oa missing");
  const created = await runtime.createProject({
    name: `AtelierNova FC ${suffix}`,
    objective: "Ateliers et inscriptions — premier cycle",
    context: "associations",
    criticality: "STANDARD",
    constraints: [],
    shortReference: `FC${suffix}`,
    idempotencyKey: `idem:fcp-${suffix}`,
  });
  if (!created.ok) throw new Error("create failed");
  const projectId = created.projectId;
  const oa = runtime.oa;
  expect(await oa.cycleServices.cycles.listByProject(projectId)).toHaveLength(0);
  expect(
    await oa.cycleServices.trajectories.hasAnyByProjectId(projectId),
  ).toBe(false);
  expect(
    (await oa.decisionServices.decisions.listByProject(projectId)).length,
  ).toBe(0);
  expect(
    (await oa.executionContractServices.contracts.listByProject(projectId))
      .length,
  ).toBe(0);
  const before = await projectAssistantReadFramingContinuityAction({
    projectId,
  });
  expect(before.continuity?.phase).toBe("blocked_no_recommendation");
  expect(before.continuity?.hasCurrentNextCycleRecommendation).toBe(false);
  return {
    runtime,
    projectId,
    sessionDbPath: path.join(dir, `${suffix}-session.sqlite`),
  };
}

describe("P6 arch — first-cycle live progression (utterance → Nora → Rec)", () => {
  const provider = new FirstCycleProgressionFakeProvider();

  beforeEach(() => {
    previousPilot = process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousCursorReal = process.env.SFIA_STUDIO_CURSOR_REAL;
    previousAllowReset = process.env.SFIA_V2_RUNTIME_ALLOW_RESET;
    previousProvider = process.env.OPS1_CONVERSATION_PROVIDER;
    process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = "1";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_STUDIO_CURSOR_REAL = "0";
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    provider.productTurnCalls = 0;
    provider.intentAnalysisCalls = 0;
    setConversationProviderForTests(provider);
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    resetRuntimeApplicationServiceForTests();
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetPendingGenericPrepareOfferStoreForTests();
    vi.restoreAllMocks();
    while (tempDirs.length) {
      const d = tempDirs.pop();
      if (d) fs.rmSync(d, { recursive: true, force: true });
    }
    restoreEnv("SFIA_STUDIO_LOCAL_PILOT_AUTHORITY", previousPilot);
    restoreEnv("SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY", previousMorris);
    restoreEnv("SFIA_STUDIO_CURSOR_REAL", previousCursorReal);
    restoreEnv("SFIA_V2_RUNTIME_ALLOW_RESET", previousAllowReset);
    restoreEnv("OPS1_CONVERSATION_PROVIDER", previousProvider);
  });

  it("AtelierNova utterance — Nora Product turn materializes CURRENT Rec; full journey to ACTIVE sans EC", async () => {
    const { runtime, projectId, sessionDbPath } = await bootVirginNoRec("live");
    const oa = runtime.oa!;

    const turn = await projectAssistantSendAction({
      projectId,
      content: ATELIER_NOVA_FIRST_CYCLE,
      sessionDbPath,
      provider,
    });
    expect(turn.ok).toBe(true);
    if (!turn.ok) throw new Error(turn.message ?? "turn");

    // Must not strand on preconditions-only Option B copy
    expect(turn.text).not.toMatch(
      /Studio a besoin d'une recommandation de cycle puis d'une trajectoire/i,
    );
    expect(turn.text).not.toMatch(
      /décision Pilote explicite reste nécessaire avant de préparer un contrat d'exécution/i,
    );
    expect(turn.text).not.toMatch(
      /Contexte projet conservé — aucun cycle artificiel créé/,
    );

    // Nora Product turn actually ran (Fake schema path)
    expect(provider.productTurnCalls).toBeGreaterThanOrEqual(1);

    const afterRec = await projectAssistantReadFramingContinuityAction({
      projectId,
    });
    expect(afterRec.continuity?.hasCurrentNextCycleRecommendation).toBe(true);
    expect(afterRec.continuity?.phase).toBe("recommendation_ready");

    expect((await oa.cycleServices.cycles.listByProject(projectId)).length).toBe(
      0,
    );
    expect(
      (await oa.executionContractServices.contracts.listByProject(projectId))
        .length,
    ).toBe(0);
    expect(
      (await oa.decisionServices.decisions.listByProject(projectId)).length,
    ).toBe(0);

    // Progress via Product conversation → candidate traj
    const progress = await projectAssistantSendAction({
      projectId,
      content: "OK, poursuivons la recommandation de Cadrage.",
      sessionDbPath,
      provider,
    });
    expect(progress.ok).toBe(true);
    const afterPrep = await projectAssistantReadFramingContinuityAction({
      projectId,
    });
    expect(afterPrep.continuity?.phase).toBe("awaiting_trajectory_decision");
    expect(afterPrep.continuity?.presentationDigest).toBeTruthy();

    const approved = await projectAssistantAdvanceFramingContinuityAction({
      projectId,
      step: "approve_candidate",
      presentationDigest: afterPrep.continuity!.presentationDigest!,
    });
    expect(approved.ok).toBe(true);
    if (approved.continuity?.phase === "trajectory_decided_prepare_cycle") {
      const prep = await projectAssistantAdvanceFramingContinuityAction({
        projectId,
        step: "prepare_cycle",
      });
      expect(prep.ok).toBe(true);
    }

    const ready = await projectAssistantReadFramingContinuityAction({
      projectId,
    });
    expect(ready.continuity?.phase).toBe("ready_to_start");
    const prepared = await oa.cycleServices.cycles.listByProject(projectId);
    expect(prepared).toHaveLength(1);
    expect(classifyTrajectoryBinding(prepared[0]!)).toBe(
      "COMPLETE_TRAJECTORY_BOUND",
    );

    const start = await projectAssistantSendAction({
      projectId,
      content: "Je souhaite démarrer le Cadrage.",
      sessionDbPath,
      provider,
    });
    expect(start.ok).toBe(true);
    if (!start.ok) throw new Error(start.message ?? "start");
    expect(start.text).toMatch(/est maintenant actif/i);
    expect(start.project.activeCycleInstanceId).toBeTruthy();

    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) throw new Error("lps");
    expect(lps.livingProjectState.activeCycleInstanceId).toBe(
      start.project.activeCycleInstanceId,
    );
    expect(
      (await oa.executionContractServices.contracts.listByProject(projectId))
        .length,
    ).toBe(0);
  });

  it("invalid Nora Product turn — no artificial Recommendation / cycle / EC", async () => {
    const { projectId, sessionDbPath } = await bootVirginNoRec("neg");
    const nullLrPayload = JSON.stringify({
      narrative: "Pas de recommandation claire.",
      preCycleRoutingAssessment: {
        ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
        candidateCycleSupportable: false,
      },
      lifecycleRecommendation: null,
      activeCycleWork: null,
      conversationGuidance: null,
    });
    const bad = new (class implements ConversationProvider {
      readonly providerId = "fake-test";
      async completeStructured(input: {
        messages: ProviderChatMessage[];
        schemaName: string;
        jsonSchema: Record<string, unknown>;
      }): Promise<ProviderCompletionResult> {
        void input.jsonSchema;
        if (input.schemaName === "nora_product_turn_with_optional_lr") {
          return {
            text: nullLrPayload,
            usage: {
              inputTokens: 1,
              outputTokens: 1,
              totalTokens: 2,
              model: "fake-test-model",
              providerResponseId: "neg-prod",
            },
          };
        }
        return provider.complete(input.messages);
      }
      complete = provider.complete.bind(provider);
      async completeRound(): Promise<ProviderRoundResult> {
        return {
          kind: "message",
          text: nullLrPayload,
          usage: {
            inputTokens: 1,
            outputTokens: 1,
            totalTokens: 2,
            model: "fake-test-model",
            providerResponseId: "neg-round",
          },
        };
      }
    })();
    setConversationProviderForTests(bad);

    const turn = await projectAssistantSendAction({
      projectId,
      content: ATELIER_NOVA_FIRST_CYCLE,
      sessionDbPath,
      provider: bad,
    });
    expect(turn.ok).toBe(true);
    const snap = await projectAssistantReadFramingContinuityAction({
      projectId,
    });
    expect(snap.continuity?.hasCurrentNextCycleRecommendation).toBe(false);
    expect(snap.continuity?.phase).toBe("blocked_no_recommendation");
    const oa = getRuntimeApplicationService().oa!;
    expect((await oa.cycleServices.cycles.listByProject(projectId)).length).toBe(
      0,
    );
    expect(
      (await oa.executionContractServices.contracts.listByProject(projectId))
        .length,
    ).toBe(0);
  });

  it("inventory unavailable still fail-closed (no false empty → Nora)", async () => {
    const { projectId, sessionDbPath } = await bootVirginNoRec("inv");
    const oa = getRuntimeApplicationService().oa!;
    const spy = vi
      .spyOn(oa.cycleServices.cycles, "listByProject")
      .mockRejectedValue(new Error("simulated_inventory_unavailable"));

    const turn = await orchestrateAssistantSend({
      projectId,
      content: "Je souhaite démarrer le Cadrage.",
      sessionDbPath,
    });
    expect(turn.ok).toBe(true);
    if (!turn.ok) throw new Error(turn.message ?? "turn");
    expect(turn.text).toMatch(/inventaire des cycles.*indisponible/i);
    expect(turn.f2?.turnKind).toBe("f2_blocked");
    spy.mockRestore();
  });
});
```

## ANNEXE F — p6.arch.virginFirstCycleJourney.d0.test.ts (fichier complet)

```typescript
/** @vitest-environment node */
/**
 * P6 Architecture Recovery continuation — DETERMINISTIC FULL FIRST-CYCLE JOURNEY
 * from a truly virgin Product Project (0 cycle / 0 traj / 0 HD / 0 EC).
 *
 * Recommendation is materialized via Product lifecycleRecommendation path
 * (Nora structured-output seam) — NOT by seeding Trajectory/Cycle/HD/EC.
 * Decision + prepare + START use Product front-doors.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  setConversationProviderForTests,
  type ConversationProvider,
  type ProviderChatMessage,
  type ProviderCompletionResult,
  type ProviderInputItem,
  type ProviderRoundResult,
} from "@/lib/platform/ai";
import { projectAssistantSendAction } from "@/features/project-assistant/actions";
import {
  projectAssistantAdvanceFramingContinuityAction,
  projectAssistantReadFramingContinuityAction,
} from "@/features/project-assistant/preCycleCandidateTrajectoryActions";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import { resetMw5ChallengeStoreForTests } from "@/features/project-assistant/f2/mw5ChallengeSessionStore";
import { resetPendingGenericPrepareOfferStoreForTests } from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
import {
  materializeLifecycleRecommendationFromStructuredOutput,
  NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  resolveTrajectoryBootstrapPresence,
  classifyTrajectoryBinding,
} from "@/lib/oa/cycle";
import { PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import type { Digest, DoctrinePackagePin } from "@/lib/oa/doctrine";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import { W2_REGISTRY_ROOT, W2_SCHEMAS_ROOT } from "./w2Harness";

const VALID_DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;
const VALID_PIN: DoctrinePackagePin = {
  doctrinePackageId: "pkg:studio-v3-oa",
  version: "1.0.0",
  digest: VALID_DIGEST,
};

const tempDirs: string[] = [];
let previousPilot: string | undefined;
let previousMorris: string | undefined;
let previousCursorReal: string | undefined;
let previousAllowReset: string | undefined;
let previousProvider: string | undefined;

function restoreEnv(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

class FixedIdSource implements LocalProjectIdSource {
  private n = 0;
  constructor(private readonly prefix: string) {}
  nextProjectId(): string {
    this.n += 1;
    return `prj:${this.prefix}-${this.n}`;
  }
  nextLpsVersionId(): string {
    return `lps:${this.prefix}-${this.n}`;
  }
  nextCorrelationId(): string {
    return `cor:${this.prefix}-${this.n}`;
  }
}

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

class VirginJourneyFakeProvider implements ConversationProvider {
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

  async complete(messages: ProviderChatMessage[]): Promise<ProviderCompletionResult> {
    this.n += 1;
    const current = demandeCourante(lastUserContent(messages));
    const usage = {
      inputTokens: 10,
      outputTokens: 5,
      totalTokens: 15,
      model: "fake-test-model",
      providerResponseId: `virgin-${this.n}`,
    };
    const isStart =
      /\b(je\s+(veux|souhaite)\s+(d[eé]marrer|lancer)|d[eé]marrage\s+effectif|d[eé]marre[- ]?le)\b/i.test(
        current,
      );
    if (isStart) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "actionable",
          candidateCycleTypeId: null,
          signals: null,
          cognitiveWorkload: null,
          contradictionCandidate: null,
          challengeResponseAssessment: null,
          objective: null,
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
          executionIntent: null,
          continuationKind: null,
          artifactMaterializationOperation: null,
          pilotDecisionCandidate: null,
        })}`,
        usage,
      };
    }
    return {
      text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
        intentClass: "actionable",
        candidateCycleTypeId: "cyc:framing",
        signals: {
          structuralChange: false,
          securityImpact: false,
          architectureImpact: false,
          dataImpact: false,
          irreversible: false,
          lowRiskBounded: true,
        },
        cognitiveWorkload: null,
        contradictionCandidate: null,
        challengeResponseAssessment: null,
        objective: "Qualifier le premier cycle Cadrage",
        scope: "Sans exécution Cursor",
        rephrasedRequest: current.slice(0, 160),
        outOfScope: ["Cursor execute"],
        risks: [],
        reservations: [],
        stopConditions: ["AUCUNE EXÉCUTION"],
        activatedBlocks: ["qualification"],
        expectedOutcome: "Cycle Cadrage actif",
        criticalJustification: null,
        requestedOperation: null,
        executionIntent: null,
        continuationKind: null,
        artifactMaterializationOperation: null,
        pilotDecisionCandidate: {
          disposition: "accept",
          targetKind: "current_recommendation",
          rationale: "ok",
        },
      })}`,
      usage,
    };
  }

  async completeRound(input: {
    items: ProviderInputItem[];
    tools: unknown[];
  }): Promise<ProviderRoundResult> {
    void input.tools;
    return {
      kind: "message",
      text: "[TEST/FAKE · NON LIVE] virgin-journey",
      usage: {
        inputTokens: 1,
        outputTokens: 1,
        totalTokens: 2,
        model: "fake-test-model",
        providerResponseId: "virgin-round",
      },
    };
  }
}

async function assertVirginProduct(
  oa: NonNullable<ReturnType<typeof getRuntimeApplicationService>["oa"]>,
  projectId: string,
) {
  const cycles = await oa.cycleServices.cycles.listByProject(projectId);
  expect(cycles).toHaveLength(0);
  expect(
    await oa.cycleServices.trajectories.hasAnyByProjectId(projectId),
  ).toBe(false);
  const traj = await oa.cycleServices.trajectories.findCurrentByProjectId(
    projectId,
  );
  expect(traj).toBeNull();
  const decisions = await oa.decisionServices.decisions.listByProject(projectId);
  expect(decisions).toHaveLength(0);
  const contracts =
    await oa.executionContractServices.contracts.listByProject(projectId);
  expect(contracts).toHaveLength(0);
  const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
    projectId,
  });
  expect(lps.ok).toBe(true);
  if (lps.ok) {
    expect(lps.livingProjectState.activeCycleInstanceId ?? null).toBeNull();
  }
}

async function bootVirginProject(suffix: string) {
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = "1";
  resetRuntimeApplicationServiceForTests();
  resetF2ProposalStoreForTests();
  resetMw5ChallengeStoreForTests();
  resetPendingGenericPrepareOfferStoreForTests();
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "virgin-fc-"));
  tempDirs.push(dir);
  const productDbPath = path.join(dir, `${suffix}.sqlite`);
  const runtime = getRuntimeApplicationService({
    registryRoot: W2_REGISTRY_ROOT,
    schemasRoot: W2_SCHEMAS_ROOT,
    nowIso: "2026-09-09T20:00:00.000Z",
    idSource: new FixedIdSource(`vg-${suffix}`),
    auditMode: "noop",
    productDbPath,
  });
  if (!runtime.oa) throw new Error("oa missing");
  const created = await runtime.createProject({
    name: `Virgin FC ${suffix}`,
    objective: "Premier cycle Cadrage depuis Project vierge",
    context: "AtelierNova-like greenfield",
    criticality: "STANDARD",
    constraints: [],
    shortReference: `VG${suffix}`,
    idempotencyKey: `idem:vg-${suffix}`,
  });
  if (!created.ok) throw new Error("create failed");
  const projectId = created.projectId;
  await assertVirginProduct(runtime.oa, projectId);
  return {
    runtime,
    projectId,
    productDbPath,
    sessionDbPath: path.join(dir, `${suffix}-session.sqlite`),
  };
}

async function materializeCurrentFramingRecommendation(
  projectId: string,
): Promise<void> {
  const oa = getRuntimeApplicationService().oa!;
  const cycles = await oa.cycleServices.cycles.listByProject(projectId);
  const decisions = await oa.decisionServices.decisions.listByProject(projectId);
  const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
    projectId,
  });
  if (!lps.ok) throw new Error("lps");
  const presence = await resolveTrajectoryBootstrapPresence(
    oa.cycleServices.trajectories,
    projectId,
  );
  const project = await oa.projectServices.getProject.execute({ projectId });
  const doctrine =
    (project.ok ? project.project.doctrinePackageRef : null) ?? VALID_PIN;
  const mat = await materializeLifecycleRecommendationFromStructuredOutput({
    projectId,
    structuredOutput: {
      narrative: "Recommandation Cadrage — premier cycle.",
      preCycleRoutingAssessment: {
        ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
      },
      lifecycleRecommendation: {
        intent: "NEXT_CYCLE" as const,
        statement: "Envisager un Cadrage pour qualifier la mission.",
        subjectCycleInstanceId: null,
        targetCycleInstanceId: null,
        targetCycleTypeId: "cyc:framing",
        rationale: "Premier travail gouverné supportable.",
        authority: "none" as const,
        isHumanDecision: false as const,
        qualificationSignals: {
          structuralChange: false,
          securityImpact: false,
          architectureImpact: false,
          dataImpact: false,
          irreversible: false,
          lowRiskBounded: true,
        },
      },
    },
    updateEpistemicState: oa.cycleServices.updateEpistemicState,
    facts: {
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: doctrine.doctrinePackageId,
      doctrinePackageVersion: doctrine.version,
      doctrinePackageDigest: doctrine.digest,
      trajectory: null,
      trajectoryBootstrapPresence: presence,
      decisions,
      evidence: [],
      epistemicItems: await oa.cycleServices.epistemic.listByProject(projectId),
    },
    producedAt: "2026-09-09T20:01:00.000Z",
    createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  });
  expect(mat.materialization?.ok).toBe(true);
}

describe("P6 arch recovery — virgin Project first-cycle journey", () => {
  const provider = new VirginJourneyFakeProvider();

  beforeEach(() => {
    previousPilot = process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousCursorReal = process.env.SFIA_STUDIO_CURSOR_REAL;
    previousAllowReset = process.env.SFIA_V2_RUNTIME_ALLOW_RESET;
    previousProvider = process.env.OPS1_CONVERSATION_PROVIDER;
    process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = "1";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_STUDIO_CURSOR_REAL = "0";
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    setConversationProviderForTests(provider);
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    resetRuntimeApplicationServiceForTests();
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetPendingGenericPrepareOfferStoreForTests();
    vi.restoreAllMocks();
    while (tempDirs.length) {
      const d = tempDirs.pop();
      if (d) fs.rmSync(d, { recursive: true, force: true });
    }
    restoreEnv("SFIA_STUDIO_LOCAL_PILOT_AUTHORITY", previousPilot);
    restoreEnv("SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY", previousMorris);
    restoreEnv("SFIA_STUDIO_CURSOR_REAL", previousCursorReal);
    restoreEnv("SFIA_V2_RUNTIME_ALLOW_RESET", previousAllowReset);
    restoreEnv("OPS1_CONVERSATION_PROVIDER", previousProvider);
  });

  it("ORACLE A–F + K — virgin Project → Rec → traj → HD → prepare → START ACTIVE → reload; START sans EC", async () => {
    const { runtime, projectId, productDbPath, sessionDbPath } =
      await bootVirginProject("e2e");
    const oa = runtime.oa!;

    // ORACLE A — still virgin before recommendation
    await assertVirginProduct(oa, projectId);

    // ORACLE A — Recommendation CURRENT via Product materialization seam (not DB seed)
    await materializeCurrentFramingRecommendation(projectId);
    // Rec must not invent trajectory / cycle / HD / EC
    expect(
      (await oa.cycleServices.trajectories.findCurrentByProjectId(projectId)) ??
        null,
    ).toBeNull();
    expect((await oa.cycleServices.cycles.listByProject(projectId)).length).toBe(
      0,
    );
    expect(
      (await oa.decisionServices.decisions.listByProject(projectId)).length,
    ).toBe(0);
    expect(
      (await oa.executionContractServices.contracts.listByProject(projectId))
        .length,
    ).toBe(0);

    const before = await projectAssistantReadFramingContinuityAction({
      projectId,
    });
    expect(before.continuity?.phase).toBe("recommendation_ready");
    expect(before.continuity?.hasCurrentNextCycleRecommendation).toBe(true);

    // ORACLE B — framing prepare candidate (Product conversation progress, not START)
    const progress = await projectAssistantSendAction({
      projectId,
      content:
        "OK, poursuivons la recommandation de Cadrage. Une mission Cursor pourra venir ensuite — pas maintenant.",
      sessionDbPath,
      provider,
    });
    expect(progress.ok).toBe(true);
    if (!progress.ok) throw new Error(progress.message ?? "progress");
    expect(progress.text).not.toMatch(
      /décision Pilote explicite reste nécessaire avant de préparer un contrat d'exécution/i,
    );
    expect(progress.text).not.toMatch(
      /Contexte projet conservé — aucun cycle artificiel créé/,
    );

    const afterPrep = await projectAssistantReadFramingContinuityAction({
      projectId,
    });
    expect(afterPrep.continuity?.phase).toBe("awaiting_trajectory_decision");
    expect(afterPrep.continuity?.presentationDigest).toBeTruthy();
    // Candidate trajectories are Product-real but not effective CURRENT until HD.
    expect(afterPrep.continuity?.trajectoryId).toBeTruthy();
    expect(
      await oa.cycleServices.trajectories.hasAnyByProjectId(projectId),
    ).toBe(true);
    expect(
      (await oa.cycleServices.trajectories.findCurrentByProjectId(projectId)) ??
        null,
    ).toBeNull();

    // ORACLE C — HumanDecision via Product card seam (digest server-side)
    const approved = await projectAssistantAdvanceFramingContinuityAction({
      projectId,
      step: "approve_candidate",
      presentationDigest: afterPrep.continuity!.presentationDigest!,
    });
    expect(approved.ok).toBe(true);
    expect(
      (await oa.decisionServices.decisions.listByProject(projectId)).length,
    ).toBeGreaterThanOrEqual(1);
    // After HD, trajectory becomes Product CURRENT.
    expect(
      await oa.cycleServices.trajectories.findCurrentByProjectId(projectId),
    ).toBeTruthy();
    // Conversation "ok" alone must not invent another HD path here — HD is Product action.
    if (
      approved.continuity?.phase === "trajectory_decided_prepare_cycle"
    ) {
      const prep = await projectAssistantAdvanceFramingContinuityAction({
        projectId,
        step: "prepare_cycle",
      });
      expect(prep.ok).toBe(true);
    }

    // ORACLE D — Cycle prepared, linked, not yet ACTIVE
    const ready = await projectAssistantReadFramingContinuityAction({
      projectId,
    });
    expect(ready.continuity?.phase).toBe("ready_to_start");
    expect(ready.continuity?.preparedCycleInstanceId).toBeTruthy();
    const preparedCycles = await oa.cycleServices.cycles.listByProject(projectId);
    expect(preparedCycles.length).toBe(1);
    expect(["proposed", "acknowledged"]).toContain(preparedCycles[0]!.status);
    expect(classifyTrajectoryBinding(preparedCycles[0]!)).toBe(
      "COMPLETE_TRAJECTORY_BOUND",
    );
    expect(
      (await oa.executionContractServices.contracts.listByProject(projectId))
        .length,
    ).toBe(0);

    // ORACLE E + F — explicit START, LPS ACTIVE, no EC required
    const start = await projectAssistantSendAction({
      projectId,
      content: "Je souhaite démarrer le Cadrage.",
      sessionDbPath,
      provider,
    });
    expect(start.ok).toBe(true);
    if (!start.ok) throw new Error(start.message ?? "start");
    expect(start.text).toMatch(/est maintenant actif/i);
    expect(start.project.activeCycleInstanceId).toBeTruthy();

    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) throw new Error("lps");
    expect(lps.livingProjectState.activeCycleInstanceId).toBe(
      start.project.activeCycleInstanceId,
    );
    const activeCycles = await oa.cycleServices.cycles.listByProject(projectId);
    expect(activeCycles).toHaveLength(1);
    expect(activeCycles[0]!.status).toBe("active");
    expect(
      (await oa.executionContractServices.contracts.listByProject(projectId))
        .length,
    ).toBe(0);

    // ORACLE K — re-instantiate Product runtime on same SQLite (service remount)
    const activeId = lps.livingProjectState.activeCycleInstanceId!;
    resetRuntimeApplicationServiceForTests();
    const runtime2 = getRuntimeApplicationService({
      registryRoot: W2_REGISTRY_ROOT,
      schemasRoot: W2_SCHEMAS_ROOT,
      nowIso: "2026-09-09T21:00:00.000Z",
      idSource: new FixedIdSource(`vg-reload`),
      auditMode: "noop",
      productDbPath,
    });
    expect(runtime2.oa).toBeTruthy();
    const oa2 = runtime2.oa!;
    const lps2 = await oa2.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps2.ok).toBe(true);
    if (!lps2.ok) throw new Error("lps2");
    expect(lps2.livingProjectState.activeCycleInstanceId).toBe(activeId);
    const cycles2 = await oa2.cycleServices.cycles.listByProject(projectId);
    expect(cycles2).toHaveLength(1);
    expect(cycles2[0]!.status).toBe("active");
    const continuity2 = await projectAssistantReadFramingContinuityAction({
      projectId,
    });
    expect(continuity2.ok).toBe(true);
    expect(continuity2.continuity?.phase).toBe("active");
    expect(
      (await oa2.executionContractServices.contracts.listByProject(projectId))
        .length,
    ).toBe(0);
  });

  it("ORACLE J — cycle inventory unavailable is fail-closed (not treated as empty)", async () => {
    // Virgin + no recommendation → phase blocked_no_recommendation → early START
    // inventory read. Service error must NOT be assimilated to count===0.
    const { projectId, sessionDbPath } = await bootVirginProject("inv");
    const oa = getRuntimeApplicationService().oa!;
    const before = await projectAssistantReadFramingContinuityAction({
      projectId,
    });
    expect(before.continuity?.phase).toBe("blocked_no_recommendation");

    const spy = vi
      .spyOn(oa.cycleServices.cycles, "listByProject")
      .mockRejectedValueOnce(new Error("simulated_inventory_unavailable"));

    const turn = await orchestrateAssistantSend({
      projectId,
      content: "Je souhaite démarrer le Cadrage.",
      sessionDbPath,
    });
    expect(spy).toHaveBeenCalled();
    expect(turn.ok).toBe(true);
    if (!turn.ok) throw new Error(turn.message ?? "turn");
    expect(turn.text).toMatch(/inventaire des cycles.*indisponible/i);
    expect(turn.text).not.toMatch(
      /besoin d'une recommandation de cycle puis d'une trajectoire/i,
    );
    expect(turn.f2?.turnKind).toBe("f2_blocked");
    spy.mockRestore();
    expect((await oa.cycleServices.cycles.listByProject(projectId)).length).toBe(
      0,
    );
    expect(
      (await oa.executionContractServices.contracts.listByProject(projectId))
        .length,
    ).toBe(0);
  });

  it("ORACLE I — ok go without CURRENT prepare offer does not invent EC after cycle START wording", async () => {
    const { projectId, sessionDbPath } = await bootVirginProject("okgo");
    await materializeCurrentFramingRecommendation(projectId);
    await projectAssistantSendAction({
      projectId,
      content: "OK pour le Cadrage.",
      sessionDbPath,
      provider,
    });
    const turn = await projectAssistantSendAction({
      projectId,
      content: "ok go",
      sessionDbPath,
      provider,
    });
    expect(turn.ok).toBe(true);
    if (!turn.ok) throw new Error(turn.message ?? "okgo");
    expect(turn.text).not.toMatch(/xct:gen-prep:/);
    expect(turn.text).not.toMatch(
      /décision Pilote explicite reste nécessaire avant de préparer un contrat d'exécution/i,
    );
  });

  it("ORACLE F/H intent — mixed START+PREPARE does not invent EC; cycle path remains distinct", async () => {
    const { projectId, sessionDbPath } = await bootVirginProject("mixed");
    await materializeCurrentFramingRecommendation(projectId);
    const turn = await projectAssistantSendAction({
      projectId,
      content:
        "Je souhaite démarrer le Cadrage et préparer en même temps le contrat d'exécution Cursor pour l'outil d'inscriptions.",
      sessionDbPath,
      provider,
    });
    expect(turn.ok).toBe(true);
    if (!turn.ok) throw new Error(turn.message ?? "mixed");
    expect(turn.text).not.toMatch(
      /décision Pilote explicite reste nécessaire avant de préparer un contrat d'exécution/i,
    );
    expect(turn.text).not.toMatch(
      /Contexte projet conservé — aucun cycle artificiel créé/,
    );
    expect(
      (await getRuntimeApplicationService().oa!.executionContractServices.contracts.listByProject(
        projectId,
      )).length,
    ).toBe(0);
  });
});
```

## ANNEXE G — p6.arch.cycleLifecycleVsGenericPrepare.d0.test.ts (fichier complet)

```typescript
/** @vitest-environment node */
/**
 * P6 Architecture Recovery — Option B oracles (deterministic).
 * AtelierNova-like: Cycle Lifecycle must not be diverted to Generic PREPARE.
 * D-ER-17: true execution missions without cycle remain admissible.
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  FakeConversationProvider,
  setConversationProviderForTests,
  type ConversationProvider,
  type ProviderChatMessage,
  type ProviderCompletionResult,
} from "@/lib/platform/ai";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import { resetMw5ChallengeStoreForTests } from "@/features/project-assistant/f2/mw5ChallengeSessionStore";
import { resetPendingGenericPrepareOfferStoreForTests } from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
import {
  discriminateConversationWorkflow,
  hasCycleLifecycleLanguage,
} from "@/features/project-assistant/f2/conversationWorkflowDiscrimination";
import { shouldExcludeGenericPrepareProjectContext } from "@/features/project-assistant/f2/cycleLifecycleConversationCoordinator";
import { validateIntentAnalysisPayload } from "@/features/project-assistant/f2/intentAnalysis";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";

const MARKER_NATURAL_DOC = "__DER16_NATURAL_DOC__";
const MARKER_CYCLE_START = "__ARCH_CYCLE_START__";
const MARKER_MIXED = "__ARCH_MIXED__";

const SIGNALS_OK = {
  structuralChange: false,
  securityImpact: false,
  architectureImpact: false,
  dataImpact: false,
  irreversible: false,
  lowRiskBounded: true,
};

function baseAnalysisJson(over: Record<string, unknown>): Record<string, unknown> {
  return {
    intentClass: "actionable",
    candidateCycleTypeId: "cyc:framing",
    signals: SIGNALS_OK,
    cognitiveWorkload: null,
    contradictionCandidate: null,
    challengeResponseAssessment: "sufficient",
    continuationKind: null,
    artifactMaterializationOperation: null,
    objective: null,
    scope: null,
    rephrasedRequest: null,
    outOfScope: [],
    risks: [],
    reservations: [],
    stopConditions: ["AUCUNE EXÉCUTION SANS AUTORISATION"],
    activatedBlocks: ["qualification"],
    expectedOutcome: null,
    criticalJustification: null,
    requestedOperation: null,
    executionIntent: null,
    pilotDecisionCandidate: null,
    ...over,
  };
}

function intercept(messages: ProviderChatMessage[]): string | null {
  const isF2 = messages.some(
    (m) => m.role === "system" && m.content.includes("SFIA Studio F2"),
  );
  const lastUser = [...messages].reverse().find((m) => m.role === "user");
  const full = lastUser?.content ?? "";
  const cur = full.split("Demande courante (à évaluer):").pop() ?? full;
  let payload: Record<string, unknown> | null = null;
  // Natural-doc uses the same F2-banner gate as der16 E10.
  if (isF2 && cur.includes(MARKER_NATURAL_DOC)) {
    payload = baseAnalysisJson({
      candidateCycleTypeId: null,
      objective: "Écrire une spécification Markdown dans le dépôt du projet",
      scope: "projects/demo/docs",
      rephrasedRequest:
        "Rédiger un document Markdown de spécification dans le dépôt du projet",
      expectedOutcome: "Spécification consultable dans le dépôt du projet",
    });
  } else if (cur.includes(MARKER_CYCLE_START)) {
    payload = baseAnalysisJson({
      signals: { ...SIGNALS_OK, structuralChange: true, architectureImpact: true, lowRiskBounded: false },
      objective: "Démarrer le cycle Cadrage",
      rephrasedRequest: "Démarrer effectivement le cycle Cadrage",
      expectedOutcome: "Cycle Cadrage actif",
      scope: "qualification bornée",
    });
  } else if (cur.includes(MARKER_MIXED)) {
    payload = baseAnalysisJson({
      signals: { ...SIGNALS_OK, architectureImpact: true, lowRiskBounded: false },
      objective: "Préparer un cycle Cadrage et un contrat d'exécution Cursor",
      rephrasedRequest:
        "Propose un cycle Cadrage et prépare le contrat d'exécution",
      expectedOutcome: "Cycle puis contrat",
    });
  }
  if (!payload) return null;
  return `[TEST/FAKE · NON LIVE] ${JSON.stringify(payload)}`;
}

class ArchProvider implements ConversationProvider {
  readonly providerId = "fake-test";
  private readonly inner = new FakeConversationProvider();

  private result(text: string): ProviderCompletionResult {
    return {
      text,
      usage: {
        inputTokens: 1,
        outputTokens: 1,
        totalTokens: 2,
        model: "fake-test-model",
        providerResponseId: "fake-arch",
      },
    };
  }

  async complete(messages: ProviderChatMessage[]): Promise<ProviderCompletionResult> {
    const hit = intercept(messages);
    if (hit) return this.result(hit);
    return this.inner.complete(messages);
  }

  async completeStructured(input: {
    messages: ProviderChatMessage[];
    schemaName: string;
    jsonSchema: Record<string, unknown>;
  }): Promise<ProviderCompletionResult> {
    const hit = intercept(input.messages);
    if (hit) return this.result(hit);
    return this.inner.completeStructured(input);
  }

  async completeRound(
    ...args: Parameters<FakeConversationProvider["completeRound"]>
  ): ReturnType<FakeConversationProvider["completeRound"]> {
    return this.inner.completeRound(...args);
  }
}

function restoreEnvVar(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

describe("P6 arch recovery — Cycle Lifecycle vs Generic PREPARE", () => {
  let runtime: RuntimeApplicationService;
  let previousProvider: string | undefined;
  let previousMorris: string | undefined;
  let previousPilot: string | undefined;
  let previousDetPin: string | undefined;
  let sessionDbPath: string;

  beforeEach(() => {
    previousProvider = process.env.OPS1_CONVERSATION_PROVIDER;
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousPilot = process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
    previousDetPin = process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = "1";
    process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = W2_TEST_PINNED_BASE_HEAD_SHA;
    setConversationProviderForTests(new ArchProvider());
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetPendingGenericPrepareOfferStoreForTests();
    sessionDbPath = tempProductDbPath("p6-arch-session.sqlite");
    runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("p6-arch-product.sqlite"),
      idPrefix: "arch",
    });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetPendingGenericPrepareOfferStoreForTests();
    setConversationProviderForTests(null);
    cleanupW2TempDirs();
    restoreEnvVar("OPS1_CONVERSATION_PROVIDER", previousProvider);
    restoreEnvVar("SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY", previousMorris);
    restoreEnvVar("SFIA_STUDIO_LOCAL_PILOT_AUTHORITY", previousPilot);
    restoreEnvVar("SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA", previousDetPin);
  });

  async function seedProject(suffix: string): Promise<string> {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: `Arch ${suffix}`,
      objective: "Architecture recovery oracles",
      context: "det arch",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `AR${suffix.toUpperCase().slice(0, 6)}`,
      idempotencyKey: `idem:arch-${suffix}`,
    });
    if (!created.ok) throw new Error("createProject");
    const projectId = created.project.projectId;
    // Parity with der16 E10 seed — trajectory present, no active cycle.
    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps0.ok) throw new Error("lps0");
    await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: [{ stepId: "stp:a", order: 1, label: "A", state: "done" }],
      status: "active",
      expectedLpsVersion: lps0.livingProjectState.version,
      createdBy: {
        actorId: "actor:morris",
        role: "project_owner",
        displayName: "Morris",
        authorityLevel: "N3",
      },
    });
    return projectId;
  }

  describe("discrimination unit", () => {
    it("classifies AtelierNova-like START as cycle preempting project-context PREPARE", () => {
      const text =
        "Je valide ta recommandation et je souhaite maintenant démarrer effectivement notre premier cycle de travail. Je propose un cycle Cadrage. Si le cycle Cadrage est adapté, démarre-le dans Studio.";
      expect(hasCycleLifecycleLanguage(text)).toBe(true);
      const analysis = validateIntentAnalysisPayload(
        baseAnalysisJson({
          signals: {
            ...SIGNALS_OK,
            structuralChange: true,
            architectureImpact: true,
            lowRiskBounded: false,
          },
          objective: "Mission Cursor après cadrage",
          rephrasedRequest: "Mission technique Cursor",
        }),
      );
      const d = discriminateConversationWorkflow({
        userContent: text,
        analysis,
        cycleLabel: "Cadrage",
      });
      expect(d.kind === "cycle_lifecycle" || d.kind === "ambiguous_mixed").toBe(
        true,
      );
      expect(shouldExcludeGenericPrepareProjectContext(d)).toBe(true);
    });

    it("does not preempt natural documentary execution without cycle language", () => {
      const text = `Produis-moi une spécification Markdown. ${MARKER_NATURAL_DOC}`;
      const analysis = validateIntentAnalysisPayload(
        baseAnalysisJson({
          candidateCycleTypeId: null,
          objective: "Produire une spécification Markdown",
          rephrasedRequest: text,
          expectedOutcome: "Fichier Markdown",
        }),
      );
      const d = discriminateConversationWorkflow({
        userContent: text,
        analysis,
      });
      expect(d.kind).toBe("execution_mission");
      expect(d.preemptsGenericPrepareProjectContext).toBe(false);
    });
  });

  it("ORACLE 02/AtelierNova-like — START request must not emit Generic PREPARE structural narrative", async () => {
    const projectId = await seedProject("atelier");
    const turn = await orchestrateAssistantSend({
      projectId,
      content: `Je souhaite démarrer effectivement notre premier cycle de travail. Je propose un cycle Cadrage. Si adapté, démarre-le dans Studio. Pas d'autorisation Cursor. ${MARKER_CYCLE_START}`,
      sessionDbPath,
    });
    expect(turn.ok).toBe(true);
    if (!turn.ok) throw new Error(turn.message);

    expect(turn.text).not.toMatch(
      /Contexte projet conservé — aucun cycle artificiel créé/,
    );
    expect(turn.text).not.toMatch(
      /décision Pilote explicite reste nécessaire avant de préparer un contrat d'exécution/i,
    );
    expect(turn.text).toMatch(/cycle|trajectoire|démarr/i);

    const oa = runtime.oa!;
    expect((await oa.cycleServices.cycles.listByProject(projectId)).length).toBe(
      0,
    );
    expect(
      (await oa.executionContractServices.contracts.listByProject(projectId))
        .length,
    ).toBe(0);
  });

  it("ORACLE 10 — ok go after cycle START wording does not invent EC", async () => {
    const projectId = await seedProject("okgo");
    await orchestrateAssistantSend({
      projectId,
      content: `Je souhaite démarrer effectivement le cycle Cadrage. Démarre-le dans Studio. ${MARKER_CYCLE_START}`,
      sessionDbPath,
    });
    const turn2 = await orchestrateAssistantSend({
      projectId,
      content: "ok go",
      sessionDbPath,
    });
    expect(turn2.ok).toBe(true);
    if (!turn2.ok) throw new Error(turn2.message);
    expect(turn2.text).not.toMatch(/xct:gen-prep:/);
    expect(turn2.text).not.toMatch(
      /décision Pilote explicite reste nécessaire avant de préparer un contrat d'exécution/i,
    );
  });

  it("ORACLE 05 — non-cycle documentary language does not preempt D-ER-17 project-context admission", () => {
    // End-to-end project-context PREPARE remains proven by
    // p6.der16.genericNoraToolInvocation E10 (same Product entry).
    // This guard locks the Option B discrimination contract.
    const text = `Produis-moi une spécification Markdown pour le projet. ${MARKER_NATURAL_DOC}`;
    const analysis = validateIntentAnalysisPayload(
      baseAnalysisJson({
        candidateCycleTypeId: null,
        objective: "Écrire une spécification Markdown dans le dépôt du projet",
        rephrasedRequest: text,
        expectedOutcome: "Spécification consultable",
      }),
    );
    const d = discriminateConversationWorkflow({ userContent: text, analysis });
    expect(d.kind).toBe("execution_mission");
    expect(d.preemptsGenericPrepareProjectContext).toBe(false);
    expect(shouldExcludeGenericPrepareProjectContext(d)).toBe(false);
  });

  it("ORACLE 15 — mixed cycle + execution without silent PREPARE fusion", async () => {
    const projectId = await seedProject("mixed");
    const turn = await orchestrateAssistantSend({
      projectId,
      content: `Propose un cycle Cadrage et prépare en même temps le contrat d'exécution Cursor pour l'outil d'inscriptions. ${MARKER_MIXED}`,
      sessionDbPath,
    });
    expect(turn.ok).toBe(true);
    if (!turn.ok) throw new Error(turn.message);
    expect(turn.text).not.toMatch(
      /décision Pilote explicite reste nécessaire avant de préparer un contrat d'exécution/i,
    );
    expect(turn.text).toMatch(/distinct|cycle|trajectoire|contrat|démarr/i);
  });
});
```

## FIN REVIEW PACK FULL
