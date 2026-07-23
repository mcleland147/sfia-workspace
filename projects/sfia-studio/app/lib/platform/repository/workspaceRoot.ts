import path from "node:path";

/** Resolve repo root from Next.js app cwd (projects/sfia-studio/app). */
export function resolveWorkspaceRootFromAppCwd(
  cwd = process.cwd(),
): string {
  return path.resolve(cwd, "..", "..", "..");
}
