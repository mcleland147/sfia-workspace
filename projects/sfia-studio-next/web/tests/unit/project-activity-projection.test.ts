import { describe, expect, it } from "vitest";
import {
  buildSupersededDecisionIds,
  countOpenKnowledgePoints,
  countProjectLibraryDocuments,
  filterApplicableHumanDecisions,
  openKnowledgePoints,
  openPointShortTitle,
  projectLibraryDocumentExamples,
  travailAsideOpenPoints,
} from "@/domains/preparation/project-activity-projection";

describe("B.8 — project activity projection", () => {
  it("counts document identities once (SAVING and AVAILABLE both count)", () => {
    const docs = [
      { document: { id: "doc_a", title: "MaintiPlan V1" } },
      { document: { id: "doc_a", title: "MaintiPlan V1" } },
      { document: null },
      { document: { id: "doc_b", title: "Annexe" } },
    ];
    expect(countProjectLibraryDocuments(docs)).toBe(2);
    expect(projectLibraryDocumentExamples(docs)).toEqual([
      { id: "doc_a", title: "MaintiPlan V1" },
      { id: "doc_b", title: "Annexe" },
    ]);
  });

  it("MaintiPlan — non-APPLICABLE superseder does not zero applicable counter", () => {
    const rows = [
      {
        id: "d-applicable",
        state: "APPLICABLE",
        statement: "GitHub obligatoire",
        supersedesDecisionId: null,
        kind: "RECORD_DECISION",
      },
      {
        id: "d-revised-line",
        state: "REVISED",
        statement: "Tentative de révision",
        supersedesDecisionId: "d-applicable",
        kind: "RECORD_DECISION",
      },
    ];
    expect(buildSupersededDecisionIds(rows).has("d-applicable")).toBe(false);
    expect(filterApplicableHumanDecisions(rows)).toHaveLength(1);
    expect(filterApplicableHumanDecisions(rows)[0]?.id).toBe("d-applicable");
  });

  it("successor APPLICABLE with supersedesDecisionId retires prior id", () => {
    const rows = [
      {
        id: "d-old",
        state: "APPLICABLE",
        statement: "Ancienne",
        supersedesDecisionId: null,
      },
      {
        id: "d-new",
        state: "APPLICABLE",
        statement: "Nouvelle",
        supersedesDecisionId: "d-old",
      },
    ];
    expect(filterApplicableHumanDecisions(rows).map((d) => d.id)).toEqual(["d-new"]);
  });

  it("openPointShortTitle compacts for E3 without migration", () => {
    const long =
      "Quelle est la stratégie de déploiement sur les environnements de recette et de production pour le lot MaintiPlan ?";
    const short = openPointShortTitle(long, 72);
    expect(short.length).toBeLessThanOrEqual(74);
    expect(short).not.toMatch(/^selon le pilote/i);
  });

  it("openPointShortTitle prefers canonicalTitle from provenance (E1-REL-04)", () => {
    const detailed =
      "Quelles catégories d'interventions nécessitent une validation supplémentaire après le compte rendu du technicien ?";
    expect(
      openPointShortTitle(detailed, 72, {
        provenanceJson: JSON.stringify({ canonicalTitle: "Validation de clôture" }),
      }),
    ).toBe("Validation de clôture");
    expect(openPointShortTitle(detailed, 72, { canonicalTitle: "Clôture" })).toBe("Clôture");
  });

  it("open points aside uses same OPEN population as counters", () => {
    const points = [
      { id: "op1", statement: "A", status: "OPEN" },
      { id: "op2", statement: "B", status: "RESOLVED" },
      { id: "op3", statement: "C", status: "OPEN" },
    ];
    expect(countOpenKnowledgePoints(points)).toBe(2);
    expect(openKnowledgePoints(points).map((p) => p.id)).toEqual(["op1", "op3"]);
    expect(travailAsideOpenPoints(points, 5)).toHaveLength(2);
    expect(travailAsideOpenPoints([...points, ...points, ...points], 5)).toHaveLength(5);
  });
});