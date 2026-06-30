import { useMemo } from "react";
import { getRequestById } from "../../data/requestsRepository";
import "./RequestDetail.css";

interface RequestDetailProps {
  requestId: string;
}

export function RequestDetail({ requestId }: RequestDetailProps) {
  const request = useMemo(() => getRequestById(requestId), [requestId]);

  if (!request) {
    return (
      <section className="request-detail">
        <p className="request-detail__missing">
          Demande fictive introuvable : {requestId}
        </p>
      </section>
    );
  }

  return (
    <section className="request-detail">
      <header className="request-detail__header">
        <h2>Fiche demande SAV</h2>
        <p className="request-detail__subtitle">INC-01 — fiche squelette</p>
        <p className="request-detail__notice">Données fictives uniquement.</p>
      </header>

      <dl className="request-detail__fields">
        <div className="request-detail__field">
          <dt>Identifiant</dt>
          <dd>{request.id}</dd>
        </div>
        <div className="request-detail__field">
          <dt>Titre</dt>
          <dd>{request.title}</dd>
        </div>
        <div className="request-detail__field">
          <dt>Client</dt>
          <dd>{request.customerLabel}</dd>
        </div>
        <div className="request-detail__field">
          <dt>Site</dt>
          <dd>{request.siteLabel}</dd>
        </div>
        <div className="request-detail__field">
          <dt>Statut</dt>
          <dd>{request.status}</dd>
        </div>
        {request.assignedTechnicianLabel ? (
          <div className="request-detail__field">
            <dt>Technicien</dt>
            <dd>{request.assignedTechnicianLabel}</dd>
          </div>
        ) : null}
        {request.priorityLabel ? (
          <div className="request-detail__field">
            <dt>Priorité</dt>
            <dd>{request.priorityLabel}</dd>
          </div>
        ) : null}
        {request.createdAtLabel ? (
          <div className="request-detail__field">
            <dt>Créée</dt>
            <dd>{request.createdAtLabel}</dd>
          </div>
        ) : null}
        {request.description ? (
          <div className="request-detail__field request-detail__field--wide">
            <dt>Description</dt>
            <dd>{request.description}</dd>
          </div>
        ) : null}
        {request.qualificationSummary ? (
          <div className="request-detail__field request-detail__field--wide">
            <dt>Qualification</dt>
            <dd>{request.qualificationSummary}</dd>
          </div>
        ) : null}
      </dl>
    </section>
  );
}
