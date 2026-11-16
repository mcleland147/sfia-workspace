"use client";

import {
  PROJECT_SURFACE_LABELS,
  type StudioSurface,
} from "@/components/shell/studio-rail";

type Surface = StudioSurface;

const HERO: Record<
  Surface,
  { kicker: string; title: string; sub: string }
> = {
  travail: {
    kicker: "Espace projet  /  Travail",
    title: "Reprendre le fil du projet",
    sub: "La préparation et les échanges avec Nora restent dans le contexte de ce projet.",
  },
  projet: {
    kicker: "Espace projet  /  Projet",
    title: "Vue d'ensemble du projet",
    sub: "Identité, contexte et accès — consultation sans nouvelle autorité.",
  },
  pilotage: {
    kicker: "Espace projet  /  Trajectoire",
    title: "Pilotage · cycle et décisions",
    sub: "Cycle, méthode, CKI et décisions humaines — affichage D5/D6 existant.",
  },
  journal: {
    kicker: "Espace projet  /  Journal",
    title: "Sujets et acquis",
    sub: "Sujets, acquis et points ouverts — présentation sans nouvelle autorité.",
  },
  document: {
    kicker: "Espace projet  /  Documents Nora",
    title: "Bibliothèque",
    sub: "Bibliothèque, inspection et révision sous autorité D4.",
  },
  git: {
    kicker: "Espace projet  /  Sources Git",
    title: "Intégration Git",
    sub: "Sources et liens Git du projet — capacités réellement disponibles.",
  },
  publication: {
    kicker: "Espace projet  /  Résultats et preuves",
    title: "Publication Git",
    sub: "Publication et preuves Git — capacités réellement disponibles.",
  },
};

export function ProjectChrome(props: {
  projectId: string;
  projectName: string | null;
  surface: Surface;
  /** Optional status line — never raw technical IDs in the nominal path. */
  statusHint?: string;
  /** Observable project bootstrap: loading until load()+surface sync finish. */
  loadState?: "loading" | "ready";
  children: React.ReactNode;
}) {
  const loadState = props.loadState ?? "ready";
  const hero = HERO[props.surface];
  const surfaceLabel = PROJECT_SURFACE_LABELS[props.surface];
  const displayName = props.projectName?.trim() || "Projet";
  const isTravail = props.surface === "travail";

  const continuityBadge =
    isTravail && props.statusHint && !/^chargement/i.test(props.statusHint) ? (
      <span className="fig-tag fig-tag-ok" data-testid="project-status-hint">
        {/reprise|conservé|durable/i.test(props.statusHint)
          ? "Contexte conservé"
          : props.statusHint}
      </span>
    ) : null;

  const intro = (
    <header className="project-space-hero fig-travail-intro" data-testid="travail-intro">
      <p className="fig-kicker project-space-kicker">{hero.kicker}</p>
      <div className="project-space-hero-row">
        <h1 className="fig-hero-title" data-testid="project-surface-title">
          {hero.title}
        </h1>
        {continuityBadge}
      </div>
      <p className="fig-hero-sub">{hero.sub}</p>
    </header>
  );

  return (
    <div
      className={`fig-page project-space-page${isTravail ? " project-space-page--travail" : ""}`}
      data-project-surface={props.surface}
      data-testid="project-load-state"
      data-project-load-state={loadState}
      data-project-id={props.projectId}
      data-project-name={props.projectName ?? ""}
    >
      <div
        className={`project-space-header${isTravail ? " project-space-header--breadcrumb-only" : ""}`}
        data-testid="project-space-header"
      >
        <div className="fig-breadcrumb project-space-breadcrumb">
          <span data-testid="project-breadcrumb">
            SFIA Studio&nbsp;&nbsp;/&nbsp;&nbsp;Projet&nbsp;&nbsp;/&nbsp;&nbsp;
            <span className="text-[var(--fg)]">{displayName}</span>
            &nbsp;&nbsp;/&nbsp;&nbsp;{surfaceLabel}
          </span>
          <span className="project-space-badge" data-testid="project-espace-badge">
            ESPACE PROJET
          </span>
        </div>

        {!isTravail ? (
          <header className="project-space-hero space-y-1">
            <p className="fig-kicker project-space-kicker">{hero.kicker}</p>
            <div className="project-space-hero-row">
              <h1 className="fig-hero-title" data-testid="project-surface-title">
                {hero.title}
              </h1>
            </div>
            <p className="fig-hero-sub">{hero.sub}</p>
            {props.statusHint ? (
              <p className="text-xs muted" data-testid="project-status-hint">
                {props.statusHint}
              </p>
            ) : null}
          </header>
        ) : null}
      </div>

      <div className="sr-only" aria-hidden>
        {(
          [
            "travail",
            "projet",
            "pilotage",
            "journal",
            "document",
            "git",
            "publication",
          ] as const
        ).map((id) => (
          <span
            key={id}
            data-testid={`surface-${id}`}
            data-surface-active={props.surface === id ? "1" : "0"}
          />
        ))}
      </div>

      {isTravail ? (
        <div className="project-travail-stage" data-testid="project-travail-stage">
          {intro}
          <div
            className="fig-travail-intro-rule"
            data-testid="travail-intro-rule"
            aria-hidden
          />
          {props.children}
        </div>
      ) : (
        props.children
      )}
    </div>
  );
}
