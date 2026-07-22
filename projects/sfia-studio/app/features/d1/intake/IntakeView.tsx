"use client";

import { useEffect, useId, useMemo, useState, useTransition } from "react";
import Link from "next/link";
import type { D1Project } from "@/lib/d1/types";
import type {
  IntakeClarificationTurn,
  RequestRoutingProposal,
} from "@/lib/d1/intake/types";
import {
  actionAnalyzeIntent,
  actionCancelIntakeSession,
  actionLogClarificationAnswer,
} from "@/lib/d1/intake/actions";
import {
  actionMatchExistingContext,
} from "@/lib/d1/context/actions";
import type {
  ContextMatchResult,
  ContextSelectionDraft,
} from "@/lib/d1/context/types";
import { logIntakeEvent } from "@/lib/d1/intakeObservability";
import { D1AppShell } from "../D1AppShell";
import { IntakeContextRail } from "./IntakeContextRail";
import { ContextMatchPanel } from "./ContextMatchPanel";
import {
  actionPrepareExistingProjectSummary,
} from "@/lib/d1/confirmation/actions";
import type {
  BoundedMutationResult,
  ConfirmationActionType,
  ConfirmationSummary,
  ProjectDraftFields,
} from "@/lib/d1/confirmation/types";
import { buildConfirmationSummary } from "@/lib/d1/confirmation/summary";
import { ConfirmationPanel } from "../confirmation/ConfirmationPanel";
import shell from "../d1-shell.module.css";
import styles from "./intake.module.css";

const EXAMPLES = [
  "Je veux lancer une application de suivi des contrats.",
  "Je veux travailler sur la gestion des utilisateurs.",
  "Analyse cette idée, mais ne crée rien.",
  "J’ai un nouveau sujet.",
  "Je veux reprendre Campus360 pour la gestion des utilisateurs.",
] as const;

type Phase =
  | "empty"
  | "draft"
  | "analyzing"
  | "clarification"
  | "proposal"
  | "analyze_only"
  | "undetermined"
  | "confirming"
  | "confirmed"
  | "error";

function outcomeLabel(outcome: string): string {
  switch (outcome) {
    case "CREATE_PROJECT_CANDIDATE":
      return "Créer un projet (proposition)";
    case "OPEN_CYCLE_CANDIDATE":
      return "Ouvrir un cycle (proposition)";
    case "ANALYZE_ONLY":
      return "Analyse seule";
    case "NEED_CLARIFICATION":
      return "Clarification requise";
    case "UNDETERMINED":
      return "Indéterminé";
    default:
      return outcome;
  }
}

export function IntakeView({ projects }: { projects: D1Project[] }) {
  const composerId = useId();
  const helpId = useId();
  const liveId = useId();
  const clarifyId = useId();
  const sessionLocalId = useMemo(
    () => `intake-local-${crypto.randomUUID().slice(0, 8)}`,
    [],
  );
  const [intent, setIntent] = useState("");
  const [phase, setPhase] = useState<Phase>("empty");
  const [proposal, setProposal] = useState<RequestRoutingProposal | null>(null);
  const [turns, setTurns] = useState<IntakeClarificationTurn[]>([]);
  const [clarifyAnswer, setClarifyAnswer] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [providerMode, setProviderMode] = useState<"fake" | "live" | null>(
    null,
  );
  const [pending, startTransition] = useTransition();
  const [busy, setBusy] = useState(false);
  const [contextMatch, setContextMatch] = useState<ContextMatchResult | null>(
    null,
  );
  const [contextMatching, setContextMatching] = useState(false);
  const [contextError, setContextError] = useState<string | null>(null);
  const [selection, setSelection] = useState<ContextSelectionDraft | null>(
    null,
  );
  const [confirmAction, setConfirmAction] =
    useState<ConfirmationActionType | null>(null);
  const [confirmSummary, setConfirmSummary] =
    useState<ConfirmationSummary | null>(null);
  const [confirmDraft, setConfirmDraft] = useState<ProjectDraftFields | null>(
    null,
  );
  const [confirmTargetId, setConfirmTargetId] = useState<string | null>(null);
  const [confirmExpectedVersion, setConfirmExpectedVersion] = useState<
    number | null
  >(null);
  const [confirmExpectedUpdatedAt, setConfirmExpectedUpdatedAt] = useState<
    string | null
  >(null);
  const [confirmProjectLabel, setConfirmProjectLabel] = useState<string | undefined>();
  const [confirmProjectState, setConfirmProjectState] = useState<string | undefined>();
  const [confirmMatchRationale, setConfirmMatchRationale] = useState<
    string | undefined
  >();
  const [mutationResult, setMutationResult] =
    useState<BoundedMutationResult | null>(null);
  const [idempotencyKey, setIdempotencyKey] = useState(
    () => `idem-intake-${crypto.randomUUID()}`,
  );

  const locked =
    busy ||
    pending ||
    phase === "analyzing" ||
    phase === "clarification" ||
    phase === "proposal" ||
    phase === "analyze_only" ||
    phase === "undetermined" ||
    phase === "confirming" ||
    phase === "confirmed";

  useEffect(() => {
    logIntakeEvent("intake_opened", { sessionLocalId });
  }, [sessionLocalId]);

  function focusComposer() {
    document.getElementById(composerId)?.focus();
  }

  function clearContextState() {
    setContextMatch(null);
    setContextMatching(false);
    setContextError(null);
    setSelection(null);
    setConfirmAction(null);
    setConfirmSummary(null);
    setConfirmDraft(null);
    setConfirmTargetId(null);
    setConfirmExpectedVersion(null);
    setConfirmExpectedUpdatedAt(null);
    setConfirmProjectLabel(undefined);
    setConfirmProjectState(undefined);
    setConfirmMatchRationale(undefined);
    setMutationResult(null);
  }

  function resetAll() {
    setPhase("empty");
    setIntent("");
    setProposal(null);
    setTurns([]);
    setClarifyAnswer("");
    setErrorMessage(null);
    setProviderMode(null);
    clearContextState();
    setIdempotencyKey(`idem-intake-${crypto.randomUUID()}`);
    void actionCancelIntakeSession(sessionLocalId);
    focusComposer();
  }

  function applyExample(text: string) {
    if (locked && phase !== "error" && phase !== "empty" && phase !== "draft") {
      return;
    }
    setIntent(text);
    setPhase("draft");
    setProposal(null);
    setErrorMessage(null);
    setTurns([]);
    clearContextState();
  }

  function runContextMatch(nextProposal: RequestRoutingProposal) {
    if (nextProposal.status === "CLARIFICATION_REQUIRED") {
      clearContextState();
      return;
    }
    setContextMatching(true);
    setContextError(null);
    setSelection(null);
    const forceUnavailable =
      typeof window !== "undefined" &&
      new URLSearchParams(window.location.search).get(
        "forceContextUnavailable",
      ) === "1";
    startTransition(async () => {
      const result = await actionMatchExistingContext({
        sessionLocalId,
        proposal: {
          proposalId: nextProposal.proposalId,
          rawIntent: nextProposal.rawIntent,
          normalizedIntent: nextProposal.normalizedIntent,
          subject: nextProposal.subject,
          proposedObjective: nextProposal.proposedObjective,
          proposedOutcomeType: nextProposal.proposedOutcomeType,
        },
        forceUnavailable,
      });
      setContextMatching(false);
      if (!result.ok) {
        setContextMatch(null);
        setContextError(result.message);
        return;
      }
      setContextMatch(result.match);
      requestAnimationFrame(() => {
        document
          .querySelector('[data-testid="intake-context"]')
          ?.scrollIntoView({ block: "nearest" });
      });
    });
  }

  function runAnalysis(nextTurns: IntakeClarificationTurn[]) {
    const trimmed = intent.trim();
    if (!trimmed || busy) return;
    setBusy(true);
    setPhase("analyzing");
    setErrorMessage(null);
    clearContextState();
    startTransition(async () => {
      const result = await actionAnalyzeIntent({
        sessionLocalId,
        rawIntent: trimmed,
        clarificationTurns: nextTurns,
      });
      setBusy(false);
      if (!result.ok) {
        setPhase("error");
        setErrorMessage(result.message);
        setProposal(null);
        return;
      }
      setProviderMode(result.providerMode);
      setProposal(result.proposal);
      setTurns(nextTurns);
      if (result.proposal.status === "CLARIFICATION_REQUIRED") {
        setPhase("clarification");
        setClarifyAnswer("");
        requestAnimationFrame(() => {
          document.getElementById(clarifyId)?.focus();
        });
      } else if (result.proposal.status === "ANALYSIS_ONLY") {
        setPhase("analyze_only");
        runContextMatch(result.proposal);
      } else if (result.proposal.status === "UNDETERMINED") {
        setPhase("undetermined");
        runContextMatch(result.proposal);
      } else {
        setPhase("proposal");
        runContextMatch(result.proposal);
      }
    });
  }

  function onSubmitIntent(e: React.FormEvent) {
    e.preventDefault();
    if (!intent.trim()) return;
    logIntakeEvent("intake_intent_submitted", {
      sessionLocalId,
      intentLength: intent.trim().length,
      status: "analyze",
    });
    runAnalysis([]);
  }

  function onSubmitClarification(e: React.FormEvent) {
    e.preventDefault();
    const answer = clarifyAnswer.trim();
    if (!answer || !proposal?.clarificationQuestion) return;
    const nextTurns: IntakeClarificationTurn[] = [
      ...turns,
      { role: "assistant", content: proposal.clarificationQuestion },
      { role: "user", content: answer },
    ];
    void actionLogClarificationAnswer({
      sessionLocalId,
      answerLength: answer.length,
    });
    runAnalysis(nextTurns);
  }

  const showProposal =
    proposal &&
    (phase === "proposal" ||
      phase === "analyze_only" ||
      phase === "undetermined" ||
      phase === "confirming" ||
      phase === "confirmed");

  const rail = (
    <IntakeContextRail
      hasSubmitted={
        phase === "proposal" ||
        phase === "analyze_only" ||
        phase === "clarification" ||
        phase === "undetermined"
      }
      recentCount={projects.length}
      phase={
        contextMatching
          ? "matching"
          : phase === "confirming"
            ? "confirming"
            : phase === "confirmed"
              ? "confirmed"
              : contextMatch
                ? "matched"
                : phase
      }
      providerMode={providerMode}
    />
  );

  return (
    <D1AppShell active="intake" title="Nouvelle demande" rail={rail}>
      <header className={styles.hero}>
        <h1>Nouvelle demande</h1>
        <p className={styles.heroLead}>
          Décrivez ce que vous voulez faire. Studio comprend, clarifie si besoin
          et propose une suite structurée — vous gardez la décision finale.
        </p>
        <div className={styles.valueStrip} aria-label="Proposition de valeur">
          <span className={styles.valueChip}>Intent-first</span>
          <span className={styles.valueChip}>Proposition non exécutée</span>
          <span className={styles.valueChip}>Confirmation humaine</span>
        </div>
      </header>

      <div
        className={styles.quickActions}
        role="group"
        aria-label="Actions principales"
      >
        <button
          type="button"
          className={`${styles.quickBtn} ${styles.quickBtnPrimary}`}
          onClick={focusComposer}
          data-testid="quick-describe"
          disabled={busy}
        >
          Décrire un nouveau besoin
        </button>
        <Link
          className={styles.quickBtn}
          href="/projects/new"
          data-testid="quick-manual"
          onClick={() =>
            logIntakeEvent("intake_manual_creation_opened", { sessionLocalId })
          }
        >
          Créer manuellement
        </Link>
      </div>

      <div aria-live="polite" aria-atomic="true" id={liveId}>
        {phase === "analyzing" ? (
          <div className={styles.loadingRow} data-testid="intake-loading">
            Analyse de votre intention en cours…
          </div>
        ) : null}
        {errorMessage ? (
          <div
            className={styles.bannerError}
            role="alert"
            data-testid="intake-error"
          >
            {errorMessage}
          </div>
        ) : null}
      </div>

      {showProposal ? (
        <section
          className={styles.proposalCard}
          data-testid="intake-proposal"
          aria-label="Proposition structurée"
        >
          <div className={styles.bannerWarn} data-testid="intake-no-mutation">
            Proposition uniquement — aucune action n’a été exécutée. Aucun
            projet ni cycle n’a été créé.
          </div>
          <h2>Ce que Studio a compris</h2>
          <div className={styles.proposalMeta}>
            <span className={styles.valueChip} data-testid="proposal-outcome">
              {outcomeLabel(proposal.proposedOutcomeType)}
            </span>
            <span className={styles.valueChip} data-testid="proposal-confidence">
              Confiance estimée {(proposal.confidence * 100).toFixed(0)} %
            </span>
            {providerMode ? (
              <span className={shell.hint}>mode {providerMode}</span>
            ) : null}
          </div>
          <div className={styles.proposalSection}>
            <h3>Intention normalisée</h3>
            <p data-testid="proposal-normalized">{proposal.normalizedIntent}</p>
          </div>
          <div className={styles.proposalSection}>
            <h3>Objectif proposé</h3>
            <p data-testid="proposal-objective">{proposal.proposedObjective}</p>
          </div>
          <div className={styles.proposalSection}>
            <h3>Pourquoi</h3>
            <p data-testid="proposal-rationale">{proposal.rationale}</p>
          </div>
          {proposal.assumptions.length ? (
            <div className={styles.proposalSection}>
              <h3>Hypothèses</h3>
              <ul data-testid="proposal-assumptions">
                {proposal.assumptions.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          ) : null}
          {proposal.missingInformation.length ? (
            <div className={styles.proposalSection}>
              <h3>Informations manquantes</h3>
              <ul data-testid="proposal-missing">
                {proposal.missingInformation.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>
          ) : null}
          {proposal.alternatives.length ? (
            <div className={styles.proposalSection}>
              <h3>Alternatives</h3>
              <ul data-testid="proposal-alternatives">
                {proposal.alternatives.map((alt) => (
                  <li key={alt.label}>
                    <strong>{alt.label}</strong> — {alt.rationale}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          <div className={styles.statusActions}>
            <button
              type="button"
              className={`${shell.cta} ${shell.ctaSecondary}`}
              data-testid="intake-reformulate"
              onClick={() => {
                setPhase("draft");
                setProposal(null);
                setTurns([]);
                clearContextState();
                focusComposer();
              }}
            >
              Reformuler
            </button>
            <button
              type="button"
              className={`${shell.cta} ${shell.ctaSecondary}`}
              data-testid="intake-restart"
              onClick={resetAll}
            >
              Recommencer
            </button>
            <Link
              className={shell.cta}
              href="/projects/new"
              data-testid="intake-goto-manual"
            >
              Créer manuellement
            </Link>
          </div>
          <p className={shell.hint} data-testid="intake-no-confirm-exec">
            La confirmation humaine bornée (C4) est disponible après le matching
            contexte — aucune mutation avant votre clic final.
          </p>
        </section>
      ) : null}

      {showProposal ? (
        <div aria-live="polite">
          <ContextMatchPanel
            match={contextMatch}
            matching={contextMatching}
            matchError={contextError}
            selection={selection}
            sessionLocalId={sessionLocalId}
            analyzeOnly={phase === "analyze_only"}
            onSelect={setSelection}
            onClearSelection={() => setSelection(null)}
            onRetry={() => {
              if (proposal) runContextMatch(proposal);
            }}
          />
        </div>
      ) : null}

      {showProposal &&
      contextMatch &&
      !contextMatching &&
      phase !== "confirming" &&
      phase !== "confirmed" ? (
        <div
          className={styles.statusActions}
          data-testid="intake-c4-actions"
          style={{ marginBottom: 16 }}
        >
          {phase === "analyze_only" ? (
            <button
              type="button"
              className={shell.cta}
              data-testid="prepare-analyze-only"
              onClick={() => {
                const summary = buildConfirmationSummary({
                  actionType: "ANALYZE_ONLY",
                });
                setConfirmAction("ANALYZE_ONLY");
                setConfirmSummary(summary);
                setConfirmDraft(null);
                setConfirmTargetId(null);
                setPhase("confirming");
              }}
            >
              Continuer sans créer
            </button>
          ) : null}
          {selection?.selectedEntityType === "PROJECT" &&
          selection.selectedEntityId ? (
            <button
              type="button"
              className={shell.cta}
              data-testid="prepare-confirm-existing"
              onClick={() => {
                const entityId = selection.selectedEntityId!;
                const match = contextMatch.projectMatches.find(
                  (m) => m.entityId === entityId,
                );
                startTransition(async () => {
                  const prepared =
                    await actionPrepareExistingProjectSummary({
                      projectId: entityId,
                    });
                  if (!prepared.ok) {
                    setContextError(prepared.message);
                    return;
                  }
                  setConfirmAction("CONFIRM_EXISTING_PROJECT_CONTEXT");
                  setConfirmSummary(prepared.summary);
                  setConfirmTargetId(prepared.project.projectId);
                  setConfirmExpectedVersion(prepared.project.version);
                  setConfirmExpectedUpdatedAt(prepared.project.updatedAt);
                  setConfirmProjectLabel(prepared.project.name);
                  setConfirmProjectState(prepared.project.state);
                  setConfirmMatchRationale(match?.rationale);
                  setConfirmDraft(null);
                  setPhase("confirming");
                });
              }}
            >
              Préparer confirmation du projet
            </button>
          ) : null}
          {phase !== "analyze_only" &&
          (selection == null ||
            selection.selectedEntityType === "NONE" ||
            contextMatch.resultStatus === "NO_MATCH") ? (
            <button
              type="button"
              className={shell.cta}
              data-testid="prepare-create-project"
              onClick={() => {
                const draft: ProjectDraftFields = {
                  name: proposal?.subject?.slice(0, 200) || "Nouveau projet",
                  objective:
                    proposal?.proposedObjective?.slice(0, 2000) ||
                    "Objectif à préciser",
                  initialContextSummary: (
                    proposal?.normalizedIntent ??
                    intent
                  ).slice(0, 4000),
                  activate: true,
                };
                const summary = buildConfirmationSummary({
                  actionType: "CREATE_PROJECT",
                  draft,
                });
                setConfirmAction("CREATE_PROJECT");
                setConfirmSummary(summary);
                setConfirmDraft(draft);
                setConfirmTargetId(null);
                setPhase("confirming");
              }}
            >
              Préparer création de projet
            </button>
          ) : null}
        </div>
      ) : null}

      {(phase === "confirming" || phase === "confirmed") &&
      confirmAction &&
      confirmSummary &&
      proposal ? (
        <div aria-live="polite">
          <ConfirmationPanel
            actionType={confirmAction}
            proposalId={proposal.proposalId}
            matchId={contextMatch?.matchId ?? null}
            sessionLocalId={sessionLocalId}
            idempotencyKey={idempotencyKey}
            initialDraft={confirmDraft}
            targetProjectId={confirmTargetId}
            expectedProjectVersion={confirmExpectedVersion}
            expectedUpdatedAt={confirmExpectedUpdatedAt}
            projectLabel={confirmProjectLabel}
            projectState={confirmProjectState}
            matchRationale={confirmMatchRationale}
            summary={confirmSummary}
            onCancel={() => {
              setConfirmAction(null);
              setConfirmSummary(null);
              setMutationResult(null);
              setPhase(
                proposal.status === "ANALYSIS_ONLY"
                  ? "analyze_only"
                  : "proposal",
              );
            }}
            onDone={(result) => {
              setMutationResult(result);
              if (result.actionType === "CANCEL" || result.status === "CANCELLED") {
                setConfirmAction(null);
                setConfirmSummary(null);
                setPhase(
                  proposal.status === "ANALYSIS_ONLY"
                    ? "analyze_only"
                    : "proposal",
                );
                return;
              }
              setPhase("confirmed");
            }}
          />
        </div>
      ) : null}

      {phase === "clarification" && proposal?.clarificationQuestion ? (
        <form
          className={styles.clarificationBox}
          onSubmit={onSubmitClarification}
          data-testid="intake-clarification"
        >
          <h2>Clarification</h2>
          <p data-testid="clarification-question">
            {proposal.clarificationQuestion}
          </p>
          <label className={styles.composerLabel} htmlFor={clarifyId}>
            Votre réponse
          </label>
          <textarea
            id={clarifyId}
            className={styles.composerArea}
            value={clarifyAnswer}
            onChange={(e) => setClarifyAnswer(e.target.value)}
            data-testid="clarification-answer"
            disabled={busy}
          />
          <div className={styles.composerActions}>
            <button
              type="submit"
              className={shell.cta}
              disabled={!clarifyAnswer.trim() || busy}
              data-testid="clarification-submit"
            >
              Répondre
            </button>
            <button
              type="button"
              className={`${shell.cta} ${shell.ctaSecondary}`}
              data-testid="intake-cancel"
              onClick={resetAll}
            >
              Annuler
            </button>
          </div>
        </form>
      ) : null}

      {(phase === "empty" ||
        phase === "draft" ||
        phase === "error" ||
        phase === "analyzing") && (
        <form
          className={styles.composer}
          onSubmit={onSubmitIntent}
          data-testid="intake-composer"
          aria-describedby={helpId}
        >
          <label className={styles.composerLabel} htmlFor={composerId}>
            Votre intention
          </label>
          <p className={styles.composerHelp} id={helpId}>
            Écrivez librement. Studio qualifiera votre demande et proposera une
            suite — sans exécuter de mutation.
          </p>
          <textarea
            id={composerId}
            className={styles.composerArea}
            name="intent"
            value={intent}
            onChange={(e) => {
              setIntent(e.target.value);
              if (phase === "error") setPhase(e.target.value.trim() ? "draft" : "empty");
              else if (phase !== "analyzing") {
                setPhase(e.target.value.trim() ? "draft" : "empty");
              }
            }}
            placeholder="Ex. « Je veux lancer un suivi des contrats. »"
            data-testid="intake-intent"
            aria-required
            disabled={busy || phase === "analyzing"}
          />
          <div className={styles.examples} aria-label="Exemples d’intentions">
            {EXAMPLES.map((ex) => (
              <button
                key={ex}
                type="button"
                className={styles.exampleBtn}
                onClick={() => applyExample(ex)}
                disabled={busy}
              >
                {ex}
              </button>
            ))}
          </div>
          <div className={styles.composerActions}>
            <button
              type="submit"
              className={shell.cta}
              disabled={!intent.trim() || busy}
              data-testid="intake-submit"
            >
              Envoyer
            </button>
            {phase === "error" ? (
              <button
                type="button"
                className={`${shell.cta} ${shell.ctaSecondary}`}
                data-testid="intake-retry"
                disabled={!intent.trim() || busy}
                onClick={() => runAnalysis(turns)}
              >
                Réessayer
              </button>
            ) : null}
            <button
              type="button"
              className={`${shell.cta} ${shell.ctaSecondary}`}
              data-testid="intake-cancel"
              onClick={resetAll}
              disabled={busy}
            >
              Annuler
            </button>
          </div>
        </form>
      )}

      <div className={styles.manualBanner}>
        <p>
          Alternative : créer un projet avec un formulaire court. Pour
          retrouver un projet existant, utilisez le Workspace.
        </p>
        <Link
          className={`${shell.cta} ${shell.ctaSecondary}`}
          href="/projects/new"
          data-testid="manual-creation-entry"
        >
          Créer manuellement
        </Link>
      </div>
    </D1AppShell>
  );
}
