/**
 * Increment D — Cursor sandbox runner (fixture fake port or live Cursor).
 * Authority: harness revalidates GO immediately before spawn. Studio never decides.
 */

import { randomUUID, createHash } from "node:crypto";
import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  statSync,
  writeFileSync,
  unlinkSync,
} from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { GateValidator } from "../gate/gateValidator.js";
import { EventJournal } from "../journal/eventJournal.js";
import { ProofStore } from "../proof/proofStore.js";
import type { GateDecision } from "../types/contracts.js";
import {
  CURSOR_EXECUTION_REPORT_SCHEMA,
  type CursorExecutionReport,
  type CursorExecutionStatus,
} from "../types/cursorExecutionReport.js";
import {
  buildCursorAgentArgv,
  filterSpikeEnv,
  resolveCursorBin,
  spawnWithTimeout,
} from "../ports/cursorRealSpike.js";
import {
  buildIncDCursorInstruction,
  buildIncDMarkdownContent,
  buildIncrementDContract,
  hashIncrementDContract,
  makeIncrementDGo,
} from "./executionContract.js";
import { cleanupFakeOutsideProbe, runFakeCursorPort, type FakeCursorBehavior } from "./fakeCursorPort.js";
import {
  INC_D_LIVE_FLAG,
  INC_D_OBSERVE_FLAG,
  INC_D_OUTPUT_REL,
  INC_D_SANDBOX_REL,
  INC_D_TIMEOUT_MS,
  INC_D_WORKSPACE_ROOT,
  isIncDSandboxPath,
  resolveIncDOutputAbs,
  resolveIncDSandboxAbs,
} from "./sandboxPaths.js";

export interface IncrementDRunInput {
  requestId: string;
  correlationId: string;
  contractId: string;
  expectedBranch: string;
  expectedHead: string;
  gate: GateDecision | null;
  proofDir: string;
  /** fixture = fake port; live = real Cursor (requires flags). */
  mode: "fixture" | "live";
  /**
   * When true and mode=fixture, harness mints a GO anchored on current git
   * (Studio never decides — harness remains authority). Live mode ignores mint.
   */
  mintGate?: boolean;
  fakeBehavior?: FakeCursorBehavior;
  fakeDelayMs?: number;
  signal?: AbortSignal;
  timeoutMs?: number;
  workspaceRoot?: string;
  now?: () => Date;
}

export interface IncrementDRunResult {
  ok: boolean;
  status: CursorExecutionStatus;
  report: CursorExecutionReport;
  eventsLogged: string[];
  proofDir: string;
  markdownPath?: string;
  markdownContent?: string;
  refusedBeforeSpawn: boolean;
  liveInvoked: boolean;
}

function git(cmd: string[], cwd: string): string {
  return execFileSync("git", cmd, { cwd, encoding: "utf8" }).trim();
}

function listSandboxFiles(sandboxAbs: string): string[] {
  if (!existsSync(sandboxAbs)) return [];
  const out: string[] = [];
  const walk = (dir: string, rel = "") => {
    for (const ent of readdirSync(dir, { withFileTypes: true })) {
      const r = rel ? `${rel}/${ent.name}` : ent.name;
      const abs = path.join(dir, ent.name);
      if (ent.isDirectory()) walk(abs, r);
      else out.push(r);
    }
  };
  walk(sandboxAbs);
  return out.sort();
}

function fileFingerprint(abs: string): string | null {
  if (!existsSync(abs)) return null;
  const buf = readFileSync(abs);
  return createHash("sha256").update(buf).digest("hex");
}

function sanitizePreview(s: string, max = 4000): string {
  return s
    .replace(/sk-[A-Za-z0-9_-]{8,}/g, "[REDACTED]")
    .replace(/Bearer\s+\S+/gi, "Bearer [REDACTED]")
    .replace(/OPENAI_API_KEY\s*=\s*\S+/gi, "OPENAI_API_KEY=[REDACTED]")
    .slice(0, max);
}

function buildReport(partial: Omit<CursorExecutionReport, "schemaVersion" | "authority" | "morrisDecisionRequired" | "analysisAuthorized" | "remoteGitWrites" | "networkUsed" | "s1ContractCursorMode">): CursorExecutionReport {
  return {
    schemaVersion: CURSOR_EXECUTION_REPORT_SCHEMA,
    ...partial,
    remoteGitWrites: 0,
    networkUsed: false,
    s1ContractCursorMode: "fixture",
    authority: {
      candidateOnly: true,
      morrisDecisionRequired: true,
      executionAuthorized: false,
      analysisAuthorized: false,
    },
    morrisDecisionRequired: true,
    analysisAuthorized: false,
  };
}

export async function runIncrementDSandbox(input: IncrementDRunInput): Promise<IncrementDRunResult> {
  const now = input.now ?? (() => new Date());
  const startedAt = now();
  const workspaceRoot = input.workspaceRoot ?? INC_D_WORKSPACE_ROOT;
  const sandboxAbs = resolveIncDSandboxAbs(workspaceRoot);
  const outputAbs = resolveIncDOutputAbs(workspaceRoot);
  const timeoutMs = input.timeoutMs ?? INC_D_TIMEOUT_MS;
  const executionId = `exec-inc-d-${randomUUID()}`;
  const eventsLogged: string[] = [];
  const journal = new EventJournal(input.proofDir, input.correlationId);
  const proofs = new ProofStore(input.proofDir);

  const log = (eventType: string, detail: Record<string, unknown>) => {
    eventsLogged.push(eventType);
    journal.append({
      eventType,
      requestId: input.requestId,
      result: "ok",
      detail,
    });
  };

  mkdirSync(sandboxAbs, { recursive: true });
  mkdirSync(input.proofDir, { recursive: true });

  // Fixture-only: harness may mint GO from live git anchors (never for live spawn).
  if (input.mintGate && input.mode === "fixture" && (!input.gate || input.gate.decision !== "GO")) {
    const branch = git(["branch", "--show-current"], workspaceRoot);
    const head = git(["rev-parse", "HEAD"], workspaceRoot);
    input.expectedBranch = branch;
    input.expectedHead = head;
    const mintContract = buildIncrementDContract({
      contractId: input.contractId,
      requestId: input.requestId,
      proofDir: input.proofDir,
      expectedBranch: branch,
      expectedHead: head,
      timeoutMs,
      repositoryRoot: workspaceRoot,
    });
    const mintHash = hashIncrementDContract(mintContract);
    input.gate = makeIncrementDGo({
      decisionId: `go-mint-${randomUUID()}`,
      requestId: input.requestId,
      contractHash: mintHash,
      branch,
      head,
      allowlist: mintContract.allowedPaths,
    });
    log("cursor.gate.minted.fixture", { branch, head, contractHash: mintHash });
  }

  const contract = buildIncrementDContract({
    contractId: input.contractId,
    requestId: input.requestId,
    proofDir: input.proofDir,
    expectedBranch: input.expectedBranch,
    expectedHead: input.expectedHead,
    timeoutMs,
    repositoryRoot: workspaceRoot,
  });
  const contractHash = hashIncrementDContract(contract);

  const finish = (
    status: CursorExecutionStatus,
    extra: Partial<CursorExecutionReport> & {
      refusedBeforeSpawn: boolean;
      liveInvoked: boolean;
      markdownContent?: string;
    },
  ): IncrementDRunResult => {
    const completedAt = now();
    const report = buildReport({
      executionId,
      requestId: input.requestId,
      correlationId: input.correlationId,
      contractId: contract.contractId,
      contractHash,
      expectedBranch: input.expectedBranch,
      actualBranch: extra.actualBranch ?? input.expectedBranch,
      expectedHead: input.expectedHead,
      actualHead: extra.actualHead ?? input.expectedHead,
      allowlistedWritePaths: contract.allowlistedWritePaths,
      status,
      startedAt: startedAt.toISOString(),
      completedAt: completedAt.toISOString(),
      durationMs: completedAt.getTime() - startedAt.getTime(),
      exitCode: extra.exitCode ?? null,
      signal: extra.signal ?? null,
      timeout: extra.timeout ?? false,
      stopRequested: extra.stopRequested ?? false,
      cursorAvailable: extra.cursorAvailable ?? true,
      filesCreated: extra.filesCreated ?? [],
      filesModified: extra.filesModified ?? [],
      filesDeleted: extra.filesDeleted ?? [],
      outOfAllowlistChanges: extra.outOfAllowlistChanges ?? [],
      stdoutPreview: extra.stdoutPreview ?? "",
      stderrPreview: extra.stderrPreview ?? "",
      reservations: extra.reservations ?? [
        "Increment D sandbox proof only",
        "Morris decision still required",
        "Increment E / GPT analysis not authorized",
      ],
      mode: input.mode,
      realCursorProcessInvoked: extra.realCursorProcessInvoked ?? false,
    });
    proofs.writeJson("cursor-execution-report.json", report);
    log("cursor.execution.report", { status, executionId });
    return {
      ok: status === "SUCCEEDED",
      status,
      report,
      eventsLogged,
      proofDir: input.proofDir,
      markdownPath: existsSync(outputAbs) ? outputAbs : undefined,
      markdownContent: extra.markdownContent,
      refusedBeforeSpawn: extra.refusedBeforeSpawn,
      liveInvoked: extra.liveInvoked,
    };
  };

  // --- Gate revalidation BEFORE spawn ---
  log("cursor.gate.revalidate.started", { contractHash });

  if (!input.gate || input.gate.decision !== "GO") {
    log("cursor.gate.refused", { reason: "GO_ABSENT" });
    return finish("REFUSED_NO_GO", {
      refusedBeforeSpawn: true,
      liveInvoked: false,
      reservations: ["GO Morris absent — spawn refused"],
    });
  }

  let actualBranch = "";
  let actualHead = "";
  try {
    actualBranch = git(["branch", "--show-current"], workspaceRoot);
    actualHead = git(["rev-parse", "HEAD"], workspaceRoot);
  } catch {
    return finish("REFUSED_SCOPE", {
      refusedBeforeSpawn: true,
      liveInvoked: false,
      reservations: ["Unable to read git branch/HEAD"],
    });
  }

  const gateValidator = new GateValidator();
  const gateResult = gateValidator.validate({
    gate: input.gate,
    contract,
    expectedHash: contractHash,
    expectedBranch: actualBranch,
    expectedHead: actualHead,
    now: startedAt,
  });

  if (!gateResult.ok) {
    const status: CursorExecutionStatus =
      gateResult.code.includes("HASH") || gateResult.code.includes("ALLOWLIST") || gateResult.code.includes("BRANCH") || gateResult.code.includes("HEAD")
        ? "REFUSED_STALE_GO"
        : "REFUSED_NO_GO";
    log("cursor.gate.refused", { code: gateResult.code, message: gateResult.message });
    return finish(status, {
      refusedBeforeSpawn: true,
      liveInvoked: false,
      actualBranch,
      actualHead,
      reservations: [`Gate refused: ${gateResult.code} — ${gateResult.message}`],
    });
  }

  if (actualBranch !== input.expectedBranch || actualHead !== input.expectedHead) {
    log("cursor.gate.refused", { reason: "BRANCH_OR_HEAD_MISMATCH" });
    return finish("REFUSED_STALE_GO", {
      refusedBeforeSpawn: true,
      liveInvoked: false,
      actualBranch,
      actualHead,
      reservations: ["Branch/HEAD diverged from GO anchors"],
    });
  }

  if (!isIncDSandboxPath(sandboxAbs)) {
    return finish("REFUSED_SCOPE", {
      refusedBeforeSpawn: true,
      liveInvoked: false,
      actualBranch,
      actualHead,
      reservations: ["Sandbox path not Increment D canonical"],
    });
  }

  gateValidator.consume(input.gate.decisionId);
  log("cursor.gate.revalidate.ok", { contractHash, branch: actualBranch, head: actualHead });

  const markdownContent = buildIncDMarkdownContent({
    executionId,
    requestId: input.requestId,
    contractId: contract.contractId,
    branch: actualBranch,
    head: actualHead,
    contractHash,
    timestamp: startedAt.toISOString().replace("Z", "+00:00") + " (UTC) / local CEST",
  });

  const beforeFiles = listSandboxFiles(sandboxAbs);
  const beforeFp = fileFingerprint(outputAbs);
  const beforeStatus = git(["status", "--short"], workspaceRoot);

  proofs.writeJson("inc-d-pre-snapshot.json", {
    files: beforeFiles,
    outputFingerprint: beforeFp,
    gitStatusShort: beforeStatus,
    branch: actualBranch,
    head: actualHead,
  });

  log("cursor.spawn.requested", {
    mode: input.mode,
    timeoutMs,
    allowlistedWritePaths: contract.allowlistedWritePaths,
  });

  let spawnResult: {
    ok: boolean;
    exitCode: number | null;
    signal: string | null;
    timedOut: boolean;
    stopRequested: boolean;
    cursorAvailable: boolean;
    realCursorProcessInvoked: boolean;
    durationMs: number;
    stdout: string;
    stderr: string;
    errorCode?: string;
  };

  if (input.mode === "fixture") {
    spawnResult = await runFakeCursorPort({
      behavior: input.fakeBehavior ?? "success",
      sandboxAbs,
      markdownContent,
      delayMs: input.fakeDelayMs,
      signal: input.signal,
    });
  } else {
    if (process.env[INC_D_LIVE_FLAG] !== "1") {
      return finish("CURSOR_UNAVAILABLE", {
        refusedBeforeSpawn: true,
        liveInvoked: false,
        actualBranch,
        actualHead,
        cursorAvailable: false,
        reservations: [`Live Cursor denied — set ${INC_D_LIVE_FLAG}=1`],
      });
    }
    let bin: string;
    try {
      bin = resolveCursorBin();
    } catch {
      return finish("CURSOR_UNAVAILABLE", {
        refusedBeforeSpawn: true,
        liveInvoked: false,
        actualBranch,
        actualHead,
        cursorAvailable: false,
        reservations: ["Cursor binary not found"],
      });
    }

    const instruction = buildIncDCursorInstruction({
      workspaceRoot,
      sandboxAbs,
      outputRel: INC_D_OUTPUT_REL,
      markdownContent,
    });
    proofs.writeJson("inc-d-instruction-meta.json", {
      instructionSha256Prefix: createHash("sha256").update(instruction, "utf8").digest("hex").slice(0, 16),
      instructionLength: instruction.length,
      networkEffect: "none",
      gitEffect: "none-remote",
    });

    const useNested = path.basename(bin) === "cursor";
    const { command, argv } = buildCursorAgentArgv({
      bin,
      instruction,
      workspace: sandboxAbs,
      mode: "agent",
      useNestedAgentSubcommand: useNested,
    });

    const childEnv = filterSpikeEnv();
    delete childEnv.OPENAI_API_KEY;
    delete childEnv.CURSOR_API_KEY;

    try {
      const raw = await spawnWithTimeout({
        command,
        argv,
        cwd: sandboxAbs,
        env: childEnv,
        timeoutMs,
        maxOutputBytes: 256_000,
        abortSignal: input.signal,
      });
      spawnResult = {
        ok: !raw.timedOut && !raw.aborted && raw.exitCode === 0,
        exitCode: raw.exitCode,
        signal: raw.signal,
        timedOut: raw.timedOut,
        stopRequested: raw.aborted || Boolean(input.signal?.aborted),
        cursorAvailable: true,
        realCursorProcessInvoked: true,
        durationMs: raw.durationMs,
        stdout: raw.stdout,
        stderr: raw.stderr,
        errorCode: raw.aborted
          ? "STOPPED"
          : raw.timedOut
            ? "TIMED_OUT"
            : raw.exitCode === 0
              ? undefined
              : "FAILED_EXIT_CODE",
      };
    } catch (e) {
      spawnResult = {
        ok: false,
        exitCode: null,
        signal: null,
        timedOut: false,
        stopRequested: false,
        cursorAvailable: false,
        realCursorProcessInvoked: false,
        durationMs: Date.now() - startedAt.getTime(),
        stdout: "",
        stderr: String(e),
        errorCode: "CURSOR_UNAVAILABLE",
      };
    }
  }

  log("cursor.spawn.completed", {
    exitCode: spawnResult.exitCode,
    timedOut: spawnResult.timedOut,
    stopRequested: spawnResult.stopRequested,
  });

  const afterFiles = listSandboxFiles(sandboxAbs);
  const afterFp = fileFingerprint(outputAbs);
  const afterStatus = git(["status", "--short"], workspaceRoot);
  const created = afterFiles.filter((f) => !beforeFiles.includes(f));
  const deleted = beforeFiles.filter((f) => !afterFiles.includes(f));
  const modified =
    beforeFp && afterFp && beforeFp !== afterFp && afterFiles.includes(INC_D_OUTPUT_REL)
      ? [INC_D_OUTPUT_REL]
      : [];

  const allowed = new Set([INC_D_OUTPUT_REL]);
  const outOfAllowlist = [...created, ...modified, ...deleted].filter((f) => !allowed.has(f));

  // Detect escape probe from fake port
  const escapeProbe = path.resolve(sandboxAbs, "..", "ESCAPE_PROBE.md");
  if (existsSync(escapeProbe)) {
    outOfAllowlist.push(path.relative(workspaceRoot, escapeProbe));
    cleanupFakeOutsideProbe(sandboxAbs);
  }

  proofs.writeJson("inc-d-post-snapshot.json", {
    files: afterFiles,
    outputFingerprint: afterFp,
    gitStatusShort: afterStatus,
    created,
    modified,
    deleted,
    outOfAllowlist,
  });

  // Remote writes proof (local only — no fetch during observation)
  const remoteWrites = 0;
  proofs.writeJson("inc-d-remote-proof.json", {
    remoteGitWrites: remoteWrites,
    networkEffect: "none",
    note: "No git fetch/push/pull during Cursor observation window",
    branchUnchanged: actualBranch === git(["branch", "--show-current"], workspaceRoot),
    headUnchanged: actualHead === git(["rev-parse", "HEAD"], workspaceRoot),
  });

  if (spawnResult.stopRequested) {
    return finish("STOPPED", {
      refusedBeforeSpawn: false,
      liveInvoked: spawnResult.realCursorProcessInvoked,
      actualBranch,
      actualHead,
      exitCode: spawnResult.exitCode,
      signal: spawnResult.signal,
      stopRequested: true,
      cursorAvailable: spawnResult.cursorAvailable,
      filesCreated: created,
      filesModified: modified,
      filesDeleted: deleted,
      outOfAllowlistChanges: outOfAllowlist,
      stdoutPreview: sanitizePreview(spawnResult.stdout),
      stderrPreview: sanitizePreview(spawnResult.stderr),
      realCursorProcessInvoked: spawnResult.realCursorProcessInvoked,
      reservations: ["STOP requested — new GO required for re-execution"],
    });
  }

  if (spawnResult.timedOut || spawnResult.errorCode === "TIMED_OUT") {
    return finish("TIMED_OUT", {
      refusedBeforeSpawn: false,
      liveInvoked: spawnResult.realCursorProcessInvoked,
      actualBranch,
      actualHead,
      exitCode: spawnResult.exitCode,
      signal: spawnResult.signal,
      timeout: true,
      cursorAvailable: spawnResult.cursorAvailable,
      filesCreated: created,
      filesModified: modified,
      filesDeleted: deleted,
      outOfAllowlistChanges: outOfAllowlist,
      stdoutPreview: sanitizePreview(spawnResult.stdout),
      stderrPreview: sanitizePreview(spawnResult.stderr),
      realCursorProcessInvoked: spawnResult.realCursorProcessInvoked,
      reservations: ["timeout ≠ GO", "timeout ≠ success", "new GO required"],
    });
  }

  if (!spawnResult.cursorAvailable || spawnResult.errorCode === "CURSOR_UNAVAILABLE") {
    return finish("CURSOR_UNAVAILABLE", {
      refusedBeforeSpawn: false,
      liveInvoked: false,
      actualBranch,
      actualHead,
      cursorAvailable: false,
      stdoutPreview: sanitizePreview(spawnResult.stdout),
      stderrPreview: sanitizePreview(spawnResult.stderr),
      realCursorProcessInvoked: false,
    });
  }

  if (outOfAllowlist.length > 0 || spawnResult.errorCode === "POLICY_VIOLATION") {
    return finish("POLICY_VIOLATION", {
      refusedBeforeSpawn: false,
      liveInvoked: spawnResult.realCursorProcessInvoked,
      actualBranch,
      actualHead,
      exitCode: spawnResult.exitCode,
      filesCreated: created,
      filesModified: modified,
      filesDeleted: deleted,
      outOfAllowlistChanges: outOfAllowlist,
      stdoutPreview: sanitizePreview(spawnResult.stdout),
      stderrPreview: sanitizePreview(spawnResult.stderr),
      realCursorProcessInvoked: spawnResult.realCursorProcessInvoked,
      reservations: ["POLICY_VIOLATION — out-of-allowlist changes detected"],
    });
  }

  if (spawnResult.exitCode !== 0) {
    return finish("FAILED_EXIT_CODE", {
      refusedBeforeSpawn: false,
      liveInvoked: spawnResult.realCursorProcessInvoked,
      actualBranch,
      actualHead,
      exitCode: spawnResult.exitCode,
      signal: spawnResult.signal,
      filesCreated: created,
      filesModified: modified,
      filesDeleted: deleted,
      stdoutPreview: sanitizePreview(spawnResult.stdout),
      stderrPreview: sanitizePreview(spawnResult.stderr),
      realCursorProcessInvoked: spawnResult.realCursorProcessInvoked,
    });
  }

  if (!existsSync(outputAbs)) {
    return finish("REPORT_INCOMPLETE", {
      refusedBeforeSpawn: false,
      liveInvoked: spawnResult.realCursorProcessInvoked,
      actualBranch,
      actualHead,
      exitCode: 0,
      filesCreated: created,
      stdoutPreview: sanitizePreview(spawnResult.stdout),
      stderrPreview: sanitizePreview(spawnResult.stderr),
      realCursorProcessInvoked: spawnResult.realCursorProcessInvoked,
      reservations: ["exit 0 but expected output.md missing"],
    });
  }

  const produced = readFileSync(outputAbs, "utf8");
  proofs.writeText("output.md.copy", produced);

  return finish("SUCCEEDED", {
    refusedBeforeSpawn: false,
    liveInvoked: spawnResult.realCursorProcessInvoked,
    actualBranch,
    actualHead,
    exitCode: 0,
    filesCreated: beforeFp ? [] : [INC_D_OUTPUT_REL],
    filesModified: beforeFp ? [INC_D_OUTPUT_REL] : [],
    filesDeleted: [],
    outOfAllowlistChanges: [],
    stdoutPreview: sanitizePreview(spawnResult.stdout),
    stderrPreview: sanitizePreview(spawnResult.stderr),
    realCursorProcessInvoked: spawnResult.realCursorProcessInvoked,
    markdownContent: produced,
    reservations: [
      "Sandbox Markdown proof succeeded",
      "Remote Git writes: 0",
      "Candidate proof only — Morris decision required",
      "Increment E / GPT analysis not authorized",
    ],
  });
}

/** Helper for tests: remove sandbox output between runs. */
export function resetIncDSandboxOutput(workspaceRoot = INC_D_WORKSPACE_ROOT): void {
  const out = resolveIncDOutputAbs(workspaceRoot);
  if (existsSync(out)) unlinkSync(out);
  const dir = resolveIncDSandboxAbs(workspaceRoot);
  mkdirSync(dir, { recursive: true });
  writeFileSync(path.join(dir, ".gitkeep"), "", "utf8");
}

export { INC_D_SANDBOX_REL, INC_D_OUTPUT_REL, INC_D_TIMEOUT_MS, INC_D_LIVE_FLAG, INC_D_OBSERVE_FLAG };
