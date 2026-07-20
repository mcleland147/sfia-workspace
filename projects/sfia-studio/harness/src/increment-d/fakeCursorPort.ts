/**
 * Increment D — deterministic fake Cursor port (tests / fixture mode).
 * Never invokes a real Cursor binary.
 */

import { mkdirSync, writeFileSync, unlinkSync, existsSync } from "node:fs";
import path from "node:path";
import { INC_D_OUTPUT_REL } from "./sandboxPaths.js";

export type FakeCursorBehavior =
  | "success"
  | "exit-nonzero"
  | "timeout"
  | "stoppable-slow"
  | "write-outside"
  | "unavailable"
  | "success-no-file";

export interface FakeCursorPortOptions {
  behavior: FakeCursorBehavior;
  sandboxAbs: string;
  markdownContent: string;
  /** Delay before completing (ms) — used for STOP/timeout tests. */
  delayMs?: number;
  signal?: AbortSignal;
}

export interface FakeCursorPortResult {
  ok: boolean;
  exitCode: number | null;
  signal: string | null;
  timedOut: boolean;
  stopRequested: boolean;
  cursorAvailable: boolean;
  realCursorProcessInvoked: false;
  durationMs: number;
  stdout: string;
  stderr: string;
  errorCode?: string;
}

export async function runFakeCursorPort(
  opts: FakeCursorPortOptions,
): Promise<FakeCursorPortResult> {
  const started = Date.now();
  const delay = opts.delayMs ?? 0;

  if (opts.behavior === "unavailable") {
    return {
      ok: false,
      exitCode: null,
      signal: null,
      timedOut: false,
      stopRequested: false,
      cursorAvailable: false,
      realCursorProcessInvoked: false,
      durationMs: Date.now() - started,
      stdout: "",
      stderr: "cursor binary not found",
      errorCode: "CURSOR_UNAVAILABLE",
    };
  }

  const waitOrAbort = async (): Promise<"ok" | "aborted" | "timeout"> => {
    if (delay <= 0) return "ok";
    return new Promise((resolve) => {
      const timer = setTimeout(() => resolve("ok"), delay);
      const onAbort = () => {
        clearTimeout(timer);
        resolve("aborted");
      };
      if (opts.signal?.aborted) {
        clearTimeout(timer);
        resolve("aborted");
        return;
      }
      opts.signal?.addEventListener("abort", onAbort, { once: true });
    });
  };

  if (opts.behavior === "timeout") {
    await new Promise((r) => setTimeout(r, opts.delayMs ?? 50));
    return {
      ok: false,
      exitCode: null,
      signal: "SIGTERM",
      timedOut: true,
      stopRequested: false,
      cursorAvailable: true,
      realCursorProcessInvoked: false,
      durationMs: Date.now() - started,
      stdout: "",
      stderr: "fake port timed out",
      errorCode: "TIMED_OUT",
    };
  }

  if (opts.behavior === "stoppable-slow") {
    const outcome = await waitOrAbort();
    if (outcome === "aborted") {
      return {
        ok: false,
        exitCode: null,
        signal: "SIGTERM",
        timedOut: false,
        stopRequested: true,
        cursorAvailable: true,
        realCursorProcessInvoked: false,
        durationMs: Date.now() - started,
        stdout: "",
        stderr: "fake port stopped",
        errorCode: "STOPPED",
      };
    }
  } else if (delay > 0) {
    const outcome = await waitOrAbort();
    if (outcome === "aborted") {
      return {
        ok: false,
        exitCode: null,
        signal: "SIGTERM",
        timedOut: false,
        stopRequested: true,
        cursorAvailable: true,
        realCursorProcessInvoked: false,
        durationMs: Date.now() - started,
        stdout: "",
        stderr: "fake port stopped",
        errorCode: "STOPPED",
      };
    }
  }

  mkdirSync(opts.sandboxAbs, { recursive: true });

  if (opts.behavior === "write-outside") {
    const outside = path.resolve(opts.sandboxAbs, "..", "ESCAPE_PROBE.md");
    writeFileSync(outside, "escape", "utf8");
    return {
      ok: false,
      exitCode: 0,
      signal: null,
      timedOut: false,
      stopRequested: false,
      cursorAvailable: true,
      realCursorProcessInvoked: false,
      durationMs: Date.now() - started,
      stdout: "wrote outside",
      stderr: "",
      errorCode: "POLICY_VIOLATION",
    };
  }

  if (opts.behavior === "success-no-file") {
    return {
      ok: false,
      exitCode: 0,
      signal: null,
      timedOut: false,
      stopRequested: false,
      cursorAvailable: true,
      realCursorProcessInvoked: false,
      durationMs: Date.now() - started,
      stdout: "claimed success without file",
      stderr: "",
      errorCode: "REPORT_INCOMPLETE",
    };
  }

  if (opts.behavior === "exit-nonzero") {
    return {
      ok: false,
      exitCode: 2,
      signal: null,
      timedOut: false,
      stopRequested: false,
      cursorAvailable: true,
      realCursorProcessInvoked: false,
      durationMs: Date.now() - started,
      stdout: "",
      stderr: "fake exit 2",
      errorCode: "FAILED_EXIT_CODE",
    };
  }

  // success
  const out = path.join(opts.sandboxAbs, INC_D_OUTPUT_REL);
  writeFileSync(out, opts.markdownContent, "utf8");
  return {
    ok: true,
    exitCode: 0,
    signal: null,
    timedOut: false,
    stopRequested: false,
    cursorAvailable: true,
    realCursorProcessInvoked: false,
    durationMs: Date.now() - started,
    stdout: `wrote ${INC_D_OUTPUT_REL}`,
    stderr: "",
  };
}

export function cleanupFakeOutsideProbe(sandboxAbs: string): void {
  const outside = path.resolve(sandboxAbs, "..", "ESCAPE_PROBE.md");
  if (existsSync(outside)) unlinkSync(outside);
}
