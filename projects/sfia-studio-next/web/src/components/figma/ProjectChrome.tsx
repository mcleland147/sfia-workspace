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
    kicker: "ESPACE PROJET  /  TRAVAIL AVEC NORA",
    title: "Conversation du projet",
    sub: "Poursuis le fil avec Nora — les décisions d’ouverture et de clôture restent les tiennes.",
  },
  projet: {
    kicker: "ESPACE PROJET / VUE D'ENSEMBLE",
    title: "Vue d'ensemble",
    sub: "Identité, cycle et activité du projet.",
  },
  pilotage: {
    kicker: "ESPACE PROJET / TRAJECTOIRE",
    title: "Trajectoire du projet",
    sub: "Ce qui est terminé, ce qui est en cours et ce qui pourrait suivre.",
  },
  journal: {
    kicker: "ESPACE PROJET  /  JOURNAL",
    title: "Journal",
    sub: "La mémoire du projet, organisée par thèmes. Retrouvez l’essentiel sans remonter toute la conversation.",
  },
  document: {
    kicker: "ESPACE PROJET  /  DOCUMENTS",
    title: "Bibliothèque du projet",
    sub: "Retrouvez les documents durables du projet, leurs versions et les actions disponibles.",
  },
  git: {
    kicker: "ESPACE PROJET / DÉPÔTS GIT",
    title: "Dépôts Git",
    sub: "Parcourir un dépôt autorisé puis lire le fichier directement dans l’espace projet.",
  },
  execution: {
    kicker: "ESPACE PROJET  /  EXÉCUTION",
    title: "Exécution",
    sub: "Retrouver contrats, tentatives et réalisations ; une intervention en cours conserve son suivi LIVE.",
  },
  publication: {
    kicker: "ESPACE PROJET  /  RÉSULTATS & PREUVES",
    title: "Résultats & preuves",
    sub: "Dossier de réalisation : fichiers, tests, Git, captures, manifeste et avis Nora, sans validation automatique.",
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
  /** Ensemble 05 — Travail layout: normal | split (viewer) | enlarged viewer. */
  travailLayout?: "normal" | "split" | "enlarged";
  /** Documents sub-views (08.02–08.06) — overrides default Bibliothèque hero. */
  documentHero?: { kicker: string; title: string; sub: string } | null;
  /** Travail states 08.07 / 08.08 — overrides default Travail hero. */
  travailHero?: { kicker: string; title: string; sub: string } | null;
  children: React.ReactNode;
}) {
  const loadState = props.loadState ?? "ready";
  const hero =
    props.surface === "document" && props.documentHero
      ? props.documentHero
      : props.surface === "travail" && props.travailHero
        ? props.travailHero
        : HERO[props.surface];
  const surfaceLabel = PROJECT_SURFACE_LABELS[props.surface];
  const displayName = props.projectName?.trim() || "Projet";
  const isTravail = props.surface === "travail";
  /** Journal V4 — hero lives inside ProjectJournal (full vs compact 40/60). */
  const isJournal = props.surface === "journal";
  /** Ensemble 07 — Projet / Trajectoire heroes live in ProjectOverview / TrajectoryBoard. */
  const isProjetOrTrajectoire = props.surface === "projet" || props.surface === "pilotage";
  /** Ensemble 08 — Dépôts Git hero lives in GitRepositoriesSurface. */
  const isGitSurface = props.surface === "git";
  /** Exécution / Résultats page 12 — hero in stage (not duplicated in header). */
  const isMl5Realization = props.surface === "execution" || props.surface === "publication";
  const breadcrumbOnly =
    isTravail ||
    isJournal ||
    isProjetOrTrajectoire ||
    isGitSurface ||
    isMl5Realization;

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
      className={`fig-page project-space-page${isTravail ? " project-space-page--travail" : ""}${isJournal ? " project-space-page--journal" : ""}`}
      data-project-surface={props.surface}
      data-testid="project-load-state"
      data-project-load-state={loadState}
      data-project-id={props.projectId}
      data-project-name={props.projectName ?? ""}
    >
      <div
        className={`project-space-header${breadcrumbOnly ? " project-space-header--breadcrumb-only" : ""}`}
        data-testid="project-space-header"
      >
        <div className="fig-breadcrumb project-space-breadcrumb">
          <span data-testid="project-breadcrumb">
            SFIA Studio&nbsp;&nbsp;/&nbsp;&nbsp;{displayName}&nbsp;&nbsp;/&nbsp;&nbsp;
            {surfaceLabel}
          </span>
          <span className="project-space-badge" data-testid="project-espace-badge">
            ESPACE PROJET
          </span>
        </div>

        {!breadcrumbOnly ? (
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
        <div
          className="project-travail-stage"
          data-testid="project-travail-stage"
          data-travail-layout={props.travailLayout ?? "normal"}
        >
          {intro}
          <div
            className="fig-travail-intro-rule"
            data-testid="travail-intro-rule"
            aria-hidden
          />
          {props.children}
        </div>
      ) : isMl5Realization ? (
        <div className="project-ml5-realization-stage" data-testid="project-ml5-realization-stage">
          {intro}
          {props.children}
        </div>
      ) : (
        props.children
      )}
    </div>
  );
}
