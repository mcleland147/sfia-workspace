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
  /** Figma frame id for evidence. */
  figmaFrame?: "12.01" | "12.10" | "12.01-12.10";
  className?: string;
}) {
  const events = props.events ?? [];
  const steps = buildActivitySteps(events);
  const last = events.length ? events[events.length - 1]! : null;
  const headline =
    props.headline ||
    (last ? projectActivityLabel(last) : "Activité en cours");
  const badge =
    last?.status === "FAILED" || last?.nature === "UNCERTAIN"
      ? "Limite"
      : last?.status === "LIMITED"
        ? "Partiel"
        : "En cours";

  return (
    <div
      className={`fig-nora-live-activity ${props.className ?? ""}`.trim()}
      role="status"
      aria-live="polite"
      data-testid="nora-live-activity"
      data-figma-frame={props.figmaFrame ?? "12.01-12.10"}
    >
      <div className="fig-nora-live-activity-head">
        <p className="fig-nora-live-activity-kicker">ACTIVITÉ NORA</p>
        <span
          className="fig-nora-live-activity-badge"
          data-testid="nora-live-activity-badge"
          data-badge={badge}
        >
          <span className="fig-nora-live-activity-pulse" aria-hidden />
          {badge}
        </span>
      </div>
      <p className="fig-nora-live-activity-headline" data-testid="nora-live-activity-headline">
        {headline}
      </p>
      <p className="fig-nora-live-activity-lead">
        Les principales vérifications sont présentées au fil du travail.
      </p>
      {steps.length > 0 ? (
        <ul className="fig-nora-live-activity-steps" data-testid="nora-live-activity-steps">
          {steps.map((step) => (
            <li
              key={step.key}
              data-state={step.state}
              data-nature={step.nature}
              className={`fig-nora-live-activity-step fig-nora-live-activity-step-${step.state}`}
            >
              <span className="fig-nora-live-activity-mark" aria-hidden>
                {step.state === "done"
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
