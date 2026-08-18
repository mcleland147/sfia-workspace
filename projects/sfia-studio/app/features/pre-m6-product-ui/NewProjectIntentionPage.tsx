"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { createProjectRuntimeAction } from "@/lib/vertical-slice-runtime/actions";
import styles from "./NewProjectIntentionPage.module.css";

type CreateResult = Awaited<ReturnType<typeof createProjectRuntimeAction>>;
type CreateSuccess = Extract<CreateResult, { ok: true }>;

type FieldErrors = {
  name?: string;
  intention?: string;
};

function createIdempotencyKey(): string {
  const uuid = globalThis.crypto?.randomUUID?.();
  return `pm6-intent:${uuid ?? `${Date.now()}-${Math.random().toString(16).slice(2)}`}`;
}

/**
 * PROVISIONAL intention sheet — no dedicated Figma frame exists for creation.
 * See README.md in this folder. Two product fields drive the runtime input:
 * intention becomes the objective, precisions the bounded context.
 */
export function NewProjectIntentionPage() {
  const [name, setName] = useState("");
  const [intention, setIntention] = useState("");
  const [precisions, setPrecisions] = useState("");
  const [idempotencyKey, setIdempotencyKey] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [created, setCreated] = useState<CreateSuccess | null>(null);

  const nameRef = useRef<HTMLInputElement>(null);
  const intentionRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setIdempotencyKey(createIdempotencyKey());
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;

    setSubmitError(null);
    const errors: FieldErrors = {};
    if (!name.trim()) {
      errors.name = "Donnez un nom au projet.";
    } else if (name.trim().length > 200) {
      errors.name = "Le nom ne peut pas dépasser 200 caractères.";
    }
    if (!intention.trim()) {
      errors.intention = "Décrivez l’intention du projet.";
    }
    setFieldErrors(errors);
    if (errors.name) {
      nameRef.current?.focus();
      return;
    }
    if (errors.intention) {
      intentionRef.current?.focus();
      return;
    }

    const stableKey = idempotencyKey || createIdempotencyKey();
    if (!idempotencyKey) setIdempotencyKey(stableKey);
    setPending(true);
    try {
      const trimmedIntention = intention.trim();
      const result = await createProjectRuntimeAction({
        name: name.trim(),
        objective: trimmedIntention,
        context: precisions.trim() || trimmedIntention,
        criticality: "STANDARD",
        constraints: [],
        idempotencyKey: stableKey,
      });

      if (result.ok) {
        setCreated(result);
        return;
      }

      if (result.error.code === "INPUT_INVALID") {
        if (result.error.field === "name") {
          setFieldErrors({ name: result.error.message });
          nameRef.current?.focus();
          return;
        }
        setFieldErrors({ intention: result.error.message });
        intentionRef.current?.focus();
        return;
      }
      if (result.error.code === "DOCTRINE_UNRESOLVED") {
        setSubmitError(
          "Le projet n’a pas pu être créé : le référentiel local n’a pas pu être validé. Rien n’a été enregistré.",
        );
        return;
      }
      setSubmitError(
        result.error.retryable
          ? "La création n’a pas abouti. Vous pouvez réessayer : votre saisie est conservée."
          : "La création n’a pas abouti. Vérifiez votre saisie avant de réessayer.",
      );
    } catch {
      setSubmitError(
        "Le service local n’a pas répondu. Votre saisie est conservée ; vous pouvez réessayer.",
      );
    } finally {
      setPending(false);
    }
  }

  function reset() {
    setName("");
    setIntention("");
    setPrecisions("");
    setFieldErrors({});
    setSubmitError(null);
    setCreated(null);
    setIdempotencyKey(createIdempotencyKey());
  }

  if (created) {
    return (
      <div className={styles.page}>
        <header className={styles.hero}>
          <h1 className={styles.heroTitle}>Projet créé</h1>
          <p className={styles.heroSubtitle}>
            Nora peut maintenant ouvrir la conversation de qualification. La
            décision vous appartient toujours.
          </p>
        </header>

        <section className={styles.card}>
          <dl className={styles.summary}>
            <div>
              <dt>Nom</dt>
              <dd>{created.project.name}</dd>
            </div>
            <div>
              <dt>Intention</dt>
              <dd>{created.project.objective}</dd>
            </div>
            <div>
              <dt>État du projet</dt>
              <dd>Enregistré · v{created.livingState.version}</dd>
            </div>
          </dl>
          <div className={styles.actions}>
            <Link
              href={`/studio/projects/${encodeURIComponent(created.projectId)}`}
              className={styles.primaryLink}
              data-testid="open-project-workspace"
            >
              Ouvrir le projet
            </Link>
            <button type="button" className={styles.quietButton} onClick={reset}>
              Créer un autre projet
            </button>
          </div>
          <details className={styles.details}>
            <summary>Détails techniques</summary>
            <dl className={styles.summary}>
              <div>
                <dt>Identifiant projet</dt>
                <dd className={styles.code}>{created.projectId}</dd>
              </div>
              <div>
                <dt>Criticité perçue</dt>
                <dd>{created.project.criticality}</dd>
              </div>
              <div>
                <dt>Préparation</dt>
                <dd>{created.readiness.status}</dd>
              </div>
              <div>
                <dt>Clé de tentative réutilisée</dt>
                <dd>{String(created.reusedFromIdempotencyKey)}</dd>
              </div>
            </dl>
          </details>
        </section>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <h1 className={styles.heroTitle}>Nouveau projet</h1>
        <p className={styles.heroSubtitle}>
          Nommez le projet et décrivez votre intention. Nora qualifiera ensuite —
          vous gardez la décision.
        </p>
      </header>

      <form
        className={styles.card}
        onSubmit={onSubmit}
        noValidate
        aria-busy={pending}
        data-testid="create-project-form"
      >
        <div className={styles.field}>
          <label className={styles.label} htmlFor="project-name">
            Nom du projet
          </label>
          <input
            ref={nameRef}
            id="project-name"
            name="name"
            className={styles.input}
            maxLength={200}
            value={name}
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={fieldErrors.name ? "project-name-error" : undefined}
            onChange={(event) => {
              setName(event.target.value);
              setFieldErrors((current) => ({ ...current, name: undefined }));
            }}
          />
          {fieldErrors.name ? (
            <p className={styles.fieldError} id="project-name-error">
              {fieldErrors.name}
            </p>
          ) : null}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="project-objective">
            Votre intention
          </label>
          <textarea
            ref={intentionRef}
            id="project-objective"
            name="objective"
            className={styles.textarea}
            rows={4}
            value={intention}
            placeholder="Décrivez ce que vous voulez accomplir…"
            aria-invalid={Boolean(fieldErrors.intention)}
            aria-describedby={
              fieldErrors.intention
                ? "project-objective-error project-objective-help"
                : "project-objective-help"
            }
            onChange={(event) => {
              setIntention(event.target.value);
              setFieldErrors((current) => ({ ...current, intention: undefined }));
            }}
          />
          <p className={styles.help} id="project-objective-help">
            Sans donnée personnelle ni secret. C&apos;est le point de départ de
            la qualification, pas un engagement d&apos;exécution.
          </p>
          {fieldErrors.intention ? (
            <p className={styles.fieldError} id="project-objective-error">
              {fieldErrors.intention}
            </p>
          ) : null}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="project-context">
            Précisions utiles <span className={styles.optional}>(optionnel)</span>
          </label>
          <textarea
            id="project-context"
            name="context"
            className={styles.textarea}
            rows={3}
            value={precisions}
            placeholder="Contexte, contraintes connues, ce qu'il faut éviter…"
            aria-describedby="project-context-help"
            onChange={(event) => setPrecisions(event.target.value)}
          />
          <p className={styles.help} id="project-context-help">
            Sans précision, votre intention sert aussi de contexte.
          </p>
        </div>

        <div aria-live="assertive" aria-atomic="true">
          {submitError ? (
            <p className={styles.submitError} role="alert" data-testid="submit-error">
              {submitError}
            </p>
          ) : null}
        </div>

        <div className={styles.actions}>
          <button
            type="submit"
            className={styles.primaryButton}
            disabled={pending || !idempotencyKey}
            data-testid="create-project-submit"
          >
            {pending ? "Création…" : "Créer le projet"}
          </button>
          <span className={styles.status} role="status" aria-live="polite">
            {pending ? "Création en cours…" : ""}
          </span>
        </div>

        <details className={styles.details}>
          <summary>Détails techniques</summary>
          <p className={styles.help}>
            Clé de tentative stable pendant les réessais, renouvelée après « Créer
            un autre projet ».
          </p>
          <p className={styles.code} data-testid="idempotency-key">
            {idempotencyKey || "Génération locale…"}
          </p>
        </details>
      </form>
    </div>
  );
}
