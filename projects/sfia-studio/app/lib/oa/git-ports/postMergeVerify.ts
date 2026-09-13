/**
 * Phase H — pure post-merge verifier (target SHA + artifact digest identity).
 */
import type { PostMergeVerifyInput, PostMergeVerifyOutput } from "./types";

const FULL_SHA = /^[0-9a-f]{40}$/i;
const DIGEST = /^sha256:[a-f0-9]{64}$/i;

export function verifyPostMerge(input: PostMergeVerifyInput): PostMergeVerifyOutput {
  const reasons: string[] = [];
  if (!FULL_SHA.test(input.expectedTargetSha)) {
    reasons.push("expected_target_sha_invalid");
  }
  if (!FULL_SHA.test(input.observedTargetSha)) {
    reasons.push("observed_target_sha_invalid");
  }
  if (!DIGEST.test(input.expectedArtifactDigest)) {
    reasons.push("expected_artifact_digest_invalid");
  }
  if (!DIGEST.test(input.observedArtifactDigest)) {
    reasons.push("observed_artifact_digest_invalid");
  }
  if (!input.artifactPath.trim()) {
    reasons.push("artifact_path_required");
  }
  if (
    FULL_SHA.test(input.expectedTargetSha) &&
    FULL_SHA.test(input.observedTargetSha) &&
    input.expectedTargetSha.toLowerCase() !==
      input.observedTargetSha.toLowerCase()
  ) {
    reasons.push("target_sha_mismatch");
  }
  if (
    DIGEST.test(input.expectedArtifactDigest) &&
    DIGEST.test(input.observedArtifactDigest) &&
    input.expectedArtifactDigest.toLowerCase() !==
      input.observedArtifactDigest.toLowerCase()
  ) {
    reasons.push("artifact_digest_mismatch");
  }
  return { ok: reasons.length === 0, reasons };
}

export const postMergeVerifyPort = {
  verify: verifyPostMerge,
};
