import type { ReactNode } from "react";
import Link from "next/link";
import "./product-tokens.css";
import styles from "./ProductShell.module.css";

export type ProductNav = "projects" | "current" | "new";

export type ProductShellProps = {
  activeNav: ProductNav;
  /** Href for the "Projet courant" pill; omitted when no project is open. */
  currentProjectHref?: string;
  children: ReactNode;
};

/**
 * Self-contained Pre-M6 product shell (brand header + canvas).
 * `studio-shell` is kept as the stable E2E anchor for the shell root.
 */
export function ProductShell({
  activeNav,
  currentProjectHref,
  children,
}: ProductShellProps) {
  const currentHref = currentProjectHref ?? null;

  return (
    <div className={styles.shell} data-testid="studio-shell">
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/studio" className={styles.brand}>
            <span className={styles.brandMark} aria-hidden>
              <svg
                className={styles.brandGlyph}
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
              >
                <circle cx="6" cy="12" r="2.2" fill="currentColor" />
                <circle cx="12" cy="6.5" r="2.2" fill="currentColor" />
                <circle cx="18" cy="12" r="2.2" fill="currentColor" />
                <path
                  d="M7.7 11.2 L10.4 7.8 M13.6 7.8 L16.3 11.2"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className={styles.brandText}>
              <span className={styles.brandName}>SFIA Studio</span>
              <span className={styles.brandTagline}>Pilotage assisté</span>
            </span>
          </Link>

          <nav className={styles.nav} aria-label="Navigation principale">
            <Link
              href="/studio"
              className={styles.navPill}
              data-active={activeNav === "projects"}
              aria-current={activeNav === "projects" ? "page" : undefined}
            >
              Projets
            </Link>
            {currentHref ? (
              <Link
                href={currentHref}
                className={styles.navPill}
                data-active={activeNav === "current"}
                aria-current={activeNav === "current" ? "page" : undefined}
              >
                Projet courant
              </Link>
            ) : (
              <span
                className={styles.navPill}
                data-active={activeNav === "current"}
                data-inert="true"
              >
                Projet courant
              </span>
            )}
          </nav>

          <span className={styles.avatar} title="Morris">
            <span aria-hidden>M</span>
            <span className={styles.srOnly}>Morris</span>
          </span>
        </div>
      </header>

      <main className={styles.main}>{children}</main>
    </div>
  );
}
