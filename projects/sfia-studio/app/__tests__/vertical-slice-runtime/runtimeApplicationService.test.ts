/** @vitest-environment node */
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import {
  createRuntimeApplicationService,
  getRuntimeApplicationService,
  isRuntimeApplicationServiceInitialized,
  resetRuntimeApplicationServiceForTests,
  RUNTIME_DISCLOSURES,
  RUNTIME_READINESS_NOT_READY,
  type CreateProjectRuntimeInput,
} from "@/lib/vertical-slice-runtime";

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
    return `prj:v2a1-${this.project}`;
  }

  nextLpsVersionId(): string {
    this.lps += 1;
    return `lps:v2a1-${this.lps}`;
  }

  nextCorrelationId(): string {
    this.correlation += 1;
    return `cor:v2a1-${this.correlation}`;
  }
}

const INPUT: CreateProjectRuntimeInput = {
  name: "Visible slice V2-A1",
  objective: "Create through runtime bridge over V1 facade.",
  context: "Process-local runtime contract for future Studio UI.",
  criticality: "STANDARD",
  constraints: ["No UI", "No IAM", "No product persistence"],
  shortReference: "VS-V2A1",
  idempotencyKey: "idem:visible-slice-v2-a1",
};

function createService(nowIso = "2026-07-29T19:00:00.000Z") {
  return createRuntimeApplicationService({
    registryRoot: REGISTRY_ROOT,
    schemasRoot: SCHEMAS_ROOT,
    nowIso,
    idSource: new FixedIdSource(),
    auditMode: "noop",
  });
}

afterEach(() => {
  resetRuntimeApplicationServiceForTests();
});

describe("V2-A1 RuntimeApplicationService", () => {
  it("creates a project through the runtime service with disclosures and not-ready readiness", async () => {
    const runtime = createService();
    const result = await runtime.createProject(INPUT);
    expect(result.ok).toBe(true);
    if (!result.ok) return;

    expect(result.projectId).toBe("prj:v2a1-1");
    expect(result.project.name).toBe(INPUT.name);
    expect(result.project.criticality).toBe("STANDARD");
    expect(result.project.fixture).toBe(false);
    expect(result.doctrine.id).toBe("pkg:studio-v3-oa");
    expect(result.livingState.version).toBe(1);
    expect(result.livingState.createdAt).toBe("2026-07-29T19:00:00.000Z");
    expect(result.readiness).toEqual(RUNTIME_READINESS_NOT_READY);
    expect(result.readiness.runReady).toBe(false);
    expect(result.readiness.productReady).toBe(false);
    expect(result.disclosures).toEqual(RUNTIME_DISCLOSURES);
    expect(result.disclosures.runtimeMode).toBe("LOCAL_PROCESS");
    expect(result.disclosures.persistence).toBe("PARTIAL_PROJECT_LPS_CYCLE_DURABLE");
    expect(result.disclosures.productPersistence).toBe("SQLITE_OA_PRODUCT_STORE");
    expect(result.disclosures.projectLpsRestartSafe).toBe(true);
    expect(result.disclosures.cycleInstanceRestartSafe).toBe(true);
    expect(result.disclosures.agentExecution).toBe("DISABLED");
    expect(result.auditStatus).toBe("DISABLED");
    expect(result.reusedFromIdempotencyKey).toBe(false);
  });

  it("reads the same project through the runtime service", async () => {
    const runtime = createService();
    const created = await runtime.createProject(INPUT);
    expect(created.ok).toBe(true);
    if (!created.ok) return;

    const loaded = await runtime.getProject(created.projectId);
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) return;
    expect(loaded.project.projectId).toBe(created.projectId);
    expect(loaded.livingState.id).toBe(created.livingState.id);
    expect(loaded.disclosures.runtimeMode).toBe("LOCAL_PROCESS");
    expect(loaded.readiness.status).toBe("NOT_READY");
  });

  it("propagates typed errors", async () => {
    const runtime = createService();
    const invalid = await runtime.createProject({
      ...INPUT,
      name: "",
      idempotencyKey: "idem:invalid",
    });
    expect(invalid).toMatchObject({
      ok: false,
      error: { code: "INPUT_INVALID", field: "name" },
      disclosures: { runtimeMode: "LOCAL_PROCESS" },
    });

    const missing = await runtime.getProject("prj:missing");
    expect(missing).toMatchObject({
      ok: false,
      error: { code: "PROJECT_NOT_FOUND" },
      disclosures: { persistence: "PARTIAL_PROJECT_LPS_CYCLE_DURABLE" },
    });
  });

  it("propagates V1 idempotency through the runtime mapping", async () => {
    const runtime = createService();
    const first = await runtime.createProject(INPUT);
    const second = await runtime.createProject({
      ...INPUT,
      name: "Changed title ignored on reuse",
    });
    expect(first.ok).toBe(true);
    expect(second.ok).toBe(true);
    if (!first.ok || !second.ok) return;
    expect(second.reusedFromIdempotencyKey).toBe(true);
    expect(second.projectId).toBe(first.projectId);
    expect(second.project.name).toBe(first.project.name);
  });

  it("preserves an injectable fixed clock into living state timestamps", async () => {
    const runtime = createService("2026-07-29T21:30:00.000Z");
    const result = await runtime.createProject({
      ...INPUT,
      idempotencyKey: "idem:clock",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.livingState.createdAt).toBe("2026-07-29T21:30:00.000Z");
  });

  it("uses a process-local singleton and supports test reset", async () => {
    expect(isRuntimeApplicationServiceInitialized()).toBe(false);
    const a = getRuntimeApplicationService({
      registryRoot: REGISTRY_ROOT,
      schemasRoot: SCHEMAS_ROOT,
      nowIso: "2026-07-29T19:00:00.000Z",
      idSource: new FixedIdSource(),
      auditMode: "noop",
    });
    const b = getRuntimeApplicationService();
    expect(a).toBe(b);
    expect(isRuntimeApplicationServiceInitialized()).toBe(true);

    const slotKey = "__SFIA_V2_RUNTIME_APPLICATION_SERVICE__";
    const slot = (
      globalThis as typeof globalThis & {
        [slotKey]?: { service: unknown };
      }
    )[slotKey];
    expect(slot?.service).toBe(a);

    const created = await a.createProject({
      ...INPUT,
      idempotencyKey: "idem:singleton",
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const loaded = await b.getProject(created.projectId);
    expect(loaded.ok).toBe(true);

    resetRuntimeApplicationServiceForTests();
    expect(isRuntimeApplicationServiceInitialized()).toBe(false);
    expect(slot?.service).toBeNull();
  });

  it("defaults audit mode to noop (D-V2-03)", async () => {
    const runtime = createRuntimeApplicationService({
      registryRoot: REGISTRY_ROOT,
      schemasRoot: SCHEMAS_ROOT,
      nowIso: "2026-07-29T19:00:00.000Z",
      idSource: new FixedIdSource(),
    });
    const result = await runtime.createProject({
      ...INPUT,
      idempotencyKey: "idem:default-audit",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.auditStatus).toBe("DISABLED");
  });

  it("exposes headless architecture flags without product persistence or agent", () => {
    const runtime = createService();
    expect(runtime.architecture.productPersistence).toBe(
      "SQLITE_OA_PRODUCT_STORE",
    );
    expect(runtime.architecture.businessState).toBe("OA_PRODUCT_SQLITE_T_A1");
    expect(runtime.architecture.realAgentExecution).toBe("NOT_AVAILABLE");
    expect(runtime.architecture.react).toBe(false);
    expect(runtime.architecture.network).toBe(false);
  });
});
