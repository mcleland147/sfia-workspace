/**
 * D-GCEC-CONF-02A / D-GCEC-EXEC-01 — server-owned child env for mutating GCEC Cursor profiles.
 *
 * Effect-sensitive (CR-02):
 * - local (A docs_write + B local_commit): strip Git/GitHub/SSH write-auth channels
 * - remote_git (C git.push): preserve SSH / askpass channels; still strip GH tokens + GIT_CONFIG injection
 * - remote_github (D/E pr create/merge): preserve GH_/GITHUB_ token keys; still neutralize GIT_CONFIG injection
 *
 * Proves only: Product gateway applies a deterministic env-key presence policy.
 * Does NOT prove AUTH REAL / remote-write impossibility.
 * NEVER copy secret VALUES into specs/Evidence/reports — key presence only.
 */
import { SFIA_STUDIO_CURSOR_REAL_FLAG } from "../domain/realLaunchSafety";

/** Exact auth / askpass / SSH override keys stripped for local (A/B) mutating child env. */
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

/** SSH / askpass channels preserved for remote_git (C). */
export const MUTATING_CURSOR_REMOTE_GIT_PRESERVED_ENV_KEYS = [
  "SSH_AUTH_SOCK",
  "SSH_AGENT_PID",
  "GIT_ASKPASS",
  "SSH_ASKPASS",
  "SSH_ASKPASS_REQUIRE",
  "GIT_SSH",
  "GIT_SSH_COMMAND",
] as const;

/** GitHub token sentinel keys preserved for remote_github (D/E). */
export const MUTATING_CURSOR_REMOTE_GITHUB_PRESERVED_ENV_KEYS = [
  "GH_TOKEN",
  "GITHUB_TOKEN",
  "GH_ENTERPRISE_TOKEN",
  "GITHUB_ENTERPRISE_TOKEN",
] as const;

export type MutatingCursorConfinementEffectClass =
  | "local"
  | "remote_git"
  | "remote_github";

const LOCAL_STRIPPED = new Set<string>(MUTATING_CURSOR_STRIPPED_ENV_KEYS);
const REMOTE_GIT_PRESERVE = new Set<string>(
  MUTATING_CURSOR_REMOTE_GIT_PRESERVED_ENV_KEYS,
);
const REMOTE_GITHUB_PRESERVE = new Set<string>(
  MUTATING_CURSOR_REMOTE_GITHUB_PRESERVED_ENV_KEYS,
);

function isInheritedGitConfigInjectionKey(key: string): boolean {
  return (
    key === "GIT_CONFIG_PARAMETERS" ||
    key === "GIT_CONFIG_COUNT" ||
    /^GIT_CONFIG_KEY_\d+$/.test(key) ||
    /^GIT_CONFIG_VALUE_\d+$/.test(key)
  );
}

function shouldStripKey(
  key: string,
  effectClass: MutatingCursorConfinementEffectClass,
): boolean {
  // Always neutralize GIT_CONFIG_* injection regardless of effect class.
  if (isInheritedGitConfigInjectionKey(key)) return true;

  if (effectClass === "local") {
    return LOCAL_STRIPPED.has(key);
  }
  if (effectClass === "remote_git") {
    if (REMOTE_GIT_PRESERVE.has(key)) return false;
    return LOCAL_STRIPPED.has(key);
  }
  // remote_github
  if (REMOTE_GITHUB_PRESERVE.has(key)) return false;
  return LOCAL_STRIPPED.has(key);
}

/**
 * Build a fresh child ProcessEnv for mutating Cursor launches.
 * Does not mutate `baseEnv`. Caller cannot opt out.
 */
export function buildMutatingCursorConfinementEnv(
  baseEnv: NodeJS.ProcessEnv,
  options?: { readonly effectClass?: MutatingCursorConfinementEffectClass },
): NodeJS.ProcessEnv {
  const effectClass = options?.effectClass ?? "local";
  const child: Record<string, string | undefined> = {};
  for (const [key, value] of Object.entries(baseEnv)) {
    if (value === undefined) continue;
    if (shouldStripKey(key, effectClass)) continue;
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
  readonly isRemotePushProfile?: boolean;
  readonly isPrCreateProfile?: boolean;
  readonly isPrMergeProfile?: boolean;
}): boolean {
  return (
    input.isDocsWrite === true ||
    input.isLocalCommitProfile === true ||
    input.isRemotePushProfile === true ||
    input.isPrCreateProfile === true ||
    input.isPrMergeProfile === true
  );
}

export function resolveMutatingConfinementEffectClass(input: {
  readonly isRemotePushProfile?: boolean;
  readonly isPrCreateProfile?: boolean;
  readonly isPrMergeProfile?: boolean;
}): MutatingCursorConfinementEffectClass {
  if (input.isRemotePushProfile) return "remote_git";
  if (input.isPrCreateProfile || input.isPrMergeProfile) return "remote_github";
  return "local";
}
