/**
 * P6-MIN-09 — Documentary Cognitive Reliability Correction 01 (deterministic).
 * ZERO REAL / ZERO provider calls.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  ScriptedModel,
  assistantMessage,
  functionCall,
} from "@openai/agents/testing";
import {
  ADAPTIVE_MAX_TURNS_CEILING,
  ProductSqliteSession,
  buildDocumentaryBudgetExhaustedText,
  decideCognitiveStrategy,
  inferWorkloadHintsFromUserContent,
  isNaturalMonoFileDocumentaryRequest,
  normalizeCognitiveWorkloadSignals,
  parseGitLocalReadCoverageSignals,
  resolveAdaptiveMaxTurns,
  runNoraAgentsTurn,
  sfiaBoundaryInstructions,
  unionReturnedLineSpans,
} from "@/lib/nora-cognitive-runtime";
import {
  GitLocalReadAdapter,
  countCompleteReturnedLines,
} from "@/lib/platform/repository/gitLocalReadAdapter";
import {
  CT_DEFAULT_READ_MAX_BYTES,
  CT_MAX_TOOL_RESULT_CHARS,
} from "@/lib/platform/tools/types";
import {
  createToolCallId,
  prepareGitLocalReadDataForModel,
  prepareToolDataForModel,
  routeToolCall,
  toolResultForModel,
} from "@/lib/platform/tools/toolRouter";
import type { TechnicalEvent } from "@/lib/platform/observability/types";
import { resolveWorkspaceRootFromAppCwd } from "@/lib/platform/repository/workspaceRoot";
import { redactSecrets } from "@/lib/platform/security/redaction";

const T1_PROMPT = `Nora, j'ai un document dans notre dépôt Git qui pourrait nous être utile pour ce projet :
projects/sfia-studio/product-simplification/01-chat-first-product-simplification-cadrage.md
Tu peux le consulter et m'en faire une synthèse de ce que tu en retiens ?`;

const dirs: string[] = [];

/**
 * One complete line fits adapter caps at CT_MAX_TOOL_RESULT_CHARS but not the
 * final model JSON envelope (metadata overhead vs Product ceiling).
 */
const ENVELOPE_OVERSIZE_LINE_PAYLOAD_CHARS = 99_600;

function envelopeSkipLongLine(): string {
  return `L1 ${"x".repeat(ENVELOPE_OVERSIZE_LINE_PAYLOAD_CHARS)}`;
}

function tmpGitRepo(lineCount: number, lineWidth = 40): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "p6-min09-doc-"));
  dirs.push(dir);
  const rel = "projects/sfia-studio/docs/min09-doc.md";
  fs.mkdirSync(path.join(dir, "projects/sfia-studio/docs"), { recursive: true });
  const body = Array.from({ length: lineCount }, (_, i) => {
    const n = i + 1;
    return `L${n} ${"x".repeat(Math.max(0, lineWidth - 4))}`;
  }).join("\n");
  fs.writeFileSync(path.join(dir, rel), body, "utf8");
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { execFileSync } = require("node:child_process") as typeof import("node:child_process");
  execFileSync("git", ["init"], { cwd: dir });
  execFileSync("git", ["config", "user.email", "test@example.com"], {
    cwd: dir,
  });
  execFileSync("git", ["config", "user.name", "test"], { cwd: dir });
  execFileSync("git", ["add", "."], { cwd: dir });
  execFileSync("git", ["commit", "-m", "init"], { cwd: dir });
  return dir;
}

/**
 * R7 — Fiction-only secrets built programmatically so they MATCH redaction.ts
 * regexes (length + charset) without embedding real credentials.
 * Construction is intentional and reproducible in Review Pack evidence.
 */
function fictionSkToken(): string {
  // /\bsk-[A-Za-z0-9_-]{10,}\b/
  return `sk-${"A".repeat(12)}`;
}
function fictionGhpToken(): string {
  // /\bghp_[A-Za-z0-9]{20,}\b/
  return `ghp_${"B".repeat(20)}`;
}
function fictionOpenAiKeyLine(): string {
  // /\bOPENAI_API_KEY\s*=\s*.+/gi
  return `OPENAI_API_KEY=${fictionSkToken()}`;
}
function fictionBearerLine(): string {
  // /\bAuthorization:\s*Bearer\s+\S+/gi
  return `Authorization: Bearer ${"C".repeat(24)}`;
}

const FAKE = {
  get openaiKeyLine() {
    return fictionOpenAiKeyLine();
  },
  get skToken() {
    return fictionSkToken();
  },
  get ghpToken() {
    return fictionGhpToken();
  },
  get bearer() {
    return fictionBearerLine();
  },
};

function tmpGitRepoWithLines(lines: string[], rel = "projects/sfia-studio/docs/min09-doc.md"): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "p6-min09-sec-"));
  dirs.push(dir);
  fs.mkdirSync(path.join(dir, path.dirname(rel)), { recursive: true });
  fs.writeFileSync(path.join(dir, rel), lines.join("\n"), "utf8");
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { execFileSync } = require("node:child_process") as typeof import("node:child_process");
  execFileSync("git", ["init"], { cwd: dir });
  execFileSync("git", ["config", "user.email", "test@example.com"], {
    cwd: dir,
  });
  execFileSync("git", ["config", "user.name", "test"], { cwd: dir });
  execFileSync("git", ["add", "."], { cwd: dir });
  execFileSync("git", ["commit", "-m", "init"], { cwd: dir });
  return dir;
}

function assertNoFakeSecrets(text: string): void {
  expect(text).not.toContain(FAKE.skToken);
  expect(text).not.toContain(FAKE.ghpToken);
  expect(text).not.toContain(FAKE.openaiKeyLine);
  expect(text).not.toContain(FAKE.bearer);
  expect(text).not.toContain(`Bearer ${"C".repeat(24)}`);
}

function completeLinesFromContent(content: string): string[] {
  let body = content;
  if (body.endsWith("\n…[truncated]")) body = body.slice(0, -"\n…[truncated]".length);
  else if (body === "…[truncated]") return [];
  else if (body.endsWith("…[truncated]")) body = body.slice(0, -"…[truncated]".length);
  if (body.length === 0) return [];
  return body.split("\n");
}

afterEach(() => {
  while (dirs.length) {
    const d = dirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

describe("P6-MIN-09 — Axe B natural mono-file qualification", () => {
  it("T1 natural prompt → toolDependency high, NOT sourceBreadth high", () => {
    expect(isNaturalMonoFileDocumentaryRequest(T1_PROMPT)).toBe(true);
    const hints = inferWorkloadHintsFromUserContent(T1_PROMPT);
    expect(hints.toolDependency).toBe("high");
    expect(hints.reasoningDepth).toBe("medium");
    expect(hints.sourceBreadth).toBeUndefined();
  });

  it("bare 'document' alone does not elevate", () => {
    const hints = inferWorkloadHintsFromUserContent(
      "Nora, j'ai un document intéressant.",
    );
    expect(hints.toolDependency).toBeUndefined();
    expect(isNaturalMonoFileDocumentaryRequest("Nora, j'ai un document.")).toBe(
      false,
    );
  });

  it("T1 hints → Focused budget ≥8 and ≤ ceiling (no FinOps widen)", () => {
    const hints = inferWorkloadHintsFromUserContent(T1_PROMPT);
    const strategy = decideCognitiveStrategy({
      signals: normalizeCognitiveWorkloadSignals(hints),
    });
    expect(strategy.strategyClass).toBe("Focused");
    const budget = resolveAdaptiveMaxTurns({
      strategyClass: strategy.strategyClass,
      signals: strategy.normalizedSignals,
    });
    expect(budget.requestedMaxTurns).toBeGreaterThanOrEqual(8);
    expect(budget.requestedMaxTurns).toBeLessThanOrEqual(
      ADAPTIVE_MAX_TURNS_CEILING,
    );
    expect(ADAPTIVE_MAX_TURNS_CEILING).toBe(24);
  });
});

describe("P6-MIN-09 — R1 returned-range accuracy + coverage flags", () => {
  it("Case A — mid-line cut: partial line not credited; hint retries that line", () => {
    // Fixed-width ASCII lines; byte cap cuts inside line 3.
    const lineWidth = 40;
    const root = tmpGitRepo(10, lineWidth);
    const adapter = new GitLocalReadAdapter(root);
    // L1 + NL + L2 + NL + partial L3
    const twoFull = `L1 ${"x".repeat(lineWidth - 4)}\nL2 ${"x".repeat(lineWidth - 4)}\n`;
    const maxBytes = Buffer.byteLength(twoFull, "utf8") + 10; // mid line 3
    const r = adapter.readFile(
      "projects/sfia-studio/docs/min09-doc.md",
      maxBytes,
      { startLine: 1, endLine: 10 },
    );
    expect(r.truncated).toBe(true);
    expect(r.completeLineCount).toBe(2);
    expect(r.returnedEndLine).toBe(2);
    expect(r.partialLineNumber).toBe(3);
    expect(r.nextStartLineHint).toBe(3);
    expect(r.content).toContain("L2 ");
    expect(r.content).not.toContain("L3 ");
    expect(r.summary).toMatch(/partialLine:3/);
  });

  it("Case B — cut exactly between lines (no partial line)", () => {
    const lineWidth = 30;
    const root = tmpGitRepo(8, lineWidth);
    const adapter = new GitLocalReadAdapter(root);
    const twoFull = `L1 ${"x".repeat(lineWidth - 4)}\nL2 ${"x".repeat(lineWidth - 4)}`;
    const maxBytes = Buffer.byteLength(twoFull, "utf8");
    const r = adapter.readFile(
      "projects/sfia-studio/docs/min09-doc.md",
      maxBytes,
      { startLine: 1, endLine: 8 },
    );
    expect(r.completeLineCount).toBe(2);
    expect(r.returnedEndLine).toBe(2);
    expect(r.partialLineNumber).toBeNull();
    expect(r.nextStartLineHint).toBe(3);
    expect(r.content).toContain("L2 ");
    expect(r.content).not.toContain("L3 ");
  });

  it("Case C — truncation via maxBytes", () => {
    const root = tmpGitRepo(20, 80);
    const adapter = new GitLocalReadAdapter(root);
    const r = adapter.readFile("projects/sfia-studio/docs/min09-doc.md", 120, {
      startLine: 1,
      endLine: 20,
    });
    expect(r.truncated).toBe(true);
    expect(r.completeLineCount).toBeGreaterThan(0);
    expect(r.returnedEndLine).toBeLessThan(20);
    // Content only contains credited complete lines.
    expect(r.content).toMatch(/^L1 /);
    expect(r.content.includes(`L${r.returnedEndLine + 1} `)).toBe(false);
  });

  it("Case D — truncation via CT_MAX_TOOL_RESULT_CHARS", () => {
    const wide = Math.ceil(CT_MAX_TOOL_RESULT_CHARS / 3) + 20;
    const root = tmpGitRepo(20, wide);
    const adapter = new GitLocalReadAdapter(root);
    const r = adapter.readFile("projects/sfia-studio/docs/min09-doc.md", 65536, {
      startLine: 1,
      endLine: 10,
    });
    expect(r.truncated).toBe(true);
    expect(r.returnedEndLine).toBeLessThan(r.requestedEndLine);
    expect(r.nextStartLineHint).toBeGreaterThanOrEqual(r.returnedEndLine + 1);
    expect(r.summary).toMatch(/\btruncated\b/);
    // No line beyond returnedEndLine appears complete in content.
    expect(r.content.includes(`L${r.returnedEndLine + 1} `)).toBe(false);
  });

  it("Case E — single line exceeds cap: not complete, no infinite loop hint", () => {
    const huge = CT_MAX_TOOL_RESULT_CHARS + 500;
    const root = tmpGitRepo(3, huge);
    const adapter = new GitLocalReadAdapter(root);
    const r = adapter.readFile("projects/sfia-studio/docs/min09-doc.md", 65536, {
      startLine: 1,
      endLine: 1,
    });
    expect(r.lineExceedsCap).toBe(true);
    expect(r.completeLineCount).toBe(0);
    expect(r.returnedEndLine).toBe(0); // startLine(1) - 1
    expect(r.nextStartLineHint).toBe(2); // explicit skip past unblockable line
    expect(r.content).toBe("…[truncated]");
    expect(r.summary).toMatch(/returned none/);
    expect(r.summary).toMatch(/lineExceedsCap/);
  });

  it("Case F/G — successive reads: no skipped fittable lines; finite progress", () => {
    const lineWidth = 50;
    const root = tmpGitRepo(12, lineWidth);
    const adapter = new GitLocalReadAdapter(root);
    const twoFull = `L1 ${"x".repeat(lineWidth - 4)}\nL2 ${"x".repeat(lineWidth - 4)}\n`;
    const maxBytes = Buffer.byteLength(twoFull, "utf8") + 8;
    const seen = new Set<number>();
    let start = 1;
    for (let step = 0; step < 20 && start <= 12; step++) {
      const r = adapter.readFile(
        "projects/sfia-studio/docs/min09-doc.md",
        maxBytes,
        { startLine: start, endLine: 12 },
      );
      if (r.completeLineCount > 0) {
        for (let ln = r.returnedStartLine; ln <= r.returnedEndLine; ln++) {
          expect(seen.has(ln)).toBe(false);
          seen.add(ln);
        }
      }
      if (r.lineExceedsCap) {
        // Must advance hint to avoid infinite loop.
        expect(r.nextStartLineHint).toBeGreaterThan(start);
      }
      const next = r.nextStartLineHint;
      if (next == null || next <= start) break;
      // Fittable partial line: retry same line once with smaller exclusive window.
      if (r.partialLineNumber === next && r.completeLineCount > 0) {
        start = next;
      } else {
        start = next;
      }
    }
    // All fittable lines 1..12 must be coverable (none skipped silently).
    expect(seen.size).toBe(12);
  });

  it("Case H — overlapping returned spans union without false FULL", () => {
    const facts = [
      {
        pathOrRef: "doc.md#L1-50",
        documentPath: "doc.md",
        coverage: "partial" as const,
        returnedStartLine: 1,
        returnedEndLine: 50,
        totalLines: 100,
        truncated: false,
        documentHasMore: true,
        hasMore: true,
      },
      {
        pathOrRef: "doc.md#L40-80",
        documentPath: "doc.md",
        coverage: "partial" as const,
        returnedStartLine: 40,
        returnedEndLine: 80,
        totalLines: 100,
        truncated: false,
        documentHasMore: true,
        hasMore: true,
      },
    ];
    const unions = unionReturnedLineSpans(facts);
    expect(unions[0]?.spans).toEqual([{ start: 1, end: 80 }]);
    expect(unions[0]?.provenFull).toBe(false);
  });

  it("Case I — short range fully received", () => {
    const root = tmpGitRepo(20, 20);
    const adapter = new GitLocalReadAdapter(root);
    const r = adapter.readFile("projects/sfia-studio/docs/min09-doc.md", 65536, {
      startLine: 2,
      endLine: 3,
    });
    expect(r.truncated).toBe(false);
    expect(r.completeLineCount).toBe(2);
    expect(r.returnedEndLine).toBe(3);
    expect(r.documentHasMore).toBe(true);
    expect(r.content).toContain("L2 ");
    expect(r.content).toContain("L3 ");
  });

  it("Case J — full small document without truncation", () => {
    const root = tmpGitRepo(5, 20);
    const adapter = new GitLocalReadAdapter(root);
    const r = adapter.readFile("projects/sfia-studio/docs/min09-doc.md", 65536);
    expect(r.truncated).toBe(false);
    expect(r.documentHasMore).toBe(false);
    expect(r.completeLineCount).toBe(5);
    expect(r.returnedEndLine).toBe(5);
    expect(r.nextStartLineHint).toBeNull();
  });

  it("Case K/L — hasMore distinct from truncated; documentHasMore distinct", () => {
    const root = tmpGitRepo(30, 20);
    const adapter = new GitLocalReadAdapter(root);
    const r = adapter.readFile("projects/sfia-studio/docs/min09-doc.md", 65536, {
      startLine: 1,
      endLine: 5,
    });
    expect(r.truncated).toBe(false);
    expect(r.documentHasMore).toBe(true);
    expect(r.hasMore).toBe(true);
    expect(r.summary).toMatch(/documentHasMore/);
    expect(r.summary).not.toMatch(/\btruncated\b/);
  });

  it("Case M — no FULL claim when L1-total requested but truncated", () => {
    const summary =
      "read doc.md L1-100/100 returned L1-12 (12013 chars) truncated hasMore";
    const parsed = parseGitLocalReadCoverageSignals({ summary });
    expect(parsed?.truncated).toBe(true);
    expect(parsed?.returnedEndLine).toBe(12);
    expect(parsed?.startLine).toBe(1);
    expect(parsed?.endLine).toBe(100);
  });

  it("Case N — legacy summaries still parse", () => {
    const full = parseGitLocalReadCoverageSignals({
      summary: "read docs/a.md L1-10/10 (100 chars)",
    });
    expect(full?.returnedEndLine).toBe(10);
    const legacyMore = parseGitLocalReadCoverageSignals({
      summary: "read docs/e.md L1-10/50 (100 chars) hasMore",
    });
    expect(legacyMore?.hasMore).toBe(true);
    expect(legacyMore?.truncated).toBe(false);
    expect(legacyMore?.documentHasMore).toBe(true);
  });

  it("Case O — UTF-8 multibyte: mid-cut does not credit partial line", () => {
    const lines = ["aa", "éééééééééé", "bb"]; // accented chars are 2 bytes
    const body = "aa\néé"; // cuts inside second line
    const counted = countCompleteReturnedLines({
      lines,
      startLine: 1,
      endLine: 3,
      body,
    });
    expect(counted.completeLineCount).toBe(1);
    expect(counted.partialLineNumber).toBe(2);
  });

  it("ToolRouter usage.truncated is content-cut only (not documentHasMore)", async () => {
    const root = tmpGitRepo(20, 20);
    const events: TechnicalEvent[] = [];
    const result = await routeToolCall(
      {
        toolCallId: createToolCallId(),
        name: "git_local_read_file",
        arguments: {
          path: "projects/sfia-studio/docs/min09-doc.md",
          startLine: 1,
          endLine: 3,
        },
        sessionId: "min09",
      },
      {
        workspaceRoot: root,
        sink: { emit: (e) => events.push(e) },
      },
    );
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.usage.truncated).toBe(false);
      const data = result.data as {
        documentHasMore?: boolean;
        truncated?: boolean;
        nextStartLineHint?: number | null;
        completeLineCount?: number;
      };
      expect(data.documentHasMore).toBe(true);
      expect(data.truncated).toBe(false);
      expect(data.completeLineCount).toBe(3);
      expect(data.nextStartLineHint).toBe(4);
    }
  });
});

describe("P6-MIN-09 — Axe A/E/F observability + honest incomplete", () => {
  it("emits ADAPTIVE_BUDGET_OBSERVED + CONTINUATION_OBSERVED", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "p6-min09-sess-"));
    dirs.push(dir);
    const session = new ProductSqliteSession({
      projectId: "prj:min09-obs",
      dbPath: path.join(dir, "session.sqlite"),
    });
    const events: TechnicalEvent[] = [];
    const model = new ScriptedModel([
      [assistantMessage("Synthèse partielle déterministe OK.")],
    ]);
    const result = await runNoraAgentsTurn({
      correlationId: "cor:min09-obs",
      projectId: "prj:min09-obs",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: T1_PROMPT,
      session,
      model,
      enableTools: false,
      cognitiveStrategyClass: "Focused",
      sink: { emit: (e) => events.push(e) },
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
    });
    expect(result.limitReached).toBe(false);
    expect(result.text).toContain("Synthèse partielle");
    expect(events.some((e) => e.type === "ADAPTIVE_BUDGET_OBSERVED")).toBe(
      true,
    );
    expect(events.some((e) => e.type === "CONTINUATION_OBSERVED")).toBe(true);
    const adaptive = events.find((e) => e.type === "ADAPTIVE_BUDGET_OBSERVED");
    expect(adaptive?.detail.requestedMaxTurns).toBeTruthy();
    expect(adaptive?.detail.ceiling).toBe(24);
    session.close();
  });

  it("budget exhausted with tool crumbs → honest disclosure, not bare stock alone when facts exist", () => {
    const text = buildDocumentaryBudgetExhaustedText({
      items: [
        {
          type: "function_call_result",
          name: "git_local_read_file",
          output: {
            text: JSON.stringify({
              ok: true,
              summary:
                "read projects/x.md L1-250/1664 returned L1-64 (12013 chars) truncated documentHasMore hasMore",
              data: {
                path: "projects/x.md",
                truncated: true,
                documentHasMore: true,
                returnedStartLine: 1,
                returnedEndLine: 64,
                totalLines: 1664,
                nextStartLineHint: 65,
              },
            }),
          },
        },
      ],
    });
    expect(text).toContain("Model-turn budget reached (maxTurns).");
    expect(text).toContain("inachevée");
    expect(text).toContain("projects/x.md");
    expect(text).toContain("L1-64");
    expect(text).toContain("65");
    expect(text).not.toMatch(/HumanDecision inventée|Deliverable validé/i);
  });

  it("ScriptedModel documentary: synthesis before stop when budget allows", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "p6-min09-syn-"));
    dirs.push(dir);
    const session = new ProductSqliteSession({
      projectId: "prj:min09-syn",
      dbPath: path.join(dir, "session.sqlite"),
    });
    const model = new ScriptedModel([
      [
        functionCall(
          "git_local_read_file",
          {
            path: "projects/sfia-studio/app/package.json",
            startLine: 1,
            endLine: 40,
          },
          { callId: "r1" },
        ),
      ],
      [
        assistantMessage(
          "PARTIEL — synthèse déterministe des portions lues (pas une couverture intégrale).",
        ),
      ],
    ]);
    const result = await runNoraAgentsTurn({
      correlationId: "cor:min09-syn",
      projectId: "prj:min09-syn",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: T1_PROMPT,
      session,
      model,
      enableTools: true,
      maxTurns: 8,
      enableControlledContinuation: true,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
    });
    expect(result.limitReached).toBe(false);
    expect(result.text).toMatch(/PARTIEL/);
    expect(result.adaptiveObserve?.effectiveMaxTurns).toBeLessThanOrEqual(10);
    session.close();
  });

  it("P0 — exhausted mission without text stays incomplete (limitReached)", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "p6-min09-p0-"));
    dirs.push(dir);
    const session = new ProductSqliteSession({
      projectId: "prj:min09-p0",
      dbPath: path.join(dir, "session.sqlite"),
    });
    const model = new ScriptedModel([
      [
        functionCall(
          "git_local_read_file",
          { path: "projects/sfia-studio/app/package.json" },
          { callId: "a" },
        ),
      ],
      [
        functionCall(
          "git_local_read_file",
          { path: "projects/sfia-studio/app/package.json" },
          { callId: "b" },
        ),
      ],
      [
        functionCall(
          "git_local_read_file",
          { path: "projects/sfia-studio/app/package.json" },
          { callId: "c" },
        ),
      ],
    ]);
    const result = await runNoraAgentsTurn({
      correlationId: "cor:min09-p0",
      projectId: "prj:min09-p0",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: T1_PROMPT,
      session,
      model,
      enableTools: true,
      maxTurns: 2,
      enableControlledContinuation: false,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
    });
    expect(result.limitReached).toBe(true);
    expect(result.text).toContain("Model-turn budget reached (maxTurns).");
    session.close();
  });
});

describe("P6-MIN-09 — R2 Runner maxTurns restitution integration", () => {
  it("Runner soft maxTurns + real git tool → honest disclosure from newItems", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "p6-min09-r2-"));
    dirs.push(dir);
    const session = new ProductSqliteSession({
      projectId: "prj:min09-r2",
      dbPath: path.join(dir, "session.sqlite"),
    });
    const model = new ScriptedModel([
      [
        functionCall(
          "git_local_read_file",
          {
            path: "projects/sfia-studio/app/package.json",
            startLine: 1,
            endLine: 20,
          },
          { callId: "r2a" },
        ),
      ],
      [
        functionCall(
          "git_local_read_file",
          {
            path: "projects/sfia-studio/app/package.json",
            startLine: 21,
            endLine: 40,
          },
          { callId: "r2b" },
        ),
      ],
    ]);
    const result = await runNoraAgentsTurn({
      correlationId: "cor:min09-r2",
      projectId: "prj:min09-r2",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent:
        "Consulte projects/sfia-studio/app/package.json et fais-en une synthèse.",
      session,
      model,
      enableTools: true,
      maxTurns: 1,
      enableControlledContinuation: false,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
    });
    expect(result.limitReached).toBe(true);
    expect(result.text).toContain("Model-turn budget reached (maxTurns).");
    expect(result.text).toContain("Analyse documentaire inachevée");
    expect(result.text).toContain("projects/sfia-studio/app/package.json");
    expect(result.text).toMatch(/L1-\d+/);
    expect(result.text).not.toMatch(/couverture intégrale prouvée/);
    // Must not invent document body synthesis.
    expect(result.text).not.toMatch(/\"name\"\s*:\s*\"sfia-studio\"/);
    const items = await session.getItems();
    const toolResults = items.filter(
      (it) =>
        (it as { type?: string }).type === "function_call_result" &&
        (it as { name?: string }).name === "git_local_read_file",
    );
    expect(toolResults.length).toBeGreaterThanOrEqual(1);
    const shaped = toolResults[0] as {
      output?: { type?: string; text?: string };
    };
    expect(shaped.output?.type).toBe("text");
    expect(typeof shaped.output?.text).toBe("string");
    session.close();
  });

  it("Runner multi-segment continuation still surfaces tool coverage on exhaust", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "p6-min09-r2c-"));
    dirs.push(dir);
    const session = new ProductSqliteSession({
      projectId: "prj:min09-r2c",
      dbPath: path.join(dir, "session.sqlite"),
    });
    const script = Array.from({ length: 8 }, (_, i) => [
      functionCall(
        "git_local_read_file",
        {
          path: "projects/sfia-studio/app/package.json",
          startLine: i * 5 + 1,
          endLine: i * 5 + 5,
        },
        { callId: `seg${i + 1}` },
      ),
    ]);
    const result = await runNoraAgentsTurn({
      correlationId: "cor:min09-r2c",
      projectId: "prj:min09-r2c",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent:
        "Consulte projects/sfia-studio/app/package.json et fais-en une synthèse.",
      session,
      model: new ScriptedModel(script),
      enableTools: true,
      maxTurns: 8,
      enableControlledContinuation: true,
      cognitiveStrategyClass: "Focused",
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
    });
    expect(result.continuationObserve?.continued).toBe(true);
    expect(result.continuationObserve?.segmentsExecuted).toBeGreaterThanOrEqual(
      2,
    );
    expect(result.limitReached).toBe(true);
    expect(result.text).toContain("package.json");
    expect(result.text).toContain("inachevée");
    session.close();
  });

  it("failed tool / no readable facts → generic stock fallback preserved", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "p6-min09-r2n-"));
    dirs.push(dir);
    const session = new ProductSqliteSession({
      projectId: "prj:min09-r2n",
      dbPath: path.join(dir, "session.sqlite"),
    });
    const result = await runNoraAgentsTurn({
      correlationId: "cor:min09-r2n",
      projectId: "prj:min09-r2n",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: "continue",
      session,
      model: new ScriptedModel([
        [
          functionCall(
            "git_local_read_file",
            {
              path: "projects/sfia-studio/docs/does-not-exist-min09.md",
            },
            { callId: "missing" },
          ),
        ],
      ]),
      enableTools: true,
      maxTurns: 1,
      enableControlledContinuation: false,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
    });
    expect(result.limitReached).toBe(true);
    // Failed tool must not invent coverage — stock-only (or stock without path spans).
    expect(result.text).toContain("Model-turn budget reached (maxTurns).");
    expect(result.text).not.toContain("Périmètre réellement remis");
    session.close();
  });
});

describe("P6-MIN-09 — R4 redaction / documentary progression", () => {
  const DOC = "projects/sfia-studio/docs/min09-doc.md";

  it("R4-A — document without secrets: unchanged honest coverage", () => {
    const root = tmpGitRepo(8, 40);
    const adapter = new GitLocalReadAdapter(root);
    const r = adapter.readFile(DOC, 32768, { startLine: 1, endLine: 8 });
    expect(r.completeLineCount).toBe(8);
    expect(r.returnedStartLine).toBe(1);
    expect(r.returnedEndLine).toBe(8);
    expect(r.truncated).toBe(false);
    expect(r.content).toContain("L1 ");
    expect(r.content).toContain("L8 ");
  });

  it("R4-B/C/D/E — secret patterns redacted; complete line still credited", () => {
    const lines = [
      "intro safe",
      FAKE.openaiKeyLine,
      `token ${FAKE.skToken} mid`,
      `auth ${FAKE.ghpToken}`,
      FAKE.bearer,
      "outro safe",
    ];
    const root = tmpGitRepoWithLines(lines);
    const adapter = new GitLocalReadAdapter(root);
    const r = adapter.readFile(DOC, 32768, { startLine: 1, endLine: 6 });
    expect(r.completeLineCount).toBe(6);
    expect(r.returnedEndLine).toBe(6);
    expect(r.nextStartLineHint).toBeNull();
    assertNoFakeSecrets(r.content);
    expect(r.content).toContain("[redacted]");
    expect(r.content).toContain("intro safe");
    expect(r.content).toContain("outro safe");
  });

  it("R4-F/G — redacted line mid-doc and at range start still progresses", () => {
    const mid = [
      "L1 ok",
      "L2 ok",
      `L3 ${FAKE.skToken}`,
      "L4 ok",
      "L5 ok",
    ];
    const rootMid = tmpGitRepoWithLines(mid);
    const aMid = new GitLocalReadAdapter(rootMid);
    const rMid = aMid.readFile(DOC, 32768, { startLine: 1, endLine: 5 });
    expect(rMid.completeLineCount).toBe(5);
    expect(rMid.returnedEndLine).toBe(5);
    assertNoFakeSecrets(rMid.content);

    const start = [`${FAKE.ghpToken}`, "L2 ok", "L3 ok"];
    const rootStart = tmpGitRepoWithLines(start);
    const aStart = new GitLocalReadAdapter(rootStart);
    const rStart = aStart.readFile(DOC, 32768, { startLine: 1, endLine: 3 });
    expect(rStart.completeLineCount).toBe(3);
    expect(rStart.returnedStartLine).toBe(1);
    expect(rStart.returnedEndLine).toBe(3);
    assertNoFakeSecrets(rStart.content);
  });

  it("R4-H/I — truncation before/on sensitive line keeps secrets out and hints honest", () => {
    const lineWidth = 40;
    const sensitive = `SEC ${FAKE.skToken} ${"y".repeat(20)}`;
    const lines = [
      `L1 ${"x".repeat(lineWidth - 4)}`,
      `L2 ${"x".repeat(lineWidth - 4)}`,
      sensitive,
      `L4 ${"x".repeat(lineWidth - 4)}`,
    ];
    const root = tmpGitRepoWithLines(lines);
    const adapter = new GitLocalReadAdapter(root);
    // Cap bytes so only L1+L2 fit (same pattern as R1 Case A).
    const twoFull = `${lines[0]}\n${lines[1]}\n`;
    const maxBytes = Buffer.byteLength(twoFull, "utf8") + 10;
    const r = adapter.readFile(DOC, maxBytes, { startLine: 1, endLine: 4 });
    expect(r.completeLineCount).toBeLessThan(4);
    expect(r.returnedEndLine).toBeLessThan(4);
    assertNoFakeSecrets(r.content);
    expect(r.nextStartLineHint).toBe(r.returnedEndLine + 1);
  });

  it("R4-J — successive reads progress past redacted lines (no loop)", () => {
    const lines = Array.from({ length: 12 }, (_, i) =>
      i === 3 ? `L4 ${FAKE.openaiKeyLine}` : `L${i + 1} plain-${i + 1}`,
    );
    const root = tmpGitRepoWithLines(lines);
    const adapter = new GitLocalReadAdapter(root);
    let start = 1;
    const seen = new Set<number>();
    for (let i = 0; i < 6; i++) {
      const r = adapter.readFile(DOC, 200, { startLine: start, endLine: start + 2 });
      assertNoFakeSecrets(r.content);
      if (r.completeLineCount > 0) {
        for (let ln = r.returnedStartLine; ln <= r.returnedEndLine; ln++) {
          expect(seen.has(ln)).toBe(false);
          seen.add(ln);
        }
        expect(r.nextStartLineHint).toBe(
          r.returnedEndLine < r.totalLines ? r.returnedEndLine + 1 : null,
        );
        if (r.nextStartLineHint == null) break;
        start = r.nextStartLineHint;
      } else {
        expect(r.nextStartLineHint).not.toBeNull();
        start = r.nextStartLineHint!;
      }
    }
    expect(seen.size).toBeGreaterThanOrEqual(4);
    expect(seen.has(4)).toBe(true);
  });

  it("R4-K — lineExceedsCap remains explicit on oversize redacted line", () => {
    const huge = `${"Z".repeat(CT_MAX_TOOL_RESULT_CHARS + 500)} ${FAKE.skToken}`;
    const root = tmpGitRepoWithLines([huge, "L2 ok"]);
    const adapter = new GitLocalReadAdapter(root);
    const r = adapter.readFile(DOC, 32768, { startLine: 1, endLine: 1 });
    expect(r.completeLineCount).toBe(0);
    expect(r.lineExceedsCap).toBe(true);
    expect(r.nextStartLineHint).toBe(2);
    assertNoFakeSecrets(r.content);
  });

  it("R4-L/M — no secret reintroduction in adapter/tool/session/events; JSON valid", async () => {
    const lines = [
      "alpha",
      FAKE.openaiKeyLine,
      `beta ${FAKE.skToken}`,
      FAKE.bearer,
      "omega",
    ];
    const root = tmpGitRepoWithLines(lines);
    const events: TechnicalEvent[] = [];
    const result = await routeToolCall(
      {
        toolCallId: createToolCallId(),
        sessionId: "cor:r4-l",
        name: "git_local_read_file",
        arguments: { path: DOC, startLine: 1, endLine: 5 },
      },
      {
        workspaceRoot: root,
        sink: { emit: (e) => events.push(e) },
      },
    );
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    const data = result.data as Record<string, unknown>;
    assertNoFakeSecrets(String(data.content ?? ""));
    assertNoFakeSecrets(result.summary ?? "");
    const modelVisible = toolResultForModel(result);
    expect(() => JSON.parse(modelVisible)).not.toThrow();
    assertNoFakeSecrets(modelVisible);
    const parsed = JSON.parse(modelVisible) as {
      data: { completeLineCount: number; returnedEndLine: number; content: string };
    };
    expect(parsed.data.completeLineCount).toBe(5);
    expect(parsed.data.returnedEndLine).toBe(5);
    expect(parsed.data.content).toContain("[redacted]");

    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "p6-min09-r4s-"));
    dirs.push(dir);
    const session = new ProductSqliteSession({
      projectId: "prj:min09-r4s",
      dbPath: path.join(dir, "session.sqlite"),
    });
    const model = new ScriptedModel([
      [
        functionCall(
          "git_local_read_file",
          { path: DOC, startLine: 1, endLine: 5 },
          { callId: "r4s" },
        ),
      ],
      [assistantMessage("Synthèse partielle sans secret.")],
    ]);
    const turn = await runNoraAgentsTurn({
      correlationId: "cor:min09-r4s",
      projectId: "prj:min09-r4s",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: `Consulte ${DOC} et synthétise.`,
      session,
      model,
      enableTools: true,
      maxTurns: 4,
      enableControlledContinuation: false,
      workspaceRoot: root,
      sink: { emit: (e) => events.push(e) },
    });
    assertNoFakeSecrets(turn.text);
    const items = await session.getItems();
    for (const it of items) {
      assertNoFakeSecrets(JSON.stringify(it));
    }
    for (const e of events) {
      assertNoFakeSecrets(JSON.stringify(e));
    }
    session.close();
  });

  it("R4-N — UTF-8 multibyte redacted line still counts complete", () => {
    const lines = [
      "café résumé — ligne 1",
      `clé ${FAKE.skToken} 日本語`,
      "ligne trois ✓",
    ];
    const root = tmpGitRepoWithLines(lines);
    const adapter = new GitLocalReadAdapter(root);
    const r = adapter.readFile(DOC, 32768, { startLine: 1, endLine: 3 });
    expect(r.completeLineCount).toBe(3);
    expect(r.returnedEndLine).toBe(3);
    assertNoFakeSecrets(r.content);
    expect(r.content).toContain("café");
    expect(r.content).toContain("日本語");
  });
});

describe("P6-MIN-09 — R5 double truncation / final payload truth", () => {
  const DOC = "projects/sfia-studio/docs/min09-doc.md";

  it("R5-A — small document: no second truncation; metadata matches content", async () => {
    const root = tmpGitRepo(5, 30);
    const result = await routeToolCall(
      {
        toolCallId: createToolCallId(),
        sessionId: "cor:r5a",
        name: "git_local_read_file",
        arguments: { path: DOC, startLine: 1, endLine: 5 },
      },
      { workspaceRoot: root },
    );
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    const modelVisible = toolResultForModel(result);
    expect(modelVisible.length).toBeLessThanOrEqual(CT_MAX_TOOL_RESULT_CHARS);
    const parsed = JSON.parse(modelVisible) as {
      data: {
        content: string;
        completeLineCount: number;
        returnedStartLine: number;
        returnedEndLine: number;
        truncated: boolean;
        documentHasMore: boolean;
      };
    };
    const lines = completeLinesFromContent(parsed.data.content);
    expect(lines.length).toBe(parsed.data.completeLineCount);
    expect(parsed.data.returnedEndLine).toBe(
      parsed.data.returnedStartLine + parsed.data.completeLineCount - 1,
    );
    expect(parsed.data.truncated).toBe(false);
    expect(parsed.data.documentHasMore).toBe(false);
  });

  it("R5-B/C/D/E/F/H/I — near/over JSON ceiling: final metadata matches complete lines", () => {
    // Wide lines so adapter returns many complete lines near 12k; envelope forces second cut.
    const lineWidth = 80;
    const lineCount = 200;
    const root = tmpGitRepo(lineCount, lineWidth);
    const adapter = new GitLocalReadAdapter(root);
    const adapterRead = adapter.readFile(DOC, 32768, {
      startLine: 1,
      endLine: 180,
    });
    expect(adapterRead.completeLineCount).toBeGreaterThan(50);

    // Force a tight ceiling below adapter content to exercise second cut.
    const tight = Math.min(
      CT_MAX_TOOL_RESULT_CHARS,
      Math.max(800, Math.floor(adapterRead.content.length * 0.55) + 400),
    );
    const prepared = prepareGitLocalReadDataForModel(
      {
        path: adapterRead.path,
        content: adapterRead.content,
        truncated: adapterRead.truncated,
        documentHasMore: adapterRead.documentHasMore,
        hasMore: adapterRead.hasMore,
        startLine: adapterRead.startLine,
        endLine: adapterRead.endLine,
        requestedStartLine: adapterRead.requestedStartLine,
        requestedEndLine: adapterRead.requestedEndLine,
        returnedStartLine: adapterRead.returnedStartLine,
        returnedEndLine: adapterRead.returnedEndLine,
        completeLineCount: adapterRead.completeLineCount,
        partialLineNumber: adapterRead.partialLineNumber,
        lineExceedsCap: adapterRead.lineExceedsCap,
        totalLines: adapterRead.totalLines,
        nextStartLineHint: adapterRead.nextStartLineHint,
      },
      tight,
    );
    const envelope = redactSecrets(
      JSON.stringify({
        ok: true,
        summary: prepared.summary,
        data: prepared.data,
        truncated: prepared.truncated,
      }),
    );
    expect(envelope.length).toBeLessThanOrEqual(tight);
    expect(() => JSON.parse(envelope)).not.toThrow();
    const data = prepared.data;
    const lines = completeLinesFromContent(String(data.content ?? ""));
    expect(lines.length).toBe(data.completeLineCount);
    expect(data.returnedEndLine).toBe(
      (data.returnedStartLine as number) + (data.completeLineCount as number) - 1,
    );
    expect(data.completeLineCount as number).toBeLessThan(
      adapterRead.completeLineCount,
    );
    expect(data.truncated).toBe(true);
    expect(data.nextStartLineHint).toBe(
      (data.returnedEndLine as number) + 1,
    );
    // No silent skip past the first missing line.
    expect(data.nextStartLineHint).toBe(
      (data.returnedStartLine as number) + (data.completeLineCount as number),
    );
  });

  it("R5-G — toolResultForModel JSON.parse succeeds on routed git read", async () => {
    const root = tmpGitRepo(20, 50);
    const result = await routeToolCall(
      {
        toolCallId: createToolCallId(),
        sessionId: "cor:r5g",
        name: "git_local_read_file",
        arguments: { path: DOC, startLine: 1, endLine: 20 },
      },
      { workspaceRoot: root },
    );
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    const raw = toolResultForModel(result);
    expect(() => JSON.parse(raw)).not.toThrow();
    expect(CT_MAX_TOOL_RESULT_CHARS).toBe(100_000);
  });

  it("R5-J — documentHasMore without size cut stays truncated=false", async () => {
    const root = tmpGitRepo(30, 20);
    const result = await routeToolCall(
      {
        toolCallId: createToolCallId(),
        sessionId: "cor:r5j",
        name: "git_local_read_file",
        arguments: { path: DOC, startLine: 1, endLine: 5 },
      },
      { workspaceRoot: root },
    );
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    const data = result.data as Record<string, unknown>;
    expect(data.documentHasMore).toBe(true);
    expect(data.truncated).toBe(false);
    expect(data.completeLineCount).toBe(5);
    expect(data.nextStartLineHint).toBe(6);
  });

  it("R5-K — FULL impossible when final payload cannot prove complete coverage", () => {
    const prepared = prepareGitLocalReadDataForModel(
      {
        path: DOC,
        content: "only one line",
        truncated: false,
        documentHasMore: true,
        hasMore: true,
        startLine: 1,
        endLine: 1,
        requestedStartLine: 1,
        requestedEndLine: 1,
        returnedStartLine: 1,
        returnedEndLine: 1,
        completeLineCount: 1,
        partialLineNumber: null,
        lineExceedsCap: false,
        totalLines: 100,
        nextStartLineHint: 2,
      },
      400,
    );
    const signals = parseGitLocalReadCoverageSignals({
      summary: prepared.summary,
      pathOrRef: DOC,
    });
    expect(signals?.documentHasMore || prepared.data.truncated).toBeTruthy();
    // Coverage helpers must not see a L1-total complete window.
    expect(prepared.data.totalLines).toBe(100);
    expect(prepared.data.returnedEndLine).not.toBe(100);
    expect(signals?.returnedEndLine).not.toBe(100);
  });

  it("R5-L/M — combined R4+R5: large doc with fake secret; no leak; honest meta", async () => {
    const lines = Array.from({ length: 120 }, (_, i) => {
      if (i === 10) return `L11 ${FAKE.openaiKeyLine}`;
      if (i === 40) return `L41 token=${FAKE.skToken}`;
      return `L${i + 1} ${"x".repeat(70)}`;
    });
    const root = tmpGitRepoWithLines(lines);
    const result = await routeToolCall(
      {
        toolCallId: createToolCallId(),
        sessionId: "cor:r5l",
        name: "git_local_read_file",
        arguments: { path: DOC, startLine: 1, endLine: 120 },
      },
      { workspaceRoot: root },
    );
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    const modelVisible = toolResultForModel(result);
    expect(() => JSON.parse(modelVisible)).not.toThrow();
    assertNoFakeSecrets(modelVisible);
    expect(modelVisible.length).toBeLessThanOrEqual(CT_MAX_TOOL_RESULT_CHARS);
    const parsed = JSON.parse(modelVisible) as {
      data: {
        content: string;
        completeLineCount: number;
        returnedStartLine: number;
        returnedEndLine: number;
        nextStartLineHint: number | null;
        truncated: boolean;
      };
    };
    const complete = completeLinesFromContent(parsed.data.content);
    expect(complete.length).toBe(parsed.data.completeLineCount);
    expect(parsed.data.returnedEndLine).toBe(
      parsed.data.returnedStartLine + parsed.data.completeLineCount - 1,
    );
    if (parsed.data.completeLineCount < 120) {
      expect(parsed.data.truncated).toBe(true);
      expect(parsed.data.nextStartLineHint).toBe(
        parsed.data.returnedEndLine + 1,
      );
    }
  });

  it("R5-N — other tools still use prepareToolDataForModel without regression", () => {
    const prepared = prepareToolDataForModel(
      { porcelain: " M file.txt\n", truncated: false },
      CT_MAX_TOOL_RESULT_CHARS,
    );
    expect(prepared.json.length).toBeLessThanOrEqual(CT_MAX_TOOL_RESULT_CHARS);
    expect(() => JSON.parse(prepared.json)).not.toThrow();
    const obj = prepared.data as Record<string, unknown>;
    expect(obj.porcelain).toContain("file.txt");
  });

  it("R5-O — full path Git→Adapter→ToolRouter→model-visible→Runner", async () => {
    const lines = Array.from({ length: 80 }, (_, i) =>
      i === 5
        ? `L6 ${FAKE.bearer}`
        : `L${i + 1} ${"w".repeat(60)}`,
    );
    const root = tmpGitRepoWithLines(lines);
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "p6-min09-r5o-"));
    dirs.push(dir);
    const session = new ProductSqliteSession({
      projectId: "prj:min09-r5o",
      dbPath: path.join(dir, "session.sqlite"),
    });
    const model = new ScriptedModel([
      [
        functionCall(
          "git_local_read_file",
          { path: DOC, startLine: 1, endLine: 80 },
          { callId: "r5o" },
        ),
      ],
      [assistantMessage("PARTIEL — couverture bornée du payload final.")],
    ]);
    const turn = await runNoraAgentsTurn({
      correlationId: "cor:min09-r5o",
      projectId: "prj:min09-r5o",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: `Consulte ${DOC} et synthétise.`,
      session,
      model,
      enableTools: true,
      maxTurns: 4,
      enableControlledContinuation: false,
      workspaceRoot: root,
    });
    expect(turn.limitReached).toBe(false);
    expect(turn.text).toMatch(/PARTIEL/);
    assertNoFakeSecrets(turn.text);
    const items = await session.getItems();
    const toolResults = items.filter(
      (it) =>
        (it as { type?: string }).type === "function_call_result" &&
        (it as { name?: string }).name === "git_local_read_file",
    );
    expect(toolResults.length).toBeGreaterThanOrEqual(1);
    const text = (toolResults[0] as { output?: { text?: string } }).output
      ?.text;
    expect(typeof text).toBe("string");
    assertNoFakeSecrets(text!);
    const parsed = JSON.parse(text!) as {
      data: {
        content: string;
        completeLineCount: number;
        returnedStartLine: number;
        returnedEndLine: number;
        nextStartLineHint: number | null;
      };
    };
    const complete = completeLinesFromContent(parsed.data.content);
    expect(complete.length).toBe(parsed.data.completeLineCount);
    expect(parsed.data.returnedEndLine).toBe(
      parsed.data.returnedStartLine + parsed.data.completeLineCount - 1,
    );
    if (parsed.data.nextStartLineHint != null) {
      expect(parsed.data.nextStartLineHint).toBe(
        parsed.data.returnedEndLine + 1,
      );
    }
    session.close();
  });
});

describe("P6-MIN-09 — R6 final envelope oversized-line progression", () => {
  const DOC = "projects/sfia-studio/docs/min09-doc.md";

  it("R6-A — short line: full envelope, complete coverage", async () => {
    const root = tmpGitRepoWithLines(["short line one", "short line two"]);
    const result = await routeToolCall(
      {
        toolCallId: createToolCallId(),
        sessionId: "cor:r6a",
        name: "git_local_read_file",
        arguments: { path: DOC, startLine: 1, endLine: 2 },
      },
      { workspaceRoot: root },
    );
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    const mv = toolResultForModel(result);
    expect(mv.length).toBeLessThanOrEqual(CT_MAX_TOOL_RESULT_CHARS);
    const parsed = JSON.parse(mv) as {
      data: {
        completeLineCount: number;
        returnedEndLine: number;
        lineExceedsCap: boolean;
        truncated: boolean;
        content: string;
      };
    };
    expect(parsed.data.completeLineCount).toBe(2);
    expect(parsed.data.returnedEndLine).toBe(2);
    expect(parsed.data.lineExceedsCap).toBe(false);
    expect(parsed.data.truncated).toBe(false);
    expect(parsed.data.content).toContain("short line one");
  });

  it("R6-B/C — line fits adapter but not final envelope → explicit skip", async () => {
    const longLine = envelopeSkipLongLine();
    const root = tmpGitRepoWithLines([longLine, "L2 ok", "L3 ok"]);
    const adapter = new GitLocalReadAdapter(root);
    const adapterRead = adapter.readFile(DOC, CT_DEFAULT_READ_MAX_BYTES, {
      startLine: 1,
      endLine: 1,
    });
    expect(adapterRead.completeLineCount).toBe(1);
    expect(adapterRead.lineExceedsCap).toBe(false);
    expect(adapterRead.content.length).toBeLessThanOrEqual(
      CT_MAX_TOOL_RESULT_CHARS,
    );

    const result = await routeToolCall(
      {
        toolCallId: createToolCallId(),
        sessionId: "cor:r6b",
        name: "git_local_read_file",
        arguments: {
          path: DOC,
          startLine: 1,
          endLine: 1,
          maxBytes: CT_DEFAULT_READ_MAX_BYTES,
        },
      },
      { workspaceRoot: root },
    );
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    const mv = toolResultForModel(result);
    expect(mv.length).toBeLessThanOrEqual(CT_MAX_TOOL_RESULT_CHARS);
    const parsed = JSON.parse(mv) as {
      data: {
        completeLineCount: number;
        returnedStartLine: number;
        returnedEndLine: number;
        lineExceedsCap: boolean;
        nextStartLineHint: number | null;
        truncated: boolean;
        content: string;
        documentHasMore: boolean;
      };
    };
    // R6-F/G/H — never claim the oversized envelope line as received.
    expect(parsed.data.completeLineCount).toBe(0);
    expect(parsed.data.returnedEndLine).toBe(
      parsed.data.returnedStartLine - 1,
    );
    expect(parsed.data.lineExceedsCap).toBe(true);
    expect(parsed.data.truncated).toBe(true);
    expect(completeLinesFromContent(parsed.data.content)).toHaveLength(0);
    // R6-I — monotone skip; do not re-hint startLine.
    expect(parsed.data.nextStartLineHint).toBe(2);
    expect(parsed.data.nextStartLineHint).not.toBe(
      parsed.data.returnedStartLine,
    );
    expect(CT_MAX_TOOL_RESULT_CHARS).toBe(100_000);
  });

  it("R6-D — adapter lineExceedsCap still explicit and advances", async () => {
    const huge = "Z".repeat(CT_MAX_TOOL_RESULT_CHARS + 800);
    const root = tmpGitRepoWithLines([huge, "L2 ok"]);
    const result = await routeToolCall(
      {
        toolCallId: createToolCallId(),
        sessionId: "cor:r6d",
        name: "git_local_read_file",
        arguments: { path: DOC, startLine: 1, endLine: 1 },
      },
      { workspaceRoot: root },
    );
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    const parsed = JSON.parse(toolResultForModel(result)) as {
      data: {
        completeLineCount: number;
        lineExceedsCap: boolean;
        nextStartLineHint: number | null;
      };
    };
    expect(parsed.data.completeLineCount).toBe(0);
    expect(parsed.data.lineExceedsCap).toBe(true);
    expect(parsed.data.nextStartLineHint).toBe(2);
  });

  it("R6-E — RESULT_CAPPED fail-closed: no invented progression", () => {
    const tightCap = 180;
    const prepared = prepareGitLocalReadDataForModel(
      {
        path: `projects/${"p".repeat(20000)}/x.md`,
        content: "tiny",
        truncated: false,
        documentHasMore: false,
        hasMore: false,
        startLine: 1,
        endLine: 1,
        requestedStartLine: 1,
        requestedEndLine: 1,
        returnedStartLine: 1,
        returnedEndLine: 1,
        completeLineCount: 1,
        partialLineNumber: null,
        lineExceedsCap: false,
        totalLines: 1,
        nextStartLineHint: null,
      },
      tightCap,
    );
    expect(prepared.data.completeLineCount).toBe(0);
    expect(prepared.data.nextStartLineHint).toBeNull();
    expect(prepared.data.note).toBe("RESULT_CAPPED");
    expect(prepared.truncated).toBe(true);
    // Must not claim the line was received.
    expect(prepared.data.returnedEndLine == null || prepared.data.returnedEndLine === 0).toBe(
      true,
    );
    const envelope = JSON.stringify({
      ok: true,
      summary: prepared.summary,
      data: prepared.data,
      truncated: true,
    });
    expect(envelope.length).toBeLessThanOrEqual(tightCap);
  });

  it("R6-J/K/L — repeated reads progress; no loop; no false FULL", async () => {
    const longLine = envelopeSkipLongLine();
    const root = tmpGitRepoWithLines([longLine, "L2 ok", "L3 ok", "L4 ok"]);
    const hints: Array<number | null> = [];
    let start = 1;
    for (let i = 0; i < 4; i++) {
      const result = await routeToolCall(
        {
          toolCallId: createToolCallId(),
          sessionId: `cor:r6j-${i}`,
          name: "git_local_read_file",
          arguments: {
            path: DOC,
            startLine: start,
            endLine: start,
            maxBytes: CT_DEFAULT_READ_MAX_BYTES,
          },
        },
        { workspaceRoot: root },
      );
      expect(result.ok).toBe(true);
      if (!result.ok) return;
      const parsed = JSON.parse(toolResultForModel(result)) as {
        data: {
          completeLineCount: number;
          returnedEndLine: number;
          nextStartLineHint: number | null;
          lineExceedsCap: boolean;
          totalLines: number;
        };
      };
      hints.push(parsed.data.nextStartLineHint);
      if (parsed.data.completeLineCount === 0) {
        expect(parsed.data.lineExceedsCap).toBe(true);
        expect(parsed.data.nextStartLineHint).not.toBe(start);
      }
      // No FULL claim: never L1–total without truncation on a single-line window.
      const claimedFull =
        parsed.data.returnedEndLine === parsed.data.totalLines &&
        start === 1 &&
        parsed.data.completeLineCount === parsed.data.totalLines;
      expect(claimedFull).toBe(false);
      if (parsed.data.nextStartLineHint == null) break;
      expect(parsed.data.nextStartLineHint).toBeGreaterThan(start);
      start = parsed.data.nextStartLineHint;
    }
    expect(hints[0]).toBe(2);
    expect(new Set(hints.filter((h) => h != null)).size).toBeGreaterThanOrEqual(
      2,
    );
  });

  it("R6-M/N — ceiling unchanged; other tools unaffected", () => {
    expect(CT_MAX_TOOL_RESULT_CHARS).toBe(100_000);
    const prepared = prepareToolDataForModel(
      { porcelain: " M other.txt\n", truncated: false },
      CT_MAX_TOOL_RESULT_CHARS,
    );
    expect(() => JSON.parse(prepared.json)).not.toThrow();
    expect((prepared.data as { porcelain: string }).porcelain).toContain(
      "other.txt",
    );
  });

  it("R6-O — ToolRouter integration path (model boundary substituted only)", async () => {
    const longLine = envelopeSkipLongLine();
    const root = tmpGitRepoWithLines([longLine, "L2 after-skip"]);
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "p6-min09-r6o-"));
    dirs.push(dir);
    const session = new ProductSqliteSession({
      projectId: "prj:min09-r6o",
      dbPath: path.join(dir, "session.sqlite"),
    });
    const model = new ScriptedModel([
      [
        functionCall(
          "git_local_read_file",
          {
            path: DOC,
            startLine: 1,
            endLine: 1,
            maxBytes: CT_DEFAULT_READ_MAX_BYTES,
          },
          { callId: "r6o1" },
        ),
      ],
      [
        functionCall(
          "git_local_read_file",
          {
            path: DOC,
            startLine: 2,
            endLine: 2,
            maxBytes: CT_DEFAULT_READ_MAX_BYTES,
          },
          { callId: "r6o2" },
        ),
      ],
      [assistantMessage("PARTIEL — ligne 1 skip envelope; ligne 2 lue.")],
    ]);
    const turn = await runNoraAgentsTurn({
      correlationId: "cor:min09-r6o",
      projectId: "prj:min09-r6o",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: `Consulte ${DOC}.`,
      session,
      model,
      enableTools: true,
      maxTurns: 6,
      enableControlledContinuation: false,
      workspaceRoot: root,
    });
    expect(turn.text).toMatch(/PARTIEL/);
    const items = await session.getItems();
    const toolResults = items.filter(
      (it) =>
        (it as { type?: string }).type === "function_call_result" &&
        (it as { name?: string }).name === "git_local_read_file",
    );
    expect(toolResults.length).toBeGreaterThanOrEqual(2);
    const first = JSON.parse(
      (toolResults[0] as { output?: { text?: string } }).output!.text!,
    ) as { data: { lineExceedsCap: boolean; nextStartLineHint: number } };
    expect(first.data.lineExceedsCap).toBe(true);
    expect(first.data.nextStartLineHint).toBe(2);
    const second = JSON.parse(
      (toolResults[1] as { output?: { text?: string } }).output!.text!,
    ) as { data: { content: string; completeLineCount: number } };
    expect(second.data.completeLineCount).toBe(1);
    expect(second.data.content).toContain("L2 after-skip");
    session.close();
  });
});

describe("P6-MIN-09 — R7 security fixture / evidence fidelity", () => {
  const DOC = "projects/sfia-studio/docs/min09-doc.md";

  it("R7-A/B — fixtures match redaction.ts patterns and change under redactSecrets", () => {
    expect(FAKE.skToken).toMatch(/^sk-[A-Za-z0-9_-]{10,}$/);
    expect(FAKE.ghpToken).toMatch(/^ghp_[A-Za-z0-9]{20,}$/);
    expect(FAKE.openaiKeyLine).toMatch(/^OPENAI_API_KEY=.+/);
    expect(FAKE.bearer).toMatch(/^Authorization:\s*Bearer\s+\S+/);

    expect(redactSecrets(FAKE.skToken)).toBe("[redacted]");
    expect(redactSecrets(FAKE.skToken)).not.toBe(FAKE.skToken);
    expect(redactSecrets(FAKE.ghpToken)).toBe("[redacted]");
    expect(redactSecrets(FAKE.ghpToken)).not.toBe(FAKE.ghpToken);
    expect(redactSecrets(FAKE.openaiKeyLine)).toBe("[redacted]");
    expect(redactSecrets(FAKE.bearer)).toBe("[redacted]");

    // Pack-style non-matching placeholders must NOT be treated as equivalent evidence.
    expect(redactSecrets("sk-[FIXTURE_REDACTED]")).toBe("sk-[FIXTURE_REDACTED]");
    expect(redactSecrets("ghp_[FIXTURE_REDACTED]")).toBe(
      "ghp_[FIXTURE_REDACTED]",
    );
  });

  it("R7-C/D — outputs redacted; progression through redacted lines", async () => {
    const lines = [
      "alpha",
      FAKE.openaiKeyLine,
      `mid ${FAKE.skToken}`,
      FAKE.ghpToken,
      FAKE.bearer,
      "omega",
    ];
    const root = tmpGitRepoWithLines(lines);
    const adapter = new GitLocalReadAdapter(root);
    const r = adapter.readFile(DOC, 32768, { startLine: 1, endLine: 6 });
    expect(r.completeLineCount).toBe(6);
    expect(r.content).toContain("[redacted]");
    assertNoFakeSecrets(r.content);
    expect(r.content).not.toEqual(lines.join("\n"));

    let start = 1;
    const seen = new Set<number>();
    for (let i = 0; i < 4; i++) {
      const chunk = adapter.readFile(DOC, 180, {
        startLine: start,
        endLine: start + 1,
      });
      assertNoFakeSecrets(chunk.content);
      if (chunk.completeLineCount > 0) {
        for (let ln = chunk.returnedStartLine; ln <= chunk.returnedEndLine; ln++) {
          seen.add(ln);
        }
      }
      if (chunk.nextStartLineHint == null) break;
      start = chunk.nextStartLineHint;
    }
    expect(seen.size).toBeGreaterThanOrEqual(3);
  });

  it("R7-E/F/G — Session + events expurgated; model-visible JSON valid", async () => {
    const root = tmpGitRepoWithLines([
      "head",
      FAKE.openaiKeyLine,
      `tok ${FAKE.skToken}`,
      FAKE.bearer,
      "tail",
    ]);
    const events: TechnicalEvent[] = [];
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "p6-min09-r7e-"));
    dirs.push(dir);
    const session = new ProductSqliteSession({
      projectId: "prj:min09-r7e",
      dbPath: path.join(dir, "session.sqlite"),
    });
    const turn = await runNoraAgentsTurn({
      correlationId: "cor:min09-r7e",
      projectId: "prj:min09-r7e",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: `Consulte ${DOC}.`,
      session,
      model: new ScriptedModel([
        [
          functionCall(
            "git_local_read_file",
            { path: DOC, startLine: 1, endLine: 5 },
            { callId: "r7e" },
          ),
        ],
        [assistantMessage("Synthèse partielle sans secret.")],
      ]),
      enableTools: true,
      maxTurns: 4,
      enableControlledContinuation: false,
      workspaceRoot: root,
      sink: { emit: (e) => events.push(e) },
    });
    assertNoFakeSecrets(turn.text);
    for (const it of await session.getItems()) {
      assertNoFakeSecrets(JSON.stringify(it));
    }
    for (const e of events) {
      assertNoFakeSecrets(JSON.stringify(e));
    }
    const toolText = (
      (await session.getItems()).find(
        (it) =>
          (it as { type?: string }).type === "function_call_result" &&
          (it as { name?: string }).name === "git_local_read_file",
      ) as { output?: { text?: string } } | undefined
    )?.output?.text;
    expect(typeof toolText).toBe("string");
    expect(() => JSON.parse(toolText!)).not.toThrow();
    assertNoFakeSecrets(toolText!);
    session.close();
  });

  it("R7-H/I — evidence remains verifiable; controlled fail proves discrimination", () => {
    // Positive discrimination: if redaction were a no-op, secrets would remain.
    const raw = `prefix ${FAKE.skToken} suffix`;
    const redacted = redactSecrets(raw);
    expect(redacted).not.toContain(FAKE.skToken);
    expect(redacted).toContain("[redacted]");
    // Simulate a broken redactor (test-only) — assertion would catch leakage.
    const broken = (s: string) => s;
    expect(broken(raw)).toContain(FAKE.skToken);
    expect(broken(raw)).not.toBe(redacted);
    // Construction recipe published in source — no live credentials.
    expect(fictionSkToken()).toBe(`sk-${"A".repeat(12)}`);
    expect(fictionGhpToken()).toBe(`ghp_${"B".repeat(20)}`);
  });
});
