import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { STORAGE_KEY_REQUESTS } from "../../data/localStorageKeys";
import { QualificationReadonly } from "./QualificationReadonly";

describe("QualificationReadonly", () => {
  beforeEach(() => {
    localStorage.clear();
    localStorage.removeItem(STORAGE_KEY_REQUESTS);
  });

  it("renders the qualification readonly title", () => {
    render(<QualificationReadonly requestId="SAV-DEMO-001" />);
    expect(
      screen.getByRole("heading", { name: /Qualification SAV/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Vue readonly/i)).toBeInTheDocument();
  });

  it("displays fictitious qualification data for SAV-DEMO-001", () => {
    render(<QualificationReadonly requestId="SAV-DEMO-001" />);
    expect(screen.getByText("SAV-DEMO-001")).toBeInTheDocument();
    expect(screen.getByText("STAT-01")).toBeInTheDocument();
    expect(screen.getByText(/Données fictives uniquement/i)).toBeInTheDocument();
    expect(screen.getByText("Contexte de panne confirmé")).toBeInTheDocument();
  });

  it("does not expose business action buttons", () => {
    render(<QualificationReadonly requestId="SAV-DEMO-001" />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
    expect(screen.queryByText(/qualifier/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/STAT-02/i)).not.toBeInTheDocument();
  });
});
