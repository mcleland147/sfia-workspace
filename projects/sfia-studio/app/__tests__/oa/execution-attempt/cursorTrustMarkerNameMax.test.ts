/**
 * Cycle 8 Delivery Amend — Cursor trust-marker NAME_MAX compatibility.
 * Fake Git + FakeProcessRunner only. ZERO REAL.
 * @vitest-environment node
 */
import { createHash } from "node:crypto";
import { mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  assertStudioCursorRealOffForTests,
  M4_REAL_GATEWAY_ADAPTER_ID,
  SFIA_STUDIO_CURSOR_REAL_FLAG,
  StudioCursorRealLaunchGateway,
  StudioGitWorktreeWorkspace,
  workspacePathForAttempt,
} from "@/lib/oa/execution-attempt";
import {
  CURSOR_TRUST_MARKER_NAME_MAX_BYTES,
  CURSOR_TRUST_MARKER_PATH_TOO_LONG_REASON,
  cursorTrustMarkerProjectComponent,
  cursorTrustMarkerProjectComponentByteLength,
  isCursorTrustMarkerPathCompatible,
} from "@/lib/oa/execution-attempt/infrastructure/cursorTrustMarkerPathCompatibility";
import { physicalWorktreeLeafForAttempt } from "@/lib/oa/execution-attempt/infrastructure/studioGitWorktreeWorkspace";
import { FakeProcessRunner } from "./support/fakeProcessRunner";
import {
  FakeGitCommandRunner,
  FakeRealExecutionWorkspacePort,
} from "./support/fakeSpawnAndGit";
import { M4_TEST_BASE_HEAD_SHA } from "./support/m4Fixtures";

const HISTORICAL_ATTEMPT =
  "xat:m3:m3-res:dec:f2:85c4d482-baea-4e19-8924-f817fe059824";

/** Forensic corpus — failed pid 19887 execRoot (test fixture only, not product logic). */
const HISTORICAL_EXEC_ROOT =
  "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/.sfia-exec/m4-worktrees";

const HISTORICAL_LONG_LEAF =
  "wt-xat_m3_m3-res_dec_f2_85c4d482-baea-4e19-8924-f81-e1a473939ed0a7076438ea15";

function independentDigest(attemptId: string): string {
  return createHash("sha256")
    .update(attemptId, "utf8")
    .digest("hex")
    .slice(0, 24);
}

function historicalLongLeaf(attemptId: string): string {
  const digest = independentDigest(attemptId);
  const safe = attemptId.replace(/[^a-zA-Z0-9._-]+/g, "_").slice(0, 48);
  return `wt-${safe}-${digest}`;
}

function enabledGateway(input: {
  runner: FakeProcessRunner;
  workspacePath: string;
}): StudioCursorRealLaunchGateway {
  return new StudioCursorRealLaunchGateway({
    processRunner: input.runner,
    workspacePort: new FakeRealExecutionWorkspacePort({
      workspacePath: input.workspacePath,
    }),
    env: {
      ...process.env,
      [SFIA_STUDIO_CURSOR_REAL_FLAG]: "1",
    },
    resolveCursorBin: () => "/tmp/fake-cursor-bin",
  });
}

function launchRequest(attemptId: string) {
  return {
    attemptId,
    executionContractId: "xct:namemax",
    executionContractVersion: 1,
    semanticFingerprint: "fp:namemax",
    selectedAgentRef: "agt:m4.cursor.bounded_readonly",
    adapterRef: M4_REAL_GATEWAY_ADAPTER_ID,
    correlationId: "cor:namemax",
    baseHeadSha: M4_TEST_BASE_HEAD_SHA,
    action: "cursor.read_only.inspect",
    target: "workspace.isolated.read",
    scope: "studio.m4.real_off",
    timeoutMs: 15 * 60 * 1000,
  };
}

describe("Cursor trust-marker NAME_MAX compatibility", () => {
  beforeEach(() => {
    assertStudioCursorRealOffForTests();
  });
  afterEach(() => {
    assertStudioCursorRealOffForTests();
  });

  it("T1 same Attempt ID → identical physical path", () => {
    const a = workspacePathForAttempt("/tmp/exec-a", HISTORICAL_ATTEMPT);
    const b = workspacePathForAttempt("/tmp/exec-a", HISTORICAL_ATTEMPT);
    expect(a).toBe(b);
    expect(physicalWorktreeLeafForAttempt(HISTORICAL_ATTEMPT)).toBe(
      `wt-${independentDigest(HISTORICAL_ATTEMPT)}`,
    );
  });

  it("T2 distinct Attempts → distinct leaves", () => {
    expect(physicalWorktreeLeafForAttempt("xat:one")).not.toBe(
      physicalWorktreeLeafForAttempt("xat:two"),
    );
  });

  it("T3 historical long Attempt → fixed short leaf, no Attempt id text", () => {
    const leaf = physicalWorktreeLeafForAttempt(HISTORICAL_ATTEMPT);
    expect(leaf).toBe(`wt-${independentDigest(HISTORICAL_ATTEMPT)}`);
    expect(leaf.length).toBe(27);
    expect(leaf.startsWith("wt-")).toBe(true);
    expect(leaf).not.toContain("xat");
    expect(leaf).not.toContain("85c4d482");
    expect(leaf).not.toMatch(/m3-res/);
    expect(historicalLongLeaf(HISTORICAL_ATTEMPT)).toBe(HISTORICAL_LONG_LEAF);
    expect(historicalLongLeaf(HISTORICAL_ATTEMPT).length).toBeGreaterThan(
      leaf.length,
    );
  });

  it("T4 historical failure-depth root + short leaf is compatible", () => {
    const oldPath = `${HISTORICAL_EXEC_ROOT}/${HISTORICAL_LONG_LEAF}`;
    const newPath = workspacePathForAttempt(
      HISTORICAL_EXEC_ROOT,
      HISTORICAL_ATTEMPT,
    );
    const oldBytes = cursorTrustMarkerProjectComponentByteLength(oldPath);
    const newBytes = cursorTrustMarkerProjectComponentByteLength(newPath);
    expect(oldBytes).toBe(269);
    expect(oldBytes).toBeGreaterThan(CURSOR_TRUST_MARKER_NAME_MAX_BYTES);
    expect(isCursorTrustMarkerPathCompatible(oldPath)).toBe(false);
    expect(newBytes).toBeLessThanOrEqual(CURSOR_TRUST_MARKER_NAME_MAX_BYTES);
    expect(isCursorTrustMarkerPathCompatible(newPath)).toBe(true);
    expect(path.basename(newPath)).toBe(
      physicalWorktreeLeafForAttempt(HISTORICAL_ATTEMPT),
    );
  });

  it("T5 short execRoot FakeGit prepare still verifies HEAD", async () => {
    const root = mkdtempSync(path.join(os.tmpdir(), "m4-nm-t5-"));
    const repoRoot = path.join(root, "repo");
    const execRoot = path.join(root, "exec");
    mkdirSync(repoRoot);
    mkdirSync(execRoot);
    const git = new FakeGitCommandRunner({
      baseHeadSha: M4_TEST_BASE_HEAD_SHA,
    });
    const ws = new StudioGitWorktreeWorkspace({
      repoRoot,
      execRoot,
      gitRunner: git,
    });
    const prepared = await ws.prepareWorkspace({
      attemptId: HISTORICAL_ATTEMPT,
      baseHeadSha: M4_TEST_BASE_HEAD_SHA,
    });
    expect(prepared.verifiedHeadSha).toBe(M4_TEST_BASE_HEAD_SHA);
    expect(prepared.workspacePath).toBe(
      workspacePathForAttempt(execRoot, HISTORICAL_ATTEMPT),
    );
    expect(git.calls.map((c) => c.argv[0])).toEqual([
      "rev-parse",
      "worktree",
      "rev-parse",
    ]);
    expect(git.calls[1].argv.slice(0, 3)).toEqual([
      "worktree",
      "add",
      "--detach",
    ]);
  });

  it("T6 unsafe extreme execRoot fail-closed before git", async () => {
    const execRoot = path.join("/tmp", "n".repeat(240));
    const git = new FakeGitCommandRunner({
      baseHeadSha: M4_TEST_BASE_HEAD_SHA,
    });
    const ws = new StudioGitWorktreeWorkspace({
      repoRoot: "/tmp/repo-nm",
      execRoot,
      gitRunner: git,
    });
    const planned = workspacePathForAttempt(execRoot, HISTORICAL_ATTEMPT);
    expect(isCursorTrustMarkerPathCompatible(planned)).toBe(false);
    await expect(
      ws.prepareWorkspace({
        attemptId: HISTORICAL_ATTEMPT,
        baseHeadSha: M4_TEST_BASE_HEAD_SHA,
      }),
    ).rejects.toThrow(CURSOR_TRUST_MARKER_PATH_TOO_LONG_REASON);
    expect(git.calls).toHaveLength(0);
  });

  it("T7 unsafe injected workspace never reaches runner", async () => {
    const unsafe =
      HISTORICAL_EXEC_ROOT + "/" + HISTORICAL_LONG_LEAF;
    const runner = new FakeProcessRunner({ processRef: "proc:sim:t7" });
    const gateway = enabledGateway({ runner, workspacePath: unsafe });
    const result = await gateway.launch(launchRequest("xat:t7"));
    expect(result.outcome).toBe("reject");
    if (result.outcome === "reject") {
      expect(result.detailCode).toBe("REAL_WORKSPACE_INVALID");
      expect(result.reason).toBe(CURSOR_TRUST_MARKER_PATH_TOO_LONG_REASON);
      expect(result.realProcessInvoked).toBe(false);
    }
    expect(runner.calls).toHaveLength(0);
    expect(runner.simulatedInvokeCount).toBe(0);
  });

  it("T8 exact 255 bytes ALLOW, 256 REJECT", () => {
    const max = `/${"a".repeat(CURSOR_TRUST_MARKER_NAME_MAX_BYTES)}`;
    const over = `/${"a".repeat(CURSOR_TRUST_MARKER_NAME_MAX_BYTES + 1)}`;
    expect(cursorTrustMarkerProjectComponentByteLength(max)).toBe(255);
    expect(isCursorTrustMarkerPathCompatible(max)).toBe(true);
    expect(cursorTrustMarkerProjectComponentByteLength(over)).toBe(256);
    expect(isCursorTrustMarkerPathCompatible(over)).toBe(false);
  });

  it("T9 UTF-8 bytes not JS .length", () => {
    const allow = `/${"é".repeat(127)}`;
    const reject = `/${"é".repeat(128)}`;
    expect(cursorTrustMarkerProjectComponent(allow).length).toBe(127);
    expect(cursorTrustMarkerProjectComponentByteLength(allow)).toBe(254);
    expect(isCursorTrustMarkerPathCompatible(allow)).toBe(true);
    expect(cursorTrustMarkerProjectComponent(reject).length).toBe(128);
    expect(cursorTrustMarkerProjectComponentByteLength(reject)).toBe(256);
    expect(isCursorTrustMarkerPathCompatible(reject)).toBe(false);
  });

  it("T8/T9 gateway uses the same byte rule", async () => {
    const runner = new FakeProcessRunner({ processRef: "proc:sim:t8" });
    const maxPath = `/${"a".repeat(255)}`;
    const overPath = `/${"a".repeat(256)}`;
    const utfReject = `/${"é".repeat(128)}`;

    const allowGw = enabledGateway({ runner, workspacePath: maxPath });
    const allow = await allowGw.launch(launchRequest("xat:t8-allow"));
    expect(allow.outcome).toBe("ack");
    expect(runner.calls).toHaveLength(1);

    const overGw = enabledGateway({ runner, workspacePath: overPath });
    const over = await overGw.launch(launchRequest("xat:t8-over"));
    expect(over.outcome).toBe("reject");
    expect(runner.calls).toHaveLength(1);

    const utfGw = enabledGateway({ runner, workspacePath: utfReject });
    const utf = await utfGw.launch(launchRequest("xat:t9-utf"));
    expect(utf.outcome).toBe("reject");
    expect(runner.calls).toHaveLength(1);
  });

  it("T10 safe workspace invokes fake runner once with unchanged argv", async () => {
    const workspacePath = "/tmp/fake-exec-root/wt-namemax-ok";
    const runner = new FakeProcessRunner({ processRef: "proc:sim:t10" });
    const gateway = enabledGateway({ runner, workspacePath });
    const result = await gateway.launch(launchRequest("xat:t10"));
    expect(result.outcome).toBe("ack");
    expect(runner.calls).toHaveLength(1);
    const call = runner.calls[0];
    expect(call.cwd).toBe(workspacePath);
    expect(call.timeoutMs).toBe(15 * 60 * 1000);
    const argv = [...call.argv];
    expect(argv[0]).toBe("agent");
    expect(argv).toEqual([
      "agent",
      "--print",
      "--mode",
      "ask",
      "--workspace",
      workspacePath,
      "--trust",
      "--sandbox",
      "enabled",
      argv[argv.length - 1],
    ]);
    expect(argv[argv.indexOf("--workspace") + 1]).toBe(workspacePath);
    expect(argv[argv.indexOf("--sandbox") + 1]).toBe("enabled");
    const instruction = argv[argv.length - 1];
    expect(instruction).toContain("README.md");
    expect(instruction).toContain("M4_READ_ONLY_OK");
    expect(instruction).toContain("M4_READ_ONLY_UNAVAILABLE");
    expect(instruction).toMatch(/Ne lancer aucune commande Shell/);
    expect(instruction).toContain("target=workspace.isolated.read");
    expect(instruction).toContain("action=cursor.read_only.inspect");
    expect(instruction).toContain("scope=studio.m4.real_off");
  });

  it("T11 NAME_MAX reject does not invoke then retry", async () => {
    const runner = new FakeProcessRunner({ processRef: "proc:sim:t11" });
    const gateway = enabledGateway({
      runner,
      workspacePath: `/${"a".repeat(256)}`,
    });
    await gateway.launch(launchRequest("xat:t11-a"));
    await gateway.launch(launchRequest("xat:t11-b"));
    expect(runner.calls).toHaveLength(0);
  });

  it("T12 historical 269-component path never reaches runner.invoke", async () => {
    const historical269 = `${HISTORICAL_EXEC_ROOT}/${HISTORICAL_LONG_LEAF}`;
    expect(cursorTrustMarkerProjectComponentByteLength(historical269)).toBe(
      269,
    );
    const runner = new FakeProcessRunner({ processRef: "proc:sim:t12" });
    const gateway = enabledGateway({
      runner,
      workspacePath: historical269,
    });
    const result = await gateway.launch(launchRequest(HISTORICAL_ATTEMPT));
    expect(result.outcome).toBe("reject");
    expect(runner.calls).toHaveLength(0);
  });

  it("T13 existing workspace validations preserved", async () => {
    const root = mkdtempSync(path.join(os.tmpdir(), "m4-nm-t13-"));
    const repoRoot = path.join(root, "repo");
    const execRoot = path.join(root, "exec");
    mkdirSync(repoRoot);
    mkdirSync(execRoot);
    const git = new FakeGitCommandRunner({
      baseHeadSha: M4_TEST_BASE_HEAD_SHA,
    });
    const ws = new StudioGitWorktreeWorkspace({
      repoRoot,
      execRoot,
      gitRunner: git,
    });
    await expect(
      ws.prepareWorkspace({
        attemptId: "xat:t13",
        baseHeadSha: "not-a-sha",
      }),
    ).rejects.toThrow(/base_head_sha_invalid/);

    const existing = workspacePathForAttempt(execRoot, "xat:t13-exists");
    mkdirSync(existing, { recursive: true });
    writeFileSync(path.join(existing, "marker"), "x");
    await expect(
      ws.prepareWorkspace({
        attemptId: "xat:t13-exists",
        baseHeadSha: M4_TEST_BASE_HEAD_SHA,
      }),
    ).rejects.toThrow(/workspace_path_exists/);

    const mismatch = new StudioGitWorktreeWorkspace({
      repoRoot,
      execRoot: path.join(root, "exec-mis"),
      gitRunner: new FakeGitCommandRunner({
        baseHeadSha: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
      }),
    });
    mkdirSync(path.join(root, "exec-mis"));
    await expect(
      mismatch.prepareWorkspace({
        attemptId: "xat:t13-mis",
        baseHeadSha: M4_TEST_BASE_HEAD_SHA,
      }),
    ).rejects.toThrow(/head_mismatch/);
  });

  it("T14 no Cursor REAL / no OpenAI LIVE in this file", () => {
    expect(process.env.SFIA_STUDIO_CURSOR_REAL).not.toBe("1");
    expect(process.env.SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY).not.toBe(
      "1",
    );
    expect(cursorTrustMarkerProjectComponent("/tmp/a_b.c/d")).toBe(
      "tmp-a-bc-d",
    );
  });
});
