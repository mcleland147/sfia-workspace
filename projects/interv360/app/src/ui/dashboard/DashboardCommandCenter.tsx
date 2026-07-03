import type { DemoRequest } from "../../domain/requestStatus";
import { RequestBadges } from "../requests/RequestBadges";
import { getAssignmentDisplay } from "../requests/requestIndicators";
import {
  countByStatus,
  countOpenRequests,
  countWithIndicator,
  getChannelDistribution,
  getFocusRequests,
  getQualificationLoadPercent,
  getRecentActivity,
  getStatusDistribution,
  getTeamLoad,
  getTodayInterventions,
  getUiIndicator,
} from "./requestDashboardStats";

interface DashboardCommandCenterProps {
  requests: DemoRequest[];
  onNavigateToRequests?: () => void;
  onOpenRequest?: (requestId: string) => void;
}

export function DashboardCommandCenter({
  requests,
  onNavigateToRequests,
  onOpenRequest,
}: DashboardCommandCenterProps) {
  const kpis = [
    {
      label: "Demandes ouvertes",
      value: String(countOpenRequests(requests)),
      tone: "teal",
    },
    {
      label: "Qualifiées",
      value: String(countByStatus(requests, "STAT-01")),
      tone: "blue",
    },
    {
      label: "Planifiées",
      value: String(countByStatus(requests, "STAT-02")),
      tone: "green",
    },
    {
      label: "En retard",
      value: String(countWithIndicator(requests, "retard")),
      tone: "orange",
    },
    {
      label: "Anomalies",
      value: String(countWithIndicator(requests, "anomalie")),
      tone: "rose",
    },
    {
      label: "Charge qualification",
      value: `${getQualificationLoadPercent(requests)}%`,
      tone: "purple",
    },
  ];

  const focusItems = getFocusRequests(requests);
  const teamLoad = getTeamLoad(requests);
  const activity = getRecentActivity(requests);
  const interventions = getTodayInterventions(requests);
  const statusDistribution = getStatusDistribution(requests);
  const channelDistribution = getChannelDistribution(requests);
  const statusMax = Math.max(...statusDistribution.map((entry) => entry.count), 1);

  return (
    <section className="command-center" aria-label="Centre de commande SAV">
      <header className="command-center__hero">
        <div className="command-center__hero-copy">
          <p className="command-center__eyebrow">Centre de commande · SAV</p>
          <h1 className="command-center__title">Centre de commande SAV</h1>
          <p className="command-center__subtitle">
            Pilotez l&apos;activité, les urgences et les interventions terrain en
            temps réel.
          </p>
        </div>
        <div className="command-center__hero-actions">
          <span className="command-center__live-pill">Live</span>
          {onNavigateToRequests ? (
            <button
              type="button"
              className="command-center__cta"
              onClick={onNavigateToRequests}
            >
              Voir les demandes
            </button>
          ) : null}
        </div>
      </header>

      <div className="command-center__kpi-grid" aria-label="Indicateurs clés">
        {kpis.map((kpi) => (
          <article
            key={kpi.label}
            className={`command-center__kpi command-center__kpi--${kpi.tone}`}
          >
            <p className="command-center__kpi-value">{kpi.value}</p>
            <p className="command-center__kpi-label">{kpi.label}</p>
          </article>
        ))}
      </div>

      <div className="command-center__grid">
        <section
          className="command-center__panel command-center__panel--focus"
          aria-label="Focus opérationnel"
        >
          <header className="command-center__panel-header">
            <h2>Focus opérationnel</h2>
            <span className="command-center__pill command-center__pill--danger">
              {focusItems.length} actions requises
            </span>
          </header>
          {focusItems.length === 0 ? (
            <p className="command-center__empty">Aucune action critique en attente.</p>
          ) : (
            <ul className="command-center__focus-list">
              {focusItems.map((request, index) => {
                const indicator = getUiIndicator(request);
                return (
                  <li key={request.id}>
                    <button
                      type="button"
                      className="command-center__focus-row"
                      aria-label={`Focus opérationnel — ${request.customerLabel}`}
                      onClick={() => onOpenRequest?.(request.id)}
                    >
                      <span className="command-center__focus-rank">#{index + 1}</span>
                      <div className="command-center__focus-main">
                        <div className="command-center__focus-meta">
                          <span className="command-center__focus-ref">{request.id}</span>
                          <RequestBadges request={request} compact />
                        </div>
                        <p>{request.customerLabel}</p>
                        {indicator ? (
                          <span
                            className={`command-center__indicator command-center__indicator--${indicator}`}
                          >
                            {indicator === "retard" ? "Retard" : "Anomalie"}
                          </span>
                        ) : null}
                      </div>
                      <span className="command-center__focus-assignee">
                        {getAssignmentDisplay(request) ?? "Non affecté"}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </section>

        <section
          className="command-center__panel command-center__panel--team"
          aria-label="Charge équipe"
        >
          <header className="command-center__panel-header">
            <h2>Charge équipe</h2>
            <span className="command-center__panel-meta">Aujourd&apos;hui</span>
          </header>
          <ul className="command-center__team-list">
            {teamLoad.map((member) => (
              <li key={member.name} className="command-center__team-row">
                <div className="command-center__team-head">
                  <span className="command-center__avatar">{member.initials}</span>
                  <div>
                    <strong>{member.name}</strong>
                    <span>{member.role}</span>
                  </div>
                  <span className="command-center__team-count">{member.total}</span>
                </div>
                <div className="command-center__progress">
                  <div
                    className="command-center__progress-bar"
                    style={{ width: `${member.loadPercent}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="command-center__grid command-center__grid--triple">
        <section
          className="command-center__panel"
          aria-label="Activité récente"
        >
          <header className="command-center__panel-header">
            <h2>Activité récente</h2>
            <span className="command-center__panel-meta">En direct</span>
          </header>
          <ul className="command-center__activity-list">
            {activity.map((entry, index) => (
              <li key={`${entry.ref}-${index}`} className="command-center__activity-row">
                <span className="command-center__activity-time">{entry.time}</span>
                <span
                  className={`command-center__activity-dot command-center__activity-dot--${entry.tone}`}
                  aria-hidden="true"
                />
                <div>
                  <p>{entry.action}</p>
                  <span>
                    {entry.actor} · {entry.ref}
                  </span>
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
            <h2>Interventions du jour</h2>
          </header>
          <ul className="command-center__planning-list">
            {interventions.length === 0 ? (
              <li className="command-center__empty">Aucune intervention planifiée.</li>
            ) : (
              interventions.map((item) => (
                <li key={`${item.time}-${item.client}`} className="command-center__planning-row">
                  <span className="command-center__planning-time">{item.time}</span>
                  <div>
                    <strong>{item.client}</strong>
                    <span>
                      {item.initials} · {item.tech}
                    </span>
                  </div>
                  <span className="command-center__planning-status">{item.status}</span>
                </li>
              ))
            )}
          </ul>
        </section>

        <section
          className="command-center__panel"
          aria-label="Répartition statut et canal"
        >
          <header className="command-center__panel-header">
            <h2>Répartition</h2>
            <span className="command-center__panel-meta">
              {requests.length} demandes
            </span>
          </header>
          <div className="command-center__distribution">
            <p className="command-center__distribution-title">Par statut</p>
            <ul>
              {statusDistribution.map((entry) => (
                <li key={entry.label}>
                  <span>{entry.label}</span>
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
            <p className="command-center__distribution-title">Par canal</p>
            <ul>
              {channelDistribution.map((entry) => (
                <li key={entry.label}>
                  <span>{entry.label}</span>
                  <div className="command-center__distribution-bar">
                    <div
                      style={{
                        width: `${(entry.count / requests.length) * 100}%`,
                        background: entry.color,
                      }}
                    />
                  </div>
                  <strong>{entry.count}</strong>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      <p className="command-center__footnote" role="note">
        Données dérivées du jeu de démonstration — présentation UI uniquement.
      </p>
    </section>
  );
}
