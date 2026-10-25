/**
 * D-GCEC-CONF-02A / D-GCEC-EXEC-01 — server-owned child env for mutating Cursor launches.
 *
 * Effect class comes from server-owned authorized effects and sealed launch-profile
 * flags (local commit / remote push / PR create / PR merge). A docs_write taxonomy
 * flag is not an input and cannot turn confinement on or off.
 *
 * Effect-sensitive (CR-02):
 * - local (filesystem create/modify/delete, git.commit, local-commit profile):
 *   strip Git/GitHub/SSH write-auth channels
 * - remote_git (git.push): preserve SSH / askpass channels; still strip GH tokens +
 *   inherited GIT_CONFIG injection; then inject a Product-owned GitHub HTTPS credential
 *   helper overlay (`gh auth git-credential`) so non-interactive HTTPS push can use the
 *   host's stored gh session without restoring ~/.gitconfig or propagating GH_TOKEN
 * - remote_github (pr create/merge): preserve GH_/GITHUB_ token keys; still neutralize
 *   GIT_CONFIG injection; no remote_git helper overlay
 *
 * Mixed local+remote, remote_git+remote_github, unknown effect ids, or disagreement
 * between request authorized effects and the sealed slice fail closed. They do not
 * silently select remote_git.
 *
 * Read-only / validation.run / empty authorized effects do not apply mutating
 * confinement (credential keys stay; only inherited Cursor egress keys are stripped).
 *
 * CAPABILITY ≠ AUTHORITY: this grants a technical HTTPS auth path for remote_git only.
 * Destination/scope remain governed by ExecutionContract ∩ Confirmation ∩ gateway rules.
 *
 * Proves only: Product gateway applies a deterministic env-key presence policy.
 * Does NOT prove AUTH REAL / remote-write success.
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

/**
 * Product-owned Git config overlay for remote_git only (constants — never caller-derived).
 * Scoped to github.com HTTPS; uses the GitHub CLI credential helper against stored gh auth.
 * Does not restore host global/system Git config and does not propagate GH_TOKEN.
 */
export const REMOTE_GIT_GITHUB_HTTPS_CREDENTIAL_HELPER_KEY =
  "credential.https://github.com.helper" as const;
export const REMOTE_GIT_GITHUB_HTTPS_CREDENTIAL_HELPER_VALUE =
  "!gh auth git-credential" as const;

/**
 * Cursor Shell egress env keys — strip ambient inheritance only.
 * Product MUST NOT inject CURSOR_FORCED_* (full-capability parity; no SFIA firewall).
 */
export const CURSOR_FORCED_SHELL_EGRESS_KEY =
  "CURSOR_FORCED_SHELL_EGRESS" as const;
export const CURSOR_FORCED_SHELL_EGRESS_ALLOW_DOMAINS_KEY =
  "CURSOR_FORCED_SHELL_EGRESS_ALLOW_DOMAINS" as const;
export const CURSOR_FORCED_SHELL_EGRESS_NETWORK_DEFAULT_KEY =
  "CURSOR_FORCED_SHELL_EGRESS_NETWORK_DEFAULT" as const;

export const CURSOR_FORCED_SHELL_EGRESS_ENV_KEYS = [
  CURSOR_FORCED_SHELL_EGRESS_KEY,
  CURSOR_FORCED_SHELL_EGRESS_ALLOW_DOMAINS_KEY,
  CURSOR_FORCED_SHELL_EGRESS_NETWORK_DEFAULT_KEY,
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

function isInheritedCursorShellEgressKey(key: string): boolean {
  return (CURSOR_FORCED_SHELL_EGRESS_ENV_KEYS as readonly string[]).includes(
    key,
  );
}

function shouldStripKey(
  key: string,
  effectClass: MutatingCursorConfinementEffectClass,
): boolean {
  // Always neutralize GIT_CONFIG_* and Cursor egress ambient inheritance.
  if (isInheritedGitConfigInjectionKey(key)) return true;
  if (isInheritedCursorShellEgressKey(key)) return true;

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
 * Strip ambient Cursor Shell egress keys from any env object (RO / non-mutating
 * path). Does not mutate the input; returns a fresh object.
 */
export function stripInheritedCursorShellEgressEnv(
  env: NodeJS.ProcessEnv,
): NodeJS.ProcessEnv {
  const next: Record<string, string | undefined> = { ...env };
  for (const key of CURSOR_FORCED_SHELL_EGRESS_ENV_KEYS) {
    delete next[key];
  }
  return next as NodeJS.ProcessEnv;
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

  // remote_git only: after inherited GIT_CONFIG_* strip + null global/system,
  // inject an exact Product-owned github.com HTTPS credential helper overlay.
  if (effectClass === "remote_git") {
    child.GIT_CONFIG_COUNT = "1";
    child.GIT_CONFIG_KEY_0 = REMOTE_GIT_GITHUB_HTTPS_CREDENTIAL_HELPER_KEY;
    child.GIT_CONFIG_VALUE_0 = REMOTE_GIT_GITHUB_HTTPS_CREDENTIAL_HELPER_VALUE;
  }

  return child as NodeJS.ProcessEnv;
}

/**
 * Local filesystem / local git effects share one credential policy.
 * Distinct from AttemptExecutionProfile kinds: filesystem+git.commit is still
 * `local` here (same strip), while local+remote is ambiguous.
 */
const LOCAL_MUTATING_EFFECTS: ReadonlySet<string> = new Set([
  "filesystem.create",
  "filesystem.modify",
  "filesystem.delete",
  "git.commit",
]);
const REMOTE_GIT_EFFECTS: ReadonlySet<string> = new Set(["git.push"]);
const REMOTE_GITHUB_EFFECTS: ReadonlySet<string> = new Set([
  "github.pr.create",
  "github.pr.merge",
]);
/** Known non-mutating executable effect — does not select a confinement class. */
const NON_MUTATING_EFFECTS: ReadonlySet<string> = new Set(["validation.run"]);

export const MUTATING_CONFINEMENT_EFFECT_CLASS_AMBIGUOUS_REASON =
  "mutating_confinement_effect_class_ambiguous" as const;

export type MutatingCursorConfinementInput = {
  /** Server-owned authorized effects on the launch request. */
  readonly authorizedEffects?: readonly string[] | null;
  /**
   * Sealed AuthorizedExecutionSlice.authorizedEffects when the launch carries one.
   * Disagreement with `authorizedEffects` fails closed.
   */
  readonly sealedAuthorizedEffects?: readonly string[] | null;
  readonly isLocalCommitProfile?: boolean;
  readonly isRemotePushProfile?: boolean;
  readonly isPrCreateProfile?: boolean;
  readonly isPrMergeProfile?: boolean;
};

export type MutatingCursorConfinementResolution =
  | {
      readonly ok: true;
      readonly apply: false;
    }
  | {
      readonly ok: true;
      readonly apply: true;
      readonly effectClass: MutatingCursorConfinementEffectClass;
    }
  | {
      readonly ok: false;
      readonly reason: typeof MUTATING_CONFINEMENT_EFFECT_CLASS_AMBIGUOUS_REASON;
    };

function uniqueEffectSet(effects: readonly string[]): Set<string> {
  return new Set(effects);
}

function sameEffectSet(a: readonly string[], b: readonly string[]): boolean {
  const left = uniqueEffectSet(a);
  const right = uniqueEffectSet(b);
  if (left.size !== right.size) return false;
  for (const effect of left) {
    if (!right.has(effect)) return false;
  }
  return true;
}

function classesFromEffects(effects: readonly string[]): {
  local: boolean;
  remoteGit: boolean;
  remoteGithub: boolean;
  unknown: boolean;
} {
  let local = false;
  let remoteGit = false;
  let remoteGithub = false;
  let unknown = false;
  for (const effect of effects) {
    if (LOCAL_MUTATING_EFFECTS.has(effect)) local = true;
    else if (REMOTE_GIT_EFFECTS.has(effect)) remoteGit = true;
    else if (REMOTE_GITHUB_EFFECTS.has(effect)) remoteGithub = true;
    else if (NON_MUTATING_EFFECTS.has(effect)) continue;
    else unknown = true;
  }
  return { local, remoteGit, remoteGithub, unknown };
}

/**
 * Classify mutating Cursor child-env policy from authorized effects and sealed
 * profile flags. Mixed classes and unknown effect ids fail closed (never remote_git
 * by precedence). Empty / validation-only input does not apply mutating confinement.
 */
export function resolveMutatingCursorConfinement(
  input: MutatingCursorConfinementInput,
): MutatingCursorConfinementResolution {
  const requestEffects = input.authorizedEffects ?? null;
  const sealedEffects = input.sealedAuthorizedEffects ?? null;
  if (
    requestEffects != null &&
    sealedEffects != null &&
    !sameEffectSet(requestEffects, sealedEffects)
  ) {
    return {
      ok: false,
      reason: MUTATING_CONFINEMENT_EFFECT_CLASS_AMBIGUOUS_REASON,
    };
  }

  const effects = sealedEffects ?? requestEffects;
  const fromEffects =
    effects == null
      ? {
          local: false,
          remoteGit: false,
          remoteGithub: false,
          unknown: false,
        }
      : classesFromEffects(effects);

  if (fromEffects.unknown) {
    return {
      ok: false,
      reason: MUTATING_CONFINEMENT_EFFECT_CLASS_AMBIGUOUS_REASON,
    };
  }

  const local = fromEffects.local || input.isLocalCommitProfile === true;
  const remoteGit = fromEffects.remoteGit || input.isRemotePushProfile === true;
  const remoteGithub =
    fromEffects.remoteGithub ||
    input.isPrCreateProfile === true ||
    input.isPrMergeProfile === true;

  let classCount = 0;
  if (local) classCount += 1;
  if (remoteGit) classCount += 1;
  if (remoteGithub) classCount += 1;
  if (classCount > 1) {
    return {
      ok: false,
      reason: MUTATING_CONFINEMENT_EFFECT_CLASS_AMBIGUOUS_REASON,
    };
  }
  if (classCount === 0) return { ok: true, apply: false };

  const effectClass: MutatingCursorConfinementEffectClass = remoteGit
    ? "remote_git"
    : remoteGithub
      ? "remote_github"
      : "local";
  return { ok: true, apply: true, effectClass };
}

/**
 * True when mutating confinement must be considered.
 * Ambiguous input returns true so callers cannot fall through to host-credential
 * inheritance. Effect class for that case fails closed via
 * {@link resolveMutatingCursorConfinement}.
 */
export function isMutatingGcecCursorProfile(
  input: MutatingCursorConfinementInput,
): boolean {
  const resolved = resolveMutatingCursorConfinement(input);
  if (!resolved.ok) return true;
  return resolved.apply;
}

export function resolveMutatingConfinementEffectClass(
  input: MutatingCursorConfinementInput,
): MutatingCursorConfinementEffectClass {
  const resolved = resolveMutatingCursorConfinement(input);
  if (!resolved.ok) {
    throw new Error(resolved.reason);
  }
  if (!resolved.apply) {
    throw new Error("mutating_confinement_not_applicable");
  }
  return resolved.effectClass;
}
