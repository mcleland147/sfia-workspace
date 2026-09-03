/** @vitest-environment node */
/**
 * CORR-MW4-01D — claim-specific provenance unbound when Evidence set exists
 * without structural claim→Evidence bindings.
 * ZERO LIVE OpenAI.
 */
import { describe, expect, it } from "vitest";
import {
  buildClaimSpecificProvenanceDisclosure,
  buildGroundingCognitiveDisclosure,
  toMw4GroundingTurnSurface,
  type RememberedEvidenceResolution,
} from "@/lib/nora-cognitive-runtime";

function resolutionWithEvidenceAB(
  bindings?: Array<{ claimId: string; evidenceId: string }>,
): RememberedEvidenceResolution {
  return {
    rememberedIds: ["ev:A", "ev:B"],
    valid: [
      {
        evidenceId: "ev:A",
        sourceId: "src:a",
        domain: "prj:mw4-d",
        freshness: "fresh",
        attributable: true,
      },
      {
        evidenceId: "ev:B",
        sourceId: "src:b",
        domain: "prj:mw4-d",
        freshness: "fresh",
        attributable: true,
      },
    ],
    downgraded: [],
    missing: [],
    claimSourceBindings: bindings,
  };
}

describe("CORR-MW4-01D — claim provenance unbound D0", () => {
  it("Evidence A+B remembered without claim bindings → UNBOUND / NOT RECONSTRUCTABLE", () => {
    const resolution = resolutionWithEvidenceAB(); // no bindings
    const disclosure = buildGroundingCognitiveDisclosure(resolution);
    expect(disclosure).toMatch(/Currently attributable Evidence/);
    expect(disclosure).toMatch(/ev:A/);
    expect(disclosure).toMatch(/ev:B/);
    expect(disclosure).toMatch(/UNBOUND \/ NOT RECONSTRUCTABLE/);
    expect(disclosure).not.toMatch(/claimX|claim X|→ Evidence ev:A/i);

    const claimOnly = buildClaimSpecificProvenanceDisclosure(null);
    expect(claimOnly).toMatch(/UNBOUND \/ NOT RECONSTRUCTABLE/);
    expect(claimOnly).toMatch(/Do not infer which Evidence supported which claim/);

    const surface = toMw4GroundingTurnSurface(resolution);
    expect(surface.claimSpecificProvenance).toBe("unbound");
    expect(surface.claimSpecificDisclosure).toMatch(
      /UNBOUND \/ NOT RECONSTRUCTABLE/,
    );
    expect(surface.validIds).toEqual(["ev:A", "ev:B"]);
  });

  it("must not invent A→claimX binding from Evidence set membership alone", () => {
    const resolution = resolutionWithEvidenceAB([]);
    const disclosure = buildClaimSpecificProvenanceDisclosure(
      resolution.claimSourceBindings,
    );
    expect(disclosure).not.toMatch(/claimX/);
    expect(disclosure).not.toMatch(/claim .* → Evidence ev:A/);
    expect(disclosure).toMatch(/Evidence ID set continuity ≠ claim→source/);
  });

  it("structural bindings surface as BOUND without inventing extras", () => {
    const resolution = resolutionWithEvidenceAB([
      { claimId: "claim:1", evidenceId: "ev:A" },
    ]);
    const disclosure = buildClaimSpecificProvenanceDisclosure(
      resolution.claimSourceBindings,
    );
    expect(disclosure).toMatch(/Claim-specific provenance: BOUND/);
    expect(disclosure).toMatch(/claim claim:1 → Evidence ev:A/);
    expect(disclosure).not.toMatch(/ev:B/);
    expect(toMw4GroundingTurnSurface(resolution).claimSpecificProvenance).toBe(
      "bound",
    );
  });
});
