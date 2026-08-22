/** @vitest-environment jsdom */
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { RecoverySurface } from "@/features/pre-m6-product-ui/surfaces/RecoverySurface";
import { ProjectRecoveryBanner } from "@/features/studio-projects/ProjectRecoveryBanner";
import {
  W1_DURABLE_DISCLOSURE,
  W1_NON_DURABLE_DISCLOSURE,
  W1_PROPOSED_NOT_DECIDED_DISCLOSURE,
  W1_REQUALIFY_CTA,
  W1_REQUALIFY_SHORT_CTA,
  W1_RESTORED_GRANTED_NOT_CURRENT_AUTHORITY,
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

  it("shouldShowProjectRecovery remains contextual (not nominal open)", () => {
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
});

describe("W1 Track E — recovery UI disclosures", () => {
  it("RecoverySurface renders W1 disclosures and controlled requalify CTA", () => {
    render(<RecoverySurface />);
    expect(screen.getByTestId("w1-recovery-disclosures")).toBeTruthy();
    expect(screen.getByText(W1_DURABLE_DISCLOSURE)).toBeTruthy();
    expect(screen.getByText(W1_NON_DURABLE_DISCLOSURE)).toBeTruthy();
    expect(screen.getByText(W1_PROPOSED_NOT_DECIDED_DISCLOSURE)).toBeTruthy();
    expect(screen.getByText(W1_RESTORED_GRANTED_NOT_CURRENT_AUTHORITY)).toBeTruthy();
    expect(screen.getByText(W1_DURABLE_DISCLOSURE).textContent?.toLowerCase()).not.toMatch(
      /trajectoire \(confirmation accordée\)/,
    );
    expect(screen.getByTestId("recovery-requalify").textContent).toBe(
      W1_REQUALIFY_CTA,
    );
    expect(screen.getByTestId("recovery-requalify").textContent?.toLowerCase()).toMatch(
      /requalification contrôlée/,
    );
  });

  it("ProjectRecoveryBanner renders honesty copy and controlled requalify CTA", () => {
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
