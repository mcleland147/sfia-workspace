"use client";

import {
  W1_DURABLE_DISCLOSURE,
  W1_NON_DURABLE_DISCLOSURE,
  W1_PROPOSED_NOT_DECIDED_DISCLOSURE,
  W1_REQUALIFY_CTA,
  W1_RESTORED_GRANTED_NOT_CURRENT_AUTHORITY,
} from "@/features/project-assistant/presentationLabels";
import styles from "./RecoverySurface.module.css";

/**
 * F10 — honest recovery. Durable facts can be replayed; conversation,
 * proposal and confirmation cannot. No invented persistence.
 */
export function RecoverySurface({
  onResumeDurable,
  onRequalify,
  suppressGenericIntentionCta = false,
}: {
  onResumeDurable?: () => void;
  onRequalify?: () => void;
  /**
   * JOURNEY-INTEGRITY — when a Proposal-specific Decision Subject owns the
   * next business action, hide the competing generic "nouvelle intention" CTA.
   * Resume/navigation may remain.
   */
  suppressGenericIntentionCta?: boolean;
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
          {suppressGenericIntentionCta
            ? "Studio relit seulement ce qui a été réellement enregistré. Une proposition active porte déjà la prochaine action métier — reprenez l'état enregistré pour l'inspecter, sans ouvrir une intention concurrente."
            : "Studio relit seulement ce qui a été réellement enregistré. La conversation, une confirmation encore demandée ou une proposition non enregistrée ne sont pas inventées au rechargement — vous pouvez reprendre l'état enregistré ou repartir d'une intention claire."}
        </p>
        <ul className={styles.disclosureList} data-testid="w1-recovery-disclosures">
          <li>{W1_DURABLE_DISCLOSURE}</li>
          <li>{W1_NON_DURABLE_DISCLOSURE}</li>
          <li>{W1_PROPOSED_NOT_DECIDED_DISCLOSURE}</li>
          <li>{W1_RESTORED_GRANTED_NOT_CURRENT_AUTHORITY}</li>
        </ul>
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
        {!suppressGenericIntentionCta ? (
          <button
            type="button"
            className={styles.secondary}
            data-testid="recovery-requalify"
            onClick={onRequalify}
          >
            {W1_REQUALIFY_CTA}
          </button>
        ) : null}
      </div>
    </section>
  );
}
