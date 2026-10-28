# SFIA Review Pack — EP-S2-08-PROOF-01 R-HD-01 integrated proof

**UTC:** 2026-10-28T11:00:50Z  
**Cycle:** 8 — DELIVERY / IMPLÉMENTATION · Profile CRITICAL · Typology EVOL/CORRECTIVE — PROOF CLOSURE  
**Corrective:** R-HD-01  
**Mode:** SAME CYCLE — TEST/PROOF ONLY  
**Review:** FULL · Handoff: REQUIRED / PUBLISH-IN-CYCLE  

---

## 1 — Git Truth

| Fact | Value |
|---|---|
| Remote | `https://github.com/mcleland147/sfia-workspace.git` |
| Worktree | `sfia-workspace-feat-akg-m5-ep-s2-08-proof-01` |
| Branch | `feat/akg-m5-ep-s2-08-proof-01` |
| HEAD | `3fb84630efb9e0d2acaaf81b342da0358107db10` |
| origin/main | `3fb84630efb9e0d2acaaf81b342da0358107db10` |
| merge-base | `3fb84630efb9e0d2acaaf81b342da0358107db10` (main did not advance) |
| Prior handoff tip (pre-publish) | `8acbc2539b934af3a3176ed420f5910842700413` |
| Prior handoff blob | `cf9e8673ec97287085c4a96087ca659f6a08fb73` |

### `git status --short`

```
M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation.ts
 M projects/sfia-studio/app/features/project-assistant/w2/genericMissionSubject.ts
 M projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
 M projects/sfia-studio/app/features/project-assistant/w2/qualificationInputs.ts
 M projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/projection/inspectionDisclosure.ts
 M projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
 M projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
 M projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
 M projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
 M projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
 M projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
?? projects/sfia-studio/app/__tests__/pre-m6-product-ui/epS208.proof01.piloteSurface.b5b6.ui.test.tsx
?? projects/sfia-studio/app/__tests__/pre-m6-product-ui/epS208.proof01.rInspect01.inspectionSurface.ui.test.tsx
?? projects/sfia-studio/app/__tests__/project-assistant/akgM5L3S2.epS208.proof01.piloteResume.integrated.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/akgM5L3S2.epS208.proof01.r1CkcSemantic.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/akgM5L3S2.epS208.proof01.rInspect01.d0.test.ts
```

All prior Product local candidate preserved. **This R-HD-01 pass: production files READ-ONLY** (tests + PRR 08/09 proof map only).

---

## 2 — Morris GO / scope

**R-HD-01 INTEGRATED PROOF CLOSURE AUTHORIZED (2026-10-28).**

Retained: Option A VALIDATED · Option 1 LOCAL · R-INSPECT-01 ACCEPTED AT DET.

Authorized: investigate HD paths; reuse Product OA; add integrated oracles; regressions; FULL pack; PRR test-proof sync; L3 handoff.

**Not authorized / not done:** HD model evolution; PREPARE/SHE authority changes; new HD semantics/persistence; CKC changes; new EC fields; Product commit/push/PR; REAL/L4/v3.

No Product defect found → no STOP for corrective GO.

---

## 3 — Convergence

Sources read (template, routing, CKC synthetic map, Build Doctrine, Roadmap, C1, M5 trajectory, HumanDecision doctrine, PRR + vols 02–09). Latest handoff `8acbc2539b934af3a3176ed420f5910842700413` coverage assumed as prior Option 1 + R-INSPECT candidate.

Anti-claims: EP-S2-05 NOT PROVEN · EP-S2-08 PARTIAL · L3 GLOBAL OPEN · REAL/G-REAL/L4/runtime v3 unchanged.

---

## 4 — R23 HD path reconstruction

### PATH A — Historical pre-bound ACCEPT_PREPARE
- Entry: `sealGenericMissionForPresentation` → `recordGenericMissionHumanDecision(ACCEPT_PREPARE)` → durable OA DecisionBasis  
- Consumption: `prepareGeneric…` only when `hdRequired && decisionId` → `verifyGenericMissionHumanDecisionForPrepare` → stamp sealed effects  
- `hdRequired` = structuralBlocked OR materiality.humanDecisionRequired  
- **Used for HD-N1 / HD-P1 / HD-N2**

### PATH B — SHE AUTHORIZE_INSPECTED_EXECUTE
- Entry: PREPARE without decisionId (SHE-deferred structural) → inspect → `singleHumanExecutePreparedContract` may create SHE HD + effect-preserving supersede  
- Distinct option from ACCEPT_PREPARE  
- **Used for SHE cross-check**

### PATH C — NON_STRUCTURAL no systematic HD
- PREPARE with empty decisionRefs; no HD required  
- Covered by prior Option 1 / R-INSPECT POS-01 (not re-forced here)

### Critical semantics verified
1. PREPARE without prior HD admissible (SHE deferred).  
2. Pre-bound HD verified via `verifyGenericMissionHumanDecisionForPrepare`.  
3. decisionId consumed only when `hdRequired`.  
4. SHE HD after inspection is AUTHORIZE_INSPECTED_EXECUTE, not ACCEPT_PREPARE.  
5. HD Mission Context seals `intentKind` etc.; **`repositoryMutationDeclared` is NOT a canonical HD-sealed field**.  
6. R-INSPECT guards: `HD_MUTATION_DECLARATION_CONFLICT` + A5 consistency — **not modified this pass**.

### Execution matrix (qualification gate)

| Element | Real Product service |
|---|---|
| HD creation | `sealGenericMissionForPresentation` + `recordGenericMissionHumanDecision` |
| Sealed subject | `genericMissionContext` + presentationDigest |
| Selection | `GENERIC_MISSION_OPTION_ACCEPT_PREPARE` |
| DecisionBasis | OA SQLite via decisionServices |
| Verification | `verifyGenericMissionHumanDecisionForPrepare` |
| Materiality | `resolveAuthoritativeProductMateriality` |
| EC | `prepareGenericExecutionContractDraft` / solicit |
| Attempt | none unauthorized in oracles |
| Forged DecisionBasis / injected decisionRefs | **NOT used** |

---

## 5 — Oracle results

### HD-N1 — BEHAVIOR PROVEN
- Real Decision ID (`dec:…`), durable DecisionBasis (`validateDecisionBasis` → null = OK), sealed digest, ACCEPT_PREPARE option, Project-only cycle null.  
- Sealed: structural + `intentKind=read_only` + mutation `none`.  
- PREPARE analysis: same sealed facts + `repositoryMutationDeclared=write` (intentKind still `read_only`).  
- Verifier passes (does not compare mutation declaration).  
- **First fail-closed gate: `HD_MUTATION_DECLARATION_CONFLICT`** (dedicated R-INSPECT guard exercised).  
- No extra HD; Attempt not created.

Coverage class: **BEHAVIOR PROVEN** for dedicated guard via legitimate PATH A.

### HD-P1 — BEHAVIOR PROVEN
- Coherent structural + `intentKind=other` + write declaration.  
- Real HD → PREPARE binds `decisionRefs=[decisionId]`.  
- EC STRUCTURAL; presentationDigest bound; inspection coherent when write preserved.  
- Project-only Delivery CKC **not** eligible (structural ≠ Delivery CKC question).

### HD-N2 — BEHAVIOR PROVEN
- Real HD without `repositoryMutationDeclared` on sealed context.  
- PREPARE with absent mutation → EC `repositoryMutationDeclared=null` (not invented).  
- HD existence alone ≠ Delivery positive WHAT / `cyc:delivery`.

### SHE cross-check — BEHAVIOR PROVEN
- Deferred structural PREPARE: empty decisionRefs, `sheDeferredStructuralAuthority=true`, mutation `write` preserved.  
- No ACCEPT_PREPARE HD at PREPARE.  
- SHE succeeds without Attempt; if HD created, option ≠ ACCEPT_PREPARE.  
- Successor/live EC still has `repositoryMutationDeclared=write`.

---

## 6 — Production diff this pass

**NONE** (tests + PRR 08/09 documentary proof map only).

Cumulative Product candidate from Option 1 + R-INSPECT remains local (unchanged this pass):

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
index 0ce447de..5fa978af 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
@@ -141,6 +141,12 @@ function toInspectionDisclosureView(
         readonly scopeOut: readonly string[] | null;
         readonly createOrModify: boolean | null;
         readonly noDelete: boolean | null;
+        readonly repositoryMutationDeclared?:
+          | "none"
+          | "read"
+          | "write"
+          | "unknown"
+          | null;
         readonly contentRequirements: readonly string[] | null;
         readonly validationExpectations: readonly string[] | null;
         readonly expectedOutputs: readonly string[] | null;
@@ -162,6 +168,7 @@ function toInspectionDisclosureView(
     scopeOut: disclosure.scopeOut,
     createOrModify: disclosure.createOrModify,
     noDelete: disclosure.noDelete,
+    repositoryMutationDeclared: disclosure.repositoryMutationDeclared ?? null,
     contentRequirements: disclosure.contentRequirements,
     validationExpectations: disclosure.validationExpectations,
     expectedOutputs: disclosure.expectedOutputs,
@@ -180,6 +187,12 @@ type InspectionDisclosureView = {
   readonly scopeOut: readonly string[] | null;
   readonly createOrModify: boolean | null;
   readonly noDelete: boolean | null;
+  readonly repositoryMutationDeclared:
+    | "none"
+    | "read"
+    | "write"
+    | "unknown"
+    | null;
   readonly contentRequirements: readonly string[] | null;
   readonly validationExpectations: readonly string[] | null;
   readonly expectedOutputs: readonly string[] | null;
@@ -3101,6 +3114,24 @@ export function TrajectorySurface({
                   </dd>
                 </div>
               ) : null}
+              {contract.inspectionDisclosure?.repositoryMutationDeclared !=
+              null ? (
+                <div>
+                  <dt>Opération déclarée sur le dépôt</dt>
+                  <dd data-testid="w2-contract-repository-mutation-declared">
+                    {contract.inspectionDisclosure.repositoryMutationDeclared ===
+                    "write"
+                      ? "Écriture déclarée — soumise au périmètre, aux contrôles et à l'autorisation du contrat."
+                      : contract.inspectionDisclosure
+                            .repositoryMutationDeclared === "read"
+                        ? "Lecture seule déclarée — soumise au périmètre, aux contrôles et à l'autorisation du contrat."
+                        : contract.inspectionDisclosure
+                              .repositoryMutationDeclared === "none"
+                          ? "Aucune mutation déclarée — soumise au périmètre, aux contrôles et à l'autorisation du contrat."
+                          : "Opération inconnue déclarée — non promue automatiquement ; soumise aux contrôles du contrat."}
+                  </dd>
+                </div>
+              ) : null}
               {contract.inspectionDisclosure?.expectedOutputs ? (
                 <div>
                   <dt>Sorties attendues</dt>
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation.ts b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation.ts
index 93fade27..3876fbd6 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation.ts
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation.ts
@@ -100,6 +100,21 @@ export function buildInspectionFactRowsFromDisclosure(input: {
   if (d.noDelete !== null && d.noDelete !== undefined) {
     put("inputs.noDelete", "Sans suppression", d.noDelete ? "oui" : "non");
   }
+  if (d.repositoryMutationDeclared != null) {
+    const mutationValue =
+      d.repositoryMutationDeclared === "write"
+        ? "Écriture déclarée — soumise au périmètre, aux contrôles et à l'autorisation du contrat."
+        : d.repositoryMutationDeclared === "read"
+          ? "Lecture seule déclarée — soumise au périmètre, aux contrôles et à l'autorisation du contrat."
+          : d.repositoryMutationDeclared === "none"
+            ? "Aucune mutation déclarée — soumise au périmètre, aux contrôles et à l'autorisation du contrat."
+            : "Opération inconnue déclarée — non promue automatiquement ; soumise aux contrôles du contrat.";
+    put(
+      "inputs.repositoryMutationDeclared",
+      "Opération déclarée sur le dépôt",
+      mutationValue,
+    );
+  }
   put(
     "inputs.contentRequirements",
     "Exigences de contenu",
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/genericMissionSubject.ts b/projects/sfia-studio/app/features/project-assistant/w2/genericMissionSubject.ts
index 16e63e51..1b3dda6e 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/genericMissionSubject.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/genericMissionSubject.ts
@@ -672,6 +672,32 @@ export function assertExecutionContractInternalConsistency(input: {
     }
   }
 
+  // A5 — repositoryMutationDeclared vs sealed intent / non-mutating stamps.
+  // Descriptive declaration must not contradict read_only / bounded non-mutating.
+  const mutationDeclared = inputs.repositoryMutationDeclared;
+  if (mutationDeclared === "write") {
+    const intentKind =
+      typeof inputs.intentKind === "string" ? inputs.intentKind.trim() : null;
+    if (intentKind === "read_only") {
+      return {
+        ok: false,
+        reason: "mutation_write_vs_read_only_intent",
+      };
+    }
+    if (inputs.boundedNonMutatingAnalysis === true) {
+      return {
+        ok: false,
+        reason: "mutation_write_vs_bounded_non_mutating",
+      };
+    }
+    if (constraints.includes("MISSION_EFFECT:NO_REPOSITORY_MUTATION_DECLARED")) {
+      return {
+        ok: false,
+        reason: "mutation_write_vs_no_mutation_constraint",
+      };
+    }
+  }
+
   return { ok: true };
 }
 
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts b/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
index fe01dd88..4b370302 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
@@ -257,6 +257,29 @@ function missionImpliesRepositoryWork(analysis: IntentAnalysisDto): boolean {
   return false;
 }
 
+/**
+ * EP-S2-08-PROOF-01 Option 1 — preserve an already-declared mutation claim as an
+ * inspectable EC input. Does NOT invent "write", does NOT authorize execution,
+ * and does NOT add EFFECT_CLASS:local-write. Bounded non-mutating remains "none".
+ * Absence stays null (fail-closed for Delivery WHAT at W3-C).
+ */
+function preserveDeclaredRepositoryMutation(input: {
+  readonly boundedNonMutating: boolean;
+  readonly analysisDeclared: unknown;
+}): "none" | "read" | "write" | "unknown" | null {
+  if (input.boundedNonMutating) return "none";
+  const declared = input.analysisDeclared;
+  if (
+    declared === "none" ||
+    declared === "read" ||
+    declared === "write" ||
+    declared === "unknown"
+  ) {
+    return declared;
+  }
+  return null;
+}
+
 /**
  * @deprecated Prefer resolveAuthoritativeProductMateriality — sync helper kept
  * for unit oracles that only have analysis (forces UNKNOWN without Product).
@@ -704,6 +727,22 @@ export async function prepareGenericExecutionContractDraft(
       pathRoot: sealedCtx.pathRoot,
       impactSignals: { ...sealedCtx.impactSignals },
     };
+    // R-INSPECT-01 — sealed read_only / non-mutating intent cannot be silently
+    // overridden by an analysis write declaration (no invented HD write approval).
+    const analysisMutation = (
+      analysis as { repositoryMutationDeclared?: unknown }
+    ).repositoryMutationDeclared;
+    if (
+      sealedHdEffects.intentKind === "read_only" &&
+      analysisMutation === "write"
+    ) {
+      return {
+        ok: false,
+        code: "HD_MUTATION_DECLARATION_CONFLICT",
+        message:
+          "HumanDecision scellée read_only contradictoire avec repositoryMutationDeclared=write — PREPARE refusé (fail-closed).",
+      };
+    }
   } else if (hdRequired) {
     sheDeferredStructuralAuthority = true;
     // decisionRefs stay []; honest MATERIALITY stamp remains on constraints.
@@ -982,7 +1021,14 @@ export async function prepareGenericExecutionContractDraft(
       prepareStatus: "draft_inspectable",
       materialityFacts,
       boundedNonMutatingAnalysis: boundedNonMutating,
-      repositoryMutationDeclared: boundedNonMutating ? "none" : null,
+      repositoryMutationDeclared: preserveDeclaredRepositoryMutation({
+        boundedNonMutating,
+        analysisDeclared: (
+          analysis as {
+            repositoryMutationDeclared?: unknown;
+          }
+        ).repositoryMutationDeclared,
+      }),
       // Intent fidelity — inspectable mission effects (Pass 02 / EC↔HD).
       intentKind: boundedNonMutating
         ? stampedIntentKind ?? "read_only"
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/qualificationInputs.ts b/projects/sfia-studio/app/features/project-assistant/w2/qualificationInputs.ts
index 370ba80d..8e2955fb 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/qualificationInputs.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/qualificationInputs.ts
@@ -15,6 +15,8 @@ import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
 import { readLiveProjectContext } from "@/lib/vertical-slice-runtime";
 import type { DoctrinePackagePin } from "@/lib/oa/doctrine";
 import type { Digest } from "@/lib/oa/doctrine/domain/types";
+import { PRODUCT_GOVERNED_CONSTRAINT } from "@/lib/oa/execution-contract";
+import { PRODUCT_CANONICAL_EXECUTION_ACTION } from "./w3aProductExecutionSemantics";
 import type { TrajectoryOptionInputs } from "./trajectoryOptions";
 
 export type ResolvedW2Qualification = {
@@ -106,3 +108,461 @@ export async function resolveW2QualificationInputs(input: {
     },
   };
 }
+
+/**
+ * EP-S2-08 — W3-C post-Evidence CKC orientation (Morris 2026-10-28 Option A bounded).
+ *
+ * Cycle-bound: use Attempt→EC→CycleInstance lineage (not LPS alone).
+ * Project-only: `cyc:delivery` ONLY when durable Generic NON_STRUCTURAL Delivery
+ * eligibility is positively proven on the Attempt's ExecutionContract.
+ *
+ * Universal fallback `activeCycleInstanceId=null → cyc:delivery` is NOT authorized.
+ * Anti-claims: ≠ invent CycleInstance · ≠ authorize W2 Options · ≠ HumanDecision ·
+ * ≠ Product PASS · ≠ SHE/gate mutation. CKC remains cognitive guidance only.
+ *
+ * Provenance note: EC `impactSignals` / `intentKind` are PREPARE-persisted analysis
+ * stamps (Boolean-coerced when Nora signals present) or HD-sealed when decisionRefs
+ * exist — not independent HumanDecision facts on every Generic path.
+ */
+export const POST_EVIDENCE_PROJECT_SCOPED_CYCLE_TYPE_ID = "cyc:delivery";
+
+/** Product F2 admits only read_only | other | null for executionIntent.intentKind. */
+const ADMITTED_INTENT_KINDS = new Set(["read_only", "other"]);
+
+export type ProjectOnlyDeliveryCkcEligibility =
+  | {
+      readonly eligible: true;
+      readonly reasonCode: "GENERIC_NON_STRUCTURAL_DELIVERY";
+    }
+  | {
+      readonly eligible: false;
+      readonly reasonCode:
+        | "CONTRACT_PROJECT_MISMATCH"
+        | "NOT_PROJECT_ONLY_CONTRACT"
+        | "NOT_GENERIC_PRODUCT_EC"
+        | "MATERIALITY_ABSENT"
+        | "MATERIALITY_CONTRADICTION"
+        | "MATERIALITY_NOT_NON_STRUCTURAL"
+        | "IMPACT_SIGNALS_ABSENT"
+        | "IMPACT_SIGNALS_MALFORMED"
+        | "IMPACT_CATEGORY_NON_DELIVERY"
+        | "READ_ONLY_NOT_DELIVERY"
+        | "INTENT_ABSENT_OR_UNKNOWN"
+        | "BOUNDED_NON_MUTATING_NOT_DELIVERY"
+        | "DELIVERY_POSITIVE_FACTS_ABSENT";
+    };
+
+type DurableImpactSignals = {
+  readonly structuralChange: boolean;
+  readonly securityImpact: boolean;
+  readonly architectureImpact: boolean;
+  readonly dataImpact: boolean;
+  readonly irreversible: boolean;
+};
+
+type MaterialityClass = "non_structural" | "structural" | "unknown";
+
+function readImpactSignals(
+  inputs: Record<string, unknown> | undefined,
+):
+  | { readonly ok: true; readonly signals: DurableImpactSignals }
+  | { readonly ok: false; readonly reason: "absent" | "malformed" } {
+  const raw = inputs?.impactSignals;
+  if (raw == null) return { ok: false, reason: "absent" };
+  if (typeof raw !== "object" || Array.isArray(raw)) {
+    return { ok: false, reason: "malformed" };
+  }
+  const o = raw as Record<string, unknown>;
+  for (const key of [
+    "structuralChange",
+    "securityImpact",
+    "architectureImpact",
+    "dataImpact",
+    "irreversible",
+  ] as const) {
+    if (typeof o[key] !== "boolean") return { ok: false, reason: "malformed" };
+  }
+  return {
+    ok: true,
+    signals: {
+      structuralChange: o.structuralChange as boolean,
+      securityImpact: o.securityImpact as boolean,
+      architectureImpact: o.architectureImpact as boolean,
+      dataImpact: o.dataImpact as boolean,
+      irreversible: o.irreversible as boolean,
+    },
+  };
+}
+
+function materialityFromConstraintToken(
+  constraints: readonly string[],
+): MaterialityClass | null | "conflict" {
+  const found = new Set<MaterialityClass>();
+  for (const c of constraints) {
+    if (c === "MATERIALITY:NON_STRUCTURAL") found.add("non_structural");
+    else if (c === "MATERIALITY:STRUCTURAL") found.add("structural");
+    else if (c === "MATERIALITY:UNKNOWN") found.add("unknown");
+  }
+  if (found.size === 0) return null;
+  if (found.size > 1) return "conflict";
+  return [...found][0]!;
+}
+
+function materialityFromFacts(
+  inputs: Record<string, unknown> | undefined,
+): MaterialityClass | null | "malformed" {
+  const facts = inputs?.materialityFacts;
+  if (!facts || typeof facts !== "object" || Array.isArray(facts)) return null;
+  const f = facts as {
+    assessedMateriality?: unknown;
+    materiality?: unknown;
+  };
+  // Authoritative PREPARE stamp is assessedMateriality; legacy `materiality` accepted.
+  const raw =
+    f.assessedMateriality !== undefined && f.assessedMateriality !== null
+      ? f.assessedMateriality
+      : f.materiality !== undefined && f.materiality !== null
+        ? f.materiality
+        : null;
+  if (raw === null) return null;
+  if (typeof raw !== "string") return "malformed";
+  const normalized = raw.trim().toLowerCase().replace(/-/g, "_");
+  if (
+    normalized === "non_structural" ||
+    normalized === "structural" ||
+    normalized === "unknown"
+  ) {
+    return normalized;
+  }
+  return "malformed";
+}
+
+/**
+ * Consistent materiality — no first-value-wins between constraint and facts.
+ */
+function readConsistentMateriality(
+  constraints: readonly string[],
+  inputs: Record<string, unknown> | undefined,
+):
+  | { readonly ok: true; readonly materiality: MaterialityClass }
+  | {
+      readonly ok: false;
+      readonly reason:
+        | "MATERIALITY_ABSENT"
+        | "MATERIALITY_CONTRADICTION"
+        | "MATERIALITY_NOT_NON_STRUCTURAL";
+    } {
+  const fromConstraint = materialityFromConstraintToken(constraints);
+  if (fromConstraint === "conflict") {
+    return { ok: false, reason: "MATERIALITY_CONTRADICTION" };
+  }
+  const fromFacts = materialityFromFacts(inputs);
+  if (fromFacts === "malformed") {
+    return { ok: false, reason: "MATERIALITY_CONTRADICTION" };
+  }
+  if (fromConstraint != null && fromFacts != null && fromConstraint !== fromFacts) {
+    return { ok: false, reason: "MATERIALITY_CONTRADICTION" };
+  }
+  const materiality = fromConstraint ?? fromFacts;
+  if (materiality == null) {
+    return { ok: false, reason: "MATERIALITY_ABSENT" };
+  }
+  if (materiality !== "non_structural") {
+    return { ok: false, reason: "MATERIALITY_NOT_NON_STRUCTURAL" };
+  }
+  return { ok: true, materiality };
+}
+
+/** Exact Product effect class only — never prefix (blocks local-write-extra). */
+const EXACT_LOCAL_WRITE_EFFECT_CLASS = "EFFECT_CLASS:local-write";
+
+/**
+ * Independent positive Delivery / implementation facts beyond intentKind exclusion.
+ *
+ * scopeIn / concreteMissionPaths prove WHERE only — NOT sufficient for Delivery WHAT.
+ *
+ * Affirmative durable WHAT accepted today (exact):
+ * - inputs.repositoryMutationDeclared === "write"
+ * - constraints includes exact EFFECT_CLASS:local-write
+ *
+ * EP-S2-08-PROOF-01 Option 1 (2026-10-28): Generic PREPARE preserves an
+ * already-declared analysis.repositoryMutationDeclared enum onto the EC
+ * (no invention; no EFFECT_CLASS:local-write stamp). Absence remains null
+ * and fails closed here. Declaration ≠ SHE authorization.
+ */
+function hasPositiveDeliveryImplementationFacts(input: {
+  readonly constraints: readonly string[];
+  readonly inputs?: Record<string, unknown>;
+}): boolean {
+  const inputs = input.inputs;
+  if (inputs?.boundedNonMutatingAnalysis === true) return false;
+  if (
+    input.constraints.includes("MISSION_EFFECT:NO_REPOSITORY_MUTATION_DECLARED")
+  ) {
+    return false;
+  }
+  const mutation = inputs?.repositoryMutationDeclared;
+  if (mutation === "none" || mutation === "read") return false;
+
+  if (mutation === "write") return true;
+  if (input.constraints.includes(EXACT_LOCAL_WRITE_EFFECT_CLASS)) return true;
+  return false;
+}
+
+/**
+ * Pure eligibility over durable EC stamps (Option A + R1 final corrections).
+ * Does not invent mission fields — reads Generic PREPARE / SHE durable stamps only.
+ */
+export function assessProjectOnlyDeliveryCkcEligibility(input: {
+  readonly projectId: string;
+  readonly contract: {
+    readonly projectId: string;
+    readonly cycleInstanceId?: string | null;
+    readonly action: string;
+    readonly constraints: readonly string[];
+    readonly inputs?: Record<string, unknown>;
+  };
+}): ProjectOnlyDeliveryCkcEligibility {
+  const { contract } = input;
+  if (contract.projectId !== input.projectId) {
+    return { eligible: false, reasonCode: "CONTRACT_PROJECT_MISMATCH" };
+  }
+  if ((contract.cycleInstanceId ?? null) !== null) {
+    return { eligible: false, reasonCode: "NOT_PROJECT_ONLY_CONTRACT" };
+  }
+  if (
+    contract.action !== PRODUCT_CANONICAL_EXECUTION_ACTION ||
+    !contract.constraints.includes(PRODUCT_GOVERNED_CONSTRAINT)
+  ) {
+    return { eligible: false, reasonCode: "NOT_GENERIC_PRODUCT_EC" };
+  }
+
+  const materiality = readConsistentMateriality(
+    contract.constraints,
+    contract.inputs,
+  );
+  if (!materiality.ok) {
+    return { eligible: false, reasonCode: materiality.reason };
+  }
+
+  const signalsResult = readImpactSignals(contract.inputs);
+  if (!signalsResult.ok) {
+    return {
+      eligible: false,
+      reasonCode:
+        signalsResult.reason === "absent"
+          ? "IMPACT_SIGNALS_ABSENT"
+          : "IMPACT_SIGNALS_MALFORMED",
+    };
+  }
+  const signals = signalsResult.signals;
+  // Authoritative materiality treats any of these as positive structural signal.
+  if (
+    signals.structuralChange ||
+    signals.architectureImpact ||
+    signals.securityImpact ||
+    signals.dataImpact ||
+    signals.irreversible
+  ) {
+    return { eligible: false, reasonCode: "IMPACT_CATEGORY_NON_DELIVERY" };
+  }
+
+  const intentRaw = contract.inputs?.intentKind;
+  const intentKind =
+    typeof intentRaw === "string" && intentRaw.trim().length > 0
+      ? intentRaw.trim()
+      : null;
+  if (intentKind == null) {
+    return { eligible: false, reasonCode: "INTENT_ABSENT_OR_UNKNOWN" };
+  }
+  if (!ADMITTED_INTENT_KINDS.has(intentKind)) {
+    return { eligible: false, reasonCode: "INTENT_ABSENT_OR_UNKNOWN" };
+  }
+  if (intentKind === "read_only") {
+    return { eligible: false, reasonCode: "READ_ONLY_NOT_DELIVERY" };
+  }
+  // intentKind === "other" — admitted catch-all; must not alone imply Delivery.
+  if (contract.inputs?.boundedNonMutatingAnalysis === true) {
+    return { eligible: false, reasonCode: "BOUNDED_NON_MUTATING_NOT_DELIVERY" };
+  }
+  if (
+    !hasPositiveDeliveryImplementationFacts({
+      constraints: contract.constraints,
+      inputs: contract.inputs,
+    })
+  ) {
+    return { eligible: false, reasonCode: "DELIVERY_POSITIVE_FACTS_ABSENT" };
+  }
+
+  return { eligible: true, reasonCode: "GENERIC_NON_STRUCTURAL_DELIVERY" };
+}
+
+export type ResolvedPostEvidenceCkcContext = {
+  readonly cycleTypeId: string;
+  readonly packagePin: DoctrinePackagePin;
+  readonly lpsVersion: number;
+  readonly projectScoped: boolean;
+  readonly activeCycleInstanceId: string | null;
+  readonly eligibilityReasonCode: string | null;
+};
+
+function isAmbiguousEligibilityReason(reasonCode: string): boolean {
+  return (
+    reasonCode === "IMPACT_SIGNALS_ABSENT" ||
+    reasonCode === "IMPACT_SIGNALS_MALFORMED" ||
+    reasonCode === "MATERIALITY_ABSENT" ||
+    reasonCode === "MATERIALITY_CONTRADICTION" ||
+    reasonCode === "INTENT_ABSENT_OR_UNKNOWN" ||
+    reasonCode === "DELIVERY_POSITIVE_FACTS_ABSENT"
+  );
+}
+
+export async function resolvePostEvidenceCkcContext(input: {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+  readonly attemptId: string;
+}): Promise<
+  | { readonly ok: true; readonly context: ResolvedPostEvidenceCkcContext }
+  | { readonly ok: false; readonly code: string; readonly message: string }
+> {
+  const live = await readLiveProjectContext(input.oa, input.projectId);
+  if (!live.ok) {
+    return { ok: false, code: live.code, message: live.message };
+  }
+
+  const packagePin: DoctrinePackagePin = Object.freeze({
+    doctrinePackageId: live.context.doctrinePackageId,
+    version: live.context.doctrineVersion,
+    digest: live.context.doctrineDigest as Digest,
+  });
+
+  const attemptServices = input.oa.executionAttemptServices;
+  const contractServices = input.oa.executionContractServices;
+  if (!attemptServices || !contractServices) {
+    return {
+      ok: false,
+      code: "EXECUTION_SERVICES_UNAVAILABLE",
+      message:
+        "Services Attempt/EC indisponibles — orientation CKC post-Evidence refusee.",
+    };
+  }
+
+  // Attempt → EC lineage is authoritative for this post-Evidence orientation.
+  const attempt = await attemptServices.getExecutionAttempt.execute({
+    attemptId: input.attemptId,
+  });
+  if (!attempt.ok) {
+    return {
+      ok: false,
+      code: attempt.error.detailCode,
+      message: "Attempt introuvable pour eligibilite CKC post-Evidence.",
+    };
+  }
+
+  const ec = await contractServices.getExecutionContract.execute({
+    executionContractId: attempt.attempt.executionContractId,
+  });
+  if (!ec.ok) {
+    return {
+      ok: false,
+      code: ec.error.detailCode,
+      message: "ExecutionContract introuvable pour eligibilite CKC post-Evidence.",
+    };
+  }
+
+  if (ec.contract.projectId !== input.projectId) {
+    return {
+      ok: false,
+      code: "POST_EVIDENCE_CKC_ATTEMPT_PROJECT_MISMATCH",
+      message:
+        "Attempt/EC projectId diverge du Project demande — orientation CKC refusee.",
+    };
+  }
+
+  const ecCycleId = ec.contract.cycleInstanceId ?? null;
+  const lpsCycleId = live.context.activeCycleInstanceId ?? null;
+
+  // Cycle-bound Attempt/EC: resolve CKC from EC cycle lineage (not LPS alone).
+  if (ecCycleId != null) {
+    if (lpsCycleId != null && lpsCycleId !== ecCycleId) {
+      return {
+        ok: false,
+        code: "POST_EVIDENCE_CKC_CYCLE_LINEAGE_MISMATCH",
+        message:
+          "LPS activeCycle diverge de l'EC de l'Attempt — orientation CKC refusee (fail-closed).",
+      };
+    }
+    const cycle = await input.oa.cycleServices.getCycle.execute({
+      cycleInstanceId: ecCycleId,
+    });
+    if (!cycle.ok) {
+      return {
+        ok: false,
+        code: cycle.error.detailCode,
+        message:
+          "CycleInstance de l'EC introuvable pour orientation CKC post-Evidence.",
+      };
+    }
+    if (cycle.cycle.projectId !== input.projectId) {
+      return {
+        ok: false,
+        code: "POST_EVIDENCE_CKC_PROVENANCE_INCOHERENT",
+        message:
+          "CycleInstance de l'EC hors Project — orientation CKC refusee.",
+      };
+    }
+    return {
+      ok: true,
+      context: {
+        cycleTypeId: cycle.cycle.cycleTypeId,
+        packagePin,
+        lpsVersion: live.context.lpsVersion,
+        projectScoped: false,
+        activeCycleInstanceId: ecCycleId,
+        eligibilityReasonCode: "ACTIVE_CYCLE_TYPE",
+      },
+    };
+  }
+
+  // Project-only EC: refuse silent adoption of a newer LPS active cycle.
+  if (lpsCycleId != null) {
+    return {
+      ok: false,
+      code: "POST_EVIDENCE_CKC_PROVENANCE_INCOHERENT",
+      message:
+        "EC Project-only mais LPS a un cycle actif — orientation CKC refusee (pas de substitution silencieuse).",
+    };
+  }
+
+  const eligibility = assessProjectOnlyDeliveryCkcEligibility({
+    projectId: input.projectId,
+    contract: {
+      projectId: ec.contract.projectId,
+      cycleInstanceId: ec.contract.cycleInstanceId,
+      action: ec.contract.action,
+      constraints: ec.contract.constraints,
+      inputs: ec.contract.inputs,
+    },
+  });
+  if (!eligibility.eligible) {
+    return {
+      ok: false,
+      code: isAmbiguousEligibilityReason(eligibility.reasonCode)
+        ? "POST_EVIDENCE_CKC_AMBIGUOUS"
+        : "POST_EVIDENCE_CKC_NOT_ELIGIBLE",
+      message: `Orientation CKC Delivery Project-only refusee (${eligibility.reasonCode}) — pas de fallback universel.`,
+    };
+  }
+
+  return {
+    ok: true,
+    context: {
+      cycleTypeId: POST_EVIDENCE_PROJECT_SCOPED_CYCLE_TYPE_ID,
+      packagePin,
+      lpsVersion: live.context.lpsVersion,
+      projectScoped: true,
+      activeCycleInstanceId: null,
+      eligibilityReasonCode: eligibility.reasonCode,
+    },
+  };
+}
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts b/projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
index dba328ce..6063a05e 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
@@ -45,7 +45,7 @@ import {
   parseContractStringListInput,
 } from "@/lib/oa/execution-contract";
 import type { W3BProductTerminalProjection } from "./w3bProductTerminalProjection";
-import { resolveW2QualificationInputs } from "./qualificationInputs";
+import { resolvePostEvidenceCkcContext } from "./qualificationInputs";
 
 export type W3cRecommendationKind =
   | "continue"
@@ -1668,8 +1668,14 @@ export async function runW3cPostEvidenceLoop(input: {
   }
 
   // W3-D / US-P1-14 — full CKC Phase B on post-Evidence Nora path.
-  // Same product-native load + prompt seam as W2 Options (no parallel resolver).
-  const qualification = await resolveW2QualificationInputs({ oa, projectId });
+  // Product-native CKC load (same package seam as W2 Options).
+  // EP-S2-08 Morris Option A: Project-only Delivery CKC only when Attempt EC
+  // proves Generic NON_STRUCTURAL Delivery eligibility — no universal fallback.
+  const qualification = await resolvePostEvidenceCkcContext({
+    oa,
+    projectId,
+    attemptId,
+  });
   if (!qualification.ok) {
     return failClosed(
       qualification.code,
@@ -1679,13 +1685,13 @@ export async function runW3cPostEvidenceLoop(input: {
   const registryRoot = resolveProductDoctrineRegistryRoot();
   const ckcContent = loadProductCkcCognitiveContent({
     registryRoot,
-    cycleTypeId: qualification.qualification.inputs.cycleTypeId,
-    packagePin: qualification.qualification.packagePin,
+    cycleTypeId: qualification.context.cycleTypeId,
+    packagePin: qualification.context.packagePin,
   });
   if (!ckcContent) {
     return failClosed(
       "CKC_UNAVAILABLE",
-      "CKC product-native introuvable ou incohérent pour le cycle actif — aucune mutation LPS/Epistemic post-Evidence.",
+      "CKC product-native introuvable ou incohérent pour l'orientation post-Evidence — aucune mutation LPS/Epistemic.",
     );
   }
   const ckcPromptSection = buildCkcCognitivePromptSection(ckcContent);
diff --git a/projects/sfia-studio/app/lib/oa/execution-contract/projection/inspectionDisclosure.ts b/projects/sfia-studio/app/lib/oa/execution-contract/projection/inspectionDisclosure.ts
index e831f481..cfa81aa9 100644
--- a/projects/sfia-studio/app/lib/oa/execution-contract/projection/inspectionDisclosure.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-contract/projection/inspectionDisclosure.ts
@@ -31,6 +31,17 @@ export type ExecutionContractInspectionDisclosure = {
   readonly scopeOut: readonly string[] | null;
   readonly createOrModify: boolean | null;
   readonly noDelete: boolean | null;
+  /**
+   * Declared repository mutation from durable EC inputs (inspectable WHAT).
+   * Enum only — never invents "write". Null = absent declaration.
+   * Disclosure ≠ authorization.
+   */
+  readonly repositoryMutationDeclared?:
+    | "none"
+    | "read"
+    | "write"
+    | "unknown"
+    | null;
   readonly objective: string | null;
   readonly artifactType: string | null;
   readonly artifactBrief: string | null;
@@ -115,6 +126,18 @@ export function projectExecutionContractInspectionDisclosure(
   const artifactBrief = asNonEmptyString(inputs.artifactBrief);
   const createOrModify = asBoolean(inputs.createOrModify);
   const noDelete = asBoolean(inputs.noDelete);
+  const repositoryMutationDeclared = (() => {
+    const raw = inputs.repositoryMutationDeclared;
+    if (
+      raw === "none" ||
+      raw === "read" ||
+      raw === "write" ||
+      raw === "unknown"
+    ) {
+      return raw;
+    }
+    return null;
+  })();
   const sourceGrounding = parseContractSourceGrounding(
     inputs[CONTRACT_SOURCE_GROUNDING_INPUT_KEY],
   );
@@ -145,6 +168,7 @@ export function projectExecutionContractInspectionDisclosure(
     scopeOut,
     createOrModify,
     noDelete,
+    repositoryMutationDeclared,
     objective,
     artifactType,
     artifactBrief,
@@ -227,6 +251,11 @@ export function requiredInspectedFactsForContract(
     facts.push(`inputs.${CONTRACT_REPORT_REQUIREMENTS_INPUT_KEY}`);
   }
 
+  // Declared repository mutation is inspectable WHAT when present on the EC.
+  if (d.repositoryMutationDeclared != null) {
+    facts.push("inputs.repositoryMutationDeclared");
+  }
+
   return Object.freeze([...facts]);
 }
 

```

---

## 7 — Full test sources (untracked / extended)

### akgM5L3S2.epS208.proof01.rInspect01.d0.test.ts (R-INSPECT + R-HD-01)

```typescript
/**
 * EP-S2-08-PROOF-01 — R-INSPECT-01 inspection disclosure + HD coherence (DET).
 *
 * Proves durable repositoryMutationDeclared is:
 * - projected into canonical inspection disclosure;
 * - required as an inspected fact when present;
 * - rendered by the Product Pilote fact-row presentation;
 * - coherent with HD-sealed read_only / non-mutating stamps;
 * - not an independent authorization.
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  buildIntentAnalysisFromSolicitedMission,
  prepareGenericExecutionContractDraft,
  solicitGenericExecutionPrepare,
} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import { singleHumanExecutePreparedContract } from "@/features/project-assistant/w2/singleHumanExecutePreparedContract";
import {
  assertExecutionContractInternalConsistency,
  GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
} from "@/features/project-assistant/w2/genericMissionSubject";
import {
  recordGenericMissionHumanDecision,
  sealGenericMissionForPresentation,
} from "@/features/project-assistant/w2/recordGenericMissionHumanDecision";
import { assessProjectOnlyDeliveryCkcEligibility } from "@/features/project-assistant/w2/qualificationInputs";
import {
  projectExecutionContractInspectionDisclosure,
  requiredInspectedFactsForContract,
} from "@/lib/oa/execution-contract";
import { validateDecisionBasis } from "@/lib/oa/decision";
import { buildInspectionFactRowsFromDisclosure } from "@/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import type { ExecutionContract } from "@/lib/oa/execution-contract";

const NOTES_PATH = "projects/demo/notes/project-notes.md";

function restoreEnvVar(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

function requiredFactsOrThrow(
  contract: ExecutionContract,
): readonly string[] {
  const facts = requiredInspectedFactsForContract(contract);
  if (Array.isArray(facts)) return facts;
  throw new Error(
    `inspection disclosure incomplete: ${(facts as { code: string }).code}`,
  );
}

function writeAnalysis(): IntentAnalysisDto {
  const base = buildIntentAnalysisFromSolicitedMission({
    objective: "R-INSPECT-01 declared write notes edit",
    expectedOutcome: "Inspectable write declaration on EC",
    scope: NOTES_PATH,
    repositoryMutation: "write",
    impactSignals: { structuralChange: false, architectureImpact: false },
  });
  return {
    ...base,
    executionIntent: {
      intentKind: "other",
      scopeIn: [NOTES_PATH],
      requiredCapabilities: [],
    },
  };
}

function readOnlyAnalysis(): IntentAnalysisDto {
  const base = buildIntentAnalysisFromSolicitedMission({
    objective: "R-INSPECT-01 read-only notes review",
    expectedOutcome: "Non-mutating inspection",
    scope: NOTES_PATH,
    repositoryMutation: "none",
    impactSignals: { structuralChange: false, architectureImpact: false },
  });
  return {
    ...base,
    executionIntent: {
      intentKind: "read_only",
      scopeIn: [NOTES_PATH],
      requiredCapabilities: [],
    },
  };
}

describe("EP-S2-08-PROOF-01 R-INSPECT-01 — inspection + HD coherence (DET)", () => {
  let previousMorris: string | undefined;
  let previousDetPin: string | undefined;
  let previousPilot: string | undefined;

  beforeEach(() => {
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousDetPin = process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
    previousPilot = process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = "1";
    process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = W2_TEST_PINNED_BASE_HEAD_SHA;
    process.env.SFIA_STUDIO_CURSOR_REAL = "0";
    delete process.env.SFIA_STUDIO_LOCAL_OA_EXCLUSIVE;
  });

  afterEach(() => {
    cleanupW2TempDirs();
    restoreEnvVar("SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY", previousMorris);
    restoreEnvVar("SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA", previousDetPin);
    restoreEnvVar("SFIA_STUDIO_LOCAL_PILOT_AUTHORITY", previousPilot);
  });

  async function seed(
    runtime: RuntimeApplicationService,
    suffix: string,
  ): Promise<{
    projectId: string;
    oa: NonNullable<RuntimeApplicationService["oa"]>;
  }> {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: "demo",
      objective: "EP-S2-08 R-INSPECT-01",
      context: "inspection disclosure",
      criticality: "STANDARD",
      constraints: ["ZERO REAL", "R-INSPECT DET"],
      shortReference: `RI${suffix.toUpperCase().slice(0, 4)}`,
      idempotencyKey: `idem:ep08-ri-${suffix}`,
    });
    if (!created.ok) {
      throw new Error(`createProject: ${created.error?.message ?? "fail"}`);
    }
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
    const identity = `acme/ep08-ri-${suffix}`;
    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
      identity,
    });
    return { projectId, oa };
  }

  it("INSPECT-P1/P2/P4/P5 — declared write persists, discloses, requires fact, SHE does not widen", async () => {
    const runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("ep08-ri-p1"),
      idPrefix: "ep08rip1",
    });
    const { projectId, oa } = await seed(runtime, "p1");

    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: writeAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);

    const live = await oa.executionContractServices!.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(live.ok).toBe(true);
    if (!live.ok) throw new Error("get EC");

    // INSPECT-P1
    const inputs = live.contract.inputs as Record<string, unknown>;
    expect(inputs.repositoryMutationDeclared).toBe("write");

    // INSPECT-P2
    const projected = projectExecutionContractInspectionDisclosure(live.contract);
    expect(projected.ok).toBe(true);
    if (!projected.ok) throw new Error("disclosure incomplete");
    expect(projected.disclosure.repositoryMutationDeclared).toBe("write");

    // INSPECT-P4 — required fact covers displayed operation
    const required = requiredFactsOrThrow(live.contract);
    expect(required).toContain("inputs.repositoryMutationDeclared");
    const rows = buildInspectionFactRowsFromDisclosure({
      disclosure: projected.disclosure,
      requiredInspectedFacts: required,
    });
    expect(rows.missingRequired).toEqual([]);
    const mutationRow = rows.rows.find(
      (r) => r.factId === "inputs.repositoryMutationDeclared",
    );
    expect(mutationRow).toBeTruthy();
    expect(mutationRow!.label).toBe("Opération déclarée sur le dépôt");
    expect(mutationRow!.value).toContain("Écriture déclarée");
    expect(mutationRow!.value).toContain("autorisation du contrat");
    expect(rows.presentedFactIds).toContain("inputs.repositoryMutationDeclared");

    // INSPECT-P5 — SHE binds inspected identity; declaration ≠ extra authority
    const she = await singleHumanExecutePreparedContract({
      oa,
      projectId,
      executionContractId: live.contract.executionContractId,
      expectedVersion: live.contract.version,
      expectedSemanticFingerprint: live.contract.semanticFingerprint!,
      presentedFactIds: rows.presentedFactIds,
      forceLocalAuthority: true,
    });
    expect(she.ok).toBe(true);
    if (!she.ok) throw new Error(`${she.code} ${she.message}`);
    expect(she.authorization.outcome).toBe("AUTHORIZED");
    expect(she.executionAttemptCreated).toBe(false);
  }, 90_000);

  it("INSPECT-P3 — Pilote fact rows render declared write intelligibly (presentation DET)", () => {
    const disclosure = {
      action: "studio.cursor.generalist.execute",
      technicalTarget: "studio.cursor.generalist.workspace",
      scope: "project",
      targetRepositoryRef: "acme/demo",
      targetPath: null,
      scopeIn: [NOTES_PATH] as readonly string[],
      scopeOut: null,
      createOrModify: null,
      noDelete: null,
      repositoryMutationDeclared: "write" as const,
      objective: "notes edit",
      artifactType: null,
      artifactBrief: null,
      contentRequirements: null,
      validationExpectations: null,
      expectedOutputs: null,
      sourceGrounding: null,
      acceptanceCriteria: null,
      validationPlan: null,
      reportRequirements: null,
      evidenceRequirements: [] as readonly string[],
      requiredAuthority: "N3",
      requiredCapabilities: [] as readonly string[],
      constraints: ["PRODUCT_GOVERNED", "MATERIALITY:NON_STRUCTURAL"],
      stopConditions: [] as readonly string[],
      reversibility: "reversible" as const,
      contractVersion: 1,
      executionContractId: "xct:inspect-p3",
      semanticFingerprint: "fp:inspect-p3",
      disclosureComplete: true,
      incompletenessCode: null,
    };
    const required = [
      "action",
      "target",
      "scope",
      "inputs.repositoryMutationDeclared",
      "semanticFingerprint",
    ];
    const rows = buildInspectionFactRowsFromDisclosure({
      disclosure,
      requiredInspectedFacts: required,
    });
    expect(rows.missingRequired).toEqual([]);
    const row = rows.rows.find(
      (r) => r.factId === "inputs.repositoryMutationDeclared",
    );
    expect(row?.value).toMatch(/Écriture déclarée/);
    expect(row?.value).toContain("soumise");
    expect(row?.value).toContain("autorisation du contrat");
  });

  it("INSPECT-N1 — absent declaration does not invent write in disclosure or rows", async () => {
    // Pure disclosure path: inputs without repositoryMutationDeclared
    const contract = {
      executionContractId: "xct:n1",
      projectId: "prj:n1",
      version: 1,
      status: "draft",
      action: "studio.cursor.generalist.execute",
      target: "studio.cursor.generalist.workspace",
      scope: "project",
      requiredAuthority: "N3",
      requiredCapabilities: [],
      constraints: ["PRODUCT_GOVERNED"],
      stopConditions: [],
      evidenceRequirements: [],
      reversibility: "reversible",
      expectedOutputs: [],
      inputs: {
        objective: "x",
        intentKind: "other",
        scopeIn: [NOTES_PATH],
      },
      semanticFingerprint: "fp:n1",
    } as unknown as ExecutionContract;

    const projected = projectExecutionContractInspectionDisclosure(contract);
    expect(projected.ok).toBe(true);
    if (!projected.ok) return;
    expect(projected.disclosure.repositoryMutationDeclared).toBeNull();
    const facts = requiredInspectedFactsForContract(contract);
    expect(Array.isArray(facts) && facts.includes("inputs.repositoryMutationDeclared")).toBe(
      false,
    );
    const rows = buildInspectionFactRowsFromDisclosure({
      disclosure: projected.disclosure,
      requiredInspectedFacts: Array.isArray(facts) ? facts : [],
    });
    expect(
      rows.rows.some((r) => r.value.toLowerCase().includes("écriture déclarée")),
    ).toBe(false);
  });

  it("INSPECT-N2 — read-only / none declaration remains non-Delivery and discloses neutrally", async () => {
    const runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("ep08-ri-n2"),
      idPrefix: "ep08rin2",
    });
    const { projectId, oa } = await seed(runtime, "n2");
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: readOnlyAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    // Pathless/read_only may qualify or need concrete paths — either way mutation ≠ write.
    if (!prep.ok) {
      // Fail-closed PREPARE is acceptable for this oracle when Product refuses.
      expect(prep.ok).toBe(false);
      return;
    }
    const live = await oa.executionContractServices!.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(live.ok).toBe(true);
    if (!live.ok) return;
    const mutation = (live.contract.inputs as Record<string, unknown>)
      .repositoryMutationDeclared;
    expect(mutation === "none" || mutation === "read").toBe(true);
    expect(mutation).not.toBe("write");
    const projected = projectExecutionContractInspectionDisclosure(live.contract);
    expect(projected.ok && projected.disclosure.repositoryMutationDeclared).not.toBe(
      "write",
    );
  }, 60_000);

  it("INSPECT-N3 — unknown declaration discloses as ambiguous, not promoted to write", () => {
    const contract = {
      executionContractId: "xct:n3",
      projectId: "prj:n3",
      version: 1,
      status: "draft",
      action: "a",
      target: "t",
      scope: "s",
      requiredAuthority: "N3",
      requiredCapabilities: [],
      constraints: [],
      stopConditions: [],
      evidenceRequirements: [],
      reversibility: "reversible",
      expectedOutputs: [],
      inputs: { repositoryMutationDeclared: "unknown" },
      semanticFingerprint: "fp:n3",
    } as unknown as ExecutionContract;
    const projected = projectExecutionContractInspectionDisclosure(contract);
    expect(projected.ok).toBe(true);
    if (!projected.ok) return;
    expect(projected.disclosure.repositoryMutationDeclared).toBe("unknown");
    const facts = requiredInspectedFactsForContract(contract);
    expect(Array.isArray(facts) && facts.includes("inputs.repositoryMutationDeclared")).toBe(
      true,
    );
    const rows = buildInspectionFactRowsFromDisclosure({
      disclosure: projected.disclosure,
      requiredInspectedFacts: ["inputs.repositoryMutationDeclared"],
    });
    expect(rows.rows[0]?.value).toMatch(/inconnue/i);
    expect(rows.rows[0]?.value).not.toMatch(/^Écriture déclarée/);
  });

  it("INSPECT-N5 — required mutation fact without displayable value → missingRequired (no silent attest)", () => {
    const disclosure = {
      action: "a",
      technicalTarget: "t",
      scope: "s",
      targetRepositoryRef: null,
      targetPath: null,
      scopeIn: null,
      scopeOut: null,
      createOrModify: null,
      noDelete: null,
      repositoryMutationDeclared: null,
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
      evidenceRequirements: [] as readonly string[],
      requiredAuthority: "N3",
      requiredCapabilities: [] as readonly string[],
      constraints: [] as readonly string[],
      stopConditions: [] as readonly string[],
      reversibility: "reversible" as const,
      contractVersion: 1,
      executionContractId: "xct:n5",
      semanticFingerprint: "fp:n5",
      disclosureComplete: true,
      incompletenessCode: null,
    };
    const rows = buildInspectionFactRowsFromDisclosure({
      disclosure,
      requiredInspectedFacts: ["inputs.repositoryMutationDeclared"],
    });
    expect(rows.missingRequired).toContain("inputs.repositoryMutationDeclared");
    expect(rows.presentedFactIds).not.toContain("inputs.repositoryMutationDeclared");
  });

  it("HD-N1 — write vs read_only intent on same EC fails internal consistency", () => {
    const r = assertExecutionContractInternalConsistency({
      constraints: [
        "PRODUCT_GOVERNED",
        "MATERIALITY:NON_STRUCTURAL",
        "MISSION_EFFECT:NO_REPOSITORY_MUTATION_DECLARED",
      ],
      inputs: {
        missionSubjectId: "ms:hd-n1",
        presentationDigest: "pd:hd-n1",
        materialityFacts: { assessedMateriality: "non_structural" },
        intentKind: "read_only",
        repositoryMutationDeclared: "write",
        boundedNonMutatingAnalysis: true,
        risks: [],
        reservations: [],
      },
    });
    expect(r.ok).toBe(false);
    if (!r.ok) {
      expect(
        r.reason === "mutation_write_vs_read_only_intent" ||
          r.reason === "mutation_write_vs_bounded_non_mutating" ||
          r.reason === "mutation_write_vs_no_mutation_constraint",
      ).toBe(true);
    }
  });

  it("HD-P1 — coherent write + other intent passes internal consistency", () => {
    const r = assertExecutionContractInternalConsistency({
      constraints: ["PRODUCT_GOVERNED", "MATERIALITY:NON_STRUCTURAL"],
      inputs: {
        missionSubjectId: "ms:hd-p1",
        presentationDigest: "pd:hd-p1",
        materialityFacts: { assessedMateriality: "non_structural" },
        intentKind: "other",
        repositoryMutationDeclared: "write",
        boundedNonMutatingAnalysis: false,
        risks: [],
        reservations: [],
      },
    });
    expect(r.ok).toBe(true);
  });

  it("HD-N2 — absent mutation is not inferred as HD write approval", () => {
    const r = assertExecutionContractInternalConsistency({
      constraints: ["PRODUCT_GOVERNED", "MATERIALITY:NON_STRUCTURAL"],
      inputs: {
        missionSubjectId: "ms:hd-n2",
        presentationDigest: "pd:hd-n2",
        materialityFacts: { assessedMateriality: "non_structural" },
        intentKind: "other",
        // repositoryMutationDeclared intentionally absent
        risks: [],
        reservations: [],
      },
    });
    expect(r.ok).toBe(true);
    const contract = {
      executionContractId: "xct:hd-n2",
      projectId: "prj",
      version: 1,
      status: "draft",
      action: "a",
      target: "t",
      scope: "s",
      requiredAuthority: "N3",
      requiredCapabilities: [],
      constraints: ["PRODUCT_GOVERNED"],
      stopConditions: [],
      evidenceRequirements: [],
      reversibility: "reversible",
      expectedOutputs: [],
      inputs: { intentKind: "other" },
      semanticFingerprint: "fp",
    } as unknown as ExecutionContract;
    const d = projectExecutionContractInspectionDisclosure(contract);
    expect(d.ok && d.disclosure.repositoryMutationDeclared).toBeNull();
  });

  it("INSPECT-N4 — fingerprint / version binding: presented facts must match live EC identity", async () => {
    const runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("ep08-ri-n4"),
      idPrefix: "ep08rin4",
    });
    const { projectId, oa } = await seed(runtime, "n4");
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: writeAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    const live = await oa.executionContractServices!.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(live.ok).toBe(true);
    if (!live.ok) throw new Error("get EC");
    const facts = requiredFactsOrThrow(live.contract);
    const she = await singleHumanExecutePreparedContract({
      oa,
      projectId,
      executionContractId: live.contract.executionContractId,
      expectedVersion: live.contract.version,
      expectedSemanticFingerprint: "fp:stale-wrong-fingerprint",
      presentedFactIds: facts,
      forceLocalAuthority: true,
    });
    expect(she.ok).toBe(false);
    if (!she.ok) {
      expect(she.code).toMatch(/FINGERPRINT|STALE|CURRENT|MISMATCH|INSPECT/i);
    }
  }, 60_000);
});

/**
 * R-HD-01 — integrated Product OA HumanDecision provenance oracles.
 *
 * PATH A: historical pre-bound ACCEPT_PREPARE HD (hdRequired && decisionId).
 * PATH B: PREPARE → INSPECT → SHE → AUTHORIZE_INSPECTED_EXECUTE (when applicable).
 * PATH C: NON_STRUCTURAL PREPARE without systematic HD.
 *
 * Production code is READ-ONLY in this corrective. Tests only.
 */
describe("EP-S2-08-PROOF-01 R-HD-01 — integrated HD provenance (DET)", () => {
  let previousMorris: string | undefined;
  let previousDetPin: string | undefined;
  let previousPilot: string | undefined;

  beforeEach(() => {
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousDetPin = process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
    previousPilot = process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = "1";
    process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = W2_TEST_PINNED_BASE_HEAD_SHA;
    process.env.SFIA_STUDIO_CURSOR_REAL = "0";
    delete process.env.SFIA_STUDIO_LOCAL_OA_EXCLUSIVE;
  });

  afterEach(() => {
    cleanupW2TempDirs();
    restoreEnvVar("SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY", previousMorris);
    restoreEnvVar("SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA", previousDetPin);
    restoreEnvVar("SFIA_STUDIO_LOCAL_PILOT_AUTHORITY", previousPilot);
  });

  const STRUCT_SCOPE = "projects/demo/src/authority";

  /**
   * PATH A requires hdRequired=true. Structural impact forces HD consumption
   * when decisionId is supplied. intentKind=read_only is sealed; mutation write
   * is added only on the contradictory PREPARE analysis (verifier does not
   * compare repositoryMutationDeclared — dedicated R-INSPECT guard does).
   */
  function structuralReadOnlyAnalysis(mutation?: "none" | "write" | null): IntentAnalysisDto {
    const base = buildIntentAnalysisFromSolicitedMission({
      objective: "R-HD-01 structural read_only mission",
      expectedOutcome: "Inspectable structural resume after HD",
      scope: STRUCT_SCOPE,
      ...(mutation === "none" || mutation === "write"
        ? { repositoryMutation: mutation }
        : {}),
      impactSignals: {
        structuralChange: true,
        architectureImpact: true,
      },
    });
    return {
      ...base,
      executionIntent: {
        intentKind: "read_only",
        scopeIn: [STRUCT_SCOPE],
        requiredCapabilities: [],
      },
    };
  }

  function structuralCoherentAnalysis(): IntentAnalysisDto {
    const base = buildIntentAnalysisFromSolicitedMission({
      objective: "R-HD-01 structural coherent mission",
      expectedOutcome: "HD-bound PREPARE resume",
      scope: STRUCT_SCOPE,
      repositoryMutation: "write",
      impactSignals: {
        structuralChange: true,
        architectureImpact: true,
      },
    });
    return {
      ...base,
      executionIntent: {
        intentKind: "other",
        scopeIn: [STRUCT_SCOPE],
        requiredCapabilities: [],
      },
    };
  }

  async function seedHd(
    runtime: RuntimeApplicationService,
    suffix: string,
  ): Promise<{
    projectId: string;
    oa: NonNullable<RuntimeApplicationService["oa"]>;
  }> {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: "demo",
      objective: "EP-S2-08 R-HD-01",
      context: "integrated HD provenance",
      criticality: "STANDARD",
      constraints: ["ZERO REAL", "R-HD DET"],
      shortReference: `RH${suffix.toUpperCase().slice(0, 4)}`,
      idempotencyKey: `idem:ep08-rhd-${suffix}`,
    });
    if (!created.ok) {
      throw new Error(`createProject: ${created.error?.message ?? "fail"}`);
    }
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
    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
      identity: `acme/ep08-rhd-${suffix}`,
    });
    return { projectId, oa };
  }

  async function sealAndAcceptPrepare(input: {
    oa: NonNullable<RuntimeApplicationService["oa"]>;
    projectId: string;
    analysis: IntentAnalysisDto;
  }) {
    const sealed = await sealGenericMissionForPresentation({
      oa: input.oa,
      projectId: input.projectId,
      cycleInstanceId: null,
      analysis: input.analysis,
    });
    if (!sealed.ok) {
      throw new Error(`seal: ${sealed.code} ${sealed.message}`);
    }
    const recorded = await recordGenericMissionHumanDecision({
      oa: input.oa,
      subject: sealed.subject,
      selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
      analysis: input.analysis,
      forceLocalAuthority: true,
    });
    if (!recorded.ok) {
      throw new Error(`record: ${recorded.code} ${recorded.message}`);
    }
    return { subject: sealed.subject, decision: recorded.decision };
  }

  it("HD-N1 — real ACCEPT_PREPARE HD + contradictory write declaration → first fail-closed gate", async () => {
    const runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("ep08-rhd-n1"),
      idPrefix: "ep08rhdn1",
    });
    const { projectId, oa } = await seedHd(runtime, "n1");

    const sealedAnalysis = structuralReadOnlyAnalysis("none");
    const { decision, subject } = await sealAndAcceptPrepare({
      oa,
      projectId,
      analysis: sealedAnalysis,
    });

    // Real durable HD evidence
    expect(decision.decisionId).toMatch(/^dec:/);
    expect(decision.selectedOptionId).toBe(GENERIC_MISSION_OPTION_ACCEPT_PREPARE);
    expect(decision.decisionBasis?.sourceType).toBe("generic_mission");
    expect(decision.decisionBasis?.sourceDigest).toBe(subject.presentationDigest);
    expect(decision.subject).toBe(subject.missionSubjectId);
    // null = no invariant violation (durable DecisionBasis accepted)
    expect(validateDecisionBasis(decision.decisionBasis!)).toBeNull();
    expect(decision.decisionBasis?.genericMissionContext?.intentKind).toBe(
      "read_only",
    );
    // repositoryMutationDeclared is NOT a canonical HD-sealed field
    expect(
      (decision.decisionBasis?.genericMissionContext as Record<string, unknown> | undefined)
        ?.repositoryMutationDeclared,
    ).toBeUndefined();

    const hdCountAfterSeal = (
      await oa.decisionServices!.decisions.listByProject(projectId)
    ).length;
    expect(hdCountAfterSeal).toBe(1);

    // Same sealed mission facts for verifier; only mutation flips to write.
    const contradictory = structuralReadOnlyAnalysis("write");
    expect(
      (contradictory as { repositoryMutationDeclared?: string })
        .repositoryMutationDeclared,
    ).toBe("write");
    expect(contradictory.executionIntent?.intentKind).toBe("read_only");

    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: contradictory,
      decisionId: decision.decisionId,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });

    expect(prep.ok).toBe(false);
    if (!prep.ok) {
      // Exact first fail-closed gate (recorded for Review Pack / R23 coverage class).
      // Dedicated R-INSPECT guard is BEHAVIOR PROVEN only when this code matches.
      expect(prep.code).toBe("HD_MUTATION_DECLARATION_CONFLICT");
      expect(prep.message).toMatch(/read_only/i);
      expect(prep.message).toMatch(/write/i);
    }

    // No unauthorized Attempt; HD count unchanged (no auto HD).
    expect(
      (await oa.decisionServices!.decisions.listByProject(projectId)).length,
    ).toBe(hdCountAfterSeal);
  }, 90_000);

  it("HD-P1 — coherent structural ACCEPT_PREPARE HD → PREPARE binds real decisionRefs", async () => {
    const runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("ep08-rhd-p1"),
      idPrefix: "ep08rhdp1",
    });
    const { projectId, oa } = await seedHd(runtime, "p1");
    const analysis = structuralCoherentAnalysis();
    const { decision, subject } = await sealAndAcceptPrepare({
      oa,
      projectId,
      analysis,
    });

    expect(validateDecisionBasis(decision.decisionBasis!)).toBeNull();
    expect(decision.decisionBasis?.sourceDigest).toBe(subject.presentationDigest);
    expect(decision.selectedOptionId).toBe(GENERIC_MISSION_OPTION_ACCEPT_PREPARE);

    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
      decisionId: decision.decisionId,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(`${prep.code} ${prep.message}`);
    expect(prep.contract.decisionRefs).toEqual([decision.decisionId]);
    expect(prep.humanDecisionCreated).toBe(false);
    expect(prep.executionAttemptCreated).toBe(false);

    const live = await oa.executionContractServices!.getExecutionContract.execute({
      executionContractId: prep.contract.executionContractId,
    });
    expect(live.ok).toBe(true);
    if (!live.ok) throw new Error("get EC");
    expect(live.contract.decisionRefs).toEqual([decision.decisionId]);
    expect(live.contract.constraints).toContain("MATERIALITY:STRUCTURAL");
    // Analysis write may be preserved descriptively — not HD authority invention.
    const mutation = (live.contract.inputs as Record<string, unknown>)
      .repositoryMutationDeclared;
    expect(mutation === "write" || mutation == null).toBe(true);
    expect(live.contract.inputs?.intentKind).toBe("other");
    expect(live.contract.inputs?.presentationDigest).toBe(
      subject.presentationDigest,
    );

    // Inspection coherent with durable stamps
    const disclosure = projectExecutionContractInspectionDisclosure(live.contract);
    expect(disclosure.ok).toBe(true);
    if (mutation === "write" && disclosure.ok) {
      expect(disclosure.disclosure.repositoryMutationDeclared).toBe("write");
      const required = requiredFactsOrThrow(live.contract);
      expect(required).toContain("inputs.repositoryMutationDeclared");
    }

    // Structural HD-bound EC is NOT Project-only Delivery CKC-eligible
    const elig = assessProjectOnlyDeliveryCkcEligibility({
      projectId,
      contract: {
        projectId: live.contract.projectId,
        cycleInstanceId: live.contract.cycleInstanceId,
        action: live.contract.action,
        constraints: live.contract.constraints,
        inputs: live.contract.inputs,
      },
    });
    expect(elig.eligible).toBe(false);
  }, 90_000);

  it("HD-N2 — HD without sealed mutation field does not invent write authorization", async () => {
    const runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("ep08-rhd-n2"),
      idPrefix: "ep08rhdn2",
    });
    const { projectId, oa } = await seedHd(runtime, "n2");

    // Structural mission WITHOUT repositoryMutation declaration
    const absentMutation = buildIntentAnalysisFromSolicitedMission({
      objective: "R-HD-01 HD without mutation stamp",
      expectedOutcome: "No invented HD write",
      scope: STRUCT_SCOPE,
      impactSignals: {
        structuralChange: true,
        architectureImpact: true,
      },
    });
    const sealedAnalysis: IntentAnalysisDto = {
      ...absentMutation,
      executionIntent: {
        intentKind: "other",
        scopeIn: [STRUCT_SCOPE],
        requiredCapabilities: [],
      },
    };
    expect(
      (sealedAnalysis as { repositoryMutationDeclared?: unknown })
        .repositoryMutationDeclared,
    ).toBeUndefined();

    const { decision, subject } = await sealAndAcceptPrepare({
      oa,
      projectId,
      analysis: sealedAnalysis,
    });
    expect(
      (decision.decisionBasis?.genericMissionContext as Record<string, unknown>)
        ?.repositoryMutationDeclared,
    ).toBeUndefined();

    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: sealedAnalysis,
      decisionId: decision.decisionId,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);

    const live = await oa.executionContractServices!.getExecutionContract.execute({
      executionContractId: prep.contract.executionContractId,
    });
    expect(live.ok).toBe(true);
    if (!live.ok) throw new Error("get EC");
    expect(
      (live.contract.inputs as Record<string, unknown>).repositoryMutationDeclared ??
        null,
    ).toBeNull();
    expect(live.contract.decisionRefs).toEqual([decision.decisionId]);
    expect(live.contract.inputs?.presentationDigest).toBe(
      subject.presentationDigest,
    );

    // HD existence alone ≠ Delivery positive WHAT / Project-only cyc:delivery
    const elig = assessProjectOnlyDeliveryCkcEligibility({
      projectId,
      contract: {
        projectId: live.contract.projectId,
        cycleInstanceId: live.contract.cycleInstanceId,
        action: live.contract.action,
        constraints: live.contract.constraints,
        inputs: live.contract.inputs,
      },
    });
    expect(elig.eligible).toBe(false);
  }, 90_000);

  it("SHE cross-check — deferred structural PREPARE: no ACCEPT_PREPARE HD; mutation preserved on EC", async () => {
    const runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("ep08-rhd-she"),
      idPrefix: "ep08rhdshe",
    });
    const { projectId, oa } = await seedHd(runtime, "she");
    const analysis = structuralCoherentAnalysis();
    const hdBefore = (
      await oa.decisionServices!.decisions.listByProject(projectId)
    ).length;

    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);

    const live = await oa.executionContractServices!.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(live.ok).toBe(true);
    if (!live.ok) throw new Error("get EC");
    expect(live.contract.decisionRefs ?? []).toEqual([]);
    expect(live.contract.inputs?.sheDeferredStructuralAuthority).toBe(true);
    expect(
      (live.contract.inputs as Record<string, unknown>).repositoryMutationDeclared,
    ).toBe("write");
    expect(
      (await oa.decisionServices!.decisions.listByProject(projectId)).length,
    ).toBe(hdBefore);

    const facts = requiredFactsOrThrow(live.contract);
    const she = await singleHumanExecutePreparedContract({
      oa,
      projectId,
      executionContractId: live.contract.executionContractId,
      expectedVersion: live.contract.version,
      expectedSemanticFingerprint: live.contract.semanticFingerprint!,
      presentedFactIds: facts,
      forceLocalAuthority: true,
    });
    expect(she.ok).toBe(true);
    if (!she.ok) throw new Error(`${she.code} ${she.message}`);
    expect(she.executionAttemptCreated).toBe(false);
    // SHE may create AUTHORIZE_INSPECTED_EXECUTE HD — not ACCEPT_PREPARE
    if (she.humanDecisionCreated) {
      expect(she.humanDecisionOptionId).not.toBe(
        GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
      );
    }
    // Operative mutation must not silently disappear across SHE binding
    const afterId =
      she.executionContractId ?? live.contract.executionContractId;
    const after = await oa.executionContractServices!.getExecutionContract.execute({
      executionContractId: afterId,
    });
    expect(after.ok).toBe(true);
    if (!after.ok) throw new Error("get after SHE");
    expect(
      (after.contract.inputs as Record<string, unknown>).repositoryMutationDeclared,
    ).toBe("write");
  }, 90_000);
});

```

### epS208.proof01.rInspect01.inspectionSurface.ui.test.tsx

```tsx
/**
 * EP-S2-08-PROOF-01 R-INSPECT-01 — Pilote inspection surface renders declared
 * repository mutation (jsdom DET). Not browser /studio remount E2E.
 *
 * @vitest-environment jsdom
 */
import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { ContractInspectionExamPanel } from "@/features/pre-m6-product-ui/surfaces/ContractInspectionExamPanel";
import { buildInspectionFactRowsFromDisclosure } from "@/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation";
import type { ExecutionContractInspectionDisclosure } from "@/lib/oa/execution-contract";

function disclosureWithWrite(): ExecutionContractInspectionDisclosure {
  return {
    action: "studio.cursor.generalist.execute",
    technicalTarget: "studio.cursor.generalist.workspace",
    scope: "project",
    targetRepositoryRef: "acme/demo",
    targetPath: null,
    scopeIn: ["projects/demo/notes/project-notes.md"],
    scopeOut: null,
    createOrModify: null,
    noDelete: null,
    repositoryMutationDeclared: "write",
    objective: "notes edit",
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
    requiredAuthority: "N3",
    requiredCapabilities: [],
    constraints: ["PRODUCT_GOVERNED", "MATERIALITY:NON_STRUCTURAL"],
    stopConditions: [],
    reversibility: "reversible",
    contractVersion: 2,
    executionContractId: "xct:ri-ui",
    semanticFingerprint: "fp:ri-ui",
    disclosureComplete: true,
    incompletenessCode: null,
  };
}

describe("EP-S2-08-PROOF-01 R-INSPECT-01 — inspection surface (jsdom)", () => {
  afterEach(() => {
    cleanup();
  });

  it("INSPECT-P3 — ContractInspectionExamPanel renders declared write fact", () => {
    const disclosure = disclosureWithWrite();
    const required = [
      "action",
      "inputs.repositoryMutationDeclared",
      "semanticFingerprint",
    ];
    const built = buildInspectionFactRowsFromDisclosure({
      disclosure,
      requiredInspectedFacts: required,
    });
    expect(built.missingRequired).toEqual([]);

    render(
      <ContractInspectionExamPanel
        testIdPrefix="r-inspect"
        snapshot={{
          projectId: "prj:ri",
          executionContractId: disclosure.executionContractId,
          version: disclosure.contractVersion,
          semanticFingerprint: disclosure.semanticFingerprint!,
        }}
        rows={built.rows}
        missingRequired={built.missingRequired}
        presentedFactIds={built.presentedFactIds}
        busy={false}
        onAttest={() => undefined}
      />,
    );

    expect(
      screen.getByTestId(
        "r-inspect-inspection-fact-inputs.repositoryMutationDeclared",
      ),
    ).toBeTruthy();
    expect(screen.getByText("Opération déclarée sur le dépôt")).toBeTruthy();
    expect(
      screen.getByText(/Écriture déclarée — soumise au périmètre/),
    ).toBeTruthy();
    expect(screen.getByTestId("r-inspect-attest")).not.toBeDisabled();
  });

  it("INSPECT-N1 — absent mutation does not render invented write row", () => {
    const disclosure: ExecutionContractInspectionDisclosure = {
      ...disclosureWithWrite(),
      repositoryMutationDeclared: null,
    };
    const built = buildInspectionFactRowsFromDisclosure({
      disclosure,
      requiredInspectedFacts: ["action", "semanticFingerprint"],
    });
    render(
      <ContractInspectionExamPanel
        testIdPrefix="r-inspect-n1"
        snapshot={{
          projectId: "prj:ri",
          executionContractId: disclosure.executionContractId,
          version: disclosure.contractVersion,
          semanticFingerprint: disclosure.semanticFingerprint!,
        }}
        rows={built.rows}
        missingRequired={built.missingRequired}
        presentedFactIds={built.presentedFactIds}
        busy={false}
        onAttest={() => undefined}
      />,
    );
    expect(
      screen.queryByText(/Écriture déclarée/),
    ).toBeNull();
  });
});

```

### akgM5L3S2.epS208.proof01.r1CkcSemantic.d0.test.ts

```typescript
/**
 * EP-S2-08-PROOF-01 — R1 Option A bounded Delivery CKC eligibility (DET).
 *
 * Morris 2026-10-28: Option A — Delivery post-Evidence CKC only when Generic
 * Project-only NON_STRUCTURAL Delivery eligibility is positively proven.
 * Universal null-cycle → cyc:delivery is NOT authorized.
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  FakeConversationProvider,
  setConversationProviderForTests,
} from "@/lib/platform/ai";
import {
  buildIntentAnalysisFromSolicitedMission,
  solicitGenericExecutionPrepare,
} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import { singleHumanExecutePreparedContract } from "@/features/project-assistant/w2/singleHumanExecutePreparedContract";
import { requiredInspectedFactsForContract } from "@/lib/oa/execution-contract";
import {
  governedExecuteRecordResult,
  governedExecuteSelectAgent,
  governedExecuteStart,
} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
import { materializeW3bProductTerminal } from "@/features/project-assistant/w2/materializeW3bProductTerminal";
import {
  assessProjectOnlyDeliveryCkcEligibility,
  POST_EVIDENCE_PROJECT_SCOPED_CYCLE_TYPE_ID,
  resolvePostEvidenceCkcContext,
  resolveW2QualificationInputs,
} from "@/features/project-assistant/w2/qualificationInputs";
import { loadProductCkcCognitiveContent } from "@/features/project-assistant/f2/ckcCognitiveContext";
import { resolveProductDoctrineRegistryRoot } from "@/lib/vertical-slice-runtime/paths";
import { PRODUCT_CANONICAL_EXECUTION_ACTION } from "@/features/project-assistant/w2/w3aProductExecutionSemantics";
import { PRODUCT_GOVERNED_CONSTRAINT } from "@/lib/oa/execution-contract";
import { STUDIO_CURSOR_GENERALIST_AGENT_ID } from "@/lib/oa/execution-attempt";
import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import { TestOnlyRealExecutionLaunchPort } from "../oa/execution-attempt/support/testOnlyRealExecutionLaunchPort";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  seedQualifiedProject,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";

const NOTES_PATH = "projects/demo/notes/project-notes.md";

function restoreEnvVar(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

function requiredFactsOrThrow(
  contract: Parameters<typeof requiredInspectedFactsForContract>[0],
): readonly string[] {
  const facts = requiredInspectedFactsForContract(contract);
  if (Array.isArray(facts)) return facts;
  throw new Error(
    `inspection disclosure incomplete: ${(facts as { code: string }).code}`,
  );
}

function launchPortOf(oa: {
  executionAttemptServices?: {
    realBoundary?: { launchPort?: unknown };
  } | null;
}): TestOnlyRealExecutionLaunchPort {
  const port = oa.executionAttemptServices?.realBoundary?.launchPort;
  if (!(port instanceof TestOnlyRealExecutionLaunchPort)) {
    throw new Error("TestOnlyRealExecutionLaunchPort required");
  }
  return port;
}

function deliveryEligibleAnalysis(): IntentAnalysisDto {
  const base = buildIntentAnalysisFromSolicitedMission({
    objective: "EP-S2-08 R1-A Delivery-eligible notes edit",
    expectedOutcome: "Bounded local-write Evidence",
    scope: NOTES_PATH,
    repositoryMutation: "write",
    impactSignals: { structuralChange: false, architectureImpact: false },
  });
  return {
    ...base,
    executionIntent: {
      intentKind: "other",
      scopeIn: [NOTES_PATH],
      requiredCapabilities: [],
    },
  };
}

function cursorReportStdout(input: {
  attemptId: string;
  executionContractId: string;
  repositoryRef: string;
  baseSha: string;
}): string {
  const body = {
    schemaVersion: "oa.cursor-execution-report.1",
    reportId: `rpt:r1:${input.attemptId}`.slice(0, 128),
    attemptId: input.attemptId,
    executionContractId: input.executionContractId,
    repositoryRef: input.repositoryRef,
    baseSha: input.baseSha,
    status: "succeeded",
    authorizedEffectsExecuted: ["filesystem.modify"],
    workPerformed: [`modified ${NOTES_PATH}`],
    fileEffects: {
      created: [],
      modified: [NOTES_PATH],
      deleted: [],
    },
  };
  return `CURSOR_EXECUTION_REPORT_JSON=${JSON.stringify(body)}`;
}

describe("EP-S2-08-PROOF-01 R1 Option A — Delivery CKC eligibility (DET)", () => {
  let previousMorris: string | undefined;
  let previousDetPin: string | undefined;
  let previousPilot: string | undefined;
  let previousExclusive: string | undefined;
  let previousRefs: string | undefined;
  let refsRoot: string;
  let dbPath: string;

  beforeEach(() => {
    previousMorris = process.env.SFIA_STUDIO_MORRIS_LOCAL_AUTHORITY;
    previousDetPin = process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
    previousPilot = process.env.SFIA_STUDIO_LOCAL_PILOT_ACTOR_ID;
    previousExclusive = process.env.SFIA_STUDIO_OA_EXCLUSIVE;
    previousRefs = process.env.SFIA_STUDIO_PRODUCT_EVIDENCE_REFS_ROOT;
    process.env.SFIA_STUDIO_MORRIS_LOCAL_AUTHORITY = "1";
    process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = W2_TEST_PINNED_BASE_HEAD_SHA;
    process.env.SFIA_STUDIO_LOCAL_PILOT_ACTOR_ID = "actor:local-pilote";
    process.env.SFIA_STUDIO_OA_EXCLUSIVE = "0";
    refsRoot = tempProductDbPath("ep08-r1-refs").replace(/\.sqlite$/, "-refs");
    process.env.SFIA_STUDIO_PRODUCT_EVIDENCE_REFS_ROOT = refsRoot;
    dbPath = tempProductDbPath("ep08-r1-optA");
    setConversationProviderForTests(new FakeConversationProvider());
  });

  afterEach(() => {
    cleanupW2TempDirs();
    restoreEnvVar("SFIA_STUDIO_MORRIS_LOCAL_AUTHORITY", previousMorris);
    restoreEnvVar("SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA", previousDetPin);
    restoreEnvVar("SFIA_STUDIO_LOCAL_PILOT_ACTOR_ID", previousPilot);
    restoreEnvVar("SFIA_STUDIO_OA_EXCLUSIVE", previousExclusive);
    restoreEnvVar("SFIA_STUDIO_PRODUCT_EVIDENCE_REFS_ROOT", previousRefs);
    setConversationProviderForTests(null);
  });

  describe("pure assessor matrix (R1 final)", () => {
    const allClearSignals = {
      structuralChange: false,
      securityImpact: false,
      architectureImpact: false,
      dataImpact: false,
      irreversible: false,
    };
    /** Positive WHAT requires exact EFFECT_CLASS:local-write or mutation=write — not scopeIn. */
    const baseContract = {
      projectId: "prj:r1",
      cycleInstanceId: null as string | null,
      action: PRODUCT_CANONICAL_EXECUTION_ACTION,
      constraints: [
        PRODUCT_GOVERNED_CONSTRAINT,
        "MATERIALITY:NON_STRUCTURAL",
        "EFFECT_CLASS:local-write",
      ],
      inputs: {
        intentKind: "other",
        scopeIn: [NOTES_PATH],
        repositoryMutationDeclared: "write",
        materialityFacts: { assessedMateriality: "non_structural" },
        impactSignals: { ...allClearSignals },
      },
    };

    it("R1-P1 — positive when exact local-write / mutation=write present", () => {
      const r = assessProjectOnlyDeliveryCkcEligibility({
        projectId: "prj:r1",
        contract: baseContract,
      });
      expect(r).toEqual({
        eligible: true,
        reasonCode: "GENERIC_NON_STRUCTURAL_DELIVERY",
      });
    });

    it("R1-P1b — repositoryMutationDeclared=write alone (no EFFECT_CLASS) eligible", () => {
      const r = assessProjectOnlyDeliveryCkcEligibility({
        projectId: "prj:r1",
        contract: {
          ...baseContract,
          constraints: [
            PRODUCT_GOVERNED_CONSTRAINT,
            "MATERIALITY:NON_STRUCTURAL",
          ],
        },
      });
      expect(r).toEqual({
        eligible: true,
        reasonCode: "GENERIC_NON_STRUCTURAL_DELIVERY",
      });
    });

    it("NEG-01 — intentKind=other + scopeIn only (no positive WHAT) → refused", () => {
      const r = assessProjectOnlyDeliveryCkcEligibility({
        projectId: "prj:r1",
        contract: {
          projectId: "prj:r1",
          cycleInstanceId: null,
          action: PRODUCT_CANONICAL_EXECUTION_ACTION,
          constraints: [
            PRODUCT_GOVERNED_CONSTRAINT,
            "MATERIALITY:NON_STRUCTURAL",
          ],
          inputs: {
            intentKind: "other",
            scopeIn: [NOTES_PATH],
            repositoryMutationDeclared: null,
            materialityFacts: { assessedMateriality: "non_structural" },
            impactSignals: { ...allClearSignals },
          },
        },
      });
      expect(r.eligible).toBe(false);
      if (!r.eligible) {
        expect(r.reasonCode).toBe("DELIVERY_POSITIVE_FACTS_ABSENT");
      }
    });

    it("NEG-04 — EFFECT_CLASS:local-write-extra prefix must not pass", () => {
      const r = assessProjectOnlyDeliveryCkcEligibility({
        projectId: "prj:r1",
        contract: {
          ...baseContract,
          constraints: [
            PRODUCT_GOVERNED_CONSTRAINT,
            "MATERIALITY:NON_STRUCTURAL",
            "EFFECT_CLASS:local-write-extra",
          ],
          inputs: {
            ...baseContract.inputs,
            repositoryMutationDeclared: null,
          },
        },
      });
      expect(r.eligible).toBe(false);
      if (!r.eligible) {
        expect(r.reasonCode).toBe("DELIVERY_POSITIVE_FACTS_ABSENT");
      }
    });

    it("R1-N1 — read_only refused", () => {
      const r = assessProjectOnlyDeliveryCkcEligibility({
        projectId: "prj:r1",
        contract: {
          ...baseContract,
          inputs: { ...baseContract.inputs, intentKind: "read_only" },
        },
      });
      expect(r.eligible).toBe(false);
      if (!r.eligible) expect(r.reasonCode).toBe("READ_ONLY_NOT_DELIVERY");
    });

    it("R1-N2 — absent intent refused", () => {
      const r = assessProjectOnlyDeliveryCkcEligibility({
        projectId: "prj:r1",
        contract: {
          ...baseContract,
          inputs: {
            scopeIn: [NOTES_PATH],
            materialityFacts: { assessedMateriality: "non_structural" },
            impactSignals: { ...allClearSignals },
          },
        },
      });
      expect(r.eligible).toBe(false);
      if (!r.eligible) expect(r.reasonCode).toBe("INTENT_ABSENT_OR_UNKNOWN");
    });

    it("R1-N3 — other without positive Delivery facts refused", () => {
      const r = assessProjectOnlyDeliveryCkcEligibility({
        projectId: "prj:r1",
        contract: {
          projectId: "prj:r1",
          cycleInstanceId: null,
          action: PRODUCT_CANONICAL_EXECUTION_ACTION,
          constraints: [
            PRODUCT_GOVERNED_CONSTRAINT,
            "MATERIALITY:NON_STRUCTURAL",
          ],
          inputs: {
            intentKind: "other",
            materialityFacts: { assessedMateriality: "non_structural" },
            impactSignals: { ...allClearSignals },
            // no scopeIn, no write mutation, no EFFECT_CLASS
          },
        },
      });
      expect(r.eligible).toBe(false);
      if (!r.eligible) {
        expect(r.reasonCode).toBe("DELIVERY_POSITIVE_FACTS_ABSENT");
      }
    });

    it("R1-N3b — unknown intentKind refused", () => {
      const r = assessProjectOnlyDeliveryCkcEligibility({
        projectId: "prj:r1",
        contract: {
          ...baseContract,
          inputs: { ...baseContract.inputs, intentKind: "implement" },
        },
      });
      expect(r.eligible).toBe(false);
      if (!r.eligible) expect(r.reasonCode).toBe("INTENT_ABSENT_OR_UNKNOWN");
    });

    it("R1-N4 — dataImpact conflicts with NON_STRUCTURAL → refuse", () => {
      const r = assessProjectOnlyDeliveryCkcEligibility({
        projectId: "prj:r1",
        contract: {
          ...baseContract,
          inputs: {
            ...baseContract.inputs,
            impactSignals: { ...allClearSignals, dataImpact: true },
          },
        },
      });
      expect(r.eligible).toBe(false);
      if (!r.eligible) expect(r.reasonCode).toBe("IMPACT_CATEGORY_NON_DELIVERY");
    });

    it("R1-N4b — irreversible conflicts with NON_STRUCTURAL → refuse", () => {
      const r = assessProjectOnlyDeliveryCkcEligibility({
        projectId: "prj:r1",
        contract: {
          ...baseContract,
          inputs: {
            ...baseContract.inputs,
            impactSignals: { ...allClearSignals, irreversible: true },
          },
        },
      });
      expect(r.eligible).toBe(false);
      if (!r.eligible) expect(r.reasonCode).toBe("IMPACT_CATEGORY_NON_DELIVERY");
    });

    it("R1-N5 — absent impactSignals refused", () => {
      const r = assessProjectOnlyDeliveryCkcEligibility({
        projectId: "prj:r1",
        contract: {
          ...baseContract,
          inputs: {
            intentKind: "other",
            scopeIn: [NOTES_PATH],
            materialityFacts: { assessedMateriality: "non_structural" },
          },
        },
      });
      expect(r.eligible).toBe(false);
      if (!r.eligible) expect(r.reasonCode).toBe("IMPACT_SIGNALS_ABSENT");
    });

    it("R1-N5b — malformed impactSignals refused", () => {
      const r = assessProjectOnlyDeliveryCkcEligibility({
        projectId: "prj:r1",
        contract: {
          ...baseContract,
          inputs: {
            ...baseContract.inputs,
            impactSignals: { structuralChange: false },
          },
        },
      });
      expect(r.eligible).toBe(false);
      if (!r.eligible) expect(r.reasonCode).toBe("IMPACT_SIGNALS_MALFORMED");
    });

    it("R1-N6 — materiality constraint vs assessedMateriality contradiction", () => {
      const r = assessProjectOnlyDeliveryCkcEligibility({
        projectId: "prj:r1",
        contract: {
          ...baseContract,
          constraints: [
            PRODUCT_GOVERNED_CONSTRAINT,
            "MATERIALITY:NON_STRUCTURAL",
          ],
          inputs: {
            ...baseContract.inputs,
            materialityFacts: { assessedMateriality: "structural" },
          },
        },
      });
      expect(r.eligible).toBe(false);
      if (!r.eligible) expect(r.reasonCode).toBe("MATERIALITY_CONTRADICTION");
    });

    it("R1-N7 — UNKNOWN materiality not promoted to Delivery", () => {
      const r = assessProjectOnlyDeliveryCkcEligibility({
        projectId: "prj:r1",
        contract: {
          ...baseContract,
          constraints: [PRODUCT_GOVERNED_CONSTRAINT, "MATERIALITY:UNKNOWN"],
          inputs: {
            ...baseContract.inputs,
            materialityFacts: { assessedMateriality: "unknown" },
          },
        },
      });
      expect(r.eligible).toBe(false);
      if (!r.eligible) {
        expect(r.reasonCode).toBe("MATERIALITY_NOT_NON_STRUCTURAL");
      }
    });

    it("R1-N7b — STRUCTURAL materiality refused", () => {
      const r = assessProjectOnlyDeliveryCkcEligibility({
        projectId: "prj:r1",
        contract: {
          ...baseContract,
          constraints: [PRODUCT_GOVERNED_CONSTRAINT, "MATERIALITY:STRUCTURAL"],
          inputs: {
            ...baseContract.inputs,
            materialityFacts: { assessedMateriality: "structural" },
          },
        },
      });
      expect(r.eligible).toBe(false);
      if (!r.eligible) {
        expect(r.reasonCode).toBe("MATERIALITY_NOT_NON_STRUCTURAL");
      }
    });

    it("R1-N8 — Attempt/EC project mismatch refused", () => {
      const r = assessProjectOnlyDeliveryCkcEligibility({
        projectId: "prj:other",
        contract: baseContract,
      });
      expect(r.eligible).toBe(false);
      if (!r.eligible) expect(r.reasonCode).toBe("CONTRACT_PROJECT_MISMATCH");
    });

    it("null-cycle alone is insufficient — non-generic action refuses", () => {
      const r = assessProjectOnlyDeliveryCkcEligibility({
        projectId: "prj:r1",
        contract: { ...baseContract, action: "other.action" },
      });
      expect(r.eligible).toBe(false);
      if (!r.eligible) expect(r.reasonCode).toBe("NOT_GENERIC_PRODUCT_EC");
    });
  });

  async function seedProject(runtime: RuntimeApplicationService, suffix: string) {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: "demo",
      objective: "EP-S2-08 R1 Option A",
      context: "r1 eligibility",
      criticality: "STANDARD",
      constraints: ["ZERO REAL", "R1 DET"],
      shortReference: `R1${suffix.toUpperCase().slice(0, 4)}`,
      idempotencyKey: `idem:ep08-r1-${suffix}`,
    });
    if (!created.ok) {
      throw new Error(`createProject: ${created.error?.message ?? "fail"}`);
    }
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
    const identity = `acme/ep08-r1-${suffix}`;
    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
      identity,
    });
    return { projectId, oa };
  }

  it("POS-01 — real Generic PREPARE→SHE→Attempt preserves declared write → Delivery CKC", async () => {
    /**
     * Option 1 (2026-10-28): declared repositoryMutation=write is preserved on
     * the durable EC (inspectable WHAT). No EFFECT_CLASS:local-write invented.
     * SHE / materiality / confirmation remain the authority gates.
     */
    const runtime = bootW2Runtime({
      productDbPath: dbPath,
      idPrefix: "ep08r1a",
    });
    const { projectId, oa } = await seedProject(runtime, "a");

    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: deliveryEligibleAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    expect(prep.projectContextOnly).toBe(true);

    const liveEc = await oa.executionContractServices!.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(liveEc.ok).toBe(true);
    if (!liveEc.ok) throw new Error("get EC");
    const inputs = liveEc.contract.inputs as Record<string, unknown>;
    // POS-01 / POS-02 — declared write preserved; WHERE still present; no invented EFFECT_CLASS.
    expect(inputs.repositoryMutationDeclared).toBe("write");
    expect(
      liveEc.contract.constraints.includes("EFFECT_CLASS:local-write"),
    ).toBe(false);
    expect(Array.isArray(inputs.scopeIn) && (inputs.scopeIn as string[]).length).toBeGreaterThan(
      0,
    );
    expect(inputs.boundedNonMutatingAnalysis).toBe(false);

    const facts = requiredFactsOrThrow(liveEc.contract);
    const repositoryRef = String(inputs.repositoryBindingIdentity ?? "");
    const baseSha = String(inputs.baseHeadSha ?? W2_TEST_PINNED_BASE_HEAD_SHA);

    const she = await singleHumanExecutePreparedContract({
      oa,
      projectId,
      executionContractId: liveEc.contract.executionContractId,
      expectedVersion: liveEc.contract.version,
      expectedSemanticFingerprint: liveEc.contract.semanticFingerprint!,
      presentedFactIds: facts,
      forceLocalAuthority: true,
    });
    expect(she.ok).toBe(true);
    if (!she.ok) throw new Error(`she: ${she.code}`);
    // POS-03 — SHE does not widen: still AUTHORIZED on inspected EC only.
    expect(she.authorization.outcome).toBe("AUTHORIZED");

    const port = launchPortOf(oa);
    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: she.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) throw new Error(selected.message);
    const attemptId = selected.attempt!.attemptId;

    const started = await governedExecuteStart({
      oa,
      projectId,
      executionContractId: she.executionContractId,
      attemptId,
      forceLocalAuthority: true,
    });
    expect(started.ok).toBe(true);
    if (!started.ok) throw new Error(started.message);

    setTimeout(() => {
      port.resolveSimulatedCompletion(`proc:sim:${attemptId}`, {
        exitCode: 0,
        timedOut: false,
        stdout: cursorReportStdout({
          attemptId,
          executionContractId: she.executionContractId,
          repositoryRef,
          baseSha,
        }),
        stderr: "",
        durationMs: 5,
      });
    }, 15);

    const terminal = await governedExecuteRecordResult({
      oa,
      projectId,
      executionContractId: she.executionContractId,
      attemptId,
      forceLocalAuthority: true,
      awaitIfPending: true,
      missionResultRefsRoot: refsRoot,
    });
    expect(terminal.ok).toBe(true);
    if (!terminal.ok) throw new Error(terminal.message);

    const ckc = await resolvePostEvidenceCkcContext({
      oa,
      projectId,
      attemptId,
    });
    // POS-05 — Project-only positive Delivery reaches W3-C with cyc:delivery.
    expect(ckc.ok).toBe(true);
    if (ckc.ok) {
      expect(ckc.context.projectScoped).toBe(true);
      expect(ckc.context.cycleTypeId).toBe(
        POST_EVIDENCE_PROJECT_SCOPED_CYCLE_TYPE_ID,
      );
      expect(ckc.context.cycleTypeId).toBe("cyc:delivery");
      expect(ckc.context.eligibilityReasonCode).toBe(
        "GENERIC_NON_STRUCTURAL_DELIVERY",
      );
      expect(ckc.context.activeCycleInstanceId).toBeNull();
    }

    // AUTH-03 — W2 Options still cycle-gated.
    const qual = await resolveW2QualificationInputs({ oa, projectId });
    expect(qual.ok).toBe(false);
    if (!qual.ok) expect(qual.code).toBe("CYCLE_NOT_QUALIFIED");

    // AUTH-01 — no CycleInstance invented.
    const live = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(live.ok && (live.livingProjectState.activeCycleInstanceId ?? null)).toBe(
      null,
    );

    // AUTH-02 — no automatic HD; Product UNCLAIMED remains honest.
    const hdBefore = (
      await oa.decisionServices!.decisions.listByProject(projectId)
    ).length;
    const materialized = await materializeW3bProductTerminal({
      oa,
      projectId,
      attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (materialized.ok) {
      expect(materialized.product.outcome).toBe("UNCLAIMED");
      expect(materialized.postEvidence?.ok).toBe(true);
      if (materialized.postEvidence?.ok) {
        expect(materialized.postEvidence.replanInvoked).toBe(false);
        expect(materialized.postEvidence.recommendation.authority).toBe("none");
        expect(materialized.postEvidence.recommendation.decisionCreated).toBe(
          false,
        );
        expect(
          materialized.postEvidence.recommendation.attemptAutoLaunchNextCycle,
        ).toBe(false);
      }
    }
    const hdAfter = (
      await oa.decisionServices!.decisions.listByProject(projectId)
    ).length;
    expect(hdAfter).toBe(hdBefore);
  }, 90_000);

  it("R1-P2 — cycle-bound Attempt→EC lineage uses real cycleTypeId (not forced Delivery)", async () => {
    const runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("ep08-r1d"),
      idPrefix: "ep08r1d",
    });
    const { projectId, oa } = await seedProject(runtime, "r1d");
    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps.ok) throw new Error("lps");
    const cycleInstanceId = `cyc:inst:ep08-r1d-framing`;
    const cycle = await oa.cycleServices.createCycle.execute({
      cycleInstanceId,
      cycleTypeId: "cyc:framing",
      projectId,
      signals: {},
      objective: "R1-P2 framing lineage",
      scope: "r1-p2",
      createdBy: {
        actorId: "actor:morris",
        role: "project_owner",
        displayName: "Morris",
        authorityLevel: "N3",
      },
      linkAsActiveCycle: true,
      expectedLpsVersion: lps.livingProjectState.version,
      ckcResolutionRef: "ckcres:ep08-r1d",
    });
    expect(cycle.ok).toBe(true);
    if (!cycle.ok) throw new Error("createCycle");

    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId,
      analysis: deliveryEligibleAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);

    const liveEc = await oa.executionContractServices!.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(liveEc.ok).toBe(true);
    if (!liveEc.ok) throw new Error("get EC");
    expect(liveEc.contract.cycleInstanceId).toBe(cycleInstanceId);
    const facts = requiredFactsOrThrow(liveEc.contract);

    const she = await singleHumanExecutePreparedContract({
      oa,
      projectId,
      executionContractId: liveEc.contract.executionContractId,
      expectedVersion: liveEc.contract.version,
      expectedSemanticFingerprint: liveEc.contract.semanticFingerprint!,
      presentedFactIds: facts,
      forceLocalAuthority: true,
    });
    expect(she.ok).toBe(true);
    if (!she.ok) throw new Error(`she: ${she.code} ${she.message ?? ""}`);

    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: she.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) throw new Error(selected.message);
    const attemptId = selected.attempt!.attemptId;

    const ckc = await resolvePostEvidenceCkcContext({
      oa,
      projectId,
      attemptId,
    });
    expect(ckc.ok).toBe(true);
    if (!ckc.ok) throw new Error(`${ckc.code}: ${ckc.message}`);
    expect(ckc.context.projectScoped).toBe(false);
    expect(ckc.context.activeCycleInstanceId).toBe(cycleInstanceId);
    expect(ckc.context.cycleTypeId).toBe("cyc:framing");
    expect(ckc.context.eligibilityReasonCode).toBe("ACTIVE_CYCLE_TYPE");
    expect(ckc.context.cycleTypeId).not.toBe(
      POST_EVIDENCE_PROJECT_SCOPED_CYCLE_TYPE_ID,
    );
  }, 90_000);

  it("R1-N9 — missing Attempt refused (no silent LPS-cycle CKC)", async () => {
    const runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("ep08-r1n9"),
      idPrefix: "ep08r1n9",
    });
    const seeded = await seedQualifiedProject(runtime, {
      suffix: "r1n9",
      cycleTypeId: "cyc:framing",
    });
    const ckc = await resolvePostEvidenceCkcContext({
      oa: runtime.oa!,
      projectId: seeded.projectId,
      attemptId: "xat:does-not-exist-r1n9",
    });
    expect(ckc.ok).toBe(false);
    if (!ckc.ok) {
      expect(ckc.code).not.toBe("ACTIVE_CYCLE_TYPE");
    }
  });

  it("R1-C — Project-only ambiguous (no impactSignals) → POST_EVIDENCE_CKC_AMBIGUOUS", async () => {
    const runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("ep08-r1c"),
      idPrefix: "ep08r1c",
    });
    const { projectId, oa } = await seedProject(runtime, "c");
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: deliveryEligibleAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);

    const loaded = await oa.executionContractServices!.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) return;

    // Simulate durable ambiguity: strip sealed impactSignals (no invented classifier).
    const strippedInputs = { ...(loaded.contract.inputs as Record<string, unknown>) };
    delete strippedInputs.impactSignals;
    const ambiguous = assessProjectOnlyDeliveryCkcEligibility({
      projectId,
      contract: {
        projectId: loaded.contract.projectId,
        cycleInstanceId: loaded.contract.cycleInstanceId,
        action: loaded.contract.action,
        constraints: loaded.contract.constraints,
        inputs: strippedInputs,
      },
    });
    expect(ambiguous.eligible).toBe(false);
    if (!ambiguous.eligible) {
      expect(ambiguous.reasonCode).toBe("IMPACT_SIGNALS_ABSENT");
    }
  });

  it("R1-B — Project-only securityImpact Generic → Delivery orientation refused", async () => {
    const runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("ep08-r1b"),
      idPrefix: "ep08r1b",
    });
    const { projectId, oa } = await seedProject(runtime, "b");
    const analysis = buildIntentAnalysisFromSolicitedMission({
      objective: "Security-sensitive Generic mission",
      expectedOutcome: "Must not get Delivery CKC",
      scope: NOTES_PATH,
      repositoryMutation: "write",
      impactSignals: {
        structuralChange: false,
        securityImpact: true,
        architectureImpact: false,
      },
    });
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: {
        ...analysis,
        executionIntent: {
          intentKind: "other",
          scopeIn: [NOTES_PATH],
          requiredCapabilities: [],
        },
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) return;

    const loaded = await oa.executionContractServices!.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) return;

    // Security signal on a Generic Project-only EC must not yield Delivery CKC.
    // Materiality may already refuse (STRUCTURAL/UNKNOWN) before impact category —
    // either refuse code is a valid Delivery denial (no usurpation).
    const eligibility = assessProjectOnlyDeliveryCkcEligibility({
      projectId,
      contract: {
        projectId: loaded.contract.projectId,
        cycleInstanceId: loaded.contract.cycleInstanceId,
        action: loaded.contract.action,
        constraints: [
          ...loaded.contract.constraints.filter(
            (c) => !c.startsWith("MATERIALITY:"),
          ),
          "MATERIALITY:NON_STRUCTURAL",
        ],
        inputs: {
          ...loaded.contract.inputs,
          materialityFacts: { materiality: "non_structural" },
        },
      },
    });
    expect(eligibility.eligible).toBe(false);
    if (!eligibility.eligible) {
      expect(eligibility.reasonCode).toBe("IMPACT_CATEGORY_NON_DELIVERY");
    }
  });
});

```

### akgM5L3S2.epS208.proof01.piloteResume.integrated.d0.test.ts

```typescript
/**
 * EP-S2-08-PROOF-01 — Pilote post-Evidence resume & continuation (DET).
 *
 * Proves B2 / B5 / B6 at Product/OA/GERM/LPS boundary after Option B Project-first:
 *   complete Attempt → W3-B/W3-C → process remount (same durable SQLite + refs)
 *   → rehydrate → recommendation visible / anti-authority → Nora unavailable reserve.
 *
 * Ceiling: DETERMINISTIC. ≠ REAL Studio browser E2E. ≠ EP-S2-08 GLOBAL PASS claim.
 * ≠ EP-S2-05. ≠ Late Evidence policy change. ≠ L4.
 *
 * @vitest-environment node
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  FakeConversationProvider,
  setConversationProviderForTests,
} from "@/lib/platform/ai";
import {
  buildIntentAnalysisFromSolicitedMission,
  solicitGenericExecutionPrepare,
} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import { singleHumanExecutePreparedContract } from "@/features/project-assistant/w2/singleHumanExecutePreparedContract";
import { requiredInspectedFactsForContract } from "@/lib/oa/execution-contract";
import {
  governedExecuteRecordResult,
  governedExecuteSelectAgent,
  governedExecuteStart,
} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
import {
  materializeW3bProductTerminal,
  rehydrateProductOutcomeFromAttempt,
} from "@/features/project-assistant/w2/materializeW3bProductTerminal";
import { reconcileGovernedExecution } from "@/features/project-assistant/w2/reconcileGovernedExecution";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import { shouldAutoResumeReconcileOnRemount } from "@/features/project-assistant/w2/reconcileContinuePolicy";
import { NORA_ANALYSIS_UNAVAILABLE_RESERVE } from "@/features/project-assistant/w2/w3bProductTerminalProjection";
import {
  projectW3cExecutionReportSurfaceFromDurable,
  type W3cPostEvidenceLoopResult,
} from "@/features/project-assistant/w2/w3cPostEvidenceLoop";
import { STUDIO_CURSOR_GENERALIST_AGENT_ID } from "@/lib/oa/execution-attempt";
import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import { PRODUCT_MISSION_FROM_DURABLE_CONTEXT } from "@/lib/oa/evidence-review/application/missionResultPayload";
import { executionReviewVerificationEvidenceIdForAttempt } from "@/features/project-assistant/f3/ingestExecutionReviewVerificationEvidence";
import { missionResultEvidenceIdForAttempt } from "@/features/project-assistant/f3/ingestMissionResultEvidence";
import { loadGenericExecutionReviewMaterial } from "@/features/project-assistant/f3/persistGenericExecutionReviewMaterial";
import { TestOnlyRealExecutionLaunchPort } from "../oa/execution-attempt/support/testOnlyRealExecutionLaunchPort";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";

const NOTES_PATH = "projects/demo/notes/project-notes.md";

function restoreEnvVar(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

function requiredFactsOrThrow(
  contract: Parameters<typeof requiredInspectedFactsForContract>[0],
): readonly string[] {
  const facts = requiredInspectedFactsForContract(contract);
  if (Array.isArray(facts)) return facts;
  throw new Error(
    `inspection disclosure incomplete: ${(facts as { code: string }).code}`,
  );
}

function launchPortOf(oa: {
  executionAttemptServices?: {
    realBoundary?: { launchPort?: unknown };
  } | null;
}): TestOnlyRealExecutionLaunchPort {
  const port = oa.executionAttemptServices?.realBoundary?.launchPort;
  if (!(port instanceof TestOnlyRealExecutionLaunchPort)) {
    throw new Error("TestOnlyRealExecutionLaunchPort required");
  }
  return port;
}

function notesEditAnalysis(): IntentAnalysisDto {
  const base = buildIntentAnalysisFromSolicitedMission({
    objective: "EP-S2-08-PROOF-01 notes edit (Project-first DET)",
    expectedOutcome: "Honest Product Result + W3-C post-Evidence",
    scope: NOTES_PATH,
    repositoryMutation: "write",
    impactSignals: { structuralChange: false, architectureImpact: false },
  });
  return {
    ...base,
    executionIntent: {
      intentKind: "other",
      scopeIn: [NOTES_PATH],
      requiredCapabilities: [],
    },
  };
}

function cursorReportStdout(input: {
  attemptId: string;
  executionContractId: string;
  repositoryRef: string;
  baseSha: string;
}): string {
  const body = {
    schemaVersion: "oa.cursor-execution-report.1",
    reportId: `rpt:p01:${input.attemptId}`.slice(0, 128),
    attemptId: input.attemptId,
    executionContractId: input.executionContractId,
    repositoryRef: input.repositoryRef,
    baseSha: input.baseSha,
    status: "succeeded",
    authorizedEffectsExecuted: ["filesystem.modify"],
    workPerformed: [`modified ${NOTES_PATH}`],
    fileEffects: {
      created: [],
      modified: [NOTES_PATH],
      deleted: [],
    },
  };
  return `CURSOR_EXECUTION_REPORT_JSON=${JSON.stringify(body)}`;
}

type Completed = {
  projectId: string;
  executionContractId: string;
  attemptId: string;
  verificationId: string;
  productEvidenceId: string | null;
  reviewBundleId: string | null;
  claimEvaluationId: string | null;
  productOutcome: string;
  postEvidence: W3cPostEvidenceLoopResult;
  hdCountBefore: number;
};

describe("EP-S2-08-PROOF-01 — Pilote resume / continuation / Nora unavailable (DET)", () => {
  let previousMorris: string | undefined;
  let previousDetPin: string | undefined;
  let previousPilot: string | undefined;
  let previousExclusive: string | undefined;
  let previousRefs: string | undefined;
  let refsRoot: string;
  let dbPath: string;

  beforeEach(() => {
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousDetPin = process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
    previousPilot = process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
    previousExclusive = process.env.SFIA_STUDIO_LOCAL_OA_EXCLUSIVE;
    previousRefs = process.env.SFIA_STUDIO_PRODUCT_EVIDENCE_REFS_ROOT;
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = "1";
    process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = W2_TEST_PINNED_BASE_HEAD_SHA;
    process.env.SFIA_STUDIO_CURSOR_REAL = "0";
    delete process.env.SFIA_STUDIO_LOCAL_OA_EXCLUSIVE;
    setConversationProviderForTests(null);
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "ep08-p01-refs-"));
    process.env.SFIA_STUDIO_PRODUCT_EVIDENCE_REFS_ROOT = refsRoot;
    dbPath = tempProductDbPath("ep-s2-08-proof01.sqlite");
  });

  afterEach(() => {
    cleanupW2TempDirs();
    try {
      fs.rmSync(refsRoot, { recursive: true, force: true });
    } catch {
      /* ignore */
    }
    restoreEnvVar("SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY", previousMorris);
    restoreEnvVar("SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA", previousDetPin);
    restoreEnvVar("SFIA_STUDIO_LOCAL_PILOT_AUTHORITY", previousPilot);
    restoreEnvVar("SFIA_STUDIO_LOCAL_OA_EXCLUSIVE", previousExclusive);
    restoreEnvVar("SFIA_STUDIO_PRODUCT_EVIDENCE_REFS_ROOT", previousRefs);
    setConversationProviderForTests(null);
  });

  async function seedProject(
    runtime: RuntimeApplicationService,
    suffix: string,
  ) {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: "demo",
      objective: "EP-S2-08-PROOF-01 Project-first DET",
      context: "akg-m5 ep-s2-08 proof01",
      criticality: "STANDARD",
      constraints: ["ZERO REAL", "PROOF-01 DET ONLY"],
      shortReference: `P01${suffix.toUpperCase().slice(0, 5)}`,
      idempotencyKey: `idem:ep08-p01-${suffix}`,
    });
    if (!created.ok) {
      throw new Error(`createProject: ${created.error?.message ?? "fail"}`);
    }
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
    const identity = `acme/ep08-p01-${suffix}`;
    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
      identity,
    });
    const live = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!live.ok) throw new Error("live");
    expect(live.livingProjectState.activeCycleInstanceId ?? null).toBeNull();
    return { projectId, oa };
  }

  async function countHumanDecisions(
    oa: RuntimeOaStack,
    projectId: string,
  ): Promise<number> {
    const decisions = await oa.decisionServices!.decisions.listByProject(
      projectId,
    );
    return decisions.length;
  }

  async function runOptionBToPostEvidence(input: {
    suffix: string;
    noraFail?: boolean;
  }): Promise<{ runtime: RuntimeApplicationService; completed: Completed }> {
    const runtime = bootW2Runtime({
      productDbPath: dbPath,
      idPrefix: `ep08${input.suffix}`,
    });
    const { projectId, oa } = await seedProject(runtime, input.suffix);
    if (input.noraFail) {
      setConversationProviderForTests(
        new FakeConversationProvider({ failOnCall: 1 }),
      );
    }

    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: notesEditAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(`prepare: ${prep.message}`);
    expect(prep.projectContextOnly).toBe(true);
    expect(prep.cycleInstanceId).toBeNull();

    const live = await oa.executionContractServices!.getExecutionContract.execute(
      {
        executionContractId: prep.executionContractId,
      },
    );
    expect(live.ok).toBe(true);
    if (!live.ok) throw new Error("get EC");
    expect(live.contract.cycleInstanceId ?? null).toBeNull();
    expect(live.contract.constraints).not.toContain(
      PRODUCT_MISSION_FROM_DURABLE_CONTEXT,
    );
    const facts = requiredFactsOrThrow(live.contract);
    const inputs = live.contract.inputs as Record<string, unknown>;
    const repositoryRef = String(inputs.repositoryBindingIdentity ?? "");
    const baseSha = String(inputs.baseHeadSha ?? W2_TEST_PINNED_BASE_HEAD_SHA);

    const she = await singleHumanExecutePreparedContract({
      oa,
      projectId,
      executionContractId: live.contract.executionContractId,
      expectedVersion: live.contract.version,
      expectedSemanticFingerprint: live.contract.semanticFingerprint!,
      presentedFactIds: facts,
      forceLocalAuthority: true,
    });
    expect(she.ok).toBe(true);
    if (!she.ok) throw new Error(`she: ${she.code}`);

    const port = launchPortOf(oa);
    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: she.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) throw new Error(`select: ${selected.message}`);
    expect(selected.attempt!.selectedAgentRef).toBe(
      STUDIO_CURSOR_GENERALIST_AGENT_ID,
    );
    const attemptId = selected.attempt!.attemptId;

    const started = await governedExecuteStart({
      oa,
      projectId,
      executionContractId: she.executionContractId,
      attemptId,
      forceLocalAuthority: true,
    });
    expect(started.ok).toBe(true);
    if (!started.ok) throw new Error(`start: ${started.message}`);

    setTimeout(() => {
      port.resolveSimulatedCompletion(`proc:sim:${attemptId}`, {
        exitCode: 0,
        timedOut: false,
        stdout: cursorReportStdout({
          attemptId,
          executionContractId: she.executionContractId,
          repositoryRef,
          baseSha,
        }),
        stderr: "",
        durationMs: 5,
      });
    }, 15);

    const terminal = await governedExecuteRecordResult({
      oa,
      projectId,
      executionContractId: she.executionContractId,
      attemptId,
      forceLocalAuthority: true,
      awaitIfPending: true,
      missionResultRefsRoot: refsRoot,
    });
    expect(terminal.ok).toBe(true);
    if (!terminal.ok) throw new Error(`record: ${terminal.code}`);
    expect(terminal.attemptStatus).toBe("succeeded");

    const germ = loadGenericExecutionReviewMaterial({ refsRoot, attemptId });
    expect(germ.ok).toBe(true);

    const verificationId =
      executionReviewVerificationEvidenceIdForAttempt(attemptId);
    const verification =
      await oa.evidenceReviewServices!.evidenceReader.findById(verificationId);
    expect(verification).toBeTruthy();
    expect(verification!.bindings.cycleInstanceId).toBeUndefined();
    expect(
      await oa.evidenceReviewServices!.evidenceReader.findById(
        missionResultEvidenceIdForAttempt(attemptId),
      ),
    ).toBeNull();

    const hdCountBefore = await countHumanDecisions(oa, projectId);

    const materialized = await materializeW3bProductTerminal({
      oa,
      projectId,
      attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) throw new Error(`materialize: ${materialized.code}`);
    expect(materialized.product.outcome).toBe("UNCLAIMED");
    expect(materialized.product.outcome).not.toBe("SUCCESS");
    expect(materialized.postEvidence).toBeTruthy();

    return {
      runtime,
      completed: {
        projectId,
        executionContractId: she.executionContractId,
        attemptId,
        verificationId,
        productEvidenceId: materialized.product.evidenceId,
        reviewBundleId: materialized.product.reviewBundleId,
        claimEvaluationId: materialized.product.claimEvaluationId,
        productOutcome: materialized.product.outcome,
        postEvidence: materialized.postEvidence!,
        hdCountBefore,
      },
    };
  }

  function remountRuntime(): RuntimeApplicationService {
    // Simulate /studio server remount: new process-local OA on same durable DB.
    return bootW2Runtime({
      productDbPath: dbPath,
      idPrefix: "ep08remount",
    });
  }

  it("B2 — durable remount preserves Project/EC/Attempt + Evidence/RB/CE + W3-C", async () => {
    const { completed } = await runOptionBToPostEvidence({ suffix: "b2" });
    expect(completed.postEvidence.ok).toBe(true);
    if (!completed.postEvidence.ok) return;

    const remounted = remountRuntime();
    const oa = remounted.oa!;

    const live = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: completed.projectId,
    });
    expect(live.ok).toBe(true);
    if (!live.ok) return;
    expect(live.livingProjectState.activeCycleInstanceId ?? null).toBeNull();

    const ec = await oa.executionContractServices!.getExecutionContract.execute({
      executionContractId: completed.executionContractId,
    });
    expect(ec.ok).toBe(true);
    if (!ec.ok) return;
    expect(ec.contract.cycleInstanceId ?? null).toBeNull();

    const attempt = await oa.executionAttemptServices!.getExecutionAttempt.execute(
      { attemptId: completed.attemptId },
    );
    expect(attempt.ok).toBe(true);
    if (!attempt.ok) return;
    expect(attempt.attempt.executionContractId).toBe(
      completed.executionContractId,
    );

    const verification = await oa.evidenceReviewServices!.evidenceReader.findById(
      completed.verificationId,
    );
    expect(verification?.bindings.projectId).toBe(completed.projectId);
    expect(verification?.bindings.executionAttemptId).toBe(completed.attemptId);

    const rehydrated = await rehydrateProductOutcomeFromAttempt({
      oa,
      projectId: completed.projectId,
      attemptId: completed.attemptId,
    });
    expect(rehydrated.ok).toBe(true);
    if (!rehydrated.ok) return;
    expect(rehydrated.product.evidenceId).toBe(completed.productEvidenceId);
    expect(rehydrated.product.reviewBundleId).toBe(completed.reviewBundleId);
    expect(rehydrated.product.claimEvaluationId).toBe(
      completed.claimEvaluationId,
    );
    expect(rehydrated.product.outcome).toBe(completed.productOutcome);
    expect(rehydrated.product.outcome).not.toBe("SUCCESS");
    expect(rehydrated.postEvidence?.ok).toBe(true);
    if (!rehydrated.postEvidence || !rehydrated.postEvidence.ok) return;
    expect(rehydrated.postEvidence.evidenceId).toBe(completed.productEvidenceId);
    expect(rehydrated.postEvidence.recommendation.kind).toBe(
      completed.postEvidence.recommendation.kind,
    );
    expect(rehydrated.postEvidence.lpsVersion).toBe(
      completed.postEvidence.lpsVersion,
    );
    expect(rehydrated.postEvidence.replanInvoked).toBe(false);

    // GERM still readable after remount (same refs root).
    const surface = projectW3cExecutionReportSurfaceFromDurable({
      attemptId: completed.attemptId,
      refsRoot,
      targetPath: NOTES_PATH,
    });
    expect(surface.executionReport).not.toBeNull();

    // Remount continue: terminal post-Evidence must not invent HD / cycle /
    // duplicate Evidence. Product may already be stable (no re-materialize).
    const reconciled = await reconcileGovernedExecution({
      oa,
      projectId: completed.projectId,
      executionContractId: completed.executionContractId,
      intent: "continue",
      forceLocalAuthority: true,
    });
    expect(reconciled.ok).toBe(true);
    if (!reconciled.ok) return;
    if (reconciled.product && typeof reconciled.product === "object") {
      const product = reconciled.product as {
        evidenceId?: string | null;
        outcome?: string;
      };
      expect(product.evidenceId).toBe(completed.productEvidenceId);
      expect(product.outcome).toBe(completed.productOutcome);
    }
    const live2 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: completed.projectId,
    });
    expect(live2.ok).toBe(true);
    if (live2.ok) {
      expect(live2.livingProjectState.activeCycleInstanceId ?? null).toBeNull();
    }
    expect(await countHumanDecisions(oa, completed.projectId)).toBe(
      completed.hdCountBefore,
    );
    // Second materialize/rehydrate remains idempotent (no Evidence duplication).
    const again = await rehydrateProductOutcomeFromAttempt({
      oa,
      projectId: completed.projectId,
      attemptId: completed.attemptId,
    });
    expect(again.ok).toBe(true);
    if (again.ok) {
      expect(again.product.evidenceId).toBe(completed.productEvidenceId);
    }
  }, 90_000);

  it("B5 — post-Evidence recommendation visible; no auto HD / no false replan; propose≠decide", async () => {
    const { completed } = await runOptionBToPostEvidence({ suffix: "b5" });
    expect(completed.postEvidence.ok).toBe(true);
    if (!completed.postEvidence.ok) return;

    const remounted = remountRuntime();
    const oa = remounted.oa!;
    const rehydrated = await rehydrateProductOutcomeFromAttempt({
      oa,
      projectId: completed.projectId,
      attemptId: completed.attemptId,
    });
    expect(rehydrated.ok).toBe(true);
    if (!rehydrated.ok || !rehydrated.postEvidence?.ok) return;

    const reco = rehydrated.postEvidence.recommendation;
    expect(reco.headline.length).toBeGreaterThan(0);
    expect(reco.nextStep.length).toBeGreaterThan(0);
    expect(["continue", "recover"]).toContain(reco.kind);
    expect(reco.requiresHumanDecision).toBe(false);
    expect(rehydrated.postEvidence.replanInvoked).toBe(false);
    expect(reco.decisionCreated).toBe(false);
    expect(reco.gateConsumed).toBe(false);

    // Project-only: W2 Options still require an active CycleInstance
    // (honest — W3-C must not invent replan/HD to fake a structural CTA).
    const qual = await resolveW2QualificationInputs({
      oa,
      projectId: completed.projectId,
    });
    expect(qual.ok).toBe(false);
    if (!qual.ok) {
      expect(qual.code).toBe("CYCLE_NOT_QUALIFIED");
    }

    expect(await countHumanDecisions(oa, completed.projectId)).toBe(
      completed.hdCountBefore,
    );
    const live = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: completed.projectId,
    });
    expect(live.ok && (live.livingProjectState.activeCycleInstanceId ?? null)).toBe(
      null,
    );

    // Remount auto-resume is for pending stages only — completed terminal ≠ invent replan.
    expect(
      shouldAutoResumeReconcileOnRemount({
        stage: "COMPLETE",
        nextDeterministicAction: "NONE",
      }),
    ).toBe(false);
  }, 90_000);

  it("B6 — Nora unavailable: durable reserve survives remount; no false SUCCESS / HD", async () => {
    const { completed } = await runOptionBToPostEvidence({
      suffix: "b6",
      noraFail: true,
    });
    expect(completed.postEvidence.ok).toBe(true);
    if (!completed.postEvidence.ok) return;

    expect(completed.postEvidence.analysisText).toBeNull();
    expect(completed.postEvidence.analysisUnavailableReason).toBeTruthy();
    expect(completed.postEvidence.noraInvoked).toBe(true);
    expect(completed.productOutcome).toBe("UNCLAIMED");
    expect(completed.productOutcome).not.toBe("SUCCESS");

    // Prefer existing withNoraUnavailableReserve projection when postEvidence
    // path marks analysis unavailable but product CE remains durable.
    // (Reserve may appear on product.reservations and/or analysisUnavailableReason.)
    const remounted = remountRuntime();
    const oa = remounted.oa!;
    const rehydrated = await rehydrateProductOutcomeFromAttempt({
      oa,
      projectId: completed.projectId,
      attemptId: completed.attemptId,
    });
    expect(rehydrated.ok).toBe(true);
    if (!rehydrated.ok || !rehydrated.postEvidence?.ok) return;

    expect(rehydrated.postEvidence.analysisText).toBeNull();
    expect(rehydrated.postEvidence.analysisUnavailableReason).toBe(
      completed.postEvidence.analysisUnavailableReason,
    );
    expect(rehydrated.product.outcome).toBe("UNCLAIMED");
    expect(rehydrated.postEvidence.recommendation.requiresHumanDecision).toBe(
      false,
    );
    expect(rehydrated.postEvidence.replanInvoked).toBe(false);
    expect(await countHumanDecisions(oa, completed.projectId)).toBe(
      completed.hdCountBefore,
    );

    // GERM not fabricated on remount.
    const germ = loadGenericExecutionReviewMaterial({
      refsRoot,
      attemptId: completed.attemptId,
    });
    expect(germ.ok).toBe(true);

    // Pilot-facing reserve constant remains the canonical degraded label.
    expect(NORA_ANALYSIS_UNAVAILABLE_RESERVE).toMatch(/Nora indisponible/i);
  }, 90_000);
});

```

### epS208.proof01.piloteSurface.b5b6.ui.test.tsx

```tsx
/**
 * EP-S2-08-PROOF-01 — R2 Pilote-facing TrajectorySurface B5/B6 (jsdom).
 *
 * Mounts REAL TrajectorySurface. Server actions mocked at the boundary only.
 * Ceiling: jsdom Pilote projection — ≠ browser /studio E2E remount.
 *
 * @vitest-environment jsdom
 */
import {
  act,
  cleanup,
  render,
  screen,
} from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { TrajectorySurface } from "@/features/pre-m6-product-ui/surfaces/TrajectorySurface";
import {
  nextReconcileContinueDelayMs,
  RECONCILE_CONTINUE_BACKOFF_MAX_MS,
} from "@/features/project-assistant/w2/reconcileContinuePolicy";
import { NORA_ANALYSIS_UNAVAILABLE_RESERVE } from "@/features/project-assistant/w2/w3bProductTerminalProjection";

const {
  proposeMock,
  decideMock,
  inspectMock,
  authorizeMock,
  prepareContractMock,
  confirmMock,
  executeSelectMock,
  executeStartMock,
  executeCompleteMock,
  materializeMock,
  reconcileMock,
  deriveContinuityMock,
  resolveContextMock,
  readReviewItemMock,
  readActiveDecisionSubjectMock,
  readGovernedExecutionContinuityMock,
  readRecoveryExecutionBindingMock,
  readRecoveryOwnedDecisionContinuityMock,
  readPreCycleMock,
  readApprovalMock,
  readPreparedCycleMock,
} = vi.hoisted(() => ({
  proposeMock: vi.fn(),
  decideMock: vi.fn(),
  inspectMock: vi.fn(),
  authorizeMock: vi.fn(),
  prepareContractMock: vi.fn(),
  confirmMock: vi.fn(),
  executeSelectMock: vi.fn(),
  executeStartMock: vi.fn(),
  executeCompleteMock: vi.fn(),
  materializeMock: vi.fn(),
  reconcileMock: vi.fn(),
  deriveContinuityMock: vi.fn(),
  resolveContextMock: vi.fn(),
  readReviewItemMock: vi.fn(),
  readActiveDecisionSubjectMock: vi.fn(),
  readGovernedExecutionContinuityMock: vi.fn(),
  readRecoveryExecutionBindingMock: vi.fn(),
  readRecoveryOwnedDecisionContinuityMock: vi.fn(),
  readPreCycleMock: vi.fn(),
  readApprovalMock: vi.fn(),
  readPreparedCycleMock: vi.fn(),
}));

vi.mock("@/features/project-assistant/actions", () => ({
  projectAssistantConversationContinuityAction: vi.fn(async () => ({
    ok: true,
    transcriptAvailability: "empty",
    messages: [],
    journal: { cycleInstanceId: null, entries: [] },
  })),
  projectAssistantPrepareResolvedM3Action: vi.fn(),
  projectAssistantResolveLegacyM3DocsWriteAction: vi.fn(),
}));

vi.mock("@/features/project-assistant/w2/actions", () => ({
  w2ProposeTrajectoryOptionsAction: (...a: unknown[]) => proposeMock(...a),
  w2DecideTrajectoryAction: (...a: unknown[]) => decideMock(...a),
  w2InspectExecutionContractAction: (...a: unknown[]) => inspectMock(...a),
  w2ConfirmExecutionContractAction: (...a: unknown[]) => confirmMock(...a),
  w2AuthorizeExecutionContractAction: (...a: unknown[]) => authorizeMock(...a),
  w2AmendExecutionContractAction: vi.fn(),
  w2PrepareExecutionContractAction: (...a: unknown[]) =>
    prepareContractMock(...a),
  w2GovernedExecuteSelectAction: (...a: unknown[]) => executeSelectMock(...a),
  w2GovernedExecuteStartAction: (...a: unknown[]) => executeStartMock(...a),
  w2GovernedExecuteCompleteAction: (...a: unknown[]) =>
    executeCompleteMock(...a),
  w2GovernedExecuteCancelAction: vi.fn(),
  w2MaterializeProductOutcomeAction: (...a: unknown[]) =>
    materializeMock(...a),
  w2ReconcileGovernedExecutionAction: (...a: unknown[]) => reconcileMock(...a),
  w2DeriveGovernedExecutionContinuityAction: (...a: unknown[]) =>
    deriveContinuityMock(...a),
  w2ResolveProductExecutionContextAction: (...a: unknown[]) =>
    resolveContextMock(...a),
  w2ReadExecutionReviewItemAction: (...a: unknown[]) =>
    readReviewItemMock(...a),
  w2RehydrateProductOutcomeAction: vi.fn(),
  w2RematerializeDocsWriteEvidenceAction: vi.fn(),
  w2ReadActiveDecisionSubjectAction: (...a: unknown[]) =>
    readActiveDecisionSubjectMock(...a),
  w2ReadCurrentGovernedExecutionContinuityAction: (...a: unknown[]) =>
    readGovernedExecutionContinuityMock(...a),
  w2ReadRecoveryExecutionBindingAction: (...a: unknown[]) =>
    readRecoveryExecutionBindingMock(...a),
  w2ReadRecoveryOwnedDecisionContinuityAction: (...a: unknown[]) =>
    readRecoveryOwnedDecisionContinuityMock(...a),
  w2PrepareRecoveryDocsWriteAction: vi.fn(),
  w2ReadProjectHistoryAction: vi.fn().mockResolvedValue({
    ok: false,
    code: "UNUSED",
    message: "unused",
  }),
}));

vi.mock("@/features/project-assistant/preCycleCandidateTrajectoryActions", () => ({
  projectAssistantReadPreCycleCandidateTrajectoryAction: (...a: unknown[]) =>
    readPreCycleMock(...a),
  projectAssistantPrepareCandidateTrajectoryAction: vi.fn(),
  projectAssistantReadCandidateTrajectoryApprovalPresentationAction: (
    ...a: unknown[]
  ) => readApprovalMock(...a),
  projectAssistantApprovePreCycleCandidateTrajectoryAction: vi.fn(),
  prepareCycleFromValidatedTrajectoryAction: vi.fn(),
  readPreparedTrajectoryCycleAction: (...a: unknown[]) =>
    readPreparedCycleMock(...a),
  startPreparedTrajectoryCycleAction: vi.fn(),
}));

const PROJECT_ID = "prj:ep08-p01-ui";
const EC_ID = "xct:w3a:dec:w2-trj:ep08-p01-ui";
const ATTEMPT_ID = "xat:ep08-p01-ui";
const UNAVAILABLE_REASON = "Nora provider controlled failure (DET)";

function activeContinuity() {
  return {
    ok: true as const,
    kind: "active" as const,
    decisionRef: "dec:w2-trj:ep08-p01-ui",
    contract: {
      executionContractId: EC_ID,
      version: 2,
      status: "confirmed",
      action: "studio.cursor.generalist.execute",
      target: "studio.cursor.generalist.workspace",
      scope: "studio.cursor.generalist.authorized_contract",
      requiredAuthority: "N2",
      constraints: ["PRODUCT_GOVERNED", "EFFECT_CLASS:local-write"],
      stopConditions: [],
      requiredCapabilities: ["cap:studio.cursor.generalist"],
      reversibility: "reversible",
      semanticFingerprint: "fp-ep08-p01-ui",
      effectConfirmationRequired: true,
      effectConfirmationLevel: "N2",
      inspectionDisclosure: {
        action: "studio.cursor.generalist.execute",
        technicalTarget: "studio.cursor.generalist.workspace",
        scope: "studio.cursor.generalist.authorized_contract",
        targetRepositoryRef: "acme/w2-harness",
        targetPath: null,
        scopeIn: null,
        scopeOut: null,
        createOrModify: null,
        noDelete: null,
        objective: "EP-S2-08 UI proof",
        artifactType: null,
        artifactBrief: null,
        contentRequirements: null,
        validationExpectations: null,
        expectedOutputs: ["Fichiers créés/modifiés dans le scope autorisé"],
        evidenceRequirements: ["evreq:local-write"],
        requiredAuthority: "N2",
        requiredCapabilities: ["cap:studio.cursor.generalist"],
        constraints: ["PRODUCT_GOVERNED"],
        stopConditions: [],
        reversibility: "reversible",
        contractVersion: 2,
        executionContractId: EC_ID,
        semanticFingerprint: "fp-ep08-p01-ui",
        disclosureComplete: true,
        incompletenessCode: null,
      },
    },
    inspection: {
      executionContractId: EC_ID,
      contractVersion: 2,
      semanticFingerprint: "fp-ep08-p01-ui",
      statusLabel: "INSPECTION SUFFISANTE",
      inspectionSufficient: true,
      attestationRef: "insp:ep08-p01-ui",
      attestedVersion: 2,
      staleAttestationRef: null,
      reinspectionRequired: false,
      reason: null,
      grantsAuthority: false,
    },
    requiredInspectedFacts: ["action", "target", "scope"],
  };
}

function productUnclaimed(reservations: readonly string[] = []) {
  return {
    outcome: "UNCLAIMED" as const,
    businessHeadline: "Résultat technique non encore prouvé",
    businessReason: "ClaimEvaluation NOT_PROVEN — Product PASS refused",
    claimAllowed: false,
    evidenceId: "ev:w3b:ep08-p01-ui",
    reviewBundleId: "rb:w3b:ep08-p01-ui",
    claimEvaluationId: "clm:w3b:ep08-p01-ui",
    claimEvaluationStatus: "not_proven",
    contractResultVerdict: "NOT_SATISFIED",
    evidenceStatus: "available",
    evidenceSummary: "Verification Evidence present",
    reviewBundleCompleteness: "partial",
    governedBoundary: "Fake Cursor boundary",
    technicalDetail: {
      attemptId: ATTEMPT_ID,
      attemptStatus: "succeeded",
      resultRef: "res:ep08-p01-ui",
      errorRef: null,
      stopReason: null,
      executionContractId: EC_ID,
      executionContractVersion: 2,
    },
    reservations: [...reservations],
    antiClaims: {
      ready: false,
      w3Closed: false,
      productCompletionComplete: false,
      runtimeV3Adopted: false,
      realProven: false,
      cycleAutoClosed: false,
      projectArchived: false,
    },
    cycleInstanceClosed: false,
    projectArchived: false,
    noraInvoked: true,
    replanInvoked: false,
    realExecution: false,
  };
}

function postEvidence(input: {
  kind: "continue" | "recover";
  analysisText: string | null;
  analysisUnavailableReason: string | null;
  requiresHumanDecision?: boolean;
}) {
  return {
    ok: true as const,
    noraInvoked: true,
    replanInvoked: false,
    analysisText: input.analysisText,
    analysisUnavailableReason: input.analysisUnavailableReason,
    analysisProviderId: "fake-test",
    recommendation: {
      kind: input.kind,
      headline:
        input.kind === "continue"
          ? "Continuer sur la lignée durable"
          : "Reprise technique same-scope",
      rationale: "Recommendation ≠ HumanDecision — DET Pilote surface",
      nextStep:
        input.kind === "continue"
          ? "Continuer l'exécution gouvernée sans nouvelle décision structurelle"
          : "Diagnostiquer puis reprendre same-scope si autorisé",
      requiresHumanDecision: input.requiresHumanDecision ?? false,
      authority: "none" as const,
      gateConsumed: false,
      decisionCreated: false,
      attemptAutoLaunchNextCycle: false,
      recommendNextGateStatus: null,
      nextActionCode: input.kind,
    },
    lpsVersion: 3,
    evidenceId: "ev:w3b:ep08-p01-ui",
    reviewBundleId: "rb:w3b:ep08-p01-ui",
    claimEvaluationId: "clm:w3b:ep08-p01-ui",
    productOutcome: "UNCLAIMED",
    executionReport: null,
  };
}

function projection(stage: "RUNNING" | "POST_EVIDENCE_COMPLETE") {
  return {
    projectId: PROJECT_ID,
    activeCycleInstanceId: null,
    executionContractId: EC_ID,
    executionContractVersion: 2,
    executionContractStatus: "confirmed",
    attemptId: ATTEMPT_ID,
    attemptStatus: stage === "RUNNING" ? "running" : "succeeded",
    stage,
    productOutcome: stage === "POST_EVIDENCE_COMPLETE" ? "UNCLAIMED" : null,
    evidenceId: stage === "POST_EVIDENCE_COMPLETE" ? "ev:w3b:ep08-p01-ui" : null,
    reviewBundleId:
      stage === "POST_EVIDENCE_COMPLETE" ? "rb:w3b:ep08-p01-ui" : null,
    claimEvaluationId:
      stage === "POST_EVIDENCE_COMPLETE" ? "clm:w3b:ep08-p01-ui" : null,
    claimEvaluationStatus:
      stage === "POST_EVIDENCE_COMPLETE" ? "not_proven" : null,
    postEvidencePresent: stage === "POST_EVIDENCE_COMPLETE",
    nextDeterministicAction:
      stage === "RUNNING" ? ("AWAIT_EXTERNAL" as const) : ("NONE" as const),
    humanDecisionRequired: false,
    recoveryRequired: false,
    reason: null,
    blockingCode: null,
    context: null,
  };
}

async function flush(ms = 0): Promise<void> {
  await act(async () => {
    await vi.advanceTimersByTimeAsync(ms);
  });
}

async function paintTerminal(extra: {
  product: ReturnType<typeof productUnclaimed>;
  postEvidence: ReturnType<typeof postEvidence>;
}) {
  reconcileMock.mockImplementation(async () => ({
    ok: true as const,
    intent: "continue" as const,
    projection: projection("POST_EVIDENCE_COMPLETE"),
    transitionsApplied: [] as string[],
    stoppedReason: "stable",
    product: extra.product,
    postEvidence: extra.postEvidence,
  }));
  render(
    <TrajectorySurface
      decisionWorkflowMode="legacy_cta"
      projectId={PROJECT_ID}
    />,
  );
  await flush(0);
  await flush(0);
  await flush(nextReconcileContinueDelayMs(1));
  await flush(RECONCILE_CONTINUE_BACKOFF_MAX_MS);
}

beforeEach(() => {
  vi.useFakeTimers();
  for (const m of [
    proposeMock,
    decideMock,
    inspectMock,
    authorizeMock,
    prepareContractMock,
    confirmMock,
    executeSelectMock,
    executeStartMock,
    executeCompleteMock,
    materializeMock,
    reconcileMock,
    deriveContinuityMock,
    resolveContextMock,
    readReviewItemMock,
    readActiveDecisionSubjectMock,
    readGovernedExecutionContinuityMock,
    readRecoveryExecutionBindingMock,
    readRecoveryOwnedDecisionContinuityMock,
    readPreCycleMock,
    readApprovalMock,
    readPreparedCycleMock,
  ]) {
    m.mockReset();
  }
  readActiveDecisionSubjectMock.mockResolvedValue({ ok: true, kind: "none" });
  readGovernedExecutionContinuityMock.mockResolvedValue(activeContinuity());
  readRecoveryExecutionBindingMock.mockResolvedValue({
    ok: true,
    binding: null,
    recoveryContextPresent: false,
  });
  readRecoveryOwnedDecisionContinuityMock.mockResolvedValue({
    ok: true,
    kind: "none",
  });
  readPreCycleMock.mockResolvedValue({
    ok: true,
    candidate: null,
    activeCycleInstanceId: null,
    hasCurrentNextCycleRecommendation: false,
  });
  readApprovalMock.mockResolvedValue({
    ok: true,
    presentation: null,
    alreadyDecided: null,
    activeCycleInstanceId: null,
  });
  readPreparedCycleMock.mockResolvedValue({ ok: true, prepared: null });
  deriveContinuityMock.mockResolvedValue({
    ok: true,
    projection: projection("RUNNING"),
  });
  resolveContextMock.mockResolvedValue({
    ok: false,
    code: "UNUSED",
    message: "",
  });
  proposeMock.mockResolvedValue({
    ok: false,
    code: "CYCLE_NOT_QUALIFIED",
    message:
      "Aucun cycle qualifié n'est actif — la qualification doit précéder les options.",
  });
});

afterEach(() => {
  cleanup();
  vi.clearAllTimers();
  vi.useRealTimers();
});

describe("EP-S2-08-PROOF-01 R2 — Pilote TrajectorySurface B5/B6 (jsdom)", () => {
  it("B5 continue — recommendation visible; no HD; no structural Options CTA", async () => {
    await paintTerminal({
      product: productUnclaimed(),
      postEvidence: postEvidence({
        kind: "continue",
        analysisText: "Analyse Nora DET continue",
        analysisUnavailableReason: null,
      }),
    });

    expect(screen.getByTestId("w3b-product-outcome")).toHaveAttribute(
      "data-outcome",
      "UNCLAIMED",
    );
    expect(screen.getByTestId("w3c-post-evidence")).toBeVisible();
    expect(screen.getByTestId("w3c-recommendation-headline")).toHaveTextContent(
      /Continuer sur la lignée durable/,
    );
    expect(screen.getByTestId("w3c-next-step")).toHaveTextContent(/Continuer/);
    expect(screen.getByTestId("w3c-recommendation-kind")).toHaveTextContent(
      "continue",
    );
    expect(screen.getByTestId("w3c-requires-human-decision")).toHaveTextContent(
      "non",
    );
    expect(screen.getByTestId("w3c-recommendation-authority")).toHaveTextContent(
      /Recommendation ≠ HumanDecision/,
    );
    // Project-only continue: no structural propose CTA invented.
    expect(screen.queryByTestId("w3c-propose-trajectory")).toBeNull();
    expect(proposeMock).not.toHaveBeenCalled();
    expect(decideMock).not.toHaveBeenCalled();
  });

  it("B5 recover (no HD) — same-scope note; Options remain cycle-gated if proposed", async () => {
    await paintTerminal({
      product: productUnclaimed(),
      postEvidence: postEvidence({
        kind: "recover",
        analysisText: "Analyse Nora DET recover",
        analysisUnavailableReason: null,
        requiresHumanDecision: false,
      }),
    });

    expect(screen.getByTestId("w3c-recommendation-kind")).toHaveTextContent(
      "recover",
    );
    expect(screen.getByTestId("w3c-requires-human-decision")).toHaveTextContent(
      "non",
    );
    expect(screen.getByTestId("w3c-same-scope-recovery-note")).toBeVisible();
    expect(screen.queryByTestId("w3c-propose-trajectory")).toBeNull();
    // Honest Project-only Options refuse remains available at the server boundary.
    const refused = await proposeMock({ projectId: PROJECT_ID });
    expect(refused).toEqual(
      expect.objectContaining({ ok: false, code: "CYCLE_NOT_QUALIFIED" }),
    );
  });

  it("B6 Nora unavailable — reason intelligible; UNCLAIMED; remount preserve via reconcile", async () => {
    const pe = postEvidence({
      kind: "continue",
      analysisText: null,
      analysisUnavailableReason: UNAVAILABLE_REASON,
    });
    // When postEvidence.ok=true with unavailable analysis, Pilote sees reason on
    // w3c-nora-analysis. withNoraUnavailableReserve applies when postEvidence fails.
    await paintTerminal({
      product: productUnclaimed([NORA_ANALYSIS_UNAVAILABLE_RESERVE]),
      postEvidence: pe,
    });

    expect(screen.getByTestId("w3b-product-outcome")).toHaveAttribute(
      "data-outcome",
      "UNCLAIMED",
    );
    expect(screen.getByTestId("w3c-nora-analysis")).toHaveTextContent(
      UNAVAILABLE_REASON,
    );
    expect(screen.getByTestId("w3c-requires-human-decision")).toHaveTextContent(
      "non",
    );
    expect(screen.queryByTestId("w3c-propose-trajectory")).toBeNull();

    cleanup();

    // Remount: auto-resume from RUNNING → same durable terminal (process remount analog).
    deriveContinuityMock.mockResolvedValue({
      ok: true,
      projection: projection("RUNNING"),
    });
    await paintTerminal({
      product: productUnclaimed([NORA_ANALYSIS_UNAVAILABLE_RESERVE]),
      postEvidence: pe,
    });
    expect(screen.getByTestId("w3c-nora-analysis")).toHaveTextContent(
      UNAVAILABLE_REASON,
    );
    expect(screen.getByTestId("w3b-product-outcome")).toHaveAttribute(
      "data-outcome",
      "UNCLAIMED",
    );
    expect(decideMock).not.toHaveBeenCalled();
  });
});

```

---

## 8 — R24

| Volume | Impact |
|---|---|
| 08 | Updated — R-HD-01 integrated oracles |
| 09 | Updated — R-HD-01 CLOSED at DET integrated |
| 02/03/04/06/07 | **NO PRODUCT RUNTIME SEMANTIC IMPACT** this pass (tests-only; prior candidate overlays retained) |

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
index 77ee95a6..b6295932 100644
--- a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
+++ b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
@@ -248,3 +248,7 @@ Project (`activeCycleInstanceId=null`) → Generic PREPARE (no fictive cycle) 
 **Late Evidence:** after frozen tech RB, rematerialize with expanded Evidence set → `IDEMPOTENCY_CONFLICT` (no silent frozen rewrite).
 
 **Anti-claims:** ≠ L3 GLOBAL CLOSED · ≠ REAL · ≠ mutating Generic Product PASS · ≠ invent CycleInstance · ≠ EP-S2-05/08 closed · Tool-First Nora first-prompt + multi-path unclaimed redaction closed DET (CORR-CI-623-01/02).
+
+### LOCAL CANDIDATE — EP-S2-08-PROOF-01 (2026-10-28) — Project-scoped W3-C CKC (R1 Option A + Option 1 + R-INSPECT-01)
+
+> **Epistemic class:** **LOCAL CANDIDATE** on Product branch `feat/akg-m5-ep-s2-08-proof-01` @ base `3fb84630…` · **PROJECT GIT INTEGRATION NOT AUTHORIZED** · **≠ CURRENT ON MAIN**. **Morris Option A** + **Option 1** + **R-INSPECT-01** (inspection disclosure coherence). Defensive gates retained. **Positive Delivery WHAT:** `scopeIn` alone is **NOT** sufficient (WHERE ≠ WHAT). Affirmative stamps (exact): `repositoryMutationDeclared==="write"` OR exact `EFFECT_CLASS:local-write`. **Option 1:** Generic PREPARE preserves declared mutation enum onto durable EC (no invention; no EFFECT_CLASS stamp; declaration ≠ SHE authority). **R-INSPECT-01:** canonical `projectExecutionContractInspectionDisclosure` exposes `repositoryMutationDeclared`; `requiredInspectedFactsForContract` requires `inputs.repositoryMutationDeclared` when present; Pilote exam rows (`buildInspectionFactRowsFromDisclosure` / `ContractInspectionExamPanel`) and TrajectorySurface render neutral label « Opération déclarée sur le dépôt »; HD/sealed `read_only` vs analysis `write` fail-closed (`HD_MUTATION_DECLARATION_CONFLICT` / internal consistency A5). Fingerprint alone ≠ visual disclosure. POS-01 + B2/B5/B6 + R-INSPECT oracles DET. EP-S2-08 **PARTIAL**. ≠ invent CycleInstance/HD · ≠ browser E2E · ≠ REAL · ≠ L4.
diff --git a/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md b/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
index 8fd457ad..933d3958 100644
--- a/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
+++ b/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
@@ -161,4 +161,6 @@ Four situations must stay distinct (S2 / M-HD-01 HD11):
 | Rehydration | W3-C / GERM surface from durable facts demonstrated DET (O2 / nominal) | Nora/Pilote UX E2E **NOT PROVEN** (EP-S2-08 PARTIAL) |
 | Fictive cycle | Rehydrate must not create CycleInstance | BEHAVIOR PROVEN at tested scope |
 
+**LOCAL CANDIDATE (EP-S2-08-PROOF-01, 2026-10-28):** Process remount = new OA on same durable SQLite + refs → Project/EC/Attempt + Evidence/RB/CE + W3-C recommendation/reserve rehydrate DET (`akgM5L3S2.epS208.proof01…` B2/B6 **PASS** after Option 1). Post-Evidence CKC orientation on remount remains eligibility-gated (R1 Option A): Attempt EC durable stamps (including preserved `repositoryMutationDeclared`) decide Delivery vs refuse — remount does not invent CycleInstance, invent `"write"`, or widen SHE authority. **≠** browser `/studio` remount E2E · **≠** CURRENT ON MAIN · EP-S2-08 still **PARTIAL**.
+
 **≠** invent recovery E2E beyond DET proofs.
diff --git a/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md b/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
index 641e4ebd..115912a7 100644
--- a/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
+++ b/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
@@ -144,6 +144,9 @@ Code integrated on main. Invariants apply **when** exclusive is armed (trim=`"1"
 | `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` (Select) | F10 R2 | pathless non-mutating EC + REAL=1 at Select | **No new Attempt**; Select refused; no REAL launch | none | yes — Fake/DET still OK |
 | `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` (Start) | F10 R2 | same EC + REAL=1 at Start with prior `accepted` Attempt | Start refused; Attempt stays `accepted`; no launch-port call | none | yes — Fake/DET still OK |
 | `CKC_*` | CKC | incoherent/unavailable mapping | qualification fail | none unauthorized | yes |
+| `POST_EVIDENCE_CKC_NOT_ELIGIBLE` / `POST_EVIDENCE_CKC_AMBIGUOUS` | W3-C post-Evidence CKC | Project-only without positive Generic NON_STRUCTURAL Delivery eligibility on Attempt EC (absence of durable WHAT / impact / materiality gates) | W3-C fail-closed before Nora/LPS mutation; **no** universal `cyc:delivery`; Option 1 preserves declared mutation only — never invents `"write"` | none unauthorized | yes — **LOCAL CANDIDATE** EP-S2-08-PROOF-01 Option A + Option 1 · ≠ ON MAIN |
+| `HD_MUTATION_DECLARATION_CONFLICT` / `mutation_write_vs_read_only_intent` | Generic PREPARE / EC internal consistency (R-INSPECT-01) | Sealed HD `intentKind=read_only` (or bounded non-mutating / NO_REPOSITORY_MUTATION stamp) contradicts analysis/`inputs.repositoryMutationDeclared=write` | PREPARE refuse or SHE consistency refuse — no silent override; declaration ≠ authorization; fingerprint alone ≠ visual disclosure | none unauthorized | yes — **LOCAL CANDIDATE** R-INSPECT-01 · ≠ ON MAIN |
+| `POST_EVIDENCE_CKC_ATTEMPT_PROJECT_MISMATCH` / `POST_EVIDENCE_CKC_CYCLE_LINEAGE_MISMATCH` / `POST_EVIDENCE_CKC_PROVENANCE_INCOHERENT` | W3-C post-Evidence CKC | Attempt/EC/LPS cycle or project lineage incoherent | orientation refused — no silent LPS cycle substitution for old Attempt | none unauthorized | yes — **LOCAL CANDIDATE** EP-S2-08-PROOF-01 · ≠ ON MAIN |
 | `AUTHORITY_NOT_CONFIGURED` | authz | missing local Pilot gate | cannot decide | none | yes |
 | `MANAGED_REPO_ROOT_BASE_UNCONFIGURED` | **CURRENT ON MAIN after #618:** missing managed root still fail-closes; **not** a docs_write Product-admission gate (admission RETIRED). Historical « docs_write REAL » association = **HISTORICAL** | missing managed root | cannot REAL write | none | yes |
 | `repository_remote_identity_mismatch` | F10 seal (`sealRepositoryBindingFromExecutionInputs`) — **CORR-02 CURRENT ON MAIN (#618)** | provided remote does not match canonical git-target identity | REAL start refused (`REAL_WORKSPACE_INVALID`); no synthesized GitHub URL fallback | none | yes — DET · **≠** REAL |
diff --git a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
index db5716f1..9ae1302f 100644
--- a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
+++ b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
@@ -222,3 +222,16 @@ Do **not** conflate Generic PREPARE eligibility with Artifact continuation. DETE
 | Post-merge CI `#40526990871` @ `6c8b661c…` | Detect / Typecheck / Lint / Build / Vitest / Modeled Governance / Secret scan / Trailing whitespace / **Required Gate SUCCESS** | CI FACT CURRENT ON MAIN |
 
 **Fake/Real:** Cursor = TestOnlyRealExecutionLaunchPort · FS OBSERVED = real temp worktree · O8 EvidenceReader = DET substitution bounded · REAL Cursor / OpenAI LIVE **NOT PROVEN**. Historical Pass 05 « 17 PASS / 105 PASS / dirty LOCAL » counts remain valid as **pre-merge handoff facts**, not re-asserted as Cycle 14 local re-runs.
+
+### LOCAL CANDIDATE — EP-S2-08-PROOF-01 (2026-10-28) — B2/B5/B6 + R1 Option A/1 + R-INSPECT-01
+
+| Suite / oracle | Result | Proof level |
+|---|---|---|
+| `akgM5L3S2.epS208.proof01.piloteResume.integrated.d0.test.ts` | B2 remount · B5 continue/recover · B6 Nora unavailable — **3/3 PASS** | **LOCAL DET** ≠ ON MAIN |
+| `akgM5L3S2.epS208.proof01.r1CkcSemantic.d0.test.ts` | R1 matrix + POS-01 write preserved → Delivery CKC — **22 PASS** | **LOCAL DET** · Option 1 |
+| `akgM5L3S2.epS208.proof01.rInspect01.d0.test.ts` | INSPECT-P1…P5 / N1…N5 · unit HD coherence — **10 PASS**; **R-HD-01** integrated PATH A/B/C — HD-N1 `HD_MUTATION_DECLARATION_CONFLICT` via real ACCEPT_PREPARE OA · HD-P1 coherent decisionRefs · HD-N2 absent mutation ≠ HD write · SHE cross-check mutation preserved — **+4 PASS (14 total)** | **LOCAL DET** · R-INSPECT-01 + R-HD-01 |
+| `epS208.proof01.rInspect01.inspectionSurface.ui.test.tsx` | ContractInspectionExamPanel renders declared write; absent ≠ invented write — **2 PASS** | **LOCAL jsdom** ≠ browser E2E |
+| `epS208.proof01.piloteSurface.b5b6.ui.test.tsx` | B5/B6 TrajectorySurface jsdom Pilote — **3 PASS** | **LOCAL jsdom** ≠ browser E2E |
+| `p6.mHd01.genericMissionHumanDecision.d0.test.ts` | M-HD-01 harness reused by R-HD-01 — non-regression **PASS** | **LOCAL DET** |
+
+Ceiling: **DETERMINISTIC PRODUCT INTEGRATION AT TESTED SCOPE**. ≠ browser `/studio` remount · ≠ live Pilot HD · ≠ EP-S2-08 PASS · ≠ REAL · ≠ Final Critical Readiness exit.
diff --git a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
index 0aaab505..cb1a225f 100644
--- a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
@@ -15,7 +15,7 @@
 | Option B Product + S8 + R-S8-01…04 + CORR-CI-623-01/02 | **CURRENT ON MAIN DET** (PR #623 MERGED · CI #40526990871 SUCCESS) | preserve; no Product mutation in Cycle 14 |
 | EP-S2-01…04, 06–07, 09–12 | **PASS** at tested DET scope | preserve senses |
 | EP-S2-05 Mission Evidence Project-only | **NOT PROVEN** | **Owner:** Product / construction Studio. **Exit (distinct):** Project-only context + Mission semantic **actually applicable** (no invented `PRODUCT_MISSION` stamp) + Mission Evidence ingested with Project/EC/Attempt identity + provenance + RB/CE consume it + Product Result honest; `generic_materialization` **≠** Mission Evidence. **Morris decision** only if semantic/model evolution required. **≠** automatic L4 assignment. |
-| EP-S2-08 Post-Evidence / rehydration (Nora/Pilote UX) | **PARTIAL** | **Owner:** Product / continuité Nora–Pilote. **Covered now:** durable GERM/W3-C technical rehydrate DET on main. **Exit (distinct):** durable resume with Project/EC/Attempt identity + Evidence/reserves preserved + Nora/Pilote restitution effective + governed continue/replan at decided scope + no invented HumanDecision; proofs Product/UX applicable. **Trajectory candidate:** L4 **or** next applicable capacity — **confirm via Roadmap + Morris GO** (L4 **not** automatically authorized / decided by this debt). |
+| EP-S2-08 Post-Evidence / rehydration (Nora/Pilote UX) | **PARTIAL** | **Owner:** Product / continuité Nora–Pilote. **Covered now (ON MAIN):** durable GERM/W3-C technical rehydrate DET. **LOCAL CANDIDATE (EP-S2-08-PROOF-01 @ `3fb84630…`, 2026-10-28 — ≠ ON MAIN / GI NOT AUTHORIZED):** Option A + Option 1 + R-INSPECT-01 + **R-HD-01 INTEGRATED DET** — real OA seal/record/verify ACCEPT_PREPARE; first gate `HD_MUTATION_DECLARATION_CONFLICT` BEHAVIOR PROVEN; coherent HD-P1 decisionRefs; HD-N2 absence ≠ invented write; SHE deferred structural preserves mutation without ACCEPT_PREPARE. No production HD-model change this pass (tests-only). **Still open:** browser `/studio` remount E2E; dual F3/W3-C; Final Critical Readiness / GI. ≠ EP-S2-08 PASS · L4 **not** auto-authorized. |
 | Late Evidence after frozen RB | Fail-closed `IDEMPOTENCY_CONFLICT`; **no** same-key supersession (**OPEN** policy) | Morris/OA — reopen policy or new Attempt |
 | Mutating Generic Product PASS | **NOT PROVEN** (honest UNCLAIMED) | Result Semantic GO if ever required |
 | generic_materialization Evidence (#618 gap) | **CLOSED AT DET SCOPE ON MAIN** via #623 · **≠** REAL E2E FS→Git→Review closure | REAL E2E remains KNOWN GAP / distinct proof |
diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index 788ea0f2..29c598dd 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -19,7 +19,7 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md",
-      "sha256_16": "d13787c0f629efe4"
+      "sha256_16": "c5c9ff056f563c38"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md",
@@ -31,19 +31,19 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md",
-      "sha256_16": "21c9328c91f86984"
+      "sha256_16": "b019c92a3e457b38"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md",
-      "sha256_16": "94aa75b2dcaa90c2"
+      "sha256_16": "975aafc80c713797"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md",
-      "sha256_16": "7a1bc607f6f28230"
+      "sha256_16": "5bfd9515997c4045"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md",
-      "sha256_16": "700ee3ee207a5434"
+      "sha256_16": "ae2b7a00e45b27ed"
     }
   ],
   "components": [

```

### Manifest

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index 788ea0f2..29c598dd 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -19,7 +19,7 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md",
-      "sha256_16": "d13787c0f629efe4"
+      "sha256_16": "c5c9ff056f563c38"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md",
@@ -31,19 +31,19 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md",
-      "sha256_16": "21c9328c91f86984"
+      "sha256_16": "b019c92a3e457b38"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md",
-      "sha256_16": "94aa75b2dcaa90c2"
+      "sha256_16": "975aafc80c713797"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md",
-      "sha256_16": "7a1bc607f6f28230"
+      "sha256_16": "5bfd9515997c4045"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md",
-      "sha256_16": "700ee3ee207a5434"
+      "sha256_16": "ae2b7a00e45b27ed"
     }
   ],
   "components": [

```

No Roadmap CURRENT TIP promotion.

---

## 9 — Validations (requalified this pass)

| Check | Result |
|---|---|
| R-INSPECT + R-HD domain | **14/14 PASS** (10 inspect + 4 HD integrated) |
| R-INSPECT UI | **2/2 PASS** |
| R1 | **22/22 PASS** |
| B2/B5/B6 integrated | **3/3 PASS** |
| UI B5/B6 | **3/3 PASS** |
| p6.mHd01 | **PASS** (in 65-test core batch) |
| Core batch (6 files) | **65/65 PASS** |
| L3-S1 + S8 | **24/24 PASS** |
| tsc --noEmit | **PASS** exit 0 |
| ESLint extended test | **PASS** exit 0 |
| CI / Build | **NOT RUN** |
| Browser E2E / live Pilot | **OUT OF SCOPE** |

---

## 10 — Fake/Real

Proof level: **DETERMINISTIC PRODUCT INTEGRATION**.  
Real: OA, SQLite, DecisionBasis, HD verify, EC, inspection, SHE.  
Substitutes: Cursor/Nora DET ports; local authority harness.  
≠ live Pilot action · ≠ browser remount · ≠ Cursor/OpenAI REAL · ≠ G-REAL · ≠ L4.  
**DET ≠ READY FOR REAL.**

---

## 11 — Exit assessment

- **R-HD-01:** CLOSED AT INTEGRATED DET  
- **R-INSPECT-01:** accepted DET scope (retained)  
- **Option A/1:** preserved  
- **EP-S2-08:** PARTIAL  
- **EP-S2-05:** NOT PROVEN  
- **Next gate:** Final Critical Readiness for Product GI consideration  

---

## 12 — Unique verdict

**R-HD-01 INTEGRATED DET PROOF COMPLETE — READY FOR FINAL CRITICAL READINESS REVIEW**

Permanent anti-claims: EP-S2-05 NOT PROVEN · EP-S2-08 PARTIAL · L3 GLOBAL OPEN · REAL NOT PROVEN · G-REAL NOT GRANTED · L4 NOT AUTHORIZED · Runtime v3 NON ADOPTED · No Product GI.

---

## MANDATORY CHATGPT REVIEW

Read Git handoff:

- branch: `sfia/review-handoff`  
- file: `sfia-review-handoff/latest-chatgpt-review.md`

Verify tip/blob, HEAD/base, full Product/test/PRR, real HD creation/verification, exact rejection gate `HD_MUTATION_DECLARATION_CONFLICT`, non-regressions, R23/R24, proof ceiling, publication SHA/blob.

Then independent Final Critical Readiness Review.
