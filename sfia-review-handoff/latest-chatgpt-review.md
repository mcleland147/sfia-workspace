# NATIVE-EXECUTION-LOOP-GREENFIELD-CONTINUITY-CORR-01 — FULL Review Pack
# PROJECT GIT INTEGRATION

## 1. Date / heure

- Local: 2026-09-27 07:35:33 UTC+0200
- UTC: 2026-09-27T05:35:33Z

## 2. Macro / Phase / Profil

- Macro: NATIVE-EXECUTION-LOOP-GREENFIELD-CONTINUITY-CORR-01
- Cycle: 8 — Delivery / implémentation
- Phase: PROJECT GIT INTEGRATION
- Typologie: EVOL corrective
- Profil: CRITICAL
- Proof ceiling: DETERMINISTIC CORRECTION PROVEN

## 3. Morris GO

GO MORRIS CONSUMED: COMMIT + PUSH + PR
MERGE: NOT AUTHORIZED

Previous ChatGPT verdict:
READY FOR COMMIT — GREENFIELD RECOVERY CONTINUITY CORRECTION — CONFIRMED

## 4. Git Truth

```
worktree: /Users/morris/Projects/sfia-workspace-nel-greenfield-continuity-01
branch: fix/sfia-studio-native-execution-loop-greenfield-continuity-01
base / HEAD before commit: 4ed91f24ed00942f314bacf84f23fe3863b67edf
origin/main: 4ed91f24ed00942f314bacf84f23fe3863b67edf
base match: YES
```

Pre-commit candidate (exact):
- M projects/sfia-studio/app/features/project-assistant/w2/readRecoveryOwnedDecisionContinuity.ts
- ?? projects/sfia-studio/app/__tests__/project-assistant/greenfieldRecoveryContinuityCorr01.d0.test.ts

Also present but EXCLUDED from project commit:
- M .tmp-sfia-review/chatgpt-review.md

## 5. Previous handoff / candidate integrity

```
previous tip: 9de0100227d91cdcea086f74865a5c431ab37909
previous blob: 0907e1bd326c949a8c35d1982e7c9d0e751e6c35
```

Integrity check before commit:
- TEST MATCH: YES (trailing newline only)
- PROD MATCH: YES (patch apply exact)
- no functional drift since ChatGPT review
- git diff --check PASS

## 6. Staging

Exact staged set (2 files):

```
A projects/sfia-studio/app/__tests__/project-assistant/greenfieldRecoveryContinuityCorr01.d0.test.ts
M projects/sfia-studio/app/features/project-assistant/w2/readRecoveryOwnedDecisionContinuity.ts
```

```
2 files changed, 353 insertions(+), 1 deletion(-)
```

`.tmp-sfia-review/**` NOT staged.
No Roadmap / Doctrine / C1 / framing / method / prompts / workflows.

## 7. Commit

```
SHA: 74e8ee461bc1e5153a53342d0452df4c084567c9
parent: 4ed91f24ed00942f314bacf84f23fe3863b67edf
message: fix(studio): handle greenfield recovery continuity
files: exactly 2 (A test + M production)
```

diff-tree:
```
A projects/sfia-studio/app/__tests__/project-assistant/greenfieldRecoveryContinuityCorr01.d0.test.ts
M projects/sfia-studio/app/features/project-assistant/w2/readRecoveryOwnedDecisionContinuity.ts
```

## 8. Push

```
remote branch: origin/fix/sfia-studio-native-execution-loop-greenfield-continuity-01
remote SHA: 74e8ee461bc1e5153a53342d0452df4c084567c9
local SHA:  74e8ee461bc1e5153a53342d0452df4c084567c9
new branch created (first push)
force push: NO
```

## 9. Pull Request

```
number: 531
url: https://github.com/mcleland147/sfia-workspace/pull/531
state: OPEN
draft: false
mergeable: MERGEABLE
base: main @ 4ed91f24ed00942f314bacf84f23fe3863b67edf
head: fix/sfia-studio-native-execution-loop-greenfield-continuity-01 @ 74e8ee461bc1e5153a53342d0452df4c084567c9
commits: 1
changed_files: 2
additions: 353
deletions: 1
```

Files:
- ADDED greenfieldRecoveryContinuityCorr01.d0.test.ts (+216)
- MODIFIED readRecoveryOwnedDecisionContinuity.ts (+137 / -1)

## 10. CI initial

```
workflow: SFIA Studio CI
run: https://github.com/mcleland147/sfia-workspace/actions/runs/36297624091
job Detect SFIA Studio changes: IN_PROGRESS / pending
status overall: IN_PROGRESS (QUEUED → running)
conclusion: not yet completed
```

Merge NOT performed.

## 11. FULL commit diffs (exploitable)

### Production

```diff
commit 74e8ee461bc1e5153a53342d0452df4c084567c9
Author: Morris Cleland <morris@macbook-air.home>
Date:   Sun Sep 27 07:34:47 2026 +0200

    fix(studio): handle greenfield recovery continuity

    Co-authored-by: Cursor <cursoragent@cursor.com>

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

### Test

```diff
commit 74e8ee461bc1e5153a53342d0452df4c084567c9
Author: Morris Cleland <morris@macbook-air.home>
Date:   Sun Sep 27 07:34:47 2026 +0200

    fix(studio): handle greenfield recovery continuity

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/__tests__/project-assistant/greenfieldRecoveryContinuityCorr01.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/greenfieldRecoveryContinuityCorr01.d0.test.ts
new file mode 100644
index 00000000..ab4432fd
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/project-assistant/greenfieldRecoveryContinuityCorr01.d0.test.ts
@@ -0,0 +1,216 @@
+// @vitest-environment node
+/**
+ * NATIVE-EXECUTION-LOOP-GREENFIELD-CONTINUITY-CORR-01
+ *
+ * Absence of CURRENT ProjectTrajectory is multi-semantic:
+ *   A fresh / never          → kind=none
+ *   B legitimate candidate   → kind=none
+ *   C broken GOVERNED/current → fail-closed
+ *   D unknown reader         → fail-closed
+ *   E current recovery path  → unchanged (#530 non-regression suite)
+ *
+ * Deterministic only — ZERO Cursor REAL — ZERO PocketTasks mutation.
+ */
+import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
+import { setConversationProviderForTests } from "@/lib/platform/ai";
+import { clearW3bBoundaryArm } from "@/lib/vertical-slice-runtime/w3bE2eBoundaryControl";
+import { assertStudioCursorRealOffForTests } from "@/lib/oa/execution-attempt";
+import { SqliteProductStore } from "@/lib/oa/project";
+import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
+import { readRecoveryOwnedDecisionContinuity } from "@/features/project-assistant/w2/readRecoveryOwnedDecisionContinuity";
+import { GOVERNED_OPTION_REF } from "@/features/project-assistant/w2/trajectoryOptions";
+import {
+  bootW2Runtime,
+  cleanupW2TempDirs,
+  proposeW2OptionsForProject,
+  seedQualifiedProject,
+  tempProductDbPath,
+  W2_FIXED_NOW,
+} from "./w2Harness";
+
+beforeEach(() => {
+  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
+  process.env.OPS1_E2E_ALLOW_DIRTY_PRINCIPAL = "1";
+  delete process.env.SFIA_STUDIO_CURSOR_REAL_AUTHORIZED;
+  setConversationProviderForTests(null);
+  clearW3bBoundaryArm();
+  assertStudioCursorRealOffForTests();
+  vi.useFakeTimers({ toFake: ["Date"] });
+  vi.setSystemTime(new Date(W2_FIXED_NOW));
+});
+
+afterEach(() => {
+  vi.useRealTimers();
+  vi.restoreAllMocks();
+  clearW3bBoundaryArm();
+  cleanupW2TempDirs();
+  setConversationProviderForTests(null);
+  assertStudioCursorRealOffForTests();
+});
+
+describe("GREENFIELD RECOVERY CONTINUITY — CORR-01", () => {
+  it("A — durable fresh Project (no trajectory) → kind=none (not TRAJECTORY_NOT_FOUND)", async () => {
+    const db = tempProductDbPath("gf-fresh.sqlite");
+    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "gfFresh" });
+    const created = await runtime.createProject({
+      name: "Greenfield fresh continuity",
+      objective: "Projet neuf sans trajectoire",
+      context: "CORR-01 Proof A",
+      criticality: "STANDARD",
+      constraints: ["AUCUNE EXÉCUTION"],
+      shortReference: "GFFRESH",
+      idempotencyKey: "gf-fresh-a",
+    });
+    expect(created.ok).toBe(true);
+    if (!created.ok) throw new Error("createProject");
+    const projectId = created.project.projectId;
+    const oa = runtime.oa!;
+
+    const project = await oa.projectServices.getProject.execute({ projectId });
+    expect(project.ok).toBe(true);
+    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
+      projectId,
+    });
+    expect(lps.ok).toBe(true);
+    if (lps.ok) {
+      expect(lps.livingProjectState.version).toBe(1);
+      expect(lps.livingProjectState.trajectoryId ?? null).toBeNull();
+    }
+
+    expect(await oa.cycleServices.trajectories.hasAnyByProjectId(projectId)).toBe(
+      false,
+    );
+
+    const result = await readRecoveryOwnedDecisionContinuity({ oa, projectId });
+    expect(result).toEqual({ ok: true, kind: "none" });
+  });
+
+  it("A2 — missing Project must NOT become kind=none", async () => {
+    const db = tempProductDbPath("gf-missing-prj.sqlite");
+    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "gfMiss" });
+    const oa = runtime.oa!;
+
+    const result = await readRecoveryOwnedDecisionContinuity({
+      oa,
+      projectId: "prj:does-not-exist-greenfield",
+    });
+    expect(result.ok).toBe(false);
+    if (result.ok) return;
+    expect(result.code).toBe("PROJECT_NOT_FOUND");
+  });
+
+  it("B — coherent candidate pre-decision → kind=none", async () => {
+    const db = tempProductDbPath("gf-candidate.sqlite");
+    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "gfCand" });
+    const seeded = await seedQualifiedProject(runtime, { suffix: "cand" });
+    const oa = runtime.oa!;
+
+    const proposed = await proposeW2OptionsForProject(runtime, seeded.projectId);
+    expect(proposed.ok).toBe(true);
+    if (!proposed.ok) throw new Error("propose");
+    expect(proposed.proposedTrajectory).toBeTruthy();
+    expect(proposed.proposedTrajectory!.status).toBe("candidate");
+
+    const current = await oa.cycleServices.getCurrentTrajectory.execute({
+      projectId: seeded.projectId,
+    });
+    expect(current.ok).toBe(false);
+    if (!current.ok) {
+      expect(current.error.detailCode).toBe("TRAJECTORY_NOT_FOUND");
+    }
+    expect(
+      await oa.cycleServices.trajectories.hasAnyByProjectId(seeded.projectId),
+    ).toBe(true);
+
+    const result = await readRecoveryOwnedDecisionContinuity({
+      oa,
+      projectId: seeded.projectId,
+    });
+    expect(result).toEqual({ ok: true, kind: "none" });
+
+    // No auto-HD created by the read.
+    const history = await oa.decisionServices.listDecisionHistory.execute({
+      projectId: seeded.projectId,
+    });
+    expect(history.ok).toBe(true);
+    if (history.ok) {
+      expect(history.decisions).toHaveLength(0);
+    }
+  });
+
+  it("C — GOVERNED decided trajectory without CURRENT pointer → fail-closed", async () => {
+    const db = tempProductDbPath("gf-broken-current.sqlite");
+    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "gfBrk" });
+    const seeded = await seedQualifiedProject(runtime, { suffix: "brk" });
+    const oa = runtime.oa!;
+
+    const proposed = await proposeW2OptionsForProject(runtime, seeded.projectId);
+    if (!proposed.ok) throw new Error("propose");
+    const decided = await decideTrajectory({
+      oa,
+      projectId: seeded.projectId,
+      optionSetRef: proposed.optionSetRef,
+      options: proposed.options,
+      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
+      selectedOptionRef: GOVERNED_OPTION_REF,
+      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
+      candidateVersion: proposed.proposedTrajectory!.version,
+      forceLocalAuthority: true,
+    });
+    if (!decided.ok) throw new Error("decide");
+
+    const before = await oa.cycleServices.getCurrentTrajectory.execute({
+      projectId: seeded.projectId,
+    });
+    expect(before.ok).toBe(true);
+
+    const store = oa.projectServices.store;
+    expect(store).toBeInstanceOf(SqliteProductStore);
+    (store as SqliteProductStore).db
+      .prepare(`DELETE FROM oa_project_trajectory_current WHERE project_id = ?`)
+      .run(seeded.projectId);
+
+    const after = await oa.cycleServices.getCurrentTrajectory.execute({
+      projectId: seeded.projectId,
+    });
+    expect(after.ok).toBe(false);
+    if (!after.ok) {
+      expect(after.error.detailCode).toBe("TRAJECTORY_NOT_FOUND");
+    }
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
+  it("D — unknown trajectory presence reader → fail-closed (UNKNOWN ≠ absence)", async () => {
+    const db = tempProductDbPath("gf-unknown-reader.sqlite");
+    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "gfUnk" });
+    const created = await runtime.createProject({
+      name: "Greenfield unknown reader",
+      objective: "Reader failure must not become none",
+      context: "CORR-01 Proof D",
+      criticality: "STANDARD",
+      constraints: ["AUCUNE EXÉCUTION"],
+      shortReference: "GFUNC",
+      idempotencyKey: "gf-unknown-d",
+    });
+    if (!created.ok) throw new Error("createProject");
+    const projectId = created.project.projectId;
+    const oa = runtime.oa!;
+
+    vi.spyOn(oa.cycleServices.trajectories, "hasAnyByProjectId").mockRejectedValue(
+      new Error("forced_trajectory_presence_read_failure"),
+    );
+
+    const result = await readRecoveryOwnedDecisionContinuity({ oa, projectId });
+    expect(result.ok).toBe(false);
+    if (result.ok) return;
+    expect(result.code).toBe("RECOVERY_DECISION_CONTINUITY_FAILED");
+    expect(result.message).toMatch(/UNKNOWN|illisible|fail-closed/i);
+  });
+});

```

## 12. Pre-integration validation (from previous handoff; candidate unchanged)

- targeted: 6 files / 50 PASS
- typecheck PASS
- lint PASS
- build PASS
- full: 441 files / 4881 PASS, 137 skipped
- diff-check PASS
- FinOps NOT RUN ≠ FinOps PASS

## 13. Fake / Real

- deterministic correction only
- ZERO Cursor REAL
- ZERO PocketTasks mutation
- runtime v3 NON ADOPTED
- NO PocketTasks native loop claim
- NO END-TO-END REAL claim
- NO Product READY claim

## 14. Git actions

- project commit: YES
- project push: YES
- PR: YES (#531)
- merge: NO
- branch delete: NO
- force push: NO
- worktree delete: NO

## 15. Reserves

### Blocking
None for this Git integration phase.

### Residual
- CI PR not yet SUCCESS — do not claim READY FOR MERGE
- FinOps not run
- PocketTasks REAL re-observation remains next campaign step after merge authorization

## 16. Verdict

**PR OPEN — GREENFIELD RECOVERY CONTINUITY CORRECTION — CI IN_PROGRESS**
