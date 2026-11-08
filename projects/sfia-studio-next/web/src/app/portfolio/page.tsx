"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { preparationDisplayLabel } from "@/domains/identity/portfolio-labels";

type PreparationSummary = {
  id: string;
  previewName: string;
  previewSummary: string;
  createdAt: string;
  status: "OPEN";
};

type PortfolioResponse = {
  session?: { displayName: string; authMode: string };
  portfolio?:
    | {
        kind: "empty";
        openPreparations: number;
        preparations: { items: PreparationSummary[]; nextCursor: string | null };
      }
    | {
        kind: "ready";
        projects: Array<{ id: string; name: string }>;
        openPreparations: number;
        preparations: { items: PreparationSummary[]; nextCursor: string | null };
      }
    | { kind: "unavailable"; reason: string };
  error?: string;
};

export default function PortfolioPage() {
  const router = useRouter();
  const [data, setData] = useState<PortfolioResponse | null>(null);
  const [items, setItems] = useState<PreparationSummary[]>([]);
  const [nextCursor, setNextCursor] = useState<string | null>(null);
  const [error, setError] = useState<string>("");
  const [loadingMore, setLoadingMore] = useState(false);
  const creatingRef = useRef(false);

  const applyPortfolio = useCallback((j: PortfolioResponse, append: boolean) => {
    setData(j);
    const prep = j.portfolio && "preparations" in j.portfolio ? j.portfolio.preparations : null;
    if (prep) {
      setItems((prev) => (append ? [...prev, ...prep.items] : prep.items));
      setNextCursor(prep.nextCursor);
    } else if (!append) {
      setItems([]);
      setNextCursor(null);
    }
  }, []);

  useEffect(() => {
    fetch("/api/portfolio")
      .then(async (r) => {
        const j = (await r.json()) as PortfolioResponse;
        if (r.status === 401) {
          router.push("/login");
          return;
        }
        if (r.status === 400) {
          setError(j.error ?? "INVALID_CURSOR");
          return;
        }
        if (!r.ok) {
          setError(j.error ?? "portefeuille indisponible");
          return;
        }
        applyPortfolio(j, false);
      })
      .catch((e) => setError(String(e)));
  }, [router, applyPortfolio]);

  async function loadMore() {
    if (!nextCursor || loadingMore) return;
    setLoadingMore(true);
    try {
      const res = await fetch(
        `/api/portfolio?preparationsCursor=${encodeURIComponent(nextCursor)}`,
      );
      const j = (await res.json()) as PortfolioResponse;
      if (res.status === 400) {
        setError(j.error ?? "INVALID_CURSOR");
        return;
      }
      if (!res.ok) {
        setError(j.error ?? "pagination impossible");
        return;
      }
      applyPortfolio(j, true);
    } finally {
      setLoadingMore(false);
    }
  }

  async function startPreparation() {
    if (creatingRef.current) return;
    creatingRef.current = true;
    try {
      const res = await fetch("/api/preparations", { method: "POST" });
      const j = await res.json();
      if (res.ok) router.push(`/preparations/${j.preparationId}`);
      else setError(j.error ?? "échec");
    } finally {
      creatingRef.current = false;
    }
  }

  /** Reprendre = GET only, no POST. */
  function resumePreparation(id: string) {
    router.push(`/preparations/${id}`);
  }

  if (error) {
    return <div className="panel p-6">Portefeuille indisponible: {error}</div>;
  }
  if (!data) return <div className="muted">Chargement du portefeuille…</div>;

  const p = data.portfolio;
  return (
    <div className="space-y-6 max-w-3xl">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold studio-title">Portefeuille</h1>
        <p className="muted text-sm">
          {data.session?.displayName} · mode {data.session?.authMode}. Aucune Nora globale ici.
        </p>
      </header>

      <div className="flex gap-2">
        <button className="btn" onClick={startPreparation} data-testid="portfolio-new-prep">
          Nouvelle préparation
        </button>
      </div>

      {p?.kind === "empty" && (
        <div className="panel p-5">
          <div className="font-medium">Aucun projet persisté</div>
          <p className="muted text-sm mt-1">
            État vide distinct d&apos;une erreur. Préparations ouvertes: {p.openPreparations}.
          </p>
        </div>
      )}
      {p?.kind === "unavailable" && (
        <div className="panel p-5">
          <div className="font-medium">Portefeuille indisponible</div>
          <p className="muted text-sm mt-1">{p.reason}</p>
        </div>
      )}
      {p?.kind === "ready" && (
        <ul className="space-y-2" data-testid="portfolio-projects">
          {p.projects.map((proj) => (
            <li key={proj.id} className="panel p-4 flex justify-between items-center">
              <div>
                <div className="font-medium">{proj.name}</div>
                <div className="text-xs muted">{proj.id}</div>
              </div>
              <a className="btn secondary" href={`/projects/${proj.id}`}>
                Ouvrir
              </a>
            </li>
          ))}
        </ul>
      )}

      {(p?.kind === "empty" || p?.kind === "ready") && (
        <section className="space-y-3" data-testid="portfolio-preparations">
          <h2 className="text-lg font-semibold">
            Préparations ouvertes
            <span className="muted text-sm font-normal ml-2">({p.openPreparations})</span>
          </h2>
          {items.length === 0 ? (
            <p className="text-sm muted">Aucune préparation ouverte non rattachée.</p>
          ) : (
            <ul className="space-y-2">
              {items.map((prep) => (
                <li key={prep.id} className="panel p-4 flex justify-between items-center gap-3">
                  <div className="min-w-0">
                    <div className="font-medium truncate">{preparationDisplayLabel(prep)}</div>
                    <div className="text-xs muted">
                      {prep.status} · {new Date(prep.createdAt).toLocaleString("fr-FR")}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn secondary shrink-0"
                    data-testid={`resume-prep-${prep.id}`}
                    onClick={() => resumePreparation(prep.id)}
                  >
                    Reprendre
                  </button>
                </li>
              ))}
            </ul>
          )}
          {nextCursor ? (
            <button
              type="button"
              className="btn secondary"
              disabled={loadingMore}
              data-testid="portfolio-load-more"
              onClick={() => void loadMore()}
            >
              {loadingMore ? "Chargement…" : "Charger plus"}
            </button>
          ) : null}
        </section>
      )}
    </div>
  );
}
