# Review Pack Full — SFIA v3.0 D1-C1 Intake Information Architecture Cleanup

## 1. Métadonnées

- **Date/heure/fuseau :** 2026-07-22 20:36:53 CEST
- **Cycle :** 9 — Delivery correctif (EVOL / UX / CORRECTIF)
- **Profil :** Light
- **Gate consommé :** GO CORRECTIF D1-C1 — INTAKE INFORMATION ARCHITECTURE CLEANUP
- **Gate suivant :** GO VALIDATION CORRECTIF D1-C1 — INTAKE INFORMATION ARCHITECTURE CLEANUP
- **Repo/branche :** mcleland147/sfia-workspace · `delivery/sfia-studio-control-tower-fast-track`
- **HEAD/base :** `32e5271842b9a344a7e292614675c27ea8ed941b`
- **Handoff précédent :** `6516972512156c3cc2aa7abfe2c960ef0799e6e2` / blob `a618eb6fb875c2fc52737499d873e12f5a355eef`
- **BCDI :** BCDI-D1-C1-INTAKE-IA-CLEANUP
- **Baseline :** SFIA v2.6 · **v3 :** V3-MODELED CANDIDATE

## 2. État Git

Dirty attendu · staged vide · HEAD=origin/main · pas de commit projet · pas de deps

```
 M projects/sfia-studio/README.md
 M projects/sfia-studio/app/__tests__/ops1/Ops1SessionScreen.test.tsx
 M projects/sfia-studio/app/__tests__/ops1/conversation-repository.test.ts
 M projects/sfia-studio/app/__tests__/ops1/globalModeBadge.ui.test.tsx
 M projects/sfia-studio/app/app/nouvelle-demande/page.tsx
 M projects/sfia-studio/app/components/shell/UtilityRail.tsx
 M projects/sfia-studio/app/e2e/increment-a.spec.ts
 M projects/sfia-studio/app/e2e/increment-c.spec.ts
 M projects/sfia-studio/app/e2e/ops1-i1-session.spec.ts
 M projects/sfia-studio/app/e2e/ops1-i2-conversation.spec.ts
 M projects/sfia-studio/app/e2e/ops1-i2-live-locked-capture.spec.ts
 M projects/sfia-studio/app/e2e/ops1-i3-action-gate.spec.ts
 M projects/sfia-studio/app/e2e/ops1-i4-allowlist.spec.ts
 M projects/sfia-studio/app/e2e/ops1-i5-execution.spec.ts
 M projects/sfia-studio/app/e2e/ops1-i6-report-and-continuation.spec.ts
 M projects/sfia-studio/app/e2e/p0-smoke.spec.ts
 M projects/sfia-studio/app/features/ops1/Ops1SessionScreen.tsx
 M projects/sfia-studio/app/lib/ops1/actions.ts
 M projects/sfia-studio/app/lib/ops1/conversation/fakeProvider.ts
 M projects/sfia-studio/app/lib/ops1/conversation/openaiProvider.ts
 M projects/sfia-studio/app/lib/ops1/conversation/service.ts
 M projects/sfia-studio/app/lib/ops1/conversation/types.ts
 M projects/sfia-studio/app/lib/ops1/executionOrchestrator.ts
 M projects/sfia-studio/app/lib/ops1/types.ts
 M projects/sfia-studio/app/playwright.config.ts
?? .tmp-sfia-review/
?? projects/sfia-studio/66-control-tower-product-framing.md
?? projects/sfia-studio/67-control-tower-capabilities-and-user-journeys.md
?? projects/sfia-studio/68-control-tower-scope-success-criteria-and-risks.md
?? projects/sfia-studio/69-control-tower-options-and-decision-pack.md
?? projects/sfia-studio/70-control-tower-fast-track-architecture-and-contract.md
?? projects/sfia-studio/71-control-tower-fast-track-backlog-and-delivery.md
?? projects/sfia-studio/72-control-tower-fast-track-decision-pack.md
?? projects/sfia-studio/73-control-tower-fast-track-delivery-report.md
?? projects/sfia-studio/74-sfia-canonical-context-engine-report.md
?? projects/sfia-studio/app/__tests__/d1/
?? projects/sfia-studio/app/__tests__/ops1/controlTowerReinjection.test.ts
?? projects/sfia-studio/app/__tests__/ops1/controlTowerTools.test.ts
?? projects/sfia-studio/app/__tests__/ops1/sfia/
?? projects/sfia-studio/app/app/ops1/
?? projects/sfia-studio/app/app/projects/
?? projects/sfia-studio/app/app/workspace/
?? projects/sfia-studio/app/e2e/control-tower-fast-track.spec.ts
?? projects/sfia-studio/app/e2e/d1-c1-intake-shell.spec.ts
?? projects/sfia-studio/app/e2e/d1-i1-project-foundation.spec.ts
?? projects/sfia-studio/app/e2e/sfia-canonical-context-engine.spec.ts
?? projects/sfia-studio/app/features/d1/
?? projects/sfia-studio/app/lib/d1/
?? projects/sfia-studio/app/lib/ops1/conversation/toolLoop.ts
?? projects/sfia-studio/app/lib/ops1/reportReinjection.ts
?? projects/sfia-studio/app/lib/ops1/sfia
```

## 3. Décisions Morris

- `/nouvelle-demande` : Décrire un nouveau besoin · Créer manuellement
- Retirer Reprendre + Voir mes décisions
- Reprendre → Workspace
- Renommer Création manuelle avancée → Créer manuellement
- Formulaire inchangé · pas GPT/modèle/persistance

## 4. Périmètre réel

UI/labels/IA uniquement. Aucun changement SQL/domain/GPT.

## 5. Tests

vitest d1 11/11 · e2e IA cleanup 6/6 · d1-i1 · p0-smoke verts

## 6. Captures

`.tmp-sfia-review/screenshots-d1-c1-ia-cleanup/`
- nouvelle-demande-1440/1024
- workspace-reprendre-1440
- creer-manuellement-1440

## 7. Diff utile (trackés)

```diff
(fichiers principalement untracked / dirty tree D1)
```

## 8. Contenu complet des fichiers du correctif

### `projects/sfia-studio/app/features/d1/intake/IntakeView.tsx`

```tsx
"use client";

import { useEffect, useId, useMemo, useState } from "react";
import Link from "next/link";
import type { D1Project } from "@/lib/d1/types";
import { logIntakeEvent } from "@/lib/d1/intakeObservability";
import { D1AppShell } from "../D1AppShell";
import { IntakeContextRail } from "./IntakeContextRail";
import shell from "../d1-shell.module.css";
import styles from "./intake.module.css";

const EXAMPLES = [
  "Je veux lancer une application de suivi des contrats.",
  "Je veux travailler sur la gestion des utilisateurs.",
  "Analyse cette idée, mais ne crée rien.",
] as const;

type Phase = "empty" | "draft" | "submitted";

/** projects kept for optional rail context — resume lives on Workspace. */
export function IntakeView({ projects }: { projects: D1Project[] }) {
  const composerId = useId();
  const helpId = useId();
  const statusId = useId();
  const sessionLocalId = useMemo(
    () => `intake-local-${crypto.randomUUID().slice(0, 8)}`,
    [],
  );
  const [intent, setIntent] = useState("");
  const [phase, setPhase] = useState<Phase>("empty");
  const [submittedAt, setSubmittedAt] = useState<string | null>(null);

  useEffect(() => {
    logIntakeEvent("intake_opened", { sessionLocalId });
  }, [sessionLocalId]);

  function onChange(value: string) {
    setIntent(value);
    if (phase === "submitted") return;
    setPhase(value.trim() ? "draft" : "empty");
  }

  function applyExample(text: string) {
    setIntent(text);
    setPhase("draft");
  }

  function focusComposer() {
    const el = document.getElementById(composerId);
    el?.focus();
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = intent.trim();
    if (!trimmed) return;
    const started = performance.now();
    setPhase("submitted");
    setSubmittedAt(new Date().toISOString());
    logIntakeEvent("intake_intent_submitted", {
      sessionLocalId,
      intentLength: trimmed.length,
      status: "ack_c1_no_mutation",
      durationMs: Math.round(performance.now() - started),
    });
  }

  function onModify() {
    setPhase(intent.trim() ? "draft" : "empty");
    setSubmittedAt(null);
    logIntakeEvent("intake_cancelled", {
      sessionLocalId,
      status: "modify",
      intentLength: intent.trim().length,
    });
    focusComposer();
  }

  const rail = (
    <IntakeContextRail
      hasSubmitted={phase === "submitted"}
      recentCount={projects.length}
    />
  );

  return (
    <D1AppShell active="intake" title="Nouvelle demande" rail={rail}>
      <header className={styles.hero}>
        <h1>Nouvelle demande</h1>
        <p className={styles.heroLead}>
          Décrivez ce que vous voulez faire. Studio vous aidera à qualifier et
          structurer — vous gardez la décision finale.
        </p>
        <div className={styles.valueStrip} aria-label="Proposition de valeur">
          <span className={styles.valueChip}>Intent-first</span>
          <span className={styles.valueChip}>Copilote actif</span>
          <span className={styles.valueChip}>Confirmation humaine</span>
        </div>
      </header>

      <div
        className={styles.quickActions}
        role="group"
        aria-label="Actions principales"
      >
        <button
          type="button"
          className={`${styles.quickBtn} ${styles.quickBtnPrimary}`}
          onClick={focusComposer}
          data-testid="quick-describe"
        >
          Décrire un nouveau besoin
        </button>
        <Link
          className={styles.quickBtn}
          href="/projects/new"
          data-testid="quick-manual"
          onClick={() =>
            logIntakeEvent("intake_manual_creation_opened", { sessionLocalId })
          }
        >
          Créer manuellement
        </Link>
      </div>

      {phase === "submitted" ? (
        <section
          className={styles.statusPanel}
          aria-labelledby={statusId}
          aria-live="polite"
          data-testid="intake-feedback"
        >
          <h2 id={statusId}>Demande reçue</h2>
          <p>
            Studio qualifiera cette demande lors du prochain routage assisté.
            Aucune création de projet n’a été effectuée.
          </p>
          <p className={styles.statusMeta} data-testid="intake-feedback-meta">
            Accusé UX local · aucune mutation ·{" "}
            {submittedAt ? `reçu ${submittedAt}` : null}
          </p>
          <div className={styles.statusActions}>
            <button
              type="button"
              className={`${shell.cta} ${shell.ctaSecondary}`}
              onClick={onModify}
              data-testid="intake-modify"
            >
              Modifier la demande
            </button>
            <Link
              className={shell.cta}
              href="/projects/new"
              data-testid="intake-goto-manual"
            >
              Créer manuellement
            </Link>
            <Link
              className={`${shell.cta} ${shell.ctaSecondary}`}
              href="/workspace"
              data-testid="intake-goto-workspace"
            >
              Revenir au Workspace
            </Link>
          </div>
        </section>
      ) : null}

      <form
        className={styles.composer}
        onSubmit={onSubmit}
        data-testid="intake-composer"
        aria-describedby={helpId}
      >
        <label className={styles.composerLabel} htmlFor={composerId}>
          Votre intention
        </label>
        <p className={styles.composerHelp} id={helpId}>
          Écrivez librement. Pour retrouver un projet existant, ouvrez le
          Workspace. Ici, seule une intention nouvelle est recueillie.
        </p>
        <textarea
          id={composerId}
          className={styles.composerArea}
          name="intent"
          value={intent}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Ex. « Je veux lancer un suivi des contrats. »"
          data-testid="intake-intent"
          aria-required
          disabled={phase === "submitted"}
        />
        <div className={styles.examples} aria-label="Exemples d’intentions">
          {EXAMPLES.map((ex) => (
            <button
              key={ex}
              type="button"
              className={styles.exampleBtn}
              onClick={() => applyExample(ex)}
              disabled={phase === "submitted"}
            >
              {ex}
            </button>
          ))}
        </div>
        <div className={styles.composerActions}>
          <button
            type="submit"
            className={shell.cta}
            disabled={!intent.trim() || phase === "submitted"}
            data-testid="intake-submit"
          >
            Envoyer
          </button>
          <span className={shell.hint}>
            {phase === "empty"
              ? "En attente de saisie"
              : phase === "draft"
                ? "Prêt à envoyer"
                : "Envoyé — qualification à venir"}
          </span>
        </div>
      </form>

      <div className={styles.manualBanner}>
        <p>
          Alternative : créer un projet avec un formulaire court. Pour
          retrouver un projet existant, utilisez le Workspace.
        </p>
        <Link
          className={`${shell.cta} ${shell.ctaSecondary}`}
          href="/projects/new"
          data-testid="manual-creation-entry"
          onClick={() =>
            logIntakeEvent("intake_manual_creation_opened", { sessionLocalId })
          }
        >
          Créer manuellement
        </Link>
      </div>
    </D1AppShell>
  );
}
```
### `projects/sfia-studio/app/features/d1/intake/IntakeContextRail.tsx`

```tsx
import styles from "../d1-shell.module.css";

export function IntakeContextRail({
  hasSubmitted,
  recentCount,
}: {
  hasSubmitted: boolean;
  recentCount: number;
}) {
  return (
    <>
      <h2>Accompagnement</h2>
      <div className={styles.railCard}>
        <strong>Studio vous aide à</strong>
        <p>qualifier et structurer — vous gardez la décision finale.</p>
      </div>
      <div className={styles.railCard}>
        <strong>État</strong>
        <p data-testid="intake-rail-status">
          {hasSubmitted
            ? "Demande reçue — qualification à venir"
            : "En attente d’une intention"}
        </p>
      </div>
      <div className={styles.railCard}>
        <strong>Projets existants</strong>
        <p>
          {recentCount > 0
            ? `${recentCount} projet(s) — ouvrez le Workspace pour reprendre`
            : "Aucun projet pour l’instant — ouvrez le Workspace plus tard"}
        </p>
        <p>
          <a href="/workspace">Aller au Workspace</a>
        </p>
      </div>
      <p className={styles.monoNote}>
        Aucune mutation depuis la conversation sur cette page.
      </p>
    </>
  );
}
```
### `projects/sfia-studio/app/features/d1/WorkspaceHomeView.tsx`

```tsx
import Link from "next/link";
import type { D1Project } from "@/lib/d1/types";
import { D1AppShell } from "./D1AppShell";
import { MethodModeBadge, ProjectStateBadge } from "./Badges";
import styles from "./d1-shell.module.css";

export function WorkspaceHomeView({
  projects,
  error,
}: {
  projects: D1Project[];
  error?: string;
}) {
  return (
    <D1AppShell active="workspace" title="Workspace">
      <div className={styles.header}>
        <h1>Workspace</h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          <Link
            className={styles.cta}
            href="/nouvelle-demande"
            data-testid="cta-nouvelle-demande"
          >
            Nouvelle demande
          </Link>
          <Link
            className={`${styles.cta} ${styles.ctaSecondary}`}
            href="/projects/new"
            data-testid="cta-new-project"
          >
            Créer manuellement
          </Link>
        </div>
      </div>
      <p className={styles.hint}>
        Retrouvez, reprenez et poursuivez un travail existant. Pour démarrer une
        nouvelle intention, ouvrez Nouvelle demande.
      </p>
      {error ? (
        <p className={styles.error} role="alert">
          {error}
        </p>
      ) : null}

      <section
        aria-labelledby="workspace-resume-heading"
        data-testid="workspace-resume"
      >
        <h2 id="workspace-resume-heading">Reprendre un travail</h2>
        <p className={styles.hint} data-testid="workspace-resume-hint">
          Projets récents disponibles. Seuls les projets sont listés à ce stade
          — pas de cycle ni d’action simulés.
        </p>
        {projects.length === 0 ? (
          <div
            className={`${styles.card} ${styles.empty}`}
            data-testid="workspace-empty"
          >
            <h3>Aucun projet à reprendre</h3>
            <p className={styles.hint}>
              Décrivez un besoin dans Nouvelle demande, ou créez manuellement.
            </p>
            <Link className={styles.cta} href="/nouvelle-demande">
              Ouvrir Nouvelle demande
            </Link>
          </div>
        ) : (
          <ul className={styles.list} data-testid="project-list">
            {projects.map((p) => (
              <li key={p.projectId}>
                <Link
                  href={`/projects/${p.projectId}`}
                  data-testid={`workspace-resume-${p.projectId}`}
                >
                  <strong>{p.name}</strong>
                  <div className={styles.badges} style={{ marginTop: 8 }}>
                    <ProjectStateBadge state={p.state} />
                    <MethodModeBadge mode={p.methodMode} />
                  </div>
                  <p className={styles.hint}>{p.objective}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </D1AppShell>
  );
}
```
### `projects/sfia-studio/app/features/d1/D1AppShell.tsx`

```tsx
import Link from "next/link";
import styles from "./d1-shell.module.css";

export type D1Active =
  | "workspace"
  | "new"
  | "cockpit"
  | "intake";

interface D1AppShellProps {
  active: D1Active;
  title: string;
  children: React.ReactNode;
  rail?: React.ReactNode;
}

export function D1AppShell({ active, title, children, rail }: D1AppShellProps) {
  return (
    <div className={styles.shell} data-testid="d1-app-shell">
      <nav className={styles.nav} aria-label="Navigation D1">
        <Link
          href="/nouvelle-demande"
          className={styles.navLink}
          aria-label="Nouvelle demande"
          aria-current={active === "intake" ? "page" : undefined}
          title="Nouvelle demande — intake"
          data-testid="d1-nav-intake"
        >
          ND
        </Link>
        <Link
          href="/workspace"
          className={styles.navLink}
          aria-label="Workspace"
          aria-current={active === "workspace" ? "page" : undefined}
          title="Workspace"
          data-testid="d1-nav-workspace"
        >
          WS
        </Link>
        <Link
          href="/projects/new"
          className={styles.navLink}
          aria-label="Créer manuellement"
          aria-current={active === "new" ? "page" : undefined}
          title="Créer manuellement"
          data-testid="d1-nav-manual"
        >
          +
        </Link>
        <Link
          href="/ops1/nouvelle-demande"
          className={styles.navLink}
          aria-label="OPS1 legacy Nouvelle demande"
          title="OPS1 legacy"
          data-testid="d1-nav-ops1"
        >
          OPS
        </Link>
      </nav>
      <main className={styles.main} id="main-content" aria-label={title}>
        {children}
        {rail ? (
          <aside className={styles.railStacked} aria-label="Contexte">
            {rail}
          </aside>
        ) : null}
      </main>
      {rail ? (
        <aside className={styles.rail} aria-label="Rail contextuel">
          {rail}
        </aside>
      ) : (
        <aside className={styles.rail} aria-label="Rail contextuel">
          <h2>Contextual rail</h2>
          <div className={styles.railCard}>
            <strong>D1</strong>
            <p className={styles.placeholder}>
              Contexte minimal — pas d’audit technique ici
            </p>
          </div>
        </aside>
      )}
    </div>
  );
}
```
### `projects/sfia-studio/app/features/d1/NewProjectForm.tsx`

```tsx
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
```
### `projects/sfia-studio/app/__tests__/d1/intake-c1.test.tsx`

```tsx
import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { IntakeView } from "@/features/d1/intake/IntakeView";
import { NewProjectForm } from "@/features/d1/NewProjectForm";
import { WorkspaceHomeView } from "@/features/d1/WorkspaceHomeView";
import type { D1Project } from "@/lib/d1/types";
import { D1_GOVERNANCE_METHOD_MODE } from "@/lib/d1/types";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), refresh: vi.fn() }),
}));

vi.mock("@/lib/d1/actions", () => ({
  actionCreateProject: vi.fn(async () => ({
    ok: true,
    project: {
      projectId: "proj-test",
      name: "X",
      state: "ACTIVE",
      methodMode: D1_GOVERNANCE_METHOD_MODE,
    },
    idempotent: false,
  })),
}));

const sample: D1Project = {
  projectId: "proj-demo",
  workspaceId: "ws-studio-default",
  name: "Campus360",
  objective: "Cadrage comptes",
  initialContextSummary: null,
  methodMode: "V3_CANDIDATE",
  state: "ACTIVE",
  ownerActorId: "actor-mono-i1",
  createdAt: "2026-07-22T10:00:00.000Z",
  updatedAt: "2026-07-22T10:00:00.000Z",
  version: 1,
};

describe("D1-C1 IA cleanup — IntakeView", () => {
  beforeEach(() => {
    vi.spyOn(console, "info").mockImplementation(() => {});
  });
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("shows only describe + create manually actions", () => {
    render(<IntakeView projects={[sample]} />);
    expect(screen.getByTestId("quick-describe").textContent).toMatch(
      /Décrire un nouveau besoin/,
    );
    expect(screen.getByTestId("quick-manual").textContent).toBe(
      "Créer manuellement",
    );
    expect(screen.queryByTestId("quick-resume")).toBeNull();
    expect(screen.queryByTestId("quick-decisions")).toBeNull();
    expect(
      screen.queryByRole("button", { name: "Reprendre un travail" }),
    ).toBeNull();
    expect(
      screen.queryByRole("link", { name: "Reprendre un travail" }),
    ).toBeNull();
    expect(screen.queryByText(/Voir mes décisions/i)).toBeNull();
    expect(screen.queryByText(/Création manuelle avancée/i)).toBeNull();
    expect(screen.queryByTestId("intake-resume")).toBeNull();
    expect(screen.queryByTestId("project-method-mode")).toBeNull();
  });

  it("accepts intent with honest feedback and no mutation claim", async () => {
    const user = userEvent.setup();
    render(<IntakeView projects={[]} />);
    await user.type(screen.getByTestId("intake-intent"), "Nouveau besoin");
    await user.click(screen.getByTestId("intake-submit"));
    expect(screen.getByTestId("intake-feedback").textContent).toMatch(
      /Aucune création/,
    );
  });
});

describe("D1-C1 IA cleanup — Workspace resume", () => {
  afterEach(() => cleanup());

  it("exposes Reprendre un travail with recent projects", () => {
    render(<WorkspaceHomeView projects={[sample]} />);
    expect(screen.getByTestId("workspace-resume")).toBeTruthy();
    expect(
      screen.getByRole("heading", { name: "Reprendre un travail", level: 2 }),
    ).toBeTruthy();
    expect(screen.getByTestId("project-list").textContent).toContain(
      "Campus360",
    );
    expect(screen.getByTestId("cta-new-project").textContent).toBe(
      "Créer manuellement",
    );
  });
});

describe("D1-C1 IA cleanup — Créer manuellement", () => {
  afterEach(() => cleanup());

  it("uses Créer manuellement label without MethodMode select", () => {
    render(<NewProjectForm />);
    expect(
      screen.getByRole("heading", { name: "Créer manuellement", level: 1 }),
    ).toBeTruthy();
    expect(screen.queryByTestId("project-method-mode")).toBeNull();
    expect(screen.queryByText(/Création manuelle avancée/i)).toBeNull();
  });
});
```
### `projects/sfia-studio/app/e2e/d1-c1-intake-shell.spec.ts`

```tsx
import { test, expect } from "@playwright/test";
import path from "node:path";
import fs from "node:fs";

const shotDir = path.join(
  __dirname,
  "../../../../.tmp-sfia-review/screenshots-d1-c1-ia-cleanup",
);

test.beforeAll(() => {
  fs.mkdirSync(shotDir, { recursive: true });
});

test.describe("D1-C1 Intake IA Cleanup", () => {
  test("nouvelle-demande keeps only two primary actions", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    await page.goto("/nouvelle-demande");
    await expect(page.getByTestId("quick-describe")).toBeVisible();
    await expect(page.getByTestId("quick-manual")).toHaveText(
      "Créer manuellement",
    );
    await expect(page.getByTestId("quick-resume")).toHaveCount(0);
    await expect(page.getByTestId("quick-decisions")).toHaveCount(0);
    await expect(
      page.getByRole("button", { name: "Reprendre un travail" }),
    ).toHaveCount(0);
    await expect(
      page.getByRole("link", { name: "Reprendre un travail" }),
    ).toHaveCount(0);
    await expect(page.getByText(/Voir mes décisions/i)).toHaveCount(0);
    await expect(page.getByText(/Création manuelle avancée/i)).toHaveCount(0);
    await expect(page.getByTestId("intake-resume")).toHaveCount(0);
    await page.screenshot({
      path: path.join(shotDir, "nouvelle-demande-1440.png"),
      fullPage: false,
    });
  });

  test("Créer manuellement form unchanged; Workspace hosts Reprendre", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    await page.goto("/nouvelle-demande");
    await page.getByTestId("quick-manual").click();
    await expect(page).toHaveURL(/\/projects\/new/);
    await expect(
      page.getByRole("heading", { name: "Créer manuellement", level: 1 }),
    ).toBeVisible();
    await expect(page.getByTestId("project-name")).toBeVisible();
    await expect(page.getByTestId("project-objective")).toBeVisible();
    await expect(page.getByTestId("project-context")).toBeVisible();
    await expect(page.getByTestId("project-activate")).toBeVisible();
    await expect(page.getByTestId("project-method-mode")).toHaveCount(0);
    await page.screenshot({
      path: path.join(shotDir, "creer-manuellement-1440.png"),
      fullPage: false,
    });

    await page.goto("/workspace");
    await expect(
      page.getByRole("heading", { name: "Reprendre un travail", level: 2 }),
    ).toBeVisible();
    await expect(page.getByTestId("workspace-resume")).toBeVisible();
    await expect(page.getByTestId("cta-new-project")).toHaveText(
      "Créer manuellement",
    );
    await page.screenshot({
      path: path.join(shotDir, "workspace-reprendre-1440.png"),
      fullPage: false,
    });

    // ensure a project exists then open cockpit
    await page.goto("/projects/new");
    await page.getByTestId("project-name").fill("Projet IA Cleanup");
    await page.getByTestId("project-objective").fill("Reprise workspace");
    await page.getByTestId("project-submit").click();
    await expect(page.getByTestId("project-title")).toHaveText(
      "Projet IA Cleanup",
    );

    await page.goto("/workspace");
    await expect(page.getByTestId("project-list")).toContainText(
      "Projet IA Cleanup",
    );
    await page.getByTestId("project-list").locator("a").filter({ hasText: "Projet IA Cleanup" }).first().click();
    await expect(page.getByTestId("project-title")).toHaveText(
      "Projet IA Cleanup",
    );
  });

  for (const width of [1728, 1440, 1280, 1024] as const) {
    test(`no horizontal overflow at ${width}`, async ({ page }) => {
      await page.setViewportSize({ width, height: 1024 });
      await page.goto("/nouvelle-demande");
      const metrics = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        innerWidth: window.innerWidth,
      }));
      expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.innerWidth + 1);
      if (width === 1024) {
        await page.screenshot({
          path: path.join(shotDir, "nouvelle-demande-1024.png"),
          fullPage: false,
        });
      }
    });
  }
});
```
### `projects/sfia-studio/app/e2e/d1-i1-project-foundation.spec.ts`

```tsx
import { test, expect } from "@playwright/test";
import path from "node:path";
import fs from "node:fs";

const shotDir = path.join(
  __dirname,
  "../../../../.tmp-sfia-review/screenshots-d1-i1",
);

test.beforeAll(() => {
  fs.mkdirSync(shotDir, { recursive: true });
});

test.describe("D1-I1 Project Foundation", () => {
  test("workspace → create project → cockpit → reload + audit", async ({
    page,
  }) => {
    await page.goto("/workspace");
    await expect(
      page.getByRole("heading", { name: "Workspace", level: 1 }),
    ).toBeVisible();
    await page.screenshot({
      path: path.join(shotDir, "workspace-home-1440.png"),
      fullPage: false,
    });

    await page.getByTestId("cta-new-project").click();
    await expect(page).toHaveURL(/\/projects\/new/);
    await expect(
      page.getByRole("heading", {
        name: "Créer manuellement",
        level: 1,
      }),
    ).toBeVisible();
    await page.screenshot({
      path: path.join(shotDir, "new-project-1440.png"),
      fullPage: false,
    });

    await page.getByTestId("project-name").fill("Projet D1-I1 E2E");
    await page
      .getByTestId("project-objective")
      .fill("Valider Project-first foundation");
    await page.getByTestId("project-context").fill("Contexte léger I1");
    await expect(page.getByTestId("project-method-mode")).toHaveCount(0);
    await page.getByTestId("project-submit").click();

    await expect(page).toHaveURL(/\/projects\/proj-/);
    await expect(page.getByTestId("project-title")).toHaveText(
      "Projet D1-I1 E2E",
    );
    await expect(page.getByTestId("project-state-badge")).toContainText(
      "ACTIVE",
    );
    await expect(page.getByTestId("audit-timeline")).toContainText(
      "Projet créé",
    );

    await page.screenshot({
      path: path.join(shotDir, "project-cockpit-1440.png"),
      fullPage: false,
    });

    const url = page.url();
    await page.reload();
    await expect(page).toHaveURL(url);
    await expect(page.getByTestId("project-title")).toHaveText(
      "Projet D1-I1 E2E",
    );

    await page.goto("/workspace");
    await expect(page.getByTestId("project-list")).toContainText(
      "Projet D1-I1 E2E",
    );
  });

  test("intake /nouvelle-demande and OPS1 legacy remain accessible", async ({
    page,
  }) => {
    await page.goto("/nouvelle-demande");
    await expect(
      page.getByRole("heading", { name: "Nouvelle demande", level: 1 }),
    ).toBeVisible();
    await expect(page.getByTestId("intake-composer")).toBeVisible();

    await page.goto("/ops1/nouvelle-demande");
    await expect(
      page.getByRole("heading", { name: "Nouvelle demande", level: 1 }),
    ).toBeVisible();
  });

  for (const width of [1728, 1440, 1280, 1024] as const) {
    test(`no horizontal overflow at ${width}`, async ({ page }) => {
      await page.setViewportSize({ width, height: 1024 });
      await page.goto("/workspace");
      const metrics = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        innerWidth: window.innerWidth,
        shellWidth: document
          .querySelector('[data-testid="d1-app-shell"]')
          ?.getBoundingClientRect().width,
      }));
      expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.innerWidth + 1);
      expect(metrics.shellWidth).toBeGreaterThanOrEqual(metrics.innerWidth - 1);
      await page.screenshot({
        path: path.join(shotDir, `workspace-${width}.png`),
        fullPage: false,
      });

      await page.goto("/projects/new");
      await page.getByTestId("project-name").fill(`Overflow ${width}`);
      await page.getByTestId("project-objective").fill("Responsive check");
      await page.getByTestId("project-submit").click();
      await expect(page.getByTestId("project-title")).toBeVisible();
      const cockpitMetrics = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        innerWidth: window.innerWidth,
      }));
      expect(cockpitMetrics.scrollWidth).toBeLessThanOrEqual(
        cockpitMetrics.innerWidth + 1,
      );
      await page.screenshot({
        path: path.join(shotDir, `project-cockpit-${width}.png`),
        fullPage: false,
      });
    });
  }
});
```
### `projects/sfia-studio/sfia-v3-delivery/d1-c1-intake-shell-conversation-entry/09-ia-cleanup.md`

```markdown
# 09 — Intake IA cleanup (correctif)

## Décisions Morris
- Actions `/nouvelle-demande` : **Décrire un nouveau besoin** · **Créer manuellement**
- Retiré : Reprendre un travail · Voir mes décisions
- Reprendre → **Workspace**
- Libellé : « Créer manuellement » (plus « avancée »)
- Formulaire inchangé · pas GPT · pas modèle

## Anti-claims
Pas C2 · pas Decision Center · pas V3-IMPLEMENTED

## Tests
- vitest d1 11/11
- e2e d1-c1 IA cleanup 6/6
- d1-i1 + p0-smoke verts

## Captures
`.tmp-sfia-review/screenshots-d1-c1-ia-cleanup/`
```
### `projects/sfia-studio/sfia-v3-delivery/d1-c1-intake-shell-conversation-entry/01-implemented-scope.md`

```markdown
# 01 — Implemented scope

## Inclus
- `/nouvelle-demande` = intake conversationnel D1-C1 (`IntakeView` + `D1AppShell`)
- Composer, exemples, actions rapides, zone Reprendre (projets D1-I1)
- Feedback honnête C1 (pas de GPT, pas de mutation)
- Créer manuellement `/projects/new` sans MethodMode UI
- MethodMode gouvernance interne `V3_CANDIDATE`
- OPS1 legacy `/ops1/nouvelle-demande`
- Tests unitaires + E2E C1 ; I1 et smoke adaptés

## Exclus
GPT · RequestRoutingProposal · lookup · Cycle/Action resume · GuidedSession · C2–C5 · deps
```
### `projects/sfia-studio/sfia-v3-delivery/d1-c1-intake-shell-conversation-entry/02-route-and-legacy-transition.md`

```markdown
# 02 — Routes et transition legacy

| Route | Rôle |
|-------|------|
| `/nouvelle-demande` | **Intake D1-C1** (principal) |
| `/ops1/nouvelle-demande` | OPS1 session legacy (composants préservés) |
| `/workspace` | Workspace D1 |
| `/projects/new` | Créer manuellement |
| `/projects/[id]` | Cockpit |

UtilityRail Studio « Nouvelle demande » → intake.
Lien « O » + nav D1 « OPS » → legacy OPS1.
E2E OPS1/CT/VS mis à jour vers `/ops1/nouvelle-demande`.
```
### `projects/sfia-studio/sfia-v3-delivery/d1-c1-intake-shell-conversation-entry/03-intake-ux-implementation.md`

```markdown
# 03 — UX intake

Composants : `IntakeView`, `IntakeContextRail`, styles `intake.module.css`.
Hero intent-first · composer · exemples · quick actions · resume cards · status C1.
Rail : accompagnement + états « à venir (non exécuté) ».
```
### `projects/sfia-studio/sfia-v3-delivery/d1-c1-intake-shell-conversation-entry/04-manual-creation-strategy.md`

```markdown
# 04 — Création manuelle

`NewProjectForm` retitré « Créer manuellement ».
MethodMode select **retiré** ; `D1_GOVERNANCE_METHOD_MODE = V3_CANDIDATE` appliqué en interne.
Cockpit : MethodMode lecture seule ; journal technique derrière toggle.
```
### `projects/sfia-studio/sfia-v3-delivery/d1-c1-intake-shell-conversation-entry/README.md`

```markdown
# D1-C1 — Intake Shell and Conversation Entry

| Champ | Valeur |
|-------|--------|
| BCDI | BCDI-D1-C1-INTAKE-SHELL-CONVERSATION-ENTRY |
| Gate consommé | GO IMPLEMENTATION D1-C1 — INTAKE SHELL AND CONVERSATION ENTRY |
| Gate suivant | GO VALIDATION D1-C1 — INTAKE SHELL AND CONVERSATION ENTRY |
| Statut | D1-C1 IMPLEMENTED CANDIDATE |
| Baseline | SFIA v2.6 |
| Statut v3 | V3-MODELED CANDIDATE |

## Index
01 scope · 02 routes · 03 UX · 04 manuel · 05 Figma · 06 tests · 07 reserves · 08 decision pack
```

## 9. Réserves / C2 / anti-claims

- Décisions toujours hors UI
- Resume Cycle/Action non simulés
- C2 = qualification/routage
- Anti-claims : pas C2 · pas GPT · pas V3-IMPLEMENTED · pas commit projet

## 10. État Git final

```
HEAD=32e5271842b9a344a7e292614675c27ea8ed941b
branch=delivery/sfia-studio-control-tower-fast-track
staged=0
```

## 11. Verdict

**VERDICT :** SFIA v3.0 D1-C1 INTAKE INFORMATION ARCHITECTURE CLEANUP IMPLEMENTED — VALIDATION REQUIRED
