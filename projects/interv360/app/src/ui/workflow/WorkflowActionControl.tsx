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
  lastActionMessageKind?: "success" | "error";
  actorDisplayName?: string;
  actorRoleLabel?: string;
  isActionDisabled?: (action: DemoTransitionAction) => boolean;
}

const ROLE_BLOCKED_HINT =
  "Non disponible — votre rôle ne permet pas cette action.";

export function WorkflowActionControl({
  request,
  onAction,
  lastActionMessage,
  lastActionMessageKind = "success",
  actorDisplayName,
  actorRoleLabel,
  isActionDisabled = () => false,
}: WorkflowActionControlProps) {
  const availableActions = request
    ? getAvailableWorkflowActions(request.status)
    : [];
  const statusLabel = request
    ? getRequestStatusLabel(request.status)
    : undefined;

  return (
    <section className="workflow-action-control" aria-label="Actions workflow">
      <header className="workflow-action-control__header">
        <h2>Actions disponibles</h2>
        {actorRoleLabel ? (
          <p className="workflow-action-control__profile" role="status">
            Vous intervenez avec le profil :{" "}
            <strong>
              {actorRoleLabel}
              {actorDisplayName ? ` — ${actorDisplayName}` : ""}
            </strong>
          </p>
        ) : null}
        <p className="workflow-action-control__notice">
          Les actions proposées dépendent du statut courant et des permissions
          du profil actif.
        </p>
      </header>

      {request && statusLabel ? (
        <p className="workflow-action-control__status">
          Statut courant : <strong>{statusLabel}</strong>
          <span className="workflow-action-control__status-code">
            {request.status}
          </span>
        </p>
      ) : null}

      {availableActions.length > 0 ? (
        <div className="workflow-action-control__actions">
          {availableActions.map((action) => {
            const disabled = isActionDisabled(action);
            return (
              <div key={action} className="workflow-action-control__action-item">
                <button
                  className={
                    disabled
                      ? "workflow-action-control__button workflow-action-control__button--disabled"
                      : "workflow-action-control__button"
                  }
                  type="button"
                  disabled={disabled}
                  aria-describedby={
                    disabled ? `workflow-action-hint-${action}` : undefined
                  }
                  onClick={() => onAction(action)}
                >
                  {getWorkflowActionLabel(action)}
                </button>
                {disabled ? (
                  <p
                    id={`workflow-action-hint-${action}`}
                    className="workflow-action-control__action-hint"
                  >
                    {ROLE_BLOCKED_HINT}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      ) : request?.status === "STAT-06" ? (
        <p className="workflow-action-control__closed" role="status">
          Demande clôturée — aucune action supplémentaire.
        </p>
      ) : request?.status === "STAT-07" ? (
        <p className="workflow-action-control__closed" role="status">
          Demande annulée — aucune action supplémentaire.
        </p>
      ) : (
        <p className="workflow-action-control__missing" role="status">
          Aucune action n&apos;est disponible pour cette demande à ce stade.
        </p>
      )}

      {lastActionMessage ? (
        <p
          className={
            lastActionMessageKind === "error"
              ? "workflow-action-control__feedback workflow-action-control__feedback--error"
              : "workflow-action-control__feedback workflow-action-control__feedback--success"
          }
          role={lastActionMessageKind === "error" ? "alert" : "status"}
        >
          {lastActionMessage}
        </p>
      ) : null}
    </section>
  );
}
