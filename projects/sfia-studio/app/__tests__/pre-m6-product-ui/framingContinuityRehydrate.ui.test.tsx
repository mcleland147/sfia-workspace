/** @vitest-environment jsdom */
/**
 * CC-01 / CC-02 — Framing continuity rehydration + post-START display sync.
 * Mirrors the Product-read → display projection used by useProductConversation.
 */
import React, { useEffect, useState } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import type { FramingContinuitySnapshot } from "@/features/project-assistant/f2/chatFirstFramingContinuity";
import { framingContinuityForConversationDisplay } from "@/features/project-assistant/f2/chatFirstFramingContinuity";
import { FramingContinuityCard } from "@/features/pre-m6-product-ui/surfaces/FramingContinuityCard";

const readFraming = vi.fn();

vi.mock(
  "@/features/project-assistant/preCycleCandidateTrajectoryActions",
  () => ({
    projectAssistantReadFramingContinuityAction: (...args: unknown[]) =>
      readFraming(...args),
    projectAssistantAdvanceFramingContinuityAction: vi.fn(),
  }),
);

function snap(
  phase: FramingContinuitySnapshot["phase"],
): FramingContinuitySnapshot {
  return {
    phase,
    catalogLabel: "Cadrage",
    targetCycleTypeId: "cyc:framing",
    recommendationId: "rec:1",
    semanticKey: "sk:1",
    trajectoryId: "trj:1",
    trajectoryVersion: 1,
    presentationDigest:
      phase === "awaiting_trajectory_decision" ? "sha256:abc" : null,
    approvalOptionLabel: "Valider cette direction pour « Cadrage ».",
    preparedCycleInstanceId: phase === "ready_to_start" ? "cyc:prep" : null,
    activeCycleInstanceId: phase === "active" ? "cyc:live" : null,
    hasCurrentNextCycleRecommendation: true,
    message: `phase:${phase}`,
    examination: null,
  };
}

/** Minimal rehydrate harness mirroring CC-01 effect in useProductConversation. */
function FramingRehydrateHarness({
  projectId,
  refreshSignal = 0,
}: {
  projectId: string;
  refreshSignal?: number;
}) {
  const [continuity, setContinuity] =
    useState<FramingContinuitySnapshot | null>(null);

  useEffect(() => {
    let cancelled = false;
    const requestProjectId = projectId;
    setContinuity(null);
    void (async () => {
      const result = await readFraming({ projectId: requestProjectId });
      if (cancelled) return;
      if (!result.ok || !result.continuity) {
        setContinuity(null);
        return;
      }
      setContinuity(framingContinuityForConversationDisplay(result.continuity));
    })();
    return () => {
      cancelled = true;
    };
  }, [projectId, refreshSignal]);

  if (!continuity) {
    return <div data-testid="framing-empty">empty</div>;
  }
  return (
    <div data-testid="framing-slot">
      <FramingContinuityCard
        continuity={continuity}
        busy={false}
        error={null}
        onPrepareCandidate={vi.fn()}
        onApproveCandidate={vi.fn()}
        onPrepareCycle={vi.fn()}
        onStartPrepared={vi.fn()}
      />
    </div>
  );
}

afterEach(() => {
  cleanup();
  readFraming.mockReset();
});

describe("Framing continuity rehydrate / post-START sync", () => {
  beforeEach(() => {
    readFraming.mockReset();
  });

  it("CC-01 — mounts with ready_to_start card from Product read (no prior action)", async () => {
    readFraming.mockResolvedValue({
      ok: true,
      continuity: snap("ready_to_start"),
    });
    render(<FramingRehydrateHarness projectId="prj:a" />);
    await waitFor(() => {
      expect(screen.getByTestId("framing-continuity-card")).toHaveAttribute(
        "data-phase",
        "ready_to_start",
      );
    });
    expect(readFraming).toHaveBeenCalledWith({ projectId: "prj:a" });
    expect(screen.getByTestId("framing-continuity-primary").textContent).toMatch(
      /Démarrer/,
    );
  });

  it("CC-01 — remount / refreshSignal rebuilds awaiting decision from Product", async () => {
    readFraming.mockResolvedValue({
      ok: true,
      continuity: snap("awaiting_trajectory_decision"),
    });
    const { rerender } = render(
      <FramingRehydrateHarness projectId="prj:a" refreshSignal={0} />,
    );
    await waitFor(() => {
      expect(screen.getByTestId("framing-continuity-card")).toHaveAttribute(
        "data-phase",
        "awaiting_trajectory_decision",
      );
    });
    readFraming.mockResolvedValue({
      ok: true,
      continuity: snap("recommendation_ready"),
    });
    rerender(<FramingRehydrateHarness projectId="prj:a" refreshSignal={1} />);
    await waitFor(() => {
      expect(screen.getByTestId("framing-continuity-card")).toHaveAttribute(
        "data-phase",
        "recommendation_ready",
      );
    });
  });

  it("CC-02 — active Product phase clears START card after sync", async () => {
    readFraming.mockResolvedValue({
      ok: true,
      continuity: snap("ready_to_start"),
    });
    const { rerender } = render(
      <FramingRehydrateHarness projectId="prj:a" refreshSignal={0} />,
    );
    await waitFor(() => {
      expect(screen.getByTestId("framing-continuity-card")).toBeTruthy();
    });
    readFraming.mockResolvedValue({
      ok: true,
      continuity: snap("active"),
    });
    rerender(<FramingRehydrateHarness projectId="prj:a" refreshSignal={1} />);
    await waitFor(() => {
      expect(screen.getByTestId("framing-empty")).toBeTruthy();
    });
    expect(screen.queryByTestId("framing-continuity-card")).toBeNull();
  });

  it("CC-01 — project change ignores stale late response from prior project", async () => {
    let resolveA: (v: unknown) => void = () => {};
    const pendingA = new Promise((resolve) => {
      resolveA = resolve;
    });
    readFraming.mockImplementation(({ projectId }: { projectId: string }) => {
      if (projectId === "prj:a") return pendingA;
      return Promise.resolve({
        ok: true,
        continuity: snap("ready_to_start"),
      });
    });
    const { rerender } = render(<FramingRehydrateHarness projectId="prj:a" />);
    rerender(<FramingRehydrateHarness projectId="prj:b" />);
    await waitFor(() => {
      expect(screen.getByTestId("framing-continuity-card")).toHaveAttribute(
        "data-phase",
        "ready_to_start",
      );
    });
    resolveA({
      ok: true,
      continuity: {
        ...snap("awaiting_trajectory_decision"),
        catalogLabel: "STALE-A",
      },
    });
    await new Promise((r) => setTimeout(r, 30));
    expect(
      screen.getByTestId("framing-continuity-title").textContent,
    ).not.toMatch(/STALE-A/);
  });
});
