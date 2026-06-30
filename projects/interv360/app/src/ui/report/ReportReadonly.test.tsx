import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { STORAGE_KEY_REQUESTS } from "../../data/localStorageKeys";
import { ReportReadonly } from "./ReportReadonly";

describe("ReportReadonly", () => {
  beforeEach(() => {
    localStorage.clear();
    localStorage.removeItem(STORAGE_KEY_REQUESTS);
  });

  it("renders the report readonly title", () => {
    render(<ReportReadonly requestId="SAV-DEMO-001" />);
    expect(
      screen.getByRole("heading", { name: /Compte rendu SAV/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Vue readonly/i)).toBeInTheDocument();
  });

  it("displays fictitious report data for SAV-DEMO-001", () => {
    render(<ReportReadonly requestId="SAV-DEMO-001" />);
    expect(screen.getByText("SAV-DEMO-001")).toBeInTheDocument();
    expect(
      screen.getByText("Remise en service fictive confirmée."),
    ).toBeInTheDocument();
    expect(screen.getByText(/Données fictives uniquement/i)).toBeInTheDocument();
  });

  it("does not expose business action buttons", () => {
    render(<ReportReadonly requestId="SAV-DEMO-001" />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
    expect(screen.queryByText(/saisir/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/clôturer/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/STAT-06/i)).not.toBeInTheDocument();
  });
});
