/** @vitest-environment jsdom */
/**
 * P6 FramingContinuityCard — presentation only. No OA mutations.
 */
import { describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach } from "vitest";
import { FramingContinuityCard } from "@/features/pre-m6-product-ui/surfaces/FramingContinuityCard";
import type { FramingContinuitySnapshot } from "@/features/project-assistant/f2/chatFirstFramingContinuity";

afterEach(() => {
  cleanup();
});

function snap(
  partial: Partial<FramingContinuitySnapshot> &
    Pick<FramingContinuitySnapshot, "phase">,
): FramingContinuitySnapshot {
  return {
    catalogLabel: "Cadrage",
    targetCycleTypeId: "cyc:framing",
    recommendationId: "rec:1",
    semanticKey: "sk:1",
    trajectoryId: "trj:1",
    trajectoryVersion: 1,
    presentationDigest: "sha256:abc",
    approvalOptionLabel: "Valider la trajectoire initiale Cadrage.",
    preparedCycleInstanceId: null,
    activeCycleInstanceId: null,
    hasCurrentNextCycleRecommendation: true,
    message: "message",
    examination: null,
    ...partial,
  };
}

describe("FramingContinuityCard", () => {
  it("recommendation_ready exposes prepare CTA without inventing HD", () => {
    const onPrepare = vi.fn();
    render(
      <FramingContinuityCard
        continuity={snap({ phase: "recommendation_ready" })}
        busy={false}
        error={null}
        onPrepareCandidate={onPrepare}
        onApproveCandidate={vi.fn()}
        onPrepareCycle={vi.fn()}
        onStartPrepared={vi.fn()}
      />,
    );
    expect(screen.getByTestId("framing-continuity-card")).toHaveAttribute(
      "data-phase",
      "recommendation_ready",
    );
    expect(screen.getByTestId("framing-continuity-authority").textContent).toMatch(
      /Vous décidez/,
    );
    expect(
      screen.getByTestId("framing-continuity-card").textContent,
    ).not.toMatch(/HumanDecision|gate F01|Recommendation ≠/i);
    fireEvent.click(screen.getByTestId("framing-continuity-primary"));
    expect(onPrepare).toHaveBeenCalledTimes(1);
  });

  it("awaiting_trajectory_decision requires digest + examination; keep exploring is non-mutating", () => {
    const onApprove = vi.fn();
    const onKeep = vi.fn();
    const examination = {
      projectObjective: "Mieux comprendre les besoins des PME",
      trajectoryDescription:
        "Ouvrir un Cadrage pour explorer les difficultés de planification et de suivi",
      proposedScopeLabel:
        'Cycle proposé : « Cadrage » (périmètre de travail du prochain cycle, pas encore démarré).',
      knownStepLabels: ["Cadrage"],
      validationImplications:
        "Valider enregistre votre décision sur cette trajectoire pour « Cadrage » et permet de préparer le cycle. Cela ne démarre pas le cycle et n'exécute rien.",
      limitsOrReservations: "Limite : aucune exécution.",
      examinationSufficient: true,
    };
    const { rerender } = render(
      <FramingContinuityCard
        continuity={snap({
          phase: "awaiting_trajectory_decision",
          presentationDigest: null,
          examination: { ...examination, examinationSufficient: false },
        })}
        busy={false}
        error={null}
        onPrepareCandidate={vi.fn()}
        onApproveCandidate={onApprove}
        onPrepareCycle={vi.fn()}
        onStartPrepared={vi.fn()}
        onKeepExploring={onKeep}
      />,
    );
    expect(screen.getByTestId("framing-continuity-primary")).toBeDisabled();
    fireEvent.click(screen.getByTestId("framing-continuity-keep-exploring"));
    expect(onKeep).toHaveBeenCalledTimes(1);
    expect(onApprove).not.toHaveBeenCalled();

    rerender(
      <FramingContinuityCard
        continuity={snap({
          phase: "awaiting_trajectory_decision",
          examination,
        })}
        busy={false}
        error={null}
        onPrepareCandidate={vi.fn()}
        onApproveCandidate={onApprove}
        onPrepareCycle={vi.fn()}
        onStartPrepared={vi.fn()}
        onKeepExploring={onKeep}
      />,
    );
    expect(screen.getByTestId("framing-continuity-examination")).toBeInTheDocument();
    expect(screen.getByTestId("framing-exam-trajectory").textContent).toMatch(
      /explorer les difficultés/i,
    );
    expect(
      screen.getByTestId("framing-exam-project-objective").textContent,
    ).toMatch(/besoins des PME/i);
    fireEvent.click(screen.getByTestId("framing-continuity-primary"));
    expect(onApprove).toHaveBeenCalledTimes(1);
  });

  it("ready_to_start exposes START CTA; active renders nothing", () => {
    const onStart = vi.fn();
    const { rerender } = render(
      <FramingContinuityCard
        continuity={snap({
          phase: "ready_to_start",
          preparedCycleInstanceId: "cyc:prep",
        })}
        busy={false}
        error={null}
        onPrepareCandidate={vi.fn()}
        onApproveCandidate={vi.fn()}
        onPrepareCycle={vi.fn()}
        onStartPrepared={onStart}
      />,
    );
    fireEvent.click(screen.getByTestId("framing-continuity-primary"));
    expect(onStart).toHaveBeenCalledTimes(1);

    rerender(
      <FramingContinuityCard
        continuity={snap({
          phase: "active",
          activeCycleInstanceId: "cyc:live",
        })}
        busy={false}
        error={null}
        onPrepareCandidate={vi.fn()}
        onApproveCandidate={vi.fn()}
        onPrepareCycle={vi.fn()}
        onStartPrepared={vi.fn()}
      />,
    );
    expect(screen.queryByTestId("framing-continuity-card")).toBeNull();
  });
});
