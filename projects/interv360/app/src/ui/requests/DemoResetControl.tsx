import "./DemoResetControl.css";

interface DemoResetControlProps {
  onReset: () => void;
  lastResetLabel?: string;
}

export function DemoResetControl({
  onReset,
  lastResetLabel,
}: DemoResetControlProps) {
  return (
    <section className="demo-reset-control">
      <p className="demo-reset-control__notice">
        Seules les données fictives de démonstration seront réinitialisées.
      </p>
      <button
        className="demo-reset-control__button"
        type="button"
        onClick={onReset}
      >
        Réinitialiser la démo
      </button>
      {lastResetLabel ? (
        <p className="demo-reset-control__confirmation" role="status">
          Démo réinitialisée à {lastResetLabel}.
        </p>
      ) : null}
    </section>
  );
}
