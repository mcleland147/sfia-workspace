"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CtaButton } from "@/components/ui/CtaButton";
import { listProjectsRuntimeAction } from "@/lib/vertical-slice-runtime/actions";
import type { RuntimeProjectListItem } from "@/lib/vertical-slice-runtime";
import styles from "./studio-projects-home.module.css";

type ListState =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "empty" }
  | { status: "ready"; projects: readonly RuntimeProjectListItem[] };

function statusLabel(status: string): { label: string; tone: string } {
  switch (status) {
    case "draft":
      return { label: "Brouillon", tone: "muted" };
    case "active":
      return { label: "Qualification en cours", tone: "green" };
    case "paused":
      return { label: "En attente de décision", tone: "orange" };
    case "closed":
      return { label: "Clos", tone: "muted" };
    case "archived":
      return { label: "Archivé", tone: "muted" };
    default:
      return { label: status, tone: "muted" };
  }
}

export function StudioProjectsHome() {
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
            "Impossible de charger la liste des projets.",
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
    state.status === "ready" ? state.projects.length : state.status === "empty" ? 0 : null;

  return (
    <div className={styles.root} data-testid="studio-projects-home">
      <header className={styles.header}>
        <div>
          <h2 className={styles.title}>Projets</h2>
          <p className={styles.lead}>
            {count === null
              ? "Nora recommande, vous décidez"
              : count === 0
                ? "Aucun projet pour le moment · Nora recommande, vous décidez"
                : `${count} projet${count > 1 ? "s" : ""} · Nora recommande, vous décidez`}
          </p>
        </div>
        <CtaButton
          href="/studio/projects/new"
          variant="primary"
          data-testid="studio-projects-create"
        >
          + Nouveau projet
        </CtaButton>
      </header>

      {state.status === "loading" ? (
        <p className={styles.hint} data-testid="studio-projects-loading">
          Chargement des projets…
        </p>
      ) : null}

      {state.status === "error" ? (
        <div
          className={styles.error}
          role="alert"
          data-testid="studio-projects-error"
        >
          <p>{state.message}</p>
          <p className={styles.hint}>
            Réessayez plus tard. Aucune donnée inventée.
          </p>
        </div>
      ) : null}

      {state.status === "empty" ? (
        <div className={styles.empty} data-testid="studio-projects-empty">
          <p>Aucun projet pour le moment.</p>
          <p className={styles.hint}>
            Décrivez une intention pour commencer — créez un premier projet
            puis ouvrez la conversation avec Nora.
          </p>
          <CtaButton href="/studio/projects/new" variant="secondary">
            Créer le premier projet
          </CtaButton>
        </div>
      ) : null}

      {state.status === "ready" ? (
        <ul className={styles.list} data-testid="studio-projects-list">
          {state.projects.map((project) => {
            const badge = statusLabel(project.status);
            return (
              <li key={project.projectId} className={styles.item}>
                <Link
                  href={`/studio/projects/${encodeURIComponent(project.projectId)}`}
                  className={styles.itemLink}
                  data-testid="studio-projects-open"
                >
                  <div className={styles.itemBody}>
                    <div className={styles.itemTitleRow}>
                      <h3 className={styles.itemTitle}>{project.title}</h3>
                      <span
                        className={styles.badge}
                        data-tone={badge.tone}
                      >
                        {badge.label}
                      </span>
                    </div>
                    {project.objective ? (
                      <p className={styles.itemObjective}>{project.objective}</p>
                    ) : (
                      <p className={styles.itemObjective}>
                        Ouvrir pour poursuivre la qualification avec Nora.
                      </p>
                    )}
                    <p className={styles.itemMeta}>
                      {project.updatedAt
                        ? `Mis à jour ${project.updatedAt}`
                        : "Projet disponible"}
                    </p>
                  </div>
                  <span className={styles.chevron} aria-hidden>
                    ›
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
