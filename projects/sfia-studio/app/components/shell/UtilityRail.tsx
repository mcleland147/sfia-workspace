"use client";

import Link from "next/link";
import {
  STUDIO_PRIMARY_ROUTES,
  currentProjectIdFromRoute,
  isActiveRoute,
  type StudioShellRoute,
} from "@/lib/navigation";
import styles from "./utility-rail.module.css";

interface UtilityRailProps {
  variant: "floating" | "flush";
  activeRoute: StudioShellRoute;
}

/**
 * Canonical Studio navigation only (G-UX-02).
 * Historical P0/D1/OA/OPS1 routes remain reachable by URL but are not
 * first-level peers on the product rail.
 */
export function UtilityRail({ variant, activeRoute }: UtilityRailProps) {
  const isFloating = variant === "floating";
  const railClass = isFloating ? styles.floating : styles.flush;
  const currentProjectId = currentProjectIdFromRoute(activeRoute);

  return (
    <nav
      className={railClass}
      aria-label="Navigation principale"
      data-testid="utility-rail"
    >
      <Link
        href="/studio"
        className={isFloating ? styles.brand : styles.brandFlush}
        aria-label="SFIA Studio"
        data-testid="rail-brand"
      >
        S
      </Link>

      {STUDIO_PRIMARY_ROUTES.map((item) => {
        const active = isActiveRoute(activeRoute, item.route);
        const itemClass = [
          isFloating ? styles.item : styles.itemFlush,
          active
            ? isFloating
              ? styles.itemActive
              : styles.itemActiveFlush
            : "",
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <Link
            key={item.id}
            href={item.route}
            className={itemClass}
            aria-label={item.label}
            title={item.label}
            aria-current={active ? "page" : undefined}
            data-nav-tier="primary"
            data-testid={`rail-nav-${item.id}`}
          >
            {item.railIcon}
          </Link>
        );
      })}

      {currentProjectId ? (
        <Link
          href={`/studio/projects/${encodeURIComponent(currentProjectId)}`}
          className={[
            isFloating ? styles.item : styles.itemFlush,
            isFloating ? styles.itemActive : styles.itemActiveFlush,
          ].join(" ")}
          aria-label="Projet courant"
          title="Projet courant"
          aria-current="page"
          data-testid="rail-current-project"
          data-nav-tier="primary"
        >
          ●
        </Link>
      ) : null}

      <div className={styles.spacer} />

      <div
        className={isFloating ? styles.avatar : styles.avatarFlush}
        aria-label="Profil Morris"
        title="Morris"
        data-testid="rail-avatar"
      >
        M
      </div>
    </nav>
  );
}
