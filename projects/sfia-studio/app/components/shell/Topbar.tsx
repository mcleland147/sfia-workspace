"use client";

import Link from "next/link";
import { StatusPill } from "@/components/ui/StatusPill";
import { CtaButton } from "@/components/ui/CtaButton";
import {
  FLUSH_TABS,
  type StudioRoute,
} from "@/lib/navigation";
import styles from "./topbar.module.css";

interface TopbarPill {
  label: string;
  tone?: "blueFlush" | "purpleFlush" | "orange" | "green";
}

interface TopbarProps {
  variant: "floating" | "flush";
  title: string;
  activeRoute: StudioRoute;
  pills?: TopbarPill[];
  showTabs?: boolean;
  floatingTabs?: string[];
}

export function Topbar({
  variant,
  title,
  activeRoute,
  pills = [],
  showTabs = variant === "flush",
  floatingTabs = ["Demande", "Contexte", "Pièces jointes", "Qualification"],
}: TopbarProps) {
  const isFloating = variant === "floating";

  if (isFloating) {
    return (
      <header data-testid="topbar">
        <div className={styles.topbarFloating}>
          <p className={styles.eyebrowFloating}>SFIA STUDIO</p>
          <div className={styles.titleRow}>
            <h1 className={styles.titleFloating}>{title}</h1>
            <div className={styles.pills}>
              {pills.map((pill) => (
                <StatusPill key={pill.label} tone={pill.tone ?? "orange"}>
                  {pill.label}
                </StatusPill>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.tabsFloating} role="tablist" aria-label="Sections demande">
          {floatingTabs.map((tab, index) => (
            <span
              key={tab}
              className={
                index === 0 ? styles.tabFloatingActive : styles.tabFloating
              }
              role="tab"
              aria-selected={index === 0}
            >
              {tab}
            </span>
          ))}
        </div>
      </header>
    );
  }

  const activeTabId = FLUSH_TABS.find((t) => t.route === activeRoute)?.id ?? "synthese";

  return (
    <header className={styles.topbar} data-testid="topbar">
      <p className={styles.eyebrow}>SFIA STUDIO</p>
      <div className={styles.titleRow}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.pills}>
          {pills.map((pill) => (
            <StatusPill key={pill.label} tone={pill.tone ?? "blueFlush"}>
              {pill.label}
            </StatusPill>
          ))}
          <CtaButton href="/nouvelle-demande">Nouvelle demande</CtaButton>
        </div>
      </div>
      {showTabs && (
        <nav className={styles.tabs} aria-label="Navigation cycle">
          {FLUSH_TABS.map((tab) => {
            if (tab.disabled) {
              return (
                <button
                  key={tab.id}
                  type="button"
                  className={styles.tabDisabled}
                  disabled
                  title="Simulation — preuves non routées en P0"
                  aria-disabled
                >
                  {tab.label}
                  {tab.simulated ? " (simulé)" : ""}
                </button>
              );
            }

            const active = tab.id === activeTabId;
            return (
              <Link
                key={tab.id}
                href={tab.route!}
                className={active ? styles.tabActive : styles.tab}
                aria-current={active ? "page" : undefined}
              >
                {tab.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
