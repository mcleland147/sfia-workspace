/**
 * Lightweight server-only guard without adding a package.json dependency.
 * Mirrors the repository convention used by vertical-slice-runtime without
 * importing that module (D2-D1 facade integration deferred).
 */
export function assertServerOnly(moduleName = "oa/execution-run/server"): void {
  if (typeof window !== "undefined") {
    throw new Error(
      `${moduleName} is server-only and must not run in a browser context.`,
    );
  }
}
