/**
 * Server-owned managed repository root base for Product docs_write REAL composition.
 *
 * Operational precondition (no network clone in this capability):
 * under the configured absolute base, each Project.repositoryBinding.identity must
 * already exist as a local Git repository at
 * `{base}/{sanitizedIdentity}` (see ManagedProjectRepositoryResolver).
 *
 * Absent/blank → undefined (StartExecution fail-closed:
 * docs_write_managed_repo_root_base_unconfigured).
 *
 * Never accept client/EC absolute roots. Never expose via NEXT_PUBLIC_*.
 */
import path from "node:path";

export const SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV =
  "SFIA_STUDIO_MANAGED_REPO_ROOT_BASE" as const;

/**
 * Parse server env for managedRepoRootBase.
 * Returns absolute path or undefined when unset/blank.
 */
export function resolveManagedRepoRootBaseFromEnv(
  env: NodeJS.ProcessEnv | Record<string, string | undefined> = process.env,
): string | undefined {
  const raw = env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV];
  if (typeof raw !== "string") return undefined;
  const trimmed = raw.trim();
  if (!trimmed) return undefined;
  return path.resolve(trimmed);
}
