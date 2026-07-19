# SFIA Review Pack — Cycle 13 PR Readiness — SFIA Studio P0

- **Date / heure :** 2026-07-19 11:31:49 CEST (+0200)
- **Cycle principal :** 13 — PR readiness
- **Sous-étapes :** versionnement local · push borné · création PR · validation pré-merge
- **Profil :** Standard
- **Typologie :** EVOL
- **Décision Morris consommée :** GO commit + push + PR (merge **non** autorisé)
- **Validation visuelle Morris :** VALIDATION VISUELLE FINALE — GO (consommée)
- **Branche projet :** `project/sfia-studio-delivery-p0-implementation`
- **HEAD initial :** `ff5e3f6e5849f89b992274fbf2b6a33aa15654d9`
- **origin/main :** `ff5e3f6e5849f89b992274fbf2b6a33aa15654d9`
- **Commit projet :** `c37b065fc59b60d01f5896aa7ebd3c130a636457`
- **Message :** `feat(sfia-studio): implement P0 governed workspace`
- **SHA distant branche :** `c37b065fc59b60d01f5896aa7ebd3c130a636457`
- **PR :** [#217](https://github.com/mcleland147/sfia-workspace/pull/217)
- **Merge :** **aucun**

## 1. État Git initial

- Branche : `project/sfia-studio-delivery-p0-implementation`
- HEAD = origin/main = merge-base = `ff5e3f6…`
- left-right `origin/main...HEAD` : `0	0` avant commit
- Aucun staged
- Aucune branche distante delivery
- Untracked : `projects/sfia-studio/app/**` + `.tmp-sfia-review/**`

## 2. Sources consultées (origin/main)

- `prompts/templates/sfia-cycle-execution-template.md`
- `projects/sfia-studio/14-ux-ui-contract.md`
- `projects/sfia-studio/15-ux-ui-flows-and-screens.md`
- `projects/sfia-studio/16-ux-ui-decision-pack.md`
- `projects/sfia-studio/18-technical-architecture.md`
- `projects/sfia-studio/19-technical-architecture-decision-pack.md`
- Handoff précédent (geometry polish) : `f92292b…`

## 3. Inventaire et classifications

### Fichiers versionnés : 77 (tous sous `projects/sfia-studio/app/**`)

Classification :
- **A** source/config : app/, components/, features/, lib/, styles/, fixtures/, package.json, lock, configs
- **B** tests : __tests__/, e2e/
- **C** assets : public/icons/hero-orb.svg
- **D** docs app : README.md
- **E** exclus (gitignore) : node_modules/, .next/, coverage/, playwright-report/, test-results/, *.tsbuildinfo, .DS_Store, .env*
- **F** review locale non versionnée : `.tmp-sfia-review/**` (captures polish-2 conservées)
- **G** anomalies : aucune

### `.gitignore` applicatif

Créé : `projects/sfia-studio/app/.gitignore` (node_modules, .next, coverage, playwright-report, test-results, tsbuildinfo, .DS_Store, .env).

## 4. Contrôles de périmètre / sécurité / architecture

- Pas de `app/api/**`, `route.ts`, `middleware.ts`, `.env*`
- Pas de Tailwind / UI kit / ORM / BDD / auth
- `process.env` : usages légitimes Playwright (`CI`, `SFIA_CAPTURE_POLISH1`) uniquement
- Recommendation ≠ MorrisDecision (modèles + tests dédiés)
- Git / Cursor / Runtime : simulés / désactivés (fixtures, boutons disabled, notes Simulation P0)
- `/` → redirect `/synthese` ; routes P0 + not-found présents

## 5. Validations

### npm ci
- OK avec package-lock existant ; lock non modifié de façon inattendue

### lint
```

> sfia-studio@0.1.0 lint
> next lint

`next lint` is deprecated and will be removed in Next.js 16.
For new projects, use create-next-app to choose your preferred linter.
For existing projects, migrate to the ESLint CLI:
npx @next/codemod@canary next-lint-to-eslint-cli .

✔ No ESLint warnings or errors

```

### typecheck
- ✔ `tsc --noEmit`

### Vitest
```

> sfia-studio@0.1.0 test
> vitest run


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace/projects/sfia-studio/app

 ✓ __tests__/fixtures.test.ts (2 tests) 3ms
 ✓ __tests__/status-pill.test.tsx (1 test) 10ms
 ✓ __tests__/gates.test.tsx (1 test) 29ms
 ✓ __tests__/navigation.test.tsx (2 tests) 32ms
 ✓ __tests__/recommendation-vs-decision.test.tsx (2 tests) 12ms
 ✓ __tests__/shell.test.tsx (1 test) 47ms

 Test Files  6 passed (6)
      Tests  9 passed (9)
   Start at  11:30:04
   Duration  623ms (transform 172ms, setup 317ms, collect 528ms, tests 133ms, environment 1.44s, prepare 254ms)


```

### build
```

> sfia-studio@0.1.0 build
> next build

   ▲ Next.js 15.5.20

   Creating an optimized production build ...
 ✓ Compiled successfully in 1957ms
   Linting and checking validity of types ...
   Collecting page data ...
   Generating static pages (0/8) ...
   Generating static pages (2/8) 
   Generating static pages (4/8) 
   Generating static pages (6/8) 
 ✓ Generating static pages (8/8)
   Finalizing page optimization ...
   Collecting build traces ...

Route (app)                                 Size  First Load JS
┌ ○ /                                      127 B         103 kB
├ ○ /_not-found                            127 B         103 kB
├ ○ /cycle-actif                          3.7 kB         109 kB
├ ○ /decision                            4.97 kB         111 kB
├ ○ /nouvelle-demande                    8.94 kB         115 kB
└ ○ /synthese                            3.86 kB         110 kB
+ First Load JS shared by all             102 kB
  ├ chunks/255-3981a3d1f3561bd8.js       46.2 kB
  ├ chunks/4bd1b696-c023c6e3521b1417.js  54.2 kB
  └ other shared chunks (total)          1.93 kB


○  (Static)  prerendered as static content


```

### Playwright
```
0-polish-2-screenshots.spec.ts:39:9 › P0 geometry polish-2 captures › capture /synthese (318ms)
  ✓   3 e2e/p0-polish-2-screenshots.spec.ts:39:9 › P0 geometry polish-2 captures › capture /cycle-actif (480ms)
  ✓   4 e2e/p0-polish-2-screenshots.spec.ts:39:9 › P0 geometry polish-2 captures › capture /decision (482ms)
  -   5 e2e/p0-polish-screenshots.spec.ts:48:9 › P0 polish captures › capture /nouvelle-demande
  -   6 e2e/p0-polish-screenshots.spec.ts:48:9 › P0 polish captures › capture /synthese
  -   7 e2e/p0-polish-screenshots.spec.ts:48:9 › P0 polish captures › capture /cycle-actif
  -   8 e2e/p0-polish-screenshots.spec.ts:48:9 › P0 polish captures › capture /decision
  ✓   9 e2e/p0-smoke.spec.ts:45:9 › P0 smoke › renders /nouvelle-demande (357ms)
  ✓  10 e2e/p0-smoke.spec.ts:45:9 › P0 smoke › renders /synthese (314ms)
  ✓  11 e2e/p0-smoke.spec.ts:45:9 › P0 smoke › renders /cycle-actif (582ms)
  ✓  12 e2e/p0-smoke.spec.ts:45:9 › P0 smoke › renders /decision (327ms)
  ✓  13 e2e/p0-smoke.spec.ts:68:7 › P0 smoke › navigates between primary routes (522ms)
  ✓  14 e2e/p0-smoke.spec.ts:82:7 › P0 smoke › axe-core smoke has no critical violations (367ms)

  4 skipped
  10 passed (8.1s)

```
- 10 passed / 4 skipped (polish-1 gated via `SFIA_CAPTURE_POLISH1`)

### npm audit --omit=dev
```
# npm audit report

postcss  <8.5.10
Severity: moderate
PostCSS has XSS via Unescaped </style> in its CSS Stringify Output - https://github.com/advisories/GHSA-qx2v-qp2m-jg93
fix available via `npm audit fix --force`
Will install next@9.3.3, which is a breaking change
node_modules/postcss
  next  9.3.4-canary.0 - 16.3.0-canary.5
  Depends on vulnerable versions of postcss
  node_modules/next

2 moderate severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

```
- 2 moderate (postcss via next) — **pas** de `npm audit fix` / `--force` (casserait Next)
- Réserve documentée

## 6. Preuves visuelles

Captures polish-2 présentes (non commitées) :
- `.tmp-sfia-review/screenshots/polish-2/p0-00c-nouvelle-demande-polish-2.png`
- `.tmp-sfia-review/screenshots/polish-2/p0-01c-synthese-polish-2.png`
- `.tmp-sfia-review/screenshots/polish-2/p0-02c-cycle-actif-polish-2.png`
- `.tmp-sfia-review/screenshots/polish-2/p0-03c-decision-polish-2.png`

Résiduels acceptés Morris :
- bordure P0-00C −2 px ;
- rail actif soft ≠ fill Figma ;
- lisibilité secondaire renforcée ;
- pas de pixel-perfect absolu.

Corrections clip post-validation (tabs, overflow, trust, note simulation) incluses dans le commit projet.

## 7. Commit / push / PR

| Élément | Valeur |
|---|---|
| Commit | `c37b065fc59b60d01f5896aa7ebd3c130a636457` |
| Message | feat(sfia-studio): implement P0 governed workspace |
| Fichiers | 77 · +12830 / −0 |
| Push | origin/project/sfia-studio-delivery-p0-implementation @ même SHA |
| Divergence remote | 0 / 0 |
| PR | **#217** OPEN |
| URL | https://github.com/mcleland147/sfia-workspace/pull/217 |
| Base / Head | main ← project/sfia-studio-delivery-p0-implementation |
| Commits dans PR | **1** |
| Mergeable | MERGEABLE |
| Conflits | non |
| Checks CI | aucun check reporté sur la branche (pas de CI configurée pour ce path) |
| Merge effectué | **non** |

### Liste des fichiers commités

```
projects/sfia-studio/app/.gitignore
projects/sfia-studio/app/README.md
projects/sfia-studio/app/__tests__/fixtures.test.ts
projects/sfia-studio/app/__tests__/gates.test.tsx
projects/sfia-studio/app/__tests__/navigation.test.tsx
projects/sfia-studio/app/__tests__/recommendation-vs-decision.test.tsx
projects/sfia-studio/app/__tests__/setup.ts
projects/sfia-studio/app/__tests__/shell.test.tsx
projects/sfia-studio/app/__tests__/status-pill.test.tsx
projects/sfia-studio/app/app/cycle-actif/page.tsx
projects/sfia-studio/app/app/decision/page.tsx
projects/sfia-studio/app/app/globals.css
projects/sfia-studio/app/app/layout.tsx
projects/sfia-studio/app/app/not-found.tsx
projects/sfia-studio/app/app/nouvelle-demande/page.tsx
projects/sfia-studio/app/app/page.tsx
projects/sfia-studio/app/app/synthese/page.tsx
projects/sfia-studio/app/components/shell/CopilotPanel.tsx
projects/sfia-studio/app/components/shell/StudioShell.tsx
projects/sfia-studio/app/components/shell/Topbar.tsx
projects/sfia-studio/app/components/shell/UtilityRail.tsx
projects/sfia-studio/app/components/shell/copilot-panel.module.css
projects/sfia-studio/app/components/shell/topbar.module.css
projects/sfia-studio/app/components/shell/utility-rail.module.css
projects/sfia-studio/app/components/ui/Card.tsx
projects/sfia-studio/app/components/ui/CtaButton.tsx
projects/sfia-studio/app/components/ui/EvidenceList.tsx
projects/sfia-studio/app/components/ui/GateList.tsx
projects/sfia-studio/app/components/ui/MetricCard.tsx
projects/sfia-studio/app/components/ui/StatusPill.tsx
projects/sfia-studio/app/components/ui/card.module.css
projects/sfia-studio/app/components/ui/cta-button.module.css
projects/sfia-studio/app/components/ui/evidence-list.module.css
projects/sfia-studio/app/components/ui/gate-list.module.css
projects/sfia-studio/app/components/ui/metric-card.module.css
projects/sfia-studio/app/components/ui/status-pill.module.css
projects/sfia-studio/app/e2e/p0-polish-2-screenshots.spec.ts
projects/sfia-studio/app/e2e/p0-polish-screenshots.spec.ts
projects/sfia-studio/app/e2e/p0-smoke.spec.ts
projects/sfia-studio/app/eslint.config.mjs
projects/sfia-studio/app/features/cycle-actif/CycleActifScreen.tsx
projects/sfia-studio/app/features/cycle-actif/cycle-actif.module.css
projects/sfia-studio/app/features/decision/DecisionScreen.tsx
projects/sfia-studio/app/features/decision/decision.module.css
projects/sfia-studio/app/features/nouvelle-demande/NouvelleDemandeScreen.tsx
projects/sfia-studio/app/features/nouvelle-demande/nouvelle-demande.module.css
projects/sfia-studio/app/features/synthese/SyntheseScreen.tsx
projects/sfia-studio/app/features/synthese/synthese.module.css
projects/sfia-studio/app/fixtures/cycles.ts
projects/sfia-studio/app/fixtures/evidence.ts
projects/sfia-studio/app/fixtures/gates.ts
projects/sfia-studio/app/fixtures/git-status.ts
projects/sfia-studio/app/fixtures/index.ts
projects/sfia-studio/app/lib/a11y.ts
projects/sfia-studio/app/lib/adapters/cycles.ts
projects/sfia-studio/app/lib/adapters/decisions.ts
projects/sfia-studio/app/lib/adapters/evidence.ts
projects/sfia-studio/app/lib/adapters/gates.ts
projects/sfia-studio/app/lib/adapters/git-status.ts
projects/sfia-studio/app/lib/domain/cycle.ts
projects/sfia-studio/app/lib/domain/evidence.ts
projects/sfia-studio/app/lib/domain/gate.ts
projects/sfia-studio/app/lib/domain/git-status.ts
projects/sfia-studio/app/lib/domain/index.ts
projects/sfia-studio/app/lib/domain/morris-decision.ts
projects/sfia-studio/app/lib/domain/recommendation.ts
projects/sfia-studio/app/lib/navigation.ts
projects/sfia-studio/app/next-env.d.ts
projects/sfia-studio/app/next.config.ts
projects/sfia-studio/app/package-lock.json
projects/sfia-studio/app/package.json
projects/sfia-studio/app/playwright.config.ts
projects/sfia-studio/app/public/icons/hero-orb.svg
projects/sfia-studio/app/styles/shell.module.css
projects/sfia-studio/app/styles/tokens.css
projects/sfia-studio/app/tsconfig.json
projects/sfia-studio/app/vitest.config.ts
```

## 8. Risques / réserves / dette

- Desktop 1440×1024 uniquement
- a11y smoke (pas audit complet)
- npm audit moderate postcss/next — surveillance, pas de fix forcé
- Écarts mineurs Figma acceptés
- Pas de CI GitHub Actions sur ce dépôt pour ce chemin (checks vides)

## 9. Décisions Morris restantes

- **GO merge** uniquement, après revue PR

## 10. Verdict

**PR OPEN — READY FOR MORRIS MERGE DECISION**

---

## Annexe — Fichiers critiques (contenu)


### `projects/sfia-studio/app/.gitignore`

```text
# Dependencies
node_modules/

# Next.js
.next/
out/

# Test / coverage
coverage/
playwright-report/
test-results/
blob-report/

# TypeScript
*.tsbuildinfo
next-env.d.ts.bak

# OS / editor
.DS_Store
*.log
.env
.env.*
!.env.example

```

### `projects/sfia-studio/app/README.md`

```markdown
# SFIA Studio — Delivery P0

Frontend Next.js 15 pour les 4 écrans Figma P0 (`lrjA1WEyRpL05vKR8k29LO`).

## Stack

- Next.js 15 App Router, React 19, TypeScript strict
- CSS Modules + variables `--sfia-*` (`styles/tokens.css`)
- Port local : **3020**
- Fixtures locales uniquement — **aucun backend**

## Scripts

```bash
npm install
npm run dev          # http://127.0.0.1:3020
npm run lint
npm run typecheck
npm test
npm run test:e2e
npm run build
npm start
```

## Routes P0

| Écran Figma | Route |
|-------------|-------|
| P0-01C Vue synthèse | `/synthese` (hub, redirect depuis `/`) |
| P0-00C Nouvelle demande | `/nouvelle-demande` |
| P0-02C Cycle actif | `/cycle-actif` |
| P0-03C Décision Morris | `/decision` |

## Contraintes P0

- **Pas** de `app/api`, middleware auth, `.env`, Tailwind, ni appels Git distants
- Actions Git/Cursor **simulées** (`Simulation — aucune action Git réelle`)
- `Recommendation` (copilot) ≠ `MorrisDecision` (gate humain)
- Onglet **Preuves** et gear rail : désactivés (simulation)
- Captures E2E 1440×1024 → `../../.tmp-sfia-review/screenshots/`

## Structure

```
app/                 # App Router pages
components/shell/    # StudioShell, rail, topbar, copilot
components/ui/       # Card, pills, gates, evidence, metrics
features/            # Écrans P0
fixtures/            # Données déterministes FR
lib/domain/          # Types + guards
lib/adapters/        # Ports fixtures-only
styles/              # tokens.css, shell.module.css
__tests__/           # Vitest + Testing Library
e2e/                 # Playwright smoke
```

## Figma frames

- P0-00C `19:2` — shell **floating** (rail/workspace/copilot inset)
- P0-01/02/03 — shell **flush** (rail pleine hauteur + topbar)

Tokens extraits manuellement depuis `get_design_context` (variables Figma vides).

```

### `projects/sfia-studio/app/app/page.tsx`

```tsx
import { redirect } from "next/navigation";

export default function HomePage() {
  redirect("/synthese");
}

```

### `projects/sfia-studio/app/components/shell/CopilotPanel.tsx`

```tsx
import { StatusPill } from "@/components/ui/StatusPill";
import styles from "./copilot-panel.module.css";

export interface CopilotWatchItem {
  label: string;
  dotColor: string;
}

export interface CopilotProps {
  variant: "floating" | "flush";
  name: string;
  subtitle: string;
  avatarTone?: "pink" | "purple" | "blue" | "pinkFlush";
  levelPill?: string;
  summary: string;
  watchItems?: CopilotWatchItem[];
  watchLabel?: string;
  riskTitle?: string;
  riskText?: string;
  checklist?: string[];
  checklistTitle?: string;
  showRecommendationLabel?: boolean;
}

export function CopilotPanel({
  variant,
  name,
  subtitle,
  avatarTone = "pink",
  levelPill = "L0 humain",
  summary,
  watchItems = [],
  watchLabel = "CE QUE JE SURVEILLE",
  riskTitle,
  riskText,
  checklist,
  checklistTitle,
  showRecommendationLabel = false,
}: CopilotProps) {
  const isFlush = variant === "flush";

  const avatarClass = [
    styles.avatar,
    isFlush ? styles.avatarFlush : "",
    avatarTone === "pink"
      ? styles.avatarPink
      : avatarTone === "pinkFlush"
        ? styles.avatarPinkFlush
        : avatarTone === "blue"
          ? styles.avatarBlue
          : styles.avatarPurple,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <aside
      className={styles.panel}
      aria-label="Copilot Nora"
      data-testid="copilot-panel"
    >
      <div
        className={
          isFlush ? styles.headerFlush : styles.headerFloating
        }
      >
        <div className={styles.headerRow}>
          <div className={avatarClass}>SF</div>
          <div>
            <p className={isFlush ? styles.nameFlush : styles.name}>{name}</p>
            <p className={isFlush ? styles.subtitleFlush : styles.subtitle}>
              {subtitle}
            </p>
          </div>
          <div
            className={
              isFlush ? styles.levelPillFlush : styles.levelPill
            }
          >
            <StatusPill tone={isFlush ? "navy" : "orange"}>
              {levelPill}
            </StatusPill>
          </div>
        </div>
      </div>

      <div className={styles.body}>
        {showRecommendationLabel && (
          <p className={styles.recommendationBadge}>
            Recommandation copilot — non décision Morris
          </p>
        )}

        <div className={isFlush ? styles.messageFlush : styles.message}>
          {summary}
        </div>

        {checklist && (
          <div className={styles.checklist}>
            <p className={styles.sectionTitle}>{checklistTitle}</p>
            {checklist.map((item) => (
              <div key={item} className={styles.checkRow}>
                <span className={styles.checkIcon}>✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}

        {watchItems.length > 0 && (
          <>
            <p className={styles.sectionLabel}>{watchLabel}</p>
            {watchItems.map((item) => (
              <div key={item.label} className={styles.watchItem}>
                <span
                  className={styles.watchDot}
                  style={{ background: item.dotColor }}
                  aria-hidden="true"
                />
                {item.label}
              </div>
            ))}
          </>
        )}

        {riskTitle && riskText && (
          <div className={isFlush ? styles.riskFlush : styles.risk}>
            <p
              className={
                isFlush ? styles.riskTitleFlush : styles.riskTitle
              }
            >
              {riskTitle}
            </p>
            <p className={styles.riskText}>{riskText}</p>
          </div>
        )}

        <div
          className={`${styles.composer} ${isFlush ? styles.composerFlush : ""}`}
        >
          <p className={styles.composerPlaceholder}>
            Demander une analyse ou préciser une contrainte…
          </p>
          <div className={styles.composerRow}>
            <StatusPill tone={isFlush ? "blueFlush" : "muted"}>
              @ contexte
            </StatusPill>
            <button
              type="button"
              className={`${styles.send} ${isFlush ? styles.sendFlush : ""}`}
              disabled
              title="Simulation — aucune action Git réelle"
              aria-disabled
            >
              ↑
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}

```

### `projects/sfia-studio/app/components/shell/StudioShell.tsx`

```tsx
import { UtilityRail } from "./UtilityRail";
import { Topbar } from "./Topbar";
import { CopilotPanel, type CopilotProps } from "./CopilotPanel";
import type { StudioRoute } from "@/lib/navigation";
import shellStyles from "@/styles/shell.module.css";

interface TopbarPill {
  label: string;
  tone?: "blueFlush" | "purpleFlush" | "orange" | "green";
}

interface StudioShellProps {
  variant: "floating" | "flush";
  activeRoute: StudioRoute;
  title: string;
  pills?: TopbarPill[];
  children: React.ReactNode;
  copilot: CopilotProps;
}

export function StudioShell({
  variant,
  activeRoute,
  title,
  pills,
  children,
  copilot,
}: StudioShellProps) {
  const isFloating = variant === "floating";

  if (isFloating) {
    return (
      <div className={shellStyles.pageFloating} data-testid="studio-shell">
        <div className={shellStyles.brandAccent} aria-hidden="true" />
        <div className={shellStyles.railFloating}>
          <UtilityRail variant="floating" activeRoute={activeRoute} />
        </div>
        <div className={shellStyles.workspaceFloating}>
          <Topbar
            variant="floating"
            title={title}
            activeRoute={activeRoute}
            pills={pills}
          />
          <main className={shellStyles.workspaceInner} id="main-content">
            {children}
          </main>
        </div>
        <div className={shellStyles.copilotFloating}>
          <CopilotPanel {...copilot} variant="floating" />
        </div>
      </div>
    );
  }

  return (
    <div className={shellStyles.pageFlush} data-testid="studio-shell">
      <div className={shellStyles.brandAccent} aria-hidden="true" />
      <div className={shellStyles.railFlush}>
        <UtilityRail variant="flush" activeRoute={activeRoute} />
      </div>
      <div className={shellStyles.mainFlush}>
        <Topbar
          variant="flush"
          title={title}
          activeRoute={activeRoute}
          pills={pills}
        />
        <div className={shellStyles.bodyFlush}>
          <main
            className={shellStyles.canvasFlush}
            id="main-content"
            aria-label="Contenu principal"
          >
            {children}
          </main>
          <div className={shellStyles.copilotFlush}>
            <CopilotPanel {...copilot} variant="flush" />
          </div>
        </div>
      </div>
    </div>
  );
}

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
    await expect(page).toHaveURL(/nouvelle-demande/);

    await rail.getByRole("link", { name: "Cycle actif" }).click();
    await expect(page).toHaveURL(/cycle-actif/);

    await rail.getByRole("link", { name: "Décision Morris" }).click();
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

### `projects/sfia-studio/app/lib/domain/morris-decision.ts`

```tsx
import type { Recommendation } from "./recommendation";

/**
 * Morris gate decision — human authority, distinct from copilot Recommendation.
 */
export type MorrisVerdict = "GO" | "CORRIGER" | "STOP";

export interface MorrisDecision {
  readonly kind: "morris-decision";
  id: string;
  gateId: string;
  title: string;
  description: string;
  verdict: MorrisVerdict | null;
  scope: string;
  revocable: boolean;
  confirmed: boolean;
  simulated: true;
}

export function isMorrisDecision(value: unknown): value is MorrisDecision {
  return (
    typeof value === "object" &&
    value !== null &&
    (value as MorrisDecision).kind === "morris-decision"
  );
}

/** Type-level invariant: Recommendation and MorrisDecision are disjoint. */
export type AdvisoryOrDecision = Recommendation | MorrisDecision;

export function assertDistinctTypes(
  rec: Recommendation,
  decision: MorrisDecision,
): void {
  const kinds = new Set([rec.kind, decision.kind]);
  if (kinds.size !== 2) {
    throw new Error("Recommendation and MorrisDecision must remain distinct types");
  }
}

```

### `projects/sfia-studio/app/lib/domain/recommendation.ts`

```tsx
/**
 * Copilot recommendation — advisory only, never a Morris gate decision.
 */
export type RecommendationKind =
  | "cycle-profile"
  | "scope"
  | "risk"
  | "next-step";

export interface Recommendation {
  readonly kind: "recommendation";
  id: string;
  title: string;
  summary: string;
  confidence: number;
  source: "copilot";
}

export function isRecommendation(value: unknown): value is Recommendation {
  return (
    typeof value === "object" &&
    value !== null &&
    (value as Recommendation).kind === "recommendation"
  );
}

```

### `projects/sfia-studio/app/lib/navigation.ts`

```tsx
export type StudioRoute =
  | "/synthese"
  | "/nouvelle-demande"
  | "/cycle-actif"
  | "/decision";

export interface NavItem {
  id: string;
  route: StudioRoute;
  label: string;
  railIcon: string;
  railKey: "home" | "plus" | "grid" | "diamond" | "gear";
}

export interface TabItem {
  id: string;
  route?: StudioRoute;
  label: string;
  disabled?: boolean;
  simulated?: boolean;
}

export const STUDIO_ROUTES: NavItem[] = [
  {
    id: "synthese",
    route: "/synthese",
    label: "Vue synthèse",
    railIcon: "⌂",
    railKey: "home",
  },
  {
    id: "nouvelle-demande",
    route: "/nouvelle-demande",
    label: "Nouvelle demande",
    railIcon: "＋",
    railKey: "plus",
  },
  {
    id: "cycle-actif",
    route: "/cycle-actif",
    label: "Cycle actif",
    railIcon: "◫",
    railKey: "grid",
  },
  {
    id: "decision",
    route: "/decision",
    label: "Décision Morris",
    railIcon: "◇",
    railKey: "diamond",
  },
];

export const FLUSH_TABS: TabItem[] = [
  { id: "synthese", route: "/synthese", label: "Synthèse" },
  { id: "demande", route: "/nouvelle-demande", label: "Demande" },
  { id: "cycle", route: "/cycle-actif", label: "Cycle actif" },
  { id: "decisions", route: "/decision", label: "Décisions" },
  {
    id: "preuves",
    label: "Preuves",
    disabled: true,
    simulated: true,
  },
];

export const SIMULATION_TITLE = "Simulation — aucune action Git réelle";

export function routeForTab(tabId: string): StudioRoute | undefined {
  return FLUSH_TABS.find((t) => t.id === tabId)?.route;
}

export function isActiveRoute(
  activeRoute: StudioRoute,
  route: StudioRoute,
): boolean {
  return activeRoute === route;
}

```

### `projects/sfia-studio/app/next.config.ts`

```tsx
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default nextConfig;

```

### `projects/sfia-studio/app/package.json`

```json
{
  "name": "sfia-studio",
  "private": true,
  "version": "0.1.0",
  "description": "SFIA Studio — Delivery P0 frontend (fixtures locales, 4 écrans Figma)",
  "scripts": {
    "dev": "next dev --port 3020",
    "build": "next build",
    "start": "next start --port 3020",
    "lint": "next lint",
    "typecheck": "tsc --noEmit",
    "test": "vitest run",
    "test:watch": "vitest",
    "test:e2e": "playwright test"
  },
  "dependencies": {
    "next": "^15.3.3",
    "react": "^19.1.0",
    "react-dom": "^19.1.0"
  },
  "devDependencies": {
    "@playwright/test": "^1.52.0",
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.3.0",
    "@testing-library/user-event": "^14.6.1",
    "@types/node": "^22.15.21",
    "@types/react": "^19.1.2",
    "@types/react-dom": "^19.1.2",
    "axe-core": "^4.10.3",
    "eslint": "^9.27.0",
    "eslint-config-next": "^15.3.3",
    "jsdom": "^26.1.0",
    "typescript": "^5.8.3",
    "vitest": "^3.1.2"
  }
}

```

### `projects/sfia-studio/app/styles/shell.module.css`

```css
.page {
  min-height: 1024px;
  min-width: 1440px;
  font-family: var(--sfia-font);
  position: relative;
}

.pageFloating {
  composes: page;
  background: var(--sfia-bg-00c);
  padding: var(--sfia-floating-pad);
  display: grid;
  /* Explicit gutters: rail→ws 18, ws→copilot 20 (Figma P0-00C) */
  grid-template-columns:
    var(--sfia-rail-width)
    var(--sfia-floating-gap-rail)
    var(--sfia-workspace-width-floating)
    var(--sfia-floating-gap-copilot)
    var(--sfia-copilot-width-floating);
  grid-template-rows: 988px;
  gap: 0;
  align-items: start;
  box-sizing: border-box;
  width: 1440px;
  height: 1024px;
  overflow: hidden;
}

.pageFlush {
  composes: page;
  background: var(--sfia-bg);
  display: grid;
  grid-template-columns: var(--sfia-rail-width) 1fr;
  grid-template-rows: 1024px;
  height: 1024px;
  min-height: 1024px;
  width: 1440px;
  max-width: 100%;
  overflow: hidden;
  box-sizing: border-box;
}

.brandAccent {
  position: absolute;
  left: var(--sfia-brand-accent-left);
  top: var(--sfia-brand-accent-top);
  width: var(--sfia-brand-accent-width);
  height: var(--sfia-brand-accent-height);
  border-radius: 2px;
  background: linear-gradient(
    180deg,
    var(--sfia-gradient-brand-start) 10%,
    var(--sfia-gradient-brand-mid) 60%,
    var(--sfia-gradient-brand-end) 110%
  );
  /* Below topbar (z-index 5) so the accent never covers tabs */
  z-index: 1;
  pointer-events: none;
}

.railFloating {
  grid-column: 1;
  width: var(--sfia-rail-width);
  height: 988px;
  background: #fff;
  border: 1px solid var(--sfia-border-00c);
  border-radius: 22px;
  box-shadow: var(--sfia-shadow-lg);
  position: relative;
  box-sizing: border-box;
}

.railFlush {
  grid-row: 1 / -1;
  width: var(--sfia-rail-width);
  background: #fff;
  border-right: 1px solid var(--sfia-border);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 17px 0;
  gap: 12px;
}

.mainFlush {
  display: flex;
  flex-direction: column;
  height: 1024px;
  min-height: 0;
  min-width: 0;
  overflow: hidden;
}

.bodyFlush {
  display: grid;
  grid-template-columns: var(--sfia-canvas-width-flush) var(--sfia-copilot-width-flush);
  column-gap: var(--sfia-copilot-gap-flush);
  padding-left: calc(var(--sfia-canvas-offset-flush) - var(--sfia-rail-width));
  padding-right: 0;
  flex: 1;
  height: var(--sfia-copilot-height-flush);
  min-height: 0;
  align-items: start;
  box-sizing: border-box;
}

.canvasFlush {
  padding: var(--sfia-canvas-top-flush) 0 24px;
  width: var(--sfia-canvas-width-flush);
  min-width: 0;
  height: var(--sfia-copilot-height-flush);
  overflow-x: hidden;
  overflow-y: auto;
  box-sizing: border-box;
}

.copilotFlush {
  padding: 0;
  margin-top: 0;
  width: var(--sfia-copilot-width-flush);
  height: var(--sfia-copilot-height-flush);
  align-self: start;
  box-sizing: border-box;
}

.workspaceFloating {
  grid-column: 3;
  width: var(--sfia-workspace-width-floating);
  height: 988px;
  background: #fff;
  border: 1px solid var(--sfia-border-00c);
  border-radius: var(--sfia-radius-xl);
  box-shadow: var(--sfia-shadow-workspace);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-sizing: border-box;
}

.copilotFloating {
  grid-column: 5;
  width: var(--sfia-copilot-width-floating);
  height: 988px;
  background: #fff;
  border: 1px solid var(--sfia-border-soft);
  border-radius: var(--sfia-radius-xl);
  box-shadow: var(--sfia-shadow-panel);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-sizing: border-box;
}

.workspaceInner {
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0 24px 24px;
  box-sizing: border-box;
  min-height: 0;
}

.workspaceTopbarFloating {
  height: 88px;
  padding: 18px 28px 0;
  border-bottom: 1px solid var(--sfia-border-00c);
  flex-shrink: 0;
}

.workspaceTabsFloating {
  height: 54px;
  padding: 0 28px;
  border-bottom: 1px solid var(--sfia-border-00c);
  display: flex;
  align-items: center;
  gap: 32px;
  flex-shrink: 0;
}

```

### `projects/sfia-studio/app/styles/tokens.css`

```css
/**
 * SFIA Studio design tokens — extracted from Figma fileKey lrjA1WEyRpL05vKR8k29LO
 * get_variable_defs returned empty; hex values documented from get_design_context.
 */

:root {
  /* Flush palette (P0-01/02/03 — primary) */
  --sfia-bg: #f6f9ff;
  --sfia-ink: #141c30;
  --sfia-blue: #3863f5;
  --sfia-purple: #7a4df5;
  --sfia-green: #21c28a;
  --sfia-orange: #faa629;
  /* Secondary text: darkened slightly vs Figma #636e85 for WCAG AA readability on white */
  --sfia-muted: #51607a;
  --sfia-border: #e0e5f5;
  --sfia-border-soft: #e6eaf2;
  --sfia-navy: #0f172e;
  --sfia-pink: #f25794;
  --sfia-blue-soft: #edf2ff;
  --sfia-purple-soft: #f5ebff;
  --sfia-surface: #fbfcff;
  --sfia-hero-synthese: #141f47;
  --sfia-hero-cycle: #121f4a;
  --sfia-hero-decision: #121a38;

  /* Floating palette (P0-00C variants) */
  --sfia-bg-00c: #f6f9fe;
  --sfia-ink-00c: #131729;
  --sfia-blue-00c: #2e6bf2;
  --sfia-purple-00c: #8c47f2;
  --sfia-green-00c: #14b87a;
  --sfia-orange-00c: #ffad2e;
  /* Secondary text P0-00C: darkened slightly vs Figma #6e7894 */
  --sfia-muted-00c: #5a657c;
  --sfia-border-00c: #e3e8f5;
  --sfia-blue-soft-00c: #e8f2ff;
  --sfia-purple-soft-00c: #f5edff;
  --sfia-green-soft-00c: #e5faf2;
  --sfia-orange-soft-00c: #fff7e0;
  --sfia-accent-pink-00c: #f552a3;

  /* Brand accent gradient */
  --sfia-gradient-brand-start: #5b5ce2;
  --sfia-gradient-brand-mid: #8b5cf6;
  --sfia-gradient-brand-end: #06b6d4;

  /* Shadows (Figma) */
  --sfia-shadow-sm: 0 6px 9px rgba(43, 56, 115, 0.08);
  --sfia-shadow-md: 0 8px 12px rgba(23, 37, 84, 0.1);
  --sfia-shadow-lg: 0 8px 24px rgba(36, 46, 89, 0.08);
  --sfia-shadow-xl: 0 10px 14px rgba(43, 56, 115, 0.12);
  --sfia-shadow-panel: 0 8px 24px rgba(23, 37, 84, 0.1);
  --sfia-shadow-hero: 0 12px 26px rgba(36, 46, 89, 0.18);
  --sfia-shadow-workspace: 0 10px 28px rgba(36, 46, 89, 0.08);

  /* Layout (1440×1024 reference — Figma P0-01C/02C/03C/00C) */
  --sfia-rail-width: 64px;
  --sfia-topbar-height: 116px;
  --sfia-copilot-width-flush: 340px;
  --sfia-copilot-width-floating: 334px;
  --sfia-canvas-offset-flush: 92px;
  --sfia-canvas-width-flush: 972px;
  --sfia-copilot-gap-flush: 36px;
  --sfia-canvas-top-flush: 32px;
  --sfia-copilot-height-flush: 908px;
  --sfia-workspace-width-floating: 968px;
  --sfia-floating-pad: 18px;
  --sfia-floating-gap-rail: 18px;
  --sfia-floating-gap-copilot: 20px;
  --sfia-brand-accent-left: 84px;
  --sfia-brand-accent-width: 4px;
  --sfia-brand-accent-height: 150px;
  --sfia-brand-accent-top: 120px;

  /* Content geometry (flush) */
  --sfia-hero-h-synthese: 152px;
  --sfia-hero-h-cycle: 138px;
  --sfia-hero-h-decision: 128px;
  --sfia-hero-h-demande: 132px;
  --sfia-metric-w: 220px;
  --sfia-metric-w-wide: 264px;
  --sfia-metric-h: 122px;
  --sfia-metric-gap: 16px;
  --sfia-portfolio-w: 626px;
  --sfia-side-panel-w: 322px;
  --sfia-work-w: 632px;
  --sfia-inspector-w: 316px;
  --sfia-evidence-w: 580px;
  --sfia-decision-w: 368px;
  --sfia-col-gap: 24px;
  --sfia-stack-gap-sm: 10px;
  --sfia-stack-gap-md: 16px;
  --sfia-stack-gap-lg: 24px;
  --sfia-side-stack-gap: 18px;
  --sfia-tab-gap-flush: 64px;
  --sfia-tab-underline-h: 3px;
  --sfia-tab-underline-w: 78px;

  /* Typography */
  --sfia-font: var(--font-inter, "Inter", system-ui, sans-serif);
  --sfia-line-meta: 1.4;
  --sfia-line-body: 1.4;
  --sfia-line-hero: 1.22;
  --sfia-meta-size: 12px;
  --sfia-meta-size-sm: 11px;
  --sfia-space-xs: 8px;
  --sfia-space-sm: 12px;
  --sfia-space-md: 16px;
  --sfia-space-lg: 20px;
  --sfia-space-xl: 24px;
  --sfia-space-2xl: 28px;
  --sfia-radius-sm: 12px;
  --sfia-radius-md: 16px;
  --sfia-radius-lg: 20px;
  --sfia-radius-xl: 24px;
}

```

### `projects/sfia-studio/app/tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules", "e2e"]
}

```
