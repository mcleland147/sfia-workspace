/**
 * R1 — product live REAL boundary composition, OFF-by-default.
 *
 * When SFIA_STUDIO_CURSOR_REAL !== "1", returns undefined and constructs
 * nothing (no safety DB, no worktree dir, no Cursor bin search, no git, no process)
 * unless the fail-closed TEST/E2E deterministic Cursor boundary is enabled.
 *
 * The deterministic path substitutes only the external Cursor/process adapter.
 * It does not construct NodeCursorProcessRunner, worktrees, or safety sqlite.
 *
 * When the REAL flag is "1", constructs existing M4 classes only. Construction
 * does not launch a process, search the Cursor binary, or run git.
 * Launch remains gated by HumanDecision → Contract → Confirmation →
 * agent selection → Gate D → StartExecution.
 */
import fs from "node:fs";
import path from "node:path";
import {
  isStudioCursorRealEnabled,
  NodeCursorProcessRunner,
  NodeGitCommandRunner,
  SqliteRealLaunchSafetyJournal,
  StudioCursorRealLaunchGateway,
  StudioGitWorktreeWorkspace,
  type GitCommandRunner,
  type ProcessRunner,
  type RealBoundaryWiring,
  type RealExecutionLaunchPort,
  type RealExecutionWorkspacePort,
  type RealLaunchSafetyJournalPort,
} from "@/lib/oa/execution-attempt";
import {
  assertDeterministicAndRealMutuallyExclusive,
  composeDeterministicCursorBoundary,
  isDeterministicCursorBoundaryEnabled,
} from "./deterministicExternalLaunchBoundary";

export type ComposeStudioProductRealBoundaryInput = {
  readonly env?: NodeJS.ProcessEnv;
  readonly processRunner?: ProcessRunner;
  readonly workspacePort?: RealExecutionWorkspacePort;
  readonly gitRunner?: GitCommandRunner;
  readonly safetyJournal?: RealLaunchSafetyJournalPort;
  readonly resolveCursorBin?: () => string | null;
  readonly repoRoot?: string;
  readonly studioRoot?: string;
  readonly execRoot?: string;
  readonly safetyJournalPath?: string;
};

export function resolveStudioSfiaExecRoot(studioRoot?: string): string {
  const root = path.resolve(studioRoot ?? path.resolve(process.cwd(), ".."));
  return path.join(root, ".sfia-exec");
}

/**
 * Filesystem-only git toplevel discovery. Does not spawn git.
 */
export function findGitToplevelByDotGit(startDir: string): string | null {
  let dir = path.resolve(startDir);
  for (;;) {
    if (fs.existsSync(path.join(dir, ".git"))) return dir;
    const parent = path.dirname(dir);
    if (parent === dir) return null;
    dir = parent;
  }
}

export function composeStudioProductRealBoundary(
  input: ComposeStudioProductRealBoundaryInput = {},
): RealBoundaryWiring | undefined {
  const env = input.env ?? process.env;
  assertDeterministicAndRealMutuallyExclusive(env);
  if (isDeterministicCursorBoundaryEnabled(env)) {
    return composeDeterministicCursorBoundary(env);
  }
  if (!isStudioCursorRealEnabled(env)) {
    return undefined;
  }

  const studioRoot = path.resolve(
    input.studioRoot ?? path.resolve(process.cwd(), ".."),
  );
  const execBase = resolveStudioSfiaExecRoot(studioRoot);
  const execRoot = path.resolve(
    input.execRoot ?? path.join(execBase, "m4-worktrees"),
  );
  const safetyJournalPath = path.resolve(
    input.safetyJournalPath ??
      path.join(execBase, "m4", "launch-safety.sqlite"),
  );
  const repoRoot = path.resolve(
    input.repoRoot ??
      findGitToplevelByDotGit(process.cwd()) ??
      path.resolve(process.cwd(), "../.."),
  );

  const processRunner = input.processRunner ?? new NodeCursorProcessRunner();
  const gitRunner = input.gitRunner ?? new NodeGitCommandRunner();
  const workspacePort =
    input.workspacePort ??
    new StudioGitWorktreeWorkspace({
      repoRoot,
      execRoot,
      gitRunner,
    });
  const safetyJournal =
    input.safetyJournal ??
    (() => {
      fs.mkdirSync(path.dirname(safetyJournalPath), { recursive: true });
      return new SqliteRealLaunchSafetyJournal({
        databasePath: safetyJournalPath,
      });
    })();
  const launchPort: RealExecutionLaunchPort =
    new StudioCursorRealLaunchGateway({
      processRunner,
      workspacePort,
      env,
      resolveCursorBin: input.resolveCursorBin,
    });

  return Object.freeze({
    launchPort,
    safetyJournal,
  });
}
