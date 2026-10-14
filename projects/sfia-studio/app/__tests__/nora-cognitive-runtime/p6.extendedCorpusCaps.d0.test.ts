/**
 * P6 — Large documentary corpus delivery caps (deterministic).
 * ZERO REAL / ZERO OpenAI.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  CT_DEFAULT_READ_MAX_BYTES,
  CT_MAX_TOOL_RESULT_CHARS,
} from "@/lib/platform/tools/types";
import { prepareGitLocalReadDataForModel } from "@/lib/platform/tools/toolRouter";

describe("P6 extended documentary corpus caps", () => {
  it("raises tool-result and default read caps for long documents", () => {
    expect(CT_MAX_TOOL_RESULT_CHARS).toBe(100_000);
    expect(CT_DEFAULT_READ_MAX_BYTES).toBe(200_000);
    // Former experimental universal 12k is no longer the Product ceiling.
    expect(CT_MAX_TOOL_RESULT_CHARS).toBeGreaterThan(12_000);
  });

  it("returns a ~90k character document within the raised model envelope", () => {
    const body = `${"α".repeat(90_000)}\n`;
    const prepared = prepareGitLocalReadDataForModel({
      path: "docs/long.md",
      content: body,
      startLine: 1,
      endLine: 1,
      requestedStartLine: 1,
      requestedEndLine: 1,
      returnedStartLine: 1,
      totalLines: 1,
      documentHasMore: false,
      truncated: false,
    });
    expect(prepared.json.length).toBeLessThanOrEqual(CT_MAX_TOOL_RESULT_CHARS);
    expect(typeof prepared.data).toBe("object");
  });

  it("keeps short documents fully within the raised envelope", () => {
    const body = "short doc\nline 2\n";
    const prepared = prepareGitLocalReadDataForModel({
      path: "docs/short.md",
      content: body,
      startLine: 1,
      endLine: 2,
      requestedStartLine: 1,
      requestedEndLine: 2,
      returnedStartLine: 1,
      totalLines: 2,
      documentHasMore: false,
      truncated: false,
    });
    expect(prepared.json.length).toBeLessThanOrEqual(CT_MAX_TOOL_RESULT_CHARS);
    expect(prepared.json).toContain("short doc");
    expect(prepared.truncated).toBe(false);
  });
});
