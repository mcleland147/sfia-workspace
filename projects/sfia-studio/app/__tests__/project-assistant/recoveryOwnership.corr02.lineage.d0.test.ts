/**
 * CORR-02 / C4 — durable GOVERNED recovery lineage fail-closed (pure).
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { assertGovernedRecoveryLineage } from "@/features/project-assistant/w2/readRecoveryOwnedDecisionContinuity";
import { GOVERNED_OPTION_REF } from "@/features/project-assistant/w2/trajectoryOptions";
import type { DecisionBasis } from "@/lib/oa/decision/domain/types";
import type { ProjectTrajectory } from "@/lib/oa/cycle/domain/types";

const PROJECT = "prj:corr02-lineage";
const TRAJ = "trj:corr02";
const DEC = "dec:corr02-gov";

function baseTrajectory(
  overrides: Partial<ProjectTrajectory> = {},
): ProjectTrajectory {
  return {
    schemaVersion: "0.1.0-oa",
    trajectoryId: TRAJ,
    projectId: PROJECT,
    version: 2,
    status: "validated",
    steps: [],
    decidedByDecisionRef: DEC,
    decidedOptionRef: GOVERNED_OPTION_REF,
    ...overrides,
  };
}

function baseBasis(
  overrides: Partial<DecisionBasis> = {},
  ctxOverrides: Partial<NonNullable<DecisionBasis["trajectoryContext"]>> = {},
): DecisionBasis {
  return {
    sourceType: "trajectory_option",
    sourceRef: "optset:corr02",
    sourceDigest: "digest",
    projectId: PROJECT,
    proposalContext: {
      lpsId: "lps:1",
      lpsVersion: 1,
    },
    trajectoryContext: {
      trajectoryId: TRAJ,
      candidateVersion: 2,
      optionRefs: [
        "opt:trajectory:bounded-direct",
        GOVERNED_OPTION_REF,
      ],
      selectedOptionRef: GOVERNED_OPTION_REF,
      ...ctxOverrides,
    },
    executionBasis: {},
    ...overrides,
  };
}

describe("CORR-02 C4 — assertGovernedRecoveryLineage", () => {
  it("positive — coherent tip + GOVERNED basis", () => {
    expect(
      assertGovernedRecoveryLineage({
        projectId: PROJECT,
        trajectory: baseTrajectory(),
        decisionId: DEC,
        selectedOptionId: GOVERNED_OPTION_REF,
        basis: baseBasis(),
      }),
    ).toBeNull();
  });

  it("1 — decidedOptionRef != GOVERNED → fail closed", () => {
    const r = assertGovernedRecoveryLineage({
      projectId: PROJECT,
      trajectory: baseTrajectory({
        decidedOptionRef: "opt:trajectory:bounded-direct",
      }),
      decisionId: DEC,
      selectedOptionId: GOVERNED_OPTION_REF,
      basis: baseBasis(),
    });
    expect(r?.ok).toBe(false);
    expect(r && !r.ok ? r.code : null).toBe(
      "RECOVERY_DECISION_CONTINUITY_FAILED",
    );
  });

  it("2 — selectedOptionId != decidedOptionRef → fail closed", () => {
    const r = assertGovernedRecoveryLineage({
      projectId: PROJECT,
      trajectory: baseTrajectory(),
      decisionId: DEC,
      selectedOptionId: "opt:trajectory:bounded-direct",
      basis: baseBasis(),
    });
    expect(r?.ok).toBe(false);
    expect(r && !r.ok ? r.code : null).toBe(
      "RECOVERY_DECISION_CONTINUITY_FAILED",
    );
  });

  it("3 — trajectoryContext missing → fail closed", () => {
    const basis = baseBasis();
    delete (basis as { trajectoryContext?: unknown }).trajectoryContext;
    const r = assertGovernedRecoveryLineage({
      projectId: PROJECT,
      trajectory: baseTrajectory(),
      decisionId: DEC,
      selectedOptionId: GOVERNED_OPTION_REF,
      basis,
    });
    expect(r?.ok).toBe(false);
    expect(r && !r.ok ? r.code : null).toBe(
      "RECOVERY_DECISION_CONTINUITY_FAILED",
    );
  });

  it("4 — trajectoryContext.trajectoryId mismatch → fail closed", () => {
    const r = assertGovernedRecoveryLineage({
      projectId: PROJECT,
      trajectory: baseTrajectory(),
      decisionId: DEC,
      selectedOptionId: GOVERNED_OPTION_REF,
      basis: baseBasis({}, { trajectoryId: "trj:other" }),
    });
    expect(r?.ok).toBe(false);
    expect(r && !r.ok ? r.code : null).toBe(
      "RECOVERY_DECISION_CONTINUITY_FAILED",
    );
  });

  it("5 — trajectoryContext.selectedOptionRef mismatch → fail closed", () => {
    const r = assertGovernedRecoveryLineage({
      projectId: PROJECT,
      trajectory: baseTrajectory(),
      decisionId: DEC,
      selectedOptionId: GOVERNED_OPTION_REF,
      basis: baseBasis(
        {},
        {
          selectedOptionRef: "opt:trajectory:bounded-direct",
          optionRefs: [
            "opt:trajectory:bounded-direct",
            GOVERNED_OPTION_REF,
          ],
        },
      ),
    });
    expect(r?.ok).toBe(false);
    expect(r && !r.ok ? r.code : null).toBe(
      "RECOVERY_DECISION_CONTINUITY_FAILED",
    );
  });

  it("6 — optionRefs missing GOVERNED → fail closed", () => {
    const r = assertGovernedRecoveryLineage({
      projectId: PROJECT,
      trajectory: baseTrajectory(),
      decisionId: DEC,
      selectedOptionId: GOVERNED_OPTION_REF,
      basis: baseBasis(
        {},
        { optionRefs: ["opt:trajectory:bounded-direct"] },
      ),
    });
    expect(r?.ok).toBe(false);
    expect(r && !r.ok ? r.code : null).toBe(
      "RECOVERY_DECISION_CONTINUITY_FAILED",
    );
  });

  it("candidateVersion ≠ tip version → fail closed", () => {
    const r = assertGovernedRecoveryLineage({
      projectId: PROJECT,
      trajectory: baseTrajectory({ version: 3 }),
      decisionId: DEC,
      selectedOptionId: GOVERNED_OPTION_REF,
      basis: baseBasis({}, { candidateVersion: 2 }),
    });
    expect(r?.ok).toBe(false);
    expect(r && !r.ok ? r.code : null).toBe(
      "RECOVERY_DECISION_CONTINUITY_FAILED",
    );
  });

  it("status not validated|active → fail closed", () => {
    const r = assertGovernedRecoveryLineage({
      projectId: PROJECT,
      trajectory: baseTrajectory({ status: "candidate" }),
      decisionId: DEC,
      selectedOptionId: GOVERNED_OPTION_REF,
      basis: baseBasis(),
    });
    expect(r?.ok).toBe(false);
    expect(r && !r.ok ? r.code : null).toBe(
      "RECOVERY_DECISION_CONTINUITY_FAILED",
    );
  });
});
