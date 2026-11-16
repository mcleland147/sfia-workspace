# SFIA Review Pack — ML4D UX-004 Portefeuille & shell personnel

Date/heure : 2026-11-16 08:13:26 +0100 (2026-11-16T07:13:26Z)
GO Morris : Delivery UX-004 DEV ; RECETTE non autorisée ; push projet/PR/merge/STABLE NON
Profil : Standard · Review Pack : Full · Handoff : publish-in-cycle
CKC UX-004 : **ABSENT** — fallback SFIA v2.6

## 0. Verdict exécutif

**READY WITH RESERVES — UX-004 DEV**

Candidat local figé `bc8785683c30430aa99bc76e138ba10f49c71c39` sur branche `feat/next-ml4d-ux004-portfolio-20261116`,
basé sur UX-003 `` `a77a3a2bf7b942038d771fdcdd2e7a6410330784` (branche UX-003 inchangée).
RECETTE `:3200` **non modifiée** (toujours UX-003).

## 1. Git Truth Check

| Champ | Valeur |
| --- | --- |
| Repo | mcleland147/sfia-workspace |
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4d-ux003-entry-20261116` |
| Branche UX-004 | `feat/next-ml4d-ux004-portfolio-20261116` |
| HEAD candidat | `bc8785683c30430aa99bc76e138ba10f49c71c39` |
| Tree web | `cc42e2eaf3a16478a30e3d581eaa4496cc3779e2` |
| Build fingerprint | `8vsahDFPlzPO5IVsE0mX6` |
| origin/main | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| Base UX-003 | `a77a3a2bf7b942038d771fdcdd2e7a6410330784` |
| Branche UX-003 tip | `a77a3a2bf7b942038d771fdcdd2e7a6410330784` (préservée) |
| Push projet | **NON** |
| Dirty hors pack | `.tmp-sfia-review/chatgpt-review.md` uniquement |

### Commit

```
bc878568 feat(next): implement ML4D UX-004 portfolio and personal shell
 .../construction/delivery-history.md               |  18 +
 .../contrat-visuel-ux004-portefeuille-20261116.md  |  78 +++++
 .../web/src/app/portfolio/page.tsx                 | 237 ++++++-------
 .../web/src/components/figma/tokens.css            | 141 ++++++++
 .../web/src/components/shell/StudioShell.tsx       | 385 ++++++++++++++-------
 .../web/src/components/shell/studio-rail.ts        |  16 +-
 .../web/src/components/shell/studio-shell.css      | 207 +++++++++++
 .../web/tests/e2e/ml1-smoke.spec.ts                |   5 +-
 .../web/tests/e2e/ux004-f2-measure.spec.ts         |  34 ++
 .../web/tests/e2e/ux004-portfolio-shell.spec.ts    | 271 +++++++++++++++
 .../web/tests/unit/studio-rail.test.ts             |   8 +-
 11 files changed, 1134 insertions(+), 266 deletions(-)

```

## 2. Sources lues (blobs HEAD)

| Source | Blob |
| --- | --- |
| SEF.md | `ef85ba1eda6ce5eaddd75eca3ca299a10cd05ad4` |
| roadmap.md | `1be3e58d734bbb8ff88a4308020dc82e78c97cf7` |
| ENV-01 | `14b61f0d1265cf85fcca09b028dd09bd8c71597f` |
| product-versioning | `8bc93e0fafac0f981c446e978a37f5f93d183875` |
| contrat-transposition-figma | `7657ad1e5c4bc943a5e46ead5a6a123590855f17` |
| protocole-fidelite | `a39a01ef81b0c61279321af76056197f7de6a923` |
| acces-et-portefeuille | `adc5edf373c59e0834fb30f0c2a844cb4d768399` |
| creation-sas D2 | `b75fb54a0bc70113cafabed52803d197a87310f0` |
| Registre revues docs branch | `48f4c615c64024f9cab90cf512767ee8aa42b6d6` (hors main) |

## 3. Figma UX-004

Fichier `itgvCulInEnFY6DvgIegvP` · page `94:49` · session MCP `86e64a13-ea4a-41c7-b69d-78638cf331ef`

Frames validées : `591:425` `591:543` `591:661` `591:721` `592:435`

Captures : `.tmp-sfia-review/figma-refs-ux004/` (sha256 dans contrat)

## 4. Contrat visuel (fichier créé — contenu complet)

```markdown
# Contrat visuel L1/L2 — UX-004 Portefeuille & shell personnel (2026-11-16)

| Champ | Valeur |
| --- | --- |
| Statut | EXTRAIT FIGMA MCP — VALIDATED SPEC BY MORRIS (composition) |
| Fichier Figma | `itgvCulInEnFY6DvgIegvP` |
| Page | `94:49` |
| Frames | `591:425` · `591:543` · `591:661` · `591:721` · `592:435` |
| CKC dédié | **ABSENT** — fallback SFIA v2.6 + contrats transposition/fidélité |

## 1. Dimensions de référence

| Frame | Node | Viewport | Rôle |
| --- | --- | --- | --- |
| Desktop rempli | `591:425` | **1680 × 970** | Portefeuille nominal |
| Desktop scroll | `591:543` | **1680 × 970** | Rail fixe, contenu défilé (−470) |
| Desktop vide | `591:661` | **1680 × 970** | Aucun projet |
| Mobile | `591:721` | **390 × 844** | Nav inférieure fixe |
| Mobile scroll | `592:435` | **390 × 844** | Préparations défilées (−690) |

## 2. Géométries natives (metadata MCP)

| Bloc | Mesures |
| --- | --- |
| Rail personnel | **246 × 970** ; fill `#0C101A` ; marque 36×36 @ (23,27) rayon 9 |
| Nav Portefeuille actif | 212×45 @ (17,141) ; rayon 9 ; fond `#272e49` |
| Nav Nouveau projet | 212×45 @ (17,195) |
| Compte rail | avatar 33 @ (21,872) ; séparation @ y=849 |
| Zone centrale | 1434×970 @ x=246 |
| Entête contenu | h=**66** ; fond `#0f1420` |
| Zone scroll | 1434×904 @ y=66 |
| Stats | 431.33×118 ; gap ~17 ; rayon 12 ; 3 colonnes |
| Cartes projet | 431.33×180 ; rayon 12 |
| Ligne préparation | 1328×66 ; gap 7 ; rayon 10 ; CTA 131×38 |
| Mobile header | 390×65 |
| Mobile bottom nav | 390×72 @ y=772 |
| Mobile stats | 165×118 × 2 colonnes |

## 3. Tokens couleur (constatés)

| Token | Hex |
| --- | --- |
| Fond | `#0a0e17` |
| Rail | `#0c101a` |
| Panneau / carte | `#151c29` |
| Ligne | `#313c51` |
| Accent | `#656fe1` |
| Accent soft | `#afa5ff` |
| Encre | `#f4f6fc` |
| Muet | `#94a2bb` |
| Badge OK | `#a6dfbc` / fond `#1c352d` |

## 4. Comportements contractuels

- Rail desktop : hauteur viewport, **ne défile pas** avec la liste.
- Contenu : scroll vertical indépendant.
- Navigation personnelle unique : **Portefeuille** + **Nouveau projet** (sas D2, pas création implicite).
- Compteur : **Préparations ouvertes** (plus « Reprises récentes »).
- Mobile : nav inférieure Portefeuille / Créer / Compte ; contenu indépendant ; pas de masquage sous la barre.
- Données d’exemple Figma (CampusFlow, dates…) : **non normatives** — runtime = API / fixtures.

## 5. Captures Figma datées (2026-11-16)

Stockage : `.tmp-sfia-review/figma-refs-ux004/`

| Fichier | sha256 |
| --- | --- |
| `591-425-desktop-filled.png` | `71faa0df8fa27b48fa9bc2a913c0ccdf51e6b46aa9b188627b179a81cb7d255d` |
| `591-543-desktop-scrolled.png` | `1086bee76e6ed35f308702644dbafdb2fd186abc80eda84813403ab63d6c4fc4` |
| `591-661-desktop-empty.png` | `f7152765e83b5cd0ec4b933d551ae4f0e305365fd1375e5ea82d6587a93490d3` |
| `591-721-mobile.png` | `452b5e1f4a027cef2e2c16024e64f089b78c752fd0fd3457b6d9da65860621f5` |
| `592-435-mobile-scrolled.png` | `7e455e36e55f8c272e00d4fe5c249264b29018af83e53b32c64621739234e049` |

## 6. Fidélité F2

Rectangles stables (rail width 246, topbar 66, bottom nav 72, prep row ~66) : cible **0 CSS px**, max **2 CSS px**.
Pas de seuil global de différence d’image.
Variantes projet/conversation/inspection : largeurs 246/240/244 **inchangées**.

```

## 5. Blast radius

| Domaine | Impact |
| --- | --- |
| UI shell | Layout viewport-lock + scroll main ; largeurs variantes inchangées 246/246/240/244 |
| Nav personnelle | Suppression redondances Mes projets / Tous les projets / Connexion ; Compte → `/settings/integrations` |
| Portfolio | Composition UX-004 ; Préparations ouvertes ; pas d’id technique affiché |
| API D1/D2 | **inchangées** |
| Session/OAuth | **inchangées** (UX-003 préservé) |
| RECETTE | **inchangée** |
| DB | aucune migration |

## 6. Fichiers créés (contenu complet)

### studio-shell.css

```css
/* UX-004 — personal shell: fixed rail / independent content scroll; mobile bottom nav */

html.studio-shell-lock,
html.studio-shell-lock body {
  height: 100%;
  overflow: hidden;
}

.studio-shell-app {
  display: flex;
  height: 100dvh;
  max-height: 100dvh;
  overflow: hidden;
  min-width: 0;
}

.studio-shell-rail {
  flex-shrink: 0;
  height: 100%;
  max-height: 100dvh;
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
}

.studio-shell-rail-inner {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  gap: inherit;
}

.studio-shell-rail-nav {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 0;
}

.studio-shell-rail-foot {
  margin-top: auto;
  flex-shrink: 0;
  padding-top: 1rem;
  border-top: 1px solid var(--line);
}

.studio-shell-column {
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.studio-shell-topbar {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  height: 66px;
  padding: 0 1.35rem;
  border-bottom: 1px solid var(--line);
  background: #0f1420;
}

.studio-shell-topbar-mobile {
  height: 65px;
  padding: 0 1rem;
}

.studio-shell-main {
  flex: 1 1 auto;
  min-height: 0;
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
  padding: 1.75rem 1.75rem 2rem;
  background: radial-gradient(900px 420px at 12% -8%, #1a2433 0%, transparent 55%);
}

.studio-shell-main-mobile-pad {
  padding-bottom: calc(5.5rem + env(safe-area-inset-bottom, 0px));
}

.studio-shell-mobile-strip {
  display: none;
}

.studio-shell-bottom-nav {
  display: none;
}

@media (max-width: 767px) {
  .studio-shell-app {
    flex-direction: column;
  }

  .studio-shell-main {
    padding: 1rem 1rem 1.25rem;
  }

  .studio-shell-main-mobile-pad {
    padding-bottom: calc(5.5rem + env(safe-area-inset-bottom, 0px));
  }

  .studio-shell-mobile-strip {
    display: flex;
    flex-shrink: 0;
    gap: 0.75rem;
    padding: 0.75rem;
    border-bottom: 1px solid var(--line);
    font-size: 0.875rem;
    overflow-x: auto;
  }

  .studio-shell-bottom-nav {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    flex-shrink: 0;
    height: calc(72px + env(safe-area-inset-bottom, 0px));
    padding: 0.35rem 0.5rem calc(0.35rem + env(safe-area-inset-bottom, 0px));
    border-top: 1px solid var(--line);
    background: #0c101a;
    z-index: 20;
  }

  .studio-shell-bottom-nav a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.15rem;
    color: var(--muted);
    text-decoration: none;
    font-size: 0.72rem;
    border-radius: 8px;
    padding: 0.25rem;
  }

  .studio-shell-bottom-nav a[aria-current="page"],
  .studio-shell-bottom-nav a.is-active {
    color: var(--ink);
    font-weight: 600;
  }

  .studio-shell-bottom-nav .nav-glyph {
    font-size: 1.05rem;
    line-height: 1;
    color: var(--accent-soft);
  }
}

.studio-rail-nav-item {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  border-radius: 9px;
  padding: 0.55rem 0.7rem;
  min-height: 45px;
  color: var(--muted);
  text-decoration: none;
}

.studio-rail-nav-item:hover {
  color: var(--ink);
  text-decoration: none;
}

.studio-rail-nav-item.is-active {
  background: #272e49;
  border: 1px solid var(--line);
  color: var(--ink);
  font-weight: 600;
}

.studio-rail-section {
  font-size: 0.7rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--muted);
  font-weight: 600;
  margin: 0.35rem 0 0.15rem;
}

.studio-account-link {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  color: inherit;
  text-decoration: none;
  border-radius: 8px;
  padding: 0.15rem 0.1rem;
}

.studio-account-link:hover {
  text-decoration: none;
  color: var(--ink);
}

.studio-account-link:focus-visible,
.studio-rail-nav-item:focus-visible,
.studio-shell-bottom-nav a:focus-visible {
  outline: 2px solid var(--accent-soft);
  outline-offset: 2px;
}

```

### Tests e2e créés

- `tests/e2e/ux004-portfolio-shell.spec.ts` (scénarios desktop/mobile/empty/sas/variants/keyboard/network/unauth)
- `tests/e2e/ux004-f2-measure.spec.ts` (rail 246, topbar 66, bottom ~72)

## 7. Fichiers modifiés — extraits

### studio-rail.ts (diff)

```
commit bc8785683c30430aa99bc76e138ba10f49c71c39
Author: Morris Cleland <morris@macbook-air.home>
Date:   Mon Nov 16 08:11:44 2026 +0100

    feat(next): implement ML4D UX-004 portfolio and personal shell

    Freeze fixed personal rail with independent content scroll, simplify navigation to Portefeuille/Nouveau projet, and align portfolio mobile/desktop compositions to validated Figma UX-004 frames without changing D1/D2 contracts.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/src/components/shell/studio-rail.ts b/projects/sfia-studio-next/web/src/components/shell/studio-rail.ts
index 0d290497..dd3f8573 100644
--- a/projects/sfia-studio-next/web/src/components/shell/studio-rail.ts
+++ b/projects/sfia-studio-next/web/src/components/shell/studio-rail.ts
@@ -234,13 +234,8 @@ export function buildShellNav(input: {
   const preparationId = parsePreparationId(path);
   const surface = parseStudioSurface(input.surface) ?? (projectId ? "travail" : null);

+  // UX-004: one personal destination — Portefeuille (no Mes projets / Tous les projets).
   const items: ShellNavItem[] = [
-    {
-      key: "mes-projets",
-      label: "Mes projets",
-      href: "/portfolio",
-      active: path.startsWith("/portfolio") || path === "/",
-    },
     {
       key: "portfolio",
       label: "Portefeuille",
@@ -252,16 +247,11 @@ export function buildShellNav(input: {
   if (!projectId && !preparationId) {
     items.push({
       key: "new-prep",
-      label: "Créer un projet",
+      label: "Nouveau projet",
       href: "/portfolio#nouvelle-preparation",
       active: false,
     });
-    items.push({
-      key: "login",
-      label: "Connexion",
-      href: "/login",
-      active: path.startsWith("/login"),
-    });
+    // Connected personal space: no redundant « Connexion » rail entry.
     return items;
   }


```

### StudioShell.tsx (contenu actuel — 333 lignes)

```tsx
"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { PRODUCT_VERSIONING } from "@/lib/product-version";
import {
  STUDIO_RAIL_VARIANTS,
  buildShellNav,
  noteProjectSurfaceNavIntent,
  parsePreparationId,
  parseProjectId,
  parseStudioSurface,
  railStyle,
  resolveRailVariant,
} from "./studio-rail";
import "./studio-shell.css";

/** Existing real account destination — integrations settings (no invented account hub). */
const ACCOUNT_HREF = "/settings/integrations";

export function StudioShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "/";
  const searchParams = useSearchParams();
  const surface = searchParams.get("surface");
  const variant = resolveRailVariant({ pathname, surface, searchParams });
  const tokens = STUDIO_RAIL_VARIANTS[variant];
  const items = buildShellNav({ pathname, surface });
  const projectId = parseProjectId(pathname);
  const preparationId = parsePreparationId(pathname);
  const inProductSpace = Boolean(projectId || preparationId);
  const personalSpace = !inProductSpace;
  const portfolioActive = pathname.startsWith("/portfolio") || pathname === "/";
  const accountActive = pathname.startsWith("/settings");

  // UX-003: /login is a public entry surface — no private project rail.
  useEffect(() => {
    if (pathname === "/login") {
      document.documentElement.classList.remove("studio-shell-lock");
      return;
    }
    document.documentElement.classList.add("studio-shell-lock");
    return () => {
      document.documentElement.classList.remove("studio-shell-lock");
    };
  }, [pathname]);

  if (pathname === "/login") {
    return (
      <div className="min-h-screen" data-testid="studio-shell-entry" data-shell-mode="entry">
        {children}
      </div>
    );
  }

  return (
    <div
      className="studio-shell-app studio-shell"
      data-rail-variant={variant}
      data-shell-mode={personalSpace ? "personnel" : "produit"}
      data-testid="studio-shell-app"
    >
      <aside
        className="studio-shell-rail hidden md:flex flex-col border-r border-[var(--line)]"
        style={railStyle(tokens)}
        aria-label="Navigation Studio"
        data-testid="studio-rail"
        data-rail-variant={variant}
        data-rail-component-id={tokens.railComponentId}
        data-rail-source-node={tokens.sourceNodeId}
        data-rail-width={tokens.widthPx}
        data-rail-fill={tokens.fill}
      >
        <div className="studio-shell-rail-inner" style={{ gap: tokens.gap }}>
          <div className="flex items-center gap-2 shrink-0">
            <span
              aria-hidden
              className="inline-flex h-9 w-9 items-center justify-center rounded-[9px] text-[22px] font-bold"
              style={{ background: "var(--fig-accent)", color: "white" }}
            >
              S
            </span>
            <div>
              <div className="text-[19px] font-semibold tracking-tight studio-title">SFIA Studio</div>
              <div className="text-[10px] muted">{PRODUCT_VERSIONING.releaseStatus}</div>
            </div>
          </div>

          <div className="shrink-0 border-t border-[var(--line)] my-1" aria-hidden />

          {projectId ? (
            <div className="mt-1 shrink-0">
              <div className="text-[10px] muted uppercase tracking-wide">Espace actif</div>
              <div className="text-sm font-medium mt-1 truncate" title={projectId}>
                Projet
              </div>
            </div>
          ) : (
            <div className="studio-rail-section" aria-hidden>
              Votre espace
            </div>
          )}

          <nav
            className="studio-shell-rail-nav text-sm"
            style={{ gap: tokens.gap }}
            aria-label="Principal"
          >
            {items.map((item) => {
              if (!item.href) {
                return (
                  <span
                    key={item.key}
                    className="muted pl-2"
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
                  className={`studio-rail-nav-item ${item.active ? "is-active" : ""}`}
                  aria-current={item.active ? "page" : undefined}
                  data-testid={`nav-${item.key}`}
                  onClick={() => {
                    const surfaceKey = parseStudioSurface(item.key);
                    if (projectId && surfaceKey) {
                      noteProjectSurfaceNavIntent(projectId, surfaceKey);
                    }
                  }}
                >
                  {item.key === "portfolio" ? (
                    <span aria-hidden className="grid grid-cols-2 gap-[2px] w-3.5 h-3.5 shrink-0">
                      <span className="block rounded-[2px] bg-[var(--accent-soft)]" />
                      <span className="block rounded-[2px] bg-[var(--accent-soft)]" />
                      <span className="block rounded-[2px] bg-[var(--accent-soft)]" />
                      <span className="block rounded-[2px] bg-[var(--accent-soft)]" />
                    </span>
                  ) : null}
                  {item.key === "new-prep" ? (
                    <span aria-hidden className="text-[var(--accent-soft)] text-lg leading-none">
                      +
                    </span>
                  ) : null}
                  <span>{item.label}</span>
                </Link>
              );
            })}

            {personalSpace ? (
              <div className="mt-2">
                <div className="studio-rail-section mb-1">Accès</div>
                <Link
                  href={ACCOUNT_HREF}
                  className="text-sm muted block px-2 py-1"
                  data-testid="nav-integrations"
                >
                  Intégrations
                </Link>
              </div>
            ) : null}

            {projectId ? (
              <div className="mt-2 space-y-1">
                <div className="text-[10px] muted uppercase tracking-wide mb-1">Accès directs</div>
                <Link
                  href={`/projects/${projectId}?surface=document`}
                  className="text-sm muted block px-2 py-1"
                  onClick={() => noteProjectSurfaceNavIntent(projectId, "document")}
                >
                  Documents Nora
                </Link>
                <Link
                  href={`/projects/${projectId}?surface=git`}
                  className="text-sm muted block px-2 py-1"
                  data-testid="nav-sources-git"
                  onClick={() => noteProjectSurfaceNavIntent(projectId, "git")}
                >
                  Sources Git
                </Link>
              </div>
            ) : null}
          </nav>

          <div className="studio-shell-rail-foot" data-testid="studio-rail-account">
            <Link
              href={ACCOUNT_HREF}
              className="studio-account-link"
              data-testid="nav-account"
              aria-label="Compte — Intégrations"
            >
              <span
                aria-hidden
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold shrink-0"
                style={{ background: "rgba(101,111,225,0.25)", color: "var(--fig-accent-soft)" }}
              >
                P
              </span>
              <div className="text-xs min-w-0">
                <div className="font-semibold text-[14px]">Pilote</div>
                <div className="muted">{inProductSpace ? "Connecté" : "Espace personnel"}</div>
              </div>
              <span aria-hidden className="muted ml-auto text-lg leading-none">
                ⌄
              </span>
            </Link>
          </div>
        </div>
      </aside>

      <div className="studio-shell-column">
        {personalSpace ? (
          <header
            className="studio-shell-topbar"
            data-testid="studio-shell-topbar"
          >
            <div className="flex items-center gap-3 min-w-0 md:hidden">
              <span
                aria-hidden
                className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-[8px] text-sm font-bold"
                style={{ background: "var(--fig-accent)", color: "white" }}
              >
                S
              </span>
              <span className="font-semibold truncate">SFIA Studio</span>
            </div>
            <p className="hidden md:block text-sm muted truncate m-0">
              SFIA Studio&nbsp;&nbsp;/&nbsp;&nbsp;Portefeuille
            </p>
            <Link
              href={ACCOUNT_HREF}
              className="studio-account-link shrink-0"
              data-testid="nav-account-top"
              aria-label="Compte — Intégrations"
            >
              <span
                aria-hidden
                className="inline-flex h-[25px] w-[25px] items-center justify-center rounded-full text-[12px] font-bold"
                style={{ background: "rgba(101,111,225,0.25)", color: "var(--fig-accent-soft)" }}
              >
                P
              </span>
              <span className="hidden sm:inline text-[13px] text-[var(--muted)]">Pilote</span>
            </Link>
          </header>
        ) : (
          <nav
            className="studio-shell-mobile-strip md:hidden"
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
                  onClick={() => {
                    const surfaceKey = parseStudioSurface(item.key);
                    if (projectId && surfaceKey) {
                      noteProjectSurfaceNavIntent(projectId, surfaceKey);
                    }
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        )}

        <main
          className={`studio-shell-main ${personalSpace ? "studio-shell-main-mobile-pad" : ""}`}
          data-testid="studio-shell-main"
        >
          {children}
        </main>

        {personalSpace ? (
          <nav
            className="studio-shell-bottom-nav md:hidden"
            aria-label="Navigation personnelle mobile"
            data-testid="studio-mobile-bottom-nav"
          >
            <Link
              href="/portfolio"
              className={portfolioActive ? "is-active" : ""}
              aria-current={portfolioActive ? "page" : undefined}
              data-testid="mobile-nav-portfolio"
            >
              <span className="nav-glyph" aria-hidden>
                ▦
              </span>
              Portefeuille
            </Link>
            <Link
              href="/portfolio#nouvelle-preparation"
              data-testid="mobile-nav-create"
            >
              <span className="nav-glyph" aria-hidden>
                +
              </span>
              Créer
            </Link>
            <Link
              href={ACCOUNT_HREF}
              className={accountActive ? "is-active" : ""}
              aria-current={accountActive ? "page" : undefined}
              data-testid="mobile-nav-account"
            >
              <span className="nav-glyph" aria-hidden>
                ◔
              </span>
              Compte
            </Link>
          </nav>
        ) : null}
      </div>
    </div>
  );
}

```

### portfolio/page.tsx (contenu actuel — 422 lignes)

```tsx
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { preparationDisplayLabel } from "@/domains/identity/portfolio-labels";

type PreparationSummary = {
  id: string;
  previewName: string;
  previewSummary: string;
  createdAt: string;
  status: "OPEN";
};

type PortfolioResponse = {
  session?: { displayName: string; authMode: string };
  portfolio?:
    | {
        kind: "empty";
        openPreparations: number;
        preparations: { items: PreparationSummary[]; nextCursor: string | null };
      }
    | {
        kind: "ready";
        projects: Array<{ id: string; name: string }>;
        openPreparations: number;
        preparations: { items: PreparationSummary[]; nextCursor: string | null };
      }
    | { kind: "unavailable"; reason: string };
  error?: string;
  errorCategory?: string;
};

/**
 * ML4C S01 — portfolio labels must come from owner truth, never list index.
 * Decorative progression (Actif / En réflexion / À reprendre by index) is forbidden.
 */
function statusForOwnedProject(): { label: string; tone: string } {
  return { label: "Accessible", tone: "fig-tag-ok" };
}

function formatPrepCreatedAt(iso: string): string {
  try {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return iso;
    return d.toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

function padCount(n: number): string {
  return String(Math.min(Math.max(n, 0), 99)).padStart(2, "0");
}

export default function PortfolioPage() {
  const router = useRouter();
  const [data, setData] = useState<PortfolioResponse | null>(null);
  const [items, setItems] = useState<PreparationSummary[]>([]);
  const [nextCursor, setNextCursor] = useState<string | null>(null);
  const [error, setError] = useState<string>("");
  const [pageNotice, setPageNotice] = useState<string>("");
  const [creationUncertainty, setCreationUncertainty] = useState<string>("");
  const [loadingMore, setLoadingMore] = useState(false);
  const [creating, setCreating] = useState(false);
  const creatingRef = useRef(false);
  const knownPrepIdsRef = useRef<Set<string>>(new Set());

  const applyPortfolio = useCallback((j: PortfolioResponse, append: boolean) => {
    setData(j);
    const prep = j.portfolio && "preparations" in j.portfolio ? j.portfolio.preparations : null;
    if (prep) {
      setItems((prev) => {
        const next = append ? [...prev, ...prep.items] : prep.items;
        knownPrepIdsRef.current = new Set(next.map((p) => p.id));
        return next;
      });
      setNextCursor(prep.nextCursor);
    } else if (!append) {
      setItems([]);
      setNextCursor(null);
      knownPrepIdsRef.current = new Set();
    }
  }, []);

  const reloadPortfolio = useCallback(async (): Promise<PortfolioResponse | null> => {
    try {
      const r = await fetch("/api/portfolio");
      const j = (await r.json()) as PortfolioResponse;
      if (r.status === 401) {
        router.push("/login");
        return null;
      }
      if (r.status === 400) {
        setError(j.error ?? "INVALID_CURSOR");
        return null;
      }
      if (!r.ok) {
        setError(j.error ?? j.errorCategory ?? `erreur ${r.status}`);
        return null;
      }
      applyPortfolio(j, false);
      setError("");
      return j;
    } catch {
      setError("Réseau indisponible — rechargement du portefeuille impossible.");
      return null;
    }
  }, [router, applyPortfolio]);

  useEffect(() => {
    void reloadPortfolio();
  }, [reloadPortfolio]);

  async function loadMore() {
    if (!nextCursor || loadingMore) return;
    setLoadingMore(true);
    setPageNotice("");
    try {
      const res = await fetch(
        `/api/portfolio?preparationsCursor=${encodeURIComponent(nextCursor)}`,
      );
      const j = (await res.json().catch(() => ({}))) as PortfolioResponse;
      if (res.status === 400) {
        setPageNotice(j.error ?? "INVALID_CURSOR");
        return;
      }
      if (res.status === 401) {
        router.push("/login");
        return;
      }
      if (!res.ok) {
        setPageNotice(j.error ?? j.errorCategory ?? `pagination HTTP ${res.status}`);
        return;
      }
      applyPortfolio(j, true);
    } catch {
      setPageNotice("Réseau indisponible pendant la pagination — réessayez.");
    } finally {
      setLoadingMore(false);
    }
  }

  async function startPreparation() {
    if (creatingRef.current) return;
    creatingRef.current = true;
    setCreating(true);
    setCreationUncertainty("");
    setError("");
    const before = new Set(knownPrepIdsRef.current);
    try {
      const res = await fetch("/api/preparations", { method: "POST" });
      let j: { preparationId?: string; error?: string } = {};
      try {
        j = await res.json();
      } catch {
        j = {};
      }
      if (res.ok && j.preparationId) {
        router.push(`/preparations/${j.preparationId}`);
        return;
      }
      if (!res.ok && res.status !== 0) {
        setCreationUncertainty("");
        setError(j.error ?? `création refusée (HTTP ${res.status})`);
        return;
      }
      const refreshed = await reloadPortfolio();
      const prep =
        refreshed?.portfolio && "preparations" in refreshed.portfolio
          ? refreshed.portfolio.preparations.items
          : [];
      const discovered = prep.find((p) => !before.has(p.id));
      if (discovered) {
        setCreationUncertainty(
          `Création confirmée après relecture · ${discovered.id.slice(0, 8)}… — ouvrez « Reprendre ».`,
        );
        return;
      }
      setCreationUncertainty(
        "Création incertaine (ACK perdu). Aucun nouveau POST automatique. Relisez le portefeuille ou réessayez explicitement.",
      );
    } catch {
      const refreshed = await reloadPortfolio();
      const prep =
        refreshed?.portfolio && "preparations" in refreshed.portfolio
          ? refreshed.portfolio.preparations.items
          : [];
      const discovered = prep.find((p) => !before.has(p.id));
      if (discovered) {
        setCreationUncertainty(
          `Réseau interrompu, mais une préparation nouvelle apparaît · ${discovered.id.slice(0, 8)}… — Reprendre (GET).`,
        );
      } else {
        setCreationUncertainty(
          "Réseau interrompu pendant la création. Résultat non vérifiable — pas de second POST automatique.",
        );
      }
    } finally {
      creatingRef.current = false;
      setCreating(false);
    }
  }

  function resumePreparation(id: string) {
    router.push(`/preparations/${id}?resume=1`);
  }

  if (error && !data) {
    return (
      <div className="fig-page" data-figma-frame="591:425">
        <div className="fig-panel space-y-3" role="alert">
          <div>Portefeuille indisponible: {error}</div>
          <button type="button" className="btn secondary" onClick={() => void reloadPortfolio()}>
            Réessayer (GET)
          </button>
        </div>
      </div>
    );
  }
  if (!data) {
    return (
      <div className="muted" data-testid="portfolio-loading">
        Chargement du portefeuille…
      </div>
    );
  }

  const p = data.portfolio;
  const projects = p && p.kind === "ready" ? p.projects : [];
  const openPreparations = p && "openPreparations" in p ? p.openPreparations : 0;
  const hasProjects = projects.length > 0;
  const frameId = hasProjects ? "591:425" : "591:661";

  return (
    <div className="fig-page portfolio-page" data-figma-frame={frameId} data-testid="portfolio-page">
      <header>
        <p className="fig-kicker">Votre espace</p>
        <h1 className="fig-hero-title">Bonjour, retrouvez vos projets</h1>
        <p className="fig-hero-sub">
          Retrouvez vos projets ou reprenez une préparation avec Nora, sans mélanger leurs contextes.
        </p>
      </header>

      {error ? (
        <p className="text-sm text-[var(--bad)]" role="alert">
          {error}
        </p>
      ) : null}
      {creationUncertainty ? (
        <div className="fig-alert" data-testid="portfolio-creation-uncertainty" role="status">
          {creationUncertainty}
          <div className="mt-2">
            <button type="button" className="btn secondary" onClick={() => void reloadPortfolio()}>
              Relire le portefeuille
            </button>
          </div>
        </div>
      ) : null}

      <section className="fig-stat-grid" aria-label="Synthèse portefeuille">
        <div className="fig-stat">
          <div className="fig-stat-label">Mes projets</div>
          <div className="fig-stat-value">{padCount(projects.length)}</div>
          <div className="fig-stat-hint">Projets accessibles</div>
        </div>
        <div className="fig-stat">
          <div className="fig-stat-label">Préparations ouvertes</div>
          <div className="fig-stat-value">{padCount(openPreparations)}</div>
          <div className="fig-stat-hint">Préparations en cours</div>
        </div>
        <div className="fig-stat fig-stat-access">
          <div className="fig-stat-label">Accès</div>
          <div className="fig-stat-value fig-stat-value-text">Personnel</div>
          <div className="fig-stat-hint">Chaque projet garde son contexte</div>
        </div>
      </section>

      <section className="space-y-4" data-testid="portfolio-projects-section">
        <div className="fig-section-head">
          <h2 className="fig-section-title">Mes projets</h2>
          <button
            id="nouvelle-preparation"
            className="btn"
            disabled={creating}
            data-testid="portfolio-new-prep"
            onClick={() => void startPreparation()}
          >
            {creating ? "Création…" : "Créer un projet"}
          </button>
        </div>

        {!hasProjects ? (
          <div className="portfolio-empty-projects" data-testid="portfolio-empty-projects">
            <div className="portfolio-empty-glyph" aria-hidden>
              +
            </div>
            <div className="min-w-0">
              <h3 className="portfolio-empty-title">Aucun projet pour le moment</h3>
              <p className="portfolio-empty-copy">
                Créez un projet pour démarrer avec Nora. La création reste un acte explicite dans le
                sas de préparation.
              </p>
              <button
                type="button"
                className="btn mt-3"
                disabled={creating}
                onClick={() => void startPreparation()}
              >
                {creating ? "Création…" : "Créer un projet"}
              </button>
            </div>
          </div>
        ) : (
          <ul className="fig-card-grid" data-testid="portfolio-projects">
            {projects.map((proj) => {
              const st = statusForOwnedProject();
              return (
                <li key={proj.id} className="fig-card portfolio-project-card">
                  <div className="fig-card-top">
                    <div className="fig-card-title truncate" title={proj.name}>
                      {proj.name}
                    </div>
                    <span className={`fig-tag ${st.tone}`} data-testid="portfolio-project-status">
                      {st.label}
                    </span>
                  </div>
                  <p className="fig-card-desc text-sm muted">Espace de travail accessible</p>
                  <div className="fig-card-sep" aria-hidden />
                  <p className="fig-card-meta">Accéder à votre espace projet</p>
                  <a
                    className="btn mt-auto inline-flex justify-center"
                    href={`/projects/${proj.id}?surface=travail`}
                    data-testid={`open-project-${proj.id}`}
                  >
                    Ouvrir le projet
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </section>

      {p?.kind === "empty" || p?.kind === "ready" ? (
        <section className="space-y-3" data-testid="portfolio-preparations" data-figma-frame="591:425">
          <div className="fig-section-head">
            <h2 className="fig-section-title">Préparations à reprendre</h2>
            <span className="muted text-sm" data-testid="portfolio-open-count">
              {padCount(openPreparations)} ouverte{openPreparations === 1 ? "" : "s"}
            </span>
          </div>
          {items.length === 0 ? (
            <div className="fig-panel portfolio-empty-preps" data-testid="portfolio-empty-preps">
              <p className="text-sm muted m-0">
                Aucune préparation ouverte. Démarrez une nouvelle préparation pour discuter avant
                création de projet.
              </p>
            </div>
          ) : (
            <ul className="portfolio-prep-list">
              {items.map((prep) => (
                <li key={prep.id} className="portfolio-prep-row">
                  <span className="portfolio-prep-icon" aria-hidden>
                    ○
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="portfolio-prep-title truncate">
                      {preparationDisplayLabel(prep)}
                    </div>
                    <div className="portfolio-prep-meta">
                      Ouverte · Créée le {formatPrepCreatedAt(prep.createdAt)}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn secondary shrink-0 portfolio-prep-resume"
                    data-testid={`resume-prep-${prep.id}`}
                    onClick={() => resumePreparation(prep.id)}
                  >
                    Reprendre
                  </button>
                </li>
              ))}
            </ul>
          )}
          {pageNotice ? <p className="text-sm muted">{pageNotice}</p> : null}
          {nextCursor ? (
            <button
              type="button"
              className="btn secondary"
              disabled={loadingMore}
              data-testid="portfolio-load-more"
              onClick={() => void loadMore()}
            >
              {loadingMore ? "Chargement…" : "Charger plus"}
            </button>
          ) : null}
        </section>
      ) : null}

      {p?.kind === "unavailable" ? (
        <div className="fig-panel" role="alert">
          <div className="font-medium">Portefeuille indisponible</div>
          <p className="muted text-sm mt-1">{p.reason}</p>
        </div>
      ) : null}

      <footer className="fig-banner portfolio-continuity">
        <h3>Continuité personnelle</h3>
        <p>
          Les conversations et les décisions restent propres à chaque projet. Un dépôt Git partagé ne
          fusionne pas les contextes.
        </p>
      </footer>
    </div>
  );
}

```

## 8. Tests exécutés

| Commande | Résultat |
| --- | --- |
| `vitest` studio-rail + portfolio-cursor + unified-entry | **20 PASS** |
| `tsc --noEmit` | **PASS** |
| `next lint` | PASS (warnings préexistants hors périmètre) |
| `next build` | **PASS** · BUILD `8vsahDFPlzPO5IVsE0mX6` |
| Playwright UX-004 + UX-003 | **19 PASS** (lane E2E `:3101`) |
| F2 | rail width Δ≤2 ; topbar ~66 ; bottom ≥70 |

Preuves BROWSER : `.tmp-sfia-review/browser-ux004/` + `tests/e2e/artifacts/ux004-*.png`

## 9. Fake/Real

| Affirmation | Qualif |
| --- | --- |
| Composition UI / scroll rail | **BROWSER** (Playwright + captures DEV `:3102`) |
| Fixtures empty/mixed | **FAKE** route fulfill (états UI) |
| Portfolio API réelle après login DEV | **REAL** lane DEV/E2E (Pilote A) |
| OAuth LIVE | **NOT CLAIMED** |
| RECETTE UX-004 | **NOT SERVED** (interdit ce cycle) |

## 10. Environnement

| Lane | État |
| --- | --- |
| DEV | `http://127.0.0.1:3102` — port **3102 explicite** car `:3100` occupé par worktree `next-semantic-intent-20261112` (pas de kill) |
| E2E | `:3101` isolé |
| RECETTE | `http://127.0.0.1:3200` — SHA `a77a3a2…` / build `vYeNRRzvLN03N73wmcKkR` — **inchangée** ; LaunchAgents non touchés |
| STABLE | NOT AVAILABLE |

## 11. Versioning

- Politique v1.0 · candidate **MINOR** UX · **NO RELEASE**
- Version produit officielle : **NOT AVAILABLE**
- STABLE : **NOT AVAILABLE**

## 12. Réserves

1. DEV sur `:3102` (écart ENV-01 documenté — `:3100` déjà pris).
2. Compte = destination réelle Intégrations uniquement (pas de hub compte inventé).
3. RECETTE non mise à jour — GO Morris distinct requis pour servir `bc8785683c30430aa99bc76e138ba10f49c71c39`.
4. F2 image globale non utilisée ; géométries stables seulement.
5. CKC UX-004 absent.

## 13. Verdict A–G

### A. GIT
Branche `feat/next-ml4d-ux004-portfolio-20261116` · SHA `bc8785683c30430aa99bc76e138ba10f49c71c39` · base UX-003 préservée · **pas de push projet**

### B. DESIGN
5 frames · contrat L1/L2 · captures Figma + runtime · F2 rail/topbar OK

### C. FONCTIONNEL
Portefeuille / reprise GET / création sas D2 / nav simplifiée / UX-003 login inchangé

### D. QA
Commandes ci-dessus · PASS · BROWSER+FAKE+REAL bornés

### E. ENVIRONNEMENT
DEV `:3102` · RECETTE inchangée

### F. Handoff
**HANDOFF UPDATED — REMOTE VERIFIED**

### G. Gates
RECETTE NON · push/PR/merge/STABLE/ADOPTED/ML4D clos/Gate C : **NON / OPEN**

## 14. Accès DEV Morris (hors RECETTE)

1. URL DEV : **http://127.0.0.1:3102/portfolio** (après login)
2. SHA : `bc8785683c30430aa99bc76e138ba10f49c71c39`
3. Build : `8vsahDFPlzPO5IVsE0mX6`
4. Login UX-003 : http://127.0.0.1:3102/login
5. RECETTE reste UX-003 : http://127.0.0.1:3200/login

## 13b. Publication handoff

Statut : **REMOTE VERIFIED** — tip `808d22697d4ce64db17e1161e35f9716bd6d9515` · blob `62d7daa8bcd87e027a188a3d21ab6d1f16baaac9`
