/**
 * Server-owned default Product repository identity for automatic Project binding.
 * Never hardcode owner/repo in domain. Never accept client-supplied ambient cwd.
 */
export const SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY_ENV =
  "SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY" as const;
export const SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL_ENV =
  "SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL" as const;
export const SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH_ENV =
  "SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH" as const;

export type ServerOwnedRepositoryConfig = {
  provider: "github";
  identity: string;
  remoteUrl: string;
  defaultBranch: string;
};

/**
 * Resolve explicit server repository config.
 * Returns null when incomplete — never invent ambient identity.
 *
 * CR-PWR-04 — Product Create (LocalProjectComposition) FAIL-CLOSED when null.
 * Low-level CreateProject may still omit binding for legacy/fixture reload only.
 */
export function resolveServerOwnedRepositoryConfig(
  env: NodeJS.ProcessEnv | Record<string, string | undefined> = process.env,
): ServerOwnedRepositoryConfig | null {
  const identity = env[SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY_ENV]?.trim() ?? "";
  const remoteUrl =
    env[SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL_ENV]?.trim() ?? "";
  const defaultBranch =
    env[SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH_ENV]?.trim() || "main";
  if (!identity || !remoteUrl) return null;
  if (!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(identity)) return null;
  if (!remoteUrl.startsWith("https://") && !remoteUrl.startsWith("git@")) {
    return null;
  }
  return {
    provider: "github",
    identity,
    remoteUrl,
    defaultBranch,
  };
}

/** Functional reason when Product Create refuses missing/invalid server config. */
export function describeServerOwnedRepositoryConfigGap(
  env: NodeJS.ProcessEnv | Record<string, string | undefined> = process.env,
): string {
  const identity = env[SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY_ENV]?.trim() ?? "";
  const remoteUrl =
    env[SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL_ENV]?.trim() ?? "";
  if (!identity && !remoteUrl) {
    return "Configuration dépôt server-owned absente (identité et remote URL requises). Création Product refusée — aucun Project partiel.";
  }
  if (!identity) {
    return "Identité dépôt server-owned manquante. Création Product refusée — aucun Project partiel.";
  }
  if (!remoteUrl) {
    return "Remote URL dépôt server-owned manquante. Création Product refusée — aucun Project partiel.";
  }
  if (!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(identity)) {
    return "Identité dépôt server-owned invalide (attendu owner/repo). Création Product refusée — aucun Project partiel.";
  }
  if (!remoteUrl.startsWith("https://") && !remoteUrl.startsWith("git@")) {
    return "Remote URL dépôt server-owned invalide. Création Product refusée — aucun Project partiel.";
  }
  return "Configuration dépôt server-owned incomplète. Création Product refusée — aucun Project partiel.";
}
