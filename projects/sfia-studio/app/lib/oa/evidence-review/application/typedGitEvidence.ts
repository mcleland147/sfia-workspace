/**
 * GCEC D-GCEC-07 — typed Git evidence discriminators on Evidence.source.
 * KEEP EvidenceType enum unchanged. Payloads use location/digest/bindings.
 */
import type { Digest } from "@/lib/oa/doctrine";

export const TYPED_GIT_EVIDENCE_SOURCES = [
  "git:working_tree_diff",
  "git:local_commit",
  "git:remote_push",
  "git:pull_request",
  "git:ci_status",
  "git:review_status",
  "git:merge",
  "git:post_merge_verification",
] as const;

export type TypedGitEvidenceSource = (typeof TYPED_GIT_EVIDENCE_SOURCES)[number];

export type GitWorkingTreeDiffPayload = {
  repositoryRef: string;
  baseSha?: string;
  headSha?: string;
  summary?: string;
  changedPaths?: string[];
};

export type GitLocalCommitPayload = {
  repositoryRef: string;
  commitSha: string;
  message?: string;
  parentSha?: string;
};

export type GitRemotePushPayload = {
  repositoryRef: string;
  remote: string;
  refName: string;
  commitSha: string;
};

export type GitPullRequestPayload = {
  repositoryRef: string;
  prNumber: number;
  url?: string;
  headSha: string;
  baseSha?: string;
  state?: "open" | "closed" | "merged";
};

export type GitCiStatusPayload = {
  repositoryRef: string;
  commitSha: string;
  conclusion: "success" | "failure" | "pending" | "neutral" | "cancelled";
  checkName?: string;
  url?: string;
};

export type GitReviewStatusPayload = {
  repositoryRef: string;
  commitSha?: string;
  prNumber?: number;
  state: "approved" | "changes_requested" | "commented" | "pending";
};

export type GitMergePayload = {
  repositoryRef: string;
  mergeCommitSha: string;
  baseRef: string;
  headRef?: string;
  prNumber?: number;
};

export type GitPostMergeVerificationPayload = {
  repositoryRef: string;
  targetBranch: string;
  targetSha: string;
  artifactPath: string;
  artifactDigest: Digest;
};

export type TypedGitEvidencePayloadBySource = {
  "git:working_tree_diff": GitWorkingTreeDiffPayload;
  "git:local_commit": GitLocalCommitPayload;
  "git:remote_push": GitRemotePushPayload;
  "git:pull_request": GitPullRequestPayload;
  "git:ci_status": GitCiStatusPayload;
  "git:review_status": GitReviewStatusPayload;
  "git:merge": GitMergePayload;
  "git:post_merge_verification": GitPostMergeVerificationPayload;
};

export type TypedGitEvidenceFields = {
  source: TypedGitEvidenceSource;
  location?: string;
  digest?: Digest;
};

const SOURCE_SET: ReadonlySet<string> = new Set(TYPED_GIT_EVIDENCE_SOURCES);

export function isTypedGitEvidenceSource(
  source: string | null | undefined,
): source is TypedGitEvidenceSource {
  return typeof source === "string" && SOURCE_SET.has(source);
}

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

function isDigest(v: unknown): v is Digest {
  return typeof v === "string" && /^sha256:[a-f0-9]{64}$/i.test(v);
}

function isFullSha(v: unknown): v is string {
  return typeof v === "string" && /^[0-9a-f]{40}$/i.test(v.trim());
}

export function validateTypedGitEvidencePayload(
  source: TypedGitEvidenceSource,
  payload: unknown,
): { ok: true } | { ok: false; reason: string } {
  if (!payload || typeof payload !== "object") {
    return { ok: false, reason: "payload_not_object" };
  }
  const p = payload as Record<string, unknown>;
  switch (source) {
    case "git:working_tree_diff":
      if (!isNonEmptyString(p.repositoryRef)) {
        return { ok: false, reason: "repository_ref_required" };
      }
      return { ok: true };
    case "git:local_commit":
      if (!isNonEmptyString(p.repositoryRef)) {
        return { ok: false, reason: "repository_ref_required" };
      }
      if (!isFullSha(p.commitSha)) {
        return { ok: false, reason: "commit_sha_invalid" };
      }
      return { ok: true };
    case "git:remote_push":
      if (!isNonEmptyString(p.repositoryRef) || !isNonEmptyString(p.remote)) {
        return { ok: false, reason: "repository_or_remote_required" };
      }
      if (!isNonEmptyString(p.refName) || !isFullSha(p.commitSha)) {
        return { ok: false, reason: "ref_or_commit_invalid" };
      }
      return { ok: true };
    case "git:pull_request":
      if (!isNonEmptyString(p.repositoryRef)) {
        return { ok: false, reason: "repository_ref_required" };
      }
      if (typeof p.prNumber !== "number" || !Number.isInteger(p.prNumber) || p.prNumber < 1) {
        return { ok: false, reason: "pr_number_invalid" };
      }
      if (!isFullSha(p.headSha)) {
        return { ok: false, reason: "head_sha_invalid" };
      }
      return { ok: true };
    case "git:ci_status":
      if (!isNonEmptyString(p.repositoryRef) || !isFullSha(p.commitSha)) {
        return { ok: false, reason: "repository_or_commit_invalid" };
      }
      if (
        p.conclusion !== "success" &&
        p.conclusion !== "failure" &&
        p.conclusion !== "pending" &&
        p.conclusion !== "neutral" &&
        p.conclusion !== "cancelled"
      ) {
        return { ok: false, reason: "conclusion_invalid" };
      }
      return { ok: true };
    case "git:review_status":
      if (!isNonEmptyString(p.repositoryRef)) {
        return { ok: false, reason: "repository_ref_required" };
      }
      if (
        p.state !== "approved" &&
        p.state !== "changes_requested" &&
        p.state !== "commented" &&
        p.state !== "pending"
      ) {
        return { ok: false, reason: "review_state_invalid" };
      }
      return { ok: true };
    case "git:merge":
      if (!isNonEmptyString(p.repositoryRef) || !isNonEmptyString(p.baseRef)) {
        return { ok: false, reason: "repository_or_base_ref_required" };
      }
      if (!isFullSha(p.mergeCommitSha)) {
        return { ok: false, reason: "merge_commit_sha_invalid" };
      }
      return { ok: true };
    case "git:post_merge_verification":
      if (
        !isNonEmptyString(p.repositoryRef) ||
        !isNonEmptyString(p.targetBranch) ||
        !isNonEmptyString(p.artifactPath)
      ) {
        return { ok: false, reason: "post_merge_fields_required" };
      }
      if (!isFullSha(p.targetSha)) {
        return { ok: false, reason: "target_sha_invalid" };
      }
      if (!isDigest(p.artifactDigest)) {
        return { ok: false, reason: "artifact_digest_invalid" };
      }
      return { ok: true };
    default: {
      const _exhaustive: never = source;
      void _exhaustive;
      return { ok: false, reason: "unknown_source" };
    }
  }
}

export function buildTypedGitEvidenceFields<S extends TypedGitEvidenceSource>(
  source: S,
  payload: TypedGitEvidencePayloadBySource[S],
):
  | { ok: true; fields: TypedGitEvidenceFields }
  | { ok: false; reason: string } {
  const validated = validateTypedGitEvidencePayload(source, payload);
  if (!validated.ok) return validated;

  let location: string | undefined;
  let digest: Digest | undefined;

  switch (source) {
    case "git:working_tree_diff": {
      const wt = payload as GitWorkingTreeDiffPayload;
      location = `git:working_tree_diff?repo=${encodeURIComponent(wt.repositoryRef)}`;
      break;
    }
    case "git:local_commit": {
      const lc = payload as GitLocalCommitPayload;
      location = `git:local_commit?repo=${encodeURIComponent(lc.repositoryRef)}&commitSha=${encodeURIComponent(lc.commitSha)}`;
      break;
    }
    case "git:remote_push": {
      const rp = payload as GitRemotePushPayload;
      location = `git:remote_push?repo=${encodeURIComponent(rp.repositoryRef)}&remote=${encodeURIComponent(rp.remote)}&refName=${encodeURIComponent(rp.refName)}&commitSha=${encodeURIComponent(rp.commitSha)}`;
      break;
    }
    case "git:pull_request": {
      const pr = payload as GitPullRequestPayload;
      location = `git:pull_request?repo=${encodeURIComponent(pr.repositoryRef)}&prNumber=${encodeURIComponent(String(pr.prNumber))}`;
      break;
    }
    case "git:ci_status": {
      const ci = payload as GitCiStatusPayload;
      location = `git:ci_status?repo=${encodeURIComponent(ci.repositoryRef)}&commitSha=${encodeURIComponent(ci.commitSha)}&conclusion=${encodeURIComponent(ci.conclusion)}`;
      break;
    }
    case "git:review_status": {
      const rv = payload as GitReviewStatusPayload;
      location = `git:review_status?repo=${encodeURIComponent(rv.repositoryRef)}&prNumber=${encodeURIComponent(String(rv.prNumber ?? ""))}&state=${encodeURIComponent(rv.state)}`;
      break;
    }
    case "git:merge": {
      const mg = payload as GitMergePayload;
      location = `git:merge?repo=${encodeURIComponent(mg.repositoryRef)}&mergeCommitSha=${encodeURIComponent(mg.mergeCommitSha)}&prNumber=${encodeURIComponent(String(mg.prNumber ?? ""))}`;
      break;
    }
    case "git:post_merge_verification": {
      const pm = payload as GitPostMergeVerificationPayload;
      location =
        `git:post_merge_verification?repo=${encodeURIComponent(pm.repositoryRef)}` +
        `&targetBranch=${encodeURIComponent(pm.targetBranch)}` +
        `&targetSha=${encodeURIComponent(pm.targetSha)}` +
        `&artifactPath=${encodeURIComponent(pm.artifactPath)}` +
        `&digest=${encodeURIComponent(pm.artifactDigest)}`;
      digest = pm.artifactDigest;
      break;
    }
    default: {
      const _exhaustive: never = source;
      void _exhaustive;
    }
  }

  return {
    ok: true,
    fields: {
      source,
      ...(location ? { location } : {}),
      ...(digest ? { digest } : {}),
    },
  };
}
