"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { shouldShowProjectRecovery } from "@/features/project-assistant/presentationLabels";
import type { ProjectAssistantRehydrateEvidenceOutcomeSuccess } from "@/features/project-assistant/types";
import { getProjectRuntimeAction } from "@/lib/vertical-slice-runtime/actions";
import { useProductConversation } from "./hooks/useProductConversation";
import { ConversationSurface } from "./surfaces/ConversationSurface";
import { HistorySurface } from "./surfaces/HistorySurface";
import { LpsSurface } from "./surfaces/LpsSurface";
import { RecoverySurface } from "./surfaces/RecoverySurface";
import type { GetProjectResult, GetProjectSuccess } from "./types";
import styles from "./ProjectWorkspacePage.module.css";

/** F2/F3 product workspace: conversation dominant, project state alongside. */
export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
  const [result, setResult] = useState<GetProjectResult | null>(null);
  const [durableOutcome, setDurableOutcome] =
    useState<ProjectAssistantRehydrateEvidenceOutcomeSuccess | null>(null);
  const [lpsOpen, setLpsOpen] = useState(false);
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
          {lpsOpen ? "Masquer l'état du projet" : "État du projet"}
        </button>
      </header>

      {showRecovery ? (
        <RecoverySurface
          onResumeDurable={() => {
            setLpsOpen(true);
            focusConversation();
          }}
          onRequalify={focusConversation}
        />
      ) : (
        <p className={styles.durabilityHint} data-testid="project-durability-hint">
          La conversation, la proposition et la confirmation restent
          process-local et peuvent être perdues au rechargement. Ce qui est
          enregistré pour le projet peut être relu.
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
            <LpsSurface result={success} />
          </div>
        </div>
      </div>
    </div>
  );
}
