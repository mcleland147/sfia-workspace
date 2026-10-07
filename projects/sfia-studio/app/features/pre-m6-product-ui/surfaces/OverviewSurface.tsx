"use client";

import { useEffect, useState } from "react";
import { w2ReadProjectHistoryAction } from "@/features/project-assistant/w2/actions";
import type { W2ProjectHistoryReadModel } from "@/features/project-assistant/w2/projectHistory";
import type {
  AttentionItem,
  CurrentnessPresentation,
  CycleSummary,
  TrajectoryNode,
} from "../workspaceContextPresentation";
import type { ProductSynthesisProjection } from "@/lib/oa/synthesis";
import { getLatestRelevantProductSynthesisAction } from "@/features/project-assistant/synthesisActions";
import {
  formatSynthesisGeneratedAt,
  presentSynthesisVerdictLabel,
  synthesisSummaryExcerpt,
} from "./synthesisPresentation";
import styles from "./OverviewSurface.module.css";

export type OverviewRecentActivityItem = {
  readonly id: string;
  readonly headline: string;
  readonly detail: string;
  readonly kind: string;
};

function deriveRecentActivity(
  history: W2ProjectHistoryReadModel | null,
): OverviewRecentActivityItem[] {
  if (!history) return [];
  const items: OverviewRecentActivityItem[] = [];

  for (const decision of history.decisions.slice(0, 3)) {
    items.push({
      id: `dec:${decision.decisionId}`,
      kind: "Décision",
      headline: `Décision enregistrée · ${decision.selectedOptionRef}`,
      detail: `${decision.status} · ${decision.actorRole}`,
    });
  }
  for (const version of history.trajectory.versions.slice(0, 2)) {
    if (items.length >= 5) break;
    items.push({
      id: `trj:${version.trajectoryId}:${version.version}`,
      kind: "Trajectoire",
      headline: version.isEffectiveCurrent
        ? "Trajectoire courante actualisée"
        : version.status === "candidate"
          ? "Trajectoire proposée (pas encore décidée)"
          : `Trajectoire v${version.version}`,
      detail: `${version.stepCount} étape${version.stepCount > 1 ? "s" : ""}`,
    });
  }
  for (const contract of history.contracts.slice(0, 2)) {
    if (items.length >= 5) break;
    items.push({
      id: `xct:${contract.executionContractId}`,
      kind: "Exécution",
      headline: `Contrat d’exécution · ${contract.status}`,
      detail: `Version ${contract.version}`,
    });
  }
  return items;
}

export type OverviewSurfaceProps = {
  projectId: string;
  projectName: string;
  cycle: CycleSummary;
  focus: string;
  focusTopic: string | null;
  currentness: CurrentnessPresentation;
  trajectory: TrajectoryNode[];
  attention: AttentionItem[];
  onOpenConversation: () => void;
  onOpenJournal: () => void;
  onOpenHistory: () => void;
  onOpenSyntheses: () => void;
  onOpenSynthesisDetail?: (synthesisId: string) => void;
};

/**
 * P5-S03 Aperçu — object-native orientation projection (Figma 51:2 composition).
 * Owns its desktop layout: summary strip + main column + Détails du projet.
 * No persistence. No fake Synthesis. Recommendation ≠ Decision.
 */
export function OverviewSurface({
  projectId,
  projectName,
  cycle,
  focus,
  focusTopic,
  currentness,
  trajectory,
  attention,
  onOpenConversation,
  onOpenJournal,
  onOpenHistory,
  onOpenSyntheses,
  onOpenSynthesisDetail,
}: OverviewSurfaceProps) {
  const [history, setHistory] = useState<W2ProjectHistoryReadModel | null>(null);
  const [latestSynthesis, setLatestSynthesis] =
    useState<ProductSynthesisProjection | null>(null);
  const [synthesisCount, setSynthesisCount] = useState(0);

  useEffect(() => {
    let cancelled = false;
    void w2ReadProjectHistoryAction({ projectId }).then((result) => {
      if (cancelled) return;
      if (result.ok) setHistory(result.history);
      else setHistory(null);
    });
    return () => {
      cancelled = true;
    };
  }, [projectId]);

  useEffect(() => {
    let cancelled = false;
    void getLatestRelevantProductSynthesisAction({ projectId }).then((result) => {
      if (cancelled) return;
      if (result.ok) {
        setLatestSynthesis(result.synthesis);
        setSynthesisCount(result.count);
      } else {
        setLatestSynthesis(null);
        setSynthesisCount(0);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [projectId]);

  const activity = deriveRecentActivity(history);
  const decisionAttention = attention.find((a) => a.key === "decision");
  const reserveAttention = attention.find((a) => a.key === "reserve");
  const reserveCount = reserveAttention
    ? reserveAttention.headline.match(/^\d+/)?.[0] ?? "—"
    : "—";

  const trajectoryLine =
    trajectory.length === 0
      ? null
      : trajectory
          .map((node) => `C${node.ordinal} ${node.label.toLowerCase()}`)
          .join(" · ");

  return (
    <div className={styles.root} data-testid="project-overview-surface">
      <div
        className={styles.mobileDigest}
        data-testid="project-overview-mobile-digest"
      >
        <div className={styles.mobileStatus}>
          <span className={styles.mobileCycle}>{cycle.label}</span>
          {cycle.statusLabel ? (
            <span className={styles.mobileChip}>{cycle.statusLabel}</span>
          ) : null}
        </div>
        <section className={styles.mobileSection}>
          <p className={styles.mobileLabel}>Priorité actuelle</p>
          <p className={styles.mobileValue}>{focusTopic ?? focus}</p>
        </section>
        <section className={styles.mobileSection}>
          <p className={styles.mobileLabel}>Trajectoire</p>
          <p className={styles.mobileValue}>
            {trajectoryLine ?? "Aucun cycle enregistré pour l’instant."}
          </p>
        </section>
        <section className={styles.mobileSection}>
          <p className={styles.mobileLabel}>Décisions</p>
          <p className={styles.mobileValue}>
            {decisionAttention
              ? "1 décision à examiner"
              : "Aucune décision en attente"}
          </p>
        </section>
        <section className={styles.mobileSection}>
          <p className={styles.mobileLabel}>Réserves</p>
          <p className={styles.mobileValue}>
            {reserveAttention
              ? `${reserveCount} réserve${reserveCount !== "1" ? "s" : ""} ouverte${reserveCount !== "1" ? "s" : ""}`
              : "Aucune réserve ouverte"}
          </p>
        </section>
        <section className={styles.mobileSection}>
          <p className={styles.mobileLabel}>Dernière synthèse</p>
          <p className={styles.mobileValue}>
            {latestSynthesis
              ? `${latestSynthesis.title} · ${presentSynthesisVerdictLabel(latestSynthesis.verdictLabel).toLowerCase()}`
              : "Aucune synthèse produit disponible"}
          </p>
        </section>
        <nav
          className={styles.mobileQuickLinks}
          aria-label="Raccourcis Aperçu"
          data-testid="project-overview-mobile-links"
        >
          <button type="button" onClick={onOpenJournal}>
            Journal
          </button>
          <button type="button" onClick={onOpenHistory}>
            Historique
          </button>
          <button type="button" onClick={onOpenSyntheses}>
            Synthèses
          </button>
        </nav>
      </div>

      <div className={styles.desktopLayout}>
      <section
        className={styles.stats}
        aria-label="État du projet"
        data-testid="project-overview-stats"
      >
        <div className={styles.stat}>
          <p className={styles.statLabel}>État du projet</p>
          <p className={styles.statValue}>{cycle.label}</p>
          {cycle.statusLabel ? (
            <p className={styles.statSub}>{cycle.statusLabel}</p>
          ) : null}
        </div>
        <div className={styles.stat}>
          <p className={styles.statLabel}>Priorité</p>
          <p className={styles.statValue} data-testid="project-overview-focus">
            {focusTopic ?? focus}
          </p>
          {focusTopic ? <p className={styles.statSub}>{focus}</p> : null}
        </div>
        <div className={styles.stat}>
          <p className={styles.statLabel}>Décisions</p>
          <p
            className={styles.statValue}
            data-tone={decisionAttention ? "warn" : undefined}
            data-testid="project-overview-decisions"
          >
            {decisionAttention ? "1" : "—"}
          </p>
          <p className={styles.statSub}>
            {decisionAttention ? "à examiner" : "aucune en attente"}
          </p>
        </div>
        <div className={styles.stat}>
          <p className={styles.statLabel}>Réserves</p>
          <p
            className={styles.statValue}
            data-tone={reserveAttention ? "warn" : undefined}
            data-testid="project-overview-reserves"
          >
            {reserveCount}
          </p>
          <p className={styles.statSub}>
            {reserveAttention ? "ouvertes" : "aucune ouverte"}
          </p>
        </div>
        <div className={styles.stat}>
          <p className={styles.statLabel}>Mise à jour</p>
          <p
            className={styles.statValue}
            data-tone={currentness.tone === "ok" ? "ok" : "warn"}
            data-testid="project-overview-currentness"
          >
            {currentness.label}
          </p>
          <p className={styles.statSub}>{currentness.detail}</p>
        </div>
      </section>

      <div className={styles.body}>
        <div className={styles.mainCol}>
          <section
            className={styles.panel}
            aria-labelledby="overview-trajectory-title"
            data-testid="project-overview-trajectory"
          >
            <div className={styles.sectionHead}>
              <div>
                <h2
                  className={styles.sectionTitle}
                  id="overview-trajectory-title"
                >
                  Trajectoire
                </h2>
                <p className={styles.sectionLead}>
                  Passé et présent confirmés · futur recommandé par Nora
                </p>
              </div>
            </div>
            {trajectory.length === 0 ? (
              <p className={styles.empty}>
                Aucun cycle enregistré pour {projectName} pour l’instant.
              </p>
            ) : (
              <ol className={styles.track}>
                {trajectory.map((node) => (
                  <li
                    key={node.key}
                    className={styles.node}
                    data-state={node.state}
                  >
                    <span className={styles.nodeDot} aria-hidden />
                    <span className={styles.nodeName}>C{node.ordinal}</span>
                    <span className={styles.nodeState}>{node.label}</span>
                  </li>
                ))}
              </ol>
            )}
            <p className={styles.empty}>
              « Proposé » désigne une recommandation / candidature — pas un
              cycle décidé automatiquement.
            </p>
          </section>

          <section
            className={styles.panel}
            aria-labelledby="overview-attention-title"
            data-testid="project-overview-attention"
          >
            <div className={styles.sectionHead}>
              <div>
                <h2
                  className={styles.sectionTitle}
                  id="overview-attention-title"
                >
                  Attention
                </h2>
                <p className={styles.sectionLead}>
                  Éléments pouvant faire évoluer le projet
                </p>
              </div>
              <button
                type="button"
                className={styles.nextStepCta}
                onClick={onOpenJournal}
              >
                Journal →
              </button>
            </div>
            {attention.length === 0 ? (
              <p className={styles.empty}>Rien ne demande votre attention.</p>
            ) : (
              <ul className={styles.attentionList}>
                {attention.map((item) => (
                  <li
                    key={item.key}
                    className={styles.attentionItem}
                    data-testid={`project-overview-attention-${item.key}`}
                  >
                    <span className={styles.attentionHead}>{item.headline}</span>
                    <span className={styles.attentionDetail}>{item.detail}</span>
                    <span className={styles.activityMeta}>
                      {item.key === "decision" ? "Décision" : "Réserve"}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section
            className={styles.panel}
            aria-labelledby="overview-activity-title"
            data-testid="project-overview-activity"
          >
            <div className={styles.sectionHead}>
              <h2 className={styles.sectionTitle} id="overview-activity-title">
                Activité récente
              </h2>
              <button
                type="button"
                className={styles.nextStepCta}
                onClick={onOpenHistory}
              >
                Historique →
              </button>
            </div>
            {activity.length === 0 ? (
              <p className={styles.empty}>
                Aucune activité durable significative pour l’instant.
              </p>
            ) : (
              <ul className={styles.activityList}>
                {activity.map((item) => (
                  <li key={item.id} className={styles.activityItem}>
                    <span className={styles.activityHead}>{item.headline}</span>
                    <span className={styles.activityDetail}>{item.detail}</span>
                    <span className={styles.activityMeta}>{item.kind}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>

        <aside
          className={styles.details}
          aria-labelledby="overview-details-title"
          data-testid="project-overview-details"
        >
          <header className={styles.detailsHead}>
            <p className={styles.statLabel}>Détails du projet</p>
            <h2 className={styles.detailsTitle} id="overview-details-title">
              État actuel
            </h2>
          </header>

          <dl className={styles.detailsFacts}>
            <div className={styles.detailsFact}>
              <dt>État</dt>
              <dd>
                {cycle.statusLabel ?? "—"}
                <span className={styles.statSub}>{cycle.label}</span>
              </dd>
            </div>
            <div className={styles.detailsFact}>
              <dt>Cycle actuel</dt>
              <dd>
                {cycle.label}
                {cycle.statusLabel ? (
                  <span className={styles.statSub}>{cycle.statusLabel}</span>
                ) : null}
              </dd>
            </div>
            <div className={styles.detailsFact}>
              <dt>Autorité</dt>
              <dd>
                Pilote
                <span className={styles.statSub}>Décision humaine</span>
              </dd>
            </div>
            <div className={styles.detailsFact}>
              <dt>Mise à jour</dt>
              <dd data-tone={currentness.tone}>
                {currentness.detail}
                <span className={styles.statSub}>{currentness.label}</span>
              </dd>
            </div>
          </dl>

          <div className={styles.detailsKeys}>
            <p className={styles.statLabel}>Éléments clés</p>
            <ul className={styles.keyList}>
              <li>
                <span>Décisions</span>
                <span data-tone={decisionAttention ? "warn" : undefined}>
                  {decisionAttention ? "1" : "—"}
                </span>
              </li>
              <li>
                <span>Réserves</span>
                <span data-tone={reserveAttention ? "warn" : undefined}>
                  {reserveCount}
                </span>
              </li>
              <li>
                <span>Synthèses</span>
                <span data-testid="project-overview-synthesis-count">
                  {synthesisCount > 0 ? synthesisCount : "—"}
                </span>
              </li>
            </ul>
          </div>

          <section
            className={styles.nextStep}
            aria-labelledby="overview-next-title"
            data-testid="project-overview-next-step"
          >
            <p className={styles.statLabel} id="overview-next-title">
              Prochaine étape importante
            </p>
            <p className={styles.nextStepTitle}>{focusTopic ?? focus}</p>
            <p className={styles.nextStepBody}>
              {decisionAttention
                ? "Une décision structurante attend votre arbitrage dans la conversation."
                : reserveAttention
                  ? "Des réserves ouvertes restent à traiter avec Nora et le Journal."
                  : "Poursuivez le travail dans la conversation — Nora propose, vous décidez."}
            </p>
            <button
              type="button"
              className={styles.nextStepCta}
              data-testid="project-overview-open-work"
              onClick={onOpenConversation}
            >
              Ouvrir le travail en cours →
            </button>
          </section>

          <section
            className={styles.detailsSynth}
            data-testid="project-overview-synthesis"
            aria-labelledby="overview-synthesis-title"
          >
            <div className={styles.sectionHead}>
              <h3 className={styles.sectionTitle} id="overview-synthesis-title">
                Synthèses
              </h3>
              <button
                type="button"
                className={styles.nextStepCta}
                data-testid="project-overview-open-syntheses"
                onClick={onOpenSyntheses}
              >
                Toutes les synthèses →
              </button>
            </div>
            {latestSynthesis ? (
              <div data-testid="project-overview-synthesis-preview">
                <p className={styles.nextStepTitle}>{latestSynthesis.title}</p>
                <p className={styles.statSub}>
                  {presentSynthesisVerdictLabel(latestSynthesis.verdictLabel)} ·{" "}
                  {formatSynthesisGeneratedAt(latestSynthesis.generatedAt)}
                </p>
                <p className={styles.nextStepBody}>
                  {synthesisSummaryExcerpt(latestSynthesis)}
                </p>
                <button
                  type="button"
                  className={styles.nextStepCta}
                  data-testid="project-overview-open-synthesis-detail"
                  onClick={() => {
                    if (onOpenSynthesisDetail) {
                      onOpenSynthesisDetail(latestSynthesis.synthesisId);
                    } else {
                      onOpenSyntheses();
                    }
                  }}
                >
                  Ouvrir cette synthèse →
                </button>
              </div>
            ) : (
              <p
                className={styles.empty}
                data-testid="project-overview-synthesis-empty"
              >
                Aucune synthèse produit n’est encore disponible. Elle n’est pas
                inventée depuis la conversation.
              </p>
            )}
          </section>
        </aside>
      </div>
      </div>
    </div>
  );
}
