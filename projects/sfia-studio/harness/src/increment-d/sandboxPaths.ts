/**
 * Increment D — sandbox path conventions (single Markdown write).
 * Reuses spike allowlist extension rather than a competing sandbox doctrine.
 */

import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
/** Workspace root: harness/src/increment-d → … → sfia-workspace */
export const INC_D_WORKSPACE_ROOT = path.resolve(HERE, "../../../../../");

export const INC_D_SANDBOX_REL = "projects/sfia-studio/.sandbox/increment-d";
export const INC_D_OUTPUT_REL = "output.md";
export const INC_D_TIMEOUT_MS = 30_000;
export const INC_D_LIVE_FLAG = "SFIA_CURSOR_INC_D_LIVE";
export const INC_D_OBSERVE_FLAG = "SFIA_CURSOR_INC_D_OBSERVE";

export function resolveIncDSandboxAbs(workspaceRoot = INC_D_WORKSPACE_ROOT): string {
  return path.resolve(workspaceRoot, INC_D_SANDBOX_REL);
}

export function resolveIncDOutputAbs(workspaceRoot = INC_D_WORKSPACE_ROOT): string {
  return path.join(resolveIncDSandboxAbs(workspaceRoot), INC_D_OUTPUT_REL);
}

export function isIncDSandboxPath(cwd: string): boolean {
  const resolved = path.resolve(cwd);
  const marker = `${path.sep}.sandbox${path.sep}increment-d`;
  return resolved.includes(marker) || resolved.endsWith(`${path.sep}increment-d`);
}
