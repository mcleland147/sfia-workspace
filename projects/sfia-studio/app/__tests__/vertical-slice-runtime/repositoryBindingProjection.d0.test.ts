/** @vitest-environment node */
/**
 * JOURNEY-INTEGRITY — RepositoryBinding durable → LocalProjectCreationView →
 * RuntimeProjectState projection (application path, isolated Product DB).
 *
 * D-PC-09 / CR-PWR-04 — normal Product createProject persists server-owned
 * repository configuration before persistence (see __tests__/setup.ts defaults).
 * Legacy unbound Projects are constructed explicitly by stripping binding after
 * create — never by expecting createProject to fabricate a null binding.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import {
  createRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
  type CreateProjectRuntimeInput,
} from "@/lib/vertical-slice-runtime";

const APP_ROOT = path.resolve(__dirname, "../..");
const REGISTRY_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/product");
const SCHEMAS_ROOT = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const BINDING = {
  identity: "mcleland147/sfia-workspace",
  remoteUrl: "https://github.com/mcleland147/sfia-workspace.git",
  defaultBranch: "main",
  pathRoot: "projects/sfia-studio/.sandbox",
  baseSha: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
} as const;

class FixedIdSource implements LocalProjectIdSource {
  private project = 0;
  private lps = 0;
  private correlation = 0;

  nextProjectId(): string {
    this.project += 1;
    return `prj:bind-proj-${this.project}`;
  }

  nextLpsVersionId(): string {
    this.lps += 1;
    return `lps:bind-proj-${this.lps}`;
  }

  nextCorrelationId(): string {
    this.correlation += 1;
    return `cor:bind-proj-${this.correlation}`;
  }
}

const INPUT: CreateProjectRuntimeInput = {
  name: "Binding projection",
  objective: "Prove durable repositoryBinding reaches runtime.getProject.",
  context: "Isolated Product SQLite — not historical dogfood.",
  criticality: "STANDARD",
  constraints: ["No network", "No REAL"],
  shortReference: "BIND-PROJ",
  idempotencyKey: "idem:binding-projection-1",
};

function tempDb(): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-bind-proj-"));
  return path.join(dir, "oa-product.sqlite");
}

afterEach(() => {
  resetRuntimeApplicationServiceForTests();
});

describe("JOURNEY-INTEGRITY — RepositoryBinding runtime projection", () => {
  it("B1–B5 — createProject persists server-owned binding; setProjectRepositoryBinding updates durable projection", async () => {
    const productDbPath = tempDb();
    const runtime = createRuntimeApplicationService({
      registryRoot: REGISTRY_ROOT,
      schemasRoot: SCHEMAS_ROOT,
      nowIso: "2026-09-15T21:00:00.000Z",
      idSource: new FixedIdSource(),
      auditMode: "noop",
      productDbPath,
    });

    const created = await runtime.createProject(INPUT);
    expect(created.ok).toBe(true);
    if (!created.ok) return;

    // D-PC-09 — new Product Project is server-bound (not null).
    const afterCreate = await runtime.getProject(created.projectId);
    expect(afterCreate.ok).toBe(true);
    if (!afterCreate.ok) return;
    expect(afterCreate.project.repositoryBinding).not.toBeNull();
    expect(afterCreate.project.repositoryBinding?.provider).toBe("github");
    expect(afterCreate.project.repositoryBinding?.identity).toBeTruthy();
    expect(afterCreate.project.repositoryBinding?.remoteUrl).toBeTruthy();
    expect(afterCreate.project.repositoryBinding?.defaultBranch).toBeTruthy();
    expect(afterCreate.project.repositoryBinding?.pathRoot).toBeTruthy();
    expect(String(afterCreate.project.repositoryBinding?.identity)).not.toMatch(
      /acme\/widget/i,
    );

    const set = await runtime.setProjectRepositoryBinding({
      projectId: created.projectId,
      ...BINDING,
    });
    expect(set.ok).toBe(true);
    if (!set.ok) return;

    // B2–B5 — real projection chain (not write echo alone)
    const loaded = await runtime.getProject(created.projectId);
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) return;

    expect(loaded.project.repositoryBinding).toEqual({
      provider: "github",
      identity: BINDING.identity,
      remoteUrl: BINDING.remoteUrl,
      defaultBranch: BINDING.defaultBranch,
      pathRoot: BINDING.pathRoot,
      baseSha: BINDING.baseSha,
    });
    expect(Object.isFrozen(loaded.project.repositoryBinding)).toBe(true);
    expect(String(loaded.project.repositoryBinding?.identity)).not.toMatch(
      /acme\/widget/i,
    );
  });

  it("LEGACY unbound — stripping durable binding stays honestly null (not createProject)", async () => {
    const runtime = createRuntimeApplicationService({
      registryRoot: REGISTRY_ROOT,
      schemasRoot: SCHEMAS_ROOT,
      nowIso: "2026-09-15T21:00:00.000Z",
      idSource: new FixedIdSource(),
      auditMode: "noop",
      productDbPath: tempDb(),
    });
    const created = await runtime.createProject({
      ...INPUT,
      idempotencyKey: "idem:binding-legacy-unbound",
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    // createProject under D-PC-09 is bound — fabricate LEGACY unbound explicitly.
    expect(created.project.repositoryBinding).not.toBeNull();

    const oa = runtime.oa!;
    const found = await oa.projectServices.projects.findById(created.projectId);
    expect(found).not.toBeNull();
    if (!found) return;
    delete found.repositoryBinding;
    await oa.projectServices.projects.save(found);

    const reloaded = await runtime.getProject(created.projectId);
    expect(reloaded.ok).toBe(true);
    if (!reloaded.ok) return;
    expect(reloaded.project.repositoryBinding).toBeNull();
    expect(JSON.stringify(reloaded.project)).not.toMatch(/acme\/widget/i);
  });
});
