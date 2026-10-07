"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import {
  projectAssistantConfirmAndExecuteF3FixtureAction,
  projectAssistantConfirmAndExecuteResolvedM3Action,
  projectAssistantConversationContinuityAction,
  projectAssistantDecideAction,
  projectAssistantPrepareF3FixtureAction,
  projectAssistantPrepareResolvedM3Action,
  projectAssistantRehydrateEvidenceOutcomeAction,
} from "@/features/project-assistant/actions";
import type {
  AssistantHistoryMessage,
  AssistantToolEventDto,
  F2TurnPayload,
  ProjectAssistantRehydrateEvidenceOutcomeSuccess,
  ReservationResolutionProposalDto,
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
  resolveProjectOpenContinuityPresentation,
  type RecommendationFreshness,
} from "@/features/project-assistant/presentationLabels";
import { lifecycleRecommendationMaterializeFailurePiloteNotice } from "@/features/project-assistant/lifecycleRecommendationPiloteNotice";
import { createTurnRetryKey } from "@/features/project-assistant/turnRetryKey";
import {
  normalizeProductTurnHistory,
  preparePendingTurnRetryEnvelope,
  type PendingTurnRetryEnvelope,
} from "@/features/project-assistant/turnPayloadCanonical";
import { useRunningAttemptO3Observation } from "./useRunningAttemptO3Observation";
import { sendCancellableAssistantTurn } from "./sendCancellableAssistantTurn";
import type { JournalSurfaceEntry } from "../surfaces/JournalSurface";
import type {
  ActiveDecisionSubjectReadResult,
  CurrentGovernedExecutionContinuityResult,
} from "@/features/project-assistant/w2/types";

export type ProductDecisionSubjectContinuity =
  | { readonly status: "pending" }
  | { readonly status: "unavailable"; readonly message: string }
  | Extract<ActiveDecisionSubjectReadResult, { ok: true }>;

export type ProductGovernedExecutionContinuity =
  | { readonly status: "pending" }
  | { readonly status: "unavailable"; readonly message: string }
  | Extract<CurrentGovernedExecutionContinuityResult, { ok: true }>;

export type ProductMessage = {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  /** Durable Session turn timestamp when known — never synthesized client-side. */
  createdAt?: string | null;
};

export type TranscriptAvailability =
  | "available"
  | "empty"
  | "unavailable"
  | "pending";

export type ProductConversationUiState =
  | "INITIAL"
  | "READY"
  | "SENDING"
  | "ASSISTANT_WORKING"
  | "SOURCE_LOOKUP"
  | "ANSWERED"
  | "ERROR_RECOVERABLE"
  | "BLOCKED"
  | "STOPPED";

export type UseProductConversationInput = {
  projectId: string;
  /** Active cycle for Journal isolation (null → empty journal). */
  activeCycleInstanceId?: string | null;
  /**
   * Bumped by ProjectWorkspacePage after durable Product mutations so
   * chat-first governed moments rehydrate with TrajectorySurface.
   */
  durableRefreshSignal?: number;
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
  activeCycleInstanceId = null,
  durableRefreshSignal = 0,
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
  const [lrMaterializeNotice, setLrMaterializeNotice] = useState<string | null>(
    null,
  );
  const [lrMaterializeCode, setLrMaterializeCode] = useState<string | null>(
    null,
  );
  const [f2, setF2] = useState<F2TurnPayload | null>(null);
  const [activeProposal, setActiveProposal] = useState<ProposalDto | null>(null);
  /**
   * P5-S07 CP01 — durable decision-subject continuity from server read on mount.
   * Never fabricates a ProposalDto from thin air.
   */
  const [decisionSubjectContinuity, setDecisionSubjectContinuity] =
    useState<ProductDecisionSubjectContinuity>({ status: "pending" });
  const [governedExecutionContinuity, setGovernedExecutionContinuity] =
    useState<ProductGovernedExecutionContinuity>({ status: "pending" });
  const [decisionAlternateIndex, setDecisionAlternateIndex] = useState(-1);
  const [governedMomentBusy, setGovernedMomentBusy] = useState(false);
  const [governedMomentError, setGovernedMomentError] = useState<string | null>(
    null,
  );
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
  const [transcriptAvailability, setTranscriptAvailability] =
    useState<TranscriptAvailability>("pending");
  const [journalEntries, setJournalEntries] = useState<JournalSurfaceEntry[]>(
    [],
  );
  const [journalCycleInstanceId, setJournalCycleInstanceId] = useState<
    string | null
  >(null);
  /** One-shot restored hint for true project open/reload — never for live turns. */
  const [allowRestoredHint, setAllowRestoredHint] = useState(false);
  const initialContinuityResolvedRef = useRef(false);
  const [selectedJournalEntryId, setSelectedJournalEntryId] = useState<
    string | null
  >(null);
  const [focusTurnId, setFocusTurnId] = useState<string | null>(null);
  const [f3Busy, setF3Busy] = useState(false);
  const [isPending, startTransition] = useTransition();
  /** D-GF-ACW-02 — last server-issued logical turn; re-present only on failed retry. */
  const lastLogicalTurnIdRef = useRef<string | null>(null);
  const lastSendFailedRef = useRef(false);
  /**
   * Process-local pending retry envelope allocated BEFORE the server action.
   * Holds opaque turnRetryKey + exact content/history snapshot for retransmission.
   * Untrusted correlation only — never Product turn identity / Truth C.
   * Retained until terminal client-observed success.
   */
  const pendingRetryEnvelopeRef = useRef<PendingTurnRetryEnvelope | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);
  const sendGenerationRef = useRef(0);
  const mountedRef = useRef(true);
  const [cancellable, setCancellable] = useState(false);
  /** CORR-PROOF-11 — armed opaque proposalId for explicit reinstruction send. */
  const [armedReinstructionOfProposalId, setArmedReinstructionOfProposalId] =
    useState<string | null>(null);
  /**
   * RESERVATION-CONTEXT-PILOT-CONFIRMATION-01 — armed structured Reservation
   * binding for subsequent send(s). Prefill-only Treat does not send.
   */
  const [armedReservationInteractionContext, setArmedReservationInteractionContext] =
    useState<{ cycleInstanceId: string; epistemicItemId: string } | null>(null);
  const [reservationResolutionProposal, setReservationResolutionProposal] =
    useState<ReservationResolutionProposalDto | null>(null);

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
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      abortControllerRef.current?.abort();
      abortControllerRef.current = null;
      setCancellable(false);
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    setTranscriptAvailability("pending");
    initialContinuityResolvedRef.current = false;
    setAllowRestoredHint(false);
    void projectAssistantConversationContinuityAction({
      projectId,
      cycleInstanceId: activeCycleInstanceId,
    }).then((result) => {
      if (cancelled) return;
      if (!result.ok) {
        setTranscriptAvailability("unavailable");
        setJournalEntries([]);
        setJournalCycleInstanceId(null);
        initialContinuityResolvedRef.current = true;
        return;
      }
      setTranscriptAvailability(result.transcriptAvailability);
      // Always reconcile visible conversation to durable pt:* ids (Track A).
      setMessages(
        result.messages.map((m) => ({
          id: m.id,
          role: m.role,
          content: m.content,
          createdAt: m.createdAt ?? null,
        })),
      );
      setJournalCycleInstanceId(result.journal.cycleInstanceId);
      setJournalEntries(result.journal.entries);
      if (!initialContinuityResolvedRef.current) {
        initialContinuityResolvedRef.current = true;
        setAllowRestoredHint(result.transcriptAvailability === "available");
      }
    });
    return () => {
      cancelled = true;
    };
  }, [projectId, activeCycleInstanceId]);

  // P5-S07 CP01 / S08-4D — rehydrate durable decision subject + governed EC.
  // Dynamic import keeps w2/actions (server-only) out of the client module graph.
  useEffect(() => {
    let cancelled = false;
    setDecisionSubjectContinuity({ status: "pending" });
    setGovernedExecutionContinuity({ status: "pending" });
    setDecisionAlternateIndex(-1);
    setGovernedMomentError(null);
    void import("@/features/project-assistant/w2/actions")
      .then(
        async ({
          w2ReadActiveDecisionSubjectAction,
          w2ReadCurrentGovernedExecutionContinuityAction,
        }) => {
          const subject = await w2ReadActiveDecisionSubjectAction({ projectId });
          if (cancelled) return;
          if (!subject.ok) {
            setDecisionSubjectContinuity({
              status: "unavailable",
              message: subject.message,
            });
          } else {
            setDecisionSubjectContinuity(subject);
            if (
              subject.kind === "none" ||
              subject.kind === "pending_reinstruction_required"
            ) {
              setActiveProposal(null);
            }
          }
          const continuity =
            await w2ReadCurrentGovernedExecutionContinuityAction({ projectId });
          if (cancelled) return;
          if (!continuity.ok) {
            setGovernedExecutionContinuity({
              status: "unavailable",
              message: continuity.message,
            });
            return;
          }
          setGovernedExecutionContinuity(continuity);
        },
      )
      .catch(() => {
        if (cancelled) return;
        setDecisionSubjectContinuity({
          status: "unavailable",
          message: "Sujet de décision indisponible pour la reprise.",
        });
        setGovernedExecutionContinuity({
          status: "unavailable",
          message: "Continuité d'exécution indisponible pour la reprise.",
        });
      });
    return () => {
      cancelled = true;
    };
  }, [projectId, durableRefreshSignal]);

  async function refreshGovernedMoments() {
    try {
      const {
        w2ReadActiveDecisionSubjectAction,
        w2ReadCurrentGovernedExecutionContinuityAction,
      } = await import("@/features/project-assistant/w2/actions");
      const subject = await w2ReadActiveDecisionSubjectAction({ projectId });
      if (!subject.ok) {
        setDecisionSubjectContinuity({
          status: "unavailable",
          message: subject.message,
        });
      } else {
        setDecisionSubjectContinuity(subject);
      }
      const continuity = await w2ReadCurrentGovernedExecutionContinuityAction({
        projectId,
      });
      if (!continuity.ok) {
        setGovernedExecutionContinuity({
          status: "unavailable",
          message: continuity.message,
        });
      } else {
        setGovernedExecutionContinuity(continuity);
      }
    } catch {
      setGovernedMomentError("Impossible de relire le moment gouverné.");
    }
  }

  async function decideGovernedDirection(selectedOptionRef: string) {
    if (governedMomentBusy) return;
    const subject = decisionSubjectContinuity;
    if (
      !subject ||
      !("ok" in subject) ||
      !subject.ok ||
      subject.kind !== "bound_awaiting_decision"
    ) {
      return;
    }
    const optionSet = subject.optionSet;
    setGovernedMomentBusy(true);
    setGovernedMomentError(null);
    try {
      const { w2DecideTrajectoryAction } = await import(
        "@/features/project-assistant/w2/actions"
      );
      const isProposalSubject =
        optionSet.decisionSubjectMode === "proposal" ||
        Boolean(optionSet.proposalId);
      const result = isProposalSubject
        ? await w2DecideTrajectoryAction({
            projectId,
            optionSetRef: optionSet.optionSetRef,
            selectedOptionRef,
          })
        : await w2DecideTrajectoryAction({
            projectId,
            optionSetRef: optionSet.optionSetRef,
            trajectoryId: optionSet.proposedTrajectory?.trajectoryId,
            candidateVersion: optionSet.proposedTrajectory?.version,
            selectedOptionRef,
          });
      if (!result.ok) {
        setGovernedMomentError(result.message);
        return;
      }
      setDecisionAlternateIndex(-1);
      notifyDurableFactsChanged();
      await refreshGovernedMoments();
    } catch {
      setGovernedMomentError("Décision refusée — réessayez ou reformulez.");
    } finally {
      setGovernedMomentBusy(false);
    }
  }

  function revealGovernedDecisionAlternate() {
    const subject = decisionSubjectContinuity;
    if (
      !subject ||
      !("ok" in subject) ||
      !subject.ok ||
      subject.kind !== "bound_awaiting_decision"
    ) {
      return;
    }
    const recommendedRef = subject.optionSet.recommendation.recommendedOptionRef;
    const alternates = subject.optionSet.options.filter(
      (o) => o.optionRef !== recommendedRef,
    );
    if (alternates.length === 0) return;
    setDecisionAlternateIndex((prev) => {
      if (prev < 0) return 0;
      if (prev >= alternates.length - 1) return -1;
      return prev + 1;
    });
  }

  async function inspectGovernedContract() {
    if (governedMomentBusy) return;
    const continuity = governedExecutionContinuity;
    if (
      !continuity ||
      !("ok" in continuity) ||
      !continuity.ok ||
      continuity.kind !== "active"
    ) {
      return;
    }
    setGovernedMomentBusy(true);
    setGovernedMomentError(null);
    try {
      const { w2InspectExecutionContractAction } = await import(
        "@/features/project-assistant/w2/actions"
      );
      const result = await w2InspectExecutionContractAction({
        projectId,
        executionContractId: continuity.contract.executionContractId,
        expectedVersion: continuity.contract.version,
      });
      if (!result.ok) {
        setGovernedMomentError(result.message);
        return;
      }
      await refreshGovernedMoments();
    } catch {
      setGovernedMomentError("Inspection impossible.");
    } finally {
      setGovernedMomentBusy(false);
    }
  }

  async function confirmGovernedContract() {
    if (governedMomentBusy) return;
    const continuity = governedExecutionContinuity;
    if (
      !continuity ||
      !("ok" in continuity) ||
      !continuity.ok ||
      continuity.kind !== "active"
    ) {
      return;
    }
    if (continuity.contract.status !== "confirmation_required") return;
    if (!continuity.inspection.inspectionSufficient) {
      setGovernedMomentError(
        "Inspection suffisante requise avant confirmation.",
      );
      return;
    }
    setGovernedMomentBusy(true);
    setGovernedMomentError(null);
    try {
      const { w2ConfirmExecutionContractAction } = await import(
        "@/features/project-assistant/w2/actions"
      );
      const result = await w2ConfirmExecutionContractAction({
        projectId,
        executionContractId: continuity.contract.executionContractId,
      });
      if (!result.ok) {
        setGovernedMomentError(result.message);
        return;
      }
      notifyDurableFactsChanged();
      await refreshGovernedMoments();
    } catch {
      setGovernedMomentError("Confirmation refusée.");
    } finally {
      setGovernedMomentBusy(false);
    }
  }

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
    const reduceMotion =
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({
      top: el.scrollHeight,
      behavior: reduceMotion ? "auto" : "smooth",
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
  const stopAvailable = cancellable && !blocked && !f3Busy;

  function stopCurrentResponse() {
    abortControllerRef.current?.abort();
  }
  const gateOpen =
    activeProposal?.morrisGateRequired === true &&
    activeProposal.status === "DECISION_REQUIRED";
  const openContinuityPresentation = resolveProjectOpenContinuityPresentation(
    transcriptAvailability,
    { allowRestoredHint },
  );

  async function refreshConversationContinuity(options?: {
    /** When true (default), replace UI messages with durable transcript (pt:*). */
    reconcileMessages?: boolean;
    /** Disarm restored hint (default true after live session activity). */
    disarmRestoredHint?: boolean;
  }) {
    const reconcileMessages = options?.reconcileMessages !== false;
    const disarmRestoredHint = options?.disarmRestoredHint !== false;
    if (disarmRestoredHint) {
      setAllowRestoredHint(false);
    }
    const result = await projectAssistantConversationContinuityAction({
      projectId,
      cycleInstanceId: activeCycleInstanceId,
    });
    if (!result.ok) {
      setTranscriptAvailability("unavailable");
      return;
    }
    setTranscriptAvailability(result.transcriptAvailability);
    if (reconcileMessages) {
      setMessages(
        result.messages.map((m) => ({
          id: m.id,
          role: m.role,
          content: m.content,
          createdAt: m.createdAt ?? null,
        })),
      );
    }
    setJournalCycleInstanceId(result.journal.cycleInstanceId);
    setJournalEntries(result.journal.entries);
  }

  function focusJournalExchanges(entry: JournalSurfaceEntry) {
    setSelectedJournalEntryId(entry.journalEntryId);
  }

  function focusTranscriptTurn(turnId: string) {
    const id = turnId.trim();
    if (!id) return;
    setFocusTurnId(id);
  }

  function clearFocusTurn() {
    setFocusTurnId(null);
  }

  /** Full visible transcript roles for request shaping — not yet bounded. */
  function visibleTranscriptForRequest(): AssistantHistoryMessage[] {
    return messages
      .filter((m) => m.role === "user" || m.role === "assistant")
      .map((m) => ({ role: m.role as "user" | "assistant", content: m.content }));
  }

  /**
   * CR-CJ-01 — providerRecentHistory only.
   * Visible transcript may be long; model receives a bounded recent window.
   * Server re-applies the same bound (hostile/old clients cannot inject 500 msgs).
   */
  function providerRecentHistory(): AssistantHistoryMessage[] {
    return normalizeProductTurnHistory(visibleTranscriptForRequest());
  }

  function historyForRequest(): AssistantHistoryMessage[] {
    return providerRecentHistory();
  }

  function sendMessage(
    contentOverride?: string,
    options?: {
      logicalTurnId?: string | null;
      /** Reuse pending opaque retry key after silent loss / failed send. */
      turnRetryKey?: string | null;
      /**
       * Exact history snapshot from pending retry envelope.
       * When set (retry path), do NOT rebuild from React messages state.
       */
      history?: PendingTurnRetryEnvelope["history"] | null;
      /** Exact content from pending retry envelope (retry path). */
      content?: string | null;
      /**
       * CORR-PROOF-11 — opaque prior pending proposalId for explicit reinstruction.
       * Cleared by caller after a successful send that consumed it.
       */
      reinstructionOfProposalId?: string | null;
      /** Fired after a successful send that included reinstructionOfProposalId. */
      onReinstructionConsumed?: () => void;
      /**
       * RESERVATION-CONTEXT-PILOT-CONFIRMATION-01 — override armed Reservation
       * binding for this send (tests / explicit callers).
       */
      reservationInteractionContext?: {
        cycleInstanceId: string;
        epistemicItemId: string;
      } | null;
    },
  ) {
    const usingRetryEnvelope = Boolean(options?.turnRetryKey?.trim());
    const content = (
      usingRetryEnvelope
        ? (options?.content ?? contentOverride ?? "")
        : (contentOverride ?? draft)
    ).trim();
    if (!content || busy || blocked) return;

    // First send: snapshot history BEFORE appending the user message.
    // Retry: reuse the sealed envelope history — never re-read React messages.
    const history = usingRetryEnvelope
      ? [...(options?.history ?? [])]
      : historyForRequest();

    const userMessage: ProductMessage = {
      id: nextId("user"),
      role: "user",
      content,
    };
    setMessages((prev) => [...prev, userMessage]);
    setDraft("");
    setError(null);
    setUiState("SENDING");

    // New distinct send: do not auto-replay prior logicalTurnId unless retry opts in.
    const presentedLogicalTurnId =
      options?.logicalTurnId?.trim() || undefined;
    // Allocate BEFORE transport. Reuse only when retry explicitly passes the key.
    const turnRetryKey =
      options?.turnRetryKey?.trim() || createTurnRetryKey();
    const envelope = preparePendingTurnRetryEnvelope({
      content,
      history,
      turnRetryKey,
    });
    pendingRetryEnvelopeRef.current = envelope;
    const reinstructionOfProposalId =
      typeof options?.reinstructionOfProposalId === "string"
        ? options.reinstructionOfProposalId.trim() || null
        : armedReinstructionOfProposalId;
    const reservationInteractionContext =
      options?.reservationInteractionContext !== undefined
        ? options.reservationInteractionContext
        : armedReservationInteractionContext;

    startTransition(async () => {
      setUiState("ASSISTANT_WORKING");
      const generation = ++sendGenerationRef.current;
      const controller = new AbortController();
      abortControllerRef.current = controller;
      setCancellable(true);
      let result: Awaited<ReturnType<typeof sendCancellableAssistantTurn>>;
      try {
        result = await sendCancellableAssistantTurn(
          {
            projectId,
            content: envelope.content,
            history: [...envelope.history],
            turnRetryKey: envelope.turnRetryKey,
            ...(presentedLogicalTurnId
              ? { logicalTurnId: presentedLogicalTurnId }
              : {}),
            ...(reinstructionOfProposalId
              ? { reinstructionOfProposalId }
              : {}),
            ...(reservationInteractionContext
              ? { reservationInteractionContext }
              : {}),
          },
          controller.signal,
        );
      } catch (error) {
        if (abortControllerRef.current === controller) {
          abortControllerRef.current = null;
        }
        setCancellable(false);
        if (!mountedRef.current || generation !== sendGenerationRef.current) {
          return;
        }
        const aborted =
          controller.signal.aborted ||
          (error instanceof Error && error.name === "AbortError");
        if (aborted) {
          lastSendFailedRef.current = true;
          setUiState("STOPPED");
          setError(null);
          return;
        }
        lastSendFailedRef.current = true;
        setUiState("ERROR_RECOVERABLE");
        setError(
          "Échec de transport — réessayez. La corrélation de reprise est conservée.",
        );
        return;
      }

      if (abortControllerRef.current === controller) {
        abortControllerRef.current = null;
      }
      setCancellable(false);
      if (
        !mountedRef.current ||
        generation !== sendGenerationRef.current ||
        controller.signal.aborted
      ) {
        if (mountedRef.current && generation === sendGenerationRef.current) {
          lastSendFailedRef.current = true;
          setUiState("STOPPED");
          setError(null);
        }
        return;
      }

      if (!result.ok) {
        lastSendFailedRef.current = true;
        if (result.logicalTurnId) {
          lastLogicalTurnIdRef.current = result.logicalTurnId;
        } else if (presentedLogicalTurnId) {
          lastLogicalTurnIdRef.current = presentedLogicalTurnId;
        }
        if (
          typeof result.code === "string" &&
          result.code.startsWith("RESERVATION_CONTEXT_")
        ) {
          // Stale/hostile Reservation binding — clear arm; do not retarget.
          setArmedReservationInteractionContext(null);
          setReservationResolutionProposal(null);
        }
        if (result.status === "stopped") {
          setUiState("STOPPED");
          setError(null);
          return;
        }
        if (result.status === "provider_unavailable") {
          setUiState("BLOCKED");
          setModeLabel("Assistant indisponible");
        } else {
          setUiState("ERROR_RECOVERABLE");
        }
        setError(result.message);
        return;
      }

      // Supersession is a server verdict only. A DECISION_REQUIRED Proposal
      // alone does not prove the prior pending subject was replaced, so the arm
      // survives clarifications, blocks, MW5 denials and F1 advisory turns.
      if (
        reinstructionOfProposalId &&
        result.reinstructionTransition === "superseded"
      ) {
        setArmedReinstructionOfProposalId(null);
        options?.onReinstructionConsumed?.();
      }
      if (result.f2?.proposal?.status === "DECISION_REQUIRED") {
        // A committed decision subject is a durable Epistemic marker write.
        notifyDurableFactsChanged();
      }
      if (result.f2?.decision) {
        // CHAT-FIRST-GOVERNED-DECISION-LOOP-01 — the conversational turn wrote
        // a durable HumanDecision. Refresh lifecycle/subject reads so the next
        // governed step (PREPARE) appears without any decide button, and drop a
        // stale reinstruction arm the server no longer needs.
        setArmedReinstructionOfProposalId(null);
        notifyDurableFactsChanged();
      }
      if (result.reservationResolutionProposal) {
        setReservationResolutionProposal(result.reservationResolutionProposal);
      } else if (!reservationInteractionContext) {
        setReservationResolutionProposal(null);
      }
      if (
        (result.reservationProposedIds?.length ?? 0) > 0 ||
        result.reservationResolutionProposal?.proposed === true
      ) {
        // PROPOSE_RESOLUTION wrote durable Truth C — refresh Journal / Lifecycle.
        notifyDurableFactsChanged();
      }

      lastSendFailedRef.current = false;
      lastLogicalTurnIdRef.current = result.logicalTurnId ?? null;
      // Terminal client-observed success — clear transport retry envelope.
      pendingRetryEnvelopeRef.current = null;
      setModeLabel(modeFromResult(result));
      setEphemeralNotice(result.ephemeralNotice);
      setLrMaterializeNotice(
        lifecycleRecommendationMaterializeFailurePiloteNotice({
          recommendationAttempted:
            result.lifecycleRecommendationMaterialized === false &&
            Boolean(result.lifecycleRecommendationCode),
          materialized: result.lifecycleRecommendationMaterialized,
          code: result.lifecycleRecommendationCode,
        }),
      );
      setLrMaterializeCode(result.lifecycleRecommendationCode ?? null);
      setToolEvents((prev) => [...prev, ...result.toolEvents]);
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
      void refreshConversationContinuity({
        reconcileMessages: true,
        disarmRestoredHint: true,
      });
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
    const envelope = pendingRetryEnvelopeRef.current;
    if (!envelope) return;
    const lastUser = [...messages].reverse().find((m) => m.role === "user");
    if (lastUser) {
      setMessages((prev) => prev.filter((m) => m.id !== lastUser.id));
    }
    const replayId =
      lastSendFailedRef.current && lastLogicalTurnIdRef.current
        ? lastLogicalTurnIdRef.current
        : undefined;
    // Explicitly reuse sealed content + history — do not rebuild from React state.
    sendMessage(envelope.content, {
      logicalTurnId: replayId,
      turnRetryKey: envelope.turnRetryKey,
      content: envelope.content,
      history: envelope.history,
    });
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
    lrMaterializeNotice,
    lrMaterializeCode,
    f2,
    activeProposal,
    decisionSubjectContinuity,
    governedExecutionContinuity,
    decisionAlternateIndex,
    governedMomentBusy,
    governedMomentError,
    decideGovernedDirection,
    revealGovernedDecisionAlternate,
    inspectGovernedContract,
    confirmGovernedContract,
    refreshGovernedMoments,
    reservesText,
    setReservesText,
    f3Prepare,
    f3M3Resolved,
    f3Execute,
    durableEvidenceOutcome,
    durableRehydrateError,
    transcriptAvailability,
    openContinuityPresentation,
    journalEntries,
    journalCycleInstanceId,
    selectedJournalEntryId,
    setSelectedJournalEntryId,
    focusTurnId,
    focusJournalExchanges,
    focusTranscriptTurn,
    clearFocusTurn,
    refreshConversationContinuity,
    busy,
    blocked,
    canSend,
    stopAvailable,
    stopCurrentResponse,
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
    armReinstructionOfProposalId: (proposalId: string) => {
      const trimmed = proposalId.trim();
      if (trimmed) setArmedReinstructionOfProposalId(trimmed);
    },
    armedReinstructionOfProposalId,
    armReservationInteractionContext: (ctx: {
      cycleInstanceId: string;
      epistemicItemId: string;
    } | null) => {
      if (!ctx) {
        setArmedReservationInteractionContext(null);
        return;
      }
      const cycleInstanceId = ctx.cycleInstanceId.trim();
      const epistemicItemId = ctx.epistemicItemId.trim();
      if (!cycleInstanceId || !epistemicItemId) return;
      setArmedReservationInteractionContext({
        cycleInstanceId,
        epistemicItemId,
      });
      setReservationResolutionProposal(null);
    },
    armedReservationInteractionContext,
    reservationResolutionProposal,
    clearReservationResolutionProposal: () => {
      setReservationResolutionProposal(null);
    },
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
