/**
 * Lifecycle Closure Phase B — presentation helpers + LifecycleSurface refresh.
 * ZERO REAL — mocked server actions only.
 * @vitest-environment jsdom
 */
import { cleanup, render, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { LifecycleSurface } from "@/features/pre-m6-product-ui/surfaces/LifecycleSurface";
import type {
  FinalizationAssessment,
  LifecycleRecommendationEnvelope,
  PilotLifecycleProjection,
} from "@/lib/oa/cycle";
import {
  canOfferGroupedNoGovernedEffects,
  lifecycleCtaPresentation,
  lifecycleStatusBadge,
  nonHumanDecisionBlockers,
  readyExceptFinalizeDecision,
  FINALIZE_HD_BLOCKER,
  blockerLabel,
} from "@/features/pre-m6-product-ui/surfaces/lifecyclePresentation";

function fakeFinalizeEnvelope(): LifecycleRecommendationEnvelope {
  return {
    recommendationId: "epi:lr",
    projectId: "prj:ui",
    intent: "FINALIZE_CURRENT_CYCLE",
    subjectCycleInstanceId: "cyc:ui",
    targetCycleInstanceId: null,
    targetCycleTypeId: null,
    producer: "nora",
    producedAt: "2026-09-10T20:00:00.000Z",
    statement: "Finaliser",
    basisFingerprint: "fp:test",
    basisRefs: {
      projectId: "prj:ui",
      subjectCycleInstanceId: "cyc:ui",
      subjectCycleStatus: "active",
      lpsActiveCycleInstanceId: "cyc:ui",
    },
    semanticKey: "sk:finalize",
    authority: "none",
    isHumanDecision: false,
    doesNotActivateCycle: true,
    doesNotFinalize: true,
    doesNotCreateHumanDecision: true,
    epistemicStatus: "active",
    supersedesRecommendationId: null,
    derivedCurrentness: "CURRENT",
  };
}

const { projectionMock } = vi.hoisted(() => ({
  projectionMock: vi.fn(),
}));

vi.mock("@/features/project-assistant/actions", () => ({
  projectAssistantPilotLifecycleProjection: (...args: unknown[]) =>
    projectionMock(...args),
  projectAssistantPilotLifecycleAction: vi.fn(),
  projectAssistantRecordObligationPolicyAction: vi.fn(),
  projectAssistantCompleteTrajectoryStepAction: vi.fn(),
  projectAssistantResolveBlockingReservationAction: vi.fn(),
}));

vi.mock("@/features/project-assistant/preCycleCandidateTrajectoryActions", () => ({
  projectAssistantPrepareCandidateTrajectoryAction: vi.fn(),
}));

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  projectionMock.mockReset();
});

function assessment(
  overrides: Partial<FinalizationAssessment> &
    Pick<FinalizationAssessment, "blockers" | "canComplete" | "obligations">,
): FinalizationAssessment {
  return {
    cycleInstanceId: "cyc:ui",
    projectId: "prj:ui",
    finalizeDecisionId: null,
    finalizeAccepted: false,
    assessedAt: "2026-09-10T20:00:00.000Z",
    ...overrides,
  };
}

function baseProjection(
  overrides?: Partial<PilotLifecycleProjection>,
): PilotLifecycleProjection {
  return {
    projectId: "prj:ui",
    activeCycleInstanceId: "cyc:ui",
    activeCycle: null,
    pausedCycles: [],
    candidateCycles: [],
    supersededCycles: [],
    terminalCycles: [],
    selectedCycleInstanceId: "cyc:ui",
    selectedStatus: "active",
    selectionAmbiguous: false,
    assessment: null,
    cta: {
      canStart: false,
      canPause: true,
      canResume: false,
      canFinalize: true,
      canCancel: true,
    },
    currentRecommendations: [],
    ...overrides,
  };
}

describe("LC-B Phase B — lifecyclePresentation helpers (D-LC-02/03)", () => {
  it("LC-B-18 unit — readyExceptFinalize when only finalize HD blocker remains", () => {
    const a = assessment({
      canComplete: false,
      blockers: [FINALIZE_HD_BLOCKER],
      obligations: [
        {
          family: "human_decision",
          status: "MISSING",
          blocking: true,
        },
      ],
    });
    expect(nonHumanDecisionBlockers(a)).toEqual([]);
    expect(readyExceptFinalizeDecision(a)).toBe(true);
    expect(blockerLabel(FINALIZE_HD_BLOCKER)).toContain("Pilote");
  });

  it("LC-B-11 unit — non-HD blockers disable readyExceptFinalize", () => {
    const a = assessment({
      canComplete: false,
      blockers: ["exit_criteria_open", FINALIZE_HD_BLOCKER],
      obligations: [
        { family: "exit_criteria", status: "BLOCKING", blocking: true },
      ],
    });
    expect(readyExceptFinalizeDecision(a)).toBe(false);
    expect(nonHumanDecisionBlockers(a)).toEqual(["exit_criteria_open"]);
  });

  it("LC-B-13 unit — canOfferGroupedNoGovernedEffects when UNKNOWN families", () => {
    const a = assessment({
      canComplete: false,
      blockers: ["artifact_applicability_unknown"],
      obligations: [
        {
          family: "artifact",
          status: "PENDING",
          applicability: "UNKNOWN",
          blocking: true,
        },
        {
          family: "evidence",
          status: "PENDING",
          applicability: "UNKNOWN",
          blocking: true,
        },
      ],
    });
    expect(canOfferGroupedNoGovernedEffects(a)).toBe(true);
  });

  it("LC-B-15 unit — APPLICABLE family blocks grouped N/A offer", () => {
    const a = assessment({
      canComplete: false,
      blockers: ["artifact_missing"],
      obligations: [
        {
          family: "artifact",
          status: "MISSING",
          applicability: "APPLICABLE",
          blocking: true,
        },
      ],
    });
    expect(canOfferGroupedNoGovernedEffects(a)).toBe(false);
  });

  it("CTA honesty — Finaliser enabled only when readyExceptFinalize", () => {
    const ready = baseProjection({
      assessment: assessment({
        canComplete: false,
        blockers: [FINALIZE_HD_BLOCKER],
        obligations: [],
      }),
      currentRecommendations: [fakeFinalizeEnvelope()],
    });
    const ctaReady = lifecycleCtaPresentation(ready);
    expect(ctaReady.finalizeEnabled).toBe(true);
    expect(ctaReady.showFinalizePrimary).toBe(true);
    expect(ctaReady.showAssess).toBe(false);
    expect(lifecycleStatusBadge(ready).status).toBe("ready_finalize");

    const blocked = baseProjection({
      assessment: assessment({
        canComplete: false,
        blockers: ["blocking_reservations", FINALIZE_HD_BLOCKER],
        obligations: [],
      }),
    });
    const ctaBlocked = lifecycleCtaPresentation(blocked);
    expect(ctaBlocked.finalizeEnabled).toBe(false);
    expect(ctaBlocked.showAssess).toBe(true);
    expect(lifecycleStatusBadge(blocked).status).toBe("finalization_open");
  });
});

describe("LC-B-01 — LifecycleSurface durableRefreshSignal", () => {
  it("bumps durableRefreshSignal → re-fetches projection (no full remount required)", async () => {
    const candidate = baseProjection({
      selectedCycleInstanceId: null,
      selectedStatus: null,
      activeCycleInstanceId: null,
      cta: {
        canStart: true,
        canPause: false,
        canResume: false,
        canFinalize: false,
        canCancel: false,
      },
    });
    const active = baseProjection({
      selectedStatus: "active",
      activeCycleInstanceId: "cyc:ui",
      selectedCycleInstanceId: "cyc:ui",
    });

    projectionMock
      .mockResolvedValueOnce({
        ok: true,
        projection: candidate,
      })
      .mockResolvedValueOnce({
        ok: true,
        projection: active,
      });

    const { rerender } = render(
      <LifecycleSurface projectId="prj:ui" durableRefreshSignal={0} />,
    );

    await waitFor(() => {
      expect(projectionMock).toHaveBeenCalledTimes(1);
    });

    rerender(<LifecycleSurface projectId="prj:ui" durableRefreshSignal={1} />);

    await waitFor(() => {
      expect(projectionMock).toHaveBeenCalledTimes(2);
    });
    expect(projectionMock).toHaveBeenLastCalledWith({ projectId: "prj:ui" });
  });
});
