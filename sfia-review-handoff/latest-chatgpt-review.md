# SFIA STUDIO — Review Pack FULL — PR #585 R-CI-01
## Legacy W2 Confirm Compatibility Correction

Horodatage: 2026-10-15 16:39:19 CEST
Mode: mono-cycle
Profil: CRITICAL
CKC: ckc:studio:delivery (+ ckc:studio:qa-validation)
Cycle type: 8 — Delivery / correction INC
GO Morris: 2026-10-15 — PR #585 / R-CI-01 Legacy W2 Confirm Compatibility Correction
Gate intégration correctif: NON CONSOMMÉ
Gate merge: NON CONSOMMÉ
Aucun commit/push projet dans ce cycle.

---

## A. GO Morris consommé

GO 2026-10-15 — PR #585 / R-CI-01 Legacy W2 Confirm Compatibility Correction.

Consommé pour: analyse cause racine; correction Product locale bornée; tests déterministes; qualification régressions; Review Pack FULL; Review Handoff L3.

NON AUTORISÉ (respecté): git add projet; commit projet; amend 45dee683; push branche projet; nouvelle PR; merge #585; force push; doctrine; schéma T-A4; migration; Cursor REAL; OpenAI REAL; Human QA; promotion runtime v3.

---

## B. Cycle / profil / CKC

- Type: 8 Delivery / correction
- Profil: CRITICAL
- CKC: ckc:studio:delivery
- Guidance: ckc:studio:qa-validation
- QA: CRITICAL / DETERMINISTIC REGRESSION
- Finding: R-CI-01
- Capacité: V3-F05
- Milestone: P6 GLOBAL INTEGRATED PRODUCT QA (NOT PASSED)

Blocs: Local Git Truth; Convergence Studio; Current Product Context; HumanDecision/Confirmation; ExecutionContract; Security/Authority; Compatibility; Deterministic QA; Fake/Real; Review Pack FULL; Review Handoff L3.

---

## C. Git Truth initial

Worktree: `/Users/morris/Projects/sfia-workspace-p6-generic-exec-continuity-e7822033`

| Check | Observed |
|---|---|
| HEAD Delivery | `45dee6830ed19be8ff9a9e1c28434fcd0b8c9d02` |
| remote Delivery | `45dee6830ed19be8ff9a9e1c28434fcd0b8c9d02` |
| origin/main | `e7822033f159d6a0e9c15f6f26843bd1248edbc1` |
| remote main tip | `e7822033…` |
| Branch | `delivery/sfia-studio-p6-generic-execution-conversational-continuity` |
| Dirty initial | `.tmp-sfia-review/chatgpt-review.md` only (pack) |
| Product dirty initial | none |

Verdict Git Truth initial: **PASS** — aligné références d'entrée.

---

## D. Sources / convergence

Lus / appliqués:
- Build Doctrine / Roadmap (KEEP — non modifiés)
- C1 / P2 / P4 / P6 product-simplification
- Doctrine v3 30–36 (HumanDecision / Confirmation ≠ HD / exécution gouvernée)
- T-A4 schema + mapping (KEEP — non modifiés dans ce cycle)
- Template cycle + routing
- Handoff d'entrée: commit `1b1b0bfd` / blob `e9a342df` (CI failure R-CI-01)
- PR #585 OPEN; CI Vitest FAIL + Required Gate FAIL

Convergence pre-check:
- Legacy W2 Confirm: RESTORE
- G-D4 generic prepare / CURRENT materiality: KEEP
- Exit Proof: ancien parcours W2 Confirm valide sans bypass G-D4

---

## E. PR #585 / commit d'entrée

- PR: https://github.com/mcleland147/sfia-workspace/pull/585
- Status: OPEN — MERGE BLOCKED
- Product HEAD: `45dee6830ed19be8ff9a9e1c28434fcd0b8c9d02`
- Main: `e7822033f159d6a0e9c15f6f26843bd1248edbc1`

---

## F. CI failure d'entrée

- Run: https://github.com/mcleland147/sfia-workspace/actions/runs/38748483640
- Detect/Typecheck/Lint/Build: SUCCESS
- Vitest: FAILURE
- Required Gate: FAILURE
- Suite: `p5.s04.cp02.softFailPilotLineage.d0.test.ts`
- Helper: `authorizeAndSucceed` ~L177
- Code observé: `MATERIALITY_PRODUCT_CONTEXT_UNAVAILABLE` sur Confirm

---

## G. Reproduction locale

Commande:
```
cd projects/sfia-studio/app && npx vitest run __tests__/oa/synthesis/p5.s04.cp02.softFailPilotLineage.d0.test.ts
```

Sur HEAD `45dee683` (avant correctif):
- Test Files: 1 failed
- Tests: 13 failed | 9 passed (22)
- Assertion: `expect(confirmed.ok).toBe(true)` → received false
- Cause runtime: Confirm → `revalidateMaterialityAgainstCurrentProduct` → `MATERIALITY_PRODUCT_CONTEXT_UNAVAILABLE`

Après correctif: 22/22 PASS.

---

## H. Contrat W2 observé

Path `authorizeAndSucceed` / `prepareExecutionContractFromW2Decision`:
- `decisionRefs: [decision.decisionId]` — vraie HumanDecision trajectoire
- **Aucun** stamp `MATERIALITY:NON_STRUCTURAL|STRUCTURAL|UNKNOWN`
- Pas de `materialityFacts.productCurrentness` G-D4
- Status vers `confirmation_required` après validate/inspect
- Relève du **Cas A — Legacy W2**, pas de la politique G-D4

---

## I. Cause racine

`confirmExecutionContractForAuthorization` appelait **toujours**
`revalidateMaterialityAgainstCurrentProduct` (sauf `skipMaterialityRevalidation`),
y compris pour les contrats legacy W2 sans stamp G-D4.

La revalidation CURRENT exige un contexte Product G-D4
(LPS/binding/currentness). Les contrats historiques W2 n'ont pas
ces stamps → fail-closed `MATERIALITY_PRODUCT_CONTEXT_UNAVAILABLE`
alors qu'une HumanDecision valide existe déjà.

Frontière incorrecte: contrôle G-D4 appliqué hors domaine G-D4.

---

## J. Frontière G-D4

| Cas | Critère | Confirm |
|---|---|---|
| A Legacy W2 | pas de stamp MATERIALITY:* ; decisionRefs non vides | skip revalidation Product; OA HD freshness/inspection/authority |
| B G-D4 NON_STRUCTURAL | stamp NON_STRUCTURAL (+ currentness) | CURRENT revalidation obligatoire |
| C STRUCTURAL/UNKNOWN | stamp STRUCTURAL/UNKNOWN | fail-closed / DECISION_REQUIRED — pas d'exception NON_STRUCTURAL |
| D empty refs sans stamp | decisionRefs=[] et stamped=null | REFUS immédiat DECISION_REQUIRED |

`skipMaterialityRevalidation` reste limité au chemin gouverné
`authorizeGenericPreparedContract` après CURRENT déjà prouvé,
et seulement si stamp `non_structural`.

---

## K. Diagnostic de compatibilité

Hypothèse ChatGPT: **CONFIRMÉE** par reproduction locale + inspection du contrat.

Correction minimale: éligibilité G-D4 pour la revalidation Product,
sans retirer les contrôles HD OA, inspection, projet, autorité.

---

## L. Manifest exact

MODIFY:
- `projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts`

CREATE:
- `projects/sfia-studio/app/__tests__/project-assistant/p6.rCi01.legacyW2ConfirmCompatibility.d0.test.ts`

Aucun autre fichier Product.
Aucun schéma T-A4 / doctrine / workflow CI modifié.

---

## M. Correction avant/après

### Avant
Après inspection suffisante, toujours:
1. `revalidateMaterialityAgainstCurrentProduct`
2. `assertDecisionRefsAdmissibleForConfirm`
→ legacy W2 sans stamp échoue sur contexte Product.

### Après
1. Case D: empty refs + no stamp → DECISION_REQUIRED immédiat
2. Si stamp MATERIALITY:* **ou** stampedCurrentness → G-D4 CURRENT revalidation (+ assertDecisionRefs)
3. Sinon Case A legacy → **pas** de revalidation Product; OA Confirm garde HD freshness

---

## N. Contrôles HD préservés

OA `ConfirmExecutionContract` inchangé:
- decision existence
- project match
- accepted / not superseded
- Confirmation ≠ HumanDecision
- Pas de fabrication de `dec:`

Legacy path ne bypass pas ces contrôles.

---

## O. Contrôles G-D4 préservés

- NON_STRUCTURAL + CURRENT: toujours revalidé
- Context unavailable: fail-closed (L06)
- Repo identity/pathRoot stale: STALE (L08)
- STRUCTURAL empty refs: BLOCK (L10)
- Empty refs sans stamp: REFUS (L09)
- `skipMaterialityRevalidation` non élargi en bypass générique

---

## P. Contrôles d'inspection

Inchangés: INSPECTION_REQUIRED / REINSPECTION_REQUIRED avant Confirm.
L03: legacy sans inspect → INSPECTION_REQUIRED PASS.

---

## Q. Contrôles de Confirmation

OA Confirm + authority registration + confirmationId inchangés.
L04: PROJECT_MISMATCH préservé.

---

## R. Oracles L01–L14

| Oracle | Résultat | Preuve |
|---|---|---|
| L01 Legacy W2 nominal Confirm | PASS | p6.rCi01 L01 + CP02 |
| L02 Legacy freshness | PASS (OA path) | OA ConfirmExecutionContract freshness inchangé; non re-spécifié en fixture R-CI-01 (pas de bypass) |
| L03 Legacy inspection | PASS | p6.rCi01 L03 |
| L04 Legacy project | PASS | p6.rCi01 L04 |
| L05 G-D4 NON_STRUCTURAL Confirm | PASS | p6.rCi01 L05 + G-D4 suite |
| L06 G-D4 context unavailable | PASS | p6.rCi01 L06 |
| L07 G-D4 LPS stale | PASS | covered by prior G-D4/currentness suites (authorize path); Confirm uses same revalidate |
| L08 G-D4 repo stale | PASS | p6.rCi01 L08 + closure regularization |
| L09 empty refs no stamp | PASS | p6.rCi01 L09 |
| L10 STRUCTURAL | PASS | p6.rCi01 L10 |
| L11 Authority | PASS | legacy+G-D4 suites; forceLocalAuthority non utilisé comme bypass materiality |
| L12 P5-S04 CP02 full | PASS | 22/22 |
| L13 No synthetic HD | PASS | G-D4 decisions length unchanged; legacy uses real HD |
| L14 No REAL | PASS | OPS1 fake provider; no Cursor REAL |

---

## S. Test P5-S04 CP02

```
npx vitest run __tests__/oa/synthesis/p5.s04.cp02.softFailPilotLineage.d0.test.ts
```
Avant: 13 failed / 9 passed.
Après: **22 passed (22)**.

---

## T. Tests P6 / G-D4

```
npx vitest run \
  __tests__/project-assistant/p6.rCi01.legacyW2ConfirmCompatibility.d0.test.ts \
  __tests__/project-assistant/p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts \
  __tests__/project-assistant/p6.productContinuityClosure.integrated.d0.test.ts \
  __tests__/project-assistant/p6.authorityChatFirstContinuity.d0.test.ts \
  __tests__/project-assistant/p6.closureRegularization.repositoryCurrentness.d0.test.ts \
  __tests__/oa/synthesis/p5.s04.cp02.softFailPilotLineage.d0.test.ts
```
**6 files / 54 tests PASS.**

---

## U. Tests legacy

```
npx vitest run \
  __tests__/project-assistant/w3cPostEvidenceCorrection.test.ts \
  __tests__/project-assistant/ecInspectionDisclosure.d0.test.ts
```
**2 files / 26 tests PASS.**

---

## V. Couverture CI

CI GitHub exécute `npm test` (Vitest full) — **non rejoué intégralement** ici
(coût/temps; ports/worktrees Human QA protégés).

Périmètre ciblé R-CI-01 + P6 G-D4 + CP02 + legacy Confirm: PASS.
T-A4 schema governance: 20/20 PASS.
Typecheck/lint: PASS.
Build Next: **SKIPPED** (évite effets ports/worktrees; CI Build était déjà SUCCESS sur 45dee683; correctif TypeScript-only Confirm + test).

Limite readiness: Required Gate GitHub non re-prouvé tant que correctif non poussé.

---

## W. Typecheck / lint / build

- `npm run typecheck` → PASS
- `npm run lint` → PASS (No ESLint warnings or errors)
- `npm run build` → SKIPPED (qualification ci-dessus)
- T-A4 `execution-contract-governance.test.mjs` → 20 PASS

---

## X. Git diff utile complet — MODIFIED confirmForAuthorization.ts

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts b/projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts
index 45f23296..b2cd6cee 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts
@@ -142,9 +142,12 @@ export async function confirmExecutionContractForAuthorization(
     };
   }

-  // G-D4 / A2 — empty decisionRefs only when NON_STRUCTURAL stamp AND CURRENT
-  // Product revalidation agrees. Stamp alone is never sufficient authority.
   // Confirmation ≠ HumanDecision (P2-D-03). Do not invent a dec: to unlock Confirm.
+  //
+  // R-CI-01 — Route materiality CURRENT revalidation only for G-D4 policy contracts.
+  // Legacy W2 contracts (no MATERIALITY:* stamp, real decisionRefs) keep historical
+  // HD freshness / project / inspection gates via OA Confirm — they must not be
+  // forced through Product NON_STRUCTURAL revalidation that expects G-D4 stamps.
   const decisionRefs = contract.decisionRefs ?? [];
   const decisionRef = decisionRefs[0];
   const stamped = materialityFromContractConstraints(contract.constraints);
@@ -154,77 +157,103 @@ export async function confirmExecutionContractForAuthorization(
     typeof contractInputs.materialityFacts === "object"
       ? (contractInputs.materialityFacts as Record<string, unknown>)
       : null;
+  const stampedCurrentness = parseStampedProductCurrentness(factsRaw);

-  let recomputedMateriality = stamped ?? "unknown";
-  if (input.skipMaterialityRevalidation !== true) {
-    const revalidated = await revalidateMaterialityAgainstCurrentProduct({
-      oa,
-      projectId: input.projectId,
-      analysis: analysisStubFromMaterialityFacts(factsRaw, contractInputs),
-      cycleInstanceId: contract.cycleInstanceId ?? null,
-      stampedMateriality: stamped,
-      stampedCurrentness: parseStampedProductCurrentness(factsRaw),
-    });
-    if (!revalidated.ok) {
-      const passThrough =
-        revalidated.code === "MATERIALITY_CURRENT_MISMATCH" ||
-        revalidated.code === "MATERIALITY_CURRENTNESS_STALE" ||
-        revalidated.code === "MATERIALITY_PRODUCT_CONTEXT_UNAVAILABLE" ||
-        revalidated.code === "REPOSITORY_BINDING_STALE" ||
-        revalidated.code === "REPOSITORY_BINDING_UNAVAILABLE" ||
-        revalidated.code.startsWith("SCOPE_");
-      return {
-        ok: false,
-        code:
-          revalidated.code === "MATERIALITY_STRUCTURAL" ||
-          revalidated.code === "MATERIALITY_UNKNOWN"
-            ? "DECISION_REQUIRED"
-            : passThrough
-              ? revalidated.code
-              : "DECISION_REQUIRED",
-        message: revalidated.message,
-      };
-    }
-    recomputedMateriality = revalidated.current.assessment.materiality;
-  } else if (stamped !== "non_structural") {
+  // Case D — empty refs without G-D4 stamp: never treat as legacy HD path.
+  if (decisionRefs.length === 0 && stamped == null) {
     return {
       ok: false,
       code: "DECISION_REQUIRED",
       message:
-        "Stamp de matérialité non NON_STRUCTURAL — HumanDecision requise.",
+        "Contrat sans décision humaine ni justification G-D4 NON_STRUCTURAL — confirmation refusée.",
     };
   }

-  const admissible = assertDecisionRefsAdmissibleForConfirm({
-    decisionRefs,
-    stampedMateriality: stamped,
-    recomputed: {
-      materiality:
-        recomputedMateriality === "non_structural" ||
-        recomputedMateriality === "structural" ||
-        recomputedMateriality === "unknown"
-          ? recomputedMateriality
-          : "unknown",
-      reasonCodes: ["current_product_revalidation"],
-      humanDecisionRequired: recomputedMateriality !== "non_structural",
-      constraintToken:
-        recomputedMateriality === "structural"
-          ? "MATERIALITY:STRUCTURAL"
-          : recomputedMateriality === "unknown"
-            ? "MATERIALITY:UNKNOWN"
-            : "MATERIALITY:NON_STRUCTURAL",
-    },
-  });
-  if (!admissible.ok) {
-    return {
-      ok: false,
-      code: "DECISION_REQUIRED",
-      message:
-        stamped === "non_structural" && recomputedMateriality !== "non_structural"
-          ? "Matérialité structurelle détectée à la confirmation — HumanDecision requise."
-          : "Contrat sans décision humaine rattachée alors qu'une HumanDecision est requise — confirmation refusée.",
-    };
+  // G-D4 policy: explicit MATERIALITY stamp and/or Product currentness stamp at PREPARE.
+  const requiresGd4CurrentMaterialityRevalidation =
+    stamped != null || stampedCurrentness != null;
+
+  let recomputedMateriality = stamped ?? "unknown";
+  if (requiresGd4CurrentMaterialityRevalidation) {
+    // Cases B/C — G-D4 stamped (NON_STRUCTURAL / STRUCTURAL / UNKNOWN) or stamped facts.
+    if (input.skipMaterialityRevalidation !== true) {
+      const revalidated = await revalidateMaterialityAgainstCurrentProduct({
+        oa,
+        projectId: input.projectId,
+        analysis: analysisStubFromMaterialityFacts(factsRaw, contractInputs),
+        cycleInstanceId: contract.cycleInstanceId ?? null,
+        stampedMateriality: stamped,
+        stampedCurrentness,
+      });
+      if (!revalidated.ok) {
+        const passThrough =
+          revalidated.code === "MATERIALITY_CURRENT_MISMATCH" ||
+          revalidated.code === "MATERIALITY_CURRENTNESS_STALE" ||
+          revalidated.code === "MATERIALITY_PRODUCT_CONTEXT_UNAVAILABLE" ||
+          revalidated.code === "REPOSITORY_BINDING_STALE" ||
+          revalidated.code === "REPOSITORY_BINDING_UNAVAILABLE" ||
+          revalidated.code.startsWith("SCOPE_");
+        return {
+          ok: false,
+          code:
+            revalidated.code === "MATERIALITY_STRUCTURAL" ||
+            revalidated.code === "MATERIALITY_UNKNOWN"
+              ? "DECISION_REQUIRED"
+              : passThrough
+                ? revalidated.code
+                : "DECISION_REQUIRED",
+          message: revalidated.message,
+        };
+      }
+      recomputedMateriality = revalidated.current.assessment.materiality;
+    } else if (stamped !== "non_structural") {
+      // skipMaterialityRevalidation only valid after a governed G-D4 CURRENT pass
+      // that already established NON_STRUCTURAL (authorizeGenericPreparedContract).
+      return {
+        ok: false,
+        code: "DECISION_REQUIRED",
+        message:
+          "Stamp de matérialité non NON_STRUCTURAL — HumanDecision requise.",
+      };
+    } else {
+      recomputedMateriality = "non_structural";
+    }
+
+    const admissible = assertDecisionRefsAdmissibleForConfirm({
+      decisionRefs,
+      stampedMateriality: stamped,
+      recomputed: {
+        materiality:
+          recomputedMateriality === "non_structural" ||
+          recomputedMateriality === "structural" ||
+          recomputedMateriality === "unknown"
+            ? recomputedMateriality
+            : "unknown",
+        reasonCodes: ["current_product_revalidation"],
+        humanDecisionRequired: recomputedMateriality !== "non_structural",
+        constraintToken:
+          recomputedMateriality === "structural"
+            ? "MATERIALITY:STRUCTURAL"
+            : recomputedMateriality === "unknown"
+              ? "MATERIALITY:UNKNOWN"
+              : "MATERIALITY:NON_STRUCTURAL",
+      },
+    });
+    if (!admissible.ok) {
+      return {
+        ok: false,
+        code: "DECISION_REQUIRED",
+        message:
+          stamped === "non_structural" &&
+          recomputedMateriality !== "non_structural"
+            ? "Matérialité structurelle détectée à la confirmation — HumanDecision requise."
+            : "Contrat sans décision humaine rattachée alors qu'une HumanDecision est requise — confirmation refusée.",
+      };
+    }
   }
+  // Case A — Legacy W2: no G-D4 stamp, decisionRefs non-empty.
+  // OA ConfirmExecutionContract validates HD existence/freshness/project/supersession.
+  // Do not invent MATERIALITY stamps or call Product NON_STRUCTURAL revalidation.

   const authority = registerLocalAuthorityForExecutionClass({
     authorityResolver: oa.authorityResolver,

```

---

## Y. Fichiers créés — contenu complet

### CREATE `projects/sfia-studio/app/__tests__/project-assistant/p6.rCi01.legacyW2ConfirmCompatibility.d0.test.ts`

```typescript
/**
 * R-CI-01 — Legacy W2 Confirm compatibility vs G-D4 CURRENT materiality.
 *
 * Confirms G-D4 Product revalidation applies only to G-D4-policy contracts.
 * Legacy W2 contracts with real HumanDecision refs and no MATERIALITY stamp
 * must Confirm without requiring NON_STRUCTURAL Product revalidation.
 *
 * Deterministic only — ZERO OpenAI REAL — ZERO Cursor REAL.
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import { prepareExecutionContractFromW2Decision } from "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision";
import { prepareGenericExecutionContractDraft } from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { resetPendingGenericPrepareOfferStoreForTests } from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import { GOVERNED_OPTION_REF } from "@/features/project-assistant/w2/trajectoryOptions";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import { materialityFromContractConstraints } from "@/lib/oa/execution-contract";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  currentF2Context,
  seedQualifiedProject,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import type { ExecutionContract } from "@/lib/oa/execution-contract";

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
    objective: "Corriger le filtrage demo",
    scope: "projects/demo/app/filter.ts",
    rephrasedRequest: "Corriger le bug de filtrage",
    outOfScope: ["refonte UI"],
    risks: [],
    reservations: [],
    stopConditions: ["AUCUNE EXÉCUTION SANS AUTORISATION"],
    activatedBlocks: [],
    expectedOutcome: "Filtrage corrigé",
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

describe("R-CI-01 Legacy W2 Confirm compatibility", () => {
  let runtime: RuntimeApplicationService;
  let previousProvider: string | undefined;
  let previousMorris: string | undefined;

  beforeEach(() => {
    previousProvider = process.env.OPS1_CONVERSATION_PROVIDER;
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetPendingGenericPrepareOfferStoreForTests();
    runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("p6-rci01.sqlite"),
      idPrefix: "rci01",
    });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    resetPendingGenericPrepareOfferStoreForTests();
    setConversationProviderForTests(null);
    cleanupW2TempDirs();
    restoreEnvVar("OPS1_CONVERSATION_PROVIDER", previousProvider);
    restoreEnvVar("SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY", previousMorris);
  });

  async function prepareLegacyW2(suffix: string) {
    const seeded = await seedQualifiedProject(runtime, { suffix });
    const oa = runtime.oa!;
    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) throw new Error("qual");
    const proposed = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) throw new Error("propose");
    const decided = await decideTrajectory({
      oa,
      projectId: seeded.projectId,
      optionSetRef: proposed.optionSetRef,
      options: proposed.options,
      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
      selectedOptionRef: GOVERNED_OPTION_REF,
      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
      candidateVersion: proposed.proposedTrajectory!.version,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) throw new Error("decide");
    const context = await currentF2Context(runtime, seeded.projectId);
    const prepared = await prepareExecutionContractFromW2Decision({
      oa,
      projectId: seeded.projectId,
      decisionId: decided.decision.decisionId,
      currentContext: context,
      forceLocalAuthority: true,
      qualifiedOperationKind: "generate-temporary-artifact",
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) throw new Error(prepared.code);
    return {
      oa,
      projectId: seeded.projectId,
      decisionId: decided.decision.decisionId,
      contract: prepared.contract,
    };
  }

  async function seedGd4Cycle(suffix: string) {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: `R-CI-01 ${suffix}`,
      objective: "G-D4 confirm routing",
      context: "det",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `RC${suffix.toUpperCase().slice(0, 6)}`,
      idempotencyKey: `idem:rci01-${suffix}`,
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
    const cycleInstanceId = `cyc:rci01-${suffix}`;
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
    const identity = `acme/rci01-${suffix}`;
    const bound = await oa.projectServices.setProjectRepositoryBinding!.execute({
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
    expect(bound.ok).toBe(true);
    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
      identity,
    });
    return { projectId, cycleInstanceId, oa, identity };
  }

  it("L01 — legacy W2 prepare (real HD, no G-D4 stamp) → inspect → Confirm PASS", async () => {
    const legacy = await prepareLegacyW2("l01");
    expect(legacy.contract.decisionRefs ?? []).toEqual([legacy.decisionId]);
    expect(
      materialityFromContractConstraints(legacy.contract.constraints),
    ).toBeNull();
    expect(
      (legacy.contract.constraints ?? []).some((c) =>
        c.startsWith("MATERIALITY:"),
      ),
    ).toBe(false);

    const inspected = await inspectExecutionContract({
      oa: legacy.oa,
      projectId: legacy.projectId,
      executionContractId: legacy.contract.executionContractId,
    });
    expect(inspected.ok).toBe(true);

    const confirmed = await confirmExecutionContractForAuthorization({
      oa: legacy.oa,
      projectId: legacy.projectId,
      executionContractId: legacy.contract.executionContractId,
      forceLocalAuthority: true,
    });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) throw new Error(confirmed.code);
  });

  it("L03 — legacy W2 without inspection → Confirm BLOCK", async () => {
    const legacy = await prepareLegacyW2("l03");
    const confirmed = await confirmExecutionContractForAuthorization({
      oa: legacy.oa,
      projectId: legacy.projectId,
      executionContractId: legacy.contract.executionContractId,
      forceLocalAuthority: true,
    });
    expect(confirmed.ok).toBe(false);
    if (confirmed.ok) throw new Error("expected block");
    expect(confirmed.code).toBe("INSPECTION_REQUIRED");
  });

  it("L04 — legacy W2 Confirm with wrong projectId → PROJECT_MISMATCH", async () => {
    const legacy = await prepareLegacyW2("l04");
    await inspectExecutionContract({
      oa: legacy.oa,
      projectId: legacy.projectId,
      executionContractId: legacy.contract.executionContractId,
    });
    const confirmed = await confirmExecutionContractForAuthorization({
      oa: legacy.oa,
      projectId: "prj:other-project-rci01",
      executionContractId: legacy.contract.executionContractId,
      forceLocalAuthority: true,
    });
    expect(confirmed.ok).toBe(false);
    if (confirmed.ok) throw new Error("expected mismatch");
    expect(confirmed.code).toBe("PROJECT_MISMATCH");
  });

  it("L05 — G-D4 NON_STRUCTURAL empty refs → Confirm PASS (CURRENT available)", async () => {
    const seeded = await seedGd4Cycle("l05");
    const prep = await prepareGenericExecutionContractDraft({
      oa: seeded.oa,
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
      analysis: baseAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    expect(prep.contract.decisionRefs ?? []).toEqual([]);
    expect(prep.contract.constraints).toContain("MATERIALITY:NON_STRUCTURAL");

    const inspected = await inspectExecutionContract({
      oa: seeded.oa,
      projectId: seeded.projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
    });
    expect(inspected.ok).toBe(true);

    const confirmed = await confirmExecutionContractForAuthorization({
      oa: seeded.oa,
      projectId: seeded.projectId,
      executionContractId: prep.contract.executionContractId,
      forceLocalAuthority: true,
    });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) throw new Error(`${confirmed.code}: ${confirmed.message}`);
  });

  it("L06 — G-D4 NON_STRUCTURAL Confirm fails closed when Product context unavailable", async () => {
    const seeded = await seedGd4Cycle("l06");
    const prep = await prepareGenericExecutionContractDraft({
      oa: seeded.oa,
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
      analysis: baseAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);

    await inspectExecutionContract({
      oa: seeded.oa,
      projectId: seeded.projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
    });

    // Move pathRoot so mission paths fall outside → CURRENT Product insufficient.
    const rebound =
      await seeded.oa.projectServices.setProjectRepositoryBinding!.execute({
        projectId: seeded.projectId,
        actor: LOCAL_PILOTE_ACTOR,
        binding: {
          provider: "github",
          identity: seeded.identity,
          remoteUrl: `https://github.com/${seeded.identity}.git`,
          defaultBranch: "main",
          pathRoot: "projects/elsewhere",
        },
      });
    expect(rebound.ok).toBe(true);

    const confirmed = await confirmExecutionContractForAuthorization({
      oa: seeded.oa,
      projectId: seeded.projectId,
      executionContractId: prep.contract.executionContractId,
      forceLocalAuthority: true,
    });
    expect(confirmed.ok).toBe(false);
    if (confirmed.ok) throw new Error("expected G-D4 fail-closed");
    expect([
      "MATERIALITY_PRODUCT_CONTEXT_UNAVAILABLE",
      "REPOSITORY_BINDING_STALE",
      "SCOPE_OUTSIDE_PATH_ROOT",
    ]).toContain(confirmed.code);
  });

  it("L08 — G-D4 repository identity change (LPS unchanged) → Confirm STALE", async () => {
    const seeded = await seedGd4Cycle("l08");
    const prep = await prepareGenericExecutionContractDraft({
      oa: seeded.oa,
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
      analysis: baseAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    await inspectExecutionContract({
      oa: seeded.oa,
      projectId: seeded.projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
    });

    const rebound =
      await seeded.oa.projectServices.setProjectRepositoryBinding!.execute({
        projectId: seeded.projectId,
        actor: LOCAL_PILOTE_ACTOR,
        binding: {
          provider: "github",
          identity: "acme/rci01-l08-other",
          remoteUrl: "https://github.com/acme/rci01-l08-other.git",
          defaultBranch: "main",
          pathRoot: "projects/demo",
        },
      });
    expect(rebound.ok).toBe(true);
    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
      identity: "acme/rci01-l08-other",
    });

    const confirmed = await confirmExecutionContractForAuthorization({
      oa: seeded.oa,
      projectId: seeded.projectId,
      executionContractId: prep.contract.executionContractId,
      forceLocalAuthority: true,
    });
    expect(confirmed.ok).toBe(false);
    if (confirmed.ok) throw new Error("expected stale");
    expect(confirmed.code).toBe("REPOSITORY_BINDING_STALE");
  });

  async function prepareInspectedGd4(suffix: string) {
    const seeded = await seedGd4Cycle(suffix);
    const prep = await prepareGenericExecutionContractDraft({
      oa: seeded.oa,
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
      analysis: baseAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    const inspected = await inspectExecutionContract({
      oa: seeded.oa,
      projectId: seeded.projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
    });
    expect(inspected.ok).toBe(true);
    return { seeded, prep };
  }

  function withContractOverlay(
    oa: NonNullable<RuntimeApplicationService["oa"]>,
    overlay: (contract: ExecutionContract) => ExecutionContract,
  ) {
    const original = oa.executionContractServices.getExecutionContract.execute.bind(
      oa.executionContractServices.getExecutionContract,
    );
    oa.executionContractServices.getExecutionContract.execute = (async (
      req: { executionContractId: string },
    ) => {
      const got = await original(req);
      if (!got.ok) return got;
      return { ok: true as const, contract: overlay(got.contract) };
    }) as typeof oa.executionContractServices.getExecutionContract.execute;
  }

  it("L09 — empty decisionRefs without G-D4 stamp → Confirm REFUS", async () => {
    const { seeded, prep } = await prepareInspectedGd4("l09");
    withContractOverlay(seeded.oa, (contract) => ({
      ...contract,
      decisionRefs: [],
      constraints: (contract.constraints ?? []).filter(
        (c) => !c.startsWith("MATERIALITY:"),
      ),
      inputs: {
        ...(contract.inputs as Record<string, unknown>),
        materialityFacts: undefined,
      },
    }));

    const confirmed = await confirmExecutionContractForAuthorization({
      oa: seeded.oa,
      projectId: seeded.projectId,
      executionContractId: prep.contract.executionContractId,
      forceLocalAuthority: true,
    });
    expect(confirmed.ok).toBe(false);
    if (confirmed.ok) throw new Error("expected refus");
    expect(confirmed.code).toBe("DECISION_REQUIRED");
    expect(confirmed.message).toMatch(/sans décision humaine ni justification G-D4/i);
  });

  it("L10 — STRUCTURAL stamp with empty refs → Confirm BLOCK (no legacy bypass)", async () => {
    const { seeded, prep } = await prepareInspectedGd4("l10");
    withContractOverlay(seeded.oa, (contract) => ({
      ...contract,
      decisionRefs: [],
      constraints: [
        ...(contract.constraints ?? []).filter(
          (c) => !c.startsWith("MATERIALITY:"),
        ),
        "MATERIALITY:STRUCTURAL",
      ],
    }));

    const confirmed = await confirmExecutionContractForAuthorization({
      oa: seeded.oa,
      projectId: seeded.projectId,
      executionContractId: prep.contract.executionContractId,
      forceLocalAuthority: true,
    });
    expect(confirmed.ok).toBe(false);
    if (confirmed.ok) throw new Error("expected structural block");
    // Must not take the legacy HD path; G-D4 structural remains fail-closed.
    // Fail-closed on G-D4 path (stamp mismatch / structural / context) — never legacy PASS.
    expect([
      "DECISION_REQUIRED",
      "MATERIALITY_PRODUCT_CONTEXT_UNAVAILABLE",
      "MATERIALITY_STRUCTURAL",
      "MATERIALITY_CURRENT_MISMATCH",
    ]).toContain(confirmed.code);
  });
});

```

---

## Z. Fake / Real

- Applicable: OUI
- Mode: DETERMINISTIC CI CORRECTION
- Fake: OPS1 conversation provider fake; W2 harness; TestOnlyRealExecutionLaunchPort (pas SFIA_STUDIO_CURSOR_REAL)
- REAL: NON exécuté
- Niveau entrée: DETERMINISTIC PRODUCT PATH PROVEN WITH CI REGRESSION R-CI-01
- Niveau attendu atteint: LEGACY W2 CONFIRM COMPATIBILITY DETERMINISTICALLY PROVEN AT TESTED SCOPE
- Hors scope: REAL BOUNDARY; E2E REAL; P6 GLOBAL PASS; PRODUCT READY; RUNTIME V3 ADOPTED
- Gate REAL: NON CONSOMMÉ

---

## AA. Réserves

1. Full `npm test` CI Vitest non rejoué localement — risque résiduel hors périmètre testé.
2. L02 freshness supersession: non re-fixture dans p6.rCi01; dépend de OA Confirm inchangé (source-backed).
3. L07 LPS stale: couvert via même `revalidateMaterialityAgainstCurrentProduct` que authorize; pas de nouveau test Confirm-only LPS bump.
4. Build Next local skipped.
5. Correctif **dirty local** — pas encore sur PR #585 distant.

---

## AB. Dette / Exit

- Nouvelle dette: aucune
- Exit Proof R-CI-01 local: atteint au tested scope
- Dette P6 GLOBAL / runtime v3: inchangée (hors scope)

---

## AC. Gates restants

1. Critical Review ChatGPT (ce handoff)
2. GO Morris commit/push correctif → PR #585 (NON consommé)
3. Nouvelle CI GitHub / Required Gate
4. Gate Morris merge
5. Post-merge verification
6. Human QA P6 e66
7. REAL gate (si applicable plus tard)

---

## AD. Git Truth final

HEAD reste: `45dee6830ed19be8ff9a9e1c28434fcd0b8c9d02`
Dirty local ciblé:
- M `confirmForAuthorization.ts`
- ?? `p6.rCi01.legacyW2ConfirmCompatibility.d0.test.ts`
- M `.tmp-sfia-review/chatgpt-review.md` (pack hors commit projet)
Aucun staged projet.
Aucun commit projet supplémentaire.
PR #585 remote HEAD inchangé.
main inchangé.

---

## AE. Verdict

**PR #585 R-CI-01 LEGACY W2 CONFIRM COMPATIBILITY DETERMINISTIC CORRECTION PROVEN AT TESTED SCOPE / LOCAL CANDIDATE / READY FOR CHATGPT CRITICAL REVIEW.**

Conditions satisfaites:
- cause reproduite et corrigée
- legacy W2 Confirm PASS
- HD freshness path préservé (OA)
- G-D4 sans HD fail-closed
- CURRENT / repo currentness préservés
- régressions pertinentes PASS
- aucun REAL
- aucun commit/push projet
- Review Pack FULL
- handoff distant à vérifier après publication

---

## AF. Instruction ChatGPT

Lire le Review Handoff distant.

Critical Review prioritaire:
1. reproduction du FAIL initial
2. présence d'une vraie HD legacy
3. correction exacte du routage Confirm (Cases A–D)
4. OA decision freshness conservée
5. G-D4 sans HD toujours protégé
6. CURRENT materiality non bypassée
7. repository currentness préservée
8. absence d'exception test-only / NODE_ENV
9. tests P5-S04 CP02 et G-D4 / p6.rCi01
10. qualité du diff / absence de scope creep

Rendre: PASS / PASS WITH RESERVES / NOT READY / STOP.

Si PASS: préparer recommandation distincte pour GO Morris commit/push du correctif vers PR #585 existante.
Ne pas autoriser automatiquement: commit projet, push projet, merge, REAL, doctrine, promotion v3.

---

## AG. Git Review Index

| Item | Value |
|---|---|
| Delivery HEAD (unchanged) | 45dee6830ed19be8ff9a9e1c28434fcd0b8c9d02 |
| main | e7822033f159d6a0e9c15f6f26843bd1248edbc1 |
| PR | #585 OPEN |
| Entry handoff | 1b1b0bfd / blob e9a342df |
| Local MODIFY | confirmForAuthorization.ts |
| Local CREATE | p6.rCi01.legacyW2ConfirmCompatibility.d0.test.ts |
| Project commit this cycle | NONE |
| Handoff publish | pending below |

---

FIN REVIEW PACK FULL — R-CI-01
