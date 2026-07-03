import { fireEvent, render, screen, within } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { App } from "../app/App";
import { goToScreen, waitForAppNavigation, goToDemoResetScreen } from "./navigationHelpers";

describe("App demo screens", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("shows screen navigation with five demo screens on scenario", async () => {
    render(<App />);
    await waitForAppNavigation();
    goToScreen("Scénario");

    expect(screen.getByText(/Écran 2 sur 5/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Vue d'ensemble" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Scénario" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Demandes" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Détail" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Journal" })).toBeInTheDocument();
  });

  it("navigates between screens with tabs and stepper on scenario", async () => {
    render(<App />);
    await waitForAppNavigation();

    goToScreen("Scénario");
    expect(screen.getByText(/Écran 2 sur 5/i)).toBeInTheDocument();
    expect(
      screen.getByRole("region", { name: /Scénario guidé de démonstration/i }),
    ).toBeInTheDocument();

    const demoNav = screen.getByRole("navigation", {
      name: /Navigation par écran de démonstration/i,
    });
    fireEvent.click(within(demoNav).getByRole("button", { name: "Demandes" }));

    expect(
      screen.getByRole("heading", { name: /Demandes SAV/i }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("navigation", {
        name: /Navigation par écran de démonstration/i,
      }),
    ).not.toBeInTheDocument();
  });

  it("keeps readiness on scenario screen only", async () => {
    render(<App />);
    await waitForAppNavigation();

    expect(screen.queryByText(/Démo prête/i)).not.toBeInTheDocument();

    goToScreen("Scénario");
    expect(screen.getByText(/Démo prête/i)).toBeInTheDocument();

    goToScreen("Demandes");
    expect(screen.queryByText(/Démo prête/i)).not.toBeInTheDocument();
  });

  it("keeps reset on scenario screen", async () => {
    render(<App />);
    await waitForAppNavigation();

    goToDemoResetScreen();
    expect(
      screen.getByRole("button", { name: /Réinitialiser la démo/i }),
    ).toBeInTheDocument();

    goToScreen("Demandes");
    expect(
      screen.queryByRole("button", { name: /Réinitialiser la démo/i }),
    ).not.toBeInTheDocument();

    goToScreen("Journal");
    expect(
      screen.queryByRole("button", { name: /Réinitialiser la démo/i }),
    ).not.toBeInTheDocument();
  });
});
