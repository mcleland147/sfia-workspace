import { describe, expect, it } from "vitest";
import {
  buildActivityGroups,
  buildActivitySteps,
  compactActivitySummary,
  formatSourceActivitySummary,
  projectActivityLabel,
  projectMissionHeadline,
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

  it("IT-01 — orientation group does not echo ANNOUNCED/COMPLETED blurbs", () => {
    const events = [
      {
        sequence: 1,
        nature: "ANNOUNCED",
        status: "RUNNING",
        phase: "nora.objective",
        summary: "Orientation du travail à partir de la demande du Pilote",
        detail: { objective: "Orientation du travail à partir de la demande du Pilote" },
      },
      {
        sequence: 2,
        nature: "OBSERVED",
        status: "COMPLETED",
        phase: "nora.source.d4",
        summary: "Document consulté — StockTrack",
        sourceRef: "document:doc_x",
        detail: { kind: "D4", coverage: "CONSULTED", title: "StockTrack" },
      },
      {
        sequence: 3,
        nature: "COMPLETED",
        status: "COMPLETED",
        phase: "nora.objective",
        summary: "Orientation du travail terminée",
      },
    ];
    const groups = buildActivityGroups(events);
    const understand = groups.find((g) => g.key === "understand");
    expect(understand?.title).toBe("Orientation du travail");
    expect(understand?.description).toBe("");
    expect(understand?.details).toEqual([]);
    expect(understand?.resultSummary).toBeNull();
    const sources = groups.find((g) => g.key === "sources");
    expect(sources?.resultSummary).toMatch(/consultée/i);
    expect(projectMissionHeadline(events)).toBe("Orientation du travail");
  });

  it("projects compare_document_proposal as comparison activity copy", () => {
    expect(
      formatSourceActivitySummary({
        kind: "D4",
        coverage: "COMPLETE",
        title: "StockTrack — Conception fonctionnelle V1",
        notes: "compare_document_proposal — added:2 removed:2 unchanged:46",
      }),
    ).toMatch(/Comparaison documentaire — 4 modifications/);
  });
});
