import type { DemoRequest } from "../../domain/requestStatus";
import {
  COMMAND_CENTER_ACTIVITY,
  COMMAND_CENTER_CHANNEL_DIST,
  COMMAND_CENTER_INTERVENTIONS,
  COMMAND_CENTER_STATUS_DIST,
  COMMAND_CENTER_TEAM,
  getCommandCenterKpis,
  getFocusPresentationItems,
} from "./commandCenterPresentation";

interface DashboardCommandCenterProps {
  requests: DemoRequest[];
  onNavigateToRequests?: () => void;
  onOpenRequest?: (requestId: string) => void;
}

function trendClass(trendGood: boolean | null): string {
  if (trendGood === true) {
    return "command-center__kpi-trend--good";
  }
  if (trendGood === false) {
    return "command-center__kpi-trend--bad";
  }
  return "command-center__kpi-trend--neutral";
}

export function DashboardCommandCenter({
  requests,
  onNavigateToRequests,
  onOpenRequest,
}: DashboardCommandCenterProps) {
  const kpis = getCommandCenterKpis(requests);
  const focusItems = getFocusPresentationItems(requests);
  const statusMax = Math.max(
    ...COMMAND_CENTER_STATUS_DIST.map((entry) => entry.count),
    1,
  );
  const channelMax = Math.max(
    ...COMMAND_CENTER_CHANNEL_DIST.map((entry) => entry.count),
    1,
  );
  const teamAvailable = COMMAND_CENTER_TEAM.filter((member) => member.available).length;
  const teamSaturated = COMMAND_CENTER_TEAM.length - teamAvailable;

  return (
    <section
      className="command-center command-center--premium"
      aria-label="Centre de commande SAV"
    >
      <div className="command-center__hero-zone">
        <div className="command-center__hero-head">
          <div className="command-center__hero-copy">
            <div className="command-center__hero-kicker-row">
              <p className="command-center__eyebrow">Tableau de bord · SAV</p>
              <span className="command-center__live-pill">
                <span className="command-center__live-dot" aria-hidden="true" />
                Live
              </span>
            </div>
            <h1 className="command-center__title">Centre de commande SAV</h1>
            <p className="command-center__subtitle">
              Pilotez l&apos;activité, les urgences et les interventions terrain en
              temps réel.
            </p>
          </div>
          <div className="command-center__hero-actions">
            <span className="command-center__sync-pill">Sync il y a 2 min</span>
            <span className="command-center__space-pill">Espace Responsable SAV</span>
            <button
              type="button"
              className="command-center__cta"
              disabled
              title="Présentation UI — non fonctionnel"
            >
              + Nouvelle demande
            </button>
          </div>
        </div>

        <div className="command-center__kpi-grid" aria-label="Indicateurs clés">
          {kpis.map((kpi) => (
            <article
              key={kpi.label}
              className={`command-center__kpi command-center__kpi--${kpi.tone}`}
            >
              <div className="command-center__kpi-top">
                <p className="command-center__kpi-value">{kpi.value}</p>
                <span
                  className={`command-center__kpi-trend ${trendClass(kpi.trendGood)}`}
                >
                  {kpi.trend}
                </span>
              </div>
              <p className="command-center__kpi-label">{kpi.label}</p>
              <div className="command-center__kpi-spark" aria-hidden="true">
                {kpi.spark.map((height, index) => (
                  <span
                    key={`${kpi.label}-${index}`}
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="command-center__body">
        <div className="command-center__grid">
          <section
            className="command-center__panel command-center__panel--focus"
            aria-label="Focus opérationnel"
            role="region"
          >
            <header className="command-center__panel-header">
              <div>
                <p className="command-center__panel-kicker">Focus opérationnel</p>
                <h2>Actions prioritaires</h2>
              </div>
              <span className="command-center__pill command-center__pill--danger">
                {focusItems.length} actions requises
              </span>
            </header>
            <ul className="command-center__focus-list">
              {focusItems.map((item, index) => (
                <li key={item.requestId}>
                  <article
                    className={`command-center__focus-card command-center__focus-card--${item.tagTone}`}
                  >
                    <span className="command-center__focus-rank">{index + 1}</span>
                    <div className="command-center__focus-main">
                      <div className="command-center__focus-meta">
                        <span className="command-center__focus-ref">{item.ref}</span>
                        <span className="command-center__badge command-center__badge--status">
                          {item.statusLabel}
                        </span>
                        <span className="command-center__badge command-center__badge--priority">
                          {item.priorityLabel}
                        </span>
                        {item.indicator === "retard" ? (
                          <span className="command-center__badge command-center__badge--late">
                            Retard
                          </span>
                        ) : null}
                        {item.indicator === "anomalie" ? (
                          <span className="command-center__badge command-center__badge--anomaly">
                            Anomalie
                          </span>
                        ) : null}
                      </div>
                      <p className="command-center__focus-client">{item.client}</p>
                      <span
                        className={`command-center__focus-tag command-center__focus-tag--${item.tagTone}`}
                      >
                        {item.tag}
                      </span>
                    </div>
                    <div className="command-center__focus-side">
                      <div className="command-center__focus-assignee">
                        <span className="command-center__avatar">{item.initials}</span>
                        <span>{item.assignee}</span>
                      </div>
                      <button
                        type="button"
                        className="command-center__focus-open"
                        onClick={() => onOpenRequest?.(item.requestId)}
                      >
                        Ouvrir
                        <span aria-hidden="true">↗</span>
                      </button>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </section>

          <section
            className="command-center__panel command-center__panel--team"
            aria-label="Charge équipe"
          >
            <header className="command-center__panel-header">
              <div>
                <p className="command-center__panel-kicker command-center__panel-kicker--dark">
                  Charge équipe
                </p>
                <h2>Capacité terrain</h2>
              </div>
              <span className="command-center__panel-meta">Aujourd&apos;hui</span>
            </header>
            <ul className="command-center__team-list">
              {COMMAND_CENTER_TEAM.map((member) => (
                <li key={member.name} className="command-center__team-row">
                  <div className="command-center__team-head">
                    <span className="command-center__avatar">{member.initials}</span>
                    <div>
                      <strong>
                        {member.name}
                        {!member.available ? (
                          <span className="command-center__team-alert" aria-label="Saturé">
                            !
                          </span>
                        ) : null}
                      </strong>
                      <span>
                        {member.total} demande{member.total > 1 ? "s" : ""}
                        {member.critical > 0
                          ? ` · ${member.critical} critique${member.critical > 1 ? "s" : ""}`
                          : ""}
                      </span>
                    </div>
                    <span className="command-center__team-percent">
                      {member.loadPercent}%
                    </span>
                  </div>
                  <div className="command-center__progress">
                    <div
                      className={`command-center__progress-bar command-center__progress-bar--${
                        member.loadPercent >= 75
                          ? "high"
                          : member.loadPercent >= 50
                            ? "mid"
                            : "low"
                      }`}
                      style={{ width: `${member.loadPercent}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <footer className="command-center__team-footer">
              <span>{teamAvailable} disponibles</span>
              <span>{teamSaturated} saturé</span>
            </footer>
          </section>
        </div>

        <div className="command-center__grid command-center__grid--triple">
          <section className="command-center__panel" aria-label="Activité récente">
            <header className="command-center__panel-header">
              <div>
                <p className="command-center__panel-kicker">Activité récente</p>
                <h2>Flux temps réel</h2>
              </div>
              <span className="command-center__panel-meta">En direct</span>
            </header>
            <ul className="command-center__activity-list">
              {COMMAND_CENTER_ACTIVITY.map((entry, index) => (
                <li
                  key={`${entry.time}-${entry.action}-${index}`}
                  className="command-center__activity-row"
                >
                  <span className="command-center__activity-time">{entry.time}</span>
                  <span
                    className="command-center__activity-dot"
                    style={{ background: entry.dot }}
                    aria-hidden="true"
                  />
                  <div>
                    <p>
                      {entry.action}
                      {entry.ref ? (
                        <>
                          {" "}
                          <span
                            className="command-center__activity-ref"
                            style={{ color: entry.refTone }}
                          >
                            {entry.ref}
                          </span>
                        </>
                      ) : null}
                    </p>
                    <span>{entry.actor}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section
            className="command-center__panel"
            aria-label="Interventions du jour"
          >
            <header className="command-center__panel-header">
              <div>
                <p className="command-center__panel-kicker">Interventions du jour</p>
                <h2>Planning terrain</h2>
              </div>
            </header>
            <ul className="command-center__planning-list">
              {COMMAND_CENTER_INTERVENTIONS.map((item) => (
                <li
                  key={`${item.time}-${item.client}`}
                  className={`command-center__planning-row${
                    item.done ? " command-center__planning-row--done" : ""
                  }`}
                >
                  <span className="command-center__planning-time">{item.time}</span>
                  <div>
                    <strong>{item.client}</strong>
                    <span className="command-center__planning-tech">
                      <span className="command-center__avatar command-center__avatar--sm">
                        {item.initials}
                      </span>
                      {item.tech}
                    </span>
                  </div>
                  <span
                    className={`command-center__planning-status command-center__planning-status--${
                      item.done ? "active" : "confirmed"
                    }`}
                  >
                    {item.status}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <div className="command-center__dist-stack">
            <section className="command-center__panel" aria-label="Répartition par statut">
              <header className="command-center__panel-header">
                <div>
                  <p className="command-center__panel-kicker">Répartition</p>
                  <h2>Par statut</h2>
                </div>
                <span className="command-center__panel-meta">10 demandes</span>
              </header>
              <ul className="command-center__distribution">
                {COMMAND_CENTER_STATUS_DIST.map((entry) => (
                  <li key={entry.label}>
                    <span className="command-center__distribution-label">
                      {entry.label}
                    </span>
                    <div className="command-center__distribution-bar">
                      <div
                        style={{
                          width: `${(entry.count / statusMax) * 100}%`,
                          background: entry.color,
                        }}
                      />
                    </div>
                    <strong>{entry.count}</strong>
                  </li>
                ))}
              </ul>
            </section>

            <section className="command-center__panel" aria-label="Répartition par canal">
              <header className="command-center__panel-header">
                <div>
                  <p className="command-center__panel-kicker">Par canal</p>
                  <h2>Origine des demandes</h2>
                </div>
              </header>
              <ul className="command-center__distribution">
                {COMMAND_CENTER_CHANNEL_DIST.map((entry) => (
                  <li key={entry.label}>
                    <span className="command-center__distribution-label">
                      {entry.label}
                    </span>
                    <div className="command-center__distribution-bar">
                      <div
                        style={{
                          width: `${(entry.count / channelMax) * 100}%`,
                          background: entry.color,
                        }}
                      />
                    </div>
                    <strong>{entry.count}</strong>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>

      {onNavigateToRequests ? (
        <p className="command-center__footnote" role="note">
          <button
            type="button"
            className="command-center__footnote-link"
            onClick={onNavigateToRequests}
          >
            Voir toutes les demandes
          </button>
          {" · "}
          Présentation UI premium — données de démonstration.
        </p>
      ) : null}
    </section>
  );
}
