# Review Pack — MW1-S03-CORR-01 BOUNDED MATERIALIZATION CORRECTION
# FULL / CRITICAL / CONTENT-COMPLETE

Status: **FULL** · **CRITICAL** · **CONTENT-COMPLETE**

Candidate layers (explicit):
- **A. S01 reviewed candidate** — Honest Memory B (preserved)
- **B. S02 reviewed candidate** — Compaction + CORR-01/02 (preserved)
- **C. Pre-correction S03** @ handoff `80c410bdc104b8d45e2dbcdcd13745a8ff716d35`
- **D. CORR-S03-01 delta** — Class2 transition validation + Class3 HD bind/authority + RuntimeOaStack composition
- **E. Aggregate MW1 local candidate** — S01+S02+S03+CORR uncommitted on Delivery

## 1. Timestamp Europe/Paris
2026-09-01 00:31:54 CEST

## 2. Repository
mcleland147/sfia-workspace

## 3. Cycle 8 / INC / CRITICAL
- Cycle: **8 — Delivery / implémentation**
- Typology: **INC**
- Profile: **CRITICAL**
- Sous-cycle: **MW1-S03-CORR-01**
- CKC: Cycle 8 synthetic map · candidate · authority **NONE**

## 4. Morris correction GO consumed
GO MORRIS — MW1-S03 BOUNDED CORRECTION ONLY — CLOSE CLASS2 BASIS VALIDATION + CLASS3 HD TARGET/AUTHORITY BINDING + PRODUCT RUNTIME COMPOSITION PROOF — PRESERVE S01/S02 — NO FINAL MW1 PROOF — NO REAL — NO PROJECT GIT INTEGRATION.

Consumed from "go correction" in the explicit context of Critical Review MW1-S03.

## 5. origin/main SHA/tree
- SHA: `0f265149dc7e088ac62ff99c6f998274bec6c94f`
- tree: `92fce49d245ffb4cbfc43b2b55e1004648b6a900`

## 6. Local branch/HEAD/tree
- branch: `delivery/sfia-studio-nora-mw1-s01-honest-memory-b`
- HEAD: `0f265149dc7e088ac62ff99c6f998274bec6c94f`
- tree: `92fce49d245ffb4cbfc43b2b55e1004648b6a900`
- commits ahead: **0**

## 7. Input handoff
`80c410bdc104b8d45e2dbcdcd13745a8ff716d35` (parent `bc9581e75e1b3113961c62ee575f494278ac8ee3`)

## 8. Pre-correction fingerprints
```
PRE_CORR_TRACKED_DIFF_SHA=ef5aef114a7fe03c2bc2e85f211a24c9324fbeaaebe8284e321aa85ebab4589a
PRE_CORR_STAGED_DIFF_SHA=e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
PRE_CORR_UNTRACKED_MANIFEST_SHA=1d5cd4b762d04d3080450263f92898067bcb1810dfb60f09055a22daed4d8915
PRE_CORR_UNTRACKED_CONTENT_SHA=551967896e3bf69bb7352a8c78ada8d6bf0485f1b76c0a277bf52d593afcf9f4
FPDIR=/tmp/mw1-s03-corr01-fp-Epdqkp
```

## 9. Sources read
Process templates + routing + operating model + guardrails + v2.5 + CKC map.
Convergence doctrine/roadmap. Product 01. NORA 02/05/07. V3 30/32/33/35.
Input handoff 80c410bd. Runtime discovery DecisionBasis.executionBasis.scope, LOCAL_PILOTE_ACTOR docs, Evidence freshness/availability.

## 10. Convergence qualification
Capability: governed selective Memory B → Truth C materialization.
Milestone: S03 bounded correction before Critical Re-review.
KEEP existing S03 seam; COMPLETE Class2/Class3/Runtime composition. FREEZE Responses Compaction. No parallel architecture.

## 11. C5 S03 source-lock
Never silent B→C; MaterializationBasis mandatory; Class1–4; HD not universal; DETERMINISTIC E2E.

## 12. C2 Class1–4 exact semantics
CLASS1 Evidence (HD not by principle). CLASS2 non-structural Studio contract/policy (HD not automatic). CLASS3 Pilote HD required. CLASS4 external construction. Morris ≠ Pilote persona.

## 13. Three ChatGPT blockers
1. **BLK-MW1-S03-CLASS2-BASIS-VALIDATION-01** — naked kind labels authorized Class2.
2. **BLK-MW1-S03-CLASS3-HD-SCOPE-AUTHORITY-02** — HD not bound to structural target; morris conflated with Pilote.
3. **BLK-MW1-S03-RUNTIME-COMPOSITION-PROOF-03** — E2E used attachMaterializer / manual SqliteProjectAuditJournal composition.

## 14. Pre-correction materializer
Accepted Class2 on `basis.kind` alone; Class3 accepted morris|delegated without target binding; tests composed materializer outside RuntimeOaStack.

## 15. Discovery Class2 policy/transition assets
Searched policy / materialization policy / state transition / nextStep transition / LPS transition / accepted policy / policy registry.
**Result:** no repo-native accepted materialization policy resolver or durable policy registry.
Therefore `accepted_materialization_policy` → **MATERIALIZATION_POLICY_UNRESOLVED** fail-closed.
Positive Class2 uses typed application-level `RuntimeStateTransition` (`set_next_step`) validated against current LPS — not a new persistence primitive.

## 16. Selected Class2 correction
`MaterializationBasis` for Class2 requires concrete `transition: RuntimeStateTransition` when kind=`valid_runtime_state_transition`.
Checks: projectId, fromLpsVersion==current LPS==expectedLpsVersion, kind allowlist `set_next_step`, targetKind nextStep, nextStep equality, non-structural only.

## 17. Naked-basis fail-closed proof
NEG-C2-01: `{ kind: "valid_runtime_state_transition" }` → MATERIALIZATION_BASIS_INCOMPATIBLE (E2E-RUNTIME-02).

## 18. Policy unresolved behavior
NEG-C2-02: `accepted_materialization_policy` → MATERIALIZATION_POLICY_UNRESOLVED.

## 19. Valid runtime transition proof
POS-C2-01: concrete `set_next_step` → nextStep accepted via LPS; no automatic HD; audit basisReferenceId=`set_next_step@lps:{v}:{step}`.

## 20. Class3 authority correction
Product Class3 accepts only `authority === "delegated"` + `actor.role === "decision_maker"`.
Rejects: `morris` → HUMAN_DECISION_AUTHORITY_INVALID; `system_non_structuring` → same.

## 21. Pilote≠Morris proof
E2E-RUNTIME-03 records accepted authority=morris HD with matching scope → still rejected for Product Class3.
Doctrine: Morris = construction/governance; Pilote = runtime decision_maker.

## 22. Class3 HD target binding mechanism
Canonical approved scope = `decisionBasis.executionBasis.scope` (preferred) else durable `hd.scope`.
Exact string equality with `target.scope`. No subject/label/Nora matching.

## 23. Unrelated HD negative proof
Same-project accepted delegated HD with different executionBasis.scope → HUMAN_DECISION_TARGET_MISMATCH; LPS unchanged.

## 24. Valid matching HD positive proof
Delegated decision_maker HD with executionBasis.scope === requested scope → accepted; decisionIds linked; durable remount.

## 25. RuntimeOaStack pre-state
Exposed project/decision/evidence/… but **no** materializationServices; E2E used attachMaterializer + manual SqliteProjectAuditJournal.

## 26. RuntimeOaStack post-state
`materializationServices: { materializeFromMemoryB }` composed in `wireOaStack` after Decision+Evidence.

## 27. Materializer composition
Product SQLite → `SqliteProjectAuditJournal(productSqlite)` injected into materialization service only (same store / oa_audit_events). In-memory → projectServices.audit.

## 28. Durable audit composition
Accepted/rejected events written through composed journal; E2E reads via SqliteProjectAuditJournal listAll for inspection only (does not compose the capability under test).

## 29. Proof no parallel path
Decisive E2E uses `runtime.oa.materializationServices.materializeFromMemoryB` exclusively. Composition self-check asserts identity. No createMaterializeFromMemoryB / attachMaterializer in decisive path.

## 30. S03 correction-only changed files
- `projects/sfia-studio/app/lib/oa/project/application/materializeFromMemoryB.ts`
- `projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts`
- `projects/sfia-studio/app/lib/oa/project/index.ts` (type exports)
- `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw1.s03.materialization.e2e.test.ts`

## 31. FULL useful CORR-S03-01 diff / content

### 31.A materializeFromMemoryB.ts — unified diff vs pre-correction
```diff
--- /tmp/mw1-s03-corr01-fp-Epdqkp/snapshot/materializeFromMemoryB.ts	2026-09-01 00:25:38
+++ projects/sfia-studio/app/lib/oa/project/application/materializeFromMemoryB.ts	2026-09-01 00:27:32
@@ -1,8 +1,9 @@
 /**
- * MW1-S03 — Governed Memory B → Truth C materialization.
+ * MW1-S03 / CORR-01 — Governed Memory B → Truth C materialization.
  * Never silent. Class 1–4 + explicit MaterializationBasis.
- * Orchestrates existing ProductSqliteSession + OA LPS/Decision/Evidence paths.
- * Memory B ≠ Truth C. Nora ≠ authority.
+ * CORR-01: Class2 mechanically-verifiable transition; Class3 Pilote≠Morris + HD target binding;
+ * RuntimeOaStack composition (see vertical-slice-runtime/service.ts).
+ * Memory B ≠ Truth C. Nora ≠ authority. Morris ≠ Pilote persona.
  */

 import type { ActorReference } from "@/lib/oa/doctrine";
@@ -29,6 +30,16 @@
   | "pilote_human_decision"
   | "construction_governance_external";

+/** Allowlisted non-structural Class 2 transition — validated against current LPS. */
+export type RuntimeStateTransition = {
+  kind: "set_next_step";
+  projectId: string;
+  fromLpsVersion: number;
+  targetKind: "nextStep";
+  /** Exact nextStep value this transition authorizes. */
+  nextStep: string;
+};
+
 export type MemoryBSourceReference =
   | {
       kind: "raw";
@@ -49,15 +60,32 @@
   | { kind: "nextStep"; nextStep: string }
   | { kind: "scope"; scope: string };

-export type MaterializationBasis = {
-  kind: MaterializationBasisKind;
-  /** Evidence ID / HumanDecision ID when applicable. */
-  referenceId?: string;
-};
+export type MaterializationBasis =
+  | {
+      kind: "verified_fact_evidence";
+      referenceId: string;
+    }
+  | {
+      kind: "valid_runtime_state_transition";
+      /** Required concrete transition — naked kind label alone is insufficient. */
+      transition?: RuntimeStateTransition;
+    }
+  | {
+      kind: "accepted_materialization_policy";
+      referenceId?: string;
+    }
+  | {
+      kind: "pilote_human_decision";
+      referenceId: string;
+    }
+  | {
+      kind: "construction_governance_external";
+    };

 export type MaterializationDetailCode =
   | "MATERIALIZATION_BASIS_REQUIRED"
   | "MATERIALIZATION_BASIS_INCOMPATIBLE"
+  | "MATERIALIZATION_POLICY_UNRESOLVED"
   | "MEMORY_B_SOURCE_NOT_FOUND"
   | "MEMORY_B_SOURCE_MISMATCH"
   | "MEMORY_B_SOURCE_STALE"
@@ -65,6 +93,8 @@
   | "EVIDENCE_INVALID"
   | "HUMAN_DECISION_REQUIRED"
   | "HUMAN_DECISION_INVALID"
+  | "HUMAN_DECISION_AUTHORITY_INVALID"
+  | "HUMAN_DECISION_TARGET_MISMATCH"
   | "CROSS_PROJECT_BASIS"
   | "LPS_VERSION_CONFLICT"
   | "CLASS4_EXTERNAL_ONLY"
@@ -105,24 +135,37 @@
       durationMs: number;
     };

+/** Minimal HD shape required for Class 3 binding (existing DecisionServices fields). */
+export type MaterializationHumanDecisionView = {
+  projectId: string;
+  status: string;
+  authority: string;
+  subject: string;
+  scope?: string;
+  actor: { actorId: string; role: string };
+  decisionBasis?: {
+    executionBasis?: { scope?: string };
+  };
+};
+
 export type MaterializeFromMemoryBDeps = {
   getProject: GetProject;
   getCurrentLivingProjectState: GetCurrentLivingProjectState;
   appendLivingProjectStateVersion: AppendLivingProjectStateVersion;
   audit: ProjectAuditJournalPort;
-  /** Existing DecisionServices.getHumanDecision */
   getHumanDecision: {
     execute: (req: {
       decisionId: string;
     }) => Promise<
-      | { ok: true; decision: { projectId: string; status: string; authority: string; subject: string } }
+      | { ok: true; decision: MaterializationHumanDecisionView }
       | { ok: false; error: { detailCode?: string; message?: string } }
     >;
   };
-  /** Existing Evidence repository / reader */
   getEvidenceById: (evidenceId: string) => Promise<{
     evidenceId: string;
     status: string;
+    availability?: string;
+    freshness?: string;
     bindings: { projectId?: string };
   } | null>;
 };
@@ -142,7 +185,7 @@
   };
 }

-function basisCompatible(
+function classTargetCompatible(
   cls: MaterializationClass,
   basis: MaterializationBasis,
   target: MaterializationTarget,
@@ -160,14 +203,92 @@
     );
   }
   if (cls === 3) {
-    return (
-      basis.kind === "pilote_human_decision" && target.kind === "scope"
-    );
+    return basis.kind === "pilote_human_decision" && target.kind === "scope";
   }
   if (cls === 4) {
     return basis.kind === "construction_governance_external";
   }
   return false;
+}
+
+/**
+ * Canonical approved structural scope from durable HD fields.
+ * Prefer decisionBasis.executionBasis.scope; fall back to hd.scope only when
+ * that durable field is the approved structural representation.
+ */
+function approvedStructuralScopeFromHd(
+  hd: MaterializationHumanDecisionView,
+): string | null {
+  const fromBasis = hd.decisionBasis?.executionBasis?.scope?.trim();
+  if (fromBasis) return fromBasis;
+  const fromHdScope = hd.scope?.trim();
+  if (fromHdScope) return fromHdScope;
+  return null;
+}
+
+function validateClass2Transition(input: {
+  projectId: string;
+  lpsVersion: number;
+  expectedLpsVersion: number;
+  basis: Extract<MaterializationBasis, { kind: "valid_runtime_state_transition" }>;
+  target: Extract<MaterializationTarget, { kind: "nextStep" }>;
+}): { ok: true; transition: RuntimeStateTransition } | {
+  ok: false;
+  detailCode: MaterializationDetailCode;
+  message: string;
+} {
+  const t = input.basis.transition;
+  if (!t) {
+    return {
+      ok: false,
+      detailCode: "MATERIALIZATION_BASIS_INCOMPATIBLE",
+      message:
+        "Class 2 valid_runtime_state_transition requires concrete transition data; naked kind label is insufficient",
+    };
+  }
+  if (t.kind !== "set_next_step") {
+    return {
+      ok: false,
+      detailCode: "MATERIALIZATION_BASIS_INCOMPATIBLE",
+      message: "Unsupported Class 2 transition kind",
+    };
+  }
+  if (t.targetKind !== "nextStep") {
+    return {
+      ok: false,
+      detailCode: "MATERIALIZATION_BASIS_INCOMPATIBLE",
+      message: "Class 2 transition targetKind must be nextStep",
+    };
+  }
+  if (t.projectId !== input.projectId) {
+    return {
+      ok: false,
+      detailCode: "CROSS_PROJECT_BASIS",
+      message: "Class 2 transition projectId does not match request project",
+    };
+  }
+  if (t.fromLpsVersion !== input.lpsVersion) {
+    return {
+      ok: false,
+      detailCode: "LPS_VERSION_CONFLICT",
+      message: "Class 2 transition fromLpsVersion does not match current LPS",
+    };
+  }
+  if (input.expectedLpsVersion !== input.lpsVersion) {
+    return {
+      ok: false,
+      detailCode: "LPS_VERSION_CONFLICT",
+      message: "expectedLpsVersion does not match current LPS",
+    };
+  }
+  if (t.nextStep !== input.target.nextStep) {
+    return {
+      ok: false,
+      detailCode: "MATERIALIZATION_BASIS_INCOMPATIBLE",
+      message: "Class 2 transition nextStep does not match requested target",
+    };
+  }
+  return { ok: true, transition: t };
 }

 async function resolveMemoryBSource(input: {
@@ -218,7 +339,6 @@
       };
     }

-    // compacted_provenance
     if (!loaded.compaction) {
       return {
         ok: false,
@@ -340,7 +460,6 @@
       return auditReject(sourceResolved.detailCode, sourceResolved.message);
     }

-    // Class 4 — external construction only, no Product mutation.
     if (request.materializationClass === 4) {
       if (
         !request.basis ||
@@ -366,7 +485,7 @@
     }

     if (
-      !basisCompatible(
+      !classTargetCompatible(
         request.materializationClass,
         request.basis,
         request.target,
@@ -383,7 +502,13 @@
       if (request.target.kind !== "evidenceIds") {
         return auditReject("TARGET_NOT_ALLOWED", "Class 1 target must be evidenceIds");
       }
-      const evidenceId = request.basis.referenceId ?? request.target.evidenceId;
+      if (request.basis.kind !== "verified_fact_evidence") {
+        return auditReject(
+          "MATERIALIZATION_BASIS_INCOMPATIBLE",
+          "Class 1 requires verified_fact_evidence",
+        );
+      }
+      const evidenceId = request.basis.referenceId;
       if (!evidenceId || evidenceId !== request.target.evidenceId) {
         return auditReject(
           "EVIDENCE_INVALID",
@@ -406,6 +531,19 @@
           "Evidence is not verified; Memory B text is not Evidence",
         );
       }
+      // Reserve: verified alone is not enough if availability/freshness say otherwise.
+      if (evidence.availability !== undefined && evidence.availability !== "available") {
+        return auditReject(
+          "EVIDENCE_INVALID",
+          "Evidence is verified but not available",
+        );
+      }
+      if (evidence.freshness === "stale") {
+        return auditReject(
+          "EVIDENCE_INVALID",
+          "Evidence is verified but freshness is stale",
+        );
+      }

       const nextEvidenceIds = Array.from(
         new Set([...(lps.evidenceIds ?? []), evidenceId]),
@@ -459,14 +597,39 @@
       };
     }

-    // Class 2 — non-structural nextStep
+    // Class 2 — non-structural nextStep with mechanically verified transition
     if (request.materializationClass === 2) {
       if (request.target.kind !== "nextStep") {
         return auditReject(
           "TARGET_NOT_ALLOWED",
           "Class 2 may only target non-structural nextStep",
         );
+      }
+      if (request.basis.kind === "accepted_materialization_policy") {
+        // No repo-native accepted materialization policy resolver exists.
+        return auditReject(
+          "MATERIALIZATION_POLICY_UNRESOLVED",
+          "accepted_materialization_policy has no resolvable Product policy asset; fail closed",
+        );
+      }
+      if (request.basis.kind !== "valid_runtime_state_transition") {
+        return auditReject(
+          "MATERIALIZATION_BASIS_INCOMPATIBLE",
+          "Class 2 requires valid_runtime_state_transition or accepted_materialization_policy",
+        );
+      }
+      const transitionCheck = validateClass2Transition({
+        projectId: request.projectId,
+        lpsVersion: lps.version,
+        expectedLpsVersion: request.expectedLpsVersion,
+        basis: request.basis,
+        target: request.target,
+      });
+      if (!transitionCheck.ok) {
+        return auditReject(transitionCheck.detailCode, transitionCheck.message);
       }
+      const transition = transitionCheck.transition;
+
       const appended = await this.deps.appendLivingProjectStateVersion.execute({
         projectId: request.projectId,
         expectedVersion: request.expectedLpsVersion,
@@ -493,6 +656,7 @@
         projectId: request.projectId,
         materializationClass: 2,
         basisKind: request.basis.kind,
+        basisReferenceId: `set_next_step@lps:${transition.fromLpsVersion}:${transition.nextStep}`,
         sourceKind: request.memoryBSource.kind,
         sourceSeq: sourceResolved.seq,
         sourceContentHash: sourceResolved.contentHash,
@@ -515,7 +679,7 @@
       };
     }

-    // Class 3 — structural scope requires existing Pilote HD
+    // Class 3 — structural scope requires existing runtime Pilote HD bound to target
     if (request.materializationClass === 3) {
       if (request.target.kind !== "scope") {
         return auditReject(
@@ -523,7 +687,7 @@
           "Class 3 target must be structural scope",
         );
       }
-      if (!request.basis.referenceId) {
+      if (request.basis.kind !== "pilote_human_decision" || !request.basis.referenceId) {
         return auditReject(
           "HUMAN_DECISION_REQUIRED",
           "Class 3 requires existing Pilote HumanDecision reference",
@@ -544,7 +708,11 @@
           "HumanDecision belongs to a different Project",
         );
       }
-      if (hd.decision.status === "superseded") {
+      if (
+        hd.decision.status === "superseded" ||
+        hd.decision.status === "revoked" ||
+        hd.decision.status === "refused"
+      ) {
         return auditReject(
           "HUMAN_DECISION_INVALID",
           "HumanDecision is not current/accepted",
@@ -556,16 +724,46 @@
           "HumanDecision must be accepted",
         );
       }
-      if (
-        hd.decision.authority !== "morris" &&
-        hd.decision.authority !== "delegated"
-      ) {
+      // Morris construction authority ≠ Pilote runtime HD for Product Class 3.
+      if (hd.decision.authority === "morris") {
         return auditReject(
-          "HUMAN_DECISION_INVALID",
-          "Class 3 requires Pilote HumanDecision authority (morris|delegated)",
+          "HUMAN_DECISION_AUTHORITY_INVALID",
+          "authority=morris is construction/governance — not a Product Class 3 Pilote basis",
         );
       }
+      if (hd.decision.authority === "system_non_structuring") {
+        return auditReject(
+          "HUMAN_DECISION_AUTHORITY_INVALID",
+          "system_non_structuring cannot authorize structural Class 3 mutation",
+        );
+      }
+      if (hd.decision.authority !== "delegated") {
+        return auditReject(
+          "HUMAN_DECISION_AUTHORITY_INVALID",
+          "Class 3 requires runtime-compatible delegated Pilote HumanDecision authority",
+        );
+      }
+      if (hd.decision.actor.role !== "decision_maker") {
+        return auditReject(
+          "HUMAN_DECISION_AUTHORITY_INVALID",
+          "Class 3 requires HumanDecision actor role decision_maker (Pilote runtime)",
+        );
+      }

+      const approvedScope = approvedStructuralScopeFromHd(hd.decision);
+      if (!approvedScope) {
+        return auditReject(
+          "HUMAN_DECISION_TARGET_MISMATCH",
+          "HumanDecision has no durable approved structural scope (decisionBasis.executionBasis.scope / scope)",
+        );
+      }
+      if (approvedScope !== request.target.scope) {
+        return auditReject(
+          "HUMAN_DECISION_TARGET_MISMATCH",
+          "HumanDecision durable approved scope does not match requested structural target",
+        );
+      }
+
       const nextDecisionIds = Array.from(
         new Set([...(lps.decisionIds ?? []), request.basis.referenceId]),
       );

```

### 31.B materializeFromMemoryB.ts — FULL post-CORR file
```typescript
/**
 * MW1-S03 / CORR-01 — Governed Memory B → Truth C materialization.
 * Never silent. Class 1–4 + explicit MaterializationBasis.
 * CORR-01: Class2 mechanically-verifiable transition; Class3 Pilote≠Morris + HD target binding;
 * RuntimeOaStack composition (see vertical-slice-runtime/service.ts).
 * Memory B ≠ Truth C. Nora ≠ authority. Morris ≠ Pilote persona.
 */

import type { ActorReference } from "@/lib/oa/doctrine";
import type { AppendLivingProjectStateVersion } from "./appendLivingProjectStateVersion";
import type { GetCurrentLivingProjectState } from "./getCurrentLivingProjectState";
import type { GetProject } from "./getProject";
import type { ProjectAuditJournalPort } from "../ports/projectAuditJournalPort";
import type { LivingProjectState } from "../domain/types";
import {
  ProductSqliteSession,
  contentHash,
  extractItemText,
  loadSessionRows,
  truthCRevisionsMatch,
  type TruthCRevision,
} from "@/lib/nora-cognitive-runtime";

export type MaterializationClass = 1 | 2 | 3 | 4;

export type MaterializationBasisKind =
  | "verified_fact_evidence"
  | "valid_runtime_state_transition"
  | "accepted_materialization_policy"
  | "pilote_human_decision"
  | "construction_governance_external";

/** Allowlisted non-structural Class 2 transition — validated against current LPS. */
export type RuntimeStateTransition = {
  kind: "set_next_step";
  projectId: string;
  fromLpsVersion: number;
  targetKind: "nextStep";
  /** Exact nextStep value this transition authorizes. */
  nextStep: string;
};

export type MemoryBSourceReference =
  | {
      kind: "raw";
      sessionKey: string;
      seq: number;
      contentHash: string;
    }
  | {
      kind: "compacted_provenance";
      sessionKey: string;
      generation: number;
      sourceSeq: number;
      contentHash: string;
    };

export type MaterializationTarget =
  | { kind: "evidenceIds"; evidenceId: string }
  | { kind: "nextStep"; nextStep: string }
  | { kind: "scope"; scope: string };

export type MaterializationBasis =
  | {
      kind: "verified_fact_evidence";
      referenceId: string;
    }
  | {
      kind: "valid_runtime_state_transition";
      /** Required concrete transition — naked kind label alone is insufficient. */
      transition?: RuntimeStateTransition;
    }
  | {
      kind: "accepted_materialization_policy";
      referenceId?: string;
    }
  | {
      kind: "pilote_human_decision";
      referenceId: string;
    }
  | {
      kind: "construction_governance_external";
    };

export type MaterializationDetailCode =
  | "MATERIALIZATION_BASIS_REQUIRED"
  | "MATERIALIZATION_BASIS_INCOMPATIBLE"
  | "MATERIALIZATION_POLICY_UNRESOLVED"
  | "MEMORY_B_SOURCE_NOT_FOUND"
  | "MEMORY_B_SOURCE_MISMATCH"
  | "MEMORY_B_SOURCE_STALE"
  | "TARGET_NOT_ALLOWED"
  | "EVIDENCE_INVALID"
  | "HUMAN_DECISION_REQUIRED"
  | "HUMAN_DECISION_INVALID"
  | "HUMAN_DECISION_AUTHORITY_INVALID"
  | "HUMAN_DECISION_TARGET_MISMATCH"
  | "CROSS_PROJECT_BASIS"
  | "LPS_VERSION_CONFLICT"
  | "CLASS4_EXTERNAL_ONLY"
  | "PROJECT_NOT_FOUND"
  | "REQUEST_INVALID";

export type MaterializationRequest = {
  projectId: string;
  materializationClass: MaterializationClass;
  basis: MaterializationBasis | null;
  memoryBSource: MemoryBSourceReference;
  target: MaterializationTarget;
  expectedLpsVersion: number;
  correlationId: string;
  actor: ActorReference;
  /** Absolute path to nora-session.sqlite for this Project. */
  sessionDbPath: string;
};

export type MaterializationResult =
  | {
      ok: true;
      status: "accepted";
      materializationClass: MaterializationClass;
      basisKind: MaterializationBasisKind;
      resultingLpsVersion: number;
      targetKind: MaterializationTarget["kind"];
      sourceKind: MemoryBSourceReference["kind"];
      sourceSeq: number;
      sourceContentHash: string;
      durationMs: number;
    }
  | {
      ok: false;
      status: "rejected" | "external_required";
      detailCode: MaterializationDetailCode;
      message: string;
      durationMs: number;
    };

/** Minimal HD shape required for Class 3 binding (existing DecisionServices fields). */
export type MaterializationHumanDecisionView = {
  projectId: string;
  status: string;
  authority: string;
  subject: string;
  scope?: string;
  actor: { actorId: string; role: string };
  decisionBasis?: {
    executionBasis?: { scope?: string };
  };
};

export type MaterializeFromMemoryBDeps = {
  getProject: GetProject;
  getCurrentLivingProjectState: GetCurrentLivingProjectState;
  appendLivingProjectStateVersion: AppendLivingProjectStateVersion;
  audit: ProjectAuditJournalPort;
  getHumanDecision: {
    execute: (req: {
      decisionId: string;
    }) => Promise<
      | { ok: true; decision: MaterializationHumanDecisionView }
      | { ok: false; error: { detailCode?: string; message?: string } }
    >;
  };
  getEvidenceById: (evidenceId: string) => Promise<{
    evidenceId: string;
    status: string;
    availability?: string;
    freshness?: string;
    bindings: { projectId?: string };
  } | null>;
};

function reject(
  started: number,
  detailCode: MaterializationDetailCode,
  message: string,
  status: "rejected" | "external_required" = "rejected",
): MaterializationResult {
  return {
    ok: false,
    status,
    detailCode,
    message,
    durationMs: Date.now() - started,
  };
}

function classTargetCompatible(
  cls: MaterializationClass,
  basis: MaterializationBasis,
  target: MaterializationTarget,
): boolean {
  if (cls === 1) {
    return (
      basis.kind === "verified_fact_evidence" && target.kind === "evidenceIds"
    );
  }
  if (cls === 2) {
    return (
      (basis.kind === "valid_runtime_state_transition" ||
        basis.kind === "accepted_materialization_policy") &&
      target.kind === "nextStep"
    );
  }
  if (cls === 3) {
    return basis.kind === "pilote_human_decision" && target.kind === "scope";
  }
  if (cls === 4) {
    return basis.kind === "construction_governance_external";
  }
  return false;
}

/**
 * Canonical approved structural scope from durable HD fields.
 * Prefer decisionBasis.executionBasis.scope; fall back to hd.scope only when
 * that durable field is the approved structural representation.
 */
function approvedStructuralScopeFromHd(
  hd: MaterializationHumanDecisionView,
): string | null {
  const fromBasis = hd.decisionBasis?.executionBasis?.scope?.trim();
  if (fromBasis) return fromBasis;
  const fromHdScope = hd.scope?.trim();
  if (fromHdScope) return fromHdScope;
  return null;
}

function validateClass2Transition(input: {
  projectId: string;
  lpsVersion: number;
  expectedLpsVersion: number;
  basis: Extract<MaterializationBasis, { kind: "valid_runtime_state_transition" }>;
  target: Extract<MaterializationTarget, { kind: "nextStep" }>;
}): { ok: true; transition: RuntimeStateTransition } | {
  ok: false;
  detailCode: MaterializationDetailCode;
  message: string;
} {
  const t = input.basis.transition;
  if (!t) {
    return {
      ok: false,
      detailCode: "MATERIALIZATION_BASIS_INCOMPATIBLE",
      message:
        "Class 2 valid_runtime_state_transition requires concrete transition data; naked kind label is insufficient",
    };
  }
  if (t.kind !== "set_next_step") {
    return {
      ok: false,
      detailCode: "MATERIALIZATION_BASIS_INCOMPATIBLE",
      message: "Unsupported Class 2 transition kind",
    };
  }
  if (t.targetKind !== "nextStep") {
    return {
      ok: false,
      detailCode: "MATERIALIZATION_BASIS_INCOMPATIBLE",
      message: "Class 2 transition targetKind must be nextStep",
    };
  }
  if (t.projectId !== input.projectId) {
    return {
      ok: false,
      detailCode: "CROSS_PROJECT_BASIS",
      message: "Class 2 transition projectId does not match request project",
    };
  }
  if (t.fromLpsVersion !== input.lpsVersion) {
    return {
      ok: false,
      detailCode: "LPS_VERSION_CONFLICT",
      message: "Class 2 transition fromLpsVersion does not match current LPS",
    };
  }
  if (input.expectedLpsVersion !== input.lpsVersion) {
    return {
      ok: false,
      detailCode: "LPS_VERSION_CONFLICT",
      message: "expectedLpsVersion does not match current LPS",
    };
  }
  if (t.nextStep !== input.target.nextStep) {
    return {
      ok: false,
      detailCode: "MATERIALIZATION_BASIS_INCOMPATIBLE",
      message: "Class 2 transition nextStep does not match requested target",
    };
  }
  return { ok: true, transition: t };
}

async function resolveMemoryBSource(input: {
  projectId: string;
  source: MemoryBSourceReference;
  currentTruthC: TruthCRevision;
  sessionDbPath: string;
}): Promise<
  | {
      ok: true;
      seq: number;
      contentHash: string;
      excerpt: string;
    }
  | { ok: false; detailCode: MaterializationDetailCode; message: string }
> {
  const session = new ProductSqliteSession({
    projectId: input.projectId,
    dbPath: input.sessionDbPath,
    sessionKey: input.source.sessionKey,
  });
  try {
    const loaded = await loadSessionRows(session);
    const source = input.source;
    if (source.kind === "raw") {
      const row = loaded.conversation.find((r) => r.seq === source.seq);
      if (!row) {
        return {
          ok: false,
          detailCode: "MEMORY_B_SOURCE_NOT_FOUND",
          message: "Raw Memory B seq not found in session",
        };
      }
      const text = extractItemText(row.item);
      const hash = contentHash(text);
      if (hash !== source.contentHash) {
        return {
          ok: false,
          detailCode: "MEMORY_B_SOURCE_MISMATCH",
          message: "Raw Memory B contentHash mismatch",
        };
      }
      return {
        ok: true,
        seq: row.seq,
        contentHash: hash,
        excerpt: text.slice(0, 120),
      };
    }

    if (!loaded.compaction) {
      return {
        ok: false,
        detailCode: "MEMORY_B_SOURCE_NOT_FOUND",
        message: "No compaction record in Memory B session",
      };
    }
    if (
      !truthCRevisionsMatch(
        loaded.compaction.truthCRevision,
        input.currentTruthC,
      )
    ) {
      return {
        ok: false,
        detailCode: "MEMORY_B_SOURCE_STALE",
        message:
          "Compacted Memory B provenance is stale under current Truth C revision",
      };
    }
    const entry = loaded.compaction.provenance.find(
      (p) =>
        p.kind === "raw" &&
        (p.sourceSeq ?? p.seq) === source.sourceSeq &&
        p.contentHash === source.contentHash &&
        p.generation === source.generation,
    );
    if (!entry) {
      return {
        ok: false,
        detailCode: "MEMORY_B_SOURCE_NOT_FOUND",
        message: "Compacted provenance entry not found or mismatched",
      };
    }
    return {
      ok: true,
      seq: entry.sourceSeq ?? entry.seq,
      contentHash: entry.contentHash,
      excerpt: entry.excerpt,
    };
  } finally {
    session.close();
  }
}

/**
 * Governed materialization of Memory B content into Truth C.
 * Fail-closed; mutates only via AppendLivingProjectStateVersion.
 */
export class MaterializeFromMemoryB {
  constructor(private readonly deps: MaterializeFromMemoryBDeps) {}

  async execute(request: MaterializationRequest): Promise<MaterializationResult> {
    const started = Date.now();
    const ts = new Date().toISOString();
    const auditReject = (
      detailCode: MaterializationDetailCode,
      message: string,
      status: "rejected" | "external_required" = "rejected",
    ): MaterializationResult => {
      this.deps.audit.append({
        event: "oa.memory.materialization.rejected",
        ts,
        correlationId: request.correlationId,
        projectId: request.projectId,
        materializationClass: request.materializationClass,
        basisKind: request.basis?.kind,
        targetKind: request.target.kind,
        result: status === "external_required" ? "external_required" : "rejected",
        detailCode,
        durationMs: Date.now() - started,
      });
      return reject(started, detailCode, message, status);
    };

    if (
      !request.projectId ||
      !request.correlationId ||
      !request.sessionDbPath ||
      !request.memoryBSource ||
      !request.target ||
      !request.actor
    ) {
      return auditReject("REQUEST_INVALID", "Materialization request incomplete");
    }

    const project = await this.deps.getProject.execute({
      projectId: request.projectId,
    });
    if (!project.ok) {
      return auditReject("PROJECT_NOT_FOUND", "Project not found");
    }

    const current = await this.deps.getCurrentLivingProjectState.execute({
      projectId: request.projectId,
    });
    if (!current.ok) {
      return auditReject("PROJECT_NOT_FOUND", "Current LPS not found");
    }
    const lps: LivingProjectState = current.livingProjectState;
    if (lps.version !== request.expectedLpsVersion) {
      return auditReject(
        "LPS_VERSION_CONFLICT",
        `expectedVersion ${request.expectedLpsVersion} != current ${lps.version}`,
      );
    }

    const truthC: TruthCRevision = {
      lpsId: lps.lpsVersionId,
      lpsVersion: lps.version,
    };
    const sourceResolved = await resolveMemoryBSource({
      projectId: request.projectId,
      source: request.memoryBSource,
      currentTruthC: truthC,
      sessionDbPath: request.sessionDbPath,
    });
    if (!sourceResolved.ok) {
      return auditReject(sourceResolved.detailCode, sourceResolved.message);
    }

    if (request.materializationClass === 4) {
      if (
        !request.basis ||
        request.basis.kind !== "construction_governance_external"
      ) {
        return auditReject(
          "MATERIALIZATION_BASIS_INCOMPATIBLE",
          "Class 4 requires construction_governance_external basis",
        );
      }
      return auditReject(
        "CLASS4_EXTERNAL_ONLY",
        "Class 4 construction/governance is external-only; no Product Truth C mutation",
        "external_required",
      );
    }

    if (!request.basis) {
      return auditReject(
        "MATERIALIZATION_BASIS_REQUIRED",
        "MaterializationBasis is required; Memory B never silently becomes Truth C",
      );
    }

    if (
      !classTargetCompatible(
        request.materializationClass,
        request.basis,
        request.target,
      )
    ) {
      return auditReject(
        "MATERIALIZATION_BASIS_INCOMPATIBLE",
        "Basis/class/target combination not allowed",
      );
    }

    // Class 1 — verified Evidence
    if (request.materializationClass === 1) {
      if (request.target.kind !== "evidenceIds") {
        return auditReject("TARGET_NOT_ALLOWED", "Class 1 target must be evidenceIds");
      }
      if (request.basis.kind !== "verified_fact_evidence") {
        return auditReject(
          "MATERIALIZATION_BASIS_INCOMPATIBLE",
          "Class 1 requires verified_fact_evidence",
        );
      }
      const evidenceId = request.basis.referenceId;
      if (!evidenceId || evidenceId !== request.target.evidenceId) {
        return auditReject(
          "EVIDENCE_INVALID",
          "Class 1 basis referenceId must match target evidenceId",
        );
      }
      const evidence = await this.deps.getEvidenceById(evidenceId);
      if (!evidence) {
        return auditReject("EVIDENCE_INVALID", "Evidence not found");
      }
      if (evidence.bindings.projectId !== request.projectId) {
        return auditReject(
          "CROSS_PROJECT_BASIS",
          "Evidence belongs to a different Project",
        );
      }
      if (evidence.status !== "verified") {
        return auditReject(
          "EVIDENCE_INVALID",
          "Evidence is not verified; Memory B text is not Evidence",
        );
      }
      // Reserve: verified alone is not enough if availability/freshness say otherwise.
      if (evidence.availability !== undefined && evidence.availability !== "available") {
        return auditReject(
          "EVIDENCE_INVALID",
          "Evidence is verified but not available",
        );
      }
      if (evidence.freshness === "stale") {
        return auditReject(
          "EVIDENCE_INVALID",
          "Evidence is verified but freshness is stale",
        );
      }

      const nextEvidenceIds = Array.from(
        new Set([...(lps.evidenceIds ?? []), evidenceId]),
      );
      const appended = await this.deps.appendLivingProjectStateVersion.execute({
        projectId: request.projectId,
        expectedVersion: request.expectedLpsVersion,
        objective: lps.objective,
        context: lps.context,
        scope: lps.scope,
        createdBy: request.actor,
        correlationId: request.correlationId,
        evidenceIds: nextEvidenceIds,
        decisionIds: lps.decisionIds ? [...lps.decisionIds] : undefined,
        nextStep: lps.nextStep,
      });
      if (!appended.ok) {
        const code =
          appended.error.detailCode === "LPS_VERSION_CONFLICT"
            ? "LPS_VERSION_CONFLICT"
            : "REQUEST_INVALID";
        return auditReject(code, appended.error.message ?? "LPS append failed");
      }
      this.deps.audit.append({
        event: "oa.memory.materialization.accepted",
        ts,
        correlationId: request.correlationId,
        projectId: request.projectId,
        materializationClass: 1,
        basisKind: request.basis.kind,
        basisReferenceId: evidenceId,
        sourceKind: request.memoryBSource.kind,
        sourceSeq: sourceResolved.seq,
        sourceContentHash: sourceResolved.contentHash,
        targetKind: "evidenceIds",
        resultingLpsVersion: appended.livingProjectState.version,
        result: "ok",
        durationMs: Date.now() - started,
      });
      return {
        ok: true,
        status: "accepted",
        materializationClass: 1,
        basisKind: request.basis.kind,
        resultingLpsVersion: appended.livingProjectState.version,
        targetKind: "evidenceIds",
        sourceKind: request.memoryBSource.kind,
        sourceSeq: sourceResolved.seq,
        sourceContentHash: sourceResolved.contentHash,
        durationMs: Date.now() - started,
      };
    }

    // Class 2 — non-structural nextStep with mechanically verified transition
    if (request.materializationClass === 2) {
      if (request.target.kind !== "nextStep") {
        return auditReject(
          "TARGET_NOT_ALLOWED",
          "Class 2 may only target non-structural nextStep",
        );
      }
      if (request.basis.kind === "accepted_materialization_policy") {
        // No repo-native accepted materialization policy resolver exists.
        return auditReject(
          "MATERIALIZATION_POLICY_UNRESOLVED",
          "accepted_materialization_policy has no resolvable Product policy asset; fail closed",
        );
      }
      if (request.basis.kind !== "valid_runtime_state_transition") {
        return auditReject(
          "MATERIALIZATION_BASIS_INCOMPATIBLE",
          "Class 2 requires valid_runtime_state_transition or accepted_materialization_policy",
        );
      }
      const transitionCheck = validateClass2Transition({
        projectId: request.projectId,
        lpsVersion: lps.version,
        expectedLpsVersion: request.expectedLpsVersion,
        basis: request.basis,
        target: request.target,
      });
      if (!transitionCheck.ok) {
        return auditReject(transitionCheck.detailCode, transitionCheck.message);
      }
      const transition = transitionCheck.transition;

      const appended = await this.deps.appendLivingProjectStateVersion.execute({
        projectId: request.projectId,
        expectedVersion: request.expectedLpsVersion,
        objective: lps.objective,
        context: lps.context,
        scope: lps.scope,
        createdBy: request.actor,
        correlationId: request.correlationId,
        nextStep: request.target.nextStep,
        evidenceIds: lps.evidenceIds ? [...lps.evidenceIds] : undefined,
        decisionIds: lps.decisionIds ? [...lps.decisionIds] : undefined,
      });
      if (!appended.ok) {
        const code =
          appended.error.detailCode === "LPS_VERSION_CONFLICT"
            ? "LPS_VERSION_CONFLICT"
            : "REQUEST_INVALID";
        return auditReject(code, appended.error.message ?? "LPS append failed");
      }
      this.deps.audit.append({
        event: "oa.memory.materialization.accepted",
        ts,
        correlationId: request.correlationId,
        projectId: request.projectId,
        materializationClass: 2,
        basisKind: request.basis.kind,
        basisReferenceId: `set_next_step@lps:${transition.fromLpsVersion}:${transition.nextStep}`,
        sourceKind: request.memoryBSource.kind,
        sourceSeq: sourceResolved.seq,
        sourceContentHash: sourceResolved.contentHash,
        targetKind: "nextStep",
        resultingLpsVersion: appended.livingProjectState.version,
        result: "ok",
        durationMs: Date.now() - started,
      });
      return {
        ok: true,
        status: "accepted",
        materializationClass: 2,
        basisKind: request.basis.kind,
        resultingLpsVersion: appended.livingProjectState.version,
        targetKind: "nextStep",
        sourceKind: request.memoryBSource.kind,
        sourceSeq: sourceResolved.seq,
        sourceContentHash: sourceResolved.contentHash,
        durationMs: Date.now() - started,
      };
    }

    // Class 3 — structural scope requires existing runtime Pilote HD bound to target
    if (request.materializationClass === 3) {
      if (request.target.kind !== "scope") {
        return auditReject(
          "TARGET_NOT_ALLOWED",
          "Class 3 target must be structural scope",
        );
      }
      if (request.basis.kind !== "pilote_human_decision" || !request.basis.referenceId) {
        return auditReject(
          "HUMAN_DECISION_REQUIRED",
          "Class 3 requires existing Pilote HumanDecision reference",
        );
      }
      const hd = await this.deps.getHumanDecision.execute({
        decisionId: request.basis.referenceId,
      });
      if (!hd.ok) {
        return auditReject(
          "HUMAN_DECISION_INVALID",
          "HumanDecision not found",
        );
      }
      if (hd.decision.projectId !== request.projectId) {
        return auditReject(
          "CROSS_PROJECT_BASIS",
          "HumanDecision belongs to a different Project",
        );
      }
      if (
        hd.decision.status === "superseded" ||
        hd.decision.status === "revoked" ||
        hd.decision.status === "refused"
      ) {
        return auditReject(
          "HUMAN_DECISION_INVALID",
          "HumanDecision is not current/accepted",
        );
      }
      if (hd.decision.status !== "accepted") {
        return auditReject(
          "HUMAN_DECISION_INVALID",
          "HumanDecision must be accepted",
        );
      }
      // Morris construction authority ≠ Pilote runtime HD for Product Class 3.
      if (hd.decision.authority === "morris") {
        return auditReject(
          "HUMAN_DECISION_AUTHORITY_INVALID",
          "authority=morris is construction/governance — not a Product Class 3 Pilote basis",
        );
      }
      if (hd.decision.authority === "system_non_structuring") {
        return auditReject(
          "HUMAN_DECISION_AUTHORITY_INVALID",
          "system_non_structuring cannot authorize structural Class 3 mutation",
        );
      }
      if (hd.decision.authority !== "delegated") {
        return auditReject(
          "HUMAN_DECISION_AUTHORITY_INVALID",
          "Class 3 requires runtime-compatible delegated Pilote HumanDecision authority",
        );
      }
      if (hd.decision.actor.role !== "decision_maker") {
        return auditReject(
          "HUMAN_DECISION_AUTHORITY_INVALID",
          "Class 3 requires HumanDecision actor role decision_maker (Pilote runtime)",
        );
      }

      const approvedScope = approvedStructuralScopeFromHd(hd.decision);
      if (!approvedScope) {
        return auditReject(
          "HUMAN_DECISION_TARGET_MISMATCH",
          "HumanDecision has no durable approved structural scope (decisionBasis.executionBasis.scope / scope)",
        );
      }
      if (approvedScope !== request.target.scope) {
        return auditReject(
          "HUMAN_DECISION_TARGET_MISMATCH",
          "HumanDecision durable approved scope does not match requested structural target",
        );
      }

      const nextDecisionIds = Array.from(
        new Set([...(lps.decisionIds ?? []), request.basis.referenceId]),
      );
      const appended = await this.deps.appendLivingProjectStateVersion.execute({
        projectId: request.projectId,
        expectedVersion: request.expectedLpsVersion,
        objective: lps.objective,
        context: lps.context,
        scope: request.target.scope,
        createdBy: request.actor,
        correlationId: request.correlationId,
        decisionIds: nextDecisionIds,
        evidenceIds: lps.evidenceIds ? [...lps.evidenceIds] : undefined,
        nextStep: lps.nextStep,
      });
      if (!appended.ok) {
        const code =
          appended.error.detailCode === "LPS_VERSION_CONFLICT"
            ? "LPS_VERSION_CONFLICT"
            : "REQUEST_INVALID";
        return auditReject(code, appended.error.message ?? "LPS append failed");
      }
      this.deps.audit.append({
        event: "oa.memory.materialization.accepted",
        ts,
        correlationId: request.correlationId,
        projectId: request.projectId,
        materializationClass: 3,
        basisKind: request.basis.kind,
        basisReferenceId: request.basis.referenceId,
        sourceKind: request.memoryBSource.kind,
        sourceSeq: sourceResolved.seq,
        sourceContentHash: sourceResolved.contentHash,
        targetKind: "scope",
        resultingLpsVersion: appended.livingProjectState.version,
        result: "ok",
        durationMs: Date.now() - started,
      });
      return {
        ok: true,
        status: "accepted",
        materializationClass: 3,
        basisKind: request.basis.kind,
        resultingLpsVersion: appended.livingProjectState.version,
        targetKind: "scope",
        sourceKind: request.memoryBSource.kind,
        sourceSeq: sourceResolved.seq,
        sourceContentHash: sourceResolved.contentHash,
        durationMs: Date.now() - started,
      };
    }

    return auditReject("REQUEST_INVALID", "Unsupported materialization class");
  }
}

/** Factory from RuntimeOaStack-compatible deps. */
export function createMaterializeFromMemoryB(deps: {
  projectServices: {
    getProject: GetProject;
    getCurrentLivingProjectState: GetCurrentLivingProjectState;
    appendLivingProjectStateVersion: AppendLivingProjectStateVersion;
    audit: ProjectAuditJournalPort;
  };
  getHumanDecision: MaterializeFromMemoryBDeps["getHumanDecision"];
  getEvidenceById: MaterializeFromMemoryBDeps["getEvidenceById"];
}): MaterializeFromMemoryB {
  return new MaterializeFromMemoryB({
    getProject: deps.projectServices.getProject,
    getCurrentLivingProjectState:
      deps.projectServices.getCurrentLivingProjectState,
    appendLivingProjectStateVersion:
      deps.projectServices.appendLivingProjectStateVersion,
    audit: deps.projectServices.audit,
    getHumanDecision: deps.getHumanDecision,
    getEvidenceById: deps.getEvidenceById,
  });
}

```

### 31.C vertical-slice-runtime/service.ts — unified diff
```diff
--- /tmp/mw1-s03-corr01-fp-Epdqkp/snapshot/service.ts	2026-09-01 00:25:38
+++ projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts	2026-09-01 00:27:51
@@ -52,6 +52,11 @@
   type SqliteEvidenceReviewServices,
 } from "@/lib/oa/evidence-review";
 import type { ProjectServices } from "@/lib/oa/project";
+import {
+  createMaterializeFromMemoryB,
+  MaterializeFromMemoryB,
+  SqliteProjectAuditJournal,
+} from "@/lib/oa/project";
 import { SqliteProductStore } from "@/lib/oa/project/infrastructure/sqlite/sqliteProductStore";
 import {
   createAttemptReaderBridge,
@@ -118,6 +123,10 @@
   readonly realBoundaryComposition?: ComposeStudioProductRealBoundaryInput;
 }

+export type MaterializationServices = {
+  readonly materializeFromMemoryB: MaterializeFromMemoryB;
+};
+
 export type RuntimeOaStack = {
   readonly projectServices: ProjectServices;
   readonly clock: ClockPort;
@@ -128,6 +137,11 @@
   readonly executionContractServices: ExecutionContractServices;
   readonly executionAttemptServices: ExecutionAttemptServices;
   readonly evidenceReviewServices: EvidenceReviewServices | SqliteEvidenceReviewServices;
+  /**
+   * MW1-S03 — Studio-owned governed Memory B → Truth C materialization.
+   * Composed after Decision + Evidence services. Not a Nora write tool.
+   */
+  readonly materializationServices: MaterializationServices;
   /** Explicit TestExecutionAdapter — never silent NoOp. */
   readonly fixtureAdapter: TestExecutionAdapter;
   /**
@@ -274,6 +288,41 @@
           executionAttemptServices.attempts,
         ),
       });
+
+  // MW1-S03 / CORR-01 — compose materialization on normal RuntimeOaStack path.
+  // Product SQLite: durable materialization audit via SqliteProjectAuditJournal
+  // on the same Product store / oa_audit_events (no new table). LPS create/append
+  // may still use MemoryProjectAuditJournal from local composition.
+  const materializationAudit =
+    productSqlite !== null
+      ? new SqliteProjectAuditJournal(productSqlite)
+      : projectServices.audit;
+
+  const materializationServices: MaterializationServices = Object.freeze({
+    materializeFromMemoryB: createMaterializeFromMemoryB({
+      projectServices: {
+        getProject: projectServices.getProject,
+        getCurrentLivingProjectState:
+          projectServices.getCurrentLivingProjectState,
+        appendLivingProjectStateVersion:
+          projectServices.appendLivingProjectStateVersion,
+        audit: materializationAudit,
+      },
+      getHumanDecision: decisionServices.getHumanDecision,
+      getEvidenceById: async (evidenceId) => {
+        const ev =
+          await evidenceReviewServices.repository.findById(evidenceId);
+        if (!ev) return null;
+        return {
+          evidenceId: ev.evidenceId,
+          status: ev.status,
+          availability: ev.availability,
+          freshness: ev.freshness,
+          bindings: { projectId: ev.bindings.projectId },
+        };
+      },
+    }),
+  });

   return Object.freeze({
     projectServices,
@@ -285,6 +334,7 @@
     executionContractServices,
     executionAttemptServices,
     evidenceReviewServices,
+    materializationServices,
     fixtureAdapter,
     productDurablePath: productSqlite !== null,
   });

```

### 31.D vertical-slice-runtime/service.ts — FULL post-CORR file
```typescript
import "./serverGuard";
import {
  BoundedSqliteLocalProjectCreationAudit,
  LOCAL_VERTICAL_SLICE_ARCHITECTURE,
  MemoryLocalProjectCreationAudit,
  NoOpLocalProjectCreationAudit,
  createLocalVerticalSliceServices,
  resolveDoctrinePackagePinForRegistry,
  type LocalProjectFacade,
  type LocalProjectIdSource,
  type LocalVerticalSliceCompositionOptions,
  type LocalVerticalSliceServices,
} from "@/lib/vertical-slice-core";
import type { BoundedAtomicAuditStore } from "@/lib/d1/boundedAtomicAudit";
import type { DoctrinePackagePin, ClockPort } from "@/lib/oa/doctrine";
import {
  createCkcQualificationServices,
  createInMemoryCycleServices,
  createSqliteCycleServices,
  type CkcQualificationServices,
  type CycleServices,
} from "@/lib/oa/cycle";
import {
  MemoryAuthorityResolver,
  createInMemoryDecisionServices,
  createSqliteDecisionServices,
  isM3LocalAuthorityEnabled,
  type DecisionServices,
} from "@/lib/oa/decision";
import {
  createInMemoryExecutionContractServices,
  createSqliteExecutionContractServices,
  type ExecutionContractServices,
} from "@/lib/oa/execution-contract";
import {
  createInMemoryExecutionAttemptServices,
  createSqliteExecutionAttemptServices,
  createM4BoundedReadOnlyCursorAgentDescriptor,
  isStudioCursorRealEnabled,
  type ExecutionAttemptServices,
  type RealBoundaryWiring,
  type TestExecutionAdapter,
} from "@/lib/oa/execution-attempt";
import {
  composeStudioProductRealBoundary,
  type ComposeStudioProductRealBoundaryInput,
} from "./composeStudioProductRealBoundary";
import {
  createInMemoryEvidenceReviewServices,
  createSqliteEvidenceReviewServices,
  type EvidenceReviewServices,
  type SqliteEvidenceReviewServices,
} from "@/lib/oa/evidence-review";
import type { ProjectServices } from "@/lib/oa/project";
import {
  createMaterializeFromMemoryB,
  MaterializeFromMemoryB,
  SqliteProjectAuditJournal,
} from "@/lib/oa/project";
import { SqliteProductStore } from "@/lib/oa/project/infrastructure/sqlite/sqliteProductStore";
import {
  createAttemptReaderBridge,
  createF3FixtureAgentDescriptor,
  createF3TestExecutionAdapter,
} from "./f3FixtureWiring";
import { createW3ABoundedFixtureAgentDescriptor } from "./w3aProductFixtureWiring";
import { MemoryAgentRegistry } from "@/lib/oa/execution-attempt";
import {
  toCreateLocalProjectCommand,
  toCreateProjectRuntimeFailure,
  toCreateProjectRuntimeSuccess,
  toGetProjectRuntimeFailure,
  toGetProjectRuntimeSuccess,
  toListProjectsRuntimeFailure,
  toListProjectsRuntimeSuccess,
} from "./mapping";
import { resolveDefaultVerticalSliceRoots } from "./paths";
import { registerW3bFixtureAdapterForE2eReset } from "./w3bE2eBoundaryControl";
import type {
  CreateProjectRuntimeInput,
  CreateProjectRuntimeResult,
  GetProjectRuntimeResult,
  ListProjectsRuntimeResult,
} from "./types";

export type RuntimeAuditMode = "noop" | "memory" | "sqlite";

export interface RuntimeApplicationServiceOptions {
  readonly registryRoot?: string;
  readonly schemasRoot?: string;
  readonly doctrinePackagePin?: DoctrinePackagePin;
  readonly idSource?: LocalProjectIdSource;
  readonly nowIso?: string;
  /**
   * D-V2-03: default noop. `sqlite` requires `sqliteAuditStore`.
   * Audit never rehydrates business state.
   */
  readonly auditMode?: RuntimeAuditMode;
  readonly sqliteAuditStore?: BoundedAtomicAuditStore;
  /**
   * OA Product SQLite path (M1). Isolated from D1/OPS1/FinOps.
   */
  readonly productDbPath?: string;
  /**
   * Escape hatch for tests: inject a fully built V1 facade.
   * Production path builds via createLocalVerticalSliceServices.
   */
  readonly facade?: LocalProjectFacade;
  /**
   * Optional M4 REAL boundary. Explicit inject wins (tests).
   * Otherwise composed OFF-by-default from SFIA_STUDIO_CURSOR_REAL.
   */
  readonly realBoundary?: RealBoundaryWiring;
  /**
   * Env snapshot for live-boundary composition only. Never used to spawn.
   * Tests inject `{ SFIA_STUDIO_CURSOR_REAL: "1" }` with fake deps.
   */
  readonly realBoundaryEnv?: NodeJS.ProcessEnv;
  /**
   * Test/production overrides for composeStudioProductRealBoundary.
   * Construction still launches nothing.
   */
  readonly realBoundaryComposition?: ComposeStudioProductRealBoundaryInput;
}

export type MaterializationServices = {
  readonly materializeFromMemoryB: MaterializeFromMemoryB;
};

export type RuntimeOaStack = {
  readonly projectServices: ProjectServices;
  readonly clock: ClockPort;
  readonly cycleServices: CycleServices;
  readonly ckcQualification: CkcQualificationServices;
  readonly decisionServices: DecisionServices;
  readonly authorityResolver: MemoryAuthorityResolver;
  readonly executionContractServices: ExecutionContractServices;
  readonly executionAttemptServices: ExecutionAttemptServices;
  readonly evidenceReviewServices: EvidenceReviewServices | SqliteEvidenceReviewServices;
  /**
   * MW1-S03 — Studio-owned governed Memory B → Truth C materialization.
   * Composed after Decision + Evidence services. Not a Nora write tool.
   */
  readonly materializationServices: MaterializationServices;
  /** Explicit TestExecutionAdapter — never silent NoOp. */
  readonly fixtureAdapter: TestExecutionAdapter;
  /**
   * True when OA Attempt/Evidence/ReviewBundle/LPS path uses Product SQLite.
   * Distinguishes persistence durability from fixture execution mode.
   */
  readonly productDurablePath: boolean;
};

function resolveAudit(
  mode: RuntimeAuditMode,
  sqliteAuditStore: BoundedAtomicAuditStore | undefined,
): LocalVerticalSliceCompositionOptions["audit"] {
  if (mode === "memory") {
    return new MemoryLocalProjectCreationAudit();
  }
  if (mode === "sqlite") {
    if (!sqliteAuditStore) {
      throw new Error(
        "sqlite audit mode requires sqliteAuditStore (bounded D1 audit table).",
      );
    }
    return new BoundedSqliteLocalProjectCreationAudit(sqliteAuditStore);
  }
  return new NoOpLocalProjectCreationAudit();
}

function wireOaStack(
  projectServices: ProjectServices,
  clock: ClockPort,
  options?: {
    realBoundary?: RealBoundaryWiring;
    registryRoot?: string;
    doctrinePackagePin?: DoctrinePackagePin;
  },
): RuntimeOaStack {
  // M2/M3: same Product SQLite store for Project/LPS + Cycle + Decision + Contract.
  const productSqlite =
    projectServices.store instanceof SqliteProductStore
      ? projectServices.store
      : null;
  const cycleServices = productSqlite
    ? createSqliteCycleServices({
        projectServices,
        productStore: productSqlite,
        clock,
      })
    : createInMemoryCycleServices({ projectServices, clock });
  const ckcQualification = createCkcQualificationServices({
    clock,
    registryRoot: options?.registryRoot,
    doctrinePackagePin: options?.doctrinePackagePin,
  });
  const authorityResolver = new MemoryAuthorityResolver();
  // M3 authority is fail-closed unless env enabled; registration happens per-scope in F2/F3.
  void isM3LocalAuthorityEnabled;

  const decisionServices = productSqlite
    ? createSqliteDecisionServices({
        projectServices,
        cycleServices,
        productStore: productSqlite,
        clock,
        authorityResolver,
      })
    : createInMemoryDecisionServices({
        projectServices,
        cycleServices,
        clock,
        authorityResolver,
      });

  const executionContractServices = productSqlite
    ? createSqliteExecutionContractServices({
        projectServices,
        decisionServices,
        cycleServices,
        productStore: productSqlite,
        clock,
        authorityResolver,
      })
    : createInMemoryExecutionContractServices({
        projectServices,
        decisionServices,
        cycleServices,
        clock,
        authorityResolver,
      });

  // EXPLICIT TestExecutionAdapter — never omit (factory default is NoOp).
  // GAP-3: realBoundary is optional and OFF by default. M4 descriptor is
  // registered only on the governed path (injected boundary or REAL flag).
  // This composition does not instantiate StudioCursorRealLaunchGateway.
  const fixtureAdapter = createF3TestExecutionAdapter();
  registerW3bFixtureAdapterForE2eReset(fixtureAdapter);
  const fixtureAgent = createF3FixtureAgentDescriptor(clock.nowIso());
  const w3aBoundedAgent = createW3ABoundedFixtureAgentDescriptor(clock.nowIso());
  const realBoundary = options?.realBoundary;
  const registerM4 =
    realBoundary !== undefined || isStudioCursorRealEnabled();
  // Bounded W3-A fixture: explicit supported actions/caps ONLY (no universal synthesis).
  const agents = registerM4
    ? [
        fixtureAgent,
        w3aBoundedAgent,
        createM4BoundedReadOnlyCursorAgentDescriptor(clock.nowIso()),
      ]
    : [fixtureAgent, w3aBoundedAgent];
  const registry = new MemoryAgentRegistry(agents);
  const executionAttemptServices = productSqlite
    ? createSqliteExecutionAttemptServices({
        decisionServices,
        executionContractServices,
        productStore: productSqlite,
        registry,
        adapter: fixtureAdapter,
        clock,
        authorityResolver,
        policy: { defaultMaxRetriesBudget: 0 },
        realBoundary,
      })
    : createInMemoryExecutionAttemptServices({
        decisionServices,
        executionContractServices,
        registry,
        adapter: fixtureAdapter,
        clock,
        authorityResolver,
        policy: { defaultMaxRetriesBudget: 0 },
        realBoundary,
      });

  const evidenceReviewServices = productSqlite
    ? createSqliteEvidenceReviewServices({
        productStore: productSqlite,
        clock,
        attemptReader: createAttemptReaderBridge(
          executionAttemptServices.attempts,
        ),
      })
    : createInMemoryEvidenceReviewServices({
        clock,
        attemptReader: createAttemptReaderBridge(
          executionAttemptServices.attempts,
        ),
      });

  // MW1-S03 / CORR-01 — compose materialization on normal RuntimeOaStack path.
  // Product SQLite: durable materialization audit via SqliteProjectAuditJournal
  // on the same Product store / oa_audit_events (no new table). LPS create/append
  // may still use MemoryProjectAuditJournal from local composition.
  const materializationAudit =
    productSqlite !== null
      ? new SqliteProjectAuditJournal(productSqlite)
      : projectServices.audit;

  const materializationServices: MaterializationServices = Object.freeze({
    materializeFromMemoryB: createMaterializeFromMemoryB({
      projectServices: {
        getProject: projectServices.getProject,
        getCurrentLivingProjectState:
          projectServices.getCurrentLivingProjectState,
        appendLivingProjectStateVersion:
          projectServices.appendLivingProjectStateVersion,
        audit: materializationAudit,
      },
      getHumanDecision: decisionServices.getHumanDecision,
      getEvidenceById: async (evidenceId) => {
        const ev =
          await evidenceReviewServices.repository.findById(evidenceId);
        if (!ev) return null;
        return {
          evidenceId: ev.evidenceId,
          status: ev.status,
          availability: ev.availability,
          freshness: ev.freshness,
          bindings: { projectId: ev.bindings.projectId },
        };
      },
    }),
  });

  return Object.freeze({
    projectServices,
    clock,
    cycleServices,
    ckcQualification,
    decisionServices,
    authorityResolver,
    executionContractServices,
    executionAttemptServices,
    evidenceReviewServices,
    materializationServices,
    fixtureAdapter,
    productDurablePath: productSqlite !== null,
  });
}

/**
 * Application runtime service over V1 LocalProjectFacade.
 * Does not duplicate T-A0/T-A1 rules; maps serializable DTOs only.
 * Exposes shared OA stack for F2 + F3 (same ProjectServices instance).
 */
export class RuntimeApplicationService {
  private readonly facade: LocalProjectFacade;
  readonly architecture: LocalVerticalSliceServices["architecture"];
  readonly oa: RuntimeOaStack | null;
  private readonly disposeProduct?: () => void;

  constructor(
    facade: LocalProjectFacade,
    architecture: LocalVerticalSliceServices["architecture"],
    oa: RuntimeOaStack | null = null,
    disposeProduct?: () => void,
  ) {
    this.facade = facade;
    this.architecture = architecture;
    this.oa = oa;
    this.disposeProduct = disposeProduct;
  }

  /** Release durable Product SQLite handles (tests / shutdown). */
  dispose(): void {
    try {
      this.disposeProduct?.();
    } catch {
      /* ignore */
    }
  }

  /** Use case: Create Project via V1 facade. */
  async createProject(
    input: CreateProjectRuntimeInput,
  ): Promise<CreateProjectRuntimeResult> {
    const result = await this.facade.createProject(
      toCreateLocalProjectCommand(input),
    );
    if (!result.ok) {
      return toCreateProjectRuntimeFailure(result.error, result.auditStatus);
    }
    return toCreateProjectRuntimeSuccess(
      result.project,
      result.reusedFromIdempotencyKey,
      result.auditStatus,
    );
  }

  /** Use case: Get Project Overview via V1 facade. */
  async getProject(projectId: string): Promise<GetProjectRuntimeResult> {
    const result = await this.facade.getProjectOverview(projectId);
    if (!result.ok) {
      return toGetProjectRuntimeFailure(result.error);
    }
    return toGetProjectRuntimeSuccess(result.project);
  }

  /**
   * Thin product list via OA ProjectServices over existing oa_projects.
   * Requires OA stack (Product SQLite / in-memory); facade-only runtimes fail closed.
   */
  async listProjects(): Promise<ListProjectsRuntimeResult> {
    if (!this.oa) {
      return toListProjectsRuntimeFailure({
        code: "STATE_CONFLICT",
        detailCode: "PERSISTENCE_FAILURE",
        message: "Project list is unavailable in this runtime composition.",
        severity: "error",
        retryable: false,
        blocking: true,
        recoverable: false,
        domain: "C",
        timestamp: new Date().toISOString(),
        internalCauseRef: "oa_stack_missing",
      });
    }
    const result = await this.oa.projectServices.listProjects.execute();
    if (!result.ok) {
      return toListProjectsRuntimeFailure(result.error);
    }
    return toListProjectsRuntimeSuccess(result.projects);
  }
}

export function createRuntimeApplicationService(
  options: RuntimeApplicationServiceOptions = {},
): RuntimeApplicationService {
  if (options.facade) {
    return new RuntimeApplicationService(
      options.facade,
      LOCAL_VERTICAL_SLICE_ARCHITECTURE,
      null,
    );
  }

  const roots = resolveDefaultVerticalSliceRoots();
  const registryRoot = options.registryRoot ?? roots.registryRoot;
  const doctrinePackagePin = resolveDoctrinePackagePinForRegistry(
    registryRoot,
    options.doctrinePackagePin,
  );
  const services = createLocalVerticalSliceServices({
    registryRoot,
    schemasRoot: options.schemasRoot ?? roots.schemasRoot,
    doctrinePackagePin,
    idSource: options.idSource,
    nowIso: options.nowIso,
    audit: resolveAudit(options.auditMode ?? "noop", options.sqliteAuditStore),
    productDbPath: options.productDbPath,
  });

  const composedBoundary =
    options.realBoundary ??
    composeStudioProductRealBoundary({
      ...(options.realBoundaryComposition ?? {}),
      env: options.realBoundaryEnv ?? options.realBoundaryComposition?.env,
    });
  const oa = wireOaStack(services.projectServices, services.clock, {
    realBoundary: composedBoundary,
    registryRoot,
    doctrinePackagePin,
  });
  return new RuntimeApplicationService(
    services.facade,
    services.architecture,
    oa,
    services.projectServices.dispose,
  );
}

```

### 31.E project/index.ts — FULL (export surface)
```typescript
/**
 * T-A1 Project / LPS Foundation — public barrel.
 *
 * Isolated Option A v3-native module. Consumes T-A0 doctrine ports only.
 * Does not replace d1 / OPS1 / MethodMode.
 * Studio composition uses SQLite Product Store (G0-B / M1); Memory remains for tests.
 */

export * from "./domain/types";
export * from "./domain/errors";
export * from "./domain/invariants";

export * from "./ports/projectRepositoryPort";
export * from "./ports/livingProjectStateRepositoryPort";
export * from "./ports/projectAuditJournalPort";
export * from "./ports/projectPersistenceUnitOfWorkPort";

export { CreateProject } from "./application/createProject";
export { GetProject } from "./application/getProject";
export { ListProjects } from "./application/listProjects";
export { GetCurrentLivingProjectState } from "./application/getCurrentLivingProjectState";
export { GetLivingProjectStateVersion } from "./application/getLivingProjectStateVersion";
export { AppendLivingProjectStateVersion } from "./application/appendLivingProjectStateVersion";
export {
  MaterializeFromMemoryB,
  createMaterializeFromMemoryB,
} from "./application/materializeFromMemoryB";
export type {
  MaterializationBasis,
  MaterializationBasisKind,
  MaterializationClass,
  MaterializationDetailCode,
  MaterializationRequest,
  MaterializationResult,
  MaterializationTarget,
  MemoryBSourceReference,
  MaterializeFromMemoryBDeps,
  MaterializationHumanDecisionView,
  RuntimeStateTransition,
} from "./application/materializeFromMemoryB";

export { MemoryProjectStore } from "./infrastructure/memoryProjectStore";
export { MemoryProjectRepository } from "./infrastructure/memoryProjectRepository";
export { MemoryLivingProjectStateRepository } from "./infrastructure/memoryLivingProjectStateRepository";
export {
  ConsoleProjectAuditJournal,
  MemoryProjectAuditJournal,
} from "./infrastructure/observability";

export { resolveProductSqlitePath } from "./infrastructure/sqlite/paths";
export {
  openProductSqlite,
  PRODUCT_SCHEMA_VERSION,
  PRODUCT_SCHEMA_VERSION_M1,
  PRODUCT_SCHEMA_VERSION_M2,
  PRODUCT_SCHEMA_VERSION_M3,
  PRODUCT_SCHEMA_VERSION_M5,
  PRODUCT_SCHEMA_VERSION_M6,
} from "./infrastructure/sqlite/db";
export type { ProductSqliteHandle } from "./infrastructure/sqlite/productSqliteHandle";
export { SqliteProductStore } from "./infrastructure/sqlite/sqliteProductStore";
export { SqliteProjectRepository } from "./infrastructure/sqlite/sqliteProjectRepository";
export { SqliteLivingProjectStateRepository } from "./infrastructure/sqlite/sqliteLivingProjectStateRepository";
export { SqliteProjectAuditJournal } from "./infrastructure/sqlite/sqliteProjectAuditJournal";
export {
  createSqliteProductProjectServices,
  createTestSqliteProductProjectServices,
  type CreateSqliteProductProjectServicesOptions,
  type SqliteProductProjectServices,
} from "./infrastructure/sqlite/createSqliteProductProjectServices";

import type {
  ClockPort,
  DoctrinePackageResolverPort,
} from "@/lib/oa/doctrine";
import { FixedClock, SystemClock } from "@/lib/oa/doctrine";
import { AppendLivingProjectStateVersion } from "./application/appendLivingProjectStateVersion";
import { CreateProject } from "./application/createProject";
import { GetCurrentLivingProjectState } from "./application/getCurrentLivingProjectState";
import { GetLivingProjectStateVersion } from "./application/getLivingProjectStateVersion";
import { GetProject } from "./application/getProject";
import { ListProjects } from "./application/listProjects";
import { MemoryLivingProjectStateRepository } from "./infrastructure/memoryLivingProjectStateRepository";
import { MemoryProjectRepository } from "./infrastructure/memoryProjectRepository";
import { MemoryProjectStore } from "./infrastructure/memoryProjectStore";
import {
  ConsoleProjectAuditJournal,
  MemoryProjectAuditJournal,
} from "./infrastructure/observability";
import type { LivingProjectStateRepositoryPort } from "./ports/livingProjectStateRepositoryPort";
import type { ProjectAuditJournalPort } from "./ports/projectAuditJournalPort";
import type { ProjectPersistenceUnitOfWorkPort } from "./ports/projectPersistenceUnitOfWorkPort";
import type { ProjectRepositoryPort } from "./ports/projectRepositoryPort";

export type ProjectServices = {
  store: ProjectPersistenceUnitOfWorkPort;
  projects: ProjectRepositoryPort;
  lps: LivingProjectStateRepositoryPort;
  audit: ProjectAuditJournalPort;
  createProject: CreateProject;
  getProject: GetProject;
  listProjects: ListProjects;
  getCurrentLivingProjectState: GetCurrentLivingProjectState;
  getLivingProjectStateVersion: GetLivingProjectStateVersion;
  appendLivingProjectStateVersion: AppendLivingProjectStateVersion;
  /** Optional dispose for durable backends (SQLite). */
  dispose?: () => void;
};

export type CreateInMemoryProjectServicesOptions = {
  doctrineResolver: DoctrinePackageResolverPort;
  clock?: ClockPort;
  audit?: ProjectAuditJournalPort;
};

/** Factory for in-memory Project/LPS services (unit tests / non-Studio callers). */
export function createInMemoryProjectServices(
  options: CreateInMemoryProjectServicesOptions,
): ProjectServices & { store: MemoryProjectStore } {
  const store = new MemoryProjectStore();
  const projects = new MemoryProjectRepository(store);
  const lps = new MemoryLivingProjectStateRepository(store);
  const clock = options.clock ?? new SystemClock();
  const audit = options.audit ?? new ConsoleProjectAuditJournal();

  return {
    store,
    projects,
    lps,
    audit,
    createProject: new CreateProject(
      projects,
      lps,
      options.doctrineResolver,
      clock,
      audit,
      store,
    ),
    getProject: new GetProject(projects, clock, audit),
    listProjects: new ListProjects(projects, clock, audit),
    getCurrentLivingProjectState: new GetCurrentLivingProjectState(
      projects,
      lps,
      clock,
      audit,
    ),
    getLivingProjectStateVersion: new GetLivingProjectStateVersion(
      projects,
      lps,
      clock,
      audit,
    ),
    appendLivingProjectStateVersion: new AppendLivingProjectStateVersion(
      projects,
      lps,
      clock,
      audit,
      store,
    ),
  };
}

export function createTestProjectServices(
  options: CreateInMemoryProjectServicesOptions & {
    audit?: MemoryProjectAuditJournal;
    fixedNowIso?: string;
  },
): ProjectServices & {
  store: MemoryProjectStore;
  audit: MemoryProjectAuditJournal;
} {
  const audit = options.audit ?? new MemoryProjectAuditJournal();
  const clock =
    options.clock ??
    (options.fixedNowIso
      ? new FixedClock(options.fixedNowIso)
      : new FixedClock("2026-07-24T05:00:00.000Z"));
  return createInMemoryProjectServices({
    ...options,
    clock,
    audit,
  }) as ProjectServices & {
    store: MemoryProjectStore;
    audit: MemoryProjectAuditJournal;
  };
}

```

### 31.F mw1.s03.materialization.e2e.test.ts — FULL post-CORR file
```typescript
/** @vitest-environment node */
/**
 * MW1-S03-CORR-01 — Deterministic E2E via RuntimeOaStack-composed materializer.
 *
 * Decisive path:
 * getRuntimeApplicationService → wireOaStack → oa.materializationServices
 * → ProductSqliteSession / Decision / Evidence / LPS / oa_audit_events
 *
 * Forbidden decisive setup: createMaterializeFromMemoryB / attachMaterializer /
 * new SqliteProjectAuditJournal solely to compose a stronger path.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import type { Digest } from "@/lib/oa/doctrine";
import {
  SqliteProductStore,
  SqliteProjectAuditJournal,
  type MaterializationRequest,
  type RuntimeStateTransition,
} from "@/lib/oa/project";
import {
  ProductSqliteSession,
  applyCompactionIfNeeded,
  contentHash,
  extractItemText,
  loadSessionRows,
  userTextItem,
  assistantTextItem,
} from "@/lib/nora-cognitive-runtime";
import { FakeEvidencePayloadAdapter } from "@/lib/oa/evidence-review/infrastructure/fakeEvidencePayloadAdapter";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
  type RuntimeApplicationService,
} from "@/lib/vertical-slice-runtime";

const DIGEST_A =
  "sha256:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" as Digest;

const ACTOR = {
  actorId: "actor:studio-system",
  role: "system" as const,
  authorityLevel: "none" as const,
};

const PILOTE = {
  actorId: "actor:pilote",
  role: "decision_maker" as const,
  displayName: "Pilote",
  authorityLevel: "N2" as const,
};

const tempDirs: string[] = [];

function tempDir(prefix: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), prefix));
  tempDirs.push(dir);
  return dir;
}

afterEach(() => {
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  resetRuntimeApplicationServiceForTests();
  while (tempDirs.length) {
    const d = tempDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

function structuralScopeTarget(currentScope: string, marker: string): string {
  const parsed = JSON.parse(currentScope) as {
    schemaVersion: string;
    shortReference?: string;
    perceivedCriticality: string;
    constraints: string[];
  };
  return JSON.stringify({
    ...parsed,
    constraints: [...parsed.constraints, `STRUCTURAL:${marker}`],
  });
}

function listMaterializationAudit(runtime: RuntimeApplicationService) {
  const store = runtime.oa!.projectServices.store;
  if (!(store instanceof SqliteProductStore)) {
    throw new Error("expected SqliteProductStore");
  }
  // Read-only inspection of durable oa_audit_events — does not compose capability.
  return new SqliteProjectAuditJournal(store)
    .listAll()
    .filter(
      (e) =>
        e.event === "oa.memory.materialization.accepted" ||
        e.event === "oa.memory.materialization.rejected",
    );
}

async function bootProduct(dir: string) {
  const productDbPath = path.join(dir, "oa-product.sqlite");
  const sessionDbPath = path.join(dir, "nora-session.sqlite");
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
  resetRuntimeApplicationServiceForTests();
  const runtime = getRuntimeApplicationService({
    productDbPath,
    auditMode: "noop",
  });
  expect(runtime.oa).not.toBeNull();
  if (!runtime.oa) throw new Error("oa missing");
  expect(runtime.oa.materializationServices.materializeFromMemoryB).toBeTruthy();

  const created = await runtime.createProject({
    name: "S03 CORR Materialization E2E",
    objective: "MW1-S03-CORR-01 runtime composition",
    context: "Deterministic materialization proofs",
    criticality: "STANDARD",
    constraints: ["AUCUNE EXÉCUTION"],
    shortReference: "S03CORR",
    idempotencyKey: `s03-corr-e2e-${Date.now()}-${Math.random()}`,
  });
  expect(created.ok).toBe(true);
  if (!created.ok) throw new Error("createProject failed");

  const projectId = created.project.projectId;
  const currentLps =
    await runtime.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
  expect(currentLps.ok).toBe(true);
  if (!currentLps.ok) throw new Error("current LPS missing");

  return {
    runtime,
    oa: runtime.oa,
    /** Decisive materializer — MUST come from runtime.oa */
    materializer: runtime.oa.materializationServices.materializeFromMemoryB,
    productDbPath,
    sessionDbPath,
    projectId,
    lpsId: currentLps.livingProjectState.lpsVersionId,
    lpsVersion: currentLps.livingProjectState.version,
    scope: currentLps.livingProjectState.scope ?? "",
  };
}

async function seedRawMemoryB(input: {
  projectId: string;
  sessionDbPath: string;
  text: string;
  sessionKey?: string;
}) {
  const sessionKey = input.sessionKey ?? "f1-default";
  const session = new ProductSqliteSession({
    projectId: input.projectId,
    dbPath: input.sessionDbPath,
    sessionKey,
  });
  await session.addItems([userTextItem(input.text)]);
  const loaded = await loadSessionRows(session);
  const row = loaded.conversation[loaded.conversation.length - 1]!;
  const hash = contentHash(extractItemText(row.item));
  session.close();
  return { sessionKey, seq: row.seq, contentHash: hash };
}

function class2Transition(
  ctx: Awaited<ReturnType<typeof bootProduct>>,
  nextStep: string,
  overrides?: Partial<RuntimeStateTransition>,
): RuntimeStateTransition {
  return {
    kind: "set_next_step",
    projectId: ctx.projectId,
    fromLpsVersion: ctx.lpsVersion,
    targetKind: "nextStep",
    nextStep,
    ...overrides,
  };
}

function baseRequest(
  ctx: Awaited<ReturnType<typeof bootProduct>>,
  source: { sessionKey: string; seq: number; contentHash: string },
  overrides: Partial<MaterializationRequest> &
    Pick<
      MaterializationRequest,
      "materializationClass" | "basis" | "target"
    >,
): MaterializationRequest {
  return {
    projectId: ctx.projectId,
    memoryBSource: {
      kind: "raw",
      sessionKey: source.sessionKey,
      seq: source.seq,
      contentHash: source.contentHash,
    },
    expectedLpsVersion: ctx.lpsVersion,
    correlationId: `cor:s03-corr-${Date.now()}`,
    actor: ACTOR,
    sessionDbPath: ctx.sessionDbPath,
    ...overrides,
  };
}

async function registerAndVerifyEvidence(
  oa: NonNullable<Awaited<ReturnType<typeof bootProduct>>["oa"]>,
  projectId: string,
  evidenceId: string,
) {
  const reg = await oa.evidenceReviewServices.registerEvidence.execute({
    evidenceId,
    idempotencyKey: `idem:${evidenceId}`,
    actor: ACTOR,
    type: "artifact",
    source: "s03-corr-fixture",
    sourceKind: "external",
    bindings: { projectId },
    classification: "internal",
    storageMode: "internal_payload_ref",
    location: `refs/evidence/${evidenceId}`,
    digest: DIGEST_A,
    verifiablePayload: true,
  });
  expect(reg.ok).toBe(true);
  if (!reg.ok) throw new Error("registerEvidence failed");
  const payload = oa.evidenceReviewServices.payload as FakeEvidencePayloadAdapter;
  payload.setScript(evidenceId, {
    availability: "available",
    digest: DIGEST_A,
  });
  const verified = await oa.evidenceReviewServices.verifyEvidenceIntegrity.execute({
    evidenceId,
    actor: ACTOR,
    expectedVersion: 1,
  });
  expect(verified.ok).toBe(true);
  if (!verified.ok) throw new Error("verify failed");
  return verified.evidence;
}

async function recordPiloteDecision(input: {
  oa: NonNullable<Awaited<ReturnType<typeof bootProduct>>["oa"]>;
  projectId: string;
  decisionId: string;
  subject: string;
  approvedScope: string;
  authority?: "delegated" | "morris" | "system_non_structuring";
  actor?: typeof PILOTE | { actorId: string; role: string; authorityLevel: string };
  nonStructuring?: boolean;
}) {
  const authority = input.authority ?? "delegated";
  const actor = input.actor ?? PILOTE;
  if (authority === "delegated" || authority === "morris") {
    input.oa.authorityResolver.register({
      evidenceId: `evd:auth-${input.decisionId}`,
      actorId: actor.actorId,
      level: authority === "morris" ? "N3" : "N2",
      scope: input.subject,
      issuedAt: "2026-08-31T00:00:00.000Z",
      source: "registry",
      ...(authority === "morris" ? { canActAsMorris: true as const } : {}),
    });
  }
  const recorded = await input.oa.decisionServices.recordHumanDecision.execute({
    decisionId: input.decisionId,
    projectId: input.projectId,
    subject: input.subject,
    options: [
      { optionId: "opt:accept", label: "Accept scope change" },
      { optionId: "opt:refuse", label: "Refuse" },
    ],
    selectedOptionId: "opt:accept",
    actor: actor as typeof PILOTE,
    authority,
    reversible: true,
    authorityEvidenceId:
      authority === "system_non_structuring"
        ? undefined
        : `evd:auth-${input.decisionId}`,
    scope: input.subject,
    nonStructuring: input.nonStructuring,
    decisionBasis: {
      sourceType: "proposal",
      sourceRef: `prop:${input.decisionId}`,
      sourceDigest: "a".repeat(64),
      projectId: input.projectId,
      proposalContext: {
        lpsId: "lps:corr",
        lpsVersion: 1,
      },
      executionBasis: {
        scope: input.approvedScope,
        requestedOperation: "structural-scope-update",
      },
    },
  });
  expect(recorded.ok).toBe(true);
  if (!recorded.ok) throw new Error(`recordHumanDecision failed: ${JSON.stringify(recorded)}`);
  return recorded.decision;
}

describe("MW1-S03-CORR-01 — Runtime-composed never-silent materialization", () => {
  beforeEach(() => {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
  });

  it("E2E-RUNTIME-00 — no basis fails closed via runtime.oa materializer", async () => {
    const ctx = await bootProduct(tempDir("sfia-s03-corr-e00-"));
    const source = await seedRawMemoryB({
      projectId: ctx.projectId,
      sessionDbPath: ctx.sessionDbPath,
      text: "Silent promote next step",
    });
    const before = await ctx.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: ctx.projectId,
    });
    expect(before.ok).toBe(true);
    if (!before.ok) return;

    const result = await ctx.materializer.execute(
      baseRequest(ctx, source, {
        materializationClass: 2,
        basis: null,
        target: { kind: "nextStep", nextStep: "hijack" },
      }),
    );
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.detailCode).toBe("MATERIALIZATION_BASIS_REQUIRED");

    const after = await ctx.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: ctx.projectId,
    });
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingProjectState.version).toBe(before.livingProjectState.version);
    const rejected = listMaterializationAudit(ctx.runtime).filter(
      (e) => e.event === "oa.memory.materialization.rejected",
    );
    expect(rejected.length).toBeGreaterThanOrEqual(1);
  });

  it("E2E-RUNTIME-01 — Class1 verified Evidence via runtime composition", async () => {
    const ctx = await bootProduct(tempDir("sfia-s03-corr-e01-"));
    const evidenceId = `ev:s03-corr-c1-${Date.now()}`;
    await registerAndVerifyEvidence(ctx.oa, ctx.projectId, evidenceId);
    const source = await seedRawMemoryB({
      projectId: ctx.projectId,
      sessionDbPath: ctx.sessionDbPath,
      text: `CI passed for ${evidenceId}`,
    });

    const accepted = await ctx.materializer.execute(
      baseRequest(ctx, source, {
        materializationClass: 1,
        basis: { kind: "verified_fact_evidence", referenceId: evidenceId },
        target: { kind: "evidenceIds", evidenceId },
      }),
    );
    expect(accepted.ok).toBe(true);
    if (!accepted.ok) return;

    resetRuntimeApplicationServiceForTests();
    const remounted = getRuntimeApplicationService({
      productDbPath: ctx.productDbPath,
      auditMode: "noop",
    });
    const remLps =
      await remounted.oa!.projectServices.getCurrentLivingProjectState.execute({
        projectId: ctx.projectId,
      });
    expect(remLps.ok).toBe(true);
    if (!remLps.ok) return;
    expect(remLps.livingProjectState.evidenceIds).toContain(evidenceId);
    expect(
      listMaterializationAudit(remounted).some(
        (e) => e.event === "oa.memory.materialization.accepted",
      ),
    ).toBe(true);
  });

  it("E2E-RUNTIME-02 — Class2 concrete transition accepted; naked label rejected", async () => {
    const ctx = await bootProduct(tempDir("sfia-s03-corr-e02-"));
    const source = await seedRawMemoryB({
      projectId: ctx.projectId,
      sessionDbPath: ctx.sessionDbPath,
      text: "Next: draft weekly status",
    });

    // NEG-C2-01 naked label
    const naked = await ctx.materializer.execute(
      baseRequest(ctx, source, {
        materializationClass: 2,
        basis: { kind: "valid_runtime_state_transition" },
        target: { kind: "nextStep", nextStep: "draft-weekly-status" },
      }),
    );
    expect(naked.ok).toBe(false);
    if (!naked.ok) {
      expect(naked.detailCode).toBe("MATERIALIZATION_BASIS_INCOMPATIBLE");
    }

    // NEG-C2-02 unresolved policy
    const policy = await ctx.materializer.execute(
      baseRequest(ctx, source, {
        materializationClass: 2,
        basis: { kind: "accepted_materialization_policy" },
        target: { kind: "nextStep", nextStep: "draft-weekly-status" },
      }),
    );
    expect(policy.ok).toBe(false);
    if (!policy.ok) {
      expect(policy.detailCode).toBe("MATERIALIZATION_POLICY_UNRESOLVED");
    }

    // POS-C2-01 concrete transition
    const ok = await ctx.materializer.execute(
      baseRequest(ctx, source, {
        materializationClass: 2,
        basis: {
          kind: "valid_runtime_state_transition",
          transition: class2Transition(ctx, "draft-weekly-status"),
        },
        target: { kind: "nextStep", nextStep: "draft-weekly-status" },
      }),
    );
    expect(ok.ok).toBe(true);
    if (!ok.ok) return;
    const after = await ctx.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: ctx.projectId,
    });
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingProjectState.nextStep).toBe("draft-weekly-status");
    expect(after.livingProjectState.decisionIds ?? []).toHaveLength(0);

    // NEG Class2 structural
    const structural = await ctx.materializer.execute({
      ...baseRequest(ctx, source, {
        materializationClass: 2,
        basis: {
          kind: "valid_runtime_state_transition",
          transition: class2Transition(ctx, "x", {
            fromLpsVersion: after.livingProjectState.version,
          }),
        },
        target: { kind: "scope", scope: "hijack" },
      }),
      expectedLpsVersion: after.livingProjectState.version,
    });
    expect(structural.ok).toBe(false);
    if (!structural.ok) {
      expect(structural.detailCode).toBe("MATERIALIZATION_BASIS_INCOMPATIBLE");
    }

    // NEG-C2-03 wrong project
    const wrongProj = await ctx.materializer.execute({
      ...baseRequest(ctx, source, {
        materializationClass: 2,
        basis: {
          kind: "valid_runtime_state_transition",
          transition: class2Transition(ctx, "other", {
            projectId: "prj:other",
            fromLpsVersion: after.livingProjectState.version,
          }),
        },
        target: { kind: "nextStep", nextStep: "other" },
      }),
      expectedLpsVersion: after.livingProjectState.version,
    });
    expect(wrongProj.ok).toBe(false);
    if (!wrongProj.ok) expect(wrongProj.detailCode).toBe("CROSS_PROJECT_BASIS");

    // NEG-C2-04 stale LPS in transition
    const staleTrans = await ctx.materializer.execute({
      ...baseRequest(ctx, source, {
        materializationClass: 2,
        basis: {
          kind: "valid_runtime_state_transition",
          transition: class2Transition(ctx, "stale-t", {
            fromLpsVersion: 1,
          }),
        },
        target: { kind: "nextStep", nextStep: "stale-t" },
      }),
      expectedLpsVersion: after.livingProjectState.version,
    });
    expect(staleTrans.ok).toBe(false);
    if (!staleTrans.ok) expect(staleTrans.detailCode).toBe("LPS_VERSION_CONFLICT");

    // NEG-C2-06 unsupported operation claim
    const badOp = await ctx.materializer.execute({
      ...baseRequest(ctx, source, {
        materializationClass: 2,
        basis: {
          kind: "valid_runtime_state_transition",
          transition: {
            ...class2Transition(ctx, "bad", {
              fromLpsVersion: after.livingProjectState.version,
            }),
            kind: "set_scope" as unknown as "set_next_step",
          },
        },
        target: { kind: "nextStep", nextStep: "bad" },
      }),
      expectedLpsVersion: after.livingProjectState.version,
    });
    expect(badOp.ok).toBe(false);
    if (!badOp.ok) {
      expect(badOp.detailCode).toBe("MATERIALIZATION_BASIS_INCOMPATIBLE");
    }
  });

  it("E2E-RUNTIME-03 — Class3 HD target binding + Pilote≠Morris", async () => {
    const ctx = await bootProduct(tempDir("sfia-s03-corr-e03-"));
    const source = await seedRawMemoryB({
      projectId: ctx.projectId,
      sessionDbPath: ctx.sessionDbPath,
      text: "I approve Phase 2 scope",
    });
    const nextScope = structuralScopeTarget(ctx.scope, "Phase 2 included");
    const unrelatedScope = structuralScopeTarget(ctx.scope, "UNRELATED");

    // A no HD
    const noHd = await ctx.materializer.execute(
      baseRequest(ctx, source, {
        materializationClass: 3,
        basis: null,
        target: { kind: "scope", scope: nextScope },
      }),
    );
    expect(noHd.ok).toBe(false);
    if (!noHd.ok) expect(noHd.detailCode).toBe("MATERIALIZATION_BASIS_REQUIRED");

    // B forged
    const forged = await ctx.materializer.execute(
      baseRequest(ctx, source, {
        materializationClass: 3,
        basis: {
          kind: "pilote_human_decision",
          referenceId: "dec:model-said-approved",
        },
        target: { kind: "scope", scope: nextScope },
      }),
    );
    expect(forged.ok).toBe(false);
    if (!forged.ok) expect(forged.detailCode).toBe("HUMAN_DECISION_INVALID");

    // C unrelated HD
    const unrelatedId = `dec:unrelated-${Date.now()}`;
    await recordPiloteDecision({
      oa: ctx.oa,
      projectId: ctx.projectId,
      decisionId: unrelatedId,
      subject: "subj:unrelated",
      approvedScope: unrelatedScope,
    });
    const unrelated = await ctx.materializer.execute(
      baseRequest(ctx, source, {
        materializationClass: 3,
        basis: {
          kind: "pilote_human_decision",
          referenceId: unrelatedId,
        },
        target: { kind: "scope", scope: nextScope },
      }),
    );
    expect(unrelated.ok).toBe(false);
    if (!unrelated.ok) {
      expect(unrelated.detailCode).toBe("HUMAN_DECISION_TARGET_MISMATCH");
    }

    // D authority=morris rejected
    const morrisId = `dec:morris-${Date.now()}`;
    await recordPiloteDecision({
      oa: ctx.oa,
      projectId: ctx.projectId,
      decisionId: morrisId,
      subject: "subj:morris-gate",
      approvedScope: nextScope,
      authority: "morris",
      actor: {
        actorId: "actor:morris-operator",
        role: "decision_maker",
        authorityLevel: "N3",
      },
    });
    const morris = await ctx.materializer.execute(
      baseRequest(ctx, source, {
        materializationClass: 3,
        basis: {
          kind: "pilote_human_decision",
          referenceId: morrisId,
        },
        target: { kind: "scope", scope: nextScope },
      }),
    );
    expect(morris.ok).toBe(false);
    if (!morris.ok) {
      expect(morris.detailCode).toBe("HUMAN_DECISION_AUTHORITY_INVALID");
    }

    // system_non_structuring rejected for structural Class 3
    const sysId = `dec:sys-${Date.now()}`;
    ctx.oa.authorityResolver.register({
      evidenceId: `evd:auth-${sysId}`,
      actorId: "actor:system",
      level: "N1",
      scope: "subj:sys-ns",
      issuedAt: "2026-08-31T00:00:00.000Z",
      source: "registry",
    });
    const sys = await ctx.oa.decisionServices.recordHumanDecision.execute({
      decisionId: sysId,
      projectId: ctx.projectId,
      subject: "subj:sys-ns",
      options: [
        { optionId: "opt:a", label: "A" },
        { optionId: "opt:b", label: "B" },
      ],
      selectedOptionId: "opt:a",
      actor: {
        actorId: "actor:system",
        role: "system",
        authorityLevel: "none",
      },
      authority: "system_non_structuring",
      reversible: true,
      nonStructuring: true,
      authorityEvidenceId: `evd:auth-${sysId}`,
      decisionBasis: {
        sourceType: "proposal",
        sourceRef: `prop:${sysId}`,
        sourceDigest: "b".repeat(64),
        projectId: ctx.projectId,
        proposalContext: { lpsId: ctx.lpsId, lpsVersion: 1 },
        executionBasis: { scope: nextScope },
      },
    });
    expect(sys.ok).toBe(true);
    const sysMat = await ctx.materializer.execute(
      baseRequest(ctx, source, {
        materializationClass: 3,
        basis: { kind: "pilote_human_decision", referenceId: sysId },
        target: { kind: "scope", scope: nextScope },
      }),
    );
    expect(sysMat.ok).toBe(false);
    if (!sysMat.ok) {
      expect(sysMat.detailCode).toBe("HUMAN_DECISION_AUTHORITY_INVALID");
    }

    // E matching Pilote HD
    const matchId = `dec:match-${Date.now()}`;
    await recordPiloteDecision({
      oa: ctx.oa,
      projectId: ctx.projectId,
      decisionId: matchId,
      subject: "subj:scope-phase2",
      approvedScope: nextScope,
    });
    const accepted = await ctx.materializer.execute(
      baseRequest(ctx, source, {
        materializationClass: 3,
        basis: {
          kind: "pilote_human_decision",
          referenceId: matchId,
        },
        target: { kind: "scope", scope: nextScope },
      }),
    );
    expect(accepted.ok).toBe(true);
    if (!accepted.ok) return;

    resetRuntimeApplicationServiceForTests();
    const remounted = getRuntimeApplicationService({
      productDbPath: ctx.productDbPath,
      auditMode: "noop",
    });
    const rem = await remounted.getProject(ctx.projectId);
    expect(rem.ok).toBe(true);
    const remLps =
      await remounted.oa!.projectServices.getCurrentLivingProjectState.execute({
        projectId: ctx.projectId,
      });
    expect(remLps.ok).toBe(true);
    if (!remLps.ok) return;
    expect(remLps.livingProjectState.scope).toBe(nextScope);
    expect(remLps.livingProjectState.decisionIds).toContain(matchId);
  });

  it("E2E-RUNTIME-04 — Class4 external-only via runtime.oa", async () => {
    const ctx = await bootProduct(tempDir("sfia-s03-corr-e04-"));
    const source = await seedRawMemoryB({
      projectId: ctx.projectId,
      sessionDbPath: ctx.sessionDbPath,
      text: "GO MORRIS merge promote doctrine adopt architecture runtime v3 ADOPTED push branch",
    });
    const before = await ctx.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: ctx.projectId,
    });
    expect(before.ok).toBe(true);
    if (!before.ok) return;
    const result = await ctx.materializer.execute(
      baseRequest(ctx, source, {
        materializationClass: 4,
        basis: { kind: "construction_governance_external" },
        target: { kind: "scope", scope: "should-not-apply" },
      }),
    );
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.status).toBe("external_required");
      expect(result.detailCode).toBe("CLASS4_EXTERNAL_ONLY");
    }
    const after = await ctx.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: ctx.projectId,
    });
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingProjectState.version).toBe(before.livingProjectState.version);
  });

  it("E2E-RUNTIME-05 — forged / cross-project / stale / OCC", async () => {
    const ctxA = await bootProduct(tempDir("sfia-s03-corr-e05-"));
    const createdB = await ctxA.runtime.createProject({
      name: "S03 Project B",
      objective: "cross-project",
      context: "B",
      criticality: "STANDARD",
      constraints: ["AUCUNE EXÉCUTION"],
      shortReference: "S03B",
      idempotencyKey: `s03-corr-b-${Date.now()}`,
    });
    expect(createdB.ok).toBe(true);
    if (!createdB.ok) return;
    const projectB = createdB.project.projectId;
    const sessionDbB = path.join(path.dirname(ctxA.sessionDbPath), "nora-session-b.sqlite");
    const lpsB =
      await ctxA.oa.projectServices.getCurrentLivingProjectState.execute({
        projectId: projectB,
      });
    expect(lpsB.ok).toBe(true);
    if (!lpsB.ok) return;

    const evidenceId = `ev:xproj-${Date.now()}`;
    await registerAndVerifyEvidence(ctxA.oa, ctxA.projectId, evidenceId);
    const decisionId = `dec:xproj-${Date.now()}`;
    const scopeA = structuralScopeTarget(ctxA.scope, "A-only");
    await recordPiloteDecision({
      oa: ctxA.oa,
      projectId: ctxA.projectId,
      decisionId,
      subject: "subj:xproj",
      approvedScope: scopeA,
    });

    const sourceB = await seedRawMemoryB({
      projectId: projectB,
      sessionDbPath: sessionDbB,
      text: "cross-project attempt",
    });
    const mat = ctxA.oa.materializationServices.materializeFromMemoryB;
    const reqBase = {
      projectId: projectB,
      memoryBSource: {
        kind: "raw" as const,
        sessionKey: sourceB.sessionKey,
        seq: sourceB.seq,
        contentHash: sourceB.contentHash,
      },
      expectedLpsVersion: lpsB.livingProjectState.version,
      correlationId: `cor:x-${Date.now()}`,
      actor: ACTOR,
      sessionDbPath: sessionDbB,
    };

    const crossEv = await mat.execute({
      ...reqBase,
      materializationClass: 1,
      basis: { kind: "verified_fact_evidence", referenceId: evidenceId },
      target: { kind: "evidenceIds", evidenceId },
    });
    expect(crossEv.ok).toBe(false);
    if (!crossEv.ok) expect(crossEv.detailCode).toBe("CROSS_PROJECT_BASIS");

    const crossHd = await mat.execute({
      ...reqBase,
      materializationClass: 3,
      basis: { kind: "pilote_human_decision", referenceId: decisionId },
      target: {
        kind: "scope",
        scope: structuralScopeTarget(lpsB.livingProjectState.scope ?? "{}", "stolen"),
      },
    });
    expect(crossHd.ok).toBe(false);
    if (!crossHd.ok) expect(crossHd.detailCode).toBe("CROSS_PROJECT_BASIS");

    const forgedB = await mat.execute({
      ...reqBase,
      memoryBSource: {
        ...reqBase.memoryBSource,
        contentHash: "deadbeef".repeat(8),
      },
      materializationClass: 2,
      basis: {
        kind: "valid_runtime_state_transition",
        transition: {
          kind: "set_next_step",
          projectId: projectB,
          fromLpsVersion: lpsB.livingProjectState.version,
          targetKind: "nextStep",
          nextStep: "x",
        },
      },
      target: { kind: "nextStep", nextStep: "x" },
    });
    expect(forgedB.ok).toBe(false);
    if (!forgedB.ok) expect(forgedB.detailCode).toBe("MEMORY_B_SOURCE_MISMATCH");

    const occ = await mat.execute({
      ...reqBase,
      expectedLpsVersion: lpsB.livingProjectState.version + 99,
      materializationClass: 2,
      basis: {
        kind: "valid_runtime_state_transition",
        transition: {
          kind: "set_next_step",
          projectId: projectB,
          fromLpsVersion: lpsB.livingProjectState.version + 99,
          targetKind: "nextStep",
          nextStep: "occ",
        },
      },
      target: { kind: "nextStep", nextStep: "occ" },
    });
    expect(occ.ok).toBe(false);
    if (!occ.ok) expect(occ.detailCode).toBe("LPS_VERSION_CONFLICT");

    const after =
      await ctxA.oa.projectServices.getCurrentLivingProjectState.execute({
        projectId: projectB,
      });
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingProjectState.version).toBe(lpsB.livingProjectState.version);
  });

  it("E2E-RUNTIME-06 — contradictory B without basis cannot override C", async () => {
    const ctx = await bootProduct(tempDir("sfia-s03-corr-e06-"));
    const source = await seedRawMemoryB({
      projectId: ctx.projectId,
      sessionDbPath: ctx.sessionDbPath,
      text: "Contradiction ENTIRELY DIFFERENT",
    });
    const before = await ctx.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: ctx.projectId,
    });
    expect(before.ok).toBe(true);
    if (!before.ok) return;
    const silent = await ctx.materializer.execute(
      baseRequest(ctx, source, {
        materializationClass: 3,
        basis: null,
        target: {
          kind: "scope",
          scope: structuralScopeTarget(ctx.scope, "ENTIRELY DIFFERENT"),
        },
      }),
    );
    expect(silent.ok).toBe(false);
    const after = await ctx.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: ctx.projectId,
    });
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingProjectState.scope).toBe(before.livingProjectState.scope);
  });

  it("compacted Memory B — current OK with Class2 transition; stale rejected", async () => {
    const ctx = await bootProduct(tempDir("sfia-s03-corr-compact-"));
    const session = new ProductSqliteSession({
      projectId: ctx.projectId,
      dbPath: ctx.sessionDbPath,
      sessionKey: "f1-default",
    });
    await session.addItems([
      userTextItem("Premise A"),
      assistantTextItem("Ack A"),
      userTextItem("Premise B next action propose status note"),
      assistantTextItem("Ack B"),
      userTextItem("Premise C"),
      assistantTextItem("Ack C"),
    ]);
    const before = await loadSessionRows(session);
    const targetRow = before.conversation[2]!;
    await applyCompactionIfNeeded({
      session,
      truthCRevision: { lpsId: ctx.lpsId, lpsVersion: ctx.lpsVersion },
      policy: { itemThreshold: 4, keepRecentCount: 2, maxSummaryChars: 900 },
      nowIso: "2026-08-31T12:00:00.000Z",
    });
    const loaded = await loadSessionRows(session);
    expect(loaded.compaction).not.toBeNull();
    const entry = loaded.compaction!.provenance.find(
      (p) => p.kind === "raw" && (p.sourceSeq ?? p.seq) === targetRow.seq,
    );
    expect(entry).toBeTruthy();
    session.close();

    const ok = await ctx.materializer.execute({
      projectId: ctx.projectId,
      materializationClass: 2,
      basis: {
        kind: "valid_runtime_state_transition",
        transition: class2Transition(ctx, "from-compacted-b"),
      },
      memoryBSource: {
        kind: "compacted_provenance",
        sessionKey: "f1-default",
        generation: loaded.compaction!.generation,
        sourceSeq: entry!.sourceSeq ?? entry!.seq,
        contentHash: entry!.contentHash,
      },
      target: { kind: "nextStep", nextStep: "from-compacted-b" },
      expectedLpsVersion: ctx.lpsVersion,
      correlationId: "cor:compact-ok",
      actor: ACTOR,
      sessionDbPath: ctx.sessionDbPath,
    });
    expect(ok.ok).toBe(true);

    const after = await ctx.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: ctx.projectId,
    });
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    const stale = await ctx.materializer.execute({
      projectId: ctx.projectId,
      materializationClass: 2,
      basis: {
        kind: "valid_runtime_state_transition",
        transition: {
          kind: "set_next_step",
          projectId: ctx.projectId,
          fromLpsVersion: after.livingProjectState.version,
          targetKind: "nextStep",
          nextStep: "stale-compact",
        },
      },
      memoryBSource: {
        kind: "compacted_provenance",
        sessionKey: "f1-default",
        generation: loaded.compaction!.generation,
        sourceSeq: entry!.sourceSeq ?? entry!.seq,
        contentHash: entry!.contentHash,
      },
      target: { kind: "nextStep", nextStep: "stale-compact" },
      expectedLpsVersion: after.livingProjectState.version,
      correlationId: "cor:compact-stale",
      actor: ACTOR,
      sessionDbPath: ctx.sessionDbPath,
    });
    expect(stale.ok).toBe(false);
    if (!stale.ok) expect(stale.detailCode).toBe("MEMORY_B_SOURCE_STALE");
  });

  it("runtime composition — no attachMaterializer; materializer from oa only", async () => {
    const ctx = await bootProduct(tempDir("sfia-s03-corr-compose-"));
    expect(ctx.materializer).toBe(
      ctx.oa.materializationServices.materializeFromMemoryB,
    );
    expect(ctx.oa.productDurablePath).toBe(true);
  });
});

```

## 32. E2E runtime matrix
| Case | Result |
|------|--------|
| E2E-RUNTIME-00 no basis | PASS |
| E2E-RUNTIME-01 Class1 Evidence | PASS + remount + durable audit |
| E2E-RUNTIME-02 Class2 transition / naked / policy / structural / wrong project / stale / bad op | PASS |
| E2E-RUNTIME-03 Class3 bind + morris reject + system_ns reject + matching Pilote | PASS |
| E2E-RUNTIME-04 Class4 | PASS |
| E2E-RUNTIME-05 cross/forged/OCC | PASS |
| E2E-RUNTIME-06 B vs C | PASS |
| Compacted B current/stale | PASS |
| Composition identity | PASS |

## 33. NEG-S03-01→17
All covered in E2E-RUNTIME matrix (no basis; unverified Evidence preserved from prior; naked Class2; unresolved policy; Class2 structural; Class3 no/forged/unrelated/morris/system_ns; Class4; cross Ev/HD; forged B; stale compacted; OCC; arbitrary target). Rejected → Truth C unchanged.

## 34. CORR-S03-01→26
All **PASS** (Class2 mechanical validation; Class3 bind+authority; RuntimeOaStack composition; audits; LPS path; no new table; Class1 Evidence path; compacted B; S01/S02/CI; full suite).

## 35. Class1 reserve analysis
Evidence fields: status, availability, freshness.
verifyEvidenceIntegrity sets status=verified, availability=available, freshness=current.freshness ?? "fresh".
CORR extends Class1 checks: same project + verified + availability available (when present) + freshness !== stale.
No Evidence redesign.

## 36. Compacted B proof
Current Truth C revision provenance + Class2 concrete transition → accept.
After LPS advance, same provenance → MEMORY_B_SOURCE_STALE. Compaction ≠ basis.

## 37–40. Regressions
- S01: **PASS**
- S02: **PASS**
- Option C D0 / CI surfaces: **PASS** (authority/session/runner/fakeConvergence/sessionTruthC + mw0.d0)
- D0: **PASS**

## 41–44. Validation
- typecheck: **PASS**
- lint: **PASS**
- build: **PASS**
- npm test: **PASS** — 241 files / **2323 tests** passed (132 skipped)

## 45. Fake/Real
Trigger YES. Proof DETERMINISTIC only. FakeEvidencePayloadAdapter for integrity probe only. No LIVE/REAL.

## 46. Proof ceiling
DETERMINISTIC PROVEN CANDIDATE — PASS LOCALLY ≠ READY FOR REAL ≠ MW1 CLOSED ON MAIN ≠ Final MW1 Proof PASS.

## 47. Responses Compaction
**NOT ADOPTED / FREEZE.**

## 48. package/lock
Unchanged.

## 49. schema/table
Unchanged — no migration; audit event types reuse oa_audit_events.payload_json.

## 50. Final MW1 Proof
**NOT RUN** (strictly out of this cycle).

## 51. Project Git
**NONE** — no commit/push/PR/merge.

## 52. Final aggregate diff (stat)
```
.../nora-eval/mw0.corr05.evidenceIntegrity.test.ts |   4 +-
 .../nora-eval/mw0.corr06.bar09Semantics.test.ts    |   4 +-
 .../mw0.corr07.offlineRescoreFailClosed.test.ts    |   4 +-
 .../app/__tests__/nora-eval/mw0.d0.test.ts         |   8 +-
 .../__tests__/nora-eval/mw0.realCampaign.test.ts   |   2 +-
 .../app/__tests__/nora-eval/runMw0RealCampaign.ts  |   2 +-
 .../project-assistant/buildProjectSystemPrompt.ts  |   1 +
 .../features/project-assistant/orchestrateTurn.ts  |  48 +++-
 .../app/features/project-assistant/types.ts        |  13 +
 .../app/lib/nora-cognitive-runtime/index.ts        |  50 ++++
 .../nora-cognitive-runtime/productSqliteSession.ts |  61 +++++
 .../nora-cognitive-runtime/runNoraAgentsTurn.ts    |  22 +-
 .../nora-cognitive-runtime/runNoraCognitiveTurn.ts | 102 +++++++-
 .../app/lib/nora-cognitive-runtime/types.ts        |  15 ++
 .../sfia-studio/app/lib/nora-eval/barBindings.ts   |   5 +-
 projects/sfia-studio/app/lib/nora-eval/catalog.ts  |  43 ++++
 projects/sfia-studio/app/lib/nora-eval/d0Runner.ts | 129 +++++++---
 projects/sfia-studio/app/lib/nora-eval/index.ts    |  11 +
 projects/sfia-studio/app/lib/nora-eval/scorers.ts  | 283 ++++++++++++++++++++-
 projects/sfia-studio/app/lib/nora-eval/types.ts    |   9 +-
 projects/sfia-studio/app/lib/oa/project/index.ts   |  17 ++
 .../oa/project/ports/projectAuditJournalPort.ts    |  30 +++
 .../app/lib/vertical-slice-runtime/service.ts      |  50 ++++
 23 files changed, 842 insertions(+), 71 deletions(-)
```

Name-status:
```
M	projects/sfia-studio/app/__tests__/nora-eval/mw0.corr05.evidenceIntegrity.test.ts
M	projects/sfia-studio/app/__tests__/nora-eval/mw0.corr06.bar09Semantics.test.ts
M	projects/sfia-studio/app/__tests__/nora-eval/mw0.corr07.offlineRescoreFailClosed.test.ts
M	projects/sfia-studio/app/__tests__/nora-eval/mw0.d0.test.ts
M	projects/sfia-studio/app/__tests__/nora-eval/mw0.realCampaign.test.ts
M	projects/sfia-studio/app/__tests__/nora-eval/runMw0RealCampaign.ts
M	projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
M	projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
M	projects/sfia-studio/app/features/project-assistant/types.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/productSqliteSession.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
M	projects/sfia-studio/app/lib/nora-eval/barBindings.ts
M	projects/sfia-studio/app/lib/nora-eval/catalog.ts
M	projects/sfia-studio/app/lib/nora-eval/d0Runner.ts
M	projects/sfia-studio/app/lib/nora-eval/index.ts
M	projects/sfia-studio/app/lib/nora-eval/scorers.ts
M	projects/sfia-studio/app/lib/nora-eval/types.ts
M	projects/sfia-studio/app/lib/oa/project/index.ts
M	projects/sfia-studio/app/lib/oa/project/ports/projectAuditJournalPort.ts
M	projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
```

Untracked (excl. review pack):
```
projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw1.s01.honestMemoryB.d0.test.ts
projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw1.s01.productTruthC.e2e.test.ts
projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw1.s02.compaction.modeled.test.ts
projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw1.s02.compaction.unit.test.ts
projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw1.s03.materialization.e2e.test.ts
projects/sfia-studio/app/__tests__/nora-eval/mw1.s01.honestMemoryB.eval.test.ts
projects/sfia-studio/app/__tests__/nora-eval/mw1.s02.compaction.eval.test.ts
projects/sfia-studio/app/lib/nora-cognitive-runtime/memoryBAvailability.ts
projects/sfia-studio/app/lib/nora-cognitive-runtime/memoryBCompaction.ts
projects/sfia-studio/app/lib/nora-eval/mw1S01Observe.ts
projects/sfia-studio/app/lib/nora-eval/mw1S02Observe.ts
projects/sfia-studio/app/lib/oa/project/application/materializeFromMemoryB.ts
```

## 53. Final status
```
M projects/sfia-studio/app/__tests__/nora-eval/mw0.corr05.evidenceIntegrity.test.ts
 M projects/sfia-studio/app/__tests__/nora-eval/mw0.corr06.bar09Semantics.test.ts
 M projects/sfia-studio/app/__tests__/nora-eval/mw0.corr07.offlineRescoreFailClosed.test.ts
 M projects/sfia-studio/app/__tests__/nora-eval/mw0.d0.test.ts
 M projects/sfia-studio/app/__tests__/nora-eval/mw0.realCampaign.test.ts
 M projects/sfia-studio/app/__tests__/nora-eval/runMw0RealCampaign.ts
 M projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
 M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
 M projects/sfia-studio/app/features/project-assistant/types.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/productSqliteSession.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
 M projects/sfia-studio/app/lib/nora-eval/barBindings.ts
 M projects/sfia-studio/app/lib/nora-eval/catalog.ts
 M projects/sfia-studio/app/lib/nora-eval/d0Runner.ts
 M projects/sfia-studio/app/lib/nora-eval/index.ts
 M projects/sfia-studio/app/lib/nora-eval/scorers.ts
 M projects/sfia-studio/app/lib/nora-eval/types.ts
 M projects/sfia-studio/app/lib/oa/project/index.ts
 M projects/sfia-studio/app/lib/oa/project/ports/projectAuditJournalPort.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
?? .tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw1.s01.honestMemoryB.d0.test.ts
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw1.s01.productTruthC.e2e.test.ts
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw1.s02.compaction.modeled.test.ts
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw1.s02.compaction.unit.test.ts
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw1.s03.materialization.e2e.test.ts
?? projects/sfia-studio/app/__tests__/nora-eval/mw1.s01.honestMemoryB.eval.test.ts
?? projects/sfia-studio/app/__tests__/nora-eval/mw1.s02.compaction.eval.test.ts
?? projects/sfia-studio/app/lib/nora-cognitive-runtime/memoryBAvailability.ts
?? projects/sfia-studio/app/lib/nora-cognitive-runtime/memoryBCompaction.ts
?? projects/sfia-studio/app/lib/nora-eval/mw1S01Observe.ts
?? projects/sfia-studio/app/lib/nora-eval/mw1S02Observe.ts
?? projects/sfia-studio/app/lib/oa/project/application/materializeFromMemoryB.ts
```

## 54. Blockers
None remaining for CORR-01.

## 55. Reserves
- Optional nora-eval S03 catalog scenario still deferred.
- LPS create/append may still use MemoryProjectAuditJournal; materialization durable audit uses SqliteProjectAuditJournal on same Product store (composed).
- Class3 structural proof continues to mutate UI-metadata JSON constraints to preserve LocalProjectFacade projection.

## 56. Final verdict
**MW1-S03 BOUNDED CORRECTION — PASS — BLK-MW1-S03-CLASS2-BASIS-VALIDATION-01 CLOSED — CLASS2 MATERIALIZATION REQUIRES MECHANICALLY VERIFIED CURRENT RUNTIME TRANSITION / RESOLVABLE POLICY AND NAKED BASIS LABELS FAIL CLOSED — BLK-MW1-S03-CLASS3-HD-SCOPE-AUTHORITY-02 CLOSED — CLASS3 REQUIRES EXISTING ACCEPTED RUNTIME PILOTE HUMANDECISION CAUSALLY BOUND TO REQUESTED STRUCTURAL MUTATION — UNRELATED HD REJECTED — MORRIS CONSTRUCTION AUTHORITY NOT TREATED AS PILOTE RUNTIME AUTHORITY — BLK-MW1-S03-RUNTIME-COMPOSITION-PROOF-03 CLOSED — MATERIALIZATION CAPABILITY COMPOSED IN NORMAL RUNTIMEOASTACK AND DECISIVE E2E USES RUNTIME-COMPOSED PATH — DURABLE ATTRIBUTABLE AUDIT PROVEN — EXISTING LPS / DECISION / EVIDENCE / MEMORY B PATHS REUSED — NO SECOND TRUTH C — S01 REGRESSION PASS — S02 REGRESSION PASS — OPTION C CI-01→14 PASS — DETERMINISTIC E2E PASS — FULL REGRESSION PASS — DETERMINISTIC ONLY — RESPONSES COMPACTION NOT ADOPTED — NO REAL — FINAL MW1 PROOF NOT RUN — NO PROJECT COMMIT/PUSH/PR — READY FOR CHATGPT CRITICAL RE-REVIEW**

## 57. Next gate
CHATGPT CRITICAL RE-REVIEW MW1-S03.
Only if PASS and no new structural blocker: Final MW1 Deterministic Proof under already-consumed macro MW1 authorization.
Project Git integration remains a distinct later Morris decision.
