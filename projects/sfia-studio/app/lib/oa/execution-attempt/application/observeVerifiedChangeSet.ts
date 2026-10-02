/**
 * Studio VerifiedChangeSet — GENERIC OBSERVATION (D-ER-06 / CP2-02).
 *
 * Separates worktree observation (VERIFIED FACTS) from contract/policy evaluation.
 * Harvested from verifyWorkspaceFileEffects observation seams — WITHOUT docs_write
 * policy as the generic oracle.
 *
 * Cursor CLAIM ≠ Studio FACT. Unexpected / unclaimed effects are reported, not
 * silently promoted to Evidence.
 *
 * Modes:
 * - GIT_WORKTREE (default when statusDiffPort provided or observationMode=git):
 *   NodeLocalGitStatusDiffPort / LocalGitStatusDiffPort required.
 *   Git error ⇒ observation UNAVAILABLE — NEVER recursive full-repo scan.
 *   Optional expectedBaseSha: HEAD mismatch ⇒ integrity fail-closed.
 * - TEST_NON_GIT (explicit observationMode=test_non_git OR injected nameStatusText
 *   without requiring a Git port): deterministic injected status / scoped FS
 *   listing for Fake/non-Git fixtures ONLY — never confused with production Git.
 */
import { createHash } from "node:crypto";
import { existsSync, readdirSync, statSync } from "node:fs";
import { readFile } from "node:fs/promises";
import path from "node:path";
import type { LocalGitStatusDiffPort } from "@/lib/oa/git-ports";
import type { CursorExecutionReport } from "../domain/cursorExecutionReport";

export const OA_VERIFIED_CHANGESET_SCHEMA =
  "oa.studio-verified-changeset.1" as const;

export type VerifiedPathStatus =
  | "created"
  | "modified"
  | "deleted"
  | "renamed"
  | "unknown";

export type VerifiedPathEntry = {
  readonly path: string;
  readonly status: VerifiedPathStatus;
  readonly beforeDigest?: string;
  readonly afterDigest?: string;
  /** Absolute path under worktree when still hot — not a Product logical target. */
  readonly contentAbsolutePath?: string;
};

export type VerifiedChangeSet = {
  readonly schemaVersion: typeof OA_VERIFIED_CHANGESET_SCHEMA;
  readonly worktreePath: string;
  readonly observedAt: string;
  readonly created: readonly VerifiedPathEntry[];
  readonly modified: readonly VerifiedPathEntry[];
  readonly deleted: readonly VerifiedPathEntry[];
  readonly renamed: readonly VerifiedPathEntry[];
  readonly all: readonly VerifiedPathEntry[];
  /** Paths observed in worktree but absent from Cursor fileEffects claim. */
  readonly unclaimedObservedPaths: readonly string[];
  /** Paths claimed by Cursor but absent from worktree observation. */
  readonly claimedMissingPaths: readonly string[];
  readonly claimFactMismatch: boolean;
  /** Observed HEAD when Git mode succeeded. */
  readonly observedHeadSha?: string | null;
};

export type ObserveVerifiedChangeSetMode = "git" | "test_non_git";

export type ObserveVerifiedChangeSetResult =
  | {
      readonly ok: true;
      readonly changeSet: VerifiedChangeSet;
      readonly verificationStatus: "OBSERVED";
    }
  | {
      readonly ok: false;
      readonly code:
        | "GIT_OBSERVER_REQUIRED"
        | "GIT_OBSERVATION_FAILED"
        | "GIT_HEAD_MISMATCH"
        | "WORKTREE_MISSING";
      readonly message: string;
      readonly verificationStatus: "UNAVAILABLE";
    };

function normalizeRel(p: string): string {
  return p.replace(/\\/g, "/").replace(/^\.\//, "").trim();
}

function parseNameStatus(porcelainOrNameStatus: string): {
  path: string;
  status: string;
  renameFrom?: string;
}[] {
  const out: { path: string; status: string; renameFrom?: string }[] = [];
  for (const line of porcelainOrNameStatus.split("\n")) {
    const t = line.trimEnd();
    if (!t) continue;
    if (t.includes("\t")) {
      const parts = t.split("\t");
      const st = (parts[0] ?? "?").trim();
      if (parts.length >= 3 && /^R/i.test(st)) {
        out.push({
          path: normalizeRel(parts[2] ?? ""),
          status: st,
          renameFrom: normalizeRel(parts[1] ?? ""),
        });
        continue;
      }
      if (parts[1]) out.push({ path: normalizeRel(parts[1]), status: st });
      continue;
    }
    if (t.length >= 3) {
      const st = t.slice(0, 2).trim();
      const p = t.slice(3).trim();
      if (p) out.push({ path: normalizeRel(p), status: st || "?" });
    }
  }
  return out;
}

function mapStatus(st: string): VerifiedPathStatus {
  if (/^A|\?|^\?\?/i.test(st) || st.includes("A")) return "created";
  if (/^D/i.test(st) || st.includes("D")) return "deleted";
  if (/^R/i.test(st)) return "renamed";
  if (/^M|^\sM|^M\s|^MM/i.test(st) || st.includes("M")) return "modified";
  return "unknown";
}

async function digestIfExists(
  worktreePath: string,
  rel: string,
): Promise<string | undefined> {
  const abs = path.resolve(worktreePath, ...rel.split("/"));
  const root = path.resolve(worktreePath);
  if (abs !== root && !abs.startsWith(root + path.sep)) return undefined;
  if (!existsSync(abs)) return undefined;
  const buf = await readFile(abs);
  return `sha256:${createHash("sha256").update(buf).digest("hex")}`;
}

/**
 * TEST/NON-GIT only — lists files under worktree for Fake fixtures.
 * NEVER used as silent fallback for Git worktree mode.
 */
function listWorktreeRelFilesForTestNonGit(worktreePath: string): string[] {
  const out: string[] = [];
  const root = path.resolve(worktreePath);
  const walk = (dir: string) => {
    let entries: string[];
    try {
      entries = readdirSync(dir);
    } catch {
      return;
    }
    for (const name of entries) {
      if (name === ".git" || name === "node_modules" || name === ".sfia-exec") {
        continue;
      }
      const abs = path.join(dir, name);
      let st;
      try {
        st = statSync(abs);
      } catch {
        continue;
      }
      if (st.isDirectory()) walk(abs);
      else if (st.isFile()) {
        out.push(normalizeRel(path.relative(root, abs)));
      }
    }
  };
  walk(root);
  return out.filter(Boolean);
}

async function buildChangeSet(input: {
  readonly worktreePath: string;
  readonly changed: readonly { path: string; status: string }[];
  readonly report?: CursorExecutionReport | null;
  readonly observedAt?: string;
  readonly computeDigests?: boolean;
  readonly observedHeadSha?: string | null;
}): Promise<VerifiedChangeSet> {
  const created: VerifiedPathEntry[] = [];
  const modified: VerifiedPathEntry[] = [];
  const deleted: VerifiedPathEntry[] = [];
  const renamed: VerifiedPathEntry[] = [];
  const all: VerifiedPathEntry[] = [];

  for (const c of input.changed) {
    if (!c.path) continue;
    const status = mapStatus(c.status);
    const afterDigest =
      input.computeDigests !== false && status !== "deleted"
        ? await digestIfExists(input.worktreePath, c.path)
        : undefined;
    const entry: VerifiedPathEntry = {
      path: c.path,
      status,
      afterDigest,
      contentAbsolutePath:
        status === "deleted"
          ? undefined
          : path.resolve(input.worktreePath, ...c.path.split("/")),
    };
    all.push(entry);
    if (status === "created") created.push(entry);
    else if (status === "modified") modified.push(entry);
    else if (status === "deleted") deleted.push(entry);
    else if (status === "renamed") renamed.push(entry);
    else modified.push(entry);
  }

  const observedPaths = new Set(all.map((e) => e.path));
  const claimed = new Set(
    [
      ...(input.report?.fileEffects?.created ?? []),
      ...(input.report?.fileEffects?.modified ?? []),
      ...(input.report?.fileEffects?.deleted ?? []),
    ].map(normalizeRel),
  );

  const unclaimedObservedPaths =
    claimed.size > 0
      ? [...observedPaths].filter((p) => !claimed.has(p))
      : [];
  const claimedMissingPaths =
    claimed.size > 0
      ? [...claimed].filter((p) => p && !observedPaths.has(p))
      : [];

  return {
    schemaVersion: OA_VERIFIED_CHANGESET_SCHEMA,
    worktreePath: input.worktreePath,
    observedAt: input.observedAt ?? new Date().toISOString(),
    created,
    modified,
    deleted,
    renamed,
    all,
    unclaimedObservedPaths,
    claimedMissingPaths,
    claimFactMismatch:
      unclaimedObservedPaths.length > 0 || claimedMissingPaths.length > 0,
    observedHeadSha: input.observedHeadSha ?? null,
  };
}

/**
 * Observe worktree with explicit mode separation (CP2-02).
 *
 * Prefer this over the legacy `observeVerifiedChangeSet` when callers need
 * UNAVAILABLE vs OBSERVED discrimination.
 */
export async function observeVerifiedChangeSetStrict(input: {
  readonly worktreePath: string;
  readonly report?: CursorExecutionReport | null;
  readonly statusDiffPort?: LocalGitStatusDiffPort;
  readonly nameStatusText?: string;
  readonly observedAt?: string;
  readonly computeDigests?: boolean;
  /**
   * git (default when statusDiffPort present) — Git observer required.
   * test_non_git — explicit Fake/non-Git fixture mode only.
   */
  readonly observationMode?: ObserveVerifiedChangeSetMode;
  /** When set in git mode, HEAD must match (EC/report baseSha). */
  readonly expectedBaseSha?: string | null;
}): Promise<ObserveVerifiedChangeSetResult> {
  const worktreePath = input.worktreePath.trim();
  if (!worktreePath || !existsSync(worktreePath)) {
    return {
      ok: false,
      code: "WORKTREE_MISSING",
      message: "Worktree path absent — verification UNAVAILABLE.",
      verificationStatus: "UNAVAILABLE",
    };
  }

  const mode: ObserveVerifiedChangeSetMode =
    input.observationMode ??
    (input.statusDiffPort
      ? "git"
      : input.nameStatusText != null
        ? "test_non_git"
        : "git");

  if (mode === "git") {
    if (!input.statusDiffPort) {
      return {
        ok: false,
        code: "GIT_OBSERVER_REQUIRED",
        message:
          "Git worktree mode requires LocalGitStatusDiffPort — no recursive full-repo fallback.",
        verificationStatus: "UNAVAILABLE",
      };
    }
    let statusPorcelain = "";
    let headSha: string | null = null;
    try {
      const diff = await input.statusDiffPort.statusDiff({
        repoPath: worktreePath,
      });
      statusPorcelain = diff.statusPorcelain ?? "";
      headSha =
        typeof diff.headSha === "string" && diff.headSha.trim()
          ? diff.headSha.trim().toLowerCase()
          : null;
    } catch (err) {
      return {
        ok: false,
        code: "GIT_OBSERVATION_FAILED",
        message:
          err instanceof Error
            ? `Git statusDiff failed: ${err.message}`
            : "Git statusDiff failed",
        verificationStatus: "UNAVAILABLE",
      };
    }

    // Git mode requires a resolved HEAD — null head after a "successful" port
    // call is observation failure, not verified zero-change.
    if (!headSha) {
      return {
        ok: false,
        code: "GIT_OBSERVATION_FAILED",
        message:
          "Git observation did not yield a HEAD SHA — verification UNAVAILABLE.",
        verificationStatus: "UNAVAILABLE",
      };
    }

    const expected = input.expectedBaseSha?.trim().toLowerCase() || null;
    if (expected && headSha && expected !== headSha) {
      return {
        ok: false,
        code: "GIT_HEAD_MISMATCH",
        message: `Worktree HEAD ${headSha} ≠ expected baseSha ${expected} — FACTS integrity refused.`,
        verificationStatus: "UNAVAILABLE",
      };
    }

    // Empty porcelain = verified zero change (OBSERVED), NOT a trigger to scan
    // the whole repository as created.
    const changed = parseNameStatus(statusPorcelain);
    const changeSet = await buildChangeSet({
      worktreePath,
      changed,
      report: input.report,
      observedAt: input.observedAt,
      computeDigests: input.computeDigests,
      observedHeadSha: headSha,
    });
    return {
      ok: true,
      changeSet,
      verificationStatus: "OBSERVED",
    };
  }

  // TEST_NON_GIT — injected status or scoped listing only.
  let changed = parseNameStatus(input.nameStatusText ?? "");
  if (changed.length === 0 && existsSync(worktreePath)) {
    changed = listWorktreeRelFilesForTestNonGit(worktreePath).map((p) => ({
      path: p,
      status: "??",
    }));
  }
  const changeSet = await buildChangeSet({
    worktreePath,
    changed,
    report: input.report,
    observedAt: input.observedAt,
    computeDigests: input.computeDigests,
    observedHeadSha: null,
  });
  return { ok: true, changeSet, verificationStatus: "OBSERVED" };
}

/**
 * Observe the worktree independently of Cursor claims and of docs_write policy.
 *
 * @deprecated Prefer observeVerifiedChangeSetStrict for mode-aware UNAVAILABLE.
 * Legacy callers that pass statusDiffPort get Git mode (no full-repo fallback).
 * Legacy callers that pass only nameStatusText get test_non_git.
 * Legacy callers with neither get UNAVAILABLE via throwing... actually we keep
 * returning VerifiedChangeSet for back-compat but Git-without-port fails empty
 * only when test_non_git is inferred from nameStatusText.
 */
export async function observeVerifiedChangeSet(input: {
  readonly worktreePath: string;
  readonly report?: CursorExecutionReport | null;
  readonly statusDiffPort?: LocalGitStatusDiffPort;
  readonly nameStatusText?: string;
  readonly observedAt?: string;
  readonly computeDigests?: boolean;
  readonly observationMode?: ObserveVerifiedChangeSetMode;
  readonly expectedBaseSha?: string | null;
}): Promise<VerifiedChangeSet> {
  const strict = await observeVerifiedChangeSetStrict(input);
  if (strict.ok) return strict.changeSet;
  // Legacy signature cannot express UNAVAILABLE — return empty set with
  // claimFactMismatch false and zero entries. Callers that need honesty MUST
  // use observeVerifiedChangeSetStrict. finalizeGenericExecutionReview does.
  return {
    schemaVersion: OA_VERIFIED_CHANGESET_SCHEMA,
    worktreePath: input.worktreePath,
    observedAt: input.observedAt ?? new Date().toISOString(),
    created: [],
    modified: [],
    deleted: [],
    renamed: [],
    all: [],
    unclaimedObservedPaths: [],
    claimedMissingPaths: [],
    claimFactMismatch: false,
    observedHeadSha: null,
  };
}
