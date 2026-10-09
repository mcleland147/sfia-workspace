"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createProjectRuntimeAction } from "@/lib/vertical-slice-runtime/actions";
import { newProjectOnboardingTurnAction } from "./newProjectOnboardingAction";
import {
  buildProductContextHandoff,
  collectPhaseOf,
  composerPlaceholder,
  emptyDraft,
  INTENTION_STARTERS,
  isMinimumSufficient,
  objectiveFromDraft,
  openingNoraTurn,
  reopenField,
  startingPointFromDraft,
  understoodPointsFromDraft,
  type ChatTurn,
  type CollectField,
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
 * P6-HQA-NEWPROJECT-01 — cognitive New Project onboarding.
 * Nora turns via canonical ConversationProvider. Create only via createProjectRuntimeAction.
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
  const [thinking, setThinking] = useState(false);
  const [created, setCreated] = useState<CreateSuccess | null>(null);
  const threadRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  const ready = isMinimumSufficient(draft);
  const phase = collectPhaseOf(draft);
  const understood = understoodPointsFromDraft(draft);
  const objective = objectiveFromDraft(draft);
  const startingPoint = startingPointFromDraft(draft);

  useEffect(() => {
    setIdempotencyKey(createIdempotencyKey());
    return () => {
      abortRef.current?.abort();
    };
  }, []);

  useEffect(() => {
    const el = threadRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [turns, draft, thinking]);

  async function onSend(event?: FormEvent) {
    event?.preventDefault();
    const text = composer.trim();
    if (!text || pending || thinking) return;

    const userTurn: ChatTurn = { id: turnId("user"), role: "user", text };
    const historyForProvider = [...turns, userTurn].map((t) => ({
      role: t.role,
      text: t.text,
    }));
    setTurns((current) => [...current, userTurn]);
    setComposer("");
    setSubmitError(null);
    setThinking(true);

    try {
      const result = await newProjectOnboardingTurnAction({
        userText: text,
        draft,
        history: historyForProvider.slice(0, -1),
      });

      if (!result.ok) {
        setTurns((current) => [
          ...current,
          {
            id: turnId("nora"),
            role: "nora",
            text: result.message,
            meta: "error",
          },
        ]);
        return;
      }

      setDraft(result.draft);
      setTurns((current) => [
        ...current,
        {
          id: turnId("nora"),
          role: "nora",
          text: result.replyText,
          meta: result.draft.cognitiveCreateProposal ? "understood" : "cognitive",
          clarification: result.clarification,
        },
      ]);
    } catch {
      setTurns((current) => [
        ...current,
        {
          id: turnId("nora"),
          role: "nora",
          text: "Le service n’a pas répondu. La conversation est conservée ; tu peux réessayer.",
          meta: "error",
        },
      ]);
    } finally {
      setThinking(false);
    }
  }

  function onChip(text: string) {
    if (pending || thinking) return;
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
          field === "name"
            ? "Ok — on reprend le nom. Comment veux-tu l’appeler, ou je peux proposer à nouveau ?"
            : "Ok — reformule l’intention principale du projet.",
        meta: "cognitive",
      },
    ]);
  }

  async function onCreate() {
    if (pending || thinking || !ready) return;
    setSubmitError(null);
    const stableKey = idempotencyKey || createIdempotencyKey();
    if (!idempotencyKey) setIdempotencyKey(stableKey);
    setPending(true);
    try {
      const intention = draft.intention.trim();
      const objectiveText = (draft.objective.trim() || intention).slice(0, 4000);
      const contextText = buildProductContextHandoff(
        draft,
        turns.map((t) => ({ role: t.role, text: t.text })),
      );
      const result = await createProjectRuntimeAction({
        name: draft.name.trim(),
        objective: objectiveText,
        context: contextText || intention,
        criticality: "STANDARD",
        constraints: [],
        idempotencyKey: stableKey,
      });

      if (result.ok) {
        setCreated(result);
        router.push(
          `/studio/projects/${encodeURIComponent(result.projectId)}?from=new-project-onboarding`,
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
            enregistré — l’accueil est conservé dans le contexte Product.
          </p>
        </header>
        <Link
          href={`/studio/projects/${encodeURIComponent(created.projectId)}?from=new-project-onboarding`}
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
      data-cognitive="nora-provider"
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
              Dis à Nora ce que tu veux accomplir. Elle clarifie seulement ce
              qui est utile — la création reste ton choix.
            </span>
            <span className={styles.heroSubtitleMobile}>
              Décris ce que tu veux accomplir. Nora t&apos;aide à démarrer.
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
                {turn.meta === "error" ? (
                  <span className={styles.metaChipMuted}>Indisponible</span>
                ) : null}
              </div>
              <p
                className={styles.bubbleText}
                data-meta={turn.meta ?? undefined}
              >
                {turn.text}
              </p>
              {turn.meta === "opening" && !draft.intention.trim() ? (
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
          {thinking ? (
            <div
              className={styles.bubbleNora}
              data-role="nora"
              data-testid="new-project-thinking"
            >
              <div className={styles.bubbleHeader}>
                <p className={styles.bubbleLabel}>Nora</p>
                <span className={styles.metaChipMuted}>Réflexion</span>
              </div>
              <p className={styles.bubbleText}>…</p>
            </div>
          ) : null}
        </div>

        <form
          className={styles.composer}
          onSubmit={(e) => void onSend(e)}
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
              disabled={pending || thinking}
              placeholder={composerPlaceholder(draft)}
              data-testid="new-project-input"
              onChange={(event) => setComposer(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault();
                  void onSend();
                }
              }}
            />
            <div className={styles.composerBottom}>
              <div className={styles.composerHelpers}>
                <span>Conversation avec Nora</span>
              </div>
              <button
                type="submit"
                className={styles.sendIcon}
                disabled={
                  pending || thinking || composer.trim().length === 0
                }
                data-testid="new-project-send"
                aria-label="Envoyer"
              >
                ↑
              </button>
            </div>
          </div>
          <Link
            href="/studio"
            className={styles.srOnly}
            data-testid="create-project-cancel"
          >
            Annuler et revenir aux projets
          </Link>
          <p className={styles.help}>
            Nora comprend et propose. La création du projet reste un acte
            explicite de ta part.
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
              <p className={styles.previewHintInline}>
                {draft.nameProvisional
                  ? "Nom provisoire — tu pourras le renommer"
                  : "Tu pourras le renommer"}
              </p>
            ) : null}
          </div>
          <div className={styles.previewFieldObjective}>
            <dt>Intention / objectif</dt>
            <dd data-testid="preview-intention">
              {objective || "Pas encore précisée"}
            </dd>
          </div>
          <div>
            <dt>Contexte / point de départ</dt>
            <dd data-testid="preview-context">
              {startingPoint || "À préciser si besoin"}
            </dd>
          </div>
          <div>
            <dt>Première orientation</dt>
            <dd data-testid="preview-orientation">
              {draft.firstOrientation.trim() ||
                "Proposition après création — non autoritative"}
            </dd>
          </div>
          <div>
            <dt>Création</dt>
            <dd
              className={ready ? styles.previewWarn : undefined}
              data-testid="preview-startup"
            >
              {draft.explicitRefuseCreate
                ? "Création refusée pour l’instant"
                : ready
                  ? "Possible — en attente de ton accord"
                  : "En attente d’une intention exploitable"}
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
              <p className={styles.understoodTitle}>Repères de la conversation</p>
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
                  L&apos;intention est exploitable. Studio a validé les entrées
                  pour une création — Nora n&apos;a pas d&apos;autorité propre.
                </p>
              </div>
              <div className={styles.pendingBox}>
                <p className={styles.pendingBoxTitle}>
                  Après création · orientation provisoire
                </p>
                <p className={styles.pendingBoxBody}>
                  {draft.firstOrientation.trim() ||
                    "Nora pourra proposer une première direction dans le projet. Aucun cycle ne démarre automatiquement."}
                </p>
              </div>
            </>
          ) : (
            <div className={styles.pendingBox}>
              <p className={styles.pendingBoxTitle}>Création pas encore possible</p>
              <p className={styles.pendingBoxBody}>
                {draft.explicitRefuseCreate
                  ? "Tu as indiqué ne pas vouloir créer pour l’instant."
                  : "Il faut une intention exploitable. Le nom peut être proposé ou provisoire."}
              </p>
            </div>
          )}
          <div className={styles.createWrap}>
            <button
              type="button"
              className={styles.primaryButton}
              disabled={pending || thinking || !ready}
              data-testid="create-project-submit"
              onClick={() => void onCreate()}
            >
              {pending ? "Création…" : "Créer le projet"}
            </button>
            <p className={styles.help}>
              Après création, la conversation continue dans le projet. Aucun
              cycle n&apos;est démarré automatiquement.
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
