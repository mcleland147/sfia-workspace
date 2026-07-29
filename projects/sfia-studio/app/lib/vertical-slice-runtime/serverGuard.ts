/**
 * Lightweight server-only guard without adding a package.json dependency.
 * Next client bundles that import this module will fail at runtime if evaluated
 * in a browser context; Vitest boundary tests also forbid UI/client imports.
 */
export function assertServerOnly(moduleName = "vertical-slice-runtime"): void {
  if (typeof window !== "undefined") {
    throw new Error(
      `${moduleName} is server-only and must not run in a browser context.`,
    );
  }
}

assertServerOnly();
