# ChatGPT Review Pack — FULL
## PRODUCT-JOURNEY-E2E-REAL-RECONCILIATION-01 — Checkpoint E PREPARE + Resume

**Timestamp (UTC):** 2026-09-17T19:13:15Z
**Pack kind:** FULL (code modification present — modified content included below)
**Pack revision:** R3 — consolidates evidenceRequirements coerce (R1/R2) + PREPARE resume rehydration
**Automation:** L3 handoff publish only; **NO** project commit/push/PR/merge

---

## 1. Git Truth

| Field | Value |
|---|---|
| Repo | mcleland147/sfia-workspace |
| Worktree | `/Users/morris/Projects/sfia-studio-product-journey-e2e-real-reconciliation-01` |
| Branch | `qa/sfia-studio-product-journey-e2e-real-reconciliation-01` |
| HEAD | `26478b1ea5b010c625f0c6039c969fac5c135cf5` |
| origin/main | `26478b1ea5b010c625f0c6039c969fac5c135cf5` |
| Baseline match | YES |
| Macro | PRODUCT-JOURNEY-E2E-REAL-RECONCILIATION-01 |
| Cycle | 9 — QA / Validation |
| Typologie | EVOL |
| Profil | CRITICAL |

### git status --short

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/oa/execution-contract/m3ExecutionContractPrepare.test.ts
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/corrProof10.decisionContextContinuity.d0.test.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
 M projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
 M projects/sfia-studio/app/features/project-assistant/w2/actions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/activeProposalDecisionSubject.ts
 M projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/types.ts
 M projects/sfia-studio/app/package-lock.json
?? .tmp-sfia-review/checkpoint-e-prepare-fix.diff
?? .tmp-sfia-review/checkpoint-e-resume-full.diff
?? projects/sfia-studio/app/__tests__/project-assistant/checkpointE.prepareResume.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/w2/prepareReadyProposalPursueContinuation.ts
```

---

## 1bis. package-lock.json (hors scope — préexistant)

`projects/sfia-studio/app/package-lock.json` was already dirty at lot entry (conversation-start git status). Metadata-only noise; **no** `package.json` change; **LEFT UNTOUCHED**; not part of Checkpoint E scope.

---

## 2. Diagnostic chain (preserved)

### A — PREPARE CONTRACT_INVALID (fixed R1)
- Validator: `validateIdentifierArray` → `evidence_id_invalid`
- UI: "Execution contract input is invalid."
- Cause: Nora free-text `evidenceRequirements` copied into EC identifier field
- Fix: coerce to `BOUNDED_DOCS_WRITE_GIT_EVIDENCE_REQUIREMENTS` when non-identifiers (docs_write)

### B — Resume CTA missing after restart (this R3)
- Durable HD `dec:w2-prop:0e4b08bb-…` accepted pursue + DecisionBasis OK
- EC=0 / attempts=0
- ProposalStore process-local lost
- `w2ReadActiveDecisionSubject` → `kind:none` (DecisionRef closed subject)
- React `decision` never rehydrated → `proposalBackedPrepareReady` false → CTA PREPARE hidden
- Generic « Instruire les options » shown — **not** a safe resume

---

## 3. Root cause (resume)

PREPARE CTA depends on session React `decision` from `w2DecideTrajectoryAction` only.
Post-DecisionRef closure, subject read correctly returns `none`, but no durable read reconstructed the pursue+no-EC PREPARE continuation into UI state.

Classification: **B** — mapping/wiring/rehydration local (COMPLETE minimal)

---

## 4. Solution minimale

Reuse existing OA reads (`listDecisionHistory`, `listExecutionContractHistory`, `readLiveProjectContext`) in new module:

`prepareReadyProposalPursueContinuation.ts`

Wire into `readActiveProposalDecisionSubject` authority order:
1. bound awaiting
2. pending reinstruction
3. **`pursue_prepare_ready`** (new)
4. none

TrajectorySurface rehydrates `decision` from that kind → same CTA / same `decisionId`.
`proposeTrajectoryOptions` fail-closed with `PREPARE_CONTINUATION_OWNS_NEXT_ACTION` so instruct cannot compete.

### New module (complete)

```typescript
/**
 * Checkpoint E resume — durable pursue HumanDecision → PREPARE continuation.
 *
 * After DecisionRef closes a Proposal OptionSet, `readActiveProposalDecisionSubject`
 * correctly returns `none` (subject already decided). Restart must still surface
 * PREPARE when the durable pursue HD + DecisionBasis remain valid and no EC
 * exists for that decision — without ProposalStore or a new HumanDecision.
 *
 * Composed exclusively from existing OA reads (listDecisionHistory,
 * listExecutionContractHistory, readLiveProjectContext). No new persistence.
 */

import {
  readLiveProjectContext,
  type RuntimeOaStack,
} from "@/lib/vertical-slice-runtime";
import type { HumanDecision } from "@/lib/oa/decision";
import { PROPOSAL_SUBJECT_PURSUE_REF } from "./proposalSubjectOptions";
import type { TrajectoryDecisionRecordDto } from "./types";

export type PrepareReadyProposalPursueContinuation =
  | { readonly ok: true; readonly kind: "none" }
  | {
      readonly ok: true;
      readonly kind: "pursue_prepare_ready";
      readonly decision: TrajectoryDecisionRecordDto;
    }
  | {
      readonly ok: false;
      readonly code: string;
      readonly message: string;
    };

function projectToDecisionDto(
  decision: HumanDecision,
): TrajectoryDecisionRecordDto | null {
  if (decision.status !== "accepted") return null;
  if (decision.selectedOptionId !== PROPOSAL_SUBJECT_PURSUE_REF) return null;
  const basis = decision.decisionBasis;
  if (!basis || basis.sourceType !== "proposal") return null;
  const proposalId = basis.sourceRef?.trim();
  if (!proposalId || !proposalId.startsWith("prop:")) return null;
  return {
    decisionId: decision.decisionId,
    selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
    actorRole: "Pilote",
    authorityClass: "morris",
    statusLabel: "DÉCISION HUMAINE PRISE",
    capturedAt: decision.effectiveAt,
    decisionBasisLinked: true,
    reservesText:
      decision.reservations?.map((r) => r.statement).join("\n") || null,
    proposalId,
  };
}

/**
 * Mirror prepareM3FromDecision CONTEXT_STALE gates that block PREPARE.
 * Missing doctrineDigest on basis is allowed (same as prepare path).
 */
export function isPursueDecisionBasisCurrentForPrepare(input: {
  readonly decision: HumanDecision;
  readonly liveDoctrineDigest: string;
  readonly liveLpsVersion: number;
}): boolean {
  const basis = input.decision.decisionBasis;
  if (!basis) return false;
  const ctx = basis.proposalContext;
  if (
    ctx.doctrineDigest !== undefined &&
    ctx.doctrineDigest !== input.liveDoctrineDigest
  ) {
    return false;
  }
  if (ctx.lpsVersion > input.liveLpsVersion) {
    return false;
  }
  return true;
}

function decisionHasAssociatedContract(
  decisionId: string,
  contracts: ReadonlyArray<{
    readonly decisionRefs?: readonly string[] | null;
    readonly status: string;
  }>,
): boolean {
  for (const contract of contracts) {
    const refs = contract.decisionRefs ?? [];
    if (!refs.includes(decisionId)) continue;
    // Any associated contract means PREPARE identity may already exist —
    // EC continuity / rematerialize owns the next step.
    return true;
  }
  return false;
}

/**
 * Newest accepted proposal-pursue HD with linked basis, current vs live LPS/
 * doctrine, and no associated ExecutionContract → PREPARE continuation DTO.
 */
export async function readPrepareReadyProposalPursueContinuation(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
}): Promise<PrepareReadyProposalPursueContinuation> {
  const { oa, projectId } = input;
  if (!projectId.startsWith("prj:")) {
    return {
      ok: false,
      code: "PROJECT_INVALID",
      message: "Identifiant de projet invalide — reprise PREPARE refusée.",
    };
  }

  const live = await readLiveProjectContext(oa, projectId);
  if (!live.ok) {
    return { ok: false, code: live.code, message: live.message };
  }

  const decisionsResult =
    await oa.decisionServices.listDecisionHistory.execute({ projectId });
  if (!decisionsResult.ok) {
    return {
      ok: false,
      code: decisionsResult.error.detailCode,
      message:
        decisionsResult.error.message ??
        "Historique des décisions illisible — reprise PREPARE refusée.",
    };
  }

  const contractsResult =
    await oa.executionContractServices.listExecutionContractHistory.execute({
      projectId,
    });
  if (!contractsResult.ok) {
    return {
      ok: false,
      code: contractsResult.error.detailCode,
      message:
        contractsResult.error.message ??
        "Historique des contrats illisible — reprise PREPARE refusée.",
    };
  }

  const ordered = [...decisionsResult.decisions].sort((a, b) =>
    a.effectiveAt < b.effectiveAt ? 1 : a.effectiveAt > b.effectiveAt ? -1 : 0,
  );

  for (const decision of ordered) {
    if (decision.projectId !== projectId) continue;
    if (
      decisionHasAssociatedContract(decision.decisionId, contractsResult.contracts)
    ) {
      continue;
    }
    if (
      !isPursueDecisionBasisCurrentForPrepare({
        decision,
        liveDoctrineDigest: live.context.doctrineDigest,
        liveLpsVersion: live.context.lpsVersion,
      })
    ) {
      continue;
    }
    const dto = projectToDecisionDto(decision);
    if (!dto) continue;
    return { ok: true, kind: "pursue_prepare_ready", decision: dto };
  }

  return { ok: true, kind: "none" };
}
```

---

## 5. Fichiers modifiés / ajoutés

**Keep from R1:**
- `features/project-assistant/f3/prepareM3FromDecision.ts`
- `__tests__/oa/execution-contract/m3ExecutionContractPrepare.test.ts`

**R3 resume:**
- `features/project-assistant/w2/prepareReadyProposalPursueContinuation.ts` (NEW)
- `features/project-assistant/w2/activeProposalDecisionSubject.ts`
- `features/project-assistant/w2/actions.ts`
- `features/project-assistant/w2/types.ts`
- `features/project-assistant/w2/proposeTrajectoryOptions.ts`
- `features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx`
- `__tests__/project-assistant/checkpointE.prepareResume.d0.test.ts` (NEW)
- `__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx`
- `__tests__/project-assistant/corrProof10.decisionContextContinuity.d0.test.ts` (expectations updated for pursue_prepare_ready / R70)

**Hors scope:** `package-lock.json`

---

## 6. Diff exploitable (lot complet R1+R3)

```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-contract/m3ExecutionContractPrepare.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-contract/m3ExecutionContractPrepare.test.ts
index 7406435e..141704a2 100644
--- a/projects/sfia-studio/app/__tests__/oa/execution-contract/m3ExecutionContractPrepare.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-contract/m3ExecutionContractPrepare.test.ts
@@ -534,6 +534,83 @@ describe("M3 ExecutionContract UNRESOLVED semantics (R1)", () => {
     expect(prepared.code).toBe("DECISION_NOT_CURRENT");
   });

+  it("CHECKPOINT-E — docs_write Nora free-text evidenceRequirements coerce to OA identifiers (not CONTRACT_INVALID)", async () => {
+    const noraProse = [
+      "Résultat de l’écriture du fichier",
+      "Résultat de la vérification du contenu",
+    ];
+    const result = await recordAndPrepare(
+      "ckpt-e-nora-evidence.sqlite",
+      {
+        objective:
+          "Matérialiser la fiche Markdown requise par le cycle actif dans le dépôt lié.",
+        requestedOperation: "cursor.docs_write.apply",
+        intentKind: "docs_write",
+        targetRepositoryRef: "mcleland147/sfia-workspace",
+        targetPath:
+          "projects/sfia-studio/.sandbox/product-journey-e2e-real-01.md",
+        scopeIn: ["projects/sfia-studio/.sandbox"],
+        scopeOut: ["Tout autre fichier"],
+        requiredCapabilities: ["cap:cursor.docs_write"],
+        evidenceRequirements: noraProse,
+        expectedOutputs: [
+          "Le fichier Markdown matérialisé au chemin cible",
+          "Vérification de l’existence et de la conformité minimale du fichier",
+        ],
+        reversibilityExpectation: "unknown",
+      },
+      "dec:m3:ckpt-e-nora-evidence",
+    );
+    expect(result).not.toBeNull();
+    if (!result) return;
+    expect(result.prepared.mode).toBe("M3_PREPARE");
+    expect(result.prepared.executionPerformed).toBe(false);
+    expect(result.prepared.cursorReal).toBe(false);
+    expect(result.contract.action).toBe("cursor.docs_write.apply");
+    expect(result.contract.target).toBe("workspace.isolated.docs_write");
+    // Contract field must be OA identifiers — Nora prose must not leak here.
+    for (const id of result.contract.evidenceRequirements) {
+      expect(id).toMatch(/^[a-z][a-z0-9]*:/);
+    }
+    expect(result.contract.evidenceRequirements).toEqual([
+      "git:local_commit",
+      "git:remote_push",
+      "git:pull_request",
+      "git:ci_status",
+      "git:review_status",
+      "git:merge",
+      "git:post_merge_verification",
+    ]);
+    // Free-text preserved in inputs for disclosure (not EC identifier SoT).
+    expect(result.contract.inputs?.evidenceRequirements).toEqual(noraProse);
+  });
+
+  it("CHECKPOINT-E regression — docs_write with valid OA evidenceRequirements preserves them", async () => {
+    const result = await recordAndPrepare(
+      "ckpt-e-valid-evidence.sqlite",
+      {
+        requestedOperation: "cursor.docs_write.apply",
+        intentKind: "docs_write",
+        targetRepositoryRef: "mcleland147/sfia-workspace",
+        targetPath:
+          "projects/sfia-studio/.sandbox/product-journey-e2e-real-01.md",
+        scopeIn: ["projects/sfia-studio/.sandbox"],
+        requiredCapabilities: ["cap:cursor.docs_write"],
+        evidenceRequirements: [
+          "evreq:file-write-result",
+          "evreq:content-verification",
+        ],
+      },
+      "dec:m3:ckpt-e-valid-evidence",
+    );
+    expect(result).not.toBeNull();
+    if (!result) return;
+    expect(result.contract.evidenceRequirements).toEqual([
+      "evreq:file-write-result",
+      "evreq:content-verification",
+    ]);
+  });
+
   it("L — critical safety negatives", () => {
     const projection = projectCursorPrepareOnly({
       schemaVersion: "0.2.0-oa",
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
index c5be33db..9243bb3b 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
@@ -290,6 +290,78 @@ describe("W2 TrajectorySurface", () => {
     expect(screen.getByTestId("w2-prepare-contract")).toBeVisible();
     expect(screen.queryByTestId("w2-amend-next-action")).toBeNull();
   });
+
+  it("CHECKPOINT-E resume — pursue_prepare_ready rehydrates PREPARE CTA without instruct", async () => {
+    readActiveDecisionSubjectMock.mockResolvedValue({
+      ok: true,
+      kind: "pursue_prepare_ready",
+      decision: {
+        decisionId: "dec:w2-prop:resume-ui",
+        selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
+        actorRole: "Pilote",
+        authorityClass: "morris",
+        statusLabel: "DÉCISION HUMAINE PRISE",
+        capturedAt: "2026-09-17T18:36:50.105Z",
+        decisionBasisLinked: true,
+        reservesText: null,
+        proposalId: "prop:f2:3b788c52-5139-4b71-b00b-a45a0224b56f",
+      },
+    });
+    readGovernedExecutionContinuityMock.mockResolvedValue({
+      ok: true,
+      kind: "none",
+    });
+
+    render(<TrajectorySurface projectId="prj:w2-ui" />);
+
+    expect(await screen.findByTestId("w2-decision")).toBeVisible();
+    expect(screen.getByTestId("w2-proposal-backed-prepare")).toBeVisible();
+    await waitFor(() => {
+      expect(screen.getByTestId("w2-prepare-contract")).toBeEnabled();
+    });
+    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
+    expect(screen.queryByTestId("w2-options")).toBeNull();
+
+    prepareM3Mock.mockResolvedValue({
+      ok: true,
+      text: "Contrat préparé",
+      f3: {
+        successor: {
+          executionContractId: "xct:m3:decw2propresume-ui",
+          version: 1,
+          status: "validated",
+          action: "cursor.docs_write.apply",
+          target: "workspace.isolated.docs_write",
+          scope: "decision:dec:w2-prop:resume-ui",
+          requiredAuthority: "MORRIS",
+          constraints: ["PREPARE_ONLY"],
+          stopConditions: ["AUTHORITY_DENIED"],
+          requiredCapabilities: ["cap:cursor.docs_write"],
+          reversibility: "irreversible",
+          semanticFingerprint: "a".repeat(64),
+          inspectionDisclosure: {
+            action: "cursor.docs_write.apply",
+            target: "workspace.isolated.docs_write",
+            scope: "decision:dec:w2-prop:resume-ui",
+            requiredCapabilities: ["cap:cursor.docs_write"],
+            requiredAuthority: "MORRIS",
+            constraints: ["PREPARE_ONLY"],
+            stopConditions: ["AUTHORITY_DENIED"],
+            evidenceRequirements: ["git:local_commit"],
+            reversibility: "irreversible",
+          },
+        },
+      },
+    });
+    fireEvent.click(screen.getByTestId("w2-prepare-contract"));
+    await waitFor(() => {
+      expect(prepareM3Mock).toHaveBeenCalledWith({
+        projectId: "prj:w2-ui",
+        decisionId: "dec:w2-prop:resume-ui",
+      });
+    });
+  });
+
   it("labels Options and Recommendation distinctly and never auto-decides", async () => {
     proposeMock.mockResolvedValue({
       ok: true,
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/corrProof10.decisionContextContinuity.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/corrProof10.decisionContextContinuity.d0.test.ts
index 2d455172..00e1b592 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/corrProof10.decisionContextContinuity.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/corrProof10.decisionContextContinuity.d0.test.ts
@@ -1349,7 +1349,11 @@ describe("CORR-PROOF-10 Post-binding Continuity R31–R48", () => {
     );
     expect(read.ok).toBe(true);
     if (!read.ok) return;
-    expect(read.kind).toBe("none");
+    expect(read.kind).toBe("pursue_prepare_ready");
+    if (read.kind !== "pursue_prepare_ready") return;
+    expect(read.decision.decisionId).toBe(decided.decision.decisionId);
+    expect(read.decision.selectedOptionRef).toBe(PROPOSAL_SUBJECT_PURSUE_REF);
+    expect(read.decision.proposalId).toBe(proposal.proposalId);

     const second = await decideTrajectory({
       oa: runtime.oa!,
@@ -1744,7 +1748,11 @@ describe("CORR-PROOF-10 Atomic Subject Closure R49–R68", () => {
     );
     expect(read.ok).toBe(true);
     if (!read.ok) return;
-    expect(read.kind).toBe("none");
+    expect(read.kind).toBe("pursue_prepare_ready");
+    if (read.kind !== "pursue_prepare_ready") return;
+    expect(read.decision.decisionId).toBe(firstId);
+    expect(read.decision.selectedOptionRef).toBe(PROPOSAL_SUBJECT_PURSUE_REF);
+    expect(read.decision.proposalId).toBe(proposal.proposalId);

     const histBefore =
       await runtime.oa!.decisionServices.listDecisionHistory.execute({
@@ -2052,13 +2060,15 @@ describe("CORR-PROOF-10 Crash-Consistency R69–R86", () => {
     );
     expect(read.ok).toBe(true);
     if (!read.ok) return;
-    expect(read.kind).toBe("none");
+    expect(read.kind).toBe("pursue_prepare_ready");
+    if (read.kind !== "pursue_prepare_ready") return;
+    expect(read.decision.decisionId).toBe(decided.decision.decisionId);

     const afterPt = await snapshotTrajectories(runtime.oa!, projectId);
     expect(afterPt.fingerprint).toBe(beforePt.fingerprint);
   });

-  it("R70 — generic ProjectTrajectory accessible after closed stale marker", async () => {
+  it("R70 — after pursue closure without EC, PREPARE continuation owns next action (no competing trajectory instruct)", async () => {
     const { projectId, cycleInstanceId, ctx } = await seed("r70");
     const proposal = docsWriteProposal({
       projectId,
@@ -2080,20 +2090,31 @@ describe("CORR-PROOF-10 Crash-Consistency R69–R86", () => {
       forceLocalAuthority: true,
     });
     expect(decided.ok).toBe(true);
+    if (!decided.ok) return;
     await reactivateStalePendingMarker(proposal);
     resetF2ProposalStoreForTests();

     const before = await snapshotTrajectories(runtime.oa!, projectId);
     const traj = await proposeW2OptionsForProject(runtime, projectId);
-    expect(traj.ok).toBe(true);
-    if (!traj.ok) return;
-    expect(traj.decisionSubjectMode).toBe("project_trajectory");
-    expect(traj.proposedTrajectory).not.toBeNull();
-    expect(
-      traj.options.some((o) => o.optionRef === GOVERNED_OPTION_REF),
-    ).toBe(true);
+    expect(traj.ok).toBe(false);
+    if (traj.ok) return;
+    expect(traj.code).toBe("PREPARE_CONTINUATION_OWNS_NEXT_ACTION");
+
+    const { readActiveProposalDecisionSubject } = await import(
+      "@/features/project-assistant/w2/activeProposalDecisionSubject"
+    );
+    const read = await readActiveProposalDecisionSubject(
+      runtime.oa!,
+      projectId,
+    );
+    expect(read.ok).toBe(true);
+    if (!read.ok) return;
+    expect(read.kind).toBe("pursue_prepare_ready");
+    if (read.kind !== "pursue_prepare_ready") return;
+    expect(read.decision.decisionId).toBe(decided.decision.decisionId);
+
     const after = await snapshotTrajectories(runtime.oa!, projectId);
-    expect(after.count).toBeGreaterThan(before.count);
+    expect(after.fingerprint).toBe(before.fingerprint);
   });

   it("R71/R72 — closed A + stale A does not neutralize pending B", async () => {
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
index 3ac63c8d..288a7f1d 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
@@ -483,10 +483,21 @@ export function TrajectorySurface({
       setSubjectReadStatus("ready");
       return;
     }
+    if (result.kind === "pursue_prepare_ready") {
+      // Restart resume: durable pursue HD owns PREPARE — no OptionSet, no reinstruction.
+      setOptionSet(null);
+      setPendingReinstruction(null);
+      setDecision(result.decision);
+      setDecided(null);
+      setError(null);
+      setSubjectReadStatus("ready");
+      return;
+    }
     setPendingReinstruction(null);
     // kind === "none" — authoritative Proposal Decision Subject absence.
     // Clear stale Proposal-backed OptionSet; preserve generic ProjectTrajectory
-    // OptionSet. Do NOT clear HumanDecision / decided / EC state here.
+    // OptionSet. Do NOT clear HumanDecision / decided / EC state here —
+    // except when no prepare-ready continuation either (decision may be stale session).
     setOptionSet((current) => {
       if (!current) return null;
       const proposalBacked =
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts b/projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
index f1b4a1dc..3441de6c 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
@@ -22,6 +22,7 @@ import {
   projectCursorPrepareOnly,
   projectExecutionContractInspectionDisclosure,
 } from "@/lib/oa/execution-contract";
+import { isOaIdentifier } from "@/lib/oa/execution-contract/domain/invariants";
 import type { F2ContextSnapshot } from "../f2/types";
 import {
   isProposalSubjectOptionRef,
@@ -29,6 +30,31 @@ import {
 } from "../w2/proposalSubjectOptions";
 import { BOUNDED_DOCS_WRITE_GIT_EVIDENCE_REQUIREMENTS } from "./boundedDocsWriteM3ResolutionProfile";

+/**
+ * EC.evidenceRequirements must be OA identifiers (`prefix:value`).
+ * Nora DecisionBasis often carries free-text validation expectations here —
+ * those belong in inputs, not as contract identifier SoT.
+ * For docs_write, fall back to the canonical bounded git evidence set
+ * (same default as when the basis omits the field entirely).
+ */
+function resolveEvidenceRequirementsForContract(input: {
+  docsWriteIntent: boolean;
+  raw: string[] | undefined;
+}): string[] | undefined {
+  const raw = input.raw;
+  if (raw && raw.length > 0 && raw.every(isOaIdentifier)) {
+    return [...raw];
+  }
+  if (input.docsWriteIntent) {
+    return [...BOUNDED_DOCS_WRITE_GIT_EVIDENCE_REQUIREMENTS];
+  }
+  if (raw && raw.length > 0) {
+    const valid = raw.filter(isOaIdentifier);
+    return valid.length > 0 ? valid : undefined;
+  }
+  return undefined;
+}
+
 export type PrepareM3Deps = {
   decisionServices: DecisionServices;
   authorityResolver: MemoryAuthorityResolver;
@@ -209,12 +235,13 @@ function fieldsFromBasis(basis: DecisionBasis, decisionId: string) {
       : eb.expectedOutcome
         ? [eb.expectedOutcome]
         : undefined;
-  const evidenceRequirements =
-    eb.evidenceRequirements && eb.evidenceRequirements.length > 0
-      ? [...eb.evidenceRequirements]
-      : docsWriteIntent
-        ? [...BOUNDED_DOCS_WRITE_GIT_EVIDENCE_REQUIREMENTS]
-        : undefined;
+  const evidenceRequirements = resolveEvidenceRequirementsForContract({
+    docsWriteIntent,
+    raw:
+      eb.evidenceRequirements && eb.evidenceRequirements.length > 0
+        ? [...eb.evidenceRequirements]
+        : undefined,
+  });
   return {
     action,
     target,
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
index e1d65d24..cd6b6cfb 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
@@ -135,6 +135,13 @@ export async function w2ReadActiveDecisionSubjectAction(input: {
       recoverableProposalIds: read.recoverableProposalIds,
     };
   }
+  if (read.kind === "pursue_prepare_ready") {
+    return {
+      ok: true,
+      kind: "pursue_prepare_ready",
+      decision: read.decision,
+    };
+  }
   return {
     ok: true,
     kind: "bound_awaiting_decision",
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/activeProposalDecisionSubject.ts b/projects/sfia-studio/app/features/project-assistant/w2/activeProposalDecisionSubject.ts
index df57d207..a9fca932 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/activeProposalDecisionSubject.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/activeProposalDecisionSubject.ts
@@ -30,7 +30,11 @@ import {
   type PresentedOptionSetBinding,
   W2_PRESENTED_OPTION_SET_KIND,
 } from "./presentedOptionSet";
-import type { TrajectoryOptionSetDto } from "./types";
+import { readPrepareReadyProposalPursueContinuation } from "./prepareReadyProposalPursueContinuation";
+import type {
+  TrajectoryDecisionRecordDto,
+  TrajectoryOptionSetDto,
+} from "./types";

 export type EpistemicReadFailure = {
   readonly ok: false;
@@ -57,6 +61,15 @@ export type ActiveProposalDecisionSubject =
       readonly presented: PresentedOptionSetBinding;
       readonly optionSet: TrajectoryOptionSetDto;
     }
+  | {
+      /**
+       * Checkpoint E resume — Proposal subject already closed by DecisionRef,
+       * but durable pursue HD + DecisionBasis remain PREPARE-ready (no EC).
+       */
+      readonly ok: true;
+      readonly kind: "pursue_prepare_ready";
+      readonly decision: TrajectoryDecisionRecordDto;
+    }
   | EpistemicReadFailure;

 type EpistemicItemLike = {
@@ -241,7 +254,8 @@ export async function findActiveAwaitingProposalPresentedOptionSet(
  * Authority order:
  * 1. bound awaiting PresentedOptionSet
  * 2. effective pending markers (DecisionRef-closed proposalIds shadowed)
- * 3. none
+ * 3. durable pursue PREPARE continuation (HD + basis, no EC)
+ * 4. none
  */
 export async function readActiveProposalDecisionSubject(
   oa: RuntimeOaStack,
@@ -310,6 +324,26 @@ export async function readActiveProposalDecisionSubject(
     };
   }

+  // Subject closed (DecisionRef) but pursue HD still PREPARE-ready — restart resume.
+  const prepareReady = await readPrepareReadyProposalPursueContinuation({
+    oa,
+    projectId,
+  });
+  if (!prepareReady.ok) {
+    return {
+      ok: false,
+      code: "EPISTEMIC_READ_FAILED",
+      message: prepareReady.message,
+    };
+  }
+  if (prepareReady.kind === "pursue_prepare_ready") {
+    return {
+      ok: true,
+      kind: "pursue_prepare_ready",
+      decision: prepareReady.decision,
+    };
+  }
+
   return { ok: true, kind: "none" };
 }

diff --git a/projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts b/projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts
index 63ced39a..b9248eb6 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts
@@ -222,6 +222,14 @@ export async function proposeTrajectoryOptions(
     }
     return { ok: true, ...activeSubject.optionSet };
   }
+  if (activeSubject.kind === "pursue_prepare_ready") {
+    return {
+      ok: false,
+      code: "PREPARE_CONTINUATION_OWNS_NEXT_ACTION",
+      message:
+        "Une décision pursue durable attend la préparation du contrat d'exécution — aucune nouvelle instruction d'options.",
+    };
+  }
   if (
     activeSubject.kind === "pending_reinstruction_required" &&
     !opaqueProposalIdEarly
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/types.ts b/projects/sfia-studio/app/features/project-assistant/w2/types.ts
index 42a4372d..923e7762 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/types.ts
@@ -230,6 +230,11 @@ export type ActiveDecisionSubjectReadResult =
       readonly kind: "bound_awaiting_decision";
       readonly optionSet: TrajectoryOptionSetDto;
     }
+  | {
+      readonly ok: true;
+      readonly kind: "pursue_prepare_ready";
+      readonly decision: TrajectoryDecisionRecordDto;
+    }
   | W2Failure;

 /**

=== NEW FILE: prepareReadyProposalPursueContinuation.ts ===
/**
 * Checkpoint E resume — durable pursue HumanDecision → PREPARE continuation.
 *
 * After DecisionRef closes a Proposal OptionSet, `readActiveProposalDecisionSubject`
 * correctly returns `none` (subject already decided). Restart must still surface
 * PREPARE when the durable pursue HD + DecisionBasis remain valid and no EC
 * exists for that decision — without ProposalStore or a new HumanDecision.
 *
 * Composed exclusively from existing OA reads (listDecisionHistory,
 * listExecutionContractHistory, readLiveProjectContext). No new persistence.
 */

import {
  readLiveProjectContext,
  type RuntimeOaStack,
} from "@/lib/vertical-slice-runtime";
import type { HumanDecision } from "@/lib/oa/decision";
import { PROPOSAL_SUBJECT_PURSUE_REF } from "./proposalSubjectOptions";
import type { TrajectoryDecisionRecordDto } from "./types";

export type PrepareReadyProposalPursueContinuation =
  | { readonly ok: true; readonly kind: "none" }
  | {
      readonly ok: true;
      readonly kind: "pursue_prepare_ready";
      readonly decision: TrajectoryDecisionRecordDto;
    }
  | {
      readonly ok: false;
      readonly code: string;
      readonly message: string;
    };

function projectToDecisionDto(
  decision: HumanDecision,
): TrajectoryDecisionRecordDto | null {
  if (decision.status !== "accepted") return null;
  if (decision.selectedOptionId !== PROPOSAL_SUBJECT_PURSUE_REF) return null;
  const basis = decision.decisionBasis;
  if (!basis || basis.sourceType !== "proposal") return null;
  const proposalId = basis.sourceRef?.trim();
  if (!proposalId || !proposalId.startsWith("prop:")) return null;
  return {
    decisionId: decision.decisionId,
    selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
    actorRole: "Pilote",
    authorityClass: "morris",
    statusLabel: "DÉCISION HUMAINE PRISE",
    capturedAt: decision.effectiveAt,
    decisionBasisLinked: true,
    reservesText:
      decision.reservations?.map((r) => r.statement).join("\n") || null,
    proposalId,
  };
}

/**
 * Mirror prepareM3FromDecision CONTEXT_STALE gates that block PREPARE.
 * Missing doctrineDigest on basis is allowed (same as prepare path).
 */
export function isPursueDecisionBasisCurrentForPrepare(input: {
  readonly decision: HumanDecision;
  readonly liveDoctrineDigest: string;
  readonly liveLpsVersion: number;
}): boolean {
  const basis = input.decision.decisionBasis;
  if (!basis) return false;
  const ctx = basis.proposalContext;
  if (
    ctx.doctrineDigest !== undefined &&
    ctx.doctrineDigest !== input.liveDoctrineDigest
  ) {
    return false;
  }
  if (ctx.lpsVersion > input.liveLpsVersion) {
    return false;
  }
  return true;
}

function decisionHasAssociatedContract(
  decisionId: string,
  contracts: ReadonlyArray<{
    readonly decisionRefs?: readonly string[] | null;
    readonly status: string;
  }>,
): boolean {
  for (const contract of contracts) {
    const refs = contract.decisionRefs ?? [];
    if (!refs.includes(decisionId)) continue;
    // Any associated contract means PREPARE identity may already exist —
    // EC continuity / rematerialize owns the next step.
    return true;
  }
  return false;
}

/**
 * Newest accepted proposal-pursue HD with linked basis, current vs live LPS/
 * doctrine, and no associated ExecutionContract → PREPARE continuation DTO.
 */
export async function readPrepareReadyProposalPursueContinuation(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
}): Promise<PrepareReadyProposalPursueContinuation> {
  const { oa, projectId } = input;
  if (!projectId.startsWith("prj:")) {
    return {
      ok: false,
      code: "PROJECT_INVALID",
      message: "Identifiant de projet invalide — reprise PREPARE refusée.",
    };
  }

  const live = await readLiveProjectContext(oa, projectId);
  if (!live.ok) {
    return { ok: false, code: live.code, message: live.message };
  }

  const decisionsResult =
    await oa.decisionServices.listDecisionHistory.execute({ projectId });
  if (!decisionsResult.ok) {
    return {
      ok: false,
      code: decisionsResult.error.detailCode,
      message:
        decisionsResult.error.message ??
        "Historique des décisions illisible — reprise PREPARE refusée.",
    };
  }

  const contractsResult =
    await oa.executionContractServices.listExecutionContractHistory.execute({
      projectId,
    });
  if (!contractsResult.ok) {
    return {
      ok: false,
      code: contractsResult.error.detailCode,
      message:
        contractsResult.error.message ??
        "Historique des contrats illisible — reprise PREPARE refusée.",
    };
  }

  const ordered = [...decisionsResult.decisions].sort((a, b) =>
    a.effectiveAt < b.effectiveAt ? 1 : a.effectiveAt > b.effectiveAt ? -1 : 0,
  );

  for (const decision of ordered) {
    if (decision.projectId !== projectId) continue;
    if (
      decisionHasAssociatedContract(decision.decisionId, contractsResult.contracts)
    ) {
      continue;
    }
    if (
      !isPursueDecisionBasisCurrentForPrepare({
        decision,
        liveDoctrineDigest: live.context.doctrineDigest,
        liveLpsVersion: live.context.lpsVersion,
      })
    ) {
      continue;
    }
    const dto = projectToDecisionDto(decision);
    if (!dto) continue;
    return { ok: true, kind: "pursue_prepare_ready", decision: dto };
  }

  return { ok: true, kind: "none" };
}

=== NEW FILE: checkpointE.prepareResume.d0.test.ts ===
/**
 * Checkpoint E resume — durable pursue HD → PREPARE after restart.
 * ProposalStore wiped; no EC; same decisionId; instruct not required.
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  getProposal,
  resetF2ProposalStoreForTests,
  saveProposal,
  F2_PROCESS_LOCAL_NOTICE,
} from "@/features/project-assistant/f2/proposalStore";
import type { ProposalDto } from "@/features/project-assistant/f2/types";
import { F2_ARTIFACT_MATERIALIZATION_OPERATION } from "@/features/project-assistant/f2/f2CanonicalOperations";
import { readActiveProposalDecisionSubject } from "@/features/project-assistant/w2/activeProposalDecisionSubject";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { PROPOSAL_SUBJECT_PURSUE_REF } from "@/features/project-assistant/w2/proposalSubjectOptions";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import {
  computeProposalSubjectDigest,
  sealProposalExecutionBasis,
} from "@/features/project-assistant/w2/resolveProposalDecisionSubject";
import { writePendingDecisionSubjectMarker } from "@/features/project-assistant/w2/pendingDecisionSubjectMarker";
import { isPursueDecisionBasisCurrentForPrepare } from "@/features/project-assistant/w2/prepareReadyProposalPursueContinuation";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  currentF2Context,
  seedQualifiedProject,
  tempProductDbPath,
} from "./w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import { setConversationProviderForTests } from "@/lib/platform/ai";

const TARGET_PATH =
  "projects/sfia-studio/.sandbox/product-journey-e2e-real-01.md";

function docsWriteProposal(input: {
  projectId: string;
  lpsId: string;
  lpsVersion: number;
  doctrineDigest: string;
  activeCycleInstanceId: string;
  proposalId?: string;
}): ProposalDto {
  const proposalId = input.proposalId ?? `prop:f2:ckpt-e-${Date.now()}`;
  return saveProposal({
    proposalId,
    status: "DECISION_REQUIRED",
    rephrasedRequest: "Matérialiser la fiche Markdown",
    objective: "Matérialiser le livrable Markdown du cycle actif",
    cycleTypeId: "cyc:delivery",
    recommendedProfile: "Critical",
    rationale: "Continuation Artifact du cycle actif",
    scope: "docs_write borné — cycle actif",
    outOfScope: ["nouveau cycle", "REAL"],
    activatedBlocks: [],
    expectedOutcome: "Fichier sandbox matérialisé",
    sources: ["nora"],
    risks: [],
    reservations: [],
    stopConditions: ["AUCUNE EXÉCUTION"],
    morrisGateRequired: true,
    nextPossibleStep: "Instruire les options sur ce sujet",
    contextSnapshot: {
      projectId: input.projectId,
      lpsId: input.lpsId,
      lpsVersion: input.lpsVersion,
      doctrineDigest: input.doctrineDigest,
      activeCycleInstanceId: input.activeCycleInstanceId,
      ckcResolutionRef: "ckcres:w2-harness",
    },
    processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
    executionForbidden: true,
    noExecutingStatus: true,
    agentBinding: "NOT_AVAILABLE",
    requestedOperation: F2_ARTIFACT_MATERIALIZATION_OPERATION,
    executionIntent: {
      intentKind: "docs_write",
      artifactType: null,
      targetRepositoryRef: "mcleland147/sfia-workspace",
      targetPath: TARGET_PATH,
      scopeIn: ["projects/sfia-studio/.sandbox"],
      scopeOut: ["git"],
      expectedOutputs: ["markdown"],
      requiredCapabilities: ["cap:cursor.docs_write"],
      validationExpectations: [],
      evidenceRequirements: [],
      requestedOperation: F2_ARTIFACT_MATERIALIZATION_OPERATION,
      reversibilityExpectation: "reversible",
      artifactBrief: "Fiche Markdown",
      contentRequirements: [],
      exitRequirementKinds: [],
    },
  });
}

async function markPending(
  oa: RuntimeOaStack,
  proposal: ProposalDto,
): Promise<void> {
  const sealed = sealProposalExecutionBasis(proposal);
  const subjectDigest = computeProposalSubjectDigest(
    sealed,
    proposal.proposalId,
  );
  const written = await writePendingDecisionSubjectMarker({
    oa,
    projectId: proposal.contextSnapshot.projectId,
    proposalId: proposal.proposalId,
    subjectDigest,
    lpsId: proposal.contextSnapshot.lpsId,
    lpsVersion: proposal.contextSnapshot.lpsVersion,
    doctrineDigest: proposal.contextSnapshot.doctrineDigest,
  });
  expect(written.ok).toBe(true);
}

describe("Checkpoint E — pursue PREPARE resume after restart", () => {
  let runtime: RuntimeApplicationService;
  let dbPath: string;

  beforeEach(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    dbPath = tempProductDbPath("ckpt-e-resume.sqlite");
    runtime = bootW2Runtime({ productDbPath: dbPath, idPrefix: "ckpt-e" });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    setConversationProviderForTests(null);
    cleanupW2TempDirs();
  });

  async function seed() {
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Critical",
      suffix: "resume",
    });
    const ctx = await currentF2Context(runtime, seeded.projectId);
    return { ...seeded, ctx };
  }

  async function proposeWith(projectId: string, proposalId: string) {
    const oa = runtime.oa!;
    const qualification = await resolveW2QualificationInputs({ oa, projectId });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) throw new Error("qualification failed");
    return proposeTrajectoryOptions({
      oa,
      projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
      proposalId,
    });
  }

  it("T1 — wipe ProposalStore + no EC → pursue_prepare_ready same decisionId; instruct blocked", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:ckpt-e-resume-t1",
    });
    await markPending(runtime.oa!, proposal);
    const proposed = await proposeWith(projectId, proposal.proposalId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;

    const decided = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) return;
    const decisionId = decided.decision.decisionId;

    const hdBefore =
      await runtime.oa!.decisionServices.listDecisionHistory.execute({
        projectId,
      });
    expect(hdBefore.ok).toBe(true);
    if (!hdBefore.ok) return;
    const decisionCount = hdBefore.decisions.length;

    resetF2ProposalStoreForTests();
    expect(getProposal(proposal.proposalId)).toBeNull();

    const contracts =
      await runtime.oa!.executionContractServices.listExecutionContractHistory.execute(
        { projectId },
      );
    expect(contracts.ok).toBe(true);
    if (!contracts.ok) return;
    expect(contracts.contracts.length).toBe(0);

    const read = await readActiveProposalDecisionSubject(
      runtime.oa!,
      projectId,
    );
    expect(read.ok).toBe(true);
    if (!read.ok) return;
    expect(read.kind).toBe("pursue_prepare_ready");
    if (read.kind !== "pursue_prepare_ready") return;
    expect(read.decision.decisionId).toBe(decisionId);
    expect(read.decision.proposalId).toBe(proposal.proposalId);
    expect(read.decision.decisionBasisLinked).toBe(true);
    expect(read.decision.selectedOptionRef).toBe(PROPOSAL_SUBJECT_PURSUE_REF);

    const qualification = await resolveW2QualificationInputs({
      oa: runtime.oa!,
      projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;
    const blocked = await proposeTrajectoryOptions({
      oa: runtime.oa!,
      projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
      proposalId: null,
    });
    expect(blocked.ok).toBe(false);
    if (blocked.ok) return;
    expect(blocked.code).toBe("PREPARE_CONTINUATION_OWNS_NEXT_ACTION");

    const hdAfter =
      await runtime.oa!.decisionServices.listDecisionHistory.execute({
        projectId,
      });
    expect(hdAfter.ok).toBe(true);
    if (!hdAfter.ok) return;
    expect(hdAfter.decisions.length).toBe(decisionCount);
    expect(getProposal(proposal.proposalId)).toBeNull();
  });

  it("T2 — doctrine-stale basis gate refuses PREPARE continuation", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:ckpt-e-resume-stale",
    });
    await markPending(runtime.oa!, proposal);
    const proposed = await proposeWith(projectId, proposal.proposalId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    const decided = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) return;

    const loaded = await runtime.oa!.decisionServices.getHumanDecision.execute({
      decisionId: decided.decision.decisionId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) return;
    const basis = loaded.decision.decisionBasis!;
    expect(
      isPursueDecisionBasisCurrentForPrepare({
        decision: loaded.decision,
        liveDoctrineDigest: ctx.doctrineDigest,
        liveLpsVersion: ctx.lpsVersion + 10,
      }),
    ).toBe(true);
    expect(
      isPursueDecisionBasisCurrentForPrepare({
        decision: {
          ...loaded.decision,
          decisionBasis: {
            ...basis,
            proposalContext: {
              ...basis.proposalContext,
              doctrineDigest:
                "sha256:deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef",
            },
          },
        },
        liveDoctrineDigest: ctx.doctrineDigest,
        liveLpsVersion: ctx.lpsVersion,
      }),
    ).toBe(false);
  });
});
```

---

## 7. Tests

| Suite | Result |
|---|---|
| `m3ExecutionContractPrepare` CHECKPOINT-E evidence coerce + regression | PASS |
| `checkpointE.prepareResume.d0` T1 resume same decisionId + instruct blocked; T2 stale gate | PASS |
| `trajectorySurface.ui` CHECKPOINT-E resume CTA + prepare calls same decisionId | PASS |
| corrProof10 R35/R56/R69/R70 updated | PASS |
| `tsc --noEmit` | PASS |

No REAL. No Execute. No campaign PREPARE click.

---

## 8. Preuves no-duplicate / same decisionId

- Resume returns durable `decisionId` from `listDecisionHistory` (newest valid pursue)
- Propose/instruct blocked while prepare-ready → no new OptionSet / no new HD
- ProposalStore remains empty after wipe in T1
- Campaign HD unchanged: `dec:w2-prop:0e4b08bb-5b5c-4c99-b57f-d49234abb693 | accepted | opt:proposal-subject:pursue`

---

## 9. DB campagne (avant handoff Morris)

| Item | Value |
|---|---|
| Absolute DB | `…/pje2e-real-01/product/oa-product.sqlite` |
| mtime/size | Sep 17 20:56:44 2026 581632 |
| contracts | **0** |
| attempts | **0** |
| Manual mutation | NONE |
| Studio | restarted :3020 same `SFIA_STUDIO_PRODUCT_DB_PATH` |
| PREPARE on campaign | **NOT clicked** (Morris gate) |

---

## 10. Cursor REAL spawn count

**0**

---

## 11. Réserves

- Resume exposes PREPARE when no associated EC for the HD; if a superseded EC exists, rematerialize path still owns (any contract association suppresses prepare_ready)
- Nora free-text evidenceRequirements debt remains (mapped at PREPARE only)
- package-lock dirty préexistant hors scope

---

## 12. Gates Morris

1. Reload Project UI → CTA « Préparer le contrat d’exécution » must appear for same HD
2. Morris MAY click PREPARE (same decisionId)
3. No instruct-options, no new Proposal/HD, no Execute/REAL until further gate
4. No project commit/push/PR/merge in this lot

---

## 13. Verdict

**CHECKPOINT E RESUME BLOCKER FIXED — MORRIS MAY RETRY PREPARE**
