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
          Ce qui est durablement enregistré (projet, LPS, trajectoire effective,
          consentements accordés/consommés, épistémique matérialisé) peut être
          relu. La conversation, la confirmation demandée et les propositions
          process-local peuvent être perdues au rechargement.
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
        <button
          type="button"
          className={styles.secondary}
          data-testid="recovery-requalify"
          onClick={onRequalify}
        >
          {W1_REQUALIFY_CTA}
        </button>
      </div>
    </section>
  );
}
