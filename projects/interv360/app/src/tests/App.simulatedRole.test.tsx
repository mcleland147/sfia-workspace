import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { CURRENT_USER_STORAGE_KEY, DEMO_USERS } from "../domain/demoUsers";
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

function switchDemoUser(userId: string) {
  fireEvent.change(screen.getByLabelText(/Changer d'utilisateur/i), {
    target: { value: userId },
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
    vi.unstubAllGlobals();
  });

  it("does not call GET /api/v1/users in local mode", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);

    render(<App />);
    await waitForScreenNavigation();

    expect(
      fetchMock.mock.calls.some(([url]) => String(url).includes("/users")),
    ).toBe(false);
  });

  it("does not call GET /api/v1/events in local mode", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);

    render(<App />);
    await waitForScreenNavigation();
    goToDemoScreen("Journal");

    expect(
      fetchMock.mock.calls.some(([url]) => String(url).includes("/events")),
    ).toBe(false);
  });

  it("exposes all five local demo users in the switcher", async () => {
    render(<App />);
    await waitForScreenNavigation();

    const userSelect = screen.getByLabelText(/Changer d'utilisateur/i);
    const options = Array.from(userSelect.querySelectorAll("option")).map(
      (option) => option.getAttribute("value"),
    );

    expect(options).toEqual(DEMO_USERS.map((user) => user.id));
  });

  it("shows Théo Technicien as the default demo user", async () => {
    render(<App />);
    await waitForScreenNavigation();

    expect(screen.getByText(/Utilisateur démo/i)).toHaveTextContent(
      "Théo Technicien",
    );
    expect(screen.getByText(/Rôle :/i)).toHaveTextContent("Technicien");
    expect(
      screen.getByText(/Simulation — aucune authentification réelle/i),
    ).toBeInTheDocument();
  });

  it("shows enriched request model fields in local request detail", async () => {
    await renderAppOnDetailsScreen();

    expect(screen.getByText("Alice Demandeur")).toBeInTheDocument();
    expect(screen.getByText("Demandeur")).toBeInTheDocument();
    expect(screen.getByText("Affectation")).toBeInTheDocument();
    expect(screen.getAllByText("Théo Technicien").length).toBeGreaterThanOrEqual(1);
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
    await waitForScreenNavigation();

    switchDemoUser("user-viewer");

    expect(localStorage.getItem(CURRENT_USER_STORAGE_KEY)).toBe("user-viewer");
    expect(screen.getByText(/Utilisateur démo/i)).toHaveTextContent(
      "Victor Lecteur",
    );
    expect(screen.getByText(/Rôle :/i)).toHaveTextContent("Observateur");
  });

  it("keeps selected user after remount", async () => {
    const { unmount } = render(<App />);
    await waitForScreenNavigation();

    switchDemoUser("user-manager");
    unmount();

    render(<App />);
    await waitForScreenNavigation();

    expect(screen.getByText(/Utilisateur démo/i)).toHaveTextContent(
      "Maya Responsable",
    );
    expect(screen.getByText(/Rôle :/i)).toHaveTextContent("Responsable");
  });

  it("disables workflow actions for viewer and shows unauthorized message on forced handler path", async () => {
    await renderAppOnDetailsScreen();
    switchDemoUser("user-viewer");

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

  it("allows demo reset for admin and keeps current user after reset", async () => {
    render(<App />);
    await waitForScreenNavigation();
    switchDemoUser("user-admin");

    goToDemoScreen("Journal");
    fireEvent.click(
      screen.getByRole("button", { name: /Réinitialiser la démo/i }),
    );

    await waitFor(() => {
      expect(screen.getByText(/Démo réinitialisée/i)).toBeInTheDocument();
    });

    expect(localStorage.getItem(CURRENT_USER_STORAGE_KEY)).toBe("user-admin");
    expect(screen.getByText(/Utilisateur démo/i)).toHaveTextContent(
      "Amin Admin",
    );
    expect(screen.getByText(/Rôle :/i)).toHaveTextContent("Administrateur");
  });

  it("blocks hold and resume for viewer on STAT-03 request", async () => {
    await renderAppOnDetailsScreenForRequest("SAV-DEMO-002");
    switchDemoUser("user-viewer");

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
    switchDemoUser("user-requester");

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
    switchDemoUser("user-manager");

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
    switchDemoUser("user-admin");

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
    switchDemoUser("user-manager");

    fireEvent.click(screen.getByRole("button", { name: /Requalifier/i }));

    await waitFor(() => {
      expect(screen.getAllByText(/Planifiée \(STAT-02\)/i).length).toBeGreaterThan(
        0,
      );
    });
  });

  it("allows admin to requalify a compatible request", async () => {
    await renderAppOnDetailsScreenForRequest("SAV-DEMO-002");
    switchDemoUser("user-admin");

    fireEvent.click(screen.getByRole("button", { name: /Requalifier/i }));

    await waitFor(() => {
      expect(screen.getAllByText(/Planifiée \(STAT-02\)/i).length).toBeGreaterThan(
        0,
      );
    });
  });

  it("blocks requalify for viewer with unauthorized message", async () => {
    await renderAppOnDetailsScreenForRequest("SAV-DEMO-002");
    switchDemoUser("user-viewer");

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
    switchDemoUser("user-requester");

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

  it("shows local journal with actor after workflow transition", async () => {
    await renderAppOnDetailsScreen();

    fireEvent.click(screen.getByRole("button", { name: /Qualifier la demande/i }));

    goToDemoScreen("Journal");

    await waitFor(() => {
      expect(screen.getByText(/Par Théo Technicien — technician/i)).toBeInTheDocument();
    });
    expect(screen.getByText(/Action : qualify/i)).toBeInTheDocument();
  });
});
