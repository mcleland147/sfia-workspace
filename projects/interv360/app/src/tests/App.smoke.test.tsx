import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { STORAGE_KEY_REQUESTS } from "../data/localStorageKeys";
import { App } from "../app/App";

describe("App smoke", () => {
  beforeEach(() => {
    localStorage.clear();
    localStorage.removeItem(STORAGE_KEY_REQUESTS);
  });

  it("renders the readonly skeleton and workflow controls", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: /Interv360 — flux SAV minimal/i }),
    ).toBeInTheDocument();
    expect(screen.getAllByText(/Batch 01/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Batch 02/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Batch 03/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Démo prête/i)).toBeInTheDocument();
    expect(screen.getByText(/Checklist de présentation/i)).toBeInTheDocument();
    expect(screen.getByText(/Capacités livrées/i)).toBeInTheDocument();
    expect(screen.getByText(/Limites assumées/i)).toBeInTheDocument();
    expect(screen.getByText(/Hors périmètre/i)).toBeInTheDocument();
    expect(
      screen.getByRole("region", { name: /Scénario guidé de démonstration/i }),
    ).toBeInTheDocument();
    expect(screen.getAllByText(/Étape 1 sur 6/i).length).toBeGreaterThan(0);
    expect(screen.getByLabelText(/Recherche locale/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Synthèse locale par statut/i)).toBeInTheDocument();
    expect(
      screen.getByRole("navigation", { name: /Navigation interne de la démo/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Demandes SAV/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Fiche demande SAV/i }),
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
      screen.getByRole("heading", { name: /Workflow local contrôlé/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Journal local fictif/i }),
    ).toBeInTheDocument();
    expect(screen.getAllByText("SAV-DEMO-001").length).toBeGreaterThan(0);
    expect(screen.getByText("SAV-DEMO-002")).toBeInTheDocument();
    expect(screen.getByText("SAV-DEMO-003")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Réinitialiser la démo/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Qualifier la demande/i }),
    ).toBeInTheDocument();
  });

  it("restores SAV-DEMO-001 after explicit demo reset", () => {
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
    expect(screen.getAllByText("SAV-MUTATED").length).toBeGreaterThan(0);

    fireEvent.click(
      screen.getByRole("button", { name: /Réinitialiser la démo/i }),
    );

    expect(screen.getAllByText("SAV-DEMO-001").length).toBeGreaterThan(0);
    expect(screen.queryByText("SAV-MUTATED")).not.toBeInTheDocument();
    expect(screen.getByText(/Démo réinitialisée/i)).toBeInTheDocument();
  });

  it("switches detail and workflow context when selecting another request", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: /SAV-DEMO-002/i }));

    expect(screen.getAllByText("SAV-DEMO-002").length).toBeGreaterThan(0);
    expect(
      screen.getByRole("button", { name: /Planifier l'intervention/i }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /Qualifier la demande/i }),
    ).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /SAV-DEMO-003/i }));

    expect(
      screen.getByText(/Demande clôturée fictivement/i),
    ).toBeInTheDocument();
  });

  it("filters requests locally and realigns selection when needed", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: /^STAT-02$/ }));

    expect(screen.queryByText("SAV-DEMO-001")).not.toBeInTheDocument();
    expect(screen.getAllByText("SAV-DEMO-002").length).toBeGreaterThan(0);
    expect(screen.getByText(/Filtre actif : STAT-02/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Planifier l'intervention/i }),
    ).toBeInTheDocument();
  });

  it("searches requests locally and restores criteria on reset", () => {
    render(<App />);

    fireEvent.change(screen.getByLabelText(/Recherche locale/i), {
      target: { value: "SAV-DEMO-003" },
    });

    expect(screen.queryByText("SAV-DEMO-001")).not.toBeInTheDocument();
    expect(screen.getAllByText("SAV-DEMO-003").length).toBeGreaterThan(0);

    fireEvent.click(
      screen.getByRole("button", { name: /Réinitialiser la démo/i }),
    );

    expect(screen.getAllByText("SAV-DEMO-001").length).toBeGreaterThan(0);
    expect(screen.getByText(/Filtre actif : Toutes les demandes/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Recherche locale/i)).toHaveValue("");
    expect(
      screen.getByText(/Aucun événement fictif enregistré/i),
    ).toBeInTheDocument();
  });

  it("shows empty state when combined filter and search return nothing", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: /^STAT-02$/ }));
    fireEvent.change(screen.getByLabelText(/Recherche locale/i), {
      target: { value: "SAV-DEMO-003" },
    });

    expect(
      screen.getByText(/Aucune demande fictive ne correspond aux critères locaux/i),
    ).toBeInTheDocument();
  });

  it("navigates the guided scenario and resets scenario step without data changes", () => {
    render(<App />);

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
    expect(screen.getAllByText("SAV-DEMO-001").length).toBeGreaterThan(0);
  });

  it("restores scenario step on global demo reset", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: /Étape suivante/i }));
    fireEvent.click(screen.getByRole("button", { name: /Étape suivante/i }));
    expect(screen.getAllByText(/Étape 3 sur 6/i).length).toBeGreaterThan(0);

    fireEvent.click(
      screen.getByRole("button", { name: /Réinitialiser la démo/i }),
    );

    expect(screen.getAllByText(/Étape 1 sur 6/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Démo réinitialisée/i)).toBeInTheDocument();
  });

  it("runs the nominal controlled workflow and restores initial state on reset", () => {
    render(<App />);

    fireEvent.click(
      screen.getByRole("button", { name: /Qualifier la demande/i }),
    );
    expect(
      screen.getByRole("button", { name: /Planifier l'intervention/i }),
    ).toBeInTheDocument();
    expect(screen.getByText("qualification.confirmed")).toBeInTheDocument();

    fireEvent.click(
      screen.getByRole("button", { name: /Planifier l'intervention/i }),
    );
    expect(
      screen.getByRole("button", {
        name: /Marquer l'intervention réalisée/i,
      }),
    ).toBeInTheDocument();

    fireEvent.click(
      screen.getByRole("button", {
        name: /Marquer l'intervention réalisée/i,
      }),
    );
    expect(
      screen.getByRole("button", {
        name: /Clôturer avec compte rendu fictif/i,
      }),
    ).toBeInTheDocument();

    fireEvent.click(
      screen.getByRole("button", {
        name: /Clôturer avec compte rendu fictif/i,
      }),
    );
    expect(
      screen.getByText(/Demande clôturée fictivement/i),
    ).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /Qualifier/i })).not.toBeInTheDocument();

    fireEvent.click(
      screen.getByRole("button", { name: /Réinitialiser la démo/i }),
    );
    expect(
      screen.getByRole("button", { name: /Qualifier la demande/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Aucun événement fictif enregistré/i),
    ).toBeInTheDocument();
  });
});
