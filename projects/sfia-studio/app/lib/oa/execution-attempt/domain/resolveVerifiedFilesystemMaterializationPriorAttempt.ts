/**
 * Progressive Attempt-A lineage for filesystem materialization → local-commit.
 *
 * Pure Product-truth: Attempt history + VERIFIED Artifact Evidence bindings.
 * Zero / multiple eligible candidates → fail closed (no latest/first heuristic).
 *
 * Allowlist: {@link FS_ANCHOR_ARTIFACT_MATERIALIZATION_EVIDENCE_SOURCES}
 * (historical docs_write + CURRENT generic_materialization). Not Product
 * admission of docs_write. Current materialization Attempts use the Studio
 * Cursor generalist agent id.
 */
import type { Evidence } from "@/lib/oa/evidence-review";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import type { ExecutionAttempt } from "./types";
import {
  evidenceMatchesContractLineage,
  expectedEvidenceIdentity,
} from "./qualifyExecutionContractCompletion";
import { STUDIO_CURSOR_GENERALIST_AGENT_ID } from "./realLaunchSafety";
import {
  evidenceLocationMatchesLogicalPath,
  isAllowlistedArtifactMaterializationSource,
  logicalPathFromDurableArtifactLocation,
  resolveLogicalPathFromEvidenceLocation,
} from "./fsAnchorArtifactMaterializationEvidenceSources";

/** Historical Attempt agent — durable Evidence reading only. */
const HISTORICAL_BOUNDED_DOCS_WRITE_AGENT_ID =
  "agt:m4.cursor.bounded_docs_write" as const;

export type VerifiedFilesystemMaterializationPriorAttempt = {
  readonly priorAttemptId: string;
  readonly evidenceId: string;
  readonly artifactPath: string;
  readonly artifactDigest: string;
};

/** @deprecated Alias — historical naming retained for call-site continuity. */
export type VerifiedDocsWritePriorAttempt =
  VerifiedFilesystemMaterializationPriorAttempt;

export type ResolveVerifiedFilesystemMaterializationPriorAttemptInput = {
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

export type ResolveVerifiedFilesystemMaterializationPriorAttemptResult =
  | {
      readonly ok: true;
      readonly prior: VerifiedFilesystemMaterializationPriorAttempt;
    }
  | {
      readonly ok: false;
      readonly reason:
        | "docs_write_prior_none"
        | "docs_write_prior_ambiguous"
        | "docs_write_prior_incomplete";
      readonly candidateAttemptIds?: readonly string[];
    };

function expectedArtifactPaths(
  contract: ResolveVerifiedFilesystemMaterializationPriorAttemptInput["contract"],
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

function isDurableFsMaterializationAttemptAgent(
  selectedAgentRef: string | undefined,
): boolean {
  return (
    selectedAgentRef === STUDIO_CURSOR_GENERALIST_AGENT_ID ||
    selectedAgentRef === HISTORICAL_BOUNDED_DOCS_WRITE_AGENT_ID
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
  if (!isAllowlistedArtifactMaterializationSource(String(ev.source ?? ""))) {
    return false;
  }
  const loc = String(ev.location ?? "").trim();
  if (!loc) return false;
  if (
    allowedPaths.length > 0 &&
    !allowedPaths.some((p) => evidenceLocationMatchesLogicalPath(loc, p))
  ) {
    return false;
  }
  const digest = String(ev.digest ?? "").trim().toLowerCase();
  if (!digest.startsWith("sha256:") || digest.length < "sha256:".length + 64) {
    return false;
  }
  return true;
}

/**
 * Resolve the unique prior succeeded filesystem-materialization Attempt A with
 * matching VERIFIED Artifact Evidence for the current EC.
 */
export function resolveVerifiedFilesystemMaterializationPriorAttempt(
  input: ResolveVerifiedFilesystemMaterializationPriorAttemptInput,
): ResolveVerifiedFilesystemMaterializationPriorAttemptResult {
  const expected = expectedEvidenceIdentity({ contract: input.contract });
  const allowedPaths = expectedArtifactPaths(input.contract);

  type Candidate = VerifiedFilesystemMaterializationPriorAttempt;
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
    if (!isDurableFsMaterializationAttemptAgent(attempt.selectedAgentRef)) {
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
    const rawLoc = String(ev.location).trim();
    const logical =
      resolveLogicalPathFromEvidenceLocation(rawLoc, allowedPaths) ??
      logicalPathFromDurableArtifactLocation(rawLoc);
    candidates.push({
      priorAttemptId: attempt.attemptId,
      evidenceId: ev.evidenceId,
      artifactPath: logical,
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

/** @deprecated Alias — historical naming retained for call-site continuity. */
export const resolveVerifiedDocsWritePriorAttempt =
  resolveVerifiedFilesystemMaterializationPriorAttempt;
