/**
 * Local OA-exclusive cutover marker (L2-D2 Delivery).
 *
 * Env: SFIA_STUDIO_LOCAL_OA_EXCLUSIVE=1
 * Default: inactive (historical D1 runtime unchanged).
 *
 * When active (future G-ACTIVATION only):
 * - all D1 SQLite opens fail closed before resolve/open/DDL
 * - legacy navigation uses deny/redirect (D4 Option A)
 *
 * Server-only intent. Not a parallel policy engine.
 * Test override: localOaExclusiveMode.test-only.ts (never barrel-exported).
 */

import { D1Error } from "./errors";
import { localOaExclusiveModeOverrideSlot } from "./localOaExclusiveMode.store";

export const LOCAL_OA_EXCLUSIVE_ENV_KEY =
  "SFIA_STUDIO_LOCAL_OA_EXCLUSIVE" as const;

export function isLocalOaExclusiveMode(): boolean {
  const override = localOaExclusiveModeOverrideSlot.current;
  if (override !== null) return override;
  return process.env[LOCAL_OA_EXCLUSIVE_ENV_KEY]?.trim() === "1";
}

/**
 * Fail-closed gate for any D1 persistence open/write path.
 * Must run before resolveD1SqlitePath / DatabaseSync / DDL.
 */
export function assertD1AccessAllowedWhenLocalOaExclusive(): void {
  if (!isLocalOaExclusiveMode()) return;
  throw new D1Error(
    "FORBIDDEN",
    "D1 access blocked: SFIA_STUDIO_LOCAL_OA_EXCLUSIVE is active (OA Product Truth C only).",
  );
}
