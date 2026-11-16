import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

/**
 * Structural proof: LIVE agent instructions include sas maturation duties
 * in the same qualification turn (no second prompt). Does not prove LIVE cognition.
 */
describe("Nora LIVE instructions — sas maturation (structural)", () => {
  const src = readFileSync(
    join(__dirname, "../../src/domains/conversation/nora-adapter.ts"),
    "utf8",
  );

  it("embeds maturation responsibilities in QUALIFICATION_INSTRUCTIONS", () => {
    expect(src).toContain("MATURATION DU SAS");
    expect(src).toContain("Comprendre l'intention libre");
    expect(src).toContain("Reformuler fidèlement");
    expect(src).toContain("desiredOutcome / initialScope");
    expect(src).toContain("Respecter négations et corrections");
    expect(src).toContain("preparationAssessment");
    expect(src).toContain("Ne jamais déduire une décision humaine");
    expect(src).toContain("omets preparationAssessment");
    // Single agent / single outputType — no second LLM for aperçu.
    expect(src).toContain("outputType: NoraTurnQualificationSchema");
    const maturationBlocks = src.split("MATURATION DU SAS").length - 1;
    expect(maturationBlocks).toBe(1);
  });
});
