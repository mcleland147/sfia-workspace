import { describe, expect, it } from "vitest";
import { diffMarkdown } from "@/domains/document/service";

describe("C4 ordered diffMarkdown", () => {
  it("preserves duplicate lines when only one is removed", () => {
    const d = diffMarkdown("a\nx\nx\nb", "a\nx\nb");
    expect(d.removed).toEqual(["x"]);
    expect(d.added).toEqual([]);
    expect(d.unchangedCount).toBe(3);
  });

  it("detects block move as remove+add in order", () => {
    const d = diffMarkdown("a\nb\nc\nd", "a\nc\nb\nd");
    // LCS keeps a,c,d or a,b,d — either way ops are ordered
    expect(d.ops.some((o) => o.op === "remove")).toBe(true);
    expect(d.ops.some((o) => o.op === "add")).toBe(true);
    expect(d.ops.filter((o) => o.op === "equal").map((o) => o.line)).toContain("a");
    expect(d.ops.filter((o) => o.op === "equal").map((o) => o.line)).toContain("d");
  });

  it("insertion in the middle", () => {
    const d = diffMarkdown("a\nc", "a\nb\nc");
    expect(d.added).toEqual(["b"]);
    expect(d.removed).toEqual([]);
  });

  it("identical documents", () => {
    const d = diffMarkdown("a\nb", "a\nb");
    expect(d.added).toEqual([]);
    expect(d.removed).toEqual([]);
    expect(d.unchangedCount).toBe(2);
  });

  it("empty lines preserved as first-class lines", () => {
    const d = diffMarkdown("a\n\nb", "a\nb");
    expect(d.removed).toEqual([""]);
  });
});
