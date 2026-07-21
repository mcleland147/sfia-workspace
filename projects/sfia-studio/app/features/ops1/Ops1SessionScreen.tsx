"use client";

import { useCallback, useEffect, useState, useTransition } from "react";
import { CtaButton } from "@/components/ui/CtaButton";
import { StatusPill } from "@/components/ui/StatusPill";
import {
  ops1CreateSessionAction,
  ops1GetLiveConfigAction,
  ops1GetSessionAction,
  ops1SendMessageAction,
} from "@/lib/ops1/actions";
import type {
  ConversationMode,
  ConversationUsageCounters,
  CycleSession,
  JournalTurn,
  ProviderPresentation,
} from "@/lib/ops1/types";
import { OPS1_MAX_MESSAGE_CHARS } from "@/lib/ops1/types";
import type { GlobalModeContext } from "@/lib/ops1/globalModeBadge";
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

function roleLabel(
  role: JournalTurn["role"],
  presentation: ProviderPresentation,
): string {
  if (role === "user") return "Vous";
  if (role === "assistant_fixture") return "Assistant fixture";
  if (presentation === "test_provider") return "Assistant test";
  return "Assistant live";
}

export function Ops1SessionScreen({
  onGlobalModeContextChange,
}: {
  onGlobalModeContextChange?: (ctx: GlobalModeContext) => void;
} = {}) {
  const [phase, setPhase] = useState<UiPhase>("boot");
  const [session, setSession] = useState<CycleSession | null>(null);
  const [turns, setTurns] = useState<JournalTurn[]>([]);
  const [draft, setDraft] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [createMode, setCreateMode] = useState<ConversationMode>("fixture");
  const [liveAvailable, setLiveAvailable] = useState(false);
  const [liveMissing, setLiveMissing] = useState<string[]>([]);
  const [testProvider, setTestProvider] = useState(false);
  const [presentation, setPresentation] =
    useState<ProviderPresentation>("fixture");
  const [lastUsage, setLastUsage] = useState<ConversationUsageCounters | null>(
    null,
  );
  const [pending, startTransition] = useTransition();

  useEffect(() => {
    onGlobalModeContextChange?.({
      hasSession: Boolean(session),
      createMode,
      presentation,
      testProvider,
      liveAvailable,
    });
  }, [
    session,
    createMode,
    presentation,
    testProvider,
    liveAvailable,
    onGlobalModeContextChange,
  ]);

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
    setPresentation(result.data.presentation);
    setError(null);
    setPhase("open");
  }, []);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const cfg = await ops1GetLiveConfigAction();
      if (!cancelled && cfg.ok) {
        setLiveAvailable(cfg.data.available);
        setLiveMissing(cfg.data.missing);
        setTestProvider(cfg.data.testProvider);
      }
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
    if (createMode === "live" && !liveAvailable) {
      setError(
        `Création live impossible (variables manquantes : ${liveMissing.join(", ") || "OPENAI_API_KEY, OPENAI_MODEL"}).`,
      );
      setPhase("error_create");
      return;
    }
    setError(null);
    setLastUsage(null);
    setPhase("creating");
    startTransition(async () => {
      const result = await ops1CreateSessionAction({ mode: createMode });
      if (!result.ok) {
        setError(result.message);
        setPhase("error_create");
        return;
      }
      window.sessionStorage.setItem(STORAGE_KEY, result.data.session.sessionId);
      setSession(result.data.session);
      setTurns([]);
      setPresentation(
        result.data.session.conversationMode === "fixture"
          ? "fixture"
          : testProvider
            ? "test_provider"
            : "openai_live",
      );
      setPhase("open");
    });
  };

  const onSend = () => {
    if (!session) return;
    setError(null);
    setPhase("sending");
    startTransition(async () => {
      const result = await ops1SendMessageAction({
        sessionId: session.sessionId,
        content: draft,
        mode: session.conversationMode,
      });
      if (!result.ok) {
        setError(result.message);
        setPhase("error_journal");
        return;
      }
      setDraft("");
      setLastUsage(result.data.usage);
      setPresentation(result.data.presentation);
      await loadBundle(session.sessionId);
      if (result.data.assistantError) {
        setError(result.data.assistantError);
        setPhase("error_journal");
      } else {
        setError(null);
        setPhase("open");
      }
    });
  };

  const onClearLocalPointer = () => {
    window.sessionStorage.removeItem(STORAGE_KEY);
    setSession(null);
    setTurns([]);
    setError(null);
    setLastUsage(null);
    setPresentation("fixture");
    setPhase("idle");
  };

  const lockedMode = session?.conversationMode;
  const isFixtureSession = lockedMode === "fixture";
  const isLiveSession = lockedMode === "live";
  const isTestPresentation = presentation === "test_provider";
  const isOpenAiLive = presentation === "openai_live";

  return (
    <div className={styles.root} data-testid="ops1-session-root">
      <header className={styles.header}>
        <p className={styles.kicker}>Vertical Slice Opérationnel 1 · I2</p>
        <h2 className={styles.title} id="ops1-session-heading">
          Session OPS1
        </h2>
        <p className={styles.lede}>
          Conversation multi-tours. Le mode est choisi à la création puis
          verrouillé. Aucune exécution, aucun gate, aucun Cursor depuis le chat.
        </p>
        <div className={styles.badgeRow} aria-live="polite">
          {!session ? (
            <>
              <span data-testid="ops1-badge-fixture">
                <StatusPill tone="orange">FIXTURE / NON LIVE</StatusPill>
              </span>
              {testProvider ? (
                <span data-testid="ops1-badge-test-provider">
                  <StatusPill tone="purple">TEST PROVIDER / NON LIVE</StatusPill>
                </span>
              ) : null}
              {!liveAvailable ? (
                <span data-testid="ops1-badge-live-unavailable">
                  <StatusPill tone="muted">LIVE INDISPONIBLE</StatusPill>
                </span>
              ) : testProvider ? (
                <span data-testid="ops1-badge-live-ready">
                  <StatusPill tone="blueFlush">
                    LIVE TECHNIQUE (TEST)
                  </StatusPill>
                </span>
              ) : (
                <span data-testid="ops1-badge-live-ready">
                  <StatusPill tone="blueFlush">LIVE DISPONIBLE</StatusPill>
                </span>
              )}
            </>
          ) : null}
          {session && isFixtureSession ? (
            <span data-testid="ops1-badge-fixture">
              <StatusPill tone="orange">FIXTURE / NON LIVE</StatusPill>
            </span>
          ) : null}
          {session && isLiveSession && isTestPresentation ? (
            <span data-testid="ops1-badge-test-provider">
              <StatusPill tone="purple">TEST PROVIDER / NON LIVE</StatusPill>
            </span>
          ) : null}
          {session && isLiveSession && isOpenAiLive ? (
            <span data-testid="ops1-badge-live">
              <StatusPill tone="green">GPT LIVE</StatusPill>
            </span>
          ) : null}
          {session && isLiveSession && isOpenAiLive ? (
            <span data-testid="ops1-badge-live-ready">
              <StatusPill tone="blueFlush">LIVE DISPONIBLE</StatusPill>
            </span>
          ) : null}
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
            Projet cible : <strong>sfia-studio-ops1</strong>. Choisissez le mode
            avant de créer la session — il sera ensuite immuable.
          </p>

          <div
            className={styles.modeRow}
            role="radiogroup"
            aria-label="Choix du mode de session"
            data-testid="ops1-create-mode-selector"
          >
            <label className={styles.modeOption}>
              <input
                type="radio"
                name="ops1-create-mode"
                value="fixture"
                checked={createMode === "fixture"}
                data-testid="ops1-create-mode-fixture"
                onChange={() => setCreateMode("fixture")}
              />
              Fixture locale — test non live
            </label>
            <label className={styles.modeOption}>
              <input
                type="radio"
                name="ops1-create-mode"
                value="live"
                checked={createMode === "live"}
                data-testid="ops1-create-mode-live"
                disabled={!liveAvailable}
                onChange={() => {
                  if (liveAvailable) setCreateMode("live");
                }}
              />
              GPT live — appel fournisseur réel
              {testProvider ? " (environnement de test)" : ""}
            </label>
          </div>

          {!liveAvailable ? (
            <p
              className={styles.warn}
              data-testid="ops1-live-unavailable-notice"
            >
              Configuration live indisponible (
              {liveMissing.join(", ") || "OPENAI_API_KEY, OPENAI_MODEL"}).
              L’option GPT live est désactivée. Aucune valeur secrète n’est
              affichée.
            </p>
          ) : null}

          {testProvider ? (
            <p className={styles.warn} data-testid="ops1-test-env-notice">
              Environnement de test — aucun appel OpenAI. Les réponses du
              provider fake ne sont jamais présentées comme GPT live.
            </p>
          ) : null}

          {error ? (
            <p className={styles.error} role="alert" data-testid="ops1-error">
              {error}
            </p>
          ) : null}
          <CtaButton
            onClick={onCreate}
            disabled={pending || (createMode === "live" && !liveAvailable)}
            data-testid="ops1-create-session"
          >
            {createMode === "live"
              ? testProvider
                ? "Créer session live (test provider)"
                : "Créer session GPT live"
              : "Créer session fixture"}
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

          <div
            className={styles.lockedMode}
            data-testid="ops1-mode-locked"
            aria-live="polite"
          >
            <p className={styles.lockedModeLabel} data-testid="ops1-mode-label">
              {session.conversationMode === "fixture"
                ? "Mode de session : FIXTURE — verrouillé"
                : isTestPresentation
                  ? "Mode de session : LIVE TECHNIQUE (TEST) — verrouillé"
                  : "Mode de session : GPT LIVE — verrouillé"}
            </p>
            <p className={styles.hint} data-testid="ops1-mode-lock-hint">
              Le mode ne peut pas être modifié dans cette session. Créez une
              nouvelle session pour changer de mode.
            </p>
            {/* Radios disabled — non-interactive lock proof for E2E */}
            <div
              className={styles.modeRow}
              role="group"
              aria-label="Mode de session verrouillé"
              data-testid="ops1-mode-selector"
            >
              <label className={styles.modeOption}>
                <input
                  type="radio"
                  name="ops1-mode-locked"
                  value="fixture"
                  checked={session.conversationMode === "fixture"}
                  disabled
                  data-testid="ops1-mode-fixture"
                  readOnly
                />
                Fixture / non live
              </label>
              <label className={styles.modeOption}>
                <input
                  type="radio"
                  name="ops1-mode-locked"
                  value="live"
                  checked={session.conversationMode === "live"}
                  disabled
                  data-testid="ops1-mode-live"
                  readOnly
                />
                Live GPT
              </label>
            </div>
          </div>

          {isTestPresentation ? (
            <p className={styles.warn} data-testid="ops1-test-env-notice">
              Environnement de test — aucun appel OpenAI.
            </p>
          ) : null}

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
                    data-fixture={turn.fixture ? "1" : "0"}
                  >
                    <div className={styles.turnMeta}>
                      <span>#{turn.sequence}</span>
                      <span>{roleLabel(turn.role, presentation)}</span>
                      {turn.role === "assistant_fixture" ? (
                        <span className={styles.fixtureTag}>
                          FIXTURE / NON LIVE
                        </span>
                      ) : null}
                      {turn.role === "assistant_live" &&
                      isTestPresentation ? (
                        <span className={styles.testTag}>TEST / FAKE</span>
                      ) : null}
                      {turn.role === "assistant_live" && isOpenAiLive ? (
                        <span className={styles.liveTag}>GPT LIVE</span>
                      ) : null}
                    </div>
                    <p className={styles.turnContent}>{turn.content}</p>
                  </li>
                ))}
              </ol>
            )}
          </div>

          {lastUsage ? (
            <dl className={styles.usage} data-testid="ops1-usage">
              <div>
                <dt>Provider</dt>
                <dd>{lastUsage.provider}</dd>
              </div>
              <div>
                <dt>Modèle</dt>
                <dd>{lastUsage.model ?? "—"}</dd>
              </div>
              <div>
                <dt>Tokens in/out/total</dt>
                <dd>
                  {lastUsage.inputTokens ?? "—"} /{" "}
                  {lastUsage.outputTokens ?? "—"} /{" "}
                  {lastUsage.totalTokens ?? "—"}
                </dd>
              </div>
              <div>
                <dt>Durée (ms)</dt>
                <dd>{lastUsage.durationMs ?? "—"}</dd>
              </div>
            </dl>
          ) : null}

          {error ? (
            <p className={styles.error} role="alert" data-testid="ops1-error">
              {error}
            </p>
          ) : null}

          {phase === "sending" ? (
            <p className={styles.muted} data-testid="ops1-sending">
              Envoi en cours…
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
              Message (
              {isFixtureSession
                ? "fixture locale"
                : isTestPresentation
                  ? "test provider / non live"
                  : "GPT live serveur"}
              )
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
              placeholder="Saisir un tour utilisateur…"
            />
            <div className={styles.composerActions}>
              <CtaButton
                type="submit"
                disabled={pending || !draft.trim()}
                data-testid="ops1-send-message"
              >
                {isFixtureSession
                  ? "Envoyer (fixture)"
                  : isTestPresentation
                    ? "Envoyer (test provider)"
                    : "Envoyer (GPT live)"}
              </CtaButton>
              <CtaButton
                variant="secondary"
                onClick={onClearLocalPointer}
                data-testid="ops1-clear-pointer"
              >
                Revenir à l’écran vide
              </CtaButton>
            </div>
            <p className={styles.hint} data-testid="ops1-no-execution-hint">
              L’exécution (Cursor, gate, contrat, Git) nécessite un parcours
              distinct — non disponible dans I2. Un message du type « exécute
              Cursor » reste du texte conversationnel. Max{" "}
              {OPS1_MAX_MESSAGE_CHARS} caractères.
            </p>
          </form>
        </section>
      ) : null}
    </div>
  );
}
