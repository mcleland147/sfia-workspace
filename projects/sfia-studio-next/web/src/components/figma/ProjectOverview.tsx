"use client";

import Link from "next/link";
import type { PilotageProjection } from "@/domains/pilotage/types";
import type { InitialQualificationProjection } from "@/domains/pilotage/initial-qualification-types";

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

  return (
    <div className="project-overview space-y-5" data-testid="project-overview">
      <header className="space-y-2" data-testid="project-overview-identity">
        <p className="fig-kicker text-[#7477ed]">ESPACE PROJET / VUE D&apos;ENSEMBLE</p>
        <h2 className="fig-hero-title" data-testid="project-overview-name">
          {props.projectName}
        </h2>
        {description ? <p className="fig-hero-sub max-w-5xl">{description}</p> : null}
      </header>

      <section
        className="fig-panel relative space-y-3"
        data-testid="project-overview-cycle-card"
        style={{ borderColor: "#2b3850", minHeight: 222 }}
      >
        {cycle ? (
          <>
            <div className="flex items-start justify-between gap-3">
              <p className="fig-kicker text-[#7477ed]">CYCLE EN COURS</p>
              <span
                className="rounded-full px-3 py-1 text-xs font-semibold"
                style={{ background: "#17382f", color: "#6cdbba" }}
              >
                ● Actif
              </span>
            </div>
            <h3 className="text-[1.7rem] font-semibold text-[#f3f5ff] leading-tight">
              {cycleLabel(cycle.cycleType)}
            </h3>
            <p className="text-sm text-[#a3b0c7]">{cycle.objective}</p>
          </>
        ) : (
          <>
            <div className="flex items-start justify-between gap-3">
              <p className="fig-kicker text-[#7477ed]">ÉTAT DU PROJET</p>
              <span className="text-xs font-semibold text-[#a3b0c7]">○ Sans cycle actif</span>
            </div>
            <h3
              className="text-[1.7rem] font-semibold text-[#f3f5ff] leading-tight"
              data-testid="project-overview-no-cycle"
            >
              Aucun cycle en cours
            </h3>
            <p className="text-sm text-[#a3b0c7]">
              Le projet reste accessible : ses sujets, décisions et documents peuvent être consultés
              et poursuivis sans cycle actif.
            </p>
            <p className="text-sm text-[#a3b0c7]">
              La trajectoire pourra être précisée avec Nora, sans ouverture automatique.
            </p>
          </>
        )}
        <div className="flex justify-end pt-1">
          <button
            type="button"
            className="text-sm font-semibold text-[#7477ed] underline-offset-2 hover:underline"
            onClick={props.onOpenTrajectoire}
          >
            Voir la trajectoire ↗
          </button>
        </div>
      </section>

      <section className="space-y-3" data-testid="project-overview-activity">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <h3 className="text-[1.35rem] font-semibold text-[#f3f5ff]">Activité du projet</h3>
          <p className="text-xs text-[#7787a4]">Vue synthétique des espaces du projet</p>
        </div>
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: "repeat(3, minmax(0, 438px))" }}
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
            title="Documents en cours"
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
      className="fig-panel space-y-3"
      data-testid={props.testId}
      style={{ width: 438, minHeight: 278, background: "#151D2C", borderColor: "#2B3850" }}
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-[2rem] font-semibold leading-none text-[#f3f5ff]">{props.count}</p>
          <h4 className="mt-2 text-lg font-semibold text-[#f3f5ff]">{props.title}</h4>
        </div>
        <span className="text-xs text-[#a3b0c7]">{props.source}</span>
      </div>
      {props.count === 0 ? (
        <p className="text-sm text-[#a3b0c7]">{props.empty}</p>
      ) : (
        <ul className="text-sm space-y-1.5 text-[#f3f5ff]">
          {shown.map((ex, i) => (
            <li key={`${props.testId}-${i}`} className="line-clamp-2 font-medium">
              {ex}
            </li>
          ))}
          {extra > 0 ? (
            <li className="text-[#a3b0c7]">+ {extra} autre{extra > 1 ? "s" : ""}</li>
          ) : null}
        </ul>
      )}
      <Link href={props.href} className="inline-block text-sm font-semibold text-[#7477ed] hover:underline">
        Consulter ↗
      </Link>
    </section>
  );
}
