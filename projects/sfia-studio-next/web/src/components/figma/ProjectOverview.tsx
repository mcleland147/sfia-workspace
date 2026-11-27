"use client";

import Link from "next/link";
import type { PilotageProjection } from "@/domains/pilotage/types";
import type { InitialQualificationProjection } from "@/domains/pilotage/initial-qualification-types";
import {
  CYCLE_OBJECTIVE_PENDING_LABEL,
  displayableCycleObjective,
} from "@/domains/pilotage/cycle-objective-display";

type ActivityBundle = {
  openSubjects: { count: number; examples: Array<{ id: string; title: string }> };
  applicableDecisions: { count: number; examples: Array<{ id: string; statement: string }> };
  documentsInProgress: { count: number; examples: Array<{ id: string; title: string }> };
  openPointsCount: number;
};

const CYCLE_LABELS: Record<string, string> = {
  CADRAGE: "Cadrage",
  CONCEPTION_FONCTIONNELLE: "Conception fonctionnelle",
  UX_UI: "Conception UX",
};

function cycleLabel(type: string): string {
  return CYCLE_LABELS[type] ?? type.replace(/_/g, " ");
}

/** Next envisaged cycle label from retained/proposed forecast — never illustrative Figma copy. */
function nextEnvisagedFromTrajectory(
  pilotage: PilotageProjection | null,
  iq: InitialQualificationProjection | null,
): string | null {
  const cycle = pilotage?.cycle;
  if (!cycle) return null;
  const forecast =
    pilotage?.trajectory.retained?.forecastSteps ??
    pilotage?.trajectory.proposed?.forecastSteps ??
    iq?.forecastSteps ??
    null;
  if (!forecast?.length) return null;
  const matchIdx = forecast.findIndex((s) => s.cycleType === cycle.cycleType);
  const next =
    matchIdx >= 0
      ? forecast.slice(matchIdx + 1).find((s) => s.cycleType !== cycle.cycleType) ??
        forecast[matchIdx + 1]
      : forecast.find((s) => s.cycleType !== cycle.cycleType);
  if (!next) return null;
  return cycleLabel(next.cycleType);
}

export function ProjectOverview(props: {
  projectId: string;
  projectName: string;
  preparationId: string | null;
  description?: string | null;
  knowledge: {
    subjects: Array<{ id: string; title: string; status: string }>;
    openPoints: Array<{ id: string; statement: string; status: string }>;
  } | null;
  pilotage: PilotageProjection | null;
  initialQualification: InitialQualificationProjection | null;
  activity: ActivityBundle | null;
  onOpenTravail: () => void;
  onOpenTrajectoire: () => void;
}) {
  const cycle = props.pilotage?.cycle;
  const activity = props.activity;
  // Prefer a durable project description; never invent illustrative copy.
  // Proposed orientation is a trajectory artifact — only use as fallback when no description.
  const description = props.description?.trim() || null;
  const cycleObjective = displayableCycleObjective(cycle?.objective);
  const nextEnvisaged = nextEnvisagedFromTrajectory(
    props.pilotage,
    props.initialQualification,
  );

  return (
    <div className="project-overview" data-testid="project-overview">
      <header className="e07-surface-hero" data-testid="project-overview-identity">
        <p className="fig-kicker text-[#7477ed]">ESPACE PROJET / VUE D&apos;ENSEMBLE</p>
        <h2 className="e07-surface-hero-title" data-testid="project-overview-name">
          {props.projectName}
        </h2>
        {description ? (
          <p className="e07-surface-hero-sub max-w-5xl">{description}</p>
        ) : (
          <p className="e07-surface-hero-sub max-w-5xl">
            Identité, cycle et activité du projet.
          </p>
        )}
      </header>

      <div className="e07-section-rule" aria-hidden data-testid="project-overview-hero-sep" />

      <section
        className="fig-panel relative flex flex-col"
        data-testid="project-overview-cycle-card"
        style={{
          borderColor: "#2b3850",
          height: 222,
          minHeight: 222,
          maxHeight: 222,
          padding: "22px 28px",
          width: "100%",
          maxWidth: 1358,
          overflow: "hidden",
        }}
      >
        {cycle ? (
          <>
            <div className="flex items-start justify-between gap-3">
              <p className="fig-kicker text-[#7477ed]">CYCLE EN COURS</p>
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
                style={{ background: "#17382f", color: "#6cdbba" }}
                data-testid="project-overview-cycle-badge"
              >
                <span aria-hidden>●</span> Actif
              </span>
            </div>
            <h3 className="mt-3 text-[28px] font-semibold leading-tight text-[#f3f5ff]">
              {cycleLabel(cycle.cycleType)}
            </h3>
            <p
              className="mt-3 text-sm leading-relaxed text-[#a3b0c7]"
              data-testid="project-overview-cycle-objective"
            >
              {cycleObjective ?? CYCLE_OBJECTIVE_PENDING_LABEL}
            </p>
            <div className="my-5 h-px shrink-0 bg-[#2b3850]" data-testid="project-overview-state-sep" />
            <div className="mt-auto flex items-center justify-between gap-4">
              <p
                className="text-[13px] leading-relaxed text-[#a3b0c7]"
                data-testid="project-overview-next-envisaged"
              >
                {nextEnvisaged
                  ? `Suite envisagée : ${nextEnvisaged}`
                  : "Suite envisagée : non encore formulée dans la trajectoire"}
              </p>
              <button
                type="button"
                className="shrink-0 text-sm font-semibold text-[#7477ed] underline-offset-2 hover:underline"
                onClick={props.onOpenTrajectoire}
                data-testid="project-overview-see-trajectory"
              >
                Voir la trajectoire ↗
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-start justify-between gap-3">
              <p className="fig-kicker text-[#7477ed]">ÉTAT DU PROJET</p>
              <span
                className="text-xs font-semibold text-[#a3b0c7]"
                data-testid="project-overview-no-cycle-badge"
              >
                ○ Sans cycle actif
              </span>
            </div>
            <h3
              className="mt-3 text-[28px] font-semibold leading-tight text-[#f3f5ff]"
              data-testid="project-overview-no-cycle"
            >
              Aucun cycle en cours
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#a3b0c7]">
              Le projet reste accessible : ses sujets, décisions et documents peuvent être consultés
              et poursuivis sans cycle actif.
            </p>
            <div className="my-5 h-px shrink-0 bg-[#2b3850]" data-testid="project-overview-state-sep" />
            <p className="text-sm leading-relaxed text-[#a3b0c7]">
              La trajectoire pourra être précisée avec Nora, sans ouverture automatique.
            </p>
            <div className="mt-auto flex justify-end pt-4">
              <button
                type="button"
                className="text-sm font-semibold text-[#7477ed] underline-offset-2 hover:underline"
                onClick={props.onOpenTrajectoire}
              >
                Voir la trajectoire ↗
              </button>
            </div>
          </>
        )}
      </section>

      {/* Page 10: cycle ends ~511 → activity title 532 (+21) → cards 581 (+49) */}
      <section data-testid="project-overview-activity" style={{ marginTop: 21 }}>
        <div className="flex flex-wrap items-end justify-between gap-2" style={{ minHeight: 32 }}>
          <h3 className="text-[22px] font-semibold leading-8 text-[#f3f5ff]">Activité du projet</h3>
          <p className="text-xs text-[#7787a4]">Vue synthétique des espaces du projet</p>
        </div>
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(3, minmax(0, 438px))",
            gap: 22,
            marginTop: 17 /* 532+32+17=581 */,
          }}
          data-testid="project-activity-grid"
        >
          <ActivityCard
            testId="project-activity-subjects"
            title="Sujets ouverts"
            source="Journal"
            count={activity?.openSubjects.count ?? 0}
            empty="Aucun sujet actif capitalisé."
            examples={activity?.openSubjects.examples.map((e) => e.title) ?? []}
            href={`/projects/${props.projectId}?surface=journal`}
          />
          <ActivityCard
            testId="project-activity-decisions"
            title="Décisions applicables"
            source="Gouvernance"
            count={activity?.applicableDecisions.count ?? 0}
            empty="Aucune décision applicable."
            examples={activity?.applicableDecisions.examples.map((e) => e.statement) ?? []}
            href={`/projects/${props.projectId}?surface=journal`}
          />
          <ActivityCard
            testId="project-activity-documents"
            title="Documents du projet"
            source="Bibliothèque"
            count={activity?.documentsInProgress.count ?? 0}
            empty="Aucun document en cours de rédaction."
            examples={activity?.documentsInProgress.examples.map((e) => e.title) ?? []}
            href={`/projects/${props.projectId}?surface=document`}
          />
        </div>
      </section>
    </div>
  );
}

function ActivityCard(props: {
  testId: string;
  title: string;
  source: string;
  count: number;
  empty: string;
  examples: string[];
  href: string;
}) {
  const shown = props.examples.slice(0, 2);
  const extra = Math.max(0, props.count - shown.length);
  return (
    <section
      className="fig-panel flex flex-col"
      data-testid={props.testId}
      style={{
        width: 438,
        minHeight: 278,
        background: "#151D2C",
        borderColor: "#2B3850",
        padding: "24px 28px",
      }}
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-[32px] font-semibold leading-none text-[#f3f5ff]">{props.count}</p>
          <h4 className="mt-2 text-lg font-semibold text-[#f3f5ff]">{props.title}</h4>
        </div>
        <span className="text-xs font-medium uppercase tracking-wide text-[#a3b0c7]">
          {props.source}
        </span>
      </div>
      <div className="my-4 h-px shrink-0 bg-[#2b3850]" data-testid={`${props.testId}-sep-top`} />
      <div className="min-h-[72px] flex-1">
        {props.count === 0 ? (
          <p className="text-sm leading-relaxed text-[#a3b0c7]">{props.empty}</p>
        ) : (
          <ul className="space-y-1.5 text-sm text-[#f3f5ff]">
            {shown.map((ex, i) => (
              <li key={`${props.testId}-${i}`} className="line-clamp-2 font-medium">
                {ex}
              </li>
            ))}
            {extra > 0 ? (
              <li className="text-[#a3b0c7]">
                + {extra} autre{extra > 1 ? "s" : ""}
              </li>
            ) : null}
          </ul>
        )}
      </div>
      <div className="my-4 h-px shrink-0 bg-[#2b3850]" data-testid={`${props.testId}-sep-bottom`} />
      <Link
        href={props.href}
        className="inline-block text-sm font-semibold text-[#7477ed] hover:underline"
      >
        Consulter ↗
      </Link>
    </section>
  );
}
