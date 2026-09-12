/**
 * D-GCEC-CONF-02A — server-owned child env for mutating GCEC Cursor profiles
 * (bounded docs-write Attempt A + bounded local-commit Attempt B).
 *
 * Proves only: Product gateway does not voluntarily inherit known host
 * Git/GitHub/SSH write-auth channels for A+B.
 * Does NOT prove remote-write impossibility (Shell may still discover host tools).
 * Live re-preflight remains required before any REAL claim.
 *
 * HOME / XDG left unchanged — Cursor CLI may need user-scoped auth; residual risk
 * is documented for the Security re-preflight.
 */
import { SFIA_STUDIO_CURSOR_REAL_FLAG } from "../domain/realLaunchSafety";

/** Exact auth / askpass / SSH override keys stripped from mutating child env. */
export const MUTATING_CURSOR_STRIPPED_ENV_KEYS = [
  "SSH_AUTH_SOCK",
  "SSH_AGENT_PID",
  "GH_TOKEN",
  "GITHUB_TOKEN",
  "GH_ENTERPRISE_TOKEN",
  "GITHUB_ENTERPRISE_TOKEN",
  "GIT_ASKPASS",
  "SSH_ASKPASS",
  "SSH_ASKPASS_REQUIRE",
  "GIT_SSH",
  "GIT_SSH_COMMAND",
  "GIT_CONFIG_PARAMETERS",
  "GIT_CONFIG_COUNT",
] as const;

const STRIPPED = new Set<string>(MUTATING_CURSOR_STRIPPED_ENV_KEYS);

function isInheritedGitConfigInjectionKey(key: string): boolean {
  return (
    key === "GIT_CONFIG_PARAMETERS" ||
    key === "GIT_CONFIG_COUNT" ||
    /^GIT_CONFIG_KEY_\d+$/.test(key) ||
    /^GIT_CONFIG_VALUE_\d+$/.test(key)
  );
}

/**
 * Build a fresh child ProcessEnv for mutating Cursor launches.
 * Does not mutate `baseEnv`. Caller cannot opt out.
 */
export function buildMutatingCursorConfinementEnv(
  baseEnv: NodeJS.ProcessEnv,
): NodeJS.ProcessEnv {
  const child: Record<string, string | undefined> = {};
  for (const [key, value] of Object.entries(baseEnv)) {
    if (value === undefined) continue;
    if (STRIPPED.has(key)) continue;
    if (isInheritedGitConfigInjectionKey(key)) continue;
    child[key] = value;
  }

  child[SFIA_STUDIO_CURSOR_REAL_FLAG] = "1";
  child.GIT_TERMINAL_PROMPT = "0";
  child.GCM_INTERACTIVE = "Never";
  // Neutralize host system/global Git config for the child (local Git support).
  child.GIT_CONFIG_NOSYSTEM = "1";
  child.GIT_CONFIG_SYSTEM = "/dev/null";
  child.GIT_CONFIG_GLOBAL = "/dev/null";

  return child as NodeJS.ProcessEnv;
}

export function isMutatingGcecCursorProfile(input: {
  readonly isDocsWrite: boolean;
  readonly isLocalCommitProfile: boolean;
}): boolean {
  return input.isDocsWrite === true || input.isLocalCommitProfile === true;
}
