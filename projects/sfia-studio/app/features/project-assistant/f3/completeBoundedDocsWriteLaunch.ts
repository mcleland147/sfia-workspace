/**
 * CR-GCEC-04 / D-GCEC-11 / CR-GCEC-14 — complete bounded docs-write launch.
 * Awaits observation, independently verifies workspace file effects (no stdout trust).
 */
import {
  type ExecutionAttempt,
  type ExecutionAttemptServices,
  type RealProcessObservation,
  parseCursorExecutionReport,
  type CursorExecutionReport,
  verifyWorkspaceFileEffects,
} from "@/lib/oa/execution-attempt";
import {
  NodeLocalGitStatusDiffPort,
  type LocalGitStatusDiffPort,
} from "@/lib/oa/git-ports";
import {
  completeBoundedReadOnlyLaunch,
  type CompleteBoundedReadOnlyLaunchResult,
} from "./completeBoundedReadOnlyLaunch";

export type DocsWriteCompletionFacts = {
  attemptId: string;
  processRef: string;
  targetPath: string;
  digest: string;
  touchedFiles: string[];
  worktreeRef: string | null;
  stdout: string;
  /** Cursor claim report when present — never trusted alone. */
  cursorReport?: CursorExecutionReport;
};

export type CompleteBoundedDocsWriteLaunchResult =
  | {
      ok: true;
      status: "succeeded";
      attempt: ExecutionAttempt;
      observation: RealProcessObservation;
      facts: DocsWriteCompletionFacts;
    }
  | Extract<
      CompleteBoundedReadOnlyLaunchResult,
      { ok: true; status: "running" | "failed" | "timeout" } | { ok: false }
    >;

function tryParseReportFromStdout(stdout: string): CursorExecutionReport | null {
  const marker = "CURSOR_EXECUTION_REPORT_JSON=";
  const idx = stdout.indexOf(marker);
  if (idx < 0) return null;
  const json = stdout.slice(idx + marker.length).trim().split("\n")[0] ?? "";
  try {
    const parsed = parseCursorExecutionReport(JSON.parse(json));
    return parsed.ok ? parsed.report : null;
  } catch {
    return null;
  }
}

export async function completeBoundedDocsWriteLaunch(input: {
  attempt: ExecutionAttempt;
  services: ExecutionAttemptServices;
  /** Expected relative target path (from docsWriteSpec / EC.inputs). */
  targetPath?: string;
  pathAllowlist?: readonly string[];
  /** Independent full-worktree status/diff (CR-GCEC-14). */
  statusDiffPort?: LocalGitStatusDiffPort;
  /** Test-only injectable porcelain when git unavailable. */
  nameStatusText?: string;
  /** See completeBoundedReadOnlyLaunch.awaitIfPending. */
  awaitIfPending?: boolean;
}): Promise<CompleteBoundedDocsWriteLaunchResult> {
  const base = await completeBoundedReadOnlyLaunch({
    attempt: input.attempt,
    services: input.services,
    awaitIfPending: input.awaitIfPending,
  });
  if (!base.ok) return base;
  if (base.status !== "succeeded") {
    return base as CompleteBoundedDocsWriteLaunchResult;
  }

  const stdout = base.observation.stdout ?? "";
  const cursorReport = tryParseReportFromStdout(stdout);
  const targetPath =
    input.targetPath?.trim() ||
    cursorReport?.fileEffects?.created[0] ||
    cursorReport?.fileEffects?.modified[0] ||
    "docs/functional-design.md";
  const worktreeRef = base.observation.worktreeRef ?? null;
  const pathAllowlist =
    input.pathAllowlist ??
    (targetPath.startsWith("docs/") ? ["docs/"] : [targetPath]);

  if (!worktreeRef) {
    return {
      ok: false,
      code: "DOCS_WRITE_WORKTREE_MISSING",
      message: "Docs-write completion missing worktree for independent verify.",
    };
  }

  const statusDiffPort =
    input.statusDiffPort ??
    (input.nameStatusText ? undefined : new NodeLocalGitStatusDiffPort());

  const verified = await verifyWorkspaceFileEffects({
    worktreePath: worktreeRef,
    pathAllowlist,
    targetPath,
    report: cursorReport,
    ...(statusDiffPort ? { statusDiffPort } : {}),
    ...(input.nameStatusText ? { nameStatusText: input.nameStatusText } : {}),
  });

  if (!verified.ok) {
    return {
      ok: false,
      code: "DOCS_WRITE_WORKSPACE_VERIFY_FAILED",
      message: verified.reason,
    };
  }

  return {
    ok: true,
    status: "succeeded",
    attempt: base.attempt,
    observation: base.observation,
    facts: {
      attemptId: input.attempt.attemptId,
      processRef: base.observation.processRef,
      targetPath: verified.targetPath,
      digest: verified.digest,
      touchedFiles: verified.touchedFiles,
      worktreeRef,
      stdout: base.facts?.stdout ?? stdout,
      ...(cursorReport ? { cursorReport } : {}),
    },
  };
}
