/**
 * CR-GCEC-06 — git effect application actions (one effect each).
 * Mutating effects require a real Confirmation id (confirmed, in-scope, not expired).
 */
import type { Digest } from "@/lib/oa/doctrine";
import type {
  Confirmation,
  ConfirmationRepositoryPort,
} from "@/lib/oa/decision";
import type { EvidenceReviewServices } from "@/lib/oa/evidence-review";
import {
  buildTypedGitEvidenceFields,
  type TypedGitEvidenceSource,
} from "@/lib/oa/evidence-review";
import type {
  GitCiStatusPort,
  GitMergePort,
  GitPullRequestPort,
  GitRemotePushPort,
  GitReviewStatusPort,
  LocalGitCommitPort,
  PostMergeVerifyPort,
} from "../types";
import { verifyPostMerge } from "../postMergeVerify";

export type GitEffectActor = {
  actorId: string;
  role: string;
  displayName?: string;
  authorityLevel?: string;
};

export type GitEffectBindings = {
  projectId: string;
  cycleInstanceId: string;
  executionContractId?: string;
  executionAttemptId?: string;
};

async function assertConfirmed(
  confirmations: ConfirmationRepositoryPort | undefined,
  confirmationId: string | undefined,
  scopeNeedle: string,
  nowIso: string,
): Promise<{ ok: true; confirmation: Confirmation } | { ok: false; reason: string }> {
  if (!confirmationId?.trim()) {
    return { ok: false, reason: "confirmation_id_required" };
  }
  if (!confirmations) {
    return { ok: false, reason: "confirmation_repository_required" };
  }
  const c = await confirmations.findById(confirmationId.trim());
  if (!c) return { ok: false, reason: "confirmation_not_found" };
  if (c.status !== "granted") {
    return { ok: false, reason: "confirmation_not_confirmed" };
  }
  if (c.expiresAt && c.expiresAt < nowIso) {
    return { ok: false, reason: "confirmation_expired" };
  }
  if (!c.scope.includes(scopeNeedle) && c.actionRef !== scopeNeedle) {
    return { ok: false, reason: "confirmation_scope_mismatch" };
  }
  return { ok: true, confirmation: c };
}

async function registerTypedGitEvidence(input: {
  services: EvidenceReviewServices;
  evidenceId: string;
  source: TypedGitEvidenceSource;
  payload: Record<string, unknown>;
  bindings: GitEffectBindings;
  actor: GitEffectActor;
  nowIso?: string;
}): Promise<{ ok: true; evidenceId: string } | { ok: false; reason: string }> {
  const built = buildTypedGitEvidenceFields(
    input.source,
    input.payload as never,
  );
  if (!built.ok) return { ok: false, reason: built.reason };

  const result = await input.services.registerEvidence.execute({
    evidenceId: input.evidenceId,
    idempotencyKey: `idem:${input.evidenceId}`,
    actor: input.actor as never,
    type: "other",
    source: built.fields.source,
    sourceKind: "external",
    classification: "internal",
    storageMode: "metadata_only",
    status: "available",
    location: built.fields.location,
    digest: built.fields.digest,
    bindings: {
      projectId: input.bindings.projectId,
      cycleInstanceId: input.bindings.cycleInstanceId,
      ...(input.bindings.executionContractId
        ? { executionContractId: input.bindings.executionContractId }
        : {}),
      ...(input.bindings.executionAttemptId
        ? { executionAttemptId: input.bindings.executionAttemptId }
        : {}),
    },
    nowIso: input.nowIso,
  });
  if (!result.ok) {
    return { ok: false, reason: result.error.detailCode };
  }
  return { ok: true, evidenceId: input.evidenceId };
}

export async function commitArtifactEvidence(input: {
  commitPort: LocalGitCommitPort;
  evidenceServices: EvidenceReviewServices;
  repoPath: string;
  repositoryRef: string;
  paths: string[];
  message: string;
  bindings: GitEffectBindings;
  actor: GitEffectActor;
  confirmationId?: string;
  confirmations?: ConfirmationRepositoryPort;
  nowIso?: string;
}): Promise<{ ok: true; evidenceId: string; commitSha: string } | { ok: false; reason: string }> {
  const nowIso = input.nowIso ?? new Date().toISOString();
  const conf = await assertConfirmed(
    input.confirmations,
    input.confirmationId,
    "git:local_commit",
    nowIso,
  );
  if (!conf.ok) return conf;

  const committed = await input.commitPort.commit({
    repoPath: input.repoPath,
    message: input.message,
    paths: input.paths,
  });
  const evidenceId = `ev:git-commit:${committed.commitSha.slice(0, 12)}`;
  const reg = await registerTypedGitEvidence({
    services: input.evidenceServices,
    evidenceId,
    source: "git:local_commit",
    payload: {
      repositoryRef: input.repositoryRef,
      commitSha: committed.commitSha,
      message: committed.message,
    },
    bindings: input.bindings,
    actor: input.actor,
    nowIso,
  });
  if (!reg.ok) return reg;
  return { ok: true, evidenceId, commitSha: committed.commitSha };
}

export async function pushBranchEvidence(input: {
  pushPort: GitRemotePushPort;
  evidenceServices: EvidenceReviewServices;
  repositoryRef: string;
  remote: string;
  refName: string;
  commitSha: string;
  bindings: GitEffectBindings;
  actor: GitEffectActor;
  confirmationId?: string;
  confirmations?: ConfirmationRepositoryPort;
  nowIso?: string;
}): Promise<{ ok: true; evidenceId: string } | { ok: false; reason: string }> {
  const nowIso = input.nowIso ?? new Date().toISOString();
  const conf = await assertConfirmed(
    input.confirmations,
    input.confirmationId,
    "git:remote_push",
    nowIso,
  );
  if (!conf.ok) return conf;

  const pushed = await input.pushPort.push({
    repositoryRef: input.repositoryRef,
    remote: input.remote,
    refName: input.refName,
    commitSha: input.commitSha,
  });
  const evidenceId = `ev:git-push:${pushed.commitSha.slice(0, 12)}`;
  return registerTypedGitEvidence({
    services: input.evidenceServices,
    evidenceId,
    source: "git:remote_push",
    payload: {
      repositoryRef: input.repositoryRef,
      remote: pushed.remote,
      refName: pushed.refName,
      commitSha: pushed.commitSha,
    },
    bindings: input.bindings,
    actor: input.actor,
    nowIso,
  });
}

export async function openPullRequestEvidence(input: {
  prPort: GitPullRequestPort;
  evidenceServices: EvidenceReviewServices;
  repositoryRef: string;
  title: string;
  headRef: string;
  baseRef: string;
  bindings: GitEffectBindings;
  actor: GitEffectActor;
  confirmationId?: string;
  confirmations?: ConfirmationRepositoryPort;
  nowIso?: string;
}): Promise<
  | { ok: true; evidenceId: string; prNumber: number; headSha: string }
  | { ok: false; reason: string }
> {
  const nowIso = input.nowIso ?? new Date().toISOString();
  const conf = await assertConfirmed(
    input.confirmations,
    input.confirmationId,
    "git:pull_request",
    nowIso,
  );
  if (!conf.ok) return conf;

  const pr = await input.prPort.openPullRequest({
    repositoryRef: input.repositoryRef,
    title: input.title,
    headRef: input.headRef,
    baseRef: input.baseRef,
  });
  const evidenceId = `ev:git-pr:${pr.prNumber}`;
  const reg = await registerTypedGitEvidence({
    services: input.evidenceServices,
    evidenceId,
    source: "git:pull_request",
    payload: {
      repositoryRef: input.repositoryRef,
      prNumber: pr.prNumber,
      url: pr.url,
      headSha: pr.headSha,
      state: "open",
    },
    bindings: input.bindings,
    actor: input.actor,
    nowIso,
  });
  if (!reg.ok) return reg;
  return { ok: true, evidenceId, prNumber: pr.prNumber, headSha: pr.headSha };
}

export async function recordCiStatusEvidence(input: {
  ciPort: GitCiStatusPort;
  evidenceServices: EvidenceReviewServices;
  repositoryRef: string;
  commitSha: string;
  bindings: GitEffectBindings;
  actor: GitEffectActor;
  nowIso?: string;
  /** Test inject — skip live CI read. */
  forcedConclusion?: "success" | "failure" | "pending";
}): Promise<{ ok: true; evidenceId: string; conclusion: string } | { ok: false; reason: string }> {
  const nowIso = input.nowIso ?? new Date().toISOString();
  const status =
    input.forcedConclusion != null
      ? { conclusion: input.forcedConclusion }
      : await input.ciPort.getCiStatus({
          repositoryRef: input.repositoryRef,
          commitSha: input.commitSha,
        });
  const evidenceId = `ev:git-ci:${input.commitSha.slice(0, 12)}`;
  const reg = await registerTypedGitEvidence({
    services: input.evidenceServices,
    evidenceId,
    source: "git:ci_status",
    payload: {
      repositoryRef: input.repositoryRef,
      commitSha: input.commitSha,
      conclusion: status.conclusion,
      checkName: status.checkName,
    },
    bindings: input.bindings,
    actor: input.actor,
    nowIso,
  });
  if (!reg.ok) return reg;
  return { ok: true, evidenceId, conclusion: status.conclusion };
}

export async function recordReviewStatusEvidence(input: {
  reviewPort: GitReviewStatusPort;
  evidenceServices: EvidenceReviewServices;
  repositoryRef: string;
  prNumber: number;
  bindings: GitEffectBindings;
  actor: GitEffectActor;
  nowIso?: string;
  forcedState?: "approved" | "changes_requested" | "commented" | "pending";
}): Promise<{ ok: true; evidenceId: string; state: string } | { ok: false; reason: string }> {
  const nowIso = input.nowIso ?? new Date().toISOString();
  const status =
    input.forcedState != null
      ? { state: input.forcedState }
      : await input.reviewPort.getReviewStatus({
          repositoryRef: input.repositoryRef,
          prNumber: input.prNumber,
        });
  const evidenceId = `ev:git-review:${input.prNumber}`;
  const reg = await registerTypedGitEvidence({
    services: input.evidenceServices,
    evidenceId,
    source: "git:review_status",
    payload: {
      repositoryRef: input.repositoryRef,
      prNumber: input.prNumber,
      state: status.state,
    },
    bindings: input.bindings,
    actor: input.actor,
    nowIso,
  });
  if (!reg.ok) return reg;
  return { ok: true, evidenceId, state: status.state };
}

export async function mergePullRequestEvidence(input: {
  mergePort: GitMergePort;
  evidenceServices: EvidenceReviewServices;
  repositoryRef: string;
  prNumber: number;
  confirmationId: string;
  confirmations: ConfirmationRepositoryPort;
  bindings: GitEffectBindings;
  actor: GitEffectActor;
  nowIso?: string;
}): Promise<
  | { ok: true; evidenceId: string; mergeCommitSha: string }
  | { ok: false; reason: string }
> {
  const nowIso = input.nowIso ?? new Date().toISOString();
  const conf = await assertConfirmed(
    input.confirmations,
    input.confirmationId,
    "git:merge",
    nowIso,
  );
  if (!conf.ok) return conf;

  const merged = await input.mergePort.mergePullRequest({
    repositoryRef: input.repositoryRef,
    prNumber: input.prNumber,
    mergeConfirmationId: input.confirmationId,
  });
  const evidenceId = `ev:git-merge:${merged.mergeCommitSha.slice(0, 12)}`;
  const reg = await registerTypedGitEvidence({
    services: input.evidenceServices,
    evidenceId,
    source: "git:merge",
    payload: {
      repositoryRef: input.repositoryRef,
      mergeCommitSha: merged.mergeCommitSha,
      baseRef: merged.baseRef,
      prNumber: merged.prNumber,
    },
    bindings: input.bindings,
    actor: input.actor,
    nowIso,
  });
  if (!reg.ok) return reg;
  return {
    ok: true,
    evidenceId,
    mergeCommitSha: merged.mergeCommitSha,
  };
}

export async function verifyPostMergeEvidence(input: {
  evidenceServices: EvidenceReviewServices;
  repositoryRef: string;
  targetBranch: string;
  targetSha: string;
  artifactPath: string;
  artifactDigest: Digest;
  expectedTargetSha: string;
  observedTargetSha: string;
  expectedArtifactDigest: Digest;
  observedArtifactDigest: Digest;
  bindings: GitEffectBindings;
  actor: GitEffectActor;
  nowIso?: string;
  verifyPort?: PostMergeVerifyPort;
}): Promise<{ ok: true; evidenceId: string } | { ok: false; reason: string }> {
  const nowIso = input.nowIso ?? new Date().toISOString();
  const verify = input.verifyPort?.verify ?? verifyPostMerge;
  const result = verify({
    expectedTargetSha: input.expectedTargetSha,
    observedTargetSha: input.observedTargetSha,
    expectedArtifactDigest: input.expectedArtifactDigest,
    observedArtifactDigest: input.observedArtifactDigest,
    artifactPath: input.artifactPath,
  });
  if (!result.ok) {
    return { ok: false, reason: result.reasons.join(",") || "post_merge_failed" };
  }
  const evidenceId = `ev:git-post-merge:${input.targetSha.slice(0, 12)}`;
  return registerTypedGitEvidence({
    services: input.evidenceServices,
    evidenceId,
    source: "git:post_merge_verification",
    payload: {
      repositoryRef: input.repositoryRef,
      targetBranch: input.targetBranch,
      targetSha: input.targetSha,
      artifactPath: input.artifactPath,
      artifactDigest: input.artifactDigest,
    },
    bindings: input.bindings,
    actor: input.actor,
    nowIso,
  });
}
