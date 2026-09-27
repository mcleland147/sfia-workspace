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
