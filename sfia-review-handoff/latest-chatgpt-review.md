# SFIA Review Pack — FULL — UX-004 CORRECTIF (Nouveau projet + fil d'Ariane)

- Date/heure: 2026-11-16T08:56:45+01:00
- Produit: projects/sfia-studio-next/
- Macro-lot: ML4D
- Sous-ensemble: UX-004
- Cycle SFIA v2.6: 8 — Delivery projet, correctif borné
- Profil: Standard
- Typologie: EVOL / correctif compatible
- Review Pack: FULL, mono-cycle
- Review Handoff: required / publish-in-cycle
- Intégrateur: Cursor
- Autorité produit et Git: Morris
- GO Morris: **OUI** pour ces deux corrections techniques locales (mandat 16 nov 2026)

## Verdict Cursor

**READY FOR CHATGPT REVIEW — UX-004 CORRECTIF**

### Instruction ChatGPT obligatoire

Avant de conclure la revue, lire depuis Git:

- branche: `sfia/review-handoff`
- fichier: `sfia-review-handoff/latest-chatgpt-review.md`

Vérifier le commit, les modifications réelles, les tests, les preuves, la complétude du rapport, la publication et sa relecture distante.

---

## 1. Git Truth Check (local)

| Check | Résultat |
| --- | --- |
| Dépôt worktree | `/Users/morris/Projects/sfia-workspace-next-ml4d-ux003-entry-20261116` |
| Origin | `mcleland147/sfia-workspace` (remote `origin`) |
| Branche | `feat/next-ml4d-ux004-portfolio-20261116` |
| HEAD avant correctif | `bc8785683c30430aa99bc76e138ba10f49c71c39` |
| HEAD après commit | `fb0ac5c865f1d562a3778e207e5e8729165c5c4d` |
| origin/main | `997d4c4e8204993de7107552898c8cc08cd3b0ed` (= baseline ChatGPT `997d4c4e…`) |
| Ascendance UX-003 `a77a3a2b…` | OUI |
| Ascendance tip UX-004 `bc878568…` | OUI (parent du correctif) |
| Base: ne pas repartir de main seul | OK — branche UX-004 réutilisée |
| UX-003 non perdu | OK |
| `git status --short` post-commit | ``` M .tmp-sfia-review/chatgpt-review.md``` |
| Worktrees RECETTE | `…-ux004-recette-build-bc8785683c30` détaché `@bc878568` — **non modifié** |
| DEV | `127.0.0.1:3102` HTTP 200 (redémarré après build) |
| RECETTE | `127.0.0.1:3200` HTTP 200 — BUILD `3g7UH7AXjSWhxrT20D3-w` — SHA `bc878568` **inchangé** |

STOP non déclenché: base compatible.

---

## 2. Sources lues / refs applicables

CKC UX-004: ABSENT → fallback SFIA v2.6 déclaré (routing §4.3.0b, template §2.0.H, Review Pack §7, Handoff §7.10–7.11).

Sources Next consultées (autorité produit / ENV / versioning):

- governance/SEF.md, roadmap.md, product-naming-conventions.md
- governance/environnements-recette-et-promotions.md (ENV-01 v0.1 VALIDATED / ON MAIN ; blob déclaré 14b61f0d…)
- governance/product-versioning.md (v1.0 VALIDATED / ON MAIN ; blob déclaré 8bc93e0f…)
- governance/decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md
- conception-fonctionnelle/acces-et-portefeuille.md
- conception-fonctionnelle/creation-de-projet-et-continuite-du-sas.md
- architecture-technique/cadrage-r4.md ; cadrage/vision-produit.md ; cadrage/vision-cible/README.md
- Contrat visuel existant: `projects/sfia-studio-next/ux-ui/contrat-visuel-ux004-portefeuille-20261116.md` — **non concurrencé**
- Frames Figma références conservées (pas de modification): 591:425, 591:543, 591:661, 591:721, 592:435

Sources construction prioritaires touchées: studio-rail.ts, StudioShell.tsx, portfolio/page.tsx, open-preparation.ts, tests unit/e2e.

---

## 3. Causes des deux défauts

### A — Nouveau projet
Dans le candidat UX-004 `bc878568`, `buildShellNav` exposait `new-prep` avec `href: "/portfolio#nouvelle-preparation"`. Clic rail → navigation GET portefeuille + ancre focus bouton — **pas** de POST D2. Contredit le parcours attendu (engager préparation → sas Nora).

### B — Fil d'Ariane
`StudioShell` affichait un libellé statique « SFIA Studio / Portefeuille » sur l'espace personnel, y compris `/settings/integrations`.

---

## 4. Choix technique et justification

1. Extraire le comportement D2 client déjà présent dans `portfolio/page.tsx` vers **`openPreparation()`** (`web/src/lib/open-preparation.ts`) — une seule logique POST/ACK/uncertainty.
2. `ShellNavItem.action = "open-preparation"` + `href: null` pour le rail ; bouton mobile « Créer » appelle le même handler shell.
3. Portefeuille `startPreparation()` délègue à `openPreparation`.
4. `resolvePersonalBreadcrumb(pathname)` — résolution simple sur routes produit connues ; pas de routeur concurrent.
5. CSS: styles bouton rail/bottom-nav sans changer géométrie validée.

Pas de nouvel API, pas de second moteur de navigation, pas de retry POST automatique.

---

## 5. Analyse des impacts (blast radius)

| Zone | Impact |
| --- | --- |
| Navigation rail | `new-prep` devient bouton action |
| Création préparation | Canonique partagée |
| D1 identité/portefeuille | Lecture portfolio inchangée ; CTA inchangé fonctionnellement |
| D2 sas | Conservé (POST unique, id réel, navigation sas) |
| Erreurs / idempotence | Refs concurrentes ; uncertain sans retry |
| Shell partagé / header | Breadcrumb dynamique uniquement |
| Mobile | Smoke: bouton Créer → même action |
| Session / droits / sécurité | 401 → /login ; pas de contournement |
| Tests / docs | unit + e2e + as-built + delivery-history |
| Non modifié | OAuth UX-003, Nora, create-project définitif, DB, API, permissions, rails projet, Git, ML5, Figma, RECETTE |

Versioning: PATCH candidate ; official version NOT AVAILABLE ; STABLE NOT AVAILABLE ; NO RELEASE.

---

## 6. Fichiers créés (contenu complet)

### `projects/sfia-studio-next/web/src/lib/open-preparation.ts`

```
/**
 * Canonical D2 open-preparation client action (UX-004).
 * One POST /api/preparations; no automatic second POST after uncertain ACK.
 * Does not create a durable project.
 */

export type OpenPreparationResult =
  | { kind: "opened"; preparationId: string }
  | { kind: "refused"; message: string; httpStatus?: number }
  | { kind: "unauthorized" }
  | { kind: "uncertain"; message: string; discoveredId?: string };

type PrepItem = { id: string };

async function readPortfolioPrepItems(): Promise<PrepItem[]> {
  try {
    const r = await fetch("/api/portfolio");
    if (!r.ok) return [];
    const j = (await r.json()) as {
      portfolio?: { preparations?: { items?: PrepItem[] } };
    };
    return j.portfolio?.preparations?.items ?? [];
  } catch {
    return [];
  }
}

/**
 * Start a new OPEN preparation and return its real id, or a controlled uncertainty.
 * Callers must guard against concurrent invocations.
 */
export async function openPreparation(input?: {
  knownPreparationIds?: Iterable<string>;
}): Promise<OpenPreparationResult> {
  const before = new Set(input?.knownPreparationIds ?? []);
  try {
    const res = await fetch("/api/preparations", { method: "POST" });
    let j: { preparationId?: string; error?: string } = {};
    try {
      j = await res.json();
    } catch {
      j = {};
    }

    if (res.status === 401) {
      return { kind: "unauthorized" };
    }

    if (res.ok && j.preparationId) {
      return { kind: "opened", preparationId: j.preparationId };
    }

    if (!res.ok) {
      return {
        kind: "refused",
        message: j.error ?? `création refusée (HTTP ${res.status})`,
        httpStatus: res.status,
      };
    }

    // ACK uncertainty: re-read portfolio, never auto-retry POST.
    const items = await readPortfolioPrepItems();
    const discovered = items.find((p) => !before.has(p.id));
    if (discovered) {
      return {
        kind: "uncertain",
        discoveredId: discovered.id,
        message: `Création confirmée après relecture · ${discovered.id.slice(0, 8)}… — ouvrez « Reprendre ».`,
      };
    }
    return {
      kind: "uncertain",
      message:
        "Création incertaine (ACK perdu). Aucun nouveau POST automatique. Relisez le portefeuille ou réessayez explicitement.",
    };
  } catch {
    const items = await readPortfolioPrepItems();
    const discovered = items.find((p) => !before.has(p.id));
    if (discovered) {
      return {
        kind: "uncertain",
        discoveredId: discovered.id,
        message: `Réseau interrompu, mais une préparation nouvelle apparaît · ${discovered.id.slice(0, 8)}… — Reprendre (GET).`,
      };
    }
    return {
      kind: "uncertain",
      message:
        "Réseau interrompu pendant la création. Résultat non vérifiable — pas de second POST automatique.",
    };
  }
}
```
### `projects/sfia-studio-next/web/tests/unit/open-preparation.test.ts`

```
import { beforeEach, describe, expect, it, vi } from "vitest";
import { openPreparation } from "@/lib/open-preparation";

describe("openPreparation (D2 client)", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("returns opened with preparationId on successful POST", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () =>
        new Response(JSON.stringify({ preparationId: "prep-1" }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }),
      ),
    );
    const r = await openPreparation();
    expect(r).toEqual({ kind: "opened", preparationId: "prep-1" });
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith("/api/preparations", { method: "POST" });
  });

  it("returns refused without second POST", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () =>
        new Response(JSON.stringify({ error: "NOPE" }), {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }),
      ),
    );
    const r = await openPreparation();
    expect(r.kind).toBe("refused");
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("on uncertain empty body, reloads portfolio once and never retries POST", async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(
        new Response("{}", { status: 200, headers: { "Content-Type": "application/json" } }),
      )
      .mockResolvedValueOnce(
        new Response(
          JSON.stringify({
            portfolio: {
              preparations: { items: [{ id: "prep-new" }], nextCursor: null },
            },
          }),
          { status: 200, headers: { "Content-Type": "application/json" } },
        ),
      );
    vi.stubGlobal("fetch", fetchMock);
    const r = await openPreparation({ knownPreparationIds: [] });
    expect(r.kind).toBe("uncertain");
    if (r.kind === "uncertain") expect(r.discoveredId).toBe("prep-new");
    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(fetchMock.mock.calls.filter((c) => c[1]?.method === "POST")).toHaveLength(1);
  });
});
```
### `projects/sfia-studio-next/construction/as-built-ux004-open-preparation-breadcrumb-20261116.md`

```
# As-built — UX-004 correctif open-preparation + breadcrumb (2026-11-16)

## Scope

Borned shell/portfolio correctif on ML4D UX-004. No Figma change. No API/schema change. No RECETTE redeploy in this cycle.

## Correction A — Nouveau projet → D2

Canonical client action: `web/src/lib/open-preparation.ts` → `openPreparation()`.

- One voluntary `POST /api/preparations`.
- Success → navigate to `/preparations/{preparationId}` (real id only).
- Refused / unauthorized / uncertain ACK → user-visible state; **no automatic second POST**.
- Callers guard concurrency (`openingRef` / `creatingRef`).

Entry points sharing this action:

| UI | Location |
| --- | --- |
| Rail « Nouveau projet » | `StudioShell` via `ShellNavItem.action = "open-preparation"` |
| Mobile « Créer » | bottom nav button |
| Portefeuille « Créer un projet » | `portfolio/page.tsx` `startPreparation()` |

Removed: hash navigation `/portfolio#nouvelle-preparation` as the rail/mobile create path.

## Correction B — Fil d'Ariane

`resolvePersonalBreadcrumb(pathname)` in `studio-rail.ts`:

| Route | Label |
| --- | --- |
| `/portfolio` | Portefeuille |
| `/settings/integrations` | Intégrations |
| `/settings` (other) | Paramètres |
| unknown | `null` → shell shows `SFIA Studio` only (never invent / never keep Portefeuille by default) |

## Non-goals preserved

D1 identity, durable project creation, Nora conversation, OAuth UX-003, rails projet/conversation/inspection, DB, permissions, ML5.
```
## 7. Fichiers modifiés — diff exploitable (`bc878568..HEAD`)

```diff
diff --git a/projects/sfia-studio-next/construction/as-built-ux004-open-preparation-breadcrumb-20261116.md b/projects/sfia-studio-next/construction/as-built-ux004-open-preparation-breadcrumb-20261116.md
new file mode 100644
index 00000000..6e18b3fa
--- /dev/null
+++ b/projects/sfia-studio-next/construction/as-built-ux004-open-preparation-breadcrumb-20261116.md
@@ -0,0 +1,39 @@
+# As-built — UX-004 correctif open-preparation + breadcrumb (2026-11-16)
+
+## Scope
+
+Borned shell/portfolio correctif on ML4D UX-004. No Figma change. No API/schema change. No RECETTE redeploy in this cycle.
+
+## Correction A — Nouveau projet → D2
+
+Canonical client action: `web/src/lib/open-preparation.ts` → `openPreparation()`.
+
+- One voluntary `POST /api/preparations`.
+- Success → navigate to `/preparations/{preparationId}` (real id only).
+- Refused / unauthorized / uncertain ACK → user-visible state; **no automatic second POST**.
+- Callers guard concurrency (`openingRef` / `creatingRef`).
+
+Entry points sharing this action:
+
+| UI | Location |
+| --- | --- |
+| Rail « Nouveau projet » | `StudioShell` via `ShellNavItem.action = "open-preparation"` |
+| Mobile « Créer » | bottom nav button |
+| Portefeuille « Créer un projet » | `portfolio/page.tsx` `startPreparation()` |
+
+Removed: hash navigation `/portfolio#nouvelle-preparation` as the rail/mobile create path.
+
+## Correction B — Fil d'Ariane
+
+`resolvePersonalBreadcrumb(pathname)` in `studio-rail.ts`:
+
+| Route | Label |
+| --- | --- |
+| `/portfolio` | Portefeuille |
+| `/settings/integrations` | Intégrations |
+| `/settings` (other) | Paramètres |
+| unknown | `null` → shell shows `SFIA Studio` only (never invent / never keep Portefeuille by default) |
+
+## Non-goals preserved
+
+D1 identity, durable project creation, Nora conversation, OAuth UX-003, rails projet/conversation/inspection, DB, permissions, ML5.
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 3d5f5755..75c3aed6 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -25,6 +25,26 @@ Cette synchronisation ne modifie ni code ni RECETTE/STABLE, ne clôt pas les ré

 ---

+## delivery_id: DELIV-2026-11-16-ML4D-UX004-NAV-BREADCRUMB-CORRECTIF
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-16 ~09:00 CET (Europe/Paris) |
+| Macro-lot | ML4D — UX-004 correctif borné navigation Nouveau projet + fil d'Ariane |
+| Type | EVOL / PATCH candidate compatible · **NO RELEASE** |
+| Branch locale | `feat/next-ml4d-ux004-portfolio-20261116` |
+| Parent tip | `bc8785683c30430aa99bc76e138ba10f49c71c39` |
+| Base UX-003 | `a77a3a2bf7b942038d771fdcdd2e7a6410330784` (préservé) |
+| Base main | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
+| Cause | Rail « Nouveau projet » → `/portfolio#nouvelle-preparation` (détour portefeuille) ; fil d'Ariane figé « Portefeuille » sur Intégrations |
+| Changes | Action partagée `openPreparation` (POST D2 unique, ACK sans retry) ; rail/mobile/portefeuille même parcours ; breadcrumb route-aware (`Portefeuille` / `Intégrations`) ; tests unit + Playwright |
+| Schema / API | unchanged |
+| Lanes | DEV `:3102` ; E2E `:3101` ; RECETTE `:3200` **inchangée** (`bc878568` / BUILD `3g7UH7AXjSWhxrT20D3-w`) |
+| Validations | tsc PASS ; lint warnings préexistants ; build PASS ; vitest open-preparation+studio-rail 16 PASS ; Playwright UX-004+UX-003 18 PASS (BROWSER FAKE) |
+| Push Product | **AUCUN** |
+| RECETTE | **NON MODIFIÉE** — nouveau SHA non servi ; GO distinct requis |
+| Verdict candidat | `READY FOR CHATGPT REVIEW — UX-004 CORRECTIF` |
+
 ## delivery_id: DELIV-2026-11-16-ML4D-UX004-PORTFOLIO-SHELL

 | Field | Value |
diff --git a/projects/sfia-studio-next/web/src/app/portfolio/page.tsx b/projects/sfia-studio-next/web/src/app/portfolio/page.tsx
index a3bf1c19..b4477f76 100644
--- a/projects/sfia-studio-next/web/src/app/portfolio/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/portfolio/page.tsx
@@ -3,6 +3,7 @@
 import { useCallback, useEffect, useRef, useState } from "react";
 import { useRouter } from "next/navigation";
 import { preparationDisplayLabel } from "@/domains/identity/portfolio-labels";
+import { openPreparation } from "@/lib/open-preparation";

 type PreparationSummary = {
   id: string;
@@ -153,53 +154,23 @@ export default function PortfolioPage() {
     setError("");
     const before = new Set(knownPrepIdsRef.current);
     try {
-      const res = await fetch("/api/preparations", { method: "POST" });
-      let j: { preparationId?: string; error?: string } = {};
-      try {
-        j = await res.json();
-      } catch {
-        j = {};
-      }
-      if (res.ok && j.preparationId) {
-        router.push(`/preparations/${j.preparationId}`);
+      const result = await openPreparation({ knownPreparationIds: before });
+      if (result.kind === "opened") {
+        router.push(`/preparations/${result.preparationId}`);
         return;
       }
-      if (!res.ok && res.status !== 0) {
-        setCreationUncertainty("");
-        setError(j.error ?? `création refusée (HTTP ${res.status})`);
+      if (result.kind === "unauthorized") {
+        router.push("/login");
         return;
       }
-      const refreshed = await reloadPortfolio();
-      const prep =
-        refreshed?.portfolio && "preparations" in refreshed.portfolio
-          ? refreshed.portfolio.preparations.items
-          : [];
-      const discovered = prep.find((p) => !before.has(p.id));
-      if (discovered) {
-        setCreationUncertainty(
-          `Création confirmée après relecture · ${discovered.id.slice(0, 8)}… — ouvrez « Reprendre ».`,
-        );
+      if (result.kind === "refused") {
+        setCreationUncertainty("");
+        setError(result.message);
         return;
       }
-      setCreationUncertainty(
-        "Création incertaine (ACK perdu). Aucun nouveau POST automatique. Relisez le portefeuille ou réessayez explicitement.",
-      );
-    } catch {
-      const refreshed = await reloadPortfolio();
-      const prep =
-        refreshed?.portfolio && "preparations" in refreshed.portfolio
-          ? refreshed.portfolio.preparations.items
-          : [];
-      const discovered = prep.find((p) => !before.has(p.id));
-      if (discovered) {
-        setCreationUncertainty(
-          `Réseau interrompu, mais une préparation nouvelle apparaît · ${discovered.id.slice(0, 8)}… — Reprendre (GET).`,
-        );
-      } else {
-        setCreationUncertainty(
-          "Réseau interrompu pendant la création. Résultat non vérifiable — pas de second POST automatique.",
-        );
-      }
+      // Uncertain ACK — refresh known ids; never auto-retry POST.
+      await reloadPortfolio();
+      setCreationUncertainty(result.message);
     } finally {
       creatingRef.current = false;
       setCreating(false);
diff --git a/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx b/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
index 5c364d09..e6d9bedb 100644
--- a/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
+++ b/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
@@ -1,8 +1,9 @@
 "use client";

 import Link from "next/link";
-import { useEffect } from "react";
-import { usePathname, useSearchParams } from "next/navigation";
+import { useEffect, useRef, useState } from "react";
+import { usePathname, useRouter, useSearchParams } from "next/navigation";
+import { openPreparation } from "@/lib/open-preparation";
 import { PRODUCT_VERSIONING } from "@/lib/product-version";
 import {
   STUDIO_RAIL_VARIANTS,
@@ -12,6 +13,7 @@ import {
   parseProjectId,
   parseStudioSurface,
   railStyle,
+  resolvePersonalBreadcrumb,
   resolveRailVariant,
 } from "./studio-rail";
 import "./studio-shell.css";
@@ -21,6 +23,7 @@ const ACCOUNT_HREF = "/settings/integrations";

 export function StudioShell({ children }: { children: React.ReactNode }) {
   const pathname = usePathname() || "/";
+  const router = useRouter();
   const searchParams = useSearchParams();
   const surface = searchParams.get("surface");
   const variant = resolveRailVariant({ pathname, surface, searchParams });
@@ -32,6 +35,36 @@ export function StudioShell({ children }: { children: React.ReactNode }) {
   const personalSpace = !inProductSpace;
   const portfolioActive = pathname.startsWith("/portfolio") || pathname === "/";
   const accountActive = pathname.startsWith("/settings");
+  const breadcrumb = resolvePersonalBreadcrumb(pathname);
+  const [openingPrep, setOpeningPrep] = useState(false);
+  const [prepNotice, setPrepNotice] = useState("");
+  const openingRef = useRef(false);
+
+  async function handleOpenPreparation() {
+    if (openingRef.current) return;
+    openingRef.current = true;
+    setOpeningPrep(true);
+    setPrepNotice("");
+    try {
+      const result = await openPreparation();
+      if (result.kind === "opened") {
+        router.push(`/preparations/${result.preparationId}`);
+        return;
+      }
+      if (result.kind === "unauthorized") {
+        router.push("/login");
+        return;
+      }
+      if (result.kind === "refused") {
+        setPrepNotice(result.message);
+        return;
+      }
+      setPrepNotice(result.message);
+    } finally {
+      openingRef.current = false;
+      setOpeningPrep(false);
+    }
+  }

   // UX-003: /login is a public entry surface — no private project rail.
   useEffect(() => {
@@ -107,6 +140,23 @@ export function StudioShell({ children }: { children: React.ReactNode }) {
             aria-label="Principal"
           >
             {items.map((item) => {
+              if (item.action === "open-preparation") {
+                return (
+                  <button
+                    key={item.key}
+                    type="button"
+                    className="studio-rail-nav-item text-left w-full"
+                    data-testid={`nav-${item.key}`}
+                    disabled={openingPrep}
+                    onClick={() => void handleOpenPreparation()}
+                  >
+                    <span aria-hidden className="text-[var(--accent-soft)] text-lg leading-none">
+                      +
+                    </span>
+                    <span>{openingPrep ? "Ouverture…" : item.label}</span>
+                  </button>
+                );
+              }
               if (!item.href) {
                 return (
                   <span
@@ -141,15 +191,15 @@ export function StudioShell({ children }: { children: React.ReactNode }) {
                       <span className="block rounded-[2px] bg-[var(--accent-soft)]" />
                     </span>
                   ) : null}
-                  {item.key === "new-prep" ? (
-                    <span aria-hidden className="text-[var(--accent-soft)] text-lg leading-none">
-                      +
-                    </span>
-                  ) : null}
                   <span>{item.label}</span>
                 </Link>
               );
             })}
+            {prepNotice ? (
+              <p className="text-xs text-[var(--bad)] px-2" role="status" data-testid="shell-prep-notice">
+                {prepNotice}
+              </p>
+            ) : null}

             {personalSpace ? (
               <div className="mt-2">
@@ -228,8 +278,13 @@ export function StudioShell({ children }: { children: React.ReactNode }) {
               </span>
               <span className="font-semibold truncate">SFIA Studio</span>
             </div>
-            <p className="hidden md:block text-sm muted truncate m-0">
-              SFIA Studio&nbsp;&nbsp;/&nbsp;&nbsp;Portefeuille
+            <p
+              className="hidden md:block text-sm muted truncate m-0"
+              data-testid="studio-shell-breadcrumb"
+            >
+              {breadcrumb
+                ? <>SFIA Studio&nbsp;&nbsp;/&nbsp;&nbsp;{breadcrumb}</>
+                : <>SFIA Studio</>}
             </p>
             <Link
               href={ACCOUNT_HREF}
@@ -305,15 +360,18 @@ export function StudioShell({ children }: { children: React.ReactNode }) {
               </span>
               Portefeuille
             </Link>
-            <Link
-              href="/portfolio#nouvelle-preparation"
+            <button
+              type="button"
+              className="studio-shell-bottom-nav-btn"
               data-testid="mobile-nav-create"
+              disabled={openingPrep}
+              onClick={() => void handleOpenPreparation()}
             >
               <span className="nav-glyph" aria-hidden>
                 +
               </span>
-              Créer
-            </Link>
+              {openingPrep ? "…" : "Créer"}
+            </button>
             <Link
               href={ACCOUNT_HREF}
               className={accountActive ? "is-active" : ""}
diff --git a/projects/sfia-studio-next/web/src/components/shell/studio-rail.ts b/projects/sfia-studio-next/web/src/components/shell/studio-rail.ts
index dd3f8573..0f7e16ef 100644
--- a/projects/sfia-studio-next/web/src/components/shell/studio-rail.ts
+++ b/projects/sfia-studio-next/web/src/components/shell/studio-rail.ts
@@ -216,6 +216,8 @@ export function resolveRailVariant(input: {
   return "personnel";
 }

+export type ShellNavAction = "open-preparation";
+
 export type ShellNavItem = {
   key: string;
   label: string;
@@ -223,8 +225,22 @@ export type ShellNavItem = {
   active: boolean;
   /** Inactive without context — never a fake # link. */
   disabledReason?: string;
+  /** Explicit UI action (not a GET navigation). */
+  action?: ShellNavAction;
 };

+/**
+ * Personal-space breadcrumb second segment — known routes only.
+ * Never invent a label; never keep « Portefeuille » on another route.
+ */
+export function resolvePersonalBreadcrumb(pathname: string): string | null {
+  const path = pathname || "/";
+  if (path.startsWith("/portfolio") || path === "/") return "Portefeuille";
+  if (path.startsWith("/settings/integrations")) return "Intégrations";
+  if (path.startsWith("/settings")) return "Paramètres";
+  return null;
+}
+
 export function buildShellNav(input: {
   pathname: string;
   surface?: string | null;
@@ -248,8 +264,9 @@ export function buildShellNav(input: {
     items.push({
       key: "new-prep",
       label: "Nouveau projet",
-      href: "/portfolio#nouvelle-preparation",
+      href: null,
       active: false,
+      action: "open-preparation",
     });
     // Connected personal space: no redundant « Connexion » rail entry.
     return items;
diff --git a/projects/sfia-studio-next/web/src/components/shell/studio-shell.css b/projects/sfia-studio-next/web/src/components/shell/studio-shell.css
index 3fc4c75f..11e86ba5 100644
--- a/projects/sfia-studio-next/web/src/components/shell/studio-shell.css
+++ b/projects/sfia-studio-next/web/src/components/shell/studio-shell.css
@@ -126,7 +126,8 @@ html.studio-shell-lock body {
     z-index: 20;
   }

-  .studio-shell-bottom-nav a {
+  .studio-shell-bottom-nav a,
+  .studio-shell-bottom-nav-btn {
     display: flex;
     flex-direction: column;
     align-items: center;
@@ -137,6 +138,10 @@ html.studio-shell-lock body {
     font-size: 0.72rem;
     border-radius: 8px;
     padding: 0.25rem;
+    background: transparent;
+    border: 0;
+    cursor: pointer;
+    font-family: inherit;
   }

   .studio-shell-bottom-nav a[aria-current="page"],
@@ -145,6 +150,11 @@ html.studio-shell-lock body {
     font-weight: 600;
   }

+  .studio-shell-bottom-nav-btn:disabled {
+    opacity: 0.55;
+    cursor: not-allowed;
+  }
+
   .studio-shell-bottom-nav .nav-glyph {
     font-size: 1.05rem;
     line-height: 1;
@@ -201,7 +211,20 @@ html.studio-shell-lock body {

 .studio-account-link:focus-visible,
 .studio-rail-nav-item:focus-visible,
-.studio-shell-bottom-nav a:focus-visible {
+.studio-shell-bottom-nav a:focus-visible,
+.studio-shell-bottom-nav-btn:focus-visible {
   outline: 2px solid var(--accent-soft);
   outline-offset: 2px;
 }
+
+button.studio-rail-nav-item {
+  background: transparent;
+  border: 0;
+  cursor: pointer;
+  font: inherit;
+}
+
+button.studio-rail-nav-item:disabled {
+  opacity: 0.55;
+  cursor: not-allowed;
+}
diff --git a/projects/sfia-studio-next/web/src/lib/open-preparation.ts b/projects/sfia-studio-next/web/src/lib/open-preparation.ts
new file mode 100644
index 00000000..6af70b0d
--- /dev/null
+++ b/projects/sfia-studio-next/web/src/lib/open-preparation.ts
@@ -0,0 +1,92 @@
+/**
+ * Canonical D2 open-preparation client action (UX-004).
+ * One POST /api/preparations; no automatic second POST after uncertain ACK.
+ * Does not create a durable project.
+ */
+
+export type OpenPreparationResult =
+  | { kind: "opened"; preparationId: string }
+  | { kind: "refused"; message: string; httpStatus?: number }
+  | { kind: "unauthorized" }
+  | { kind: "uncertain"; message: string; discoveredId?: string };
+
+type PrepItem = { id: string };
+
+async function readPortfolioPrepItems(): Promise<PrepItem[]> {
+  try {
+    const r = await fetch("/api/portfolio");
+    if (!r.ok) return [];
+    const j = (await r.json()) as {
+      portfolio?: { preparations?: { items?: PrepItem[] } };
+    };
+    return j.portfolio?.preparations?.items ?? [];
+  } catch {
+    return [];
+  }
+}
+
+/**
+ * Start a new OPEN preparation and return its real id, or a controlled uncertainty.
+ * Callers must guard against concurrent invocations.
+ */
+export async function openPreparation(input?: {
+  knownPreparationIds?: Iterable<string>;
+}): Promise<OpenPreparationResult> {
+  const before = new Set(input?.knownPreparationIds ?? []);
+  try {
+    const res = await fetch("/api/preparations", { method: "POST" });
+    let j: { preparationId?: string; error?: string } = {};
+    try {
+      j = await res.json();
+    } catch {
+      j = {};
+    }
+
+    if (res.status === 401) {
+      return { kind: "unauthorized" };
+    }
+
+    if (res.ok && j.preparationId) {
+      return { kind: "opened", preparationId: j.preparationId };
+    }
+
+    if (!res.ok) {
+      return {
+        kind: "refused",
+        message: j.error ?? `création refusée (HTTP ${res.status})`,
+        httpStatus: res.status,
+      };
+    }
+
+    // ACK uncertainty: re-read portfolio, never auto-retry POST.
+    const items = await readPortfolioPrepItems();
+    const discovered = items.find((p) => !before.has(p.id));
+    if (discovered) {
+      return {
+        kind: "uncertain",
+        discoveredId: discovered.id,
+        message: `Création confirmée après relecture · ${discovered.id.slice(0, 8)}… — ouvrez « Reprendre ».`,
+      };
+    }
+    return {
+      kind: "uncertain",
+      message:
+        "Création incertaine (ACK perdu). Aucun nouveau POST automatique. Relisez le portefeuille ou réessayez explicitement.",
+    };
+  } catch {
+    const items = await readPortfolioPrepItems();
+    const discovered = items.find((p) => !before.has(p.id));
+    if (discovered) {
+      return {
+        kind: "uncertain",
+        discoveredId: discovered.id,
+        message: `Réseau interrompu, mais une préparation nouvelle apparaît · ${discovered.id.slice(0, 8)}… — Reprendre (GET).`,
+      };
+    }
+    return {
+      kind: "uncertain",
+      message:
+        "Réseau interrompu pendant la création. Résultat non vérifiable — pas de second POST automatique.",
+    };
+  }
+}
diff --git a/projects/sfia-studio-next/web/tests/e2e/ux004-portfolio-shell.spec.ts b/projects/sfia-studio-next/web/tests/e2e/ux004-portfolio-shell.spec.ts
index b8586040..d1b49629 100644
--- a/projects/sfia-studio-next/web/tests/e2e/ux004-portfolio-shell.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/ux004-portfolio-shell.spec.ts
@@ -29,9 +29,10 @@ test.describe("UX-004 portfolio shell", () => {
     await expect(page.getByTestId("studio-shell-app")).toBeVisible();
     await expect(page.getByTestId("studio-rail")).toHaveAttribute("data-rail-width", "246");
     await expect(page.getByTestId("nav-portfolio")).toBeVisible();
-    await expect(page.getByTestId("nav-new-prep")).toHaveAttribute(
-      "href",
-      "/portfolio#nouvelle-preparation",
+    await expect(page.getByTestId("nav-new-prep")).toBeVisible();
+    await expect(page.getByTestId("nav-new-prep")).toHaveAttribute("type", "button");
+    await expect(page.getByTestId("studio-shell-breadcrumb")).toHaveText(
+      /SFIA Studio\s+\/\s+Portefeuille/,
     );
     await expect(page.getByTestId("nav-mes-projets")).toHaveCount(0);
     await expect(page.getByTestId("nav-login")).toHaveCount(0);
@@ -73,10 +74,7 @@ test.describe("UX-004 portfolio shell", () => {
     const bottom = page.getByTestId("studio-mobile-bottom-nav");
     await expect(bottom).toBeVisible();
     await expect(page.getByTestId("mobile-nav-portfolio")).toBeVisible();
-    await expect(page.getByTestId("mobile-nav-create")).toHaveAttribute(
-      "href",
-      "/portfolio#nouvelle-preparation",
-    );
+    await expect(page.getByTestId("mobile-nav-create")).toHaveAttribute("type", "button");
     await expect(page.getByTestId("mobile-nav-account")).toHaveAttribute(
       "href",
       "/settings/integrations",
@@ -173,32 +171,83 @@ test.describe("UX-004 portfolio shell", () => {
     await expect(page.getByText("Préparations ouvertes")).toBeVisible();
   });

-  test("nouveau projet → sas; resume GET; account destination real; UX-003 login still entry", async ({
+  test("nouveau projet → sas; from Intégrations; double-click guard; breadcrumb; resume GET; UX-003 login", async ({
     page,
   }) => {
     await page.setViewportSize({ width: 1280, height: 800 });
     await loginPilotA(page);

+    await expect(page.getByTestId("studio-shell-breadcrumb")).toHaveText(
+      /SFIA Studio\s+\/\s+Portefeuille/,
+    );
+
     await page.getByTestId("nav-account").click();
     await page.waitForURL("**/settings/integrations");
     await expect(page.getByTestId("studio-rail")).toBeVisible();
+    await expect(page.getByTestId("studio-shell-breadcrumb")).toHaveText(
+      /SFIA Studio\s+\/\s+Intégrations/,
+    );
+
+    // Correction A from Intégrations: rail « Nouveau projet » POSTs D2 directly.
+    let postsFromIntegrations = 0;
+    page.on("request", (req) => {
+      if (req.method() === "POST" && req.url().includes("/api/preparations")) {
+        postsFromIntegrations += 1;
+      }
+    });
+    await page.getByTestId("nav-new-prep").click();
+    await page.waitForURL("**/preparations/**");
+    expect(postsFromIntegrations).toBe(1);
+    const prepFromRail = page.url().split("/preparations/")[1]?.split(/[?#]/)[0];
+    expect(prepFromRail).toBeTruthy();

     await page.goto("/portfolio");
+    await expect(page.getByTestId("studio-shell-breadcrumb")).toHaveText(
+      /SFIA Studio\s+\/\s+Portefeuille/,
+    );
+
+    // Portfolio CTA uses the same D2 path.
     await page.getByTestId("portfolio-new-prep").click();
     await page.waitForURL("**/preparations/**");
     const prepId = page.url().split("/preparations/")[1]?.split(/[?#]/)[0];
     expect(prepId).toBeTruthy();

+    // Double-click guard on rail (no second POST while opening).
+    await page.goto("/portfolio");
+    let posts = 0;
+    const countPosts = (req: import("@playwright/test").Request) => {
+      if (req.method() === "POST" && req.url().includes("/api/preparations")) posts += 1;
+    };
+    page.on("request", countPosts);
+    await page.route("**/api/preparations", async (route) => {
+      if (route.request().method() !== "POST") {
+        await route.continue();
+        return;
+      }
+      await new Promise((r) => setTimeout(r, 400));
+      await route.fulfill({
+        status: 200,
+        contentType: "application/json",
+        body: JSON.stringify({ preparationId: "prep-dbl-guard" }),
+      });
+    });
+    const btn = page.getByTestId("nav-new-prep");
+    await Promise.all([btn.click(), btn.click()]);
+    await page.waitForURL("**/preparations/prep-dbl-guard");
+    expect(posts).toBe(1);
+    page.off("request", countPosts);
+    await page.unroute("**/api/preparations");
+
     await page.goto("/portfolio");
     const resume = page.locator(`[data-testid^="resume-prep-"]`).first();
     if (await resume.count()) {
-      let posts = 0;
+      let resumePosts = 0;
       page.on("request", (req) => {
-        if (req.method() === "POST" && req.url().includes("/api/preparations")) posts += 1;
+        if (req.method() === "POST" && req.url().includes("/api/preparations")) resumePosts += 1;
       });
       await resume.click();
       await page.waitForURL(/resume=1/);
-      expect(posts).toBe(0);
+      expect(resumePosts).toBe(0);
     }

     await page.goto("/login");
diff --git a/projects/sfia-studio-next/web/tests/unit/open-preparation.test.ts b/projects/sfia-studio-next/web/tests/unit/open-preparation.test.ts
new file mode 100644
index 00000000..e8c7ceb9
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/unit/open-preparation.test.ts
@@ -0,0 +1,63 @@
+import { beforeEach, describe, expect, it, vi } from "vitest";
+import { openPreparation } from "@/lib/open-preparation";
+
+describe("openPreparation (D2 client)", () => {
+  beforeEach(() => {
+    vi.restoreAllMocks();
+  });
+
+  it("returns opened with preparationId on successful POST", async () => {
+    vi.stubGlobal(
+      "fetch",
+      vi.fn(async () =>
+        new Response(JSON.stringify({ preparationId: "prep-1" }), {
+          status: 200,
+          headers: { "Content-Type": "application/json" },
+        }),
+      ),
+    );
+    const r = await openPreparation();
+    expect(r).toEqual({ kind: "opened", preparationId: "prep-1" });
+    expect(fetch).toHaveBeenCalledTimes(1);
+    expect(fetch).toHaveBeenCalledWith("/api/preparations", { method: "POST" });
+  });
+
+  it("returns refused without second POST", async () => {
+    vi.stubGlobal(
+      "fetch",
+      vi.fn(async () =>
+        new Response(JSON.stringify({ error: "NOPE" }), {
+          status: 500,
+          headers: { "Content-Type": "application/json" },
+        }),
+      ),
+    );
+    const r = await openPreparation();
+    expect(r.kind).toBe("refused");
+    expect(fetch).toHaveBeenCalledTimes(1);
+  });
+
+  it("on uncertain empty body, reloads portfolio once and never retries POST", async () => {
+    const fetchMock = vi
+      .fn()
+      .mockResolvedValueOnce(
+        new Response("{}", { status: 200, headers: { "Content-Type": "application/json" } }),
+      )
+      .mockResolvedValueOnce(
+        new Response(
+          JSON.stringify({
+            portfolio: {
+              preparations: { items: [{ id: "prep-new" }], nextCursor: null },
+            },
+          }),
+          { status: 200, headers: { "Content-Type": "application/json" } },
+        ),
+      );
+    vi.stubGlobal("fetch", fetchMock);
+    const r = await openPreparation({ knownPreparationIds: [] });
+    expect(r.kind).toBe("uncertain");
+    if (r.kind === "uncertain") expect(r.discoveredId).toBe("prep-new");
+    expect(fetchMock).toHaveBeenCalledTimes(2);
+    expect(fetchMock.mock.calls.filter((c) => c[1]?.method === "POST")).toHaveLength(1);
+  });
+});
diff --git a/projects/sfia-studio-next/web/tests/unit/studio-rail.test.ts b/projects/sfia-studio-next/web/tests/unit/studio-rail.test.ts
index 6ade6f5e..bafddc30 100644
--- a/projects/sfia-studio-next/web/tests/unit/studio-rail.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/studio-rail.test.ts
@@ -5,6 +5,7 @@ import {
   clearProjectSurfaceNavIntent,
   noteProjectSurfaceNavIntent,
   peekProjectSurfaceNavIntent,
+  resolvePersonalBreadcrumb,
   resolveProjectLoadSurface,
   resolveRailVariant,
 } from "@/components/shell/studio-rail";
@@ -59,16 +60,25 @@ describe("B1 shell navigation", () => {
     expect(items.find((i) => i.key === "pilotage")?.active).toBe(true);
   });

-  it("keeps a single Portefeuille entry plus Nouveau projet (UX-004)", () => {
+  it("keeps a single Portefeuille entry plus Nouveau projet action (UX-004)", () => {
     const items = buildShellNav({ pathname: "/portfolio" });
     expect(items.some((i) => i.key === "mes-projets")).toBe(false);
     expect(items.some((i) => i.key === "login")).toBe(false);
     expect(items.find((i) => i.key === "portfolio")?.label).toBe("Portefeuille");
-    expect(items.find((i) => i.key === "new-prep")?.label).toBe("Nouveau projet");
-    expect(items.find((i) => i.key === "new-prep")?.href).toBe("/portfolio#nouvelle-preparation");
+    const create = items.find((i) => i.key === "new-prep");
+    expect(create?.label).toBe("Nouveau projet");
+    expect(create?.href).toBeNull();
+    expect(create?.action).toBe("open-preparation");
     expect(items.every((i) => i.href !== "#")).toBe(true);
   });

+  it("resolves personal breadcrumb for known routes only", () => {
+    expect(resolvePersonalBreadcrumb("/portfolio")).toBe("Portefeuille");
+    expect(resolvePersonalBreadcrumb("/settings/integrations")).toBe("Intégrations");
+    expect(resolvePersonalBreadcrumb("/settings")).toBe("Paramètres");
+    expect(resolvePersonalBreadcrumb("/unknown-personal")).toBeNull();
+  });
+
   it("disables project surfaces without project context (prep)", () => {
     const items = buildShellNav({ pathname: "/preparations/prep-1" });
     const travail = items.find((i) => i.key === "travail");
```

---

## 8. Preuves de comportement

### A — Nouveau projet → sas D2
- UNIT: `openPreparation` succès → `{kind:'opened', preparationId}` ; 1 POST (`tests/unit/open-preparation.test.ts`) — **UNIT / FAKE**
- BROWSER: e2e — clic `nav-new-prep` depuis Intégrations → 1 POST → `/preparations/**` ; clic `portfolio-new-prep` → sas — **BROWSER / FAKE** (lane `:3101`, Nora fixture)
- Pas de projet définitif créé par cette action (create-project non invoqué)

### B — Double clic / concurrence
- Shell `openingRef` + bouton `disabled` pendant ouverture
- BROWSER: double-click `nav-new-prep` avec POST ralenti → **1 POST** uniquement — **BROWSER / FAKE**

### C — Échec / uncertain
- UNIT: refused HTTP 500 → 1 POST ; uncertain empty body → GET portfolio, **aucun second POST** — **UNIT / FAKE**
- Message utilisateur via `shell-prep-notice` / `creationUncertainty` portfolio

### D — Fil d'Ariane
- UNIT: `resolvePersonalBreadcrumb` Portefeuille / Intégrations / Paramètres / null — **UNIT**
- BROWSER: breadcrumb Portefeuille sur `/portfolio` ; Intégrations sur `/settings/integrations` ; retour Portefeuille — **BROWSER / FAKE**

### E — Non-régression
- Playwright UX-003 entry 10 PASS + UX-004 8 PASS = **18 PASS** — **BROWSER / FAKE**
- Login entry sans rail ; resume GET sans POST ; rail widths 246/240/244 ; mobile bottom nav smoke
- **Pas de preuve LIVE / REAL** déduite

Qualification: aucune preuve LIVE Neo/OAuth/Git REAL dans ce cycle.

---

## 9. Tests exécutés

| Suite | Résultat | Niveau |
| --- | --- | --- |
| `tsc --noEmit` | PASS | static |
| `next lint` | PASS (warnings préexistants hors périmètre) | static |
| `vitest` open-preparation + studio-rail | 16 PASS | UNIT / FAKE |
| `next build` production | PASS · BUILD_ID `N3H-4PyOKwxr4-U7Is34c` | build |
| Playwright `ux004-portfolio-shell` + `ux003-unified-entry` | 18 PASS | BROWSER / FAKE |

Note opérationnelle: shell agent avait `DATABASE_URL` RECETTE `:5434` — tests exécutés avec override explicite operator DEV `:5433` (aucune mutation RECETTE).

---

## 10. Identifiants candidat

| Champ | Valeur |
| --- | --- |
| Branch | `feat/next-ml4d-ux004-portfolio-20261116` |
| Commit SHA | `fb0ac5c865f1d562a3778e207e5e8729165c5c4d` |
| Parent | `bc8785683c30430aa99bc76e138ba10f49c71c39` |
| Tree `projects/sfia-studio-next/web` | `5baf5936d1813d62c653ebafec18545105d108f0` |
| Build ID (prod local) | `N3H-4PyOKwxr4-U7Is34c` |
| Push projet | **NON** |
| PR / merge / main | **NON** |
| RECETTE redeploy | **NON** — reste `bc878568` / `3g7UH7AXjSWhxrT20D3-w` |
| Version produit | NOT AVAILABLE |
| STABLE | NOT AVAILABLE |
| Release | NO RELEASE |
| Gate C | OPEN |
| ML4D clôture | NON |
| ADOPTED | NON |

---

## 11. Statut DEV / RECETTE

- DEV `:3102` — code correctif local ; HTTP 200 après rebuild/restart (`.next` clobber par `next build` documenté ; pas d'impact RECETTE).
- RECETTE `:3200` — LaunchAgent `com.sfia.studio.next.recette.ml4d-ux004` ; worktree détaché `bc878568` ; BUILD `3g7UH7AXjSWhxrT20D3-w` ; **inchangé**. Nouveau SHA nécessite GO + build + qualification distincts avant mise à disposition.

---

## 12. Handoff

Mode: publish-in-cycle L3 borné via `scripts/sfia/publish-review-handoff.sh`.
Cible: branche `sfia/review-handoff` · fichier unique `sfia-review-handoff/latest-chatgpt-review.md`.
Worktree publisher: `/Users/morris/Projects/sfia-review-handoff-m5a-gi-20261023`.
Tip précédent: `68d149b6826d4cfab863f2e0b2f1cef90d2588ab` / blob `1a77139ce3bb1a385b1a0bbb6b953f9be23c8365`.

| Vérification | Résultat |
| --- | --- |
| Publisher verdict | `HANDOFF UPDATED — REMOTE VERIFIED` |
| Tip distant `origin/sfia/review-handoff` | `6c137a36f24ec27e30740d0cc14f93540e8c84f6` |
| Blob distant canonique | `409c32493700e276df4e3d9ce6d8003132577ba0` |
| Commit mono-fichier | OUI — uniquement `sfia-review-handoff/latest-chatgpt-review.md` |
| Push | FF only (`68d149b6..6c137a36`) — aucun force push |
| Relecture distante | titre FULL UX-004 CORRECTIF ; GO ; SHA `fb0ac5c8…` ; verdict READY ; pas de secret |
| Branche projet préservée | `feat/next-ml4d-ux004-portfolio-20261116` @ `fb0ac5c865f1d562a3778e207e5e8729165c5c4d` |

---

## 13. Réserves et prochaines décisions Morris

1. RECETTE sert encore l'ancien candidat UX-004 `bc878568` — **pas** ce correctif jusqu'à GO distinct.
2. Recette visuelle mobile Figma/runtime **non** redemandée ; smoke technique seulement — ne pas présenter comme F2/G5 mobile acquis.
3. Aucune réception UX complète / ADOPTED / clôture ML4D.
4. Push/PR/merge projet non autorisés dans ce cycle.
5. BUILD_ID Next non déterministe entre rebuilds locaux — qualifier le SHA Git comme vérité candidat.

---

## 14. Gates respectés

modification Figma NON · push projet NON · PR NON · merge NON · main NON · déploiement RECETTE nouveau SHA NON · STABLE NON · release NON · ADOPTED NON · clôture ML4D NON · Gate C OPEN.
