/**
 * CORR-D-GCEC-AGENT-01 / CR-GCEC-AGENT-07 — exact Attempt-A lineage for M4
 * progressive docs-write → local-commit transition.
 *
 * Pure Product-truth: Attempt history + VERIFIED Artifact Evidence bindings.
 * Zero / multiple eligible candidates → fail closed (no latest/first heuristic).
 */
import type { Evidence } from "@/lib/oa/evidence-review";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import type { ExecutionAttempt } from "./types";
import {
  evidenceMatchesContractLineage,
  expectedEvidenceIdentity,
} from "./qualifyExecutionContractCompletion";
import {
  M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
} from "./realLaunchSafety";

export type VerifiedDocsWritePriorAttempt = {
  readonly priorAttemptId: string;
  readonly evidenceId: string;
  readonly artifactPath: string;
  readonly artifactDigest: string;
};

export type ResolveVerifiedDocsWritePriorAttemptInput = {
  readonly contract: Pick<
    ExecutionContract,
    | "executionContractId"
    | "projectId"
    | "cycleInstanceId"
    | "expectedOutputs"
    | "inputs"
  >;
  readonly attempts: readonly ExecutionAttempt[];
  readonly evidence: readonly Evidence[];
  /** Exclude current Attempt B when resolving prior A. */
  readonly excludeAttemptId?: string;
};

export type ResolveVerifiedDocsWritePriorAttemptResult =
  | { readonly ok: true; readonly prior: VerifiedDocsWritePriorAttempt }
  | {
      readonly ok: false;
      readonly reason:
        | "docs_write_prior_none"
        | "docs_write_prior_ambiguous"
        | "docs_write_prior_incomplete";
      readonly candidateAttemptIds?: readonly string[];
    };

function expectedArtifactPaths(
  contract: ResolveVerifiedDocsWritePriorAttemptInput["contract"],
): readonly string[] {
  const paths = new Set<string>();
  if (Array.isArray(contract.expectedOutputs)) {
    for (const o of contract.expectedOutputs) {
      const s = String(o).trim();
      if (s && s !== "artifact" && !s.includes(":") && s.includes("/")) {
        paths.add(s);
      }
    }
  }
  const inputs = contract.inputs;
  if (inputs && typeof inputs === "object") {
    const targetPath = (inputs as { targetPath?: unknown }).targetPath;
    if (typeof targetPath === "string" && targetPath.trim()) {
      paths.add(targetPath.trim());
    }
  }
  return [...paths];
}

function isCanonicalDocsWriteSource(source: string): boolean {
  // Exact or dotted suffix only — reject fake-prefix lookalikes.
  return (
    source === "execution_attempt:docs_write" ||
    /^execution_attempt:docs_write(\.|$)/.test(source)
  );
}

function isEligibleArtifact(
  ev: Evidence,
  expected: {
    projectId: string;
    cycleInstanceId?: string;
    executionContractId: string;
  },
  attemptId: string,
  allowedPaths: readonly string[],
): boolean {
  if (ev.status !== "verified") return false;
  if (ev.type !== "artifact") return false;
  if (!evidenceMatchesContractLineage(ev, expected)) return false;
  if (ev.bindings.executionAttemptId !== attemptId) return false;
  if (!isCanonicalDocsWriteSource(String(ev.source ?? ""))) return false;
  const loc = String(ev.location ?? "").trim();
  if (!loc) return false;
  if (allowedPaths.length > 0 && !allowedPaths.includes(loc)) return false;
  const digest = String(ev.digest ?? "").trim().toLowerCase();
  if (!digest.startsWith("sha256:") || digest.length < "sha256:".length + 64) {
    return false;
  }
  return true;
}

/**
 * Resolve the unique prior succeeded docs-write Attempt A with matching
 * VERIFIED Artifact Evidence for the current EC.
 */
export function resolveVerifiedDocsWritePriorAttempt(
  input: ResolveVerifiedDocsWritePriorAttemptInput,
): ResolveVerifiedDocsWritePriorAttemptResult {
  const expected = expectedEvidenceIdentity({ contract: input.contract });
  const allowedPaths = expectedArtifactPaths(input.contract);

  type Candidate = VerifiedDocsWritePriorAttempt;
  const candidates: Candidate[] = [];

  for (const attempt of input.attempts) {
    if (
      input.excludeAttemptId &&
      attempt.attemptId === input.excludeAttemptId
    ) {
      continue;
    }
    if (attempt.executionContractId !== input.contract.executionContractId) {
      continue;
    }
    if (attempt.status !== "succeeded") continue;
    if (attempt.selectedAgentRef !== M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID) {
      continue;
    }

    const matching = input.evidence.filter((ev) =>
      isEligibleArtifact(ev, expected, attempt.attemptId, allowedPaths),
    );
    if (matching.length === 0) continue;
    if (matching.length > 1) {
      return {
        ok: false,
        reason: "docs_write_prior_ambiguous",
        candidateAttemptIds: [attempt.attemptId],
      };
    }
    const ev = matching[0]!;
    candidates.push({
      priorAttemptId: attempt.attemptId,
      evidenceId: ev.evidenceId,
      artifactPath: String(ev.location).trim(),
      artifactDigest: String(ev.digest).trim().toLowerCase(),
    });
  }

  if (candidates.length === 0) {
    return { ok: false, reason: "docs_write_prior_none" };
  }
  if (candidates.length > 1) {
    return {
      ok: false,
      reason: "docs_write_prior_ambiguous",
      candidateAttemptIds: candidates.map((c) => c.priorAttemptId),
    };
  }

  const only = candidates[0]!;
  if (!only.artifactPath || !only.artifactDigest.startsWith("sha256:")) {
    return { ok: false, reason: "docs_write_prior_incomplete" };
  }
  return { ok: true, prior: only };
}
