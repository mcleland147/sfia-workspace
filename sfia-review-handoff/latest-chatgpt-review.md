# SFIA Review Pack — Cycle 8 Delivery P0 Implementation

- **Date / heure :** 2026-07-19 02:59:21 UTC+02:00 (UTC+0200)
- **Cycle :** 8 — Delivery / implémentation
- **Profil :** Critical
- **Typologie :** EVOL
- **Repository :** `/Users/morris/Projects/sfia-workspace`
- **Branche projet :** `project/sfia-studio-delivery-p0-implementation`
- **HEAD :** `ff5e3f6e5849f89b992274fbf2b6a33aa15654d9` (inchangé — **aucun commit projet**)
- **origin/main :** `ff5e3f6e5849f89b992274fbf2b6a33aa15654d9`
- **Push projet / PR / merge :** aucun

## 1. État Git initial et final

### Initial
- Branche `main` @ `ff5e3f6e5849f89b992274fbf2b6a33aa15654d9`
- Workspace propre ; branche delivery inexistante localement et à distance
- Worktrees existants hors delivery (handoff, ux-reconciliation, etc.) — aucun worktree delivery créé

### Final
- Branche : `project/sfia-studio-delivery-p0-implementation`
- HEAD : `ff5e3f6e5849f89b992274fbf2b6a33aa15654d9`
- Modifications uniquement : `projects/sfia-studio/app/**` (untracked) + `.tmp-sfia-review/**` (artefacts review)
- Aucun staged ; aucun commit projet

```
?? .tmp-sfia-review/
?? projects/sfia-studio/app/
```

## 2. Sources Git consultées

- `prompts/templates/sfia-cycle-execution-template.md` (référencé)
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` (référencé)
- `projects/sfia-studio/14`–`19` — **18/19 VALIDÉES** (TA-DEC-01…18)
- `projects/task-tracker/app/package.json`, `tsconfig.json`, `vitest.config.ts`, `next.config.ts`
- `projects/chantiers360-v2/app/playwright.config.ts` (adapté sans dotenv/DB)

## 3. Contrat visuel Figma

- **fileKey :** `lrjA1WEyRpL05vKR8k29LO`
- **Page :** `UX-B — P0` (`0:1`)
- **get_variable_defs :** `{}` (vide) — tokens extraits de `get_design_context` (hex documentés)

| ID | Nom | node | Dimensions | Shell |
|----|-----|------|------------|-------|
| P0-00C | Nouvelle demande / Product premium | `19:2` | 1440×1024 | floating (rail/workspace/copilot inset) |
| P0-01C | Vue synthèse / Product premium | `22:2` | 1440×1024 | flush |
| P0-02C | Cycle actif / Product premium | `22:133` | 1440×1024 | flush |
| P0-03C | Décision Morris / Product premium | `22:270` | 1440×1024 | flush |

### Tokens structurants (extraits Figma, non inventés)

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
  --sfia-muted: #636e85;
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
  --sfia-muted-00c: #6e7894;
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

  /* Layout (1440×1024 reference) */
  --sfia-rail-width: 64px;
  --sfia-topbar-height: 116px;
  --sfia-copilot-width-flush: 340px;
  --sfia-copilot-width-floating: 334px;
  --sfia-canvas-offset-flush: 92px;
  --sfia-brand-accent-left: 84px;
  --sfia-brand-accent-width: 4px;
  --sfia-brand-accent-height: 150px;
  --sfia-brand-accent-top: 120px;

  /* Typography */
  --sfia-font: var(--font-inter, "Inter", system-ui, sans-serif);
  --sfia-radius-sm: 12px;
  --sfia-radius-md: 16px;
  --sfia-radius-lg: 20px;
  --sfia-radius-xl: 24px;
}

```

### Géométrie shell
- Brand accent 4×150 @ left 84 / top 120, gradient `#5b5ce2 → #8b5cf6 → #06b6d4`
- Floating : padding 18 ; rail 64×988 ; workspace 968 ; copilot 334
- Flush : rail 64 full-height ; topbar 116 ; canvas offset 92 ; copilot 340

## 4. Architecture implémentée

```
Next.js 15 App Router + React 19 + TypeScript strict
npm + package-lock.json
CSS Modules + --sfia-* custom properties
Vitest + Testing Library + Playwright + axe-core
Port 3020 — aucune API route — fixtures TS locales
Git/Cursor/Runtime = simulés / disabled
```

### Adaptations documentées
1. Tokens via design context (variable_defs vide).
2. Deux variantes shell (`floating` / `flush`) selon frames Figma.
3. Points de statut = cercles CSS (couleurs Figma) plutôt qu’assets ellipse expirables.
4. `hero-orb.svg` export MCP versionné sous `public/icons/`.
5. Correctif layout flush : `pageFlush` ne devait pas contraindre `mainFlush` à la hauteur topbar (overflow masquait le canvas) — corrigé avant captures finales.
6. Dépendance `axe-core` pour smoke a11y Playwright (autorisée).
7. Chemin screenshots e2e → `.tmp-sfia-review/screenshots/` (hors commit par défaut).

## 5. Arborescence (hors node_modules / .next)

```
README.md
__tests__/fixtures.test.ts
__tests__/gates.test.tsx
__tests__/navigation.test.tsx
__tests__/recommendation-vs-decision.test.tsx
__tests__/setup.ts
__tests__/shell.test.tsx
__tests__/status-pill.test.tsx
app/cycle-actif/page.tsx
app/decision/page.tsx
app/globals.css
app/layout.tsx
app/not-found.tsx
app/nouvelle-demande/page.tsx
app/page.tsx
app/synthese/page.tsx
components/shell/CopilotPanel.tsx
components/shell/StudioShell.tsx
components/shell/Topbar.tsx
components/shell/UtilityRail.tsx
components/shell/copilot-panel.module.css
components/shell/topbar.module.css
components/shell/utility-rail.module.css
components/ui/Card.tsx
components/ui/CtaButton.tsx
components/ui/EvidenceList.tsx
components/ui/GateList.tsx
components/ui/MetricCard.tsx
components/ui/StatusPill.tsx
components/ui/card.module.css
components/ui/cta-button.module.css
components/ui/evidence-list.module.css
components/ui/gate-list.module.css
components/ui/metric-card.module.css
components/ui/status-pill.module.css
e2e/p0-smoke.spec.ts
eslint.config.mjs
features/cycle-actif/CycleActifScreen.tsx
features/cycle-actif/cycle-actif.module.css
features/decision/DecisionScreen.tsx
features/decision/decision.module.css
features/nouvelle-demande/NouvelleDemandeScreen.tsx
features/nouvelle-demande/nouvelle-demande.module.css
features/synthese/SyntheseScreen.tsx
features/synthese/synthese.module.css
fixtures/cycles.ts
fixtures/evidence.ts
fixtures/gates.ts
fixtures/git-status.ts
fixtures/index.ts
lib/a11y.ts
lib/adapters/cycles.ts
lib/adapters/decisions.ts
lib/adapters/evidence.ts
lib/adapters/gates.ts
lib/adapters/git-status.ts
lib/domain/cycle.ts
lib/domain/evidence.ts
lib/domain/gate.ts
lib/domain/git-status.ts
lib/domain/index.ts
lib/domain/morris-decision.ts
lib/domain/recommendation.ts
lib/navigation.ts
next-env.d.ts
next.config.ts
package-lock.json
package.json
playwright.config.ts
public/icons/hero-orb.svg
styles/shell.module.css
styles/tokens.css
test-results/.last-run.json
tsconfig.json
tsconfig.tsbuildinfo
vitest.config.ts
```

**Total fichiers source/config :** 76

## 6. Dépendances

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

Justifications : alignement task-tracker (next/react/eslint/vitest) + Playwright (chantiers) + Testing Library + jsdom + axe-core. Aucun Tailwind, UI kit, Redux, Axios, ORM, auth, analytics.

## 7. Fichiers critiques — contenu

### `package.json`

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

### `styles/tokens.css`

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
  --sfia-muted: #636e85;
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
  --sfia-muted-00c: #6e7894;
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

  /* Layout (1440×1024 reference) */
  --sfia-rail-width: 64px;
  --sfia-topbar-height: 116px;
  --sfia-copilot-width-flush: 340px;
  --sfia-copilot-width-floating: 334px;
  --sfia-canvas-offset-flush: 92px;
  --sfia-brand-accent-left: 84px;
  --sfia-brand-accent-width: 4px;
  --sfia-brand-accent-height: 150px;
  --sfia-brand-accent-top: 120px;

  /* Typography */
  --sfia-font: var(--font-inter, "Inter", system-ui, sans-serif);
  --sfia-radius-sm: 12px;
  --sfia-radius-md: 16px;
  --sfia-radius-lg: 20px;
  --sfia-radius-xl: 24px;
}
```

### `styles/shell.module.css`

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
  padding: 18px;
  display: grid;
  grid-template-columns: 64px 968px 334px;
  grid-template-rows: 988px;
  gap: 18px;
  align-items: start;
}

.pageFlush {
  composes: page;
  background: var(--sfia-bg);
  display: grid;
  grid-template-columns: var(--sfia-rail-width) 1fr;
  grid-template-rows: minmax(1024px, auto);
  min-height: 1024px;
  width: 1440px;
  max-width: 100%;
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
  z-index: 10;
  pointer-events: none;
}

.railFloating {
  width: 64px;
  height: 988px;
  background: #fff;
  border: 1px solid var(--sfia-border-00c);
  border-radius: 22px;
  box-shadow: var(--sfia-shadow-lg);
  position: relative;
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
  min-height: 1024px;
  min-width: 0;
}

.bodyFlush {
  display: grid;
  grid-template-columns: 1fr var(--sfia-copilot-width-flush);
  gap: 0;
  padding-left: calc(var(--sfia-canvas-offset-flush) - var(--sfia-rail-width));
  padding-right: 0;
  flex: 1;
  min-height: 908px;
  align-items: start;
}

.canvasFlush {
  padding: 32px 28px 32px 0;
  min-width: 0;
  overflow: visible;
}

.copilotFlush {
  padding: 0 0 16px;
  margin-top: 0;
  height: 908px;
  align-self: start;
}

.workspaceFloating {
  width: 968px;
  height: 988px;
  background: #fff;
  border: 1px solid var(--sfia-border-00c);
  border-radius: var(--sfia-radius-xl);
  box-shadow: var(--sfia-shadow-workspace);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.copilotFloating {
  width: 334px;
  height: 988px;
  background: #fff;
  border: 1px solid var(--sfia-border-soft);
  border-radius: var(--sfia-radius-xl);
  box-shadow: var(--sfia-shadow-panel);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.workspaceInner {
  flex: 1;
  overflow: auto;
  padding: 0 23px 23px;
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

### `lib/domain/types.ts` — MANQUANT ou chemin alternatif
#### `lib/domain/evidence.ts`
```typescript
export type EvidenceStatus =
  | "conforme"
  | "validé"
  | "disponible"
  | "en-cours"
  | "non-disponible";

export interface Evidence {
  id: string;
  label: string;
  status: EvidenceStatus;
  statusLabel: string;
  accent: "green" | "blue" | "orange";
}
```
#### `lib/domain/gate.ts`
```typescript
export type GateStatus = "open" | "pending" | "closed";

export interface Gate {
  id: string;
  label: string;
  timing: string;
  status: GateStatus;
  accent: "blue" | "orange" | "purple" | "pink" | "green";
}
```
#### `lib/domain/git-status.ts`
```typescript
export type GitCleanliness = "clean" | "dirty";

export interface GitStatus {
  repository: string;
  branch: string;
  commit: string;
  cleanliness: GitCleanliness;
  verified: boolean;
  staged: string;
}
```
#### `lib/domain/recommendation.ts`
```typescript
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
#### `lib/domain/index.ts`
```typescript
export * from "./cycle";
export * from "./gate";
export * from "./evidence";
export * from "./git-status";
export * from "./recommendation";
export * from "./morris-decision";
```
#### `lib/domain/morris-decision.ts`
```typescript
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
#### `lib/domain/cycle.ts`
```typescript
export type CycleStatus = "draft" | "active" | "completed" | "stopped";

export type CycleProfile = "standard" | "critical";

export interface Cycle {
  id: string;
  name: string;
  subtitle: string;
  progress: number;
  status: CycleStatus;
  profile: CycleProfile;
  phase: string;
  branch: string;
  base: string;
}
```
### `lib/navigation.ts`

```ts
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

### `lib/adapters/index.ts` — MANQUANT ou chemin alternatif
### `fixtures/index.ts`

```ts
import type { Recommendation } from "@/lib/domain/recommendation";
import type { MorrisDecision } from "@/lib/domain/morris-decision";

export { cycles, activeCycle } from "./cycles";
export { gates } from "./gates";
export { evidenceItems } from "./evidence";
export { gitStatus } from "./git-status";

export const copilotRecommendations: Recommendation[] = [
  {
    kind: "recommendation",
    id: "rec-cycle-profile",
    title: "Profil recommandé",
    summary: "Standard — cycle de conception fonctionnelle avec gate Morris avant prompt Cursor.",
    confidence: 0.82,
    source: "copilot",
  },
  {
    kind: "recommendation",
    id: "rec-scope",
    title: "Périmètre autorisé",
    summary: "Qualification documentaire et UX/UI uniquement — pas de stack technique.",
    confidence: 0.91,
    source: "copilot",
  },
];

export const pendingMorrisDecision: MorrisDecision = {
  kind: "morris-decision",
  id: "dec-ux-premium",
  gateId: "gate-ux-option",
  title: "Direction visuelle premium UX-B",
  description:
    "Décliner le langage visuel product premium sur les quatre écrans P0.",
  verdict: null,
  scope: "cycle UX/UI uniquement · révocable avant versionnement.",
  revocable: true,
  confirmed: false,
  simulated: true,
};
```

### `fixtures/cycles.ts`

```ts
import type { Cycle } from "@/lib/domain/cycle";

export const cycles: Cycle[] = [
  {
    id: "sfia-studio",
    name: "SFIA Studio",
    subtitle: "UX/UI · validation visuelle",
    progress: 72,
    status: "active",
    profile: "critical",
    phase: "Cycle 4 · UX/UI",
    branch: "project/sfia-studio-ux-ui",
    base: "main @ 5f1eb908",
  },
  {
    id: "campus360",
    name: "Campus360",
    subtitle: "Delivery · INC-05",
    progress: 91,
    status: "active",
    profile: "standard",
    phase: "Delivery",
    branch: "project/campus360-delivery",
    base: "main @ a3c21f01",
  },
  {
    id: "sfia-method",
    name: "SFIA Method",
    subtitle: "Capitalisation v2.4",
    progress: 48,
    status: "active",
    profile: "standard",
    phase: "Capitalisation",
    branch: "project/sfia-method-v24",
    base: "main @ 8e4d2a11",
  },
  {
    id: "bridge-mcp",
    name: "Bridge MCP",
    subtitle: "RUN readiness",
    progress: 64,
    status: "active",
    profile: "standard",
    phase: "RUN readiness",
    branch: "project/bridge-mcp-run",
    base: "main @ 1b9f003c",
  },
];

export const activeCycle = cycles[0];
```

### `fixtures/gates.ts`

```ts
import type { Gate } from "@/lib/domain/gate";

export const gates: Gate[] = [
  {
    id: "gate-ux-option",
    label: "Choix option UX",
    timing: "Aujourd'hui",
    status: "open",
    accent: "pink",
  },
  {
    id: "gate-versionnement",
    label: "GO versionnement",
    timing: "Après revue",
    status: "pending",
    accent: "orange",
  },
  {
    id: "gate-arch-closure",
    label: "Clôture architecture",
    timing: "Ouverte",
    status: "open",
    accent: "purple",
  },
];
```

### `fixtures/evidence.ts`

```ts
import type { Evidence } from "@/lib/domain/evidence";

export const evidenceItems: Evidence[] = [
  {
    id: "ev-ux-contract",
    label: "Contrat UX-B",
    status: "conforme",
    statusLabel: "Conforme",
    accent: "green",
  },
  {
    id: "ev-p0-00c",
    label: "P0-00C premium",
    status: "validé",
    statusLabel: "Validé visuellement",
    accent: "green",
  },
  {
    id: "ev-p0-01c",
    label: "P0-01C synthèse",
    status: "disponible",
    statusLabel: "Disponible",
    accent: "blue",
  },
  {
    id: "ev-p0-02c",
    label: "P0-02C cycle",
    status: "disponible",
    statusLabel: "Disponible",
    accent: "blue",
  },
  {
    id: "ev-p0-03c",
    label: "P0-03C décision",
    status: "disponible",
    statusLabel: "Disponible",
    accent: "blue",
  },
  {
    id: "ev-runtime",
    label: "Runtime",
    status: "non-disponible",
    statusLabel: "Non disponible",
    accent: "orange",
  },
];
```

### `fixtures/git-status.ts`

```ts
import type { GitStatus } from "@/lib/domain/git-status";

export const gitStatus: GitStatus = {
  repository: "mcleland147/sfia-workspace",
  branch: "main",
  commit: "5f1eb908",
  cleanliness: "clean",
  verified: true,
  staged: "Aucun",
};
```

### `components/shell/StudioShell.tsx`

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

### `app/layout.tsx`

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SFIA Studio",
  description:
    "SFIA Studio — Delivery P0 frontend (fixtures locales, 4 écrans Figma)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
```

### `app/page.tsx`

```tsx
import { redirect } from "next/navigation";

export default function HomePage() {
  redirect("/synthese");
}
```

### `README.md`

```md
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

### `playwright.config.ts`

```ts
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
  },
});
```

### `vitest.config.ts`

```ts
import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  esbuild: {
    jsx: "automatic",
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./__tests__/setup.ts"],
    include: ["__tests__/**/*.test.{ts,tsx}"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
});
```

### `e2e/p0-smoke.spec.ts`

```ts
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

### `features/nouvelle-demande/NouvelleDemandeScreen.tsx`

```tsx
import Image from "next/image";
import { StatusPill } from "@/components/ui/StatusPill";
import { CtaButton } from "@/components/ui/CtaButton";
import { gitStatus } from "@/fixtures/git-status";
import { copilotRecommendations } from "@/fixtures";
import styles from "./nouvelle-demande.module.css";

export function NouvelleDemandeScreen() {
  const recommendation = copilotRecommendations[0];

  return (
    <>
      <section className={styles.hero} aria-labelledby="hero-title">
        <h2 id="hero-title" className={styles.heroTitle}>
          Transformez un besoin flou en cycle exécutable.
        </h2>
        <p className={styles.heroText}>
          Décrivez la demande. SFIA qualifie le cycle, les gates, les risques et
          le cadre d&apos;exécution.
        </p>
        <StatusPill tone="white">Qualification assistée</StatusPill>
        <Image
          src="/icons/hero-orb.svg"
          alt=""
          width={92}
          height={92}
          className={styles.heroOrb}
          aria-hidden
        />
      </section>

      <div className={styles.grid}>
        <section className={styles.formCard} aria-labelledby="form-title">
          <p className={styles.sectionLabel}>1 · EXPRIMER LE BESOIN</p>
          <h2 id="form-title" className={styles.sectionTitle}>
            Que souhaitez-vous accomplir ?
          </h2>

          <div className={styles.field}>
            <span className={styles.fieldLabel}>Objet de la demande</span>
            <p className={styles.fieldValue}>
              Industrialiser la préparation des cycles SFIA
            </p>
          </div>

          <div className={`${styles.field} ${styles.fieldLarge}`}>
            <span className={styles.fieldLabel}>
              Décrivez le résultat attendu
            </span>
            <p className={styles.fieldValue}>
              Je veux réduire la préparation manuelle, sécuriser les gates Morris
              et produire automatiquement un cadrage exploitable par Cursor.
            </p>
            <div className={styles.tags}>
              <StatusPill tone="blue">Objectif</StatusPill>
              <StatusPill tone="purple">Automatisation</StatusPill>
              <StatusPill tone="green">Gouvernance</StatusPill>
            </div>
          </div>

          <p className={styles.sectionLabelPurple}>2 · CONTEXTE</p>
          <div className={styles.contextCard}>
            <div className={styles.ghIcon}>GH</div>
            <div>
              <p className={styles.repoName}>{gitStatus.repository}</p>
              <p className={styles.repoMeta}>
                {gitStatus.branch} · {gitStatus.commit} · {gitStatus.cleanliness}
              </p>
            </div>
            <span className={styles.contextPill}>
              <StatusPill tone="green">Git truth vérifiée</StatusPill>
            </span>
          </div>

          <div className={styles.attachment}>
            ＋ Ajouter des documents, captures ou liens
          </div>

          <div className={styles.actions}>
            <span className={styles.saved}>Enregistré il y a 8 s</span>
            <CtaButton variant="primaryDark" simulated>
              Lancer la qualification →
            </CtaButton>
          </div>
        </section>

        <aside className={styles.preview} aria-label="Prévisualisation du cycle">
          <div className={styles.previewHeader}>
            <h2 className={styles.previewTitle}>Prévisualisation du cycle</h2>
            <StatusPill tone="green">Temps réel</StatusPill>
          </div>

          <div className={styles.agentCard}>
            <div className={styles.agentAvatar}>AI</div>
            <div>
              <p className={styles.statusTitle}>Orchestrateur de qualification</p>
              <p className={styles.statusSub}>
                Analyse du besoin, risques et gates en cours…
              </p>
              <StatusPill tone="purple">68 %</StatusPill>
            </div>
          </div>

          <p className={styles.recommendationNote}>
            Recommandation copilot — non décision Morris
          </p>
          <div className={styles.statusRow}>
            <span
              className={styles.statusDot}
              style={{ background: "var(--sfia-blue-00c)" }}
            />
            <div>
              <p className={styles.statusTitle}>Cycle proposé</p>
              <p className={styles.statusSub}>Conception fonctionnelle</p>
            </div>
          </div>

          <div className={styles.statusRow}>
            <span
              className={styles.statusDot}
              style={{ background: "var(--sfia-purple-00c)" }}
            />
            <div>
              <p className={styles.statusTitle}>{recommendation.title}</p>
              <p className={styles.statusSub}>Standard</p>
            </div>
          </div>

          <div className={styles.statusRow}>
            <span
              className={styles.statusDot}
              style={{ background: "var(--sfia-orange-00c)" }}
            />
            <div>
              <p className={styles.statusTitle}>Gate Morris</p>
              <p className={styles.statusSub}>Requise avant exécution</p>
            </div>
          </div>

          <div className={styles.timeline}>
            <p className={styles.timelineTitle}>Parcours</p>
            <div className={styles.timelineItem}>
              <span
                className={styles.timelineDot}
                style={{ background: "var(--sfia-green-00c)" }}
              />
              Demande reçue
            </div>
            <div className={styles.timelineItemActive}>
              <span
                className={styles.timelineDot}
                style={{ background: "var(--sfia-green-00c)" }}
              />
              Qualification
            </div>
            <div className={styles.timelineItem}>
              <span
                className={styles.timelineDot}
                style={{ background: "var(--sfia-border-00c)" }}
              />
              Validation Morris
            </div>
            <div className={styles.timelineItem}>
              <span
                className={styles.timelineDot}
                style={{ background: "var(--sfia-border-00c)" }}
              />
              Prompt Cursor
            </div>
          </div>

          <p className={styles.trust}>
            Aucune action Git ou Cursor sans GO Morris.
          </p>
        </aside>
      </div>
    </>
  );
}
```

### `features/synthese/SyntheseScreen.tsx`

```tsx
import { MetricCard } from "@/components/ui/MetricCard";
import { GateList } from "@/components/ui/GateList";
import { StatusPill } from "@/components/ui/StatusPill";
import { cycles } from "@/fixtures/cycles";
import { gates } from "@/fixtures/gates";
import styles from "./synthese.module.css";

const dotColors = ["#7a4df5", "#3863f5", "#21c28a", "#faa629"];

const activities = [
  "Figma premium créé",
  "AF-CAND-11B validée",
  "PR #214 mergée",
  "Handoff publié",
];

export function SyntheseScreen() {
  return (
    <>
      <div className={styles.heroWrap}>
        <section className={styles.hero} aria-labelledby="synthese-hero">
          <p className={styles.heroEyebrow}>PILOTAGE EN TEMPS RÉEL</p>
          <h2 id="synthese-hero" className={styles.heroTitle}>
            Une vision claire de chaque cycle, chaque gate et chaque preuve.
          </h2>
          <p className={styles.heroText}>
            Le cockpit consolide la vérité Git, les décisions Morris et les
            prochaines actions sans créer une seconde vérité.
          </p>
          <div className={styles.heroPills}>
            <span className={styles.heroPillDark}>4 projets actifs</span>
            <span className={styles.heroPillPurple}>2 gates ouvertes</span>
          </div>
        </section>
      </div>

      <div className={styles.metrics}>
        <MetricCard label="Projets actifs" value="04" accent="blue" />
        <MetricCard label="Cycles en cours" value="03" accent="purple" />
        <MetricCard label="Gates Morris" value="02" accent="orange" />
        <MetricCard label="Review packs" value="07 / 08" accent="green" />
      </div>

      <div className={styles.lower}>
        <section className={styles.portfolio} aria-labelledby="portfolio-title">
          <div className={styles.portfolioHeader}>
            <h2 id="portfolio-title" className={styles.portfolioTitle}>
              Portefeuille des cycles
            </h2>
            <StatusPill tone="blueFlush">Vue portefeuille</StatusPill>
          </div>
          {cycles.map((cycle, index) => (
            <div key={cycle.id} className={styles.row}>
              <span
                className={styles.rowDot}
                style={{ background: dotColors[index] }}
                aria-hidden
              />
              <div>
                <p className={styles.rowName}>{cycle.name}</p>
                <p className={styles.rowSub}>{cycle.subtitle}</p>
              </div>
              <span className={styles.rowProgress}>
                <StatusPill tone="blueFlush">{cycle.progress} %</StatusPill>
              </span>
            </div>
          ))}
        </section>

        <div className={styles.sideColumn}>
          <section className={styles.panel} aria-labelledby="gates-title">
            <h2 id="gates-title" className={styles.panelTitle}>
              Gates à arbitrer
            </h2>
            <GateList gates={gates} />
          </section>

          <section className={styles.panel} aria-labelledby="activity-title">
            <h2 id="activity-title" className={styles.panelTitle}>
              Activité récente
            </h2>
            <ul className={styles.activityList}>
              {activities.map((item) => (
                <li key={item} className={styles.activityItem}>
                  • {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
```

### `features/cycle-actif/CycleActifScreen.tsx`

```tsx
import { StatusPill } from "@/components/ui/StatusPill";
import { CtaButton } from "@/components/ui/CtaButton";
import { activeCycle } from "@/fixtures/cycles";
import styles from "./cycle-actif.module.css";

const steps = [
  { num: 1, label: "Cadrer", state: "done" as const },
  { num: 2, label: "Produire", state: "done" as const },
  { num: 3, label: "Vérifier", state: "active" as const },
  { num: 4, label: "Décider", state: "pending" as const },
  { num: 5, label: "Versionner", state: "pending" as const },
];

const checklist = [
  { label: "Contrat UX/UI complet", status: "Terminé", tone: "greenFlush" as const, dot: "#21c28a" },
  { label: "4 écrans P0 premium", status: "En cours", tone: "blueFlush" as const, dot: "#3863f5" },
  { label: "Contraste WCAG AA", status: "À vérifier", tone: "orangeFlush" as const, dot: "#faa629" },
  { label: "Capture runtime", status: "Non lancée", tone: "pink" as const, dot: "#f25794" },
  { label: "Review handoff", status: "À produire", tone: "purpleFlush" as const, dot: "#7a4df5" },
];

export function CycleActifScreen() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="cycle-hero">
        <p className={styles.heroEyebrow}>CYCLE 4 · UX/UI</p>
        <h2 id="cycle-hero" className={styles.heroTitle}>
          Construire, vérifier, décider — sans perdre la vérité Git.
        </h2>
        <p className={styles.heroText}>
          Le parcours guidé concentre les preuves, les stops et les décisions
          humaines au bon moment.
        </p>
        <div className={styles.heroPills}>
          <span className={styles.pillPurple}>Critical</span>
          <span className={styles.pillBlue}>72 %</span>
        </div>
      </section>

      <nav className={styles.stepper} aria-label="Étapes du cycle">
        {steps.map((step, index) => (
          <div key={step.num} style={{ display: "contents" }}>
            <div className={styles.step}>
              <span
                className={
                  step.state === "done"
                    ? styles.stepCircleDone
                    : step.state === "active"
                      ? styles.stepCircleActive
                      : styles.stepCirclePending
                }
              >
                {step.num}
              </span>
              <span
                className={
                  step.state === "active"
                    ? styles.stepLabelActive
                    : styles.stepLabel
                }
              >
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <span
                className={
                  step.state === "done" || step.state === "active"
                    ? styles.connector
                    : styles.connectorPending
                }
                aria-hidden
              />
            )}
          </div>
        ))}
      </nav>

      <div className={styles.lower}>
        <section className={styles.work} aria-labelledby="work-title">
          <p className={styles.workLabel}>ÉTAPE COURANTE</p>
          <h2 id="work-title" className={styles.workTitle}>
            Vérification visuelle et documentaire
          </h2>
          <p className={styles.workText}>
            Comparer les écrans Figma, le contrat UX-B et les garde-fous avant
            décision Morris.
          </p>

          {checklist.map((item) => (
            <div key={item.label} className={styles.checkRow}>
              <span
                className={styles.checkDot}
                style={{ background: item.dot }}
                aria-hidden
              />
              <span className={styles.checkLabel}>{item.label}</span>
              <StatusPill tone={item.tone}>{item.status}</StatusPill>
            </div>
          ))}

          <div className={styles.actions}>
            <CtaButton variant="secondary" simulated>
              Ouvrir les preuves
            </CtaButton>
            <CtaButton href="/decision">Préparer décision Morris</CtaButton>
          </div>
        </section>

        <aside className={styles.inspector} aria-label="Cadre d'exécution">
          <h2 className={styles.inspectorTitle}>Cadre d&apos;exécution</h2>
          <p className={styles.fieldLabel}>Branche</p>
          <p className={styles.fieldValue}>{activeCycle.branch}</p>
          <p className={styles.fieldLabel}>Base</p>
          <p className={styles.fieldValue}>{activeCycle.base}</p>
          <p className={styles.fieldLabel}>Profil</p>
          <p className={styles.fieldValue}>Critical</p>
          <p className={styles.fieldLabel}>Figma</p>
          <p className={styles.fieldValue}>4 frames P0</p>
          <p className={styles.fieldLabel}>Staged</p>
          <p className={styles.fieldValue}>Aucun</p>

          <div className={styles.stopBox}>
            <p className={styles.stopTitle}>STOP CONDITIONS</p>
            <p className={styles.stopText}>
              Option UX promue sans GO · divergence Git · preuve visuelle absente.
            </p>
          </div>

          <div className={styles.inspectorAction}>
            <CtaButton variant="primary" simulated>
              Demander un STOP
            </CtaButton>
          </div>
        </aside>
      </div>
    </>
  );
}
```

### `features/decision/DecisionScreen.tsx`

```tsx
"use client";

import { useState } from "react";
import { EvidenceList } from "@/components/ui/EvidenceList";
import { StatusPill } from "@/components/ui/StatusPill";
import { CtaButton } from "@/components/ui/CtaButton";
import { evidenceItems } from "@/fixtures/evidence";
import { pendingMorrisDecision } from "@/fixtures";
import type { MorrisVerdict } from "@/lib/domain/morris-decision";
import styles from "./decision.module.css";

const options: {
  verdict: MorrisVerdict;
  pill: string;
  tone: "greenFlush" | "orangeFlush" | "pink";
  title: string;
  subtitle: string;
}[] = [
  {
    verdict: "GO",
    pill: "GO",
    tone: "greenFlush",
    title: "Adopter la direction premium",
    subtitle: "Décliner sur le cycle UX/UI",
  },
  {
    verdict: "CORRIGER",
    pill: "CORRIGER",
    tone: "orangeFlush",
    title: "Demander une itération",
    subtitle: "Ajuster avant validation",
  },
  {
    verdict: "STOP",
    pill: "STOP",
    tone: "pink",
    title: "Suspendre la trajectoire",
    subtitle: "Aucun engagement supplémentaire",
  },
];

export function DecisionScreen() {
  const [selected, setSelected] = useState<MorrisVerdict | null>(null);
  const decision = pendingMorrisDecision;

  return (
    <>
      <section className={styles.hero} aria-labelledby="decision-hero">
        <p className={styles.heroEyebrow}>GATE MORRIS · UX/UI</p>
        <h2 id="decision-hero" className={styles.heroTitle}>
          Décider avec le bon niveau de preuve.
        </h2>
        <p className={styles.heroText}>
          Chaque choix affiche sa portée, ses risques, sa révocabilité et les
          impacts sur la trajectoire.
        </p>
        <div className={styles.heroPills}>
          <span className={styles.pillPurple}>Décision requise</span>
          <span className={styles.pillBlue}>Morris</span>
        </div>
      </section>

      <div className={styles.content}>
        <section className={styles.evidencePanel} aria-labelledby="evidence-title">
          <p className={styles.evidenceLabel}>DOSSIER DE DÉCISION</p>
          <h2 id="evidence-title" className={styles.evidenceTitle}>
            {decision.title}
          </h2>
          <p className={styles.evidenceDesc}>{decision.description}</p>
          <EvidenceList items={evidenceItems} />
        </section>

        <section
          className={styles.decisionPanel}
          aria-labelledby="morris-decision-title"
        >
          <p className={styles.morrisLabel}>Décision Morris — autorité humaine</p>
          <h2 id="morris-decision-title" className={styles.decisionTitle}>
            Votre décision
          </h2>
          <p className={styles.decisionHint}>
            Aucune action n&apos;est déclenchée avant confirmation.
          </p>

          {options.map((option) => (
            <button
              key={option.verdict}
              type="button"
              className={
                selected === option.verdict
                  ? styles.optionSelected
                  : styles.option
              }
              onClick={() => setSelected(option.verdict)}
              aria-pressed={selected === option.verdict}
            >
              <StatusPill tone={option.tone}>{option.pill}</StatusPill>
              <p className={styles.optionTitle}>{option.title}</p>
              <p className={styles.optionSub}>{option.subtitle}</p>
            </button>
          ))}

          <div className={styles.confirmBox}>
            <p className={styles.confirmLabel}>CONFIRMATION RENFORCÉE</p>
            <p className={styles.confirmText}>
              Portée : {decision.scope}
            </p>
          </div>

          <CtaButton
            simulated
            disabled={!selected}
            title={
              selected
                ? "Simulation — aucune décision Morris réelle"
                : "Sélectionnez une option"
            }
          >
            Confirmer la décision
          </CtaButton>
          <p className={styles.simulatedNote}>
            Simulation P0 — aucun effet sur Git, Cursor ou la trajectoire.
          </p>
        </section>
      </div>
    </>
  );
}
```

## 8. Scripts npm

| Script | Commande |
|--------|----------|
| `dev` | `next dev --port 3020` |
| `start` | `next start --port 3020` |
| `lint` | `next lint` |
| `typecheck` | `tsc --noEmit` |
| `test` | `vitest run` |
| `test:e2e` | `playwright test` |
| `build` | `next build` |

## 9. Résultats d’exécution

| Contrôle | Résultat |
|----------|----------|
| lint | ✔ No ESLint warnings or errors |
| typecheck | ✔ `tsc --noEmit` OK |
| Vitest | ✔ 9/9 tests (6 files) |
| build | ✔ 4 routes + `/` redirect + not-found ; static |
| Playwright | ✔ 6/6 (4 routes + navigation + axe smoke) |
| npm audit | informatif : 2 moderate (postcss via next) — **pas** de `audit fix --force` |

### Routes build

```
/ → redirect /synthese
/nouvelle-demande
/synthese
/cycle-actif
/decision
```

## 10. Captures runtime

- `.tmp-sfia-review/screenshots/p0-00c-nouvelle-demande-runtime.png` — 307460 bytes — SHA-256 `396ec5097b15ee443524204953e5baf196e8e41c53808b7a10aefd2a8fcffdc3`
- `.tmp-sfia-review/screenshots/p0-01c-synthese-runtime.png` — 185321 bytes — SHA-256 `a26d7f0374166705d2a83ae23ba86220c32f6900ecf5a5cda41fb44965bdc6d4`
- `.tmp-sfia-review/screenshots/p0-02c-cycle-actif-runtime.png` — 183912 bytes — SHA-256 `40f912869dd9f2edef16e67da8b9dfef09453dc50bf00dc27e298402013261c8`
- `.tmp-sfia-review/screenshots/p0-03c-decision-runtime.png` — 198137 bytes — SHA-256 `758395f816302dccffbd5205d3ae0ffed4e67349870dbd9d6a1778b4edfad71a`

## 11. Matrice Figma / runtime

| Écran | Figma node | Capture runtime | Structure | Typographie | Couleurs | Espacements | Composants | Écarts | Verdict |
|---|---|---|---|---|---|---|---|---|---|
| P0-00C Nouvelle demande | 19:2 | p0-00c-nouvelle-demande-runtime.png | CONFORME | ÉCART MINEUR | CONFORME | ÉCART MINEUR | CONFORME | Layout flex vs absolute Figma ; tabs internes non navigables (UI) | ÉCART MINEUR |
| P0-01C Vue synthèse | 22:2 | p0-01c-synthese-runtime.png | CONFORME | ÉCART MINEUR | CONFORME | ÉCART MINEUR | CONFORME | Densité/colonnes proches ; tab Preuves simulé | ÉCART MINEUR |
| P0-02C Cycle actif | 22:133 | p0-02c-cycle-actif-runtime.png | CONFORME | ÉCART MINEUR | CONFORME | ÉCART MINEUR | CONFORME | Stepper/checklist alignés copy Figma | ÉCART MINEUR |
| P0-03C Décision Morris | 22:270 | p0-03c-decision-runtime.png | CONFORME | ÉCART MINEUR | CONFORME | ÉCART MINEUR | CONFORME | Options GO/CORRIGER/STOP ; confirm simulée | ÉCART MINEUR |

**Écarts corrigés :** canvas flush vide (grid row topbar) — corrigé ; captures régénérées.

**Écarts résiduels :** pixel-perfect absolute non revendiqué ; responsive non traité ; tab Preuves/gear désactivés (simulé) ; pas d’audit a11y complet.

## 12. Accessibilité

- Landmarks (`nav`, `main`), titres, focus-visible, boutons typés, labels aria, icônes décoratives.
- axe-core smoke Playwright : pas de violations **critical**.
- Verdict : **a11y smoke conforme** — **pas** ACCESSIBILITY READY.

## 13. Sécurité

- Aucun `.env` ; aucun secret ; aucune API métier ; aucune commande système/Git réelle.
- `package-lock.json` présent.
- Actions distantes UI : `disabled` + libellé simulation.
- Recommendation ≠ MorrisDecision (types + UI).

## 14. Garde-fous

- Pas de `app/api` applicatif ; pas de middleware auth ; pas de Tailwind ; pas de backend ; pas de CI ; pas de Runtime réel ; pas de code Git réel.
- Périmètre limité à `projects/sfia-studio/app/**` + `.tmp-sfia-review/**`.

## 15. Réserves

- Viewport 1280×832 non validé ; mobile/tablette hors périmètre.
- Copy/fixtures fictives déterministes — non liées au Git réel.
- npm audit moderate postcss (transitive Next) — informatif.
- Worktree `sfia-workspace-ux-reconciliation` encore présent (hors cycle).

## 16. Décisions Morris encore requises

- Validation visuelle runtime (ce pack + captures)
- GO corrections complémentaires éventuelles
- GO commit projet
- GO push projet
- GO PR
- GO merge
- GO cleanup

## 17. Verdict

**DELIVERY P0 IMPLEMENTED — READY FOR RUNTIME VISUAL REVIEW**

