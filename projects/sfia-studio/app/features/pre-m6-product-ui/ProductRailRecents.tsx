"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { listProjectsRuntimeAction } from "@/lib/vertical-slice-runtime/actions";
import styles from "./ProductShell.module.css";

type ListResult = Awaited<ReturnType<typeof listProjectsRuntimeAction>>;
type ProjectRow = Extract<ListResult, { ok: true }>["projects"][number];

type RecentsState =
  | { status: "loading" }
  | { status: "unavailable" }
  | { status: "ready"; projects: readonly ProjectRow[] };

const MAX_RECENTS = 5;

/**
 * « PROJETS RÉCENTS » — real projects only, newest activity first.
 * Reads the same list action as the Projets page; never invents an entry.
 */
export function ProductRailRecents({
  currentProjectHref,
}: {
  currentProjectHref?: string;
}) {
  const [state, setState] = useState<RecentsState>({ status: "loading" });

  useEffect(() => {
    let cancelled = false;
    void listProjectsRuntimeAction()
      .then((result) => {
        if (cancelled) return;
        if (!result.ok) {
          setState({ status: "unavailable" });
          return;
        }
        const sorted = [...result.projects].sort((a, b) =>
          (b.updatedAt ?? "").localeCompare(a.updatedAt ?? ""),
        );
        setState({ status: "ready", projects: sorted.slice(0, MAX_RECENTS) });
      })
      .catch(() => {
        if (!cancelled) setState({ status: "unavailable" });
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section
      className={styles.recents}
      aria-labelledby="studio-rail-recents-title"
      data-testid="studio-rail-recents"
    >
      <h2 className={styles.recentsTitle} id="studio-rail-recents-title">
        Projets récents
      </h2>
      {state.status === "ready" && state.projects.length > 0 ? (
        <ul className={styles.recentsList}>
          {state.projects.map((project) => {
            const href = `/studio/projects/${encodeURIComponent(project.projectId)}`;
            const active = href === currentProjectHref;
            return (
              <li key={project.projectId}>
                <Link
                  href={href}
                  className={styles.recentsItem}
                  data-active={active}
                  aria-current={active ? "page" : undefined}
                  title={project.title}
                >
                  <span className={styles.navDot} aria-hidden />
                  <span className={styles.recentsLabel}>{project.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className={styles.recentsEmpty} data-testid="studio-rail-recents-empty">
          {state.status === "loading"
            ? "Chargement…"
            : state.status === "unavailable"
              ? "Indisponible pour le moment."
              : "Aucun projet pour l’instant."}
        </p>
      )}
    </section>
  );
}
