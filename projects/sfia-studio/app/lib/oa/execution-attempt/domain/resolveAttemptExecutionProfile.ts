/**
 * D-GCEC-AGENT-01 — AttemptExecutionProfile (non-persistent).
 * CORR-D-GCEC-AGENT-01 / GCEC-GIT-LIFECYCLE-E2E-01 PATH B:
 * progressive docs-write → local-commit → remote_push → pr_create → pr_merge.
 *
 * Server-derived executor sufficiency for THIS Attempt's current eligible slice.
 * NOT an authority source, NOT client-authoritative, NOT persisted.
 *
 * Selection and Start MUST use this same resolver.
 * Profile eligibility ≠ merge GO (Confirmation still required at Start/slice).
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
import {
  M4_BOUNDED_REMOTE_PUSH_ACTION,
  M4_BOUNDED_REMOTE_PUSH_CAPABILITY,
  M4_BOUNDED_REMOTE_PUSH_SCOPE,
  M4_BOUNDED_REMOTE_PUSH_TARGET,
} from "../infrastructure/m4BoundedRemotePushCursorAgent";
import {
  M4_BOUNDED_PR_CREATE_ACTION,
  M4_BOUNDED_PR_CREATE_CAPABILITY,
  M4_BOUNDED_PR_CREATE_SCOPE,
  M4_BOUNDED_PR_CREATE_TARGET,
} from "../infrastructure/m4BoundedPrCreateCursorAgent";
import {
  M4_BOUNDED_PR_MERGE_ACTION,
  M4_BOUNDED_PR_MERGE_CAPABILITY,
  M4_BOUNDED_PR_MERGE_SCOPE,
  M4_BOUNDED_PR_MERGE_TARGET,
} from "../infrastructure/m4BoundedPrMergeCursorAgent";
import type { CursorAuthorizedEffectId } from "./cursorExecutionReport";
import {
  resolveVerifiedDocsWritePriorAttempt,
  type VerifiedDocsWritePriorAttempt,
} from "./resolveVerifiedDocsWritePriorAttempt";
import {
  resolveVerifiedLocalCommitPriorAttempt,
  type VerifiedLocalCommitPriorAttempt,
} from "./resolveVerifiedLocalCommitPriorAttempt";
import {
  resolveVerifiedRemotePushPriorAttempt,
  type VerifiedRemotePushPriorAttempt,
} from "./resolveVerifiedRemotePushPriorAttempt";
import { resolveVerifiedPullRequestNumber } from "./resolveGitEffectTarget";

export type AttemptExecutionProfileKind =
  | "docs_write"
  | "local_commit"
  | "remote_push"
  | "pr_create"
  | "pr_merge"
  | "contract_legacy";

/** Non-persistent lineage facts for progressive profiles. */
export type AttemptExecutionProfileLineage = {
  readonly priorAttemptId: string;
  readonly evidenceId: string;
  readonly artifactPath?: string;
  readonly artifactDigest?: string;
  readonly commitSha?: string;
  readonly prNumber?: number;
};

export type AttemptExecutionProfile = {
  readonly kind: AttemptExecutionProfileKind;
  /** Exact AgentMatchCriteria for registry / Start revalidation. */
  readonly criteria: AgentMatchCriteria;
  /** Human-readable derivation reason (audit / tests). */
  readonly reason: string;
  /** Eligible effect class for this Attempt (informational). */
  readonly effectClass:
    | "filesystem"
    | "git.commit"
    | "git.push"
    | "github.pr.create"
    | "github.pr.merge"
    | "contract_legacy";
  /** Present when kind has verified prior lineage. */
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

/** Only github.pr.update remains permanently unsupported in M4 progressive. */
const UNSUPPORTED_M4_PROTECTED: ReadonlySet<CursorAuthorizedEffectId> = new Set([
  "github.pr.update",
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

function remotePushProfile(
  reason: string,
  prior: VerifiedLocalCommitPriorAttempt,
): AttemptExecutionProfile {
  return {
    kind: "remote_push",
    effectClass: "git.push",
    reason,
    lineage: {
      priorAttemptId: prior.priorAttemptId,
      evidenceId: prior.evidenceId,
      commitSha: prior.commitSha,
    },
    criteria: {
      requiredCapabilities: [M4_BOUNDED_REMOTE_PUSH_CAPABILITY],
      action: M4_BOUNDED_REMOTE_PUSH_ACTION,
      target: M4_BOUNDED_REMOTE_PUSH_TARGET,
      scope: M4_BOUNDED_REMOTE_PUSH_SCOPE,
    },
  };
}

function prCreateProfile(
  reason: string,
  prior: VerifiedRemotePushPriorAttempt,
): AttemptExecutionProfile {
  return {
    kind: "pr_create",
    effectClass: "github.pr.create",
    reason,
    lineage: {
      priorAttemptId: prior.priorAttemptId,
      evidenceId: prior.evidenceId,
      commitSha: prior.commitSha,
    },
    criteria: {
      requiredCapabilities: [M4_BOUNDED_PR_CREATE_CAPABILITY],
      action: M4_BOUNDED_PR_CREATE_ACTION,
      target: M4_BOUNDED_PR_CREATE_TARGET,
      scope: M4_BOUNDED_PR_CREATE_SCOPE,
    },
  };
}

function prMergeProfile(
  reason: string,
  prNumber: number,
  evidenceId?: string,
  priorAttemptId?: string,
  headSha?: string,
): AttemptExecutionProfile {
  return {
    kind: "pr_merge",
    effectClass: "github.pr.merge",
    reason,
    lineage: {
      priorAttemptId: priorAttemptId ?? "",
      evidenceId: evidenceId ?? "",
      prNumber,
      ...(headSha ? { commitSha: headSha } : {}),
    },
    criteria: {
      requiredCapabilities: [M4_BOUNDED_PR_MERGE_CAPABILITY],
      action: M4_BOUNDED_PR_MERGE_ACTION,
      target: M4_BOUNDED_PR_MERGE_TARGET,
      scope: M4_BOUNDED_PR_MERGE_SCOPE,
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

type UniqueEffectClass =
  | "filesystem"
  | "git.commit"
  | "git.push"
  | "github.pr.create"
  | "github.pr.merge"
  | "unsupported_protected"
  | "other"
  | "empty"
  | "mixed";

function uniqueAuthorizedEffectClass(
  effects: readonly CursorAuthorizedEffectId[],
): UniqueEffectClass {
  const set = new Set(effects);
  if (set.size === 0) return "empty";
  const fs = [...set].filter(
    (e) => e === "filesystem.create" || e === "filesystem.modify",
  );
  const commit = set.has("git.commit");
  const push = set.has("git.push");
  const prCreate = set.has("github.pr.create");
  const prMerge = set.has("github.pr.merge");
  const unsupported = [...set].filter((e) => UNSUPPORTED_M4_PROTECTED.has(e));
  const known =
    (fs.length > 0 ? 1 : 0) +
    (commit ? 1 : 0) +
    (push ? 1 : 0) +
    (prCreate ? 1 : 0) +
    (prMerge ? 1 : 0);
  const other = [...set].filter(
    (e) =>
      e !== "filesystem.create" &&
      e !== "filesystem.modify" &&
      e !== "git.commit" &&
      e !== "git.push" &&
      e !== "github.pr.create" &&
      e !== "github.pr.merge" &&
      e !== "validation.run" &&
      !UNSUPPORTED_M4_PROTECTED.has(e),
  );
  if (unsupported.length > 0) {
    if (known > 0 || other.length > 0) return "mixed";
    return "unsupported_protected";
  }
  if (other.length > 0 && known > 0) return "mixed";
  if (other.length > 0) return "other";
  if (known > 1) return "mixed";
  if (commit) return "git.commit";
  if (push) return "git.push";
  if (prCreate) return "github.pr.create";
  if (prMerge) return "github.pr.merge";
  if (fs.length > 0) return "filesystem";
  return "other";
}

function requireEvidenceReader(
  input: ResolveAttemptExecutionProfileInput,
): ResolveAttemptExecutionProfileResult | null {
  if (input.evidenceReaderAvailable === false) {
    return { ok: false, reason: "attempt_profile_evidence_reader_unavailable" };
  }
  return null;
}

function resolveLocalCommitOrFail(
  input: ResolveAttemptExecutionProfileInput,
  reason: string,
): ResolveAttemptExecutionProfileResult {
  const reader = requireEvidenceReader(input);
  if (reader) return reader;
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

function resolveRemotePushOrFail(
  input: ResolveAttemptExecutionProfileInput,
  reason: string,
): ResolveAttemptExecutionProfileResult {
  const reader = requireEvidenceReader(input);
  if (reader) return reader;
  const prior = resolveVerifiedLocalCommitPriorAttempt({
    contract: input.contract,
    attempts: input.attempts ?? [],
    evidence: input.evidence ?? [],
  });
  if (!prior.ok) {
    if (prior.reason === "local_commit_prior_none") {
      return {
        ok: false,
        reason: "attempt_profile_push_without_verified_commit_lineage",
      };
    }
    if (prior.reason === "local_commit_prior_ambiguous") {
      return {
        ok: false,
        reason: "attempt_profile_local_commit_prior_ambiguous",
      };
    }
    return {
      ok: false,
      reason: "attempt_profile_local_commit_prior_incomplete",
    };
  }
  return {
    ok: true,
    profile: remotePushProfile(reason, prior.prior),
  };
}

function resolvePrCreateOrFail(
  input: ResolveAttemptExecutionProfileInput,
  reason: string,
): ResolveAttemptExecutionProfileResult {
  const reader = requireEvidenceReader(input);
  if (reader) return reader;
  const prior = resolveVerifiedRemotePushPriorAttempt({
    contract: input.contract,
    attempts: input.attempts ?? [],
    evidence: input.evidence ?? [],
  });
  if (!prior.ok) {
    if (prior.reason === "remote_push_prior_none") {
      return {
        ok: false,
        reason: "attempt_profile_pr_create_without_verified_push_lineage",
      };
    }
    if (prior.reason === "remote_push_prior_ambiguous") {
      return {
        ok: false,
        reason: "attempt_profile_remote_push_prior_ambiguous",
      };
    }
    return {
      ok: false,
      reason: "attempt_profile_remote_push_prior_incomplete",
    };
  }
  return {
    ok: true,
    profile: prCreateProfile(reason, prior.prior),
  };
}

function resolvePrMergeOrFail(
  input: ResolveAttemptExecutionProfileInput,
  reason: string,
): ResolveAttemptExecutionProfileResult {
  const reader = requireEvidenceReader(input);
  if (reader) return reader;
  const evidence = input.evidence ?? [];
  const repoFromInputs =
    input.contract.inputs &&
    typeof input.contract.inputs === "object" &&
    typeof (input.contract.inputs as { repositoryRef?: unknown }).repositoryRef ===
      "string"
      ? String(
          (input.contract.inputs as { repositoryRef: string }).repositoryRef,
        ).trim()
      : "";
  // Prefer repository from verified push Evidence; fall back to inputs.
  const pushPrior = resolveVerifiedRemotePushPriorAttempt({
    contract: input.contract,
    attempts: input.attempts ?? [],
    evidence,
  });
  const repositoryRef =
    (pushPrior.ok ? pushPrior.prior.repositoryRef : "") || repoFromInputs;
  if (!repositoryRef) {
    return {
      ok: false,
      reason: "attempt_profile_pr_merge_without_verified_pr_identity",
    };
  }
  const pr = resolveVerifiedPullRequestNumber({
    evidence,
    projectId: input.contract.projectId,
    cycleInstanceId: input.contract.cycleInstanceId,
    executionContractId: input.contract.executionContractId,
    repositoryRef,
  });
  if (!pr.ok) {
    return {
      ok: false,
      reason: "attempt_profile_pr_merge_without_verified_pr_identity",
    };
  }
  // AC-04 — merge path requires complete open identity.
  if (
    pr.state !== "open" ||
    !pr.headBranch.trim() ||
    !pr.headSha.trim() ||
    !pr.baseBranch.trim()
  ) {
    return {
      ok: false,
      reason: "attempt_profile_pr_merge_without_verified_pr_identity",
    };
  }
  const prEv = evidence.find(
    (ev) =>
      ev.status === "verified" &&
      ev.source === "git:pull_request" &&
      ev.bindings.executionContractId === input.contract.executionContractId &&
      String(ev.location ?? "").includes(`prNumber=${pr.prNumber}`),
  );
  return {
    ok: true,
    profile: prMergeProfile(
      reason,
      pr.prNumber,
      prEv?.evidenceId,
      prEv?.bindings.executionAttemptId,
      pr.headSha,
    ),
  };
}

function evidenceVerifiedForSource(
  evidence: readonly Evidence[],
  contract: ResolveAttemptExecutionProfileInput["contract"],
  source: string,
): boolean {
  return evidence.some(
    (ev) =>
      ev.status === "verified" &&
      ev.source === source &&
      ev.bindings.executionContractId === contract.executionContractId &&
      ev.bindings.projectId === contract.projectId,
  );
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
  const hasPush = executable.includes("git.push");
  const hasPr = executable.includes("github.pr.create");
  const hasMerge = executable.includes("github.pr.merge");
  const hasUnsupportedProtected = executable.some((e) =>
    UNSUPPORTED_M4_PROTECTED.has(e as CursorAuthorizedEffectId),
  );

  const isM4DocsWriteContract =
    contract.action === M4_BOUNDED_DOCS_WRITE_ACTION &&
    (contract.requiredCapabilities ?? []).includes(
      M4_BOUNDED_DOCS_WRITE_CAPABILITY,
    );

  // When Start provides server-derived authorizedEffects, use them to confirm
  // the unique slice — still require exact prior lineage for progressive steps.
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
    if (cls === "git.push") {
      return resolveRemotePushOrFail(input, "authorized_slice_git_push");
    }
    if (cls === "github.pr.create") {
      return resolvePrCreateOrFail(input, "authorized_slice_pr_create");
    }
    if (cls === "github.pr.merge") {
      return resolvePrMergeOrFail(input, "authorized_slice_pr_merge");
    }
    // validation-only / unknown under M4 progressive — fail closed (CR-06).
    return { ok: false, reason: "attempt_profile_effect_not_supported" };
  }

  // Selection-time / restart: durable Evidence only.
  if (
    isM4DocsWriteContract &&
    (hasFs || hasCommit || hasPush || hasPr || hasMerge || hasUnsupportedProtected)
  ) {
    // Progressive M4 path — never fall back to contract_legacy for later effects.
    if (
      hasUnsupportedProtected &&
      !hasFs &&
      !hasCommit &&
      !hasPush &&
      !hasPr &&
      !hasMerge
    ) {
      return { ok: false, reason: "attempt_profile_effect_not_supported" };
    }

    if (hasFs && (hasCommit || hasPush || hasPr || hasMerge)) {
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

      const commitVerified = evidenceVerifiedForSource(
        evidence,
        contract,
        "git:local_commit",
      );
      if (hasCommit && !commitVerified) {
        return {
          ok: true,
          profile: localCommitProfile(
            "progressive_commit_outstanding",
            prior.prior,
          ),
        };
      }

      // After commitVerified (or commit not required): progressive C→D→E.
      if (hasPush) {
        const pushVerified = evidenceVerifiedForSource(
          evidence,
          contract,
          "git:remote_push",
        );
        if (!pushVerified) {
          return resolveRemotePushOrFail(
            input,
            "progressive_push_outstanding",
          );
        }
      }
      if (hasPr) {
        const prVerified = evidenceVerifiedForSource(
          evidence,
          contract,
          "git:pull_request",
        );
        if (!prVerified) {
          return resolvePrCreateOrFail(
            input,
            "progressive_pr_create_outstanding",
          );
        }
      }
      if (hasMerge) {
        const mergeVerified = evidenceVerifiedForSource(
          evidence,
          contract,
          "git:merge",
        );
        if (!mergeVerified) {
          return resolvePrMergeOrFail(
            input,
            "progressive_pr_merge_outstanding",
          );
        }
      }

      // All required progressive Cursor effects satisfied for this EC.
      return {
        ok: false,
        reason: "attempt_profile_lifecycle_slice_exhausted",
      };
    }

    if (hasFs && !hasCommit && !hasPush && !hasPr && !hasMerge) {
      return {
        ok: true,
        profile: docsWriteProfile("docs_write_only_contract"),
      };
    }

    if (hasCommit && !hasFs) {
      return resolveLocalCommitOrFail(input, "commit_only_contract");
    }
    if (hasPush && !hasFs && !hasCommit) {
      return resolveRemotePushOrFail(input, "push_only_contract");
    }
    if (hasPr && !hasFs && !hasCommit && !hasPush) {
      return resolvePrCreateOrFail(input, "pr_create_only_contract");
    }
    if (hasMerge && !hasFs && !hasCommit && !hasPush && !hasPr) {
      return resolvePrMergeOrFail(input, "pr_merge_only_contract");
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
