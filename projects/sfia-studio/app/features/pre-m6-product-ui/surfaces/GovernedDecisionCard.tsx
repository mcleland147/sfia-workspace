"use client";

/**
 * P3 §17 — Governed Decision presentation (INLINE in Conversation).
 * Pure projection: receives already-resolved OptionSet + authorized callbacks.
 * Does NOT own Product truth, persist, classify authority, or invent HumanDecision.
 */

import type { TrajectoryOptionSetDto } from "@/features/project-assistant/w2/types";
import styles from "./GovernedDecisionCard.module.css";

export type GovernedDecisionCardProps = {
  readonly optionSet: TrajectoryOptionSetDto;
  /** Index into non-recommended options currently disclosed (0-based). */
  readonly alternateIndex: number;
  readonly busy: boolean;
  readonly error: string | null;
  /** Honest Proposal rephrasedRequest when present (Figma decision title). */
  readonly decisionTitle?: string | null;
  readonly onChooseRecommended: () => void;
  /** Disclosure only — must NOT mutate HumanDecision. */
  readonly onRevealAlternate: () => void;
  readonly onChooseAlternate: (optionRef: string) => void;
  /** Keep discussing — disclosure/navigation only. */
  readonly onKeepExploring?: () => void;
};

function recommendedOption(optionSet: TrajectoryOptionSetDto) {
  const ref = optionSet.recommendation.recommendedOptionRef;
  return optionSet.options.find((o) => o.optionRef === ref) ?? optionSet.options[0];
}

function alternateOptions(optionSet: TrajectoryOptionSetDto) {
  const ref = optionSet.recommendation.recommendedOptionRef;
  return optionSet.options.filter((o) => o.optionRef !== ref);
}

export function GovernedDecisionCard({
  optionSet,
  alternateIndex,
  busy,
  error,
  decisionTitle = null,
  onChooseRecommended,
  onRevealAlternate,
  onChooseAlternate,
  onKeepExploring,
}: GovernedDecisionCardProps) {
  const recommended = recommendedOption(optionSet);
  const alternates = alternateOptions(optionSet);
  const revealed =
    alternates.length > 0
      ? alternates[Math.min(alternateIndex, alternates.length - 1)]
      : null;
  const showingAlternate = alternateIndex >= 0 && revealed != null;
  const hasMoreAlternates =
    alternates.length > 0 &&
    (alternateIndex < 0 || alternateIndex < alternates.length - 1);

  const title =
    decisionTitle?.trim() || "Choisir la direction de l'espace projet";

  const recommendedSummary =
    recommended?.label?.trim() ||
    recommended?.intent?.trim() ||
    optionSet.recommendation.rationale;

  return (
    <section
      className={styles.card}
      data-testid="governed-decision-card"
      aria-labelledby="governed-decision-title"
    >
      <p className={styles.label}>Décision</p>
      <h3
        id="governed-decision-title"
        className={styles.title}
        data-testid="governed-decision-title"
      >
        {title}
      </h3>

      {!showingAlternate ? (
        <div className={styles.optionBlock} data-testid="governed-decision-recommended">
          <p className={styles.optionEyebrow}>Option recommandée</p>
          <p className={styles.optionBody}>{recommendedSummary}</p>
          {recommended?.intent &&
          recommended.intent.trim() !== recommendedSummary ? (
            <p className={styles.optionMeta}>{recommended.intent}</p>
          ) : null}
        </div>
      ) : (
        <div className={styles.optionBlock} data-testid="governed-decision-alternate">
          <p className={styles.optionEyebrow}>Autre option</p>
          <p className={styles.optionBody}>
            {revealed.label?.trim() || revealed.intent?.trim()}
          </p>
          {revealed.intent && revealed.label !== revealed.intent ? (
            <p className={styles.optionMeta}>{revealed.intent}</p>
          ) : null}
        </div>
      )}

      {error ? (
        <p className={styles.error} role="alert" data-testid="governed-decision-error">
          {error}
        </p>
      ) : null}

      <div className={styles.actions}>
        {!showingAlternate ? (
          <button
            type="button"
            className={styles.primary}
            data-testid="governed-decision-choose"
            disabled={busy || !recommended}
            onClick={onChooseRecommended}
          >
            {busy ? "Enregistrement…" : "Choisir cette direction"}
          </button>
        ) : (
          <button
            type="button"
            className={styles.primary}
            data-testid="governed-decision-choose-alternate"
            disabled={busy || !revealed}
            onClick={() => revealed && onChooseAlternate(revealed.optionRef)}
          >
            {busy ? "Enregistrement…" : "Choisir cette direction"}
          </button>
        )}

        {hasMoreAlternates || (showingAlternate && alternateIndex >= 0) ? (
          <button
            type="button"
            className={styles.secondary}
            data-testid="governed-decision-see-alternate"
            disabled={busy}
            onClick={
              showingAlternate && !hasMoreAlternates
                ? () => onRevealAlternate()
                : onRevealAlternate
            }
          >
            {showingAlternate && !hasMoreAlternates
              ? "Voir l'option recommandée"
              : "Voir l'autre option"}
          </button>
        ) : null}

        {onKeepExploring ? (
          <button
            type="button"
            className={styles.tertiary}
            data-testid="governed-decision-keep-exploring"
            disabled={busy}
            onClick={onKeepExploring}
          >
            Continuer à explorer
          </button>
        ) : null}
      </div>
    </section>
  );
}
