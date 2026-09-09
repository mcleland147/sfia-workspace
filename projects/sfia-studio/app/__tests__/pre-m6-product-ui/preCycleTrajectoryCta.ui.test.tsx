/** @vitest-environment jsdom */
/**
 * BAR-TRJ-27/28 — pre-cycle W2 CTA honesty (CR-TRJ-02).
 * ZERO NEW REAL.
 */
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { TrajectorySurface } from "@/features/pre-m6-product-ui/surfaces/TrajectorySurface";
import { LifecycleSurface } from "@/features/pre-m6-product-ui/surfaces/LifecycleSurface";

const {
  proposeMock,
  readPreCycleMock,
  prepareMock,
  lifecycleProjectionMock,
} = vi.hoisted(() => ({
  proposeMock: vi.fn(),
  readPreCycleMock: vi.fn(),
  prepareMock: vi.fn(),
  lifecycleProjectionMock: vi.fn(),
}));

vi.mock("@/features/project-assistant/w2/actions", () => ({
  w2ProposeTrajectoryOptionsAction: (...args: unknown[]) => proposeMock(...args),
  w2DecideTrajectoryAction: vi.fn(),
  w2InspectExecutionContractAction: vi.fn(),
  w2ConfirmExecutionContractAction: vi.fn(),
  w2AuthorizeExecutionContractAction: vi.fn(),
  w2AmendExecutionContractAction: vi.fn(),
  w2PrepareExecutionContractAction: vi.fn(),
  w2GovernedExecuteSelectAction: vi.fn(),
  w2GovernedExecuteStartAction: vi.fn(),
  w2GovernedExecuteCompleteAction: vi.fn(),
  w2GovernedExecuteCancelAction: vi.fn(),
  w2MaterializeProductOutcomeAction: vi.fn(),
  w2RehydrateProductOutcomeAction: vi.fn(),
  w2ReadProjectHistoryAction: vi.fn().mockResolvedValue({
    ok: false,
    code: "UNUSED",
    message: "unused",
  }),
}));

vi.mock("@/features/project-assistant/preCycleCandidateTrajectoryActions", () => ({
  projectAssistantReadPreCycleCandidateTrajectoryAction: (...args: unknown[]) =>
    readPreCycleMock(...args),
  projectAssistantPrepareCandidateTrajectoryAction: (...args: unknown[]) =>
    prepareMock(...args),
}));

vi.mock("@/features/project-assistant/actions", () => ({
  projectAssistantPilotLifecycleProjection: (...args: unknown[]) =>
    lifecycleProjectionMock(...args),
  projectAssistantPilotLifecycleAction: vi.fn(),
}));

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  proposeMock.mockReset();
  readPreCycleMock.mockReset();
  prepareMock.mockReset();
  lifecycleProjectionMock.mockReset();
});

describe("BAR-TRJ-27/28 — pre-cycle W2 CTA honesty", () => {
  it("BAR-TRJ-27 — CURRENT LR + no candidate + no active cycle: Lifecycle prepare present, W2 CTA absent", async () => {
    lifecycleProjectionMock.mockResolvedValue({
      ok: true,
      projection: {
        projectId: "prj:trj-27",
        activeCycleInstanceId: null,
        selectedCycleInstanceId: null,
        selectedStatus: null,
        selectionAmbiguous: false,
        candidateCycles: [],
        currentRecommendations: [
          {
            recommendationId: "epi:lr:27",
            projectId: "prj:trj-27",
            intent: "NEXT_CYCLE",
            subjectCycleInstanceId: null,
            targetCycleInstanceId: null,
            targetCycleTypeId: "cyc:framing",
            producer: "nora",
            producedAt: "2026-09-09T20:00:00.000Z",
            statement: "Recommander un Cadrage.",
            basisFingerprint: "fp",
            basisRefs: { projectId: "prj:trj-27" },
            semanticKey: "key27",
            authority: "none",
            isHumanDecision: false,
            doesNotActivateCycle: true,
            doesNotFinalize: true,
            doesNotCreateHumanDecision: true,
            epistemicStatus: "active",
            supersedesRecommendationId: null,
            derivedCurrentness: "CURRENT",
          },
        ],
        cta: {
          canStart: false,
          canPause: false,
          canResume: false,
          canFinalize: false,
          canCancel: false,
          canReevaluate: false,
        },
      },
    });

    readPreCycleMock.mockResolvedValue({
      ok: true,
      candidate: null,
      activeCycleInstanceId: null,
      hasCurrentNextCycleRecommendation: true,
    });

    render(<LifecycleSurface projectId="prj:trj-27" />);
    await waitFor(() => {
      expect(
        screen.getByTestId("lifecycle-trajectory-escalate"),
      ).toBeTruthy();
    });
    expect(screen.getByTestId("lifecycle-trajectory-escalate").textContent).toBe(
      "Préparer la trajectoire",
    );

    cleanup();
    render(<TrajectorySurface projectId="prj:trj-27" />);
    await waitFor(() => {
      expect(readPreCycleMock).toHaveBeenCalled();
    });
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
    expect(proposeMock).not.toHaveBeenCalled();
    expect(screen.getByTestId("pre-cycle-prepare-trajectory-hint")).toBeTruthy();
  });

  it("BAR-TRJ-28 — candidate + no active cycle: candidate visible, W2 CTA absent", async () => {
    readPreCycleMock.mockResolvedValue({
      ok: true,
      candidate: {
        trajectoryId: "trj:cand-28",
        version: 1,
        status: "candidate",
        projectId: "prj:trj-28",
        steps: [
          {
            stepId: "stp:cadrage-28",
            order: 1,
            label: "Cadrage",
            state: "pending",
          },
        ],
        catalogLabel: "Cadrage",
        targetCycleTypeId: "cyc:framing",
        decidedByDecisionRef: null,
        isEffectiveCurrent: false,
      },
      activeCycleInstanceId: null,
      hasCurrentNextCycleRecommendation: false,
    });

    render(<TrajectorySurface projectId="prj:trj-28" />);
    await waitFor(() => {
      expect(screen.getByTestId("pre-cycle-candidate-trajectory")).toBeTruthy();
    });
    expect(screen.getByText("Trajectoire proposée")).toBeTruthy();
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
    expect(proposeMock).not.toHaveBeenCalled();
  });

  it("BAR-TRJ-29 UI — active cycle keeps W2 CTA", async () => {
    readPreCycleMock.mockResolvedValue({
      ok: true,
      candidate: null,
      activeCycleInstanceId: "cycinst:active-29",
      hasCurrentNextCycleRecommendation: false,
    });

    render(<TrajectorySurface projectId="prj:trj-29" />);
    await waitFor(() => {
      expect(screen.getByTestId("w2-propose-options")).toBeTruthy();
    });
    expect(screen.getByTestId("w2-propose-options").textContent).toContain(
      "Instruire les options",
    );
  });
});
