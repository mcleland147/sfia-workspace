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
