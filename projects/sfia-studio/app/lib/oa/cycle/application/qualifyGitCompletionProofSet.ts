/**
 * CR-GCEC-05 — qualify a SET of typed git evidence for completion proof.
 * Single-row post_merge alone is NOT enough for GCEC-bound cycles.
 */
import type { Evidence } from "@/lib/oa/evidence-review";
import {
  isTypedGitEvidenceSource,
  type TypedGitEvidenceSource,
} from "@/lib/oa/evidence-review";

export type GitCompletionProofFamily =
  | "git:local_commit"
  | "git:remote_push"
  | "git:pull_request"
  | "git:ci_status"
  | "git:review_status"
  | "git:merge"
  | "git:post_merge_verification";

export const GCEC_GIT_COMPLETION_PROOF_FAMILIES: readonly GitCompletionProofFamily[] =
  [
    "git:local_commit",
    "git:remote_push",
    "git:pull_request",
    "git:ci_status",
    "git:review_status",
    "git:merge",
    "git:post_merge_verification",
  ] as const;

export type QualifyGitCompletionProofSetExpected = {
  repositoryRef: string;
  targetPath: string;
  artifactDigest: string;
  cycleInstanceId: string;
  executionContractId?: string;
  projectId?: string;
};

export type QualifyGitCompletionProofSetResult =
  | { status: "SATISFIED"; present: GitCompletionProofFamily[] }
  | {
      status: "BLOCKING";
      reason: string;
      present: GitCompletionProofFamily[];
      missing: GitCompletionProofFamily[];
    };

function parseLocationQuery(location: string): Record<string, string> {
  const qIndex = location.indexOf("?");
  if (qIndex < 0) return {};
  const query = location.slice(qIndex + 1);
  const out: Record<string, string> = {};
  for (const part of query.split("&")) {
    if (!part) continue;
    const eq = part.indexOf("=");
    if (eq < 0) {
      out[decodeURIComponent(part)] = "";
      continue;
    }
    out[decodeURIComponent(part.slice(0, eq))] = decodeURIComponent(
      part.slice(eq + 1),
    );
  }
  return out;
}

function sourceFamily(source: string): GitCompletionProofFamily | null {
  if (
    source === "git:local_commit" ||
    source === "git:remote_push" ||
    source === "git:pull_request" ||
    source === "git:ci_status" ||
    source === "git:review_status" ||
    source === "git:merge" ||
    source === "git:post_merge_verification"
  ) {
    return source;
  }
  return null;
}

function evidenceMatchesExpected(
  evidence: Evidence,
  expected: QualifyGitCompletionProofSetExpected,
  family: GitCompletionProofFamily,
  requireVerified: boolean,
): { ok: true } | { ok: false; reason: string } {
  if (requireVerified) {
    // D-GCEC-11 — verified Evidence.status OR Studio repository-read verification marker.
    const studioVerified =
      typeof evidence.technicalResultRef === "string" &&
      evidence.technicalResultRef.startsWith("studio:repository_read_verified:");
    if (evidence.status !== "verified" && !studioVerified) {
      return { ok: false, reason: "status_not_verified" };
    }
  } else if (evidence.status !== "available" && evidence.status !== "verified") {
    return { ok: false, reason: "status_not_proof" };
  }
  if (evidence.bindings?.cycleInstanceId !== expected.cycleInstanceId) {
    return { ok: false, reason: "cycle_mismatch" };
  }
  if (
    expected.projectId &&
    evidence.bindings?.projectId &&
    evidence.bindings.projectId !== expected.projectId
  ) {
    return { ok: false, reason: "project_mismatch" };
  }
  if (
    expected.executionContractId &&
    evidence.bindings?.executionContractId &&
    evidence.bindings.executionContractId !== expected.executionContractId
  ) {
    return { ok: false, reason: "contract_mismatch" };
  }

  const loc = evidence.location ?? "";
  const q = parseLocationQuery(loc);
  const repo =
    q.repo ??
    q.repositoryRef ??
    (loc.includes(expected.repositoryRef) ? expected.repositoryRef : "");
  if (repo && repo !== expected.repositoryRef) {
    return { ok: false, reason: "repo_mismatch" };
  }

  if (family === "git:post_merge_verification") {
    const digest = q.digest ?? evidence.digest ?? "";
    if (digest && digest !== expected.artifactDigest) {
      return { ok: false, reason: "digest_mismatch" };
    }
    const artifactPath = q.artifactPath ?? q.targetPath ?? "";
    if (artifactPath && artifactPath !== expected.targetPath) {
      return { ok: false, reason: "target_path_mismatch" };
    }
  }

  if (family === "git:ci_status") {
    const conclusion = (q.conclusion ?? "").toLowerCase();
    if (conclusion && conclusion !== "success") {
      return { ok: false, reason: "ci_not_success" };
    }
  }
  if (family === "git:review_status") {
    const state = (q.state ?? "").toLowerCase();
    if (state && state !== "approved") {
      return { ok: false, reason: "review_not_approved" };
    }
  }

  return { ok: true };
}

/**
 * Qualify the full git completion proof SET for a GCEC-bound cycle.
 * Default requireVerified=true (D-GCEC-11): REPORTED ≠ VERIFIED.
 */
export function qualifyGitCompletionProofSet(input: {
  evidence: readonly Evidence[];
  requirements?: readonly GitCompletionProofFamily[];
  expected: QualifyGitCompletionProofSetExpected;
  /** When true (default), only status=verified rows satisfy. */
  requireVerified?: boolean;
}): QualifyGitCompletionProofSetResult {
  const requireVerified = input.requireVerified !== false;
  const requirements = [
    ...(input.requirements ?? GCEC_GIT_COMPLETION_PROOF_FAMILIES),
  ];
  const present: GitCompletionProofFamily[] = [];
  const missing: GitCompletionProofFamily[] = [];

  // Coherence: commit SHA must match push / PR head when present in locations.
  const shaByFamily = new Map<string, string>();

  for (const family of requirements) {
    const matches = input.evidence.filter((e) => {
      if (!isTypedGitEvidenceSource(e.source)) return false;
      return sourceFamily(e.source) === family;
    });
    if (matches.length === 0) {
      missing.push(family);
      continue;
    }
    let anyOk = false;
    let lastReason = "family_unmatched";
    for (const m of matches) {
      const check = evidenceMatchesExpected(
        m,
        input.expected,
        family,
        requireVerified,
      );
      if (check.ok) {
        const q = parseLocationQuery(m.location ?? "");
        const sha =
          q.commitSha ??
          q.headSha ??
          q.mergeCommitSha ??
          q.targetSha ??
          q.sha ??
          "";
        if (sha) shaByFamily.set(family, sha.toLowerCase());
        anyOk = true;
        break;
      }
      lastReason = check.reason;
    }
    if (!anyOk) {
      return {
        status: "BLOCKING",
        reason: lastReason,
        present,
        missing: [family, ...requirements.filter((f) => !present.includes(f) && f !== family)],
      };
    }
    present.push(family);
  }

  if (missing.length > 0) {
    return {
      status: "BLOCKING",
      reason: "incomplete_git_proof_set",
      present,
      missing,
    };
  }

  // Coherent chain: commit → push → PR head should share the same SHA when present.
  const commitSha = shaByFamily.get("git:local_commit");
  const pushSha = shaByFamily.get("git:remote_push");
  const prSha = shaByFamily.get("git:pull_request");
  const ciSha = shaByFamily.get("git:ci_status");
  if (commitSha && pushSha && commitSha !== pushSha) {
    return {
      status: "BLOCKING",
      reason: "commit_push_sha_incoherent",
      present,
      missing: [],
    };
  }
  if (pushSha && prSha && pushSha !== prSha) {
    return {
      status: "BLOCKING",
      reason: "push_pr_sha_incoherent",
      present,
      missing: [],
    };
  }
  if (prSha && ciSha && prSha !== ciSha) {
    return {
      status: "BLOCKING",
      reason: "pr_ci_sha_incoherent",
      present,
      missing: [],
    };
  }

  return { status: "SATISFIED", present };
}

/** Map evidenceRequirements strings (git:*) onto proof families. */
export function gitProofFamiliesFromRequirements(
  requirements: readonly string[],
): GitCompletionProofFamily[] {
  const out: GitCompletionProofFamily[] = [];
  for (const r of requirements) {
    const t = r.trim();
    // Accept both git:local_commit and git:commit aliases from Nora intent.
    const normalized =
      t === "git:commit"
        ? "git:local_commit"
        : t === "git:push"
          ? "git:remote_push"
          : t;
    if (
      normalized === "git:local_commit" ||
      normalized === "git:remote_push" ||
      normalized === "git:pull_request" ||
      normalized === "git:ci_status" ||
      normalized === "git:review_status" ||
      normalized === "git:merge" ||
      normalized === "git:post_merge_verification"
    ) {
      if (!out.includes(normalized)) out.push(normalized);
    }
  }
  return out.length > 0 ? out : [...GCEC_GIT_COMPLETION_PROOF_FAMILIES];
}

export type { TypedGitEvidenceSource };
