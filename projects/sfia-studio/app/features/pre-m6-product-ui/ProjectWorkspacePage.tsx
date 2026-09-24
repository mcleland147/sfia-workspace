"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { ProjectAssistantRehydrateEvidenceOutcomeSuccess } from "@/features/project-assistant/types";
import { getProjectRuntimeAction } from "@/lib/vertical-slice-runtime/actions";
import { useProductConversation } from "./hooks/useProductConversation";
import { ConversationSurface } from "./surfaces/ConversationSurface";
import { JournalSurface } from "./surfaces/JournalSurface";
import { HistorySurface } from "./surfaces/HistorySurface";
import { LpsSurface } from "./surfaces/LpsSurface";
import { RecoverySurface } from "./surfaces/RecoverySurface";
import { LifecycleSurface } from "./surfaces/LifecycleSurface";
import { TrajectorySurface } from "./surfaces/TrajectorySurface";
import { projectAssistantActiveCycleWorkspaceAction } from "@/features/project-assistant/actions";
import { ProjectWorkspaceRoutingPanelLazy } from "./surfaces/ProjectWorkspaceRoutingPanel";
import type { GetProjectResult, GetProjectSuccess } from "./types";
import styles from "./ProjectWorkspacePage.module.css";

/**
 * Product workspace: conversation-first, not conversation-only.
 * H-01 Option A — LPS + ProjectTrajectory share one visual piloting region
 * (presentation composition only; domain objects remain distinct).
 */
export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
  const [result, setResult] = useState<GetProjectResult | null>(null);
  const [durableOutcome, setDurableOutcome] =
    useState<ProjectAssistantRehydrateEvidenceOutcomeSuccess | null>(null);
  const [lpsOpen, setLpsOpen] = useState(false);
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

  const focusConversation = useCallback(() => {
    conversationRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    const input = conversationRef.current?.querySelector(
      "[data-testid='project-assistant-input']",
    );
    if (input instanceof HTMLTextAreaElement) input.focus();
  }, []);

  const controller = useProductConversation({
    projectId,
    activeCycleInstanceId: result?.ok
      ? result.livingState.activeCycleInstanceId
      : null,
    onDurableFactsChanged: notifyDurableFactsChanged,
    onDurableEvidenceOutcomeChange: setDurableOutcome,
  });

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

  return (
    <div className={styles.root} data-testid="project-principal">
      <header className={styles.projectHeader}>
        <div className={styles.projectHeaderText}>
          <h1 className={styles.projectTitle}>{success.project.name}</h1>
          <p className={styles.projectObjective}>{success.project.objective}</p>
        </div>
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
      </header>

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

      <div className={styles.layout} data-testid="project-workspace-layout">
        <div className={styles.journalColumn} data-testid="project-journal-column">
          <JournalSurface
            entries={controller.journalEntries}
            cycleInstanceId={controller.journalCycleInstanceId}
            selectedEntryId={controller.selectedJournalEntryId}
            onSelectEntry={controller.setSelectedJournalEntryId}
            onViewExchanges={controller.focusJournalExchanges}
            onFocusTurn={controller.focusTranscriptTurn}
            transcriptMessages={controller.messages}
            collapsed={journalCollapsed}
            onToggleCollapsed={() => setJournalCollapsed((v) => !v)}
          />
        </div>

        <div className={styles.main} ref={conversationRef}>
          <div className={styles.conversation} data-testid="project-conversation-main">
            <ConversationSurface controller={controller} />
          </div>
          <HistorySurface result={success} durableOutcome={durableOutcome} />
        </div>

        <div
          className={[styles.lpsColumn, lpsOpen ? styles.lpsOpen : styles.lpsClosed].join(
            " ",
          )}
          data-testid="project-lps-column"
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
                <p className={styles.stateTrajectoryNote}>
                  L&apos;état actuel et la trajectoire sont regroupés ici pour
                  faciliter le pilotage.
                </p>
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
                  onEscalateTrajectory={() => {
                    const el = document.querySelector(
                      "[data-testid='w2-trajectory-panel']",
                    );
                    if (el instanceof HTMLElement) {
                      el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
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
          </div>
        </div>
      </div>
    </div>
  );
}
