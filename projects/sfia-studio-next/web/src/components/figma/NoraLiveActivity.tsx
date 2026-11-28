"use client";

import { useEffect, useState } from "react";
import {
  buildActivityGroups,
  resolveActivityDisplayHeadline,
  type ActivityLabelInput,
} from "@/domains/conversation/activity-labels";

export type NoraLiveActivityEvent = ActivityLabelInput & {
  sequence: number;
  nature: string;
  status: string;
  summary: string;
  phase: string;
};

const DETAILS_PAGE = 40;

/**
 * Figma 12.01 / 12.10 — hierarchical LIVE activity (AT-01).
 * Level 1: mission headline · Level 2: adaptive groups · Level 3: foldable details.
 * Functional projection only — no SDK dumps, no invented percentages.
 */
export function NoraLiveActivity(props: {
  events: NoraLiveActivityEvent[];
  headline?: string;
  /** When false, card is historical / idle — no « En cours » badge or pulse (RB-01/02). */
  active?: boolean;
  /** Figma frame id for evidence. */
  figmaFrame?: "12.01" | "12.10" | "12.01-12.10";
  className?: string;
}) {
  const events = props.events ?? [];
  const active = props.active !== false;
  const groups = buildActivityGroups(events);
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const [visible, setVisible] = useState<Record<string, number>>({});

  // Preserve expand / pagination state across event refreshes (AT-01).
  useEffect(() => {
    setOpen((prev) => {
      const next = { ...prev };
      for (const g of groups) {
        if (!(g.key in next)) next[g.key] = false;
      }
      return next;
    });
    setVisible((prev) => {
      const next = { ...prev };
      for (const g of groups) {
        if (!(g.key in next)) next[g.key] = DETAILS_PAGE;
      }
      return next;
    });
  }, [groups.map((g) => g.key).join("|")]);

  if (!active) {
    const richHistory =
      groups.filter((g) => g.state === "done" || g.state === "failed" || g.state === "limited")
        .length >= 1;
    if (!richHistory && groups.length < 2) return null;
  }

  const headline = resolveActivityDisplayHeadline({
    active,
    propsHeadline: props.headline,
    events,
    groupTitles: groups.map((g) => g.title),
  });
  const last = events.length ? events[events.length - 1]! : null;
  const anyFailed = groups.some((g) => g.state === "failed");
  const anyLimited = groups.some((g) => g.state === "limited");
  const anyCurrent = groups.some((g) => g.state === "current" || g.state === "pending");
  const badge = !active
    ? anyFailed
      ? "Échec"
      : anyLimited
        ? "Partiel"
        : anyCurrent
          ? "Suspendu"
          : last?.status === "FAILED" || last?.nature === "UNCERTAIN"
            ? "Limite"
            : "Terminé"
    : last?.status === "FAILED" || last?.nature === "UNCERTAIN"
      ? "Limite"
      : last?.status === "LIMITED"
        ? "Partiel"
        : "En cours";

  // IT-01 — never echo a group description that only repeats the title / orientation blurbs.
  const leadCandidate =
    groups.find((g) => g.state === "current")?.description ||
    groups[0]?.description ||
    null;
  const lead =
    leadCandidate &&
    leadCandidate.trim() &&
    (!headline || leadCandidate.trim() !== headline.trim())
      ? leadCandidate
      : null;

  return (
    <div
      className={`fig-nora-live-activity ${!active ? "fig-nora-live-activity-idle" : ""} ${props.className ?? ""}`.trim()}
      role="status"
      aria-live={active ? "polite" : "off"}
      data-testid="nora-live-activity"
      data-active={active ? "1" : "0"}
      data-figma-frame={props.figmaFrame ?? "12.01-12.10"}
    >
      <div className="fig-nora-live-activity-head">
        <p className="fig-nora-live-activity-kicker">
          {active ? "ACTIVITÉ NORA" : "HISTORIQUE D’ACTIVITÉ"}
        </p>
        <span
          className="fig-nora-live-activity-badge"
          data-testid="nora-live-activity-badge"
          data-badge={badge}
        >
          {active ? <span className="fig-nora-live-activity-pulse" aria-hidden /> : null}
          {badge}
        </span>
      </div>
      {headline ? (
        <p className="fig-nora-live-activity-headline" data-testid="nora-live-activity-headline">
          {headline}
        </p>
      ) : null}
      {lead ? <p className="fig-nora-live-activity-lead">{lead}</p> : null}
      {groups.length > 0 ? (
        <ul className="fig-nora-live-activity-groups" data-testid="nora-live-activity-groups">
          {groups.map((g) => {
            const expanded = open[g.key] === true;
            // Idle must not invent success: only ✓ when the group itself is done.
            const mark =
              g.state === "failed"
                ? "✕"
                : g.state === "limited"
                  ? "!"
                  : g.state === "done"
                    ? "✓"
                    : g.state === "current"
                      ? "◌"
                      : "○";
            const shown = visible[g.key] ?? DETAILS_PAGE;
            const page = g.details.slice(0, shown);
            const remaining = Math.max(0, g.details.length - shown);
            return (
              <li
                key={g.key}
                className={`fig-nora-live-activity-group fig-nora-live-activity-group-${g.state}`}
                data-state={g.state}
                data-testid={`nora-live-activity-group-${g.key}`}
              >
                {g.details.length > 0 ? (
                  <button
                    type="button"
                    className="fig-nora-live-activity-group-toggle"
                    aria-expanded={expanded}
                    data-testid={`nora-live-activity-toggle-${g.key}`}
                    onClick={() => setOpen((prev) => ({ ...prev, [g.key]: !expanded }))}
                  >
                    <span className="fig-nora-live-activity-mark" aria-hidden>
                      {mark}
                    </span>
                    <span className="fig-nora-live-activity-group-main">
                      <span className="fig-nora-live-activity-group-title">{g.title}</span>
                      {g.resultSummary ? (
                        <span className="fig-nora-live-activity-group-result">
                          {g.resultSummary}
                        </span>
                      ) : g.description ? (
                        <span className="fig-nora-live-activity-group-result">
                          {g.description}
                        </span>
                      ) : null}
                    </span>
                    <span className="fig-nora-live-activity-chevron" aria-hidden>
                      {expanded ? "▾" : "▸"}
                    </span>
                  </button>
                ) : (
                  <div
                    className="fig-nora-live-activity-group-toggle"
                    data-testid={`nora-live-activity-toggle-${g.key}`}
                    data-static="1"
                  >
                    <span className="fig-nora-live-activity-mark" aria-hidden>
                      {mark}
                    </span>
                    <span className="fig-nora-live-activity-group-main">
                      <span className="fig-nora-live-activity-group-title">{g.title}</span>
                      {g.resultSummary ? (
                        <span className="fig-nora-live-activity-group-result">
                          {g.resultSummary}
                        </span>
                      ) : null}
                    </span>
                  </div>
                )}
                {expanded && g.details.length > 0 ? (
                  <ul
                    className="fig-nora-live-activity-details"
                    data-testid={`nora-live-activity-details-${g.key}`}
                  >
                    {page.map((d) => (
                      <li key={d.key} data-coverage={d.coverage} data-kind={d.kind}>
                        <span className="fig-nora-live-activity-source-cov">
                          {d.coverage === "DISCOVERED"
                            ? "Identifiée"
                            : d.coverage === "COMPARE"
                              ? "Comparaison"
                            : d.coverage === "CONSULTED" ||
                                d.coverage === "VERIFIED" ||
                                d.coverage === "COMPLETE" ||
                                d.coverage === "DONE"
                              ? "Consultée"
                              : d.coverage === "PARTIAL" || d.coverage === "LIMITED"
                                ? "Partielle"
                                : d.coverage === "DENIED" || d.coverage === "FAILED"
                                  ? "Inaccessible"
                                  : d.coverage === "CURRENT"
                                    ? "En cours"
                                    : d.coverage}
                        </span>
                        <span>{d.title}</span>
                      </li>
                    ))}
                    {remaining > 0 ? (
                      <li data-testid="nora-live-activity-details-more">
                        <button
                          type="button"
                          className="fig-nora-live-activity-more"
                          data-testid={`nora-live-activity-more-${g.key}`}
                          onClick={() =>
                            setVisible((prev) => ({
                              ...prev,
                              [g.key]: (prev[g.key] ?? DETAILS_PAGE) + DETAILS_PAGE,
                            }))
                          }
                        >
                          Afficher la suite ({remaining} restantes)
                        </button>
                      </li>
                    ) : null}
                  </ul>
                ) : null}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
