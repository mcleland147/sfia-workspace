"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createProjectRuntimeAction } from "@/lib/vertical-slice-runtime/actions";
import {
  absorbUserTurn,
  collectPhaseOf,
  composerPlaceholder,
  emptyDraft,
  isMinimumSufficient,
  nextNoraPrompt,
  openingNoraTurn,
  reopenField,
  type ChatTurn,
  type CollectField,
  type CollectPhase,
  type PreProjectDraft,
} from "./newProjectConversation";
import styles from "./NewProjectIntentionPage.module.css";

type CreateResult = Awaited<ReturnType<typeof createProjectRuntimeAction>>;
type CreateSuccess = Extract<CreateResult, { ok: true }>;

function createIdempotencyKey(): string {
  const uuid = globalThis.crypto?.randomUUID?.();
  return `pm6-intent:${uuid ?? `${Date.now()}-${Math.random().toString(16).slice(2)}`}`;
}

function turnId(prefix: string): string {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
}

/**
 * P5-S06 CP01 — explicit-phase conversational New Project.
 * Durable create only via createProjectRuntimeAction. No D1, no regex NLP.
 */
export function NewProjectIntentionPage() {
  const router = useRouter();
  const fieldId = useId();
  const [draft, setDraft] = useState<PreProjectDraft>(() => emptyDraft());
  const [turns, setTurns] = useState<ChatTurn[]>(() => [openingNoraTurn()]);
  const [composer, setComposer] = useState("");
  const [idempotencyKey, setIdempotencyKey] = useState("");
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [created, setCreated] = useState<CreateSuccess | null>(null);
  const threadRef = useRef<HTMLDivElement>(null);

  const phase: CollectPhase = collectPhaseOf(draft);
  const ready = isMinimumSufficient(draft);

  useEffect(() => {
    setIdempotencyKey(createIdempotencyKey());
  }, []);

  useEffect(() => {
    const el = threadRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [turns, draft]);

  function onSend(event?: FormEvent) {
    event?.preventDefault();
    const text = composer.trim();
    if (!text || pending) return;
    const asked = phase;
    const nextDraft = absorbUserTurn(draft, text, asked);
    const userTurn: ChatTurn = { id: turnId("user"), role: "user", text };
    const noraTurn: ChatTurn = {
      id: turnId("nora"),
      role: "nora",
      text: nextNoraPrompt(collectPhaseOf(nextDraft)),
    };
    setDraft(nextDraft);
    setTurns((current) => [...current, userTurn, noraTurn]);
    setComposer("");
    setSubmitError(null);
  }

  function onReopen(field: CollectField) {
    const nextDraft = reopenField(draft, field);
    setDraft(nextDraft);
    setTurns((current) => [
      ...current,
      {
        id: turnId("nora"),
        role: "nora",
        text: nextNoraPrompt(collectPhaseOf(nextDraft)),
      },
    ]);
  }

  async function onCreate() {
    if (pending || !ready) return;
    setSubmitError(null);
    const stableKey = idempotencyKey || createIdempotencyKey();
    if (!idempotencyKey) setIdempotencyKey(stableKey);
    setPending(true);
    try {
      const intention = draft.intention.trim();
      const result = await createProjectRuntimeAction({
        name: draft.name.trim(),
        objective: intention,
        context: draft.context.trim() || intention,
        criticality: "STANDARD",
        constraints: [],
        idempotencyKey: stableKey,
      });

      if (result.ok) {
        setCreated(result);
        router.push(
          `/studio/projects/${encodeURIComponent(result.projectId)}`,
        );
        return;
      }

      if (result.error.code === "DOCTRINE_UNRESOLVED") {
        setSubmitError(
          "Le projet n’a pas pu être créé : le référentiel local n’a pas pu être validé. Rien n’a été enregistré.",
        );
        return;
      }
      if (result.error.code === "INPUT_INVALID") {
        setSubmitError(
          result.error.message ||
            "Les informations fournies ne permettent pas de créer le projet.",
        );
        return;
      }
      setSubmitError(
        result.error.retryable
          ? "La création n’a pas abouti. Vous pouvez réessayer : la conversation est conservée."
          : "La création n’a pas abouti. Précisez encore l’intention ou le nom avant de réessayer.",
      );
    } catch {
      setSubmitError(
        "Le service local n’a pas répondu. La conversation est conservée ; vous pouvez réessayer.",
      );
    } finally {
      setPending(false);
    }
  }

  if (created) {
    return (
      <div className={styles.page} data-testid="new-project-created">
        <header className={styles.hero}>
          <h1 className={styles.heroTitle}>Projet créé</h1>
          <p className={styles.heroSubtitle}>
            Ouverture du workspace durable. Nora reprend à partir du projet
            enregistré — pas du brouillon local.
          </p>
        </header>
        <Link
          href={`/studio/projects/${encodeURIComponent(created.projectId)}`}
          className={styles.primaryButton}
          data-testid="open-project-workspace"
        >
          Ouvrir le projet
        </Link>
      </div>
    );
  }

  return (
    <div
      className={styles.page}
      data-testid="create-project-form"
      data-surface="new-project-chat"
      data-create-surface="conversational"
      data-collect-phase={phase}
    >
      <div className={styles.pageChrome} data-testid="new-project-chrome">
        <div className={styles.chromeTrail}>
          <Link href="/studio">Projets</Link>
          <span className={styles.chromeSep} aria-hidden>
            /
          </span>
          <span className={styles.chromeCurrent}>Nouveau projet</span>
        </div>
        <div className={styles.chromeRight}>
          <p className={styles.chromeStatus}>Projet pas encore créé</p>
          <span className={styles.draftChip}>Brouillon</span>
        </div>
      </div>

      <div className={styles.creationColumn}>
        <header className={styles.hero}>
          <h1 className={styles.heroTitle}>Créer un projet</h1>
          <p className={styles.heroSubtitle}>
            Décris simplement ce que tu veux accomplir. Nora t&apos;aidera à
            préciser uniquement ce qui est nécessaire pour démarrer
            correctement. Aucun projet durable n&apos;est créé tant que tu
            n&apos;as pas choisi « Créer le projet ».
          </p>
        </header>

        <div
          className={styles.thread}
          ref={threadRef}
          data-testid="new-project-thread"
          aria-live="polite"
        >
          {turns.map((turn) => (
            <div
              key={turn.id}
              className={
                turn.role === "user" ? styles.bubbleUser : styles.bubbleNora
              }
              data-role={turn.role}
            >
              <p className={styles.bubbleLabel}>
                {turn.role === "user" ? "Vous" : "Nora"}
              </p>
              <p className={styles.bubbleText}>{turn.text}</p>
            </div>
          ))}
        </div>

        <form
          className={styles.composer}
          onSubmit={onSend}
          data-testid="new-project-composer"
        >
          <label className={styles.srOnly} htmlFor={`${fieldId}-composer`}>
            Réponse à Nora
          </label>
          <textarea
            id={`${fieldId}-composer`}
            className={styles.textarea}
            rows={3}
            value={composer}
            disabled={pending}
            placeholder={composerPlaceholder(phase)}
            data-testid="new-project-input"
            onChange={(event) => setComposer(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                onSend();
              }
            }}
          />
          <div className={styles.actions}>
            <Link
              href="/studio"
              className={styles.quietButton}
              data-testid="create-project-cancel"
            >
              Annuler
            </Link>
            <button
              type="submit"
              className={styles.sendIcon}
              disabled={pending || composer.trim().length === 0}
              data-testid="new-project-send"
              aria-label="Envoyer"
            >
              ↑
            </button>
          </div>
          <p className={styles.help}>
            Tu n&apos;as rien à remplir : Nora construit le projet à partir de
            la conversation. Aucun projet n&apos;est créé avant le CTA.
          </p>
        </form>
      </div>

      <aside
        className={styles.preview}
        data-testid="new-project-preview"
        aria-labelledby={`${fieldId}-preview`}
      >
        <div className={styles.previewHeader}>
          <div className={styles.previewMeta}>
            <p className={styles.previewEyebrow}>Projet en préparation</p>
            <span className={styles.draftChip}>Non créé</span>
          </div>
          <h2 id={`${fieldId}-preview`} className={styles.previewTitle}>
            Aperçu du projet
          </h2>
        </div>
        <hr className={styles.previewDivider} />
        <dl className={styles.previewList}>
          <div>
            <dt>Nom proposé</dt>
            <dd data-testid="preview-name">
              {draft.name.trim() || "Pas encore précisé"}
            </dd>
          </div>
          <div>
            <dt>Objectif</dt>
            <dd data-testid="preview-intention">
              {draft.intention.trim() || "Pas encore précisée"}
            </dd>
          </div>
          <div>
            <dt>Point de départ</dt>
            <dd data-testid="preview-context">
              {draft.context.trim() || "Pas de projet créé pour l’instant"}
            </dd>
          </div>
        </dl>
        <hr className={styles.previewDivider} />
        {ready ? (
          <>
            <div className={styles.readyBox}>
              <p className={styles.readyBoxTitle}>Projet prêt à être créé</p>
              <p className={styles.readyBoxBody}>
                L&apos;intention et le nom sont suffisamment clairs pour créer
                le contexte projet.
              </p>
            </div>
            <div className={styles.correctRow}>
              <button
                type="button"
                className={styles.textButton}
                data-testid="reopen-intention"
                onClick={() => onReopen("intention")}
              >
                Corriger l&apos;intention
              </button>
              <button
                type="button"
                className={styles.textButton}
                data-testid="reopen-name"
                onClick={() => onReopen("name")}
              >
                Corriger le nom
              </button>
            </div>
          </>
        ) : (
          <div className={styles.pendingBox}>
            <p className={styles.pendingBoxTitle}>
              Démarrage · points à clarifier
            </p>
            <p className={styles.pendingBoxBody}>
              Intention et nom sont requis avant création. Nora continue à
              préciser à partir de la conversation.
            </p>
          </div>
        )}
        <div className={styles.createWrap}>
          <button
            type="button"
            className={styles.primaryButton}
            disabled={pending || !ready}
            data-testid="create-project-submit"
            onClick={() => void onCreate()}
          >
            {pending ? "Création…" : "Créer le projet"}
          </button>
          <p className={styles.help}>
            Après création, la conversation continue avec Nora pour préciser le
            démarrage du projet.
          </p>
          <div aria-live="assertive" aria-atomic="true">
            {submitError ? (
              <p
                className={styles.submitError}
                role="alert"
                data-testid="submit-error"
              >
                {submitError}
              </p>
            ) : null}
          </div>
        </div>
      </aside>
    </div>
  );
}
