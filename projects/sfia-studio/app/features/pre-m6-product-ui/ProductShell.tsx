import type { ReactNode } from "react";
import Link from "next/link";
import "./product-tokens.css";
import { ProductRailRecents } from "./ProductRailRecents";
import styles from "./ProductShell.module.css";

export type ProductNav = "projects" | "current" | "new";

export type ProductShellProps = {
  activeNav: ProductNav;
  /**
   * Href of the open project (workspace route). Used only to highlight the
   * matching entry in « Projets récents »; omitted when no project is open.
   */
  currentProjectHref?: string;
  children: ReactNode;
};

function BrandMark() {
  // P3 Figma 46:5 — ink square + “S” mark (not a decorative network glyph).
  return (
    <span className={styles.brandMark} aria-hidden>
      <span className={styles.brandGlyphLetter}>S</span>
    </span>
  );
}

/**
 * Pre-M6 product shell — P3 Figma rail layout (Workspace Desktop 46:2).
 *
 * Left Project Switcher Rail (192px; 160px <1200; hidden <768 → compact
 * topbar, 190:306) + main area for children. `studio-shell` is kept as the
 * stable E2E anchor for the shell root.
 *
 * Honesty rules: « Projets récents » only lists real projects (client read of
 * the existing list action); the profile entry is labelled « Pilote » — no
 * personal persona is hardcoded. The Meridian emblem is decorative only.
 */
export function ProductShell({
  activeNav,
  currentProjectHref,
  children,
}: ProductShellProps) {
  return (
    <div
      className={styles.shell}
      data-testid="studio-shell"
      data-nav={activeNav}
    >
      <aside
        className={styles.rail}
        data-testid="studio-rail"
        aria-label="Sélecteur de projet"
      >
        <div
          className={styles.meridian}
          data-testid="studio-rail-meridian"
          aria-hidden
        />

        <div className={styles.railInner}>
          <Link href="/studio" className={styles.brand}>
            <BrandMark />
            <span className={styles.brandName}>SFIA Studio</span>
          </Link>

          <nav className={styles.nav} aria-label="Navigation principale">
            <Link
              href="/studio"
              className={styles.navItem}
              data-active={activeNav === "projects"}
              aria-current={activeNav === "projects" ? "page" : undefined}
            >
              <span className={styles.navDot} aria-hidden />
              Projets
            </Link>
          </nav>

          <ProductRailRecents currentProjectHref={currentProjectHref} />

          <div className={styles.railFoot}>
            <span className={styles.profile} data-testid="studio-rail-profile">
              <span className={styles.profileDot} aria-hidden />
              Pilote
            </span>
          </div>
        </div>
      </aside>

      <div className={styles.column}>
        <header className={styles.mobileBar} data-testid="studio-mobile-bar">
          <Link href="/studio" className={styles.brand}>
            <BrandMark />
            <span className={styles.brandName}>SFIA Studio</span>
          </Link>
          <Link
            href="/studio"
            className={styles.mobileNavLink}
            aria-current={activeNav === "projects" ? "page" : undefined}
          >
            Projets
          </Link>
          <span className={styles.mobileProfile} title="Pilote">
            <span aria-hidden>P</span>
            <span className={styles.srOnly}>Pilote</span>
          </span>
        </header>

        <main
          className={[
            styles.main,
            activeNav === "current" ? styles.mainWorkspace : styles.mainPage,
          ].join(" ")}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
