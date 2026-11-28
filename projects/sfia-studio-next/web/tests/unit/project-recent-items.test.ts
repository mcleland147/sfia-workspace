import { describe, expect, it } from "vitest";
import {
  filterProjectRecentItemsForExposure,
  mergeProjectRecentItems,
  type ProjectRecentItem,
} from "@/lib/project-recent-items";

function item(
  id: string,
  consultedAtMs: number,
  title = id,
): ProjectRecentItem {
  return {
    id,
    kind: "document_nora",
    title,
    consultedAtMs,
  };
}

describe("project-recent-items (MP-08)", () => {
  it("keeps at most 5 items, newest first, deduped by id", () => {
    let items: ProjectRecentItem[] = [];
    for (let i = 1; i <= 6; i++) {
      items = mergeProjectRecentItems(items, item(`doc:${i}`, i * 1000, `Doc ${i}`));
    }
    items = mergeProjectRecentItems(items, item("doc:2", 9000, "Doc 2"));
    expect(items).toHaveLength(5);
    expect(items[0]?.id).toBe("doc:2");
    expect(items.map((x) => x.id)).not.toContain("doc:1");
  });

  it("preserves distinct identities across merges", () => {
    const a = mergeProjectRecentItems([], item("doc:a", 1));
    const b = mergeProjectRecentItems([], item("doc:b", 1));
    expect(a[0]?.id).toBe("doc:a");
    expect(b[0]?.id).toBe("doc:b");
  });

  it("E5 fail-closed: no exposure before loadReady; foreign kinds require allowlists", () => {
    const mixed: ProjectRecentItem[] = [
      { id: "doc:d1", kind: "document_nora", title: "Secret Doc", consultedAtMs: 1, documentId: "d1" },
      {
        id: "git:r1:a.md@main",
        kind: "file_git",
        title: "Secret Path",
        consultedAtMs: 2,
        repositoryId: "r1",
        path: "a.md",
        gitRef: "main",
      },
      {
        id: "execution:att_x",
        kind: "execution",
        title: "Secret Attempt",
        consultedAtMs: 3,
        attemptId: "att_x",
      },
    ];
    expect(
      filterProjectRecentItemsForExposure(mixed, {
        loadReady: false,
        documentIds: new Set(["d1"]),
        repositoryIds: new Set(["r1"]),
        attemptIds: new Set(["att_x"]),
        accessListsReady: true,
      }),
    ).toEqual([]);
    expect(
      filterProjectRecentItemsForExposure(mixed, {
        loadReady: true,
        documentIds: new Set(["d1"]),
        repositoryIds: new Set(),
        attemptIds: new Set(),
        accessListsReady: true,
      }).map((x) => x.id),
    ).toEqual(["doc:d1"]);
    expect(
      filterProjectRecentItemsForExposure(mixed, {
        loadReady: true,
        documentIds: new Set(["d1"]),
        repositoryIds: new Set(["r1"]),
        attemptIds: new Set(["att_x"]),
        accessListsReady: false,
      }).map((x) => x.id),
    ).toEqual(["doc:d1"]);
    const pathless = filterProjectRecentItemsForExposure(
      [{ ...mixed[1]!, path: "  " }],
      {
        loadReady: true,
        documentIds: new Set(),
        repositoryIds: new Set(["r1"]),
        attemptIds: new Set(),
        accessListsReady: true,
      },
    );
    expect(pathless).toEqual([]);
  });
});
