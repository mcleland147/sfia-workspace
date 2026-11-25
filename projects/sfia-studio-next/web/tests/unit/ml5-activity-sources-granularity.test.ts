import { describe, expect, it } from "vitest";
import {
  buildActivitySources,
  buildActivitySteps,
  formatSourceActivitySummary,
  projectActivityLabel,
} from "@/domains/conversation/activity-labels";

describe("RB-15/23 activity producers projection", () => {
  it("formats Git consulted without raw ref dump", () => {
    const s = formatSourceActivitySummary({
      kind: "GIT",
      coverage: "CONSULTED",
      title: "bookingConflicts.test.ts",
      ref: "git-file:repo:path@main",
    });
    expect(s).toMatch(/Consultation Git — bookingConflicts/);
    expect(s).not.toMatch(/git-file:/);
  });

  it("keeps three consultations of one source as three steps but one unique source", () => {
    const events = [
      {
        sequence: 1,
        nature: "ANNOUNCED",
        status: "RUNNING",
        phase: "nora.generate",
        summary: "Prise en charge — examiner conflits",
      },
      {
        sequence: 2,
        nature: "OBSERVED",
        status: "COMPLETED",
        phase: "nora.source.git",
        summary: "Consultation Git — rules.ts",
        sourceRef: "git-file:r1:src/rules.ts@main",
        detail: { kind: "GIT", coverage: "CONSULTED", title: "rules.ts", operation: "read_git_file" },
      },
      {
        sequence: 3,
        nature: "OBSERVED",
        status: "COMPLETED",
        phase: "nora.source.git",
        summary: "Consultation Git — rules.ts",
        sourceRef: "git-file:r1:src/rules.ts@main",
        detail: { kind: "GIT", coverage: "CONSULTED", title: "rules.ts", operation: "read_git_file" },
      },
      {
        sequence: 4,
        nature: "OBSERVED",
        status: "LIMITED",
        phase: "nora.source.git",
        summary: "Consultation Git partielle — rules.ts",
        sourceRef: "git-file:r1:src/rules.ts@main",
        detail: { kind: "GIT", coverage: "PARTIAL", title: "rules.ts", operation: "read_git_file" },
      },
    ];
    const steps = buildActivitySteps(events);
    expect(steps.length).toBeGreaterThanOrEqual(3);
    expect(steps.every((s) => !/prépare une réponse/i.test(s.label))).toBe(true);
    const sources = buildActivitySources(events);
    expect(sources).toHaveLength(1);
    expect(sources[0]!.title).toMatch(/rules/);
  });

  it("prefers non-generic headline for rich events", () => {
    const label = projectActivityLabel({
      phase: "nora.source.git",
      nature: "OBSERVED",
      status: "COMPLETED",
      summary: "Consultation Git — conflictService.ts",
      detail: { kind: "GIT", coverage: "CONSULTED", title: "conflictService.ts" },
    });
    expect(label).toMatch(/conflictService/);
  });
});
