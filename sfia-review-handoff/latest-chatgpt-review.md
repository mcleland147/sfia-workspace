# SFIA Studio Next — Review Pack Full
# Cycle 8 — Delivery / Ensemble 05 — Travail avec Nora
# Generated: 2026-11-17T11:50:48

## 1. Date et heure
- Cycle: 2026-11-17 — GO MORRIS DELIVERY LOCAL DEV
- Profile: CRITICAL / EVOL / Cycle 8 Delivery
- Macro-lot: Ensemble 05 — Travail avec Nora

## 2. Local Git Truth Check
| Check | Value |
|---|---|
| Workspace | `/Users/morris/Projects/sfia-workspace-next-ml4d-ux003-entry-20261116` |
| Branch | `feat/next-ml4d-project-space-20261116` |
| HEAD initial/final (no product commit) | `984d77a36695c2f59ebbc18619e54eeeb43ad94e` |
| Tree baseline | `b92cc822ac67399c6d8753c17dbcce5f4b5b734f` |
| origin/main | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| Docs tip | `99b3622b09005cc789bd167775b3ffb9f6f14375` |
| Dirty | product mods + new files (uncommitted — AUTHORIZED delivery local) |
| Destructive sync | **NONE** |

## 3. Sources Git lues et SHAs
| Source | Ref | Blob |
|---|---|---|
| UX v0.7 | docs@99b3622b | `dc5ef25f53e9b819965fac3981d430e59298825f` |
| Tech v0.2 | docs@99b3622b | `5f38968861f1dbcd546b66da80dbee2a628ba136` |
| Registre v0.14 | docs@99b3622b | `7eabe8ca52764d370e199c50ba97c850cb1bf1eb` |
| Prior qualification handoff | `1f93c421` | `81a5867503b7bd16824a3696b2e7cc7c660b86dc` |

## 4. Figma lu et node IDs
- File `itgvCulInEnFY6DvgIegvP` page `700:38`
- Session MCP `2f762deb-bce4-4bcc-96ac-f724cf2bec34`
- 16 variantes: 700:39, 701:62, 701:105, 701:148, 701:191, 701:234, 701:277, 701:320, 701:363, 701:406, 701:449, 701:492, 701:535, 701:537, 708:98, 708:199

## 5. Contrat visuel extrait (confirmé MCP metadata)
| Observation | Valeur |
|---|---|
| Desktop viewport | 1680×970 |
| Rail | 246 px |
| Conversation nominale | 972×574 ; composer 972×84 ; bottoms 857=857 |
| Split 50/50 | ~668 / 668 hors rail |
| Agrandi | visionneuse 1359 |
| Mobile | 430×932 |

## 6. Contrats M1–M5 respectés
| ID | Respect |
|---|---|
| M1 | `turnProjection` in existing `result_json` ; reload via listTurnProjections |
| M2 | final-only + honest preparing indicator ; activity summary only from observable terminal facts |
| M3 | sessionStorage pilot+project+lane ; versioned ACK clear |
| M4 | local viewer state ; no viewer= URL |
| M5 | **no migration** |

## 7. Architecture as-built
Voir `construction/as-built-ensemble-05-travail-nora-20261117.md`.

Avant: markdown-only thread, no scroll policy, no draft persistence, fixed 968/369, En bref only.
Après: projection D3 additive, scroll CT-01, choices CT-02, composer/draft CT-03, activity V1 CT-04/05, viewer CT-06, shell E04 preserved CT-07.

## 8–10. Fichiers créés (contenu intégral) et modifiés

### CREATED `projects/sfia-studio-next/web/src/domains/conversation/turn-projection.ts`

```
/**
 * Ensemble 05 / M1 — structured D3 turn projection for Nora replies.
 * Stored additively in conversation_turn_commands.result_json (no migration).
 * Never parse markdown to decide mutations; choices are typed here only.
 */

export const TURN_PROJECTION_SCHEMA = "e05-turn-projection-v1" as const;

export type TurnChoiceKind = "continue";

export type TurnChoice = {
  id: string;
  label: string;
  kind: TurnChoiceKind;
  /** Explicit pilot utterance transmitted on click (new D3 turn). */
  transmitText: string;
};

export type TurnReference = {
  kind: "document" | "git" | "external";
  label: string;
  resourceId?: string;
  revisionId?: string;
  href?: string;
  available?: boolean;
};

export type TurnActivitySummary = {
  /** Honest summary of observable facts after terminal commit — never invented mid-flight. */
  kind: "wait" | "sources_consulted" | "interrupted" | "failed" | "uncertain";
  label: string;
  detail?: string;
};

export type TurnProjection = {
  schemaVersion: typeof TURN_PROJECTION_SCHEMA;
  messageId: string | null;
  turnCommandId?: string | null;
  finalized: boolean;
  status: string;
  choices: TurnChoice[];
  references: TurnReference[];
  activity?: TurnActivitySummary | null;
};

export type MessageProjectionView = TurnProjection & {
  /** Actionable only for the latest finalized Nora turn with no later pilot turn. */
  actionable: boolean;
};

/** Build projection from durable turn facts (clarifications → continue choices). */
export function buildTurnProjection(input: {
  messageId: string | null;
  turnCommandId?: string | null;
  status: string;
  finalized: boolean;
  clarifications?: string[] | null;
  toolCallsObserved?: number | null;
  d4CharsReturned?: number | null;
  documentSave?: { documentId?: string; revisionId?: string; status?: string } | null;
}): TurnProjection {
  const choices: TurnChoice[] = [];
  const seen = new Set<string>();
  for (const raw of input.clarifications ?? []) {
    const label = String(raw ?? "").trim();
    if (!label || seen.has(label)) continue;
    seen.add(label);
    const id = `c${choices.length + 1}`;
    choices.push({
      id,
      label: label.length > 120 ? `${label.slice(0, 117)}…` : label,
      kind: "continue",
      transmitText: label,
    });
    if (choices.length >= 6) break;
  }

  const references: TurnReference[] = [];
  if (input.documentSave?.documentId) {
    references.push({
      kind: "document",
      label: "Document du projet",
      resourceId: input.documentSave.documentId,
      revisionId: input.documentSave.revisionId,
      available: input.documentSave.status !== "FAILED",
    });
  }

  let activity: TurnActivitySummary | null = null;
  const status = (input.status ?? "").toUpperCase();
  if (status === "FAILED") {
    activity = { kind: "failed", label: "Réponse interrompue ou en échec" };
  } else if (status === "UNKNOWN") {
    activity = { kind: "uncertain", label: "État de la réponse encore incertain" };
  } else if ((input.toolCallsObserved ?? 0) > 0 || (input.d4CharsReturned ?? 0) > 0) {
    activity = {
      kind: "sources_consulted",
      label: "Sources consultées pour cette réponse",
      detail:
        (input.toolCallsObserved ?? 0) > 0
          ? `${input.toolCallsObserved} consultation(s) observée(s)`
          : undefined,
    };
  }

  return {
    schemaVersion: TURN_PROJECTION_SCHEMA,
    messageId: input.messageId,
    turnCommandId: input.turnCommandId ?? null,
    finalized: input.finalized,
    status: input.status,
    choices,
    references,
    activity,
  };
}

export function parseTurnProjection(raw: unknown): TurnProjection | null {
  if (!raw || typeof raw !== "object") return null;
  const o = raw as Record<string, unknown>;
  if (o.schemaVersion !== TURN_PROJECTION_SCHEMA) return null;
  if (!Array.isArray(o.choices)) return null;
  return {
    schemaVersion: TURN_PROJECTION_SCHEMA,
    messageId: typeof o.messageId === "string" ? o.messageId : null,
    turnCommandId: typeof o.turnCommandId === "string" ? o.turnCommandId : null,
    finalized: Boolean(o.finalized),
    status: typeof o.status === "string" ? o.status : "UNKNOWN",
    choices: (o.choices as TurnChoice[]).filter(
      (c) =>
        c &&
        typeof c.id === "string" &&
        typeof c.label === "string" &&
        c.kind === "continue" &&
        typeof c.transmitText === "string",
    ),
    references: Array.isArray(o.references) ? (o.references as TurnReference[]) : [],
    activity: (o.activity as TurnActivitySummary | null | undefined) ?? null,
  };
}

export function extractTurnProjectionFromResultJson(
  resultJson: string | null | undefined,
): TurnProjection | null {
  if (!resultJson) return null;
  try {
    const parsed = JSON.parse(resultJson) as Record<string, unknown>;
    return parseTurnProjection(parsed.turnProjection);
  } catch {
    return null;
  }
}

/**
 * Mark which projection groups remain actionable after reload / new pilot turn.
 * Historical choices stay visible but non-actionable.
 */
export function resolveActionableProjections(input: {
  messages: Array<{ id: string; role: string }>;
  projections: TurnProjection[];
  /** When true (UNKNOWN send / reconcile), suspend actionable choices. */
  suspendActions?: boolean;
}): MessageProjectionView[] {
  const lastAssistantId = [...input.messages]
    .reverse()
    .find((m) => m.role === "assistant")?.id;
  const lastAssistantIdx = lastAssistantId
    ? input.messages.findIndex((m) => m.id === lastAssistantId)
    : -1;
  const hasLaterPilot =
    lastAssistantIdx >= 0 &&
    input.messages.slice(lastAssistantIdx + 1).some((m) => m.role === "user");

  return input.projections.map((p) => {
    const isLatest =
      Boolean(p.messageId) && p.messageId === lastAssistantId && !hasLaterPilot;
    const actionable =
      !input.suspendActions &&
      p.finalized &&
      isLatest &&
      (p.status ?? "").toUpperCase() !== "UNKNOWN" &&
      (p.status ?? "").toUpperCase() !== "FAILED" &&
      p.choices.length > 0;
    return { ...p, actionable };
  });
}

```

### CREATED `projects/sfia-studio-next/web/src/domains/conversation/composer-draft.ts`

```
/**
 * Ensemble 05 / M3 — composer draft in sessionStorage (tab-scoped).
 * Partition: pilot + project + lane. No server sync. No cross-device recovery.
 */

export type ComposerDraftRecord = {
  schemaVersion: "e05-composer-draft-v1";
  pilotId: string;
  projectId: string;
  lane: string;
  text: string;
  /** Monotonic local version — ACK may clear only if versions still match. */
  version: number;
  /** Version that was submitted; late ACK clears only when current === sent. */
  sentVersion: number | null;
  updatedAt: string;
};

export function studioClientLane(): string {
  if (typeof window === "undefined") return "ssr";
  const port = window.location.port || (window.location.protocol === "https:" ? "443" : "80");
  // ENV-01: DEV :3100 vs RECETTE :3200 must not share drafts.
  return `host:${window.location.hostname}:${port}`;
}

export function composerDraftStorageKey(input: {
  pilotId: string;
  projectId: string;
  lane?: string;
}): string {
  const lane = input.lane ?? studioClientLane();
  return `sfia.travail.draft:v1:${lane}:${input.pilotId}:${input.projectId}`;
}

export function readComposerDraft(input: {
  pilotId: string;
  projectId: string;
  lane?: string;
}): ComposerDraftRecord | null {
  if (typeof sessionStorage === "undefined") return null;
  if (!input.pilotId || !input.projectId) return null;
  try {
    const raw = sessionStorage.getItem(composerDraftStorageKey(input));
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ComposerDraftRecord;
    if (parsed.schemaVersion !== "e05-composer-draft-v1") return null;
    if (parsed.pilotId !== input.pilotId || parsed.projectId !== input.projectId) return null;
    const lane = input.lane ?? studioClientLane();
    if (parsed.lane !== lane) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function writeComposerDraft(record: ComposerDraftRecord): void {
  if (typeof sessionStorage === "undefined") return;
  sessionStorage.setItem(
    composerDraftStorageKey({
      pilotId: record.pilotId,
      projectId: record.projectId,
      lane: record.lane,
    }),
    JSON.stringify(record),
  );
}

export function clearComposerDraft(input: {
  pilotId: string;
  projectId: string;
  lane?: string;
}): void {
  if (typeof sessionStorage === "undefined") return;
  sessionStorage.removeItem(composerDraftStorageKey(input));
}

/**
 * Clear after successful send only when the composer still holds the sent version.
 * A newer edit (version > sentVersion) must survive a late ACK.
 */
export function clearDraftAfterAck(input: {
  pilotId: string;
  projectId: string;
  sentVersion: number;
  currentVersion: number;
  lane?: string;
}): boolean {
  if (input.currentVersion !== input.sentVersion) return false;
  clearComposerDraft(input);
  return true;
}

export function purgeComposerDraftsForPilot(pilotId: string): void {
  if (typeof sessionStorage === "undefined") return;
  const prefix = "sfia.travail.draft:v1:";
  const keys: string[] = [];
  for (let i = 0; i < sessionStorage.length; i += 1) {
    const k = sessionStorage.key(i);
    if (k && k.startsWith(prefix) && k.includes(`:${pilotId}:`)) keys.push(k);
  }
  for (const k of keys) sessionStorage.removeItem(k);
}

```

### CREATED `projects/sfia-studio-next/web/src/hooks/useNoraThreadScroll.ts`

```
"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

const NEAR_BOTTOM_PX = 72;

/**
 * CT-01 / UX-002 — default to last message; preserve voluntary re-read position;
 * announce new content when Nora answers while the pilot is reading history.
 */
export function useNoraThreadScroll(deps: {
  messageCount: number;
  lastMessageId: string | null;
  activityPreparing: boolean;
  /** Bumps when pilot voluntarily sends — force stick to bottom. */
  forceStickToken: number;
}) {
  const threadRef = useRef<HTMLDivElement | null>(null);
  const stickToBottomRef = useRef(true);
  const primedRef = useRef(false);
  const prevLastIdRef = useRef<string | null>(null);
  const [newBelow, setNewBelow] = useState(false);

  const isNearBottom = useCallback(() => {
    const el = threadRef.current;
    if (!el) return true;
    return el.scrollHeight - el.scrollTop - el.clientHeight <= NEAR_BOTTOM_PX;
  }, []);

  const scrollToBottom = useCallback((behavior: ScrollBehavior = "auto") => {
    const el = threadRef.current;
    if (!el) return;
    const apply = () => {
      el.scrollTop = el.scrollHeight;
      if (behavior === "smooth") {
        el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
      }
    };
    apply();
    // Second pass after layout (new bubbles / activity row).
    requestAnimationFrame(() => {
      apply();
      requestAnimationFrame(apply);
    });
    stickToBottomRef.current = true;
    setNewBelow(false);
  }, []);

  const onScroll = useCallback(() => {
    const near = isNearBottom();
    stickToBottomRef.current = near;
    if (near) setNewBelow(false);
  }, [isNearBottom]);

  // Initial entry / refresh / return: show last message once messages exist.
  useLayoutEffect(() => {
    if (deps.messageCount === 0) return;
    if (!primedRef.current) {
      scrollToBottom("auto");
      primedRef.current = true;
      prevLastIdRef.current = deps.lastMessageId;
      return;
    }
  }, [deps.messageCount, deps.lastMessageId, scrollToBottom]);

  // Reset priming when thread identity effectively reloads (empty → filled again).
  useEffect(() => {
    if (deps.messageCount === 0) {
      primedRef.current = false;
      prevLastIdRef.current = null;
      setNewBelow(false);
    }
  }, [deps.messageCount]);

  // New messages / activity: stick only when already near bottom or forced by send.
  useLayoutEffect(() => {
    const lastChanged = deps.lastMessageId !== prevLastIdRef.current;
    if (lastChanged) {
      if (stickToBottomRef.current) {
        scrollToBottom("auto");
      } else if (deps.lastMessageId) {
        setNewBelow(true);
      }
      prevLastIdRef.current = deps.lastMessageId;
      return;
    }
    if (deps.activityPreparing && stickToBottomRef.current) {
      scrollToBottom("auto");
    }
  }, [deps.lastMessageId, deps.activityPreparing, scrollToBottom]);

  useLayoutEffect(() => {
    if (deps.forceStickToken <= 0) return;
    stickToBottomRef.current = true;
    scrollToBottom("smooth");
  }, [deps.forceStickToken, scrollToBottom]);

  return {
    threadRef,
    onScroll,
    scrollToBottom,
    newBelow,
    stickToBottom: stickToBottomRef,
  };
}

```

### CREATED `projects/sfia-studio-next/web/src/components/figma/TravailViewer.tsx`

```
"use client";

import { SafeMarkdown } from "@/components/SafeMarkdown";

export type TravailViewerResource =
  | {
      kind: "document";
      documentId: string;
      title: string;
      revisionId?: string | null;
      revisionNumber?: number | null;
      markdown: string | null;
      available: boolean;
      unavailableReason?: string;
    }
  | {
      kind: "git";
      title: string;
      path?: string | null;
      ref?: string | null;
      commit?: string | null;
      content: string | null;
      available: boolean;
      unavailableReason?: string;
      href?: string | null;
    };

export function TravailViewer(props: {
  resource: TravailViewerResource;
  enlarged: boolean;
  onEnlarge: () => void;
  onReduce: () => void;
  onClose: () => void;
  onOpenInDocuments?: () => void;
}) {
  const { resource } = props;
  const title =
    resource.kind === "document" ? resource.title : resource.title || "Source Git";
  const kicker =
    resource.kind === "document"
      ? "Visionneuse · lecture seule"
      : "Visionneuse · source Git";

  return (
    <div
      className="fig-travail-viewer"
      data-testid="travail-viewer"
      data-viewer-kind={resource.kind}
      data-viewer-enlarged={props.enlarged ? "1" : "0"}
    >
      <header className="fig-travail-viewer-head">
        <div>
          <p className="fig-kicker !mb-0">{kicker}</p>
          <h2 className="fig-inspector-title" data-testid="travail-viewer-title">
            {title}
          </h2>
          {resource.kind === "document" && resource.revisionNumber != null ? (
            <p className="fig-travail-viewer-meta">
              Version {resource.revisionNumber}
              {resource.revisionId ? ` · ${resource.revisionId.slice(0, 8)}` : ""}
            </p>
          ) : null}
          {resource.kind === "git" ? (
            <p className="fig-travail-viewer-meta">
              {[resource.path, resource.ref, resource.commit?.slice(0, 8)]
                .filter(Boolean)
                .join(" · ") || "Provenance partielle"}
            </p>
          ) : null}
        </div>
        <div className="fig-travail-viewer-actions">
          {props.enlarged ? (
            <button
              type="button"
              className="btn secondary"
              data-testid="travail-viewer-reduce"
              onClick={props.onReduce}
            >
              Réduire
            </button>
          ) : (
            <button
              type="button"
              className="btn secondary"
              data-testid="travail-viewer-enlarge"
              onClick={props.onEnlarge}
            >
              Agrandir
            </button>
          )}
          {resource.kind === "document" && props.onOpenInDocuments ? (
            <button
              type="button"
              className="btn secondary"
              data-testid="travail-viewer-open-documents"
              onClick={props.onOpenInDocuments}
              disabled={!resource.available}
            >
              Ouvrir dans Documents
            </button>
          ) : null}
          <button
            type="button"
            className="btn secondary"
            data-testid="travail-viewer-close"
            onClick={props.onClose}
          >
            Fermer
          </button>
        </div>
      </header>

      <div className="fig-travail-viewer-body" data-testid="travail-viewer-body">
        {!resource.available ? (
          <div className="fig-alert" role="alert" data-testid="travail-viewer-unavailable">
            {resource.unavailableReason ??
              "Source indisponible ou droits insuffisants — aucun extrait inventé."}
            {resource.kind === "git" && resource.href ? (
              <p className="mt-2">
                <a href={resource.href} target="_blank" rel="noreferrer">
                  Ouvrir la référence externe
                </a>
              </p>
            ) : null}
          </div>
        ) : resource.kind === "document" ? (
          resource.markdown ? (
            <SafeMarkdown content={resource.markdown} />
          ) : (
            <p className="fig-inspector-card-body">Document sans contenu lisible.</p>
          )
        ) : resource.content ? (
          <pre className="fig-travail-viewer-pre">{resource.content}</pre>
        ) : (
          <p className="fig-inspector-card-body">Aperçu Git vide.</p>
        )}
      </div>
    </div>
  );
}

```

### CREATED `projects/sfia-studio-next/web/tests/unit/ensemble05-turn-projection.test.ts`

```
import { describe, expect, it } from "vitest";
import {
  buildTurnProjection,
  parseTurnProjection,
  resolveActionableProjections,
  TURN_PROJECTION_SCHEMA,
} from "@/domains/conversation/turn-projection";
import {
  clearDraftAfterAck,
  composerDraftStorageKey,
  readComposerDraft,
  writeComposerDraft,
} from "@/domains/conversation/composer-draft";

describe("ensemble05 turn projection (M1)", () => {
  it("builds continue choices from clarifications without markdown parsing", () => {
    const p = buildTurnProjection({
      messageId: "msg-a",
      status: "COMPLETE",
      finalized: true,
      clarifications: ["Approfondir B", "Comparer A et C", "Approfondir B"],
      toolCallsObserved: 2,
    });
    expect(p.schemaVersion).toBe(TURN_PROJECTION_SCHEMA);
    expect(p.choices).toHaveLength(2);
    expect(p.choices[0]?.transmitText).toBe("Approfondir B");
    expect(p.activity?.kind).toBe("sources_consulted");
  });

  it("marks only the latest finalized Nora group actionable", () => {
    const messages = [
      { id: "u1", role: "user" },
      { id: "a1", role: "assistant" },
      { id: "u2", role: "user" },
      { id: "a2", role: "assistant" },
    ];
    const projections = [
      buildTurnProjection({
        messageId: "a1",
        status: "COMPLETE",
        finalized: true,
        clarifications: ["Ancien"],
      }),
      buildTurnProjection({
        messageId: "a2",
        status: "COMPLETE",
        finalized: true,
        clarifications: ["Nouveau"],
      }),
    ];
    const views = resolveActionableProjections({ messages, projections });
    expect(views.find((v) => v.messageId === "a1")?.actionable).toBe(false);
    expect(views.find((v) => v.messageId === "a2")?.actionable).toBe(true);
  });

  it("expires choices after a later pilot turn and suspends on demand", () => {
    const messages = [
      { id: "a1", role: "assistant" },
      { id: "u2", role: "user" },
    ];
    const projections = [
      buildTurnProjection({
        messageId: "a1",
        status: "COMPLETE",
        finalized: true,
        clarifications: ["X"],
      }),
    ];
    expect(
      resolveActionableProjections({ messages, projections })[0]?.actionable,
    ).toBe(false);
    expect(
      resolveActionableProjections({
        messages: [{ id: "a1", role: "assistant" }],
        projections,
        suspendActions: true,
      })[0]?.actionable,
    ).toBe(false);
  });

  it("round-trips parseTurnProjection", () => {
    const built = buildTurnProjection({
      messageId: "m",
      status: "COMPLETE",
      finalized: true,
      clarifications: ["Go"],
    });
    expect(parseTurnProjection(built)?.choices[0]?.label).toBe("Go");
    expect(parseTurnProjection({ schemaVersion: "other" })).toBeNull();
  });
});

describe("ensemble05 composer draft (M3)", () => {
  it("isolates by pilot+project and refuses late ACK wipe of newer draft", () => {
    const store = new Map<string, string>();
    const sessionStorageMock = {
      getItem: (k: string) => store.get(k) ?? null,
      setItem: (k: string, v: string) => {
        store.set(k, v);
      },
      removeItem: (k: string) => {
        store.delete(k);
      },
      clear: () => store.clear(),
      key: (i: number) => [...store.keys()][i] ?? null,
      get length() {
        return store.size;
      },
    };
    Object.defineProperty(globalThis, "sessionStorage", {
      value: sessionStorageMock,
      configurable: true,
    });

    writeComposerDraft({
      schemaVersion: "e05-composer-draft-v1",
      pilotId: "p1",
      projectId: "proj1",
      lane: "host:127.0.0.1:3100",
      text: "brouillon A",
      version: 1,
      sentVersion: null,
      updatedAt: "2026-11-17T10:00:00.000Z",
    });
    expect(
      readComposerDraft({
        pilotId: "p1",
        projectId: "proj1",
        lane: "host:127.0.0.1:3100",
      })?.text,
    ).toBe("brouillon A");
    expect(
      readComposerDraft({
        pilotId: "p2",
        projectId: "proj1",
        lane: "host:127.0.0.1:3100",
      }),
    ).toBeNull();

    // Sent v1, then pilot typed v2 — late ACK for v1 must not clear.
    expect(
      clearDraftAfterAck({
        pilotId: "p1",
        projectId: "proj1",
        sentVersion: 1,
        currentVersion: 2,
        lane: "host:127.0.0.1:3100",
      }),
    ).toBe(false);
    expect(
      store.has(
        composerDraftStorageKey({
          pilotId: "p1",
          projectId: "proj1",
          lane: "host:127.0.0.1:3100",
        }),
      ),
    ).toBe(true);

    expect(
      clearDraftAfterAck({
        pilotId: "p1",
        projectId: "proj1",
        sentVersion: 2,
        currentVersion: 2,
        lane: "host:127.0.0.1:3100",
      }),
    ).toBe(true);
  });
});

```

### CREATED `projects/sfia-studio-next/web/tests/e2e/ensemble05-travail-nora.spec.ts`

```
import { test, expect } from "@playwright/test";
import path from "node:path";
import fs from "node:fs";
import { bootstrapProjectFromPortfolio } from "./helpers/g4-chat-first";

/**
 * Ensemble 05 — Travail avec Nora (FAKE/DEV lane :3101).
 * Covers discriminating CT-01/03/06 paths; does not claim LIVE Nora or progressive text.
 */
test.describe("Ensemble 05 Travail avec Nora", () => {
  test("scroll last, draft isolation, viewer 50/50/enlarged, choice+draft", async ({
    page,
  }) => {
    test.setTimeout(180_000);
    const evidenceDir = path.resolve(
      __dirname,
      "../../docs/evidence/ensemble-05-travail-nora",
    );
    fs.mkdirSync(evidenceDir, { recursive: true });

    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");

    const { projectId, preparationId } = await bootstrapProjectFromPortfolio(page, {
      seed: "Ensemble 05 fil Travail avec Nora",
      name: `E05 Travail ${Date.now()}`,
      summary: "e05 delivery",
    });
    expect(preparationId).toBeTruthy();

    await page.goto(`/projects/${projectId}?surface=travail`);
    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
      "data-project-load-state",
      "ready",
      { timeout: 20000 },
    );

    const thread = page.getByTestId("nora-thread");
    const draft = page.getByTestId("thread-draft");
    const send = page.getByTestId("thread-send");

    // CT-01 — after entry, thread is near bottom (last message visible policy).
    await expect(thread).toBeVisible();
    const atBottom = await thread.evaluate((el) => {
      return el.scrollHeight - el.scrollTop - el.clientHeight < 80;
    });
    expect(atBottom).toBe(true);

    // CT-03 — draft persists across surface nav (sessionStorage M3).
    const draftText = `Brouillon E05 conservé ${Date.now()}`;
    await draft.fill(draftText);
    await page.getByTestId("studio-rail").getByTestId("nav-documents").click();
    await expect(page).toHaveURL(/surface=document/);
    await page.getByTestId("studio-rail").getByTestId("nav-travail").click();
    await expect(page).toHaveURL(/surface=travail/);
    await expect(draft).toHaveValue(draftText);

    // Refresh restores draft for same pilot/project.
    await page.reload();
    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
      "data-project-load-state",
      "ready",
      { timeout: 20000 },
    );
    await expect(page.getByTestId("thread-draft")).toHaveValue(draftText);

    // CT-01 re-read: scroll up then send should stick to bottom for voluntary send.
    await thread.evaluate((el) => {
      el.scrollTop = 0;
    });
    // Exact fixture utterance → clarifications → choice buttons (M1/CT-02).
    const choiceSeed =
      "J'aimerais créer un outil pour mieux accompagner les chefs de projet, mais je ne sais pas encore ce qu'il devrait faire exactement.";
    await draft.fill(choiceSeed);
    await send.click();
    await expect(
      page.getByText("Nora deterministic-fixture · COMPLETE", { exact: false }),
    ).toBeVisible({ timeout: 30000 });
    await expect
      .poll(async () =>
        thread.evaluate((el) => el.scrollHeight - el.scrollTop - el.clientHeight < 120),
      )
      .toBe(true);

    const actionable = page.locator(
      '[data-testid="nora-choices"][data-actionable="1"] [data-testid="nora-choice"]',
    );
    await expect(actionable.first()).toBeVisible({ timeout: 10000 });
    const choiceLabel = (await actionable.first().innerText()).trim();
    expect(choiceLabel.length).toBeGreaterThan(0);
    const keep = `Draft intact pendant choix ${Date.now()}`;
    await draft.fill(keep);
    await actionable.first().click();
    await expect(page.getByTestId("nora-msg-pilot").filter({ hasText: choiceLabel })).toBeVisible({
      timeout: 30000,
    });
    await expect(draft).toHaveValue(keep);
    // Prior group expired after transmitted turn (may still be visible).
    await expect(
      page.locator('[data-testid="nora-choices"][data-actionable="0"]').first(),
    ).toBeVisible();

    // CT-06 — open viewer from En bref if a document exists; else create via send already may have.
    const consulter = page.locator("[data-testid^=travail-consulter-]").first();
    if (await consulter.count()) {
      await consulter.click();
      await expect(page.getByTestId("travail-viewer")).toBeVisible();
      await expect(page.getByTestId("project-travail-stage")).toHaveAttribute(
        "data-travail-layout",
        "split",
      );
      // URL must not gain viewer=
      expect(page.url()).not.toMatch(/viewer=/);
      await page.getByTestId("travail-viewer-enlarge").click();
      await expect(page.getByTestId("project-travail-stage")).toHaveAttribute(
        "data-travail-layout",
        "enlarged",
      );
      await page.getByTestId("travail-viewer-reduce").click();
      await expect(page.getByTestId("project-travail-stage")).toHaveAttribute(
        "data-travail-layout",
        "split",
      );
      await page.getByTestId("travail-viewer-close").click();
      await expect(page.getByTestId("travail-aside-bref")).toBeVisible();
      // Draft still present after viewer lifecycle
      await expect(page.getByTestId("thread-draft")).toBeVisible();
    }

    await page.setViewportSize({ width: 1680, height: 970 });
    await page.screenshot({
      path: path.join(evidenceDir, "runtime-nominal-1680x970.png"),
      fullPage: false,
    });
  });
});

```

### CREATED `projects/sfia-studio-next/construction/as-built-ensemble-05-travail-nora-20261117.md`

```
# As-built — Ensemble 05 Travail avec Nora

| Métadonnée | Valeur |
|---|---|
| Date | 2026-11-17 |
| Macro-lot | R5 / ML4D Ensemble 05 |
| Type | Delivery locale DEV · **NO RELEASE** |
| Branche produit | `feat/next-ml4d-project-space-20261116` |
| HEAD de départ | `984d77a36695c2f59ebbc18619e54eeeb43ad94e` |
| Statut | **IMPLEMENTED CANDIDATE WITH RESERVES** (as-built non normatif) |

## Sources

- UX v0.7 `conception-ux-travail-avec-nora.md` — docs@`99b3622b` blob `dc5ef25f…`
- Contrat technique v0.2 — docs@`99b3622b` blob `5f389688…` — M1–M5 VALIDATED BY MORRIS
- Figma page 05 `itgvCulInEnFY6DvgIegvP` / `700:38` — 16 variantes ; session MCP `2f762deb-…`

## Réalisation (résumé)

| Capacité | Implémentation |
|---|---|
| M1 projection | `turnProjection` additif dans `result_json` (pas de migration) ; relecture via `listTurnProjections` |
| M2 activité V1 | Attente animée honnête ; résumé d’activité post-terminal si `toolCallsObserved`/`d4CharsReturned` ; **pas de streaming texte** |
| M3 brouillon | `sessionStorage` clé `pilot+project+lane` ; ACK tardif versionné |
| M4 visionneuse | État local Travail ; modes normal / split 50/50 / agrandi ; pas de `viewer=` |
| M5 | Aucune migration |
| CT-01 | Hook `useNoraThreadScroll` — dernier message par défaut, préservation relecture, pastille « Nouveaux messages » |
| CT-02 | Choix typés `continue` → nouveau tour Pilote ; expiration après tour transmis ; brouillon libre intact |
| CT-03 | Compositeur compact/étendu (Entrée / Maj+Entrée ; IME ; mobile = bouton) |
| CT-06 | `TravailViewer` remplace « En bref » |

## Preuves exécutées (DEV / FAKE)

- Vitest `ensemble05-turn-projection` + `studio-rail` : PASS
- Playwright `ensemble05-travail-nora.spec.ts` : PASS (scroll, draft, choix+brouillon, viewer)
- Non-régression Ensemble 04 `project-space-ensemble04.spec.ts` : 3 PASS
- `next build` : PASS
- Captures : `web/docs/evidence/ensemble-05-travail-nora/`

## Réserves

1. **M2 progressive text** — NOT COVERED V1 (arbitré Morris).
2. **Activité contextualisée live** — seulement faits post-terminal observables ; pas de transport d’étapes pendant génération.
3. **Git viewer contenu** — UI prête ; ouverture Git depuis Travail non branchée sur un fetch live dans ce lot (Documents oui).
4. **Comparaison Figma F2 géométrique exhaustive** — capture nominale runtime + frame 700:39 ; delta CSS px non mesuré rectangle-par-rectangle sur les 16 variantes.
5. **88 scénarios UX** — couverture par suites discriminantes, pas 88 tests isolés.

## ENV-01 / versioning

- Travail : DEV `:5433` / `sfia_next_dev` (+ e2e `sfia_next_e2e` / `:3101`)
- RECETTE `:3200` build `3LzvYPTQc-Km7St6nF97r` **inchangée**
- **NO RELEASE** — aucun cutover, PR, merge, promotion

```

## Diffs utiles (fichiers modifiés)

### MODIFIED `projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx`

```diff
diff --git a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
index f359048e..a8b4b315 100644
--- a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
@@ -5,6 +5,7 @@ import { useParams, useRouter, useSearchParams } from "next/navigation";
 import { PilotagePanel } from "@/components/PilotagePanel";
 import { ProjectChrome } from "@/components/figma/ProjectChrome";
 import { NoraConversation } from "@/components/figma/NoraConversation";
+import { TravailViewer, type TravailViewerResource } from "@/components/figma/TravailViewer";
 import { ProjectJournal } from "@/components/figma/ProjectJournal";
 import { ProjectOverview } from "@/components/figma/ProjectOverview";
 import {
@@ -24,6 +25,19 @@ import {
   type ThreadPendingTurn,
   type ThreadTurnKind,
 } from "@/domains/pilotage/thread-recovery";
+import {
+  clearDraftAfterAck,
+  clearComposerDraft,
+  readComposerDraft,
+  writeComposerDraft,
+  studioClientLane,
+} from "@/domains/conversation/composer-draft";
+import {
+  resolveActionableProjections,
+  type TurnChoice,
+  type TurnProjection,
+  parseTurnProjection,
+} from "@/domains/conversation/turn-projection";
 import { PublicationInspectionPanel } from "@/components/integrations/PublicationInspectionPanel";
 import { useProjectSpace } from "@/components/shell/ProjectSpaceContext";
 import {
@@ -128,6 +142,12 @@ export default function ProjectPage() {
   const [surface, setSurface] = useState<Surface>(() => parseSurface(searchParams.get("surface")) ?? "travail");
   const [draft, setDraft] = useState("");
   const [busy, setBusy] = useState(false);
+  const [pilotId, setPilotId] = useState<string | null>(null);
+  const [turnProjections, setTurnProjections] = useState<TurnProjection[]>([]);
+  const [choiceFrozen, setChoiceFrozen] = useState(false);
+  const [forceStickToken, setForceStickToken] = useState(0);
+  const [viewer, setViewer] = useState<TravailViewerResource | null>(null);
+  const [viewerEnlarged, setViewerEnlarged] = useState(false);
   const [noraActivity, setNoraActivity] = useState<"idle" | "preparing" | "error">("idle");
   const [status, setStatus] = useState("");
   const [pilotageStatus, setPilotageStatus] = useState("");
@@ -139,6 +159,8 @@ export default function ProjectPage() {
   const [docHistory, setDocHistory] = useState<RevisionRow[]>([]);
   const [docDiffText, setDocDiffText] = useState("");
   const [unresolvedPending, setUnresolvedPending] = useState<ThreadPendingTurn | null>(null);
+  const draftVersionRef = useRef(0);
+  const pilotIdRef = useRef<string | null>(null);
   const messageTurnKeyRef = useRef<{ content: string; key: string } | null>(null);
   const reviseCorrelationRef = useRef<string | null>(null);
   const reviseBaseIdRef = useRef<string | null>(null);
@@ -171,6 +193,50 @@ export default function ProjectPage() {
   useEffect(() => {
     documentsRef.current = documents;
   }, [documents]);
+  useEffect(() => {
+    pilotIdRef.current = pilotId;
+  }, [pilotId]);
+
+  function persistDraft(text: string) {
+    if (!pilotId) return;
+    draftVersionRef.current += 1;
+    const prior = readComposerDraft({ pilotId, projectId: params.projectId });
+    writeComposerDraft({
+      schemaVersion: "e05-composer-draft-v1",
+      pilotId,
+      projectId: params.projectId,
+      lane: studioClientLane(),
+      text,
+      version: draftVersionRef.current,
+      sentVersion: prior?.sentVersion ?? null,
+      updatedAt: new Date().toISOString(),
+    });
+  }
+
+  function openTravailDocument(doc: Doc) {
+    const rev = doc.latestRevision;
+    const markdown = rev?.contentMarkdown ?? null;
+    const available = Boolean(markdown) && rev?.status !== "FAILED";
+    setViewer({
+      kind: "document",
+      documentId: doc.document.id,
+      title: doc.document.title,
+      revisionId: rev?.id ?? null,
+      revisionNumber: rev?.revisionNumber ?? null,
+      markdown: available ? markdown : null,
+      available,
+      unavailableReason: available
+        ? undefined
+        : rev
+          ? `Document indisponible (${rev.status})`
+          : "Aucune révision disponible",
+    });
+    setViewerEnlarged(false);
+  }
+
+  function closeViewer() {
+    setViewer(null);
+  }

   function buildSurfaceUrl(next: Surface, documentId?: string | null) {
     const q = new URLSearchParams();
@@ -433,6 +499,8 @@ export default function ProjectPage() {
       const res = await fetch(`/api/projects/${params.projectId}`);
       if (cancelled) return;
       if (res.status === 401) {
+        const pid = pilotIdRef.current;
+        if (pid) clearComposerDraft({ pilotId: pid, projectId: params.projectId });
         setUnavailableKind("unauthorized");
         setStatusHint("");
         setProjectSpaceInfo({
@@ -475,8 +543,23 @@ export default function ProjectPage() {
       if (cancelled) return;
       const docs = (j.documents ?? []) as Doc[];
       const name = String(j.project?.name ?? "").trim() || null;
+      const ownerPilotId =
+        typeof j.project?.ownerPilotId === "string" ? j.project.ownerPilotId : null;
+      setPilotId(ownerPilotId);
+      setTurnProjections(
+        ((j.turnProjections ?? []) as unknown[])
+          .map((raw) => parseTurnProjection(raw))
+          .filter((p): p is TurnProjection => p !== null),
+      );
       setMessages(j.messages ?? []);
       setDocuments(docs);
+      if (ownerPilotId) {
+        const record = readComposerDraft({ pilotId: ownerPilotId, projectId: params.projectId });
+        if (record?.text) {
+          setDraft(record.text);
+          draftVersionRef.current = record.version;
+        }
+      }
       setKnowledge(j.knowledge ?? null);
       setPreparationId(j.preparation?.id ?? null);
       setProjectName(name);
@@ -762,9 +845,32 @@ export default function ProjectPage() {
     setReviseMessage("Base mise à jour — nouvelle intention (nouvelle correlationKey au prochain enregistrement).");
   }

-  async function sendMessage() {
-    if (!draft.trim() || !preparationId) return;
-    const text = draft.trim();
+  function sendChoice(choice: TurnChoice, _messageId: string) {
+    void sendMessage(choice.transmitText, { fromChoice: true });
+  }
+
+  function upsertTurnProjection(tp: TurnProjection) {
+    setTurnProjections((prev) => {
+      const id = tp.messageId;
+      if (!id) return [...prev, tp];
+      const idx = prev.findIndex((p) => p.messageId === id);
+      if (idx < 0) return [...prev, tp];
+      const next = [...prev];
+      next[idx] = tp;
+      return next;
+    });
+  }
+
+  async function sendMessage(
+    overrideText?: string,
+    opts?: { fromChoice?: boolean },
+  ) {
+    const text = (overrideText ?? draft).trim();
+    if (!text || !preparationId) return;
+    const fromChoice = opts?.fromChoice === true;
+    const sentVersion = fromChoice ? 0 : draftVersionRef.current;
+    setChoiceFrozen(true);
+    setForceStickToken((t) => t + 1);
     // SEM-02 / S05: no client lexical gate. Server returns nextTurnKind from Nora
     // qualification. Same-content retry reuses the turn key; distinct content may
     // proceed — coexistence is decided from the server kind after the response.
@@ -817,14 +923,28 @@ export default function ProjectPage() {
         setStatus(`Nora ${String(j.noraMode ?? "")} · ${String(j.status ?? "")}`);
         const effect = j.pilotageEffect as PilotageEffectView | undefined;
         setPilotageStatus(formatPilotageEffect(effect, Boolean(j.humanDecisionCreated)));
-        if (
+        const tp = parseTurnProjection(j.turnProjection);
+        if (tp) upsertTurnProjection(tp);
+        const shouldClearDraft =
           !effectBlocked &&
           !distinctFromUnresolved &&
           applyClearFromResponse(String(j.status ?? ""), effect, {
             preserveUnresolvedMetierPending: preserveMetierPending,
-          })
-        ) {
-          setDraft("");
+          });
+        if (!fromChoice && shouldClearDraft) {
+          if (
+            pilotId &&
+            clearDraftAfterAck({
+              pilotId,
+              projectId: params.projectId,
+              sentVersion,
+              currentVersion: draftVersionRef.current,
+            })
+          ) {
+            setDraft("");
+          } else if (!pilotId) {
+            setDraft("");
+          }
         } else if (effectBlocked || (distinctFromUnresolved && serverKind === "INTENTION_EFFET")) {
           setStatus(
             effectBlocked
@@ -844,8 +964,12 @@ export default function ProjectPage() {
         setNoraActivity(
           j.status === "UNKNOWN" || j.status === "FAILED" ? "error" : "idle",
         );
+        if (String(j.status ?? "") !== "UNKNOWN") {
+          setChoiceFrozen(false);
+        }
       } else {
         // ACK lost / HTTP error — retain the same turn key for reconcile (server may have applied).
+        setChoiceFrozen(false);
         rememberPending({ content: text, clientTurnKey, clientCommandKey });
         setNoraActivity("error");
         setStatus(
@@ -855,6 +979,7 @@ export default function ProjectPage() {
         );
       }
     } catch {
+      setChoiceFrozen(false);
       rememberPending({ content: text, clientTurnKey, clientCommandKey });
       setNoraActivity("error");
       setStatus("échec réseau — intention de tour conservée");
@@ -894,6 +1019,8 @@ export default function ProjectPage() {
     );
   }

+  const travailLayout = viewer ? (viewerEnlarged ? "enlarged" : "split") : "normal";
+
   return (
     <ProjectChrome
       projectId={params.projectId}
@@ -901,6 +1028,7 @@ export default function ProjectPage() {
       surface={surface}
       statusHint={statusHint}
       loadState={projectLoadState}
+      travailLayout={travailLayout}
     >
       {surface === "projet" ? (
         <ProjectOverview
@@ -923,7 +1051,19 @@ export default function ProjectPage() {
           unresolvedPending={Boolean(unresolvedPending)}
           activity={noraActivity}
           status={[status, pilotageStatus].filter(Boolean).join(" · ") || undefined}
-          onDraft={setDraft}
+          projections={resolveActionableProjections({
+            messages,
+            projections: turnProjections,
+            suspendActions: choiceFrozen || noraActivity === "preparing",
+          })}
+          onChoice={sendChoice}
+          choiceFrozen={choiceFrozen}
+          forceStickToken={forceStickToken}
+          layoutMode={travailLayout}
+          onDraft={(v) => {
+            setDraft(v);
+            persistDraft(v);
+          }}
           onSend={() => void sendMessage()}
           onReconcile={
             unresolvedPending
@@ -931,6 +1071,25 @@ export default function ProjectPage() {
               : undefined
           }
           aside={
+            viewer ? (
+              <TravailViewer
+                resource={viewer}
+                enlarged={viewerEnlarged}
+                onEnlarge={() => setViewerEnlarged(true)}
+                onReduce={() => setViewerEnlarged(false)}
+                onClose={closeViewer}
+                onOpenInDocuments={
+                  viewer.kind === "document"
+                    ? () => {
+                        const match = documents.find(
+                          (d) => d.document.id === viewer.documentId,
+                        );
+                        if (match) openDocumentReadOnly(match);
+                      }
+                    : undefined
+                }
+              />
+            ) : (
             <div className="fig-inspector" data-testid="travail-aside-inspector">
               <p className="fig-kicker">Contexte projet</p>
               <h2 className="fig-inspector-title">En bref</h2>
@@ -958,6 +1117,21 @@ export default function ProjectPage() {
                     ? `${documents.length} document${documents.length > 1 ? "s" : ""} Nora disponible${documents.length > 1 ? "s" : ""}.`
                     : "Les objets et sources du projet restent distincts du dialogue."}
                 </p>
+                {documents.length > 0 ? (
+                  <div className="fig-inspector-links mt-2">
+                    {documents.map((d) => (
+                      <button
+                        key={d.document.id}
+                        type="button"
+                        className="fig-inspector-link"
+                        data-testid={`travail-consulter-${d.document.id}`}
+                        onClick={() => openTravailDocument(d)}
+                      >
+                        Consulter · {d.document.title}
+                      </button>
+                    ))}
+                  </div>
+                ) : null}
                 <div className="fig-inspector-links">
                   <button
                     type="button"
@@ -993,6 +1167,7 @@ export default function ProjectPage() {
                 ) : null}
               </div>
             </div>
+            )
           }
         />
       ) : null}

```

### MODIFIED `projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx b/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
index 3d305771..94a0cc79 100644
--- a/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
@@ -1,6 +1,9 @@
 "use client";

+import { useEffect, useRef, useState } from "react";
 import { SafeMarkdown } from "@/components/SafeMarkdown";
+import { useNoraThreadScroll } from "@/hooks/useNoraThreadScroll";
+import type { MessageProjectionView, TurnChoice } from "@/domains/conversation/turn-projection";

 export type NoraMsg = {
   id: string;
@@ -22,12 +25,45 @@ export function NoraConversation(props: {
   aside?: React.ReactNode;
   /** When set, participates in project-travail-stage CSS grid via display:contents. */
   embeddedInStage?: boolean;
+  projections?: MessageProjectionView[];
+  onChoice?: (choice: TurnChoice, messageId: string) => void;
+  choiceFrozen?: boolean;
+  forceStickToken?: number;
+  layoutMode?: "normal" | "split" | "enlarged";
 }) {
   const n = props.messages.length;
   const frame = n === 0 ? "161:216" : n <= 2 ? "161:288" : "94:214";
   const variantLabel =
     n === 0 ? "Première conversation" : n <= 2 ? "Reprise contextualisée" : "Fil long";
   const embedded = Boolean(props.embeddedInStage);
+  const lastMessageId = n > 0 ? props.messages[n - 1]!.id : null;
+  const { threadRef, onScroll, scrollToBottom, newBelow } = useNoraThreadScroll({
+    messageCount: n,
+    lastMessageId,
+    activityPreparing: props.activity === "preparing",
+    forceStickToken: props.forceStickToken ?? 0,
+  });
+
+  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
+  const [imeComposing, setImeComposing] = useState(false);
+  const isMobile =
+    typeof window !== "undefined" &&
+    window.matchMedia &&
+    window.matchMedia("(max-width: 700px)").matches;
+
+  useEffect(() => {
+    const el = textareaRef.current;
+    if (!el) return;
+    el.style.height = "auto";
+    const max = Math.min(window.innerHeight * 0.36, 280);
+    const next = Math.min(Math.max(el.scrollHeight, 24), max);
+    el.style.height = `${next}px`;
+    el.style.overflowY = el.scrollHeight > max ? "auto" : "hidden";
+  }, [props.draft]);
+
+  const projectionByMessage = new Map(
+    (props.projections ?? []).map((p) => [p.messageId ?? "", p]),
+  );

   return (
     <div
@@ -40,12 +76,14 @@ export function NoraConversation(props: {
       data-figma-mobile-frames="282:468,282:492"
       data-testid="nora-workspace"
       data-travail-embed={embedded ? "1" : "0"}
+      data-travail-layout={props.layoutMode ?? "normal"}
     >
       <section
         className="fig-conversation-panel"
         data-testid="nora-conversation-panel"
         data-nora-main="1"
         id="nora-main"
+        hidden={props.layoutMode === "enlarged"}
       >
         <div className="fig-conversation-head">
           <p className="fig-kicker !mb-0">Conversation du projet</p>
@@ -53,9 +91,24 @@ export function NoraConversation(props: {
           {props.unresolvedPending ? (
             <span className="fig-tag fig-tag-warn">Interruption / reprise</span>
           ) : null}
+          {newBelow ? (
+            <button
+              type="button"
+              className="fig-tag fig-tag-ok"
+              data-testid="nora-new-below"
+              onClick={() => scrollToBottom("smooth")}
+            >
+              Nouveaux messages ↓
+            </button>
+          ) : null}
         </div>

-        <div className="fig-nora-thread" data-testid="nora-thread">
+        <div
+          className="fig-nora-thread"
+          data-testid="nora-thread"
+          ref={threadRef}
+          onScroll={onScroll}
+        >
           {n === 0 ? (
             <div className="fig-msg fig-msg-nora text-sm" data-testid="nora-first-empty">
               <div className="fig-msg-meta">
@@ -72,10 +125,13 @@ export function NoraConversation(props: {
           ) : null}
           {props.messages.map((m) => {
             const isNora = m.role === "assistant";
+            const proj = isNora ? projectionByMessage.get(m.id) : undefined;
             return (
               <article
                 key={m.id}
                 className={`fig-msg ${isNora ? "fig-msg-nora" : "fig-msg-pilot"}`}
+                data-message-id={m.id}
+                data-testid={isNora ? "nora-msg-assistant" : "nora-msg-pilot"}
               >
                 <div className="fig-msg-meta">
                   {isNora ? (
@@ -95,12 +151,73 @@ export function NoraConversation(props: {
                 ) : (
                   <div className="fig-msg-body whitespace-pre-wrap">{m.content}</div>
                 )}
+                {proj?.activity && proj.activity.kind !== "wait" ? (
+                  <details className="fig-nora-activity-history" data-testid="nora-activity-history">
+                    <summary>Activité de cette réponse</summary>
+                    <p>
+                      {proj.activity.label}
+                      {proj.activity.detail ? ` — ${proj.activity.detail}` : ""}
+                    </p>
+                  </details>
+                ) : null}
+                {proj && proj.choices.length > 0 ? (
+                  <div
+                    className="fig-nora-choices"
+                    data-testid="nora-choices"
+                    data-actionable={proj.actionable ? "1" : "0"}
+                    data-message-id={m.id}
+                  >
+                    {proj.choices.map((c) => (
+                      <button
+                        key={c.id}
+                        type="button"
+                        className="fig-nora-choice"
+                        data-testid="nora-choice"
+                        data-choice-id={c.id}
+                        disabled={!proj.actionable || props.busy || props.choiceFrozen}
+                        onClick={() => props.onChoice?.(c, m.id)}
+                      >
+                        {c.label}
+                      </button>
+                    ))}
+                    {!proj.actionable ? (
+                      <p className="fig-nora-choices-expired" data-testid="nora-choices-expired">
+                        Propositions expirées — consultation seule.
+                      </p>
+                    ) : null}
+                  </div>
+                ) : null}
+                {proj?.references?.length ? (
+                  <ul className="fig-nora-refs" data-testid="nora-refs">
+                    {proj.references.map((r, i) => (
+                      <li key={`${r.kind}-${r.resourceId ?? i}`}>
+                        {r.label}
+                        {r.available === false ? " (indisponible)" : ""}
+                      </li>
+                    ))}
+                  </ul>
+                ) : null}
               </article>
             );
           })}
           {props.activity === "preparing" ? (
-            <div className="fig-alert" role="status">
-              Nora prépare une réponse…
+            <div
+              className="fig-nora-activity"
+              role="status"
+              aria-live="polite"
+              data-testid="nora-activity-preparing"
+            >
+              <span className="fig-nora-activity-pulse" aria-hidden />
+              <span>Nora prépare une réponse…</span>
+              <span className="fig-nora-activity-note">
+                Attente réelle — aucune étape inventée.
+              </span>
+            </div>
+          ) : null}
+          {props.activity === "error" ? (
+            <div className="fig-alert" role="alert" data-testid="nora-activity-error">
+              La dernière tentative n&apos;a pas abouti clairement. Le texte saisi est conservé ;
+              réessayez ou réconciliez si une intention reste ouverte.
             </div>
           ) : null}
         </div>
@@ -108,12 +225,13 @@ export function NoraConversation(props: {

       {/*
         Pending banner lives outside the Figma-sized composer card so
-        max-height:160px never clips reconcile controls under the shell lock.
+        max-height never clips reconcile controls under the shell lock.
       */}
       <div
         className="fig-travail-composer-stack"
         data-testid="nora-composer-stack"
         data-pending={props.unresolvedPending ? "1" : "0"}
+        hidden={props.layoutMode === "enlarged"}
       >
         {props.unresolvedPending && props.onReconcile ? (
           <div className="fig-travail-pending" data-testid="thread-pending-banner">
@@ -131,26 +249,36 @@ export function NoraConversation(props: {
             </button>
           </div>
         ) : null}
-        <div className="fig-composer fig-travail-composer" data-testid="nora-composer">
-          <textarea
-            className="fig-travail-composer-input"
-            value={props.draft}
-            onChange={(e) => props.onDraft(e.target.value)}
-            placeholder="Écrire à Nora dans ce projet…"
-            aria-label="Message à Nora"
-            data-testid="thread-draft"
-            rows={2}
-            onKeyDown={(e) => {
-              if (e.key === "Enter" && (e.metaKey || e.ctrlKey) && !props.busy) {
-                e.preventDefault();
-                props.onSend();
-              }
-            }}
-          />
-          <div className="fig-travail-composer-bar">
-            <span className="fig-travail-composer-hint">
-              Votre message reste rattaché au projet actif
+        <div
+          className="fig-composer fig-travail-composer"
+          data-testid="nora-composer"
+          data-composer-expanded={props.draft.includes("\n") || props.draft.length > 80 ? "1" : "0"}
+        >
+          <div className="fig-travail-composer-row">
+            <span className="fig-travail-composer-plus" aria-hidden>
+              +
             </span>
+            <textarea
+              ref={textareaRef}
+              className="fig-travail-composer-input"
+              value={props.draft}
+              onChange={(e) => props.onDraft(e.target.value)}
+              placeholder="Écrire à Nora dans ce projet…"
+              aria-label="Message à Nora"
+              data-testid="thread-draft"
+              rows={1}
+              onCompositionStart={() => setImeComposing(true)}
+              onCompositionEnd={() => setImeComposing(false)}
+              onKeyDown={(e) => {
+                if (imeComposing || e.nativeEvent.isComposing) return;
+                // Mobile: Enter = newline; send via button only.
+                if (isMobile) return;
+                if (e.key === "Enter" && !e.shiftKey && !props.busy) {
+                  e.preventDefault();
+                  if (props.draft.trim()) props.onSend();
+                }
+              }}
+            />
             <button
               type="button"
               className="fig-travail-composer-send"

```

### MODIFIED `projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx b/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
index 1b2ce939..05b45841 100644
--- a/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
@@ -56,6 +56,8 @@ export function ProjectChrome(props: {
   statusHint?: string;
   /** Observable project bootstrap: loading until load()+surface sync finish. */
   loadState?: "loading" | "ready";
+  /** Ensemble 05 — Travail layout: normal | split (viewer) | enlarged viewer. */
+  travailLayout?: "normal" | "split" | "enlarged";
   children: React.ReactNode;
 }) {
   const loadState = props.loadState ?? "ready";
@@ -149,7 +151,11 @@ export function ProjectChrome(props: {
       </div>

       {isTravail ? (
-        <div className="project-travail-stage" data-testid="project-travail-stage">
+        <div
+          className="project-travail-stage"
+          data-testid="project-travail-stage"
+          data-travail-layout={props.travailLayout ?? "normal"}
+        >
           {intro}
           <div
             className="fig-travail-intro-rule"

```

### MODIFIED `projects/sfia-studio-next/web/src/components/figma/tokens.css`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/tokens.css b/projects/sfia-studio-next/web/src/components/figma/tokens.css
index 2023a7b1..dc9a61e0 100644
--- a/projects/sfia-studio-next/web/src/components/figma/tokens.css
+++ b/projects/sfia-studio-next/web/src/components/figma/tokens.css
@@ -374,18 +374,43 @@
   gap: 0;
   border: 1px solid #272e49;
   border-radius: 14px;
-  padding: 16px 18px 12px;
+  padding: 12px 14px;
   background: #151c29;
-  /* Figma 652:8 composer ≈ 137px — natural height, not stretched */
-  min-height: 118px;
-  max-height: 160px;
+  /* Figma page 05 compact composer ≈ 84px; grows upward into thread space. */
+  min-height: 84px;
+  max-height: min(40vh, 320px);
   flex-shrink: 0;
   width: 100%;
 }

+.fig-travail-composer-row {
+  display: flex;
+  align-items: flex-end;
+  gap: 10px;
+  min-width: 0;
+}
+
+.fig-travail-composer-plus {
+  width: 28px;
+  height: 28px;
+  border-radius: 8px;
+  border: 1px solid #272e49;
+  color: #94a2bb;
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  font-size: 18px;
+  line-height: 1;
+  flex-shrink: 0;
+  margin-bottom: 4px;
+  /* Visual affordance only — attachments/dictation not operational in E05. */
+  opacity: 0.7;
+}
+
 .fig-travail-composer-input {
   width: 100%;
-  min-height: 48px;
+  min-height: 24px;
+  max-height: min(36vh, 280px);
   resize: none;
   border: 0;
   background: transparent;
@@ -393,7 +418,9 @@
   font: inherit;
   font-size: 15px;
   line-height: 1.45;
-  padding: 0;
+  padding: 6px 0;
+  flex: 1 1 auto;
+  min-width: 0;
 }

 .fig-travail-composer-input::placeholder {
@@ -427,13 +454,13 @@
 }

 .fig-travail-composer-send {
-  width: 52px;
+  width: 44px;
   height: 35px;
   border: 0;
   border-radius: 10px;
   background: #656fe1;
   color: #f4f6fc;
-  font-size: 22px;
+  font-size: 20px;
   font-weight: 600;
   line-height: 1;
   cursor: pointer;
@@ -441,6 +468,159 @@
   align-items: center;
   justify-content: center;
   flex-shrink: 0;
+  margin-bottom: 2px;
+}
+
+/* Ensemble 05 — choices, activity, viewer */
+.fig-nora-choices {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 8px;
+  margin-top: 12px;
+}
+
+.fig-nora-choice {
+  border: 1px solid #3a4470;
+  background: #1a2033;
+  color: #f4f6fc;
+  border-radius: 10px;
+  padding: 8px 12px;
+  font-size: 13px;
+  line-height: 1.35;
+  text-align: left;
+  cursor: pointer;
+  max-width: 100%;
+}
+
+.fig-nora-choice:disabled {
+  opacity: 0.55;
+  cursor: default;
+}
+
+.fig-nora-choice:focus-visible {
+  outline: 2px solid var(--fig-accent-soft);
+  outline-offset: 2px;
+}
+
+.fig-nora-choices-expired {
+  margin: 4px 0 0;
+  width: 100%;
+  color: #94a2bb;
+  font-size: 11px;
+}
+
+.fig-nora-refs {
+  margin: 10px 0 0;
+  padding-left: 1.1rem;
+  color: #94a2bb;
+  font-size: 12px;
+}
+
+.fig-nora-activity {
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  gap: 10px;
+  border: 1px solid #272e49;
+  border-radius: 12px;
+  padding: 12px 14px;
+  background: #151c29;
+  color: #f4f6fc;
+  font-size: 13px;
+}
+
+.fig-nora-activity-pulse {
+  width: 10px;
+  height: 10px;
+  border-radius: 999px;
+  background: #656fe1;
+  animation: fig-nora-pulse 1.2s ease-in-out infinite;
+}
+
+.fig-nora-activity-note {
+  color: #94a2bb;
+  font-size: 11px;
+  width: 100%;
+}
+
+@keyframes fig-nora-pulse {
+  0%,
+  100% {
+    opacity: 0.35;
+    transform: scale(0.85);
+  }
+  50% {
+    opacity: 1;
+    transform: scale(1);
+  }
+}
+
+@media (prefers-reduced-motion: reduce) {
+  .fig-nora-activity-pulse {
+    animation: none;
+    opacity: 1;
+  }
+}
+
+.fig-nora-activity-history {
+  margin-top: 10px;
+  color: #94a2bb;
+  font-size: 12px;
+}
+
+.fig-nora-activity-history summary {
+  cursor: pointer;
+}
+
+.fig-travail-viewer {
+  display: flex;
+  flex-direction: column;
+  min-height: 0;
+  height: 100%;
+  background: #151c29;
+  border: 1px solid #272e49;
+  border-radius: 16px;
+  overflow: hidden;
+}
+
+.fig-travail-viewer-head {
+  display: flex;
+  justify-content: space-between;
+  gap: 12px;
+  align-items: flex-start;
+  padding: 16px 18px 12px;
+  border-bottom: 1px solid #272e49;
+  flex-shrink: 0;
+}
+
+.fig-travail-viewer-actions {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 8px;
+  justify-content: flex-end;
+}
+
+.fig-travail-viewer-meta {
+  margin: 4px 0 0;
+  color: #94a2bb;
+  font-size: 12px;
+}
+
+.fig-travail-viewer-body {
+  flex: 1 1 auto;
+  min-height: 0;
+  overflow: auto;
+  overscroll-behavior: contain;
+  padding: 16px 18px 20px;
+}
+
+.fig-travail-viewer-pre {
+  margin: 0;
+  white-space: pre-wrap;
+  word-break: break-word;
+  font-size: 12px;
+  line-height: 1.45;
+  color: #f4f6fc;
 }

 .fig-travail-composer-send:disabled {
@@ -1468,6 +1648,27 @@
   align-items: stretch;
 }

+/* Ensemble 05 / CT-06 — 50/50 of useful area outside rail (Figma 701:363 ≈ 668/668). */
+.project-travail-stage[data-travail-layout="split"] {
+  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
+  column-gap: 22px;
+}
+
+/* Enlarged viewer: conversation/composer hidden; aside spans useful area. */
+.project-travail-stage[data-travail-layout="enlarged"] {
+  grid-template-columns: minmax(0, 1fr);
+}
+
+.project-travail-stage[data-travail-layout="enlarged"] > .fig-travail-intro,
+.project-travail-stage[data-travail-layout="enlarged"] > .fig-travail-intro-rule {
+  display: none;
+}
+
+.project-travail-stage[data-travail-layout="enlarged"] .fig-travail-aside {
+  grid-column: 1;
+  grid-row: 1 / -1;
+}
+
 .fig-travail-intro-rule {
   margin-top: 0;
   /* Pull rule closer under intro (override uniform 25px track gap for rows 1→2). */

```

### MODIFIED `projects/sfia-studio-next/web/src/domains/conversation/service.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index 1114c76b..9a6f806e 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -105,6 +105,11 @@ import {
   recoverPendingMissionContinuation,
 } from "./intent-conduction";
 import { draftProjectionFromQualification } from "@/domains/preparation/projection";
+import {
+  buildTurnProjection,
+  extractTurnProjectionFromResultJson,
+  type TurnProjection,
+} from "./turn-projection";

 /**
  * S05 R-01 — gather owner-side evidence for one unresolved sibling.
@@ -392,6 +397,43 @@ export async function listMessages(pilotId: string, preparationId: string) {
     .orderBy(asc(messages.ordinal));
 }

+/**
+ * Ensemble 05 / M1 — reload projections from existing result_json (no new table).
+ * READ ≠ COMMAND.
+ */
+export async function listTurnProjections(pilotId: string, preparationId: string) {
+  const ctx = await getPreparationContext(pilotId, preparationId);
+  if (!ctx.conversation) return [];
+  const rows = await db
+    .select({
+      id: conversationTurnCommands.id,
+      assistantMessageId: conversationTurnCommands.assistantMessageId,
+      status: conversationTurnCommands.status,
+      resultJson: conversationTurnCommands.resultJson,
+    })
+    .from(conversationTurnCommands)
+    .where(
+      and(
+        eq(conversationTurnCommands.conversationId, ctx.conversation.id),
+        eq(conversationTurnCommands.ownerPilotId, pilotId),
+      ),
+    );
+  const out = [];
+  for (const row of rows) {
+    if (!row.assistantMessageId || !row.resultJson) continue;
+    const proj = extractTurnProjectionFromResultJson(row.resultJson);
+    if (!proj) continue;
+    out.push({
+      ...proj,
+      messageId: proj.messageId ?? row.assistantMessageId,
+      turnCommandId: proj.turnCommandId ?? row.id,
+      finalized: proj.finalized || row.status === "COMPLETE",
+      status: proj.status || row.status,
+    });
+  }
+  return out;
+}
+
 /** Qualification decision before extract/D4 — metadata only, never blocks D4. */
 function emitDocumentActQualificationObs(args: {
   requestId: string;
@@ -547,6 +589,11 @@ export type TurnResult = {
   pendingEffectBlocked?: boolean;
   pendingBlockReason?: string;
   unresolvedPendingClientTurnKey?: string | null;
+  /**
+   * Ensemble 05 / M1 — structured reply projection (choices, refs, activity).
+   * Additive in result_json; never an authority grant.
+   */
+  turnProjection?: TurnProjection | null;
 };

 function pilotageEffectFromAuthority(
@@ -2301,6 +2348,16 @@ export async function postUserMessageAndNora(
       clientPendingHint,
     semanticQualificationStatus: qualification.status,
     preparationProjection: preparationProjectionAck,
+    turnProjection: buildTurnProjection({
+      messageId: ownershipLostBeforeD4 ? null : assistantId,
+      turnCommandId: reserved.commandId,
+      status: turnStatus === "COMPLETE" ? reply.status : turnStatus,
+      finalized: turnStatus === "COMPLETE" && !ownershipLostBeforeD4,
+      clarifications: qualification.clarifications ?? null,
+      toolCallsObserved: reply.toolCallsObserved,
+      d4CharsReturned: reply.d4CharsReturned,
+      documentSave,
+    }),
   };

   if (turnRaceHooks.beforeTerminalCommit) {

```

### MODIFIED `projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts b/projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts
index 122a73f9..671ab7ec 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts
@@ -815,7 +815,8 @@ export async function commitTurnTerminal(args: {
         return { applied: false };
       }

-      // T-03 / Lot B + O-04: preserve stashed semanticQualification and documentCommandBindings.
+      // T-03 / Lot B + O-04 + E05/M1: preserve stashed semanticQualification,
+      // documentCommandBindings, and turnProjection when terminal omits them.
       let terminalJson = args.resultJson ?? null;
       if (owned.resultJson) {
         try {
@@ -833,6 +834,9 @@ export async function commitTurnTerminal(args: {
               next.documentCommandBindings = prev.documentCommandBindings;
               next.documentCommandBindingStashedAt = prev.documentCommandBindingStashedAt;
             }
+            if (prev.turnProjection !== undefined && next.turnProjection === undefined) {
+              next.turnProjection = prev.turnProjection;
+            }
             terminalJson = JSON.stringify(next);
           } else {
             terminalJson = owned.resultJson;

```

### MODIFIED `projects/sfia-studio-next/web/src/domains/preparation/project-context.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/preparation/project-context.ts b/projects/sfia-studio-next/web/src/domains/preparation/project-context.ts
index c334afa1..cbf289b5 100644
--- a/projects/sfia-studio-next/web/src/domains/preparation/project-context.ts
+++ b/projects/sfia-studio-next/web/src/domains/preparation/project-context.ts
@@ -1,7 +1,7 @@
 import { and, eq } from "drizzle-orm";
 import { db } from "@/db/client";
 import { preparationProjectLinks, projects } from "@/db/schema";
-import { listMessages } from "@/domains/conversation/service";
+import { listMessages, listTurnProjections } from "@/domains/conversation/service";
 import { listDocuments } from "@/domains/document/service";
 import { listKnowledge } from "@/domains/knowledge/service";
 import { getPilotageProjection } from "@/domains/pilotage/service";
@@ -42,6 +42,7 @@ export async function getOwnedProjectContext(pilotId: string, projectId: string)

   const ctx = await getPreparationContext(pilotId, link.preparationId);
   const messages = await listMessages(pilotId, link.preparationId);
+  const turnProjections = await listTurnProjections(pilotId, link.preparationId);
   const documents = await listDocuments(pilotId, link.preparationId);
   const knowledge = await listKnowledge(pilotId, link.preparationId);
   const pilotage = await getPilotageProjection(pilotId, projectId);
@@ -52,6 +53,7 @@ export async function getOwnedProjectContext(pilotId: string, projectId: string)
     conversation: ctx.conversation,
     link,
     messages,
+    turnProjections,
     documents,
     knowledge,
     pilotage,

```

### MODIFIED `projects/sfia-studio-next/web/src/app/api/projects/[projectId]/route.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/route.ts b/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/route.ts
index 3ab2b9d6..7181875b 100644
--- a/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/route.ts
+++ b/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/route.ts
@@ -13,6 +13,7 @@ export async function GET(_: Request, ctx: { params: Promise<{ projectId: string
       conversation: data.conversation,
       link: data.link,
       messages: data.messages,
+      turnProjections: data.turnProjections,
       documents: data.documents,
       knowledge: data.knowledge,
       pilotage: data.pilotage,

```

### MODIFIED `projects/sfia-studio-next/construction/delivery-history.md`

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 61738fe9..b095aedb 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -4,6 +4,25 @@ Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.


+## delivery_id: DELIV-2026-11-17-ML4D-ENSEMBLE-05-TRAVAIL-NORA
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-17 ~12:00 CET |
+| Macro-lot | ML4D Ensemble 05 — Travail avec Nora |
+| Type | Cycle 8 Delivery · CRITICAL · EVOL · **NO RELEASE** |
+| Parent candidat | `984d77a36695c2f59ebbc18619e54eeeb43ad94e` |
+| Branch | `feat/next-ml4d-project-space-20261116` (locale) |
+| Scope | CT-01..08 intégrés : scroll UX-002, projection M1 `result_json`, choix, compositeur/brouillon M3, activité V1 M2, visionneuse locale M4, shell E04 préservé |
+| Non-scope | Migration (M5) ; streaming texte ; cutover RECETTE ; PR/merge ; Gate C ; ML5 |
+| Preuves | Vitest E05+studio-rail PASS ; Playwright E05 PASS ; E04 nreg 3 PASS ; next build PASS |
+| Evidence | `web/docs/evidence/ensemble-05-travail-nora/` |
+| As-built | `construction/as-built-ensemble-05-travail-nora-20261117.md` |
+| RECETTE | **inchangée** `:3200` BUILD `3LzvYPTQc-Km7St6nF97r` |
+| Push produit | **AUCUN** |
+| Verdict cible | `IMPLEMENTED CANDIDATE WITH RESERVES — MORRIS REVIEW REQUIRED` |
+
+
 ## delivery_id: DELIV-2026-11-17-ML4D-ENSEMBLE-04-CP01-CP02

 | Field | Value |

```

## 11. Statistiques des diffs
```
 .../construction/delivery-history.md               |  19 ++
 .../web/src/app/api/projects/[projectId]/route.ts  |   1 +
 .../web/src/app/projects/[projectId]/page.tsx      | 191 +++++++++++++++++-
 .../web/src/components/figma/NoraConversation.tsx  | 174 ++++++++++++++---
 .../web/src/components/figma/ProjectChrome.tsx     |   8 +-
 .../web/src/components/figma/tokens.css            | 217 ++++++++++++++++++++-
 .../web/src/domains/conversation/service.ts        |  57 ++++++
 .../web/src/domains/conversation/turn-command.ts   |   6 +-
 .../web/src/domains/preparation/project-context.ts |   4 +-
 9 files changed, 635 insertions(+), 42 deletions(-)

```

## git status
```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio-next/construction/delivery-history.md
 M projects/sfia-studio-next/web/src/app/api/projects/[projectId]/route.ts
 M projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
 M projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
 M projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
 M projects/sfia-studio-next/web/src/components/figma/tokens.css
 M projects/sfia-studio-next/web/src/domains/conversation/service.ts
 M projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts
 M projects/sfia-studio-next/web/src/domains/preparation/project-context.ts
?? projects/sfia-studio-next/construction/as-built-ensemble-05-travail-nora-20261117.md
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/
?? projects/sfia-studio-next/web/src/components/figma/TravailViewer.tsx
?? projects/sfia-studio-next/web/src/domains/conversation/composer-draft.ts
?? projects/sfia-studio-next/web/src/domains/conversation/turn-projection.ts
?? projects/sfia-studio-next/web/src/hooks/
?? projects/sfia-studio-next/web/tests/e2e/ensemble05-travail-nora.spec.ts
?? projects/sfia-studio-next/web/tests/unit/ensemble05-turn-projection.test.ts

```

## 12. Tests, commandes et résultats
| Suite | Résultat |
|---|---|
| `vitest` ensemble05-turn-projection + studio-rail | **18 PASS** |
| `playwright` ensemble05-travail-nora | **PASS** |
| `playwright` project-space-ensemble04 (nreg) | **3 PASS** |
| `next build` | **PASS** |
| tsc workspace | FAIL parent préexistant (hors E05 src) — réserve historique |

## 13. Captures
- `projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/runtime-nominal-1680x970.png`
- `projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/figma-700-39-nominal.png`
- Verdict Figma↔runtime: captures présentes ; **FIGMA TO RUNTIME ALIGNED** non déclaré (pas de delta ≤2px sur 16 variantes)

## 14. Matrice scénarios UX (88 candidats)
| Famille | Statut |
|---|---|
| UX002 (9) | Couverture BROWSER partielle via E05 scroll + refresh/retour |
| UX-NORA (25) | Partiel — choices/projection/fixture ; progressive text **NOT COVERED V1** |
| UX-COMP (13) | Partiel — draft/IME/Enter rules unit+browser |
| UX-ACT (16) | Partiel — preparing honest ; contextual live steps LIMITED |
| UX-VIEW (15) | Partiel — doc viewer 50/50/enlarged ; Git content path LIMITED |
| UX-CROSS (10) | Partiel — nav Documents/Travail draft ; E04 nreg |

## 15. Fake/Real Qualification
| Preuve | Classe |
|---|---|
| Nora | **FAKE** fixture deterministic |
| PG | **REAL** DEV/e2e sibling DB |
| Git viewer fetch | **NOT EXECUTED** |
| RECETTE mutation | **NONE** — build `3LzvYPTQc-Km7St6nF97r` observed intact |

## 16. Réserves / dette / exit
1. Progressive text M2 — exit when publishable stream + safe resume proven.
2. Live mid-flight activity events — needs transport; honest wait until then.
3. Git in-Travail content fetch — wire existing D9 read under rights.
4. Full F2 16-variant geometry — dedicated visual gate.
5. Shell env had transient RECETTE-user/DSN confusion during cycle; restored operator DEV `sfia_next_dev@5433` for tests; `.env.local` gitignored; RECETTE untouched.

## 17. Décisions Morris supplémentaires
Aucune nouvelle décision structurante requise pour clôturer le candidat local. Arbitrages ouverts optionnels: F2 gate, progressive text exit, Git viewer fetch.

## 18. ENV-01 / versioning / promotion
- DEV REQUIRED — used
- RECETTE protected — unchanged `3LzvYPTQc-Km7St6nF97r`
- STABLE NOT AVAILABLE
- **NO RELEASE** this cycle
- No product commit/push/PR/merge

## 19. Verdict unique
**IMPLEMENTED CANDIDATE WITH RESERVES — MORRIS REVIEW REQUIRED**

## 20. Prochaine action attendue
Revue ChatGPT sur handoff distant `sfia/review-handoff` puis décision Morris (acceptation réserves / F2 / éventuel GO RECETTE distinct).
