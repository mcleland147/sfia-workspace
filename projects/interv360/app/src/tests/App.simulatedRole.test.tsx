import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { simulatedRoleStorageKey } from "../data/localStorageKeys";
import { App } from "../app/App";

async function waitForScreenNavigation() {
  await waitFor(() => {
    expect(
      screen.getByRole("navigation", {
        name: /Navigation par écran de démonstration/i,
      }),
    ).toBeInTheDocument();
  });
}

function goToDemoScreen(shortLabel: string) {
  fireEvent.click(screen.getByRole("button", { name: shortLabel }));
}

function switchSimulatedRole(role: string) {
  fireEvent.change(screen.getByLabelText(/Changer de rôle/i), {
    target: { value: role },
  });
}

async function renderAppOnDetailsScreenForRequest(requestId: string) {
  render(<App />);
  await waitForScreenNavigation();
  goToDemoScreen("Demandes");
  await waitFor(() => {
    expect(
      screen.getByRole("heading", { name: /Demandes SAV/i }),
    ).toBeInTheDocument();
  });
  fireEvent.click(screen.getByRole("button", { name: new RegExp(requestId) }));
  goToDemoScreen("Détail");
  await waitFor(() => {
    expect(
      screen.getByRole("heading", { name: /Fiche demande SAV/i }),
    ).toBeInTheDocument();
  });
}

async function renderAppOnDetailsScreen() {
  await renderAppOnDetailsScreenForRequest("SAV-DEMO-001");
}

describe("App simulated role", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("shows technician as the default simulated role", async () => {
    render(<App />);
    await waitForScreenNavigation();

    expect(screen.getByText(/Rôle simulé/i)).toHaveTextContent("Technicien");
    expect(
      screen.getByText(/Simulation — aucune authentification réelle/i),
    ).toBeInTheDocument();
  });

  it("persists role changes in localStorage", async () => {
    render(<App />);
    await waitForScreenNavigation();

    switchSimulatedRole("viewer");

    expect(localStorage.getItem(simulatedRoleStorageKey)).toBe("viewer");
    expect(screen.getByText(/Rôle simulé/i)).toHaveTextContent("Observateur");
  });

  it("disables workflow actions for viewer and shows unauthorized message on forced handler path", async () => {
    await renderAppOnDetailsScreen();
    switchSimulatedRole("viewer");

    const qualifyButton = screen.getByRole("button", {
      name: /Qualifier la demande/i,
    });
    expect(
      screen.getByRole("button", { name: /Qualifier la demande/i }),
    ).toHaveAttribute("aria-disabled", "true");
    expect(
      screen.getByText(/Action non autorisée pour le rôle actuel/i),
    ).toBeInTheDocument();

    fireEvent.click(qualifyButton);

    await waitFor(() => {
      expect(
        screen.getByText(
          /Action non autorisée pour le rôle simulé : Observateur/i,
        ),
      ).toBeInTheDocument();
    });
  });

  it("allows workflow transitions for technician", async () => {
    await renderAppOnDetailsScreen();

    fireEvent.click(
      screen.getByRole("button", { name: /Qualifier la demande/i }),
    );

    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: /Planifier l'intervention/i }),
      ).toBeInTheDocument();
    });
  });

  it("blocks demo reset for technician with disabled button", async () => {
    render(<App />);
    await waitForScreenNavigation();
    goToDemoScreen("Journal");

    const resetButton = screen.getByRole("button", {
      name: /Réinitialiser la démo/i,
    });
    expect(resetButton).toHaveAttribute("aria-disabled", "true");

    fireEvent.click(resetButton);

    await waitFor(() => {
      expect(
        screen.getByText(
          /Action non autorisée pour le rôle simulé : Technicien/i,
        ),
      ).toBeInTheDocument();
    });
  });

  it("allows demo reset for admin and keeps simulated role after reset", async () => {
    render(<App />);
    await waitForScreenNavigation();
    switchSimulatedRole("admin");

    goToDemoScreen("Journal");
    fireEvent.click(
      screen.getByRole("button", { name: /Réinitialiser la démo/i }),
    );

    await waitFor(() => {
      expect(screen.getByText(/Démo réinitialisée/i)).toBeInTheDocument();
    });

    expect(localStorage.getItem(simulatedRoleStorageKey)).toBe("admin");
    expect(screen.getByText(/Rôle simulé/i)).toHaveTextContent(
      "Administrateur",
    );
  });

  it("blocks hold and resume for viewer on STAT-03 request", async () => {
    await renderAppOnDetailsScreenForRequest("SAV-DEMO-002");
    switchSimulatedRole("viewer");

    const holdButton = screen.getByRole("button", {
      name: /Mettre en attente/i,
    });
    expect(holdButton).toHaveAttribute("aria-disabled", "true");

    fireEvent.click(holdButton);

    await waitFor(() => {
      expect(
        screen.getByText(
          /Action non autorisée pour le rôle simulé : Observateur/i,
        ),
      ).toBeInTheDocument();
    });
  });

  it("blocks workflow extension actions for requester", async () => {
    await renderAppOnDetailsScreenForRequest("SAV-DEMO-002");
    switchSimulatedRole("requester");

    expect(
      screen.getByRole("button", { name: /Mettre en attente/i }),
    ).toHaveAttribute("aria-disabled", "true");
    expect(
      screen.getByRole("button", { name: /Annuler la demande/i }),
    ).toHaveAttribute("aria-disabled", "true");
  });

  it("allows technician to put request on hold but blocks cancel", async () => {
    await renderAppOnDetailsScreenForRequest("SAV-DEMO-002");

    const holdButton = screen.getByRole("button", {
      name: /Mettre en attente/i,
    });
    const cancelButton = screen.getByRole("button", {
      name: /Annuler la demande/i,
    });

    expect(holdButton).not.toHaveAttribute("aria-disabled", "true");
    expect(cancelButton).toHaveAttribute("aria-disabled", "true");

    fireEvent.click(holdButton);

    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: /Reprendre/i }),
      ).toBeInTheDocument();
      expect(screen.getAllByText(/En attente \(STAT-05\)/i).length).toBeGreaterThan(
        0,
      );
    });

    fireEvent.click(cancelButton);

    await waitFor(() => {
      expect(
        screen.getByText(
          /Action non autorisée pour le rôle simulé : Technicien/i,
        ),
      ).toBeInTheDocument();
    });
  });

  it("allows manager to cancel a request", async () => {
    await renderAppOnDetailsScreen();
    switchSimulatedRole("manager");

    const cancelButton = screen.getByRole("button", {
      name: /Annuler la demande/i,
    });
    expect(cancelButton).not.toHaveAttribute("aria-disabled", "true");

    fireEvent.click(cancelButton);

    await waitFor(() => {
      expect(screen.getAllByText(/Annulée \(STAT-07\)/i).length).toBeGreaterThan(
        0,
      );
      expect(
        screen.getByText(/Demande annulée fictivement/i),
      ).toBeInTheDocument();
    });
  });

  it("allows admin to cancel a request", async () => {
    await renderAppOnDetailsScreen();
    switchSimulatedRole("admin");

    fireEvent.click(
      screen.getByRole("button", { name: /Annuler la demande/i }),
    );

    await waitFor(() => {
      expect(screen.getAllByText(/Annulée \(STAT-07\)/i).length).toBeGreaterThan(
        0,
      );
    });
  });

  it("allows technician to requalify a compatible request", async () => {
    await renderAppOnDetailsScreenForRequest("SAV-DEMO-002");

    const requalifyButton = screen.getByRole("button", {
      name: /Requalifier/i,
    });
    expect(requalifyButton).not.toHaveAttribute("aria-disabled", "true");

    fireEvent.click(requalifyButton);

    await waitFor(() => {
      expect(screen.getAllByText(/Planifiée \(STAT-02\)/i).length).toBeGreaterThan(
        0,
      );
    });
  });

  it("allows manager to requalify a compatible request", async () => {
    await renderAppOnDetailsScreenForRequest("SAV-DEMO-002");
    switchSimulatedRole("manager");

    fireEvent.click(screen.getByRole("button", { name: /Requalifier/i }));

    await waitFor(() => {
      expect(screen.getAllByText(/Planifiée \(STAT-02\)/i).length).toBeGreaterThan(
        0,
      );
    });
  });

  it("allows admin to requalify a compatible request", async () => {
    await renderAppOnDetailsScreenForRequest("SAV-DEMO-002");
    switchSimulatedRole("admin");

    fireEvent.click(screen.getByRole("button", { name: /Requalifier/i }));

    await waitFor(() => {
      expect(screen.getAllByText(/Planifiée \(STAT-02\)/i).length).toBeGreaterThan(
        0,
      );
    });
  });

  it("blocks requalify for viewer with unauthorized message", async () => {
    await renderAppOnDetailsScreenForRequest("SAV-DEMO-002");
    switchSimulatedRole("viewer");

    const requalifyButton = screen.getByRole("button", {
      name: /Requalifier/i,
    });
    expect(requalifyButton).toHaveAttribute("aria-disabled", "true");

    fireEvent.click(requalifyButton);

    await waitFor(() => {
      expect(
        screen.getByText(
          /Action non autorisée pour le rôle simulé : Observateur/i,
        ),
      ).toBeInTheDocument();
    });
  });

  it("blocks requalify for requester with unauthorized message", async () => {
    await renderAppOnDetailsScreenForRequest("SAV-DEMO-002");
    switchSimulatedRole("requester");

    const requalifyButton = screen.getByRole("button", {
      name: /Requalifier/i,
    });
    expect(requalifyButton).toHaveAttribute("aria-disabled", "true");

    fireEvent.click(requalifyButton);

    await waitFor(() => {
      expect(
        screen.getByText(
          /Action non autorisée pour le rôle simulé : Demandeur/i,
        ),
      ).toBeInTheDocument();
    });
  });
});
