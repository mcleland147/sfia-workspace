"use client";

import { W1_TRANSCRIPT_UNAVAILABLE_DISCLOSURE } from "@/features/project-assistant/presentationLabels";
import styles from "./RecoverySurface.module.css";

/**
 * AUTOMATIC PROJECT RESUME — anomaly disclosure only.
 *
 * Product Project open rehydrates durable state automatically.
 * This surface is NOT a happy-path "Reprise" chooser.
 * It appears only when the Pilot transcript cannot be loaded.
 *
 * NEVER Truth C / HumanDecision / Confirmation authority.
 */
export function RecoverySurface({
  onRetryTranscript,
  message = W1_TRANSCRIPT_UNAVAILABLE_DISCLOSURE,
}: {
  /** Optional targeted retry — not a generic "resume Project" action. */
  onRetryTranscript?: () => void;
  message?: string;
}) {
  return (
    <section
      className={styles.anomaly}
      data-testid="project-transcript-anomaly"
      aria-labelledby="pm6-transcript-anomaly-title"
    >
      <div className={styles.body}>
        <p className={styles.eyebrow}>Conversation</p>
        <h2 id="pm6-transcript-anomaly-title" className={styles.title}>
          Historique temporairement indisponible
        </h2>
        <p className={styles.text} data-testid="project-transcript-anomaly-text">
          {message}
        </p>
      </div>
      {onRetryTranscript ? (
        <div className={styles.actions}>
          <button
            type="button"
            className={styles.secondary}
            data-testid="recovery-retry-transcript"
            onClick={onRetryTranscript}
          >
            Réessayer le chargement de la conversation
          </button>
        </div>
      ) : null}
    </section>
  );
}
