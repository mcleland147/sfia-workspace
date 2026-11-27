import { describe, expect, it } from "vitest";
import {
  recentItemFromDocumentConsultation,
  recentItemFromGitConsultation,
  recentItemFromTurnReference,
} from "@/lib/project-recent-consultation";
import { mergeProjectRecentItems } from "@/lib/project-recent-items";

describe("B.8 — pilot consultation identities (MP-08)", () => {
  it("builds stable ids for document and git consultations", () => {
    expect(recentItemFromDocumentConsultation("d1", "Plan", "v2")).toEqual({
      id: "doc:d1",
      kind: "document_nora",
      title: "Plan",
      refLabel: "v2",
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
  });

  it("maps Nora turn references and dedupes on merge", () => {
    const docRef = recentItemFromTurnReference({
      kind: "document",
      label: "Synthèse",
      resourceId: "doc_x",
      revisionId: "rev_1",
    });
    expect(docRef?.id).toBe("doc:doc_x");
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