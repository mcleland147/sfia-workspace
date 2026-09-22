/**
 * PJ-REPROOF-05 — trusted Cursor launch context pinned on ExecutionContract
 * BEFORE inspection / authorization.
 *
 * Never accept client-supplied baseHeadSha after authorize.
 * Never silently bind to Studio's own checkout (process.cwd / sfia-workspace).
 */

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  resolveBoundedReadOnlyBaseHeadSha,
  validateBaseHeadSha,
} from "@/lib/vertical-slice-runtime/resolveBoundedReadOnlyBaseHeadSha";
import { resolveManagedRepoRootBaseFromEnv } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import { ManagedProjectRepositoryResolver } from "@/lib/oa/execution-attempt/infrastructure/managedProjectRepositoryResolver";

export type TrustedProductLaunchContext = {
  readonly baseHeadSha: string;
  readonly repositoryBindingIdentity: string;
  readonly remoteUrl: string;
  readonly defaultBranch: string;
  readonly pathRoot: string | null;
  readonly managedRepoRoot: string | null;
};

export type ResolveTrustedProductLaunchContextResult =
  | { readonly ok: true; readonly context: TrustedProductLaunchContext }
  | { readonly ok: false; readonly code: string; readonly message: string };

const managedResolver = new ManagedProjectRepositoryResolver();

/**
 * Resolve launch context from durable Project.repositoryBinding + server HEAD
 * of the project's managed clone (never Studio cwd).
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
  const binding = projectResult.project.repositoryBinding;
  if (!binding?.identity?.trim()) {
    return {
      ok: false,
      code: "REPOSITORY_BINDING_REQUIRED",
      message:
        "Aucun dépôt de projet fiable n'est lié — préparation d'un contrat exécutable refusée.",
    };
  }
  const identity = binding.identity.trim();
  const remoteUrl =
    binding.remoteUrl?.trim() || `https://github.com/${identity}.git`;
  const defaultBranch = binding.defaultBranch?.trim() || "main";
  const pathRoot = binding.pathRoot?.trim() || null;

  const managedBase =
    (typeof input.managedRepoRootBase === "string" &&
    input.managedRepoRootBase.trim()
      ? input.managedRepoRootBase.trim()
      : null) ?? resolveManagedRepoRootBaseFromEnv() ?? null;

  let managedRepoRoot: string | null = null;
  if (managedBase) {
    managedRepoRoot = managedResolver.resolveLocalRepoRoot(
      { identity },
      managedBase,
    );
  }

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

  return {
    ok: true,
    context: {
      baseHeadSha: sha,
      repositoryBindingIdentity: identity,
      remoteUrl,
      defaultBranch,
      pathRoot,
      managedRepoRoot,
    },
  };
}

export function launchContextAsContractInputs(
  context: TrustedProductLaunchContext,
): Record<string, string> {
  return {
    baseHeadSha: context.baseHeadSha,
    repositoryBindingIdentity: context.repositoryBindingIdentity,
    repositoryIdentity: context.repositoryBindingIdentity,
    repositoryRef: context.repositoryBindingIdentity,
    remoteUrl: context.remoteUrl,
    defaultBranch: context.defaultBranch,
    ...(context.pathRoot ? { pathRoot: context.pathRoot } : {}),
  };
}
