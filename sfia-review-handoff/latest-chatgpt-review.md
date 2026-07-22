# Review Pack Full — SFIA v3.0 D1-I1 Project Foundation

## 1. Métadonnées

- **Date/heure/fuseau :** 2026-07-22 19:18:46 CEST
- **Cycle :** 9 — Delivery (EVOL/DELIVERY/UX/DATA)
- **Profil :** Critical
- **Gate consommé :** GO IMPLEMENTATION D1-I1 — PROJECT FOUNDATION
- **Gate suivant :** GO VALIDATION D1-I1 — PROJECT FOUNDATION
- **Repo/branche :** mcleland147/sfia-workspace · delivery/sfia-studio-control-tower-fast-track
- **HEAD/base :** 32e5271842b9a344a7e292614675c27ea8ed941b
- **Handoff précédent :** b8b84e70395ce178fa67d5e42bf926bcce103782
- **Baseline :** SFIA v2.6
- **Statut v3 :** V3-MODELED CANDIDATE
- **BCDI :** BCDI-D1-I1-PROJECT-FOUNDATION
- **Statut livraison :** D1-I1 IMPLEMENTED CANDIDATE

## 2. État Git initial / isolation

- Dirty attendu (CT + framing + modeled + design) · staged vide · HEAD=origin/main
- Fichiers OPS1 préexistants **non écrasés** (hors UtilityRail link + playwright reuseExistingServer)
- Diff I1 isolé sous `lib/d1`, `features/d1`, routes workspace/projects, tests, delivery

## 3. Tests

- vitest d1: 7/7 pass
- playwright d1-i1: 6/6 pass
- playwright p0-smoke régression: 6/6 pass
- tsc: pass

## 4. Viewport metrics D1 shell

```json
[
  {
    "w": 1728,
    "inner": 1728,
    "shellW": 1728,
    "scrollW": 1728,
    "unused": 0
  },
  {
    "w": 1440,
    "inner": 1440,
    "shellW": 1440,
    "scrollW": 1440,
    "unused": 0
  },
  {
    "w": 1280,
    "inner": 1280,
    "shellW": 1280,
    "scrollW": 1280,
    "unused": 0
  },
  {
    "w": 1024,
    "inner": 1024,
    "shellW": 1024,
    "scrollW": 1024,
    "unused": 0
  }
]
```

## 5. Figma / runtime comparison

fileKey `IS70XDnBMvZuJYmaI5eZT2`

| Aspect | Runtime I1 | Figma cible | Écart | Verdict |
|--------|------------|-------------|-------|---------|
| Largeur globale | 100% viewport, unused=0 @1728 | shell fluide | conforme | OK |
| Overflow ≥1024 | none | none | conforme | OK |
| Project-first | Workspace/Cockpit | frames 2:2/2:46 | conforme | OK |
| Rail | ContextualRail I1 placeholders | ContextualRail | fidélité moyenne contenu | OK structure |
| Chat centre | absent | absent | conforme | OK |
| Tokens | Studio existants | Figma D1 primitives | non pixel-perfect | accepté |

Captures: `.tmp-sfia-review/screenshots-d1-i1/*.png`

## 6. Fichiers créés/modifiés (liste)

```
projects/sfia-studio/app/__tests__/d1/project-foundation.test.ts
projects/sfia-studio/app/app/projects/[id]/page.tsx
projects/sfia-studio/app/app/projects/new/page.tsx
projects/sfia-studio/app/app/workspace/page.tsx
projects/sfia-studio/app/e2e/d1-i1-project-foundation.spec.ts
projects/sfia-studio/app/features/d1/Badges.tsx
projects/sfia-studio/app/features/d1/ContextualRail.tsx
projects/sfia-studio/app/features/d1/D1AppShell.tsx
projects/sfia-studio/app/features/d1/NewProjectForm.tsx
projects/sfia-studio/app/features/d1/ProjectCockpitView.tsx
projects/sfia-studio/app/features/d1/WorkspaceHomeView.tsx
projects/sfia-studio/app/features/d1/d1-shell.module.css
projects/sfia-studio/app/lib/d1/actions.ts
projects/sfia-studio/app/lib/d1/authz.ts
projects/sfia-studio/app/lib/d1/commands.ts
projects/sfia-studio/app/lib/d1/db.ts
projects/sfia-studio/app/lib/d1/domain.ts
projects/sfia-studio/app/lib/d1/errors.ts
projects/sfia-studio/app/lib/d1/ids.ts
projects/sfia-studio/app/lib/d1/index.ts
projects/sfia-studio/app/lib/d1/observability.ts
projects/sfia-studio/app/lib/d1/paths.ts
projects/sfia-studio/app/lib/d1/repository.ts
projects/sfia-studio/app/lib/d1/types.ts
projects/sfia-studio/sfia-v3-delivery/d1-i1-project-foundation/01-implemented-scope.md
projects/sfia-studio/sfia-v3-delivery/d1-i1-project-foundation/02-technical-implementation.md
projects/sfia-studio/sfia-v3-delivery/d1-i1-project-foundation/03-data-and-audit-implementation.md
projects/sfia-studio/sfia-v3-delivery/d1-i1-project-foundation/04-ux-runtime-validation.md
projects/sfia-studio/sfia-v3-delivery/d1-i1-project-foundation/05-test-results.md
projects/sfia-studio/sfia-v3-delivery/d1-i1-project-foundation/06-known-reserves-and-debt.md
projects/sfia-studio/sfia-v3-delivery/d1-i1-project-foundation/07-d1-i1-validation-decision-pack.md
projects/sfia-studio/sfia-v3-delivery/d1-i1-project-foundation/README.md
projects/sfia-studio/app/components/shell/UtilityRail.tsx
projects/sfia-studio/app/playwright.config.ts
```

## 7. Diff fichiers trackés modifiés

```diff
diff --git a/projects/sfia-studio/app/components/shell/UtilityRail.tsx b/projects/sfia-studio/app/components/shell/UtilityRail.tsx
index 796bb59..c7efe83 100644
--- a/projects/sfia-studio/app/components/shell/UtilityRail.tsx
+++ b/projects/sfia-studio/app/components/shell/UtilityRail.tsx
@@ -66,6 +66,16 @@ export function UtilityRail({ variant, activeRoute }: UtilityRailProps) {

       <div className={styles.spacer} />

+      <Link
+        href="/workspace"
+        className={isFloating ? styles.item : styles.itemFlush}
+        aria-label="Workspace D1"
+        title="Workspace D1-I1"
+        data-testid="rail-d1-workspace"
+      >
+        W
+      </Link>
+
       <div className={isFloating ? styles.avatar : styles.avatarFlush}>MC</div>
     </nav>
   );
diff --git a/projects/sfia-studio/app/playwright.config.ts b/projects/sfia-studio/app/playwright.config.ts
index ddfb29a..3e47483 100644
--- a/projects/sfia-studio/app/playwright.config.ts
+++ b/projects/sfia-studio/app/playwright.config.ts
@@ -18,7 +18,7 @@ export default defineConfig({
   webServer: {
     command: "npm run dev -- --hostname 127.0.0.1 --port 3020",
     url: baseURL,
-    reuseExistingServer: false,
+    reuseExistingServer: !process.env.CI,
     timeout: 180_000,
     env: {
       ...process.env,

```

## 8. Contenu complet des fichiers créés

### `projects/sfia-studio/app/__tests__/d1/project-foundation.test.ts`

```tsx
import { describe, expect, it, beforeEach, afterEach } from "vitest";
import fs from "node:fs";
import os from "node:fs";
import path from "node:path";
import {
  assertMethodMode,
  assertNoForbiddenClaim,
  canActivate,
  validateCreateProjectInput,
} from "@/lib/d1/domain";
import { D1Error } from "@/lib/d1/errors";
import {
  createProject,
  listProjectAudit,
  resetD1DbForTests,
  selectMethodMode,
} from "@/lib/d1/commands";

describe("d1 domain", () => {
  it("accepts authorized method modes", () => {
    expect(assertMethodMode("SFIA_V2_6")).toBe("SFIA_V2_6");
    expect(assertMethodMode("V3_CANDIDATE")).toBe("V3_CANDIDATE");
  });

  it("rejects forbidden claims", () => {
    expect(() => assertNoForbiddenClaim("go V3-ADOPTED now")).toThrow(D1Error);
    expect(() => assertNoForbiddenClaim("V3_IMPLEMENTED")).toThrow(D1Error);
  });

  it("validates create input", () => {
    expect(() =>
      validateCreateProjectInput({
        name: "",
        objective: "x",
        methodMode: "SFIA_V2_6",
        activate: true,
        idempotencyKey: "k",
      }),
    ).toThrow(D1Error);
  });

  it("allows activate only from DRAFT with mode", () => {
    expect(canActivate("DRAFT", "TRANSITION")).toBe(true);
    expect(canActivate("DRAFT", null)).toBe(false);
    expect(canActivate("ACTIVE", "TRANSITION")).toBe(false);
  });
});

describe("d1 repository commands", () => {
  let tmpDir: string;

  beforeEach(() => {
    resetD1DbForTests();
    tmpDir = fs.mkdtempSync(path.join(require("node:os").tmpdir(), "d1-i1-"));
    process.env.D1_SQLITE_PATH = path.join(tmpDir, "d1.sqlite");
  });

  afterEach(() => {
    resetD1DbForTests();
    delete process.env.D1_SQLITE_PATH;
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  it("creates project with audit and mono-operator assignments", () => {
    const { project, idempotent } = createProject({
      name: "Demo Framing",
      objective: "Cadrer D1-I1",
      methodMode: "V3_CANDIDATE",
      activate: true,
      idempotencyKey: "key-1",
    });
    expect(idempotent).toBe(false);
    expect(project.state).toBe("ACTIVE");
    expect(project.methodMode).toBe("V3_CANDIDATE");
    const audit = listProjectAudit(project.projectId);
    const types = audit.map((e) => e.eventType);
    expect(types).toContain("PROJECT_CREATED");
    expect(types).toContain("PROJECT_MODE_SELECTED");
    expect(types).toContain("PROJECT_ACTIVATED");
  });

  it("is idempotent on duplicate key", () => {
    const a = createProject({
      name: "Idem",
      objective: "same",
      methodMode: "SFIA_V2_6",
      activate: false,
      idempotencyKey: "key-dup",
    });
    const b = createProject({
      name: "Idem changed",
      objective: "different",
      methodMode: "TRANSITION",
      activate: true,
      idempotencyKey: "key-dup",
    });
    expect(b.idempotent).toBe(true);
    expect(b.project.projectId).toBe(a.project.projectId);
    expect(b.project.name).toBe("Idem");
  });

  it("selects method mode with optimistic locking", () => {
    const { project } = createProject({
      name: "Mode",
      objective: "switch",
      methodMode: "SFIA_V2_6",
      activate: false,
      idempotencyKey: "key-mode",
    });
    const updated = selectMethodMode({
      projectId: project.projectId,
      methodMode: "TRANSITION",
      expectedVersion: project.version,
      activate: true,
    });
    expect(updated.methodMode).toBe("TRANSITION");
    expect(updated.state).toBe("ACTIVE");
    expect(updated.version).toBe(project.version + 1);
    expect(() =>
      selectMethodMode({
        projectId: project.projectId,
        methodMode: "V3_CANDIDATE",
        expectedVersion: project.version,
      }),
    ).toThrow(D1Error);
  });
});
```
### `projects/sfia-studio/app/app/projects/[id]/page.tsx`

```tsx
import { notFound } from "next/navigation";
import { getProject, listProjectAudit } from "@/lib/d1/commands";
import { D1Error } from "@/lib/d1/errors";
import { ProjectCockpitView } from "@/features/d1/ProjectCockpitView";

export const dynamic = "force-dynamic";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  try {
    const project = getProject(id);
    const audit = listProjectAudit(id);
    return <ProjectCockpitView project={project} audit={audit} />;
  } catch (error) {
    if (error instanceof D1Error && error.code === "NOT_FOUND") {
      notFound();
    }
    throw error;
  }
}
```
### `projects/sfia-studio/app/app/projects/new/page.tsx`

```tsx
import { NewProjectForm } from "@/features/d1/NewProjectForm";

export default function NewProjectPage() {
  return <NewProjectForm />;
}
```
### `projects/sfia-studio/app/app/workspace/page.tsx`

```tsx
import { listWorkspaceProjects } from "@/lib/d1/commands";
import { D1Error } from "@/lib/d1/errors";
import { WorkspaceHomeView } from "@/features/d1/WorkspaceHomeView";

export const dynamic = "force-dynamic";

export default function WorkspacePage() {
  try {
    const projects = listWorkspaceProjects();
    return <WorkspaceHomeView projects={projects} />;
  } catch (error) {
    const message =
      error instanceof D1Error ? error.message : "Erreur de chargement workspace";
    return <WorkspaceHomeView projects={[]} error={message} />;
  }
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
      page.getByRole("heading", { name: "Nouveau projet", level: 1 }),
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
    await page.getByTestId("project-method-mode").selectOption("V3_CANDIDATE");
    await page.getByTestId("project-submit").click();

    await expect(page).toHaveURL(/\/projects\/proj-/);
    await expect(page.getByTestId("project-title")).toHaveText(
      "Projet D1-I1 E2E",
    );
    await expect(page.getByTestId("project-state-badge")).toContainText(
      "ACTIVE",
    );
    await expect(page.getByTestId("audit-timeline")).toContainText(
      "PROJECT_CREATED",
    );
    await expect(page.getByTestId("audit-timeline")).toContainText(
      "PROJECT_MODE_SELECTED",
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

  test("legacy /nouvelle-demande remains accessible", async ({ page }) => {
    await page.goto("/nouvelle-demande");
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

      // cockpit if any project exists — open new then capture
      await page.goto("/projects/new");
      await page.getByTestId("project-name").fill(`Overflow ${width}`);
      await page.getByTestId("project-objective").fill("Responsive check");
      await page.getByTestId("project-method-mode").selectOption("SFIA_V2_6");
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
### `projects/sfia-studio/app/features/d1/Badges.tsx`

```tsx
import {
  METHOD_MODE_LABELS,
  type MethodMode,
  type ProjectState,
} from "@/lib/d1/types";
import styles from "./d1-shell.module.css";

export function MethodModeBadge({ mode }: { mode: MethodMode | null }) {
  if (!mode) {
    return (
      <span className={`${styles.badge} ${styles.badgeWarn}`} data-testid="method-mode-badge">
        MethodMode non sélectionné
      </span>
    );
  }
  return (
    <span className={`${styles.badge} ${styles.badgeMode}`} data-testid="method-mode-badge">
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
            ? "Sélectionner / confirmer MethodMode puis activer"
            : "Ouvrir un cycle (D1-I2 — non implémenté)"}
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
### `projects/sfia-studio/app/features/d1/D1AppShell.tsx`

```tsx
import Link from "next/link";
import styles from "./d1-shell.module.css";

export type D1Route = "/workspace" | "/projects/new" | `/projects/${string}`;

interface D1AppShellProps {
  active: "workspace" | "new" | "cockpit";
  title: string;
  children: React.ReactNode;
  rail?: React.ReactNode;
}

export function D1AppShell({ active, title, children, rail }: D1AppShellProps) {
  return (
    <div className={styles.shell} data-testid="d1-app-shell">
      <nav className={styles.nav} aria-label="Navigation D1">
        <Link
          href="/workspace"
          className={styles.navLink}
          aria-label="Workspace"
          aria-current={active === "workspace" ? "page" : undefined}
          title="Workspace"
        >
          WS
        </Link>
        <Link
          href="/projects/new"
          className={styles.navLink}
          aria-label="Nouveau projet"
          aria-current={active === "new" ? "page" : undefined}
          title="Nouveau projet"
        >
          +
        </Link>
        <Link
          href="/nouvelle-demande"
          className={styles.navLink}
          aria-label="Legacy OPS1 Nouvelle demande"
          title="Legacy OPS1"
        >
          OPS
        </Link>
      </nav>
      <main className={styles.main} id="main-content" aria-label={title}>
        {children}
        {rail ? (
          <aside className={styles.railStacked} aria-label="Contexte projet">
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
            <strong>I1</strong>
            <p className={styles.placeholder}>
              Context / Reserves / Decisions — placeholders (non implémentés)
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
import {
  METHOD_MODE_CLAIMS,
  METHOD_MODE_LABELS,
  METHOD_MODES,
  type MethodMode,
} from "@/lib/d1/types";
import { D1AppShell } from "./D1AppShell";
import styles from "./d1-shell.module.css";

export function NewProjectForm() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [name, setName] = useState("");
  const [objective, setObjective] = useState("");
  const [context, setContext] = useState("");
  const [methodMode, setMethodMode] = useState<MethodMode>("SFIA_V2_6");
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
        methodMode,
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
    <D1AppShell active="new" title="Nouveau projet">
      <div className={styles.header}>
        <h1>Nouveau projet</h1>
      </div>
      <p className={styles.hint}>
        Parcours court doctrinal · max 6 étapes · mono-opérateur I1
      </p>
      <form className={`${styles.card} ${styles.form}`} onSubmit={onSubmit} noValidate>
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
          <span className={styles.hint}>Léger — cadrage détaillé = cycles futurs</span>
          <textarea
            className={styles.textarea}
            name="context"
            value={context}
            onChange={(e) => setContext(e.target.value)}
            data-testid="project-context"
          />
        </label>
        <label className={styles.label}>
          4. MethodMode
          <select
            className={styles.select}
            value={methodMode}
            onChange={(e) => setMethodMode(e.target.value as MethodMode)}
            data-testid="project-method-mode"
          >
            {METHOD_MODES.map((m) => (
              <option key={m} value={m}>
                {METHOD_MODE_LABELS[m]}
              </option>
            ))}
          </select>
          <span className={styles.hint}>{METHOD_MODE_CLAIMS[methodMode]}</span>
        </label>
        <label className={styles.label}>
          5. Responsable / décideur
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
          6. Activer immédiatement (ACTIVE) après création
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

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { actionSelectMethodMode } from "@/lib/d1/actions";
import type { D1AuditEvent, D1Project, MethodMode } from "@/lib/d1/types";
import {
  METHOD_MODE_CLAIMS,
  METHOD_MODE_LABELS,
  METHOD_MODES,
} from "@/lib/d1/types";
import { D1AppShell } from "./D1AppShell";
import { MethodModeBadge, ProjectStateBadge } from "./Badges";
import { ContextualRailI1 } from "./ContextualRail";
import styles from "./d1-shell.module.css";

export function ProjectCockpitView({
  project: initial,
  audit: initialAudit,
}: {
  project: D1Project;
  audit: D1AuditEvent[];
}) {
  const router = useRouter();
  const [project, setProject] = useState(initial);
  const [audit, setAudit] = useState(initialAudit);
  const [mode, setMode] = useState<MethodMode>(
    initial.methodMode ?? "SFIA_V2_6",
  );
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const rail = <ContextualRailI1 project={project} audit={audit} />;

  function onSaveMode(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    startTransition(async () => {
      const result = await actionSelectMethodMode({
        projectId: project.projectId,
        methodMode: mode,
        expectedVersion: project.version,
        activate: true,
      });
      if (!result.ok) {
        setError(result.message);
        return;
      }
      setProject(result.project);
      router.refresh();
    });
  }

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
          Placeholder I1 — ProjectTrajectory détaillée hors scope (cycles futurs).
        </p>
      </section>

      <section className={styles.card}>
        <h2>Prochaine action</h2>
        <p>
          {project.state === "ACTIVE"
            ? "Ouvrir un CycleInstance de cadrage (D1-I2 — non disponible)."
            : "Confirmer MethodMode et activer le projet."}
        </p>
      </section>

      <section className={styles.card}>
        <h2>MethodMode</h2>
        <form className={styles.form} onSubmit={onSaveMode}>
          <label className={styles.label}>
            Sélection
            <select
              className={styles.select}
              value={mode}
              onChange={(e) => setMode(e.target.value as MethodMode)}
              data-testid="cockpit-method-mode"
            >
              {METHOD_MODES.map((m) => (
                <option key={m} value={m}>
                  {METHOD_MODE_LABELS[m]}
                </option>
              ))}
            </select>
            <span className={styles.hint}>{METHOD_MODE_CLAIMS[mode]}</span>
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
            data-testid="cockpit-save-mode"
          >
            Enregistrer le mode
          </button>
        </form>
      </section>

      <section className={styles.card} data-testid="audit-timeline">
        <h2>Audit récent</h2>
        <ul className={styles.list}>
          {audit.map((e) => (
            <li key={e.eventId}>
              <strong>{e.eventType}</strong>
              <p className={styles.hint}>
                {e.occurredAt} · {e.correlationId}
              </p>
            </li>
          ))}
        </ul>
        {!audit.length ? (
          <p className={styles.placeholder}>Aucun événement</p>
        ) : null}
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
        <Link className={styles.cta} href="/projects/new" data-testid="cta-new-project">
          Nouveau projet
        </Link>
      </div>
      <p className={styles.hint}>
        Parcours D1-I1 Project-first · baseline SFIA v2.6 · v3 reste candidate
      </p>
      {error ? (
        <p className={styles.error} role="alert">
          {error}
        </p>
      ) : null}
      {projects.length === 0 ? (
        <div className={`${styles.card} ${styles.empty}`} data-testid="workspace-empty">
          <h2>Aucun projet</h2>
          <p className={styles.hint}>
            Créez le premier projet pour démarrer le cadrage Project-first.
          </p>
          <Link className={styles.cta} href="/projects/new">
            Créer un projet
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
### `projects/sfia-studio/app/features/d1/d1-shell.module.css`

```css
.shell {
  display: grid;
  grid-template-columns:
    var(--d1-nav-width, 72px)
    minmax(0, 1fr)
    clamp(320px, 24vw, 420px);
  width: 100%;
  min-height: 100dvh;
  background: var(--sfia-bg);
  color: var(--sfia-ink);
  font-family: var(--font-inter), system-ui, sans-serif;
  box-sizing: border-box;
  gap: 0;
}

.nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 16px 8px;
  background: #fff;
  border-right: 1px solid var(--sfia-border);
}

.navLink {
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  color: var(--sfia-muted);
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
}

.navLink[aria-current="page"] {
  background: var(--sfia-blue-soft);
  color: var(--sfia-blue);
}

.main {
  min-width: 0;
  padding: 24px 32px;
  overflow: auto;
}

.rail {
  min-width: 0;
  border-left: 1px solid var(--sfia-border);
  background: #fff;
  padding: 20px 16px;
  overflow: auto;
}

.rail h2 {
  margin: 0 0 12px;
  font-size: 14px;
  font-weight: 700;
}

.railCard {
  border: 1px solid var(--sfia-border);
  border-radius: 10px;
  padding: 12px;
  margin-bottom: 10px;
  background: var(--sfia-surface);
}

.railCard p {
  margin: 4px 0 0;
  font-size: 13px;
  color: var(--sfia-muted);
}

.placeholder {
  color: var(--sfia-muted);
  font-style: italic;
  font-size: 13px;
}

.header {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  margin-bottom: 20px;
}

.header h1 {
  margin: 0;
  font-size: 28px;
  line-height: 1.2;
}

.badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border-radius: 999px;
  padding: 4px 10px;
  font-size: 12px;
  font-weight: 600;
  border: 1px solid transparent;
}

.badgeMode {
  background: var(--sfia-blue-soft);
  color: var(--sfia-blue);
  border-color: #c9d6ff;
}

.badgeState {
  background: var(--sfia-green-soft-00c, #e5faf2);
  color: #0f7a52;
  border-color: #b6ebd6;
}

.badgeWarn {
  background: var(--sfia-orange-soft-00c, #fff7e0);
  color: #8a5a00;
}

.card {
  background: #fff;
  border: 1px solid var(--sfia-border);
  border-radius: 14px;
  padding: 20px;
  box-shadow: var(--sfia-shadow-sm);
  margin-bottom: 16px;
}

.list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 10px;
}

.list a {
  display: block;
  text-decoration: none;
  color: inherit;
  border: 1px solid var(--sfia-border);
  border-radius: 12px;
  padding: 14px 16px;
  background: #fff;
}

.list a:hover,
.list a:focus-visible {
  outline: 2px solid var(--sfia-blue);
  outline-offset: 2px;
}

.cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 18px;
  border-radius: 10px;
  border: none;
  background: var(--sfia-blue);
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
}

.ctaSecondary {
  background: #fff;
  color: var(--sfia-blue);
  border: 1px solid var(--sfia-border);
}

.form {
  display: grid;
  gap: 14px;
  max-width: 42rem;
}

.label {
  display: grid;
  gap: 6px;
  font-weight: 600;
  font-size: 14px;
}

.input,
.textarea,
.select {
  width: 100%;
  box-sizing: border-box;
  border: 1px solid var(--sfia-border);
  border-radius: 10px;
  padding: 10px 12px;
  font: inherit;
  min-height: 44px;
}

.textarea {
  min-height: 96px;
  resize: vertical;
}

.error {
  color: #a11;
  font-size: 13px;
  font-weight: 600;
}

.hint {
  font-size: 13px;
  color: var(--sfia-muted);
  font-weight: 400;
}

.empty {
  padding: 28px;
  text-align: left;
}

.monoNote {
  font-size: 12px;
  color: var(--sfia-muted);
  margin-top: 8px;
}

@media (max-width: 1279px) {
  .shell {
    grid-template-columns:
      var(--d1-nav-width, 72px)
      minmax(0, 1fr);
  }

  .rail {
    display: none;
  }

  .railStacked {
    display: block;
    margin-top: 16px;
  }
}

@media (min-width: 1280px) {
  .railStacked {
    display: none;
  }
}

@media (max-width: 1099px) {
  .main {
    padding: 16px;
  }
}
```
### `projects/sfia-studio/app/lib/d1/actions.ts`

```tsx
"use server";

import {
  createProject,
  getProject,
  listProjectAudit,
  listWorkspaceProjects,
  selectMethodMode,
} from "./commands";
import { D1Error } from "./errors";
import type { CreateProjectInput, MethodMode, SelectMethodModeInput } from "./types";

function serializeError(error: unknown): { ok: false; code: string; message: string } {
  if (error instanceof D1Error) {
    return { ok: false, code: error.code, message: error.message };
  }
  return {
    ok: false,
    code: "UNKNOWN",
    message: error instanceof Error ? error.message : "Erreur inconnue",
  };
}

export async function actionCreateProject(input: CreateProjectInput) {
  try {
    const result = createProject(input);
    return { ok: true as const, ...result };
  } catch (error) {
    return serializeError(error);
  }
}

export async function actionSelectMethodMode(input: SelectMethodModeInput) {
  try {
    const project = selectMethodMode(input);
    return { ok: true as const, project };
  } catch (error) {
    return serializeError(error);
  }
}

export async function actionListProjects() {
  try {
    const projects = listWorkspaceProjects();
    return { ok: true as const, projects };
  } catch (error) {
    return serializeError(error);
  }
}

export async function actionGetProject(projectId: string) {
  try {
    const project = getProject(projectId);
    const audit = listProjectAudit(projectId);
    return { ok: true as const, project, audit };
  } catch (error) {
    return serializeError(error);
  }
}

export type { MethodMode };
```
### `projects/sfia-studio/app/lib/d1/authz.ts`

```tsx
import {
  D1_MONO_OPERATOR_ACTOR_ID,
  type D1Project,
} from "./types";
import { D1Error } from "./errors";

/** I1 AuthZ stub: single operator owns all actions. */
export function requireMonoOperator(actorId = D1_MONO_OPERATOR_ACTOR_ID): string {
  if (actorId !== D1_MONO_OPERATOR_ACTOR_ID) {
    throw new D1Error(
      "UNAUTHORIZED",
      "D1-I1 mono-opérateur uniquement (actor-mono-i1).",
    );
  }
  return actorId;
}

export function assertProjectOwner(
  project: D1Project,
  actorId = D1_MONO_OPERATOR_ACTOR_ID,
): void {
  requireMonoOperator(actorId);
  if (project.ownerActorId !== actorId) {
    throw new D1Error("UNAUTHORIZED", "Acteur non propriétaire du projet.");
  }
}
```
### `projects/sfia-studio/app/lib/d1/commands.ts`

```tsx
import { D1ProjectRepository } from "./repository";
import { openD1Db, nowIso, resetD1DbForTests } from "./db";
import { createAuditEventId, createCorrelationId, createProjectId } from "./ids";
import { validateCreateProjectInput, assertMethodMode } from "./domain";
import { requireMonoOperator } from "./authz";
import { D1Error } from "./errors";
import {
  D1_DEFAULT_WORKSPACE_ID,
  D1_MONO_OPERATOR_ACTOR_ID,
  type CreateProjectInput,
  type D1Project,
  type SelectMethodModeInput,
} from "./types";
import { logD1 } from "./observability";

export { resetD1DbForTests };

export interface CreateProjectResult {
  project: D1Project;
  idempotent: boolean;
}

export function createProject(
  input: CreateProjectInput,
  repo = new D1ProjectRepository(openD1Db()),
): CreateProjectResult {
  const started = Date.now();
  try {
    validateCreateProjectInput(input);
    const actorId = requireMonoOperator();

    const cached = repo.getIdempotentResponse(input.idempotencyKey.trim());
    if (cached) {
      const parsed = JSON.parse(cached) as { project: D1Project };
      logD1("project_create", {
        status: "idempotent",
        projectId: parsed.project.projectId,
        durationMs: Date.now() - started,
      });
      return { project: parsed.project, idempotent: true };
    }

    const correlationId = input.correlationId?.trim() || createCorrelationId();
    const ts = nowIso();
    const projectId = createProjectId();
    const state = input.activate ? "ACTIVE" : "DRAFT";
    const project: D1Project = {
      projectId,
      workspaceId: D1_DEFAULT_WORKSPACE_ID,
      name: input.name.trim(),
      objective: input.objective.trim(),
      initialContextSummary: input.initialContextSummary?.trim() || null,
      methodMode: input.methodMode,
      state,
      ownerActorId: actorId,
      createdAt: ts,
      updatedAt: ts,
      version: 1,
    };

    const events: Array<{
      eventId: string;
      eventType: "PROJECT_CREATED" | "PROJECT_MODE_SELECTED" | "PROJECT_ACTIVATED";
      actorId: string;
      correlationId: string;
      payload: Record<string, unknown>;
    }> = [
      {
        eventId: createAuditEventId(),
        eventType: "PROJECT_CREATED",
        actorId,
        correlationId,
        payload: {
          name: project.name,
          methodMode: project.methodMode,
          state: project.state,
          monoOperator: true,
        },
      },
      {
        eventId: createAuditEventId(),
        eventType: "PROJECT_MODE_SELECTED",
        actorId,
        correlationId,
        payload: { methodMode: project.methodMode },
      },
    ];
    if (state === "ACTIVE") {
      events.push({
        eventId: createAuditEventId(),
        eventType: "PROJECT_ACTIVATED",
        actorId,
        correlationId,
        payload: { from: "DRAFT", to: "ACTIVE" },
      });
    }

    const responseJson = JSON.stringify({ project });
    const outcome = repo.createProjectAtomic({
      project,
      assignments: [
        {
          principalId: actorId,
          projectId,
          role: "project_owner",
          createdAt: ts,
        },
        {
          principalId: actorId,
          projectId,
          role: "decision_maker",
          createdAt: ts,
        },
      ],
      events,
      idempotencyKey: input.idempotencyKey.trim(),
      responseJson,
    });

    if (outcome.kind === "idempotent") {
      const parsed = JSON.parse(outcome.responseJson) as { project: D1Project };
      logD1("project_create", {
        status: "idempotent",
        projectId: parsed.project.projectId,
        durationMs: Date.now() - started,
      });
      return { project: parsed.project, idempotent: true };
    }

    logD1("project_create", {
      status: "ok",
      projectId,
      durationMs: Date.now() - started,
    });
    return { project, idempotent: false };
  } catch (error) {
    logD1("project_create", {
      status: "failed",
      durationMs: Date.now() - started,
      errorCode: error instanceof D1Error ? error.code : "UNKNOWN",
    });
    throw error;
  }
}

export function selectMethodMode(
  input: SelectMethodModeInput,
  repo = new D1ProjectRepository(openD1Db()),
): D1Project {
  const started = Date.now();
  try {
    const actorId = requireMonoOperator();
    assertMethodMode(input.methodMode);
    const current = repo.getProject(input.projectId);
    if (!current) {
      throw new D1Error("NOT_FOUND", "Projet introuvable.");
    }
    if (current.ownerActorId !== actorId) {
      throw new D1Error("UNAUTHORIZED", "Acteur non propriétaire.");
    }

    const activate = input.activate !== false;
    const nextState =
      activate && input.methodMode ? "ACTIVE" : current.state === "ACTIVE" ? "ACTIVE" : "DRAFT";

    const updated = repo.selectMethodModeAtomic({
      projectId: input.projectId,
      methodMode: input.methodMode,
      expectedVersion: input.expectedVersion,
      nextState,
      actorId,
      correlationId: input.correlationId?.trim() || createCorrelationId(),
      eventIds: {
        mode: createAuditEventId(),
        activated:
          nextState === "ACTIVE" && current.state !== "ACTIVE"
            ? createAuditEventId()
            : undefined,
      },
    });

    logD1("method_mode_selected", {
      status: "ok",
      projectId: updated.projectId,
      durationMs: Date.now() - started,
    });
    return updated;
  } catch (error) {
    logD1("method_mode_selected", {
      status: "failed",
      durationMs: Date.now() - started,
      errorCode: error instanceof D1Error ? error.code : "UNKNOWN",
    });
    throw error;
  }
}

export function listWorkspaceProjects(
  workspaceId = D1_DEFAULT_WORKSPACE_ID,
  repo = new D1ProjectRepository(openD1Db()),
): D1Project[] {
  requireMonoOperator();
  return repo.listProjects(workspaceId);
}

export function getProject(
  projectId: string,
  repo = new D1ProjectRepository(openD1Db()),
): D1Project {
  requireMonoOperator();
  const project = repo.getProject(projectId);
  if (!project) {
    throw new D1Error("NOT_FOUND", "Projet introuvable.");
  }
  return project;
}

export function listProjectAudit(
  projectId: string,
  repo = new D1ProjectRepository(openD1Db()),
) {
  requireMonoOperator();
  return repo.listAuditEvents(projectId);
}

export { D1_MONO_OPERATOR_ACTOR_ID };
```
### `projects/sfia-studio/app/lib/d1/db.ts`

```tsx
import { DatabaseSync } from "node:sqlite";
import { resolveD1SqlitePath } from "./paths";
import { D1Error } from "./errors";

const SCHEMA_SQL = `
PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS d1_projects (
  project_id TEXT PRIMARY KEY NOT NULL,
  workspace_id TEXT NOT NULL,
  name TEXT NOT NULL,
  objective TEXT NOT NULL,
  initial_context_summary TEXT,
  method_mode TEXT CHECK (
    method_mode IS NULL OR method_mode IN ('SFIA_V2_6', 'TRANSITION', 'V3_CANDIDATE')
  ),
  state TEXT NOT NULL CHECK (state IN ('DRAFT', 'ACTIVE')),
  owner_actor_id TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  version INTEGER NOT NULL DEFAULT 1
);

CREATE TABLE IF NOT EXISTS d1_assignments (
  principal_id TEXT NOT NULL,
  project_id TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('project_owner', 'decision_maker')),
  created_at TEXT NOT NULL,
  PRIMARY KEY (principal_id, project_id, role),
  FOREIGN KEY (project_id) REFERENCES d1_projects(project_id)
);

CREATE TABLE IF NOT EXISTS d1_audit_events (
  event_id TEXT PRIMARY KEY NOT NULL,
  event_type TEXT NOT NULL CHECK (
    event_type IN ('PROJECT_CREATED', 'PROJECT_MODE_SELECTED', 'PROJECT_ACTIVATED')
  ),
  occurred_at TEXT NOT NULL,
  actor_id TEXT NOT NULL,
  correlation_id TEXT NOT NULL,
  project_id TEXT NOT NULL,
  payload_json TEXT NOT NULL,
  FOREIGN KEY (project_id) REFERENCES d1_projects(project_id)
);

CREATE TABLE IF NOT EXISTS d1_idempotency_keys (
  idempotency_key TEXT PRIMARY KEY NOT NULL,
  command TEXT NOT NULL,
  response_json TEXT NOT NULL,
  created_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_d1_projects_workspace
  ON d1_projects(workspace_id, state);
CREATE INDEX IF NOT EXISTS idx_d1_audit_project
  ON d1_audit_events(project_id, occurred_at);
`;

let singleton: DatabaseSync | null = null;
let singletonPath: string | null = null;

function migrate(db: DatabaseSync): void {
  db.exec(SCHEMA_SQL);
  const integrity = db.prepare("PRAGMA integrity_check").get() as
    | Record<string, string>
    | undefined;
  const raw = integrity ? String(Object.values(integrity)[0] ?? "") : "";
  if (raw !== "ok") {
    throw new D1Error("PERSISTENCE", "Intégrité SQLite D1 invalide.");
  }
}

export function openD1Db(dbPath = resolveD1SqlitePath()): DatabaseSync {
  if (singleton && singletonPath === dbPath) {
    return singleton;
  }
  if (singleton) {
    try {
      singleton.close();
    } catch {
      /* ignore */
    }
    singleton = null;
    singletonPath = null;
  }
  try {
    const db = new DatabaseSync(dbPath);
    migrate(db);
    singleton = db;
    singletonPath = dbPath;
    return db;
  } catch (error) {
    if (error instanceof D1Error) throw error;
    throw new D1Error("PERSISTENCE", "Impossible d’ouvrir SQLite D1.", error);
  }
}

export function resetD1DbForTests(): void {
  if (singleton) {
    try {
      singleton.close();
    } catch {
      /* ignore */
    }
  }
  singleton = null;
  singletonPath = null;
}

export function nowIso(): string {
  return new Date().toISOString();
}
```
### `projects/sfia-studio/app/lib/d1/domain.ts`

```tsx
import {
  METHOD_MODES,
  type CreateProjectInput,
  type MethodMode,
  type ProjectState,
} from "./types";
import { D1Error } from "./errors";

const FORBIDDEN_CLAIMS = [
  "V3-ADOPTED",
  "V3-IMPLEMENTED",
  "V3_ADOPTED",
  "V3_IMPLEMENTED",
] as const;

export function assertMethodMode(value: string): MethodMode {
  if (!(METHOD_MODES as readonly string[]).includes(value)) {
    throw new D1Error("VALIDATION", `MethodMode invalide: ${value}`);
  }
  return value as MethodMode;
}

export function assertNoForbiddenClaim(text: string): void {
  const upper = text.toUpperCase();
  for (const claim of FORBIDDEN_CLAIMS) {
    if (upper.includes(claim.replace("-", "_")) || upper.includes(claim)) {
      throw new D1Error(
        "CLAIM_FORBIDDEN",
        `Claim interdit en D1-I1: ${claim}. Seul V3_CANDIDATE est autorisé.`,
      );
    }
  }
}

export function validateCreateProjectInput(input: CreateProjectInput): void {
  const name = input.name?.trim() ?? "";
  const objective = input.objective?.trim() ?? "";
  if (!name || name.length > 200) {
    throw new D1Error("VALIDATION", "Le nom du projet est requis (max 200).");
  }
  if (!objective || objective.length > 2000) {
    throw new D1Error("VALIDATION", "L’objectif est requis (max 2000).");
  }
  if (input.initialContextSummary && input.initialContextSummary.length > 4000) {
    throw new D1Error("VALIDATION", "Contexte initial trop long (max 4000).");
  }
  assertMethodMode(input.methodMode);
  assertNoForbiddenClaim(name);
  assertNoForbiddenClaim(objective);
  if (input.initialContextSummary) {
    assertNoForbiddenClaim(input.initialContextSummary);
  }
  if (!input.idempotencyKey?.trim()) {
    throw new D1Error("VALIDATION", "idempotencyKey requis.");
  }
}

/** DRAFT → ACTIVE only when methodMode is set. */
export function canActivate(
  state: ProjectState,
  methodMode: MethodMode | null,
): boolean {
  return state === "DRAFT" && methodMode != null;
}

export function nextStateAfterCreate(activate: boolean): ProjectState {
  return activate ? "ACTIVE" : "DRAFT";
}
```
### `projects/sfia-studio/app/lib/d1/errors.ts`

```tsx
export type D1ErrorCode =
  | "VALIDATION"
  | "NOT_FOUND"
  | "CONFLICT"
  | "UNAUTHORIZED"
  | "IDEMPOTENCY"
  | "PERSISTENCE"
  | "CLAIM_FORBIDDEN";

export class D1Error extends Error {
  readonly code: D1ErrorCode;
  readonly cause?: unknown;

  constructor(code: D1ErrorCode, message: string, cause?: unknown) {
    super(message);
    this.name = "D1Error";
    this.code = code;
    this.cause = cause;
  }
}
```
### `projects/sfia-studio/app/lib/d1/ids.ts`

```tsx
import { randomUUID } from "node:crypto";

export function createProjectId(): string {
  return `proj-${randomUUID()}`;
}

export function createAuditEventId(): string {
  return `d1-evt-${randomUUID()}`;
}

export function createCorrelationId(): string {
  return `corr-${randomUUID()}`;
}
```
### `projects/sfia-studio/app/lib/d1/index.ts`

```tsx
export * from "./types";
export * from "./commands";
export * from "./errors";
export { resetD1DbForTests } from "./db";
```
### `projects/sfia-studio/app/lib/d1/observability.ts`

```tsx
/** Structured logs for D1-I1 SLI candidates (no contract SLO). */

export function logD1(
  event: string,
  fields: Record<string, string | number | boolean | undefined>,
): void {
  const payload = {
    event: `d1.${event}`,
    ts: new Date().toISOString(),
    ...fields,
  };
  // eslint-disable-next-line no-console
  console.info(JSON.stringify(payload));
}
```
### `projects/sfia-studio/app/lib/d1/paths.ts`

```tsx
import fs from "node:fs";
import path from "node:path";
import { D1Error } from "./errors";

/**
 * D1 SQLite lives beside OPS1 under .sfia-exec — separate file to avoid
 * colliding with OPS1 migrations. Override: D1_SQLITE_PATH or OPS1_EXEC_ROOT.
 */
export function resolveD1SqlitePath(): string {
  const explicit = process.env.D1_SQLITE_PATH?.trim();
  if (explicit) {
    const resolved = path.resolve(explicit);
    ensureDir(path.dirname(resolved));
    return resolved;
  }

  const override = process.env.OPS1_EXEC_ROOT?.trim();
  if (override) {
    const stateDir = path.join(path.resolve(override), "state");
    ensureDir(stateDir);
    return path.join(stateDir, "d1.sqlite");
  }

  const studioRoot = path.resolve(process.cwd(), "..");
  const stateDir = path.join(studioRoot, ".sfia-exec", "local-i1", "state");
  ensureDir(stateDir);
  const dbPath = path.join(stateDir, "d1.sqlite");
  const execBase = path.resolve(studioRoot, ".sfia-exec");
  if (!dbPath.startsWith(execBase + path.sep)) {
    throw new D1Error("PERSISTENCE", "Chemin SQLite D1 hors .sfia-exec.");
  }
  return dbPath;
}

function ensureDir(dir: string): void {
  fs.mkdirSync(dir, { recursive: true });
}
```
### `projects/sfia-studio/app/lib/d1/repository.ts`

```tsx
import type { DatabaseSync } from "node:sqlite";
import { openD1Db, nowIso } from "./db";
import { D1Error } from "./errors";
import type {
  D1Assignment,
  D1AuditEvent,
  D1AuditEventType,
  D1Project,
  MethodMode,
  ProjectState,
} from "./types";

function mapProject(row: Record<string, unknown>): D1Project {
  return {
    projectId: String(row.project_id),
    workspaceId: String(row.workspace_id),
    name: String(row.name),
    objective: String(row.objective),
    initialContextSummary: row.initial_context_summary
      ? String(row.initial_context_summary)
      : null,
    methodMode: row.method_mode ? (String(row.method_mode) as MethodMode) : null,
    state: String(row.state) as ProjectState,
    ownerActorId: String(row.owner_actor_id),
    createdAt: String(row.created_at),
    updatedAt: String(row.updated_at),
    version: Number(row.version),
  };
}

export class D1ProjectRepository {
  constructor(private readonly db: DatabaseSync = openD1Db()) {}

  listProjects(workspaceId: string): D1Project[] {
    const rows = this.db
      .prepare(
        `SELECT * FROM d1_projects
         WHERE workspace_id = ?
         ORDER BY updated_at DESC`,
      )
      .all(workspaceId) as Record<string, unknown>[];
    return rows.map(mapProject);
  }

  getProject(projectId: string): D1Project | null {
    const row = this.db
      .prepare(`SELECT * FROM d1_projects WHERE project_id = ?`)
      .get(projectId) as Record<string, unknown> | undefined;
    return row ? mapProject(row) : null;
  }

  getIdempotentResponse(key: string): string | null {
    const row = this.db
      .prepare(
        `SELECT response_json FROM d1_idempotency_keys WHERE idempotency_key = ?`,
      )
      .get(key) as { response_json?: string } | undefined;
    return row?.response_json ?? null;
  }

  listAuditEvents(projectId: string, limit = 20): D1AuditEvent[] {
    const rows = this.db
      .prepare(
        `SELECT * FROM d1_audit_events
         WHERE project_id = ?
         ORDER BY occurred_at DESC
         LIMIT ?`,
      )
      .all(projectId, limit) as Record<string, unknown>[];
    return rows.map((row) => ({
      eventId: String(row.event_id),
      eventType: String(row.event_type) as D1AuditEventType,
      occurredAt: String(row.occurred_at),
      actorId: String(row.actor_id),
      correlationId: String(row.correlation_id),
      projectId: String(row.project_id),
      payloadJson: String(row.payload_json),
    }));
  }

  /**
   * Atomic CreateProject: project + dual assignment (owner+decideur mono-op) + audits + idempotency.
   */
  createProjectAtomic(args: {
    project: D1Project;
    assignments: D1Assignment[];
    events: Array<{
      eventId: string;
      eventType: D1AuditEventType;
      actorId: string;
      correlationId: string;
      payload: Record<string, unknown>;
    }>;
    idempotencyKey: string;
    responseJson: string;
  }): { kind: "created" } | { kind: "idempotent"; responseJson: string } {
    this.db.exec("BEGIN IMMEDIATE");
    try {
      const existing = this.getIdempotentResponse(args.idempotencyKey);
      if (existing) {
        this.db.exec("ROLLBACK");
        return { kind: "idempotent", responseJson: existing };
      }

      this.db
        .prepare(
          `INSERT INTO d1_projects (
            project_id, workspace_id, name, objective, initial_context_summary,
            method_mode, state, owner_actor_id, created_at, updated_at, version
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        )
        .run(
          args.project.projectId,
          args.project.workspaceId,
          args.project.name,
          args.project.objective,
          args.project.initialContextSummary,
          args.project.methodMode,
          args.project.state,
          args.project.ownerActorId,
          args.project.createdAt,
          args.project.updatedAt,
          args.project.version,
        );

      const assignStmt = this.db.prepare(
        `INSERT INTO d1_assignments (principal_id, project_id, role, created_at)
         VALUES (?, ?, ?, ?)`,
      );
      for (const a of args.assignments) {
        assignStmt.run(a.principalId, a.projectId, a.role, a.createdAt);
      }

      const evtStmt = this.db.prepare(
        `INSERT INTO d1_audit_events (
          event_id, event_type, occurred_at, actor_id, correlation_id, project_id, payload_json
        ) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      );
      for (const e of args.events) {
        evtStmt.run(
          e.eventId,
          e.eventType,
          nowIso(),
          e.actorId,
          e.correlationId,
          args.project.projectId,
          JSON.stringify(e.payload),
        );
      }

      this.db
        .prepare(
          `INSERT INTO d1_idempotency_keys (idempotency_key, command, response_json, created_at)
           VALUES (?, 'CreateProject', ?, ?)`,
        )
        .run(args.idempotencyKey, args.responseJson, nowIso());

      this.db.exec("COMMIT");
      return { kind: "created" };
    } catch (error) {
      try {
        this.db.exec("ROLLBACK");
      } catch {
        /* ignore */
      }
      if (error instanceof D1Error) throw error;
      throw new D1Error("PERSISTENCE", "Échec CreateProject.", error);
    }
  }

  selectMethodModeAtomic(args: {
    projectId: string;
    methodMode: MethodMode;
    expectedVersion: number;
    nextState: ProjectState;
    actorId: string;
    correlationId: string;
    eventIds: { mode: string; activated?: string };
  }): D1Project {
    this.db.exec("BEGIN IMMEDIATE");
    try {
      const current = this.getProject(args.projectId);
      if (!current) {
        throw new D1Error("NOT_FOUND", "Projet introuvable.");
      }
      if (current.version !== args.expectedVersion) {
        throw new D1Error("CONFLICT", "Version projet obsolète.");
      }

      const updatedAt = nowIso();
      const result = this.db
        .prepare(
          `UPDATE d1_projects
           SET method_mode = ?, state = ?, updated_at = ?, version = version + 1
           WHERE project_id = ? AND version = ?`,
        )
        .run(
          args.methodMode,
          args.nextState,
          updatedAt,
          args.projectId,
          args.expectedVersion,
        );
      if (Number(result.changes) !== 1) {
        throw new D1Error("CONFLICT", "Mise à jour concurrente détectée.");
      }

      this.db
        .prepare(
          `INSERT INTO d1_audit_events (
            event_id, event_type, occurred_at, actor_id, correlation_id, project_id, payload_json
          ) VALUES (?, 'PROJECT_MODE_SELECTED', ?, ?, ?, ?, ?)`,
        )
        .run(
          args.eventIds.mode,
          updatedAt,
          args.actorId,
          args.correlationId,
          args.projectId,
          JSON.stringify({ methodMode: args.methodMode }),
        );

      if (args.nextState === "ACTIVE" && current.state !== "ACTIVE") {
        if (!args.eventIds.activated) {
          throw new D1Error("VALIDATION", "eventIds.activated requis.");
        }
        this.db
          .prepare(
            `INSERT INTO d1_audit_events (
              event_id, event_type, occurred_at, actor_id, correlation_id, project_id, payload_json
            ) VALUES (?, 'PROJECT_ACTIVATED', ?, ?, ?, ?, ?)`,
          )
          .run(
            args.eventIds.activated,
            updatedAt,
            args.actorId,
            args.correlationId,
            args.projectId,
            JSON.stringify({ from: current.state, to: "ACTIVE" }),
          );
      }

      this.db.exec("COMMIT");
      const updated = this.getProject(args.projectId);
      if (!updated) {
        throw new D1Error("PERSISTENCE", "Projet perdu après update.");
      }
      return updated;
    } catch (error) {
      try {
        this.db.exec("ROLLBACK");
      } catch {
        /* ignore */
      }
      if (error instanceof D1Error) throw error;
      throw new D1Error("PERSISTENCE", "Échec SelectMethodMode.", error);
    }
  }
}
```
### `projects/sfia-studio/app/lib/d1/types.ts`

```tsx
/** D1-I1 Project Foundation — domain types (bounded). */

export const D1_SCHEMA_VERSION = "0.1.0-d1" as const;

/** Method modes authorized for I1 — no V3-ADOPTED / V3-IMPLEMENTED claims. */
export const METHOD_MODES = ["SFIA_V2_6", "TRANSITION", "V3_CANDIDATE"] as const;
export type MethodMode = (typeof METHOD_MODES)[number];

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
### `projects/sfia-studio/sfia-v3-delivery/d1-i1-project-foundation/01-implemented-scope.md`

```markdown
# 01 — Implemented scope

## Inclus
- Workspace Home `/workspace`
- New Project `/projects/new`
- Project Cockpit `/projects/[id]`
- MethodMode SFIA_V2_6 / TRANSITION / V3_CANDIDATE
- SQLite `d1.sqlite` (node:sqlite)
- Assignments mono-opérateur (owner + decision_maker même acteur)
- Audit PROJECT_CREATED / PROJECT_MODE_SELECTED / PROJECT_ACTIVATED
- D1 AppShell fluide isolé (OPS1 shell inchangé structurellement)
- Lien rail OPS1 → Workspace (`W`)

## Exclus
GuidedSession · GPT · Context Git · Policy E0–E4 · Gates · Transition · ReviewBundle · Cursor · D2/D3 · PostgreSQL · IdP
```
### `projects/sfia-studio/sfia-v3-delivery/d1-i1-project-foundation/02-technical-implementation.md`

```markdown
# 02 — Technical implementation

## Architecture
UI → Server Actions (`lib/d1/actions.ts`) → commands (`commands.ts`) → repository/tx → audit

## Modules
- `lib/d1/*` domain, db, repository, authz, commands, actions, observability
- `features/d1/*` AppShell, views, rail, badges, CSS
- Routes App Router sous `app/workspace`, `app/projects/**`

## Stack
Next 15 · React 19 · node:sqlite · Vitest · Playwright — **aucune nouvelle dépendance**

## Isolation
D1 AppShell séparé de `StudioShell` artboard 1440 pour ne pas casser OPS1.
```
### `projects/sfia-studio/sfia-v3-delivery/d1-i1-project-foundation/03-data-and-audit-implementation.md`

```markdown
# 03 — Data and audit

## SQLite file
`.sfia-exec/local-i1/state/d1.sqlite` (override `D1_SQLITE_PATH`)

## Tables
- d1_projects
- d1_assignments
- d1_audit_events (append-only)
- d1_idempotency_keys

## Events
PROJECT_CREATED · PROJECT_MODE_SELECTED · PROJECT_ACTIVATED

## Mono-opérateur
`actor-mono-i1` = project_owner + decision_maker (DESIGN-R01, temporaire)
```
### `projects/sfia-studio/sfia-v3-delivery/d1-i1-project-foundation/04-ux-runtime-validation.md`

```markdown
# 04 — UX runtime validation

## Captures
`.tmp-sfia-review/screenshots-d1-i1/`

## Metrics (unused right)
1728/1440/1280/1024 → unused=0, no H-scroll (viewport-metrics.json)

## Figma refs (fileKey IS70XDnBMvZuJYmaI5eZT2)
| Screen | Frame | Runtime |
|--------|-------|---------|
| Workspace Home | 2:2 | workspace-home-1440.png / workspace-*.png |
| New Project | 2:24 | new-project-1440.png |
| Cockpit 1440 | 2:46 | project-cockpit-1440.png |
| Cockpit 1728 | 3:97 | project-cockpit-1728.png |
| Cockpit 1280 | 3:143 | project-cockpit-1280.png |
| Cockpit 1024 | 3:187 | project-cockpit-1024.png |

## Conformité
Structurelle forte (nav/main/rail, Project-first, badges, empty states).
Pas pixel-perfect tokens Figma vs Studio existants — écart attendu documenté.
```
### `projects/sfia-studio/sfia-v3-delivery/d1-i1-project-foundation/05-test-results.md`

```markdown
# 05 — Test results

| Suite | Résultat |
|-------|----------|
| vitest `__tests__/d1/project-foundation.test.ts` | 7/7 pass |
| playwright `e2e/d1-i1-project-foundation.spec.ts` | 6/6 pass |
| playwright `e2e/p0-smoke.spec.ts` (régression) | 6/6 pass |
| tsc --noEmit | pass (D1) |

## Non exécutés
Suites OPS1 I2–I6 / Control Tower complètes — hors nécessité I1 ; smoke P0 couvre legacy routes.
```
### `projects/sfia-studio/sfia-v3-delivery/d1-i1-project-foundation/06-known-reserves-and-debt.md`

```markdown
# 06 — Reserves and debt

- I1-R01 : mono-opérateur temporaire
- I1-R02 : pas de ProjectTrajectory persistée (placeholder UI)
- I1-R03 : rail medium = empilé (CSS hide desktop rail <1280), pas drawer animé
- I1-R04 : playwrigh reuseExistingServer=!CI (config locale)
- Dette : I2 GuidedSession · Context · Policy · Gates · a11y axe dédié D1
```
### `projects/sfia-studio/sfia-v3-delivery/d1-i1-project-foundation/07-d1-i1-validation-decision-pack.md`

```markdown
# 07 — D1-I1 validation decision pack

| Champ | Valeur |
|-------|--------|
| Statut | D1-I1 IMPLEMENTED CANDIDATE |
| Verdict | SFIA v3.0 D1-I1 PROJECT FOUNDATION IMPLEMENTED — VALIDATION REQUIRED |
| Gate suivant | GO VALIDATION D1-I1 — PROJECT FOUNDATION |

## Décisions humaines requises
1. Valider I1 (gate)
2. Accepter AppShell isolé vs refonte OPS1 shell
3. Accepter mono-opérateur jusqu’à I5/sécu
4. Prioriser I2 vs durcissement UX I1

## Anti-claims
Pas V3-IMPLEMENTED · pas adoption · pas commit projet
```
### `projects/sfia-studio/sfia-v3-delivery/d1-i1-project-foundation/README.md`

```markdown
# SFIA v3.0 — D1-I1 Project Foundation (delivery)

| Champ | Valeur |
|-------|--------|
| **Statut** | **D1-I1 IMPLEMENTED CANDIDATE** |
| **BCDI** | BCDI-D1-I1-PROJECT-FOUNDATION |
| **Gate consommé** | GO IMPLEMENTATION D1-I1 — PROJECT FOUNDATION |
| **Gate suivant** | GO VALIDATION D1-I1 — PROJECT FOUNDATION |
| **Baseline** | SFIA v2.6 |
| **Statut v3** | V3-MODELED CANDIDATE (inchangé) |

## Anti-claims

Pas V3-IMPLEMENTED global · pas adoption · pas GPT/Cycle/Context/Gates · pas deps · pas commit projet.
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
        title="Workspace D1-I1"
        data-testid="rail-d1-workspace"
      >
        W
      </Link>

      <div className={isFloating ? styles.avatar : styles.avatarFlush}>MC</div>
    </nav>
  );
}
```
### `projects/sfia-studio/app/playwright.config.ts`

```tsx
import { defineConfig, devices } from "@playwright/test";

const baseURL = "http://127.0.0.1:3020";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: false,
  workers: 1,
  forbidOnly: !!process.env.CI,
  retries: 0,
  reporter: [["list"]],
  use: {
    ...devices["Desktop Chrome"],
    baseURL,
    trace: "on-first-retry",
    viewport: { width: 1440, height: 1024 },
  },
  webServer: {
    command: "npm run dev -- --hostname 127.0.0.1 --port 3020",
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
    env: {
      ...process.env,
      OPS1_E2E_ALLOW_DIRTY_PRINCIPAL: "1",
      // Default E2E: fake provider. Real live capture/smoke: OPS1_ALLOW_LIVE_SMOKE=1
      // without forcing fake (secrets must already be in the environment).
      ...(process.env.OPS1_ALLOW_LIVE_SMOKE === "1"
        ? {
            OPS1_CONVERSATION_PROVIDER: "",
          }
        : {
            OPS1_CONVERSATION_PROVIDER: "fake",
            OPENAI_API_KEY:
              process.env.OPENAI_API_KEY || "sk-e2e-fake-not-a-real-key",
            OPENAI_MODEL: process.env.OPENAI_MODEL || "fake-e2e-model",
          }),
    },
  },
});
```

## 9. Réserves / dette / anti-claims

- I1-R01 mono-opérateur temporaire
- I1-R02 trajectory placeholder
- I1-R03 rail medium empilé
- I1-R04 playwright reuseExistingServer=!CI
- Anti-claims: pas V3-IMPLEMENTED · pas adoption · pas GPT/D2 · pas deps · pas commit projet

## 10. Décisions humaines requises / non prises

Requises: GO VALIDATION D1-I1 ; accepter AppShell isolé ; mono-op ; prioriser suite.
Non prises: I2 · PG · IdP · adoption · commit projet.

## 11. État Git final

```
HEAD=32e5271842b9a344a7e292614675c27ea8ed941b
branch=delivery/sfia-studio-control-tower-fast-track
staged=0
```

## 12. Verdict

**VERDICT :** SFIA v3.0 D1-I1 PROJECT FOUNDATION IMPLEMENTED — VALIDATION REQUIRED
