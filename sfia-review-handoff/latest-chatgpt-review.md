# NATIVE-EXECUTION-LOOP-GREENFIELD-CONTINUITY-CORR-01 — FULL Review Pack

## 1. Date / heure

- Local: 2026-09-27 07:21:45 UTC+0200
- UTC: 2026-09-27T05:21:45Z

## 2. Macro / Cycle / Profil

- Macro: NATIVE-EXECUTION-LOOP-GREENFIELD-CONTINUITY-CORR-01
- Cycle: 8 — Delivery / implémentation
- Typologie: EVOL corrective
- Profil: CRITICAL
- Capacité v3: Native Execution Loop → Greenfield entry → trajectory continuity → recovery ownership correctness
- Milestone: post-#530 clean-room campaign PocketTasks — initial greenfield entry
- Proof ceiling: DETERMINISTIC CORRECTION PROVEN
- Runtime v3: NON ADOPTED

## 3. Morris GO consommé

GO CORRECTION CONSUMED — NATIVE EXECUTION LOOP GREENFIELD CONTINUITY / CRITICAL / DETERMINISTIC ONLY / ZERO REAL / ZERO POCKETTASKS MUTATION / NO PROJECT COMMIT

Authorized: local corrective branch, scoped production+tests, FULL pack, L3 handoff.
NOT authorized: project commit/push/PR/merge, PocketTasks mutation, Cursor REAL, Roadmap/Doctrine/C1/framing/method/prompts/workflows.

## 4. Git Truth

```
worktree: /Users/morris/Projects/sfia-workspace-nel-greenfield-continuity-01
branch: fix/sfia-studio-native-execution-loop-greenfield-continuity-01
HEAD: 4ed91f24ed00942f314bacf84f23fe3863b67edf
origin/main: 4ed91f24ed00942f314bacf84f23fe3863b67edf
base match: YES
staged: none
diff-check: PASS
previous handoff tip: a8ceadc48378a9b6974b589275511bf80428e449
previous handoff blob: ef7bc5b385e86e88a9755f28e71132ce6cfbb6f6
```

Note: primary workspace held dirty #530 residue identical to main; clean worktree created from origin/main. Agent rooted on this worktree.

### git status --short

```
 M projects/sfia-studio/app/features/project-assistant/w2/readRecoveryOwnedDecisionContinuity.ts
?? projects/sfia-studio/app/__tests__/project-assistant/greenfieldRecoveryContinuityCorr01.d0.test.ts

```

### git diff --name-status

```
M	projects/sfia-studio/app/features/project-assistant/w2/readRecoveryOwnedDecisionContinuity.ts

```

### git diff --stat

```
 .../w2/readRecoveryOwnedDecisionContinuity.ts      | 138 ++++++++++++++++++++-
 1 file changed, 137 insertions(+), 1 deletion(-)

?? projects/sfia-studio/app/__tests__/project-assistant/greenfieldRecoveryContinuityCorr01.d0.test.ts
```

## 5. Root cause / PocketTasks observation

REAL PocketTasks clean-room UI showed: "Trajectory was not found."

Structural cause on main (#530):
readRecoveryOwnedDecisionContinuity → getCurrentTrajectory → TRAJECTORY_NOT_FOUND → W2Failure → recoveryOwnedContinuityReadStatus=error → continuityMutationBlocked → greenfield journey blocked.

## 6. Why blind TRAJECTORY_NOT_FOUND => kind=none is FORBIDDEN

| Case | Meaning | Required result |
|------|---------|-----------------|
| A fresh never | Project+LPS, no trajectory row, no GOVERNED HD | kind=none |
| B candidate | history_without_current, status=candidate, undecided | kind=none |
| C broken | validated/active or GOVERNED HD without current | fail-closed |
| D unknown | reader throw / presence unknown | fail-closed |
| E current | existing #530 recovery path | unchanged |

Blind mapping would mask PROJECT_NOT_FOUND, collapse UNKNOWN into absence, and hide broken GOVERNED continuity.

## 7. Architecture retained

KEEP / reuse: resolveTrajectoryBootstrapPresence, hasAnyByProjectId, assertGovernedRecoveryLineage, getProject, getCurrentLivingProjectState, listDecisionHistory.

NO second engine/store/aggregate/table. NO TrajectorySurface production change. NO Auth S1 / PREPARE changes.

## 8. Semantics implemented

On TRAJECTORY_NOT_FOUND after Project exists:
1. resolveTrajectoryBootstrapPresence
2. unknown / contradiction current → fail-closed
3. LPS trajectoryId orphan / validated|active / decided refs → fail-closed
4. accepted GOVERNED + DecisionBasis trajectory_option without current → fail-closed
5. else never or legitimate undecided candidate → kind=none

Current trajectory present → previous #530 path STRICTLY preserved.

## 9. Files

Production only:
- projects/sfia-studio/app/features/project-assistant/w2/readRecoveryOwnedDecisionContinuity.ts

Tests new:
- projects/sfia-studio/app/__tests__/project-assistant/greenfieldRecoveryContinuityCorr01.d0.test.ts

NOT modified: TrajectorySurface.tsx, greenfieldLifecycleBootstrap.ts, trajectory repos, prepareExecutionContractFromW2Decision, Auth S1, actions.ts

## 10. FULL production diff

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/readRecoveryOwnedDecisionContinuity.ts b/projects/sfia-studio/app/features/project-assistant/w2/readRecoveryOwnedDecisionContinuity.ts
index 6fd458a0..553dd7fb 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/readRecoveryOwnedDecisionContinuity.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/readRecoveryOwnedDecisionContinuity.ts
@@ -1,6 +1,7 @@
 /**
  * CORR-01 / C2 + CORR-02 / C4 + CORR-03 / C5 +
- * NATIVE-EXECUTION-LOOP-POST-EVIDENCE-RECOVERY-CORR-01 —
+ * NATIVE-EXECUTION-LOOP-POST-EVIDENCE-RECOVERY-CORR-01 +
+ * NATIVE-EXECUTION-LOOP-GREENFIELD-CONTINUITY-CORR-01 —
  * recover recovery-owned HumanDecision after hard UI restart.
  *
  * Durable source (no new store):
@@ -19,12 +20,19 @@
  * kind=none only when neither trajectory nor decision claims GOVERNED,
  * OR when GOVERNED tip has no post-Evidence recovery subject.
  *
+ * GREENFIELD-CONTINUITY: absence of CURRENT is multi-semantic —
+ *   never / legitimate undecided candidate → kind=none
+ *   broken GOVERNED / LPS orphan / unknown reader → fail-closed
+ * NEVER blind-map TRAJECTORY_NOT_FOUND → kind=none.
+ * NEVER map missing Project → kind=none.
+ *
  * READ-ONLY. Never PREPARE / Inspect / Execute.
  */

 import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
 import type { DecisionBasis } from "@/lib/oa/decision/domain/types";
 import type { ProjectTrajectory } from "@/lib/oa/cycle/domain/types";
+import { resolveTrajectoryBootstrapPresence } from "@/lib/oa/cycle/application/lifecycleRecommendation/greenfieldLifecycleBootstrap";
 import { GOVERNED_OPTION_REF } from "./trajectoryOptions";
 import {
   resolvePostEvidenceRecoveryContext,
@@ -188,6 +196,121 @@ export function assertGovernedRecoveryLineage(input: {
   return null;
 }

+/**
+ * Qualify TRAJECTORY_NOT_FOUND without collapsing UNKNOWN / broken GOVERNED
+ * continuity into greenfield absence.
+ *
+ * Reuses resolveTrajectoryBootstrapPresence (KEEP) — no parallel engine.
+ */
+async function qualifyAbsenceOfCurrentTrajectory(input: {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+}): Promise<RecoveryOwnedDecisionContinuityResult> {
+  const { oa, projectId } = input;
+
+  let presence;
+  try {
+    presence = await resolveTrajectoryBootstrapPresence(
+      oa.cycleServices.trajectories,
+      projectId,
+    );
+  } catch (error) {
+    return continuityFailed(
+      `Présence trajectoire illisible — UNKNOWN ≠ absence (${
+        error instanceof Error ? error.message : "trajectory_presence_unresolved"
+      }).`,
+    );
+  }
+
+  if (presence.kind === "unknown") {
+    return continuityFailed(
+      "Présence trajectoire UNKNOWN — fail-closed (pas de kind=none).",
+    );
+  }
+
+  if (presence.kind === "current") {
+    return continuityFailed(
+      "Contradiction: current absente via getCurrent mais présence current — fail-closed.",
+    );
+  }
+
+  const lpsResult =
+    await oa.projectServices.getCurrentLivingProjectState.execute({
+      projectId,
+    });
+  if (!lpsResult.ok) {
+    return fail(
+      lpsResult.error.detailCode,
+      lpsResult.error.message ??
+        "LPS illisible — continuité recovery refusée (UNKNOWN ≠ absence).",
+    );
+  }
+  const lps = lpsResult.livingProjectState;
+  const lpsTrajectoryId = lps.trajectoryId?.trim() || null;
+
+  if (lpsTrajectoryId) {
+    let linked: ProjectTrajectory | null;
+    try {
+      linked = await oa.cycleServices.trajectories.findById(lpsTrajectoryId);
+    } catch (error) {
+      return continuityFailed(
+        `Lecture trajectoire LPS impossible — UNKNOWN ≠ absence (${
+          error instanceof Error ? error.message : "trajectory_read_failed"
+        }).`,
+      );
+    }
+    if (!linked) {
+      return continuityFailed(
+        "LPS trajectory ref orpheline — lignée recovery fail-closed.",
+      );
+    }
+    if (linked.projectId !== projectId) {
+      return continuityFailed(
+        "LPS trajectory hors projet — lignée recovery fail-closed.",
+      );
+    }
+    // Decided/current statuses without CURRENT pointer = broken continuity.
+    if (linked.status === "validated" || linked.status === "active") {
+      return continuityFailed(
+        "Trajectoire décidée/active sans pointeur current — lignée recovery fail-closed.",
+      );
+    }
+    if (linked.decidedByDecisionRef || linked.decidedOptionRef) {
+      return continuityFailed(
+        "Candidate portant décision durable sans current — lignée recovery fail-closed.",
+      );
+    }
+    // else: coherent undecided candidate linked from LPS — fall through.
+  }
+
+  const history = await oa.decisionServices.listDecisionHistory.execute({
+    projectId,
+  });
+  if (!history.ok) {
+    return fail(
+      history.error.detailCode,
+      history.error.message ??
+        "Historique décisions illisible — continuité recovery refusée (UNKNOWN ≠ absence).",
+    );
+  }
+
+  const governedTrajectoryClaim = history.decisions.find(
+    (decision) =>
+      decision.status === "accepted" &&
+      decision.selectedOptionId === GOVERNED_OPTION_REF &&
+      decision.decisionBasis?.sourceType === "trajectory_option",
+  );
+  if (governedTrajectoryClaim) {
+    return continuityFailed(
+      "HumanDecision GOVERNED trajectory_option sans current — lignée recovery fail-closed.",
+    );
+  }
+
+  // presence: never | history_without_current without GOVERNED claim
+  // = genuine greenfield OR legitimate pre-decision candidate.
+  return { ok: true, kind: "none" };
+}
+
 /**
  * Resolve whether the current ProjectTrajectory tip is a recovery-owned
  * GOVERNED HumanDecision with a coherent PostEvidenceRecoveryContext.
@@ -204,10 +327,23 @@ export async function readRecoveryOwnedDecisionContinuity(input: {
     );
   }

+  // Durable Project must exist before any kind=none greenfield claim.
+  const project = await oa.projectServices.getProject.execute({ projectId });
+  if (!project.ok) {
+    return fail(
+      project.error.detailCode,
+      project.error.message ??
+        "Projet introuvable — continuité recovery refusée.",
+    );
+  }
+
   const current = await oa.cycleServices.getCurrentTrajectory.execute({
     projectId,
   });
   if (!current.ok) {
+    if (current.error.detailCode === "TRAJECTORY_NOT_FOUND") {
+      return qualifyAbsenceOfCurrentTrajectory({ oa, projectId });
+    }
     return fail(
       current.error.detailCode,
       current.error.message ??

```

## 11. FULL new test content

```typescript
// @vitest-environment node
/**
 * NATIVE-EXECUTION-LOOP-GREENFIELD-CONTINUITY-CORR-01
 *
 * Absence of CURRENT ProjectTrajectory is multi-semantic:
 *   A fresh / never          → kind=none
 *   B legitimate candidate   → kind=none
 *   C broken GOVERNED/current → fail-closed
 *   D unknown reader         → fail-closed
 *   E current recovery path  → unchanged (#530 non-regression suite)
 *
 * Deterministic only — ZERO Cursor REAL — ZERO PocketTasks mutation.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { clearW3bBoundaryArm } from "@/lib/vertical-slice-runtime/w3bE2eBoundaryControl";
import { assertStudioCursorRealOffForTests } from "@/lib/oa/execution-attempt";
import { SqliteProductStore } from "@/lib/oa/project";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import { readRecoveryOwnedDecisionContinuity } from "@/features/project-assistant/w2/readRecoveryOwnedDecisionContinuity";
import { GOVERNED_OPTION_REF } from "@/features/project-assistant/w2/trajectoryOptions";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  proposeW2OptionsForProject,
  seedQualifiedProject,
  tempProductDbPath,
  W2_FIXED_NOW,
} from "./w2Harness";

beforeEach(() => {
  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
  process.env.OPS1_E2E_ALLOW_DIRTY_PRINCIPAL = "1";
  delete process.env.SFIA_STUDIO_CURSOR_REAL_AUTHORIZED;
  setConversationProviderForTests(null);
  clearW3bBoundaryArm();
  assertStudioCursorRealOffForTests();
  vi.useFakeTimers({ toFake: ["Date"] });
  vi.setSystemTime(new Date(W2_FIXED_NOW));
});

afterEach(() => {
  vi.useRealTimers();
  vi.restoreAllMocks();
  clearW3bBoundaryArm();
  cleanupW2TempDirs();
  setConversationProviderForTests(null);
  assertStudioCursorRealOffForTests();
});

describe("GREENFIELD RECOVERY CONTINUITY — CORR-01", () => {
  it("A — durable fresh Project (no trajectory) → kind=none (not TRAJECTORY_NOT_FOUND)", async () => {
    const db = tempProductDbPath("gf-fresh.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "gfFresh" });
    const created = await runtime.createProject({
      name: "Greenfield fresh continuity",
      objective: "Projet neuf sans trajectoire",
      context: "CORR-01 Proof A",
      criticality: "STANDARD",
      constraints: ["AUCUNE EXÉCUTION"],
      shortReference: "GFFRESH",
      idempotencyKey: "gf-fresh-a",
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("createProject");
    const projectId = created.project.projectId;
    const oa = runtime.oa!;

    const project = await oa.projectServices.getProject.execute({ projectId });
    expect(project.ok).toBe(true);
    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps.ok).toBe(true);
    if (lps.ok) {
      expect(lps.livingProjectState.version).toBe(1);
      expect(lps.livingProjectState.trajectoryId ?? null).toBeNull();
    }

    expect(await oa.cycleServices.trajectories.hasAnyByProjectId(projectId)).toBe(
      false,
    );

    const result = await readRecoveryOwnedDecisionContinuity({ oa, projectId });
    expect(result).toEqual({ ok: true, kind: "none" });
  });

  it("A2 — missing Project must NOT become kind=none", async () => {
    const db = tempProductDbPath("gf-missing-prj.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "gfMiss" });
    const oa = runtime.oa!;

    const result = await readRecoveryOwnedDecisionContinuity({
      oa,
      projectId: "prj:does-not-exist-greenfield",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.code).toBe("PROJECT_NOT_FOUND");
  });

  it("B — coherent candidate pre-decision → kind=none", async () => {
    const db = tempProductDbPath("gf-candidate.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "gfCand" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "cand" });
    const oa = runtime.oa!;

    const proposed = await proposeW2OptionsForProject(runtime, seeded.projectId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) throw new Error("propose");
    expect(proposed.proposedTrajectory).toBeTruthy();
    expect(proposed.proposedTrajectory!.status).toBe("candidate");

    const current = await oa.cycleServices.getCurrentTrajectory.execute({
      projectId: seeded.projectId,
    });
    expect(current.ok).toBe(false);
    if (!current.ok) {
      expect(current.error.detailCode).toBe("TRAJECTORY_NOT_FOUND");
    }
    expect(
      await oa.cycleServices.trajectories.hasAnyByProjectId(seeded.projectId),
    ).toBe(true);

    const result = await readRecoveryOwnedDecisionContinuity({
      oa,
      projectId: seeded.projectId,
    });
    expect(result).toEqual({ ok: true, kind: "none" });

    // No auto-HD created by the read.
    const history = await oa.decisionServices.listDecisionHistory.execute({
      projectId: seeded.projectId,
    });
    expect(history.ok).toBe(true);
    if (history.ok) {
      expect(history.decisions).toHaveLength(0);
    }
  });

  it("C — GOVERNED decided trajectory without CURRENT pointer → fail-closed", async () => {
    const db = tempProductDbPath("gf-broken-current.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "gfBrk" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "brk" });
    const oa = runtime.oa!;

    const proposed = await proposeW2OptionsForProject(runtime, seeded.projectId);
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
    if (!decided.ok) throw new Error("decide");

    const before = await oa.cycleServices.getCurrentTrajectory.execute({
      projectId: seeded.projectId,
    });
    expect(before.ok).toBe(true);

    const store = oa.projectServices.store;
    expect(store).toBeInstanceOf(SqliteProductStore);
    (store as SqliteProductStore).db
      .prepare(`DELETE FROM oa_project_trajectory_current WHERE project_id = ?`)
      .run(seeded.projectId);

    const after = await oa.cycleServices.getCurrentTrajectory.execute({
      projectId: seeded.projectId,
    });
    expect(after.ok).toBe(false);
    if (!after.ok) {
      expect(after.error.detailCode).toBe("TRAJECTORY_NOT_FOUND");
    }

    const result = await readRecoveryOwnedDecisionContinuity({
      oa,
      projectId: seeded.projectId,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.code).toBe("RECOVERY_DECISION_CONTINUITY_FAILED");
  });

  it("D — unknown trajectory presence reader → fail-closed (UNKNOWN ≠ absence)", async () => {
    const db = tempProductDbPath("gf-unknown-reader.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "gfUnk" });
    const created = await runtime.createProject({
      name: "Greenfield unknown reader",
      objective: "Reader failure must not become none",
      context: "CORR-01 Proof D",
      criticality: "STANDARD",
      constraints: ["AUCUNE EXÉCUTION"],
      shortReference: "GFUNC",
      idempotencyKey: "gf-unknown-d",
    });
    if (!created.ok) throw new Error("createProject");
    const projectId = created.project.projectId;
    const oa = runtime.oa!;

    vi.spyOn(oa.cycleServices.trajectories, "hasAnyByProjectId").mockRejectedValue(
      new Error("forced_trajectory_presence_read_failure"),
    );

    const result = await readRecoveryOwnedDecisionContinuity({ oa, projectId });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.code).toBe("RECOVERY_DECISION_CONTINUITY_FAILED");
    expect(result.message).toMatch(/UNKNOWN|illisible|fail-closed/i);
  });
});

```

## 12. Proofs

### A — Fresh Project
createProject → Project + LPS v1; hasAny=false; read → kind=none.
A2 missing Project → PROJECT_NOT_FOUND (not kind=none).

### B — Candidate pre-decision
propose → candidate; getCurrent TRAJECTORY_NOT_FOUND; hasAny=true; read → kind=none; no auto HD.

### C — Broken GOVERNED / missing current
decide GOVERNED; DELETE oa_project_trajectory_current; read → RECOVERY_DECISION_CONTINUITY_FAILED.

### D — Unknown reader
spy hasAnyByProjectId rejects; read → fail-closed (UNKNOWN ≠ absence).

### E — #530 non-regression
nativeExecutionLoopPostEvidenceRecoveryContinuityCorr01.d0.test.ts PASS
(runtime A→B / owned / binding=null / generic PREPARE / S1 / ZERO new Attempt).

## 13. Tests

### Targeted PASS
Test Files 6 passed / Tests 50 passed

### typecheck PASS
### lint PASS
### build PASS
### full npm test PASS
Test Files 441 passed | 17 skipped (458)
Tests 4881 passed | 137 skipped (5018)

### git diff --check PASS

### FinOps / test:db
NOT launched — FinOps non lancé ≠ FinOps PASS.

## 14. Fake / Real

Entry: REAL PocketTasks observation + repository diagnosis.
Proof: DETERMINISTIC only.
ZERO Cursor REAL. ZERO PocketTasks mutation.
NO claim: POCKETTASKS NATIVE LOOP PROVEN / END-TO-END REAL / PRODUCT READY / runtime v3 ADOPTED.

## 15. Exit criteria
1–27 PASS.

## 16. Git actions
project commit NO / push NO / PR NO / merge NO.

## 17. Reserves

Blocking: none.
Residual: FinOps not run; candidate uncommitted; PocketTasks REAL re-observation after commit/merge out of scope (next: RESUME POCKETTASKS CLEAN-ROOM NATIVE LOOP CAMPAIGN).

## 18. Verdict

**READY FOR COMMIT — GREENFIELD RECOVERY CONTINUITY CORRECTION**
