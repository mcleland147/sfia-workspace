/**
 * R-EXT-04 — Representative documentary corpus (deterministic).
 * ZERO REAL / ZERO OpenAI.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  ScriptedModel,
  assistantMessage,
  functionCall,
} from "@openai/agents/testing";
import { collectToolTelemetry } from "@/features/project-assistant/collectToolTelemetry";
import { GitLocalReadAdapter } from "@/lib/platform/repository/gitLocalReadAdapter";
import {
  CT_MAX_TOOL_RESULT_CHARS,
  CT_DEFAULT_READ_MAX_BYTES,
} from "@/lib/platform/tools/types";
import {
  createToolCallId,
  prepareGitLocalReadDataForModel,
  routeToolCall,
} from "@/lib/platform/tools/toolRouter";
import type { TechnicalEvent } from "@/lib/platform/observability/types";
import {
  runNoraAgentsTurn,
  sfiaBoundaryInstructions,
} from "@/lib/nora-cognitive-runtime";

const dirs: string[] = [];

function initGitRepo(root: string): void {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { execFileSync } = require("node:child_process") as typeof import("node:child_process");
  execFileSync("git", ["init"], { cwd: root });
  execFileSync("git", ["config", "user.email", "test@example.com"], {
    cwd: root,
  });
  execFileSync("git", ["config", "user.name", "test"], { cwd: root });
  execFileSync("git", ["add", "."], { cwd: root });
  execFileSync("git", ["commit", "-m", "init"], { cwd: root });
}

function tmpCorpusRepo(docSpecs: { rel: string; body: string }[]): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "p6-corpus-"));
  dirs.push(dir);
  for (const spec of docSpecs) {
    fs.mkdirSync(path.join(dir, path.dirname(spec.rel)), { recursive: true });
    fs.writeFileSync(path.join(dir, spec.rel), spec.body, "utf8");
  }
  initGitRepo(dir);
  return dir;
}

function corpusReadScript(relPaths: string[]): unknown[][] {
  const steps: unknown[][] = relPaths.map((rel, i) => [
    functionCall(
      "git_local_read_file",
      { path: rel, maxBytes: CT_DEFAULT_READ_MAX_BYTES },
      { callId: `corpus-read-${i + 1}` },
    ),
  ]);
  steps.push([
    assistantMessage(
      `Corpus review complete — ${relPaths.length} documents read.`,
    ),
  ]);
  return steps;
}

afterEach(() => {
  vi.restoreAllMocks();
  while (dirs.length) {
    const d = dirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

describe("R-EXT-04 — representative corpus capacity", () => {
  it("~90k char mono-doc: adapter read + prepareGitLocalReadDataForModel within CT_MAX_TOOL_RESULT_CHARS", () => {
    const token = "FACT_MONO_90K_UNIQUE_ALPHA";
    const body = `${token}\n${"ζ".repeat(90_000 - token.length - 1)}\n`;
    const rel = "projects/sfia-studio/docs/mono-long.md";
    const root = tmpCorpusRepo([{ rel, body }]);
    const adapter = new GitLocalReadAdapter(root);
    const read = adapter.readFile(rel, CT_DEFAULT_READ_MAX_BYTES);
    expect(read.truncated).toBe(false);
    expect(read.content).toContain(token);

    const prepared = prepareGitLocalReadDataForModel({
      path: rel,
      content: read.content,
      startLine: read.startLine,
      endLine: read.returnedEndLine ?? read.endLine,
      requestedStartLine: read.startLine,
      requestedEndLine: read.endLine,
      returnedStartLine: read.returnedStartLine,
      totalLines: read.totalLines,
      documentHasMore: read.documentHasMore,
      truncated: read.truncated,
    });
    expect(prepared.json.length).toBeLessThanOrEqual(CT_MAX_TOOL_RESULT_CHARS);
    expect(prepared.json).toContain(token);
  });

  for (const count of [5, 10, 15] as const) {
    it(`${count} docs — runNoraAgentsTurn reads each doc; FACT-i in tool payloads`, async () => {
      const relPaths = Array.from(
        { length: count },
        (_, i) => `projects/sfia-studio/docs/corpus/doc-${i + 1}.md`,
      );
      const specs = relPaths.map((rel, i) => ({
        rel,
        body: `FACT-${i + 1}-UNIQUE\nline-${i + 1}-body\n`,
      }));
      const root = tmpCorpusRepo(specs);
      const events: TechnicalEvent[] = [];
      const toolPayloads: string[] = [];

      const routeModule = await import("@/lib/platform/tools/toolRouter");
      const originalRoute = routeModule.routeToolCall;
      vi.spyOn(routeModule, "routeToolCall").mockImplementation(
        async (request, ctx) => {
          const result = await originalRoute(request, ctx);
          if (result.ok && request.name === "git_local_read_file") {
            toolPayloads.push(JSON.stringify(result.data));
          }
          return result;
        },
      );

      const turn = await runNoraAgentsTurn({
        correlationId: `p6-corpus-${count}`,
        projectId: `prj:p6-corpus-${count}`,
        systemInstructions: sfiaBoundaryInstructions(),
        userContent: `Read all ${count} corpus documents in order.`,
        model: new ScriptedModel(corpusReadScript(relPaths) as never),
        workspaceRoot: root,
        enableTools: true,
        maxTurns: Math.max(24, count * 2 + 4),
        sink: { emit: (e) => events.push(e) },
      });

      expect(turn.toolCalls).toBe(count);
      expect(
        events.filter((e) => e.type === "TOOL_SUCCEEDED").length,
      ).toBe(count);

      const haystack = [turn.text, JSON.stringify(events), ...toolPayloads].join(
        "\n",
      );
      for (let i = 1; i <= count; i += 1) {
        expect(haystack).toContain(`FACT-${i}-UNIQUE`);
      }

      const cov = collectToolTelemetry(events).readCoverage;
      expect(cov.facts.length).toBeGreaterThanOrEqual(count);
      expect(cov.facts.filter((f) => f.coverage === "full").length).toBe(
        count,
      );
    });
  }

  it("partial range read — PARTIAL coverage, not FULL", async () => {
    const rel = "projects/sfia-studio/docs/partial.md";
    const lines = Array.from({ length: 40 }, (_, i) => `FACT-P-${i + 1}`).join(
      "\n",
    );
    const root = tmpCorpusRepo([{ rel, body: `${lines}\n` }]);
    const events: TechnicalEvent[] = [];
    const result = await routeToolCall(
      {
        toolCallId: createToolCallId(),
        name: "git_local_read_file",
        arguments: { path: rel, startLine: 1, endLine: 5 },
        sessionId: "p6-corpus-partial",
      },
      { workspaceRoot: root, sink: { emit: (e) => events.push(e) } },
    );
    expect(result.ok).toBe(true);
    const cov = collectToolTelemetry(events).readCoverage;
    expect(cov.facts[0]?.coverage).toBe("partial");
    expect(cov.facts[0]?.coverage).not.toBe("full");
    if (result.ok) {
      const content = String((result.data as { content?: string }).content ?? "");
      expect(content).toContain("FACT-P-1");
      expect(content).not.toContain("FACT-P-40");
    }
  });
});
