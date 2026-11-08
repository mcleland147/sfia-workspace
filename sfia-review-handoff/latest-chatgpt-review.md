# SFIA Review Pack FULL — G4 correctifs B1–B4 + DEV access — 2026-11-08

**Date / fuseau :** 2026-11-08 (Europe/Paris)
**GO :** `sfia-next-cursor-g4-correctifs-et-acces-dev-2026-11-08.md`
**Cycle :** 8 Delivery + 9 QA · EVOL · Critical
**Lane :** DEV only · **NO RELEASE**
**STOP respectés :** aucun push projet / PR / merge / RECETTE / STABLE ; ML3 non touché.

## 1. Git Truth

| Check | Résultat |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-workspace-next-g4-construction` |
| Branche | `feat/next-convergence-ux-g4-construction` |
| HEAD candidat | `d45f0962ae074980b97370ab291d1f1a7a9d6a21` |
| Parent immédiat | `dbaccfdab463b18bd464ea57753865b948b1c089` (construction G4 initiale) |
| Base origin/main | `f0d59bc8f72ed8544ac4c82dfa9ac0f23889c03e` |
| Push projet | **NON** |

### status
```
## feat/next-convergence-ux-g4-construction
 M .tmp-sfia-review/chatgpt-review.md
?? projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/tmp/
```

### name-status (parent→HEAD)
```
A	projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/as-built-g4-correctifs-b1-b4-2026-11-08.md
M	projects/sfia-studio-next/web/src/app/portfolio/page.tsx
M	projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
M	projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
M	projects/sfia-studio-next/web/src/components/shell/studio-rail.ts
A	projects/sfia-studio-next/web/tests/e2e/g4-b1-b4-correctifs.spec.ts
M	projects/sfia-studio-next/web/tests/e2e/ml1-smoke.spec.ts
M	projects/sfia-studio-next/web/tests/unit/studio-rail.test.ts
```

### stat
```
.../as-built-g4-correctifs-b1-b4-2026-11-08.md     |  30 ++
 .../web/src/app/portfolio/page.tsx                 | 169 ++++++++---
 .../web/src/app/projects/[projectId]/page.tsx      | 308 +++++++++++++++++----
 .../web/src/components/shell/StudioShell.tsx       |  70 +++--
 .../web/src/components/shell/studio-rail.ts        | 121 +++++++-
 .../web/tests/e2e/g4-b1-b4-correctifs.spec.ts      | 107 +++++++
 .../web/tests/e2e/ml1-smoke.spec.ts                |   2 +-
 .../web/tests/unit/studio-rail.test.ts             |  25 +-
 8 files changed, 708 insertions(+), 124 deletions(-)
```

## 2. Matrice B1–B4 → changements → tests

| ID | Changement | Preuve |
|---|---|---|
| B1 | `buildShellNav` liens réels `?surface=` ; disabled hors contexte ; mobile = mêmes items ; `data-rail-variant` sur rail ; mapping F1 frame↔route↔état | unit `studio-rail` ; e2e rail hrefs + variant inspection |
| B2 | sync `searchParams` sans one-shot lock ; `push` nav / `replace` normalize ; URL live anti-race load ; foreign doc → `document-missing` | e2e reload/Back/Forward + foreign id |
| B3 | succès seulement si `status===AVAILABLE` ; CONFLICT brouillon conservé + rebase explicite ; UNKNOWN → relecture revisions/correlationKey | e2e revise message AVAILABLE |
| B4 | pas de 2e POST auto ; relecture portefeuille ; Reprendre GET only | e2e prepPostCount=0 on resume |

## 3. Preuves QA

| Commande | Résultat |
|---|---|
| `npx tsc --noEmit` | PASS (exit 0) |
| `npm run test:unit` | **122 passed** / 19 files |
| `npm run test:integration` | **144 passed** / 11 files |
| `npm run build` | PASS |
| `npx playwright test tests/e2e/g4-b1-b4-correctifs.spec.ts` | **1 passed** (lane isolée :3101) |
| `verify-g2-pack.sh` | **VERIFY PASS** |
| F2 DOM≤2px / G5 | **NOT RUN** (non revendiqué) |
| Captures multi-viewport G5 | **NOT RUN** |

## 4. DEV ACCESSIBLE (opérateur Morris)

| Champ | Valeur |
|---|---|
| Verdict | **DEV ACCESSIBLE** |
| URL | `http://127.0.0.1:3100` |
| Login | `http://127.0.0.1:3100/login` → bouton **Pilote A (DEV)** |
| Smoke | login HTML 200 ; `POST /api/dev/login` ok ; `GET /api/portfolio` 200 kind=ready ; `/portfolio` 200 |
| PID listen | node **57027** on `127.0.0.1:3100` |
| SHA servi | `d45f0962ae074980b97370ab291d1f1a7a9d6a21` (arbre worktree G4) |
| Restart | `cd …/web && npm run dev` |
| Stop | `kill 57027` (ou processus `next dev` :3100) |
| Auth | DEV test login FAKE — **pas** preuve OAuth GitHub LIVE |
| Secrets | non loggés |

### Mini-checklist Morris
1. Ouvrir login → Pilote A (DEV) → portefeuille
2. Reprendre une préparation (sans créer) — vérifier absence de POST création
3. Ouvrir un projet → rail Travail/Pilotage/Documents/Journal (desktop + rétrécir fenêtre mobile)
4. URL `?surface=document&documentId=` → reload / Back / Forward
5. Réviser un document → message doit citer AVAILABLE
6. Retour fil / conservation contexte Nora

## 5. Contenu intégral — créations

### CREATE `projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/as-built-g4-correctifs-b1-b4-2026-11-08.md`

- blob `88bdcaf1ddacb97b0417036d498d6fd51664f42a`

```
# As-built G4 — correctifs B1–B4 + accès DEV (2026-11-08)

**Branch :** `feat/next-convergence-ux-g4-construction`
**Lane :** DEV only · **NO RELEASE**
**Parent construction :** `dbaccfda` · base `f0d59bc8`

## Correctifs

| ID | Correction |
|---|---|
| B1 | `buildShellNav` : liens réels `?surface=` sous `projectId` ; labels désactivés (pas `#`) hors contexte ; mobile = mêmes surfaces ; variante F1 par mapping frame↔route↔état |
| B2 | Sync URL↔surface↔document via `searchParams` (Back/Forward/reload) ; `push` pour nav utilisateur ; `replace` seulement normalisation ; lecture URL live en fin de load (anti-race) ; `documentId` étranger → état contrôlé sans contenu |
| B3 | Succès uniquement si `result.status === AVAILABLE` ; CONFLICT conserve brouillon + rebase explicite ; UNKNOWN/ACK → relecture revisions/correlationKey avant retry ; même `correlationKey` |
| B4 | Double-clic bloqué ; ACK perdu → **pas** de second POST auto ; relecture portefeuille ; erreurs réseau pagination/création explicites ; Reprendre = GET |

## Preuves

- `tsc --noEmit` OK
- unit 122 passed
- integration PG 144 passed
- `next build` OK
- Playwright `g4-b1-b4-correctifs.spec.ts` PASS (lane :3101 isolée)
- G2 `verify-g2-pack.sh` VERIFY PASS
- F2/G5 DOM≤2px : **NOT RUN** (pas revendiqué)

## DEV opérateur

- URL : `http://127.0.0.1:3100`
- Login : `/login` → **Pilote A (DEV)** (fake, pas OAuth LIVE)
- Arrêt : `kill` du PID `next dev` sur 3100

```

### CREATE `projects/sfia-studio-next/web/tests/e2e/g4-b1-b4-correctifs.spec.ts`

- blob `fd1cb7a542ee2752bfeee84c2ecc3a97145c2720`

```
import { test, expect } from "@playwright/test";

/**
 * B1–B4 targeted BROWSER checks on isolated E2E lane (Playwright config),
 * not the operator DEV :3100 process.
 */
test("G4 B1–B4: rail surfaces, resume without POST, deep-link, revise AVAILABLE", async ({
  page,
}) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");

  // B4 — create once (new label)
  await page.getByTestId("portfolio-new-prep").click();
  await page.waitForURL("**/preparations/**");
  const prepUrl = page.url();
  const prepId = prepUrl.split("/preparations/")[1]?.split(/[?#]/)[0];
  expect(prepId).toBeTruthy();

  await page.getByPlaceholder("Écrire à Nora…").fill("G4 correctifs B1-B4");
  await page.getByRole("button", { name: "Envoyer" }).click();
  await expect(page.getByText("openai-agents-sdk-live")).toHaveCount(0);
  await expect(page.getByText("Nora deterministic-fixture · COMPLETE", { exact: false })).toBeVisible({
    timeout: 30000,
  });

  await page.getByPlaceholder("Nom du projet").fill("Projet G4 B");
  await page.getByPlaceholder("Résumé inspecté").fill("résumé g4");
  await page.getByRole("button", { name: "Enregistrer l'aperçu" }).click();
  await page.getByRole("button", { name: "Document", exact: true }).click();
  await page.locator("textarea").first().fill("# Doc G4\nligne");
  await page.getByTestId("doc-save").click();
  await expect(page.getByTestId("surface-status")).toContainText(/AVAILABLE/i, { timeout: 10000 });
  await page.getByRole("button", { name: "Travail" }).click();
  await page.getByRole("button", { name: "Créer le projet" }).click();
  await page.waitForURL("**/projects/**", { timeout: 15000 });
  const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
  expect(projectId).toBeTruthy();

  // B1 — real rail links with surface query
  const rail = page.getByTestId("studio-rail");
  await expect(rail.getByTestId("nav-travail")).toHaveAttribute(
    "href",
    `/projects/${projectId}?surface=travail`,
  );
  await rail.getByTestId("nav-pilotage").click();
  await expect(page).toHaveURL(new RegExp(`/projects/${projectId}\\?surface=pilotage`));
  await rail.getByTestId("nav-document").click();
  await expect(page).toHaveURL(new RegExp(`surface=document`));
  await expect(page.getByTestId("studio-rail")).toHaveAttribute("data-rail-variant", "inspection");
  await expect(page.getByTestId("document-inspect")).toBeVisible({ timeout: 10000 });

  // Open first document if listed
  const firstDoc = page.locator('[data-testid^="doc-open-"]').first();
  await expect(firstDoc).toBeVisible({ timeout: 15000 });
  const docTestId = await firstDoc.getAttribute("data-testid");
  const documentId = docTestId?.replace("doc-open-", "");
  expect(documentId).toBeTruthy();
  await firstDoc.click();
  await expect(page).toHaveURL(new RegExp(`documentId=${documentId}`));

  // B2 — reload keeps deep-link; no mutation claimed on open
  await page.reload();
  await expect(page).toHaveURL(new RegExp(`surface=document`));
  await expect(page).toHaveURL(new RegExp(`documentId=${documentId}`));
  await expect(page.getByTestId("document-ui-state")).toContainText("READING");

  // Back to travail then Forward
  await page.goBack();
  await page.goForward();
  await expect(page).toHaveURL(new RegExp(`documentId=${documentId}`));

  // Foreign documentId → controlled empty (no content body of another doc)
  await page.goto(`/projects/${projectId}?surface=document&documentId=doc_foreign_denied`);
  await expect(page.getByTestId("document-missing")).toBeVisible();

  // B3 — revise AVAILABLE only
  await page.goto(`/projects/${projectId}?surface=document&documentId=${documentId}`);
  await page.getByTestId("document-revise-start").click();
  await page.getByTestId("document-revise-draft").fill("# Doc G4\nligne révisée");
  await page.getByTestId("document-revise-save").click();
  await expect(page.getByTestId("document-revise-message")).toContainText(/AVAILABLE/i, {
    timeout: 15000,
  });
  await expect(page.getByTestId("document-ui-state")).toContainText("READING");

  // B4 — Reprendre = GET only (no POST to /api/preparations on resume)
  let prepPostCount = 0;
  page.on("request", (req) => {
    if (req.method() === "POST" && /\/api\/preparations\/?$/.test(new URL(req.url()).pathname)) {
      prepPostCount += 1;
    }
  });
  await page.goto("/portfolio");
  // Create an open prep to resume: use existing list if any, else new then back
  const resumeButtons = page.locator('[data-testid^="resume-prep-"]');
  if ((await resumeButtons.count()) === 0) {
    await page.getByTestId("portfolio-new-prep").click();
    await page.waitForURL("**/preparations/**");
    await page.goto("/portfolio");
  }
  prepPostCount = 0;
  await page.locator('[data-testid^="resume-prep-"]').first().click();
  await page.waitForURL("**/preparations/**");
  expect(prepPostCount).toBe(0);
});

```

## 6. Contenu intégral — shell F1 (état HEAD)

### FILE `projects/sfia-studio-next/web/src/components/shell/studio-rail.ts`

- blob `49987fdd1f31dd304d9e6bb1f1020d202d8a52a1`

```ts
/**
 * F1 Navigation rail variants — values from G2 railEvidence (VERIFY PASS).
 * Discriminant fills are intentional: personnel ≠ projet.
 *
 * Variant selection follows proven frame ↔ route ↔ state mapping (G2),
 * not a free pathname heuristic.
 */

import type { CSSProperties } from "react";

export type StudioRailVariant = "personnel" | "projet" | "conversation" | "inspection";

export type StudioSurface = "travail" | "pilotage" | "journal" | "document";

export type StudioRailTokens = {
  variant: StudioRailVariant;
  widthPx: number;
  fill: string;
  paddingTop: number;
  paddingRight: number;
  paddingBottom: number;
  paddingLeft: number;
  gap: number;
  railComponentId: string;
  sourceNodeId: string;
};

/** Canonical tokens measured in G2 L2 / railEvidence. */
export const STUDIO_RAIL_VARIANTS: Record<StudioRailVariant, StudioRailTokens> = {
  personnel: {
    variant: "personnel",
    widthPx: 246,
    fill: "#0C101A",
    paddingTop: 20,
    paddingRight: 19,
    paddingBottom: 0,
    paddingLeft: 19,
    gap: 10,
    railComponentId: "shell.rail.personnel",
    sourceNodeId: "94:51",
  },
  projet: {
    variant: "projet",
    widthPx: 246,
    fill: "#0C1020",
    paddingTop: 24,
    paddingRight: 24,
    paddingBottom: 24,
    paddingLeft: 24,
    gap: 13,
    railComponentId: "shell.rail.projet",
    sourceNodeId: "160:176",
  },
  conversation: {
    variant: "conversation",
    widthPx: 240,
    fill: "#0D111B",
    paddingTop: 25,
    paddingRight: 19,
    paddingBottom: 0,
    paddingLeft: 19,
    gap: 13,
    railComponentId: "shell.rail.conversation",
    sourceNodeId: "94:215",
  },
  inspection: {
    variant: "inspection",
    widthPx: 244,
    fill: "#0C101A",
    paddingTop: 23,
    paddingRight: 19,
    paddingBottom: 22,
    paddingLeft: 19,
    gap: 11,
    railComponentId: "shell.rail.inspection",
    sourceNodeId: "94:372",
  },
};

export const PROJECT_SURFACES: StudioSurface[] = [
  "travail",
  "pilotage",
  "journal",
  "document",
];

export function parseStudioSurface(raw: string | null | undefined): StudioSurface | null {
  if (!raw) return null;
  const v = raw.toLowerCase();
  return PROJECT_SURFACES.includes(v as StudioSurface) ? (v as StudioSurface) : null;
}

export function parseProjectId(pathname: string): string | null {
  const m = pathname.match(/^\/projects\/([^/?#]+)/);
  return m?.[1] ?? null;
}

export function parsePreparationId(pathname: string): string | null {
  const m = pathname.match(/^\/preparations\/([^/?#]+)/);
  return m?.[1] ?? null;
}

export function railStyle(tokens: StudioRailTokens): CSSProperties {
  return {
    width: tokens.widthPx,
    background: tokens.fill,
    paddingTop: tokens.paddingTop,
    paddingRight: tokens.paddingRight,
    paddingBottom: tokens.paddingBottom,
    paddingLeft: tokens.paddingLeft,
    gap: tokens.gap,
  };
}

/**
 * Frame ↔ route ↔ state (G2):
 * - portefeuille / login → personnel (portfolio frames)
 * - préparation (sas) → conversation
 * - projet + travail (fil) → conversation
 * - projet + document → inspection
 * - projet + pilotage|journal → projet
 */
export function resolveRailVariant(input: {
  pathname: string;
  surface?: string | null;
}): StudioRailVariant {
  const path = input.pathname || "/";
  if (path.startsWith("/portfolio") || path === "/" || path.startsWith("/login")) {
    return "personnel";
  }
  if (path.startsWith("/preparations/")) {
    return "conversation";
  }
  if (path.startsWith("/projects/")) {
    const surface = parseStudioSurface(input.surface) ?? "travail";
    if (surface === "document") return "inspection";
    if (surface === "travail") return "conversation";
    return "projet";
  }
  return "personnel";
}

export type ShellNavItem = {
  key: string;
  label: string;
  href: string | null;
  active: boolean;
  /** Inactive without context — never a fake # link. */
  disabledReason?: string;
};

export function buildShellNav(input: {
  pathname: string;
  surface?: string | null;
}): ShellNavItem[] {
  const path = input.pathname || "/";
  const projectId = parseProjectId(path);
  const preparationId = parsePreparationId(path);
  const surface = parseStudioSurface(input.surface) ?? (projectId ? "travail" : null);

  const items: ShellNavItem[] = [
    {
      key: "portfolio",
      label: "Portefeuille",
      href: "/portfolio",
      active: path.startsWith("/portfolio") || path === "/",
    },
  ];

  if (!projectId && !preparationId) {
    items.push({
      key: "login",
      label: "Connexion",
      href: "/login",
      active: path.startsWith("/login"),
    });
    return items;
  }

  if (preparationId) {
    items.push({
      key: "sas",
      label: "Sas",
      href: `/preparations/${preparationId}`,
      active: true,
    });
    // Surfaces projet require projectId — show disabled labels, not fake links.
    for (const [key, label] of [
      ["travail", "Travail"],
      ["pilotage", "Pilotage"],
      ["document", "Documents"],
      ["journal", "Journal"],
    ] as const) {
      items.push({
        key,
        label,
        href: null,
        active: false,
        disabledReason: "Disponible après création / ouverture du projet",
      });
    }
    return items;
  }

  // project context — real surface URLs
  const surfaces: Array<{ key: StudioSurface; label: string }> = [
    { key: "travail", label: "Travail" },
    { key: "pilotage", label: "Pilotage" },
    { key: "document", label: "Documents" },
    { key: "journal", label: "Journal" },
  ];
  for (const s of surfaces) {
    items.push({
      key: s.key,
      label: s.label,
      href: `/projects/${projectId}?surface=${s.key}`,
      active: surface === s.key,
    });
  }
  return items;
}

```

### FILE `projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx`

- blob `4144458d644c3b24d7e6f73ccaa0fc6cc16cf53f`

```ts
"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { PRODUCT_VERSIONING } from "@/lib/product-version";
import {
  STUDIO_RAIL_VARIANTS,
  buildShellNav,
  railStyle,
  resolveRailVariant,
} from "./studio-rail";

export function StudioShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "/";
  const searchParams = useSearchParams();
  const surface = searchParams.get("surface");
  const variant = resolveRailVariant({ pathname, surface });
  const tokens = STUDIO_RAIL_VARIANTS[variant];
  const items = buildShellNav({ pathname, surface });

  return (
    <div className="min-h-screen flex studio-shell" data-rail-variant={variant}>
      <aside
        className="hidden md:flex flex-col border-r border-[var(--line)]"
        style={railStyle(tokens)}
        aria-label="Navigation Studio"
        data-testid="studio-rail"
        data-rail-variant={variant}
        data-rail-component-id={tokens.railComponentId}
        data-rail-source-node={tokens.sourceNodeId}
        data-rail-width={tokens.widthPx}
        data-rail-fill={tokens.fill}
      >
        <div>
          <div className="text-lg font-semibold tracking-tight studio-title">SFIA Studio</div>
          <div className="text-xs muted mt-1">
            {PRODUCT_VERSIONING.releaseStatus} · STABLE {PRODUCT_VERSIONING.productStableVersion}
          </div>
          <div className="text-[10px] muted mt-1 uppercase tracking-wide">{variant}</div>
        </div>
        <nav className="flex flex-col text-sm" style={{ gap: tokens.gap }} aria-label="Principal">
          {items.map((item) => {
            if (!item.href) {
              return (
                <span
                  key={item.key}
                  className="muted"
                  title={item.disabledReason}
                  data-testid={`nav-disabled-${item.key}`}
                >
                  {item.label}
                </span>
              );
            }
            return (
              <Link
                key={item.key}
                href={item.href}
                className={item.active ? "font-semibold text-[var(--ink)]" : undefined}
                aria-current={item.active ? "page" : undefined}
                data-testid={`nav-${item.key}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <p className="text-xs muted mt-auto">
          Nora n&apos;est pas globale. Le login Studio n&apos;accorde aucun droit de dépôt Git.
        </p>
      </aside>

      {/* Mobile: accessible equivalent of authorized surfaces */}
      <nav
        className="md:hidden flex gap-3 p-3 border-b border-[var(--line)] text-sm overflow-x-auto"
        aria-label="Navigation Studio mobile"
        data-testid="studio-rail-mobile"
      >
        {items.map((item) => {
          if (!item.href) {
            return (
              <span key={item.key} className="muted whitespace-nowrap" title={item.disabledReason}>
                {item.label}
              </span>
            );
          }
          return (
            <Link
              key={item.key}
              href={item.href}
              className={`whitespace-nowrap ${item.active ? "font-semibold" : ""}`}
              aria-current={item.active ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <main className="flex-1 p-4 md:p-8 min-w-0">{children}</main>
    </div>
  );
}

```

## 7. Diff intégral parent→HEAD (web src/tests + as-built)

```diff
diff --git a/projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/as-built-g4-correctifs-b1-b4-2026-11-08.md b/projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/as-built-g4-correctifs-b1-b4-2026-11-08.md
new file mode 100644
index 00000000..88bdcaf1
--- /dev/null
+++ b/projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/as-built-g4-correctifs-b1-b4-2026-11-08.md
@@ -0,0 +1,30 @@
+# As-built G4 — correctifs B1–B4 + accès DEV (2026-11-08)
+
+**Branch :** `feat/next-convergence-ux-g4-construction`
+**Lane :** DEV only · **NO RELEASE**
+**Parent construction :** `dbaccfda` · base `f0d59bc8`
+
+## Correctifs
+
+| ID | Correction |
+|---|---|
+| B1 | `buildShellNav` : liens réels `?surface=` sous `projectId` ; labels désactivés (pas `#`) hors contexte ; mobile = mêmes surfaces ; variante F1 par mapping frame↔route↔état |
+| B2 | Sync URL↔surface↔document via `searchParams` (Back/Forward/reload) ; `push` pour nav utilisateur ; `replace` seulement normalisation ; lecture URL live en fin de load (anti-race) ; `documentId` étranger → état contrôlé sans contenu |
+| B3 | Succès uniquement si `result.status === AVAILABLE` ; CONFLICT conserve brouillon + rebase explicite ; UNKNOWN/ACK → relecture revisions/correlationKey avant retry ; même `correlationKey` |
+| B4 | Double-clic bloqué ; ACK perdu → **pas** de second POST auto ; relecture portefeuille ; erreurs réseau pagination/création explicites ; Reprendre = GET |
+
+## Preuves
+
+- `tsc --noEmit` OK
+- unit 122 passed
+- integration PG 144 passed
+- `next build` OK
+- Playwright `g4-b1-b4-correctifs.spec.ts` PASS (lane :3101 isolée)
+- G2 `verify-g2-pack.sh` VERIFY PASS
+- F2/G5 DOM≤2px : **NOT RUN** (pas revendiqué)
+
+## DEV opérateur
+
+- URL : `http://127.0.0.1:3100`
+- Login : `/login` → **Pilote A (DEV)** (fake, pas OAuth LIVE)
+- Arrêt : `kill` du PID `next dev` sur 3100
diff --git a/projects/sfia-studio-next/web/src/app/portfolio/page.tsx b/projects/sfia-studio-next/web/src/app/portfolio/page.tsx
index 5cee7a30..11b2105b 100644
--- a/projects/sfia-studio-next/web/src/app/portfolio/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/portfolio/page.tsx
@@ -28,6 +28,7 @@ type PortfolioResponse = {
       }
     | { kind: "unavailable"; reason: string };
   error?: string;
+  errorCategory?: string;
 };

 export default function PortfolioPage() {
@@ -36,84 +37,170 @@ export default function PortfolioPage() {
   const [items, setItems] = useState<PreparationSummary[]>([]);
   const [nextCursor, setNextCursor] = useState<string | null>(null);
   const [error, setError] = useState<string>("");
+  const [pageNotice, setPageNotice] = useState<string>("");
+  const [creationUncertainty, setCreationUncertainty] = useState<string>("");
   const [loadingMore, setLoadingMore] = useState(false);
+  const [creating, setCreating] = useState(false);
   const creatingRef = useRef(false);
+  const knownPrepIdsRef = useRef<Set<string>>(new Set());

   const applyPortfolio = useCallback((j: PortfolioResponse, append: boolean) => {
     setData(j);
     const prep = j.portfolio && "preparations" in j.portfolio ? j.portfolio.preparations : null;
     if (prep) {
-      setItems((prev) => (append ? [...prev, ...prep.items] : prep.items));
+      setItems((prev) => {
+        const next = append ? [...prev, ...prep.items] : prep.items;
+        knownPrepIdsRef.current = new Set(next.map((p) => p.id));
+        return next;
+      });
       setNextCursor(prep.nextCursor);
     } else if (!append) {
       setItems([]);
       setNextCursor(null);
+      knownPrepIdsRef.current = new Set();
     }
   }, []);

-  useEffect(() => {
-    fetch("/api/portfolio")
-      .then(async (r) => {
-        const j = (await r.json()) as PortfolioResponse;
-        if (r.status === 401) {
-          router.push("/login");
-          return;
-        }
-        if (r.status === 400) {
-          setError(j.error ?? "INVALID_CURSOR");
-          return;
-        }
-        if (!r.ok) {
-          setError(j.error ?? "portefeuille indisponible");
-          return;
-        }
-        applyPortfolio(j, false);
-      })
-      .catch((e) => setError(String(e)));
+  const reloadPortfolio = useCallback(async (): Promise<PortfolioResponse | null> => {
+    try {
+      const r = await fetch("/api/portfolio");
+      const j = (await r.json()) as PortfolioResponse;
+      if (r.status === 401) {
+        router.push("/login");
+        return null;
+      }
+      if (r.status === 400) {
+        setError(j.error ?? "INVALID_CURSOR");
+        return null;
+      }
+      if (!r.ok) {
+        setError(j.error ?? j.errorCategory ?? `erreur ${r.status}`);
+        return null;
+      }
+      applyPortfolio(j, false);
+      setError("");
+      return j;
+    } catch {
+      setError("Réseau indisponible — rechargement du portefeuille impossible.");
+      return null;
+    }
   }, [router, applyPortfolio]);

+  useEffect(() => {
+    void reloadPortfolio();
+  }, [reloadPortfolio]);
+
   async function loadMore() {
     if (!nextCursor || loadingMore) return;
     setLoadingMore(true);
+    setPageNotice("");
     try {
       const res = await fetch(
         `/api/portfolio?preparationsCursor=${encodeURIComponent(nextCursor)}`,
       );
-      const j = (await res.json()) as PortfolioResponse;
+      const j = (await res.json().catch(() => ({}))) as PortfolioResponse;
       if (res.status === 400) {
-        setError(j.error ?? "INVALID_CURSOR");
+        setPageNotice(j.error ?? "INVALID_CURSOR");
+        return;
+      }
+      if (res.status === 401) {
+        router.push("/login");
         return;
       }
       if (!res.ok) {
-        setError(j.error ?? "pagination impossible");
+        setPageNotice(j.error ?? j.errorCategory ?? `pagination HTTP ${res.status}`);
         return;
       }
       applyPortfolio(j, true);
+    } catch {
+      setPageNotice("Réseau indisponible pendant la pagination — réessayez.");
     } finally {
       setLoadingMore(false);
     }
   }

+  /**
+   * B4 — double-clic blocked while in-flight; on lost response do NOT auto-POST again.
+   * Re-read portfolio to discover a possible creation; otherwise show uncertainty.
+   */
   async function startPreparation() {
     if (creatingRef.current) return;
     creatingRef.current = true;
+    setCreating(true);
+    setCreationUncertainty("");
+    setError("");
+    const before = new Set(knownPrepIdsRef.current);
     try {
       const res = await fetch("/api/preparations", { method: "POST" });
-      const j = await res.json();
-      if (res.ok) router.push(`/preparations/${j.preparationId}`);
-      else setError(j.error ?? "échec");
+      let j: { preparationId?: string; error?: string } = {};
+      try {
+        j = await res.json();
+      } catch {
+        // ACK / body lost — fall through to uncertainty path
+        j = {};
+      }
+      if (res.ok && j.preparationId) {
+        router.push(`/preparations/${j.preparationId}`);
+        return;
+      }
+      if (!res.ok && res.status !== 0) {
+        // Explicit server failure — no silent second POST
+        setCreationUncertainty("");
+        setError(j.error ?? `création refusée (HTTP ${res.status})`);
+        return;
+      }
+      // Uncertain: re-read portfolio once (GET only)
+      const refreshed = await reloadPortfolio();
+      const prep =
+        refreshed?.portfolio && "preparations" in refreshed.portfolio
+          ? refreshed.portfolio.preparations.items
+          : [];
+      const discovered = prep.find((p) => !before.has(p.id));
+      if (discovered) {
+        setCreationUncertainty(
+          `Création confirmée après relecture · ${discovered.id.slice(0, 8)}… — ouvrez « Reprendre ».`,
+        );
+        return;
+      }
+      setCreationUncertainty(
+        "Création incertaine (ACK perdu). Aucun nouveau POST automatique. Rechargez le portefeuille ou réessayez explicitement.",
+      );
+    } catch {
+      const refreshed = await reloadPortfolio();
+      const prep =
+        refreshed?.portfolio && "preparations" in refreshed.portfolio
+          ? refreshed.portfolio.preparations.items
+          : [];
+      const discovered = prep.find((p) => !before.has(p.id));
+      if (discovered) {
+        setCreationUncertainty(
+          `Réseau interrompu, mais une préparation nouvelle apparaît · ${discovered.id.slice(0, 8)}… — Reprendre (GET).`,
+        );
+      } else {
+        setCreationUncertainty(
+          "Réseau interrompu pendant la création. Résultat non vérifiable — pas de second POST automatique.",
+        );
+      }
     } finally {
       creatingRef.current = false;
+      setCreating(false);
     }
   }

-  /** Reprendre = GET only, no POST. */
+  /** Reprendre = GET/nav only, no POST. */
   function resumePreparation(id: string) {
     router.push(`/preparations/${id}`);
   }

-  if (error) {
-    return <div className="panel p-6">Portefeuille indisponible: {error}</div>;
+  if (error && !data) {
+    return (
+      <div className="panel p-6 space-y-3">
+        <div>Portefeuille indisponible: {error}</div>
+        <button type="button" className="btn secondary" onClick={() => void reloadPortfolio()}>
+          Réessayer (GET)
+        </button>
+      </div>
+    );
   }
   if (!data) return <div className="muted">Chargement du portefeuille…</div>;

@@ -127,9 +214,26 @@ export default function PortfolioPage() {
         </p>
       </header>

+      {error ? <p className="text-sm text-[var(--bad)]">{error}</p> : null}
+      {creationUncertainty ? (
+        <div className="panel p-4 text-sm" data-testid="portfolio-creation-uncertainty" role="status">
+          {creationUncertainty}
+          <div className="mt-2">
+            <button type="button" className="btn secondary" onClick={() => void reloadPortfolio()}>
+              Relire le portefeuille
+            </button>
+          </div>
+        </div>
+      ) : null}
+
       <div className="flex gap-2">
-        <button className="btn" onClick={startPreparation} data-testid="portfolio-new-prep">
-          Nouvelle préparation
+        <button
+          className="btn"
+          onClick={() => void startPreparation()}
+          disabled={creating}
+          data-testid="portfolio-new-prep"
+        >
+          {creating ? "Création…" : "Nouvelle préparation"}
         </button>
       </div>

@@ -155,7 +259,7 @@ export default function PortfolioPage() {
                 <div className="font-medium">{proj.name}</div>
                 <div className="text-xs muted">{proj.id}</div>
               </div>
-              <a className="btn secondary" href={`/projects/${proj.id}`}>
+              <a className="btn secondary" href={`/projects/${proj.id}?surface=travail`}>
                 Ouvrir
               </a>
             </li>
@@ -193,6 +297,7 @@ export default function PortfolioPage() {
               ))}
             </ul>
           )}
+          {pageNotice ? <p className="text-sm muted">{pageNotice}</p> : null}
           {nextCursor ? (
             <button
               type="button"
diff --git a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
index d90a9250..e0b16e4c 100644
--- a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
@@ -94,40 +94,104 @@ export default function ProjectPage() {
   const [docUi, setDocUi] = useState<DocUiState>("READING");
   const [reviseDraft, setReviseDraft] = useState("");
   const [reviseMessage, setReviseMessage] = useState("");
+  const [docMissing, setDocMissing] = useState("");
   const [unresolvedPending, setUnresolvedPending] = useState<ThreadPendingTurn | null>(null);
   const messageTurnKeyRef = useRef<{ content: string; key: string } | null>(null);
   const reviseCorrelationRef = useRef<string | null>(null);
-  const deepLinkAppliedRef = useRef(false);
+  const reviseBaseIdRef = useRef<string | null>(null);
+  const documentsRef = useRef<Doc[]>([]);
+  const docUiRef = useRef<DocUiState>("READING");
+  const reviseDraftRef = useRef("");

-  function syncSurfaceUrl(next: Surface, documentId?: string | null) {
+  useEffect(() => {
+    docUiRef.current = docUi;
+  }, [docUi]);
+  useEffect(() => {
+    reviseDraftRef.current = reviseDraft;
+  }, [reviseDraft]);
+  useEffect(() => {
+    documentsRef.current = documents;
+  }, [documents]);
+
+  function buildSurfaceUrl(next: Surface, documentId?: string | null) {
     const q = new URLSearchParams();
     q.set("surface", next);
     if (next === "document" && documentId) q.set("documentId", documentId);
-    router.replace(`/projects/${params.projectId}?${q.toString()}`, { scroll: false });
+    return `/projects/${params.projectId}?${q.toString()}`;
+  }
+
+  /** push = entrée d'historique ; replace = normalisation sans nouvelle entrée. */
+  function syncSurfaceUrl(
+    next: Surface,
+    documentId?: string | null,
+    mode: "push" | "replace" = "push",
+  ) {
+    const href = buildSurfaceUrl(next, documentId);
+    if (mode === "replace") router.replace(href, { scroll: false });
+    else router.push(href, { scroll: false });
   }

   function selectSurface(next: Surface) {
     setSurface(next);
+    setDocMissing("");
     if (next !== "document") {
       setInspect(null);
       setDocUi("READING");
       setReviseDraft("");
       setReviseMessage("");
       reviseCorrelationRef.current = null;
-      syncSurfaceUrl(next);
+      reviseBaseIdRef.current = null;
+      syncSurfaceUrl(next, null, "push");
     } else {
-      syncSurfaceUrl(next, inspect?.document.id ?? null);
+      syncSurfaceUrl(next, inspect?.document.id ?? null, "push");
     }
   }

-  function openDocumentReadOnly(doc: Doc) {
+  function openDocumentReadOnly(doc: Doc, mode: "push" | "replace" = "push") {
     setInspect(doc);
+    setDocMissing("");
     setDocUi("READING");
     setReviseDraft(doc.latestRevision?.contentMarkdown ?? "");
     setReviseMessage("");
     reviseCorrelationRef.current = null;
+    reviseBaseIdRef.current = doc.latestRevision?.id ?? null;
     setSurface("document");
-    syncSurfaceUrl("document", doc.document.id);
+    syncSurfaceUrl("document", doc.document.id, mode);
+  }
+
+  function applyUrlDocumentState(docs: Doc[], qSurface: Surface | null, qDocId: string | null) {
+    if (qSurface) setSurface(qSurface);
+    else setSurface("travail");
+
+    if (qSurface === "document") {
+      if (!qDocId) {
+        setInspect(null);
+        setDocMissing("");
+        return;
+      }
+      const match = docs.find((d) => d.document.id === qDocId);
+      if (match) {
+        setInspect(match);
+        setDocMissing("");
+        const ui = docUiRef.current;
+        const preserveDraft =
+          Boolean(reviseCorrelationRef.current) ||
+          ui === "EDITING" ||
+          ui === "SAVING" ||
+          ui === "CONFLICT" ||
+          ui === "UNKNOWN";
+        if (!preserveDraft) {
+          setDocUi("READING");
+          setReviseDraft(match.latestRevision?.contentMarkdown ?? "");
+        }
+      } else {
+        setInspect(null);
+        setDocMissing("Document introuvable ou non autorisé pour ce Pilote.");
+      }
+      return;
+    }
+    setInspect(null);
+    setDocMissing("");
   }

   function rememberPending(pending: ThreadPendingTurn | null) {
@@ -299,21 +363,18 @@ export default function ProjectPage() {
       );
       setError("");

-      // A2 deep-link: open inspection read-only; no mutation on open/refresh/back.
-      if (!deepLinkAppliedRef.current) {
-        deepLinkAppliedRef.current = true;
-        const qSurface = parseSurface(searchParams.get("surface"));
-        const qDocId = searchParams.get("documentId");
-        if (qSurface) setSurface(qSurface);
-        if (qSurface === "document" && qDocId) {
-          const match = docs.find((d) => d.document.id === qDocId);
-          if (match) {
-            setInspect(match);
-            setDocUi("READING");
-            setReviseDraft(match.latestRevision?.contentMarkdown ?? "");
-          }
-          // Foreign/unknown documentId: stay on document surface, no unauthorized open.
-        }
+      // Read *current* URL — never stale searchParams from effect closure (race with rail nav).
+      const live =
+        typeof window !== "undefined"
+          ? new URL(window.location.href).searchParams
+          : searchParams;
+      const qSurface = parseSurface(live.get("surface"));
+      const qDocId = live.get("documentId");
+      applyUrlDocumentState(docs, qSurface, qDocId);
+      // Normalize only when surface missing/invalid; do not clobber a live navigation.
+      const rawSurface = live.get("surface");
+      if (!rawSurface || (rawSurface && !qSurface)) {
+        syncSurfaceUrl(qSurface ?? "travail", qSurface === "document" ? qDocId : null, "replace");
       }

       await refreshDurablePilotage();
@@ -333,15 +394,53 @@ export default function ProjectPage() {
     // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [params.projectId, router]);

+  // B2 — keep surface/document in sync with URL on Back/Forward without one-shot lock.
+  useEffect(() => {
+    const qSurface = parseSurface(searchParams.get("surface"));
+    const qDocId = searchParams.get("documentId");
+    applyUrlDocumentState(documentsRef.current, qSurface, qDocId);
+    // eslint-disable-next-line react-hooks/exhaustive-deps
+  }, [searchParams]);
+
+  async function reconcileRevisionByCorrelation(
+    preparationIdValue: string,
+    documentId: string,
+    correlationKey: string,
+  ): Promise<{ found: boolean; status?: string; revisionId?: string }> {
+    try {
+      const res = await fetch(
+        `/api/preparations/${preparationIdValue}/documents/${documentId}`,
+      );
+      if (!res.ok) return { found: false };
+      const j = (await res.json()) as {
+        revisions?: Array<{ id: string; status: string; correlationKey?: string | null }>;
+      };
+      const hit = (j.revisions ?? []).find((r) => r.correlationKey === correlationKey);
+      if (!hit) return { found: false };
+      return { found: true, status: hit.status, revisionId: hit.id };
+    } catch {
+      return { found: false };
+    }
+  }
+
   async function saveRevision() {
-    if (!preparationId || !inspect?.latestRevision) return;
+    if (!preparationId || !inspect) return;
+    const baseId =
+      reviseBaseIdRef.current ?? inspect.latestRevision?.id ?? null;
+    if (!baseId) {
+      setDocUi("FAILED");
+      setReviseMessage("Base de révision absente.");
+      return;
+    }
     if (!reviseCorrelationRef.current) {
       reviseCorrelationRef.current =
         typeof crypto !== "undefined" && "randomUUID" in crypto
           ? `rev-${crypto.randomUUID()}`
           : `rev-${Date.now()}`;
     }
+    reviseBaseIdRef.current = baseId;
     const correlationKey = reviseCorrelationRef.current;
+    const draftSnapshot = reviseDraftRef.current || reviseDraft;
     setDocUi("SAVING");
     setReviseMessage("");
     try {
@@ -352,54 +451,133 @@ export default function ProjectPage() {
           headers: { "Content-Type": "application/json" },
           body: JSON.stringify({
             action: "revise",
-            baseRevisionId: inspect.latestRevision.id,
-            contentMarkdown: reviseDraft,
+            baseRevisionId: baseId,
+            contentMarkdown: draftSnapshot,
             correlationKey,
           }),
         },
       );
-      const j = await res.json().catch(() => ({}));
-      if (res.status === 409) {
+      const j = (await res.json().catch(() => ({}))) as {
+        status?: string;
+        reason?: string;
+        error?: string;
+        errorCategory?: string;
+        revisionId?: string;
+      };
+
+      // Prefer authoritative result.status over HTTP alone.
+      const resultStatus = String(j.status ?? "").toUpperCase();
+
+      if (res.status === 409 || resultStatus === "CONFLICT") {
         setDocUi("CONFLICT");
         setReviseMessage(
-          String(j.reason ?? j.error ?? "BASE_STALE") +
-            " — relire la version récente avant de choisir.",
+          `${j.reason ?? "BASE_STALE"} — nouvelle base présentée ; brouillon conservé. Rebasage explicite requis.`,
         );
+        // Refresh inspect (new base) but DO NOT overwrite reviseDraft.
         const proj = await fetch(`/api/projects/${params.projectId}`);
         if (proj.ok) {
           const pj = await proj.json();
           const docs = (pj.documents ?? []) as Doc[];
           setDocuments(docs);
           const fresh = docs.find((d) => d.document.id === inspect.document.id);
-          if (fresh) setInspect(fresh);
+          if (fresh) {
+            setInspect(fresh);
+            // Keep draft; update base pointer only when pilot accepts rebase.
+          }
         }
         return;
       }
-      if (!res.ok) {
-        setDocUi(res.status === 401 ? "FAILED" : "UNKNOWN");
-        setReviseMessage(String(j.error ?? j.errorCategory ?? "échec révision"));
+
+      if (resultStatus === "AVAILABLE") {
+        const proj = await fetch(`/api/projects/${params.projectId}`);
+        if (proj.ok) {
+          const pj = await proj.json();
+          const docs = (pj.documents ?? []) as Doc[];
+          setDocuments(docs);
+          const fresh = docs.find((d) => d.document.id === inspect.document.id);
+          if (fresh) {
+            setInspect(fresh);
+            setReviseDraft(fresh.latestRevision?.contentMarkdown ?? draftSnapshot);
+            reviseBaseIdRef.current = fresh.latestRevision?.id ?? null;
+          }
+        }
+        reviseCorrelationRef.current = null;
+        setDocUi("READING");
+        setReviseMessage("Révision enregistrée (AVAILABLE).");
         return;
       }
-      const proj = await fetch(`/api/projects/${params.projectId}`);
-      if (proj.ok) {
-        const pj = await proj.json();
-        const docs = (pj.documents ?? []) as Doc[];
-        setDocuments(docs);
-        const fresh = docs.find((d) => d.document.id === inspect.document.id);
-        if (fresh) {
-          setInspect(fresh);
-          setReviseDraft(fresh.latestRevision?.contentMarkdown ?? reviseDraft);
+
+      if (resultStatus === "UNKNOWN" || resultStatus === "SAVING" || !res.ok) {
+        // ACK / intermediate — reconcile by correlationKey before any new intention.
+        const recon = await reconcileRevisionByCorrelation(
+          preparationId,
+          inspect.document.id,
+          correlationKey,
+        );
+        if (recon.found && recon.status === "AVAILABLE") {
+          const proj = await fetch(`/api/projects/${params.projectId}`);
+          if (proj.ok) {
+            const pj = await proj.json();
+            const docs = (pj.documents ?? []) as Doc[];
+            setDocuments(docs);
+            const fresh = docs.find((d) => d.document.id === inspect.document.id);
+            if (fresh) {
+              setInspect(fresh);
+              setReviseDraft(fresh.latestRevision?.contentMarkdown ?? draftSnapshot);
+              reviseBaseIdRef.current = fresh.latestRevision?.id ?? null;
+            }
+          }
+          reviseCorrelationRef.current = null;
+          setDocUi("READING");
+          setReviseMessage("Révision confirmée après relecture (AVAILABLE).");
+          return;
         }
+        setDocUi(res.status === 401 ? "FAILED" : "UNKNOWN");
+        setReviseMessage(
+          recon.found
+            ? `État serveur ${recon.status} — brouillon et correlationKey conservés.`
+            : `ACK perdu / ${j.error ?? j.errorCategory ?? (resultStatus || `HTTP ${res.status}`)} — relecture sans match ; même clé pour retry.`,
+        );
+        return;
       }
-      reviseCorrelationRef.current = null;
-      setDocUi("READING");
-      setReviseMessage("Révision enregistrée.");
+
+      if (resultStatus === "FAILED") {
+        setDocUi("FAILED");
+        setReviseMessage(String(j.reason ?? j.error ?? "FAILED"));
+        return;
+      }
+
+      setDocUi("UNKNOWN");
+      setReviseMessage("Réponse non classée — aucune réussite affichée sans AVAILABLE.");
     } catch {
+      const recon = preparationId
+        ? await reconcileRevisionByCorrelation(
+            preparationId,
+            inspect.document.id,
+            correlationKey,
+          )
+        : { found: false as const };
+      if (recon.found && recon.status === "AVAILABLE") {
+        reviseCorrelationRef.current = null;
+        setDocUi("READING");
+        setReviseMessage("Révision confirmée après relecture réseau (AVAILABLE).");
+        return;
+      }
       setDocUi("UNKNOWN");
-      setReviseMessage("ACK perdu — même correlationKey conservée pour retry.");
+      setReviseMessage(
+        "ACK perdu (réseau) — brouillon, base et correlationKey conservés ; pas de double mutation automatique.",
+      );
     }
   }

+  function acceptConflictRebase() {
+    if (!inspect?.latestRevision) return;
+    reviseBaseIdRef.current = inspect.latestRevision.id;
+    reviseCorrelationRef.current = null; // new intention after explicit rebase
+    setDocUi("EDITING");
+    setReviseMessage("Base mise à jour — nouvelle intention (nouvelle correlationKey au prochain enregistrement).");
+  }
+
   async function sendMessage() {
     if (!draft.trim() || !preparationId) return;
     const text = draft.trim();
@@ -653,20 +831,32 @@ export default function ProjectPage() {
           </section>
           <section className="panel p-4 space-y-2" data-testid="document-inspect">
             <h2 className="font-medium">
-              {docUi === "EDITING" || docUi === "SAVING" || docUi === "CONFLICT"
+              {docUi === "EDITING" || docUi === "SAVING" || docUi === "CONFLICT" || docUi === "UNKNOWN"
                 ? "Révision"
                 : "Inspection"}
             </h2>
             <p className="text-xs muted" data-testid="document-ui-state">
               État: {docUi}
             </p>
+            {docMissing ? (
+              <p className="text-sm" data-testid="document-missing" role="status">
+                {docMissing}
+              </p>
+            ) : null}
             {inspect?.latestRevision ? (
               <>
                 <p className="text-xs muted">
                   {inspect.document.id} · v{inspect.latestRevision.revisionNumber} ·{" "}
                   {inspect.latestRevision.status}
+                  {reviseBaseIdRef.current
+                    ? ` · base intention ${reviseBaseIdRef.current.slice(0, 8)}…`
+                    : ""}
                 </p>
-                {docUi === "EDITING" || docUi === "SAVING" || docUi === "CONFLICT" || docUi === "UNKNOWN" ? (
+                {docUi === "EDITING" ||
+                docUi === "SAVING" ||
+                docUi === "CONFLICT" ||
+                docUi === "UNKNOWN" ||
+                docUi === "FAILED" ? (
                   <>
                     <textarea
                       className="textarea"
@@ -684,8 +874,22 @@ export default function ProjectPage() {
                         data-testid="document-revise-save"
                         onClick={() => void saveRevision()}
                       >
-                        {docUi === "SAVING" ? "Enregistrement…" : "Enregistrer la révision"}
+                        {docUi === "SAVING"
+                          ? "Enregistrement…"
+                          : docUi === "UNKNOWN"
+                            ? "Réessayer (même clé)"
+                            : "Enregistrer la révision"}
                       </button>
+                      {docUi === "CONFLICT" ? (
+                        <button
+                          type="button"
+                          className="btn secondary"
+                          data-testid="document-conflict-rebase"
+                          onClick={acceptConflictRebase}
+                        >
+                          Adopter la nouvelle base
+                        </button>
+                      ) : null}
                       <button
                         type="button"
                         className="btn secondary"
@@ -695,6 +899,7 @@ export default function ProjectPage() {
                           setReviseDraft(inspect.latestRevision?.contentMarkdown ?? "");
                           setReviseMessage("");
                           reviseCorrelationRef.current = null;
+                          reviseBaseIdRef.current = inspect.latestRevision?.id ?? null;
                         }}
                       >
                         Annuler
@@ -713,6 +918,7 @@ export default function ProjectPage() {
                           setDocUi("EDITING");
                           setReviseDraft(inspect.latestRevision?.contentMarkdown ?? "");
                           reviseCorrelationRef.current = null;
+                          reviseBaseIdRef.current = inspect.latestRevision?.id ?? null;
                         }}
                       >
                         Réviser
@@ -737,9 +943,9 @@ export default function ProjectPage() {
                   </p>
                 ) : null}
               </>
-            ) : (
+            ) : !docMissing ? (
               <p className="text-sm muted">Sélectionner un document pour inspecter.</p>
-            )}
+            ) : null}
           </section>
         </div>
       ) : null}
diff --git a/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx b/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
index 1ee2d7e5..4144458d 100644
--- a/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
+++ b/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
@@ -5,43 +5,18 @@ import { usePathname, useSearchParams } from "next/navigation";
 import { PRODUCT_VERSIONING } from "@/lib/product-version";
 import {
   STUDIO_RAIL_VARIANTS,
+  buildShellNav,
   railStyle,
   resolveRailVariant,
-  type StudioRailVariant,
 } from "./studio-rail";

-type NavItem = { href: string; label: string; match?: (path: string) => boolean };
-
-function navFor(variant: StudioRailVariant): NavItem[] {
-  const base: NavItem[] = [
-    {
-      href: "/portfolio",
-      label: "Portefeuille",
-      match: (p) => p.startsWith("/portfolio") || p === "/",
-    },
-  ];
-  if (variant === "personnel") {
-    return [...base, { href: "/login", label: "Connexion", match: (p) => p.startsWith("/login") }];
-  }
-  if (variant === "conversation" || variant === "projet" || variant === "inspection") {
-    return [
-      ...base,
-      { href: "#", label: "Travail" },
-      { href: "#", label: "Pilotage" },
-      { href: "#", label: "Documents" },
-      { href: "#", label: "Journal" },
-    ];
-  }
-  return base;
-}
-
 export function StudioShell({ children }: { children: React.ReactNode }) {
   const pathname = usePathname() || "/";
   const searchParams = useSearchParams();
   const surface = searchParams.get("surface");
   const variant = resolveRailVariant({ pathname, surface });
   const tokens = STUDIO_RAIL_VARIANTS[variant];
-  const items = navFor(variant);
+  const items = buildShellNav({ pathname, surface });

   return (
     <div className="min-h-screen flex studio-shell" data-rail-variant={variant}>
@@ -50,6 +25,7 @@ export function StudioShell({ children }: { children: React.ReactNode }) {
         style={railStyle(tokens)}
         aria-label="Navigation Studio"
         data-testid="studio-rail"
+        data-rail-variant={variant}
         data-rail-component-id={tokens.railComponentId}
         data-rail-source-node={tokens.sourceNodeId}
         data-rail-width={tokens.widthPx}
@@ -64,20 +40,25 @@ export function StudioShell({ children }: { children: React.ReactNode }) {
         </div>
         <nav className="flex flex-col text-sm" style={{ gap: tokens.gap }} aria-label="Principal">
           {items.map((item) => {
-            const active = item.match ? item.match(pathname) : false;
-            if (item.href === "#") {
+            if (!item.href) {
               return (
-                <span key={item.label} className="muted" aria-hidden={variant === "personnel"}>
+                <span
+                  key={item.key}
+                  className="muted"
+                  title={item.disabledReason}
+                  data-testid={`nav-disabled-${item.key}`}
+                >
                   {item.label}
                 </span>
               );
             }
             return (
               <Link
-                key={item.href}
+                key={item.key}
                 href={item.href}
-                className={active ? "font-semibold text-[var(--ink)]" : undefined}
-                aria-current={active ? "page" : undefined}
+                className={item.active ? "font-semibold text-[var(--ink)]" : undefined}
+                aria-current={item.active ? "page" : undefined}
+                data-testid={`nav-${item.key}`}
               >
                 {item.label}
               </Link>
@@ -89,14 +70,31 @@ export function StudioShell({ children }: { children: React.ReactNode }) {
         </p>
       </aside>

-      {/* Mobile: rail hidden — keyboard/accessible substitute */}
+      {/* Mobile: accessible equivalent of authorized surfaces */}
       <nav
         className="md:hidden flex gap-3 p-3 border-b border-[var(--line)] text-sm overflow-x-auto"
         aria-label="Navigation Studio mobile"
         data-testid="studio-rail-mobile"
       >
-        <Link href="/portfolio">Portefeuille</Link>
-        <Link href="/login">Connexion</Link>
+        {items.map((item) => {
+          if (!item.href) {
+            return (
+              <span key={item.key} className="muted whitespace-nowrap" title={item.disabledReason}>
+                {item.label}
+              </span>
+            );
+          }
+          return (
+            <Link
+              key={item.key}
+              href={item.href}
+              className={`whitespace-nowrap ${item.active ? "font-semibold" : ""}`}
+              aria-current={item.active ? "page" : undefined}
+            >
+              {item.label}
+            </Link>
+          );
+        })}
       </nav>

       <main className="flex-1 p-4 md:p-8 min-w-0">{children}</main>
diff --git a/projects/sfia-studio-next/web/src/components/shell/studio-rail.ts b/projects/sfia-studio-next/web/src/components/shell/studio-rail.ts
index 1134595e..49987fdd 100644
--- a/projects/sfia-studio-next/web/src/components/shell/studio-rail.ts
+++ b/projects/sfia-studio-next/web/src/components/shell/studio-rail.ts
@@ -1,12 +1,17 @@
 /**
  * F1 Navigation rail variants — values from G2 railEvidence (VERIFY PASS).
  * Discriminant fills are intentional: personnel ≠ projet.
+ *
+ * Variant selection follows proven frame ↔ route ↔ state mapping (G2),
+ * not a free pathname heuristic.
  */

 import type { CSSProperties } from "react";

 export type StudioRailVariant = "personnel" | "projet" | "conversation" | "inspection";

+export type StudioSurface = "travail" | "pilotage" | "journal" | "document";
+
 export type StudioRailTokens = {
   variant: StudioRailVariant;
   widthPx: number;
@@ -72,6 +77,29 @@ export const STUDIO_RAIL_VARIANTS: Record<StudioRailVariant, StudioRailTokens> =
   },
 };

+export const PROJECT_SURFACES: StudioSurface[] = [
+  "travail",
+  "pilotage",
+  "journal",
+  "document",
+];
+
+export function parseStudioSurface(raw: string | null | undefined): StudioSurface | null {
+  if (!raw) return null;
+  const v = raw.toLowerCase();
+  return PROJECT_SURFACES.includes(v as StudioSurface) ? (v as StudioSurface) : null;
+}
+
+export function parseProjectId(pathname: string): string | null {
+  const m = pathname.match(/^\/projects\/([^/?#]+)/);
+  return m?.[1] ?? null;
+}
+
+export function parsePreparationId(pathname: string): string | null {
+  const m = pathname.match(/^\/preparations\/([^/?#]+)/);
+  return m?.[1] ?? null;
+}
+
 export function railStyle(tokens: StudioRailTokens): CSSProperties {
   return {
     width: tokens.widthPx,
@@ -84,7 +112,14 @@ export function railStyle(tokens: StudioRailTokens): CSSProperties {
   };
 }

-/** Resolve F1 variant from route + surface query (A2 deep-link aware). */
+/**
+ * Frame ↔ route ↔ state (G2):
+ * - portefeuille / login → personnel (portfolio frames)
+ * - préparation (sas) → conversation
+ * - projet + travail (fil) → conversation
+ * - projet + document → inspection
+ * - projet + pilotage|journal → projet
+ */
 export function resolveRailVariant(input: {
   pathname: string;
   surface?: string | null;
@@ -97,10 +132,90 @@ export function resolveRailVariant(input: {
     return "conversation";
   }
   if (path.startsWith("/projects/")) {
-    const surface = (input.surface ?? "").toLowerCase();
+    const surface = parseStudioSurface(input.surface) ?? "travail";
     if (surface === "document") return "inspection";
-    if (surface === "travail" || surface === "") return "conversation";
+    if (surface === "travail") return "conversation";
     return "projet";
   }
   return "personnel";
 }
+
+export type ShellNavItem = {
+  key: string;
+  label: string;
+  href: string | null;
+  active: boolean;
+  /** Inactive without context — never a fake # link. */
+  disabledReason?: string;
+};
+
+export function buildShellNav(input: {
+  pathname: string;
+  surface?: string | null;
+}): ShellNavItem[] {
+  const path = input.pathname || "/";
+  const projectId = parseProjectId(path);
+  const preparationId = parsePreparationId(path);
+  const surface = parseStudioSurface(input.surface) ?? (projectId ? "travail" : null);
+
+  const items: ShellNavItem[] = [
+    {
+      key: "portfolio",
+      label: "Portefeuille",
+      href: "/portfolio",
+      active: path.startsWith("/portfolio") || path === "/",
+    },
+  ];
+
+  if (!projectId && !preparationId) {
+    items.push({
+      key: "login",
+      label: "Connexion",
+      href: "/login",
+      active: path.startsWith("/login"),
+    });
+    return items;
+  }
+
+  if (preparationId) {
+    items.push({
+      key: "sas",
+      label: "Sas",
+      href: `/preparations/${preparationId}`,
+      active: true,
+    });
+    // Surfaces projet require projectId — show disabled labels, not fake links.
+    for (const [key, label] of [
+      ["travail", "Travail"],
+      ["pilotage", "Pilotage"],
+      ["document", "Documents"],
+      ["journal", "Journal"],
+    ] as const) {
+      items.push({
+        key,
+        label,
+        href: null,
+        active: false,
+        disabledReason: "Disponible après création / ouverture du projet",
+      });
+    }
+    return items;
+  }
+
+  // project context — real surface URLs
+  const surfaces: Array<{ key: StudioSurface; label: string }> = [
+    { key: "travail", label: "Travail" },
+    { key: "pilotage", label: "Pilotage" },
+    { key: "document", label: "Documents" },
+    { key: "journal", label: "Journal" },
+  ];
+  for (const s of surfaces) {
+    items.push({
+      key: s.key,
+      label: s.label,
+      href: `/projects/${projectId}?surface=${s.key}`,
+      active: surface === s.key,
+    });
+  }
+  return items;
+}
diff --git a/projects/sfia-studio-next/web/tests/e2e/g4-b1-b4-correctifs.spec.ts b/projects/sfia-studio-next/web/tests/e2e/g4-b1-b4-correctifs.spec.ts
new file mode 100644
index 00000000..fd1cb7a5
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/e2e/g4-b1-b4-correctifs.spec.ts
@@ -0,0 +1,107 @@
+import { test, expect } from "@playwright/test";
+
+/**
+ * B1–B4 targeted BROWSER checks on isolated E2E lane (Playwright config),
+ * not the operator DEV :3100 process.
+ */
+test("G4 B1–B4: rail surfaces, resume without POST, deep-link, revise AVAILABLE", async ({
+  page,
+}) => {
+  await page.goto("/login");
+  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
+  await page.waitForURL("**/portfolio");
+
+  // B4 — create once (new label)
+  await page.getByTestId("portfolio-new-prep").click();
+  await page.waitForURL("**/preparations/**");
+  const prepUrl = page.url();
+  const prepId = prepUrl.split("/preparations/")[1]?.split(/[?#]/)[0];
+  expect(prepId).toBeTruthy();
+
+  await page.getByPlaceholder("Écrire à Nora…").fill("G4 correctifs B1-B4");
+  await page.getByRole("button", { name: "Envoyer" }).click();
+  await expect(page.getByText("openai-agents-sdk-live")).toHaveCount(0);
+  await expect(page.getByText("Nora deterministic-fixture · COMPLETE", { exact: false })).toBeVisible({
+    timeout: 30000,
+  });
+
+  await page.getByPlaceholder("Nom du projet").fill("Projet G4 B");
+  await page.getByPlaceholder("Résumé inspecté").fill("résumé g4");
+  await page.getByRole("button", { name: "Enregistrer l'aperçu" }).click();
+  await page.getByRole("button", { name: "Document", exact: true }).click();
+  await page.locator("textarea").first().fill("# Doc G4\nligne");
+  await page.getByTestId("doc-save").click();
+  await expect(page.getByTestId("surface-status")).toContainText(/AVAILABLE/i, { timeout: 10000 });
+  await page.getByRole("button", { name: "Travail" }).click();
+  await page.getByRole("button", { name: "Créer le projet" }).click();
+  await page.waitForURL("**/projects/**", { timeout: 15000 });
+  const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
+  expect(projectId).toBeTruthy();
+
+  // B1 — real rail links with surface query
+  const rail = page.getByTestId("studio-rail");
+  await expect(rail.getByTestId("nav-travail")).toHaveAttribute(
+    "href",
+    `/projects/${projectId}?surface=travail`,
+  );
+  await rail.getByTestId("nav-pilotage").click();
+  await expect(page).toHaveURL(new RegExp(`/projects/${projectId}\\?surface=pilotage`));
+  await rail.getByTestId("nav-document").click();
+  await expect(page).toHaveURL(new RegExp(`surface=document`));
+  await expect(page.getByTestId("studio-rail")).toHaveAttribute("data-rail-variant", "inspection");
+  await expect(page.getByTestId("document-inspect")).toBeVisible({ timeout: 10000 });
+
+  // Open first document if listed
+  const firstDoc = page.locator('[data-testid^="doc-open-"]').first();
+  await expect(firstDoc).toBeVisible({ timeout: 15000 });
+  const docTestId = await firstDoc.getAttribute("data-testid");
+  const documentId = docTestId?.replace("doc-open-", "");
+  expect(documentId).toBeTruthy();
+  await firstDoc.click();
+  await expect(page).toHaveURL(new RegExp(`documentId=${documentId}`));
+
+  // B2 — reload keeps deep-link; no mutation claimed on open
+  await page.reload();
+  await expect(page).toHaveURL(new RegExp(`surface=document`));
+  await expect(page).toHaveURL(new RegExp(`documentId=${documentId}`));
+  await expect(page.getByTestId("document-ui-state")).toContainText("READING");
+
+  // Back to travail then Forward
+  await page.goBack();
+  await page.goForward();
+  await expect(page).toHaveURL(new RegExp(`documentId=${documentId}`));
+
+  // Foreign documentId → controlled empty (no content body of another doc)
+  await page.goto(`/projects/${projectId}?surface=document&documentId=doc_foreign_denied`);
+  await expect(page.getByTestId("document-missing")).toBeVisible();
+
+  // B3 — revise AVAILABLE only
+  await page.goto(`/projects/${projectId}?surface=document&documentId=${documentId}`);
+  await page.getByTestId("document-revise-start").click();
+  await page.getByTestId("document-revise-draft").fill("# Doc G4\nligne révisée");
+  await page.getByTestId("document-revise-save").click();
+  await expect(page.getByTestId("document-revise-message")).toContainText(/AVAILABLE/i, {
+    timeout: 15000,
+  });
+  await expect(page.getByTestId("document-ui-state")).toContainText("READING");
+
+  // B4 — Reprendre = GET only (no POST to /api/preparations on resume)
+  let prepPostCount = 0;
+  page.on("request", (req) => {
+    if (req.method() === "POST" && /\/api\/preparations\/?$/.test(new URL(req.url()).pathname)) {
+      prepPostCount += 1;
+    }
+  });
+  await page.goto("/portfolio");
+  // Create an open prep to resume: use existing list if any, else new then back
+  const resumeButtons = page.locator('[data-testid^="resume-prep-"]');
+  if ((await resumeButtons.count()) === 0) {
+    await page.getByTestId("portfolio-new-prep").click();
+    await page.waitForURL("**/preparations/**");
+    await page.goto("/portfolio");
+  }
+  prepPostCount = 0;
+  await page.locator('[data-testid^="resume-prep-"]').first().click();
+  await page.waitForURL("**/preparations/**");
+  expect(prepPostCount).toBe(0);
+});
diff --git a/projects/sfia-studio-next/web/tests/e2e/ml1-smoke.spec.ts b/projects/sfia-studio-next/web/tests/e2e/ml1-smoke.spec.ts
index 11fb2737..6679ec13 100644
--- a/projects/sfia-studio-next/web/tests/e2e/ml1-smoke.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/ml1-smoke.spec.ts
@@ -11,7 +11,7 @@ test("DEV fake login → sas → message Nora FAKE → document → create → p
   await expect(page.getByRole("heading", { name: "Portefeuille" })).toBeVisible();
   await expect(page.getByText("Aucune Nora globale", { exact: false })).toBeVisible();

-  await page.getByRole("button", { name: "Ouvrir un sas (sans projet)" }).click();
+  await page.getByTestId("portfolio-new-prep").click();
   await page.waitForURL("**/preparations/**");

   await page.getByPlaceholder("Écrire à Nora…").fill("Bonjour Nora depuis Playwright");
diff --git a/projects/sfia-studio-next/web/tests/unit/studio-rail.test.ts b/projects/sfia-studio-next/web/tests/unit/studio-rail.test.ts
index 703534e8..f352007f 100644
--- a/projects/sfia-studio-next/web/tests/unit/studio-rail.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/studio-rail.test.ts
@@ -1,6 +1,7 @@
 import { describe, expect, it } from "vitest";
 import {
   STUDIO_RAIL_VARIANTS,
+  buildShellNav,
   resolveRailVariant,
 } from "@/components/shell/studio-rail";

@@ -18,7 +19,7 @@ describe("F1 studio rail variants (G2 railEvidence)", () => {
     expect(STUDIO_RAIL_VARIANTS.inspection.widthPx).toBe(244);
   });

-  it("resolves variant from route and surface", () => {
+  it("resolves variant from proven route ↔ state mapping", () => {
     expect(resolveRailVariant({ pathname: "/portfolio" })).toBe("personnel");
     expect(resolveRailVariant({ pathname: "/login" })).toBe("personnel");
     expect(resolveRailVariant({ pathname: "/preparations/abc" })).toBe("conversation");
@@ -31,5 +32,27 @@ describe("F1 studio rail variants (G2 railEvidence)", () => {
     expect(
       resolveRailVariant({ pathname: "/projects/p1", surface: "pilotage" }),
     ).toBe("projet");
+    expect(
+      resolveRailVariant({ pathname: "/projects/p1", surface: "journal" }),
+    ).toBe("projet");
+  });
+});
+
+describe("B1 shell navigation", () => {
+  it("exposes real project surface hrefs (no #)", () => {
+    const items = buildShellNav({ pathname: "/projects/proj-1", surface: "pilotage" });
+    const travail = items.find((i) => i.key === "travail");
+    const docs = items.find((i) => i.key === "document");
+    expect(travail?.href).toBe("/projects/proj-1?surface=travail");
+    expect(docs?.href).toBe("/projects/proj-1?surface=document");
+    expect(items.every((i) => i.href !== "#")).toBe(true);
+    expect(items.find((i) => i.key === "pilotage")?.active).toBe(true);
+  });
+
+  it("disables project surfaces without project context (prep)", () => {
+    const items = buildShellNav({ pathname: "/preparations/prep-1" });
+    const travail = items.find((i) => i.key === "travail");
+    expect(travail?.href).toBeNull();
+    expect(travail?.disabledReason).toBeTruthy();
   });
 });

```

## 8. Réserves / suite

- F2/G5 calibration ≤2 CSS px + Playwright multi-viewport captures : **restant**
- Pack g2-source `scripts/tmp/` untracked : hygiène avant PR future (non détruit)
- `main` local peut diverger ; base normative = origin/main @f0d59bc8
- Aucune annonce G5 PASS

## 9. Verdict

**G4 B1–B4 REVIEW PACK FULL — READY FOR CHATGPT REVIEW** (sous réserve handoff distant vérifié §10)
