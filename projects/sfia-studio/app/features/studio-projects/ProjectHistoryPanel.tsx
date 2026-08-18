"use client";

import type { getProjectRuntimeAction } from "@/lib/vertical-slice-runtime/actions";
import type { ProjectAssistantRehydrateEvidenceOutcomeSuccess } from "@/features/project-assistant/types";
import styles from "./project-history-panel.module.css";

type GetProjectResult = Awaited<ReturnType<typeof getProjectRuntimeAction>>;
type GetProjectSuccess = Extract<GetProjectResult, { ok: true }>;

type HistoryAnchor = {
  id: string;
  kind: string;
  label: string;
  detail?: string;
};

function buildAnchors(
  result: GetProjectSuccess,
  durableOutcome: ProjectAssistantRehydrateEvidenceOutcomeSuccess | null,
): HistoryAnchor[] {
  const anchors: HistoryAnchor[] = [
    {
      id: "project",
      kind: "Projet",
      label: result.project.name,
      detail: "Identité projet",
    },
    {
      id: "lps",
      kind: "État vivant",
      label: `Version ${result.livingState.version}`,
      detail: result.livingState.createdAt,
    },
  ];

  if (result.livingState.activeCycleInstanceId) {
    anchors.push({
      id: "cycle",
      kind: "Cycle",
      label: "Référence factuelle de cycle",
      detail: "Cycle distinct du Project",
    });
  }

  if (durableOutcome) {
    for (const evidence of durableOutcome.evidence) {
      anchors.push({
        id: `evidence:${evidence.evidenceId}`,
        kind: "Evidence",
        label: evidence.status,
        detail: "Preuve durable",
      });
    }
    for (const rb of durableOutcome.reviewBundles) {
      anchors.push({
        id: `rb:${rb.reviewBundleId}`,
        kind: "ReviewBundle",
        label: rb.status,
        detail: "Revue durable",
      });
    }
    anchors.push({
      id: "recommendation",
      kind: "Recommendation",
      label: durableOutcome.recommendation.recommendationLabel,
      detail: "≠ Décision humaine",
    });
  }

  return anchors;
}

/**
 * F9 — durable factual anchors only (not a fake conversation transcript).
 * Project IDs stay in secondary detail; conversation/proposal/confirmation
 * are never invented as durable history.
 */
export function ProjectHistoryPanel({
  result,
  durableOutcome = null,
}: {
  result: GetProjectSuccess;
  durableOutcome?: ProjectAssistantRehydrateEvidenceOutcomeSuccess | null;
}) {
  const anchors = buildAnchors(result, durableOutcome);

  return (
    <section
      className={styles.root}
      data-testid="project-history-panel"
      aria-labelledby="project-history-title"
    >
      <h2 id="project-history-title" className={styles.title}>
        Historique durable
      </h2>
      <p className={styles.hint}>
        Ancres factuelles du projet (état vivant, cycle, preuves, revue,
        recommandation lorsqu&apos;elles sont réellement disponibles). Ce
        n&apos;est pas une transcription de conversation. Confirmation et
        proposition process-local n&apos;apparaissent pas ici.
      </p>
      <ul className={styles.list}>
        {anchors.map((anchor) => (
          <li key={anchor.id} className={styles.item}>
            <span className={styles.kind}>{anchor.kind}</span>
            <span className={styles.label}>{anchor.label}</span>
            {anchor.detail ? (
              <span className={styles.detail}>{anchor.detail}</span>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
