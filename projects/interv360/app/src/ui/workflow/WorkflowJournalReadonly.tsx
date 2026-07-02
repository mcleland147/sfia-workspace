import { useMemo } from "react";
import type { DemoWorkflowEvent } from "../../domain/requestStatus";
import { getDemoWorkflowEvents } from "../../data/requestsRepository";
import "./WorkflowJournalReadonly.css";

interface WorkflowJournalReadonlyProps {
  events?: DemoWorkflowEvent[];
  requestId: string;
  dataVersion?: number;
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
    <section className="workflow-journal-readonly">
      <header className="workflow-journal-readonly__header">
        <h2>Journal local fictif</h2>
        <p className="workflow-journal-readonly__subtitle">Vue readonly</p>
        <p className="workflow-journal-readonly__notice">
          Données fictives uniquement.
        </p>
      </header>

      {events.length === 0 ? (
        <p className="workflow-journal-readonly__empty">
          Aucun événement fictif enregistré pour {requestId}.
        </p>
      ) : (
        <ol className="workflow-journal-readonly__list">
          {events.map((event, index) => (
            <li
              key={`${event.type}-${event.createdAt}-${index}`}
              className="workflow-journal-readonly__item"
            >
              <p className="workflow-journal-readonly__message">{event.message}</p>
              {event.actorDisplayName ? (
                <p className="workflow-journal-readonly__actor">
                  Par {event.actorDisplayName}
                  {event.actorRole ? ` — ${event.actorRole}` : ""}
                </p>
              ) : null}
              {event.action ? (
                <p className="workflow-journal-readonly__action">
                  Action : {event.action}
                </p>
              ) : null}
              <p className="workflow-journal-readonly__type">{event.type}</p>
              <p>
                {event.fromStatus} → {event.toStatus}
              </p>
              <p className="workflow-journal-readonly__timestamp">
                {event.createdAt}
              </p>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}
