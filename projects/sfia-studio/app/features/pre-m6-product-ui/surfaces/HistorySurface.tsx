"use client";

import { useEffect, useMemo, useState } from "react";
import { w2ReadProjectHistoryAction } from "@/features/project-assistant/w2/actions";
import type { W2ProjectHistoryReadModel } from "@/features/project-assistant/w2/projectHistory";
import {
  deriveProjectHistoryEvents,
  filterProjectHistoryEvents,
  type PilotHistoryEvent,
  type PilotHistoryFilter,
} from "@/features/project-assistant/w2/deriveProjectHistoryEvents";
import type { ProjectAssistantRehydrateEvidenceOutcomeSuccess } from "@/features/project-assistant/types";
import type { GetProjectSuccess } from "../types";
import styles from "./HistorySurface.module.css";

function formatTime(iso: string | null): string {
  if (!iso) return "Heure non enregistrée";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "Heure non enregistrée";
  return d.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
}

/** Day bucket key — stable per calendar day, or `undated` when no Product date. */
function dayKey(iso: string | null): string {
  if (!iso) return "undated";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "undated";
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

function dayLabel(iso: string | null): string {
  if (dayKey(iso) === "undated") return "Sans date";
  const d = new Date(iso!);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  if (dayKey(iso) === dayKey(today.toISOString())) return "Aujourd'hui";
  if (dayKey(iso) === dayKey(yesterday.toISOString())) return "Hier";
  return d.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function detailWhenLabel(event: PilotHistoryEvent): string {
  if (!event.occurredAt) return "Moment non enregistré";
  return `${dayLabel(event.occurredAt)} · ${formatTime(event.occurredAt)}`;
}

/**
 * P3 78:2 filters — Tout / Décisions / Changements. « Vérifié » is an event-type
 * chip inside the list, never a fourth filter.
 */
const FILTERS: ReadonlyArray<{ id: PilotHistoryFilter; label: string }> = [
  { id: "all", label: "Tout" },
  { id: "decisions", label: "Décisions" },
  { id: "changes", label: "Changements" },
];

/** Pilot-facing chip for the event bucket (tone drives the P3 colour). */
function bucketTone(event: PilotHistoryEvent): "decision" | "verified" | "change" {
  if (event.filterBucket === "decisions") return "decision";
  if (event.filterBucket === "verified") return "verified";
  return "change";
}

function bucketChipLabel(event: PilotHistoryEvent): string {
  switch (bucketTone(event)) {
    case "decision":
      return "Décision";
    case "verified":
      return "Vérifié";
    default:
      return "Changement";
  }
}

/** Honest Nora handoff draft — prefill only, never a Product mutation. */
function askNoraDraft(event: PilotHistoryEvent): string {
  return [
    `Nora, explique-moi cet élément de l'historique : « ${event.title} ».`,
    `Type : ${event.kindLabel} · source ${event.sourceKind}.`,
    "Dis-moi ce qui est réellement établi et ce qui manque pour le comprendre.",
  ].join("\n");
}

const UNAVAILABLE_DECIDED =
  "Aucun contenu de décision n'est rattaché à cet événement.";
const UNAVAILABLE_WHY =
  "La raison de cet événement n'est pas enregistrée ici.";
const UNAVAILABLE_IMPACT =
  "Aucun impact n'est enregistré pour cet événement.";
const UNAVAILABLE_VERIFICATION =
  "Aucune vérification n'est rattachée à cet événement.";

/**
 * P5-S07 / P3 Historique (78:2 · 190:111 · 190:380 · 190:412).
 * Product-derived master/detail + local search. Never a transcript replay,
 * never a HistoryStore, never an invented why / impact / verification.
 */
export function HistorySurface({
  result,
  durableOutcome = null,
  onReturnToOverview,
  onAskNora,
}: {
  result: GetProjectSuccess;
  durableOutcome?: ProjectAssistantRehydrateEvidenceOutcomeSuccess | null;
  onReturnToOverview?: () => void;
  /** Prefill the conversation composer about one event. MUST NOT send. */
  onAskNora?: (draft: string) => void;
}) {
  const [history, setHistory] = useState<W2ProjectHistoryReadModel | null>(null);
  const [filter, setFilter] = useState<PilotHistoryFilter>("all");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [mobileShowDetail, setMobileShowDetail] = useState(false);
  const [askDraft, setAskDraft] = useState("");

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

  const events = useMemo(() => {
    if (!history) {
      // Minimum identity anchors while W2 history loads / fails closed.
      const fallback: W2ProjectHistoryReadModel = {
        projectId,
        projectTitle: result.project.name,
        lps: {
          lpsId: result.livingState.id,
          version: result.livingState.version,
        },
        cycle: {
          activeCycleInstanceId:
            result.livingState.activeCycleInstanceId ?? null,
          cycleTypeId: null,
          profile: null,
          status: null,
        },
        trajectory: {
          effectiveCurrent: null,
          proposedNotYetDecided: null,
          versions: [],
        },
        decisions: [],
        contracts: [],
        evidence: [],
        reviewBundles: [],
        syntheses: [],
        absent: [],
        boundNote: "Borné · chargement History en cours.",
      };
      return deriveProjectHistoryEvents({
        history: fallback,
        durable: durableOutcome,
      });
    }
    return deriveProjectHistoryEvents({
      history,
      durable: durableOutcome,
    });
  }, [history, durableOutcome, projectId, result.project.name, result.livingState]);

  const visible = useMemo(
    () => filterProjectHistoryEvents(events, { filter, query }),
    [events, filter, query],
  );

  /** Day groups in projection order — grouping is presentation only. */
  const groups = useMemo(() => {
    const out: Array<{ key: string; label: string; items: PilotHistoryEvent[] }> =
      [];
    for (const event of visible) {
      const key = dayKey(event.occurredAt);
      const last = out[out.length - 1];
      if (last && last.key === key) {
        last.items.push(event);
        continue;
      }
      out.push({ key, label: dayLabel(event.occurredAt), items: [event] });
    }
    return out;
  }, [visible]);

  useEffect(() => {
    if (visible.length === 0) {
      setSelectedId(null);
      return;
    }
    if (!selectedId || !visible.some((e) => e.eventId === selectedId)) {
      setSelectedId(visible[0]!.eventId);
    }
  }, [visible, selectedId]);

  const selected: PilotHistoryEvent | null =
    visible.find((e) => e.eventId === selectedId) ?? null;

  useEffect(() => {
    setAskDraft("");
  }, [selectedId]);

  function selectEvent(eventId: string) {
    setSelectedId(eventId);
    setMobileShowDetail(true);
  }

  function submitAskNora() {
    if (!selected || !onAskNora) return;
    const draft = askDraft.trim() ? askDraft.trim() : askNoraDraft(selected);
    onAskNora(draft);
  }

  return (
    <section
      className={styles.root}
      data-testid="project-history-panel"
      data-mobile-detail={mobileShowDetail && selected ? "true" : "false"}
      aria-labelledby="pm6-history-title"
    >
      <div
        className={styles.layout}
        data-testid="history-master-detail"
        data-mobile-detail={mobileShowDetail && selected ? "true" : "false"}
      >
        <div
          className={styles.masterPane}
          data-testid="history-list-pane"
          data-mobile-hidden={mobileShowDetail && selected ? "true" : "false"}
        >
          <header className={styles.head}>
            {onReturnToOverview ? (
              <button
                type="button"
                className={styles.backLink}
                data-testid="history-back-overview"
                onClick={onReturnToOverview}
              >
                ← Retour à l&apos;Aperçu
              </button>
            ) : null}
            <div className={styles.titleRow}>
              <h2 id="pm6-history-title" className={styles.title}>
                Historique
              </h2>
              <p className={styles.listEyebrow} aria-hidden>
                Historique
              </p>
              <div
                className={styles.filters}
                role="toolbar"
                aria-label="Filtrer l'historique"
                data-testid="history-filters"
              >
                {FILTERS.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={styles.filter}
                    data-selected={filter === item.id ? "true" : "false"}
                    data-filter={item.id}
                    aria-pressed={filter === item.id}
                    data-testid={`history-filter-${item.id}`}
                    onClick={() => setFilter(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            <p className={styles.note}>
              Retrouve les changements importants du projet.
            </p>
          </header>

          <label className={styles.searchLabel}>
            <span className={styles.srOnly}>
              Rechercher dans l&apos;historique
            </span>
            <input
              type="search"
              className={styles.search}
              placeholder="Rechercher dans l'historique…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              data-testid="history-search"
              autoComplete="off"
            />
          </label>

          <div className={styles.listScroll}>
            {visible.length === 0 ? (
              <p className={styles.empty} data-testid="history-empty">
                Aucun événement ne correspond à ce filtre.
              </p>
            ) : (
              groups.map((group) => (
                <section
                  key={group.key}
                  className={styles.group}
                  data-testid={`history-group-${group.key}`}
                >
                  <p className={styles.groupLabel}>{group.label}</p>
                  <ol className={styles.timeline}>
                    {group.items.map((event) => {
                      const selectedRow = event.eventId === selectedId;
                      return (
                        <li key={event.eventId} className={styles.timelineItem}>
                          <button
                            type="button"
                            className={styles.entry}
                            data-selected={selectedRow ? "true" : "false"}
                            data-tone={bucketTone(event)}
                            data-testid={`history-event-${event.eventId}`}
                            aria-current={selectedRow ? "true" : undefined}
                            onClick={() => selectEvent(event.eventId)}
                          >
                            <span
                              className={styles.marker}
                              data-tone={bucketTone(event)}
                              aria-hidden
                            />
                            <span className={styles.label}>{event.title}</span>
                            <span
                              className={styles.kind}
                              data-tone={bucketTone(event)}
                            >
                              {bucketChipLabel(event)}
                            </span>
                            <span className={styles.chevron} aria-hidden>
                              →
                            </span>
                            <span className={styles.metaRow}>
                              <span className={styles.when}>
                                {formatTime(event.occurredAt)}
                              </span>
                              <span className={styles.detail}>
                                {event.summary}
                              </span>
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ol>
                </section>
              ))
            )}
          </div>
        </div>

        <aside
          className={styles.detailPane}
          data-testid="history-detail-pane"
          data-mobile-hidden={mobileShowDetail && selected ? "false" : "true"}
          aria-live="polite"
        >
          {selected ? (
            <div className={styles.detailInner}>
              <button
                type="button"
                className={styles.backMobile}
                data-testid="history-back-to-list"
                onClick={() => setMobileShowDetail(false)}
              >
                ← Historique
              </button>

              <div className={styles.detailHead}>
                <div className={styles.detailHeadRow}>
                  <span
                    className={styles.detailKind}
                    data-tone={bucketTone(selected)}
                    data-testid="history-detail-kind-chip"
                  >
                    {bucketChipLabel(selected)}
                  </span>
                  <span className={styles.detailWhen}>
                    {detailWhenLabel(selected)}
                    {selected.isCurrent ? " · Courant" : ""}
                  </span>
                </div>
                <h3 className={styles.detailTitle}>{selected.title}</h3>
                <p className={styles.detailSummary}>{selected.summary}</p>
              </div>

              {/* Compact + mobile reading path — 190:111 / 190:412 (not full H1 blocks). */}
              <div
                className={styles.compactReading}
                data-testid="history-compact-reading"
              >
                <div className={styles.detailBlock}>
                  <p className={styles.detailBlockLabel}>Contexte</p>
                  <p className={styles.detailBlockBody}>
                    {/*
                     * Compact/mobile CONTEXTE prefers Pilot-facing summary over
                     * technical why dumps (basisSourceType, raw refs). Full why
                     * remains in the LARGE desktop block below.
                     */}
                    {selected.summary ||
                      selected.decidedWhat ||
                      selected.why ||
                      "Contexte non enregistré pour cet événement."}
                  </p>
                </div>
                <div className={styles.detailBlock}>
                  <p className={styles.detailBlockLabel}>Éléments liés</p>
                  <p
                    className={styles.linkedInline}
                    data-testid="history-mobile-linked"
                  >
                    {[
                      selected.kindLabel,
                      ...selected.linked.map((l) => l.label),
                    ]
                      .filter(Boolean)
                      .join(" · ") || "Aucun élément lié supplémentaire."}
                  </p>
                </div>
                {onAskNora ? (
                  <button
                    type="button"
                    className={styles.askNoraCta}
                    data-testid="history-ask-nora-cta"
                    onClick={() => {
                      onAskNora(askNoraDraft(selected));
                    }}
                  >
                    Demander à Nora d&apos;expliquer cet élément →
                  </button>
                ) : null}
              </div>

              <div
                className={`${styles.detailBlock} ${styles.desktopOnly}`}
                data-testid="history-detail-decided"
              >
                <p className={styles.detailBlockLabel}>Ce qui a été décidé</p>
                <p
                  className={styles.detailBlockBody}
                  data-available={selected.decidedWhat ? "true" : "false"}
                >
                  {selected.decidedWhat ?? UNAVAILABLE_DECIDED}
                </p>
              </div>

              <div
                className={`${styles.detailBlock} ${styles.desktopOnly}`}
                data-testid="history-detail-why"
              >
                <p className={styles.detailBlockLabel}>Pourquoi</p>
                <p
                  className={styles.detailBlockBody}
                  data-available={selected.why ? "true" : "false"}
                >
                  {selected.why ?? UNAVAILABLE_WHY}
                </p>
              </div>

              <div
                className={`${styles.detailBlock} ${styles.desktopOnly}`}
                data-testid="history-detail-impact"
              >
                <p className={styles.detailBlockLabel}>Impact</p>
                <p
                  className={styles.detailBlockBody}
                  data-available={selected.impact ? "true" : "false"}
                >
                  {selected.impact ?? UNAVAILABLE_IMPACT}
                </p>
              </div>

              <div
                className={`${styles.verification} ${styles.desktopOnly}`}
                data-testid="history-detail-verification"
                data-available={selected.verification ? "true" : "false"}
              >
                <p className={styles.verificationTitle}>
                  <span className={styles.verificationDot} aria-hidden />
                  Éléments liés
                </p>
                <p className={styles.verificationBody}>
                  {selected.verification ?? UNAVAILABLE_VERIFICATION}
                </p>
                {selected.linked.length > 0 ? (
                  <p className={styles.verificationLink}>
                    {selected.linked.length} élément
                    {selected.linked.length === 1 ? "" : "s"} lié
                    {selected.linked.length === 1 ? "" : "s"} →
                  </p>
                ) : null}
              </div>

              <div
                className={`${styles.detailBlock} ${styles.desktopOnly}`}
                data-testid="history-detail-sources"
              >
                <p className={styles.detailBlockLabel}>Éléments liés</p>
                <ul className={styles.linkedList}>
                  <li
                    className={styles.linkedItem}
                    data-source-id={selected.sourceId}
                  >
                    <span className={styles.linkedKind}>
                      {selected.kindLabel}
                    </span>
                    <span className={styles.linkedLabel}>
                      {result.project.name}
                    </span>
                  </li>
                  {selected.linked.map((link) => (
                    <li
                      key={`${link.kind}:${link.id}`}
                      className={styles.linkedItem}
                      data-source-id={link.id}
                    >
                      <span className={styles.linkedKind}>{link.kind}</span>
                      <span className={styles.linkedLabel}>{link.label}</span>
                    </li>
                  ))}
                </ul>
                {selected.linked.length === 0 ? (
                  <p className={styles.sourceMeta}>
                    Aucun élément lié supplémentaire n&apos;est rattaché à cet
                    événement.
                  </p>
                ) : null}
              </div>

              <div
                className={`${styles.detailBlock} ${styles.desktopOnly}`}
                data-testid="history-detail-ask-nora"
              >
                <p className={styles.detailBlockLabel}>Besoin de contexte ?</p>
                {onAskNora ? (
                  <>
                    <p className={styles.detailBlockBody}>
                      Demandez à Nora d&apos;expliquer ce changement, de comparer
                      deux moments ou de retrouver ce qui a conduit à cette
                      décision.
                    </p>
                    <form
                      className={styles.askRow}
                      onSubmit={(e) => {
                        e.preventDefault();
                        submitAskNora();
                      }}
                    >
                      <label className={styles.srOnly} htmlFor="history-ask-nora">
                        Demander à Nora à propos de cet événement
                      </label>
                      <input
                        id="history-ask-nora"
                        className={styles.askInput}
                        data-testid="history-ask-nora-input"
                        placeholder="Demander à Nora…"
                        value={askDraft}
                        onChange={(e) => setAskDraft(e.target.value)}
                        autoComplete="off"
                      />
                      <button
                        type="submit"
                        className={styles.askSubmit}
                        data-testid="history-ask-nora-submit"
                        aria-label="Préparer la question pour Nora"
                        title="Prépare un brouillon dans la conversation — rien n'est envoyé"
                      >
                        ↑
                      </button>
                    </form>
                  </>
                ) : (
                  <p className={styles.detailBlockBody} data-available="false">
                    La reprise dans la conversation n&apos;est pas disponible
                    depuis cette vue.
                  </p>
                )}
              </div>
            </div>
          ) : (
            <p className={styles.empty}>Sélectionnez un événement.</p>
          )}
        </aside>
      </div>
    </section>
  );
}
