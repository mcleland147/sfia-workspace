"use client";

import { useState } from "react";
import type { D1AuditEvent, D1Project } from "@/lib/d1/types";
import { METHOD_MODE_CLAIMS } from "@/lib/d1/types";
import { D1AppShell } from "./D1AppShell";
import { MethodModeBadge, ProjectStateBadge } from "./Badges";
import { ContextualRailI1 } from "./ContextualRail";
import styles from "./d1-shell.module.css";

const USER_ACTIVITY: Record<string, string> = {
  PROJECT_CREATED: "Projet créé",
  PROJECT_MODE_SELECTED: "Mode système appliqué",
  PROJECT_ACTIVATED: "Projet activé",
};

export function ProjectCockpitView({
  project: initial,
  audit: initialAudit,
}: {
  project: D1Project;
  audit: D1AuditEvent[];
}) {
  const [project] = useState(initial);
  const [audit] = useState(initialAudit);
  const [showTechnical, setShowTechnical] = useState(false);

  const rail = <ContextualRailI1 project={project} audit={audit} />;

  return (
    <D1AppShell active="cockpit" title={project.name} rail={rail}>
      <div className={styles.header}>
        <h1 data-testid="project-title">{project.name}</h1>
        <div className={styles.badges}>
          <ProjectStateBadge state={project.state} />
          <MethodModeBadge mode={project.methodMode} />
        </div>
      </div>

      <section className={styles.card}>
        <h2>Objectif</h2>
        <p>{project.objective}</p>
        {project.initialContextSummary ? (
          <>
            <h2>Contexte initial</h2>
            <p className={styles.hint}>{project.initialContextSummary}</p>
          </>
        ) : null}
      </section>

      <section className={styles.card}>
        <h2>Trajectoire</h2>
        <p className={styles.placeholder}>
          Placeholder — ProjectTrajectory détaillée hors scope C1.
        </p>
      </section>

      <section className={styles.card}>
        <h2>Prochaine action</h2>
        <p>
          {project.state === "ACTIVE"
            ? "Continuer via Nouvelle demande (intake) ou ouvrir un cycle (C4/C5 — non disponible)."
            : "Activer le projet via la création manuelle, ou décrire une intention dans l’intake."}
        </p>
      </section>

      {project.methodMode ? (
        <section className={styles.card} data-testid="method-mode-readonly">
          <h2>Méthode (lecture seule)</h2>
          <p className={styles.hint}>
            Donnée de gouvernance — non modifiable dans le parcours produit C1.
          </p>
          <p>{METHOD_MODE_CLAIMS[project.methodMode]}</p>
        </section>
      ) : null}

      <section className={styles.card} data-testid="audit-timeline">
        <h2>Activité récente</h2>
        <ul className={styles.list}>
          {audit.map((e) => (
            <li key={e.eventId}>
              <strong>{USER_ACTIVITY[e.eventType] ?? e.eventType}</strong>
              {showTechnical ? (
                <p className={styles.hint}>
                  {e.eventType} · {e.occurredAt} · {e.correlationId}
                </p>
              ) : (
                <p className={styles.hint}>{e.occurredAt}</p>
              )}
            </li>
          ))}
        </ul>
        {!audit.length ? (
          <p className={styles.placeholder}>Aucune activité</p>
        ) : null}
        <button
          type="button"
          className={`${styles.cta} ${styles.ctaSecondary}`}
          style={{ marginTop: 12 }}
          onClick={() => setShowTechnical((v) => !v)}
          data-testid="toggle-technical-audit"
        >
          {showTechnical
            ? "Masquer le journal technique"
            : "Voir le journal technique"}
        </button>
      </section>
    </D1AppShell>
  );
}
