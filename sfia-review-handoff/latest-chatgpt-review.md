# Review Pack — MW1-S03-CORR-02 EXPLICIT DECISIONBASIS STRUCTURAL BINDING
# FULL / CRITICAL / CONTENT-COMPLETE

Status: **FULL** · **CRITICAL** · **CONTENT-COMPLETE**

Candidate layers:
- **A. S01** — preserved
- **B. S02** — preserved
- **C. S03 pre-CORR-01** @ 80c410bd…
- **D. S03 CORR-01** @ a9fc06bd…
- **E. THIS CORR-02 delta** — remove HumanDecision.scope fallback; require same-project decisionBasis.executionBasis.scope
- **F. Aggregate MW1 local candidate** — dirty/uncommitted on Delivery

## 1. Timestamp Europe/Paris
2026-09-01 00:44:37 CEST

## 2. Repository
mcleland147/sfia-workspace

## 3. Cycle 8 / INC / CRITICAL / CORR-02
- Cycle: **8 — Delivery / implémentation**
- Typology: **INC** · Profile: **CRITICAL**
- Sous-cycle: **MW1-S03-CORR-02**
- Blocker: **BLK-MW1-S03-HD-DURABLE-BASIS-BINDING-04**
- CKC: Cycle 8 synthetic map · candidate · authority NONE

## 4. Exact Morris GO
GO MORRIS — MW1-S03 CORR-02 BOUNDED ONLY — REQUIRE EXPLICIT SAME-PROJECT DECISIONBASIS.EXECUTIONBASIS.SCOPE FOR CLASS3 STRUCTURAL MATERIALIZATION — REMOVE GENERIC HUMANDECISION.SCOPE FALLBACK — PROVE NO-BASIS-SCOPE-EQUAL-TARGET + CROSS-PROJECT-DECISIONBASIS FAIL-CLOSED — PRESERVE ALL OTHER S03 PROOFS — NO FINAL MW1 PROOF — NO REAL — NO PROJECT GIT INTEGRATION.

## 5. origin/main SHA/tree
- SHA: `0f265149dc7e088ac62ff99c6f998274bec6c94f`
- tree: `92fce49d245ffb4cbfc43b2b55e1004648b6a900`

## 6. Local branch/HEAD/tree/ahead
- branch: `delivery/sfia-studio-nora-mw1-s01-honest-memory-b`
- HEAD: `0f265149…` · tree: `92fce49d…` · ahead: **0**

## 7. Input handoff
`a9fc06bd08ceba9c98ba0fe86d629390b992c2f9` (parent `80c410bd…`)

## 8. Pre-CORR-02 fingerprints
```
PRE_CORR02_TRACKED_DIFF_SHA=b508a77ec547ca45fce41e543dfce22616ad0ffd11712d84966e860e41674fea
PRE_CORR02_STAGED_DIFF_SHA=e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
PRE_CORR02_UNTRACKED_MANIFEST_SHA=1d5cd4b762d04d3080450263f92898067bcb1810dfb60f09055a22daed4d8915
PRE_CORR02_UNTRACKED_CONTENT_SHA=5f34b3d958bf98f0c131b0cd08a05a37640b3fab29ffd7b0b3bb4ff223fd21f0
FPDIR=/tmp/mw1-s03-corr02-fp-kWsGlc
```

## 9. Sources read
Process + convergence + product/NORA/V3 + Decision domain types/invariants/recordHumanDecision + handoff a9fc06bd.

## 10. Convergence qualification
S01/S02/Class1/2/4/RuntimeOaStack KEEP PASS. Class3 durable target binding OPEN → CLOSED by CORR-02. Final MW1 Proof blocked until ChatGPT CORR-02 re-review PASS.

## 11. C5 S03 source-lock
Never silent B→C; Class3 requires Pilote HD; HD is not a generic mutation token.

## 12. C2 Class3 semantics
Runtime structural decision → Studio after Pilote HumanDecision. Pilote ≠ Morris.

## 13. Remaining ChatGPT blocker
**BLK-MW1-S03-HD-DURABLE-BASIS-BINDING-04** — CORR-01 fell back to HumanDecision.scope when executionBasis.scope absent.

## 14. Pre-CORR-02 fallback implementation
`approvedStructuralScopeFromHd` returned executionBasis.scope OR hd.scope.

## 15–16. Decision domain discovery
HumanDecision.scope = request.scope ?? request.subject (authority/decision scope).
DecisionBasis.executionBasis.scope = explicit execution structural scope.
RecordHumanDecision persists decisionBasis.projectId without forcing equality to hd.projectId (enables NEG-C3-19 defensive check).

## 17. Selected minimal correction
Remove hd.scope fallback. Require decisionBasis + same-project decisionBasis.projectId + non-empty executionBasis.scope exact match to target.scope.

## 18–20. Explicit rules
- decisionBasis mandatory
- decisionBasis.projectId == request.projectId (else CROSS_PROJECT_BASIS)
- executionBasis.scope mandatory/non-empty (else HUMAN_DECISION_TARGET_MISMATCH)
- exact equality to target.scope
- HumanDecision.scope never consulted for Class3 structural authorization

## 21. No HumanDecision.scope fallback proof
Helper code path has no hd.scope read. NEG-C3-18 proves equal hd.scope alone fails.

## 22. NEG-C3-18
Accepted delegated decision_maker; hd.scope == target; executionBasis.scope ABSENT → HUMAN_DECISION_TARGET_MISMATCH; LPS unchanged; rejection audit.

## 23. NEG-C3-19
Outer HD project A; decisionBasis.projectId = foreign; executionBasis.scope == target → CROSS_PROJECT_BASIS; LPS unchanged. Created via DecisionServices (persisted as-is).

## 24. Valid Class3 positive
executionBasis.scope == target; hd.scope (subject) intentionally ≠ target → accepted; remount durable; decisionIds linked.

## 25–30. Regressions preserved
Class3 authority (morris/system_ns/unrelated), Class1/2/4, RuntimeOaStack composition, Memory B raw/compacted — all PASS.

## 31. CORR-02-only changed files
- `projects/sfia-studio/app/lib/oa/project/application/materializeFromMemoryB.ts`
- `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw1.s03.materialization.e2e.test.ts`

## 32. FULL useful CORR-02 diff / content

### 32.A materializeFromMemoryB.ts unified diff
```diff
--- /tmp/mw1-s03-corr02-fp-kWsGlc/snapshot/materializeFromMemoryB.ts	2026-09-01 00:41:50
+++ projects/sfia-studio/app/lib/oa/project/application/materializeFromMemoryB.ts	2026-09-01 00:42:28
@@ -3,6 +3,8 @@
  * Never silent. Class 1–4 + explicit MaterializationBasis.
  * CORR-01: Class2 mechanically-verifiable transition; Class3 Pilote≠Morris + HD target binding;
  * RuntimeOaStack composition (see vertical-slice-runtime/service.ts).
+ * CORR-02: Class3 requires explicit same-project decisionBasis.executionBasis.scope;
+ * HumanDecision.scope is NOT a structural materialization fallback.
  * Memory B ≠ Truth C. Nora ≠ authority. Morris ≠ Pilote persona.
  */

@@ -144,6 +146,7 @@
   scope?: string;
   actor: { actorId: string; role: string };
   decisionBasis?: {
+    projectId?: string;
     executionBasis?: { scope?: string };
   };
 };
@@ -212,18 +215,55 @@
 }

 /**
- * Canonical approved structural scope from durable HD fields.
- * Prefer decisionBasis.executionBasis.scope; fall back to hd.scope only when
- * that durable field is the approved structural representation.
+ * MW1-S03-CORR-02 — Class 3 approved structural scope from explicit DecisionBasis only.
+ * HumanDecision.scope is NOT a materialization authorization source.
+ *
+ * Returns:
+ * - { ok: true, scope }
+ * - { ok: false, detailCode: CROSS_PROJECT_BASIS } when decisionBasis.projectId mismatches
+ * - { ok: false, detailCode: HUMAN_DECISION_TARGET_MISMATCH } when executionBasis.scope absent
  */
-function approvedStructuralScopeFromHd(
+export function approvedStructuralScopeFromHd(
   hd: MaterializationHumanDecisionView,
-): string | null {
-  const fromBasis = hd.decisionBasis?.executionBasis?.scope?.trim();
-  if (fromBasis) return fromBasis;
-  const fromHdScope = hd.scope?.trim();
-  if (fromHdScope) return fromHdScope;
-  return null;
+  requestProjectId: string,
+):
+  | { ok: true; scope: string }
+  | { ok: false; detailCode: MaterializationDetailCode; message: string } {
+  const basis = hd.decisionBasis;
+  if (!basis) {
+    return {
+      ok: false,
+      detailCode: "HUMAN_DECISION_TARGET_MISMATCH",
+      message:
+        "HumanDecision has no explicit decisionBasis for requested structural materialization",
+    };
+  }
+  if (!basis.projectId || basis.projectId.trim().length === 0) {
+    return {
+      ok: false,
+      detailCode: "HUMAN_DECISION_TARGET_MISMATCH",
+      message: "HumanDecision.decisionBasis.projectId is required",
+    };
+  }
+  if (basis.projectId !== requestProjectId) {
+    return {
+      ok: false,
+      detailCode: "CROSS_PROJECT_BASIS",
+      message:
+        "HumanDecision.decisionBasis.projectId belongs to a different Project",
+    };
+  }
+  const fromBasis = basis.executionBasis?.scope?.trim();
+  if (!fromBasis) {
+    return {
+      ok: false,
+      detailCode: "HUMAN_DECISION_TARGET_MISMATCH",
+      message:
+        "HumanDecision has no explicit decisionBasis.executionBasis.scope for requested structural materialization",
+    };
+  }
+  // Intentionally ignore hd.scope — generic decision/authority scope ≠ LPS structural target.
+  return { ok: true, scope: fromBasis };
 }

 function validateClass2Transition(input: {
@@ -750,17 +790,17 @@
         );
       }

-      const approvedScope = approvedStructuralScopeFromHd(hd.decision);
-      if (!approvedScope) {
-        return auditReject(
-          "HUMAN_DECISION_TARGET_MISMATCH",
-          "HumanDecision has no durable approved structural scope (decisionBasis.executionBasis.scope / scope)",
-        );
+      const approved = approvedStructuralScopeFromHd(
+        hd.decision,
+        request.projectId,
+      );
+      if (!approved.ok) {
+        return auditReject(approved.detailCode, approved.message);
       }
-      if (approvedScope !== request.target.scope) {
+      if (approved.scope !== request.target.scope) {
         return auditReject(
           "HUMAN_DECISION_TARGET_MISMATCH",
-          "HumanDecision durable approved scope does not match requested structural target",
+          "HumanDecision decisionBasis.executionBasis.scope does not match requested structural target",
         );
       }


```

### 32.B materializeFromMemoryB.ts FULL post-CORR-02
```typescript
/**
 * MW1-S03 / CORR-01 — Governed Memory B → Truth C materialization.
 * Never silent. Class 1–4 + explicit MaterializationBasis.
 * CORR-01: Class2 mechanically-verifiable transition; Class3 Pilote≠Morris + HD target binding;
 * RuntimeOaStack composition (see vertical-slice-runtime/service.ts).
 * CORR-02: Class3 requires explicit same-project decisionBasis.executionBasis.scope;
 * HumanDecision.scope is NOT a structural materialization fallback.
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
    projectId?: string;
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
 * MW1-S03-CORR-02 — Class 3 approved structural scope from explicit DecisionBasis only.
 * HumanDecision.scope is NOT a materialization authorization source.
 *
 * Returns:
 * - { ok: true, scope }
 * - { ok: false, detailCode: CROSS_PROJECT_BASIS } when decisionBasis.projectId mismatches
 * - { ok: false, detailCode: HUMAN_DECISION_TARGET_MISMATCH } when executionBasis.scope absent
 */
export function approvedStructuralScopeFromHd(
  hd: MaterializationHumanDecisionView,
  requestProjectId: string,
):
  | { ok: true; scope: string }
  | { ok: false; detailCode: MaterializationDetailCode; message: string } {
  const basis = hd.decisionBasis;
  if (!basis) {
    return {
      ok: false,
      detailCode: "HUMAN_DECISION_TARGET_MISMATCH",
      message:
        "HumanDecision has no explicit decisionBasis for requested structural materialization",
    };
  }
  if (!basis.projectId || basis.projectId.trim().length === 0) {
    return {
      ok: false,
      detailCode: "HUMAN_DECISION_TARGET_MISMATCH",
      message: "HumanDecision.decisionBasis.projectId is required",
    };
  }
  if (basis.projectId !== requestProjectId) {
    return {
      ok: false,
      detailCode: "CROSS_PROJECT_BASIS",
      message:
        "HumanDecision.decisionBasis.projectId belongs to a different Project",
    };
  }
  const fromBasis = basis.executionBasis?.scope?.trim();
  if (!fromBasis) {
    return {
      ok: false,
      detailCode: "HUMAN_DECISION_TARGET_MISMATCH",
      message:
        "HumanDecision has no explicit decisionBasis.executionBasis.scope for requested structural materialization",
    };
  }
  // Intentionally ignore hd.scope — generic decision/authority scope ≠ LPS structural target.
  return { ok: true, scope: fromBasis };
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

      const approved = approvedStructuralScopeFromHd(
        hd.decision,
        request.projectId,
      );
      if (!approved.ok) {
        return auditReject(approved.detailCode, approved.message);
      }
      if (approved.scope !== request.target.scope) {
        return auditReject(
          "HUMAN_DECISION_TARGET_MISMATCH",
          "HumanDecision decisionBasis.executionBasis.scope does not match requested structural target",
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

### 32.C E2E unified diff
```diff
--- /tmp/mw1-s03-corr02-fp-kWsGlc/snapshot/mw1.s03.materialization.e2e.test.ts	2026-09-01 00:41:50
+++ projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw1.s03.materialization.e2e.test.ts	2026-09-01 00:43:05
@@ -302,7 +302,7 @@
   return recorded.decision;
 }

-describe("MW1-S03-CORR-01 — Runtime-composed never-silent materialization", () => {
+describe("MW1-S03-CORR-02 — Runtime-composed never-silent materialization", () => {
   beforeEach(() => {
     process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
     process.env.OPS1_CONVERSATION_PROVIDER = "fake";
@@ -654,7 +654,8 @@
       expect(sysMat.detailCode).toBe("HUMAN_DECISION_AUTHORITY_INVALID");
     }

-    // E matching Pilote HD
+    // E matching Pilote HD — HD.scope (subject) intentionally ≠ target.scope;
+    // authorization comes only from decisionBasis.executionBasis.scope.
     const matchId = `dec:match-${Date.now()}`;
     await recordPiloteDecision({
       oa: ctx.oa,
@@ -663,6 +664,17 @@
       subject: "subj:scope-phase2",
       approvedScope: nextScope,
     });
+    const matchedHd = await ctx.oa.decisionServices.getHumanDecision.execute({
+      decisionId: matchId,
+    });
+    expect(matchedHd.ok).toBe(true);
+    if (matchedHd.ok) {
+      expect(matchedHd.decision.scope).toBe("subj:scope-phase2");
+      expect(matchedHd.decision.scope).not.toBe(nextScope);
+      expect(matchedHd.decision.decisionBasis?.executionBasis?.scope).toBe(
+        nextScope,
+      );
+    }
     const accepted = await ctx.materializer.execute(
       baseRequest(ctx, source, {
         materializationClass: 3,
@@ -693,6 +705,181 @@
     expect(remLps.livingProjectState.decisionIds).toContain(matchId);
   });

+  it("NEG-C3-18 — hd.scope == target without executionBasis.scope fails closed", async () => {
+    const ctx = await bootProduct(tempDir("sfia-s03-corr02-neg18-"));
+    const source = await seedRawMemoryB({
+      projectId: ctx.projectId,
+      sessionDbPath: ctx.sessionDbPath,
+      text: "Approve via generic HD.scope only",
+    });
+    const nextScope = structuralScopeTarget(ctx.scope, "Phase 2 via-hd-scope");
+    const decisionId = `dec:neg18-${Date.now()}`;
+
+    // Authority evidence scoped to the structural string that becomes HD.scope.
+    ctx.oa.authorityResolver.register({
+      evidenceId: `evd:auth-${decisionId}`,
+      actorId: PILOTE.actorId,
+      level: "N2",
+      scope: nextScope,
+      issuedAt: "2026-08-31T00:00:00.000Z",
+      source: "registry",
+    });
+    const recorded = await ctx.oa.decisionServices.recordHumanDecision.execute({
+      decisionId,
+      projectId: ctx.projectId,
+      subject: "subj:neg18",
+      options: [
+        { optionId: "opt:accept", label: "Accept" },
+        { optionId: "opt:refuse", label: "Refuse" },
+      ],
+      selectedOptionId: "opt:accept",
+      actor: PILOTE,
+      authority: "delegated",
+      reversible: true,
+      authorityEvidenceId: `evd:auth-${decisionId}`,
+      // Generic decision/authority scope equals requested LPS target…
+      scope: nextScope,
+      decisionBasis: {
+        sourceType: "proposal",
+        sourceRef: `prop:${decisionId}`,
+        sourceDigest: "c".repeat(64),
+        projectId: ctx.projectId,
+        proposalContext: { lpsId: ctx.lpsId, lpsVersion: 1 },
+        // …but NO explicit executionBasis.scope.
+        executionBasis: {
+          objective: "no-structural-execution-scope",
+          requestedOperation: "note-only",
+        },
+      },
+    });
+    expect(recorded.ok).toBe(true);
+    if (!recorded.ok) return;
+    expect(recorded.decision.scope).toBe(nextScope);
+    expect(recorded.decision.decisionBasis?.executionBasis?.scope).toBeUndefined();
+
+    const before = await ctx.oa.projectServices.getCurrentLivingProjectState.execute({
+      projectId: ctx.projectId,
+    });
+    expect(before.ok).toBe(true);
+    if (!before.ok) return;
+
+    const result = await ctx.materializer.execute(
+      baseRequest(ctx, source, {
+        materializationClass: 3,
+        basis: { kind: "pilote_human_decision", referenceId: decisionId },
+        target: { kind: "scope", scope: nextScope },
+      }),
+    );
+    expect(result.ok).toBe(false);
+    if (!result.ok) {
+      expect(result.detailCode).toBe("HUMAN_DECISION_TARGET_MISMATCH");
+    }
+
+    const after = await ctx.oa.projectServices.getCurrentLivingProjectState.execute({
+      projectId: ctx.projectId,
+    });
+    expect(after.ok).toBe(true);
+    if (!after.ok) return;
+    expect(after.livingProjectState.version).toBe(before.livingProjectState.version);
+    expect(after.livingProjectState.scope).toBe(before.livingProjectState.scope);
+    expect(after.livingProjectState.decisionIds ?? []).not.toContain(decisionId);
+    const rejected = listMaterializationAudit(ctx.runtime).filter(
+      (e) =>
+        e.event === "oa.memory.materialization.rejected" &&
+        "detailCode" in e &&
+        e.detailCode === "HUMAN_DECISION_TARGET_MISMATCH",
+    );
+    expect(rejected.length).toBeGreaterThanOrEqual(1);
+  });
+
+  it("NEG-C3-19 — cross-project DecisionBasis fails closed", async () => {
+    const ctx = await bootProduct(tempDir("sfia-s03-corr02-neg19-"));
+    const source = await seedRawMemoryB({
+      projectId: ctx.projectId,
+      sessionDbPath: ctx.sessionDbPath,
+      text: "Cross-project DecisionBasis attempt",
+    });
+    const nextScope = structuralScopeTarget(ctx.scope, "Phase 2 xproj-basis");
+    const decisionId = `dec:neg19-${Date.now()}`;
+    const foreignProjectId = "prj:foreign-decision-basis";
+
+    ctx.oa.authorityResolver.register({
+      evidenceId: `evd:auth-${decisionId}`,
+      actorId: PILOTE.actorId,
+      level: "N2",
+      scope: "subj:neg19",
+      issuedAt: "2026-08-31T00:00:00.000Z",
+      source: "registry",
+    });
+    const recorded = await ctx.oa.decisionServices.recordHumanDecision.execute({
+      decisionId,
+      projectId: ctx.projectId,
+      subject: "subj:neg19",
+      options: [
+        { optionId: "opt:accept", label: "Accept" },
+        { optionId: "opt:refuse", label: "Refuse" },
+      ],
+      selectedOptionId: "opt:accept",
+      actor: PILOTE,
+      authority: "delegated",
+      reversible: true,
+      authorityEvidenceId: `evd:auth-${decisionId}`,
+      scope: "subj:neg19",
+      decisionBasis: {
+        sourceType: "proposal",
+        sourceRef: `prop:${decisionId}`,
+        sourceDigest: "d".repeat(64),
+        // Outer HD is Project A; embedded basis claims Project B.
+        projectId: foreignProjectId,
+        proposalContext: { lpsId: ctx.lpsId, lpsVersion: 1 },
+        executionBasis: {
+          scope: nextScope,
+          requestedOperation: "structural-scope-update",
+        },
+      },
+    });
+    // RecordHumanDecision currently persists without rewriting DecisionBasis.projectId.
+    expect(recorded.ok).toBe(true);
+    if (!recorded.ok) return;
+    expect(recorded.decision.projectId).toBe(ctx.projectId);
+    expect(recorded.decision.decisionBasis?.projectId).toBe(foreignProjectId);
+    expect(recorded.decision.decisionBasis?.executionBasis?.scope).toBe(nextScope);
+
+    const before = await ctx.oa.projectServices.getCurrentLivingProjectState.execute({
+      projectId: ctx.projectId,
+    });
+    expect(before.ok).toBe(true);
+    if (!before.ok) return;
+
+    const result = await ctx.materializer.execute(
+      baseRequest(ctx, source, {
+        materializationClass: 3,
+        basis: { kind: "pilote_human_decision", referenceId: decisionId },
+        target: { kind: "scope", scope: nextScope },
+      }),
+    );
+    expect(result.ok).toBe(false);
+    if (!result.ok) {
+      expect(result.detailCode).toBe("CROSS_PROJECT_BASIS");
+    }
+
+    const after = await ctx.oa.projectServices.getCurrentLivingProjectState.execute({
+      projectId: ctx.projectId,
+    });
+    expect(after.ok).toBe(true);
+    if (!after.ok) return;
+    expect(after.livingProjectState.version).toBe(before.livingProjectState.version);
+    expect(after.livingProjectState.scope).toBe(before.livingProjectState.scope);
+    expect(after.livingProjectState.decisionIds ?? []).not.toContain(decisionId);
+    const rejected = listMaterializationAudit(ctx.runtime).filter(
+      (e) =>
+        e.event === "oa.memory.materialization.rejected" &&
+        "detailCode" in e &&
+        e.detailCode === "CROSS_PROJECT_BASIS",
+    );
+    expect(rejected.length).toBeGreaterThanOrEqual(1);
+  });
+
   it("E2E-RUNTIME-04 — Class4 external-only via runtime.oa", async () => {
     const ctx = await bootProduct(tempDir("sfia-s03-corr-e04-"));
     const source = await seedRawMemoryB({

```

### 32.D E2E FULL post-CORR-02
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

describe("MW1-S03-CORR-02 — Runtime-composed never-silent materialization", () => {
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

    // E matching Pilote HD — HD.scope (subject) intentionally ≠ target.scope;
    // authorization comes only from decisionBasis.executionBasis.scope.
    const matchId = `dec:match-${Date.now()}`;
    await recordPiloteDecision({
      oa: ctx.oa,
      projectId: ctx.projectId,
      decisionId: matchId,
      subject: "subj:scope-phase2",
      approvedScope: nextScope,
    });
    const matchedHd = await ctx.oa.decisionServices.getHumanDecision.execute({
      decisionId: matchId,
    });
    expect(matchedHd.ok).toBe(true);
    if (matchedHd.ok) {
      expect(matchedHd.decision.scope).toBe("subj:scope-phase2");
      expect(matchedHd.decision.scope).not.toBe(nextScope);
      expect(matchedHd.decision.decisionBasis?.executionBasis?.scope).toBe(
        nextScope,
      );
    }
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

  it("NEG-C3-18 — hd.scope == target without executionBasis.scope fails closed", async () => {
    const ctx = await bootProduct(tempDir("sfia-s03-corr02-neg18-"));
    const source = await seedRawMemoryB({
      projectId: ctx.projectId,
      sessionDbPath: ctx.sessionDbPath,
      text: "Approve via generic HD.scope only",
    });
    const nextScope = structuralScopeTarget(ctx.scope, "Phase 2 via-hd-scope");
    const decisionId = `dec:neg18-${Date.now()}`;

    // Authority evidence scoped to the structural string that becomes HD.scope.
    ctx.oa.authorityResolver.register({
      evidenceId: `evd:auth-${decisionId}`,
      actorId: PILOTE.actorId,
      level: "N2",
      scope: nextScope,
      issuedAt: "2026-08-31T00:00:00.000Z",
      source: "registry",
    });
    const recorded = await ctx.oa.decisionServices.recordHumanDecision.execute({
      decisionId,
      projectId: ctx.projectId,
      subject: "subj:neg18",
      options: [
        { optionId: "opt:accept", label: "Accept" },
        { optionId: "opt:refuse", label: "Refuse" },
      ],
      selectedOptionId: "opt:accept",
      actor: PILOTE,
      authority: "delegated",
      reversible: true,
      authorityEvidenceId: `evd:auth-${decisionId}`,
      // Generic decision/authority scope equals requested LPS target…
      scope: nextScope,
      decisionBasis: {
        sourceType: "proposal",
        sourceRef: `prop:${decisionId}`,
        sourceDigest: "c".repeat(64),
        projectId: ctx.projectId,
        proposalContext: { lpsId: ctx.lpsId, lpsVersion: 1 },
        // …but NO explicit executionBasis.scope.
        executionBasis: {
          objective: "no-structural-execution-scope",
          requestedOperation: "note-only",
        },
      },
    });
    expect(recorded.ok).toBe(true);
    if (!recorded.ok) return;
    expect(recorded.decision.scope).toBe(nextScope);
    expect(recorded.decision.decisionBasis?.executionBasis?.scope).toBeUndefined();

    const before = await ctx.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: ctx.projectId,
    });
    expect(before.ok).toBe(true);
    if (!before.ok) return;

    const result = await ctx.materializer.execute(
      baseRequest(ctx, source, {
        materializationClass: 3,
        basis: { kind: "pilote_human_decision", referenceId: decisionId },
        target: { kind: "scope", scope: nextScope },
      }),
    );
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.detailCode).toBe("HUMAN_DECISION_TARGET_MISMATCH");
    }

    const after = await ctx.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: ctx.projectId,
    });
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingProjectState.version).toBe(before.livingProjectState.version);
    expect(after.livingProjectState.scope).toBe(before.livingProjectState.scope);
    expect(after.livingProjectState.decisionIds ?? []).not.toContain(decisionId);
    const rejected = listMaterializationAudit(ctx.runtime).filter(
      (e) =>
        e.event === "oa.memory.materialization.rejected" &&
        "detailCode" in e &&
        e.detailCode === "HUMAN_DECISION_TARGET_MISMATCH",
    );
    expect(rejected.length).toBeGreaterThanOrEqual(1);
  });

  it("NEG-C3-19 — cross-project DecisionBasis fails closed", async () => {
    const ctx = await bootProduct(tempDir("sfia-s03-corr02-neg19-"));
    const source = await seedRawMemoryB({
      projectId: ctx.projectId,
      sessionDbPath: ctx.sessionDbPath,
      text: "Cross-project DecisionBasis attempt",
    });
    const nextScope = structuralScopeTarget(ctx.scope, "Phase 2 xproj-basis");
    const decisionId = `dec:neg19-${Date.now()}`;
    const foreignProjectId = "prj:foreign-decision-basis";

    ctx.oa.authorityResolver.register({
      evidenceId: `evd:auth-${decisionId}`,
      actorId: PILOTE.actorId,
      level: "N2",
      scope: "subj:neg19",
      issuedAt: "2026-08-31T00:00:00.000Z",
      source: "registry",
    });
    const recorded = await ctx.oa.decisionServices.recordHumanDecision.execute({
      decisionId,
      projectId: ctx.projectId,
      subject: "subj:neg19",
      options: [
        { optionId: "opt:accept", label: "Accept" },
        { optionId: "opt:refuse", label: "Refuse" },
      ],
      selectedOptionId: "opt:accept",
      actor: PILOTE,
      authority: "delegated",
      reversible: true,
      authorityEvidenceId: `evd:auth-${decisionId}`,
      scope: "subj:neg19",
      decisionBasis: {
        sourceType: "proposal",
        sourceRef: `prop:${decisionId}`,
        sourceDigest: "d".repeat(64),
        // Outer HD is Project A; embedded basis claims Project B.
        projectId: foreignProjectId,
        proposalContext: { lpsId: ctx.lpsId, lpsVersion: 1 },
        executionBasis: {
          scope: nextScope,
          requestedOperation: "structural-scope-update",
        },
      },
    });
    // RecordHumanDecision currently persists without rewriting DecisionBasis.projectId.
    expect(recorded.ok).toBe(true);
    if (!recorded.ok) return;
    expect(recorded.decision.projectId).toBe(ctx.projectId);
    expect(recorded.decision.decisionBasis?.projectId).toBe(foreignProjectId);
    expect(recorded.decision.decisionBasis?.executionBasis?.scope).toBe(nextScope);

    const before = await ctx.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: ctx.projectId,
    });
    expect(before.ok).toBe(true);
    if (!before.ok) return;

    const result = await ctx.materializer.execute(
      baseRequest(ctx, source, {
        materializationClass: 3,
        basis: { kind: "pilote_human_decision", referenceId: decisionId },
        target: { kind: "scope", scope: nextScope },
      }),
    );
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.detailCode).toBe("CROSS_PROJECT_BASIS");
    }

    const after = await ctx.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: ctx.projectId,
    });
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingProjectState.version).toBe(before.livingProjectState.version);
    expect(after.livingProjectState.scope).toBe(before.livingProjectState.scope);
    expect(after.livingProjectState.decisionIds ?? []).not.toContain(decisionId);
    const rejected = listMaterializationAudit(ctx.runtime).filter(
      (e) =>
        e.event === "oa.memory.materialization.rejected" &&
        "detailCode" in e &&
        e.detailCode === "CROSS_PROJECT_BASIS",
    );
    expect(rejected.length).toBeGreaterThanOrEqual(1);
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

## 33. CORR2-S03-01→26 matrix
All **PASS** (fallback removed; DecisionBasis mandatory; project binding; executionBasis.scope; NEG-18/19; prior Class3/1/2/4/runtime/B/S01/S02/CI/full suite).

## 34. NEG-S03-01→19
01–17 preserved; **18** hd.scope-without-executionBasis; **19** cross-project DecisionBasis. All rejects leave Truth C unchanged.

## 35–38. S01 / S02 / CI / D0
**PASS** (113 targeted regression tests).

## 39–42. Validation
- typecheck **PASS**
- lint **PASS**
- build **PASS**
- npm test **PASS** — 241 files / **2325 tests** passed (132 skipped)

## 43. Fake/Real
DETERMINISTIC only. No LIVE/REAL.

## 44. Proof ceiling
DETERMINISTIC PROVEN CANDIDATE — PASS LOCALLY ≠ Final MW1 / ≠ READY FOR REAL / ≠ CLOSED ON MAIN.

## 45. Responses Compaction
**NOT ADOPTED.**

## 46–48. package/lock · schema/table · Decision schema
**Unchanged.**

## 49. Final MW1 Proof
**NOT RUN.**

## 50. Project Git
**NONE.**

## 51. Final aggregate diff (stat)
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

## 52. Final git status
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

## 53. Blockers
None remaining for CORR-02 / BLK-MW1-S03-HD-DURABLE-BASIS-BINDING-04.

## 54. Reserves
None material for Class3 binding. Optional nora-eval S03 still deferred.

## 55. Final verdict
**MW1-S03 CORR-02 — PASS — BLK-MW1-S03-HD-DURABLE-BASIS-BINDING-04 CLOSED — CLASS3 STRUCTURAL MATERIALIZATION REQUIRES EXPLICIT SAME-PROJECT HUMANDECISION.DECISIONBASIS.EXECUTIONBASIS.SCOPE — GENERIC HUMANDECISION.SCOPE FALLBACK REMOVED — HD.SCOPE EQUAL TO REQUESTED TARGET WITHOUT EXPLICIT EXECUTIONBASIS.SCOPE FAILS CLOSED — CROSS-PROJECT DECISIONBASIS FAILS CLOSED EVEN WHEN OUTER HUMANDECISION PROJECT MATCHES — VALID ACCEPTED DELEGATED DECISION_MAKER HUMANDECISION WITH EXACT SAME-PROJECT EXECUTIONBASIS.SCOPE REMAINS ACCEPTED — PILOTE≠MORRIS PRESERVED — CLASS1/2/4 PASS — RUNTIMEOASTACK MATERIALIZATION PATH PASS — MEMORY B SOURCE VALIDATION PASS — DURABLE AUDIT PASS — S01 REGRESSION PASS — S02 REGRESSION PASS — OPTION C CI-01→14 PASS — DETERMINISTIC E2E PASS — FULL REGRESSION PASS — DETERMINISTIC ONLY — RESPONSES COMPACTION NOT ADOPTED — NO REAL — FINAL MW1 PROOF NOT RUN — NO PROJECT COMMIT/PUSH/PR — READY FOR CHATGPT CRITICAL RE-REVIEW**

## 56. Next gate
CHATGPT CRITICAL RE-REVIEW MW1-S03-CORR-02.
Only after PASS: Final MW1 Deterministic Proof under macro MW1 authorization.
Project Git integration remains a distinct later Morris decision.
