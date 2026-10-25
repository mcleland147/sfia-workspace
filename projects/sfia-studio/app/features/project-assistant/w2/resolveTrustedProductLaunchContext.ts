/**
 * PJ-REPROOF-05 — trusted Cursor launch context pinned on ExecutionContract
 * BEFORE inspection / authorization.
 *
 * Never accept client-supplied baseHeadSha after authorize.
 * Never silently bind to Studio's own checkout (process.cwd / sfia-workspace).
 */

import { existsSync } from "node:fs";
import path from "node:path";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import { assertRemoteUrlMatchesRepositoryRef } from "@/lib/oa/execution-attempt/domain/assertLocalBranchRefMatchesExpectedSha";
import { assertCanonicalGithubRepositoryRef } from "@/lib/oa/execution-attempt/domain/shellSafeArg";
import { projectWorkspacePathRootFromKey } from "@/lib/oa/project/domain/projectWorkspaceKey";
import {
  resolveBoundedReadOnlyBaseHeadSha,
  validateBaseHeadSha,
} from "@/lib/vertical-slice-runtime/resolveBoundedReadOnlyBaseHeadSha";
import { resolveManagedRepoRootBaseFromEnv } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";

/**
 * Server env that still carries a git-target owner/repo string for launch.
 * Seal-only. Read only to stamp ExecutionContract inputs.
 * Not Product SoT. Never written onto Project, and never a Product
 * repository-binding record.
 */
export const SEALED_GIT_TARGET_IDENTITY_ENV =
  "SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY";
export const SEALED_GIT_TARGET_REMOTE_URL_ENV =
  "SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL";
export const SEALED_GIT_TARGET_DEFAULT_BRANCH_ENV =
  "SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH";

type SealedGitTarget = {
  readonly identity: string;
  readonly remoteUrl: string;
  readonly defaultBranch: string;
};

/**
 * Canonical owner/repo from server env when present and valid.
 * A provided remote must identify that same GitHub repository.
 * Absent remote may be synthesized as `https://github.com/${identity}.git`
 * only after the identity is canonical (coherent by construction).
 * Non-canonical identity, non-GitHub host, or owner/repo mismatch → null.
 */
export function resolveSealedGitTargetFromEnv(
  env: NodeJS.ProcessEnv | Record<string, string | undefined> = process.env,
): SealedGitTarget | null {
  const rawIdentity = env[SEALED_GIT_TARGET_IDENTITY_ENV];
  const canonical = assertCanonicalGithubRepositoryRef(
    typeof rawIdentity === "string" ? rawIdentity.trim() : "",
  );
  if (!canonical.ok) return null;

  const rawRemote = env[SEALED_GIT_TARGET_REMOTE_URL_ENV];
  const remoteTrimmed = typeof rawRemote === "string" ? rawRemote.trim() : "";
  let remoteUrl: string;
  if (!remoteTrimmed) {
    remoteUrl = `https://github.com/${canonical.ref}.git`;
  } else {
    const match = assertRemoteUrlMatchesRepositoryRef({
      remoteUrl: remoteTrimmed,
      repositoryRef: canonical.ref,
    });
    if (!match.ok) return null;
    remoteUrl = remoteTrimmed;
  }

  const rawBranch = env[SEALED_GIT_TARGET_DEFAULT_BRANCH_ENV];
  const defaultBranch =
    (typeof rawBranch === "string" ? rawBranch.trim() : "") || "main";

  return {
    identity: canonical.ref,
    remoteUrl,
    defaultBranch,
  };
}

export type TrustedProductLaunchContext = {
  readonly baseHeadSha: string;
  /**
   * Residual sealed git-target field (CORR-01/02).
   * Server-owned owner/repo string stamped onto ExecutionContract inputs.
   * Not Product SoT, not a Product repository-binding record, and not
   * NewRepositoryBinding. Documentary WHERE is pathRoot
   * (projects/<projectWorkspaceKey>).
   */
  readonly repositoryBindingIdentity: string | null;
  readonly remoteUrl: string | null;
  readonly defaultBranch: string | null;
  readonly pathRoot: string | null;
  readonly managedRepoRoot: string | null;
};

export type ResolveTrustedProductLaunchContextResult =
  | { readonly ok: true; readonly context: TrustedProductLaunchContext }
  | { readonly ok: false; readonly code: string; readonly message: string };

/**
 * Resolve launch context from the durable Project workspace key and, when
 * pinned or a managed clone is available, the server HEAD. Never Studio cwd.
 *
 * `repositoryBindingIdentity` on the result remains the residual sealed
 * git-target field (CORR-01/02). It is not Product SoT and not
 * NewRepositoryBinding.
 *
 * Test hooks: pinnedBaseHeadSha / managedRepoRootBase — never from browser Execute.
 */
export async function resolveTrustedProductLaunchContext(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly pinnedBaseHeadSha?: string | null;
  readonly managedRepoRootBase?: string | null;
}): Promise<ResolveTrustedProductLaunchContextResult> {
  const projectResult = await input.oa.projectServices.getProject.execute({
    projectId: input.projectId,
  });
  if (!projectResult.ok) {
    return {
      ok: false,
      code: "PROJECT_NOT_FOUND",
      message:
        "Projet introuvable — contexte de lancement impossible à fixer.",
    };
  }
  const pathRoot = projectWorkspacePathRootFromKey(
    projectResult.project.projectWorkspaceKey,
  );

  const managedBase =
    (typeof input.managedRepoRootBase === "string" &&
    input.managedRepoRootBase.trim()
      ? input.managedRepoRootBase.trim()
      : null) ?? resolveManagedRepoRootBaseFromEnv() ?? null;

  const managedRepoRoot =
    managedBase && existsAsGitRoot(managedBase) ? managedBase : null;

  let sha: string | null = null;
  if (input.pinnedBaseHeadSha !== undefined && input.pinnedBaseHeadSha !== null) {
    sha = validateBaseHeadSha(input.pinnedBaseHeadSha);
    if (!sha) {
      return {
        ok: false,
        code: "BASE_HEAD_SHA_INVALID",
        message:
          "baseHeadSha serveur invalide — fail-closed avant inspection.",
      };
    }
  } else {
    if (!managedRepoRoot) {
      return {
        ok: false,
        code: "MANAGED_REPO_UNAVAILABLE",
        message:
          "Clone géré du dépôt projet indisponible — contexte de lancement fail-closed (pas de repli sur le checkout Studio).",
      };
    }
    const resolved = await resolveBoundedReadOnlyBaseHeadSha({
      startDir: managedRepoRoot,
    });
    if (!resolved.ok) {
      return {
        ok: false,
        code: resolved.code,
        message: resolved.message,
      };
    }
    sha = resolved.sha;
  }

  if (!sha) {
    return {
      ok: false,
      code: "BASE_HEAD_SHA_INVALID",
      message:
        "baseHeadSha serveur absent — fail-closed avant inspection.",
    };
  }

  // Sealed git-target string for EC inputs when the server env is canonical.
  // Missing/invalid stays null — Select eligibility remains fail-closed.
  // Not persisted as Project.repositoryBinding.
  const sealedGitTarget = resolveSealedGitTargetFromEnv();

  return {
    ok: true,
    context: {
      baseHeadSha: sha,
      repositoryBindingIdentity: sealedGitTarget?.identity ?? null,
      remoteUrl: sealedGitTarget?.remoteUrl ?? null,
      defaultBranch: sealedGitTarget?.defaultBranch ?? null,
      pathRoot,
      managedRepoRoot,
    },
  };
}

export function launchContextAsContractInputs(
  context: TrustedProductLaunchContext,
): Record<string, string> {
  const identity = context.repositoryBindingIdentity;
  return {
    baseHeadSha: context.baseHeadSha,
    ...(identity
      ? {
          repositoryBindingIdentity: identity,
          repositoryIdentity: identity,
          repositoryRef: identity,
        }
      : {}),
    ...(context.remoteUrl ? { remoteUrl: context.remoteUrl } : {}),
    ...(context.defaultBranch ? { defaultBranch: context.defaultBranch } : {}),
    ...(context.pathRoot ? { pathRoot: context.pathRoot } : {}),
  };
}

function existsAsGitRoot(dir: string): boolean {
  return existsSync(path.join(dir, ".git"));
}
