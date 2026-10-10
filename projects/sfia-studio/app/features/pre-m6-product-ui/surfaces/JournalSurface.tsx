"use client";

import { useState } from "react";
import type {
  CycleDecisionProjectionCard,
  CycleReservationProjectionCard,
} from "@/lib/oa/cycle/application/lifecycleProjection";
import type { WorkRecommendationProjectionCard } from "@/lib/oa/cycle/application/deriveWorkRecommendations";
import styles from "./JournalSurface.module.css";

export type JournalReservationCard = CycleReservationProjectionCard;
export type JournalDecisionCard = CycleDecisionProjectionCard;
/** Work Recommendations only — never Lifecycle NEXT_CYCLE / FINALIZE. */
export type JournalRecommendationCard = WorkRecommendationProjectionCard;

/**
 * CHAT-FIRST-GOVERNED-DECISION-LOOP-01 — four read rails over the same durable
 * projection: Sujets | Réserves | Recommandations | Décisions.
 * Recommandations = Work Recommendations of the cycle (not Lifecycle).
 * Décisions = HumanDecision history. Read-only (no accept/refuse CTA).
 */
export type JournalMemoryTab =
  | "sujets"
  | "reserves"
  | "recommandations"
  | "decisions";

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
  /** Durable Session timestamp when known — omitted rather than invented. */
  createdAt?: string | null;
};

/**
 * `rail` — compact shortcut inside the context column (conversation layout).
 * `principal` — dedicated Journal view owning the main column (P3 94:2 / 94:222).
 * One component, two compositions: never a second Journal cockpit.
 */
export type JournalSurfaceVariant = "rail" | "principal";

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
  /**
   * CHAT-FIRST-GOVERNED-DECISION-LOOP-01 — CURRENT lifecycle Recommendations
   * from the durable projection. Read-only: a Recommendation never decides.
   */
  recommendations?: JournalRecommendationCard[];
  /** Durable HumanDecisions from the same projection. Read-only audit cards. */
  decisions?: JournalDecisionCard[];
  /**
   * Non-mutating handoff: prefill the composer to resume a Recommendation in
   * the conversation. MUST NOT send and MUST NOT record anything.
   */
  onResumeRecommendationInChat?: (recommendationId: string) => void;
  variant?: JournalSurfaceVariant;
  /** Principal only — « Retour à la conversation ». */
  onReturnToConversation?: () => void;
  /** Rail only — promotes the compact shortcut to the dedicated Journal view. */
  onOpenFullJournal?: () => void;
  /** Rail only — compact shortcut shows at most this many subjects. */
  railMaxEntries?: number;
  /** Honest cycle label for the principal header chip (never invented). */
  cycleLabel?: string | null;
  /** Honest currentness label for the principal header chip. */
  currentnessLabel?: string | null;
};

function isOpenReservation(card: JournalReservationCard): boolean {
  return (
    card.presentationState !== "resolved" &&
    card.presentationState !== "rejected" &&
    card.presentationState !== "deferred"
  );
}

/** Pilot-facing label for a Work Recommendation disposition state. */
function recommendationCurrentnessLabel(card: JournalRecommendationCard): string {
  if (card.status === "resolved") return "Traitée";
  if (card.status === "rejected") return "Écartée";
  if (card.status === "superseded") return "Remplacée";
  if (card.dispositionDecisionId) return "Dispositionnée";
  return "En attente de votre réponse";
}

/** A Work Recommendation still awaiting an explicit Pilot disposition. */
function isOpenRecommendation(card: JournalRecommendationCard): boolean {
  return card.status === "active" && !card.dispositionDecisionId;
}

function decisionStatusLabel(status: string): string {
  switch (status) {
    case "accepted":
      return "Acceptée";
    case "refused":
      return "Refusée";
    case "amended":
      return "Amendée";
    case "superseded":
      return "Remplacée";
    case "revoked":
      return "Révoquée";
    default:
      return status;
  }
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
  // P3 94:2 / 94:222 canonical exchange authors.
  if (role === "user") return "VOUS";
  if (role === "assistant") return "NORA";
  return role;
}

function roleAvatarLetter(role: string): string {
  if (role === "VOUS") return "V";
  if (role === "NORA") return "N";
  return "·";
}
function formatExchangeWhen(iso: string | null | undefined): string {
  if (!iso?.trim()) return "Moment non enregistré";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "Moment non enregistré";
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const hh = String(d.getHours()).padStart(2, "0");
  const mi = String(d.getMinutes()).padStart(2, "0");
  return `${dd}/${mm} · ${hh}:${mi}`;
}

function previewFor(
  turnId: string,
  messages: JournalTranscriptMessage[] | undefined,
): {
  role: string;
  excerpt: string;
  when: string;
  resolvable: boolean;
} {
  const msg = messages?.find((m) => m.id === turnId);
  if (!msg) {
    // Never show raw pt:* as the nominal Pilot label — pending reconcile / missing.
    return {
      role: "échange",
      excerpt: "Échange en cours de synchronisation…",
      when: "Moment non enregistré",
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
    when: formatExchangeWhen(msg.createdAt),
    resolvable: true,
  };
}

/** P3 94:2 ordinal — « SUJET 01 ». Falls back to the plain label without one. */
function paddedOrdinalLabel(ordinal: number | null): string {
  if (ordinal == null) return "Sujet";
  return `Sujet ${ordinal < 10 ? `0${ordinal}` : ordinal}`;
}

/** Relative freshness from the durable projection — honest when unreadable. */
function relativeUpdatedAt(iso: string): string {
  const then = new Date(iso).getTime();
  if (Number.isNaN(then)) return "Mise à jour non datée";
  const minutes = Math.floor((Date.now() - then) / 60000);
  if (minutes < 0) return "Mise à jour non datée";
  if (minutes < 1) return "Mis à jour à l'instant";
  if (minutes < 60) return `Mis à jour il y a ${minutes} min`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `Mis à jour il y a ${hours} h`;
  const days = Math.floor(hours / 24);
  return `Mis à jour il y a ${days} j`;
}

/** Exchanges shown before the Pilot expands the full linked index (94:2). */
const PRINCIPAL_EXCHANGE_PREVIEW = 2;

const MEMORY_TABS: ReadonlyArray<{
  id: JournalMemoryTab;
  label: string;
  paneId: string;
}> = [
  { id: "sujets", label: "Sujets", paneId: "cycle-journal-list" },
  { id: "reserves", label: "Réserves", paneId: "cycle-reservations-list" },
  {
    id: "recommandations",
    label: "Recommandations",
    paneId: "cycle-recommendations-list",
  },
  { id: "decisions", label: "Décisions", paneId: "cycle-decisions-list" },
];

/**
 * Cycle Journal — semantic projection only, in a rail or principal composition.
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
  recommendations = [],
  decisions = [],
  onResumeRecommendationInChat,
  variant = "rail",
  onReturnToConversation,
  onOpenFullJournal,
  railMaxEntries,
  cycleLabel = null,
  currentnessLabel = null,
}: JournalSurfaceProps) {
  const principal = variant === "principal";
  const safeEntries = Array.isArray(entries) ? entries : [];
  const safeReservations = Array.isArray(reservations) ? reservations : [];
  const safeRecommendations = Array.isArray(recommendations)
    ? recommendations
    : [];
  const safeDecisions = Array.isArray(decisions) ? decisions : [];
  const activeCount = safeEntries.filter((e) => e.status === "active").length;
  const openReservationCount = safeReservations.filter(isOpenReservation).length;
  const openRecommendationCount = safeRecommendations.filter(
    isOpenRecommendation,
  ).length;
  const decisionCount = safeDecisions.length;
  const [expandedEntryId, setExpandedEntryId] = useState<string | null>(null);
  const [pointsOpenId, setPointsOpenId] = useState<string | null>(null);
  const [internalTab, setInternalTab] = useState<JournalMemoryTab>("sujets");
  const [reservationDetailId, setReservationDetailId] = useState<string | null>(
    null,
  );
  /** Epistemic id awaiting explicit Pilot confirm for defer — zero writes until confirm. */
  const [deferConfirmId, setDeferConfirmId] = useState<string | null>(null);
  /** Principal mobile only — one nav level: subjects index ↔ selected subject. */
  const [mobileShowDetail, setMobileShowDetail] = useState(false);
  const tab: JournalMemoryTab = memoryTab ?? internalTab;
  const setTab = (next: JournalMemoryTab) => {
    if (memoryTab === undefined) setInternalTab(next);
    onMemoryTabChange?.(next);
  };
  const subjectOrdinalById = new Map(
    safeEntries.map((e) => [e.journalEntryId, e.topicOrdinal] as const),
  );
  const paneId =
    tab === "sujets"
      ? "cycle-journal-list"
      : tab === "reserves"
        ? "cycle-reservations-list"
        : tab === "recommandations"
          ? "cycle-recommendations-list"
          : "cycle-decisions-list";
  const reservationCycleId = reservationsCycleInstanceId ?? cycleInstanceId;
  const railTitle =
    tab === "sujets"
      ? "Journal du cycle"
      : tab === "reserves"
        ? "Réserves du cycle"
        : tab === "recommandations"
          ? "Recommandations"
          : "Décisions";
  const railMeta =
    tab === "sujets"
      ? cycleInstanceId
        ? `${activeCount} sujet${activeCount === 1 ? "" : "s"}`
        : "Aucun cycle actif"
      : tab === "reserves"
        ? reservationCycleId
          ? `${openReservationCount} réserve${openReservationCount === 1 ? "" : "s"} ouverte${openReservationCount === 1 ? "" : "s"}`
          : "Aucun cycle sélectionné"
        : tab === "recommandations"
          ? `${openRecommendationCount} en attente de votre réponse`
          : `${decisionCount} décision${decisionCount === 1 ? "" : "s"} enregistrée${decisionCount === 1 ? "" : "s"}`;

  /** Rail stays a shortcut: it shows a bounded head of the subjects index. */
  const listedEntries =
    !principal && typeof railMaxEntries === "number" && railMaxEntries > 0
      ? safeEntries.slice(0, railMaxEntries)
      : safeEntries;
  const hiddenEntryCount = safeEntries.length - listedEntries.length;

  /**
   * Principal detail falls back to the current topic then the first subject so
   * the master/detail view is never empty while a subject exists.
   */
  const detailEntry: JournalSurfaceEntry | null = principal
    ? (safeEntries.find((e) => e.journalEntryId === selectedEntryId) ??
      safeEntries.find((e) => e.isCurrentTopic) ??
      safeEntries[0] ??
      null)
    : null;
  const detailTurnRefs = detailEntry?.sourceTurnRefs ?? [];
  const exchangesExpanded =
    detailEntry != null && expandedEntryId === detailEntry.journalEntryId;
  const shownTurnRefs = exchangesExpanded
    ? detailTurnRefs
    : detailTurnRefs.slice(0, PRINCIPAL_EXCHANGE_PREVIEW);
  const firstResolvableTurn =
    detailTurnRefs.find(
      (turnId) => previewFor(turnId, transcriptMessages).resolvable,
    ) ?? null;
  /** Only Reservations carry a durable Journal subject link in the projection. */
  const detailLinkedReservations = detailEntry
    ? safeReservations.filter((r) =>
        r.journalEntryRefs.includes(detailEntry.journalEntryId),
      )
    : [];
  const masterTitle =
    tab === "sujets"
      ? "Sujets"
      : tab === "reserves"
        ? "Réserves"
        : tab === "recommandations"
          ? "Recommandations"
          : "Décisions";

  const Root = (principal ? "section" : "aside") as "section";

  return (
    <Root
      className={[
        styles.root,
        principal ? styles.principal : "",
        collapsed ? styles.collapsed : "",
      ]
        .filter(Boolean)
        .join(" ")}
      data-testid={principal ? "project-journal-surface" : "cycle-journal-rail"}
      data-variant={variant}
      data-memory-tab={tab}
      data-mobile-detail={
        principal && mobileShowDetail && detailEntry ? "true" : "false"
      }
      aria-label="Journal du cycle"
    >
      {principal ? (
        <header className={styles.principalHeader}>
          {onReturnToConversation ? (
            <button
              type="button"
              className={styles.principalBack}
              data-testid="project-journal-return-conversation"
              onClick={onReturnToConversation}
            >
              <span className={styles.principalBackFull}>
                ← Retour à la conversation
              </span>
              <span className={styles.principalBackShort}>← Conversation</span>
            </button>
          ) : null}
          <div className={styles.principalTitleRow}>
            <h2 className={styles.principalTitle} id="cycle-journal-heading">
              Journal du cycle
            </h2>
            {/*
             * Context chip: honest cycleLabel when known; otherwise Pilot-facing
             * surface-identity copy — never invent Product facts (no hardcoded P3 · …).
             */}
            <span
              className={styles.principalChip}
              data-testid="project-journal-cycle-chip"
            >
              {cycleLabel?.trim() || "Espace projet / interaction"}
            </span>
            {currentnessLabel ? (
              <span
                className={styles.principalChipOk}
                data-testid="project-journal-currentness"
              >
                {currentnessLabel}
              </span>
            ) : null}
          </div>
          {tab === "sujets" ? (
            <p className={styles.principalSubtitle}>
              Les fils de travail du Cycle, mis à jour au fil de la conversation.
            </p>
          ) : null}
        </header>
      ) : (
        <header className={styles.header}>
          <div className={styles.headerText}>
            <p className={styles.eyebrow}>Mémoire de cycle</p>
            <h2 className={styles.title} id="cycle-journal-heading">
              {railTitle}
            </h2>
            <p className={styles.meta}>{railMeta}</p>
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
      )}

      {!principal && !collapsed && onOpenFullJournal ? (
        <button
          type="button"
          className={styles.openFull}
          data-testid="cycle-journal-open-full"
          onClick={onOpenFullJournal}
        >
          Ouvrir le Journal du cycle →
        </button>
      ) : null}

      {!collapsed ? (
        <div
          className={styles.tabs}
          role="tablist"
          aria-label="Mémoire de cycle"
          data-testid="memory-rail-tabs"
        >
          {MEMORY_TABS.map((item) => {
            const count =
              item.id === "sujets"
                ? activeCount
                : item.id === "reserves"
                  ? openReservationCount
                  : item.id === "recommandations"
                    ? openRecommendationCount
                    : decisionCount;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                id={`memory-rail-tab-${item.id}`}
                className={[styles.tab, tab === item.id ? styles.tabActive : ""]
                  .filter(Boolean)
                  .join(" ")}
                data-testid={`memory-rail-tab-${item.id}`}
                aria-selected={tab === item.id}
                aria-controls={item.paneId}
                onClick={() => setTab(item.id)}
              >
                {/* Principal 94:2: rectangular count chip; mobile 192:41 collapses to digit. */}
                {principal ? (
                  <>
                    <span className={styles.tabLabel}>{item.label}</span>
                    <span className={styles.tabCount}>{count}</span>
                  </>
                ) : (
                  `${item.label} (${count})`
                )}
              </button>
            );
          })}
        </div>
      ) : null}

      <div className={styles.body} data-variant={variant}>
      <div
        className={styles.masterCol}
        data-mobile-hidden={
          principal && mobileShowDetail && detailEntry ? "true" : "false"
        }
      >
      {principal && !collapsed ? (
        <div className={styles.masterHead}>
          <div className={styles.masterHeadRow}>
            <h3 className={styles.masterTitle}>{masterTitle}</h3>
            <span className={styles.masterCount}>{railMeta}</span>
          </div>
          {tab === "sujets" ? (
            <p className={styles.masterNote}>
              Les fils de travail du Cycle, mis à jour au fil de la
              conversation.
            </p>
          ) : null}
        </div>
      ) : null}

      {!collapsed && tab === "recommandations" ? (
        <div
          id="cycle-recommendations-list"
          className={styles.list}
          role="tabpanel"
          aria-labelledby="memory-rail-tab-recommandations"
          data-testid="cycle-recommendations-list"
        >
          {safeRecommendations.length === 0 ? (
            <p className={styles.empty} data-testid="cycle-recommendations-empty">
              Aucune recommandation de travail pour ce cycle. Nora en formulera
              pendant le travail — une recommandation ne décide jamais.
            </p>
          ) : (
            safeRecommendations.map((card) => {
              const open = isOpenRecommendation(card);
              return (
                <article
                  key={card.epistemicItemId}
                  className={[styles.card, !open ? styles.cardMuted : ""]
                    .filter(Boolean)
                    .join(" ")}
                  data-testid={`cycle-recommendation-card-${card.epistemicItemId}`}
                  data-state={card.status}
                  data-family="work"
                >
                  <div className={styles.cardHeading}>
                    <span
                      className={styles.stateBadge}
                      data-state={card.status}
                      data-testid={`cycle-recommendation-state-${card.epistemicItemId}`}
                    >
                      {recommendationCurrentnessLabel(card)}
                    </span>
                  </div>
                  <p className={styles.cardTitle}>{card.statement}</p>
                  <p className={styles.cardMeta}>
                    <span>Recommandation de travail</span>
                    <span>Nora · recommandation</span>
                  </p>
                  <p
                    className={styles.finalizationHint}
                    data-testid={`cycle-recommendation-authority-${card.epistemicItemId}`}
                  >
                    RECOMMANDATION — PAS UNE DÉCISION HUMAINE. Disposez-en dans
                    le chat (poursuivre, amender, refuser ou reporter).
                  </p>
                  {open && onResumeRecommendationInChat ? (
                    <div className={styles.cardActions}>
                      <button
                        type="button"
                        className={styles.actionSecondary}
                        data-testid={`cycle-recommendation-resume-${card.epistemicItemId}`}
                        onClick={() =>
                          onResumeRecommendationInChat(card.epistemicItemId)
                        }
                      >
                        En discuter avec Nora
                      </button>
                    </div>
                  ) : null}
                </article>
              );
            })
          )}
        </div>
      ) : null}

      {!collapsed && tab === "decisions" ? (
        <div
          id="cycle-decisions-list"
          className={styles.list}
          role="tabpanel"
          aria-labelledby="memory-rail-tab-decisions"
          data-testid="cycle-decisions-list"
        >
          {safeDecisions.length === 0 ? (
            <p className={styles.empty} data-testid="cycle-decisions-empty">
              Aucune décision enregistrée. Vos décisions apparaîtront ici après
              avoir été prises dans la conversation.
            </p>
          ) : (
            safeDecisions.map((card) => (
              <article
                key={card.decisionId}
                className={styles.card}
                data-testid={`cycle-decision-card-${card.decisionId}`}
                data-status={card.status}
              >
                <div className={styles.cardHeading}>
                  <span
                    className={styles.stateBadge}
                    data-state={card.status}
                    data-testid={`cycle-decision-state-${card.decisionId}`}
                  >
                    {decisionStatusLabel(card.status)}
                  </span>
                </div>
                <p className={styles.cardTitle}>{card.selectedOptionLabel}</p>
                <p className={styles.cardSummary}>{card.subject}</p>
                <p className={styles.cardMeta}>
                  <span>{card.actorDisplayName}</span>
                  <span>{card.effectiveAt}</span>
                </p>
                {card.reservations.length > 0 ? (
                  <ul
                    className={styles.pointsList}
                    data-testid={`cycle-decision-reserves-${card.decisionId}`}
                  >
                    {card.reservations.map((r, i) => (
                      <li key={`r-${i}`}>{r}</li>
                    ))}
                  </ul>
                ) : null}
                <details data-testid={`cycle-decision-tech-${card.decisionId}`}>
                  <summary>Détails techniques</summary>
                  <p className={styles.detailText}>
                    <code>{card.decisionId}</code>
                    {card.cycleInstanceId ? ` · cycle ${card.cycleInstanceId}` : ""}
                    {` · base de décision ${card.decisionBasisLinked ? "reliée" : "absente"}`}
                  </p>
                </details>
              </article>
            ))
          )}
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
            listedEntries.map((entry) => {
              const selected = principal
                ? detailEntry?.journalEntryId === entry.journalEntryId
                : selectedEntryId === entry.journalEntryId;
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
                    onClick={() => {
                      onSelectEntry(entry.journalEntryId);
                      if (principal) setMobileShowDetail(true);
                    }}
                    aria-pressed={selected}
                  >
                    <span className={styles.cardHeading}>
                      {ordinal != null ? (
                        <span
                          className={styles.ordinal}
                          data-testid={`cycle-journal-ordinal-${entry.journalEntryId}`}
                        >
                          {principal
                            ? paddedOrdinalLabel(ordinal)
                            : `Sujet ${ordinal}`}
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
                      {principal && !entry.isCurrentTopic ? (
                        <span
                          className={styles.statusBadge}
                          data-status={entry.status}
                        >
                          {statusLabel(entry.status)}
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
                      {principal ? (
                        <span className={styles.cardPoints}>
                          {entry.stabilizedPoints.length} stabilisé
                          {entry.stabilizedPoints.length === 1 ? "" : "s"} ·{" "}
                          {entry.openPoints.length} ouvert
                          {entry.openPoints.length === 1 ? "" : "s"}
                        </span>
                      ) : null}
                    </span>
                  </button>
                  {!principal && hasPoints ? (
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
                  {!principal && pointsOpen && hasPoints ? (
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
                  {!principal && entry.sourceTurnRefs.length > 0 ? (
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
                  {!principal && expanded && entry.sourceTurnRefs.length > 0 ? (
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
                              <span className={styles.exchangeTop}>
                                <span
                                  className={styles.exchangeRole}
                                  data-role={preview.role}
                                >
                                  {preview.role}
                                </span>
                                <span className={styles.exchangeWhen}>
                                  {preview.when}
                                </span>
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
          {hiddenEntryCount > 0 && onOpenFullJournal ? (
            <button
              type="button"
              className={styles.viewExchanges}
              data-testid="cycle-journal-overflow"
              onClick={onOpenFullJournal}
            >
              Voir les {safeEntries.length} sujets →
            </button>
          ) : null}
        </div>
      ) : null}
      </div>

      {principal && !collapsed && tab === "sujets" ? (
        <div
          className={styles.detailCol}
          data-testid="project-journal-detail"
          data-mobile-hidden={mobileShowDetail && detailEntry ? "false" : "true"}
          aria-live="polite"
        >
          {!detailEntry ? (
            <p className={styles.empty} data-testid="project-journal-detail-empty">
              Sélectionnez un sujet pour lire son état courant, ses points et
              ses échanges liés.
            </p>
          ) : (
            <div className={styles.detailInner}>
              <button
                type="button"
                className={styles.detailBack}
                data-testid="project-journal-back-to-subjects"
                onClick={() => setMobileShowDetail(false)}
              >
                ← Sujets
              </button>

              <div className={styles.detailHead}>
                <div className={styles.detailHeadRow}>
                  <span className={styles.detailBadges}>
                    {detailEntry.topicOrdinal > 0 ? (
                      <span
                        className={styles.ordinal}
                        data-testid="project-journal-detail-ordinal"
                      >
                        {paddedOrdinalLabel(detailEntry.topicOrdinal)}
                      </span>
                    ) : null}
                    {detailEntry.isCurrentTopic ? (
                      <span className={styles.currentBadge}>En cours</span>
                    ) : null}
                    <span
                      className={styles.statusBadge}
                      data-status={detailEntry.status}
                    >
                      {statusLabel(detailEntry.status)}
                    </span>
                  </span>
                  <span className={styles.detailUpdated}>
                    {relativeUpdatedAt(detailEntry.updatedAt)}
                  </span>
                </div>
                <h3
                  className={styles.detailTitle}
                  data-testid="project-journal-detail-title"
                >
                  {detailEntry.title}
                </h3>
                <p className={styles.detailSummary}>
                  {detailEntry.currentSummary}
                </p>
              </div>

              <section
                className={styles.detailSection}
                data-testid="project-journal-stabilized"
              >
                <p className={styles.detailSectionHead}>
                  <span className={styles.detailSectionLabel}>
                    Points stabilisés
                  </span>
                  <span className={styles.detailSectionCount}>
                    {detailEntry.stabilizedPoints.length}
                  </span>
                </p>
                {detailEntry.stabilizedPoints.length === 0 ? (
                  <p className={styles.detailUnavailable}>
                    Aucun point stabilisé enregistré sur ce sujet.
                  </p>
                ) : (
                  <ul className={styles.markedList} data-marker="stabilized">
                    {detailEntry.stabilizedPoints.map((point, i) => (
                      <li key={`ds-${i}`}>{point}</li>
                    ))}
                  </ul>
                )}
              </section>

              <section
                className={styles.detailSection}
                data-testid="project-journal-open"
              >
                <p className={styles.detailSectionHead}>
                  <span className={styles.detailSectionLabel}>
                    Points ouverts
                  </span>
                  <span className={styles.detailSectionCount}>
                    {detailEntry.openPoints.length}
                  </span>
                </p>
                {detailEntry.openPoints.length === 0 ? (
                  <p className={styles.detailUnavailable}>
                    Aucun point ouvert sur ce sujet.
                  </p>
                ) : (
                  <ul className={styles.markedList} data-marker="open">
                    {detailEntry.openPoints.map((point, i) => (
                      <li key={`do-${i}`}>{point}</li>
                    ))}
                  </ul>
                )}
              </section>

              <section
                className={styles.detailSection}
                data-testid="project-journal-linked"
              >
                <p className={styles.detailSectionHead}>
                  <span className={styles.detailSectionLabel}>
                    Éléments liés
                  </span>
                </p>
                {detailLinkedReservations.length > 0 ? (
                  <div className={styles.linkedPills}>
                    <button
                      type="button"
                      className={styles.linkedPill}
                      data-kind="reserve"
                      data-testid="project-journal-linked-reservation-count"
                      onClick={() => setTab("reserves")}
                    >
                      <span className={styles.linkedPillCount}>
                        {detailLinkedReservations.length}
                      </span>
                      <span className={styles.linkedPillLabel}>
                        {detailLinkedReservations.length === 1
                          ? "réserve"
                          : "réserves"}
                      </span>
                    </button>
                    {detailLinkedReservations.map((card) => (
                      <button
                        key={card.epistemicItemId}
                        type="button"
                        className={styles.linkedPill}
                        data-kind="reserve-item"
                        data-testid={`project-journal-linked-reservation-${card.epistemicItemId}`}
                        onClick={() => setTab("reserves")}
                        title={card.title}
                      >
                        <span className={styles.linkedPillCount}>
                          {card.ordinal > 0 ? card.ordinal : "·"}
                        </span>
                        <span className={styles.linkedPillLabel}>
                          {card.presentationStateLabel}
                        </span>
                      </button>
                    ))}
                  </div>
                ) : null}
                <p className={styles.detailUnavailable}>
                  {detailLinkedReservations.length > 0
                    ? "Les décisions et recommandations ne portent pas de rattachement durable à un sujet — consultez leurs onglets."
                    : "Aucun élément lié à ce sujet dans la projection : seules les réserves portent un rattachement durable au Journal."}
                </p>
              </section>

              <section
                className={styles.detailSection}
                data-testid="project-journal-exchanges"
              >
                <p className={styles.detailSectionHead}>
                  <span className={styles.detailSectionLabel}>
                    Échanges liés
                  </span>
                  <span className={styles.detailSectionCount}>
                    {detailTurnRefs.length === 0
                      ? "0"
                      : exchangesExpanded
                        ? `${detailTurnRefs.length} échange${detailTurnRefs.length === 1 ? "" : "s"} affiché${detailTurnRefs.length === 1 ? "" : "s"}`
                        : `${shownTurnRefs.length} sur ${detailTurnRefs.length} affichés`}
                  </span>
                </p>
                {detailTurnRefs.length === 0 ? (
                  <p className={styles.detailUnavailable}>
                    Aucun échange durable n&apos;est rattaché à ce sujet.
                  </p>
                ) : (
                  <ul
                    id={`cycle-journal-exchanges-${detailEntry.journalEntryId}`}
                    className={styles.exchangePanel}
                    data-testid={`cycle-journal-exchanges-${detailEntry.journalEntryId}`}
                    data-expanded={exchangesExpanded ? "true" : "false"}
                    aria-label={`Échanges liés — ${detailEntry.title}`}
                  >
                    {shownTurnRefs.map((turnId, index) => {
                      const preview = previewFor(turnId, transcriptMessages);
                      return (
                        <li key={`${turnId}-${index}`}>
                          <button
                            type="button"
                            className={styles.exchangeRow}
                            data-testid={`cycle-journal-exchange-${turnId}`}
                            data-resolvable={
                              preview.resolvable ? "true" : "false"
                            }
                            data-role={preview.role}
                            onClick={() => {
                              if (preview.resolvable) onFocusTurn(turnId);
                            }}
                            disabled={!preview.resolvable}
                          >
                            <span className={styles.exchangeWho}>
                              <span
                                className={styles.exchangeAvatar}
                                data-role={preview.role}
                                aria-hidden
                              >
                                {roleAvatarLetter(preview.role)}
                              </span>
                              <span
                                className={styles.exchangeRole}
                                data-role={preview.role}
                              >
                                {preview.role}
                              </span>
                            </span>
                            <span className={styles.exchangeExcerpt}>
                              {preview.excerpt}
                            </span>
                            <span className={styles.exchangeWhen}>
                              {preview.when}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                )}
                <div className={styles.detailFooter}>
                  {detailTurnRefs.length > PRINCIPAL_EXCHANGE_PREVIEW ? (
                    <button
                      type="button"
                      className={styles.viewExchanges}
                      data-testid={`cycle-journal-view-${detailEntry.journalEntryId}`}
                      aria-expanded={exchangesExpanded}
                      aria-controls={`cycle-journal-exchanges-${detailEntry.journalEntryId}`}
                      onClick={() => {
                        onViewExchanges(detailEntry);
                        setExpandedEntryId((prev) =>
                          prev === detailEntry.journalEntryId
                            ? null
                            : detailEntry.journalEntryId,
                        );
                      }}
                    >
                      {exchangesExpanded
                        ? "Réduire les échanges"
                        : `Voir les ${detailTurnRefs.length} échanges`}
                    </button>
                  ) : (
                    <span />
                  )}
                  {firstResolvableTurn ? (
                    <button
                      type="button"
                      className={styles.viewExchanges}
                      data-testid="project-journal-open-in-conversation"
                      onClick={() => onFocusTurn(firstResolvableTurn)}
                    >
                      Voir dans la conversation →
                    </button>
                  ) : (
                    <span className={styles.detailUnavailable}>
                      Échanges non résolus — reprise impossible pour l&apos;instant.
                    </span>
                  )}
                </div>
              </section>
            </div>
          )}
        </div>
      ) : null}
      </div>
    </Root>
  );
}
