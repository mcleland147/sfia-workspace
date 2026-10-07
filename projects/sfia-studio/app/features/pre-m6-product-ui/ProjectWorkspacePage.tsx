"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { ProjectAssistantRehydrateEvidenceOutcomeSuccess } from "@/features/project-assistant/types";
import { getProjectRuntimeAction } from "@/lib/vertical-slice-runtime/actions";
import { useProductConversation } from "./hooks/useProductConversation";
import { ConversationSurface } from "./surfaces/ConversationSurface";
import {
  JournalSurface,
  type JournalDecisionCard,
  type JournalMemoryTab,
  type JournalRecommendationCard,
  type JournalReservationCard,
} from "./surfaces/JournalSurface";
import { HistorySurface } from "./surfaces/HistorySurface";
import { LpsSurface } from "./surfaces/LpsSurface";
import { RecoverySurface } from "./surfaces/RecoverySurface";
import { LifecycleSurface } from "./surfaces/LifecycleSurface";
import { TrajectorySurface } from "./surfaces/TrajectorySurface";
import { lpsNextAction } from "./surfaces/LpsSurface";
import {
  ProjectContextShortcuts,
  ProjectContextSummary,
} from "./surfaces/ProjectContextSummary";
import { OverviewSurface } from "./surfaces/OverviewSurface";
import { ExecutionSurface } from "./surfaces/ExecutionSurface";
import { SynthesesSurface } from "./surfaces/SynthesesSurface";
import { getLatestRelevantProductSynthesisAction } from "@/features/project-assistant/synthesisActions";
import type { ProductSynthesisProjection } from "@/lib/oa/synthesis";
import {
  deriveExecutionTabBadge,
  presentPilotExecution,
  type PilotExecutionPresentation,
} from "./surfaces/pilotExecutionPresentation";
import {
  deriveAttentionItems,
  deriveCycleSummary,
  deriveTrajectoryNodes,
  presentCurrentness,
} from "./workspaceContextPresentation";
import {
  projectAssistantActiveCycleWorkspaceAction,
  projectAssistantConfirmReservationResolutionAction,
  projectAssistantDeferReservationAction,
} from "@/features/project-assistant/actions";
import {
  w2DeriveGovernedExecutionContinuityAction,
  w2ReadCurrentGovernedExecutionContinuityAction,
} from "@/features/project-assistant/w2/actions";
import type { PilotLifecycleProjection } from "@/lib/oa/cycle/application/lifecycleProjection";
import { ProjectWorkspaceRoutingPanelLazy } from "./surfaces/ProjectWorkspaceRoutingPanel";
import type { GetProjectResult, GetProjectSuccess } from "./types";
import styles from "./ProjectWorkspacePage.module.css";

/** Ephemeral presentation view — never persisted as Product state. */
type WorkspaceView =
  | "conversation"
  | "overview"
  | "execution"
  | "syntheses"
  | "history"
  | "journal";

/** Views that own the principal width — no permanent sibling context rail. */
const PRINCIPAL_ONLY_VIEWS: ReadonlySet<WorkspaceView> = new Set([
  "overview",
  "syntheses",
  "history",
  "journal",
]);

/** prefers-reduced-motion: no smooth scrolling for in-page jumps. */
function scrollBehaviorPref(): ScrollBehavior {
  if (
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return "auto";
  }
  return "smooth";
}

/**
 * CYCLE-RESERVATION-PILOTING-01 — explicit Pilot draft about one Reservation.
 * Prefill only: the Pilot reads, edits and sends. NEVER auto-sent.
 */
function reservationDraftForNora(card: JournalReservationCard | null): string {
  if (!card) {
    return "Nora, aidons-nous à traiter une réserve de ce cycle : précise-moi ce qui reste incertain et ce qu’il faudrait clarifier pour la lever.";
  }
  const label = card.ordinal > 0 ? `réserve ${card.ordinal}` : "réserve";
  const lines = [`Nora, traitons la ${label} du cycle : « ${card.title} ».`];
  if (card.summary && card.summary !== card.title) {
    lines.push(`Contexte : ${card.summary}`);
  }
  if (card.resolutionCondition) {
    lines.push(`Condition de levée connue : ${card.resolutionCondition}`);
  }
  if (card.isLegacy) {
    lines.push(
      "Cette réserve vient du modèle précédent : qualifie d’abord son impact, le moment d’attention et son effet sur la clôture.",
    );
  }
  lines.push(
    "Dis-moi ce qui manque pour la lever, ou propose une levée si la base existe déjà. Je décide.",
  );
  return lines.join("\n");
}

/**
 * Product workspace: conversation-first, not conversation-only.
 * H-01 Option A — LPS + ProjectTrajectory share one visual piloting region
 * (presentation composition only; domain objects remain distinct).
 */
export function ProjectWorkspacePage({
  projectId,
  onProjectName,
}: {
  projectId: string;
  /** P5-S07 CP02 — real project title for the focused mobile ProductShell topbar. */
  onProjectName?: (name: string) => void;
}) {
  const [result, setResult] = useState<GetProjectResult | null>(null);
  const [durableOutcome, setDurableOutcome] =
    useState<ProjectAssistantRehydrateEvidenceOutcomeSuccess | null>(null);
  const [lpsOpen, setLpsOpen] = useState(false);
  const [activeView, setActiveView] = useState<WorkspaceView>("conversation");
  const [executionPresentation, setExecutionPresentation] =
    useState<PilotExecutionPresentation | null>(null);
  const [journalCollapsed, setJournalCollapsed] = useState(false);
  const [trajectoryRefreshSignal, setTrajectoryRefreshSignal] = useState(0);
  /** B1 — bump so LifecycleSurface reloads after Trajectory (or other) durable mutations. */
  const [lifecycleRefreshSignal, setLifecycleRefreshSignal] = useState(0);
  /**
   * JOURNEY-INTEGRITY — Proposal subject ownership from TrajectorySurface.
   * Fail-closed UNKNOWN until first durable subject read resolves.
   */
  const [proposalSubjectOwnership, setProposalSubjectOwnership] = useState<
    "UNKNOWN" | "OWNED" | "NONE"
  >("UNKNOWN");
  /**
   * CYCLE-RESERVATION-PILOTING-01 — Journal rail tab + mirrored lifecycle projection.
   * Reservations are read from the durable projection LifecycleSurface already loads
   * (no second fetch, no parallel store).
   */
  const [memoryTab, setMemoryTab] = useState<JournalMemoryTab>("sujets");
  const [lifecycleProjection, setLifecycleProjection] =
    useState<PilotLifecycleProjection | null>(null);
  const [reservationBusyId, setReservationBusyId] = useState<string | null>(null);
  const [reservationNotice, setReservationNotice] = useState<string | null>(null);
  const [latestSynthesis, setLatestSynthesis] =
    useState<ProductSynthesisProjection | null>(null);
  const [synthesesFocusId, setSynthesesFocusId] = useState<string | null>(null);
  const conversationRef = useRef<HTMLDivElement | null>(null);
  const refreshInFlight = useRef(false);

  const loadProject = useCallback(async () => {
    if (refreshInFlight.current) return;
    refreshInFlight.current = true;
    try {
      const next = await getProjectRuntimeAction(projectId);
      setResult(next);
    } finally {
      refreshInFlight.current = false;
    }
  }, [projectId]);

  const notifyDurableFactsChanged = useCallback(() => {
    void loadProject();
    setTrajectoryRefreshSignal((n) => n + 1);
    setLifecycleRefreshSignal((n) => n + 1);
  }, [loadProject]);

  useEffect(() => {
    let cancelled = false;
    void getProjectRuntimeAction(projectId).then((next) => {
      if (!cancelled) setResult(next);
    });
    return () => {
      cancelled = true;
    };
  }, [projectId]);

  useEffect(() => {
    if (result?.ok && result.project.name) {
      onProjectName?.(result.project.name);
    }
  }, [result, onProjectName]);

  /** Badge honesty — read canonical continuity without inventing a count. */
  useEffect(() => {
    let cancelled = false;
    void (async () => {
      const [derived, current] = await Promise.all([
        w2DeriveGovernedExecutionContinuityAction({ projectId }),
        w2ReadCurrentGovernedExecutionContinuityAction({ projectId }),
      ]);
      if (cancelled) return;
      setExecutionPresentation(
        presentPilotExecution({
          continuityProjection: derived,
          preExecutionContinuity: current.ok ? current : null,
        }),
      );
    })();
    return () => {
      cancelled = true;
    };
  }, [projectId]);

  const refreshLatestSynthesis = useCallback(async () => {
    const result = await getLatestRelevantProductSynthesisAction({ projectId });
    if (result.ok) setLatestSynthesis(result.synthesis);
    else setLatestSynthesis(null);
  }, [projectId]);

  useEffect(() => {
    void refreshLatestSynthesis();
  }, [
    refreshLatestSynthesis,
    lifecycleRefreshSignal,
    trajectoryRefreshSignal,
  ]);

  const focusConversation = useCallback(() => {
    setActiveView("conversation");
    window.setTimeout(() => {
      const node = conversationRef.current;
      if (node && typeof node.scrollIntoView === "function") {
        node.scrollIntoView({
          behavior: scrollBehaviorPref(),
          block: "start",
        });
      }
      const input = node?.querySelector(
        "[data-testid='project-assistant-input']",
      );
      if (input instanceof HTMLTextAreaElement) input.focus();
    }, 0);
  }, []);

  const controller = useProductConversation({
    projectId,
    activeCycleInstanceId: result?.ok
      ? result.livingState.activeCycleInstanceId
      : null,
    durableRefreshSignal: trajectoryRefreshSignal,
    onDurableFactsChanged: notifyDurableFactsChanged,
    onDurableEvidenceOutcomeChange: setDurableOutcome,
  });

  const cycleReservations: JournalReservationCard[] =
    lifecycleProjection?.cycleReservations
      ? [...lifecycleProjection.cycleReservations]
      : [];
  const reservationCycleInstanceId =
    lifecycleProjection?.selectedCycleInstanceId ?? null;
  /** Same durable projection as Réserves — no second fetch, no parallel store.
   * Work Recommendations only (never Lifecycle NEXT_CYCLE / FINALIZE). */
  const cycleRecommendations: JournalRecommendationCard[] =
    lifecycleProjection?.cycleWorkRecommendations
      ? [...lifecycleProjection.cycleWorkRecommendations]
      : [];
  const cycleDecisions: JournalDecisionCard[] =
    lifecycleProjection?.cycleDecisions
      ? [...lifecycleProjection.cycleDecisions]
      : [];

  /** « Voir les réserves » — the dedicated Journal on its Réserves rail. */
  const openReservationsTab = useCallback(() => {
    setActiveView("journal");
    setMemoryTab("reserves");
    setJournalCollapsed(false);
    setLpsOpen(false);
  }, []);

  /** Prefill composer with an explicit Pilot draft — NEVER sendMessage. */
  const treatReservationWithNora = (epistemicItemId: string) => {
    const card =
      cycleReservations.find((c) => c.epistemicItemId === epistemicItemId) ??
      null;
    controller.setDraft(reservationDraftForNora(card));
    setReservationNotice(null);
    if (reservationCycleInstanceId && epistemicItemId.trim()) {
      controller.armReservationInteractionContext({
        cycleInstanceId: reservationCycleInstanceId,
        epistemicItemId: epistemicItemId.trim(),
      });
    } else {
      controller.armReservationInteractionContext(null);
    }
    focusConversation();
  };

  const confirmReservationResolution = useCallback(
    async (epistemicItemId: string) => {
      if (!reservationCycleInstanceId) return;
      setReservationBusyId(epistemicItemId);
      setReservationNotice(null);
      try {
        const outcome = await projectAssistantConfirmReservationResolutionAction({
          projectId,
          cycleInstanceId: reservationCycleInstanceId,
          epistemicItemId,
        });
        if (!outcome.ok) {
          setReservationNotice(
            outcome.message ?? outcome.code ?? "Levée refusée.",
          );
          if (outcome.projection) setLifecycleProjection(outcome.projection);
          return;
        }
        setReservationNotice(outcome.message ?? "Levée de la réserve confirmée.");
        if (outcome.projection) setLifecycleProjection(outcome.projection);
        controller.armReservationInteractionContext(null);
        controller.clearReservationResolutionProposal();
        notifyDurableFactsChanged();
      } finally {
        setReservationBusyId(null);
      }
    },
    [projectId, reservationCycleInstanceId, notifyDurableFactsChanged, controller],
  );

  const confirmReservationDefer = useCallback(
    async (input: {
      epistemicItemId: string;
      targetCycleTypeId: string;
      targetLabel: string;
    }) => {
      if (!reservationCycleInstanceId) return;
      setReservationBusyId(input.epistemicItemId);
      setReservationNotice(null);
      try {
        const outcome = await projectAssistantDeferReservationAction({
          projectId,
          cycleInstanceId: reservationCycleInstanceId,
          epistemicItemId: input.epistemicItemId,
          targetCycleTypeId: input.targetCycleTypeId,
          targetLabel: input.targetLabel,
        });
        if (!outcome.ok) {
          setReservationNotice(
            outcome.message ?? outcome.code ?? "Report refusé.",
          );
          if (outcome.projection) setLifecycleProjection(outcome.projection);
          return;
        }
        setReservationNotice(
          outcome.message ?? "Réserve reportée — décision enregistrée.",
        );
        if (outcome.projection) setLifecycleProjection(outcome.projection);
        notifyDurableFactsChanged();
      } finally {
        setReservationBusyId(null);
      }
    },
    [projectId, reservationCycleInstanceId, notifyDurableFactsChanged],
  );

  /**
   * CHAT-FIRST-GOVERNED-DECISION-LOOP-01 — prefill only. Resuming a
   * Recommendation in the chat writes nothing and decides nothing; the Pilot
   * reads, edits and sends.
   */
  const resumeRecommendationInChat = (recommendationId: string) => {
    const card = cycleRecommendations.find(
      (r) => r.epistemicItemId === recommendationId,
    );
    if (!card) return;
    controller.setDraft(
      [
        `Nora, reprenons cette recommandation : « ${card.statement} »`,
        "Dis-moi ce qu'elle implique et ce qui manque pour que je tranche. Je décide.",
      ].join("\n"),
    );
    focusConversation();
  };

  const viewJournalSubject = (journalEntryId: string) => {
    setActiveView("journal");
    setMemoryTab("sujets");
    controller.setSelectedJournalEntryId(journalEntryId);
    window.setTimeout(() => {
      const el = document.querySelector(
        `[data-testid='cycle-journal-entry-${journalEntryId}']`,
      );
      if (el instanceof HTMLElement) {
        el.scrollIntoView({ behavior: scrollBehaviorPref(), block: "nearest" });
      }
    }, 0);
  };

  const scrollToTestId = useCallback((testId: string) => {
    const el = document.querySelector(`[data-testid='${testId}']`);
    if (el instanceof HTMLElement) {
      el.scrollIntoView({ behavior: scrollBehaviorPref(), block: "start" });
      return true;
    }
    return false;
  }, []);

  /**
   * « Journal du cycle » — dedicated principal view (P3 94:2), like Historique.
   * The context rail keeps only a compact shortcut into this same surface.
   */
  const openJournal = useCallback(() => {
    setActiveView("journal");
    setMemoryTab("sujets");
    setJournalCollapsed(false);
    setLpsOpen(false);
  }, []);

  /** Shortcut « Historique » — dedicated Product-derived History surface (P3). */
  const openHistory = useCallback(() => {
    setActiveView("history");
    setLpsOpen(false);
  }, []);

  /** Tab « Aperçu » — real object-native orientation projection (not scroll-only). */
  const openOverview = useCallback(() => {
    setActiveView("overview");
    // Keep the optional context sheet closed by default so Aperçu remains the
    // main projection (especially on mobile, where the sheet would cover it).
    setLpsOpen(false);
  }, []);

  /** Tab « Exécution » — real governed-execution projection (not scroll-only). */
  const openExecution = useCallback(() => {
    setActiveView("execution");
    setLpsOpen(false);
  }, []);

  const openSyntheses = useCallback((synthesisId?: string | null) => {
    setSynthesesFocusId(synthesisId ?? null);
    setActiveView("syntheses");
    setLpsOpen(false);
  }, []);

  const openSynthesisDetail = useCallback(
    (synthesisId: string) => {
      openSyntheses(synthesisId);
    },
    [openSyntheses],
  );

  const handleExecutionPresentationChange = useCallback(
    (presentation: PilotExecutionPresentation) => {
      setExecutionPresentation(presentation);
    },
    [],
  );

  if (!result) {
    return (
      <p className={styles.loading} data-testid="project-workspace-loading">
        Ouverture du projet…
      </p>
    );
  }

  if (!result.ok) {
    return (
      <div className={styles.errorPage} role="alert">
        <h1 className={styles.errorTitle}>Ce projet n&apos;est pas accessible</h1>
        <p className={styles.errorBody}>
          {result.error.message ||
            "Le projet demandé n’a pas pu être ouvert. Rien n’a été modifié."}
        </p>
        <p className={styles.errorHint}>
          {result.error.retryable
            ? "Vous pouvez réessayer dans un instant."
            : "Vérifiez le lien depuis la liste des projets."}
        </p>
        <Link href="/studio" className={styles.errorCta}>
          Revenir aux projets
        </Link>
      </div>
    );
  }

  const success: GetProjectSuccess = result;

  /**
   * AUTOMATIC PROJECT RESUME — durable state already loads with the page.
   * No generic « Reprendre / nouvelle intention » chooser on open.
   * Restored hint is one-shot on initial open/reload only (Track G).
   */
  const continuity = controller.openContinuityPresentation ?? { kind: "none" as const };

  /** Suppress competing generic Nora/intention CTAs while subject is owned or unknown. */
  const suppressGenericIntentionCta =
    proposalSubjectOwnership === "UNKNOWN" ||
    proposalSubjectOwnership === "OWNED";

  const lifecycle = lifecycleProjection;
  const decisionPending =
    controller.activeProposal?.status === "DECISION_REQUIRED";
  const currentness = presentCurrentness({
    transcriptAvailability: controller.transcriptAvailability,
    stateVersion: success.livingState.version,
  });
  const cycleSummary = deriveCycleSummary(lifecycle);
  const attention = deriveAttentionItems({ decisionPending, lifecycle });
  const trajectoryNodes = deriveTrajectoryNodes(lifecycle);
  const focusTopic =
    controller.journalEntries.find((e) => e.isCurrentTopic)?.title ?? null;
  const nextAction = lpsNextAction(success.readiness.status);
  const decisionCount = attention.some((a) => a.key === "decision") ? 1 : 0;
  const reserveCount = lifecycle?.reservationSummary?.activeCount ?? 0;
  const executionBadge =
    executionPresentation != null
      ? deriveExecutionTabBadge(executionPresentation)
      : null;
  const principalOnly = PRINCIPAL_ONLY_VIEWS.has(activeView);
  const showContextRail = !principalOnly;

  return (
    <div
      className={styles.root}
      data-testid="project-principal"
      data-active-view={activeView}
    >
      <div
        className={styles.globalHeader}
        data-testid="project-global-header"
      >
        <nav className={styles.breadcrumb} aria-label="Fil d’Ariane">
          <Link href="/studio" className={styles.breadcrumbLink}>
            Projets
          </Link>
          <span className={styles.breadcrumbSep} aria-hidden>
            /
          </span>
          <span className={styles.breadcrumbCurrent} aria-current="page">
            {success.project.name}
          </span>
        </nav>
        <span
          className={styles.currentness}
          data-tone={currentness.tone}
          data-testid="project-currentness-chip"
          title={currentness.detail}
        >
          {currentness.label}
        </span>
      </div>

      <header className={styles.projectHeader} data-testid="project-header">
        <div className={styles.projectHeaderRow}>
          <div className={styles.projectHeaderText}>
            <h1 className={styles.projectTitle}>{success.project.name}</h1>
            <p className={styles.projectObjective}>
              {success.project.objective}
            </p>
          </div>
          <div className={styles.projectChips}>
            {lifecycle?.selectedCycleInstanceId ? (
              <>
                <span className={styles.chipAccent}>{cycleSummary.label}</span>
                {cycleSummary.statusLabel ? (
                  <span className={styles.chipMuted}>
                    {cycleSummary.statusLabel}
                  </span>
                ) : null}
              </>
            ) : null}
            {showContextRail ? (
              <button
                type="button"
                className={styles.lpsToggle}
                data-testid="lps-drawer-toggle"
                aria-expanded={lpsOpen}
                onClick={() => setLpsOpen((open) => !open)}
              >
                {lpsOpen
                  ? "Masquer l'état et la trajectoire"
                  : "État du projet / Trajectoire"}
              </button>
            ) : null}
          </div>
        </div>
        {/*
         * H2 190:111 — compact History page head (title + short subtitle).
         * Shown only in the compact band; LARGE keeps the project title block.
         */}
        {activeView === "history" ? (
          <div
            className={styles.historyPageHead}
            data-testid="history-page-head"
          >
            <h1 className={styles.historyPageTitle}>Historique</h1>
            <p className={styles.historyPageSubtitle}>
              Retrouver les changements importants du projet et leur contexte.
            </p>
          </div>
        ) : null}
        <nav
          className={styles.tabs}
          aria-label="Vues du projet"
          data-testid="project-tabs"
          data-active-view={activeView}
        >
          <button
            type="button"
            className={styles.tab}
            data-selected={activeView === "conversation" ? "true" : "false"}
            aria-current={activeView === "conversation" ? "true" : undefined}
            data-testid="project-tab-conversation"
            onClick={focusConversation}
          >
            Conversation
          </button>
          <button
            type="button"
            className={styles.tab}
            data-selected={activeView === "overview" ? "true" : "false"}
            aria-current={activeView === "overview" ? "true" : undefined}
            data-testid="project-tab-overview"
            onClick={openOverview}
          >
            Aperçu
          </button>
          <button
            type="button"
            className={styles.tab}
            data-selected={activeView === "execution" ? "true" : "false"}
            aria-current={activeView === "execution" ? "true" : undefined}
            data-testid="project-tab-execution"
            onClick={openExecution}
          >
            Exécution
            {executionBadge != null ? (
              <span
                className={styles.tabBadge}
                data-testid="project-tab-execution-badge"
              >
                {executionBadge}
              </span>
            ) : null}
          </button>
        </nav>
      </header>

      <div
        className={[styles.layout, principalOnly ? styles.layoutOverview : ""]
          .filter(Boolean)
          .join(" ")}
        data-testid="project-workspace-layout"
        data-layout={principalOnly ? "overview" : "split"}
      >
        <div className={styles.main} ref={conversationRef}>
          {activeView === "conversation" ? (
            <>
              <div
                className={styles.mobileFocusStrip}
                data-testid="project-mobile-focus-strip"
              >
                <span className={styles.mobileFocusLabel}>
                  Priorité ·{" "}
                  {focusTopic ??
                    (lifecycle?.selectedCycleInstanceId
                      ? cycleSummary.label
                      : "Conversation avec Nora")}
                </span>
                <button
                  type="button"
                  className={styles.mobileFocusContext}
                  data-testid="project-mobile-open-context"
                  aria-expanded={lpsOpen}
                  onClick={() => setLpsOpen(true)}
                >
                  Contexte →
                </button>
              </div>

              <div className={styles.focusBar} data-testid="project-focus-bar">
                <span className={styles.focusLabel}>
                  <span className={styles.focusDot} aria-hidden />
                  Priorité actuelle
                </span>
                <span className={styles.focusTitle}>
                  {focusTopic ??
                    (lifecycle?.selectedCycleInstanceId
                      ? cycleSummary.label
                      : "Conversation avec Nora")}
                </span>
                <span className={styles.focusCounts}>
                  {decisionCount > 0 ? (
                    <span className={styles.focusCount}>1 décision</span>
                  ) : null}
                  {reserveCount > 0 ? (
                    <span className={styles.focusCount}>
                      {reserveCount} réserve{reserveCount > 1 ? "s" : ""}
                    </span>
                  ) : null}
                </span>
              </div>

              {continuity.kind === "restored_hint" ? (
                <p
                  className={styles.durabilityHint}
                  data-testid="project-auto-resume-hint"
                >
                  {continuity.message}
                </p>
              ) : null}
              {continuity.kind === "transcript_unavailable" ? (
                <RecoverySurface
                  message={continuity.message}
                  onRetryTranscript={() => {
                    void controller.refreshConversationContinuity();
                  }}
                />
              ) : null}

              <div
                className={styles.conversation}
                data-testid="project-conversation-main"
              >
                <ConversationSurface
                  controller={controller}
                  onConfirmReservationResolve={confirmReservationResolution}
                  reservationConfirmBusyId={reservationBusyId}
                  latestSynthesis={latestSynthesis}
                  onOpenSynthesis={openSynthesisDetail}
                />
              </div>
            </>
          ) : null}

          {activeView === "overview" ? (
            <OverviewSurface
              projectId={projectId}
              projectName={success.project.name}
              cycle={cycleSummary}
              focus={nextAction}
              focusTopic={focusTopic}
              currentness={currentness}
              trajectory={trajectoryNodes}
              attention={attention}
              onOpenConversation={focusConversation}
              onOpenJournal={openJournal}
              onOpenHistory={openHistory}
              onOpenSyntheses={() => openSyntheses()}
              onOpenSynthesisDetail={openSynthesisDetail}
            />
          ) : null}

          {activeView === "syntheses" ? (
            <SynthesesSurface
              projectId={projectId}
              initialSynthesisId={synthesesFocusId}
              onReturnToOverview={openOverview}
            />
          ) : null}

          {activeView === "history" ? (
            <HistorySurface
              result={success}
              durableOutcome={durableOutcome}
              onReturnToOverview={openOverview}
              onAskNora={(draft) => {
                controller.setDraft(draft);
                focusConversation();
              }}
            />
          ) : null}

          {activeView === "journal" ? (
            <JournalSurface
              variant="principal"
              entries={controller.journalEntries}
              cycleInstanceId={controller.journalCycleInstanceId}
              reservationsCycleInstanceId={reservationCycleInstanceId}
              selectedEntryId={controller.selectedJournalEntryId}
              onSelectEntry={controller.setSelectedJournalEntryId}
              onViewExchanges={controller.focusJournalExchanges}
              onFocusTurn={(turnId) => {
                focusConversation();
                controller.focusTranscriptTurn(turnId);
              }}
              transcriptMessages={controller.messages}
              onReturnToConversation={focusConversation}
              cycleLabel={
                lifecycle?.selectedCycleInstanceId ? cycleSummary.label : null
              }
              currentnessLabel={currentness.label}
              reservations={cycleReservations}
              memoryTab={memoryTab}
              onMemoryTabChange={setMemoryTab}
              onTreatWithNora={treatReservationWithNora}
              onConfirmResolve={confirmReservationResolution}
              onConfirmDefer={confirmReservationDefer}
              onViewJournalSubject={viewJournalSubject}
              reservationBusyId={reservationBusyId}
              recommendations={cycleRecommendations}
              decisions={cycleDecisions}
              onResumeRecommendationInChat={resumeRecommendationInChat}
            />
          ) : null}

          {activeView === "execution" ? (
            <ExecutionSurface
              projectId={projectId}
              onReturnToConversation={focusConversation}
              onPresentationChange={handleExecutionPresentationChange}
              onDurableFactsChanged={notifyDurableFactsChanged}
            />
          ) : null}
        </div>

        {showContextRail ? (
        <aside
          className={[
            styles.lpsColumn,
            lpsOpen ? styles.lpsOpen : styles.lpsClosed,
          ].join(" ")}
          data-testid="project-lps-column"
          aria-label="Contexte du projet"
        >
          <div className={styles.lpsSheet}>
            <button
              type="button"
              className={styles.lpsClose}
              data-testid="lps-drawer-close"
              onClick={() => setLpsOpen(false)}
            >
              Fermer
            </button>

            <ProjectContextSummary
              cycle={cycleSummary}
              focus={nextAction}
              focusTopic={focusTopic}
              currentness={currentness}
              trajectory={trajectoryNodes}
              attention={attention}
              latestSynthesis={latestSynthesis}
            />

            <section
              className={styles.stateTrajectoryRegion}
              data-testid="project-state-trajectory-region"
              aria-label="État du projet et trajectoire"
            >
              <header className={styles.stateTrajectoryHead}>
                <p className={styles.stateTrajectoryEyebrow}>
                  Pilotage du projet
                </p>
                <h2 className={styles.stateTrajectoryTitle}>
                  État actuel et trajectoire
                </h2>
              </header>
              <div
                className={styles.stateTrajectoryStack}
                data-testid="h01-lps-trajectory-composition"
              >
                <LifecycleSurface
                  projectId={projectId}
                  durableRefreshSignal={lifecycleRefreshSignal}
                  onDurableFactsChanged={notifyDurableFactsChanged}
                  suppressGenericNoraCta={suppressGenericIntentionCta}
                  onProjectionChange={setLifecycleProjection}
                  onOpenReservations={openReservationsTab}
                  onTreatReservationWithNora={treatReservationWithNora}
                  onEscalateTrajectory={() => {
                    scrollToTestId("w2-trajectory-panel");
                  }}
                />
                <LpsSurface result={success} />
                <ProjectWorkspaceRoutingPanelLazy
                  projectId={projectId}
                  projectWorkspaceKey={
                    success.project.projectWorkspaceKey ?? null
                  }
                  pathRoot={
                    success.project.repositoryBinding?.pathRoot ?? null
                  }
                  repositoryIdentity={
                    success.project.repositoryBinding?.identity ?? null
                  }
                  loadActiveCycleWorkspace={async () => {
                    const info = await projectAssistantActiveCycleWorkspaceAction(
                      { projectId },
                    );
                    return {
                      cycleTypeId: info.cycleTypeId,
                      repositoryWorkspaceSegment:
                        info.repositoryWorkspaceSegment,
                    };
                  }}
                />
                <TrajectorySurface
                  projectId={projectId}
                  composition="lps-embedded"
                  durableRefreshSignal={trajectoryRefreshSignal}
                  onDurableFactsChanged={notifyDurableFactsChanged}
                  onProposalSubjectOwnershipChange={setProposalSubjectOwnership}
                  activeProposalId={
                    controller.activeProposal?.status === "DECISION_REQUIRED"
                      ? controller.activeProposal.proposalId
                      : null
                  }
                  onRequestReformulateWithNora={(proposalId) => {
                    controller.armReinstructionOfProposalId(proposalId);
                    focusConversation();
                  }}
                />
              </div>
            </section>

            <div
              className={styles.journalColumn}
              data-testid="project-journal-column"
            >
              <JournalSurface
                variant="rail"
                onOpenFullJournal={openJournal}
                railMaxEntries={3}
                entries={controller.journalEntries}
                cycleInstanceId={controller.journalCycleInstanceId}
                reservationsCycleInstanceId={reservationCycleInstanceId}
                selectedEntryId={controller.selectedJournalEntryId}
                onSelectEntry={controller.setSelectedJournalEntryId}
                onViewExchanges={controller.focusJournalExchanges}
                onFocusTurn={controller.focusTranscriptTurn}
                transcriptMessages={controller.messages}
                collapsed={journalCollapsed}
                onToggleCollapsed={() => setJournalCollapsed((v) => !v)}
                reservations={cycleReservations}
                memoryTab={memoryTab}
                onMemoryTabChange={setMemoryTab}
                onTreatWithNora={treatReservationWithNora}
                onConfirmResolve={confirmReservationResolution}
                onConfirmDefer={confirmReservationDefer}
                onViewJournalSubject={viewJournalSubject}
                reservationBusyId={reservationBusyId}
                recommendations={cycleRecommendations}
                decisions={cycleDecisions}
                onResumeRecommendationInChat={resumeRecommendationInChat}
              />
              {reservationNotice ? (
                <p
                  className={styles.durabilityHint}
                  data-testid="cycle-reservation-notice"
                  role="status"
                >
                  {reservationNotice}
                </p>
              ) : null}
            </div>
          </div>

          <ProjectContextShortcuts
            onOpenJournal={openJournal}
            onOpenHistory={openHistory}
            onOpenSyntheses={() => openSyntheses()}
          />
        </aside>
        ) : null}
      </div>
    </div>
  );
}
