# RECOVERY-OWNERSHIP-PRESTART-FAILURE-01 — CORR-02 FULL Review Pack
## Rehydration stability + durable Decision lineage integrity
## Cycle 8 — Delivery / implémentation · CRITICAL

Generated: 2026-09-26T11:36:08Z
Macro: RECOVERY-OWNERSHIP-PRESTART-FAILURE-01
Correction: CORR-02 — REHYDRATION STABILITY + DURABLE DECISION LINEAGE INTEGRITY
Cycle: 8 — Delivery / implémentation
Profile: CRITICAL
Morris GO: construction GO remains consumed; CORR-02 bounded inside macro.
Project commit/push/PR/merge: **NOT performed / NOT authorized**

---

## 1. GIT TRUTH

| Field | Value |
|-------|-------|
| Branch | `feat/sfia-studio-recovery-ownership-prestart-failure-01` |
| HEAD / origin/main | `7c184b9444d0b3f2dadc62e7ae9e9178e2c5c17d` |
| Main moved | NO |
| Unrelated Product dirt | NONE |
| Retained | macro + CORR-01 local changes |
| Project commit | **NONE** — LOCAL / NOT COMMITTED / NOT PUSHED |

Prior CORR-01 handoff tip: `112a6a3e…` / blob `2d79ed8a…`

---

## 2. C3 LOOP ANALYSIS

Risk: `rehydrateRecoveryOwnedDecisionContinuity` depended on `decision` and called `setDecision(new DTO)` on every owned result. A real Server Action returns a freshly serialized object each call → identity change → callback recreate → effect re-fire → continuous recovery reads / setDecision cycle.

Invariant required: **RECOVERY REHYDRATION IS ONE-WAY RESTORATION, NOT CONTINUOUS SYNC.**

---

## 3. C3 LOOP-PREVENTION MECHANISM

Minimal preferred behavior implemented:

```
if (decision != null) {
  return; // restart seam no longer owns state
}
```

Rationale:
- post-click path already sets decision;
- hard reload starts with `decision == null` → restore once;
- after restore, restart seam exits without rewrite;
- no polling / no new sync infrastructure.

Effect may re-run once after restore (callback identity), then early-returns — finite/stable.

---

## 4. C3 CLONE-PER-CALL UI PROOF

Test: `CORR-02 C3 — clone-per-call restart is one-way / finite`

- `mockImplementation(async () => structuredClone(ownedTemplate))`
- binding load also clone-per-call (durable loadBinding after setDecision)
- Asserts: decision + binding + CTA · no prepareContract · no prepareRecovery · call count ≤ 3 · **stable after settle**

---

## 5. C4 DURABLE LINEAGE INVARIANTS

`assertGovernedRecoveryLineage` + `readRecoveryOwnedDecisionContinuity` enforce:

| # | Invariant |
|---|-----------|
| A | `trajectory.decidedByDecisionRef === decision.decisionId` |
| B | `trajectory.decidedOptionRef === GOVERNED_OPTION_REF` |
| C | `decision.selectedOptionId === GOVERNED_OPTION_REF` |
| D/E | DecisionBasis exists · `sourceType === trajectory_option` |
| F | `basis.projectId === projectId` |
| G | `basis.trajectoryContext` exists |
| H | `ctx.trajectoryId === trajectory.trajectoryId` |
| I | `ctx.selectedOptionRef === GOVERNED` |
| J | `ctx.optionRefs` contains GOVERNED |
| K | trajectory status `validated\|active` |
| + | `ctx.selectedOptionRef === selectedOptionId` |
| + | candidate row same trajectoryId |

### Version-coherence rule

Derived from `promoteDecidedTrajectory`: promotion mutates the candidate **in place** (same version, status → validated/active). Therefore:

`basis.trajectoryContext.candidateVersion === trajectory.version`

Do **not** invent a later tip version. Cross-check via `getTrajectoryVersion(candidateVersion)` same `trajectoryId`.

Mismatch / corrupted authority → `ok=false` / `RECOVERY_DECISION_CONTINUITY_FAILED` (never `kind=none`, never synthetic HD, never PREPARE).

Non-GOVERNED tip with trajectory_option basis → `kind=none` (not recovery-owned path). Missing HD → fail-closed preserved.

---

## 6. C4 NEGATIVE TESTS

File: `recoveryOwnership.corr02.lineage.d0.test.ts` (9 tests)

1. decidedOptionRef ≠ GOVERNED → fail
2. selectedOptionId ≠ decidedOptionRef / ≠ GOVERNED → fail
3. trajectoryContext missing → fail
4. trajectoryId mismatch → fail
5. selectedOptionRef mismatch → fail
6. optionRefs without GOVERNED → fail
7. (+ candidateVersion ≠ tip · status not validated|active)
8. positive coherent lineage → null
9. missing HD covered by integration reader path

---

## 7. C1 REGRESSION — STILL CLOSED

Generic PREPARE ONLY when:

`ok===true && binding===null && recoveryContextPresent===false`

Retained UI proofs: EPISTEMIC_READ_FAILED · OA_STACK_UNAVAILABLE · undefined · known recovery null · binding present · RC-06 no-recovery.

---

## 8. POSITIVE RESTART + CLASS COMPAT

- CLASS 1 / CLASS 2 / StudyFlow-equiv binding preserved
- CORR-01 C2 durable: HD → no successor EC → reload → owned + `sourceStatus=confirmed`
- CORR-02 C3 clone-per-call finite restart

---

## 9. AUTHORITY DTO RESERVE

**PRE-EXISTING DOCTRINAL PRESENTATION DEBT — RUNTIME PILOT HD DTO AUTHORITY LABEL**

`TrajectoryDecisionRecordDto.authorityClass = "morris"` unchanged.
Not the durable HumanDecision authority truth. No redesign this cycle.

---

## 10. FILES MODIFIED

| Path | Change |
|------|--------|
| `w2/readRecoveryOwnedDecisionContinuity.ts` | C4 lineage + export assert |
| `TrajectorySurface.tsx` | C3 one-way `if (decision != null) return` |
| `recoveryOwnership.corr02.lineage.d0.test.ts` | **NEW** C4 negatives |
| `trajectorySurface.ui.test.tsx` | C3 clone-per-call stability |

Forbidden paths untouched. No new dependency/store.

---

## 11. TARGETED VALIDATION

5 files · **84 passed** (lineage 9 + prestart unit 11 + integration 5 + R8 6 + UI incl. C1/C3)

---

## 12. FULL VALIDATION

| Gate | Result |
|------|--------|
| typecheck | PASS |
| lint | PASS |
| build | PASS |
| Vitest | **429 files passed \| 17 skipped · 4737 tests passed \| 137 skipped · 0 failed** |
| Modeled governance | **73 / 0** |

Pre-CORR-02 baseline: 428 / 4728. Delta: +1 file · +9 tests.

---

## 13. FAKE / REAL

Deterministic Product proof. Fake only at fixtures/mocks. No Cursor REAL / StudyFlow natural HD / managed clone / GO REAL / runtime v3 ADOPTED.

---

## 14. ANTI-CLAIMS

Do NOT claim: StudyFlow natural HD completed · E2E REAL · Cursor REAL · docs_write REAL · managed clone fixed · runtime v3 ADOPTED · Product globally READY · PR/merge ready.

---

## 15. FINAL VERDICT

**RECOVERY OWNERSHIP PRE-START FAILURE CORR-02 —
REHYDRATION STABLE / DECISION LINEAGE FAIL-CLOSED /
DETERMINISTICALLY PROVEN / READY FOR CHATGPT FINAL REVIEW**

Project Git: LOCAL / NOT COMMITTED / NOT PUSHED

---

## 16. EXPLOITABLE DIFFS

### 16.1 FULL — readRecoveryOwnedDecisionContinuity.ts

diff --git a/projects/sfia-studio/app/features/project-assistant/w2/readRecoveryOwnedDecisionContinuity.ts b/projects/sfia-studio/app/features/project-assistant/w2/readRecoveryOwnedDecisionContinuity.ts
new file mode 100644
index 00000000..22bfa6b5
--- /dev/null
+++ b/projects/sfia-studio/app/features/project-assistant/w2/readRecoveryOwnedDecisionContinuity.ts
@@ -0,0 +1,323 @@
+/**
+ * CORR-01 / C2 + CORR-02 / C4 — recover recovery-owned HumanDecision after hard
+ * UI restart, with durable Decision ↔ ProjectTrajectory lineage integrity.
+ *
+ * Durable source (no new store):
+ *   current ProjectTrajectory
+ *   → decidedByDecisionRef
+ *   → HumanDecision (accepted)
+ *   → DecisionBasis trajectory_option + trajectoryContext
+ *   → selectedOptionId = GOVERNED_OPTION_REF
+ *   → RecoveryExecutionBinding
+ *
+ * The recovery HD (trajectory tip) is the authority — never the historical
+ * source EC decisionRefs. Client must not invent decision authority.
+ *
+ * CORRUPTED / MISMATCHED DURABLE AUTHORITY ≠ NO RECOVERY DECISION.
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
+  const basis = decision.decisionBasis;
+  if (!basis) {
+    // Tip exists without DecisionBasis — cannot prove trajectory_option authority.
+    // Not a recovery-owned GOVERNED claim we can safely restore.
+    return { ok: true, kind: "none" };
+  }
+  if (basis.sourceType !== "trajectory_option") {
+    // Tip is not a ProjectTrajectory option decision — not recovery-owned path.
+    return { ok: true, kind: "none" };
+  }
+
+  // Entering recovery-owned GOVERNED claim: any lineage mismatch is fail-closed
+  // (CORRUPTED ≠ ABSENT). Non-GOVERNED trajectory tips stay kind=none only when
+  // the selected option itself is not GOVERNED.
+  if (decision.selectedOptionId !== GOVERNED_OPTION_REF) {
+    return { ok: true, kind: "none" };
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
+  // Optional durable cross-check: candidate version row belongs to same aggregate.
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
+    // GOVERNED tip without a coherent post-Evidence recovery subject —
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

### 16.2 C3 — one-way rehydration snippet (TrajectorySurface)

/**
   * CORR-01 / C2 + CORR-02 / C3 — after hard reload, recover recovery-owned
   * GOVERNED HD + RecoveryExecutionBinding from durable ProjectTrajectory tip.
   * ONE-WAY restoration: once `decision` is present in this mount, do not
   * rewrite it (avoids Server-Action fresh-object → setDecision → effect loop).
   */
  const rehydrateRecoveryOwnedDecisionContinuity = useCallback(async () => {
    // CORR-02 / C3 — restart seam owns restoration only while decision is absent.
    if (decision != null) {
      return;
    }
    const result = await w2ReadRecoveryOwnedDecisionContinuityAction({
      projectId,
    });
    if (!result || typeof result !== "object") {
      setError(
        "Continuité recovery indisponible après restart — fail-closed (UNKNOWN ≠ absent).",
      );
      return;
    }
    if (!result.ok) {
      setError(result.message);
      return;
    }
    if (result.kind === "none") {
      return;
    }
    // Recovery-owned: restore HD + binding once; do not re-present OptionSet / auto-PREPARE.
    setContinuityDecisionRef(result.decision.decisionId);
    setDecision(result.decision);
    setDecided(result.trajectory);
    setRecoveryBinding(result.binding);
    setOptionSet(null);
    setPendingReinstruction(null);
    setError(null);
  }, [projectId, decision]);

### 16.3 NEW — recoveryOwnership.corr02.lineage.d0.test.ts

diff --git a/projects/sfia-studio/app/__tests__/project-assistant/recoveryOwnership.corr02.lineage.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/recoveryOwnership.corr02.lineage.d0.test.ts
new file mode 100644
index 00000000..2d00c9b4
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/project-assistant/recoveryOwnership.corr02.lineage.d0.test.ts
@@ -0,0 +1,199 @@
+/**
+ * CORR-02 / C4 — durable GOVERNED recovery lineage fail-closed (pure).
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import { assertGovernedRecoveryLineage } from "@/features/project-assistant/w2/readRecoveryOwnedDecisionContinuity";
+import { GOVERNED_OPTION_REF } from "@/features/project-assistant/w2/trajectoryOptions";
+import type { DecisionBasis } from "@/lib/oa/decision/domain/types";
+import type { ProjectTrajectory } from "@/lib/oa/cycle/domain/types";
+
+const PROJECT = "prj:corr02-lineage";
+const TRAJ = "trj:corr02";
+const DEC = "dec:corr02-gov";
+
+function baseTrajectory(
+  overrides: Partial<ProjectTrajectory> = {},
+): ProjectTrajectory {
+  return {
+    schemaVersion: "0.1.0-oa",
+    trajectoryId: TRAJ,
+    projectId: PROJECT,
+    version: 2,
+    status: "validated",
+    steps: [],
+    decidedByDecisionRef: DEC,
+    decidedOptionRef: GOVERNED_OPTION_REF,
+    ...overrides,
+  };
+}
+
+function baseBasis(
+  overrides: Partial<DecisionBasis> = {},
+  ctxOverrides: Partial<NonNullable<DecisionBasis["trajectoryContext"]>> = {},
+): DecisionBasis {
+  return {
+    sourceType: "trajectory_option",
+    sourceRef: "optset:corr02",
+    sourceDigest: "digest",
+    projectId: PROJECT,
+    proposalContext: {
+      lpsId: "lps:1",
+      lpsVersion: 1,
+    },
+    trajectoryContext: {
+      trajectoryId: TRAJ,
+      candidateVersion: 2,
+      optionRefs: [
+        "opt:trajectory:bounded-direct",
+        GOVERNED_OPTION_REF,
+      ],
+      selectedOptionRef: GOVERNED_OPTION_REF,
+      ...ctxOverrides,
+    },
+    executionBasis: {},
+    ...overrides,
+  };
+}
+
+describe("CORR-02 C4 — assertGovernedRecoveryLineage", () => {
+  it("positive — coherent tip + GOVERNED basis", () => {
+    expect(
+      assertGovernedRecoveryLineage({
+        projectId: PROJECT,
+        trajectory: baseTrajectory(),
+        decisionId: DEC,
+        selectedOptionId: GOVERNED_OPTION_REF,
+        basis: baseBasis(),
+      }),
+    ).toBeNull();
+  });
+
+  it("1 — decidedOptionRef != GOVERNED → fail closed", () => {
+    const r = assertGovernedRecoveryLineage({
+      projectId: PROJECT,
+      trajectory: baseTrajectory({
+        decidedOptionRef: "opt:trajectory:bounded-direct",
+      }),
+      decisionId: DEC,
+      selectedOptionId: GOVERNED_OPTION_REF,
+      basis: baseBasis(),
+    });
+    expect(r?.ok).toBe(false);
+    expect(r && !r.ok ? r.code : null).toBe(
+      "RECOVERY_DECISION_CONTINUITY_FAILED",
+    );
+  });
+
+  it("2 — selectedOptionId != decidedOptionRef → fail closed", () => {
+    const r = assertGovernedRecoveryLineage({
+      projectId: PROJECT,
+      trajectory: baseTrajectory(),
+      decisionId: DEC,
+      selectedOptionId: "opt:trajectory:bounded-direct",
+      basis: baseBasis(),
+    });
+    expect(r?.ok).toBe(false);
+    expect(r && !r.ok ? r.code : null).toBe(
+      "RECOVERY_DECISION_CONTINUITY_FAILED",
+    );
+  });
+
+  it("3 — trajectoryContext missing → fail closed", () => {
+    const basis = baseBasis();
+    delete (basis as { trajectoryContext?: unknown }).trajectoryContext;
+    const r = assertGovernedRecoveryLineage({
+      projectId: PROJECT,
+      trajectory: baseTrajectory(),
+      decisionId: DEC,
+      selectedOptionId: GOVERNED_OPTION_REF,
+      basis,
+    });
+    expect(r?.ok).toBe(false);
+    expect(r && !r.ok ? r.code : null).toBe(
+      "RECOVERY_DECISION_CONTINUITY_FAILED",
+    );
+  });
+
+  it("4 — trajectoryContext.trajectoryId mismatch → fail closed", () => {
+    const r = assertGovernedRecoveryLineage({
+      projectId: PROJECT,
+      trajectory: baseTrajectory(),
+      decisionId: DEC,
+      selectedOptionId: GOVERNED_OPTION_REF,
+      basis: baseBasis({}, { trajectoryId: "trj:other" }),
+    });
+    expect(r?.ok).toBe(false);
+    expect(r && !r.ok ? r.code : null).toBe(
+      "RECOVERY_DECISION_CONTINUITY_FAILED",
+    );
+  });
+
+  it("5 — trajectoryContext.selectedOptionRef mismatch → fail closed", () => {
+    const r = assertGovernedRecoveryLineage({
+      projectId: PROJECT,
+      trajectory: baseTrajectory(),
+      decisionId: DEC,
+      selectedOptionId: GOVERNED_OPTION_REF,
+      basis: baseBasis(
+        {},
+        {
+          selectedOptionRef: "opt:trajectory:bounded-direct",
+          optionRefs: [
+            "opt:trajectory:bounded-direct",
+            GOVERNED_OPTION_REF,
+          ],
+        },
+      ),
+    });
+    expect(r?.ok).toBe(false);
+    expect(r && !r.ok ? r.code : null).toBe(
+      "RECOVERY_DECISION_CONTINUITY_FAILED",
+    );
+  });
+
+  it("6 — optionRefs missing GOVERNED → fail closed", () => {
+    const r = assertGovernedRecoveryLineage({
+      projectId: PROJECT,
+      trajectory: baseTrajectory(),
+      decisionId: DEC,
+      selectedOptionId: GOVERNED_OPTION_REF,
+      basis: baseBasis(
+        {},
+        { optionRefs: ["opt:trajectory:bounded-direct"] },
+      ),
+    });
+    expect(r?.ok).toBe(false);
+    expect(r && !r.ok ? r.code : null).toBe(
+      "RECOVERY_DECISION_CONTINUITY_FAILED",
+    );
+  });
+
+  it("candidateVersion ≠ tip version → fail closed", () => {
+    const r = assertGovernedRecoveryLineage({
+      projectId: PROJECT,
+      trajectory: baseTrajectory({ version: 3 }),
+      decisionId: DEC,
+      selectedOptionId: GOVERNED_OPTION_REF,
+      basis: baseBasis({}, { candidateVersion: 2 }),
+    });
+    expect(r?.ok).toBe(false);
+    expect(r && !r.ok ? r.code : null).toBe(
+      "RECOVERY_DECISION_CONTINUITY_FAILED",
+    );
+  });
+
+  it("status not validated|active → fail closed", () => {
+    const r = assertGovernedRecoveryLineage({
+      projectId: PROJECT,
+      trajectory: baseTrajectory({ status: "candidate" }),
+      decisionId: DEC,
+      selectedOptionId: GOVERNED_OPTION_REF,
+      basis: baseBasis(),
+    });
+    expect(r?.ok).toBe(false);
+    expect(r && !r.ok ? r.code : null).toBe(
+      "RECOVERY_DECISION_CONTINUITY_FAILED",
+    );
+  });
+});
