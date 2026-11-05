import { describe, expect, it } from "vitest";
import { diffMarkdown, MAX_DIFF_CELLS } from "@/domains/document/service";

describe("C4 ordered diffMarkdown", () => {
  it("preserves duplicate lines when only one is removed", () => {
    const d = diffMarkdown("a\nx\nx\nb", "a\nx\nb");
    expect(d.removed).toEqual(["x"]);
    expect(d.added).toEqual([]);
    expect(d.unchangedCount).toBe(3);
    expect(d.degraded).toBe(false);
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

  it("many short lines stay under budget and remain ordered", () => {
    const n = 400;
    const left = Array.from({ length: n }, (_, i) => `L${i}`).join("\n");
    const right = Array.from({ length: n }, (_, i) => (i === 200 ? "INSERTED" : `L${i}`)).join(
      "\n",
    );
    const d = diffMarkdown(left, right);
    expect(d.degraded).toBe(false);
    expect(d.added).toEqual(["INSERTED"]);
    expect(d.removed).toEqual(["L200"]);
    expect((d.lineCounts?.cells ?? 0) <= MAX_DIFF_CELLS).toBe(true);
  });

  it("adversarial line-count product degrades explicitly — never fake detailed diff", () => {
    // Choose n,m such that (n+1)*(m+1) > MAX_DIFF_CELLS without huge strings
    const side = Math.ceil(Math.sqrt(MAX_DIFF_CELLS)) + 50;
    const left = Array.from({ length: side }, (_, i) => `A${i % 7}`).join("\n");
    const right = Array.from({ length: side }, (_, i) => `B${i % 11}`).join("\n");
    const cells = (side + 1) * (side + 1);
    expect(cells).toBeGreaterThan(MAX_DIFF_CELLS);
    const d = diffMarkdown(left, right);
    expect(d.degraded).toBe(true);
    expect(d.reason).toBe("DIFF_BUDGET_EXCEEDED");
    expect(d.ops).toEqual([]);
    expect(d.added).toEqual([]);
    expect(d.removed).toEqual([]);
    expect(d.lineCounts?.budget).toBe(MAX_DIFF_CELLS);
    expect(d.lineCounts?.cells).toBe(cells);
  });

  it("near max document size with few lines still diffs (char limit ≠ cell budget)", () => {
    const chunk = "x".repeat(40_000);
    const d = diffMarkdown(`${chunk}\na`, `${chunk}\nb`);
    expect(d.degraded).toBe(false);
    expect(d.added).toEqual(["b"]);
    expect(d.removed).toEqual(["a"]);
  });
});
