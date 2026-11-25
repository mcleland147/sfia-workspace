"use client";

import {
  buildActivitySteps,
  projectActivityLabel,
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
 * Figma 12.01 / 12.10 — shared LIVE activity card (sas + Travail).
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
  const steps = buildActivitySteps(events);
  // RB-01 — simple turn: hide card when idle unless a rich multi-step history remains.
  if (!active) {
    const richHistory = steps.filter((s) => s.state === "done" || s.state === "failed").length >= 2;
    if (!richHistory) return null;
  }
  const last = events.length ? events[events.length - 1]! : null;
  const headline =
    props.headline ||
    (last ? projectActivityLabel(last) : active ? "Activité en cours" : "Activité");
  const badge = !active
    ? last?.status === "FAILED" || last?.nature === "UNCERTAIN"
      ? "Limite"
      : "Terminé"
    : last?.status === "FAILED" || last?.nature === "UNCERTAIN"
      ? "Limite"
      : last?.status === "LIMITED"
        ? "Partiel"
        : "En cours";

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
      {active ? (
        <p className="fig-nora-live-activity-lead">
          Les principales vérifications sont présentées au fil du travail.
        </p>
      ) : null}
      {steps.length > 0 ? (
        <ul className="fig-nora-live-activity-steps" data-testid="nora-live-activity-steps">
          {steps.map((step) => (
            <li
              key={step.key}
              data-state={!active && step.state === "current" ? "done" : step.state}
              data-nature={step.nature}
              className={`fig-nora-live-activity-step fig-nora-live-activity-step-${!active && step.state === "current" ? "done" : step.state}`}
            >
              <span className="fig-nora-live-activity-mark" aria-hidden>
                {!active || step.state === "done"
                  ? "✓"
                  : step.state === "failed"
                    ? "✕"
                    : step.state === "limited"
                      ? "!"
                      : step.state === "current"
                        ? "◌"
                        : "○"}
              </span>
              <span>{step.label}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
