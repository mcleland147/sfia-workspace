import { useMemo, useState } from "react";
import type { DemoRequest, DemoWorkflowEvent } from "../../domain/requestStatus";
import { getRequestStatusLabel } from "../../domain/requestStatus";
import {
  isSimulatedRole,
  simulatedRoleLabels,
} from "../../domain/simulatedRoles";
import {
  AUDIT_FILTERS,
  countCriticalAuditEvents,
  filterAuditEvents,
  getAuditActionLabel,
  type AuditFilterId,
} from "../audit/auditTrailPresentation";
import { PremiumBadge } from "./PremiumBadges";
import { cn } from "./cn";
import { getPremiumClientName, getPresentationRef } from "./premiumPresentationData";

interface PremiumAuditTrailProps {
  request?: DemoRequest;
  requestId: string;
  events?: DemoWorkflowEvent[];
  onBackToDetail?: () => void;
}

function formatActorRole(actorRole?: string): string | undefined {
  if (!actorRole) return undefined;
  return isSimulatedRole(actorRole)
    ? simulatedRoleLabels[actorRole]
    : actorRole;
}

export function PremiumAuditTrail({
  request,
  requestId,
  events = [],
  onBackToDetail,
}: PremiumAuditTrailProps) {
  const [activeFilter, setActiveFilter] = useState<AuditFilterId>("all");
  const filteredEvents = useMemo(
    () => filterAuditEvents(events, activeFilter),
    [events, activeFilter],
  );
  const criticalCount = countCriticalAuditEvents(events);
  const lastActivity =
    events.length > 0 ? events[events.length - 1]?.createdAt : "—";
  const ref = request ? getPresentationRef(request.id) : requestId;
  const client = request
    ? getPremiumClientName(request.id, request.customerLabel)
    : undefined;

  return (
    <section aria-label="Historique de la demande" role="region" className="space-y-4">
      <header className="rounded-2xl bg-[linear-gradient(165deg,#070d18_0%,#0f1a2c_70%,#0a1019_100%)] px-6 py-5 text-white">
        {onBackToDetail ? (
          <button
            type="button"
            className="mb-2 text-xs font-semibold text-teal-300 hover:text-teal-200"
            onClick={onBackToDetail}
          >
            ← Retour à la fiche demande
          </button>
        ) : null}
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-teal-400">
              Audit Trail · Traçabilité
            </p>
            <h1 className="text-2xl font-black">Historique de la demande</h1>
            <p className="mt-1 text-sm text-white/45">
              Suivi des transitions et interventions enregistrées
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="font-mono text-sm font-bold text-teal-300">{ref}</span>
              {client ? (
                <span className="text-sm font-semibold text-white/80">{client}</span>
              ) : null}
            </div>
          </div>
          <button
            type="button"
            disabled
            title="Hors scope MVP"
            aria-label="Exporter PDF — Hors scope MVP"
            className="cursor-not-allowed rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs font-bold text-white/50"
          >
            Exporter PDF
          </button>
        </div>
      </header>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4" aria-label="Synthèse audit">
        {[
          { value: events.length, label: "Événements" },
          { value: criticalCount, label: "Critiques" },
          { value: lastActivity, label: "Dernière activité" },
          { value: events.length > 0 ? "✓" : "—", label: "Traçabilité complète" },
        ].map((card) => (
          <article
            key={card.label}
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <p className="text-xl font-black text-slate-900">{card.value}</p>
            <p className="text-[11px] font-semibold text-slate-500">{card.label}</p>
          </article>
        ))}
      </div>

      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Filtres audit"
      >
        {AUDIT_FILTERS.map((filter) => (
          <button
            key={filter.id}
            type="button"
            className={cn(
              "rounded-full px-3 py-1.5 text-xs font-bold",
              activeFilter === filter.id
                ? "bg-teal-600 text-white"
                : "bg-slate-100 text-slate-600",
            )}
            aria-pressed={activeFilter === filter.id}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        {events.length === 0 ? (
          <p className="text-sm text-slate-500" role="status">
            Aucun événement enregistré pour cette demande.
          </p>
        ) : filteredEvents.length === 0 ? (
          <p className="text-sm text-slate-500" role="status">
            Aucun événement ne correspond au filtre sélectionné.
          </p>
        ) : (
          <ol className="relative space-y-4 border-l-2 border-slate-200 pl-6">
            {filteredEvents.map((event, index) => {
              const roleLabel = formatActorRole(event.actorRole);
              const actionLabel = getAuditActionLabel(event.action);
              const isCritical =
                event.message.toLowerCase().includes("anomal") ||
                event.message.toLowerCase().includes("retard");

              return (
                <li
                  key={`${event.type}-${event.createdAt}-${index}`}
                  className="relative"
                >
                  <span
                    className={cn(
                      "absolute -left-[1.6rem] top-1 h-3 w-3 rounded-full border-2 border-white",
                      isCritical ? "bg-rose-500" : "bg-teal-500",
                    )}
                    aria-hidden="true"
                  />
                  <div className="rounded-lg border border-slate-200 bg-slate-50/80 p-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-sm font-bold text-slate-900">
                        {actionLabel ?? event.message}
                      </p>
                      {isCritical ? (
                        <PremiumBadge tone="anomaly">Critique</PremiumBadge>
                      ) : null}
                    </div>
                    {event.actorDisplayName ? (
                      <p className="mt-1 text-xs text-slate-500">
                        <strong>{event.actorDisplayName}</strong>
                        {roleLabel ? ` — ${roleLabel}` : ""}
                      </p>
                    ) : null}
                    <p className="mt-1 text-xs text-slate-500">{event.createdAt}</p>
                    <p className="mt-1 text-xs text-slate-600">
                      {getRequestStatusLabel(event.fromStatus)} →{" "}
                      {getRequestStatusLabel(event.toStatus)}
                      <span className="ml-1 text-slate-400">
                        {event.fromStatus} → {event.toStatus}
                      </span>
                    </p>
                    {actionLabel && event.message !== actionLabel ? (
                      <p className="mt-1 text-xs italic text-slate-500">
                        {event.message}
                      </p>
                    ) : null}
                  </div>
                </li>
              );
            })}
          </ol>
        )}
      </div>
    </section>
  );
}
