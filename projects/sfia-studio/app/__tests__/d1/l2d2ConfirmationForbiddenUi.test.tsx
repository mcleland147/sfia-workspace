/**
 * L2-D2 CORR-02 / CR-D2-02 — ConfirmationPanel must not call onDone on FORBIDDEN.
 * @vitest-environment jsdom
 */
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

const actionExecuteConfirmationMock = vi.fn();

vi.mock("@/lib/d1/confirmation/actions", () => ({
  actionExecuteConfirmation: (...args: unknown[]) =>
    actionExecuteConfirmationMock(...args),
}));

import { ConfirmationPanel } from "@/features/d1/confirmation/ConfirmationPanel";

afterEach(() => {
  cleanup();
  actionExecuteConfirmationMock.mockReset();
});

describe("L2-D2 CORR-02 confirmation FORBIDDEN UI (Q15 targeted)", () => {
  it("does not invoke onDone when action returns ok:false FORBIDDEN", async () => {
    actionExecuteConfirmationMock.mockResolvedValue({
      ok: false,
      code: "FORBIDDEN",
      message: "Confirmation refusée : écriture D1 bloquée.",
    });
    const onDone = vi.fn();
    const onCancel = vi.fn();

    render(
      <ConfirmationPanel
        sessionLocalId="sess-ui"
        proposalId="prop-ui"
        matchId={null}
        actionType="CREATE_PROJECT"
        targetProjectId={null}
        initialDraft={{
          name: "X",
          objective: "Y",
          initialContextSummary: "",
          activate: true,
        }}
        expectedProjectVersion={null}
        expectedUpdatedAt={null}
        idempotencyKey="idem-ui-forbidden"
        summary={{
          actionLabel: "Créer le projet",
          targetLabel: "Nouveau projet",
          consequences: ["Création D1"],
          dataToPersist: [],
          warnings: [],
          irreversibleEffects: [],
          confirmationRequired: true,
        }}
        onDone={onDone}
        onCancel={onCancel}
      />,
    );

    fireEvent.click(screen.getByRole("button", { name: /Créer ce projet/i }));
    await waitFor(() => {
      expect(actionExecuteConfirmationMock).toHaveBeenCalled();
    });
    await waitFor(() => {
      expect(screen.getByText(/Confirmation refusée/i)).toBeTruthy();
    });
    expect(onDone).not.toHaveBeenCalled();
  });
});
