import { useMemo } from "react";
import { getDemoWorkflowEvents } from "../../data/requestsRepository";
import "./WorkflowJournalReadonly.css";

interface WorkflowJournalReadonlyProps {
  requestId: string;
  dataVersion?: number;
}

export function WorkflowJournalReadonly({
  requestId,
  dataVersion = 0,
}: WorkflowJournalReadonlyProps) {
  const events = useMemo(
    () => getDemoWorkflowEvents(requestId),
    [requestId, dataVersion],
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
              <p className="workflow-journal-readonly__type">{event.type}</p>
              <p>
                {event.fromStatus} → {event.toStatus}
              </p>
              <p>{event.message}</p>
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
