"use client";

import Link from "next/link";
import type {
  ContextMatchResult,
  ContextSelectionDraft,
} from "@/lib/d1/context/types";
import {
  actionLogContextSelection,
} from "@/lib/d1/context/actions";
import shell from "../d1-shell.module.css";
import styles from "./intake.module.css";

function statusLabel(status: string): string {
  switch (status) {
    case "STRONG_MATCH":
      return "Correspondance forte (estimation)";
    case "MULTIPLE_MATCHES":
      return "Plusieurs correspondances";
    case "POSSIBLE_MATCH":
      return "Correspondance possible";
    case "NO_MATCH":
      return "Aucune correspondance";
    case "CONTEXT_UNAVAILABLE":
      return "Contexte indisponible";
    case "NEED_CLARIFICATION":
      return "Clarification requise";
    default:
      return status;
  }
}

export function ContextMatchPanel({
  match,
  matching,
  matchError,
  selection,
  sessionLocalId,
  onSelect,
  onClearSelection,
  onRetry,
  analyzeOnly,
}: {
  match: ContextMatchResult | null;
  matching: boolean;
  matchError: string | null;
  selection: ContextSelectionDraft | null;
  sessionLocalId: string;
  onSelect: (draft: ContextSelectionDraft) => void;
  onClearSelection: () => void;
  onRetry: () => void;
  analyzeOnly: boolean;
}) {
  return (
    <section
      className={styles.contextCard}
      data-testid="intake-context"
      aria-label="Contexte retrouvé"
      aria-busy={matching}
    >
      <h2>Contexte retrouvé</h2>
      <p className={styles.contextLead}>
        Matching déterministe sur les Projects D1 existants. Aucun rattachement
        n’est appliqué — sélection temporaire uniquement.
      </p>

      {matching ? (
        <div
          className={styles.loadingRow}
          data-testid="context-loading"
          role="status"
        >
          Recherche de contexte en cours…
        </div>
      ) : null}

      {matchError ? (
        <div
          className={styles.bannerError}
          role="alert"
          data-testid="context-error"
        >
          {matchError}
          <div className={styles.statusActions}>
            <button
              type="button"
              className={`${shell.cta} ${shell.ctaSecondary}`}
              data-testid="context-retry"
              onClick={onRetry}
            >
              Réessayer le matching
            </button>
          </div>
        </div>
      ) : null}

      {match && !matching ? (
        <div data-testid="context-result">
          <div className={styles.proposalMeta}>
            <span className={styles.valueChip} data-testid="context-status">
              {statusLabel(match.resultStatus)}
            </span>
            {match.ambiguity ? (
              <span className={styles.valueChip} data-testid="context-ambiguity">
                Ambiguïté
              </span>
            ) : null}
            {analyzeOnly ? (
              <span className={styles.valueChip}>Analyse seule — informatif</span>
            ) : null}
          </div>

          {match.resultStatus === "CONTEXT_UNAVAILABLE" ? (
            <p data-testid="context-unavailable">
              {match.noMatchReason ??
                "Le dépôt Project est indisponible. L’intake reste utilisable."}
            </p>
          ) : null}

          {match.resultStatus === "NO_MATCH" ? (
            <p data-testid="context-no-match">
              {match.noMatchReason ??
                "Aucun projet suffisamment pertinent. Vous pouvez créer manuellement ou reformuler."}
            </p>
          ) : null}

          {match.cycleMatches.length === 0 &&
          match.actionMatches.length === 0 ? (
            <p className={shell.hint} data-testid="context-cycle-action-unavailable">
              Sources Cycle et Action : indisponibles (non simulées).
            </p>
          ) : null}

          {match.projectMatches.length > 0 ? (
            <fieldset className={styles.contextList} data-testid="context-candidates">
              <legend className={styles.composerLabel}>
                Candidats Project (estimation)
              </legend>
              {match.projectMatches.map((m) => {
                const selected =
                  selection?.selectedEntityId === m.entityId &&
                  selection.selectedEntityType === "PROJECT";
                const radioId = `ctx-${m.entityId}`;
                return (
                  <label
                    key={m.entityId}
                    className={`${styles.contextCandidate} ${selected ? styles.contextCandidateSelected : ""}`}
                    htmlFor={radioId}
                    data-testid={`context-candidate-${m.entityId}`}
                  >
                    <input
                      id={radioId}
                      type="radio"
                      name="context-selection"
                      value={m.entityId}
                      checked={!!selected}
                      data-testid={`context-select-${m.entityId}`}
                      onChange={() => {
                        const draft: ContextSelectionDraft = {
                          selectedEntityType: "PROJECT",
                          selectedEntityId: m.entityId,
                          selectedAt: new Date().toISOString(),
                          selectionSource: "USER",
                          userOverrodeRecommendation: true,
                          requiresFinalConfirmation: true,
                        };
                        onSelect(draft);
                        void actionLogContextSelection({
                          sessionLocalId,
                          entityId: m.entityId,
                        });
                      }}
                    />
                    <div className={styles.contextCandidateBody}>
                      <div className={styles.contextCandidateHead}>
                        <strong>{m.label}</strong>
                        <span className={styles.valueChip}>
                          {m.status}
                        </span>
                        <span
                          className={styles.valueChip}
                          data-testid={`context-score-${m.entityId}`}
                        >
                          Score estimé {(m.score * 100).toFixed(0)} % ·{" "}
                          {m.scoreBand}
                        </span>
                      </div>
                      <p>{m.rationale}</p>
                      {m.evidence.length ? (
                        <ul>
                          {m.evidence.map((e) => (
                            <li key={e}>{e}</li>
                          ))}
                        </ul>
                      ) : null}
                      {m.warnings.length ? (
                        <ul className={styles.contextWarnings}>
                          {m.warnings.map((w) => (
                            <li key={w}>{w}</li>
                          ))}
                        </ul>
                      ) : null}
                      <p className={shell.hint}>
                        Action candidate (non exécutée) : {m.recommendedAction}
                      </p>
                      <Link
                        className={`${shell.cta} ${shell.ctaSecondary}`}
                        href={`/projects/${m.entityId}`}
                        data-testid={`context-cockpit-${m.entityId}`}
                      >
                        Ouvrir le cockpit (lecture)
                      </Link>
                    </div>
                  </label>
                );
              })}
            </fieldset>
          ) : null}

          <div className={styles.statusActions}>
            <button
              type="button"
              className={`${shell.cta} ${shell.ctaSecondary}`}
              data-testid="context-none"
              onClick={() => {
                const draft: ContextSelectionDraft = {
                  selectedEntityType: "NONE",
                  selectedEntityId: null,
                  selectedAt: new Date().toISOString(),
                  selectionSource: "USER",
                  userOverrodeRecommendation: true,
                  requiresFinalConfirmation: true,
                };
                onSelect(draft);
                void actionLogContextSelection({
                  sessionLocalId,
                  entityId: null,
                  cleared: true,
                });
              }}
            >
              Aucun de ces projets
            </button>
            {selection ? (
              <button
                type="button"
                className={`${shell.cta} ${shell.ctaSecondary}`}
                data-testid="context-clear"
                onClick={() => {
                  onClearSelection();
                  void actionLogContextSelection({
                    sessionLocalId,
                    entityId: null,
                    cleared: true,
                  });
                }}
              >
                Effacer la sélection
              </button>
            ) : null}
          </div>

          {selection ? (
            <p data-testid="context-selection-draft" className={shell.hint}>
              Sélection temporaire :{" "}
              {selection.selectedEntityType === "NONE"
                ? "aucun projet"
                : selection.selectedEntityId}{" "}
              — non persistée, confirmation finale requise (C4).
            </p>
          ) : null}

          <p className={shell.hint} data-testid="context-no-mutation">
            Aucune mutation : pas de rattachement définitif, pas d’ouverture de
            cycle, pas de création.
          </p>
        </div>
      ) : null}
    </section>
  );
}
