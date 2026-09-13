/**
 * GCEC local commit verification — GV (pure facts, no OS Git mutation).
 * CR-GCEC-GITCOMMIT-01 hardenings.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { verifyLocalCommitFacts } from "@/lib/oa/execution-attempt";

const H0 = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
const H1 = "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb";
const H2 = "cccccccccccccccccccccccccccccccccccccccc";
const PATH = "docs/functional-design.md";
const MSG = "docs: add task manager functional design";
const DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622";

function base(
  overrides: Partial<Parameters<typeof verifyLocalCommitFacts>[0]> = {},
) {
  return verifyLocalCommitFacts({
    expectedParentSha: H0,
    observedHeadSha: H1,
    observedParentSha: H0,
    exactPaths: [PATH],
    observedChangedPaths: [PATH],
    expectedCommitMessage: MSG,
    observedCommitMessage: MSG,
    artifactChecks: [
      {
        path: PATH,
        expectedDigest: DIGEST,
        actualDigest: DIGEST,
      },
    ],
    worktreeDirty: false,
    commitsFromExpectedParent: 1,
    ...overrides,
  });
}

describe("GCEC local commit verification GV", () => {
  it("GV-01/02/03 happy path", () => {
    expect(base().ok).toBe(true);
  });

  it("GV-04 extra path → FAIL", () => {
    const r = base({ observedChangedPaths: [PATH, "README.md"] });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("changed_paths_extra");
  });

  it("GV-05 missing expected path → FAIL", () => {
    const r = base({ observedChangedPaths: [] });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("changed_paths_missing");
  });

  it("GV-06 artifact digest changed → FAIL", () => {
    const r = base({
      artifactChecks: [
        {
          path: PATH,
          expectedDigest: DIGEST,
          actualDigest:
            "sha256:ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        },
      ],
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("artifact_digest_mismatch");
  });

  it("GV-07 worktree dirty → FAIL", () => {
    const r = base({ worktreeDirty: true });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("worktree_dirty_after_commit");
  });

  it("GV-08 wrong commit message → FAIL", () => {
    const r = base({ observedCommitMessage: "wrong message" });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("commit_message_mismatch");
  });

  it("GV-09 HEAD unchanged → FAIL", () => {
    const r = base({ observedHeadSha: H0, observedParentSha: H0 });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("head_unchanged");
  });

  it("GV-10/15 extra commit lineage → FAIL", () => {
    const r = base({
      observedHeadSha: H2,
      observedParentSha: H0,
      commitsFromExpectedParent: 2,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("unexpected_extra_commits");
  });

  it("GV-11 missing artifactChecks → FAIL", () => {
    const r = base({ artifactChecks: [] });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("artifact_checks_missing");
  });

  it("GV-12 incomplete coverage → FAIL", () => {
    const r = base({
      exactPaths: [PATH, "docs/other.md"],
      observedChangedPaths: [PATH, "docs/other.md"],
      artifactChecks: [
        { path: PATH, expectedDigest: DIGEST, actualDigest: DIGEST },
      ],
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("artifact_coverage_incomplete");
  });

  it("GV-14 exact one-to-one coverage → PASS", () => {
    expect(base().ok).toBe(true);
  });
});
