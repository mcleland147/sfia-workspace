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

function statusForProject(index: number, total: number): { label: string; tone: string } {
  if (total === 0) return { label: "—", tone: "fig-tag-muted" };
  if (index === 0) return { label: "Actif", tone: "fig-tag-ok" };
  if (index === 1) return { label: "En réflexion", tone: "fig-tag-muted" };
  return { label: "À reprendre", tone: "fig-tag-warn" };
}

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
        j = {};
      }
      if (res.ok && j.preparationId) {
        router.push(`/preparations/${j.preparationId}`);
        return;
      }
      if (!res.ok && res.status !== 0) {
        setCreationUncertainty("");
        setError(j.error ?? `création refusée (HTTP ${res.status})`);
        return;
      }
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
        "Création incertaine (ACK perdu). Aucun nouveau POST automatique. Relisez le portefeuille ou réessayez explicitement.",
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

  function resumePreparation(id: string) {
    router.push(`/preparations/${id}?resume=1`);
  }

  if (error && !data) {
    return (
      <div className="fig-page">
        <div className="fig-panel space-y-3">
          <div>Portefeuille indisponible: {error}</div>
          <button type="button" className="btn secondary" onClick={() => void reloadPortfolio()}>
            Réessayer (GET)
          </button>
        </div>
      </div>
    );
  }
  if (!data) return <div className="muted">Chargement du portefeuille…</div>;

  const p = data.portfolio;
  const projects = p && p.kind === "ready" ? p.projects : [];
  const openCount = p && "openPreparations" in p ? p.openPreparations : 0;
  const isEmpty = p?.kind === "empty" || (p?.kind === "ready" && projects.length === 0);

  return (
    <div className="fig-page" data-figma-frame="94:50">
      <div className="fig-breadcrumb">
        <span>SFIA Studio / Portefeuille personnel</span>
        <span className="text-xs muted">
          {data.session?.displayName} · {data.session?.authMode}
        </span>
      </div>

      <header>
        <p className="fig-kicker">Votre espace</p>
        <h1 className="fig-hero-title">Bonjour, retrouvez vos projets</h1>
        <p className="fig-hero-sub">
          Accédez à vos espaces de travail ou démarrez un nouveau projet. Aucune conversation Nora
          globale ici.
        </p>
      </header>

      {error ? <p className="text-sm text-[var(--bad)]">{error}</p> : null}
      {creationUncertainty ? (
        <div className="fig-alert" data-testid="portfolio-creation-uncertainty" role="status">
          {creationUncertainty}
          <div className="mt-2">
            <button type="button" className="btn secondary" onClick={() => void reloadPortfolio()}>
              Relire le portefeuille
            </button>
          </div>
        </div>
      ) : null}

      <section className="fig-stat-grid" aria-label="Synthèse portefeuille">
        <div className="fig-stat">
          <div className="fig-stat-label">Mes projets</div>
          <div className="fig-stat-value">{String(projects.length).padStart(2, "0")}</div>
          <div className="fig-stat-hint">Projets accessibles</div>
        </div>
        <div className="fig-stat">
          <div className="fig-stat-label">Reprises récentes</div>
          <div className="fig-stat-value">{String(Math.min(openCount, 99)).padStart(2, "0")}</div>
          <div className="fig-stat-hint">Préparation(s) ouvertes</div>
        </div>
        <div className="fig-stat">
          <div className="fig-stat-label">Accès</div>
          <div className="fig-stat-value" style={{ fontSize: "1.35rem", marginTop: 14 }}>
            Personnel
          </div>
          <div className="fig-stat-hint">Chaque projet garde son contexte</div>
        </div>
      </section>

      {isEmpty ? (
        <section className="fig-two-col" data-figma-frame="158:264">
          <div className="fig-panel">
            <h2 className="fig-panel-title">Ton espace</h2>
            <div className="fig-empty-list">
              <div className="fig-empty-row">
                <div>
                  <div className="font-medium">Portefeuille</div>
                  <div className="muted text-xs">Aucun projet Studio accessible</div>
                </div>
              </div>
              <div className="fig-empty-row">
                <div>
                  <div className="font-medium">Démarrage</div>
                  <div className="muted text-xs">Discuter librement avant de créer</div>
                </div>
              </div>
              <div className="fig-empty-row">
                <div>
                  <div className="font-medium">Projet Git</div>
                  <div className="muted text-xs">Non nécessaire</div>
                </div>
              </div>
              <div className="fig-empty-row">
                <div>
                  <div className="font-medium">Cycle et méthode</div>
                  <div className="muted text-xs">Non obligatoires</div>
                </div>
              </div>
            </div>
          </div>
          <div className="fig-panel">
            <h2 className="fig-panel-title">Commencer</h2>
            <div className="fig-empty-list">
              <div className="fig-empty-row">
                <div>
                  <div className="font-medium">Nouveau projet</div>
                  <div className="muted text-xs">Ouvre le sas de préparation</div>
                </div>
              </div>
              <div className="fig-empty-row">
                <div>
                  <div className="font-medium">Exploration</div>
                  <div className="muted text-xs">Nora répond sans formulaire imposé</div>
                </div>
              </div>
              <div className="fig-empty-row">
                <div>
                  <div className="font-medium">Création</div>
                  <div className="muted text-xs">Toujours un acte explicite</div>
                </div>
              </div>
            </div>
            <button
              id="nouvelle-preparation"
              className="btn mt-4"
              disabled={creating}
              data-testid="portfolio-new-prep"
              onClick={() => void startPreparation()}
            >
              {creating ? "Création…" : "Nouvelle préparation"}
            </button>
          </div>
        </section>
      ) : (
        <section className="space-y-4" data-figma-frame="158:336">
          <div className="fig-section-head">
            <h2 className="fig-section-title">Mes projets</h2>
            <button
              id="nouvelle-preparation"
              className="btn"
              disabled={creating}
              data-testid="portfolio-new-prep"
              onClick={() => void startPreparation()}
            >
              {creating ? "Création…" : "Créer un projet"}
            </button>
          </div>
          <ul className="fig-card-grid" data-testid="portfolio-projects">
            {projects.map((proj, idx) => {
              const st = statusForProject(idx, projects.length);
              return (
                <li key={proj.id} className="fig-card">
                  <div className="fig-card-top">
                    <div className="fig-card-title">{proj.name}</div>
                    <span className={`fig-tag ${st.tone}`}>{st.label}</span>
                  </div>
                  <p className="fig-card-desc text-xs muted break-all">{proj.id}</p>
                  <p className="fig-card-meta">Projet accessible · ouverture par projectId</p>
                  <a className="btn mt-auto inline-flex justify-center" href={`/projects/${proj.id}?surface=travail`}>
                    Ouvrir le projet
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      )}

      {p?.kind === "empty" || p?.kind === "ready" ? (
        <section className="space-y-3" data-testid="portfolio-preparations" data-figma-frame="158:912">
          <div className="fig-section-head">
            <h2 className="fig-section-title">
              Préparations à reprendre
              <span className="muted text-sm font-normal ml-2">({openCount})</span>
            </h2>
          </div>
          {items.length === 0 ? (
            <div className="fig-panel">
              <p className="text-sm muted">
                Aucune préparation ouverte. Démarrez une nouvelle préparation pour discuter avant
                création de projet.
              </p>
            </div>
          ) : (
            <ul className="space-y-2">
              {items.map((prep) => (
                <li key={prep.id} className="fig-card !min-h-0 flex-row items-center justify-between gap-3">
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
      ) : null}

      {p?.kind === "unavailable" ? (
        <div className="fig-panel">
          <div className="font-medium">Portefeuille indisponible</div>
          <p className="muted text-sm mt-1">{p.reason}</p>
        </div>
      ) : null}

      <footer className="fig-banner">
        <h3>Continuité personnelle</h3>
        <p>
          Un dépôt Git partagé ne fusionne ni les conversations Nora, ni les décisions, ni les
          mandats des projets.
        </p>
      </footer>
    </div>
  );
}
