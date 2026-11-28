"use client";

import { useEffect, useState } from "react";
import type { PersonalSpace } from "@/domains/identity/portfolio-organization";
import { notePersonalSpaceEntry } from "./PersonalSpaceOpenSignal";

export const PORTFOLIO_CHANGED = "sfia-portfolio-changed";

export function notifyPortfolioChanged() {
  window.dispatchEvent(new Event(PORTFOLIO_CHANGED));
}

export function PersonalRailSearch() {
  const [query, setQuery] = useState("");
  return (
    <form action="/portfolio" className="portfolio-rail-search">
      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M15 9.17a5.83 5.83 0 1 1-11.66 0 5.83 5.83 0 0 1 11.66 0Z" stroke="#A5B1C5" strokeWidth="1.4" />
        <path d="M16.67 16.67 13.33 13.33" stroke="#A5B1C5" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
      <input
        name="q"
        aria-label="Recherche rapide des espaces"
        placeholder="Rechercher un espace"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        data-testid="portfolio-rail-search"
      />
    </form>
  );
}

export function PersonalRailFavorites() {
  const [items, setItems] = useState<PersonalSpace[] | null>(null);

  useEffect(() => {
    let requestId = 0;
    let cancelled = false;
    async function load() {
      const issued = ++requestId;
      setItems([]);
      try {
        const response = await fetch("/api/portfolio/favorites");
        const body = response.ok ? ((await response.json()) as { favorites?: PersonalSpace[] }) : null;
        if (cancelled || issued !== requestId) return;
        setItems(body?.favorites ?? []);
      } catch {
        if (!cancelled && issued === requestId) setItems([]);
      }
    }
    void load();
    const onChange = () => void load();
    window.addEventListener(PORTFOLIO_CHANGED, onChange);
    return () => {
      cancelled = true;
      window.removeEventListener(PORTFOLIO_CHANGED, onChange);
    };
  }, []);

  return (
    <div data-testid="portfolio-rail-favorites">
      <a className="studio-rail-nav-item" href="/portfolio?scope=archive" data-testid="portfolio-rail-archives">
        Archives
      </a>
      {items && items.length > 0 ? <div className="studio-rail-section">Favoris</div> : null}
      {items?.map((item) => (
        <a
          key={`${item.spaceType}-${item.id}`}
          className="studio-rail-nav-item"
          href={item.spaceType === "project" ? `/projects/${item.id}?surface=travail` : `/preparations/${item.id}?resume=1`}
          onClick={() => notePersonalSpaceEntry(item.spaceType, item.id)}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}
