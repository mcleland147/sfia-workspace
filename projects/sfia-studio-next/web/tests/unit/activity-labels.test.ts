import { describe, expect, it } from "vitest";
import {
  buildActivitySteps,
  compactActivitySummary,
  projectActivityLabel,
} from "@/domains/conversation/activity-labels";

describe("activity-labels", () => {
  it("maps WEB discovery without claiming consultation", () => {
    expect(
      projectActivityLabel({
        phase: "nora.source.web",
        nature: "OBSERVED",
        summary: "DISCOVERED: https://example.com/doc",
        detail: { kind: "WEB", coverage: "DISCOVERED" },
      }),
    ).toBe("Source web découverte — page non encore ouverte");
  });

  it("maps GIT without exposing raw coverage codes as headline", () => {
    expect(
      projectActivityLabel({
        phase: "nora.source.git",
        nature: "OBSERVED",
        summary: "COMPLETE: README.md",
        detail: { kind: "GIT", coverage: "COMPLETE" },
      }),
    ).toBe("Consultation Git effectuée");
  });

  it("never surfaces NATURE: summary technical headlines", () => {
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
    expect(headline.length).toBeGreaterThan(0);
  });

  it("builds a short checklist with a single current step", () => {
    const steps = buildActivitySteps([
      {
        sequence: 1,
        nature: "ANNOUNCED",
        status: "RUNNING",
        phase: "nora.investigation",
        summary: "start",
      },
      {
        sequence: 2,
        nature: "OBSERVED",
        status: "COMPLETED",
        phase: "nora.source.d4",
        summary: "COMPLETE: note",
        detail: { kind: "D4" },
      },
      {
        sequence: 3,
        nature: "ANNOUNCED",
        status: "RUNNING",
        phase: "nora.generate",
        summary: "writing",
      },
    ]);
    expect(steps.length).toBeGreaterThan(0);
    expect(steps.filter((s) => s.state === "current").length).toBeLessThanOrEqual(1);
  });
});
