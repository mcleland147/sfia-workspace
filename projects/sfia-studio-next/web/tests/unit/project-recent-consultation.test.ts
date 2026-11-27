import { describe, expect, it } from "vitest";
import {
  recentItemFromAttemptConsultation,
  recentItemFromDocumentConsultation,
  recentItemFromGitConsultation,
  recentItemFromTurnReference,
} from "@/lib/project-recent-consultation";
import { mergeProjectRecentItems } from "@/lib/project-recent-items";

describe("B.8 — pilot consultation identities (MP-08)", () => {
  it("builds revision-scoped ids for document consultations", () => {
    expect(recentItemFromDocumentConsultation("d1", "Plan", "v2", "rev_abc")).toEqual({
      id: "doc:d1:rev:rev_abc",
      kind: "document_nora",
      title: "Plan",
      refLabel: "v2",
      documentId: "d1",
      revisionId: "rev_abc",
    });
    expect(recentItemFromDocumentConsultation("d1", "Plan", "v2")).toEqual({
      id: "doc:d1",
      kind: "document_nora",
      title: "Plan",
      refLabel: "v2",
      documentId: "d1",
      revisionId: null,
    });
    const git = recentItemFromGitConsultation({
      repositoryId: "repo1",
      path: "docs/readme.md",
      ref: "main",
      title: "README",
      commit: "abc123def456",
    });
    expect(git.id).toBe("git:repo1:docs/readme.md@main");
    expect(git.kind).toBe("file_git");
    expect(git.refLabel).toBe("abc123def456");
    expect(git.repositoryId).toBe("repo1");
    expect(git.path).toBe("docs/readme.md");
    expect(git.gitRef).toBe("main");
  });

  it("maps Nora turn references with exact revision and dedupes on merge", () => {
    const docRef = recentItemFromTurnReference({
      kind: "document",
      label: "Synthèse",
      resourceId: "doc_x",
      revisionId: "rev_1",
    });
    expect(docRef?.id).toBe("doc:doc_x:rev:rev_1");
    expect(docRef && "revisionId" in docRef ? docRef.revisionId : null).toBe("rev_1");
    const items = mergeProjectRecentItems([], {
      ...docRef!,
      consultedAtMs: 1,
    });
    const again = mergeProjectRecentItems(items, {
      ...docRef!,
      consultedAtMs: 9,
    });
    expect(again).toHaveLength(1);
    expect(again[0]?.consultedAtMs).toBe(9);

    const otherRev = recentItemFromTurnReference({
      kind: "document",
      label: "Synthèse",
      resourceId: "doc_x",
      revisionId: "rev_2",
    });
    const withBoth = mergeProjectRecentItems(again, {
      ...otherRev!,
      consultedAtMs: 10,
    });
    expect(withBoth).toHaveLength(2);
    expect(withBoth[0]?.id).toBe("doc:doc_x:rev:rev_2");
  });

  it("builds attempt consultation ids for execution/bilan", () => {
    expect(
      recentItemFromAttemptConsultation({
        kind: "execution",
        attemptId: "att_1",
        title: "Exécution att_1",
        refLabel: "RUNNING",
      }),
    ).toEqual({
      id: "execution:att_1",
      kind: "execution",
      title: "Exécution att_1",
      refLabel: "RUNNING",
      attemptId: "att_1",
      resultId: null,
    });
    expect(
      recentItemFromAttemptConsultation({
        kind: "proof",
        attemptId: "att_1",
        title: "Preuve A",
        resourceKey: "cap_a",
        resultId: "cap_a",
      }).id,
    ).toBe("proof:att_1:cap_a");
  });

  it("isolates recent lists per canonical id (project A vs B)", () => {
    const a = mergeProjectRecentItems(
      [],
      { ...recentItemFromDocumentConsultation("d1", "A"), consultedAtMs: 1 },
    );
    const b = mergeProjectRecentItems(
      [],
      { ...recentItemFromDocumentConsultation("d1", "B"), consultedAtMs: 1 },
    );
    expect(a[0]?.title).toBe("A");
    expect(b[0]?.title).toBe("B");
  });
});
