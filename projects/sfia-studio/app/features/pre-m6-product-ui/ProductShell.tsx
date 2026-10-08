import type { ReactNode } from "react";
import Link from "next/link";
import "./product-tokens.css";
import { ProductRailRecents } from "./ProductRailRecents";
import {
  ProductMobileProfile,
  ProductRailProfile,
} from "./ProductRailProfile";
import styles from "./ProductShell.module.css";

export type ProductNav = "projects" | "current" | "new";

export type ProductShellProps = {
  activeNav: ProductNav;
  /**
   * Href of the open project (workspace route). Used only to highlight the
   * matching entry in « Projets récents »; omitted when no project is open.
   */
  currentProjectHref?: string;
  /**
   * P5-S07 CP02 — focused mobile topbar (Journal / Historique / Synthèses):
   * Mark + real project name + Pilot avatar. Wordmark and « Projets » leave
   * when a focused secondary view is active (`:has([data-active-view=…])`).
   */
  mobileFocusProjectName?: string | null;
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
 * the existing list action); the profile shows the authenticated session
 * display name when present, otherwise « Pilote ». No hardcoded persona.
 * The Meridian emblem is decorative only.
 */
export function ProductShell({
  activeNav,
  currentProjectHref,
  mobileFocusProjectName = null,
  children,
}: ProductShellProps) {
  const focusName = mobileFocusProjectName?.trim() || null;
  return (
    <div
      className={styles.shell}
      data-testid="studio-shell"
      data-nav={activeNav}
      data-mobile-focus={focusName ? "ready" : "idle"}
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
            <ProductRailProfile />
          </div>
        </div>
      </aside>

      <div className={styles.column}>
        <header className={styles.mobileBar} data-testid="studio-mobile-bar">
          <Link href="/studio" className={styles.brand}>
            <BrandMark />
            <span className={styles.brandName}>SFIA Studio</span>
            {focusName ? (
              <span className={styles.mobileFocusName}>{focusName}</span>
            ) : null}
          </Link>
          <Link
            href="/studio"
            className={styles.mobileNavLink}
            aria-current={activeNav === "projects" ? "page" : undefined}
          >
            Projets
          </Link>
          <ProductMobileProfile />
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
