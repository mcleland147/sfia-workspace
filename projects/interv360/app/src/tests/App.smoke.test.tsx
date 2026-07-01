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
    expect(screen.getAllByRole("status")[0]).toHaveTextContent(
      /Démo réinitialisée/i,
    );
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
