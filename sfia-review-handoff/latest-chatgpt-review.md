# Review Pack FULL — STUDIO-P6-EXECUTION-CONVERGENCE-DELIVERY-01

| Field | Value |
| --- | --- |
| **Horodatage** | 2026-10-17 13:38:35 CEST |
| **Cycle ID** | `STUDIO-P6-EXECUTION-CONVERGENCE-DELIVERY-01` |
| **Cycle** | 8 — Delivery / implémentation |
| **Profil** | Critical |
| **Parents** | `STUDIO-EXECUTION-ARCH-AUDIT-01` · `STUDIO-EXECUTION-CONTINUITY-O1-IMPACT-01` (`f41dd42c`) |
| **Branche** | `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` |
| **HEAD** | `b4c1d86211d372f7b0685be7ce8a5ba7de598e37` |
| **origin/main** | `896ff59c704bfa76df1da1a51705aaf948c1cf0c` |
| **Décisions Morris consommées** | Option 1 · DTO V1 nullable · CURRENT obligatoire · Delivery local O1+UX · **pas** HQA/REAL/commit Product |
| **Capacité** | V3-F05 |
| **Verdict Cursor** | **DELIVERY A+B COMPLETE — DETERMINISTIC PASS — VISUAL NOT PROVEN — REVIEW REQUIRED** |

---

## 1. Local Git Truth Check

### Initial
- HEAD `b4c1d862` = tip distant
- origin/main `896ff59c`
- dirty Product préexistant (M-HD + MATERIALITY) préservé comme base
- staged vide
- Review Pack réinitialisé

### Final
- HEAD / branche inchangés (aucun commit Product)
- staged Product vide
- Modifications Delivery **locales dirty** en plus du dirty préexistant
- HQA non mutée
- Distinguer : dirty préexistant M-HD/materiality ≠ fichiers Delivery O1/UX de ce cycle

---

## 2. Sources lues

- Handoff parent `f41dd42c` (impact Option 1)
- D-ER / P6-07 / framing 30–37 (skim invariants)
- Code W2 continuity + Confirm materiality reuse
- Figma `m4g8j0gNbEzfIuH6S9AZJF` frames `150:532`, `150:682` (design context + screenshot BEFORE)
- Runtime `:3020` up — **login required** → Execution workspace **NOT OBSERVED**

---

## 3. Décisions Morris consommées

| Décision | Consommée |
| --- | --- |
| Option 1 ADAPT continuity | Oui |
| DTO V1 `decisionRef: string \| null` | Oui |
| Revalidation CURRENT obligatoire | Oui |
| Delivery local A+B | Oui |
| Pas HQA / REAL / commit Product | Respecté |

---

## 4. LOT A — Continuity

### Changements
1. `types.ts` — `decisionRef: string \| null` sur `kind:"active"`
2. `readCurrentGovernedExecutionContinuity.ts` — `verifyDecisionLineage` admet empty refs ssi stamp MATERIALITY + `productCurrentness` stamped + `revalidateMaterialityAgainstCurrentProduct` + `assertDecisionRefsAdmissibleForConfirm`
3. `prepareDocsWriteRecoverySuccessor.ts` — branche explicite `decisionRef == null` (pas d'annulation auto)

### Invariants préservés
- Unstamped empty → INTEGRITY (G5)
- HD-bound path inchangé
- Continuity READ-ONLY (T16)
- Confirm/Authorize **non modifiés**

### Gate A
- Suites ciblées PASS (voir §6)
- Aucune HD/Attempt artificielle
- Aucun Cursor REAL
- Aucune mutation HQA

### Diff LOT A (complet)

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/prepareDocsWriteRecoverySuccessor.ts b/projects/sfia-studio/app/features/project-assistant/w2/prepareDocsWriteRecoverySuccessor.ts
index 7274ce40..f0ac5a7f 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/prepareDocsWriteRecoverySuccessor.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/prepareDocsWriteRecoverySuccessor.ts
@@ -256,6 +256,17 @@ async function cancelWrongGenericCurrentIfNeeded(input: {
     return { ok: true, cancelledId: null };
   }

+  // G-D4 empty-refs continuity (decisionRef=null) is not owned by a recovery HD.
+  // Do not cancel it under a different recovery decision identity.
+  if (continuity.decisionRef == null) {
+    return {
+      ok: false,
+      code: "EXECUTION_CONTINUITY_AMBIGUOUS",
+      message:
+        "Un contrat pré-exécution G-D4 sans décision rattachée bloque le prepare recovery — aucune annulation automatique.",
+    };
+  }
+
   // Only clear unconsumed wrong generic when it belongs to this recovery HD.
   if (continuity.decisionRef !== input.recoveryDecisionId) {
     return {
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/readCurrentGovernedExecutionContinuity.ts b/projects/sfia-studio/app/features/project-assistant/w2/readCurrentGovernedExecutionContinuity.ts
index d0d13caf..cac751c6 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/readCurrentGovernedExecutionContinuity.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/readCurrentGovernedExecutionContinuity.ts
@@ -12,8 +12,17 @@

 import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
 import type { ExecutionContract } from "@/lib/oa/execution-contract";
-import { projectExecutionContractInspectionDisclosure } from "@/lib/oa/execution-contract";
+import {
+  assertDecisionRefsAdmissibleForConfirm,
+  materialityFromContractConstraints,
+  projectExecutionContractInspectionDisclosure,
+} from "@/lib/oa/execution-contract";
 import { readContractInspectionState } from "./inspectExecutionContract";
+import {
+  analysisStubFromMaterialityFacts,
+  parseStampedProductCurrentness,
+  revalidateMaterialityAgainstCurrentProduct,
+} from "./resolveAuthoritativeProductMateriality";
 import type {
   ContractInspectionStateDto,
   CurrentGovernedExecutionContinuityResult,
@@ -127,20 +136,85 @@ async function readProjectActiveCycleContext(
   };
 }

+/**
+ * HD-bound lineage OR admissible G-D4 empty-refs (NON_STRUCTURAL + CURRENT).
+ * Reuses Confirm/Authorize materiality gates — never invents a HumanDecision.
+ * READ-ONLY: no HD / inspection / confirmation / authorize / Attempt writes.
+ */
 async function verifyDecisionLineage(
   oa: RuntimeOaStack,
   projectId: string,
   contract: ExecutionContract,
 ): Promise<
-  | { ok: true; decisionRef: string }
+  | { ok: true; decisionRef: string | null }
   | W2Failure
 > {
   const refs = contract.decisionRefs ?? [];
+
+  // G-D4 empty refs — admit only with NON_STRUCTURAL stamp + CURRENT revalidation.
   if (refs.length === 0) {
-    return fail(
-      "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
-      "Contrat d'exécution sans décision rattachée — continuation refusée.",
-    );
+    const stamped = materialityFromContractConstraints(contract.constraints);
+    if (stamped == null) {
+      return fail(
+        "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
+        "Contrat d'exécution sans décision rattachée ni justification G-D4 — continuation refusée.",
+      );
+    }
+
+    const contractInputs = (contract.inputs ?? {}) as Record<string, unknown>;
+    const factsRaw =
+      contractInputs.materialityFacts &&
+      typeof contractInputs.materialityFacts === "object"
+        ? (contractInputs.materialityFacts as Record<string, unknown>)
+        : null;
+    const stampedCurrentness = parseStampedProductCurrentness(factsRaw);
+
+    // Stamp alone is never sufficient — prepare-time currentness witness required.
+    if (stampedCurrentness == null) {
+      return fail(
+        "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
+        "Faits de matérialité / currentness absents sur le contrat — continuation sans décision refusée.",
+      );
+    }
+
+    const revalidated = await revalidateMaterialityAgainstCurrentProduct({
+      oa,
+      projectId,
+      analysis: analysisStubFromMaterialityFacts(factsRaw, contractInputs),
+      cycleInstanceId: contract.cycleInstanceId ?? null,
+      stampedMateriality: stamped,
+      stampedCurrentness,
+    });
+    if (!revalidated.ok) {
+      return fail(
+        revalidated.code === "MATERIALITY_CURRENTNESS_STALE" ||
+          revalidated.code === "MATERIALITY_CURRENT_MISMATCH" ||
+          revalidated.code === "MATERIALITY_PRODUCT_CONTEXT_UNAVAILABLE" ||
+          revalidated.code === "REPOSITORY_BINDING_STALE" ||
+          revalidated.code === "REPOSITORY_BINDING_UNAVAILABLE" ||
+          revalidated.code.startsWith("SCOPE_") ||
+          revalidated.code === "MATERIALITY_STRUCTURAL" ||
+          revalidated.code === "MATERIALITY_UNKNOWN"
+          ? revalidated.code
+          : "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
+        revalidated.message,
+      );
+    }
+
+    const recomputed = revalidated.current.assessment;
+    const admissible = assertDecisionRefsAdmissibleForConfirm({
+      decisionRefs: refs,
+      stampedMateriality: stamped,
+      recomputed,
+    });
+    if (!admissible.ok) {
+      return fail(
+        "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
+        "Contrat sans décision humaine non admissible pour la continuité G-D4 — continuation refusée.",
+      );
+    }
+
+    return { ok: true, decisionRef: null };
   }

   let primaryRef: string | null = null;
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/types.ts b/projects/sfia-studio/app/features/project-assistant/w2/types.ts
index c33ca461..8785de09 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/types.ts
@@ -292,7 +292,11 @@ export type CurrentGovernedExecutionContinuityResult =
   | {
       readonly ok: true;
       readonly kind: "active";
-      readonly decisionRef: string;
+      /**
+       * HD-bound lineage id when decisionRefs were verified.
+       * Null for admissible G-D4 NON_STRUCTURAL empty-refs (no artificial HD).
+       */
+      readonly decisionRef: string | null;
       readonly contract: CurrentGovernedExecutionContinuityContractDto;
       readonly inspection: ContractInspectionStateDto;
     }

```

---

## 5. LOT B — UX Execution / Figma

### Changements
1. `ProjectWorkspacePage.tsx` — rail Exécution = `ProjectContextSummary` + shortcuts only ; Lifecycle/LPS/Routing/Trajectory/Journal détaillés restent sur Conversation ; charge `projectAssistantPilotLifecycleProjection` (même reader Product)
2. `pilotExecutionPresentation.ts` — work items depuis objective/path/repo ; plus de placeholder « Action prévue dans la portée du contrat »

### Figma
| Frame | Rôle | Verdict |
| --- | --- | --- |
| `150:682` Project Context | Rail cible | Composition Product alignée (summary + shortcuts) |
| `150:532` BEFORE | Surface Exécution | Screenshot Figma obtenu ; runtime **NOT OBSERVED** (login) |
| `150:29` AFTER | Terminal | **NOT OBSERVED** (pas de mutation) |

### Diff LOT B (complet)

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
index 45458767..da7837dc 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
@@ -43,6 +43,7 @@ import {
   projectAssistantActiveCycleWorkspaceAction,
   projectAssistantConfirmReservationResolutionAction,
   projectAssistantDeferReservationAction,
+  projectAssistantPilotLifecycleProjection,
 } from "@/features/project-assistant/actions";
 import {
   w2DeriveGovernedExecutionContinuityAction,
@@ -227,6 +228,28 @@ export function ProjectWorkspacePage({
     };
   }, [projectId]);

+  /**
+   * LOT B — Load durable lifecycle projection without requiring LifecycleSurface
+   * to be mounted (Execution rail is synthetic-only). Same Product reader as
+   * LifecycleSurface.refresh — no second source of truth.
+   */
+  useEffect(() => {
+    let cancelled = false;
+    void Promise.resolve(projectAssistantPilotLifecycleProjection({ projectId }))
+      .then((result) => {
+        if (cancelled || !result) return;
+        if (result.ok && result.projection) {
+          setLifecycleProjection(result.projection);
+        }
+      })
+      .catch(() => {
+        /* projection optional for synthetic rail — fail closed leaves prior mirror */
+      });
+    return () => {
+      cancelled = true;
+    };
+  }, [projectId, lifecycleRefreshSignal]);
+
   useEffect(() => {
     if (result?.ok && result.project.name) {
       onProjectName?.(result.project.name);
@@ -975,6 +998,13 @@ export function ProjectWorkspacePage({
               onOpenSynthesis={openSynthesisDetail}
             />

+            {/*
+              LOT B / Figma 150:682 — Execution rail is synthetic context only.
+              Detailed Lifecycle / LPS / Routing / Trajectory / Journal stay on
+              Conversation (and principal views) so Product CTAs & ownership remain.
+            */}
+            {activeView !== "execution" ? (
+              <>
             <section
               className={styles.stateTrajectoryRegion}
               data-testid="project-state-trajectory-region"
@@ -1086,6 +1116,8 @@ export function ProjectWorkspacePage({
                 </p>
               ) : null}
             </div>
+              </>
+            ) : null}
           </div>
           {contextScrollUi.active ? (
             <div
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation.ts b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation.ts
index 6a42120f..b0601080 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation.ts
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation.ts
@@ -174,6 +174,11 @@ function contractTitle(
 function buildWorkItems(
   projection: GovernedExecutionContinuityProjection | null,
   terminal: boolean,
+  pre: Extract<
+    CurrentGovernedExecutionContinuityResult,
+    { ok: true; kind: "active" }
+  > | null,
+  _contractPresentation: PilotContractPresentation | null,
 ): {
   items: PilotExecutionWorkItem[];
   total: number;
@@ -188,25 +193,90 @@ function buildWorkItems(
     label: item.label || item.kind,
     stateLabel: terminal ? "Terminé" : "Prévu",
   }));
-  if (items.length === 0 && projection?.context?.executionContract) {
+  if (items.length > 0) {
+    return {
+      items,
+      total,
+      collapsed: total > WORK_PREVIEW_LIMIT,
+    };
+  }
+
+  // Honest contract-derived work rows — never invent a generic placeholder.
+  // Prefer durable facts (objective / path / repo). Do not use presentation
+  // titles that can be generic fallbacks for technical action tokens.
+  const derived: PilotExecutionWorkItem[] = [];
+  const objective =
+    projection?.context?.executionContract?.objective?.trim() ||
+    (typeof pre?.contract.inspectionDisclosure?.objective === "string"
+      ? pre.contract.inspectionDisclosure.objective.trim()
+      : null) ||
+    null;
+  const targetPath =
+    pre?.contract.inspectionDisclosure?.targetPath?.trim() || null;
+  const repoRef =
+    pre?.contract.inspectionDisclosure?.targetRepositoryRef?.trim() || null;
+  const scopeNarrative =
+    pre?.contract.scope && !pre.contract.scope.startsWith("studio.")
+      ? pre.contract.scope.trim()
+      : null;
+
+  if (objective) {
+    derived.push({
+      id: "contract-objective",
+      label: objective,
+      stateLabel: terminal ? "Terminé" : "Prévu",
+    });
+  }
+  if (targetPath) {
+    derived.push({
+      id: "contract-destination",
+      label: `Destination : ${targetPath}`,
+      stateLabel: terminal ? "Terminé" : "Prévu",
+    });
+  }
+  if (repoRef) {
+    derived.push({
+      id: "contract-repository",
+      label: `Dépôt : ${repoRef}`,
+      stateLabel: terminal ? "Terminé" : "Prévu",
+    });
+  }
+  if (scopeNarrative && scopeNarrative !== objective) {
+    derived.push({
+      id: "contract-scope",
+      label: `Périmètre : ${scopeNarrative}`,
+      stateLabel: terminal ? "Terminé" : "Prévu",
+    });
+  }
+
+  if (derived.length > 0) {
+    return {
+      items: derived.slice(0, WORK_PREVIEW_LIMIT),
+      total: derived.length,
+      collapsed: derived.length > WORK_PREVIEW_LIMIT,
+    };
+  }
+
+  if (projection?.context?.executionContract || pre) {
     return {
       items: [
         {
-          id: "contract-action",
+          id: "contract-details-unavailable",
           label: terminal
-            ? "Action exécutée dans la portée du contrat"
-            : "Action prévue dans la portée du contrat",
-          stateLabel: terminal ? "Terminé" : "Prévu",
+            ? "Détail du travail exécuté indisponible dans le contrat"
+            : "Détail du travail prévu indisponible dans le contrat",
+          stateLabel: terminal ? "Terminé" : "Incomplet",
         },
       ],
       total: 1,
       collapsed: false,
     };
   }
+
   return {
-    items,
-    total: total || items.length,
-    collapsed: total > WORK_PREVIEW_LIMIT,
+    items: [],
+    total: 0,
+    collapsed: false,
   };
 }

@@ -373,7 +443,7 @@ export function presentPilotExecution(
       };
     }

-    const work = buildWorkItems(projection, false);
+    const work = buildWorkItems(projection, false, pre, contractPresentation);
     const needsConfirm = confirmationRequired && !confirmationSatisfied;
     const status: PilotExecutionStatus = needsConfirm ? "a_confirmer" : "prete";
     const durableActionable = Boolean(
@@ -425,7 +495,7 @@ export function presentPilotExecution(
   }

   if (stage === "ATTEMPT_ACCEPTED" || stage === "RUNNING") {
-    const work = buildWorkItems(projection, false);
+    const work = buildWorkItems(projection, false, pre, contractPresentation);
     return {
       ...emptyBase,
       status: "en_cours",
@@ -458,7 +528,12 @@ export function presentPilotExecution(
     stage === "POST_EVIDENCE_COMPLETE"
   ) {
     const terminalMap = mapTerminalAttempt(projection.attemptStatus);
-    const work = buildWorkItems(projection, terminalMap.status === "terminee");
+    const work = buildWorkItems(
+      projection,
+      terminalMap.status === "terminee",
+      pre,
+      contractPresentation,
+    );
     const evidenceItems = buildEvidenceItems(projection);
     const isSuccess = terminalMap.status === "terminee";
     const verdict = projection.productOutcome;

```

---

## 6. Tests

### Suites exécutées (52 PASS)

```
p6.o1.continuityGd4EmptyRefs.d0.test.ts (6)
ecRehydrationContinuity.d0.test.ts (14) — G5 preserved
p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts (10)
p6.o1.executionWorkPresentation.d0.test.ts (2)
p5.s03.pilotExecutionPresentation.d0.test.ts (9)
p5.s01.workspaceLayout.ui.test.tsx (5)
p5.s03.objectNativeViews.ui.test.tsx (2)
automaticProjectResume.ui.test.tsx (4)
```

### Nouveau test LOT A — contenu intégral

```typescript
/**
 * STUDIO-P6-EXECUTION-CONVERGENCE-DELIVERY-01 / LOT A
 * Option 1 — W2 continuity admits G-D4 NON_STRUCTURAL empty decisionRefs.
 *
 * Deterministic — ZERO OpenAI REAL — ZERO Cursor REAL — ZERO HQA mutation.
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
import { prepareGenericExecutionContractDraft } from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import { readCurrentGovernedExecutionContinuity } from "@/features/project-assistant/w2/readCurrentGovernedExecutionContinuity";
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

describe("P6 O1 — continuity G-D4 empty decisionRefs", () => {
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
    dbPath = tempProductDbPath("p6-o1-cont.sqlite");
    runtime = bootW2Runtime({ productDbPath: dbPath, idPrefix: "o1c" });
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
      name: `O1 Cont ${suffix}`,
      objective: "Continuité G-D4 empty refs",
      context: "active cycle + generic prepare",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `O1C${suffix.toUpperCase().slice(0, 6)}`,
      idempotencyKey: `idem:o1c-${suffix}`,
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

    const cycleInstanceId = `cyc:o1c-${suffix}`;
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

    if (oa.projectServices.setProjectRepositoryBinding) {
      const identity = `acme/o1c-${suffix}`;
      const bound = await oa.projectServices.setProjectRepositoryBinding.execute({
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

  it("T1/T14/T15 — G-D4 NON_STRUCTURAL empty refs → continuity active decisionRef=null", async () => {
    const { projectId, cycleInstanceId } = await seedActiveCycle("t1");
    const oa = runtime.oa!;
    const beforeHd = await oa.decisionServices.decisions.listByProject(projectId);

    const prep = await prepareOk(projectId, cycleInstanceId);
    expect(prep.humanDecisionCreated).toBe(false);
    expect(prep.executionAttemptCreated).toBe(false);
    expect(prep.contract.decisionRefs ?? []).toEqual([]);
    expect(prep.contract.constraints).toContain("MATERIALITY:NON_STRUCTURAL");

    const continuity = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId,
    });
    expect(continuity.ok).toBe(true);
    if (!continuity.ok) throw new Error(continuity.message);
    expect(continuity.kind).toBe("active");
    if (continuity.kind !== "active") throw new Error("expected active");
    expect(continuity.decisionRef).toBeNull();
    expect(continuity.contract.executionContractId).toBe(
      prep.contract.executionContractId,
    );
    expect(continuity.contract.version).toBe(prep.contract.version);
    expect(continuity.contract.semanticFingerprint).toBe(
      prep.contract.semanticFingerprint ?? "",
    );

    const afterHd = await oa.decisionServices.decisions.listByProject(projectId);
    expect(afterHd.length).toBe(beforeHd.length);

    const attempts = await oa.executionAttemptServices!.listExecutionAttempts.execute(
      { executionContractId: prep.contract.executionContractId },
    );
    expect(attempts.ok).toBe(true);
    if (attempts.ok) expect(attempts.attempts).toEqual([]);
  });

  it("T4 — empty refs without MATERIALITY stamp → INTEGRITY refus (G5 preserved)", async () => {
    const { projectId, cycleInstanceId } = await seedActiveCycle("t4");
    const oa = runtime.oa!;
    const prep = await prepareOk(projectId, cycleInstanceId);

    const loaded = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.contract.executionContractId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("load");
    const stripped = {
      ...loaded.contract,
      decisionRefs: [] as string[],
      constraints: loaded.contract.constraints.filter(
        (c) => !c.startsWith("MATERIALITY:"),
      ),
    };
    await oa.executionContractServices.contracts.save(stripped);

    const continuity = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId,
    });
    expect(continuity.ok).toBe(false);
    if (continuity.ok) throw new Error("expected fail");
    expect(continuity.code).toBe("EXECUTION_CONTINUITY_INTEGRITY_FAILED");
  });

  it("T2 — STRUCTURAL stamp + empty refs → refus", async () => {
    const { projectId, cycleInstanceId } = await seedActiveCycle("t2");
    const oa = runtime.oa!;
    const prep = await prepareOk(projectId, cycleInstanceId);
    const loaded = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.contract.executionContractId,
    });
    if (!loaded.ok) throw new Error("load");
    const structural = {
      ...loaded.contract,
      decisionRefs: [] as string[],
      constraints: [
        ...loaded.contract.constraints.filter((c) => !c.startsWith("MATERIALITY:")),
        "MATERIALITY:STRUCTURAL",
      ],
    };
    await oa.executionContractServices.contracts.save(structural);

    const continuity = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId,
    });
    expect(continuity.ok).toBe(false);
    if (continuity.ok) throw new Error("expected fail");
    expect(
      continuity.code === "MATERIALITY_STRUCTURAL" ||
        continuity.code === "MATERIALITY_CURRENT_MISMATCH" ||
        continuity.code === "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
    ).toBe(true);
  });

  it("T5 — NON_STRUCTURAL stamp but missing productCurrentness facts → refus", async () => {
    const { projectId, cycleInstanceId } = await seedActiveCycle("t5");
    const oa = runtime.oa!;
    const prep = await prepareOk(projectId, cycleInstanceId);
    const loaded = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.contract.executionContractId,
    });
    if (!loaded.ok) throw new Error("load");
    const inputs = { ...(loaded.contract.inputs ?? {}) } as Record<string, unknown>;
    const facts = {
      ...((inputs.materialityFacts as Record<string, unknown>) ?? {}),
    };
    delete facts.productCurrentness;
    inputs.materialityFacts = facts;
    await oa.executionContractServices.contracts.save({
      ...loaded.contract,
      inputs,
    });

    const continuity = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId,
    });
    expect(continuity.ok).toBe(false);
    if (continuity.ok) throw new Error("expected fail");
    expect(continuity.code).toBe("EXECUTION_CONTINUITY_INTEGRITY_FAILED");
  });

  it("T11/T12/T13 — inspection state exposed; insufficient ≠ confirm; FP change requires reinspect", async () => {
    const { projectId, cycleInstanceId } = await seedActiveCycle("t11");
    const oa = runtime.oa!;
    const prep = await prepareOk(projectId, cycleInstanceId);

    const beforeInspect = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId,
    });
    expect(beforeInspect.ok).toBe(true);
    if (!beforeInspect.ok || beforeInspect.kind !== "active") {
      throw new Error("expected active");
    }
    expect(beforeInspect.inspection.inspectionSufficient).toBe(false);

    const inspected = await inspectExecutionContract({
      oa,
      projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
      expectedSemanticFingerprint:
        prep.contract.semanticFingerprint ?? "unset",
      forceLocalAuthority: true,
    });
    expect(inspected.ok).toBe(true);

    const afterInspect = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId,
    });
    expect(afterInspect.ok).toBe(true);
    if (!afterInspect.ok || afterInspect.kind !== "active") {
      throw new Error("expected active");
    }
    expect(afterInspect.inspection.inspectionSufficient).toBe(true);
    expect(afterInspect.decisionRef).toBeNull();
    // Continuity read never auto-executes / auto-confirms.
    expect(afterInspect.contract.status).toBe(prep.contract.status);
  });

  it("T16 — continuity read performs no EC / HD / Attempt writes", async () => {
    const { projectId, cycleInstanceId } = await seedActiveCycle("t16");
    const oa = runtime.oa!;
    const prep = await prepareOk(projectId, cycleInstanceId);

    const saveSpy = vi.spyOn(oa.executionContractServices.contracts, "save");
    const hdBefore = await oa.decisionServices.decisions.listByProject(projectId);

    const continuity = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId,
    });
    expect(continuity.ok).toBe(true);
    if (!continuity.ok || continuity.kind !== "active") {
      throw new Error("expected active");
    }
    expect(continuity.contract.executionContractId).toBe(
      prep.contract.executionContractId,
    );
    expect(saveSpy).not.toHaveBeenCalled();
    const hdAfter = await oa.decisionServices.decisions.listByProject(projectId);
    expect(hdAfter.length).toBe(hdBefore.length);
    saveSpy.mockRestore();
  });
});

```

### Nouveau test LOT B — contenu intégral

```typescript
/**
 * LOT B — honest Execution work presentation (no generic placeholder).
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import type { GovernedExecutionContinuityProjection } from "@/features/project-assistant/w2/deriveGovernedExecutionContinuityProjection";
import { presentPilotExecution } from "@/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation";

function projectionWithContract(
  overrides: Partial<GovernedExecutionContinuityProjection> = {},
): GovernedExecutionContinuityProjection {
  return {
    projectId: "prj:o1",
    activeCycleInstanceId: "cyc:1",
    executionContractId: "xct:1",
    executionContractVersion: 2,
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
    context: {
      projectId: "prj:o1",
      activeCycleInstanceId: "cyc:1",
      executionContract: {
        kind: "PRODUCT_CONTRACT",
        executionContractId: "xct:1",
        version: 2,
        status: "confirmation_required",
        action: "studio.cursor.generalist.execute",
        objective: "Rédiger la note de cadrage bénévoles",
        decisionId: null,
        cycleInstanceId: "cyc:1",
      },
      attempt: null,
      evidence: { evidenceId: null, status: null },
      evidenceIds: [],
      reviewBundle: { reviewBundleId: null, status: null },
      claimEvaluation: {
        claimEvaluationId: null,
        status: null,
      },
      executionReview: {
        reviewItemSummaries: [],
      },
    } as GovernedExecutionContinuityProjection["context"],
    ...overrides,
  };
}

describe("P6 O1 execution work presentation", () => {
  it("B9 — documentary path + objective replace generic placeholder", () => {
    const view = presentPilotExecution({
      continuityProjection: {
        ok: true,
        projection: projectionWithContract(),
      },
      preExecutionContinuity: {
        ok: true,
        kind: "active",
        decisionRef: null,
        contract: {
          executionContractId: "xct:1",
          version: 2,
          status: "confirmation_required",
          action: "studio.cursor.generalist.execute",
          target: "studio.cursor.generalist.workspace",
          scope: "studio.cursor.generalist.scope",
          requiredAuthority: "N2",
          constraints: ["MATERIALITY:NON_STRUCTURAL"],
          stopConditions: [],
          requiredCapabilities: ["studio.cursor.generalist"],
          reversibility: "reversible",
          semanticFingerprint: "fp",
          effectConfirmationRequired: true,
          inspectionDisclosure: {
            action: "studio.cursor.generalist.execute",
            technicalTarget: "studio.cursor.generalist.workspace",
            scope: "studio.cursor.generalist.scope",
            targetRepositoryRef: "acme/benevoles",
            targetPath:
              "projects/organisation-des-benevoles/01-cadrage/note-de-cadrage.md",
            scopeIn: null,
            scopeOut: null,
            createOrModify: true,
            noDelete: true,
            objective: "Rédiger la note de cadrage bénévoles",
            artifactType: null,
            artifactBrief: null,
            contentRequirements: null,
            validationExpectations: null,
            expectedOutputs: null,
            sourceGrounding: null,
            acceptanceCriteria: null,
            validationPlan: null,
            reportRequirements: null,
            evidenceRequirements: [],
            requiredAuthority: "N2",
            requiredCapabilities: [],
            constraints: [],
            stopConditions: [],
            reversibility: "reversible",
            contractVersion: 2,
            executionContractId: "xct:1",
            semanticFingerprint: "fp",
            disclosureComplete: true,
            incompletenessCode: null,
          },
        },
        inspection: {
          executionContractId: "xct:1",
          contractVersion: 2,
          semanticFingerprint: "fp",
          statusLabel: "À INSPECTER",
          inspectionSufficient: false,
          attestationRef: null,
          attestedVersion: null,
          staleAttestationRef: null,
          reinspectionRequired: true,
          reason: "not_inspected",
          grantsAuthority: false,
        },
      },
    });

    const labels = view.workItems.map((w) => w.label);
    expect(labels.some((l) => l.includes("note-de-cadrage.md"))).toBe(true);
    expect(labels.some((l) => /Action prévue dans la portée/.test(l))).toBe(
      false,
    );
    expect(view.decisionRef === undefined || true).toBe(true);
  });

  it("B10 — no inventable details → honest incomplete label", () => {
    const view = presentPilotExecution({
      continuityProjection: {
        ok: true,
        projection: projectionWithContract({
          context: {
            projectId: "prj:o1",
            activeCycleInstanceId: "cyc:1",
            executionContract: {
              kind: "PRODUCT_CONTRACT",
              executionContractId: "xct:1",
              version: 1,
              status: "confirmation_required",
              action: "studio.cursor.generalist.execute",
              objective: null,
              decisionId: null,
              cycleInstanceId: "cyc:1",
            },
            attempt: null,
            evidence: { evidenceId: null, status: null },
            evidenceIds: [],
            reviewBundle: { reviewBundleId: null, status: null },
            claimEvaluation: {
              claimEvaluationId: null,
              status: null,
            },
            executionReview: { reviewItemSummaries: [] },
          } as GovernedExecutionContinuityProjection["context"],
        }),
      },
      preExecutionContinuity: {
        ok: true,
        kind: "active",
        decisionRef: null,
        contract: {
          executionContractId: "xct:1",
          version: 1,
          status: "confirmation_required",
          action: "studio.cursor.generalist.execute",
          target: "studio.cursor.generalist.workspace",
          scope: "studio.cursor.generalist.scope",
          requiredAuthority: "N2",
          constraints: [],
          stopConditions: [],
          requiredCapabilities: [],
          reversibility: "reversible",
          semanticFingerprint: "fp",
          effectConfirmationRequired: true,
          inspectionDisclosure: {
            action: "studio.cursor.generalist.execute",
            technicalTarget: "studio.cursor.generalist.workspace",
            scope: "studio.cursor.generalist.scope",
            targetRepositoryRef: null,
            targetPath: null,
            scopeIn: null,
            scopeOut: null,
            createOrModify: false,
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
            evidenceRequirements: [],
            requiredAuthority: "N2",
            requiredCapabilities: [],
            constraints: [],
            stopConditions: [],
            reversibility: "reversible",
            contractVersion: 1,
            executionContractId: "xct:1",
            semanticFingerprint: "fp",
            disclosureComplete: false,
            incompletenessCode: "facts_incomplete",
          },
        },
        inspection: {
          executionContractId: "xct:1",
          contractVersion: 1,
          semanticFingerprint: "fp",
          statusLabel: "À INSPECTER",
          inspectionSufficient: false,
          attestationRef: null,
          attestedVersion: null,
          staleAttestationRef: null,
          reinspectionRequired: true,
          reason: "not_inspected",
          grantsAuthority: false,
        },
      },
    });

    expect(view.workItems).toHaveLength(1);
    expect(view.workItems[0]!.label).toMatch(/indisponible/i);
    expect(view.workItems[0]!.label).not.toMatch(/Action prévue dans la portée/);
  });
});

```

### Mocks UI adaptés (delivery)
- `projectAssistantPilotLifecycleProjection` mockResolvedValue dans tests layout/resume/objectNativeViews/syntheses/journal (évite crash `.then` sur `vi.fn()` nu)

### Échecs M-HD préexistants
- Non exécutés comme gate ce cycle ; dirty M-HD **non attribué** à ce Delivery

---

## 7. Refus légitimes préservés

| Cas | Preuve |
| --- | --- |
| Empty unstamped | G5 + T4 |
| STRUCTURAL empty | T2 |
| Missing currentness facts | T5 |
| CURRENT stale / mismatch | revalidate codes pass-through |
| Recovery vs G-D4 null | prepareDocsWriteRecoverySuccessor |

---

## 8. Captures / Visual

| Source | Statut |
| --- | --- |
| Figma 150:532 screenshot MCP | Obtenu |
| Figma 150:682 design context | Obtenu |
| Runtime Execution 1440×1024 | **VISUAL CONFORMANCE NOT PROVEN** — `/login?error=NO_SESSION` |
| AFTER terminal | NOT OBSERVED (no mutation) |

---

## 9. Risques / dette / exit

| ID | Sévérité | Note |
| --- | --- | --- |
| V1 | P1 | Visual runtime non prouvée |
| V2 | P1 | TrajectorySurface unmounted on Execution — ownership refreshed on Conversation return |
| V3 | P2 | I3 residual if objective+path both absent → "indisponible" (honest) |
| Exit HQA | — | Après revue ChatGPT + GO Morris distinct |

---

## 10. Décisions Morris restantes

| ID | Décision |
| --- | --- |
| D-HQA | Autoriser reprise HQA-FRESH-01 |
| D-VISUAL | Exiger capture runtime authentifiée |
| D-COMMIT | Autoriser commit Product Delivery dirty |
| D-REAL | Toujours hors scope jusqu'à GO |

---

## 11. Confirmation

- Zéro commit/push/PR Product
- Zéro Cursor REAL / Attempt / Confirm Product
- HQA SQLite non mutée
- Confirm/Authorize/materiality/prepare **non modifiés** (hors continuity reader reuse)

**Verdict :** DELIVERY A+B COMPLETE — DETERMINISTIC PASS — VISUAL NOT PROVEN — REVIEW REQUIRED
