"use client";

import { useEffect, useState } from "react";
import type { PersonalSpace } from "@/domains/identity/portfolio-organization";

export function PersonalRailFavorites() {
  const [items, setItems] = useState<PersonalSpace[] | null>(null);
  useEffect(() => {
    let cancelled = false;
    void fetch("/api/portfolio/favorites")
      .then((response) => (response.ok ? response.json() : null))
      .then((body: { favorites?: PersonalSpace[] } | null) => {
        if (!cancelled) setItems(body?.favorites ?? []);
      })
      .catch(() => {
        if (!cancelled) setItems([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);
  if (!items || items.length === 0) return null;
  return (
    <div data-testid="portfolio-rail-favorites">
      <div className="studio-rail-section">Favoris</div>
      {items.map((item) => (
        <a
          key={`${item.spaceType}-${item.id}`}
          className="studio-rail-nav-item"
          href={item.spaceType === "project" ? `/projects/${item.id}?surface=travail` : `/preparations/${item.id}?resume=1`}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}
