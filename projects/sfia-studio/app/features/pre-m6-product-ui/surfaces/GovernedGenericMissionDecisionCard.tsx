"use client";

/**
 * M-HD-02 — Generic Mission Pilot decision (INLINE in Conversation).
 * Pure projection of a sealed GenericMissionSubject + OA option ids.
 * Does NOT invent materiality, options, or HumanDecision.
 * Reuses GovernedDecisionCard visual language (Figma 412:2 / 414:2).
 */

import {
  UI_GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
  UI_GENERIC_MISSION_OPTION_REFUSE,
  UI_GENERIC_MISSION_OPTION_REQUEST_AMEND,
  type GenericMissionSubjectView,
} from "./genericMissionPresentation";
import styles from "./GovernedDecisionCard.module.css";

export type GenericMissionDecisionUiState =
  | "awaiting_decision"
  | "recording"
  | "accepted"
  | "refused"
  | "amended"
  | "stale"
  | "authority_denied"
  | "error";

export type GovernedGenericMissionDecisionCardProps = {
  readonly subject: GenericMissionSubjectView | null;
  readonly uiState: GenericMissionDecisionUiState;
  readonly busy: boolean;
  readonly error: string | null;
  readonly staleMessage?: string | null;
  readonly onAccept: () => void;
  readonly onRefuse: () => void;
  readonly onRequestAmend: () => void;
  /** Optional — open contract / detail disclosure (navigation only). */
  readonly onOpenDetail?: () => void;
};

function effectsSummary(subject: GenericMissionSubjectView): string {
  const caps = subject.effects.requiredCapabilities;
  const op = subject.effects.requestedOperation?.trim();
  const parts: string[] = [];
  if (op) parts.push(`Opération : ${op}`);
  if (caps.length > 0) parts.push(`Capacités : ${caps.join(", ")}`);
  if (subject.effects.expectedOutputs.length > 0) {
    parts.push(
      `Résultats : ${subject.effects.expectedOutputs.slice(0, 3).join("; ")}`,
    );
  }
  return parts.join(" · ") || "Effets matériels scellés avec la mission.";
}

function risksSummary(subject: GenericMissionSubjectView): string {
  const risks = subject.effects.risks.filter((r) => r.trim().length > 0);
  const reservations = subject.effects.reservations.filter(
    (r) => r.trim().length > 0,
  );
  const bits = [...risks.slice(0, 3), ...reservations.slice(0, 2)];
  return bits.length > 0
    ? bits.join(" · ")
    : "Aucune réserve supplémentaire scellée.";
}

export function GovernedGenericMissionDecisionCard({
  subject,
  uiState,
  busy,
  error,
  staleMessage,
  onAccept,
  onRefuse,
  onRequestAmend,
  onOpenDetail,
}: GovernedGenericMissionDecisionCardProps) {
  if (uiState === "stale" || (!subject && uiState !== "awaiting_decision")) {
    return (
      <section
        className={styles.card}
        data-testid="generic-mission-decision-card"
        data-state="stale"
        aria-labelledby="generic-mission-decision-title"
      >
        <p className={styles.label}>Mission générique</p>
        <h3
          id="generic-mission-decision-title"
          className={styles.title}
          data-testid="generic-mission-decision-title"
        >
          Présentation périmée
        </h3>
        <p className={styles.optionBody} data-testid="generic-mission-stale-body">
          {staleMessage?.trim() ||
            "Cette présentation de mission n'est plus actuelle. Demandez à Nora une nouvelle qualification avant toute décision."}
        </p>
        <p className={styles.optionMeta}>
          Aucune préparation n'est ouverte sur cette ancienne présentation.
        </p>
      </section>
    );
  }

  if (!subject) return null;

  const decided =
    uiState === "accepted" ||
    uiState === "refused" ||
    uiState === "amended";
  const actionsDisabled = busy || decided || uiState === "authority_denied";

  const structural =
    subject.materiality === "structural" ||
    subject.impactSignals.structuralChange ||
    subject.impactSignals.architectureImpact;

  const statusLine =
    uiState === "accepted"
      ? "Décision acceptée — la préparation peut reprendre sur cette mission exacte (préparer ≠ confirmer ≠ exécuter)."
      : uiState === "refused"
        ? "Décision refusée — aucune préparation débloquée."
        : uiState === "amended"
          ? "Modification demandée — nouvelle qualification et présentation requises."
          : uiState === "recording"
            ? "Enregistrement de la décision…"
            : uiState === "authority_denied"
              ? "Autorité insuffisante — décision non enregistrée."
              : "Décision explicite requise avant toute préparation.";

  return (
    <section
      className={styles.card}
      data-testid="generic-mission-decision-card"
      data-state={uiState}
      data-mission-subject-id={subject.missionSubjectId}
      data-presentation-digest={subject.presentationDigest}
      aria-labelledby="generic-mission-decision-title"
    >
      <p className={styles.label}>Mission générique</p>
      <h3
        id="generic-mission-decision-title"
        className={styles.title}
        data-testid="generic-mission-decision-title"
      >
        {subject.objective}
      </h3>
      <p className={styles.youDecide} data-testid="generic-mission-status">
        {statusLine}
      </p>

      <div className={styles.optionBlock} data-testid="generic-mission-outcome">
        <p className={styles.optionEyebrow}>Résultat attendu</p>
        <p className={styles.optionBody}>{subject.expectedOutcome}</p>
      </div>
      <div className={styles.optionBlock} data-testid="generic-mission-scope">
        <p className={styles.optionEyebrow}>Périmètre</p>
        <p className={styles.optionBody}>{subject.scopeNarrative}</p>
        {subject.scopeIn.length > 0 ? (
          <p className={styles.optionMeta}>
            Inclus : {subject.scopeIn.slice(0, 4).join(", ")}
            {subject.scopeOut.length > 0
              ? ` · Hors : ${subject.scopeOut.slice(0, 3).join(", ")}`
              : ""}
          </p>
        ) : null}
      </div>
      <div className={styles.optionBlock} data-testid="generic-mission-effects">
        <p className={styles.optionEyebrow}>Effets matériels</p>
        <p className={styles.optionBody}>{effectsSummary(subject)}</p>
        {structural ? (
          <p className={styles.optionMeta} data-testid="generic-mission-structural">
            Mission structurante — HumanDecision Pilote requise.
          </p>
        ) : null}
      </div>
      <div className={styles.optionBlock} data-testid="generic-mission-risks">
        <p className={styles.optionEyebrow}>Risques et réserves</p>
        <p className={styles.optionBody}>{risksSummary(subject)}</p>
      </div>

      {error ? (
        <p
          className={styles.error}
          role="alert"
          data-testid="generic-mission-decision-error"
        >
          {error}
        </p>
      ) : null}

      {!decided ? (
        <div className={styles.actions}>
          <button
            type="button"
            className={styles.primary}
            data-testid="generic-mission-accept"
            data-option-id={UI_GENERIC_MISSION_OPTION_ACCEPT_PREPARE}
            disabled={actionsDisabled}
            onClick={onAccept}
          >
            {busy ? "Enregistrement…" : "Accepter la mission"}
          </button>
          <button
            type="button"
            className={styles.secondary}
            data-testid="generic-mission-refuse"
            data-option-id={UI_GENERIC_MISSION_OPTION_REFUSE}
            disabled={actionsDisabled}
            onClick={onRefuse}
          >
            Refuser
          </button>
          <button
            type="button"
            className={styles.tertiary}
            data-testid="generic-mission-request-amend"
            data-option-id={UI_GENERIC_MISSION_OPTION_REQUEST_AMEND}
            disabled={actionsDisabled}
            onClick={onRequestAmend}
          >
            Demander à modifier
          </button>
          {onOpenDetail ? (
            <button
              type="button"
              className={styles.tertiary}
              data-testid="generic-mission-open-detail"
              disabled={busy}
              onClick={onOpenDetail}
            >
              Voir le détail
            </button>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}
