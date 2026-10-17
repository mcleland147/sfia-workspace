# Review Pack FULL — STUDIO-P6-EXECUTION-CONVERGENCE-REGULARIZATION-02

| Field | Value |
| --- | --- |
| **Horodatage** | 2026-10-17 13:59:03 CEST |
| **Cycle ID** | `STUDIO-P6-EXECUTION-CONVERGENCE-REGULARIZATION-02` |
| **Parent** | `STUDIO-P6-EXECUTION-CONVERGENCE-DELIVERY-01` |
| **Parent handoff** | `02c50190dc53f26ed0044efaf8fba19029937d82` |
| **Cycle** | 8 — Delivery / implémentation |
| **Profil** | Critical |
| **Branche** | `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` |
| **HEAD** | `b4c1d86211d372f7b0685be7ce8a5ba7de598e37` |
| **origin/main** | `896ff59c704bfa76df1da1a51705aaf948c1cf0c` |
| **Décisions Morris consommées** | GO régularisation ciblée A+B · Option 1 KEEP · DTO V1 nullable KEEP · CURRENT obligatoire · pas HQA/REAL/commit Product |
| **Capacité** | V3-F05 |
| **Verdict Cursor** | **REGULARIZATION COMPLETE — DETERMINISTIC PASS — VISUAL NOT PROVEN — READY FOR CHATGPT REVIEW** |

---

## 1. Local Git Truth Check

### Initial (Pass 02 start)
- HEAD `b4c1d86211d372f7b0685be7ce8a5ba7de598e37` = tip distant `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare`
- origin/main `896ff59c704bfa76df1da1a51705aaf948c1cf0c`
- dirty Product préexistant (M-HD + MATERIALITY + Delivery A+B) préservé
- staged vide
- fingerprint dirty initial (status porcelain SHA-256): `1acea32f554dc99a4e2a056e5f49fddbd79df6546fa13cbd4e7ffdd0a2c03fe4`
- Baseline Pass 02 figée sous `.tmp-sfia-review/pass02-baseline/` (copies SHA des fichiers cibles avant édition)

### Final
- HEAD / branche inchangés (aucun commit Product)
- staged Product vide
- dirty final fingerprint (status porcelain SHA-256): `35fd07d60e10e31d043e9a9335f69e968a4c0384b0498cd846a6a53a1d1f31fc`
- HQA non mutée
- Distinguer : préexistant M-HD/materiality ≠ Delivery A+B ≠ **Pass 02 deltas** (ci-dessous)

### Attribution des couches
1. **Préexistant M-HD / MATERIALITY** — hors cycle (ne pas attribuer à Pass 02)
2. **Delivery A+B** — continuité G-D4 + rail Exécution synthétique + work presentation (parent `02c50190`)
3. **Pass 02** — R1 action UI / inspection ; R2 tests ; R3 fraîcheur contexte ; R4 preuves (visual NOT PROVEN)

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

## 2. Sources consultées

- Handoff parent `02c50190` (Delivery A+B)
- `pilotExecutionPresentation.ts` / `ExecutionSurface.tsx` / `inspectExecutionContract.ts` / `GovernedConfirmationCard.tsx` / `useProductConversation.ts`
- `ProjectWorkspacePage.tsx` / `workspaceContextPresentation.ts`
- Figma file `m4g8j0gNbEzfIuH6S9AZJF` frames `150:532`, `150:682` (screenshots MCP)
- Runtime local `:3020` → `/login?error=NO_SESSION` (pas de contournement auth)
- Doctrine / P6 / framing : consommés comme contraintes (pas de modification)

---

## 3. Périmètre Pass 02

### Product modifié (Pass 02)
- `features/pre-m6-product-ui/surfaces/pilotExecutionPresentation.ts`
- `features/pre-m6-product-ui/surfaces/ExecutionSurface.tsx`
- `features/pre-m6-product-ui/ProjectWorkspacePage.tsx`
- `features/pre-m6-product-ui/workspaceContextPresentation.ts`
- `features/project-assistant/w2/actions.ts` (adaptation bornée `inspectedFacts` optionnel)

### Tests
- Nouveau : `p6.r02.actionAvailability.d0.test.ts`
- Adaptés : `p6.o1.continuityGd4EmptyRefs.d0.test.ts`, `p5.s03.pilotExecutionPresentation.d0.test.ts`, `p5.s03.durableExecutionActionContinuity.ui.test.tsx`, `p6.o1.executionWorkPresentation.d0.test.ts`

### Non modifié (volontaire)
- `readCurrentGovernedExecutionContinuity.ts` (KEEP Delivery)
- Confirm/Authorize OA invariants
- Doctrine / HQA / Cursor REAL

---

## 4. Matrice R1–R4

| Réserve | Objectif | Preuve | Verdict |
| --- | --- | --- | --- |
| **R1** | EC id ≠ admissibilité ; Confirm/Execute ≠ inspection implicite ; Inspect explicite | Presenter + ExecutionSurface + UI tests E1/E5/UI01 + r02 UI01–UI10 | **PASS** |
| **R2** | T3 UNKNOWN, T5 true stale pathRoot, T13 amend+reinspect+confirm refuse, T16 read-only borders, tautologie retirée | continuityGd4 8 PASS ; G5 unstamped préservé via T4 | **PASS** |
| **R3** | Fraîcheur contexte : pending/unavailable ≠ « À jour » ; clear on project change ; fail clears stale | `presentCurrentness` + ProjectWorkspacePage load effect | **PASS déterministe** |
| **R4** | Figma frames + runtime comparable | Figma MCP screenshots locaux ; runtime login bloqué | **VISUAL NOT PROVEN** |

---

## 5. R1 — détails

### Anomalie corrigée
`inspectionSufficient = pre?.inspection… \|\| (pre == null && Boolean(projection.executionContractId))` **supprimée**.

### Contrat appliqué
- Continuité pré-exécution `kind=active` obligatoire pour Confirm/Execute/Inspect
- Failure / `kind=none` / null → CTA `none` + attention explicite
- Inspection insuffisante → CTA `inspect` (pas Confirm disabled trompeur)
- Fingerprint/version drift / `reinspectionRequired` → Inspect
- Terminaux : pas de réactivation Confirm/Execute

### ExecutionSurface
- `handleConfirm` / `handleExecute` **ne appellent plus** `w2InspectExecutionContractAction`
- `handleInspect` transmet `inspectedFacts` dérivés de la disclosure affichée
- `resolveActivePreContract` : plus de fallback projection-only pour actions mutantes
- `preExec` conserve les échecs (`setPreExec(current)`)

### Qualification inspection legacy
Conversation / Trajectory Inspect **sans** `inspectedFacts` conserve le défaut serveur `requiredFacts` (attestation sur clic Inspect explicite, faits déjà présentés sur la carte). Confirm Conversation refusait déjà sans inspection suffisante. **Aucune attestation sur Confirm/Execute Exécution.**

### actions.ts
Ajout optionnel `inspectedFacts` — n’élargit pas l’autorité ; omettre conserve le comportement legacy.

---

## 6. R2 — détails tests

- T3 : stamp `MATERIALITY:UNKNOWN` + empty refs → refus
- T5 : pathRoot change post-PREPARE → `REPOSITORY_BINDING_STALE` (ou famille CURRENT)
- T5a : missing `productCurrentness` (cas antérieur) conservé
- T13 : inspect → amend constraint → inspection insufficient → confirm refuse
- T16 : spy EC save + HD count + inspection attestations + attempts inchangés
- Tautologie `decisionRef === undefined \|\| true` retirée

---

## 7. R3 — fraîcheur

- `lifecycleProjectionAvailability`: pending / available / unavailable
- Changement de `projectId` : clear projection
- Refresh fail : clear + unavailable (pas de stale silencieux)
- `presentCurrentness` refuse « À jour » si lifecycle unavailable/pending
- Même lecteur Product `projectAssistantPilotLifecycleProjection`

---

## 8. R4 — Figma / runtime

| Frame | Dim | Capture | Runtime | Gap | Verdict |
| --- | --- | --- | --- | --- | --- |
| 150:532 BEFORE | 1440×1024 | `.tmp-sfia-review/pass02-figma/150-532-before.png` | NOT OBSERVED (`/login?NO_SESSION`) | composition rail déjà Delivery ; interactions R1 prouvées tests | Figma OK / runtime **NOT PROVEN** |
| 150:682 Context | 356×866 | `.tmp-sfia-review/pass02-figma/150-682-context.png` | NOT OBSERVED | idem | Figma OK / runtime **NOT PROVEN** |
| 150:29 AFTER | 1440×1024 | — | NOT OBSERVED (pas de mutation) | — | NOT OBSERVED |

---

## 9. Tests exécutés (app package, vitest local)

**79 PASS** (10 files) — 2026-10-17 ~13:58 CEST

- p6.o1.executionWorkPresentation (2)
- p6.r02.actionAvailability (10)
- p5.s03.durableExecutionActionContinuity.ui (7)
- p5.s03.pilotExecutionPresentation (10)
- p5.s01.workspaceLayout.ui (5)
- automaticProjectResume.ui (4)
- ecInspectionDisclosure (9)
- ecRehydrationContinuity (14)
- p6.o1.continuityGd4EmptyRefs (8)
- p6.gD4.genericPrepareWithoutSystematicHd (10)

TypeScript : aucune erreur sur fichiers Pass 02 Product / r02 après correction statusLabel/reason.

---

## 10. Preuves négatives préservées

- G5 empty refs unstamped → INTEGRITY (T4)
- STRUCTURAL empty refs → refus (T2)
- UNKNOWN → refus (T3)
- HD-bound path inchangé (non réécrit)
- Confirm sans inspection → refus (T13 post-amend + UI)
- Lecture continuité sans writes (T16)
- Aucun Cursor REAL / HD artificielle / Attempt PREPARE

---

## 11. Réserves / dette / gates Morris

| Gate | Statut |
| --- | --- |
| D-VISUAL | Runtime authentifié requis pour VISUAL PASS |
| D-HQA | Reprise HQA-FRESH-01 **interdite** ici |
| D-COMMIT | Commit Product non autorisé |
| D-REAL | Cursor REAL non autorisé |
| Conversation Inspect legacy default facts | Qualifié — arbitrage Morris si exigence d’`inspectedFacts` obligatoire global |

---

## 12. Diffs Pass 02 (complets vs baseline pré-Pass02)


### `pilotExecutionPresentation.ts.diff`

```diff
--- .tmp-sfia-review/pass02-baseline/projects_sfia-studio_app_features_pre-m6-product-ui_surfaces_pilotExecutionPresentation.ts	2026-10-17 13:54:29
+++ projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation.ts	2026-10-17 13:55:25
@@ -37,6 +37,7 @@

 export type PilotExecutionCta =
   | { readonly kind: "none" }
+  | { readonly kind: "inspect"; readonly label: string; readonly enabled: boolean }
   | { readonly kind: "confirm"; readonly label: string; readonly enabled: boolean }
   | { readonly kind: "execute"; readonly label: string; readonly enabled: boolean }
   | {
@@ -372,12 +373,15 @@
   }

   const projection = input.continuityProjection.projection;
+  const preContinuity = input.preExecutionContinuity;
   const pre =
-    input.preExecutionContinuity &&
-    input.preExecutionContinuity.ok &&
-    input.preExecutionContinuity.kind === "active"
-      ? input.preExecutionContinuity
+    preContinuity &&
+    preContinuity.ok &&
+    preContinuity.kind === "active"
+      ? preContinuity
       : null;
+  /** Fail / none / null — never treat as actionable pre-execution continuity. */
+  const preContinuityBlocked = pre == null;

   const contractPresentation = pre
     ? presentPilotContract({
@@ -413,12 +417,31 @@
     projection.executionContractStatus === "confirmed" ||
     projection.executionContractStatus === "validated";

-  /** Durable inspection — never Conversation F3 state. */
-  const inspectionSufficient =
-    pre?.inspection.inspectionSufficient === true ||
-    // When only continuity projection is available post-confirm, allow CTA
-    // presentation; final authority remains server-side on click.
-    (pre == null && Boolean(projection.executionContractId));
+  /**
+   * Durable inspection only — never Conversation F3, never projection EC id alone.
+   * R1: executionContractId on the derive projection does not establish admissibility.
+   */
+  const inspectionSufficient = pre?.inspection.inspectionSufficient === true;
+
+  const identityAligned =
+    pre == null ||
+    !projection.executionContractId ||
+    (pre.contract.executionContractId === projection.executionContractId &&
+      (projection.executionContractVersion == null ||
+        pre.contract.version === projection.executionContractVersion));
+
+  const inspectionAlignedWithContract =
+    !inspectionSufficient ||
+    (pre != null &&
+      pre.inspection.executionContractId === pre.contract.executionContractId &&
+      (pre.inspection.attestedVersion == null ||
+        pre.inspection.attestedVersion === pre.contract.version) &&
+      (pre.inspection.semanticFingerprint == null ||
+        pre.inspection.semanticFingerprint === "" ||
+        pre.contract.semanticFingerprint == null ||
+        pre.contract.semanticFingerprint === "" ||
+        pre.inspection.semanticFingerprint === pre.contract.semanticFingerprint) &&
+      pre.inspection.reinspectionRequired !== true);

   const busy = input.actionsBusy === true;
   const stage = projection.stage;
@@ -446,22 +469,71 @@
     const work = buildWorkItems(projection, false, pre, contractPresentation);
     const needsConfirm = confirmationRequired && !confirmationSatisfied;
     const status: PilotExecutionStatus = needsConfirm ? "a_confirmer" : "prete";
-    const durableActionable = Boolean(
-      (pre?.contract.executionContractId || projection.executionContractId) &&
-        inspectionSufficient,
-    );
-    const cta: PilotExecutionCta = needsConfirm
-      ? {
-          kind: "confirm",
-          label: "Confirmer",
-          enabled: durableActionable && !busy,
-        }
-      : {
-          kind: "execute",
-          label: "Exécuter",
-          enabled: durableActionable && !needsConfirm && !busy,
-        };
+
+    const preActiveVerified = pre != null && identityAligned;
+    const durableActionable =
+      preActiveVerified &&
+      inspectionSufficient &&
+      inspectionAlignedWithContract;
+
+    let cta: PilotExecutionCta;
+    let attentionNote: string | null;

+    if (preContinuityBlocked || !identityAligned) {
+      cta = { kind: "none" };
+      attentionNote =
+        preContinuity != null && !preContinuity.ok
+          ? `Continuité pré-exécution refusée (${preContinuity.code}) — aucune confirmation ni exécution.`
+          : preContinuity != null &&
+              preContinuity.ok &&
+              preContinuity.kind === "none"
+            ? "Aucun contrat courant vérifié — aucune confirmation ni exécution."
+            : !identityAligned
+              ? "Identité contractuelle incohérente entre projection et continuité — actions refusées."
+              : "Continuité pré-exécution indisponible — un identifiant de contrat seul n’autorise aucune action.";
+    } else if (needsConfirm && !inspectionSufficient) {
+      cta = {
+        kind: "inspect",
+        label: "Inspecter pour confirmer",
+        enabled: !busy,
+      };
+      attentionNote =
+        "Inspection suffisante requise avant confirmation. Confirmer n’atteste pas l’inspection.";
+    } else if (needsConfirm && inspectionSufficient && !inspectionAlignedWithContract) {
+      cta = {
+        kind: "inspect",
+        label: "Réinspecter le contrat",
+        enabled: !busy,
+      };
+      attentionNote =
+        "Version ou empreinte modifiée — réinspection requise avant confirmation.";
+    } else if (needsConfirm) {
+      cta = {
+        kind: "confirm",
+        label: "Confirmer",
+        enabled: durableActionable && !busy,
+      };
+      attentionNote =
+        "Aucun effet ne sera produit tant que la confirmation n’est pas donnée.";
+    } else if (!inspectionSufficient || !inspectionAlignedWithContract) {
+      cta = {
+        kind: "inspect",
+        label: "Inspecter le contrat",
+        enabled: !busy,
+      };
+      attentionNote = !inspectionAlignedWithContract
+        ? "Version ou empreinte modifiée — réinspection requise avant exécution."
+        : "Inspection insuffisante — exécution refusée jusqu’à inspection explicite.";
+    } else {
+      cta = {
+        kind: "execute",
+        label: "Exécuter",
+        enabled: durableActionable && !busy,
+      };
+      attentionNote =
+        "L’action reste limitée à la portée du contrat. Aucun effet hors contrat n’est prévu.";
+    }
+
     return {
       ...emptyBase,
       status,
@@ -470,7 +542,9 @@
       title,
       subtitle: needsConfirm
         ? "Confirmation requise avant tout effet."
-        : "Action préparée · prête à être lancée",
+        : durableActionable
+          ? "Action préparée · prête à être lancée"
+          : "Action préparée — inspection ou continuité requise.",
       stateDetail: needsConfirm ? "En attente de confirmation" : "Action préparée",
       scopeLabel: scopeLabel ? "Portée" : null,
       scopeDetail: scopeLabel,
@@ -478,11 +552,7 @@
       impactDetail: contractPresentation?.effectSummary ?? null,
       reversibilityLabel: reversibilityLabel ? "Réversibilité" : null,
       reversibilityDetail: reversibilityLabel,
-      attentionNote: !inspectionSufficient
-        ? "Inspection insuffisante — actualisez le contrat avant d’agir."
-        : needsConfirm
-          ? "Aucun effet ne sera produit tant que la confirmation n’est pas donnée."
-          : "L’action reste limitée à la portée du contrat. Aucun effet hors contrat n’est prévu.",
+      attentionNote,
       workItems: work.items,
       workItemsTotal: work.total,
       workItemsCollapsed: work.collapsed,
```

### `ExecutionSurface.tsx.diff`

```diff
--- .tmp-sfia-review/pass02-baseline/projects_sfia-studio_app_features_pre-m6-product-ui_surfaces_ExecutionSurface.tsx	2026-10-17 13:54:29
+++ projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ExecutionSurface.tsx	2026-10-17 13:55:45
@@ -88,7 +88,8 @@
     ]);
     if (!reconcileMountedRef.current) return { derived, current };
     setContinuity(derived);
-    setPreExec(current.ok ? current : null);
+    // Preserve failure / kind=none — presenter must not treat absence as success.
+    setPreExec(current);
     const nextId =
       derived.ok && derived.projection.executionContractId
         ? derived.projection.executionContractId
@@ -255,42 +256,86 @@
     onPresentationChange?.(presentation);
   }, [presentation, onPresentationChange]);

-  const resolveContractId = useCallback((): {
+  /**
+   * Mutating actions require verified pre-execution continuity — never
+   * projection.executionContractId alone (R1).
+   */
+  const resolveActivePreContract = useCallback((): {
     executionContractId: string;
-    expectedVersion?: number;
+    expectedVersion: number;
+    semanticFingerprint: string;
+    inspectionSufficient: boolean;
   } | null => {
     if (
-      preExec &&
-      preExec.ok &&
-      preExec.kind === "active" &&
-      preExec.contract.executionContractId
+      !preExec ||
+      !preExec.ok ||
+      preExec.kind !== "active" ||
+      !preExec.contract.executionContractId
     ) {
-      return {
-        executionContractId: preExec.contract.executionContractId,
-        expectedVersion: preExec.contract.version,
-      };
+      return null;
     }
-    const id =
-      continuity && continuity.ok
-        ? continuity.projection.executionContractId
-        : null;
-    if (!id) return null;
-    const version =
-      continuity && continuity.ok
-        ? continuity.projection.executionContractVersion
-        : null;
     return {
-      executionContractId: id,
-      expectedVersion: version ?? undefined,
+      executionContractId: preExec.contract.executionContractId,
+      expectedVersion: preExec.contract.version,
+      semanticFingerprint: preExec.contract.semanticFingerprint ?? "",
+      inspectionSufficient: preExec.inspection.inspectionSufficient === true,
     };
-  }, [preExec, continuity]);
+  }, [preExec]);

-  const handleConfirm = useCallback(async () => {
-    const target = resolveContractId();
+  /**
+   * Explicit Inspect — attests facts already disclosed on the active contract.
+   * Confirm / Execute must never call this path as a side effect.
+   */
+  const handleInspect = useCallback(async () => {
+    const target = resolveActivePreContract();
     if (!target) {
-      setError("Aucun contrat d’exécution durable à confirmer.");
+      setError(
+        "Continuité pré-exécution indisponible — inspection refusée.",
+      );
       return;
     }
+    if (
+      !preExec ||
+      !preExec.ok ||
+      preExec.kind !== "active" ||
+      !preExec.contract.inspectionDisclosure
+    ) {
+      setError(
+        "Faits contractuels non affichés — inspection refusée jusqu’à relecture.",
+      );
+      return;
+    }
+    const d = preExec.contract.inspectionDisclosure;
+    const inspectedFacts: string[] = [
+      "action",
+      "target",
+      "scope",
+      "requiredAuthority",
+      "requiredCapabilities",
+      "constraints",
+      "stopConditions",
+      "reversibility",
+      "evidenceRequirements",
+      "semanticFingerprint",
+    ];
+    if (d.targetRepositoryRef) inspectedFacts.push("inputs.targetRepositoryRef");
+    if (d.targetPath) inspectedFacts.push("inputs.targetPath");
+    if (d.scopeIn) inspectedFacts.push("inputs.scopeIn");
+    if (d.scopeOut) inspectedFacts.push("inputs.scopeOut");
+    if (d.createOrModify !== null && d.createOrModify !== undefined) {
+      inspectedFacts.push("inputs.createOrModify");
+    }
+    if (d.noDelete !== null && d.noDelete !== undefined) {
+      inspectedFacts.push("inputs.noDelete");
+    }
+    if (d.contentRequirements) inspectedFacts.push("inputs.contentRequirements");
+    if (d.validationExpectations) {
+      inspectedFacts.push("inputs.validationExpectations");
+    }
+    if (d.expectedOutputs && d.expectedOutputs.length > 0) {
+      inspectedFacts.push("expectedOutputs");
+    }
+
     setBusy(true);
     setError(null);
     try {
@@ -298,6 +343,7 @@
         projectId,
         executionContractId: target.executionContractId,
         expectedVersion: target.expectedVersion,
+        inspectedFacts,
       });
       if (!inspected.ok) {
         setError(inspected.message);
@@ -306,12 +352,40 @@
       }
       if (!inspected.inspectionSufficient) {
         setError(
-          "Inspection insuffisante — confirmation refusée jusqu’à actualisation.",
+          "Inspection insuffisante — faits attestés incomplets pour cette version.",
         );
-        await refreshExecutionContinuity();
-        return;
       }
+      await refreshExecutionContinuity();
+      onDurableFactsChanged?.();
+    } finally {
+      setBusy(false);
+    }
+  }, [
+    projectId,
+    preExec,
+    resolveActivePreContract,
+    refreshExecutionContinuity,
+    onDurableFactsChanged,
+  ]);

+  const handleConfirm = useCallback(async () => {
+    const target = resolveActivePreContract();
+    if (!target) {
+      setError(
+        "Continuité pré-exécution indisponible — confirmation refusée.",
+      );
+      return;
+    }
+    // Confirm never records inspection. Insufficient → refuse (no silent attest).
+    if (!target.inspectionSufficient) {
+      setError(
+        "Inspection suffisante requise avant confirmation — utilisez Inspecter.",
+      );
+      return;
+    }
+    setBusy(true);
+    setError(null);
+    try {
       const confirmed = await w2ConfirmExecutionContractAction({
         projectId,
         executionContractId: target.executionContractId,
@@ -329,15 +403,17 @@
     }
   }, [
     projectId,
-    resolveContractId,
+    resolveActivePreContract,
     refreshExecutionContinuity,
     onDurableFactsChanged,
   ]);

   const handleExecute = useCallback(async () => {
-    const target = resolveContractId();
+    const target = resolveActivePreContract();
     if (!target) {
-      setError("Aucun contrat d’exécution durable à exécuter.");
+      setError(
+        "Continuité pré-exécution indisponible — exécution refusée.",
+      );
       return;
     }
     setBusy(true);
@@ -350,6 +426,15 @@
         setError("Contrat durable introuvable après relecture.");
         return;
       }
+      if (
+        active.contract.executionContractId !== target.executionContractId ||
+        active.contract.version !== target.expectedVersion
+      ) {
+        setError(
+          "Identité ou version contractuelle incohérente — exécution refusée.",
+        );
+        return;
+      }
       if (active.contract.status === "confirmation_required") {
         setError(
           "Confirmation encore requise — Exécuter refuse d’agir.",
@@ -357,26 +442,20 @@
         return;
       }

+      // Execute never records inspection as a side effect.
       if (!active.inspection.inspectionSufficient) {
-        const inspected = await w2InspectExecutionContractAction({
-          projectId,
-          executionContractId: active.contract.executionContractId,
-          expectedVersion: active.contract.version,
-        });
-        if (!inspected.ok || !inspected.inspectionSufficient) {
-          setError(
-            inspected.ok
-              ? "Inspection insuffisante — exécution refusée."
-              : inspected.message,
-          );
-          await refreshExecutionContinuity();
-          return;
-        }
+        setError(
+          "Inspection suffisante requise avant exécution — utilisez Inspecter.",
+        );
+        return;
       }

       const auth = await w2AuthorizeExecutionContractAction({
         projectId,
         executionContractId: active.contract.executionContractId,
+        expectedVersion: active.contract.version,
+        expectedSemanticFingerprint:
+          active.contract.semanticFingerprint || undefined,
       });
       if (!auth.ok) {
         setError(auth.message);
@@ -403,7 +482,7 @@
     }
   }, [
     projectId,
-    resolveContractId,
+    resolveActivePreContract,
     refreshExecutionContinuity,
     runServerReconcile,
   ]);
@@ -600,12 +679,37 @@
       ) : null}

       <div className={styles.footer}>
+        {presentation.cta.kind === "inspect" ? (
+          <button
+            type="button"
+            className={styles.primaryButton}
+            data-testid="project-execution-inspect"
+            disabled={!presentation.cta.enabled}
+            aria-label={presentation.cta.label}
+            title={
+              presentation.attentionNote ??
+              "Inspection explicite requise avant confirmation ou exécution."
+            }
+            onClick={() => {
+              void handleInspect();
+            }}
+          >
+            {busy ? "Inspection…" : presentation.cta.label}
+          </button>
+        ) : null}
         {presentation.cta.kind === "confirm" ? (
           <button
             type="button"
             className={styles.primaryButton}
             data-testid="project-execution-confirm"
             disabled={!presentation.cta.enabled}
+            aria-label={presentation.cta.label}
+            title={
+              presentation.cta.enabled
+                ? presentation.attentionNote ?? presentation.cta.label
+                : presentation.attentionNote ??
+                  "Confirmation indisponible — conditions non satisfaites."
+            }
             onClick={() => {
               void handleConfirm();
             }}
@@ -619,6 +723,13 @@
             className={styles.primaryButton}
             data-testid="project-execution-execute"
             disabled={!presentation.cta.enabled}
+            aria-label={presentation.cta.label}
+            title={
+              presentation.cta.enabled
+                ? presentation.attentionNote ?? presentation.cta.label
+                : presentation.attentionNote ??
+                  "Exécution indisponible — conditions non satisfaites."
+            }
             onClick={() => {
               void handleExecute();
             }}
```

### `ProjectWorkspacePage.tsx.diff`

```diff
--- .tmp-sfia-review/pass02-baseline/projects_sfia-studio_app_features_pre-m6-product-ui_ProjectWorkspacePage.tsx	2026-10-17 13:54:29
+++ projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx	2026-10-17 13:56:09
@@ -149,6 +149,9 @@
   const [memoryTab, setMemoryTab] = useState<JournalMemoryTab>("sujets");
   const [lifecycleProjection, setLifecycleProjection] =
     useState<PilotLifecycleProjection | null>(null);
+  /** R3 — honest freshness for synthetic Execution rail (same Product reader). */
+  const [lifecycleProjectionAvailability, setLifecycleProjectionAvailability] =
+    useState<"available" | "pending" | "unavailable">("pending");
   const [reservationBusyId, setReservationBusyId] = useState<string | null>(null);
   const [reservationNotice, setReservationNotice] = useState<string | null>(null);
   const [latestSynthesis, setLatestSynthesis] =
@@ -162,6 +165,7 @@
     thumbHeight: number;
   }>({ active: false, thumbTop: 0, thumbHeight: 0 });
   const refreshInFlight = useRef(false);
+  const lifecycleProjectionProjectIdRef = useRef<string | null>(null);

   const syncContextScrollUi = useCallback(() => {
     const el = contextScrollRef.current;
@@ -218,6 +222,16 @@
     setLifecycleRefreshSignal((n) => n + 1);
   }, [loadProject]);

+  const applyLifecycleProjection = useCallback(
+    (projection: PilotLifecycleProjection | null) => {
+      setLifecycleProjection(projection);
+      setLifecycleProjectionAvailability(
+        projection ? "available" : "unavailable",
+      );
+    },
+    [],
+  );
+
   useEffect(() => {
     let cancelled = false;
     void getProjectRuntimeAction(projectId).then((next) => {
@@ -229,21 +243,35 @@
   }, [projectId]);

   /**
-   * LOT B — Load durable lifecycle projection without requiring LifecycleSurface
-   * to be mounted (Execution rail is synthetic-only). Same Product reader as
-   * LifecycleSurface.refresh — no second source of truth.
+   * LOT B / R3 — Load durable lifecycle projection without requiring
+   * LifecycleSurface mounted (Execution rail is synthetic-only). Same Product
+   * reader as LifecycleSurface.refresh — no second source of truth.
+   * Project change clears prior projection (C5). Failed refresh clears it so
+   * stale data is never shown as current (C4/C7). Successful refresh replaces.
    */
   useEffect(() => {
     let cancelled = false;
+    const projectChanged = lifecycleProjectionProjectIdRef.current !== projectId;
+    lifecycleProjectionProjectIdRef.current = projectId;
+    if (projectChanged) {
+      setLifecycleProjection(null);
+    }
+    setLifecycleProjectionAvailability("pending");
     void Promise.resolve(projectAssistantPilotLifecycleProjection({ projectId }))
       .then((result) => {
-        if (cancelled || !result) return;
-        if (result.ok && result.projection) {
+        if (cancelled) return;
+        if (result?.ok && result.projection) {
           setLifecycleProjection(result.projection);
+          setLifecycleProjectionAvailability("available");
+          return;
         }
+        setLifecycleProjection(null);
+        setLifecycleProjectionAvailability("unavailable");
       })
       .catch(() => {
-        /* projection optional for synthetic rail — fail closed leaves prior mirror */
+        if (cancelled) return;
+        setLifecycleProjection(null);
+        setLifecycleProjectionAvailability("unavailable");
       });
     return () => {
       cancelled = true;
@@ -268,7 +296,7 @@
       setExecutionPresentation(
         presentPilotExecution({
           continuityProjection: derived,
-          preExecutionContinuity: current.ok ? current : null,
+          preExecutionContinuity: current,
         }),
       );
     })();
@@ -376,11 +404,11 @@
           setReservationNotice(
             outcome.message ?? outcome.code ?? "Levée refusée.",
           );
-          if (outcome.projection) setLifecycleProjection(outcome.projection);
+          if (outcome.projection) applyLifecycleProjection(outcome.projection);
           return;
         }
         setReservationNotice(outcome.message ?? "Levée de la réserve confirmée.");
-        if (outcome.projection) setLifecycleProjection(outcome.projection);
+        if (outcome.projection) applyLifecycleProjection(outcome.projection);
         controller.armReservationInteractionContext(null);
         controller.clearReservationResolutionProposal();
         notifyDurableFactsChanged();
@@ -388,7 +416,13 @@
         setReservationBusyId(null);
       }
     },
-    [projectId, reservationCycleInstanceId, notifyDurableFactsChanged, controller],
+    [
+      projectId,
+      reservationCycleInstanceId,
+      notifyDurableFactsChanged,
+      controller,
+      applyLifecycleProjection,
+    ],
   );

   const confirmReservationDefer = useCallback(
@@ -412,19 +446,24 @@
           setReservationNotice(
             outcome.message ?? outcome.code ?? "Report refusé.",
           );
-          if (outcome.projection) setLifecycleProjection(outcome.projection);
+          if (outcome.projection) applyLifecycleProjection(outcome.projection);
           return;
         }
         setReservationNotice(
           outcome.message ?? "Réserve reportée — décision enregistrée.",
         );
-        if (outcome.projection) setLifecycleProjection(outcome.projection);
+        if (outcome.projection) applyLifecycleProjection(outcome.projection);
         notifyDurableFactsChanged();
       } finally {
         setReservationBusyId(null);
       }
     },
-    [projectId, reservationCycleInstanceId, notifyDurableFactsChanged],
+    [
+      projectId,
+      reservationCycleInstanceId,
+      notifyDurableFactsChanged,
+      applyLifecycleProjection,
+    ],
   );

   /**
@@ -587,6 +626,7 @@
     // Prefer latest synthèse clock when loaded; else LPS createdAt.
     updatedAt:
       latestSynthesis?.generatedAt ?? success.livingState.createdAt ?? null,
+    lifecycleProjectionAvailability,
   });
   const currentJournalTopic = controller.journalEntries.find(
     (e) => e.isCurrentTopic,
@@ -1027,7 +1067,7 @@
                   durableRefreshSignal={lifecycleRefreshSignal}
                   onDurableFactsChanged={notifyDurableFactsChanged}
                   suppressGenericNoraCta={suppressGenericIntentionCta}
-                  onProjectionChange={setLifecycleProjection}
+                  onProjectionChange={applyLifecycleProjection}
                   onOpenReservations={openReservationsTab}
                   onTreatReservationWithNora={treatReservationWithNora}
                   onEscalateTrajectory={() => {
```

### `workspaceContextPresentation.ts.diff`

```diff
--- .tmp-sfia-review/pass02-baseline/projects_sfia-studio_app_features_pre-m6-product-ui_workspaceContextPresentation.ts	2026-10-17 13:54:29
+++ projects/sfia-studio/app/features/pre-m6-product-ui/workspaceContextPresentation.ts	2026-10-17 13:55:49
@@ -44,9 +44,30 @@
   stateVersion: number;
   /** Durable living-state / project update timestamp when available. */
   updatedAt?: string | null;
+  /**
+   * Lifecycle / context-rail projection read status.
+   * - pending: load in flight (do not claim « À jour »)
+   * - unavailable: read failed — clear prior projection; never present as current
+   * - available: Product reader succeeded for this project
+   */
+  lifecycleProjectionAvailability?: "available" | "pending" | "unavailable";
 }): CurrentnessPresentation {
   const verified = formatVerifiedRelativeFr(input.updatedAt);
   const versionDetail = `État enregistré · v${input.stateVersion}`;
+  if (input.lifecycleProjectionAvailability === "unavailable") {
+    return {
+      label: "À vérifier",
+      detail: `${versionDetail} · contexte projet indisponible`,
+      tone: "warn",
+    };
+  }
+  if (input.lifecycleProjectionAvailability === "pending") {
+    return {
+      label: "Lecture en cours",
+      detail: `${versionDetail} · contexte projet en cours de lecture`,
+      tone: "neutral",
+    };
+  }
   switch (input.transcriptAvailability) {
     case "unavailable":
       return {
```

### `actions.ts.diff`

```diff
--- .tmp-sfia-review/pass02-baseline/projects_sfia-studio_app_features_project-assistant_w2_actions.ts	2026-10-17 13:54:29
+++ projects/sfia-studio/app/features/project-assistant/w2/actions.ts	2026-10-17 13:55:41
@@ -283,6 +283,15 @@
   projectId: string;
   executionContractId: string;
   expectedVersion?: number;
+  /**
+   * Facts the Pilote attests having read on the displayed contract version.
+   * When provided (including empty), the service must not invent a substitute
+   * set — empty fails closed at record time. When omitted, legacy callers
+   * (Conversation / Trajectory Inspect buttons that already surface disclosure)
+   * keep the prior required-facts default inside inspectExecutionContract.
+   * Confirm / Execute must never call this action as a side effect.
+   */
+  inspectedFacts?: readonly string[];
 }): Promise<InspectExecutionContractResult> {
   const runtime = getRuntimeApplicationService();
   if (!runtime.oa) return OA_UNAVAILABLE;
@@ -292,6 +301,9 @@
     projectId: input.projectId,
     executionContractId: input.executionContractId,
     expectedVersion: input.expectedVersion,
+    ...(input.inspectedFacts !== undefined
+      ? { inspectedFacts: input.inspectedFacts }
+      : {}),
   });
 }
```

### `p6.o1.continuityGd4EmptyRefs.d0.test.ts.diff`

```diff
--- .tmp-sfia-review/pass02-baseline/projects_sfia-studio_app___tests___project-assistant_p6.o1.continuityGd4EmptyRefs.d0.test.ts	2026-10-17 13:54:29
+++ projects/sfia-studio/app/__tests__/project-assistant/p6.o1.continuityGd4EmptyRefs.d0.test.ts	2026-10-17 13:56:58
@@ -324,8 +324,8 @@
     ).toBe(true);
   });

-  it("T5 — NON_STRUCTURAL stamp but missing productCurrentness facts → refus", async () => {
-    const { projectId, cycleInstanceId } = await seedActiveCycle("t5");
+  it("T5a — NON_STRUCTURAL stamp but missing productCurrentness facts → refus", async () => {
+    const { projectId, cycleInstanceId } = await seedActiveCycle("t5a");
     const oa = runtime.oa!;
     const prep = await prepareOk(projectId, cycleInstanceId);
     const loaded = await oa.executionContractServices.getExecutionContract.execute({
@@ -352,7 +352,78 @@
     expect(continuity.code).toBe("EXECUTION_CONTINUITY_INTEGRITY_FAILED");
   });

-  it("T11/T12/T13 — inspection state exposed; insufficient ≠ confirm; FP change requires reinspect", async () => {
+  it("T5 — true Product obsolescence (pathRoot change) → CURRENT/STALE refus", async () => {
+    const { projectId, cycleInstanceId } = await seedActiveCycle("t5");
+    const oa = runtime.oa!;
+    const prep = await prepareOk(projectId, cycleInstanceId);
+
+    const before = await readCurrentGovernedExecutionContinuity({
+      oa,
+      projectId,
+    });
+    expect(before.ok).toBe(true);
+    if (!before.ok || before.kind !== "active") throw new Error("expected active");
+
+    const identity = `acme/o1c-t5`;
+    const rebound = await oa.projectServices.setProjectRepositoryBinding!.execute({
+      projectId,
+      actor: LOCAL_PILOTE_ACTOR,
+      binding: {
+        provider: "github",
+        identity,
+        remoteUrl: `https://github.com/${identity}.git`,
+        defaultBranch: "main",
+        pathRoot: "projects/demo-alt",
+      },
+    });
+    expect(rebound.ok).toBe(true);
+
+    const continuity = await readCurrentGovernedExecutionContinuity({
+      oa,
+      projectId,
+    });
+    expect(continuity.ok).toBe(false);
+    if (continuity.ok) throw new Error("expected stale refus");
+    expect(
+      continuity.code === "REPOSITORY_BINDING_STALE" ||
+        continuity.code === "MATERIALITY_CURRENTNESS_STALE" ||
+        continuity.code === "MATERIALITY_CURRENT_MISMATCH" ||
+        continuity.code === "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
+    ).toBe(true);
+  });
+
+  it("T3 — CURRENT materiality UNKNOWN + empty refs → continuity refus", async () => {
+    const { projectId, cycleInstanceId } = await seedActiveCycle("t3");
+    const oa = runtime.oa!;
+    const prep = await prepareOk(projectId, cycleInstanceId);
+    const loaded = await oa.executionContractServices.getExecutionContract.execute({
+      executionContractId: prep.contract.executionContractId,
+    });
+    if (!loaded.ok) throw new Error("load");
+    // Force stamp UNKNOWN while keeping empty refs — never admit without HD.
+    await oa.executionContractServices.contracts.save({
+      ...loaded.contract,
+      decisionRefs: [],
+      constraints: [
+        ...loaded.contract.constraints.filter((c) => !c.startsWith("MATERIALITY:")),
+        "MATERIALITY:UNKNOWN",
+      ],
+    });
+
+    const continuity = await readCurrentGovernedExecutionContinuity({
+      oa,
+      projectId,
+    });
+    expect(continuity.ok).toBe(false);
+    if (continuity.ok) throw new Error("expected UNKNOWN refus");
+    expect(
+      continuity.code === "MATERIALITY_UNKNOWN" ||
+        continuity.code === "MATERIALITY_CURRENT_MISMATCH" ||
+        continuity.code === "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
+    ).toBe(true);
+  });
+
+  it("T11/T12/T13 — inspection + amend fingerprint requires reinspect; confirm refused", async () => {
     const { projectId, cycleInstanceId } = await seedActiveCycle("t11");
     const oa = runtime.oa!;
     const prep = await prepareOk(projectId, cycleInstanceId);
@@ -372,9 +443,6 @@
       projectId,
       executionContractId: prep.contract.executionContractId,
       expectedVersion: prep.contract.version,
-      expectedSemanticFingerprint:
-        prep.contract.semanticFingerprint ?? "unset",
-      forceLocalAuthority: true,
     });
     expect(inspected.ok).toBe(true);

@@ -388,17 +456,68 @@
     }
     expect(afterInspect.inspection.inspectionSufficient).toBe(true);
     expect(afterInspect.decisionRef).toBeNull();
-    // Continuity read never auto-executes / auto-confirms.
     expect(afterInspect.contract.status).toBe(prep.contract.status);
+
+    const { amendExecutionContractWithConstraint } = await import(
+      "@/features/project-assistant/w2/amendExecutionContract"
+    );
+    const amended = await amendExecutionContractWithConstraint({
+      oa,
+      projectId,
+      executionContractId: prep.contract.executionContractId,
+      additionalConstraint: "PASS02:T13-FP-BUMP",
+      forceLocalAuthority: true,
+    });
+    expect(amended.ok).toBe(true);
+    if (!amended.ok) throw new Error(amended.message);
+
+    const afterAmend = await readCurrentGovernedExecutionContinuity({
+      oa,
+      projectId,
+    });
+    expect(afterAmend.ok).toBe(true);
+    if (!afterAmend.ok || afterAmend.kind !== "active") {
+      throw new Error("expected active after amend");
+    }
+    // Successor (or bumped) contract must not reuse prior inspection silently.
+    expect(afterAmend.inspection.inspectionSufficient).toBe(false);
+    expect(
+      afterAmend.inspection.reinspectionRequired === true ||
+        afterAmend.contract.executionContractId !==
+          prep.contract.executionContractId ||
+        afterAmend.contract.version !== prep.contract.version ||
+        afterAmend.contract.semanticFingerprint !==
+          (prep.contract.semanticFingerprint ?? ""),
+    ).toBe(true);
+
+    const { confirmExecutionContractForAuthorization } = await import(
+      "@/features/project-assistant/w2/confirmForAuthorization"
+    );
+    const confirmed = await confirmExecutionContractForAuthorization({
+      oa,
+      projectId,
+      executionContractId: afterAmend.contract.executionContractId,
+      forceLocalAuthority: true,
+    });
+    expect(confirmed.ok).toBe(false);
+    if (confirmed.ok) throw new Error("expected confirm refus before reinspect");
   });

-  it("T16 — continuity read performs no EC / HD / Attempt writes", async () => {
+  it("T16 — continuity read performs no EC / HD / Inspection / Confirm / Attempt writes", async () => {
     const { projectId, cycleInstanceId } = await seedActiveCycle("t16");
     const oa = runtime.oa!;
     const prep = await prepareOk(projectId, cycleInstanceId);

     const saveSpy = vi.spyOn(oa.executionContractServices.contracts, "save");
     const hdBefore = await oa.decisionServices.decisions.listByProject(projectId);
+    const inspBefore =
+      await oa.executionContractServices.inspectionAttestations.listByContract(
+        prep.contract.executionContractId,
+      );
+    const attemptsBefore =
+      await oa.executionAttemptServices!.listExecutionAttempts.execute({
+        executionContractId: prep.contract.executionContractId,
+      });

     const continuity = await readCurrentGovernedExecutionContinuity({
       oa,
@@ -414,6 +533,19 @@
     expect(saveSpy).not.toHaveBeenCalled();
     const hdAfter = await oa.decisionServices.decisions.listByProject(projectId);
     expect(hdAfter.length).toBe(hdBefore.length);
+    const inspAfter =
+      await oa.executionContractServices.inspectionAttestations.listByContract(
+        prep.contract.executionContractId,
+      );
+    expect(inspAfter.length).toBe(inspBefore.length);
+    const attemptsAfter =
+      await oa.executionAttemptServices!.listExecutionAttempts.execute({
+        executionContractId: prep.contract.executionContractId,
+      });
+    expect(attemptsAfter.ok).toBe(true);
+    if (attemptsBefore.ok && attemptsAfter.ok) {
+      expect(attemptsAfter.attempts.length).toBe(attemptsBefore.attempts.length);
+    }
     saveSpy.mockRestore();
   });
 });
```

### `p5.s03.pilotExecutionPresentation.d0.test.ts.diff`

```diff
--- .tmp-sfia-review/pass02-baseline/projects_sfia-studio_app___tests___pre-m6-product-ui_p5.s03.pilotExecutionPresentation.d0.test.ts	2026-10-17 13:54:29
+++ projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.pilotExecutionPresentation.d0.test.ts	2026-10-17 13:56:25
@@ -159,7 +159,7 @@
     expect(view.cta.kind === "execute").toBe(false);
   });

-  it("insufficient inspection disables CTA (fail closed)", () => {
+  it("insufficient inspection → Inspect CTA (Confirm not enabled)", () => {
     const view = presentPilotExecution({
       continuityProjection: {
         ok: true,
@@ -174,10 +174,25 @@
       }),
     });
     expect(view.status).toBe("a_confirmer");
-    expect(view.cta.kind === "confirm" && view.cta.enabled).toBe(false);
-    expect(view.attentionNote).toMatch(/Inspection insuffisante/);
+    expect(view.cta.kind).toBe("inspect");
+    expect(view.cta.kind === "inspect" && view.cta.enabled).toBe(true);
+    expect(view.attentionNote).toMatch(/Inspection suffisante requise/);
   });

+  it("R1 UI01 — projection EC id alone never enables Confirm/Execute", () => {
+    const view = presentPilotExecution({
+      continuityProjection: {
+        ok: true,
+        projection: baseProjection({
+          executionContractStatus: "confirmation_required",
+        }),
+      },
+      preExecutionContinuity: null,
+    });
+    expect(view.cta.kind).toBe("none");
+    expect(view.attentionNote).toMatch(/identifiant de contrat seul|Continuité/i);
+  });
+
   it("RUNNING → En cours, no Exécuter", () => {
     const view = presentPilotExecution({
       continuityProjection: {
```

### `p6.o1.executionWorkPresentation.d0.test.ts.diff`

```diff
--- .tmp-sfia-review/pass02-baseline/projects_sfia-studio_app___tests___pre-m6-product-ui_p6.o1.executionWorkPresentation.d0.test.ts	2026-10-17 13:54:29
+++ projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.o1.executionWorkPresentation.d0.test.ts	2026-10-17 13:56:32
@@ -138,7 +138,10 @@
     expect(labels.some((l) => /Action prévue dans la portée/.test(l))).toBe(
       false,
     );
-    expect(view.decisionRef === undefined || true).toBe(true);
+    // Presentation DTO does not invent a decisionRef field.
+    expect(
+      Object.prototype.hasOwnProperty.call(view, "decisionRef"),
+    ).toBe(false);
   });

   it("B10 — no inventable details → honest incomplete label", () => {
```

### `p5.s03.durableExecutionActionContinuity.ui.test.tsx` (diff vs HEAD — inclut Pass 02)

```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.durableExecutionActionContinuity.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.durableExecutionActionContinuity.ui.test.tsx
index 7c69d8f3..dd40b1c2 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.durableExecutionActionContinuity.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.durableExecutionActionContinuity.ui.test.tsx
@@ -211,6 +211,8 @@ describe("P5-S03 CP01 durable execution action continuity", () => {
       projectId: "prj:cp01",
       executionContractId: "xct:cp01",
     });
+    // R1 — Confirm must not record inspection as a side effect.
+    expect(inspectMock).not.toHaveBeenCalled();
     expect(reconcileMock).not.toHaveBeenCalled();
     expect(authorizeMock).not.toHaveBeenCalled();
     // Canonical reread after confirm (≥ initial load + post-confirm).
@@ -327,7 +329,7 @@ describe("P5-S03 CP01 durable execution action continuity", () => {
     expect(reconcileMock).not.toHaveBeenCalled();
   });

-  it("E5 — insufficient inspection disables confirm CTA", async () => {
+  it("E5 — insufficient inspection → Inspect CTA; Confirm click never attests", async () => {
     deriveContinuityMock.mockResolvedValue({
       ok: true,
       projection: projection(),
@@ -346,15 +348,52 @@ describe("P5-S03 CP01 durable execution action continuity", () => {
       />,
     );
     await waitFor(() => {
-      expect(screen.getByTestId("project-execution-confirm")).toBeTruthy();
+      expect(screen.getByTestId("project-execution-inspect")).toBeTruthy();
     });
-    expect(
-      (screen.getByTestId("project-execution-confirm") as HTMLButtonElement)
-        .disabled,
-    ).toBe(true);
+    expect(screen.queryByTestId("project-execution-confirm")).toBeNull();
+    expect(screen.queryByTestId("project-execution-execute")).toBeNull();
     expect(screen.getByTestId("project-execution-attention").textContent).toMatch(
-      /Inspection insuffisante/,
+      /Inspection suffisante requise/,
+    );
+
+    fireEvent.click(screen.getByTestId("project-execution-inspect"));
+    await waitFor(() => {
+      expect(inspectMock).toHaveBeenCalledTimes(1);
+    });
+    expect(inspectMock).toHaveBeenCalledWith(
+      expect.objectContaining({
+        projectId: "prj:cp01",
+        executionContractId: "xct:cp01",
+        expectedVersion: 1,
+        inspectedFacts: expect.arrayContaining([
+          "action",
+          "semanticFingerprint",
+          "inputs.targetPath",
+        ]),
+      }),
+    );
+    expect(confirmMock).not.toHaveBeenCalled();
+  });
+
+  it("UI01 — projection EC id without active pre → no Confirm/Execute", async () => {
+    deriveContinuityMock.mockResolvedValue({
+      ok: true,
+      projection: projection(),
+    });
+    readCurrentContinuityMock.mockResolvedValue({ ok: true, kind: "none" });
+
+    render(
+      <ExecutionSurface
+        projectId="prj:cp01"
+        onReturnToConversation={vi.fn()}
+      />,
     );
+    await waitFor(() => {
+      expect(screen.getByTestId("project-execution-attention")).toBeTruthy();
+    });
+    expect(screen.queryByTestId("project-execution-confirm")).toBeNull();
+    expect(screen.queryByTestId("project-execution-execute")).toBeNull();
+    expect(screen.queryByTestId("project-execution-inspect")).toBeNull();
   });

   it("E6 — RUNNING / terminal: no Exécuter", async () => {
```

### Nouveau test intégral — `p6.r02.actionAvailability.d0.test.ts`

```typescript
/**
 * STUDIO-P6-EXECUTION-CONVERGENCE-REGULARIZATION-02 — R1 action availability.
 * Deterministic presenter + currentness honesty (ZERO REAL).
 */
import { describe, expect, it } from "vitest";
import type { GovernedExecutionContinuityProjection } from "@/features/project-assistant/w2/deriveGovernedExecutionContinuityProjection";
import {
  presentPilotExecution,
} from "@/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation";
import { presentCurrentness } from "@/features/pre-m6-product-ui/workspaceContextPresentation";

function baseProjection(
  overrides: Partial<GovernedExecutionContinuityProjection> = {},
): GovernedExecutionContinuityProjection {
  return {
    projectId: "prj:r02",
    activeCycleInstanceId: "cyc:1",
    executionContractId: "xct:1",
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
    context: null,
    ...overrides,
  };
}

function activePre(args: {
  status: "confirmation_required" | "confirmed" | "validated";
  inspectionSufficient: boolean;
  version?: number;
  fingerprint?: string;
  inspectionFingerprint?: string;
  attestedVersion?: number | null;
  reinspectionRequired?: boolean;
}) {
  const version = args.version ?? 1;
  const fp = args.fingerprint ?? "fp";
  return {
    ok: true as const,
    kind: "active" as const,
    decisionRef: null as string | null,
    contract: {
      executionContractId: "xct:1",
      version,
      status: args.status,
      action: "cursor.docs_write.apply",
      target: "workspace.isolated.docs_write",
      scope: "studio.gcec.docs_write",
      requiredAuthority: "N2",
      constraints: [] as const,
      stopConditions: [] as const,
      requiredCapabilities: [] as const,
      reversibility: "reversible" as const,
      semanticFingerprint: fp,
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
        evidenceRequirements: [] as const,
        requiredAuthority: "N2",
        requiredCapabilities: [] as const,
        constraints: [] as const,
        stopConditions: [] as const,
        reversibility: "reversible" as const,
        contractVersion: version,
        executionContractId: "xct:1",
        semanticFingerprint: fp,
        disclosureComplete: true,
        incompletenessCode: null,
      },
    },
    inspection: {
      executionContractId: "xct:1",
      contractVersion: version,
      semanticFingerprint: args.inspectionFingerprint ?? fp,
      statusLabel: (args.inspectionSufficient
        ? "INSPECTÉ"
        : "NON INSPECTÉ") as "INSPECTÉ" | "NON INSPECTÉ",
      inspectionSufficient: args.inspectionSufficient,
      attestationRef: args.inspectionSufficient ? "att:1" : null,
      attestedVersion:
        args.attestedVersion !== undefined
          ? args.attestedVersion
          : args.inspectionSufficient
            ? version
            : null,
      staleAttestationRef: null,
      reinspectionRequired: args.reinspectionRequired ?? !args.inspectionSufficient,
      reason: (args.inspectionSufficient
        ? "inspected"
        : "no_attestation") as "inspected" | "no_attestation",
      grantsAuthority: false as const,
    },
  };
}

describe("P6 R02 — action availability / currentness", () => {
  it("UI01 — EC id alone → no Confirm/Execute/Inspect", () => {
    const view = presentPilotExecution({
      continuityProjection: { ok: true, projection: baseProjection() },
      preExecutionContinuity: null,
    });
    expect(view.cta.kind).toBe("none");
  });

  it("UI02 — pre continuity failure → no premature action", () => {
    const view = presentPilotExecution({
      continuityProjection: { ok: true, projection: baseProjection() },
      preExecutionContinuity: {
        ok: false,
        code: "MATERIALITY_CURRENTNESS_STALE",
        message: "stale",
      },
    });
    expect(view.cta.kind).toBe("none");
    expect(view.attentionNote).toMatch(/refusée|MATERIALITY_CURRENTNESS_STALE/);
  });

  it("UI03 — kind=none → no premature action", () => {
    const view = presentPilotExecution({
      continuityProjection: { ok: true, projection: baseProjection() },
      preExecutionContinuity: { ok: true, kind: "none" },
    });
    expect(view.cta.kind).toBe("none");
  });

  it("UI04 — active + inspection insufficient → Inspect, not Confirm enabled", () => {
    const view = presentPilotExecution({
      continuityProjection: { ok: true, projection: baseProjection() },
      preExecutionContinuity: activePre({
        status: "confirmation_required",
        inspectionSufficient: false,
      }),
    });
    expect(view.cta.kind).toBe("inspect");
    expect(view.cta.kind === "inspect" && view.cta.enabled).toBe(true);
  });

  it("UI05 — active + inspection sufficient → Confirm enabled", () => {
    const view = presentPilotExecution({
      continuityProjection: { ok: true, projection: baseProjection() },
      preExecutionContinuity: activePre({
        status: "confirmation_required",
        inspectionSufficient: true,
      }),
    });
    expect(view.cta.kind).toBe("confirm");
    expect(view.cta.kind === "confirm" && view.cta.enabled).toBe(true);
  });

  it("UI06 — fingerprint drift → reinspect, Confirm not enabled", () => {
    const view = presentPilotExecution({
      continuityProjection: { ok: true, projection: baseProjection() },
      preExecutionContinuity: activePre({
        status: "confirmation_required",
        inspectionSufficient: true,
        fingerprint: "fp-new",
        inspectionFingerprint: "fp-old",
        reinspectionRequired: true,
      }),
    });
    expect(view.cta.kind).toBe("inspect");
    expect(view.attentionNote).toMatch(/empreinte|réinspection/i);
  });

  it("UI09 — confirmed ≠ authorized execute without inspection", () => {
    const view = presentPilotExecution({
      continuityProjection: {
        ok: true,
        projection: baseProjection({
          executionContractStatus: "confirmed",
        }),
      },
      preExecutionContinuity: activePre({
        status: "confirmed",
        inspectionSufficient: false,
      }),
    });
    expect(view.cta.kind).toBe("inspect");
    expect(view.cta.kind === "execute").toBe(false);
  });

  it("UI10 — terminal stage → no Confirm/Execute", () => {
    const view = presentPilotExecution({
      continuityProjection: {
        ok: true,
        projection: baseProjection({
          stage: "POST_EVIDENCE_COMPLETE",
          attemptId: "att:1",
          attemptStatus: "succeeded",
          evidenceId: "ev:1",
          postEvidencePresent: true,
          productOutcome: "PASS",
        }),
      },
      preExecutionContinuity: { ok: true, kind: "none" },
    });
    expect(view.status).toBe("terminee");
    expect(view.cta.kind).not.toBe("confirm");
    expect(view.cta.kind).not.toBe("execute");
    expect(view.cta.kind).not.toBe("inspect");
  });

  it("R3 C4/C7 — lifecycle unavailable never claims À jour", () => {
    const cur = presentCurrentness({
      transcriptAvailability: "available",
      stateVersion: 3,
      updatedAt: "2026-10-17T10:00:00.000Z",
      lifecycleProjectionAvailability: "unavailable",
    });
    expect(cur.label).not.toBe("À jour");
    expect(cur.tone).toBe("warn");
  });

  it("R3 C3 pending — not presented as À jour", () => {
    const cur = presentCurrentness({
      transcriptAvailability: "available",
      stateVersion: 3,
      lifecycleProjectionAvailability: "pending",
    });
    expect(cur.label).toBe("Lecture en cours");
  });
});
```

## 13. Régularisation handoff parent — mocks UI Delivery (manquaient dans 02c50190)

Diffs vs HEAD des patches UI mock lifecycle projection (Delivery A+B / tests associés) :

```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/automaticProjectResume.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/automaticProjectResume.ui.test.tsx
index 9d20de26..5fce798b 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/automaticProjectResume.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/automaticProjectResume.ui.test.tsx
@@ -69,7 +69,10 @@ vi.mock("@/features/project-assistant/actions", () => ({
     messages: [],
     journal: { cycleInstanceId: null, entries: [] },
   })),
-  projectAssistantPilotLifecycleProjection: vi.fn(),
+  projectAssistantPilotLifecycleProjection: vi.fn().mockResolvedValue({
+    ok: true,
+    projection: null,
+  }),
   projectAssistantActiveCycleWorkspaceAction: vi.fn().mockResolvedValue({
     ok: true,
     cycleTypeId: null,
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s01.workspaceLayout.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s01.workspaceLayout.ui.test.tsx
index bc8d2b53..7e6ff8b6 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s01.workspaceLayout.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s01.workspaceLayout.ui.test.tsx
@@ -101,7 +101,10 @@ vi.mock("@/features/project-assistant/actions", () => ({
   }),
   projectAssistantConfirmReservationResolutionAction: vi.fn(),
   projectAssistantDeferReservationAction: vi.fn(),
-  projectAssistantPilotLifecycleProjection: vi.fn(),
+  projectAssistantPilotLifecycleProjection: vi.fn().mockResolvedValue({
+    ok: true,
+    projection: null,
+  }),
   projectAssistantPilotLifecycleAction: vi.fn(),
   projectAssistantRecordObligationPolicyAction: vi.fn(),
   projectAssistantCompleteTrajectoryStepAction: vi.fn(),
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.objectNativeViews.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.objectNativeViews.ui.test.tsx
index ebb52c07..7cb88470 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.objectNativeViews.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.objectNativeViews.ui.test.tsx
@@ -69,7 +69,10 @@ vi.mock("@/features/project-assistant/actions", () => ({
   }),
   projectAssistantConfirmReservationResolutionAction: vi.fn(),
   projectAssistantDeferReservationAction: vi.fn(),
-  projectAssistantPilotLifecycleProjection: vi.fn(),
+  projectAssistantPilotLifecycleProjection: vi.fn().mockResolvedValue({
+    ok: true,
+    projection: null,
+  }),
   projectAssistantPilotLifecycleAction: vi.fn(),
   projectAssistantRecordObligationPolicyAction: vi.fn(),
   projectAssistantCompleteTrajectoryStepAction: vi.fn(),
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s04.synthesesSurface.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s04.synthesesSurface.ui.test.tsx
index 6fe8d0ad..aca5c02b 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s04.synthesesSurface.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s04.synthesesSurface.ui.test.tsx
@@ -116,7 +116,10 @@ vi.mock("@/features/project-assistant/actions", () => ({
   }),
   projectAssistantConfirmReservationResolutionAction: vi.fn(),
   projectAssistantDeferReservationAction: vi.fn(),
-  projectAssistantPilotLifecycleProjection: vi.fn(),
+  projectAssistantPilotLifecycleProjection: vi.fn().mockResolvedValue({
+    ok: true,
+    projection: null,
+  }),
   projectAssistantPilotLifecycleAction: vi.fn(),
   projectAssistantRecordObligationPolicyAction: vi.fn(),
   projectAssistantCompleteTrajectoryStepAction: vi.fn(),
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s07.journalPrincipalView.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s07.journalPrincipalView.ui.test.tsx
index 0ae1ef17..3730d256 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s07.journalPrincipalView.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s07.journalPrincipalView.ui.test.tsx
@@ -71,7 +71,10 @@ vi.mock("@/features/project-assistant/actions", () => ({
   }),
   projectAssistantConfirmReservationResolutionAction: vi.fn(),
   projectAssistantDeferReservationAction: vi.fn(),
-  projectAssistantPilotLifecycleProjection: vi.fn(),
+  projectAssistantPilotLifecycleProjection: vi.fn().mockResolvedValue({
+    ok: true,
+    projection: null,
+  }),
   projectAssistantPilotLifecycleAction: vi.fn(),
   projectAssistantRecordObligationPolicyAction: vi.fn(),
   projectAssistantCompleteTrajectoryStepAction: vi.fn(),
```

## 14. Absence d’effets interdits

- Aucun commit/push/PR Product
- Aucune mutation HQA
- Aucun Cursor REAL
- Aucune HumanDecision / ExecutionAttempt artificielle introduite par Pass 02
- Aucune exécution Confirm/Execute Product runtime

---

## 15. Verdict

**REGULARIZATION COMPLETE — DETERMINISTIC PASS — VISUAL NOT PROVEN — READY FOR CHATGPT REVIEW**

INSTRUCTION CHATGPT : lire ce handoff au SHA distant vérifié après publication L3.
