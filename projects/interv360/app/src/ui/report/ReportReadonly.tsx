import { useMemo } from "react";
import type { DemoRequest } from "../../domain/requestStatus";
import { getRequestById } from "../../data/requestsRepository";
import "./ReportReadonly.css";

interface ReportReadonlyProps {
  request?: DemoRequest;
  requestId: string;
  dataVersion?: number;
}

export function ReportReadonly({
  request: requestProp,
  requestId,
  dataVersion = 0,
}: ReportReadonlyProps) {
  const request = useMemo(
    () => requestProp ?? getRequestById(requestId),
    [requestProp, requestId, dataVersion],
  );

  if (!request) {
    return (
      <section className="report-readonly">
        <p className="report-readonly__missing">
          Compte rendu fictif introuvable pour : {requestId}
        </p>
      </section>
    );
  }

  return (
    <section className="report-readonly">
      <header className="report-readonly__header">
        <h2>Compte rendu SAV</h2>
        <p className="report-readonly__subtitle">Vue readonly</p>
        <p className="report-readonly__notice">
          Données fictives uniquement.
        </p>
      </header>

      <dl className="report-readonly__fields">
        <div className="report-readonly__field">
          <dt>Demande</dt>
          <dd>{request.id}</dd>
        </div>
        <div className="report-readonly__field">
          <dt>Statut courant</dt>
          <dd>{request.status}</dd>
        </div>
        {request.reportSummaryLabel ? (
          <div className="report-readonly__field report-readonly__field--wide">
            <dt>Résumé</dt>
            <dd>{request.reportSummaryLabel}</dd>
          </div>
        ) : null}
        {request.reportResultLabel ? (
          <div className="report-readonly__field report-readonly__field--wide">
            <dt>Résultat</dt>
            <dd>{request.reportResultLabel}</dd>
          </div>
        ) : null}
      </dl>

      {request.reportChecklist?.length ? (
        <div className="report-readonly__checklist">
          <h3>Checklist fictive</h3>
          <ul>
            {request.reportChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {request.reportReadonlyNotes ? (
        <div className="report-readonly__notes">
          <h3>Notes readonly</h3>
          <p>{request.reportReadonlyNotes}</p>
        </div>
      ) : null}
    </section>
  );
}
