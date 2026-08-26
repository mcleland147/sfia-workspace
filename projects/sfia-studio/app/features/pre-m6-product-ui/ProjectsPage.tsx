"use client";

import { useEffect, useState } from "react";
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

function formatRelativeFr(iso: string | undefined): string {
  if (!iso) return "Projet disponible";
  const ts = Date.parse(iso);
  if (Number.isNaN(ts)) return "Projet disponible";
  const deltaMs = Date.now() - ts;
  const minutes = Math.floor(deltaMs / 60_000);
  if (minutes < 1) return "À l’instant";
  if (minutes < 60) return `Il y a ${minutes} min`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    const d = new Date(ts);
    const hh = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");
    return hours < 18 ? `Aujourd’hui, ${hh}h${mm}` : `Hier, ${hh}h${mm}`;
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
      return { label: "En attente de décision", tone: "waiting" };
    case "closed":
      return { label: "Clos", tone: "neutral" };
    case "archived":
      return { label: "Archivé", tone: "neutral" };
    default:
      return { label: status, tone: "neutral" };
  }
}

/** F1 — Projects entry point. Nora recommends, the Pilote decides. */
export function ProjectsPage() {
  const [state, setState] = useState<ListState>({ status: "loading" });

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

  const count =
    state.status === "ready"
      ? state.projects.length
      : state.status === "empty"
        ? 0
        : null;

  const subtitle =
    count === null
      ? "Entrée / reprise — Nora recommande, vous décidez"
      : count === 0
        ? "Aucun projet · créez pour démarrer"
        : `${count} projet${count > 1 ? "s" : ""} · reprendre ou créer`;

  const showHeroCreate = state.status !== "empty";

  return (
    <div className={styles.page} data-testid="studio-projects-home">
      <header className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.heroEyebrow}>SFIA Studio</p>
          <h1 className={styles.heroTitle}>Projets — entrée / reprise</h1>
          <p className={styles.heroSubtitle}>{subtitle}</p>
        </div>
        {showHeroCreate ? (
          <Link
            href="/studio/projects/new"
            className={styles.heroCta}
            data-testid="studio-projects-create"
          >
            Créer un projet
          </Link>
        ) : null}
      </header>

      {state.status === "loading" ? (
        <p className={styles.hint} data-testid="studio-projects-loading">
          Chargement en cours…
        </p>
      ) : null}

      {state.status === "error" ? (
        <div className={styles.error} role="alert" data-testid="studio-projects-error">
          <p className={styles.errorTitle}>{state.message}</p>
          <p className={styles.hint}>
            Réessayez dans un instant. Aucune donnée n&apos;est inventée.
          </p>
        </div>
      ) : null}

      {state.status === "empty" ? (
        <div className={styles.empty} data-testid="studio-projects-empty">
          <p className={styles.emptyTitle}>Aucun projet.</p>
          <p className={styles.emptyBody}>
            Créez un projet pour commencer avec Nora. Vous pourrez ensuite
            préciser votre besoin et décider de la suite.
          </p>
          <Link
            href="/studio/projects/new"
            className={styles.emptyCta}
            data-testid="studio-projects-create"
          >
            Créer un projet
          </Link>
        </div>
      ) : null}

      {state.status === "ready" ? (
        <ul className={styles.cardList} data-testid="studio-projects-list">
          {state.projects.map((project) => {
            const badge = badgeFor(project.status);
            const href = `/studio/projects/${encodeURIComponent(project.projectId)}`;
            return (
              <li key={project.projectId} className={styles.card}>
                <div className={styles.cardMain}>
                  <h2 className={styles.cardTitle}>{project.title}</h2>
                  <span className={styles.badge} data-tone={badge.tone}>
                    {badge.label}
                  </span>
                  <p className={styles.cardDescription}>
                    {project.objective?.trim() ||
                      project.context?.trim() ||
                      "Ouvrez le projet pour poursuivre avec Nora."}
                  </p>
                  <p className={styles.cardMeta}>
                    {formatRelativeFr(project.updatedAt)}
                  </p>
                </div>
                <div className={styles.cardActions}>
                  <Link
                    href={href}
                    className={styles.cardPrimary}
                    data-testid="studio-projects-open"
                  >
                    Reprendre
                  </Link>
                  <Link href={href} className={styles.cardSecondary}>
                    Voir l&apos;état
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
