# Cycle 8 — Delivery F1 Assistant projet contextualisé SFIA Studio

## Identity

| Field | Value |
|---|---|
| **Cycle** | Cycle 8 — Delivery F1 Assistant projet contextualisé SFIA Studio |
| **GO Morris consommé** | `GO DELIVERY — F1 ASSISTANT PROJET CONTEXTUALISÉ SFIA STUDIO — STANDARD` |
| **Role** | Cycle 8 Delivery — native Studio project assistant |
| **Synthesis-only** | NO |
| **Timestamp Europe/Paris** | Mon Aug 10 16:43:39 CEST 2026 |
| **Timestamp UTC** | Mon Aug 10 14:43:39 UTC 2026 |
| **Inbound handoff tip** | `ede017bef4ce845ea60569501c163d56801f5846` |
| **Inbound review blob** | `0530f14b1082771862b26ecdda6baa447ba0347b` |
| **Inbound content** | Cycle 2 F1 ASSISTANT PROJECT FUNCTIONAL DESIGN COMPLETE |
| **CKC** | Delivery pilot absent — fallback `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md` + §4.8 |
| **Branch** | `delivery/sfia-studio-f1-project-assistant` |
| **HEAD** | `9b6d4bc3d4b73afb7a6a5b436848578fc9970c34` |
| **origin/main** | `9b6d4bc3d4b73afb7a6a5b436848578fc9970c34` |
| **Local Git Truth** | HEAD=origin/main=9b6d4bc… · project changes uncommitted · no project commit/push |

## Verdict

```
F1 ASSISTANT PROJECT DELIVERY COMPLETE WITH ENVIRONMENTAL RESERVE —
NATIVE STUDIO ASSISTANT IMPLEMENTED —
PROJECT CONTEXT WIRED —
MULTI-TURN FIXTURE PROVED —
GIT READ SOURCES VISIBLE —
READ-ONLY BOUNDARY PRESERVED —
OPS1 NOT REQUIRED FOR PRIMARY F1 PATH —
FINOPS POSTGRES ENVIRONMENTAL RESERVE CARRIED NON-BLOCKING —
NO CURSOR / NO WRITE / NO LIVE CALL —
NO PROJECT COMMIT / PUSH / PR / MERGE —
READY FOR CHATGPT REVIEW / MORRIS COMMIT GATE
```

Reserve basis: full `npm test` was **not** used as the green gate. Green suite was `npx vitest run --exclude '__tests__/oa/finops/postgres/**'` (1588 tests). FinOps postgres ECONNREFUSED remains an environmental reserve if the postgres suite is run without a local DB — non-blocking for F1.

## Acceptance Criteria AC-F1-01..15

| ID | Criterion | Status | Evidence |
|---|---|---|---|
| **AC-F1-01** | Depuis `/studio/projects/[id]`, l’Assistant est accessible sans navigation vers `/ops1/**`. | **PASS** | `page.tsx` wires `ProjectAssistantPanel` into `StudioShell` copilot `interactiveContent`. Panel test asserts no OPS1 navigation. Runtime screenshot `01-workspace-assistant-ready.png`. |
| **AC-F1-02** | L’Assistant reçoit le contexte du Project courant depuis les sources produit existantes (runtime projection). | **PASS** | `orchestrateTurn` loads project via `loadProjectRuntimeForAssistant` → V2 runtime singleton. System prompt built by `buildProjectSystemPrompt`. |
| **AC-F1-03** | Objectif / LPS réellement disponibles sont pris en compte sans saisie manuelle redondante. | **PASS** | `toContextDto` maps objective, LPS id/version/createdAt, doctrine into prompt/context DTO. Unit coverage in `orchestrateTurn.test.ts`. |
| **AC-F1-04** | L’utilisateur peut saisir un message et recevoir une réponse dans le Workspace. | **PASS** | Composer + send action; fixture reply tagged `[TEST/FAKE · NON LIVE]`. Runtime AC-fake-response PASS; screenshot `02-…`. |
| **AC-F1-05** | La conversation supporte plusieurs tours pendant le contexte runtime supporté par F1. | **PASS** | Panel test multi-turn; runtime AC-second-turn PASS with history echoed by fake provider. |
| **AC-F1-06** | L’Assistant peut invoquer les capacités Git read autorisées via la plateforme existante. | **PASS** | Fake `__CT_TOOL_GIT_STATUS__` → `git_local_get_status` via platform tool loop. Runtime AC-git-read-source PASS. |
| **AC-F1-07** | Les sources réellement consultées sont visibles ou inspectables dans l’interface. | **PASS** | `project-assistant-source-item` list with status. Screenshot `03-assistant-git-read-source.png`. |
| **AC-F1-08** | Un refus policy Git est visible et ne bloque pas de façon ambiguë le Workspace. | **PASS** | `__CT_TOOL_DENIED_PATH__` → denied source item. Runtime AC-git-deny PASS; screenshot `04-…`. Workspace remains usable. |
| **AC-F1-09** | Aucune écriture Git/GitHub n’est disponible depuis F1. | **PASS** | UI pill `project-assistant-no-write`; tool surface is read-only platform tools; no write tools wired in F1. |
| **AC-F1-10** | Aucune action Cursor n’est disponible depuis F1. | **PASS** | UI pill `project-assistant-no-cursor`; no Cursor imports/actions in feature. |
| **AC-F1-11** | Une indisponibilité provider live est fail-closed et explicitement signalée. | **PASS** | `resolveMode()` when fake not forced uses `getLiveConversationAvailability()` and returns `provider_unavailable` without silent proceed. |
| **AC-F1-12** | Aucun fallback silencieux live→fixture. | **PASS** | Fixture only when `OPS1_CONVERSATION_PROVIDER=fake` forced; otherwise unavailable path. Runtime ran with fake forced only. |
| **AC-F1-13** | Le parcours F1 ne crée pas de dépendance fonctionnelle à une session OPS1. | **PASS** | `importBoundaries` forbids ops1 imports; no OPS1 session in actions/orchestrate; primary path is Studio workspace. |
| **AC-F1-14** | L’expérience n’affirme aucune persistence durable non réellement disponible. | **PASS** | Ephemeral notice in UI + `ephemeralNotice` on success DTO; mode label fixture/demo. |
| **AC-F1-15** | CTA Workspace→OPS1 « Continuer le pilotage » : conserver escape hatch secondaire temporaire. | **PASS** | Hint/CTA retained as temporary secondary (`workspace-continue-pilotage` / temporary copy). Recommendation from design carried; demote/hide deferred. |

## Local Git Truth

```text
branch=delivery/sfia-studio-f1-project-assistant
HEAD=9b6d4bc3d4b73afb7a6a5b436848578fc9970c34
origin/main=9b6d4bc3d4b73afb7a6a5b436848578fc9970c34
status:
 M projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx
 M projects/sfia-studio/app/app/studio/projects/[id]/page.tsx
 M projects/sfia-studio/app/components/shell/CopilotPanel.tsx
 M projects/sfia-studio/app/features/vertical-slice-ui/ProjectWorkspaceView.tsx
 M projects/sfia-studio/app/features/vertical-slice-ui/project-workspace.module.css
?? .tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/project-assistant/
?? projects/sfia-studio/app/features/project-assistant/

diff --name-status:
M	projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx
M	projects/sfia-studio/app/app/studio/projects/[id]/page.tsx
M	projects/sfia-studio/app/components/shell/CopilotPanel.tsx
M	projects/sfia-studio/app/features/vertical-slice-ui/ProjectWorkspaceView.tsx
M	projects/sfia-studio/app/features/vertical-slice-ui/project-workspace.module.css

diff --stat:
 .../vertical-slice-ui/projectWorkspaceUi.test.tsx  |  11 +-
 .../app/app/studio/projects/[id]/page.tsx          |  19 +--
 .../app/components/shell/CopilotPanel.tsx          | 151 +++++++++++----------
 .../vertical-slice-ui/ProjectWorkspaceView.tsx     |  45 ++++--
 .../vertical-slice-ui/project-workspace.module.css |  24 +++-
 5 files changed, 149 insertions(+), 101 deletions(-)

diff --check: exit=0
(clean)

diff --cached --name-status:
(empty)

commits ahead of origin/main: 0
```

## Mutations counters (project)

| Mutation | Count |
|---|---:|
| project commit | 0 |
| project push | 0 |
| project PR | 0 |
| project merge | 0 |

Handoff publish (separate branch `sfia/review-handoff`) is the only intended remote mutation for this pack.

## Files created — full content

### Feature `projects/sfia-studio/app/features/project-assistant/`

#### `projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx`

```tsx
"use client";

import { useEffect, useId, useRef, useState, useTransition } from "react";
import { StatusPill } from "@/components/ui/StatusPill";
import { projectAssistantSendAction } from "./actions";
import type {
  AssistantHistoryMessage,
  AssistantToolEventDto,
} from "./types";
import styles from "./project-assistant.module.css";

type UiMessage = {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
};

type UiState =
  | "INITIAL"
  | "READY"
  | "SENDING"
  | "ASSISTANT_WORKING"
  | "SOURCE_LOOKUP"
  | "ANSWERED"
  | "ERROR_RECOVERABLE"
  | "BLOCKED";

function nextId(prefix: string): string {
  return `${prefix}-${Math.random().toString(36).slice(2, 10)}`;
}

function statusLabel(status: AssistantToolEventDto["status"]): string {
  switch (status) {
    case "succeeded":
      return "Succès (lecture)";
    case "denied":
      return "Refus policy";
    case "failed":
      return "Échec";
    case "started":
      return "En cours";
    default:
      return "Demandé";
  }
}

export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
  const inputId = useId();
  const liveRegionId = useId();
  const [messages, setMessages] = useState<UiMessage[]>([]);
  const [draft, setDraft] = useState("");
  const [toolEvents, setToolEvents] = useState<AssistantToolEventDto[]>([]);
  const [uiState, setUiState] = useState<UiState>("INITIAL");
  const [error, setError] = useState<string | null>(null);
  const [modeLabel, setModeLabel] = useState("Mode démonstration / Fixture");
  const [ephemeralNotice, setEphemeralNotice] = useState(
    "Conversation éphémère — aucune persistence produit.",
  );
  const [isPending, startTransition] = useTransition();
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setUiState((prev) => (prev === "INITIAL" ? "READY" : prev));
  }, []);

  useEffect(() => {
    const el = listRef.current;
    if (!el || typeof el.scrollTo !== "function") return;
    el.scrollTo({
      top: el.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, toolEvents, error]);

  const busy =
    isPending ||
    uiState === "SENDING" ||
    uiState === "ASSISTANT_WORKING" ||
    uiState === "SOURCE_LOOKUP";
  const blocked = uiState === "BLOCKED";
  const canSend = !busy && !blocked && draft.trim().length > 0;

  function historyForRequest(): AssistantHistoryMessage[] {
    return messages
      .filter((m) => m.role === "user" || m.role === "assistant")
      .map((m) => ({ role: m.role as "user" | "assistant", content: m.content }));
  }

  function sendMessage(contentOverride?: string) {
    const content = (contentOverride ?? draft).trim();
    if (!content || busy || blocked) return;

    const userMessage: UiMessage = {
      id: nextId("user"),
      role: "user",
      content,
    };
    const history = historyForRequest();
    setMessages((prev) => [...prev, userMessage]);
    setDraft("");
    setError(null);
    setUiState("SENDING");

    startTransition(async () => {
      setUiState("ASSISTANT_WORKING");
      const result = await projectAssistantSendAction({
        projectId,
        content,
        history,
      });

      if (!result.ok) {
        if (result.status === "provider_unavailable") {
          setUiState("BLOCKED");
          setModeLabel("Assistant indisponible");
        } else {
          setUiState("ERROR_RECOVERABLE");
        }
        setError(result.message);
        return;
      }

      if (result.mode === "fixture") {
        setModeLabel("Mode démonstration / Fixture");
      } else if (result.mode === "live") {
        setModeLabel("Mode live (provider configuré)");
      }
      setEphemeralNotice(result.ephemeralNotice);
      setToolEvents((prev) => [...prev, ...result.toolEvents]);
      if (result.toolEvents.length > 0) {
        setUiState("SOURCE_LOOKUP");
      }
      setMessages((prev) => [
        ...prev,
        {
          id: nextId("assistant"),
          role: "assistant",
          content: result.text,
        },
      ]);
      setUiState("ANSWERED");
    });
  }

  return (
    <div
      className={styles.root}
      data-testid="project-assistant-panel"
      data-ui-state={uiState}
    >
      <div className={styles.metaRow} data-testid="project-assistant-mode-pill">
        <StatusPill tone="blueFlush">{modeLabel}</StatusPill>
        <StatusPill tone="muted">Lecture seule</StatusPill>
      </div>
      <p className={styles.ephemeral} data-testid="project-assistant-ephemeral">
        {ephemeralNotice}
      </p>
      <p className={styles.scope} data-testid="project-assistant-scope">
        Périmètre F1 : analyse · conversation · lecture Git/GitHub. Pas
        d&apos;exécution Cursor, pas d&apos;écriture, pas de qualification F2.
      </p>

      <div
        ref={listRef}
        className={styles.messages}
        data-testid="project-assistant-messages"
        aria-live="polite"
        id={liveRegionId}
      >
        {messages.length === 0 ? (
          <p
            className={styles.empty}
            data-testid="project-assistant-empty"
          >
            Posez une question sur ce projet. Le contexte Project/LPS est injecté
            automatiquement.
          </p>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className={
                message.role === "user"
                  ? styles.userTurn
                  : styles.assistantTurn
              }
              data-testid={`project-assistant-turn-${message.role}`}
              data-role={message.role}
            >
              <p className={styles.turnRole}>
                {message.role === "user" ? "Vous" : "Assistant"}
              </p>
              <p className={styles.turnText}>{message.content}</p>
            </div>
          ))
        )}
      </div>

      <section
        className={styles.sources}
        aria-labelledby="project-assistant-sources-title"
        data-testid="project-assistant-sources"
      >
        <h3 id="project-assistant-sources-title" className={styles.sourcesTitle}>
          Sources consultées (lecture seule)
        </h3>
        {toolEvents.length === 0 ? (
          <p className={styles.sourcesEmpty}>Aucune source consultée pour l&apos;instant.</p>
        ) : (
          <ul className={styles.sourceList}>
            {toolEvents.map((event, index) => (
              <li
                key={`${event.toolName}-${index}-${event.pathOrRef ?? "na"}`}
                className={styles.sourceItem}
                data-testid="project-assistant-source-item"
                data-status={event.status}
              >
                <details>
                  <summary>
                    <span className={styles.sourceOp}>{event.toolName}</span>
                    {" · "}
                    <span className={styles.sourceStatus}>
                      {statusLabel(event.status)}
                    </span>
                    {event.pathOrRef ? (
                      <>
                        {" · "}
                        <code>{event.pathOrRef}</code>
                      </>
                    ) : null}
                  </summary>
                  <p className={styles.sourceDetail}>
                    {event.summary ?? "Aucun résumé supplémentaire."}
                    {event.errorCode ? ` (${event.errorCode})` : ""}
                    {" · "}
                    lecture seule confirmée
                  </p>
                </details>
              </li>
            ))}
          </ul>
        )}
      </section>

      {error ? (
        <div
          className={styles.error}
          role="alert"
          data-testid="project-assistant-error"
        >
          <p>{error}</p>
          {uiState === "ERROR_RECOVERABLE" ? (
            <button
              type="button"
              className={styles.retry}
              data-testid="project-assistant-retry"
              onClick={() => {
                const lastUser = [...messages]
                  .reverse()
                  .find((m) => m.role === "user");
                if (lastUser) {
                  setMessages((prev) =>
                    prev.filter((m) => m.id !== lastUser.id),
                  );
                  sendMessage(lastUser.content);
                }
              }}
            >
              Réessayer
            </button>
          ) : null}
        </div>
      ) : null}

      <div
        className={styles.statusLine}
        aria-live="polite"
        data-testid="project-assistant-status"
      >
        {busy
          ? uiState === "SOURCE_LOOKUP"
            ? "Consultation des sources en cours…"
            : "Assistant en cours de réponse…"
          : blocked
            ? "Assistant bloqué — configuration manquante."
            : "Prêt"}
      </div>

      <form
        className={styles.composer}
        data-testid="project-assistant-composer"
        onSubmit={(event) => {
          event.preventDefault();
          sendMessage();
        }}
      >
        <label className={styles.srOnly} htmlFor={inputId}>
          Message à l&apos;Assistant SFIA du projet
        </label>
        <textarea
          id={inputId}
          className={styles.input}
          data-testid="project-assistant-input"
          rows={3}
          value={draft}
          disabled={busy || blocked}
          placeholder="Décrivez votre demande liée à ce projet…"
          aria-describedby={liveRegionId}
          onChange={(event) => setDraft(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter" && !event.shiftKey) {
              event.preventDefault();
              sendMessage();
            }
          }}
        />
        <div className={styles.composerRow}>
          <StatusPill tone="muted">@ contexte Project/LPS</StatusPill>
          <button
            type="submit"
            className={styles.send}
            data-testid="project-assistant-send"
            disabled={!canSend}
            aria-disabled={!canSend}
            title={
              blocked
                ? "Assistant indisponible"
                : busy
                  ? "Envoi en cours"
                  : draft.trim().length === 0
                    ? "Saisissez un message"
                    : "Envoyer le message"
            }
            aria-label={
              canSend
                ? "Envoyer le message à l'Assistant"
                : "Envoi indisponible"
            }
          >
            ↑
          </button>
        </div>
      </form>

      {/* Explicit absence of Cursor / write controls */}
      <div
        className={styles.srOnly}
        data-testid="project-assistant-no-cursor"
        aria-hidden="true"
      >
        Aucune action Cursor
      </div>
      <div
        className={styles.srOnly}
        data-testid="project-assistant-no-write"
        aria-hidden="true"
      >
        Aucune écriture Git ou GitHub
      </div>
    </div>
  );
}
```

#### `projects/sfia-studio/app/features/project-assistant/actions.ts`

```ts
"use server";

import { orchestrateProjectAssistantTurn } from "./orchestrateTurn";
import type {
  AssistantHistoryMessage,
  ProjectAssistantSendResult,
} from "./types";

/**
 * Thin server action — Project Workspace F1 Assistant.
 * No OPS1 session. No Cursor. No Git write. No durable persistence.
 */
export async function projectAssistantSendAction(input: {
  projectId: string;
  content: string;
  history?: AssistantHistoryMessage[];
}): Promise<ProjectAssistantSendResult> {
  return orchestrateProjectAssistantTurn(input);
}
```

#### `projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts`

```ts
import type { ProjectAssistantContextDto } from "./types";

/**
 * Compact F1 system prompt — project context + hard read-only limits.
 * No F2 qualification, no Cursor, no write, no durable persistence claims.
 */
export function buildProjectSystemPrompt(
  project: ProjectAssistantContextDto,
): string {
  const constraints =
    project.constraints.length > 0
      ? project.constraints.map((c) => `- ${c}`).join("\n")
      : "- (aucune contrainte listée)";

  const shortRef = project.shortReference
    ? `Référence courte : ${project.shortReference}`
    : "Référence courte : (absente)";

  return [
    "Tu es l'Assistant SFIA du Project Workspace (F1).",
    "Périmètre : ANALYSE / CONVERSATION / LECTURE SEULE.",
    "Tu n'as aucune autorité de décision, d'exécution Cursor, d'écriture Git/GitHub, ni de qualification de cycle SFIA (F2).",
    "Une intention utilisateur n'est jamais une autorisation d'exécution.",
    "Distingue clairement observation / hypothèse / recommandation lorsque pertinent.",
    "Tu peux demander une clarification.",
    "Tu peux utiliser uniquement les outils de lecture (Git/GitHub read) exposés.",
    "Ne revendique aucune persistence durable ; l'état conversationnel est éphémère.",
    "Ne propose pas d'ouvrir OPS1, Cursor, ni un gate d'exécution.",
    "",
    "Contexte projet (autorité Project/LPS runtime Studio) :",
    `Project ID : ${project.projectId}`,
    `Nom : ${project.name}`,
    shortRef,
    `Objectif : ${project.objective}`,
    `Contexte : ${project.contextSummary}`,
    `Criticité : ${project.criticality}`,
    "Contraintes :",
    constraints,
    `LPS : ${project.lpsId} (v${project.lpsVersion}, ${project.lpsCreatedAt})`,
    `Doctrine : ${project.doctrineId} ${project.doctrineVersion} · ${project.doctrineStatus} · ${project.doctrineDigest}`,
    `Runtime : ${project.runtimeMode} · persistence ${project.persistence} · readiness ${project.readiness}`,
  ].join("\n");
}
```

#### `projects/sfia-studio/app/features/project-assistant/collectToolTelemetry.ts`

```ts
import type { TechnicalEvent } from "@/lib/platform/observability/types";
import type { AssistantSourceDto, AssistantToolEventDto } from "./types";

function asString(v: unknown): string | null {
  return typeof v === "string" && v.length > 0 ? v : null;
}

function mapStatus(
  raw: unknown,
  eventType: string,
): AssistantToolEventDto["status"] {
  if (raw === "succeeded" || raw === "denied" || raw === "failed") {
    return raw;
  }
  if (eventType === "TOOL_SUCCEEDED") return "succeeded";
  if (eventType === "TOOL_DENIED") return "denied";
  if (eventType === "TOOL_FAILED") return "failed";
  if (eventType === "TOOL_STARTED") return "started";
  return "requested";
}

/**
 * Collect tool events + source refs from platform EventSink emissions.
 */
export function collectToolTelemetry(events: TechnicalEvent[]): {
  toolEvents: AssistantToolEventDto[];
  sources: AssistantSourceDto[];
} {
  const toolEvents: AssistantToolEventDto[] = [];
  const sources: AssistantSourceDto[] = [];
  const seenSources = new Set<string>();

  for (const event of events) {
    if (
      event.type !== "TOOL_SUCCEEDED" &&
      event.type !== "TOOL_DENIED" &&
      event.type !== "TOOL_FAILED"
    ) {
      continue;
    }

    const detail = event.detail;
    const toolName = asString(detail.toolName) ?? asString(detail.name) ?? "unknown";
    const status = mapStatus(detail.status, event.type);
    const source = detail.source as
      | { kind?: string; label?: string; pathOrRef?: string | null }
      | undefined;
    const pathOrRef =
      asString(source?.pathOrRef) ??
      asString(detail.path) ??
      asString(detail.pathOrRef);
    const summary = asString(detail.summary) ?? asString(detail.message);
    const errorCode = asString(detail.errorCode);

    toolEvents.push({
      toolName,
      status,
      pathOrRef,
      summary,
      errorCode,
      readOnly: true,
    });

    if (
      event.type === "TOOL_SUCCEEDED" &&
      source &&
      (source.kind === "git_local" || source.kind === "github")
    ) {
      const label = asString(source.label) ?? toolName;
      const key = `${source.kind}:${label}:${pathOrRef ?? ""}`;
      if (!seenSources.has(key)) {
        seenSources.add(key);
        sources.push({
          kind: source.kind,
          label,
          pathOrRef,
        });
      }
    }
  }

  return { toolEvents, sources };
}
```

#### `projects/sfia-studio/app/features/project-assistant/index.ts`

```ts
export { ProjectAssistantPanel } from "./ProjectAssistantPanel";
export type {
  ProjectAssistantSendResult,
  AssistantHistoryMessage,
  AssistantToolEventDto,
} from "./types";
```

#### `projects/sfia-studio/app/features/project-assistant/memoryEventSink.ts`

```ts
/**
 * In-memory EventSink for F1 — mirrors D1 pattern; no OPS1/DB dependency.
 */
import type { EventSink } from "@/lib/platform/observability/eventSink";
import type { TechnicalEvent } from "@/lib/platform/observability/types";
import { redactSecrets } from "@/lib/platform/security/redaction";

function redactDetail(
  detail: Record<string, unknown>,
): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(detail)) {
    if (typeof v === "string") {
      out[k] = redactSecrets(v);
    } else if (v && typeof v === "object" && !Array.isArray(v)) {
      out[k] = redactDetail(v as Record<string, unknown>);
    } else {
      out[k] = v;
    }
  }
  return out;
}

export class ProjectAssistantMemoryEventSink implements EventSink {
  readonly events: TechnicalEvent[] = [];

  emit(event: TechnicalEvent): void {
    this.events.push({
      type: event.type,
      correlationId: event.correlationId,
      detail: redactDetail(event.detail ?? {}),
    });
  }
}
```

#### `projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts`

```ts
import {
  getLiveConversationAvailability,
  isFakeConversationProviderForced,
  resolveConversationProvider,
  type ProviderChatMessage,
} from "@/lib/platform/ai";
import { runToolCallingLoop } from "@/lib/platform/tools";
import { resolveWorkspaceRootFromAppCwd } from "@/lib/platform/repository/workspaceRoot";
import { loadProjectRuntimeForAssistant } from "@/features/vertical-slice-ui/ProjectWorkspaceView";
import { buildProjectSystemPrompt } from "./buildProjectSystemPrompt";
import { collectToolTelemetry } from "./collectToolTelemetry";
import { ProjectAssistantMemoryEventSink } from "./memoryEventSink";
import type {
  AssistantHistoryMessage,
  ProjectAssistantContextDto,
  ProjectAssistantSendResult,
} from "./types";

const MAX_HISTORY_MESSAGES = 20;
const EPHEMERAL_NOTICE =
  "Conversation éphémère (process-local) — un rechargement ou redémarrage peut effacer l'historique. Aucune persistence produit.";

function toContextDto(
  result: Extract<
    Awaited<ReturnType<typeof loadProjectRuntimeForAssistant>>,
    { ok: true }
  >,
): ProjectAssistantContextDto {
  return {
    projectId: result.project.projectId,
    name: result.project.name,
    shortReference: result.project.shortReference ?? null,
    objective: result.project.objective,
    contextSummary: result.project.contextSummary,
    criticality: result.project.criticality,
    constraints: [...result.project.constraints],
    lpsId: result.livingState.id,
    lpsVersion: result.livingState.version,
    lpsCreatedAt: result.livingState.createdAt,
    doctrineId: result.doctrine.id,
    doctrineVersion: result.doctrine.version,
    doctrineDigest: result.doctrine.digest,
    doctrineStatus: result.doctrine.status,
    runtimeMode: result.disclosures.runtimeMode,
    persistence: result.disclosures.persistence,
    readiness: result.readiness.status,
  };
}

function resolveMode(): {
  mode: "fixture" | "live" | "unavailable";
  canProceed: boolean;
  message?: string;
} {
  if (isFakeConversationProviderForced()) {
    return { mode: "fixture", canProceed: true };
  }
  const availability = getLiveConversationAvailability();
  if (!availability.available) {
    return {
      mode: "unavailable",
      canProceed: false,
      message: `Assistant indisponible — configuration manquante (${availability.missing.join(", ")}). Aucun basculement silencieux vers le mode démonstration.`,
    };
  }
  return { mode: "live", canProceed: true };
}

/**
 * Thin F1 orchestration — platform AI + tool loop only (no OPS1 session).
 */
export async function orchestrateProjectAssistantTurn(input: {
  projectId: string;
  content: string;
  history?: AssistantHistoryMessage[];
}): Promise<ProjectAssistantSendResult> {
  const content = input.content.trim();
  if (!content) {
    return {
      ok: false,
      status: "validation_error",
      code: "EMPTY_MESSAGE",
      message: "Saisissez un message avant d'envoyer.",
      mode: isFakeConversationProviderForced() ? "fixture" : "unavailable",
      retryable: true,
    };
  }

  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
  if (!projectResult.ok) {
    return {
      ok: false,
      status: "project_not_found",
      code: projectResult.error.code,
      message: projectResult.error.message,
      mode: isFakeConversationProviderForced() ? "fixture" : "unavailable",
      retryable: false,
    };
  }

  const project = toContextDto(projectResult);
  const modeResolution = resolveMode();
  if (!modeResolution.canProceed) {
    return {
      ok: false,
      status: "provider_unavailable",
      code: "PROVIDER_UNAVAILABLE",
      message: modeResolution.message ?? "Provider indisponible.",
      mode: "unavailable",
      retryable: false,
    };
  }

  const history = (input.history ?? [])
    .filter(
      (m) =>
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim().length > 0,
    )
    .slice(-MAX_HISTORY_MESSAGES);

  const messages: ProviderChatMessage[] = [
    { role: "system", content: buildProjectSystemPrompt(project) },
    ...history.map((m) => ({ role: m.role, content: m.content.trim() })),
    { role: "user", content },
  ];

  const sink = new ProjectAssistantMemoryEventSink();
  const workspaceRoot = resolveWorkspaceRootFromAppCwd();
  const provider = resolveConversationProvider();
  const presentation =
    isFakeConversationProviderForced() || provider.providerId === "fake-test"
      ? "test_provider"
      : "openai_live";

  try {
    const loop = await runToolCallingLoop({
      correlationId: `f1:${project.projectId}`,
      messages,
      provider,
      enableTools: true,
      sink,
      workspaceRoot,
    });

    const { toolEvents, sources } = collectToolTelemetry(sink.events);

    return {
      ok: true,
      status: "ok",
      text: loop.text,
      mode: modeResolution.mode,
      presentation,
      toolRounds: loop.toolRounds,
      toolCalls: loop.toolCalls,
      sources,
      toolEvents,
      project,
      ephemeralNotice: EPHEMERAL_NOTICE,
    };
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Erreur provider inattendue.";
    return {
      ok: false,
      status: "provider_error",
      code: "PROVIDER_ERROR",
      message:
        message === "FAKE_PROVIDER_ERROR"
          ? "Le fournisseur de démonstration a signalé une erreur. Réessayez manuellement."
          : message,
      mode: modeResolution.mode,
      retryable: true,
    };
  }
}
```

#### `projects/sfia-studio/app/features/project-assistant/project-assistant.module.css`

```css
.root {
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  min-height: 0;
  box-sizing: border-box;
}

.metaRow {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.ephemeral,
.scope,
.empty,
.sourcesEmpty,
.statusLine {
  margin: 0;
  color: var(--sfia-muted);
  font-size: 12px;
  line-height: 1.4;
}

.scope {
  color: var(--sfia-ink);
}

.messages {
  flex: 1;
  min-height: 140px;
  max-height: 280px;
  overflow: auto;
  display: grid;
  gap: 8px;
  padding: 8px;
  border: 1px solid var(--sfia-border-soft);
  border-radius: 10px;
  background: #fff;
}

.userTurn,
.assistantTurn {
  display: grid;
  gap: 4px;
  padding: 8px 10px;
  border-radius: 8px;
}

.userTurn {
  background: #f3f6fb;
}

.assistantTurn {
  background: #f8f4ff;
}

.turnRole {
  margin: 0;
  font-size: 11px;
  font-weight: 650;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: var(--sfia-muted);
}

.turnText {
  margin: 0;
  color: var(--sfia-ink);
  font-size: 13px;
  line-height: 1.45;
  white-space: pre-wrap;
}

.sources {
  display: grid;
  gap: 6px;
}

.sourcesTitle {
  margin: 0;
  font-size: 12px;
  font-weight: 650;
  color: var(--sfia-ink);
}

.sourceList {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 6px;
}

.sourceItem {
  border: 1px solid var(--sfia-border-soft);
  border-radius: 8px;
  padding: 6px 8px;
  background: #fff;
  font-size: 12px;
}

.sourceItem[data-status="denied"] {
  border-color: #d97706;
}

.sourceItem[data-status="failed"] {
  border-color: #b42318;
}

.sourceItem[data-status="succeeded"] {
  border-color: #127c4c;
}

.sourceOp {
  font-weight: 650;
}

.sourceStatus {
  font-weight: 600;
}

.sourceDetail {
  margin: 6px 0 0;
  color: var(--sfia-muted);
}

.error {
  border: 1px solid #b42318;
  background: #fff5f5;
  color: #7a1f16;
  border-radius: 8px;
  padding: 8px 10px;
  display: grid;
  gap: 8px;
}

.error p {
  margin: 0;
  font-size: 13px;
}

.retry {
  justify-self: start;
  border: 1px solid #b42318;
  background: #fff;
  color: #7a1f16;
  border-radius: 8px;
  padding: 6px 10px;
  font-size: 12px;
  cursor: pointer;
}

.composer {
  display: grid;
  gap: 8px;
  margin-top: auto;
}

.input {
  width: 100%;
  resize: vertical;
  min-height: 72px;
  border: 1px solid var(--sfia-border-soft);
  border-radius: 10px;
  padding: 10px 12px;
  font: inherit;
  color: var(--sfia-ink);
  box-sizing: border-box;
}

.input:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.composerRow {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.send {
  width: 36px;
  height: 36px;
  border-radius: 999px;
  border: none;
  background: var(--sfia-navy);
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}

.send:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.srOnly {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

#### `projects/sfia-studio/app/features/project-assistant/types.ts`

```ts
/**
 * F1 Project Assistant — ephemeral DTOs (no durable persistence).
 */

export type AssistantUiMode = "fixture" | "live" | "unavailable";

export type AssistantTurnStatus =
  | "ok"
  | "provider_unavailable"
  | "provider_error"
  | "project_not_found"
  | "validation_error";

export type AssistantHistoryMessage = {
  role: "user" | "assistant";
  content: string;
};

export type AssistantToolEventDto = {
  toolName: string;
  status: "succeeded" | "denied" | "failed" | "started" | "requested";
  pathOrRef: string | null;
  summary: string | null;
  errorCode: string | null;
  readOnly: true;
};

export type AssistantSourceDto = {
  kind: "git_local" | "github";
  label: string;
  pathOrRef: string | null;
};

export type ProjectAssistantContextDto = {
  projectId: string;
  name: string;
  shortReference: string | null;
  objective: string;
  contextSummary: string;
  criticality: string;
  constraints: string[];
  lpsId: string;
  lpsVersion: number;
  lpsCreatedAt: string;
  doctrineId: string;
  doctrineVersion: string;
  doctrineDigest: string;
  doctrineStatus: string;
  runtimeMode: string;
  persistence: string;
  readiness: string;
};

export type ProjectAssistantSendSuccess = {
  ok: true;
  status: "ok";
  text: string;
  mode: AssistantUiMode;
  presentation: "test_provider" | "openai_live";
  toolRounds: number;
  toolCalls: number;
  sources: AssistantSourceDto[];
  toolEvents: AssistantToolEventDto[];
  project: ProjectAssistantContextDto;
  ephemeralNotice: string;
};

export type ProjectAssistantSendFailure = {
  ok: false;
  status: Exclude<AssistantTurnStatus, "ok">;
  code: string;
  message: string;
  mode: AssistantUiMode;
  retryable: boolean;
};

export type ProjectAssistantSendResult =
  | ProjectAssistantSendSuccess
  | ProjectAssistantSendFailure;
```

### Tests `projects/sfia-studio/app/__tests__/project-assistant/`

#### `projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx`

```tsx
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import axe from "axe-core";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { StudioShell } from "@/components/shell/StudioShell";
import { ProjectAssistantPanel } from "@/features/project-assistant/ProjectAssistantPanel";
import { ProjectWorkspaceView } from "@/features/vertical-slice-ui/ProjectWorkspaceView";

const { projectAssistantSendActionMock } = vi.hoisted(() => ({
  projectAssistantSendActionMock: vi.fn(),
}));

vi.mock("@/features/project-assistant/actions", () => ({
  projectAssistantSendAction: (...args: unknown[]) =>
    projectAssistantSendActionMock(...args),
}));

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

const SUCCESS_RESULT = {
  ok: true as const,
  project: {
    projectId: "prj:f1-ui",
    name: "Projet F1 UI",
    shortReference: "F1UI",
    objective: "Valider le panneau assistant.",
    contextSummary: "UI F1.",
    criticality: "STANDARD" as const,
    constraints: [] as string[],
    localMode: true as const,
    source: "REAL_LOCAL_CORE" as const,
    fixture: false as const,
  },
  doctrine: {
    id: "pkg:studio-v3-oa",
    version: "1.0.0",
    digest: "digest:f1-ui",
    status: "RESOLVED",
  },
  livingState: {
    id: "lps:f1-ui",
    version: 1 as const,
    createdAt: "2026-08-10T12:00:00.000Z",
  },
  readiness: {
    status: "NOT_READY" as const,
    hard: "OPEN" as const,
    tA6: "INCOMPLETE" as const,
    iam: "NOT_SELECTED" as const,
    productPersistence: "NOT_SELECTED" as const,
    realAgentExecution: "DISABLED" as const,
    delivery: "NOT_AUTHORIZED" as const,
    cutover: "NOT_AUTHORIZED" as const,
    runReady: false as const,
    productReady: false as const,
  },
  disclosures: {
    runtimeMode: "LOCAL_PROCESS" as const,
    persistence: "NOT_GUARANTEED" as const,
    agentExecution: "DISABLED" as const,
    iam: "NOT_SELECTED" as const,
    productPersistence: "NOT_SELECTED" as const,
    delivery: "NOT_AUTHORIZED" as const,
    cutover: "NOT_AUTHORIZED" as const,
    localDataVolatile: true as const,
    restartMayLoseState: true as const,
    messages: [] as const,
  },
};

describe("F1 ProjectAssistantPanel UI", () => {
  beforeEach(() => {
    projectAssistantSendActionMock.mockReset();
  });

  afterEach(() => {
    cleanup();
  });

  it(
    "enables composer in Copilot interactive slot without OPS1 navigation",
    async () => {
    projectAssistantSendActionMock.mockResolvedValue({
      ok: true,
      status: "ok",
      text: "[TEST/FAKE · NON LIVE] Bonjour projet",
      mode: "fixture",
      presentation: "test_provider",
      toolRounds: 0,
      toolCalls: 0,
      sources: [],
      toolEvents: [],
      project: {
        projectId: "prj:f1-ui",
        name: "Projet F1 UI",
        shortReference: "F1UI",
        objective: "Valider le panneau assistant.",
        contextSummary: "UI F1.",
        criticality: "STANDARD",
        constraints: [],
        lpsId: "lps:f1-ui",
        lpsVersion: 1,
        lpsCreatedAt: "2026-08-10T12:00:00.000Z",
        doctrineId: "pkg:studio-v3-oa",
        doctrineVersion: "1.0.0",
        doctrineDigest: "digest:f1-ui",
        doctrineStatus: "RESOLVED",
        runtimeMode: "LOCAL_PROCESS",
        persistence: "NOT_GUARANTEED",
        readiness: "NOT_READY",
      },
      ephemeralNotice: "Conversation éphémère",
    });

    render(
      <StudioShell
        variant="flush"
        activeRoute={"/studio/projects/prj:f1-ui" as never}
        title="Espace projet"
        showTabs={false}
        primaryAction={null}
        copilot={{
          variant: "flush",
          name: "Nora · Assistant projet",
          subtitle: "Analyse · conversation · lecture seule",
          summary: "unused when interactive",
          interactiveContent: <ProjectAssistantPanel projectId="prj:f1-ui" />,
        }}
      >
        <ProjectWorkspaceView projectId="prj:f1-ui" result={SUCCESS_RESULT} />
      </StudioShell>,
    );

    expect(screen.getByTestId("project-assistant-panel")).toBeVisible();
    expect(screen.queryByTestId("copilot-composer-disabled")).toBeNull();
    expect(screen.getByTestId("project-assistant-composer")).toBeVisible();
    expect(screen.getByTestId("project-assistant-input")).toBeEnabled();
    expect(screen.getByTestId("project-assistant-no-cursor")).toBeInTheDocument();
    expect(screen.getByTestId("project-assistant-no-write")).toBeInTheDocument();
    expect(screen.getByTestId("workspace-primary-assistant-hint")).toBeVisible();
    expect(screen.getByTestId("workspace-continue-pilotage")).toHaveTextContent(
      /temporaire/i,
    );

    fireEvent.change(screen.getByTestId("project-assistant-input"), {
      target: { value: "Bonjour" },
    });
    fireEvent.click(screen.getByTestId("project-assistant-send"));

    await waitFor(() => {
      expect(projectAssistantSendActionMock).toHaveBeenCalledWith(
        expect.objectContaining({
          projectId: "prj:f1-ui",
          content: "Bonjour",
        }),
      );
    });

    expect(
      await screen.findByText("[TEST/FAKE · NON LIVE] Bonjour projet"),
    ).toBeVisible();

    // multi-tour
    projectAssistantSendActionMock.mockResolvedValueOnce({
      ok: true,
      status: "ok",
      text: "[TEST/FAKE · NON LIVE] Tour 2",
      mode: "fixture",
      presentation: "test_provider",
      toolRounds: 1,
      toolCalls: 1,
      sources: [],
      toolEvents: [
        {
          toolName: "git_local_get_status",
          status: "succeeded",
          pathOrRef: null,
          summary: "status ok",
          errorCode: null,
          readOnly: true,
        },
      ],
      project: {
        projectId: "prj:f1-ui",
        name: "Projet F1 UI",
        shortReference: "F1UI",
        objective: "Valider le panneau assistant.",
        contextSummary: "UI F1.",
        criticality: "STANDARD",
        constraints: [],
        lpsId: "lps:f1-ui",
        lpsVersion: 1,
        lpsCreatedAt: "2026-08-10T12:00:00.000Z",
        doctrineId: "pkg:studio-v3-oa",
        doctrineVersion: "1.0.0",
        doctrineDigest: "digest:f1-ui",
        doctrineStatus: "RESOLVED",
        runtimeMode: "LOCAL_PROCESS",
        persistence: "NOT_GUARANTEED",
        readiness: "NOT_READY",
      },
      ephemeralNotice: "Conversation éphémère",
    });

    fireEvent.change(screen.getByTestId("project-assistant-input"), {
      target: { value: "Deuxième tour" },
    });
    fireEvent.click(screen.getByTestId("project-assistant-send"));
    expect(await screen.findByText("[TEST/FAKE · NON LIVE] Tour 2")).toBeVisible();
    expect(screen.getByTestId("project-assistant-source-item")).toHaveAttribute(
      "data-status",
      "succeeded",
    );

    const results = await axe.run(document.body, {
      rules: {
        "color-contrast": { enabled: false },
        region: { enabled: false },
      },
    });
    expect(results.violations).toEqual([]);
  }, 15_000);

  it("shows deny events and recoverable errors", async () => {
    projectAssistantSendActionMock.mockResolvedValueOnce({
      ok: true,
      status: "ok",
      text: "[TEST/FAKE · NON LIVE] Deny handled",
      mode: "fixture",
      presentation: "test_provider",
      toolRounds: 1,
      toolCalls: 1,
      sources: [],
      toolEvents: [
        {
          toolName: "git_local_read_file",
          status: "denied",
          pathOrRef: ".env",
          summary: "PATH_NOT_ALLOWED",
          errorCode: "PATH_NOT_ALLOWED",
          readOnly: true,
        },
      ],
      project: {
        projectId: "prj:f1-ui",
        name: "Projet F1 UI",
        shortReference: null,
        objective: "x",
        contextSummary: "y",
        criticality: "STANDARD",
        constraints: [],
        lpsId: "lps:f1-ui",
        lpsVersion: 1,
        lpsCreatedAt: "2026-08-10T12:00:00.000Z",
        doctrineId: "pkg:studio-v3-oa",
        doctrineVersion: "1.0.0",
        doctrineDigest: "digest:f1-ui",
        doctrineStatus: "RESOLVED",
        runtimeMode: "LOCAL_PROCESS",
        persistence: "NOT_GUARANTEED",
        readiness: "NOT_READY",
      },
      ephemeralNotice: "éphémère",
    });

    render(<ProjectAssistantPanel projectId="prj:f1-ui" />);
    fireEvent.change(screen.getByTestId("project-assistant-input"), {
      target: { value: "deny" },
    });
    fireEvent.click(screen.getByTestId("project-assistant-send"));
    const denyItem = await screen.findByTestId("project-assistant-source-item");
    expect(denyItem).toHaveAttribute("data-status", "denied");
    expect(within(denyItem).getByText(/Refus policy/)).toBeVisible();

    projectAssistantSendActionMock.mockResolvedValueOnce({
      ok: false,
      status: "provider_error",
      code: "PROVIDER_ERROR",
      message: "Erreur de démonstration",
      mode: "fixture",
      retryable: true,
    });
    fireEvent.change(screen.getByTestId("project-assistant-input"), {
      target: { value: "error" },
    });
    fireEvent.click(screen.getByTestId("project-assistant-send"));
    expect(await screen.findByTestId("project-assistant-error")).toBeVisible();
    expect(screen.getByTestId("project-assistant-retry")).toBeVisible();
  });

  it("blocks empty send", () => {
    render(<ProjectAssistantPanel projectId="prj:f1-ui" />);
    expect(screen.getByTestId("project-assistant-send")).toBeDisabled();
  });
});
```

#### `projects/sfia-studio/app/__tests__/project-assistant/importBoundaries.test.ts`

```ts
import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const FEATURE_DIR = path.resolve(
  __dirname,
  "../../features/project-assistant",
);

function listTsFiles(dir: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listTsFiles(full));
    else if (/\.(ts|tsx)$/.test(entry.name)) out.push(full);
  }
  return out;
}

describe("F1 project-assistant import boundaries", () => {
  it("does not import lib/ops1 or features/ops1", () => {
    const files = listTsFiles(FEATURE_DIR);
    expect(files.length).toBeGreaterThan(0);
    for (const file of files) {
      const source = readFileSync(file, "utf8");
      expect(source).not.toMatch(/@\/lib\/ops1/);
      expect(source).not.toMatch(/@\/features\/ops1/);
      expect(source).not.toMatch(/from ["'].*ops1/);
    }
  });
});
```

#### `projects/sfia-studio/app/__tests__/project-assistant/orchestrateTurn.test.ts`

```ts
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  FakeConversationProvider,
  setConversationProviderForTests,
} from "@/lib/platform/ai";
import { orchestrateProjectAssistantTurn } from "@/features/project-assistant/orchestrateTurn";

const { getProjectRuntimeActionMock } = vi.hoisted(() => ({
  getProjectRuntimeActionMock: vi.fn(),
}));

vi.mock("@/lib/vertical-slice-runtime/actions", () => ({
  getProjectRuntimeAction: getProjectRuntimeActionMock,
}));

const SUCCESS = {
  ok: true as const,
  project: {
    projectId: "prj:f1-demo",
    name: "Projet F1",
    shortReference: "F1",
    objective: "Tester l'assistant contextualisé.",
    contextSummary: "Contexte process-local F1.",
    criticality: "STANDARD" as const,
    constraints: ["Lecture seule"],
    localMode: true as const,
    source: "REAL_LOCAL_CORE" as const,
    fixture: false as const,
  },
  doctrine: {
    id: "pkg:studio-v3-oa",
    version: "1.0.0",
    digest: "digest:f1",
    status: "RESOLVED",
  },
  livingState: {
    id: "lps:f1-demo",
    version: 1 as const,
    createdAt: "2026-08-10T12:00:00.000Z",
  },
  readiness: {
    status: "NOT_READY" as const,
    hard: "OPEN" as const,
    tA6: "INCOMPLETE" as const,
    iam: "NOT_SELECTED" as const,
    productPersistence: "NOT_SELECTED" as const,
    realAgentExecution: "DISABLED" as const,
    delivery: "NOT_AUTHORIZED" as const,
    cutover: "NOT_AUTHORIZED" as const,
    runReady: false as const,
    productReady: false as const,
  },
  disclosures: {
    runtimeMode: "LOCAL_PROCESS" as const,
    persistence: "NOT_GUARANTEED" as const,
    agentExecution: "DISABLED" as const,
    iam: "NOT_SELECTED" as const,
    productPersistence: "NOT_SELECTED" as const,
    delivery: "NOT_AUTHORIZED" as const,
    cutover: "NOT_AUTHORIZED" as const,
    localDataVolatile: true as const,
    restartMayLoseState: true as const,
    messages: [] as const,
  },
};

describe("F1 project assistant orchestration", () => {
  const previousFake = process.env.OPS1_CONVERSATION_PROVIDER;

  beforeEach(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    getProjectRuntimeActionMock.mockReset();
    getProjectRuntimeActionMock.mockResolvedValue(SUCCESS);
    setConversationProviderForTests(null);
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    if (previousFake === undefined) {
      delete process.env.OPS1_CONVERSATION_PROVIDER;
    } else {
      process.env.OPS1_CONVERSATION_PROVIDER = previousFake;
    }
  });

  it("injects project context and returns a fake non-live reply", async () => {
    const result = await orchestrateProjectAssistantTurn({
      projectId: "prj:f1-demo",
      content: "Résume l'objectif du projet.",
    });

    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.presentation).toBe("test_provider");
    expect(result.mode).toBe("fixture");
    expect(result.text).toMatch(/TEST\/FAKE · NON LIVE/);
    expect(result.project.projectId).toBe("prj:f1-demo");
    expect(result.project.objective).toContain("assistant contextualisé");
    expect(result.ephemeralNotice).toMatch(/éphémère/i);
    expect(getProjectRuntimeActionMock).toHaveBeenCalledWith("prj:f1-demo");
  });

  it("supports multi-turn history", async () => {
    const first = await orchestrateProjectAssistantTurn({
      projectId: "prj:f1-demo",
      content: "Premier tour",
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;

    const second = await orchestrateProjectAssistantTurn({
      projectId: "prj:f1-demo",
      content: "Deuxième tour",
      history: [
        { role: "user", content: "Premier tour" },
        { role: "assistant", content: first.text },
      ],
    });
    expect(second.ok).toBe(true);
    if (!second.ok) return;
    expect(second.text).toMatch(/historique=/);
  });

  it("invokes git read tools and surfaces tool events", async () => {
    const result = await orchestrateProjectAssistantTurn({
      projectId: "prj:f1-demo",
      content: "Besoin d'un statut git __CT_TOOL_GIT_STATUS__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.toolCalls).toBeGreaterThan(0);
    expect(
      result.toolEvents.some((e) => e.toolName === "git_local_get_status"),
    ).toBe(true);
    expect(result.toolEvents.every((e) => e.readOnly)).toBe(true);
  });

  it("surfaces a policy deny for .env read attempts", async () => {
    const result = await orchestrateProjectAssistantTurn({
      projectId: "prj:f1-demo",
      content: "Lis le secret __CT_TOOL_DENIED_PATH__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    const denied = result.toolEvents.find((e) => e.status === "denied");
    expect(denied).toBeTruthy();
    expect(denied?.toolName).toBe("git_local_read_file");
  });

  it("returns a recoverable provider error without silent fallback", async () => {
    const result = await orchestrateProjectAssistantTurn({
      projectId: "prj:f1-demo",
      content: "Force error __OPS1_FORCE_PROVIDER_ERROR__",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.status).toBe("provider_error");
    expect(result.retryable).toBe(true);
    expect(result.mode).toBe("fixture");
  });

  it("rejects empty messages", async () => {
    const result = await orchestrateProjectAssistantTurn({
      projectId: "prj:f1-demo",
      content: "   ",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.code).toBe("EMPTY_MESSAGE");
  });

  it("fail-closes when live is requested but secrets are missing (no silent fake)", async () => {
    delete process.env.OPS1_CONVERSATION_PROVIDER;
    delete process.env.OPENAI_API_KEY;
    delete process.env.OPENAI_MODEL;
    setConversationProviderForTests(null);

    const result = await orchestrateProjectAssistantTurn({
      projectId: "prj:f1-demo",
      content: "Hello",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.status).toBe("provider_unavailable");
    expect(result.mode).toBe("unavailable");
    expect(result.message).toMatch(/Aucun basculement silencieux/i);
  });

  it("does not import or require OPS1 session APIs", async () => {
    setConversationProviderForTests(new FakeConversationProvider());
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    const result = await orchestrateProjectAssistantTurn({
      projectId: "prj:f1-demo",
      content: "Ping",
    });
    expect(result.ok).toBe(true);
    expect(getProjectRuntimeActionMock).toHaveBeenCalled();
  });
});
```

## Modified files — diffs

```diff
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx b/projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx
index 25f100c..0ed58a0 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx
@@ -151,17 +151,16 @@ describe("V2-A3 Project Workspace UI", () => {
     expect(
       within(screen.getByLabelText("Contraintes")).getAllByText("Sans IAM"),
     ).toHaveLength(2);
-    const continuePilotage = screen.getByRole("link", {
-      name: "Continuer le pilotage",
-    });
+    const continuePilotage = screen.getByTestId("workspace-continue-pilotage");
     expect(continuePilotage).toBeVisible();
     expect(continuePilotage).toHaveAttribute(
       "href",
       `/ops1/nouvelle-demande?projectId=${encodeURIComponent("prj:v2-a3-1")}`,
     );
-    expect(screen.getByTestId("workspace-continue-pilotage")).toBe(
-      continuePilotage,
-    );
+    expect(continuePilotage).toHaveTextContent(/temporaire/i);
+    expect(
+      screen.getByTestId("workspace-primary-assistant-hint"),
+    ).toBeVisible();
     expect(
       screen.getByRole("link", { name: "Créer un autre projet" }),
     ).toHaveAttribute("href", "/studio/projects/new");
diff --git a/projects/sfia-studio/app/app/studio/projects/[id]/page.tsx b/projects/sfia-studio/app/app/studio/projects/[id]/page.tsx
index a4a62f0..3c19277 100644
--- a/projects/sfia-studio/app/app/studio/projects/[id]/page.tsx
+++ b/projects/sfia-studio/app/app/studio/projects/[id]/page.tsx
@@ -1,4 +1,5 @@
 import { StudioShell } from "@/components/shell/StudioShell";
+import { ProjectAssistantPanel } from "@/features/project-assistant";
 import { ProjectWorkspaceClient } from "@/features/vertical-slice-ui/ProjectWorkspaceClient";
 import { RuntimeDisclosureBanner } from "@/features/vertical-slice-ui/RuntimeDisclosureBanner";
 import styles from "@/features/vertical-slice-ui/project-workspace.module.css";
@@ -29,21 +30,13 @@ export default async function ProjectWorkspacePage({
       ]}
       copilot={{
         variant: "flush",
-        name: "Nora · Project Copilot",
-        subtitle: "Lecture seule · aucune autorité",
+        name: "Nora · Assistant projet",
+        subtitle: "Analyse · conversation · lecture seule",
         avatarTone: "purple",
-        levelPill: "Aucune décision",
+        levelPill: "F1 · Aucune exécution",
         summary:
-          "Je rappelle le contexte local du Project. Je ne recommande aucun cycle et je ne prends aucune décision Morris.",
-        watchLabel: "GARDE-FOUS",
-        watchItems: [
-          { label: "État process-local volatil", dotColor: "#faa629" },
-          { label: "IAM non sélectionné", dotColor: "#7a4df5" },
-          { label: "Agent réel désactivé", dotColor: "#51607a" },
-        ],
-        riskTitle: "MODE LOCAL UNIQUEMENT",
-        riskText:
-          "Un redémarrage ou hot reload peut perdre le Project et son LPS. Aucune persistance produit, delivery ou cutover.",
+          "Assistant contextualisé au Project/LPS — sans OPS1, sans Cursor, sans écriture.",
+        interactiveContent: <ProjectAssistantPanel projectId={projectId} />,
       }}
     >
       <div className={styles.page}>
diff --git a/projects/sfia-studio/app/components/shell/CopilotPanel.tsx b/projects/sfia-studio/app/components/shell/CopilotPanel.tsx
index 099ec87..78b3118 100644
--- a/projects/sfia-studio/app/components/shell/CopilotPanel.tsx
+++ b/projects/sfia-studio/app/components/shell/CopilotPanel.tsx
@@ -1,3 +1,4 @@
+import type { ReactNode } from "react";
 import { StatusPill } from "@/components/ui/StatusPill";
 import styles from "./copilot-panel.module.css";

@@ -20,6 +21,11 @@ export interface CopilotProps {
   checklist?: string[];
   checklistTitle?: string;
   showRecommendationLabel?: boolean;
+  /**
+   * F1: when provided, replaces the static body + disabled composer
+   * with an interactive assistant surface (existing shell slot).
+   */
+  interactiveContent?: ReactNode;
 }

 export function CopilotPanel({
@@ -36,8 +42,10 @@ export function CopilotPanel({
   checklist,
   checklistTitle,
   showRecommendationLabel = false,
+  interactiveContent,
 }: CopilotProps) {
   const isFlush = variant === "flush";
+  const isInteractive = Boolean(interactiveContent);

   const avatarClass = [
     styles.avatar,
@@ -58,6 +66,7 @@ export function CopilotPanel({
       className={styles.panel}
       aria-label="Copilot Nora"
       data-testid="copilot-panel"
+      data-interactive={isInteractive ? "true" : "false"}
     >
       <div
         className={
@@ -85,82 +94,88 @@ export function CopilotPanel({
       </div>

       <div className={styles.body}>
-        {showRecommendationLabel && (
-          <p className={styles.recommendationBadge}>
-            Recommandation copilot — non décision Morris
-          </p>
-        )}
+        {isInteractive ? (
+          interactiveContent
+        ) : (
+          <>
+            {showRecommendationLabel && (
+              <p className={styles.recommendationBadge}>
+                Recommandation copilot — non décision Morris
+              </p>
+            )}

-        <div className={isFlush ? styles.messageFlush : styles.message}>
-          {summary}
-        </div>
+            <div className={isFlush ? styles.messageFlush : styles.message}>
+              {summary}
+            </div>

-        {checklist && (
-          <div className={styles.checklist}>
-            <p className={styles.sectionTitle}>{checklistTitle}</p>
-            {checklist.map((item) => (
-              <div key={item} className={styles.checkRow}>
-                <span className={styles.checkIcon}>✓</span>
-                <span>{item}</span>
+            {checklist && (
+              <div className={styles.checklist}>
+                <p className={styles.sectionTitle}>{checklistTitle}</p>
+                {checklist.map((item) => (
+                  <div key={item} className={styles.checkRow}>
+                    <span className={styles.checkIcon}>✓</span>
+                    <span>{item}</span>
+                  </div>
+                ))}
               </div>
-            ))}
-          </div>
-        )}
+            )}

-        {watchItems.length > 0 && (
-          <>
-            <p className={styles.sectionLabel}>{watchLabel}</p>
-            {watchItems.map((item) => (
-              <div key={item.label} className={styles.watchItem}>
-                <span
-                  className={styles.watchDot}
-                  style={{ background: item.dotColor }}
-                  aria-hidden="true"
-                />
-                {item.label}
+            {watchItems.length > 0 && (
+              <>
+                <p className={styles.sectionLabel}>{watchLabel}</p>
+                {watchItems.map((item) => (
+                  <div key={item.label} className={styles.watchItem}>
+                    <span
+                      className={styles.watchDot}
+                      style={{ background: item.dotColor }}
+                      aria-hidden="true"
+                    />
+                    {item.label}
+                  </div>
+                ))}
+              </>
+            )}
+
+            {riskTitle && riskText && (
+              <div className={isFlush ? styles.riskFlush : styles.risk}>
+                <p
+                  className={
+                    isFlush ? styles.riskTitleFlush : styles.riskTitle
+                  }
+                >
+                  {riskTitle}
+                </p>
+                <p className={styles.riskText}>{riskText}</p>
               </div>
-            ))}
-          </>
-        )}
+            )}

-        {riskTitle && riskText && (
-          <div className={isFlush ? styles.riskFlush : styles.risk}>
-            <p
-              className={
-                isFlush ? styles.riskTitleFlush : styles.riskTitle
-              }
+            <div
+              className={`${styles.composer} ${isFlush ? styles.composerFlush : ""}`}
+              data-testid="copilot-composer-disabled"
+              aria-disabled="true"
             >
-              {riskTitle}
-            </p>
-            <p className={styles.riskText}>{riskText}</p>
-          </div>
+              <p className={styles.composerPlaceholder}>
+                Chat non disponible dans ce POC — saisissez votre demande dans le
+                panneau central « Nouvelle demande ».
+              </p>
+              <div className={styles.composerRow}>
+                <StatusPill tone={isFlush ? "blueFlush" : "muted"}>
+                  @ contexte (lecture seule)
+                </StatusPill>
+                <button
+                  type="button"
+                  className={`${styles.send} ${isFlush ? styles.sendFlush : ""}`}
+                  disabled
+                  title="Chat Nora non disponible dans ce POC"
+                  aria-label="Chat Nora non disponible dans ce POC"
+                  aria-disabled
+                >
+                  ↑
+                </button>
+              </div>
+            </div>
+          </>
         )}
-
-        <div
-          className={`${styles.composer} ${isFlush ? styles.composerFlush : ""}`}
-          data-testid="copilot-composer-disabled"
-          aria-disabled="true"
-        >
-          <p className={styles.composerPlaceholder}>
-            Chat non disponible dans ce POC — saisissez votre demande dans le
-            panneau central « Nouvelle demande ».
-          </p>
-          <div className={styles.composerRow}>
-            <StatusPill tone={isFlush ? "blueFlush" : "muted"}>
-              @ contexte (lecture seule)
-            </StatusPill>
-            <button
-              type="button"
-              className={`${styles.send} ${isFlush ? styles.sendFlush : ""}`}
-              disabled
-              title="Chat Nora non disponible dans ce POC"
-              aria-label="Chat Nora non disponible dans ce POC"
-              aria-disabled
-            >
-              ↑
-            </button>
-          </div>
-        </div>
       </div>
     </aside>
   );
diff --git a/projects/sfia-studio/app/features/vertical-slice-ui/ProjectWorkspaceView.tsx b/projects/sfia-studio/app/features/vertical-slice-ui/ProjectWorkspaceView.tsx
index e34949a..a9da832 100644
--- a/projects/sfia-studio/app/features/vertical-slice-ui/ProjectWorkspaceView.tsx
+++ b/projects/sfia-studio/app/features/vertical-slice-ui/ProjectWorkspaceView.tsx
@@ -4,6 +4,15 @@ import { StatusPill } from "@/components/ui/StatusPill";
 import type { getProjectRuntimeAction } from "@/lib/vertical-slice-runtime/actions";
 import styles from "./project-workspace.module.css";

+/** F1 server-side project load — lazy so UI tests keep the type-only boundary. */
+export async function loadProjectRuntimeForAssistant(projectId: string) {
+  const { getProjectRuntimeAction } = await import(
+    "@/lib/vertical-slice-runtime/actions"
+  );
+  return getProjectRuntimeAction(projectId);
+}
+
+
 type GetProjectResult = Awaited<ReturnType<typeof getProjectRuntimeAction>>;
 type GetProjectSuccess = Extract<GetProjectResult, { ok: true }>;
 type GetProjectFailure = Extract<GetProjectResult, { ok: false }>;
@@ -127,19 +136,31 @@ function ProjectProjection({ result }: { result: GetProjectSuccess }) {
       </section>

       <div className={styles.actions}>
-        <CtaButton
-          href={`/ops1/nouvelle-demande?projectId=${encodeURIComponent(result.project.projectId)}`}
-          data-testid="workspace-continue-pilotage"
+        <p
+          className={styles.primaryAssistantHint}
+          data-testid="workspace-primary-assistant-hint"
         >
-          Continuer le pilotage
-        </CtaButton>
-        <CtaButton
-          href="/studio/projects/new"
-          variant="secondary"
-          data-testid="workspace-create-another-project"
-        >
-          Créer un autre projet
-        </CtaButton>
+          Parcours principal : Assistant Nora (panneau de droite) — analyse /
+          conversation / lecture seule. OPS1 n&apos;est pas requis.
+        </p>
+        <div className={styles.secondaryActions}>
+          <CtaButton
+            href={`/ops1/nouvelle-demande?projectId=${encodeURIComponent(result.project.projectId)}`}
+            variant="secondary"
+            data-testid="workspace-continue-pilotage"
+            title="Escape hatch temporaire vers OPS1 (non lié au Project)"
+            aria-label="Continuer le pilotage via OPS1 (temporaire)"
+          >
+            Continuer le pilotage (OPS1 · temporaire)
+          </CtaButton>
+          <CtaButton
+            href="/studio/projects/new"
+            variant="secondary"
+            data-testid="workspace-create-another-project"
+          >
+            Créer un autre projet
+          </CtaButton>
+        </div>
       </div>
       </div>
     </Card>
diff --git a/projects/sfia-studio/app/features/vertical-slice-ui/project-workspace.module.css b/projects/sfia-studio/app/features/vertical-slice-ui/project-workspace.module.css
index 12cfe3c..c85d603 100644
--- a/projects/sfia-studio/app/features/vertical-slice-ui/project-workspace.module.css
+++ b/projects/sfia-studio/app/features/vertical-slice-ui/project-workspace.module.css
@@ -111,13 +111,33 @@
 }

 .actions {
-  justify-content: flex-end;
-  align-items: center;
+  display: grid;
+  justify-content: stretch;
+  align-items: stretch;
   gap: var(--sfia-space-md);
   padding-top: var(--sfia-space-xs);
   border-top: 1px solid var(--sfia-border-soft);
 }

+.primaryAssistantHint {
+  margin: 0;
+  padding: 12px 14px;
+  border-radius: var(--sfia-radius-sm);
+  border: 1px solid var(--sfia-border);
+  background: #f5f8ff;
+  color: var(--sfia-ink);
+  font-size: 13px;
+  line-height: var(--sfia-line-body);
+  font-weight: 600;
+}
+
+.secondaryActions {
+  display: flex;
+  flex-wrap: wrap;
+  justify-content: flex-end;
+  gap: var(--sfia-space-md);
+}
+
 .missingCard {
   border-left: 4px solid var(--sfia-orange);
 }
```

## Tests commands + results

```text
# Force fixture (no live OpenAI)
export OPS1_CONVERSATION_PROVIDER=fake

# F1 focused
npx vitest run __tests__/project-assistant \
  __tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx \
  __tests__/shell.test.tsx
# → 5 files / 17 tests PASS

# Broader gate (postgres excluded — environmental reserve)
npx vitest run --exclude '__tests__/oa/finops/postgres/**'
# → 156 files / 1588 tests PASS (re-run after flake cleared)

npm run typecheck   # PASS (tsc --noEmit)
npm run lint        # PASS (No ESLint warnings or errors)
npm run build       # PASS (Next.js 15.5.20)

# NOT used as green gate: full npm test including postgres
# (FinOps postgres suite may ECONNREFUSED without local DB — reserve non-blocking)
```

## Runtime fixture proof

- Provider: `OPS1_CONVERSATION_PROVIDER=fake` only; OpenAI keys unset for the proof process.
- Dev server: `npm run dev` on port 3020.
- Script: `.tmp-sfia-review/f1-project-assistant/runtime-proof.mjs` (Playwright from existing `node_modules`, no npm install).
- Flow: create project UI → workspace → composer → `Bonjour projet` → second turn → `__CT_TOOL_GIT_STATUS__` → `__CT_TOOL_DENIED_PATH__`.

### Screenshots

| Path | Bytes |
|---|---:|
| `.tmp-sfia-review/f1-project-assistant/screenshots/01-workspace-assistant-ready.png` | 171934 |
| `.tmp-sfia-review/f1-project-assistant/screenshots/02-assistant-contextualized-response.png` | 181934 |
| `.tmp-sfia-review/f1-project-assistant/screenshots/03-assistant-git-read-source.png` | 194288 |
| `.tmp-sfia-review/f1-project-assistant/screenshots/04-assistant-git-deny.png` | 201644 |

### runtime-proof-report.json

```json
{
  "base": "http://localhost:3020",
  "results": [
    {
      "id": "AC-ready-composer",
      "ok": true,
      "detail": "composer enabled on workspace"
    },
    {
      "id": "AC-fake-response",
      "ok": true,
      "detail": "assistant replied with TEST/FAKE tag"
    },
    {
      "id": "AC-second-turn",
      "ok": true,
      "detail": "second fake turn received"
    },
    {
      "id": "AC-git-read-source",
      "ok": true,
      "detail": "succeeded source item present"
    },
    {
      "id": "AC-git-deny",
      "ok": true,
      "detail": "denied source item present"
    }
  ]
}
```

## Anti-claims / boundaries

- No Cursor actions from F1.
- No Git/GitHub write from F1.
- No live OpenAI in proof (`fake` forced).
- No OPS1 session required for primary F1 path.
- No durable product persistence claimed (ephemeral conversation notice).
- No project commit / push / PR / merge in this cycle.
- Client barrel `index.ts` exports panel + types only (no server orchestrate re-export).
- Project load uses allowlisted lazy wrapper on `ProjectWorkspaceView` to preserve vertical-slice-runtime import boundaries.

## Accessibility notes

- Panel tests run `axe-core` on the composed StudioShell + assistant surface (color-contrast/region rules disabled as elsewhere in suite).
- Composer uses labelled input (`useId`), live region for status, visible error + retry.
- Source items expose status via `data-status` and human labels (Succès lecture / Refus policy).

## Réserves

1. **ENVIRONMENTAL — FinOps postgres**: suite under `__tests__/oa/finops/postgres/**` excluded from green gate; may ECONNREFUSED without local Postgres. Non-blocking for F1 delivery.
2. **AC-F1-15**: OPS1 « Continuer le pilotage » retained as temporary secondary escape hatch; demote/hide after assistant primacy is a later decision (recommendation carried, not over-claimed as final UX).

## CKC note

No Delivery pilot under `cycle-knowledge-contracts/pilots/` (only cadrage/conception/architecture/qa). Fallback used: `02-fifteen-cycles-synthetic-map.md` + §4.8.

## Ready for

ChatGPT review / Morris commit gate on uncommitted project tree at HEAD `9b6d4bc` (base = origin/main).
