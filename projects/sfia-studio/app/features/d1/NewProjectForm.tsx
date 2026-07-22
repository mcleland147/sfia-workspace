"use client";

import { useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { actionCreateProject } from "@/lib/d1/actions";
import { D1_GOVERNANCE_METHOD_MODE } from "@/lib/d1/types";
import { D1AppShell } from "./D1AppShell";
import styles from "./d1-shell.module.css";

/**
 * Manual project creation — secondary to conversational intake.
 * MethodMode is NOT a user choice; governance default is applied internally.
 */
export function NewProjectForm() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [name, setName] = useState("");
  const [objective, setObjective] = useState("");
  const [context, setContext] = useState("");
  const [activate, setActivate] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const idempotencyKey = useMemo(
    () => `idemp-${crypto.randomUUID()}`,
    [],
  );

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    startTransition(async () => {
      const result = await actionCreateProject({
        name,
        objective,
        initialContextSummary: context || undefined,
        methodMode: D1_GOVERNANCE_METHOD_MODE,
        activate,
        idempotencyKey,
      });
      if (!result.ok) {
        setError(result.message);
        return;
      }
      router.push(`/projects/${result.project.projectId}`);
      router.refresh();
    });
  }

  return (
    <D1AppShell active="new" title="Créer manuellement">
      <div className={styles.header}>
        <h1>Créer manuellement</h1>
      </div>
      <p className={styles.hint} data-testid="manual-creation-hint">
        Formulaire court · parcours standard ={" "}
        <a href="/nouvelle-demande">Nouvelle demande</a> conversationnelle ·
        méthode appliquée en interne (non exposée comme choix produit)
      </p>
      <form
        className={`${styles.card} ${styles.form}`}
        onSubmit={onSubmit}
        noValidate
        data-testid="manual-project-form"
      >
        <label className={styles.label}>
          1. Identité
          <input
            className={styles.input}
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            data-testid="project-name"
            aria-required
          />
        </label>
        <label className={styles.label}>
          2. Objectif
          <textarea
            className={styles.textarea}
            name="objective"
            required
            value={objective}
            onChange={(e) => setObjective(e.target.value)}
            data-testid="project-objective"
          />
        </label>
        <label className={styles.label}>
          3. Contexte initial
          <span className={styles.hint}>
            Léger — cadrage détaillé = cycles futurs
          </span>
          <textarea
            className={styles.textarea}
            name="context"
            value={context}
            onChange={(e) => setContext(e.target.value)}
            data-testid="project-context"
          />
        </label>
        <label className={styles.label}>
          4. Responsable / décideur
          <span className={styles.hint}>
            Même utilisateur autorisé en I1 (DESIGN-R01) — actor-mono-i1
          </span>
        </label>
        <label className={styles.label} style={{ fontWeight: 500 }}>
          <input
            type="checkbox"
            checked={activate}
            onChange={(e) => setActivate(e.target.checked)}
            data-testid="project-activate"
          />{" "}
          5. Activer immédiatement (ACTIVE) après création
        </label>
        {error ? (
          <p className={styles.error} role="alert">
            {error}
          </p>
        ) : null}
        <button
          className={styles.cta}
          type="submit"
          disabled={pending}
          data-testid="project-submit"
        >
          {pending ? "Création…" : "Confirmer la création"}
        </button>
      </form>
    </D1AppShell>
  );
}
