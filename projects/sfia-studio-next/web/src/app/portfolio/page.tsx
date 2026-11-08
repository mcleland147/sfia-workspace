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
  errorCategory?: string;
};

export default function PortfolioPage() {
  const router = useRouter();
  const [data, setData] = useState<PortfolioResponse | null>(null);
  const [items, setItems] = useState<PreparationSummary[]>([]);
  const [nextCursor, setNextCursor] = useState<string | null>(null);
  const [error, setError] = useState<string>("");
  const [pageNotice, setPageNotice] = useState<string>("");
  const [creationUncertainty, setCreationUncertainty] = useState<string>("");
  const [loadingMore, setLoadingMore] = useState(false);
  const [creating, setCreating] = useState(false);
  const creatingRef = useRef(false);
  const knownPrepIdsRef = useRef<Set<string>>(new Set());

  const applyPortfolio = useCallback((j: PortfolioResponse, append: boolean) => {
    setData(j);
    const prep = j.portfolio && "preparations" in j.portfolio ? j.portfolio.preparations : null;
    if (prep) {
      setItems((prev) => {
        const next = append ? [...prev, ...prep.items] : prep.items;
        knownPrepIdsRef.current = new Set(next.map((p) => p.id));
        return next;
      });
      setNextCursor(prep.nextCursor);
    } else if (!append) {
      setItems([]);
      setNextCursor(null);
      knownPrepIdsRef.current = new Set();
    }
  }, []);

  const reloadPortfolio = useCallback(async (): Promise<PortfolioResponse | null> => {
    try {
      const r = await fetch("/api/portfolio");
      const j = (await r.json()) as PortfolioResponse;
      if (r.status === 401) {
        router.push("/login");
        return null;
      }
      if (r.status === 400) {
        setError(j.error ?? "INVALID_CURSOR");
        return null;
      }
      if (!r.ok) {
        setError(j.error ?? j.errorCategory ?? `erreur ${r.status}`);
        return null;
      }
      applyPortfolio(j, false);
      setError("");
      return j;
    } catch {
      setError("Réseau indisponible — rechargement du portefeuille impossible.");
      return null;
    }
  }, [router, applyPortfolio]);

  useEffect(() => {
    void reloadPortfolio();
  }, [reloadPortfolio]);

  async function loadMore() {
    if (!nextCursor || loadingMore) return;
    setLoadingMore(true);
    setPageNotice("");
    try {
      const res = await fetch(
        `/api/portfolio?preparationsCursor=${encodeURIComponent(nextCursor)}`,
      );
      const j = (await res.json().catch(() => ({}))) as PortfolioResponse;
      if (res.status === 400) {
        setPageNotice(j.error ?? "INVALID_CURSOR");
        return;
      }
      if (res.status === 401) {
        router.push("/login");
        return;
      }
      if (!res.ok) {
        setPageNotice(j.error ?? j.errorCategory ?? `pagination HTTP ${res.status}`);
        return;
      }
      applyPortfolio(j, true);
    } catch {
      setPageNotice("Réseau indisponible pendant la pagination — réessayez.");
    } finally {
      setLoadingMore(false);
    }
  }

  /**
   * B4 — double-clic blocked while in-flight; on lost response do NOT auto-POST again.
   * Re-read portfolio to discover a possible creation; otherwise show uncertainty.
   */
  async function startPreparation() {
    if (creatingRef.current) return;
    creatingRef.current = true;
    setCreating(true);
    setCreationUncertainty("");
    setError("");
    const before = new Set(knownPrepIdsRef.current);
    try {
      const res = await fetch("/api/preparations", { method: "POST" });
      let j: { preparationId?: string; error?: string } = {};
      try {
        j = await res.json();
      } catch {
        // ACK / body lost — fall through to uncertainty path
        j = {};
      }
      if (res.ok && j.preparationId) {
        router.push(`/preparations/${j.preparationId}`);
        return;
      }
      if (!res.ok && res.status !== 0) {
        // Explicit server failure — no silent second POST
        setCreationUncertainty("");
        setError(j.error ?? `création refusée (HTTP ${res.status})`);
        return;
      }
      // Uncertain: re-read portfolio once (GET only)
      const refreshed = await reloadPortfolio();
      const prep =
        refreshed?.portfolio && "preparations" in refreshed.portfolio
          ? refreshed.portfolio.preparations.items
          : [];
      const discovered = prep.find((p) => !before.has(p.id));
      if (discovered) {
        setCreationUncertainty(
          `Création confirmée après relecture · ${discovered.id.slice(0, 8)}… — ouvrez « Reprendre ».`,
        );
        return;
      }
      setCreationUncertainty(
        "Création incertaine (ACK perdu). Aucun nouveau POST automatique. Rechargez le portefeuille ou réessayez explicitement.",
      );
    } catch {
      const refreshed = await reloadPortfolio();
      const prep =
        refreshed?.portfolio && "preparations" in refreshed.portfolio
          ? refreshed.portfolio.preparations.items
          : [];
      const discovered = prep.find((p) => !before.has(p.id));
      if (discovered) {
        setCreationUncertainty(
          `Réseau interrompu, mais une préparation nouvelle apparaît · ${discovered.id.slice(0, 8)}… — Reprendre (GET).`,
        );
      } else {
        setCreationUncertainty(
          "Réseau interrompu pendant la création. Résultat non vérifiable — pas de second POST automatique.",
        );
      }
    } finally {
      creatingRef.current = false;
      setCreating(false);
    }
  }

  /** Reprendre = GET/nav only, no POST. */
  function resumePreparation(id: string) {
    router.push(`/preparations/${id}`);
  }

  if (error && !data) {
    return (
      <div className="panel p-6 space-y-3">
        <div>Portefeuille indisponible: {error}</div>
        <button type="button" className="btn secondary" onClick={() => void reloadPortfolio()}>
          Réessayer (GET)
        </button>
      </div>
    );
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

      {error ? <p className="text-sm text-[var(--bad)]">{error}</p> : null}
      {creationUncertainty ? (
        <div className="panel p-4 text-sm" data-testid="portfolio-creation-uncertainty" role="status">
          {creationUncertainty}
          <div className="mt-2">
            <button type="button" className="btn secondary" onClick={() => void reloadPortfolio()}>
              Relire le portefeuille
            </button>
          </div>
        </div>
      ) : null}

      <div className="flex gap-2">
        <button
          className="btn"
          onClick={() => void startPreparation()}
          disabled={creating}
          data-testid="portfolio-new-prep"
        >
          {creating ? "Création…" : "Nouvelle préparation"}
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
              <a className="btn secondary" href={`/projects/${proj.id}?surface=travail`}>
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
          {pageNotice ? <p className="text-sm muted">{pageNotice}</p> : null}
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
