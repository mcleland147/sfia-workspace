/**
 * D-GCEC-AGENT-01 — AttemptExecutionProfile (non-persistent).
 * CORR-D-GCEC-AGENT-01: exact Attempt-A lineage + unsupported M4 fail-closed.
 *
 * Server-derived executor sufficiency for THIS Attempt's current eligible slice.
 * NOT an authority source, NOT client-authoritative, NOT persisted.
 *
 * Selection and Start MUST use this same resolver.
 */
import type { Evidence } from "@/lib/oa/evidence-review";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import type { AgentMatchCriteria } from "./invariants";
import type { ExecutionAttempt } from "./types";
import { deriveExecutableEffectsFromContractRequirements } from "./contractEffectClassification";
import {
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
  M4_BOUNDED_DOCS_WRITE_SCOPE,
  M4_BOUNDED_DOCS_WRITE_TARGET,
} from "../infrastructure/m4BoundedDocsWriteCursorAgent";
import {
  M4_BOUNDED_LOCAL_COMMIT_ACTION,
  M4_BOUNDED_LOCAL_COMMIT_CAPABILITY,
  M4_BOUNDED_LOCAL_COMMIT_SCOPE,
  M4_BOUNDED_LOCAL_COMMIT_TARGET,
} from "../infrastructure/m4BoundedLocalCommitCursorAgent";
import type { CursorAuthorizedEffectId } from "./cursorExecutionReport";
import {
  resolveVerifiedDocsWritePriorAttempt,
  type VerifiedDocsWritePriorAttempt,
} from "./resolveVerifiedDocsWritePriorAttempt";

export type AttemptExecutionProfileKind =
  | "docs_write"
  | "local_commit"
  | "contract_legacy";

/** Non-persistent lineage facts for local_commit profile (CR-GCEC-AGENT-07). */
export type AttemptExecutionProfileLineage = {
  readonly priorAttemptId: string;
  readonly evidenceId: string;
  readonly artifactPath: string;
  readonly artifactDigest: string;
};

export type AttemptExecutionProfile = {
  readonly kind: AttemptExecutionProfileKind;
  /** Exact AgentMatchCriteria for registry / Start revalidation. */
  readonly criteria: AgentMatchCriteria;
  /** Human-readable derivation reason (audit / tests). */
  readonly reason: string;
  /** Eligible effect class for this Attempt (informational). */
  readonly effectClass: "filesystem" | "git.commit" | "contract_legacy";
  /** Present when kind === local_commit — exact prior A. */
  readonly lineage?: AttemptExecutionProfileLineage;
};

export type ResolveAttemptExecutionProfileInput = {
  readonly contract: Pick<
    ExecutionContract,
    | "executionContractId"
    | "projectId"
    | "cycleInstanceId"
    | "action"
    | "target"
    | "scope"
    | "requiredCapabilities"
    | "evidenceRequirements"
    | "expectedOutputs"
    | "inputs"
  >;
  readonly attempts?: readonly ExecutionAttempt[];
  readonly evidence?: readonly Evidence[];
  /**
   * Evidence reader availability. When false, progressive M4 transitions that
   * require Evidence fail closed (CR-GCEC-AGENT-02). Absent defaults to
   * available with `evidence` (direct unit tests).
   */
  readonly evidenceReaderAvailable?: boolean;
  /**
   * Optional server-derived authorized effects for THIS Start
   * (AuthorizedExecutionSlice). Never trusted from client alone.
   */
  readonly authorizedEffects?: readonly CursorAuthorizedEffectId[];
  /**
   * Hostile / non-authoritative. Ignored for profile fabrication (AP-03/AP-06).
   */
  readonly claimedVerifiedEffects?: readonly CursorAuthorizedEffectId[];
  readonly claimedProfile?: unknown;
  readonly claimedGitCommitSpec?: unknown;
  readonly claimedRequestedAgentRef?: unknown;
};

export type ResolveAttemptExecutionProfileResult =
  | { readonly ok: true; readonly profile: AttemptExecutionProfile }
  | { readonly ok: false; readonly reason: string };

const UNSUPPORTED_M4_PROTECTED: ReadonlySet<CursorAuthorizedEffectId> = new Set([
  "git.push",
  "github.pr.create",
  "github.pr.update",
  "github.pr.merge",
]);

function docsWriteProfile(reason: string): AttemptExecutionProfile {
  return {
    kind: "docs_write",
    effectClass: "filesystem",
    reason,
    criteria: {
      requiredCapabilities: [M4_BOUNDED_DOCS_WRITE_CAPABILITY],
      action: M4_BOUNDED_DOCS_WRITE_ACTION,
      target: M4_BOUNDED_DOCS_WRITE_TARGET,
      scope: M4_BOUNDED_DOCS_WRITE_SCOPE,
    },
  };
}

function localCommitProfile(
  reason: string,
  prior: VerifiedDocsWritePriorAttempt,
): AttemptExecutionProfile {
  return {
    kind: "local_commit",
    effectClass: "git.commit",
    reason,
    lineage: {
      priorAttemptId: prior.priorAttemptId,
      evidenceId: prior.evidenceId,
      artifactPath: prior.artifactPath,
      artifactDigest: prior.artifactDigest,
    },
    criteria: {
      requiredCapabilities: [M4_BOUNDED_LOCAL_COMMIT_CAPABILITY],
      action: M4_BOUNDED_LOCAL_COMMIT_ACTION,
      target: M4_BOUNDED_LOCAL_COMMIT_TARGET,
      scope: M4_BOUNDED_LOCAL_COMMIT_SCOPE,
    },
  };
}

function contractLegacyProfile(
  contract: ResolveAttemptExecutionProfileInput["contract"],
  reason: string,
): AttemptExecutionProfile {
  return {
    kind: "contract_legacy",
    effectClass: "contract_legacy",
    reason,
    criteria: {
      requiredCapabilities: [...(contract.requiredCapabilities ?? [])],
      action: contract.action,
      target: contract.target,
      scope: contract.scope,
    },
  };
}

function uniqueAuthorizedEffectClass(
  effects: readonly CursorAuthorizedEffectId[],
): "filesystem" | "git.commit" | "unsupported_protected" | "other" | "empty" | "mixed" {
  const set = new Set(effects);
  if (set.size === 0) return "empty";
  const fs = [...set].filter(
    (e) => e === "filesystem.create" || e === "filesystem.modify",
  );
  const commit = set.has("git.commit");
  const unsupported = [...set].filter((e) => UNSUPPORTED_M4_PROTECTED.has(e));
  const other = [...set].filter(
    (e) =>
      e !== "filesystem.create" &&
      e !== "filesystem.modify" &&
      e !== "git.commit" &&
      e !== "validation.run" &&
      !UNSUPPORTED_M4_PROTECTED.has(e),
  );
  if (unsupported.length > 0) {
    if (fs.length > 0 || commit || other.length > 0) return "mixed";
    return "unsupported_protected";
  }
  if (other.length > 0 && (fs.length > 0 || commit)) return "mixed";
  if (other.length > 0) return "other";
  if (commit && fs.length > 0) return "mixed";
  if (commit) return "git.commit";
  if (fs.length > 0) return "filesystem";
  return "other";
}

function resolveLocalCommitOrFail(
  input: ResolveAttemptExecutionProfileInput,
  reason: string,
): ResolveAttemptExecutionProfileResult {
  if (input.evidenceReaderAvailable === false) {
    return { ok: false, reason: "attempt_profile_evidence_reader_unavailable" };
  }
  const prior = resolveVerifiedDocsWritePriorAttempt({
    contract: input.contract,
    attempts: input.attempts ?? [],
    evidence: input.evidence ?? [],
  });
  if (!prior.ok) {
    if (prior.reason === "docs_write_prior_none") {
      return {
        ok: false,
        reason: "attempt_profile_commit_without_verified_fs_lineage",
      };
    }
    if (prior.reason === "docs_write_prior_ambiguous") {
      return {
        ok: false,
        reason: "attempt_profile_docs_write_prior_ambiguous",
      };
    }
    return {
      ok: false,
      reason: "attempt_profile_docs_write_prior_incomplete",
    };
  }
  return {
    ok: true,
    profile: localCommitProfile(reason, prior.prior),
  };
}

/**
 * Derive the current AttemptExecutionProfile from durable Product truth.
 * Fail closed on zero / ambiguous / unsupported profiles.
 */
export function resolveAttemptExecutionProfile(
  input: ResolveAttemptExecutionProfileInput,
): ResolveAttemptExecutionProfileResult {
  // AP-06/07/08 — reject any client-injected profile channel.
  if (input.claimedProfile != null) {
    return { ok: false, reason: "attempt_profile_client_injection_rejected" };
  }
  void input.claimedVerifiedEffects;
  void input.claimedGitCommitSpec;
  void input.claimedRequestedAgentRef;

  const contract = input.contract;
  const evidence = input.evidence ?? [];

  const docsWriteSpecEvidence =
    contract.inputs &&
    typeof contract.inputs === "object" &&
    Array.isArray(
      (contract.inputs as { evidenceRequirements?: unknown }).evidenceRequirements,
    )
      ? (
          (contract.inputs as { evidenceRequirements: unknown[] })
            .evidenceRequirements
        ).map(String)
      : [];

  const evidenceRequirements = [
    ...(Array.isArray(contract.evidenceRequirements)
      ? contract.evidenceRequirements.map(String)
      : []),
    ...docsWriteSpecEvidence,
  ];

  const classified = deriveExecutableEffectsFromContractRequirements({
    evidenceRequirements,
    expectedOutputs: Array.isArray(contract.expectedOutputs)
      ? contract.expectedOutputs.map(String)
      : undefined,
    requiredCapabilities: Array.isArray(contract.requiredCapabilities)
      ? contract.requiredCapabilities.map(String)
      : undefined,
    allowFilesystemCreateOrModify: true,
  });

  const executable = classified.executableEffects;
  const hasFs = executable.some(
    (e) => e === "filesystem.create" || e === "filesystem.modify",
  );
  const hasCommit = executable.includes("git.commit");
  const hasUnsupportedProtected = executable.some((e) =>
    UNSUPPORTED_M4_PROTECTED.has(e as CursorAuthorizedEffectId),
  );

  const isM4DocsWriteContract =
    contract.action === M4_BOUNDED_DOCS_WRITE_ACTION &&
    (contract.requiredCapabilities ?? []).includes(
      M4_BOUNDED_DOCS_WRITE_CAPABILITY,
    );

  // When Start provides server-derived authorizedEffects, use them to confirm
  // the unique slice — still require exact Attempt-A lineage for commit.
  if (input.authorizedEffects && isM4DocsWriteContract) {
    const cls = uniqueAuthorizedEffectClass(input.authorizedEffects);
    if (cls === "empty") {
      return { ok: false, reason: "attempt_profile_zero_eligible" };
    }
    if (cls === "mixed") {
      return { ok: false, reason: "attempt_profile_ambiguous_slice" };
    }
    if (cls === "unsupported_protected") {
      return { ok: false, reason: "attempt_profile_effect_not_supported" };
    }
    if (cls === "filesystem") {
      return {
        ok: true,
        profile: docsWriteProfile("authorized_slice_filesystem"),
      };
    }
    if (cls === "git.commit") {
      return resolveLocalCommitOrFail(input, "authorized_slice_git_commit");
    }
    // validation-only / unknown under M4 progressive — fail closed (CR-06).
    return { ok: false, reason: "attempt_profile_effect_not_supported" };
  }

  // Selection-time / restart: durable Evidence only.
  if (isM4DocsWriteContract && (hasFs || hasCommit || hasUnsupportedProtected)) {
    // Progressive M4 path — never fall back to contract_legacy for later effects.
    if (hasUnsupportedProtected && !hasFs && !hasCommit) {
      return { ok: false, reason: "attempt_profile_effect_not_supported" };
    }

    if (hasFs && hasCommit) {
      if (input.evidenceReaderAvailable === false) {
        return {
          ok: false,
          reason: "attempt_profile_evidence_reader_unavailable",
        };
      }
      const prior = resolveVerifiedDocsWritePriorAttempt({
        contract,
        attempts: input.attempts ?? [],
        evidence,
      });
      if (!prior.ok) {
        if (prior.reason === "docs_write_prior_none") {
          // No qualified A yet → still on docs-write slice.
          return {
            ok: true,
            profile: docsWriteProfile("progressive_fs_outstanding"),
          };
        }
        if (prior.reason === "docs_write_prior_ambiguous") {
          return {
            ok: false,
            reason: "attempt_profile_docs_write_prior_ambiguous",
          };
        }
        return {
          ok: false,
          reason: "attempt_profile_docs_write_prior_incomplete",
        };
      }

      // Qualified A exists — check whether commit Evidence already closes it.
      const commitVerified = evidence.some(
        (ev) =>
          ev.status === "verified" &&
          ev.source === "git:local_commit" &&
          ev.bindings.executionContractId === contract.executionContractId &&
          ev.bindings.projectId === contract.projectId,
      );
      if (!commitVerified) {
        return {
          ok: true,
          profile: localCommitProfile(
            "progressive_commit_outstanding",
            prior.prior,
          ),
        };
      }
      // Post local-commit: GCEC-PUSH not ready — fail closed (CR-06 / AP-13).
      return { ok: false, reason: "attempt_profile_effect_not_supported" };
    }

    if (hasFs && !hasCommit) {
      return {
        ok: true,
        profile: docsWriteProfile("docs_write_only_contract"),
      };
    }

    if (hasCommit && !hasFs) {
      return resolveLocalCommitOrFail(input, "commit_only_contract");
    }

    return { ok: false, reason: "attempt_profile_effect_not_supported" };
  }

  // Non-M4 / RO / W3A / other → preserve historical contract quartet matching.
  if (
    !contract.action?.trim() ||
    !contract.target?.trim() ||
    !contract.scope?.trim()
  ) {
    return { ok: false, reason: "attempt_profile_zero_eligible" };
  }
  return {
    ok: true,
    profile: contractLegacyProfile(contract, "non_progressive_contract_quartet"),
  };
}
