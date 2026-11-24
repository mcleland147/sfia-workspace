import { describe, expect, it } from "vitest";
import {
  buildActivitySteps,
  compactActivitySummary,
  projectActivityLabel,
} from "@/domains/conversation/activity-labels";

describe("activity-labels functional completion", () => {
  it("contextualizes WEB discovery without claiming consultation", () => {
    expect(
      projectActivityLabel({
        phase: "nora.source.web",
        nature: "OBSERVED",
        status: "RUNNING",
        summary: "Source web découverte — Power Query",
        detail: { kind: "WEB", coverage: "DISCOVERED", title: "Power Query" },
      }),
    ).toMatch(/découverte/i);
    expect(
      projectActivityLabel({
        phase: "nora.source.web",
        nature: "OBSERVED",
        status: "RUNNING",
        summary: "Source web découverte — Power Query",
        detail: { kind: "WEB", coverage: "DISCOVERED", title: "Power Query" },
      }),
    ).not.toMatch(/consultée/i);
  });

  it("keeps distinct source identities instead of deduping by label", () => {
    const steps = buildActivitySteps([
      {
        sequence: 1,
        nature: "OBSERVED",
        status: "COMPLETED",
        phase: "nora.source.d4",
        summary: "Document — Cadrage",
        sourceRef: "doc_a",
        detail: { kind: "D4", coverage: "CONSULTED", title: "Cadrage" },
      },
      {
        sequence: 2,
        nature: "OBSERVED",
        status: "COMPLETED",
        phase: "nora.source.d4",
        summary: "Document — Conception",
        sourceRef: "doc_b",
        detail: { kind: "D4", coverage: "CONSULTED", title: "Conception" },
      },
    ]);
    expect(steps).toHaveLength(2);
    expect(steps.map((s) => s.sourceRef).sort()).toEqual(["doc_a", "doc_b"]);
  });

  it("does not rewrite earlier current steps to done when a new current appears", () => {
    const steps = buildActivitySteps([
      {
        sequence: 1,
        nature: "ANNOUNCED",
        status: "RUNNING",
        phase: "nora.objective",
        summary: "Comparer cadrage et conception",
        detail: { objective: "Comparer cadrage et conception" },
      },
      {
        sequence: 2,
        nature: "OBSERVED",
        status: "RUNNING",
        phase: "nora.source.git",
        summary: "Consultation Git — README",
        sourceRef: "README.md",
        detail: { kind: "GIT", coverage: "DISCOVERED", title: "README" },
      },
    ]);
    expect(steps.some((s) => s.state === "current")).toBe(true);
    // DISCOVERED must not be treated as done success.
    const git = steps.find((s) => s.sourceRef === "README.md");
    expect(git?.state).not.toBe("done");
  });

  it("never projects DENIED as done success", () => {
    const steps = buildActivitySteps([
      {
        sequence: 1,
        nature: "OBSERVED",
        status: "FAILED",
        phase: "nora.source.web",
        summary: "Consultation web limitée",
        sourceRef: "https://example.com",
        detail: { kind: "WEB", coverage: "DENIED", title: "example" },
      },
    ]);
    expect(steps[0]!.state).toBe("failed");
  });

  it("compact headline stays métier", () => {
    const { headline } = compactActivitySummary([
      {
        nature: "ANNOUNCED",
        summary: "COMPLETE: doc_abc",
        status: "RUNNING",
        phase: "nora.generate",
      },
    ]);
    expect(headline).not.toMatch(/ANNOUNCED:/);
    expect(headline).not.toMatch(/^COMPLETE:/);
  });
});
