import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DemoOverview } from "./DemoOverview";

describe("DemoOverview", () => {
  it("displays demo context, nominal path, current status and limits", () => {
    render(
      <DemoOverview
        requestId="SAV-DEMO-001"
        currentStatus="STAT-01"
        scenarioStepTitle="Sélectionner une demande fictive"
        scenarioProgressLabel="Étape 1 sur 6"
      />,
    );

    expect(screen.getByText(/SAV-DEMO-001/)).toBeInTheDocument();
    expect(screen.getByText(/Batch 03/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Parcours nominal INC-01/i)).toBeInTheDocument();
    expect(screen.getAllByText("STAT-01").length).toBeGreaterThan(0);
    expect(screen.getByText("STAT-06")).toBeInTheDocument();
    expect(screen.getByText(/Étape 1 sur 6/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Sélectionner une demande fictive/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/Pas de backend/i)).toBeInTheDocument();
    expect(screen.getByText(/Pas d'API/i)).toBeInTheDocument();
    expect(screen.getByText(/Données fictives locales uniquement/i)).toBeInTheDocument();
  });
});
