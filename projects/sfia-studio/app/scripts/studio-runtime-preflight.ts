/**
 * CLI preflight for Product local runtime profile.
 * Loads env via Next's canonical @next/env (same as next start / next dev).
 * ZERO Cursor Product REAL. Never prints secret values.
 */
import path from "node:path";
import { loadEnvConfig } from "@next/env";
import {
  runStudioRuntimeProfilePreflight,
  STUDIO_RUNTIME_PROFILE_NOT_READY,
} from "../lib/vertical-slice-runtime/studioRuntimeProfilePreflight";

const appDir = path.resolve(__dirname, "..");
// Same loader Next uses for `next start` / `next dev` — not a parallel config system.
loadEnvConfig(appDir);

const result = runStudioRuntimeProfilePreflight({
  env: process.env,
  requireManagedClonePresent: true,
  assertRealOffConstructsNothing: true,
});

if (!result.ok) {
  console.error(result.message);
  console.error(
    `\nFix: copy projects/sfia-studio/app/.env.example → .env.local and set the Product local profile (server-only). See README Runtime profile.`,
  );
  process.exit(1);
}

console.log("STUDIO RUNTIME PROFILE READY");
console.log(`- repository: ${result.repositoryIdentity} (${result.sections.repository})`);
console.log(`- authority: ${result.sections.authority}`);
console.log(`- managedRoot: ${result.managedRepoRoot}`);
console.log(`- managedClone: ${result.managedClonePath || "(skipped)"}`);
console.log(`- cursorReal: ${result.cursorReal}`);
console.log(`- deterministic⊕REAL: ${result.sections.deterministicRealExclusive}`);
console.log(`- realBoundaryConstructed: ${result.realBoundaryConstructed}`);
void STUDIO_RUNTIME_PROFILE_NOT_READY;
