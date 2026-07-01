import { useMemo } from "react";
import { getRequestById } from "../../data/requestsRepository";
import { RequestBadges } from "./RequestBadges";
import {
  getCriticalityLabel,
  getPriorityLabel,
} from "./requestIndicators";
import "./RequestDetail.css";

interface RequestDetailProps {
  requestId: string;
  dataVersion?: number;
}

export function RequestDetail({
  requestId,
  dataVersion = 0,
}: RequestDetailProps) {
  const request = useMemo(
    () => getRequestById(requestId),
    [requestId, dataVersion],
  );

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
        <p className="request-detail__subtitle">Batch 01 — fiche enrichie</p>
        <p className="request-detail__notice">Données fictives uniquement.</p>
        <RequestBadges request={request} />
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
        {request.siteDetailLabel ? (
          <div className="request-detail__field">
            <dt>Centre démo</dt>
            <dd>{request.siteDetailLabel}</dd>
          </div>
        ) : null}
        <div className="request-detail__field">
          <dt>Statut</dt>
          <dd>{request.status}</dd>
        </div>
        <div className="request-detail__field">
          <dt>Priorité</dt>
          <dd>{getPriorityLabel(request.priority)}</dd>
        </div>
        <div className="request-detail__field">
          <dt>Criticité</dt>
          <dd>{getCriticalityLabel(request.criticality)}</dd>
        </div>
        {request.categoryLabel ? (
          <div className="request-detail__field">
            <dt>Catégorie</dt>
            <dd>{request.categoryLabel}</dd>
          </div>
        ) : null}
        {request.channelLabel ? (
          <div className="request-detail__field">
            <dt>Canal</dt>
            <dd>{request.channelLabel}</dd>
          </div>
        ) : null}
        {request.impactLabel ? (
          <div className="request-detail__field">
            <dt>Impact</dt>
            <dd>{request.impactLabel}</dd>
          </div>
        ) : null}
        {request.assignedTechnicianLabel ? (
          <div className="request-detail__field">
            <dt>Technicien</dt>
            <dd>{request.assignedTechnicianLabel}</dd>
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
