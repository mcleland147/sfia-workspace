import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { STORAGE_KEY_REQUESTS } from "../../data/localStorageKeys";
import { PlanningReadonly } from "./PlanningReadonly";

describe("PlanningReadonly", () => {
  beforeEach(() => {
    localStorage.clear();
    localStorage.removeItem(STORAGE_KEY_REQUESTS);
  });

  it("renders the planning readonly title", () => {
    render(<PlanningReadonly requestId="SAV-DEMO-001" />);
    expect(
      screen.getByRole("heading", { name: /Planification SAV/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Vue readonly/i)).toBeInTheDocument();
  });

  it("displays fictitious planning data for SAV-DEMO-001", () => {
    render(<PlanningReadonly requestId="SAV-DEMO-001" />);
    expect(screen.getByText("SAV-DEMO-001")).toBeInTheDocument();
    expect(screen.getByText("Technicien Démo 01")).toBeInTheDocument();
    expect(screen.getByText("J+1 matin")).toBeInTheDocument();
    expect(screen.getByText(/Données fictives uniquement/i)).toBeInTheDocument();
  });

  it("does not expose business action buttons", () => {
    render(<PlanningReadonly requestId="SAV-DEMO-001" />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
    expect(screen.queryByText(/planifier/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/STAT-03/i)).not.toBeInTheDocument();
  });
});
