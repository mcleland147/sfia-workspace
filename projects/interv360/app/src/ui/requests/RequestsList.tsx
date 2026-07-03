import { useMemo } from "react";
import type { DemoRequest } from "../../domain/requestStatus";
import { getRequestStatusLabel } from "../../domain/requestStatus";
import { getRequests } from "../../data/requestsRepository";
import {
  countByStatus,
  countOpenRequests,
  countWithIndicator,
  getFocusRequests,
  getQualificationLoadPercent,
  getUiIndicator,
} from "../dashboard/requestDashboardStats";
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
  "Aucune demande ne correspond aux critères de recherche.";

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
    statusFilter === "ALL"
      ? "Toutes les demandes"
      : getRequestStatusLabel(statusFilter);
  const hasActiveSearch = searchQuery.trim().length > 0;
  const focusItems = useMemo(() => getFocusRequests(requests), [requests]);

  const kpis = [
    { label: "Qualifiées", value: countByStatus(requests, "STAT-01") },
    { label: "Planifiées", value: countByStatus(requests, "STAT-02") },
    { label: "En cours", value: countByStatus(requests, "STAT-03") },
    { label: "En retard", value: countWithIndicator(requests, "retard") },
    { label: "Anomalies", value: countWithIndicator(requests, "anomalie") },
  ];

  return (
    <section className="requests-list requests-list--premium">
      <header className="requests-list__hero">
        <div>
          <p className="requests-list__eyebrow">Centre de commande · SAV</p>
          <h2>Demandes SAV</h2>
          <p className="requests-list__subtitle">
            {requests.length} demandes — consultation et suivi
          </p>
          <p className="requests-list__notice">
            Filtrez, recherchez et sélectionnez une demande pour consulter le
            détail et le workflow associé.
          </p>
        </div>
        <button
          type="button"
          className="requests-list__cta"
          disabled
          title="Création complète hors scope MVP"
          aria-label="Nouvelle demande — création complète hors scope MVP"
        >
          Nouvelle demande
        </button>
      </header>

      <div className="requests-list__kpi-grid" aria-label="Indicateurs demandes">
        <article className="requests-list__kpi">
          <strong>{countOpenRequests(requests)}</strong>
          <span>Ouvertes</span>
        </article>
        {kpis.map((kpi) => (
          <article key={kpi.label} className="requests-list__kpi">
            <strong>{kpi.value}</strong>
            <span>{kpi.label}</span>
          </article>
        ))}
        <article className="requests-list__kpi">
          <strong>{getQualificationLoadPercent(requests)}%</strong>
          <span>Charge qualification</span>
        </article>
      </div>

      <section
        className="requests-list__focus"
        aria-label="Focus opérationnel"
      >
        <header className="requests-list__focus-header">
          <h3>Focus opérationnel</h3>
          <span>{focusItems.length} actions requises</span>
        </header>
        {focusItems.length === 0 ? (
          <p className="requests-list__focus-empty">Aucune action critique.</p>
        ) : (
          <ul className="requests-list__focus-items">
            {focusItems.map((request) => (
              <li key={request.id}>
                <button
                  type="button"
                  className="requests-list__focus-row"
                  aria-label={`Focus opérationnel — ${request.customerLabel}`}
                  onClick={() => onSelectRequest(request.id)}
                >
                  <span className="requests-list__focus-client">
                    {request.customerLabel}
                  </span>
                  <RequestBadges request={request} compact />
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

      <div
        className="requests-list__summary"
        aria-label="Synthèse par statut"
      >
        <p className="requests-list__summary-title">Synthèse par statut</p>
        <ul className="requests-list__summary-items">
          <li>
            <span className="requests-list__summary-label">Toutes</span>
            <span className="requests-list__summary-count">{requests.length}</span>
          </li>
          {statusesWithRequests.map((status) => (
            <li key={status}>
              <span className="requests-list__summary-label">
                {getRequestStatusLabel(status)}
              </span>
              <span className="requests-list__summary-count">
                {statusCounts.get(status) ?? 0}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="requests-list__toolbar">
        <div className="requests-list__search">
          <label className="requests-list__search-label" htmlFor="requests-search">
            Recherche
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
          aria-label="Filtres par statut"
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
              {getRequestStatusLabel(status)}
            </button>
          ))}
        </div>
      </div>

      <p className="requests-list__active-filter" role="status">
        Filtre actif : {activeFilterLabel}
        {hasActiveSearch ? ` — Recherche : « ${searchQuery.trim()} »` : ""}
      </p>

      {visibleRequests.length === 0 ? (
        <p className="requests-list__empty">{EMPTY_VISIBLE_REQUESTS_MESSAGE}</p>
      ) : (
        <>
          <div className="requests-list__table-wrap">
            <table className="requests-list__table">
              <thead>
                <tr>
                  <th scope="col">Référence</th>
                  <th scope="col">Client</th>
                  <th scope="col">Canal</th>
                  <th scope="col">Priorité</th>
                  <th scope="col">Statut</th>
                  <th scope="col">Affectation</th>
                  <th scope="col">Indicateurs</th>
                  <th scope="col">
                    <span className="requests-list__sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {visibleRequests.map((request) => {
                  const isSelected = request.id === selectedRequestId;
                  const indicator = getUiIndicator(request);
                  const isCritical =
                    request.priority === "high" && indicator !== null;

                  return (
                    <tr
                      key={request.id}
                      className={
                        isSelected
                          ? "requests-list__row requests-list__row--selected"
                          : isCritical
                            ? "requests-list__row requests-list__row--critical"
                            : "requests-list__row"
                      }
                    >
                      <td>
                        <button
                          type="button"
                          className="requests-list__row-select"
                          aria-pressed={isSelected}
                          onClick={() => onSelectRequest(request.id)}
                        >
                          {request.id}
                        </button>
                      </td>
                      <td>
                        <strong>{request.customerLabel}</strong>
                        <span className="requests-list__row-meta">
                          {request.title}
                        </span>
                        {request.requesterName ? (
                          <span className="requests-list__row-meta">
                            {request.requesterName}
                          </span>
                        ) : null}
                        <span className="requests-list__row-meta">
                          {request.siteLabel}
                        </span>
                      </td>
                      <td>{request.channelLabel ?? "—"}</td>
                      <td>
                        <RequestBadges
                          request={request}
                          compact
                          showStatus={false}
                          showChannel={false}
                          showCriticality
                          showIndicators={false}
                        />
                      </td>
                      <td>
                        <RequestBadges
                          request={request}
                          compact
                          showStatus
                          showChannel={false}
                          showCriticality={false}
                          showIndicators={false}
                        />
                      </td>
                      <td>{getAssignmentDisplay(request) ?? "—"}</td>
                      <td>
                        {indicator ? (
                          <RequestBadges
                            request={request}
                            compact
                            showStatus={false}
                            showCriticality={false}
                            showChannel={false}
                          />
                        ) : (
                          "—"
                        )}
                      </td>
                      <td>
                        <button
                          type="button"
                          className="requests-list__open"
                          onClick={() => onSelectRequest(request.id)}
                        >
                          Ouvrir
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </section>
  );
}
