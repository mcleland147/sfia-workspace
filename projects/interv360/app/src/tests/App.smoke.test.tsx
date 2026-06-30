import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { STORAGE_KEY_REQUESTS } from "../data/localStorageKeys";
import { App } from "../app/App";

describe("App smoke", () => {
  beforeEach(() => {
    localStorage.clear();
    localStorage.removeItem(STORAGE_KEY_REQUESTS);
  });

  it("renders the requests list and detail skeleton", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: /Demandes SAV/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Fiche demande SAV/i }),
    ).toBeInTheDocument();
    expect(screen.getAllByText("SAV-DEMO-001").length).toBeGreaterThan(0);
  });
});
