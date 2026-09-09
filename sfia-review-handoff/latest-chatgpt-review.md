# SFIA Studio Review Pack — FULL

| Champ | Valeur |
| --- | --- |
| **Timestamp** | 2026-09-09 21:39:26 CEST |
| **Cycle ID** | `SFIA-STUDIO-GREENFIELD-BOOTSTRAP-EXACT-TRAJECTORY-PRESENCE-MICRO-CORRECTIVE-01` |
| **Type** | 8 — Delivery · RUN micro-corrective · CRITICAL |
| **GO Morris consommé** | `GO MORRIS — GREENFIELD BOOTSTRAP EXACT TRAJECTORY PRESENCE MICRO-CORRECTIVE` |
| **Critical Review blocker** | `CR-BOOT-01 — EXACT GREENFIELD TRAJECTORY PRESENCE` |
| **Parent candidate** | `f70dc8ae9c25b237654a6db9ec44a875880afdde` |
| **New candidate** | `0b9a7370f04de9f1b6ebb3aca84d1dd6f15541ee` |
| **ZERO NEW REAL** | OUI |
| **Verdict** | GREENFIELD BOOTSTRAP EXACT TRAJECTORY PRESENCE — DETERMINISTIC CANDIDATE READY FOR CHATGPT CRITICAL REVIEW |

---

## 1. Local Git Truth — BEFORE

| Check | Observed |
| --- | --- |
| worktree | `/Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310` |
| branch | `delivery/sfia-studio-product-proof-qual-to-governed-cycle` |
| HEAD (anchor) | `f70dc8ae9c25b237654a6db9ec44a875880afdde` |
| parent of f70 | `e79f16ba467c227470328d7f723f1c2b53fdf2fb` |
| origin/main | `a9f6c310a0826d0e5bd6f7264603382a86564db1` |
| dirty Product | NONE (`.tmp-sfia-review/*` only) |
| amend f70 | **NO** |

## 2. Local Git Truth — AFTER

| Check | Observed |
| --- | --- |
| new SHA | `0b9a7370f04de9f1b6ebb3aca84d1dd6f15541ee` |
| parent | `f70dc8ae9c25b237654a6db9ec44a875880afdde` (= f70 exact) |
| Product push | NONE |

```
0b9a7370 fix(sfia-studio): make greenfield trajectory presence exact
M	projects/sfia-studio/app/__tests__/project-assistant/greenfieldLifecycleBootstrap.d0.test.ts
M	projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/greenfieldLifecycleBootstrap.ts
M	projects/sfia-studio/app/lib/oa/cycle/infrastructure/memoryTrajectoryRepository.ts
M	projects/sfia-studio/app/lib/oa/cycle/infrastructure/sqlite/sqliteTrajectoryRepository.ts
M	projects/sfia-studio/app/lib/oa/cycle/ports/trajectoryRepository.ts
```

```
.../greenfieldLifecycleBootstrap.d0.test.ts        | 152 +++++++++++++++++++++
 .../greenfieldLifecycleBootstrap.ts                |  19 +--
 .../infrastructure/memoryTrajectoryRepository.ts   |   7 +
 .../sqlite/sqliteTrajectoryRepository.ts           |  11 ++
 .../app/lib/oa/cycle/ports/trajectoryRepository.ts |   6 +
 5 files changed, 182 insertions(+), 13 deletions(-)
```

---

## 3. CR-BOOT-01 root issue

f70 classified historical trajectory absence via `TRAJECTORY_HISTORY_PROBE_MAX_VERSION = 64` + `findByProjectAndVersion(1..64)`.

64 is **not** a domain invariant. A row at version >64 with empty 1..64 could be misclassified as `never`, incorrectly authorizing bootstrap.

## 4. Exact repository API

`TrajectoryRepositoryPort.hasAnyByProjectId(projectId): Promise<boolean>`

- Exact project-scoped existence (any version/status).
- No version window.
- Failures propagate → caller maps to `unknown` (never coerced to `never`).

## 5. Semantics after fix

1. `findCurrentByProjectId` → if found: `current`
2. else `hasAnyByProjectId` → true: `history_without_current` / false: `never`
3. catch → `unknown` → fail-closed

`TRAJECTORY_HISTORY_PROBE_MAX_VERSION` **removed**.
`findByProjectAndVersion` **no longer used** in bootstrap presence resolution.

## 6. RESERVE-BOOT-PROBE-01

**CLOSED DETERMINISTICALLY** — BAR-BOOT-19 proves version 65-only history → `history_without_current`; BAR-BOOT-22 proves no version probe remains.

## 7. Validation

| Gate | Result |
| --- | --- |
| BAR-BOOT-01…18 | PASS (regression) |
| BAR-BOOT-19 exact history >64 | PASS |
| BAR-BOOT-20 hasAny SQLite+Memory | PASS |
| BAR-BOOT-21 existence failure → unknown | PASS |
| BAR-BOOT-22 no version probe | PASS |
| Focused related | PASS |
| Full Vitest | **3351 passed · 135 skipped · 0 failed** |
| typecheck | PASS |
| lint | PASS |
| build | PASS |
| git diff --check | PASS |
| ZERO NEW REAL | PROVEN |

## 8. Authority anti-claims

Unchanged: bootstrap still creates 0 CycleInstance / 0 HD / 0 ProjectTrajectory / no START / authority=none.

## 9. Other reserves

| Reserve | Disposition |
| --- | --- |
| RESERVE-BOOT-PROBE-01 | **CLOSED DETERMINISTICALLY** |
| RESERVE-QA-MOCK-01 | OPEN / non-blocking |
| LIVE materialization | OPEN |
| R2 | OPEN |
| runtime v3 | NON ADOPTED |

---

## 10. EXPLOITABLE MODIFIED CONTENT — exact candidate 0b9a7370f04de9f1b6ebb3aca84d1dd6f15541ee


### FILE 1/5 — `projects/sfia-studio/app/lib/oa/cycle/ports/trajectoryRepository.ts`

- Candidate: `0b9a7370f04de9f1b6ebb3aca84d1dd6f15541ee`
- Representation: **FULL FILE @ candidate** + unified diff

#### Full file

```ts
import type { ProjectTrajectory } from "../domain/types";

export interface TrajectoryRepositoryPort {
  findById(trajectoryId: string): Promise<ProjectTrajectory | null>;
  findByProjectAndVersion(
    projectId: string,
    version: number,
  ): Promise<ProjectTrajectory | null>;
  findCurrentByProjectId(
    projectId: string,
  ): Promise<ProjectTrajectory | null>;
  /**
   * Exact project-scoped existence: true iff any ProjectTrajectory row exists
   * for this projectId (any version/status). Not version-windowed.
   * Failures must propagate to the caller (UNKNOWN ≠ absence).
   */
  hasAnyByProjectId(projectId: string): Promise<boolean>;
  exists(trajectoryId: string): Promise<boolean>;
  save(trajectory: ProjectTrajectory): Promise<void>;
  markSuperseded(trajectoryId: string, version: number): Promise<void>;
}
```

#### Unified diff

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/ports/trajectoryRepository.ts b/projects/sfia-studio/app/lib/oa/cycle/ports/trajectoryRepository.ts
index d7b63c3b..876de33a 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/ports/trajectoryRepository.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/ports/trajectoryRepository.ts
@@ -9,6 +9,12 @@ export interface TrajectoryRepositoryPort {
   findCurrentByProjectId(
     projectId: string,
   ): Promise<ProjectTrajectory | null>;
+  /**
+   * Exact project-scoped existence: true iff any ProjectTrajectory row exists
+   * for this projectId (any version/status). Not version-windowed.
+   * Failures must propagate to the caller (UNKNOWN ≠ absence).
+   */
+  hasAnyByProjectId(projectId: string): Promise<boolean>;
   exists(trajectoryId: string): Promise<boolean>;
   save(trajectory: ProjectTrajectory): Promise<void>;
   markSuperseded(trajectoryId: string, version: number): Promise<void>;
```

### FILE 2/5 — `projects/sfia-studio/app/lib/oa/cycle/infrastructure/memoryTrajectoryRepository.ts`

- Candidate: `0b9a7370f04de9f1b6ebb3aca84d1dd6f15541ee`
- Representation: **FULL UNIFIED DIFF**

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/infrastructure/memoryTrajectoryRepository.ts b/projects/sfia-studio/app/lib/oa/cycle/infrastructure/memoryTrajectoryRepository.ts
index 50c774e4..0cecc6f1 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/infrastructure/memoryTrajectoryRepository.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/infrastructure/memoryTrajectoryRepository.ts
@@ -46,6 +46,13 @@ export class MemoryTrajectoryRepository implements TrajectoryRepositoryPort {
     return found ? structuredClone(found) : null;
   }

+  async hasAnyByProjectId(projectId: string): Promise<boolean> {
+    for (const traj of this.store.trajectoriesByKey.values()) {
+      if (traj.projectId === projectId) return true;
+    }
+    return false;
+  }
+
   async exists(trajectoryId: string): Promise<boolean> {
     for (const traj of this.store.trajectoriesByKey.values()) {
       if (traj.trajectoryId === trajectoryId) return true;
```

### FILE 3/5 — `projects/sfia-studio/app/lib/oa/cycle/infrastructure/sqlite/sqliteTrajectoryRepository.ts`

- Candidate: `0b9a7370f04de9f1b6ebb3aca84d1dd6f15541ee`
- Representation: **FULL UNIFIED DIFF**

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/infrastructure/sqlite/sqliteTrajectoryRepository.ts b/projects/sfia-studio/app/lib/oa/cycle/infrastructure/sqlite/sqliteTrajectoryRepository.ts
index c8fec163..bf18a755 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/infrastructure/sqlite/sqliteTrajectoryRepository.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/infrastructure/sqlite/sqliteTrajectoryRepository.ts
@@ -72,6 +72,17 @@ export class SqliteTrajectoryRepository implements TrajectoryRepositoryPort {
     return this.findByProjectAndVersion(projectId, current.version);
   }

+  async hasAnyByProjectId(projectId: string): Promise<boolean> {
+    const row = this.store.db
+      .prepare(
+        `SELECT 1 AS ok FROM oa_project_trajectories
+         WHERE project_id = ?
+         LIMIT 1`,
+      )
+      .get(projectId) as { ok?: number } | undefined;
+    return row?.ok === 1;
+  }
+
   async exists(trajectoryId: string): Promise<boolean> {
     const row = this.store.db
       .prepare(`SELECT 1 AS ok FROM oa_project_trajectories WHERE trajectory_id = ?`)
```

### FILE 4/5 — `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/greenfieldLifecycleBootstrap.ts`

- Candidate: `0b9a7370f04de9f1b6ebb3aca84d1dd6f15541ee`
- Representation: **FULL FILE @ candidate** + unified diff

#### Full file

```ts
/**
 * Strict pre-trajectory bootstrap for the first NEXT_CYCLE Lifecycle Recommendation
 * on a genuine fresh Project (D-RB-BOOT-01).
 *
 * Never treats reader failure as absence. Never auto-creates ProjectTrajectory.
 * Historical presence is exact via TrajectoryRepositoryPort.hasAnyByProjectId —
 * no version-window probe.
 */
import type { HumanDecision } from "@/lib/oa/decision";
import type { CycleInstance, ProjectTrajectory } from "../../domain/types";
import type { TrajectoryRepositoryPort } from "../../ports/trajectoryRepository";
import { isCurrentHumanDecisionStatus } from "../assessFinalization";
import { getCycleTypeById } from "../../domain/cycleTypeCatalog";
import type { LifecycleRecommendationCandidate } from "./types";

export type TrajectoryBootstrapPresenceKind =
  | "current"
  | "never"
  | "history_without_current"
  | "unknown";

export type TrajectoryBootstrapPresence =
  | { kind: "current"; trajectory: ProjectTrajectory }
  | { kind: "never" }
  | { kind: "history_without_current" }
  | { kind: "unknown"; reason: string };

export type GreenfieldBootstrapEligibilityResult =
  | { eligible: true }
  | { eligible: false; code: string; reason: string };

/**
 * Pure classification from already-resolved reads.
 * Callers must pass unknown when any required reader threw / failed.
 */
export function classifyTrajectoryBootstrapPresence(input: {
  readerFailed: boolean;
  current: ProjectTrajectory | null;
  /** True when any historical/candidate row exists for the project. */
  anyVersionExists: boolean;
}): TrajectoryBootstrapPresence {
  if (input.readerFailed) {
    return { kind: "unknown", reason: "trajectory_reader_failed" };
  }
  if (input.current) {
    return { kind: "current", trajectory: input.current };
  }
  if (input.anyVersionExists) {
    return { kind: "history_without_current" };
  }
  return { kind: "never" };
}

/**
 * Resolve presence using TrajectoryRepositoryPort only.
 * findCurrentByProjectId + hasAnyByProjectId — exact project-scoped existence.
 * No version-number ceiling. Failures → unknown (never coerced to never).
 */
export async function resolveTrajectoryBootstrapPresence(
  trajectories: TrajectoryRepositoryPort,
  projectId: string,
): Promise<TrajectoryBootstrapPresence> {
  try {
    const current = await trajectories.findCurrentByProjectId(projectId);
    if (current) {
      return { kind: "current", trajectory: current };
    }
    const anyVersionExists = await trajectories.hasAnyByProjectId(projectId);
    return classifyTrajectoryBootstrapPresence({
      readerFailed: false,
      current: null,
      anyVersionExists,
    });
  } catch (error) {
    return {
      kind: "unknown",
      reason:
        error instanceof Error ? error.message : "trajectory_presence_unresolved",
    };
  }
}

/** Canonical catalog gate for targetCycleTypeId (D-RB-BOOT-02). */
export function validateCanonicalTargetCycleTypeId(
  targetCycleTypeId: string | null,
): { ok: true; cycleTypeId: string } | { ok: false; code: string; reason: string } {
  if (!targetCycleTypeId || targetCycleTypeId.trim().length < 1) {
    return {
      ok: false,
      code: "LR_TARGET_CYCLE_TYPE_MISSING",
      reason: "target_cycle_type_required_for_type_based_next",
    };
  }
  const entry = getCycleTypeById(targetCycleTypeId);
  if (!entry) {
    return {
      ok: false,
      code: "LR_TARGET_CYCLE_TYPE_UNKNOWN",
      reason: "target_cycle_type_not_in_catalog",
    };
  }
  if (entry.lifecycleStatus !== "active") {
    return {
      ok: false,
      code: "LR_TARGET_CYCLE_TYPE_NOT_SELECTABLE",
      reason: "target_cycle_type_not_selectable",
    };
  }
  return { ok: true, cycleTypeId: entry.cycleTypeId };
}

/**
 * Strict bootstrap eligibility — first NEXT_CYCLE on a Project that never had
 * a ProjectTrajectory. Fail closed on unknown / history / cycles / HD / ids.
 */
export function assessGreenfieldPreTrajectoryBootstrapEligibility(input: {
  candidate: LifecycleRecommendationCandidate;
  presence: TrajectoryBootstrapPresence;
  cycles: readonly CycleInstance[];
  lpsActiveCycleInstanceId: string | null | undefined;
  decisions: readonly HumanDecision[];
}): GreenfieldBootstrapEligibilityResult {
  if (input.candidate.intent !== "NEXT_CYCLE") {
    return {
      eligible: false,
      code: "LR_BOOTSTRAP_INTENT",
      reason: "bootstrap_next_cycle_only",
    };
  }
  if (input.presence.kind === "unknown") {
    return {
      eligible: false,
      code: "LR_BASIS_TRAJECTORY_UNAVAILABLE",
      reason: "trajectory_presence_unknown",
    };
  }
  if (input.presence.kind === "current") {
    return {
      eligible: false,
      code: "LR_BOOTSTRAP_NOT_APPLICABLE",
      reason: "current_trajectory_present",
    };
  }
  if (input.presence.kind === "history_without_current") {
    return {
      eligible: false,
      code: "LR_BOOTSTRAP_HISTORY_PRESENT",
      reason: "prior_or_candidate_trajectory_exists",
    };
  }
  // presence.kind === "never"
  if (input.cycles.length > 0) {
    return {
      eligible: false,
      code: "LR_BOOTSTRAP_CYCLE_PRESENT",
      reason: "cycle_instance_exists",
    };
  }
  if (input.lpsActiveCycleInstanceId) {
    return {
      eligible: false,
      code: "LR_BOOTSTRAP_ACTIVE_CYCLE",
      reason: "active_cycle_present",
    };
  }
  if (input.candidate.subjectCycleInstanceId) {
    return {
      eligible: false,
      code: "LR_BOOTSTRAP_SUBJECT_FORBIDDEN",
      reason: "subject_cycle_not_allowed_in_bootstrap",
    };
  }
  if (input.candidate.targetCycleInstanceId) {
    return {
      eligible: false,
      code: "LR_BOOTSTRAP_TARGET_INSTANCE_FORBIDDEN",
      reason: "target_cycle_instance_not_allowed_in_bootstrap",
    };
  }
  const typeGate = validateCanonicalTargetCycleTypeId(
    input.candidate.targetCycleTypeId ?? null,
  );
  if (!typeGate.ok) {
    return {
      eligible: false,
      code: typeGate.code,
      reason: typeGate.reason,
    };
  }
  const currentHd = input.decisions.filter((d) =>
    isCurrentHumanDecisionStatus(d.status),
  );
  if (currentHd.length > 0) {
    return {
      eligible: false,
      code: "LR_BOOTSTRAP_HD_PRESENT",
      reason: "current_human_decision_incompatible_with_bootstrap",
    };
  }
  return { eligible: true };
}
```

#### Unified diff

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/greenfieldLifecycleBootstrap.ts b/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/greenfieldLifecycleBootstrap.ts
index 5d16abe2..bbbf8c38 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/greenfieldLifecycleBootstrap.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/greenfieldLifecycleBootstrap.ts
@@ -3,6 +3,8 @@
  * on a genuine fresh Project (D-RB-BOOT-01).
  *
  * Never treats reader failure as absence. Never auto-creates ProjectTrajectory.
+ * Historical presence is exact via TrajectoryRepositoryPort.hasAnyByProjectId —
+ * no version-window probe.
  */
 import type { HumanDecision } from "@/lib/oa/decision";
 import type { CycleInstance, ProjectTrajectory } from "../../domain/types";
@@ -11,9 +13,6 @@ import { isCurrentHumanDecisionStatus } from "../assessFinalization";
 import { getCycleTypeById } from "../../domain/cycleTypeCatalog";
 import type { LifecycleRecommendationCandidate } from "./types";

-/** Max version probe — lineages are sequential; avoids unbounded scans. */
-export const TRAJECTORY_HISTORY_PROBE_MAX_VERSION = 64 as const;
-
 export type TrajectoryBootstrapPresenceKind =
   | "current"
   | "never"
@@ -53,8 +52,9 @@ export function classifyTrajectoryBootstrapPresence(input: {
 }

 /**
- * Resolve presence using existing TrajectoryRepositoryPort only.
- * findCurrentByProjectId + findByProjectAndVersion — no new store / list API.
+ * Resolve presence using TrajectoryRepositoryPort only.
+ * findCurrentByProjectId + hasAnyByProjectId — exact project-scoped existence.
+ * No version-number ceiling. Failures → unknown (never coerced to never).
  */
 export async function resolveTrajectoryBootstrapPresence(
   trajectories: TrajectoryRepositoryPort,
@@ -65,14 +65,7 @@ export async function resolveTrajectoryBootstrapPresence(
     if (current) {
       return { kind: "current", trajectory: current };
     }
-    let anyVersionExists = false;
-    for (let version = 1; version <= TRAJECTORY_HISTORY_PROBE_MAX_VERSION; version += 1) {
-      const row = await trajectories.findByProjectAndVersion(projectId, version);
-      if (row) {
-        anyVersionExists = true;
-        break;
-      }
-    }
+    const anyVersionExists = await trajectories.hasAnyByProjectId(projectId);
     return classifyTrajectoryBootstrapPresence({
       readerFailed: false,
       current: null,
```

### FILE 5/5 — `projects/sfia-studio/app/__tests__/project-assistant/greenfieldLifecycleBootstrap.d0.test.ts`

- Candidate: `0b9a7370f04de9f1b6ebb3aca84d1dd6f15541ee`
- Representation: **FULL UNIFIED DIFF**

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/greenfieldLifecycleBootstrap.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/greenfieldLifecycleBootstrap.d0.test.ts
index 9b9f1dc2..15235a33 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/greenfieldLifecycleBootstrap.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/greenfieldLifecycleBootstrap.d0.test.ts
@@ -26,7 +26,12 @@ import {
   validateLifecycleRecommendation,
   deriveLifecycleRecommendationCurrentness,
   rebuildBasisRefsForRecommendation,
+  MemoryTrajectoryRepository,
 } from "@/lib/oa/cycle";
+import { MemoryCycleStore } from "@/lib/oa/cycle/infrastructure/memoryCycleStore";
+import type { TrajectoryRepositoryPort } from "@/lib/oa/cycle/ports/trajectoryRepository";
+import type { ProjectTrajectory } from "@/lib/oa/cycle/domain/types";
+import * as greenfieldBootstrapMod from "@/lib/oa/cycle/application/lifecycleRecommendation/greenfieldLifecycleBootstrap";
 import type { ActorReference } from "@/lib/oa/project";
 import type { Digest, DoctrinePackagePin } from "@/lib/oa/doctrine";
 import {
@@ -694,4 +699,151 @@ describe("GREENFIELD LIFECYCLE BOOTSTRAP — BAR-BOOT", () => {
     expect(prompt).toMatch(/identifiant catalogue Studio exact/);
     expect(prompt).not.toMatch(/Cadrage → cyc:framing/);
   });
+
+  it("BAR-BOOT-19 — exact history above old ceiling 64 → history_without_current", async () => {
+    const { runtime, projectId } = await bootFreshProject("19");
+    const traj: ProjectTrajectory = {
+      schemaVersion: "0.1.0-oa",
+      trajectoryId: `trj:${projectId}-v65`,
+      projectId,
+      version: 65,
+      status: "candidate",
+      steps: [
+        { stepId: "stp:a", order: 1, label: "A", state: "pending" },
+      ],
+    };
+    await runtime.oa!.cycleServices.trajectories.save(traj);
+    // No rows 1..64, no current pointer — old probe would have falsely said never.
+    for (let v = 1; v <= 64; v += 1) {
+      expect(
+        await runtime.oa!.cycleServices.trajectories.findByProjectAndVersion(
+          projectId,
+          v,
+        ),
+      ).toBeNull();
+    }
+    expect(
+      await runtime.oa!.cycleServices.trajectories.findCurrentByProjectId(
+        projectId,
+      ),
+    ).toBeNull();
+    expect(
+      await runtime.oa!.cycleServices.trajectories.hasAnyByProjectId(projectId),
+    ).toBe(true);
+
+    const presence = await resolveTrajectoryBootstrapPresence(
+      runtime.oa!.cycleServices.trajectories,
+      projectId,
+    );
+    expect(presence.kind).toBe("history_without_current");
+    expect(presence.kind).not.toBe("never");
+
+    const mat = await materializeFreshNext(
+      runtime,
+      projectId,
+      nextCycleLr("cyc:framing", "Must refuse history above old ceiling."),
+      { presence },
+    );
+    expect(mat.materialization?.ok).toBe(false);
+    if (mat.materialization && !mat.materialization.ok) {
+      expect(mat.materialization.code).toBe("LR_BOOTSTRAP_HISTORY_PRESENT");
+    }
+  });
+
+  it("BAR-BOOT-20 — exact project-scoped hasAnyByProjectId (SQLite + Memory)", async () => {
+    const { runtime, projectId } = await bootFreshProject("20");
+    const otherCreated = await runtime.createProject({
+      name: "Other project for hasAny isolation",
+      objective: "isolation",
+      context: "other",
+      criticality: "STANDARD",
+      constraints: [],
+      shortReference: "BOOT20O",
+      idempotencyKey: "idem:boot-20-other",
+    });
+    expect(otherCreated.ok).toBe(true);
+    if (!otherCreated.ok) return;
+    const otherId = otherCreated.projectId;
+    const trajRepo = runtime.oa!.cycleServices.trajectories;
+    expect(await trajRepo.hasAnyByProjectId(projectId)).toBe(false);
+    expect(await trajRepo.hasAnyByProjectId(otherId)).toBe(false);
+    await trajRepo.save({
+      schemaVersion: "0.1.0-oa",
+      trajectoryId: `trj:${projectId}-any`,
+      projectId,
+      version: 3,
+      status: "candidate",
+      steps: [{ stepId: "stp:a", order: 1, label: "A", state: "pending" }],
+    });
+    expect(await trajRepo.hasAnyByProjectId(projectId)).toBe(true);
+    expect(await trajRepo.hasAnyByProjectId(otherId)).toBe(false);
+
+    const memStore = new MemoryCycleStore();
+    const mem = new MemoryTrajectoryRepository(memStore);
+    expect(await mem.hasAnyByProjectId("prj:mem-a")).toBe(false);
+    await mem.save({
+      schemaVersion: "0.1.0-oa",
+      trajectoryId: "trj:mem-a",
+      projectId: "prj:mem-a",
+      version: 99,
+      status: "candidate",
+      steps: [{ stepId: "stp:a", order: 1, label: "A", state: "pending" }],
+    });
+    expect(await mem.hasAnyByProjectId("prj:mem-a")).toBe(true);
+    expect(await mem.hasAnyByProjectId("prj:mem-b")).toBe(false);
+  });
+
+  it("BAR-BOOT-21 — existence reader failure → unknown fail-closed (never coerced)", async () => {
+    const { runtime, projectId } = await bootFreshProject("21");
+    const base = runtime.oa!.cycleServices.trajectories;
+    const failing: TrajectoryRepositoryPort = {
+      findById: (id) => base.findById(id),
+      findByProjectAndVersion: (p, v) => base.findByProjectAndVersion(p, v),
+      findCurrentByProjectId: async () => null,
+      hasAnyByProjectId: async () => {
+        throw new Error("forced_has_any_failure");
+      },
+      exists: (id) => base.exists(id),
+      save: (t) => base.save(t),
+      markSuperseded: (id, v) => base.markSuperseded(id, v),
+    };
+    const presence = await resolveTrajectoryBootstrapPresence(
+      failing,
+      projectId,
+    );
+    expect(presence.kind).toBe("unknown");
+    if (presence.kind === "unknown") {
+      expect(presence.reason).toMatch(/forced_has_any_failure/);
+    }
+
+    const validated = validateLifecycleRecommendation({
+      projectId,
+      candidate: nextCycleLr("cyc:framing", "x"),
+      cycles: [],
+      lpsActiveCycleInstanceId: null,
+      hasTrajectoryContext: false,
+      trajectoryBootstrapPresence: presence,
+      decisions: [],
+    });
+    expect(validated.ok).toBe(false);
+    if (!validated.ok) {
+      expect(validated.code).toBe("LR_BASIS_TRAJECTORY_UNAVAILABLE");
+    }
+  });
+
+  it("BAR-BOOT-22 — no version probe / no TRAJECTORY_HISTORY_PROBE_MAX_VERSION", () => {
+    expect(
+      "TRAJECTORY_HISTORY_PROBE_MAX_VERSION" in greenfieldBootstrapMod,
+    ).toBe(false);
+    const srcPath = path.resolve(
+      APP_ROOT,
+      "lib/oa/cycle/application/lifecycleRecommendation/greenfieldLifecycleBootstrap.ts",
+    );
+    const src = fs.readFileSync(srcPath, "utf8");
+    expect(src).not.toMatch(/TRAJECTORY_HISTORY_PROBE_MAX_VERSION/);
+    expect(src).not.toMatch(/for\s*\(\s*let\s+version\s*=\s*1/);
+    expect(src).not.toMatch(/findByProjectAndVersion/);
+    expect(src).toMatch(/hasAnyByProjectId/);
+    expect(src).toMatch(/findCurrentByProjectId/);
+  });
 });
```


---

## 11. Integrity

| Check | Result |
| --- | --- |
| parent | `f70dc8ae9c25b237654a6db9ec44a875880afdde` |
| candidate | `0b9a7370f04de9f1b6ebb3aca84d1dd6f15541ee` |
| 5/5 files embedded | YES |
| ZERO NEW REAL | YES |

## 12. Verdict

**GREENFIELD BOOTSTRAP EXACT TRAJECTORY PRESENCE — DETERMINISTIC CANDIDATE READY FOR CHATGPT CRITICAL REVIEW**

Does **not** mean LIVE proven, PR ready, R2 closed, or runtime v3 ADOPTED.
