import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { STORAGE_KEY_REQUESTS } from "../../data/localStorageKeys";
import { InterventionReadonly } from "./InterventionReadonly";

describe("InterventionReadonly", () => {
  beforeEach(() => {
    localStorage.clear();
    localStorage.removeItem(STORAGE_KEY_REQUESTS);
  });

  it("renders the intervention readonly title", () => {
    render(<InterventionReadonly requestId="SAV-DEMO-001" />);
    expect(
      screen.getByRole("heading", { name: /Intervention terrain/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Vue readonly/i)).toBeInTheDocument();
  });

  it("displays fictitious intervention data for SAV-DEMO-001", () => {
    render(<InterventionReadonly requestId="SAV-DEMO-001" />);
    expect(screen.getByText("SAV-DEMO-001")).toBeInTheDocument();
    expect(screen.getByText("Technicien Démo 01")).toBeInTheDocument();
    expect(screen.getByText("Zone Démo Atelier")).toBeInTheDocument();
    expect(screen.getByText(/Données fictives uniquement/i)).toBeInTheDocument();
  });

  it("does not expose business action buttons", () => {
    render(<InterventionReadonly requestId="SAV-DEMO-001" />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
    expect(screen.queryByText(/démarrer/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/terminer/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/STAT-04/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/compte rendu/i)).not.toBeInTheDocument();
  });
});
