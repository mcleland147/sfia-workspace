"use client";

import { Suspense } from "react";
import { PersonalPortfolio } from "@/components/portfolio/PersonalPortfolio";

export default function PortfolioPage() {
  return (
    <Suspense fallback={<div data-testid="portfolio-loading">Chargement du portefeuille…</div>}>
      <PersonalPortfolio />
    </Suspense>
  );
}
