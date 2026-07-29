"use client";

import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from "react";
import { Card } from "@/components/ui/Card";
import { CtaButton } from "@/components/ui/CtaButton";
import { StatusPill } from "@/components/ui/StatusPill";
import { createProjectRuntimeAction } from "@/lib/vertical-slice-runtime/actions";
import styles from "./create-project.module.css";

type RuntimeActionResult = Awaited<
  ReturnType<typeof createProjectRuntimeAction>
>;
type RuntimeSuccess = Extract<RuntimeActionResult, { ok: true }>;
type Criticality = "LOW" | "STANDARD" | "HIGH";
type FieldName =
  | "name"
  | "objective"
  | "context"
  | "criticality"
  | "constraints"
  | "shortReference";

interface FormValues {
  name: string;
  objective: string;
  context: string;
  criticality: Criticality;
  constraints: string;
  shortReference: string;
}

type FieldErrors = Partial<Record<FieldName, string>>;

const EMPTY_FORM: FormValues = {
  name: "",
  objective: "",
  context: "",
  criticality: "STANDARD",
  constraints: "",
  shortReference: "",
};

const CRITICALITY_OPTIONS: readonly {
  value: Criticality;
  label: string;
}[] = [
  { value: "LOW", label: "Faible" },
  { value: "STANDARD", label: "Standard" },
  { value: "HIGH", label: "Élevée" },
];

function createIdempotencyKey(): string {
  const uuid = globalThis.crypto?.randomUUID?.();
  return `v2-a2:${uuid ?? `${Date.now()}-${Math.random().toString(16).slice(2)}`}`;
}

function parseConstraints(value: string): string[] {
  return value
    .split(/\r?\n/)
    .map((constraint) => constraint.trim())
    .filter(Boolean);
}

function validate(values: FormValues): FieldErrors {
  const errors: FieldErrors = {};
  if (!values.name.trim()) {
    errors.name = "Le nom du projet est obligatoire.";
  } else if (values.name.length > 200) {
    errors.name = "Le nom ne peut pas dépasser 200 caractères.";
  }

  if (!values.objective.trim()) {
    errors.objective = "L’objectif est obligatoire.";
  }
  if (!values.context.trim()) {
    errors.context = "Le contexte est obligatoire.";
  }
  if (values.shortReference.trim().length > 64) {
    errors.shortReference =
      "La référence courte ne peut pas dépasser 64 caractères.";
  }

  if (parseConstraints(values.constraints).some((item) => item.length > 500)) {
    errors.constraints =
      "Chaque contrainte doit contenir au maximum 500 caractères.";
  }
  return errors;
}

function fieldForRuntimeError(field: string | undefined): FieldName | null {
  if (field === "perceivedCriticality") return "criticality";
  if (
    field === "name" ||
    field === "objective" ||
    field === "context" ||
    field === "constraints" ||
    field === "shortReference"
  ) {
    return field;
  }
  return null;
}

function ProjectCreationResult({
  result,
  onReset,
}: {
  result: RuntimeSuccess;
  onReset: () => void;
}) {
  return (
    <Card variant="flush" className={styles.resultCard}>
      <div className={styles.resultHeader}>
        <div>
          <h2>Projet créé localement</h2>
          <p className={styles.resultHint}>
            Projection réelle du core V1 — aucune fixture et aucune
            persistance produit.
          </p>
        </div>
        <div className={styles.pillGroup}>
          <StatusPill tone="green">REAL_LOCAL_CORE</StatusPill>
          <StatusPill tone="orange">
            {result.readiness.status}
          </StatusPill>
        </div>
      </div>

      <section className={styles.resultSection} aria-labelledby="project-data">
        <h3 id="project-data">Project</h3>
        <dl className={styles.definitionGrid}>
          <div className={styles.definitionItem}>
            <dt>Project ID</dt>
            <dd className={styles.valueCode}>{result.projectId}</dd>
          </div>
          <div className={styles.definitionItem}>
            <dt>Nom</dt>
            <dd>{result.project.name}</dd>
          </div>
          {result.project.shortReference ? (
            <div className={styles.definitionItem}>
              <dt>Référence courte</dt>
              <dd>{result.project.shortReference}</dd>
            </div>
          ) : null}
          <div className={styles.definitionItem}>
            <dt>Criticité perçue</dt>
            <dd>{result.project.criticality}</dd>
          </div>
          <div className={styles.definitionItem}>
            <dt>Objectif</dt>
            <dd>{result.project.objective}</dd>
          </div>
          <div className={styles.definitionItem}>
            <dt>Contexte résumé</dt>
            <dd>{result.project.contextSummary}</dd>
          </div>
          <div className={styles.definitionItem}>
            <dt>Source</dt>
            <dd>{result.project.source}</dd>
          </div>
          <div className={styles.definitionItem}>
            <dt>Fixture</dt>
            <dd>{String(result.project.fixture)}</dd>
          </div>
        </dl>
        {result.project.constraints.length > 0 ? (
          <ul className={styles.constraintList} aria-label="Contraintes">
            {result.project.constraints.map((constraint, index) => (
              <li key={`${index}:${constraint}`}>{constraint}</li>
            ))}
          </ul>
        ) : (
          <p className={styles.empty}>Aucune contrainte principale.</p>
        )}
      </section>

      <section className={styles.resultSection} aria-labelledby="doctrine-data">
        <h3 id="doctrine-data">Doctrine et Living Project State</h3>
        <dl className={styles.definitionGrid}>
          <div className={styles.definitionItem}>
            <dt>Doctrine</dt>
            <dd>{result.doctrine.id}</dd>
          </div>
          <div className={styles.definitionItem}>
            <dt>Version / statut</dt>
            <dd>
              {result.doctrine.version} · {result.doctrine.status}
            </dd>
          </div>
          <div className={styles.definitionItem}>
            <dt>Digest</dt>
            <dd className={styles.valueCode}>{result.doctrine.digest}</dd>
          </div>
          <div className={styles.definitionItem}>
            <dt>LPS</dt>
            <dd className={styles.valueCode}>{result.livingState.id}</dd>
          </div>
          <div className={styles.definitionItem}>
            <dt>LPS version / date</dt>
            <dd>
              v{result.livingState.version} · {result.livingState.createdAt}
            </dd>
          </div>
          <div className={styles.definitionItem}>
            <dt>Audit</dt>
            <dd>{result.auditStatus}</dd>
          </div>
          <div className={styles.definitionItem}>
            <dt>Idempotence réutilisée</dt>
            <dd>{String(result.reusedFromIdempotencyKey)}</dd>
          </div>
        </dl>
      </section>

      <section className={styles.truthBox} aria-labelledby="runtime-truth">
        <h3 id="runtime-truth">Vérité runtime</h3>
        <div className={styles.pillGroup}>
          <StatusPill tone="orangeFlush">
            {result.disclosures.runtimeMode}
          </StatusPill>
          <StatusPill tone="muted">
            {result.disclosures.persistence}
          </StatusPill>
          <StatusPill tone="muted">
            AGENT {result.disclosures.agentExecution}
          </StatusPill>
          <StatusPill tone="orange">
            {result.readiness.status}
          </StatusPill>
        </div>
        <p className={styles.resultHint}>
          IAM {result.disclosures.iam} · PRODUCT PERSISTENCE{" "}
          {result.disclosures.productPersistence} · DELIVERY{" "}
          {result.disclosures.delivery} · CUTOVER{" "}
          {result.disclosures.cutover} · RUN READY ={" "}
          {String(result.readiness.runReady)} · PRODUCT READY ={" "}
          {String(result.readiness.productReady)}
        </p>
      </section>

      <div className={styles.actions}>
        <CtaButton type="button" variant="secondary" onClick={onReset}>
          Créer un autre projet
        </CtaButton>
      </div>
    </Card>
  );
}

export function CreateProjectForm() {
  const [values, setValues] = useState<FormValues>(EMPTY_FORM);
  const [idempotencyKey, setIdempotencyKey] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [doctrineError, setDoctrineError] = useState(false);
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState<RuntimeSuccess | null>(null);

  const nameRef = useRef<HTMLInputElement>(null);
  const objectiveRef = useRef<HTMLTextAreaElement>(null);
  const contextRef = useRef<HTMLTextAreaElement>(null);
  const constraintsRef = useRef<HTMLTextAreaElement>(null);
  const shortReferenceRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setIdempotencyKey(createIdempotencyKey());
  }, []);

  function update<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    setFieldErrors((current) => ({ ...current, [key]: undefined }));
  }

  function focusField(field: FieldName) {
    const references: Partial<
      Record<FieldName, { current: HTMLElement | null }>
    > = {
      name: nameRef,
      objective: objectiveRef,
      context: contextRef,
      constraints: constraintsRef,
      shortReference: shortReferenceRef,
    };
    references[field]?.current?.focus();
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;

    setSubmitError(null);
    setDoctrineError(false);
    const errors = validate(values);
    setFieldErrors(errors);
    const firstInvalid = Object.keys(errors)[0] as FieldName | undefined;
    if (firstInvalid) {
      focusField(firstInvalid);
      return;
    }

    const stableKey = idempotencyKey || createIdempotencyKey();
    if (!idempotencyKey) setIdempotencyKey(stableKey);
    setPending(true);
    try {
      const result = await createProjectRuntimeAction({
        name: values.name.trim(),
        objective: values.objective.trim(),
        context: values.context.trim(),
        criticality: values.criticality,
        constraints: parseConstraints(values.constraints),
        shortReference: values.shortReference.trim() || undefined,
        idempotencyKey: stableKey,
      });

      if (result.ok) {
        setSuccess(result);
        return;
      }

      const runtimeField = fieldForRuntimeError(result.error.field);
      if (result.error.code === "INPUT_INVALID" && runtimeField) {
        setFieldErrors({ [runtimeField]: result.error.message });
        focusField(runtimeField);
        return;
      }
      if (result.error.code === "DOCTRINE_UNRESOLVED") {
        setDoctrineError(true);
        setSubmitError(
          "La doctrine locale n’a pas pu être validée. Aucun Project ou LPS n’a été créé.",
        );
        return;
      }
      setSubmitError(
        `La création locale a échoué (${result.error.code}). ${
          result.error.retryable
            ? "Vous pouvez réessayer avec la même clé de tentative."
            : "Vérifiez les champs ou le runtime local avant de réessayer."
        }`,
      );
    } catch {
      setSubmitError(
        "Le runtime local n’a pas répondu. Les données saisies sont conservées ; vous pouvez réessayer.",
      );
    } finally {
      setPending(false);
    }
  }

  function resetAfterSuccess() {
    setValues(EMPTY_FORM);
    setFieldErrors({});
    setSubmitError(null);
    setDoctrineError(false);
    setSuccess(null);
    setIdempotencyKey(createIdempotencyKey());
    requestAnimationFrame(() => nameRef.current?.focus());
  }

  if (success) {
    return (
      <ProjectCreationResult result={success} onReset={resetAfterSuccess} />
    );
  }

  return (
    <Card variant="flush" className={styles.formCard}>
      <div>
        <h2>Créer un Project local</h2>
        <p className={styles.formIntro}>
          Les champs sont transmis à la Server Action V2-A1. Le runtime et le
          core V1 restent l’autorité de validation.
        </p>
      </div>

      <form
        className={styles.form}
        onSubmit={onSubmit}
        noValidate
        aria-busy={pending}
        data-testid="create-project-form"
      >
        <div className={styles.fieldGrid}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="project-name">
              Nom du projet <span className={styles.required}>*</span>
            </label>
            <input
              ref={nameRef}
              className={styles.input}
              id="project-name"
              name="name"
              required
              aria-required="true"
              aria-invalid={Boolean(fieldErrors.name)}
              aria-describedby={
                fieldErrors.name ? "project-name-error" : "project-name-help"
              }
              maxLength={200}
              value={values.name}
              onChange={(event) => update("name", event.target.value)}
            />
            <p className={styles.help} id="project-name-help">
              200 caractères maximum.
            </p>
            {fieldErrors.name ? (
              <p className={styles.error} id="project-name-error">
                {fieldErrors.name}
              </p>
            ) : null}
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="short-reference">
              Référence courte
            </label>
            <input
              ref={shortReferenceRef}
              className={styles.input}
              id="short-reference"
              name="shortReference"
              aria-invalid={Boolean(fieldErrors.shortReference)}
              aria-describedby={
                fieldErrors.shortReference
                  ? "short-reference-error"
                  : "short-reference-help"
              }
              maxLength={64}
              value={values.shortReference}
              onChange={(event) =>
                update("shortReference", event.target.value)
              }
            />
            <p className={styles.help} id="short-reference-help">
              Optionnelle · 64 caractères maximum.
            </p>
            {fieldErrors.shortReference ? (
              <p className={styles.error} id="short-reference-error">
                {fieldErrors.shortReference}
              </p>
            ) : null}
          </div>

          <div className={styles.fieldFull}>
            <label className={styles.label} htmlFor="project-objective">
              Objectif <span className={styles.required}>*</span>
            </label>
            <textarea
              ref={objectiveRef}
              className={styles.textarea}
              id="project-objective"
              name="objective"
              required
              aria-required="true"
              aria-invalid={Boolean(fieldErrors.objective)}
              aria-describedby={
                fieldErrors.objective
                  ? "project-objective-error"
                  : "project-objective-help"
              }
              value={values.objective}
              onChange={(event) => update("objective", event.target.value)}
            />
            <p className={styles.help} id="project-objective-help">
              Décrivez le résultat attendu, sans donnée personnelle ni secret.
            </p>
            {fieldErrors.objective ? (
              <p className={styles.error} id="project-objective-error">
                {fieldErrors.objective}
              </p>
            ) : null}
          </div>

          <div className={styles.fieldFull}>
            <label className={styles.label} htmlFor="project-context">
              Contexte <span className={styles.required}>*</span>
            </label>
            <textarea
              ref={contextRef}
              className={styles.textarea}
              id="project-context"
              name="context"
              required
              aria-required="true"
              aria-invalid={Boolean(fieldErrors.context)}
              aria-describedby={
                fieldErrors.context
                  ? "project-context-error"
                  : "project-context-help"
              }
              value={values.context}
              onChange={(event) => update("context", event.target.value)}
            />
            <p className={styles.help} id="project-context-help">
              Contexte local borné ; aucune identité IAM ou donnée
              d’infrastructure.
            </p>
            {fieldErrors.context ? (
              <p className={styles.error} id="project-context-error">
                {fieldErrors.context}
              </p>
            ) : null}
          </div>

          <fieldset
            className={`${styles.radioFieldset} ${styles.fieldFull}`}
            aria-describedby={
              fieldErrors.criticality
                ? "criticality-help criticality-error"
                : "criticality-help"
            }
            aria-invalid={Boolean(fieldErrors.criticality)}
          >
            <legend className={styles.legend}>Criticité perçue</legend>
            <div className={styles.radioGroup}>
              {CRITICALITY_OPTIONS.map((option) => (
                <label className={styles.radioLabel} key={option.value}>
                  <input
                    type="radio"
                    name="criticality"
                    value={option.value}
                    checked={values.criticality === option.value}
                    onChange={() => update("criticality", option.value)}
                  />
                  {option.label}
                </label>
              ))}
            </div>
            <p className={styles.help} id="criticality-help">
              Entrée de qualification uniquement — ce choix n’est pas une
              décision Morris.
            </p>
            {fieldErrors.criticality ? (
              <p className={styles.error} id="criticality-error">
                {fieldErrors.criticality}
              </p>
            ) : null}
          </fieldset>

          <div className={styles.fieldFull}>
            <label className={styles.label} htmlFor="project-constraints">
              Contraintes principales
            </label>
            <textarea
              ref={constraintsRef}
              className={styles.textareaCompact}
              id="project-constraints"
              name="constraints"
              aria-invalid={Boolean(fieldErrors.constraints)}
              aria-describedby={
                fieldErrors.constraints
                  ? "project-constraints-error"
                  : "project-constraints-help"
              }
              value={values.constraints}
              onChange={(event) => update("constraints", event.target.value)}
            />
            <p className={styles.help} id="project-constraints-help">
              Une contrainte par ligne · lignes vides ignorées · 500
              caractères maximum par contrainte.
            </p>
            {fieldErrors.constraints ? (
              <p className={styles.error} id="project-constraints-error">
                {fieldErrors.constraints}
              </p>
            ) : null}
          </div>
        </div>

        <div className={styles.attemptKey}>
          <span className={styles.label}>Clé de tentative non éditable</span>
          <code data-testid="idempotency-key">
            {idempotencyKey || "Génération locale…"}
          </code>
          <span className={styles.help}>
            Stable pendant les retries ; renouvelée après « Créer un autre
            projet ».
          </span>
        </div>

        <div aria-live="assertive" aria-atomic="true">
          {submitError ? (
            <p
              className={
                doctrineError ? styles.doctrineError : styles.submitError
              }
              role="alert"
              data-testid="submit-error"
            >
              {submitError}
            </p>
          ) : null}
        </div>

        <div className={styles.actions}>
          <span
            className={styles.statusText}
            role="status"
            aria-live="polite"
          >
            {pending ? "Création locale en cours…" : ""}
          </span>
          <CtaButton
            type="submit"
            disabled={pending || !idempotencyKey}
            data-testid="create-project-submit"
          >
            {pending ? "Création…" : "Créer le projet"}
          </CtaButton>
        </div>
      </form>
    </Card>
  );
}
