import type { DemoRequest } from "../../domain/requestStatus";
import { getRequestStatusLabel } from "../../domain/requestStatus";
import type { DemoTransitionAction } from "../../data/requestsRepository.types";
import {
  getAvailableWorkflowActions,
  getWorkflowActionLabel,
} from "../../data/requestsRepository.types";
import "./WorkflowActionControl.css";

interface WorkflowActionControlProps {
  request: DemoRequest | undefined;
  onAction: (action: DemoTransitionAction) => void;
  lastActionMessage?: string;
  isActionDisabled?: (action: DemoTransitionAction) => boolean;
}

export function WorkflowActionControl({
  request,
  onAction,
  lastActionMessage,
  isActionDisabled = () => false,
}: WorkflowActionControlProps) {
  const availableActions = request
    ? getAvailableWorkflowActions(request.status)
    : [];
  const hasBlockedAction = availableActions.some((action) =>
    isActionDisabled(action),
  );

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
          Statut courant :{" "}
          <strong>
            {getRequestStatusLabel(request.status)} ({request.status})
          </strong>
        </p>
      ) : null}

      {availableActions.length > 0 ? (
        <>
          <div className="workflow-action-control__actions">
            {availableActions.map((action) => {
              const disabled = isActionDisabled(action);
              return (
                <button
                  key={action}
                  className={
                    disabled
                      ? "workflow-action-control__button workflow-action-control__button--disabled"
                      : "workflow-action-control__button"
                  }
                  type="button"
                  aria-disabled={disabled}
                  onClick={() => onAction(action)}
                >
                  {getWorkflowActionLabel(action)}
                </button>
              );
            })}
          </div>
          {hasBlockedAction ? (
            <p className="workflow-action-control__role-blocked" role="status">
              Action non autorisée pour le rôle actuel
            </p>
          ) : null}
        </>
      ) : request?.status === "STAT-06" ? (
        <p className="workflow-action-control__closed" role="status">
          Demande clôturée fictivement.
        </p>
      ) : request?.status === "STAT-07" ? (
        <p className="workflow-action-control__closed" role="status">
          Demande annulée fictivement.
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
