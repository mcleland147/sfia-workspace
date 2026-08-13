"use client";

import { useEffect, useId, useRef, useState, useTransition } from "react";
import { StatusPill } from "@/components/ui/StatusPill";
import {
  projectAssistantConfirmAndExecuteF3FixtureAction,
  projectAssistantDecideAction,
  projectAssistantPrepareF3FixtureAction,
  projectAssistantSendAction,
} from "./actions";
import type {
  AssistantHistoryMessage,
  AssistantToolEventDto,
  F2TurnPayload,
} from "./types";
import type { F2DecisionKind, ProposalDto } from "./f2/types";
import type { F3ExecutePayload, F3PreparePayload } from "./f3/types";
import styles from "./project-assistant.module.css";

type UiMessage = {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
};

type UiState =
  | "INITIAL"
  | "READY"
  | "SENDING"
  | "ASSISTANT_WORKING"
  | "SOURCE_LOOKUP"
  | "ANSWERED"
  | "ERROR_RECOVERABLE"
  | "BLOCKED";

function nextId(prefix: string): string {
  return `${prefix}-${Math.random().toString(36).slice(2, 10)}`;
}

function statusLabel(status: AssistantToolEventDto["status"]): string {
  switch (status) {
    case "succeeded":
      return "Succès (lecture)";
    case "denied":
      return "Refus policy";
    case "failed":
      return "Échec";
    case "started":
      return "En cours";
    default:
      return "Demandé";
  }
}

function modeFromResult(result: {
  presentation?: string;
  mode?: string;
  model?: string | null;
}): string {
  if (result.presentation === "test_provider" || result.mode === "fixture") {
    const model = result.model ? ` · ${result.model}` : "";
    return `Mode démonstration / Fixture${model}`;
  }
  if (result.presentation === "openai_live" || result.mode === "live") {
    const model = result.model ? ` · ${result.model}` : "";
    return `Mode live${model}`;
  }
  if (result.mode === "unavailable") return "Assistant indisponible";
  return "MODE À CONFIRMER";
}

export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
  const inputId = useId();
  const liveRegionId = useId();
  const [messages, setMessages] = useState<UiMessage[]>([]);
  const [draft, setDraft] = useState("");
  const [toolEvents, setToolEvents] = useState<AssistantToolEventDto[]>([]);
  const [uiState, setUiState] = useState<UiState>("INITIAL");
  const [error, setError] = useState<string | null>(null);
  const [modeLabel, setModeLabel] = useState("MODE À CONFIRMER");
  const [ephemeralNotice, setEphemeralNotice] = useState(
    "Conversation et Proposal F2 restent process-local ; Project/LPS/Cycle linkage M2 est persisté dans Product SQLite.",
  );
  const [f2, setF2] = useState<F2TurnPayload | null>(null);
  const [activeProposal, setActiveProposal] = useState<ProposalDto | null>(null);
  const [reservesText, setReservesText] = useState("");
  const [f3Prepare, setF3Prepare] = useState<F3PreparePayload | null>(null);
  const [f3Execute, setF3Execute] = useState<F3ExecutePayload | null>(null);
  const [f3Busy, setF3Busy] = useState(false);
  const [isPending, startTransition] = useTransition();
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setUiState((prev) => (prev === "INITIAL" ? "READY" : prev));
  }, []);

  useEffect(() => {
    const el = listRef.current;
    if (!el || typeof el.scrollTo !== "function") return;
    el.scrollTo({
      top: el.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, toolEvents, error, activeProposal, f2, f3Prepare, f3Execute]);

  const busy =
    isPending ||
    f3Busy ||
    uiState === "SENDING" ||
    uiState === "ASSISTANT_WORKING" ||
    uiState === "SOURCE_LOOKUP";
  const blocked = uiState === "BLOCKED";
  const canSend = !busy && !blocked && draft.trim().length > 0;
  const gateOpen =
    activeProposal?.morrisGateRequired === true &&
    activeProposal.status === "DECISION_REQUIRED";

  function historyForRequest(): AssistantHistoryMessage[] {
    return messages
      .filter((m) => m.role === "user" || m.role === "assistant")
      .map((m) => ({ role: m.role as "user" | "assistant", content: m.content }));
  }

  function sendMessage(contentOverride?: string) {
    const content = (contentOverride ?? draft).trim();
    if (!content || busy || blocked) return;

    const userMessage: UiMessage = {
      id: nextId("user"),
      role: "user",
      content,
    };
    const history = historyForRequest();
    setMessages((prev) => [...prev, userMessage]);
    setDraft("");
    setError(null);
    setUiState("SENDING");

    startTransition(async () => {
      setUiState("ASSISTANT_WORKING");
      const result = await projectAssistantSendAction({
        projectId,
        content,
        history,
      });

      if (!result.ok) {
        if (result.status === "provider_unavailable") {
          setUiState("BLOCKED");
          setModeLabel("Assistant indisponible");
        } else {
          setUiState("ERROR_RECOVERABLE");
        }
        setError(result.message);
        return;
      }

      setModeLabel(modeFromResult(result));
      setEphemeralNotice(result.ephemeralNotice);
      setToolEvents((prev) => [...prev, ...result.toolEvents]);
      if (result.toolEvents.length > 0) {
        setUiState("SOURCE_LOOKUP");
      }
      setMessages((prev) => [
        ...prev,
        {
          id: nextId("assistant"),
          role: "assistant",
          content: result.text,
        },
      ]);
      if (result.f2) {
        setF2(result.f2);
        setActiveProposal(result.f2.proposal);
      } else {
        setF2(null);
        setActiveProposal(null);
      }
      setUiState("ANSWERED");
    });
  }

  function decide(kind: F2DecisionKind) {
    if (!activeProposal || busy || blocked) return;
    startTransition(async () => {
      setUiState("ASSISTANT_WORKING");
      setError(null);
      const result = await projectAssistantDecideAction({
        projectId,
        proposalId: activeProposal.proposalId,
        decisionKind: kind,
        reservesText: kind === "GO_WITH_RESERVES" ? reservesText : null,
      });
      if (!result.ok) {
        setUiState("ERROR_RECOVERABLE");
        setError(result.message);
        if (result.proposal) setActiveProposal(result.proposal);
        return;
      }
      setModeLabel(modeFromResult(result));
      setEphemeralNotice(result.ephemeralNotice);
      setF2(result.f2);
      setActiveProposal(result.f2.proposal);
      setMessages((prev) => [
        ...prev,
        {
          id: nextId("assistant"),
          role: "assistant",
          content: result.text,
        },
      ]);
      setUiState("ANSWERED");
    });
  }

  const canPrepareF3 =
    Boolean(f2?.decision?.readyForNextGatedStep) &&
    Boolean(f2?.decision?.decisionId) &&
    Boolean(activeProposal) &&
    !f3Prepare &&
    !f3Execute &&
    !busy &&
    !blocked;

  const canConfirmF3 =
    Boolean(f3Prepare) &&
    !f3Execute &&
    !busy &&
    !blocked;

  function prepareF3() {
    if (!canPrepareF3 || !activeProposal || !f2?.decision) return;
    if (f3Busy) return;
    setF3Busy(true);
    startTransition(async () => {
      setError(null);
      const result = await projectAssistantPrepareF3FixtureAction({
        projectId,
        proposalId: activeProposal.proposalId,
        decisionId: f2.decision!.decisionId,
      });
      setF3Busy(false);
      if (!result.ok) {
        setUiState("ERROR_RECOVERABLE");
        setError(result.message);
        if (result.proposal) setActiveProposal(result.proposal);
        return;
      }
      setF3Prepare(result.f3);
      setF3Execute(null);
      setEphemeralNotice(result.ephemeralNotice);
      setMessages((prev) => [
        ...prev,
        {
          id: nextId("assistant"),
          role: "assistant",
          content: result.text,
        },
      ]);
      setUiState("ANSWERED");
    });
  }

  function confirmAndExecuteF3() {
    if (!canConfirmF3 || !f3Prepare || !activeProposal) return;
    if (f3Busy) return;
    setF3Busy(true);
    startTransition(async () => {
      setError(null);
      const result = await projectAssistantConfirmAndExecuteF3FixtureAction({
        projectId,
        proposalId: activeProposal.proposalId,
        decisionId: f3Prepare.decisionId,
        executionContractId: f3Prepare.contract.executionContractId,
        expectedContractVersion: f3Prepare.contract.version,
      });
      setF3Busy(false);
      if (!result.ok) {
        setUiState("ERROR_RECOVERABLE");
        setError(result.message);
        if (result.proposal) setActiveProposal(result.proposal);
        return;
      }
      setF3Execute(result.f3);
      setEphemeralNotice(result.ephemeralNotice);
      setMessages((prev) => [
        ...prev,
        {
          id: nextId("assistant"),
          role: "assistant",
          content: result.text,
        },
      ]);
      setUiState("ANSWERED");
    });
  }


  return (
    <div
      className={styles.root}
      data-testid="project-assistant-panel"
      data-ui-state={uiState}
    >
      <div className={styles.metaRow} data-testid="project-assistant-mode-pill">
        <StatusPill tone="blueFlush">{modeLabel}</StatusPill>
        <StatusPill tone="muted">Lecture seule</StatusPill>
        <StatusPill tone="muted">AUCUNE EXÉCUTION</StatusPill>
      </div>
      <p className={styles.ephemeral} data-testid="project-assistant-ephemeral">
        {ephemeralNotice}
      </p>
      <p className={styles.scope} data-testid="project-assistant-scope">
        Périmètre F1+F2+F3 fixture : analyse · conversation · lecture · qualification ·
        proposition · gate humain · prepare/confirm fixture. Pas d&apos;exécution Cursor REAL,
        pas d&apos;écriture Git produit, pas de destination OPS1.
      </p>

      <div
        ref={listRef}
        className={styles.messages}
        data-testid="project-assistant-messages"
        aria-live="polite"
        id={liveRegionId}
      >
        {messages.length === 0 ? (
          <p
            className={styles.empty}
            data-testid="project-assistant-empty"
          >
            Posez une question sur ce projet. Le contexte Project/LPS est injecté
            automatiquement.
          </p>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className={
                message.role === "user"
                  ? styles.userTurn
                  : styles.assistantTurn
              }
              data-testid={`project-assistant-turn-${message.role}`}
              data-role={message.role}
            >
              <p className={styles.turnRole}>
                {message.role === "user" ? "Vous" : "Assistant"}
              </p>
              <p className={styles.turnText}>{message.content}</p>
            </div>
          ))
        )}
      </div>

      {f2 ? (
        <div
          className={styles.f2Labels}
          data-testid="project-assistant-f2-labels"
          aria-live="polite"
        >
          {f2.labels.recommendation ? (
            <StatusPill tone="blueFlush">{f2.labels.recommendation}</StatusPill>
          ) : null}
          {f2.labels.proposition ? (
            <StatusPill tone="blueFlush">{f2.labels.proposition}</StatusPill>
          ) : null}
          {f2.labels.decisionRequired ? (
            <StatusPill tone="orange">{f2.labels.decisionRequired}</StatusPill>
          ) : null}
          {f2.labels.decisionTaken ? (
            <StatusPill tone="green">{f2.labels.decisionTaken}</StatusPill>
          ) : null}
          <StatusPill tone="muted">{f2.labels.noExecution}</StatusPill>
        </div>
      ) : null}

      {f2?.qualification ? (
        <section
          className={styles.qualificationCard}
          data-testid="project-assistant-qualification"
          aria-labelledby="f2-qualification-title"
        >
          <h3 id="f2-qualification-title" className={styles.cardTitle}>
            RECOMMANDATION
          </h3>
          <p className={styles.cardMeta}>
            {f2.qualification.recommendationLabel}
          </p>
          <dl className={styles.cardDl}>
            <div>
              <dt>Cycle SFIA</dt>
              <dd data-testid="f2-cycle">
                {f2.qualification.cycleTypeId} — {f2.qualification.cycleLabel}
              </dd>
            </div>
            <div>
              <dt>Profil recommandé</dt>
              <dd data-testid="f2-profile">{f2.qualification.recommendedProfile}</dd>
            </div>
            {f2.qualification.cycleInstanceId ? (
              <div>
                <dt>CycleInstance</dt>
                <dd data-testid="f2-cycle-instance">
                  {f2.qualification.cycleInstanceId}
                  {f2.qualification.cycleStatus
                    ? ` · ${f2.qualification.cycleStatus}`
                    : ""}
                </dd>
              </div>
            ) : null}
            {f2.qualification.ckcResolutionRef ? (
              <div>
                <dt>CKC ref</dt>
                <dd data-testid="f2-ckc-ref">
                  {f2.qualification.ckcResolutionRef}
                </dd>
              </div>
            ) : null}
            <div>
              <dt>Rationale</dt>
              <dd data-testid="f2-rationale">{f2.qualification.rationale}</dd>
            </div>
            <div>
              <dt>Provenance</dt>
              <dd data-testid="f2-qualification-provenance">
                catalogue {f2.qualification.catalogVersion} ·{" "}
                {f2.qualification.detailedStatus}
                {f2.qualification.capitalizationViaCycleTypeId
                  ? " · capitalisation via cycleType"
                  : ""}
              </dd>
            </div>
          </dl>
        </section>
      ) : null}

      {activeProposal ? (
        <section
          className={styles.proposalCard}
          data-testid="project-assistant-proposal"
          aria-labelledby="f2-proposal-title"
        >
          <h3 id="f2-proposal-title" className={styles.cardTitle}>
            PROPOSITION
          </h3>
          <p className={styles.cardMeta} data-testid="f2-proposal-id">
            {activeProposal.proposalId} · statut {activeProposal.status}
          </p>
          <dl className={styles.cardDl}>
            <div>
              <dt>Demande reformulée</dt>
              <dd>{activeProposal.rephrasedRequest}</dd>
            </div>
            <div>
              <dt>Objectif</dt>
              <dd>{activeProposal.objective}</dd>
            </div>
            <div>
              <dt>Périmètre</dt>
              <dd data-testid="f2-proposal-scope">{activeProposal.scope}</dd>
            </div>
            <div>
              <dt>Hors périmètre</dt>
              <dd data-testid="f2-proposal-out-of-scope">
                {activeProposal.outOfScope.join(" · ")}
              </dd>
            </div>
            <div>
              <dt>Gate Morris</dt>
              <dd data-testid="f2-gate-required">
                {activeProposal.morrisGateRequired
                  ? "DÉCISION REQUISE"
                  : "NO MORRIS GATE REQUIRED"}
              </dd>
            </div>
            <div>
              <dt>Prochaine étape</dt>
              <dd>{activeProposal.nextPossibleStep}</dd>
            </div>
            <div>
              <dt>Contexte</dt>
              <dd data-testid="f2-context-snapshot">
                {activeProposal.contextSnapshot.projectId} /{" "}
                {activeProposal.contextSnapshot.lpsId}@
                {activeProposal.contextSnapshot.lpsVersion}
                {activeProposal.contextSnapshot.activeCycleInstanceId
                  ? ` · cycle ${activeProposal.contextSnapshot.activeCycleInstanceId}`
                  : ""}
              </dd>
            </div>
          </dl>
          <p
            className={styles.processLocal}
            data-testid="f2-process-local-notice"
          >
            {activeProposal.processLocalNotice}
          </p>
          <p className={styles.noExecutionBanner} data-testid="f2-no-execution">
            AUCUNE EXÉCUTION
          </p>
        </section>
      ) : null}

      {gateOpen ? (
        <section
          className={styles.gateCard}
          data-testid="project-assistant-gate"
          aria-labelledby="f2-gate-title"
        >
          <h3 id="f2-gate-title" className={styles.cardTitle}>
            DÉCISION REQUISE
          </h3>
          <p className={styles.cardMeta}>
            Décision humaine explicite liée à {activeProposal?.proposalId}
          </p>
          <label className={styles.reservesLabel} htmlFor={`${inputId}-reserves`}>
            Réserves (obligatoires pour GO WITH RESERVES)
          </label>
          <textarea
            id={`${inputId}-reserves`}
            className={styles.reservesInput}
            data-testid="f2-reserves-input"
            rows={2}
            value={reservesText}
            disabled={busy}
            onChange={(event) => setReservesText(event.target.value)}
          />
          <div className={styles.gateActions} role="group" aria-label="Décisions Morris">
            {(
              [
                ["GO", "GO"],
                ["GO_WITH_RESERVES", "GO WITH RESERVES"],
                ["NO_GO", "NO-GO"],
                ["AMEND", "AMEND"],
              ] as const
            ).map(([kind, label]) => (
              <button
                key={kind}
                type="button"
                className={styles.gateButton}
                data-testid={`f2-decide-${kind}`}
                disabled={busy}
                onClick={() => decide(kind)}
              >
                {label}
              </button>
            ))}
          </div>
        </section>
      ) : null}

      {f2?.decision ? (
        <section
          className={styles.decisionCard}
          data-testid="project-assistant-decision"
          aria-live="polite"
        >
          <h3 className={styles.cardTitle}>DÉCISION PRISE</h3>
          <p data-testid="f2-decision-kind">{f2.decision.kind}</p>
          <p data-testid="f2-decision-scope">Scope: {f2.decision.scope}</p>
          {f2.decision.readyForNextGatedStep ? (
            <p data-testid="f2-ready-next">READY FOR NEXT GATED STEP</p>
          ) : null}
          <p className={styles.noExecutionBanner} data-testid="f2-decision-no-execution">
            AUCUNE EXÉCUTION
          </p>
          <p className={styles.cardMeta} data-testid="f2-execution-performed">
            executionPerformed: {String(f2.decision.executionPerformed)}
          </p>
        </section>
      ) : null}

      {canPrepareF3 ? (
        <section
          className={styles.f3Card}
          data-testid="project-assistant-f3-prepare"
        >
          <h3 className={styles.cardTitle}>F3 FIXTURE — PREPARE</h3>
          <p className={styles.cardMeta}>
            Le GO F2 autorise uniquement la préparation d&apos;un contrat fixture.
          </p>
          <div className={styles.f3Labels} data-testid="f3-prepare-labels">
            <StatusPill tone="muted">FIXTURE — AUCUNE EXÉCUTION RÉELLE</StatusPill>
            <StatusPill tone="muted">CURSOR REAL BLOQUÉ</StatusPill>
            <StatusPill tone="muted">AUCUN GIT WRITE PRODUIT</StatusPill>
          </div>
          <button
            type="button"
            className={styles.f3Button}
            data-testid="f3-prepare-button"
            disabled={!canPrepareF3}
            onClick={() => prepareF3()}
          >
            Préparer l&apos;exécution fixture
          </button>
        </section>
      ) : null}

      {f3Prepare && !f3Execute ? (
        <section
          className={styles.f3Card}
          data-testid="project-assistant-f3-contract"
        >
          <h3 className={styles.cardTitle}>CONTRAT FIXTURE PRÉPARÉ</h3>
          <div className={styles.f3Labels} data-testid="f3-contract-labels">
            <StatusPill tone="blueFlush">FIXTURE</StatusPill>
            <StatusPill tone="muted">FIXTURE — AUCUNE EXÉCUTION RÉELLE</StatusPill>
            <StatusPill tone="muted">AUCUN GIT WRITE PRODUIT</StatusPill>
            <StatusPill tone="orange">CURSOR REAL BLOQUÉ</StatusPill>
          </div>
          <dl className={styles.cardDl}>
            <div>
              <dt>Contract id</dt>
              <dd data-testid="f3-contract-id">
                {f3Prepare.contract.executionContractId}
              </dd>
            </div>
            <div>
              <dt>Version</dt>
              <dd data-testid="f3-contract-version">{f3Prepare.contract.version}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd data-testid="f3-contract-status">{f3Prepare.contract.status}</dd>
            </div>
            <div>
              <dt>Mode</dt>
              <dd data-testid="f3-contract-mode">{f3Prepare.contract.mode}</dd>
            </div>
          </dl>
          <p className={styles.noExecutionBanner} data-testid="f3-prepare-no-attempt">
            attemptCreated: false — AUCUNE ATTEMPT
          </p>
          <button
            type="button"
            className={styles.f3Button}
            data-testid="f3-confirm-execute-button"
            disabled={!canConfirmF3}
            onClick={() => confirmAndExecuteF3()}
          >
            Confirmer et exécuter la fixture
          </button>
        </section>
      ) : null}

      {f3Execute ? (
        <section
          className={styles.f3Card}
          data-testid="project-assistant-f3-execute"
          aria-live="polite"
        >
          <h3 className={styles.cardTitle}>F3 FIXTURE — RÉSULTATS</h3>
          <div className={styles.f3Labels} data-testid="f3-execute-labels">
            <StatusPill tone="muted">FIXTURE — AUCUNE EXÉCUTION RÉELLE</StatusPill>
            <StatusPill tone="muted">AUCUN GIT WRITE PRODUIT</StatusPill>
            <StatusPill tone="blueFlush">
              RECOMMANDATION — PAS UNE DÉCISION MORRIS
            </StatusPill>
            <StatusPill tone="orange">CURSOR REAL BLOQUÉ</StatusPill>
            <StatusPill tone="orange">HARD R-T-A3-1 / R-T-A3-2 OPEN</StatusPill>
          </div>

          <div data-testid="f3-attempt-card" className={styles.f3Subcard}>
            <h4 className={styles.cardTitle}>Attempt</h4>
            <p data-testid="f3-attempt-id">{f3Execute.attempt.attemptId}</p>
            <p data-testid="f3-attempt-status">{f3Execute.attempt.status}</p>
            <p data-testid="f3-attempt-adapter">{f3Execute.attempt.adapterId}</p>
            <p data-testid="f3-attempt-external-effects">
              externalEffects: {String(f3Execute.attempt.externalEffects)}
            </p>
            <p data-testid="f3-attempt-launch-count">
              launchCount: {f3Execute.attempt.launchCount}
            </p>
            <p data-testid="f3-attempt-reused">
              reusedExistingAttempt: {String(f3Execute.reusedExistingAttempt)}
            </p>
          </div>

          <div data-testid="f3-evidence-card" className={styles.f3Subcard}>
            <h4 className={styles.cardTitle}>Evidence</h4>
            <p data-testid="f3-evidence-id">{f3Execute.evidence.evidenceId}</p>
            <p data-testid="f3-evidence-status">{f3Execute.evidence.status}</p>
            <p data-testid="f3-evidence-verified">
              verified: {String(f3Execute.evidence.verified)}
            </p>
          </div>

          <div data-testid="f3-review-bundle-card" className={styles.f3Subcard}>
            <h4 className={styles.cardTitle}>ReviewBundle</h4>
            <p data-testid="f3-review-bundle-id">
              {f3Execute.reviewBundle.reviewBundleId}
            </p>
            <p data-testid="f3-review-bundle-status">
              {f3Execute.reviewBundle.status}
            </p>
          </div>

          <div data-testid="f3-recommendation-card" className={styles.f3Subcard}>
            <h4 className={styles.cardTitle}>Recommendation</h4>
            <p data-testid="f3-recommendation-label">
              {f3Execute.recommendation.recommendationLabel}
            </p>
            <p data-testid="f3-recommendation-execution-authority">
              executionAuthority:{" "}
              {String(f3Execute.recommendation.executionAuthority)}
            </p>
            <p data-testid="f3-recommendation-gate-consumed">
              gateConsumed: {String(f3Execute.recommendation.gateConsumed)}
            </p>
            <p data-testid="f3-recommendation-decision-created">
              decisionCreated:{" "}
              {String(f3Execute.recommendation.decisionCreated)}
            </p>
            <p data-testid="f3-recommendation-hard-refs">
              {f3Execute.recommendation.openHardReservationRefs.join(" · ")}
            </p>
            <p data-testid="f3-no-ready-claim">PAS DE CLAIM READY</p>
            <p data-testid="f3-no-ta6-complete">T-A6 COMPLETE NON DÉCLARÉ</p>
          </div>
        </section>
      ) : null}

      <section
        className={styles.sources}
        aria-labelledby="project-assistant-sources-title"
        data-testid="project-assistant-sources"
      >
        <h3 id="project-assistant-sources-title" className={styles.sourcesTitle}>
          Sources consultées (lecture seule)
        </h3>
        {toolEvents.length === 0 ? (
          <p className={styles.sourcesEmpty}>Aucune source consultée pour l&apos;instant.</p>
        ) : (
          <ul className={styles.sourceList}>
            {toolEvents.map((event, index) => (
              <li
                key={`${event.toolName}-${index}-${event.pathOrRef ?? "na"}`}
                className={styles.sourceItem}
                data-testid="project-assistant-source-item"
                data-status={event.status}
              >
                <details>
                  <summary>
                    <span className={styles.sourceOp}>{event.toolName}</span>
                    {" · "}
                    <span className={styles.sourceStatus}>
                      {statusLabel(event.status)}
                    </span>
                    {event.pathOrRef ? (
                      <>
                        {" · "}
                        <code>{event.pathOrRef}</code>
                      </>
                    ) : null}
                  </summary>
                  <p className={styles.sourceDetail}>
                    {event.summary ?? "Aucun résumé supplémentaire."}
                    {event.errorCode ? ` (${event.errorCode})` : ""}
                    {" · "}
                    lecture seule confirmée
                  </p>
                </details>
              </li>
            ))}
          </ul>
        )}
      </section>

      {error ? (
        <div
          className={styles.error}
          role="alert"
          data-testid="project-assistant-error"
        >
          <p>{error}</p>
          {uiState === "ERROR_RECOVERABLE" ? (
            <button
              type="button"
              className={styles.retry}
              data-testid="project-assistant-retry"
              onClick={() => {
                const lastUser = [...messages]
                  .reverse()
                  .find((m) => m.role === "user");
                if (lastUser) {
                  setMessages((prev) =>
                    prev.filter((m) => m.id !== lastUser.id),
                  );
                  sendMessage(lastUser.content);
                }
              }}
            >
              Réessayer
            </button>
          ) : null}
        </div>
      ) : null}

      <div
        className={styles.statusLine}
        aria-live="polite"
        data-testid="project-assistant-status"
      >
        {busy
          ? uiState === "SOURCE_LOOKUP"
            ? "Consultation des sources en cours…"
            : "Assistant en cours de réponse…"
          : blocked
            ? "Assistant bloqué — configuration manquante."
            : "Prêt"}
      </div>

      <form
        className={styles.composer}
        data-testid="project-assistant-composer"
        onSubmit={(event) => {
          event.preventDefault();
          sendMessage();
        }}
      >
        <label className={styles.srOnly} htmlFor={inputId}>
          Message à l&apos;Assistant SFIA du projet
        </label>
        <textarea
          id={inputId}
          className={styles.input}
          data-testid="project-assistant-input"
          rows={3}
          value={draft}
          disabled={busy || blocked}
          placeholder="Décrivez votre demande liée à ce projet…"
          aria-describedby={liveRegionId}
          onChange={(event) => setDraft(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter" && !event.shiftKey) {
              event.preventDefault();
              sendMessage();
            }
          }}
        />
        <div className={styles.composerRow}>
          <StatusPill tone="muted">@ contexte Project/LPS</StatusPill>
          <button
            type="submit"
            className={styles.send}
            data-testid="project-assistant-send"
            disabled={!canSend}
            aria-disabled={!canSend}
            title={
              blocked
                ? "Assistant indisponible"
                : busy
                  ? "Envoi en cours"
                  : draft.trim().length === 0
                    ? "Saisissez un message"
                    : "Envoyer le message"
            }
            aria-label={
              canSend
                ? "Envoyer le message à l'Assistant"
                : "Envoi indisponible"
            }
          >
            ↑
          </button>
        </div>
      </form>

      <div
        className={styles.srOnly}
        data-testid="project-assistant-no-cursor"
        aria-hidden="true"
      >
        Aucune action Cursor
      </div>
      <div
        className={styles.srOnly}
        data-testid="project-assistant-no-write"
        aria-hidden="true"
      >
        Aucune écriture Git ou GitHub
      </div>
      <div
        className={styles.srOnly}
        data-testid="project-assistant-no-ops1-destination"
        aria-hidden="true"
      >
        OPS1 n&apos;est pas la destination F2
      </div>
      <div
        className={styles.srOnly}
        data-testid="project-assistant-f3-no-real"
        aria-hidden="true"
      >
        FIXTURE — AUCUNE EXÉCUTION RÉELLE
      </div>
      <div
        className={styles.srOnly}
        data-testid="project-assistant-f3-cursor-real-blocked"
        aria-hidden="true"
      >
        CURSOR REAL BLOQUÉ
      </div>
    </div>
  );
}
