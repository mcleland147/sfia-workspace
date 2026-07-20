import { describe, expect, it, beforeEach } from "vitest";
import { mkdtempSync, existsSync, readFileSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import {
  buildIncrementDContract,
  hashIncrementDContract,
  makeIncrementDGo,
} from "../src/increment-d/executionContract.js";
import {
  resetIncDSandboxOutput,
  runIncrementDSandbox,
  INC_D_OUTPUT_REL,
  INC_D_SANDBOX_REL,
} from "../src/increment-d/cursorSandboxRunner.js";
import { INC_D_WORKSPACE_ROOT, resolveIncDOutputAbs } from "../src/increment-d/sandboxPaths.js";
import { filterSpikeEnv } from "../src/ports/cursorRealSpike.js";

function tmpProof(): string {
  return mkdtempSync(path.join(os.tmpdir(), "sfia-inc-d-"));
}

function gitCurrent(): { branch: string; head: string } {
  const branch = execFileSync("git", ["branch", "--show-current"], {
    cwd: INC_D_WORKSPACE_ROOT,
    encoding: "utf8",
  }).trim();
  const head = execFileSync("git", ["rev-parse", "HEAD"], {
    cwd: INC_D_WORKSPACE_ROOT,
    encoding: "utf8",
  }).trim();
  return { branch, head };
}

function validBundle(overrides: {
  gate?: ReturnType<typeof makeIncrementDGo> | null;
  fakeBehavior?: Parameters<typeof runIncrementDSandbox>[0]["fakeBehavior"];
  fakeDelayMs?: number;
  signal?: AbortSignal;
  mode?: "fixture" | "live";
  expectedBranch?: string;
  expectedHead?: string;
  contractId?: string;
} = {}) {
  const proofDir = tmpProof();
  const { branch, head } = gitCurrent();
  const contract = buildIncrementDContract({
    contractId: overrides.contractId ?? "ctr-inc-d-001",
    requestId: "req-inc-d-001",
    proofDir,
    expectedBranch: overrides.expectedBranch ?? branch,
    expectedHead: overrides.expectedHead ?? head,
  });
  const contractHash = hashIncrementDContract(contract);
  const gate =
    overrides.gate === null
      ? null
      : (overrides.gate ??
        makeIncrementDGo({
          decisionId: `go-inc-d-${Date.now()}-${Math.random()}`,
          requestId: contract.requestId,
          contractHash,
          branch: contract.expectedBranch,
          head: contract.expectedHead,
          allowlist: contract.allowedPaths,
        }));
  return {
    input: {
      requestId: contract.requestId,
      correlationId: "corr-inc-d-001",
      contractId: contract.contractId,
      expectedBranch: contract.expectedBranch,
      expectedHead: contract.expectedHead,
      gate,
      proofDir,
      mode: overrides.mode ?? ("fixture" as const),
      fakeBehavior: overrides.fakeBehavior,
      fakeDelayMs: overrides.fakeDelayMs,
      signal: overrides.signal,
    },
    contract,
    contractHash,
  };
}

beforeEach(() => {
  resetIncDSandboxOutput();
});

describe("Increment D — gate / revalidation", () => {
  it("valid anchored GO allows fixture spawn and writes output.md", async () => {
    const { input, contractHash } = validBundle();
    const r = await runIncrementDSandbox(input);
    expect(r.ok).toBe(true);
    expect(r.status).toBe("SUCCEEDED");
    expect(r.refusedBeforeSpawn).toBe(false);
    expect(r.report.contractHash).toBe(contractHash);
    expect(r.report.remoteGitWrites).toBe(0);
    expect(r.report.networkUsed).toBe(false);
    expect(r.report.analysisAuthorized).toBe(false);
    expect(r.report.authority.executionAuthorized).toBe(false);
    expect(existsSync(resolveIncDOutputAbs())).toBe(true);
    const md = readFileSync(resolveIncDOutputAbs(), "utf8");
    expect(md).toContain("SFIA Studio Increment D Sandbox Proof");
    expect(md).toContain("Remote Git writes: 0");
    expect(md).toContain("Candidate proof only");
  });

  it("absent GO refuses spawn", async () => {
    const { input } = validBundle({ gate: null });
    const r = await runIncrementDSandbox(input);
    expect(r.ok).toBe(false);
    expect(r.status).toBe("REFUSED_NO_GO");
    expect(r.refusedBeforeSpawn).toBe(true);
    expect(existsSync(resolveIncDOutputAbs())).toBe(false);
  });

  it("wrong contractHash refuses spawn", async () => {
    const { input, contract } = validBundle();
    input.gate = makeIncrementDGo({
      decisionId: "go-bad-hash",
      requestId: contract.requestId,
      contractHash: "0".repeat(64),
      branch: contract.expectedBranch,
      head: contract.expectedHead,
      allowlist: contract.allowedPaths,
    });
    const r = await runIncrementDSandbox(input);
    expect(r.refusedBeforeSpawn).toBe(true);
    expect(r.status).toBe("REFUSED_STALE_GO");
  });

  it("wrong HEAD refuses spawn", async () => {
    const { input, contract, contractHash } = validBundle();
    input.gate = makeIncrementDGo({
      decisionId: "go-bad-head",
      requestId: contract.requestId,
      contractHash,
      branch: contract.expectedBranch,
      head: "deadbeefdeadbeefdeadbeefdeadbeefdeadbeef",
      allowlist: contract.allowedPaths,
    });
    input.expectedHead = "deadbeefdeadbeefdeadbeefdeadbeefdeadbeef";
    const r = await runIncrementDSandbox(input);
    expect(r.refusedBeforeSpawn).toBe(true);
    expect(["REFUSED_STALE_GO", "REFUSED_NO_GO"]).toContain(r.status);
  });

  it("wrong branch refuses spawn", async () => {
    const { input, contract, contractHash } = validBundle();
    input.gate = makeIncrementDGo({
      decisionId: "go-bad-branch",
      requestId: contract.requestId,
      contractHash,
      branch: "not-this-branch",
      head: contract.expectedHead,
      allowlist: contract.allowedPaths,
    });
    input.expectedBranch = "not-this-branch";
    const r = await runIncrementDSandbox(input);
    expect(r.refusedBeforeSpawn).toBe(true);
  });

  it("wrong allowlist refuses spawn", async () => {
    const { input, contract, contractHash } = validBundle();
    input.gate = makeIncrementDGo({
      decisionId: "go-bad-allow",
      requestId: contract.requestId,
      contractHash,
      branch: contract.expectedBranch,
      head: contract.expectedHead,
      allowlist: ["projects/sfia-studio/app"],
    });
    const r = await runIncrementDSandbox(input);
    expect(r.refusedBeforeSpawn).toBe(true);
    expect(r.status).toBe("REFUSED_STALE_GO");
  });

  it("contract mutation after GO (hash mismatch) refuses spawn", async () => {
    const { input, contract } = validBundle();
    // GO was hashed for ctr-inc-d-001; change contractId so rebuilt hash differs
    input.contractId = "ctr-mutated-after-go";
    const r = await runIncrementDSandbox(input);
    expect(r.refusedBeforeSpawn).toBe(true);
    expect(contract.contractId).toBe("ctr-inc-d-001");
  });
});

describe("Increment D — port / policy", () => {
  it("detects write outside allowlist as POLICY_VIOLATION", async () => {
    const { input } = validBundle({ fakeBehavior: "write-outside" });
    const r = await runIncrementDSandbox(input);
    expect(r.status).toBe("POLICY_VIOLATION");
    expect(r.report.outOfAllowlistChanges.length).toBeGreaterThan(0);
  });

  it("exit nonzero → FAILED_EXIT_CODE", async () => {
    const { input } = validBundle({ fakeBehavior: "exit-nonzero" });
    const r = await runIncrementDSandbox(input);
    expect(r.status).toBe("FAILED_EXIT_CODE");
    expect(r.report.exitCode).toBe(2);
  });

  it("exit 0 without file → REPORT_INCOMPLETE", async () => {
    const { input } = validBundle({ fakeBehavior: "success-no-file" });
    const r = await runIncrementDSandbox(input);
    expect(r.status).toBe("REPORT_INCOMPLETE");
  });

  it("Cursor unavailable → CURSOR_UNAVAILABLE", async () => {
    const { input } = validBundle({ fakeBehavior: "unavailable" });
    const r = await runIncrementDSandbox(input);
    expect(r.status).toBe("CURSOR_UNAVAILABLE");
    expect(r.report.cursorAvailable).toBe(false);
  });

  it("child env filter strips OPENAI_API_KEY", () => {
    const env = filterSpikeEnv({
      PATH: "/usr/bin",
      HOME: "/tmp",
      OPENAI_API_KEY: "sk-should-not-pass",
      CURSOR_API_KEY: "cursor_should_not_pass",
      SFIA_CURSOR_BIN: "/bin/true",
    });
    expect(env.OPENAI_API_KEY).toBeUndefined();
    expect(env.CURSOR_API_KEY).toBeUndefined();
    expect(env.PATH).toBe("/usr/bin");
  });

  it("sandbox relative path is canonical Increment D", () => {
    expect(INC_D_SANDBOX_REL).toBe("projects/sfia-studio/.sandbox/increment-d");
    expect(INC_D_OUTPUT_REL).toBe("output.md");
  });
});

describe("Increment D — STOP / timeout", () => {
  it("STOP interrupts stoppable-slow fake port", async () => {
    const ac = new AbortController();
    const { input } = validBundle({
      fakeBehavior: "stoppable-slow",
      fakeDelayMs: 5_000,
      signal: ac.signal,
    });
    setTimeout(() => ac.abort(), 30);
    const r = await runIncrementDSandbox(input);
    expect(r.status).toBe("STOPPED");
    expect(r.report.stopRequested).toBe(true);
    expect(r.ok).toBe(false);
  });

  it("STOP does not create a new GO (report requires Morris)", async () => {
    const ac = new AbortController();
    const { input } = validBundle({
      fakeBehavior: "stoppable-slow",
      fakeDelayMs: 5_000,
      signal: ac.signal,
    });
    setTimeout(() => ac.abort(), 20);
    const r = await runIncrementDSandbox(input);
    expect(r.report.morrisDecisionRequired).toBe(true);
    expect(r.report.authority.executionAuthorized).toBe(false);
  });

  it("timeout is not success and not a GO", async () => {
    const { input } = validBundle({ fakeBehavior: "timeout", fakeDelayMs: 20 });
    const r = await runIncrementDSandbox(input);
    expect(r.status).toBe("TIMED_OUT");
    expect(r.ok).toBe(false);
    expect(r.report.timeout).toBe(true);
    expect(r.report.reservations.join(" ")).toMatch(/timeout ≠ GO/i);
  });
});

describe("Increment D — remote / report authority", () => {
  it("success report asserts remoteGitWrites=0 and analysisAuthorized=false", async () => {
    const { input } = validBundle();
    const r = await runIncrementDSandbox(input);
    expect(r.report.remoteGitWrites).toBe(0);
    expect(r.report.analysisAuthorized).toBe(false);
    expect(r.liveInvoked).toBe(false);
    expect(r.report.mode).toBe("fixture");
  });

  it("live without flag refuses before real spawn", async () => {
    const { input } = validBundle({ mode: "live" });
    const r = await runIncrementDSandbox(input);
    expect(r.refusedBeforeSpawn).toBe(true);
    expect(r.liveInvoked).toBe(false);
    expect(r.status).toBe("CURSOR_UNAVAILABLE");
  });

  it("mintGate fixture builds GO and succeeds", async () => {
    const proofDir = tmpProof();
    const r = await runIncrementDSandbox({
      requestId: "req-mint",
      correlationId: "corr-mint",
      contractId: "ctr-mint",
      expectedBranch: "pending",
      expectedHead: "pending",
      gate: null,
      proofDir,
      mode: "fixture",
      mintGate: true,
    });
    expect(r.ok).toBe(true);
    expect(r.status).toBe("SUCCEEDED");
    expect(r.eventsLogged).toContain("cursor.gate.minted.fixture");
  });

  it("refusal is journaled", async () => {
    const { input } = validBundle({ gate: null });
    const r = await runIncrementDSandbox(input);
    expect(r.eventsLogged).toContain("cursor.gate.refused");
  });

  it("complete success report has required fields", async () => {
    const { input } = validBundle();
    const r = await runIncrementDSandbox(input);
    const rep = r.report;
    expect(rep.schemaVersion).toBeTruthy();
    expect(rep.executionId).toMatch(/^exec-inc-d-/);
    expect(rep.contractId).toBeTruthy();
    expect(rep.contractHash).toHaveLength(64);
    expect(rep.status).toBe("SUCCEEDED");
    expect(rep.startedAt).toBeTruthy();
    expect(rep.completedAt).toBeTruthy();
    expect(typeof rep.durationMs).toBe("number");
    expect(rep.morrisDecisionRequired).toBe(true);
    expect(rep.s1ContractCursorMode).toBe("fixture");
    expect(rep.mode).toBe("fixture");
    expect(rep.realCursorProcessInvoked).toBe(false);
  });

  it("no automatic relaunch after timeout", async () => {
    const { input } = validBundle({ fakeBehavior: "timeout", fakeDelayMs: 5 });
    const r = await runIncrementDSandbox(input);
    expect(r.status).toBe("TIMED_OUT");
    const spawnCount = r.eventsLogged.filter((e) => e === "cursor.spawn.requested").length;
    expect(spawnCount).toBe(1);
  });

  it("S1 cursorMode=fixture is schema-only; process mode is report.mode", async () => {
    const { input, contract } = validBundle();
    expect(contract.cursorMode).toBe("fixture");
    expect(contract.s1CursorModeIsSchemaOnly).toBe(true);
    const r = await runIncrementDSandbox(input);
    expect(r.report.s1ContractCursorMode).toBe("fixture");
    expect(r.report.mode).toBe("fixture");
    expect(r.report.realCursorProcessInvoked).toBe(false);
  });

  it("real Cursor claim cannot coexist with fixture process mode", async () => {
    const { input } = validBundle();
    const r = await runIncrementDSandbox(input);
    if (r.report.realCursorProcessInvoked) {
      expect(r.report.mode).toBe("live");
    }
    if (r.report.mode === "fixture") {
      expect(r.report.realCursorProcessInvoked).toBe(false);
    }
  });
});
