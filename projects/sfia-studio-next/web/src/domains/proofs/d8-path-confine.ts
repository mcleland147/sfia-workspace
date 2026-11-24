/**
 * C13 — physical workspace confinement for D8 file reads.
 * Lexical relative-path checks are insufficient: symlinks must not escape.
 */

import {
  closeSync,
  constants as fsConstants,
  fstatSync,
  lstatSync,
  openSync,
  readFileSync,
  realpathSync,
} from "node:fs";
import { join, normalize, relative, resolve, sep } from "node:path";

export const D8_MAX_FILE_BYTES = 256_000;

export type ConfineDenyReason =
  | "UNSAFE_RELATIVE_PATH"
  | "PATH_OUTSIDE_WORKSPACE"
  | "SYMLINK_ESCAPE"
  | "SYMLINK_COMPONENT"
  | "NOT_REGULAR_FILE"
  | "FILE_ABSENT"
  | "FILE_TOO_LARGE"
  | "ROOT_UNRESOLVABLE"
  | "OPEN_FAILED";

export type ConfineResult =
  | {
      ok: true;
      absolutePath: string;
      realPath: string;
      byteLength: number;
      bytes: Buffer;
    }
  | {
      ok: false;
      reason: ConfineDenyReason;
      detail?: string;
    };

function isInsideRoot(rootReal: string, candidateReal: string): boolean {
  if (candidateReal === rootReal) return true;
  const prefix = rootReal.endsWith(sep) ? rootReal : rootReal + sep;
  return candidateReal.startsWith(prefix);
}

/**
 * Resolve and open a relative path under workspaceRoot with symlink confinement.
 * Uses lstat on each path component + final open(O_NOFOLLOW) when available.
 */
export function readConfinedWorkspaceFile(
  workspaceRoot: string,
  relativePath: string,
  opts?: { maxBytes?: number },
): ConfineResult {
  const maxBytes = opts?.maxBytes ?? D8_MAX_FILE_BYTES;
  const rel = (relativePath || "").trim().replace(/^\/+/, "");
  if (
    !rel ||
    rel.includes("\0") ||
    rel.includes("..") ||
    rel.startsWith("~") ||
    rel.startsWith("/") ||
    normalize(rel) !== rel
  ) {
    return { ok: false, reason: "UNSAFE_RELATIVE_PATH" };
  }

  let rootReal: string;
  try {
    rootReal = realpathSync(resolve(workspaceRoot));
  } catch {
    return { ok: false, reason: "ROOT_UNRESOLVABLE" };
  }

  // Walk components: refuse any symlink component (intermediate or final via lstat).
  const parts = rel.split(/[/\\]+/).filter(Boolean);
  let cursor = rootReal;
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i]!;
    if (part === "." || part === "..") {
      return { ok: false, reason: "UNSAFE_RELATIVE_PATH" };
    }
    const next = join(cursor, part);
    let lst;
    try {
      lst = lstatSync(next);
    } catch {
      return { ok: false, reason: "FILE_ABSENT", detail: rel };
    }
    if (lst.isSymbolicLink()) {
      // Resolve link target and require it stays inside rootReal.
      let targetReal: string;
      try {
        targetReal = realpathSync(next);
      } catch {
        return { ok: false, reason: "SYMLINK_ESCAPE", detail: "unresolvable symlink" };
      }
      if (!isInsideRoot(rootReal, targetReal)) {
        return { ok: false, reason: "SYMLINK_ESCAPE", detail: part };
      }
      // Intermediate symlink into root: follow for continuation but record refusal
      // of opaque escapes. Policy C13: refuse ALL symlinks for D8 Nora reads
      // (simpler, fail-closed) — no symlink components allowed.
      return { ok: false, reason: "SYMLINK_COMPONENT", detail: part };
    }
    if (i < parts.length - 1) {
      if (!lst.isDirectory()) {
        return { ok: false, reason: "NOT_REGULAR_FILE", detail: "non-directory component" };
      }
      cursor = next;
    } else {
      if (!lst.isFile()) {
        return { ok: false, reason: "NOT_REGULAR_FILE" };
      }
      if (lst.size > maxBytes) {
        return {
          ok: false,
          reason: "FILE_TOO_LARGE",
          detail: `size=${lst.size} max=${maxBytes}`,
        };
      }
      cursor = next;
    }
  }

  // Lexical candidate must still resolve under root (defense in depth).
  const lexical = resolve(join(rootReal, rel));
  const relCheck = relative(rootReal, lexical);
  if (relCheck.startsWith("..") || relCheck === "") {
    return { ok: false, reason: "PATH_OUTSIDE_WORKSPACE" };
  }

  let fd: number | null = null;
  try {
    const flags =
      typeof fsConstants.O_NOFOLLOW === "number"
        ? fsConstants.O_RDONLY | fsConstants.O_NOFOLLOW
        : fsConstants.O_RDONLY;
    fd = openSync(cursor, flags);
    const st = fstatSync(fd);
    if (!st.isFile()) {
      return { ok: false, reason: "NOT_REGULAR_FILE" };
    }
    if (st.size > maxBytes) {
      return {
        ok: false,
        reason: "FILE_TOO_LARGE",
        detail: `size=${st.size} max=${maxBytes}`,
      };
    }
    // Read via path after open succeeded — fd already proves no symlink at open time
    // when O_NOFOLLOW is set. Size bounded above.
    const bytes = readFileSync(fd);
    let realPath: string;
    try {
      realPath = realpathSync(cursor);
    } catch {
      realPath = cursor;
    }
    if (!isInsideRoot(rootReal, realPath)) {
      return { ok: false, reason: "SYMLINK_ESCAPE", detail: "realpath escaped after open" };
    }
    return {
      ok: true,
      absolutePath: cursor,
      realPath,
      byteLength: bytes.length,
      bytes,
    };
  } catch (e) {
    return {
      ok: false,
      reason: "OPEN_FAILED",
      detail: String((e as Error)?.message ?? e).slice(0, 120),
    };
  } finally {
    if (fd != null) {
      try {
        closeSync(fd);
      } catch {
        /* ignore */
      }
    }
  }
}

/** Test helper — does not read content. */
export function probeConfinedPath(
  workspaceRoot: string,
  relativePath: string,
): { ok: boolean; reason?: ConfineDenyReason } {
  const r = readConfinedWorkspaceFile(workspaceRoot, relativePath, { maxBytes: 1 });
  if (r.ok) return { ok: true };
  // FILE_TOO_LARGE still means path was confined and existed as regular file
  if (r.reason === "FILE_TOO_LARGE") return { ok: true };
  return { ok: false, reason: r.reason };
}
