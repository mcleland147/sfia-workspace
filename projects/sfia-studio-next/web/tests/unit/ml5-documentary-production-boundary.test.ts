import { describe, expect, it } from "vitest";
import {
  mergeDocumentProductionBody,
  resolveDocumentaryProductionBoundary,
} from "@/domains/conversation/run-nora-cognitive-turn";

const V1 = [
  "# StockTrack — Conception fonctionnelle V1",
  "",
  "| **RM-02** | Une référence et un libellé non vides sont obligatoires. Une même référence ne peut désigner qu’un seul article. |",
  "| **REC-03** | RM-02 | Tenter de créer un article sans référence : refus. |",
].join("\n");

const REVISED = [
  "# StockTrack — Conception fonctionnelle V1",
  "",
  "| **RM-02** | Une référence et un libellé non vides sont obligatoires. La référence doit comporter au moins trois caractères. Une même référence ne peut désigner qu’un seul article. |",
  "| **REC-03** | RM-02 | Tenter avec `AB` : refus sans création. |",
].join("\n");

/**
 * Simulate documentProductionFromReply merge selection (owner rules).
 * Keeps the test on exported boundary + merge owners — not a fork of production logic.
 */
function applyTurnProduction(input: {
  prevDoc: string;
  prevStatus: "COMPLETE" | "IN_PROGRESS" | "PARTIAL";
  incoming: string;
  capabilityIds: string[];
  mergeMode?: "APPEND" | "CORRECT" | "SUPERSEDE" | null;
  continueWork?: boolean;
}) {
  const boundary = resolveDocumentaryProductionBoundary({
    previous: {
      kind: "DOCUMENT",
      status: input.prevStatus,
      contentMarkdown: input.prevDoc,
    },
    capabilityIds: input.capabilityIds,
    explicitMergeMode: input.mergeMode ?? null,
  });
  const mergeMode =
    input.mergeMode ?? (boundary.startNew ? ("SUPERSEDE" as const) : null);
  const merged = mergeDocumentProductionBody({
    prevDoc: boundary.startNew ? "" : input.prevDoc,
    incoming: input.incoming,
    mergeMode,
    workDisposition: "COMPLETE",
    continueWork: input.continueWork ?? false,
  });
  const appliedMode =
    boundary.startNew && merged.appliedMode === "IDENTITY"
      ? ("SUPERSEDE" as const)
      : merged.appliedMode;
  return {
    boundary,
    merged: { ...merged, appliedMode },
  };
}

describe("ML5 documentary production boundary (StockTrack RED→GREEN)", () => {
  it("RED baseline: naive APPEND after COMPLETE create concatenates V1 + revise", () => {
    // Documents the pre-fix failure mode (do not use in product path).
    const naive = mergeDocumentProductionBody({
      prevDoc: V1,
      incoming: REVISED,
      mergeMode: null,
      workDisposition: "COMPLETE",
      continueWork: false,
    });
    expect(naive.appliedMode).toBe("APPEND");
    expect(naive.contentMarkdown.startsWith(V1)).toBe(true);
    expect(naive.contentMarkdown).toContain(REVISED);
    expect(naive.contentMarkdown.indexOf("# StockTrack")).toBe(0);
    expect(naive.contentMarkdown.indexOf("# StockTrack", 1)).toBeGreaterThan(0);
  });

  it("GREEN: revise after completed DOCUMENT starts a new production — no V1 prefix", () => {
    const { boundary, merged } = applyTurnProduction({
      prevDoc: V1,
      prevStatus: "COMPLETE",
      incoming: REVISED,
      capabilityIds: ["d4.revise_document"],
    });
    expect(boundary.startNew).toBe(true);
    expect(boundary.reason).toBe("REVISE_AFTER_PRIOR_DOCUMENT");
    expect(merged.appliedMode).toBe("SUPERSEDE");
    expect(merged.contentMarkdown).toBe(REVISED.trim());
    expect(merged.contentMarkdown.startsWith(V1)).toBe(false);
    expect(merged.contentMarkdown).toContain("trois caractères");
    expect(merged.contentMarkdown).toContain("`AB`");
    // Scenario oracle may count H1 — not a production rule.
    expect((merged.contentMarkdown.match(/^# /gm) || []).length).toBe(1);
  });

  it("preserves APPEND for mid-work IN_PROGRESS segments of the same production", () => {
    const partA = "# Mission\n\n## Scope\nA";
    const partB = "## Critères\n- C1";
    const { boundary, merged } = applyTurnProduction({
      prevDoc: partA,
      prevStatus: "IN_PROGRESS",
      incoming: partB,
      capabilityIds: ["d4.create_document"],
      continueWork: true,
    });
    expect(boundary.startNew).toBe(false);
    expect(merged.appliedMode).toBe("APPEND");
    expect(merged.contentMarkdown).toContain("Scope");
    expect(merged.contentMarkdown).toContain("Critères");
  });

  it("create after a prior COMPLETE document also starts a new production", () => {
    const { boundary, merged } = applyTurnProduction({
      prevDoc: V1,
      prevStatus: "COMPLETE",
      incoming: "# Other\n\nBody",
      capabilityIds: ["d4.create_document"],
    });
    expect(boundary.startNew).toBe(true);
    expect(merged.contentMarkdown).toBe("# Other\n\nBody");
    expect(merged.contentMarkdown).not.toContain("StockTrack");
  });

  it("explicit SUPERSEDE still wins without revise capability id", () => {
    const { boundary, merged } = applyTurnProduction({
      prevDoc: V1,
      prevStatus: "COMPLETE",
      incoming: REVISED,
      capabilityIds: [],
      mergeMode: "SUPERSEDE",
    });
    expect(boundary.startNew).toBe(true);
    expect(merged.contentMarkdown).toBe(REVISED.trim());
  });
});
