"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import {
  projectAssistantConfirmAndExecuteF3FixtureAction,
  projectAssistantConfirmAndExecuteResolvedM3Action,
  projectAssistantDecideAction,
  projectAssistantPrepareF3FixtureAction,
  projectAssistantPrepareResolvedM3Action,
  projectAssistantRehydrateEvidenceOutcomeAction,
  projectAssistantSendAction,
} from "@/features/project-assistant/actions";
import type {
  AssistantHistoryMessage,
  AssistantToolEventDto,
  F2TurnPayload,
  ProjectAssistantRehydrateEvidenceOutcomeSuccess,
} from "@/features/project-assistant/types";
import type {
  F2DecisionKind,
  ProposalDto,
} from "@/features/project-assistant/f2/types";
import type {
  F3ExecutePayload,
  F3PreparePayload,
} from "@/features/project-assistant/f3/types";
import type { F3M3ResolvedPayload } from "@/features/project-assistant/f3/prepareAndResolveM3ProductPath";
import {
  G_UX_08_AMEND_DEFERRED_MESSAGE,
  deriveRecommendationFreshness,
  isBoundedRunningAttemptRefreshable,
  type RecommendationFreshness,
} from "@/features/project-assistant/presentationLabels";
import { useRunningAttemptO3Observation } from "./useRunningAttemptO3Observation";

export type ProductMessage = {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
};

export type ProductConversationUiState =
  | "INITIAL"
  | "READY"
  | "SENDING"
  | "ASSISTANT_WORKING"
  | "SOURCE_LOOKUP"
  | "ANSWERED"
  | "ERROR_RECOVERABLE"
  | "BLOCKED";

export type UseProductConversationInput = {
  projectId: string;
  /** Fired after a successful durable Product mutation (not process-local). */
  onDurableFactsChanged?: () => void;
  /** Mirrors the latest durable Evidence/ReviewBundle rehydrate for History. */
  onDurableEvidenceOutcomeChange?: (
    outcome: ProjectAssistantRehydrateEvidenceOutcomeSuccess | null,
  ) => void;
};

function nextId(prefix: string): string {
  return `${prefix}-${Math.random().toString(36).slice(2, 10)}`;
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

/**
 * Headless Pre-M6 conversation controller.
 *
 * Authority stays server-side: this hook only sequences the existing F2/F3
 * server actions and exposes derived presentation state. It never invents
 * execution authority, durability, or a Recommendation → Decision promotion.
 */
export function useProductConversation({
  projectId,
  onDurableFactsChanged,
  onDurableEvidenceOutcomeChange,
}: UseProductConversationInput) {
  const [messages, setMessages] = useState<ProductMessage[]>([]);
  const [draft, setDraft] = useState("");
  const [toolEvents, setToolEvents] = useState<AssistantToolEventDto[]>([]);
  const [uiState, setUiState] = useState<ProductConversationUiState>("INITIAL");
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
  }, [projectId]);

  // E2E-ONLY durable refresh (QA-PRE-M6-TEST-01). No-op unless window flag set.
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
    // eslint-disable-next-line react-hooks/exhaustive-deps -- projectId is the durable read key
  }, [projectId]);

  useEffect(() => {
    const el = listRef.current;
    if (!el || typeof el.scrollTo !== "function") return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
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

    const userMessage: ProductMessage = {
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
      // HumanDecision is a durable Product write — refresh LPS / History.
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

  const recommendationFreshness: RecommendationFreshness =
    deriveRecommendationFreshness({
      hasSessionRecommendation: Boolean(f3Execute?.recommendation),
      hasDurableEvidenceOutcome: Boolean(durableEvidenceOutcome),
      sessionEvidenceId: f3Execute?.evidence.evidenceId ?? null,
      durableEvidenceIds: durableEvidenceOutcome?.evidenceIds ?? [],
    });

  const qualificationFreshness: RecommendationFreshness =
    deriveRecommendationFreshness({
      hasSessionRecommendation: true,
      hasDurableEvidenceOutcome: Boolean(durableEvidenceOutcome),
    });

  const durableOutcomeFreshness: RecommendationFreshness =
    deriveRecommendationFreshness({
      hasSessionRecommendation: false,
      hasDurableEvidenceOutcome: true,
    });

  // Freshness is presentation-only. Do not invent authority via canConfirm.
  const canConfirmLegacyFixture =
    Boolean(f3Prepare) && !f3Execute && !busy && !blocked;

  const canConfirmResolvedM3 =
    Boolean(f3M3Resolved) && !f3Execute && !busy && !blocked;

  const runningAttemptRefreshable =
    Boolean(f3M3Resolved) &&
    Boolean(f3Execute) &&
    isBoundedRunningAttemptRefreshable({
      attemptStatus: f3Execute?.attempt.status,
      realProcessInvoked: f3Execute?.attempt.realProcessInvoked,
      executionMode: f3Execute?.attempt.executionMode,
      payloadMode: f3Execute?.mode,
      contractStatus: f3Execute?.contract.status,
    }) &&
    !blocked;

  const canRefreshResolvedM3Running =
    runningAttemptRefreshable && !busy;

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
        { id: nextId("assistant"), role: "assistant", content: result.text },
      ]);
      setUiState("ANSWERED");
      // ExecutionContract prepare is a durable Product write.
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
        { id: nextId("assistant"), role: "assistant", content: result.text },
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
        { id: nextId("assistant"), role: "assistant", content: result.text },
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
        { id: nextId("assistant"), role: "assistant", content: result.text },
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
    if (!runningAttemptRefreshable) return;
    invokeCanonicalResolvedM3Path();
  }

  useRunningAttemptO3Observation({
    enabled: runningAttemptRefreshable,
    startedAt: f3Execute?.attempt.startedAt,
    resolvedMaxDurationMs: f3Execute?.attempt.resolvedMaxDurationMs,
    refresh: refreshResolvedM3RunningAttempt,
    inFlight: f3Busy,
  });

  function retryLastUserMessage() {
    const lastUser = [...messages].reverse().find((m) => m.role === "user");
    if (!lastUser) return;
    setMessages((prev) => prev.filter((m) => m.id !== lastUser.id));
    sendMessage(lastUser.content);
  }

  return {
    listRef,
    messages,
    draft,
    setDraft,
    toolEvents,
    uiState,
    error,
    modeLabel,
    ephemeralNotice,
    f2,
    activeProposal,
    reservesText,
    setReservesText,
    f3Prepare,
    f3M3Resolved,
    f3Execute,
    durableEvidenceOutcome,
    durableRehydrateError,
    busy,
    blocked,
    canSend,
    gateOpen,
    recommendationFreshness,
    qualificationFreshness,
    durableOutcomeFreshness,
    canPrepareResolvedM3,
    canPrepareLegacyFixture,
    canConfirmResolvedM3,
    canConfirmLegacyFixture,
    canRefreshResolvedM3Running,
    sendMessage,
    decide,
    prepareResolvedM3,
    prepareLegacyFixture,
    confirmAndExecuteResolvedM3,
    confirmAndExecuteLegacyFixture,
    refreshResolvedM3RunningAttempt,
    retryLastUserMessage,
  };
}

export type ProductConversationController = ReturnType<
  typeof useProductConversation
>;
