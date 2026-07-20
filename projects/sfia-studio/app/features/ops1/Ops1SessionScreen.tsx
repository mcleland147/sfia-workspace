"use client";

import { useCallback, useEffect, useState, useTransition } from "react";
import { CtaButton } from "@/components/ui/CtaButton";
import { StatusPill } from "@/components/ui/StatusPill";
import {
  ops1AppendUserMessageAction,
  ops1CreateSessionAction,
  ops1GetSessionAction,
} from "@/lib/ops1/actions";
import type { CycleSession, JournalTurn } from "@/lib/ops1/types";
import { OPS1_MAX_MESSAGE_CHARS } from "@/lib/ops1/types";
import styles from "./ops1-session.module.css";

const STORAGE_KEY = "sfia-ops1-i1-active-session";

type UiPhase =
  | "boot"
  | "idle"
  | "creating"
  | "open"
  | "sending"
  | "error_create"
  | "error_journal";

export function Ops1SessionScreen() {
  const [phase, setPhase] = useState<UiPhase>("boot");
  const [session, setSession] = useState<CycleSession | null>(null);
  const [turns, setTurns] = useState<JournalTurn[]>([]);
  const [draft, setDraft] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const loadBundle = useCallback(async (sessionId: string) => {
    const result = await ops1GetSessionAction(sessionId);
    if (!result.ok) {
      setError(result.message);
      setSession(null);
      setTurns([]);
      setPhase("idle");
      if (typeof window !== "undefined") {
        window.sessionStorage.removeItem(STORAGE_KEY);
      }
      return;
    }
    setSession(result.data.session);
    setTurns(result.data.turns);
    setError(null);
    setPhase("open");
  }, []);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const stored =
        typeof window !== "undefined"
          ? window.sessionStorage.getItem(STORAGE_KEY)
          : null;
      if (stored) {
        if (!cancelled) await loadBundle(stored);
        return;
      }
      if (!cancelled) setPhase("idle");
    })();
    return () => {
      cancelled = true;
    };
  }, [loadBundle]);

  const onCreate = () => {
    setError(null);
    setPhase("creating");
    startTransition(async () => {
      const result = await ops1CreateSessionAction();
      if (!result.ok) {
        setError(result.message);
        setPhase("error_create");
        return;
      }
      window.sessionStorage.setItem(STORAGE_KEY, result.data.session.sessionId);
      setSession(result.data.session);
      setTurns([]);
      setPhase("open");
    });
  };

  const onSend = () => {
    if (!session) return;
    setError(null);
    setPhase("sending");
    startTransition(async () => {
      const result = await ops1AppendUserMessageAction({
        sessionId: session.sessionId,
        content: draft,
      });
      if (!result.ok) {
        setError(result.message);
        setPhase("error_journal");
        return;
      }
      setDraft("");
      if (result.data.assistantError) {
        setError(result.data.assistantError);
        setPhase("error_journal");
      } else {
        setPhase("open");
      }
      await loadBundle(session.sessionId);
    });
  };

  const onClearLocalPointer = () => {
    window.sessionStorage.removeItem(STORAGE_KEY);
    setSession(null);
    setTurns([]);
    setError(null);
    setPhase("idle");
  };

  return (
    <div className={styles.root} data-testid="ops1-session-root">
      <header className={styles.header}>
        <p className={styles.kicker}>Vertical Slice Opérationnel 1 · I1</p>
        <h2 className={styles.title} id="ops1-session-heading">
          Session OPS1
        </h2>
        <p className={styles.lede}>
          Ouvrir une CycleSession locale, journaliser des tours fixture, et
          retrouver le journal après rechargement. Aucun fournisseur live.
        </p>
        <div className={styles.badgeRow} aria-live="polite">
          <StatusPill tone="orange">MODE FIXTURE / NON LIVE</StatusPill>
          {session ? <StatusPill tone="green">OPEN</StatusPill> : null}
        </div>
      </header>

      {phase === "boot" || (pending && phase === "creating") ? (
        <p className={styles.muted} data-testid="ops1-loading">
          {phase === "creating" ? "Création de la session…" : "Chargement…"}
        </p>
      ) : null}

      {(phase === "idle" || phase === "error_create") && !session ? (
        <section
          className={styles.panel}
          data-testid="ops1-empty-state"
          aria-labelledby="ops1-empty-title"
        >
          <h2 id="ops1-empty-title" className={styles.panelTitle}>
            Aucune session active
          </h2>
          <p className={styles.muted}>
            Projet cible : <strong>sfia-studio-ops1</strong>. La session sera
            créée en statut OPEN avec journal initialisé.
          </p>
          {error ? (
            <p className={styles.error} role="alert" data-testid="ops1-error">
              {error}
            </p>
          ) : null}
          <CtaButton
            onClick={onCreate}
            disabled={pending}
            data-testid="ops1-create-session"
          >
            Nouvelle session
          </CtaButton>
        </section>
      ) : null}

      {session ? (
        <section
          className={styles.panel}
          data-testid="ops1-open-session"
          aria-labelledby="ops1-open-title"
        >
          <h2 id="ops1-open-title" className={styles.panelTitle}>
            Session ouverte
          </h2>
          <dl className={styles.meta}>
            <div>
              <dt>sessionId</dt>
              <dd data-testid="ops1-session-id">{session.sessionId}</dd>
            </div>
            <div>
              <dt>Statut</dt>
              <dd data-testid="ops1-session-status">{session.status}</dd>
            </div>
            <div>
              <dt>Créée</dt>
              <dd>{session.createdAt}</dd>
            </div>
            <div>
              <dt>Projet</dt>
              <dd>{session.projectKey}</dd>
            </div>
          </dl>

          <div className={styles.journal} data-testid="ops1-journal">
            <h3 className={styles.journalTitle}>Journal</h3>
            {turns.length === 0 ? (
              <p className={styles.muted} data-testid="ops1-journal-empty">
                Aucun tour pour l’instant.
              </p>
            ) : (
              <ol className={styles.turnList}>
                {turns.map((turn) => (
                  <li
                    key={turn.turnId}
                    className={
                      turn.role === "user"
                        ? styles.turnUser
                        : styles.turnAssistant
                    }
                    data-testid="ops1-turn"
                    data-role={turn.role}
                    data-sequence={turn.sequence}
                  >
                    <div className={styles.turnMeta}>
                      <span>#{turn.sequence}</span>
                      <span>
                        {turn.role === "user" ? "Vous" : "Assistant fixture"}
                      </span>
                      {turn.fixture ? (
                        <span className={styles.fixtureTag}>fixture</span>
                      ) : null}
                    </div>
                    <p className={styles.turnContent}>{turn.content}</p>
                  </li>
                ))}
              </ol>
            )}
          </div>

          {error ? (
            <p className={styles.error} role="alert" data-testid="ops1-error">
              {error}
            </p>
          ) : null}

          <form
            className={styles.composer}
            onSubmit={(e) => {
              e.preventDefault();
              onSend();
            }}
          >
            <label className={styles.label} htmlFor="ops1-message">
              Message local (fixture)
            </label>
            <textarea
              id="ops1-message"
              className={styles.textarea}
              data-testid="ops1-message-input"
              value={draft}
              maxLength={OPS1_MAX_MESSAGE_CHARS}
              rows={4}
              disabled={pending || phase === "sending"}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Saisir un tour utilisateur local…"
            />
            <div className={styles.composerActions}>
              <CtaButton
                type="submit"
                disabled={pending || !draft.trim()}
                data-testid="ops1-send-message"
              >
                Envoyer (fixture)
              </CtaButton>
              <CtaButton
                variant="secondary"
                onClick={onClearLocalPointer}
                data-testid="ops1-clear-pointer"
              >
                Revenir à l’écran vide
              </CtaButton>
            </div>
            <p className={styles.hint}>
              Pas d’action d’exécution, pas de gate, pas de Campus360. Max{" "}
              {OPS1_MAX_MESSAGE_CHARS} caractères.
            </p>
          </form>
        </section>
      ) : null}
    </div>
  );
}
