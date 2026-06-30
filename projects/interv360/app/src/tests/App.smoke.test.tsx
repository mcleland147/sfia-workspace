import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { STORAGE_KEY_REQUESTS } from "../data/localStorageKeys";
import { App } from "../app/App";

describe("App smoke", () => {
  beforeEach(() => {
    localStorage.clear();
    localStorage.removeItem(STORAGE_KEY_REQUESTS);
  });

  it("renders the requests list, detail, qualification, planning, intervention and report readonly skeleton", () => {
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
    expect(screen.getAllByText("SAV-DEMO-001").length).toBeGreaterThan(0);
    expect(
      screen.getByRole("button", { name: /Réinitialiser la démo/i }),
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
    expect(screen.getByRole("status")).toHaveTextContent(
      /Démo réinitialisée/i,
    );
  });
});
