"use client";

import styles from "./RecoverySurface.module.css";

/**
 * F10 — honest recovery. Durable facts can be replayed; conversation,
 * proposal and confirmation cannot. No invented persistence.
 */
export function RecoverySurface({
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
      aria-labelledby="pm6-recovery-title"
    >
      <div className={styles.body}>
        <p className={styles.eyebrow}>Reprise</p>
        <h2 id="pm6-recovery-title" className={styles.title}>
          Reprenez où le projet en est réellement
        </h2>
        <p className={styles.text}>
          Ce qui est enregistré (projet, état du projet, décisions et contrats)
          peut être relu. La conversation, la proposition et la confirmation
          restent process-local et peuvent être perdues au rechargement.
        </p>
      </div>
      <div className={styles.actions}>
        <button
          type="button"
          className={styles.primary}
          data-testid="recovery-resume-durable"
          onClick={onResumeDurable}
        >
          Reprendre l&apos;état enregistré
        </button>
        <button
          type="button"
          className={styles.secondary}
          data-testid="recovery-requalify"
          onClick={onRequalify}
        >
          Repartir d&apos;une nouvelle intention
        </button>
      </div>
    </section>
  );
}
