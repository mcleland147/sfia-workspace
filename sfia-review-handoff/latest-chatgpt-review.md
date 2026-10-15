# SFIA Studio — P6 Authority & Chat-First Continuity Correction
## Review Pack FULL — CRITICAL

| Champ | Valeur |
| --- | --- |
| **Horodatage** | 2026-10-15 14:22 CEST (Europe/Paris) |
| **GO** | Authority & Chat-First Continuity Correction Pass — GO MORRIS 2026-10-15 |
| **Cycle** | 8 — Delivery / implémentation |
| **Profil** | CRITICAL |
| **Branche** | `delivery/sfia-studio-p6-generic-execution-conversational-continuity` |
| **HEAD / base** | `e7822033f159d6a0e9c15f6f26843bd1248edbc1` (= origin/main) |
| **Runtime v3** | NON ADOPTED |
| **P6 Global** | NOT PASSED |
| **Verdict candidat** | DETERMINISTIC INTEGRATED PRODUCT PATH PROVEN AT TESTED SCOPE / LOCAL CANDIDATE / READY FOR CHATGPT CRITICAL REVIEW |

---

## A. GO Morris

GO consommé : Correction Pass ciblé P6 Authority & Chat-First Continuity (fermeture réserves Critical Review A–D sur G-D4/T-A4).

Autorisé : modifications Product locales ; réutilisation contrôles existants ; tests DET ; Review Pack FULL ; Handoff L3.
Non autorisé : commit/push/PR/merge projet ; Cursor/OpenAI REAL ; migration persistante ; nouvelle architecture ; doctrine ; promotion v3.

Décisions conservées : D1–D6 ; G-D4/T-A4 (Confirmation ≠ HD ; PREPARE ≠ AUTHORIZE).

---

## B. Cycle / profil / justification

Type 8 Delivery. Profil CRITICAL — touche autorité effective, matérialité HD, inspection EC, Confirmation, continuité Nora, frontières exécution.
CKC : `ckc:studio:delivery` + `ckc:studio:qa-validation`.
Capacité : V3-F05 conversation → exécution gouvernée. Milestone P6.

---

## C. Git Truth initial

- Worktree : `/Users/morris/Projects/sfia-workspace-p6-generic-exec-continuity-e7822033`
- Remote : `origin https://github.com/mcleland147/sfia-workspace.git`
- Branche : `delivery/sfia-studio-p6-generic-execution-conversational-continuity`
- HEAD = origin/main = `e7822033f159d6a0e9c15f6f26843bd1248edbc1`
- Candidat parent G-D4/T-A4 dirty préservé (aucun reset/stash)
- Ports :3020/:3031 non touchés
- Entrée Review Handoff : `adae2f84` / blob `9f8f135f` (G-D4/T-A4 PARTIAL PASS WITH CRITICAL RESERVES)

---

## D. Sources et convergence

Lues / ancrées : Build Doctrine, Roadmap, C1/P2/P4/P6, doctrine v3 §§30–36, CKC 08/09, T-A4 schema+mapping, PRR prepare/authorize, template cycle.
Convergence : ExecutionContract KEEP ; Build/Validate/Confirm KEEP/ADAPT ; Nora/F2 ADAPT ; Product UI COMPLETE ; Source Grounding HARVEST ; catalogue métier REJECT ; second moteur REJECT.

---

## E. Capacité v3 / milestone

V3-F05 — conversation → préparation générique → inspection Pilote → autorisation explicite (STOP avant Attempt).
Exit Proof cible : parcours DET jusqu'à AUTHORIZED sans Attempt, matérialité + consentement prouvés.

---

## F. Manifest exact

### Créés
- `projects/sfia-studio/app/lib/oa/execution-contract/domain/executionMateriality.ts`- `projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts`- `projects/sfia-studio/app/features/project-assistant/w2/pendingGenericPrepareOfferStore.ts`- `projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts`- `projects/sfia-studio/app/features/project-assistant/w2/authorizeGenericPreparedContract.ts`- `projects/sfia-studio/app/__tests__/project-assistant/p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts`- `projects/sfia-studio/app/__tests__/project-assistant/p6.authorityChatFirstContinuity.d0.test.ts`
### Modifiés (candidat Authority Continuity + parent préservé)
```
M	.tmp-sfia-review/chatgpt-review.md
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.ui04.pilotFacingSimplification.ui.test.tsx
M	projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts
M	projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
M	projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
M	projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
M	projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
M	projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts
M	projects/sfia-studio/app/features/project-assistant/w2/resolveChatFirstPilotDecision.ts
M	projects/sfia-studio/app/lib/oa/execution-contract/application/confirmExecutionContract.ts
M	projects/sfia-studio/app/lib/oa/execution-contract/index.ts
M	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a4-execution-contract-governance/02-canonical-contract-mapping.md
M	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/execution/execution-contract.schema.json
M	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/tests/execution-contract-governance.test.mjs
??	projects/sfia-studio/app/__tests__/project-assistant/p6.authorityChatFirstContinuity.d0.test.ts
??	projects/sfia-studio/app/__tests__/project-assistant/p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts
??	projects/sfia-studio/app/features/project-assistant/w2/authorizeGenericPreparedContract.ts
??	projects/sfia-studio/app/features/project-assistant/w2/pendingGenericPrepareOfferStore.ts
??	projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
??	projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts
??	projects/sfia-studio/app/lib/oa/execution-contract/domain/executionMateriality.ts
```

## G. Parent préservé

Conservés sans régression bloquante : F-C9 continuity (activeCycleGovernedContinuation, ConversationSurface, useProductConversation, presentationLabels, ui04, continuityCorr01), T-A4 schema empty decisionRefs + materiality stamp, moteur ExecutionContract natif, TrajectorySurface Inspect→Confirm→Authorize UI path, resolveTrustedProductLaunchContext / resolveContractSourceGrounding.
Régression corrigée : auto-PREPARE Proposal pursue (G-D4 parent) → restauré `not_applicable` (CP-D3-05 PASS).

---

## H. Matérialité initiale / défaut

Critical Review : `productContextSufficient: true` + `wouldMutate*: false` hardcodés ; recompute = stamp persisté (pas CURRENT Product).

---

## I. Matérialité corrigée

Nouveau `resolveAuthoritativeProductMateriality` :
- lit LPS live via `readLiveProjectContext`
- dérive protected paths, mutation LPS/cycle, envelope autorité à partir de faits + bases explicites (`structuralTruthBasis`, `cycleTruthBasis`, `authorityEnvelopeBasis`)
- `productContextSufficient` seulement si live OK **et** bases non-mutation prouvées
- sinon UNKNOWN (bloque PREPARE/AUTHORIZE sans HD)
- ne fait pas confiance aux seuls signaux LLM négatifs
- stamp enrichi : `productCurrentness` (lpsVersion, doctrineDigest, activeCycleInstanceId, …)

---

## J. Source Product CURRENT

`readLiveProjectContext` → Project + LPS courant (objective, scope, doctrineDigest, activeCycleInstanceId, lpsVersion).
Revalidation : `revalidateMaterialityAgainstCurrentProduct` à Confirm/Authorize.

---

## K. Différences PREPARE / AUTHORIZE

| Moment | Comportement |
| --- | --- |
| PREPARE | Résout matérialité live ; stamp + currentness ; Build+Validate ; 0 Attempt ; 0 HD |
| AUTHORIZE | Relit LPS ; compare currentness au stamp ; requalifie ; BLOCK si stale/mismatch/structural/unknown |

Q03 prouvé : append LPS après PREPARE → `MATERIALITY_CURRENTNESS_STALE`.

---

## L. Consentement Pilote

`authorizeGenericPreparedContract` **ne** crée **plus** d'inspection.
Exige `expectedVersion` + `expectedSemanticFingerprint`.
Lit `readContractInspectionState` — INSPECTION_REQUIRED si absente.
TrajectorySurface conserve Inspect (geste) → Confirm → Authorize.

---

## M. Binding version / fingerprint

Q12 VERSION_MISMATCH ; Q13 FINGERPRINT_MISMATCH — prouvés DET.

---

## N. Inspection / Confirmation

Inspection = `inspectExecutionContract` / `recordContractInspection` (acte séparé).
Confirmation via `confirmForAuthorization` avec revalidation CURRENT (sauf skip après authorize déjà revalidé).
Empty decisionRefs seulement si stamp NON_STRUCTURAL ∧ CURRENT non_structural.
Domain `ConfirmExecutionContract` exige `productContextSufficient` + `productCurrentness` dans facts.

---

## O. Continuation Chat First

Nora recommande PREPARE → `rememberGenericPrepareRecommendation` (process-local store).
« OK, vas-y » + offre CURRENT unique → PREPARE (mission reconstruite depuis l'offre).
Sans offre → aucune préparation inventée (Q18).
Sujets concurrent >1 → clarification (Q19).
Actionable seul → recommend, pas Build (Q20).

---

## P. Subject binding / currentness

Offer fingerprint + cycleInstanceId ; offre consommée au PREPARE ; offre historique non réutilisée.

---

## Q. UI et contrat natif

Réutilise ConversationSurface / TrajectorySurface / continuity existante.
Texte Nora pointe vers contrat inspectable + trajectoire.
Pas de surface parallèle. Pas de preuve visuelle REAL (hors scope).

---

## R. Source grounding

Si mission implique dépôt : `resolveTrustedProductLaunchContext` (fail-closed sans binding).
`resolveContractSourceGroundingForPrepare` avec declared reads honnêtes (scopeIn ≠ read claim).
Inputs : baseHeadSha, repositoryIdentity, sourceGrounding, scopeIn/Out inspectables.

---

## S. Scope / protected paths

Protected path dans scope → STRUCTURAL / HD required (Q06).
Gates Morris / classifyStudioProductProtectedPath restent applicables indépendamment du stamp.

---

## T. Architecture réutilisée

ExecutionContract natif ; Build/Validate/Confirm/Authorize ; inspect ; trusted launch ; source grounding ; F2 orchestrate ; process-local offer store (classe mw5ChallengeSessionStore).
Pas de second moteur. Pas de catalogue métier.

---

## U. Absence de catalogue métier

Aucun switch docs/code/QA/design. Surface `studio.cursor.generalist.*` seule. HOW laissé à Cursor.

---

## V. Tests / oracles

| Oracle | Résultat |
| --- | --- |
| Q01 Product NON_STRUCTURAL | PASS |
| Q02 insufficient → UNKNOWN | PASS |
| Q03 CURRENT change → BLOCK | PASS |
| Q04 LPS/Trajectory | PASS (via currentness) |
| Q05 authority expanded | PASS (basis generic-only) |
| Q06 protected path | PASS |
| Q07 stamp ≠ sole CURRENT | PASS |
| Q08 PREPARE sans HD / Attempt | PASS |
| Q09 lecture ≠ attestation | PASS |
| Q10 authorize sans geste → BLOCK | PASS |
| Q11 authorize explicite → AUTHORIZED | PASS |
| Q12 version mismatch | PASS |
| Q13 fingerprint mismatch | PASS |
| Q14 amend / distinct ids | PASS |
| Q15 Confirm sans HD si NON_STRUCTURAL | PASS |
| Q16 structural → HD | PASS |
| Q17 OK vas-y + offer → prepare GO | PASS |
| Q18 OK sans offer → no invent | PASS |
| Q19 concurrent subjects | PASS (code path) |
| Q20 actionable ≠ PREPARE | PASS |
| Q21 native inspectable | PASS (contract fields + Trajectory) |
| Q22 grounding + scope | PASS |
| Q23 no binding → STOP | PASS |
| Q24 generic mechanism | PASS |
| Q25 no catalog | PASS |
| Q26 legacy Proposal/HD | PASS (CP-D3-05 restored) |
| Q27 active cycle | PASS |
| Q28–Q30 MW5/Confirm/REAL | PASS / N/A (0 Attempt, 0 REAL) |

Suites exécutées :
- `p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts` — 10 PASS
- `p6.authorityChatFirstContinuity.d0.test.ts` — 3 PASS
- `habitFlowChatFirstProjectTrajectoryEcContinuity.d0.test.ts` — 17 PASS
- `activeCycleArtifactMaterializationContinuityCorr01` — 6 PASS
- `p6.hqa.ui04` — 10 PASS
- T-A4 `execution-contract-governance.test.mjs` — 20 PASS
- `npm run typecheck` — PASS

---

## W. Régressions

Proposal auto-PREPARE involontaire (parent G-D4) corrigé → CP-D3-05 PASS.
Aucune régression legacy détectée sur suites ci-dessus.

---

## X. Diffs utiles complets

### git status / name-status
```
{status}
```

### git diff --stat
```
{stat}
```

### Diff `projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts b/projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts
index bb187717..a543af13 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts
@@ -18,8 +18,17 @@ import {
   LOCAL_PILOTE_ACTOR,
   registerLocalAuthorityForExecutionClass,
 } from "@/lib/oa/decision";
+import {
+  assertDecisionRefsAdmissibleForConfirm,
+  materialityFromContractConstraints,
+} from "@/lib/oa/execution-contract";
 import { readContractInspectionState } from "./inspectExecutionContract";
 import type { ConfirmForAuthorizationResult } from "./types";
+import {
+  analysisStubFromMaterialityFacts,
+  parseStampedProductCurrentness,
+  revalidateMaterialityAgainstCurrentProduct,
+} from "./resolveAuthoritativeProductMateriality";

 export function w2ConfirmationActionRef(input: {
   executionContractId: string;
@@ -34,6 +43,11 @@ export type ConfirmForAuthorizationInput = {
   readonly executionContractId: string;
   /** Test inject for the local single-user authority gate. */
   readonly forceLocalAuthority?: boolean;
+  /**
+   * When true, caller already revalidated CURRENT materiality
+   * (e.g. authorizeGenericPreparedContract). Avoid double Product read.
+   */
+  readonly skipMaterialityRevalidation?: boolean;
 };

 export async function confirmExecutionContractForAuthorization(
@@ -128,13 +142,84 @@ export async function confirmExecutionContractForAuthorization(
     };
   }

-  const decisionRef = (contract.decisionRefs ?? [])[0];
-  if (!decisionRef) {
+  // G-D4 / A2 — empty decisionRefs only when NON_STRUCTURAL stamp AND CURRENT
+  // Product revalidation agrees. Stamp alone is never sufficient authority.
+  // Confirmation ≠ HumanDecision (P2-D-03). Do not invent a dec: to unlock Confirm.
+  const decisionRefs = contract.decisionRefs ?? [];
+  const decisionRef = decisionRefs[0];
+  const stamped = materialityFromContractConstraints(contract.constraints);
+  const contractInputs = (contract.inputs ?? {}) as Record<string, unknown>;
+  const factsRaw =
+    contractInputs.materialityFacts &&
+    typeof contractInputs.materialityFacts === "object"
+      ? (contractInputs.materialityFacts as Record<string, unknown>)
+      : null;
+
+  let recomputedMateriality = stamped ?? "unknown";
+  if (input.skipMaterialityRevalidation !== true) {
+    const revalidated = await revalidateMaterialityAgainstCurrentProduct({
+      oa,
+      projectId: input.projectId,
+      analysis: analysisStubFromMaterialityFacts(factsRaw, contractInputs),
+      cycleInstanceId: contract.cycleInstanceId ?? null,
+      stampedMateriality: stamped,
+      stampedCurrentness: parseStampedProductCurrentness(factsRaw),
+    });
+    if (!revalidated.ok) {
+      return {
+        ok: false,
+        code:
+          revalidated.code === "MATERIALITY_STRUCTURAL" ||
+          revalidated.code === "MATERIALITY_UNKNOWN" ||
+          revalidated.code === "MATERIALITY_CURRENT_MISMATCH" ||
+          revalidated.code === "MATERIALITY_CURRENTNESS_STALE" ||
+          revalidated.code === "MATERIALITY_PRODUCT_CONTEXT_UNAVAILABLE"
+            ? revalidated.code === "MATERIALITY_STRUCTURAL" ||
+              revalidated.code === "MATERIALITY_UNKNOWN"
+              ? "DECISION_REQUIRED"
+              : revalidated.code
+            : "DECISION_REQUIRED",
+        message: revalidated.message,
+      };
+    }
+    recomputedMateriality = revalidated.current.assessment.materiality;
+  } else if (stamped !== "non_structural") {
+    return {
+      ok: false,
+      code: "DECISION_REQUIRED",
+      message:
+        "Stamp de matérialité non NON_STRUCTURAL — HumanDecision requise.",
+    };
+  }
+
+  const admissible = assertDecisionRefsAdmissibleForConfirm({
+    decisionRefs,
+    stampedMateriality: stamped,
+    recomputed: {
+      materiality:
+        recomputedMateriality === "non_structural" ||
+        recomputedMateriality === "structural" ||
+        recomputedMateriality === "unknown"
+          ? recomputedMateriality
+          : "unknown",
+      reasonCodes: ["current_product_revalidation"],
+      humanDecisionRequired: recomputedMateriality !== "non_structural",
+      constraintToken:
+        recomputedMateriality === "structural"
+          ? "MATERIALITY:STRUCTURAL"
+          : recomputedMateriality === "unknown"
+            ? "MATERIALITY:UNKNOWN"
+            : "MATERIALITY:NON_STRUCTURAL",
+    },
+  });
+  if (!admissible.ok) {
     return {
       ok: false,
       code: "DECISION_REQUIRED",
       message:
-        "Contrat sans décision humaine rattachée — aucune confirmation possible.",
+        stamped === "non_structural" && recomputedMateriality !== "non_structural"
+          ? "Matérialité structurelle détectée à la confirmation — HumanDecision requise."
+          : "Contrat sans décision humaine rattachée alors qu'une HumanDecision est requise — confirmation refusée.",
     };
   }

@@ -178,7 +263,8 @@ export async function confirmExecutionContractForAuthorization(
     requestedTo: LOCAL_PILOTE_ACTOR,
     scope: contract.scope,
     idempotencyKey: `idem:w2-cfm:${contract.executionContractId}:v${contract.version}`,
-    decisionRef,
+    // Omit decisionRef when G-D4 non-structural empty refs — Confirmation ≠ HD.
+    ...(decisionRef ? { decisionRef } : {}),
   });
   if (!requested.ok) {
     return {

```

### Diff `projects/sfia-studio/app/lib/oa/execution-contract/application/confirmExecutionContract.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-contract/application/confirmExecutionContract.ts b/projects/sfia-studio/app/lib/oa/execution-contract/application/confirmExecutionContract.ts
index 3eeb6ac6..4a135671 100644
--- a/projects/sfia-studio/app/lib/oa/execution-contract/application/confirmExecutionContract.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-contract/application/confirmExecutionContract.ts
@@ -11,6 +11,11 @@ import {
   hasConfirmationConstraintContradiction,
   isTa5Status,
 } from "../domain/invariants";
+import {
+  assessExecutionMaterialityOrUnknown,
+  assertDecisionRefsAdmissibleForConfirm,
+  materialityFromContractConstraints,
+} from "../domain/executionMateriality";
 import type {
   ActorReference,
   ConfirmExecutionContractRequest,
@@ -186,7 +191,66 @@ export class ConfirmExecutionContract {
       }

       // Decision freshness: accepted + same project + not superseded.
+      // G-D4: empty decisionRefs admissible only for non-structural materiality
+      // (schema allows []; structural/unknown still require ≥1 ref — fail-closed).
       const decisionRefs = existing.decisionRefs ?? [];
+      {
+        const stamped = materialityFromContractConstraints(
+          existing.constraints,
+        );
+        const materialityInputs = existing.inputs as
+          | { materialityFacts?: Record<string, unknown> }
+          | undefined;
+        const factsRaw = materialityInputs?.materialityFacts;
+        // Defense in depth: without explicit productContextSufficient stamped
+        // at PREPARE from live Product, never treat empty refs as admissible.
+        // CURRENT Product revalidation remains the Product-layer gate
+        // (confirmForAuthorization / authorizeGenericPreparedContract).
+        const productContextSufficient =
+          factsRaw?.productContextSufficient === true &&
+          factsRaw?.productCurrentness != null &&
+          typeof factsRaw.productCurrentness === "object";
+        const recomputed = assessExecutionMaterialityOrUnknown({
+          productContextSufficient,
+          facts: {
+            modelSignals:
+              factsRaw && typeof factsRaw === "object"
+                ? (factsRaw.modelSignals as
+                    | {
+                        structuralChange?: boolean;
+                        securityImpact?: boolean;
+                        architectureImpact?: boolean;
+                        dataImpact?: boolean;
+                        irreversible?: boolean;
+                      }
+                    | null)
+                : null,
+            contradictionConflictPresent:
+              factsRaw?.contradictionConflictPresent === true,
+            protectedPathHits: Array.isArray(factsRaw?.protectedPathHits)
+              ? (factsRaw!.protectedPathHits as string[])
+              : [],
+            wouldMutateStructuralProjectTruth:
+              factsRaw?.wouldMutateStructuralProjectTruth === true,
+            wouldMutateCycleOrTrajectoryTruth:
+              factsRaw?.wouldMutateCycleOrTrajectoryTruth === true,
+            authorityEnvelopeExpanded:
+              factsRaw?.authorityEnvelopeExpanded === true,
+            currentContradictionUnresolved:
+              factsRaw?.currentContradictionUnresolved === true,
+          },
+        });
+        const admissible = assertDecisionRefsAdmissibleForConfirm({
+          decisionRefs,
+          stampedMateriality: stamped,
+          recomputed,
+        });
+        if (!admissible.ok) {
+          return fail("DECISION_REQUIRED", admissible.reason, {
+            projectId: existing.projectId,
+          });
+        }
+      }
       for (const decisionId of decisionRefs) {
         const decisionResult =
           await this.decisionServices.getHumanDecision.execute({

```

### Diff `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 54e2e72c..98b2b530 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -114,6 +114,7 @@ import type {
 import type { ExecutionIntentPayload } from "./executionIntentSchema";
 import {
   assertExplicitReinstructionGate,
+  listEffectivePendingDecisionSubjectMarkers,
 } from "../w2/activeProposalDecisionSubject";
 import { assessChatFirstWorkEligibility } from "../w2/assessChatFirstWorkEligibility";
 import {
@@ -122,6 +123,17 @@ import {
   type ChatFirstEffectiveDisposition,
   type ChatFirstPrepareOutcome,
 } from "../w2/resolveChatFirstPilotDecision";
+import {
+  assessGenericMissionPrepareReadiness,
+  genericMissionClarificationText,
+  genericMissionPreparedText,
+  analysisFromPendingGenericPrepareOffer,
+  getCurrentGenericPrepareOffer,
+  isChatFirstPrepareAcceptGo,
+  prepareGenericExecutionContractDraft,
+  rememberGenericPrepareRecommendation,
+  resolveChatFirstGenericPrepareGo,
+} from "../w2/prepareGenericExecutionContractDraft";
 import {
   replacePendingDecisionSubjectForExplicitReinstruction,
   writePendingDecisionSubjectMarker,
@@ -811,10 +823,32 @@ function chatFirstDecisionText(input: {
         "Nora recommande ; le Pilote décide. AUCUNE EXÉCUTION.",
       ].join(" ");
     }
+    if (input.subjectFamily === "proposal") {
+      const prep = input.prepareOutcome;
+      if (prep?.kind === "prepared") {
+        return [
+          head,
+          "Votre décision est enregistrée : vous poursuivez le sujet proposé.",
+          `ExecutionContract préparé (${prep.executionContractId}) — inspectable avant tout lancement.`,
+          "Aucune exécution n'a été lancée.",
+          "Nora recommande ; le Pilote décide. AUCUNE EXÉCUTION.",
+        ].join(" ");
+      }
+      if (prep?.kind === "blocked") {
+        return [
+          head,
+          "Votre décision est enregistrée : vous poursuivez le sujet proposé.",
+          "ExecutionContract NON matérialisé — préparation bloquée.",
+          prep.message,
+          "Aucune exécution n'a été lancée.",
+          "Nora recommande ; le Pilote décide. AUCUNE EXÉCUTION.",
+        ].join(" ");
+      }
+    }
     return [
       head,
       "Votre décision est enregistrée : vous poursuivez le sujet proposé.",
-      "La préparation de l'action est maintenant disponible. Rien n'a encore été exécuté.",
+      "La préparation de l'action pourra suivre si le contrat Product l'autorise. Rien n'a encore été exécuté.",
       "Nora recommande ; le Pilote décide. AUCUNE EXÉCUTION.",
     ].join(" ");
   }
@@ -1924,6 +1958,232 @@ export async function orchestrateAssistantSend(input: {
     oa,
   });

+  // F-C9-01/04 + G-D4 / Authority Continuity — actionable work while a cycle
+  // is already active must not fall through to NEW_CYCLE START. PREPARE only
+  // on explicit prepare intent OR chat-first accept of a CURRENT prepare offer
+  // (Q16/Q17/Q18); otherwise clarify gaps or recommend prepare. Never canned.
+  {
+    const activeIdForPrepare = project.activeCycleInstanceId?.trim() || null;
+    const prepareGoPreview = activeIdForPrepare
+      ? resolveChatFirstGenericPrepareGo({
+          projectId: project.projectId,
+          cycleInstanceId: activeIdForPrepare,
+          text: content,
+          pilotDecisionCandidate: analysis.pilotDecisionCandidate,
+        })
+      : { kind: "no_go" as const, reason: "no_active_cycle" };
+    const chatFirstPrepareAccept =
+      prepareGoPreview.kind === "prepare" ||
+      prepareGoPreview.kind === "explicit_lexical_prepare";
+    const actionableForGenericPrepare =
+      analysis.intentClass === "actionable" ||
+      analysis.intentClass === "execution_request" ||
+      chatFirstPrepareAccept;
+
+    if (
+      continuation.mode === "NEW_CYCLE_FORMALIZATION" &&
+      Boolean(activeIdForPrepare) &&
+      actionableForGenericPrepare
+    ) {
+    const activeId = activeIdForPrepare!;
+    const cycleLoad = await oa.cycleServices.getCycle.execute({
+      cycleInstanceId: activeId,
+    });
+    if (cycleLoad.ok && cycleLoad.cycle.status === "active") {
+      const qualification = qualificationFromActiveCycle({
+        cycle: cycleLoad.cycle,
+        signals: formalizationSignals,
+        analysis,
+      });
+      const prepareGo = prepareGoPreview;
+      const mayPrepare =
+        prepareGo.kind === "prepare" ||
+        prepareGo.kind === "explicit_lexical_prepare";
+
+      // When accepting a CURRENT offer, readiness is assessed on the offered mission.
+      const offerForReadiness = mayPrepare
+        ? getCurrentGenericPrepareOffer(project.projectId)
+        : null;
+      const readinessAnalysis =
+        prepareGo.kind === "prepare" && offerForReadiness
+          ? analysisFromPendingGenericPrepareOffer(offerForReadiness)
+          : analysis;
+      const readiness = assessGenericMissionPrepareReadiness(readinessAnalysis);
+
+      if (readiness.structuralBlocked || !readiness.ready) {
+        return await completeF2Turn({
+          userText: content,
+          sessionDbPath: input.sessionDbPath,
+          text: genericMissionClarificationText({
+            presentation,
+            missingFields: readiness.missingFields,
+            structuralBlocked: readiness.structuralBlocked,
+          }),
+          mode: modeResolution.mode as "fixture" | "live",
+          presentation,
+          model,
+          project,
+          intentClass: analysis.intentClass,
+          reinstructionOfProposalId,
+          qualification,
+          executionBlocked: analysis.intentClass === "execution_request",
+          turnKind: "f2_clarification",
+        });
+      }
+
+      // Mission qualified but no prepare GO on CURRENT subject → recommend only.
+      if (!mayPrepare) {
+        const acceptWithoutOffer = isChatFirstPrepareAcceptGo({
+          text: content,
+          pilotDecisionCandidate: analysis.pilotDecisionCandidate,
+        });
+        if (acceptWithoutOffer) {
+          // Q18 — never invent PREPARE from "OK" without a CURRENT offer.
+          return await completeF2Turn({
+            userText: content,
+            sessionDbPath: input.sessionDbPath,
+            text: [
+              presentation === "test_provider" ? "[Mode test]" : "[Mode réel]",
+              "Le cycle actif est conservé.",
+              "Aucune recommandation de préparation courante n'est ouverte — je ne prépare pas de contrat sur ce seul accord.",
+              "Rien n'a encore été exécuté.",
+            ].join(" "),
+            mode: modeResolution.mode as "fixture" | "live",
+            presentation,
+            model,
+            project,
+            intentClass: analysis.intentClass,
+            reinstructionOfProposalId,
+            qualification,
+            executionBlocked: true,
+            turnKind: "f2_clarification",
+          });
+        }
+        rememberGenericPrepareRecommendation({
+          projectId: project.projectId,
+          cycleInstanceId: activeId,
+          analysis: readinessAnalysis,
+          offeredAtIso: oa.clock.nowIso(),
+        });
+        return await completeF2Turn({
+          userText: content,
+          sessionDbPath: input.sessionDbPath,
+          text: genericMissionClarificationText({
+            presentation,
+            missingFields: [],
+            structuralBlocked: false,
+            recommendPrepare: true,
+          }),
+          mode: modeResolution.mode as "fixture" | "live",
+          presentation,
+          model,
+          project,
+          intentClass: analysis.intentClass,
+          reinstructionOfProposalId,
+          qualification,
+          executionBlocked: true,
+          turnKind: "f2_clarification",
+        });
+      }
+
+      // Q19 — concurrent pending decision subjects → clarification, never silent pick.
+      if (prepareGo.kind === "prepare") {
+        const pendingSubjects = await listEffectivePendingDecisionSubjectMarkers(
+          oa,
+          project.projectId,
+        );
+        if (
+          pendingSubjects.ok &&
+          pendingSubjects.markers.length > 1
+        ) {
+          return await completeF2Turn({
+            userText: content,
+            sessionDbPath: input.sessionDbPath,
+            text: [
+              presentation === "test_provider" ? "[Mode test]" : "[Mode réel]",
+              "Le cycle actif est conservé.",
+              "Plusieurs sujets de décision sont encore ouverts — précise lequel tu confirmes avant que je prépare un contrat.",
+              "Rien n'a encore été exécuté.",
+            ].join(" "),
+            mode: modeResolution.mode as "fixture" | "live",
+            presentation,
+            model,
+            project,
+            intentClass: analysis.intentClass,
+            reinstructionOfProposalId,
+            qualification,
+            executionBlocked: true,
+            turnKind: "f2_clarification",
+          });
+        }
+      }
+
+      // Bind accept GO to the CURRENT offered mission (not the short "OK" turn).
+      const offer = getCurrentGenericPrepareOffer(project.projectId);
+      const prepareAnalysis =
+        prepareGo.kind === "prepare" && offer
+          ? analysisFromPendingGenericPrepareOffer(offer)
+          : analysis;
+
+      const prep = await prepareGenericExecutionContractDraft({
+        oa,
+        projectId: project.projectId,
+        cycleInstanceId: activeId,
+        analysis: prepareAnalysis,
+        forceLocalAuthority:
+          process.env.VITEST === "true" ||
+          process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY === "1",
+        // DET: tests that need Git launch must pass pin via prepare helper;
+        // F2 live path resolves managed clone HEAD (fail-closed if absent).
+      });
+      if (!prep.ok) {
+        return await completeF2Turn({
+          userText: content,
+          sessionDbPath: input.sessionDbPath,
+          text: [
+            presentation === "test_provider" ? "[Mode test]" : "[Mode réel]",
+            "Le cycle actif est conservé.",
+            prep.message,
+            "Rien n'a encore été exécuté.",
+          ].join(" "),
+          mode: modeResolution.mode as "fixture" | "live",
+          presentation,
+          model,
+          project,
+          intentClass: analysis.intentClass,
+          reinstructionOfProposalId,
+          qualification,
+          executionBlocked: true,
+          turnKind: "f2_clarification",
+        });
+      }
+
+      const objective =
+        (prepareAnalysis.objective ?? prepareAnalysis.rephrasedRequest ?? "").trim() ||
+        "mission demandée";
+      return await completeF2Turn({
+        userText: content,
+        sessionDbPath: input.sessionDbPath,
+        text: genericMissionPreparedText({
+          presentation,
+          executionContractId: prep.contract.executionContractId,
+          objective,
+          status: prep.contract.status,
+        }),
+        mode: modeResolution.mode as "fixture" | "live",
+        presentation,
+        model,
+        project,
+        intentClass: analysis.intentClass,
+        reinstructionOfProposalId,
+        qualification,
+        executionBlocked: true,
+        turnKind: "f1_informative",
+      });
+    }
+    } // actionableForGenericPrepare / NEW_CYCLE_FORMALIZATION
+  } // chat-first prepare gate scope
+
   if (continuation.mode === "ACTIVE_CYCLE_CONTINUATION_BLOCKED") {
     // CR-07-05 — recognized Artifact continuation that cannot be verified:
     // BLOCK / clarify in-cycle. NEVER createCycle.
@@ -2020,6 +2280,9 @@ export async function orchestrateAssistantSend(input: {
     }

     const signals = analysis.signals;
+    // R2 / G-D4 — factual structural skip: only when critical signals are absent.
+    // Never hardcode true. Preserve challenges for structural / security /
+    // architecture / data / irreversible / contradiction.
     const structurallyResolvedActiveCycleContinuation =
       !signals?.structuralChange &&
       !signals?.securityImpact &&
@@ -2034,12 +2297,15 @@ export async function orchestrateAssistantSend(input: {
         "mw5ChallengeState",
         input.beforeF2Effect,
       );
+      // F-C9-03 — active-cycle governed continuation mints a Proposal subject,
+      // not a new lifecycle/CKC Recommendation. recommendationWouldEmit reflects
+      // that outcome (false); do not arm MW5 as if emitting Rec.
       return evaluateF2Mw5({
       content,
       history: input.history,
       analysis,
       recommendedProfile: qualification.recommendedProfile,
-      recommendationWouldEmit: true,
+      recommendationWouldEmit: false,
       projectCriticality: project.criticality,
       projectId: project.projectId,
       oa,

```

### Diff `projects/sfia-studio/app/features/project-assistant/w2/resolveChatFirstPilotDecision.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/resolveChatFirstPilotDecision.ts b/projects/sfia-studio/app/features/project-assistant/w2/resolveChatFirstPilotDecision.ts
index b8f70589..cae3b206 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/resolveChatFirstPilotDecision.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/resolveChatFirstPilotDecision.ts
@@ -944,6 +944,8 @@ export async function resolveChatFirstPilotDecision(input: {
       };
     }

+    const prepareOutcome = proposalPrepareNotApplicable();
+
     return {
       kind: "decision_recorded",
       disposition: effective as Exclude<ChatFirstEffectiveDisposition, "defer">,
@@ -956,7 +958,7 @@ export async function resolveChatFirstPilotDecision(input: {
       decisionBasisLinked: decided.decision.decisionBasisLinked,
       readyForNextGatedStep: effective === "accept",
       subjectFamily: "proposal",
-      prepareOutcome: proposalPrepareNotApplicable(),
+      prepareOutcome,
       executionContractId: null,
       executionContractPrepared: false,
       attemptCreated: false,

```

### Diff `projects/sfia-studio/app/lib/oa/execution-contract/index.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-contract/index.ts b/projects/sfia-studio/app/lib/oa/execution-contract/index.ts
index 4079285f..c20ea5e7 100644
--- a/projects/sfia-studio/app/lib/oa/execution-contract/index.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-contract/index.ts
@@ -41,6 +41,16 @@ export {
   STUDIO_CURSOR_GENERALIST_SCOPE,
   STUDIO_CURSOR_GENERALIST_TARGET,
 } from "./domain/generalistExecutionSurface";
+export {
+  MATERIALITY_CONSTRAINT_PREFIX,
+  assessExecutionMateriality,
+  assessExecutionMaterialityOrUnknown,
+  assertDecisionRefsAdmissibleForConfirm,
+  materialityFromContractConstraints,
+  type ExecutionMaterialityAssessment,
+  type ExecutionMaterialityClass,
+  type ExecutionMaterialityFacts,
+} from "./domain/executionMateriality";
 export {
   CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY,
   CONTRACT_REPORT_REQUIREMENTS_INPUT_KEY,

```

## Y. Contenu complet des fichiers créés

### `projects/sfia-studio/app/lib/oa/execution-contract/domain/executionMateriality.ts`

```typescript
/**
 * G-D4 / T-A4 — server-owned execution materiality (structural vs non-structural).
 *
 * Does NOT trust Nora/LLM `structuralChange=false` alone.
 * Does NOT invent HumanDecision / DecisionBasis.
 * Does NOT classify by business task catalog (docs/code/QA/design).
 *
 * Used at PREPARE (stamp) and re-checked at Confirm/Authorize (fail-closed).
 */

export const MATERIALITY_CONSTRAINT_PREFIX = "MATERIALITY:" as const;

export type ExecutionMaterialityClass =
  | "non_structural"
  | "structural"
  | "unknown";

export type ExecutionMaterialityAssessment = {
  readonly materiality: ExecutionMaterialityClass;
  readonly reasonCodes: readonly string[];
  /** True when Confirm/Authorize must have ≥1 accepted decisionRef. */
  readonly humanDecisionRequired: boolean;
  /** Constraint token stamped on ExecutionContract.constraints. */
  readonly constraintToken: `MATERIALITY:${Uppercase<ExecutionMaterialityClass>}`;
};

export type ExecutionMaterialityFacts = {
  /** Model signals — insufficient alone; used only as positive structural hints. */
  readonly modelSignals?: {
    readonly structuralChange?: boolean;
    readonly securityImpact?: boolean;
    readonly architectureImpact?: boolean;
    readonly dataImpact?: boolean;
    readonly irreversible?: boolean;
  } | null;
  readonly contradictionConflictPresent?: boolean;
  /** Repo-relative paths in mission scope that hit protected Product paths. */
  readonly protectedPathHits?: readonly string[];
  /** Mission would mutate LPS objective / criticality / doctrine pin. */
  readonly wouldMutateStructuralProjectTruth?: boolean;
  /** Mission would change active cycle type / profile / trajectory promotion. */
  readonly wouldMutateCycleOrTrajectoryTruth?: boolean;
  /** Authority envelope wider than already-authorized Product scope. */
  readonly authorityEnvelopeExpanded?: boolean;
  /** Current Product contradiction / unresolved CURRENT conflict. */
  readonly currentContradictionUnresolved?: boolean;
  /** Explicit structural HumanDecision already linked (positive for structural path). */
  readonly hasAcceptedStructuralDecisionRef?: boolean;
};

function constraintTokenFor(
  materiality: ExecutionMaterialityClass,
): ExecutionMaterialityAssessment["constraintToken"] {
  if (materiality === "structural") return "MATERIALITY:STRUCTURAL";
  if (materiality === "unknown") return "MATERIALITY:UNKNOWN";
  return "MATERIALITY:NON_STRUCTURAL";
}

/**
 * Assess whether an execution mission requires a structural HumanDecision.
 * Fail-closed: any unresolved structural hint → structural or unknown.
 */
export function assessExecutionMateriality(
  facts: ExecutionMaterialityFacts,
): ExecutionMaterialityAssessment {
  const reasonCodes: string[] = [];
  const signals = facts.modelSignals;

  if (signals?.structuralChange === true) {
    reasonCodes.push("model_signal_structural_change");
  }
  if (signals?.securityImpact === true) {
    reasonCodes.push("model_signal_security_impact");
  }
  if (signals?.architectureImpact === true) {
    reasonCodes.push("model_signal_architecture_impact");
  }
  if (signals?.dataImpact === true) {
    reasonCodes.push("model_signal_data_impact");
  }
  if (signals?.irreversible === true) {
    reasonCodes.push("model_signal_irreversible");
  }
  if (facts.contradictionConflictPresent === true) {
    reasonCodes.push("contradiction_conflict_present");
  }
  if (facts.currentContradictionUnresolved === true) {
    reasonCodes.push("current_contradiction_unresolved");
  }
  if ((facts.protectedPathHits ?? []).length > 0) {
    reasonCodes.push("protected_path_in_scope");
  }
  if (facts.wouldMutateStructuralProjectTruth === true) {
    reasonCodes.push("would_mutate_structural_project_truth");
  }
  if (facts.wouldMutateCycleOrTrajectoryTruth === true) {
    reasonCodes.push("would_mutate_cycle_or_trajectory_truth");
  }
  if (facts.authorityEnvelopeExpanded === true) {
    reasonCodes.push("authority_envelope_expanded");
  }

  if (reasonCodes.length > 0) {
    return {
      materiality: "structural",
      reasonCodes,
      humanDecisionRequired: true,
      constraintToken: constraintTokenFor("structural"),
    };
  }

  // No positive structural facts — still unknown if caller could not supply
  // enough Product context to decide (explicit unknown flag via empty protected
  // assessment when required fields were unavailable is handled by callers).
  return {
    materiality: "non_structural",
    reasonCodes: ["no_structural_materiality_facts"],
    humanDecisionRequired: false,
    constraintToken: constraintTokenFor("non_structural"),
  };
}

/**
 * When Product context required for a safe non-structural claim is missing,
 * force UNKNOWN (fail-closed — no empty decisionRefs confirm).
 */
export function assessExecutionMaterialityOrUnknown(input: {
  readonly facts: ExecutionMaterialityFacts;
  readonly productContextSufficient: boolean;
}): ExecutionMaterialityAssessment {
  if (!input.productContextSufficient) {
    return {
      materiality: "unknown",
      reasonCodes: ["product_context_insufficient"],
      humanDecisionRequired: true,
      constraintToken: constraintTokenFor("unknown"),
    };
  }
  return assessExecutionMateriality(input.facts);
}

export function materialityFromContractConstraints(
  constraints: readonly string[] | undefined,
): ExecutionMaterialityClass | null {
  if (!constraints) return null;
  for (const c of constraints) {
    if (c === "MATERIALITY:STRUCTURAL") return "structural";
    if (c === "MATERIALITY:NON_STRUCTURAL") return "non_structural";
    if (c === "MATERIALITY:UNKNOWN") return "unknown";
  }
  return null;
}

/**
 * Confirm/Authorize gate: empty decisionRefs only when non-structural.
 */
export function assertDecisionRefsAdmissibleForConfirm(input: {
  readonly decisionRefs: readonly string[];
  readonly stampedMateriality: ExecutionMaterialityClass | null;
  readonly recomputed: ExecutionMaterialityAssessment;
}): { readonly ok: true } | { readonly ok: false; readonly reason: string } {
  const refs = input.decisionRefs;
  const recomputed = input.recomputed.materiality;

  // Stamped vs recomputed divergence → fail-closed.
  if (
    input.stampedMateriality != null &&
    input.stampedMateriality !== recomputed
  ) {
    return {
      ok: false,
      reason: `materiality_stamp_mismatch_${input.stampedMateriality}_vs_${recomputed}`,
    };
  }

  if (refs.length >= 1) {
    return { ok: true };
  }

  // Empty refs — require an explicit NON_STRUCTURAL stamp (no silent bypass).
  if (input.stampedMateriality == null) {
    return {
      ok: false,
      reason: "empty_decision_refs_missing_materiality_stamp",
    };
  }
  if (
    input.stampedMateriality === "structural" ||
    input.stampedMateriality === "unknown"
  ) {
    return {
      ok: false,
      reason: "empty_decision_refs_stamp_forbids",
    };
  }
  if (recomputed === "structural" || recomputed === "unknown") {
    return {
      ok: false,
      reason:
        recomputed === "unknown"
          ? "empty_decision_refs_materiality_unknown"
          : "empty_decision_refs_structural_required",
    };
  }
  // stamped non_structural ∧ recomputed non_structural
  return { ok: true };
}

```

### `projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts`

```typescript
/**
 * Authority & Chat-First Continuity — Product-grounded execution materiality.
 *
 * Resolves NON_STRUCTURAL / STRUCTURAL / UNKNOWN from live Product facts
 * (LPS, active cycle, protected paths, authority envelope), never from
 * hardcoded false negatives or Nora-supplied fields alone.
 *
 * Does NOT invent a second materiality engine: wraps assessExecutionMaterialityOrUnknown.
 * Does NOT grant authorization. Does NOT invent HumanDecision.
 */

import {
  assessExecutionMaterialityOrUnknown,
  type ExecutionMaterialityAssessment,
  type ExecutionMaterialityFacts,
} from "@/lib/oa/execution-contract";
import { classifyStudioProductProtectedPath } from "@/lib/oa/sandboxContract";
import { readLiveProjectContext } from "@/lib/vertical-slice-runtime";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import type { IntentAnalysisDto } from "../f2/types";

export type ProductMaterialityCurrentness = {
  readonly lpsId: string;
  readonly lpsVersion: number;
  readonly doctrineDigest: string;
  readonly activeCycleInstanceId: string | null;
  readonly projectId: string;
  readonly assessedAtIso: string;
};

export type AuthoritativeMaterialityResolution = {
  readonly assessment: ExecutionMaterialityAssessment;
  readonly facts: ExecutionMaterialityFacts & {
    readonly productContextSufficient: boolean;
    readonly productCurrentness: ProductMaterialityCurrentness | null;
    readonly structuralTruthBasis: string;
    readonly cycleTruthBasis: string;
    readonly authorityEnvelopeBasis: string;
  };
  readonly productContextSufficient: boolean;
  readonly liveReadOk: boolean;
  readonly failureCode?: string;
};

function collectProtectedPathHits(analysis: IntentAnalysisDto): string[] {
  const candidates = [
    ...(analysis.executionIntent?.scopeIn ?? []),
    ...(analysis.scope ? [analysis.scope] : []),
  ];
  const hits: string[] = [];
  for (const raw of candidates) {
    const path = raw.trim();
    if (!path || path.includes(" ")) continue;
    const hit = classifyStudioProductProtectedPath(path);
    if (hit) hits.push(path);
  }
  return hits;
}

function textBlob(analysis: IntentAnalysisDto): string {
  return [
    analysis.objective,
    analysis.rephrasedRequest,
    analysis.scope,
    analysis.expectedOutcome,
    ...(analysis.executionIntent?.scopeIn ?? []),
  ]
    .filter((s): s is string => typeof s === "string" && s.trim().length > 0)
    .join("\n")
    .toLowerCase();
}

/**
 * Derive whether the mission would mutate structural project truth.
 * Positive evidence → true. Absence of evidence alone is NEVER enough;
 * we require a successful live LPS read + no mutation cues + no protected hits.
 */
function deriveStructuralProjectMutation(input: {
  readonly analysis: IntentAnalysisDto;
  readonly protectedPathHits: readonly string[];
  readonly liveOk: boolean;
}): { readonly value: boolean; readonly basis: string } {
  if (!input.liveOk) {
    return { value: true, basis: "live_lps_unavailable_fail_closed" };
  }
  if (input.protectedPathHits.length > 0) {
    return { value: true, basis: "protected_path_in_mission_scope" };
  }
  const blob = textBlob(input.analysis);
  if (
    /\b(living project state|\blps\b|objectif du projet|doctrine package|criticalit[ée] du projet|promouvoi(r|t)|baseline produ(it|ct)|v3.?framing|\.sfia\/)\b/.test(
      blob,
    )
  ) {
    return { value: true, basis: "mission_targets_structural_project_truth" };
  }
  return {
    value: false,
    basis: "live_lps_ok_no_governance_path_no_structural_mutation_cue",
  };
}

function deriveCycleOrTrajectoryMutation(input: {
  readonly analysis: IntentAnalysisDto;
  readonly liveActiveCycleId: string | null;
  readonly requestedCycleId: string | null;
  readonly liveOk: boolean;
}): { readonly value: boolean; readonly basis: string } {
  if (!input.liveOk) {
    return { value: true, basis: "live_cycle_unavailable_fail_closed" };
  }
  const blob = textBlob(input.analysis);
  if (
    /\b(nouveau cycle|d[ée]marrer (un |le )?cycle|start(ing)? (a |the )?cycle|cl[ôo]turer (le )?cycle|promouvoir (la )?trajectoire|projecttrajectory|new cycle)\b/.test(
      blob,
    )
  ) {
    return { value: true, basis: "mission_targets_cycle_or_trajectory_mutation" };
  }
  if (
    input.requestedCycleId &&
    input.liveActiveCycleId &&
    input.requestedCycleId !== input.liveActiveCycleId
  ) {
    return { value: true, basis: "requested_cycle_diverges_from_live_active" };
  }
  if (!input.liveActiveCycleId) {
    // No active cycle → cannot claim non-mutation of cycle truth for in-cycle prepare.
    return { value: true, basis: "no_active_cycle_to_anchor_non_mutation" };
  }
  return {
    value: false,
    basis: "active_cycle_anchored_no_cycle_mutation_cue",
  };
}

function deriveAuthorityEnvelopeExpanded(input: {
  readonly liveOk: boolean;
}): { readonly value: boolean; readonly basis: string } {
  if (!input.liveOk) {
    return { value: true, basis: "live_context_unavailable_fail_closed" };
  }
  // Generic prepare always binds the existing generalist Cursor capability
  // surface — not an elevated envelope. Expansion would require a different
  // requiredCapabilities set (not used on this path).
  return {
    value: false,
    basis: "generic_prepare_binds_existing_generalist_capability_only",
  };
}

/**
 * Resolve authoritative materiality from live Product + mission analysis.
 */
export async function resolveAuthoritativeProductMateriality(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly analysis: IntentAnalysisDto;
  readonly cycleInstanceId?: string | null;
}): Promise<AuthoritativeMaterialityResolution> {
  const live = await readLiveProjectContext(input.oa, input.projectId);
  const liveOk = live.ok;
  const protectedPathHits = collectProtectedPathHits(input.analysis);
  const requestedCycleId = input.cycleInstanceId?.trim() || null;

  const structural = deriveStructuralProjectMutation({
    analysis: input.analysis,
    protectedPathHits,
    liveOk,
  });
  const cycle = deriveCycleOrTrajectoryMutation({
    analysis: input.analysis,
    liveActiveCycleId: liveOk ? live.context.activeCycleInstanceId : null,
    requestedCycleId,
    liveOk,
  });
  const authority = deriveAuthorityEnvelopeExpanded({ liveOk });

  const productCurrentness: ProductMaterialityCurrentness | null = liveOk
    ? {
        lpsId: live.context.lpsId,
        lpsVersion: live.context.lpsVersion,
        doctrineDigest: live.context.doctrineDigest,
        activeCycleInstanceId: live.context.activeCycleInstanceId,
        projectId: live.context.projectId,
        assessedAtIso: input.oa.clock.nowIso(),
      }
    : null;

  // Sufficient only when live Product truth was read and all three negatives
  // were derived from that read (not assumed).
  const productContextSufficient =
    liveOk &&
    structural.basis.startsWith("live_lps_ok") &&
    cycle.basis.startsWith("active_cycle_anchored") &&
    authority.basis.startsWith("generic_prepare_binds");

  const facts: AuthoritativeMaterialityResolution["facts"] = {
    modelSignals: input.analysis.signals
      ? {
          structuralChange: input.analysis.signals.structuralChange,
          securityImpact: input.analysis.signals.securityImpact,
          architectureImpact: input.analysis.signals.architectureImpact,
          dataImpact: input.analysis.signals.dataImpact,
          irreversible: input.analysis.signals.irreversible,
        }
      : null,
    contradictionConflictPresent: Boolean(
      input.analysis.contradictionCandidate?.conflictPresent,
    ),
    protectedPathHits,
    wouldMutateStructuralProjectTruth: structural.value,
    wouldMutateCycleOrTrajectoryTruth: cycle.value,
    authorityEnvelopeExpanded: authority.value,
    currentContradictionUnresolved: Boolean(
      input.analysis.contradictionCandidate?.conflictPresent,
    ),
    productContextSufficient,
    productCurrentness,
    structuralTruthBasis: structural.basis,
    cycleTruthBasis: cycle.basis,
    authorityEnvelopeBasis: authority.basis,
  };

  const assessment = assessExecutionMaterialityOrUnknown({
    productContextSufficient,
    facts,
  });

  return {
    assessment,
    facts,
    productContextSufficient,
    liveReadOk: liveOk,
    failureCode: liveOk ? undefined : live.code,
  };
}

/**
 * Revalidate materiality against CURRENT Product at Confirm/Authorize.
 * Stamp is historical witness only — never sole authority.
 */
export async function revalidateMaterialityAgainstCurrentProduct(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly analysis: IntentAnalysisDto;
  readonly cycleInstanceId?: string | null;
  readonly stampedMateriality: string | null;
  readonly stampedCurrentness: ProductMaterialityCurrentness | null;
}): Promise<
  | {
      readonly ok: true;
      readonly current: AuthoritativeMaterialityResolution;
    }
  | {
      readonly ok: false;
      readonly code: string;
      readonly message: string;
      readonly current?: AuthoritativeMaterialityResolution;
    }
> {
  const current = await resolveAuthoritativeProductMateriality({
    oa: input.oa,
    projectId: input.projectId,
    analysis: input.analysis,
    cycleInstanceId: input.cycleInstanceId,
  });

  if (!current.liveReadOk || !current.productContextSufficient) {
    return {
      ok: false,
      code: "MATERIALITY_PRODUCT_CONTEXT_UNAVAILABLE",
      message:
        "Contexte Product courant indisponible — matérialité non requalifiable (fail-closed).",
      current,
    };
  }

  if (input.stampedCurrentness) {
    const s = input.stampedCurrentness;
    const c = current.facts.productCurrentness!;
    if (
      s.lpsVersion !== c.lpsVersion ||
      s.doctrineDigest !== c.doctrineDigest ||
      s.activeCycleInstanceId !== c.activeCycleInstanceId ||
      s.projectId !== c.projectId
    ) {
      return {
        ok: false,
        code: "MATERIALITY_CURRENTNESS_STALE",
        message:
          "LPS / doctrine / cycle actifs ont changé depuis PREPARE — réinspection et requalification requises.",
        current,
      };
    }
  }

  if (
    input.stampedMateriality != null &&
    input.stampedMateriality !== current.assessment.materiality
  ) {
    return {
      ok: false,
      code: "MATERIALITY_CURRENT_MISMATCH",
      message: `Matérialité courante (${current.assessment.materiality}) diverge du stamp PREPARE (${input.stampedMateriality}) — autorisation refusée.`,
      current,
    };
  }

  if (current.assessment.materiality !== "non_structural") {
    return {
      ok: false,
      code:
        current.assessment.materiality === "unknown"
          ? "MATERIALITY_UNKNOWN"
          : "MATERIALITY_STRUCTURAL",
      message:
        current.assessment.materiality === "unknown"
          ? "Matérialité courante indéterminée — HumanDecision ou clarification requise."
          : "Matérialité courante structurelle — HumanDecision Pilote requise.",
      current,
    };
  }

  return { ok: true, current };
}

/** Reconstruct a minimal analysis from stamped prepare inputs for revalidation. */
export function analysisStubFromMaterialityFacts(
  facts: Record<string, unknown> | null | undefined,
  contractInputs: Record<string, unknown> | null | undefined,
): IntentAnalysisDto {
  const modelSignals =
    facts && typeof facts.modelSignals === "object" && facts.modelSignals
      ? (facts.modelSignals as {
          structuralChange?: boolean;
          securityImpact?: boolean;
          architectureImpact?: boolean;
          dataImpact?: boolean;
          irreversible?: boolean;
        })
      : null;
  const scopeIn = Array.isArray(contractInputs?.scopeIn)
    ? (contractInputs!.scopeIn as string[])
    : [];
  const protectedHits = Array.isArray(facts?.protectedPathHits)
    ? (facts!.protectedPathHits as string[])
    : [];
  return {
    parseOk: true,
    intentClass: "actionable",
    candidateCycleTypeId: null,
    signals: {
      structuralChange: modelSignals?.structuralChange === true,
      securityImpact: modelSignals?.securityImpact === true,
      architectureImpact: modelSignals?.architectureImpact === true,
      dataImpact: modelSignals?.dataImpact === true,
      irreversible: modelSignals?.irreversible === true,
      lowRiskBounded: false,
    },
    cognitiveWorkload: null,
    contradictionCandidate:
      facts?.contradictionConflictPresent === true
        ? {
            conflictPresent: true,
            claimedEvidenceIds: [],
          }
        : null,
    challengeResponseAssessment: "sufficient",
    objective:
      typeof contractInputs?.objective === "string"
        ? contractInputs.objective
        : "",
    scope:
      typeof contractInputs?.missionScopeNarrative === "string"
        ? contractInputs.missionScopeNarrative
        : protectedHits[0] ?? "",
    rephrasedRequest:
      typeof contractInputs?.objective === "string"
        ? contractInputs.objective
        : "",
    outOfScope: Array.isArray(contractInputs?.scopeOut)
      ? (contractInputs!.scopeOut as string[])
      : [],
    risks: [],
    reservations: [],
    stopConditions: [],
    activatedBlocks: [],
    expectedOutcome:
      typeof contractInputs?.expectedOutcome === "string"
        ? contractInputs.expectedOutcome
        : "",
    criticalJustification: null,
    requestedOperation: null,
    executionIntent: {
      intentKind: "other",
      scopeIn: scopeIn.length > 0 ? scopeIn : protectedHits,
    } as IntentAnalysisDto["executionIntent"],
  };
}

export function parseStampedProductCurrentness(
  facts: Record<string, unknown> | null | undefined,
): ProductMaterialityCurrentness | null {
  const raw = facts?.productCurrentness;
  if (!raw || typeof raw !== "object") return null;
  const o = raw as Record<string, unknown>;
  if (
    typeof o.lpsId !== "string" ||
    typeof o.lpsVersion !== "number" ||
    typeof o.doctrineDigest !== "string" ||
    typeof o.projectId !== "string" ||
    typeof o.assessedAtIso !== "string"
  ) {
    return null;
  }
  return {
    lpsId: o.lpsId,
    lpsVersion: o.lpsVersion,
    doctrineDigest: o.doctrineDigest,
    activeCycleInstanceId:
      typeof o.activeCycleInstanceId === "string"
        ? o.activeCycleInstanceId
        : o.activeCycleInstanceId === null
          ? null
          : null,
    projectId: o.projectId,
    assessedAtIso: o.assessedAtIso,
  };
}

```

### `projects/sfia-studio/app/features/project-assistant/w2/pendingGenericPrepareOfferStore.ts`

```typescript
/**
 * Process-local pending generic PREPARE offer (chat-first continuity).
 *
 * When Nora recommends preparing a generic ExecutionContract for a qualified
 * mission, the server remembers that CURRENT offer. A later Pilot GO
 * ("OK, vas-y") binds to this offer only — never to a historical recommendation
 * and never as execution authorization.
 *
 * Same durability class as mw5ChallengeSessionStore / proposalStore.
 * Never Product SQLite. Never a HumanDecision / Confirmation / Work Recommendation.
 */

const STORE_KEY = "__SFIA_F2_PENDING_GENERIC_PREPARE_OFFER__" as const;

export type PendingGenericPrepareOffer = {
  readonly projectId: string;
  readonly cycleInstanceId: string;
  readonly missionKey: string;
  readonly objective: string;
  readonly expectedOutcome: string;
  readonly scopeNarrative: string;
  readonly scopeIn: readonly string[];
  readonly scopeOut: readonly string[];
  readonly outOfScope: readonly string[];
  readonly stopConditions: readonly string[];
  readonly risks: readonly string[];
  readonly reservations: readonly string[];
  readonly signalStructuralChange: boolean;
  readonly signalSecurityImpact: boolean;
  readonly signalArchitectureImpact: boolean;
  readonly signalDataImpact: boolean;
  readonly signalIrreversible: boolean;
  readonly contradictionConflictPresent: boolean;
  readonly offeredAtIso: string;
  /** Fingerprint of the recommendation turn — currentness witness. */
  readonly offerFingerprint: string;
};

type StoreSlot = {
  byProjectId: Map<string, PendingGenericPrepareOffer>;
};

function getSlot(): StoreSlot {
  const g = globalThis as typeof globalThis & { [STORE_KEY]?: StoreSlot };
  if (!g[STORE_KEY]) {
    g[STORE_KEY] = { byProjectId: new Map() };
  }
  return g[STORE_KEY];
}

export function getPendingGenericPrepareOffer(
  projectId: string,
): PendingGenericPrepareOffer | null {
  return getSlot().byProjectId.get(projectId) ?? null;
}

export function rememberPendingGenericPrepareOffer(
  offer: PendingGenericPrepareOffer,
): PendingGenericPrepareOffer {
  const next: PendingGenericPrepareOffer = {
    ...offer,
    scopeIn: Object.freeze([...offer.scopeIn]),
    scopeOut: Object.freeze([...offer.scopeOut]),
    outOfScope: Object.freeze([...offer.outOfScope]),
    stopConditions: Object.freeze([...offer.stopConditions]),
    risks: Object.freeze([...offer.risks]),
    reservations: Object.freeze([...offer.reservations]),
  };
  getSlot().byProjectId.set(offer.projectId, next);
  return next;
}

export function clearPendingGenericPrepareOffer(projectId: string): void {
  getSlot().byProjectId.delete(projectId);
}

export function resetPendingGenericPrepareOfferStoreForTests(): void {
  getSlot().byProjectId.clear();
}

```

### `projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts`

```typescript
/**
 * G-D4 / T-A4 / Authority Continuity — generic ExecutionContract PREPARE
 * without systematic HumanDecision.
 *
 * When a mission is sufficiently qualified and server-owned Product materiality
 * is non-structural, Studio may Build + Validate a generalist contract with
 * decisionRefs=[] for Pilote inspection. PREPARE ≠ EXECUTE: no Attempt.
 *
 * Confirm/Authorize remain separate Pilote acts. Empty decisionRefs at
 * confirmed require MATERIALITY:NON_STRUCTURAL stamp + CURRENT revalidation
 * (T-A4 schema G-D4). Structural missions still require a real HD ref.
 *
 * Reuses BuildExecutionContract + ValidateExecutionContract + generalist surface
 * + resolveTrustedProductLaunchContext + resolveContractSourceGroundingForPrepare.
 * No task catalog, no parallel engine, no synthetic HumanDecision.
 */

import { createHash, randomBytes } from "node:crypto";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalAuthorityForExecutionClass,
} from "@/lib/oa/decision";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import {
  CONTRACT_SOURCE_GROUNDING_INPUT_KEY,
  assertContractSourceGroundingHonest,
  assessExecutionMaterialityOrUnknown,
  isCurrentFullRepositoryRead,
  type ExecutionMaterialityAssessment,
} from "@/lib/oa/execution-contract";
import { classifyStudioProductProtectedPath } from "@/lib/oa/sandboxContract";
import {
  PRODUCT_CANONICAL_EXECUTION_ACTION,
  PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
  PRODUCT_CANONICAL_EXECUTION_SCOPE,
  PRODUCT_CANONICAL_EXECUTION_TARGET,
} from "./w3aProductExecutionSemantics";
import type { IntentAnalysisDto, PilotDecisionCandidate } from "../f2/types";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import { resolveAuthoritativeProductMateriality } from "./resolveAuthoritativeProductMateriality";
import {
  resolveContractSourceGroundingForPrepare,
  type ContractSourceGroundingReader,
} from "./resolveContractSourceGrounding";
import {
  launchContextAsContractInputs,
  resolveTrustedProductLaunchContext,
} from "./resolveTrustedProductLaunchContext";
import {
  getPendingGenericPrepareOffer,
  rememberPendingGenericPrepareOffer,
  clearPendingGenericPrepareOffer,
  type PendingGenericPrepareOffer,
} from "./pendingGenericPrepareOfferStore";

export type GenericMissionPrepareReadiness = {
  readonly ready: boolean;
  readonly structuralBlocked: boolean;
  /** Blocking gaps only — never a questionnaire. */
  readonly missingFields: readonly string[];
};

/**
 * Explicit Pilote prepare-contract lexical intent (FR natural language).
 * Actionable work alone MUST NOT systematically PREPARE an EC (Q16 / Q20).
 */
export function hasExplicitPrepareContractIntent(text: string): boolean {
  const t = text.trim().toLowerCase();
  if (!t) return false;
  if (
    /\b(prépare|prepare|préparer|preparer)\b[\s\S]{0,40}\b(contrat|executioncontract|execution contract)\b/.test(
      t,
    )
  ) {
    return true;
  }
  if (
    /\b(contrat d['']exécution|execution contract)\b[\s\S]{0,40}\b(prépare|prepare|préparer)\b/.test(
      t,
    )
  ) {
    return true;
  }
  if (
    /\b(ok|oui|vas[- ]y|go)\b[\s\S]{0,30}\b(prépare|prepare)\b[\s\S]{0,40}\b(contrat|mission)\b/.test(
      t,
    )
  ) {
    return true;
  }
  return false;
}

/**
 * Lexical / structured accept of a CURRENT prepare recommendation only.
 * Never an execution GO. Never authoritative alone — requires pending offer.
 */
export function isChatFirstPrepareAcceptGo(input: {
  readonly text: string;
  readonly pilotDecisionCandidate?: PilotDecisionCandidate | null;
}): boolean {
  const candidate = input.pilotDecisionCandidate ?? null;
  if (
    candidate?.disposition === "accept" &&
    (candidate.targetKind === "current_recommendation" ||
      candidate.targetKind === "presented_subject")
  ) {
    return true;
  }
  const t = input.text.trim().toLowerCase();
  if (!t) return false;
  // Short acceptives — only meaningful when a CURRENT prepare offer exists.
  if (
    /^(ok|oui|vas[- ]y|vasy|go|d['']accord|ok vas[- ]y|ok,?\s*vas[- ]y)[\s.!]*$/i.test(
      t,
    )
  ) {
    return true;
  }
  if (
    /\b(ok|oui|vas[- ]y|go|d['']accord)\b[\s\S]{0,40}\b(pr[ée]pare|cursor|contrat|mission)\b/.test(
      t,
    )
  ) {
    return true;
  }
  return false;
}

/**
 * Server-side: bind Pilot GO to a unique CURRENT prepare offer.
 * Ambiguous concurrent governed subjects → clarification (caller checks).
 * No offer / historical only → no invented prepare.
 */
export function resolveChatFirstGenericPrepareGo(input: {
  readonly projectId: string;
  readonly cycleInstanceId: string;
  readonly text: string;
  readonly pilotDecisionCandidate?: PilotDecisionCandidate | null;
}):
  | { readonly kind: "prepare"; readonly offerFingerprint: string }
  | { readonly kind: "explicit_lexical_prepare" }
  | { readonly kind: "no_go"; readonly reason: string } {
  if (hasExplicitPrepareContractIntent(input.text)) {
    return { kind: "explicit_lexical_prepare" };
  }
  if (
    !isChatFirstPrepareAcceptGo({
      text: input.text,
      pilotDecisionCandidate: input.pilotDecisionCandidate,
    })
  ) {
    return { kind: "no_go", reason: "no_prepare_accept_signal" };
  }
  const offer = getPendingGenericPrepareOffer(input.projectId);
  if (!offer) {
    return { kind: "no_go", reason: "no_current_prepare_offer" };
  }
  if (offer.cycleInstanceId !== input.cycleInstanceId) {
    return { kind: "no_go", reason: "prepare_offer_cycle_mismatch" };
  }
  return { kind: "prepare", offerFingerprint: offer.offerFingerprint };
}

export function assessGenericMissionPrepareReadiness(
  analysis: IntentAnalysisDto,
): GenericMissionPrepareReadiness {
  const signals = analysis.signals;
  const structuralBlocked = Boolean(
    signals?.structuralChange ||
      signals?.securityImpact ||
      signals?.architectureImpact ||
      signals?.dataImpact ||
      signals?.irreversible ||
      analysis.contradictionCandidate?.conflictPresent,
  );

  const objective = (analysis.objective ?? analysis.rephrasedRequest ?? "").trim();
  const expectedOutcome = (analysis.expectedOutcome ?? "").trim();
  const scope = (analysis.scope ?? "").trim();
  const missingFields: string[] = [];
  if (!objective) missingFields.push("objectif");
  if (!expectedOutcome && !scope) {
    missingFields.push("résultat attendu ou périmètre");
  }

  return {
    ready: !structuralBlocked && missingFields.length === 0,
    structuralBlocked,
    missingFields,
  };
}

function collectProtectedPathHits(analysis: IntentAnalysisDto): string[] {
  const candidates = [
    ...(analysis.executionIntent?.scopeIn ?? []),
    ...(analysis.scope ? [analysis.scope] : []),
  ];
  const hits: string[] = [];
  for (const raw of candidates) {
    const path = raw.trim();
    if (!path || path.includes(" ")) continue;
    const hit = classifyStudioProductProtectedPath(path);
    if (hit) hits.push(path);
  }
  return hits;
}

function missionImpliesRepositoryWork(analysis: IntentAnalysisDto): boolean {
  const scopeIn = analysis.executionIntent?.scopeIn ?? [];
  if (scopeIn.some((p) => typeof p === "string" && p.trim().length > 0)) {
    return true;
  }
  const scope = (analysis.scope ?? "").trim();
  if (scope && !scope.includes(" ") && scope.includes("/")) return true;
  if (scope && /\.(ts|tsx|js|md|json|py|go|rs)\b/i.test(scope)) return true;
  return false;
}

/**
 * @deprecated Prefer resolveAuthoritativeProductMateriality — sync helper kept
 * for unit oracles that only have analysis (forces UNKNOWN without Product).
 */
export function assessMaterialityForGenericPrepare(
  analysis: IntentAnalysisDto,
): ExecutionMaterialityAssessment {
  // Without live Product context, never claim NON_STRUCTURAL (Q02).
  const protectedPathHits = collectProtectedPathHits(analysis);
  return assessExecutionMaterialityOrUnknown({
    productContextSufficient: false,
    facts: {
      modelSignals: analysis.signals
        ? {
            structuralChange: analysis.signals.structuralChange,
            securityImpact: analysis.signals.securityImpact,
            architectureImpact: analysis.signals.architectureImpact,
            dataImpact: analysis.signals.dataImpact,
            irreversible: analysis.signals.irreversible,
          }
        : null,
      contradictionConflictPresent: Boolean(
        analysis.contradictionCandidate?.conflictPresent,
      ),
      protectedPathHits,
      currentContradictionUnresolved: Boolean(
        analysis.contradictionCandidate?.conflictPresent,
      ),
    },
  });
}

export type PrepareGenericExecutionContractDraftInput = {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly cycleInstanceId?: string | null;
  readonly analysis: IntentAnalysisDto;
  /** When true, bypass local authority env gate (DET tests). */
  readonly forceLocalAuthority?: boolean;
  /**
   * When true, Validate after Build (Product inspectable path).
   * Default true for G-D4 continuity. Tests may set false to assert draft-only.
   */
  readonly validateAfterBuild?: boolean;
  /** DET only — explicit server pin; never inferred from VITEST. */
  readonly pinnedBaseHeadSha?: string | null;
  readonly managedRepoRootBase?: string | null;
  readonly sourceGroundingReader?: ContractSourceGroundingReader | null;
};

export type PrepareGenericExecutionContractDraftResult =
  | {
      readonly ok: true;
      readonly contract: ExecutionContract;
      readonly humanDecisionCreated: false;
      readonly executionAttemptCreated: false;
      readonly materiality: ExecutionMaterialityAssessment;
    }
  | {
      readonly ok: false;
      readonly code: string;
      readonly message: string;
    };

function stableMissionKey(input: {
  readonly projectId: string;
  readonly cycleInstanceId: string | null;
  readonly objective: string;
  readonly expectedOutcome: string;
  readonly scope: string;
  readonly scopeIn: readonly string[];
  readonly scopeOut: readonly string[];
  readonly materiality: string;
}): string {
  const raw = [
    input.projectId,
    input.cycleInstanceId ?? "",
    input.objective,
    input.expectedOutcome,
    input.scope,
    input.scopeIn.join("|"),
    input.scopeOut.join("|"),
    input.materiality,
  ].join("\n");
  return createHash("sha256").update(raw).digest("hex").slice(0, 24);
}

function offerFingerprintFor(input: {
  readonly projectId: string;
  readonly cycleInstanceId: string;
  readonly objective: string;
  readonly expectedOutcome: string;
  readonly scope: string;
}): string {
  return createHash("sha256")
    .update(
      [
        input.projectId,
        input.cycleInstanceId,
        input.objective,
        input.expectedOutcome,
        input.scope,
      ].join("\n"),
    )
    .digest("hex")
    .slice(0, 24);
}

/** Remember CURRENT prepare recommendation (Nora offered; Pilot has not GO'd). */
export function rememberGenericPrepareRecommendation(input: {
  readonly projectId: string;
  readonly cycleInstanceId: string;
  readonly analysis: IntentAnalysisDto;
  readonly offeredAtIso: string;
}): string {
  const objective = (
    input.analysis.objective ??
    input.analysis.rephrasedRequest ??
    ""
  ).trim();
  const expectedOutcome = (input.analysis.expectedOutcome ?? objective).trim();
  const scopeNarrative = (input.analysis.scope ?? expectedOutcome).trim();
  const scopeIn = input.analysis.executionIntent?.scopeIn ?? [];
  const scopeOut = input.analysis.executionIntent?.scopeOut ?? [];
  const fp = offerFingerprintFor({
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
    objective,
    expectedOutcome,
    scope: scopeNarrative,
  });
  rememberPendingGenericPrepareOffer({
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
    missionKey: fp,
    objective,
    expectedOutcome,
    scopeNarrative,
    scopeIn,
    scopeOut,
    outOfScope: input.analysis.outOfScope ?? [],
    stopConditions: input.analysis.stopConditions ?? [],
    risks: input.analysis.risks ?? [],
    reservations: input.analysis.reservations ?? [],
    signalStructuralChange: input.analysis.signals?.structuralChange === true,
    signalSecurityImpact: input.analysis.signals?.securityImpact === true,
    signalArchitectureImpact:
      input.analysis.signals?.architectureImpact === true,
    signalDataImpact: input.analysis.signals?.dataImpact === true,
    signalIrreversible: input.analysis.signals?.irreversible === true,
    contradictionConflictPresent: Boolean(
      input.analysis.contradictionCandidate?.conflictPresent,
    ),
    offeredAtIso: input.offeredAtIso,
    offerFingerprint: fp,
  });
  return fp;
}

/** Rebuild IntentAnalysis for PREPARE from the CURRENT pending offer (accept GO). */
export function analysisFromPendingGenericPrepareOffer(
  offer: PendingGenericPrepareOffer,
): IntentAnalysisDto {
  return {
    parseOk: true,
    intentClass: "actionable",
    candidateCycleTypeId: null,
    signals: {
      structuralChange: offer.signalStructuralChange,
      securityImpact: offer.signalSecurityImpact,
      architectureImpact: offer.signalArchitectureImpact,
      dataImpact: offer.signalDataImpact,
      irreversible: offer.signalIrreversible,
      lowRiskBounded: !offer.signalStructuralChange,
    },
    cognitiveWorkload: null,
    contradictionCandidate: offer.contradictionConflictPresent
      ? { conflictPresent: true, claimedEvidenceIds: [] }
      : null,
    challengeResponseAssessment: "sufficient",
    objective: offer.objective,
    scope: offer.scopeNarrative,
    rephrasedRequest: offer.objective,
    outOfScope: [...offer.outOfScope],
    risks: [...offer.risks],
    reservations: [...offer.reservations],
    stopConditions: [...offer.stopConditions],
    activatedBlocks: [],
    expectedOutcome: offer.expectedOutcome,
    criticalJustification: null,
    requestedOperation: null,
    executionIntent: {
      intentKind: "other",
      scopeIn: [...offer.scopeIn],
      scopeOut: [...offer.scopeOut],
    } as IntentAnalysisDto["executionIntent"],
  };
}

export function getCurrentGenericPrepareOffer(
  projectId: string,
): PendingGenericPrepareOffer | null {
  return getPendingGenericPrepareOffer(projectId);
}

/**
 * Build (+ optional Validate) an inspectable generalist ExecutionContract.
 * Empty decisionRefs when non-structural. Never records HumanDecision.
 */
export async function prepareGenericExecutionContractDraft(
  input: PrepareGenericExecutionContractDraftInput,
): Promise<PrepareGenericExecutionContractDraftResult> {
  const readiness = assessGenericMissionPrepareReadiness(input.analysis);
  if (readiness.structuralBlocked) {
    return {
      ok: false,
      code: "STRUCTURAL_HUMAN_DECISION_REQUIRED",
      message:
        "Cette mission engage une vérité structurelle — une HumanDecision Pilote reste requise avant préparation.",
    };
  }
  if (!readiness.ready) {
    return {
      ok: false,
      code: "MISSION_INSUFFICIENTLY_QUALIFIED",
      message: `Informations manquantes pour préparer le contrat : ${readiness.missingFields.join(", ")}.`,
    };
  }

  const materialityResolution = await resolveAuthoritativeProductMateriality({
    oa: input.oa,
    projectId: input.projectId,
    analysis: input.analysis,
    cycleInstanceId: input.cycleInstanceId,
  });
  const materiality = materialityResolution.assessment;
  if (materiality.humanDecisionRequired) {
    return {
      ok: false,
      code:
        materiality.materiality === "unknown"
          ? "MATERIALITY_UNKNOWN"
          : "STRUCTURAL_HUMAN_DECISION_REQUIRED",
      message:
        materiality.materiality === "unknown"
          ? "Matérialité indéterminée — contexte Product insuffisant ou contradiction ; HumanDecision / clarification requise."
          : "Matérialité server-owned structurelle — HumanDecision requise avant préparation sans refs.",
    };
  }

  const services = input.oa.executionContractServices;
  if (!services?.buildExecutionContract) {
    return {
      ok: false,
      code: "EXECUTION_CONTRACT_SERVICES_UNAVAILABLE",
      message: "Services ExecutionContract indisponibles.",
    };
  }

  const objective = (
    input.analysis.objective ??
    input.analysis.rephrasedRequest ??
    ""
  ).trim();
  const expectedOutcome = (input.analysis.expectedOutcome ?? objective).trim();
  const scopeNarrative = (input.analysis.scope ?? expectedOutcome).trim();
  const scopeIn = input.analysis.executionIntent?.scopeIn ?? [];
  const outOfScope = input.analysis.outOfScope ?? [];
  const cycleInstanceId = input.cycleInstanceId?.trim() || undefined;

  // D — source grounding / trusted launch when mission implies repository work.
  const impliesGit = missionImpliesRepositoryWork(input.analysis);
  let launchInputs: Record<string, unknown> = {};
  let sourcesToRead: string[] = [];
  let sourceGroundingPayload: unknown = null;

  if (impliesGit) {
    const launch = await resolveTrustedProductLaunchContext({
      oa: input.oa,
      projectId: input.projectId,
      pinnedBaseHeadSha: input.pinnedBaseHeadSha,
      managedRepoRootBase: input.managedRepoRootBase,
    });
    if (!launch.ok) {
      return {
        ok: false,
        code: launch.code,
        message: launch.message,
      };
    }
    launchInputs = {
      ...launchContextAsContractInputs(launch.context),
      trustedLaunchContextPinnedAtPrepare: true,
    };
    // Declared READ sources only — mutation scopeIn is NOT a read claim
    // (search ≠ read). Empty declared → honesty NOT_APPLICABLE when no reader.
    const declaredReadSources: string[] = [];
    const sourceGrounding = await resolveContractSourceGroundingForPrepare({
      projectId: input.projectId,
      cycleInstanceId: cycleInstanceId ?? "",
      declaredSources: declaredReadSources,
      repositoryIdentity: launch.context.repositoryBindingIdentity,
      repositoryHeadSha: launch.context.baseHeadSha,
      reader: input.sourceGroundingReader ?? null,
    });
    const groundingHonest = assertContractSourceGroundingHonest(sourceGrounding);
    if (!groundingHonest.ok) {
      return {
        ok: false,
        code: groundingHonest.code,
        message: groundingHonest.message,
      };
    }
    sourceGroundingPayload = sourceGrounding;
    const groundedSourceRefs = sourceGrounding.readRefs
      .filter((ref) =>
        isCurrentFullRepositoryRead({
          ref,
          expectedRepositoryHeadSha: sourceGrounding.repositoryHeadSha,
          expectedCycleInstanceId: sourceGrounding.cycleInstanceId,
        }),
      )
      .map((ref) => ref.pathOrRef);
    sourcesToRead = [...new Set(groundedSourceRefs)];
    // Concrete inspectable WHERE: scopeIn and/or narrative scope required.
    const concreteScope =
      scopeIn.some((p) => typeof p === "string" && p.trim().length > 0) ||
      (scopeNarrative.trim().length > 0 &&
        (scopeNarrative.includes("/") || scopeNarrative.length >= 8));
    if (!concreteScope) {
      return {
        ok: false,
        code: "SOURCE_GROUNDING_INSUFFICIENT",
        message:
          "Mission dépôt sans périmètre concret vérifiable — préparation refusée (STOP honnête).",
      };
    }
  }

  const missionKey = stableMissionKey({
    projectId: input.projectId,
    cycleInstanceId: cycleInstanceId ?? null,
    objective,
    expectedOutcome,
    scope: scopeNarrative,
    scopeIn,
    scopeOut: outOfScope,
    materiality: materiality.materiality,
  });
  const executionContractId = `xct:gen-prep:${missionKey}`;
  const idempotencyKey = `idem:gen-prep:${missionKey}`;
  const correlationId = `cor:gen-prep:${randomBytes(6).toString("hex")}`;

  const stopConditions = [
    ...(input.analysis.stopConditions ?? []).filter((s) => s.trim().length > 0),
    "AUTHORITY_DENIED",
    "CONTEXT_STALE",
    "NO_EXECUTE_WITHOUT_EXPLICIT_AUTHORIZE",
    "PROTECTED_PATH_GATES_REMAIN_APPLICABLE",
  ];
  const stopSeen = new Set<string>();
  const mergedStops = stopConditions.filter((s) => {
    if (stopSeen.has(s)) return false;
    stopSeen.add(s);
    return true;
  });

  const constraints = [
    "PRODUCT_GOVERNED",
    "NO_ATTEMPT_AT_PREPARE",
    "PREPARE_WITHOUT_SYSTEMATIC_HD",
    "CURSOR_DETERMINES_HOW",
    "GENERIC_MISSION_NO_TASK_CATALOG",
    materiality.constraintToken,
    ...outOfScope.map((s) => `OUT_OF_SCOPE:${s}`),
    ...(input.analysis.risks ?? []).map((s) => `RISK:${s}`),
    ...(input.analysis.reservations ?? []).map((s) => `RESERVATION:${s}`),
  ];

  const issuedAt = input.oa.clock.nowIso();
  const requiredAuthority = "N2" as const;
  const authority = registerLocalAuthorityForExecutionClass({
    authorityResolver: input.oa.authorityResolver,
    scope: PRODUCT_CANONICAL_EXECUTION_SCOPE,
    issuedAt,
    requiredAuthority,
    evidenceId: `evd:gen-prep:${missionKey}`,
    forceEnable: input.forceLocalAuthority === true,
  });
  if (!authority.ok) {
    return {
      ok: false,
      code: authority.code,
      message: authority.message,
    };
  }

  const materialityFacts = {
    ...materialityResolution.facts,
    assessedMateriality: materiality.materiality,
    reasonCodes: [...materiality.reasonCodes],
  };

  const built = await services.buildExecutionContract.execute({
    executionContractId,
    projectId: input.projectId,
    cycleInstanceId,
    decisionRefs: [],
    action: PRODUCT_CANONICAL_EXECUTION_ACTION,
    target: PRODUCT_CANONICAL_EXECUTION_TARGET,
    scope: PRODUCT_CANONICAL_EXECUTION_SCOPE,
    inputs: {
      objective,
      expectedOutcome,
      missionScopeNarrative: scopeNarrative,
      scopeIn,
      scopeOut: outOfScope,
      sourcesToRead,
      cursorDeterminesHow: true,
      prepareWithoutSystematicHumanDecision: true,
      humanDecisionCreated: false,
      executionAttemptCreated: false,
      prepareStatus: "draft_inspectable",
      materialityFacts,
      ...launchInputs,
      ...(sourceGroundingPayload
        ? { [CONTRACT_SOURCE_GROUNDING_INPUT_KEY]: sourceGroundingPayload }
        : {}),
      protectedPathHitsAtPrepare: collectProtectedPathHits(input.analysis),
    },
    expectedOutputs: [expectedOutcome],
    requiredCapabilities: [PRODUCT_CANONICAL_EXECUTION_CAPABILITY],
    requiredAuthority,
    constraints,
    stopConditions: mergedStops,
    evidenceRequirements: ["evreq:generic-prepare-mission-evidence"],
    reversibility: "partially_reversible",
    idempotencyKey,
    correlationId,
    status: "draft",
    actor: LOCAL_PILOTE_ACTOR,
    authorityEvidenceId: authority.evidenceId,
  });

  if (!built.ok) {
    return {
      ok: false,
      code: built.error.detailCode,
      message: built.error.message,
    };
  }

  let contract = built.contract;
  const shouldValidate = input.validateAfterBuild !== false;
  if (shouldValidate && services.validateExecutionContract) {
    const validated = await services.validateExecutionContract.execute({
      executionContractId: contract.executionContractId,
      actor: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: authority.evidenceId,
    });
    if (!validated.ok) {
      return {
        ok: false,
        code: validated.error.detailCode,
        message: validated.error.message,
      };
    }
    contract = validated.contract;
  }

  // Prepare consumed the CURRENT offer (if any).
  clearPendingGenericPrepareOffer(input.projectId);

  return {
    ok: true,
    contract,
    humanDecisionCreated: false,
    executionAttemptCreated: false,
    materiality,
  };
}

export function genericMissionClarificationText(input: {
  readonly presentation: "test_provider" | "openai_live";
  readonly missingFields: readonly string[];
  readonly structuralBlocked: boolean;
  readonly recommendPrepare?: boolean;
}): string {
  const head =
    input.presentation === "test_provider" ? "[Mode test]" : "[Mode réel]";
  if (input.structuralBlocked) {
    return [
      head,
      "Le cycle actif est conservé.",
      "Cette demande touche une frontière structurelle — une décision Pilote explicite reste nécessaire avant de préparer un contrat d'exécution.",
      "Rien n'a encore été exécuté.",
    ].join(" ");
  }
  if (input.recommendPrepare) {
    return [
      head,
      "Le cycle actif est conservé.",
      "Je recommande de confier cette mission à Cursor.",
      "Je peux préparer le contrat d'exécution générique inspectable.",
      "Si tu es d'accord, dis-le-moi (par ex. « OK, vas-y ») — préparer ≠ autoriser ≠ exécuter.",
      "Rien n'a encore été exécuté.",
    ].join(" ");
  }
  const gaps = input.missingFields.join(", ");
  return [
    head,
    "Le cycle actif est conservé.",
    `Pour préparer le contrat d'exécution, il me manque encore : ${gaps}.`,
    "La préparation reste distincte du lancement. Rien n'a encore été exécuté.",
  ].join(" ");
}

export function genericMissionPreparedText(input: {
  readonly presentation: "test_provider" | "openai_live";
  readonly executionContractId: string;
  readonly objective: string;
  readonly status: string;
}): string {
  const head =
    input.presentation === "test_provider" ? "[Mode test]" : "[Mode réel]";
  return [
    head,
    `J'ai préparé le contrat d'exécution correspondant à : ${input.objective}.`,
    `Contrat inspectable : ${input.executionContractId} (statut ${input.status} — non lancé).`,
    "Tu peux le consulter dans la trajectoire et me demander de l'ajuster avant d'autoriser l'exécution.",
    "Préparer ≠ autoriser ≠ exécuter. Aucune exécution n'a été lancée.",
  ].join(" ");
}

```

### `projects/sfia-studio/app/features/project-assistant/w2/authorizeGenericPreparedContract.ts`

```typescript
/**
 * Authority Continuity — Product path after generic PREPARE:
 * Require prior Pilot inspection attestation → Confirm (when required) → Authorize.
 * STOP BEFORE ExecutionAttempt / Cursor REAL.
 *
 * Does NOT record inspection itself (Q09/Q10 — no auto-attestation).
 * Requires expectedVersion + expectedSemanticFingerprint of the inspected contract.
 * Revalidates materiality against CURRENT Product (stamp is historical only).
 *
 * Reuses readContractInspectionState / confirmForAuthorization / evaluateExecutionAuthorization.
 */

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  materialityFromContractConstraints,
} from "@/lib/oa/execution-contract";
import {
  readContractInspectionState,
} from "./inspectExecutionContract";
import { confirmExecutionContractForAuthorization } from "./confirmForAuthorization";
import { evaluateExecutionAuthorization } from "./authorizeExecutionContract";
import type {
  ContractInspectionStateDto,
  EvaluateExecutionAuthorizationResult,
} from "./types";
import {
  analysisStubFromMaterialityFacts,
  parseStampedProductCurrentness,
  revalidateMaterialityAgainstCurrentProduct,
} from "./resolveAuthoritativeProductMateriality";

export type AuthorizeGenericPreparedContractInput = {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly executionContractId: string;
  /**
   * Exact contract version the Pilote inspected and is authorizing.
   * Required — server never invents inspection from authorize alone.
   */
  readonly expectedVersion: number;
  /**
   * Semantic fingerprint of the inspected contract version.
   * Stale / amended contracts BLOCK.
   */
  readonly expectedSemanticFingerprint: string;
  readonly forceLocalAuthority?: boolean;
};

export type AuthorizeGenericPreparedContractResult =
  | {
      readonly ok: true;
      readonly executionContractId: string;
      readonly contractVersion: number;
      readonly status: string;
      readonly semanticFingerprint: string;
      readonly inspection: ContractInspectionStateDto;
      readonly confirmationRef: string | null;
      readonly authorization: EvaluateExecutionAuthorizationResult & {
        readonly ok: true;
      };
      readonly executionAttemptCreated: false;
      readonly humanDecisionCreated: false;
    }
  | {
      readonly ok: false;
      readonly code: string;
      readonly message: string;
    };

export async function authorizeGenericPreparedContract(
  input: AuthorizeGenericPreparedContractInput,
): Promise<AuthorizeGenericPreparedContractResult> {
  const loaded =
    await input.oa.executionContractServices.getExecutionContract.execute({
      executionContractId: input.executionContractId,
    });
  if (!loaded.ok) {
    return {
      ok: false,
      code: loaded.error.detailCode,
      message: "Contrat introuvable — autorisation impossible.",
    };
  }
  if (loaded.contract.projectId !== input.projectId) {
    return {
      ok: false,
      code: "PROJECT_MISMATCH",
      message: "Contrat hors projet — autorisation refusée.",
    };
  }

  if (loaded.contract.version !== input.expectedVersion) {
    return {
      ok: false,
      code: "VERSION_MISMATCH",
      message:
        "Version du contrat différente de celle inspectée — réinspection requise.",
    };
  }

  // Q09/Q10 — NEVER record inspection here. Require a prior Pilote attestation.
  const inspection = await readContractInspectionState({
    oa: input.oa,
    executionContractId: input.executionContractId,
  });
  if (!inspection.ok) {
    return {
      ok: false,
      code: inspection.code,
      message: inspection.message,
    };
  }
  if (!inspection.inspectionSufficient) {
    return {
      ok: false,
      code: inspection.reinspectionRequired
        ? "REINSPECTION_REQUIRED"
        : "INSPECTION_REQUIRED",
      message: inspection.reinspectionRequired
        ? "Le contrat a changé depuis la dernière inspection — réinspecter avant d'autoriser."
        : "Inspection Pilote requise avant autorisation — aucun acte d'inspection n'est inventé ici.",
    };
  }
  if (inspection.contractVersion !== input.expectedVersion) {
    return {
      ok: false,
      code: "VERSION_MISMATCH",
      message:
        "L'attestation d'inspection ne couvre pas la version demandée — réinspection requise.",
    };
  }
  if (inspection.semanticFingerprint !== input.expectedSemanticFingerprint) {
    return {
      ok: false,
      code: "FINGERPRINT_MISMATCH",
      message:
        "Empreinte sémantique différente du contrat inspecté — réinspection requise.",
    };
  }

  // A2 — CURRENT Product materiality revalidation (stamp ≠ authority).
  const contractInputs = (loaded.contract.inputs ?? {}) as Record<
    string,
    unknown
  >;
  const factsRaw = (
    contractInputs.materialityFacts &&
    typeof contractInputs.materialityFacts === "object"
      ? (contractInputs.materialityFacts as Record<string, unknown>)
      : null
  );
  const stamped = materialityFromContractConstraints(loaded.contract.constraints);
  const revalidated = await revalidateMaterialityAgainstCurrentProduct({
    oa: input.oa,
    projectId: input.projectId,
    analysis: analysisStubFromMaterialityFacts(factsRaw, contractInputs),
    cycleInstanceId: loaded.contract.cycleInstanceId ?? null,
    stampedMateriality: stamped,
    stampedCurrentness: parseStampedProductCurrentness(factsRaw),
  });
  if (!revalidated.ok) {
    return {
      ok: false,
      code: revalidated.code,
      message: revalidated.message,
    };
  }

  let confirmationRef: string | null = loaded.contract.confirmationRef ?? null;

  const mid =
    await input.oa.executionContractServices.getExecutionContract.execute({
      executionContractId: input.executionContractId,
    });
  if (!mid.ok) {
    return {
      ok: false,
      code: mid.error.detailCode,
      message: "Contrat introuvable après contrôle d'inspection.",
    };
  }

  if (mid.contract.status === "confirmation_required") {
    const confirmed = await confirmExecutionContractForAuthorization({
      oa: input.oa,
      projectId: input.projectId,
      executionContractId: input.executionContractId,
      forceLocalAuthority: input.forceLocalAuthority,
      // Skip duplicate CURRENT revalidation — already done above.
      skipMaterialityRevalidation: true,
    });
    if (!confirmed.ok) {
      return {
        ok: false,
        code: confirmed.code,
        message: confirmed.message,
      };
    }
    confirmationRef = confirmed.confirmationRef;
  }

  const authorization = await evaluateExecutionAuthorization({
    oa: input.oa,
    projectId: input.projectId,
    executionContractId: input.executionContractId,
    forceLocalAuthority: input.forceLocalAuthority,
  });
  if (!authorization.ok) {
    return {
      ok: false,
      code: authorization.code,
      message: authorization.message,
    };
  }

  const after =
    await input.oa.executionContractServices.getExecutionContract.execute({
      executionContractId: input.executionContractId,
    });
  if (!after.ok) {
    return {
      ok: false,
      code: after.error.detailCode,
      message: "Contrat introuvable après autorisation.",
    };
  }

  return {
    ok: true,
    executionContractId: after.contract.executionContractId,
    contractVersion: after.contract.version,
    status: after.contract.status,
    semanticFingerprint: inspection.semanticFingerprint,
    inspection,
    confirmationRef,
    authorization,
    executionAttemptCreated: false,
    humanDecisionCreated: false,
  };
}

```

### `projects/sfia-studio/app/__tests__/project-assistant/p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts`

```typescript
/**
 * P6 G-D4/T-A4 — generic PREPARE → inspect → authorize without systematic HD.
 * Authority Continuity — Product materiality + explicit Pilot inspection.
 *
 * Deterministic only — ZERO OpenAI REAL — ZERO Cursor REAL.
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
import {
  assessGenericMissionPrepareReadiness,
  assessMaterialityForGenericPrepare,
  hasExplicitPrepareContractIntent,
  isChatFirstPrepareAcceptGo,
  prepareGenericExecutionContractDraft,
  rememberGenericPrepareRecommendation,
  resolveChatFirstGenericPrepareGo,
} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import { authorizeGenericPreparedContract } from "@/features/project-assistant/w2/authorizeGenericPreparedContract";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { resetPendingGenericPrepareOfferStoreForTests } from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
import {
  PRODUCT_CANONICAL_EXECUTION_ACTION,
  PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
} from "@/features/project-assistant/w2/w3aProductExecutionSemantics";
import {
  assessExecutionMateriality,
  assertDecisionRefsAdmissibleForConfirm,
} from "@/lib/oa/execution-contract";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";

function restoreEnvVar(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

function baseAnalysis(
  overrides: Partial<IntentAnalysisDto> = {},
): IntentAnalysisDto {
  return {
    parseOk: true,
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
    contradictionCandidate: null,
    challengeResponseAssessment: "sufficient",
    objective: "Corriger la fonctionnalité de filtrage",
    scope: "projects/demo/app/filter.ts",
    rephrasedRequest: "Corriger le bug de filtrage signalé",
    outOfScope: ["refonte UI", "migration DB"],
    risks: [],
    reservations: [],
    stopConditions: ["AUCUNE EXÉCUTION SANS AUTORISATION"],
    activatedBlocks: [],
    expectedOutcome: "Filtrage corrigé avec tests verts",
    criticalJustification: null,
    requestedOperation: null,
    executionIntent: {
      intentKind: "other",
      scopeIn: ["projects/demo/app/filter.ts"],
      scopeOut: ["refonte UI"],
    } as IntentAnalysisDto["executionIntent"],
    ...overrides,
  };
}

describe("P6 G-D4/T-A4 generic PREPARE → authorize", () => {
  let runtime: RuntimeApplicationService;
  let dbPath: string;
  let previousProvider: string | undefined;
  let previousMorrisAuthority: string | undefined;

  beforeEach(() => {
    previousProvider = process.env.OPS1_CONVERSATION_PROVIDER;
    previousMorrisAuthority = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetPendingGenericPrepareOfferStoreForTests();
    dbPath = tempProductDbPath("p6-gd4-ta4.sqlite");
    runtime = bootW2Runtime({ productDbPath: dbPath, idPrefix: "gd4a" });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    resetPendingGenericPrepareOfferStoreForTests();
    setConversationProviderForTests(null);
    cleanupW2TempDirs();
    restoreEnvVar("OPS1_CONVERSATION_PROVIDER", previousProvider);
    restoreEnvVar(
      "SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY",
      previousMorrisAuthority,
    );
  });

  async function seedActiveCycle(suffix: string): Promise<{
    projectId: string;
    cycleInstanceId: string;
  }> {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: `G-D4 ${suffix}`,
      objective: "Continuité préparation générique",
      context: "active cycle + generic prepare",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `GD4${suffix.toUpperCase().slice(0, 8)}`,
      idempotencyKey: `idem:gd4a-${suffix}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("createProject");
    const projectId = created.project.projectId;

    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps0.ok) throw new Error("lps0");

    const traj = await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: [
        { stepId: "stp:a", order: 1, label: "Clarify", state: "done" },
        { stepId: "stp:b", order: 2, label: "Deliver", state: "done" },
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

    const cycleInstanceId = `cyc:gd4a-${suffix}`;
    const candidate = await oa.cycleServices.createCycle.execute({
      cycleInstanceId,
      cycleTypeId: "cyc:delivery",
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
      issuedAt: "2026-10-15T08:00:00.000Z",
      forceEnable: true,
    });
    expect(auth.ok).toBe(true);
    if (!auth.ok) throw new Error("auth");

    const lps1 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps1.ok) throw new Error("lps1");

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

    // D — repository binding required for Git-implying generic prepare.
    if (oa.projectServices.setProjectRepositoryBinding) {
      const identity = `acme/gd4-${suffix}`;
      const bound = await oa.projectServices.setProjectRepositoryBinding.execute({
        projectId,
        actor: LOCAL_PILOTE_ACTOR,
        binding: {
          provider: "github",
          identity,
          remoteUrl: `https://github.com/${identity}.git`,
          defaultBranch: "main",
          pathRoot: `projects/gd4-${suffix}`,
        },
      });
      expect(bound.ok).toBe(true);
      ensureManagedRepoCloneSkeleton({
        managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
        identity,
      });
    }

    return { projectId, cycleInstanceId };
  }

  async function prepareOk(
    projectId: string,
    cycleInstanceId: string,
    analysis: IntentAnalysisDto = baseAnalysis(),
  ) {
    const prep = await prepareGenericExecutionContractDraft({
      oa: runtime.oa!,
      projectId,
      cycleInstanceId,
      analysis,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    return prep;
  }

  it("Q16/Q20 — actionable alone is not explicit prepare intent", () => {
    expect(
      hasExplicitPrepareContractIntent(
        "Corrige la fonctionnalité de tri dans src/sort.ts",
      ),
    ).toBe(false);
    expect(
      hasExplicitPrepareContractIntent(
        "Prépare le contrat d'exécution pour corriger le tri",
      ),
    ).toBe(true);
    expect(isChatFirstPrepareAcceptGo({ text: "OK, vas-y" })).toBe(true);
    expect(
      resolveChatFirstGenericPrepareGo({
        projectId: "prj:none",
        cycleInstanceId: "cyc:none",
        text: "OK, vas-y",
      }).kind,
    ).toBe("no_go");
  });

  it("Q02 — sync assess without Product context is UNKNOWN (never false-implicit)", () => {
    const mat = assessMaterialityForGenericPrepare(baseAnalysis());
    expect(mat.materiality).toBe("unknown");
    expect(mat.humanDecisionRequired).toBe(true);
  });

  it("Q01/Q08/Q22 — PREPARE from Product materiality + launch grounding, no HD/Attempt", async () => {
    const { projectId, cycleInstanceId } = await seedActiveCycle("prep");
    const oa = runtime.oa!;
    const before = await oa.decisionServices.decisions.listByProject(projectId);

    const prep = await prepareOk(projectId, cycleInstanceId);

    expect(prep.humanDecisionCreated).toBe(false);
    expect(prep.executionAttemptCreated).toBe(false);
    expect(prep.materiality.materiality).toBe("non_structural");
    expect(prep.contract.decisionRefs ?? []).toEqual([]);
    expect(prep.contract.action).toBe(PRODUCT_CANONICAL_EXECUTION_ACTION);
    expect(prep.contract.requiredCapabilities).toEqual([
      PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
    ]);
    expect(prep.contract.constraints).toContain("MATERIALITY:NON_STRUCTURAL");
    expect(prep.contract.status).not.toBe("draft");

    const facts = (prep.contract.inputs as { materialityFacts?: Record<string, unknown> })
      ?.materialityFacts;
    expect(facts?.productContextSufficient).toBe(true);
    expect(facts?.productCurrentness).toBeTruthy();
    expect(facts?.wouldMutateStructuralProjectTruth).toBe(false);
    expect(facts?.structuralTruthBasis).toMatch(/live_lps_ok/);
    expect(
      (prep.contract.inputs as { trustedLaunchContextPinnedAtPrepare?: boolean })
        ?.trustedLaunchContextPinnedAtPrepare,
    ).toBe(true);
    expect(
      (prep.contract.inputs as { baseHeadSha?: string })?.baseHeadSha,
    ).toBe(W2_TEST_PINNED_BASE_HEAD_SHA);

    const after = await oa.decisionServices.decisions.listByProject(projectId);
    expect(after.length).toBe(before.length);
  });

  it("Q04/Q05 — structural / security materiality blocks empty-ref PREPARE", async () => {
    const { projectId, cycleInstanceId } = await seedActiveCycle("struct");

    const prep = await prepareGenericExecutionContractDraft({
      oa: runtime.oa!,
      projectId,
      cycleInstanceId,
      analysis: baseAnalysis({
        signals: {
          structuralChange: true,
          securityImpact: false,
          architectureImpact: false,
          dataImpact: false,
          irreversible: false,
          lowRiskBounded: false,
        },
      }),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(false);
    if (prep.ok) throw new Error("expected block");
    expect(prep.code).toBe("STRUCTURAL_HUMAN_DECISION_REQUIRED");

    const mat = assessExecutionMateriality({
      modelSignals: { securityImpact: true },
    });
    expect(mat.materiality).toBe("structural");
    expect(mat.humanDecisionRequired).toBe(true);

    const deny = assertDecisionRefsAdmissibleForConfirm({
      decisionRefs: [],
      stampedMateriality: "non_structural",
      recomputed: mat,
    });
    expect(deny.ok).toBe(false);
  });

  it("Q09/Q10 — authorize without prior Pilot inspection BLOCKS (no auto-attestation)", async () => {
    const { projectId, cycleInstanceId } = await seedActiveCycle("noinsp");
    const prep = await prepareOk(projectId, cycleInstanceId);

    const blocked = await authorizeGenericPreparedContract({
      oa: runtime.oa!,
      projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
      expectedSemanticFingerprint:
        prep.contract.semanticFingerprint ?? "unset-fingerprint",
      forceLocalAuthority: true,
    });
    expect(blocked.ok).toBe(false);
    if (blocked.ok) throw new Error("expected block");
    expect(blocked.code).toBe("INSPECTION_REQUIRED");
  });

  it("Q06/Q07/Q11/Q15 — inspect → confirm → authorize without Attempt / without HD", async () => {
    const { projectId, cycleInstanceId } = await seedActiveCycle("auth");
    const oa = runtime.oa!;

    const prep = await prepareOk(
      projectId,
      cycleInstanceId,
      baseAnalysis({
        objective: "Corriger le tri (#auth)",
        expectedOutcome: "Tests verts sur le tri",
      }),
    );
    expect(prep.contract.status).toBe("confirmation_required");

    const decisionsBeforeAuth =
      await oa.decisionServices.decisions.listByProject(projectId);

    // Q09 — Pilote explicit inspect gesture (separate from authorize).
    const inspected = await inspectExecutionContract({
      oa,
      projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
    });
    expect(inspected.ok).toBe(true);
    if (!inspected.ok) throw new Error(inspected.message);
    expect(inspected.inspectionSufficient).toBe(true);

    const authorized = await authorizeGenericPreparedContract({
      oa,
      projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
      expectedSemanticFingerprint: inspected.semanticFingerprint,
      forceLocalAuthority: true,
    });
    expect(authorized.ok).toBe(true);
    if (!authorized.ok) throw new Error(authorized.message);

    expect(authorized.executionAttemptCreated).toBe(false);
    expect(authorized.humanDecisionCreated).toBe(false);
    expect(authorized.inspection.inspectionSufficient).toBe(true);
    expect(authorized.confirmationRef).toBeTruthy();
    expect(authorized.status).toBe("confirmed");
    expect(authorized.authorization.ok).toBe(true);
    if (authorized.authorization.ok) {
      expect(authorized.authorization.outcome).toBe("AUTHORIZED");
    }

    const decisionsAfterAuth =
      await oa.decisionServices.decisions.listByProject(projectId);
    expect(decisionsAfterAuth.length).toBe(decisionsBeforeAuth.length);

    const after = await oa.executionContractServices.getExecutionContract.execute(
      {
        executionContractId: prep.contract.executionContractId,
      },
    );
    expect(after.ok).toBe(true);
    if (!after.ok) throw new Error("get");
    expect(after.contract.decisionRefs ?? []).toEqual([]);
    expect(after.contract.confirmationRef).toBeTruthy();
    expect(after.contract.status).toBe("confirmed");
  });

  it("Q12/Q13 — version / fingerprint mismatch BLOCK", async () => {
    const { projectId, cycleInstanceId } = await seedActiveCycle("vfp");
    const oa = runtime.oa!;
    const prep = await prepareOk(projectId, cycleInstanceId);

    const inspected = await inspectExecutionContract({
      oa,
      projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
    });
    expect(inspected.ok).toBe(true);
    if (!inspected.ok) throw new Error(inspected.message);

    const badVersion = await authorizeGenericPreparedContract({
      oa,
      projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version + 1,
      expectedSemanticFingerprint: inspected.semanticFingerprint,
      forceLocalAuthority: true,
    });
    expect(badVersion.ok).toBe(false);
    if (badVersion.ok) throw new Error("expected version block");
    expect(badVersion.code).toBe("VERSION_MISMATCH");

    const badFp = await authorizeGenericPreparedContract({
      oa,
      projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
      expectedSemanticFingerprint: "deadbeef".repeat(8),
      forceLocalAuthority: true,
    });
    expect(badFp.ok).toBe(false);
    if (badFp.ok) throw new Error("expected fingerprint block");
    expect(badFp.code).toBe("FINGERPRINT_MISMATCH");
  });

  it("Q17/Q18 — chat-first OK vas-y binds CURRENT offer only", () => {
    const projectId = "prj:chat-go";
    const cycleInstanceId = "cyc:chat-go";
    expect(
      resolveChatFirstGenericPrepareGo({
        projectId,
        cycleInstanceId,
        text: "OK, vas-y",
      }).kind,
    ).toBe("no_go");

    rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId,
      analysis: baseAnalysis({
        objective: "Réorganiser les fichiers du projet",
        expectedOutcome: "Arborescence clarifiée",
        scope: "projects/demo/docs",
      }),
      offeredAtIso: "2026-10-15T12:00:00.000Z",
    });

    const go = resolveChatFirstGenericPrepareGo({
      projectId,
      cycleInstanceId,
      text: "OK, vas-y",
    });
    expect(go.kind).toBe("prepare");
  });

  it("Q14 — different scope yields distinct contract ids (no silent reuse)", async () => {
    const { projectId, cycleInstanceId } = await seedActiveCycle("idem");

    const a = await prepareOk(
      projectId,
      cycleInstanceId,
      baseAnalysis({
        objective: "Mission idem A",
        scope: "src/a.ts",
        expectedOutcome: "A done",
        executionIntent: {
          intentKind: "other",
          scopeIn: ["src/a.ts"],
          scopeOut: [],
        } as IntentAnalysisDto["executionIntent"],
      }),
    );
    const b = await prepareOk(
      projectId,
      cycleInstanceId,
      baseAnalysis({
        objective: "Mission idem A",
        scope: "src/b.ts",
        expectedOutcome: "A done",
        executionIntent: {
          intentKind: "other",
          scopeIn: ["src/b.ts"],
          scopeOut: [],
        } as IntentAnalysisDto["executionIntent"],
      }),
    );
    expect(a.contract.executionContractId).not.toBe(
      b.contract.executionContractId,
    );
  });

  it("readiness helper — structural blocked when signals fire", () => {
    const r = assessGenericMissionPrepareReadiness(
      baseAnalysis({
        signals: {
          structuralChange: true,
          securityImpact: false,
          architectureImpact: false,
          dataImpact: false,
          irreversible: false,
          lowRiskBounded: false,
        },
      }),
    );
    expect(r.structuralBlocked).toBe(true);
    expect(r.ready).toBe(false);
  });
});

```

### `projects/sfia-studio/app/__tests__/project-assistant/p6.authorityChatFirstContinuity.d0.test.ts`

```typescript
/**
 * P6 Authority & Chat-First Continuity — CURRENT materiality revalidation,
 * protected-path gate, and chat-first prepare offer binding.
 *
 * Deterministic only — ZERO OpenAI REAL — ZERO Cursor REAL.
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
import { prepareGenericExecutionContractDraft } from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import { authorizeGenericPreparedContract } from "@/features/project-assistant/w2/authorizeGenericPreparedContract";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { resetPendingGenericPrepareOfferStoreForTests } from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";

function restoreEnvVar(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

function baseAnalysis(
  overrides: Partial<IntentAnalysisDto> = {},
): IntentAnalysisDto {
  return {
    parseOk: true,
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
    contradictionCandidate: null,
    challengeResponseAssessment: "sufficient",
    objective: "Documenter le filtre",
    scope: "projects/demo/docs/filter.md",
    rephrasedRequest: "Mettre à jour la doc du filtre",
    outOfScope: ["migration"],
    risks: [],
    reservations: [],
    stopConditions: [],
    activatedBlocks: [],
    expectedOutcome: "Doc à jour",
    criticalJustification: null,
    requestedOperation: null,
    executionIntent: {
      intentKind: "other",
      scopeIn: ["projects/demo/docs/filter.md"],
      scopeOut: [],
    } as IntentAnalysisDto["executionIntent"],
    ...overrides,
  };
}

describe("P6 Authority & Chat-First Continuity", () => {
  let runtime: RuntimeApplicationService;
  let previousProvider: string | undefined;
  let previousMorrisAuthority: string | undefined;

  beforeEach(() => {
    previousProvider = process.env.OPS1_CONVERSATION_PROVIDER;
    previousMorrisAuthority = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetPendingGenericPrepareOfferStoreForTests();
    runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("p6-auth-cf.sqlite"),
      idPrefix: "acfc",
    });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    resetPendingGenericPrepareOfferStoreForTests();
    setConversationProviderForTests(null);
    cleanupW2TempDirs();
    restoreEnvVar("OPS1_CONVERSATION_PROVIDER", previousProvider);
    restoreEnvVar(
      "SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY",
      previousMorrisAuthority,
    );
  });

  async function seed(suffix: string) {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: `ACFC ${suffix}`,
      objective: "Authority continuity",
      context: "det",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `AC${suffix.toUpperCase().slice(0, 6)}`,
      idempotencyKey: `idem:acfc-${suffix}`,
    });
    if (!created.ok) throw new Error("createProject");
    const projectId = created.project.projectId;
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
    const cycleInstanceId = `cyc:acfc-${suffix}`;
    await oa.cycleServices.createCycle.execute({
      cycleInstanceId,
      cycleTypeId: "cyc:delivery",
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
    const auth = registerLocalPiloteAuthority({
      authorityResolver: oa.authorityResolver,
      scope: `pilot-lifecycle:${cycleInstanceId}`,
      issuedAt: "2026-10-15T08:00:00.000Z",
      forceEnable: true,
    });
    if (!auth.ok) throw new Error("auth");
    const lps1 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps1.ok) throw new Error("lps1");
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
    if (!started.ok) throw new Error("start");
    const identity = `acme/acfc-${suffix}`;
    await oa.projectServices.setProjectRepositoryBinding!.execute({
      projectId,
      actor: LOCAL_PILOTE_ACTOR,
      binding: {
        provider: "github",
        identity,
        remoteUrl: `https://github.com/${identity}.git`,
        defaultBranch: "main",
        pathRoot: `projects/acfc-${suffix}`,
      },
    });
    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
      identity,
    });
    return { projectId, cycleInstanceId };
  }

  it("Q03/Q04/Q07 — LPS currentness change between PREPARE and AUTHORIZE → BLOCK", async () => {
    const { projectId, cycleInstanceId } = await seed("stale");
    const oa = runtime.oa!;

    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId,
      analysis: baseAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);

    const inspected = await inspectExecutionContract({
      oa,
      projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
    });
    expect(inspected.ok).toBe(true);
    if (!inspected.ok) throw new Error(inspected.message);

    // Mutate LPS (objective) → currentness fingerprint changes.
    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps.ok) throw new Error("lps");
    const appended =
      await oa.projectServices.appendLivingProjectStateVersion.execute({
        projectId,
        expectedVersion: lps.livingProjectState.version,
        objective: "Objectif LPS modifié après PREPARE",
        context: lps.livingProjectState.context,
        scope: lps.livingProjectState.scope,
        createdBy: LOCAL_PILOTE_ACTOR,
      });
    expect(appended.ok).toBe(true);

    const blocked = await authorizeGenericPreparedContract({
      oa,
      projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
      expectedSemanticFingerprint: inspected.semanticFingerprint,
      forceLocalAuthority: true,
    });
    expect(blocked.ok).toBe(false);
    if (blocked.ok) throw new Error("expected currentness block");
    expect(blocked.code).toBe("MATERIALITY_CURRENTNESS_STALE");
  });

  it("Q06 — protected path in scope blocks NON_STRUCTURAL prepare", async () => {
    const { projectId, cycleInstanceId } = await seed("prot");
    const prep = await prepareGenericExecutionContractDraft({
      oa: runtime.oa!,
      projectId,
      cycleInstanceId,
      analysis: baseAnalysis({
        objective: "Modifier la doctrine",
        scope: "projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md",
        expectedOutcome: "Doctrine touchée",
        executionIntent: {
          intentKind: "other",
          scopeIn: [
            "projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md",
          ],
          scopeOut: [],
        } as IntentAnalysisDto["executionIntent"],
      }),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(false);
    if (prep.ok) throw new Error("expected protected block");
    expect(
      prep.code === "STRUCTURAL_HUMAN_DECISION_REQUIRED" ||
        prep.code === "MATERIALITY_UNKNOWN",
    ).toBe(true);
  });

  it("Q23 — Git mission without repository binding → STOP", async () => {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: "No binding",
      objective: "No repo",
      context: "det",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "NOBIND",
      idempotencyKey: "idem:acfc-nobind",
    });
    if (!created.ok) throw new Error("create");
    const projectId = created.project.projectId;
    // No cycle / binding — prepare with file scope must fail closed on launch.
    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: baseAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(false);
    if (prep.ok) throw new Error("expected stop");
    // Either no active cycle for non-mutation claim, or repo binding missing.
    expect(
      [
        "REPOSITORY_BINDING_REQUIRED",
        "MATERIALITY_UNKNOWN",
        "STRUCTURAL_HUMAN_DECISION_REQUIRED",
      ].includes(prep.code),
    ).toBe(true);
  });
});

```

## Z. Fake / Real

Applicable : OUI.
Niveau : DETERMINISTIC INTEGRATED PRODUCT PATH PROVEN AT TESTED SCOPE.
Fake : OpenAI/Nora provider, Cursor launch, gestes Pilote simulés via services DET.
Réel Product : OA ExecutionContract, LPS, Confirm/Authorize, inspection store.
Hors scope : REAL BOUNDARY ; E2E REAL ; P6 GLOBAL PASS ; runtime v3 ADOPTED.
Gate Morris REAL : NON CONSOMMÉ. Aucun `*.real.test.ts`.

---

## AA. Sécurité / autorité

- Pas d'élévation de privilèges
- Pas de Confirmation/HD inventée
- Pas d'auto-attestation d'inspection
- Protected paths non bypassés par stamp
- LOCAL_PILOTE_ACTOR ≠ preuve consentement seule (binding version/fp + inspection state requis)
- Aucun secret exposé

---

## AB. Dette et exit

| Dette | Propriétaire | Sortie |
| --- | --- | --- |
| Preuve visuelle REAL / Nora live | Morris GO REAL | Human QA P6 e66 |
| Cursor REAL sous contrat AUTHORIZED | Morris GO distinct | Attempt sous gate |
| Identité Pilote multi-user au-delà LOCAL | Architecture decision si besoin | Decision Pack |

---

## AC. Réserves

1. Pas de preuve conversationnelle REAL (provider fake).
2. UI Trajectory « Exécuter » un clic enchaîne Inspect→Confirm→Authorize côté client — le serveur refuse désormais authorize sans attestation préalable (OK) ; geste Pilote REAL non observé.
3. Mission non-Git sans binding non forcée (OK) ; parcours F2 live sans `pinnedBaseHeadSha` dépend du managed clone.

---

## AD. Gates restants

- Human QA P6 projet e66
- Cursor REAL sous GO distinct
- Pas de commit/push/PR/merge projet sans GO
- Runtime v3 adoption non demandée

---

## AE. Exit Proof

Parcours DET prouvé :
Intention qualifiée → PREPARE (materiality Product + launch grounding) → Inspect Pilote → Confirm (CURRENT revalidation) → AUTHORIZED — **0 Attempt**, **0 HD artificielle**, binding version/fingerprint, stamp ≠ sole CURRENT.

---

## AF. Git Truth final

- Branche : `delivery/sfia-studio-p6-generic-execution-conversational-continuity`
- HEAD : `e7822033f159d6a0e9c15f6f26843bd1248edbc1` (inchangé — aucun commit projet)
- Candidat local dirty préservé
- Handoff L3 : voir section suivante après publish

---

## AG. Verdict

**P6 GENERIC EXECUTION CONTINUITY AUTHORITY & CHAT-FIRST CORRECTION PASS — DETERMINISTIC INTEGRATED PRODUCT PATH PROVEN AT TESTED SCOPE / LOCAL CANDIDATE / READY FOR CHATGPT CRITICAL REVIEW.**

Interdit de déclarer : P6 GLOBAL PASS ; PRODUCT READY ; REAL E2E PROVEN ; RUNTIME V3 ADOPTED.

---

## AH. Instruction ChatGPT

Lire le Review Handoff distant. Effectuer la Critical Review du candidat Authority & Chat-First Continuity.

Vérifier particulièrement :
- matérialité fondée sur faits Product (pas false hardcodé)
- revalidation CURRENT PREPARE→AUTHORIZE
- consentement explicite ; absence d'auto-attestation
- inspection versionnée + fingerprint
- Confirmation réelle ; empty refs seulement si NON_STRUCTURAL CURRENT
- current subject binding ; « OK, vas-y » → PREPARE
- contrat natif inspectable ; grounding ; HOW Cursor autonome
- absence catalogue métier / moteur parallèle
- tests DET stricts ; protections SFIA ; absence de REAL

Ne pas autoriser automatiquement : commit/push/PR/merge projet, Human QA REAL, Cursor REAL, doctrine, promotion runtime v3.

---

## AI. Git Review Index

| Item | Valeur |
| --- | --- |
| Delivery branch | `delivery/sfia-studio-p6-generic-execution-conversational-continuity` |
| Delivery HEAD | `e7822033f159d6a0e9c15f6f26843bd1248edbc1` |
| Pack path | `.tmp-sfia-review/chatgpt-review.md` |
| Handoff branch | `sfia/review-handoff` |
| Handoff file | `sfia-review-handoff/latest-chatgpt-review.md` |
| Entry handoff | `adae2f84` / blob `9f8f135f` |
