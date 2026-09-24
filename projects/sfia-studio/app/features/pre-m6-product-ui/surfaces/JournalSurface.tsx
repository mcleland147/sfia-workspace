"use client";

import { useState } from "react";
import styles from "./JournalSurface.module.css";

export type JournalSurfaceEntry = {
  journalEntryId: string;
  topicOrdinal: number;
  title: string;
  currentSummary: string;
  stabilizedPoints: string[];
  openPoints: string[];
  status: string;
  updatedAt: string;
  sourceTurnRefs: string[];
  sourceTurnCount: number;
  isCurrentTopic?: boolean;
};

export type JournalTranscriptMessage = {
  id: string;
  role: string;
  content: string;
};

export type JournalSurfaceProps = {
  entries: JournalSurfaceEntry[];
  cycleInstanceId: string | null;
  selectedEntryId: string | null;
  onSelectEntry: (entryId: string) => void;
  /** Expand linked-exchange index for a subject (does not alone scroll). */
  onViewExchanges: (entry: JournalSurfaceEntry) => void;
  /** Focus/scroll to one exact transcript turn. */
  onFocusTurn: (turnId: string) => void;
  /** Visible transcript messages — used for short exchange previews. */
  transcriptMessages?: JournalTranscriptMessage[];
  collapsed?: boolean;
  onToggleCollapsed?: () => void;
};

function statusLabel(status: string): string {
  switch (status) {
    case "active":
      return "Actif";
    case "archived":
      return "Archivé";
    case "merged":
      return "Fusionné";
    case "split":
      return "Scindé";
    default:
      return status;
  }
}

function roleLabel(role: string): string {
  if (role === "user") return "Pilote";
  if (role === "assistant") return "Nora";
  return role;
}

function previewFor(
  turnId: string,
  messages: JournalTranscriptMessage[] | undefined,
): { role: string; excerpt: string; resolvable: boolean } {
  const msg = messages?.find((m) => m.id === turnId);
  if (!msg) {
    // Never show raw pt:* as the nominal Pilot label — pending reconcile / missing.
    return {
      role: "échange",
      excerpt: "Échange en cours de synchronisation…",
      resolvable: false,
    };
  }
  const excerpt =
    msg.content.trim().length > 96
      ? `${msg.content.trim().slice(0, 93)}…`
      : msg.content.trim();
  return {
    role: roleLabel(msg.role),
    excerpt: excerpt || "(vide)",
    resolvable: true,
  };
}

/**
 * Cycle Journal rail — semantic projection only.
 * NEVER presented as Truth C / History durable / HumanDecision.
 */
export function JournalSurface({
  entries = [],
  cycleInstanceId,
  selectedEntryId,
  onSelectEntry,
  onViewExchanges,
  onFocusTurn,
  transcriptMessages = [],
  collapsed = false,
  onToggleCollapsed,
}: JournalSurfaceProps) {
  const safeEntries = Array.isArray(entries) ? entries : [];
  const activeCount = safeEntries.filter((e) => e.status === "active").length;
  const [expandedEntryId, setExpandedEntryId] = useState<string | null>(null);
  const [pointsOpenId, setPointsOpenId] = useState<string | null>(null);

  return (
    <aside
      className={[styles.root, collapsed ? styles.collapsed : ""].join(" ")}
      data-testid="cycle-journal-rail"
      aria-label="Journal du cycle"
    >
      <header className={styles.header}>
        <div className={styles.headerText}>
          <p className={styles.eyebrow}>Mémoire de cycle</p>
          <h2 className={styles.title} id="cycle-journal-heading">
            Journal du cycle
          </h2>
          <p className={styles.meta}>
            {cycleInstanceId
              ? `${activeCount} sujet${activeCount === 1 ? "" : "s"}`
              : "Aucun cycle actif"}
          </p>
        </div>
        {onToggleCollapsed ? (
          <button
            type="button"
            className={styles.toggle}
            data-testid="cycle-journal-toggle"
            aria-expanded={!collapsed}
            aria-controls="cycle-journal-list"
            onClick={onToggleCollapsed}
          >
            {collapsed ? "Ouvrir" : "Replier"}
          </button>
        ) : null}
      </header>

      {!collapsed ? (
        <div
          id="cycle-journal-list"
          className={styles.list}
          role="list"
          aria-labelledby="cycle-journal-heading"
        >
          {!cycleInstanceId ? (
            <p className={styles.empty} data-testid="cycle-journal-empty">
              Le Journal s&apos;affiche lorsqu&apos;un cycle est actif. Ce n&apos;est
              pas l&apos;historique gouverné du projet.
            </p>
          ) : safeEntries.length === 0 ? (
            <p className={styles.empty} data-testid="cycle-journal-empty">
              Aucun sujet encore. Les échanges durables du cycle apparaîtront
              ici comme index navigable.
            </p>
          ) : (
            safeEntries.map((entry) => {
              const selected = selectedEntryId === entry.journalEntryId;
              const expanded = expandedEntryId === entry.journalEntryId;
              const pointsOpen = pointsOpenId === entry.journalEntryId;
              const hasPoints =
                entry.stabilizedPoints.length > 0 ||
                entry.openPoints.length > 0;
              const ordinal =
                entry.topicOrdinal > 0 ? entry.topicOrdinal : null;
              return (
                <article
                  key={entry.journalEntryId}
                  role="listitem"
                  className={[
                    styles.card,
                    selected ? styles.cardSelected : "",
                    entry.status !== "active" ? styles.cardMuted : "",
                    entry.isCurrentTopic ? styles.cardCurrent : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  data-testid={`cycle-journal-entry-${entry.journalEntryId}`}
                  data-status={entry.status}
                  data-topic-ordinal={ordinal ?? undefined}
                  data-current-topic={entry.isCurrentTopic ? "true" : "false"}
                  aria-current={selected ? "true" : undefined}
                >
                  <button
                    type="button"
                    className={styles.cardSelect}
                    onClick={() => onSelectEntry(entry.journalEntryId)}
                    aria-pressed={selected}
                  >
                    <span className={styles.cardHeading}>
                      {ordinal != null ? (
                        <span
                          className={styles.ordinal}
                          data-testid={`cycle-journal-ordinal-${entry.journalEntryId}`}
                        >
                          Sujet {ordinal}
                        </span>
                      ) : null}
                      {entry.isCurrentTopic ? (
                        <span
                          className={styles.currentBadge}
                          data-testid={`cycle-journal-current-${entry.journalEntryId}`}
                        >
                          En cours
                        </span>
                      ) : null}
                    </span>
                    <span className={styles.cardTitle}>{entry.title}</span>
                    <span className={styles.cardSummary}>
                      {entry.currentSummary}
                    </span>
                    <span className={styles.cardMeta}>
                      <span className={styles.status} data-status={entry.status}>
                        {statusLabel(entry.status)}
                      </span>
                      <span>
                        {entry.sourceTurnCount} échange
                        {entry.sourceTurnCount === 1 ? "" : "s"}
                      </span>
                    </span>
                  </button>
                  {hasPoints ? (
                    <button
                      type="button"
                      className={styles.viewExchanges}
                      data-testid={`cycle-journal-points-${entry.journalEntryId}`}
                      aria-expanded={pointsOpen}
                      onClick={() =>
                        setPointsOpenId((prev) =>
                          prev === entry.journalEntryId
                            ? null
                            : entry.journalEntryId,
                        )
                      }
                    >
                      {pointsOpen
                        ? "Masquer les points"
                        : "Points stabilisés / ouverts"}
                    </button>
                  ) : null}
                  {pointsOpen && hasPoints ? (
                    <div
                      className={styles.pointsBlock}
                      data-testid={`cycle-journal-points-body-${entry.journalEntryId}`}
                    >
                      {entry.stabilizedPoints.length > 0 ? (
                        <div>
                          <p className={styles.pointsLabel}>Stabilisés</p>
                          <ul className={styles.pointsList}>
                            {entry.stabilizedPoints.map((p, i) => (
                              <li key={`s-${i}`}>{p}</li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                      {entry.openPoints.length > 0 ? (
                        <div>
                          <p className={styles.pointsLabel}>Ouverts</p>
                          <ul className={styles.pointsList}>
                            {entry.openPoints.map((p, i) => (
                              <li key={`o-${i}`}>{p}</li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </div>
                  ) : null}
                  {entry.sourceTurnRefs.length > 0 ? (
                    <button
                      type="button"
                      className={styles.viewExchanges}
                      data-testid={`cycle-journal-view-${entry.journalEntryId}`}
                      aria-expanded={expanded}
                      aria-controls={`cycle-journal-exchanges-${entry.journalEntryId}`}
                      onClick={() => {
                        onViewExchanges(entry);
                        setExpandedEntryId((prev) =>
                          prev === entry.journalEntryId
                            ? null
                            : entry.journalEntryId,
                        );
                      }}
                    >
                      {expanded ? "Masquer les échanges" : "Voir les échanges"}
                    </button>
                  ) : null}
                  {expanded && entry.sourceTurnRefs.length > 0 ? (
                    <ul
                      id={`cycle-journal-exchanges-${entry.journalEntryId}`}
                      className={styles.exchangeList}
                      data-testid={`cycle-journal-exchanges-${entry.journalEntryId}`}
                      aria-label={`Échanges liés — ${entry.title}`}
                    >
                      {entry.sourceTurnRefs.map((turnId, index) => {
                        const preview = previewFor(turnId, transcriptMessages);
                        return (
                          <li key={`${turnId}-${index}`}>
                            <button
                              type="button"
                              className={styles.exchangeItem}
                              data-testid={`cycle-journal-exchange-${turnId}`}
                              data-resolvable={
                                preview.resolvable ? "true" : "false"
                              }
                              onClick={() => {
                                if (preview.resolvable) onFocusTurn(turnId);
                              }}
                              disabled={!preview.resolvable}
                            >
                              <span className={styles.exchangeRole}>
                                {preview.role}
                              </span>
                              <span className={styles.exchangeExcerpt}>
                                {preview.excerpt}
                              </span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  ) : null}
                </article>
              );
            })
          )}
        </div>
      ) : null}
    </aside>
  );
}
