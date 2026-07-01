import type { RequestStatus } from "../../domain/requestStatus";
import "./DemoOverview.css";

const NOMINAL_PATH: RequestStatus[] = [
  "STAT-01",
  "STAT-02",
  "STAT-03",
  "STAT-04",
  "STAT-06",
];

interface DemoOverviewProps {
  requestId: string;
  currentStatus?: RequestStatus;
  scenarioStepTitle?: string;
  scenarioProgressLabel?: string;
}

export function DemoOverview({
  requestId,
  currentStatus,
  scenarioStepTitle,
  scenarioProgressLabel,
}: DemoOverviewProps) {
  return (
    <header className="demo-overview">
      <div className="demo-overview__intro">
        <p className="demo-overview__eyebrow">Batch 03 — Présentation démo</p>
        <h1 className="demo-overview__title">Interv360 — flux SAV minimal</h1>
        <p className="demo-overview__lead">
          Démonstrateur local et fictif prêt à présenter. Demande sélectionnée :{" "}
          <strong>{requestId}</strong>. Consultez le package readiness pour le
          fil conducteur, les capacités et les limites.
        </p>
      </div>

      <div className="demo-overview__panels">
        <div className="demo-overview__panel">
          <h2 className="demo-overview__panel-title">Parcours nominal</h2>
          <ol className="demo-overview__path" aria-label="Parcours nominal INC-01">
            {NOMINAL_PATH.map((status) => (
              <li
                key={status}
                className={
                  status === currentStatus
                    ? "demo-overview__path-step demo-overview__path-step--current"
                    : "demo-overview__path-step"
                }
              >
                <span className="demo-overview__path-badge">{status}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="demo-overview__panel">
          <h2 className="demo-overview__panel-title">Statut courant</h2>
          {currentStatus ? (
            <p className="demo-overview__status" role="status">
              <span className="demo-overview__status-badge">{currentStatus}</span>
            </p>
          ) : (
            <p className="demo-overview__status demo-overview__status--missing">
              Statut indisponible
            </p>
          )}
        </div>

        <div className="demo-overview__panel">
          <h2 className="demo-overview__panel-title">Scénario courant</h2>
          {scenarioStepTitle && scenarioProgressLabel ? (
            <p className="demo-overview__scenario" role="status">
              <span className="demo-overview__scenario-progress">
                {scenarioProgressLabel}
              </span>
              <span className="demo-overview__scenario-title">
                {scenarioStepTitle}
              </span>
            </p>
          ) : (
            <p className="demo-overview__scenario demo-overview__scenario--missing">
              Scénario indisponible
            </p>
          )}
        </div>

        <div className="demo-overview__panel">
          <h2 className="demo-overview__panel-title">Limites de la démo</h2>
          <ul className="demo-overview__limits">
            <li>Pas de backend</li>
            <li>Pas d&apos;API</li>
            <li>Données fictives locales uniquement</li>
          </ul>
        </div>
      </div>
    </header>
  );
}
