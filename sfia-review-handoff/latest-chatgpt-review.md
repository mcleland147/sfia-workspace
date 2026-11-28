# Review Pack — finalisation du complement A

Date : 2026-11-28 14:30 CET.
Cycle : 08 Delivery / implementation. Profil Standard. Typologie INC.
Perimetre : garanties residuelles du portefeuille personnel, suivi v0.23 §28.2 a §28.4.
Verdict propose : READY WITH RESERVES — COMPLEMENT A.

## Identite Git

- Depot : mcleland147/sfia-workspace. Racine : /Users/morris/Projects/sfia-wt-next-ml5-20261123.
- Branche : sfia/next-ml5-integrated-delivery-20261123.
- Entree : 561b7277703aeea46f15f1b642efb4d8f57ed285. Tree 1f18ed384324792d62cf748602b21485e0cdf839. Parent c0be75b23ce0c2b738b5a6b32efc9ac4494cea5e.
- Sortie : 1eedfba8ea09163a1ba780fbeb16563034895379. Tree cd4581040b14531676250a737a098e960456b4b8. Parent 561b7277703aeea46f15f1b642efb4d8f57ed285.
- origin/main et merge-base : 997897fd7cf914771e7d08e8030dc7123fab7d25. Inchanges.
- Push fast-forward : 561b7277..1eedfba8. Aucune PR ouverte. Aucun run GitHub Actions observe sur la branche avant et apres le push.
- Arbre de travail : seuls .tmp-sfia-review/ et web/.tmp-sfia-review/ restent non suivis. Non commits.

## Sources lues

- Suivi v0.23 §28, commit c7243948fd31d583427854eacfe21bfb5c0a7ef9, lu sans merge.
- Contrats portefeuille 46215293, non merges. PF-11, PF-24, PF-32, PF-34 conserves par le comportement.
- Handoff precedent 22dbdea7f6842d3b6b9fa58dcfdd8737b079f93a, blob 137047c926036dd41070871bdd65f5caee153efc. Preuves reutilisees, verdict non repris comme preuve.
- create-project.ts, verrou de ligne preparations FOR UPDATE, lu sans modification.
- Consommateurs de l'ancienne projection : aucun composant produit ne lit portfolio.projects. Les tests a1 appellent loadPortfolio directement. ux004 simule la reponse.

## Corrections

F-01. Apres le verrou Pilote, chaque ecriture verrouille la ligne du projet ou de la preparation, puis revérifie l'eligibilite. Le deplacement verrouille aussi les preparations ouvertes, par identifiant. La creation de projet n'est pas modifiee. Une preparation rattachee pendant l'attente n'est plus accusee comme favorite.

F-02. Une lecture en echec reseau, HTTP ou JSON ne remplace pas le tableau par une liste vide. Un accuse perdu laisse le resultat inconnu et bloque les modifications jusqu'a une relecture reussie. Un refus confirme ne bloque pas. Une relecture reussie reconcilie l'etat affiche et ne declare pas le succes de l'intention. L'intention n'est jamais renvoyee. Le bouton Relire ne refait que la lecture, avec les criteres courants.

F-03. last_opened_at prend clock_timestamp au point d'effet et ne recule pas, via GREATEST. Les huit dernieres cles sont conservees dans la colonne existante. Une cle deja vue est ignoree, y compris apres une cle d'un autre onglet. Aucune migration.

F-04. Les lectures d'une reponse partagent une transaction REPEATABLE READ. Le tri et le curseur departagent type et identifiant. Un curseur invalide repond 400. La restauration deja effective ne decale pas les positions. Un changement d'archive incremente la version d'organisation, et une intention d'ordre perimee repond 409. Le deplacement exige le tri personnalise enregistre. GET /api/portfolio ne renvoie plus de listes vides fictives. L'ancienne lecture reste servie seulement si preparationsCursor est demande.

F-05. Le rattachement naturel par le conducteur du sas n'a pas ete rejoue. Le parcours demande le document et la creation de projet existants, sans simulation cognitive ajoutee. Reserve R-A06-ATTACH, DEFERRED TO RECETTE. Le test concurrent F-01 couvre la frontiere technique. L'identite d'archive du parcours navigateur precedent reste applicable pour l'identifiant visible. La monotonie et l'idempotence de restauration sont prouvees en PostgreSQL. Webpack non ouvert. Turbopack non relance.

## Tests executes

npx vitest run tests/unit/portfolio-organization.test.ts tests/integration/portfolio-organization.pg.test.ts
11 tests PASS, 2 fichiers, base sfia_next_e2e. Duree 1,05 s.

- Favori concurrent contre un rattachement qui tient le verrou de ligne : 404, aucune ligne d'organisation, preparation absente du tableau, aucun favori.
- Horodatage place deux heures dans le futur, puis ouverture d'un autre onglet : la date ne recule pas. Rejeu de la premiere cle : ignore, date inchangee.
- Restauration repetee : positions inchangees. Deplacement avec l'ancienne version : 409. Curseur not-a-cursor : 400.
- Deplacement sans tri personnalise enregistre : 409. Cible absente une fois le tri enregistre : 409.
- Effectifs de groupe et total filtre egaux sur la meme reponse.
- Decision client : accuse perdu et relecture echouee restent incertains et bloques, sans retry. Relecture reussie debloque. Refus confirme n'est pas incertain.

tsc --noEmit : 34 diagnostics, identiques a /tmp/sfia-tsc-entry.txt. Aucune erreur nouvelle. Les erreurs historiques hors perimetre ne sont pas corrigees.

Build production : Compiled successfully. BUILD_ID RsolSmQEI0ns4fj-kuCWD.
Runtime DEV : 127.0.0.1:3100, PID 26402, next start, arbre 1eedfba8. POST /api/dev/login pilote A : 200. GET /api/portfolio : 200, cles board et session, pas de cle portfolio, compteurs presents.
RECETTE : 127.0.0.1:3200, PID 58965 inchange. pilot_portfolio_preferences absent (schema 027). Aucune ecriture.

## Preuves anterieures reutilisees

Handoff 22dbdea7. Le parcours navigateur de 31,4 s sur Turbopack :3101 n'a pas ete rejoue. Il reste applicable pour les trois vues, la recherche perimee, l'ordre clavier et drag, le favori du rail, la pagination de 26 preparations, l'isolation du pilote B et la persistance de la vue Groupes dans un second contexte. Le code de ces comportements n'est pas le delta, sauf le favori et l'archive qui passent maintenant par le verrou de ligne. Leur contrat visible reste le meme. Le message d'incertitude du parcours precedent n'est plus l'oracle : une relecture reussie reconcilie desormais l'etat.

## Matrice F-01 a F-05

| Ensemble | Correction | Preuve | Verdict | Reserve |
| --- | --- | --- | --- | --- |
| F-01 | verrou de ligne puis recontrole | test PG concurrent | PROVEN | aucune |
| F-02 | etat honnete, blocage, pas de retry | decision unitaire branchee a l'ecran | PROVEN au niveau de la decision | injection navigateur non rejouee |
| F-03 | horodatage monotone, huit cles | test PG | PROVEN dans la fenetre | R-A04-WINDOW |
| F-04 | snapshot, curseur, version, tri serveur, API | tests PG et lecture du code | PROVEN | aucune |
| F-05 | preuve reutilisee et differee | parcours precedent non rejoue | DEFERRED pour le rattachement naturel | R-A06-ATTACH |

## Matrice A-01 a A-06

Les acquis du candidat 561b7277 sont conserves. Ce cycle ne reouvre pas les axes.

| Axe | Etat cumule |
| --- | --- |
| A-01 | projection SQL conservee, snapshot intra-reponse ajoute |
| A-02 | verrou Pilote conserve, verrou de ligne ajoute, course de rattachement prouvee |
| A-03 | ordre garde conserve, version d'archive et tri enregistre ajoutes |
| A-04 | deduplication conservee, monotonie et fenetre de huit cles ajoutees |
| A-05 | single-flight conserve, incertitude maintenue jusqu'a relecture reussie |
| A-06 | parcours navigateur precedent reutilise, rattachement naturel differe |

## Matrice P01 a P10

Identifiants stables. Aucun n'est receptionne : la qualification visuelle reste au complement B.

| ID | Libelle | Delta de ce cycle | Preuve | Suite |
| --- | --- | --- | --- | --- |
| P01 | Tableau de bord | coherence intra-reponse | PG effectifs | visuel B |
| P02 | Reprise du travail | horodatage monotone | PG | pertinence RECETTE, pas une preuve de race |
| P03 | Trois modes | inchange | parcours precedent | visuel B |
| P04 | Bibliotheque | curseur type/id | PG curseur invalide | visuel B |
| P05 | Recherche et filtres | inchange | parcours precedent | visuel B |
| P06 | Tri et reorganisation | tri enregistre et version | PG 409 | visuel B |
| P07 | Favoris | refus apres rattachement | PG concurrent | R-A06-ATTACH |
| P08 | Persistance | preferences conservees | parcours precedent et PG | visuel B |
| P09 | Archivage | restauration idempotente | PG | identite navigateur precedente |
| P10 | Navigation et robustesse | UNKNOWN bloque | decision unitaire | injection navigateur non rejouee |

## Reserves

R-A04-WINDOW. Limite technique. La colonne navigation_key conserve huit cles. Une cle plus ancienne peut encore etre acceptee. Impact : un indicateur personnel peut avancer sur un rejeu tres ancien. Preuve disponible : rejeu dans la fenetre refuse, horodatage non regressif. Sortie : si Morris veut une garantie illimitee, une nouvelle persistance est necessaire et n'a pas ete faite. Environnement : decision Morris. Gate Morris : non donnee.

R-A06-ATTACH. Preuve manquante non bloquante. Comportement : une preparation favorite rattachee par le conducteur disparait du tableau et ne laisse pas de favori. Preuve disponible : le test concurrent sur le verrou de ligne. Motif du report : le parcours navigateur exige le document et la creation de projet, sans fixture artificielle. Risque : faible, la projection exclut deja une preparation rattachee et le test refuse l'ecriture tardive. Scenario RECETTE : preparation favorite, creation de projet par le conducteur existant, meme contexte, preparation autonome absente, favori absent. Responsable : Morris, en recette. Gate Morris : non donnee. Statut : NOT RUN / DEFERRED TO RECETTE.

R-E2E-WEBPACK. Dette d'outillage. Le runner webpack nominal n'est pas retabli. Aucun claim webpack PASS. Sortie : un besoin d'outillage ulterieur, sans modification produit dans ce cycle.

## Fake / Real

Transactions PostgreSQL reelles sur sfia_next_e2e. Routes non rejouees dans un navigateur pour ce delta. Build et runtime DEV identifies. Login DEV substitue. Aucun appel fournisseur. Claims : IMPLEMENTED, COVERAGE VERIFIED, DETERMINISTIC PROVEN, PG BEHAVIOR PROVEN sur les tests cites. Claims interdits non utilises : READY FOR REAL, F2 PASS, G2 PASS, mandat 1 accepte, livraison 1 acceptee, ADOPTED.

## Garde-fous

Schema 028 inchange. Aucun fichier de migration, schema.ts ou service D2 modifie. Aucune donnee historique DEV ou RECETTE modifiee pour une preuve. Les tests creent leurs propres pilotes dans sfia_next_e2e. Complement B non engage. Mandat 2 non engage. NO RELEASE. STABLE NOT AVAILABLE. NOT ADOPTED.

## Decisions Morris

- Accepter ou non la fenetre de huit cles, R-A04-WINDOW.
- Accepter ou non le report du rattachement naturel, R-A06-ATTACH.
- Ne pas engager le complement B avant cette revue.

## Fichiers

Aucune creation. Sept fichiers modifies, +456 / -67.

```
diff --git a/projects/sfia-studio-next/construction/convergence-ux-ui-globale/portefeuille/as-built-portefeuille-personnel.md b/projects/sfia-studio-next/construction/convergence-ux-ui-globale/portefeuille/as-built-portefeuille-personnel.md
index a1e5f44b..67a87a68 100644
--- a/projects/sfia-studio-next/construction/convergence-ux-ui-globale/portefeuille/as-built-portefeuille-personnel.md
+++ b/projects/sfia-studio-next/construction/convergence-ux-ui-globale/portefeuille/as-built-portefeuille-personnel.md
@@ -1,8 +1,24 @@
 # As-built — Portefeuille personnel et navigation

-Date : 28 novembre 2026. Mandat 1, complément A. Classe NO RELEASE.
+Date : 28 novembre 2026. Mandat 1, finalisation du complément A. Classe NO RELEASE.
 Schéma 028 inchangé. Aucune migration 029. Complément B non engagé.

+## Finalisation — garanties résiduelles
+
+Les lectures du tableau partagent une transaction REPEATABLE READ. Les compteurs, les effectifs, le total, la page et la reprise d'une même réponse voient le même instant. La collection peut encore changer entre deux pages.
+
+Le curseur et le tri départagent l'identité type et identifiant. Un curseur mal formé répond 400.
+
+Une écriture personnelle verrouille d'abord le Pilote, puis la ligne du projet ou de la préparation, puis revérifie l'éligibilité. Le déplacement verrouille aussi les préparations ouvertes du Pilote, par identifiant. La création de projet conserve ses propres verrous. Une préparation rattachée avant l'effet n'est plus favorite et n'apparaît plus comme espace autonome.
+
+L'ordre n'est modifié que si le tri enregistré est le tri personnalisé. L'archivage et la restauration qui changent l'état incrémentent la version d'organisation. Une restauration déjà effective ne décale pas les positions.
+
+Le signal d'ouverture prend l'heure du serveur au moment de l'effet et ne recule jamais. Les huit dernières clés sont retenues dans la clé existante. Une clé déjà vue, y compris après l'ouverture d'un autre onglet, ne compte pas comme une nouvelle ouverture. Une clé plus ancienne que cette fenêtre peut encore être acceptée : la colonne unique ne conserve pas un journal illimité.
+
+Une lecture en échec ne remplace pas le tableau par une liste vide. Un accusé perdu laisse le résultat inconnu et bloque les modifications suivantes jusqu'à une relecture réussie. L'intention n'est pas renvoyée. Le bouton Relire ne refait que la lecture.
+
+La réponse GET du portefeuille ne renvoie plus une ancienne projection vide. Le tableau est le contrat servi. L'ancienne lecture reste disponible seulement lorsqu'un curseur de préparations est demandé.
+
 ## Complément A — lectures et écritures

 La lecture du tableau ne charge plus la collection entière en mémoire.
@@ -10,8 +26,8 @@ Le filtre, la recherche, le tri et la page sont exécutés par PostgreSQL sur l'
 Les compteurs portent sur les espaces courants. Les effectifs de groupe et le total filtré portent sur le résultat complet, pas sur la page.
 L'aperçu reste à 5. La collection déployée reste à 25. Le curseur est lié au tri, au filtre, à la recherche et au périmètre. Un curseur d'une autre lecture est refusé.

-Les écritures D1 prennent un verrou transactionnel par Pilote, distinct des verrous D2.
-La première écriture et les écritures suivantes se sérialisent ainsi. Une version périmée répond 409. L'éligibilité propriétaire est revérifiée dans le verrou.
+Les écritures D1 prennent un verrou transactionnel par Pilote, distinct des verrous D2, puis le verrou de ligne décrit ci-dessus.
+La première écriture et les écritures suivantes se sérialisent ainsi. Une version périmée répond 409. L'éligibilité propriétaire est revérifiée après l'attente.

 L'ordre personnalisé n'est accepté que sur la collection courante, filtre Tout, sans recherche.
 Le déplacement se fait avant la cible, dans les deux sens. Une cible absente ne réussit pas.
@@ -21,12 +37,12 @@ Le signal d'ouverture n'utilise plus l'origine de performance du document comme
 Une note d'entrée est posée avant la navigation depuis le portefeuille ou un favori.
 Le même onglet ignore une clé déjà envoyée ou une séquence plus ancienne.
 Un remontage du même document sans nouvelle note ne crée pas une seconde ouverture.
-Un autre onglet peut encore faire avancer l'horodatage selon l'ordre d'arrivée : la table ne conserve que la dernière clé.
+La fenêtre des huit dernières clés et l'horodatage monotone sont décrits ci-dessus. Une clé plus ancienne que cette fenêtre reste une limite du schéma 028.
 Un rechargement sans note, un échec HTTP et un espace archivé ne changent pas la date. La navigation n'est pas bloquée.

 Le rail relit les favoris quand le tableau change, et ignore une réponse plus ancienne.
 Les compteurs filtrent la collection. La recherche du rail interroge les espaces du Pilote. Le lien Archives ouvre le périmètre archivé.
-Une mutation en cours n'est pas relancée. Un 409 déclenche une relecture. Un échec réseau laisse le résultat inconnu et ne renvoie pas l'intention.
+Une mutation en cours n'est pas relancée. Un 409 déclenche une relecture. Un échec réseau laisse le résultat inconnu, bloque les modifications suivantes tant que la relecture échoue, et ne renvoie pas l'intention.

 ## G2

diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 54bfcfd5..ac65cdeb 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -1,3 +1,14 @@
+## delivery_id: DELIV-2026-11-28-ML5-PORTFOLIO-GUARANTEES-DEV
+
+- **date_local**: 2026-11-28 (Europe/Paris)
+- **lane**: DEV only — finalisation ciblée du complément A
+- **branch**: `sfia/next-ml5-integrated-delivery-20261123`
+- **HEAD_base**: `561b7277703aeea46f15f1b642efb4d8f57ed285`
+- **commit**: `fix(next): close the remaining personal portfolio guarantees`
+- **schema_revision**: inchangé, `028_pilot_portfolio_organization`
+- **scope**: linéarisation D1/D2, résultat incertain, horodatage monotone, cohérence de lecture et version d'ordre
+- **classe**: NO RELEASE · compatible corrective · LIVE NOT RUN · CI NOT RUN · complément B non engagé
+
 ## delivery_id: DELIV-2026-11-28-ML5-PORTFOLIO-RELIABILITY-DEV

 - **date_local**: 2026-11-28 (Europe/Paris)
diff --git a/projects/sfia-studio-next/web/src/app/api/portfolio/route.ts b/projects/sfia-studio-next/web/src/app/api/portfolio/route.ts
index 03389df2..c7b469a3 100644
--- a/projects/sfia-studio-next/web/src/app/api/portfolio/route.ts
+++ b/projects/sfia-studio-next/web/src/app/api/portfolio/route.ts
@@ -27,19 +27,14 @@ export async function GET(req: Request) {
     });
     const portfolio = preparationsCursor
       ? await loadPortfolio(session.pilotId, { preparationsCursor })
-      : {
-          kind: board.counters.projects + board.counters.preparations === 0 ? "empty" : "ready",
-          projects: [],
-          openPreparations: board.counters.preparations,
-          preparations: { items: [], nextCursor: null },
-        };
+      : null;
     return json({
       session: {
         pilotId: session.pilotId,
         displayName: session.displayName,
         authMode: session.authMode,
       },
-      portfolio,
+      ...(portfolio ? { portfolio } : {}),
       board,
     });
   } catch (e) {
diff --git a/projects/sfia-studio-next/web/src/components/portfolio/PersonalPortfolio.tsx b/projects/sfia-studio-next/web/src/components/portfolio/PersonalPortfolio.tsx
index 87cbd813..11a0f8c0 100644
--- a/projects/sfia-studio-next/web/src/components/portfolio/PersonalPortfolio.tsx
+++ b/projects/sfia-studio-next/web/src/components/portfolio/PersonalPortfolio.tsx
@@ -13,6 +13,27 @@ type BoardResponse = {
   error?: string;
 };

+/**
+ * A refusal is settled. Any other outcome stays blocked until a reread returns
+ * the owner state. A lost acknowledgement stays unknown, and is never sent again.
+ */
+export function portfolioMutationFollowUp(input: {
+  outcome: "confirmed" | "refused" | "conflict" | "unknown";
+  reread: "succeeded" | "failed" | "not-attempted";
+}): { uncertain: boolean; retry: false; blockFurtherMutations: boolean } {
+  if (input.outcome === "refused") {
+    return { uncertain: false, retry: false, blockFurtherMutations: false };
+  }
+  if (input.reread === "succeeded") {
+    return { uncertain: false, retry: false, blockFurtherMutations: false };
+  }
+  return {
+    uncertain: input.outcome === "unknown",
+    retry: false,
+    blockFurtherMutations: true,
+  };
+}
+
 function formatCount(value: number | null): string {
   if (value === null) return "…";
   return value < 10 ? String(value).padStart(2, "0") : String(value);
@@ -35,12 +56,14 @@ export function PersonalPortfolio() {
   const router = useRouter();
   const params = useSearchParams();
   const busy = useRef(false);
+  const blocked = useRef(false);
   const draggedSpace = useRef("");
   const [board, setBoard] = useState<PersonalBoard | null>(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState("");
   const [notice, setNotice] = useState("");
   const [uncertain, setUncertain] = useState("");
+  const [held, setHeld] = useState(false);
   const [creating, setCreating] = useState(false);
   const [pending, setPending] = useState("");
   const [query, setQuery] = useState("");
@@ -62,28 +85,44 @@ export function PersonalPortfolio() {
     if (query.trim()) params.set("q", query.trim());
     if (expanded) params.set("expanded", "1");
     if (cursor) params.set("cursor", cursor);
-    const response = await fetch(`/api/portfolio?${params.toString()}`);
-    if (requestId !== requestSeq.current) return;
-    const body = (await response.json()) as BoardResponse;
-    if (requestId !== requestSeq.current) return;
-    if (response.status === 401) {
-      router.push("/login");
-      return;
-    }
-    if (!response.ok || !body.board) {
-      setError(body.error || "Lecture du portefeuille impossible.");
+    try {
+      const response = await fetch(`/api/portfolio?${params.toString()}`);
+      if (requestId !== requestSeq.current) return false;
+      let body: BoardResponse = {};
+      try {
+        body = (await response.json()) as BoardResponse;
+      } catch {
+        body = {};
+      }
+      if (requestId !== requestSeq.current) return false;
+      if (response.status === 401) {
+        router.push("/login");
+        return false;
+      }
+      if (!response.ok || !body.board) {
+        setError(body.error || "Lecture du portefeuille impossible.");
+        setLoading(false);
+        return false;
+      }
+      setBoard((prev) => {
+        if (!cursor || !prev) return body.board!;
+        const seen = new Set(prev.items.map((item) => `${item.spaceType}:${item.id}`));
+        const extra = body.board!.items.filter((item) => !seen.has(`${item.spaceType}:${item.id}`));
+        return { ...body.board!, items: [...prev.items, ...extra] };
+      });
+      notifyPortfolioChanged();
+      setError("");
+      blocked.current = false;
+      setHeld(false);
+      setUncertain("");
       setLoading(false);
-      return;
+      return true;
+    } catch {
+      if (requestId !== requestSeq.current) return false;
+      setError("Lecture du portefeuille impossible.");
+      setLoading(false);
+      return false;
     }
-    setBoard((prev) => {
-      if (!cursor || !prev) return body.board!;
-      const seen = new Set(prev.items.map((item) => `${item.spaceType}:${item.id}`));
-      const extra = body.board!.items.filter((item) => !seen.has(`${item.spaceType}:${item.id}`));
-      return { ...body.board!, items: [...prev.items, ...extra] };
-    });
-    notifyPortfolioChanged();
-    setError("");
-    setLoading(false);
   }, [expanded, filter, query, router, scope]);

   useEffect(() => {
@@ -105,8 +144,37 @@ export function PersonalPortfolio() {
     return () => clearTimeout(handle);
   }, [load]);

+  const loadRef = useRef(load);
+  loadRef.current = load;
+
+  function settleMutation(
+    outcome: "confirmed" | "refused" | "conflict" | "unknown",
+    reread: "succeeded" | "failed" | "not-attempted",
+    knownMessage: string,
+  ) {
+    const follow = portfolioMutationFollowUp({ outcome, reread });
+    blocked.current = follow.blockFurtherMutations;
+    setHeld(follow.blockFurtherMutations);
+    if (follow.uncertain) {
+      setUncertain(
+        reread === "failed"
+          ? "Résultat incertain. La relecture a échoué et l'action n'a pas été relancée."
+          : "Résultat incertain. L'action n'est pas relancée.",
+      );
+      return;
+    }
+    setUncertain("");
+    if (follow.blockFurtherMutations) {
+      setNotice(knownMessage);
+      return;
+    }
+    if (outcome === "unknown") {
+      setNotice("L'état a été relu. Vérifiez-le avant une nouvelle modification.");
+    }
+  }
+
   async function mutate(path: string, method: string, payload: unknown) {
-    if (busy.current) return;
+    if (busy.current || blocked.current) return;
     busy.current = true;
     setPending(path);
     setUncertain("");
@@ -119,23 +187,34 @@ export function PersonalPortfolio() {
       });
       const body = (await response.json().catch(() => ({}))) as { error?: string; message?: string };
       if (response.status === 409) {
-        setNotice(body.message || "Conflit : une autre modification a été enregistrée. Relisez avant de recommencer.");
-        await load();
+        const reread = await loadRef.current();
+        settleMutation(
+          "conflict",
+          reread ? "succeeded" : "failed",
+          body.message || "Conflit : une autre modification a été enregistrée. Relisez avant de recommencer.",
+        );
         return;
       }
       if (!response.ok) {
+        settleMutation("refused", "not-attempted", "");
         setNotice(body.message || body.error || "La modification n'a pas abouti.");
         return;
       }
       notifyPortfolioChanged();
-      await load();
+      const reread = await loadRef.current();
+      settleMutation(
+        "confirmed",
+        reread ? "succeeded" : "failed",
+        "La modification est enregistrée, mais le portefeuille n'a pas pu être relu.",
+      );
     } catch {
-      setUncertain("Résultat incertain. L'action n'est pas relancée.");
+      let reread = false;
       try {
-        await load();
+        reread = await loadRef.current();
       } catch {
-        setUncertain("Résultat incertain. La relecture a échoué et l'action n'a pas été relancée.");
+        reread = false;
       }
+      settleMutation("unknown", reread ? "succeeded" : "failed", "");
     } finally {
       busy.current = false;
       setPending("");
@@ -168,7 +247,7 @@ export function PersonalPortfolio() {
     return (
       <div className="personal-portfolio" role="alert" data-testid="portfolio-page">
         <p>Portefeuille indisponible.</p>
-        <button type="button" onClick={() => void load()}>Réessayer</button>
+        <button type="button" data-testid="portfolio-reread" onClick={() => void load()}>Réessayer</button>
       </div>
     );
   }
@@ -274,6 +353,11 @@ export function PersonalPortfolio() {
       {error ? <p role="alert">{error}</p> : null}
       {notice ? <p role="status" data-testid="portfolio-conflict">{notice}</p> : null}
       {uncertain ? <p role="status" data-testid="portfolio-creation-uncertainty">{uncertain}</p> : null}
+      {held ? (
+        <button type="button" data-testid="portfolio-reread" onClick={() => void load()}>
+          Relire le portefeuille
+        </button>
+      ) : null}
       {pending ? <p role="status">Modification en cours…</p> : null}

       <section className="personal-portfolio-synthesis" aria-label="Synthèse du portefeuille">
diff --git a/projects/sfia-studio-next/web/src/domains/identity/portfolio-organization.ts b/projects/sfia-studio-next/web/src/domains/identity/portfolio-organization.ts
index 392a212d..5ac953d4 100644
--- a/projects/sfia-studio-next/web/src/domains/identity/portfolio-organization.ts
+++ b/projects/sfia-studio-next/web/src/domains/identity/portfolio-organization.ts
@@ -84,15 +84,39 @@ export function destinationIndex(length: number, from: number, before: number):
   return from < before ? before - 1 : before;
 }

+const REMEMBERED_NAVIGATION_KEYS = 8;
+
+function rememberedNavigationKeys(stored: string | null): string[] {
+  if (!stored) return [];
+  return stored
+    .split(",")
+    .map((item) => item.trim())
+    .filter(Boolean)
+    .slice(-REMEMBERED_NAVIGATION_KEYS);
+}
+
+/** Accept a new opening, and reject a key already seen or an older key from the same tab. */
 export function acceptNavigationKey(stored: string | null, incoming: string): boolean {
   const key = incoming.trim();
-  if (!key || stored === key) return false;
+  if (!key) return false;
+  const remembered = rememberedNavigationKeys(stored);
+  if (remembered.includes(key)) return false;
   const next = parseNavigationKey(key);
-  const previous = stored ? parseNavigationKey(stored) : null;
-  if (next && previous && next.tab === previous.tab && next.seq <= previous.seq) return false;
+  if (!next) return !remembered.includes(key);
+  const sameTab = remembered
+    .map(parseNavigationKey)
+    .filter((item): item is { tab: string; seq: number } => item?.tab === next.tab);
+  if (sameTab.some((item) => item.seq >= next.seq)) return false;
   return true;
 }

+export function rememberNavigationKey(stored: string | null, incoming: string): string {
+  const key = incoming.trim();
+  const remembered = rememberedNavigationKeys(stored).filter((item) => item !== key);
+  remembered.push(key);
+  return remembered.slice(-REMEMBERED_NAVIGATION_KEYS).join(",");
+}
+
 function parseNavigationKey(value: string): { tab: string; seq: number } | null {
   const match = /^([0-9a-f-]{8,}):(\d+)$/i.exec(value);
   if (!match) return null;
@@ -165,15 +189,15 @@ function collectionSql(pilotId: string) {
 }

 function orderSql(sort: PortfolioSort) {
-  if (sort === "name") return sql`label ASC, id ASC`;
-  if (sort === "custom") return sql`custom_position ASC NULLS LAST, created_at DESC, id DESC`;
-  if (sort === "recent") return sql`activity_at DESC, id DESC`;
-  return sql`created_at DESC, id DESC`;
+  if (sort === "name") return sql`label ASC, space_type ASC, id ASC`;
+  if (sort === "custom") return sql`custom_position ASC NULLS LAST, created_at DESC, space_type ASC, id DESC`;
+  if (sort === "recent") return sql`activity_at DESC, space_type ASC, id DESC`;
+  return sql`created_at DESC, space_type ASC, id DESC`;
 }

 function keysetSql(cursor: ReadCursor) {
   if (cursor.sort === "name") {
-    return sql`AND (label, id) > (${cursor.label}, ${cursor.id})`;
+    return sql`AND (label, space_type, id) > (${cursor.label}, ${cursor.spaceType}, ${cursor.id})`;
   }
   if (cursor.sort === "custom") {
     const position = cursor.position ?? 2147483647;
@@ -181,14 +205,14 @@ function keysetSql(cursor: ReadCursor) {
       COALESCE(custom_position, 2147483647) > ${position}
       OR (
         COALESCE(custom_position, 2147483647) = ${position}
-        AND (created_at, id) < (${cursor.createdAt}::timestamptz, ${cursor.id})
+        AND (created_at, space_type, id) < (${cursor.createdAt}::timestamptz, ${cursor.spaceType}, ${cursor.id})
       )
     )`;
   }
   if (cursor.sort === "recent") {
-    return sql`AND (activity_at, id) < (${cursor.activityAt}::timestamptz, ${cursor.id})`;
+    return sql`AND (activity_at, space_type, id) < (${cursor.activityAt}::timestamptz, ${cursor.spaceType}, ${cursor.id})`;
   }
-  return sql`AND (created_at, id) < (${cursor.createdAt}::timestamptz, ${cursor.id})`;
+  return sql`AND (created_at, space_type, id) < (${cursor.createdAt}::timestamptz, ${cursor.spaceType}, ${cursor.id})`;
 }

 export async function loadPersonalBoard(
@@ -211,7 +235,9 @@ export async function loadPersonalBoard(
   const limit = preview ? PORTFOLIO_PREVIEW_LIMIT : PORTFOLIO_PAGE_SIZE;
   const needle = query ? `%${query.replace(/[\\%_]/g, (char) => `\\${char}`)}%` : null;

-  const pref = await sql<
+  return sql.begin(async (tx) => {
+  await tx`SET TRANSACTION ISOLATION LEVEL REPEATABLE READ`;
+  const pref = await tx<
     { view: string; sort_mode: string | null; organization_version: number }[]
   >`
     SELECT view, sort_mode, organization_version
@@ -220,7 +246,7 @@ export async function loadPersonalBoard(
   `;
   const storedSort = pref[0]?.sort_mode ?? null;
   const sortExplicit = storedSort !== null && SORTS.has(storedSort as PortfolioSort);
-  const signal = await sql<{ present: boolean }[]>`
+  const signal = await tx<{ present: boolean }[]>`
     SELECT EXISTS (
       SELECT 1 FROM (${collectionSql(pilotId)}) spaces
       WHERE archived_at IS NULL AND last_opened_at IS NOT NULL
@@ -232,7 +258,7 @@ export async function loadPersonalBoard(
       ? "recent"
       : "created";

-  const counts = await sql<
+  const counts = await tx<
     { projects: number; preparations: number; favorites: number }[]
   >`
     SELECT
@@ -261,18 +287,18 @@ export async function loadPersonalBoard(
       httpStatus: 400,
     });
   }
-  const grouped = await sql<{ space_type: SpaceType; n: number }[]>`
+  const grouped = await tx<{ space_type: SpaceType; n: number }[]>`
     SELECT space_type, count(*)::int AS n
     FROM (${collectionSql(pilotId)}) spaces
     WHERE ${scopeSql} ${filterSql} ${searchSql}
     GROUP BY space_type
   `;
-  const filtered = await sql<{ n: number }[]>`
+  const filtered = await tx<{ n: number }[]>`
     SELECT count(*)::int AS n
     FROM (${collectionSql(pilotId)}) spaces
     WHERE ${scopeSql} ${filterSql} ${searchSql}
   `;
-  const page = await sql<Row[]>`
+  const page = await tx<Row[]>`
     SELECT
       space_type, id, label,
       created_text AS created_at,
@@ -287,7 +313,7 @@ export async function loadPersonalBoard(
   `;
   const resumeRows =
     scope === "current"
-      ? await sql<Row[]>`
+      ? await tx<Row[]>`
           SELECT
             space_type, id, label,
             created_text AS created_at,
@@ -341,6 +367,7 @@ export async function loadPersonalBoard(
     filter,
     query,
   };
+  });
 }

 function encodeCursor(value: ReadCursor): string {
@@ -353,6 +380,9 @@ function decodeCursor(raw: string): ReadCursor {
     if (!parsed.sort || !parsed.filter || !parsed.scope || !parsed.spaceType || !parsed.id || !parsed.createdAt) {
       throw new Error("shape");
     }
+    if (parsed.spaceType !== "project" && parsed.spaceType !== "preparation") throw new Error("shape");
+    if (!isPortfolioTimestamp(parsed.createdAt)) throw new Error("shape");
+    if (parsed.activityAt && !isPortfolioTimestamp(parsed.activityAt)) throw new Error("shape");
     return {
       sort: parsed.sort,
       filter: parsed.filter,
@@ -370,10 +400,62 @@ function decodeCursor(raw: string): ReadCursor {
   }
 }

+function isPortfolioTimestamp(value: string): boolean {
+  return /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z$/.test(value) && !Number.isNaN(Date.parse(value));
+}
+
 async function lockPilot(tx: typeof sql, pilotId: string) {
   await tx`SELECT pg_advisory_xact_lock(hashtext(${pilotId}), hashtext(${PILOT_LOCK}))`;
 }

+/** Same preparation row lock used by project creation, taken after the personal lock. */
+async function lockSpace(tx: typeof sql, pilotId: string, spaceType: SpaceType, spaceId: string) {
+  if (spaceType === "project") {
+    await tx`
+      SELECT id FROM projects
+      WHERE id = ${spaceId} AND owner_pilot_id = ${pilotId}
+      FOR UPDATE
+    `;
+    return;
+  }
+  await tx`
+    SELECT id FROM preparations
+    WHERE id = ${spaceId} AND owner_pilot_id = ${pilotId}
+    FOR UPDATE
+  `;
+}
+
+async function lockOpenPreparations(tx: typeof sql, pilotId: string) {
+  await tx`
+    SELECT id FROM preparations
+    WHERE owner_pilot_id = ${pilotId} AND status = 'OPEN'
+    ORDER BY id
+    FOR UPDATE
+  `;
+}
+
+async function bumpOrganizationVersion(tx: typeof sql, pilotId: string) {
+  const current = await tx<{ organization_version: number }[]>`
+    SELECT organization_version FROM pilot_portfolio_preferences
+    WHERE owner_pilot_id = ${pilotId}
+    FOR UPDATE
+  `;
+  const next = (current[0]?.organization_version ?? 0) + 1;
+  if (!current[0]) {
+    await tx`
+      INSERT INTO pilot_portfolio_preferences (owner_pilot_id, organization_version)
+      VALUES (${pilotId}, ${next})
+    `;
+  } else {
+    await tx`
+      UPDATE pilot_portfolio_preferences
+      SET organization_version = ${next}, updated_at = clock_timestamp()
+      WHERE owner_pilot_id = ${pilotId}
+    `;
+  }
+  return next;
+}
+
 async function assertEligible(tx: typeof sql, pilotId: string, spaceType: SpaceType, spaceId: string) {
   if (spaceType === "project") {
     const rows = await tx<{ id: string }[]>`
@@ -445,6 +527,7 @@ export async function setSpaceFavorite(
 ) {
   return sql.begin(async (tx) => {
     await lockPilot(tx, pilotId);
+    await lockSpace(tx, pilotId, spaceType, spaceId);
     await assertEligible(tx, pilotId, spaceType, spaceId);
     const current = await tx<{ row_version: number }[]>`
       SELECT row_version FROM pilot_space_organization
@@ -479,9 +562,10 @@ export async function setSpaceArchive(
   }
   return sql.begin(async (tx) => {
     await lockPilot(tx, pilotId);
+    await lockSpace(tx, pilotId, spaceType, spaceId);
     await assertEligible(tx, pilotId, spaceType, spaceId);
-    const current = await tx<{ row_version: number; custom_position: number | null }[]>`
-      SELECT row_version, custom_position FROM pilot_space_organization
+    const current = await tx<{ row_version: number; custom_position: number | null; archived_at: string | null }[]>`
+      SELECT row_version, custom_position, archived_at FROM pilot_space_organization
       WHERE owner_pilot_id = ${pilotId} AND space_type = ${spaceType} AND space_id = ${spaceId}
       FOR UPDATE
     `;
@@ -489,6 +573,9 @@ export async function setSpaceArchive(
     if (version !== input.expectedVersion) {
       throw new StudioError("CONFLICT", "L'organisation de cet espace a changé.", { httpStatus: 409 });
     }
+    if (current[0] && Boolean(current[0].archived_at) === input.archived) {
+      return { rowVersion: version, archived: input.archived };
+    }
     const next = version + 1;
     if (!input.archived && current[0]?.custom_position != null) {
       await tx`
@@ -512,9 +599,10 @@ export async function setSpaceArchive(
       )
       ON CONFLICT (owner_pilot_id, space_type, space_id)
       DO UPDATE SET
-        archived_at = CASE WHEN ${input.archived} THEN now() ELSE NULL END,
+        archived_at = CASE WHEN ${input.archived} THEN clock_timestamp() ELSE NULL END,
         row_version = ${next}
     `;
+    await bumpOrganizationVersion(tx, pilotId);
     return { rowVersion: next, archived: input.archived };
   });
 }
@@ -529,6 +617,7 @@ export async function recordSpaceOpened(
   if (!key) throw new StudioError("INVALID_REQUEST", "Clé de navigation absente.", { httpStatus: 400 });
   return sql.begin(async (tx) => {
     await lockPilot(tx, pilotId);
+    await lockSpace(tx, pilotId, spaceType, spaceId);
     await assertEligible(tx, pilotId, spaceType, spaceId);
     const current = await tx<{ archived_at: string | null; navigation_key: string | null }[]>`
       SELECT archived_at, navigation_key FROM pilot_space_organization
@@ -539,13 +628,19 @@ export async function recordSpaceOpened(
     if (!acceptNavigationKey(current[0]?.navigation_key ?? null, key)) {
       return { applied: false, reason: "duplicate" };
     }
+    const remembered = rememberNavigationKey(current[0]?.navigation_key ?? null, key);
     await tx`
       INSERT INTO pilot_space_organization (
         owner_pilot_id, space_type, space_id, last_opened_at, navigation_key
       )
-      VALUES (${pilotId}, ${spaceType}, ${spaceId}, now(), ${key})
+      VALUES (${pilotId}, ${spaceType}, ${spaceId}, clock_timestamp(), ${remembered})
       ON CONFLICT (owner_pilot_id, space_type, space_id)
-      DO UPDATE SET last_opened_at = now(), navigation_key = ${key}
+      DO UPDATE SET
+        last_opened_at = GREATEST(
+          COALESCE(pilot_space_organization.last_opened_at, clock_timestamp()),
+          clock_timestamp()
+        ),
+        navigation_key = ${remembered}
       WHERE pilot_space_organization.archived_at IS NULL
     `;
     return { applied: true };
@@ -574,9 +669,11 @@ export async function movePersonalSpace(
   }
   return sql.begin(async (tx) => {
     await lockPilot(tx, pilotId);
+    await lockSpace(tx, pilotId, input.spaceType, input.spaceId);
+    await lockOpenPreparations(tx, pilotId);
     await assertEligible(tx, pilotId, input.spaceType, input.spaceId);
-    const pref = await tx<{ organization_version: number }[]>`
-      SELECT organization_version FROM pilot_portfolio_preferences
+    const pref = await tx<{ organization_version: number; sort_mode: string | null }[]>`
+      SELECT organization_version, sort_mode FROM pilot_portfolio_preferences
       WHERE owner_pilot_id = ${pilotId}
       FOR UPDATE
     `;
@@ -584,6 +681,11 @@ export async function movePersonalSpace(
     if (version !== input.expectedVersion) {
       throw new StudioError("CONFLICT", "L'ordre a changé. Relisez le portefeuille.", { httpStatus: 409 });
     }
+    if (pref[0]?.sort_mode !== "custom") {
+      throw new StudioError("CONFLICT", "L'ordre personnalisé n'est pas le tri enregistré.", {
+        httpStatus: 409,
+      });
+    }
     const rows = await tx<Row[]>`
       SELECT space_type, id, label, created_text AS created_at, opened_text AS last_opened_at,
              activity_text AS activity_at, favorite, archived_at, custom_position, row_version
diff --git a/projects/sfia-studio-next/web/tests/integration/portfolio-organization.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/portfolio-organization.pg.test.ts
index 53ae18c2..50554458 100644
--- a/projects/sfia-studio-next/web/tests/integration/portfolio-organization.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/portfolio-organization.pg.test.ts
@@ -121,10 +121,11 @@ describe("personal portfolio organization (PG)", () => {
       { id: first, ownerPilotId: owner, name: "Alpha" },
       { id: second, ownerPilotId: owner, name: "Bravo" },
     ]);
+    const prefs = await updatePortfolioPreferences(owner, { sort: "custom", expectedVersion: 0 });
     const moved = await movePersonalSpace(owner, {
       spaceType: "project",
       spaceId: second,
-      expectedVersion: 0,
+      expectedVersion: prefs.version,
       direction: "up",
       context: { filter: "all", query: "", scope: "current" },
     });
@@ -218,6 +219,16 @@ describe("personal portfolio organization (PG)", () => {
         spaceType: "project",
         spaceId: bravo,
         expectedVersion: 0,
+        direction: "up",
+        context: { filter: "all", query: "", scope: "current" },
+      }),
+    ).rejects.toMatchObject({ httpStatus: 409 });
+    const prefs = await updatePortfolioPreferences(owner, { sort: "custom", expectedVersion: 0 });
+    await expect(
+      movePersonalSpace(owner, {
+        spaceType: "project",
+        spaceId: bravo,
+        expectedVersion: prefs.version,
         beforeSpaceId: "missing",
         beforeSpaceType: "project",
         context: { filter: "all", query: "", scope: "current" },
@@ -227,5 +238,150 @@ describe("personal portfolio organization (PG)", () => {
     expect(board.groups.project).toBe(2);
     expect(board.groups.preparation).toBe(1);
     expect(board.filteredTotal).toBe(3);
+    expect(board.groups.project + board.groups.preparation).toBe(board.filteredTotal);
+  });
+
+  it("refuses a favorite once the preparation row is attached", async () => {
+    const owner = await seedPilot("PF-boundary");
+    const prep = newId("prep");
+    const projectId = newId("proj");
+    await db.insert(preparations).values({
+      id: prep,
+      ownerPilotId: owner,
+      status: "OPEN",
+      previewName: "Bientôt rattachée",
+      previewSummary: "",
+    });
+    await db.insert(projects).values({ id: projectId, ownerPilotId: owner, name: "Projet issu" });
+    let releaseHold: () => void = () => undefined;
+    const hold = new Promise<void>((resolve) => {
+      releaseHold = resolve;
+    });
+    let markReady: () => void = () => undefined;
+    const ready = new Promise<void>((resolve) => {
+      markReady = resolve;
+    });
+    const attachment = sql.begin(async (tx) => {
+      await tx`SELECT pg_advisory_xact_lock(hashtext(${owner}), hashtext(${"sfia:d2:project-name"}))`;
+      await tx`
+        SELECT id FROM preparations
+        WHERE id = ${prep} AND owner_pilot_id = ${owner}
+        FOR UPDATE
+      `;
+      markReady();
+      await hold;
+      await tx`
+        INSERT INTO preparation_project_links (preparation_id, project_id)
+        VALUES (${prep}, ${projectId})
+      `;
+    });
+    await ready;
+    const favorite = setSpaceFavorite(owner, "preparation", prep, {
+      favorite: true,
+      expectedVersion: 0,
+    });
+    await new Promise((resolve) => setTimeout(resolve, 150));
+    releaseHold();
+    await attachment;
+    await expect(favorite).rejects.toMatchObject({ httpStatus: 404 });
+    const stored = await sql<{ n: string }[]>`
+      SELECT count(*)::text AS n FROM pilot_space_organization
+      WHERE owner_pilot_id = ${owner} AND space_id = ${prep}
+    `;
+    expect(stored[0]?.n).toBe("0");
+    const board = await loadPersonalBoard(owner, { preview: false });
+    expect(board.items.some((item) => item.id === prep)).toBe(false);
+    expect(board.counters.favorites).toBe(0);
+  });
+
+  it("does not move the opening time backwards and ignores a late replay", async () => {
+    const owner = await seedPilot("PF-open");
+    const projectId = newId("proj");
+    await db.insert(projects).values({ id: projectId, ownerPilotId: owner, name: "Reprise" });
+    const tab = "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee";
+    const other = "bbbbbbbb-bbbb-cccc-dddd-eeeeeeeeeeee";
+    expect((await recordSpaceOpened(owner, "project", projectId, `${tab}:1`)).applied).toBe(true);
+    await sql`
+      UPDATE pilot_space_organization
+      SET last_opened_at = clock_timestamp() + interval '2 hours'
+      WHERE owner_pilot_id = ${owner} AND space_id = ${projectId}
+    `;
+    const ahead = await sql<{ opened: string }[]>`
+      SELECT last_opened_at::text AS opened FROM pilot_space_organization
+      WHERE owner_pilot_id = ${owner} AND space_id = ${projectId}
+    `;
+    expect((await recordSpaceOpened(owner, "project", projectId, `${other}:1`)).applied).toBe(true);
+    const afterOther = await sql<{ opened: string; navigation_key: string }[]>`
+      SELECT last_opened_at::text AS opened, navigation_key
+      FROM pilot_space_organization
+      WHERE owner_pilot_id = ${owner} AND space_id = ${projectId}
+    `;
+    expect(afterOther[0]?.opened >= (ahead[0]?.opened || "")).toBe(true);
+    expect(afterOther[0]?.navigation_key).toContain(`${tab}:1`);
+    const replay = await recordSpaceOpened(owner, "project", projectId, `${tab}:1`);
+    expect(replay.applied).toBe(false);
+    const afterReplay = await sql<{ opened: string }[]>`
+      SELECT last_opened_at::text AS opened FROM pilot_space_organization
+      WHERE owner_pilot_id = ${owner} AND space_id = ${projectId}
+    `;
+    expect(afterReplay[0]?.opened).toBe(afterOther[0]?.opened);
+  });
+
+  it("rejects a stale order after a restore and does not shift twice", async () => {
+    const owner = await seedPilot("PF-restore");
+    const first = newId("proj");
+    const second = newId("proj");
+    await db.insert(projects).values([
+      { id: first, ownerPilotId: owner, name: "Un" },
+      { id: second, ownerPilotId: owner, name: "Deux" },
+    ]);
+    const prefs = await updatePortfolioPreferences(owner, { sort: "custom", expectedVersion: 0 });
+    const moved = await movePersonalSpace(owner, {
+      spaceType: "project",
+      spaceId: second,
+      expectedVersion: prefs.version,
+      direction: "up",
+      context: { filter: "all", query: "", scope: "current" },
+    });
+    const before = await loadPersonalBoard(owner, { preview: false });
+    const archived = await setSpaceArchive(owner, "project", first, {
+      archived: true,
+      expectedVersion: before.items.find((item) => item.id === first)?.rowVersion ?? 0,
+      confirm: true,
+    });
+    const restored = await setSpaceArchive(owner, "project", first, {
+      archived: false,
+      expectedVersion: archived.rowVersion,
+      confirm: true,
+    });
+    const positions = await sql<{ id: string; custom_position: number }[]>`
+      SELECT space_id AS id, custom_position FROM pilot_space_organization
+      WHERE owner_pilot_id = ${owner}
+      ORDER BY custom_position
+    `;
+    const repeated = await setSpaceArchive(owner, "project", first, {
+      archived: false,
+      expectedVersion: restored.rowVersion,
+      confirm: true,
+    });
+    expect(repeated.rowVersion).toBe(restored.rowVersion);
+    const again = await sql<{ id: string; custom_position: number }[]>`
+      SELECT space_id AS id, custom_position FROM pilot_space_organization
+      WHERE owner_pilot_id = ${owner}
+      ORDER BY custom_position
+    `;
+    expect(again).toEqual(positions);
+    await expect(
+      movePersonalSpace(owner, {
+        spaceType: "project",
+        spaceId: second,
+        expectedVersion: moved.version,
+        direction: "down",
+        context: { filter: "all", query: "", scope: "current" },
+      }),
+    ).rejects.toMatchObject({ httpStatus: 409 });
+    await expect(loadPersonalBoard(owner, { cursor: "not-a-cursor", preview: false })).rejects.toMatchObject({
+      httpStatus: 400,
+    });
   });
 });
diff --git a/projects/sfia-studio-next/web/tests/unit/portfolio-organization.test.ts b/projects/sfia-studio-next/web/tests/unit/portfolio-organization.test.ts
index 291f889d..194a280c 100644
--- a/projects/sfia-studio-next/web/tests/unit/portfolio-organization.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/portfolio-organization.test.ts
@@ -1,5 +1,6 @@
 import { describe, expect, it } from "vitest";
-import { acceptNavigationKey, destinationIndex } from "@/domains/identity/portfolio-organization";
+import { acceptNavigationKey, destinationIndex, rememberNavigationKey } from "@/domains/identity/portfolio-organization";
+import { portfolioMutationFollowUp } from "@/components/portfolio/PersonalPortfolio";

 describe("portfolio organization rules", () => {
   it("places an item before its target in either direction", () => {
@@ -16,5 +17,29 @@ describe("portfolio organization rules", () => {
     expect(acceptNavigationKey(`${tab}:2`, `${tab}:1`)).toBe(false);
     expect(acceptNavigationKey(`${tab}:2`, `${tab}:3`)).toBe(true);
     expect(acceptNavigationKey(`${tab}:2`, "bbbbbbbb-bbbb-cccc-dddd-eeeeeeeeeeee:1")).toBe(true);
+    const other = "bbbbbbbb-bbbb-cccc-dddd-eeeeeeeeeeee";
+    const remembered = rememberNavigationKey(rememberNavigationKey(null, `${tab}:1`), `${other}:1`);
+    expect(acceptNavigationKey(remembered, `${tab}:1`)).toBe(false);
+    expect(acceptNavigationKey(remembered, `${other}:2`)).toBe(true);
+  });
+
+  it("keeps an unknown mutation blocked until a reread succeeds, without retrying it", () => {
+    expect(portfolioMutationFollowUp({ outcome: "unknown", reread: "failed" })).toEqual({
+      uncertain: true,
+      retry: false,
+      blockFurtherMutations: true,
+    });
+    expect(portfolioMutationFollowUp({ outcome: "unknown", reread: "succeeded" })).toEqual({
+      uncertain: false,
+      retry: false,
+      blockFurtherMutations: false,
+    });
+    expect(portfolioMutationFollowUp({ outcome: "confirmed", reread: "failed" })).toEqual({
+      uncertain: false,
+      retry: false,
+      blockFurtherMutations: true,
+    });
+    expect(portfolioMutationFollowUp({ outcome: "refused", reread: "not-attempted" }).retry).toBe(false);
+    expect(portfolioMutationFollowUp({ outcome: "refused", reread: "not-attempted" }).uncertain).toBe(false);
   });
 });
```
