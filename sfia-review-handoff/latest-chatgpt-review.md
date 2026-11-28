# Review Pack — complement B

Date : 2026-11-28 14:52 CET.
Cycle : 08 Delivery. Profil Standard. Typologie EVOL, correctif R-PF34-UI integre.
Verdict technique propose : READY WITH RESERVES — COMPLEMENT B.
Verdict visuel : REVIEW INCONCLUSIVE — RUNTIME SCREENSHOT REQUIRED.

## Identite Git

- Branche : sfia/next-ml5-integrated-delivery-20261123.
- Entree : 1eedfba8ea09163a1ba780fbeb16563034895379. Tree cd4581040b14531676250a737a098e960456b4b8. Parent 561b7277.
- Sortie : 26698494ceed32af53d71b3e2e2248bab903de73. Tree b4c97114d6578dce0106614e86ba1600f4efab95. Parent 1eedfba8.
- origin/main et merge-base : 997897fd7cf914771e7d08e8030dc7123fab7d25.
- Push fast-forward 1eedfba8..26698494. Aucune PR ouverte. Aucun run Actions observe avant ni apres.

## Sources

- Suivi v0.24 §29, commit 7e316e5dd2bea83c8a1df70791b575770afee43e, lu sans merge.
- Figma itgvCulInEnFY6DvgIegvP, session 08f27608-2154-46c8-bf52-574c69ea189a, lecture seule.
- Nœuds extraits avec contexte et capture : 1420:269 reprise, 1420:250 synthese, 1420:129 ligne, 1420:1803 menu, 1420:3227 archivage.
- Icones SVG telechargees : fleche, etoile, poignee, points. La fleche est inlined. Les autres restent des references d'extraction, non servies comme URL temporaires.
- Handoff A 45140594. Reserves R-A04-WINDOW, R-A06-ATTACH et R-E2E-WEBPACK non rouvertes.

## G2

Reprise : fond #242c4b, bordure #7880ef, rayon 12, padding 24, ecart 20, repere 64 px rayon 14 fond #151d2c, titre 26/36, action 218x38 fond #292d58 bordure #656fe1 rayon 9.
Synthese : panneau #151d2c, bordure #273248, rayon 12, hauteur 136, separateurs 92 px, chiffres 46/63.
Ligne : hauteur 50, monogramme 36, colonnes type 158 et activite 170.
Menu : ancre a droite, renommer et supprimer presents dans la source. Le contrat A4 prime : l'archive ne met pas le travail en pause. Renommer et supprimer restent indisponibles.
Les 22 autres frames du perimetre n'ont pas recu une extraction L2 individuelle. Elles partagent ces composants. Cette couverture est derivee, pas une extraction exhaustive.

## G3 et transposition

Un seul ecran porte les etats. Le shell existant est conserve. Le tiroir mobile est limite a l'espace personnel. Les largeurs projet 246, conversation 240 et inspection 244 ne sont pas modifiees.
Bureau compact : marge 28 px sous 1434 px. Mobile : marge 16 px, synthese en trois colonnes, reprise verticale, lignes compactes, tiroir.

## R-PF34-UI

classifyPortfolioResponse : 400/401/403/404/422 refus, 409 conflit, 500/503 et 2xx sans accuse inconnus, 2xx avec version ou etat confirme.
Une relecture de favori interroge /api/portfolio/favorites. Une relecture d'archive interroge le perimetre archive ou courant. Une preference ou un ordre exige la version superieure et la valeur attendue.
Si la relecture echoue ou ne montre pas l'espace concerne, les commandes incompatibles restent disabled. L'intention n'est pas renvoyee. Le bouton Relire ne refait pas la mutation.
Preuve : tests/unit/portfolio-organization.test.ts, 3 tests PASS, dont 500/503, accuse absent, relecture non pertinente et relecture pertinente. Le composant appelle ces fonctions dans mutate et probeIntention. Injection navigateur non rejouee.

## Tests et runtime

tsc --noEmit : 34 diagnostics, identiques a l'entree.
Build production : Compiled successfully. BUILD_ID 84oyNXYfCUkG4NvIF6jX-.
DEV :3100 PID 43847. Login 200. GET /api/portfolio 200, compteurs presents.
RECETTE :3200 PID 58965 inchange. Table 028 absente.
Parcours navigateur A de 31,4 s non rejoue. Il reste applicable pour les vues, l'ordre, les favoris, la pagination et l'isolation, sous reserve des libelles de bouton conserves.

## Matrice B

| Ensemble | Implementation | Preuve | Verdict | Reserve |
| --- | --- | --- | --- | --- |
| B-01 | 5 nœuds extraits, composants partages | captures Figma des 5 nœuds | PARTIEL | extraction L2 des 22 autres frames derivee |
| B-02 | reprise, synthese, bibliotheque | code et CSS | IMPLEMENTED | F2 non mesure |
| B-03 | tiroir personnel | code shell | IMPLEMENTED | parcours mobile non exerce |
| B-04 | menus, modales, PF34 | test unitaire de la decision | IMPLEMENTED | injection navigateur non rejouee |
| B-05 | marges 28 et 16, trois colonnes | CSS | IMPLEMENTED | captures 1680/1280/390/320 absentes |

## 27 etats

Tous sont portes par le meme ecran. Statut commun : IMPLEMENTED, capture runtime NOT PROVEN, F2 NOT RUN.
14.01 liste, 14.02 grille, 14.03 groupes, 14.04 vide, 14.05 preparations, 14.06 recherche vide, 14.07 favoris, 14.08 menu projet, 14.09 menu preparation, 14.11 ordre, 14.12 archive, 14.13 archives, 14.16 incertain, 14.17 chargement, 14.18 erreur, 14.19 acces non confirme par redirection 401, 14.20 mobile 390, 14.21 mobile 320, 14.22 bureau 1280, 14.25 mutation, 14.27 tri, 14.29 restauration, 14.30 tiroir, 14.31 projets, 14.32 aucun favori, 14.33 ordre enregistre, 14.34 liste deployee.
Hors perimetre : 14.10, 14.23, 14.28, 14.14, 14.15, 14.24, 14.26.

## P01 a P10

Le fonctionnement du complement A est conserve. Le delta B est la presentation et PF34. Aucune reception visuelle. P01 synthese, P02 reprise accentuee, P03 trois vues, P04 bibliotheque, P05 recherche, P06 ordre, P07 favoris, P08 preferences, P09 modale d'archive, P10 etats et blocage.

## Reserves

R-B-F2. Preuve visuelle manquante. Aucune capture runtime appariee, aucun ecart mesure. Sortie : revue Morris sur le candidat 26698494, build 84oyNXYfCUkG4NvIF6jX-, puis mesures F2 si l'outillage le permet. Ne vaut pas F2 PASS.
R-B-PF34-BROWSER. La decision est prouvee et branchee au composant. Le navigateur n'a pas injecte un 500 ni un accuse perdu. Sortie : un parcours cible sur E2E Turbopack, sans chantier webpack.
R-A04-WINDOW, R-A06-ATTACH, R-E2E-WEBPACK : conservees, non rouvertes.

## Decisions Morris

- Recevoir ou non la sortie technique du complement B avec les reserves de preuve.
- Decider si le verdict visuel inconclusif appelle une revue manuelle en recette ou une campagne de mesures.
- Ne pas engager le mandat 2 dans ce cycle.

Schema 028 inchange. Aucune modification Figma. Aucun appel fournisseur.

## Diff

```
diff --git a/projects/sfia-studio-next/construction/convergence-ux-ui-globale/portefeuille/as-built-portefeuille-personnel.md b/projects/sfia-studio-next/construction/convergence-ux-ui-globale/portefeuille/as-built-portefeuille-personnel.md
index 67a87a68..262a4148 100644
--- a/projects/sfia-studio-next/construction/convergence-ux-ui-globale/portefeuille/as-built-portefeuille-personnel.md
+++ b/projects/sfia-studio-next/construction/convergence-ux-ui-globale/portefeuille/as-built-portefeuille-personnel.md
@@ -1,6 +1,25 @@
 # As-built — Portefeuille personnel et navigation

-Date : 28 novembre 2026. Mandat 1, finalisation du complément A. Classe NO RELEASE.
+Date : 28 novembre 2026. Mandat 1, complément B. Classe NO RELEASE.
+
+## Complément B — composition
+
+Source lue : fichier Figma `itgvCulInEnFY6DvgIegvP`, page 14 `1417:6`.
+Nœuds extraits : reprise `1420:269`, synthèse `1420:250`, ligne `1420:129`, menu `1420:1803`, archivage `1420:3227`.
+La reprise utilise le fond `#242c4b`, la bordure `#7880ef`, le repère 64 px et l'action 218×38.
+La synthèse reste en trois colonnes, y compris sous 768 px, avec une typographie réduite.
+Le bureau compact (jusqu'à 1433 px) utilise 28 px de marge. Le mobile utilise 16 px.
+L'archivage et la restauration passent par une modale. Le texte suit l'archive personnelle : l'espace reste accessible, le travail n'est pas interrompu.
+Le menu laisse le renommage et la suppression indisponibles.
+Le tiroir personnel s'ouvre depuis le bandeau mobile et se ferme par Échap, le fond ou Fermer. Les largeurs des autres variantes du rail ne changent pas.
+
+Une lecture réussie ne lève plus le blocage d'une mutation incertaine. Un 500 ou un 503 reste inconnu. Un succès exige un accusé exploitable. La relecture d'un favori interroge les favoris du Pilote. La relecture d'une archive interroge le périmètre correspondant. Si l'espace n'y figure pas, le résultat reste incertain et les commandes incompatibles restent désactivées. L'intention n'est pas renvoyée.
+
+Les 27 états applicables sont portés par le même écran, selon les données et le viewport. Aucune mesure F2 appariée n'a été produite dans ce cycle. Le verdict visuel est REVIEW INCONCLUSIVE — RUNTIME SCREENSHOT REQUIRED.
+
+## Complément A
+
+Date de la finalisation fonctionnelle. Classe NO RELEASE.
 Schéma 028 inchangé. Aucune migration 029. Complément B non engagé.

 ## Finalisation — garanties résiduelles
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index ac65cdeb..aab475cc 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -1,3 +1,14 @@
+## delivery_id: DELIV-2026-11-28-ML5-PORTFOLIO-UX-DEV
+
+- **date_local**: 2026-11-28 (Europe/Paris)
+- **lane**: DEV only — complément B, transposition du portefeuille personnel
+- **branch**: `sfia/next-ml5-integrated-delivery-20261123`
+- **HEAD_base**: `1eedfba8ea09163a1ba780fbeb16563034895379`
+- **commit**: `feat(next): present the personal portfolio from the studio composition`
+- **schema_revision**: inchangé, `028_pilot_portfolio_organization`
+- **scope**: composition page 14, navigation personnelle mobile, états sincères, réconciliation d'une mutation incertaine
+- **classe**: NO RELEASE · évolution compatible · LIVE NOT RUN · CI NOT RUN · F2 non mesuré
+
 ## delivery_id: DELIV-2026-11-28-ML5-PORTFOLIO-GUARANTEES-DEV

 - **date_local**: 2026-11-28 (Europe/Paris)
diff --git a/projects/sfia-studio-next/web/src/components/portfolio/PersonalPortfolio.tsx b/projects/sfia-studio-next/web/src/components/portfolio/PersonalPortfolio.tsx
index 11a0f8c0..c09e3a19 100644
--- a/projects/sfia-studio-next/web/src/components/portfolio/PersonalPortfolio.tsx
+++ b/projects/sfia-studio-next/web/src/components/portfolio/PersonalPortfolio.tsx
@@ -13,18 +13,74 @@ type BoardResponse = {
   error?: string;
 };

+export type PortfolioMutationOutcome = "confirmed" | "refused" | "conflict" | "unknown";
+export type PortfolioReread = "matched" | "unverified" | "failed" | "not-attempted";
+
+export type PortfolioIntention = {
+  kind: "favorite" | "archive" | "preference" | "order";
+  spaceType?: PersonalSpace["spaceType"];
+  spaceId?: string;
+  desired?: boolean;
+  view?: string;
+  sort?: string;
+  knownVersion: number;
+};
+
+/** Confirmed refusals are the route contract. A 5xx or a 2xx without an acknowledgement stays unknown. */
+export function classifyPortfolioResponse(status: number, body: Record<string, unknown> | null): PortfolioMutationOutcome {
+  if (status === 409) return "conflict";
+  if (status === 400 || status === 401 || status === 403 || status === 404 || status === 422) return "refused";
+  if (status >= 500 || status <= 0) return "unknown";
+  if (status >= 200 && status < 300) {
+    if (!body) return "unknown";
+    const acknowledged =
+      typeof body.rowVersion === "number" ||
+      typeof body.version === "number" ||
+      typeof body.favorite === "boolean" ||
+      typeof body.archived === "boolean" ||
+      typeof body.applied === "boolean";
+    return acknowledged ? "confirmed" : "unknown";
+  }
+  return "unknown";
+}
+
+/** A successful read counts only when it shows the state the intention was about. */
+export function intentionMatchesBoard(
+  intention: PortfolioIntention,
+  board: {
+    items: Array<{ spaceType: string; id: string; favorite: boolean; archived: boolean }>;
+    preferences: { view: string; sort: string; version: number };
+  },
+): boolean {
+  if (intention.kind === "preference") {
+    const viewOk = !intention.view || board.preferences.view === intention.view;
+    const sortOk = !intention.sort || board.preferences.sort === intention.sort;
+    return viewOk && sortOk && board.preferences.version > intention.knownVersion;
+  }
+  if (intention.kind === "order") {
+    return board.preferences.sort === "custom" && board.preferences.version > intention.knownVersion;
+  }
+  const item = board.items.find((entry) => entry.spaceType === intention.spaceType && entry.id === intention.spaceId);
+  if (!item) return false;
+  if (intention.kind === "favorite") return item.favorite === intention.desired;
+  return item.archived === intention.desired;
+}
+
 /**
- * A refusal is settled. Any other outcome stays blocked until a reread returns
- * the owner state. A lost acknowledgement stays unknown, and is never sent again.
+ * A refusal is settled. Any other outcome stays blocked until a reread shows
+ * the relevant owner state. A lost acknowledgement is never sent again.
  */
 export function portfolioMutationFollowUp(input: {
-  outcome: "confirmed" | "refused" | "conflict" | "unknown";
-  reread: "succeeded" | "failed" | "not-attempted";
+  outcome: PortfolioMutationOutcome;
+  reread: PortfolioReread;
 }): { uncertain: boolean; retry: false; blockFurtherMutations: boolean } {
   if (input.outcome === "refused") {
     return { uncertain: false, retry: false, blockFurtherMutations: false };
   }
-  if (input.reread === "succeeded") {
+  if (input.reread === "matched" && (input.outcome === "confirmed" || input.outcome === "conflict")) {
+    return { uncertain: false, retry: false, blockFurtherMutations: false };
+  }
+  if (input.outcome === "unknown" && input.reread === "matched") {
     return { uncertain: false, retry: false, blockFurtherMutations: false };
   }
   return {
@@ -104,19 +160,17 @@ export function PersonalPortfolio() {
         setLoading(false);
         return false;
       }
+      const nextBoard = body.board;
       setBoard((prev) => {
-        if (!cursor || !prev) return body.board!;
+        if (!cursor || !prev) return nextBoard;
         const seen = new Set(prev.items.map((item) => `${item.spaceType}:${item.id}`));
-        const extra = body.board!.items.filter((item) => !seen.has(`${item.spaceType}:${item.id}`));
-        return { ...body.board!, items: [...prev.items, ...extra] };
+        const extra = nextBoard.items.filter((item) => !seen.has(`${item.spaceType}:${item.id}`));
+        return { ...nextBoard, items: [...prev.items, ...extra] };
       });
       notifyPortfolioChanged();
       setError("");
-      blocked.current = false;
-      setHeld(false);
-      setUncertain("");
       setLoading(false);
-      return true;
+      return nextBoard;
     } catch {
       if (requestId !== requestSeq.current) return false;
       setError("Lecture du portefeuille impossible.");
@@ -147,19 +201,24 @@ export function PersonalPortfolio() {
   const loadRef = useRef(load);
   loadRef.current = load;

+  const intentionRef = useRef<PortfolioIntention | null>(null);
+
   function settleMutation(
-    outcome: "confirmed" | "refused" | "conflict" | "unknown",
-    reread: "succeeded" | "failed" | "not-attempted",
+    outcome: PortfolioMutationOutcome,
+    reread: PortfolioReread,
     knownMessage: string,
   ) {
     const follow = portfolioMutationFollowUp({ outcome, reread });
     blocked.current = follow.blockFurtherMutations;
     setHeld(follow.blockFurtherMutations);
+    if (!follow.blockFurtherMutations) intentionRef.current = null;
     if (follow.uncertain) {
       setUncertain(
         reread === "failed"
           ? "Résultat incertain. La relecture a échoué et l'action n'a pas été relancée."
-          : "Résultat incertain. L'action n'est pas relancée.",
+          : reread === "unverified"
+            ? "Résultat incertain. La relecture ne confirme pas l'espace concerné."
+            : "Résultat incertain. L'action n'est pas relancée.",
       );
       return;
     }
@@ -173,9 +232,35 @@ export function PersonalPortfolio() {
     }
   }

-  async function mutate(path: string, method: string, payload: unknown) {
+  async function probeIntention(intention: PortfolioIntention): Promise<PortfolioReread> {
+    try {
+      if (intention.kind === "favorite") {
+        const response = await fetch("/api/portfolio/favorites");
+        if (!response.ok) return "failed";
+        const body = (await response.json()) as { favorites?: PersonalSpace[] };
+        const found = Boolean(body.favorites?.some((item) => item.spaceType === intention.spaceType && item.id === intention.spaceId));
+        return found === intention.desired ? "matched" : "unverified";
+      }
+      if (intention.kind === "archive") {
+        const scopeName = intention.desired ? "archive" : "current";
+        const response = await fetch(`/api/portfolio?scope=${scopeName}&expanded=1`);
+        if (!response.ok) return "failed";
+        const body = (await response.json()) as BoardResponse;
+        if (!body.board) return "failed";
+        return intentionMatchesBoard(intention, body.board) ? "matched" : "unverified";
+      }
+      const board = await loadRef.current();
+      if (!board) return "failed";
+      return intentionMatchesBoard(intention, board) ? "matched" : "unverified";
+    } catch {
+      return "failed";
+    }
+  }
+
+  async function mutate(path: string, method: string, payload: Record<string, unknown>, intention: PortfolioIntention) {
     if (busy.current || blocked.current) return;
     busy.current = true;
+    intentionRef.current = intention;
     setPending(path);
     setUncertain("");
     setNotice("");
@@ -185,36 +270,26 @@ export function PersonalPortfolio() {
         headers: { "content-type": "application/json" },
         body: JSON.stringify(payload),
       });
-      const body = (await response.json().catch(() => ({}))) as { error?: string; message?: string };
-      if (response.status === 409) {
-        const reread = await loadRef.current();
-        settleMutation(
-          "conflict",
-          reread ? "succeeded" : "failed",
-          body.message || "Conflit : une autre modification a été enregistrée. Relisez avant de recommencer.",
-        );
-        return;
-      }
-      if (!response.ok) {
+      const body = (await response.json().catch(() => ({}))) as Record<string, unknown>;
+      const outcome = classifyPortfolioResponse(response.status, body);
+      if (outcome === "refused") {
         settleMutation("refused", "not-attempted", "");
-        setNotice(body.message || body.error || "La modification n'a pas abouti.");
+        setNotice(typeof body.message === "string" ? body.message : typeof body.error === "string" ? body.error : "La modification n'a pas abouti.");
         return;
       }
-      notifyPortfolioChanged();
-      const reread = await loadRef.current();
+      const reread = await probeIntention(intention);
+      if (outcome === "confirmed") notifyPortfolioChanged();
+      await loadRef.current();
       settleMutation(
-        "confirmed",
-        reread ? "succeeded" : "failed",
-        "La modification est enregistrée, mais le portefeuille n'a pas pu être relu.",
+        outcome,
+        reread,
+        outcome === "conflict"
+          ? (typeof body.message === "string" ? body.message : "Conflit : une autre modification a été enregistrée. Relisez avant de recommencer.")
+          : "La modification est enregistrée, mais le portefeuille n'a pas pu être relu.",
       );
     } catch {
-      let reread = false;
-      try {
-        reread = await loadRef.current();
-      } catch {
-        reread = false;
-      }
-      settleMutation("unknown", reread ? "succeeded" : "failed", "");
+      const reread = intentionRef.current ? await probeIntention(intentionRef.current) : "failed";
+      settleMutation("unknown", reread, "");
     } finally {
       busy.current = false;
       setPending("");
@@ -223,6 +298,14 @@ export function PersonalPortfolio() {
     }
   }

+  async function rereadHeld() {
+    const intention = intentionRef.current;
+    const reread = intention ? await probeIntention(intention) : "failed";
+    await loadRef.current();
+    if (!intention) return;
+    settleMutation("unknown", reread, "");
+  }
+
   async function startPreparation() {
     setUncertain("");
     const outcome = await runOpenPreparation(async (result) => {
@@ -241,7 +324,12 @@ export function PersonalPortfolio() {
   }

   if (loading && !board) {
-    return <div className="personal-portfolio" data-testid="portfolio-loading">Chargement du portefeuille…</div>;
+    return (
+      <div className="personal-portfolio" data-testid="portfolio-loading" aria-busy="true">
+        <p>Chargement du portefeuille…</p>
+        <div className="personal-portfolio-skeleton" />
+      </div>
+    );
   }
   if (error && !board) {
     return (
@@ -252,6 +340,7 @@ export function PersonalPortfolio() {
     );
   }
   if (!board) return null;
+  const locked = held || Boolean(pending);
   const canReorder =
     board.preferences.sort === "custom" && filter === "all" && !query.trim() && scope === "current";
   const orderContext = { filter, query: query.trim(), scope };
@@ -270,7 +359,7 @@ export function PersonalPortfolio() {
       <article
         key={`${space.spaceType}-${space.id}`}
         className={board!.preferences.view === "grid" ? "personal-portfolio-card" : "personal-portfolio-row"}
-        draggable={canReorder}
+        draggable={canReorder && !locked}
         onDragStart={(event) => {
           const token = `${space.spaceType}:${space.id}`;
           draggedSpace.current = token;
@@ -281,7 +370,7 @@ export function PersonalPortfolio() {
           if (canReorder) event.preventDefault();
         }}
         onDrop={(event) => {
-          if (!canReorder) return;
+          if (!canReorder || locked) return;
           event.preventDefault();
           const raw = event.dataTransfer.getData("text/plain") || draggedSpace.current;
           draggedSpace.current = "";
@@ -294,7 +383,7 @@ export function PersonalPortfolio() {
             beforeSpaceId: space.id,
             expectedVersion: board!.preferences.version,
             context: orderContext,
-          });
+          }, { kind: "order", knownVersion: board!.preferences.version });
         }}
         data-testid={space.spaceType === "project" ? `open-project-${space.id}` : `resume-prep-${space.id}`}
       >
@@ -305,27 +394,28 @@ export function PersonalPortfolio() {
           <button
             type="button"
             aria-pressed={space.favorite}
+            disabled={locked}
             aria-label={space.favorite ? "Retirer des favoris" : "Ajouter aux favoris"}
             onClick={() =>
               void mutate(`/api/portfolio/spaces/${space.spaceType}/${space.id}/favorite`, "PUT", {
                 favorite: !space.favorite,
                 expectedVersion: space.rowVersion,
-              })
+              }, { kind: "favorite", spaceType: space.spaceType, spaceId: space.id, desired: !space.favorite, knownVersion: space.rowVersion })
             }
           >
             {space.favorite ? "★" : "☆"}
           </button>
           {canReorder ? (
             <>
-              <button type="button" aria-label="Monter" onClick={() => void mutate("/api/portfolio/order", "POST", { spaceType: space.spaceType, spaceId: space.id, direction: "up", expectedVersion: board!.preferences.version, context: orderContext })}>↑</button>
-              <button type="button" aria-label="Descendre" onClick={() => void mutate("/api/portfolio/order", "POST", { spaceType: space.spaceType, spaceId: space.id, direction: "down", expectedVersion: board!.preferences.version, context: orderContext })}>↓</button>
+              <button type="button" aria-label="Monter" disabled={locked} onClick={() => void mutate("/api/portfolio/order", "POST", { spaceType: space.spaceType, spaceId: space.id, direction: "up", expectedVersion: board!.preferences.version, context: orderContext }, { kind: "order", knownVersion: board!.preferences.version })}>↑</button>
+              <button type="button" aria-label="Descendre" disabled={locked} onClick={() => void mutate("/api/portfolio/order", "POST", { spaceType: space.spaceType, spaceId: space.id, direction: "down", expectedVersion: board!.preferences.version, context: orderContext }, { kind: "order", knownVersion: board!.preferences.version })}>↓</button>
             </>
           ) : null}
           <button type="button" aria-label="Actions de l'espace" onClick={() => setMenu(menu === space.id ? null : space.id)}>…</button>
           {menu === space.id ? (
             <div className="personal-portfolio-menu" role="menu">
               <button type="button" disabled aria-disabled="true" title="Le renommage n'est pas disponible dans cette version.">Renommer — indisponible</button>
-              <button type="button" onClick={() => (scope === "archive" ? setConfirmRestore(space) : setConfirm(space))}>
+              <button type="button" disabled={locked} onClick={() => (scope === "archive" ? setConfirmRestore(space) : setConfirm(space))}>
                 {scope === "archive" ? "Restaurer" : "Archiver"}
               </button>
               <button type="button" disabled aria-disabled="true" title="La suppression n'est pas disponible dans cette version.">Supprimer — indisponible</button>
@@ -354,7 +444,7 @@ export function PersonalPortfolio() {
       {notice ? <p role="status" data-testid="portfolio-conflict">{notice}</p> : null}
       {uncertain ? <p role="status" data-testid="portfolio-creation-uncertainty">{uncertain}</p> : null}
       {held ? (
-        <button type="button" data-testid="portfolio-reread" onClick={() => void load()}>
+        <button type="button" data-testid="portfolio-reread" onClick={() => void rereadHeld()}>
           Relire le portefeuille
         </button>
       ) : null}
@@ -370,13 +460,18 @@ export function PersonalPortfolio() {

       {board.resume && scope === "current" ? (
         <section className="personal-portfolio-resume" data-testid="portfolio-resume">
+          <div className="personal-portfolio-mark" aria-hidden="true">
+            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
+              <path d="M4.16667 10H15.8333M10 15.8333L15.8333 10L10 4.16667" stroke="#A5B1C5" strokeWidth="1.41667" strokeLinecap="round" strokeLinejoin="round" />
+            </svg>
+          </div>
           <div>
             <p className="personal-portfolio-kicker">REPRENDRE LE TRAVAIL</p>
             <h2>{board.resume.label}</h2>
             <p>{board.resume.activityLabel} · {formatWhen(board.resume.lastOpenedAt || board.resume.createdAt)}</p>
           </div>
           <div className="personal-portfolio-grow" />
-          <a className="btn" href={hrefFor(board.resume)} onClick={() => notePersonalSpaceEntry(board.resume!.spaceType, board.resume!.id)}>Continuer</a>
+          <a className="personal-portfolio-primary" href={hrefFor(board.resume)} onClick={() => notePersonalSpaceEntry(board.resume!.spaceType, board.resume!.id)}>Continuer avec Nora</a>
         </section>
       ) : null}

@@ -400,12 +495,13 @@ export function PersonalPortfolio() {
         <input aria-label="Filtrer les espaces" placeholder="Filtrer les espaces…" value={query} onChange={(event) => setQuery(event.target.value)} data-testid="portfolio-search" />
         <select
           aria-label="Tri"
+          disabled={locked}
           value={board.preferences.sort}
           onChange={(event) =>
             void mutate("/api/portfolio/preferences", "PATCH", {
               sort: event.target.value as PortfolioSort,
               expectedVersion: board.preferences.version,
-            })
+            }, { kind: "preference", sort: event.target.value, knownVersion: board.preferences.version })
           }
         >
           <option value="recent">Activité récente</option>
@@ -423,12 +519,13 @@ export function PersonalPortfolio() {
               key={key}
               type="button"
               aria-pressed={board.preferences.view === key}
+              disabled={locked}
               aria-label={label}
               onClick={() =>
                 void mutate("/api/portfolio/preferences", "PATCH", {
                   view: key as PortfolioView,
                   expectedVersion: board.preferences.version,
-                })
+                }, { kind: "preference", view: key, knownVersion: board.preferences.version })
               }
             >
               {label}
@@ -470,17 +567,27 @@ export function PersonalPortfolio() {
       </section>

       {confirm ? (
-        <div className="personal-portfolio-dialog" role="dialog" aria-label="Confirmer l'archivage">
-          <p>Archiver « {confirm.label} » retire cet espace de l’accueil. Le projet, ses documents et ses droits restent inchangés.</p>
-          <button type="button" onClick={() => void mutate(`/api/portfolio/spaces/${confirm.spaceType}/${confirm.id}/archive`, "PUT", { archived: true, confirm: true, expectedVersion: confirm.rowVersion })}>Archiver</button>
-          <button type="button" onClick={() => setConfirm(null)}>Annuler</button>
+        <div className="personal-portfolio-overlay" onClick={() => { if (!locked) setConfirm(null); }}>
+          <div className="personal-portfolio-modal" role="dialog" aria-modal="true" aria-label="Confirmer l'archivage" onClick={(event) => event.stopPropagation()} onKeyDown={(event) => { if (event.key === "Escape" && !locked) setConfirm(null); }}>
+            <h2>Retirer {confirm.label} du portefeuille courant ?</h2>
+            <p>L’espace reste accessible dans Archives et par ses liens. Le travail n’est pas interrompu.</p>
+            <div className="personal-portfolio-modal-actions">
+              <button type="button" onClick={() => setConfirm(null)}>Annuler</button>
+              <button type="button" className="personal-portfolio-primary" disabled={locked} onClick={() => void mutate(`/api/portfolio/spaces/${confirm.spaceType}/${confirm.id}/archive`, "PUT", { archived: true, confirm: true, expectedVersion: confirm.rowVersion }, { kind: "archive", spaceType: confirm.spaceType, spaceId: confirm.id, desired: true, knownVersion: confirm.rowVersion })}>Archiver</button>
+            </div>
+          </div>
         </div>
       ) : null}
       {confirmRestore ? (
-        <div className="personal-portfolio-dialog" role="dialog" aria-label="Confirmer la restauration">
-          <p>Restaurer « {confirmRestore.label} » le replace dans le portefeuille courant, avec le même identifiant.</p>
-          <button type="button" onClick={() => void mutate(`/api/portfolio/spaces/${confirmRestore.spaceType}/${confirmRestore.id}/archive`, "PUT", { archived: false, confirm: true, expectedVersion: confirmRestore.rowVersion })}>Restaurer</button>
-          <button type="button" onClick={() => setConfirmRestore(null)}>Annuler</button>
+        <div className="personal-portfolio-overlay" onClick={() => { if (!locked) setConfirmRestore(null); }}>
+          <div className="personal-portfolio-modal" role="dialog" aria-modal="true" aria-label="Confirmer la restauration" onClick={(event) => event.stopPropagation()} onKeyDown={(event) => { if (event.key === "Escape" && !locked) setConfirmRestore(null); }}>
+            <h2>Restaurer {confirmRestore.label} ?</h2>
+            <p>Le même espace revient dans le portefeuille courant, avec son organisation personnelle.</p>
+            <div className="personal-portfolio-modal-actions">
+              <button type="button" onClick={() => setConfirmRestore(null)}>Annuler</button>
+              <button type="button" className="personal-portfolio-primary" disabled={locked} onClick={() => void mutate(`/api/portfolio/spaces/${confirmRestore.spaceType}/${confirmRestore.id}/archive`, "PUT", { archived: false, confirm: true, expectedVersion: confirmRestore.rowVersion }, { kind: "archive", spaceType: confirmRestore.spaceType, spaceId: confirmRestore.id, desired: false, knownVersion: confirmRestore.rowVersion })}>Restaurer</button>
+            </div>
+          </div>
         </div>
       ) : null}
     </div>
diff --git a/projects/sfia-studio-next/web/src/components/portfolio/personal-portfolio.css b/projects/sfia-studio-next/web/src/components/portfolio/personal-portfolio.css
index 278b5c44..3660c010 100644
--- a/projects/sfia-studio-next/web/src/components/portfolio/personal-portfolio.css
+++ b/projects/sfia-studio-next/web/src/components/portfolio/personal-portfolio.css
@@ -3,17 +3,26 @@
   --pf-muted: #a5b1c5;
   --pf-panel: #151d2c;
   --pf-border: #273248;
-  --pf-bg: #0d1220;
+  --pf-base: #0a0e18;
+  --pf-accent: #7880ef;
+  --pf-accent-bg: #242c4b;
+  --pf-kicker: #b8b1ff;
+  --pf-action: #292d58;
+  --pf-action-line: #656fe1;
   color: var(--pf-ink);
   min-width: 0;
+  padding-bottom: 24px;
 }
+
 .personal-portfolio-header,
 .personal-portfolio-synthesis,
 .personal-portfolio-resume,
 .personal-portfolio-tools,
-.personal-portfolio-library {
+.personal-portfolio-library,
+.personal-portfolio-status {
   margin: 0 40px;
 }
+
 .personal-portfolio-header {
   display: flex;
   align-items: flex-end;
@@ -21,28 +30,49 @@
   min-height: 92px;
   padding-top: 24px;
 }
+
 .personal-portfolio-kicker {
   margin: 0;
-  font-size: 11px;
+  font-size: 12px;
+  line-height: 17px;
   letter-spacing: 0.08em;
-  color: var(--pf-muted);
+  font-weight: 600;
+  color: var(--pf-kicker);
 }
+
 .personal-portfolio-title {
-  margin: 5px 0 0;
+  margin: 4px 0 0;
   font-size: 34px;
-  line-height: 46px;
+  line-height: 40px;
   font-weight: 600;
 }
+
 .personal-portfolio-sub {
   margin: 4px 0 0;
   color: var(--pf-muted);
   font-size: 15px;
   line-height: 21px;
 }
+
 .personal-portfolio-grow { flex: 1; }
+
+.personal-portfolio-primary {
+  width: 218px;
+  height: 38px;
+  border: 1px solid var(--pf-action-line);
+  background: var(--pf-action);
+  color: #f4f6fc;
+  border-radius: 9px;
+  font-size: 12px;
+  font-weight: 600;
+  line-height: 18px;
+}
+
+.personal-portfolio-primary:disabled { opacity: 0.45; cursor: not-allowed; }
+
 .personal-portfolio-synthesis {
   display: grid;
-  grid-template-columns: 1fr 1px 1fr 1px 1fr;
+  grid-template-columns: minmax(0, 1fr) 1px minmax(0, 1fr) 1px minmax(0, 1fr);
   align-items: center;
   height: 136px;
   margin-top: 8px;
@@ -50,37 +80,68 @@
   border: 1px solid var(--pf-border);
   border-radius: 12px;
 }
-.personal-portfolio-stat { padding: 14px 16px 14px 24px; }
-button.personal-portfolio-stat { text-align: left; background: transparent; color: inherit; border: 0; cursor: pointer; }
-.personal-portfolio-stat span { display: block; color: var(--pf-muted); font-size: 15px; line-height: 21px; }
+
+.personal-portfolio-stat { padding: 14px 16px 14px 24px; min-width: 0; }
+button.personal-portfolio-stat {
+  text-align: left;
+  background: transparent;
+  color: inherit;
+  border: 0;
+  cursor: pointer;
+  font: inherit;
+}
+button.personal-portfolio-stat:disabled { cursor: not-allowed; opacity: 0.55; }
+.personal-portfolio-stat span { display: block; color: var(--pf-muted); font-size: 15px; line-height: 21px; font-weight: 500; }
 .personal-portfolio-stat strong {
   font-size: 46px;
   line-height: 63px;
   font-weight: 600;
   margin-right: 12px;
 }
-.personal-portfolio-stat em { font-style: normal; color: var(--pf-muted); font-size: 13px; }
+.personal-portfolio-stat em { font-style: normal; color: var(--pf-muted); font-size: 13px; line-height: 18px; }
 .personal-portfolio-rule { background: var(--pf-border); height: 92px; }
+
 .personal-portfolio-resume {
   display: flex;
   align-items: center;
   gap: 20px;
   height: 158px;
   margin-top: 8px;
-  padding: 0 25px;
-  background: var(--pf-panel);
-  border: 1px solid var(--pf-border);
+  padding: 0 24px;
+  background: var(--pf-accent-bg);
+  border: 1px solid var(--pf-accent);
   border-radius: 12px;
 }
-.personal-portfolio-resume h2 { margin: 0; font-size: 26px; line-height: 36px; }
-.personal-portfolio-resume p { margin: 6px 0 0; color: var(--pf-muted); }
+
+.personal-portfolio-mark {
+  width: 64px;
+  height: 64px;
+  border-radius: 14px;
+  background: var(--pf-panel);
+  display: flex;
+  align-items: center;
+  justify-content: center;
+  flex: 0 0 64px;
+}
+
+.personal-portfolio-resume h2 { margin: 0; font-size: 26px; line-height: 36px; font-weight: 600; }
+.personal-portfolio-resume p { margin: 7px 0 0; color: var(--pf-muted); font-size: 14px; line-height: 19px; }
+.personal-portfolio-resume a.personal-portfolio-primary {
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  text-decoration: none;
+}
+
 .personal-portfolio-tools {
   display: flex;
   gap: 12px;
   align-items: center;
   min-height: 40px;
-  margin-top: 8px;
+  margin-top: 16px;
+  flex-wrap: wrap;
 }
+
 .personal-portfolio-filters, .personal-portfolio-views { display: flex; gap: 2px; }
 .personal-portfolio-filters button,
 .personal-portfolio-views button,
@@ -94,63 +155,153 @@ button.personal-portfolio-stat { text-align: left; background: transparent; colo
   min-height: 35px;
 }
 .personal-portfolio-filters button[aria-pressed="true"],
-.personal-portfolio-views button[aria-pressed="true"] {
-  background: #243044;
-}
+.personal-portfolio-views button[aria-pressed="true"] { background: #243044; }
 .personal-portfolio-tools input { width: 236px; padding: 0 12px; }
-.personal-portfolio-library { margin-top: 8px; }
-.personal-portfolio-row, .personal-portfolio-columns {
+.personal-portfolio button:disabled,
+.personal-portfolio select:disabled,
+.personal-portfolio input:disabled { opacity: 0.45; cursor: not-allowed; }
+
+.personal-portfolio-library { margin-top: 12px; }
+.personal-portfolio-library h2 { margin: 0 0 8px; font-size: 20px; line-height: 28px; }
+
+.personal-portfolio-row,
+.personal-portfolio-columns {
   display: grid;
-  grid-template-columns: minmax(0, 1fr) 158px 170px 120px;
+  grid-template-columns: minmax(0, 1fr) 158px 170px 36px;
   align-items: center;
   gap: 8px;
   min-height: 50px;
+  padding: 0 12px;
   border-bottom: 1px solid var(--pf-border);
+  background: var(--pf-base);
+  position: relative;
+}
+
+.personal-portfolio-columns {
+  min-height: 30px;
+  color: var(--pf-muted);
+  font-size: 11px;
+  letter-spacing: 0.06em;
+  background: transparent;
 }
-.personal-portfolio-columns { min-height: 30px; color: var(--pf-muted); font-size: 11px; letter-spacing: 0.06em; }
+
+.personal-portfolio-identity { display: flex; align-items: center; gap: 12px; min-width: 0; }
+.personal-portfolio-monogram {
+  width: 36px;
+  height: 36px;
+  border-radius: 8px;
+  background: var(--pf-accent-bg);
+  color: var(--pf-kicker);
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  font-weight: 600;
+  flex: 0 0 36px;
+}
+.personal-portfolio-identity a { color: inherit; font-weight: 600; font-size: 15px; line-height: 21px; text-decoration: none; }
+.personal-portfolio-identity small { display: block; color: var(--pf-muted); font-size: 12px; line-height: 17px; }
+.personal-portfolio-meta { color: var(--pf-muted); font-size: 14px; }
+.personal-portfolio-actions { display: flex; justify-content: flex-end; gap: 4px; }
+
 .personal-portfolio-grid {
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
   gap: 8px;
 }
 .personal-portfolio-card {
-  min-height: 120px;
+  min-height: 116px;
   padding: 16px;
   background: var(--pf-panel);
   border: 1px solid var(--pf-border);
   border-radius: 12px;
+  position: relative;
 }
-.personal-portfolio-group h3 { margin: 12px 0 4px; font-size: 14px; color: var(--pf-muted); }
+
 .personal-portfolio-menu {
   position: absolute;
-  right: 0;
-  z-index: 2;
+  right: 12px;
+  top: 42px;
+  z-index: 5;
   min-width: 220px;
   padding: 8px;
-  background: var(--pf-panel);
+  background: #121826;
   border: 1px solid var(--pf-border);
   border-radius: 10px;
+  display: flex;
+  flex-direction: column;
+  gap: 2px;
 }
-.personal-portfolio-dialog {
-  margin-top: 8px;
+.personal-portfolio-menu button {
+  text-align: left;
+  background: transparent;
+  color: var(--pf-ink);
+  border: 0;
+  border-radius: 6px;
+  min-height: 32px;
+  padding: 0 8px;
+}
+.personal-portfolio-menu button:disabled { color: var(--pf-muted); }
+
+.personal-portfolio-overlay {
+  position: fixed;
+  inset: 0;
+  z-index: 40;
+  background: rgba(6, 8, 14, 0.72);
+  display: flex;
+  align-items: center;
+  justify-content: center;
   padding: 16px;
+}
+.personal-portfolio-modal {
+  width: min(460px, 100%);
+  background: #151b2b;
   border: 1px solid var(--pf-border);
+  border-radius: 14px;
+  padding: 20px;
+  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
+}
+.personal-portfolio-modal h2 { margin: 0 0 8px; font-size: 18px; }
+.personal-portfolio-modal p { margin: 0 0 16px; color: var(--pf-muted); }
+.personal-portfolio-modal-actions { display: flex; justify-content: flex-end; gap: 8px; }
+
+.personal-portfolio-skeleton {
+  height: 136px;
+  margin: 8px 40px 0;
   border-radius: 12px;
-  background: var(--pf-panel);
+  background: linear-gradient(90deg, #151d2c 0%, #1c2638 50%, #151d2c 100%);
 }
-@media (max-width: 1279px) {
+
+@media (max-width: 1433px) {
   .personal-portfolio-header,
   .personal-portfolio-synthesis,
   .personal-portfolio-resume,
   .personal-portfolio-tools,
-  .personal-portfolio-library { margin-left: 16px; margin-right: 16px; }
-  .personal-portfolio-tools { flex-wrap: wrap; }
-  .personal-portfolio-synthesis { height: auto; grid-template-columns: 1fr; }
-  .personal-portfolio-rule { display: none; }
+  .personal-portfolio-library,
+  .personal-portfolio-status,
+  .personal-portfolio-skeleton { margin-left: 28px; margin-right: 28px; }
 }
-@media (max-width: 390px) {
-  .personal-portfolio-columns, .personal-portfolio-row { grid-template-columns: minmax(0, 1fr) auto; }
+
+@media (max-width: 767px) {
+  .personal-portfolio-header,
+  .personal-portfolio-synthesis,
+  .personal-portfolio-resume,
+  .personal-portfolio-tools,
+  .personal-portfolio-library,
+  .personal-portfolio-status,
+  .personal-portfolio-skeleton { margin-left: 16px; margin-right: 16px; }
+  .personal-portfolio-header { align-items: flex-start; flex-direction: column; }
+  .personal-portfolio-primary { width: 100%; }
+  .personal-portfolio-synthesis { height: auto; }
+  .personal-portfolio-stat strong { font-size: 28px; line-height: 36px; }
+  .personal-portfolio-rule { height: 48px; }
+  .personal-portfolio-resume { height: auto; min-height: 158px; flex-direction: column; align-items: flex-start; padding: 16px; }
+  .personal-portfolio-columns,
+  .personal-portfolio-row { grid-template-columns: minmax(0, 1fr) 36px; }
   .personal-portfolio-columns span:nth-child(2),
   .personal-portfolio-columns span:nth-child(3),
   .personal-portfolio-row .personal-portfolio-meta { display: none; }
 }
+
+@media (prefers-reduced-motion: reduce) {
+  .personal-portfolio-skeleton { background: #151d2c; }
+}
diff --git a/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx b/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
index 38450a53..f6b4487f 100644
--- a/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
+++ b/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
@@ -86,6 +86,7 @@ function StudioShellInner({ children }: { children: React.ReactNode }) {
   const onSasVisual = pathname.startsWith("/dev/sas-visual/");
   const onSasPreparation = Boolean(preparationId) || onSasVisual;
   const [openingPrep, setOpeningPrep] = useState(false);
+  const [personalNavOpen, setPersonalNavOpen] = useState(false);
   const [prepNotice, setPrepNotice] = useState("");
   const activeProjectName = projectSpaceReady ? projectSpace?.projectName ?? null : null;
   const activeProjectSubtitle = projectSpaceReady ? projectSpace?.subtitle ?? null : null;
@@ -418,6 +419,9 @@ function StudioShellInner({ children }: { children: React.ReactNode }) {
             data-testid="studio-shell-topbar"
           >
             <div className="flex items-center gap-3 min-w-0 md:hidden">
+              <button type="button" className="md:hidden" data-testid="personal-nav-open" aria-expanded={personalNavOpen} aria-controls="personal-nav-drawer" onClick={() => setPersonalNavOpen(true)}>
+                Menu
+              </button>
               <span
                 aria-hidden
                 className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-[8px] text-sm font-bold"
@@ -525,6 +529,17 @@ function StudioShellInner({ children }: { children: React.ReactNode }) {
           {children}
         </main>

+        {personalSpace && personalNavOpen ? (
+          <div className="studio-personal-drawer md:hidden" onClick={() => setPersonalNavOpen(false)}>
+            <div id="personal-nav-drawer" className="studio-personal-drawer-panel" role="dialog" aria-modal="true" aria-label="Navigation personnelle" onClick={(event) => event.stopPropagation()} onKeyDown={(event) => { if (event.key === "Escape") setPersonalNavOpen(false); }}>
+              <button type="button" onClick={() => setPersonalNavOpen(false)}>Fermer</button>
+              <Link href="/portfolio" onClick={() => setPersonalNavOpen(false)}>Portefeuille</Link>
+              <Link href="/portfolio?scope=archive" onClick={() => setPersonalNavOpen(false)}>Archives</Link>
+              <button type="button" disabled={openingPrep} onClick={() => void handleOpenPreparation()}>Nouveau projet</button>
+              <PersonalRailFavorites />
+            </div>
+          </div>
+        ) : null}
         {personalSpace ? (
           <nav
             className="studio-shell-bottom-nav md:hidden"
diff --git a/projects/sfia-studio-next/web/src/components/shell/studio-shell.css b/projects/sfia-studio-next/web/src/components/shell/studio-shell.css
index c4b691d3..a8cbedf4 100644
--- a/projects/sfia-studio-next/web/src/components/shell/studio-shell.css
+++ b/projects/sfia-studio-next/web/src/components/shell/studio-shell.css
@@ -243,6 +243,34 @@ html.studio-shell-lock body {
   padding-bottom: calc(5.5rem + env(safe-area-inset-bottom, 0px));
 }

+.studio-personal-drawer {
+  position: fixed;
+  inset: 0;
+  z-index: 30;
+  background: rgba(6, 8, 14, 0.72);
+}
+.studio-personal-drawer-panel {
+  width: min(246px, 100%);
+  height: 100%;
+  background: #0d1220;
+  border-right: 1px solid #273248;
+  padding: 16px;
+  overflow: auto;
+}
+.studio-personal-drawer-panel a,
+.studio-personal-drawer-panel button {
+  display: block;
+  width: 100%;
+  text-align: left;
+  color: #f2f4fc;
+  background: transparent;
+  border: 0;
+  min-height: 40px;
+  text-decoration: none;
+  font: inherit;
+  cursor: pointer;
+}
+
 .studio-shell-mobile-strip {
   display: none;
 }
diff --git a/projects/sfia-studio-next/web/tests/unit/portfolio-organization.test.ts b/projects/sfia-studio-next/web/tests/unit/portfolio-organization.test.ts
index 194a280c..aed69179 100644
--- a/projects/sfia-studio-next/web/tests/unit/portfolio-organization.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/portfolio-organization.test.ts
@@ -1,6 +1,10 @@
 import { describe, expect, it } from "vitest";
 import { acceptNavigationKey, destinationIndex, rememberNavigationKey } from "@/domains/identity/portfolio-organization";
-import { portfolioMutationFollowUp } from "@/components/portfolio/PersonalPortfolio";
+import {
+  classifyPortfolioResponse,
+  intentionMatchesBoard,
+  portfolioMutationFollowUp,
+} from "@/components/portfolio/PersonalPortfolio";

 describe("portfolio organization rules", () => {
   it("places an item before its target in either direction", () => {
@@ -23,23 +27,36 @@ describe("portfolio organization rules", () => {
     expect(acceptNavigationKey(remembered, `${other}:2`)).toBe(true);
   });

-  it("keeps an unknown mutation blocked until a reread succeeds, without retrying it", () => {
+  it("keeps an unknown mutation blocked until the relevant state is reread", () => {
+    expect(classifyPortfolioResponse(503, { message: "unavailable" })).toBe("unknown");
+    expect(classifyPortfolioResponse(500, {})).toBe("unknown");
+    expect(classifyPortfolioResponse(200, {})).toBe("unknown");
+    expect(classifyPortfolioResponse(200, { rowVersion: 2, favorite: true })).toBe("confirmed");
+    expect(classifyPortfolioResponse(404, { error: "missing" })).toBe("refused");
+    expect(classifyPortfolioResponse(409, { message: "conflict" })).toBe("conflict");
     expect(portfolioMutationFollowUp({ outcome: "unknown", reread: "failed" })).toEqual({
       uncertain: true,
       retry: false,
       blockFurtherMutations: true,
     });
-    expect(portfolioMutationFollowUp({ outcome: "unknown", reread: "succeeded" })).toEqual({
-      uncertain: false,
+    expect(portfolioMutationFollowUp({ outcome: "unknown", reread: "unverified" })).toEqual({
+      uncertain: true,
       retry: false,
-      blockFurtherMutations: false,
+      blockFurtherMutations: true,
     });
-    expect(portfolioMutationFollowUp({ outcome: "confirmed", reread: "failed" })).toEqual({
+    expect(portfolioMutationFollowUp({ outcome: "unknown", reread: "matched" })).toEqual({
       uncertain: false,
       retry: false,
-      blockFurtherMutations: true,
+      blockFurtherMutations: false,
     });
-    expect(portfolioMutationFollowUp({ outcome: "refused", reread: "not-attempted" }).retry).toBe(false);
+    expect(portfolioMutationFollowUp({ outcome: "confirmed", reread: "failed" }).blockFurtherMutations).toBe(true);
     expect(portfolioMutationFollowUp({ outcome: "refused", reread: "not-attempted" }).uncertain).toBe(false);
+    const board = {
+      items: [{ spaceType: "preparation" as const, id: "prep_1", favorite: false, archived: false }],
+      preferences: { view: "list", sort: "recent", version: 2 },
+    };
+    expect(intentionMatchesBoard({ kind: "favorite", spaceType: "preparation", spaceId: "prep_1", desired: true, knownVersion: 1 }, board)).toBe(false);
+    expect(intentionMatchesBoard({ kind: "favorite", spaceType: "preparation", spaceId: "prep_absent", desired: true, knownVersion: 1 }, board)).toBe(false);
+    expect(intentionMatchesBoard({ kind: "preference", view: "grid", knownVersion: 1 }, { ...board, preferences: { view: "grid", sort: "recent", version: 2 } })).toBe(true);
   });
 });
```
