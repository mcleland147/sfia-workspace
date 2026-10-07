"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { listProjectsRuntimeAction } from "@/lib/vertical-slice-runtime/actions";
import styles from "./ProjectsPage.module.css";

type ListResult = Awaited<ReturnType<typeof listProjectsRuntimeAction>>;
type ProjectRow = Extract<ListResult, { ok: true }>["projects"][number];

type ListState =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "empty" }
  | { status: "ready"; projects: readonly ProjectRow[] };

type Badge = { label: string; tone: "neutral" | "active" | "waiting" };

const RECENT_WINDOW_MS = 14 * 24 * 60 * 60 * 1000;

function formatRelativeFr(iso: string | undefined): string | null {
  if (!iso) return null;
  const ts = Date.parse(iso);
  if (Number.isNaN(ts)) return null;
  const deltaMs = Date.now() - ts;
  const minutes = Math.floor(deltaMs / 60_000);
  if (minutes < 1) return "À l’instant";
  if (minutes < 60) return `Il y a ${minutes} min`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    const d = new Date(ts);
    const hh = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");
    return `Aujourd’hui, ${hh}h${mm}`;
  }
  const days = Math.floor(hours / 24);
  if (days === 1) return "Hier";
  if (days < 7) return `Il y a ${days} jours`;
  return `Il y a ${Math.floor(days / 7)} sem.`;
}

function badgeFor(status: string): Badge {
  switch (status) {
    case "draft":
      return { label: "Brouillon", tone: "neutral" };
    case "active":
      return { label: "Actif", tone: "active" };
    case "paused":
      return { label: "En attente", tone: "waiting" };
    case "closed":
      return { label: "Clos", tone: "neutral" };
    case "archived":
      return { label: "Archivé", tone: "neutral" };
    default:
      return { label: status, tone: "neutral" };
  }
}

function matchesQuery(project: ProjectRow, query: string): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  const hay = [
    project.title,
    project.name,
    project.objective,
    project.context,
    project.status,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  return hay.includes(q);
}

/** Recent activity only — not a next-action / « À reprendre » claim. */
function isRecentlyUpdated(project: ProjectRow): boolean {
  if (project.status === "closed" || project.status === "archived") return false;
  if (!project.updatedAt) return false;
  const ts = Date.parse(project.updatedAt);
  if (Number.isNaN(ts)) return false;
  return Date.now() - ts <= RECENT_WINDOW_MS;
}

function projectDescription(project: ProjectRow): string | null {
  return project.objective?.trim() || project.context?.trim() || null;
}

function ProjectRowView({ project }: { project: ProjectRow }) {
  const badge = badgeFor(project.status);
  const href = `/studio/projects/${encodeURIComponent(project.projectId)}`;
  const activity = formatRelativeFr(project.updatedAt);
  const description = projectDescription(project);
  return (
    <li className={styles.row} data-testid="studio-projects-card">
      <div className={styles.rowProject}>
        <Link href={href} className={styles.rowTitle} data-testid="studio-projects-open">
          {project.title}
        </Link>
        {description ? (
          <p className={styles.rowDescription}>{description}</p>
        ) : null}
      </div>
      <p className={styles.rowCurrent} data-testid="studio-projects-current">
        {description ?? "—"}
      </p>
      <span className={styles.badge} data-tone={badge.tone}>
        {badge.label}
      </span>
      <p className={styles.rowMeta} data-testid="studio-projects-activity">
        {activity ?? "—"}
      </p>
    </li>
  );
}

/** F1 — Projects entry point. P3 63:39 geometry; S06 honest labels. */
export function ProjectsPage() {
  const [state, setState] = useState<ListState>({ status: "loading" });
  const [query, setQuery] = useState("");

  useEffect(() => {
    let cancelled = false;
    void listProjectsRuntimeAction().then((result) => {
      if (cancelled) return;
      if (!result.ok) {
        setState({
          status: "error",
          message:
            result.error.message ||
            "Impossible de charger vos projets pour le moment.",
        });
        return;
      }
      if (result.projects.length === 0) {
        setState({ status: "empty" });
        return;
      }
      setState({ status: "ready", projects: result.projects });
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const filtered = useMemo(() => {
    if (state.status !== "ready") return [];
    return state.projects.filter((p) => matchesQuery(p, query));
  }, [state, query]);

  const recentProjects = useMemo(() => {
    if (state.status !== "ready") return [];
    return [...state.projects]
      .filter(isRecentlyUpdated)
      .sort((a, b) => {
        const ta = Date.parse(a.updatedAt ?? "") || 0;
        const tb = Date.parse(b.updatedAt ?? "") || 0;
        return tb - ta;
      })
      .slice(0, 4);
  }, [state]);

  const count =
    state.status === "ready"
      ? state.projects.length
      : state.status === "empty"
        ? 0
        : null;

  return (
    <div className={styles.page} data-testid="studio-projects-home">
      <div className={styles.pageChrome} data-testid="studio-projects-chrome">
        <div className={styles.chromeTrail}>
          <span className={styles.chromeCurrent}>Projets</span>
        </div>
        <span className={styles.freshChip} data-testid="studio-projects-fresh">
          À jour
        </span>
      </div>

      <div className={styles.content}>
        <header className={styles.hero}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>Projets</h1>
            <p className={styles.heroSubtitle}>
              {count === null
                ? "Ouvrir un projet ou en créer un nouveau."
                : count === 0
                  ? "Aucun projet pour le moment."
                  : "Reprends un projet récent, ou démarre-en un nouveau avec Nora."}
            </p>
          </div>
          {state.status !== "empty" ? (
            <div className={styles.heroActions}>
              <Link
                href="/studio/projects/new"
                className={styles.quietCta}
                data-testid="studio-projects-ask-nora"
              >
                Demander à Nora
              </Link>
              <Link
                href="/studio/projects/new"
                className={styles.heroCta}
                data-testid="studio-projects-create"
              >
                + Nouveau projet
              </Link>
            </div>
          ) : null}
        </header>

        {state.status === "ready" ? (
          <section
            className={styles.orientation}
            data-testid="studio-projects-orientation"
            aria-label="Démarrer un nouveau projet avec Nora"
          >
            <span className={styles.orientationMark} aria-hidden>
              N
            </span>
            <div className={styles.orientationText}>
              <h2 className={styles.orientationTitle}>
                Démarrer un nouveau projet avec Nora
              </h2>
              <p className={styles.orientationBody}>
                Nora clarifie l&apos;intention et le nom avant toute création
                durable. Ce bloc n&apos;oriente pas entre vos projets existants.
              </p>
            </div>
            <Link
              href="/studio/projects/new"
              className={styles.orientationCta}
              data-testid="studio-projects-start-new"
            >
              Commencer
            </Link>
          </section>
        ) : null}

        {state.status === "loading" ? (
          <p className={styles.hint} data-testid="studio-projects-loading">
            Chargement en cours…
          </p>
        ) : null}

        {state.status === "error" ? (
          <div
            className={styles.error}
            role="alert"
            data-testid="studio-projects-error"
          >
            <p className={styles.errorTitle}>{state.message}</p>
            <p className={styles.hint}>
              Réessayez dans un instant. Aucune donnée n&apos;est inventée.
            </p>
          </div>
        ) : null}

        {state.status === "empty" ? (
          <div className={styles.empty} data-testid="studio-projects-empty">
            <p className={styles.emptyTitle}>Aucun projet pour commencer</p>
            <p className={styles.emptyBody}>
              Créez votre premier projet. Nora demandera l&apos;intention puis le
              nom avant toute matérialisation durable.
            </p>
            <Link
              href="/studio/projects/new"
              className={styles.emptyCta}
              data-testid="studio-projects-create"
            >
              + Nouveau projet
            </Link>
          </div>
        ) : null}

        {state.status === "ready" && recentProjects.length > 0 ? (
          <section
            className={styles.section}
            data-testid="studio-projects-recent"
            aria-labelledby="projects-recent-heading"
          >
            <div className={styles.sectionHead}>
              <h2 id="projects-recent-heading" className={styles.sectionTitle}>
                Projets récents
              </h2>
              <p className={styles.sectionHint}>
                Dernière activité connue — pas une prochaine action.
              </p>
            </div>
            <ul className={styles.recentGrid}>
              {recentProjects.map((project) => {
                const description = projectDescription(project);
                const badge = badgeFor(project.status);
                const href = `/studio/projects/${encodeURIComponent(project.projectId)}`;
                return (
                  <li
                    key={`recent-${project.projectId}`}
                    className={styles.recentCard}
                  >
                    <div className={styles.recentTop}>
                      <Link href={href} className={styles.recentTitle}>
                        {project.title}
                      </Link>
                      <span className={styles.badge} data-tone={badge.tone}>
                        {badge.label}
                      </span>
                    </div>
                    {description ? (
                      <p className={styles.recentDesc}>{description}</p>
                    ) : null}
                    <div className={styles.focusBox}>
                      <p className={styles.focusLabel}>Dernière activité</p>
                      <p
                        className={styles.focusBody}
                        data-testid="studio-projects-activity"
                      >
                        {formatRelativeFr(project.updatedAt) ??
                          "Activité inconnue"}
                      </p>
                    </div>
                    <Link href={href} className={styles.recentOpen}>
                      Ouvrir →
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        ) : null}

        {state.status === "ready" ? (
          <section
            className={styles.tableSection}
            data-testid="studio-projects-all"
            aria-labelledby="projects-all-heading"
          >
            <div className={styles.tableHead}>
              <div>
                <h2 id="projects-all-heading" className={styles.sectionTitle}>
                  Tous les projets
                </h2>
                <p className={styles.sectionHint}>
                  {count} projet{count === 1 ? "" : "s"}
                </p>
              </div>
              <div className={styles.searchWrap}>
                <label className={styles.srOnly} htmlFor="projects-local-search">
                  Rechercher dans vos projets
                </label>
                <input
                  id="projects-local-search"
                  className={styles.search}
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Rechercher un projet…"
                  data-testid="studio-projects-search"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className={styles.tableHeaderRow} aria-hidden="true">
              <span>Projet</span>
              <span>En cours</span>
              <span>État</span>
              <span>Activité</span>
            </div>
            {filtered.length === 0 ? (
              <p
                className={styles.hint}
                data-testid="studio-projects-search-empty"
              >
                Aucun projet ne correspond à « {query.trim()} ».
              </p>
            ) : (
              <ul className={styles.rowList} data-testid="studio-projects-list">
                {filtered.map((project) => (
                  <ProjectRowView key={project.projectId} project={project} />
                ))}
              </ul>
            )}
          </section>
        ) : null}
      </div>
    </div>
  );
}
