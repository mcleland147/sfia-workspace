/**
 * PILOT-EXECUTION-EXPERIENCE-RECOVERY-SIMPLIFICATION-01
 * Business-first contract presentation (T19 / T20).
 */
import { describe, expect, it } from "vitest";
import {
  isSimplifiedPilotExecutePath,
  presentPilotContract,
} from "@/features/pre-m6-product-ui/surfaces/pilotContractPresentation";

describe("pilotContractPresentation", () => {
  it("T19 — primary copy prefers business title over action codes", () => {
    const view = presentPilotContract({
      action: "cursor.docs_write.apply",
      target: "workspace.isolated.docs_write",
      scope: "studio.gcec.docs_write",
      requiredAuthority: "N2",
      reversibility: "reversible",
      targetPath: "projects/studyflow/01-cadrage/note-de-cadrage.md",
      targetRepositoryRef: "mcleland147/sfia-workspace",
    });
    expect(view.nowTitle).toContain("note-de-cadrage.md");
    expect(view.nowTitle).not.toContain("cursor.docs_write");
    expect(view.effectSummary).toMatch(/Écriture locale/);
    expect(view.authorityLabel).toMatch(/Pilote/);
    expect(view.authorityLabel).not.toMatch(/MORRIS/);
    expect(view.simplifiedExecutePath).toBe(true);
  });

  it("T08/T10 — N1/N2 simplify; N3/MORRIS do not", () => {
    expect(isSimplifiedPilotExecutePath("N1")).toBe(true);
    expect(isSimplifiedPilotExecutePath("N2")).toBe(true);
    expect(isSimplifiedPilotExecutePath("N3")).toBe(false);
    expect(isSimplifiedPilotExecutePath("MORRIS")).toBe(false);
  });
});
