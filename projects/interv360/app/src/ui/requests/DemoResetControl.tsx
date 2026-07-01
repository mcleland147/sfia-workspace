import "./DemoResetControl.css";

interface DemoResetControlProps {
  onReset: () => void;
  lastResetLabel?: string;
  isResetDisabled?: boolean;
  lastActionMessage?: string;
}

export function DemoResetControl({
  onReset,
  lastResetLabel,
  isResetDisabled = false,
  lastActionMessage,
}: DemoResetControlProps) {
  return (
    <section className="demo-reset-control">
      <p className="demo-reset-control__notice">
        Seules les données fictives de démonstration seront réinitialisées.
      </p>
      <button
        className={
          isResetDisabled
            ? "demo-reset-control__button demo-reset-control__button--disabled"
            : "demo-reset-control__button"
        }
        type="button"
        aria-disabled={isResetDisabled}
        onClick={onReset}
      >
        Réinitialiser la démo
      </button>
      {isResetDisabled ? (
        <p className="demo-reset-control__role-blocked" role="status">
          Action non autorisée pour le rôle actuel
        </p>
      ) : null}
      {lastResetLabel ? (
        <p className="demo-reset-control__confirmation" role="status">
          Démo réinitialisée à {lastResetLabel}.
        </p>
      ) : null}
      {lastActionMessage ? (
        <p className="demo-reset-control__feedback" role="status">
          {lastActionMessage}
        </p>
      ) : null}
    </section>
  );
}
