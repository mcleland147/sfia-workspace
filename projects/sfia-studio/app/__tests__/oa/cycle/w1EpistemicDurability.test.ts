/**
 * W1 — Epistemic selective materialized persistence.
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
import { createTestSqliteCycleServices } from "@/lib/oa/cycle";

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

const tempDirs: string[] = [];
const openServices: Array<{ dispose: () => void }> = [];

function tempDbPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-w1-epi-"));
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
      projectId: "prj:w1-epi",
      title: "Epistemic durability",
      objective: "obj",
      context: "ctx",
      scope: "scope",
      doctrinePackagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:w1-epi-v1",
      idempotencyKey: "idem:w1-epi",
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

describe("W1 epistemic durability", () => {
  it("persists materialized items via saveForProject across reopen", async () => {
    const dbPath = tempDbPath("epi.sqlite");
    const { projects, cycles } = await boot(dbPath);
    const updated = await cycles.updateEpistemicState.execute({
      projectId: "prj:w1-epi",
      createdBy: ACTOR,
      items: [
        {
          epistemicItemId: "epi:w1:hypothesis",
          type: "Hypothesis",
          statement: "Delivery path requires product CKC package",
        },
      ],
    });
    expect(updated.ok).toBe(true);
    projects.dispose();
    openServices.pop();

    const { cycles: cycles2 } = await boot(dbPath, false);
    const state = await cycles2.getEpistemicState.execute({
      projectId: "prj:w1-epi",
    });
    expect(state.ok).toBe(true);
    if (!state.ok) return;
    expect(state.state.items).toHaveLength(1);
    expect(state.state.items[0]?.type).toBe("Hypothesis");
    expect(state.state.items[0]?.statement).toContain("product CKC package");
  });

  it("does not list non-materialized save-only items", async () => {
    const dbPath = tempDbPath("epi-draft.sqlite");
    const { cycles } = await boot(dbPath);
    await cycles.epistemic.save({
      schemaVersion: "0.1.0-oa",
      epistemicItemId: "epi:draft-only",
      type: "Observation",
      statement: "Draft should not persist",
      status: "active",
      createdBy: ACTOR,
      createdAt: "2026-08-22T12:00:00.000Z",
      relatedObjects: ["prj:w1-epi"],
    });
    const state = await cycles.getEpistemicState.execute({
      projectId: "prj:w1-epi",
    });
    expect(state.ok).toBe(true);
    if (!state.ok) return;
    expect(state.state.items).toHaveLength(0);
  });
});
