"use client";

import { useEffect, useState } from "react";
import type { PersonalSpace } from "@/domains/identity/portfolio-organization";
import { notePersonalSpaceEntry } from "./PersonalSpaceOpenSignal";

export const PORTFOLIO_CHANGED = "sfia-portfolio-changed";

export function notifyPortfolioChanged() {
  window.dispatchEvent(new Event(PORTFOLIO_CHANGED));
}

export function PersonalRailFavorites() {
  const [items, setItems] = useState<PersonalSpace[] | null>(null);
  const [query, setQuery] = useState("");

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
      <form action="/portfolio" className="px-2 pb-2">
        <input
          name="q"
          aria-label="Recherche rapide des espaces"
          placeholder="Rechercher un espace"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="w-full"
          data-testid="portfolio-rail-search"
        />
      </form>
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
