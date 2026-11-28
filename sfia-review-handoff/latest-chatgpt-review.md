# Review Pack — finalisation intégrale du complément B

Date : 28 novembre 2026, 15:20 Europe/Paris.
Cycle : 08 Delivery / INC / Standard.
Périmètre : composition du portefeuille personnel et clôture de R-PF34-UI.
Branche : sfia/next-ml5-integrated-delivery-20261123.
Entrée : 26698494ceed32af53d71b3e2e2248bab903de73, tree b4c97114d6578dce0106614e86ba1600f4efab95, parent 1eedfba8ea09163a1ba780fbeb16563034895379.
Sortie : d79fd252684b0be76b61ab607cc88d00b7fb7232, tree 84bfe3af532edb6efcbbfc8cdde780d0c8abd185, parent 26698494ceed32af53d71b3e2e2248bab903de73.
Push : 26698494..d79fd252, fast-forward. Aucune PR ouverte. Aucun run Actions observé.
BUILD_ID : XNaF1CDjSsPNaQd6HoUzj. DEV :3100 PID 62752. PostgreSQL :5433, base sfia_next_dev, schéma 028.
RECETTE :3200 PID 58965 inchangé. Table pilot_portfolio_preferences absente.
origin/main et merge-base : 997897fd7cf914771e7d08e8030dc7123fab7d25.
Classe : NO RELEASE. Aucune migration. Aucune modification Figma.

## Sources lues

Suivi v0.25, ref 6e875d90c367e8c77f5325b0e9ccce479dc64513, §30.1 à §30.5.
Figma itgvCulInEnFY6DvgIegvP, page 14, session 73afdead-9a04-4dc4-bd65-117da18b8d6d.
Nœuds extraits dans ce cycle : 1420:242 en-tête, 1420:285 barre, 1420:318 colonnes, 1425:5758 pied.
Nœuds déjà extraits et réutilisés : 1420:269 reprise, 1420:250 synthèse, 1420:129 ligne, 1420:1803 menu, 1420:3227 archivage.
Les 22 autres frames n'ont pas été rouvertes nœud par nœud. Leurs différences sont les données, le filtre, le viewport et l'état déjà portés par le même écran.

## Contrat retenu

En-tête : surtitre 11/15 #b8b1ff, titre 34/46, sous-titre 15/21, action 218×38 #292d58 bordure #656fe1 rayon 9.
Barre : filtres sans cadre, actif #242c4b / #b8b1ff, inactif #a5b1c5, écart 2 px, rayon 7.
Recherche 236×38 panneau #151d2c bordure #273248, icône et placeholder.
Tri panneau avec chevron. Sélecteur d'icônes, actif 38×36 sur #242c4b.
Colonnes : fond #151d2c, NOM / TYPE 158 / ACTIVITÉ 170, 11/15.
Pied : compteur à gauche, action secondaire 218×38 #242b3b / #30394c à droite.
Menu : identité, puis ouvrir, renommer indisponible, favori, monter, descendre, archiver, supprimer indisponible.

## Correction de composition

Le titre Mes espaces précède la barre. Les archives ne sont plus dans la barre ; elles restent dans le rail.
Le bouton Nouveau projet utilise l'action primaire. Chaque ligne rend un monogramme, le nom, l'activité réelle et un menu à sept entrées.
La recherche rapide est un champ sombre sous la marque. Le tiroir ne répète plus le lien Archives.

## R-PF34-UI

Un 409 relu débloque une nouvelle intention sans exiger la valeur refusée. Si la relecture échoue, le blocage reste.
L'accusé est propre à la route : favori exige favorite et rowVersion, archive exige archived et rowVersion, ordre et préférence exigent version.
La relecture d'un espace passe par GET /api/portfolio/spaces/{type}/{id}. Elle ne dépend pas de la page de 25.
Une hausse de version seule ne prouve pas un déplacement : l'intention d'ordre conserve le type, l'identifiant et la cible, puis relit ces enregistrements.
Aucun retry. Les commandes incompatibles restent désactivées pendant l'attente.

## Fichier créé

projects/sfia-studio-next/web/src/app/api/portfolio/spaces/[type]/[id]/route.ts

```
import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { parseSpaceType, readPersonalSpaceRecord } from "@/domains/identity/portfolio-organization";
import { studioErrorResponse } from "@/lib/http-errors";

export const dynamic = "force-dynamic";

export async function GET(_req: Request, ctx: { params: Promise<{ type: string; id: string }> }) {
  try {
    const session = await requireStudioSession();
    const { type, id } = await ctx.params;
    const record = await readPersonalSpaceRecord(session.pilotId, parseSpaceType(type), id);
    return NextResponse.json(record, { headers: { "cache-control": "private, no-store" } });
  } catch (error) {
    const mapped = studioErrorResponse(error);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
```

La lecture propriétaire readPersonalSpaceRecord vérifie la propriété, retourne favorite, archived, rowVersion, customPosition et eligible, et répond 404 à un autre Pilote.

## Fichiers modifiés

11 fichiers, +338 / −144.
PersonalPortfolio.tsx : composition, menu, classification et relecture.
personal-portfolio.css : filtres, recherche, vues, colonnes, pied, liens.
PersonalRailFavorites.tsx et StudioShell.tsx : recherche sous la marque, archives uniques.
studio-shell.css : champ sombre.
portfolio-organization.ts : lecture d'un espace.
Tests unitaires et PG. as-built et delivery-history.

## Preuves

Tests : 12 PASS (3 unitaires, 9 PG dont la lecture hors page et le 404 d'un autre Pilote).
tsc : 34 diagnostics, identiques à /tmp/sfia-tsc-entry.txt, exit 2.
Build production : succès. Route /portfolio 7.17 kB / 110 kB.
Smoke : POST /api/dev/login 200, GET /api/portfolio 200, compteurs 220 / 32 / 0, total 252.
Navigateur DEV : rail sombre, en-tête, synthèse, reprise, titre puis barre, monogrammes, pied « 5 sur 252 espaces », menu à sept entrées. Renommer et Supprimer désactivés. Monter et Descendre désactivés tant que le tri n'est pas l'ordre personnalisé.
Cette capture n'est pas une mesure F2 appariée. Viewport du navigateur inférieur à 1680. Le sélecteur de vues passe à la ligne dans cette largeur.

## Matrices

UX-01 IMPLEMENTED WITH RESERVE — régions en échec extraites, pas les 22 frames une par une.
UX-02 IMPLEMENTED — composition nominale rendue et observée.
UX-03 IMPLEMENTED — menu, ligne, grille, groupes, vides, chargement, erreur, archive.
UX-04 IMPLEMENTED WITH RESERVE — rail et menu observés ; focus piégé des modales non exercé au clavier dans ce cycle.
UX-05 IMPLEMENTED — conflit, accusé par route, lecture ciblée, tests unitaires et PG.
UX-06 PARTIAL — smoke navigateur réel, F2 non mesuré.

B-01 composition IMPLEMENTED, observée.
B-02 bibliothèque IMPLEMENTED, observée en vue groupée.
B-03 menu IMPLEMENTED, sept entrées observées.
B-04 PF34 IMPLEMENTED, prouvé par tests, pas par un parcours navigateur de conflit.
B-05 responsive PARTIAL — CSS 1680/1280/390/320 présent, un seul viewport navigateur exercé.

P01 à P10 : acquis A conservés. Delta de ce cycle : présentation et réconciliation. Preuve visuelle limitée à la capture DEV ci-dessus. PF-A04 et PF-A06 restent OUT.

États : 14.01, 14.02, 14.03, 14.07, 14.08, 14.34 construits et, pour 14.03 et 14.08, observés. 14.04, 14.05, 14.06, 14.11, 14.12, 14.13, 14.16, 14.17, 14.18, 14.25, 14.27, 14.29, 14.31, 14.32, 14.33 construits par le même écran, non recapturés. 14.19 reste la redirection 401 existante. 14.20, 14.21, 14.22, 14.30 portés par le CSS et le tiroir, non recapturés. 14.09 non ouvert dans le navigateur. Aucun F2 PASS. OUT : 14.10, 14.14, 14.15, 14.23, 14.24, 14.26, 14.28.

## Réserves

R-B-F2 : aucune mesure appariée. Sortie : revue visuelle Morris sur ce candidat, puis mesure en RECETTE sur GO distinct.
R-B-G2-VARIANTS : 22 frames non rouvertes. Sortie : revue des états discriminants sur DEV.
R-B-FOCUS : piège de focus des modales et du tiroir non exercé au clavier. Sortie : contrôle clavier Morris ou RECETTE.
R-A04-WINDOW, R-A06-ATTACH, R-E2E-WEBPACK : inchangées, acceptées.

## Revue Morris

URL : http://127.0.0.1:3100/portfolio
SHA : d79fd252684b0be76b61ab607cc88d00b7fb7232
BUILD_ID : XNaF1CDjSsPNaQd6HoUzj
À regarder : barre, monogrammes, menu projet, menu préparation, liste, pied, rail. Le Pilote A est actuellement en vue Groupes.
Ne pas traiter cette capture comme un F2 PASS.

## Verdict

Technique : READY WITH RESERVES — COMPLEMENT B.
Visuel : REVIEW INCONCLUSIVE — RUNTIME SCREENSHOT REQUIRED.
Global proposé : READY WITH RESERVES — COMPLEMENT B.
Mandat 1 OPEN. Mandat 2 non engagé. Livraison 1 NOT ACCEPTED. NO RELEASE. NOT ADOPTED.

## Diff utile de la reconciliation et de la composition

```
diff --git a/projects/sfia-studio-next/web/src/components/portfolio/PersonalPortfolio.tsx b/projects/sfia-studio-next/web/src/components/portfolio/PersonalPortfolio.tsx
index c09e3a19..edd458f2 100644
--- a/projects/sfia-studio-next/web/src/components/portfolio/PersonalPortfolio.tsx
+++ b/projects/sfia-studio-next/web/src/components/portfolio/PersonalPortfolio.tsx
@@ -14,56 +14,49 @@ type BoardResponse = {
 };

 export type PortfolioMutationOutcome = "confirmed" | "refused" | "conflict" | "unknown";
-export type PortfolioReread = "matched" | "unverified" | "failed" | "not-attempted";
+export type PortfolioReread = "reviewed" | "failed" | "not-attempted";

 export type PortfolioIntention = {
   kind: "favorite" | "archive" | "preference" | "order";
   spaceType?: PersonalSpace["spaceType"];
   spaceId?: string;
+  beforeSpaceType?: PersonalSpace["spaceType"];
+  beforeSpaceId?: string;
+  direction?: "up" | "down";
   desired?: boolean;
   view?: string;
   sort?: string;
   knownVersion: number;
 };

-/** Confirmed refusals are the route contract. A 5xx or a 2xx without an acknowledgement stays unknown. */
-export function classifyPortfolioResponse(status: number, body: Record<string, unknown> | null): PortfolioMutationOutcome {
+/** An acknowledgement counts only for the route that was called. A 5xx stays unknown. */
+export function classifyPortfolioResponse(
+  status: number,
+  body: Record<string, unknown> | null,
+  kind: PortfolioIntention["kind"],
+): PortfolioMutationOutcome {
   if (status === 409) return "conflict";
   if (status === 400 || status === 401 || status === 403 || status === 404 || status === 422) return "refused";
   if (status >= 500 || status <= 0) return "unknown";
   if (status >= 200 && status < 300) {
     if (!body) return "unknown";
-    const acknowledged =
-      typeof body.rowVersion === "number" ||
-      typeof body.version === "number" ||
-      typeof body.favorite === "boolean" ||
-      typeof body.archived === "boolean" ||
-      typeof body.applied === "boolean";
-    return acknowledged ? "confirmed" : "unknown";
+    if (kind === "favorite") {
+      return typeof body.favorite === "boolean" && typeof body.rowVersion === "number" ? "confirmed" : "unknown";
+    }
+    if (kind === "archive") {
+      return typeof body.archived === "boolean" && typeof body.rowVersion === "number" ? "confirmed" : "unknown";
+    }
+    if (kind === "preference" || kind === "order") {
+      return typeof body.version === "number" ? "confirmed" : "unknown";
+    }
   }
   return "unknown";
 }

-/** A successful read counts only when it shows the state the intention was about. */
-export function intentionMatchesBoard(
-  intention: PortfolioIntention,
-  board: {
-    items: Array<{ spaceType: string; id: string; favorite: boolean; archived: boolean }>;
-    preferences: { view: string; sort: string; version: number };
-  },
-): boolean {
-  if (intention.kind === "preference") {
-    const viewOk = !intention.view || board.preferences.view === intention.view;
-    const sortOk = !intention.sort || board.preferences.sort === intention.sort;
-    return viewOk && sortOk && board.preferences.version > intention.knownVersion;
-  }
-  if (intention.kind === "order") {
-    return board.preferences.sort === "custom" && board.preferences.version > intention.knownVersion;
-  }
-  const item = board.items.find((entry) => entry.spaceType === intention.spaceType && entry.id === intention.spaceId);
-  if (!item) return false;
-  if (intention.kind === "favorite") return item.favorite === intention.desired;
-  return item.archived === intention.desired;
+/** Reading the owner record is enough to look again. It does not prove the previous intention. */
+export function portfolioReadReview(status: number): PortfolioReread {
+  if (status === 200 || status === 404) return "reviewed";
+  return "failed";
 }

 /**
@@ -77,10 +70,13 @@ export function portfolioMutationFollowUp(input: {
   if (input.outcome === "refused") {
     return { uncertain: false, retry: false, blockFurtherMutations: false };
   }
-  if (input.reread === "matched" && (input.outcome === "confirmed" || input.outcome === "conflict")) {
+  if (input.outcome === "conflict" && input.reread === "reviewed") {
     return { uncertain: false, retry: false, blockFurtherMutations: false };
   }
-  if (input.outcome === "unknown" && input.reread === "matched") {
+  if (input.outcome === "conflict") {
+    return { uncertain: false, retry: false, blockFurtherMutations: true };
+  }
+  if (input.reread === "reviewed") {
     return { uncertain: false, retry: false, blockFurtherMutations: false };
   }
   return {
@@ -216,9 +212,7 @@ export function PersonalPortfolio() {
       setUncertain(
         reread === "failed"
           ? "Résultat incertain. La relecture a échoué et l'action n'a pas été relancée."
-          : reread === "unverified"
-            ? "Résultat incertain. La relecture ne confirme pas l'espace concerné."
-            : "Résultat incertain. L'action n'est pas relancée.",
+          : "Résultat incertain. L'action n'est pas relancée.",
       );
       return;
     }
@@ -234,24 +228,18 @@ export function PersonalPortfolio() {

   async function probeIntention(intention: PortfolioIntention): Promise<PortfolioReread> {
     try {
-      if (intention.kind === "favorite") {
-        const response = await fetch("/api/portfolio/favorites");
-        if (!response.ok) return "failed";
-        const body = (await response.json()) as { favorites?: PersonalSpace[] };
-        const found = Boolean(body.favorites?.some((item) => item.spaceType === intention.spaceType && item.id === intention.spaceId));
-        return found === intention.desired ? "matched" : "unverified";
-      }
-      if (intention.kind === "archive") {
-        const scopeName = intention.desired ? "archive" : "current";
-        const response = await fetch(`/api/portfolio?scope=${scopeName}&expanded=1`);
-        if (!response.ok) return "failed";
-        const body = (await response.json()) as BoardResponse;
-        if (!body.board) return "failed";
-        return intentionMatchesBoard(intention, body.board) ? "matched" : "unverified";
+      if (intention.kind === "preference") {
+        const board = await loadRef.current();
+        return board ? "reviewed" : "failed";
       }
-      const board = await loadRef.current();
-      if (!board) return "failed";
-      return intentionMatchesBoard(intention, board) ? "matched" : "unverified";
+      const ids = [
+        { type: intention.spaceType, id: intention.spaceId },
+        { type: intention.beforeSpaceType, id: intention.beforeSpaceId },
+      ].filter((item): item is { type: NonNullable<PortfolioIntention["spaceType"]>; id: string } => Boolean(item.type && item.id));
+      if (ids.length === 0) return "failed";
+      const responses = await Promise.all(ids.map((item) => fetch(`/api/portfolio/spaces/${item.type}/${item.id}`)));
+      if (responses.some((response) => portfolioReadReview(response.status) === "failed")) return "failed";
+      return "reviewed";
     } catch {
       return "failed";
     }
@@ -271,7 +259,7 @@ export function PersonalPortfolio() {
         body: JSON.stringify(payload),
       });
       const body = (await response.json().catch(() => ({}))) as Record<string, unknown>;
-      const outcome = classifyPortfolioResponse(response.status, body);
+      const outcome = classifyPortfolioResponse(response.status, body, intention.kind);
       if (outcome === "refused") {
         settleMutation("refused", "not-attempted", "");
         setNotice(typeof body.message === "string" ? body.message : typeof body.error === "string" ? body.error : "La modification n'a pas abouti.");
@@ -383,42 +371,48 @@ export function PersonalPortfolio() {
             beforeSpaceId: space.id,
             expectedVersion: board!.preferences.version,
             context: orderContext,
-          }, { kind: "order", knownVersion: board!.preferences.version });
+          }, {
+            kind: "order",
+            spaceType: spaceType as PersonalSpace["spaceType"],
+            spaceId,
+            beforeSpaceType: space.spaceType,
+            beforeSpaceId: space.id,
+            knownVersion: board!.preferences.version,
+          });
         }}
         data-testid={space.spaceType === "project" ? `open-project-${space.id}` : `resume-prep-${space.id}`}
       >
-        <a href={hrefFor(space)} onClick={() => notePersonalSpaceEntry(space.spaceType, space.id)}>{space.label}</a>
+        <div className="personal-portfolio-identity">
+          <span className="personal-portfolio-monogram" aria-hidden="true">{(space.label.trim()[0] || "?").toUpperCase()}</span>
+          <div>
+            <a href={hrefFor(space)} onClick={() => notePersonalSpaceEntry(space.spaceType, space.id)}>{space.label}</a>
+            <small>{activity}</small>
+          </div>
+          {space.favorite ? (
+            <svg className="personal-portfolio-star" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
+              <path d="M10 2.5L12.3333 7.25L17.5 8L13.75 11.6667L14.6667 16.8333L10 14.3333L5.33333 16.8333L6.25 11.6667L2.5 8L7.66667 7.25L10 2.5Z" stroke="#A5B1C5" strokeWidth="1.41667" strokeLinejoin="round" />
+            </svg>
+          ) : null}
+        </div>
         <span className="personal-portfolio-meta">{space.spaceType === "project" ? "Projet" : "Préparation"}</span>
         <span className="personal-portfolio-meta">{activity}</span>
-        <span>
-          <button
-            type="button"
-            aria-pressed={space.favorite}
-            disabled={locked}
-            aria-label={space.favorite ? "Retirer des favoris" : "Ajouter aux favoris"}
-            onClick={() =>
-              void mutate(`/api/portfolio/spaces/${space.spaceType}/${space.id}/favorite`, "PUT", {
-                favorite: !space.favorite,
-                expectedVersion: space.rowVersion,
-              }, { kind: "favorite", spaceType: space.spaceType, spaceId: space.id, desired: !space.favorite, knownVersion: space.rowVersion })
-            }
-          >
-            {space.favorite ? "★" : "☆"}
+        <span className="personal-portfolio-actions">
+          <button type="button" aria-expanded={menu === space.id} aria-label="Actions de l'espace" onClick={(event) => { event.preventDefault(); setMenu(menu === space.id ? null : space.id); }}>
+            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
+              <path d="M4.17 10h.01M10 10h.01M15.83 10h.01" stroke="#A5B1C5" strokeWidth="2.4" strokeLinecap="round" />
+            </svg>
           </button>
-          {canReorder ? (
-            <>
-              <button type="button" aria-label="Monter" disabled={locked} onClick={() => void mutate("/api/portfolio/order", "POST", { spaceType: space.spaceType, spaceId: space.id, direction: "up", expectedVersion: board!.preferences.version, context: orderContext }, { kind: "order", knownVersion: board!.preferences.version })}>↑</button>
-              <button type="button" aria-label="Descendre" disabled={locked} onClick={() => void mutate("/api/portfolio/order", "POST", { spaceType: space.spaceType, spaceId: space.id, direction: "down", expectedVersion: board!.preferences.version, context: orderContext }, { kind: "order", knownVersion: board!.preferences.version })}>↓</button>
-            </>
-          ) : null}
-          <button type="button" aria-label="Actions de l'espace" onClick={() => setMenu(menu === space.id ? null : space.id)}>…</button>
           {menu === space.id ? (
             <div className="personal-portfolio-menu" role="menu">
-              <button type="button" disabled aria-disabled="true" title="Le renommage n'est pas disponible dans cette version.">Renommer — indisponible</button>
-              <button type="button" disabled={locked} onClick={() => (scope === "archive" ? setConfirmRestore(space) : setConfirm(space))}>
-                {scope === "archive" ? "Restaurer" : "Archiver"}
-              </button>
-              <button type="button" disabled aria-disabled="true" title="La suppression n'est pas disponible dans cette version.">Supprimer — indisponible</button>
+              <p>{space.label}</p>
+              <small>{space.spaceType === "project" ? "Projet" : "Préparation"}</small>
+              <a href={hrefFor(space)} onClick={() => notePersonalSpaceEntry(space.spaceType, space.id)}>{space.spaceType === "project" ? "Ouvrir le projet" : "Reprendre avec Nora"}</a>
+              <button type="button" disabled aria-disabled="true" title="Le renommage arrive avec le parcours de préparation.">Renommer</button>
+              <button type="button" disabled={locked} aria-label={space.favorite ? "Retirer des favoris" : "Ajouter aux favoris"} onClick={() => void mutate(`/api/portfolio/spaces/${space.spaceType}/${space.id}/favorite`, "PUT", { favorite: !space.favorite, expectedVersion: space.rowVersion }, { kind: "favorite", spaceType: space.spaceType, spaceId: space.id, desired: !space.favorite, knownVersion: space.rowVersion })}>{space.favorite ? "Retirer des favoris" : "Ajouter aux favoris"}</button>
+              <button type="button" aria-label="Monter" disabled={locked || !canReorder} title={canReorder ? undefined : "Disponible lorsque l'ordre personnalisé est le tri enregistré, sans filtre."} onClick={() => void mutate("/api/portfolio/order", "POST", { spaceType: space.spaceType, spaceId: space.id, direction: "up", expectedVersion: board!.preferences.version, context: orderContext }, { kind: "order", spaceType: space.spaceType, spaceId: space.id, direction: "up", knownVersion: board!.preferences.version })}>Monter</button>
+              <button type="button" aria-label="Descendre" disabled={locked || !canReorder} title={canReorder ? undefined : "Disponible lorsque l'ordre personnalisé est le tri enregistré, sans filtre."} onClick={() => void mutate("/api/portfolio/order", "POST", { spaceType: space.spaceType, spaceId: space.id, direction: "down", expectedVersion: board!.preferences.version, context: orderContext }, { kind: "order", spaceType: space.spaceType, spaceId: space.id, direction: "down", knownVersion: board!.preferences.version })}>Descendre</button>
+              <button type="button" disabled={locked} onClick={() => (scope === "archive" ? setConfirmRestore(space) : setConfirm(space))}>{scope === "archive" ? "Restaurer" : "Archiver"}</button>
+              <button type="button" disabled aria-disabled="true" title="La suppression n'est pas disponible.">Supprimer</button>
             </div>
           ) : null}
         </span>
@@ -435,7 +429,7 @@ export function PersonalPortfolio() {
           <p className="personal-portfolio-sub">Retrouvez et organisez vos projets et préparations.</p>
         </div>
         <div className="personal-portfolio-grow" />
-        <button type="button" className="btn" id="nouvelle-preparation" data-testid="portfolio-new-prep" disabled={creating} onClick={() => void startPreparation()}>
+        <button type="button" className="personal-portfolio-primary" id="nouvelle-preparation" data-testid="portfolio-new-prep" disabled={creating} onClick={() => void startPreparation()}>
           {creating ? "Création…" : "Nouveau projet"}
         </button>
       </header>
@@ -475,6 +469,9 @@ export function PersonalPortfolio() {
         </section>
       ) : null}

+      <div className="personal-portfolio-separator" />
+      <section className="personal-portfolio-library" aria-label="Mes espaces">
+        <h2>Mes espaces</h2>
       <div className="personal-portfolio-tools">
         <div className="personal-portfolio-filters" role="tablist" aria-label="Filtres">
           {([
@@ -492,7 +489,13 @@ export function PersonalPortfolio() {
             </button>
           ))}
         </div>
-        <input aria-label="Filtrer les espaces" placeholder="Filtrer les espaces…" value={query} onChange={(event) => setQuery(event.target.value)} data-testid="portfolio-search" />
+        <label className="personal-portfolio-search">
+          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
+            <path d="M15 9.16667C15 12.3883 12.3883 15 9.16667 15C5.94501 15 3.33333 12.3883 3.33333 9.16667C3.33333 5.94501 5.94501 3.33333 9.16667 3.33333C12.3883 3.33333 15 5.94501 15 9.16667Z" stroke="#A5B1C5" strokeWidth="1.41667" />
+            <path d="M16.6667 16.6667L13.3333 13.3333" stroke="#A5B1C5" strokeWidth="1.41667" strokeLinecap="round" />
+          </svg>
+          <input aria-label="Filtrer les espaces" placeholder="Filtrer les espaces…" value={query} onChange={(event) => setQuery(event.target.value)} data-testid="portfolio-search" />
+        </label>
         <select
           aria-label="Tri"
           disabled={locked}
@@ -528,17 +531,18 @@ export function PersonalPortfolio() {
                 }, { kind: "preference", view: key, knownVersion: board.preferences.version })
               }
             >
-              {label}
+              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
+                {key === "list" ? <path d="M3.33 5H16.67M3.33 10H16.67M3.33 15H16.67" stroke="currentColor" strokeWidth="1.42" strokeLinecap="round" /> : null}
+                {key === "grid" ? <path d="M3.3 2.5h4.2v4.8H3.3zM12.5 2.5h4.2v4.8h-4.2zM3.3 11.7h4.2V16.5H3.3zM12.5 11.7h4.2V16.5h-4.2z" stroke="currentColor" strokeWidth="1.42" /> : null}
+                {key === "grouped" ? <path d="M3.3 5H8.3M3.3 10H16.7M3.3 15H16.7M12.5 4.2H16.7" stroke="currentColor" strokeWidth="1.42" strokeLinecap="round" /> : null}
+              </svg>
             </button>
           ))}
         </div>
-        <button type="button" aria-pressed={scope === "archive"} onClick={() => setScope(scope === "archive" ? "current" : "archive")}>
-          {scope === "archive" ? "Retour aux espaces" : "Archives"}
-        </button>
       </div>
-
-      <section className="personal-portfolio-library" aria-label="Mes espaces">
-        <h2>Mes espaces</h2>
+      {scope === "archive" ? (
+        <p className="personal-portfolio-status"><button type="button" onClick={() => setScope("current")}>Retour aux espaces</button></p>
+      ) : null}
         {board.items.length === 0 ? (
           <p data-testid="portfolio-empty">{query ? "Aucun résultat." : scope === "archive" ? "Aucune archive." : filter === "favorites" ? "Aucun favori." : "Aucun espace pour le moment."}</p>
         ) : board.preferences.view === "grid" ? (
@@ -556,11 +560,13 @@ export function PersonalPortfolio() {
             {board.items.map(renderSpace)}
           </div>
         )}
-        <p>{board.items.length} sur {board.filteredTotal} espaces</p>
-        {!expanded && board.filteredTotal > board.items.length ? (
-          <button type="button" onClick={() => setExpanded(true)}>Voir tous les espaces</button>
-        ) : null}
-        {expanded ? <button type="button" onClick={() => setExpanded(false)}>Réduire la liste</button> : null}
+        <div className="personal-portfolio-foot">
+          <p>{board.items.length} sur {board.filteredTotal} espaces</p>
+          {!expanded && board.filteredTotal > board.items.length ? (
+            <button type="button" className="personal-portfolio-secondary" onClick={() => setExpanded(true)}>Voir tous les espaces</button>
+          ) : null}
+          {expanded ? <button type="button" className="personal-portfolio-secondary" onClick={() => setExpanded(false)}>Réduire la liste</button> : null}
+        </div>
         {expanded && board.nextCursor ? (
           <button type="button" data-testid="portfolio-load-more" onClick={() => void load(board.nextCursor)}>Charger la suite</button>
         ) : null}
diff --git a/projects/sfia-studio-next/web/src/domains/identity/portfolio-organization.ts b/projects/sfia-studio-next/web/src/domains/identity/portfolio-organization.ts
index 5ac953d4..4c07e4f6 100644
--- a/projects/sfia-studio-next/web/src/domains/identity/portfolio-organization.ts
+++ b/projects/sfia-studio-next/web/src/domains/identity/portfolio-organization.ts
@@ -751,6 +751,52 @@ export async function movePersonalSpace(
   });
 }

+/** Owner read of one space, independent of the current page, filter, or sort. */
+export async function readPersonalSpaceRecord(pilotId: string, spaceType: SpaceType, spaceId: string) {
+  if (spaceType === "project") {
+    const owned = await sql<{ id: string }[]>`
+      SELECT id FROM projects WHERE id = ${spaceId} AND owner_pilot_id = ${pilotId}
+    `;
+    if (!owned[0]) throw new StudioError("NOT_FOUND", "Espace introuvable.", { httpStatus: 404 });
+  } else {
+    const owned = await sql<{ id: string; eligible: boolean }[]>`
+      SELECT pr.id, (pr.status = 'OPEN' AND l.preparation_id IS NULL) AS eligible
+      FROM preparations pr
+      LEFT JOIN preparation_project_links l ON l.preparation_id = pr.id
+      WHERE pr.id = ${spaceId} AND pr.owner_pilot_id = ${pilotId}
+    `;
+    if (!owned[0]) throw new StudioError("NOT_FOUND", "Espace introuvable.", { httpStatus: 404 });
+    const org = await sql<{ favorite: boolean; archived_at: string | null; row_version: number; custom_position: number | null }[]>`
+      SELECT favorite, archived_at, row_version, custom_position
+      FROM pilot_space_organization
+      WHERE owner_pilot_id = ${pilotId} AND space_type = ${spaceType} AND space_id = ${spaceId}
+    `;
+    return {
+      spaceType,
+      id: spaceId,
+      eligible: owned[0].eligible,
+      favorite: org[0]?.favorite ?? false,
+      archived: Boolean(org[0]?.archived_at),
+      rowVersion: org[0]?.row_version ?? 0,
+      customPosition: org[0]?.custom_position ?? null,
+    };
+  }
+  const org = await sql<{ favorite: boolean; archived_at: string | null; row_version: number; custom_position: number | null }[]>`
+    SELECT favorite, archived_at, row_version, custom_position
+    FROM pilot_space_organization
+    WHERE owner_pilot_id = ${pilotId} AND space_type = ${spaceType} AND space_id = ${spaceId}
+  `;
+  return {
+    spaceType,
+    id: spaceId,
+    eligible: true,
+    favorite: org[0]?.favorite ?? false,
+    archived: Boolean(org[0]?.archived_at),
+    rowVersion: org[0]?.row_version ?? 0,
+    customPosition: org[0]?.custom_position ?? null,
+  };
+}
+
 export async function listFavoriteSpaces(pilotId: string): Promise<PersonalSpace[]> {
   const rows = await sql<Row[]>`
     SELECT space_type, id, label, created_text AS created_at, opened_text AS last_opened_at,
diff --git a/projects/sfia-studio-next/web/tests/integration/portfolio-organization.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/portfolio-organization.pg.test.ts
index 50554458..1ecf3b71 100644
--- a/projects/sfia-studio-next/web/tests/integration/portfolio-organization.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/portfolio-organization.pg.test.ts
@@ -8,6 +8,7 @@ import { db } from "@/db/client";
 import { newId } from "@/lib/ids";
 import {
   loadPersonalBoard,
+  readPersonalSpaceRecord,
   movePersonalSpace,
   recordSpaceOpened,
   setSpaceArchive,
@@ -384,4 +385,17 @@ describe("personal portfolio organization (PG)", () => {
       httpStatus: 400,
     });
   });
+
+  it("reads one owned space without the current page", async () => {
+    const owner = await seedPilot("Lecture");
+    const other = await seedPilot("Autre");
+    const projectId = newId("prj");
+    await db.insert(projects).values({ id: projectId, ownerPilotId: owner, name: "Hors page" });
+    await setSpaceFavorite(owner, "project", projectId, { favorite: true, expectedVersion: 0 });
+    const record = await readPersonalSpaceRecord(owner, "project", projectId);
+    expect(record.favorite).toBe(true);
+    expect(record.eligible).toBe(true);
+    expect(record.rowVersion).toBeGreaterThan(0);
+    await expect(readPersonalSpaceRecord(other, "project", projectId)).rejects.toMatchObject({ httpStatus: 404 });
+  });
 });
diff --git a/projects/sfia-studio-next/web/tests/unit/portfolio-organization.test.ts b/projects/sfia-studio-next/web/tests/unit/portfolio-organization.test.ts
index aed69179..00fed3bc 100644
--- a/projects/sfia-studio-next/web/tests/unit/portfolio-organization.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/portfolio-organization.test.ts
@@ -2,8 +2,8 @@ import { describe, expect, it } from "vitest";
 import { acceptNavigationKey, destinationIndex, rememberNavigationKey } from "@/domains/identity/portfolio-organization";
 import {
   classifyPortfolioResponse,
-  intentionMatchesBoard,
   portfolioMutationFollowUp,
+  portfolioReadReview,
 } from "@/components/portfolio/PersonalPortfolio";

 describe("portfolio organization rules", () => {
@@ -27,36 +27,32 @@ describe("portfolio organization rules", () => {
     expect(acceptNavigationKey(remembered, `${other}:2`)).toBe(true);
   });

-  it("keeps an unknown mutation blocked until the relevant state is reread", () => {
-    expect(classifyPortfolioResponse(503, { message: "unavailable" })).toBe("unknown");
-    expect(classifyPortfolioResponse(500, {})).toBe("unknown");
-    expect(classifyPortfolioResponse(200, {})).toBe("unknown");
-    expect(classifyPortfolioResponse(200, { rowVersion: 2, favorite: true })).toBe("confirmed");
-    expect(classifyPortfolioResponse(404, { error: "missing" })).toBe("refused");
-    expect(classifyPortfolioResponse(409, { message: "conflict" })).toBe("conflict");
-    expect(portfolioMutationFollowUp({ outcome: "unknown", reread: "failed" })).toEqual({
-      uncertain: true,
+  it("reopens a refused intention after the current owner state is reread", () => {
+    expect(classifyPortfolioResponse(503, { message: "unavailable" }, "favorite")).toBe("unknown");
+    expect(classifyPortfolioResponse(200, { version: 4 }, "favorite")).toBe("unknown");
+    expect(classifyPortfolioResponse(200, { rowVersion: 2, favorite: true }, "favorite")).toBe("confirmed");
+    expect(classifyPortfolioResponse(200, { version: 3 }, "order")).toBe("confirmed");
+    expect(classifyPortfolioResponse(409, { message: "conflict" }, "preference")).toBe("conflict");
+    expect(portfolioReadReview(200)).toBe("reviewed");
+    expect(portfolioReadReview(404)).toBe("reviewed");
+    expect(portfolioReadReview(500)).toBe("failed");
+    expect(portfolioMutationFollowUp({ outcome: "conflict", reread: "reviewed" })).toEqual({
+      uncertain: false,
       retry: false,
-      blockFurtherMutations: true,
+      blockFurtherMutations: false,
     });
-    expect(portfolioMutationFollowUp({ outcome: "unknown", reread: "unverified" })).toEqual({
+    expect(portfolioMutationFollowUp({ outcome: "conflict", reread: "failed" }).blockFurtherMutations).toBe(true);
+    expect(portfolioMutationFollowUp({ outcome: "unknown", reread: "failed" })).toEqual({
       uncertain: true,
       retry: false,
       blockFurtherMutations: true,
     });
-    expect(portfolioMutationFollowUp({ outcome: "unknown", reread: "matched" })).toEqual({
+    expect(portfolioMutationFollowUp({ outcome: "unknown", reread: "reviewed" })).toEqual({
       uncertain: false,
       retry: false,
       blockFurtherMutations: false,
     });
     expect(portfolioMutationFollowUp({ outcome: "confirmed", reread: "failed" }).blockFurtherMutations).toBe(true);
-    expect(portfolioMutationFollowUp({ outcome: "refused", reread: "not-attempted" }).uncertain).toBe(false);
-    const board = {
-      items: [{ spaceType: "preparation" as const, id: "prep_1", favorite: false, archived: false }],
-      preferences: { view: "list", sort: "recent", version: 2 },
-    };
-    expect(intentionMatchesBoard({ kind: "favorite", spaceType: "preparation", spaceId: "prep_1", desired: true, knownVersion: 1 }, board)).toBe(false);
-    expect(intentionMatchesBoard({ kind: "favorite", spaceType: "preparation", spaceId: "prep_absent", desired: true, knownVersion: 1 }, board)).toBe(false);
-    expect(intentionMatchesBoard({ kind: "preference", view: "grid", knownVersion: 1 }, { ...board, preferences: { view: "grid", sort: "recent", version: 2 } })).toBe(true);
+    expect(portfolioMutationFollowUp({ outcome: "refused", reread: "not-attempted" }).retry).toBe(false);
   });
 });
```
