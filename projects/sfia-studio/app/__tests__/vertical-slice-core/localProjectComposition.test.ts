/** @vitest-environment node */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { BoundedAtomicAuditStore } from "@/lib/d1/boundedAtomicAudit";
import { resetD1DbForTests } from "@/lib/d1/db";
import {
  BoundedSqliteLocalProjectCreationAudit,
  DEFAULT_LOCAL_DOCTRINE_PIN,
  FailingLocalProjectCreationAudit,
  MemoryLocalProjectCreationAudit,
  NoOpLocalProjectCreationAudit,
  createLocalVerticalSliceServices,
  type CreateLocalProjectCommand,
  type LocalProjectIdSource,
} from "@/lib/vertical-slice-core";

const APP_ROOT = path.resolve(__dirname, "../..");
const REGISTRY_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS_ROOT = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

class FixedIdSource implements LocalProjectIdSource {
  private project = 0;
  private lps = 0;
  private correlation = 0;

  nextProjectId(): string {
    this.project += 1;
    return `prj:v1-project-${this.project}`;
  }

  nextLpsVersionId(): string {
    this.lps += 1;
    return `lps:v1-project-${this.lps}`;
  }

  nextCorrelationId(): string {
    this.correlation += 1;
    return `cor:v1-project-${this.correlation}`;
  }
}

const COMMAND: CreateLocalProjectCommand = {
  name: "Visible slice V1",
  objective: "Create a real local Project and LPS through T-A1.",
  context:
    "A bounded local project context that will later feed the visible UI.",
  perceivedCriticality: "STANDARD",
  constraints: ["No IAM", "No product persistence"],
  shortReference: "VS-V1",
  idempotencyKey: "idem:visible-slice-v1",
};

function createOptions() {
  return {
    registryRoot: REGISTRY_ROOT,
    schemasRoot: SCHEMAS_ROOT,
    nowIso: "2026-07-29T14:00:00.000Z",
    idSource: new FixedIdSource(),
  };
}

describe("visible slice V1 local composition", () => {
  it("creates services without React, network, fixtures, or IAM", () => {
    const services = createLocalVerticalSliceServices(createOptions());
    expect(services.architecture).toEqual({
      accessSurface: "HEADLESS_INTERNAL",
      businessState: "OA_MEMORY",
      doctrine: "T_A0_LOCAL_REGISTRY",
      project: "T_A1_PROJECT_LPS",
      audit: "OPTIONAL_BOUNDED_LOCAL",
      fixtures: "OFF_HAPPY_PATH",
      sessionStorage: "NOT_USED_FOR_BUSINESS_STATE",
      react: false,
      network: false,
      iam: "NOT_SELECTED",
      productPersistence: "NOT_SELECTED",
      realAgentExecution: "NOT_AVAILABLE",
    });
    expect(Object.isFrozen(services.architecture)).toBe(true);
  });

  it("supports disabled no-op audit", async () => {
    const services = createLocalVerticalSliceServices({
      ...createOptions(),
      audit: new NoOpLocalProjectCreationAudit(),
    });
    const result = await services.facade.createProject(COMMAND);
    expect(result.ok).toBe(true);
    expect(result.auditStatus).toBe("DISABLED");
  });

  it("records a bounded in-memory audit without business text", async () => {
    const audit = new MemoryLocalProjectCreationAudit();
    const services = createLocalVerticalSliceServices({
      ...createOptions(),
      audit,
    });
    const result = await services.facade.createProject(COMMAND);
    expect(result.ok).toBe(true);
    expect(result.auditStatus).toBe("RECORDED");
    expect(audit.events.map((event) => event.event)).toEqual([
      "LOCAL_PROJECT_CREATION_REQUESTED",
      "DOCTRINE_RESOLVED",
      "PROJECT_CREATED",
      "LPS_INITIALIZED",
    ]);
    const serialized = JSON.stringify(audit.events);
    expect(serialized).not.toContain(COMMAND.objective);
    expect(serialized).not.toContain(COMMAND.context);
    expect(serialized).not.toContain(COMMAND.constraints[0]);
  });

  it("does not block OA memory creation when optional audit fails", async () => {
    const services = createLocalVerticalSliceServices({
      ...createOptions(),
      audit: new FailingLocalProjectCreationAudit(),
    });
    const result = await services.facade.createProject(COMMAND);
    expect(result.ok).toBe(true);
    expect(result.auditStatus).toBe("FAILED_NON_BLOCKING");
    if (!result.ok) return;
    const loaded = await services.facade.getProjectOverview(
      result.project.projectId,
    );
    expect(loaded.ok).toBe(true);
  });
});

describe("visible slice V1 Project/LPS happy path", () => {
  it("resolves doctrine and returns a stable honest UI projection", async () => {
    const services = createLocalVerticalSliceServices(createOptions());
    const result = await services.facade.createProject(COMMAND);
    expect(result.ok).toBe(true);
    if (!result.ok) return;

    expect(result.project).toEqual({
      projectId: "prj:v1-project-1",
      projectName: "Visible slice V1",
      shortReference: "VS-V1",
      objective: COMMAND.objective,
      contextSummary: COMMAND.context,
      perceivedCriticality: "STANDARD",
      constraints: ["No IAM", "No product persistence"],
      doctrine: {
        id: "pkg:studio-v3-oa",
        version: "1.0.0",
        digest: DEFAULT_LOCAL_DOCTRINE_PIN.digest,
        status: "resolved",
      },
      lps: {
        id: "lps:v1-project-1",
        version: 1,
        createdAt: "2026-07-29T14:00:00.000Z",
      },
      localMode: true,
      iam: "NOT_SELECTED",
      productPersistence: "NOT_SELECTED",
      realAgentExecution: "NOT_AVAILABLE",
      delivery: "NOT_AUTHORIZED",
      cutover: "NOT_AUTHORIZED",
      source: "REAL_LOCAL_CORE",
      fixture: false,
    });
    expect(result.auditStatus).toBe("DISABLED");
    expect(Object.isFrozen(result.project)).toBe(true);
    expect(Object.isFrozen(result.project.doctrine)).toBe(true);
    expect(Object.isFrozen(result.project.constraints)).toBe(true);
  });

  it("reuses the real T-A1 result for a repeated idempotency key", async () => {
    const services = createLocalVerticalSliceServices(createOptions());
    const first = await services.facade.createProject(COMMAND);
    const second = await services.facade.createProject({
      ...COMMAND,
      name: "Ignored retry name",
    });
    expect(first.ok).toBe(true);
    expect(second.ok).toBe(true);
    if (!first.ok || !second.ok) return;
    expect(second.reusedFromIdempotencyKey).toBe(true);
    expect(second.project.projectId).toBe(first.project.projectId);
    expect(second.project.projectName).toBe(first.project.projectName);
  });

  it("rebuilds the overview from T-A1 instead of a UI cache", async () => {
    const services = createLocalVerticalSliceServices(createOptions());
    const created = await services.facade.createProject(COMMAND);
    expect(created.ok).toBe(true);
    if (!created.ok) return;

    const loaded = await services.facade.getProjectOverview(
      created.project.projectId,
    );
    expect(loaded).toEqual({
      ok: true,
      project: created.project,
    });
    if (!loaded.ok) return;
    expect(loaded.project).not.toBe(created.project);
    expect(Object.isFrozen(loaded.project)).toBe(true);
  });
});

describe("visible slice V1 failures", () => {
  it("rejects invalid facade input without a partial project", async () => {
    const services = createLocalVerticalSliceServices(createOptions());
    const result = await services.facade.createProject({
      ...COMMAND,
      name: " ",
    });
    expect(result).toMatchObject({
      ok: false,
      error: { code: "INPUT_INVALID", field: "name" },
    });
    const loaded = await services.facade.getProjectOverview(
      "prj:v1-project-1",
    );
    expect(loaded).toMatchObject({
      ok: false,
      error: { code: "PROJECT_NOT_FOUND" },
    });
  });

  it("fails closed for missing doctrine and creates no Project/LPS", async () => {
    const audit = new MemoryLocalProjectCreationAudit();
    const services = createLocalVerticalSliceServices({
      ...createOptions(),
      doctrinePackagePin: {
        ...DEFAULT_LOCAL_DOCTRINE_PIN,
        doctrinePackageId: "pkg:missing",
      },
      audit,
    });
    const result = await services.facade.createProject(COMMAND);
    expect(result).toMatchObject({
      ok: false,
      error: {
        code: "DOCTRINE_UNRESOLVED",
        projectDetailCode: "DOCTRINE_UNRESOLVED",
      },
    });
    const loaded = await services.facade.getProjectOverview(
      "prj:v1-project-1",
    );
    expect(loaded.ok).toBe(false);
    expect(audit.events.at(-1)).toMatchObject({
      event: "LOCAL_PROJECT_CREATION_FAILED",
      errorCode: "DOCTRINE_UNRESOLVED",
    });
  });

  it("fails closed for a digest mismatch", async () => {
    const services = createLocalVerticalSliceServices({
      ...createOptions(),
      doctrinePackagePin: {
        ...DEFAULT_LOCAL_DOCTRINE_PIN,
        digest:
          "sha256:0000000000000000000000000000000000000000000000000000000000000000",
      },
    });
    const result = await services.facade.createProject(COMMAND);
    expect(result).toMatchObject({
      ok: false,
      error: { code: "DOCTRINE_UNRESOLVED" },
    });
  });

  it("surfaces an excessive T-A1 snapshot as a typed failure", async () => {
    const services = createLocalVerticalSliceServices(createOptions());
    const result = await services.facade.createProject({
      ...COMMAND,
      objective: "x".repeat(260_000),
    });
    expect(result).toMatchObject({
      ok: false,
      error: {
        code: "PROJECT_CREATION_FAILED",
        projectDetailCode: "LPS_INVALID",
      },
    });
    const loaded = await services.facade.getProjectOverview(
      "prj:v1-project-1",
    );
    expect(loaded.ok).toBe(false);
  });

  it("returns a typed not-found result", async () => {
    const services = createLocalVerticalSliceServices(createOptions());
    const loaded = await services.facade.getProjectOverview(
      "prj:not-found",
    );
    expect(loaded).toMatchObject({
      ok: false,
      error: {
        code: "PROJECT_NOT_FOUND",
        projectDetailCode: "PROJECT_NOT_FOUND",
      },
    });
  });
});

describe("visible slice V1 optional bounded SQLite audit", () => {
  let tmpDir: string | null = null;

  afterEach(() => {
    resetD1DbForTests();
    delete process.env.D1_SQLITE_PATH;
    if (tmpDir) fs.rmSync(tmpDir, { recursive: true, force: true });
    tmpDir = null;
  });

  it("writes reference-only events to the existing d1_atomic_audit table", async () => {
    resetD1DbForTests();
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "visible-slice-v1-"));
    process.env.D1_SQLITE_PATH = path.join(tmpDir, "audit.sqlite");
    const store = new BoundedAtomicAuditStore();
    const services = createLocalVerticalSliceServices({
      ...createOptions(),
      audit: new BoundedSqliteLocalProjectCreationAudit(store),
    });

    const result = await services.facade.createProject(COMMAND);
    expect(result.ok).toBe(true);
    expect(result.auditStatus).toBe("RECORDED");
    const rows = store.findByIdempotencyKey(COMMAND.idempotencyKey);
    expect(rows).toHaveLength(4);
    expect(rows.at(-1)?.outcome).toBe("COMMITTED");
    const serialized = JSON.stringify(rows);
    expect(serialized).not.toContain(COMMAND.objective);
    expect(serialized).not.toContain(COMMAND.context);
    expect(serialized).not.toContain("No IAM");
  });
});
