"use client";

/**
 * P6 chat-first Framing continuity card — inline ConversationSurface.
 * Pure projection + authorized callbacks. Does not invent HD / START.
 * Visual language aligns with P3 GovernedDecisionCard / Recommendation frames.
 * Pilot-facing copy only — no internal governance jargon.
 */

import type { FramingContinuitySnapshot } from "@/features/project-assistant/f2/chatFirstFramingContinuity";
import styles from "./GovernedDecisionCard.module.css";

export type FramingContinuityCardProps = {
  readonly continuity: FramingContinuitySnapshot;
  readonly busy: boolean;
  readonly error: string | null;
  readonly onPrepareCandidate: () => void;
  readonly onApproveCandidate: () => void;
  readonly onPrepareCycle: () => void;
  readonly onStartPrepared: () => void;
  readonly onKeepExploring?: () => void;
};

export function FramingContinuityCard({
  continuity,
  busy,
  error,
  onPrepareCandidate,
  onApproveCandidate,
  onPrepareCycle,
  onStartPrepared,
  onKeepExploring,
}: FramingContinuityCardProps) {
  const cycle = (continuity.catalogLabel ?? "").trim() || "Cadrage";
  const phase = continuity.phase;
  const examination = continuity.examination;

  if (
    phase === "idle" ||
    phase === "active" ||
    phase === "blocked_no_recommendation" ||
    phase === "blocked_stale_or_incomplete"
  ) {
    return null;
  }

  const title =
    phase === "recommendation_ready"
      ? `Commencer par un « ${cycle} » exploratoire`
      : phase === "awaiting_trajectory_decision"
        ? `Examiner la trajectoire pour « ${cycle} »`
        : phase === "trajectory_decided_prepare_cycle"
          ? `Préparer le cycle « ${cycle} »`
          : phase === "ready_to_start"
            ? `Démarrer « ${cycle} »`
            : continuity.message || `Continuer vers « ${cycle} »`;

  const optionBody =
    phase === "awaiting_trajectory_decision"
      ? continuity.approvalOptionLabel?.trim() ||
        `Valider cette direction pour « ${cycle} ».`
      : continuity.message;

  const primaryLabel =
    phase === "recommendation_ready"
      ? busy
        ? "Préparation…"
        : "Préparer cette direction"
      : phase === "awaiting_trajectory_decision"
        ? busy
          ? "Enregistrement…"
          : "Valider cette direction"
        : phase === "trajectory_decided_prepare_cycle"
          ? busy
            ? "Préparation…"
            : "Préparer le cycle"
          : phase === "ready_to_start"
            ? busy
              ? "Démarrage…"
              : `Démarrer le ${cycle}`
            : null;

  const primaryDisabled =
    busy ||
    (phase === "awaiting_trajectory_decision" &&
      (!continuity.presentationDigest ||
        examination?.examinationSufficient === false));

  function onPrimary() {
    if (phase === "recommendation_ready") onPrepareCandidate();
    else if (phase === "awaiting_trajectory_decision") onApproveCandidate();
    else if (phase === "trajectory_decided_prepare_cycle") onPrepareCycle();
    else if (phase === "ready_to_start") onStartPrepared();
  }

  return (
    <section
      className={styles.card}
      data-testid="framing-continuity-card"
      data-phase={phase}
      aria-labelledby="framing-continuity-title"
    >
      <p className={styles.label}>
        {phase === "awaiting_trajectory_decision"
          ? "Décision"
          : phase === "ready_to_start"
            ? "Démarrage"
            : "Recommandation"}
      </p>
      <h3
        id="framing-continuity-title"
        className={styles.title}
        data-testid="framing-continuity-title"
      >
        {title}
      </h3>
      <p className={styles.youDecide} data-testid="framing-continuity-authority">
        Vous décidez
      </p>

      {/* UX-01 — examine Product trajectory facts before HD */}
      {phase === "awaiting_trajectory_decision" && examination ? (
        <div
          className={styles.optionBlock}
          data-testid="framing-continuity-examination"
        >
          <p className={styles.optionEyebrow}>Ce qui serait validé</p>
          {examination.trajectoryDescription ? (
            <p
              className={styles.optionBody}
              data-testid="framing-exam-trajectory"
            >
              Trajectoire proposée : {examination.trajectoryDescription}
            </p>
          ) : (
            <p
              className={styles.optionMeta}
              data-testid="framing-exam-trajectory-missing"
            >
              Description de trajectoire : non fournie au-delà du type de cycle.
            </p>
          )}
          {examination.projectObjective ? (
            <p
              className={styles.optionBody}
              data-testid="framing-exam-project-objective"
            >
              Objectif du projet (contexte) : {examination.projectObjective}
            </p>
          ) : (
            <p
              className={styles.optionMeta}
              data-testid="framing-exam-objective-missing"
            >
              Objectif du projet : non précisé dans l&apos;état vivant actuel.
            </p>
          )}
          {examination.proposedScopeLabel ? (
            <p className={styles.optionBody} data-testid="framing-exam-scope">
              {examination.proposedScopeLabel}
            </p>
          ) : null}
          {examination.knownStepLabels.length > 0 ? (
            <div data-testid="framing-exam-steps">
              <p className={styles.optionEyebrow}>Étapes connues</p>
              {examination.knownStepLabels.map((label, index) => (
                <p
                  key={`${index}-${label}`}
                  className={styles.optionBody}
                >
                  {index + 1}. {label}
                </p>
              ))}
            </div>
          ) : (
            <p className={styles.optionMeta} data-testid="framing-exam-steps-missing">
              Aucune étape Product listée pour cette trajectoire.
            </p>
          )}
          <p className={styles.optionBody} data-testid="framing-exam-implications">
            {examination.validationImplications}
          </p>
          {examination.limitsOrReservations ? (
            <p className={styles.optionMeta} data-testid="framing-exam-limits">
              {examination.limitsOrReservations}
            </p>
          ) : null}
        </div>
      ) : null}

      <div className={styles.optionBlock}>
        <p className={styles.optionEyebrow}>Prochaine étape</p>
        <p className={styles.optionBody} data-testid="framing-continuity-body">
          {optionBody}
        </p>
      </div>
      {error ? (
        <p
          className={styles.error}
          role="alert"
          data-testid="framing-continuity-error"
        >
          {error}
        </p>
      ) : null}
      <div className={styles.actions}>
        {primaryLabel ? (
          <button
            type="button"
            className={styles.primary}
            data-testid="framing-continuity-primary"
            disabled={primaryDisabled}
            onClick={onPrimary}
          >
            {primaryLabel}
          </button>
        ) : null}
        {onKeepExploring &&
        (phase === "recommendation_ready" ||
          phase === "awaiting_trajectory_decision") ? (
          <button
            type="button"
            className={styles.tertiary}
            data-testid="framing-continuity-keep-exploring"
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
