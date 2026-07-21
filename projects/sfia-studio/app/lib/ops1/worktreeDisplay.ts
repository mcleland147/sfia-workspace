/**
 * Client-safe worktree path truncation for UI / report display.
 * Keep free of node:sqlite / fs imports.
 */
export function formatOps1WorktreeRef(abs: string | null): string | null {
  if (!abs) return null;
  const idx = abs.indexOf(".sfia-exec/");
  if (idx >= 0) return abs.slice(idx);
  const parts = abs.split("/");
  const i = parts.findIndex((p) => p.startsWith("ops1-xatt-"));
  if (i >= 0) return parts.slice(Math.max(0, i - 2)).join("/");
  return "[worktree-local]";
}
