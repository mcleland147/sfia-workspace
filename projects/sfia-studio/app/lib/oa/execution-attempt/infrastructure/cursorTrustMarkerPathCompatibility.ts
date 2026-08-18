/**
 * Defensive Cursor `--trust` marker path compatibility.
 *
 * Derived from observed Darwin ENAMETOOLONG on
 * `mkdir ~/.cursor/projects/<flattened-workspace-identity>` (pid 19887).
 * Not a public Cursor API contract.
 *
 * Observed flatten (ASCII case): strip leading separators, drop `.`,
 * map `_` → `-`, map `/` → `-`. Compatibility uses UTF-8 BYTE length
 * of that single derived component against Darwin NAME_MAX (255).
 */
export const CURSOR_TRUST_MARKER_NAME_MAX_BYTES = 255;

export const CURSOR_TRUST_MARKER_PATH_TOO_LONG_REASON =
  "REAL_WORKSPACE_INVALID:cursor_trust_marker_path_too_long";

export function cursorTrustMarkerProjectComponent(
  workspaceAbsPath: string,
): string {
  const posix = workspaceAbsPath.replace(/\\/g, "/").replace(/^\/+/, "");
  return posix.replaceAll(".", "").replaceAll("_", "-").replaceAll("/", "-");
}

export function cursorTrustMarkerProjectComponentByteLength(
  workspaceAbsPath: string,
): number {
  return Buffer.byteLength(
    cursorTrustMarkerProjectComponent(workspaceAbsPath),
    "utf8",
  );
}

export function isCursorTrustMarkerPathCompatible(
  workspaceAbsPath: string,
): boolean {
  return (
    cursorTrustMarkerProjectComponentByteLength(workspaceAbsPath) <=
    CURSOR_TRUST_MARKER_NAME_MAX_BYTES
  );
}

export function assertCursorTrustMarkerPathCompatible(
  workspaceAbsPath: string,
): void {
  if (!isCursorTrustMarkerPathCompatible(workspaceAbsPath)) {
    throw new Error(CURSOR_TRUST_MARKER_PATH_TOO_LONG_REASON);
  }
}
