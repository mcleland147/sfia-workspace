import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { STORAGE_KEY_REQUESTS } from "../data/localStorageKeys";
import { App } from "../app/App";

function clickStatusFilter(label: RegExp) {
  const filters = screen.getByRole("group", { name: /Filtres par statut/i });
  fireEvent.click(within(filters).getByRole("button", { name: label }));
}

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
  fireEvent.change(screen.getByLabelText(/Changer de profil/i), {
    target: { value: userId },
  });
}

function switchToAdminUser() {
  switchDemoUser("user-admin");
}

async function renderAppAndWait() {
  render(<App />);
  await waitForScreenNavigation();
}

async function renderAppOnRequestsScreen() {
  await renderAppAndWait();
  goToDemoScreen("Demandes");
  await waitFor(() => {
    expect(
      screen.getByRole("heading", { name: /Demandes SAV/i }),
    ).toBeInTheDocument();
  });
}

async function renderAppOnDetailsScreen() {
  await renderAppOnRequestsScreen();
  goToDemoScreen("Détail");
  await waitFor(() => {
    expect(
      screen.getByRole("heading", {
        name: /Machine client en panne intermittente/i,
      }),
    ).toBeInTheDocument();
  });
}

describe("App smoke", () => {
  beforeEach(() => {
    localStorage.clear();
    localStorage.removeItem(STORAGE_KEY_REQUESTS);
  });

  it("shows local data mode by default", async () => {
    await renderAppAndWait();
    expect(screen.getByText("Mode local")).toBeInTheDocument();
    expect(
      screen.getByText(/jeu de démonstration embarqué/i),
    ).toBeInTheDocument();
  });

  it("renders the readonly skeleton and workflow controls across demo screens", async () => {
    await renderAppAndWait();

    expect(
      screen.getByRole("heading", { name: /Centre de commande SAV/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("region", { name: /Focus opérationnel/i }),
    ).toBeInTheDocument();
    expect(screen.getAllByText("DEM-2481").length).toBeGreaterThan(0);
    expect(screen.getByText("Garage Martin")).toBeInTheDocument();

    goToDemoScreen("Scénario");
    expect(
      screen.getByRole("region", { name: /Scénario guidé de démonstration/i }),
    ).toBeInTheDocument();
    expect(screen.getAllByText(/Étape 1 sur 6/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Batch 02/i)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Interv360 — flux SAV minimal/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Démo prête/i)).toBeInTheDocument();
    expect(screen.getByText(/Checklist de présentation/i)).toBeInTheDocument();
    expect(screen.getByText(/Capacités livrées/i)).toBeInTheDocument();
    expect(screen.getByText(/Limites assumées/i)).toBeInTheDocument();
    expect(screen.getByText(/Hors périmètre/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Batch 03/i).length).toBeGreaterThan(0);

    goToDemoScreen("Demandes");
    expect(screen.getByLabelText(/^Recherche$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Synthèse par statut/i)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Demandes SAV/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/consultation et suivi/i)).toBeInTheDocument();
    expect(screen.getAllByText("SAV-DEMO-001").length).toBeGreaterThan(0);
    expect(screen.getByText("SAV-DEMO-002")).toBeInTheDocument();
    expect(screen.getByText("SAV-DEMO-003")).toBeInTheDocument();

    goToDemoScreen("Détail");
    expect(
      screen.getByRole("heading", {
        name: /Machine client en panne intermittente/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Qualification SAV/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Planification SAV/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Intervention terrain/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Compte rendu SAV/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Actions disponibles/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Qualifier la demande/i }),
    ).toBeInTheDocument();

    goToDemoScreen("Journal");
    expect(
      screen.getByRole("heading", { name: /Historique de la demande/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Réinitialiser la démo/i }),
    ).toBeInTheDocument();
  });

  it("restores SAV-DEMO-001 after explicit demo reset", async () => {
    localStorage.setItem(
      STORAGE_KEY_REQUESTS,
      JSON.stringify([
        {
          id: "SAV-MUTATED",
          title: "Donnée locale modifiée",
          customerLabel: "Client Démo Industrie",
          siteLabel: "Lyon Démo",
          status: "STAT-01",
        },
      ]),
    );

    render(<App />);
    await waitForScreenNavigation();
    goToDemoScreen("Demandes");
    await waitFor(() => {
      expect(screen.getAllByText("SAV-MUTATED").length).toBeGreaterThan(0);
    });

    goToDemoScreen("Journal");
    switchToAdminUser();
    fireEvent.click(
      screen.getByRole("button", { name: /Réinitialiser la démo/i }),
    );

    await waitFor(() => {
      expect(screen.getByText(/Démo réinitialisée/i)).toBeInTheDocument();
    });

    goToDemoScreen("Demandes");
    await waitFor(() => {
      expect(screen.getAllByText("SAV-DEMO-001").length).toBeGreaterThan(0);
      expect(screen.queryByText("SAV-MUTATED")).not.toBeInTheDocument();
    });
  });

  it("switches detail and workflow context when selecting another request", async () => {
    await renderAppOnDetailsScreen();

    goToDemoScreen("Demandes");
    fireEvent.click(screen.getByRole("button", { name: /SAV-DEMO-002/i }));

    goToDemoScreen("Détail");
    await waitFor(() => {
      expect(screen.getAllByText("SAV-DEMO-002").length).toBeGreaterThan(0);
      expect(
        screen.getByRole("button", { name: /Mettre en attente/i }),
      ).toBeInTheDocument();
    });
    expect(
      screen.queryByRole("button", { name: /Qualifier la demande/i }),
    ).not.toBeInTheDocument();

    goToDemoScreen("Demandes");
    fireEvent.click(screen.getByRole("button", { name: /SAV-DEMO-003/i }));

    goToDemoScreen("Détail");
    await waitFor(() => {
      expect(
        screen.getByText(/Demande clôturée — aucune action supplémentaire/i),
      ).toBeInTheDocument();
    });
  });

  it("filters requests locally and realigns selection when needed", async () => {
    await renderAppOnRequestsScreen();

    clickStatusFilter(/^En cours de traitement$/);

    await waitFor(() => {
      expect(screen.queryByText("SAV-DEMO-001")).not.toBeInTheDocument();
      expect(screen.getAllByText("SAV-DEMO-002").length).toBeGreaterThan(0);
      expect(
        screen.getByText(/Filtre actif : En cours de traitement/i),
      ).toBeInTheDocument();
    });

    goToDemoScreen("Détail");
    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: /Mettre en attente/i }),
      ).toBeInTheDocument();
    });
  });

  it("searches requests locally and restores criteria on reset", async () => {
    await renderAppOnRequestsScreen();

    fireEvent.change(screen.getByLabelText(/Recherche/i), {
      target: { value: "SAV-DEMO-003" },
    });

    await waitFor(() => {
      expect(
        screen.queryByRole("button", { name: /SAV-DEMO-001/i }),
      ).not.toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: /SAV-DEMO-003/i }),
      ).toBeInTheDocument();
    });

    goToDemoScreen("Journal");
    switchToAdminUser();
    fireEvent.click(
      screen.getByRole("button", { name: /Réinitialiser la démo/i }),
    );

    await waitFor(() => {
      expect(screen.getByText(/Démo réinitialisée/i)).toBeInTheDocument();
    });

    goToDemoScreen("Demandes");
    expect(screen.getAllByText("SAV-DEMO-001").length).toBeGreaterThan(0);
    expect(screen.getByText(/Filtre actif : Toutes les demandes/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Recherche/i)).toHaveValue("");

    goToDemoScreen("Journal");
    await waitFor(() => {
      expect(
        screen.getByText(/Aucun événement enregistré pour cette demande/i),
      ).toBeInTheDocument();
    });
  });

  it("shows empty state when combined filter and search return nothing", async () => {
    await renderAppOnRequestsScreen();

    clickStatusFilter(/^En cours de traitement$/);
    fireEvent.change(screen.getByLabelText(/Recherche/i), {
      target: { value: "SAV-DEMO-003" },
    });

    expect(
      screen.getByText(/Aucune demande ne correspond aux critères de recherche/i),
    ).toBeInTheDocument();
  });

  it("navigates the guided scenario and resets scenario step without data changes", async () => {
    await renderAppAndWait();

    goToDemoScreen("Scénario");
    expect(screen.getAllByText(/Étape 1 sur 6/i).length).toBeGreaterThan(0);

    fireEvent.click(screen.getByRole("button", { name: /Étape suivante/i }));
    expect(screen.getAllByText(/Étape 2 sur 6/i).length).toBeGreaterThan(0);
    expect(
      screen.getByRole("heading", {
        name: /Observer le statut et les indicateurs/i,
      }),
    ).toBeInTheDocument();

    fireEvent.click(
      screen.getByRole("button", { name: /Revenir au début du scénario/i }),
    );
    expect(screen.getAllByText(/Étape 1 sur 6/i).length).toBeGreaterThan(0);

    goToDemoScreen("Demandes");
    expect(screen.getAllByText("SAV-DEMO-001").length).toBeGreaterThan(0);
  });

  it("restores scenario step on global demo reset", async () => {
    await renderAppAndWait();

    goToDemoScreen("Scénario");
    fireEvent.click(screen.getByRole("button", { name: /Étape suivante/i }));
    fireEvent.click(screen.getByRole("button", { name: /Étape suivante/i }));
    expect(screen.getAllByText(/Étape 3 sur 6/i).length).toBeGreaterThan(0);

    goToDemoScreen("Journal");
    switchToAdminUser();
    fireEvent.click(
      screen.getByRole("button", { name: /Réinitialiser la démo/i }),
    );

    await waitFor(() => {
      expect(screen.getByText(/Démo réinitialisée/i)).toBeInTheDocument();
    });

    goToDemoScreen("Scénario");
    expect(screen.getAllByText(/Étape 1 sur 6/i).length).toBeGreaterThan(0);
  });

  it("runs the nominal controlled workflow and restores initial state on reset", async () => {
    await renderAppOnDetailsScreen();

    fireEvent.click(
      screen.getByRole("button", { name: /Qualifier la demande/i }),
    );
    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: /Planifier l'intervention/i }),
      ).toBeInTheDocument();
    });

    goToDemoScreen("Journal");
    await waitFor(() => {
      expect(screen.getByText("qualification.confirmed")).toBeInTheDocument();
    });

    goToDemoScreen("Détail");
    fireEvent.click(
      screen.getByRole("button", { name: /Planifier l'intervention/i }),
    );
    await waitFor(() => {
      expect(
        screen.getByRole("button", {
          name: /Marquer l'intervention réalisée/i,
        }),
      ).toBeInTheDocument();
    });

    fireEvent.click(
      screen.getByRole("button", {
        name: /Marquer l'intervention réalisée/i,
      }),
    );
    await waitFor(() => {
      expect(
        screen.getByRole("button", {
          name: /Clôturer avec compte rendu fictif/i,
        }),
      ).toBeInTheDocument();
    });

    fireEvent.click(
      screen.getByRole("button", {
        name: /Clôturer avec compte rendu fictif/i,
      }),
    );
    await waitFor(() => {
      expect(
        screen.getByText(/Demande clôturée — aucune action supplémentaire/i),
      ).toBeInTheDocument();
      expect(screen.queryByRole("button", { name: /Qualifier/i })).not.toBeInTheDocument();
    });

    goToDemoScreen("Journal");
    switchToAdminUser();
    fireEvent.click(
      screen.getByRole("button", { name: /Réinitialiser la démo/i }),
    );

    await waitFor(() => {
      expect(screen.getByText(/Démo réinitialisée/i)).toBeInTheDocument();
    });

    goToDemoScreen("Détail");
    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: /Qualifier la demande/i }),
      ).toBeInTheDocument();
    });

    goToDemoScreen("Journal");
    await waitFor(() => {
      expect(
        screen.getByText(/Aucun événement enregistré pour cette demande/i),
      ).toBeInTheDocument();
    });
  });
});
