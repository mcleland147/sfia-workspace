"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { runOpenPreparation, subscribeOpenPreparationBusy } from "@/lib/open-preparation";
import { normalizePreparationTitle } from "@/domains/identity/portfolio-labels";
import type { PersonalBoard, PersonalSpace, PortfolioFilter, PortfolioSort, PortfolioView } from "@/domains/identity/portfolio-organization";
import { normalizeProjectNameKey } from "@/domains/preparation/projection";
import { notePersonalSpaceEntry } from "./PersonalSpaceOpenSignal";
import { notifyPortfolioChanged } from "./PersonalRailFavorites";
import "./personal-portfolio.css";

type BoardResponse = {
  board?: PersonalBoard;
  error?: string;
};

export type PortfolioMutationOutcome = "confirmed" | "refused" | "conflict" | "unknown";
export type PortfolioReread = "reviewed" | "failed" | "not-attempted";

export type PortfolioIntention = {
  kind: "favorite" | "archive" | "preference" | "order" | "rename";
  intentionKey?: string;
  spaceType?: PersonalSpace["spaceType"];
  spaceId?: string;
  beforeSpaceType?: PersonalSpace["spaceType"];
  beforeSpaceId?: string;
  direction?: "up" | "down";
  desired?: boolean;
  view?: string;
  sort?: string;
  knownVersion: number;
  knownPosition?: number | null;
  /** Raw value submitted with this rename. Compared with the acknowledgement and the reread. */
  requestedLabel?: string;
};

export type OwnerSpaceRecord = {
  spaceType: string;
  id: string;
  eligible: boolean;
  favorite: boolean;
  archived: boolean;
  rowVersion: number;
  customPosition: number | null;
  displayLabel?: string;
  nameRevision?: number;
};

export type OwnerEffect = "confirmed" | "current" | "absent" | "unchanged" | "unproven";

/** An acknowledgement counts only for the route that was called. A 5xx stays unknown. */
export function classifyPortfolioResponse(
  status: number,
  body: Record<string, unknown> | null,
  kind: PortfolioIntention["kind"],
): PortfolioMutationOutcome {
  if (status === 409) return "conflict";
  if (status === 400 || status === 401 || status === 403 || status === 404 || status === 422) return "refused";
  if (status >= 500 || status <= 0) return "unknown";
  if (status >= 200 && status < 300) {
    if (!body) return "unknown";
    if (kind === "favorite") {
      return typeof body.favorite === "boolean" && typeof body.rowVersion === "number" ? "confirmed" : "unknown";
    }
    if (kind === "archive") {
      return typeof body.archived === "boolean" && typeof body.rowVersion === "number" ? "confirmed" : "unknown";
    }
    if (kind === "preference") return typeof body.version === "number" ? "confirmed" : "unknown";
    if (kind === "order") {
      return typeof body.version === "number" && typeof body.moved === "boolean" ? "confirmed" : "unknown";
    }
    if (kind === "rename") {
      return typeof body.label === "string" && typeof body.revision === "number" && typeof body.intentionKey === "string" && typeof body.changed === "boolean"
        ? "confirmed"
        : "unknown";
    }
  }
  return "unknown";
}

/** A status alone is not a reread. The record must name the expected space and return its values. */
export function pertinentSpaceRecord(
  body: unknown,
  expected: { spaceType: string; id: string },
): boolean {
  return ownerSpaceRecord(body, expected) !== null;
}

export function ownerSpaceRecord(
  body: unknown,
  expected: { spaceType: string; id: string },
): OwnerSpaceRecord | null {
  if (!body || typeof body !== "object") return null;
  const record = body as Record<string, unknown>;
  if (
    record.spaceType !== expected.spaceType ||
    record.id !== expected.id ||
    typeof record.eligible !== "boolean" ||
    typeof record.favorite !== "boolean" ||
    typeof record.archived !== "boolean" ||
    typeof record.rowVersion !== "number" ||
    !(record.customPosition === null || typeof record.customPosition === "number")
  ) {
    return null;
  }
  return {
    spaceType: expected.spaceType,
    id: expected.id,
    eligible: record.eligible,
    favorite: record.favorite,
    archived: record.archived,
    rowVersion: record.rowVersion,
    customPosition: record.customPosition,
    ...(typeof record.displayLabel === "string" ? { displayLabel: record.displayLabel } : {}),
    ...(typeof record.nameRevision === "number" ? { nameRevision: record.nameRevision } : {}),
  };
}

/** The returned label must be the requested one, or the unchanged stored spelling of the same name. */
export function acknowledgedNameMatches(
  intention: PortfolioIntention,
  label: string,
  changed: boolean,
): boolean {
  const requested = intention.requestedLabel ?? "";
  if (intention.spaceType === "project") {
    if (normalizeProjectNameKey(label) !== normalizeProjectNameKey(requested)) return false;
    if (!changed) return true;
    return label === requested.normalize("NFC").replace(/\s+/g, " ").trim();
  }
  const normalized = normalizePreparationTitle(requested);
  return normalized !== null && label === normalized;
}

/** The acknowledgement must answer this intention, not merely carry a newer version. */
export function correlatedAcknowledgement(
  intention: PortfolioIntention,
  body: Record<string, unknown> | null,
): boolean {
  if (!body) return false;
  if (intention.kind === "favorite") {
    return body.favorite === intention.desired && body.rowVersion === intention.knownVersion + 1;
  }
  if (intention.kind === "archive") {
    return body.archived === intention.desired
      && typeof body.rowVersion === "number"
      && (body.rowVersion === intention.knownVersion || body.rowVersion === intention.knownVersion + 1);
  }
  if (intention.kind === "preference") return body.version === intention.knownVersion + 1;
  if (intention.kind === "order") {
    return body.version === intention.knownVersion + 1 && typeof body.moved === "boolean";
  }
  if (intention.kind === "rename") {
    return body.intentionKey === intention.intentionKey
      && body.spaceType === intention.spaceType
      && body.spaceId === intention.spaceId
      && typeof body.revision === "number"
      && typeof body.label === "string"
      && typeof body.changed === "boolean"
      && (body.revision === intention.knownVersion || body.revision === intention.knownVersion + 1)
      && acknowledgedNameMatches(intention, body.label, body.changed === true);
  }
  return false;
}

function shownAgrees(
  board: { items: Array<Pick<PersonalSpace, "spaceType" | "id" | "favorite" | "archived" | "rowVersion" | "customPosition">> } | null,
  record: OwnerSpaceRecord,
): boolean {
  const item = board?.items.find((entry) => entry.spaceType === record.spaceType && entry.id === record.id);
  if (!item) return true;
  return item.favorite === record.favorite
    && item.archived === record.archived
    && item.rowVersion === record.rowVersion
    && item.customPosition === record.customPosition;
}

/**
 * Separates a correlated acknowledgement, a usable reread, and proof that the
 * requested effect is the one now shown. A missing space is not a success.
 */
export function reconcileOwnerEffect(input: {
  intention: PortfolioIntention;
  outcome: PortfolioMutationOutcome;
  acknowledgement: Record<string, unknown> | null;
  records: Array<OwnerSpaceRecord | "absent">;
  board: {
    preferences: { view: string; sort: string; version: number };
    items: Array<Pick<PersonalSpace, "spaceType" | "id" | "favorite" | "archived" | "rowVersion" | "customPosition"> & { label?: string }>;
  } | null;
}): OwnerEffect {
  const { intention, outcome, acknowledgement, records, board } = input;
  if (!board) return "unproven";
  if (intention.kind === "preference") {
    if (outcome !== "confirmed" || !correlatedAcknowledgement(intention, acknowledgement) || !acknowledgement) return "current";
    if (board.preferences.version !== acknowledgement.version) return "current";
    if (intention.view && board.preferences.view !== intention.view) return "current";
    if (intention.sort && board.preferences.sort !== intention.sort) return "current";
    return "confirmed";
  }
  const primary = records[0];
  if (!primary) return "unproven";
  if (primary === "absent") return "absent";
  if (!shownAgrees(board, primary)) return "unproven";
  if (!primary.eligible) return "current";
  if (outcome !== "confirmed" || !correlatedAcknowledgement(intention, acknowledgement) || !acknowledgement) return "current";
  if (intention.kind === "favorite") {
    return primary.favorite === intention.desired && primary.rowVersion === acknowledgement.rowVersion ? "confirmed" : "current";
  }
  if (intention.kind === "archive") {
    return primary.archived === intention.desired && primary.rowVersion === acknowledgement.rowVersion ? "confirmed" : "current";
  }
  if (intention.kind === "rename") {
    if (typeof primary.displayLabel !== "string" || typeof primary.nameRevision !== "number") return "unproven";
    const named = board.items.find((entry) => entry.spaceType === primary.spaceType && entry.id === primary.id) as { label?: string } | undefined;
    if (named && typeof named.label === "string" && named.label !== primary.displayLabel) return "unproven";
    if (
      !acknowledgedNameMatches(intention, primary.displayLabel, acknowledgement.changed === true)
      || primary.displayLabel !== acknowledgement.label
      || primary.nameRevision !== acknowledgement.revision
    ) {
      return "current";
    }
    return acknowledgement.changed === false ? "unchanged" : "confirmed";
  }
  if (intention.kind === "order") {
    if (acknowledgement.moved !== true) return "unchanged";
    if (board.preferences.version !== acknowledgement.version) return "current";
    const target = records[1];
    if (target && target !== "absent") {
      if (!shownAgrees(board, target)) return "unproven";
      if (primary.customPosition == null || target.customPosition == null) return "current";
      const difference = primary.customPosition - target.customPosition;
      const placed = intention.direction === "down" ? difference === 1 : difference === -1;
      return placed ? "confirmed" : "current";
    }
    if (typeof intention.knownPosition === "number" && primary.customPosition != null) {
      const expected = intention.direction === "down" ? intention.knownPosition + 1 : intention.knownPosition - 1;
      return primary.customPosition === expected ? "confirmed" : "current";
    }
    return "current";
  }
  return "unproven";
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
  if (input.outcome === "conflict" && input.reread === "reviewed") {
    return { uncertain: false, retry: false, blockFurtherMutations: false };
  }
  if (input.outcome === "conflict") {
    return { uncertain: false, retry: false, blockFurtherMutations: true };
  }
  if (input.reread === "reviewed") {
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

function Mark({ name }: { name: "star" | "more" | "arrow" | "edit" | "grip" | "archive" | "trash" }) {
  const common = { width: 20, height: 20, viewBox: "0 0 20 20", fill: "none", "aria-hidden": true as const };
  if (name === "more") {
    return <svg {...common}><path d="M4.17 10h.01M10 10h.01M15.83 10h.01" stroke="#A5B1C5" strokeWidth="2.2" strokeLinecap="round" /></svg>;
  }
  if (name === "arrow") {
    return <svg {...common}><path d="M4.17 10h11.66M10 4.17 15.83 10 10 15.83" stroke="#A5B1C5" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  }
  if (name === "edit") {
    return <svg {...common}><path d="M11.7 4.2 15.8 8.3 7.2 16.9H3.1v-4.1L11.7 4.2Z" stroke="#A5B1C5" strokeWidth="1.4" strokeLinejoin="round" /></svg>;
  }
  if (name === "grip") {
    return <svg {...common}><path d="M7 5h.01M13 5h.01M7 10h.01M13 10h.01M7 15h.01M13 15h.01" stroke="#A5B1C5" strokeWidth="2.2" strokeLinecap="round" /></svg>;
  }
  if (name === "archive") {
    return <svg {...common}><path d="M3.5 6.5h13v9.2H3.5V6.5ZM3 4.2h14V6.5H3V4.2ZM8.2 10h3.6" stroke="#A5B1C5" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  }
  if (name === "trash") {
    return <svg {...common}><path d="M4.5 6.2h11M8 6.2V4.5h4v1.7M6.2 6.2l.6 9.2h6.4l.6-9.2" stroke="#FF9A9F" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  }
  return <svg {...common}><path d="M10 2.8 12.2 7.3 17 8l-3.5 3.4.8 4.8L10 14l-4.3 2.2.8-4.8L3 8l4.8-.7L10 2.8Z" stroke="#A5B1C5" strokeWidth="1.4" strokeLinejoin="round" /></svg>;
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
  const [menuBox, setMenuBox] = useState<{ top: number; left: number } | null>(null);
  const menuTrigger = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const outcomeRef = useRef<PortfolioMutationOutcome>("unknown");
  const acknowledgementRef = useRef<Record<string, unknown> | null>(null);
  const [confirm, setConfirm] = useState<PersonalSpace | null>(null);
  const [confirmRestore, setConfirmRestore] = useState<PersonalSpace | null>(null);
  const [renameTarget, setRenameTarget] = useState<PersonalSpace | null>(null);
  const [renameValue, setRenameValue] = useState("");
  const [renameNotice, setRenameNotice] = useState("");
  const requestSeq = useRef(0);

  useEffect(() => subscribeOpenPreparationBusy(setCreating), []);

  useEffect(() => {
    const open = Boolean(confirm || confirmRestore || renameTarget);
    if (!open) return;
    const root = dialogRef.current;
    const previous = menuTrigger.current ?? (document.activeElement as HTMLElement | null);
    const items = () =>
      root
        ? [...root.querySelectorAll<HTMLElement>("button, a, input, select, textarea")].filter((item) => !item.hasAttribute("disabled"))
        : [];
    items()[0]?.focus();
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        if (!blocked.current) {
          setConfirm(null);
          setConfirmRestore(null);
          setRenameTarget(null);
        }
        return;
      }
      if (event.key !== "Tab" || !root) return;
      const focusable = items();
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      previous?.focus();
    };
  }, [confirm, confirmRestore, renameTarget]);

  useEffect(() => {
    if (!menu) return;
    menuRef.current?.querySelector<HTMLElement>('[role="menuitem"]:not([disabled])')?.focus();
  }, [menu]);

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
    effect: OwnerEffect,
    knownMessage: string,
  ) {
    const follow = portfolioMutationFollowUp({ outcome, reread });
    const settledKind = intentionRef.current?.kind;
    blocked.current = follow.blockFurtherMutations;
    setHeld(follow.blockFurtherMutations);
    if (!follow.blockFurtherMutations) intentionRef.current = null;
    if (follow.uncertain) {
      setUncertain(
        reread === "failed"
          ? "Résultat incertain. La relecture a échoué et l'action n'a pas été relancée."
          : "Résultat incertain. L'action n'est pas relancée.",
      );
      return;
    }
    setUncertain("");
    if (follow.blockFurtherMutations) {
      setNotice(knownMessage);
      return;
    }
    if (outcome === "conflict") {
      setNotice(knownMessage);
      return;
    }
    if (effect === "absent") {
      setNotice("Cet espace n'est plus accessible. La modification n'est pas confirmée.");
      return;
    }
    if (effect === "unchanged") {
      setNotice(settledKind === "rename" ? "Le nom est déjà celui-ci." : "L'espace n'a pas changé de place.");
      return;
    }
    if (outcome === "confirmed" && effect === "confirmed") {
      setNotice(settledKind === "order" ? "Ordre enregistré." : settledKind === "rename" ? "Nom enregistré." : "");
      return;
    }
    if (outcome === "confirmed") {
      setNotice("L'état relu diffère de la modification demandée.");
      return;
    }
    setNotice("L'état a été relu. L'effet de la modification n'est pas confirmé.");
  }

  async function readTargetedRecord(
    type: PersonalSpace["spaceType"],
    id: string,
  ): Promise<OwnerSpaceRecord | "absent" | null> {
    const response = await fetch(`/api/portfolio/spaces/${type}/${id}`);
    if (response.status === 404) return "absent";
    if (!response.ok) return null;
    const body = await response.json().catch(() => null);
    return ownerSpaceRecord(body, { spaceType: type, id });
  }

  async function probeIntention(
    intention: PortfolioIntention,
    outcome: PortfolioMutationOutcome,
    acknowledgement: Record<string, unknown> | null,
  ): Promise<{ reread: PortfolioReread; effect: OwnerEffect; record: OwnerSpaceRecord | null }> {
    try {
      const ids = [
        { type: intention.spaceType, id: intention.spaceId },
        { type: intention.beforeSpaceType, id: intention.beforeSpaceId },
      ].filter((item): item is { type: PersonalSpace["spaceType"]; id: string } => Boolean(item.type && item.id));
      let records: Array<OwnerSpaceRecord | "absent"> = [];
      if (intention.kind !== "preference") {
        if (ids.length === 0) return { reread: "failed", effect: "unproven", record: null };
        const reads = await Promise.all(ids.map((item) => readTargetedRecord(item.type, item.id)));
        if (reads.some((item) => item === null)) return { reread: "failed", effect: "unproven", record: null };
        records = reads.filter((item): item is OwnerSpaceRecord | "absent" => item !== null);
      }
      const refreshed = await loadRef.current();
      if (!refreshed) return { reread: "failed", effect: "unproven", record: null };
      const effect = reconcileOwnerEffect({
        intention,
        outcome,
        acknowledgement,
        records,
        board: refreshed,
      });
      const primary = records[0];
      return {
        reread: effect === "unproven" ? "failed" : "reviewed",
        effect,
        record: primary && primary !== "absent" ? primary : null,
      };
    } catch {
      return { reread: "failed", effect: "unproven", record: null };
    }
  }

  async function mutate(path: string, method: string, payload: Record<string, unknown>, intention: PortfolioIntention) {
    if (busy.current || blocked.current) return;
    busy.current = true;
    intentionRef.current = intention;
    setPending(path);
    setUncertain("");
    setNotice("");
    let retainRename = false;
    try {
      const response = await fetch(path, {
        method,
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = (await response.json().catch(() => ({}))) as Record<string, unknown>;
      let outcome = classifyPortfolioResponse(response.status, body, intention.kind);
      if (outcome === "confirmed" && !correlatedAcknowledgement(intention, body)) outcome = "unknown";
      outcomeRef.current = outcome;
      acknowledgementRef.current = body;
      if (outcome === "refused") {
        settleMutation("refused", "not-attempted", "current", "");
        const message = typeof body.message === "string" ? body.message : typeof body.error === "string" ? body.error : "La modification n'a pas abouti.";
        setNotice(message);
        if (intention.kind === "rename") {
          retainRename = true;
          setRenameNotice(message);
        }
        return;
      }
      const probed = await probeIntention(intention, outcome, body);
      if (intention.kind === "rename" && probed.effect !== "confirmed" && probed.effect !== "unchanged") {
        retainRename = true;
        if (probed.record && typeof probed.record.nameRevision === "number") {
          const currentLabel = probed.record.displayLabel;
          setRenameTarget((current) => current ? {
            ...current,
            nameRevision: probed.record?.nameRevision ?? current.nameRevision,
            label: currentLabel ?? current.label,
          } : current);
        }
        const message = outcome === "conflict"
          ? (typeof body.message === "string" ? body.message : "Le nom a changé. La valeur actuelle est affichée ; confirmez à nouveau.")
          : "Le résultat n'est pas confirmé. La valeur actuelle a été relue ; aucune nouvelle tentative n'est envoyée.";
        setRenameNotice(message);
      }
      if (outcome === "confirmed" && probed.effect === "confirmed") notifyPortfolioChanged();
      settleMutation(
        outcome,
        probed.reread,
        probed.effect,
        outcome === "conflict"
          ? (typeof body.message === "string" ? body.message : "Conflit : une autre modification a été enregistrée. Relisez avant de recommencer.")
          : "La modification est enregistrée, mais le portefeuille n'a pas pu être relu.",
      );
    } catch {
      outcomeRef.current = "unknown";
      acknowledgementRef.current = null;
      const current = intentionRef.current;
      const probed = current
        ? await probeIntention(current, "unknown", null)
        : { reread: "failed" as const, effect: "unproven" as const, record: null };
      if (current?.kind === "rename") {
        retainRename = true;
        if (probed.record && typeof probed.record.nameRevision === "number") {
          setRenameTarget((open) => open ? {
            ...open,
            nameRevision: probed.record?.nameRevision ?? open.nameRevision,
            label: probed.record?.displayLabel ?? open.label,
          } : open);
        }
        setRenameNotice("Le résultat n'est pas confirmé. La valeur actuelle a été relue ; aucune nouvelle tentative n'est envoyée.");
      }
      settleMutation("unknown", probed.reread, probed.effect, "");
    } finally {
      busy.current = false;
      setPending("");
      setConfirm(null);
      setConfirmRestore(null);
      if (!retainRename) {
        setRenameTarget(null);
        setRenameNotice("");
      }
    }
  }

  async function rereadHeld() {
    const intention = intentionRef.current;
    if (!intention) return;
    const probed = await probeIntention(intention, outcomeRef.current, acknowledgementRef.current);
    settleMutation(
      outcomeRef.current,
      probed.reread,
      probed.effect,
      outcomeRef.current === "conflict"
        ? "Conflit : une autre modification a été enregistrée. Relisez avant de recommencer."
        : "La modification est enregistrée, mais le portefeuille n'a pas pu être relu.",
    );
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

  function openMenu(spaceId: string, button: HTMLButtonElement) {
    if (menu === spaceId) {
      setMenu(null);
      setMenuBox(null);
      return;
    }
    const rect = button.getBoundingClientRect();
    const width = 298;
    const height = 359;
    const left = Math.max(8, Math.min(rect.right - width, window.innerWidth - width - 8));
    const top = rect.bottom + 8 + height > window.innerHeight ? Math.max(8, rect.top - height - 8) : rect.bottom + 8;
    menuTrigger.current = button;
    setMenuBox({ top, left });
    setMenu(spaceId);
  }

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
          }, {
            kind: "order",
            spaceType: spaceType as PersonalSpace["spaceType"],
            spaceId,
            beforeSpaceType: space.spaceType,
            beforeSpaceId: space.id,
            knownVersion: board!.preferences.version,
            knownPosition: board!.items.find((item) => item.spaceType === spaceType && item.id === spaceId)?.customPosition,
          });
        }}
        data-testid={space.spaceType === "project" ? `open-project-${space.id}` : `resume-prep-${space.id}`}
      >
        {board!.preferences.view === "grid" ? (
          <>
            <div className="personal-portfolio-tile-head">
              <span className="personal-portfolio-monogram" aria-hidden="true">{(space.label.trim()[0] || "?").toUpperCase()}</span>
              <a href={hrefFor(space)} onClick={() => notePersonalSpaceEntry(space.spaceType, space.id)}>{space.label}</a>
              <span className="personal-portfolio-grow" />
              {space.favorite ? <Mark name="star" /> : null}
              <button type="button" aria-expanded={menu === space.id} aria-haspopup="menu" aria-label="Actions de l'espace" onClick={(event) => { event.preventDefault(); event.stopPropagation(); openMenu(space.id, event.currentTarget); }}><Mark name="more" /></button>
            </div>
            <p>{space.spaceType === "project" ? "Projet" : "Préparation"} · {activity}</p>
          </>
        ) : (
          <>
            <div className="personal-portfolio-identity">
              <span className="personal-portfolio-monogram" aria-hidden="true">{(space.label.trim()[0] || "?").toUpperCase()}</span>
              <a href={hrefFor(space)} onClick={() => notePersonalSpaceEntry(space.spaceType, space.id)}>{space.label}</a>
              {space.favorite ? <Mark name="star" /> : null}
            </div>
            <span className="personal-portfolio-meta">{space.spaceType === "project" ? "Projet" : "Préparation"}</span>
            <span className="personal-portfolio-meta">{activity}</span>
            <span className="personal-portfolio-actions">
              <button type="button" aria-expanded={menu === space.id} aria-haspopup="menu" aria-label="Actions de l'espace" onClick={(event) => { event.preventDefault(); openMenu(space.id, event.currentTarget); }}><Mark name="more" /></button>
            </span>
          </>
        )}
        {menu === space.id && menuBox ? (
          <div
            ref={menuRef}
            className="personal-portfolio-menu"
            role="menu"
            style={{ top: menuBox.top, left: menuBox.left }}
            onKeyDown={(event) => {
              const items = [...event.currentTarget.querySelectorAll<HTMLElement>('[role="menuitem"]:not([disabled])')];
              if (event.key === "Escape") {
                event.preventDefault();
                setMenu(null);
                setMenuBox(null);
                menuTrigger.current?.focus();
                return;
              }
              if (event.key === "Tab") {
                setMenu(null);
                setMenuBox(null);
                return;
              }
              if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
              event.preventDefault();
              if (items.length === 0) return;
              const index = items.indexOf(document.activeElement as HTMLElement);
              const next = event.key === "ArrowDown" ? (index + 1) % items.length : (index - 1 + items.length) % items.length;
              items[next]?.focus();
            }}
          >
            <p>{space.label}</p>
            <small>{space.spaceType === "project" ? "Projet" : "Préparation"}</small>
            <div className="personal-portfolio-menu-rule" role="separator" />
            <a role="menuitem" href={hrefFor(space)} onClick={() => notePersonalSpaceEntry(space.spaceType, space.id)}><Mark name="arrow" />{space.spaceType === "project" ? "Ouvrir le projet" : "Reprendre avec Nora"}</a>
            <button type="button" role="menuitem" disabled={locked} onClick={() => { setRenameTarget(space); setRenameValue(space.label); setRenameNotice(""); setMenu(null); }}><Mark name="edit" />Renommer</button>
            <button type="button" role="menuitem" disabled={locked} onClick={() => void mutate(`/api/portfolio/spaces/${space.spaceType}/${space.id}/favorite`, "PUT", { favorite: !space.favorite, expectedVersion: space.rowVersion }, { kind: "favorite", spaceType: space.spaceType, spaceId: space.id, desired: !space.favorite, knownVersion: space.rowVersion })}><Mark name="star" />{space.favorite ? "Retirer des favoris" : "Ajouter aux favoris"}</button>
            <button type="button" role="menuitem" aria-label="Monter" disabled={locked || !canReorder} title={canReorder ? undefined : "Disponible lorsque l'ordre personnalisé est le tri enregistré, sans filtre."} onClick={() => { const neighbor = board!.items[board!.items.findIndex((item) => item.id === space.id && item.spaceType === space.spaceType) - 1]; void mutate("/api/portfolio/order", "POST", { spaceType: space.spaceType, spaceId: space.id, direction: "up", expectedVersion: board!.preferences.version, context: orderContext }, { kind: "order", spaceType: space.spaceType, spaceId: space.id, direction: "up", beforeSpaceType: neighbor?.spaceType, beforeSpaceId: neighbor?.id, knownVersion: board!.preferences.version, knownPosition: space.customPosition }); }}><Mark name="grip" />Monter</button>
            <button type="button" role="menuitem" aria-label="Descendre" disabled={locked || !canReorder} title={canReorder ? undefined : "Disponible lorsque l'ordre personnalisé est le tri enregistré, sans filtre."} onClick={() => { const neighbor = board!.items[board!.items.findIndex((item) => item.id === space.id && item.spaceType === space.spaceType) + 1]; void mutate("/api/portfolio/order", "POST", { spaceType: space.spaceType, spaceId: space.id, direction: "down", expectedVersion: board!.preferences.version, context: orderContext }, { kind: "order", spaceType: space.spaceType, spaceId: space.id, direction: "down", beforeSpaceType: neighbor?.spaceType, beforeSpaceId: neighbor?.id, knownVersion: board!.preferences.version, knownPosition: space.customPosition }); }}><Mark name="grip" />Descendre</button>
            <button type="button" role="menuitem" disabled={locked} onClick={() => { if (scope === "archive") setConfirmRestore(space); else setConfirm(space); }}><Mark name="archive" />{scope === "archive" ? "Restaurer" : "Archiver"}</button>
            <button type="button" role="menuitem" disabled title="La suppression n'est pas disponible."><Mark name="trash" />Supprimer</button>
          </div>
        ) : null}
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
        <button type="button" className="personal-portfolio-primary" id="nouvelle-preparation" data-testid="portfolio-new-prep" disabled={creating} onClick={() => void startPreparation()}>
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
      <div className="personal-portfolio-separator" />

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

      <section className="personal-portfolio-library" aria-label="Mes espaces">
        <h2>Mes espaces</h2>
      <div className="personal-portfolio-tools">
        <div className="personal-portfolio-filters" role="group" aria-label="Filtres">
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
        <div className="personal-portfolio-commands">
        <label className="personal-portfolio-search">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M15 9.16667C15 12.3883 12.3883 15 9.16667 15C5.94501 15 3.33333 12.3883 3.33333 9.16667C3.33333 5.94501 5.94501 3.33333 9.16667 3.33333C12.3883 3.33333 15 5.94501 15 9.16667Z" stroke="#A5B1C5" strokeWidth="1.41667" />
            <path d="M16.6667 16.6667L13.3333 13.3333" stroke="#A5B1C5" strokeWidth="1.41667" strokeLinecap="round" />
          </svg>
          <input aria-label="Filtrer les espaces" placeholder="Filtrer les espaces…" value={query} onChange={(event) => setQuery(event.target.value)} data-testid="portfolio-search" />
        </label>
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
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                {key === "list" ? <path d="M3.33 5H16.67M3.33 10H16.67M3.33 15H16.67" stroke="currentColor" strokeWidth="1.42" strokeLinecap="round" /> : null}
                {key === "grid" ? <path d="M3.3 2.5h4.2v4.8H3.3zM12.5 2.5h4.2v4.8h-4.2zM3.3 11.7h4.2V16.5H3.3zM12.5 11.7h4.2V16.5h-4.2z" stroke="currentColor" strokeWidth="1.42" /> : null}
                {key === "grouped" ? <path d="M3.3 5H8.3M3.3 10H16.7M3.3 15H16.7M12.5 4.2H16.7" stroke="currentColor" strokeWidth="1.42" strokeLinecap="round" /> : null}
              </svg>
            </button>
          ))}
        </div>
        </div>
      </div>
        <div className="personal-portfolio-collection">
      {scope === "archive" ? (
        <p className="personal-portfolio-status"><button type="button" onClick={() => setScope("current")}>Retour aux espaces</button></p>
      ) : null}
        {board.items.length === 0 ? (
          <p data-testid="portfolio-empty">{query ? "Aucun résultat." : scope === "archive" ? "Aucune archive." : filter === "favorites" ? "Aucun favori." : "Aucun espace pour le moment."}</p>
        ) : board.preferences.view === "grid" ? (
          <div className="personal-portfolio-grid">{board.items.map(renderSpace)}</div>
        ) : groups ? (
          groups.map((group) => (
            <div key={group.type} className="personal-portfolio-group">
              <h3><svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M5 7.5 10 12.5 15 7.5" stroke="#A5B1C5" strokeWidth="1.4" strokeLinecap="round" /></svg>{group.type === "project" ? `Projets · ${board.groups.project}` : `Préparations · ${board.groups.preparation}`}</h3>
              {group.items.map(renderSpace)}
            </div>
          ))
        ) : (
          <div>
            <div className="personal-portfolio-columns"><span>NOM</span><span>TYPE</span><span>ACTIVITÉ</span><span /></div>
            {board.items.map(renderSpace)}
          </div>
        )}
        <div className="personal-portfolio-foot">
          <p>{board.items.length} sur {board.filteredTotal} espaces</p>
          {!expanded && board.filteredTotal > board.items.length ? (
            <button type="button" className="personal-portfolio-secondary" onClick={() => setExpanded(true)}>Voir tous les espaces</button>
          ) : null}
          {expanded ? <button type="button" className="personal-portfolio-secondary" onClick={() => setExpanded(false)}>Réduire la liste</button> : null}
        </div>
        {expanded && board.nextCursor ? (
          <button type="button" data-testid="portfolio-load-more" onClick={() => void load(board.nextCursor)}>Charger la suite</button>
        ) : null}
        </div>
      </section>

      {confirm ? (
        <div className="personal-portfolio-overlay" onClick={() => { if (!locked) setConfirm(null); }}>
          <div ref={dialogRef} className="personal-portfolio-modal" role="dialog" aria-modal="true" aria-label="Confirmer l'archivage" onClick={(event) => event.stopPropagation()}>
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
          <div ref={dialogRef} className="personal-portfolio-modal" role="dialog" aria-modal="true" aria-label="Confirmer la restauration" onClick={(event) => event.stopPropagation()}>
            <h2>Restaurer {confirmRestore.label} ?</h2>
            <p>Le même espace revient dans le portefeuille courant, avec son organisation personnelle.</p>
            <div className="personal-portfolio-modal-actions">
              <button type="button" onClick={() => setConfirmRestore(null)}>Annuler</button>
              <button type="button" className="personal-portfolio-primary" disabled={locked} onClick={() => void mutate(`/api/portfolio/spaces/${confirmRestore.spaceType}/${confirmRestore.id}/archive`, "PUT", { archived: false, confirm: true, expectedVersion: confirmRestore.rowVersion }, { kind: "archive", spaceType: confirmRestore.spaceType, spaceId: confirmRestore.id, desired: false, knownVersion: confirmRestore.rowVersion })}>Restaurer</button>
            </div>
          </div>
        </div>
      ) : null}
      {renameTarget ? (
        <div className="personal-portfolio-overlay" onClick={() => { if (!locked) setRenameTarget(null); }}>
          <div ref={dialogRef} className="personal-portfolio-modal" role="dialog" aria-modal="true" aria-label={renameTarget.spaceType === "preparation" ? "Renommer la préparation" : "Renommer le projet"} data-testid="portfolio-rename" onClick={(event) => event.stopPropagation()}>
            <h2>{renameTarget.spaceType === "preparation" ? "Renommer la préparation" : "Renommer le projet"}</h2>
            <p>{renameTarget.spaceType === "preparation" ? "Le titre sert à retrouver votre échange. Il ne modifie pas le nom du futur projet." : "Le nom officiel change. L’identité du projet, son fil et ses ressources restent les mêmes."}</p>
            <label className="personal-portfolio-rename-field">
              <span>{renameTarget.spaceType === "preparation" ? "TITRE DE LA PRÉPARATION" : "NOM DU PROJET"}</span>
              <input data-testid="portfolio-rename-input" value={renameValue} onChange={(event) => setRenameValue(event.target.value)} />
            </label>
            {renameTarget.spaceType === "preparation" ? <p>Un titre manuel ne sera plus écrasé par Nora.</p> : null}
            {renameNotice ? <p role="alert" data-testid="portfolio-rename-message">{renameNotice}</p> : null}
            {renameNotice && renameTarget.label !== renameValue.trim() ? <p>Valeur actuelle : {renameTarget.label}</p> : null}
            <div className="personal-portfolio-modal-actions">
              <button type="button" onClick={() => { if (!locked) { setRenameTarget(null); setRenameNotice(""); } }}>Annuler</button>
              <button type="button" className="personal-portfolio-primary" disabled={locked || !renameValue.trim()} onClick={() => {
                const intentionKey = crypto.randomUUID();
                const path = renameTarget.spaceType === "preparation"
                  ? `/api/preparations/${renameTarget.id}/title`
                  : `/api/projects/${renameTarget.id}/name`;
                const payload = renameTarget.spaceType === "preparation"
                  ? { title: renameValue, expectedRevision: renameTarget.nameRevision, intentionKey }
                  : { name: renameValue, expectedRevision: renameTarget.nameRevision, intentionKey };
                void mutate(path, "PUT", payload, {
                  kind: "rename",
                  spaceType: renameTarget.spaceType,
                  spaceId: renameTarget.id,
                  knownVersion: renameTarget.nameRevision,
                  intentionKey,
                  requestedLabel: renameValue,
                });
              }}>Enregistrer</button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
