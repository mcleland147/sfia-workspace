import { useMemo } from "react";
import { getRequests } from "../../data/requestsRepository";
import "./RequestsList.css";

interface RequestsListProps {
  dataVersion?: number;
}

export function RequestsList({ dataVersion = 0 }: RequestsListProps) {
  const requests = useMemo(() => getRequests(), [dataVersion]);

  return (
    <section className="requests-list">
      <header className="requests-list__header">
        <h1>Demandes SAV</h1>
        <p className="requests-list__subtitle">INC-01 — liste squelette</p>
        <p className="requests-list__notice">
          Démonstration fictive uniquement. Aucune donnée réelle.
        </p>
      </header>

      <ul className="requests-list__items">
        {requests.map((request) => (
          <li key={request.id} className="requests-list__card">
            <div className="requests-list__card-row">
              <span className="requests-list__label">Identifiant</span>
              <span>{request.id}</span>
            </div>
            <div className="requests-list__card-row">
              <span className="requests-list__label">Titre</span>
              <span>{request.title}</span>
            </div>
            <div className="requests-list__card-row">
              <span className="requests-list__label">Client</span>
              <span>{request.customerLabel}</span>
            </div>
            <div className="requests-list__card-row">
              <span className="requests-list__label">Site</span>
              <span>{request.siteLabel}</span>
            </div>
            <div className="requests-list__card-row">
              <span className="requests-list__label">Statut</span>
              <span>{request.status}</span>
            </div>
            {request.assignedTechnicianLabel ? (
              <div className="requests-list__card-row">
                <span className="requests-list__label">Technicien</span>
                <span>{request.assignedTechnicianLabel}</span>
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
