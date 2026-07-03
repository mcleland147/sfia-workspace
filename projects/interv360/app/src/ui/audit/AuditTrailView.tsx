import { useMemo, useState } from "react";
import type { DemoRequest, DemoWorkflowEvent } from "../../domain/requestStatus";
import { getRequestStatusLabel } from "../../domain/requestStatus";
import {
  isSimulatedRole,
  simulatedRoleLabels,
} from "../../domain/simulatedRoles";
import { RequestBadges } from "../requests/RequestBadges";
import {
  AUDIT_FILTERS,
  countCriticalAuditEvents,
  filterAuditEvents,
  getAuditActionLabel,
  type AuditFilterId,
} from "./auditTrailPresentation";
import "./AuditTrailView.css";

interface AuditTrailViewProps {
  request?: DemoRequest;
  requestId: string;
  events?: DemoWorkflowEvent[];
}

function formatActorRole(actorRole?: string): string | undefined {
  if (!actorRole) {
    return undefined;
  }

  return isSimulatedRole(actorRole)
    ? simulatedRoleLabels[actorRole]
    : actorRole;
}

export function AuditTrailView({
  request,
  requestId,
  events = [],
}: AuditTrailViewProps) {
  const [activeFilter, setActiveFilter] = useState<AuditFilterId>("all");

  const filteredEvents = useMemo(
    () => filterAuditEvents(events, activeFilter),
    [events, activeFilter],
  );

  const criticalCount = countCriticalAuditEvents(events);
  const lastActivity =
    events.length > 0 ? events[events.length - 1]?.createdAt : "—";

  return (
    <section className="audit-trail" aria-label="Historique de la demande">
      <header className="audit-trail__hero">
        <div>
          <p className="audit-trail__eyebrow">Audit Trail · Traçabilité</p>
          <h2>Historique de la demande</h2>
          <p className="audit-trail__subtitle">
            Suivi des transitions et interventions enregistrées
          </p>
          {request ? (
            <div className="audit-trail__context">
              <strong>{request.id}</strong>
              <span>{request.customerLabel}</span>
              <RequestBadges request={request} compact />
            </div>
          ) : (
            <div className="audit-trail__context">
              <strong>{requestId}</strong>
            </div>
          )}
        </div>
        <span
          className="audit-trail__export"
          title="Export PDF hors scope MVP"
          aria-label="Exporter PDF — hors scope MVP"
        >
          Exporter PDF
        </span>
      </header>

      <div className="audit-trail__summary" aria-label="Synthèse audit">
        <article>
          <strong>{events.length}</strong>
          <span>Événements</span>
        </article>
        <article>
          <strong>{criticalCount}</strong>
          <span>Critiques</span>
        </article>
        <article>
          <strong>{lastActivity}</strong>
          <span>Dernière activité</span>
        </article>
        <article>
          <strong>{events.length > 0 ? "✓" : "—"}</strong>
          <span>Traçabilité complète</span>
        </article>
      </div>

      <div className="audit-trail__filters" role="group" aria-label="Filtres audit">
        {AUDIT_FILTERS.map((filter) => {
          const count = filterAuditEvents(events, filter.id).length;
          return (
            <button
              key={filter.id}
              type="button"
              className={
                activeFilter === filter.id
                  ? "audit-trail__filter audit-trail__filter--active"
                  : "audit-trail__filter"
              }
              aria-pressed={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
              <span>{count}</span>
            </button>
          );
        })}
      </div>

      {events.length === 0 ? (
        <p className="audit-trail__empty" role="status">
          Aucun événement enregistré pour cette demande.
        </p>
      ) : filteredEvents.length === 0 ? (
        <p className="audit-trail__empty" role="status">
          Aucun événement ne correspond au filtre sélectionné.
        </p>
      ) : (
        <ol className="audit-trail__timeline">
          {filteredEvents.map((event, index) => {
            const roleLabel = formatActorRole(event.actorRole);
            const actionLabel = getAuditActionLabel(event.action);
            const isCritical =
              event.message.toLowerCase().includes("anomal") ||
              event.message.toLowerCase().includes("retard");

            return (
              <li
                key={`${event.type}-${event.createdAt}-${index}`}
                className={
                  isCritical
                    ? "audit-trail__event audit-trail__event--critical"
                    : "audit-trail__event"
                }
              >
                <div className="audit-trail__event-time">{event.createdAt}</div>
                <div className="audit-trail__event-card">
                  {event.actorDisplayName ? (
                    <p className="audit-trail__event-actor">
                      <strong>{event.actorDisplayName}</strong>
                      {roleLabel ? ` — ${roleLabel}` : ""}
                    </p>
                  ) : null}
                  <p className="audit-trail__event-message">
                    {actionLabel ?? event.message}
                  </p>
                  {actionLabel && event.message !== actionLabel ? (
                    <p className="audit-trail__event-detail">{event.message}</p>
                  ) : null}
                  <p className="audit-trail__event-transition">
                    {getRequestStatusLabel(event.fromStatus)} →{" "}
                    {getRequestStatusLabel(event.toStatus)}
                    <span>
                      {event.fromStatus} → {event.toStatus}
                    </span>
                  </p>
                  <p className="audit-trail__event-type">{event.type}</p>
                </div>
              </li>
            );
          })}
        </ol>
      )}
    </section>
  );
}
