/** @vitest-environment node */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { openOps1Db, resetOps1DbForTests } from "@/lib/ops1/db";
import { createOpenSession } from "@/lib/ops1/repository";
import {
  buildReinjectionMessage,
  buildUnifiedTimeline,
} from "@/lib/ops1/reportReinjection";
import type { ExecutionReport } from "@/lib/ops1/types";

describe("report reinjection helpers", () => {
  let prevExec: string | undefined;
  let tmp: string;

  beforeEach(() => {
    tmp = fs.mkdtempSync(path.join(os.tmpdir(), "ct-reinj-"));
    prevExec = process.env.OPS1_EXEC_ROOT;
    process.env.OPS1_EXEC_ROOT = tmp;
    resetOps1DbForTests();
    openOps1Db();
  });

  afterEach(() => {
    resetOps1DbForTests();
    if (prevExec === undefined) delete process.env.OPS1_EXEC_ROOT;
    else process.env.OPS1_EXEC_ROOT = prevExec;
    fs.rmSync(tmp, { recursive: true, force: true });
  });

  it("builds message without claiming implicit success", () => {
    const report = {
      reportId: "ops1-rpt-1",
      sessionId: "ops1-sess-1",
      contractId: "c1",
      contractHash: "abc",
      executionAttemptId: "att-1",
      adapterMode: "fixture",
      executionStatus: "SUCCEEDED",
      reportStatus: "COMPLETED",
      baseHeadSha: "0".repeat(40),
      startedAt: "t",
      finishedAt: "t",
      durationMs: 10,
      expectedPaths: [],
      filesCreated: [],
      filesModified: [],
      filesDeleted: [],
      filesOutOfContract: [],
      outOfContract: false,
      exitCode: 0,
      timedOut: false,
      worktreeRef: null,
      reserves: [],
      errors: [],
      incompletenessReason: null,
      metrics: {
        durationMs: 10,
        metricsIncomplete: false,
        metricsIncompleteReason: null,
        expectedPathCount: 0,
        touchedPathCount: 0,
        createCount: 0,
        modifyCount: 0,
        deleteCount: 0,
        outOfContract: false,
      },
      coverage: [],
      sealed: true,
      createdAt: "t",
      sealedAt: "t",
    } as ExecutionReport;
    const msg = buildReinjectionMessage(report);
    expect(msg).toContain("[OPS1_REPORT_REINJECTION]");
    expect(msg).toMatch(/≠ succès/i);
  });

  it("timeline defaults to DECISION_REQUIRED", () => {
    const { session } = createOpenSession("fixture");
    const tl = buildUnifiedTimeline(session.sessionId);
    expect(tl.terminal).toBe("DECISION_REQUIRED");
    expect(tl.items.length).toBeGreaterThan(0);
  });
});
