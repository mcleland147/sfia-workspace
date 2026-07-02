import { fireEvent, render, screen, within } from "@testing-library/react";
import type { ComponentProps } from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { STORAGE_KEY_REQUESTS } from "../../data/localStorageKeys";
import { EMPTY_VISIBLE_REQUESTS_MESSAGE, RequestsList } from "./RequestsList";

function renderRequestsList(
  props: Partial<ComponentProps<typeof RequestsList>> = {},
) {
  const onSelectRequest = props.onSelectRequest ?? vi.fn();
  const onStatusFilterChange = props.onStatusFilterChange ?? vi.fn();
  const onSearchQueryChange = props.onSearchQueryChange ?? vi.fn();

  render(
    <RequestsList
      selectedRequestId={props.selectedRequestId ?? "SAV-DEMO-001"}
      onSelectRequest={onSelectRequest}
      statusFilter={props.statusFilter ?? "ALL"}
      onStatusFilterChange={onStatusFilterChange}
      searchQuery={props.searchQuery ?? ""}
      onSearchQueryChange={onSearchQueryChange}
      dataVersion={props.dataVersion}
    />,
  );

  return { onSelectRequest, onStatusFilterChange, onSearchQueryChange };
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

  it("displays demo requests with status labels, summary and priority badges", () => {
    renderRequestsList();
    expect(screen.getByText("SAV-DEMO-001")).toBeInTheDocument();
    expect(screen.getByText("SAV-DEMO-002")).toBeInTheDocument();
    expect(screen.getByText("SAV-DEMO-003")).toBeInTheDocument();
    expect(screen.getByLabelText(/Synthèse par statut/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Priorité Haute/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Criticité Urgente/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Qualifiée/i).length).toBeGreaterThan(0);
    expect(
      screen.getAllByText(/En cours de traitement/i).length,
    ).toBeGreaterThan(0);
    expect(screen.getAllByText(/Clôturée/i).length).toBeGreaterThan(0);
  });

  it("displays requester and assignment on request cards when available", () => {
    renderRequestsList();

    expect(screen.getAllByText("Alice Demandeur").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Théo Technicien").length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText("Maya Responsable")).toBeInTheDocument();
    expect(screen.getByText("Paris Démo")).toBeInTheDocument();
  });

  it("calls onSelectRequest when a request card is clicked", () => {
    const { onSelectRequest } = renderRequestsList();

    fireEvent.click(screen.getByRole("button", { name: /SAV-DEMO-002/i }));

    expect(onSelectRequest).toHaveBeenCalledWith("SAV-DEMO-002");
  });

  it("filters requests by status and shows active filter with status label", () => {
    renderRequestsList({ statusFilter: "STAT-03" });

    expect(screen.queryByText("SAV-DEMO-001")).not.toBeInTheDocument();
    expect(screen.getByText("SAV-DEMO-002")).toBeInTheDocument();
    expect(screen.queryByText("SAV-DEMO-003")).not.toBeInTheDocument();
    expect(
      screen.getByText(/Filtre actif : En cours de traitement/i),
    ).toBeInTheDocument();
  });

  it("calls onStatusFilterChange when a filter button is clicked", () => {
    const { onStatusFilterChange } = renderRequestsList();

    const filters = screen.getByRole("group", { name: /Filtres par statut/i });
    fireEvent.click(
      within(filters).getByRole("button", { name: /En cours de traitement/i }),
    );

    expect(onStatusFilterChange).toHaveBeenCalledWith("STAT-03");
  });

  it("searches requests locally and shows active search", () => {
    renderRequestsList({ searchQuery: "SAV-DEMO-003" });

    expect(screen.queryByText("SAV-DEMO-001")).not.toBeInTheDocument();
    expect(screen.queryByText("SAV-DEMO-002")).not.toBeInTheDocument();
    expect(screen.getByText("SAV-DEMO-003")).toBeInTheDocument();
    expect(screen.getByText(/Recherche : « SAV-DEMO-003 »/i)).toBeInTheDocument();
  });

  it("searches requests by readable status label", () => {
    renderRequestsList({ searchQuery: "qualifiée" });

    expect(screen.getByText("SAV-DEMO-001")).toBeInTheDocument();
    expect(screen.queryByText("SAV-DEMO-002")).not.toBeInTheDocument();
    expect(screen.queryByText("SAV-DEMO-003")).not.toBeInTheDocument();
  });

  it("shows empty state when filter and search return no result", () => {
    renderRequestsList({ statusFilter: "STAT-03", searchQuery: "SAV-DEMO-003" });

    expect(screen.getByText(EMPTY_VISIBLE_REQUESTS_MESSAGE)).toBeInTheDocument();
  });

  it("clears search when the clear button is clicked", () => {
    const { onSearchQueryChange } = renderRequestsList({ searchQuery: "demo" });

    fireEvent.click(
      screen.getByRole("button", { name: /Effacer la recherche/i }),
    );

    expect(onSearchQueryChange).toHaveBeenCalledWith("");
  });
});
