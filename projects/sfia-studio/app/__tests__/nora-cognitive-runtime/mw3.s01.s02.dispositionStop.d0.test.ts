/** @vitest-environment node */
/**
 * MW3-S01/S02 D0 — contradiction disposition + Cognitive STOP honesty.
 * Covers T01–T14 minimum matrix + MW2-R01/R02/R03 carried reserves.
 * ZERO REAL OpenAI.
 */
import { describe, expect, it } from "vitest";
import {
  COGNITIVE_STRATEGY_CLASSES,
  cognitiveStopAllowsProductSuccess,
  decideCognitiveStop,
  disposeContradiction,
  dispositionIndependentOfStrategy,
  type ContradictionConflictInput,
  type ContradictionEvidencePointer,
} from "@/lib/nora-cognitive-runtime";

function ptr(
  partial: Partial<ContradictionEvidencePointer> &
    Pick<ContradictionEvidencePointer, "evidenceId" | "sourceId" | "domain">,
): ContradictionEvidencePointer {
  return {
    freshness: "fresh",
    attributable: true,
    fabricated: false,
    ...partial,
  };
}

const multiSourceConflict = (): ContradictionConflictInput => ({
  conflictPresent: true,
  requiredDomains: ["governance"],
  requiredSourceCount: 2,
  freshnessMatters: true,
  evidencePointers: [
    ptr({
      evidenceId: "ev:1",
      sourceId: "src:a",
      domain: "governance",
    }),
    ptr({
      evidenceId: "ev:2",
      sourceId: "src:b",
      domain: "governance",
    }),
  ],
  trustedSfiaProfile: null,
});

describe("MW3-S01 — contradiction disposition D0", () => {
  it("T01 — apparent conflict, insufficient evidence → candidate, not evidence-backed", () => {
    const d = disposeContradiction({
      conflictPresent: true,
      requiredSourceCount: 2,
      evidencePointers: [],
      trustedSfiaProfile: null,
    });
    expect(d.disposition).toBe("candidate");
    expect(d.insufficiencyReasons).toContain("insufficient_evidence_pointers");
    expect(d.acceptedEvidenceIds).toEqual([]);
  });

  it("T02 — genuinely evidence-backed contradiction with attribution", () => {
    const d = disposeContradiction(multiSourceConflict());
    expect(d.disposition).toBe("evidence_backed");
    expect(d.acceptedEvidenceIds).toEqual(["ev:1", "ev:2"]);
    expect(d.acceptedSourceIds.sort()).toEqual(["src:a", "src:b"]);
    expect(d.insufficiencyReasons).toEqual([]);
  });

  it("T03 — stale evidence → no unjustified evidence-backed promotion", () => {
    const d = disposeContradiction({
      conflictPresent: true,
      requiredSourceCount: 1,
      freshnessMatters: true,
      evidencePointers: [
        ptr({
          evidenceId: "ev:stale",
          sourceId: "src:a",
          domain: "governance",
          freshness: "stale",
        }),
      ],
    });
    expect(d.disposition).toBe("candidate");
    expect(d.insufficiencyReasons).toContain("stale_evidence");
  });

  it("T04 — wrong-domain evidence → no unjustified promotion", () => {
    const d = disposeContradiction({
      conflictPresent: true,
      requiredDomains: ["governance"],
      requiredSourceCount: 1,
      evidencePointers: [
        ptr({
          evidenceId: "ev:x",
          sourceId: "src:a",
          domain: "finance",
        }),
      ],
    });
    expect(d.disposition).toBe("candidate");
    expect(d.insufficiencyReasons).toContain("wrong_domain");
  });

  it("T05 — multi-source coverage insufficient → candidate fail-closed", () => {
    const d = disposeContradiction({
      conflictPresent: true,
      requiredSourceCount: 2,
      requiredDomains: ["governance"],
      evidencePointers: [
        ptr({
          evidenceId: "ev:1",
          sourceId: "src:a",
          domain: "governance",
        }),
      ],
      sourceBreadth: "low",
    });
    expect(d.disposition).toBe("candidate");
    expect(d.insufficiencyReasons).toContain("insufficient_source_coverage");
  });

  it("T06 — multi-source coverage sufficient → evidence-backed", () => {
    const d = disposeContradiction({
      ...multiSourceConflict(),
      sourceBreadth: "high",
    });
    expect(d.disposition).toBe("evidence_backed");
  });

  it("T07 — fabricated-contradiction temptation refused", () => {
    const d = disposeContradiction({
      conflictPresent: true,
      fabricationAttempt: true,
      evidencePointers: [
        ptr({
          evidenceId: "ev:fake",
          sourceId: "src:invented",
          domain: "governance",
          fabricated: true,
        }),
      ],
    });
    expect(d.disposition).toBe("candidate");
    expect(d.insufficiencyReasons).toContain("fabricated_pointer_rejected");
    expect(d.acceptedEvidenceIds).toEqual([]);
    expect(d.disclosure).toMatch(/refused/i);
  });

  it("T12 — trustedSfiaProfile=null never invents profile (MW2-R03)", () => {
    const d = disposeContradiction({
      conflictPresent: true,
      requiredSourceCount: 1,
      evidencePointers: [
        ptr({
          evidenceId: "ev:1",
          sourceId: "src:a",
          domain: "governance",
        }),
      ],
      trustedSfiaProfile: null,
    });
    expect(d.trustedSfiaProfile).toBeNull();
    expect(d.disposition).toBe("evidence_backed");
  });

  it("T13 — borderline Focused / MW2-R01 — strategy must not alter evidence truth", () => {
    const base = multiSourceConflict();
    expect(
      dispositionIndependentOfStrategy(base, [...COGNITIVE_STRATEGY_CLASSES]),
    ).toBe(true);
    const focused = disposeContradiction({
      ...base,
      strategyClass: "Focused",
      sourceBreadth: "medium",
    });
    const deep = disposeContradiction({
      ...base,
      strategyClass: "Deep",
      sourceBreadth: "high",
    });
    expect(focused.disposition).toBe(deep.disposition);
    expect(focused.disposition).toBe("evidence_backed");
  });

  it("T14 — sourceBreadth low / MW2-R02 cannot masquerade as proof", () => {
    const d = disposeContradiction({
      conflictPresent: true,
      requiredSourceCount: 2,
      sourceBreadth: "low",
      evidencePointers: [
        ptr({
          evidenceId: "ev:1",
          sourceId: "src:a",
          domain: "governance",
        }),
      ],
      requiredDomains: ["governance"],
    });
    expect(d.disposition).toBe("candidate");
    expect(d.insufficiencyReasons).toContain("insufficient_source_coverage");
  });

  it("no conflict → disposition none", () => {
    const d = disposeContradiction({
      conflictPresent: false,
      evidencePointers: [],
    });
    expect(d.disposition).toBe("none");
  });
});

describe("MW3-S02 — Cognitive STOP honesty D0", () => {
  it("T08 — evidence-backed non-governing → continue, no automatic STOP", () => {
    const disposition = disposeContradiction(multiSourceConflict());
    const stop = decideCognitiveStop({
      disposition,
      governingPremiseInvalidated: false,
      localImpactOnly: true,
      governingPremise: "Local claim only",
    });
    expect(stop.cognitiveStop).toBe(false);
    expect(stop.outcome).toBe("PROGRESS_WITH_CONTRADICTION");
    expect(stop.progression).toBe("continue");
    expect(stop.anatomy?.caseCode).toBe("F_evidence_backed_contradiction");
  });

  it("T09 — evidence-backed governing premise → Cognitive STOP; progress ≠ SUCCESS", () => {
    const disposition = disposeContradiction(multiSourceConflict());
    const stop = decideCognitiveStop({
      disposition,
      governingPremiseInvalidated: true,
      governingPremise: "Project must remain FinOps-frozen",
    });
    expect(stop.cognitiveStop).toBe(true);
    expect(stop.outcome).toBe("COGNITIVE_STOP");
    expect(stop.progression).toBe("cognitive_stop");
    expect(stop.anatomy?.caseCode).toBe("G_governing_premise_contradiction");
    expect(stop.anatomy?.contradictionEvidenceIds).toEqual(["ev:1", "ev:2"]);
    expect(stop.anatomy?.notTechnicalError).toBe(true);
    expect(stop.anatomy?.notHumanDecision).toBe(true);
    expect(cognitiveStopAllowsProductSuccess(stop)).toBe(false);
  });

  it("T10 — technical/tool/transport failure ≠ Cognitive STOP", () => {
    const disposition = disposeContradiction({
      conflictPresent: false,
      evidencePointers: [],
    });
    const stop = decideCognitiveStop({
      disposition,
      governingPremiseInvalidated: false,
      technicalFailure: true,
      technicalFailureMessage: "provider timeout",
    });
    expect(stop.cognitiveStop).toBe(false);
    expect(stop.outcome).toBe("TECHNICAL_FAILURE");
    expect(stop.progression).toBe("technical_failure");
    expect(stop.anatomy).toBeNull();
  });

  it("T11 — silent-success regression: STOP path never allows product SUCCESS", () => {
    const disposition = disposeContradiction(multiSourceConflict());
    const stop = decideCognitiveStop({
      disposition,
      governingPremiseInvalidated: true,
      governingPremise: "Governing premise",
    });
    expect(stop.allowsSilentSuccess).toBe(false);
    expect(stop.outcome).not.toBe("PROGRESS_OK");
    expect(cognitiveStopAllowsProductSuccess(stop)).toBe(false);
  });

  it("candidate conflict never auto-STOPs", () => {
    const disposition = disposeContradiction({
      conflictPresent: true,
      evidencePointers: [],
    });
    const stop = decideCognitiveStop({
      disposition,
      governingPremiseInvalidated: true,
      governingPremise: "Would-be premise",
    });
    expect(disposition.disposition).toBe("candidate");
    expect(stop.cognitiveStop).toBe(false);
    expect(stop.outcome).toBe("PROGRESS_WITH_CONTRADICTION");
  });
});

