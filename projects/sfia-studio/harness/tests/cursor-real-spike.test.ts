import { createHash } from "node:crypto";
import { describe, expect, it } from "vitest";
import { HarnessError } from "../src/types/contracts.js";
import {
  assertSandboxPaths,
  buildCursorAgentArgv,
  CURSOR_REAL_SPIKE_FLAG,
  CursorExecutorPortRealSpike,
  filterSpikeEnv,
  isCursorRealSpikeEnabled,
  spawnWithTimeout,
  type CursorRealSpikeContract,
} from "../src/ports/cursorRealSpike.js";
import { CursorExecutorPortFixture } from "../src/ports/cursorFixture.js";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SANDBOX = path.resolve(HERE, "../spikes/cursor-real/sandbox");

function sampleContract(overrides: Partial<CursorRealSpikeContract> = {}): CursorRealSpikeContract {
  const base = {
    spikeId: "spike-cur-001",
    requestId: "req-spike-001",
    executionId: "exec-spike-001",
    mechanismId: "cursor-agent-cli",
    mechanismVersion: "2026.07.16-899851b",
    instruction: "Read fixtures/input.txt and write a one-line summary to output/summary.txt. Do not run git. Do not touch other paths.",
    workingDirectory: SANDBOX,
    allowedReadPaths: ["fixtures/input.txt"],
    allowedWritePaths: ["output/summary.txt"],
    deniedPaths: ["projects/sfia-studio/app", "../"],
    timeoutMs: 5_000,
    expectedOutputs: ["output/summary.txt"],
    gitEffect: "none" as const,
    networkEffect: "unknown" as const,
    cursorMode: "real-spike" as const,
    contractHash: "",
    initiatedBy: "Morris",
    initiatedAt: new Date().toISOString(),
  };
  const merged = { ...base, ...overrides };
  const { contractHash: _h, ...canon } = merged;
  merged.contractHash = createHash("sha256").update(JSON.stringify(canon)).digest("hex");
  return merged;
}

describe("cursor real spike — unit (no live Cursor required)", () => {
  it("feature flag disabled by default", () => {
    const prev = process.env[CURSOR_REAL_SPIKE_FLAG];
    delete process.env[CURSOR_REAL_SPIKE_FLAG];
    expect(isCursorRealSpikeEnabled({ enabled: true })).toBe(false);
    expect(isCursorRealSpikeEnabled({ enabled: false })).toBe(false);
    if (prev !== undefined) process.env[CURSOR_REAL_SPIKE_FLAG] = prev;
  });

  it("stable fixture still works and claims no real Cursor", async () => {
    const f = new CursorExecutorPortFixture();
    const r = await f.execute({
      requestId: "r1",
      executionId: "e1",
      mode: "fixture",
      objective: "noop",
      timeoutMs: 1000,
    });
    expect(r.ok).toBe(true);
    expect(r.realCursorClaimed).toBe(false);
  });

  it("RealSpike.execute() refuses stable path", async () => {
    const spike = new CursorExecutorPortRealSpike({ enabled: true });
    process.env[CURSOR_REAL_SPIKE_FLAG] = "1";
    await expect(
      spike.execute({
        requestId: "r1",
        executionId: "e1",
        mode: "fixture",
        objective: "x",
        timeoutMs: 1000,
      }),
    ).rejects.toBeInstanceOf(HarnessError);
    delete process.env[CURSOR_REAL_SPIKE_FLAG];
  });

  it("builds argv without shell concatenation", () => {
    const { command, argv } = buildCursorAgentArgv({
      bin: "/Applications/Cursor.app/Contents/Resources/app/bin/cursor",
      instruction: "hello; rm -rf /",
      workspace: SANDBOX,
      mode: "ask",
      useNestedAgentSubcommand: true,
    });
    expect(command).toContain("cursor");
    expect(argv).toEqual([
      "agent",
      "--print",
      "--mode",
      "ask",
      "--workspace",
      SANDBOX,
      "--trust",
      "--sandbox",
      "enabled",
      "hello; rm -rf /",
    ]);
    expect(argv.join(" ")).not.toMatch(/&&|\|/);
  });

  it("builds agent write mode without --mode and without --force", () => {
    const { argv } = buildCursorAgentArgv({
      bin: "/Applications/Cursor.app/Contents/Resources/app/bin/cursor",
      instruction: "write summary",
      workspace: SANDBOX,
      mode: "agent",
      useNestedAgentSubcommand: true,
    });
    expect(argv).not.toContain("--mode");
    expect(argv).not.toContain("--force");
    expect(argv).not.toContain("--yolo");
    expect(argv).toContain("--sandbox");
    expect(argv).toContain("enabled");
  });

  it("rejects cwd outside sandbox", () => {
    expect(() =>
      assertSandboxPaths(
        sampleContract({
          workingDirectory: path.resolve(SANDBOX, "../../.."),
        }),
      ),
    ).toThrow(HarnessError);
  });

  it("rejects write path escape", () => {
    expect(() =>
      assertSandboxPaths(
        sampleContract({
          allowedWritePaths: ["../../../README.md"],
        }),
      ),
    ).toThrow(HarnessError);
  });

  it("filters env and strips CURSOR_API_KEY", () => {
    const filtered = filterSpikeEnv({
      PATH: "/usr/bin",
      HOME: "/Users/x",
      CURSOR_API_KEY: "cursor_should_not_leak",
      GITHUB_TOKEN: "ghp_x",
      SECRET_THING: "nope",
      SFIA_CURSOR_REAL_SPIKE: "1",
    });
    expect(filtered.CURSOR_API_KEY).toBeUndefined();
    expect(filtered.GITHUB_TOKEN).toBeUndefined();
    expect(filtered.SECRET_THING).toBeUndefined();
    expect(filtered.PATH).toBe("/usr/bin");
    expect(filtered[CURSOR_REAL_SPIKE_FLAG]).toBe("1");
  });

  it("timeout kills child process (S-CUR-04 wrapper)", async () => {
    const r = await spawnWithTimeout({
      command: "/bin/sleep",
      argv: ["30"],
      cwd: SANDBOX,
      env: filterSpikeEnv(),
      timeoutMs: 200,
      maxOutputBytes: 1024,
    });
    expect(r.timedOut).toBe(true);
    expect(r.exitCode === null || r.exitCode !== 0 || r.signal !== null).toBe(true);
  });

  it("disabled spike rejects executeSpikeContract", async () => {
    delete process.env[CURSOR_REAL_SPIKE_FLAG];
    const spike = new CursorExecutorPortRealSpike({ enabled: true });
    await expect(spike.executeSpikeContract(sampleContract())).rejects.toBeInstanceOf(HarnessError);
  });
});

describe("cursor real spike — live CLI (opt-in)", () => {
  const live = process.env[CURSOR_REAL_SPIKE_FLAG] === "1" && process.env.SFIA_CURSOR_REAL_LIVE === "1";

  it.runIf(live)("invokes cursor agent against sandbox (authenticated live)", async () => {
    process.env[CURSOR_REAL_SPIKE_FLAG] = "1";
    process.env.SFIA_CURSOR_REAL_LIVE = "1";
    const spike = new CursorExecutorPortRealSpike({
      enabled: true,
      timeoutMs: 90_000,
      agentMode: "agent",
      cursorBin: "/Applications/Cursor.app/Contents/Resources/app/bin/cursor",
    });
    const result = await spike.executeSpikeContract(sampleContract({ timeoutMs: 90_000 }));
    expect(result.realCursorProcessInvoked).toBe(true);
    expect(result.productionReadyClaimed).toBe(false);
    expect(result.exitCode !== undefined).toBe(true);
  });

  it.skipIf(live)("live Cursor test skipped unless SFIA_CURSOR_REAL_SPIKE=1 and SFIA_CURSOR_REAL_LIVE=1", () => {
    expect(true).toBe(true);
  });
});
