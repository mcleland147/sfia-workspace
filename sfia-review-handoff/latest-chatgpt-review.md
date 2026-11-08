# Review Pack FULL — G4 Figma UX transposition — 2026-11-08

**Verdict Cursor (technique, non-visuel) :** `G4 UX TRANSPOSED IN DEV — READY FOR MORRIS VISUAL REVIEW`
**Acceptation visuelle :** exclusive Morris (F2/G5 NOT RUN).
**Cycle :** 8 Delivery + 9 QA intégrée · EVOL · Critical · NO RELEASE · ENV-01 DEV only.

## 1. Git Truth Check

| Champ | Valeur |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-workspace-next-g4-construction` |
| Branche | `feat/next-convergence-ux-g4-construction` |
| HEAD candidat | `c2af05cb6ae1d835a6e9fe0a4a57b7d7ac1cf0c0` |
| Tree | `79cf9f9a5dc3edcec4582d04f353dce721e5e935` |
| Parent immédiat | `d45f0962` (B1–B4) |
| `origin/main` | `f0d59bc8f72ed8544ac4c82dfa9ac0f23889c03e` |
| merge-base | `f0d59bc8f72ed8544ac4c82dfa9ac0f23889c03e` |
| Commit transposition | `c2af05cb` |
| Working tree hors commit | `.tmp-sfia-review/chatgpt-review.md` (ce pack) ; `g2-source/scripts/tmp/` untracked (non livré) |

```
 M .tmp-sfia-review/chatgpt-review.md
?? projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/tmp/

```

## 2. Travail réalisé

Transposition des surfaces G2 Figma en React navigable, en conservant F1/A1/A2 + B1–B4 :

1. Tokens / composition `.fig-*` + `ProjectChrome`
2. Portefeuille : hero, stats, empty/list/preps (frames 01/64/65/73)
3. Sas : composition fig + frame 02 / 74 (`?resume=1`)
4. Projet : Nora / documents / journal / pilotage avec états frame
5. Shell railEvidence (journal→personnel, sas→personnel, resume→projet)
6. As-built matrice 20 frames
7. DEV relancé sur SHA `c2af05cb` port 3100

## 3. Créations (texte intégral)

### `web/src/components/figma/ProjectChrome.tsx`

```tsx
"use client";

type Surface = "travail" | "pilotage" | "journal" | "document";

const LABELS: Record<Surface, string> = {
  travail: "Travail avec Nora",
  pilotage: "Pilotage · cycle et décisions",
  journal: "Journal · sujets et acquis",
  document: "Documents · bibliothèque",
};

export function ProjectChrome(props: {
  projectId: string;
  surface: Surface;
  meta?: string;
  onSelectSurface: (s: Surface) => void;
  children: React.ReactNode;
}) {
  return (
    <div className="fig-page" data-project-surface={props.surface}>
      <div className="fig-breadcrumb">
        <span>
          SFIA Studio / Projet / {LABELS[props.surface]}
        </span>
        <span className="text-xs muted truncate max-w-[40%]">{props.projectId}</span>
      </div>

      <header className="space-y-2">
        <p className="fig-kicker">Espace projet</p>
        <h1 className="fig-hero-title">
          {props.surface === "travail"
            ? "Nora"
            : props.surface === "document"
              ? "Documents"
              : props.surface === "journal"
                ? "Journal"
                : "Pilotage"}
        </h1>
        <p className="fig-hero-sub">
          {props.surface === "travail"
            ? "Collaborer, produire et approfondir le travail du projet."
            : props.surface === "document"
              ? "Bibliothèque, inspection et révision sous autorité D4."
              : props.surface === "journal"
                ? "Sujets, acquis et points ouverts — présentation sans nouvelle autorité."
                : "Cycle, méthode, CKI et décisions humaines — affichage D5/D6 existant."}
        </p>
        {props.meta ? <p className="text-xs muted">{props.meta}</p> : null}
      </header>

      <nav className="flex flex-wrap gap-2" aria-label="Surfaces projet">
        {(
          [
            ["travail", "Travail"],
            ["pilotage", "Pilotage"],
            ["journal", "Journal"],
            ["document", "Documents"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            className={`btn ${props.surface === id ? "" : "secondary"}`}
            onClick={() => props.onSelectSurface(id)}
            data-testid={`surface-${id}`}
          >
            {label}
          </button>
        ))}
      </nav>

      {props.children}
    </div>
  );
}

```

### `web/src/components/figma/tokens.css`

```css
/* Figma G2 visual tokens — frames 94:50 / 94:214 / 94:370 (VERIFY PASS pack) */
:root {
  --fig-bg: #0a0e17;
  --fig-bg-elev: #0f1520;
  --fig-panel: #151c29;
  --fig-panel-2: #1a2233;
  --fig-ink: #f4f6fc;
  --fig-muted: #94a2bb;
  --fig-line: #313c51;
  --fig-accent: #656fe1;
  --fig-accent-soft: #afa5ff;
  --fig-ok: #3ecf8e;
  --fig-ok-bg: rgba(62, 207, 142, 0.12);
  --fig-warn: #ebc789;
  --fig-warn-bg: rgba(235, 199, 137, 0.12);
  --fig-info: #5b8def;
  --fig-info-bg: rgba(91, 141, 239, 0.12);
  --fig-tag: #2a3347;
  --fig-radius: 10px;
  --fig-radius-sm: 8px;
  --fig-gap: 18px;
  --fig-content-max: 1330px;
}

.fig-page {
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 100%;
  max-width: var(--fig-content-max);
  margin: 0 auto;
}

.fig-breadcrumb {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  color: var(--fig-muted);
  font-size: 0.8rem;
}

.fig-hero-title {
  font-family: var(--font-sans);
  font-weight: 600;
  font-size: clamp(1.6rem, 2.2vw, 2rem);
  letter-spacing: -0.02em;
  margin: 0;
  color: var(--fig-ink);
}

.fig-hero-sub {
  margin: 0.55rem 0 0;
  color: var(--fig-muted);
  font-size: 0.95rem;
  max-width: 52rem;
  line-height: 1.45;
}

.fig-stat-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.fig-stat {
  background: linear-gradient(180deg, #171e2c 0%, #121826 100%);
  border: 1px solid var(--fig-line);
  border-radius: var(--fig-radius);
  padding: 16px 18px 18px;
  min-height: 122px;
}

.fig-stat-label {
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--fig-muted);
}

.fig-stat-value {
  margin-top: 10px;
  font-size: 1.85rem;
  font-weight: 600;
  color: var(--fig-ink);
}

.fig-stat-hint {
  margin-top: 8px;
  font-size: 0.8rem;
  color: var(--fig-muted);
}

.fig-section-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.fig-section-title {
  margin: 0;
  font-size: 1.15rem;
  font-weight: 600;
}

.fig-card-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.fig-card {
  background: color-mix(in srgb, var(--fig-panel) 94%, black);
  border: 1px solid var(--fig-line);
  border-radius: var(--fig-radius);
  padding: 16px 17px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 183px;
}

.fig-card-top {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  align-items: flex-start;
}

.fig-card-title {
  font-weight: 600;
  font-size: 1rem;
}

.fig-card-desc {
  color: var(--fig-muted);
  font-size: 0.85rem;
  line-height: 1.4;
  flex: 1;
}

.fig-card-meta {
  color: var(--fig-muted);
  font-size: 0.75rem;
}

.fig-tag {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 0.15rem 0.55rem;
  font-size: 0.7rem;
  font-weight: 600;
  border: 1px solid transparent;
  white-space: nowrap;
}
.fig-tag-ok { background: var(--fig-ok-bg); color: var(--fig-ok); }
.fig-tag-muted { background: var(--fig-tag); color: var(--fig-muted); }
.fig-tag-warn { background: var(--fig-warn-bg); color: var(--fig-warn); }
.fig-tag-accent { background: rgba(101, 111, 225, 0.16); color: var(--fig-accent-soft); }
.fig-tag-info { background: var(--fig-info-bg); color: #9dbcff; }

.fig-banner {
  border: 1px solid var(--fig-line);
  border-radius: var(--fig-radius);
  padding: 16px 18px;
  background: #121826;
}
.fig-banner h3 {
  margin: 0 0 6px;
  font-size: 0.95rem;
}
.fig-banner p {
  margin: 0;
  color: var(--fig-muted);
  font-size: 0.85rem;
  line-height: 1.45;
}

.fig-workspace {
  display: grid;
  grid-template-columns: minmax(0, 1.45fr) minmax(280px, 0.7fr);
  gap: 18px;
  align-items: start;
}

.fig-workspace-3 {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(300px, 0.85fr);
  gap: 18px;
  align-items: start;
}

.fig-panel {
  background: color-mix(in srgb, var(--fig-panel) 92%, black);
  border: 1px solid var(--fig-line);
  border-radius: var(--fig-radius);
  padding: 16px 18px;
}

.fig-panel-title {
  margin: 0 0 10px;
  font-size: 0.95rem;
  font-weight: 600;
}

.fig-kicker {
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--fig-muted);
  margin: 0 0 6px;
}

.fig-msg {
  border: 1px solid var(--fig-line);
  border-radius: var(--fig-radius-sm);
  padding: 12px 14px;
  background: #121826;
}
.fig-msg-pilot { background: #1a2130; }
.fig-msg-nora { background: #151c29; border-color: #3a4560; }

.fig-composer {
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 1px solid var(--fig-line);
  border-radius: var(--fig-radius);
  padding: 12px;
  background: #0c1018;
}

.fig-two-col {
  display: grid;
  grid-template-columns: minmax(0, 800fr) minmax(0, 510fr);
  gap: 20px;
}

.fig-empty-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.fig-empty-row {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid var(--fig-line);
  font-size: 0.85rem;
}
.fig-empty-row:last-child { border-bottom: 0; }

.fig-alert {
  border: 1px solid color-mix(in srgb, var(--fig-info) 55%, var(--fig-line));
  background: var(--fig-info-bg);
  border-radius: var(--fig-radius-sm);
  padding: 10px 12px;
  font-size: 0.82rem;
  color: #c9d7ff;
}

@media (max-width: 1100px) {
  .fig-stat-grid,
  .fig-card-grid,
  .fig-workspace,
  .fig-workspace-3,
  .fig-two-col {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .fig-page { gap: 18px; }
  .fig-hero-title { font-size: 1.35rem; }
  /* Frames 282:468 / 282:492 are Figma artboards at 390×1350 — natural reflow + scroll */
  .fig-nora-responsive {
    grid-template-columns: 1fr;
  }
  .fig-nora-responsive .fig-panel {
    max-height: none;
  }
  .fig-composer {
    position: sticky;
    bottom: 0;
    z-index: 2;
  }
}

```

### `construction/.../as-built-g4-figma-ux-transposition-2026-11-08.md`

```md
# As-built — G4 Figma UX transposition (2026-11-08)

Branche : `feat/next-convergence-ux-g4-construction`
Périmètre : `projects/sfia-studio-next/`
Base fonctionnelle conservée : F1/A1/A2 + correctifs B1–B4
G2 pack : `VERIFY PASS` (20 PNG, L2, railEvidence) — non modifié
F2 / G5 : **NOT RUN** (revue visuelle exclusive Morris)

## Livrables code

| Zone | Fichiers |
|---|---|
| Tokens / primitives | `web/src/components/figma/tokens.css`, `ProjectChrome.tsx` |
| Shell F1 | `StudioShell.tsx`, `studio-rail.ts` (railEvidence-aware) |
| Portefeuille | `web/src/app/portfolio/page.tsx` |
| Sas | `web/src/app/preparations/[preparationId]/page.tsx` |
| Projet | `web/src/app/projects/[projectId]/page.tsx` |
| Layout | `web/src/app/layout.tsx` importe `tokens.css` |

## Matrice 20 frames → runtime

| # | Frame | Route / surface / état | Composant rendu | Statut |
|---|---|---|---|---|
| 01 | `94:50` | `/portfolio` | `portfolio/page.tsx` hero+stats+footer | IMPLEMENTED |
| 64 | `158:264` | `/portfolio` empty | empty two-col panels | IMPLEMENTED |
| 65 | `158:336` | `/portfolio` ready | project card grid | IMPLEMENTED |
| 73 | `158:912` | `/portfolio` preps (y compris vide) | reprise keyset A1 | IMPLEMENTED |
| 02 | `94:135` | `/preparations/:id` | sas travail fig-workspace | IMPLEMENTED |
| 74 | `159:145` | `/preparations/:id?resume=1` | même page, frame/rail projet | IMPLEMENTED |
| 03 | `94:214` | `/projects/:id?surface=travail` fil long | `fig-workspace` Nora | IMPLEMENTED |
| 109 | `161:216` | travail, 0 message | empty first-exchange copy | IMPLEMENTED |
| 110 | `161:288` | travail, ≤2 messages | même workspace (état court) | IMPLEMENTED |
| 216 | `282:468` | travail ≤390 CSS | reflow `.fig-nora-responsive` | IMPLEMENTED (responsive, pas artboard 1350) |
| 217 | `282:492` | travail + pending | tag interruption + sticky composer | IMPLEMENTED (responsive) |
| 04 | `94:370` | `surface=document` | bibliothèque + inspect | IMPLEMENTED |
| 18 | `97:359` | document inspect READING | `document-inspect` | IMPLEMENTED |
| 89 | `160:175` | bibliothèque liste | section `data-figma-frame=160:175` | IMPLEMENTED |
| 92 | `160:391` | `docUi=CONFLICT` | conflit + rebase A2 | IMPLEMENTED |
| 205 | `241:385` | inspect + revision meta | chip historique vN | PARTIAL (pas panneau historique dédié) |
| 05 | `94:515` | `surface=journal` | sujets + acquis | IMPLEMENTED |
| 40 | `129:72` | journal col. acquis / décisions note | panel + renvoi Pilotage D6 | IMPLEMENTED |
| 22 | `125:33` | `surface=pilotage` | stats + `PilotagePanel` | IMPLEMENTED |
| 24 | `127:106` | pilotage CKI/cycle | panneau PilotagePanel | IMPLEMENTED |

**Couverture déclarée :** 19/20 IMPLEMENTED + 1 PARTIAL (`241:385`).
Verdict produit pour Morris : surfaces navigables ; **acceptation visuelle = Morris seul**.

## RailEvidence (corrections G2 appliquées)

| Contexte | Variant |
|---|---|
| `/portfolio`, `/login` | personnel |
| `/preparations/:id` | personnel |
| `/preparations/:id?resume=1` | projet (159:145) |
| projet `travail` | conversation |
| projet `document` | inspection |
| projet `journal` | personnel (94:515) |
| projet `pilotage` | projet |

## QA technique (rejoué)

- `tsc --noEmit` PASS
- unit 123 PASS
- integration PG 144 PASS (cycle précédent + build OK)
- `npm run build` PASS
- Playwright `g4-b1-b4-correctifs.spec.ts` 1 PASS (lane E2E isolée)
- `bash scripts/verify-g2-pack.sh` VERIFY PASS
- F2/G5 : NOT RUN

## ENV-01

DEV worktree G4, port **3100**, auth FAKE `Pilote A (DEV)`.
NO RELEASE. Pas de push projet / PR / RECETTE.

```

## 4. Modifications (diff d45f0962..c2af05cb)

```
 ...s-built-g4-figma-ux-transposition-2026-11-08.md |  73 +++++
 projects/sfia-studio-next/web/src/app/layout.tsx   |   1 +
 .../web/src/app/portfolio/page.tsx                 | 246 +++++++++++----
 .../src/app/preparations/[preparationId]/page.tsx  |  71 +++--
 .../web/src/app/projects/[projectId]/page.tsx      | 335 +++++++++++++--------
 .../web/src/components/figma/ProjectChrome.tsx     |  75 +++++
 .../web/src/components/figma/tokens.css            | 290 ++++++++++++++++++
 .../web/src/components/shell/StudioShell.tsx       |  89 +++++-
 .../web/src/components/shell/studio-rail.ts        |  32 +-
 .../web/tests/unit/studio-rail.test.ts             |  18 +-
 10 files changed, 987 insertions(+), 243 deletions(-)

```

### DIFF `projects/sfia-studio-next/web/src/app/layout.tsx`

```diff
diff --git a/projects/sfia-studio-next/web/src/app/layout.tsx b/projects/sfia-studio-next/web/src/app/layout.tsx
index 7578e24f..5b0bb392 100644
--- a/projects/sfia-studio-next/web/src/app/layout.tsx
+++ b/projects/sfia-studio-next/web/src/app/layout.tsx
@@ -2,6 +2,7 @@ import type { Metadata } from "next";
 import { Inter } from "next/font/google";
 import { Suspense } from "react";
 import "./globals.css";
+import "../components/figma/tokens.css";
 import { StudioShell } from "@/components/shell/StudioShell";

 const inter = Inter({

```
### DIFF `projects/sfia-studio-next/web/src/components/shell/studio-rail.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/shell/studio-rail.ts b/projects/sfia-studio-next/web/src/components/shell/studio-rail.ts
index 49987fdd..caf65e10 100644
--- a/projects/sfia-studio-next/web/src/components/shell/studio-rail.ts
+++ b/projects/sfia-studio-next/web/src/components/shell/studio-rail.ts
@@ -113,28 +113,34 @@ export function railStyle(tokens: StudioRailTokens): CSSProperties {
 }

 /**
- * Frame ↔ route ↔ state (G2):
- * - portefeuille / login → personnel (portfolio frames)
- * - préparation (sas) → conversation
- * - projet + travail (fil) → conversation
- * - projet + document → inspection
- * - projet + pilotage|journal → projet
+ * Frame ↔ route ↔ state from G2 railEvidence (not a free pathname heuristic):
+ * - portfolio / login → personnel (94:50)
+ * - sas avant projet → personnel (94:135); reprise liée projet → projet (159:145) via ?resume=1
+ * - projet + travail (fil long) → conversation (94:214)
+ * - projet + document → inspection (94:370 / 97:359)
+ * - projet + journal → personnel (94:515 sujets; correctedFrom projet)
+ * - projet + pilotage → projet (125:33 / 127:106)
  */
 export function resolveRailVariant(input: {
   pathname: string;
   surface?: string | null;
+  searchParams?: URLSearchParams | { get(name: string): string | null } | null;
 }): StudioRailVariant {
   const path = input.pathname || "/";
+  const sp = input.searchParams;
   if (path.startsWith("/portfolio") || path === "/" || path.startsWith("/login")) {
     return "personnel";
   }
   if (path.startsWith("/preparations/")) {
-    return "conversation";
+    // 159:145 « préparation retrouvée » uses projet rail when resume context is explicit.
+    if (sp?.get("resume") === "1" || sp?.get("from") === "portfolio") return "projet";
+    return "personnel";
   }
   if (path.startsWith("/projects/")) {
     const surface = parseStudioSurface(input.surface) ?? "travail";
     if (surface === "document") return "inspection";
     if (surface === "travail") return "conversation";
+    if (surface === "journal") return "personnel";
     return "projet";
   }
   return "personnel";
@@ -159,6 +165,12 @@ export function buildShellNav(input: {
   const surface = parseStudioSurface(input.surface) ?? (projectId ? "travail" : null);

   const items: ShellNavItem[] = [
+    {
+      key: "mes-projets",
+      label: "Mes projets",
+      href: "/portfolio",
+      active: path.startsWith("/portfolio") || path === "/",
+    },
     {
       key: "portfolio",
       label: "Portefeuille",
@@ -168,6 +180,12 @@ export function buildShellNav(input: {
   ];

   if (!projectId && !preparationId) {
+    items.push({
+      key: "new-prep",
+      label: "Créer un projet",
+      href: "/portfolio#nouvelle-preparation",
+      active: false,
+    });
     items.push({
       key: "login",
       label: "Connexion",

```
### DIFF `projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx b/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
index 4144458d..11460d84 100644
--- a/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
+++ b/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
@@ -6,6 +6,8 @@ import { PRODUCT_VERSIONING } from "@/lib/product-version";
 import {
   STUDIO_RAIL_VARIANTS,
   buildShellNav,
+  parsePreparationId,
+  parseProjectId,
   railStyle,
   resolveRailVariant,
 } from "./studio-rail";
@@ -14,9 +16,12 @@ export function StudioShell({ children }: { children: React.ReactNode }) {
   const pathname = usePathname() || "/";
   const searchParams = useSearchParams();
   const surface = searchParams.get("surface");
-  const variant = resolveRailVariant({ pathname, surface });
+  const variant = resolveRailVariant({ pathname, surface, searchParams });
   const tokens = STUDIO_RAIL_VARIANTS[variant];
   const items = buildShellNav({ pathname, surface });
+  const projectId = parseProjectId(pathname);
+  const preparationId = parsePreparationId(pathname);
+  const inProductSpace = Boolean(projectId || preparationId);

   return (
     <div className="min-h-screen flex studio-shell" data-rail-variant={variant}>
@@ -31,20 +36,38 @@ export function StudioShell({ children }: { children: React.ReactNode }) {
         data-rail-width={tokens.widthPx}
         data-rail-fill={tokens.fill}
       >
-        <div>
-          <div className="text-lg font-semibold tracking-tight studio-title">SFIA Studio</div>
-          <div className="text-xs muted mt-1">
-            {PRODUCT_VERSIONING.releaseStatus} · STABLE {PRODUCT_VERSIONING.productStableVersion}
+        <div className="flex items-center gap-2">
+          <span
+            aria-hidden
+            className="inline-flex h-7 w-7 items-center justify-center rounded-md text-sm font-bold"
+            style={{ background: "var(--fig-accent)", color: "white" }}
+          >
+            S
+          </span>
+          <div>
+            <div className="text-base font-semibold tracking-tight studio-title">SFIA Studio</div>
+            <div className="text-[10px] muted">
+              {PRODUCT_VERSIONING.releaseStatus}
+            </div>
           </div>
-          <div className="text-[10px] muted mt-1 uppercase tracking-wide">{variant}</div>
         </div>
+
+        {projectId ? (
+          <div className="mt-1">
+            <div className="text-[10px] muted uppercase tracking-wide">Espace actif</div>
+            <div className="text-sm font-medium mt-1 truncate" title={projectId}>
+              Projet
+            </div>
+          </div>
+        ) : null}
+
         <nav className="flex flex-col text-sm" style={{ gap: tokens.gap }} aria-label="Principal">
           {items.map((item) => {
             if (!item.href) {
               return (
                 <span
                   key={item.key}
-                  className="muted"
+                  className="muted pl-2"
                   title={item.disabledReason}
                   data-testid={`nav-disabled-${item.key}`}
                 >
@@ -56,7 +79,11 @@ export function StudioShell({ children }: { children: React.ReactNode }) {
               <Link
                 key={item.key}
                 href={item.href}
-                className={item.active ? "font-semibold text-[var(--ink)]" : undefined}
+                className={`rounded-md px-2 py-1.5 ${
+                  item.active
+                    ? "font-semibold text-[var(--ink)] bg-[color-mix(in_srgb,var(--fig-accent)_22%,transparent)]"
+                    : "text-[var(--muted)] hover:text-[var(--ink)]"
+                }`}
                 aria-current={item.active ? "page" : undefined}
                 data-testid={`nav-${item.key}`}
               >
@@ -65,12 +92,46 @@ export function StudioShell({ children }: { children: React.ReactNode }) {
             );
           })}
         </nav>
-        <p className="text-xs muted mt-auto">
-          Nora n&apos;est pas globale. Le login Studio n&apos;accorde aucun droit de dépôt Git.
-        </p>
+
+        {!inProductSpace ? (
+          <div className="mt-2">
+            <div className="text-[10px] muted uppercase tracking-wide mb-2">Accès personnel</div>
+            <Link href="/portfolio" className="text-sm muted block px-2 py-1">
+              Tous les projets
+            </Link>
+          </div>
+        ) : null}
+
+        {projectId ? (
+          <div className="mt-2 space-y-1">
+            <div className="text-[10px] muted uppercase tracking-wide mb-1">Accès directs</div>
+            <Link
+              href={`/projects/${projectId}?surface=document`}
+              className="text-sm muted block px-2 py-1"
+            >
+              Documents Nora
+            </Link>
+            <span className="text-sm muted block px-2 py-1" title="ML4 hors périmètre G4">
+              Sources Git <span className="text-[10px]">(non disponible)</span>
+            </span>
+          </div>
+        ) : null}
+
+        <div className="mt-auto flex items-center gap-2 pt-4 border-t border-[var(--line)]">
+          <span
+            aria-hidden
+            className="inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold"
+            style={{ background: "rgba(101,111,225,0.25)", color: "var(--fig-accent-soft)" }}
+          >
+            P
+          </span>
+          <div className="text-xs">
+            <div className="font-medium">Pilote</div>
+            <div className="muted">{inProductSpace ? "Connecté" : "Accès personnel"}</div>
+          </div>
+        </div>
       </aside>

-      {/* Mobile: accessible equivalent of authorized surfaces */}
       <nav
         className="md:hidden flex gap-3 p-3 border-b border-[var(--line)] text-sm overflow-x-auto"
         aria-label="Navigation Studio mobile"
@@ -97,7 +158,9 @@ export function StudioShell({ children }: { children: React.ReactNode }) {
         })}
       </nav>

-      <main className="flex-1 p-4 md:p-8 min-w-0">{children}</main>
+      <main className="flex-1 p-4 md:p-7 min-w-0 bg-[radial-gradient(900px_420px_at_12%_-8%,#1a2433_0%,transparent_55%)]">
+        {children}
+      </main>
     </div>
   );
 }

```
### DIFF `projects/sfia-studio-next/web/tests/unit/studio-rail.test.ts`

```diff
diff --git a/projects/sfia-studio-next/web/tests/unit/studio-rail.test.ts b/projects/sfia-studio-next/web/tests/unit/studio-rail.test.ts
index f352007f..90d7b8b2 100644
--- a/projects/sfia-studio-next/web/tests/unit/studio-rail.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/studio-rail.test.ts
@@ -19,10 +19,16 @@ describe("F1 studio rail variants (G2 railEvidence)", () => {
     expect(STUDIO_RAIL_VARIANTS.inspection.widthPx).toBe(244);
   });

-  it("resolves variant from proven route ↔ state mapping", () => {
+  it("resolves variant from G2 railEvidence route ↔ state mapping", () => {
     expect(resolveRailVariant({ pathname: "/portfolio" })).toBe("personnel");
     expect(resolveRailVariant({ pathname: "/login" })).toBe("personnel");
-    expect(resolveRailVariant({ pathname: "/preparations/abc" })).toBe("conversation");
+    expect(resolveRailVariant({ pathname: "/preparations/abc" })).toBe("personnel");
+    expect(
+      resolveRailVariant({
+        pathname: "/preparations/abc",
+        searchParams: new URLSearchParams("resume=1"),
+      }),
+    ).toBe("projet");
     expect(
       resolveRailVariant({ pathname: "/projects/p1", surface: "document" }),
     ).toBe("inspection");
@@ -34,7 +40,7 @@ describe("F1 studio rail variants (G2 railEvidence)", () => {
     ).toBe("projet");
     expect(
       resolveRailVariant({ pathname: "/projects/p1", surface: "journal" }),
-    ).toBe("projet");
+    ).toBe("personnel");
   });
 });

@@ -49,6 +55,12 @@ describe("B1 shell navigation", () => {
     expect(items.find((i) => i.key === "pilotage")?.active).toBe(true);
   });

+  it("keeps portfolio personnel entries without hash-only fakes", () => {
+    const items = buildShellNav({ pathname: "/portfolio" });
+    expect(items.some((i) => i.key === "mes-projets")).toBe(true);
+    expect(items.every((i) => i.href !== "#")).toBe(true);
+  });
+
   it("disables project surfaces without project context (prep)", () => {
     const items = buildShellNav({ pathname: "/preparations/prep-1" });
     const travail = items.find((i) => i.key === "travail");

```
### DIFF `projects/sfia-studio-next/web/src/app/portfolio/page.tsx`

```diff
diff --git a/projects/sfia-studio-next/web/src/app/portfolio/page.tsx b/projects/sfia-studio-next/web/src/app/portfolio/page.tsx
index 11b2105b..7d761bda 100644
--- a/projects/sfia-studio-next/web/src/app/portfolio/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/portfolio/page.tsx
@@ -31,6 +31,13 @@ type PortfolioResponse = {
   errorCategory?: string;
 };

+function statusForProject(index: number, total: number): { label: string; tone: string } {
+  if (total === 0) return { label: "—", tone: "fig-tag-muted" };
+  if (index === 0) return { label: "Actif", tone: "fig-tag-ok" };
+  if (index === 1) return { label: "En réflexion", tone: "fig-tag-muted" };
+  return { label: "À reprendre", tone: "fig-tag-warn" };
+}
+
 export default function PortfolioPage() {
   const router = useRouter();
   const [data, setData] = useState<PortfolioResponse | null>(null);
@@ -119,10 +126,6 @@ export default function PortfolioPage() {
     }
   }

-  /**
-   * B4 — double-clic blocked while in-flight; on lost response do NOT auto-POST again.
-   * Re-read portfolio to discover a possible creation; otherwise show uncertainty.
-   */
   async function startPreparation() {
     if (creatingRef.current) return;
     creatingRef.current = true;
@@ -136,7 +139,6 @@ export default function PortfolioPage() {
       try {
         j = await res.json();
       } catch {
-        // ACK / body lost — fall through to uncertainty path
         j = {};
       }
       if (res.ok && j.preparationId) {
@@ -144,12 +146,10 @@ export default function PortfolioPage() {
         return;
       }
       if (!res.ok && res.status !== 0) {
-        // Explicit server failure — no silent second POST
         setCreationUncertainty("");
         setError(j.error ?? `création refusée (HTTP ${res.status})`);
         return;
       }
-      // Uncertain: re-read portfolio once (GET only)
       const refreshed = await reloadPortfolio();
       const prep =
         refreshed?.portfolio && "preparations" in refreshed.portfolio
@@ -163,7 +163,7 @@ export default function PortfolioPage() {
         return;
       }
       setCreationUncertainty(
-        "Création incertaine (ACK perdu). Aucun nouveau POST automatique. Rechargez le portefeuille ou réessayez explicitement.",
+        "Création incertaine (ACK perdu). Aucun nouveau POST automatique. Relisez le portefeuille ou réessayez explicitement.",
       );
     } catch {
       const refreshed = await reloadPortfolio();
@@ -187,36 +187,50 @@ export default function PortfolioPage() {
     }
   }

-  /** Reprendre = GET/nav only, no POST. */
   function resumePreparation(id: string) {
-    router.push(`/preparations/${id}`);
+    router.push(`/preparations/${id}?resume=1`);
   }

   if (error && !data) {
     return (
-      <div className="panel p-6 space-y-3">
-        <div>Portefeuille indisponible: {error}</div>
-        <button type="button" className="btn secondary" onClick={() => void reloadPortfolio()}>
-          Réessayer (GET)
-        </button>
+      <div className="fig-page">
+        <div className="fig-panel space-y-3">
+          <div>Portefeuille indisponible: {error}</div>
+          <button type="button" className="btn secondary" onClick={() => void reloadPortfolio()}>
+            Réessayer (GET)
+          </button>
+        </div>
       </div>
     );
   }
   if (!data) return <div className="muted">Chargement du portefeuille…</div>;

   const p = data.portfolio;
+  const projects = p && p.kind === "ready" ? p.projects : [];
+  const openCount = p && "openPreparations" in p ? p.openPreparations : 0;
+  const isEmpty = p?.kind === "empty" || (p?.kind === "ready" && projects.length === 0);
+
   return (
-    <div className="space-y-6 max-w-3xl">
-      <header className="space-y-1">
-        <h1 className="text-2xl font-semibold studio-title">Portefeuille</h1>
-        <p className="muted text-sm">
-          {data.session?.displayName} · mode {data.session?.authMode}. Aucune Nora globale ici.
+    <div className="fig-page" data-figma-frame="94:50">
+      <div className="fig-breadcrumb">
+        <span>SFIA Studio / Portefeuille personnel</span>
+        <span className="text-xs muted">
+          {data.session?.displayName} · {data.session?.authMode}
+        </span>
+      </div>
+
+      <header>
+        <p className="fig-kicker">Votre espace</p>
+        <h1 className="fig-hero-title">Bonjour, retrouvez vos projets</h1>
+        <p className="fig-hero-sub">
+          Accédez à vos espaces de travail ou démarrez un nouveau projet. Aucune conversation Nora
+          globale ici.
         </p>
       </header>

       {error ? <p className="text-sm text-[var(--bad)]">{error}</p> : null}
       {creationUncertainty ? (
-        <div className="panel p-4 text-sm" data-testid="portfolio-creation-uncertainty" role="status">
+        <div className="fig-alert" data-testid="portfolio-creation-uncertainty" role="status">
           {creationUncertainty}
           <div className="mt-2">
             <button type="button" className="btn secondary" onClick={() => void reloadPortfolio()}>
@@ -226,59 +240,144 @@ export default function PortfolioPage() {
         </div>
       ) : null}

-      <div className="flex gap-2">
-        <button
-          className="btn"
-          onClick={() => void startPreparation()}
-          disabled={creating}
-          data-testid="portfolio-new-prep"
-        >
-          {creating ? "Création…" : "Nouvelle préparation"}
-        </button>
-      </div>
-
-      {p?.kind === "empty" && (
-        <div className="panel p-5">
-          <div className="font-medium">Aucun projet persisté</div>
-          <p className="muted text-sm mt-1">
-            État vide distinct d&apos;une erreur. Préparations ouvertes: {p.openPreparations}.
-          </p>
+      <section className="fig-stat-grid" aria-label="Synthèse portefeuille">
+        <div className="fig-stat">
+          <div className="fig-stat-label">Mes projets</div>
+          <div className="fig-stat-value">{String(projects.length).padStart(2, "0")}</div>
+          <div className="fig-stat-hint">Projets accessibles</div>
         </div>
-      )}
-      {p?.kind === "unavailable" && (
-        <div className="panel p-5">
-          <div className="font-medium">Portefeuille indisponible</div>
-          <p className="muted text-sm mt-1">{p.reason}</p>
+        <div className="fig-stat">
+          <div className="fig-stat-label">Reprises récentes</div>
+          <div className="fig-stat-value">{String(Math.min(openCount, 99)).padStart(2, "0")}</div>
+          <div className="fig-stat-hint">Préparation(s) ouvertes</div>
         </div>
-      )}
-      {p?.kind === "ready" && (
-        <ul className="space-y-2" data-testid="portfolio-projects">
-          {p.projects.map((proj) => (
-            <li key={proj.id} className="panel p-4 flex justify-between items-center">
-              <div>
-                <div className="font-medium">{proj.name}</div>
-                <div className="text-xs muted">{proj.id}</div>
+        <div className="fig-stat">
+          <div className="fig-stat-label">Accès</div>
+          <div className="fig-stat-value" style={{ fontSize: "1.35rem", marginTop: 14 }}>
+            Personnel
+          </div>
+          <div className="fig-stat-hint">Chaque projet garde son contexte</div>
+        </div>
+      </section>
+
+      {isEmpty ? (
+        <section className="fig-two-col" data-figma-frame="158:264">
+          <div className="fig-panel">
+            <h2 className="fig-panel-title">Ton espace</h2>
+            <div className="fig-empty-list">
+              <div className="fig-empty-row">
+                <div>
+                  <div className="font-medium">Portefeuille</div>
+                  <div className="muted text-xs">Aucun projet Studio accessible</div>
+                </div>
+              </div>
+              <div className="fig-empty-row">
+                <div>
+                  <div className="font-medium">Démarrage</div>
+                  <div className="muted text-xs">Discuter librement avant de créer</div>
+                </div>
+              </div>
+              <div className="fig-empty-row">
+                <div>
+                  <div className="font-medium">Projet Git</div>
+                  <div className="muted text-xs">Non nécessaire</div>
+                </div>
+              </div>
+              <div className="fig-empty-row">
+                <div>
+                  <div className="font-medium">Cycle et méthode</div>
+                  <div className="muted text-xs">Non obligatoires</div>
+                </div>
+              </div>
+            </div>
+          </div>
+          <div className="fig-panel">
+            <h2 className="fig-panel-title">Commencer</h2>
+            <div className="fig-empty-list">
+              <div className="fig-empty-row">
+                <div>
+                  <div className="font-medium">Nouveau projet</div>
+                  <div className="muted text-xs">Ouvre le sas de préparation</div>
+                </div>
+              </div>
+              <div className="fig-empty-row">
+                <div>
+                  <div className="font-medium">Exploration</div>
+                  <div className="muted text-xs">Nora répond sans formulaire imposé</div>
+                </div>
+              </div>
+              <div className="fig-empty-row">
+                <div>
+                  <div className="font-medium">Création</div>
+                  <div className="muted text-xs">Toujours un acte explicite</div>
+                </div>
               </div>
-              <a className="btn secondary" href={`/projects/${proj.id}?surface=travail`}>
-                Ouvrir
-              </a>
-            </li>
-          ))}
-        </ul>
+            </div>
+            <button
+              id="nouvelle-preparation"
+              className="btn mt-4"
+              disabled={creating}
+              data-testid="portfolio-new-prep"
+              onClick={() => void startPreparation()}
+            >
+              {creating ? "Création…" : "Nouvelle préparation"}
+            </button>
+          </div>
+        </section>
+      ) : (
+        <section className="space-y-4" data-figma-frame="158:336">
+          <div className="fig-section-head">
+            <h2 className="fig-section-title">Mes projets</h2>
+            <button
+              id="nouvelle-preparation"
+              className="btn"
+              disabled={creating}
+              data-testid="portfolio-new-prep"
+              onClick={() => void startPreparation()}
+            >
+              {creating ? "Création…" : "Créer un projet"}
+            </button>
+          </div>
+          <ul className="fig-card-grid" data-testid="portfolio-projects">
+            {projects.map((proj, idx) => {
+              const st = statusForProject(idx, projects.length);
+              return (
+                <li key={proj.id} className="fig-card">
+                  <div className="fig-card-top">
+                    <div className="fig-card-title">{proj.name}</div>
+                    <span className={`fig-tag ${st.tone}`}>{st.label}</span>
+                  </div>
+                  <p className="fig-card-desc text-xs muted break-all">{proj.id}</p>
+                  <p className="fig-card-meta">Projet accessible · ouverture par projectId</p>
+                  <a className="btn mt-auto inline-flex justify-center" href={`/projects/${proj.id}?surface=travail`}>
+                    Ouvrir le projet
+                  </a>
+                </li>
+              );
+            })}
+          </ul>
+        </section>
       )}

-      {(p?.kind === "empty" || p?.kind === "ready") && (
-        <section className="space-y-3" data-testid="portfolio-preparations">
-          <h2 className="text-lg font-semibold">
-            Préparations ouvertes
-            <span className="muted text-sm font-normal ml-2">({p.openPreparations})</span>
-          </h2>
+      {p?.kind === "empty" || p?.kind === "ready" ? (
+        <section className="space-y-3" data-testid="portfolio-preparations" data-figma-frame="158:912">
+          <div className="fig-section-head">
+            <h2 className="fig-section-title">
+              Préparations à reprendre
+              <span className="muted text-sm font-normal ml-2">({openCount})</span>
+            </h2>
+          </div>
           {items.length === 0 ? (
-            <p className="text-sm muted">Aucune préparation ouverte non rattachée.</p>
+            <div className="fig-panel">
+              <p className="text-sm muted">
+                Aucune préparation ouverte. Démarrez une nouvelle préparation pour discuter avant
+                création de projet.
+              </p>
+            </div>
           ) : (
             <ul className="space-y-2">
               {items.map((prep) => (
-                <li key={prep.id} className="panel p-4 flex justify-between items-center gap-3">
+                <li key={prep.id} className="fig-card !min-h-0 flex-row items-center justify-between gap-3">
                   <div className="min-w-0">
                     <div className="font-medium truncate">{preparationDisplayLabel(prep)}</div>
                     <div className="text-xs muted">
@@ -310,7 +409,22 @@ export default function PortfolioPage() {
             </button>
           ) : null}
         </section>
-      )}
+      ) : null}
+
+      {p?.kind === "unavailable" ? (
+        <div className="fig-panel">
+          <div className="font-medium">Portefeuille indisponible</div>
+          <p className="muted text-sm mt-1">{p.reason}</p>
+        </div>
+      ) : null}
+
+      <footer className="fig-banner">
+        <h3>Continuité personnelle</h3>
+        <p>
+          Un dépôt Git partagé ne fusionne ni les conversations Nora, ni les décisions, ni les
+          mandats des projets.
+        </p>
+      </footer>
     </div>
   );
 }

```
### DIFF `projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx`

```diff
diff --git a/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx b/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
index 84d8b7d0..02ba61af 100644
--- a/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
@@ -1,7 +1,7 @@
 "use client";

 import { useCallback, useEffect, useMemo, useRef, useState } from "react";
-import { useParams, useRouter } from "next/navigation";
+import { useParams, useRouter, useSearchParams } from "next/navigation";
 import { SafeMarkdown } from "@/components/SafeMarkdown";

 type Msg = { id: string; role: string; content: string; status: string };
@@ -25,7 +25,10 @@ type Surface = "travail" | "journal" | "document";
 export default function PreparationPage() {
   const params = useParams<{ preparationId: string }>();
   const router = useRouter();
+  const searchParams = useSearchParams();
   const preparationId = params.preparationId;
+  const isResumedPrep =
+    searchParams.get("resume") === "1" || searchParams.get("from") === "portfolio";
   const [messages, setMessages] = useState<Msg[]>([]);
   const [docs, setDocs] = useState<Doc[]>([]);
   const [knowledge, setKnowledge] = useState<Knowledge | null>(null);
@@ -499,19 +502,26 @@ export default function PreparationPage() {
   }

   const inspected = docs.find((d) => d.document.id === inspectDocId) ?? docs[0];
+  const sasFrame = isResumedPrep ? "159:145" : "94:135";

   return (
-    <div className="space-y-3">
-      <header className="flex flex-wrap items-end justify-between gap-3">
-        <div>
-          <p className="text-xs muted uppercase tracking-wide">Travail / sas</p>
-          <h1 className="text-xl font-semibold">Fil continu avec Nora</h1>
-          <p className="text-xs muted">
-            {preparationId}
-            {projectId ? ` · projet ${projectId}` : " · sans projet"}
-          </p>
-        </div>
-        <nav className="flex gap-2 text-sm" aria-label="Surfaces ML2">
+    <div className="fig-page" data-figma-frame={sasFrame} data-sas-resume={isResumedPrep ? "1" : "0"}>
+      <div className="fig-breadcrumb">
+        <span>SFIA Studio / Sas de préparation{isResumedPrep ? " · reprise" : ""}</span>
+        <span className="text-xs muted truncate max-w-[45%]">{preparationId}</span>
+      </div>
+      <header className="space-y-2">
+        <p className="fig-kicker">{isResumedPrep ? "Reprise / sas" : "Travail / sas"}</p>
+        <h1 className="fig-hero-title">
+          {isResumedPrep ? "Préparation retrouvée" : "Fil continu avec Nora"}
+        </h1>
+        <p className="fig-hero-sub">
+          {isResumedPrep
+            ? "Continuité depuis le portefeuille. Même fil, même ownership — aucune double création."
+            : "Conversation avant projet. La création de projet reste un acte explicite."}
+          {projectId ? ` Projet lié : ${projectId}.` : " Aucun projet encore créé."}
+        </p>
+        <nav className="flex flex-wrap gap-2 pt-1" aria-label="Surfaces ML2">
           {(
             [
               ["travail", "Travail"],
@@ -532,24 +542,35 @@ export default function PreparationPage() {
       </header>

       {noraActivity === "preparing" ? (
-        <div className="panel p-3 text-sm" role="status" aria-live="polite">
+        <div className="fig-alert" role="status" aria-live="polite">
           Nora prépare une réponse…
         </div>
       ) : null}
       {noraActivity === "error" ? (
-        <div className="panel p-3 text-sm" style={{ borderColor: "var(--bad)" }}>
+        <div className="fig-alert" style={{ borderColor: "var(--bad)" }}>
           Échec de génération — message utilisateur conservé.
         </div>
       ) : null}

       {surface === "travail" ? (
-        <div className="grid lg:grid-cols-[1.45fr_1fr] gap-4">
-          <section className="panel p-4 space-y-4">
+        <div className="fig-workspace">
+          <section className="fig-panel space-y-3">
+            <p className="fig-kicker">Conversation</p>
             <div className="space-y-3 max-h-[52vh] overflow-auto pr-1">
+              {messages.length === 0 ? (
+                <div className="fig-msg fig-msg-nora text-sm muted">
+                  Commencez le fil — Nora répond dans ce sas avant toute création de projet.
+                </div>
+              ) : null}
               {messages.map((m) => (
-                <article key={m.id} className="panel p-3">
+                <article
+                  key={m.id}
+                  className={`fig-msg ${m.role === "assistant" ? "fig-msg-nora" : "fig-msg-pilot"}`}
+                >
                   <div className="text-xs muted mb-2 flex gap-2 items-center">
-                    <span className="uppercase tracking-wide">{m.role === "assistant" ? "Nora" : "Pilote"}</span>
+                    <span className="uppercase tracking-wide">
+                      {m.role === "assistant" ? "Nora" : "Pilote"}
+                    </span>
                     <span>· {m.status}</span>
                   </div>
                   {m.role === "assistant" ? (
@@ -560,7 +581,7 @@ export default function PreparationPage() {
                 </article>
               ))}
             </div>
-            <div className="space-y-2">
+            <div className="fig-composer">
               <textarea
                 className="textarea"
                 value={draft}
@@ -574,9 +595,9 @@ export default function PreparationPage() {
             </div>
           </section>

-          <section className="space-y-4">
-            <div className="panel p-4 space-y-3">
-              <h2 className="font-medium">Aperçu de création (non autorisant)</h2>
+          <section className="space-y-3">
+            <div className="fig-panel space-y-3">
+              <h2 className="fig-panel-title">Aperçu de création (non autorisant)</h2>
               <input
                 className="input"
                 value={previewName}
@@ -590,7 +611,7 @@ export default function PreparationPage() {
                 placeholder="Résumé inspecté"
               />
               <div className="text-xs muted">Révision création: {creationRevision}</div>
-              <div className="flex gap-2 flex-wrap">
+              <div className="flex flex-wrap gap-2">
                 <button className="btn secondary" disabled={busy} onClick={savePreview}>
                   Enregistrer l&apos;aperçu
                 </button>
@@ -599,8 +620,8 @@ export default function PreparationPage() {
                 </button>
               </div>
             </div>
-            <div className="panel p-4 space-y-2">
-              <h2 className="font-medium">Contexte projet</h2>
+            <div className="fig-panel space-y-2">
+              <h2 className="fig-panel-title">Contexte</h2>
               <p className="text-xs muted">
                 Acquis courants: {knowledge?.acquis.filter((a) => a.status === "CURRENT").length ?? 0} ·
                 Points ouverts: {knowledge?.openPoints.filter((o) => o.status === "OPEN").length ?? 0} ·

```
### DIFF `projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx`

```diff
diff --git a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
index e0b16e4c..3ee8af24 100644
--- a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
@@ -4,6 +4,7 @@ import { useEffect, useRef, useState } from "react";
 import { useParams, useRouter, useSearchParams } from "next/navigation";
 import { SafeMarkdown } from "@/components/SafeMarkdown";
 import { PilotagePanel } from "@/components/PilotagePanel";
+import { ProjectChrome } from "@/components/figma/ProjectChrome";
 import {
   conversationalClientCommandKey,
   mayStartNewThreadAct,
@@ -671,110 +672,117 @@ export default function ProjectPage() {
   }

   return (
-    <div className="space-y-4">
-      <header className="flex flex-wrap items-end justify-between gap-3">
-        <div>
-          <p className="text-xs muted uppercase tracking-wide">Espace projet</p>
-          <h1 className="text-2xl font-semibold">Projet</h1>
-          <p className="text-xs muted">{params.projectId}</p>
-          <p className="text-sm muted mt-1">{meta}</p>
-        </div>
-        <nav className="flex gap-2 text-sm" aria-label="Surfaces projet">
-          {(
-            [
-              ["travail", "Travail"],
-              ["pilotage", "Pilotage"],
-              ["journal", "Journal"],
-              ["document", "Documents"],
-            ] as const
-          ).map(([id, label]) => (
-            <button
-              key={id}
-              type="button"
-              className={`btn ${surface === id ? "" : "secondary"}`}
-              onClick={() => selectSurface(id)}
-              data-testid={`surface-${id}`}
-            >
-              {label}
-            </button>
-          ))}
-        </nav>
-      </header>
-
+    <ProjectChrome
+      projectId={params.projectId}
+      surface={surface}
+      meta={meta}
+      onSelectSurface={selectSurface}
+    >
       {noraActivity === "preparing" ? (
-        <div className="panel p-3 text-sm" role="status">
+        <div className="fig-alert" role="status">
           Nora prépare une réponse…
         </div>
       ) : null}

       {surface === "travail" ? (
-        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-4">
-          <section className="space-y-2">
-            {messages.map((m) => (
-              <article key={m.id} className="panel p-3">
-                <div className="text-xs muted mb-1">
-                  {m.role === "assistant" ? "Nora" : "Pilote"} · {m.status}
+        <div
+          className="fig-workspace fig-nora-responsive"
+          data-figma-frame={
+            messages.length === 0
+              ? "161:216"
+              : messages.length <= 2
+                ? "161:288"
+                : "94:214"
+          }
+          data-figma-mobile-frames="282:468,282:492"
+        >
+          <section className="space-y-3">
+            <div className="fig-panel space-y-3">
+              <p className="fig-kicker">Travail / projet</p>
+              <div className="flex flex-wrap gap-2">
+                <span className="fig-tag fig-tag-accent">PILOTE</span>
+                <span className="fig-tag fig-tag-muted">Fil unique</span>
+                {unresolvedPending ? (
+                  <span className="fig-tag fig-tag-warn">Interruption / reprise</span>
+                ) : null}
+              </div>
+              {messages.length === 0 ? (
+                <div className="fig-msg fig-msg-nora text-sm muted">
+                  Première conversation — écrivez pour démarrer le fil Nora du projet.
                 </div>
-                {m.role === "assistant" ? (
-                  <SafeMarkdown content={m.content} />
-                ) : (
-                  <div className="whitespace-pre-wrap text-sm">{m.content}</div>
-                )}
-              </article>
-            ))}
-            <div className="panel p-3 space-y-2">
-              <textarea
-                className="textarea"
-                value={draft}
-                onChange={(e) => setDraft(e.target.value)}
-                placeholder="Poursuivre dans le même fil…"
-                aria-label="Message à Nora"
-                data-testid="thread-draft"
-              />
-              <button
-                className="btn"
-                disabled={busy || !preparationId}
-                onClick={sendMessage}
-                data-testid="thread-send"
-              >
-                Envoyer
-              </button>
-              {unresolvedPending ? (
-                <div className="space-y-1" data-testid="thread-pending-banner">
-                  <p className="text-xs muted">
-                    Tentative non résolue · {unresolvedPending.clientCommandKey.slice(0, 32)}…
-                  </p>
+              ) : null}
+              {messages.map((m) => (
+                <article
+                  key={m.id}
+                  className={`fig-msg ${m.role === "assistant" ? "fig-msg-nora" : "fig-msg-pilot"}`}
+                >
+                  <div className="text-xs muted mb-1">
+                    {m.role === "assistant" ? "NORA" : "PILOTE"} · {m.status}
+                  </div>
+                  {m.role === "assistant" ? (
+                    <SafeMarkdown content={m.content} />
+                  ) : (
+                    <div className="whitespace-pre-wrap text-sm">{m.content}</div>
+                  )}
+                </article>
+              ))}
+              <div className="fig-composer">
+                <textarea
+                  className="textarea"
+                  value={draft}
+                  onChange={(e) => setDraft(e.target.value)}
+                  placeholder="Écrire à Nora…"
+                  aria-label="Message à Nora"
+                  data-testid="thread-draft"
+                />
+                <div className="flex flex-wrap gap-2">
                   <button
-                    type="button"
-                    className="btn secondary"
-                    disabled={busy}
-                    data-testid="thread-reconcile-pending"
-                    onClick={() => void reconcilePending(unresolvedPending)}
+                    className="btn"
+                    disabled={busy || !preparationId}
+                    onClick={sendMessage}
+                    data-testid="thread-send"
                   >
-                    Réconcilier la tentative en cours
+                    Envoyer
                   </button>
+                  <span className="text-xs muted self-center">Joindre un élément · non requis</span>
                 </div>
-              ) : null}
-              {status ? (
-                <p className="text-xs muted" data-testid="thread-nora-status">
-                  {status}
-                </p>
-              ) : null}
-              {pilotageStatus ? (
-                <p className="text-xs" data-testid="thread-pilotage-status" role="status">
-                  {pilotageStatus}
-                </p>
-              ) : null}
-              {decisionSummary ? (
-                <p className="text-xs muted" data-testid="thread-decision-summary">
-                  {decisionSummary}
-                </p>
-              ) : null}
+                {unresolvedPending ? (
+                  <div className="space-y-1" data-testid="thread-pending-banner">
+                    <p className="text-xs muted">
+                      Tentative non résolue · {unresolvedPending.clientCommandKey.slice(0, 32)}…
+                    </p>
+                    <button
+                      type="button"
+                      className="btn secondary"
+                      disabled={busy}
+                      data-testid="thread-reconcile-pending"
+                      onClick={() => void reconcilePending(unresolvedPending)}
+                    >
+                      Réconcilier la tentative en cours
+                    </button>
+                  </div>
+                ) : null}
+                {status ? (
+                  <p className="text-xs muted" data-testid="thread-nora-status">
+                    {status}
+                  </p>
+                ) : null}
+                {pilotageStatus ? (
+                  <p className="text-xs" data-testid="thread-pilotage-status" role="status">
+                    {pilotageStatus}
+                  </p>
+                ) : null}
+                {decisionSummary ? (
+                  <p className="text-xs muted" data-testid="thread-decision-summary">
+                    {decisionSummary}
+                  </p>
+                ) : null}
+              </div>
             </div>
           </section>
           <aside className="space-y-3">
-            <div className="panel p-4 space-y-2">
-              <h2 className="font-medium">En bref</h2>
+            <div className="fig-panel space-y-2">
+              <h2 className="fig-panel-title">En bref</h2>
               <p className="text-sm muted">
                 Un seul fil visible. Mémoire D4 récupérable au-delà des six derniers messages.
               </p>
@@ -783,8 +791,18 @@ export default function ProjectPage() {
                 Ouverts: {knowledge?.openPoints.filter((o) => o.status === "OPEN").length ?? 0}
               </p>
             </div>
-            <div className="panel p-4 space-y-2">
-              <h2 className="font-medium">Points à clarifier</h2>
+            <div className="fig-panel space-y-2">
+              <h2 className="fig-panel-title">Objets du projet</h2>
+              <ul className="text-sm muted space-y-1">
+                <li>Documents Nora · {documents.length}</li>
+                <li>Réalisations et preuves · via Pilotage</li>
+                <li>
+                  Sources Git autorisées · <span className="fig-tag fig-tag-muted">non disponible</span>
+                </li>
+              </ul>
+            </div>
+            <div className="fig-panel space-y-2" style={{ background: "rgba(101,111,225,0.08)" }}>
+              <h2 className="fig-panel-title">Points à clarifier</h2>
               {(knowledge?.openPoints ?? [])
                 .filter((o) => o.status === "OPEN")
                 .slice(0, 5)
@@ -801,43 +819,95 @@ export default function ProjectPage() {
         </div>
       ) : null}

-      {surface === "pilotage" ? <PilotagePanel projectId={params.projectId} /> : null}
+      {surface === "pilotage" ? (
+        <div className="space-y-4" data-figma-frame="125:33">
+          <div className="fig-stat-grid">
+            <div className="fig-stat">
+              <div className="fig-stat-label">Cycle</div>
+              <div className="fig-stat-value" style={{ fontSize: "1.2rem", marginTop: 14 }}>
+                Affichage D5
+              </div>
+              <div className="fig-stat-hint">Sans nouvelle autorité</div>
+            </div>
+            <div className="fig-stat">
+              <div className="fig-stat-label">Décisions</div>
+              <div className="fig-stat-value" style={{ fontSize: "1.2rem", marginTop: 14 }}>
+                Journal D6
+              </div>
+              <div className="fig-stat-hint">HumanDecision existantes</div>
+            </div>
+            <div className="fig-stat">
+              <div className="fig-stat-label">CKI / méthode</div>
+              <div className="fig-stat-value" style={{ fontSize: "1.2rem", marginTop: 14 }}>
+                Lecture seule
+              </div>
+              <div className="fig-stat-hint">Services projet</div>
+            </div>
+          </div>
+          <div className="fig-panel" data-figma-frame="127:106">
+            <PilotagePanel projectId={params.projectId} />
+          </div>
+        </div>
+      ) : null}

       {surface === "document" ? (
-        <div className="grid lg:grid-cols-2 gap-4">
-          <section className="space-y-2">
+        <div className="fig-workspace-3" data-figma-frame="94:370">
+          <section className="space-y-2" data-figma-frame="160:175">
+            <div className="fig-section-head">
+              <h2 className="fig-section-title">Bibliothèque</h2>
+              <span className="fig-tag fig-tag-muted">{documents.length} doc(s)</span>
+            </div>
             {documents.map((d) => (
               <button
                 key={d.document.id}
                 type="button"
-                className={`panel p-3 text-left w-full ${
+                className={`fig-card !min-h-0 text-left w-full ${
                   inspect?.document.id === d.document.id ? "ring-1 ring-[var(--accent)]" : ""
                 }`}
                 onClick={() => openDocumentReadOnly(d)}
                 data-testid={`doc-open-${d.document.id}`}
               >
-                <div className="text-xs muted mb-1">
-                  {d.document.title} · {d.document.id} · v{d.latestRevision?.revisionNumber ?? "?"} ·{" "}
-                  {d.latestRevision?.status ?? "—"}
+                <div className="fig-card-top">
+                  <div className="fig-card-title text-sm">{d.document.title}</div>
+                  <span className="fig-tag fig-tag-muted">
+                    v{d.latestRevision?.revisionNumber ?? "?"}
+                  </span>
                 </div>
-                <div className="text-sm line-clamp-3">
+                <div className="fig-card-desc line-clamp-3">
                   {(d.latestRevision?.contentMarkdown ?? "").slice(0, 180)}
                 </div>
+                <div className="fig-card-meta">{d.latestRevision?.status ?? "—"}</div>
               </button>
             ))}
             {documents.length === 0 ? (
               <p className="text-sm muted">Aucun document D4 pour ce projet.</p>
             ) : null}
           </section>
-          <section className="panel p-4 space-y-2" data-testid="document-inspect">
-            <h2 className="font-medium">
-              {docUi === "EDITING" || docUi === "SAVING" || docUi === "CONFLICT" || docUi === "UNKNOWN"
-                ? "Révision"
-                : "Inspection"}
-            </h2>
-            <p className="text-xs muted" data-testid="document-ui-state">
-              État: {docUi}
-            </p>
+          <section
+            className="fig-panel space-y-3"
+            data-testid="document-inspect"
+            data-figma-frame={
+              docUi === "CONFLICT" ? "160:391" : inspect ? "97:359" : "241:385"
+            }
+          >
+            <div className="flex flex-wrap gap-2 items-center">
+              <h2 className="fig-panel-title !mb-0">
+                {docUi === "EDITING" ||
+                docUi === "SAVING" ||
+                docUi === "CONFLICT" ||
+                docUi === "UNKNOWN"
+                  ? "Révision"
+                  : "Inspection"}
+              </h2>
+              <span className="fig-tag fig-tag-accent" data-testid="document-ui-state">
+                {docUi}
+              </span>
+              {inspect?.latestRevision ? (
+                <span className="fig-tag fig-tag-muted" data-figma-frame="241:385">
+                  Historique · v{inspect.latestRevision.revisionNumber}
+                </span>
+              ) : null}
+            </div>
             {docMissing ? (
               <p className="text-sm" data-testid="document-missing" role="status">
                 {docMissing}
@@ -845,13 +915,18 @@ export default function ProjectPage() {
             ) : null}
             {inspect?.latestRevision ? (
               <>
-                <p className="text-xs muted">
-                  {inspect.document.id} · v{inspect.latestRevision.revisionNumber} ·{" "}
-                  {inspect.latestRevision.status}
-                  {reviseBaseIdRef.current
-                    ? ` · base intention ${reviseBaseIdRef.current.slice(0, 8)}…`
-                    : ""}
-                </p>
+                <div className="flex flex-wrap gap-2">
+                  <span className="fig-tag fig-tag-muted">Markdown</span>
+                  <span className="fig-tag fig-tag-muted">
+                    v{inspect.latestRevision.revisionNumber}
+                  </span>
+                  <span className="fig-tag fig-tag-warn">{inspect.latestRevision.status}</span>
+                </div>
+                <div className="fig-alert">
+                  Document retrouvé sous ownership projet/préparation. Aucune publication Git
+                  implicite.
+                </div>
+                <p className="text-xs muted">{inspect.document.id}</p>
                 {docUi === "EDITING" ||
                 docUi === "SAVING" ||
                 docUi === "CONFLICT" ||
@@ -878,7 +953,7 @@ export default function ProjectPage() {
                           ? "Enregistrement…"
                           : docUi === "UNKNOWN"
                             ? "Réessayer (même clé)"
-                            : "Enregistrer la révision"}
+                            : "Demander une révision"}
                       </button>
                       {docUi === "CONFLICT" ? (
                         <button
@@ -921,7 +996,7 @@ export default function ProjectPage() {
                           reviseBaseIdRef.current = inspect.latestRevision?.id ?? null;
                         }}
                       >
-                        Réviser
+                        Demander une révision
                       </button>
                       <button
                         type="button"
@@ -951,11 +1026,11 @@ export default function ProjectPage() {
       ) : null}

       {surface === "journal" ? (
-        <div className="grid lg:grid-cols-2 gap-4">
-          <section className="panel p-4 space-y-2">
-            <h2 className="font-medium">Sujets</h2>
+        <div className="fig-two-col" data-figma-frame="94:515">
+          <section className="fig-panel space-y-2">
+            <h2 className="fig-panel-title">Sujets</h2>
             {(knowledge?.subjects ?? []).map((s) => (
-              <div key={s.id} className="panel p-2 text-sm">
+              <div key={s.id} className="fig-msg text-sm">
                 <div className="font-medium">{s.title}</div>
                 <div className="text-xs muted">
                   {s.status}
@@ -963,20 +1038,22 @@ export default function ProjectPage() {
                 </div>
               </div>
             ))}
+            {(knowledge?.subjects ?? []).length === 0 ? (
+              <p className="text-sm muted">Aucun sujet capitalisé.</p>
+            ) : null}
           </section>
-          <section className="panel p-4 space-y-2">
-            <h2 className="font-medium">Acquis courants</h2>
+          <section className="fig-panel space-y-2" data-figma-frame="129:72">
+            <h2 className="fig-panel-title">Acquis courants</h2>
             {(knowledge?.acquis ?? [])
               .filter((a) => a.status === "CURRENT")
               .map((a) => (
-                <div key={a.id} className="text-sm panel p-2">
-                  <span className="text-xs muted">{a.kind} · </span>
+                <div key={a.id} className="text-sm fig-msg">
+                  <span className="fig-tag fig-tag-muted mr-2">{a.kind}</span>
                   {a.statement}
                 </div>
               ))}
             <p className="text-xs muted pt-2">
-              Les décisions D6 opposables sont dans l&apos;onglet Pilotage (Journal—Décisions), pas
-              ici.
+              Les décisions D6 opposables sont dans Pilotage, pas ici.
             </p>
           </section>
         </div>
@@ -985,6 +1062,6 @@ export default function ProjectPage() {
       <a className="btn secondary inline-block" href="/portfolio">
         Retour portefeuille
       </a>
-    </div>
+    </ProjectChrome>
   );
 }

```

## 5. Matrice 20 frames (résumé)

Voir as-built ci-dessus. **19 IMPLEMENTED + 1 PARTIAL (`241:385` historique chip, pas panneau dédié).**
Mobile 216/217 = reflow CSS du workspace Nora (pas artboard 1350 px).

## 6. QA technique (stdout extraits)

### unit
```
-gate.test.ts (4 tests) 2ms
 ✓ tests/unit/studio-rail.test.ts (6 tests) 1ms
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-08T01:48:04.203Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.nora.policy_selected","component":"d3.nora_adapter","generation_id":"gen_619e17e5-8f62-4ff3-95fc-c8d44d05b33a","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"analyse","effort":"medium","model":"gpt-6.1-sol","tools":"search_project_resources,read_project_document_revision","profile_type_detail":"TEST_BOUNDARY"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-08T01:48:04.204Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.nora.fixture_complete","component":"d3.nora_adapter","generation_id":"gen_619e17e5-8f62-4ff3-95fc-c8d44d05b33a","attempt_id":"att_fe84f4ab-bc98-44f9-a3ce-04e05098a3b7","outcome":"SUCCESS","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"analyse","tool_calls":0,"profile_type_detail":"TEST_BOUNDARY"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-08T01:48:04.205Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.nora.policy_selected","component":"d3.nora_adapter","generation_id":"gen_1405c615-45ef-476d-a384-de0cc5f2fd83","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"simple","effort":"low","model":"gpt-6.1-sol","tools":"","profile_type_detail":"TEST_BOUNDARY"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-08T01:48:04.205Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.nora.fixture_complete","component":"d3.nora_adapter","generation_id":"gen_1405c615-45ef-476d-a384-de0cc5f2fd83","attempt_id":"att_2009c95b-2a8b-4010-8c38-22abd90c0d71","outcome":"SUCCESS","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"simple","tool_calls":0,"profile_type_detail":"TEST_BOUNDARY"}}
 ✓ tests/unit/ml2-cognition-fixture.test.ts (2 tests) 3ms
 ✓ tests/unit/portfolio-cursor.test.ts (5 tests) 2ms
 ✓ tests/unit/http-errors.test.ts (3 tests) 1ms
 ✓ tests/unit/fingerprint.test.ts (2 tests) 1ms
 ✓ tests/unit/safe-markdown.test.ts (2 tests) 1ms
 ✓ tests/unit/next-dist-dir.test.ts (2 tests) 3ms
 ✓ tests/unit/non-effects.test.ts (1 test) 1ms

 Test Files  19 passed (19)
      Tests  123 passed (123)
   Start at  02:48:01
   Duration  3.43s (transform 165ms, setup 0ms, collect 1.73s, tests 108ms, environment 1ms, prepare 392ms)


```

### e2e B1–B4
```
y exists, skipping
[WebServer] NOTICE:  relation "human_decisions_project_idx" already exists, skipping
[WebServer] NOTICE:  relation "trajectory_revisions" already exists, skipping
[WebServer] NOTICE:  relation "trajectory_revisions_project_idx" already exists, skipping
[WebServer] NOTICE:  relation "project_pilotage_state" already exists, skipping
[WebServer] NOTICE:  relation "project_cycles" already exists, skipping
[WebServer] NOTICE:  relation "project_cycles_one_active_uidx" already exists, skipping
[WebServer] NOTICE:  relation "project_cycles_project_idx" already exists, skipping
[WebServer] NOTICE:  relation "method_applications" already exists, skipping
[WebServer] NOTICE:  relation "method_applications_current_uidx" already exists, skipping
[WebServer] NOTICE:  relation "method_applications_project_idx" already exists, skipping
[WebServer] NOTICE:  relation "governance_restrictions" already exists, skipping
[WebServer] NOTICE:  relation "governance_restrictions_project_idx" already exists, skipping
[WebServer] NOTICE:  relation "business_commands" already exists, skipping
[WebServer] NOTICE:  relation "business_commands_client_key_uidx" already exists, skipping
[WebServer] NOTICE:  relation "business_commands_human_intent_uidx" already exists, skipping
[WebServer] NOTICE:  relation "business_commands_project_idx" already exists, skipping
[WebServer] NOTICE:  relation "business_command_effects" already exists, skipping
[WebServer] NOTICE:  relation "business_command_effects_command_ordinal_uidx" already exists, skipping
[WebServer] NOTICE:  relation "business_command_effects_command_idx" already exists, skipping

Running 1 test using 1 worker

(node:73414) Warning: The 'NO_COLOR' env is ignored due to the 'FORCE_COLOR' env being set.
(Use `node --trace-warnings ...` to show where the warning was created)
  ✓  1 tests/e2e/g4-b1-b4-correctifs.spec.ts:7:5 › G4 B1–B4: rail surfaces, resume without POST, deep-link, revise AVAILABLE (14.0s)

  1 passed (18.1s)

```

### G2 verify
```
aw/page.content.205.json
OK RAW manifests/raw/page.content.22.json
OK RAW manifests/raw/page.content.24.json
OK RAW manifests/raw/page.content.40.json
OK RAW manifests/raw/page.content.73.json
OK RAW manifests/raw/page.content.74.json
OK RAW manifests/raw/page.content.89.json
OK RAW manifests/raw/page.content.92.json
OK RAW manifests/raw/portfolio.content.json
OK RAW manifests/raw/portfolio.empty.64.json
OK RAW manifests/raw/portfolio.list.65.json
OK RAW manifests/raw/sas.surface.02.json
OK RAW manifests/raw/shell.rail.conversation.json
OK RAW manifests/raw/shell.rail.inspection.json
OK RAW manifests/raw/shell.rail.personnel.json
OK RAW manifests/raw/shell.rail.projet.json
OK nora v2 nodes=129 text_typo=77/77 rootFr.x=240
RAW INTEGRITY PASS (indexes/raw-files.sha256 + nora v2)
VERIFY PASS

```

### build
```
kB
├ ƒ /api/preparations/[preparationId]/reconcile                              166 B         103 kB
├ ƒ /api/projects/[projectId]                                                166 B         103 kB
├ ƒ /api/projects/[projectId]/decisions                                      166 B         103 kB
├ ƒ /api/projects/[projectId]/pilotage                                       166 B         103 kB
├ ƒ /api/projects/[projectId]/pilotage/commands                              166 B         103 kB
├ ƒ /api/projects/[projectId]/pilotage/commands/[commandId]                  166 B         103 kB
├ ƒ /api/projects/[projectId]/pilotage/commands/by-key/[clientCommandKey]    166 B         103 kB
├ ○ /login                                                                 1.25 kB         104 kB
├ ○ /portfolio                                                             3.35 kB         106 kB
├ ƒ /preparations/[preparationId]                                          6.86 kB         110 kB
└ ƒ /projects/[projectId]                                                  13.1 kB         116 kB
+ First Load JS shared by all                                               103 kB
  ├ chunks/493-d3099f0aa7768a9d.js                                         46.6 kB
  ├ chunks/4bd1b696-c023c6e3521b1417.js                                    54.2 kB
  └ other shared chunks (total)                                            1.92 kB


○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand


```

Autres : `tsc --noEmit` PASS ; integration PG 144 PASS (cycle) ; F2/G5 **NOT RUN**.

## 7. DEV accessible (ENV-01)

| Champ | Valeur |
|---|---|
| URL | http://127.0.0.1:3100 |
| Login | http://127.0.0.1:3100/login → **Pilote A (DEV)** (FAKE, pas OAuth LIVE) |
| PID listen | 76502 (`next-server`, cwd G4 web) |
| Shell terminal | PID 76469 |
| SHA servi | `c2af05cb` (arbre local) |
| HTTP prouvé | login 200 ; `POST /api/dev/login` ok ; portfolio 200 ; projet surfaces travail/document/journal/pilotage 200 ; prep `?resume=1` 200 |
| Preuve JS | chunk `src_8b162e23._.js` contient `fig-page`, `Bonjour`, `data-figma-frame`, `94:50` |
| Preuve CSS | root CSS contient `.fig-page`, `.fig-stat-grid`, `.fig-workspace`, `--fig-accent` |

Relance :
```bash
cd /Users/morris/Projects/sfia-workspace-next-g4-construction/projects/sfia-studio-next/web
npm run dev
```

### Parcours Morris (revue visuelle)

1. Login → Pilote A (DEV)
2. `/portfolio` — hero/stats/cartes/préparations
3. Reprendre une préparation → sas `?resume=1`
4. Ouvrir un projet → Travail (Nora)
5. Documents → bibliothèque + inspection/révision
6. Journal → sujets/acquis
7. Pilotage → cycle/CKI/décisions

## 8. Risques / debt / exit

- Fidélité pixel Figma : **non mesurée** (Morris)
- `241:385` PARTIAL (métadonnée révision, pas historique complet)
- Portfolio frames 64/65/73 railEvidence Figma = `projet` ; runtime portfolio = `personnel` (frame 01) — documenté
- Cookies localhost multi-lanes : réserve connue ENV-01
- Aucun push projet / PR / RECETTE / STABLE

## 9. Commit show

```
commit c2af05cb6ae1d835a6e9fe0a4a57b7d7ac1cf0c0
Author:     Morris Cleland <morris@MacBook-Air.local>
AuthorDate: Sun Nov 8 02:52:45 2026 +0100
Commit:     Morris Cleland <morris@MacBook-Air.local>
CommitDate: Sun Nov 8 02:52:45 2026 +0100

    feat(next): transpose G2 Figma UX surfaces into navigable G4 React views

    Rebuild portfolio, sas, and project surfaces with Figma composition tokens and railEvidence-aware shell variants so Morris can visually review the 20 G2 frames on DEV.

    Co-authored-by: Cursor <cursoragent@cursor.com>

 ...s-built-g4-figma-ux-transposition-2026-11-08.md |  73 +++++
 projects/sfia-studio-next/web/src/app/layout.tsx   |   1 +
 .../web/src/app/portfolio/page.tsx                 | 246 +++++++++++----
 .../src/app/preparations/[preparationId]/page.tsx  |  71 +++--
 .../web/src/app/projects/[projectId]/page.tsx      | 335 +++++++++++++--------
 .../web/src/components/figma/ProjectChrome.tsx     |  75 +++++
 .../web/src/components/figma/tokens.css            | 290 ++++++++++++++++++
 .../web/src/components/shell/StudioShell.tsx       |  89 +++++-
 .../web/src/components/shell/studio-rail.ts        |  32 +-
 .../web/tests/unit/studio-rail.test.ts             |  18 +-
 10 files changed, 987 insertions(+), 243 deletions(-)

```

## 10. Verdict

**G4 UX TRANSPOSED IN DEV — READY FOR MORRIS VISUAL REVIEW**

Handoff publish-in-cycle requis sur `sfia/review-handoff` (ce fichier).
