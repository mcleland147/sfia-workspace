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
  INTENTION_STARTERS,
  isMinimumSufficient,
  noraTurnAfter,
  objectiveFromDraft,
  openingNoraTurn,
  reopenField,
  startingPointFromDraft,
  understoodPointsFromDraft,
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
  const understood = understoodPointsFromDraft(draft);
  const objective = objectiveFromDraft(draft);
  const startingPoint = startingPointFromDraft(draft);

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
    const noraTurn = noraTurnAfter(asked, nextDraft);
    setDraft(nextDraft);
    setTurns((current) => [...current, userTurn, noraTurn]);
    setComposer("");
    setSubmitError(null);
  }

  function onChip(text: string) {
    if (pending) return;
    setComposer(text);
  }

  function onReopen(field: CollectField) {
    const nextDraft = reopenField(draft, field);
    setDraft(nextDraft);
    setTurns((current) => [
      ...current,
      {
        id: turnId("nora"),
        role: "nora",
        text:
          collectPhaseOf(nextDraft) === "NAME_REQUIRED"
            ? "Quel nom voulez-vous donner à ce projet ?"
            : "Quel est l’objectif ou l’intention principale de ce projet ?",
        meta: collectPhaseOf(nextDraft) === "NAME_REQUIRED" ? "name_ask" : "opening",
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
      data-ready={ready ? "true" : "false"}
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
          <h1 className={styles.heroTitle}>
            <span className={styles.heroTitleDesktop}>Créer un projet</span>
            <span className={styles.heroTitleMobile}>Nouveau projet</span>
          </h1>
          <p className={styles.heroSubtitle}>
            <span className={styles.heroSubtitleDesktop}>
              Décris simplement ce que tu veux accomplir. Nora t&apos;aidera à
              préciser uniquement ce qui est nécessaire pour démarrer
              correctement.
            </span>
            <span className={styles.heroSubtitleMobile}>
              Décris ce que tu veux accomplir. Nora t&apos;aide à préciser le
              projet.
            </span>
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
              <div className={styles.bubbleHeader}>
                <p className={styles.bubbleLabel}>
                  {turn.role === "user" ? "Vous" : "Nora"}
                </p>
                {turn.meta === "opening" ? (
                  <span className={styles.metaChipMuted}>Démarrage</span>
                ) : null}
                {turn.meta === "understood" ? (
                  <span className={styles.metaChipOk}>J’ai compris</span>
                ) : null}
              </div>
              <p
                className={styles.bubbleText}
                data-meta={turn.meta ?? undefined}
              >
                {turn.text}
              </p>
              {turn.meta === "opening" && phase === "INTENTION_REQUIRED" ? (
                <div
                  className={styles.chipRow}
                  data-testid="new-project-starters"
                >
                  {INTENTION_STARTERS.map((label) => (
                    <button
                      key={label}
                      type="button"
                      className={styles.suggestionChip}
                      onClick={() => onChip(label)}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              ) : null}
              {turn.clarification ? (
                <div
                  className={styles.clarification}
                  data-testid="new-project-clarification"
                >
                  <p className={styles.clarificationTitle}>
                    {turn.clarification.title}
                  </p>
                  <p className={styles.clarificationQuestion}>
                    {turn.clarification.question}
                  </p>
                  <div className={styles.chipRow}>
                    {turn.clarification.suggestions.map((label) => (
                      <button
                        key={label}
                        type="button"
                        className={styles.suggestionChip}
                        onClick={() => onChip(label)}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}
              {turn.clarification ? (
                <p className={styles.clarificationHint}>
                  Tu peux répondre librement ; ces suggestions ne sont là que
                  pour t’aider à formuler.
                </p>
              ) : null}
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
          <div className={styles.composerBox}>
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
            <div className={styles.composerBottom}>
              <div className={styles.composerHelpers}>
                <span>+ Ajouter du contexte</span>
                <span>Joindre un document</span>
              </div>
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
          </div>
          {/* P3 67:255 — no Annuler in composer chrome; keep accessible escape. */}
          <Link
            href="/studio"
            className={styles.srOnly}
            data-testid="create-project-cancel"
          >
            Annuler et revenir aux projets
          </Link>
          <p className={styles.help}>
            Tu n&apos;as rien à remplir : Nora construit le projet à partir de
            la conversation.
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
            <p className={styles.previewEyebrow}>
              <span className={styles.previewEyebrowDesktop}>
                Projet en préparation
              </span>
              <span className={styles.previewEyebrowMobile}>Projet</span>
            </p>
            <span className={styles.draftChip}>Non créé</span>
          </div>
          <h2 id={`${fieldId}-preview`} className={styles.previewTitle}>
            <span className={styles.previewTitleDesktop}>Aperçu du projet</span>
            <span className={styles.previewTitleMobile}>
              {draft.name.trim() || "Aperçu du projet"}
            </span>
          </h2>
        </div>
        <hr className={styles.previewDivider} />
        <dl className={styles.previewList}>
          <div className={styles.previewFieldName}>
            <dt>Nom proposé</dt>
            <dd data-testid="preview-name">
              {draft.name.trim() || "Pas encore précisé"}
            </dd>
            {draft.name.trim() ? (
              <p className={styles.previewHintInline}>Tu pourras le renommer</p>
            ) : null}
          </div>
          <div className={styles.previewFieldObjective}>
            <dt>Objectif</dt>
            <dd data-testid="preview-intention">
              {objective || "Pas encore précisée"}
            </dd>
          </div>
          <div>
            <dt>Point de départ</dt>
            <dd data-testid="preview-context">
              {startingPoint || "Pas de projet créé pour l’instant"}
            </dd>
            {startingPoint ? (
              <p className={styles.previewHintInline}>
                Pas de projet créé pour l’instant
              </p>
            ) : null}
          </div>
          <div>
            <dt>Démarrage</dt>
            <dd
              className={ready ? styles.previewWarn : undefined}
              data-testid="preview-startup"
            >
              {ready
                ? "1 point reste à clarifier"
                : "Intention et nom requis avant création"}
            </dd>
            {ready ? (
              <p className={styles.previewHintInline}>
                Le projet peut déjà être créé
              </p>
            ) : null}
          </div>
        </dl>
        {understood.length > 0 ? (
          <>
            <hr className={styles.previewDivider} />
            <div
              className={styles.understood}
              data-testid="new-project-understood"
            >
              <p className={styles.understoodTitle}>Ce que Nora a compris</p>
              <ul className={styles.understoodList}>
                {understood.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </>
        ) : null}
        <hr className={styles.previewDivider} />
        <div className={styles.createSection}>
          <p className={styles.createSectionLabel}>Création</p>
          {ready ? (
            <>
              <div className={styles.readyBox}>
                <p className={styles.readyBoxTitle}>Projet prêt à être créé</p>
                <p className={styles.readyBoxBody}>
                  L&apos;intention et l&apos;objectif sont suffisamment clairs
                  pour créer le contexte projet.
                </p>
              </div>
              <div className={styles.pendingBox}>
                <p className={styles.pendingBoxTitle}>
                  Démarrage · 1 point à clarifier
                </p>
                <p className={styles.pendingBoxBody}>
                  Nora continuera à préciser le premier travail après la
                  création du projet.
                </p>
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
              Après création, la conversation continue avec Nora pour préciser
              le démarrage du projet.
            </p>
            {ready ? (
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
            ) : null}
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
        </div>
      </aside>
    </div>
  );
}
