"use client";

import { useEffect, useState } from "react";
import { w2ReadProjectHistoryAction } from "@/features/project-assistant/w2/actions";
import type { W2ProjectHistoryReadModel } from "@/features/project-assistant/w2/projectHistory";
import type { ProjectAssistantRehydrateEvidenceOutcomeSuccess } from "@/features/project-assistant/types";
import type { GetProjectSuccess } from "../types";
import styles from "./HistorySurface.module.css";

type DurableAnchor = {
  id: string;
  kind: string;
  label: string;
  detail: string;
};

function trajectoryAnchorDetail(
  anchor: W2ProjectHistoryReadModel["trajectory"]["versions"][number],
): string {
  if (anchor.isEffectiveCurrent) {
    return anchor.decidedByDecisionRef
      ? `Décidée et courante · décision ${anchor.decidedByDecisionRef}`
      : "Courante · antérieure au rattachement de décision";
  }
  if (anchor.status === "candidate") {
    return "Proposée · pas encore décidée, pas courante";
  }
  return `Statut ${anchor.status} · non courante`;
}

/** W2 durable anchors: trajectory versions, human decisions, contracts. */
function buildW2Anchors(history: W2ProjectHistoryReadModel): DurableAnchor[] {
  const anchors: DurableAnchor[] = [];

  if (history.cycle.activeCycleInstanceId) {
    anchors.push({
      id: `cycle:${history.cycle.activeCycleInstanceId}`,
      kind: "Cycle",
      label: history.cycle.cycleTypeId
        ? `${history.cycle.cycleTypeId} · profil ${history.cycle.profile ?? "inconnu"}`
        : "Cycle rattaché",
      detail: history.cycle.status
        ? `Statut ${history.cycle.status}`
        : "Cycle distinct du projet",
    });
  }

  for (const version of history.trajectory.versions) {
    anchors.push({
      id: `trj:${version.trajectoryId}:${version.version}`,
      kind: "Trajectoire",
      label: `Version ${version.version} · ${version.stepCount} étapes`,
      detail: trajectoryAnchorDetail(version),
    });
  }

  for (const decision of history.decisions) {
    anchors.push({
      id: `dec:${decision.decisionId}`,
      kind: "Décision humaine",
      label: `Option retenue ${decision.selectedOptionRef}`,
      detail: `${decision.status} · décideur ${decision.actorRole} · base ${
        decision.basisSourceType ?? "absente"
      }${decision.basisTrajectoryRef ? ` · ${decision.basisTrajectoryRef}` : ""}`,
    });
  }

  for (const contract of history.contracts) {
    anchors.push({
      id: `xct:${contract.executionContractId}`,
      kind: "Contrat d'exécution",
      label: `Version ${contract.version} · ${contract.status}`,
      detail: contract.decisionRefs.length
        ? `Rattaché à ${contract.decisionRefs.join(", ")}`
        : "Aucune décision rattachée",
    });
  }

  return anchors;
}

function buildAnchors(
  result: GetProjectSuccess,
  durableOutcome: ProjectAssistantRehydrateEvidenceOutcomeSuccess | null,
  history: W2ProjectHistoryReadModel | null,
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

  if (history) {
    anchors.push(...buildW2Anchors(history));
  } else if (result.livingState.activeCycleInstanceId) {
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
 * Trajectory versions, human decisions and execution contracts are read from
 * the W2 minimal read model; conversation, proposal and requested confirmation
 * stay process-local and are reported as absent rather than reconstructed.
 */
export function HistorySurface({
  result,
  durableOutcome = null,
}: {
  result: GetProjectSuccess;
  durableOutcome?: ProjectAssistantRehydrateEvidenceOutcomeSuccess | null;
}) {
  const [history, setHistory] = useState<W2ProjectHistoryReadModel | null>(null);
  const projectId = result.project.projectId;
  const lpsVersion = result.livingState.version;

  useEffect(() => {
    let cancelled = false;
    void w2ReadProjectHistoryAction({ projectId }).then((next) => {
      if (cancelled) return;
      setHistory(next.ok ? next.history : null);
    });
    return () => {
      cancelled = true;
    };
  }, [projectId, lpsVersion]);

  const anchors = buildAnchors(result, durableOutcome, history);

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
          Repères factuels du projet seulement. Les détails techniques restent
          secondaires ; la conversation n&apos;est pas rejouée ici.
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
