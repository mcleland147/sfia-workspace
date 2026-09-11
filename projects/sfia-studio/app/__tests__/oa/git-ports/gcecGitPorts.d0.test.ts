/**
 * GCEC — FakeGitProviderPorts + verifyPostMerge deterministic proofs.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import type { Digest } from "@/lib/oa/doctrine";
import { FakeGitProviderPorts, verifyPostMerge } from "@/lib/oa/git-ports";

const FULL_SHA = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
const OTHER_SHA = "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb";
const DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;
const OTHER_DIGEST =
  "sha256:1111111111111111111111111111111111111111111111111111111111111111" as Digest;

describe("GCEC FakeGitProviderPorts progression", () => {
  it("push → open PR → CI → review → merge; force push throws", async () => {
    const ports = new FakeGitProviderPorts();
    const commitSha = FULL_SHA;

    const pushed = await ports.push({
      repositoryRef: "acme/widget",
      remote: "origin",
      refName: "refs/heads/feature/gcec",
      commitSha,
    });
    expect(pushed.commitSha).toBe(commitSha);
    expect(ports.pushes).toHaveLength(1);

    await expect(
      ports.push({
        repositoryRef: "acme/widget",
        remote: "origin",
        refName: "refs/heads/feature/gcec",
        commitSha,
        force: true,
      }),
    ).rejects.toThrow("git_force_push_forbidden");

    const pr = await ports.openPullRequest({
      repositoryRef: "acme/widget",
      title: "GCEC lot",
      headRef: "feature/gcec",
      baseRef: "main",
    });
    expect(pr.prNumber).toBe(1);
    expect(pr.url).toContain("/pull/1");
    expect(pr.headSha).toMatch(/^[0-9a-f]{40}$/);

    expect(await ports.getCiStatus({ repositoryRef: "acme/widget", commitSha })).toEqual({
      conclusion: "pending",
      checkName: "fake-ci",
    });
    ports.ciByCommit.set(commitSha, {
      conclusion: "success",
      checkName: "fake-ci",
    });
    expect(
      (await ports.getCiStatus({ repositoryRef: "acme/widget", commitSha }))
        .conclusion,
    ).toBe("success");

    expect(
      await ports.getReviewStatus({
        repositoryRef: "acme/widget",
        prNumber: pr.prNumber,
      }),
    ).toEqual({ state: "pending" });
    ports.reviewByPr.set(pr.prNumber, { state: "approved" });
    expect(
      (
        await ports.getReviewStatus({
          repositoryRef: "acme/widget",
          prNumber: pr.prNumber,
        })
      ).state,
    ).toBe("approved");

    const merged = await ports.mergePullRequest({
      repositoryRef: "acme/widget",
      prNumber: pr.prNumber,
      mergeConfirmationId: "confirm:gcec-merge-1",
    });
    expect(merged.prNumber).toBe(1);
    expect(merged.mergeCommitSha).toMatch(/^[0-9a-f]{40}$/);
    expect(ports.merges).toHaveLength(1);

    await expect(
      ports.mergePullRequest({
        repositoryRef: "acme/widget",
        prNumber: pr.prNumber,
        mergeConfirmationId: "   ",
      }),
    ).rejects.toThrow("git_merge_confirmation_required");
  });
});

describe("GCEC verifyPostMerge", () => {
  it("ok when sha + digest match", () => {
    const out = verifyPostMerge({
      expectedTargetSha: FULL_SHA,
      observedTargetSha: FULL_SHA,
      expectedArtifactDigest: DIGEST,
      observedArtifactDigest: DIGEST,
      artifactPath: "docs/functional-design.md",
    });
    expect(out.ok).toBe(true);
    expect(out.reasons).toEqual([]);
  });

  it("rejects target sha mismatch", () => {
    const out = verifyPostMerge({
      expectedTargetSha: FULL_SHA,
      observedTargetSha: OTHER_SHA,
      expectedArtifactDigest: DIGEST,
      observedArtifactDigest: DIGEST,
      artifactPath: "docs/functional-design.md",
    });
    expect(out.ok).toBe(false);
    expect(out.reasons).toContain("target_sha_mismatch");
  });

  it("rejects artifact digest mismatch", () => {
    const out = verifyPostMerge({
      expectedTargetSha: FULL_SHA,
      observedTargetSha: FULL_SHA,
      expectedArtifactDigest: DIGEST,
      observedArtifactDigest: OTHER_DIGEST,
      artifactPath: "docs/functional-design.md",
    });
    expect(out.ok).toBe(false);
    expect(out.reasons).toContain("artifact_digest_mismatch");
  });
});
