# Review Pack FULL — STUDIO-P6-EXECUTION-INSPECTION-CLOSURE-03

| Field | Value |
| --- | --- |
| **Horodatage** | 2026-10-17 14:22:54 CEST |
| **Cycle ID** | `STUDIO-P6-EXECUTION-INSPECTION-CLOSURE-03` |
| **Parent** | `STUDIO-P6-EXECUTION-CONVERGENCE-REGULARIZATION-02` |
| **Parent handoff** | `7e768ffe9f118b1d0972a23deeb6d91d762437d7` |
| **Cycle** | 8 — Delivery / implémentation |
| **Profil** | Critical |
| **Branche** | `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` |
| **HEAD** | `b4c1d86211d372f7b0685be7ce8a5ba7de598e37` |
| **origin/main** | `896ff59c704bfa76df1da1a51705aaf948c1cf0c` |
| **Décisions Morris** | GO fermeture inspection ciblée · pas OA domain change · pas HQA/REAL/commit Product |
| **Capacité** | V3-F05 |
| **Verdict Cursor** | **INSPECTION CLOSURE COMPLETE — DETERMINISTIC PASS — VISUAL NOT PROVEN — READY FOR CHATGPT REVIEW** |

---

## 1. Local Git Truth Check

### Initial
- HEAD `b4c1d86211d372f7b0685be7ce8a5ba7de598e37` = tip distant
- origin/main `896ff59c704bfa76df1da1a51705aaf948c1cf0c`
- dirty préexistant préservé (M-HD + MATERIALITY + Delivery A+B + Regularization-02)
- staged vide
- fingerprint dirty initial: `35fd07d60e10e31d043e9a9335f69e968a4c0384b0498cd846a6a53a1d1f31fc`
- Baseline Pass 03 sous `.tmp-sfia-review/pass03-baseline/`

### Final
- HEAD / branche inchangés (aucun commit Product)
- staged Product vide
- fingerprint dirty final: `ed595b7af651fe91086e6a03afd9647ab5d5536a11c3e4411f40edf1988576b9`
- HQA non mutée

### Couches (attribution)
1. M-HD / MATERIALITY — préexistant
2. Delivery A+B — continuité G-D4 + rail Exécution
3. Regularization-02 — R1 CTA / R2 / R3 fraîcheur partielle
4. **Pass 03** — disclosure → UI → attestation ; CTX async

### Status porcelain final
```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/automaticProjectResume.ui.test.tsx
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s01.workspaceLayout.ui.test.tsx
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.durableExecutionActionContinuity.ui.test.tsx
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.objectNativeViews.ui.test.tsx
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.pilotExecutionPresentation.d0.test.ts
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s04.synthesesSurface.ui.test.tsx
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s07.journalPrincipalView.ui.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/ecRehydrationContinuity.d0.test.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ExecutionSurface.module.css
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ExecutionSurface.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/GovernedConfirmationCard.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/workspaceContextPresentation.ts
 M projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
 M projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
 M projects/sfia-studio/app/features/project-assistant/f2/ckcCognitiveContext.ts
 M projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
 M projects/sfia-studio/app/features/project-assistant/f2/types.ts
 M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
 M projects/sfia-studio/app/features/project-assistant/w2/actions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/authorizeGenericPreparedContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts
 M projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/pendingGenericPrepareOfferStore.ts
 M projects/sfia-studio/app/features/project-assistant/w2/prepareDocsWriteRecoverySuccessor.ts
 M projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
 M projects/sfia-studio/app/features/project-assistant/w2/readCurrentGovernedExecutionContinuity.ts
 M projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts
 M projects/sfia-studio/app/features/project-assistant/w2/types.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
 M projects/sfia-studio/app/lib/oa/decision/domain/invariants.ts
 M projects/sfia-studio/app/lib/oa/decision/domain/types.ts
 M projects/sfia-studio/app/lib/oa/decision/infrastructure/localSingleUserAuthority.ts
 M projects/sfia-studio/app/lib/oa/project/domain/artifactTargetRouting.ts
 M projects/sfia-studio/convergence/sfia-studio-generic-execution-review-result-architecture.md
?? projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.o1.executionWorkPresentation.d0.test.ts
?? projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.r02.actionAvailability.d0.test.ts
?? projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.r03.contextFreshness.ui.test.tsx
?? projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.r03.inspectionDisclosureClosure.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.materialityBlock01.documentaryPrepare.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.inspectionBindingSelect.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.authorityContinuityCorrection.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.ecHdEffectsBinding.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.finalAuthorityBinding.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.genericMissionHumanDecision.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.mHd02.missionIdentityContinuitySession.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.mHd02.pilotPresentationRecordBinding.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.mHd02.sessionBoundaryNormalReplayLps.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.o1.continuityGd4EmptyRefs.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.projectScopedCursorSelection.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.r03.inspectionContinuityAttestation.d0.test.ts
?? projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/GovernedGenericMissionDecisionCard.tsx
?? projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/genericMissionPresentation.ts
?? projects/sfia-studio/app/features/project-assistant/w2/genericMissionDecisionApplicability.ts
?? projects/sfia-studio/app/features/project-assistant/w2/genericMissionDecisionContinuity.ts
?? projects/sfia-studio/app/features/project-assistant/w2/genericMissionSubject.ts
?? projects/sfia-studio/app/features/project-assistant/w2/recordGenericMissionHumanDecision.ts
?? projects/sfia-studio/app/features/project-assistant/w2/resolveGenericPrepareDocumentaryTarget.ts
?? projects/sfia-studio/app/features/project-assistant/w2/verifyGenericMissionHumanDecisionForPrepare.ts
```

---

## 2. Sources / Phase 1 — Contract Impact

Lus : `inspectionDisclosure.ts`, `recordContractInspection.ts`, `inspectExecutionContract.ts`, continuity W2, ExecutionSurface, GovernedConfirmationCard, useProductConversation, TrajectorySurface.

### Matrice fact → disclosure → UI → attestation (ExecutionSurface)

| Fact ID | Champ durable | Disclosure | UI (panneau) | Attestation |
| --- | --- | --- | --- | --- |
| action | contract.action | action | Action | si rendu |
| target | contract.target | technicalTarget | Cible technique | si rendu |
| scope | contract.scope | scope | Portée | si rendu |
| requiredAuthority | contract.requiredAuthority | requiredAuthority | Autorité requise | si rendu |
| requiredCapabilities | contract.requiredCapabilities | requiredCapabilities | Capacités | si rendu (ou « aucune ») |
| constraints | contract.constraints | constraints | Contraintes | si rendu |
| stopConditions | contract.stopConditions | stopConditions | Conditions d’arrêt | si rendu |
| reversibility | contract.reversibility | reversibility | Réversibilité | si rendu |
| evidenceRequirements | contract.evidenceRequirements | evidenceRequirements | Preuves exigées | si rendu |
| semanticFingerprint | contract.semanticFingerprint | semanticFingerprint | Empreinte | si rendu |
| inputs.targetRepositoryRef | inputs.* | targetRepositoryRef | Dépôt cible | si présent |
| inputs.targetPath | inputs.targetPath | targetPath | Chemin cible | si présent |
| inputs.scopeIn/Out | inputs | scopeIn/Out | Périmètre | si présent |
| inputs.createOrModify / noDelete | inputs | booleans | oui/non | si non-null |
| inputs.contentRequirements / validationExpectations | inputs | arrays | listes | si présent |
| expectedOutputs | contract/inputs | expectedOutputs | Sorties | si présent |
| inputs.sourceGrounding | inputs.sourceGrounding | sourceGrounding | JSON | si présent |
| inputs.acceptanceCriteria | inputs.acceptanceCriteria | acceptanceCriteria | critères | si présent |
| inputs.validationPlan | inputs.validationPlan | validationPlan | plan | si présent |
| inputs.reportRequirements | inputs.reportRequirements | reportRequirements | exigences | si présent |

Source des IDs requis : `requiredInspectedFactsForContract` (domaine) transporté en DTO `requiredInspectedFacts`.
Rendu : `buildInspectionFactRowsFromDisclosure` — **aucune liste parallèle hardcodée dans handleAttest**.

### Consommateurs inspection

| Surface | Appel | inspectedFacts | Affichage | Verdict Pass 03 |
| --- | --- | --- | --- | --- |
| ExecutionSurface | w2Inspect… | presentedFactIds après panneau | panneau complet | **CLOSED** |
| Conversation (GovernedConfirmationCard) | w2Inspect sans facts | défaut serveur requiredFacts | scope/impact/réversibilité partiels | **GAP — Morris gate** |
| TrajectorySurface | w2Inspect sans facts | défaut serveur | détail Trajectory | **GAP — Morris gate** |

INS19 : contournement Conversation/Trajectory **déclaré explicitement** — correction hors fichiers autorisés (hooks / Trajectory / OA). Pas de claim « globalement sûr ».

---

## 3. Correction Product (Pass 03)

### W2 (conditionnel)
- `types.ts` : `requiredInspectedFacts: readonly string[] | null` sur active
- `readCurrentGovernedExecutionContinuity.ts` : remplit via `requiredInspectedFactsForContract`

### UI
- `pilotExecutionPresentation.ts` : `buildInspectionFactRowsFromDisclosure` ; CTA « Examiner le contrat »
- `ExecutionSurface.tsx` : panneau I07 (open sans write) + I06 attest explicite ; Confirm/Execute inchangés (pas d’inspect implicite)
- `ExecutionSurface.module.css` : styles liste inspection

### Invariants OA
Inchangés. `inspectExecutionContract` / `recordContractInspection` non modifiés.

---

## 4. Tests (70 PASS — 11 files)

- p6.r03.inspectionDisclosureClosure (4) — INS01/02/04–07/20
- p6.r03.inspectionContinuityAttestation (2) — INS09/10/13/16/18
- p6.r03.contextFreshness.ui (3) — CTX01/02/05/06
- durableExecutionActionContinuity (7) — open≠write ; attest facts
- pilotExecutionPresentation / r02 / o1 work / continuityGd4 / gD4 / ecInspection / workspaceLayout

### Couverture INS / CTX

| ID | Statut |
| --- | --- |
| INS01–02, INS04–07, INS09–10, INS13, INS16, INS18, INS20 | PASS |
| INS03 | couvert via INS01 conditionnels |
| INS08 | PASS (open panel / row build sans write) |
| INS11–12 | préservés Regularization-02 / amend path (non rejoués ici) |
| INS14 | logique Execute refuse sans inspection (Pass 02) — non re-UI ce cycle |
| INS15 | domaine superseded refuse record — OA KEEP |
| INS17 | HD-bound non réécrit |
| INS19 | **GAP déclaré** Conversation/Trajectory |
| CTX01,02,05,06 | PASS |
| CTX03,04,07,08 | partiels / non exercés séparément (déclarés) |

---

## 5. Fake/Real / Visual

- DETERMINISTIC PRODUCT INTEGRATION PROVEN (périmètre Exécution + W2)
- VISUAL NOT PROVEN (`/login?NO_SESSION`)
- Pas de Cursor REAL / HD / Attempt artificiels / HQA write

---

## 6. Réserves / Gates Morris

| Gate | |
| --- | --- |
| D-CONV-TRAJ-INSPECT | Exiger inspectedFacts + disclosure complète Conversation/Trajectory |
| D-VISUAL | Session authentifiée |
| D-HQA / D-COMMIT / D-REAL | inchangés — interdits ici |

---

## 7. Diffs Pass 03 (vs baseline pré-Pass03)

### `types.ts.diff`

```diff
--- .tmp-sfia-review/pass03-baseline/projects_sfia-studio_app_features_project-assistant_w2_types.ts	2026-10-17 14:19:15
+++ projects/sfia-studio/app/features/project-assistant/w2/types.ts	2026-10-17 14:19:36
@@ -299,6 +299,12 @@
       readonly decisionRef: string | null;
       readonly contract: CurrentGovernedExecutionContinuityContractDto;
       readonly inspection: ContractInspectionStateDto;
+      /**
+       * Canonical required fact IDs from `requiredInspectedFactsForContract`
+       * (read-only transport). Null when disclosure is incomplete — attestation
+       * must refuse. Never invent UI-local required lists.
+       */
+      readonly requiredInspectedFacts: readonly string[] | null;
     }
   | W2Failure;
```

### `readCurrentGovernedExecutionContinuity.ts.diff`

```diff
--- .tmp-sfia-review/pass03-baseline/projects_sfia-studio_app_features_project-assistant_w2_readCurrentGovernedExecutionContinuity.ts	2026-10-17 14:19:15
+++ projects/sfia-studio/app/features/project-assistant/w2/readCurrentGovernedExecutionContinuity.ts	2026-10-17 14:19:41
@@ -16,6 +16,7 @@
   assertDecisionRefsAdmissibleForConfirm,
   materialityFromContractConstraints,
   projectExecutionContractInspectionDisclosure,
+  requiredInspectedFactsForContract,
 } from "@/lib/oa/execution-contract";
 import { readContractInspectionState } from "./inspectExecutionContract";
 import {
@@ -409,11 +410,17 @@
     grantsAuthority: false,
   };

+  const requiredFacts = requiredInspectedFactsForContract(candidate);
+  const requiredInspectedFacts = Array.isArray(requiredFacts)
+    ? requiredFacts
+    : null;
+
   return {
     ok: true,
     kind: "active",
     decisionRef: lineage.decisionRef,
     contract: projected.contract,
     inspection: inspectionDto,
+    requiredInspectedFacts,
   };
 }
```

### `pilotExecutionPresentation.ts.diff`

```diff
--- .tmp-sfia-review/pass03-baseline/projects_sfia-studio_app_features_pre-m6-product-ui_surfaces_pilotExecutionPresentation.ts	2026-10-17 14:19:15
+++ projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation.ts	2026-10-17 14:19:56
@@ -11,11 +11,155 @@
   GovernedExecutionContinuityStage,
 } from "@/features/project-assistant/w2/deriveGovernedExecutionContinuityProjection";
 import type { CurrentGovernedExecutionContinuityResult } from "@/features/project-assistant/w2/types";
+import type { ExecutionContractInspectionDisclosure } from "@/lib/oa/execution-contract";
 import {
   presentPilotContract,
   type PilotContractPresentation,
 } from "./pilotContractPresentation";
+
+/** One fact row rendered from canonical disclosure for Pilot examination. */
+export type InspectionFactRow = {
+  readonly factId: string;
+  readonly label: string;
+  readonly value: string;
+};
+
+function formatList(values: readonly string[] | null | undefined): string | null {
+  if (!values || values.length === 0) return null;
+  return values.join(" · ");
+}
+
+/**
+ * Map required fact IDs → display rows from the allowlisted disclosure only.
+ * Does not invent values. Missing required facts are listed separately — the
+ * UI must refuse attestation when any required fact cannot be rendered.
+ */
+export function buildInspectionFactRowsFromDisclosure(input: {
+  readonly disclosure: ExecutionContractInspectionDisclosure;
+  readonly requiredInspectedFacts: readonly string[];
+}): {
+  readonly rows: readonly InspectionFactRow[];
+  readonly missingRequired: readonly string[];
+  readonly presentedFactIds: readonly string[];
+} {
+  const d = input.disclosure;
+  const valueByFact = new Map<string, { label: string; value: string }>();
+
+  const put = (factId: string, label: string, value: string | null | undefined) => {
+    if (value == null) return;
+    const trimmed = String(value).trim();
+    if (!trimmed) return;
+    valueByFact.set(factId, { label, value: trimmed });
+  };
+
+  put("action", "Action", d.action);
+  put("target", "Cible technique", d.technicalTarget);
+  put("scope", "Portée", d.scope);
+  put("requiredAuthority", "Autorité requise", d.requiredAuthority);
+  put(
+    "requiredCapabilities",
+    "Capacités requises",
+    formatList(d.requiredCapabilities) ?? "(aucune)",
+  );
+  put(
+    "constraints",
+    "Contraintes",
+    formatList(d.constraints) ?? "(aucune)",
+  );
+  put(
+    "stopConditions",
+    "Conditions d’arrêt",
+    formatList(d.stopConditions) ?? "(aucune)",
+  );
+  put("reversibility", "Réversibilité", d.reversibility);
+  put(
+    "evidenceRequirements",
+    "Preuves exigées",
+    formatList(d.evidenceRequirements) ?? "(aucune)",
+  );
+  put(
+    "semanticFingerprint",
+    "Empreinte sémantique",
+    d.semanticFingerprint,
+  );
+  put(
+    "inputs.targetRepositoryRef",
+    "Dépôt cible",
+    d.targetRepositoryRef,
+  );
+  put("inputs.targetPath", "Chemin cible", d.targetPath);
+  put("inputs.scopeIn", "Périmètre inclus", formatList(d.scopeIn));
+  put("inputs.scopeOut", "Périmètre exclu", formatList(d.scopeOut));
+  if (d.createOrModify !== null && d.createOrModify !== undefined) {
+    put(
+      "inputs.createOrModify",
+      "Création / modification",
+      d.createOrModify ? "oui" : "non",
+    );
+  }
+  if (d.noDelete !== null && d.noDelete !== undefined) {
+    put("inputs.noDelete", "Sans suppression", d.noDelete ? "oui" : "non");
+  }
+  put(
+    "inputs.contentRequirements",
+    "Exigences de contenu",
+    formatList(d.contentRequirements),
+  );
+  put(
+    "inputs.validationExpectations",
+    "Attentes de validation",
+    formatList(d.validationExpectations),
+  );
+  put("expectedOutputs", "Sorties attendues", formatList(d.expectedOutputs));
+  if (d.sourceGrounding) {
+    put(
+      "inputs.sourceGrounding",
+      "Ancrage des sources",
+      JSON.stringify(d.sourceGrounding),
+    );
+  }
+  if (d.acceptanceCriteria && d.acceptanceCriteria.length > 0) {
+    put(
+      "inputs.acceptanceCriteria",
+      "Critères d’acceptation",
+      d.acceptanceCriteria
+        .map((c) => `${c.criterionId}: ${c.statement} (${c.kind})`)
+        .join(" · "),
+    );
+  }
+  if (d.validationPlan) {
+    put(
+      "inputs.validationPlan",
+      "Plan de validation",
+      formatList(d.validationPlan),
+    );
+  }
+  if (d.reportRequirements) {
+    put(
+      "inputs.reportRequirements",
+      "Exigences de rapport",
+      formatList(d.reportRequirements),
+    );
+  }

+  const rows: InspectionFactRow[] = [];
+  const missingRequired: string[] = [];
+  for (const factId of input.requiredInspectedFacts) {
+    const found = valueByFact.get(factId);
+    if (!found) {
+      missingRequired.push(factId);
+      continue;
+    }
+    rows.push({ factId, label: found.label, value: found.value });
+  }
+
+  return {
+    rows,
+    missingRequired,
+    presentedFactIds: rows.map((r) => r.factId),
+  };
+}
+
 /** P3 Pilot-facing execution statuses — never expose internal stage codes. */
 export type PilotExecutionStatus =
   | "a_confirmer"
@@ -494,19 +638,19 @@
     } else if (needsConfirm && !inspectionSufficient) {
       cta = {
         kind: "inspect",
-        label: "Inspecter pour confirmer",
+        label: "Examiner le contrat",
         enabled: !busy,
       };
       attentionNote =
-        "Inspection suffisante requise avant confirmation. Confirmer n’atteste pas l’inspection.";
+        "Examen des faits contractuels requis avant confirmation. Ouvrir le détail n’enregistre aucune attestation.";
     } else if (needsConfirm && inspectionSufficient && !inspectionAlignedWithContract) {
       cta = {
         kind: "inspect",
-        label: "Réinspecter le contrat",
+        label: "Réexaminer le contrat",
         enabled: !busy,
       };
       attentionNote =
-        "Version ou empreinte modifiée — réinspection requise avant confirmation.";
+        "Version ou empreinte modifiée — réexamen requis avant confirmation.";
     } else if (needsConfirm) {
       cta = {
         kind: "confirm",
@@ -518,7 +662,7 @@
     } else if (!inspectionSufficient || !inspectionAlignedWithContract) {
       cta = {
         kind: "inspect",
-        label: "Inspecter le contrat",
+        label: "Examiner le contrat",
         enabled: !busy,
       };
       attentionNote = !inspectionAlignedWithContract
```

### `ExecutionSurface.tsx.diff`

```diff
--- .tmp-sfia-review/pass03-baseline/projects_sfia-studio_app_features_pre-m6-product-ui_surfaces_ExecutionSurface.tsx	2026-10-17 14:19:15
+++ projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ExecutionSurface.tsx	2026-10-17 14:20:24
@@ -17,6 +17,7 @@
 } from "@/features/project-assistant/w2/reconcileContinuePolicy";
 import type { CurrentGovernedExecutionContinuityResult } from "@/features/project-assistant/w2/types";
 import {
+  buildInspectionFactRowsFromDisclosure,
   presentPilotExecution,
   type PilotExecutionPresentation,
 } from "./pilotExecutionPresentation";
@@ -56,6 +57,8 @@
   const [preExec, setPreExec] =
     useState<CurrentGovernedExecutionContinuityResult | null>(null);
   const [expandedWork, setExpandedWork] = useState(false);
+  /** I07 — opening the panel never writes an attestation. */
+  const [inspectionPanelOpen, setInspectionPanelOpen] = useState(false);
   const [loading, setLoading] = useState(true);
   const [busy, setBusy] = useState(false);
   const [error, setError] = useState<string | null>(null);
@@ -209,6 +212,10 @@
     };
   }, [clearContinueTimer]);

+  useEffect(() => {
+    setInspectionPanelOpen(false);
+  }, [projectId]);
+
   // Initial durable load + remount auto-resume.
   useEffect(() => {
     let cancelled = false;
@@ -282,59 +289,87 @@
     };
   }, [preExec]);

-  /**
-   * Explicit Inspect — attests facts already disclosed on the active contract.
-   * Confirm / Execute must never call this path as a side effect.
-   */
-  const handleInspect = useCallback(async () => {
-    const target = resolveActivePreContract();
-    if (!target) {
-      setError(
-        "Continuité pré-exécution indisponible — inspection refusée.",
-      );
-      return;
-    }
+  const inspectionView = useMemo(() => {
     if (
       !preExec ||
       !preExec.ok ||
       preExec.kind !== "active" ||
       !preExec.contract.inspectionDisclosure
     ) {
+      return null;
+    }
+    const required = preExec.requiredInspectedFacts;
+    if (required == null) {
+      return {
+        rows: [] as const,
+        missingRequired: ["INSPECTION_DISCLOSURE_INCOMPLETE"] as const,
+        presentedFactIds: [] as const,
+        disclosureIncomplete: true as const,
+      };
+    }
+    return {
+      ...buildInspectionFactRowsFromDisclosure({
+        disclosure: preExec.contract.inspectionDisclosure,
+        requiredInspectedFacts: required,
+      }),
+      disclosureIncomplete: false as const,
+    };
+  }, [preExec]);
+
+  /** I07 — open detail only; no Product write. */
+  const handleOpenInspection = useCallback(() => {
+    const target = resolveActivePreContract();
+    if (!target) {
       setError(
-        "Faits contractuels non affichés — inspection refusée jusqu’à relecture.",
+        "Continuité pré-exécution indisponible — examen refusé.",
       );
       return;
     }
-    const d = preExec.contract.inspectionDisclosure;
-    const inspectedFacts: string[] = [
-      "action",
-      "target",
-      "scope",
-      "requiredAuthority",
-      "requiredCapabilities",
-      "constraints",
-      "stopConditions",
-      "reversibility",
-      "evidenceRequirements",
-      "semanticFingerprint",
-    ];
-    if (d.targetRepositoryRef) inspectedFacts.push("inputs.targetRepositoryRef");
-    if (d.targetPath) inspectedFacts.push("inputs.targetPath");
-    if (d.scopeIn) inspectedFacts.push("inputs.scopeIn");
-    if (d.scopeOut) inspectedFacts.push("inputs.scopeOut");
-    if (d.createOrModify !== null && d.createOrModify !== undefined) {
-      inspectedFacts.push("inputs.createOrModify");
+    if (!inspectionView || inspectionView.disclosureIncomplete) {
+      setError(
+        "Disclosure d’inspection incomplète — examen impossible.",
+      );
+      return;
     }
-    if (d.noDelete !== null && d.noDelete !== undefined) {
-      inspectedFacts.push("inputs.noDelete");
+    setError(null);
+    setInspectionPanelOpen(true);
+  }, [resolveActivePreContract, inspectionView]);
+
+  /**
+   * I06/I08 — explicit attestation after facts are presented.
+   * Attests only presentedFactIds from the rendered disclosure rows.
+   * Confirm / Execute must never call this path.
+   */
+  const handleAttestInspection = useCallback(async () => {
+    const target = resolveActivePreContract();
+    if (!target) {
+      setError(
+        "Continuité pré-exécution indisponible — attestation refusée.",
+      );
+      return;
     }
-    if (d.contentRequirements) inspectedFacts.push("inputs.contentRequirements");
-    if (d.validationExpectations) {
-      inspectedFacts.push("inputs.validationExpectations");
+    if (!inspectionPanelOpen) {
+      setError(
+        "Les faits contractuels doivent être affichés avant attestation.",
+      );
+      return;
     }
-    if (d.expectedOutputs && d.expectedOutputs.length > 0) {
-      inspectedFacts.push("expectedOutputs");
+    if (!inspectionView || inspectionView.disclosureIncomplete) {
+      setError(
+        "Disclosure d’inspection incomplète — attestation refusée.",
+      );
+      return;
     }
+    if (inspectionView.missingRequired.length > 0) {
+      setError(
+        `Faits obligatoires non restituables (${inspectionView.missingRequired.join(", ")}) — attestation refusée.`,
+      );
+      return;
+    }
+    if (inspectionView.presentedFactIds.length === 0) {
+      setError("Aucun fait contractuel présenté — attestation refusée.");
+      return;
+    }

     setBusy(true);
     setError(null);
@@ -343,7 +378,7 @@
         projectId,
         executionContractId: target.executionContractId,
         expectedVersion: target.expectedVersion,
-        inspectedFacts,
+        inspectedFacts: inspectionView.presentedFactIds,
       });
       if (!inspected.ok) {
         setError(inspected.message);
@@ -354,6 +389,8 @@
         setError(
           "Inspection insuffisante — faits attestés incomplets pour cette version.",
         );
+      } else {
+        setInspectionPanelOpen(false);
       }
       await refreshExecutionContinuity();
       onDurableFactsChanged?.();
@@ -362,7 +399,8 @@
     }
   }, [
     projectId,
-    preExec,
+    inspectionPanelOpen,
+    inspectionView,
     resolveActivePreContract,
     refreshExecutionContinuity,
     onDurableFactsChanged,
@@ -660,9 +698,65 @@
               <li key={item.id} className={styles.evidenceItem}>
                 <span className={styles.evidenceLabel}>{item.label}</span>
                 <span className={styles.evidenceState}>{item.stateLabel}</span>
+              </li>
+            ))}
+          </ul>
+        </section>
+      ) : null}
+
+      {inspectionPanelOpen && inspectionView && !inspectionView.disclosureIncomplete ? (
+        <section
+          className={styles.section}
+          aria-labelledby="execution-inspection-title"
+          data-testid="project-execution-inspection-panel"
+        >
+          <h3 className={styles.sectionTitle} id="execution-inspection-title">
+            Faits contractuels à examiner
+          </h3>
+          <p className={styles.empty}>
+            Ces faits proviennent de la disclosure durable. L’ouverture de ce
+            panneau n’enregistre aucune attestation.
+          </p>
+          {inspectionView.missingRequired.length > 0 ? (
+            <p
+              className={styles.attention}
+              data-testid="project-execution-inspection-missing"
+              role="alert"
+            >
+              Faits obligatoires non restituables :{" "}
+              {inspectionView.missingRequired.join(", ")}
+            </p>
+          ) : null}
+          <ul className={styles.inspectionList}>
+            {inspectionView.rows.map((row) => (
+              <li
+                key={row.factId}
+                className={styles.inspectionItem}
+                data-testid={`project-execution-inspection-fact-${row.factId}`}
+                data-fact-id={row.factId}
+              >
+                <span className={styles.inspectionLabel}>{row.label}</span>
+                <span className={styles.inspectionValue}>{row.value}</span>
               </li>
             ))}
           </ul>
+          <button
+            type="button"
+            className={styles.primaryButton}
+            data-testid="project-execution-attest"
+            disabled={
+              busy ||
+              inspectionView.missingRequired.length > 0 ||
+              inspectionView.presentedFactIds.length === 0
+            }
+            aria-label="Attester l’examen des faits affichés"
+            title="Atteste uniquement les faits affichés ci-dessus pour cette version."
+            onClick={() => {
+              void handleAttestInspection();
+            }}
+          >
+            {busy ? "Attestation…" : "Attester l’examen"}
+          </button>
         </section>
       ) : null}

@@ -688,13 +782,13 @@
             aria-label={presentation.cta.label}
             title={
               presentation.attentionNote ??
-              "Inspection explicite requise avant confirmation ou exécution."
+              "Ouvre le détail inspectable — n’enregistre aucune attestation."
             }
             onClick={() => {
-              void handleInspect();
+              handleOpenInspection();
             }}
           >
-            {busy ? "Inspection…" : presentation.cta.label}
+            {presentation.cta.label}
           </button>
         ) : null}
         {presentation.cta.kind === "confirm" ? (
```

### `ExecutionSurface.module.css.diff`

```diff
--- .tmp-sfia-review/pass03-baseline/projects_sfia-studio_app_features_pre-m6-product-ui_surfaces_ExecutionSurface.module.css	2026-10-17 14:19:15
+++ projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ExecutionSurface.module.css	2026-10-17 14:20:23
@@ -268,8 +268,40 @@
   font-size: 0.8125rem;
   color: var(--pm6-muted);
   line-height: 1.45;
+}
+
+.inspectionList {
+  margin: 0;
+  padding: 0;
+  list-style: none;
+  display: flex;
+  flex-direction: column;
+  gap: 8px;
+}
+
+.inspectionItem {
+  display: flex;
+  flex-direction: column;
+  gap: 2px;
+  padding: 8px 0;
+  border-top: 1px solid var(--pm6-border);
 }

+.inspectionLabel {
+  font-size: 0.6875rem;
+  font-weight: 600;
+  color: var(--pm6-muted);
+  text-transform: uppercase;
+  letter-spacing: 0.03em;
+}
+
+.inspectionValue {
+  font-size: 0.8125rem;
+  color: var(--pm6-ink);
+  line-height: 1.4;
+  word-break: break-word;
+}
+
 @media (max-width: 767px) {
   .root {
     gap: 12px;
```

### Nouveau test — `p6.r03.inspectionDisclosureClosure.d0.test.ts`

```typescript
/**
 * STUDIO-P6-EXECUTION-INSPECTION-CLOSURE-03
 * Disclosure → presented rows → attestable facts (ZERO REAL).
 */
import { describe, expect, it } from "vitest";
import type { ExecutionContractInspectionDisclosure } from "@/lib/oa/execution-contract";
import { buildInspectionFactRowsFromDisclosure } from "@/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation";

function baseDisclosure(
  overrides: Partial<ExecutionContractInspectionDisclosure> = {},
): ExecutionContractInspectionDisclosure {
  return {
    action: "cursor.docs_write.apply",
    technicalTarget: "workspace.isolated.docs_write",
    scope: "studio.gcec.docs_write",
    targetRepositoryRef: "acme/demo",
    targetPath: "projects/demo/note.md",
    scopeIn: ["projects/demo"],
    scopeOut: null,
    createOrModify: true,
    noDelete: true,
    objective: "Note",
    artifactType: null,
    artifactBrief: null,
    contentRequirements: ["section A"],
    validationExpectations: null,
    expectedOutputs: ["projects/demo/note.md"],
    sourceGrounding: null,
    acceptanceCriteria: null,
    validationPlan: null,
    reportRequirements: null,
    evidenceRequirements: ["file_evidence"],
    requiredAuthority: "N2",
    requiredCapabilities: ["cursor.docs_write"],
    constraints: ["MATERIALITY:NON_STRUCTURAL"],
    stopConditions: ["STOP"],
    reversibility: "reversible",
    contractVersion: 1,
    executionContractId: "xct:1",
    semanticFingerprint: "fp-abc",
    disclosureComplete: true,
    incompletenessCode: null,
    ...overrides,
  };
}

describe("P6 R03 — inspection disclosure closure (presenter)", () => {
  it("INS01 — required facts with values are all rendered", () => {
    const required = [
      "action",
      "target",
      "scope",
      "requiredAuthority",
      "requiredCapabilities",
      "constraints",
      "stopConditions",
      "reversibility",
      "evidenceRequirements",
      "semanticFingerprint",
      "inputs.targetRepositoryRef",
      "inputs.targetPath",
      "inputs.scopeIn",
      "inputs.createOrModify",
      "inputs.noDelete",
      "inputs.contentRequirements",
      "expectedOutputs",
    ];
    const result = buildInspectionFactRowsFromDisclosure({
      disclosure: baseDisclosure(),
      requiredInspectedFacts: required,
    });
    expect(result.missingRequired).toEqual([]);
    expect(result.presentedFactIds).toEqual(required);
    expect(
      result.rows.find((r) => r.factId === "inputs.targetPath")?.value,
    ).toContain("note.md");
  });

  it("INS02 — missing required fact → not attestable", () => {
    const result = buildInspectionFactRowsFromDisclosure({
      disclosure: baseDisclosure({ targetPath: null }),
      requiredInspectedFacts: ["action", "inputs.targetPath"],
    });
    expect(result.missingRequired).toContain("inputs.targetPath");
    expect(result.presentedFactIds).not.toContain("inputs.targetPath");
  });

  it("INS04–INS07 — mission facts only when present in disclosure", () => {
    const withMission = buildInspectionFactRowsFromDisclosure({
      disclosure: baseDisclosure({
        sourceGrounding: {
          version: 1,
          honesty: "READ_GROUNDED",
          repositoryIdentity: "acme/demo",
          repositoryHeadSha: "abc123",
          cycleInstanceId: "cyc:1",
          declaredRepositorySources: ["projects/demo/a.md"],
          readRefs: [],
          unreadRequiredSources: [],
          searchIsNotRead: true,
          reconstructibleFrom: "durable_cycle_read_coverage",
        },
        acceptanceCriteria: [
          {
            criterionId: "c1",
            statement: "Artifact at path",
            kind: "artifact_at_path",
            expectedOutputRef: null,
            targetPath: "projects/demo/note.md",
          },
        ],
        validationPlan: ["run checks"],
        reportRequirements: ["summary"],
      }),
      requiredInspectedFacts: [
        "action",
        "inputs.sourceGrounding",
        "inputs.acceptanceCriteria",
        "inputs.validationPlan",
        "inputs.reportRequirements",
      ],
    });
    expect(withMission.missingRequired).toEqual([]);
    expect(withMission.presentedFactIds).toEqual(
      expect.arrayContaining([
        "inputs.sourceGrounding",
        "inputs.acceptanceCriteria",
        "inputs.validationPlan",
        "inputs.reportRequirements",
      ]),
    );

    const without = buildInspectionFactRowsFromDisclosure({
      disclosure: baseDisclosure(),
      requiredInspectedFacts: ["action", "inputs.sourceGrounding"],
    });
    expect(without.missingRequired).toContain("inputs.sourceGrounding");
  });

  it("INS20 — presented IDs equal rendered rows (no parallel invent)", () => {
    const required = ["action", "scope", "inputs.targetPath"];
    const result = buildInspectionFactRowsFromDisclosure({
      disclosure: baseDisclosure(),
      requiredInspectedFacts: required,
    });
    expect(result.rows.map((r) => r.factId)).toEqual(result.presentedFactIds);
    expect(result.presentedFactIds.every((id) => required.includes(id))).toBe(
      true,
    );
  });
});
```

### Nouveau test — `p6.r03.inspectionContinuityAttestation.d0.test.ts`

```typescript
/**
 * STUDIO-P6-EXECUTION-INSPECTION-CLOSURE-03
 * Durable contract → W2 requiredInspectedFacts → inspect → confirm refuse/pass.
 *
 * Deterministic — ZERO Cursor REAL — ZERO HQA mutation.
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
import { prepareGenericExecutionContractDraft } from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import { readCurrentGovernedExecutionContinuity } from "@/features/project-assistant/w2/readCurrentGovernedExecutionContinuity";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
import { resetPendingGenericPrepareOfferStoreForTests } from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
import { buildInspectionFactRowsFromDisclosure } from "@/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation";
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

describe("P6 R03 — inspection continuity attestation", () => {
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
    dbPath = tempProductDbPath("p6-r03-insp.sqlite");
    runtime = bootW2Runtime({ productDbPath: dbPath, idPrefix: "r03i" });
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
      name: `R03 Insp ${suffix}`,
      objective: "Inspection disclosure closure",
      context: "active cycle + generic prepare",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `R03${suffix.toUpperCase().slice(0, 5)}`,
      idempotencyKey: `idem:r03i-${suffix}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("createProject");
    const projectId = created.project.projectId;

    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps0.ok) throw new Error("lps0");

    await oa.cycleServices.createInitialTrajectory.execute({
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

    const cycleInstanceId = `cyc:r03i-${suffix}`;
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
    expect(auth.ok).toBe(true);
    if (!auth.ok) throw new Error("auth");

    const lps1 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps1.ok) throw new Error("lps1");

    await oa.cycleServices.pilotLifecycle.start({
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

    if (oa.projectServices.setProjectRepositoryBinding) {
      const identity = `acme/r03i-${suffix}`;
      await oa.projectServices.setProjectRepositoryBinding.execute({
        projectId,
        actor: LOCAL_PILOTE_ACTOR,
        binding: {
          provider: "github",
          identity,
          remoteUrl: `https://github.com/${identity}.git`,
          defaultBranch: "main",
          pathRoot: "projects/demo",
        },
      });
      ensureManagedRepoCloneSkeleton({
        managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
        identity,
      });
    }

    return { projectId, cycleInstanceId };
  }

  it("INS09/INS13/INS16/INS18 — G-D4 required facts from W2; confirm refuses before attest; inspect writes only on attest", async () => {
    const { projectId, cycleInstanceId } = await seedActiveCycle("a");
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

    const beforeHd = await oa.decisionServices.decisions.listByProject(projectId);
    const inspBefore =
      await oa.executionContractServices.inspectionAttestations.listByContract(
        prep.contract.executionContractId,
      );

    const continuity = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId,
    });
    expect(continuity.ok).toBe(true);
    if (!continuity.ok || continuity.kind !== "active") {
      throw new Error("expected active");
    }
    expect(continuity.decisionRef).toBeNull();
    expect(continuity.requiredInspectedFacts).not.toBeNull();
    expect(continuity.requiredInspectedFacts!.length).toBeGreaterThan(0);
    expect(continuity.inspection.inspectionSufficient).toBe(false);

    // Opening a view = presentation only (no write) — simulated by row build.
    const rows = buildInspectionFactRowsFromDisclosure({
      disclosure: continuity.contract.inspectionDisclosure,
      requiredInspectedFacts: continuity.requiredInspectedFacts!,
    });
    expect(rows.missingRequired).toEqual([]);
    const inspMid =
      await oa.executionContractServices.inspectionAttestations.listByContract(
        prep.contract.executionContractId,
      );
    expect(inspMid.length).toBe(inspBefore.length);

    const refused = await confirmExecutionContractForAuthorization({
      oa,
      projectId,
      executionContractId: prep.contract.executionContractId,
      forceLocalAuthority: true,
    });
    expect(refused.ok).toBe(false);

    const inspected = await inspectExecutionContract({
      oa,
      projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
      inspectedFacts: rows.presentedFactIds,
    });
    expect(inspected.ok).toBe(true);
    if (!inspected.ok) throw new Error(inspected.message);
    expect(inspected.inspectionSufficient).toBe(true);

    const inspAfter =
      await oa.executionContractServices.inspectionAttestations.listByContract(
        prep.contract.executionContractId,
      );
    expect(inspAfter.length).toBe(inspBefore.length + 1);
    expect([...inspAfter[inspAfter.length - 1]!.inspectedFacts]).toEqual(
      [...rows.presentedFactIds],
    );

    const afterHd = await oa.decisionServices.decisions.listByProject(projectId);
    expect(afterHd.length).toBe(beforeHd.length);
    const attempts = await oa.executionAttemptServices!.listExecutionAttempts.execute(
      { executionContractId: prep.contract.executionContractId },
    );
    expect(attempts.ok).toBe(true);
    if (attempts.ok) expect(attempts.attempts).toEqual([]);
  });

  it("INS10 — incomplete attested facts → inspectionSufficient false", async () => {
    const { projectId, cycleInstanceId } = await seedActiveCycle("b");
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

    const continuity = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId,
    });
    if (!continuity.ok || continuity.kind !== "active") {
      throw new Error("expected active");
    }
    expect(continuity.requiredInspectedFacts).not.toBeNull();

    const inspected = await inspectExecutionContract({
      oa,
      projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
      inspectedFacts: ["action", "scope"],
    });
    expect(inspected.ok).toBe(true);
    if (!inspected.ok) throw new Error(inspected.message);
    expect(inspected.inspectionSufficient).toBe(false);

    const after = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId,
    });
    expect(after.ok).toBe(true);
    if (!after.ok || after.kind !== "active") throw new Error("expected active");
    expect(after.inspection.inspectionSufficient).toBe(false);
  });
});
```

### Nouveau test — `p6.r03.contextFreshness.ui.test.tsx`

```typescript
/** @vitest-environment jsdom */
/**
 * STUDIO-P6-EXECUTION-INSPECTION-CLOSURE-03 — R3 CTX async freshness.
 */
import { cleanup, render, screen, waitFor, act } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ProjectWorkspacePage } from "@/features/pre-m6-product-ui/ProjectWorkspacePage";

const {
  getProjectRuntimeActionMock,
  useProductConversationMock,
  lifecycleProjectionMock,
} = vi.hoisted(() => ({
  getProjectRuntimeActionMock: vi.fn(),
  useProductConversationMock: vi.fn(),
  lifecycleProjectionMock: vi.fn(),
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

vi.mock("@/features/project-assistant/w2/actions", () => ({
  w2DeriveGovernedExecutionContinuityAction: vi.fn().mockResolvedValue({
    ok: true,
    projection: {
      projectId: "prj:ctx",
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
      reason: null,
      blockingCode: null,
      context: null,
    },
  }),
  w2ReadCurrentGovernedExecutionContinuityAction: vi
    .fn()
    .mockResolvedValue({ ok: true, kind: "none" }),
  w2ReadProjectHistoryAction: vi.fn().mockResolvedValue({
    ok: true,
    history: {
      projectId: "prj:ctx",
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
  }),
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
  projectAssistantPilotLifecycleProjection: (...args: unknown[]) =>
    lifecycleProjectionMock(...args),
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
  lpsNextAction: () => null,
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
vi.mock("@/features/pre-m6-product-ui/ProductRailRecents", () => ({
  ProductRailRecents: () => (
    <div data-testid="studio-rail-recents-stub">Projets récents</div>
  ),
}));
vi.mock("@/features/pre-m6-product-ui/surfaces/ConversationSurface", () => ({
  ConversationSurface: () => (
    <div data-testid="project-assistant-panel">Conversation</div>
  ),
}));
vi.mock("@/features/pre-m6-product-ui/surfaces/ExecutionSurface", () => ({
  ExecutionSurface: () => <div data-testid="execution-stub" />,
}));
vi.mock("@/features/pre-m6-product-ui/surfaces/SynthesesSurface", () => ({
  SynthesesSurface: () => <div data-testid="syntheses-stub" />,
}));

function deferred<T>() {
  let resolve!: (v: T) => void;
  let reject!: (e: unknown) => void;
  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}

function minimalLifecycleProjection(activeCycleInstanceId: string | null) {
  return {
    activeCycleInstanceId,
    selectedCycleInstanceId: activeCycleInstanceId,
    activeCycle: activeCycleInstanceId
      ? {
          cycleInstanceId: activeCycleInstanceId,
          createdAt: "2026-10-01T00:00:00.000Z",
          status: "active",
        }
      : null,
    pausedCycles: [] as const,
    terminalCycles: [] as const,
    candidateCycles: [] as const,
    cycleReservations: [] as const,
    cycleWorkRecommendations: [] as const,
    cycleDecisions: [] as const,
    reservationSummary: { activeCount: 0 },
  };
}

function runtimeFor(projectId: string) {
  return {
    ok: true as const,
    project: {
      projectId,
      name: `Project ${projectId}`,
      shortReference: "P3",
      objective: "ctx freshness",
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
      id: `lps:${projectId}`,
      version: 3,
      createdAt: "2026-10-05T00:00:00.000Z",
      activeCycleInstanceId: null,
    },
    doctrine: { id: "d", version: "1", digest: "x", status: "RESOLVED" },
    readiness: {
      status: "NOT_READY",
      hard: "OPEN",
      tA6: "INCOMPLETE",
      iam: "NOT_SELECTED",
      productPersistence: "SQLITE_OA_PRODUCT_STORE",
      realAgentExecution: "DISABLED",
      delivery: "NOT_AUTHORIZED",
      cutover: "NOT_AUTHORIZED",
      runReady: false,
      productReady: false,
    },
    disclosures: {},
  };
}

describe("P6 R03 — context freshness async", () => {
  afterEach(() => {
    cleanup();
  });

  beforeEach(() => {
    vi.clearAllMocks();
    getProjectRuntimeActionMock.mockImplementation(async (id: string) =>
      runtimeFor(id),
    );
    useProductConversationMock.mockReturnValue({
      listRef: { current: null },
      messages: [],
      draft: "",
      setDraft: vi.fn(),
      toolEvents: [],
      busy: false,
      error: null,
      send: vi.fn(),
      stop: vi.fn(),
      transcriptAvailability: "available",
      journalEntries: [],
      activeProposal: null,
      decisionSubjectContinuity: null,
      governedExecutionContinuity: null,
      refreshConversationContinuity: vi.fn(),
      armReservationInteractionContext: vi.fn(),
      clearReservationResolutionProposal: vi.fn(),
      setActiveView: vi.fn(),
    });
  });

  it("CTX05 — pending load never shows À jour prematurely", async () => {
    const d = deferred<{ ok: true; projection: { activeCycleInstanceId: string } }>();
    lifecycleProjectionMock.mockReturnValue(d.promise);

    render(
      <ProjectWorkspacePage projectId="prj:ctx-a" onProjectName={vi.fn()} />,
    );

    await waitFor(() => {
      expect(screen.getByTestId("project-currentness-chip").textContent).toMatch(
        /Lecture en cours/,
      );
    });
    expect(screen.getByTestId("project-currentness-chip").textContent).not.toBe(
      "À jour",
    );

    await act(async () => {
      d.resolve({
        ok: true,
        projection: minimalLifecycleProjection("cyc:1") as never,
      });
    });

    await waitFor(() => {
      expect(screen.getByTestId("project-currentness-chip").textContent).toBe(
        "À jour",
      );
    });
  });

  it("CTX01 — stale resolve for previous project is ignored", async () => {
    const first = deferred<{
      ok: true;
      projection: ReturnType<typeof minimalLifecycleProjection>;
    }>();
    const second = deferred<{
      ok: true;
      projection: ReturnType<typeof minimalLifecycleProjection>;
    }>();

    lifecycleProjectionMock.mockImplementation(
      ({ projectId }: { projectId: string }) => {
        if (projectId === "prj:ctx-old") return first.promise;
        return second.promise;
      },
    );

    const { rerender } = render(
      <ProjectWorkspacePage projectId="prj:ctx-old" onProjectName={vi.fn()} />,
    );

    rerender(
      <ProjectWorkspacePage projectId="prj:ctx-new" onProjectName={vi.fn()} />,
    );

    await act(async () => {
      second.resolve({
        ok: true,
        projection: minimalLifecycleProjection("cyc:new"),
      });
    });

    await act(async () => {
      first.resolve({
        ok: true,
        projection: minimalLifecycleProjection("cyc:old"),
      });
    });

    await waitFor(() => {
      expect(lifecycleProjectionMock).toHaveBeenCalledWith(
        expect.objectContaining({ projectId: "prj:ctx-new" }),
      );
    });
    await waitFor(() => {
      expect(screen.getByTestId("project-currentness-chip").textContent).toBe(
        "À jour",
      );
    });
  });

  it("CTX02/CTX06 — failed refresh marks unavailable (not À jour)", async () => {
    lifecycleProjectionMock.mockResolvedValue({
      ok: false,
      code: "UNAVAILABLE",
      message: "fail",
    });

    render(
      <ProjectWorkspacePage projectId="prj:ctx-fail" onProjectName={vi.fn()} />,
    );

    await waitFor(() => {
      expect(screen.getByTestId("project-currentness-chip").textContent).toMatch(
        /À vérifier/,
      );
    });
    expect(screen.getByTestId("project-currentness-chip").textContent).not.toBe(
      "À jour",
    );
  });
});
```

## 8. Verdict

**INSPECTION CLOSURE COMPLETE — DETERMINISTIC PASS — VISUAL NOT PROVEN — READY FOR CHATGPT REVIEW**

ExecutionSurface : attestation = faits rendus depuis disclosure canonique.
Conversation/Trajectory : gap explicite — décision Morris requise pour closure globale.
