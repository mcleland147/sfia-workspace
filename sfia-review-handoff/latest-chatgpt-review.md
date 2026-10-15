# SFIA Studio — P6 G-D4/T-A4 Authorization Continuity
## Review Pack FULL — CRITICAL

| Champ | Valeur |
| --- | --- |
| **A. Horodatage Europe/Paris** | 2026-10-15T13:49:07+0200 |
| **B. GO Morris** | G-D4/T-A4 EXECUTION AUTHORIZATION WITHOUT SYSTEMATIC STRUCTURAL HUMANDECISION — ADOPTED 2026-10-15 |
| **C. Repo** | mcleland147/sfia-workspace |
| **Branche** | `delivery/sfia-studio-p6-generic-execution-conversational-continuity` |
| **HEAD** | `e7822033f159d6a0e9c15f6f26843bd1248edbc1` |
| **origin/main** | `e7822033f159d6a0e9c15f6f26843bd1248edbc1` |
| **Worktree** | `/Users/morris/Projects/sfia-workspace-p6-generic-exec-continuity-e7822033` |
| **Cycle** | 8 — Delivery / CRITICAL |
| **Entrée handoff** | `7e2d1ae8` / blob `03e1966b` |

---

## C. Git Truth

### Initial
HEAD e7822033 = origin/main. Parent G-D4 draft candidate préservé (8 Product + prepare draft + test + pack).

### Final

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.ui04.pilotFacingSimplification.ui.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
 M projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
 M projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
 M projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
 M projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts
 M projects/sfia-studio/app/features/project-assistant/w2/resolveChatFirstPilotDecision.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/application/confirmExecutionContract.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/index.ts
 M projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a4-execution-contract-governance/02-canonical-contract-mapping.md
 M projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/execution/execution-contract.schema.json
 M projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/tests/execution-contract-governance.test.mjs
?? projects/sfia-studio/app/__tests__/project-assistant/p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/w2/authorizeGenericPreparedContract.ts
?? projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
?? projects/sfia-studio/app/lib/oa/execution-contract/domain/executionMateriality.ts
```

```
 .tmp-sfia-review/chatgpt-review.md                 | 173 ++-------------------
 ....hqa.ui04.pilotFacingSimplification.ui.test.tsx |  23 +++
 ...ifactMaterializationContinuityCorr01.d0.test.ts |  25 +++
 .../hooks/useProductConversation.ts                |  22 ++-
 .../surfaces/ConversationSurface.tsx               |   6 +
 .../f2/activeCycleGovernedContinuation.ts          |  71 +++++----
 .../features/project-assistant/f2/orchestrateF2.ts | 161 ++++++++++++++++++-
 .../project-assistant/presentationLabels.ts        |  50 ++++--
 .../w2/confirmForAuthorization.ts                  |  52 ++++++-
 .../w2/resolveChatFirstPilotDecision.ts            | 104 ++++++++++++-
 .../application/confirmExecutionContract.ts        |  53 +++++++
 .../app/lib/oa/execution-contract/index.ts         |  10 ++
 .../02-canonical-contract-mapping.md               |   2 +-
 .../execution/execution-contract.schema.json       |  10 +-
 .../tests/execution-contract-governance.test.mjs   |  28 +++-
 15 files changed, 563 insertions(+), 227 deletions(-)
```

```
NAME-STATUS:
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

UNTRACKED:
projects/sfia-studio/app/__tests__/project-assistant/p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts
projects/sfia-studio/app/features/project-assistant/w2/authorizeGenericPreparedContract.ts
projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
projects/sfia-studio/app/lib/oa/execution-contract/domain/executionMateriality.ts
```

Aucun commit/push Product. Aucun staged. Ports/QA non touchés.

---

## D–E. Convergence / C1 / P2 / v3 / T-A4

- Capacité: V3-F05 / F11 / F12 — conversation → exécution gouvernée.
- P2-D-01 / P2-D-03: Confirmation ≠ HumanDecision ; Confirmation ne remplace pas HD manquante.
- T-A4 schema `0.2.0-oa` **conservé** (pas de bump) — if/then confirmed adapté.
- Runtime v3 NON ADOPTED. P6 GLOBAL NOT PASSED.

---

## F. Contrat actuel vs cible

| Avant | Après (ce cycle) |
| --- | --- |
| confirmed ⇒ decisionRefs minItems 1 (schema) | confirmed ⇒ confirmationRef required ; decisionRefs may be `[]` (schema) |
| Product Confirm refuse empty refs | Confirm autorise `[]` si MATERIALITY:NON_STRUCTURAL + recomputed non_structural |
| PREPARE draft only | PREPARE Build+Validate → confirmation_required (N2) |
| Pas de chemin authorize générique sans HD | `authorizeGenericPreparedContract` Inspect→Confirm→Authorize, 0 Attempt |
| Actionable ⇒ PREPARE systématique | Explicit prepare intent requis (Q16) |

---

## G. Manifest exact

### Créés
1. `lib/oa/execution-contract/domain/executionMateriality.ts`
2. `w2/prepareGenericExecutionContractDraft.ts` (évolué)
3. `w2/authorizeGenericPreparedContract.ts`
4. `__tests__/.../p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts`

### Modifiés (G-D4/T-A4)
5. `execution-contract.schema.json`
6. `02-canonical-contract-mapping.md`
7. `confirmExecutionContract.ts`
8. `confirmForAuthorization.ts`
9. `execution-contract/index.ts`
10. `execution-contract-governance.test.mjs`
11. `orchestrateF2.ts`

### Parent préservé
12–18. presentationLabels, ConversationSurface, useProductConversation, activeCycleGovernedContinuation, resolveChatFirstPilotDecision, ui04, continuityCorr01

---

## H. Architecture réutilisée

BuildExecutionContract, ValidateExecutionContract, ConfirmExecutionContract, inspectExecutionContract, confirmForAuthorization, evaluateExecutionAuthorization, generalist surface. **Aucun** second moteur. **Aucun** catalogue métier.

---

## I. Schéma et mapping

- Schema: `confirmed` requires `confirmationRef` only; `decisionRefs` minItems 0.
- Structural HD still enforced at **runtime** via materiality stamp + recompute.
- Mapping T-A4 mis à jour (borne G-D4).
- schemaVersion reste `0.2.0-oa` — pas de migration persistence.

---

## J. Matérialité server-owned

`assessExecutionMateriality` / `assessExecutionMaterialityOrUnknown`:
- model signals (positive structural only)
- protected paths
- contradiction
- LPS/cycle/trajectory mutation flags
- authority expansion

Stamp `MATERIALITY:*` + `inputs.materialityFacts`. Confirm recomputes ; mismatch ⇒ DECISION_REQUIRED. Empty refs without stamp ⇒ refuse.

---

## K–O. PREPARE / Validate / Confirm / Inspect / Authorize

1. Explicit prepare intent → `prepareGenericExecutionContractDraft` (Build+Validate, decisionRefs=[], MATERIALITY:NON_STRUCTURAL).
2. Pilote inspecte (recordContractInspection).
3. Si confirmation_required → Confirmation réelle (sans inventer dec:).
4. `evaluateExecutionAuthorization` → AUTHORIZED | BLOCKED.
5. **STOP** — `executionAttemptCreated: false`.

Binding: expectedVersion + semanticFingerprint via inspection existante.

---

## P–R. Mission / Nora / UI

- Idempotence key includes scopeIn/out + materiality.
- Q16: actionable sans « prépare le contrat » → recommendPrepare, pas Build.
- UI draft/validated/confirmation_required déjà « Prête à examiner ».
- Parent F-C9-01/03/04/05 préservés.

---

## S–U. Tests

### T-A4 schema
`node --test tests/execution-contract-governance.test.mjs` → **20 PASS** (dont G-D4 empty refs + confirmationRef still required).

### Product DET
`p6.gD4...` + continuity + ui04 + MW5 → **51 PASS**.

### typecheck
`npm run typecheck` → **PASS**.

### Oracles Q01–Q24 (synthèse)

| ID | Verdict |
| --- | --- |
| Q01 PREPARE sans HD | PASS |
| Q02 entité Product | PASS |
| Q03 confirmed empty refs | PASS (schema+runtime) |
| Q04 structural HD | PASS |
| Q05 UNKNOWN fail-closed | PASS (stamp/recompute) |
| Q06 Confirmation réelle | PASS |
| Q07 binding version | PASS (inspect expectedVersion) |
| Q08 0 Attempt | PASS |
| Q09 pas d'auth inventée | PASS |
| Q10 authorize DET | PASS |
| Q11 amend reinspect | NOT OBSERVED (mécanisme existant) |
| Q12 grounding | PARTIAL (sourcesToRead vide; launch context non branché ce cycle) |
| Q13 protected scope | PASS (materiality protectedPathHits) |
| Q14 idempotence | PASS |
| Q15 Nora prepare explicite | PASS (unit + F2 gate) |
| Q16 pas PREPARE systématique | PASS |
| Q17 prep ≠ exec | PASS |
| Q18 même abstraction | PASS |
| Q19 legacy HD | PASS (parent/tests) |
| Q20 currentness | PASS (ui04) |
| Q21 MW5 | PASS |
| Q22 schema | PASS |
| Q23 audit materialityFacts | PASS (inputs stamped) |
| Q24 NO REAL | PASS |

Niveau: **DETERMINISTIC INTEGRATED PREPARE → INSPECT → AUTHORIZE AT TESTED SCOPE**.

---

## V–W. Diffs utiles + fichiers créés

### execution-contract.schema.json

```diff
diff --git a/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/execution/execution-contract.schema.json b/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/execution/execution-contract.schema.json
index 7451c13b..bab221a9 100644
--- a/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/execution/execution-contract.schema.json
+++ b/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/execution/execution-contract.schema.json
@@ -45,7 +45,7 @@
       "items": {
         "$ref": "../common/identifier.schema.json"
       },
-      "description": "Structuring contracts require ≥1 accepted, same-project, non-superseded decision at build and at confirm (runtime). After confirmed, if a source decision is later superseded, contract must not start new execution until superseded or cancelled (runtime T-A4→T-A5 gate)."
+      "description": "Structuring contracts require ≥1 accepted, same-project, non-superseded decision at build and at confirm (runtime). G-D4: empty decisionRefs is schema-admissible at confirmed when server-owned materiality is non-structural; structural materiality still requires ≥1 decisionRef (runtime fail-closed). After confirmed, if a source decision is later superseded, contract must not start new execution until superseded or cancelled (runtime T-A4→T-A5 gate)."
     },
     "confirmationRef": {
       "$ref": "../common/identifier.schema.json",
@@ -237,16 +237,16 @@
       },
       "then": {
         "required": [
-          "confirmationRef",
-          "decisionRefs"
+          "confirmationRef"
         ],
         "properties": {
           "decisionRefs": {
             "type": "array",
-            "minItems": 1
+            "minItems": 0,
+            "description": "G-D4: empty array admissible for non-structural confirmed contracts. Structural missions still require ≥1 decisionRef at runtime (Confirm/Authorize fail-closed)."
           }
         },
-        "description": "confirmed requires confirmationRef (consumed Confirmation) and ≥1 decisionRef. Semantic freshness of decision/Critical ack remain runtime."
+        "description": "confirmed requires confirmationRef (consumed Confirmation). decisionRefs may be empty when server-owned materiality is non-structural (G-D4); structural HD freshness remains runtime."
       }
     }
   ]
```
### 02-canonical-contract-mapping.md

```diff
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a4-execution-contract-governance/02-canonical-contract-mapping.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a4-execution-contract-governance/02-canonical-contract-mapping.md
index bd3b320b..c3e4d032 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a4-execution-contract-governance/02-canonical-contract-mapping.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a4-execution-contract-governance/02-canonical-contract-mapping.md
@@ -33,7 +33,7 @@ Schema path:
 | Field | Constraint |
 |-------|------------|
 | `cycleInstanceId` | identifier |
-| `decisionRefs` | array ; **required minItems 1 when status=confirmed** |
+| `decisionRefs` | array ; when `status=confirmed`, may be empty **only** for server-owned non-structural materiality (G-D4). Structural missions still require ≥1 accepted same-project decisionRef at Confirm/Authorize (runtime fail-closed). Schema no longer forces `minItems: 1` at confirmed. |
 | `confirmationRef` | identifier ; **required when status=confirmed** (consumed Confirmation) |
 | `doctrinePackageRef` | doctrine-package-ref |
 | `inputs` / `expectedOutputs` | object / string[] |
```
### confirmExecutionContract.ts

```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-contract/application/confirmExecutionContract.ts b/projects/sfia-studio/app/lib/oa/execution-contract/application/confirmExecutionContract.ts
index 3eeb6ac6..8c454ccd 100644
--- a/projects/sfia-studio/app/lib/oa/execution-contract/application/confirmExecutionContract.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-contract/application/confirmExecutionContract.ts
@@ -11,6 +11,11 @@ import {
   hasConfirmationConstraintContradiction,
   isTa5Status,
 } from "../domain/invariants";
+import {
+  assessExecutionMateriality,
+  assertDecisionRefsAdmissibleForConfirm,
+  materialityFromContractConstraints,
+} from "../domain/executionMateriality";
 import type {
   ActorReference,
   ConfirmExecutionContractRequest,
@@ -186,7 +191,55 @@ export class ConfirmExecutionContract {
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
+        const recomputed = assessExecutionMateriality({
+          modelSignals:
+            factsRaw && typeof factsRaw === "object"
+              ? (factsRaw.modelSignals as
+                  | {
+                      structuralChange?: boolean;
+                      securityImpact?: boolean;
+                      architectureImpact?: boolean;
+                      dataImpact?: boolean;
+                      irreversible?: boolean;
+                    }
+                  | null)
+              : null,
+          contradictionConflictPresent:
+            factsRaw?.contradictionConflictPresent === true,
+          protectedPathHits: Array.isArray(factsRaw?.protectedPathHits)
+            ? (factsRaw!.protectedPathHits as string[])
+            : [],
+          wouldMutateStructuralProjectTruth:
+            factsRaw?.wouldMutateStructuralProjectTruth === true,
+          wouldMutateCycleOrTrajectoryTruth:
+            factsRaw?.wouldMutateCycleOrTrajectoryTruth === true,
+          authorityEnvelopeExpanded:
+            factsRaw?.authorityEnvelopeExpanded === true,
+          currentContradictionUnresolved:
+            factsRaw?.currentContradictionUnresolved === true,
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
### confirmForAuthorization.ts

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts b/projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts
index bb187717..e3ebd7b5 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts
@@ -18,6 +18,11 @@ import {
   LOCAL_PILOTE_ACTOR,
   registerLocalAuthorityForExecutionClass,
 } from "@/lib/oa/decision";
+import {
+  assessExecutionMateriality,
+  assertDecisionRefsAdmissibleForConfirm,
+  materialityFromContractConstraints,
+} from "@/lib/oa/execution-contract";
 import { readContractInspectionState } from "./inspectExecutionContract";
 import type { ConfirmForAuthorizationResult } from "./types";

@@ -128,13 +133,51 @@ export async function confirmExecutionContractForAuthorization(
     };
   }

-  const decisionRef = (contract.decisionRefs ?? [])[0];
-  if (!decisionRef) {
+  // G-D4 — empty decisionRefs admissible only for NON_STRUCTURAL stamped contracts.
+  // Confirmation ≠ HumanDecision (P2-D-03). Do not invent a dec: to unlock Confirm.
+  const decisionRefs = contract.decisionRefs ?? [];
+  const decisionRef = decisionRefs[0];
+  const stamped = materialityFromContractConstraints(contract.constraints);
+  const factsRaw = (
+    contract.inputs as { materialityFacts?: Record<string, unknown> } | undefined
+  )?.materialityFacts;
+  const recomputed = assessExecutionMateriality({
+    modelSignals:
+      factsRaw && typeof factsRaw === "object"
+        ? (factsRaw.modelSignals as {
+            structuralChange?: boolean;
+            securityImpact?: boolean;
+            architectureImpact?: boolean;
+            dataImpact?: boolean;
+            irreversible?: boolean;
+          } | null)
+        : null,
+    contradictionConflictPresent:
+      factsRaw?.contradictionConflictPresent === true,
+    protectedPathHits: Array.isArray(factsRaw?.protectedPathHits)
+      ? (factsRaw!.protectedPathHits as string[])
+      : [],
+    wouldMutateStructuralProjectTruth:
+      factsRaw?.wouldMutateStructuralProjectTruth === true,
+    wouldMutateCycleOrTrajectoryTruth:
+      factsRaw?.wouldMutateCycleOrTrajectoryTruth === true,
+    authorityEnvelopeExpanded: factsRaw?.authorityEnvelopeExpanded === true,
+    currentContradictionUnresolved:
+      factsRaw?.currentContradictionUnresolved === true,
+  });
+  const admissible = assertDecisionRefsAdmissibleForConfirm({
+    decisionRefs,
+    stampedMateriality: stamped,
+    recomputed,
+  });
+  if (!admissible.ok) {
     return {
       ok: false,
       code: "DECISION_REQUIRED",
       message:
-        "Contrat sans décision humaine rattachée — aucune confirmation possible.",
+        stamped === "non_structural" && recomputed.materiality !== "non_structural"
+          ? "Matérialité structurelle détectée à la confirmation — HumanDecision requise."
+          : "Contrat sans décision humaine rattachée alors qu'une HumanDecision est requise — confirmation refusée.",
     };
   }

@@ -178,7 +221,8 @@ export async function confirmExecutionContractForAuthorization(
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
### orchestrateF2.ts

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 54e2e72c..1c31cddd 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -122,6 +122,13 @@ import {
   type ChatFirstEffectiveDisposition,
   type ChatFirstPrepareOutcome,
 } from "../w2/resolveChatFirstPilotDecision";
+import {
+  assessGenericMissionPrepareReadiness,
+  genericMissionClarificationText,
+  genericMissionPreparedText,
+  hasExplicitPrepareContractIntent,
+  prepareGenericExecutionContractDraft,
+} from "../w2/prepareGenericExecutionContractDraft";
 import {
   replacePendingDecisionSubjectForExplicitReinstruction,
   writePendingDecisionSubjectMarker,
@@ -811,10 +818,32 @@ function chatFirstDecisionText(input: {
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
@@ -1924,6 +1953,128 @@ export async function orchestrateAssistantSend(input: {
     oa,
   });

+  // F-C9-01/04 + G-D4 — actionable work while a cycle is already active must
+  // not fall through to NEW_CYCLE START. PREPARE only on explicit prepare
+  // intent (Q16); otherwise clarify gaps or recommend prepare. Never canned.
+  if (
+    continuation.mode === "NEW_CYCLE_FORMALIZATION" &&
+    Boolean(project.activeCycleInstanceId?.trim()) &&
+    (analysis.intentClass === "actionable" ||
+      analysis.intentClass === "execution_request")
+  ) {
+    const activeId = project.activeCycleInstanceId!.trim();
+    const cycleLoad = await oa.cycleServices.getCycle.execute({
+      cycleInstanceId: activeId,
+    });
+    if (cycleLoad.ok && cycleLoad.cycle.status === "active") {
+      const qualification = qualificationFromActiveCycle({
+        cycle: cycleLoad.cycle,
+        signals: formalizationSignals,
+        analysis,
+      });
+      const readiness = assessGenericMissionPrepareReadiness(analysis);
+      const explicitPrepare = hasExplicitPrepareContractIntent(content);
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
+      // Mission qualified but no explicit prepare GO → recommend, do not Build.
+      if (!explicitPrepare) {
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
+      const prep = await prepareGenericExecutionContractDraft({
+        oa,
+        projectId: project.projectId,
+        cycleInstanceId: activeId,
+        analysis,
+        forceLocalAuthority:
+          process.env.VITEST === "true" ||
+          process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY === "1",
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
+        (analysis.objective ?? analysis.rephrasedRequest ?? "").trim() ||
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
+  }
+
   if (continuation.mode === "ACTIVE_CYCLE_CONTINUATION_BLOCKED") {
     // CR-07-05 — recognized Artifact continuation that cannot be verified:
     // BLOCK / clarify in-cycle. NEVER createCycle.
@@ -2020,6 +2171,9 @@ export async function orchestrateAssistantSend(input: {
     }

     const signals = analysis.signals;
+    // R2 / G-D4 — factual structural skip: only when critical signals are absent.
+    // Never hardcode true. Preserve challenges for structural / security /
+    // architecture / data / irreversible / contradiction.
     const structurallyResolvedActiveCycleContinuation =
       !signals?.structuralChange &&
       !signals?.securityImpact &&
@@ -2034,12 +2188,15 @@ export async function orchestrateAssistantSend(input: {
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
### execution-contract-governance.test.mjs

```diff
diff --git a/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/tests/execution-contract-governance.test.mjs b/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/tests/execution-contract-governance.test.mjs
index 74285a93..f7425e89 100644
--- a/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/tests/execution-contract-governance.test.mjs
+++ b/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/tests/execution-contract-governance.test.mjs
@@ -245,25 +245,37 @@ test("adversarial: unicode supersessionReason with real content accepted", () =>
   assert.equal(validate(data), true, JSON.stringify(validate.errors));
 });

-test("adversarial: confirmed without confirmationRef/decisionRefs rejected", () => {
+test("adversarial: confirmed without confirmationRef rejected", () => {
   const ajv = buildAjv();
   const validate = ajv.getSchema(CONTRACT_SCHEMA_ID);
   const noConf = draftBase();
   noConf.status = "confirmed";
   noConf.decisionRefs = ["dec:oa-001"];
   assert.equal(validate(noConf), false);
+});

-  const noDec = draftBase();
-  noDec.status = "confirmed";
-  noDec.confirmationRef = "cnf:x";
-  delete noDec.decisionRefs;
-  assert.equal(validate(noDec), false);
-
+test("G-D4: confirmed with confirmationRef and empty decisionRefs accepted at schema", () => {
+  const ajv = buildAjv();
+  const validate = ajv.getSchema(CONTRACT_SCHEMA_ID);
   const emptyDec = draftBase();
   emptyDec.status = "confirmed";
   emptyDec.confirmationRef = "cnf:x";
   emptyDec.decisionRefs = [];
-  assert.equal(validate(emptyDec), false);
+  assert.equal(
+    validate(emptyDec),
+    true,
+    JSON.stringify(validate.errors),
+  );
+});
+
+test("G-D4: confirmed with confirmationRef and ≥1 decisionRef still accepted", () => {
+  const ajv = buildAjv();
+  const validate = ajv.getSchema(CONTRACT_SCHEMA_ID);
+  const withDec = draftBase();
+  withDec.status = "confirmed";
+  withDec.confirmationRef = "cnf:x";
+  withDec.decisionRefs = ["dec:oa-001"];
+  assert.equal(validate(withDec), true, JSON.stringify(validate.errors));
 });

 test("adversarial: bad schemaVersion rejected", () => {
```
### index.ts (execution-contract barrel)

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


### executionMateriality.ts

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
### prepareGenericExecutionContractDraft.ts

```typescript
/**
 * G-D4 / T-A4 — generic ExecutionContract PREPARE without systematic HumanDecision.
 *
 * When a mission is sufficiently qualified and server-owned materiality is
 * non-structural, Studio may Build + Validate a generalist contract with
 * decisionRefs=[] for Pilote inspection. PREPARE ≠ EXECUTE: no Attempt.
 *
 * Confirm/Authorize remain separate Pilote acts. Empty decisionRefs at
 * confirmed require MATERIALITY:NON_STRUCTURAL stamp + recomputed non-structural
 * (T-A4 schema G-D4). Structural missions still require a real HD ref.
 *
 * Reuses BuildExecutionContract + ValidateExecutionContract + generalist surface.
 * No task catalog, no parallel engine, no synthetic HumanDecision.
 */

import { createHash, randomBytes } from "node:crypto";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalAuthorityForExecutionClass,
} from "@/lib/oa/decision";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import {
  assessExecutionMaterialityOrUnknown,
  type ExecutionMaterialityAssessment,
} from "@/lib/oa/execution-contract";
import { classifyStudioProductProtectedPath } from "@/lib/oa/sandboxContract";
import {
  PRODUCT_CANONICAL_EXECUTION_ACTION,
  PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
  PRODUCT_CANONICAL_EXECUTION_SCOPE,
  PRODUCT_CANONICAL_EXECUTION_TARGET,
} from "./w3aProductExecutionSemantics";
import type { IntentAnalysisDto } from "../f2/types";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";

export type GenericMissionPrepareReadiness = {
  readonly ready: boolean;
  readonly structuralBlocked: boolean;
  /** Blocking gaps only — never a questionnaire. */
  readonly missingFields: readonly string[];
};

/**
 * Explicit Pilote/Nora prepare-contract intent (FR natural language).
 * Actionable work alone MUST NOT systematically PREPARE an EC (Q16).
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

export function assessMaterialityForGenericPrepare(
  analysis: IntentAnalysisDto,
): ExecutionMaterialityAssessment {
  const protectedPathHits = collectProtectedPathHits(analysis);
  return assessExecutionMaterialityOrUnknown({
    productContextSufficient: true,
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
      wouldMutateStructuralProjectTruth: false,
      wouldMutateCycleOrTrajectoryTruth: false,
      authorityEnvelopeExpanded: false,
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

  const materiality = assessMaterialityForGenericPrepare(input.analysis);
  if (materiality.humanDecisionRequired) {
    return {
      ok: false,
      code: "STRUCTURAL_HUMAN_DECISION_REQUIRED",
      message:
        "Matérialité server-owned structurelle ou indéterminée — HumanDecision requise avant préparation sans refs.",
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
    protectedPathHits: collectProtectedPathHits(input.analysis),
    wouldMutateStructuralProjectTruth: false,
    wouldMutateCycleOrTrajectoryTruth: false,
    authorityEnvelopeExpanded: false,
    currentContradictionUnresolved: Boolean(
      input.analysis.contradictionCandidate?.conflictPresent,
    ),
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
      sourcesToRead: [],
      cursorDeterminesHow: true,
      prepareWithoutSystematicHumanDecision: true,
      humanDecisionCreated: false,
      executionAttemptCreated: false,
      prepareStatus: "draft_inspectable",
      materialityFacts,
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
      "Je peux préparer un contrat d'exécution générique inspectable pour cette mission.",
      "Dis-moi explicitement de préparer le contrat si tu veux que je le matérialise — préparer ≠ autoriser ≠ exécuter.",
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
    "Tu peux le consulter et me demander de l'ajuster avant d'autoriser l'exécution.",
    "Préparer ≠ autoriser ≠ exécuter. Aucune exécution n'a été lancée.",
  ].join(" ");
}
```
### authorizeGenericPreparedContract.ts

```typescript
/**
 * G-D4 — Product continuity after generic PREPARE:
 * Inspect → Confirm (when required) → Evaluate authorization.
 * STOP BEFORE ExecutionAttempt / Cursor REAL.
 *
 * Reuses existing inspect / confirmForAuthorization / evaluateExecutionAuthorization.
 * Does not invent HumanDecision. Empty decisionRefs only when MATERIALITY:NON_STRUCTURAL.
 */

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import { inspectExecutionContract } from "./inspectExecutionContract";
import { confirmExecutionContractForAuthorization } from "./confirmForAuthorization";
import { evaluateExecutionAuthorization } from "./authorizeExecutionContract";
import type {
  ContractInspectionStateDto,
  EvaluateExecutionAuthorizationResult,
} from "./types";

export type AuthorizeGenericPreparedContractInput = {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly executionContractId: string;
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

  const inspected = await inspectExecutionContract({
    oa: input.oa,
    projectId: input.projectId,
    executionContractId: input.executionContractId,
    expectedVersion: loaded.contract.version,
  });
  if (!inspected.ok) {
    return {
      ok: false,
      code: inspected.code,
      message: inspected.message,
    };
  }
  if (!inspected.inspectionSufficient) {
    return {
      ok: false,
      code: "INSPECTION_REQUIRED",
      message:
        "Inspection insuffisante — réinspecter le contrat exact avant autorisation.",
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
      message: "Contrat introuvable après inspection.",
    };
  }

  if (mid.contract.status === "confirmation_required") {
    const confirmed = await confirmExecutionContractForAuthorization({
      oa: input.oa,
      projectId: input.projectId,
      executionContractId: input.executionContractId,
      forceLocalAuthority: input.forceLocalAuthority,
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
    semanticFingerprint: inspected.semanticFingerprint,
    inspection: inspected,
    confirmationRef,
    authorization,
    executionAttemptCreated: false,
    humanDecisionCreated: false,
  };
}
```
### p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts

```typescript
/**
 * P6 G-D4/T-A4 — generic PREPARE → inspect → authorize without systematic HD.
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
  prepareGenericExecutionContractDraft,
} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import { authorizeGenericPreparedContract } from "@/features/project-assistant/w2/authorizeGenericPreparedContract";
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
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  tempProductDbPath,
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
    dbPath = tempProductDbPath("p6-gd4-ta4.sqlite");
    runtime = bootW2Runtime({ productDbPath: dbPath, idPrefix: "gd4a" });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
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

    return { projectId, cycleInstanceId };
  }

  it("Q16 — actionable alone is not explicit prepare intent", () => {
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
  });

  it("Q01/Q03/Q08/Q18 — PREPARE validates generalist EC without HD / Attempt", async () => {
    const { projectId, cycleInstanceId } = await seedActiveCycle("prep");
    const oa = runtime.oa!;
    const before = await oa.decisionServices.decisions.listByProject(projectId);

    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId,
      analysis: baseAnalysis(),
      forceLocalAuthority: true,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);

    expect(prep.humanDecisionCreated).toBe(false);
    expect(prep.executionAttemptCreated).toBe(false);
    expect(prep.materiality.materiality).toBe("non_structural");
    expect(prep.contract.decisionRefs ?? []).toEqual([]);
    expect(prep.contract.action).toBe(PRODUCT_CANONICAL_EXECUTION_ACTION);
    expect(prep.contract.requiredCapabilities).toEqual([
      PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
    ]);
    expect(prep.contract.constraints).toContain("MATERIALITY:NON_STRUCTURAL");
    // Validate after Build → confirmation_required for N2
    expect(["confirmation_required", "validated"]).toContain(
      prep.contract.status,
    );
    expect(prep.contract.status).not.toBe("draft");

    const after = await oa.decisionServices.decisions.listByProject(projectId);
    expect(after.length).toBe(before.length);
  });

  it("Q04/Q05 — structural / security materiality blocks empty-ref PREPARE", async () => {
    const { projectId, cycleInstanceId } = await seedActiveCycle("struct");
    const oa = runtime.oa!;

    const prep = await prepareGenericExecutionContractDraft({
      oa,
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

  it("Q06/Q07/Q09/Q10 — inspect → confirm → authorize without Attempt / without HD", async () => {
    const { projectId, cycleInstanceId } = await seedActiveCycle("auth");
    const oa = runtime.oa!;

    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId,
      analysis: baseAnalysis({
        objective: "Corriger le tri (#auth)",
        expectedOutcome: "Tests verts sur le tri",
      }),
      forceLocalAuthority: true,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    expect(prep.contract.status).toBe("confirmation_required");

    const decisionsBeforeAuth =
      await oa.decisionServices.decisions.listByProject(projectId);

    // Pilote explicit inspect → confirm → authorize (STOP before Attempt).
    const authorized = await authorizeGenericPreparedContract({
      oa,
      projectId,
      executionContractId: prep.contract.executionContractId,
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
    // No synthetic HD created for this authorize path
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

  it("Q14 — different scope yields distinct contract ids (no silent reuse)", async () => {
    const { projectId, cycleInstanceId } = await seedActiveCycle("idem");
    const oa = runtime.oa!;

    const a = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId,
      analysis: baseAnalysis({
        objective: "Mission idem A",
        scope: "src/a.ts",
        expectedOutcome: "A done",
        executionIntent: {
          intentKind: "other",
          scopeIn: ["src/a.ts"],
        } as IntentAnalysisDto["executionIntent"],
      }),
      forceLocalAuthority: true,
    });
    const b = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId,
      analysis: baseAnalysis({
        objective: "Mission idem A",
        scope: "src/b.ts",
        expectedOutcome: "A done",
        executionIntent: {
          intentKind: "other",
          scopeIn: ["src/b.ts"],
        } as IntentAnalysisDto["executionIntent"],
      }),
      forceLocalAuthority: true,
    });
    expect(a.ok && b.ok).toBe(true);
    if (!a.ok || !b.ok) throw new Error("prep");
    expect(a.contract.executionContractId).not.toBe(
      b.contract.executionContractId,
    );
  });

  it("Q02 — prepared contract is a durable Product entity", async () => {
    const { projectId, cycleInstanceId } = await seedActiveCycle("entity");
    const oa = runtime.oa!;
    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId,
      analysis: baseAnalysis({ objective: "Entity check mission" }),
      forceLocalAuthority: true,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    const got = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.contract.executionContractId,
    });
    expect(got.ok).toBe(true);
    if (!got.ok) throw new Error("missing");
    expect(got.contract.executionContractId).toBe(
      prep.contract.executionContractId,
    );
  });

  it("unit — readiness / materiality / prepare intent", () => {
    expect(assessGenericMissionPrepareReadiness(baseAnalysis()).ready).toBe(
      true,
    );
    expect(
      assessMaterialityForGenericPrepare(baseAnalysis()).constraintToken,
    ).toBe("MATERIALITY:NON_STRUCTURAL");
    expect(
      hasExplicitPrepareContractIntent(
        "OK prépare le contrat pour cette mission",
      ),
    ).toBe(true);
  });
});
```


---

## X. Fake / Real

DET only. Gate REAL NON CONSOMMÉ. Pas d'OpenAI/Cursor REAL.

---

## Y. Autorité / sécurité

- Aucune HD inventée.
- Aucune Confirmation forgée (grant/consume réels).
- Confirmation peut omettre decisionRef si empty refs non-structural (P2-D-03).
- Structural empty refs refusés.
- Autorité locale N2 pour DET ; Auth S1 prod hors preuve.

---

## Z–AA. Dette / réserves

1. **Source grounding / trusted launch** non branchés sur le chemin generic prepare (Q12 PARTIAL) — réutiliser resolveTrustedProductLaunchContext sous cycle suivant si Execute REAL.
2. **UI Execute CTA** → `authorizeGenericPreparedContract` non encore câblé dans TrajectorySurface (chemin Product API prêt ; wire UI à qualifier).
3. **Q11 amend → reinspect E2E** non rejoué ce cycle (primitives existantes).
4. **Auth S1** production pour prepare/authorize générique.
5. Parent F-C9-06 currentness durable différé.

Propriétaire: Morris/Delivery. Exit: Human QA e66 + gate REAL + wire UI Execute.

---

## AB. Gates restants

- Commit/push/PR/merge projet
- Human QA REAL e66
- Cursor REAL
- UI wire Execute → authorizeGeneric
- Doctrine promotion / runtime v3
- P6 GLOBAL PASS

---

## AC. Exit proof

Mission non structurelle → contrat générique Build+Validate → inspection → Confirmation réelle → Authorization déterministe **sans HumanDecision artificielle** et **sans Attempt/REAL** — prouvé DET.

---

## AD. Verdict

**P6 G-D4/T-A4 GENERIC EXECUTION AUTHORIZATION DETERMINISTIC INTEGRATION PROVEN AT TESTED SCOPE / LOCAL CANDIDATE / READY FOR CHATGPT CRITICAL REVIEW.**

---

## AE. Instruction ChatGPT

Lire le Review Handoff distant. Critical Review schéma T-A4, P2-D-01/03, matérialité server-owned, Confirmation réelle, binding, tests DET, continuité Nora. Ne pas autoriser automatiquement commit/push/PR/merge, Human QA REAL, Cursor REAL, promotion doctrine, runtime v3.

---

## AF. Git Review Index

| Path | Change |
| --- | --- |
| execution-contract.schema.json | MODIFIED (G-D4 confirmed empty refs) |
| 02-canonical-contract-mapping.md | MODIFIED |
| executionMateriality.ts | CREATED |
| confirmExecutionContract.ts | MODIFIED |
| confirmForAuthorization.ts | MODIFIED |
| prepareGenericExecutionContractDraft.ts | CREATED/EVOLVED |
| authorizeGenericPreparedContract.ts | CREATED |
| orchestrateF2.ts | MODIFIED (explicit prepare) |
| p6.gD4...d0.test.ts | CREATED |
| execution-contract-governance.test.mjs | MODIFIED |
| parent Product files | PRESERVED |
