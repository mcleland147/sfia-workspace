"use client";

import type { GetProjectSuccess } from "../types";
import { projectContextForDisplay } from "@/features/project-assistant/presentationLabels";
import styles from "./LpsSurface.module.css";

/**
 * "ÉTAT DU PROJET" — durable projection only.
 * Every line comes from getProjectRuntimeAction; nothing is inferred or invented.
 */
export function LpsSurface({ result }: { result: GetProjectSuccess }) {
  const { project, livingState, doctrine, readiness } = result;
  const contextDisplay = projectContextForDisplay(project.contextSummary);

  const currentState =
    livingState.version > 1
      ? `Avancement enregistré · état v${livingState.version}`
      : "Projet ouvert · état initial enregistré";

  const nextAction =
    readiness.status === "NOT_READY"
      ? "Poursuivre la qualification avec Nora, puis décider."
      : `Préparation ${readiness.status} — poursuivre avec Nora.`;

  return (
    <aside
      className={styles.panel}
      data-testid="living-project-state-panel"
      aria-label="État du projet"
    >
      <header className={styles.head}>
        <p className={styles.eyebrow}>ÉTAT DU PROJET</p>
        <h2 className={styles.title}>{project.name}</h2>
        <p className={styles.version}>État enregistré · v{livingState.version}</p>
      </header>

      <section className={styles.block}>
        <h3 className={styles.blockTitle}>État actuel</h3>
        <p className={styles.blockBody}>{currentState}</p>
      </section>

      <section className={styles.block}>
        <h3 className={styles.blockTitle}>Prochaine action</h3>
        <p className={styles.blockBody}>{nextAction}</p>
      </section>

      <section className={styles.block}>
        <h3 className={styles.blockTitle}>Objectif</h3>
        <p className={styles.blockBody}>{project.objective}</p>
      </section>

      {contextDisplay ? (
        <section className={styles.block}>
          <h3 className={styles.blockTitle}>Contexte</h3>
          <p className={styles.blockBody} data-testid="lps-context-display">
            {contextDisplay}
          </p>
        </section>
      ) : null}

      {livingState.activeCycleInstanceId ? (
        <section className={styles.block}>
          <h3 className={styles.blockTitle}>Cycle</h3>
          <p className={styles.blockBody}>Cycle rattaché au projet</p>
          <p className={styles.blockCode}>{livingState.activeCycleInstanceId}</p>
        </section>
      ) : null}

      {project.constraints.length > 0 ? (
        <section className={styles.block}>
          <h3 className={styles.blockTitle}>Points ouverts</h3>
          <ul className={styles.list}>
            {project.constraints.map((constraint, index) => (
              <li key={`${index}:${constraint}`}>{constraint}</li>
            ))}
          </ul>
        </section>
      ) : null}

      <details className={styles.diagnostics} data-testid="lps-diagnostics">
        <summary>Détails techniques</summary>
        <dl className={styles.facts}>
          <div>
            <dt>Criticité perçue</dt>
            <dd>{project.criticality}</dd>
          </div>
          <div>
            <dt>Préparation</dt>
            <dd>
              {readiness.status === "NOT_READY"
                ? "Non prêt produit"
                : readiness.status}
            </dd>
          </div>
          <div>
            <dt>Identifiant projet</dt>
            <dd className={styles.blockCode}>{project.projectId}</dd>
          </div>
          {project.shortReference ? (
            <div>
              <dt>Référence courte</dt>
              <dd>{project.shortReference}</dd>
            </div>
          ) : null}
          <div>
            <dt>Doctrine</dt>
            <dd>
              {doctrine.id} · {doctrine.version}
            </dd>
          </div>
          <div>
            <dt>Digest</dt>
            <dd className={styles.blockCode}>{doctrine.digest}</dd>
          </div>
          <div>
            <dt>Réf. état vivant</dt>
            <dd className={styles.blockCode}>{livingState.id}</dd>
          </div>
          {livingState.ckcResolutionRef ? (
            <div>
              <dt>Réf. résolution</dt>
              <dd className={styles.blockCode}>{livingState.ckcResolutionRef}</dd>
            </div>
          ) : null}
          <div>
            <dt>Source technique</dt>
            <dd>{project.source}</dd>
          </div>
        </dl>
      </details>
    </aside>
  );
}
