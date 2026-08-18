"use client";

import { useEffect, useId, useRef, useState, useTransition } from "react";
import { StatusPill } from "@/components/ui/StatusPill";
import {
  projectAssistantConfirmAndExecuteF3FixtureAction,
  projectAssistantConfirmAndExecuteResolvedM3Action,
  projectAssistantDecideAction,
  projectAssistantPrepareF3FixtureAction,
  projectAssistantPrepareResolvedM3Action,
  projectAssistantRehydrateEvidenceOutcomeAction,
  projectAssistantSendAction,
} from "./actions";
import type {
  AssistantHistoryMessage,
  AssistantToolEventDto,
  F2TurnPayload,
  ProjectAssistantRehydrateEvidenceOutcomeSuccess,
} from "./types";
import type { F2DecisionKind, ProposalDto } from "./f2/types";
import type { F3ExecutePayload, F3PreparePayload } from "./f3/types";
import type { F3M3ResolvedPayload } from "./f3/prepareAndResolveM3ProductPath";
import {
  BOUNDED_RUNNING_REFRESH_ACTION,
  BOUNDED_RUNNING_REFRESH_HELP,
  BOUNDED_RUNNING_REFRESH_TITLE,
  G_UX_08_AMEND_DEFERRED_MESSAGE,
  attemptStatusUserLabel,
  deriveRecommendationFreshness,
  executionSemanticUserLabel,
  isBoundedRunningAttemptRefreshable,
} from "./presentationLabels";
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

export type ProjectAssistantPanelProps = {
  projectId: string;
  /** Fired after a successful durable Product mutation (not process-local). */
  onDurableFactsChanged?: () => void;
  /** Mirrors the latest durable Evidence/ReviewBundle rehydrate for parent History. */
  onDurableEvidenceOutcomeChange?: (
    outcome: ProjectAssistantRehydrateEvidenceOutcomeSuccess | null,
  ) => void;
};

export function ProjectAssistantPanel({
  projectId,
  onDurableFactsChanged,
  onDurableEvidenceOutcomeChange,
}: ProjectAssistantPanelProps) {
  const inputId = useId();
  const liveRegionId = useId();
  const [messages, setMessages] = useState<UiMessage[]>([]);
  const [draft, setDraft] = useState("");
  const [toolEvents, setToolEvents] = useState<AssistantToolEventDto[]>([]);
  const [uiState, setUiState] = useState<UiState>("INITIAL");
  const [error, setError] = useState<string | null>(null);
  const [modeLabel, setModeLabel] = useState("MODE À CONFIRMER");
  const [ephemeralNotice, setEphemeralNotice] = useState(
    "Conversation, proposition et confirmation restent process-local (non durables). L’état projet enregistré peut être relu ; rien n’est inventé.",
  );
  const [f2, setF2] = useState<F2TurnPayload | null>(null);
  const [activeProposal, setActiveProposal] = useState<ProposalDto | null>(null);
  const [reservesText, setReservesText] = useState("");
  const [f3Prepare, setF3Prepare] = useState<F3PreparePayload | null>(null);
  const [f3M3Resolved, setF3M3Resolved] = useState<F3M3ResolvedPayload | null>(
    null,
  );
  const [f3Execute, setF3Execute] = useState<F3ExecutePayload | null>(null);
  const [durableEvidenceOutcome, setDurableEvidenceOutcome] =
    useState<ProjectAssistantRehydrateEvidenceOutcomeSuccess | null>(null);
  const [durableRehydrateError, setDurableRehydrateError] = useState<
    string | null
  >(null);
  const [f3Busy, setF3Busy] = useState(false);
  const [isPending, startTransition] = useTransition();
  const listRef = useRef<HTMLDivElement | null>(null);
  const f3InFlightRef = useRef(false);
  const onDurableFactsChangedRef = useRef(onDurableFactsChanged);
  const onDurableEvidenceOutcomeChangeRef = useRef(
    onDurableEvidenceOutcomeChange,
  );
  onDurableFactsChangedRef.current = onDurableFactsChanged;
  onDurableEvidenceOutcomeChangeRef.current = onDurableEvidenceOutcomeChange;

  function notifyDurableFactsChanged() {
    onDurableFactsChangedRef.current?.();
  }

  function applyDurableEvidenceOutcome(
    outcome: ProjectAssistantRehydrateEvidenceOutcomeSuccess | null,
  ) {
    setDurableEvidenceOutcome(outcome);
    onDurableEvidenceOutcomeChangeRef.current?.(outcome);
  }

  async function refreshDurableEvidenceOutcome() {
    const result = await projectAssistantRehydrateEvidenceOutcomeAction({
      projectId,
    });
    if (result.ok) {
      applyDurableEvidenceOutcome(result);
      setDurableRehydrateError(null);
      return;
    }
    if (result.code === "NO_EVIDENCE_OUTCOME_REFS") {
      applyDurableEvidenceOutcome(null);
      setDurableRehydrateError(null);
      return;
    }
    applyDurableEvidenceOutcome(null);
    setDurableRehydrateError(
      "Impossible de relire le dernier outcome durable.",
    );
  }

  useEffect(() => {
    setUiState((prev) => (prev === "INITIAL" ? "READY" : prev));
  }, []);

  useEffect(() => {
    let cancelled = false;
    applyDurableEvidenceOutcome(null);
    setDurableRehydrateError(null);

    void projectAssistantRehydrateEvidenceOutcomeAction({ projectId }).then(
      (result) => {
        if (cancelled) return;
        if (result.ok) {
          applyDurableEvidenceOutcome(result);
          setDurableRehydrateError(null);
          return;
        }
        if (result.code === "NO_EVIDENCE_OUTCOME_REFS") {
          applyDurableEvidenceOutcome(null);
          setDurableRehydrateError(null);
          return;
        }
        applyDurableEvidenceOutcome(null);
        setDurableRehydrateError(
          "Impossible de relire le dernier outcome durable.",
        );
      },
    );

    return () => {
      cancelled = true;
    };
    // Parent callbacks are mirrored via refs; projectId is the durable read key.
    // eslint-disable-next-line react-hooks/exhaustive-deps -- intentional mount/projectId only
  }, [projectId]);

  // E2E-ONLY durable refresh (QA-PRE-M6-TEST-01). No-op unless window flag set by harness.
  useEffect(() => {
    function onE2eRefresh() {
      const enabled = Boolean(
        (window as unknown as { __SFIA_E2E_QA_CONTROL__?: boolean })
          .__SFIA_E2E_QA_CONTROL__,
      );
      if (!enabled) return;
      void refreshDurableEvidenceOutcome();
    }
    window.addEventListener("sfia-e2e-refresh-durable", onE2eRefresh);
    return () => {
      window.removeEventListener("sfia-e2e-refresh-durable", onE2eRefresh);
    };
  }, [projectId]);

  useEffect(() => {
    const el = listRef.current;
    if (!el || typeof el.scrollTo !== "function") return;
    el.scrollTo({
      top: el.scrollHeight,
      behavior: "smooth",
    });
  }, [
    messages,
    toolEvents,
    error,
    activeProposal,
    f2,
    f3Prepare,
    f3Execute,
    durableEvidenceOutcome,
    durableRehydrateError,
  ]);

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
          content:
            kind === "AMEND"
              ? `${result.text}\n\n${G_UX_08_AMEND_DEFERRED_MESSAGE}`
              : result.text,
        },
      ]);
      setUiState("ANSWERED");
      // HumanDecision is durable Product write — refresh LPS / History projection.
      notifyDurableFactsChanged();
    });
  }

  // Canonical post-GO CTA: durable M3 prepare + resolve (no Proposal authority).
  const canPrepareResolvedM3 =
    Boolean(f2?.decision?.readyForNextGatedStep) &&
    Boolean(f2?.decision?.decisionId) &&
    !f3Prepare &&
    !f3M3Resolved &&
    !f3Execute &&
    !busy &&
    !blocked;

  // Legacy fixture path — diagnostic / negative STALE proof only.
  const canPrepareLegacyFixture =
    Boolean(f2?.decision?.readyForNextGatedStep) &&
    Boolean(f2?.decision?.decisionId) &&
    Boolean(activeProposal) &&
    !f3Prepare &&
    !f3M3Resolved &&
    !f3Execute &&
    !busy &&
    !blocked;

  const recommendationFreshness = deriveRecommendationFreshness({
    hasSessionRecommendation: Boolean(f3Execute?.recommendation),
    hasDurableEvidenceOutcome: Boolean(durableEvidenceOutcome),
    sessionEvidenceId: f3Execute?.evidence.evidenceId ?? null,
    durableEvidenceIds: durableEvidenceOutcome?.evidenceIds ?? [],
  });

  // Freshness is presentation-only. Do not invent authority via canConfirm.
  const canConfirmLegacyFixture =
    Boolean(f3Prepare) && !f3Execute && !busy && !blocked;

  const canConfirmResolvedM3 =
    Boolean(f3M3Resolved) && !f3Execute && !busy && !blocked;

  const canRefreshResolvedM3Running =
    Boolean(f3M3Resolved) &&
    Boolean(f3Execute) &&
    isBoundedRunningAttemptRefreshable({
      attemptStatus: f3Execute?.attempt.status,
      realProcessInvoked: f3Execute?.attempt.realProcessInvoked,
      executionMode: f3Execute?.attempt.executionMode,
      payloadMode: f3Execute?.mode,
      contractStatus: f3Execute?.contract.status,
    }) &&
    !busy &&
    !blocked;

  function prepareLegacyFixture() {
    if (!canPrepareLegacyFixture || !activeProposal || !f2?.decision) return;
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
      setF3M3Resolved(null);
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
      // ExecutionContract prepare is durable Product write.
      notifyDurableFactsChanged();
    });
  }

  function prepareResolvedM3() {
    if (!canPrepareResolvedM3 || !f2?.decision) return;
    if (f3Busy) return;
    setF3Busy(true);
    startTransition(async () => {
      setError(null);
      const result = await projectAssistantPrepareResolvedM3Action({
        projectId,
        decisionId: f2.decision!.decisionId,
      });
      setF3Busy(false);
      if (!result.ok) {
        setUiState("ERROR_RECOVERABLE");
        setError(result.message);
        return;
      }
      setF3M3Resolved(result.f3);
      setF3Prepare(null);
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
      // M3 PREPARE + resolved successor are durable Product writes.
      notifyDurableFactsChanged();
    });
  }

  function confirmAndExecuteLegacyFixture() {
    if (!canConfirmLegacyFixture || !f3Prepare || !activeProposal) return;
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
      notifyDurableFactsChanged();
      void refreshDurableEvidenceOutcome();
    });
  }

  function invokeCanonicalResolvedM3Path() {
    if (!f3M3Resolved) return;
    if (f3InFlightRef.current || f3Busy) return;
    f3InFlightRef.current = true;
    setF3Busy(true);
    startTransition(async () => {
      setError(null);
      const result = await projectAssistantConfirmAndExecuteResolvedM3Action({
        projectId,
        decisionId: f3M3Resolved.decisionId,
        executionContractId: f3M3Resolved.successor.executionContractId,
        expectedContractVersion: f3M3Resolved.successor.version,
      });
      f3InFlightRef.current = false;
      setF3Busy(false);
      if (!result.ok) {
        setUiState("ERROR_RECOVERABLE");
        setError(result.message);
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
      notifyDurableFactsChanged();
      void refreshDurableEvidenceOutcome();
    });
  }

  function confirmAndExecuteResolvedM3() {
    if (!canConfirmResolvedM3) return;
    invokeCanonicalResolvedM3Path();
  }

  function refreshResolvedM3RunningAttempt() {
    if (!canRefreshResolvedM3Running) return;
    invokeCanonicalResolvedM3Path();
  }


  return (
    <div
      className={styles.root}
      data-testid="project-assistant-panel"
      data-ui-state={uiState}
    >
      <div className={styles.metaRow} data-testid="project-assistant-mode-pill">
        <StatusPill tone="green">Nora</StatusPill>
        <StatusPill tone="blueFlush">Conversation</StatusPill>
        {modeLabel.toLowerCase().includes("indisponible") ? (
          <StatusPill tone="orange">{modeLabel}</StatusPill>
        ) : null}
      </div>
      <p className={styles.ephemeral} data-testid="project-assistant-ephemeral">
        Morris pilote. Nora recommande — la décision vous appartient.
      </p>
      <details className={styles.diagnosticsDetails}>
        <summary>Parcours et limites</summary>
        <p className={styles.scope} data-testid="project-assistant-scope">
          Qualification · proposition · décision humaine · contrat /
          confirmation · tentative · recommandation. Aucune exécution
          automatique. {ephemeralNotice}
        </p>
      </details>

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
            Posez une question sur ce projet. Nora s&apos;appuie sur le contexte
            projet disponible.
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
                {message.role === "user" ? "Vous" : "Nora"}
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
            Qualification / Proposition
          </h3>
          <p className={styles.cardMeta} data-testid="f2-recommendation-freshness">
            {f2.qualification.recommendationLabel} ·{" "}
            {deriveRecommendationFreshness({
              hasSessionRecommendation: true,
              hasDurableEvidenceOutcome: Boolean(durableEvidenceOutcome),
            }).label}
          </p>
          <p className={styles.cardMeta}>
            Une recommandation n&apos;est pas une décision humaine.
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
                <dt>Cycle lié</dt>
                <dd data-testid="f2-cycle-instance">
                  {f2.qualification.cycleInstanceId}
                  {f2.qualification.cycleStatus
                    ? ` · ${f2.qualification.cycleStatus}`
                    : ""}
                </dd>
              </div>
            ) : null}
            <div>
              <dt>Justification</dt>
              <dd data-testid="f2-rationale">{f2.qualification.rationale}</dd>
            </div>
          </dl>
          <details className={styles.diagnosticsDetails}>
            <summary>Diagnostics techniques</summary>
            <dl className={styles.cardDl}>
              {f2.qualification.ckcResolutionRef ? (
                <div>
                  <dt>Réf. résolution</dt>
                  <dd data-testid="f2-ckc-ref">
                    {f2.qualification.ckcResolutionRef}
                  </dd>
                </div>
              ) : null}
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
          </details>
        </section>
      ) : null}

      {activeProposal ? (
        <section
          className={styles.proposalCard}
          data-testid="project-assistant-proposal"
          aria-labelledby="f2-proposal-title"
        >
          <h3 id="f2-proposal-title" className={styles.cardTitle}>
            Proposition
          </h3>
          <p className={styles.cardMeta} data-testid="f2-proposal-id">
            Statut {activeProposal.status}
          </p>
          {activeProposal.status === "AMENDMENT_REQUIRED" ? (
            <p
              className={styles.processLocal}
              data-testid="f2-amend-deferred-notice"
            >
              {G_UX_08_AMEND_DEFERRED_MESSAGE}
            </p>
          ) : null}
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
            Décision requise
          </h3>
          <p className={styles.cardMeta}>
            Nora recommande. Vous décidez. Cette décision n&apos;est pas une
            confirmation d&apos;exécution.
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
                ["GO", "Approuver"],
                ["GO_WITH_RESERVES", "Approuver avec réserves"],
                ["NO_GO", "Rejeter"],
                ["AMEND", "Demander une modification"],
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
          <h3 className={styles.cardTitle}>Décision enregistrée</h3>
          <p data-testid="f2-decision-kind">{f2.decision.kind}</p>
          <p data-testid="f2-decision-id">{f2.decision.decisionId}</p>
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

      {canPrepareResolvedM3 || canPrepareLegacyFixture ? (
        <section
          className={styles.f3Card}
          data-testid="project-assistant-f3-prepare"
        >
          <h3 className={styles.cardTitle}>Préparer le contrat</h3>
          <p className={styles.cardMeta}>
            Le GO autorise uniquement la préparation d&apos;un contrat. Confirmation
            process-local — non durable.
          </p>
          <div className={styles.f3Labels} data-testid="f3-prepare-labels">
            <StatusPill tone="muted">Aucune exécution lancée à cette étape</StatusPill>
            <StatusPill tone="muted">Confirmation non durable</StatusPill>
          </div>
          <button
            type="button"
            className={styles.f3Button}
            data-testid="f3-prepare-button"
            disabled={!canPrepareResolvedM3}
            onClick={() => prepareResolvedM3()}
          >
            Préparer le contrat d&apos;exécution
          </button>
          <details className={styles.diagnosticsDetails}>
            <summary>Détails techniques / chemin legacy</summary>
            <p className={styles.cardMeta}>
              Chemin produit canonique après GO : HumanDecision durable → M3
              PREPARE → résolution fixture-safe. Le chemin Proposal/fixture reste
              fail-closed (STALE) après avancement LPS — preuve négative
              uniquement.
            </p>
            <button
              type="button"
              className={styles.f3Button}
              data-testid="f3-legacy-fixture-prepare-button"
              disabled={!canPrepareLegacyFixture}
              onClick={() => prepareLegacyFixture()}
            >
              Chemin legacy fixture (Proposal)
            </button>
          </details>
        </section>
      ) : null}

      {f3M3Resolved && !f3Execute ? (
        <section
          className={styles.f3Card}
          data-testid="project-assistant-f3-contract"
        >
          <h3 className={styles.cardTitle}>Contrat prêt à confirmer</h3>
          <div className={styles.f3Labels} data-testid="f3-contract-labels">
            <StatusPill tone="blueFlush">Contrat résolu</StatusPill>
            <StatusPill tone="muted">Confirmation process-local</StatusPill>
            <StatusPill tone="orange">Fixture de test — pas une exécution Cursor réelle</StatusPill>
          </div>
          <dl className={styles.cardDl}>
            <div>
              <dt>Identifiant contrat</dt>
              <dd data-testid="f3-contract-id">
                {f3M3Resolved.successor.executionContractId}
              </dd>
            </div>
            <div>
              <dt>Version</dt>
              <dd data-testid="f3-contract-version">
                {f3M3Resolved.successor.version}
              </dd>
            </div>
            <div>
              <dt>Statut</dt>
              <dd data-testid="f3-contract-status">
                {f3M3Resolved.successor.status}
              </dd>
            </div>
            <div>
              <dt>Action</dt>
              <dd data-testid="f3-contract-action">
                {f3M3Resolved.successor.action}
              </dd>
            </div>
            <div>
              <dt>Cible</dt>
              <dd data-testid="f3-contract-target">
                {f3M3Resolved.successor.target}
              </dd>
            </div>
            <div>
              <dt>Périmètre</dt>
              <dd data-testid="f3-contract-scope">
                {f3M3Resolved.successor.scope}
              </dd>
            </div>
          </dl>
          <details className={styles.diagnosticsDetails}>
            <summary>Détails techniques</summary>
            <dl className={styles.cardDl}>
              <div>
                <dt>PREPARE d&apos;origine</dt>
                <dd data-testid="f3-m3-original-contract-id">
                  {f3M3Resolved.original.executionContractId}
                </dd>
              </div>
              <div>
                <dt>Autorité requise</dt>
                <dd data-testid="f3-contract-authority">
                  {f3M3Resolved.successor.requiredAuthority}
                </dd>
              </div>
            </dl>
          </details>
          <p className={styles.noExecutionBanner} data-testid="f3-prepare-no-attempt">
            Tentative non créée — confirmation process-local (non durable).
          </p>
          {recommendationFreshness.status === "stale" ? (
            <p
              className={styles.processLocal}
              data-testid="f3-stale-recommendation-notice"
            >
              Recommandation périmée — ce n&apos;est pas une décision humaine et
              ce n&apos;est pas un nouveau GO d&apos;exécution. La confirmation
              reste gouvernée par le contrat et la décision déjà enregistrés.
            </p>
          ) : null}
          <button
            type="button"
            className={styles.f3Button}
            data-testid="f3-confirm-execute-button"
            disabled={!canConfirmResolvedM3}
            onClick={() => confirmAndExecuteResolvedM3()}
          >
            Confirmer et exécuter (process-local)
          </button>
        </section>
      ) : null}

      {f3Prepare && !f3Execute ? (
        <section
          className={styles.f3Card}
          data-testid="project-assistant-f3-legacy-contract"
        >
          <h3 className={styles.cardTitle}>F6 · Contrat legacy (fixture Proposal)</h3>
          <div className={styles.f3Labels} data-testid="f3-legacy-contract-labels">
            <StatusPill tone="blueFlush">Contrat</StatusPill>
            <StatusPill tone="muted">Confirmation process-local</StatusPill>
            <StatusPill tone="orange">Fixture de test — pas une exécution Cursor réelle</StatusPill>
          </div>
          <details className={styles.diagnosticsDetails} open>
            <summary>Détails techniques</summary>
            <dl className={styles.cardDl}>
              <div>
                <dt>Identifiant contrat</dt>
                <dd data-testid="f3-legacy-contract-id">
                  {f3Prepare.contract.executionContractId}
                </dd>
              </div>
              <div>
                <dt>Version</dt>
                <dd data-testid="f3-legacy-contract-version">
                  {f3Prepare.contract.version}
                </dd>
              </div>
              <div>
                <dt>Statut</dt>
                <dd data-testid="f3-legacy-contract-status">
                  {f3Prepare.contract.status}
                </dd>
              </div>
              <div>
                <dt>Mode</dt>
                <dd data-testid="f3-legacy-contract-mode">
                  {f3Prepare.contract.mode}
                </dd>
              </div>
            </dl>
          </details>
          <p className={styles.noExecutionBanner} data-testid="f3-legacy-prepare-no-attempt">
            Tentative non créée — confirmation process-local (non durable).
          </p>
          <button
            type="button"
            className={styles.f3Button}
            data-testid="f3-legacy-confirm-execute-button"
            disabled={!canConfirmLegacyFixture}
            onClick={() => confirmAndExecuteLegacyFixture()}
          >
            Confirmer et exécuter (legacy fixture)
          </button>
        </section>
      ) : null}

      {f3Execute ? (
        <section
          className={styles.f3Card}
          data-testid="project-assistant-f3-execute"
          aria-live="polite"
        >
          {(() => {
            const runningRefreshVisible = isBoundedRunningAttemptRefreshable({
              attemptStatus: f3Execute.attempt.status,
              realProcessInvoked: f3Execute.attempt.realProcessInvoked,
              executionMode: f3Execute.attempt.executionMode,
              payloadMode: f3Execute.mode,
              contractStatus: f3Execute.contract.status,
            });
            const attemptLabel = attemptStatusUserLabel(
              f3Execute.attempt.status,
            );
            return (
              <>
          <h3
            className={styles.cardTitle}
            data-testid={
              runningRefreshVisible ? "f3-running-refresh-title" : undefined
            }
          >
            {runningRefreshVisible
              ? BOUNDED_RUNNING_REFRESH_TITLE
              : "Tentative et recommandation"}
          </h3>
          <div className={styles.f3Labels} data-testid="f3-execute-labels">
            {runningRefreshVisible ? (
              <StatusPill tone="blueFlush">Exécution déjà autorisée</StatusPill>
            ) : (
              <StatusPill tone="muted">
                {executionSemanticUserLabel({
                  mode: f3Execute.mode,
                  payloadMode: f3Execute.mode,
                  executionMode: f3Execute.attempt.executionMode,
                  adapterId: f3Execute.attempt.adapterId,
                  adapterRef: f3Execute.attempt.adapterRef,
                  realProcessInvoked: f3Execute.attempt.realProcessInvoked,
                  realExecution: f3Execute.realExecution,
                  processRef: f3Execute.attempt.processRef,
                  evidenceId: f3Execute.evidence.evidenceId,
                })}
              </StatusPill>
            )}
            {runningRefreshVisible ? null : (
              <StatusPill tone="blueFlush">
                Recommandation — pas une décision
              </StatusPill>
            )}
            {runningRefreshVisible ? null : (
              <StatusPill
                tone={recommendationFreshness.status === "stale" ? "orange" : "muted"}
              >
                {recommendationFreshness.label}
              </StatusPill>
            )}
          </div>

          <div data-testid="f3-attempt-card" className={styles.f3Subcard}>
            <h4 className={styles.cardTitle}>Tentative</h4>
            <p data-testid="f3-attempt-status-label">{attemptLabel.label}</p>
            {!attemptLabel.blockedBeforeExecution ? (
              <p data-testid="f3-attempt-id">{f3Execute.attempt.attemptId}</p>
            ) : (
              <p data-testid="f3-attempt-id-omitted">
                Identifiant de tentative non affiché (bloqué avant
                exécution).
              </p>
            )}
            <p data-testid="f3-attempt-status">{f3Execute.attempt.status}</p>
          </div>

          {runningRefreshVisible ? (
            <>
              <p
                className={styles.processLocal}
                data-testid="f3-running-refresh-help"
              >
                {BOUNDED_RUNNING_REFRESH_HELP}
              </p>
              <button
                type="button"
                className={styles.f3Button}
                data-testid="f3-refresh-running-button"
                disabled={!canRefreshResolvedM3Running}
                onClick={() => refreshResolvedM3RunningAttempt()}
              >
                {BOUNDED_RUNNING_REFRESH_ACTION}
              </button>
            </>
          ) : (
            <>
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
            <p
              className={styles.cardMeta}
              data-testid="f3-recommendation-freshness"
            >
              {recommendationFreshness.label}
            </p>
            <p data-testid="f3-recommendation-label">
              {f3Execute.recommendation.recommendationLabel}
            </p>
            <p data-testid="f3-recommendation-execution-authority">
              Autorité d&apos;exécution:{" "}
              {String(f3Execute.recommendation.executionAuthority)}
            </p>
            <p data-testid="f3-recommendation-gate-consumed">
              Gate consommé: {String(f3Execute.recommendation.gateConsumed)}
            </p>
            <p data-testid="f3-recommendation-decision-created">
              Décision créée:{" "}
              {String(f3Execute.recommendation.decisionCreated)}
            </p>
            <p data-testid="f3-no-ready-claim">PAS DE CLAIM READY</p>
          </div>
            </>
          )}
              </>
            );
          })()}
        </section>
      ) : null}

      {!f3Execute && durableRehydrateError ? (
        <section
          className={styles.f3Card}
          data-testid="durable-rehydrate-error"
          aria-live="polite"
        >
          <h3 className={styles.cardTitle}>Outcome durable</h3>
          <p className={styles.cardMeta}>{durableRehydrateError}</p>
        </section>
      ) : null}

      {!f3Execute && durableEvidenceOutcome ? (
        <section
          className={styles.f3Card}
          data-testid="durable-evidence-outcome"
          aria-live="polite"
        >
          <h3 className={styles.cardTitle}>Outcome durable (relecture)</h3>
          <div className={styles.f3Labels} data-testid="durable-outcome-labels">
            <StatusPill tone="blueFlush">
              RECOMMANDATION — PAS UNE DÉCISION
            </StatusPill>
            <StatusPill tone="muted">
              {deriveRecommendationFreshness({
                hasSessionRecommendation: false,
                hasDurableEvidenceOutcome: true,
              }).label}
            </StatusPill>
            <StatusPill tone="muted">Relecture durable</StatusPill>
          </div>
          <p className={styles.cardMeta} data-testid="durable-lps-version">
            LPS v{durableEvidenceOutcome.lpsVersion}
          </p>
          <p className={styles.cardMeta} data-testid="durable-ephemeral-notice">
            {durableEvidenceOutcome.ephemeralNotice}
          </p>

          <div data-testid="durable-evidence-card" className={styles.f3Subcard}>
            <h4 className={styles.cardTitle}>Evidence</h4>
            <dl className={styles.cardDl}>
              <div>
                <dt>IDs</dt>
                <dd data-testid="durable-evidence-ids">
                  {durableEvidenceOutcome.evidenceIds.join(", ") || "—"}
                </dd>
              </div>
              {durableEvidenceOutcome.evidence.map((ev) => (
                <div key={ev.evidenceId}>
                  <dt>{ev.evidenceId}</dt>
                  <dd data-testid={`durable-evidence-status-${ev.evidenceId}`}>
                    {ev.status}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {durableEvidenceOutcome.reviewBundles.map((rb) => (
            <div
              key={rb.reviewBundleId}
              data-testid="durable-review-bundle-card"
              className={styles.f3Subcard}
            >
              <h4 className={styles.cardTitle}>ReviewBundle</h4>
              <p data-testid="durable-review-bundle-id">{rb.reviewBundleId}</p>
              <p data-testid="durable-review-bundle-status">{rb.status}</p>
            </div>
          ))}

          <div
            data-testid="durable-recommendation-card"
            className={styles.f3Subcard}
          >
            <h4 className={styles.cardTitle}>Recommendation</h4>
            <p data-testid="durable-recommendation-label">
              {durableEvidenceOutcome.recommendation.recommendationLabel}
            </p>
            <p data-testid="durable-recommendation-execution-authority">
              executionAuthority:{" "}
              {String(
                durableEvidenceOutcome.recommendation.executionAuthority,
              )}
            </p>
            <p data-testid="durable-recommendation-gate-consumed">
              gateConsumed:{" "}
              {String(durableEvidenceOutcome.recommendation.gateConsumed)}
            </p>
            <p data-testid="durable-recommendation-decision-created">
              decisionCreated:{" "}
              {String(durableEvidenceOutcome.recommendation.decisionCreated)}
            </p>
            <p data-testid="durable-recommendation-auto-launch">
              attemptAutoLaunchNextCycle:{" "}
              {String(
                durableEvidenceOutcome.recommendation.attemptAutoLaunchNextCycle,
              )}
            </p>
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
          placeholder="Décrivez ce que vous voulez accomplir…"
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
