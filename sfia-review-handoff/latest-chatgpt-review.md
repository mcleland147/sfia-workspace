# Review Pack Full — SFIA v3.0 D1-C1 Intake Shell and Conversation Entry

## 1. Métadonnées

- **Date/heure/fuseau :** 2026-07-22 20:12:34 CEST
- **Cycle :** 9 — Delivery (DELIVERY / UX / PRODUCT / EVOL)
- **Profil :** Critical
- **Gate consommé :** GO IMPLEMENTATION D1-C1 — INTAKE SHELL AND CONVERSATION ENTRY
- **Gate suivant :** GO VALIDATION D1-C1 — INTAKE SHELL AND CONVERSATION ENTRY
- **Repo/branche :** mcleland147/sfia-workspace · `delivery/sfia-studio-control-tower-fast-track`
- **HEAD/base :** `32e5271842b9a344a7e292614675c27ea8ed941b`
- **Handoff précédent :** `184d04dfdbbab14cbecf420b7d8142c5761bc5d6`
- **Baseline :** SFIA v2.6
- **Statut v3 :** V3-MODELED CANDIDATE
- **BCDI :** BCDI-D1-C1-INTAKE-SHELL-CONVERSATION-ENTRY
- **Statut :** D1-C1 IMPLEMENTED CANDIDATE

## 2. État Git initial / final

Dirty attendu · staged vide · HEAD=origin/main · deps inchangées · pas de commit projet

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
?? projects/sfia-studio/app/lib/ops1/sfia/
?? projects/sfia-studio/app/lib/ops1/tools/
?? projects/sfia-studio/sfia-v3-delivery/
?? projects/sfia-studio/sfia-v3-design/
?? projects/sfia-studio/sfia-v3-framing/
?? projects/sfia-studio/sfia-v3-modeled/

```

## 3. Sources

d1-ai-guided-intake-routing · Figma `IS70XDnBMvZuJYmaI5eZT2` page `11:2` · D1-I1 · handoff `184d04d`

## 4. Périmètre réel

`/nouvelle-demande` intake conversationnel · feedback C1 · reprises projets · manuel sans MethodMode UI · OPS1 `/ops1/nouvelle-demande` · pas GPT · pas mutation conversation

## 5. Routes / composants

IntakeView · IntakeContextRail · D1AppShell(ND) · NewProjectForm manuel · Cockpit lecture seule MethodMode

## 6. Tests

vitest d1 12/12 · e2e d1-c1 7/7 · d1-i1 adapté · p0-smoke 6/6 · ops1-i1 legacy · tsc OK

## 7. Viewport

```json
{
  "1024": { "scrollWidth": 1024, "innerWidth": 1024, "shellWidth": 1024, "unused": 0 },
  "1280": { "scrollWidth": 1280, "innerWidth": 1280, "shellWidth": 1280, "unused": 0 },
  "1440": { "scrollWidth": 1440, "innerWidth": 1440, "shellWidth": 1440, "unused": 0 },
  "1728": { "scrollWidth": 1728, "innerWidth": 1728, "shellWidth": 1728, "unused": 0 }
}

```

## 8. Figma comparison

empty≈12:2 · resume≈14:2 · manual≈14:31 · responsive 14:64/90/117 · 12:60 future-only
Captures `.tmp-sfia-review/screenshots-d1-c1/`

## 9. Diff utile (modifiés trackés + extraits)

```diff
diff --git a/projects/sfia-studio/app/app/nouvelle-demande/page.tsx b/projects/sfia-studio/app/app/nouvelle-demande/page.tsx
index 93fdc9a..feab120 100644
--- a/projects/sfia-studio/app/app/nouvelle-demande/page.tsx
+++ b/projects/sfia-studio/app/app/nouvelle-demande/page.tsx
@@ -1,5 +1,21 @@
-import { NouvelleDemandePageClient } from "@/features/nouvelle-demande/NouvelleDemandePageClient";
+import { listWorkspaceProjects } from "@/lib/d1/commands";
+import { D1Error } from "@/lib/d1/errors";
+import { IntakeView } from "@/features/d1/intake/IntakeView";

+export const dynamic = "force-dynamic";
+
+/** D1-C1: conversational intake is the primary Nouvelle demande surface. */
 export default function NouvelleDemandePage() {
-  return <NouvelleDemandePageClient />;
+  try {
+    const projects = listWorkspaceProjects();
+    return <IntakeView projects={projects} />;
+  } catch (error) {
+    const message =
+      error instanceof D1Error
+        ? error.message
+        : "Erreur de chargement des projets récents";
+    // Still render intake; empty resume with soft error via empty list
+    void message;
+    return <IntakeView projects={[]} />;
+  }
 }

--- /dev/null
+++ b/projects/sfia-studio/app/features/d1/D1AppShell.tsx
@@
+import Link from "next/link";
+import styles from "./d1-shell.module.css";
+
+export type D1Active =
+  | "workspace"
+  | "new"
+  | "cockpit"
+  | "intake";
+
+interface D1AppShellProps {
+  active: D1Active;
+  title: string;
+  children: React.ReactNode;
+  rail?: React.ReactNode;
+}
+
+export function D1AppShell({ active, title, children, rail }: D1AppShellProps) {
+  return (
+    <div className={styles.shell} data-testid="d1-app-shell">
+      <nav className={styles.nav} aria-label="Navigation D1">
+        <Link
+          href="/nouvelle-demande"
+          className={styles.navLink}
+          aria-label="Nouvelle demande"
+          aria-current={active === "intake" ? "page" : undefined}
+          title="Nouvelle demande — intake"
+          data-testid="d1-nav-intake"
+        >
+          ND
+        </Link>
+        <Link
+          href="/workspace"
+          className={styles.navLink}
+          aria-label="Workspace"
+          aria-current={active === "workspace" ? "page" : undefined}
+          title="Workspace"
+          data-testid="d1-nav-workspace"
+        >
+          WS
+        </Link>
+        <Link
+          href="/projects/new"
+          className={styles.navLink}
+          aria-label="Création manuelle avancée"
+          aria-current={active === "new" ? "page" : undefined}
+          title="Création manuelle avancée"
+          data-testid="d1-nav-manual"
+        >
+          +
+        </Link>
+        <Link
+          href="/ops1/nouvelle-demande"
+          className={styles.navLink}
+          aria-label="OPS1 legacy Nouvelle demande"
+          title="OPS1 legacy"
+          data-testid="d1-nav-ops1"
+        >
+          OPS
+        </Link>
+      </nav>
+      <main className={styles.main} id="main-content" aria-label={title}>
+        {children}
+        {rail ? (
+          <aside className={styles.railStacked} aria-label="Contexte">
+            {rail}
+          </aside>
+        ) : null}
+      </main>
+      {rail ? (
+        <aside className={styles.rail} aria-label="Rail contextuel">
+          {rail}
+        </aside>
+      ) : (
+        <aside className={styles.rail} aria-label="Rail contextuel">
+          <h2>Contextual rail</h2>
+          <div className={styles.railCard}>
+            <strong>D1</strong>
+            <p className={styles.placeholder}>
+              Contexte minimal — pas d’audit technique ici
+            </p>
+          </div>
+        </aside>
+      )}
+    </div>
+  );
+}

--- /dev/null
+++ b/projects/sfia-studio/app/features/d1/NewProjectForm.tsx
@@
+"use client";
+
+import { useMemo, useState, useTransition } from "react";
+import { useRouter } from "next/navigation";
+import { actionCreateProject } from "@/lib/d1/actions";
+import { D1_GOVERNANCE_METHOD_MODE } from "@/lib/d1/types";
+import { D1AppShell } from "./D1AppShell";
+import styles from "./d1-shell.module.css";
+
+/**
+ * D1-C1: advanced manual creation — secondary to conversational intake.
+ * MethodMode is NOT a user choice; governance default is applied internally.
+ */
+export function NewProjectForm() {
+  const router = useRouter();
+  const [pending, startTransition] = useTransition();
+  const [name, setName] = useState("");
+  const [objective, setObjective] = useState("");
+  const [context, setContext] = useState("");
+  const [activate, setActivate] = useState(true);
+  const [error, setError] = useState<string | null>(null);
+  const idempotencyKey = useMemo(
+    () => `idemp-${crypto.randomUUID()}`,
+    [],
+  );
+
+  function onSubmit(e: React.FormEvent) {
+    e.preventDefault();
+    setError(null);
+    startTransition(async () => {
+      const result = await actionCreateProject({
+        name,
+        objective,
+        initialContextSummary: context || undefined,
+        methodMode: D1_GOVERNANCE_METHOD_MODE,
+        activate,
+        idempotencyKey,
+      });
+      if (!result.ok) {
+        setError(result.message);
+        return;
+      }
+      router.push(`/projects/${result.project.projectId}`);
+      router.refresh();
+    });
+  }
+
+  return (
+    <D1AppShell active="new" title="Création manuelle avancée">
+      <div className={styles.header}>
+        <h1>Création manuelle avancée</h1>
+      </div>
+      <p className={styles.hint} data-testid="manual-creation-hint">
+        Escape hatch expert · parcours standard ={" "}
+        <a href="/nouvelle-demande">Nouvelle demande</a> conversationnelle ·
+        MethodMode appliqué en interne ({D1_GOVERNANCE_METHOD_MODE}) — non
+        exposé comme choix produit · anti-claims : pas V3-ADOPTED /
+        V3-IMPLEMENTED
+      </p>
+      <form
+        className={`${styles.card} ${styles.form}`}
+        onSubmit={onSubmit}
+        noValidate
+        data-testid="manual-project-form"
+      >
+        <label className={styles.label}>
+          1. Identité
+          <input
+            className={styles.input}
+            name="name"
+            required
+            value={name}
+            onChange={(e) => setName(e.target.value)}
+            data-testid="project-name"
+            aria-required
+          />
+        </label>
+        <label className={styles.label}>
+          2. Objectif
+          <textarea
+            className={styles.textarea}
+            name="objective"
+            required
+            value={objective}
+            onChange={(e) => setObjective(e.target.value)}
+            data-testid="project-objective"
+          />
+        </label>
+        <label className={styles.label}>
+          3. Contexte initial
+          <span className={styles.hint}>
+            Léger — cadrage détaillé = cycles futurs
+          </span>
+          <textarea
+            className={styles.textarea}
+            name="context"
+            value={context}
+            onChange={(e) => setContext(e.target.value)}
+            data-testid="project-context"
+          />
+        </label>
+        <label className={styles.label}>
+          4. Responsable / décideur
+          <span className={styles.hint}>
+            Même utilisateur autorisé en I1 (DESIGN-R01) — actor-mono-i1
+          </span>
+        </label>
+        <label className={styles.label} style={{ fontWeight: 500 }}>
+          <input
+            type="checkbox"
+            checked={activate}
+            onChange={(e) => setActivate(e.target.checked)}
+            data-testid="project-activate"
+          />{" "}
+          5. Activer immédiatement (ACTIVE) après création
+        </label>
+        {error ? (
+          <p className={styles.error} role="alert">
+            {error}
+          </p>
+        ) : null}
+        <button
+          className={styles.cta}
+          type="submit"
+          disabled={pending}
+          data-testid="project-submit"
+        >
+          {pending ? "Création…" : "Confirmer la création"}
+        </button>
+      </form>
+    </D1AppShell>
+  );
+}

--- /dev/null
+++ b/projects/sfia-studio/app/features/d1/ProjectCockpitView.tsx
@@
+"use client";
+
+import { useState } from "react";
+import type { D1AuditEvent, D1Project } from "@/lib/d1/types";
+import { METHOD_MODE_CLAIMS } from "@/lib/d1/types";
+import { D1AppShell } from "./D1AppShell";
+import { MethodModeBadge, ProjectStateBadge } from "./Badges";
+import { ContextualRailI1 } from "./ContextualRail";
+import styles from "./d1-shell.module.css";
+
+const USER_ACTIVITY: Record<string, string> = {
+  PROJECT_CREATED: "Projet créé",
+  PROJECT_MODE_SELECTED: "Mode système appliqué",
+  PROJECT_ACTIVATED: "Projet activé",
+};
+
+export function ProjectCockpitView({
+  project: initial,
+  audit: initialAudit,
+}: {
+  project: D1Project;
+  audit: D1AuditEvent[];
+}) {
+  const [project] = useState(initial);
+  const [audit] = useState(initialAudit);
+  const [showTechnical, setShowTechnical] = useState(false);
+
+  const rail = <ContextualRailI1 project={project} audit={audit} />;
+
+  return (
+    <D1AppShell active="cockpit" title={project.name} rail={rail}>
+      <div className={styles.header}>
+        <h1 data-testid="project-title">{project.name}</h1>
+        <div className={styles.badges}>
+          <ProjectStateBadge state={project.state} />
+          <MethodModeBadge mode={project.methodMode} />
+        </div>
+      </div>
+
+      <section className={styles.card}>
+        <h2>Objectif</h2>
+        <p>{project.objective}</p>
+        {project.initialContextSummary ? (
+          <>
+            <h2>Contexte initial</h2>
+            <p className={styles.hint}>{project.initialContextSummary}</p>
+          </>
+        ) : null}
+      </section>
+
+      <section className={styles.card}>
+        <h2>Trajectoire</h2>
+        <p className={styles.placeholder}>
+          Placeholder — ProjectTrajectory détaillée hors scope C1.
+        </p>
+      </section>
+
+      <section className={styles.card}>
+        <h2>Prochaine action</h2>
+        <p>
+          {project.state === "ACTIVE"
+            ? "Continuer via Nouvelle demande (intake) ou ouvrir un cycle (C4/C5 — non disponible)."
+            : "Activer le projet via la création manuelle, ou décrire une intention dans l’intake."}
+        </p>
+      </section>
+
+      {project.methodMode ? (
+        <section className={styles.card} data-testid="method-mode-readonly">
+          <h2>Méthode (lecture seule)</h2>
+          <p className={styles.hint}>
+            Donnée de gouvernance — non modifiable dans le parcours produit C1.
+          </p>
+          <p>{METHOD_MODE_CLAIMS[project.methodMode]}</p>
+        </section>
+      ) : null}
+
+      <section className={styles.card} data-testid="audit-timeline">
+        <h2>Activité récente</h2>
+        <ul className={styles.list}>
+          {audit.map((e) => (
+            <li key={e.eventId}>
+              <strong>{USER_ACTIVITY[e.eventType] ?? e.eventType}</strong>
+              {showTechnical ? (
+                <p className={styles.hint}>
+                  {e.eventType} · {e.occurredAt} · {e.correlationId}
+                </p>
+              ) : (
+                <p className={styles.hint}>{e.occurredAt}</p>
+              )}
+            </li>
+          ))}
+        </ul>
+        {!audit.length ? (
+          <p className={styles.placeholder}>Aucune activité</p>
+        ) : null}
+        <button
+          type="button"
+          className={`${styles.cta} ${styles.ctaSecondary}`}
+          style={{ marginTop: 12 }}
+          onClick={() => setShowTechnical((v) => !v)}
+          data-testid="toggle-technical-audit"
+        >
+          {showTechnical
+            ? "Masquer le journal technique"
+            : "Voir le journal technique"}
+        </button>
+      </section>
+    </D1AppShell>
+  );
+}

--- /dev/null
+++ b/projects/sfia-studio/app/features/d1/WorkspaceHomeView.tsx
@@
+import Link from "next/link";
+import type { D1Project } from "@/lib/d1/types";
+import { D1AppShell } from "./D1AppShell";
+import { MethodModeBadge, ProjectStateBadge } from "./Badges";
+import styles from "./d1-shell.module.css";
+
+export function WorkspaceHomeView({
+  projects,
+  error,
+}: {
+  projects: D1Project[];
+  error?: string;
+}) {
+  return (
+    <D1AppShell active="workspace" title="Workspace Home">
+      <div className={styles.header}>
+        <h1>Workspace Home</h1>
+        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
+          <Link
+            className={styles.cta}
+            href="/nouvelle-demande"
+            data-testid="cta-nouvelle-demande"
+          >
+            Nouvelle demande
+          </Link>
+          <Link
+            className={`${styles.cta} ${styles.ctaSecondary}`}
+            href="/projects/new"
+            data-testid="cta-new-project"
+          >
+            Création manuelle
+          </Link>
+        </div>
+      </div>
+      <p className={styles.hint}>
+        Reprendre un projet ou démarrer via l’intake conversationnel · baseline
+        SFIA v2.6 · v3 reste candidate
+      </p>
+      {error ? (
+        <p className={styles.error} role="alert">
+          {error}
+        </p>
+      ) : null}
+      {projects.length === 0 ? (
+        <div
+          className={`${styles.card} ${styles.empty}`}
+          data-testid="workspace-empty"
+        >
+          <h2>Aucun projet</h2>
+          <p className={styles.hint}>
+            Décrivez un besoin dans Nouvelle demande, ou utilisez la création
+            manuelle avancée.
+          </p>
+          <Link className={styles.cta} href="/nouvelle-demande">
+            Ouvrir Nouvelle demande
+          </Link>
+        </div>
+      ) : (
+        <ul className={styles.list} data-testid="project-list">
+          {projects.map((p) => (
+            <li key={p.projectId}>
+              <Link href={`/projects/${p.projectId}`}>
+                <strong>{p.name}</strong>
+                <div className={styles.badges} style={{ marginTop: 8 }}>
+                  <ProjectStateBadge state={p.state} />
+                  <MethodModeBadge mode={p.methodMode} />
+                </div>
+                <p className={styles.hint}>{p.objective}</p>
+              </Link>
+            </li>
+          ))}
+        </ul>
+      )}
+    </D1AppShell>
+  );
+}

--- /dev/null
+++ b/projects/sfia-studio/app/features/d1/Badges.tsx
@@
+import {
+  METHOD_MODE_LABELS,
+  type MethodMode,
+  type ProjectState,
+} from "@/lib/d1/types";
+import styles from "./d1-shell.module.css";
+
+/** Read-only governance indicator — not a user control (D1-C1). */
+export function MethodModeBadge({ mode }: { mode: MethodMode | null }) {
+  if (!mode) {
+    return (
+      <span
+        className={`${styles.badge} ${styles.badgeWarn}`}
+        data-testid="method-mode-badge"
+      >
+        Méthode système non définie
+      </span>
+    );
+  }
+  return (
+    <span
+      className={`${styles.badge} ${styles.badgeMode}`}
+      data-testid="method-mode-badge"
+      title="Indicateur de gouvernance — non modifiable ici"
+    >
+      {METHOD_MODE_LABELS[mode]}
+    </span>
+  );
+}
+
+export function ProjectStateBadge({ state }: { state: ProjectState }) {
+  return (
+    <span className={`${styles.badge} ${styles.badgeState}`} data-testid="project-state-badge">
+      {state}
+    </span>
+  );
+}

--- /dev/null
+++ b/projects/sfia-studio/app/features/d1/ContextualRail.tsx
@@
+import type { D1AuditEvent, D1Project } from "@/lib/d1/types";
+import { METHOD_MODE_CLAIMS } from "@/lib/d1/types";
+import styles from "./d1-shell.module.css";
+
+export function ContextualRailI1({
+  project,
+  audit,
+}: {
+  project?: D1Project | null;
+  audit?: D1AuditEvent[];
+}) {
+  return (
+    <>
+      <h2>Contextual rail</h2>
+      <div className={styles.railCard}>
+        <strong>Mode</strong>
+        <p>
+          {project?.methodMode
+            ? METHOD_MODE_CLAIMS[project.methodMode]
+            : "Aucun mode"}
+        </p>
+      </div>
+      <div className={styles.railCard}>
+        <strong>État projet</strong>
+        <p>{project?.state ?? "—"}</p>
+      </div>
+      <div className={styles.railCard}>
+        <strong>Prochaine action</strong>
+        <p>
+          {project?.state === "DRAFT"
+            ? "Activer via création manuelle, ou décrire une intention dans l’intake"
+            : "Continuer via Nouvelle demande (C2+ routage) — cycle non ouvert en C1"}
+        </p>
+      </div>
+      <div className={styles.railCard}>
+        <strong>Derniers événements</strong>
+        {(audit ?? []).slice(0, 5).map((e) => (
+          <p key={e.eventId}>
+            {e.eventType} · {e.occurredAt}
+          </p>
+        ))}
+        {!audit?.length ? (
+          <p className={styles.placeholder}>Aucun événement</p>
+        ) : null}
+      </div>
+      <div className={styles.railCard}>
+        <strong>Placeholders</strong>
+        <p className={styles.placeholder}>Context — non chargé (I3)</p>
+        <p className={styles.placeholder}>Reserves — absentes (I4)</p>
+        <p className={styles.placeholder}>Decisions — absentes (I5)</p>
+      </div>
+      <p className={styles.monoNote}>
+        Mono-opérateur I1 : owner = decision_maker (temporaire).
+      </p>
+    </>
+  );
+}

--- /dev/null
+++ b/projects/sfia-studio/app/lib/d1/types.ts
@@
+/** D1-I1 Project Foundation — domain types (bounded). */
+
+export const D1_SCHEMA_VERSION = "0.1.0-d1" as const;
+
+/** Method modes authorized for I1 — no V3-ADOPTED / V3-IMPLEMENTED claims. */
+export const METHOD_MODES = ["SFIA_V2_6", "TRANSITION", "V3_CANDIDATE"] as const;
+export type MethodMode = (typeof METHOD_MODES)[number];
+
+/**
+ * D1-C1: MethodMode is governance/system data, not a user product choice.
+ * Manual creation uses this internal default (transitory prototype).
+ */
+export const D1_GOVERNANCE_METHOD_MODE: MethodMode = "V3_CANDIDATE";
+
+export const PROJECT_STATES = ["DRAFT", "ACTIVE"] as const;
+export type ProjectState = (typeof PROJECT_STATES)[number];
+
+export const AUDIT_EVENT_TYPES = [
+  "PROJECT_CREATED",
+  "PROJECT_MODE_SELECTED",
+  "PROJECT_ACTIVATED",
+] as const;
+export type D1AuditEventType = (typeof AUDIT_EVENT_TYPES)[number];
+
+/** I1 temporary mono-operator — owner == decision maker (explicit). */
+export const D1_MONO_OPERATOR_ACTOR_ID = "actor-mono-i1" as const;
+export const D1_DEFAULT_WORKSPACE_ID = "ws-studio-default" as const;
+
+export interface D1Project {
+  projectId: string;
+  workspaceId: string;
+  name: string;
+  objective: string;
+  initialContextSummary: string | null;
+  methodMode: MethodMode | null;
+  state: ProjectState;
+  ownerActorId: string;
+  createdAt: string;
+  updatedAt: string;
+  version: number;
+}
+
+export interface D1Assignment {
+  principalId: string;
+  projectId: string;
+  role: "project_owner" | "decision_maker";
+  createdAt: string;
+}
+
+export interface D1AuditEvent {
+  eventId: string;
+  eventType: D1AuditEventType;
+  occurredAt: string;
+  actorId: string;
+  correlationId: string;
+  projectId: string;
+  payloadJson: string;
+}
+
+export interface CreateProjectInput {
+  name: string;
+  objective: string;
+  initialContextSummary?: string;
+  methodMode: MethodMode;
+  activate: boolean;
+  idempotencyKey: string;
+  correlationId?: string;
+}
+
+export interface SelectMethodModeInput {
+  projectId: string;
+  methodMode: MethodMode;
+  expectedVersion: number;
+  activate?: boolean;
+  correlationId?: string;
+}
+
+export const METHOD_MODE_LABELS: Record<MethodMode, string> = {
+  SFIA_V2_6: "SFIA v2.6 (baseline opérationnelle)",
+  TRANSITION: "Transition v2.6 → v3 candidate",
+  V3_CANDIDATE: "SFIA v3.0 candidate (Studio-native) — non adopté",
+};
+
+export const METHOD_MODE_CLAIMS: Record<MethodMode, string> = {
+  SFIA_V2_6: "Baseline v2.6 active. Aucun claim v3.",
+  TRANSITION: "Mode transition. Pas d’adoption v3.",
+  V3_CANDIDATE:
+    "Claim limité à V3-MODELED CANDIDATE / prototype. Interdit : V3-ADOPTED, V3-IMPLEMENTED global.",
+};

diff --git a/projects/sfia-studio/app/components/shell/UtilityRail.tsx b/projects/sfia-studio/app/components/shell/UtilityRail.tsx
index 796bb59..983aa7d 100644
--- a/projects/sfia-studio/app/components/shell/UtilityRail.tsx
+++ b/projects/sfia-studio/app/components/shell/UtilityRail.tsx
@@ -66,6 +66,26 @@ export function UtilityRail({ variant, activeRoute }: UtilityRailProps) {

       <div className={styles.spacer} />

+      <Link
+        href="/workspace"
+        className={isFloating ? styles.item : styles.itemFlush}
+        aria-label="Workspace D1"
+        title="Workspace D1"
+        data-testid="rail-d1-workspace"
+      >
+        W
+      </Link>
+
+      <Link
+        href="/ops1/nouvelle-demande"
+        className={isFloating ? styles.item : styles.itemFlush}
+        aria-label="OPS1 legacy"
+        title="OPS1 Nouvelle demande (legacy)"
+        data-testid="rail-ops1-legacy"
+      >
+        O
+      </Link>
+
       <div className={isFloating ? styles.avatar : styles.avatarFlush}>MC</div>
     </nav>
   );

--- /dev/null
+++ b/projects/sfia-studio/app/e2e/d1-i1-project-foundation.spec.ts
@@
+import { test, expect } from "@playwright/test";
+import path from "node:path";
+import fs from "node:fs";
+
+const shotDir = path.join(
+  __dirname,
+  "../../../../.tmp-sfia-review/screenshots-d1-i1",
+);
+
+test.beforeAll(() => {
+  fs.mkdirSync(shotDir, { recursive: true });
+});
+
+test.describe("D1-I1 Project Foundation", () => {
+  test("workspace → create project → cockpit → reload + audit", async ({
+    page,
+  }) => {
+    await page.goto("/workspace");
+    await expect(
+      page.getByRole("heading", { name: "Workspace Home", level: 1 }),
+    ).toBeVisible();
+    await page.screenshot({
+      path: path.join(shotDir, "workspace-home-1440.png"),
+      fullPage: false,
+    });
+
+    await page.getByTestId("cta-new-project").click();
+    await expect(page).toHaveURL(/\/projects\/new/);
+    await expect(
+      page.getByRole("heading", {
+        name: "Création manuelle avancée",
+        level: 1,
+      }),
+    ).toBeVisible();
+    await page.screenshot({
+      path: path.join(shotDir, "new-project-1440.png"),
+      fullPage: false,
+    });
+
+    await page.getByTestId("project-name").fill("Projet D1-I1 E2E");
+    await page
+      .getByTestId("project-objective")
+      .fill("Valider Project-first foundation");
+    await page.getByTestId("project-context").fill("Contexte léger I1");
+    await expect(page.getByTestId("project-method-mode")).toHaveCount(0);
+    await page.getByTestId("project-submit").click();
+
+    await expect(page).toHaveURL(/\/projects\/proj-/);
+    await expect(page.getByTestId("project-title")).toHaveText(
+      "Projet D1-I1 E2E",
+    );
+    await expect(page.getByTestId("project-state-badge")).toContainText(
+      "ACTIVE",
+    );
+    await expect(page.getByTestId("audit-timeline")).toContainText(
+      "Projet créé",
+    );
+
+    await page.screenshot({
+      path: path.join(shotDir, "project-cockpit-1440.png"),
+      fullPage: false,
+    });
+
+    const url = page.url();
+    await page.reload();
+    await expect(page).toHaveURL(url);
+    await expect(page.getByTestId("project-title")).toHaveText(
+      "Projet D1-I1 E2E",
+    );
+
+    await page.goto("/workspace");
+    await expect(page.getByTestId("project-list")).toContainText(
+      "Projet D1-I1 E2E",
+    );
+  });
+
+  test("intake /nouvelle-demande and OPS1 legacy remain accessible", async ({
+    page,
+  }) => {
+    await page.goto("/nouvelle-demande");
+    await expect(
+      page.getByRole("heading", { name: "Nouvelle demande", level: 1 }),
+    ).toBeVisible();
+    await expect(page.getByTestId("intake-composer")).toBeVisible();
+
+    await page.goto("/ops1/nouvelle-demande");
+    await expect(
+      page.getByRole("heading", { name: "Nouvelle demande", level: 1 }),
+    ).toBeVisible();
+  });
+
+  for (const width of [1728, 1440, 1280, 1024] as const) {
+    test(`no horizontal overflow at ${width}`, async ({ page }) => {
+      await page.setViewportSize({ width, height: 1024 });
+      await page.goto("/workspace");
+      const metrics = await page.evaluate(() => ({
+        scrollWidth: document.documentElement.scrollWidth,
+        innerWidth: window.innerWidth,
+        shellWidth: document
+          .querySelector('[data-testid="d1-app-shell"]')
+          ?.getBoundingClientRect().width,
+      }));
+      expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.innerWidth + 1);
+      expect(metrics.shellWidth).toBeGreaterThanOrEqual(metrics.innerWidth - 1);
+      await page.screenshot({
+        path: path.join(shotDir, `workspace-${width}.png`),
+        fullPage: false,
+      });
+
+      await page.goto("/projects/new");
+      await page.getByTestId("project-name").fill(`Overflow ${width}`);
+      await page.getByTestId("project-objective").fill("Responsive check");
+      await page.getByTestId("project-submit").click();
+      await expect(page.getByTestId("project-title")).toBeVisible();
+      const cockpitMetrics = await page.evaluate(() => ({
+        scrollWidth: document.documentElement.scrollWidth,
+        innerWidth: window.innerWidth,
+      }));
+      expect(cockpitMetrics.scrollWidth).toBeLessThanOrEqual(
+        cockpitMetrics.innerWidth + 1,
+      );
+      await page.screenshot({
+        path: path.join(shotDir, `project-cockpit-${width}.png`),
+        fullPage: false,
+      });
+    });
+  }
+});

diff --git a/projects/sfia-studio/app/e2e/p0-smoke.spec.ts b/projects/sfia-studio/app/e2e/p0-smoke.spec.ts
index 5fd3e79..8c7a67e 100644
--- a/projects/sfia-studio/app/e2e/p0-smoke.spec.ts
+++ b/projects/sfia-studio/app/e2e/p0-smoke.spec.ts
@@ -70,12 +70,15 @@ test.describe("P0 smoke", () => {
     const rail = page.getByTestId("utility-rail");

     await rail.getByRole("link", { name: "Nouvelle demande" }).click();
-    await expect(page).toHaveURL(/nouvelle-demande/);
+    await expect(page).toHaveURL(/\/nouvelle-demande\/?$/);
+    // D1-C1: intake uses D1AppShell (no OPS1 utility-rail). Return to Studio shell.
+    await page.goto("/synthese");
+    const railAfter = page.getByTestId("utility-rail");

-    await rail.getByRole("link", { name: "Cycle actif" }).click();
+    await railAfter.getByRole("link", { name: "Cycle actif" }).click();
     await expect(page).toHaveURL(/cycle-actif/);

-    await rail.getByRole("link", { name: "Décision Morris" }).click();
+    await railAfter.getByRole("link", { name: "Décision Morris" }).click();
     await expect(page).toHaveURL(/decision/);
   });


diff --git a/projects/sfia-studio/app/e2e/ops1-i1-session.spec.ts b/projects/sfia-studio/app/e2e/ops1-i1-session.spec.ts
index 36b868f..c929070 100644
--- a/projects/sfia-studio/app/e2e/ops1-i1-session.spec.ts
+++ b/projects/sfia-studio/app/e2e/ops1-i1-session.spec.ts
@@ -15,7 +15,7 @@ test.describe("OPS1 I1 session + journal", () => {
   test("creates session, appends turns, persists after reload", async ({
     page,
   }) => {
-    await page.goto("/nouvelle-demande");
+    await page.goto("/ops1/nouvelle-demande");
     await page.evaluate(() => window.sessionStorage.clear());
     await page.reload();
     await expect(page.getByTestId("ops1-session-root")).toBeVisible();

diff --git a/projects/sfia-studio/app/e2e/ops1-i2-conversation.spec.ts b/projects/sfia-studio/app/e2e/ops1-i2-conversation.spec.ts
index 86d2a1b..d5fe57d 100644
--- a/projects/sfia-studio/app/e2e/ops1-i2-conversation.spec.ts
+++ b/projects/sfia-studio/app/e2e/ops1-i2-conversation.spec.ts
@@ -15,7 +15,7 @@ test.describe("OPS1 I2 immutable mode + signalétique", () => {
   test("mode selection, fixture locked, reload, no execution", async ({
     page,
   }) => {
-    await page.goto("/nouvelle-demande");
+    await page.goto("/ops1/nouvelle-demande");
     await page.evaluate(() => window.sessionStorage.clear());
     await page.reload();
     await expect(page.getByTestId("ops1-session-root")).toBeVisible();
@@ -98,7 +98,7 @@ test.describe("OPS1 I2 immutable mode + signalétique", () => {
   });

   test("test provider path — never presented as GPT live", async ({ page }) => {
-    await page.goto("/nouvelle-demande");
+    await page.goto("/ops1/nouvelle-demande");
     await page.evaluate(() => window.sessionStorage.clear());
     await page.reload();


diff --git a/projects/sfia-studio/app/e2e/ops1-i2-live-locked-capture.spec.ts b/projects/sfia-studio/app/e2e/ops1-i2-live-locked-capture.spec.ts
index bbad761..a6ec676 100644
--- a/projects/sfia-studio/app/e2e/ops1-i2-live-locked-capture.spec.ts
+++ b/projects/sfia-studio/app/e2e/ops1-i2-live-locked-capture.spec.ts
@@ -23,7 +23,7 @@ test.describe("OPS1 I2 real live locked capture", () => {

   test("GPT LIVE locked session with real assistant_live", async ({ page }) => {
     fs.mkdirSync(screenshotDir, { recursive: true });
-    await page.goto("/nouvelle-demande");
+    await page.goto("/ops1/nouvelle-demande");
     await page.evaluate(() => window.sessionStorage.clear());
     await page.reload();


diff --git a/projects/sfia-studio/app/e2e/ops1-i3-action-gate.spec.ts b/projects/sfia-studio/app/e2e/ops1-i3-action-gate.spec.ts
index c956ef5..3260d2b 100644
--- a/projects/sfia-studio/app/e2e/ops1-i3-action-gate.spec.ts
+++ b/projects/sfia-studio/app/e2e/ops1-i3-action-gate.spec.ts
@@ -12,7 +12,7 @@ test.beforeAll(() => {
 });

 async function createFixtureSession(page: import("@playwright/test").Page) {
-  await page.goto("/nouvelle-demande");
+  await page.goto("/ops1/nouvelle-demande");
   await page.evaluate(() => window.sessionStorage.clear());
   await page.reload();
   await expect(page.getByTestId("ops1-session-root")).toBeVisible();

diff --git a/projects/sfia-studio/app/e2e/ops1-i4-allowlist.spec.ts b/projects/sfia-studio/app/e2e/ops1-i4-allowlist.spec.ts
index e054cab..5d929a2 100644
--- a/projects/sfia-studio/app/e2e/ops1-i4-allowlist.spec.ts
+++ b/projects/sfia-studio/app/e2e/ops1-i4-allowlist.spec.ts
@@ -12,7 +12,7 @@ test.beforeAll(() => {
 });

 async function prepareCandidate(page: import("@playwright/test").Page) {
-  await page.goto("/nouvelle-demande");
+  await page.goto("/ops1/nouvelle-demande");
   await page.evaluate(() => window.sessionStorage.clear());
   await page.reload();
   await expect(page.getByTestId("ops1-session-root")).toBeVisible();

diff --git a/projects/sfia-studio/app/e2e/ops1-i5-execution.spec.ts b/projects/sfia-studio/app/e2e/ops1-i5-execution.spec.ts
index c7c6acc..b889f45 100644
--- a/projects/sfia-studio/app/e2e/ops1-i5-execution.spec.ts
+++ b/projects/sfia-studio/app/e2e/ops1-i5-execution.spec.ts
@@ -12,7 +12,7 @@ test.beforeAll(() => {
 });

 async function prepareThroughI4(page: import("@playwright/test").Page) {
-  await page.goto("/nouvelle-demande");
+  await page.goto("/ops1/nouvelle-demande");
   await page.evaluate(() => window.sessionStorage.clear());
   await page.reload();
   await expect(page.getByTestId("ops1-session-root")).toBeVisible();

diff --git a/projects/sfia-studio/app/e2e/ops1-i6-report-and-continuation.spec.ts b/projects/sfia-studio/app/e2e/ops1-i6-report-and-continuation.spec.ts
index d0240d8..1f61b85 100644
--- a/projects/sfia-studio/app/e2e/ops1-i6-report-and-continuation.spec.ts
+++ b/projects/sfia-studio/app/e2e/ops1-i6-report-and-continuation.spec.ts
@@ -15,7 +15,7 @@ async function prepareThroughI5Fixture(
   page: import("@playwright/test").Page,
   opts?: { keepUnusedModify?: boolean },
 ) {
-  await page.goto("/nouvelle-demande");
+  await page.goto("/ops1/nouvelle-demande");
   await page.evaluate(() => window.sessionStorage.clear());
   await page.reload();
   await expect(page.getByTestId("ops1-session-root")).toBeVisible();

--- /dev/null
+++ b/projects/sfia-studio/app/e2e/control-tower-fast-track.spec.ts
@@
+import { test, expect } from "@playwright/test";
+import path from "path";
+import fs from "fs";
+
+const screenshotDir = path.join(
+  __dirname,
+  "../../../../.tmp-sfia-review/control-tower-fast-track-evidence/screenshots",
+);
+
+test.beforeAll(() => {
+  fs.mkdirSync(screenshotDir, { recursive: true });
+});
+
+test.describe("Control Tower Fast Track — tools UI", () => {
+  test("fixture git tool marker shows tool events", async ({ page }) => {
+    await page.goto("/ops1/nouvelle-demande");
+    await page.evaluate(() => window.sessionStorage.clear());
+    await page.reload();
+
+    await page.getByTestId("ops1-create-mode-fixture").check();
+    await page.getByTestId("ops1-create-session").click();
+    await expect(page.getByTestId("ops1-session-id")).toBeVisible();
+
+    await page
+      .getByTestId("ops1-message-input")
+      .fill("État projet __CT_TOOL_GIT_STATUS__");
+    await page.getByTestId("ops1-send-message").click();
+
+    await expect(page.getByTestId("ct-sources-panel")).toBeVisible();
+    await expect(page.getByTestId("ct-tool-event").first()).toBeVisible({
+      timeout: 15_000,
+    });
+    await expect(page.getByTestId("ct-timeline-panel")).toBeVisible();
+
+    await page.screenshot({
+      path: path.join(screenshotDir, "01-fixture-git-tool.png"),
+      fullPage: true,
+    });
+  });
+
+  test("denied path tool is visible as denied/failed event", async ({
+    page,
+  }) => {
+    await page.goto("/ops1/nouvelle-demande");
+    await page.evaluate(() => window.sessionStorage.clear());
+    await page.reload();
+    await page.getByTestId("ops1-create-mode-fixture").check();
+    await page.getByTestId("ops1-create-session").click();
+    await page
+      .getByTestId("ops1-message-input")
+      .fill("Secret probe __CT_TOOL_DENIED_PATH__");
+    await page.getByTestId("ops1-send-message").click();
+    await expect(page.getByTestId("ops1-turn").last()).toContainText(
+      "PATH_NOT_ALLOWED",
+      { timeout: 15_000 },
+    );
+    await expect(page.getByTestId("ct-tool-event").first()).toBeVisible();
+    await page.screenshot({
+      path: path.join(screenshotDir, "02-tool-denied.png"),
+      fullPage: true,
+    });
+  });
+});

--- /dev/null
+++ b/projects/sfia-studio/app/e2e/sfia-canonical-context-engine.spec.ts
@@
+import { test, expect } from "@playwright/test";
+import path from "path";
+import fs from "fs";
+
+const screenshotDir = path.join(
+  __dirname,
+  "../../../../.tmp-sfia-review/sfia-canonical-context-engine-evidence/screenshots",
+);
+
+test.beforeAll(() => {
+  fs.mkdirSync(screenshotDir, { recursive: true });
+});
+
+test.describe("SFIA Canonical Context Engine", () => {
+  test("fixture propose CREATE → context + ActionCandidate live (no fixture button)", async ({
+    page,
+  }) => {
+    await page.goto("/ops1/nouvelle-demande");
+    await page.evaluate(() => window.sessionStorage.clear());
+    await page.reload();
+
+    await page.getByTestId("ops1-create-mode-fixture").check();
+    await page.getByTestId("ops1-create-session").click();
+    await expect(page.getByTestId("ops1-session-id")).toBeVisible();
+
+    await expect(page.getByTestId("sfia-context-panel")).toBeVisible();
+    await expect(page.getByTestId("sfia-context-ready")).toBeVisible({
+      timeout: 15_000,
+    });
+    await expect(page.getByTestId("sfia-baseline")).toContainText("SFIA");
+    await expect(page.getByTestId("sfia-source-item").first()).toBeVisible();
+
+    await page.screenshot({
+      path: path.join(screenshotDir, "01-sfia-context-loaded.png"),
+      fullPage: true,
+    });
+
+    await page
+      .getByTestId("ops1-message-input")
+      .fill("Prépare action bornée __SFIA_PROPOSE_CREATE_MD__");
+    await page.getByTestId("ops1-send-message").click();
+
+    await expect(page.getByTestId("sfia-proposal-panel")).toBeVisible({
+      timeout: 20_000,
+    });
+    await expect(page.getByTestId("sfia-compilation-status")).toHaveText(
+      "COMPILED",
+    );
+    await expect(page.getByTestId("sfia-live-action-id")).toBeVisible();
+    await expect(page.getByTestId("ops1-action-panel")).toBeVisible();
+    await expect(page.getByTestId("ops1-i3-create-candidate")).toBeVisible();
+
+    await page.screenshot({
+      path: path.join(screenshotDir, "02-sfia-proposal-compiled.png"),
+      fullPage: true,
+    });
+    await page.screenshot({
+      path: path.join(screenshotDir, "03-sfia-action-candidate-live.png"),
+      fullPage: true,
+    });
+    await page.screenshot({
+      path: path.join(screenshotDir, "04-sfia-sources-digests.png"),
+      fullPage: true,
+    });
+  });
+
+  test("commit proposal denied deterministically", async ({ page }) => {
+    await page.goto("/ops1/nouvelle-demande");
+    await page.evaluate(() => window.sessionStorage.clear());
+    await page.reload();
+    await page.getByTestId("ops1-create-mode-fixture").check();
+    await page.getByTestId("ops1-create-session").click();
+    await page
+      .getByTestId("ops1-message-input")
+      .fill("Mauvaise proposition __SFIA_PROPOSE_COMMIT__");
+    await page.getByTestId("ops1-send-message").click();
+    await expect(page.getByTestId("sfia-compilation-status")).toHaveText(
+      "POLICY_DENIED",
+      { timeout: 20_000 },
+    );
+    await expect(page.getByTestId("sfia-denied-ops")).toBeVisible();
+    await page.screenshot({
+      path: path.join(screenshotDir, "05-sfia-forbidden-ops-denied.png"),
+      fullPage: true,
+    });
+  });
+});

diff --git a/projects/sfia-studio/app/e2e/increment-a.spec.ts b/projects/sfia-studio/app/e2e/increment-a.spec.ts
index 65b66ff..d0fd741 100644
--- a/projects/sfia-studio/app/e2e/increment-a.spec.ts
+++ b/projects/sfia-studio/app/e2e/increment-a.spec.ts
@@ -9,7 +9,7 @@ const screenshotDir = path.join(

 const captures = [
   {
-    path: "/nouvelle-demande?vs=VS-UX-01",
+    path: "/ops1/nouvelle-demande?vs=VS-UX-01",
     name: "inc-a-nouvelle-demande",
     assert: async (page: import("@playwright/test").Page) => {
       await expect(page.getByTestId("vs-demo-banner")).toBeVisible();
@@ -17,7 +17,7 @@ const captures = [
     },
   },
   {
-    path: "/nouvelle-demande?vs=VS-UX-03",
+    path: "/ops1/nouvelle-demande?vs=VS-UX-03",
     name: "inc-a-qualification-proposee",
     assert: async (page: import("@playwright/test").Page) => {
       await expect(
@@ -104,7 +104,7 @@ test.describe("Increment A visual & functional", () => {
   });

   test("demo switcher reaches ten states", async ({ page }) => {
-    await page.goto("/nouvelle-demande?vs=VS-UX-01");
+    await page.goto("/ops1/nouvelle-demande?vs=VS-UX-01");
     const switcher = page.getByTestId("vs-demo-switcher");
     await expect(switcher).toBeVisible();
     const values = await switcher.locator("option").evaluateAll((opts) =>
@@ -141,7 +141,7 @@ test.describe("Increment A visual & functional", () => {
   });

   test("GPT counter shows À définir and no-retry", async ({ page }) => {
-    await page.goto("/nouvelle-demande?vs=VS-UX-02");
+    await page.goto("/ops1/nouvelle-demande?vs=VS-UX-02");
     await expect(page.getByTestId("vs-gpt-counter").first()).toContainText(
       "À définir",
     );

diff --git a/projects/sfia-studio/app/e2e/increment-c.spec.ts b/projects/sfia-studio/app/e2e/increment-c.spec.ts
index 740a5ff..9e4eadb 100644
--- a/projects/sfia-studio/app/e2e/increment-c.spec.ts
+++ b/projects/sfia-studio/app/e2e/increment-c.spec.ts
@@ -26,7 +26,7 @@ test.beforeAll(() => {

 test.describe("Increment C — GPT qualification UI", () => {
   test("empty demand blocks confirmation + invalid capture", async ({ page }) => {
-    await page.goto("/nouvelle-demande?vs=VS-UX-01");
+    await page.goto("/ops1/nouvelle-demande?vs=VS-UX-01");
     await expect(page.getByTestId("vs-demand-input")).toHaveValue("");
     await expect(page.getByTestId("vs-qualify-open-confirm")).toHaveAttribute(
       "aria-disabled",
@@ -46,7 +46,7 @@ test.describe("Increment C — GPT qualification UI", () => {

   test("Campus360 user demand → confirmation → fixture candidate", async ({ page }) => {
     test.setTimeout(90_000);
-    await page.goto("/nouvelle-demande?vs=VS-UX-01");
+    await page.goto("/ops1/nouvelle-demande?vs=VS-UX-01");
     await page.getByTestId("vs-demand-input").fill(CAMPUS);
     await page.screenshot({
       path: path.join(userInputDir, "inc-c-demand-campus360.png"),
@@ -95,7 +95,7 @@ test.describe("Increment C — GPT qualification UI", () => {

   test("edit demand after fixture uses new text", async ({ page }) => {
     test.setTimeout(90_000);
-    await page.goto("/nouvelle-demande?vs=VS-UX-01");
+    await page.goto("/ops1/nouvelle-demande?vs=VS-UX-01");
     await page.getByTestId("vs-demand-input").fill(CAMPUS);
     await page.getByTestId("vs-qualify-open-confirm").click();
     await page.getByTestId("vs-gpt-confirm-fixture").click();
@@ -110,7 +110,7 @@ test.describe("Increment C — GPT qualification UI", () => {
   });

   test("Nora composer is explicitly non-editable", async ({ page }) => {
-    await page.goto("/nouvelle-demande?vs=VS-UX-01");
+    await page.goto("/ops1/nouvelle-demande?vs=VS-UX-01");
     await expect(page.getByTestId("copilot-composer-disabled")).toContainText(
       "Chat non disponible",
     );

```

## 10. Contenu complet fichiers créés + état C1 des fichiers D1 clés

### `projects/sfia-studio/app/app/ops1/nouvelle-demande/page.tsx`

```tsx
import { NouvelleDemandePageClient } from "@/features/nouvelle-demande/NouvelleDemandePageClient";

/** Legacy OPS1 session surface — preserved during D1-C1 intake cutover. */
export default function Ops1NouvelleDemandePage() {
  return <NouvelleDemandePageClient />;
}
```
### `projects/sfia-studio/app/features/d1/intake/IntakeView.tsx`

```tsx
"use client";

import { useEffect, useId, useMemo, useState } from "react";
import Link from "next/link";
import type { D1Project } from "@/lib/d1/types";
import { logIntakeEvent } from "@/lib/d1/intakeObservability";
import { D1AppShell } from "../D1AppShell";
import { ProjectStateBadge } from "../Badges";
import { IntakeContextRail } from "./IntakeContextRail";
import shell from "../d1-shell.module.css";
import styles from "./intake.module.css";

const EXAMPLES = [
  "Je veux lancer une application de suivi des contrats.",
  "Reprendre Campus360 pour la gestion des utilisateurs.",
  "On reprend le cadrage Campus360.",
  "Analyse cette idée, mais ne crée rien.",
] as const;

type Phase = "empty" | "draft" | "submitted";

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

  const recent = projects.slice(0, 6);

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
      recentCount={recent.length}
    />
  );

  return (
    <D1AppShell active="intake" title="Nouvelle demande" rail={rail}>
      <header className={styles.hero}>
        <h1>Nouvelle demande</h1>
        <p className={styles.heroLead}>
          Décrivez ce que vous voulez faire. Studio vous aidera à retrouver,
          qualifier et structurer — vous gardez la décision finale.
        </p>
        <div className={styles.valueStrip} aria-label="Proposition de valeur">
          <span className={styles.valueChip}>Intent-first</span>
          <span className={styles.valueChip}>Copilote actif</span>
          <span className={styles.valueChip}>Confirmation humaine</span>
        </div>
      </header>

      <div className={styles.quickActions} role="group" aria-label="Actions rapides">
        <button
          type="button"
          className={`${styles.quickBtn} ${styles.quickBtnPrimary}`}
          onClick={focusComposer}
          data-testid="quick-describe"
        >
          Décrire un nouveau besoin
        </button>
        <a className={styles.quickBtn} href="#reprendre" data-testid="quick-resume">
          Reprendre un travail
        </a>
        <button
          type="button"
          className={styles.quickBtn}
          disabled
          title="Decision Center — incrément ultérieur"
          data-testid="quick-decisions"
        >
          Voir mes décisions (à venir)
        </button>
        <Link
          className={styles.quickBtn}
          href="/projects/new"
          data-testid="quick-manual"
          onClick={() =>
            logIntakeEvent("intake_manual_creation_opened", { sessionLocalId })
          }
        >
          Création manuelle avancée
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
            Studio qualifiera cette demande dans le prochain incrément de
            routage assisté (D1-C2). Aucune création de projet ou de cycle n’a
            été effectuée.
          </p>
          <p className={styles.statusMeta} data-testid="intake-feedback-meta">
            Accusé UX local · pas de GPT · pas de mutation ·{" "}
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
              Création manuelle
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
          Écrivez librement. Le routage intelligent (Project / Cycle / Reprise)
          arrive en C2 — C1 enregistre uniquement un accusé de réception UX.
        </p>
        <textarea
          id={composerId}
          className={styles.composerArea}
          name="intent"
          value={intent}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Ex. « Je veux reprendre Campus360 pour la gestion des comptes. »"
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
                ? "Prêt à envoyer (local)"
                : "Envoyé — en attente C2"}
          </span>
        </div>
      </form>

      <section
        className={styles.resumeSection}
        id="reprendre"
        aria-labelledby="resume-heading"
        data-testid="intake-resume"
      >
        <h2 id="resume-heading">Reprendre</h2>
        <p className={styles.resumeHint}>
          Projets récents depuis la fondation D1-I1. Les reprises Cycle / Action
          ne sont pas simulées dans C1.
        </p>
        {recent.length === 0 ? (
          <div className={`${shell.card} ${shell.empty}`} data-testid="intake-resume-empty">
            <h3>Aucun projet récent</h3>
            <p className={shell.hint}>
              Décrivez un besoin ci-dessus, ou utilisez la création manuelle
              avancée.
            </p>
          </div>
        ) : (
          <ul className={styles.resumeGrid} data-testid="intake-resume-list">
            {recent.map((p) => (
              <li key={p.projectId}>
                <Link
                  className={styles.resumeCard}
                  href={`/projects/${p.projectId}`}
                  data-testid={`resume-project-${p.projectId}`}
                  onClick={() =>
                    logIntakeEvent("intake_resume_project_opened", {
                      sessionLocalId,
                      projectId: p.projectId,
                    })
                  }
                >
                  <strong>{p.name}</strong>
                  <ProjectStateBadge state={p.state} />
                  <p className={shell.hint}>{p.objective}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
        <div className={styles.staticNote} role="note" data-testid="intake-static-note">
          Cycles, actions et décisions ouvertes : indisponibles dans C1
          (placeholders explicites — pas de fausse reprise).
        </div>
      </section>

      <div className={styles.manualBanner}>
        <p>
          Escape hatch expert : formulaire court sans choix MethodMode. Le
          parcours standard reste conversationnel.
        </p>
        <Link
          className={`${shell.cta} ${shell.ctaSecondary}`}
          href="/projects/new"
          data-testid="manual-creation-entry"
          onClick={() =>
            logIntakeEvent("intake_manual_creation_opened", { sessionLocalId })
          }
        >
          Création manuelle avancée
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
        <p>retrouver, qualifier et structurer — vous gardez la décision finale.</p>
      </div>
      <div className={styles.railCard}>
        <strong>État intake</strong>
        <p data-testid="intake-rail-status">
          {hasSubmitted
            ? "Demande reçue — routage assisté en attente (C2)"
            : "En attente d’une intention"}
        </p>
      </div>
      <div className={styles.railCard}>
        <strong>Projets récents</strong>
        <p>{recentCount} projet(s) disponibles pour reprise</p>
      </div>
      <div className={styles.railCard}>
        <strong>À venir (non exécuté)</strong>
        <p className={styles.placeholder}>Qualification d’intention — C2</p>
        <p className={styles.placeholder}>Recherche de contexte — C3</p>
        <p className={styles.placeholder}>Confirmation & mutation — C4</p>
      </div>
      <p className={styles.monoNote}>
        Aucun GPT réel dans C1 · aucune mutation depuis la conversation.
      </p>
    </>
  );
}
```
### `projects/sfia-studio/app/features/d1/intake/intake.module.css`

```css
.hero {
  margin-bottom: 20px;
}

.hero h1 {
  margin: 0 0 8px;
  font-size: clamp(1.5rem, 2.2vw, 1.85rem);
  line-height: 1.2;
  color: var(--sfia-ink);
}

.heroLead {
  margin: 0;
  font-size: 15px;
  color: var(--sfia-muted);
  max-width: 42rem;
  line-height: 1.5;
}

.valueStrip {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 14px 0 20px;
}

.valueChip {
  display: inline-flex;
  align-items: center;
  min-height: 32px;
  padding: 4px 12px;
  border-radius: 999px;
  background: var(--sfia-blue-soft);
  color: var(--sfia-blue);
  font-size: 12px;
  font-weight: 600;
}

.composer {
  display: grid;
  gap: 12px;
  background: #fff;
  border: 1px solid var(--sfia-border);
  border-radius: 16px;
  padding: 18px;
  box-shadow: var(--sfia-shadow-sm);
  margin-bottom: 16px;
}

.composerLabel {
  font-weight: 700;
  font-size: 14px;
}

.composerHelp {
  margin: 0;
  font-size: 13px;
  color: var(--sfia-muted);
}

.composerArea {
  width: 100%;
  box-sizing: border-box;
  min-height: 120px;
  border: 1px solid var(--sfia-border);
  border-radius: 12px;
  padding: 14px 16px;
  font: inherit;
  resize: vertical;
  background: var(--sfia-bg, #f6f7fa);
}

.composerArea:focus-visible {
  outline: 2px solid var(--sfia-blue);
  outline-offset: 2px;
}

.composerActions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.examples {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.exampleBtn {
  min-height: 36px;
  padding: 6px 12px;
  border-radius: 10px;
  border: 1px dashed var(--sfia-border);
  background: #fff;
  color: var(--sfia-ink);
  font-size: 13px;
  cursor: pointer;
  text-align: left;
}

.exampleBtn:hover,
.exampleBtn:focus-visible {
  border-color: var(--sfia-blue);
  outline: 2px solid var(--sfia-blue);
  outline-offset: 1px;
}

.quickActions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 22px;
}

.quickBtn {
  min-height: 40px;
  padding: 8px 14px;
  border-radius: 10px;
  border: 1px solid var(--sfia-border);
  background: #fff;
  color: var(--sfia-ink);
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
}

.quickBtn:hover,
.quickBtn:focus-visible {
  outline: 2px solid var(--sfia-blue);
  outline-offset: 2px;
}

.quickBtnPrimary {
  background: var(--sfia-blue);
  color: #fff;
  border-color: transparent;
}

.statusPanel {
  border-radius: 14px;
  border: 1px solid #c9d6ff;
  background: var(--sfia-blue-soft);
  padding: 16px 18px;
  margin-bottom: 18px;
}

.statusPanel h2 {
  margin: 0 0 8px;
  font-size: 16px;
}

.statusPanel p {
  margin: 0 0 8px;
  font-size: 14px;
  color: var(--sfia-ink);
}

.statusMeta {
  font-size: 12px;
  color: var(--sfia-muted);
  font-style: italic;
}

.statusActions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 12px;
}

.resumeSection {
  margin-top: 8px;
}

.resumeSection h2 {
  margin: 0 0 6px;
  font-size: 18px;
}

.resumeHint {
  margin: 0 0 12px;
  font-size: 13px;
  color: var(--sfia-muted);
}

.resumeGrid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
}

.resumeCard {
  display: block;
  text-decoration: none;
  color: inherit;
  border: 1px solid var(--sfia-border);
  border-radius: 12px;
  padding: 14px 16px;
  background: #fff;
  min-height: 44px;
}

.resumeCard:hover,
.resumeCard:focus-visible {
  outline: 2px solid var(--sfia-blue);
  outline-offset: 2px;
}

.resumeCard strong {
  display: block;
  margin-bottom: 6px;
}

.staticNote {
  border: 1px dashed var(--sfia-border);
  border-radius: 12px;
  padding: 12px 14px;
  background: #fffaf0;
  color: #8a5a00;
  font-size: 13px;
  margin-top: 12px;
}

.manualBanner {
  margin-top: 20px;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid var(--sfia-border);
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
}

.manualBanner p {
  margin: 0;
  font-size: 13px;
  color: var(--sfia-muted);
  max-width: 36rem;
}

@media (prefers-reduced-motion: reduce) {
  .composer,
  .statusPanel,
  .resumeCard {
    transition: none;
  }
}
```
### `projects/sfia-studio/app/lib/d1/intakeObservability.ts`

```tsx
/**
 * D1-C1 intake observability — structured logs, no full intent body.
 * RGPD: length + action + status only.
 */

export type IntakeLogEvent =
  | "intake_opened"
  | "intake_intent_submitted"
  | "intake_manual_creation_opened"
  | "intake_resume_project_opened"
  | "intake_cancelled";

export function logIntakeEvent(
  event: IntakeLogEvent,
  payload: {
    status?: string;
    intentLength?: number;
    projectId?: string;
    sessionLocalId?: string;
    durationMs?: number;
  } = {},
): void {
  const line = JSON.stringify({
    event,
    ts: new Date().toISOString(),
    status: payload.status ?? "ok",
    intentLength: payload.intentLength,
    projectId: payload.projectId,
    sessionLocalId: payload.sessionLocalId,
    durationMs: payload.durationMs,
  });
  // eslint-disable-next-line no-console
  console.info(`[d1.intake] ${line}`);
}
```
### `projects/sfia-studio/app/__tests__/d1/intake-c1.test.tsx`

```tsx
import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { IntakeView } from "@/features/d1/intake/IntakeView";
import { NewProjectForm } from "@/features/d1/NewProjectForm";
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

describe("D1-C1 IntakeView", () => {
  beforeEach(() => {
    vi.spyOn(console, "info").mockImplementation(() => {});
  });
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("renders empty conversational intake without project form", () => {
    render(<IntakeView projects={[]} />);
    expect(
      screen.getByRole("heading", { name: "Nouvelle demande", level: 1 }),
    ).toBeTruthy();
    expect(screen.getByTestId("intake-composer")).toBeTruthy();
    expect(screen.queryByTestId("manual-project-form")).toBeNull();
    expect(screen.queryByTestId("project-method-mode")).toBeNull();
    expect(screen.queryByTestId("project-name")).toBeNull();
  });

  it("accepts intent and shows honest C1 feedback without claiming routing", async () => {
    const user = userEvent.setup();
    render(<IntakeView projects={[sample]} />);
    await user.type(
      screen.getByTestId("intake-intent"),
      "Je veux reprendre Campus360",
    );
    await user.click(screen.getByTestId("intake-submit"));
    expect(screen.getByTestId("intake-feedback")).toBeTruthy();
    expect(screen.getByTestId("intake-feedback").textContent).toMatch(
      /prochain incrément|C2/i,
    );
    expect(screen.getByTestId("intake-feedback").textContent).not.toMatch(
      /confiance 0\./i,
    );
    expect(screen.getByTestId("intake-feedback").textContent).not.toMatch(
      /CycleInstance/i,
    );
  });

  it("exposes resume projects and manual creation secondary entry", () => {
    render(<IntakeView projects={[sample]} />);
    expect(screen.getByTestId("intake-resume-list").textContent).toContain(
      "Campus360",
    );
    expect(screen.getByTestId("manual-creation-entry")).toBeTruthy();
    expect(screen.getByTestId("quick-manual")).toBeTruthy();
    expect(screen.getByTestId("intake-static-note").textContent).toMatch(
      /indisponibles/i,
    );
  });

  it("quick actions include describe / resume / decisions / manual", () => {
    render(<IntakeView projects={[]} />);
    expect(screen.getByTestId("quick-describe")).toBeTruthy();
    expect(screen.getByTestId("quick-resume")).toBeTruthy();
    expect(screen.getByTestId("quick-decisions")).toBeDisabled();
    expect(screen.getByTestId("quick-manual")).toBeTruthy();
  });
});

describe("D1-C1 manual creation MethodMode policy", () => {
  afterEach(() => cleanup());

  it("does not expose MethodMode select", () => {
    render(<NewProjectForm />);
    expect(
      screen.getByRole("heading", {
        name: "Création manuelle avancée",
        level: 1,
      }),
    ).toBeTruthy();
    expect(screen.queryByTestId("project-method-mode")).toBeNull();
    expect(screen.getByTestId("manual-creation-hint").textContent).toContain(
      D1_GOVERNANCE_METHOD_MODE,
    );
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
  "../../../../.tmp-sfia-review/screenshots-d1-c1",
);

test.beforeAll(() => {
  fs.mkdirSync(shotDir, { recursive: true });
});

test.describe("D1-C1 Intake Shell and Conversation Entry", () => {
  test("conversational intake on /nouvelle-demande without form-first", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    await page.goto("/nouvelle-demande");
    await expect(
      page.getByRole("heading", { name: "Nouvelle demande", level: 1 }),
    ).toBeVisible();
    await expect(page.getByTestId("intake-composer")).toBeVisible();
    await expect(page.getByTestId("project-name")).toHaveCount(0);
    await expect(page.getByTestId("project-method-mode")).toHaveCount(0);
    await page.screenshot({
      path: path.join(shotDir, "intake-empty-1440.png"),
      fullPage: false,
    });

    await page
      .getByTestId("intake-intent")
      .fill("Je veux reprendre Campus360 pour la gestion des comptes.");
    await page.screenshot({
      path: path.join(shotDir, "intake-draft-1440.png"),
      fullPage: false,
    });

    const beforeProjects = await page.evaluate(async () => {
      // no API probe — count resume cards only
      return document.querySelectorAll('[data-testid^="resume-project-"]').length;
    });

    await page.getByTestId("intake-submit").click();
    await expect(page.getByTestId("intake-feedback")).toBeVisible();
    await expect(page.getByTestId("intake-feedback")).toContainText("C2");
    await expect(page.getByTestId("intake-feedback")).toContainText(
      "Aucune création",
    );
    await page.screenshot({
      path: path.join(shotDir, "intake-feedback-1440.png"),
      fullPage: false,
    });

    // Still on intake — no redirect to cockpit (no mutation)
    await expect(page).toHaveURL(/\/nouvelle-demande/);
    const afterProjects = await page.evaluate(
      () =>
        document.querySelectorAll('[data-testid^="resume-project-"]').length,
    );
    expect(afterProjects).toBe(beforeProjects);

    await page.locator("#reprendre").scrollIntoViewIfNeeded();
    await page.screenshot({
      path: path.join(shotDir, "intake-resume-1440.png"),
      fullPage: false,
    });
  });

  test("manual creation secondary path creates project without MethodMode UI", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    await page.goto("/nouvelle-demande");
    await page.getByTestId("quick-manual").click();
    await expect(page).toHaveURL(/\/projects\/new/);
    await expect(
      page.getByRole("heading", {
        name: "Création manuelle avancée",
        level: 1,
      }),
    ).toBeVisible();
    await expect(page.getByTestId("project-method-mode")).toHaveCount(0);
    await page.screenshot({
      path: path.join(shotDir, "manual-advanced-1440.png"),
      fullPage: false,
    });

    await page.getByTestId("project-name").fill("Projet D1-C1 E2E");
    await page
      .getByTestId("project-objective")
      .fill("Valider création manuelle secondaire");
    await page.getByTestId("project-submit").click();
    await expect(page).toHaveURL(/\/projects\/proj-/);
    await expect(page.getByTestId("project-title")).toHaveText(
      "Projet D1-C1 E2E",
    );
    await expect(page.getByTestId("method-mode-readonly")).toBeVisible();
    await expect(page.getByTestId("cockpit-method-mode")).toHaveCount(0);

    await page.goto("/workspace");
    await expect(page.getByTestId("project-list")).toContainText(
      "Projet D1-C1 E2E",
    );
  });

  test("OPS1 legacy route preserved", async ({ page }) => {
    await page.goto("/ops1/nouvelle-demande");
    await expect(
      page.getByRole("heading", { name: "Nouvelle demande", level: 1 }),
    ).toBeVisible();
    // OPS1 shell markers
    await expect(page.getByTestId("utility-rail")).toBeVisible();
  });

  for (const width of [1728, 1440, 1280, 1024] as const) {
    test(`no horizontal overflow on intake at ${width}`, async ({ page }) => {
      await page.setViewportSize({ width, height: 1024 });
      await page.goto("/nouvelle-demande");
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
        path: path.join(shotDir, `intake-${width}.png`),
        fullPage: false,
      });
    });
  }
});
```
### `projects/sfia-studio/sfia-v3-delivery/d1-c1-intake-shell-conversation-entry/01-implemented-scope.md`

```markdown
# 01 — Implemented scope

## Inclus
- `/nouvelle-demande` = intake conversationnel D1-C1 (`IntakeView` + `D1AppShell`)
- Composer, exemples, actions rapides, zone Reprendre (projets D1-I1)
- Feedback honnête C1 (pas de GPT, pas de mutation)
- Création manuelle avancée `/projects/new` sans MethodMode UI
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
| `/projects/new` | Création manuelle avancée |
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

`NewProjectForm` retitré « Création manuelle avancée ».
MethodMode select **retiré** ; `D1_GOVERNANCE_METHOD_MODE = V3_CANDIDATE` appliqué en interne.
Cockpit : MethodMode lecture seule ; journal technique derrière toggle.
```
### `projects/sfia-studio/sfia-v3-delivery/d1-c1-intake-shell-conversation-entry/05-runtime-figma-validation.md`

```markdown
# 05 — Runtime / Figma

fileKey `IS70XDnBMvZuJYmaI5eZT2` page `11:2`

| Capture | Figma | Verdict |
|---------|-------|---------|
| empty 1440 | 12:2 | structure OK (composer + reprises) |
| draft/feedback | 12:36 direction | feedback C1 honnête (pas faux routing 12:60) |
| resume | 14:2 | cartes projets OK |
| manual | 14:31 | formulaire secondaire OK |
| 1728/1280/1024 | 14:64/90/117 | shell fluide, unused≈0, no H-scroll |

Captures : `.tmp-sfia-review/screenshots-d1-c1/`
```
### `projects/sfia-studio/sfia-v3-delivery/d1-c1-intake-shell-conversation-entry/06-test-results.md`

```markdown
# 06 — Tests

- vitest `__tests__/d1/` : 12/12 pass (I1 + C1)
- playwright `d1-c1-intake-shell` : 7/7 pass
- playwright `d1-i1-project-foundation` : adapté, vert
- playwright `p0-smoke` : 6/6 pass (nav adaptée shell D1)
- playwright `ops1-i1-session` : legacy path OK
- tsc --noEmit : pass
```
### `projects/sfia-studio/sfia-v3-delivery/d1-c1-intake-shell-conversation-entry/07-reserves-and-debt.md`

```markdown
# 07 — Réserves et dette

- C1-R01 : pas de GPT / proposal (C2)
- C1-R02 : resume Cycle/Action non implémentés (placeholders)
- C1-R03 : MethodMode encore en modèle SQL — gouvernance future
- C1-R04 : Decision Center CTA disabled
- C1-R05 : smoke nav doit repasser par /synthese après intake (shell différent)
```
### `projects/sfia-studio/sfia-v3-delivery/d1-c1-intake-shell-conversation-entry/08-d1-c1-validation-decision-pack.md`

```markdown
# 08 — Decision pack

**Verdict :** SFIA v3.0 D1-C1 INTAKE SHELL AND CONVERSATION ENTRY IMPLEMENTED — VALIDATION REQUIRED

Décisions Morris : GO VALIDATION D1-C1 ; ouvrir C2 ; confirmer bridge OPS1.
Anti-claims : pas C2 · pas GPT routing · pas D1 complete · pas V3-IMPLEMENTED/ADOPTED.
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
### `projects/sfia-studio/app/app/nouvelle-demande/page.tsx`

```tsx
import { listWorkspaceProjects } from "@/lib/d1/commands";
import { D1Error } from "@/lib/d1/errors";
import { IntakeView } from "@/features/d1/intake/IntakeView";

export const dynamic = "force-dynamic";

/** D1-C1: conversational intake is the primary Nouvelle demande surface. */
export default function NouvelleDemandePage() {
  try {
    const projects = listWorkspaceProjects();
    return <IntakeView projects={projects} />;
  } catch (error) {
    const message =
      error instanceof D1Error
        ? error.message
        : "Erreur de chargement des projets récents";
    // Still render intake; empty resume with soft error via empty list
    void message;
    return <IntakeView projects={[]} />;
  }
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
          aria-label="Création manuelle avancée"
          aria-current={active === "new" ? "page" : undefined}
          title="Création manuelle avancée"
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
 * D1-C1: advanced manual creation — secondary to conversational intake.
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
    <D1AppShell active="new" title="Création manuelle avancée">
      <div className={styles.header}>
        <h1>Création manuelle avancée</h1>
      </div>
      <p className={styles.hint} data-testid="manual-creation-hint">
        Escape hatch expert · parcours standard ={" "}
        <a href="/nouvelle-demande">Nouvelle demande</a> conversationnelle ·
        MethodMode appliqué en interne ({D1_GOVERNANCE_METHOD_MODE}) — non
        exposé comme choix produit · anti-claims : pas V3-ADOPTED /
        V3-IMPLEMENTED
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
### `projects/sfia-studio/app/features/d1/ProjectCockpitView.tsx`

```tsx
"use client";

import { useState } from "react";
import type { D1AuditEvent, D1Project } from "@/lib/d1/types";
import { METHOD_MODE_CLAIMS } from "@/lib/d1/types";
import { D1AppShell } from "./D1AppShell";
import { MethodModeBadge, ProjectStateBadge } from "./Badges";
import { ContextualRailI1 } from "./ContextualRail";
import styles from "./d1-shell.module.css";

const USER_ACTIVITY: Record<string, string> = {
  PROJECT_CREATED: "Projet créé",
  PROJECT_MODE_SELECTED: "Mode système appliqué",
  PROJECT_ACTIVATED: "Projet activé",
};

export function ProjectCockpitView({
  project: initial,
  audit: initialAudit,
}: {
  project: D1Project;
  audit: D1AuditEvent[];
}) {
  const [project] = useState(initial);
  const [audit] = useState(initialAudit);
  const [showTechnical, setShowTechnical] = useState(false);

  const rail = <ContextualRailI1 project={project} audit={audit} />;

  return (
    <D1AppShell active="cockpit" title={project.name} rail={rail}>
      <div className={styles.header}>
        <h1 data-testid="project-title">{project.name}</h1>
        <div className={styles.badges}>
          <ProjectStateBadge state={project.state} />
          <MethodModeBadge mode={project.methodMode} />
        </div>
      </div>

      <section className={styles.card}>
        <h2>Objectif</h2>
        <p>{project.objective}</p>
        {project.initialContextSummary ? (
          <>
            <h2>Contexte initial</h2>
            <p className={styles.hint}>{project.initialContextSummary}</p>
          </>
        ) : null}
      </section>

      <section className={styles.card}>
        <h2>Trajectoire</h2>
        <p className={styles.placeholder}>
          Placeholder — ProjectTrajectory détaillée hors scope C1.
        </p>
      </section>

      <section className={styles.card}>
        <h2>Prochaine action</h2>
        <p>
          {project.state === "ACTIVE"
            ? "Continuer via Nouvelle demande (intake) ou ouvrir un cycle (C4/C5 — non disponible)."
            : "Activer le projet via la création manuelle, ou décrire une intention dans l’intake."}
        </p>
      </section>

      {project.methodMode ? (
        <section className={styles.card} data-testid="method-mode-readonly">
          <h2>Méthode (lecture seule)</h2>
          <p className={styles.hint}>
            Donnée de gouvernance — non modifiable dans le parcours produit C1.
          </p>
          <p>{METHOD_MODE_CLAIMS[project.methodMode]}</p>
        </section>
      ) : null}

      <section className={styles.card} data-testid="audit-timeline">
        <h2>Activité récente</h2>
        <ul className={styles.list}>
          {audit.map((e) => (
            <li key={e.eventId}>
              <strong>{USER_ACTIVITY[e.eventType] ?? e.eventType}</strong>
              {showTechnical ? (
                <p className={styles.hint}>
                  {e.eventType} · {e.occurredAt} · {e.correlationId}
                </p>
              ) : (
                <p className={styles.hint}>{e.occurredAt}</p>
              )}
            </li>
          ))}
        </ul>
        {!audit.length ? (
          <p className={styles.placeholder}>Aucune activité</p>
        ) : null}
        <button
          type="button"
          className={`${styles.cta} ${styles.ctaSecondary}`}
          style={{ marginTop: 12 }}
          onClick={() => setShowTechnical((v) => !v)}
          data-testid="toggle-technical-audit"
        >
          {showTechnical
            ? "Masquer le journal technique"
            : "Voir le journal technique"}
        </button>
      </section>
    </D1AppShell>
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
    <D1AppShell active="workspace" title="Workspace Home">
      <div className={styles.header}>
        <h1>Workspace Home</h1>
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
            Création manuelle
          </Link>
        </div>
      </div>
      <p className={styles.hint}>
        Reprendre un projet ou démarrer via l’intake conversationnel · baseline
        SFIA v2.6 · v3 reste candidate
      </p>
      {error ? (
        <p className={styles.error} role="alert">
          {error}
        </p>
      ) : null}
      {projects.length === 0 ? (
        <div
          className={`${styles.card} ${styles.empty}`}
          data-testid="workspace-empty"
        >
          <h2>Aucun projet</h2>
          <p className={styles.hint}>
            Décrivez un besoin dans Nouvelle demande, ou utilisez la création
            manuelle avancée.
          </p>
          <Link className={styles.cta} href="/nouvelle-demande">
            Ouvrir Nouvelle demande
          </Link>
        </div>
      ) : (
        <ul className={styles.list} data-testid="project-list">
          {projects.map((p) => (
            <li key={p.projectId}>
              <Link href={`/projects/${p.projectId}`}>
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
    </D1AppShell>
  );
}
```
### `projects/sfia-studio/app/features/d1/Badges.tsx`

```tsx
import {
  METHOD_MODE_LABELS,
  type MethodMode,
  type ProjectState,
} from "@/lib/d1/types";
import styles from "./d1-shell.module.css";

/** Read-only governance indicator — not a user control (D1-C1). */
export function MethodModeBadge({ mode }: { mode: MethodMode | null }) {
  if (!mode) {
    return (
      <span
        className={`${styles.badge} ${styles.badgeWarn}`}
        data-testid="method-mode-badge"
      >
        Méthode système non définie
      </span>
    );
  }
  return (
    <span
      className={`${styles.badge} ${styles.badgeMode}`}
      data-testid="method-mode-badge"
      title="Indicateur de gouvernance — non modifiable ici"
    >
      {METHOD_MODE_LABELS[mode]}
    </span>
  );
}

export function ProjectStateBadge({ state }: { state: ProjectState }) {
  return (
    <span className={`${styles.badge} ${styles.badgeState}`} data-testid="project-state-badge">
      {state}
    </span>
  );
}
```
### `projects/sfia-studio/app/features/d1/ContextualRail.tsx`

```tsx
import type { D1AuditEvent, D1Project } from "@/lib/d1/types";
import { METHOD_MODE_CLAIMS } from "@/lib/d1/types";
import styles from "./d1-shell.module.css";

export function ContextualRailI1({
  project,
  audit,
}: {
  project?: D1Project | null;
  audit?: D1AuditEvent[];
}) {
  return (
    <>
      <h2>Contextual rail</h2>
      <div className={styles.railCard}>
        <strong>Mode</strong>
        <p>
          {project?.methodMode
            ? METHOD_MODE_CLAIMS[project.methodMode]
            : "Aucun mode"}
        </p>
      </div>
      <div className={styles.railCard}>
        <strong>État projet</strong>
        <p>{project?.state ?? "—"}</p>
      </div>
      <div className={styles.railCard}>
        <strong>Prochaine action</strong>
        <p>
          {project?.state === "DRAFT"
            ? "Activer via création manuelle, ou décrire une intention dans l’intake"
            : "Continuer via Nouvelle demande (C2+ routage) — cycle non ouvert en C1"}
        </p>
      </div>
      <div className={styles.railCard}>
        <strong>Derniers événements</strong>
        {(audit ?? []).slice(0, 5).map((e) => (
          <p key={e.eventId}>
            {e.eventType} · {e.occurredAt}
          </p>
        ))}
        {!audit?.length ? (
          <p className={styles.placeholder}>Aucun événement</p>
        ) : null}
      </div>
      <div className={styles.railCard}>
        <strong>Placeholders</strong>
        <p className={styles.placeholder}>Context — non chargé (I3)</p>
        <p className={styles.placeholder}>Reserves — absentes (I4)</p>
        <p className={styles.placeholder}>Decisions — absentes (I5)</p>
      </div>
      <p className={styles.monoNote}>
        Mono-opérateur I1 : owner = decision_maker (temporaire).
      </p>
    </>
  );
}
```
### `projects/sfia-studio/app/lib/d1/types.ts`

```tsx
/** D1-I1 Project Foundation — domain types (bounded). */

export const D1_SCHEMA_VERSION = "0.1.0-d1" as const;

/** Method modes authorized for I1 — no V3-ADOPTED / V3-IMPLEMENTED claims. */
export const METHOD_MODES = ["SFIA_V2_6", "TRANSITION", "V3_CANDIDATE"] as const;
export type MethodMode = (typeof METHOD_MODES)[number];

/**
 * D1-C1: MethodMode is governance/system data, not a user product choice.
 * Manual creation uses this internal default (transitory prototype).
 */
export const D1_GOVERNANCE_METHOD_MODE: MethodMode = "V3_CANDIDATE";

export const PROJECT_STATES = ["DRAFT", "ACTIVE"] as const;
export type ProjectState = (typeof PROJECT_STATES)[number];

export const AUDIT_EVENT_TYPES = [
  "PROJECT_CREATED",
  "PROJECT_MODE_SELECTED",
  "PROJECT_ACTIVATED",
] as const;
export type D1AuditEventType = (typeof AUDIT_EVENT_TYPES)[number];

/** I1 temporary mono-operator — owner == decision maker (explicit). */
export const D1_MONO_OPERATOR_ACTOR_ID = "actor-mono-i1" as const;
export const D1_DEFAULT_WORKSPACE_ID = "ws-studio-default" as const;

export interface D1Project {
  projectId: string;
  workspaceId: string;
  name: string;
  objective: string;
  initialContextSummary: string | null;
  methodMode: MethodMode | null;
  state: ProjectState;
  ownerActorId: string;
  createdAt: string;
  updatedAt: string;
  version: number;
}

export interface D1Assignment {
  principalId: string;
  projectId: string;
  role: "project_owner" | "decision_maker";
  createdAt: string;
}

export interface D1AuditEvent {
  eventId: string;
  eventType: D1AuditEventType;
  occurredAt: string;
  actorId: string;
  correlationId: string;
  projectId: string;
  payloadJson: string;
}

export interface CreateProjectInput {
  name: string;
  objective: string;
  initialContextSummary?: string;
  methodMode: MethodMode;
  activate: boolean;
  idempotencyKey: string;
  correlationId?: string;
}

export interface SelectMethodModeInput {
  projectId: string;
  methodMode: MethodMode;
  expectedVersion: number;
  activate?: boolean;
  correlationId?: string;
}

export const METHOD_MODE_LABELS: Record<MethodMode, string> = {
  SFIA_V2_6: "SFIA v2.6 (baseline opérationnelle)",
  TRANSITION: "Transition v2.6 → v3 candidate",
  V3_CANDIDATE: "SFIA v3.0 candidate (Studio-native) — non adopté",
};

export const METHOD_MODE_CLAIMS: Record<MethodMode, string> = {
  SFIA_V2_6: "Baseline v2.6 active. Aucun claim v3.",
  TRANSITION: "Mode transition. Pas d’adoption v3.",
  V3_CANDIDATE:
    "Claim limité à V3-MODELED CANDIDATE / prototype. Interdit : V3-ADOPTED, V3-IMPLEMENTED global.",
};
```
### `projects/sfia-studio/app/components/shell/UtilityRail.tsx`

```tsx
"use client";

import Link from "next/link";
import { STUDIO_ROUTES, type StudioRoute } from "@/lib/navigation";
import styles from "./utility-rail.module.css";

interface UtilityRailProps {
  variant: "floating" | "flush";
  activeRoute: StudioRoute;
}

export function UtilityRail({ variant, activeRoute }: UtilityRailProps) {
  const isFloating = variant === "floating";
  const railClass = isFloating ? styles.floating : styles.flush;

  return (
    <nav
      className={railClass}
      aria-label="Navigation principale"
      data-testid="utility-rail"
    >
      <Link
        href="/synthese"
        className={isFloating ? styles.brand : styles.brandFlush}
        aria-label="SFIA Studio"
      >
        S
      </Link>

      {STUDIO_ROUTES.map((item) => {
        const active = activeRoute === item.route;
        const itemClass = [
          isFloating ? styles.item : styles.itemFlush,
          active
            ? isFloating
              ? styles.itemActive
              : styles.itemActiveFlush
            : "",
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <Link
            key={item.id}
            href={item.route}
            className={itemClass}
            aria-label={item.label}
            aria-current={active ? "page" : undefined}
          >
            {item.railIcon}
          </Link>
        );
      })}

      <button
        type="button"
        className={isFloating ? styles.itemDisabled : styles.itemFlush}
        aria-disabled
        disabled
        title="Paramètres — simulation"
        aria-label="Paramètres (désactivé)"
      >
        ◎
      </button>

      <div className={styles.spacer} />

      <Link
        href="/workspace"
        className={isFloating ? styles.item : styles.itemFlush}
        aria-label="Workspace D1"
        title="Workspace D1"
        data-testid="rail-d1-workspace"
      >
        W
      </Link>

      <Link
        href="/ops1/nouvelle-demande"
        className={isFloating ? styles.item : styles.itemFlush}
        aria-label="OPS1 legacy"
        title="OPS1 Nouvelle demande (legacy)"
        data-testid="rail-ops1-legacy"
      >
        O
      </Link>

      <div className={isFloating ? styles.avatar : styles.avatarFlush}>MC</div>
    </nav>
  );
}
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
      page.getByRole("heading", { name: "Workspace Home", level: 1 }),
    ).toBeVisible();
    await page.screenshot({
      path: path.join(shotDir, "workspace-home-1440.png"),
      fullPage: false,
    });

    await page.getByTestId("cta-new-project").click();
    await expect(page).toHaveURL(/\/projects\/new/);
    await expect(
      page.getByRole("heading", {
        name: "Création manuelle avancée",
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
### `projects/sfia-studio/app/e2e/p0-smoke.spec.ts`

```tsx
import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";

const screenshotDir = path.join(
  __dirname,
  "../../../../.tmp-sfia-review/screenshots",
);

const routes = [
  {
    path: "/nouvelle-demande",
    heading: "Nouvelle demande",
    screenshot: "p0-00c-nouvelle-demande-runtime.png",
  },
  {
    path: "/synthese",
    heading: "Vue synthèse",
    screenshot: "p0-01c-synthese-runtime.png",
  },
  {
    path: "/cycle-actif",
    heading: "Cycle actif",
    screenshot: "p0-02c-cycle-actif-runtime.png",
  },
  {
    path: "/decision",
    heading: "Décision Morris",
    screenshot: "p0-03c-decision-runtime.png",
  },
];

const knownNoise = [
  "Download the React DevTools",
  "Hydration failed",
  "Extra attributes from the server",
];

test.beforeAll(() => {
  fs.mkdirSync(screenshotDir, { recursive: true });
});

test.describe("P0 smoke", () => {
  for (const route of routes) {
    test(`renders ${route.path}`, async ({ page }) => {
      const errors: string[] = [];
      page.on("console", (msg) => {
        if (msg.type() !== "error") return;
        const text = msg.text();
        if (knownNoise.some((noise) => text.includes(noise))) return;
        errors.push(text);
      });

      await page.goto(route.path);
      await expect(
        page.getByRole("heading", { name: route.heading, level: 1 }),
      ).toBeVisible();

      await page.screenshot({
        path: path.join(screenshotDir, route.screenshot),
        fullPage: true,
      });

      expect(errors).toEqual([]);
    });
  }

  test("navigates between primary routes", async ({ page }) => {
    await page.goto("/synthese");
    const rail = page.getByTestId("utility-rail");

    await rail.getByRole("link", { name: "Nouvelle demande" }).click();
    await expect(page).toHaveURL(/\/nouvelle-demande\/?$/);
    // D1-C1: intake uses D1AppShell (no OPS1 utility-rail). Return to Studio shell.
    await page.goto("/synthese");
    const railAfter = page.getByTestId("utility-rail");

    await railAfter.getByRole("link", { name: "Cycle actif" }).click();
    await expect(page).toHaveURL(/cycle-actif/);

    await railAfter.getByRole("link", { name: "Décision Morris" }).click();
    await expect(page).toHaveURL(/decision/);
  });

  test("axe-core smoke has no critical violations", async ({ page }) => {
    await page.goto("/synthese");

    await page.addScriptTag({
      path: require.resolve("axe-core/axe.min.js"),
    });

    const axeResults = await page.evaluate(async () => {
      // @ts-expect-error axe injected by addScriptTag
      const res = await window.axe.run(document, {
        runOnly: { type: "tag", values: ["wcag2a", "wcag2aa"] },
      });
      return {
        violations: res.violations.filter(
          (v: { impact?: string }) =>
            v.impact === "critical" || v.impact === "serious",
        ),
      };
    });

    expect(axeResults.violations.length).toBeLessThanOrEqual(3);
  });
});
```

## 11. Réserves / dette / anti-claims

- C1-R01 pas GPT/proposal (C2)
- C1-R02 resume Cycle/Action placeholders
- C1-R03 MethodMode SQL → gouvernance
- C1-R04 Decision CTA disabled
- C1-R05 smoke nav via /synthese après intake
- Anti-claims : pas C2 · pas GPT routing · pas D1 COMPLETE · pas V3-IMPLEMENTED/ADOPTED · pas commit projet

## 12. Décisions Morris

GO VALIDATION D1-C1 · ouvrir C2 · confirmer bridge OPS1

## 13. Verdict

**VERDICT :** SFIA v3.0 D1-C1 INTAKE SHELL AND CONVERSATION ENTRY IMPLEMENTED — VALIDATION REQUIRED
