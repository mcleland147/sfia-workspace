/** @vitest-environment node */
/**
 * MW4-S03 / CORR-MW4-01A — Multi-doc honest partiality from REAL summary shapes.
 * ZERO LIVE OpenAI.
 *
 * Contract: git_local_read_file summary `read <path> Lstart-end/total (...) [hasMore]`
 * FULL only when L1-total with no hasMore. L100-N/N is PARTIAL (hard negative).
 * Search ≠ read.
 */
import { describe, expect, it } from "vitest";
import {
  aggregateReadCoverage,
  buildReadCoverageDisclosure,
  deriveReadCoverageFromToolEvent,
} from "@/lib/nora-cognitive-runtime";

describe("MW4-S03 — read coverage partiality D0 (CORR-01A shapes)", () => {
  it("full — L1-total without hasMore", () => {
    const fact = deriveReadCoverageFromToolEvent({
      toolName: "git_local_read_file",
      status: "succeeded",
      pathOrRef: "docs/a.md",
      summary: "read docs/a.md L1-10/10 (100 chars)",
    });
    expect(fact).not.toBeNull();
    expect(fact?.coverage).toBe("full");
    expect(fact?.startLine).toBe(1);
    expect(fact?.endLine).toBe(10);
    expect(fact?.totalLines).toBe(10);
  });

  it("suffix L2-10/10 → partial (not full even when end===total)", () => {
    const fact = deriveReadCoverageFromToolEvent({
      toolName: "git_local_read_file",
      status: "succeeded",
      pathOrRef: "docs/b.md#L2-10",
      summary: "read docs/b.md L2-10/10 (90 chars)",
    });
    expect(fact?.coverage).toBe("partial");
    expect(fact?.signals).toContain("suffix_range_not_full");
  });

  it("prefix L1-5/10 → partial", () => {
    const fact = deriveReadCoverageFromToolEvent({
      toolName: "git_local_read_file",
      status: "succeeded",
      pathOrRef: "docs/c.md#L1-5",
      summary: "read docs/c.md L1-5/10 (40 chars)",
    });
    expect(fact?.coverage).toBe("partial");
  });

  it("middle L20-40/100 → partial", () => {
    const fact = deriveReadCoverageFromToolEvent({
      toolName: "git_local_read_file",
      status: "succeeded",
      pathOrRef: "docs/d.md#L20-40",
      summary: "read docs/d.md L20-40/100 (200 chars)",
    });
    expect(fact?.coverage).toBe("partial");
  });

  it("HARD NEGATIVE — L100-200/200 is PARTIAL (not full)", () => {
    const fact = deriveReadCoverageFromToolEvent({
      toolName: "git_local_read_file",
      status: "succeeded",
      pathOrRef: "docs/big.md#L100-200",
      summary: "read docs/big.md L100-200/200 (800 chars)",
    });
    expect(fact?.coverage).toBe("partial");
    expect(fact?.coverage).not.toBe("full");
    expect(fact?.startLine).toBe(100);
    expect(fact?.endLine).toBe(200);
    expect(fact?.totalLines).toBe(200);
  });

  it("hasMore in summary → partial", () => {
    const fact = deriveReadCoverageFromToolEvent({
      toolName: "git_local_read_file",
      status: "succeeded",
      pathOrRef: "docs/e.md#L1-10",
      summary: "read docs/e.md L1-10/50 (100 chars) hasMore",
    });
    expect(fact?.coverage).toBe("partial");
    expect(fact?.hasMore).toBe(true);
  });

  it("git_local_search_content success → null fact (search ≠ read)", () => {
    const fact = deriveReadCoverageFromToolEvent({
      toolName: "git_local_search_content",
      status: "succeeded",
      pathOrRef: "docs/a.md",
      summary: "content « foo » → 2 hit(s)",
    });
    expect(fact).toBeNull();
  });

  it("denied / failed git_local_read_file", () => {
    expect(
      deriveReadCoverageFromToolEvent({
        toolName: "git_local_read_file",
        status: "denied",
        pathOrRef: "method/secret.md",
        summary: "denied by path policy",
      })?.coverage,
    ).toBe("denied");
    expect(
      deriveReadCoverageFromToolEvent({
        toolName: "git_local_read_file",
        status: "failed",
        pathOrRef: "docs/missing.md",
        summary: "Fichier introuvable.",
      })?.coverage,
    ).toBe("failed");
  });

  it("mixed coverage aggregates to overall mixed_partial with honesty disclosure", () => {
    const agg = aggregateReadCoverage([
      { pathOrRef: "a.md", coverage: "full" },
      { pathOrRef: "b.md", coverage: "partial" },
      { pathOrRef: "c.md", coverage: "failed" },
    ]);
    expect(agg.overall).toBe("mixed_partial");
    const disclosure = buildReadCoverageDisclosure(agg);
    expect(disclosure).toMatch(/Overall coverage: partial \(mixed\)/);
    expect(disclosure).toMatch(/refuse false completeness/);
  });
});
