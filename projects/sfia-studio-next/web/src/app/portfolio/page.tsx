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

/**
 * ML4C S01 — portfolio labels must come from owner truth, never list index.
 * Decorative progression (Actif / En réflexion / À reprendre by index) is forbidden.
 */
function statusForOwnedProject(): { label: string; tone: string } {
  return { label: "Accessible", tone: "fig-tag-ok" };
}

function formatPrepCreatedAt(iso: string): string {
  try {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return iso;
    return d.toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

function padCount(n: number): string {
  return String(Math.min(Math.max(n, 0), 99)).padStart(2, "0");
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
      <div className="fig-page" data-figma-frame="591:425">
        <div className="fig-panel space-y-3" role="alert">
          <div>Portefeuille indisponible: {error}</div>
          <button type="button" className="btn secondary" onClick={() => void reloadPortfolio()}>
            Réessayer (GET)
          </button>
        </div>
      </div>
    );
  }
  if (!data) {
    return (
      <div className="muted" data-testid="portfolio-loading">
        Chargement du portefeuille…
      </div>
    );
  }

  const p = data.portfolio;
  const projects = p && p.kind === "ready" ? p.projects : [];
  const openPreparations = p && "openPreparations" in p ? p.openPreparations : 0;
  const hasProjects = projects.length > 0;
  const frameId = hasProjects ? "591:425" : "591:661";

  return (
    <div className="fig-page portfolio-page" data-figma-frame={frameId} data-testid="portfolio-page">
      <header>
        <p className="fig-kicker">Votre espace</p>
        <h1 className="fig-hero-title">Bonjour, retrouvez vos projets</h1>
        <p className="fig-hero-sub">
          Retrouvez vos projets ou reprenez une préparation avec Nora, sans mélanger leurs contextes.
        </p>
      </header>

      {error ? (
        <p className="text-sm text-[var(--bad)]" role="alert">
          {error}
        </p>
      ) : null}
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
          <div className="fig-stat-value">{padCount(projects.length)}</div>
          <div className="fig-stat-hint">Projets accessibles</div>
        </div>
        <div className="fig-stat">
          <div className="fig-stat-label">Préparations ouvertes</div>
          <div className="fig-stat-value">{padCount(openPreparations)}</div>
          <div className="fig-stat-hint">Préparations en cours</div>
        </div>
        <div className="fig-stat fig-stat-access">
          <div className="fig-stat-label">Accès</div>
          <div className="fig-stat-value fig-stat-value-text">Personnel</div>
          <div className="fig-stat-hint">Chaque projet garde son contexte</div>
        </div>
      </section>

      <section className="space-y-4" data-testid="portfolio-projects-section">
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

        {!hasProjects ? (
          <div className="portfolio-empty-projects" data-testid="portfolio-empty-projects">
            <div className="portfolio-empty-glyph" aria-hidden>
              +
            </div>
            <div className="min-w-0">
              <h3 className="portfolio-empty-title">Aucun projet pour le moment</h3>
              <p className="portfolio-empty-copy">
                Créez un projet pour démarrer avec Nora. La création reste un acte explicite dans le
                sas de préparation.
              </p>
              <button
                type="button"
                className="btn mt-3"
                disabled={creating}
                onClick={() => void startPreparation()}
              >
                {creating ? "Création…" : "Créer un projet"}
              </button>
            </div>
          </div>
        ) : (
          <ul className="fig-card-grid" data-testid="portfolio-projects">
            {projects.map((proj) => {
              const st = statusForOwnedProject();
              return (
                <li key={proj.id} className="fig-card portfolio-project-card">
                  <div className="fig-card-top">
                    <div className="fig-card-title truncate" title={proj.name}>
                      {proj.name}
                    </div>
                    <span className={`fig-tag ${st.tone}`} data-testid="portfolio-project-status">
                      {st.label}
                    </span>
                  </div>
                  <p className="fig-card-desc text-sm muted">Espace de travail accessible</p>
                  <div className="fig-card-sep" aria-hidden />
                  <p className="fig-card-meta">Accéder à votre espace projet</p>
                  <a
                    className="btn mt-auto inline-flex justify-center"
                    href={`/projects/${proj.id}?surface=travail`}
                    data-testid={`open-project-${proj.id}`}
                  >
                    Ouvrir le projet
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </section>

      {p?.kind === "empty" || p?.kind === "ready" ? (
        <section className="space-y-3" data-testid="portfolio-preparations" data-figma-frame="591:425">
          <div className="fig-section-head">
            <h2 className="fig-section-title">Préparations à reprendre</h2>
            <span className="muted text-sm" data-testid="portfolio-open-count">
              {padCount(openPreparations)} ouverte{openPreparations === 1 ? "" : "s"}
            </span>
          </div>
          {items.length === 0 ? (
            <div className="fig-panel portfolio-empty-preps" data-testid="portfolio-empty-preps">
              <p className="text-sm muted m-0">
                Aucune préparation ouverte. Démarrez une nouvelle préparation pour discuter avant
                création de projet.
              </p>
            </div>
          ) : (
            <ul className="portfolio-prep-list">
              {items.map((prep) => (
                <li key={prep.id} className="portfolio-prep-row">
                  <span className="portfolio-prep-icon" aria-hidden>
                    ○
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="portfolio-prep-title truncate">
                      {preparationDisplayLabel(prep)}
                    </div>
                    <div className="portfolio-prep-meta">
                      Ouverte · Créée le {formatPrepCreatedAt(prep.createdAt)}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn secondary shrink-0 portfolio-prep-resume"
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
        <div className="fig-panel" role="alert">
          <div className="font-medium">Portefeuille indisponible</div>
          <p className="muted text-sm mt-1">{p.reason}</p>
        </div>
      ) : null}

      <footer className="fig-banner portfolio-continuity">
        <h3>Continuité personnelle</h3>
        <p>
          Les conversations et les décisions restent propres à chaque projet. Un dépôt Git partagé ne
          fusionne pas les contextes.
        </p>
      </footer>
    </div>
  );
}
