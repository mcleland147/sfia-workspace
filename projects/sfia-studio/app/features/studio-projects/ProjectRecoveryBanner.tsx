"use client";

import styles from "./project-recovery-banner.module.css";

/**
 * F10 — honest recovery messaging: durable vs process-local.
 * CTAs focus conversation / requalify without inventing persistence.
 */
export function ProjectRecoveryBanner({
  onResumeDurable,
  onRequalify,
}: {
  onResumeDurable?: () => void;
  onRequalify?: () => void;
}) {
  return (
    <section
      className={styles.root}
      data-testid="project-recovery-banner"
      aria-labelledby="project-recovery-title"
    >
      <div>
        <h2 id="project-recovery-title" className={styles.title}>
          Reprise après rechargement
        </h2>
        <p className={styles.body}>
          L&apos;état durable du projet (projet, état vivant, décisions et
          contrats déjà enregistrés) peut être relu. La conversation, la
          proposition et la confirmation restent process-local et peuvent être
          perdues au rechargement — aucune durabilité inventée.
        </p>
      </div>
      <div className={styles.actions}>
        <button
          type="button"
          className={styles.primary}
          data-testid="recovery-resume-durable"
          onClick={onResumeDurable}
        >
          Reprendre depuis l&apos;état durable
        </button>
        <button
          type="button"
          className={styles.secondary}
          data-testid="recovery-requalify"
          onClick={onRequalify}
        >
          Requalifier
        </button>
      </div>
    </section>
  );
}
