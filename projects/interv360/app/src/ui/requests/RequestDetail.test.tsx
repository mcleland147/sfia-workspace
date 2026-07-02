import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import type { DemoRequest } from "../../domain/requestStatus";
import { STORAGE_KEY_REQUESTS } from "../../data/localStorageKeys";
import { RequestDetail } from "./RequestDetail";

describe("RequestDetail", () => {
  beforeEach(() => {
    localStorage.clear();
    localStorage.removeItem(STORAGE_KEY_REQUESTS);
  });

  it("renders the request detail skeleton title", () => {
    render(<RequestDetail requestId="SAV-DEMO-001" />);
    expect(
      screen.getByRole("heading", { name: /Fiche demande SAV/i }),
    ).toBeInTheDocument();
  });

  it("displays fictitious request SAV-DEMO-001 with enriched fields", () => {
    render(<RequestDetail requestId="SAV-DEMO-001" />);
    expect(screen.getByText("SAV-DEMO-001")).toBeInTheDocument();
    expect(
      screen.getByText("Machine client en panne intermittente"),
    ).toBeInTheDocument();
    expect(screen.getByText(/Données fictives uniquement/i)).toBeInTheDocument();
    expect(screen.getByText("Panne machine")).toBeInTheDocument();
    expect(screen.getByText("Portail démo")).toBeInTheDocument();
    expect(screen.getByText("Centre démo Nord")).toBeInTheDocument();
    expect(screen.getByText("12/01/2026")).toBeInTheDocument();
    expect(screen.getByText("Date de demande")).toBeInTheDocument();
    expect(screen.getByText("Alice Demandeur")).toBeInTheDocument();
    expect(screen.getByText("Demandeur")).toBeInTheDocument();
    expect(screen.getByText("Équipe demandeuse")).toBeInTheDocument();
    expect(screen.getByText("Centre demandeur")).toBeInTheDocument();
    expect(screen.getByText("Théo Technicien")).toBeInTheDocument();
    expect(screen.getByText("Affectation")).toBeInTheDocument();
    expect(
      screen.getByText("Ligne d'assemblage démo — poste 3"),
    ).toBeInTheDocument();
    expect(screen.getByText("Équipement / objet")).toBeInTheDocument();
    expect(
      screen.getByText("Interruption d'un flux de production fictif planifié"),
    ).toBeInTheDocument();
    expect(screen.getByText("Impact métier")).toBeInTheDocument();
    expect(screen.getByText("Production démo limitée")).toBeInTheDocument();
    expect(screen.getByText("Lyon Démo")).toBeInTheDocument();
    expect(screen.getByText("Haute")).toBeInTheDocument();
    expect(screen.getByText("Urgente")).toBeInTheDocument();
    expect(screen.getByText(/Priorité Haute/i)).toBeInTheDocument();
    expect(screen.getByText(/Criticité Urgente/i)).toBeInTheDocument();
  });

  it("falls back to legacy labels when enriched assignment is absent", () => {
    render(
      <RequestDetail
        requestId="SAV-DEMO-001"
        request={{
          id: "LEGACY-001",
          title: "Demande legacy",
          customerLabel: "Client Legacy",
          siteLabel: "Site Legacy",
          status: "STAT-01",
          priority: "low",
          criticality: "standard",
          assignedTechnicianLabel: "Technicien Legacy",
        } satisfies DemoRequest}
      />,
    );

    expect(screen.getByText("Demandeur")).toBeInTheDocument();
    expect(screen.getAllByText("Client Legacy")).toHaveLength(2);
    expect(screen.getByText("Affectation")).toBeInTheDocument();
    expect(screen.getByText("Technicien Legacy")).toBeInTheDocument();
    expect(screen.queryByText(/undefined/i)).not.toBeInTheDocument();
  });

  it("does not expose business action buttons", () => {
    render(<RequestDetail requestId="SAV-DEMO-001" />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
    expect(screen.queryByText(/qualifier/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/planifier/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/clôturer/i)).not.toBeInTheDocument();
  });
});
