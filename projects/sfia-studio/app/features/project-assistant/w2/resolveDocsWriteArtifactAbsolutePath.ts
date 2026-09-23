/**
 * Resolve absolute filesystem path of a docs_write artifact for server-owned
 * conformity verification (ZERO client path trust).
 *
 * Priority:
 * 1) explicit worktreeRef from the just-completed launch (hottest)
 * 2) Evidence.location when already absolute and present
 * 3) managedRepoRootBase + repository identity + relative targetPath
 */
import { existsSync } from "node:fs";
import path from "node:path";
import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import type { Evidence } from "@/lib/oa/evidence-review";
import { sanitizeManagedRepoIdentity } from "@/lib/oa/execution-attempt/infrastructure/managedProjectRepositoryResolver";
import { resolveManagedRepoRootBaseFromEnv } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";

function boundInputsOf(
  attempt: ExecutionAttempt,
  contract: ExecutionContract,
): Record<string, unknown> {
  const bound = attempt.boundExecutionContract?.semanticMaterial?.inputs;
  if (bound && typeof bound === "object") return bound as Record<string, unknown>;
  return (contract.inputs ?? {}) as Record<string, unknown>;
}

function relativeTargetPath(
  attempt: ExecutionAttempt,
  contract: ExecutionContract,
  evidence: Evidence | null,
): string | null {
  const inputs = boundInputsOf(attempt, contract);
  const fromBound =
    typeof inputs.targetPath === "string" ? inputs.targetPath.trim() : "";
  if (fromBound) return fromBound;
  const loc = evidence?.location?.trim() ?? "";
  if (loc && !path.isAbsolute(loc)) return loc;
  return null;
}

function repositoryIdentity(
  attempt: ExecutionAttempt,
  contract: ExecutionContract,
): string | null {
  const inputs = boundInputsOf(attempt, contract);
  for (const key of [
    "repositoryBindingIdentity",
    "repositoryIdentity",
    "repositoryRef",
    "targetRepositoryRef",
  ] as const) {
    const v = inputs[key];
    if (typeof v === "string" && v.trim()) return v.trim();
  }
  return null;
}

export function resolveDocsWriteArtifactAbsolutePath(input: {
  readonly attempt: ExecutionAttempt;
  readonly contract: ExecutionContract;
  readonly evidence: Evidence | null;
  /** Hot worktree from the same process that just completed docs_write. */
  readonly worktreeRef?: string | null;
  readonly managedRepoRootBase?: string | null;
}): string | null {
  const rel = relativeTargetPath(input.attempt, input.contract, input.evidence);
  const candidates: string[] = [];

  const wt = input.worktreeRef?.trim();
  if (wt && rel) {
    candidates.push(path.resolve(wt, ...rel.split("/")));
  }

  const loc = input.evidence?.location?.trim();
  if (loc && path.isAbsolute(loc)) {
    candidates.push(loc);
  }

  const base =
    input.managedRepoRootBase?.trim() ||
    resolveManagedRepoRootBaseFromEnv() ||
    undefined;
  const identity = repositoryIdentity(input.attempt, input.contract);
  if (base && identity && rel) {
    try {
      const sanitized = sanitizeManagedRepoIdentity(identity);
      candidates.push(path.resolve(base, sanitized, ...rel.split("/")));
    } catch {
      // identity invalid — skip managed candidate
    }
  }

  for (const abs of candidates) {
    if (existsSync(abs)) return abs;
  }
  return null;
}
