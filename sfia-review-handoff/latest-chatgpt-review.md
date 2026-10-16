# SFIA Studio — Inspection Binding + HumanDecision–Mission Convergent Delivery — Review Pack FULL

- **Horodatage** : 2026-10-16T13:23:03+0200 (Europe/Paris)
- **GO Morris** : GENERIC EXECUTION — INSPECTION BINDING + HUMANDECISION–MISSION CONVERGENT DELIVERY
- **Cycle** : 8 — Delivery / CRITICAL / EVOL
- **Capacité** : V3-F05 · V3-F11 / V3-F12 / V3-F14
- **CKC** : ckc:studio:delivery
- **Mutations Product locales** : OUI (binding A) — **aucun commit/push/PR Product**
- **Handoff prior** : `f73130cea83d59606f3a76f205f06945a734d80e` / `212658371ae6f7388edd91ab7b256ee64645d242`

## 1. Verdict

**INSPECTION BINDING — DETERMINISTIC PASS**

**HUMANDECISION–MISSION — MORRIS DESIGN DECISION REQUIRED**

**END-TO-END PRODUCT CONTINUITY — EXIT PROOF MISSING** (E4–E8 not claimed)

**LOCAL CANDIDATE PRESERVED**

Anti-claims : PRODUCT GIT INTEGRATED · PR READY · READY FOR REAL · HUMAN QA PASS · P6 GLOBAL PASS · RUNTIME V3 ADOPTED — **NON**.

## 2. Git Truth

| Check | Valeur |
| --- | --- |
| origin/main | `896ff59c704bfa76df1da1a51705aaf948c1cf0c` MATCH `896ff59c` |
| Candidat HEAD | `b4c1d86211d372f7b0685be7ce8a5ba7de598e37` |
| Candidat branch | `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` |
| Path | `/Users/morris/Projects/sfia-workspace-docs-generic-execution-nora-tool-invocation-20261016` |
| Dirty | Delivery D-ER-16…19 + Project-scoped Select + **ce slice binding** |
| Runtime :3020 | untouched |
| Aucun reset/stash/clean/rebase Product | OUI |

### Status

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
?? projects/sfia-studio/app/__tests__/project-assistant/p6.inspectionBindingSelect.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.projectScopedCursorSelection.d0.test.ts

```

## 3. Convergence Pre-check

| Item | État |
| --- | --- |
| Project-scoped Select/Start/Result Fake | DETERMINISTICALLY PROVEN (prior) |
| Binding strict Select | **DETERMINISTICALLY PROVEN** (ce cycle) |
| HD–mission resume | **NOT PROVEN** — Decision Pack (ci-dessous) |
| Retour Product/Nora complet | **NOT PROVEN** |
| SP-A/SP-B | NON ROUVERTS |

## 4. Sources

Template · routing · guardrails · Build Doctrine · Roadmap · C1 · P2/P6 · Architecture D-ER · Doctrine 30/32/34/35/37 · CKC Delivery · Handoff `f73130ce` · code W2/OA Decision/EC.

## 5. Bloc A — Inspection binding (IMPLÉMENTÉ)

### CURRENT (bug)

Si version **OU** fingerprint manquait, Select lisait l'attestation et **remplaçait les deux** valeurs — écrasement possible d'une moitié explicite.

### TARGET (livré)

| Règle | Comportement |
| --- | --- |
| A1 | Les deux absents → attestation durable si suffisante/CURRENT |
| A2 | Les deux présents → conserver ; authorize valide (jamais overwrite) |
| A3/A4 | Version XOR fingerprint → `BINDING_INCOMPLETE` |
| A5–A7 | Pair explicite invalide/contradictoire → refuse via authorize (`FINGERPRINT_MISMATCH` / …) |
| A8/A9 | Attestation absente/stale → `INSPECTION_REQUIRED` / `INSPECTION_STALE` |
| A12 | Aucune auto-inspection |
| A13 | Binding ≠ autorisation |

### Helper + call site (sections courantes)

```typescript
type StampedSelectInspectionBinding =
  | {
      readonly ok: true;
      readonly expectedVersion: number;
      readonly expectedSemanticFingerprint: string;
      /** How the binding was obtained — never an authorization act. */
      readonly provenance: "caller_explicit" | "durable_attestation";
    }
  | { readonly ok: false; readonly code: string; readonly message: string };

/**
 * Resolve G-D4 inspection binding for stamped Generic Select.
 *
 * A1 — both absent → durable attestation if sufficient/current.
 * A2 — both present → keep caller values (never overwrite); authorize validates.
 * A3/A4 — version XOR fingerprint → BINDING_INCOMPLETE.
 * A8/A9 — missing/stale attestation when fallback needed → refuse.
 * A12 — never records inspection.
 * A13 — binding resolution ≠ authorization (caller still evaluates AUTHORIZED).
 */
async function resolveStampedSelectInspectionBinding(input: {
  readonly oa: RuntimeOaStack;
  readonly executionContractId: string;
  readonly expectedVersion?: number;
  readonly expectedSemanticFingerprint?: string;
}): Promise<StampedSelectInspectionBinding> {
  const hasVersion =
    typeof input.expectedVersion === "number" &&
    Number.isFinite(input.expectedVersion);
  const fpRaw =
    typeof input.expectedSemanticFingerprint === "string"
      ? input.expectedSemanticFingerprint.trim()
      : "";
  const hasFingerprint = fpRaw.length > 0;

  if (hasVersion !== hasFingerprint) {
    return {
      ok: false,
      code: "BINDING_INCOMPLETE",
      message: hasVersion
        ? "Fingerprint d'inspection requis avec la version explicite — binding partiel refusé."
        : "Version d'inspection requise avec le fingerprint explicite — binding partiel refusé.",
    };
  }

  if (hasVersion && hasFingerprint) {
    // A2 — preserve explicit pair. Do not replace from attestation.
    // Validity (A5–A7 / mismatch / stale) is enforced by evaluateExecutionAuthorization.
    return {
      ok: true,
      expectedVersion: input.expectedVersion as number,
      expectedSemanticFingerprint: fpRaw,
      provenance: "caller_explicit",
    };
  }

  // A1 — both absent: server-owned durable attestation only.
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
  if (inspection.reinspectionRequired) {
    return {
      ok: false,
      code: "INSPECTION_STALE",
      message:
        "Attestation d'inspection obsolète ou réinspection requise — Select refusé.",
    };
  }
  if (!inspection.inspectionSufficient || inspection.attestedVersion == null) {
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
  return {
    ok: true,
    expectedVersion: inspection.attestedVersion,
    expectedSemanticFingerprint: attestedFp,
    provenance: "durable_attestation",
  };
}

```

Call site Select :

```typescript
    });
  }

  // G-D4 — stamped Generic materiality contracts require version/fingerprint
  // binding at Select revalidation. Explicit values are NEVER overwritten by
  // attestation fallback. Partial binding (version XOR fingerprint) fails closed.
  const stampedMateriality = materialityFromContractConstraints(
    contract.constraints,
  );
  let expectedVersion = input.expectedVersion;
  let expectedSemanticFingerprint = input.expectedSemanticFingerprint;
  if (stampedMateriality != null) {
    const binding = await resolveStampedSelectInspectionBinding({
      oa: input.oa,
      executionContractId: contract.executionContractId,
      expectedVersion: input.expectedVersion,
      expectedSemanticFingerprint: input.expectedSemanticFingerprint,
    });
    if (!binding.ok) {
      return {
        ok: false,
        code: binding.code,
        message: binding.message,
      };
    }
    expectedVersion = binding.expectedVersion;
    expectedSemanticFingerprint = binding.expectedSemanticFingerprint;
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

```

### DIFF git `governedExecuteAuthorizedContract.ts` (vs HEAD candidat)

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts b/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
index 278fec81..9e9db422 100644
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
@@ -556,6 +582,109 @@ function registerPiloteAuthority(
   });
 }

+type StampedSelectInspectionBinding =
+  | {
+      readonly ok: true;
+      readonly expectedVersion: number;
+      readonly expectedSemanticFingerprint: string;
+      /** How the binding was obtained — never an authorization act. */
+      readonly provenance: "caller_explicit" | "durable_attestation";
+    }
+  | { readonly ok: false; readonly code: string; readonly message: string };
+
+/**
+ * Resolve G-D4 inspection binding for stamped Generic Select.
+ *
+ * A1 — both absent → durable attestation if sufficient/current.
+ * A2 — both present → keep caller values (never overwrite); authorize validates.
+ * A3/A4 — version XOR fingerprint → BINDING_INCOMPLETE.
+ * A8/A9 — missing/stale attestation when fallback needed → refuse.
+ * A12 — never records inspection.
+ * A13 — binding resolution ≠ authorization (caller still evaluates AUTHORIZED).
+ */
+async function resolveStampedSelectInspectionBinding(input: {
+  readonly oa: RuntimeOaStack;
+  readonly executionContractId: string;
+  readonly expectedVersion?: number;
+  readonly expectedSemanticFingerprint?: string;
+}): Promise<StampedSelectInspectionBinding> {
+  const hasVersion =
+    typeof input.expectedVersion === "number" &&
+    Number.isFinite(input.expectedVersion);
+  const fpRaw =
+    typeof input.expectedSemanticFingerprint === "string"
+      ? input.expectedSemanticFingerprint.trim()
+      : "";
+  const hasFingerprint = fpRaw.length > 0;
+
+  if (hasVersion !== hasFingerprint) {
+    return {
+      ok: false,
+      code: "BINDING_INCOMPLETE",
+      message: hasVersion
+        ? "Fingerprint d'inspection requis avec la version explicite — binding partiel refusé."
+        : "Version d'inspection requise avec le fingerprint explicite — binding partiel refusé.",
+    };
+  }
+
+  if (hasVersion && hasFingerprint) {
+    // A2 — preserve explicit pair. Do not replace from attestation.
+    // Validity (A5–A7 / mismatch / stale) is enforced by evaluateExecutionAuthorization.
+    return {
+      ok: true,
+      expectedVersion: input.expectedVersion as number,
+      expectedSemanticFingerprint: fpRaw,
+      provenance: "caller_explicit",
+    };
+  }
+
+  // A1 — both absent: server-owned durable attestation only.
+  const inspection = await readContractInspectionState({
+    oa: input.oa,
+    executionContractId: input.executionContractId,
+  });
+  if (!inspection.ok) {
+    return {
+      ok: false,
+      code: inspection.code,
+      message: inspection.message,
+    };
+  }
+  if (inspection.reinspectionRequired) {
+    return {
+      ok: false,
+      code: "INSPECTION_STALE",
+      message:
+        "Attestation d'inspection obsolète ou réinspection requise — Select refusé.",
+    };
+  }
+  if (!inspection.inspectionSufficient || inspection.attestedVersion == null) {
+    return {
+      ok: false,
+      code: "INSPECTION_REQUIRED",
+      message:
+        "Inspection Pilote suffisante requise avant Select (contrat matérialité stampé).",
+    };
+  }
+  const attestedFp =
+    inspection.attestedSemanticFingerprint?.trim() ||
+    inspection.semanticFingerprint?.trim();
+  if (!attestedFp) {
+    return {
+      ok: false,
+      code: "EXPECTED_FINGERPRINT_REQUIRED",
+      message:
+        "Empreinte sémantique d'inspection absente — Select refusé (fail-closed).",
+    };
+  }
+  return {
+    ok: true,
+    expectedVersion: inspection.attestedVersion,
+    expectedSemanticFingerprint: attestedFp,
+    provenance: "durable_attestation",
+  };
+}
+
 /** Phase 1 — SelectExecutionAgent → accepted (fresh AUTHORIZED required). */
 export async function governedExecuteSelectAgent(
   input: GovernedExecuteAuthorizedContractInput,
@@ -596,11 +725,39 @@ export async function governedExecuteSelectAgent(
     });
   }

+  // G-D4 — stamped Generic materiality contracts require version/fingerprint
+  // binding at Select revalidation. Explicit values are NEVER overwritten by
+  // attestation fallback. Partial binding (version XOR fingerprint) fails closed.
+  const stampedMateriality = materialityFromContractConstraints(
+    contract.constraints,
+  );
+  let expectedVersion = input.expectedVersion;
+  let expectedSemanticFingerprint = input.expectedSemanticFingerprint;
+  if (stampedMateriality != null) {
+    const binding = await resolveStampedSelectInspectionBinding({
+      oa: input.oa,
+      executionContractId: contract.executionContractId,
+      expectedVersion: input.expectedVersion,
+      expectedSemanticFingerprint: input.expectedSemanticFingerprint,
+    });
+    if (!binding.ok) {
+      return {
+        ok: false,
+        code: binding.code,
+        message: binding.message,
+      };
+    }
+    expectedVersion = binding.expectedVersion;
+    expectedSemanticFingerprint = binding.expectedSemanticFingerprint;
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
@@ -644,9 +801,13 @@ export async function governedExecuteSelectAgent(
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

## 6. Preuves I1–I13

Suite : `p6.inspectionBindingSelect.d0.test.ts` — **12 PASS** (I9/I10 combinés).

| ID | Résultat | Assertion |
| --- | --- | --- |
| I1 | PASS | aucun param + attestation → Select accepted |
| I2 | PASS | pair explicite valide → Select accepted |
| I3 | PASS | version seule → `BINDING_INCOMPLETE`, 0 Attempt |
| I4 | PASS | fingerprint seul → `BINDING_INCOMPLETE` |
| I5 | PASS | fausse version seule → `BINDING_INCOMPLETE` (pas d'overwrite) |
| I6 | PASS | faux fingerprint seul → `BINDING_INCOMPLETE` |
| I7 | PASS | pair contradictoire → mismatch refuse, 0 Attempt |
| I8 | PASS | sans inspect → refuse, 0 Attempt |
| I9/I10 | PASS | amend → refuse sur binding stale, 0 Attempt |
| I11 | PASS | Confirm + authorize + Select via attestation |
| I12/I13 | PASS | refus partiel : 0 Attempt, 0 HD créée |
| static | PASS | OR-gate overwrite absent ; `BINDING_INCOMPLETE` présent |

Fake / REAL : Fake Cursor only.

## 7. Bloc B — HumanDecision–mission — DECISION PACK (STOP)

### Constats (fichier:ligne / contrat)

1. `prepareGenericExecutionContractDraft.ts` — `decisionRefs: []` hard-wired (~780) ; structural → `STRUCTURAL_HUMAN_DECISION_REQUIRED` sans reprise.
2. `solicitGenericExecutionPrepare` — **aucun** input `decisionId` / HD acceptée.
3. `pendingGenericPrepareOfferStore` — offer process-local (`offerFingerprint` / `missionKey`) — **B14** : pas d'autorité durable.
4. OA `HumanDecision.subject: string` + `decisionBasis?: DecisionBasis` existent et sont durables.
5. `DecisionBasisSourceType` = `proposal | trajectory_option | candidate_trajectory | work_recommendation` — **pas** de source « generic_mission ».
6. `prepareExecutionContractFromW2Decision` lie HD→EC via DecisionBasis trajectoire — chemin **distinct**, non générique Nora.
7. `assertDecisionRefsAdmissibleForConfirm` : empty refs interdits si stamp structural/unknown — donc une reprise structurale **exige** des decisionRefs non vides, mais le Generic path ne sait pas les peupler correctement aujourd'hui.

```text

export type DecisionBasisSourceType =
  | "proposal" | "trajectory_option" | "candidate_trajectory" | "work_recommendation";
// Generic mission is NOT a DecisionBasisSourceType.
// prepareGenericExecutionContractDraft hard-wires decisionRefs: [].
// solicitGeneric has no decisionId / accepted HD resume input.
// pendingGenericPrepareOfferStore is process-local (not durable authority).

```

### Lacune précise

Impossible de représenter une liaison sûre Generic **mission structurante ↔ HD acceptée ↔ decisionRefs ↔ même identité de mission/effets/scope** sans choisir :

- un **subject / DecisionBasisSourceType** générique (nouvelle convention) ; et/ou
- un mécanisme durable de reprise post-arbitrage (au-delà de l'offer process-local) ; et/ou
- une règle Product adoptée pour peupler `decisionRefs` sur Generic PREPARE.

Cela constitue une **nouvelle décision structurante** — hors GO (« ne constitue PAS une adoption du modèle précis HD–mission »).

### Options (minimales — non choisies)

| Option | Description | Persistence | Risque |
| --- | --- | --- | --- |
| O1 | Étendre DecisionBasisSourceType + prepare Generic avec decisionId | Probable schema/basis | Élevé sans gate |
| O2 | Subject = `missionKey` hash + decisionRefs=[hdId] sans nouveau sourceType | Faible schema | Ambiguïté subject/collision |
| O3 | Différer ; conserver fail-closed structural | Aucune | Dette continue |

### Recommandation (non adoptée)

**O3 court terme** + gate Morris pour O1/O2 avec contrat subject/effets/supersession explicite.

### Gate Morris requis

**M-HD-01** — Modèle HD–mission Generic (subject, DecisionBasis, decisionRefs, currentness, supersession, reprise sans offer process-local).

**Aucune implémentation B ce cycle.**

## 8. Bloc C — Continuité E1–E8

| Niveau | Statut | Preuve |
| --- | --- | --- |
| E1 Select | PASS Fake | Project-scoped + I1/I2 |
| E2 Start | PASS Fake | Project-scoped S1 |
| E3 Result (OA Attempt succeeded) | PASS Fake | settleDeterministicProductCursorSuccess |
| E4 CursorExecutionReport accepté | OPEN / PARTIAL | Non revendiqué end-to-end Generic sans cycle |
| E5 Evidence | OPEN | Non prouvé ce cycle |
| E6 ReviewBundle | OPEN | Non prouvé ce cycle |
| E7 Product Resolution | OPEN | Non prouvé ce cycle |
| E8 Retour Nora | OPEN | Non prouvé ce cycle |

**END-TO-END PRODUCT CONTINUITY — EXIT PROOF MISSING** (honnête).

## 9. Validations

| Suite | Résultat |
| --- | --- |
| inspectionBinding + projectScoped + der16 + w3a + productGenericCursor | **84 PASS** |
| tsc --noEmit | PASS |
| npm run build | PASS |

## 10. Fake / Real

LOCAL DETERMINISTIC DELIVERY PROOF sur binding + Select/Start/Result Fake.
Cursor REAL / OpenAI LIVE / READY FOR REAL — **NON**.

## 11. Dette / exit

| Dette | Propriétaire | Exit |
| --- | --- | --- |
| HD–mission Generic resume | Morris M-HD-01 | Modèle adopté + Delivery |
| Carrier OA `standard` | Product/OA | Évolution enum si Morris |
| F2/ACGC admissions | Option B later | Preuve transfert |
| `cycleInstanceId ?? ""` Start | OA Attempt | Adaptation cycle optionnel |
| E4–E8 Product/Nora | Product continuity | GO aval borné |

## 12. FICHIER DE TEST NOUVEAU COMPLET

`projects/sfia-studio/app/__tests__/project-assistant/p6.inspectionBindingSelect.d0.test.ts`

```typescript
/**
 * P6 — G-D4 Select inspection binding (R1).
 *
 * Proves stamped Generic Select never overwrites an explicit binding half,
 * refuses partial/contradictory pairs, and resolves from durable attestation
 * only when BOTH version and fingerprint are absent.
 *
 * Fake Cursor boundary only — ZERO Cursor REAL / OpenAI LIVE.
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import path from "node:path";
import { governedExecuteSelectAgent } from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
import { solicitGenericExecutionPrepare } from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { authorizeGenericPreparedContract } from "@/features/project-assistant/w2/authorizeGenericPreparedContract";
import { amendExecutionContractWithConstraint } from "@/features/project-assistant/w2/amendExecutionContract";
import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import { STUDIO_CURSOR_GENERALIST_AGENT_ID } from "@/lib/oa/execution-attempt";
import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";

const APP = path.resolve(__dirname, "../..");

describe("P6 Select inspection binding (R1)", () => {
  let runtime: RuntimeApplicationService;
  let sessionDbPath: string;
  let previousMorris: string | undefined;
  let previousDetPin: string | undefined;

  beforeEach(() => {
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousDetPin = process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = W2_TEST_PINNED_BASE_HEAD_SHA;
    sessionDbPath = tempProductDbPath("p6-ibind.sqlite");
    runtime = bootW2Runtime({
      productDbPath: sessionDbPath,
      idPrefix: "ibind",
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

  async function seedProject(suffix: string) {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: `IBIND ${suffix}`,
      objective: "Inspection binding Select",
      context: "det ibind",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `IB${suffix.toUpperCase().slice(0, 6)}`,
      idempotencyKey: `idem:ibind-${suffix}`,
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
    const identity = `acme/ibind-${suffix}`;
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
    return { projectId, oa };
  }

  async function prepareInspectAuthorize(suffix: string) {
    const { projectId, oa } = await seedProject(suffix);
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: `Mission binding ${suffix}`,
        expectedOutcome: "Résultat",
        scope: "projects/demo/src",
      },
      sessionDbPath,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    if (!prep.ok) throw new Error(`prep ${prep.code}`);
    const inspected = await inspectExecutionContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
    });
    if (!inspected.ok) throw new Error(`inspect ${inspected.message}`);
    const authorized = await authorizeGenericPreparedContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      expectedVersion: inspected.contractVersion,
      expectedSemanticFingerprint: inspected.semanticFingerprint,
      forceLocalAuthority: true,
    });
    if (!authorized.ok) throw new Error(`auth ${authorized.code}`);
    return { projectId, oa, prep, inspected, authorized };
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

  it("static — partial binding no longer triggers attestation overwrite of the other half", () => {
    const src = readFileSync(
      path.join(
        APP,
        "features/project-assistant/w2/governedExecuteAuthorizedContract.ts",
      ),
      "utf8",
    );
    expect(src).toMatch(/BINDING_INCOMPLETE/);
    expect(src).toMatch(/resolveStampedSelectInspectionBinding/);
    expect(src).toMatch(/caller_explicit/);
    expect(src).toMatch(/durable_attestation/);
    // Old OR-gate that overwrote both when either half missing must be gone.
    expect(src).not.toMatch(
      /typeof expectedVersion !== "number"[\s\S]*\|\|[\s\S]*!expectedSemanticFingerprint\.trim\(\)/,
    );
  });

  it("I1 — no params + valid durable attestation → Select accepted", async () => {
    const ctx = await prepareInspectAuthorize("i1");
    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.prep.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) throw new Error(selected.message);
    expect(selected.selectedAgentRef).toBe(STUDIO_CURSOR_GENERALIST_AGENT_ID);
  });

  it("I2 — both explicit valid params → Select accepted (no overwrite path)", async () => {
    const ctx = await prepareInspectAuthorize("i2");
    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.prep.executionContractId,
      forceLocalAuthority: true,
      expectedVersion: ctx.inspected.contractVersion,
      expectedSemanticFingerprint: ctx.inspected.semanticFingerprint,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) throw new Error(selected.message);
    expect(selected.selectedAgentRef).toBe(STUDIO_CURSOR_GENERALIST_AGENT_ID);
  });

  it("I3 — version only → BINDING_INCOMPLETE, no Attempt", async () => {
    const ctx = await prepareInspectAuthorize("i3");
    const before = await countAttempts(ctx.oa, ctx.projectId);
    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.prep.executionContractId,
      forceLocalAuthority: true,
      expectedVersion: ctx.inspected.contractVersion,
    });
    expect(selected.ok).toBe(false);
    if (selected.ok) throw new Error("expected refuse");
    expect(selected.code).toBe("BINDING_INCOMPLETE");
    expect(await countAttempts(ctx.oa, ctx.projectId)).toBe(before);
  });

  it("I4 — fingerprint only → BINDING_INCOMPLETE, no Attempt", async () => {
    const ctx = await prepareInspectAuthorize("i4");
    const before = await countAttempts(ctx.oa, ctx.projectId);
    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.prep.executionContractId,
      forceLocalAuthority: true,
      expectedSemanticFingerprint: ctx.inspected.semanticFingerprint,
    });
    expect(selected.ok).toBe(false);
    if (selected.ok) throw new Error("expected refuse");
    expect(selected.code).toBe("BINDING_INCOMPLETE");
    expect(await countAttempts(ctx.oa, ctx.projectId)).toBe(before);
  });

  it("I5 — false version + fingerprint absent → BINDING_INCOMPLETE (no attestation overwrite)", async () => {
    const ctx = await prepareInspectAuthorize("i5");
    const before = await countAttempts(ctx.oa, ctx.projectId);
    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.prep.executionContractId,
      forceLocalAuthority: true,
      expectedVersion: 999_999,
    });
    expect(selected.ok).toBe(false);
    if (selected.ok) throw new Error("expected refuse");
    expect(selected.code).toBe("BINDING_INCOMPLETE");
    expect(await countAttempts(ctx.oa, ctx.projectId)).toBe(before);
  });

  it("I6 — false fingerprint + version absent → BINDING_INCOMPLETE", async () => {
    const ctx = await prepareInspectAuthorize("i6");
    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.prep.executionContractId,
      forceLocalAuthority: true,
      expectedSemanticFingerprint: "sha256:deadbeef".padEnd(71, "0"),
    });
    expect(selected.ok).toBe(false);
    if (selected.ok) throw new Error("expected refuse");
    expect(selected.code).toBe("BINDING_INCOMPLETE");
  });

  it("I7 — contradictory explicit pair → refuse (mismatch), no Attempt", async () => {
    const ctx = await prepareInspectAuthorize("i7");
    const before = await countAttempts(ctx.oa, ctx.projectId);
    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.prep.executionContractId,
      forceLocalAuthority: true,
      expectedVersion: ctx.inspected.contractVersion,
      expectedSemanticFingerprint: "sha256:deadbeef".padEnd(71, "0"),
    });
    expect(selected.ok).toBe(false);
    if (selected.ok) throw new Error("expected refuse");
    expect(
      selected.code === "FINGERPRINT_MISMATCH" ||
        selected.code === "VERSION_MISMATCH" ||
        selected.code === "NOT_AUTHORIZED",
    ).toBe(true);
    expect(await countAttempts(ctx.oa, ctx.projectId)).toBe(before);
  });

  it("I8 — attestation absent (no inspect) → INSPECTION_REQUIRED, no Attempt", async () => {
    const { projectId, oa } = await seedProject("i8");
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Mission sans inspection",
        expectedOutcome: "n/a",
        scope: "projects/demo/src",
      },
      sessionDbPath,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    if (!prep.ok) throw new Error(prep.message);
    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(false);
    if (selected.ok) throw new Error("expected refuse");
    expect(
      selected.code === "INSPECTION_REQUIRED" ||
        selected.code === "EXPECTED_VERSION_REQUIRED" ||
        selected.code === "NOT_AUTHORIZED",
    ).toBe(true);
    expect(await countAttempts(oa, projectId)).toBe(0);
  });

  it("I9/I10 — amended contract → reinspection / binding refuse, no Attempt", async () => {
    const ctx = await prepareInspectAuthorize("i10");
    const amended = await amendExecutionContractWithConstraint({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.prep.executionContractId,
      additionalConstraint: "AMEND_TEST_BINDING_STALE",
      forceLocalAuthority: true,
    });
    expect(amended.ok).toBe(true);
    if (!amended.ok) throw new Error(amended.message);
    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: amended.successor.executionContractId,
      forceLocalAuthority: true,
      expectedVersion: ctx.inspected.contractVersion,
      expectedSemanticFingerprint: ctx.inspected.semanticFingerprint,
    });
    expect(selected.ok).toBe(false);
    if (selected.ok) throw new Error("expected refuse");
    expect(await countAttempts(ctx.oa, ctx.projectId)).toBe(0);
  });

  it("I11 — Confirm may bump version; attested binding still Select-valid via I1 path", async () => {
    const { projectId, oa } = await seedProject("i11");
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Mission confirm binding",
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
    // Confirm when required (status confirmation_required) then authorize.
    const live = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    if (!live.ok) throw new Error("get");
    if (live.contract.status === "confirmation_required") {
      const confirmed = await confirmExecutionContractForAuthorization({
        oa,
        projectId,
        executionContractId: prep.executionContractId,
        forceLocalAuthority: true,
      });
      expect(confirmed.ok).toBe(true);
    }
    const authorized = await authorizeGenericPreparedContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      expectedVersion: inspected.contractVersion,
      expectedSemanticFingerprint: inspected.semanticFingerprint,
      forceLocalAuthority: true,
    });
    // Authorize binds to inspected version/fp (attested survives Confirm).
    expect(authorized.ok).toBe(true);
    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) throw new Error(selected.message);
  });

  it("I12/I13 — refused partial binding creates neither Attempt nor HumanDecision", async () => {
    const ctx = await prepareInspectAuthorize("i12");
    const hdBefore = (
      await ctx.oa.decisionServices.decisions.listByProject(ctx.projectId)
    ).length;
    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.prep.executionContractId,
      forceLocalAuthority: true,
      expectedVersion: ctx.inspected.contractVersion,
    });
    expect(selected.ok).toBe(false);
    if (selected.ok) throw new Error("expected refuse");
    expect(selected.code).toBe("BINDING_INCOMPLETE");
    expect(await countAttempts(ctx.oa, ctx.projectId)).toBe(0);
    expect(
      (await ctx.oa.decisionServices.decisions.listByProject(ctx.projectId))
        .length,
    ).toBe(hdBefore);
  });
});

```

## 13. Instruction ChatGPT

Lire : `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`

**SFIA STUDIO — GENERIC EXECUTION CONVERGENT DELIVERY CRITICAL CODE REVIEW.**

Vérifier en priorité :
- binding explicite non écrasé (A2–A4) ;
- HD existante **non** liée génériquement (Decision Pack honnête) ;
- aucune décision fabriquée ;
- autorité/Confirmation préservées ;
- Project/cycle/profile indépendance conservée ;
- pas d'architecture parallèle ;
- E1–E3 vs E4–E8 non fusionnés ;
- Review Pack complet ;
- zéro intégration Git Product.

## 14. Git Truth final (pré-publish)

HEAD `b4c1d86211d372f7b0685be7ce8a5ba7de598e37` · branch `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` · origin/main `896ff59c704bfa76df1da1a51705aaf948c1cf0c` · dirty préservé · binding A seul ajout Product ce cycle.
