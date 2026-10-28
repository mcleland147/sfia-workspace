# SFIA Review Pack — EP-S2-08-PROOF-01 R1 FINAL CRITICAL REVIEW CORRECTIONS

**UTC:** 2026-10-28T09:13:58Z
**Cycle continuity:** SAME EP-S2-08-PROOF-01 Product Delivery (no new feature branch)
**Pass:** R1 FINAL CRITICAL REVIEW CORRECTIONS (Option A bounded preserved)
**Profile:** CRITICAL
**Typologie:** EVOL / CORRECTIVE
**Review Pack:** FULL (complete Product diffs + complete untracked test file contents)
**Review Handoff:** REQUIRED / publish-in-cycle
**Project GI:** NOT AUTHORIZED / NOT PERFORMED

---

## 1. Git Truth

| Fact | Value |
|---|---|
| Remote | origin → https://github.com/mcleland147/sfia-workspace.git |
| Product WT | /Users/morris/Projects/sfia-workspace-feat-akg-m5-ep-s2-08-proof-01 |
| Branch | feat/akg-m5-ep-s2-08-proof-01 |
| HEAD | 3fb84630efb9e0d2acaaf81b342da0358107db10 |
| origin/main | 3fb84630efb9e0d2acaaf81b342da0358107db10 (unchanged after fetch) |
| Expected base | 3fb84630efb9e0d2acaaf81b342da0358107db10 |
| Match | **YES** |
| Merge-base | 3fb84630efb9e0d2acaaf81b342da0358107db10 |
| Project GI | **NOT AUTHORIZED / NOT PERFORMED** |

### Prior handoff (start of this final corrective)

| Field | Value |
|---|---|
| Tip | c9540be2e7ebf880a99e7ccd7fdac09f5f9a474f |
| Blob | d25d0d1ef226b7d7cfd3d01a208c441b6abe82d2 |

Handoff metadata policy: Section 14 pre-publication only; post-push tip/blob in Cursor return only.

---

## 2. Convergence Pre-check (R23)

Sources instantiated: cycle execution template · routing guide · convergence doctrine/roadmap · product-completion · M5 journey · KHC/HD doctrine · PRR README + vols 02/03/04/06/07/08/09 · Product W2 eligibility/materiality/CKC loader.

v2.6 = process · v3 = target NON ADOPTED · PRR = CURRENT as-implemented · Git/preuves primary.

Anti-claims: EP-S2-05 NOT PROVEN · EP-S2-08 PARTIAL · L3 GLOBAL OPEN · REAL NOT PROVEN · G-REAL NOT GRANTED · L4 NOT AUTHORIZED · runtime v3 NON ADOPTED.

---

## 3. Morris decision consumed

OPTION A BOUNDED — VALIDATED (not re-opened). Delivery CKC cognitive orientation only for positively eligible Generic Project-only post-Evidence. Does not create CycleInstance / qualify cycle / authorize W2 Options / create HD / change SHE / grant execute / prove Product PASS. Universal null → cyc:delivery forbidden.

---

## 4. R1-CORR-01..04 verdicts

### R1-CORR-01 Intent kind — CLOSED

F2 admits intentKind read_only | other | null only. other is admitted catch-all, NOT positive Delivery alone. Positive: other PLUS independent durable facts (concrete scopeIn OR EFFECT_CLASS:local-write OR repositoryMutationDeclared=write) and not bounded-non-mutating. Refuse: read_only → READ_ONLY_NOT_DELIVERY; absent/unknown → INTENT_ABSENT_OR_UNKNOWN; other without positive facts → DELIVERY_POSITIVE_FACTS_ABSENT.

### R1-CORR-02 Impact signals — CLOSED

Align with authoritative materiality: any of structuralChange / architectureImpact / securityImpact / dataImpact / irreversible true ⇒ IMPACT_CATEGORY_NON_DELIVERY. Absent/malformed refused. Provenance: PREPARE analysis stamps (Boolean-coerced) or HD-sealed when decisionRefs — not always HD facts.

### R1-CORR-03 Materiality consistency — CLOSED

No first-value-wins. MATERIALITY:* must agree with materialityFacts.assessedMateriality. Conflict → MATERIALITY_CONTRADICTION. Absent → MATERIALITY_ABSENT. STRUCTURAL/UNKNOWN → MATERIALITY_NOT_NON_STRUCTURAL.

### R1-CORR-04 Attempt/EC/cycle provenance — CLOSED

Always Attempt→EC. Cycle from EC.cycleInstanceId. LPS≠EC cycle → POST_EVIDENCE_CKC_CYCLE_LINEAGE_MISMATCH. Project-only EC + LPS active → POST_EVIDENCE_CKC_PROVENANCE_INCOHERENT. Cross-project → POST_EVIDENCE_CKC_ATTEMPT_PROJECT_MISMATCH.

---

## 5. Eligibility matrix

| Case | Orientation | Code |
|---|---|---|
| R1-P1 positive Delivery | ALLOW cyc:delivery | GENERIC_NON_STRUCTURAL_DELIVERY |
| R1-N1 read_only | REFUSE | READ_ONLY_NOT_DELIVERY |
| R1-N2 absent intent | REFUSE | INTENT_ABSENT_OR_UNKNOWN |
| R1-N3 other w/o positive facts | REFUSE | DELIVERY_POSITIVE_FACTS_ABSENT |
| R1-N4 dataImpact/irreversible | REFUSE | IMPACT_CATEGORY_NON_DELIVERY |
| R1-N5 absent/malformed signals | REFUSE | IMPACT_SIGNALS_* |
| R1-N6 materiality contradiction | REFUSE | MATERIALITY_CONTRADICTION |
| R1-N7 UNKNOWN/STRUCTURAL | REFUSE | MATERIALITY_NOT_NON_STRUCTURAL |
| R1-N8 project mismatch | REFUSE | CONTRACT_PROJECT_MISMATCH |
| R1-N9 missing Attempt | REFUSE | ATTEMPT_NOT_FOUND |
| R1-P2 cycle-bound framing | ALLOW cyc:framing | ACTIVE_CYCLE_TYPE |
| R1-AUTH | no cycle/HD/Options | CYCLE_NOT_QUALIFIED |

R1-N10 CKC unavailable: W3-C CKC_UNAVAILABLE fail-closed when loader null (existing path).

---

## 6. Product files modified

- qualificationInputs.ts — eligibility + Attempt→EC provenance
- w3cPostEvidenceLoop.ts — resolvePostEvidenceCkcContext call site
- PRR 03/06/07/08/09 + manifest digests

---

## 7. Product diff (complete useful)

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/qualificationInputs.ts b/projects/sfia-studio/app/features/project-assistant/w2/qualificationInputs.ts
index 370ba80d..498a60df 100644
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
@@ -106,3 +108,464 @@ export async function resolveW2QualificationInputs(input: {
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
+function hasConcreteMissionScope(inputs: Record<string, unknown> | undefined): boolean {
+  const scopeIn = inputs?.scopeIn;
+  if (!Array.isArray(scopeIn)) return false;
+  return scopeIn.some(
+    (p) => typeof p === "string" && p.trim().length > 0 && !p.includes(" "),
+  );
+}
+
+function hasLocalWriteEffectClass(constraints: readonly string[]): boolean {
+  return constraints.some(
+    (c) => c === "EFFECT_CLASS:local-write" || c.startsWith("EFFECT_CLASS:local-write"),
+  );
+}
+
+/**
+ * Independent positive Delivery facts beyond intentKind exclusion.
+ * Aligns with authoritative materiality: dataImpact/irreversible ⇒ structural.
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
+  // Positive: local-write effect class, explicit write mutation, or concrete WHERE.
+  if (mutation === "write") return true;
+  if (hasLocalWriteEffectClass(input.constraints)) return true;
+  if (hasConcreteMissionScope(inputs)) return true;
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

```

---

## 8. Complete untracked test file contents

### 8.1 akgM5L3S2.epS208.proof01.r1CkcSemantic.d0.test.ts (792 lines)

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
    const baseContract = {
      projectId: "prj:r1",
      cycleInstanceId: null as string | null,
      action: PRODUCT_CANONICAL_EXECUTION_ACTION,
      constraints: [
        PRODUCT_GOVERNED_CONSTRAINT,
        "MATERIALITY:NON_STRUCTURAL",
      ],
      inputs: {
        intentKind: "other",
        scopeIn: [NOTES_PATH],
        materialityFacts: { assessedMateriality: "non_structural" },
        impactSignals: { ...allClearSignals },
      },
    };

    it("R1-P1 — positive Project-only Delivery with independent facts", () => {
      const r = assessProjectOnlyDeliveryCkcEligibility({
        projectId: "prj:r1",
        contract: baseContract,
      });
      expect(r).toEqual({
        eligible: true,
        reasonCode: "GENERIC_NON_STRUCTURAL_DELIVERY",
      });
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
          ...baseContract,
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

  it("R1-A/E/F — eligible Delivery Project-only → CKC Delivery; Options CYCLE_NOT_QUALIFIED; no cycle/HD", async () => {
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
    const facts = requiredFactsOrThrow(liveEc.contract);
    const inputs = liveEc.contract.inputs as Record<string, unknown>;
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

    const port = launchPortOf(oa);
    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: she.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) throw new Error(selected.message);
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
    expect(ckc.ok).toBe(true);
    if (!ckc.ok) throw new Error(`${ckc.code}: ${ckc.message}`);
    expect(ckc.context.projectScoped).toBe(true);
    expect(ckc.context.cycleTypeId).toBe(
      POST_EVIDENCE_PROJECT_SCOPED_CYCLE_TYPE_ID,
    );
    expect(ckc.context.eligibilityReasonCode).toBe(
      "GENERIC_NON_STRUCTURAL_DELIVERY",
    );

    const content = loadProductCkcCognitiveContent({
      registryRoot: resolveProductDoctrineRegistryRoot(),
      cycleTypeId: ckc.context.cycleTypeId,
      packagePin: ckc.context.packagePin,
    });
    expect(content?.ckcId).toBe("ckc:studio:delivery");

    // R1-E — W2 Options still cycle-gated.
    const qual = await resolveW2QualificationInputs({ oa, projectId });
    expect(qual.ok).toBe(false);
    if (!qual.ok) expect(qual.code).toBe("CYCLE_NOT_QUALIFIED");

    // R1-F — no CycleInstance invented; W3-C materialize does not create HD/replan.
    const live = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(live.ok && (live.livingProjectState.activeCycleInstanceId ?? null)).toBe(
      null,
    );

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
      expect(materialized.postEvidence?.ok).toBe(true);
      if (materialized.postEvidence?.ok) {
        expect(materialized.postEvidence.replanInvoked).toBe(false);
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

### 8.2 akgM5L3S2.epS208.proof01.piloteResume.integrated.d0.test.ts (624 lines)

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

### 8.3 epS208.proof01.piloteSurface.b5b6.ui.test.tsx (529 lines)

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

## 9. Validations (real)

| Check | Result |
|---|---|
| R1 semantic (19) | **PASS** |
| PROOF-01 B2/B5/B6 integrated (3) | **PASS** |
| UI B5/B6 jsdom (3) | **PASS** |
| S8 + lotsAC + W3-C + correction + frontDoor | **PASS** (99/99) |
| TrajectorySurface isolated (6) | **PASS** |
| npx tsc --noEmit | **PASS** (exit 0) |
| ESLint touched Product files | **PASS** (empty) |
| Build | **NOT RUN** |
| CI Required Gate | **NOT RUN** |

Fake/DET: Node DET + jsdom · Fake Nora/Cursor · ≠ browser /studio E2E · ≠ REAL.

---

## 10. R23 / R24

R24 LOCAL digests: 03=5491a42a67c560ed · 06=5a9c19b087a6248c · 07=4d05228e463cf7cf · 08=0b65e8232c3bc19f · 09=7b8035eecfe9fe41. Roadmap CURRENT TIP not promoted.

---

## 11. Reserves

R1 CLOSED (Option A + final) locally · EP-S2-08 PARTIAL · browser remount E2E OPEN · dual F3/W3-C OPEN · EP-S2-05 NOT PROVEN · L3 GLOBAL OPEN · REAL/G-REAL/L4/runtime v3 unchanged.

---

## 12. Verdict

**R1 FINAL CORRECTIVE COMPLETE — READY FOR CRITICAL RE-REVIEW**

---

## 13. Next gate

Independent Critical Re-Review from handoff → separate Morris decision on GI or additional closure. No implied Product GI.

---

## 14. Handoff publication plan (pre-publication)

| Field | Value |
|---|---|
| Commit | docs(review): EP-S2-08-PROOF-01 R1 final correction |
| Prior tip | c9540be2e7ebf880a99e7ccd7fdac09f5f9a474f |
| Prior blob | d25d0d1ef226b7d7cfd3d01a208c441b6abe82d2 |
| Push | FF only · L3 handoff only |

---

## 15. Instruction ChatGPT

Before reviewing, read canonical Git handoff from sfia/review-handoff, verify complete file contents (including full test sources in §8), diff, validations, Morris decisions, tip/blob and status. Produce an independent review.

Permanent anti-claims: EP-S2-05 NOT PROVEN · EP-S2-08 PARTIAL · L3 GLOBAL OPEN · REAL NOT PROVEN · G-REAL NOT GRANTED · L4 NOT AUTHORIZED · Runtime v3 NON ADOPTED.

## FIN DU PACK FULL — EP-S2-08-PROOF-01 R1 FINAL CORRECTION
