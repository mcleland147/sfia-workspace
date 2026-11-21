import { describe, expect, it } from "vitest";
import { projectPublicationFromRow } from "@/domains/integrations/publication-projection";

function baseRef(overrides?: Partial<{ status: string; prNumber: number | null; detailJson: string }>) {
  const now = new Date();
  return {
    id: "dpr_test",
    projectId: "proj_1",
    pilotId: "pilot_1",
    documentId: "doc_1",
    revisionId: "rev_1",
    repositoryId: "repo_1",
    targetPath: "docs/x.md",
    targetBranch: "main",
    baseSha: "a".repeat(40),
    headSha: "b".repeat(40),
    prNumber: 42,
    status: "PR_OPEN",
    effectAttemptId: "eff_1",
    detailJson: JSON.stringify({ publicationBranch: "sfia/pub-1", prCurrentState: "OPEN" }),
    createdAt: now,
    updatedAt: now,
    ...overrides,
  };
}

describe("projectPublicationFromRow — PR vs merge", () => {
  it("open PR is not treated as merge (PR_OPEN fact only)", () => {
    const item = projectPublicationFromRow({
      ref: baseRef(),
      repositoryFullName: "acme/repo",
      attempt: { kind: "GIT_PUBLICATION", status: "COMPLETED" },
      facts: [{ factKind: "PR_OPEN", sha: "c".repeat(40), prNumber: 42 }],
    });
    expect(item.openPullRequest).toBe(true);
    expect(item.mergeObserved).toBe(false);
    expect(item.publicationStatus).toBe("PR_OPEN");
    expect(item.pullRequestCreatedObserved).toBe(true);
    expect(item.prStatusKind).toBe("PR_OPEN_HISTORICAL");
    expect(item.prStatusLabel).toMatch(/historique/i);
    expect(item.limits).toContain("PR_OPENNESS_NOT_LIVE");
  });

  it("MERGE fact alone qualifies mergeObserved without conflating open PR", () => {
    const item = projectPublicationFromRow({
      ref: baseRef({ status: "MERGED", detailJson: JSON.stringify({ prCurrentState: "MERGED" }) }),
      repositoryFullName: "acme/repo",
      attempt: null,
      facts: [
        { factKind: "PR_OPEN", sha: "c".repeat(40), prNumber: 42 },
        { factKind: "MERGE", sha: "d".repeat(40), prNumber: 42 },
      ],
    });
    expect(item.mergeObserved).toBe(true);
    expect(item.openPullRequest).toBe(false);
    expect(item.publicationStatus).toBe("MERGED");
  });

  it("COMPLETED publication with PR_OPEN status still blocks merge inference", () => {
    const item = projectPublicationFromRow({
      ref: baseRef({ status: "PR_OPEN" }),
      repositoryFullName: "acme/other",
      attempt: { kind: "GIT_PUBLICATION", status: "COMPLETED" },
      facts: [{ factKind: "COMMIT", sha: "e".repeat(40) }],
    });
    expect(item.effectStatus).toBe("COMPLETED");
    expect(item.mergeObserved).toBe(false);
    expect(item.commitObserved).toBe(true);
    expect(item.openPullRequest).toBe(true);
  });

  it("MERGE fact from a distinct merge attempt (correlated) qualifies mergeObserved", () => {
    const item = projectPublicationFromRow({
      ref: baseRef({ status: "PR_OPEN" }),
      repositoryFullName: "acme/repo",
      attempt: { kind: "GIT_PUBLICATION", status: "COMPLETED" },
      facts: [
        { factKind: "PR_OPEN", sha: "c".repeat(40), prNumber: 42 },
        // Facts belonging to a separate GIT_MERGE attempt, correlated by publicationAttemptId
        { factKind: "MERGE", sha: "f".repeat(40), prNumber: 42 },
      ],
    });
    expect(item.mergeObserved).toBe(true);
    expect(item.openPullRequest).toBe(false);
  });
});