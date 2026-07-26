/**
 * T-A6-D4 domain calculation + adversarial eligibility.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  assessClaimEligibility,
  calculateMaturityLevel,
  isMaturityAssessmentId,
  levelRank,
  validateMaturityAssessmentShape,
  type ClaimEvaluation,
  type MaturityAssessment,
} from "@/lib/oa/evidence-review";

function baseClaim(
  overrides: Partial<ClaimEvaluation> = {},
): ClaimEvaluation {
  return {
    schemaVersion: "0.1.0-oa",
    claimEvaluationId: "clm:calc-001",
    claimType: "technique",
    claimStatement: "calc",
    criticality: "non_critical",
    evaluationMethod: "deterministic",
    requiredEvidenceRefs: ["ev:1"],
    providedEvidenceRefs: ["ev:1"],
    reviewBundleId: "rb:1",
    reviewBundleVersion: 2,
    status: "pass",
    proposedBy: {
      actorId: "actor:studio",
      role: "system",
      authorityLevel: "none",
    },
    confirmationAuthority: "system_deterministic",
    proposedAt: "2026-07-26T00:00:00.000Z",
    evaluatedAt: "2026-07-26T00:00:00.000Z",
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: "prv:1",
      actor: {
        actorId: "actor:studio",
        role: "system",
        authorityLevel: "none",
      },
      source: "review",
      timestamp: "2026-07-26T00:00:00.000Z",
      correlationId: "corr:1",
    },
    version: 1,
    ...overrides,
  };
}

describe("T-A6-D4 maturity domain", () => {
  it("validates mat: ids and level order", () => {
    expect(isMaturityAssessmentId("mat:oa-1")).toBe(true);
    expect(isMaturityAssessmentId("clm:x")).toBe(false);
    expect(levelRank("DOCUMENTED")).toBeLessThan(levelRank("ADOPTED"));
  });

  it("eligibility: disputed/waived/superseded/unconfirmed never positive", () => {
    expect(
      assessClaimEligibility({
        claim: baseClaim({ status: "disputed" }),
        expectedVersion: 1,
        isSuperseded: false,
      }).eligibleForPositive,
    ).toBe(false);
    expect(
      assessClaimEligibility({
        claim: baseClaim({ status: "waived" }),
        expectedVersion: 1,
        isSuperseded: false,
      }).ineligibilityCode,
    ).toBe("waived");
    expect(
      assessClaimEligibility({
        claim: baseClaim(),
        expectedVersion: 1,
        isSuperseded: true,
      }).ineligibilityCode,
    ).toBe("superseded");
    expect(
      assessClaimEligibility({
        claim: baseClaim({
          criticality: "critical",
          confirmationAuthority: undefined,
          confirmedBy: undefined,
        }),
        expectedVersion: 1,
        isSuperseded: false,
      }).ineligibilityCode,
    ).toBe("confirmation_required");
    expect(
      assessClaimEligibility({
        claim: baseClaim({
          criticality: "structural",
          confirmationAuthority: "authorized_human",
          confirmedBy: {
            actorId: "actor:reviewer-1",
            role: "reviewer",
            authorityLevel: "N2",
          },
        }),
        expectedVersion: 1,
        isSuperseded: false,
      }).ineligibilityCode,
    ).toBe("structural_confirmation_required");
  });

  it("calculation is fail-closed and never averages", () => {
    const eligible = assessClaimEligibility({
      claim: baseClaim(),
      expectedVersion: 1,
      isSuperseded: false,
    });
    const calc = calculateMaturityLevel({
      requestedLevel: "ADOPTED",
      bindings: [eligible],
      blockingReservationRefs: [],
    });
    expect(calc.supportedLevel).toBe("MODELED");
    expect(calc.proposedLevel).toBe("MODELED");
    expect(calc.gaps.some((g) => g.code === "requested_level_unsupported")).toBe(
      true,
    );

    const none = calculateMaturityLevel({
      requestedLevel: "DOCUMENTED",
      bindings: [
        assessClaimEligibility({
          claim: baseClaim({ status: "waived" }),
          expectedVersion: 1,
          isSuperseded: false,
        }),
      ],
      blockingReservationRefs: [],
    });
    expect(none.supportedLevel).toBeNull();

    const blocked = calculateMaturityLevel({
      requestedLevel: "MODELED",
      bindings: [eligible],
      blockingReservationRefs: ["res:hard"],
    });
    expect(blocked.status).toBe("blocked");
  });

  it("shape forbids autoPromoted true and confirmed with reserves", () => {
    const base: MaturityAssessment = {
      schemaVersion: "0.2.0-oa",
      maturityAssessmentId: "mat:shape-001",
      projectId: "prj:campus360-oa",
      subjectRef: "prj:campus360-oa",
      proposedLevel: "VALIDATED",
      claimEvaluationRefs: ["clm:1"],
      claimBindings: [
        {
          claimEvaluationId: "clm:1",
          claimEvaluationVersion: 1,
          claimType: "technique",
          criticality: "non_critical",
          status: "pass",
          eligibleForPositive: true,
          reviewBundleId: "rb:1",
          reviewBundleVersion: 2,
        },
      ],
      blockingReservationRefs: [],
      proposedBy: {
        actorId: "actor:studio",
        role: "system",
        authorityLevel: "none",
      },
      proposedAt: "2026-07-26T00:00:00.000Z",
      status: "proposed",
      autoPromoted: false,
      provenance: {
        schemaVersion: "0.1.0-oa",
        provenanceRecordId: "prv:1",
        actor: {
          actorId: "actor:studio",
          role: "system",
          authorityLevel: "none",
        },
        source: "review",
        timestamp: "2026-07-26T00:00:00.000Z",
        correlationId: "corr:1",
      },
      version: 1,
    };
    expect(validateMaturityAssessmentShape(base)).toBeNull();
    expect(
      validateMaturityAssessmentShape({
        ...base,
        autoPromoted: true as unknown as false,
      })?.detailCode,
    ).toBe("MATURITY_AUTO_PROMOTION_FORBIDDEN");
    expect(
      validateMaturityAssessmentShape({
        ...base,
        status: "confirmed",
        confirmedLevel: "VALIDATED",
        confirmedBy: {
          actorId: "actor:morris",
          role: "decision_maker",
          authorityLevel: "N3",
        },
        confirmedAt: "2026-07-26T01:00:00.000Z",
        blockingReservationRefs: ["res:x"],
      })?.detailCode,
    ).toBe("MATURITY_BLOCKED_BY_RESERVATION");
  });
});
