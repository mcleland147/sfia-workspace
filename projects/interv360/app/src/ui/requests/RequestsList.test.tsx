import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { STORAGE_KEY_REQUESTS } from "../../data/localStorageKeys";
import { RequestsList } from "./RequestsList";

describe("RequestsList", () => {
  beforeEach(() => {
    localStorage.clear();
    localStorage.removeItem(STORAGE_KEY_REQUESTS);
  });

  it("renders the SAV requests title", () => {
    render(
      <RequestsList
        selectedRequestId="SAV-DEMO-001"
        onSelectRequest={() => undefined}
      />,
    );
    expect(
      screen.getByRole("heading", { name: /Demandes SAV/i }),
    ).toBeInTheDocument();
  });

  it("displays three fictitious demo requests", () => {
    render(
      <RequestsList
        selectedRequestId="SAV-DEMO-001"
        onSelectRequest={() => undefined}
      />,
    );
    expect(screen.getByText("SAV-DEMO-001")).toBeInTheDocument();
    expect(screen.getByText("SAV-DEMO-002")).toBeInTheDocument();
    expect(screen.getByText("SAV-DEMO-003")).toBeInTheDocument();
    expect(screen.getByText("Client Démo Industrie")).toBeInTheDocument();
    expect(screen.getByText("Client Démo Logistique")).toBeInTheDocument();
    expect(
      screen.getByText(/Démonstration fictive uniquement/i),
    ).toBeInTheDocument();
  });

  it("calls onSelectRequest when a request card is clicked", () => {
    const onSelectRequest = vi.fn();
    render(
      <RequestsList
        selectedRequestId="SAV-DEMO-001"
        onSelectRequest={onSelectRequest}
      />,
    );

    fireEvent.click(screen.getByRole("button", { name: /SAV-DEMO-002/i }));

    expect(onSelectRequest).toHaveBeenCalledWith("SAV-DEMO-002");
  });
});
