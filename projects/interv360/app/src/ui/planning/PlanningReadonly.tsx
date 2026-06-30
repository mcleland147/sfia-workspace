import { useMemo } from "react";
import { getRequestById } from "../../data/requestsRepository";
import "./PlanningReadonly.css";

interface PlanningReadonlyProps {
  requestId: string;
  dataVersion?: number;
}

export function PlanningReadonly({
  requestId,
  dataVersion = 0,
}: PlanningReadonlyProps) {
  const request = useMemo(
    () => getRequestById(requestId),
    [requestId, dataVersion],
  );

  if (!request) {
    return (
      <section className="planning-readonly">
        <p className="planning-readonly__missing">
          Planification fictive introuvable pour : {requestId}
        </p>
      </section>
    );
  }

  return (
    <section className="planning-readonly">
      <header className="planning-readonly__header">
        <h2>Planification SAV</h2>
        <p className="planning-readonly__subtitle">Vue readonly</p>
        <p className="planning-readonly__notice">
          Données fictives uniquement.
        </p>
      </header>

      <dl className="planning-readonly__fields">
        <div className="planning-readonly__field">
          <dt>Demande</dt>
          <dd>{request.id}</dd>
        </div>
        <div className="planning-readonly__field">
          <dt>Statut courant</dt>
          <dd>{request.status}</dd>
        </div>
        {request.planningSlotLabel ? (
          <div className="planning-readonly__field">
            <dt>Créneau</dt>
            <dd>{request.planningSlotLabel}</dd>
          </div>
        ) : null}
        {request.planningTechnicianLabel ? (
          <div className="planning-readonly__field">
            <dt>Technicien</dt>
            <dd>{request.planningTechnicianLabel}</dd>
          </div>
        ) : null}
      </dl>

      {request.planningReadonlyNotes ? (
        <div className="planning-readonly__notes">
          <h3>Notes readonly</h3>
          <p>{request.planningReadonlyNotes}</p>
        </div>
      ) : null}
    </section>
  );
}
