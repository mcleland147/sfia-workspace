"use client";

import Link from "next/link";

type Knowledge = {
  subjects: Array<{ id: string; title: string; status: string }>;
  acquis: Array<{ id: string; kind: string; statement: string; status: string }>;
  openPoints: Array<{ id: string; statement: string; status: string }>;
};

export function ProjectOverview(props: {
  projectId: string;
  projectName: string;
  preparationId: string | null;
  knowledge: Knowledge | null;
  documentCount: number;
  messageCount: number;
  onOpenTravail: () => void;
}) {
  const openPoints =
    props.knowledge?.openPoints?.filter((o) => o.status === "OPEN") ?? [];
  const acquis =
    props.knowledge?.acquis?.filter((a) => a.status === "CURRENT") ?? [];
  const subjects = props.knowledge?.subjects ?? [];

  return (
    <div className="project-overview space-y-4" data-testid="project-overview">
      <section className="fig-panel space-y-3" data-testid="project-overview-identity">
        <h2 className="fig-panel-title">Identité</h2>
        <p className="text-base font-medium" data-testid="project-overview-name">
          {props.projectName}
        </p>
        <dl className="grid gap-2 text-sm muted sm:grid-cols-2">
          <div>
            <dt className="text-[10px] uppercase tracking-wide">Fil conversation</dt>
            <dd className="text-[var(--fg)]">{props.messageCount} message(s)</dd>
          </div>
          <div>
            <dt className="text-[10px] uppercase tracking-wide">Documents Nora</dt>
            <dd className="text-[var(--fg)]">{props.documentCount}</dd>
          </div>
          <div>
            <dt className="text-[10px] uppercase tracking-wide">Sujets capitalisés</dt>
            <dd className="text-[var(--fg)]">{subjects.length}</dd>
          </div>
          <div>
            <dt className="text-[10px] uppercase tracking-wide">Préparation liée</dt>
            <dd className="text-[var(--fg)]">
              {props.preparationId ? "Oui" : "Non renseignée"}
            </dd>
          </div>
        </dl>
      </section>

      <div className="grid gap-4 lg:grid-cols-2">
        <section className="fig-panel space-y-2" data-testid="project-overview-context">
          <h2 className="fig-panel-title">Contexte</h2>
          {subjects.length === 0 && acquis.length === 0 ? (
            <p className="text-sm muted">
              Aucun sujet ni acquis capitalisé pour l’instant.
            </p>
          ) : (
            <ul className="text-sm space-y-2">
              {subjects.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <span className="font-medium">{s.title}</span>
                </li>
              ))}
              {acquis.slice(0, 5).map((a) => (
                <li key={a.id} className="text-sm">
                  {a.statement}
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="fig-panel space-y-2" data-testid="project-overview-open">
          <h2 className="fig-panel-title">Points à préciser</h2>
          {openPoints.length === 0 ? (
            <p className="text-sm muted">Aucun point ouvert capitalisé.</p>
          ) : (
            openPoints.slice(0, 6).map((o) => (
              <p key={o.id} className="text-sm">
                {o.statement}
              </p>
            ))
          )}
        </section>
      </div>

      <section className="fig-panel space-y-2" data-testid="project-overview-access">
        <h2 className="fig-panel-title">Repères et accès</h2>
        <ul className="text-sm space-y-1.5">
          <li>
            <Link
              className="text-[var(--fig-accent-soft)] underline-offset-2 hover:underline"
              href={`/projects/${props.projectId}?surface=travail`}
              onClick={(e) => {
                e.preventDefault();
                props.onOpenTravail();
              }}
            >
              Travail avec Nora
            </Link>
            <span className="muted"> — conversation du projet</span>
          </li>
          <li>
            <Link
              className="text-[var(--fig-accent-soft)] underline-offset-2 hover:underline"
              href={`/projects/${props.projectId}?surface=journal`}
            >
              Journal
            </Link>
            <span className="muted"> — sujets et acquis</span>
          </li>
          <li>
            <Link
              className="text-[var(--fig-accent-soft)] underline-offset-2 hover:underline"
              href={`/projects/${props.projectId}?surface=document`}
            >
              Documents Nora
            </Link>
            <span className="muted"> — bibliothèque</span>
          </li>
          <li>
            <Link
              className="text-[var(--fig-accent-soft)] underline-offset-2 hover:underline"
              href={`/projects/${props.projectId}?surface=pilotage`}
            >
              Trajectoire
            </Link>
            <span className="muted"> — pilotage existant</span>
          </li>
        </ul>
        <button
          type="button"
          className="btn mt-3"
          data-testid="project-overview-open-travail"
          onClick={props.onOpenTravail}
        >
          Ouvrir Travail avec Nora
        </button>
      </section>
    </div>
  );
}
