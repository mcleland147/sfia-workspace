import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  createExecutionContract,
  recordExecutionGate,
} from "@/lib/ops1/executionContractService";
import { runExecutionAttempt } from "@/lib/ops1/executionOrchestrator";
import { createFixtureActionCandidate } from "@/lib/ops1/actionGate";
import { evaluateAndPersistAllowlist } from "@/lib/ops1/allowlistService";
import { createOpenSession, appendTurn } from "@/lib/ops1/repository";
import { openOps1Db, resetOps1DbForTests, migrateOps1Schema } from "@/lib/ops1/db";
import { recordGateDecision } from "@/lib/ops1/actionGate";
import {
  buildCoverageAndMetrics,
  generateExecutionReport,
  getReportByAttemptId,
} from "@/lib/ops1/reportService";
import {
  closeSession,
  openContinuation,
  resumePostReportChat,
} from "@/lib/ops1/sessionLifecycle";
import { sendConversationMessage } from "@/lib/ops1/conversation/service";
import { getLatestExecutionAttempt } from "@/lib/ops1/executionOrchestrator";

function initTempGitRepo(): string {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "ops1-i6-repo-"));
  execFileSync("git", ["init"], { cwd: root });
  execFileSync("git", ["config", "user.email", "ops1@test.local"], {
    cwd: root,
  });
  execFileSync("git", ["config", "user.name", "OPS1 Test"], { cwd: root });
  const campus = path.join(root, "projects", "campus360");
  fs.mkdirSync(campus, { recursive: true });
  for (const name of [
    "README.md",
    "01-opportunity-and-vision.md",
    "02-sfia-cycle-coverage-hypothesis.md",
    "03-pre-framing-decision-pack.md",
  ]) {
    fs.writeFileSync(path.join(campus, name), `# ${name}\n`, "utf8");
  }
  execFileSync("git", ["add", "."], { cwd: root });
  execFileSync("git", ["commit", "-m", "init campus360"], { cwd: root });
  return root;
}

describe("ops1 I6 report + continuation", () => {
  let tmpRoot: string;
  let workspaceRoot: string;

  beforeEach(() => {
    tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), "ops1-i6-exec-"));
    process.env.OPS1_EXEC_ROOT = tmpRoot;
    resetOps1DbForTests();
    workspaceRoot = initTempGitRepo();
  });

  afterEach(() => {
    resetOps1DbForTests();
    delete process.env.OPS1_EXEC_ROOT;
    fs.rmSync(tmpRoot, { recursive: true, force: true });
    fs.rmSync(workspaceRoot, { recursive: true, force: true });
  });

  async function prepareSucceededFixture() {
    openOps1Db();
    const { session } = createOpenSession("fixture");
    const { candidate } = createFixtureActionCandidate(session.sessionId);
    recordGateDecision({
      sessionId: session.sessionId,
      actionCandidateId: candidate.actionCandidateId,
      kind: "GO",
    });
    const refreshed = openOps1Db()
      .prepare(`SELECT * FROM action_candidates WHERE action_candidate_id = ?`)
      .get(candidate.actionCandidateId) as Record<string, unknown>;
    evaluateAndPersistAllowlist({
      sessionId: session.sessionId,
      actionCandidateId: candidate.actionCandidateId,
      workspaceRoot,
      entries: [
        { path: "projects/campus360/README.md", mode: "READ" },
        { path: "projects/campus360/04-ops1-i5-note.md", mode: "CREATE" },
      ],
    });
    const version = Number(refreshed.version);
    const { contract } = createExecutionContract({
      sessionId: session.sessionId,
      actionCandidateId: candidate.actionCandidateId,
      actionObjective: "obj",
      actionInstructions: "instr",
      adapterMode: "fixture",
      workspaceRoot,
    });
    recordExecutionGate({
      sessionId: session.sessionId,
      contractId: contract.contractId,
      contractHash: contract.contractHash,
      actionCandidateId: candidate.actionCandidateId,
      actionVersion: version,
      baseHeadSha: contract.baseHeadSha,
    });
    const run = await runExecutionAttempt({
      sessionId: session.sessionId,
      contractId: contract.contractId,
      adapterMode: "fixture",
      workspaceRoot,
    });
    return { session, candidate, contract, run, version };
  }

  it("generates COMPLETED report with coverage and metrics", async () => {
    const { session, contract, run } = await prepareSucceededFixture();
    const beforeAttempts = openOps1Db()
      .prepare(
        `SELECT COUNT(*) AS c FROM execution_attempts WHERE contract_id = ?`,
      )
      .get(contract.contractId) as { c: number };

    const { report } = generateExecutionReport({
      sessionId: session.sessionId,
      contractId: contract.contractId,
      executionAttemptId: run.attempt.executionAttemptId,
    });
    expect(report.reportStatus).toBe("COMPLETED");
    expect(report.sealed).toBe(true);
    expect(report.executionAttemptId).toBe(run.attempt.executionAttemptId);
    expect(report.metrics.durationMs).not.toBeNull();
    expect(report.metrics.metricsIncomplete).toBe(false);
    expect(report.coverage.some((c) => c.coverageStatus === "MISSING")).toBe(
      false,
    );
    expect(report.filesCreated).toContain(
      "projects/campus360/04-ops1-i5-note.md",
    );

    const afterAttempts = openOps1Db()
      .prepare(
        `SELECT COUNT(*) AS c FROM execution_attempts WHERE contract_id = ?`,
      )
      .get(contract.contractId) as { c: number };
    expect(afterAttempts.c).toBe(beforeAttempts.c);
  });

  it("marks REPORT_INCOMPLETE when allowlisted path lacks coverage", () => {
    const built = buildCoverageAndMetrics({
      allowedReads: ["projects/campus360/README.md"],
      allowedCreates: ["projects/campus360/04-ops1-i5-note.md"],
      allowedModifies: [],
      result: {
        resultId: "ops1-xres-00000000-0000-4000-8000-000000000001",
        executionAttemptId: "ops1-xatt-00000000-0000-4000-8000-000000000001",
        contractHash: "a".repeat(64),
        status: "SUCCEEDED",
        adapterMode: "fixture",
        worktreePath: null,
        exitCode: 0,
        timedOut: false,
        stdoutDigest: "",
        stderrDigest: "",
        filesRead: ["projects/campus360/README.md"],
        filesCreated: [],
        filesModified: [],
        filesDeleted: [],
        filesRenamed: [],
        diffStat: "",
        outOfContract: false,
        refusalReason: null,
        completedAt: "2026-01-01T00:00:01.000+00:00",
      },
      startedAt: "2026-01-01T00:00:00.000+00:00",
      finishedAt: "2026-01-01T00:00:01.000+00:00",
    });
    expect(built.reportStatus).toBe("REPORT_INCOMPLETE");
    expect(built.incompletenessReason).toMatch(/sans couverture/i);
  });

  it("COMPLETED impossible without mandatory coverage evidence", () => {
    const built = buildCoverageAndMetrics({
      allowedReads: [],
      allowedCreates: ["projects/campus360/x.md"],
      allowedModifies: [],
      result: {
        resultId: "ops1-xres-00000000-0000-4000-8000-000000000002",
        executionAttemptId: "ops1-xatt-00000000-0000-4000-8000-000000000002",
        contractHash: "b".repeat(64),
        status: "SUCCEEDED",
        adapterMode: "fixture",
        worktreePath: null,
        exitCode: 0,
        timedOut: false,
        stdoutDigest: "",
        stderrDigest: "",
        filesRead: [],
        filesCreated: [],
        filesModified: [],
        filesDeleted: [],
        filesRenamed: [],
        diffStat: "",
        outOfContract: false,
        refusalReason: null,
        completedAt: "2026-01-01T00:00:01.000+00:00",
      },
      startedAt: "2026-01-01T00:00:00.000+00:00",
      finishedAt: "2026-01-01T00:00:01.000+00:00",
    });
    expect(built.reportStatus).not.toBe("COMPLETED");
  });

  it("METRICS_INCOMPLETE when duration cannot be computed", () => {
    const built = buildCoverageAndMetrics({
      allowedReads: [],
      allowedCreates: [],
      allowedModifies: [],
      result: {
        resultId: "ops1-xres-00000000-0000-4000-8000-000000000003",
        executionAttemptId: "ops1-xatt-00000000-0000-4000-8000-000000000003",
        contractHash: "c".repeat(64),
        status: "SUCCEEDED",
        adapterMode: "fixture",
        worktreePath: null,
        exitCode: 0,
        timedOut: false,
        stdoutDigest: "",
        stderrDigest: "",
        filesRead: [],
        filesCreated: [],
        filesModified: [],
        filesDeleted: [],
        filesRenamed: [],
        diffStat: "",
        outOfContract: false,
        refusalReason: null,
        completedAt: "2026-01-01T00:00:01.000+00:00",
      },
      startedAt: "not-a-date",
      finishedAt: "2026-01-01T00:00:01.000+00:00",
    });
    expect(built.metrics.metricsIncomplete).toBe(true);
    expect(built.reportStatus).toBe("REPORT_INCOMPLETE");
  });

  it("refuses sealed report overwrite (no auto-retry)", async () => {
    const { session, contract, run } = await prepareSucceededFixture();
    generateExecutionReport({
      sessionId: session.sessionId,
      contractId: contract.contractId,
      executionAttemptId: run.attempt.executionAttemptId,
    });
    expect(() =>
      generateExecutionReport({
        sessionId: session.sessionId,
        contractId: contract.contractId,
        executionAttemptId: run.attempt.executionAttemptId,
      }),
    ).toThrow(/scellé|retry/i);
    expect(
      getReportByAttemptId(run.attempt.executionAttemptId)?.sealed,
    ).toBe(true);
  });

  it("resumes chat after report without new execution attempt", async () => {
    const { session, contract, run } = await prepareSucceededFixture();
    generateExecutionReport({
      sessionId: session.sessionId,
      contractId: contract.contractId,
      executionAttemptId: run.attempt.executionAttemptId,
    });
    const before = openOps1Db()
      .prepare(`SELECT COUNT(*) AS c FROM execution_attempts`)
      .get() as { c: number };
    const resumed = resumePostReportChat(session.sessionId);
    expect(resumed.reportSummary).toMatch(/REPRISE CHAT/);
    await sendConversationMessage({
      sessionId: session.sessionId,
      content: "Lance l’exécution Cursor maintenant et commit",
    });
    const after = openOps1Db()
      .prepare(`SELECT COUNT(*) AS c FROM execution_attempts`)
      .get() as { c: number };
    expect(after.c).toBe(before.c);
    expect(
      getLatestExecutionAttempt(contract.contractId)?.executionAttemptId,
    ).toBe(run.attempt.executionAttemptId);
  });

  it("refuses CLOSED mutation and opens continuation with parentSessionId", async () => {
    const { session, contract, run } = await prepareSucceededFixture();
    generateExecutionReport({
      sessionId: session.sessionId,
      contractId: contract.contractId,
      executionAttemptId: run.attempt.executionAttemptId,
    });
    const closed = closeSession(session.sessionId);
    expect(closed.session.status).toBe("CLOSED");
    expect(() =>
      appendTurn({
        sessionId: session.sessionId,
        role: "user",
        content: "mutation",
        fixture: true,
      }),
    ).toThrow(/non OPEN|CLOSED/i);

    const cont = openContinuation({ parentSessionId: session.sessionId });
    expect(cont.session.sessionId).not.toBe(session.sessionId);
    expect(cont.session.parentSessionId).toBe(session.sessionId);
    expect(cont.session.status).toBe("OPEN");
    expect(cont.parent.status).toBe("CLOSED");
    expect(cont.sourceReportId).toBeTruthy();

    const parentAgain = openOps1Db()
      .prepare(`SELECT status FROM cycle_sessions WHERE session_id = ?`)
      .get(session.sessionId) as { status: string };
    expect(parentAgain.status).toBe("CLOSED");
  });

  it("stores redacted refusal reasons on sealed report", async () => {
    const { session, contract, run } = await prepareSucceededFixture();
    openOps1Db()
      .prepare(
        `UPDATE execution_results SET payload_json = ?
         WHERE execution_attempt_id = ?`,
      )
      .run(
        JSON.stringify({
          ...run.result,
          refusalReason: "leak sk-abcdefghijklmnopqrstuvwxyz012345",
        }),
        run.attempt.executionAttemptId,
      );
    const { report } = generateExecutionReport({
      sessionId: session.sessionId,
      contractId: contract.contractId,
      executionAttemptId: run.attempt.executionAttemptId,
    });
    expect(report.errors.join(" ")).not.toMatch(/sk-[A-Za-z0-9]{10,}/);
    expect(report.errors.join(" ")).toMatch(/\[redacted\]/);
  });

  it("marks REPORT_INCOMPLETE when MODIFY allowlisted but not observed", () => {
    const built = buildCoverageAndMetrics({
      allowedReads: ["projects/campus360/README.md"],
      allowedCreates: ["projects/campus360/04-ops1-i5-note.md"],
      allowedModifies: ["projects/campus360/01-opportunity-and-vision.md"],
      result: {
        resultId: "ops1-xres-00000000-0000-4000-8000-000000000004",
        executionAttemptId: "ops1-xatt-00000000-0000-4000-8000-000000000004",
        contractHash: "d".repeat(64),
        status: "SUCCEEDED",
        adapterMode: "fixture",
        worktreePath: null,
        exitCode: 0,
        timedOut: false,
        stdoutDigest: "",
        stderrDigest: "",
        filesRead: ["projects/campus360/README.md"],
        filesCreated: ["projects/campus360/04-ops1-i5-note.md"],
        filesModified: [],
        filesDeleted: [],
        filesRenamed: [],
        diffStat: "",
        outOfContract: false,
        refusalReason: null,
        completedAt: "2026-01-01T00:00:01.000+00:00",
      },
      startedAt: "2026-01-01T00:00:00.000+00:00",
      finishedAt: "2026-01-01T00:00:01.000+00:00",
    });
    expect(built.reportStatus).toBe("REPORT_INCOMPLETE");
    expect(
      built.coverage.find(
        (c) =>
          c.path === "projects/campus360/01-opportunity-and-vision.md" &&
          c.expectedMode === "MODIFY",
      )?.coverageStatus,
    ).toBe("MISSING");
  });

  it("migration I6 remains idempotent on existing store", () => {
    const db = openOps1Db();
    migrateOps1Schema(db);
    migrateOps1Schema(db);
    const cols = db.prepare(`PRAGMA table_info(cycle_sessions)`).all() as Array<{
      name: string;
    }>;
    expect(cols.some((c) => c.name === "source_report_id")).toBe(true);
    const tables = db
      .prepare(
        `SELECT name FROM sqlite_master WHERE type='table' AND name IN ('execution_reports','report_file_coverage')`,
      )
      .all() as Array<{ name: string }>;
    expect(tables.map((t) => t.name).sort()).toEqual([
      "execution_reports",
      "report_file_coverage",
    ]);
  });
});
