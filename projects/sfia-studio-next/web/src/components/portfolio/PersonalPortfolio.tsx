"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { runOpenPreparation, subscribeOpenPreparationBusy } from "@/lib/open-preparation";
import type { PersonalBoard, PersonalSpace, PortfolioFilter, PortfolioSort, PortfolioView } from "@/domains/identity/portfolio-organization";
import "./personal-portfolio.css";

type BoardResponse = {
  board?: PersonalBoard;
  error?: string;
};

function formatCount(value: number | null): string {
  if (value === null) return "…";
  return value < 10 ? String(value).padStart(2, "0") : String(value);
}

function formatWhen(iso: string | null): string {
  if (!iso) return "";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("fr-FR", { day: "2-digit", month: "short", year: "numeric" });
}

function hrefFor(space: PersonalSpace): string {
  return space.spaceType === "project"
    ? `/projects/${space.id}?surface=travail`
    : `/preparations/${space.id}?resume=1`;
}

export function PersonalPortfolio() {
  const router = useRouter();
  const [board, setBoard] = useState<PersonalBoard | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [uncertain, setUncertain] = useState("");
  const [creating, setCreating] = useState(false);
  const [pending, setPending] = useState("");
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<PortfolioFilter>("all");
  const [scope, setScope] = useState<"current" | "archive">("current");
  const [expanded, setExpanded] = useState(false);
  const [menu, setMenu] = useState<string | null>(null);
  const [confirm, setConfirm] = useState<PersonalSpace | null>(null);
  const [confirmRestore, setConfirmRestore] = useState<PersonalSpace | null>(null);
  const requestSeq = useRef(0);

  useEffect(() => subscribeOpenPreparationBusy(setCreating), []);

  const load = useCallback(async (cursor?: string | null) => {
    const requestId = ++requestSeq.current;
    const params = new URLSearchParams();
    if (scope === "archive") params.set("scope", "archive");
    if (filter !== "all") params.set("filter", filter);
    if (query.trim()) params.set("q", query.trim());
    if (expanded) params.set("expanded", "1");
    if (cursor) params.set("cursor", cursor);
    const response = await fetch(`/api/portfolio?${params.toString()}`);
    if (requestId !== requestSeq.current) return;
    const body = (await response.json()) as BoardResponse;
    if (requestId !== requestSeq.current) return;
    if (response.status === 401) {
      router.push("/login");
      return;
    }
    if (!response.ok || !body.board) {
      setError(body.error || "Lecture du portefeuille impossible.");
      setLoading(false);
      return;
    }
    setBoard((prev) =>
      cursor && prev ? { ...body.board!, items: [...prev.items, ...body.board!.items] } : body.board!,
    );
    setError("");
    setLoading(false);
  }, [expanded, filter, query, router, scope]);

  useEffect(() => {
    const handle = setTimeout(() => {
      setLoading(true);
      void load();
    }, 180);
    return () => clearTimeout(handle);
  }, [load]);

  async function mutate(path: string, method: string, payload: unknown) {
    setPending(path);
    setUncertain("");
    setNotice("");
    try {
      const response = await fetch(path, {
        method,
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = (await response.json().catch(() => ({}))) as { error?: string; message?: string };
      if (response.status === 409) {
        setNotice(body.message || "Conflit : une autre modification a été enregistrée.");
        await load();
        return;
      }
      if (!response.ok) {
        setNotice(body.message || body.error || "La modification n'a pas abouti.");
        return;
      }
      await load();
    } catch {
      setUncertain("Résultat incertain. Le portefeuille va être relu, sans relancer l'action.");
      await load();
    } finally {
      setPending("");
      setConfirm(null);
      setConfirmRestore(null);
    }
  }

  async function startPreparation() {
    setUncertain("");
    const outcome = await runOpenPreparation(async (result) => {
      if (result.kind === "opened") {
        router.push(`/preparations/${result.preparationId}`);
        return;
      }
      if (result.kind === "unauthorized") router.push("/login");
      else if (result.kind === "refused") setError(result.message);
      else {
        await load();
        setUncertain(result.message);
      }
    });
    if (outcome.kind === "busy") return;
  }

  if (loading && !board) {
    return <div className="personal-portfolio" data-testid="portfolio-loading">Chargement du portefeuille…</div>;
  }
  if (error && !board) {
    return (
      <div className="personal-portfolio" role="alert" data-testid="portfolio-page">
        <p>Portefeuille indisponible.</p>
        <button type="button" onClick={() => void load()}>Réessayer</button>
      </div>
    );
  }
  if (!board) return null;
  const groups = board.preferences.view === "grouped"
    ? (["project", "preparation"] as const).map((type) => ({
        type,
        items: board.items.filter((item) => item.spaceType === type),
      }))
    : null;

  function renderSpace(space: PersonalSpace) {
    const activity = space.lastOpenedAt
      ? `Dernière ouverture · ${formatWhen(space.lastOpenedAt)}`
      : `Créé le ${formatWhen(space.createdAt)}`;
    return (
      <article
        key={`${space.spaceType}-${space.id}`}
        className={board!.preferences.view === "grid" ? "personal-portfolio-card" : "personal-portfolio-row"}
        draggable={board!.preferences.sort === "custom" && filter === "all" && !query}
        onDragStart={(event) => event.dataTransfer.setData("text/plain", `${space.spaceType}:${space.id}`)}
        onDragOver={(event) => event.preventDefault()}
        onDrop={(event) => {
          const raw = event.dataTransfer.getData("text/plain");
          const [spaceType, spaceId] = raw.split(":");
          if (!spaceId || spaceId === space.id) return;
          void mutate("/api/portfolio/order", "POST", {
            spaceType,
            spaceId,
            beforeSpaceType: space.spaceType,
            beforeSpaceId: space.id,
            expectedVersion: board!.preferences.version,
          });
        }}
        data-testid={space.spaceType === "project" ? `open-project-${space.id}` : `resume-prep-${space.id}`}
      >
        <a href={hrefFor(space)}>{space.label}</a>
        <span className="personal-portfolio-meta">{space.spaceType === "project" ? "Projet" : "Préparation"}</span>
        <span className="personal-portfolio-meta">{activity}</span>
        <span>
          <button
            type="button"
            aria-pressed={space.favorite}
            aria-label={space.favorite ? "Retirer des favoris" : "Ajouter aux favoris"}
            onClick={() =>
              void mutate(`/api/portfolio/spaces/${space.spaceType}/${space.id}/favorite`, "PUT", {
                favorite: !space.favorite,
                expectedVersion: space.rowVersion,
              })
            }
          >
            {space.favorite ? "★" : "☆"}
          </button>
          {board!.preferences.sort === "custom" ? (
            <>
              <button type="button" aria-label="Monter" onClick={() => void mutate("/api/portfolio/order", "POST", { spaceType: space.spaceType, spaceId: space.id, direction: "up", expectedVersion: board!.preferences.version })}>↑</button>
              <button type="button" aria-label="Descendre" onClick={() => void mutate("/api/portfolio/order", "POST", { spaceType: space.spaceType, spaceId: space.id, direction: "down", expectedVersion: board!.preferences.version })}>↓</button>
            </>
          ) : null}
          <button type="button" aria-label="Actions de l'espace" onClick={() => setMenu(menu === space.id ? null : space.id)}>…</button>
          {menu === space.id ? (
            <div className="personal-portfolio-menu" role="menu">
              <button type="button" disabled aria-disabled="true" title="Le renommage n'est pas disponible dans cette version.">Renommer — indisponible</button>
              <button type="button" onClick={() => (scope === "archive" ? setConfirmRestore(space) : setConfirm(space))}>
                {scope === "archive" ? "Restaurer" : "Archiver"}
              </button>
              <button type="button" disabled aria-disabled="true" title="La suppression n'est pas disponible dans cette version.">Supprimer — indisponible</button>
            </div>
          ) : null}
        </span>
      </article>
    );
  }

  return (
    <div className="personal-portfolio" data-testid="portfolio-page" data-figma-node="1420:176">
      <header className="personal-portfolio-header">
        <div>
          <p className="personal-portfolio-kicker">ESPACE PERSONNEL</p>
          <h1 className="personal-portfolio-title">Portefeuille</h1>
          <p className="personal-portfolio-sub">Retrouvez et organisez vos projets et préparations.</p>
        </div>
        <div className="personal-portfolio-grow" />
        <button type="button" className="btn" id="nouvelle-preparation" data-testid="portfolio-new-prep" disabled={creating} onClick={() => void startPreparation()}>
          {creating ? "Création…" : "Nouveau projet"}
        </button>
      </header>

      {error ? <p role="alert">{error}</p> : null}
      {notice ? <p role="status" data-testid="portfolio-conflict">{notice}</p> : null}
      {uncertain ? <p role="status" data-testid="portfolio-creation-uncertainty">{uncertain}</p> : null}
      {pending ? <p role="status">Modification en cours…</p> : null}

      <section className="personal-portfolio-synthesis" aria-label="Synthèse du portefeuille">
        <div className="personal-portfolio-stat"><span>Projets</span><strong data-testid="portfolio-count-projects">{formatCount(board.counters.projects)}</strong><em>Espaces de travail</em></div>
        <div className="personal-portfolio-rule" />
        <div className="personal-portfolio-stat"><span>Préparations</span><strong data-testid="portfolio-count-preparations">{formatCount(board.counters.preparations)}</strong><em>À reprendre</em></div>
        <div className="personal-portfolio-rule" />
        <div className="personal-portfolio-stat"><span>Favoris</span><strong data-testid="portfolio-count-favorites">{formatCount(board.counters.favorites)}</strong><em>Accès rapide</em></div>
      </section>

      {board.resume && scope === "current" ? (
        <section className="personal-portfolio-resume" data-testid="portfolio-resume">
          <div>
            <p className="personal-portfolio-kicker">REPRENDRE LE TRAVAIL</p>
            <h2>{board.resume.label}</h2>
            <p>{board.resume.activityLabel} · {formatWhen(board.resume.lastOpenedAt || board.resume.createdAt)}</p>
          </div>
          <div className="personal-portfolio-grow" />
          <a className="btn" href={hrefFor(board.resume)}>Continuer</a>
        </section>
      ) : null}

      <div className="personal-portfolio-tools">
        <div className="personal-portfolio-filters" role="tablist" aria-label="Filtres">
          {([
            ["all", "Tout"],
            ["projects", "Projets"],
            ["preparations", "Préparations"],
            ["favorites", "Favoris"],
          ] as const).map(([key, label]) => (
            <button key={key} type="button" aria-pressed={filter === key} onClick={() => { setFilter(key); setExpanded(false); }}>
              {label}
              {key === "all" ? ` · ${board.counters.projects + board.counters.preparations}` : ""}
              {key === "projects" ? ` · ${board.counters.projects}` : ""}
              {key === "preparations" ? ` · ${board.counters.preparations}` : ""}
              {key === "favorites" ? ` · ${board.counters.favorites}` : ""}
            </button>
          ))}
        </div>
        <input aria-label="Filtrer les espaces" placeholder="Filtrer les espaces…" value={query} onChange={(event) => setQuery(event.target.value)} data-testid="portfolio-search" />
        <select
          aria-label="Tri"
          value={board.preferences.sort}
          onChange={(event) =>
            void mutate("/api/portfolio/preferences", "PATCH", {
              sort: event.target.value as PortfolioSort,
              expectedVersion: board.preferences.version,
            })
          }
        >
          <option value="recent">Activité récente</option>
          <option value="name">Nom A–Z</option>
          <option value="created">Date de création</option>
          <option value="custom">Ordre personnalisé</option>
        </select>
        <div className="personal-portfolio-views">
          {([
            ["list", "Liste"],
            ["grid", "Grille"],
            ["grouped", "Groupes"],
          ] as const).map(([key, label]) => (
            <button
              key={key}
              type="button"
              aria-pressed={board.preferences.view === key}
              aria-label={label}
              onClick={() =>
                void mutate("/api/portfolio/preferences", "PATCH", {
                  view: key as PortfolioView,
                  expectedVersion: board.preferences.version,
                })
              }
            >
              {label}
            </button>
          ))}
        </div>
        <button type="button" aria-pressed={scope === "archive"} onClick={() => setScope(scope === "archive" ? "current" : "archive")}>
          {scope === "archive" ? "Retour aux espaces" : "Archives"}
        </button>
      </div>

      <section className="personal-portfolio-library" aria-label="Mes espaces">
        <h2>Mes espaces</h2>
        {board.items.length === 0 ? (
          <p data-testid="portfolio-empty">{query ? "Aucun résultat." : scope === "archive" ? "Aucune archive." : filter === "favorites" ? "Aucun favori." : "Aucun espace pour le moment."}</p>
        ) : board.preferences.view === "grid" ? (
          <div className="personal-portfolio-grid">{board.items.map(renderSpace)}</div>
        ) : groups ? (
          groups.map((group) => (
            <div key={group.type} className="personal-portfolio-group">
              <h3>{group.type === "project" ? "Projets" : "Préparations"}</h3>
              {group.items.map(renderSpace)}
            </div>
          ))
        ) : (
          <div>
            <div className="personal-portfolio-columns"><span>NOM</span><span>TYPE</span><span>ACTIVITÉ</span><span /></div>
            {board.items.map(renderSpace)}
          </div>
        )}
        <p>{board.items.length} sur {board.filteredTotal} espaces</p>
        {!expanded && board.filteredTotal > board.items.length ? (
          <button type="button" onClick={() => setExpanded(true)}>Voir tous les espaces</button>
        ) : null}
        {expanded ? <button type="button" onClick={() => setExpanded(false)}>Réduire la liste</button> : null}
        {expanded && board.nextCursor ? (
          <button type="button" data-testid="portfolio-load-more" onClick={() => void load(board.nextCursor)}>Charger la suite</button>
        ) : null}
      </section>

      {confirm ? (
        <div className="personal-portfolio-dialog" role="dialog" aria-label="Confirmer l'archivage">
          <p>Archiver « {confirm.label} » retire cet espace de l’accueil. Le projet, ses documents et ses droits restent inchangés.</p>
          <button type="button" onClick={() => void mutate(`/api/portfolio/spaces/${confirm.spaceType}/${confirm.id}/archive`, "PUT", { archived: true, confirm: true, expectedVersion: confirm.rowVersion })}>Archiver</button>
          <button type="button" onClick={() => setConfirm(null)}>Annuler</button>
        </div>
      ) : null}
      {confirmRestore ? (
        <div className="personal-portfolio-dialog" role="dialog" aria-label="Confirmer la restauration">
          <p>Restaurer « {confirmRestore.label} » le replace dans le portefeuille courant, avec le même identifiant.</p>
          <button type="button" onClick={() => void mutate(`/api/portfolio/spaces/${confirmRestore.spaceType}/${confirmRestore.id}/archive`, "PUT", { archived: false, confirm: true, expectedVersion: confirmRestore.rowVersion })}>Restaurer</button>
          <button type="button" onClick={() => setConfirmRestore(null)}>Annuler</button>
        </div>
      ) : null}
    </div>
  );
}
