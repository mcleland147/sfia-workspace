"use client";

import Link from "next/link";
import { STUDIO_ROUTES, type StudioRoute } from "@/lib/navigation";
import styles from "./utility-rail.module.css";

interface UtilityRailProps {
  variant: "floating" | "flush";
  activeRoute: StudioRoute;
}

export function UtilityRail({ variant, activeRoute }: UtilityRailProps) {
  const isFloating = variant === "floating";
  const railClass = isFloating ? styles.floating : styles.flush;

  return (
    <nav
      className={railClass}
      aria-label="Navigation principale"
      data-testid="utility-rail"
    >
      <Link
        href="/synthese"
        className={isFloating ? styles.brand : styles.brandFlush}
        aria-label="SFIA Studio"
      >
        S
      </Link>

      {STUDIO_ROUTES.map((item) => {
        const active = activeRoute === item.route;
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
            aria-current={active ? "page" : undefined}
          >
            {item.railIcon}
          </Link>
        );
      })}

      <button
        type="button"
        className={isFloating ? styles.itemDisabled : styles.itemFlush}
        aria-disabled
        disabled
        title="Paramètres — simulation"
        aria-label="Paramètres (désactivé)"
      >
        ◎
      </button>

      <div className={styles.spacer} />

      <Link
        href="/workspace"
        className={isFloating ? styles.item : styles.itemFlush}
        aria-label="Workspace D1"
        title="Workspace D1"
        data-testid="rail-d1-workspace"
      >
        W
      </Link>

      <Link
        href="/ops1/nouvelle-demande"
        className={isFloating ? styles.item : styles.itemFlush}
        aria-label="OPS1 legacy"
        title="OPS1 Nouvelle demande (legacy)"
        data-testid="rail-ops1-legacy"
      >
        O
      </Link>

      <div className={isFloating ? styles.avatar : styles.avatarFlush}>MC</div>
    </nav>
  );
}
