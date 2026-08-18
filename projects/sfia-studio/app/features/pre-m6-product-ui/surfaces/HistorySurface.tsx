"use client";

import type { ProjectAssistantRehydrateEvidenceOutcomeSuccess } from "@/features/project-assistant/types";
import type { GetProjectSuccess } from "../types";
import styles from "./HistorySurface.module.css";

type DurableAnchor = {
  id: string;
  kind: string;
  label: string;
  detail: string;
};

function buildAnchors(
  result: GetProjectSuccess,
  durableOutcome: ProjectAssistantRehydrateEvidenceOutcomeSuccess | null,
): DurableAnchor[] {
  const anchors: DurableAnchor[] = [
    {
      id: "project",
      kind: "Projet",
      label: result.project.name,
      detail: "Identité projet enregistrée",
    },
    {
      id: "lps",
      kind: "État du projet",
      label: `Version ${result.livingState.version}`,
      detail: result.livingState.createdAt,
    },
  ];

  if (result.livingState.activeCycleInstanceId) {
    anchors.push({
      id: "cycle",
      kind: "Cycle",
      label: "Référence factuelle de cycle",
      detail: "Cycle distinct du projet",
    });
  }

  if (durableOutcome) {
    for (const evidence of durableOutcome.evidence) {
      anchors.push({
        id: `evidence:${evidence.evidenceId}`,
        kind: "Preuve",
        label: evidence.status,
        detail: "Preuve enregistrée",
      });
    }
    for (const rb of durableOutcome.reviewBundles) {
      anchors.push({
        id: `rb:${rb.reviewBundleId}`,
        kind: "Dossier de revue",
        label: rb.status,
        detail: "Revue enregistrée",
      });
    }
    anchors.push({
      id: "recommendation",
      kind: "Recommandation",
      label: durableOutcome.recommendation.recommendationLabel,
      detail: "≠ Décision humaine",
    });
  }

  return anchors;
}

/**
 * F9 — durable factual anchors only (never a replayed conversation transcript).
 * Conversation, proposal and confirmation stay process-local and are absent here.
 */
export function HistorySurface({
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
      aria-labelledby="pm6-history-title"
    >
      <header className={styles.head}>
        <p className={styles.eyebrow}>Historique</p>
        <h2 id="pm6-history-title" className={styles.title}>
          Ce qui est réellement enregistré
        </h2>
        <p className={styles.note}>
          Repères factuels du projet. La conversation, la proposition et la
          confirmation restent process-local et n&apos;apparaissent pas ici.
        </p>
      </header>
      <ol className={styles.timeline}>
        {anchors.map((anchor) => (
          <li key={anchor.id} className={styles.entry}>
            <span className={styles.marker} aria-hidden />
            <span className={styles.kind}>{anchor.kind}</span>
            <span className={styles.label}>{anchor.label}</span>
            <span className={styles.detail}>{anchor.detail}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
