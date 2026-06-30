import type { DemoRequest } from "../../domain/requestStatus";
import "./WorkflowActionControl.css";

const WORKFLOW_ACTION_LABELS: Record<
  DemoRequest["status"],
  string | undefined
> = {
  "STAT-01": "Qualifier la demande",
  "STAT-02": "Planifier l'intervention",
  "STAT-03": "Marquer l'intervention réalisée",
  "STAT-04": "Clôturer avec compte rendu fictif",
  "STAT-06": undefined,
};

interface WorkflowActionControlProps {
  request: DemoRequest | undefined;
  onAction: () => void;
  lastActionMessage?: string;
}

export function WorkflowActionControl({
  request,
  onAction,
  lastActionMessage,
}: WorkflowActionControlProps) {
  const actionLabel = request ? WORKFLOW_ACTION_LABELS[request.status] : undefined;

  return (
    <section className="workflow-action-control">
      <header className="workflow-action-control__header">
        <h2>Workflow local contrôlé</h2>
        <p className="workflow-action-control__subtitle">
          Démonstration fictive uniquement
        </p>
        <p className="workflow-action-control__notice">
          Données fictives uniquement.
        </p>
      </header>

      {request ? (
        <p className="workflow-action-control__status">
          Statut courant : <strong>{request.status}</strong>
        </p>
      ) : null}

      {actionLabel ? (
        <button
          className="workflow-action-control__button"
          type="button"
          onClick={onAction}
        >
          {actionLabel}
        </button>
      ) : request?.status === "STAT-06" ? (
        <p className="workflow-action-control__closed" role="status">
          Demande clôturée fictivement.
        </p>
      ) : (
        <p className="workflow-action-control__missing">
          Aucune action workflow disponible.
        </p>
      )}

      {lastActionMessage ? (
        <p className="workflow-action-control__confirmation" role="status">
          {lastActionMessage}
        </p>
      ) : null}
    </section>
  );
}
