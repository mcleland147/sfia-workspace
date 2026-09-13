/** @vitest-environment node */
/**
 * D-GF-START-01 smoke — qualification signals + step.cycleTypeId + presentation digest.
 */
import { describe, expect, it } from "vitest";
import {
  buildCandidateTrajectoryPresentationMaterial,
  buildSingleRecommendedCycleStep,
  computeCandidateTrajectoryPresentationDigest,
  parseExplicitQualificationSignals,
  projectCkcResolutionRef,
  mintTrajectoryBoundCycleInstanceId,
  selectExactPrepareStep,
  validateLifecycleRecommendation,
} from "@/lib/oa/cycle";

const COMPLETE_SIGNALS = {
  structuralChange: false,
  securityImpact: true,
  architectureImpact: false,
  dataImpact: false,
  irreversible: false,
  lowRiskBounded: false,
} as const;

describe("D-GF-START-01 smoke", () => {
  it("requires complete signals on NEXT_CYCLE success; FINALIZE ignores", () => {
    const nextMissing = validateLifecycleRecommendation({
      projectId: "prj:gf-start-01",
      candidate: {
        intent: "NEXT_CYCLE",
        statement: "Proposer Cadrage.",
        targetCycleTypeId: "cyc:framing",
      },
      cycles: [],
      lpsActiveCycleInstanceId: null,
      hasTrajectoryContext: true,
    });
    expect(nextMissing.ok).toBe(false);
    if (!nextMissing.ok) {
      expect(nextMissing.code).toBe("LR_QUALIFICATION_SIGNALS_INCOMPLETE");
    }

    const nextOk = validateLifecycleRecommendation({
      projectId: "prj:gf-start-01",
      candidate: {
        intent: "NEXT_CYCLE",
        statement: "Proposer Cadrage.",
        targetCycleTypeId: "cyc:framing",
        qualificationSignals: COMPLETE_SIGNALS,
      },
      cycles: [],
      lpsActiveCycleInstanceId: null,
      hasTrajectoryContext: true,
    });
    expect(nextOk.ok).toBe(true);
    if (nextOk.ok) {
      expect(nextOk.qualificationSignals).toEqual(COMPLETE_SIGNALS);
    }

    const finalize = validateLifecycleRecommendation({
      projectId: "prj:gf-start-01",
      candidate: {
        intent: "FINALIZE_CURRENT_CYCLE",
        statement: "Finaliser le cycle.",
        subjectCycleInstanceId: "cyc:active-1",
        qualificationSignals: null,
      },
      cycles: [
        {
          schemaVersion: "0.1.0-oa",
          cycleInstanceId: "cyc:active-1",
          cycleTypeId: "cyc:framing",
          projectId: "prj:gf-start-01",
          profile: "Standard",
          status: "active",
          createdAt: "2026-09-10T00:00:00.000Z",
        },
      ],
      lpsActiveCycleInstanceId: "cyc:active-1",
    });
    expect(finalize.ok).toBe(true);
    if (finalize.ok) {
      expect(finalize.qualificationSignals).toBeUndefined();
    }
  });

  it("bridge step carries cycleTypeId; never from label", () => {
    const built = buildSingleRecommendedCycleStep({
      targetCycleTypeId: "cyc:framing",
      stepId: "stp:framing-1",
    });
    expect(built.ok).toBe(true);
    if (built.ok) {
      expect(built.step.cycleTypeId).toBe("cyc:framing");
      expect(built.step.label).toBe(built.catalogLabel);
    }
  });

  it("presentation digest changes when a qualification signal flips", () => {
    const trajectory = {
      schemaVersion: "0.1.0-oa" as const,
      trajectoryId: "trj:gf-1",
      projectId: "prj:gf-start-01",
      version: 1,
      status: "candidate" as const,
      steps: [
        {
          stepId: "stp:1",
          order: 1,
          label: "Cadrage",
          state: "pending" as const,
          cycleTypeId: "cyc:framing",
        },
      ],
    };
    const base = {
      projectId: "prj:gf-start-01",
      lpsId: "lps:1",
      lpsVersion: 1,
      trajectory,
      provenanceObservationId: "epi:prov-1",
      recommendationId: "epi:lr-1",
      semanticKey: "sem".padEnd(32, "0"),
      targetCycleTypeId: "cyc:framing",
    };
    const a = buildCandidateTrajectoryPresentationMaterial({
      ...base,
      qualificationSignals: COMPLETE_SIGNALS,
    });
    const b = buildCandidateTrajectoryPresentationMaterial({
      ...base,
      qualificationSignals: { ...COMPLETE_SIGNALS, securityImpact: false },
    });
    expect(computeCandidateTrajectoryPresentationDigest(a)).not.toBe(
      computeCandidateTrajectoryPresentationDigest(b),
    );
  });

  it("mints deterministic cyc:trj- id and selects exact pending step", () => {
    const id = mintTrajectoryBoundCycleInstanceId({
      projectId: "prj:a",
      trajectoryId: "trj:a",
      trajectoryVersion: 1,
      stepId: "stp:1",
      cycleTypeId: "cyc:framing",
    });
    expect(id.startsWith("cyc:trj-")).toBe(true);
    expect(id.length).toBe("cyc:trj-".length + 24);

    const selected = selectExactPrepareStep({
      trajectory: {
        schemaVersion: "0.1.0-oa",
        trajectoryId: "trj:a",
        projectId: "prj:a",
        version: 1,
        status: "validated",
        steps: [
          {
            stepId: "stp:1",
            order: 1,
            label: "Cadrage",
            state: "pending",
            cycleTypeId: "cyc:framing",
          },
        ],
        decidedByDecisionRef: "dec:1",
      },
      targetCycleTypeId: "cyc:framing",
    });
    expect(selected.ok).toBe(true);

    expect(
      parseExplicitQualificationSignals({ structuralChange: true }),
    ).toBeNull();
    expect(parseExplicitQualificationSignals(COMPLETE_SIGNALS)).toEqual(
      COMPLETE_SIGNALS,
    );

    expect(
      projectCkcResolutionRef({
        catalogHash: "sha256:abcdef0123456789",
        correlationId: "cor:gf-prep-deadbeef",
      }),
    ).toMatch(/^ckc:m2-/);
  });
});
