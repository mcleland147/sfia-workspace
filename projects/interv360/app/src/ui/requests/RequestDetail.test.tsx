import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
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
    expect(
      screen.getByText("Système de visioconférence salle A"),
    ).toBeInTheDocument();
    expect(screen.getByText("Équipement / objet")).toBeInTheDocument();
    expect(
      screen.getByText("Interruption d'un usage pédagogique planifié"),
    ).toBeInTheDocument();
    expect(screen.getByText("Impact métier")).toBeInTheDocument();
    expect(screen.getByText("Production démo limitée")).toBeInTheDocument();
    expect(screen.getByText("Lyon Démo")).toBeInTheDocument();
    expect(screen.getByText("Haute")).toBeInTheDocument();
    expect(screen.getByText("Urgente")).toBeInTheDocument();
    expect(screen.getByText(/Priorité Haute/i)).toBeInTheDocument();
    expect(screen.getByText(/Criticité Urgente/i)).toBeInTheDocument();
  });

  it("does not expose business action buttons", () => {
    render(<RequestDetail requestId="SAV-DEMO-001" />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
    expect(screen.queryByText(/qualifier/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/planifier/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/clôturer/i)).not.toBeInTheDocument();
  });
});
