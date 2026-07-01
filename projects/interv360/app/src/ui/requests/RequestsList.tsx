import { useMemo } from "react";
import { getRequests } from "../../data/requestsRepository";
import "./RequestsList.css";

interface RequestsListProps {
  dataVersion?: number;
  selectedRequestId: string;
  onSelectRequest: (requestId: string) => void;
}

export function RequestsList({
  dataVersion = 0,
  selectedRequestId,
  onSelectRequest,
}: RequestsListProps) {
  const requests = useMemo(() => getRequests(), [dataVersion]);

  return (
    <section className="requests-list">
      <header className="requests-list__header">
        <h2>Demandes SAV</h2>
        <p className="requests-list__subtitle">
          INC-03 — {requests.length} demandes fictives locales
        </p>
        <p className="requests-list__notice">
          Démonstration fictive uniquement. Sélectionnez une demande pour
          consulter le détail et le workflow associé.
        </p>
      </header>

      <ul className="requests-list__items">
        {requests.map((request) => {
          const isSelected = request.id === selectedRequestId;

          return (
            <li key={request.id}>
              <button
                type="button"
                className={
                  isSelected
                    ? "requests-list__card requests-list__card--selected"
                    : "requests-list__card"
                }
                aria-pressed={isSelected}
                onClick={() => onSelectRequest(request.id)}
              >
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
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
