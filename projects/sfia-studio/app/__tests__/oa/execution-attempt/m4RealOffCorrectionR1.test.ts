/**
 * M4 REAL-OFF correction R1 — production NodeCursorProcessRunner + no Fake product exports.
 * @vitest-environment node
 */
import { readFileSync } from "node:fs";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import * as ExecutionAttemptBarrel from "@/lib/oa/execution-attempt";
import {
  assertStudioCursorRealOffForTests,
  createInMemoryExecutionAttemptServices,
  DisabledRealProcessRunner,
  NODE_CURSOR_STDERR_CAP_BYTES,
  NODE_CURSOR_STDOUT_CAP_BYTES,
  NodeCursorProcessRunner,
  StudioCursorRealLaunchGateway,
} from "@/lib/oa/execution-attempt";
import { FakeProcessRunner } from "./support/fakeProcessRunner";
import {
  FakeRealExecutionWorkspacePort,
  FakeSpawnPrimitive,
} from "./support/fakeSpawnAndGit";

const BARREL_SRC = path.resolve(
  __dirname,
  "../../../lib/oa/execution-attempt/index.ts",
);

describe("M4 REAL-OFF correction R1", () => {
  beforeEach(() => {
    assertStudioCursorRealOffForTests();
  });
  afterEach(() => {
    assertStudioCursorRealOffForTests();
  });

  it("R1-01 barrel does not export Fake REAL doubles", () => {
    const src = readFileSync(BARREL_SRC, "utf8");
    expect(src).not.toMatch(/export\s+\{[^}]*FakeProcessRunner/);
    expect(src).not.toMatch(/export\s+\{[^}]*FakeRealProcessRunner/);
    expect(src).not.toMatch(/export\s+\{[^}]*FakeRealExecutionLaunchGateway/);
    expect(src).not.toMatch(
      /from\s+["'].*fakeRealExecutionLaunchGateway["']/,
    );
    expect(
      (ExecutionAttemptBarrel as Record<string, unknown>).FakeProcessRunner,
    ).toBeUndefined();
    expect(
      (ExecutionAttemptBarrel as Record<string, unknown>).FakeRealProcessRunner,
    ).toBeUndefined();
    expect(
      (ExecutionAttemptBarrel as Record<string, unknown>)
        .FakeRealExecutionLaunchGateway,
    ).toBeUndefined();
    expect(
      (ExecutionAttemptBarrel as Record<string, unknown>)
        .createM4RealOffBoundaryHelpers,
    ).toBeUndefined();
  });

  it("R1-02 product factory never defaults Fake REAL runner", () => {
    const src = readFileSync(BARREL_SRC, "utf8");
    expect(src).not.toMatch(/new FakeRealProcessRunner/);
    expect(src).not.toMatch(/new FakeProcessRunner/);
    expect(typeof createInMemoryExecutionAttemptServices).toBe("function");
  });

  it("R1-03/04 NodeCursorProcessRunner uses separate executable + shell:false", async () => {
    const fake = new FakeSpawnPrimitive({ pid: 9001, exitCode: 0 });
    const runner = new NodeCursorProcessRunner({
      spawnPrimitive: fake.asSpawnPrimitive(),
    });
    const result = await runner.invoke({
      attemptId: "xat:r1",
      executable: "/tmp/fake-cursor",
      argv: ["agent", "--print", "hi"],
      cwd: "/tmp/ws",
      timeoutMs: 5_000,
      env: process.env,
    });
    expect(fake.calls).toHaveLength(1);
    expect(fake.calls[0].executable).toBe("/tmp/fake-cursor");
    expect(fake.calls[0].argv).toEqual(["agent", "--print", "hi"]);
    expect(fake.calls[0].argv[0]).not.toBe("/tmp/fake-cursor");
    expect(fake.calls[0].options.shell).toBe(false);
    expect(result.realProcessInvoked).toBe(true);
    expect(result.processRef).toBe("pid:9001");
  });

  it("R1-05 pre-spawn failure → realProcessInvoked=false", async () => {
    const fake = new FakeSpawnPrimitive({ throwBeforeSpawn: true });
    const runner = new NodeCursorProcessRunner({
      spawnPrimitive: fake.asSpawnPrimitive(),
    });
    const result = await runner.invoke({
      attemptId: "xat:r1-pre",
      executable: "/tmp/fake-cursor",
      argv: ["agent"],
      cwd: "/tmp/ws",
      timeoutMs: 1_000,
      env: process.env,
    });
    expect(result.realProcessInvoked).toBe(false);
  });

  it("R1-05b spawn error before start → realProcessInvoked=false", async () => {
    const fake = new FakeSpawnPrimitive({ errorBeforeSpawn: true });
    const runner = new NodeCursorProcessRunner({
      spawnPrimitive: fake.asSpawnPrimitive(),
    });
    const result = await runner.invoke({
      attemptId: "xat:r1-err",
      executable: "/tmp/fake-cursor",
      argv: ["agent"],
      cwd: "/tmp/ws",
      timeoutMs: 1_000,
      env: process.env,
    });
    expect(result.realProcessInvoked).toBe(false);
  });

  it("R1-06 spawn confirmed yields stable processRef", async () => {
    const fake = new FakeSpawnPrimitive({ pid: 7777, exitCode: 0 });
    const runner = new NodeCursorProcessRunner({
      spawnPrimitive: fake.asSpawnPrimitive(),
    });
    const result = await runner.invoke({
      attemptId: "xat:r1-ack",
      executable: "/bin/cursor",
      argv: ["agent"],
      cwd: "/tmp/ws",
      timeoutMs: 2_000,
      env: process.env,
    });
    expect(result.realProcessInvoked).toBe(true);
    expect(result.processRef).toBe("pid:7777");
  });

  it("R1-07 timeout issues SIGTERM via fake child AFTER invoke ACK", async () => {
    const fake = new FakeSpawnPrimitive({
      pid: 5555,
      hangMs: 5_000,
      exitCode: null,
    });
    const runner = new NodeCursorProcessRunner({
      spawnPrimitive: fake.asSpawnPrimitive(),
    });
    const result = await runner.invoke({
      attemptId: "xat:r1-to",
      executable: "/bin/cursor",
      argv: ["agent"],
      cwd: "/tmp/ws",
      timeoutMs: 20,
      env: process.env,
    });
    expect(result.realProcessInvoked).toBe(true);
    expect(result.observation?.timedOut).toBe(false);
    expect(result.observation?.exitCode).toBeNull();
    const completed = await runner.awaitCompletion(result.processRef);
    expect(completed?.timedOut).toBe(true);
    expect(fake.lastHandle?.lastSignal).toBe("SIGTERM");
  });

  it("R1-08 stdout/stderr caps at 64 KiB on completion (after ACK)", async () => {
    const big = "x".repeat(NODE_CURSOR_STDOUT_CAP_BYTES + 4_096);
    const fake = new FakeSpawnPrimitive({
      pid: 1,
      exitCode: 0,
      stdoutChunks: [big],
      stderrChunks: [big],
    });
    const runner = new NodeCursorProcessRunner({
      spawnPrimitive: fake.asSpawnPrimitive(),
    });
    const result = await runner.invoke({
      attemptId: "xat:r1-cap",
      executable: "/bin/cursor",
      argv: ["agent"],
      cwd: "/tmp/ws",
      timeoutMs: 2_000,
      env: process.env,
    });
    expect(result.realProcessInvoked).toBe(true);
    const completed = await runner.awaitCompletion(result.processRef);
    expect(completed?.stdout?.length).toBe(NODE_CURSOR_STDOUT_CAP_BYTES);
    expect(completed?.stderr?.length).toBe(NODE_CURSOR_STDERR_CAP_BYTES);
  });

  it("R1-09 gateway OFF never falls back to fixture; DisabledRealProcessRunner stays product", async () => {
    expect(new DisabledRealProcessRunner()).toBeInstanceOf(
      DisabledRealProcessRunner,
    );
    const runner = new FakeProcessRunner();
    const gateway = new StudioCursorRealLaunchGateway({
      processRunner: runner,
      workspacePort: new FakeRealExecutionWorkspacePort(),
      env: { ...process.env },
      resolveCursorBin: () => "/tmp/fake-cursor-bin",
    });
    const result = await gateway.launch({
      attemptId: "xat:r1-09",
      executionContractId: "xct:1",
      executionContractVersion: 1,
      semanticFingerprint: "fp",
      selectedAgentRef: "agt:m4",
      adapterRef: gateway.gatewayId,
      correlationId: "cor:1",
      baseHeadSha: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    });
    expect(result.outcome).toBe("reject");
    if (result.outcome === "reject") {
      expect(result.detailCode).toBe("REAL_BOUNDARY_DISABLED");
    }
    expect(runner.calls).toHaveLength(0);
  });
});
