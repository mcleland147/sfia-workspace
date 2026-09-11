/**
 * GCEC ownership realignment — FakeRepositoryReadPorts (READ-ONLY) + verifyPostMerge.
 * D-GCEC-09: Studio must not expose commit/push/PR/merge mutation methods.
 * @vitest-environment node
 */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import type { Digest } from "@/lib/oa/doctrine";
import {
  FakeRepositoryReadPorts,
  GITHUB_CLI_READ_FORBIDDEN_ARGV_TOKENS,
  GithubCliRepositoryReadAdapter,
  verifyPostMerge,
} from "@/lib/oa/git-ports";

const FULL_SHA = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
const OTHER_SHA = "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb";
const DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;
const OTHER_DIGEST =
  "sha256:1111111111111111111111111111111111111111111111111111111111111111" as Digest;

describe("GCEC FakeRepositoryReadPorts (read-only)", () => {
  it("observes seeded PR / CI / review / merge without mutation methods", async () => {
    const ports = new FakeRepositoryReadPorts();
    ports.seedCommit({
      sha: FULL_SHA,
      message: "docs",
      parents: [OTHER_SHA],
    });
    ports.seedBranchHead("gcec/docs", FULL_SHA);
    ports.seedPullRequest({
      number: 1,
      title: "GCEC lot",
      state: "open",
      headSha: FULL_SHA,
      baseBranch: "main",
      url: "https://github.com/acme/widget/pull/1",
    });
    ports.ciByCommit.set(FULL_SHA, {
      conclusion: "success",
      checkName: "fake-ci",
    });
    ports.reviewByPr.set(1, { state: "approved" });
    ports.seedMergeInfo({
      prNumber: 1,
      state: "merged",
      mergeSha: OTHER_SHA,
      targetBranch: "main",
      headSha: FULL_SHA,
    });

    expect(await ports.getCommit({ repositoryRef: "acme/widget", sha: FULL_SHA })).toMatchObject({
      sha: FULL_SHA,
    });
    expect(
      await ports.getBranchHead({
        repositoryRef: "acme/widget",
        branch: "gcec/docs",
      }),
    ).toBe(FULL_SHA);
    expect(
      (await ports.getPullRequest({ repositoryRef: "acme/widget", number: 1 }))
        ?.headSha,
    ).toBe(FULL_SHA);
    expect(
      (await ports.getCiStatus({ repositoryRef: "acme/widget", commitSha: FULL_SHA }))
        .conclusion,
    ).toBe("success");
    expect(
      (
        await ports.getReviewStatus({
          repositoryRef: "acme/widget",
          prNumber: 1,
        })
      ).state,
    ).toBe("approved");
    expect(
      (await ports.getMergeInfo({ repositoryRef: "acme/widget", prNumber: 1 }))
        ?.mergeSha,
    ).toBe(OTHER_SHA);

    // Architecture: FakeRepositoryReadPorts has no mutation methods.
    expect("push" in ports).toBe(false);
    expect("commit" in ports).toBe(false);
    expect("openPullRequest" in ports).toBe(false);
    expect("mergePullRequest" in ports).toBe(false);
  });

  it("GithubCliRepositoryReadAdapter declares no mutation methods", () => {
    const src = fs.readFileSync(
      path.resolve(
        __dirname,
        "../../../lib/oa/git-ports/githubCliRemotePorts.ts",
      ),
      "utf8",
    );
    expect(src).not.toMatch(/\basync push\s*\(/);
    expect(src).not.toMatch(/\basync openPullRequest\s*\(/);
    expect(src).not.toMatch(/\basync mergePullRequest\s*\(/);
    expect(src).not.toMatch(/\basync commit\s*\(/);
    expect(src).not.toMatch(/["']pr["'],\s*["']create["']/);
    expect(src).not.toMatch(/["']pr["'],\s*["']merge["']/);
    expect(src).toMatch(/GITHUB_CLI_READ_FORBIDDEN_ARGV_TOKENS/);
    void GITHUB_CLI_READ_FORBIDDEN_ARGV_TOKENS;
    expect(GithubCliRepositoryReadAdapter.name).toBe(
      "GithubCliRepositoryReadAdapter",
    );
  });
});

describe("verifyPostMerge", () => {
  it("ok when sha + digest match", () => {
    expect(
      verifyPostMerge({
        expectedTargetSha: FULL_SHA,
        observedTargetSha: FULL_SHA,
        expectedArtifactDigest: DIGEST,
        observedArtifactDigest: DIGEST,
        artifactPath: "docs/functional-design.md",
      }).ok,
    ).toBe(true);
  });

  it("fails on digest or sha mismatch", () => {
    expect(
      verifyPostMerge({
        expectedTargetSha: FULL_SHA,
        observedTargetSha: OTHER_SHA,
        expectedArtifactDigest: DIGEST,
        observedArtifactDigest: DIGEST,
        artifactPath: "docs/fd.md",
      }).ok,
    ).toBe(false);
    expect(
      verifyPostMerge({
        expectedTargetSha: FULL_SHA,
        observedTargetSha: FULL_SHA,
        expectedArtifactDigest: DIGEST,
        observedArtifactDigest: OTHER_DIGEST,
        artifactPath: "docs/fd.md",
      }).ok,
    ).toBe(false);
  });
});
