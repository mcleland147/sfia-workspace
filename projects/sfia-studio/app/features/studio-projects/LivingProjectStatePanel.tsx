"use client";

import type { getProjectRuntimeAction } from "@/lib/vertical-slice-runtime/actions";
import styles from "./living-project-state-panel.module.css";

type GetProjectResult = Awaited<ReturnType<typeof getProjectRuntimeAction>>;
type GetProjectSuccess = Extract<GetProjectResult, { ok: true }>;

export function LivingProjectStatePanel({
  result,
  compact = false,
}: {
  result: GetProjectSuccess;
  compact?: boolean;
}) {
  return (
    <aside
      className={compact ? styles.panelCompact : styles.panel}
      data-testid="living-project-state-panel"
      aria-label="État vivant du projet"
    >
      <header className={styles.header}>
        <p className={styles.eyebrow}>État vivant</p>
        <h2 className={styles.title}>{result.project.name}</h2>
        <p className={styles.lead}>
          Vue secondaire du projet — pas un cockpit. La conversation reste le
          parcours principal.
        </p>
      </header>

      <section className={styles.section} aria-labelledby="lps-objective">
        <h3 id="lps-objective">Objectif</h3>
        <p>{result.project.objective}</p>
      </section>

      <section className={styles.section} aria-labelledby="lps-context">
        <h3 id="lps-context">Contexte</h3>
        <p>{result.project.contextSummary || "Aucun résumé de contexte."}</p>
      </section>

      {result.project.constraints.length > 0 ? (
        <section className={styles.section} aria-labelledby="lps-constraints">
          <h3 id="lps-constraints">Contraintes</h3>
          <ul className={styles.list}>
            {result.project.constraints.map((constraint, index) => (
              <li key={`${index}:${constraint}`}>{constraint}</li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className={styles.section} aria-labelledby="lps-status">
        <h3 id="lps-status">Statut</h3>
        <dl className={styles.facts}>
          <div>
            <dt>Criticité perçue</dt>
            <dd>{result.project.criticality}</dd>
          </div>
          <div>
            <dt>Version d&apos;état</dt>
            <dd>v{result.livingState.version}</dd>
          </div>
          <div>
            <dt>Préparation</dt>
            <dd>
              {result.readiness.status === "NOT_READY"
                ? "Non prêt produit"
                : result.readiness.status}
            </dd>
          </div>
        </dl>
      </section>

      <details className={styles.diagnostics} data-testid="lps-diagnostics">
        <summary>Diagnostics techniques</summary>
        <dl className={styles.facts}>
          <div>
            <dt>Identifiant projet</dt>
            <dd className={styles.code}>{result.project.projectId}</dd>
          </div>
          {result.project.shortReference ? (
            <div>
              <dt>Référence courte</dt>
              <dd>{result.project.shortReference}</dd>
            </div>
          ) : null}
          <div>
            <dt>Doctrine</dt>
            <dd>
              {result.doctrine.id} · {result.doctrine.version}
            </dd>
          </div>
          <div>
            <dt>Digest</dt>
            <dd className={styles.code}>{result.doctrine.digest}</dd>
          </div>
          <div>
            <dt>Réf. état vivant</dt>
            <dd className={styles.code}>{result.livingState.id}</dd>
          </div>
          {result.livingState.activeCycleInstanceId ? (
            <div>
              <dt>Cycle lié</dt>
              <dd className={styles.code}>
                {result.livingState.activeCycleInstanceId}
              </dd>
            </div>
          ) : null}
          {result.livingState.ckcResolutionRef ? (
            <div>
              <dt>Réf. résolution</dt>
              <dd className={styles.code}>
                {result.livingState.ckcResolutionRef}
              </dd>
            </div>
          ) : null}
          <div>
            <dt>Source technique</dt>
            <dd>{result.project.source}</dd>
          </div>
        </dl>
      </details>
    </aside>
  );
}
