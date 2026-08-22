/**
 * W1 — Trajectory SQLite durability.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  createTestDoctrineResolver,
  DEFAULT_PRODUCT_DOCTRINE_PIN,
} from "@/lib/oa/doctrine";
import {
  createTestSqliteProductProjectServices,
  type ActorReference,
} from "@/lib/oa/project";
import {
  createTestSqliteCycleServices,
  type TrajectoryStep,
} from "@/lib/oa/cycle";

const APP_ROOT = path.resolve(__dirname, "../../..");
const PRODUCT_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/product");
const SCHEMAS = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const ACTOR: ActorReference = {
  actorId: "actor:morris",
  role: "project_owner",
  displayName: "Morris",
  authorityLevel: "N3",
};

const STEPS_V1: TrajectoryStep[] = [
  { stepId: "stp:clarify", order: 1, label: "Clarify", state: "pending" },
  { stepId: "stp:decide", order: 2, label: "Decide", state: "pending" },
];

const tempDirs: string[] = [];
const openServices: Array<{ dispose: () => void }> = [];

function tempDbPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-w1-trj-"));
  tempDirs.push(dir);
  return path.join(dir, name);
}

async function boot(dbPath: string, createProject = true) {
  const { resolver } = createTestDoctrineResolver({
    registryRoot: PRODUCT_ROOT,
    schemasRoot: SCHEMAS,
  });
  const projects = createTestSqliteProductProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: "2026-08-22T12:00:00.000Z",
    dbPath,
  });
  openServices.push(projects);
  if (createProject) {
    await projects.createProject.execute({
      projectId: "prj:w1-trj",
      title: "Trajectory durability",
      objective: "obj",
      context: "ctx",
      scope: "scope",
      doctrinePackagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:w1-trj-v1",
      idempotencyKey: "idem:w1-trj",
    });
  }
  const cycles = createTestSqliteCycleServices({
    projectServices: projects,
    productStore: projects.store,
    fixedNowIso: "2026-08-22T12:00:00.000Z",
  });
  return { projects, cycles };
}

afterEach(() => {
  while (openServices.length) {
    try {
      openServices.pop()?.dispose();
    } catch {
      /* ignore */
    }
  }
  while (tempDirs.length) {
    const dir = tempDirs.pop();
    if (dir) fs.rmSync(dir, { recursive: true, force: true });
  }
});

describe("W1 trajectory durability", () => {
  it("initial candidate persists but effective current pointer stays empty", async () => {
    const dbPath = tempDbPath("trj-candidate.sqlite");
    const { cycles } = await boot(dbPath);
    const created = await cycles.createInitialTrajectory.execute({
      trajectoryId: "trj:candidate",
      projectId: "prj:w1-trj",
      steps: STEPS_V1,
      status: "candidate",
      expectedLpsVersion: 1,
      createdBy: ACTOR,
    });
    expect(created.ok).toBe(true);
    const current = await cycles.getCurrentTrajectory.execute({
      projectId: "prj:w1-trj",
    });
    expect(current.ok).toBe(false);
    if (current.ok) return;
    expect(current.error.detailCode).toBe("TRAJECTORY_NOT_FOUND");
    const version = await cycles.getTrajectoryVersion.execute({
      projectId: "prj:w1-trj",
      version: 1,
    });
    expect(version.ok).toBe(true);
    if (!version.ok) return;
    expect(version.trajectory.status).toBe("candidate");
  });

  it("persists current trajectory across reopen", async () => {
    const dbPath = tempDbPath("trj.sqlite");
    const { projects, cycles } = await boot(dbPath);
    const created = await cycles.createInitialTrajectory.execute({
      trajectoryId: "trj:w1",
      projectId: "prj:w1-trj",
      steps: STEPS_V1,
      status: "active",
      expectedLpsVersion: 1,
      createdBy: ACTOR,
    });
    expect(created.ok).toBe(true);
    projects.dispose();
    openServices.pop();

    const { projects: projects2, cycles: cycles2 } = await boot(dbPath, false);
    const current = await cycles2.getCurrentTrajectory.execute({
      projectId: "prj:w1-trj",
    });
    expect(current.ok).toBe(true);
    if (!current.ok) return;
    expect(current.trajectory.trajectoryId).toBe("trj:w1");
    expect(current.trajectory.status).toBe("active");
    projects2.dispose();
    openServices.pop();
  });

  it("keeps proposed candidate version out of current pointer", async () => {
    const dbPath = tempDbPath("trj-proposed.sqlite");
    const { cycles } = await boot(dbPath);
    await cycles.createInitialTrajectory.execute({
      trajectoryId: "trj:prop",
      projectId: "prj:w1-trj",
      steps: STEPS_V1,
      status: "active",
      expectedLpsVersion: 1,
      createdBy: ACTOR,
    });
    const proposed = await cycles.proposeTrajectoryVersion.execute({
      trajectoryId: "trj:prop",
      projectId: "prj:w1-trj",
      expectedVersion: 1,
      expectedLpsVersion: 2,
      steps: [
        ...STEPS_V1,
        { stepId: "stp:next", order: 3, label: "Next", state: "pending" },
      ],
      status: "candidate",
      createdBy: ACTOR,
    });
    expect(proposed.ok).toBe(true);
    const current = await cycles.getCurrentTrajectory.execute({
      projectId: "prj:w1-trj",
    });
    expect(current.ok).toBe(true);
    if (!current.ok) return;
    expect(current.trajectory.version).toBe(1);
    expect(current.trajectory.version).not.toBe(2);
    const candidate = await cycles.getTrajectoryVersion.execute({
      projectId: "prj:w1-trj",
      version: 2,
    });
    expect(candidate.ok).toBe(true);
    if (!candidate.ok) return;
    expect(candidate.trajectory.status).toBe("candidate");
  });
});
