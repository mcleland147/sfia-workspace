import { useMemo } from "react";
import { getRequestById } from "../../data/requestsRepository";
import "./InterventionReadonly.css";

interface InterventionReadonlyProps {
  requestId: string;
  dataVersion?: number;
}

export function InterventionReadonly({
  requestId,
  dataVersion = 0,
}: InterventionReadonlyProps) {
  const request = useMemo(
    () => getRequestById(requestId),
    [requestId, dataVersion],
  );

  if (!request) {
    return (
      <section className="intervention-readonly">
        <p className="intervention-readonly__missing">
          Intervention fictive introuvable pour : {requestId}
        </p>
      </section>
    );
  }

  const technicianLabel =
    request.planningTechnicianLabel ?? request.assignedTechnicianLabel;

  return (
    <section className="intervention-readonly">
      <header className="intervention-readonly__header">
        <h2>Intervention terrain</h2>
        <p className="intervention-readonly__subtitle">Vue readonly</p>
        <p className="intervention-readonly__notice">
          Données fictives uniquement.
        </p>
      </header>

      <dl className="intervention-readonly__fields">
        <div className="intervention-readonly__field">
          <dt>Demande</dt>
          <dd>{request.id}</dd>
        </div>
        <div className="intervention-readonly__field">
          <dt>Statut courant</dt>
          <dd>{request.status}</dd>
        </div>
        {request.interventionLocationLabel ? (
          <div className="intervention-readonly__field">
            <dt>Lieu</dt>
            <dd>{request.interventionLocationLabel}</dd>
          </div>
        ) : null}
        {request.interventionWindowLabel ? (
          <div className="intervention-readonly__field">
            <dt>Créneau</dt>
            <dd>{request.interventionWindowLabel}</dd>
          </div>
        ) : null}
        {technicianLabel ? (
          <div className="intervention-readonly__field">
            <dt>Technicien</dt>
            <dd>{technicianLabel}</dd>
          </div>
        ) : null}
      </dl>

      {request.interventionSafetyChecklist?.length ? (
        <div className="intervention-readonly__checklist">
          <h3>Checklist fictive</h3>
          <ul>
            {request.interventionSafetyChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {request.interventionReadonlyNotes ? (
        <div className="intervention-readonly__notes">
          <h3>Notes readonly</h3>
          <p>{request.interventionReadonlyNotes}</p>
        </div>
      ) : null}
    </section>
  );
}
