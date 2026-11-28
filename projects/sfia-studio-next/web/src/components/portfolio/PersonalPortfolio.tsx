"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { runOpenPreparation, subscribeOpenPreparationBusy } from "@/lib/open-preparation";
import type { PersonalBoard, PersonalSpace, PortfolioFilter, PortfolioSort, PortfolioView } from "@/domains/identity/portfolio-organization";
import { notePersonalSpaceEntry } from "./PersonalSpaceOpenSignal";
import { notifyPortfolioChanged } from "./PersonalRailFavorites";
import "./personal-portfolio.css";

type BoardResponse = {
  board?: PersonalBoard;
  error?: string;
};

export type PortfolioMutationOutcome = "confirmed" | "refused" | "conflict" | "unknown";
export type PortfolioReread = "matched" | "unverified" | "failed" | "not-attempted";

export type PortfolioIntention = {
  kind: "favorite" | "archive" | "preference" | "order";
  spaceType?: PersonalSpace["spaceType"];
  spaceId?: string;
  desired?: boolean;
  view?: string;
  sort?: string;
  knownVersion: number;
};

/** Confirmed refusals are the route contract. A 5xx or a 2xx without an acknowledgement stays unknown. */
export function classifyPortfolioResponse(status: number, body: Record<string, unknown> | null): PortfolioMutationOutcome {
  if (status === 409) return "conflict";
  if (status === 400 || status === 401 || status === 403 || status === 404 || status === 422) return "refused";
  if (status >= 500 || status <= 0) return "unknown";
  if (status >= 200 && status < 300) {
    if (!body) return "unknown";
    const acknowledged =
      typeof body.rowVersion === "number" ||
      typeof body.version === "number" ||
      typeof body.favorite === "boolean" ||
      typeof body.archived === "boolean" ||
      typeof body.applied === "boolean";
    return acknowledged ? "confirmed" : "unknown";
  }
  return "unknown";
}

/** A successful read counts only when it shows the state the intention was about. */
export function intentionMatchesBoard(
  intention: PortfolioIntention,
  board: {
    items: Array<{ spaceType: string; id: string; favorite: boolean; archived: boolean }>;
    preferences: { view: string; sort: string; version: number };
  },
): boolean {
  if (intention.kind === "preference") {
    const viewOk = !intention.view || board.preferences.view === intention.view;
    const sortOk = !intention.sort || board.preferences.sort === intention.sort;
    return viewOk && sortOk && board.preferences.version > intention.knownVersion;
  }
  if (intention.kind === "order") {
    return board.preferences.sort === "custom" && board.preferences.version > intention.knownVersion;
  }
  const item = board.items.find((entry) => entry.spaceType === intention.spaceType && entry.id === intention.spaceId);
  if (!item) return false;
  if (intention.kind === "favorite") return item.favorite === intention.desired;
  return item.archived === intention.desired;
}

/**
 * A refusal is settled. Any other outcome stays blocked until a reread shows
 * the relevant owner state. A lost acknowledgement is never sent again.
 */
export function portfolioMutationFollowUp(input: {
  outcome: PortfolioMutationOutcome;
  reread: PortfolioReread;
}): { uncertain: boolean; retry: false; blockFurtherMutations: boolean } {
  if (input.outcome === "refused") {
    return { uncertain: false, retry: false, blockFurtherMutations: false };
  }
  if (input.reread === "matched" && (input.outcome === "confirmed" || input.outcome === "conflict")) {
    return { uncertain: false, retry: false, blockFurtherMutations: false };
  }
  if (input.outcome === "unknown" && input.reread === "matched") {
    return { uncertain: false, retry: false, blockFurtherMutations: false };
  }
  return {
    uncertain: input.outcome === "unknown",
    retry: false,
    blockFurtherMutations: true,
  };
}

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
  const params = useSearchParams();
  const busy = useRef(false);
  const blocked = useRef(false);
  const draggedSpace = useRef("");
  const [board, setBoard] = useState<PersonalBoard | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [uncertain, setUncertain] = useState("");
  const [held, setHeld] = useState(false);
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

  const load = useCallback(async (cursor?: string | null, issuedId?: number) => {
    const requestId = issuedId ?? ++requestSeq.current;
    const params = new URLSearchParams();
    if (scope === "archive") params.set("scope", "archive");
    if (filter !== "all") params.set("filter", filter);
    if (query.trim()) params.set("q", query.trim());
    if (expanded) params.set("expanded", "1");
    if (cursor) params.set("cursor", cursor);
    try {
      const response = await fetch(`/api/portfolio?${params.toString()}`);
      if (requestId !== requestSeq.current) return false;
      let body: BoardResponse = {};
      try {
        body = (await response.json()) as BoardResponse;
      } catch {
        body = {};
      }
      if (requestId !== requestSeq.current) return false;
      if (response.status === 401) {
        router.push("/login");
        return false;
      }
      if (!response.ok || !body.board) {
        setError(body.error || "Lecture du portefeuille impossible.");
        setLoading(false);
        return false;
      }
      const nextBoard = body.board;
      setBoard((prev) => {
        if (!cursor || !prev) return nextBoard;
        const seen = new Set(prev.items.map((item) => `${item.spaceType}:${item.id}`));
        const extra = nextBoard.items.filter((item) => !seen.has(`${item.spaceType}:${item.id}`));
        return { ...nextBoard, items: [...prev.items, ...extra] };
      });
      notifyPortfolioChanged();
      setError("");
      setLoading(false);
      return nextBoard;
    } catch {
      if (requestId !== requestSeq.current) return false;
      setError("Lecture du portefeuille impossible.");
      setLoading(false);
      return false;
    }
  }, [expanded, filter, query, router, scope]);

  useEffect(() => {
    const nextFilter = params.get("filter");
    if (nextFilter === "all" || nextFilter === "projects" || nextFilter === "preparations" || nextFilter === "favorites") {
      setFilter(nextFilter);
    }
    setScope(params.get("scope") === "archive" ? "archive" : "current");
    const nextQuery = params.get("q");
    if (nextQuery !== null) setQuery(nextQuery);
  }, [params]);

  useEffect(() => {
    const requestId = ++requestSeq.current;
    const handle = setTimeout(() => {
      setLoading(true);
      void load(null, requestId);
    }, 180);
    return () => clearTimeout(handle);
  }, [load]);

  const loadRef = useRef(load);
  loadRef.current = load;

  const intentionRef = useRef<PortfolioIntention | null>(null);

  function settleMutation(
    outcome: PortfolioMutationOutcome,
    reread: PortfolioReread,
    knownMessage: string,
  ) {
    const follow = portfolioMutationFollowUp({ outcome, reread });
    blocked.current = follow.blockFurtherMutations;
    setHeld(follow.blockFurtherMutations);
    if (!follow.blockFurtherMutations) intentionRef.current = null;
    if (follow.uncertain) {
      setUncertain(
        reread === "failed"
          ? "Résultat incertain. La relecture a échoué et l'action n'a pas été relancée."
          : reread === "unverified"
            ? "Résultat incertain. La relecture ne confirme pas l'espace concerné."
            : "Résultat incertain. L'action n'est pas relancée.",
      );
      return;
    }
    setUncertain("");
    if (follow.blockFurtherMutations) {
      setNotice(knownMessage);
      return;
    }
    if (outcome === "unknown") {
      setNotice("L'état a été relu. Vérifiez-le avant une nouvelle modification.");
    }
  }

  async function probeIntention(intention: PortfolioIntention): Promise<PortfolioReread> {
    try {
      if (intention.kind === "favorite") {
        const response = await fetch("/api/portfolio/favorites");
        if (!response.ok) return "failed";
        const body = (await response.json()) as { favorites?: PersonalSpace[] };
        const found = Boolean(body.favorites?.some((item) => item.spaceType === intention.spaceType && item.id === intention.spaceId));
        return found === intention.desired ? "matched" : "unverified";
      }
      if (intention.kind === "archive") {
        const scopeName = intention.desired ? "archive" : "current";
        const response = await fetch(`/api/portfolio?scope=${scopeName}&expanded=1`);
        if (!response.ok) return "failed";
        const body = (await response.json()) as BoardResponse;
        if (!body.board) return "failed";
        return intentionMatchesBoard(intention, body.board) ? "matched" : "unverified";
      }
      const board = await loadRef.current();
      if (!board) return "failed";
      return intentionMatchesBoard(intention, board) ? "matched" : "unverified";
    } catch {
      return "failed";
    }
  }

  async function mutate(path: string, method: string, payload: Record<string, unknown>, intention: PortfolioIntention) {
    if (busy.current || blocked.current) return;
    busy.current = true;
    intentionRef.current = intention;
    setPending(path);
    setUncertain("");
    setNotice("");
    try {
      const response = await fetch(path, {
        method,
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = (await response.json().catch(() => ({}))) as Record<string, unknown>;
      const outcome = classifyPortfolioResponse(response.status, body);
      if (outcome === "refused") {
        settleMutation("refused", "not-attempted", "");
        setNotice(typeof body.message === "string" ? body.message : typeof body.error === "string" ? body.error : "La modification n'a pas abouti.");
        return;
      }
      const reread = await probeIntention(intention);
      if (outcome === "confirmed") notifyPortfolioChanged();
      await loadRef.current();
      settleMutation(
        outcome,
        reread,
        outcome === "conflict"
          ? (typeof body.message === "string" ? body.message : "Conflit : une autre modification a été enregistrée. Relisez avant de recommencer.")
          : "La modification est enregistrée, mais le portefeuille n'a pas pu être relu.",
      );
    } catch {
      const reread = intentionRef.current ? await probeIntention(intentionRef.current) : "failed";
      settleMutation("unknown", reread, "");
    } finally {
      busy.current = false;
      setPending("");
      setConfirm(null);
      setConfirmRestore(null);
    }
  }

  async function rereadHeld() {
    const intention = intentionRef.current;
    const reread = intention ? await probeIntention(intention) : "failed";
    await loadRef.current();
    if (!intention) return;
    settleMutation("unknown", reread, "");
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
    return (
      <div className="personal-portfolio" data-testid="portfolio-loading" aria-busy="true">
        <p>Chargement du portefeuille…</p>
        <div className="personal-portfolio-skeleton" />
      </div>
    );
  }
  if (error && !board) {
    return (
      <div className="personal-portfolio" role="alert" data-testid="portfolio-page">
        <p>Portefeuille indisponible.</p>
        <button type="button" data-testid="portfolio-reread" onClick={() => void load()}>Réessayer</button>
      </div>
    );
  }
  if (!board) return null;
  const locked = held || Boolean(pending);
  const canReorder =
    board.preferences.sort === "custom" && filter === "all" && !query.trim() && scope === "current";
  const orderContext = { filter, query: query.trim(), scope };
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
        draggable={canReorder && !locked}
        onDragStart={(event) => {
          const token = `${space.spaceType}:${space.id}`;
          draggedSpace.current = token;
          event.dataTransfer.setData("text/plain", token);
          event.dataTransfer.effectAllowed = "move";
        }}
        onDragOver={(event) => {
          if (canReorder) event.preventDefault();
        }}
        onDrop={(event) => {
          if (!canReorder || locked) return;
          event.preventDefault();
          const raw = event.dataTransfer.getData("text/plain") || draggedSpace.current;
          draggedSpace.current = "";
          const [spaceType, spaceId] = raw.split(":");
          if (!spaceId || spaceId === space.id) return;
          void mutate("/api/portfolio/order", "POST", {
            spaceType,
            spaceId,
            beforeSpaceType: space.spaceType,
            beforeSpaceId: space.id,
            expectedVersion: board!.preferences.version,
            context: orderContext,
          }, { kind: "order", knownVersion: board!.preferences.version });
        }}
        data-testid={space.spaceType === "project" ? `open-project-${space.id}` : `resume-prep-${space.id}`}
      >
        <a href={hrefFor(space)} onClick={() => notePersonalSpaceEntry(space.spaceType, space.id)}>{space.label}</a>
        <span className="personal-portfolio-meta">{space.spaceType === "project" ? "Projet" : "Préparation"}</span>
        <span className="personal-portfolio-meta">{activity}</span>
        <span>
          <button
            type="button"
            aria-pressed={space.favorite}
            disabled={locked}
            aria-label={space.favorite ? "Retirer des favoris" : "Ajouter aux favoris"}
            onClick={() =>
              void mutate(`/api/portfolio/spaces/${space.spaceType}/${space.id}/favorite`, "PUT", {
                favorite: !space.favorite,
                expectedVersion: space.rowVersion,
              }, { kind: "favorite", spaceType: space.spaceType, spaceId: space.id, desired: !space.favorite, knownVersion: space.rowVersion })
            }
          >
            {space.favorite ? "★" : "☆"}
          </button>
          {canReorder ? (
            <>
              <button type="button" aria-label="Monter" disabled={locked} onClick={() => void mutate("/api/portfolio/order", "POST", { spaceType: space.spaceType, spaceId: space.id, direction: "up", expectedVersion: board!.preferences.version, context: orderContext }, { kind: "order", knownVersion: board!.preferences.version })}>↑</button>
              <button type="button" aria-label="Descendre" disabled={locked} onClick={() => void mutate("/api/portfolio/order", "POST", { spaceType: space.spaceType, spaceId: space.id, direction: "down", expectedVersion: board!.preferences.version, context: orderContext }, { kind: "order", knownVersion: board!.preferences.version })}>↓</button>
            </>
          ) : null}
          <button type="button" aria-label="Actions de l'espace" onClick={() => setMenu(menu === space.id ? null : space.id)}>…</button>
          {menu === space.id ? (
            <div className="personal-portfolio-menu" role="menu">
              <button type="button" disabled aria-disabled="true" title="Le renommage n'est pas disponible dans cette version.">Renommer — indisponible</button>
              <button type="button" disabled={locked} onClick={() => (scope === "archive" ? setConfirmRestore(space) : setConfirm(space))}>
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
      {held ? (
        <button type="button" data-testid="portfolio-reread" onClick={() => void rereadHeld()}>
          Relire le portefeuille
        </button>
      ) : null}
      {pending ? <p role="status">Modification en cours…</p> : null}

      <section className="personal-portfolio-synthesis" aria-label="Synthèse du portefeuille">
        <button type="button" className="personal-portfolio-stat" onClick={() => setFilter("projects")}><span>Projets</span><strong data-testid="portfolio-count-projects">{formatCount(board.counters.projects)}</strong><em>Espaces de travail</em></button>
        <div className="personal-portfolio-rule" />
        <button type="button" className="personal-portfolio-stat" onClick={() => setFilter("preparations")}><span>Préparations</span><strong data-testid="portfolio-count-preparations">{formatCount(board.counters.preparations)}</strong><em>À reprendre</em></button>
        <div className="personal-portfolio-rule" />
        <button type="button" className="personal-portfolio-stat" onClick={() => setFilter("favorites")}><span>Favoris</span><strong data-testid="portfolio-count-favorites">{formatCount(board.counters.favorites)}</strong><em>Accès rapide</em></button>
      </section>

      {board.resume && scope === "current" ? (
        <section className="personal-portfolio-resume" data-testid="portfolio-resume">
          <div className="personal-portfolio-mark" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4.16667 10H15.8333M10 15.8333L15.8333 10L10 4.16667" stroke="#A5B1C5" strokeWidth="1.41667" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <p className="personal-portfolio-kicker">REPRENDRE LE TRAVAIL</p>
            <h2>{board.resume.label}</h2>
            <p>{board.resume.activityLabel} · {formatWhen(board.resume.lastOpenedAt || board.resume.createdAt)}</p>
          </div>
          <div className="personal-portfolio-grow" />
          <a className="personal-portfolio-primary" href={hrefFor(board.resume)} onClick={() => notePersonalSpaceEntry(board.resume!.spaceType, board.resume!.id)}>Continuer avec Nora</a>
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
          disabled={locked}
          value={board.preferences.sort}
          onChange={(event) =>
            void mutate("/api/portfolio/preferences", "PATCH", {
              sort: event.target.value as PortfolioSort,
              expectedVersion: board.preferences.version,
            }, { kind: "preference", sort: event.target.value, knownVersion: board.preferences.version })
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
              disabled={locked}
              aria-label={label}
              onClick={() =>
                void mutate("/api/portfolio/preferences", "PATCH", {
                  view: key as PortfolioView,
                  expectedVersion: board.preferences.version,
                }, { kind: "preference", view: key, knownVersion: board.preferences.version })
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
              <h3>{group.type === "project" ? `Projets · ${board.groups.project}` : `Préparations · ${board.groups.preparation}`}</h3>
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
        <div className="personal-portfolio-overlay" onClick={() => { if (!locked) setConfirm(null); }}>
          <div className="personal-portfolio-modal" role="dialog" aria-modal="true" aria-label="Confirmer l'archivage" onClick={(event) => event.stopPropagation()} onKeyDown={(event) => { if (event.key === "Escape" && !locked) setConfirm(null); }}>
            <h2>Retirer {confirm.label} du portefeuille courant ?</h2>
            <p>L’espace reste accessible dans Archives et par ses liens. Le travail n’est pas interrompu.</p>
            <div className="personal-portfolio-modal-actions">
              <button type="button" onClick={() => setConfirm(null)}>Annuler</button>
              <button type="button" className="personal-portfolio-primary" disabled={locked} onClick={() => void mutate(`/api/portfolio/spaces/${confirm.spaceType}/${confirm.id}/archive`, "PUT", { archived: true, confirm: true, expectedVersion: confirm.rowVersion }, { kind: "archive", spaceType: confirm.spaceType, spaceId: confirm.id, desired: true, knownVersion: confirm.rowVersion })}>Archiver</button>
            </div>
          </div>
        </div>
      ) : null}
      {confirmRestore ? (
        <div className="personal-portfolio-overlay" onClick={() => { if (!locked) setConfirmRestore(null); }}>
          <div className="personal-portfolio-modal" role="dialog" aria-modal="true" aria-label="Confirmer la restauration" onClick={(event) => event.stopPropagation()} onKeyDown={(event) => { if (event.key === "Escape" && !locked) setConfirmRestore(null); }}>
            <h2>Restaurer {confirmRestore.label} ?</h2>
            <p>Le même espace revient dans le portefeuille courant, avec son organisation personnelle.</p>
            <div className="personal-portfolio-modal-actions">
              <button type="button" onClick={() => setConfirmRestore(null)}>Annuler</button>
              <button type="button" className="personal-portfolio-primary" disabled={locked} onClick={() => void mutate(`/api/portfolio/spaces/${confirmRestore.spaceType}/${confirmRestore.id}/archive`, "PUT", { archived: false, confirm: true, expectedVersion: confirmRestore.rowVersion }, { kind: "archive", spaceType: confirmRestore.spaceType, spaceId: confirmRestore.id, desired: false, knownVersion: confirmRestore.rowVersion })}>Restaurer</button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
