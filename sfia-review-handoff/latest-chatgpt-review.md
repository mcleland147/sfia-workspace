# RECOVERY-OWNERSHIP-PRESTART-FAILURE-01 — CORR-03 FULL Review Pack
## GOVERNED recovery claim must fail-closed on lineage corruption
## Cycle 8 — Delivery / implémentation · CRITICAL

Generated: 2026-09-26T11:46:20Z
Macro: RECOVERY-OWNERSHIP-PRESTART-FAILURE-01
Correction: CORR-03 — GOVERNED RECOVERY CLAIM MUST FAIL-CLOSED ON LINEAGE CORRUPTION
Cycle: 8 — Delivery / implémentation
Profile: CRITICAL
Morris GO: construction GO remains consumed; CORR-03 bounded inside macro.
Project commit/push/PR/merge: **NOT performed / NOT authorized**

---

## 1. GIT TRUTH

| Field | Value |
|-------|-------|
| Branch | `feat/sfia-studio-recovery-ownership-prestart-failure-01` |
| HEAD / origin/main | `7c184b9444d0b3f2dadc62e7ae9e9178e2c5c17d` |
| Main moved | NO |
| Retained | macro + CORR-01 + CORR-02 local changes |
| Unrelated Product dirt | NONE |
| Project commit | **NONE** — LOCAL / NOT COMMITTED / NOT PUSHED |

Prior CORR-02 handoff tip: `c9bcbeec…` / blob `509bfc6e…`

---

## 2. C5 ROOT CAUSE

CORR-02 added `assertGovernedRecoveryLineage()`, but the reader could bypass it via early `kind=none` returns:

- missing DecisionBasis → kind=none
- `sourceType != trajectory_option` → kind=none
- `selectedOptionId != GOVERNED` → kind=none

Valid only when durable truth coherently describes a **non-recovery** tip.

Invalid when either trajectory or decision **claims GOVERNED**.

Principle: **CORRUPTED / CONTRADICTORY GOVERNED AUTHORITY ≠ NO RECOVERY SUBJECT**.

---

## 3. ABSENT vs CORRUPTED GOVERNED CLAIM

After loading current trajectory + decidedBy HumanDecision:

```
trajectoryClaimsGoverned = decidedOptionRef === GOVERNED
decisionClaimsGoverned   = selectedOptionId === GOVERNED
```

| Case | Condition | Result |
|------|-----------|--------|
| A — ABSENT | neither claims GOVERNED | `kind=none` allowed |
| B — CLAIMED | either claims GOVERNED | full lineage mandatory; mismatch → `ok=false` / `RECOVERY_DECISION_CONTINUITY_FAILED` |

Never collapse Case B to `kind=none`.

---

## 4. EXACT READER ROUTING

1. load current trajectory
2. no `decidedByDecisionRef` → kind=none
3. load HD → failure = fail closed
4. validate project/status
5. compute claim flags
6. neither claims GOVERNED → kind=none
7. **GOVERNED claimed from here**
8. basis absent → FAIL
9. `sourceType != trajectory_option` → FAIL
10. `assertGovernedRecoveryLineage()`
11. candidate-row cross-check
12. resolve RecoveryExecutionBinding
13. recovery context absent (coherent GOVERNED without post-Evidence) → kind=none (RC-06)
14. recovery context present + binding unresolved → FAIL
15. owned only if all proof coherent

---

## 5. READER-LEVEL NEGATIVE / POSITIVE TESTS

File: `recoveryOwnership.corr03.governedClaim.d0.test.ts`

| ID | Scenario | Expected |
|----|----------|----------|
| A | traj GOVERNED + decision non-GOVERNED | `ok=false` RECOVERY_DECISION_CONTINUITY_FAILED |
| B | traj non-GOVERNED + decision GOVERNED | fail closed |
| C | both GOVERNED + DecisionBasis missing | fail closed |
| D | both GOVERNED + sourceType≠trajectory_option | fail closed |
| E | both coherently non-GOVERNED (BOUNDED) | `kind=none` |
| F | coherent GOVERNED recovery CLASS 2 | `kind=owned` · sourceStatus=confirmed |

UI: `CORR-03 C5 — corrupted GOVERNED continuity fail-closed` → error visible · no generic PREPARE · no successor PREPARE · no synthetic HD.

---

## 6. PRIOR PROOFS RETAINED

| Gate | Status |
|------|--------|
| C1 absolute fail-closed | retained |
| C3 one-way finite rehydration | retained |
| C4 pure lineage assert | retained |
| CLASS 1 / CLASS 2 / StudyFlow-equiv | retained |
| RC-06 no-recovery generic | retained |

---

## 7. AUTHORITY DTO RESERVE

**PRE-EXISTING DOCTRINAL PRESENTATION DEBT — RUNTIME PILOT HD DTO AUTHORITY LABEL**

`TrajectoryDecisionRecordDto.authorityClass = "morris"` unchanged. Not widened.

---

## 8. FILES MODIFIED

| Path | Change |
|------|--------|
| `w2/readRecoveryOwnedDecisionContinuity.ts` | C5 GOVERNED-claim routing |
| `recoveryOwnership.corr03.governedClaim.d0.test.ts` | **NEW** reader A–F |
| `trajectorySurface.ui.test.tsx` | corrupted GOVERNED UI proof |

No new store/dependency. Forbidden paths untouched.

---

## 9. TARGETED VALIDATION

6 files · **91 passed**

---

## 10. FULL VALIDATION

| Gate | Result |
|------|--------|
| typecheck | PASS |
| lint | PASS |
| build | PASS |
| Vitest | **430 files passed \| 17 skipped · 4744 tests passed \| 137 skipped · 0 failed** |
| Modeled governance | **73 / 0** |

Pre-CORR-03 baseline: 429 / 4737. Delta: +1 file · +7 tests.

---

## 11. FAKE / REAL

Deterministic Product proof. No Cursor REAL / StudyFlow natural HD / managed clone / GO REAL / runtime v3 ADOPTED.

---

## 12. ANTI-CLAIMS

Do NOT claim: StudyFlow natural HD completed · E2E REAL · Cursor REAL · docs_write REAL · managed clone fixed · runtime v3 ADOPTED · Product globally READY · PR/merge ready.

---

## 13. FINAL VERDICT

**RECOVERY OWNERSHIP PRE-START FAILURE CORR-03 —
GOVERNED CLAIM ROUTING FAIL-CLOSED /
DETERMINISTICALLY PROVEN /
READY FOR CHATGPT FINAL REVIEW**

Project Git: LOCAL / NOT COMMITTED / NOT PUSHED

---

## 14. EXPLOITABLE DIFFS

### 14.1 C5 routing snippet

// CORR-03 / C5 — ABSENT vs CORRUPTED GOVERNED CLAIM.
  const trajectoryClaimsGoverned =
    trajectory.decidedOptionRef === GOVERNED_OPTION_REF;
  const decisionClaimsGoverned =
    decision.selectedOptionId === GOVERNED_OPTION_REF;

  if (!trajectoryClaimsGoverned && !decisionClaimsGoverned) {
    // Coherent non-GOVERNED tip — not recovery-owned restart path.
    return { ok: true, kind: "none" };
  }

  // From here: durable truth claims GOVERNED on at least one side.
  // CORRUPTED / CONTRADICTORY GOVERNED AUTHORITY ≠ NO RECOVERY SUBJECT.
  const basis = decision.decisionBasis;
  if (!basis) {
    return continuityFailed(
      "Claim GOVERNED durable sans DecisionBasis — lignée recovery fail-closed.",
    );
  }
  if (basis.sourceType !== "trajectory_option") {
    return continuityFailed(
      "Claim GOVERNED durable avec DecisionBasis hors trajectory_option — lignée recovery fail-closed.",
    );
  }

  const lineage = assertGovernedRecoveryLineage({
    projectId,
    trajectory,
    decisionId: decision.decisionId,
    selectedOptionId: decision.selectedOptionId,
    basis,
  });
  if (lineage) return lineage;

  // Durable cross-check: candidate version row belongs to same aggregate.
  const candidateRow = await oa.cycleServices.getTrajectoryVersion.execute({
    projectId,
    version: basis.trajectoryContext!.candidateVersion,
  });
  if (!candidateRow.ok) {
    return continuityFailed(
      "Version candidate DecisionBasis illisible — lignée recovery fail-closed.",
    );
  }
  if (candidateRow.trajectory.trajectoryId !== trajectory.trajectoryId) {
    return continuityFailed(
      "Version candidate DecisionBasis hors trajectoire tip — lignée recovery fail-closed.",
    );
  }

  const bound = await resolveRecoveryExecutionBinding({
    oa,
    projectId,
    decisionId: decision.decisionId,
  });
  if (!bound.ok) {
    return fail(
      bound.code,
      bound.message ||
        "Binding recovery illisible pour la HumanDecision tip — fail-closed.",
    );
  }
  if (bound.recoveryContextPresent !== true) {
    // Coherent GOVERNED tip without post-Evidence recovery subject —
    // not the recovery-owned restart path (RC-06 / other GOVERNED contexts).
    return { ok: true, kind: "none" };
  }
  if (
    !bound.binding ||
    bound.binding.kind !== "post_evidence_recovery_execution"
  ) {
    return continuityFailed(
      "Sujet recovery connu mais binding non résolu après restart — fail-closed (pas de PREPARE générique).",
    );
  }

### 14.2 FULL — readRecoveryOwnedDecisionContinuity.ts

diff --git a/projects/sfia-studio/app/features/project-assistant/w2/readRecoveryOwnedDecisionContinuity.ts b/projects/sfia-studio/app/features/project-assistant/w2/readRecoveryOwnedDecisionContinuity.ts
new file mode 100644
index 00000000..79474a2d
--- /dev/null
+++ b/projects/sfia-studio/app/features/project-assistant/w2/readRecoveryOwnedDecisionContinuity.ts
@@ -0,0 +1,329 @@
+/**
+ * CORR-01 / C2 + CORR-02 / C4 + CORR-03 / C5 — recover recovery-owned
+ * HumanDecision after hard UI restart, with durable Decision ↔ ProjectTrajectory
+ * lineage integrity and GOVERNED-claim fail-closed routing.
+ *
+ * Durable source (no new store):
+ *   current ProjectTrajectory
+ *   → decidedByDecisionRef
+ *   → HumanDecision (accepted)
+ *   → DecisionBasis trajectory_option + trajectoryContext
+ *   → selectedOptionId = GOVERNED_OPTION_REF
+ *   → RecoveryExecutionBinding
+ *
+ * CORR-03: CORRUPTED / CONTRADICTORY GOVERNED AUTHORITY ≠ NO RECOVERY SUBJECT.
+ * kind=none only when neither trajectory nor decision claims GOVERNED.
+ *
+ * READ-ONLY. Never PREPARE / Inspect / Execute.
+ */
+
+import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
+import type { DecisionBasis } from "@/lib/oa/decision/domain/types";
+import type { ProjectTrajectory } from "@/lib/oa/cycle/domain/types";
+import { GOVERNED_OPTION_REF } from "./trajectoryOptions";
+import {
+  resolveRecoveryExecutionBinding,
+  type RecoveryExecutionBinding,
+} from "./resolveRecoveryExecutionBinding";
+import type {
+  DecidedTrajectoryDto,
+  TrajectoryDecisionRecordDto,
+  W2Failure,
+} from "./types";
+
+export type RecoveryOwnedDecisionContinuityResult =
+  | {
+      readonly ok: true;
+      readonly kind: "none";
+    }
+  | {
+      readonly ok: true;
+      readonly kind: "owned";
+      readonly decision: TrajectoryDecisionRecordDto;
+      readonly trajectory: DecidedTrajectoryDto;
+      readonly binding: RecoveryExecutionBinding;
+    }
+  | W2Failure;
+
+function fail(code: string, message: string): W2Failure {
+  return { ok: false, code, message };
+}
+
+function continuityFailed(message: string): W2Failure {
+  return fail("RECOVERY_DECISION_CONTINUITY_FAILED", message);
+}
+
+function toDecisionDto(input: {
+  readonly decisionId: string;
+  readonly selectedOptionRef: string;
+  readonly capturedAt: string;
+  readonly reservesText: string | null;
+}): TrajectoryDecisionRecordDto {
+  return {
+    decisionId: input.decisionId,
+    selectedOptionRef: input.selectedOptionRef,
+    actorRole: "Pilote",
+    // PRE-EXISTING DOCTRINAL PRESENTATION DEBT — RUNTIME PILOT HD DTO
+    // AUTHORITY LABEL. Not corrected in this macro (separate qualification).
+    authorityClass: "morris",
+    statusLabel: "DÉCISION HUMAINE PRISE",
+    capturedAt: input.capturedAt,
+    decisionBasisLinked: true,
+    reservesText: input.reservesText,
+    proposalId: null,
+  };
+}
+
+/**
+ * CORR-02 / C4 — prove the durable HD is the exact authority that produced
+ * the current ProjectTrajectory tip.
+ *
+ * Version rule (from promoteDecidedTrajectory): promotion mutates the candidate
+ * in place (same version, status candidate → validated/active). Therefore
+ * `basis.trajectoryContext.candidateVersion === trajectory.version`.
+ */
+export function assertGovernedRecoveryLineage(input: {
+  readonly projectId: string;
+  readonly trajectory: ProjectTrajectory;
+  readonly decisionId: string;
+  readonly selectedOptionId: string;
+  readonly basis: DecisionBasis;
+}): W2Failure | null {
+  const { projectId, trajectory, decisionId, selectedOptionId, basis } = input;
+
+  if (trajectory.decidedByDecisionRef !== decisionId) {
+    return continuityFailed(
+      "decidedByDecisionRef ≠ HumanDecision tip — lignée recovery incohérente.",
+    );
+  }
+
+  if (trajectory.decidedOptionRef !== GOVERNED_OPTION_REF) {
+    return continuityFailed(
+      "Trajectoire tip decidedOptionRef ≠ GOVERNED — lignée recovery fail-closed.",
+    );
+  }
+
+  if (selectedOptionId !== GOVERNED_OPTION_REF) {
+    return continuityFailed(
+      "HumanDecision selectedOptionId ≠ GOVERNED — lignée recovery fail-closed.",
+    );
+  }
+
+  if (selectedOptionId !== trajectory.decidedOptionRef) {
+    return continuityFailed(
+      "HumanDecision selectedOptionId ≠ trajectory.decidedOptionRef — lignée recovery fail-closed.",
+    );
+  }
+
+  if (basis.projectId !== projectId) {
+    return continuityFailed(
+      "DecisionBasis.projectId hors projet — lignée recovery fail-closed.",
+    );
+  }
+
+  const ctx = basis.trajectoryContext;
+  if (!ctx) {
+    return continuityFailed(
+      "DecisionBasis.trajectoryContext absent — lignée recovery fail-closed.",
+    );
+  }
+
+  if (ctx.trajectoryId !== trajectory.trajectoryId) {
+    return continuityFailed(
+      "trajectoryContext.trajectoryId ≠ trajectoire tip — lignée recovery fail-closed.",
+    );
+  }
+
+  if (ctx.selectedOptionRef !== GOVERNED_OPTION_REF) {
+    return continuityFailed(
+      "trajectoryContext.selectedOptionRef ≠ GOVERNED — lignée recovery fail-closed.",
+    );
+  }
+
+  if (!ctx.optionRefs.includes(GOVERNED_OPTION_REF)) {
+    return continuityFailed(
+      "trajectoryContext.optionRefs n'inclut pas GOVERNED — lignée recovery fail-closed.",
+    );
+  }
+
+  if (ctx.selectedOptionRef !== selectedOptionId) {
+    return continuityFailed(
+      "trajectoryContext.selectedOptionRef ≠ décision — lignée recovery fail-closed.",
+    );
+  }
+
+  // promoteDecidedTrajectory keeps candidate version identity on the tip.
+  if (
+    typeof ctx.candidateVersion !== "number" ||
+    ctx.candidateVersion < 1 ||
+    ctx.candidateVersion !== trajectory.version
+  ) {
+    return continuityFailed(
+      "trajectoryContext.candidateVersion ≠ version tip promue — lignée recovery fail-closed.",
+    );
+  }
+
+  if (trajectory.status !== "validated" && trajectory.status !== "active") {
+    return continuityFailed(
+      "Trajectoire tip recovery hors statut décidé/courant — continuité refusée.",
+    );
+  }
+
+  return null;
+}
+
+/**
+ * Resolve whether the current ProjectTrajectory tip is a recovery-owned
+ * GOVERNED HumanDecision with a coherent RecoveryExecutionBinding.
+ */
+export async function readRecoveryOwnedDecisionContinuity(input: {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+}): Promise<RecoveryOwnedDecisionContinuityResult> {
+  const { oa, projectId } = input;
+  if (!projectId.startsWith("prj:")) {
+    return fail(
+      "CONTRACT_INVALID",
+      "Identifiant de projet invalide — continuité recovery refusée.",
+    );
+  }
+
+  const current = await oa.cycleServices.getCurrentTrajectory.execute({
+    projectId,
+  });
+  if (!current.ok) {
+    return fail(
+      current.error.detailCode,
+      current.error.message ??
+        "Lecture de la trajectoire courante impossible — continuité recovery refusée.",
+    );
+  }
+
+  const trajectory = current.trajectory;
+  const decisionRef = trajectory.decidedByDecisionRef?.trim() || null;
+  if (!decisionRef) {
+    return { ok: true, kind: "none" };
+  }
+
+  const loaded = await oa.decisionServices.getHumanDecision.execute({
+    decisionId: decisionRef,
+  });
+  if (!loaded.ok) {
+    return continuityFailed(
+      "HumanDecision recovery tip introuvable — fail-closed (pas de PREPARE générique, pas de nouvelle décision).",
+    );
+  }
+  const decision = loaded.decision;
+  if (decision.projectId !== projectId) {
+    return continuityFailed(
+      "HumanDecision tip hors projet — continuité recovery refusée.",
+    );
+  }
+  if (decision.status !== "accepted") {
+    return continuityFailed(
+      "HumanDecision tip non effective — continuité recovery refusée.",
+    );
+  }
+
+  // CORR-03 / C5 — ABSENT vs CORRUPTED GOVERNED CLAIM.
+  const trajectoryClaimsGoverned =
+    trajectory.decidedOptionRef === GOVERNED_OPTION_REF;
+  const decisionClaimsGoverned =
+    decision.selectedOptionId === GOVERNED_OPTION_REF;
+
+  if (!trajectoryClaimsGoverned && !decisionClaimsGoverned) {
+    // Coherent non-GOVERNED tip — not recovery-owned restart path.
+    return { ok: true, kind: "none" };
+  }
+
+  // From here: durable truth claims GOVERNED on at least one side.
+  // CORRUPTED / CONTRADICTORY GOVERNED AUTHORITY ≠ NO RECOVERY SUBJECT.
+  const basis = decision.decisionBasis;
+  if (!basis) {
+    return continuityFailed(
+      "Claim GOVERNED durable sans DecisionBasis — lignée recovery fail-closed.",
+    );
+  }
+  if (basis.sourceType !== "trajectory_option") {
+    return continuityFailed(
+      "Claim GOVERNED durable avec DecisionBasis hors trajectory_option — lignée recovery fail-closed.",
+    );
+  }
+
+  const lineage = assertGovernedRecoveryLineage({
+    projectId,
+    trajectory,
+    decisionId: decision.decisionId,
+    selectedOptionId: decision.selectedOptionId,
+    basis,
+  });
+  if (lineage) return lineage;
+
+  // Durable cross-check: candidate version row belongs to same aggregate.
+  const candidateRow = await oa.cycleServices.getTrajectoryVersion.execute({
+    projectId,
+    version: basis.trajectoryContext!.candidateVersion,
+  });
+  if (!candidateRow.ok) {
+    return continuityFailed(
+      "Version candidate DecisionBasis illisible — lignée recovery fail-closed.",
+    );
+  }
+  if (candidateRow.trajectory.trajectoryId !== trajectory.trajectoryId) {
+    return continuityFailed(
+      "Version candidate DecisionBasis hors trajectoire tip — lignée recovery fail-closed.",
+    );
+  }
+
+  const bound = await resolveRecoveryExecutionBinding({
+    oa,
+    projectId,
+    decisionId: decision.decisionId,
+  });
+  if (!bound.ok) {
+    return fail(
+      bound.code,
+      bound.message ||
+        "Binding recovery illisible pour la HumanDecision tip — fail-closed.",
+    );
+  }
+  if (bound.recoveryContextPresent !== true) {
+    // Coherent GOVERNED tip without post-Evidence recovery subject —
+    // not the recovery-owned restart path (RC-06 / other GOVERNED contexts).
+    return { ok: true, kind: "none" };
+  }
+  if (
+    !bound.binding ||
+    bound.binding.kind !== "post_evidence_recovery_execution"
+  ) {
+    return continuityFailed(
+      "Sujet recovery connu mais binding non résolu après restart — fail-closed (pas de PREPARE générique).",
+    );
+  }
+
+  const status = trajectory.status as "validated" | "active";
+
+  return {
+    ok: true,
+    kind: "owned",
+    decision: toDecisionDto({
+      decisionId: decision.decisionId,
+      selectedOptionRef: GOVERNED_OPTION_REF,
+      capturedAt: decision.effectiveAt,
+      reservesText:
+        decision.reservations && decision.reservations.length > 0
+          ? decision.reservations.map((r) => r.statement).join("; ")
+          : null,
+    }),
+    trajectory: {
+      trajectoryId: trajectory.trajectoryId,
+      version: trajectory.version,
+      status,
+      statusLabel: "TRAJECTOIRE DÉCIDÉE / COURANTE",
+      isCurrent: true,
+      decidedByDecisionRef: decision.decisionId,
+      decidedOptionRef: GOVERNED_OPTION_REF,
+    },
+    binding: bound.binding,
+  };
+}

### 14.3 NEW — recoveryOwnership.corr03.governedClaim.d0.test.ts

diff --git a/projects/sfia-studio/app/__tests__/project-assistant/recoveryOwnership.corr03.governedClaim.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/recoveryOwnership.corr03.governedClaim.d0.test.ts
new file mode 100644
index 00000000..52e56ed9
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/project-assistant/recoveryOwnership.corr03.governedClaim.d0.test.ts
@@ -0,0 +1,494 @@
+/**
+ * CORR-03 / C5 — reader-routing: GOVERNED claim vs absence.
+ * Exercises readRecoveryOwnedDecisionContinuity (not only pure assert).
+ * ZERO REAL. ZERO StudyFlow mutation.
+ * @vitest-environment node
+ */
+import { afterEach, beforeEach, describe, expect, it } from "vitest";
+import { setConversationProviderForTests } from "@/lib/platform/ai";
+import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
+import { LOCAL_PILOTE_ACTOR, registerLocalMorrisGateAuthority } from "@/lib/oa/decision";
+import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
+import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
+import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
+import {
+  BOUNDED_OPTION_REF,
+  GOVERNED_OPTION_REF,
+} from "@/features/project-assistant/w2/trajectoryOptions";
+import { readRecoveryOwnedDecisionContinuity } from "@/features/project-assistant/w2/readRecoveryOwnedDecisionContinuity";
+import {
+  materializeProductOutcomeFromAttempt,
+  w3bEvidenceIdentity,
+} from "@/features/project-assistant/w2/materializeW3bProductTerminal";
+import { resolvePostEvidenceRecoveryContext } from "@/features/project-assistant/w2/resolvePostEvidenceRecoveryContext";
+import {
+  serializeW3cRecommendationPayload,
+  w3cRecommendationEpistemicId,
+  type W3cRecommendationPayload,
+} from "@/features/project-assistant/w2/w3cPostEvidenceLoop";
+import { SFIA_STUDIO_SYSTEM_FACTUAL_WRITER } from "@/features/project-assistant/f3/systemFactualWriter";
+import { BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS } from "@/features/project-assistant/f3/boundedDocsWriteM3ResolutionProfile";
+import { clearW3bBoundaryArm } from "@/lib/vertical-slice-runtime/w3bE2eBoundaryControl";
+import {
+  M4_BOUNDED_DOCS_WRITE_ACTION,
+  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
+  M4_BOUNDED_DOCS_WRITE_TARGET,
+} from "@/lib/oa/execution-attempt";
+import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
+import {
+  bootW2Runtime,
+  cleanupW2TempDirs,
+  seedQualifiedProject,
+  tempProductDbPath,
+} from "./w2Harness";
+
+const TARGET_PATH =
+  "projects/sfia-studio/.sandbox/prestart-corr03-c5.md";
+
+async function proposeAndDecide(
+  oa: RuntimeOaStack,
+  projectId: string,
+  selectedOptionRef: string,
+) {
+  const qualification = await resolveW2QualificationInputs({ oa, projectId });
+  if (!qualification.ok) throw new Error("qual");
+  const proposed = await proposeTrajectoryOptions({
+    oa,
+    projectId,
+    ...qualification.qualification.inputs,
+    packagePin: qualification.qualification.packagePin,
+    objective: qualification.qualification.objective,
+    projectTitle: qualification.qualification.projectTitle,
+  });
+  if (!proposed.ok) throw new Error(`propose: ${proposed.code}`);
+  const decided = await decideTrajectory({
+    oa,
+    projectId,
+    optionSetRef: proposed.optionSetRef,
+    options: proposed.options,
+    recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
+    selectedOptionRef,
+    trajectoryId: proposed.proposedTrajectory!.trajectoryId,
+    candidateVersion: proposed.proposedTrajectory!.version,
+    forceLocalAuthority: true,
+  });
+  if (!decided.ok) throw new Error(`decide: ${decided.code}`);
+  return { proposed, decisionId: decided.decision.decisionId };
+}
+
+async function sealW3cRecover(input: {
+  oa: RuntimeOaStack;
+  projectId: string;
+  attemptId: string;
+  ecId: string;
+  evidenceId: string;
+  reviewBundleId: string;
+}) {
+  const epistemicId = w3cRecommendationEpistemicId(input.evidenceId);
+  const payload: W3cRecommendationPayload = {
+    kind: "recover",
+    headline: "Échec docs_write — recovery",
+    rationale: "Attempt failed; Evidence available; no business success.",
+    nextStep: "recovery_diagnose_or_replan",
+    requiresHumanDecision: true,
+    authority: "none",
+    gateConsumed: false,
+    decisionCreated: false,
+    attemptAutoLaunchNextCycle: false,
+    recommendNextGateStatus: null,
+    nextActionCode: null,
+    evidenceId: input.evidenceId,
+    attemptId: input.attemptId,
+    reviewBundleId: input.reviewBundleId,
+    claimEvaluationId: null,
+    productOutcome: "FAIL",
+    analysisText: null,
+    analysisUnavailableReason: "test_seed",
+    analysisProviderId: null,
+    noraInvoked: false,
+    lpsVersion: null,
+  };
+  await input.oa.cycleServices!.updateEpistemicState.execute({
+    projectId: input.projectId,
+    items: [
+      {
+        epistemicItemId: epistemicId,
+        type: "Recommendation",
+        statement: serializeW3cRecommendationPayload(payload),
+        status: "active",
+        source: `w3c-post-evidence:${input.evidenceId}`,
+        relatedObjects: [
+          input.projectId,
+          input.attemptId,
+          input.evidenceId,
+          input.reviewBundleId,
+          input.ecId,
+        ],
+      },
+    ],
+    createdBy: SFIA_STUDIO_SYSTEM_FACTUAL_WRITER,
+    correlationId: `cor:w3c-seed:${input.attemptId}`,
+  });
+}
+
+async function buildDocsWriteContract(input: {
+  oa: RuntimeOaStack;
+  projectId: string;
+  cycleInstanceId?: string | null;
+  decisionId: string;
+  ecId: string;
+  targetPath?: string;
+}) {
+  const authority = registerLocalMorrisGateAuthority({
+    authorityResolver: input.oa.authorityResolver,
+    scope: "studio.gcec.docs_write",
+    issuedAt: input.oa.clock.nowIso(),
+    evidenceId: `evd:corr03:${input.ecId}`,
+    forceEnable: true,
+  });
+  if (!authority.ok) throw new Error(`authority: ${authority.code}`);
+  const built =
+    await input.oa.executionContractServices!.buildExecutionContract.execute({
+      executionContractId: input.ecId,
+      projectId: input.projectId,
+      cycleInstanceId: input.cycleInstanceId ?? undefined,
+      decisionRefs: [input.decisionId],
+      action: M4_BOUNDED_DOCS_WRITE_ACTION,
+      target: M4_BOUNDED_DOCS_WRITE_TARGET,
+      scope: "studio.gcec.docs_write",
+      inputs: {
+        targetPath: input.targetPath ?? TARGET_PATH,
+        targetRepositoryRef: "mcleland147/sfia-workspace",
+        repositoryRef: "mcleland147/sfia-workspace",
+        pathAllowlist: ["projects/sfia-studio/.sandbox/", "projects/studyflow/"],
+        contentRequirements: ["markdown heading", "acceptance criteria"],
+        baseHeadSha: "a".repeat(40),
+        artifactBrief: "Note de cadrage — CORR-03 C5 proof",
+        artifactType: "functional_design",
+        artifactWriteMode: "CREATE",
+      },
+      requiredCapabilities: [M4_BOUNDED_DOCS_WRITE_CAPABILITY],
+      requiredAuthority: "MORRIS",
+      constraints: [
+        "BOUNDED DOCS-WRITE",
+        "PATH_ALLOWLIST_ONLY",
+        "TEXT_DOCS_ONLY",
+        "NO_DELETE",
+        "NO_COMMIT",
+        "NO_GIT_REMOTE",
+        "NO_PUSH",
+        "NO_PR",
+        "NO_MERGE",
+        "GATE D REQUIRED",
+        "NO WILDCARD",
+        "PREPARE_ONLY",
+      ],
+      stopConditions: [
+        "AUTHORITY_DENIED",
+        "CONTEXT_STALE",
+        "DECISION_NOT_CURRENT",
+      ],
+      evidenceRequirements: [...BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS],
+      reversibility: "reversible",
+      idempotencyKey: `idem:corr03-${input.ecId}`,
+      correlationId: `cor:corr03-${input.ecId}`,
+      actor: LOCAL_PILOTE_ACTOR,
+      authorityEvidenceId: authority.evidenceId,
+    });
+  if (!built.ok) {
+    throw new Error(
+      `build failed: ${built.error.detailCode} ${built.error.message ?? ""}`,
+    );
+  }
+  return built.contract;
+}
+
+async function materializeAndEnsureRecovery(input: {
+  oa: RuntimeOaStack;
+  projectId: string;
+  attemptId: string;
+  ecId: string;
+}) {
+  const ids = w3bEvidenceIdentity(input.attemptId);
+  const materialized = await materializeProductOutcomeFromAttempt({
+    oa: input.oa,
+    projectId: input.projectId,
+    attemptId: input.attemptId,
+  });
+  let recovered = await resolvePostEvidenceRecoveryContext({
+    oa: input.oa,
+    projectId: input.projectId,
+  });
+  if (!recovered.ok || !recovered.context) {
+    await sealW3cRecover({
+      oa: input.oa,
+      projectId: input.projectId,
+      attemptId: input.attemptId,
+      ecId: input.ecId,
+      evidenceId: ids.evidenceId,
+      reviewBundleId: ids.reviewBundleId,
+    });
+    if (!materialized.ok) {
+      await materializeProductOutcomeFromAttempt({
+        oa: input.oa,
+        projectId: input.projectId,
+        attemptId: input.attemptId,
+      });
+    }
+    recovered = await resolvePostEvidenceRecoveryContext({
+      oa: input.oa,
+      projectId: input.projectId,
+    });
+  }
+  if (!recovered.ok || !recovered.context) {
+    if (
+      materialized.ok &&
+      typeof materialized.product.evidenceId === "string" &&
+      typeof materialized.product.reviewBundleId === "string"
+    ) {
+      await sealW3cRecover({
+        oa: input.oa,
+        projectId: input.projectId,
+        attemptId: input.attemptId,
+        ecId: input.ecId,
+        evidenceId: materialized.product.evidenceId,
+        reviewBundleId: materialized.product.reviewBundleId,
+      });
+      recovered = await resolvePostEvidenceRecoveryContext({
+        oa: input.oa,
+        projectId: input.projectId,
+      });
+    }
+  }
+  if (!recovered.ok || !recovered.context) {
+    throw new Error("RecoveryContext unavailable after seal");
+  }
+  return recovered.context;
+}
+
+describe("CORR-03 C5 — readRecoveryOwnedDecisionContinuity GOVERNED claim routing", () => {
+  beforeEach(() => {
+    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
+    process.env.OPS1_E2E_ALLOW_DIRTY_PRINCIPAL = "1";
+    delete process.env.SFIA_STUDIO_CURSOR_REAL_AUTHORIZED;
+    setConversationProviderForTests(null);
+    resetF2ProposalStoreForTests();
+    clearW3bBoundaryArm();
+  });
+
+  afterEach(() => {
+    clearW3bBoundaryArm();
+    resetF2ProposalStoreForTests();
+    setConversationProviderForTests(null);
+    cleanupW2TempDirs();
+  });
+
+  it("A — traj GOVERNED + decision non-GOVERNED → fail closed", async () => {
+    const db = tempProductDbPath("corr03-a.sqlite");
+    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "c3a" });
+    const seeded = await seedQualifiedProject(runtime, { suffix: "a" });
+    const oa = runtime.oa!;
+    const { decisionId } = await proposeAndDecide(
+      oa,
+      seeded.projectId,
+      GOVERNED_OPTION_REF,
+    );
+    const hd = await oa.decisionServices.getHumanDecision.execute({
+      decisionId,
+    });
+    expect(hd.ok).toBe(true);
+    if (!hd.ok) return;
+    const corrupted = structuredClone(hd.decision);
+    corrupted.selectedOptionId = BOUNDED_OPTION_REF;
+    await oa.decisionServices.decisions.save(corrupted);
+
+    const result = await readRecoveryOwnedDecisionContinuity({
+      oa,
+      projectId: seeded.projectId,
+    });
+    expect(result.ok).toBe(false);
+    if (result.ok) return;
+    expect(result.code).toBe("RECOVERY_DECISION_CONTINUITY_FAILED");
+  });
+
+  it("B — traj non-GOVERNED + decision GOVERNED → fail closed", async () => {
+    const db = tempProductDbPath("corr03-b.sqlite");
+    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "c3b" });
+    const seeded = await seedQualifiedProject(runtime, { suffix: "b" });
+    const oa = runtime.oa!;
+    await proposeAndDecide(oa, seeded.projectId, GOVERNED_OPTION_REF);
+    const traj = await oa.cycleServices.trajectories.findCurrentByProjectId(
+      seeded.projectId,
+    );
+    expect(traj).toBeTruthy();
+    const corrupted = structuredClone(traj!);
+    corrupted.decidedOptionRef = BOUNDED_OPTION_REF;
+    await oa.cycleServices.trajectories.save(corrupted);
+
+    const result = await readRecoveryOwnedDecisionContinuity({
+      oa,
+      projectId: seeded.projectId,
+    });
+    expect(result.ok).toBe(false);
+    if (result.ok) return;
+    expect(result.code).toBe("RECOVERY_DECISION_CONTINUITY_FAILED");
+  });
+
+  it("C — both GOVERNED + DecisionBasis missing → fail closed", async () => {
+    const db = tempProductDbPath("corr03-c.sqlite");
+    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "c3c" });
+    const seeded = await seedQualifiedProject(runtime, { suffix: "c" });
+    const oa = runtime.oa!;
+    const { decisionId } = await proposeAndDecide(
+      oa,
+      seeded.projectId,
+      GOVERNED_OPTION_REF,
+    );
+    const hd = await oa.decisionServices.getHumanDecision.execute({
+      decisionId,
+    });
+    expect(hd.ok).toBe(true);
+    if (!hd.ok) return;
+    const stripped = structuredClone(hd.decision);
+    delete stripped.decisionBasis;
+    await oa.decisionServices.decisions.save(stripped);
+
+    const result = await readRecoveryOwnedDecisionContinuity({
+      oa,
+      projectId: seeded.projectId,
+    });
+    expect(result.ok).toBe(false);
+    if (result.ok) return;
+    expect(result.code).toBe("RECOVERY_DECISION_CONTINUITY_FAILED");
+  });
+
+  it("D — both GOVERNED + basis.sourceType != trajectory_option → fail closed", async () => {
+    const db = tempProductDbPath("corr03-d.sqlite");
+    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "c3d" });
+    const seeded = await seedQualifiedProject(runtime, { suffix: "d" });
+    const oa = runtime.oa!;
+    const { decisionId } = await proposeAndDecide(
+      oa,
+      seeded.projectId,
+      GOVERNED_OPTION_REF,
+    );
+    const hd = await oa.decisionServices.getHumanDecision.execute({
+      decisionId,
+    });
+    expect(hd.ok).toBe(true);
+    if (!hd.ok) return;
+    const drifted = structuredClone(hd.decision);
+    drifted.decisionBasis = {
+      ...drifted.decisionBasis!,
+      sourceType: "proposal",
+    };
+    await oa.decisionServices.decisions.save(drifted);
+
+    const result = await readRecoveryOwnedDecisionContinuity({
+      oa,
+      projectId: seeded.projectId,
+    });
+    expect(result.ok).toBe(false);
+    if (result.ok) return;
+    expect(result.code).toBe("RECOVERY_DECISION_CONTINUITY_FAILED");
+  });
+
+  it("E — both coherently non-GOVERNED → kind=none", async () => {
+    const db = tempProductDbPath("corr03-e.sqlite");
+    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "c3e" });
+    const seeded = await seedQualifiedProject(runtime, { suffix: "e" });
+    const oa = runtime.oa!;
+    await proposeAndDecide(oa, seeded.projectId, BOUNDED_OPTION_REF);
+
+    const result = await readRecoveryOwnedDecisionContinuity({
+      oa,
+      projectId: seeded.projectId,
+    });
+    expect(result.ok).toBe(true);
+    if (!result.ok) return;
+    expect(result.kind).toBe("none");
+  });
+
+  it("F — coherent GOVERNED recovery → kind=owned", async () => {
+    const db = tempProductDbPath("corr03-f.sqlite");
+    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "c3f" });
+    const seeded = await seedQualifiedProject(runtime, { suffix: "f" });
+    const oa = runtime.oa!;
+    const { decisionId: seedDecisionId } = await proposeAndDecide(
+      oa,
+      seeded.projectId,
+      GOVERNED_OPTION_REF,
+    );
+    const attemptId = `xat:w3a:c3f-${Math.random().toString(16).slice(2, 10)}`;
+    const ecId = `xct:m3-res:c3f-${Math.random().toString(16).slice(2, 10)}`;
+    const built = await buildDocsWriteContract({
+      oa,
+      projectId: seeded.projectId,
+      cycleInstanceId: seeded.cycleInstanceId,
+      decisionId: seedDecisionId,
+      ecId,
+    });
+    const confirmed = {
+      ...built,
+      status: "confirmed" as const,
+      version: built.version + (built.status === "confirmed" ? 0 : 1),
+    };
+    if (
+      confirmed.version !== built.version ||
+      confirmed.status !== built.status
+    ) {
+      await oa.executionContractServices!.contracts.save(confirmed);
+    }
+    const live =
+      (await oa.executionContractServices!.contracts.findById(ecId)) ??
+      confirmed;
+    const now = oa.clock.nowIso();
+    await oa.executionAttemptServices!.attempts.create({
+      schemaVersion: "0.2.0-oa",
+      attemptId,
+      executionContractId: ecId,
+      executionContractVersion: live.version,
+      selectedAgentRef: "agt:m4.cursor.bounded_docs_write",
+      status: "failed",
+      idempotencyKey: `idem:att:${attemptId}`,
+      correlationId: `cor:att:${attemptId}`,
+      version: 1,
+      createdAt: now,
+      failedAt: now,
+      stopReason:
+        "REAL_LAUNCH_FAILED: REAL_WORKSPACE_INVALID:base_head_sha_missing",
+      irreversibleEffectsPossible: false,
+      provenance: {
+        schemaVersion: "0.1.0-oa",
+        provenanceRecordId: `prv:${attemptId}`,
+        actor: LOCAL_PILOTE_ACTOR,
+        source: "system",
+        timestamp: now,
+        correlationId: `cor:att:${attemptId}`,
+      },
+    } as never);
+    await materializeAndEnsureRecovery({
+      oa,
+      projectId: seeded.projectId,
+      attemptId,
+      ecId,
+    });
+    const recovery = await proposeAndDecide(
+      oa,
+      seeded.projectId,
+      GOVERNED_OPTION_REF,
+    );
+
+    const result = await readRecoveryOwnedDecisionContinuity({
+      oa,
+      projectId: seeded.projectId,
+    });
+    expect(result.ok).toBe(true);
+    if (!result.ok) return;
+    expect(result.kind).toBe("owned");
+    if (result.kind !== "owned") return;
+    expect(result.decision.decisionId).toBe(recovery.decisionId);
+    expect(result.binding.sourceStatus).toBe("confirmed");
+    expect(result.binding.sourceExecutionContractId).toBe(ecId);
+  });
+});
