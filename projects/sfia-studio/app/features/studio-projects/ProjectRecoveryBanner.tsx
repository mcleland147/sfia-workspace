"use client";

import {
  W1_DURABLE_DISCLOSURE,
  W1_NON_DURABLE_DISCLOSURE,
  W1_PROPOSED_NOT_DECIDED_DISCLOSURE,
  W1_REQUALIFY_SHORT_CTA,
  W1_RESTORED_GRANTED_NOT_CURRENT_AUTHORITY,
  w1RestartHonestyMessage,
} from "@/features/project-assistant/presentationLabels";
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
          {w1RestartHonestyMessage()}
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
          Reprendre depuis l&apos;état durable
        </button>
        <button
          type="button"
          className={styles.secondary}
          data-testid="recovery-requalify"
          onClick={onRequalify}
        >
          {W1_REQUALIFY_SHORT_CTA}
        </button>
      </div>
    </section>
  );
}
