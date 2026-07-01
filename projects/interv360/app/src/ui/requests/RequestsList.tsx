import { useMemo } from "react";
import { getRequests } from "../../data/requestsRepository";
import {
  countRequestsByStatus,
  filterRequestsByStatus,
  getStatusesWithRequests,
  type StatusFilter,
} from "./requestListFilters";
import "./RequestsList.css";

interface RequestsListProps {
  dataVersion?: number;
  selectedRequestId: string;
  onSelectRequest: (requestId: string) => void;
  statusFilter: StatusFilter;
  onStatusFilterChange: (filter: StatusFilter) => void;
}

export function RequestsList({
  dataVersion = 0,
  selectedRequestId,
  onSelectRequest,
  statusFilter,
  onStatusFilterChange,
}: RequestsListProps) {
  const requests = useMemo(() => getRequests(), [dataVersion]);
  const statusCounts = useMemo(
    () => countRequestsByStatus(requests),
    [requests],
  );
  const statusesWithRequests = useMemo(
    () => getStatusesWithRequests(requests),
    [requests],
  );
  const visibleRequests = useMemo(
    () => filterRequestsByStatus(requests, statusFilter),
    [requests, statusFilter],
  );

  const activeFilterLabel =
    statusFilter === "ALL" ? "Toutes les demandes" : statusFilter;

  return (
    <section className="requests-list">
      <header className="requests-list__header">
        <h2>Demandes SAV</h2>
        <p className="requests-list__subtitle">
          INC-04 — {requests.length} demandes fictives locales
        </p>
        <p className="requests-list__notice">
          Démonstration fictive uniquement. Filtrez la liste et sélectionnez une
          demande pour consulter le détail et le workflow associé.
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
      </p>

      {visibleRequests.length === 0 ? (
        <p className="requests-list__empty">
          Aucune demande fictive visible pour le filtre {activeFilterLabel}.
        </p>
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
                  <div className="requests-list__card-row">
                    <span className="requests-list__label">Site</span>
                    <span>{request.siteLabel}</span>
                  </div>
                  <div className="requests-list__card-row">
                    <span className="requests-list__label">Statut</span>
                    <span>{request.status}</span>
                  </div>
                  {request.assignedTechnicianLabel ? (
                    <div className="requests-list__card-row">
                      <span className="requests-list__label">Technicien</span>
                      <span>{request.assignedTechnicianLabel}</span>
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
