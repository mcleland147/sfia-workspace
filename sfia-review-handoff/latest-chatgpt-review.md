# Review Pack — complément A, portefeuille personnel

Date : 28 novembre 2026, 14:10 CET.
Cycle : 08 Delivery / implémentation. Profil Standard. Typologie INC.
Périmètre : fiabilisation fonctionnelle D1, axes A-01 à A-06. Complément B non engagé.

## Identité Git

Dépôt : mcleland147/sfia-workspace.
Branche : sfia/next-ml5-integrated-delivery-20261123.
Entrée : c0be75b23ce0c2b738b5a6b32efc9ac4494cea5e, arbre 56aa418960f5565c42d0e3c067cb6dcc4e3beaa1, parent e8022d5893271907e66783a9ddc7a9da7a25f097.
Sortie : 561b7277703aeea46f15f1b642efb4d8f57ed285, arbre 1f18ed384324792d62cf748602b21485e0cdf839, parent c0be75b23ce0c2b738b5a6b32efc9ac4494cea5e.
Base main et merge-base : 997897fd7cf914771e7d08e8030dc7123fab7d25.
Push fast-forward : c0be75b2..561b7277. Aucune CI distante observée. Aucune PR ouverte.
Message : fix(next): make personal portfolio reads and writes reliable.

## Sources lues

Contrats portefeuille à 46215293. Suivi v0.22 §27.3 à d9364d7d, blob e36d1875. Ancien handoff d42a7fb8, blob 72998592, non réutilisé comme preuve de complétude. Schéma 028 et code D1 au HEAD d'entrée. CKC 08 en guidance seulement.

## Qualification

Aucune migration. Le schéma 028 suffit. Le verrou retenu est pg_advisory_xact_lock par Pilote, clé distincte des verrous D2. La projection reste une union SQL des projets possédés et des préparations OPEN non rattachées. Le complément graphique reste hors cycle.

## Défauts d'entrée

Lecture : filtre, tri et page après chargement de la collection, sans effectifs de groupe.
Écriture : un SELECT FOR UPDATE sur une ligne absente ne sérialise pas la première mutation.
Ordre : la route HTTP n'appliquait pas le contexte de collection, donc tout déplacement répondait 409. Le glisser-déposer perdait l'identité quand le navigateur ne relisait pas la charge utile.
Ouverture : une seconde exécution du même effet créait une nouvelle clé et avançait l'horodatage.
Rail : chargement unique au montage, donc un changement de Pilote ou une mutation pouvait laisser l'ancienne projection.

## Corrections

Projection SQL bornée, compteurs, effectifs et curseur lié aux critères.
Verrou transactionnel par Pilote avant chaque écriture D1. Version périmée : 409.
Ordre accepté seulement pour la collection courante, filtre Tout, sans recherche. La route transmet ce contexte. La restauration décale les positions courantes.
Le signal réutilise la clé du même document tant qu'une nouvelle note d'entrée n'est pas posée. Une séquence plus ancienne du même onglet ne change pas la date.
Le rail ignore une réponse ancienne et se relit quand le tableau a été relu. Les mutations sont à vol unique. Un échec réseau ne relance pas l'intention.

Limite assumée : un autre onglet peut encore faire avancer la date selon l'ordre d'arrivée, parce que la table ne conserve que la dernière clé. Aucune colonne nouvelle n'a été ajoutée.

## Preuves exécutées

Tests unitaires et PostgreSQL : 9 tests, 3 fichiers, tous passés. Ils couvrent l'indice de destination, la clé de navigation, la première écriture concurrente, le refus d'un ordre filtré, les effectifs de groupe et le contrat A1 existant.
Navigateur isolé : tests/e2e/personal-portfolio.spec.ts, 1 test passé en 31,4 s sur http://127.0.0.1:3101, base sfia_next_e2e, schéma 028. Le serveur de test historique en webpack ne démarre pas : il tente de compiler les cartes de déclaration de @cursor/sdk. La preuve a été obtenue avec Turbopack, la même base isolée et les mêmes variables d'environnement. next.config.ts n'a pas été modifié.
Le parcours a exercé les trois vues, les compteurs, la recherche périmée, l'ordre au clavier, le glisser-déposer, le favori à double clic, la persistance après rechargement et dans un second contexte, la pagination de 26 préparations sans doublon, l'échec réseau sans second envoi, l'archive, le lien direct, la restauration, la recherche du rail et l'isolation du Pilote B, y compris un accès direct refusé en 404.
TypeScript : 34 diagnostics à l'entrée et à la sortie, diff vide. Aucun diagnostic nouveau dans les fichiers du portefeuille. Les erreurs historiques hors périmètre n'ont pas été corrigées.
Build de production : réussi. BUILD_ID GK3KXSzEr-wzWmiPf5xdG. Runtime DEV : 127.0.0.1:3100, PID 9956. GET /api/portfolio après login de test : 200, avec compteurs, groupes et total filtré. RECETTE : PID 58965 inchangé sur :3200. La base sfia_next_recette_ml4 n'a pas la table de préférences. Aucune migration lancée.

## Matrice A

A-01 | collection chargée puis filtrée en mémoire | projection SQL, effectifs, curseur | PostgreSQL et pagination navigateur | prouvé | tenu
A-02 | première écriture non sérialisée | verrou transactionnel par Pilote | transactions concurrentes | prouvé | tenu
A-03 | ordre sous filtre et cible mal placée | garde de collection et déplacement avant la cible | PostgreSQL et clavier plus glisser-déposer | prouvé | tenu
A-04 | seconde ouverture induite par le cycle du document | clé de note et réutilisation dans le même document | un seul POST d'ouverture observé au navigateur | prouvé pour le même onglet | un autre onglet reste à l'ordre d'arrivée
A-05 | rail figé et réponses anciennes | relecture corrélée et vol unique | navigateur | prouvé | tenu
A-06 | parcours non exercés au navigateur | scénario isolé | navigateur | organisation, persistance, archive, isolation, ouverture du sas et reprise prouvées | le rattachement D2 n'a pas été rejoué

## Matrice P

P01 lecture et compteurs : implémenté, preuve PostgreSQL et navigateur. Réserve visuelle au complément B.
P02 dernière ouverture : implémenté, horodatage serveur, même onglet prouvé. Réserve multi-onglet documentée.
P03 vues et recherche : implémenté, navigateur. Réserve visuelle au complément B.
P04 pagination : implémenté, 26 éléments sans doublon au navigateur.
P05 favoris et rail : implémenté, synchronisation sans rechargement complet prouvée.
P06 ordre : implémenté, clavier et glisser-déposer prouvés.
P07 favori concurrent et version : implémenté, PostgreSQL. Le navigateur a exercé le double clic et le 409 de contrat côté service.
P08 archive : implémenté, dialogue, lien direct et restauration prouvés.
P09 ordre durable et restauration : implémenté, positions conservées puis décalées.
P10 isolation et intégrité d'interaction : isolation navigateur prouvée. Le rattachement métier D2 n'a pas été rejoué.

PF-A01, PF-A02, PF-A03, PF-A05 et PF-A07 : comportements fonctionnels couverts par les preuves ci-dessus.
PF-A04 et PF-A06 : hors périmètre.
PF-A08 : preuve visuelle reportée au complément B.

## Réserves

R-A04-TABS. Un second onglet peut avancer la date d'ouverture. La table ne garde que la dernière clé. Aucune migration n'est proposée.
R-A06-ATTACH. Le bouton de rattachement du sas n'a pas été exercé dans ce parcours. Le code D2 n'a pas été modifié. La sortie est un parcours E2E du conducteur existant, sans changement de D2.
R-E2E-WEBPACK. Le serveur de test webpack existant ne compile pas @cursor/sdk. La preuve navigateur a utilisé Turbopack sur la lane isolée. Aucun changement de configuration n'a été fait.

## Hors cycle

Complément B, mandats 2 à 6, G2 visuel, F2, RECETTE, LIVE, PR, merge et release. Mandat 1 reste ouvert. Livraison 1 non acceptée. Aucune adoption.

## Verdict proposé

READY WITH RESERVES — COMPLEMENT A.

Les six axes correctifs D1 sont réalisés et exercés. Les deux réserves fonctionnelles sont bornées : l'ordre d'arrivée entre onglets, et le rattachement D2 non rejoué. Elles ne demandent ni migration ni nouvelle autorité. Morris décide de la sortie du complément A.

## Diff du commit

Le diff complet du commit 561b7277703aeea46f15f1b642efb4d8f57ed285 suit. Il contient les fichiers créés en entier et les modifications.

diff --git a/projects/sfia-studio-next/construction/convergence-ux-ui-globale/portefeuille/as-built-portefeuille-personnel.md b/projects/sfia-studio-next/construction/convergence-ux-ui-globale/portefeuille/as-built-portefeuille-personnel.md
index b96cc849..a1e5f44b 100644
--- a/projects/sfia-studio-next/construction/convergence-ux-ui-globale/portefeuille/as-built-portefeuille-personnel.md
+++ b/projects/sfia-studio-next/construction/convergence-ux-ui-globale/portefeuille/as-built-portefeuille-personnel.md
@@ -1,9 +1,38 @@
 # As-built — Portefeuille personnel et navigation

-Date : 28 novembre 2026. Mandat 1. Classe NO RELEASE.
+Date : 28 novembre 2026. Mandat 1, complément A. Classe NO RELEASE.
+Schéma 028 inchangé. Aucune migration 029. Complément B non engagé.
+
+## Complément A — lectures et écritures
+
+La lecture du tableau ne charge plus la collection entière en mémoire.
+Le filtre, la recherche, le tri et la page sont exécutés par PostgreSQL sur l'union des projets du Pilote et des préparations OPEN non rattachées.
+Les compteurs portent sur les espaces courants. Les effectifs de groupe et le total filtré portent sur le résultat complet, pas sur la page.
+L'aperçu reste à 5. La collection déployée reste à 25. Le curseur est lié au tri, au filtre, à la recherche et au périmètre. Un curseur d'une autre lecture est refusé.
+
+Les écritures D1 prennent un verrou transactionnel par Pilote, distinct des verrous D2.
+La première écriture et les écritures suivantes se sérialisent ainsi. Une version périmée répond 409. L'éligibilité propriétaire est revérifiée dans le verrou.
+
+L'ordre personnalisé n'est accepté que sur la collection courante, filtre Tout, sans recherche.
+Le déplacement se fait avant la cible, dans les deux sens. Une cible absente ne réussit pas.
+L'archivage conserve la position. La restauration décale les positions courantes à partir de cette valeur pour éviter une collision.
+
+Le signal d'ouverture n'utilise plus l'origine de performance du document comme identité de l'intention.
+Une note d'entrée est posée avant la navigation depuis le portefeuille ou un favori.
+Le même onglet ignore une clé déjà envoyée ou une séquence plus ancienne.
+Un remontage du même document sans nouvelle note ne crée pas une seconde ouverture.
+Un autre onglet peut encore faire avancer l'horodatage selon l'ordre d'arrivée : la table ne conserve que la dernière clé.
+Un rechargement sans note, un échec HTTP et un espace archivé ne changent pas la date. La navigation n'est pas bloquée.
+
+Le rail relit les favoris quand le tableau change, et ignore une réponse plus ancienne.
+Les compteurs filtrent la collection. La recherche du rail interroge les espaces du Pilote. Le lien Archives ouvre le périmètre archivé.
+Une mutation en cours n'est pas relancée. Un 409 déclenche une relecture. Un échec réseau laisse le résultat inconnu et ne renvoie pas l'intention.

 ## G2

+La transposition graphique, les 27 états, le responsive et le zoom restent au complément B.
+G2 visuel global : non passé. F2 : non passé.
+
 Page Figma 14, file `itgvCulInEnFY6DvgIegvP`, session `2145537b-caa2-4645-81f0-0574d451d8a5`.
 La liste nominale `1420:176` mesure 1680×970, rail 246, bandeau 70, contenu 1434×900, synthèse 1354×136, reprise 1354×158, lignes de 50 px.
 La synthèse `1420:250` utilise le panneau `#151d2c`, le filet `#273248`, l'encre `#f2f4fc` et le texte secondaire `#a5b1c5`.
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index f5f32d59..54bfcfd5 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -1,3 +1,14 @@
+## delivery_id: DELIV-2026-11-28-ML5-PORTFOLIO-RELIABILITY-DEV
+
+- **date_local**: 2026-11-28 (Europe/Paris)
+- **lane**: DEV only — complément A du mandat 1, fiabilisation D1
+- **branch**: `sfia/next-ml5-integrated-delivery-20261123`
+- **HEAD_base**: `c0be75b23ce0c2b738b5a6b32efc9ac4494cea5e`
+- **commit**: `fix(next): make personal portfolio reads and writes reliable`
+- **schema_revision**: inchangé, `028_pilot_portfolio_organization`
+- **scope**: projection SQL bornée, verrou d'écriture par Pilote, ordre gardé, signal d'ouverture dédupliqué, synchronisation du rail
+- **classe**: NO RELEASE · compatible corrective · LIVE NOT RUN · CI NOT RUN · complément B non engagé
+
 ## delivery_id: DELIV-2026-11-28-ML5-PORTFOLIO-DEV

 - **date_local**: 2026-11-28 (Europe/Paris)
diff --git a/projects/sfia-studio-next/web/src/app/api/portfolio/order/route.ts b/projects/sfia-studio-next/web/src/app/api/portfolio/order/route.ts
index ed88a5f1..2b5c8459 100644
--- a/projects/sfia-studio-next/web/src/app/api/portfolio/order/route.ts
+++ b/projects/sfia-studio-next/web/src/app/api/portfolio/order/route.ts
@@ -17,6 +17,7 @@ export async function POST(req: Request) {
       direction?: "up" | "down";
       beforeSpaceId?: string | null;
       beforeSpaceType?: string | null;
+      context?: { filter?: string; query?: string; scope?: string };
     };
     if (!body.spaceType || !body.spaceId || !Number.isInteger(body.expectedVersion)) {
       return json({ error: "INVALID_REQUEST" }, 400);
@@ -28,6 +29,7 @@ export async function POST(req: Request) {
       direction: body.direction,
       beforeSpaceId: body.beforeSpaceId,
       beforeSpaceType: body.beforeSpaceType ? parseSpaceType(body.beforeSpaceType) : null,
+      context: body.context,
     });
     return json({ ok: true, ...result });
   } catch (e) {
diff --git a/projects/sfia-studio-next/web/src/app/api/portfolio/route.ts b/projects/sfia-studio-next/web/src/app/api/portfolio/route.ts
index ab2e74e4..03389df2 100644
--- a/projects/sfia-studio-next/web/src/app/api/portfolio/route.ts
+++ b/projects/sfia-studio-next/web/src/app/api/portfolio/route.ts
@@ -17,9 +17,7 @@ export async function GET(req: Request) {
   try {
     const session = await requireStudioSession();
     const url = new URL(req.url);
-    const portfolio = await loadPortfolio(session.pilotId, {
-      preparationsCursor: url.searchParams.get("preparationsCursor"),
-    });
+    const preparationsCursor = url.searchParams.get("preparationsCursor");
     const board = await loadPersonalBoard(session.pilotId, {
       scope: url.searchParams.get("scope"),
       filter: url.searchParams.get("filter"),
@@ -27,6 +25,14 @@ export async function GET(req: Request) {
       cursor: url.searchParams.get("cursor"),
       preview: url.searchParams.get("expanded") !== "1",
     });
+    const portfolio = preparationsCursor
+      ? await loadPortfolio(session.pilotId, { preparationsCursor })
+      : {
+          kind: board.counters.projects + board.counters.preparations === 0 ? "empty" : "ready",
+          projects: [],
+          openPreparations: board.counters.preparations,
+          preparations: { items: [], nextCursor: null },
+        };
     return json({
       session: {
         pilotId: session.pilotId,
diff --git a/projects/sfia-studio-next/web/src/app/portfolio/page.tsx b/projects/sfia-studio-next/web/src/app/portfolio/page.tsx
index 3bb85476..7c26c763 100644
--- a/projects/sfia-studio-next/web/src/app/portfolio/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/portfolio/page.tsx
@@ -1,7 +1,12 @@
 "use client";

+import { Suspense } from "react";
 import { PersonalPortfolio } from "@/components/portfolio/PersonalPortfolio";

 export default function PortfolioPage() {
-  return <PersonalPortfolio />;
+  return (
+    <Suspense fallback={<div data-testid="portfolio-loading">Chargement du portefeuille…</div>}>
+      <PersonalPortfolio />
+    </Suspense>
+  );
 }
diff --git a/projects/sfia-studio-next/web/src/components/portfolio/PersonalPortfolio.tsx b/projects/sfia-studio-next/web/src/components/portfolio/PersonalPortfolio.tsx
index a52ab5aa..87cbd813 100644
--- a/projects/sfia-studio-next/web/src/components/portfolio/PersonalPortfolio.tsx
+++ b/projects/sfia-studio-next/web/src/components/portfolio/PersonalPortfolio.tsx
@@ -1,9 +1,11 @@
 "use client";

 import { useCallback, useEffect, useRef, useState } from "react";
-import { useRouter } from "next/navigation";
+import { useRouter, useSearchParams } from "next/navigation";
 import { runOpenPreparation, subscribeOpenPreparationBusy } from "@/lib/open-preparation";
 import type { PersonalBoard, PersonalSpace, PortfolioFilter, PortfolioSort, PortfolioView } from "@/domains/identity/portfolio-organization";
+import { notePersonalSpaceEntry } from "./PersonalSpaceOpenSignal";
+import { notifyPortfolioChanged } from "./PersonalRailFavorites";
 import "./personal-portfolio.css";

 type BoardResponse = {
@@ -31,6 +33,9 @@ function hrefFor(space: PersonalSpace): string {

 export function PersonalPortfolio() {
   const router = useRouter();
+  const params = useSearchParams();
+  const busy = useRef(false);
+  const draggedSpace = useRef("");
   const [board, setBoard] = useState<PersonalBoard | null>(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState("");
@@ -49,8 +54,8 @@ export function PersonalPortfolio() {

   useEffect(() => subscribeOpenPreparationBusy(setCreating), []);

-  const load = useCallback(async (cursor?: string | null) => {
-    const requestId = ++requestSeq.current;
+  const load = useCallback(async (cursor?: string | null, issuedId?: number) => {
+    const requestId = issuedId ?? ++requestSeq.current;
     const params = new URLSearchParams();
     if (scope === "archive") params.set("scope", "archive");
     if (filter !== "all") params.set("filter", filter);
@@ -70,22 +75,39 @@ export function PersonalPortfolio() {
       setLoading(false);
       return;
     }
-    setBoard((prev) =>
-      cursor && prev ? { ...body.board!, items: [...prev.items, ...body.board!.items] } : body.board!,
-    );
+    setBoard((prev) => {
+      if (!cursor || !prev) return body.board!;
+      const seen = new Set(prev.items.map((item) => `${item.spaceType}:${item.id}`));
+      const extra = body.board!.items.filter((item) => !seen.has(`${item.spaceType}:${item.id}`));
+      return { ...body.board!, items: [...prev.items, ...extra] };
+    });
+    notifyPortfolioChanged();
     setError("");
     setLoading(false);
   }, [expanded, filter, query, router, scope]);

   useEffect(() => {
+    const nextFilter = params.get("filter");
+    if (nextFilter === "all" || nextFilter === "projects" || nextFilter === "preparations" || nextFilter === "favorites") {
+      setFilter(nextFilter);
+    }
+    setScope(params.get("scope") === "archive" ? "archive" : "current");
+    const nextQuery = params.get("q");
+    if (nextQuery !== null) setQuery(nextQuery);
+  }, [params]);
+
+  useEffect(() => {
+    const requestId = ++requestSeq.current;
     const handle = setTimeout(() => {
       setLoading(true);
-      void load();
+      void load(null, requestId);
     }, 180);
     return () => clearTimeout(handle);
   }, [load]);

   async function mutate(path: string, method: string, payload: unknown) {
+    if (busy.current) return;
+    busy.current = true;
     setPending(path);
     setUncertain("");
     setNotice("");
@@ -97,7 +119,7 @@ export function PersonalPortfolio() {
       });
       const body = (await response.json().catch(() => ({}))) as { error?: string; message?: string };
       if (response.status === 409) {
-        setNotice(body.message || "Conflit : une autre modification a été enregistrée.");
+        setNotice(body.message || "Conflit : une autre modification a été enregistrée. Relisez avant de recommencer.");
         await load();
         return;
       }
@@ -105,11 +127,17 @@ export function PersonalPortfolio() {
         setNotice(body.message || body.error || "La modification n'a pas abouti.");
         return;
       }
+      notifyPortfolioChanged();
       await load();
     } catch {
-      setUncertain("Résultat incertain. Le portefeuille va être relu, sans relancer l'action.");
-      await load();
+      setUncertain("Résultat incertain. L'action n'est pas relancée.");
+      try {
+        await load();
+      } catch {
+        setUncertain("Résultat incertain. La relecture a échoué et l'action n'a pas été relancée.");
+      }
     } finally {
+      busy.current = false;
       setPending("");
       setConfirm(null);
       setConfirmRestore(null);
@@ -145,6 +173,9 @@ export function PersonalPortfolio() {
     );
   }
   if (!board) return null;
+  const canReorder =
+    board.preferences.sort === "custom" && filter === "all" && !query.trim() && scope === "current";
+  const orderContext = { filter, query: query.trim(), scope };
   const groups = board.preferences.view === "grouped"
     ? (["project", "preparation"] as const).map((type) => ({
         type,
@@ -160,11 +191,21 @@ export function PersonalPortfolio() {
       <article
         key={`${space.spaceType}-${space.id}`}
         className={board!.preferences.view === "grid" ? "personal-portfolio-card" : "personal-portfolio-row"}
-        draggable={board!.preferences.sort === "custom" && filter === "all" && !query}
-        onDragStart={(event) => event.dataTransfer.setData("text/plain", `${space.spaceType}:${space.id}`)}
-        onDragOver={(event) => event.preventDefault()}
+        draggable={canReorder}
+        onDragStart={(event) => {
+          const token = `${space.spaceType}:${space.id}`;
+          draggedSpace.current = token;
+          event.dataTransfer.setData("text/plain", token);
+          event.dataTransfer.effectAllowed = "move";
+        }}
+        onDragOver={(event) => {
+          if (canReorder) event.preventDefault();
+        }}
         onDrop={(event) => {
-          const raw = event.dataTransfer.getData("text/plain");
+          if (!canReorder) return;
+          event.preventDefault();
+          const raw = event.dataTransfer.getData("text/plain") || draggedSpace.current;
+          draggedSpace.current = "";
           const [spaceType, spaceId] = raw.split(":");
           if (!spaceId || spaceId === space.id) return;
           void mutate("/api/portfolio/order", "POST", {
@@ -173,11 +214,12 @@ export function PersonalPortfolio() {
             beforeSpaceType: space.spaceType,
             beforeSpaceId: space.id,
             expectedVersion: board!.preferences.version,
+            context: orderContext,
           });
         }}
         data-testid={space.spaceType === "project" ? `open-project-${space.id}` : `resume-prep-${space.id}`}
       >
-        <a href={hrefFor(space)}>{space.label}</a>
+        <a href={hrefFor(space)} onClick={() => notePersonalSpaceEntry(space.spaceType, space.id)}>{space.label}</a>
         <span className="personal-portfolio-meta">{space.spaceType === "project" ? "Projet" : "Préparation"}</span>
         <span className="personal-portfolio-meta">{activity}</span>
         <span>
@@ -194,10 +236,10 @@ export function PersonalPortfolio() {
           >
             {space.favorite ? "★" : "☆"}
           </button>
-          {board!.preferences.sort === "custom" ? (
+          {canReorder ? (
             <>
-              <button type="button" aria-label="Monter" onClick={() => void mutate("/api/portfolio/order", "POST", { spaceType: space.spaceType, spaceId: space.id, direction: "up", expectedVersion: board!.preferences.version })}>↑</button>
-              <button type="button" aria-label="Descendre" onClick={() => void mutate("/api/portfolio/order", "POST", { spaceType: space.spaceType, spaceId: space.id, direction: "down", expectedVersion: board!.preferences.version })}>↓</button>
+              <button type="button" aria-label="Monter" onClick={() => void mutate("/api/portfolio/order", "POST", { spaceType: space.spaceType, spaceId: space.id, direction: "up", expectedVersion: board!.preferences.version, context: orderContext })}>↑</button>
+              <button type="button" aria-label="Descendre" onClick={() => void mutate("/api/portfolio/order", "POST", { spaceType: space.spaceType, spaceId: space.id, direction: "down", expectedVersion: board!.preferences.version, context: orderContext })}>↓</button>
             </>
           ) : null}
           <button type="button" aria-label="Actions de l'espace" onClick={() => setMenu(menu === space.id ? null : space.id)}>…</button>
@@ -235,11 +277,11 @@ export function PersonalPortfolio() {
       {pending ? <p role="status">Modification en cours…</p> : null}

       <section className="personal-portfolio-synthesis" aria-label="Synthèse du portefeuille">
-        <div className="personal-portfolio-stat"><span>Projets</span><strong data-testid="portfolio-count-projects">{formatCount(board.counters.projects)}</strong><em>Espaces de travail</em></div>
+        <button type="button" className="personal-portfolio-stat" onClick={() => setFilter("projects")}><span>Projets</span><strong data-testid="portfolio-count-projects">{formatCount(board.counters.projects)}</strong><em>Espaces de travail</em></button>
         <div className="personal-portfolio-rule" />
-        <div className="personal-portfolio-stat"><span>Préparations</span><strong data-testid="portfolio-count-preparations">{formatCount(board.counters.preparations)}</strong><em>À reprendre</em></div>
+        <button type="button" className="personal-portfolio-stat" onClick={() => setFilter("preparations")}><span>Préparations</span><strong data-testid="portfolio-count-preparations">{formatCount(board.counters.preparations)}</strong><em>À reprendre</em></button>
         <div className="personal-portfolio-rule" />
-        <div className="personal-portfolio-stat"><span>Favoris</span><strong data-testid="portfolio-count-favorites">{formatCount(board.counters.favorites)}</strong><em>Accès rapide</em></div>
+        <button type="button" className="personal-portfolio-stat" onClick={() => setFilter("favorites")}><span>Favoris</span><strong data-testid="portfolio-count-favorites">{formatCount(board.counters.favorites)}</strong><em>Accès rapide</em></button>
       </section>

       {board.resume && scope === "current" ? (
@@ -250,7 +292,7 @@ export function PersonalPortfolio() {
             <p>{board.resume.activityLabel} · {formatWhen(board.resume.lastOpenedAt || board.resume.createdAt)}</p>
           </div>
           <div className="personal-portfolio-grow" />
-          <a className="btn" href={hrefFor(board.resume)}>Continuer</a>
+          <a className="btn" href={hrefFor(board.resume)} onClick={() => notePersonalSpaceEntry(board.resume!.spaceType, board.resume!.id)}>Continuer</a>
         </section>
       ) : null}

@@ -323,7 +365,7 @@ export function PersonalPortfolio() {
         ) : groups ? (
           groups.map((group) => (
             <div key={group.type} className="personal-portfolio-group">
-              <h3>{group.type === "project" ? "Projets" : "Préparations"}</h3>
+              <h3>{group.type === "project" ? `Projets · ${board.groups.project}` : `Préparations · ${board.groups.preparation}`}</h3>
               {group.items.map(renderSpace)}
             </div>
           ))
diff --git a/projects/sfia-studio-next/web/src/components/portfolio/PersonalRailFavorites.tsx b/projects/sfia-studio-next/web/src/components/portfolio/PersonalRailFavorites.tsx
index 5c27887e..24908bff 100644
--- a/projects/sfia-studio-next/web/src/components/portfolio/PersonalRailFavorites.tsx
+++ b/projects/sfia-studio-next/web/src/components/portfolio/PersonalRailFavorites.tsx
@@ -2,32 +2,65 @@

 import { useEffect, useState } from "react";
 import type { PersonalSpace } from "@/domains/identity/portfolio-organization";
+import { notePersonalSpaceEntry } from "./PersonalSpaceOpenSignal";
+
+export const PORTFOLIO_CHANGED = "sfia-portfolio-changed";
+
+export function notifyPortfolioChanged() {
+  window.dispatchEvent(new Event(PORTFOLIO_CHANGED));
+}

 export function PersonalRailFavorites() {
   const [items, setItems] = useState<PersonalSpace[] | null>(null);
+  const [query, setQuery] = useState("");
+
   useEffect(() => {
+    let requestId = 0;
     let cancelled = false;
-    void fetch("/api/portfolio/favorites")
-      .then((response) => (response.ok ? response.json() : null))
-      .then((body: { favorites?: PersonalSpace[] } | null) => {
-        if (!cancelled) setItems(body?.favorites ?? []);
-      })
-      .catch(() => {
-        if (!cancelled) setItems([]);
-      });
+    async function load() {
+      const issued = ++requestId;
+      setItems([]);
+      try {
+        const response = await fetch("/api/portfolio/favorites");
+        const body = response.ok ? ((await response.json()) as { favorites?: PersonalSpace[] }) : null;
+        if (cancelled || issued !== requestId) return;
+        setItems(body?.favorites ?? []);
+      } catch {
+        if (!cancelled && issued === requestId) setItems([]);
+      }
+    }
+    void load();
+    const onChange = () => void load();
+    window.addEventListener(PORTFOLIO_CHANGED, onChange);
     return () => {
       cancelled = true;
+      window.removeEventListener(PORTFOLIO_CHANGED, onChange);
     };
   }, []);
-  if (!items || items.length === 0) return null;
+
   return (
     <div data-testid="portfolio-rail-favorites">
-      <div className="studio-rail-section">Favoris</div>
-      {items.map((item) => (
+      <form action="/portfolio" className="px-2 pb-2">
+        <input
+          name="q"
+          aria-label="Recherche rapide des espaces"
+          placeholder="Rechercher un espace"
+          value={query}
+          onChange={(event) => setQuery(event.target.value)}
+          className="w-full"
+          data-testid="portfolio-rail-search"
+        />
+      </form>
+      <a className="studio-rail-nav-item" href="/portfolio?scope=archive" data-testid="portfolio-rail-archives">
+        Archives
+      </a>
+      {items && items.length > 0 ? <div className="studio-rail-section">Favoris</div> : null}
+      {items?.map((item) => (
         <a
           key={`${item.spaceType}-${item.id}`}
           className="studio-rail-nav-item"
           href={item.spaceType === "project" ? `/projects/${item.id}?surface=travail` : `/preparations/${item.id}?resume=1`}
+          onClick={() => notePersonalSpaceEntry(item.spaceType, item.id)}
         >
           {item.label}
         </a>
diff --git a/projects/sfia-studio-next/web/src/components/portfolio/PersonalSpaceOpenSignal.tsx b/projects/sfia-studio-next/web/src/components/portfolio/PersonalSpaceOpenSignal.tsx
index 7cc9c843..d46d110e 100644
--- a/projects/sfia-studio-next/web/src/components/portfolio/PersonalSpaceOpenSignal.tsx
+++ b/projects/sfia-studio-next/web/src/components/portfolio/PersonalSpaceOpenSignal.tsx
@@ -2,10 +2,24 @@

 import { useEffect } from "react";

+const ENTRY_KEY = "sfia-space-entry";
+const TAB_KEY = "sfia-tab";
+const SEQ_KEY = "sfia-open-seq";
+
+/** Same document only. A remount without a new entry note reuses this key. */
+let rememberedEntry: { space: string; key: string } | null = null;
+
+export function notePersonalSpaceEntry(spaceType: "project" | "preparation", spaceId: string) {
+  const tab = sessionStorage.getItem(TAB_KEY) || crypto.randomUUID();
+  sessionStorage.setItem(TAB_KEY, tab);
+  const seq = Number(sessionStorage.getItem(SEQ_KEY) || "0") + 1;
+  sessionStorage.setItem(SEQ_KEY, String(seq));
+  sessionStorage.setItem(ENTRY_KEY, JSON.stringify({ spaceType, spaceId, key: `${tab}:${seq}` }));
+}
+
 /**
- * Records one voluntary opening after the space is admitted.
- * A reload, a retry of the same navigation key, or a surface change
- * inside the same document does not advance the timestamp.
+ * Records one admitted entry. A reload, a surface change, a rerender,
+ * or a delayed replay of an older key from the same tab does not advance it.
  */
 export function PersonalSpaceOpenSignal(props: {
   spaceType: "project" | "preparation";
@@ -16,11 +30,32 @@ export function PersonalSpaceOpenSignal(props: {
   useEffect(() => {
     if (!admitted || !spaceId) return;
     const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
-    if (nav?.type === "reload") return;
-    const key = `${spaceType}:${spaceId}:${nav?.type || "navigate"}:${Math.floor(performance.timeOrigin)}`;
-    const storageKey = `sfia-space-open:${spaceType}:${spaceId}`;
-    if (sessionStorage.getItem(storageKey) === key) return;
-    sessionStorage.setItem(storageKey, key);
+    const raw = sessionStorage.getItem(ENTRY_KEY);
+    let noted: { spaceType?: string; spaceId?: string; key?: string } | null = null;
+    if (raw) {
+      try {
+        noted = JSON.parse(raw) as { spaceType?: string; spaceId?: string; key?: string };
+      } catch {
+        noted = null;
+      }
+    }
+    const notedKey =
+      noted && noted.spaceType === spaceType && noted.spaceId === spaceId ? noted.key : undefined;
+    if (nav?.type === "reload" && !notedKey) return;
+    const space = `${spaceType}:${spaceId}`;
+    const tab = sessionStorage.getItem(TAB_KEY) || crypto.randomUUID();
+    sessionStorage.setItem(TAB_KEY, tab);
+    let key = notedKey || (rememberedEntry?.space === space ? rememberedEntry.key : undefined);
+    if (!key) {
+      const seq = Number(sessionStorage.getItem(SEQ_KEY) || "0") + 1;
+      key = `${tab}:${seq}`;
+      sessionStorage.setItem(SEQ_KEY, String(seq));
+    }
+    rememberedEntry = { space, key };
+    const guard = `sfia-open-sent:${key}`;
+    if (sessionStorage.getItem(guard)) return;
+    sessionStorage.setItem(guard, "1");
+    if (notedKey) sessionStorage.removeItem(ENTRY_KEY);
     void fetch(`/api/portfolio/spaces/${spaceType}/${encodeURIComponent(spaceId)}/opened`, {
       method: "POST",
       headers: { "content-type": "application/json" },
diff --git a/projects/sfia-studio-next/web/src/components/portfolio/personal-portfolio.css b/projects/sfia-studio-next/web/src/components/portfolio/personal-portfolio.css
index efc91c4f..278b5c44 100644
--- a/projects/sfia-studio-next/web/src/components/portfolio/personal-portfolio.css
+++ b/projects/sfia-studio-next/web/src/components/portfolio/personal-portfolio.css
@@ -51,6 +51,7 @@
   border-radius: 12px;
 }
 .personal-portfolio-stat { padding: 14px 16px 14px 24px; }
+button.personal-portfolio-stat { text-align: left; background: transparent; color: inherit; border: 0; cursor: pointer; }
 .personal-portfolio-stat span { display: block; color: var(--pf-muted); font-size: 15px; line-height: 21px; }
 .personal-portfolio-stat strong {
   font-size: 46px;
diff --git a/projects/sfia-studio-next/web/src/domains/identity/portfolio-organization.ts b/projects/sfia-studio-next/web/src/domains/identity/portfolio-organization.ts
index 51ea7cba..392a212d 100644
--- a/projects/sfia-studio-next/web/src/domains/identity/portfolio-organization.ts
+++ b/projects/sfia-studio-next/web/src/domains/identity/portfolio-organization.ts
@@ -7,17 +7,13 @@ export type PortfolioSort = "recent" | "name" | "created" | "custom";
 export type PortfolioFilter = "all" | "projects" | "preparations" | "favorites";
 export type PortfolioScope = "current" | "archive";

-export function parseSpaceType(value: string): SpaceType {
-  if (value === "project" || value === "preparation") return value;
-  throw new StudioError("INVALID_REQUEST", "Type d'espace inconnu.", { httpStatus: 400 });
-}
-
 export const PORTFOLIO_PREVIEW_LIMIT = 5;
 export const PORTFOLIO_PAGE_SIZE = 25;

 const VIEWS = new Set<PortfolioView>(["list", "grid", "grouped"]);
 const SORTS = new Set<PortfolioSort>(["recent", "name", "created", "custom"]);
 const FILTERS = new Set<PortfolioFilter>(["all", "projects", "preparations", "favorites"]);
+const PILOT_LOCK = "sfia:d1:organization";

 export type PersonalSpace = {
   spaceType: SpaceType;
@@ -34,6 +30,7 @@ export type PersonalSpace = {

 export type PersonalBoard = {
   counters: { projects: number; preparations: number; favorites: number };
+  groups: { project: number; preparation: number };
   filteredTotal: number;
   preferences: {
     view: PortfolioView;
@@ -55,12 +52,53 @@ type Row = {
   label: string;
   created_at: string;
   last_opened_at: string | null;
+  activity_at: string;
   favorite: boolean;
   archived_at: string | null;
   custom_position: number | null;
   row_version: number;
 };

+type ReadCursor = {
+  sort: PortfolioSort;
+  filter: PortfolioFilter;
+  query: string;
+  scope: PortfolioScope;
+  spaceType: SpaceType;
+  id: string;
+  createdAt: string;
+  activityAt: string;
+  label: string;
+  position: number | null;
+};
+
+export function parseSpaceType(value: string): SpaceType {
+  if (value === "project" || value === "preparation") return value;
+  throw new StudioError("INVALID_REQUEST", "Type d'espace inconnu.", { httpStatus: 400 });
+}
+
+/** Insertion index after the moved row has been removed. Null when the target is absent. */
+export function destinationIndex(length: number, from: number, before: number): number | null {
+  if (from < 0 || from >= length || before < 0 || before >= length) return null;
+  if (from === before) return from;
+  return from < before ? before - 1 : before;
+}
+
+export function acceptNavigationKey(stored: string | null, incoming: string): boolean {
+  const key = incoming.trim();
+  if (!key || stored === key) return false;
+  const next = parseNavigationKey(key);
+  const previous = stored ? parseNavigationKey(stored) : null;
+  if (next && previous && next.tab === previous.tab && next.seq <= previous.seq) return false;
+  return true;
+}
+
+function parseNavigationKey(value: string): { tab: string; seq: number } | null {
+  const match = /^([0-9a-f-]{8,}):(\d+)$/i.exec(value);
+  if (!match) return null;
+  return { tab: match[1], seq: Number(match[2]) };
+}
+
 function asSpace(row: Row): PersonalSpace {
   const opened = row.last_opened_at;
   return {
@@ -77,53 +115,82 @@ function asSpace(row: Row): PersonalSpace {
   };
 }

-function parseView(value: string | null | undefined): PortfolioView {
-  return value && VIEWS.has(value as PortfolioView) ? (value as PortfolioView) : "list";
-}
-
 function collectionSql(pilotId: string) {
   return sql`
-    SELECT * FROM (
-      SELECT
-        'project'::text AS space_type,
-        p.id,
-        p.name AS label,
-        to_char(p.created_at AT TIME ZONE 'UTC', 'YYYY-MM-DD"T"HH24:MI:SS.US"Z"') AS created_at,
-        to_char(o.last_opened_at AT TIME ZONE 'UTC', 'YYYY-MM-DD"T"HH24:MI:SS.US"Z"') AS last_opened_at,
-        COALESCE(o.favorite, false) AS favorite,
-        o.archived_at,
-        o.custom_position,
-        COALESCE(o.row_version, 0) AS row_version
-      FROM projects p
-      LEFT JOIN pilot_space_organization o
-        ON o.owner_pilot_id = p.owner_pilot_id
-       AND o.space_type = 'project'
-       AND o.space_id = p.id
-      WHERE p.owner_pilot_id = ${pilotId}
-      UNION ALL
-      SELECT
-        'preparation'::text,
-        pr.id,
-        COALESCE(NULLIF(pr.preview_name, ''), 'Nouvelle préparation'),
-        to_char(pr.created_at AT TIME ZONE 'UTC', 'YYYY-MM-DD"T"HH24:MI:SS.US"Z"'),
-        to_char(o.last_opened_at AT TIME ZONE 'UTC', 'YYYY-MM-DD"T"HH24:MI:SS.US"Z"'),
-        COALESCE(o.favorite, false),
-        o.archived_at,
-        o.custom_position,
-        COALESCE(o.row_version, 0)
-      FROM preparations pr
-      LEFT JOIN preparation_project_links l ON l.preparation_id = pr.id
-      LEFT JOIN pilot_space_organization o
-        ON o.owner_pilot_id = pr.owner_pilot_id
-       AND o.space_type = 'preparation'
-       AND o.space_id = pr.id
-      WHERE pr.owner_pilot_id = ${pilotId}
-        AND pr.status = 'OPEN'
-        AND l.preparation_id IS NULL
-    ) spaces
+    SELECT
+      'project'::text AS space_type,
+      p.id,
+      p.name AS label,
+      p.created_at,
+      to_char(p.created_at AT TIME ZONE 'UTC', 'YYYY-MM-DD"T"HH24:MI:SS.US"Z"') AS created_text,
+      o.last_opened_at,
+      to_char(o.last_opened_at AT TIME ZONE 'UTC', 'YYYY-MM-DD"T"HH24:MI:SS.US"Z"') AS opened_text,
+      COALESCE(o.last_opened_at, p.created_at) AS activity_at,
+      to_char(COALESCE(o.last_opened_at, p.created_at) AT TIME ZONE 'UTC', 'YYYY-MM-DD"T"HH24:MI:SS.US"Z"') AS activity_text,
+      COALESCE(o.favorite, false) AS favorite,
+      o.archived_at,
+      o.custom_position,
+      COALESCE(o.row_version, 0) AS row_version
+    FROM projects p
+    LEFT JOIN pilot_space_organization o
+      ON o.owner_pilot_id = p.owner_pilot_id
+     AND o.space_type = 'project'
+     AND o.space_id = p.id
+    WHERE p.owner_pilot_id = ${pilotId}
+    UNION ALL
+    SELECT
+      'preparation'::text,
+      pr.id,
+      COALESCE(NULLIF(pr.preview_name, ''), 'Nouvelle préparation'),
+      pr.created_at,
+      to_char(pr.created_at AT TIME ZONE 'UTC', 'YYYY-MM-DD"T"HH24:MI:SS.US"Z"'),
+      o.last_opened_at,
+      to_char(o.last_opened_at AT TIME ZONE 'UTC', 'YYYY-MM-DD"T"HH24:MI:SS.US"Z"'),
+      COALESCE(o.last_opened_at, pr.created_at),
+      to_char(COALESCE(o.last_opened_at, pr.created_at) AT TIME ZONE 'UTC', 'YYYY-MM-DD"T"HH24:MI:SS.US"Z"'),
+      COALESCE(o.favorite, false),
+      o.archived_at,
+      o.custom_position,
+      COALESCE(o.row_version, 0)
+    FROM preparations pr
+    LEFT JOIN preparation_project_links l ON l.preparation_id = pr.id
+    LEFT JOIN pilot_space_organization o
+      ON o.owner_pilot_id = pr.owner_pilot_id
+     AND o.space_type = 'preparation'
+     AND o.space_id = pr.id
+    WHERE pr.owner_pilot_id = ${pilotId}
+      AND pr.status = 'OPEN'
+      AND l.preparation_id IS NULL
   `;
 }

+function orderSql(sort: PortfolioSort) {
+  if (sort === "name") return sql`label ASC, id ASC`;
+  if (sort === "custom") return sql`custom_position ASC NULLS LAST, created_at DESC, id DESC`;
+  if (sort === "recent") return sql`activity_at DESC, id DESC`;
+  return sql`created_at DESC, id DESC`;
+}
+
+function keysetSql(cursor: ReadCursor) {
+  if (cursor.sort === "name") {
+    return sql`AND (label, id) > (${cursor.label}, ${cursor.id})`;
+  }
+  if (cursor.sort === "custom") {
+    const position = cursor.position ?? 2147483647;
+    return sql`AND (
+      COALESCE(custom_position, 2147483647) > ${position}
+      OR (
+        COALESCE(custom_position, 2147483647) = ${position}
+        AND (created_at, id) < (${cursor.createdAt}::timestamptz, ${cursor.id})
+      )
+    )`;
+  }
+  if (cursor.sort === "recent") {
+    return sql`AND (activity_at, id) < (${cursor.activityAt}::timestamptz, ${cursor.id})`;
+  }
+  return sql`AND (created_at, id) < (${cursor.createdAt}::timestamptz, ${cursor.id})`;
+}
+
 export async function loadPersonalBoard(
   pilotId: string,
   input?: {
@@ -142,6 +209,7 @@ export async function loadPersonalBoard(
   const query = (input?.query || "").trim().slice(0, 120);
   const preview = input?.preview !== false && !input?.cursor;
   const limit = preview ? PORTFOLIO_PREVIEW_LIMIT : PORTFOLIO_PAGE_SIZE;
+  const needle = query ? `%${query.replace(/[\\%_]/g, (char) => `\\${char}`)}%` : null;

   const pref = await sql<
     { view: string; sort_mode: string | null; organization_version: number }[]
@@ -152,67 +220,122 @@ export async function loadPersonalBoard(
   `;
   const storedSort = pref[0]?.sort_mode ?? null;
   const sortExplicit = storedSort !== null && SORTS.has(storedSort as PortfolioSort);
-  const rows = await sql<Row[]>`${collectionSql(pilotId)}`;
-  const current = rows.filter((row) => !row.archived_at);
-  const hasSignal = current.some((row) => row.last_opened_at);
+  const signal = await sql<{ present: boolean }[]>`
+    SELECT EXISTS (
+      SELECT 1 FROM (${collectionSql(pilotId)}) spaces
+      WHERE archived_at IS NULL AND last_opened_at IS NOT NULL
+    ) AS present
+  `;
   const sort: PortfolioSort = sortExplicit
     ? (storedSort as PortfolioSort)
-    : hasSignal
+    : signal[0]?.present
       ? "recent"
       : "created";

-  const counters = {
-    projects: current.filter((row) => row.space_type === "project").length,
-    preparations: current.filter((row) => row.space_type === "preparation").length,
-    favorites: current.filter((row) => row.favorite).length,
-  };
-
-  let pool = rows.filter((row) => (scope === "archive" ? Boolean(row.archived_at) : !row.archived_at));
-  if (scope === "current") {
-    if (filter === "projects") pool = pool.filter((row) => row.space_type === "project");
-    if (filter === "preparations") pool = pool.filter((row) => row.space_type === "preparation");
-    if (filter === "favorites") pool = pool.filter((row) => row.favorite);
-  }
-  if (query) {
-    const needle = query.toLocaleLowerCase("fr");
-    pool = pool.filter((row) => row.label.toLocaleLowerCase("fr").includes(needle));
-  }
-  pool.sort((a, b) => compareSpaces(a, b, sort));
-
+  const counts = await sql<
+    { projects: number; preparations: number; favorites: number }[]
+  >`
+    SELECT
+      count(*) FILTER (WHERE space_type = 'project')::int AS projects,
+      count(*) FILTER (WHERE space_type = 'preparation')::int AS preparations,
+      count(*) FILTER (WHERE favorite)::int AS favorites
+    FROM (${collectionSql(pilotId)}) spaces
+    WHERE archived_at IS NULL
+  `;
+  const scopeSql = scope === "archive" ? sql`archived_at IS NOT NULL` : sql`archived_at IS NULL`;
+  const filterSql =
+    scope === "current" && filter === "projects"
+      ? sql`AND space_type = 'project'`
+      : scope === "current" && filter === "preparations"
+        ? sql`AND space_type = 'preparation'`
+        : scope === "current" && filter === "favorites"
+          ? sql`AND favorite`
+          : sql``;
+  const searchSql = needle ? sql`AND label ILIKE ${needle} ESCAPE '\\'` : sql``;
   const cursor = input?.cursor ? decodeCursor(input.cursor) : null;
-  if (cursor && (cursor.sort !== sort || cursor.filter !== filter || cursor.query !== query || cursor.scope !== scope)) {
+  if (
+    cursor &&
+    (cursor.sort !== sort || cursor.filter !== filter || cursor.query !== query || cursor.scope !== scope)
+  ) {
     throw new StudioError("INVALID_REQUEST", "Le curseur ne correspond plus à la lecture.", {
       httpStatus: 400,
     });
   }
-  const start = cursor ? pool.findIndex((row) => row.space_type === cursor.spaceType && row.id === cursor.id) + 1 : 0;
-  if (cursor && start <= 0) {
-    throw new StudioError("INVALID_REQUEST", "Curseur de portefeuille invalide.", { httpStatus: 400 });
-  }
-  const page = pool.slice(start, start + limit);
-  const more = start + limit < pool.length;
-  const last = page[page.length - 1];
-  const resumeRow =
+  const grouped = await sql<{ space_type: SpaceType; n: number }[]>`
+    SELECT space_type, count(*)::int AS n
+    FROM (${collectionSql(pilotId)}) spaces
+    WHERE ${scopeSql} ${filterSql} ${searchSql}
+    GROUP BY space_type
+  `;
+  const filtered = await sql<{ n: number }[]>`
+    SELECT count(*)::int AS n
+    FROM (${collectionSql(pilotId)}) spaces
+    WHERE ${scopeSql} ${filterSql} ${searchSql}
+  `;
+  const page = await sql<Row[]>`
+    SELECT
+      space_type, id, label,
+      created_text AS created_at,
+      opened_text AS last_opened_at,
+      activity_text AS activity_at,
+      favorite, archived_at, custom_position, row_version
+    FROM (${collectionSql(pilotId)}) spaces
+    WHERE ${scopeSql} ${filterSql} ${searchSql}
+    ${cursor ? keysetSql(cursor) : sql``}
+    ORDER BY ${orderSql(sort)}
+    LIMIT ${limit + 1}
+  `;
+  const resumeRows =
     scope === "current"
-      ? current
-          .filter((row) => row.last_opened_at)
-          .sort((a, b) => compareSpaces(a, b, "recent"))[0] ?? null
-      : null;
-
+      ? await sql<Row[]>`
+          SELECT
+            space_type, id, label,
+            created_text AS created_at,
+            opened_text AS last_opened_at,
+            activity_text AS activity_at,
+            favorite, archived_at, custom_position, row_version
+          FROM (${collectionSql(pilotId)}) spaces
+          WHERE archived_at IS NULL AND last_opened_at IS NOT NULL
+          ORDER BY last_opened_at DESC, id DESC
+          LIMIT 1
+        `
+      : [];
+  const hasMore = page.length > limit;
+  const items = (hasMore ? page.slice(0, limit) : page).map(asSpace);
+  const last = page[Math.min(page.length, limit) - 1];
   return {
-    counters,
-    filteredTotal: pool.length,
+    counters: {
+      projects: counts[0]?.projects ?? 0,
+      preparations: counts[0]?.preparations ?? 0,
+      favorites: counts[0]?.favorites ?? 0,
+    },
+    groups: {
+      project: grouped.find((row) => row.space_type === "project")?.n ?? 0,
+      preparation: grouped.find((row) => row.space_type === "preparation")?.n ?? 0,
+    },
+    filteredTotal: filtered[0]?.n ?? 0,
     preferences: {
-      view: parseView(pref[0]?.view),
+      view: VIEWS.has(pref[0]?.view as PortfolioView) ? (pref[0]?.view as PortfolioView) : "list",
       sort,
       sortExplicit,
       version: pref[0]?.organization_version ?? 0,
     },
-    resume: resumeRow ? asSpace(resumeRow) : null,
-    items: page.map(asSpace),
+    resume: resumeRows[0] ? asSpace(resumeRows[0]) : null,
+    items,
     nextCursor:
-      more && last
-        ? encodeCursor({ sort, filter, query, scope, spaceType: last.space_type, id: last.id })
+      hasMore && last
+        ? encodeCursor({
+            sort,
+            filter,
+            query,
+            scope,
+            spaceType: last.space_type,
+            id: last.id,
+            createdAt: last.created_at,
+            activityAt: last.activity_at,
+            label: last.label,
+            position: last.custom_position,
+          })
         : null,
     scope,
     filter,
@@ -220,54 +343,14 @@ export async function loadPersonalBoard(
   };
 }

-function compareSpaces(a: Row, b: Row, sort: PortfolioSort): number {
-  if (sort === "name") {
-    const byName = a.label.localeCompare(b.label, "fr", { sensitivity: "base" });
-    return byName || a.id.localeCompare(b.id);
-  }
-  if (sort === "custom") {
-    const ap = a.custom_position ?? Number.MAX_SAFE_INTEGER;
-    const bp = b.custom_position ?? Number.MAX_SAFE_INTEGER;
-    if (ap !== bp) return ap - bp;
-  }
-  if (sort === "recent") {
-    const ak = a.last_opened_at || a.created_at;
-    const bk = b.last_opened_at || b.created_at;
-    if (ak !== bk) return ak < bk ? 1 : -1;
-  }
-  if (a.created_at !== b.created_at) return a.created_at < b.created_at ? 1 : -1;
-  return a.id < b.id ? 1 : a.id > b.id ? -1 : 0;
-}
-
-function encodeCursor(value: {
-  sort: PortfolioSort;
-  filter: PortfolioFilter;
-  query: string;
-  scope: PortfolioScope;
-  spaceType: SpaceType;
-  id: string;
-}): string {
+function encodeCursor(value: ReadCursor): string {
   return Buffer.from(JSON.stringify(value), "utf8").toString("base64url");
 }

-function decodeCursor(raw: string): {
-  sort: PortfolioSort;
-  filter: PortfolioFilter;
-  query: string;
-  scope: PortfolioScope;
-  spaceType: SpaceType;
-  id: string;
-} {
+function decodeCursor(raw: string): ReadCursor {
   try {
-    const parsed = JSON.parse(Buffer.from(raw, "base64url").toString("utf8")) as {
-      sort?: PortfolioSort;
-      filter?: PortfolioFilter;
-      query?: string;
-      scope?: PortfolioScope;
-      spaceType?: SpaceType;
-      id?: string;
-    };
-    if (!parsed.sort || !parsed.filter || !parsed.scope || !parsed.spaceType || !parsed.id) {
+    const parsed = JSON.parse(Buffer.from(raw, "base64url").toString("utf8")) as Partial<ReadCursor>;
+    if (!parsed.sort || !parsed.filter || !parsed.scope || !parsed.spaceType || !parsed.id || !parsed.createdAt) {
       throw new Error("shape");
     }
     return {
@@ -277,21 +360,29 @@ function decodeCursor(raw: string): {
       scope: parsed.scope,
       spaceType: parsed.spaceType,
       id: parsed.id,
+      createdAt: parsed.createdAt,
+      activityAt: parsed.activityAt || parsed.createdAt,
+      label: parsed.label || "",
+      position: parsed.position ?? null,
     };
   } catch {
     throw new StudioError("INVALID_REQUEST", "Curseur de portefeuille invalide.", { httpStatus: 400 });
   }
 }

-async function assertEligible(pilotId: string, spaceType: SpaceType, spaceId: string) {
+async function lockPilot(tx: typeof sql, pilotId: string) {
+  await tx`SELECT pg_advisory_xact_lock(hashtext(${pilotId}), hashtext(${PILOT_LOCK}))`;
+}
+
+async function assertEligible(tx: typeof sql, pilotId: string, spaceType: SpaceType, spaceId: string) {
   if (spaceType === "project") {
-    const rows = await sql<{ id: string }[]>`
+    const rows = await tx<{ id: string }[]>`
       SELECT id FROM projects WHERE id = ${spaceId} AND owner_pilot_id = ${pilotId}
     `;
     if (!rows[0]) throw new StudioError("NOT_FOUND", "Espace introuvable.", { httpStatus: 404 });
     return;
   }
-  const rows = await sql<{ id: string }[]>`
+  const rows = await tx<{ id: string }[]>`
     SELECT pr.id
     FROM preparations pr
     LEFT JOIN preparation_project_links l ON l.preparation_id = pr.id
@@ -314,6 +405,7 @@ export async function updatePortfolioPreferences(
     throw new StudioError("INVALID_REQUEST", "Tri inconnu.", { httpStatus: 400 });
   }
   return sql.begin(async (tx) => {
+    await lockPilot(tx, pilotId);
     const current = await tx<{ organization_version: number }[]>`
       SELECT organization_version FROM pilot_portfolio_preferences
       WHERE owner_pilot_id = ${pilotId}
@@ -351,8 +443,9 @@ export async function setSpaceFavorite(
   spaceId: string,
   input: { favorite: boolean; expectedVersion: number },
 ) {
-  await assertEligible(pilotId, spaceType, spaceId);
   return sql.begin(async (tx) => {
+    await lockPilot(tx, pilotId);
+    await assertEligible(tx, pilotId, spaceType, spaceId);
     const current = await tx<{ row_version: number }[]>`
       SELECT row_version FROM pilot_space_organization
       WHERE owner_pilot_id = ${pilotId} AND space_type = ${spaceType} AND space_id = ${spaceId}
@@ -384,10 +477,11 @@ export async function setSpaceArchive(
   if (input.confirm !== true) {
     throw new StudioError("INVALID_REQUEST", "Confirmation requise.", { httpStatus: 400 });
   }
-  await assertEligible(pilotId, spaceType, spaceId);
   return sql.begin(async (tx) => {
-    const current = await tx<{ row_version: number }[]>`
-      SELECT row_version FROM pilot_space_organization
+    await lockPilot(tx, pilotId);
+    await assertEligible(tx, pilotId, spaceType, spaceId);
+    const current = await tx<{ row_version: number; custom_position: number | null }[]>`
+      SELECT row_version, custom_position FROM pilot_space_organization
       WHERE owner_pilot_id = ${pilotId} AND space_type = ${spaceType} AND space_id = ${spaceId}
       FOR UPDATE
     `;
@@ -396,6 +490,17 @@ export async function setSpaceArchive(
       throw new StudioError("CONFLICT", "L'organisation de cet espace a changé.", { httpStatus: 409 });
     }
     const next = version + 1;
+    if (!input.archived && current[0]?.custom_position != null) {
+      await tx`
+        UPDATE pilot_space_organization
+        SET custom_position = custom_position + 1
+        WHERE owner_pilot_id = ${pilotId}
+          AND archived_at IS NULL
+          AND custom_position IS NOT NULL
+          AND custom_position >= ${current[0].custom_position}
+          AND NOT (space_type = ${spaceType} AND space_id = ${spaceId})
+      `;
+    }
     await tx`
       INSERT INTO pilot_space_organization (
         owner_pilot_id, space_type, space_id, archived_at, row_version
@@ -422,26 +527,29 @@ export async function recordSpaceOpened(
 ) {
   const key = navigationKey.trim().slice(0, 180);
   if (!key) throw new StudioError("INVALID_REQUEST", "Clé de navigation absente.", { httpStatus: 400 });
-  await assertEligible(pilotId, spaceType, spaceId);
-  const archived = await sql<{ archived_at: string | null; navigation_key: string | null }[]>`
-    SELECT archived_at, navigation_key FROM pilot_space_organization
-    WHERE owner_pilot_id = ${pilotId} AND space_type = ${spaceType} AND space_id = ${spaceId}
-  `;
-  if (archived[0]?.archived_at) return { applied: false, reason: "archived" };
-  if (archived[0]?.navigation_key === key) return { applied: false, reason: "duplicate" };
-  await sql`
-    INSERT INTO pilot_space_organization (
-      owner_pilot_id, space_type, space_id, last_opened_at, navigation_key
-    )
-    VALUES (${pilotId}, ${spaceType}, ${spaceId}, now(), ${key})
-    ON CONFLICT (owner_pilot_id, space_type, space_id)
-    DO UPDATE SET
-      last_opened_at = GREATEST(pilot_space_organization.last_opened_at, now()),
-      navigation_key = ${key}
-    WHERE pilot_space_organization.archived_at IS NULL
-      AND pilot_space_organization.navigation_key IS DISTINCT FROM ${key}
-  `;
-  return { applied: true };
+  return sql.begin(async (tx) => {
+    await lockPilot(tx, pilotId);
+    await assertEligible(tx, pilotId, spaceType, spaceId);
+    const current = await tx<{ archived_at: string | null; navigation_key: string | null }[]>`
+      SELECT archived_at, navigation_key FROM pilot_space_organization
+      WHERE owner_pilot_id = ${pilotId} AND space_type = ${spaceType} AND space_id = ${spaceId}
+      FOR UPDATE
+    `;
+    if (current[0]?.archived_at) return { applied: false, reason: "archived" };
+    if (!acceptNavigationKey(current[0]?.navigation_key ?? null, key)) {
+      return { applied: false, reason: "duplicate" };
+    }
+    await tx`
+      INSERT INTO pilot_space_organization (
+        owner_pilot_id, space_type, space_id, last_opened_at, navigation_key
+      )
+      VALUES (${pilotId}, ${spaceType}, ${spaceId}, now(), ${key})
+      ON CONFLICT (owner_pilot_id, space_type, space_id)
+      DO UPDATE SET last_opened_at = now(), navigation_key = ${key}
+      WHERE pilot_space_organization.archived_at IS NULL
+    `;
+    return { applied: true };
+  });
 }

 export async function movePersonalSpace(
@@ -453,10 +561,20 @@ export async function movePersonalSpace(
     direction?: "up" | "down";
     beforeSpaceId?: string | null;
     beforeSpaceType?: SpaceType | null;
+    context?: { filter?: string; query?: string; scope?: string };
   },
 ) {
-  await assertEligible(pilotId, input.spaceType, input.spaceId);
+  const context = input.context || {};
+  if (context.scope === "archive" || context.filter !== "all" || (context.query || "").trim()) {
+    throw new StudioError(
+      "CONFLICT",
+      "L'ordre personnalisé se modifie sur la collection complète, sans recherche ni filtre.",
+      { httpStatus: 409 },
+    );
+  }
   return sql.begin(async (tx) => {
+    await lockPilot(tx, pilotId);
+    await assertEligible(tx, pilotId, input.spaceType, input.spaceId);
     const pref = await tx<{ organization_version: number }[]>`
       SELECT organization_version FROM pilot_portfolio_preferences
       WHERE owner_pilot_id = ${pilotId}
@@ -466,30 +584,50 @@ export async function movePersonalSpace(
     if (version !== input.expectedVersion) {
       throw new StudioError("CONFLICT", "L'ordre a changé. Relisez le portefeuille.", { httpStatus: 409 });
     }
-    const rows = await tx<Row[]>`${collectionSql(pilotId)}`;
-    const current = rows.filter((row) => !row.archived_at).sort((a, b) => compareSpaces(a, b, "custom"));
-    const from = current.findIndex((row) => row.space_type === input.spaceType && row.id === input.spaceId);
-    if (from < 0) throw new StudioError("NOT_FOUND", "Espace introuvable dans la collection courante.", { httpStatus: 404 });
-    let to = from;
-    if (input.direction === "up") to = Math.max(0, from - 1);
-    if (input.direction === "down") to = Math.min(current.length - 1, from + 1);
+    const rows = await tx<Row[]>`
+      SELECT space_type, id, label, created_text AS created_at, opened_text AS last_opened_at,
+             activity_text AS activity_at, favorite, archived_at, custom_position, row_version
+      FROM (${collectionSql(pilotId)}) spaces
+      WHERE archived_at IS NULL
+      ORDER BY custom_position ASC NULLS LAST, created_at DESC, id DESC
+    `;
+    const from = rows.findIndex((row) => row.space_type === input.spaceType && row.id === input.spaceId);
+    if (from < 0) {
+      throw new StudioError("NOT_FOUND", "Espace introuvable dans la collection courante.", { httpStatus: 404 });
+    }
+    let insertAt = from;
+    if (input.direction === "up") insertAt = Math.max(0, from - 1);
+    if (input.direction === "down") insertAt = Math.min(rows.length - 1, from + 1);
     if (input.beforeSpaceId) {
-      const before = current.findIndex(
+      const found = rows.findIndex(
         (row) => row.id === input.beforeSpaceId && row.space_type === (input.beforeSpaceType || row.space_type),
       );
-      if (before >= 0) to = before;
+      if (found < 0) {
+        throw new StudioError("CONFLICT", "La cible de déplacement n'est plus dans la collection.", {
+          httpStatus: 409,
+        });
+      }
+      const resolved = destinationIndex(rows.length, from, found);
+      if (resolved === null) {
+        throw new StudioError("CONFLICT", "Déplacement impossible.", { httpStatus: 409 });
+      }
+      insertAt = resolved;
     } else if (input.beforeSpaceId === null && input.direction === undefined) {
-      to = current.length - 1;
+      insertAt = rows.length - 1;
     }
-    const [item] = current.splice(from, 1);
-    current.splice(to, 0, item);
-    for (let i = 0; i < current.length; i += 1) {
-      const row = current[i];
+    const movingDown = Boolean(input.direction === "down" && insertAt > from);
+    const [item] = rows.splice(from, 1);
+    const slot = input.beforeSpaceId ? insertAt : movingDown ? Math.min(rows.length, from + 1) : insertAt;
+    const moved = slot !== from;
+    if (moved) rows.splice(slot, 0, item);
+    else rows.splice(from, 0, item);
+    for (let i = 0; i < rows.length; i += 1) {
+      const row = rows[i];
       await tx`
         INSERT INTO pilot_space_organization (
-          owner_pilot_id, space_type, space_id, custom_position, row_version
+          owner_pilot_id, space_type, space_id, custom_position
         )
-        VALUES (${pilotId}, ${row.space_type}, ${row.id}, ${i + 1}, 1)
+        VALUES (${pilotId}, ${row.space_type}, ${row.id}, ${i + 1})
         ON CONFLICT (owner_pilot_id, space_type, space_id)
         DO UPDATE SET custom_position = ${i + 1}
       `;
@@ -507,15 +645,17 @@ export async function movePersonalSpace(
         WHERE owner_pilot_id = ${pilotId}
       `;
     }
-    return { version: next };
+    return { version: next, moved };
   });
 }

 export async function listFavoriteSpaces(pilotId: string): Promise<PersonalSpace[]> {
-  const rows = await sql<Row[]>`${collectionSql(pilotId)}`;
-  return rows
-    .filter((row) => row.favorite && !row.archived_at)
-    .sort((a, b) => compareSpaces(a, b, "name"))
-    .slice(0, 12)
-    .map(asSpace);
+  const rows = await sql<Row[]>`
+    SELECT space_type, id, label, created_text AS created_at, opened_text AS last_opened_at,
+           activity_text AS activity_at, favorite, archived_at, custom_position, row_version
+    FROM (${collectionSql(pilotId)}) spaces
+    WHERE favorite AND archived_at IS NULL
+    ORDER BY label ASC, id ASC
+  `;
+  return rows.map(asSpace);
 }
diff --git a/projects/sfia-studio-next/web/tests/e2e/personal-portfolio.spec.ts b/projects/sfia-studio-next/web/tests/e2e/personal-portfolio.spec.ts
new file mode 100644
index 00000000..bcf443ce
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/e2e/personal-portfolio.spec.ts
@@ -0,0 +1,185 @@
+import { expect, test, type Page } from "@playwright/test";
+
+async function login(page: Page, pilot: "A" | "B") {
+  await page.goto("/login");
+  await page.getByRole("button", { name: `Pilote ${pilot} (DEV)` }).click();
+  await page.waitForURL("**/portfolio");
+  await expect(page.getByRole("heading", { name: "Portefeuille" })).toBeVisible();
+}
+
+async function settled(page: Page) {
+  await expect(page.getByText("Modification en cours…")).toHaveCount(0);
+}
+
+test("personal portfolio organization, persistence, archive and isolation", async ({ page, browser }) => {
+  test.setTimeout(180_000);
+  await login(page, "A");
+
+  let creates = 0;
+  await page.route("**/api/preparations", async (route) => {
+    if (route.request().method() !== "POST") {
+      await route.continue();
+      return;
+    }
+    creates += 1;
+    await new Promise((resolve) => setTimeout(resolve, 600));
+    await route.continue();
+  });
+  await page.getByTestId("portfolio-new-prep").click({ clickCount: 2, delay: 40 });
+  await page.waitForURL("**/preparations/**");
+  expect(creates).toBe(1);
+  const preparationUrl = page.url();
+  await page.unroute("**/api/preparations");
+  await page.getByRole("link", { name: "Portefeuille" }).click();
+  await page.waitForURL("**/portfolio");
+
+  await page.getByTestId("portfolio-new-prep").click();
+  await page.waitForURL("**/preparations/**");
+  const secondUrl = page.url();
+  await page.getByRole("link", { name: "Portefeuille" }).click();
+  await page.waitForURL("**/portfolio");
+  await expect(page.locator("[data-testid^='resume-prep-']")).toHaveCount(2);
+
+  await page.getByRole("button", { name: "Liste", exact: true }).click();
+  await expect(page.getByRole("button", { name: "Liste", exact: true })).toHaveAttribute("aria-pressed", "true");
+  await settled(page);
+  await page.getByRole("button", { name: "Grille", exact: true }).click();
+  await expect(page.getByRole("button", { name: "Grille", exact: true })).toHaveAttribute("aria-pressed", "true");
+  await settled(page);
+  await page.getByRole("button", { name: "Groupes", exact: true }).click();
+  await expect(page.getByRole("heading", { name: /Préparations · 2/ })).toBeVisible();
+  await page.getByRole("button", { name: /À reprendre/ }).click();
+  await expect(page.getByRole("button", { name: /^Préparations · / })).toHaveAttribute("aria-pressed", "true");
+  await page.getByRole("button", { name: /^Tout · / }).click();
+
+  let releaseLate: () => void = () => {};
+  const lateHeld = new Promise<void>((resolve) => {
+    releaseLate = resolve;
+  });
+  let sawStale = false;
+  await page.route("**/api/portfolio**", async (route) => {
+    const url = new URL(route.request().url());
+    if (url.searchParams.get("q") === "Nouvelle") {
+      sawStale = true;
+      await lateHeld;
+    }
+    await route.continue();
+  });
+  await page.getByTestId("portfolio-search").fill("Nouvelle");
+  await expect.poll(() => sawStale).toBe(true);
+  await page.getByTestId("portfolio-search").fill("zzz-absent");
+  await expect(page.getByTestId("portfolio-empty")).toHaveText("Aucun résultat.");
+  releaseLate();
+  await expect(page.getByTestId("portfolio-empty")).toHaveText("Aucun résultat.");
+  await expect(page.getByRole("link", { name: "Nouvelle préparation" })).toHaveCount(0);
+  await page.unroute("**/api/portfolio**");
+  await page.getByTestId("portfolio-search").fill("");
+  await expect(page.locator("[data-testid^='resume-prep-']")).toHaveCount(2);
+
+  await page.getByLabel("Tri").selectOption("custom");
+  await expect(page.getByRole("button", { name: "Descendre" }).first()).toBeVisible();
+  await settled(page);
+  const before = await page.locator("[data-testid^='resume-prep-']").evaluateAll((nodes) =>
+    nodes.map((node) => node.getAttribute("data-testid")),
+  );
+  await page.locator("[data-testid^='resume-prep-']").first().getByRole("button", { name: "Descendre" }).focus();
+  await page.keyboard.press("Enter");
+  await expect.poll(async () =>
+    page.locator("[data-testid^='resume-prep-']").evaluateAll((nodes) =>
+      nodes.map((node) => node.getAttribute("data-testid")),
+    ),
+  ).toEqual([before[1], before[0]]);
+  await settled(page);
+  await page.getByTestId("portfolio-search").fill("Nouvelle");
+  await expect(page.getByRole("button", { name: "Monter" })).toHaveCount(0);
+  await page.getByTestId("portfolio-search").fill("");
+  await expect(page.getByRole("button", { name: "Monter" }).first()).toBeVisible();
+
+  const source = page.locator("[data-testid^='resume-prep-']").nth(1);
+  const target = page.locator("[data-testid^='resume-prep-']").first();
+  const sourceId = await source.getAttribute("data-testid");
+  await source.dragTo(target, { sourcePosition: { x: 12, y: 12 }, targetPosition: { x: 12, y: 12 } });
+  await expect.poll(async () => page.locator("[data-testid^='resume-prep-']").first().getAttribute("data-testid")).toBe(sourceId);
+  await settled(page);
+
+  let favorites = 0;
+  await page.route("**/favorite", async (route) => {
+    favorites += 1;
+    await new Promise((resolve) => setTimeout(resolve, 400));
+    await route.continue();
+  });
+  await page.getByRole("button", { name: "Ajouter aux favoris" }).first().click({ clickCount: 2, delay: 30 });
+  await expect(page.getByTestId("portfolio-rail-favorites")).toContainText("Nouvelle préparation");
+  expect(favorites).toBe(1);
+  await page.unroute("**/favorite");
+
+  await page.reload();
+  await expect(page.getByRole("button", { name: "Groupes", exact: true })).toHaveAttribute("aria-pressed", "true");
+  const second = await browser.newContext();
+  const other = await second.newPage();
+  await login(other, "A");
+  await expect(other.getByRole("button", { name: "Groupes", exact: true })).toHaveAttribute("aria-pressed", "true");
+  await second.close();
+
+  const seeded: string[] = [];
+  for (let index = 0; index < 24; index += 1) {
+    const response = await page.request.post("/api/preparations");
+    expect(response.ok()).toBeTruthy();
+    const body = (await response.json()) as { preparationId?: string };
+    expect(body.preparationId).toBeTruthy();
+    seeded.push(body.preparationId!);
+  }
+  await page.reload();
+  await page.getByRole("button", { name: "Voir tous les espaces" }).click();
+  await page.getByTestId("portfolio-load-more").click();
+  await expect(page.getByTestId("portfolio-load-more")).toHaveCount(0);
+  const visible = await page.locator("[data-testid^='resume-prep-']").evaluateAll((nodes) =>
+    nodes.map((node) => node.getAttribute("data-testid")),
+  );
+  expect(new Set(visible).size).toBe(visible.length);
+  expect(visible.length).toBe(26);
+  for (const id of seeded) expect(visible).toContain(`resume-prep-${id}`);
+
+  await page.route("**/favorite", (route) => route.abort());
+  const stillPlain = page.getByRole("button", { name: "Ajouter aux favoris" }).first();
+  await stillPlain.click();
+  await expect(page.getByText("Résultat incertain. L'action n'est pas relancée.")).toBeVisible();
+  await settled(page);
+  await page.unroute("**/favorite");
+
+  const favoriteRow = page.locator("[data-testid^='resume-prep-']").filter({ has: page.getByRole("button", { name: "Retirer des favoris" }) }).first();
+  const favoriteId = await favoriteRow.getAttribute("data-testid");
+  await favoriteRow.getByRole("button", { name: "Actions de l'espace" }).click();
+  await favoriteRow.getByRole("button", { name: "Archiver" }).click();
+  const archived = page.waitForResponse((response) => response.url().includes("/archive") && response.request().method() === "PUT");
+  await page.getByRole("dialog", { name: "Confirmer l'archivage" }).getByRole("button", { name: "Archiver" }).click();
+  expect((await archived).ok()).toBeTruthy();
+  await expect(page.getByTestId(favoriteId!)).toHaveCount(0);
+  await expect(page.getByTestId("portfolio-rail-favorites")).not.toContainText("Nouvelle préparation");
+  await page.goto(preparationUrl);
+  await expect(page).toHaveURL(/\/preparations\//);
+  await page.goto("/portfolio?scope=archive");
+  await expect(page.getByTestId(favoriteId!)).toBeVisible();
+  await page.getByTestId(favoriteId!).getByRole("button", { name: "Actions de l'espace" }).click();
+  await page.getByTestId(favoriteId!).getByRole("button", { name: "Restaurer" }).click();
+  await page.getByRole("dialog", { name: "Confirmer la restauration" }).getByRole("button", { name: "Restaurer" }).click();
+  await page.getByRole("button", { name: "Retour aux espaces" }).click();
+  await expect(page.getByTestId("portfolio-rail-favorites")).toContainText("Nouvelle préparation");
+
+  await page.getByTestId("portfolio-rail-search").fill("Nouvelle");
+  await page.getByTestId("portfolio-rail-search").press("Enter");
+  await expect(page).toHaveURL(/q=Nouvelle/);
+  await expect(page.getByRole("link", { name: "Nouvelle préparation" }).first()).toBeVisible();
+
+  const intruder = await browser.newContext();
+  const pilotB = await intruder.newPage();
+  await login(pilotB, "B");
+  await expect(pilotB.getByTestId("portfolio-empty")).toHaveText("Aucun espace pour le moment.");
+  await expect(pilotB.getByTestId("portfolio-rail-favorites")).not.toContainText("Nouvelle préparation");
+  const denied = await pilotB.request.get(secondUrl.replace(/\/preparations\//, "/api/preparations/").replace(/\?.*$/, ""));
+  expect(denied.status()).toBe(404);
+  await pilotB.goto(secondUrl);
+  await pilotB.goto("/portfolio");
+  await expect(pilotB.getByTestId("portfolio-empty")).toHaveText("Aucun espace pour le moment.");
+  await intruder.close();
+});
diff --git a/projects/sfia-studio-next/web/tests/integration/portfolio-organization.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/portfolio-organization.pg.test.ts
index 6e954d2f..53ae18c2 100644
--- a/projects/sfia-studio-next/web/tests/integration/portfolio-organization.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/portfolio-organization.pg.test.ts
@@ -126,6 +126,7 @@ describe("personal portfolio organization (PG)", () => {
       spaceId: second,
       expectedVersion: 0,
       direction: "up",
+      context: { filter: "all", query: "", scope: "current" },
     });
     const board = await loadPersonalBoard(owner);
     expect(board.preferences.sort).toBe("custom");
@@ -136,6 +137,7 @@ describe("personal portfolio organization (PG)", () => {
         spaceId: first,
         expectedVersion: 0,
         direction: "down",
+        context: { filter: "all", query: "", scope: "current" },
       }),
     ).rejects.toMatchObject({ httpStatus: 409 });
     const saved = await updatePortfolioPreferences(owner, {
@@ -147,4 +149,83 @@ describe("personal portfolio organization (PG)", () => {
     expect(reread.preferences.sort).toBe("custom");
     expect(saved.version).toBe(moved.version + 1);
   });
+
+  it("keeps one winner when two first writes race, and ignores an older navigation key", async () => {
+    const owner = await seedPilot("PF-race");
+    const projectId = newId("proj");
+    await db.insert(projects).values({ id: projectId, ownerPilotId: owner, name: "Course" });
+    const raced = await Promise.allSettled([
+      setSpaceFavorite(owner, "project", projectId, { favorite: true, expectedVersion: 0 }),
+      setSpaceFavorite(owner, "project", projectId, { favorite: false, expectedVersion: 0 }),
+    ]);
+    expect(raced.filter((item) => item.status === "fulfilled")).toHaveLength(1);
+    expect(raced.filter((item) => item.status === "rejected")).toHaveLength(1);
+    const stored = await sql<{ row_version: number; favorite: boolean }[]>`
+      SELECT row_version, favorite FROM pilot_space_organization
+      WHERE owner_pilot_id = ${owner} AND space_id = ${projectId}
+    `;
+    expect(stored[0]?.row_version).toBe(1);
+
+    await recordSpaceOpened(owner, "project", projectId, "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee:2");
+    const first = await sql<{ navigation_key: string; opened: string }[]>`
+      SELECT navigation_key, last_opened_at::text AS opened
+      FROM pilot_space_organization
+      WHERE owner_pilot_id = ${owner} AND space_id = ${projectId}
+    `;
+    const replay = await recordSpaceOpened(owner, "project", projectId, "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee:1");
+    expect(replay.applied).toBe(false);
+    const second = await sql<{ navigation_key: string; opened: string }[]>`
+      SELECT navigation_key, last_opened_at::text AS opened
+      FROM pilot_space_organization
+      WHERE owner_pilot_id = ${owner} AND space_id = ${projectId}
+    `;
+    expect(second[0]?.navigation_key).toBe(first[0]?.navigation_key);
+    expect(second[0]?.opened).toBe(first[0]?.opened);
+
+    const plan = await sql<{ "QUERY PLAN": string }[]>`
+      EXPLAIN SELECT id FROM projects WHERE owner_pilot_id = ${owner} ORDER BY created_at DESC, id DESC LIMIT 5
+    `;
+    expect(plan.map((row) => row["QUERY PLAN"]).join("\n")).toMatch(/Limit/);
+  });
+
+  it("rejects a move outside the full current collection and reports group totals", async () => {
+    const owner = await seedPilot("PF-guard");
+    const alpha = newId("proj");
+    const bravo = newId("proj");
+    const prep = newId("prep");
+    await db.insert(projects).values([
+      { id: alpha, ownerPilotId: owner, name: "Alpha" },
+      { id: bravo, ownerPilotId: owner, name: "Bravo" },
+    ]);
+    await db.insert(preparations).values({
+      id: prep,
+      ownerPilotId: owner,
+      status: "OPEN",
+      previewName: "Préparation",
+      previewSummary: "",
+    });
+    await expect(
+      movePersonalSpace(owner, {
+        spaceType: "project",
+        spaceId: bravo,
+        expectedVersion: 0,
+        direction: "up",
+        context: { filter: "projects", query: "", scope: "current" },
+      }),
+    ).rejects.toBeInstanceOf(StudioError);
+    await expect(
+      movePersonalSpace(owner, {
+        spaceType: "project",
+        spaceId: bravo,
+        expectedVersion: 0,
+        beforeSpaceId: "missing",
+        beforeSpaceType: "project",
+        context: { filter: "all", query: "", scope: "current" },
+      }),
+    ).rejects.toMatchObject({ httpStatus: 409 });
+    const board = await loadPersonalBoard(owner, { preview: false });
+    expect(board.groups.project).toBe(2);
+    expect(board.groups.preparation).toBe(1);
+    expect(board.filteredTotal).toBe(3);
+  });
 });
diff --git a/projects/sfia-studio-next/web/tests/unit/portfolio-organization.test.ts b/projects/sfia-studio-next/web/tests/unit/portfolio-organization.test.ts
new file mode 100644
index 00000000..291f889d
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/unit/portfolio-organization.test.ts
@@ -0,0 +1,20 @@
+import { describe, expect, it } from "vitest";
+import { acceptNavigationKey, destinationIndex } from "@/domains/identity/portfolio-organization";
+
+describe("portfolio organization rules", () => {
+  it("places an item before its target in either direction", () => {
+    expect(destinationIndex(3, 0, 2)).toBe(1);
+    expect(destinationIndex(3, 2, 0)).toBe(0);
+    expect(destinationIndex(3, 1, 1)).toBe(1);
+    expect(destinationIndex(3, 0, 9)).toBeNull();
+  });
+
+  it("ignores a replayed navigation key from the same tab", () => {
+    const tab = "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee";
+    expect(acceptNavigationKey(null, `${tab}:1`)).toBe(true);
+    expect(acceptNavigationKey(`${tab}:2`, `${tab}:2`)).toBe(false);
+    expect(acceptNavigationKey(`${tab}:2`, `${tab}:1`)).toBe(false);
+    expect(acceptNavigationKey(`${tab}:2`, `${tab}:3`)).toBe(true);
+    expect(acceptNavigationKey(`${tab}:2`, "bbbbbbbb-bbbb-cccc-dddd-eeeeeeeeeeee:1")).toBe(true);
+  });
+});
