import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { CURRENT_USER_STORAGE_KEY, DEMO_USERS } from "../domain/demoUsers";
import { App } from "../app/App";
import { goToScreen, waitForAppNavigation, expandMvpDemoPanel, goToDemoResetScreen } from "./navigationHelpers";

const PRESENTATION_REFS: Record<string, string> = {
  "SAV-DEMO-001": "DEM-2481",
  "SAV-DEMO-002": "DEM-2480",
  "SAV-DEMO-003": "DEM-2475",
};

function switchDemoUser(userId: string) {
  fireEvent.change(screen.getByLabelText(/Changer de profil/i), {
    target: { value: userId },
  });
}

async function renderAppOnDetailsScreenForRequest(requestId: string) {
  render(<App />);
  await waitForAppNavigation();
  goToScreen("Demandes");
  await waitFor(() => {
    expect(
      screen.getByRole("heading", { name: /Demandes SAV/i }),
    ).toBeInTheDocument();
  });
  const presentationRef = PRESENTATION_REFS[requestId] ?? requestId;
  const refCells = screen.getAllByText(presentationRef);
  const refCell =
    refCells.find((element) => element.closest("tr")) ?? refCells[0];
  const row = refCell.closest("tr");
  expect(row).toBeTruthy();
  fireEvent.click(within(row as HTMLElement).getByRole("button", { name: "Ouvrir" }));
  await waitFor(() => {
    expect(screen.getAllByText(requestId).length).toBeGreaterThan(0);
  });
  expandMvpDemoPanel();
}

async function renderAppOnDetailsScreen() {
  await renderAppOnDetailsScreenForRequest("SAV-DEMO-001");
}

describe("App simulated role", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.unstubAllGlobals();
  });

  it("does not call GET /api/v1/users in local mode", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);

    render(<App />);
    await waitForAppNavigation();

    expect(
      fetchMock.mock.calls.some(([url]) => String(url).includes("/users")),
    ).toBe(false);
  });

  it("does not call GET /api/v1/events in local mode", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);

    render(<App />);
    await waitForAppNavigation();
    goToScreen("Journal");

    expect(
      fetchMock.mock.calls.some(([url]) => String(url).includes("/events")),
    ).toBe(false);
  });

  it("exposes all five local demo users in the switcher", async () => {
    render(<App />);
    await waitForAppNavigation();

    const userSelect = screen.getByLabelText(/Changer de profil/i);
    const options = Array.from(userSelect.querySelectorAll("option")).map(
      (option) => option.getAttribute("value"),
    );

    expect(options).toEqual(DEMO_USERS.map((user) => user.id));
  });

  it("shows Théo Technicien as the default demo user", async () => {
    render(<App />);
    await waitForAppNavigation();

    expect(screen.getByRole("region", { name: /Profil actif/i })).toHaveTextContent(
      "Théo Technicien",
    );
    expect(screen.getByRole("region", { name: /Profil actif/i })).toHaveTextContent(
      "Technicien",
    );
    expect(
      screen.getByText(/Aucune authentification réelle/i),
    ).toBeInTheDocument();
  });

  it("shows enriched request model fields in local request detail", async () => {
    await renderAppOnDetailsScreen();

    expect(screen.getByText("Alice Demandeur")).toBeInTheDocument();
    expect(screen.getByText("Demandeur")).toBeInTheDocument();
    expect(screen.getByText("Affectation")).toBeInTheDocument();
    expect(screen.getAllByText("A. Moreau").length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText("Centre demandeur")).toBeInTheDocument();
  });

  it("aligns local seed SAV-DEMO-002 with backend request model fields", async () => {
    await renderAppOnDetailsScreenForRequest("SAV-DEMO-002");

    expect(screen.getAllByText("Maya Responsable").length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText("Paris Démo")).toBeInTheDocument();
    expect(screen.getByText("Client Démo Services")).toBeInTheDocument();
  });

  it("persists user changes in localStorage", async () => {
    render(<App />);
    await waitForAppNavigation();

    switchDemoUser("user-viewer");

    expect(localStorage.getItem(CURRENT_USER_STORAGE_KEY)).toBe("user-viewer");
    expect(screen.getByRole("region", { name: /Profil actif/i })).toHaveTextContent(
      "Victor Lecteur",
    );
    expect(screen.getByRole("region", { name: /Profil actif/i })).toHaveTextContent("Observateur");
  });

  it("keeps selected user after remount", async () => {
    const { unmount } = render(<App />);
    await waitForAppNavigation();

    switchDemoUser("user-manager");
    unmount();

    render(<App />);
    await waitForAppNavigation();

    expect(screen.getByRole("region", { name: /Profil actif/i })).toHaveTextContent(
      "Maya Responsable",
    );
    expect(screen.getByRole("region", { name: /Profil actif/i })).toHaveTextContent("Responsable");
  });

  it("disables workflow actions for viewer and shows unauthorized message on forced handler path", async () => {
    await renderAppOnDetailsScreen();
    switchDemoUser("user-viewer");

    expect(
      screen.getByRole("button", { name: /Qualifier la demande/i }),
    ).toBeDisabled();
    expect(
      screen.getAllByText(/votre rôle ne permet pas cette action/i).length,
    ).toBeGreaterThan(0);
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
    await waitForAppNavigation();
    goToDemoResetScreen();

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

  it("allows demo reset for admin and keeps current user after reset", async () => {
    render(<App />);
    await waitForAppNavigation();
    switchDemoUser("user-admin");

    goToDemoResetScreen();
    fireEvent.click(
      screen.getByRole("button", { name: /Réinitialiser la démo/i }),
    );

    await waitFor(() => {
      expect(screen.getByText(/Démo réinitialisée/i)).toBeInTheDocument();
    });

    expect(localStorage.getItem(CURRENT_USER_STORAGE_KEY)).toBe("user-admin");
    expect(screen.getByRole("region", { name: /Profil actif/i })).toHaveTextContent(
      "Amin Admin",
    );
    expect(screen.getByRole("region", { name: /Profil actif/i })).toHaveTextContent("Administrateur");
  });

  it("blocks hold and resume for viewer on STAT-03 request", async () => {
    await renderAppOnDetailsScreenForRequest("SAV-DEMO-002");
    switchDemoUser("user-viewer");

    const holdButton = screen.getByRole("button", {
      name: /Mettre en attente/i,
    });
    expect(holdButton).toBeDisabled();
  });

  it("blocks workflow extension actions for requester", async () => {
    await renderAppOnDetailsScreenForRequest("SAV-DEMO-002");
    switchDemoUser("user-requester");

    expect(
      screen.getByRole("button", { name: /Mettre en attente/i }),
    ).toBeDisabled();
    expect(
      screen.getByRole("button", { name: /Annuler la demande/i }),
    ).toBeDisabled();
  });

  it("allows technician to put request on hold but blocks cancel", async () => {
    await renderAppOnDetailsScreenForRequest("SAV-DEMO-002");

    const holdButton = screen.getByRole("button", {
      name: /Mettre en attente/i,
    });
    const cancelButton = screen.getByRole("button", {
      name: /Annuler la demande/i,
    });

    expect(holdButton).toBeEnabled();
    expect(cancelButton).toBeDisabled();
    expect(
      screen.getByText(/Non disponible — votre rôle ne permet pas cette action/i),
    ).toBeInTheDocument();

    fireEvent.click(holdButton);

    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: /Reprendre/i }),
      ).toBeInTheDocument();
      expect(screen.getAllByText(/En attente/i).length).toBeGreaterThan(0);
    });
  });

  it("allows manager to cancel a request", async () => {
    await renderAppOnDetailsScreen();
    switchDemoUser("user-manager");

    const cancelButton = screen.getByRole("button", {
      name: /Annuler la demande/i,
    });
    expect(cancelButton).toBeEnabled();

    fireEvent.click(cancelButton);

    await waitFor(() => {
      expect(screen.getAllByText(/Annulée/i).length).toBeGreaterThan(0);
      expect(
        screen.getByText(/Demande annulée — aucune action supplémentaire/i),
      ).toBeInTheDocument();
    });
  });

  it("allows admin to cancel a request", async () => {
    await renderAppOnDetailsScreen();
    switchDemoUser("user-admin");

    fireEvent.click(
      screen.getByRole("button", { name: /Annuler la demande/i }),
    );

    await waitFor(() => {
      expect(screen.getAllByText(/Annulée/i).length).toBeGreaterThan(0);
    });
  });

  it("allows technician to requalify a compatible request", async () => {
    await renderAppOnDetailsScreenForRequest("SAV-DEMO-002");

    const requalifyButton = screen.getByRole("button", {
      name: /Requalifier/i,
    });
    expect(requalifyButton).toBeEnabled();

    fireEvent.click(requalifyButton);

    await waitFor(() => {
      expect(screen.getAllByText(/Planifiée/i).length).toBeGreaterThan(0);
    });
  });

  it("allows manager to requalify a compatible request", async () => {
    await renderAppOnDetailsScreenForRequest("SAV-DEMO-002");
    switchDemoUser("user-manager");

    fireEvent.click(screen.getByRole("button", { name: /Requalifier/i }));

    await waitFor(() => {
      expect(screen.getAllByText(/Planifiée/i).length).toBeGreaterThan(0);
    });
  });

  it("allows admin to requalify a compatible request", async () => {
    await renderAppOnDetailsScreenForRequest("SAV-DEMO-002");
    switchDemoUser("user-admin");

    fireEvent.click(screen.getByRole("button", { name: /Requalifier/i }));

    await waitFor(() => {
      expect(screen.getAllByText(/Planifiée/i).length).toBeGreaterThan(0);
    });
  });

  it("blocks requalify for viewer with unauthorized message", async () => {
    await renderAppOnDetailsScreenForRequest("SAV-DEMO-002");
    switchDemoUser("user-viewer");

    const requalifyButton = screen.getByRole("button", {
      name: /Requalifier/i,
    });
    expect(requalifyButton).toBeDisabled();
    expect(
      screen.getAllByText(/votre rôle ne permet pas cette action/i).length,
    ).toBeGreaterThan(0);
  });

  it("blocks requalify for requester with unauthorized message", async () => {
    await renderAppOnDetailsScreenForRequest("SAV-DEMO-002");
    switchDemoUser("user-requester");

    const requalifyButton = screen.getByRole("button", {
      name: /Requalifier/i,
    });
    expect(requalifyButton).toBeDisabled();
    expect(
      screen.getAllByText(/votre rôle ne permet pas cette action/i).length,
    ).toBeGreaterThan(0);
  });

  it("shows local journal with actor after workflow transition", async () => {
    await renderAppOnDetailsScreen();

    fireEvent.click(screen.getByRole("button", { name: /Qualifier la demande/i }));

    await waitFor(() => {
      expect(screen.getByText(/Action enregistrée/i)).toBeInTheDocument();
    });

    goToScreen("Journal");

    const journal = await screen.findByRole("region", {
      name: /Historique de la demande/i,
    });

    await waitFor(() => {
      expect(within(journal).getByText(/Théo Technicien/i)).toBeInTheDocument();
      expect(within(journal).getByText(/— Technicien/i)).toBeInTheDocument();
    });
    expect(within(journal).getByText(/Qualifier la demande/i)).toBeInTheDocument();
  });
});
