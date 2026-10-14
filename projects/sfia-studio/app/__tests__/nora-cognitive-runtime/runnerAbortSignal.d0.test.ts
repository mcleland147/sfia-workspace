/**
 * P6 — AbortSignal reaches Agents runner mid tool sequence (deterministic).
 * ZERO REAL / ZERO OpenAI.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import type { Model, ModelRequest, ModelResponse } from "@openai/agents";
import {
  ScriptedModel,
  assistantMessage,
  functionCall,
} from "@openai/agents/testing";
import {
  runNoraAgentsTurn,
  sfiaBoundaryInstructions,
} from "@/lib/nora-cognitive-runtime";
import { NoraTurnAbortedError, abortError } from "@/lib/nora-cognitive-runtime/noraTurnAbort";

const dirs: string[] = [];

function tmpReadRepo(relPath: string, body: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "p6-abort-read-"));
  dirs.push(dir);
  fs.mkdirSync(path.join(dir, path.dirname(relPath)), { recursive: true });
  fs.writeFileSync(path.join(dir, relPath), body, "utf8");
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { execFileSync } = require("node:child_process") as typeof import("node:child_process");
  execFileSync("git", ["init"], { cwd: dir });
  execFileSync("git", ["config", "user.email", "t@e.com"], { cwd: dir });
  execFileSync("git", ["config", "user.name", "t"], { cwd: dir });
  execFileSync("git", ["add", "."], { cwd: dir });
  execFileSync("git", ["commit", "-m", "init"], { cwd: dir });
  return dir;
}

function abortAfterFirstToolModel(
  relPath: string,
  hooks: { onSecondModelCall?: () => void; modelCalls?: number },
): Model {
  const inner = new ScriptedModel([
    [functionCall("git_local_read_file", { path: relPath }, { callId: "r1" })],
    [functionCall("git_local_read_file", { path: relPath }, { callId: "r2" })],
    [functionCall("git_local_read_file", { path: relPath }, { callId: "r3" })],
    [assistantMessage("unreachable-after-abort")],
  ]);
  let calls = 0;
  return {
    async getResponse(request: ModelRequest): Promise<ModelResponse> {
      calls += 1;
      hooks.modelCalls = calls;
      if (calls === 1) {
        return inner.getResponse(request);
      }
      if (calls === 2) {
        hooks.onSecondModelCall?.();
      }
      await new Promise<void>((_resolve, reject) => {
        const fail = () => reject(abortError());
        if (request.signal?.aborted) {
          fail();
          return;
        }
        request.signal?.addEventListener("abort", fail, { once: true });
      });
      throw new Error("unreachable");
    },
    async *getStreamedResponse(): AsyncIterable<never> {
      throw new Error("streaming not used");
    },
  };
}

afterEach(() => {
  while (dirs.length) {
    const d = dirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

describe("P6 — runner AbortSignal mid tool sequence", () => {
  it("aborts during multi-step ScriptedModel tools — one read, no final assistant", async () => {
    const rel = "projects/sfia-studio/docs/abort-probe.md";
    const root = tmpReadRepo(rel, "ABORT_PROBE_FACT\n");
    const hooks: { onSecondModelCall?: () => void; modelCalls?: number } = {};
    const controller = new AbortController();

    const pending = runNoraAgentsTurn({
      correlationId: "p6-runner-abort-mid-tools",
      projectId: "prj:runner-abort",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: "Read the probe file repeatedly.",
      model: abortAfterFirstToolModel(rel, hooks),
      workspaceRoot: root,
      enableTools: true,
      maxTurns: 12,
      signal: controller.signal,
    });

    const started = Date.now();
    while (hooks.modelCalls !== 2 && Date.now() - started < 5000) {
      await new Promise((r) => setTimeout(r, 15));
    }
    expect(hooks.modelCalls).toBe(2);
    controller.abort();

    await expect(pending).rejects.toBeInstanceOf(NoraTurnAbortedError);
  });
});
