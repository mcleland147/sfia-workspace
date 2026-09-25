"use client";

import { useState } from "react";
import type { CycleReservationProjectionCard } from "@/lib/oa/cycle/application/lifecycleProjection";
import styles from "./JournalSurface.module.css";

export type JournalReservationCard = CycleReservationProjectionCard;

export type JournalMemoryTab = "sujets" | "reserves";

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
  /**
   * CYCLE-RESERVATION-PILOTING-01 — cycle Reservations (projection cards).
   * Same rail, second tab; never a second store nor a Pilot decision record.
   */
  reservations?: JournalReservationCard[];
  /** Selected lifecycle cycle for Réserves (may differ from the Journal active cycle). */
  reservationsCycleInstanceId?: string | null;
  /** Controlled tab — when omitted the rail owns tab state (defaults to sujets). */
  memoryTab?: JournalMemoryTab;
  onMemoryTabChange?: (tab: JournalMemoryTab) => void;
  /** Prefill a Nora draft about this Reservation — MUST NOT send. */
  onTreatWithNora?: (epistemicItemId: string) => void;
  /** Pilot confirms Nora's resolution proposal — only when hasResolutionProposal. */
  onConfirmResolve?: (epistemicItemId: string) => void;
  /**
   * Pilot confirms defer after UI confirmation — NEVER called on Reporter alone.
   * Caller must pass the projection's honest deferTargetCycleTypeId.
   */
  onConfirmDefer?: (input: {
    epistemicItemId: string;
    targetCycleTypeId: string;
    targetLabel: string;
  }) => void;
  /** Jump to a linked Journal subject (switches to Sujets tab). */
  onViewJournalSubject?: (journalEntryId: string) => void;
  /** Epistemic id currently being confirmed (disables its CTA). */
  reservationBusyId?: string | null;
};

function isOpenReservation(card: JournalReservationCard): boolean {
  return (
    card.presentationState !== "resolved" &&
    card.presentationState !== "rejected" &&
    card.presentationState !== "deferred"
  );
}

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
  reservations = [],
  reservationsCycleInstanceId,
  memoryTab,
  onMemoryTabChange,
  onTreatWithNora,
  onConfirmResolve,
  onConfirmDefer,
  onViewJournalSubject,
  reservationBusyId = null,
}: JournalSurfaceProps) {
  const safeEntries = Array.isArray(entries) ? entries : [];
  const safeReservations = Array.isArray(reservations) ? reservations : [];
  const activeCount = safeEntries.filter((e) => e.status === "active").length;
  const openReservationCount = safeReservations.filter(isOpenReservation).length;
  const [expandedEntryId, setExpandedEntryId] = useState<string | null>(null);
  const [pointsOpenId, setPointsOpenId] = useState<string | null>(null);
  const [internalTab, setInternalTab] = useState<JournalMemoryTab>("sujets");
  const [reservationDetailId, setReservationDetailId] = useState<string | null>(
    null,
  );
  /** Epistemic id awaiting explicit Pilot confirm for defer — zero writes until confirm. */
  const [deferConfirmId, setDeferConfirmId] = useState<string | null>(null);
  const tab: JournalMemoryTab = memoryTab ?? internalTab;
  const setTab = (next: JournalMemoryTab) => {
    if (memoryTab === undefined) setInternalTab(next);
    onMemoryTabChange?.(next);
  };
  const subjectOrdinalById = new Map(
    safeEntries.map((e) => [e.journalEntryId, e.topicOrdinal] as const),
  );
  const paneId = tab === "sujets" ? "cycle-journal-list" : "cycle-reservations-list";
  const reservationCycleId = reservationsCycleInstanceId ?? cycleInstanceId;

  return (
    <aside
      className={[styles.root, collapsed ? styles.collapsed : ""].join(" ")}
      data-testid="cycle-journal-rail"
      data-memory-tab={tab}
      aria-label="Journal du cycle"
    >
      <header className={styles.header}>
        <div className={styles.headerText}>
          <p className={styles.eyebrow}>Mémoire de cycle</p>
          <h2 className={styles.title} id="cycle-journal-heading">
            {tab === "sujets" ? "Journal du cycle" : "Réserves du cycle"}
          </h2>
          <p className={styles.meta}>
            {tab === "sujets"
              ? cycleInstanceId
                ? `${activeCount} sujet${activeCount === 1 ? "" : "s"}`
                : "Aucun cycle actif"
              : reservationCycleId
                ? `${openReservationCount} réserve${openReservationCount === 1 ? "" : "s"} ouverte${openReservationCount === 1 ? "" : "s"}`
                : "Aucun cycle sélectionné"}
          </p>
        </div>
        {onToggleCollapsed ? (
          <button
            type="button"
            className={styles.toggle}
            data-testid="cycle-journal-toggle"
            aria-expanded={!collapsed}
            aria-controls={paneId}
            onClick={onToggleCollapsed}
          >
            {collapsed ? "Ouvrir" : "Replier"}
          </button>
        ) : null}
      </header>

      {!collapsed ? (
        <div
          className={styles.tabs}
          role="tablist"
          aria-label="Mémoire de cycle"
          data-testid="memory-rail-tabs"
        >
          <button
            type="button"
            role="tab"
            id="memory-rail-tab-sujets"
            className={[styles.tab, tab === "sujets" ? styles.tabActive : ""]
              .filter(Boolean)
              .join(" ")}
            data-testid="memory-rail-tab-sujets"
            aria-selected={tab === "sujets"}
            aria-controls="cycle-journal-list"
            onClick={() => setTab("sujets")}
          >
            Sujets ({activeCount})
          </button>
          <button
            type="button"
            role="tab"
            id="memory-rail-tab-reserves"
            className={[styles.tab, tab === "reserves" ? styles.tabActive : ""]
              .filter(Boolean)
              .join(" ")}
            data-testid="memory-rail-tab-reserves"
            aria-selected={tab === "reserves"}
            aria-controls="cycle-reservations-list"
            onClick={() => setTab("reserves")}
          >
            Réserves ({openReservationCount})
          </button>
        </div>
      ) : null}

      {!collapsed && tab === "reserves" ? (
        <div
          id="cycle-reservations-list"
          className={styles.list}
          role="tabpanel"
          aria-labelledby="memory-rail-tab-reserves"
          data-testid="cycle-reservations-list"
        >
          {!reservationCycleId ? (
            <p className={styles.empty} data-testid="cycle-reservations-empty">
              Les réserves s&apos;affichent lorsqu&apos;un cycle est sélectionné.
            </p>
          ) : safeReservations.length === 0 ? (
            <p className={styles.empty} data-testid="cycle-reservations-empty">
              Aucune réserve sur ce cycle. Nora en formulera si un point reste
              incertain ou fragile.
            </p>
          ) : (
            safeReservations.map((card) => {
              const detailOpen = reservationDetailId === card.epistemicItemId;
              const open = isOpenReservation(card);
              const busy = reservationBusyId === card.epistemicItemId;
              const subjectRefs = onViewJournalSubject
                ? card.journalEntryRefs
                : [];
              return (
                <article
                  key={card.epistemicItemId}
                  className={[
                    styles.card,
                    !open ? styles.cardMuted : "",
                    card.presentationState === "blocks_finalization"
                      ? styles.cardBlocking
                      : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  data-testid={`cycle-reservation-card-${card.epistemicItemId}`}
                  data-state={card.presentationState}
                  data-ordinal={card.ordinal > 0 ? card.ordinal : undefined}
                  data-legacy={card.isLegacy ? "true" : "false"}
                >
                  <div className={styles.cardHeading}>
                    {card.ordinal > 0 ? (
                      <span
                        className={styles.ordinal}
                        data-testid={`cycle-reservation-ordinal-${card.epistemicItemId}`}
                      >
                        Réserve {card.ordinal}
                      </span>
                    ) : null}
                    <span
                      className={styles.stateBadge}
                      data-state={card.presentationState}
                      data-testid={`cycle-reservation-state-${card.epistemicItemId}`}
                    >
                      {card.presentationStateLabel}
                    </span>
                  </div>
                  <p className={styles.cardTitle}>{card.title}</p>
                  {card.summary && card.summary !== card.title ? (
                    <p className={styles.cardSummary}>{card.summary}</p>
                  ) : null}
                  {card.presentationState === "deferred" &&
                  card.deferredTargetLabel ? (
                    <p
                      className={styles.deferredTarget}
                      data-testid={`cycle-reservation-deferred-target-${card.epistemicItemId}`}
                    >
                      Vers : {card.deferredTargetLabel}
                    </p>
                  ) : null}
                  <p className={styles.cardMeta}>
                    <span>Impact : {card.impactLabel}</span>
                    <span>Attention : {card.attentionLabel}</span>
                  </p>
                  <p
                    className={styles.finalizationHint}
                    data-testid={`cycle-reservation-finalization-${card.epistemicItemId}`}
                  >
                    {card.finalizationRelevanceLabel}
                  </p>
                  {card.hasResolutionProposal ? (
                    <p
                      className={styles.proposalHint}
                      data-testid={`cycle-reservation-proposal-${card.epistemicItemId}`}
                    >
                      Nora propose de lever cette réserve — la décision vous
                      appartient.
                    </p>
                  ) : null}
                  <button
                    type="button"
                    className={styles.viewExchanges}
                    data-testid={`cycle-reservation-detail-${card.epistemicItemId}`}
                    aria-expanded={detailOpen}
                    aria-controls={`cycle-reservation-detail-body-${card.epistemicItemId}`}
                    onClick={() =>
                      setReservationDetailId((prev) =>
                        prev === card.epistemicItemId
                          ? null
                          : card.epistemicItemId,
                      )
                    }
                  >
                    {detailOpen ? "Masquer le détail" : "Voir le détail"}
                  </button>
                  {detailOpen ? (
                    <div
                      id={`cycle-reservation-detail-body-${card.epistemicItemId}`}
                      className={styles.pointsBlock}
                      data-testid={`cycle-reservation-detail-body-${card.epistemicItemId}`}
                    >
                      {card.rationale ? (
                        <div>
                          <p className={styles.pointsLabel}>Pourquoi</p>
                          <p className={styles.detailText}>{card.rationale}</p>
                        </div>
                      ) : null}
                      {card.resolutionCondition ? (
                        <div>
                          <p className={styles.pointsLabel}>Condition de levée</p>
                          <p className={styles.detailText}>
                            {card.resolutionCondition}
                          </p>
                        </div>
                      ) : null}
                      {card.resolutionProposalRationale ? (
                        <div>
                          <p className={styles.pointsLabel}>Proposition de Nora</p>
                          <p className={styles.detailText}>
                            {card.resolutionProposalRationale}
                          </p>
                        </div>
                      ) : null}
                      {card.isLegacy ? (
                        <p className={styles.detailText}>
                          Réserve issue du modèle précédent — non qualifiée
                          (impact, attention, effet sur la clôture).
                        </p>
                      ) : null}
                      {card.presentationState === "deferred" &&
                      card.deferredHumanDecisionLabel ? (
                        <div>
                          <p className={styles.pointsLabel}>Décision du Pilote</p>
                          <p
                            className={styles.detailText}
                            data-testid={`cycle-reservation-deferred-decision-${card.epistemicItemId}`}
                          >
                            {card.deferredHumanDecisionLabel}
                          </p>
                        </div>
                      ) : null}
                      {!card.rationale &&
                      !card.resolutionCondition &&
                      !card.resolutionProposalRationale &&
                      !card.isLegacy &&
                      card.presentationState !== "deferred" ? (
                        <p className={styles.detailText}>{card.statement}</p>
                      ) : null}
                    </div>
                  ) : null}
                  {deferConfirmId === card.epistemicItemId &&
                  card.canDefer &&
                  card.deferTargetCycleTypeId &&
                  card.deferTargetLabel ? (
                    <div
                      className={styles.deferConfirm}
                      data-testid={`cycle-reservation-defer-confirm-${card.epistemicItemId}`}
                      role="group"
                      aria-label="Confirmer le report de la réserve"
                    >
                      <p className={styles.deferConfirmTitle}>
                        Reporter Réserve {card.ordinal > 0 ? card.ordinal : ""}
                      </p>
                      <p className={styles.detailText}>
                        Cible : <strong>{card.deferTargetLabel}</strong>
                      </p>
                      <p className={styles.detailText}>
                        La réserve restera durable et ne sera pas considérée
                        résolue. Le cycle source pourra continuer / se clôturer
                        si aucun autre blocker. Ce report est une décision
                        explicite du Pilote.
                      </p>
                      <div className={styles.cardActions}>
                        <button
                          type="button"
                          className={styles.actionPrimary}
                          data-testid={`cycle-reservation-defer-confirm-yes-${card.epistemicItemId}`}
                          disabled={busy}
                          onClick={() => {
                            onConfirmDefer?.({
                              epistemicItemId: card.epistemicItemId,
                              targetCycleTypeId: card.deferTargetCycleTypeId!,
                              targetLabel: card.deferTargetLabel!,
                            });
                            setDeferConfirmId(null);
                          }}
                        >
                          {busy ? "Report…" : "Confirmer le report"}
                        </button>
                        <button
                          type="button"
                          className={styles.actionSecondary}
                          data-testid={`cycle-reservation-defer-confirm-no-${card.epistemicItemId}`}
                          disabled={busy}
                          onClick={() => setDeferConfirmId(null)}
                        >
                          Annuler
                        </button>
                      </div>
                    </div>
                  ) : null}
                  {open ? (
                    <div className={styles.cardActions}>
                      {onTreatWithNora ? (
                        <button
                          type="button"
                          className={styles.actionSecondary}
                          data-testid={`cycle-reservation-treat-${card.epistemicItemId}`}
                          onClick={() => onTreatWithNora(card.epistemicItemId)}
                        >
                          Traiter avec Nora
                        </button>
                      ) : null}
                      {subjectRefs.map((journalEntryId) => {
                        const ord = subjectOrdinalById.get(journalEntryId);
                        return (
                          <button
                            key={journalEntryId}
                            type="button"
                            className={styles.actionSecondary}
                            data-testid={`cycle-reservation-subject-${card.epistemicItemId}-${journalEntryId}`}
                            onClick={() => onViewJournalSubject?.(journalEntryId)}
                          >
                            {ord && ord > 0
                              ? `Voir le sujet ${ord}`
                              : "Voir le sujet"}
                          </button>
                        );
                      })}
                      {card.hasResolutionProposal && onConfirmResolve ? (
                        <button
                          type="button"
                          className={styles.actionPrimary}
                          data-testid={`cycle-reservation-confirm-${card.epistemicItemId}`}
                          disabled={busy}
                          onClick={() => onConfirmResolve(card.epistemicItemId)}
                        >
                          {busy ? "Confirmation…" : "Confirmer la levée"}
                        </button>
                      ) : null}
                      {detailOpen &&
                      card.canDefer &&
                      card.deferTargetCycleTypeId &&
                      onConfirmDefer &&
                      deferConfirmId !== card.epistemicItemId ? (
                        <button
                          type="button"
                          className={styles.actionSecondary}
                          data-testid={`cycle-reservation-defer-${card.epistemicItemId}`}
                          disabled={busy}
                          onClick={() =>
                            setDeferConfirmId(card.epistemicItemId)
                          }
                        >
                          Reporter
                        </button>
                      ) : null}
                    </div>
                  ) : null}
                </article>
              );
            })
          )}
        </div>
      ) : null}

      {!collapsed && tab === "sujets" ? (
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
