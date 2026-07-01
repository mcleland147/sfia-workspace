import { useMemo } from "react";
import type { DemoRequest } from "../../domain/requestStatus";
import { getRequestById } from "../../data/requestsRepository";
import "./QualificationReadonly.css";

interface QualificationReadonlyProps {
  request?: DemoRequest;
  requestId: string;
  dataVersion?: number;
}

export function QualificationReadonly({
  request: requestProp,
  requestId,
  dataVersion = 0,
}: QualificationReadonlyProps) {
  const request = useMemo(
    () => requestProp ?? getRequestById(requestId),
    [requestProp, requestId, dataVersion],
  );

  if (!request) {
    return (
      <section className="qualification-readonly">
        <p className="qualification-readonly__missing">
          Qualification fictive introuvable pour : {requestId}
        </p>
      </section>
    );
  }

  return (
    <section className="qualification-readonly">
      <header className="qualification-readonly__header">
        <h2>Qualification SAV</h2>
        <p className="qualification-readonly__subtitle">Vue readonly</p>
        <p className="qualification-readonly__notice">
          Données fictives uniquement.
        </p>
      </header>

      <dl className="qualification-readonly__fields">
        <div className="qualification-readonly__field">
          <dt>Demande</dt>
          <dd>{request.id}</dd>
        </div>
        <div className="qualification-readonly__field">
          <dt>Statut courant</dt>
          <dd>{request.status}</dd>
        </div>
      </dl>

      {request.qualificationChecklist?.length ? (
        <div className="qualification-readonly__checklist">
          <h3>Checklist fictive</h3>
          <ul>
            {request.qualificationChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {request.qualificationSummary ? (
        <div className="qualification-readonly__summary">
          <h3>Synthèse fictive</h3>
          <p>{request.qualificationSummary}</p>
        </div>
      ) : null}

      {request.qualificationReadonlyNotes ? (
        <div className="qualification-readonly__notes">
          <h3>Notes readonly</h3>
          <p>{request.qualificationReadonlyNotes}</p>
        </div>
      ) : null}
    </section>
  );
}
