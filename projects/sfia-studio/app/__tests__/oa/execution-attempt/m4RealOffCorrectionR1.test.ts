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
  SFIA_STUDIO_CURSOR_REAL_FLAG,
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
      timeoutMs: 15 * 60 * 1000,
    });
    expect(result.outcome).toBe("reject");
    if (result.outcome === "reject") {
      expect(result.detailCode).toBe("REAL_BOUNDARY_DISABLED");
    }
    expect(runner.calls).toHaveLength(0);
  });

  it("R1-10 pre-reproof bounding: argv --mode ask once + deterministic README instruction; timeout is request.timeoutMs", async () => {
    // Gateway-local enablement via flag constant — does not set process.env.
    // FakeProcessRunner only; no OS Cursor spawn.
    expect(process.env.SFIA_STUDIO_CURSOR_REAL).not.toBe("1");
    const workspacePath = "/tmp/fake-exec-root/wt-pre-reproof";
    const runner = new FakeProcessRunner({ processRef: "proc:sim:r1-10" });
    const workspace = new FakeRealExecutionWorkspacePort({ workspacePath });
    const gateway = new StudioCursorRealLaunchGateway({
      processRunner: runner,
      workspacePort: workspace,
      env: {
        ...process.env,
        [SFIA_STUDIO_CURSOR_REAL_FLAG]: "1",
      },
      resolveCursorBin: () => "/tmp/fake-cursor-bin",
    });

    const result = await gateway.launch({
      attemptId: "xat:r1-10-pre-reproof",
      executionContractId: "xct:pre-reproof",
      executionContractVersion: 1,
      semanticFingerprint: "fp:pre-reproof-bounding",
      selectedAgentRef: "agt:m4.cursor.bounded_readonly",
      adapterRef: gateway.gatewayId,
      correlationId: "cor:r1-10",
      baseHeadSha: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      action: "cursor.read_only.inspect",
      target: "workspace.isolated.read",
      scope: "studio.m4.real_off",
      timeoutMs: 15 * 60 * 1000,
    });

    expect(result.outcome).toBe("ack");
    expect(runner.calls).toHaveLength(1);
    expect(workspace.prepares).toHaveLength(1);
    expect(process.env.SFIA_STUDIO_CURSOR_REAL).not.toBe("1");

    const call = runner.calls[0];
    expect(call.timeoutMs).toBe(15 * 60 * 1000);
    expect(call.executable).toBe("/tmp/fake-cursor-bin");
    expect(call.cwd).toBe(workspacePath);

    const argv = [...call.argv];
    expect(argv.filter((a) => a === "--mode")).toHaveLength(1);
    expect(argv.filter((a) => a === "ask")).toHaveLength(1);
    const modeIdx = argv.indexOf("--mode");
    expect(argv[modeIdx + 1]).toBe("ask");

    expect(argv).toContain("--print");
    expect(argv).toContain("--workspace");
    expect(argv).toContain("--trust");
    expect(argv).toContain("--sandbox");
    expect(argv[argv.indexOf("--sandbox") + 1]).toBe("enabled");
    expect(argv[0]).toBe("agent");
    expect(argv[argv.indexOf("--workspace") + 1]).toBe(workspacePath);

    const instruction = argv[argv.length - 1];
    expect(typeof instruction).toBe("string");
    expect(instruction).toContain("README.md");
    expect(instruction).toContain("M4_READ_ONLY_OK");
    expect(instruction).toContain("M4_READ_ONLY_UNAVAILABLE");
    expect(instruction).toMatch(/Ne lancer aucune commande Shell/i);
    expect(instruction).toMatch(/Glob/i);
    expect(instruction).toMatch(/Grep/i);
    expect(instruction).toMatch(/Ne consulter aucun autre fichier/i);
    expect(instruction).toMatch(/Ne modifier aucun fichier/i);
    expect(instruction).toMatch(/git remote/i);
    expect(instruction).toMatch(/commit/i);
    expect(instruction).toMatch(/push/i);
    expect(instruction).toMatch(/PR/i);
    expect(instruction).toMatch(/merge/i);
    expect(instruction).toContain("target=workspace.isolated.read");
    expect(instruction).toContain("action=cursor.read_only.inspect");
    expect(instruction).toContain("scope=studio.m4.real_off");
    expect(instruction).toContain("fingerprint=fp:pre-reproof-bounding");
    expect(instruction).not.toMatch(/lecture seule bornée/);
    expect(instruction).not.toMatch(/inspect(?:ion)?\s+(?:globale|libre|workspace)/i);
  });

  it("R1-11 fail-closed: missing or invalid timeoutMs never invents 60_000", async () => {
    expect(process.env.SFIA_STUDIO_CURSOR_REAL).not.toBe("1");
    const runner = new FakeProcessRunner({ processRef: "proc:sim:r1-11" });
    const gateway = new StudioCursorRealLaunchGateway({
      processRunner: runner,
      workspacePort: new FakeRealExecutionWorkspacePort({
        workspacePath: "/tmp/fake-exec-root/wt-r1-11",
      }),
      env: {
        ...process.env,
        [SFIA_STUDIO_CURSOR_REAL_FLAG]: "1",
      },
      resolveCursorBin: () => "/tmp/fake-cursor-bin",
    });
    const base = {
      attemptId: "xat:r1-11",
      executionContractId: "xct:r1-11",
      executionContractVersion: 1,
      semanticFingerprint: "fp:r1-11",
      selectedAgentRef: "agt:m4.cursor.bounded_readonly",
      adapterRef: gateway.gatewayId,
      correlationId: "cor:r1-11",
      baseHeadSha: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    };
    for (const timeoutMs of [0, -1, 61 * 60 * 1000, Number.NaN]) {
      const result = await gateway.launch({
        ...base,
        timeoutMs,
      } as never);
      expect(result.outcome).toBe("reject");
      if (result.outcome === "reject") {
        expect(result.detailCode).toBe("REAL_LAUNCH_FAILED");
      }
    }
    expect(runner.calls).toHaveLength(0);
  });
});
