"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { shouldShowProjectRecovery, w1RestartHonestyMessage } from "@/features/project-assistant/presentationLabels";
import type { ProjectAssistantRehydrateEvidenceOutcomeSuccess } from "@/features/project-assistant/types";
import { getProjectRuntimeAction } from "@/lib/vertical-slice-runtime/actions";
import { useProductConversation } from "./hooks/useProductConversation";
import { ConversationSurface } from "./surfaces/ConversationSurface";
import { HistorySurface } from "./surfaces/HistorySurface";
import { LpsSurface } from "./surfaces/LpsSurface";
import { RecoverySurface } from "./surfaces/RecoverySurface";
import { TrajectorySurface } from "./surfaces/TrajectorySurface";
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
  const [recoveryProposeSignal, setRecoveryProposeSignal] = useState(0);
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

  const onRequalify = useCallback(async () => {
    // B1 — bump signal so TrajectorySurface runs its own proposeOptions()
    // (shared code path that materializes w2-options).
    setRecoveryProposeSignal((n) => n + 1);
    focusConversation();
    void loadProject();
  }, [focusConversation, loadProject]);

  const controller = useProductConversation({
    projectId,
    onDurableFactsChanged: () => {
      void loadProject();
    },
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

  const showRecovery = shouldShowProjectRecovery({
    hasDurableEvidenceOutcome: Boolean(durableOutcome),
    livingStateVersion: success.livingState.version,
    activeCycleInstanceId: success.livingState.activeCycleInstanceId,
  });

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

      {showRecovery ? (
        <RecoverySurface
          onResumeDurable={() => {
            setLpsOpen(true);
            focusConversation();
          }}
          onRequalify={() => {
            void onRequalify();
          }}
        />
      ) : (
        <p className={styles.durabilityHint} data-testid="project-durability-hint">
          {w1RestartHonestyMessage()}
        </p>
      )}

      <div className={styles.layout}>
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
                <LpsSurface result={success} />
                <TrajectorySurface
                  projectId={projectId}
                  composition="lps-embedded"
                  recoveryProposeSignal={recoveryProposeSignal}
                  onDurableFactsChanged={() => {
                    void loadProject();
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
