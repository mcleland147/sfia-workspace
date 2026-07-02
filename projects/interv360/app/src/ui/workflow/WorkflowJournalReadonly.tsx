import { useMemo } from "react";
import type { DemoWorkflowEvent } from "../../domain/requestStatus";
import { getRequestStatusLabel } from "../../domain/requestStatus";
import { getDemoWorkflowEvents } from "../../data/requestsRepository";
import {
  type DemoTransitionAction,
  workflowActionLabels,
} from "../../data/requestsRepository.types";
import {
  isSimulatedRole,
  simulatedRoleLabels,
} from "../../domain/simulatedRoles";
import "./WorkflowJournalReadonly.css";

interface WorkflowJournalReadonlyProps {
  events?: DemoWorkflowEvent[];
  requestId: string;
  dataVersion?: number;
}

function formatActorRoleLabel(actorRole?: string): string | undefined {
  if (!actorRole) {
    return undefined;
  }

  return isSimulatedRole(actorRole)
    ? simulatedRoleLabels[actorRole]
    : actorRole;
}

function formatEventActionLabel(action?: string): string | undefined {
  if (!action) {
    return undefined;
  }

  const label = workflowActionLabels[action as DemoTransitionAction];
  return label ?? action;
}

export function WorkflowJournalReadonly({
  events: eventsProp,
  requestId,
  dataVersion = 0,
}: WorkflowJournalReadonlyProps) {
  const events = useMemo(
    () => eventsProp ?? getDemoWorkflowEvents(requestId),
    [eventsProp, requestId, dataVersion],
  );

  return (
    <section
      className="workflow-journal-readonly"
      aria-label="Historique de la demande"
    >
      <header className="workflow-journal-readonly__header">
        <h2>Historique de la demande</h2>
        <p className="workflow-journal-readonly__subtitle">
          Suivi des transitions et interventions enregistrées
        </p>
      </header>

      {events.length === 0 ? (
        <p className="workflow-journal-readonly__empty" role="status">
          Aucun événement enregistré pour cette demande.
        </p>
      ) : (
        <ol className="workflow-journal-readonly__list">
          {events.map((event, index) => {
            const roleLabel = formatActorRoleLabel(event.actorRole);
            const actionLabel = formatEventActionLabel(event.action);

            return (
              <li
                key={`${event.type}-${event.createdAt}-${index}`}
                className="workflow-journal-readonly__item"
              >
                {event.actorDisplayName ? (
                  <p className="workflow-journal-readonly__actor">
                    <strong>{event.actorDisplayName}</strong>
                    {roleLabel ? ` — ${roleLabel}` : ""}
                  </p>
                ) : null}
                <p className="workflow-journal-readonly__message">
                  {actionLabel ?? event.message}
                </p>
                {actionLabel && event.message !== actionLabel ? (
                  <p className="workflow-journal-readonly__detail">
                    {event.message}
                  </p>
                ) : null}
                <p className="workflow-journal-readonly__timestamp">
                  {event.createdAt}
                </p>
                <p className="workflow-journal-readonly__transition">
                  {getRequestStatusLabel(event.fromStatus)} →{" "}
                  {getRequestStatusLabel(event.toStatus)}
                  <span className="workflow-journal-readonly__transition-code">
                    {event.fromStatus} → {event.toStatus}
                  </span>
                </p>
                <p className="workflow-journal-readonly__type">{event.type}</p>
              </li>
            );
          })}
        </ol>
      )}
    </section>
  );
}
