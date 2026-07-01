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

async function renderAppOnDetailsScreen() {
  render(<App />);
  await waitForScreenNavigation();
  goToDemoScreen("Demandes");
  await waitFor(() => {
    expect(
      screen.getByRole("heading", { name: /Demandes SAV/i }),
    ).toBeInTheDocument();
  });
  goToDemoScreen("Détail");
  await waitFor(() => {
    expect(
      screen.getByRole("heading", { name: /Fiche demande SAV/i }),
    ).toBeInTheDocument();
  });
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
});
