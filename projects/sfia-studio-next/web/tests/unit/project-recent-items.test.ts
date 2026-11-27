import { describe, expect, it } from "vitest";
import {
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
});
