import { fireEvent, render, screen } from "@testing-library/react";
import type { ComponentProps } from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { STORAGE_KEY_REQUESTS } from "../../data/localStorageKeys";
import { RequestsList } from "./RequestsList";

function renderRequestsList(
  props: Partial<ComponentProps<typeof RequestsList>> = {},
) {
  const onSelectRequest = props.onSelectRequest ?? vi.fn();
  const onStatusFilterChange = props.onStatusFilterChange ?? vi.fn();

  render(
    <RequestsList
      selectedRequestId={props.selectedRequestId ?? "SAV-DEMO-001"}
      onSelectRequest={onSelectRequest}
      statusFilter={props.statusFilter ?? "ALL"}
      onStatusFilterChange={onStatusFilterChange}
      dataVersion={props.dataVersion}
    />,
  );

  return { onSelectRequest, onStatusFilterChange };
}

describe("RequestsList", () => {
  beforeEach(() => {
    localStorage.clear();
    localStorage.removeItem(STORAGE_KEY_REQUESTS);
  });

  it("renders the SAV requests title", () => {
    renderRequestsList();
    expect(
      screen.getByRole("heading", { name: /Demandes SAV/i }),
    ).toBeInTheDocument();
  });

  it("displays three fictitious demo requests and local status summary", () => {
    renderRequestsList();
    expect(screen.getByText("SAV-DEMO-001")).toBeInTheDocument();
    expect(screen.getByText("SAV-DEMO-002")).toBeInTheDocument();
    expect(screen.getByText("SAV-DEMO-003")).toBeInTheDocument();
    expect(screen.getByLabelText(/Synthèse locale par statut/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Toutes/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/STAT-01/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/STAT-02/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/STAT-06/i).length).toBeGreaterThan(0);
  });

  it("calls onSelectRequest when a request card is clicked", () => {
    const { onSelectRequest } = renderRequestsList();

    fireEvent.click(screen.getByRole("button", { name: /SAV-DEMO-002/i }));

    expect(onSelectRequest).toHaveBeenCalledWith("SAV-DEMO-002");
  });

  it("filters requests by status and shows active filter", () => {
    renderRequestsList({ statusFilter: "STAT-02" });

    expect(screen.queryByText("SAV-DEMO-001")).not.toBeInTheDocument();
    expect(screen.getByText("SAV-DEMO-002")).toBeInTheDocument();
    expect(screen.queryByText("SAV-DEMO-003")).not.toBeInTheDocument();
    expect(screen.getByText(/Filtre actif : STAT-02/i)).toBeInTheDocument();
  });

  it("calls onStatusFilterChange when a filter button is clicked", () => {
    const { onStatusFilterChange } = renderRequestsList();

    fireEvent.click(screen.getByRole("button", { name: /^STAT-02$/ }));

    expect(onStatusFilterChange).toHaveBeenCalledWith("STAT-02");
  });
});
