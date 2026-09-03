/** @vitest-environment node */
/**
 * CORR-MW4-01A — REAL path:
 * routeToolCall → EventSink → collectToolTelemetry → ReadCoverageFact
 *
 * Cases A–H exercise the live ToolRouter summary contract.
 * ZERO LIVE OpenAI. Does not modify ToolRouter / gitLocalReadAdapter.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { collectToolTelemetry } from "@/features/project-assistant/collectToolTelemetry";
import {
  createToolCallId,
  routeToolCall,
} from "@/lib/platform/tools/toolRouter";
import type { TechnicalEvent } from "@/lib/platform/observability/types";

const DOC = "projects/sfia-studio/docs/mw4-corr-doc.md";
const LINE_COUNT = 20;

describe("CORR-MW4-01A — ToolRouter → EventSink → readCoverage D0", () => {
  let tmp: string;
  let events: TechnicalEvent[];
  let sink: { emit(e: TechnicalEvent): void };

  beforeEach(() => {
    tmp = fs.mkdtempSync(path.join(os.tmpdir(), "mw4-corr01a-"));
    fs.mkdirSync(path.join(tmp, "projects/sfia-studio/docs"), {
      recursive: true,
    });
    const body = Array.from(
      { length: LINE_COUNT },
      (_, i) => `line-${i + 1}`,
    ).join("\n");
    fs.writeFileSync(path.join(tmp, DOC), body, "utf8");
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { execFileSync } = require("node:child_process") as typeof import("node:child_process");
    execFileSync("git", ["init"], { cwd: tmp });
    execFileSync("git", ["config", "user.email", "test@example.com"], {
      cwd: tmp,
    });
    execFileSync("git", ["config", "user.name", "test"], { cwd: tmp });
    execFileSync("git", ["add", "."], { cwd: tmp });
    execFileSync("git", ["commit", "-m", "init"], { cwd: tmp });

    events = [];
    sink = {
      emit(e: TechnicalEvent) {
        events.push(e);
      },
    };
  });

  afterEach(() => {
    fs.rmSync(tmp, { recursive: true, force: true });
  });

  async function readRange(startLine?: number, endLine?: number) {
    events.length = 0;
    return routeToolCall(
      {
        toolCallId: createToolCallId(),
        name: "git_local_read_file",
        arguments: {
          path: DOC,
          ...(startLine !== undefined ? { startLine } : {}),
          ...(endLine !== undefined ? { endLine } : {}),
        },
        sessionId: "mw4-corr01a",
      },
      { workspaceRoot: tmp, sink },
    );
  }

  function coverageFromEvents() {
    return collectToolTelemetry(events).readCoverage;
  }

  it("Case A — full L1-total → coverage full", async () => {
    const ok = await readRange(1, LINE_COUNT);
    expect(ok.ok).toBe(true);
    const cov = coverageFromEvents();
    expect(cov.facts).toHaveLength(1);
    expect(cov.facts[0]?.coverage).toBe("full");
    expect(cov.overall).toBe("full");
    const success = events.find((e) => e.type === "TOOL_SUCCEEDED");
    expect(String(success?.detail.summary ?? "")).toMatch(
      new RegExp(`L1-${LINE_COUNT}/${LINE_COUNT}`),
    );
  });

  it("Case B — suffix L2-N/N → partial", async () => {
    const ok = await readRange(2, LINE_COUNT);
    expect(ok.ok).toBe(true);
    expect(coverageFromEvents().facts[0]?.coverage).toBe("partial");
  });

  it("Case C — prefix L1-5/N → partial", async () => {
    const ok = await readRange(1, 5);
    expect(ok.ok).toBe(true);
    const fact = coverageFromEvents().facts[0];
    expect(fact?.coverage).toBe("partial");
    expect(fact?.hasMore).toBe(true);
  });

  it("Case D — middle L5-10/N → partial", async () => {
    const ok = await readRange(5, 10);
    expect(ok.ok).toBe(true);
    expect(coverageFromEvents().facts[0]?.coverage).toBe("partial");
  });

  it("Case E — HARD NEGATIVE L10-20/20 → PARTIAL (not full)", async () => {
    // Suffix ending at totalLines — must NOT classify as full.
    const ok = await readRange(10, LINE_COUNT);
    expect(ok.ok).toBe(true);
    const fact = coverageFromEvents().facts[0];
    expect(fact?.coverage).toBe("partial");
    expect(fact?.coverage).not.toBe("full");
    const summary = String(
      events.find((e) => e.type === "TOOL_SUCCEEDED")?.detail.summary ?? "",
    );
    expect(summary).toMatch(/L10-20\/20/);
  });

  it("Case F — hasMore signal → partial", async () => {
    const ok = await readRange(1, 3);
    expect(ok.ok).toBe(true);
    const summary = String(
      events.find((e) => e.type === "TOOL_SUCCEEDED")?.detail.summary ?? "",
    );
    expect(summary).toMatch(/hasMore/);
    expect(coverageFromEvents().facts[0]?.coverage).toBe("partial");
  });

  it("Case G — search_content success → no document read coverage fact", async () => {
    events.length = 0;
    const ok = await routeToolCall(
      {
        toolCallId: createToolCallId(),
        name: "git_local_search_content",
        arguments: { query: "line-7" },
        sessionId: "mw4-corr01a",
      },
      { workspaceRoot: tmp, sink },
    );
    expect(ok.ok).toBe(true);
    const cov = coverageFromEvents();
    expect(cov.facts).toHaveLength(0);
    expect(cov.overall).toBe("none");
  });

  it("Case H — denied / failed git_local_read_file", async () => {
    events.length = 0;
    const denied = await routeToolCall(
      {
        toolCallId: createToolCallId(),
        name: "git_local_read_file",
        arguments: { path: ".env" },
        sessionId: "mw4-corr01a",
      },
      { workspaceRoot: tmp, sink },
    );
    expect(denied.ok).toBe(false);
    if (!denied.ok) expect(denied.status).toBe("denied");
    const deniedFact = coverageFromEvents().facts.find(
      (f) => f.coverage === "denied",
    );
    expect(deniedFact).toBeTruthy();

    events.length = 0;
    const failed = await routeToolCall(
      {
        toolCallId: createToolCallId(),
        name: "git_local_read_file",
        arguments: {
          path: "projects/sfia-studio/docs/does-not-exist.md",
        },
        sessionId: "mw4-corr01a",
      },
      { workspaceRoot: tmp, sink },
    );
    expect(failed.ok).toBe(false);
    const failedFact = coverageFromEvents().facts.find(
      (f) => f.coverage === "failed" || f.coverage === "denied",
    );
    expect(failedFact).toBeTruthy();
  });
});
