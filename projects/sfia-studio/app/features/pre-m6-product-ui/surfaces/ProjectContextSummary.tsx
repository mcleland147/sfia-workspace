"use client";

import type {
  AttentionItem,
  CurrentnessPresentation,
  CycleSummary,
  TrajectoryNode,
} from "../workspaceContextPresentation";
import styles from "./ProjectContextSummary.module.css";

export type ProjectContextSummaryProps = {
  cycle: CycleSummary;
  /** Current next-step wording (same source as « État du projet »). */
  focus: string;
  /** Current conversation topic from the Journal, when one exists. */
  focusTopic: string | null;
  currentness: CurrentnessPresentation;
  trajectory: TrajectoryNode[];
  attention: AttentionItem[];
};

/**
 * P3 « Contexte du projet » — compact, read-only digest of Product projections
 * the workspace already loaded. No action lives here; details and decisions
 * stay in the Journal, the lifecycle/trajectory surfaces and the conversation.
 */
export function ProjectContextSummary({
  cycle,
  focus,
  focusTopic,
  currentness,
  trajectory,
  attention,
}: ProjectContextSummaryProps) {
  return (
    <div className={styles.root} data-testid="project-context-summary">
      <header className={styles.head}>
        <p className={styles.eyebrow}>Contexte du projet</p>
        <h2 className={styles.title}>Ce qui compte maintenant</h2>
      </header>

      <section
        className={styles.section}
        aria-label="Cycle, focus et mise à jour"
        data-testid="project-context-cycle"
      >
        <dl className={styles.facts}>
          <div className={styles.fact}>
            <dt>Cycle</dt>
            <dd>
              {cycle.label}
              {cycle.statusLabel ? (
                <span className={styles.sub}>{cycle.statusLabel}</span>
              ) : null}
            </dd>
          </div>
          <div className={styles.fact}>
            <dt>Focus</dt>
            <dd data-testid="project-context-focus">
              {focusTopic ?? focus}
              {focusTopic ? <span className={styles.sub}>{focus}</span> : null}
            </dd>
          </div>
          <div className={styles.fact}>
            <dt>Mise à jour</dt>
            <dd data-tone={currentness.tone}>
              <span className={styles.currentness}>{currentness.label}</span>
              <span className={styles.sub}>{currentness.detail}</span>
            </dd>
          </div>
        </dl>
      </section>

      <section
        className={styles.section}
        aria-labelledby="ctx-trajectory-title"
        data-testid="project-context-trajectory"
      >
        <h3 className={styles.sectionTitle} id="ctx-trajectory-title">
          Trajectoire
        </h3>
        {trajectory.length === 0 ? (
          <p className={styles.empty}>Aucun cycle enregistré pour l’instant.</p>
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
      </section>

      <section
        className={styles.section}
        aria-labelledby="ctx-attention-title"
        data-testid="project-context-attention"
      >
        <h3 className={styles.sectionTitle} id="ctx-attention-title">
          Attention
        </h3>
        {attention.length === 0 ? (
          <p className={styles.empty}>Rien ne demande votre attention.</p>
        ) : (
          <ul className={styles.attentionList}>
            {attention.map((item) => (
              <li
                key={item.key}
                className={styles.attentionItem}
                data-testid={`project-context-attention-${item.key}`}
              >
                <span className={styles.attentionHead}>{item.headline}</span>
                <span className={styles.attentionDetail}>{item.detail}</span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section
        className={styles.section}
        aria-labelledby="ctx-synthesis-title"
        data-testid="project-context-synthesis"
      >
        <h3 className={styles.sectionTitle} id="ctx-synthesis-title">
          Dernière synthèse
        </h3>
        <p className={styles.empty} data-testid="project-context-synthesis-empty">
          Aucune synthèse disponible pour l’instant. Elle apparaîtra ici lorsque
          Nora en aura enregistré une.
        </p>
      </section>
    </div>
  );
}

export type ProjectContextShortcutsProps = {
  onOpenJournal: () => void;
  onOpenHistory: () => void;
};

/**
 * « Journal du cycle · Historique · Synthèses » — wired only to surfaces that
 * exist in the workspace. « Synthèses » has no Product surface yet, so it is
 * rendered as an honest disabled entry rather than a dead link.
 */
export function ProjectContextShortcuts({
  onOpenJournal,
  onOpenHistory,
}: ProjectContextShortcutsProps) {
  return (
    <nav
      className={styles.shortcuts}
      aria-label="Raccourcis du projet"
      data-testid="project-context-shortcuts"
    >
      <button
        type="button"
        className={styles.shortcut}
        data-testid="project-shortcut-journal"
        onClick={onOpenJournal}
      >
        Journal du cycle
      </button>
      <button
        type="button"
        className={styles.shortcut}
        data-testid="project-shortcut-history"
        onClick={onOpenHistory}
      >
        Historique
      </button>
      <button
        type="button"
        className={styles.shortcut}
        data-testid="project-shortcut-syntheses"
        disabled
        aria-disabled="true"
        title="Aucune synthèse n’est encore disponible dans le produit"
      >
        Synthèses
      </button>
    </nav>
  );
}
