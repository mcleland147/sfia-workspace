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

  it("displays fictitious request SAV-DEMO-001", () => {
    render(<RequestDetail requestId="SAV-DEMO-001" />);
    expect(screen.getByText("SAV-DEMO-001")).toBeInTheDocument();
    expect(
      screen.getByText("Machine client en panne intermittente"),
    ).toBeInTheDocument();
    expect(screen.getByText(/Données fictives uniquement/i)).toBeInTheDocument();
  });

  it("does not expose business action buttons", () => {
    render(<RequestDetail requestId="SAV-DEMO-001" />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
    expect(screen.queryByText(/qualifier/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/planifier/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/clôturer/i)).not.toBeInTheDocument();
  });
});
