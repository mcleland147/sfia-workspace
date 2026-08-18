"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ProjectAssistantPanel } from "@/features/project-assistant";
import type { ProjectAssistantRehydrateEvidenceOutcomeSuccess } from "@/features/project-assistant/types";
import { shouldShowProjectRecovery } from "@/features/project-assistant/presentationLabels";
import { getProjectRuntimeAction } from "@/lib/vertical-slice-runtime/actions";
import { LivingProjectStatePanel } from "./LivingProjectStatePanel";
import { ProjectHistoryPanel } from "./ProjectHistoryPanel";
import { ProjectRecoveryBanner } from "./ProjectRecoveryBanner";
import { ProjectWorkspaceView } from "@/features/vertical-slice-ui/ProjectWorkspaceView";
import styles from "./project-principal.module.css";

type GetProjectResult = Awaited<ReturnType<typeof getProjectRuntimeAction>>;

/**
 * F2/F3 principal layout: conversation-dominant + sticky LPS / drawer.
 * Owns getProjectRuntimeAction projection; refreshes after durable mutations.
 */
export function ProjectPrincipalClient({ projectId }: { projectId: string }) {
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

  function focusConversation() {
    conversationRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    const input = conversationRef.current?.querySelector(
      "[data-testid='project-assistant-input']",
    );
    if (input instanceof HTMLTextAreaElement) {
      input.focus();
    }
  }

  if (!result) {
    return (
      <p className={styles.loading} data-testid="project-workspace-loading">
        Chargement de l&apos;espace projet…
      </p>
    );
  }

  if (!result.ok) {
    return <ProjectWorkspaceView projectId={projectId} result={result} />;
  }

  const showRecovery = shouldShowProjectRecovery({
    hasDurableEvidenceOutcome: Boolean(durableOutcome),
    livingStateVersion: result.livingState.version,
    activeCycleInstanceId: result.livingState.activeCycleInstanceId,
  });

  return (
    <div className={styles.root} data-testid="project-principal">
      {showRecovery ? (
        <ProjectRecoveryBanner
          onResumeDurable={() => {
            setLpsOpen(true);
            focusConversation();
          }}
          onRequalify={focusConversation}
        />
      ) : (
        <p
          className={styles.durabilityHint}
          data-testid="project-durability-hint"
        >
          Conversation, proposition et confirmation restent process-local et
          peuvent être perdues au rechargement. Les faits durables du projet
          peuvent être relus.
        </p>
      )}

      <div className={styles.layout}>
        <div className={styles.main} ref={conversationRef}>
          <div className={styles.conversationHeader}>
            <div>
              <p className={styles.eyebrow}>Conversation</p>
              <h2 className={styles.title}>Assistant projet</h2>
              <p className={styles.lead}>
                Qualification, proposition et décision humaine — parcours
                principal. L&apos;état vivant reste secondaire.
              </p>
            </div>
            <button
              type="button"
              className={styles.lpsToggle}
              data-testid="lps-drawer-toggle"
              aria-expanded={lpsOpen}
              onClick={() => setLpsOpen((open) => !open)}
            >
              {lpsOpen ? "Fermer l'état vivant" : "Ouvrir l'état vivant"}
            </button>
          </div>

          <div
            className={styles.conversation}
            data-testid="project-conversation-main"
          >
            <ProjectAssistantPanel
              projectId={projectId}
              onDurableFactsChanged={() => {
                void loadProject();
              }}
              onDurableEvidenceOutcomeChange={setDurableOutcome}
            />
          </div>

          <ProjectHistoryPanel
            result={result}
            durableOutcome={durableOutcome}
          />
        </div>

        <div
          className={[
            styles.lpsColumn,
            lpsOpen ? styles.lpsOpen : styles.lpsClosed,
          ].join(" ")}
          data-testid="project-lps-column"
        >
          <div className={styles.lpsSheet}>
            <div className={styles.lpsSheetHeader}>
              <p className={styles.eyebrow}>État vivant</p>
              <button
                type="button"
                className={styles.lpsClose}
                data-testid="lps-drawer-close"
                onClick={() => setLpsOpen(false)}
              >
                Fermer
              </button>
            </div>
            <LivingProjectStatePanel result={result} />
          </div>
        </div>
      </div>
    </div>
  );
}
