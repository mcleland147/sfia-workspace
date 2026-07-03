import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
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

describe("App demo screens", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("shows screen navigation with five demo screens", async () => {
    render(<App />);
    await waitForScreenNavigation();

    expect(screen.getByText(/Écran 1 sur 5/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Vue d'ensemble" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Scénario" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Demandes" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Détail" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Journal" })).toBeInTheDocument();
  });

  it("navigates between screens with tabs and stepper", async () => {
    render(<App />);
    await waitForScreenNavigation();

    expect(
      screen.getByRole("heading", { name: /Centre de commande SAV/i }),
    ).toBeInTheDocument();

    goToDemoScreen("Scénario");
    expect(screen.getByText(/Écran 2 sur 5/i)).toBeInTheDocument();
    expect(
      screen.getByRole("region", { name: /Scénario guidé de démonstration/i }),
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /Écran suivant/i }));
    expect(screen.getByText(/Écran 3 sur 5/i)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Demandes SAV/i }),
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /Écran précédent/i }));
    expect(screen.getByText(/Écran 2 sur 5/i)).toBeInTheDocument();
  });

  it("keeps readiness on scenario screen only", async () => {
    render(<App />);
    await waitForScreenNavigation();

    expect(screen.queryByText(/Démo prête/i)).not.toBeInTheDocument();

    goToDemoScreen("Scénario");
    expect(screen.getByText(/Démo prête/i)).toBeInTheDocument();

    goToDemoScreen("Demandes");
    expect(screen.queryByText(/Démo prête/i)).not.toBeInTheDocument();
  });

  it("keeps reset on journal screen", async () => {
    render(<App />);
    await waitForScreenNavigation();

    goToDemoScreen("Journal");
    expect(
      screen.getByRole("button", { name: /Réinitialiser la démo/i }),
    ).toBeInTheDocument();

    goToDemoScreen("Demandes");
    expect(
      screen.queryByRole("button", { name: /Réinitialiser la démo/i }),
    ).not.toBeInTheDocument();
  });
});
