import { describe, expect, it } from "vitest";
import {
  extractNegatedPrNumbers,
  extractPositivelyRequestedPrNumbers,
  extractRepositoryFullNameHints,
  extractRequestedPrNumbers,
  userStatementHasOpenMergeCondition,
  userStatementHasUnresolvedSamePrMergeContradiction,
  userStatementIsNonAuthorizingMergeTalk,
  userStatementRefusesMerge,
  userStatementRequestsPositiveMerge,
} from "@/domains/conversation/conversation-merge-authority";

describe("P0-M01 merge negation / positive intent", () => {
  it("treats explicit refusals as refuse — not positive", () => {
    const negatives = [
      "Ne merge pas cette PR.",
      "Ne fusionne pas la PR #42.",
      "Je ne veux pas que tu merges cette PR.",
      "Ne fais surtout pas le merge.",
      "Publie ce document, mais ne merge pas la PR.",
    ];
    for (const s of negatives) {
      expect(userStatementRefusesMerge(s), s).toBe(true);
      expect(userStatementRequestsPositiveMerge(s), s).toBe(false);
    }
  });

  it("blocks how-to / hypothetical / deferred talk", () => {
    const talk = [
      "Explique-moi comment merger cette PR.",
      "Si je te demandais de merger la PR #42...",
      "Merge-la uniquement quand je te le demanderai.",
    ];
    for (const s of talk) {
      expect(userStatementIsNonAuthorizingMergeTalk(s), s).toBe(true);
      expect(userStatementRequestsPositiveMerge(s), s).toBe(false);
    }
  });

  it("accepts explicit positive merge imperatives", () => {
    const positives = [
      "Merge la PR #42.",
      "Fusionne la PR documentaire #42 du dépôt X.",
      "Peux-tu merger la PR #7 ?",
    ];
    for (const s of positives) {
      expect(userStatementRefusesMerge(s), s).toBe(false);
      expect(userStatementRequestsPositiveMerge(s), s).toBe(true);
    }
  });

  it("does not treat bare publish+merge word soup without imperative as positive", () => {
    expect(userStatementRequestsPositiveMerge("La publication a un merge en attente")).toBe(false);
  });

  it("mixed refuse #42 then merge #43 keeps a positive signal", () => {
    const s = "Ne merge pas la PR #42, merge la PR #43.";
    expect(userStatementRefusesMerge(s)).toBe(false);
    expect(userStatementRequestsPositiveMerge(s)).toBe(true);
    expect(extractNegatedPrNumbers(s)).toEqual([42]);
    expect(extractPositivelyRequestedPrNumbers(s)).toEqual([43]);
    expect(userStatementHasUnresolvedSamePrMergeContradiction(s)).toBe(false);
  });

  it("same-PR contradiction blocks positive extraction and flags contradiction", () => {
    const s = "Ne merge pas la PR #42, merge la PR #42.";
    expect(userStatementHasUnresolvedSamePrMergeContradiction(s)).toBe(true);
    expect(extractPositivelyRequestedPrNumbers(s)).toEqual([]);
  });

  it("extracts repository owner/name hints without inventing paths", () => {
    expect(
      extractRepositoryFullNameHints("Merge la PR #42 du dépôt mcleland147/sfia-workspace."),
    ).toEqual(["mcleland147/sfia-workspace"]);
    expect(extractRepositoryFullNameHints("Merge docs/foo.md")).toEqual([]);
  });
});

describe("E08-S01 open merge conditions", () => {
  it("flags open conditions that must not authorize immediate merge", () => {
    const open = [
      "Merge la PR #42 uniquement après validation.",
      "Merge la PR #42 si tous les tests sont verts.",
      "Ne merge pas tant que la revue n'est pas terminée.",
      "Merge après mon prochain GO.",
      "Intègre cette PR seulement quand je confirmerai.",
    ];
    for (const s of open) {
      expect(userStatementHasOpenMergeCondition(s), s).toBe(true);
      expect(userStatementRequestsPositiveMerge(s), s).toBe(false);
    }
  });

  it("allows immediate positive merge without open condition", () => {
    expect(userStatementHasOpenMergeCondition("Merge la PR #42.")).toBe(false);
    expect(userStatementHasOpenMergeCondition("Fusionne la PR documentaire #7.")).toBe(false);
  });
});

describe("E08-S02 non-authorizing paraphrases", () => {
  it("blocks questions and deferred talk without requiring verb list for qual path", () => {
    for (const s of [
      "Quelles PR peut-on intégrer ?",
      "La PR #42 est-elle prête à être fusionnée ?",
      "On pourrait intégrer la PR demain.",
      "Cette PR pourra être mergée plus tard.",
    ]) {
      expect(userStatementIsNonAuthorizingMergeTalk(s), s).toBe(true);
    }
  });
});

describe("P0-M02 PR identity extraction", () => {
  it("extracts explicit PR numbers", () => {
    expect(extractRequestedPrNumbers("Merge la PR #42.")).toEqual([42]);
    expect(extractRequestedPrNumbers("Fusionne pull request 7")).toEqual([7]);
  });

  it("never silently picks a different PR from text alone", () => {
    expect(extractPositivelyRequestedPrNumbers("Merge la PR #42")).toEqual([42]);
    expect(extractPositivelyRequestedPrNumbers("Merge la PR #42 et la PR #43").sort()).toEqual([
      42, 43,
    ]);
  });
});
