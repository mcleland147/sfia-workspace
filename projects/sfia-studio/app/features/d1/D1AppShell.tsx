import Link from "next/link";
import styles from "./d1-shell.module.css";

export type D1Active =
  | "workspace"
  | "new"
  | "cockpit"
  | "intake";

interface D1AppShellProps {
  active: D1Active;
  title: string;
  children: React.ReactNode;
  rail?: React.ReactNode;
}

export function D1AppShell({ active, title, children, rail }: D1AppShellProps) {
  return (
    <div className={styles.shell} data-testid="d1-app-shell">
      <nav className={styles.nav} aria-label="Navigation D1">
        <Link
          href="/nouvelle-demande"
          className={styles.navLink}
          aria-label="Nouvelle demande"
          aria-current={active === "intake" ? "page" : undefined}
          title="Nouvelle demande — intake"
          data-testid="d1-nav-intake"
        >
          ND
        </Link>
        <Link
          href="/workspace"
          className={styles.navLink}
          aria-label="Workspace"
          aria-current={active === "workspace" ? "page" : undefined}
          title="Workspace"
          data-testid="d1-nav-workspace"
        >
          WS
        </Link>
        <Link
          href="/projects/new"
          className={styles.navLink}
          aria-label="Créer manuellement"
          aria-current={active === "new" ? "page" : undefined}
          title="Créer manuellement"
          data-testid="d1-nav-manual"
        >
          +
        </Link>
        <Link
          href="/ops1/nouvelle-demande"
          className={styles.navLink}
          aria-label="OPS1 legacy Nouvelle demande"
          title="OPS1 legacy"
          data-testid="d1-nav-ops1"
        >
          OPS
        </Link>
      </nav>
      <main className={styles.main} id="main-content" aria-label={title}>
        {children}
        {rail ? (
          <aside className={styles.railStacked} aria-label="Contexte">
            {rail}
          </aside>
        ) : null}
      </main>
      {rail ? (
        <aside className={styles.rail} aria-label="Rail contextuel">
          {rail}
        </aside>
      ) : (
        <aside className={styles.rail} aria-label="Rail contextuel">
          <h2>Contextual rail</h2>
          <div className={styles.railCard}>
            <strong>D1</strong>
            <p className={styles.placeholder}>
              Contexte minimal — pas d’audit technique ici
            </p>
          </div>
        </aside>
      )}
    </div>
  );
}
