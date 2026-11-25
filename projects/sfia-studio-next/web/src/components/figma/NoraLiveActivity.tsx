"use client";

import { useEffect, useState } from "react";
import {
  buildActivityGroups,
  projectMissionHeadline,
  type ActivityLabelInput,
} from "@/domains/conversation/activity-labels";

export type NoraLiveActivityEvent = ActivityLabelInput & {
  sequence: number;
  nature: string;
  status: string;
  summary: string;
  phase: string;
};

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

  // Preserve expand state across event refreshes (AT-01).
  useEffect(() => {
    setOpen((prev) => {
      const next = { ...prev };
      for (const g of groups) {
        if (!(g.key in next)) next[g.key] = false;
      }
      return next;
    });
  }, [groups.map((g) => g.key).join("|")]);

  if (!active) {
    const richHistory = groups.filter((g) => g.state === "done" || g.state === "failed").length >= 1;
    if (!richHistory && groups.length < 2) return null;
  }

  const headline =
    props.headline ||
    (events.length ? projectMissionHeadline(events) : active ? "Activité en cours" : "Activité");
  const last = events.length ? events[events.length - 1]! : null;
  const badge = !active
    ? last?.status === "FAILED" || last?.nature === "UNCERTAIN"
      ? "Limite"
      : "Terminé"
    : last?.status === "FAILED" || last?.nature === "UNCERTAIN"
      ? "Limite"
      : last?.status === "LIMITED"
        ? "Partiel"
        : "En cours";

  const lead =
    groups.find((g) => g.state === "current")?.description ||
    groups[0]?.description ||
    (active ? "Les opérations réellement engagées sont présentées au fil du travail." : null);

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
      <p className="fig-nora-live-activity-headline" data-testid="nora-live-activity-headline">
        {headline}
      </p>
      {lead ? <p className="fig-nora-live-activity-lead">{lead}</p> : null}
      {groups.length > 0 ? (
        <ul className="fig-nora-live-activity-groups" data-testid="nora-live-activity-groups">
          {groups.map((g) => {
            const expanded = open[g.key] === true;
            const mark =
              g.state === "failed"
                ? "✕"
                : g.state === "limited"
                  ? "!"
                  : !active || g.state === "done"
                    ? "✓"
                    : g.state === "current"
                      ? "◌"
                      : "○";
            return (
              <li
                key={g.key}
                className={`fig-nora-live-activity-group fig-nora-live-activity-group-${g.state}`}
                data-state={g.state}
                data-testid={`nora-live-activity-group-${g.key}`}
              >
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
                      <span className="fig-nora-live-activity-group-result">{g.resultSummary}</span>
                    ) : (
                      <span className="fig-nora-live-activity-group-result">{g.description}</span>
                    )}
                  </span>
                  <span className="fig-nora-live-activity-chevron" aria-hidden>
                    {expanded ? "▾" : "▸"}
                  </span>
                </button>
                {expanded && g.details.length > 0 ? (
                  <ul
                    className="fig-nora-live-activity-details"
                    data-testid={`nora-live-activity-details-${g.key}`}
                  >
                    {g.details.slice(0, 60).map((d) => (
                      <li key={d.key} data-coverage={d.coverage} data-kind={d.kind}>
                        <span className="fig-nora-live-activity-source-cov">
                          {d.coverage === "DISCOVERED"
                            ? "Identifiée"
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
                    {g.details.length > 60 ? (
                      <li data-testid="nora-live-activity-details-more">
                        <span className="fig-nora-live-activity-source-cov">…</span>
                        <span>{g.details.length - 60} autres opérations accessibles</span>
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
