/**
 * @vitest-environment node
 * Adversarial closure of F-QA-D2D1-01 and F-QA-D2D1-02.
 */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it, vi } from "vitest";
import { AjvExecutionRunSchemaValidation } from "@/lib/oa/execution-run/infrastructure/ajvExecutionRunSchemaValidation";
import { FixedClock } from "@/lib/oa/execution-run/infrastructure/fixedClock";
import { SequentialIdentity } from "@/lib/oa/execution-run/infrastructure/sequentialIdentity";
import { persistExecutionRunInternal } from "@/lib/oa/execution-run/application/internal/persistExecutionRunInternal";
import {
  checkExecutionRunInvariants,
  createExecutionRun,
  createOfficialEvidence,
  createSourceDisclosure,
  EXECUTION_RUN_SCHEMA_VERSION,
  getFixture,
  usageUnavailable,
} from "@/lib/oa/execution-run";
import * as rootBarrel from "@/lib/oa/execution-run";
import * as serverBarrel from "@/lib/oa/execution-run/server";
import { composeExecutionRunMemory } from "@/lib/oa/execution-run/server";
import type { ExecutionRun, ExecutionRunRepositoryPort } from "@/lib/oa/execution-run";

const schemasDir = path.resolve(
  __dirname,
  "../../../lib/oa/execution-run/schemas",
);
const MODULE_ROOT = path.resolve(__dirname, "../../../lib/oa/execution-run");

const cursorIntent = {
  intentId: "intent:cursor",
  correlationId: "corr:cursor",
  requestedLane: "cursor" as const,
  operation: "sandbox_read",
  requestedSource: "fixture" as const,
  requiresHumanGate: false,
  mutationRequested: false,
  arbitraryCommandRequested: false,
};
const cursorContext = {
  projectId: "p1",
  actorId: "a1",
  declaredSource: "fixture" as const,
  permissions: { gitRead: true, gitWrite: false, providerInvoke: true },
};

function cursorRun(over: Partial<ExecutionRun> = {}): ExecutionRun {
  return {
    schemaVersion: EXECUTION_RUN_SCHEMA_VERSION,
    runId: "run:cursor",
    correlationId: "corr:cursor",
    state: "idle",
    intent: cursorIntent,
    context: cursorContext,
    disclosure: {
      source: "fixture",
      providerLane: "cursor",
      limits: ["test"],
      processLocalMemory: true,
      cursorUnverified: true,
    },
    createdAt: "2026-08-03T20:00:00.000Z",
    updatedAt: "2026-08-03T20:00:00.000Z",
    version: 1,
    capability: {
      lane: "cursor",
      capabilityId: "cursor:fake",
      available: true,
      verified: false,
      readOnly: true,
      supportsCancellation: true,
      supportsTimeout: true,
    },
    usage: usageUnavailable("x"),
    persistence: {
      kind: "memory_process_local",
      durable: false,
      multiInstance: false,
      restartSafe: false,
    },
    ...over,
  };
}

describe("F-QA-D2D1-01 Cursor unverified closure", () => {
  it("A refuses persist with verified true and cursorUnverified false", async () => {
    const save = vi.fn();
    const repository: ExecutionRunRepositoryPort = {
      save,
      getById: async () => null,
      listByCorrelationId: async () => [],
    };
    const run = cursorRun({
      disclosure: {
        source: "fixture",
        providerLane: "cursor",
        limits: ["test"],
        processLocalMemory: true,
        cursorUnverified: false,
      },
      capability: {
        lane: "cursor",
        capabilityId: "cursor:fake",
        available: true,
        verified: true,
        readOnly: true,
        supportsCancellation: true,
        supportsTimeout: true,
      },
    });
    const codes = checkExecutionRunInvariants(run).map((i) => i.code);
    expect(codes).toEqual(
      expect.arrayContaining([
        "CURSOR_UNVERIFIED_DISCLOSURE_REQUIRED",
        "CURSOR_VERIFIED_CLAIM_FORBIDDEN",
      ]),
    );
    const r = await persistExecutionRunInternal(run, {
      repository,
      schemas: new AjvExecutionRunSchemaValidation(schemasDir),
    });
    expect(r.ok).toBe(false);
    expect(save).not.toHaveBeenCalled();
  });

  it("B refuses disclosure.cursorUnverified false with verified false", async () => {
    const save = vi.fn();
    const r = await persistExecutionRunInternal(
      cursorRun({
        disclosure: {
          source: "fixture",
          providerLane: "cursor",
          limits: ["test"],
          processLocalMemory: true,
          cursorUnverified: false,
        },
      }),
      {
        repository: {
          save,
          getById: async () => null,
          listByCorrelationId: async () => [],
        },
        schemas: new AjvExecutionRunSchemaValidation(schemasDir),
      },
    );
    expect(r.ok).toBe(false);
    expect(save).not.toHaveBeenCalled();
  });

  it("C refuses capability.verified true with cursorUnverified true", async () => {
    const save = vi.fn();
    const r = await persistExecutionRunInternal(
      cursorRun({
        capability: {
          lane: "cursor",
          capabilityId: "cursor:fake",
          available: true,
          verified: true,
          readOnly: true,
          supportsCancellation: true,
          supportsTimeout: true,
        },
      }),
      {
        repository: {
          save,
          getById: async () => null,
          listByCorrelationId: async () => [],
        },
        schemas: new AjvExecutionRunSchemaValidation(schemasDir),
      },
    );
    expect(r.ok).toBe(false);
    expect(save).not.toHaveBeenCalled();
  });

  it("D create Cursor verified rejects before clock/identity/save", async () => {
    const save = vi.fn();
    const clock = new FixedClock("2026-08-03T20:00:00.000Z");
    const identity = new SequentialIdentity();
    const nowSpy = vi.spyOn(clock, "nowIso");
    const idSpy = vi.spyOn(identity, "nextRunId");
    const r = await createExecutionRun(
      {
        intent: cursorIntent,
        context: cursorContext,
        capability: {
          lane: "cursor",
          capabilityId: "cursor:fake",
          available: true,
          verified: true,
          readOnly: true,
          supportsCancellation: true,
          supportsTimeout: true,
        },
      },
      {
        clock,
        identity,
        repository: {
          save,
          getById: async () => null,
          listByCorrelationId: async () => [],
        },
        schemas: new AjvExecutionRunSchemaValidation(schemasDir),
      },
    );
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.failure.code).toBe("SANDBOX_BLOCKED");
    expect(nowSpy).not.toHaveBeenCalled();
    expect(idSpy).not.toHaveBeenCalled();
    expect(save).not.toHaveBeenCalled();
  });

  it("E create Cursor verified false blocks with unverified disclosure", async () => {
    const c = composeExecutionRunMemory();
    const r = await c.createExecutionRun({
      intent: cursorIntent,
      context: cursorContext,
      capability: {
        lane: "cursor",
        capabilityId: "cursor:fake",
        available: true,
        verified: false,
        readOnly: true,
        supportsCancellation: true,
        supportsTimeout: true,
      },
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.failure.code).toBe("SANDBOX_BLOCKED");
    expect(r.run?.state).toBe("blocked");
    expect(r.run?.disclosure.cursorUnverified).toBe(true);
    expect(r.run?.capability?.verified).not.toBe(true);
  });

  it("F non-Cursor AI capability may remain verified true", async () => {
    const f = getFixture("nominal");
    expect(f.capability?.verified).toBe(true);
    const c = composeExecutionRunMemory();
    const r = await c.createExecutionRun({
      intent: f.intent,
      context: f.context,
      capability: f.capability,
    });
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.run.capability?.verified).toBe(true);
  });
});

describe("F-QA-D2D1-02 public persistence surface closure", () => {
  it("G root barrel has no persist exports", () => {
    expect("persistExecutionRun" in rootBarrel).toBe(false);
    expect("persistExecutionRunInternal" in rootBarrel).toBe(false);
    expect("createExecutionRun" in rootBarrel).toBe(true);
    expect("transitionExecutionRun" in rootBarrel).toBe(true);
  });

  it("H server barrel and composition expose no persist/save/repository", () => {
    expect("persistExecutionRun" in serverBarrel).toBe(false);
    expect("persistExecutionRunInternal" in serverBarrel).toBe(false);
    const c = composeExecutionRunMemory() as Record<string, unknown>;
    expect(c.persistExecutionRun).toBeUndefined();
    expect(c.persistExecutionRunInternal).toBeUndefined();
    expect(c.save).toBeUndefined();
    expect(c.repository).toBeUndefined();
    expect(typeof c.createExecutionRun).toBe("function");
    expect(typeof c.transitionExecutionRun).toBe("function");
    expect(typeof c.getById).toBe("function");
    expect(typeof c.listByCorrelationId).toBe("function");
  });

  it("I succeeded only via create → running → outputs_validated", async () => {
    const c = composeExecutionRunMemory();
    const f = getFixture("nominal");
    const created = await c.createExecutionRun({
      intent: f.intent,
      context: f.context,
      capability: f.capability,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const started = await c.transitionExecutionRun({
      runId: created.run.runId,
      reason: "intent_valid",
    });
    expect(started.ok).toBe(true);
    const done = await c.transitionExecutionRun({
      runId: created.run.runId,
      reason: "outputs_validated",
      completeness: "complete",
      externalResult: {
        kind: "success",
        completeness: "complete",
        redactedSummary: "ok",
        rawPresent: false,
      },
    });
    expect(done.ok).toBe(true);
    if (done.ok) {
      expect(done.run.state).toBe("succeeded");
      expect(done.run.evidence?.some((e) => e.official && !e.late)).toBe(true);
    }
  });

  it("internal helper import allowlist is closed", () => {
    const allowed = new Set([
      path.join(MODULE_ROOT, "application/createExecutionRun.ts"),
      path.join(MODULE_ROOT, "application/transitionExecutionRun.ts"),
      // tests may import for guard verification
    ]);
    const hits: string[] = [];
    function walk(dir: string) {
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          if (entry.name === "node_modules") continue;
          walk(full);
          continue;
        }
        if (!/\.tsx?$/.test(entry.name)) continue;
        if (full.endsWith("persistExecutionRunInternal.ts")) continue;
        const text = fs.readFileSync(full, "utf8");
        if (!/persistExecutionRunInternal/.test(text)) continue;
        if (allowed.has(full)) continue;
        if (full.includes(`${path.sep}__tests__${path.sep}`)) continue;
        hits.push(path.relative(MODULE_ROOT, full));
      }
    }
    walk(MODULE_ROOT);
    // also scan app outside module for accidental imports
    const appLib = path.resolve(MODULE_ROOT, "../../..");
    function walkApp(dir: string) {
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          if (["node_modules", ".next", "execution-run"].includes(entry.name)) continue;
          walkApp(full);
          continue;
        }
        if (!/\.tsx?$/.test(entry.name)) continue;
        const text = fs.readFileSync(full, "utf8");
        if (/persistExecutionRunInternal|application\/persistExecutionRun/.test(text)) {
          hits.push(path.relative(appLib, full));
        }
      }
    }
    walkApp(path.join(appLib, "lib"));
    expect(hits).toEqual([]);
    expect(fs.existsSync(path.join(MODULE_ROOT, "application/persistExecutionRun.ts"))).toBe(
      false,
    );
  });
});
