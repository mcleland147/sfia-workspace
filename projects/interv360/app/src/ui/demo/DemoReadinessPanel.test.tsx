import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DemoReadinessPanel } from "./DemoReadinessPanel";

describe("DemoReadinessPanel", () => {
  it("displays demo readiness status and criteria", () => {
    render(<DemoReadinessPanel />);

    expect(
      screen.getByRole("region", {
        name: /Préparation et présentation de la démo/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Démo prête/i)).toBeInTheDocument();
    expect(screen.getByText(/Données fictives chargées/i)).toBeInTheDocument();
    expect(screen.getByText(/Scénario guidé disponible/i)).toBeInTheDocument();
  });

  it("displays the integrated presentation checklist", () => {
    render(<DemoReadinessPanel />);

    expect(screen.getByText(/Checklist de présentation/i)).toBeInTheDocument();
    expect(screen.getByText(/Vérifier les 3 demandes fictives/i)).toBeInTheDocument();
    expect(screen.getByText(/Sélectionner SAV-DEMO-001/i)).toBeInTheDocument();
    expect(screen.getByText(/Réinitialiser la démo/i)).toBeInTheDocument();
  });

  it("displays delivered capabilities and scope distinction", () => {
    render(<DemoReadinessPanel />);

    expect(screen.getByText(/Capacités livrées/i)).toBeInTheDocument();
    expect(screen.getByText(/Démontré/i)).toBeInTheDocument();
    expect(screen.getByText(/Fictif \/ local/i)).toBeInTheDocument();
    expect(screen.getByText(/Hors périmètre/i)).toBeInTheDocument();
    expect(screen.getByText(/Multi-demandes fictives/i)).toBeInTheDocument();
    expect(screen.getByText(/Backend \/ API \/ CRM/i)).toBeInTheDocument();
  });

  it("displays assumed limitations", () => {
    render(<DemoReadinessPanel />);

    expect(screen.getByText(/Limites assumées/i)).toBeInTheDocument();
    expect(screen.getByText(/Pas de backend/i)).toBeInTheDocument();
    expect(screen.getByText(/Pas de production/i)).toBeInTheDocument();
    expect(screen.getByText(/Données fictives uniquement/i)).toBeInTheDocument();
  });
});
