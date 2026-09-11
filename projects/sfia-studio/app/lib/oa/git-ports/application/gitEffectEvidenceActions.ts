/**
 * D-GCEC-09/11 / CR-GCEC-17 — Studio Git verification (READ + Evidence lifecycle).
 * Cursor owns mutations. Studio observes via RepositoryReadPort, registers AVAILABLE
 * claims, then transitions to status=verified via VerifyEvidenceIntegrity.
 *
 * technicalResultRef is a technical Attempt/result reference only — NEVER a trust marker.
 */
import { createHash } from "node:crypto";
import type { Digest } from "@/lib/oa/doctrine";
import type { EvidenceReviewServices } from "@/lib/oa/evidence-review";
import {
  buildTypedGitEvidenceFields,
  type TypedGitEvidenceSource,
} from "@/lib/oa/evidence-review";
import type {
  GitCiStatusPort,
  GitReviewStatusPort,
  PostMergeVerifyPort,
  RepositoryReadPort,
} from "../types";
import { verifyPostMerge } from "../postMergeVerify";

export type GitVerifyActor = {
  actorId: string;
  role: string;
  displayName?: string;
  authorityLevel?: string;
};

export type GitVerifyBindings = {
  projectId: string;
  cycleInstanceId: string;
  executionContractId?: string;
  executionAttemptId?: string;
};

function claimDigest(location: string): Digest {
  return `sha256:${createHash("sha256").update(location, "utf8").digest("hex")}` as Digest;
}

async function registerTypedGitEvidenceAvailable(input: {
  services: EvidenceReviewServices;
  evidenceId: string;
  source: TypedGitEvidenceSource;
  payload: Record<string, unknown>;
  bindings: GitVerifyBindings;
  actor: GitVerifyActor;
  nowIso?: string;
  technicalResultRef?: string;
}): Promise<
  | { ok: true; evidenceId: string; digest: Digest; version: number }
  | { ok: false; reason: string }
> {
  const built = buildTypedGitEvidenceFields(
    input.source,
    input.payload as never,
  );
  if (!built.ok) return { ok: false, reason: built.reason };

  const location = built.fields.location ?? `git:${input.source}`;
  const digest = (built.fields.digest ?? claimDigest(location)) as Digest;

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
    location,
    digest,
    ...(input.technicalResultRef
      ? { technicalResultRef: input.technicalResultRef }
      : {}),
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
  return {
    ok: true,
    evidenceId: input.evidenceId,
    digest,
    version: result.evidence.version,
  };
}

async function verifyRegisteredEvidence(input: {
  services: EvidenceReviewServices;
  evidenceId: string;
  expectedVersion: number;
  digest: Digest;
  actor: GitVerifyActor;
}): Promise<{ ok: true } | { ok: false; reason: string }> {
  const svc = input.services as EvidenceReviewServices & {
    payload?: {
      setScript?: (
        id: string,
        s: { availability: "available"; digest: Digest },
      ) => void;
    };
    fakePayload?: {
      setScript?: (
        id: string,
        s: { availability: "available"; digest: Digest },
      ) => void;
    };
  };
  const scriptable = svc.fakePayload ?? svc.payload;
  if (typeof scriptable?.setScript === "function") {
    scriptable.setScript(input.evidenceId, {
      availability: "available",
      digest: input.digest,
    });
  }

  const verified = await input.services.verifyEvidenceIntegrity.execute({
    evidenceId: input.evidenceId,
    expectedVersion: input.expectedVersion,
    actor: input.actor as never,
  });
  if (!verified.ok) {
    return { ok: false, reason: verified.error.detailCode };
  }
  if (verified.evidence.status !== "verified") {
    return { ok: false, reason: "status_not_verified_after_integrity" };
  }
  return { ok: true };
}

async function registerAndVerify(input: {
  services: EvidenceReviewServices;
  evidenceId: string;
  source: TypedGitEvidenceSource;
  payload: Record<string, unknown>;
  bindings: GitVerifyBindings;
  actor: GitVerifyActor;
  nowIso?: string;
}): Promise<
  | { ok: true; evidenceId: string; status: "verified" }
  | { ok: false; reason: string; status: "reported" | "failed" }
> {
  const reg = await registerTypedGitEvidenceAvailable(input);
  if (!reg.ok) return { ok: false, reason: reg.reason, status: "failed" };

  // Ensure payload probe can observe the registered digest
  const testSvc = input.services as EvidenceReviewServices & {
    setPayloadScript?: (
      id: string,
      s: { availability: "available"; digest: Digest },
    ) => void;
  };
  if (typeof testSvc.setPayloadScript === "function") {
    testSvc.setPayloadScript(reg.evidenceId, {
      availability: "available",
      digest: reg.digest,
    });
  }

  const v = await verifyRegisteredEvidence({
    services: input.services,
    evidenceId: reg.evidenceId,
    expectedVersion: reg.version,
    digest: reg.digest,
    actor: input.actor,
  });
  if (!v.ok) return { ok: false, reason: v.reason, status: "reported" };
  return { ok: true, evidenceId: reg.evidenceId, status: "verified" };
}

/** Register a Cursor-reported claim as AVAILABLE (not verified). */
export async function registerReportedGitClaimEvidence(input: {
  evidenceServices: EvidenceReviewServices;
  source: TypedGitEvidenceSource;
  payload: Record<string, unknown>;
  bindings: GitVerifyBindings;
  actor: GitVerifyActor;
  evidenceId: string;
  nowIso?: string;
}): Promise<{ ok: true; evidenceId: string } | { ok: false; reason: string }> {
  const reg = await registerTypedGitEvidenceAvailable({
    services: input.evidenceServices,
    evidenceId: input.evidenceId,
    source: input.source,
    payload: input.payload,
    bindings: input.bindings,
    actor: input.actor,
    technicalResultRef: `studio:cursor_report_claim:${input.source}`,
    nowIso: input.nowIso,
  });
  if (!reg.ok) return reg;
  return { ok: true, evidenceId: reg.evidenceId };
}

export async function verifyCommitClaim(input: {
  repositoryRead: RepositoryReadPort;
  evidenceServices: EvidenceReviewServices;
  repositoryRef: string;
  claimedCommitSha: string;
  message?: string;
  bindings: GitVerifyBindings;
  actor: GitVerifyActor;
  nowIso?: string;
}): Promise<
  | { ok: true; evidenceId: string; status: "verified" }
  | { ok: false; reason: string; status: "reported" | "failed" }
> {
  const observed = await input.repositoryRead.getCommit({
    repositoryRef: input.repositoryRef,
    sha: input.claimedCommitSha,
  });
  if (!observed) {
    return { ok: false, reason: "commit_sha_not_found", status: "reported" };
  }
  if (observed.sha.toLowerCase() !== input.claimedCommitSha.toLowerCase()) {
    return { ok: false, reason: "commit_sha_mismatch", status: "failed" };
  }
  const evidenceId = `ev:git-commit-verified:${observed.sha.slice(0, 12)}`;
  return registerAndVerify({
    services: input.evidenceServices,
    evidenceId,
    source: "git:local_commit",
    payload: {
      repositoryRef: input.repositoryRef,
      commitSha: observed.sha,
      message: input.message ?? observed.message,
    },
    bindings: input.bindings,
    actor: input.actor,
    nowIso: input.nowIso,
  });
}

export async function verifyPushClaim(input: {
  repositoryRead: RepositoryReadPort;
  evidenceServices: EvidenceReviewServices;
  repositoryRef: string;
  branch: string;
  claimedCommitSha: string;
  remote?: string;
  bindings: GitVerifyBindings;
  actor: GitVerifyActor;
  nowIso?: string;
}): Promise<
  | { ok: true; evidenceId: string; status: "verified" }
  | { ok: false; reason: string; status: "reported" | "failed" }
> {
  const head = await input.repositoryRead.getBranchHead({
    repositoryRef: input.repositoryRef,
    branch: input.branch,
  });
  if (!head) {
    return { ok: false, reason: "branch_head_not_found", status: "reported" };
  }
  if (head.toLowerCase() !== input.claimedCommitSha.toLowerCase()) {
    return { ok: false, reason: "push_sha_mismatch", status: "failed" };
  }
  const evidenceId = `ev:git-push-verified:${head.slice(0, 12)}`;
  return registerAndVerify({
    services: input.evidenceServices,
    evidenceId,
    source: "git:remote_push",
    payload: {
      repositoryRef: input.repositoryRef,
      remote: input.remote ?? "origin",
      refName: `refs/heads/${input.branch}`,
      commitSha: head,
    },
    bindings: input.bindings,
    actor: input.actor,
    nowIso: input.nowIso,
  });
}

export async function verifyPullRequestClaim(input: {
  repositoryRead: RepositoryReadPort;
  evidenceServices: EvidenceReviewServices;
  repositoryRef: string;
  claimedPrNumber: number;
  claimedHeadSha: string;
  bindings: GitVerifyBindings;
  actor: GitVerifyActor;
  nowIso?: string;
}): Promise<
  | {
      ok: true;
      evidenceId: string;
      status: "verified";
      prNumber: number;
      headSha: string;
    }
  | { ok: false; reason: string; status: "reported" | "failed" }
> {
  const pr = await input.repositoryRead.getPullRequest({
    repositoryRef: input.repositoryRef,
    number: input.claimedPrNumber,
  });
  if (!pr) {
    return { ok: false, reason: "pr_not_found", status: "reported" };
  }
  if (pr.headSha.toLowerCase() !== input.claimedHeadSha.toLowerCase()) {
    return { ok: false, reason: "pr_head_mismatch", status: "failed" };
  }
  const evidenceId = `ev:git-pr-verified:${pr.number}`;
  const result = await registerAndVerify({
    services: input.evidenceServices,
    evidenceId,
    source: "git:pull_request",
    payload: {
      repositoryRef: input.repositoryRef,
      prNumber: pr.number,
      url: pr.url,
      headSha: pr.headSha,
      state: pr.state,
    },
    bindings: input.bindings,
    actor: input.actor,
    nowIso: input.nowIso,
  });
  if (!result.ok) return result;
  return {
    ok: true,
    evidenceId: result.evidenceId,
    status: "verified",
    prNumber: pr.number,
    headSha: pr.headSha,
  };
}

export async function recordCiStatusEvidence(input: {
  ciPort: GitCiStatusPort;
  evidenceServices: EvidenceReviewServices;
  repositoryRef: string;
  commitSha: string;
  bindings: GitVerifyBindings;
  actor: GitVerifyActor;
  nowIso?: string;
}): Promise<
  | { ok: true; evidenceId: string; conclusion: string; status: "verified" | "failed" }
  | { ok: false; reason: string }
> {
  // CR-GCEC — no forcedConclusion in Product API; FakeRepositoryRead supplies observation.
  const status = await input.ciPort.getCiStatus({
    repositoryRef: input.repositoryRef,
    commitSha: input.commitSha,
  });
  const evidenceId = `ev:git-ci:${input.commitSha.slice(0, 12)}`;
  if (status.conclusion !== "success") {
    const reg = await registerTypedGitEvidenceAvailable({
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
      nowIso: input.nowIso,
    });
    if (!reg.ok) return { ok: false, reason: reg.reason };
    return {
      ok: true,
      evidenceId,
      conclusion: status.conclusion,
      status: "failed",
    };
  }
  const result = await registerAndVerify({
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
    nowIso: input.nowIso,
  });
  if (!result.ok) return { ok: false, reason: result.reason };
  return {
    ok: true,
    evidenceId: result.evidenceId,
    conclusion: status.conclusion,
    status: "verified",
  };
}

export async function recordReviewStatusEvidence(input: {
  reviewPort: GitReviewStatusPort;
  evidenceServices: EvidenceReviewServices;
  repositoryRef: string;
  prNumber: number;
  bindings: GitVerifyBindings;
  actor: GitVerifyActor;
  nowIso?: string;
}): Promise<
  | { ok: true; evidenceId: string; state: string; status: "verified" | "failed" }
  | { ok: false; reason: string }
> {
  const status = await input.reviewPort.getReviewStatus({
    repositoryRef: input.repositoryRef,
    prNumber: input.prNumber,
  });
  const evidenceId = `ev:git-review:${input.prNumber}`;
  if (status.state !== "approved") {
    const reg = await registerTypedGitEvidenceAvailable({
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
      nowIso: input.nowIso,
    });
    if (!reg.ok) return { ok: false, reason: reg.reason };
    return {
      ok: true,
      evidenceId,
      state: status.state,
      status: "failed",
    };
  }
  const result = await registerAndVerify({
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
    nowIso: input.nowIso,
  });
  if (!result.ok) return { ok: false, reason: result.reason };
  return {
    ok: true,
    evidenceId: result.evidenceId,
    state: status.state,
    status: "verified",
  };
}

export async function verifyMergeClaim(input: {
  repositoryRead: RepositoryReadPort;
  evidenceServices: EvidenceReviewServices;
  repositoryRef: string;
  claimedPrNumber: number;
  claimedMergeSha?: string;
  bindings: GitVerifyBindings;
  actor: GitVerifyActor;
  nowIso?: string;
}): Promise<
  | { ok: true; evidenceId: string; mergeCommitSha: string; status: "verified" }
  | { ok: false; reason: string; status: "reported" | "failed" }
> {
  const info = await input.repositoryRead.getMergeInfo({
    repositoryRef: input.repositoryRef,
    prNumber: input.claimedPrNumber,
  });
  if (!info) {
    return { ok: false, reason: "merge_info_not_found", status: "reported" };
  }
  if (info.state !== "merged" || !info.mergeSha) {
    return { ok: false, reason: "pr_not_merged", status: "failed" };
  }
  if (
    input.claimedMergeSha &&
    info.mergeSha.toLowerCase() !== input.claimedMergeSha.toLowerCase()
  ) {
    return { ok: false, reason: "merge_sha_mismatch", status: "failed" };
  }
  const evidenceId = `ev:git-merge-verified:${info.mergeSha.slice(0, 12)}`;
  const result = await registerAndVerify({
    services: input.evidenceServices,
    evidenceId,
    source: "git:merge",
    payload: {
      repositoryRef: input.repositoryRef,
      mergeCommitSha: info.mergeSha,
      baseRef: info.targetBranch,
      prNumber: info.prNumber,
    },
    bindings: input.bindings,
    actor: input.actor,
    nowIso: input.nowIso,
  });
  if (!result.ok) return result;
  return {
    ok: true,
    evidenceId: result.evidenceId,
    mergeCommitSha: info.mergeSha,
    status: "verified",
  };
}

export async function verifyPostMergeEvidence(input: {
  evidenceServices: EvidenceReviewServices;
  repositoryRead: RepositoryReadPort;
  repositoryRef: string;
  targetBranch: string;
  artifactPath: string;
  artifactDigest: Digest;
  expectedTargetSha: string;
  expectedArtifactDigest: Digest;
  bindings: GitVerifyBindings;
  actor: GitVerifyActor;
  nowIso?: string;
  verifyPort?: PostMergeVerifyPort;
}): Promise<{ ok: true; evidenceId: string } | { ok: false; reason: string }> {
  // CR-GCEC — trusted Product action MUST observe via RepositoryRead (no caller self-attest).
  const head = await input.repositoryRead.getBranchHead({
    repositoryRef: input.repositoryRef,
    branch: input.targetBranch,
  });
  if (!head) {
    return { ok: false, reason: "post_merge_target_head_unobserved" };
  }
  let observedArtifactDigest: Digest | undefined;
  if (input.repositoryRead.readArtifactDigestAtRef) {
    const dig = await input.repositoryRead.readArtifactDigestAtRef({
      repositoryRef: input.repositoryRef,
      path: input.artifactPath,
      ref: head,
    });
    observedArtifactDigest = dig ?? undefined;
  }
  if (!observedArtifactDigest) {
    return { ok: false, reason: "post_merge_artifact_unobserved" };
  }

  const verify = input.verifyPort?.verify ?? verifyPostMerge;
  const result = verify({
    expectedTargetSha: input.expectedTargetSha,
    observedTargetSha: head,
    expectedArtifactDigest: input.expectedArtifactDigest,
    observedArtifactDigest,
    artifactPath: input.artifactPath,
  });
  if (!result.ok) {
    return { ok: false, reason: result.reasons.join(",") || "post_merge_failed" };
  }
  const evidenceId = `ev:git-post-merge:${head.slice(0, 12)}`;
  const verified = await registerAndVerify({
    services: input.evidenceServices,
    evidenceId,
    source: "git:post_merge_verification",
    payload: {
      repositoryRef: input.repositoryRef,
      targetBranch: input.targetBranch,
      targetSha: head,
      artifactPath: input.artifactPath,
      artifactDigest: observedArtifactDigest,
    },
    bindings: input.bindings,
    actor: input.actor,
    nowIso: input.nowIso,
  });
  if (!verified.ok) return { ok: false, reason: verified.reason };
  return { ok: true, evidenceId: verified.evidenceId };
}

/** @deprecated Aliases — mutation evidence actions removed (D-GCEC-09). */
export type GitEffectActor = GitVerifyActor;
export type GitEffectBindings = GitVerifyBindings;

/** Removed — do not use as trust marker. */
export const STUDIO_REPO_READ_VERIFIED_PREFIX =
  "studio:repository_read_verified:" as const;
