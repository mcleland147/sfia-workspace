import type { DemoWorkflowEvent } from "../../domain/requestStatus";
import { getRequestStatusLabel } from "../../domain/requestStatus";
import type { DemoRequest } from "../../domain/requestStatus";
import {
  getAssigneeInitials,
  getOperationalMetrics,
} from "./requestOperationalMetrics";
import "./RequestOperationalPanel.css";

interface RequestOperationalPanelProps {
  request: DemoRequest;
  events?: DemoWorkflowEvent[];
  onViewFullHistory?: () => void;
}

export function RequestOperationalPanel({
  request,
  events = [],
  onViewFullHistory,
}: RequestOperationalPanelProps) {
  const metrics = getOperationalMetrics(request);
  const initials = getAssigneeInitials(metrics.assignee);
  const recentEvents = events.slice(-3).reverse();

  return (
    <aside
      className="request-operational-panel"
      aria-label="Panneau opérationnel"
    >
      <section className="request-operational-panel__card request-operational-panel__card--dark">
        <header className="request-operational-panel__card-header">
          <h3>Score d&apos;urgence</h3>
          <span className="request-operational-panel__pill request-operational-panel__pill--danger">
            {metrics.urgencyLevel}
          </span>
        </header>
        <p className="request-operational-panel__score">
          <strong>{metrics.urgencyScore.toFixed(1)}</strong>
          <span>/ 10</span>
        </p>
        <p className="request-operational-panel__hint">
          Score calculé selon SLA, priorité, retard et anomalie d&apos;intégration.
        </p>

        <div
          className={
            metrics.slaOverdue
              ? "request-operational-panel__sla request-operational-panel__sla--overdue"
              : "request-operational-panel__sla"
          }
        >
          <div className="request-operational-panel__sla-head">
            <span>SLA</span>
            <strong>{metrics.slaLabel}</strong>
          </div>
          {metrics.slaDelay ? (
            <p className="request-operational-panel__sla-delay">{metrics.slaDelay}</p>
          ) : null}
          <p className="request-operational-panel__sla-copy">
            {metrics.slaOverdue
              ? "Délai de qualification dépassé."
              : "Délai de traitement dans les seuils de démonstration."}
          </p>
        </div>

        <div className="request-operational-panel__next">
          <p className="request-operational-panel__next-title">
            Prochaine action
          </p>
          <strong>{metrics.nextActionTitle}</strong>
          <ul>
            {metrics.nextActionTasks.map((task) => (
              <li key={task}>{task}</li>
            ))}
          </ul>
          <p className="request-operational-panel__next-meta">
            {metrics.assignee} · Immédiat
          </p>
        </div>
      </section>

      <section className="request-operational-panel__card">
        <h3>Technicien affecté</h3>
        <div className="request-operational-panel__tech">
          <span className="request-operational-panel__avatar">{initials}</span>
          <div>
            <strong>{metrics.assignee}</strong>
            <span>{metrics.assigneeRole}</span>
          </div>
        </div>
        <div className="request-operational-panel__tech-actions">
          <span className="request-operational-panel__ghost-action">Appeler</span>
          <span className="request-operational-panel__ghost-action">Écrire</span>
        </div>
      </section>

      <section className="request-operational-panel__card">
        <header className="request-operational-panel__history-head">
          <h3>Historique</h3>
          {onViewFullHistory ? (
            <span
              className="request-operational-panel__history-link"
              role="link"
              tabIndex={0}
              onClick={onViewFullHistory}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  onViewFullHistory();
                }
              }}
            >
              Tout voir
            </span>
          ) : null}
        </header>
        {recentEvents.length === 0 ? (
          <p className="request-operational-panel__empty">
            Aucun événement enregistré pour cette demande.
          </p>
        ) : (
          <ul className="request-operational-panel__history-list">
            {recentEvents.map((event, index) => (
              <li key={`${event.type}-${event.createdAt}-${index}`}>
                <strong>{event.actorDisplayName ?? "Système"}</strong>
                <span>{event.message}</span>
                <span className="request-operational-panel__history-meta">
                  {getRequestStatusLabel(event.fromStatus)} →{" "}
                  {getRequestStatusLabel(event.toStatus)}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </aside>
  );
}
