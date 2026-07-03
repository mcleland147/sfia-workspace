import { useMemo } from "react";
import type { DemoRequest } from "../../domain/requestStatus";
import { getRequestStatusLabel } from "../../domain/requestStatus";
import {
  countOpenRequests,
  countWithIndicator,
  getQualificationLoadPercent,
} from "../dashboard/requestDashboardStats";
import {
  getCommandCenterKpis,
  getFocusPresentationItems,
} from "./premiumPresentationData";
import {
  countRequestsByStatus,
  filterVisibleRequests,
  getStatusesWithRequests,
  type StatusFilter,
} from "../requests/requestListFilters";
import { PremiumBadge } from "./PremiumBadges";
import { cn } from "./cn";
import { getPremiumRequestRows } from "./premiumPresentationData";

export const EMPTY_VISIBLE_REQUESTS_MESSAGE =
  "Aucune demande ne correspond aux critères de recherche.";

interface PremiumRequestsPageProps {
  requests: DemoRequest[];
  selectedRequestId: string;
  onSelectRequest: (requestId: string) => void;
  onOpenRequest: (requestId: string) => void;
  statusFilter: StatusFilter;
  onStatusFilterChange: (filter: StatusFilter) => void;
  searchQuery: string;
  onSearchQueryChange: (query: string) => void;
}

export function PremiumRequestsPage({
  requests,
  selectedRequestId,
  onSelectRequest,
  onOpenRequest,
  statusFilter,
  onStatusFilterChange,
  searchQuery,
  onSearchQueryChange,
}: PremiumRequestsPageProps) {
  const visibleRequests = useMemo(
    () => filterVisibleRequests(requests, statusFilter, searchQuery),
    [requests, statusFilter, searchQuery],
  );
  const presentationRows = useMemo(
    () => getPremiumRequestRows(visibleRequests),
    [visibleRequests],
  );
  const allRows = useMemo(() => getPremiumRequestRows(requests), [requests]);
  const rowById = useMemo(
    () => new Map(allRows.map((row) => [row.requestId, row])),
    [allRows],
  );
  const statusesWithRequests = useMemo(
    () => getStatusesWithRequests(requests),
    [requests],
  );
  const statusCounts = useMemo(
    () => countRequestsByStatus(requests),
    [requests],
  );
  const focusItems = getFocusPresentationItems(requests);
  const kpis = getCommandCenterKpis(requests);
  const hasActiveSearch = searchQuery.trim().length > 0;
  const activeFilterLabel =
    statusFilter === "ALL"
      ? "Toutes les demandes"
      : getRequestStatusLabel(statusFilter);

  return (
    <section className="space-y-4" aria-label="Demandes SAV">
      <header className="rounded-2xl bg-[linear-gradient(165deg,#070d18_0%,#0f1a2c_70%,#0a1019_100%)] px-6 py-5 text-white">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-teal-400">
              Centre de commande · SAV
            </p>
            <h1 className="text-2xl font-black tracking-tight">Demandes SAV</h1>
            <p className="mt-1 text-sm text-white/45">
              {requests.length} demandes — consultation et suivi
            </p>
          </div>
          <button
            type="button"
            disabled
            title="Hors scope MVP"
            aria-label="Nouvelle demande — Hors scope MVP"
            className="rounded-lg bg-gradient-to-br from-teal-600 to-teal-700 px-4 py-2 text-xs font-bold shadow-lg disabled:opacity-80"
          >
            + Nouvelle demande
          </button>
        </div>
        <div className="mt-4 grid grid-cols-6 gap-2">
          <article className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
            <p className="text-xl font-black">{countOpenRequests(requests)}</p>
            <p className="text-[10px] font-semibold text-white/40">Ouvertes</p>
          </article>
          {kpis.slice(1, 6).map((kpi) => (
            <article
              key={kpi.label}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-2"
            >
              <p className="text-xl font-black">{kpi.value}</p>
              <p className="text-[10px] font-semibold text-white/40">{kpi.label}</p>
            </article>
          ))}
        </div>
      </header>

      <section
        className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
        aria-label="Focus opérationnel"
        role="region"
      >
        <header className="mb-2 flex justify-between">
          <h2 className="text-sm font-bold">Focus opérationnel</h2>
          <span className="text-[10px] font-bold text-rose-600">
            {focusItems.length} actions requises
          </span>
        </header>
        <ul className="grid gap-2 md:grid-cols-3">
          {focusItems.map((item) => (
            <li key={item.requestId}>
              <button
                type="button"
                className="w-full rounded-lg border border-slate-200 bg-slate-50 p-3 text-left hover:border-teal-500"
                onClick={() => onOpenRequest(item.requestId)}
              >
                <span className="font-mono text-[11px] font-bold text-teal-800">
                  {item.ref}
                </span>
                <p className="text-sm font-bold text-slate-800">{item.client}</p>
                <p className="text-[10px] text-slate-500">{item.tag}</p>
              </button>
            </li>
          ))}
        </ul>
      </section>

      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="mb-3 flex flex-wrap gap-3">
          <div className="min-w-[16rem] flex-1">
            <label className="mb-1 block text-xs font-bold text-slate-600" htmlFor="premium-requests-search">
              Recherche
            </label>
            <input
              id="premium-requests-search"
              type="search"
              value={searchQuery}
              placeholder="ID, client, statut, priorité…"
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-teal-500"
              onChange={(e) => onSearchQueryChange(e.target.value)}
            />
          </div>
          <div role="group" aria-label="Filtres par statut" className="flex flex-wrap items-end gap-1">
            <button
              type="button"
              className={cn(
                "rounded-full px-3 py-1.5 text-xs font-bold",
                statusFilter === "ALL"
                  ? "bg-teal-600 text-white"
                  : "bg-slate-100 text-slate-600",
              )}
              aria-pressed={statusFilter === "ALL"}
              onClick={() => onStatusFilterChange("ALL")}
            >
              Toutes
            </button>
            {statusesWithRequests.map((status) => (
              <button
                key={status}
                type="button"
                className={cn(
                  "rounded-full px-3 py-1.5 text-xs font-bold",
                  statusFilter === status
                    ? "bg-teal-600 text-white"
                    : "bg-slate-100 text-slate-600",
                )}
                aria-pressed={statusFilter === status}
                onClick={() => onStatusFilterChange(status)}
              >
                {getRequestStatusLabel(status)}
              </button>
            ))}
          </div>
        </div>

        <div
          className="mb-3 flex flex-wrap gap-4 text-xs text-slate-500"
          role="region"
          aria-label="Synthèse par statut"
        >
          <span>Toutes: {requests.length}</span>
          {statusesWithRequests.map((status) => (
            <span key={status}>
              {getRequestStatusLabel(status)}: {statusCounts.get(status) ?? 0}
            </span>
          ))}
          <span>Retard: {countWithIndicator(requests, "retard")}</span>
          <span>Anomalies: {countWithIndicator(requests, "anomalie")}</span>
          <span>Charge: {getQualificationLoadPercent(requests)}%</span>
        </div>

        <p className="mb-2 text-xs text-slate-500" role="status">
          Filtre actif : {activeFilterLabel}
          {hasActiveSearch ? ` — Recherche : « ${searchQuery.trim()} »` : ""}
        </p>

        {presentationRows.length === 0 ? (
          <p className="text-sm text-slate-500">{EMPTY_VISIBLE_REQUESTS_MESSAGE}</p>
        ) : (
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full min-w-[48rem] text-left text-sm">
              <thead className="bg-slate-50 text-[11px] font-bold uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-3 py-2">Référence</th>
                  <th className="px-3 py-2">Client</th>
                  <th className="px-3 py-2">Canal</th>
                  <th className="px-3 py-2">Priorité</th>
                  <th className="px-3 py-2">Statut</th>
                  <th className="px-3 py-2">Affectation</th>
                  <th className="px-3 py-2">Indicateurs</th>
                  <th className="px-3 py-2"><span className="sr-only">Actions</span></th>
                </tr>
              </thead>
              <tbody>
                {visibleRequests.map((request) => {
                  const row = rowById.get(request.id);
                  if (!row) return null;
                  const isSelected = request.id === selectedRequestId;
                  return (
                    <tr
                      key={request.id}
                      className={cn(
                        "cursor-pointer border-t border-slate-100 hover:bg-slate-50/80",
                        isSelected && "bg-teal-50/60",
                      )}
                      onClick={() => onSelectRequest(request.id)}
                    >
                      <td className="px-3 py-2.5 font-mono text-xs font-bold text-teal-800">
                        {row.ref}
                      </td>
                      <td className="px-3 py-2.5 font-semibold text-slate-800">
                        {row.client}
                      </td>
                      <td className="px-3 py-2.5">
                        <PremiumBadge tone="channel">{row.channelLabel}</PremiumBadge>
                      </td>
                      <td className="px-3 py-2.5">
                        <PremiumBadge tone="priority">{row.priorityLabel}</PremiumBadge>
                      </td>
                      <td className="px-3 py-2.5">
                        <PremiumBadge tone="status">{row.statusLabel}</PremiumBadge>
                      </td>
                      <td className="px-3 py-2.5 text-xs text-slate-600">{row.assignee}</td>
                      <td className="px-3 py-2.5">
                        {row.indicator === "retard" ? (
                          <PremiumBadge tone="late">Retard {row.indicatorLabel}</PremiumBadge>
                        ) : null}
                        {row.indicator === "anomalie" ? (
                          <PremiumBadge tone="anomaly">Anomalie</PremiumBadge>
                        ) : null}
                      </td>
                      <td className="px-3 py-2.5">
                        <button
                          type="button"
                          className="rounded-md border border-slate-300 px-2 py-1 text-[10px] font-bold text-slate-600 hover:border-teal-600 hover:text-teal-800"
                          onClick={(event) => {
                            event.stopPropagation();
                            onOpenRequest(request.id);
                          }}
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
        )}
      </div>
    </section>
  );
}
