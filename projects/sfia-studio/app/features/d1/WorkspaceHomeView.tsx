import Link from "next/link";
import type { D1Project } from "@/lib/d1/types";
import { D1AppShell } from "./D1AppShell";
import { MethodModeBadge, ProjectStateBadge } from "./Badges";
import styles from "./d1-shell.module.css";

export function WorkspaceHomeView({
  projects,
  error,
}: {
  projects: D1Project[];
  error?: string;
}) {
  return (
    <D1AppShell active="workspace" title="Workspace">
      <div className={styles.header}>
        <h1>Workspace</h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          <Link
            className={styles.cta}
            href="/nouvelle-demande"
            data-testid="cta-nouvelle-demande"
          >
            Nouvelle demande
          </Link>
          <Link
            className={`${styles.cta} ${styles.ctaSecondary}`}
            href="/projects/new"
            data-testid="cta-new-project"
          >
            Créer manuellement
          </Link>
        </div>
      </div>
      <p className={styles.hint}>
        Retrouvez, reprenez et poursuivez un travail existant. Pour démarrer une
        nouvelle intention, ouvrez Nouvelle demande.
      </p>
      {error ? (
        <p className={styles.error} role="alert">
          {error}
        </p>
      ) : null}

      <section
        aria-labelledby="workspace-resume-heading"
        data-testid="workspace-resume"
      >
        <h2 id="workspace-resume-heading">Reprendre un travail</h2>
        <p className={styles.hint} data-testid="workspace-resume-hint">
          Projets récents disponibles. Seuls les projets sont listés à ce stade
          — pas de cycle ni d’action simulés.
        </p>
        {projects.length === 0 ? (
          <div
            className={`${styles.card} ${styles.empty}`}
            data-testid="workspace-empty"
          >
            <h3>Aucun projet à reprendre</h3>
            <p className={styles.hint}>
              Décrivez un besoin dans Nouvelle demande, ou créez manuellement.
            </p>
            <Link className={styles.cta} href="/nouvelle-demande">
              Ouvrir Nouvelle demande
            </Link>
          </div>
        ) : (
          <ul className={styles.list} data-testid="project-list">
            {projects.map((p) => (
              <li key={p.projectId}>
                <Link
                  href={`/projects/${p.projectId}`}
                  data-testid={`workspace-resume-${p.projectId}`}
                >
                  <strong>{p.name}</strong>
                  <div className={styles.badges} style={{ marginTop: 8 }}>
                    <ProjectStateBadge state={p.state} />
                    <MethodModeBadge mode={p.methodMode} />
                  </div>
                  <p className={styles.hint}>{p.objective}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </D1AppShell>
  );
}
