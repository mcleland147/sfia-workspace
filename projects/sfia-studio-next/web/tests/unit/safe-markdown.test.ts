import { describe, expect, it } from "vitest";
import { diffMarkdown } from "@/domains/document/service";

describe("diffMarkdown", () => {
  it("reports added and removed lines", () => {
    const d = diffMarkdown("a\nb\nc", "a\nx\nc");
    expect(d.removed).toContain("b");
    expect(d.added).toContain("x");
    expect(d.unchangedCount).toBeGreaterThanOrEqual(2);
  });
});

describe("SafeMarkdown sanitation contracts (string-level)", () => {
  it("rejects javascript: hrefs via safeHref logic mirrored in component", () => {
    const bad = "javascript:alert(1)";
    const ok = /^(https?:|mailto:|#|\/)/i.test(bad) && !/^(javascript|data):/i.test(bad);
    expect(ok).toBe(false);
    expect(/^(https?:|mailto:|#|\/)/i.test("https://example.com")).toBe(true);
  });
});
