import {
  DEMO_ASSUMED_LIMITATIONS,
  DEMO_DELIVERED_CAPABILITIES,
  DEMO_PRESENTATION_CHECKLIST,
  DEMO_READINESS_CRITERIA,
  DEMO_SCOPE_LABELS,
} from "./demoReadinessContent";
import "./DemoReadinessPanel.css";

export function DemoReadinessPanel() {
  const capabilitiesByCategory = {
    demonstrated: DEMO_DELIVERED_CAPABILITIES.filter(
      (item) => item.category === "demonstrated",
    ),
    fictitious: DEMO_DELIVERED_CAPABILITIES.filter(
      (item) => item.category === "fictitious",
    ),
    "out-of-scope": DEMO_DELIVERED_CAPABILITIES.filter(
      (item) => item.category === "out-of-scope",
    ),
  };

  return (
    <section
      className="demo-readiness-panel"
      aria-label="Préparation et présentation de la démo"
    >
      <header className="demo-readiness-panel__header">
        <p className="demo-readiness-panel__eyebrow">Batch 03 — Demo readiness</p>
        <h2 className="demo-readiness-panel__title">Package de présentation</h2>
        <p className="demo-readiness-panel__status" role="status">
          <span className="demo-readiness-panel__status-badge">Démo prête</span>
          Tous les prérequis locaux sont disponibles pour une présentation
          guidée.
        </p>
      </header>

      <div className="demo-readiness-panel__grid">
        <div className="demo-readiness-panel__card">
          <h3 className="demo-readiness-panel__card-title">Critères de readiness</h3>
          <ul className="demo-readiness-panel__criteria">
            {DEMO_READINESS_CRITERIA.map((criterion) => (
              <li key={criterion.id}>
                <span className="demo-readiness-panel__check" aria-hidden="true">
                  ✓
                </span>
                {criterion.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="demo-readiness-panel__card">
          <h3 className="demo-readiness-panel__card-title">
            Checklist de présentation
          </h3>
          <ol className="demo-readiness-panel__checklist">
            {DEMO_PRESENTATION_CHECKLIST.map((item, index) => (
              <li key={item.id}>
                <span className="demo-readiness-panel__step">{index + 1}</span>
                {item.label}
              </li>
            ))}
          </ol>
        </div>

        <div className="demo-readiness-panel__card demo-readiness-panel__card--wide">
          <h3 className="demo-readiness-panel__card-title">Capacités livrées</h3>
          <div className="demo-readiness-panel__capabilities">
            {(
              Object.keys(capabilitiesByCategory) as Array<
                keyof typeof capabilitiesByCategory
              >
            ).map((category) => (
              <div key={category} className="demo-readiness-panel__capability-group">
                <p
                  className={`demo-readiness-panel__capability-label demo-readiness-panel__capability-label--${category}`}
                >
                  {DEMO_SCOPE_LABELS[category]}
                </p>
                <ul>
                  {capabilitiesByCategory[category].map((item) => (
                    <li key={item.id}>{item.label}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="demo-readiness-panel__card">
          <h3 className="demo-readiness-panel__card-title">Limites assumées</h3>
          <ul className="demo-readiness-panel__limitations">
            {DEMO_ASSUMED_LIMITATIONS.map((limitation) => (
              <li key={limitation}>{limitation}</li>
            ))}
          </ul>
          <p className="demo-readiness-panel__notice">
            Le démonstrateur illustre un flux SAV local. Il ne remplace ni un
            SI, ni un CRM, ni un environnement de production.
          </p>
        </div>
      </div>
    </section>
  );
}
