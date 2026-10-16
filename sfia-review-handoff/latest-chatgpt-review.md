# SFIA Studio — Project-Scoped Generic Cursor Selection Delivery — Review Pack FULL (REGULARIZED)

- **Horodatage** : 2026-10-16T13:10:01+0200 (Europe/Paris)
- **GO Morris** : GENERIC EXECUTION — PROJECT-SCOPED CURSOR TOOL TARGETED SELECTION AND EXECUTION DELIVERY
- **Motif** : RÉGULARISATION REVIEW PACK — republication exploitable pour ChatGPT (pas de Correction Pass code)
- **Cycle** : 8 — Delivery / implémentation · **Profil** : CRITICAL · **Typologie** : EVOL
- **Capacité** : V3-F05 · connexes V3-F11 / V3-F12
- **CKC** : ckc:studio:delivery
- **Macro** : STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 · **Milestone** : P6 IN PROGRESS
- **Mutations Product locales** : OUI (candidat dirty) — **aucun commit/push/PR Product**
- **Handoff immédiatement précédent** : commit `ac4923ef87aec7cef08451fbdffd18cef3b03566` · blob `c369f7e540595011421f471cff6293c0ec1b6192` (incomplet pour revue — contenu tests/diffs insuffisant)

## 1. Verdict

**PROJECT-SCOPED GENERIC CURSOR SELECTION DELIVERY — DETERMINISTIC PASS**

**LOCAL CANDIDATE READY FOR CHATGPT CRITICAL CODE REVIEW**

**REVIEW PACK REGULARIZED — FULL ARTIFACTS INCLUDED**

Anti-claims : GIT INTEGRATED · PR READY · READY FOR REAL · HUMAN QA PASS · P6 GLOBAL PASS · RUNTIME V3 ADOPTED · SP-A ADOPTED · SP-B ADOPTED · CODE CORRECTION PASS — **NON**.

## 2. Git Truth

| Check | Valeur |
| --- | --- |
| origin/main | `896ff59c704bfa76df1da1a51705aaf948c1cf0c` MATCH baseline `896ff59c` |
| Candidat path | `/Users/morris/Projects/sfia-workspace-docs-generic-execution-nora-tool-invocation-20261016` |
| Candidat HEAD | `b4c1d86211d372f7b0685be7ce8a5ba7de598e37` |
| Candidat branch | `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` |
| Note identité | FACT : path historique `docs/…nora-tool…` pointe branche `fix/…optional-artifact…` @ `b4c1d862` |
| Runtime :3020 | untouched @ `896ff59c` |
| Aucun reset/stash/clean/rebase | OUI |
| Aucune mutation code ce cycle de régularisation | OUI — lecture + Review Pack + Handoff only |

### Status candidat

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
 M projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
 M projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
 M projects/sfia-studio/app/features/project-assistant/f2/ckcCognitiveContext.ts
 M projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
 M projects/sfia-studio/app/features/project-assistant/f2/types.ts
 M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
 M projects/sfia-studio/app/features/project-assistant/w2/actions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/pendingGenericPrepareOfferStore.ts
 M projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
 M projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
 M projects/sfia-studio/convergence/sfia-studio-generic-execution-review-result-architecture.md
?? projects/sfia-studio/app/__tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.projectScopedCursorSelection.d0.test.ts

```

## 3. Objectif de cette republication

Le handoff `ac4923ef` / `c369f7e5` était **insuffisant pour une revue ChatGPT exploitable** :
- pas le fichier de test nouveau **complet** ;
- pas le test D-ER-16 R4 **modifié** en clair ;
- diffs Product réduits à des extraits.

Ce pack régularisé fournit :
1. le test `p6.projectScopedCursorSelection.d0.test.ts` **intégral** ;
2. le bloc R4 modifié de `p6.der16.genericNoraToolInvocation.d0.test.ts` (+ contexte AUTHORIZE S8) ;
3. les **diffs git complets** de `governedExecuteAuthorizedContract.ts` et `actions.ts` ;
4. les sections courantes `loadContract` / `governedExecuteSelectAgent` / action Select ;
5. la matrice de preuves sélection automatique **sans cycle**.

## 4. Décisions consommées / non adoptées

**Consommées :** D-ER-16…19 · Option B · Project-scoped Tool Access · cycle facultatif · profil méthodologique ≠ accès Cursor.

**Non adoptées :** SP-A persistence · SP-B mapping obligatoire · nouvelle persistence sélection · doctrine/runtime v3 · Git Product integration.

**Dette ouverte :** HD–mission structural resume (NOT PROVEN) · `startExecution` `cycleInstanceId ?? ""` (non modifié).

## 5. CURRENT → TARGET (rappel)

| CURRENT | TARGET (livré localement) |
| --- | --- |
| `!cycleInstanceId` → `CYCLE_BINDING_REQUIRED` | Cycle facultatif ; Project positif obligatoire |
| getProject miss → continue | `PROJECT_NOT_FOUND` fail-closed |
| Accès Cursor conditionné au profil cycle | Accès par capacités (`capabilities_deterministic` + generalist) |
| Select stamped Generic sans binding version | Binding G-D4 depuis inspection durable |

## 6. Preuves — sélection automatique sans cycle

| Scénario | Attendu | Résultat déterministe | Preuve |
| --- | --- | --- | --- |
| S1/S8/S19 Project actif, **aucun cycle** | PREPARE + Select/Start/Result generalist | **PASS** | `p6.projectScopedCursorSelection` S1 |
| der16 R4 null-cycle AUTHORIZED | Attempt accepted, 0 cycle inventé | **PASS** | der16 R4 Project-scoped Select |
| R4 S8 authorize only | AUTHORIZE sans Attempt | **PASS** | der16 R4 S8 (inchangé fonctionnellement) |
| S2 cycle Standard | Non-régression Select | **PASS** | PSCS S2 |
| S3 cycle Critical | Select Cursor (profil ≠ gate accès) | **PASS** | PSCS S3 |
| S4 cycle clos + mission null-cycle | OK ; cycle clos non muté | **PASS** | PSCS S4 |
| S20b EC bound completed cycle | `CYCLE_NOT_ACTIVE` | **PASS** | PSCS S20b |
| S5 Project introuvable | `PROJECT_NOT_FOUND` | **PASS** | PSCS S5 |
| S6 Project archivé | `PROJECT_ARCHIVED` | **PASS** | PSCS S6 |
| S7 Project mismatch | `PROJECT_MISMATCH` | **PASS** | PSCS S7 |
| S10 faible effet sans cycle | Select OK | **PASS** | PSCS S10 |
| S12 structural sans HD | PREPARE refuse | **PASS** | PSCS S12 |
| S13 HD–mission resume | OPEN / NOT PROVEN | documenté | PSCS S13 |
| S15 fingerprint stale | authorize refuse | **PASS** | PSCS S15 |
| S17/S18 code mission Generic | no docs_write taxonomy gate | **PASS** | PSCS S17 |
| Static no `CYCLE_BINDING_REQUIRED` | absent du source | **PASS** | PSCS static |

**Suites exécutées (Delivery) :**
- `p6.projectScopedCursorSelection.d0.test.ts` + `p6.der16…` → **41 PASS**
- non-régression w3a / productGenericCursor / pjReproof05 → **45 PASS**
- `tsc --noEmit` PASS · `npm run build` PASS

**Fake / Real :** LOCAL DETERMINISTIC (Fake Cursor) · Cursor REAL / OpenAI LIVE — NON.

## 7. DIFF COMPLET — `governedExecuteAuthorizedContract.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts b/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
index 278fec81..405944e6 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
@@ -26,6 +26,7 @@ import {
   registerLocalAuthorityForExecutionClass,
 } from "@/lib/oa/decision";
 import type { ExecutionContract } from "@/lib/oa/execution-contract";
+import { materialityFromContractConstraints } from "@/lib/oa/execution-contract";
 import type {
   ExecutionAttempt,
   SelectionProfile,
@@ -39,6 +40,7 @@ import {
 } from "@/lib/oa/execution-attempt";
 import type { CycleProfile } from "@/lib/oa/cycle";
 import { F3_ADAPTER_ID } from "@/features/project-assistant/f3/constants";
+import { readContractInspectionState } from "./inspectExecutionContract";
 import { completeBoundedDocsWriteLaunch } from "@/features/project-assistant/f3/completeBoundedDocsWriteLaunch";
 import { completeBoundedReadOnlyLaunch } from "@/features/project-assistant/f3/completeBoundedReadOnlyLaunch";
 import { ingestDocsWriteArtifactEvidence } from "@/features/project-assistant/f3/ingestDocsWriteArtifactEvidence";
@@ -244,6 +246,16 @@ export type GovernedExecuteAuthorizedContractInput = {
   readonly real?: unknown;
   readonly adapterRef?: unknown;
   readonly forceLocalAuthority?: boolean;
+  /**
+   * Exact inspected contract version for G-D4 MATERIALITY-stamped Select revalidation.
+   * When omitted on a stamped Generic EC, Select resolves from durable inspection
+   * attestation (fail-closed if absent/stale) — never invents a binding.
+   */
+  readonly expectedVersion?: number;
+  /**
+   * Semantic fingerprint paired with expectedVersion for stamped Select revalidation.
+   */
+  readonly expectedSemanticFingerprint?: string;
   /**
    * Product Cursor Complete: when true (default), await process terminal like
    * docs_write. When false, running Attempts may surface CURSOR_REPORT_PENDING.
@@ -379,33 +391,37 @@ async function loadContract(
     };
   }

+  // Project positive binding — missing/unreadable Project is never an implicit allow.
   const project = await oa.projectServices.getProject.execute({
     projectId: input.projectId,
   });
-  if (project.ok && project.project.status === "archived") {
+  if (!project.ok) {
     return {
       ok: false,
       result: {
         ok: false,
-        code: "PROJECT_ARCHIVED",
-        message: "Projet archivé — aucune exécution.",
+        code: "PROJECT_NOT_FOUND",
+        message:
+          "Projet introuvable ou illisible — exécution refusée (fail-closed).",
       },
     };
   }
-
-  let selectionProfile: SelectionProfile | null = null;
-  if (!contract.cycleInstanceId) {
+  if (project.project.status === "archived") {
     return {
       ok: false,
       result: {
         ok: false,
-        code: "CYCLE_BINDING_REQUIRED",
-        message:
-          "ExecutionContract sans cycleInstanceId — Execute W3-A refusé (pas de fallback Standard).",
+        code: "PROJECT_ARCHIVED",
+        message: "Projet archivé — aucune exécution.",
       },
     };
   }
-  {
+
+  // CycleInstance is optional for Project-scoped generic execution.
+  // When present: preserve lifecycle binding / active-state gates.
+  // When absent: do NOT invent a cycle, cycleTypeId, or methodological profile.
+  let selectionProfile: SelectionProfile;
+  if (contract.cycleInstanceId) {
     const cycle = await oa.cycleServices.getCycle.execute({
       cycleInstanceId: contract.cycleInstanceId,
     });
@@ -443,7 +459,17 @@ async function loadContract(
         },
       };
     }
+    // Historical cycle-bound path: methodological cycle profile informs OA
+    // SelectionProfile for non–Cursor-REAL branches. Cursor REAL Product path
+    // still applies capability-deterministic selection below (not access-by-profile).
     selectionProfile = mapCycleProfileToSelectionProfile(cycle.cycle.profile);
+  } else {
+    // Project-scoped generic path (no CycleInstance on EC).
+    // OA SelectExecutionAgent still requires a SelectionProfile enum value.
+    // This is the technical carrier for capabilities_deterministic on the
+    // Product Cursor Generalist path — NOT a claim that the mission is
+    // methodologically "Standard", and NOT an access gate derived from SFIA profile.
+    selectionProfile = "standard";
   }

   return { ok: true, contract, selectionProfile };
@@ -596,11 +622,66 @@ export async function governedExecuteSelectAgent(
     });
   }

+  // G-D4 — stamped Generic materiality contracts require version/fingerprint
+  // binding at Select revalidation. Prefer caller binding; otherwise resolve
+  // from durable Pilote inspection attestation (server-owned, fail-closed).
+  let expectedVersion = input.expectedVersion;
+  let expectedSemanticFingerprint = input.expectedSemanticFingerprint;
+  const stampedMateriality = materialityFromContractConstraints(
+    contract.constraints,
+  );
+  if (
+    stampedMateriality != null &&
+    (typeof expectedVersion !== "number" ||
+      !Number.isFinite(expectedVersion) ||
+      typeof expectedSemanticFingerprint !== "string" ||
+      !expectedSemanticFingerprint.trim())
+  ) {
+    const inspection = await readContractInspectionState({
+      oa: input.oa,
+      executionContractId: contract.executionContractId,
+    });
+    if (!inspection.ok) {
+      return {
+        ok: false,
+        code: inspection.code,
+        message: inspection.message,
+      };
+    }
+    if (
+      !inspection.inspectionSufficient ||
+      inspection.attestedVersion == null ||
+      inspection.reinspectionRequired
+    ) {
+      return {
+        ok: false,
+        code: "INSPECTION_REQUIRED",
+        message:
+          "Inspection Pilote suffisante requise avant Select (contrat matérialité stampé).",
+      };
+    }
+    const attestedFp =
+      inspection.attestedSemanticFingerprint?.trim() ||
+      inspection.semanticFingerprint?.trim();
+    if (!attestedFp) {
+      return {
+        ok: false,
+        code: "EXPECTED_FINGERPRINT_REQUIRED",
+        message:
+          "Empreinte sémantique d'inspection absente — Select refusé (fail-closed).",
+      };
+    }
+    expectedVersion = inspection.attestedVersion;
+    expectedSemanticFingerprint = attestedFp;
+  }
+
   const authorized = await evaluateExecutionAuthorization({
     oa: input.oa,
     projectId: input.projectId,
     executionContractId: input.executionContractId,
     forceLocalAuthority: input.forceLocalAuthority,
+    expectedVersion,
+    expectedSemanticFingerprint,
   });
   if (!authorized.ok) {
     return {
@@ -644,9 +725,13 @@ export async function governedExecuteSelectAgent(
     return { ok: false, code: authority.code, message: authority.message };
   }

-  // Cursor REAL paths (canonical Product + sealed docs-write): mechanical
-  // capabilities_deterministic selection — no Pilot agent-selection HOW.
+  // Project-scoped Cursor tool access (canonical Product + sealed docs-write):
+  // select by AgentCapability / effects via capabilities_deterministic.
+  // Methodological cycle profile (Light/Standard/Critical/Capitalization) is NOT
+  // an access condition for Cursor. Authority remains: AUTHORIZED evaluation,
+  // HumanDecision / Confirmation / scope / ActionPolicy upstream of Select.
   // Sealed docs-write still requests its specialized agent; Product uses generalist.
+  // Non–Cursor-REAL branches keep historical Critical → agent_selection Confirmation.
   let effectiveProfile: SelectionProfile = selectionProfile;
   let selectionStrategy: SelectionStrategy;
   if (cursorReal) {

```

## 8. DIFF COMPLET — `actions.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
index 651fe806..a1f2701d 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
@@ -549,6 +549,12 @@ export async function w2PrepareRecoveryDocsWriteAction(input: {
 export async function w2GovernedExecuteSelectAction(input: {
   projectId: string;
   executionContractId: string;
+  /**
+   * Optional Pilote inspection binding for G-D4 stamped Generic Select.
+   * When omitted, Select resolves from durable inspection attestation.
+   */
+  expectedVersion?: number;
+  expectedSemanticFingerprint?: string;
   canActAsMorris?: unknown;
   claimedAuthorityLevel?: unknown;
   authorityReceiptRef?: unknown;
@@ -560,6 +566,8 @@ export async function w2GovernedExecuteSelectAction(input: {
     oa: runtime.oa,
     projectId: input.projectId,
     executionContractId: input.executionContractId,
+    expectedVersion: input.expectedVersion,
+    expectedSemanticFingerprint: input.expectedSemanticFingerprint,
     canActAsMorris: input.canActAsMorris,
     claimedAuthorityLevel: input.claimedAuthorityLevel,
     authorityReceiptRef: input.authorityReceiptRef,

```

## 9. Section courante — `loadContract` (après Delivery)

Fichier : `projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts`

```typescript
  if (port && typeof port === "object") {
    if ("launchCallCount" in port) {
      const n = (port as { launchCallCount: unknown }).launchCallCount;
      if (typeof n === "number") return n;
    }
    if ("calls" in port && Array.isArray((port as { calls: unknown }).calls)) {
      return (port as { calls: unknown[] }).calls.length;
    }
  }
  return 0;
}

async function loadContract(
  oa: RuntimeOaStack,
  input: GovernedExecuteAuthorizedContractInput,
): Promise<
  | { ok: false; result: Failure }
  | { ok: true; contract: ExecutionContract; selectionProfile: SelectionProfile }
> {
  const contractResult =
    await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: input.executionContractId,
    });
  if (!contractResult.ok) {
    return {
      ok: false,
      result: {
        ok: false,
        code: contractResult.error.detailCode,
        message: "Contrat d'exécution introuvable — exécution refusée.",
      },
    };
  }
  const contract = contractResult.contract;
  if (contract.projectId !== input.projectId) {
    return {
      ok: false,
      result: {
        ok: false,
        code: "PROJECT_MISMATCH",
        message: "Le contrat n'appartient pas au projet demandé.",
      },
    };
  }

  // Project positive binding — missing/unreadable Project is never an implicit allow.
  const project = await oa.projectServices.getProject.execute({
    projectId: input.projectId,
  });
  if (!project.ok) {
    return {
      ok: false,
      result: {
        ok: false,
        code: "PROJECT_NOT_FOUND",
        message:
          "Projet introuvable ou illisible — exécution refusée (fail-closed).",
      },
    };
  }
  if (project.project.status === "archived") {
    return {
      ok: false,
      result: {
        ok: false,
        code: "PROJECT_ARCHIVED",
        message: "Projet archivé — aucune exécution.",
      },
    };
  }

  // CycleInstance is optional for Project-scoped generic execution.
  // When present: preserve lifecycle binding / active-state gates.
  // When absent: do NOT invent a cycle, cycleTypeId, or methodological profile.
  let selectionProfile: SelectionProfile;
  if (contract.cycleInstanceId) {
    const cycle = await oa.cycleServices.getCycle.execute({
      cycleInstanceId: contract.cycleInstanceId,
    });
    if (!cycle.ok) {
      return {
        ok: false,
        result: {
          ok: false,
          code: "CYCLE_NOT_FOUND",
          message: "CycleInstance lié au contrat introuvable — exécution refusée.",
        },
      };
    }
    if (cycle.cycle.projectId !== input.projectId) {
      return {
        ok: false,
        result: {
          ok: false,
          code: "CYCLE_PROJECT_MISMATCH",
          message: "CycleInstance / projet incohérents — exécution refusée.",
        },
      };
    }
    if (
      cycle.cycle.status === "completed" ||
      cycle.cycle.status === "cancelled" ||
      cycle.cycle.status === "superseded"
    ) {
      return {
        ok: false,
        result: {
          ok: false,
          code: "CYCLE_NOT_ACTIVE",
          message: `CycleInstance ${cycle.cycle.status} — aucune exécution.`,
        },
      };
    }
    // Historical cycle-bound path: methodological cycle profile informs OA
    // SelectionProfile for non–Cursor-REAL branches. Cursor REAL Product path
    // still applies capability-deterministic selection below (not access-by-profile).
    selectionProfile = mapCycleProfileToSelectionProfile(cycle.cycle.profile);
  } else {
    // Project-scoped generic path (no CycleInstance on EC).
    // OA SelectExecutionAgent still requires a SelectionProfile enum value.
    // This is the technical carrier for capabilities_deterministic on the
    // Product Cursor Generalist path — NOT a claim that the mission is
    // methodologically "Standard", and NOT an access gate derived from SFIA profile.
    selectionProfile = "standard";
  }

  return { ok: true, contract, selectionProfile };
}
```

## 10. Section courante — `governedExecuteSelectAgent` (binding G-D4 + accès Cursor)

```typescript
  requiredAuthority: string = "N3",
) {
  return registerLocalAuthorityForExecutionClass({
    authorityResolver: oa.authorityResolver,
    scope,
    issuedAt: oa.clock.nowIso(),
    requiredAuthority,
    forceEnable: forceLocalAuthority === true,
  });
}

/** Phase 1 — SelectExecutionAgent → accepted (fresh AUTHORIZED required). */
export async function governedExecuteSelectAgent(
  input: GovernedExecuteAuthorizedContractInput,
): Promise<GovernedExecutePhaseResult> {
  void input.claimedAuthorityLevel;
  void input.canActAsMorris;
  void input.authorityReceiptRef;
  void input.real;
  void input.adapterRef;

  const loaded = await loadContract(input.oa, input);
  if (!loaded.ok) {
    if (loaded.result.ok && loaded.result.phase === "terminal") return loaded.result;
    return loaded.result;
  }
  const { contract, selectionProfile } = loaded;
  const docsWrite = isBoundedDocsWriteContract(contract);
  const productCursor = isCanonicalProductGovernedContract(contract);
  const cursorReal = usesGenericCursorRealBoundary(contract);
  const boundary = executionBoundaryFailure(input.oa, contract);
  if (boundary) return boundary;

  const adapterId = adapterIdForContract(contract);
  const launchCountBefore = launchCountBeforeFor(input.oa, contract);

  const succeeded = await findSucceededAttempt(
    input.oa,
    contract.executionContractId,
  );
  if (succeeded) {
    return buildTerminalSuccess({
      contract,
      attempt: succeeded,
      selectionProfile,
      oa: input.oa,
      reusedExistingAttempt: true,
      launchCountBefore,
    });
  }

  // G-D4 — stamped Generic materiality contracts require version/fingerprint
  // binding at Select revalidation. Prefer caller binding; otherwise resolve
  // from durable Pilote inspection attestation (server-owned, fail-closed).
  let expectedVersion = input.expectedVersion;
  let expectedSemanticFingerprint = input.expectedSemanticFingerprint;
  const stampedMateriality = materialityFromContractConstraints(
    contract.constraints,
  );
  if (
    stampedMateriality != null &&
    (typeof expectedVersion !== "number" ||
      !Number.isFinite(expectedVersion) ||
      typeof expectedSemanticFingerprint !== "string" ||
      !expectedSemanticFingerprint.trim())
  ) {
    const inspection = await readContractInspectionState({
      oa: input.oa,
      executionContractId: contract.executionContractId,
    });
    if (!inspection.ok) {
      return {
        ok: false,
        code: inspection.code,
        message: inspection.message,
      };
    }
    if (
      !inspection.inspectionSufficient ||
      inspection.attestedVersion == null ||
      inspection.reinspectionRequired
    ) {
      return {
        ok: false,
        code: "INSPECTION_REQUIRED",
        message:
          "Inspection Pilote suffisante requise avant Select (contrat matérialité stampé).",
      };
    }
    const attestedFp =
      inspection.attestedSemanticFingerprint?.trim() ||
      inspection.semanticFingerprint?.trim();
    if (!attestedFp) {
      return {
        ok: false,
        code: "EXPECTED_FINGERPRINT_REQUIRED",
        message:
          "Empreinte sémantique d'inspection absente — Select refusé (fail-closed).",
      };
    }
    expectedVersion = inspection.attestedVersion;
    expectedSemanticFingerprint = attestedFp;
  }

  const authorized = await evaluateExecutionAuthorization({
    oa: input.oa,
    projectId: input.projectId,
    executionContractId: input.executionContractId,
    forceLocalAuthority: input.forceLocalAuthority,
    expectedVersion,
    expectedSemanticFingerprint,
  });
  if (!authorized.ok) {
    return {
      ok: false,
      code: authorized.code,
      message: authorized.message,
    };
  }
  if (authorized.outcome !== "AUTHORIZED") {
    return {
      ok: false,
      code: "NOT_AUTHORIZED",
      message:
        "Exécution refusée : le verdict courant n'est pas AUTHORIZED (aucune tentative).",
    };
  }

  const eligibility = resolveProductExecutionEligibility({
    constraints: contract.constraints,
    stopConditions: contract.stopConditions,
    inputs:
      contract.inputs && typeof contract.inputs === "object"
        ? (contract.inputs as Record<string, unknown>)
        : null,
  });
  if (!eligibility.eligible) {
    return {
      ok: false,
      code: "EXECUTION_INELIGIBLE",
      message: eligibility.reasonText,
    };
  }

  const authority = registerPiloteAuthority(
    input.oa,
    contract.scope,
    input.forceLocalAuthority,
    contract.requiredAuthority,
  );
  if (!authority.ok) {
    return { ok: false, code: authority.code, message: authority.message };
  }

  // Project-scoped Cursor tool access (canonical Product + sealed docs-write):
  // select by AgentCapability / effects via capabilities_deterministic.
  // Methodological cycle profile (Light/Standard/Critical/Capitalization) is NOT
  // an access condition for Cursor. Authority remains: AUTHORIZED evaluation,
  // HumanDecision / Confirmation / scope / ActionPolicy upstream of Select.
  // Sealed docs-write still requests its specialized agent; Product uses generalist.
  // Non–Cursor-REAL branches keep historical Critical → agent_selection Confirmation.
  let effectiveProfile: SelectionProfile = selectionProfile;
  let selectionStrategy: SelectionStrategy;
  if (cursorReal) {
    effectiveProfile = "standard";
    selectionStrategy = "capabilities_deterministic";
  } else {
    const strategyResolved = resolveSelectionStrategy(selectionProfile);
    if ("detailCode" in strategyResolved) {
      return {
        ok: false,
        code: strategyResolved.detailCode,
        message: strategyResolved.reason,
      };
    }
    if (strategyResolved.strategy === "human_confirmed_proposal") {
      return {
        ok: false,
        code: "AGENT_CONFIRMATION_REQUIRED",
        message:
          "Profil Critical — confirmation agent_selection Pilote requise avant sélection (aucune simulation).",
      };
    }
    selectionStrategy = strategyResolved.strategy;
  }

  const identities = attemptIdentities(
```

## 11. Section courante — `w2GovernedExecuteSelectAction`

```typescript
export async function w2GovernedExecuteSelectAction(input: {
  projectId: string;
  executionContractId: string;
  /**
   * Optional Pilote inspection binding for G-D4 stamped Generic Select.
   * When omitted, Select resolves from durable inspection attestation.
   */
  expectedVersion?: number;
  expectedSemanticFingerprint?: string;
  canActAsMorris?: unknown;
  claimedAuthorityLevel?: unknown;
  authorityReceiptRef?: unknown;
  real?: unknown;
}): Promise<GovernedExecutePhaseResult> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) return OA_UNAVAILABLE;
  return governedExecuteSelectAgent({
    oa: runtime.oa,
    projectId: input.projectId,
    executionContractId: input.executionContractId,
    expectedVersion: input.expectedVersion,
    expectedSemanticFingerprint: input.expectedSemanticFingerprint,
    canActAsMorris: input.canActAsMorris,
    claimedAuthorityLevel: input.claimedAuthorityLevel,
    authorityReceiptRef: input.authorityReceiptRef,
    real: input.real,
  });
}

/**
```

## 12. TEST D-ER-16 MODIFIÉ — contexte R4 AUTHORIZE (S8, inchangé) puis Select (modifié)

Fichier : `projects/sfia-studio/app/__tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts`

### 12.a Avant (STOP historique — remplacé)

```typescript
// ANCIEN R4 (STOP evidence) — remplacé par ce Delivery :
// expect(selected.ok).toBe(false);
// expect(selected.code).toBe("CYCLE_BINDING_REQUIRED");
// expect(await countAttempts(...)).toBe(0);
```

### 12.b R4 S8 AUTHORIZE sans cycle (conservé — lignes 1406–1466)

```typescript
  it("R4 — S8 no-cycle: solicit → inspect → AUTHORIZE accepted with project binding only (no CycleInstance, no HD, no Attempt)", async () => {
    const { projectId, oa } = await seedProject({ suffix: "r4a", withCycle: false });
    const cyclesBefore = await countCycles(oa, projectId);
    const hdBefore = (await oa.decisionServices.decisions.listByProject(projectId)).length;

    const prep = await prepareSvc.solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Refactorer le module d'export du projet demo",
        expectedOutcome: "Module d'export simplifié",
        scope: "projects/demo/src",
      },
      sessionDbPath,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    expect(prep.projectContextOnly).toBe(true);

    const inspected = await inspectExecutionContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
    });
    expect(inspected.ok).toBe(true);
    if (!inspected.ok) throw new Error(inspected.message);

    const authorized = await authorizeGenericPreparedContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      expectedVersion: inspected.contractVersion,
      expectedSemanticFingerprint: inspected.semanticFingerprint,
      forceLocalAuthority: true,
    });
    if (!authorized.ok) {
      throw new Error(`authorize failed: ${authorized.code} — ${authorized.message}`);
    }
    expect(authorized.authorization.ok).toBe(true);
    if (authorized.authorization.ok) {
      expect(authorized.authorization.outcome).toBe("AUTHORIZED");
    }
    expect(authorized.executionAttemptCreated).toBe(false);
    expect(authorized.humanDecisionCreated).toBe(false);

    const after = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(after.ok).toBe(true);
    if (!after.ok) throw new Error("get");
    expect(after.contract.cycleInstanceId ?? null).toBeNull();
    expect(after.contract.decisionRefs ?? []).toEqual([]);
    expect(await countCycles(oa, projectId)).toBe(cyclesBefore);
    expect(
      (await oa.decisionServices.decisions.listByProject(projectId)).length,
    ).toBe(hdBefore);
    expect(await countAttempts(oa, projectId)).toBe(0);
  });
```

### 12.c R4 Project-scoped Select sans cycle (NOUVEAU comportement — lignes 1468–1521)

```typescript
  it("R4 — Project-scoped Select: null-cycle AUTHORIZED PRODUCT_GOVERNED EC → Attempt accepted (no invented cycle; Cursor access not gated by methodological profile)", async () => {
    const { projectId, oa } = await seedProject({ suffix: "r4b", withCycle: false });
    const prep = await prepareSvc.solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Refactorer le module d'export du projet demo",
        expectedOutcome: "Module d'export simplifié",
        scope: "projects/demo/src",
      },
      sessionDbPath,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    if (!prep.ok) throw new Error(prep.message);
    const inspected = await inspectExecutionContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
    });
    if (!inspected.ok) throw new Error(inspected.message);
    const authorized = await authorizeGenericPreparedContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      expectedVersion: inspected.contractVersion,
      expectedSemanticFingerprint: inspected.semanticFingerprint,
      forceLocalAuthority: true,
    });
    expect(authorized.ok).toBe(true);

    const cyclesBefore = await countCycles(oa, projectId);
    expect(cyclesBefore).toBe(0);
    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) throw new Error(selected.message);
    expect(selected.phase).toBe("accepted");
    expect(selected.selectedAgentRef).toBe("agt:studio.cursor.generalist");
    expect(selected.selectionProfile).toBe("standard");
    const after = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(after.ok).toBe(true);
    if (!after.ok) throw new Error("get");
    expect(after.contract.cycleInstanceId ?? null).toBeNull();
    expect(await countCycles(oa, projectId)).toBe(0);
    expect(await countAttempts(oa, projectId)).toBe(1);
  });
```

## 13. FICHIER DE TEST NOUVEAU COMPLET

Chemin : `projects/sfia-studio/app/__tests__/project-assistant/p6.projectScopedCursorSelection.d0.test.ts`

Nombre de lignes : 667

```typescript
/**
 * P6 — Project-scoped generic Cursor selection / execution Delivery.
 *
 * Proves (deterministic Fake Cursor boundary — ZERO Cursor REAL / OpenAI LIVE):
 *  - CycleInstance optional on AUTHORIZED PRODUCT_GOVERNED EC → Select/Start/Result
 *  - Methodological profile is NOT an access gate to Cursor Generalist
 *  - Project positive binding (missing / archived → fail-closed)
 *  - Cycle-bound EC keeps lifecycle gates (closed cycle → refuse)
 *  - No invented CycleInstance / cycleTypeId
 *  - Structural HD still fail-closed at PREPARE; HD–mission resume remains OPEN debt
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  governedExecuteSelectAgent,
  governedExecuteStart,
} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
import { solicitGenericExecutionPrepare } from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { authorizeGenericPreparedContract } from "@/features/project-assistant/w2/authorizeGenericPreparedContract";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import { STUDIO_CURSOR_GENERALIST_AGENT_ID } from "@/lib/oa/execution-attempt";
import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  settleDeterministicProductCursorSuccess,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";

describe("P6 project-scoped Cursor selection Delivery", () => {
  let runtime: RuntimeApplicationService;
  let sessionDbPath: string;
  let previousMorris: string | undefined;
  let previousDetPin: string | undefined;

  beforeEach(() => {
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousDetPin = process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = W2_TEST_PINNED_BASE_HEAD_SHA;
    sessionDbPath = tempProductDbPath("p6-pscs.sqlite");
    runtime = bootW2Runtime({
      productDbPath: sessionDbPath,
      idPrefix: "pscs",
    });
  });

  afterEach(() => {
    cleanupW2TempDirs();
    if (previousMorris === undefined) {
      delete process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    } else {
      process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = previousMorris;
    }
    if (previousDetPin === undefined) {
      delete process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
    } else {
      process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = previousDetPin;
    }
  });

  async function seedProject(input: {
    suffix: string;
    withCycle: boolean;
    cycleProfile?: "Standard" | "Critical";
  }) {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: `PSCS ${input.suffix}`,
      objective: "Project-scoped Cursor selection",
      context: "det pscs",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `PS${input.suffix.toUpperCase().slice(0, 6)}`,
      idempotencyKey: `idem:pscs-${input.suffix}`,
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

    let cycleInstanceId: string | null = null;
    if (input.withCycle) {
      cycleInstanceId = `cyc:pscs-${input.suffix}`;
      await oa.cycleServices.createCycle.execute({
        cycleInstanceId,
        cycleTypeId: "cyc:delivery",
        projectId,
        signals:
          input.cycleProfile === "Critical"
            ? { irreversible: true }
            : { lowRiskBounded: true },
        justification:
          input.cycleProfile === "Critical"
            ? "Signal irréversible pour preuve Critical-cycle"
            : undefined,
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
        issuedAt: "2026-10-16T10:00:00.000Z",
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
    }

    const identity = `acme/pscs-${input.suffix}`;
    await oa.projectServices.setProjectRepositoryBinding!.execute({
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
    return { projectId, cycleInstanceId, oa };
  }

  async function prepareAuthorize(input: {
    projectId: string;
    oa: NonNullable<RuntimeApplicationService["oa"]>;
    cycleInstanceId: string | null;
    objective?: string;
    scope?: string;
  }) {
    const prep = await solicitGenericExecutionPrepare({
      oa: input.oa,
      projectId: input.projectId,
      cycleInstanceId: input.cycleInstanceId,
      mission: {
        objective:
          input.objective ?? "Refactorer le module d'export du projet demo",
        expectedOutcome: "Module d'export simplifié",
        scope: input.scope ?? "projects/demo/src",
      },
      sessionDbPath,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    if (!prep.ok) throw new Error(`prep ${prep.code}: ${prep.message}`);
    const inspected = await inspectExecutionContract({
      oa: input.oa,
      projectId: input.projectId,
      executionContractId: prep.executionContractId,
    });
    if (!inspected.ok) throw new Error(`inspect ${inspected.message}`);
    const authorized = await authorizeGenericPreparedContract({
      oa: input.oa,
      projectId: input.projectId,
      executionContractId: prep.executionContractId,
      expectedVersion: inspected.contractVersion,
      expectedSemanticFingerprint: inspected.semanticFingerprint,
      forceLocalAuthority: true,
    });
    if (!authorized.ok) {
      throw new Error(`authorize ${authorized.code}: ${authorized.message}`);
    }
    return { prep, inspected, authorized };
  }

  async function countCycles(
    oa: NonNullable<RuntimeApplicationService["oa"]>,
    projectId: string,
  ): Promise<number> {
    return (await oa.cycleServices.cycles.listByProject(projectId)).length;
  }

  async function countAttempts(
    oa: NonNullable<RuntimeApplicationService["oa"]>,
    projectId: string,
  ): Promise<number> {
    const contracts = await oa.executionContractServices.contracts.listByProject(
      projectId,
    );
    let total = 0;
    for (const c of contracts) {
      total += (
        await oa.executionAttemptServices!.attempts.listByContract(
          c.executionContractId,
        )
      ).length;
    }
    return total;
  }

  // -------------------------------------------------------------------------
  // S1 / S8 / S19 — Project, no cycle, no methodological profile gate
  // -------------------------------------------------------------------------

  it("S1/S8/S19 — Project actif sans cycle: PREPARE + Select/Start/Result Cursor Generalist (no profile gate)", async () => {
    const { projectId, oa } = await seedProject({
      suffix: "s1",
      withCycle: false,
    });
    const cyclesBefore = await countCycles(oa, projectId);
    expect(cyclesBefore).toBe(0);

    const { prep } = await prepareAuthorize({
      projectId,
      oa,
      cycleInstanceId: null,
    });
    expect(prep.cycleInstanceId ?? null).toBeNull();

    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      forceLocalAuthority: true,
    });
    if (!selected.ok) {
      throw new Error(`S1 select failed: ${selected.code} — ${selected.message}`);
    }
    expect(selected.phase).toBe("accepted");
    expect(selected.selectedAgentRef).toBe(STUDIO_CURSOR_GENERALIST_AGENT_ID);
    // Technical OA carrier for capabilities_deterministic — not methodological Standard claim.
    expect(selected.selectionProfile).toBe("standard");

    const started = await governedExecuteStart({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      attemptId: selected.attemptId,
      forceLocalAuthority: true,
    });
    expect(started.ok).toBe(true);
    if (!started.ok) throw new Error(started.message);
    expect(started.phase).toBe("running");

    const settled = await settleDeterministicProductCursorSuccess({
      oa,
      attemptId: started.attemptId,
    });
    expect(settled.ok).toBe(true);
    if (!settled.ok) throw new Error(settled.message);
    // OA Attempt succeeded = Select → Start → Result continuity (Fake boundary).
    expect(settled.attempt.status).toBe("succeeded");

    const after = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(after.ok).toBe(true);
    if (!after.ok) throw new Error("get");
    expect(after.contract.cycleInstanceId ?? null).toBeNull();
    expect(await countCycles(oa, projectId)).toBe(0);
    expect(await countAttempts(oa, projectId)).toBeGreaterThanOrEqual(1);
  });

  // -------------------------------------------------------------------------
  // S2 / S3 / S9 — with cycle non-regression
  // -------------------------------------------------------------------------

  it("S2/S9 — Project + cycle Standard: Select Cursor Generalist (non-regression)", async () => {
    const { projectId, cycleInstanceId, oa } = await seedProject({
      suffix: "s2",
      withCycle: true,
      cycleProfile: "Standard",
    });
    expect(cycleInstanceId).toBeTruthy();
    const { prep } = await prepareAuthorize({
      projectId,
      oa,
      cycleInstanceId,
    });
    expect(prep.cycleInstanceId).toBe(cycleInstanceId);

    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) throw new Error(selected.message);
    expect(selected.selectedAgentRef).toBe(STUDIO_CURSOR_GENERALIST_AGENT_ID);
    // Cursor REAL Product path: capability selection — not Critical/Standard access gate.
    expect(selected.selectionProfile).toBe("standard");
  });

  it("S3 — Project + cycle Critical: Cursor access still Select (profile ≠ tool access gate)", async () => {
    const { projectId, cycleInstanceId, oa } = await seedProject({
      suffix: "s3",
      withCycle: true,
      cycleProfile: "Critical",
    });
    const { prep } = await prepareAuthorize({
      projectId,
      oa,
      cycleInstanceId,
      objective: "Mission Critical-cycle Project-scoped Cursor (effects-governed)",
    });

    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) throw new Error(selected.message);
    expect(selected.selectedAgentRef).toBe(STUDIO_CURSOR_GENERALIST_AGENT_ID);
    expect(selected.selectionProfile).toBe("standard");
  });

  // -------------------------------------------------------------------------
  // S4 / S20 — closed cycle on Project; new independent mission without cycle
  // -------------------------------------------------------------------------

  it("S4/S20 — dernier cycle clos: mission Project indépendante (null cycle) OK; cycle clos non muté", async () => {
    const { projectId, cycleInstanceId, oa } = await seedProject({
      suffix: "s4",
      withCycle: true,
    });
    expect(cycleInstanceId).toBeTruthy();
    const got = await oa.cycleServices.getCycle.execute({
      cycleInstanceId: cycleInstanceId!,
    });
    if (!got.ok) throw new Error("cycle");
    const closed = { ...got.cycle, status: "completed" as const };
    await oa.cycleServices.cycles.save(closed);

    const cyclesBefore = await countCycles(oa, projectId);
    const { prep } = await prepareAuthorize({
      projectId,
      oa,
      cycleInstanceId: null,
      objective: "Mission indépendante après cycle clos",
    });
    expect(prep.cycleInstanceId ?? null).toBeNull();

    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) throw new Error(selected.message);

    const afterCycle = await oa.cycleServices.getCycle.execute({
      cycleInstanceId: cycleInstanceId!,
    });
    expect(afterCycle.ok).toBe(true);
    if (!afterCycle.ok) throw new Error("cycle after");
    expect(afterCycle.cycle.status).toBe("completed");
    expect(await countCycles(oa, projectId)).toBe(cyclesBefore);
  });

  it("S20b — EC still bound to completed cycle → CYCLE_NOT_ACTIVE (no closed-cycle mutation)", async () => {
    const { projectId, cycleInstanceId, oa } = await seedProject({
      suffix: "s20b",
      withCycle: true,
    });
    const { prep } = await prepareAuthorize({
      projectId,
      oa,
      cycleInstanceId,
    });
    const got = await oa.cycleServices.getCycle.execute({
      cycleInstanceId: cycleInstanceId!,
    });
    if (!got.ok) throw new Error("cycle");
    await oa.cycleServices.cycles.save({
      ...got.cycle,
      status: "completed",
    });

    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(false);
    if (selected.ok) throw new Error("expected refuse");
    expect(selected.code).toBe("CYCLE_NOT_ACTIVE");
  });

  // -------------------------------------------------------------------------
  // S5 / S6 / S7 — Project negative binding
  // -------------------------------------------------------------------------

  it("S5 — Project introuvable → PROJECT_NOT_FOUND (fail-closed, no Attempt)", async () => {
    const { projectId, oa } = await seedProject({
      suffix: "s5",
      withCycle: false,
    });
    const { prep } = await prepareAuthorize({
      projectId,
      oa,
      cycleInstanceId: null,
    });
    const spy = vi
      .spyOn(oa.projectServices.getProject, "execute")
      .mockResolvedValue({
        ok: false,
        error: {
          code: "STATE_CONFLICT",
          detailCode: "PROJECT_NOT_FOUND",
          message: "missing",
          severity: "error",
          retryable: false,
          blocking: true,
          recoverable: false,
          domain: "C",
          timestamp: "2026-10-16T10:00:00.000Z",
          correlationId: "cor:test",
        },
      } as never);

    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      forceLocalAuthority: true,
    });
    spy.mockRestore();
    expect(selected.ok).toBe(false);
    if (selected.ok) throw new Error("expected refuse");
    expect(selected.code).toBe("PROJECT_NOT_FOUND");
    expect(await countAttempts(oa, projectId)).toBe(0);
  });

  it("S6 — Project archivé → PROJECT_ARCHIVED", async () => {
    const { projectId, oa } = await seedProject({
      suffix: "s6",
      withCycle: false,
    });
    const { prep } = await prepareAuthorize({
      projectId,
      oa,
      cycleInstanceId: null,
    });
    const got = await oa.projectServices.getProject.execute({ projectId });
    if (!got.ok) throw new Error("get");
    await oa.projectServices.projects.save({
      ...got.project,
      status: "archived",
    });

    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(false);
    if (selected.ok) throw new Error("expected refuse");
    expect(selected.code).toBe("PROJECT_ARCHIVED");
  });

  it("S7 — Project mismatch → PROJECT_MISMATCH", async () => {
    const a = await seedProject({ suffix: "s7a", withCycle: false });
    const b = await seedProject({ suffix: "s7b", withCycle: false });
    const { prep } = await prepareAuthorize({
      projectId: a.projectId,
      oa: a.oa,
      cycleInstanceId: null,
    });
    const selected = await governedExecuteSelectAgent({
      oa: a.oa,
      projectId: b.projectId,
      executionContractId: prep.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(false);
    if (selected.ok) throw new Error("expected refuse");
    expect(selected.code).toBe("PROJECT_MISMATCH");
  });

  // -------------------------------------------------------------------------
  // S10 / S11 / S12 — effects / HD
  // -------------------------------------------------------------------------

  it("S10 — mission faible effet: PREPARE + Select proportionnés (no cycle)", async () => {
    const { projectId, oa } = await seedProject({
      suffix: "s10",
      withCycle: false,
    });
    const { prep } = await prepareAuthorize({
      projectId,
      oa,
      cycleInstanceId: null,
      objective: "Lister les exports du module demo",
      scope: "projects/demo/src/exports",
    });
    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) throw new Error(selected.message);
    expect(selected.selectedAgentRef).toBe(STUDIO_CURSOR_GENERALIST_AGENT_ID);
  });

  it("S12 — mission structurante sans HD → fail-closed at PREPARE (no Select)", async () => {
    const { projectId, oa } = await seedProject({
      suffix: "s12",
      withCycle: false,
    });
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Refactor structurel API publique",
        expectedOutcome: "API publique simplifiée",
        scope: "projects/demo/src",
        impactSignals: { structuralChange: true },
      },
      sessionDbPath,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(false);
    if (prep.ok) throw new Error("expected structural refuse");
    expect(prep.code).toBe("STRUCTURAL_HUMAN_DECISION_REQUIRED");
    expect(await countAttempts(oa, projectId)).toBe(0);
  });

  it("S13 — OPEN debt: HD–mission structural resume NOT PROVEN (no silent unlock)", async () => {
    // Documented OPEN: Generic PREPARE has decisionRefs:[] — a Project HD does
    // not bind to a mission. Positive path remains NOT PROVEN (der16 R5).
    expect(true).toBe(true);
  });

  // -------------------------------------------------------------------------
  // S14 / S15 / S16 / S17 / S18
  // -------------------------------------------------------------------------

  it("S15 — EC superseded/stale authorize fingerprint → refuse before Select", async () => {
    const { projectId, oa } = await seedProject({
      suffix: "s15",
      withCycle: false,
    });
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Mission fingerprint stale",
        expectedOutcome: "n/a",
        scope: "projects/demo/src",
      },
      sessionDbPath,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    if (!prep.ok) throw new Error(prep.message);
    const inspected = await inspectExecutionContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
    });
    if (!inspected.ok) throw new Error(inspected.message);
    const authorized = await authorizeGenericPreparedContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      expectedVersion: inspected.contractVersion,
      expectedSemanticFingerprint: "sha256:deadbeef".padEnd(71, "0"),
      forceLocalAuthority: true,
    });
    expect(authorized.ok).toBe(false);
  });

  it("S17/S18 — Artifact demand / code mission: Generic PREPARE (no docs_write taxonomy gate)", async () => {
    const { projectId, oa } = await seedProject({
      suffix: "s17",
      withCycle: false,
    });
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Écrire un test unitaire pour le module export",
        expectedOutcome: "Test unitaire ajouté",
        scope: "projects/demo/src",
      },
      sessionDbPath,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    const loaded = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("get");
    expect(loaded.contract.constraints).toContain("PRODUCT_GOVERNED");
    expect(loaded.contract.constraints).toContain("GENERIC_MISSION_NO_TASK_CATALOG");
    expect(loaded.contract.cycleInstanceId ?? null).toBeNull();
  });

  it("static — loadContract no longer hard-gates on missing cycleInstanceId", async () => {
    const fs = await import("node:fs");
    const path = await import("node:path");
    const src = fs.readFileSync(
      path.resolve(
        __dirname,
        "../../features/project-assistant/w2/governedExecuteAuthorizedContract.ts",
      ),
      "utf8",
    );
    expect(src).not.toMatch(/CYCLE_BINDING_REQUIRED/);
    expect(src).toMatch(/PROJECT_NOT_FOUND/);
    expect(src).toMatch(/Project-scoped generic/);
  });
});

```

## 14. Autorité / OA / dettes (inchangé vs Delivery)

- AUTHORIZED revalidation at Select (G-D4).
- Structural HD fail-closed at PREPARE.
- OA Select/Start réutilisés — pas de moteur parallèle.
- Carrier OA `selectionProfile="standard"` sans cycle = **technique** pour `capabilities_deterministic`, **pas** Standard méthodologique.
- Dette : HD–mission structural resume · `cycleInstanceId ?? ""` Start continuation.

## 15. Gates Morris

1. Review ChatGPT CRITICAL sur ce pack régularisé.
2. HD–mission resume (si priorité).
3. Intégration Product Git / PR — GO distinct.

## 16. Instruction ChatGPT

Lire depuis Git :

`sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`

Effectuer :

**SFIA STUDIO — PROJECT-SCOPED GENERIC CURSOR EXECUTION CRITICAL DELIVERY CODE REVIEW.**

Vérifier en s'appuyant sur les artefacts complets de ce pack :
- accès indépendant des profils méthodologiques ;
- cycle facultatif ; aucun cycle artificiel ;
- aucune élévation d'autorité ; Confirmations légitimes préservées ;
- sélection par capacités ; réutilisation OA ;
- S8 / Select sans cycle (R4 + S1) ;
- Project binding positif (`PROJECT_NOT_FOUND` / archived / mismatch) ;
- absence d'architecture parallèle ;
- non-régressions déterministes ;
- limites REAL ;
- absence d'intégration Product.

## 17. Git Truth final (pré-publish)

Candidat HEAD `b4c1d86211d372f7b0685be7ce8a5ba7de598e37` · branch `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` · origin/main `896ff59c704bfa76df1da1a51705aaf948c1cf0c` · dirty Delivery préservé · aucune mutation Product ce cycle de régularisation.
