import { useMemo } from "react";
import type { DemoRequest } from "../../domain/requestStatus";
import { getRequests } from "../../data/requestsRepository";
import { RequestBadges } from "./RequestBadges";
import { getAssignmentDisplay } from "./requestIndicators";
import {
  countRequestsByStatus,
  filterVisibleRequests,
  getStatusesWithRequests,
  type StatusFilter,
} from "./requestListFilters";
import "./RequestsList.css";

export const EMPTY_VISIBLE_REQUESTS_MESSAGE =
  "Aucune demande fictive ne correspond aux critères locaux.";

interface RequestsListProps {
  requests?: DemoRequest[];
  dataVersion?: number;
  selectedRequestId: string;
  onSelectRequest: (requestId: string) => void;
  statusFilter: StatusFilter;
  onStatusFilterChange: (filter: StatusFilter) => void;
  searchQuery: string;
  onSearchQueryChange: (query: string) => void;
}

export function RequestsList({
  requests: requestsProp,
  dataVersion = 0,
  selectedRequestId,
  onSelectRequest,
  statusFilter,
  onStatusFilterChange,
  searchQuery,
  onSearchQueryChange,
}: RequestsListProps) {
  const requests = useMemo(
    () => requestsProp ?? getRequests(),
    [requestsProp, dataVersion],
  );
  const statusCounts = useMemo(
    () => countRequestsByStatus(requests),
    [requests],
  );
  const statusesWithRequests = useMemo(
    () => getStatusesWithRequests(requests),
    [requests],
  );
  const visibleRequests = useMemo(
    () => filterVisibleRequests(requests, statusFilter, searchQuery),
    [requests, statusFilter, searchQuery],
  );

  const activeFilterLabel =
    statusFilter === "ALL" ? "Toutes les demandes" : statusFilter;
  const hasActiveSearch = searchQuery.trim().length > 0;

  return (
    <section className="requests-list">
      <header className="requests-list__header">
        <h2>Demandes SAV</h2>
        <p className="requests-list__subtitle">
          Batch 01 — {requests.length} demandes fictives locales
        </p>
        <p className="requests-list__notice">
          Démonstration fictive uniquement. Filtrez, recherchez et sélectionnez
          une demande pour consulter le détail et le workflow associé.
        </p>
      </header>

      <div
        className="requests-list__summary"
        aria-label="Synthèse locale par statut"
      >
        <p className="requests-list__summary-title">Synthèse locale</p>
        <ul className="requests-list__summary-items">
          <li>
            <span className="requests-list__summary-label">Toutes</span>
            <span className="requests-list__summary-count">{requests.length}</span>
          </li>
          {statusesWithRequests.map((status) => (
            <li key={status}>
              <span className="requests-list__summary-label">{status}</span>
              <span className="requests-list__summary-count">
                {statusCounts.get(status) ?? 0}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="requests-list__search">
        <label className="requests-list__search-label" htmlFor="requests-search">
          Recherche locale
        </label>
        <div className="requests-list__search-row">
          <input
            id="requests-search"
            className="requests-list__search-input"
            type="search"
            value={searchQuery}
            placeholder="ID, titre, statut, priorité ou criticité"
            onChange={(event) => onSearchQueryChange(event.target.value)}
          />
          {hasActiveSearch ? (
            <button
              type="button"
              className="requests-list__search-clear"
              onClick={() => onSearchQueryChange("")}
            >
              Effacer la recherche
            </button>
          ) : null}
        </div>
      </div>

      <div
        className="requests-list__filters"
        role="group"
        aria-label="Filtres locaux par statut"
      >
        <button
          type="button"
          className={
            statusFilter === "ALL"
              ? "requests-list__filter requests-list__filter--active"
              : "requests-list__filter"
          }
          aria-pressed={statusFilter === "ALL"}
          onClick={() => onStatusFilterChange("ALL")}
        >
          Toutes
        </button>
        {statusesWithRequests.map((status) => (
          <button
            key={status}
            type="button"
            className={
              statusFilter === status
                ? "requests-list__filter requests-list__filter--active"
                : "requests-list__filter"
            }
            aria-pressed={statusFilter === status}
            onClick={() => onStatusFilterChange(status)}
          >
            {status}
          </button>
        ))}
      </div>

      <p className="requests-list__active-filter" role="status">
        Filtre actif : {activeFilterLabel}
        {hasActiveSearch ? ` — Recherche : « ${searchQuery.trim()} »` : ""}
      </p>

      {visibleRequests.length === 0 ? (
        <p className="requests-list__empty">{EMPTY_VISIBLE_REQUESTS_MESSAGE}</p>
      ) : (
        <ul className="requests-list__items">
          {visibleRequests.map((request) => {
            const isSelected = request.id === selectedRequestId;

            return (
              <li key={request.id}>
                <button
                  type="button"
                  className={
                    isSelected
                      ? "requests-list__card requests-list__card--selected"
                      : "requests-list__card"
                  }
                  aria-pressed={isSelected}
                  onClick={() => onSelectRequest(request.id)}
                >
                  <RequestBadges request={request} />
                  <div className="requests-list__card-row">
                    <span className="requests-list__label">Identifiant</span>
                    <span>{request.id}</span>
                  </div>
                  <div className="requests-list__card-row">
                    <span className="requests-list__label">Titre</span>
                    <span>{request.title}</span>
                  </div>
                  <div className="requests-list__card-row">
                    <span className="requests-list__label">Client</span>
                    <span>{request.customerLabel}</span>
                  </div>
                  {request.requesterName ? (
                    <div className="requests-list__card-row">
                      <span className="requests-list__label">Demandeur</span>
                      <span>{request.requesterName}</span>
                    </div>
                  ) : null}
                  <div className="requests-list__card-row">
                    <span className="requests-list__label">Site</span>
                    <span>{request.siteLabel}</span>
                  </div>
                  <div className="requests-list__card-row">
                    <span className="requests-list__label">Statut</span>
                    <span>{request.status}</span>
                  </div>
                  {getAssignmentDisplay(request) ? (
                    <div className="requests-list__card-row">
                      <span className="requests-list__label">Affectation</span>
                      <span>{getAssignmentDisplay(request)}</span>
                    </div>
                  ) : null}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
