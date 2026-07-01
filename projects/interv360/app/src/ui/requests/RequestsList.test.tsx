import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { STORAGE_KEY_REQUESTS } from "../../data/localStorageKeys";
import { RequestsList } from "./RequestsList";

describe("RequestsList", () => {
  beforeEach(() => {
    localStorage.clear();
    localStorage.removeItem(STORAGE_KEY_REQUESTS);
  });

  it("renders the SAV requests title", () => {
    render(<RequestsList />);
    expect(
      screen.getByRole("heading", { name: /Demandes SAV/i }),
    ).toBeInTheDocument();
  });

  it("displays fictitious request SAV-DEMO-001", () => {
    render(<RequestsList />);
    expect(screen.getByText("SAV-DEMO-001")).toBeInTheDocument();
    expect(screen.getByText("Client Démo Industrie")).toBeInTheDocument();
    expect(
      screen.getByText(/Démonstration fictive uniquement/i),
    ).toBeInTheDocument();
  });
});
