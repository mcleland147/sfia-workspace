"use client";

import { useEffect, useId, useRef, useState, useTransition } from "react";
import Link from "next/link";
import {
  actionExecuteConfirmation,
} from "@/lib/d1/confirmation/actions";
import type {
  BoundedMutationResult,
  ConfirmationActionType,
  ConfirmationSummary,
  ProjectDraftFields,
} from "@/lib/d1/confirmation/types";
import shell from "../d1-shell.module.css";
import styles from "../intake/intake.module.css";

export function ConfirmationPanel({
  actionType,
  proposalId,
  matchId,
  sessionLocalId,
  idempotencyKey,
  initialDraft,
  targetProjectId,
  expectedProjectVersion,
  expectedUpdatedAt,
  projectLabel,
  projectState,
  matchRationale,
  summary,
  onCancel,
  onDone,
}: {
  actionType: ConfirmationActionType;
  proposalId: string;
  matchId: string | null;
  sessionLocalId: string;
  idempotencyKey: string;
  initialDraft: ProjectDraftFields | null;
  targetProjectId: string | null;
  expectedProjectVersion: number | null;
  expectedUpdatedAt: string | null;
  projectLabel?: string;
  projectState?: string;
  matchRationale?: string;
  summary: ConfirmationSummary;
  onCancel: () => void;
  onDone: (result: BoundedMutationResult) => void;
}) {
  const panelId = useId();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [draft, setDraft] = useState<ProjectDraftFields | null>(initialDraft);
  const [pending, startTransition] = useTransition();
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<BoundedMutationResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    titleRef.current?.focus();
  }, []);

  const finalButtonLabel =
    actionType === "CREATE_PROJECT"
      ? "Créer ce projet"
      : actionType === "CONFIRM_EXISTING_PROJECT_CONTEXT"
        ? "Confirmer ce projet pour la suite"
        : actionType === "ANALYZE_ONLY"
          ? "Continuer sans créer"
          : "Annuler";

  function submit() {
    if (busy || pending) return;
    setBusy(true);
    setError(null);
    startTransition(async () => {
      const res = await actionExecuteConfirmation({
        sessionLocalId,
        proposalId,
        matchId,
        actionType,
        targetProjectId,
        projectDraft: actionType === "CREATE_PROJECT" ? draft : null,
        expectedProjectVersion,
        expectedUpdatedAt,
        idempotencyKey,
        explicitConfirmation: true,
      });
      setBusy(false);
      if (!res.ok) {
        setError(res.message);
        return;
      }
      setResult(res.result);
      onDone(res.result);
    });
  }

  return (
    <section
      className={styles.confirmCard}
      data-testid="intake-confirmation"
      aria-labelledby={panelId}
      aria-busy={busy || pending}
    >
      <h2 id={panelId} tabIndex={-1} ref={titleRef}>
        Confirmation — {summary.actionLabel}
      </h2>
      <p className={styles.contextLead} data-testid="confirm-target">
        Cible : <strong>{summary.targetLabel}</strong>
        {projectState ? ` · ${projectState}` : null}
      </p>

      {matchRationale ? (
        <p className={shell.hint} data-testid="confirm-match-rationale">
          {matchRationale}
        </p>
      ) : null}

      {actionType === "CREATE_PROJECT" && draft ? (
        <div className={styles.confirmFields} data-testid="confirm-create-fields">
          <label className={styles.composerLabel} htmlFor={`${panelId}-name`}>
            Nom du projet
          </label>
          <input
            id={`${panelId}-name`}
            className={styles.confirmInput}
            value={draft.name}
            data-testid="confirm-name"
            disabled={busy || !!result}
            onChange={(e) => setDraft({ ...draft, name: e.target.value })}
          />
          <label className={styles.composerLabel} htmlFor={`${panelId}-obj`}>
            Objectif
          </label>
          <textarea
            id={`${panelId}-obj`}
            className={styles.composerArea}
            value={draft.objective}
            data-testid="confirm-objective"
            disabled={busy || !!result}
            onChange={(e) => setDraft({ ...draft, objective: e.target.value })}
          />
          <label className={styles.composerLabel} htmlFor={`${panelId}-ctx`}>
            Contexte initial
          </label>
          <textarea
            id={`${panelId}-ctx`}
            className={styles.composerArea}
            value={draft.initialContextSummary}
            data-testid="confirm-context"
            disabled={busy || !!result}
            onChange={(e) =>
              setDraft({ ...draft, initialContextSummary: e.target.value })
            }
          />
          <label className={styles.confirmCheck}>
            <input
              type="checkbox"
              checked={draft.activate}
              data-testid="confirm-activate"
              disabled={busy || !!result}
              onChange={(e) =>
                setDraft({ ...draft, activate: e.target.checked })
              }
            />
            Activer le projet (ACTIVE)
          </label>
        </div>
      ) : null}

      <div className={styles.proposalSection}>
        <h3>Conséquences</h3>
        <ul data-testid="confirm-consequences">
          {summary.consequences.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
      <div className={styles.proposalSection}>
        <h3>Données concernées</h3>
        <ul data-testid="confirm-data">
          {summary.dataToPersist.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
      {summary.warnings.length ? (
        <div className={styles.bannerWarn} data-testid="confirm-warnings">
          <ul>
            {summary.warnings.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
        </div>
      ) : null}
      {summary.irreversibleEffects.length ? (
        <div className={styles.proposalSection}>
          <h3>Effets durables</h3>
          <ul>
            {summary.irreversibleEffects.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {(busy || pending) && !result ? (
        <div className={styles.loadingRow} role="status" data-testid="confirm-loading">
          Confirmation en cours…
        </div>
      ) : null}

      {error ? (
        <div className={styles.bannerError} role="alert" data-testid="confirm-error">
          {error}
        </div>
      ) : null}

      {result ? (
        <div
          className={
            result.status === "SUCCEEDED" || result.status === "ALREADY_APPLIED"
              ? styles.bannerOk
              : result.status === "NO_MUTATION" || result.status === "CANCELLED"
                ? styles.bannerWarn
                : styles.bannerError
          }
          role="status"
          data-testid="confirm-result"
          data-status={result.status}
        >
          <p>
            Résultat : <strong>{result.status}</strong>
            {result.idempotentReplay ? " (replay idempotent)" : null}
          </p>
          {result.projectId ? (
            <p data-testid="confirm-project-id">Project : {result.projectId}</p>
          ) : null}
          {result.persistenceNote ? (
            <p data-testid="confirm-persistence-note">{result.persistenceNote}</p>
          ) : null}
          {result.warnings.map((w) => (
            <p key={w}>{w}</p>
          ))}
          {result.projectId &&
          (result.status === "SUCCEEDED" ||
            result.status === "ALREADY_APPLIED" ||
            result.status === "NO_MUTATION") ? (
            <Link
              className={shell.cta}
              href={`/projects/${result.projectId}`}
              data-testid="confirm-open-cockpit"
            >
              Ouvrir le cockpit (lecture)
            </Link>
          ) : null}
        </div>
      ) : null}

      {!result ? (
        <div className={styles.statusActions}>
          <button
            type="button"
            className={shell.cta}
            data-testid="confirm-submit"
            disabled={busy || pending}
            onClick={submit}
          >
            {finalButtonLabel}
          </button>
          <button
            type="button"
            className={`${shell.cta} ${shell.ctaSecondary}`}
            data-testid="confirm-cancel"
            disabled={busy || pending}
            onClick={onCancel}
          >
            Annuler
          </button>
        </div>
      ) : (
        <div className={styles.statusActions}>
          <button
            type="button"
            className={`${shell.cta} ${shell.ctaSecondary}`}
            data-testid="confirm-dismiss"
            onClick={onCancel}
          >
            Fermer
          </button>
        </div>
      )}

      <p className={shell.hint} data-testid="confirm-no-cycle-action">
        Aucun Cycle ni Action ne sera créé. GPT ne déclenche pas la mutation.
      </p>
    </section>
  );
}
