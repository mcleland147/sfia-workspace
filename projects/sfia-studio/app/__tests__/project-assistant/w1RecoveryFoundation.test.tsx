/** @vitest-environment jsdom */
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { RecoverySurface } from "@/features/pre-m6-product-ui/surfaces/RecoverySurface";
import { ProjectRecoveryBanner } from "@/features/studio-projects/ProjectRecoveryBanner";
import {
  W1_DURABLE_DISCLOSURE,
  W1_NON_DURABLE_DISCLOSURE,
  W1_PROPOSED_NOT_DECIDED_DISCLOSURE,
  W1_REQUALIFY_CTA,
  W1_REQUALIFY_SHORT_CTA,
  W1_RESTORED_GRANTED_NOT_CURRENT_AUTHORITY,
  W1_AUTO_RESUME_RESTORED_HINT,
  W1_TRANSCRIPT_UNAVAILABLE_DISCLOSURE,
  resolveProjectOpenContinuityPresentation,
  shouldShowProjectRecovery,
  w1RecoveryDisclosures,
  w1RestartHonestyMessage,
} from "@/features/project-assistant/presentationLabels";

afterEach(() => {
  cleanup();
});

describe("W1 Track E — recovery foundation helpers", () => {
  it("exposes durable vs non-durable disclosure strings", () => {
    const disclosures = w1RecoveryDisclosures();
    expect(disclosures.durable).toEqual(
      expect.arrayContaining(["Project", "LPS", "Trajectoire effective/décidée"]),
    );
    expect(disclosures.nonDurable).toEqual(
      expect.arrayContaining(["Conversation", "Confirmation demandée"]),
    );
    expect(disclosures.durable).not.toEqual(
      expect.arrayContaining(["Trajectoire (confirmation accordée)"]),
    );
    expect(disclosures.restoredGrantedNotice).toBe(
      W1_RESTORED_GRANTED_NOT_CURRENT_AUTHORITY,
    );
    expect(disclosures.requalifyCta).toBe(W1_REQUALIFY_CTA);
  });

  it("restart honesty message states restored granted != current authority", () => {
    const message = w1RestartHonestyMessage();
    expect(message).toContain(W1_DURABLE_DISCLOSURE);
    expect(message).toContain(W1_NON_DURABLE_DISCLOSURE);
    expect(message).toContain(W1_RESTORED_GRANTED_NOT_CURRENT_AUTHORITY);
    expect(message).toContain(W1_PROPOSED_NOT_DECIDED_DISCLOSURE);
    expect(message.toLowerCase()).not.toMatch(
      /trajectoire \(confirmation accordée\)/,
    );
    expect(message.toLowerCase()).toMatch(/autorité effective courante/);
  });

  it("shouldShowProjectRecovery remains contextual (legacy F10 helper)", () => {
    expect(
      shouldShowProjectRecovery({
        hasDurableEvidenceOutcome: false,
        livingStateVersion: 1,
        activeCycleInstanceId: null,
      }),
    ).toBe(false);
    expect(
      shouldShowProjectRecovery({
        hasDurableEvidenceOutcome: false,
        livingStateVersion: 2,
        activeCycleInstanceId: null,
      }),
    ).toBe(true);
  });

  it("AR — resolveProjectOpenContinuityPresentation modes", () => {
    expect(resolveProjectOpenContinuityPresentation("pending")).toEqual({
      kind: "none",
    });
    expect(resolveProjectOpenContinuityPresentation("empty")).toEqual({
      kind: "none",
    });
    expect(resolveProjectOpenContinuityPresentation("available")).toEqual({
      kind: "restored_hint",
      message: W1_AUTO_RESUME_RESTORED_HINT,
    });
    expect(resolveProjectOpenContinuityPresentation("unavailable")).toEqual({
      kind: "transcript_unavailable",
      message: W1_TRANSCRIPT_UNAVAILABLE_DISCLOSURE,
    });
  });

  it("AR — available/empty honesty is not a Recovery chooser", () => {
    expect(w1RestartHonestyMessage({ transcriptAvailability: "available" })).toBe(
      W1_AUTO_RESUME_RESTORED_HINT,
    );
    expect(w1RestartHonestyMessage({ transcriptAvailability: "empty" })).toBe(
      "",
    );
    expect(
      w1RestartHonestyMessage({ transcriptAvailability: "unavailable" }),
    ).toBe(W1_TRANSCRIPT_UNAVAILABLE_DISCLOSURE);
  });
});

describe("AUTOMATIC RESUME — RecoverySurface anomaly only", () => {
  it("renders precise transcript-unavailable disclosure without resume/requalify CTAs", () => {
    render(<RecoverySurface />);
    expect(screen.getByTestId("project-transcript-anomaly")).toBeTruthy();
    expect(screen.getByTestId("project-transcript-anomaly-text").textContent).toBe(
      W1_TRANSCRIPT_UNAVAILABLE_DISCLOSURE,
    );
    expect(screen.queryByTestId("recovery-resume-durable")).toBeNull();
    expect(screen.queryByTestId("recovery-requalify")).toBeNull();
    expect(screen.queryByText(/Reprendre l'état enregistré/i)).toBeNull();
    expect(screen.queryByText(/nouvelle intention/i)).toBeNull();
  });

  it("optional retry fires onRetryTranscript only", () => {
    const onRetry = vi.fn();
    render(<RecoverySurface onRetryTranscript={onRetry} />);
    fireEvent.click(screen.getByTestId("recovery-retry-transcript"));
    expect(onRetry).toHaveBeenCalledTimes(1);
  });

  it("legacy ProjectRecoveryBanner still exposes controlled requalify CTA", () => {
    render(<ProjectRecoveryBanner />);
    expect(screen.getByTestId("w1-recovery-disclosures")).toBeTruthy();
    expect(screen.getByText(W1_DURABLE_DISCLOSURE)).toBeTruthy();
    expect(screen.getByText(W1_NON_DURABLE_DISCLOSURE)).toBeTruthy();
    expect(screen.getByTestId("recovery-requalify").textContent).toBe(
      W1_REQUALIFY_SHORT_CTA,
    );
    expect(w1RestartHonestyMessage()).toContain(
      "autorité effective courante",
    );
  });
});
